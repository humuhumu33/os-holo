// holo-ondemand-witness.mjs — proves Google-on-κ Stage 2: AGENT-ON-DEMAND long-tail discovery that LEARNS.
// Claims: a query the offline κ-index covers is answered with ZERO network (offline-first); a query it does
// NOT cover escalates to LIVE on-demand discovery, seals the result, and LEARNS it into the offline index;
// the SAME query asked again is then served from the offline tier with NO new network (coverage grows from
// use — the long tail it has seen becomes instant). Fixture-backed "live" adapter so the witness is offline
// + deterministic; the fixture fetch counts network calls so "network-free" is provable, not asserted.
import { buildIndex, indexAdapter } from "../os/sbin/holo-index.mjs";
import { createDiscovery, linkedDataAdapter } from "../os/sbin/holo-discover.mjs";
import { createSemantic } from "../os/sbin/holo-semantic.mjs";
import * as holoIpfs from "../os/usr/lib/holo/holo-ipfs.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

const DIM = 64;
const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
const fakeEmbedder = { id: "fake", async embed(t) { const v = new Array(DIM).fill(0); for (const w of String(t).toLowerCase().match(/[a-z0-9]+/g) || []) v[fnv(w) % DIM] += 1; const n = Math.sqrt(v.reduce((a, x) => a + x * x, 0)) || 1; return v.map((x) => x / n); }, similarity(a, b) { let d = 0; for (let i = 0; i < a.length; i++) d += a[i] * b[i]; return d; } };
const mkdoc = async (title, text) => ({ cid: holoIpfs.cidToString(await holoIpfs.cidOf(new TextEncoder().encode(title + "\n" + text))), title, text });

// fixture "live" source: Wikidata search + Wikipedia summary for jazz (the long-tail topic NOT pre-indexed).
const resp = (body, { ok = true, status = 200 } = {}) => ({ ok, status, async json() { return body; } });
let net = 0;
const fixtureFetch = async (url) => {
  net++; const u = String(url);
  if (u.includes("wbsearchentities")) { const m = u.match(/[?&]search=([^&]+)/); const s = m ? decodeURIComponent(m[1].replace(/\+/g, " ")).toLowerCase() : ""; return resp(/jazz/.test(s) ? { search: [{ id: "Q8341", label: "Jazz", description: "music genre", concepturi: "http://www.wikidata.org/entity/Q8341" }] } : { search: [] }); }
  if (u.includes("/page/summary/")) { const m = u.match(/\/page\/summary\/([^?]+)/); const p = m ? decodeURIComponent(m[1]) : ""; return /jazz/i.test(p) ? resp({ title: "Jazz", extract: "Jazz is a music genre that originated in New Orleans, rooted in blues and ragtime, defined by swing and improvisation.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Jazz" } } }) : resp(null, { ok: false, status: 404 }); }
  return resp(null, { ok: false, status: 404 });
};

async function main() {
  // a pre-built κ-index about Rome only — it does NOT cover "jazz".
  const docs = await Promise.all([
    mkdoc("Ancient Rome", "Ancient Rome grew from a settlement on the Tiber into a republic and then an empire."),
    mkdoc("Roman Empire", "The Roman Empire was the post-Republican period of ancient Rome ruled by emperors."),
  ]);
  const loaded = await buildIndex(docs, { embedder: fakeEmbedder });
  const idx = indexAdapter(loaded);                                  // ONE adapter over the live (growable) corpus
  const discovery = createDiscovery({ adapters: [idx, linkedDataAdapter()], fetchImpl: fixtureFetch });

  // LEARN sink: persist live-discovered sources into the SAME corpus the offline adapter reads → it grows.
  const learn = async (sources) => {
    let n = 0;
    for (const s of sources) {
      if (!s || !s.cid || loaded.docs.has(s.cid)) continue;
      await loaded.corpus.index({ id: s.cid, text: s.text || (s.title + "\n" + (s.extract || "")), meta: { cid: s.cid, title: s.title } });
      loaded.docs.set(s.cid, { cid: s.cid, title: s.title, text: s.text || s.extract || s.title, meta: {} });
      if (s.blocks) for (const [c, b] of s.blocks) loaded.blocks.set(c, b);
      n++;
    }
    return n;
  };
  const sem = createSemantic({ discovery, learn });

  // 1 · a COVERED query is answered OFFLINE, network-free.
  net = 0;
  const a1 = await sem.answer("history of ancient Rome", { topK: 3 });
  ok("a covered query is served from the OFFLINE tier", a1.ok && a1.tier === "offline", "tier " + a1.tier);
  ok("the offline answer used ZERO network", net === 0, net + " calls");

  // 2 · a LONG-TAIL query (jazz) the index does NOT cover escalates to LIVE, then LEARNS it.
  net = 0;
  const a2 = await sem.answer("history of jazz music", { topK: 3 });
  ok("an uncovered query escalates to the LIVE on-demand tier", a2.ok && a2.tier === "live", "tier " + a2.tier);
  ok("live discovery actually hit the network", net > 0, net + " calls");
  ok("the live answer is about the long-tail topic (Jazz)", a2.sources.some((s) => /jazz/i.test(s.title)), a2.sources[0] && a2.sources[0].title);
  ok("the discovered source was LEARNED into the offline index", a2.learned >= 1 && loaded.docs.size > docs.length, "learned " + a2.learned + ", index " + loaded.docs.size);

  // 3 · the SAME query again is now served OFFLINE — no new network (coverage grew from use).
  const netBefore = (net = 0, net);
  const a3 = await sem.answer("history of jazz music", { topK: 3 });
  ok("the now-learned query is served from the OFFLINE tier", a3.ok && a3.tier === "offline", "tier " + a3.tier);
  ok("the repeat used ZERO new network (learned, instant)", net === netBefore, net + " new calls");
  ok("the repeat still answers about Jazz", a3.sources.some((s) => /jazz/i.test(s.title)), a3.sources[0] && a3.sources[0].title);

  const result = { "@type": "holo:WitnessResult", witness: "holo-ondemand", step: "G2",
    indexGrew: loaded.docs.size, pass, fail, total: pass + fail, ok: fail === 0, checks };
  writeFileSync(join(here, "holo-ondemand-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}  ·  offline-first → live-on-demand → learn → offline-on-repeat`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
