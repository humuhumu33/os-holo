// holo-index-witness.mjs — proves STAGE 4: the semantic index is itself a SELF-VERIFYING, SHAREABLE IPFS
// object. The load-bearing claims:
//
//   CRAWL    seeds → discover + seal content → docs (each an already content-addressed source object)
//   BUILD    docs → retrieval corpus + a canonical manifest, SEALED into one IPFS object → the index CID
//   RESOLVE  the index resolves through the gateway and re-derives (it IS a κ-object, not a private blob)
//   SHARE    toCar → fromCar → loadIndex: a re-loaded index rebuilds a corpus whose stateKappa MATCHES
//            byte-for-byte (deterministic re-hydration — the index re-derives, nobody has to be trusted)
//   QUERY    the loaded index, exposed as a discovery adapter, answers a meaning query — NETWORK-FREE
//   CITE     the orchestrator composes a page over the index; every cited source CID resolves + re-derives
//   REFUSE   a tampered index block is rejected
//
// Fixture-driven crawl (offline) so the whole thing re-derives; HOLO_LIVE=1 crawls real Wikidata+Wikipedia.
import { createDiscovery, linkedDataAdapter } from "../os/sbin/holo-discover.mjs";
import { buildIndex, loadIndex, toIndexCar, fromIndexCar, indexAdapter, crawl } from "../os/sbin/holo-index.mjs";
import { createSemantic } from "../os/sbin/holo-semantic.mjs";
import { blockSource } from "../os/sbin/holo-web-snapshot.mjs";
import { resolveIpfsPath } from "../os/sbin/holo-ipfs-gateway.mjs";
import * as holoIpfs from "../os/usr/lib/holo/holo-ipfs.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, skip = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };
const skipped = (name, why) => { skip++; console.log("  --  " + name + " (skipped: " + why + ")"); };

// ── fixtures: one entity per seed + a Wikipedia extract per title ────────────────────────────────────
const SEARCH = {
  "ancient Rome":    { success: 1, search: [{ id: "Q1747689", label: "Ancient Rome", description: "civilization of the ancient Mediterranean", concepturi: "http://www.wikidata.org/entity/Q1747689" }] },
  "Roman Empire":    { success: 1, search: [{ id: "Q2277", label: "Roman Empire", description: "empire in the Mediterranean from 27 BC", concepturi: "http://www.wikidata.org/entity/Q2277" }] },
  "Roman Republic":  { success: 1, search: [{ id: "Q17167", label: "Roman Republic", description: "period of ancient Roman civilization", concepturi: "http://www.wikidata.org/entity/Q17167" }] },
};
const SUMMARY = {
  "Ancient_Rome":   { title: "Ancient Rome", extract: "Ancient Rome grew from a settlement on the Tiber into a republic and then an empire dominating the Mediterranean and shaping Western law and government.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Ancient_Rome" } } },
  "Roman_Empire":   { title: "Roman Empire", extract: "The Roman Empire was the post-Republican period of ancient Rome, ruled by emperors from 27 BC across the Mediterranean.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Roman_Empire" } } },
  "Roman_Republic": { title: "Roman Republic", extract: "The Roman Republic was the era of classical Roman civilization beginning with the overthrow of the Roman Kingdom and ending with the Empire.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Roman_Republic" } } },
};
const resp = (body, { ok = true, status = 200 } = {}) => ({ ok, status, async json() { return body; }, async text() { return typeof body === "string" ? body : JSON.stringify(body); } });
let fetchCalls = 0;
const fixtureFetch = async (url) => {
  fetchCalls++; const u = String(url);
  if (u.includes("wbsearchentities")) { const m = u.match(/[?&]search=([^&]+)/); const q = m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : ""; return resp(SEARCH[q] || { success: 1, search: [] }); }
  if (u.includes("/page/summary/")) { const m = u.match(/\/page\/summary\/([^?]+)/); const page = m ? decodeURIComponent(m[1]) : ""; return SUMMARY[page] ? resp(SUMMARY[page]) : resp(null, { ok: false, status: 404 }); }
  return resp(null, { ok: false, status: 404 });
};

const DIM = 64;
const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
const fakeEmbedder = { id: "fake-bow",
  async embed(text) { const v = new Array(DIM).fill(0); for (const t of String(text).toLowerCase().match(/[a-z0-9]+/g) || []) v[fnv(t) % DIM] += 1; const n = Math.sqrt(v.reduce((a, x) => a + x * x, 0)) || 1; return v.map((x) => x / n); },
  similarity(a, b) { let d = 0; for (let i = 0; i < a.length; i++) d += a[i] * b[i]; return d; } };

async function runChain(fetchImpl, label) {
  const SEEDS = ["ancient Rome", "Roman Empire", "Roman Republic"];

  // CRAWL + BUILD
  const discovery = createDiscovery({ adapters: [linkedDataAdapter()], fetchImpl });
  const docs = await crawl(SEEDS, { discovery });
  ok(label + "crawl seals one content-addressed doc per seed", docs.length === 3 && docs.every((d) => d.cid && d.text), docs.length + " docs");
  const idx = await buildIndex(docs, { embedder: fakeEmbedder });
  ok(label + "the index seals to a real IPFS object (sha256 CIDv1)", (() => { try { const c = holoIpfs.parseCID(idx.indexCid); return c.version === 1 && c.hashCode === holoIpfs.HASH.SHA2_256; } catch { return false; } })(), idx.indexCid.slice(0, 20) + "…");

  // RESOLVE the index manifest through the gateway (it IS a κ-object).
  const out = await resolveIpfsPath(idx.indexCid, "index.json", blockSource(idx.blocks));
  const manifest = out.kind === "file" ? JSON.parse(new TextDecoder().decode(await holoIpfs.reassembleFile(out.cidStr, blockSource(idx.blocks)))) : null;
  ok(label + "the index resolves + re-derives through the gateway", !!manifest && manifest["@type"] === "holo:SemanticIndex" && manifest.docs.length === 3, manifest && manifest.docs.length + " docs");

  // BUILD is deterministic — same docs → same index CID + same corpus state.
  const idx2 = await buildIndex(docs, { embedder: fakeEmbedder });
  ok(label + "the index CID is deterministic / re-derivable", idx.indexCid === idx2.indexCid && idx.stateKappa === idx2.stateKappa, idx2.indexCid.slice(0, 18) + "…");

  // SHARE — round-trip the whole index through a single CAR file, then LOAD it.
  const car = toIndexCar(idx.indexCid, idx.blocks);
  const bundle = fromIndexCar(car);
  const loaded = await loadIndex(idx.indexCid, bundle, { embedder: fakeEmbedder });
  ok(label + "a CAR-shared index re-loads and its corpus state MATCHES byte-for-byte", loaded.stateKappa === idx.stateKappa, "CAR " + car.length + " B");
  ok(label + "the re-loaded manifest carries every indexed doc", loaded.manifest.docs.length === 3);

  // QUERY the loaded index, network-free — exposed as a discovery adapter.
  const callsBefore = fetchCalls;
  const idxDisco = createDiscovery({ adapters: [indexAdapter(loaded)] });
  const cands = await idxDisco.discover("ancient rome", { limit: 3 });
  ok(label + "the loaded κ-index answers a meaning query (network-free retrieval)", cands.length > 0 && cands[0].cid, cands[0] && cands[0].title);
  // every candidate CID resolves + re-derives from the bundle.
  let allResolve = true; for (const c of cands) { try { const so = await resolveIpfsPath(c.cid, "", loaded.getBlock); const t = so.kind === "file" ? new TextDecoder().decode(await holoIpfs.reassembleFile(so.cidStr, loaded.getBlock)) : ""; if (!t) allResolve = false; } catch { allResolve = false; } }
  ok(label + "every indexed source CID resolves + re-derives from the shared bundle", allResolve);

  // CITE — the orchestrator composes a page over the κ-index (no live network).
  const sem = createSemantic({ discovery: idxDisco });
  const ans = await sem.answer("history of ancient Rome", { perProbe: 5, topK: 3 });
  const store = blockSource(ans.blocks);
  const pageOut = await resolveIpfsPath(ans.cid, "", store);
  const pageText = pageOut.kind === "file" ? new TextDecoder().decode(await holoIpfs.reassembleFile(pageOut.cidStr, store)) : "";
  ok(label + "the orchestrator composes a page over the index, citing indexed CIDs", ans.ok && ans.sources.length >= 1 && ans.sources.every((s) => pageText.includes(`data-source-cid="${s.cid}"`)), ans.sources.length + " cited");
  ok(label + "querying + composing over the loaded index used ZERO network", fetchCalls === callsBefore, (fetchCalls - callsBefore) + " calls");

  // REFUSE — tamper the manifest block.
  const evil = new Map(idx.blocks); const mc = holoIpfs.cidToString(holoIpfs.parseCID(out.cidStr));
  const good = evil.get(mc) || evil.get(out.cidStr); const bad = good.slice(); bad[good.length - 1] ^= 1; evil.set(mc, bad);
  let refused = false; try { await holoIpfs.reassembleFile(out.cidStr, blockSource(evil)); } catch { refused = true; }
  ok(label + "a tampered index block is REFUSED at resolve", refused);

  return idx;
}

async function main() {
  const idx = await runChain(fixtureFetch, "");
  ok("the crawl exercised the fixture fetch (then the index is self-contained)", fetchCalls >= 3, fetchCalls + " calls");

  if (process.env.HOLO_LIVE === "1") {
    try { await runChain(null, "[live] "); } catch (e) { ok("[live] real-crawl index builds + shares + queries", false, String(e && e.message || e)); }
  } else { skipped("[live] real Wikidata + Wikipedia crawl → index", "set HOLO_LIVE=1 to run"); }

  const result = { "@type": "holo:WitnessResult", witness: "holo-index", stage: 4,
    indexCid: idx.indexCid, indexState: idx.stateKappa, docs: [...idx.docs.keys()],
    pass, fail, skip, total: pass + fail, ok: fail === 0, checks };
  writeFileSync(join(here, "holo-index-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}${skip ? "  (" + skip + " skipped)" : ""}  ·  index ${idx.indexCid.slice(0, 18)}… over ${idx.docs.size} sources`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
