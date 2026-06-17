// holo-semantic.mjs — the ORCHESTRATOR (Stage 3 of IPFS-native semantic rendering). It turns a natural-
// language query into a feature-rich, self-verifying κ-page by composing the seams that already ship:
//
//   EXPAND    query → deterministic probes (original + qualifier-stripped + entity-core), ZERO LLM
//   DISCOVER  each probe → linked-data candidates (holo-discover)        N untrusted ranked lists
//   FUSE      Reciprocal Rank Fusion by entity id (REUSE holo-q-recall.rrf)  cross-probe agreement wins
//   SEAL      top-K fused candidates → real IPFS objects (holo-discover.sealCandidate)  K fresh CIDs
//   COMPOSE   one page citing every source by its CID; seal it           the answer is itself a κ-object
//   SYNTH?    OPTIONAL injected model (Q.fuse-shaped) → prose answer + [n] citations to the source CIDs
//
// The deterministic core (EXPAND→FUSE→COMPOSE) runs ZERO models and re-derives byte-for-byte (Law L5); the
// composed page CID is a pure function of the discovered bytes. SYNTH is opt-in and the only model step —
// exactly the ADR-0099 shape (evidence first, composed answer as an optional layer). Trust: discovery only
// NOMINATES; every cited CID is re-derived at resolve, so an untrusted index can never forge a source.
//
// Pure ESM, no DOM. The discovery instance (with its injected fetchImpl) and the optional synth are passed
// in — the host wires which sources a query reaches, the same way it wires a recall corpus (ADR-0099).

import { rrf } from "../usr/lib/holo/q/holo-q-recall.js";
import { sealSnapshot } from "./holo-web-snapshot.mjs";

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// expandQuery(q) → [probes] — deterministic, zero-LLM query expansion. The single biggest discovery-quality
// lever (a raw entity search ranks "history of ancient Rome" worse than "ancient Rome"): strip the leading
// "history/overview/what is …" framing so the canonical entity probe is searched alongside the verbatim one,
// and RRF lets cross-probe agreement correct a single noisy ranking. Deduped, capped, order-stable.
export function expandQuery(query) {
  const q = String(query || "").trim();
  const probes = q ? [q] : [];
  const stripped = q
    .replace(/^(the\s+|a\s+|an\s+)?(history|origins?|overview|story|guide|introduction|intro|timeline|summary)\s+(of|to|on|about)\s+/i, "")
    .replace(/^(what|who|where|when|why|how)\s+(is|was|are|were|did|does)\s+(the\s+)?/i, "")
    .replace(/\?+\s*$/, "").trim();
  const add = (s) => { const t = String(s || "").trim(); if (t && !probes.some((p) => p.toLowerCase() === t.toLowerCase())) probes.push(t); };
  add(stripped);
  return probes.slice(0, 3);
}

// composePage — a deterministic, feature-rich page citing every source by its (verified) CID. PURE: the
// bytes are a function of (query, ordered sources, optional synthesized answer) → a stable composed CID.
export function composePage(query, sources, answer = null) {
  const cites = sources.map((s, i) =>
    `<article class="src" data-source-cid="${esc(s.cid)}"><h2>[${i + 1}] ${esc(s.title)}</h2>`
    + `<p class="meta">${esc(s.source)} · <a href="${esc(s.ref || "")}">${esc(s.entityId || "")}</a> · <a href="/ipfs/${esc(s.cid)}/">ipfs://${esc(s.cid)}</a> · ✓ L5</p>`
    + `<p>${esc(String(s.extract || "").split(/\n{2,}/)[0] || "")}</p></article>`).join("");
  const synth = answer
    ? `<section class="answer"><h2>Answer</h2>${String(answer).split(/\n{2,}/).map((p) => `<p>${esc(p)}</p>`).join("")}</section>`
    : "";
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">`
    + `<title>${esc(query)}</title></head><body><main><header><h1>${esc(query)}</h1>`
    + `<p class="sub">${sources.length} self-verifying source${sources.length === 1 ? "" : "s"} · content-addressed · every block re-derived (Law L5)</p></header>`
    + synth + `<div class="sources">${cites}</div></main></body></html>`;
}

// buildSynthPrompt — numbered, CID-bracketed sources so a model can cite by [n] and the answer's κ is a
// deterministic function of the evidence. Same contract as holo-q-recall.buildSynthPrompt.
function buildSynthPrompt(query, sources) {
  const block = sources.map((s, i) => `[${i + 1}] (ipfs://${s.cid}) ${s.title}\n${String(s.extract || "").trim()}`).join("\n\n");
  return [
    "Answer the question using ONLY the numbered sources below. Cite every claim by its [n].",
    "", "QUESTION:", String(query || "").trim(), "", `SOURCES (${sources.length}):`, block,
    "", "If the sources do not answer the question, say so plainly — do not invent.",
  ].join("\n");
}

// createSemantic({ discovery, synth?, clock? }) — the orchestrator. `discovery` is a holo-discover
// createDiscovery() instance (carrying its own injected fetchImpl). `synth` is OPTIONAL: a Q.fuse instance
// ({ fuse(prompt) }) or a generative provider ({ generate(prompt) -> async iterable {delta} }).
export function createSemantic({ discovery = null, synth = null } = {}) {
  if (!discovery) throw new Error("holo-semantic: a discovery instance is required (holo-discover.createDiscovery)");

  async function runSynth(prompt) {
    if (!synth) return null;
    if (typeof synth.fuse === "function") { const r = await synth.fuse(prompt); return r && (r.answer || r.text) || null; }
    if (typeof synth.generate === "function") { let out = ""; for await (const e of synth.generate(prompt)) out += (e.delta || ""); return out || null; }
    return null;
  }

  // answer(query, opts) → { ok, query, probes, cid, did, blocks, sources:[{cid,title,entityId,…}],
  //                          answer?, mode, ms } | { ok:false, … }
  //   opts: { perProbe=5, topK=3, synthesize=false }
  async function answer(query, { perProbe = 5, topK = 3, synthesize = false } = {}) {
    const t0 = (typeof performance !== "undefined" && performance.now) ? performance.now() : 0;
    const ms = () => (t0 ? Math.round((performance.now ? performance.now() : 0) - t0) : 0);
    const q = String(query || "").trim();
    if (!q) return { ok: false, query: q, reason: "empty query", ms: ms() };

    // EXPAND + DISCOVER — one ranked candidate list per probe (keyed by entity id for fusion).
    const probes = expandQuery(q);
    const lists = [], byId = new Map();
    for (const p of probes) {
      const cands = await discovery.discover(p, { limit: perProbe });
      lists.push({ via: p, items: cands.map((c) => ({ kappa: c.entityId, ...c })).filter((c) => c.kappa) });
      for (const c of cands) if (c.entityId && !byId.has(c.entityId)) byId.set(c.entityId, c);
    }
    // FUSE — RRF by entity id; cross-probe agreement ranks an entity above a single noisy top hit.
    const fused = rrf(lists);
    const ranked = fused.map((f) => byId.get(f.kappa)).filter(Boolean);

    // SEAL — top-K fused candidates that yield content → fresh, self-verifying IPFS objects.
    const sources = [], blocks = new Map();
    for (const c of ranked) {
      if (sources.length >= topK) break;
      const sealed = await discovery.sealCandidate(c, q);
      if (!sealed) continue;
      for (const [cid, b] of sealed.blocks) blocks.set(cid, b);
      sources.push(sealed);
    }
    if (!sources.length) return { ok: false, query: q, probes, reason: "no source yielded verifiable content", ms: ms() };

    // SYNTH? — opt-in model answer + [n] citations to the source CIDs (the only model step).
    let synthesized = null, mode = "compose";
    if (synthesize) { synthesized = await runSynth(buildSynthPrompt(q, sources)); if (synthesized) mode = "synthesize"; }

    // COMPOSE + SEAL — one page citing every source by its CID; the composed page is itself a κ-object.
    const html = composePage(q, sources, synthesized);
    const snap = await sealSnapshot({ resources: [{ name: "index.html", bytes: html }] });
    for (const [cid, b] of snap.blocks) blocks.set(cid, b);   // merged store: the page + every cited source resolves

    return {
      ok: true, query: q, probes, mode, html,        // html: the composed page bytes, for an in-page preview (the κ resolves the same bytes)
      cid: snap.rootCid, did: snap.did, blocks, manifest: snap.manifest,
      sources: sources.map((s) => ({ cid: s.cid, title: s.title, entityId: s.entityId, source: s.source, ref: s.ref })),
      ...(synthesized ? { answer: synthesized } : {}),
      ms: ms(),
    };
  }

  return { answer, expandQuery, discovery };
}

export default { createSemantic, expandQuery, composePage };
