// holo-q-recall.js — Q.recall: serverless κ-graph retrieval over the PRIVATE corpus (ADR-0099). The
// read-side of holo-q-corpus.js. Answers "what do I know" over the user's own objects, the way the
// open-web stack (ADR-0037–0046) answers "what does the open web know" — and stays STRICTLY separate
// from it (a result's provenance always says which universe it came from; the two never silently merge).
//
// The pipeline, every step a κ op:
//   HYBRID   vector(query) ⊕ BM25(query)            two ranked lists (semantic + lexical)
//   FUSE     Reciprocal Rank Fusion                 one fused ranking — the SAME formula as
//            score(d) = Σ 1/(k + rank + 1), k=60     holo-federate.js fuse(), generalized to key by chunk κ
//   EXPAND   1-hop typed graph walk (co-citation)   pull in chunks that share a link target with a top hit
//            → the +31 P@5 step (SovereignAI/GBrain) (the graph is the load-bearing part; bounded fan-out)
//   SYNTH?   optional Q.fuse / a generative synth    a cited answer + GAP ANALYSIS ("what's missing")
//   RECEIPT  ONE re-derivable holoq:RecallReceipt    prov:used = retrieved κs + walked edge κs; generated = answer/set κ
//
// The deterministic core (HYBRID→FUSE→EXPAND) runs ZERO models and re-derives byte-for-byte (Law L5);
// SYNTH? is opt-in and the ONLY step a model runs. A bare recall(q) returns the fused, graph-expanded
// chunk set; recall(q,{synthesize}) adds the answer card (evidence-first, the ADR-0040/0041 shape).
//
// No new transport/store/gate (Law L4): the corpus is injected (holo-q-corpus.js), the embedder lives in
// it, the synth is an injected provider (or a Q.fuse instance), the gate is passed through into the
// receipt. Canonical addressing reused from holo-q-receipt.mjs → the receipt re-derives in browser + Node.

import { address, responseKappa, verifyReceipt } from "./holo-q-receipt.mjs";

const UOR_CONTEXT = [
  "https://www.w3.org/ns/did/v1",
  "https://w3id.org/security/data-integrity/v2",
  { schema: "https://schema.org/", prov: "http://www.w3.org/ns/prov#", dcterms: "http://purl.org/dc/terms/" },
];
const HOLOQ = { holoq: "https://hologram.os/ns/q#" };

// ── Reciprocal Rank Fusion — merge N ranked lists into one. score(κ) = Σ_lists 1/(k + rank), where rank
//    is 1-based within each list. Byte-identical formula to holo-federate.js fuse() (k=60); generalized
//    here to fuse by chunk κ + carry WHICH retriever found each (the provenance the receipt records). ──
export function rrf(lists = [], { k = 60 } = {}) {
  const acc = new Map();
  lists.forEach(({ via, items }) => (items || []).forEach((it, i) => {
    const kappa = it.kappa || it, rank = i + 1;
    let c = acc.get(kappa); if (!c) { c = { kappa, rrf: 0, via: [] }; acc.set(kappa, c); }
    c.rrf += 1 / (k + rank); if (!c.via.includes(via)) c.via.push(via);
  }));
  return [...acc.values()].sort((a, b) => b.rrf - a.rrf || a.kappa.localeCompare(b.kappa));
}

// ── the RecallReceipt — ONE self-verifying PROV-O object over the retrieval DAG. prov:used = the
//    retrieved chunk κs (tagged with rank + which retriever) AND the edge κs the graph walk traversed;
//    prov:generated = the answer κ (synthesize) or the result-set κ (retrieve). A single altered byte
//    (a chunk κ, an edge κ, the mode, the conscience verdict) changes the address → refused (Law L5). ──
export async function mintRecallReceipt({
  queryK, corpusK, retrieved = [], edgesUsed = [], generatedK, mode = "retrieve",
  startedAt, endedAt, conscience = {}, app = null,
} = {}) {
  const body = {
    "@context": [...UOR_CONTEXT, HOLOQ],
    "@type": ["prov:Activity", "holoq:RecallReceipt"],
    "prov:used": [
      ...retrieved.map((r) => ({ "@id": r.kappa, "holoq:role": "retrieved", "holoq:rank": r.rank, "holoq:via": r.via })),
      ...edgesUsed.map((e) => ({ "@id": e, "holoq:role": "edge" })),
    ],
    "prov:generated": { "@id": generatedK },
    "holoq:mode": mode,                                       // "retrieve" (deterministic) | "synthesize" (a model ran)
    "holoq:query": { "@id": queryK },
    "holoq:corpus": { "@id": corpusK },
    "prov:startedAtTime": startedAt,
    "prov:endedAtTime": endedAt,
    "holoq:conscience": { "holoq:outcome": conscience.outcome || "accept", "holoq:caveats": conscience.caveats || [], "holoq:sealed": conscience.sealed !== false },
    ...(app ? { "prov:wasAssociatedWith": app } : {}),
  };
  return { id: await address(body), body };
}
export { verifyReceipt };

// buildSynthPrompt(query, chunks) — PURE. Embeds each retrieved chunk as a numbered, κ-bracketed source,
// so the synthesizer can CITE by number and the answer's κ is a deterministic function of the evidence.
// Asks for citations AND an honest gap analysis (the GBrain "answer + what's missing" property).
export function buildSynthPrompt(query, chunks = []) {
  const block = chunks.map((c, i) => `[${i + 1}] (${c.kappa}) ${String(c.text || "").trim()}`).join("\n\n");
  return [
    "Answer the question using ONLY the numbered sources below. Cite every claim by its [n].",
    "", "QUESTION:", String(query || "").trim(),
    "", `SOURCES (${chunks.length}):`, block,
    "", "Then add a 'Gaps:' line naming what the question needs that the sources do NOT cover.",
    "If the sources do not answer the question, say so plainly — do not invent.",
  ].join("\n");
}

// ── the recall engine ────────────────────────────────────────────────────────────────────────────────
// createRecall({ corpus, synth?, clock? }) — `corpus` is a holo-q-corpus.createCorpus() instance; `synth`
// is an OPTIONAL generative provider ({ id, generate(prompt)->async iterable of {delta} }) OR a Q.fuse
// instance ({ fuse(input) }). With no synth, synthesize:true degrades to a deterministic concatenation
// notice (never fakes an answer, Law L5).
export function createRecall({ corpus = null, synth = null, clock = null } = {}) {
  if (!corpus) throw new Error("Q.recall: a corpus is required (holo-q-corpus.createCorpus)");
  const now = clock || (() => new Date().toISOString());
  let _synth = synth;
  function configure({ synth: s } = {}) { if (s !== undefined) _synth = s; return { synth: (_synth && (_synth.id || "fuse")) || null }; }

  async function runSynth(prompt) {
    if (!_synth) return null;
    if (typeof _synth.fuse === "function") { const r = await _synth.fuse(prompt); return r && r.ok ? { text: r.answer, kappa: r.kappa } : null; }
    if (typeof _synth.generate === "function") { let out = ""; for await (const e of _synth.generate(prompt)) out += (e.delta || ""); return { text: out, kappa: await responseKappa(out) }; }
    return null;
  }

  // recall(query, opts) → { ok, mode, results:[{kappa,text,rank,via,shared?}], answer?, receipt, stats }
  //   opts: { k=8 (final size), candidates=20 (per-retriever depth), expand=true, expandMax=6,
  //           synthesize=false, app=null, conscience=null }
  async function recall(query, { k = 8, candidates = 20, expand = true, expandMax = 6, synthesize = false, app = null, conscience = null } = {}) {
    const q = typeof query === "string" ? query : (query && (query.text || query.query || query.input)) || "";
    if (!q) return { ok: false, refused: true, reason: "Q.recall: a query (text) is required" };
    if (!corpus.size()) return { ok: false, refused: true, reason: "Q.recall: the corpus is empty — index pages first (corpus.index)" };
    const startedAt = now();
    const t0 = (typeof performance !== "undefined" ? performance.now() : Date.now());

    // 1 · HYBRID — semantic ⊕ lexical, each its own ranked list.
    const [vec, kw] = await Promise.all([corpus.vector(q, candidates), Promise.resolve(corpus.bm25(q, candidates))]);
    // 2 · FUSE — Reciprocal Rank Fusion (cross-method agreement ranks; a chunk both find ranks high). The
    //     PRIMARY hits are the top-k of the fused ranking — graph hits are added on TOP of these, never
    //     drawn from the long tail of the fused list (that tail is everything the vector index scores).
    const fused = rrf([{ via: "vector", items: vec }, { via: "bm25", items: kw }]);
    const primary = fused.slice(0, k);
    const seedKappas = primary.map((f) => f.kappa);

    // 3 · EXPAND — 1-hop typed graph walk: a chunk that co-cites a PRIMARY hit's link target joins as a
    //     graph hit — context the hybrid ranking missed (the +P@5 lift). Only chunks NOT already in the
    //     top-k are added (a genuine graph contribution), bounded by expandMax and ranked after primaries.
    const added = [], edgesUsed = [], have = new Set(seedKappas);
    if (expand) {
      for (const n of corpus.neighbors(seedKappas).slice(0, expandMax)) if (!have.has(n.kappa)) { added.push({ kappa: n.kappa, rrf: 0, via: ["graph"], shared: n.shared }); have.add(n.kappa); }
      const seen = new Set();                                  // record the edges the walk traversed (receipt provenance)
      for (const ck of seedKappas) { const c = corpus.chunk(ck); if (c) for (const eid of c.edges) if (!seen.has(eid)) { seen.add(eid); edgesUsed.push(eid); } }
    }

    // assemble the final result set (deterministic order): primaries, then graph-expanded context.
    const top = [...primary, ...added].filter((f) => corpus.has(f.kappa));
    const results = top.map((f, i) => { const c = corpus.chunk(f.kappa); return { kappa: f.kappa, text: c ? c.text : "", pageId: c ? c.pageId : null, rank: i + 1, via: f.via, ...(f.shared ? { shared: f.shared } : {}) }; });

    // the deterministic result-set κ (the no-synth answer is re-derivable from query + ordered hits).
    const queryK = await responseKappa(q);
    const setK = await address({ "@type": "holoq:RecallSet", "holoq:query": queryK, "holoq:results": results.map((r) => r.kappa) });

    // 4 · SYNTH? — opt-in cited answer + gap analysis (the only model call).
    let answer = null, mode = "retrieve", generatedK = setK;
    if (synthesize) {
      const s = await runSynth(buildSynthPrompt(q, results.slice(0, k)));
      if (s && s.text) { answer = s.text; generatedK = s.kappa; mode = "synthesize"; }
      else answer = null;                                     // no synth bound → honest null, NOT a faked answer
    }

    // 5 · RECEIPT — seal ONE re-derivable RecallReceipt over the whole retrieval DAG.
    const verdict = (conscience && typeof conscience.evaluate === "function")
      ? await conscience.evaluate({ verb: "q.recall", intent: q }) : { outcome: "accept", caveats: [], sealed: true };
    const receipt = await mintRecallReceipt({
      queryK, corpusK: await corpus.stateKappa(), retrieved: results, edgesUsed, generatedK, mode,
      startedAt, endedAt: now(), conscience: verdict, app,
    });
    const ms = (typeof performance !== "undefined" ? performance.now() : Date.now()) - t0;
    return { ok: true, mode, query: q, results, answer, setKappa: setK, receipt, ms, stats: corpus.stats() };
  }

  return { recall, configure, corpus, describe: describeRecall };
}

// describeRecall() — the honest contract: private corpus, separate from the open web, deterministic core.
export function describeRecall() {
  return {
    what: "serverless κ-graph retrieval over YOUR private corpus — semantic ⊕ lexical ⊕ graph-expanded, with an optional cited answer + gap analysis",
    pipeline: "HYBRID(vector ⊕ BM25) → RRF → 1-hop typed-graph EXPAND → optional SYNTH → one re-derivable holoq:RecallReceipt",
    deterministic: "the core (retrieve → fuse → expand) runs ZERO models and re-derives byte-for-byte (Law L5); synthesize is opt-in and the only model step",
    graph: "the auto-link graph is built at WRITE-TIME with ZERO LLM calls (regex + heuristic typing); co-citation expand is the +P@5 lift (SovereignAI/GBrain)",
    separate: "STRICTLY distinct from the open-web object graph (ADR-0046) — provenance keeps the two universes apart, never silently merged",
    honest: "the auto-link graph trades recall on ambiguous entities for determinism + zero cost; the read-time synth step backstops that. PGLite is NOT adopted — the κ-store is the store (Law L4)",
  };
}

export default { createRecall, rrf, mintRecallReceipt, buildSynthPrompt, verifyReceipt, describeRecall };
