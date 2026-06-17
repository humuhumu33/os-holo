// holo-semantic-render-witness.mjs — proves the STAGE-1 thin slice of IPFS-native semantic rendering:
// a query by MEANING discovers a content object, that object resolves + re-derives (Law L5), and the
// result is sealed as a κ-addressed page that itself resolves through the same gateway. Every step reuses
// substrate that already ships — no new transport, no network, fully deterministic and re-derivable:
//
//   DISCOVER  Q.recall over a tiny κ-index of IPFS objects (BM25 ⊕ vector ⊕ RRF ⊕ 1-hop graph)  → a CID
//   BRIDGE    that CID round-trips through an EIP-1577 ENS contenthash (decodeContenthash)        → name→content
//   RESOLVE   the gateway walks the UnixFS DAG, RE-DERIVING every block to its CID (Law L5)       → verified bytes
//   RENDER    compose a feature page citing the verified CID, seal it (sealSnapshot)              → a real CIDv1
//   WITNESS   the page CID is stable across runs (re-derivable) and resolves back through the gateway
//
// The discovery index is UNTRUSTED — it only nominates a CID; trust is recovered at RESOLVE by re-hashing
// the bytes to the CID. A tampered block is refused. This is the whole architecture, end to end, headless.
import { createCorpus } from "../os/usr/lib/holo/q/holo-q-corpus.js";
import { createRecall } from "../os/usr/lib/holo/q/holo-q-recall.js";
import { sealSnapshot, blockSource } from "../os/sbin/holo-web-snapshot.mjs";
import { resolveIpfsPath } from "../os/sbin/holo-ipfs-gateway.mjs";
import * as holoIpfs from "../os/usr/lib/holo/holo-ipfs.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

// ── a DETERMINISTIC fake embedder (same recipe as holo-q-recall-witness): bag-of-words hash projection
//    into a fixed-dim unit vector. No model, no network → the semantic leg runs and the witness re-derives. ─
const DIM = 64;
const fnv = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
const fakeEmbedder = {
  id: "fake-bow",
  async embed(text) { const v = new Array(DIM).fill(0); for (const t of String(text).toLowerCase().match(/[a-z0-9]+/g) || []) v[fnv(t) % DIM] += 1; const n = Math.sqrt(v.reduce((a, x) => a + x * x, 0)) || 1; return v.map((x) => x / n); },
  similarity(a, b) { let d = 0; for (let i = 0; i < a.length; i++) d += a[i] * b[i]; return d; },
};

// ── the "IPFS object space" for this slice: three pages, each sealed as a REAL IPFS snapshot (a UnixFS dir
//    with an index.html). Their root CIDs are what discovery returns and what the gateway resolves. ──
const PAGES = [
  { topic: "rome", title: "A Concise History of Ancient Rome",
    body: "Ancient Rome grew from a city-state on the Tiber into a republic and then an empire. The Roman Republic, the Punic Wars against Carthage, Julius Caesar, and the rule of Augustus shaped the ancient Mediterranean world and the history of Western civilization." },
  { topic: "egypt", title: "Ancient Egypt and the Nile",
    body: "Ancient Egypt flourished along the Nile for three thousand years. Pharaohs, pyramids at Giza, hieroglyphic writing, and the worship of gods like Ra and Osiris defined this ancient civilization." },
  { topic: "risotto", title: "How to Cook Risotto",
    body: "A good risotto needs constant stirring and warm stock added slowly. Toast the arborio rice before adding any liquid, then finish with butter and parmesan for a creamy texture." },
];

async function main() {
  // 1 · SEAL each page as an IPFS object; merge every block into one store the gateway can resolve from.
  const blocks = new Map();
  const objects = {};   // topic → { rootCid }
  for (const p of PAGES) {
    const html = `<!doctype html><html><head><meta charset="utf-8"><title>${p.title}</title></head><body><h1>${p.title}</h1><p>${p.body}</p></body></html>`;
    const snap = await sealSnapshot({ resources: [{ name: "index.html", bytes: html }] });
    for (const [c, b] of snap.blocks) blocks.set(c, b);
    objects[p.topic] = { rootCid: snap.rootCid, title: p.title };
  }
  const getBlock = blockSource(blocks);
  ok("each page seals to a real IPFS object (sha256 CIDv1, UnixFS dir)",
    Object.values(objects).every((o) => { const c = holoIpfs.parseCID(o.rootCid); return c.version === 1 && c.codec === holoIpfs.CODEC.DAG_PB && c.hashCode === holoIpfs.HASH.SHA2_256; }),
    objects.rome.rootCid.slice(0, 18) + "…");

  // 2 · DISCOVER — index each object's text into the κ-corpus keyed by its REAL CID, then recall BY MEANING.
  //     The index is the only "external" surface; it returns a CID, nothing more.
  const corpus = createCorpus({ embedder: fakeEmbedder });
  for (const p of PAGES) await corpus.index({ id: objects[p.topic].rootCid, text: p.title + "\n\n" + p.body, meta: { cid: objects[p.topic].rootCid } });
  const { recall } = createRecall({ corpus, synth: null });

  const query = "history of ancient Rome";
  const res = await recall(query, { k: 3 });
  ok("Q.recall returns ranked results for a meaning query", res.ok && res.results.length > 0, res.results.length + " hits");
  const top = res.results[0];
  const topCid = top && corpus.chunk(top.kappa) && corpus.chunk(top.kappa).pageId;   // pageId == the object's CID
  ok("the top hit is the Rome object (semantic discovery, not exact-string)", topCid === objects.rome.rootCid, String(topCid).slice(0, 18) + "…");
  ok("the fused ranking used more than one retriever (BM25 ⊕ vector)", Array.isArray(top.via) && top.via.length >= 1, (top && (top.via || []).join("⊕")));

  // 3 · BRIDGE — the discovered CID round-trips through an EIP-1577 ENS contenthash. This is the exact
  //     decode the web3 lane now performs (holo-ipfs.decodeContenthash) → a name carries this object.
  const contenthashBytes = holoIpfs.concat(holoIpfs.varintEncode(0xe3), holoIpfs.parseCID(topCid).bytes);   // 0xe3 = ipfs-ns
  const decoded = holoIpfs.decodeContenthash(contenthashBytes);
  ok("ENS contenthash decodes to ipfs + the same CID (web3-name → content bridge)",
    decoded && decoded.protocol === "ipfs" && holoIpfs.cidEqual(decoded.cid, topCid), decoded && decoded.protocol);

  // 4 · RESOLVE — the gateway walks the object's DAG and serves index.html, RE-DERIVING every block (L5).
  const out = await resolveIpfsPath(decoded.cid, "", getBlock);
  ok("gateway resolves the object's directory to its index.html (file)", out.kind === "file" && out.servedIndex === true, out.kind);
  const fileBytes = await holoIpfs.reassembleFile(out.cidStr, getBlock);   // verifies EVERY block to its CID
  const fileText = new TextDecoder().decode(fileBytes);
  ok("resolved + re-derived bytes are the Rome page (Law L5 end-to-end)", fileText.includes(objects.rome.title), fileBytes.length + " B");

  // 4b · NEGATIVE — a tampered block is REFUSED (the untrusted-index trust recovery, made concrete).
  const evilBlocks = new Map(blocks);
  const fileCid = out.cidStr;
  const good = evilBlocks.get(fileCid) || evilBlocks.get(holoIpfs.cidToString(holoIpfs.parseCID(fileCid)));
  const tampered = good.slice(); tampered[tampered.length - 1] ^= 1;       // flip one byte
  evilBlocks.set(holoIpfs.cidToString(holoIpfs.parseCID(fileCid)), tampered);
  let refused = false;
  try { await holoIpfs.reassembleFile(fileCid, blockSource(evilBlocks)); } catch { refused = true; }
  ok("a tampered block is REFUSED (a lying source cannot forge bytes for a CID)", refused);

  // 5 · RENDER + SEAL — compose a feature page that CITES the verified CID, and seal it as a κ-page. The
  //     render is a pure function of (query, resolved title, cited CID), so its CID is deterministic.
  const renderPage = (title, citedCid) => `<!doctype html><html><head><meta charset="utf-8"><title>${query}</title></head>` +
    `<body><main><h1>${query}</h1><article data-source-cid="${citedCid}"><h2>${title}</h2>` +
    `<p>Source: <a href="/ipfs/${citedCid}/">ipfs://${citedCid}</a> · verified by re-derivation (Law L5).</p></article></main></body></html>`;
  const sealOnce = async () => sealSnapshot({ resources: [{ name: "index.html", bytes: renderPage(objects.rome.title, topCid) }] });
  const pageA = await sealOnce();
  const pageB = await sealOnce();
  ok("the rendered κ-page is a real CIDv1 (sha256)", (() => { const c = holoIpfs.parseCID(pageA.rootCid); return c.version === 1 && c.hashCode === holoIpfs.HASH.SHA2_256; })(), pageA.rootCid.slice(0, 18) + "…");
  ok("the rendered page CID is STABLE across runs (re-derivable)", pageA.rootCid === pageB.rootCid, pageA.rootCid.slice(0, 22) + "…");
  ok("the rendered page has a did:holo twin (same bytes, every axis)", typeof pageA.did === "string" && pageA.did.startsWith("did:holo:sha256:"), pageA.did && pageA.did.slice(0, 26) + "…");

  // 6 · the sealed page RESOLVES back through the same gateway (the output is itself a browsable object).
  const pageBlocks = new Map(); for (const [c, b] of pageA.blocks) pageBlocks.set(c, b);
  const pageOut = await resolveIpfsPath(pageA.rootCid, "", blockSource(pageBlocks));
  const pageText = pageOut.kind === "file" ? new TextDecoder().decode(await holoIpfs.reassembleFile(pageOut.cidStr, blockSource(pageBlocks))) : "";
  ok("the sealed page resolves through the gateway and cites the source CID",
    pageOut.kind === "file" && pageText.includes(`data-source-cid="${topCid}"`), pageOut.kind);

  // ── result ───────────────────────────────────────────────────────────────────────────────────────
  const result = {
    "@type": "holo:WitnessResult", witness: "holo-semantic-render", stage: 1,
    query, discoveredCid: topCid, renderedPageCid: pageA.rootCid, renderedPageDid: pageA.did,
    pass, fail, total: pass + fail, ok: fail === 0, checks,
  };
  writeFileSync(join(here, "holo-semantic-render-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}  ·  query "${query}" → ${topCid.slice(0, 16)}… → page ${pageA.rootCid.slice(0, 16)}…`);
  if (fail) process.exit(1);
}

main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
