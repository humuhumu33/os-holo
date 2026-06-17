// holo-publish-witness.mjs — proves T1: a composed κ-page, once PUBLISHED to the κ-store, resolves through
// the REAL gateway path the service worker uses (resolveIpfsPath over makeGetBlock), NETWORK-FREE. This is
// the exact production wiring: holo-fhs-sw.js:364 serves /ipfs/<cid> via resolveIpfsPath(root, path,
// makeGetBlock(fetch)); makeGetBlock consults the holo-kappa-v2 κ-store cache FIRST (holo-ipfs-gateway.mjs:73),
// which publishToKStore writes (holo-web-snapshot.mjs). So "Open κ-page → /ipfs/<cid>/" is served from the
// local commons with no origin and no IPFS peer. The witness forbids network (gateways:[], discover:false)
// so the ONLY possible source is the published κ-store. The κ-store is trusted by design (only verified
// bytes are written): the L5 boundary is at the WRITE side — makeGetBlock refuses a gateway's mismatched
// bytes before they could be cached (gateway:65), which the witness also proves.
//
// A minimal Cache API shim stands in for the browser `caches` (Node has none), storing bytes and handing
// back a fresh Response on match — so publishToKStore and makeGetBlock's cache path run unmodified.
import { createDiscovery, linkedDataAdapter } from "../os/sbin/holo-discover.mjs";
import { createSemantic } from "../os/sbin/holo-semantic.mjs";
import { publishToKStore } from "../os/sbin/holo-web-snapshot.mjs";
import { makeGetBlock, resolveIpfsPath } from "../os/sbin/holo-ipfs-gateway.mjs";
import * as holoIpfs from "../os/usr/lib/holo/holo-ipfs.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

// ── minimal Cache API shim (browser `caches`): store bytes per key, return a fresh Response on match. ──
function installCachesShim() {
  const stores = new Map();
  globalThis.caches = {
    async open(name) {
      let m = stores.get(name); if (!m) { m = new Map(); stores.set(name, m); }
      return {
        async put(key, res) { m.set(String(key), new Uint8Array(await res.arrayBuffer())); },
        async match(key) { const b = m.get(String(key)); return b ? new Response(b) : undefined; },
        async delete(key) { return m.delete(String(key)); },
      };
    },
    _store: stores,
  };
  return stores;
}

// ── one-entity fixture so the orchestrator composes a real page offline ──
const SEARCH = { "ancient Rome": { success: 1, search: [{ id: "Q1747689", label: "Ancient Rome", description: "civilization of the ancient Mediterranean", concepturi: "http://www.wikidata.org/entity/Q1747689" }] } };
const SUMMARY = { "Ancient_Rome": { title: "Ancient Rome", extract: "Ancient Rome grew from a settlement on the Tiber into a republic and then an empire dominating the Mediterranean.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Ancient_Rome" } } } };
const resp = (body, { ok = true, status = 200 } = {}) => ({ ok, status, async json() { return body; }, async text() { return JSON.stringify(body); } });
const fixtureFetch = async (url) => {
  const u = String(url);
  if (u.includes("wbsearchentities")) { const m = u.match(/[?&]search=([^&]+)/); const q = m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : ""; return resp(SEARCH[q] || { success: 1, search: [] }); }
  if (u.includes("/page/summary/")) { const m = u.match(/\/page\/summary\/([^?]+)/); const page = m ? decodeURIComponent(m[1]) : ""; return SUMMARY[page] ? resp(SUMMARY[page]) : resp(null, { ok: false, status: 404 }); }
  return resp(null, { ok: false, status: 404 });
};

async function main() {
  const cacheStore = installCachesShim();

  // compose a page (the orchestrator's normal output).
  const semantic = createSemantic({ discovery: createDiscovery({ adapters: [linkedDataAdapter()], fetchImpl: fixtureFetch }) });
  const r = await semantic.answer("history of ancient Rome", { perProbe: 5, topK: 3 });
  ok("orchestrator composed a sealed page", r.ok && !!r.cid && r.blocks.size > 0, r.cid && r.cid.slice(0, 18) + "…");

  // a network fetch that MUST never be needed (counts any attempt). With gateways:[] + discover:false,
  // makeGetBlock can only consult the κ-store cache — so resolution proves the publish path end to end.
  let net = 0;
  const noNet = async () => { net++; return { ok: false, status: 0, async arrayBuffer() { return new ArrayBuffer(0); } }; };

  // BEFORE publish: the gateway cannot resolve the page (empty κ-store, no network).
  let preErr = false;
  try { const o = await resolveIpfsPath(r.cid, "", makeGetBlock(noNet, { gateways: [], discover: false })); preErr = (o.kind === "error"); } catch { preErr = true; }
  ok("before publish: the gateway cannot resolve it (no κ-store, no network)", preErr);

  // PUBLISH to the κ-store (what renderSemantic does on every composed page).
  const n = await publishToKStore(r.blocks);
  ok("publishToKStore wrote every composed block to the κ-store", n === r.blocks.size, n + "/" + r.blocks.size + " blocks");

  // AFTER publish: resolve through the REAL gateway path, network forbidden.
  const getBlock = makeGetBlock(noNet, { gateways: [], discover: false });
  const out = await resolveIpfsPath(r.cid, "", getBlock);
  ok("after publish: the gateway resolves /ipfs/<cid>/ to its index.html", out.kind === "file" && out.servedIndex === true, out.kind);
  const bytes = await holoIpfs.reassembleFile(out.cidStr, getBlock);     // re-derives every block (L5)
  const text = new TextDecoder().decode(bytes);
  ok("served bytes are the composed page (the cited source CIDs are present)", r.sources.every((s) => text.includes(s.cid)), bytes.length + " B");
  ok("resolution used ZERO network — served entirely from the published κ-store", net === 0, net + " network calls");

  // The κ-store is TRUSTED by design — only verified bytes are ever written to it. The L5 boundary is at the
  // WRITE side: makeGetBlock re-derives every gateway-fetched block and REFUSES a mismatch (gateway:65), so
  // tampered bytes can never enter the cache in the first place. Prove that boundary with a lying gateway
  // on a CID NOT in the cache: the wrong bytes are rejected → getBlock returns null (nothing to cache).
  const probe = holoIpfs.cidToString(await holoIpfs.cidOf(new TextEncoder().encode("holo-t1-guard-probe")));
  const liar = async () => ({ ok: true, status: 200, async arrayBuffer() { return new TextEncoder().encode("not the block").buffer; } });
  const got = await makeGetBlock(liar, { gateways: ["https://liar.example"], discover: false })(probe);
  ok("a gateway serving wrong bytes is REFUSED before caching (only verified bytes enter the κ-store)", got === null);

  const result = { "@type": "holo:WitnessResult", witness: "holo-publish", step: "T1",
    composedCid: r.cid, sources: r.sources.map((s) => s.cid), pass, fail, total: pass + fail, ok: fail === 0, checks };
  writeFileSync(join(here, "holo-publish-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}  ·  published ${r.cid.slice(0, 16)}… → gateway-resolved network-free`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
