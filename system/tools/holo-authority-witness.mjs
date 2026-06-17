// holo-authority-witness.mjs — proves Stage 1 of "Google-on-κ": the κ-PageRank AUTHORITY signal is wired
// into the index ranking and flows to the answer's credibility. Claims: docAuthority reuses holo-rank's
// forward-push PPR over the index's own reference graph (doc A mentions doc B ⇒ edge A→B); the doc many
// others reference scores highest; indexAdapter.search re-weights relevance by authority and attaches τ to
// each hit; seal() carries τ; and the orchestrator's answer surfaces verified + authority per source.
import { buildIndex, indexAdapter, docAuthority } from "../os/sbin/holo-index.mjs";
import { createDiscovery } from "../os/sbin/holo-discover.mjs";
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

async function main() {
  // a controlled reference graph: three "Spoke" docs each MENTION "Center"; "Hub" mentions the spokes.
  // → Center has 3 inbound references (highest authority); Edge has 0 (lowest). All share the term "alpha".
  const docs = await Promise.all([
    mkdoc("Center", "alpha topic. Center is a foundational subject with no outbound references."),
    mkdoc("Spoke One", "alpha topic. Spoke One builds directly on Center for its core ideas."),
    mkdoc("Spoke Two", "alpha topic. Spoke Two extends Center with additional detail."),
    mkdoc("Spoke Three", "alpha topic. Spoke Three also derives from Center throughout."),
    mkdoc("Hub", "alpha topic. Hub surveys Spoke One, Spoke Two and Spoke Three together."),
    mkdoc("Edge", "alpha topic. Edge is an isolated note that nobody references."),
  ]);
  const byTitle = Object.fromEntries(docs.map((d) => [d.title, d.cid]));
  const idx = await buildIndex(docs, { embedder: fakeEmbedder });

  // 1 · authority is computed by κ-PageRank and Center (most-referenced) ranks highest.
  const auth = docAuthority(idx.docs);
  ok("docAuthority returns a κ-PageRank score per doc (holo-rank reused)", auth.size >= docs.length - 1 && auth.get(byTitle["Center"]) > 0, "nodes " + auth.size);
  const top = [...auth.entries()].sort((a, b) => b[1] - a[1])[0][0];
  ok("the most-referenced doc (Center) has the HIGHEST authority", top === byTitle["Center"], "τ(Center)=" + (auth.get(byTitle["Center"]) || 0).toFixed(4));
  ok("an unreferenced doc (Edge) has lower authority than Center", (auth.get(byTitle["Edge"]) || 0) < auth.get(byTitle["Center"]), "τ(Edge)=" + (auth.get(byTitle["Edge"]) || 0).toFixed(4));

  // 2 · search re-weights by authority and attaches τ. The shared term "alpha" makes relevance comparable,
  //     so authority breaks the tie → Center ranks first, and every hit carries its authority.
  const hits = await indexAdapter(idx).search("alpha topic", { limit: 6 });
  ok("search attaches an authority score to every hit", hits.every((h) => typeof h.authority === "number"), "top auth " + (hits[0] && hits[0].authority));
  ok("authority re-weighting ranks Center first on a relevance-tied query", hits[0].cid === byTitle["Center"], hits[0].title);
  ok("Center outranks the unreferenced Edge", hits.findIndex((h) => h.cid === byTitle["Center"]) < hits.findIndex((h) => h.cid === byTitle["Edge"]));

  // 3 · seal carries authority; the orchestrator surfaces verified + authority per source.
  const sem = createSemantic({ discovery: createDiscovery({ adapters: [indexAdapter(idx)] }) });
  const ans = await sem.answer("alpha topic", { topK: 3 });
  ok("answer sources are verified (L5) and carry authority", ans.ok && ans.sources.every((s) => s.verified === true) && ans.sources.some((s) => typeof s.authority === "number"), ans.sources.length + " sources");
  ok("the top answer source is the highest-authority doc", ans.sources[0] && ans.sources[0].cid === byTitle["Center"], ans.sources[0] && ans.sources[0].title);

  const result = { "@type": "holo:WitnessResult", witness: "holo-authority", step: "G1",
    authorityTop: top, sources: ans.sources.map((s) => ({ title: s.title, authority: s.authority, verified: s.verified })),
    pass, fail, total: pass + fail, ok: fail === 0, checks };
  writeFileSync(join(here, "holo-authority-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}  ·  κ-PageRank authority wired into ranking + credibility`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
