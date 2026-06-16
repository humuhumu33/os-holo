// holo-q-openrouter-catalog.mjs — the model CATALOG for the OpenRouter tier (ADR-0102): "select ANY model
// via a toggle". OpenRouter exposes a public `GET /api/v1/models` catalog of every routable model; this
// turns it into a normalized, searchable list so a picker can offer the whole universe and switching is
// just a κ-re-registration (a new {wireFormat,modelId} → a new provider κ, the vaulted key unchanged).
//
// Pure shaping + ONE injected-fetch reader (no key needed — the catalog is public), so it is Node-witnessed
// with canned JSON. DOM-free, dependency-free.

// normalizeCatalog(json) → [{ id, name, context, promptPrice, completionPrice, free }] — pricing strings
// (per-token USD) become numbers; `free` flags a $0 / ":free" model. Sorted by id for a stable picker.
export function normalizeCatalog(json) {
  const rows = (json && Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : []) || [];
  const out = [];
  for (const m of rows) {
    if (!m || !m.id) continue;
    const p = m.pricing || {};
    const promptPrice = Number(p.prompt != null ? p.prompt : NaN);
    const completionPrice = Number(p.completion != null ? p.completion : NaN);
    const free = /:free$/.test(m.id) || (promptPrice === 0 && completionPrice === 0);
    out.push({
      id: m.id,
      name: m.name || m.id,
      context: Number(m.context_length || (m.top_provider && m.top_provider.context_length) || 0) || 0,
      promptPrice: Number.isFinite(promptPrice) ? promptPrice : null,
      completionPrice: Number.isFinite(completionPrice) ? completionPrice : null,
      free,
    });
  }
  return out.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
}

// searchCatalog(list, query, { freeOnly?, limit? }) → filtered list. Case-insensitive substring over id +
// name; exact-id and prefix matches rank first, then the rest in id order. Pure + deterministic.
export function searchCatalog(list, query = "", { freeOnly = false, limit = 0 } = {}) {
  let rows = Array.isArray(list) ? list.slice() : [];
  if (freeOnly) rows = rows.filter((r) => r.free);
  const q = String(query || "").trim().toLowerCase();
  if (q) {
    rows = rows.filter((r) => r.id.toLowerCase().includes(q) || (r.name || "").toLowerCase().includes(q));
    const rank = (r) => r.id.toLowerCase() === q ? 0 : r.id.toLowerCase().startsWith(q) ? 1 : 2;
    rows.sort((a, b) => rank(a) - rank(b) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  }
  return limit > 0 ? rows.slice(0, limit) : rows;
}

// fetchCatalog(fetchImpl, { base }) → normalized catalog. The ONE network touch (a public GET, no key).
// fetchImpl injected so the host owns the fetch (and the witness uses a mock). Throws on a bad response.
export async function fetchCatalog(fetchImpl, { base = "https://openrouter.ai/api/v1" } = {}) {
  if (typeof fetchImpl !== "function") throw new Error("fetchCatalog: a fetchImpl is required");
  const res = await fetchImpl(base.replace(/\/$/, "") + "/models", { method: "GET", headers: { "content-type": "application/json" } });
  if (!res || !res.ok) throw new Error("openrouter catalog HTTP " + (res && res.status));
  const json = await res.json();
  return normalizeCatalog(json);
}

export default { normalizeCatalog, searchCatalog, fetchCatalog };
