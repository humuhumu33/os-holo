// holo-discover-witness.mjs — proves STAGE 2 of IPFS-native semantic rendering: discovery of content the
// system did NOT pre-seed, via an UNTRUSTED external index, with trust recovered at resolve time (Law L5).
//
//   DISCOVER  a meaning query → the linked-data adapter (Wikidata entity search) → typed candidates
//   SEAL      fetch the top candidate's content → mint a REAL IPFS object (sealSnapshot)  → a fresh CID
//   RESOLVE   the gateway walks that object's DAG, RE-DERIVING every block to its CID      → verified bytes
//   REFUSE    a tampered block is rejected — the untrusted index can nominate, never forge
//   RECALL    index the discovered object → Q.recall ranks it for the meaning query (loop closed)
//
// The CID is NOT in any seed list: it is a deterministic function of bytes fetched AT QUERY TIME. The
// witness injects a FIXTURE fetch (recorded Wikidata + Wikipedia responses) so it is offline + fully
// re-derivable — the same discipline as holo-ipfs-gateway driving makeGetBlock with a fixture store. An
// optional live pass (HOLO_LIVE=1) hits the real endpoints; it is SKIPPED by default, never a failure.
import { createDiscovery, linkedDataAdapter } from "../os/sbin/holo-discover.mjs";
import { blockSource } from "../os/sbin/holo-web-snapshot.mjs";
import { resolveIpfsPath } from "../os/sbin/holo-ipfs-gateway.mjs";
import { createCorpus } from "../os/usr/lib/holo/q/holo-q-corpus.js";
import { createRecall } from "../os/usr/lib/holo/q/holo-q-recall.js";
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

// ── recorded fixtures (real response shapes; trimmed) ────────────────────────────────────────────────
const WIKIDATA_SEARCH = { success: 1, search: [
  { id: "Q1747689", label: "Ancient Rome", description: "civilization of the ancient Mediterranean (8th c. BC – 5th c. AD)", concepturi: "http://www.wikidata.org/entity/Q1747689" },
  { id: "Q2277", label: "Roman Empire", description: "empire in the Mediterranean from 27 BC", concepturi: "http://www.wikidata.org/entity/Q2277" },
  { id: "Q17167", label: "Roman Republic", description: "period of ancient Roman civilization", concepturi: "http://www.wikidata.org/entity/Q17167" },
] };
const WIKI_SUMMARY = {
  "Ancient_Rome": { title: "Ancient Rome", extract:
    "Ancient Rome was a civilization that grew from a small settlement on the Italian Peninsula into a vast empire.\n\n" +
    "Over many centuries the Roman state evolved from a monarchy to a republic and then to an empire, dominating the Mediterranean and shaping Western law, language, and government.",
    content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Ancient_Rome" } } },
};
const resp = (body, { ok = true, status = 200 } = {}) => ({ ok, status, async json() { return body; }, async text() { return typeof body === "string" ? body : JSON.stringify(body); } });
let fetchCalls = 0;
const fixtureFetch = async (url) => {
  fetchCalls++; const u = String(url);
  if (u.includes("wbsearchentities")) return resp(WIKIDATA_SEARCH);
  if (u.includes("/page/summary/")) { const m = u.match(/\/page\/summary\/([^?]+)/); const page = m ? decodeURIComponent(m[1]) : ""; const d = WIKI_SUMMARY[page]; return d ? resp(d) : resp(null, { ok: false, status: 404 }); }
  return resp(null, { ok: false, status: 404 });
};

// ── a deterministic fake embedder (same recipe as the recall witness) so the semantic leg runs offline ─
const DIM = 64;
const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
const fakeEmbedder = { id: "fake-bow",
  async embed(text) { const v = new Array(DIM).fill(0); for (const t of String(text).toLowerCase().match(/[a-z0-9]+/g) || []) v[fnv(t) % DIM] += 1; const n = Math.sqrt(v.reduce((a, x) => a + x * x, 0)) || 1; return v.map((x) => x / n); },
  similarity(a, b) { let d = 0; for (let i = 0; i < a.length; i++) d += a[i] * b[i]; return d; } };

async function runChain(fetchImpl, label) {
  const query = "history of ancient Rome";
  const disco = createDiscovery({ adapters: [linkedDataAdapter()], fetchImpl });

  // 1 · DISCOVER — meaning → typed linked-data candidates (no CID yet; just nominations).
  const candidates = await disco.discover(query, { limit: 5 });
  ok(label + "discover returns linked-data candidates for a meaning query", candidates.length > 0 && candidates.some((c) => c.entityId), candidates.length + " hits");
  ok(label + "the top candidate is a typed entity (semantic-web identity)", candidates[0] && /^Q\d+$/.test(candidates[0].entityId || ""), candidates[0] && candidates[0].entityId);

  // 2 · SEAL — fetch the candidate's content and mint a REAL IPFS object. This CID is FRESH: a function of
  //     bytes fetched at query time, never pre-seeded.
  const r = await disco.discoverAndSeal(query, { limit: 5 });
  ok(label + "discoverAndSeal yields a sealed object for the query", r.ok && !!r.cid, r.cid && r.cid.slice(0, 18) + "…");
  ok(label + "the discovered CID is a real IPFS object (sha256 CIDv1)", (() => { try { const c = holoIpfs.parseCID(r.cid); return c.version === 1 && c.hashCode === holoIpfs.HASH.SHA2_256; } catch { return false; } })(), r.cid && r.cid.slice(0, 22) + "…");

  // re-derivability: re-running discovery over the same content yields the IDENTICAL CID.
  const r2 = await disco.discoverAndSeal(query, { limit: 5 });
  ok(label + "the discovered CID is deterministic / re-derivable (re-seal → same CID)", r.cid === r2.cid, r2.cid && r2.cid.slice(0, 18) + "…");

  // 3 · RESOLVE — the gateway walks the fresh object's DAG, re-deriving every block (Law L5).
  const out = await resolveIpfsPath(r.cid, "", blockSource(r.blocks));
  ok(label + "the gateway resolves the discovered object to its index.html", out.kind === "file" && out.servedIndex === true, out.kind);
  const bytes = await holoIpfs.reassembleFile(out.cidStr, blockSource(r.blocks));   // verifies EVERY block
  const text = new TextDecoder().decode(bytes);
  // robust for fixture AND live: the re-derived page must carry the DISCOVERED title + entity id (both are
  // deterministic outputs of discovery), not a hardcoded label that only holds for the fixture's top hit.
  ok(label + "resolved + re-derived bytes carry the discovered content + entity id", text.includes(r.title) && text.includes(r.entityId), r.entityId + " · " + bytes.length + " B");

  // 4 · REFUSE — a tampered block is rejected (untrusted index can nominate, never forge).
  const evil = new Map(r.blocks); const fc = holoIpfs.cidToString(holoIpfs.parseCID(out.cidStr));
  const good = evil.get(fc) || evil.get(out.cidStr); const bad = good.slice(); bad[0] ^= 1; evil.set(fc, bad);
  let refused = false; try { await holoIpfs.reassembleFile(out.cidStr, blockSource(evil)); } catch { refused = true; }
  ok(label + "a tampered block is REFUSED at resolve (trust recovered, not assumed)", refused);

  // 5 · RECALL — the meaning loop closes: nothing was seeded, then the discovered object is indexed and
  //     Q.recall ranks it for the same query.
  const corpus = createCorpus({ embedder: fakeEmbedder });
  ok(label + "corpus is EMPTY before discovery (the CID was NOT pre-seeded)", corpus.size() === 0);
  await corpus.index({ id: r.cid, text: r.text, meta: { cid: r.cid } });
  const { recall } = createRecall({ corpus, synth: null });
  const rr = await recall(query, { k: 3 });
  const topCid = rr.ok && rr.results[0] && corpus.chunk(rr.results[0].kappa) && corpus.chunk(rr.results[0].kappa).pageId;
  ok(label + "Q.recall ranks the discovered (non-seeded) object for the meaning query", topCid === r.cid, String(topCid).slice(0, 18) + "…");
  return r;
}

async function main() {
  const r = await runChain(fixtureFetch, "");
  ok("the fixture fetch was actually exercised (no hidden network)", fetchCalls >= 2, fetchCalls + " calls");

  // optional LIVE pass — proves it against the real Wikidata + Wikipedia, off by default.
  if (process.env.HOLO_LIVE === "1") {
    try { await runChain(null, "[live] "); } catch (e) { ok("[live] real-endpoint discovery resolves + re-derives", false, String(e && e.message || e)); }
  } else {
    skipped("[live] real Wikidata + Wikipedia discovery", "set HOLO_LIVE=1 to run");
  }

  const result = { "@type": "holo:WitnessResult", witness: "holo-discover", stage: 2,
    query: "history of ancient Rome", discoveredCid: r.cid, entityId: r.entityId, source: r.source,
    pass, fail, skip, total: pass + fail, ok: fail === 0, checks };
  writeFileSync(join(here, "holo-discover-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}${skip ? "  (" + skip + " skipped)" : ""}  ·  "${result.query}" → ${r.source}:${r.entityId} → ${r.cid.slice(0, 16)}…`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
