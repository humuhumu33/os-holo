// holo-hub-agent.mjs — Holo Hub Stage 6 (ADR-0094): the store's AGENT door. The SAME store a person
// browses is drivable by an AI agent — composed onto the seams ADR-0093 already ships (holo-mcp +
// /~<app>/api over one κ-store), so there is no new infrastructure, only a derived manifest + resolver.
//
//   • Every product is a self-verifying RESOURCE (uri = the product κ): an agent fetches + re-derives it
//     (resources/read, Law L5) — discover the catalog without trusting it.
//   • The store VERBS are MCP tools shaped after the pinned Medusa Store-API (listProducts · getProduct ·
//     searchProducts are READ; ownProduct · buyProduct are EGRESS). EXPOSURE ≠ AUTHORIZATION: a read tool
//     returns self-verifying data; an egress tool is DISCOVERABLE + faithfully-schema'd but DEFAULT-DENY —
//     buying moves value only through the conscience-gated Holo Wallet (Stage 5), never on the tool's say-so.
//
// Pure + isomorphic: this derives shapes; the witness mounts them on the REAL holo-mcp registry/handle.

import { mapCatalog, STORE_SPEC_KAPPA } from "./holo-hub.mjs";

// The store verbs, shaped after the adopted Medusa Store-API (the byte-pinned contract κ below).
// `x-holo-exec`: read = pure self-verifying data; egress = governed (needs a grant + the wallet).
export const STORE_TOOLS = Object.freeze([
  { name: "listProducts", description: "List the store catalog — every product is a holo app addressed by its did:holo κ (~ Store-API GET /store/products).",
    inputSchema: { type: "object", properties: { limit: { type: "number" }, category: { type: "string" } } }, "x-holo-exec": "read" },
  { name: "searchProducts", description: "Search the catalog by name, description or category (~ GET /store/products?q=).",
    inputSchema: { type: "object", properties: { query: { type: "string" } }, required: ["query"] }, "x-holo-exec": "read" },
  { name: "getProduct", description: "Fetch one product as a self-verifying κ-object; re-derive its κ to verify (Law L5) (~ GET /store/products/{id}).",
    inputSchema: { type: "object", properties: { id: { type: "string", description: "the product did:holo κ" } }, required: ["id"] }, "x-holo-exec": "read" },
  { name: "ownProduct", description: "Take free ownership — mint a portable Title over the product κ (Holo Own, ADR-0053). EGRESS: needs a granted identity.",
    inputSchema: { type: "object", properties: { id: { type: "string" } }, required: ["id"] }, "x-holo-exec": "egress" },
  { name: "buyProduct", description: "Buy a license — pays the maker in USD₮ on Plasma ONLY through the human-approved Holo Wallet (~ POST /store/carts → complete). EGRESS: default-deny.",
    inputSchema: { type: "object", properties: { id: { type: "string" }, price: { type: "number" } }, required: ["id"] }, "x-holo-exec": "egress" },
]);

// hubManifest({ products }) → the holospace.json an agent registry mounts: each product is a
// self-verifying resource (uri = its κ); the store verbs are the tools; the adopted Store-API κ is named.
export function hubManifest({ products }) {
  return {
    id: "org.hologram.HoloHub", name: "Holo Hub",
    "@type": ["schema:SoftwareApplication", "schema:WebApplication"],
    type: ["schema:SoftwareApplication", "schema:WebApplication"],
    summary: "The store for everything you can run — every product is a holo app by its content address; for people and agents alike.",
    entry: "index.html",
    resources: products.map((p) => ({
      uri: p.id, name: p["schema:name"], description: "A product = a holo app, addressed by its did:holo κ (re-derive to verify, L5).",
      mimeType: "application/ld+json", type: "schema:Product",
    })),
    tools: [...STORE_TOOLS],
    conforms: { specs: ["holo-hub", "holo-shell-mcp"] },
    "hosc:adoptedModel": STORE_SPEC_KAPPA,           // the byte-pinned Medusa Store-API contract κ
  };
}

// hubAgentSurface({ index, store }) → { manifest, resolve, products, hub }. `resolve(uri)` returns the
// product κ-object (self-verifying) — the ONE resolver fed to both the MCP server and /~hub/api REST.
export function hubAgentSurface({ index, store = new Map() }) {
  const { hub, products } = mapCatalog({ index, store });
  const byK = new Map(products.map((p) => [p.id, p]));
  const resolve = (uri) => byK.get(uri) || hub.getProduct(uri) || null;
  return { manifest: hubManifest({ products }), resolve, products, hub };
}

export default { STORE_TOOLS, hubManifest, hubAgentSurface };
