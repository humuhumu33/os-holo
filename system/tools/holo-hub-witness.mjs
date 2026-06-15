// holo-hub-witness.mjs — proves Holo Hub Stage 2 (ADR-0094): the catalog-as-products κ data
// layer. Drives the PURE core (holo-hub.mjs) against the REAL holo-object UOR envelope and the
// REAL `apps/index.jsonld` (41 apps) — product = a holo app addressed by its did:holo κ, stored
// as a self-verifying κ-object over a content-addressed store (the Postgres replacement).
//
// Checks: catalog loads · every app → exactly one product (bijection, NO orphan) · product
// re-derives + round-trips (L5) · the StoreProduct shape is faithful to the adopted Medusa
// contract · product = app by κ (metadata.holo_app) · deterministic (same catalog → same κ) ·
// tamper REFUSED (L5) · the adopted-model κ matches the Stage-1 pinned spec (re-hashed) · and
// the WHOLE map is 0-NETWORK (a fetch guard counts — Law L4, in-tab serverless).

import { mapCatalog, createHubStore, toStoreProduct, STORE_SPEC_KAPPA, MEDUSA_PIN } from "../os/usr/lib/holo/holo-hub.mjs";
import { verify, address } from "../os/usr/lib/holo/holo-object.mjs";
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const APPS = join(here, "..", "..", "..", "Hologram Apps", "apps");
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// ── 0-network guard (Law L4): any fetch during the map is a FAILURE ───────────────────────────
let fetches = 0;
globalThis.fetch = () => { fetches++; throw new Error("Stage 2 must be 0-network"); };

// ── the REAL catalog (41 apps) ─────────────────────────────────────────────────────────────────
const index = JSON.parse(readFileSync(join(APPS, "index.jsonld"), "utf8"));
const datasets = index["dcat:dataset"] || [];
const N = datasets.length;
ok("catalog loads from apps/index.jsonld", N > 0, N + " datasets");

// ── map the catalog → product κ-objects over a content-addressed store ──────────────────────────
const store = new Map();
const { hub, products, count, appToProduct } = mapCatalog({ index, store });
ok("every app becomes a product (count matches catalog)", count === N, count + "/" + N);

// bijection: one product per app, every product maps back to a unique app, NO orphan
const appIds = new Set(datasets.map((d) => d["@id"]));
const mappedApps = new Set(Object.keys(appToProduct));
const productKappas = new Set(Object.values(appToProduct));
ok("bijection: every app has exactly one product, no orphan",
  mappedApps.size === N && productKappas.size === N && [...appIds].every((a) => mappedApps.has(a)));

// every product re-derives (L5) and round-trips through the κ-store byte-stably
let roundTrip = 0, rederive = 0;
for (const [appId, kappa] of Object.entries(appToProduct)) {
  const got = hub.getProduct(kappa);                 // resolve + verify
  if (got) { rederive++; if (got.id === kappa && got.holo_app === appId) roundTrip++; }
}
ok("every product re-derives (L5) and round-trips by κ", rederive === N && roundTrip === N, roundTrip + "/" + N);

// product = app, BY κ: metadata.holo_app + external_id === the app's did:holo
const sample = hub.getProduct(appToProduct[datasets[0]["@id"]]);
const sp = sample["medusa:product"];
ok("product = app by κ (holo_app + external_id === app did:holo)",
  sample.holo_app === datasets[0]["@id"] && sp.external_id === datasets[0]["@id"]);

// faithful StoreProduct shape (the adopted Medusa contract)
ok("StoreProduct shape is faithful (title·handle·status·variants·options·metadata)",
  typeof sp.title === "string" && typeof sp.handle === "string" && sp.status === "published" &&
  Array.isArray(sp.variants) && sp.variants.length === 1 && Array.isArray(sp.options) &&
  sp.metadata && typeof sp.metadata.holo_app === "string");

// price is UNSET (honest — set by the Stage-3 Forge-compiled pricing κ-transform, never faked)
ok("price is honestly UNSET until Stage 3 (no fabricated number)",
  Array.isArray(sp.variants[0].prices) && sp.variants[0].prices.length === 0);

// deterministic: same catalog → identical product κ for every app (Law L3/L5)
const store2 = new Map();
const again = mapCatalog({ index, store: store2 });
ok("deterministic: rebuild → identical product κ per app (L3/L5)",
  Object.entries(appToProduct).every(([a, k]) => again.appToProduct[a] === k));

// tamper REFUSED (L5): corrupt a stored product's bytes → it no longer resolves as valid
const victimK = appToProduct[datasets[0]["@id"]];
const hex = victimK.split(":").pop();
const tampered = JSON.parse(store.get(hex).toString("utf8"));
tampered["medusa:product"].title = "TAMPERED";       // change content, keep the old id
store.set(hex, Buffer.from(JSON.stringify(tampered), "utf8"));
ok("tamper REFUSED (flipped product byte → id no longer re-derives, L5)", hub.getProduct(victimK) === null);

// the adopted-model binding matches the Stage-1 pinned spec, re-hashed from the vendored bytes
const specPath = join(APPS, "hub", "vendor", "medusa", "www", "apps", "api-reference", "specs", "store", "openapi.full.yaml");
const specKappa = "did:holo:sha256:" + createHash("sha256").update(readFileSync(specPath)).digest("hex");
ok("products bind to the pinned Medusa Store-API κ (re-hashed from vendor bytes)",
  specKappa === STORE_SPEC_KAPPA && sample.adopted_model === STORE_SPEC_KAPPA, specKappa.slice(0, 24) + "…");
ok("the Medusa pin (v2.15.5 @ commit) is carried on every product",
  sample.medusa_pin.tag === MEDUSA_PIN.tag && sample.medusa_pin.commit === MEDUSA_PIN.commit);

// the whole Stage-2 map touched the network ZERO times (in-tab serverless, L4)
ok("0-network: building the entire catalog made no fetch", fetches === 0, fetches + " fetches");

// ── emit the EARL result + exit ──
const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Hub — catalog-as-products κ data layer (ADR-0094 Stage 2)",
  passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-hub-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
