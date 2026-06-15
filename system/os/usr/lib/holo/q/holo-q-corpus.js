// holo-q-corpus.js — the PRIVATE-corpus index for Holo Recall (ADR-0099). The write-side of κ-graph
// retrieval: index a corpus object ONCE, and recall reads from it forever (holo-q-recall.js).
//
// The open-web stack (ADR-0037–0046, Resolve→Federate→Answer→Graph) answers "what does the open web
// know" — deterministic, no-AI, live. Nothing indexed the user's OWN corpus (holospace objects, notes,
// sealed receipts, the κ-store). This is that index, and it stays STRICTLY separate from the open-web
// graph (ADR-0046): provenance keeps the two universes apart, never silently merged.
//
// Three things happen on every write, and each is CONTENT-ADDRESSED so the whole index re-derives
// (Law L5) and dedups by content (Law L3):
//   • CHUNK  — split a page into chunks, each its own κ (responseKappa over the chunk bytes).
//   • EMBED  — a vector per chunk via the injected on-device embedder (holo-q-embed.js, O(1) cache).
//   • POST   — a BM25 keyword posting per chunk (names/code/exact phrases need lexical, not just vector).
//   • LINK   — AUTO-LINK with ZERO LLM calls: a regex entity scan + heuristic edge-typing builds a typed
//              κ-graph (cites · derived_from · mentions · authored_by · part_of). This is the +31 P@5
//              load-bearing step from the SovereignAI/GBrain sweep, and it is DETERMINISTIC: the same
//              page bytes always produce the same edge set, so the graph is re-derivable (unlike a
//              model-extracted graph, which would vary run-to-run — a Law-L5 violation — and cost a call
//              per write). The ceiling is recall on ambiguous entities; that is the READ-TIME synthesize
//              step's job (holo-q-recall.js), not the index's.
//
// DOM-free, dependency-free (the embedder is injected), pure ESM → Node-witnessed. Canonical addressing
// is reused verbatim from holo-q-receipt.mjs (RFC 8785 JCS + SHA-256), so a corpus κ re-derives
// byte-identically in the browser host and the Node witness.

import { address, responseKappa } from "./holo-q-receipt.mjs";

const HOLOQ = "https://hologram.os/ns/q#";
// BM25 constants — the standard Okapi defaults (the same family Lucene/Elasticsearch ship).
const K1 = 1.5, B = 0.75;
// English-ish stopword floor — kept tiny on purpose (BM25's idf already down-weights common terms; this
// just trims the obvious glue so postings stay lean). Not a linguistic claim, a size optimisation.
const STOP = new Set("a an and are as at be by for from has he in is it its of on that the to was were will with this these those i you we they".split(" "));

// tokenize(text) → lowercased word tokens (drops punctuation, keeps did:holo/URLs intact-ish via the
// alnum+:/._- class so an identifier survives as a searchable term). Deterministic.
export function tokenize(text) {
  return String(text || "").toLowerCase().match(/[a-z0-9][a-z0-9:/._-]*[a-z0-9]|[a-z0-9]/g) || [];
}
function terms(text) { const out = []; for (const t of tokenize(text)) if (t.length > 1 && !STOP.has(t)) out.push(t); return out; }

// chunk(text, max) — split a page into semantic chunks: paragraphs (blank-line separated), and any
// paragraph longer than `max` chars is sentence-split so a chunk stays a retrievable unit. Deterministic
// (the same text always chunks the same way), which is why an unchanged page re-indexes to zero compute.
export function chunkText(text, max = 480) {
  const paras = String(text || "").split(/\n\s*\n+/).map((p) => p.trim()).filter(Boolean);
  const out = [];
  for (const p of paras) {
    if (p.length <= max) { out.push(p); continue; }
    let buf = "";
    for (const s of p.split(/(?<=[.!?])\s+/)) {
      if ((buf + " " + s).trim().length > max && buf) { out.push(buf.trim()); buf = s; }
      else buf = (buf ? buf + " " : "") + s;
    }
    if (buf.trim()) out.push(buf.trim());
  }
  return out.length ? out : (String(text || "").trim() ? [String(text).trim()] : []);
}

// ── AUTO-LINK — zero-LLM typed-edge extraction. Each matcher is a (regex, type, target→κ) rule; the
//    edge set is a pure function of the page bytes (+ its frontmatter/id), so it re-derives. The κ a
//    target maps to is content-addressed: a citation → the κ of what it cites; an entity/wikilink → the
//    κ of its normalized name (so two chunks naming the same entity share ONE target κ — the co-citation
//    join the read-side graph walk rides). ──
const normName = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
export async function entityKappa(name) { return await address({ "@type": "holoq:Entity", "holoq:name": normName(name) }); }

// extractLinks(text) → [{ type, label, targetText }] — the raw, deterministic matches (κ-resolved by
// autoLink below). Order is match order so the edge list is stable.
export function extractLinks(text) {
  const s = String(text || ""), links = [];
  const push = (type, label, targetText) => links.push({ type, label: String(label), targetText: String(targetText) });
  // citations — an explicit reference to another object (highest-confidence edge).
  for (const m of s.matchAll(/did:holo:sha256:[0-9a-f]{64}/g)) push("cites", m[0], m[0]);          // → the κ verbatim
  for (const m of s.matchAll(/\b10\.\d{4,9}\/[^\s)]+/g)) push("cites", m[0], "doi:" + m[0]);         // DOI
  for (const m of s.matchAll(/https?:\/\/[^\s)<>"']+/g)) push("cites", m[0], m[0]);                   // URL
  // derivation — a wikilink names an object this chunk is built FROM (the [[name]] idiom).
  for (const m of s.matchAll(/\[\[([^\]]+)\]\]/g)) push("derived_from", m[1], "entity:" + normName(m[1]));
  // attribution — an @handle is treated as authorship (a mention of a person who made/owns it).
  for (const m of s.matchAll(/(?:^|\s)@([a-z0-9][a-z0-9_-]{1,38})\b/gi)) push("authored_by", m[1], "entity:" + normName(m[1]));
  // mentions — capitalized multi-word proper nouns (1–4 words). The lowest-confidence edge (this is the
  // ambiguous-entity ceiling the read-time synth step backstops), but it is what builds the co-citation
  // graph that lifts recall. Single bare capitalized words are skipped (too noisy).
  for (const m of s.matchAll(/\b([A-Z][a-zA-Z]+(?:\s+[A-Z][a-zA-Z]+){1,3})\b/g)) push("mentions", m[1], "entity:" + normName(m[1]));
  return links;
}

// autoLink(fromKappa, text, meta) → resolved typed edges [{ from, type, to, label, id }]. `id` is the
// edge's own content κ (so an identical edge dedups, Law L3). part_of/authored_by come from meta (the
// page's path prefix + frontmatter author) — structure the bytes don't carry.
export async function autoLink(fromKappa, text, meta = {}) {
  const edges = [];
  const add = async (type, to, label) => { const body = { "@type": "holoq:Link", "holoq:from": fromKappa, "holoq:edgeType": type, "holoq:to": to }; edges.push({ from: fromKappa, type, to, label: label || "", id: await address(body) }); };
  for (const l of extractLinks(text)) {
    const to = l.targetText.startsWith("did:holo:") ? l.targetText
      : l.targetText.startsWith("entity:") ? await entityKappa(l.targetText.slice(7))
      : await responseKappa(l.targetText);                                       // doi:/url → leaf κ of the reference string
    await add(l.type, to, l.label);
  }
  // structural edges from metadata (deterministic, no scan):
  if (meta.author) await add("authored_by", await entityKappa(meta.author), String(meta.author));
  if (meta.path && meta.path.includes("/")) { const parent = meta.path.slice(0, meta.path.lastIndexOf("/")); if (parent) await add("part_of", await entityKappa("path:" + normName(parent)), parent); }
  return edges;
}

// ── the corpus index ───────────────────────────────────────────────────────────────────────────────
// createCorpus({ embedder }) — `embedder` is any { embed(text)->Promise<number[]>, similarity?(a,b) }
// (holo-q-embed.createEmbedder() is the live one; the witness injects a deterministic fake). All state is
// in-memory maps keyed by content κ; the durable κ-store persistence is the host's job (it holds the same
// shape under one corpus κ — Law L4, no new store here).
export function createCorpus({ embedder = null } = {}) {
  // chunkId (== chunk κ) → { kappa, pageId, text, vec, len, edges:[edgeId] }
  const chunks = new Map();
  const vecOf = new Map();                                   // chunk κ → vector (the semantic leg)
  const postings = new Map();                                // term → Map(chunk κ → tf)
  const df = new Map();                                      // term → # chunks containing it
  const edges = new Map();                                   // edge id → { from, type, to, label }
  const byTarget = new Map();                                // target κ → Set(chunk κ)  (the co-citation join)
  const byPage = new Map();                                  // pageId → Set(chunk κ)    (re-index = replace)
  let totalLen = 0;

  function cosine(a, b) { if (embedder && embedder.similarity) return embedder.similarity(a, b); let d = 0; for (let i = 0; i < a.length; i++) d += a[i] * b[i]; return d; }

  function removeChunk(ck) {
    const c = chunks.get(ck); if (!c) return;
    for (const t of new Set(terms(c.text))) { const m = postings.get(t); if (m) { m.delete(ck); if (!m.size) postings.delete(t); df.set(t, (df.get(t) || 1) - 1); if (df.get(t) <= 0) df.delete(t); } }
    for (const eid of c.edges) { const e = edges.get(eid); if (e) { const s = byTarget.get(e.to); if (s) { s.delete(ck); if (!s.size) byTarget.delete(e.to); } } edges.delete(eid); }
    totalLen -= c.len; vecOf.delete(ck); chunks.delete(ck);
  }

  // index(page) → { pageId, kappa, chunks:[κ], edges:[id], reindexed } — the WRITE op. A page is
  // { id?, text, meta? }; re-indexing the SAME pageId replaces its chunks (an edit re-chunks only that
  // page, the [[holo-q-fuse-adr]] near-repeat property applied to a corpus). Returns the corpus state κ.
  async function index(page = {}) {
    const text = typeof page === "string" ? page : (page.text || "");
    const pageId = (typeof page === "object" && page.id) || (await responseKappa(text));
    const meta = (typeof page === "object" && page.meta) || {};
    const prev = byPage.get(pageId);
    if (prev) { for (const ck of [...prev]) removeChunk(ck); byPage.delete(pageId); }   // re-index = replace this page

    const parts = chunkText(text);
    const set = new Set(), outChunks = [], outEdges = [];
    for (const part of parts) {
      const ck = await responseKappa(part);                 // chunk κ = content address of the chunk bytes (dedup, L3)
      const tks = terms(part), len = tks.length || 1;
      const vec = embedder ? await embedder.embed(part, { kind: "document" }) : null;
      const links = await autoLink(ck, part, { ...meta, path: meta.path || pageId });
      // postings (tf per chunk; df per corpus)
      const tf = new Map(); for (const t of tks) tf.set(t, (tf.get(t) || 0) + 1);
      for (const [t, n] of tf) { let m = postings.get(t); if (!m) { m = new Map(); postings.set(t, m); } if (!m.has(ck)) df.set(t, (df.get(t) || 0) + 1); m.set(ck, n); }
      // edges + the co-citation index
      for (const e of links) { edges.set(e.id, e); let s = byTarget.get(e.to); if (!s) { s = new Set(); byTarget.set(e.to, s); } s.add(ck); }
      if (vec) vecOf.set(ck, vec);
      chunks.set(ck, { kappa: ck, pageId, text: part, len, edges: links.map((e) => e.id) });
      totalLen += len; set.add(ck); outChunks.push(ck); for (const e of links) outEdges.push(e.id);
    }
    byPage.set(pageId, set);
    return { pageId, kappa: await stateKappa(), chunks: outChunks, edges: outEdges, reindexed: !!prev };
  }

  // BM25 ranking over the keyword index. score(d) = Σ_t idf(t)·tf·(k1+1)/(tf + k1·(1−b+b·dl/avgdl)).
  function bm25(query, k = 20) {
    const N = chunks.size || 1, avgdl = totalLen / N || 1, qt = new Set(terms(query)), acc = new Map();
    for (const t of qt) {
      const m = postings.get(t); if (!m) continue;
      const idf = Math.log(1 + (N - (df.get(t) || 0) + 0.5) / ((df.get(t) || 0) + 0.5));
      for (const [ck, tf] of m) { const dl = (chunks.get(ck) || { len: avgdl }).len; const s = idf * (tf * (K1 + 1)) / (tf + K1 * (1 - B + B * dl / avgdl)); acc.set(ck, (acc.get(ck) || 0) + s); }
    }
    return [...acc.entries()].map(([kappa, score]) => ({ kappa, score })).sort((a, b) => b.score - a.score || a.kappa.localeCompare(b.kappa)).slice(0, k);
  }

  // vector ranking over the semantic index (cosine to the query embedding). Async (it embeds the query).
  async function vector(query, k = 20) {
    if (!embedder || !vecOf.size) return [];
    const q = await embedder.embed(query, { kind: "query" });
    const scored = []; for (const [kappa, v] of vecOf) scored.push({ kappa, score: cosine(q, v) });
    return scored.sort((a, b) => b.score - a.score || a.kappa.localeCompare(b.kappa)).slice(0, k);
  }

  // neighbors(chunkKappas) → chunks that SHARE a link target with any seed chunk (1-hop: chunk→target→
  // chunk). This is the graph-expand the read side rides for the +P@5 lift. `shared` counts how many
  // targets a candidate co-cites (a stronger graph signal ranks higher). Bounded by the caller.
  function neighbors(seedKappas = []) {
    const seeds = new Set(seedKappas), targets = new Set();
    for (const ck of seeds) { const c = chunks.get(ck); if (!c) continue; for (const eid of c.edges) { const e = edges.get(eid); if (e) targets.add(e.to); } }
    const shared = new Map();
    for (const tk of targets) { const s = byTarget.get(tk); if (!s) continue; for (const ck of s) if (!seeds.has(ck)) shared.set(ck, (shared.get(ck) || 0) + 1); }
    return [...shared.entries()].map(([kappa, n]) => ({ kappa, shared: n })).sort((a, b) => b.shared - a.shared || a.kappa.localeCompare(b.kappa));
  }

  const chunk = (ck) => chunks.get(ck) || null;
  const edge = (id) => edges.get(id) || null;
  // stateKappa() — the corpus's own content address: a deterministic function of every chunk κ + edge id
  // (sorted), so an unchanged corpus has an unchanged κ and a re-index of an unchanged page is a no-op κ.
  async function stateKappa() {
    return await address({ "@type": "holoq:Corpus", "holoq:chunks": [...chunks.keys()].sort(), "holoq:edges": [...edges.keys()].sort() });
  }
  function stats() { return { chunks: chunks.size, edges: edges.size, terms: postings.size, pages: byPage.size, vectors: vecOf.size, avgdl: chunks.size ? +(totalLen / chunks.size).toFixed(1) : 0 }; }

  return { index, bm25, vector, neighbors, chunk, edge, stateKappa, stats,
    has: (ck) => chunks.has(ck), size: () => chunks.size, ns: HOLOQ };
}

export default { createCorpus, chunkText, tokenize, extractLinks, autoLink, entityKappa };
