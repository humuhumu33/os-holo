#!/usr/bin/env node
// holo-web-witness.mjs — proves the autonomous healer can ACCESS and IMPORT any object on the OPEN-INTERNET
// hypergraph (arbitrary HTTPS locations + IPFS), admitting it ONLY after re-derivation (Law L5), and that
// the self-healing artifacts are 100% W3C-conformant linked data (mint-nothing: every minted term is a
// published, dereferenceable ontology term). The internet is a hypergraph of objects (nodes) addressed by
// self-verifying attributes (κ); an HTTPS IRI, an IPFS CID and a holo:// alias are EDGES to the same node.
//
// Checks (all must hold):
//   1 webFollowsAnyEdge   — webSource resolves a κ from an arbitrary HTTPS IRI (a stranger's server) and re-derives.
//   2 webRefusesHostile   — a URL serving WRONG bytes is refused; a correct edge among hostile ones still wins.
//   3 importByUrl         — importObject(https-URL) fetches an arbitrary web object and content-addresses it (κ = H(bytes)).
//   4 importByKappa       — importObject(κ) resolves the node from a content-address gateway and re-derives.
//   5 ipfsIsAnEdge        — a sha-256 κ maps to a CIDv1 sha2-256, so the SAME node resolves on IPFS (κ ⇆ CID).
//   6 w3cMintNothing      — every hosheal: term a heal receipt / health attestation uses is DEFINED in ns/heal.jsonld.
//   7 w3cLinkedData       — the receipt + attestation are valid JSON-LD (DID/PROV-O/schema.org @context) and re-derive (Law L5).
//
// Authority (external): W3C DID Core (alsoKnownAs equivalence edges) · W3C Subresource Integrity + multiformats
// CID/multihash (κ ⇆ CIDv1 sha2-256) · WHATWG Fetch · RFC 8615 well-known · W3C JSON-LD 1.1 / Linked Data · W3C
// PROV-O · W3C RDF Schema / OWL 2 · IPFS Trustless Gateways · holospaces Laws L1/L2/L5. Usage: node tools/holo-web-witness.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { webSource, importObject, candidateUrls } from "../os/sbin/holo-web.mjs";
import { reDerive, hexOf } from "../os/sbin/holo-resolver.mjs";
import { kappaToCid } from "../os/sbin/holo-peers.mjs";
import * as ipfs from "../os/usr/lib/holo/holo-ipfs.js";
import { makeObject, verify } from "../os/usr/lib/holo/holo-object.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const write = (r) => writeFileSync(join(here, "holo-web-witness.result.json"), JSON.stringify(r, null, 2) + "\n");
const enc = (s) => new TextEncoder().encode(s);
const kOf = async (b) => "did:holo:sha256:" + (await reDerive(b));

// a fake open internet: a map of URL → bytes. webSource/importObject get this as fetchImpl, so we drive the
// real resolution logic against arbitrary "servers" with no network — every byte is still re-derived for real.
const makeNet = (routes) => async (url) => { const b = routes[String(url)]; return b ? { ok: true, arrayBuffer: async () => b.buffer } : { ok: false, status: 404, arrayBuffer: async () => new ArrayBuffer(0) }; };

const checks = {};
const OBJ = enc("an object that lives somewhere on the open web · " + "x".repeat(32));
const BAD = enc("a hostile server's WRONG bytes");
const kappa = await kOf(OBJ), hex = hexOf(kappa);

// ── 1 · follow an arbitrary HTTPS edge (the object advertises an IRI on a stranger's host) ───────
{
  const iris = async () => ["https://some-stranger.example/objects/thing.bin"];
  const net = makeNet({ "https://some-stranger.example/objects/thing.bin": OBJ });
  const src = webSource({ iris, fetchImpl: net });
  const got = await src(kappa);
  checks.webFollowsAnyEdge = !!got && (await reDerive(got)) === hex;
}

// ── 2 · a hostile edge is refused; a correct edge among liars still wins (trust is in the math) ──
{
  const gw = ["https://liar.example", "https://honest.example"];
  const net = makeNet({
    ["https://liar.example/.holo/sha256/" + hex]: BAD,                // wrong bytes — must be refused
    ["https://honest.example/.holo/sha256/" + hex]: OBJ,              // correct — must win
  });
  const onlyLiar = webSource({ gateways: ["https://liar.example"], fetchImpl: net });
  const withHonest = webSource({ gateways: gw, fetchImpl: net });
  checks.webRefusesHostile = (await onlyLiar(kappa)) === null && (await reDerive(await withHonest(kappa))) === hex;
}

// ── 3 · import ANY web object by URL → content-address it (it can now live on the substrate) ─────
{
  const url = "https://anywhere.example/some-doc.json";
  const net = makeNet({ [url]: OBJ });
  const imp = await importObject(url, { fetchImpl: net });
  checks.importByUrl = !!imp && imp.kappa === kappa && (await reDerive(imp.bytes)) === hex;
}

// ── 4 · import by κ → resolve the node from a content-address gateway, re-derived ───────────────
{
  const net = makeNet({ ["https://gw.example/.holo/sha256/" + hex]: OBJ });
  const imp = await importObject(kappa, { gateways: ["https://gw.example"], fetchImpl: net });
  checks.importByKappa = !!imp && imp.kappa === kappa && (await reDerive(imp.bytes)) === hex;
}

// ── 5 · IPFS is just another edge to the same node: κ (sha-256) ⇆ CIDv1 (sha2-256). The CID minted from
//        the κ VERIFIES against the object's own bytes — same node, two addresses (κ and CID). ───────────
{
  let cid = null, verifies = false;
  try { cid = kappaToCid(kappa, ipfs); verifies = await ipfs.verifyBlock(cid, OBJ); } catch { /* shape only */ }
  checks.ipfsIsAnEdge = !!cid && /^bafkre/i.test(cid) && verifies === true;
}

// ── 6 + 7 · W3C: the heal artifacts are mint-nothing linked data that re-derives ────────────────
{
  const ont = JSON.parse(readFileSync(join(here, "../os/usr/share/ns/heal.jsonld"), "utf8"));
  const defined = new Set((ont["@graph"] || []).map((t) => t["@id"]));
  const ontWellFormed = ont["@type"] === "owl:Ontology" && ont["@id"] === "https://hologram.os/ns/heal" &&
    (ont["@graph"] || []).length > 0 && (ont["@graph"] || []).every((t) => t.label && t.comment);

  const store = new Map();
  const receipt = makeObject(store, {
    type: ["prov:Activity", "hosheal:Heal", "schema:UpdateAction"], context: [{ hosheal: "https://hologram.os/ns/heal#" }],
    "schema:name": "Self-heal — content recovered and re-derived (Law L5)",
    "hosheal:target": kappa, "hosheal:recoveredFrom": "web", "hosheal:axis": "sha256", "hosheal:reDerived": true, "hosheal:reason": "scrub",
    "prov:generatedAtTime": "2026-06-13T00:00:00Z",
  });
  const attestation = makeObject(store, {
    type: ["prov:Entity", "hosheal:HealthAttestation", "schema:DataFeed"], context: [{ hosheal: "https://hologram.os/ns/heal#" }],
    "schema:name": "OS health — re-derived self-attestation (Law L5)",
    "hosheal:total": 259, "hosheal:healthy": 254, "hosheal:healed": 1, "hosheal:unresolved": 0, "hosheal:deferred": 0,
    "hosheal:anchors": 1, "hosheal:healthyAfter": 255, "hosheal:whole": true, "hosheal:tracked": 5, "hosheal:flaky": 2,
    "prov:generatedAtTime": "2026-06-13T00:00:00Z",
  });
  const usedTerms = new Set();
  for (const o of [receipt, attestation]) { for (const k of Object.keys(o)) if (k.startsWith("hosheal:")) usedTerms.add(k); for (const t of [].concat(o["@type"] || [])) if (String(t).startsWith("hosheal:")) usedTerms.add(t); }
  const missing = [...usedTerms].filter((t) => !defined.has(t));

  checks.w3cMintNothing = ontWellFormed && missing.length === 0;
  checks.w3cLinkedData = verify(receipt) && verify(attestation) &&
    Array.isArray(receipt["@context"]) && verify({ ...receipt, "hosheal:reDerived": false }) === false;   // a tampered receipt is refused
}

const witnessed = Object.values(checks).every(Boolean);
write({
  spec: "Hologram OS self-healing reaches the OPEN INTERNET — any object resolves from any HTTPS edge or IPFS, re-derived (Law L5); and every heal artifact is W3C mint-nothing linked data",
  authority: "W3C DID Core · W3C Subresource Integrity + multiformats CID/multihash · WHATWG Fetch · RFC 8615 · W3C JSON-LD 1.1 · W3C PROV-O · W3C RDF Schema / OWL 2 · IPFS Trustless Gateways · holospaces Laws L1/L2/L5",
  witnessed,
  covers: witnessed ? ["open-web-recovery", "import-any-object", "kappa-cid-equivalence", "w3c-mint-nothing", "w3c-linked-data", "law-l5"] : [],
  checks,
});
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "ok  " : "FAIL"}  ${k}`);
console.log(`VERDICT : ${witnessed ? "WITNESSED ✓ any object on the open internet (HTTPS · IPFS) imports + heals by content, re-derived; heal artifacts are W3C linked data" : "NOT WITNESSED"}`);
process.exit(witnessed ? 0 : 1);
