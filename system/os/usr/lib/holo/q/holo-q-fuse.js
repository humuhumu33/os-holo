// holo-q-fuse.js — Q.fuse: a serverless COMPOUND model (ADR-0098). The "compound beats components"
// idea (OpenRouter Fusion / pi-fusion) brought onto the κ substrate: run a PANEL of small specialists
// on the SAME prompt in parallel, have a JUDGE compare them (consensus · contradictions · unique
// insights · blind spots), then a SYNTHESIZER write ONE new answer none of the panel produced. The
// lift is the synthesis step, and it is model-size-AGNOSTIC — a diverse panel of tiny on-device minds,
// judged and synthesized, beats any one of them. This is NOT "Fable-5 in a tab"; it is "compound beats
// components on the WASM floor" (be honest — see describeFuse()).
//
// WHY this is cheap where OpenRouter is expensive: every stage rides the existing Holo Q fabric
// (holo-q-fabric.js) — a content-addressed κ-memo over the durable OS κ-store. Each panel leg, the
// judge, and the synthesis is sealed to a κ and O(1)-replayed on a repeat. An EXACT repeat fusion runs
// zero models; a NEAR-repeat (swap one panel member) re-runs only the changed leg + judge + synthesis,
// because the two unchanged legs are cache hits. OpenRouter re-pays 5× every call and cannot reproduce
// a fusion. We pay once, address it, and seal ONE re-derivable holoq:FusionReceipt over the whole DAG.
//
// THE SEAMS IT REUSES (no new transport, no new gate — Law L4): the fabric for streaming+memo; the
// receipt canonicalization (holo-q-receipt.mjs address/jcs) for the sealed FusionReceipt; any provider
// with a generate() is a panel member — INCLUDING a remote-broker-backed one (ADR-0090), so a single
// panel slot can be a governed frontier model behind a per-host grant. That hybrid is a PER-CALL opt-in
// (a member flagged remote), never the default; the default panel is 100% serverless. DOM-free,
// dependency-free, deps injected → Node-witnessed.

import { createFabric } from "./holo-q-fabric.js";
import { address, responseKappa } from "./holo-q-receipt.mjs";

const UOR_CONTEXT = [
  "https://www.w3.org/ns/did/v1",
  "https://w3id.org/security/data-integrity/v2",
  { schema: "https://schema.org/", prov: "http://www.w3.org/ns/prov#", dcterms: "http://purl.org/dc/terms/",
    rel: "schema:additionalType", links: { "@id": "schema:hasPart", "@container": "@set" } },
];
const HOLOQ = { holoq: "https://hologram.os/ns/q#" };
const memberId = (m, i) => (m && m.id) || ("member-" + i);

// ── PURE prompt builders (witnessable; the memo key changes with the answers, so reuse is automatic) ──
// The panel answers and the judge analysis are embedded as TEXT into the next stage's prompt, so each
// stage's κ is a deterministic function of everything upstream — exactly what makes near-repeat cheap.
export function buildJudgePrompt(input, answers = []) {
  const block = answers.map((a, i) => `[${i + 1}] ${String(a.value || "").trim()}`).join("\n\n");
  return [
    "You are the JUDGE of a panel deliberation. Do NOT pick a winner — compare.",
    "",
    "QUESTION:",
    String(input || "").trim(),
    "",
    `PANEL ANSWERS (${answers.length}):`,
    block,
    "",
    "Analyse across four dimensions, briefly:",
    "- CONSENSUS: points more than one member agrees on (high confidence).",
    "- CONTRADICTIONS: where members disagree — name which member said what.",
    "- UNIQUE INSIGHTS: a point only one member raised that looks right.",
    "- BLIND SPOTS: anything the question needs that NO member addressed.",
  ].join("\n");
}
export function buildSynthPrompt(input, answers = [], judgeText = "") {
  const block = answers.map((a, i) => `[${i + 1}] ${String(a.value || "").trim()}`).join("\n\n");
  return [
    "You are the SYNTHESIZER. Write the BEST possible final answer — a NEW answer, not a copy of any one.",
    "",
    "QUESTION:",
    String(input || "").trim(),
    "",
    `PANEL ANSWERS (${answers.length}):`,
    block,
    "",
    "JUDGE'S ANALYSIS:",
    String(judgeText || "").trim(),
    "",
    "Combine the strongest reasoning and facts from the panel, resolve the contradictions the judge",
    "flagged, and fill the blind spots. Output only the final answer.",
  ].join("\n");
}

// ── the FusionReceipt — ONE self-verifying PROV-O object over the whole DAG (re-derivable, Law L5) ──
// prov:used = every panel κ (tagged with its member) + the judge κ; prov:generated = the synthesis κ.
// A single altered byte (a panel κ, the judge κ, the conscience verdict) changes the address → refused.
export async function mintFusionReceipt({
  inputK, panel = [], judgeK, synthK, panelSize, tier = "local",
  startedAt, endedAt, conscience = {}, app = null,
} = {}) {
  const body = {
    "@context": [...UOR_CONTEXT, HOLOQ],
    "@type": ["prov:Activity", "holoq:FusionReceipt"],
    "prov:used": [
      ...panel.map((p) => ({ "@id": p.kappa, "holoq:role": "panel", "holoq:member": p.id })),
      { "@id": judgeK, "holoq:role": "judge" },
    ],
    "prov:generated": { "@id": synthK },
    "holoq:tier": tier,                                  // "local" (100% serverless) | "hybrid" (a remote slot)
    "holoq:panelSize": panelSize,
    "holoq:input": { "@id": inputK },
    "prov:startedAtTime": startedAt,
    "prov:endedAtTime": endedAt,
    "holoq:conscience": { "holoq:outcome": conscience.outcome || "accept", "holoq:caveats": conscience.caveats || [], "holoq:sealed": conscience.sealed !== false },
    ...(app ? { "prov:wasAssociatedWith": app } : {}),
  };
  return { id: await address(body), body };
}
export { verifyReceipt } from "./holo-q-receipt.mjs";   // re-export: Law L5 re-derivation for FusionReceipts too

// ── the fuse engine ──────────────────────────────────────────────────────────────────────────────────
// createFuse({ fabric?, panel?, judge?, synth?, clock? }) — `fabric` is a createFabric() instance (omit
// for a private one); `panel` is an array of generative providers ({ id, generate }); `judge`/`synth`
// are single providers (default: judge = first panel member, synth = the active/strongest brain). A
// panel member may carry `remote:true` to mark a governed frontier slot (ADR-0090) → tier becomes
// "hybrid" and the fusion is no longer 100% serverless (honest, per-call).
export function createFuse({ fabric = null, panel = [], judge = null, synth = null, clock = null } = {}) {
  const fab = fabric || createFabric();
  const now = clock || (() => new Date().toISOString());
  let _panel = panel, _judge = judge, _synth = synth;

  function configure({ panel: p, judge: j, synth: s } = {}) {
    if (Array.isArray(p)) _panel = p;
    if (j !== undefined) _judge = j;
    if (s !== undefined) _synth = s;
    return { panelSize: _panel.length, judge: (_judge && _judge.id) || (_panel[0] && _panel[0].id) || null, synth: (_synth && _synth.id) || null };
  }

  // run ONE provider over the fabric to completion, forwarding live deltas to onDelta (stage, id, e).
  async function leg(provider, task, input, { params, signal, onDelta, stage, id } = {}) {
    let last = null;
    for await (const e of fab.run({ provider, task, input, params, signal })) {
      if (e.phase === "delta" && onDelta) onDelta({ stage, id, ...e });
      if (e.phase === "final") last = e;
    }
    return last || { value: "", kappa: null, cached: false, ms: 0 };
  }

  // fuse(input, opts) → { answer, kappa, panel:[…], judge:{…}, receipt, tier, cached, ms, stats }
  //   opts.onEvent({ stage:"panel"|"judge"|"synth", id?, phase, delta?, partial?, value?, kappa?, cached })
  //   streams the WHOLE deliberation live — N panel cards filling in parallel, then judge, then synthesis.
  async function fuse(input, { params = {}, panel = _panel, judge = _judge, synth = _synth, onEvent = null, signal = null, app = null, conscience = null } = {}) {
    const question = typeof input === "string" ? input : (input && (input.text || input.prompt || input.input)) || "";
    if (!question) return { ok: false, refused: true, reason: "Q.fuse: an input (text) is required" };
    if (!panel || panel.length < 2) return { ok: false, refused: true, reason: "Q.fuse: a panel needs ≥2 members (diversity is the point)" };
    const startedAt = now();
    const t0 = (typeof performance !== "undefined" ? performance.now() : Date.now());

    // 1 · PANEL — N members on the SAME prompt, IN PARALLEL. Each leg is independently κ-memoized, so an
    //     unchanged member is an O(1) hit and only changed members recompute (the near-repeat win).
    const answers = await Promise.all(panel.map((m, i) => {
      const id = memberId(m, i);
      return leg(m, "fuse-panel", question, { params, signal, onDelta: (e) => onEvent && onEvent({ stage: "panel", id, ...e }), stage: "panel", id })
        .then((r) => ({ id, value: r.value, kappa: r.kappa, cached: r.cached, ms: r.ms }));
    }));

    // 2 · JUDGE — compare the answers (default judge = first panel member if none set).
    const judgeProvider = judge || panel[0];
    const judgePrompt = buildJudgePrompt(question, answers);
    const j = await leg(judgeProvider, "fuse-judge", judgePrompt, { params, signal, onDelta: (e) => onEvent && onEvent({ stage: "judge", ...e }), stage: "judge" });

    // 3 · SYNTHESIZE — write the ONE new answer (default synth = the strongest brain, else the judge).
    const synthProvider = synth || judgeProvider;
    const synthPrompt = buildSynthPrompt(question, answers, j.value);
    const s = await leg(synthProvider, "fuse-synth", synthPrompt, { params, signal, onDelta: (e) => onEvent && onEvent({ stage: "synth", ...e }), stage: "synth" });

    // 4 · RECEIPT — seal ONE re-derivable FusionReceipt over the whole DAG.
    const endedAt = now();
    const tier = panel.some((m) => m && m.remote) ? "hybrid" : "local";
    const inputK = await responseKappa(question);
    const verdict = (conscience && typeof conscience.evaluate === "function")
      ? conscience.evaluate({ verb: "q.fuse", intent: question }) : { outcome: "accept", caveats: [], sealed: true };
    const receipt = await mintFusionReceipt({
      inputK, panel: answers, judgeK: j.kappa, synthK: s.kappa, panelSize: answers.length,
      tier, startedAt, endedAt, conscience: verdict, app,
    });
    const ms = (typeof performance !== "undefined" ? performance.now() : Date.now()) - t0;
    // a fusion is "cached" only when EVERY leg was a hit (an exact repeat — zero models ran). Coerce to a
    // real boolean: the leg `cached` flags are "hot"/"durable"/false, and && would otherwise return a string.
    const cached = answers.every((a) => !!a.cached) && !!j.cached && !!s.cached;

    return {
      ok: true, answer: s.value, kappa: s.kappa, tier, cached, ms,
      panel: answers, judge: { value: j.value, kappa: j.kappa, cached: j.cached },
      receipt, stats: fab.stats(),
    };
  }

  return { fuse, configure, fabric: fab, describe: describeFuse };
}

// describeFuse() — the honest contract: what the lift IS, what it is NOT, where the hybrid comes in.
export function describeFuse() {
  return {
    what: "a serverless COMPOUND model — panel (N small specialists, parallel) → judge (compare) → synthesize (one new answer)",
    lift: "the synthesis step is model-size-agnostic; a diverse panel of tiny on-device minds, judged + synthesized, beats any one of them",
    edge: "every stage rides the κ-memo fabric → exact repeat is O(1) (zero models); near-repeat re-runs only the changed leg + judge + synthesis",
    receipt: "ONE re-derivable holoq:FusionReceipt seals the whole DAG (panel κs + judge κ → synthesis κ); a tampered byte breaks the address (Law L5)",
    diversity: "panel members should span model FAMILIES, not just sizes — redundancy makes synthesis collapse to a vote",
    hybrid: "a panel member flagged remote:true is a governed frontier slot (ADR-0090) → tier 'hybrid', a PER-CALL opt-in, not the default",
    honest: "this is 'compound beats components on the WASM floor', NOT 'Fable-5 in a tab'; it lifts above the best small model, it does not reach frontier",
    limits: "no per-token streaming seal (κ seals at leg completion); compute does not fan out across the mesh (single-tab); panel runs where Q runs",
  };
}

export default { createFuse, buildJudgePrompt, buildSynthPrompt, mintFusionReceipt, describeFuse };
