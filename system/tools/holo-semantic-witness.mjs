// holo-semantic-witness.mjs — proves STAGE 3: the orchestrator that turns a natural-language query into a
// feature-rich, self-verifying κ-page by composing the shipping seams. The load-bearing claims:
//
//   EXPAND   deterministic zero-LLM query expansion produces the verbatim + qualifier-stripped probes
//   FUSE     RRF across probes CORRECTS a single noisy ranking (the live Stage-2 gap), via cross-probe agreement
//   SEAL     top-K fused candidates → multiple fresh, self-verifying IPFS objects
//   COMPOSE  one page CITES every source by its CID; the page is itself a stable κ-object
//   RESOLVE  the composed page AND every cited source resolve + re-derive (Law L5); a tampered block is refused
//   SYNTH?   an opt-in injected model adds a cited prose answer; the deterministic core never fakes one
//   WIRE     resolveUnified's NL lane returns a sealed kind:"semantic" envelope when a host wires the orchestrator
//
// Fixture-driven (recorded Wikidata + Wikipedia) → offline + re-derivable; HOLO_LIVE=1 runs the real chain.
import { createDiscovery, linkedDataAdapter } from "../os/sbin/holo-discover.mjs";
import { createSemantic, expandQuery } from "../os/sbin/holo-semantic.mjs";
import { resolveUnified } from "../os/sbin/holo-omni-unified.mjs";
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

// ── fixtures: the verbatim query ranks a NOISY entity top; the stripped probe ranks the canonical entity
//    top. RRF must surface the canonical one (Q1747689) via cross-probe agreement. ──
const SEARCH = {
  "history of ancient Rome": { success: 1, search: [
    { id: "Q830852", label: "History of Rome", description: "account of the history of the city and state", concepturi: "http://www.wikidata.org/entity/Q830852" },
    { id: "Q1747689", label: "Ancient Rome", description: "civilization of the ancient Mediterranean", concepturi: "http://www.wikidata.org/entity/Q1747689" },
  ] },
  "ancient Rome": { success: 1, search: [
    { id: "Q1747689", label: "Ancient Rome", description: "civilization of the ancient Mediterranean", concepturi: "http://www.wikidata.org/entity/Q1747689" },
    { id: "Q2277", label: "Roman Empire", description: "empire in the Mediterranean from 27 BC", concepturi: "http://www.wikidata.org/entity/Q2277" },
  ] },
};
const SUMMARY = {
  "Ancient_Rome": { title: "Ancient Rome", extract: "Ancient Rome grew from a settlement on the Tiber into a republic and then an empire dominating the Mediterranean.\n\nIt shaped Western law, language, and government.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Ancient_Rome" } } },
  "History_of_Rome": { title: "History of Rome", extract: "The history of Rome spans the city's founding, the Roman Kingdom, the Republic, and the Empire.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/History_of_Rome" } } },
  "Roman_Empire": { title: "Roman Empire", extract: "The Roman Empire was the post-Republican period of ancient Rome, ruled by emperors from 27 BC.", content_urls: { desktop: { page: "https://en.wikipedia.org/wiki/Roman_Empire" } } },
};
const resp = (body, { ok = true, status = 200 } = {}) => ({ ok, status, async json() { return body; }, async text() { return typeof body === "string" ? body : JSON.stringify(body); } });
let fetchCalls = 0;
const fixtureFetch = async (url) => {
  fetchCalls++; const u = String(url);
  if (u.includes("wbsearchentities")) { const m = u.match(/[?&]search=([^&]+)/); const q = m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : ""; return resp(SEARCH[q] || { success: 1, search: [] }); }
  if (u.includes("/page/summary/")) { const m = u.match(/\/page\/summary\/([^?]+)/); const page = m ? decodeURIComponent(m[1]) : ""; return SUMMARY[page] ? resp(SUMMARY[page]) : resp(null, { ok: false, status: 404 }); }
  return resp(null, { ok: false, status: 404 });
};

const fakeSynth = { id: "fake-fuse", async fuse(prompt) { return { ok: true, answer: "Ancient Rome [1] developed from a republic into an empire that shaped the Mediterranean world." }; } };

async function runChain(fetchImpl, label) {
  const query = "history of ancient Rome";

  // EXPAND
  const probes = expandQuery(query);
  ok(label + "query expansion yields verbatim + qualifier-stripped probes", probes.length >= 2 && probes.some((p) => /^ancient rome$/i.test(p)), probes.join(" | "));

  const discovery = createDiscovery({ adapters: [linkedDataAdapter()], fetchImpl });
  const semantic = createSemantic({ discovery });

  // DISCOVER + FUSE + SEAL + COMPOSE
  const r = await semantic.answer(query, { perProbe: 5, topK: 3 });
  ok(label + "orchestrator returns a sealed composed page", r.ok && !!r.cid, r.cid && r.cid.slice(0, 18) + "…");
  ok(label + "RRF correction: top fused source is the canonical entity, not the verbatim-query top hit", r.sources[0] && r.sources[0].entityId === "Q1747689", r.sources[0] && r.sources[0].entityId);
  ok(label + "multiple sources sealed, each a real IPFS object (sha256 CIDv1)",
    r.sources.length >= 2 && r.sources.every((s) => { try { const c = holoIpfs.parseCID(s.cid); return c.version === 1 && c.hashCode === holoIpfs.HASH.SHA2_256; } catch { return false; } }), r.sources.length + " sources");

  // RESOLVE the composed page — it cites EVERY source CID, and re-derives.
  const store = blockSource(r.blocks);
  const out = await resolveIpfsPath(r.cid, "", store);
  const pageText = out.kind === "file" ? new TextDecoder().decode(await holoIpfs.reassembleFile(out.cidStr, store)) : "";
  ok(label + "the composed page resolves + re-derives and cites every source CID",
    out.kind === "file" && r.sources.every((s) => pageText.includes(`data-source-cid="${s.cid}"`)), out.kind);

  // every cited source independently resolves + re-derives.
  let allSourcesResolve = true;
  for (const s of r.sources) { try { const so = await resolveIpfsPath(s.cid, "", store); const t = so.kind === "file" ? new TextDecoder().decode(await holoIpfs.reassembleFile(so.cidStr, store)) : ""; if (!t.includes(s.entityId)) allSourcesResolve = false; } catch { allSourcesResolve = false; } }
  ok(label + "every cited source CID independently resolves + re-derives (Law L5)", allSourcesResolve);

  // REFUSE — tamper a cited source's block → rejected.
  const src0 = r.sources[0]; const so0 = await resolveIpfsPath(src0.cid, "", store);
  const evil = new Map(r.blocks); const fc = holoIpfs.cidToString(holoIpfs.parseCID(so0.cidStr));
  const good = evil.get(fc) || evil.get(so0.cidStr); const bad = good.slice(); bad[0] ^= 1; evil.set(fc, bad);
  let refused = false; try { await holoIpfs.reassembleFile(so0.cidStr, blockSource(evil)); } catch { refused = true; }
  ok(label + "a tampered source block is REFUSED at resolve", refused);

  // deterministic: same query → same composed CID.
  const r2 = await semantic.answer(query, { perProbe: 5, topK: 3 });
  ok(label + "the composed page CID is deterministic / re-derivable", r.cid === r2.cid, r2.cid && r2.cid.slice(0, 18) + "…");

  return { discovery, semantic, r };
}

async function main() {
  const { r } = await runChain(fixtureFetch, "");

  // SYNTH? — opt-in model answer; deterministic core never fakes one.
  const discovery = createDiscovery({ adapters: [linkedDataAdapter()], fetchImpl: fixtureFetch });
  const withSynth = createSemantic({ discovery, synth: fakeSynth });
  const rs = await withSynth.answer("history of ancient Rome", { synthesize: true });
  ok("opt-in synthesis adds a cited prose answer (mode=synthesize)", rs.ok && rs.mode === "synthesize" && !!rs.answer, rs.answer && rs.answer.slice(0, 28) + "…");
  const rc = await withSynth.answer("history of ancient Rome", { synthesize: false });
  ok("the deterministic core composes WITHOUT a model (mode=compose, no faked answer)", rc.ok && rc.mode === "compose" && !rc.answer);

  // WIRE — resolveUnified NL lane returns a sealed kind:"semantic" envelope when the host wires it.
  const u = await resolveUnified("history of ancient Rome", { semantic: createSemantic({ discovery: createDiscovery({ adapters: [linkedDataAdapter()], fetchImpl: fixtureFetch }) }) });
  ok("resolveUnified NL lane → sealed kind:semantic object (live wiring)", u.ok && u.lane === "nl" && u.kind === "semantic" && !!u.cid && Array.isArray(u.sources), u.kind + " · " + (u.cid || "").slice(0, 14) + "…");
  // backward compatible: with NO orchestrator wired, the NL lane still just tags.
  const u0 = await resolveUnified("history of ancient Rome", {});
  ok("resolveUnified NL lane unchanged when no orchestrator wired (kind:nl tag)", u0.ok && u0.kind === "nl" && !u0.cid);

  ok("the fixture fetch was actually exercised (no hidden network)", fetchCalls >= 4, fetchCalls + " calls");

  if (process.env.HOLO_LIVE === "1") {
    try { await runChain(null, "[live] "); } catch (e) { ok("[live] real-endpoint orchestration resolves + re-derives", false, String(e && e.message || e)); }
  } else { skipped("[live] real Wikidata + Wikipedia orchestration", "set HOLO_LIVE=1 to run"); }

  const result = { "@type": "holo:WitnessResult", witness: "holo-semantic", stage: 3,
    query: "history of ancient Rome", composedCid: r.cid, probes: r.probes, sources: r.sources,
    pass, fail, skip, total: pass + fail, ok: fail === 0, checks };
  writeFileSync(join(here, "holo-semantic-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}${skip ? "  (" + skip + " skipped)" : ""}  ·  "${result.query}" → ${r.sources.length} sources → page ${r.cid.slice(0, 16)}…`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
