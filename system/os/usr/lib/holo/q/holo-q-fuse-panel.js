// holo-q-fuse-panel.js — the DEFAULT PANEL for Q.fuse (ADR-0098): turn the registry's brains
// (ADR-0096) into the diverse panel + judge + synthesizer the fusion engine consumes. It resolves the
// one honest tension in serverless fusion: real MODEL diversity (3 distinct models) is multi-GB RAM and
// device-gated, while the any-browser warm set is ONE brain. So this ships TWO modes, labelled, never
// faked:
//
//   PERSONA mode (the any-browser DEFAULT) — one warm brain, N members differing by REASONING LENS
//     (concise · first-principles · skeptic). Diverse reasoning PATHS, not diverse weights — the
//     self-consistency idea, and the synthesis step still lifts above any single greedy pass. Labelled
//     diversity:"persona" so nobody mistakes it for model diversity.
//   MODEL mode (the upgrade) — when the host supplies ≥2 distinct loaded samplers (RAM permitting), each
//     registry model becomes a panel member. Labelled diversity:"model".
//
// A sampler is the on-device generative seam shape (holo-q-codegen.js / holo-voice-llm.mjs):
// `(messages, opts) → async-iterable of token deltas`. This module ADAPTS that into the fabric's
// provider contract `{ id, generate(stringInput, opts) }` so panel members ride the κ-memo fabric like
// any specialist. Pure assembly + a thin adapter → the selection/diversity/mode logic is Node-witnessed;
// the heavy model load is the host's job (lazy, exactly as the registry prescribes). DOM-free, no deps.

// ── the reasoning lenses (PERSONA mode) — distinct enough that synthesis beats a vote, not redundant ──
export const PANEL_PERSONAS = [
  { id: "concise",          system: "Answer concisely. Lead with the conclusion, then the single strongest reason." },
  { id: "first-principles", system: "Reason from first principles. Question the framing, strip to essentials, then answer plainly." },
  { id: "skeptic",          system: "Be adversarial. Surface risks, edge cases, and exactly where a confident answer could be wrong." },
];
export const JUDGE_PERSONA = { id: "judge", system: "You compare answers impartially and NEVER pick a winner — you analyse agreement, conflict, and gaps." };
export const SYNTH_PERSONA = { id: "synth", system: "You write ONE best answer by synthesising a panel's strongest reasoning with a judge's analysis." };

// ── the registry's ideal MODEL panel (ADR-0096) — diversity across FAMILIES/SIZES, not redundancy ────
export const REGISTRY_PANEL = [
  { id: "qwen2.5-coder-1.5b", role: "reason",  why: "best compact coder/reasoner" },
  { id: "smollm2-360m",       role: "fast",    why: "tiny, different family — a fast diverse voice" },
  { id: "qwen2.5-0.5b",       role: "breadth", why: "a third distinct point in the space" },
];

// ── the adapter: a (messages,opts)→deltas sampler becomes a fabric provider {id, generate(input,opts)} ─
// The persona/system prompt is baked into the PROVIDER (a closure), not the input — so the same question
// addresses a DIFFERENT κ per member (the fabric keys on provider.id), which is what preserves diversity.
export function samplerProvider(id, sampler, system = null, extra = {}) {
  if (typeof sampler !== "function") throw new Error("samplerProvider: a (messages,opts)→iterable sampler is required");
  return {
    id, ...extra,
    generate: async function* (input, opts = {}) {
      const user = typeof input === "string" ? input : (input && (input.text || input.prompt)) || "";
      const messages = system ? [{ role: "system", content: system }, { role: "user", content: user }] : [{ role: "user", content: user }];
      for await (const d of sampler(messages, opts)) yield (d && typeof d === "object" && d.delta != null) ? d.delta : d;
    },
  };
}

// ── defaultPanel(opts) → { panel, judge, synth, mode, diversity, members, reason? } ──────────────────
//   opts.samplers : { modelId → sampler }  → MODEL mode (≥2 distinct) ; the registry brains as members.
//   opts.sampler  : a single sampler        → PERSONA mode ; one brain, N reasoning lenses.
//   opts.personas : override the lenses (PERSONA mode). opts.registry : override the model set (MODEL).
// Returns an empty panel with an honest reason when nothing is wired (never invents a model — Law L5).
export function defaultPanel({ sampler = null, samplers = null, personas = PANEL_PERSONAS, registry = REGISTRY_PANEL } = {}) {
  // MODEL mode — the host loaded ≥2 distinct brains.
  const have = samplers && typeof samplers === "object" ? Object.keys(samplers).filter((k) => typeof samplers[k] === "function") : [];
  if (have.length >= 2) {
    // prefer the registry order/roles where ids match; otherwise take the supplied ids verbatim.
    const ordered = [...registry.filter((r) => have.includes(r.id)), ...have.filter((id) => !registry.some((r) => r.id === id)).map((id) => ({ id, role: "member" }))];
    const panel = ordered.map((r) => samplerProvider(r.id, samplers[r.id], null, { role: r.role, why: r.why || null }));
    const reasoner = panel.find((p) => p.role === "reason") || panel[0];
    return { panel, judge: reasoner, synth: reasoner, mode: "model", diversity: "model", members: panel.map((p) => ({ id: p.id, role: p.role })) };
  }
  // PERSONA mode — one warm brain, diverse reasoning lenses (the any-browser default).
  if (typeof sampler === "function") {
    const panel = personas.map((p) => samplerProvider("warm·" + p.id, sampler, p.system, { role: p.id, persona: true }));
    const judge = samplerProvider("warm·" + JUDGE_PERSONA.id, sampler, JUDGE_PERSONA.system, { role: "judge", persona: true });
    const synth = samplerProvider("warm·" + SYNTH_PERSONA.id, sampler, SYNTH_PERSONA.system, { role: "synth", persona: true });
    return { panel, judge, synth, mode: "persona", diversity: "persona", members: panel.map((p) => ({ id: p.id, role: p.role })) };
  }
  return { panel: [], judge: null, synth: null, mode: "unconfigured", diversity: "none", members: [], reason: "no sampler(s) supplied — load a brain first (the host's job, lazy per ADR-0096); fusion stays honest and refuses rather than inventing a model" };
}

// ── configureDefaultFuse(Q, deps) → wire Q.fuse with the default panel in one call ───────────────────
// Q is the door (window.Q); deps carries { sampler } or { samplers } (+ optional fabric). Returns an
// honest summary, or { ok:false, reason } when nothing is loaded (then Q.fuse keeps returning its notice).
export function configureDefaultFuse(Q, { sampler = null, samplers = null, fabric = null } = {}) {
  if (!Q || typeof Q.configureFuse !== "function") return { ok: false, reason: "Q.configureFuse not present" };
  const cfg = defaultPanel({ sampler, samplers });
  if (!cfg.panel.length) return { ok: false, reason: cfg.reason, mode: cfg.mode };
  Q.configureFuse({ panel: cfg.panel, judge: cfg.judge, synth: cfg.synth, fabric });
  try { Q.__fusePanel = cfg.panel; Q.__fuseJudge = cfg.judge; Q.__fuseSynth = cfg.synth; } catch (e) {}   // track for withRemoteMember (ADR-0102) to compose without dropping judge/synth
  return { ok: true, mode: cfg.mode, diversity: cfg.diversity, panel: cfg.panel.map((p) => p.id) };
}

// ── withRemoteMember(Q, remoteProvider, opts) → add a governed REMOTE model as ONE hybrid panel member
//    (ADR-0102), preserving the existing local panel. The remote provider (holo-q-remote-provider.mjs
//    makeRemoteProvider) is already a fabric provider with remote:true, so Q.fuse seals tier "hybrid"
//    automatically. This is the PER-CALL opt-in frontier voice: the default panel stays 100% local; calling
//    this only ADDS breadth when the host/user asks. Pulls the current panel from the live fuse instance so
//    it composes with whatever defaultPanel already wired; if none, it seeds a panel from the remote alone
//    is refused (a panel needs ≥2 for diversity — Law L5 honesty). Returns an honest summary. ──
export function withRemoteMember(Q, remoteProvider, { fabric = null, panel = null, judge = null, synth = null } = {}) {
  if (!Q || typeof Q.configureFuse !== "function") return { ok: false, reason: "Q.configureFuse not present" };
  if (!remoteProvider || typeof remoteProvider.generate !== "function") return { ok: false, reason: "a remote provider { id, generate, remote:true } is required" };
  // the local panel: the caller may pass it explicitly (opts.panel), else we read the one configureDefaultFuse
  // stashed on the door (Q.__fusePanel) — createFuse keeps its config private, so the panel is tracked here.
  const localPanel = (Array.isArray(panel) ? panel : null) || (Array.isArray(Q.__fusePanel) ? Q.__fusePanel : null);
  if (!localPanel || !localPanel.length) {
    return { ok: false, reason: "no local panel wired yet — call configureDefaultFuse(Q,{sampler}) first, then add the remote member (fusion needs ≥2 members for diversity, Law L5)" };
  }
  // PRESERVE the judge + synth the local wire chose — configureFuse rebuilds createFuse from scratch, so
  // omitting them would silently reset synth to a panel member (a bug the live in-browser test caught).
  const j = judge || Q.__fuseJudge || null;
  const s = synth || Q.__fuseSynth || null;
  // SINGLE remote slot: drop ANY prior remote member (a different-slug model from an earlier setModel) AND
  // a same-id duplicate, so switching models (ADR-0102 "select any model") swaps cleanly, never stacks.
  const combined = [...localPanel.filter((m) => m && !m.remote && m.id !== remoteProvider.id), remoteProvider];
  Q.__fusePanel = combined;                               // remember for a subsequent add
  Q.configureFuse({ panel: combined, judge: j, synth: s, fabric });
  return { ok: true, tier: "hybrid", members: combined.map((p) => ({ id: p.id, remote: !!p.remote })) };
}

// withoutRemoteMember(Q, opts) → drop the remote slot, restore the 100%-local panel (the toggle-OFF path,
// ADR-0102). configureFuse is rebuilt local-only; judge/synth preserved. Honest no-op if no panel/remote.
export function withoutRemoteMember(Q, { fabric = null } = {}) {
  if (!Q || typeof Q.configureFuse !== "function") return { ok: false, reason: "Q.configureFuse not present" };
  const panel = Array.isArray(Q.__fusePanel) ? Q.__fusePanel : null;
  if (!panel || !panel.length) return { ok: false, reason: "no panel wired" };
  const locals = panel.filter((m) => m && !m.remote);
  if (locals.length === panel.length) return { ok: true, tier: "local", members: locals.map((p) => ({ id: p.id })), unchanged: true };
  Q.__fusePanel = locals;
  Q.configureFuse({ panel: locals, judge: Q.__fuseJudge || null, synth: Q.__fuseSynth || null, fabric });
  return { ok: true, tier: "local", members: locals.map((p) => ({ id: p.id })) };
}

export function describePanel() {
  return {
    default: "PERSONA mode — one warm brain (ADR-0096), N diverse reasoning lenses (concise · first-principles · skeptic); diverse PATHS, not weights",
    upgrade: "MODEL mode — ≥2 distinct loaded samplers become the registry panel (Coder-1.5B · SmolLM2-360M · a third family); diverse weights",
    adapter: "a (messages,opts)→deltas sampler becomes a fabric provider {id, generate(input,opts)}; the persona is in the provider so each member addresses a distinct κ",
    honest: "labels diversity 'persona' vs 'model' — never claims model diversity from one brain; with nothing loaded it REFUSES, it does not invent a model (Law L5)",
    judge: "MODEL mode judges with the reasoner; PERSONA mode uses a dedicated judge lens — the fuse engine's buildJudgePrompt does the heavy structuring either way",
    remote: "withRemoteMember(Q, makeRemoteProvider(...)) adds ONE governed frontier slot (ADR-0102) → tier 'hybrid', a per-call opt-in; the default panel stays 100% local",
  };
}

export default { PANEL_PERSONAS, JUDGE_PERSONA, SYNTH_PERSONA, REGISTRY_PANEL, samplerProvider, defaultPanel, configureDefaultFuse, withRemoteMember, withoutRemoteMember, describePanel };
