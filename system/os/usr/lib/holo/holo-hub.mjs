// holo-hub.mjs — Holo Hub Stage 2 (ADR-0094): the catalog-as-products κ data layer.
//
// A PRODUCT IS a holo app addressed by its did:holo κ. This module is a PURE, isomorphic
// ENCODER (the holo-import.mjs idiom): it maps each `apps/index.jsonld` dataset entry into a
// Medusa **StoreProduct**-shaped record, wrapped in a self-verifying UOR object whose identity
// is its own content κ and whose `metadata.holo_app` points at the app's did:holo identity.
//
// "Adopt, don't run" (ADR-0029): the product shape is FAITHFUL to Medusa's pinned Store-API
// contract (vendor/medusa @ v2.15.5, openapi.full.yaml κ below) — we fill the fields the
// catalog actually has and leave the rest at the contract's defaults (honest, never faked).
// The κ-store REPLACES Postgres: products are content-addressed objects, put/resolved over the
// injected store (Map in Node, the idb κ-store in the browser) — 0-network, re-derivable (L5).
//
// Deps are INJECTED via holo-object.mjs (the UOR envelope core) — no per-file re-derivation
// (Law L2). Pure + dependency-free; runs identically in Node (the witness) and the browser.

import { UOR_CONTEXT, address, seal, verify, put, resolve } from "./holo-object.mjs";

// The adopted Medusa Store-API contract, byte-pinned as a κ-object (vendor/medusa, Stage 1).
// Every product REFERENCES this κ in metadata: it Merkle-commits to the exact model it conforms
// to, re-derivable whenever the pinned spec bytes are present (verify by re-hashing the file).
export const STORE_SPEC_KAPPA =
  "did:holo:sha256:40e306a68628bd0e6f51b1dfa9dff9fac18a2db901a41f8f38d8ecf37a97ca78";
export const MEDUSA_PIN = Object.freeze({ tag: "v2.15.5", commit: "b74b5b19569534412a67835ffae8fb3afbf6f5c5" });

// A minimal additive context term — points at Medusa's namespace, mints NO reusable vocabulary.
const MEDUSA_CTX = { medusa: "https://medusajs.com/ns#" };

const slugify = (s) =>
  String(s || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const first = (v) => (Array.isArray(v) ? v[0] : v);

// toStoreProduct(entry): a catalog dataset entry → a Medusa StoreProduct record (faithful shape).
// Fills only what the catalog carries; contract defaults elsewhere. The product IDENTITY is the
// app: `metadata.holo_app` + `external_id` = the app's did:holo, `handle` = its readable slug.
export function toStoreProduct(entry) {
  const appId = entry["@id"];                                    // e.g. did:holo:slug:org.hologram.HoloAmp
  const identifier = entry["schema:identifier"] || appId;        // e.g. org.hologram.HoloAmp
  const title = entry["schema:name"] || identifier;
  const handle = slugify(title) || slugify(identifier);
  const category = entry["schema:applicationCategory"] || null;
  const thumbnail = entry["schema:image"] || null;
  const landing = entry["dcat:landingPage"] || null;
  const collection = category
    ? { id: "pcol_" + slugify(category), title: category, handle: slugify(category) }
    : null;
  // A holo app is one digital good → a single default variant; price is UNSET until Stage 3
  // (the Forge-compiled pricing κ-transform supplies it) — honest, not a fabricated number.
  const variant = {
    id: "variant_" + handle, title: "Standard", sku: identifier,
    manage_inventory: false, allow_backorder: false, prices: [],
  };
  return {
    id: "prod_" + handle,
    title, subtitle: null, handle, description: entry["schema:description"] || null,
    is_giftcard: false, status: "published", thumbnail,
    collection_id: collection?.id || null, collection,
    type_id: null, type: null,
    categories: category ? [{ id: "pcat_" + slugify(category), name: category, handle: slugify(category) }] : [],
    tags: [], images: thumbnail ? [{ id: "img_" + handle, url: thumbnail }] : [],
    options: [{ id: "opt_" + handle, title: "Edition", values: [{ id: "optval_" + handle, value: "Standard" }] }],
    variants: [variant],
    discountable: true, external_id: appId,
    weight: null, length: null, height: null, width: null,
    origin_country: null, hs_code: null, mid_code: null, material: null,
    metadata: {
      holo_app: appId,                                           // ← product = app, by κ
      landing_page: landing,
      application_category: category,
      software_requirements: entry["schema:softwareRequirements"] || [],
    },
    created_at: null, updated_at: null, deleted_at: null,
  };
}

// makeProductObject(entry): wrap the StoreProduct record in a UOR object so it is a self-verifying
// κ-object. Its content κ = address() over the canonical content; it carries the app identity and
// references the adopted-model κ. NOT sealed here — sealing/storing happens in put/createHubStore.
export function makeProductObject(entry) {
  const product = toStoreProduct(entry);
  return {
    "@context": [...UOR_CONTEXT, MEDUSA_CTX],
    "@type": ["schema:Product", "medusa:StoreProduct"],
    "schema:name": product.title,
    "schema:description": product.description,
    "schema:image": product.thumbnail,
    "schema:category": product.metadata.application_category,
    "medusa:product": product,                                   // the faithful adopted-contract record
    holo_app: entry["@id"],                                      // the app this product IS
    adopted_model: STORE_SPEC_KAPPA,                             // the pinned Medusa contract κ
    medusa_pin: MEDUSA_PIN,
  };
}

// buildProducts(index): the whole `apps/index.jsonld` → product UOR objects (unsealed).
export function buildProducts(index) {
  const datasets = index?.["dcat:dataset"] || [];
  return (Array.isArray(datasets) ? datasets : [datasets]).map(makeProductObject);
}

// createHubStore({store}): the κ-store-backed product repository (the Postgres replacement).
// `store` is any content-addressed map (hex → canonical bytes): a Map in Node, the idb κ-store
// in the browser. put = seal + store the exact bytes; get/byApp/list resolve + re-derive (L5).
export function createHubStore({ store }) {
  const index = new Map();                                       // appId → product κ (the catalog index)
  return {
    store,
    appIndex: index,
    // putProduct(entry): seal the product to its content κ, store its bytes, index it by app.
    putProduct(entry) {
      const sealed = put(store, makeProductObject(entry));       // holo-object: seal + persist bytes
      index.set(sealed.holo_app, sealed.id);
      return sealed;
    },
    getProduct(kappa) {                                          // resolve by product κ + verify (L5)
      const obj = resolve(store, kappa);
      return obj && verify(obj) ? obj : null;
    },
    byApp(appId) {
      const k = index.get(appId);
      return k ? this.getProduct(k) : null;
    },
    listProducts() {
      return [...index.values()].map((k) => this.getProduct(k));
    },
  };
}

// mapCatalog({index, store}): build + persist every product, returning the hub store + a report.
// Deterministic: same catalog → same product κ for every app (Law L3/L5). 0-network (pure).
export function mapCatalog({ index, store }) {
  const hub = createHubStore({ store });
  const datasets = index?.["dcat:dataset"] || [];
  const products = (Array.isArray(datasets) ? datasets : [datasets]).map((e) => hub.putProduct(e));
  return {
    hub,
    products,
    count: products.length,
    appToProduct: Object.fromEntries(hub.appIndex),
  };
}
