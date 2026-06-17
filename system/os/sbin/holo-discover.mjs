// holo-discover.mjs — the DISCOVER seam (Stage 2 of IPFS-native semantic rendering). IPFS is
// content-addressed, NOT content-indexed: you cannot ask the object space "what is about ancient Rome".
// An external index is unavoidable. This seam is that index — kept strictly UNTRUSTED: a source only
// NOMINATES a candidate reference; trust is recovered downstream when the referenced content is fetched,
// SEALED into a real IPFS object (holo-web-snapshot), and re-derived block-by-block to its CID (Law L5).
// An adapter that lies can only mislabel a candidate or waste a round-trip — it can never forge bytes that
// hash to a CID. This is the SAME trust model holo-routing already uses for gateway discovery.
//
// First adapter: LINKED-DATA — Wikidata entity search (meaning → a typed entity, the semantic-web's own
// answer to "what is this about") ⊕ a Wikipedia extract for renderable content. Canonical open-knowledge
// endpoints, not a private crawl. The seam is adapter-shaped, so an IPFS content index, a DHT/IPNI lookup,
// or a κ-native crawl are added later as more adapters behind the SAME door.
//
// Pure ESM, no DOM. `fetchImpl` is injected everywhere (Node + SW + a fixture-driven witness), the same
// discipline as holo-ipfs-gateway.makeGetBlock. This file does NOT fetch blocks or re-derive — it produces
// candidate references and (optionally) seals them via the EXISTING snapshot mint; the gateway resolves.

import { sealSnapshot } from "./holo-web-snapshot.mjs";

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pickFetch = (f) => f || (typeof fetch !== "undefined" ? fetch : null);

// ── the LINKED-DATA adapter ─────────────────────────────────────────────────────────────────────────
// search(query) → [{ source, entityId, title, summary, concepturi, ref }] — Wikidata wbsearchentities.
// Each hit is a typed entity (a Q-id) with a label + description: meaning resolved to identity, the
// semantic-web primitive. `ref` is the entity's canonical URL; `title` feeds the content fetch below.
export function linkedDataAdapter({ lang = "en" } = {}) {
  return {
    id: "wikidata",
    offline: false,                                          // hits the network → the LIVE/on-demand tier
    async search(query, { fetchImpl, limit = 5 } = {}) {
      const f = pickFetch(fetchImpl); if (!f) throw new Error("discover: no fetch");
      const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&type=item`
        + `&language=${encodeURIComponent(lang)}&uselang=${encodeURIComponent(lang)}&limit=${limit}`
        + `&search=${encodeURIComponent(String(query || "").trim())}&origin=*`;
      const r = await f(url);
      if (!r || !r.ok) throw new Error("wikidata search " + (r && r.status));
      const j = await r.json();
      return (j.search || []).map((s) => ({
        source: "wikidata", entityId: s.id, title: s.label || s.id, summary: s.description || "",
        concepturi: s.concepturi || ("https://www.wikidata.org/wiki/" + s.id),
        ref: "https://www.wikidata.org/wiki/" + s.id,
      }));
    },
    // fetchContent(title) → { title, extract, url } | null — the Wikipedia REST summary for the entity's
    // label. This is the renderable content the reference points at (the body we seal into the κ-object).
    // Wikidata labels are often lowercase (e.g. "ancient Greece"); MediaWiki canonicalizes a title's first
    // letter to uppercase, so try the capitalized form first, then the raw label, before giving up.
    async fetchContent(title, { fetchImpl } = {}) {
      const f = pickFetch(fetchImpl); if (!f) throw new Error("discover: no fetch");
      const raw = String(title || "").trim();
      const cap = raw.charAt(0).toUpperCase() + raw.slice(1);
      for (const t of [...new Set([cap, raw])].filter(Boolean)) {
        const page = encodeURIComponent(t.replace(/\s+/g, "_"));
        let r; try { r = await f(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${page}`); } catch { r = null; }
        if (!r || !r.ok) continue;
        const j = await r.json();
        const extract = j.extract || j.description || "";
        if (extract) return { title: j.title || t, extract, url: (j.content_urls && j.content_urls.desktop && j.content_urls.desktop.page) || null };
      }
      return null;
    },
  };
}

// ── createDiscovery({ adapters, fetchImpl }) — run the meaning query across adapters → merged candidates.
export function createDiscovery({ adapters = [linkedDataAdapter()], fetchImpl = null } = {}) {
  const f = pickFetch(fetchImpl);
  // discover(query, { limit, tier }) — tier filters adapters: "offline" = no-network sources (the κ-index,
  // the learned index); "live" = network sources (linked-data, on-demand); "all" = both. The orchestrator
  // tries offline FIRST and only escalates to live when offline is insufficient (latency + the learn payoff).
  async function discover(query, { limit = 5, tier = "all" } = {}) {
    const out = [];
    for (const a of adapters) {
      if (tier === "offline" && a.offline !== true) continue;
      if (tier === "live" && a.offline === true) continue;
      try { const hits = await a.search(query, { fetchImpl: f, limit }); for (const h of hits) out.push({ ...h, adapter: a.id }); } catch (e) { /* one source failing must not kill discovery */ }
    }
    return out;
  }
  // sealCandidate(candidate, query) — fetch ONE candidate's content (via its own adapter) and SEAL it into
  // a real IPFS object. The returned CID is a deterministic function of the discovered bytes and re-derives
  // to itself under the gateway. Returns null when the candidate yields no renderable content.
  async function sealCandidate(c, query = "") {
    const adapter = adapters.find((a) => a.id === (c.adapter || c.source));
    // an adapter whose objects are ALREADY sealed (e.g. the κ-index adapter) supplies them directly,
    // so the cited CID is the real indexed object, not a re-render. Default: fetch content + snapshot.
    if (adapter && typeof adapter.seal === "function") { try { return await adapter.seal(c, query); } catch { return null; } }
    let content = null;
    try { content = adapter && adapter.fetchContent ? await adapter.fetchContent(c.title, { fetchImpl: f }) : null; } catch {}
    if (!content) return null;
    const snap = await sealSnapshot({ resources: [{ name: "index.html", bytes: renderDiscoveredPage(query, c, content) }] });
    return {
      ok: true, query, source: c.source, entityId: c.entityId, title: content.title, ref: c.ref, sourceUrl: content.url,
      cid: snap.rootCid, did: snap.did, blocks: snap.blocks, manifest: snap.manifest,
      extract: content.extract,
      text: content.title + "\n\n" + content.extract,           // the indexable text for Q.recall (meaning)
    };
  }

  // discoverAndSeal(query) — the Stage-2 end-to-end: discover the top candidate that yields content and
  // seal it. (The Stage-3 orchestrator in holo-semantic.mjs fuses + seals several candidates instead.)
  async function discoverAndSeal(query, { limit = 5 } = {}) {
    const candidates = await discover(query, { limit });
    for (const c of candidates) { const sealed = await sealCandidate(c, query); if (sealed) return sealed; }
    return { ok: false, query, reason: "no candidate yielded renderable content", candidates: candidates.length };
  }
  return { discover, sealCandidate, discoverAndSeal, adapters };
}

// renderDiscoveredPage — a self-contained feature page from a discovered, linked-data-typed reference.
// PURE: a deterministic function of (query, candidate, content), so the sealed page's CID is stable.
export function renderDiscoveredPage(query, c, content) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">`
    + `<title>${esc(content.title)}</title></head><body><main>`
    + `<header><div class="q">${esc(query)}</div><h1>${esc(content.title)}</h1>`
    + `<p class="entity">${esc(c.source)} · <a href="${esc(c.concepturi || c.ref)}">${esc(c.entityId || "")}</a>${c.summary ? " · " + esc(c.summary) : ""}</p></header>`
    + `<article>${content.extract.split(/\n{2,}/).map((para) => `<p>${esc(para)}</p>`).join("")}</article>`
    + (content.url ? `<footer><a href="${esc(content.url)}">${esc(content.url)}</a></footer>` : "")
    + `</main></body></html>`;
}

export default { linkedDataAdapter, createDiscovery, renderDiscoveredPage };
