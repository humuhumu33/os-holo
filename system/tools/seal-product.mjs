#!/usr/bin/env node
// seal-product.mjs — materialize Holo Product (ADR-0065) into the substrate as a SELF-VERIFYING UOR
// object: the canonical bundle that balances Holo UI ⊕ Holo UX. Writes two files from the one source
// (holo-product.mjs):
//
//   1 · os/usr/share/ns/product.jsonld        — the dereferenceable hosprod: OWL ontology + SKOS schemes.
//   2 · os/etc/holo-product/product.uor.json  — the sealed bundle: it embeds the 10 balanced faculties +
//        the hybrid method, and Merkle-LINKS BOTH hemispheres by content address — the sealed Holo UX
//        doctrine (etc/holo-ux/doctrine.uor.json) AND the canonical Holo UI token/engine files. Its did
//        re-derives (Law L5); change either hemisphere and the bundle κ changes.
//
// Deterministic + re-runnable. Re-run after re-sealing the Holo UX doctrine or editing any linked file.
//   node tools/seal-product.mjs

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { FACULTIES, METHOD, FRAMEWORKS, BALANCE, toOntology } from "../os/usr/lib/holo/holo-product.mjs";
import { sha256hex } from "../os/usr/lib/holo/holo-uor.mjs";
import { makeObject, contentLink } from "../os/usr/lib/holo/holo-object.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const OS = join(here, "../os");
const read = (rel) => readFileSync(join(OS, rel));

// 1 · the ontology materialization ────────────────────────────────────────────────────────────────
const ontology = toOntology();
writeFileSync(join(OS, "usr/share/ns/product.jsonld"), JSON.stringify(ontology, null, 2) + "\n");

// 2 · the sealed bundle — composes BOTH hemispheres by content address ──────────────────────────────
const leaf = (rel, p, type = "schema:MediaObject") => contentLink(rel, `did:holo:sha256:${sha256hex(read(p))}`, type);
const links = [
  // the product source + its materialized vocabulary
  leaf("hosprod:source", "usr/lib/holo/holo-product.mjs", "schema:SoftwareSourceCode"),
  leaf("hosprod:ontology", "usr/share/ns/product.jsonld", "schema:DigitalDocument"),
  // UX hemisphere — the whole sealed Holo UX doctrine (its κ commits to the UX sources transitively)
  leaf("hosprod:ux", "etc/holo-ux/doctrine.uor.json", "schema:CreativeWork"),
  // UI hemisphere — the canonical Holo UI token + engine layer
  leaf("hosprod:ui-engine", "usr/lib/holo/holo-theme.js", "schema:SoftwareSourceCode"),
  leaf("hosprod:ui-kernel", "usr/lib/holo/holo-ui-kernel.js", "schema:SoftwareSourceCode"),
  leaf("hosprod:ui-color", "usr/lib/holo/holo-theme.css", "schema:DigitalDocument"),
  leaf("hosprod:ui-layout", "usr/lib/holo/holo-mobile.css", "schema:DigitalDocument"),
  leaf("hosprod:ui-proportion", "usr/lib/holo/holo-phi.css", "schema:DigitalDocument"),
  leaf("hosprod:ui-zones", "usr/lib/holo/holo-zones.js", "schema:SoftwareSourceCode"),
  leaf("hosprod:ui-icons", "usr/lib/holo/holo-icons.js", "schema:SoftwareSourceCode"),
];

const uxCount = FACULTIES.filter((f) => f.hemisphere === "ux").length;
const uiCount = FACULTIES.filter((f) => f.hemisphere === "ui").length;

const obj = makeObject(new Map(), {
  type: ["schema:CreativeWork", "prov:Entity", "skos:Collection"],
  context: [{ skos: "http://www.w3.org/2004/02/skos/core#", hosprod: "https://hologram.os/ns/product#", hosc: "https://hologram.os/ns/conformance#" }],
  "schema:name": "Holo Product — the canonical foundation for beautiful, valuable, delightful Hologram-native products",
  "schema:description": "Why: a product is whole only when how it looks and how it works are designed together and shipped with proof. How: this one self-verifying object bundles and balances the two already-wired faculties — Holo UI (the look) and Holo UX (the experience) — as ten capabilities (five per hemisphere), and binds a hybrid delivery method (discover · define · design · build · verify · deliver) drawn from the field's frameworks. What: every Hologram-native product is built on this foundation, binding the κ rather than re-deciding the basics — re-derive this did and each linked hemisphere to verify (Law L5).",
  "schema:softwareVersion": "1.0",
  "dcterms:conformsTo": "https://hologram.os/ns/product",
  "dcterms:license": "https://creativecommons.org/publicdomain/zero/1.0/",
  "hosprod:balance": BALANCE,
  "hosprod:faculties": FACULTIES.map((f) => ({ "@id": `hosprod:${f.id}`, hemisphere: f.hemisphere, prefLabel: f.label, "hosprod:realizedBy": f.realizedBy, "hosprod:obligation": f.obligation })),
  "hosprod:balanced": { ux: uxCount, ui: uiCount, balanced: uxCount === uiCount },
  "hosprod:method": METHOD.map((m) => ({ "@id": `hosprod:${m.id}`, prefLabel: m.label, "hosprod:draws": m.draws, "hosprod:obligation": m.obligation })),
  "hosprod:frameworks": FRAMEWORKS,
  "hosc:authority": "ADR-0065 (Holo Product) · ADR-0030/0057 (Holo UI) · ADR-0062 (Holo UX) · project-management frameworks (Agile · Scrum · Kanban · Waterfall · Lean · PRINCE2 · Six Sigma · Hybrid, cited) · W3C OWL 2 / RDFS / SKOS · UOR-ADDR (κ = H(canonical_form)) · verify by re-derivation (Law L5)",
  "hosc:witness": "tools/holo-product-witness.mjs",
  links,
});

mkdirSync(join(OS, "etc/holo-product"), { recursive: true });
writeFileSync(join(OS, "etc/holo-product/product.uor.json"), JSON.stringify(obj, null, 2) + "\n");

console.log(`sealed Holo Product`);
console.log(`  ns/product.jsonld    — ${ontology["@graph"].length} terms (${FACULTIES.length} faculties · ${METHOD.length} method phases)`);
console.log(`  product.uor.json     — ${obj.id}`);
console.log(`  balance              — ${uxCount} UX ⊕ ${uiCount} UI faculties (${uxCount === uiCount ? "balanced" : "IMBALANCED"})`);
console.log(`  hemispheres linked   — UX doctrine + ${links.length - 3} UI files (re-derive to verify, Law L5)`);
