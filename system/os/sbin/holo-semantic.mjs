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
export function createSemantic({ discovery = null, synth = null, agent = null, learn = null } = {}) {
  if (!discovery) throw new Error("holo-semantic: a discovery instance is required (holo-discover.createDiscovery)");

  async function runSynth(prompt) {
    if (!synth) return null;
    if (typeof synth.fuse === "function") { const r = await synth.fuse(prompt); return r && (r.answer || r.text) || null; }
    if (typeof synth.generate === "function") { let out = ""; for await (const e of synth.generate(prompt)) out += (e.delta || ""); return out || null; }
    return null;
  }
  // agent escalation: an injectable seam that proposes EXTRA probes for the long tail (a model, or any
  // reformulator). Default = the deterministic probes. Used only when the offline tier comes up short.
  async function agentProbes(q, base) {
    if (agent && typeof agent.expand === "function") { try { const extra = await agent.expand(q, base); return [...new Set([...base, ...(extra || [])])].slice(0, 6); } catch {} }
    return base;
  }
  // discover a tier and fuse per-probe candidate lists by RRF (cross-probe agreement).
  async function discoverRanked(probes, tier, perProbe) {
    const lists = [], byId = new Map();
    for (const p of probes) {
      const cands = await discovery.discover(p, { limit: perProbe, tier });
      lists.push({ via: tier, items: cands.map((c) => ({ kappa: c.entityId, ...c })).filter((c) => c.kappa) });
      for (const c of cands) if (c.entityId && !byId.has(c.entityId)) byId.set(c.entityId, c);
    }
    return rrf(lists).map((f) => byId.get(f.kappa)).filter(Boolean);
  }
  // sufficiency gate: does the offline tier contain a doc ABOUT this query? Match the query's SALIENT terms
  // (drop framing words like "history/what/how" — those appear in many docs' text and would falsely satisfy
  // a raw BM25 hit) against candidate TITLES/entities (a doc's topic). No salient-term title match → the
  // topic isn't in the index → escalate to live. (Conservative: costs a live round-trip + a learn, never a
  // wrong answer.) Only meaningful when a live tier exists to escalate to (see hasLive below).
  const STOP = new Set(["the", "and", "for", "with", "from", "into", "over", "what", "who", "how", "why", "when", "where", "which", "history", "origins", "origin", "overview", "story", "guide", "introduction", "intro", "timeline", "summary", "about"]);
  function covers(cands, q) {
    const terms = (String(q).toLowerCase().match(/[a-z0-9]{4,}/g) || []).filter((w) => !STOP.has(w));
    if (!terms.length) return cands.length > 0;          // a query of only framing words → any offline hit suffices
    return cands.some((c) => { const t = (String(c.title || "") + " " + String(c.entityId || "")).toLowerCase(); return terms.some((w) => t.includes(w)); });
  }

  // answer(query, opts) → { ok, query, probes, tier, learned, cid, did, blocks, sources, answer?, mode, ms }
  //   opts: { perProbe=5, topK=3, synthesize=false }
  // TIERED: try the OFFLINE κ-index first (instant, no network); only when it doesn't cover the query do we
  // escalate to LIVE on-demand discovery (agent-expanded) — and LEARN the result into the offline index so
  // the next time this (or a near) query is asked it is served offline. Coverage grows from use.
  async function answer(query, { perProbe = 5, topK = 3, synthesize = false, onStage = null } = {}) {
    const t0 = (typeof performance !== "undefined" && performance.now) ? performance.now() : 0;
    const ms = () => (t0 ? Math.round((performance.now ? performance.now() : 0) - t0) : 0);
    const emit = (s) => { try { onStage && onStage({ ...s, ms: ms() }); } catch {} };   // STREAM: progressive stages → the UI paints as content verifies
    const q = String(query || "").trim();
    if (!q) return { ok: false, query: q, reason: "empty query", ms: ms() };

    const probes = expandQuery(q);
    let tier = "offline", learned = 0;
    let ranked = await discoverRanked(probes, "offline", perProbe);   // OFFLINE FIRST — κ-index + learned, no network
    const hasLive = (discovery.adapters || []).some((a) => a.offline !== true);   // only escalate if there IS a live tier
    if (hasLive && !covers(ranked, q)) {                              // ESCALATE — the long tail goes live + agentic
      tier = "live";
      ranked = await discoverRanked(await agentProbes(q, probes), "live", perProbe);
    }
    emit({ phase: "tier", tier, probes });

    // SEAL — top-K candidates → fresh, self-verifying IPFS objects. Each verified source is EMITTED as soon
    // as it seals, so the first credible result paints before the rest (and before the composed page).
    const sources = [], blocks = new Map(), seen = new Set();
    for (const c of ranked) {
      if (sources.length >= topK) break;
      const sealed = await discovery.sealCandidate(c, q);
      if (!sealed) continue;
      const key = sealed.sourceUrl || sealed.cid;   // dedupe by CONTENT identity — distinct entities often resolve to the SAME article
      if (seen.has(key)) continue;
      seen.add(key);
      for (const [cid, b] of sealed.blocks) blocks.set(cid, b);
      sources.push(sealed);
      emit({ phase: "source", index: sources.length, tier, source: { cid: sealed.cid, title: sealed.title, entityId: sealed.entityId, source: sealed.source, ref: sealed.ref, authority: sealed.authority != null ? sealed.authority : null, verified: true } });
    }
    if (!sources.length) { emit({ phase: "empty" }); return { ok: false, query: q, probes, tier, reason: "no source yielded verifiable content", ms: ms() }; }

    // LEARN — on a live answer, persist the discovered sources into the offline index so the next ask is
    // network-free (the long tail it has seen becomes instant). Injected by the host; failure never blocks.
    if (tier === "live" && typeof learn === "function") { try { learned = (await learn(sources)) || 0; } catch {} }

    // SYNTH? — opt-in model answer + [n] citations to the source CIDs (the only model step).
    let synthesized = null, mode = "compose";
    if (synthesize) { synthesized = await runSynth(buildSynthPrompt(q, sources)); if (synthesized) mode = "synthesize"; }

    // COMPOSE + SEAL — one page citing every source by its CID; the composed page is itself a κ-object.
    if (synthesized) emit({ phase: "answer", answer: synthesized });
    const html = composePage(q, sources, synthesized);
    const snap = await sealSnapshot({ resources: [{ name: "index.html", bytes: html }] });
    for (const [cid, b] of snap.blocks) blocks.set(cid, b);   // merged store: the page + every cited source resolves
    emit({ phase: "composed", cid: snap.rootCid, did: snap.did });

    return {
      ok: true, query: q, probes, tier, learned, mode, html,   // tier: offline|live · learned: #docs added to the offline index
      cid: snap.rootCid, did: snap.did, blocks, manifest: snap.manifest,
      // each source carries its credibility: verified (L5 — content-addressed, re-derives at resolve),
      // authority (κ-PageRank τ when the source came from the index), provenance (source class + ref).
      sources: sources.map((s) => ({ cid: s.cid, title: s.title, entityId: s.entityId, source: s.source, ref: s.ref, authority: s.authority != null ? s.authority : null, verified: true })),
      ...(synthesized ? { answer: synthesized } : {}),
      ms: ms(),
    };
  }

  return { answer, expandQuery, discovery };
}

export default { createSemantic, expandQuery, composePage };
