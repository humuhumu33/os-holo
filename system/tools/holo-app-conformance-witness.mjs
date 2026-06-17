#!/usr/bin/env node
// holo-app-conformance-witness.mjs — the UNIVERSAL APP CONFORMANCE gate (ADR-0112). Asserts, per app,
// all SIX properties of a self-contained, shareable, provenance-tracked κ-holospace, as a RATCHET
// (the "betterer" no-regression pattern, the sibling of holo-app-mobile-witness.mjs): an app may never
// LOSE a property it already satisfied, so the corpus can only get MORE conformant. Properties not yet
// met are surfaced RED, never faked green (Law L5 honesty).
//
// The six properties (per app, static evidence over the served app repo + the OS catalog):
//   P1 canonical-shell   — runs inside the ONE shell: has an authored index.html surface AND ships NO
//                          forked shell.html of its own (the shell is the OS's, not the app's).
//   P2 self-contained    — sealed κ-object: holospace.lock.json with a did:holo:sha256 root + non-empty
//                          closure, AND no UNDECLARED mandatory backend (an external fetch/WS with no
//                          holo:egress declaration is an honest RED — opt-in egress must be declared).
//   P3 storage-agnostic  — the app's root is a CONTENT address (did:holo:sha256), resolvable by any
//                          transport tier (the WHAT is fixed; the WHERE is a tier — honest split).
//   P4 single-address    — the app's TRUE root κ is DISCOVERABLE from the one door: it appears in the
//                          OS app catalog (apps/index.jsonld) as a resolvable key. (Today most fail:
//                          the catalog @id is a metadata-card κ or a slug, not the app root κ — that
//                          mismatch is exactly what this row keeps honest until the reverse-index lands.)
//   P5 share-as-link     — shareable with a self-explanatory social card: the catalog entry carries a
//                          schema:name AND a schema:description (the per-app OG cover + auto-description).
//   P6 provenance        — embeds a κ-addressed version chain with PER-VERSION creator κ, kept OUT-OF-
//                          BAND in holospace.prov.json (folding lineage into the κ breaks κ-memo).
//
// Read-only: scans files, never edits — adds the enforcement with NO κ drift / re-pin.
//
//   node tools/holo-app-conformance-witness.mjs                    # enforce against the baseline
//   node tools/holo-app-conformance-witness.mjs --report          # print the full per-app matrix
//   node tools/holo-app-conformance-witness.mjs --update-baseline # re-seal the conformance floor
//
// Authority: ADR-0112 (this baseline) over ADR-0109 (Share carriage) · ADR-0105/0106 (Workspace Sync +
// Session capture) · ADR-0082 (PROV-O) · ADR-0111 (Boot root / shell + CSP floor) · ADR-0103 (Omni
// resolver) · the App-mobile/PWA ratchet (#app-mobile-conformance) · the Gateway launcher.

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { APPS_DIR } from "./holo-paths.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const APPS = APPS_DIR;
const CATALOG = join(APPS, "index.jsonld");
const BASELINE = join(here, "holo-app-conformance-baseline.json");
const update = process.argv.includes("--update-baseline");
const report = process.argv.includes("--report");

const KAPPA_RE = /^did:holo:sha256:[0-9a-f]{64}$/;
const HEX64_RE = /[0-9a-f]{64}/;

// Native wrappers / non-mountable bundles that legitimately differ from a mounted holospace app.
const SHELL_FORK_EXEMPT = new Set(["tauri"]);   // the desktop/native build ships the canonical shell by design

const PROPS = ["P1", "P2", "P3", "P4", "P5", "P6"];
const PROP_LABEL = {
  P1: "canonical-shell", P2: "self-contained", P3: "storage-agnostic",
  P4: "single-address", P5: "share-as-link", P6: "provenance",
};

// each app's AUTHORED surface = apps/<id>/index.html (vendored code lives in subdirs, not scanned).
const appIds = existsSync(APPS)
  ? readdirSync(APPS).filter((n) => { try { return statSync(join(APPS, n, "index.html")).isFile(); } catch { return false; } })
  : [];

if (!existsSync(APPS)) {
  console.error(`holo-app-conformance: APPS dir missing (${APPS}) — refusing to pass vacuously.`);
  process.exit(1);
}

// ---- the OS catalog (the one door) ----------------------------------------------------------------
let catalogText = "", catalog = null, byLanding = new Map();
try {
  catalogText = readFileSync(CATALOG, "utf8");
  catalog = JSON.parse(catalogText);
  for (const e of (catalog["dcat:dataset"] || [])) {
    const lp = e["dcat:landingPage"] || "";
    const m = lp.match(/apps\/([^/]+)\//);
    if (m) byLanding.set(m[1], e);
  }
} catch { /* honest: no catalog ⇒ P4/P5 cannot be satisfied */ }

// ---- per-app evidence ------------------------------------------------------------------------------
function readLock(id) {
  const p = join(APPS, id, "holospace.lock.json");
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, "utf8")); } catch { return null; }
}

// top-level authored scripts (not vendored subdirs) + index.html — where authored egress would live.
function authoredSources(id) {
  const dir = join(APPS, id);
  const out = [];
  try { out.push(readFileSync(join(dir, "index.html"), "utf8")); } catch {}
  try {
    for (const n of readdirSync(dir)) {
      if (/\.(m?js)$/.test(n)) { try { out.push(readFileSync(join(dir, n), "utf8")); } catch {} }
    }
  } catch {}
  return out.join("\n");
}

// an external network call to an http(s) origin (mandatory backend unless declared egress).
function externalEgress(src) {
  const hits = [];
  const reFetch = /fetch\(\s*[`'"]https?:\/\/([^`'"/]+)/gi;
  const reWs = /new\s+WebSocket\(\s*[`'"]wss?:\/\/([^`'"/]+)/gi;
  let m;
  while ((m = reFetch.exec(src))) hits.push(m[1]);
  while ((m = reWs.exec(src))) hits.push(m[1]);
  return [...new Set(hits)];
}

function evalApp(id) {
  const lock = readLock(id);
  const entry = byLanding.get(id) || null;
  const rootK = lock && typeof lock.root === "string" ? lock.root : "";
  const rootHex = (rootK.match(HEX64_RE) || [""])[0];
  const closureN = lock && lock.closure ? (Array.isArray(lock.closure) ? lock.closure.length : Object.keys(lock.closure).length) : 0;
  const src = authoredSources(id);
  const egress = externalEgress(src);
  const egressDeclared = !!(lock && lock["holo:egress"]) || !!(entry && entry["holo:egress"]);

  const r = {}; const why = {};

  // P1 — canonical shell: a mountable surface, no forked shell.html of its own.
  const hasFork = existsSync(join(APPS, id, "shell.html")) && !SHELL_FORK_EXEMPT.has(id);
  r.P1 = existsSync(join(APPS, id, "index.html")) && !hasFork;
  why.P1 = hasFork ? "ships its own shell.html (fork of the canonical shell)" : (r.P1 ? "index.html surface · no shell fork" : "no index.html surface");

  // P2 — self-contained + serverless: sealed lock, non-empty closure, no UNDECLARED external backend.
  const sealed = !!lock && KAPPA_RE.test(rootK) && closureN > 0;
  r.P2 = sealed && (egress.length === 0 || egressDeclared);
  why.P2 = !sealed ? (lock ? "lock present but root not a κ or empty closure" : "no holospace.lock.json")
    : (egress.length && !egressDeclared ? `undeclared external backend: ${egress.join(", ")}` : `sealed · closure ${closureN}${egress.length ? ` · egress declared` : ""}`);

  // P3 — storage-agnostic: root is a content address (did:holo:sha256).
  r.P3 = KAPPA_RE.test(rootK);
  why.P3 = r.P3 ? "root is a did:holo:sha256 content address" : "no content-address root κ";

  // P4 — single-address discovery: the TRUE root κ is discoverable in the catalog.
  r.P4 = !!rootHex && catalogText.includes(rootHex);
  why.P4 = !rootHex ? "no root κ to discover"
    : (r.P4 ? "root κ discoverable in catalog" : "root κ NOT in catalog (catalog keys by metadata/slug, not app root — reverse-index missing)");

  // P5 — share-as-link: catalog entry with name + description (OG cover + auto-description).
  const nm = entry && (entry["schema:name"] || "").trim();
  const ds = entry && (entry["schema:description"] || "").trim();
  r.P5 = !!(nm && ds);
  why.P5 = !entry ? "not in catalog (no shareable card)" : (r.P5 ? "name + description present" : "catalog entry missing name or description");

  // P6 — provenance: out-of-band version chain with per-version creator κ.
  const provPath = join(APPS, id, "holospace.prov.json");
  let provOK = false, provWhy = "no holospace.prov.json (no version chain / creator κ)";
  if (existsSync(provPath)) {
    try {
      const prov = JSON.parse(readFileSync(provPath, "utf8"));
      const versions = prov.versions || prov["holo:versions"] || [];
      const ok = Array.isArray(versions) && versions.length > 0 &&
        versions.every((v) => typeof (v.creator || v.creatorKappa || v["schema:author"]) === "string" &&
          /^did:holo:/.test(v.creator || v.creatorKappa || v["schema:author"]));
      provOK = ok;
      provWhy = ok ? `version chain · ${versions.length} version(s) with creator κ` : "prov present but a version lacks a creator κ";
    } catch { provWhy = "holospace.prov.json malformed"; }
  }
  r.P6 = provOK; why.P6 = provWhy;

  return { id, r, why, satisfied: PROPS.filter((p) => r[p]) };
}

const results = appIds.map(evalApp);

// ---- ratchet vs baseline ---------------------------------------------------------------------------
const base = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, "utf8")) : { floor: {} };
const floor = base.floor || {};
const regressions = [];
for (const a of results) {
  const had = floor[a.id] || [];
  const lost = had.filter((p) => !a.r[p]);
  if (lost.length) regressions.push({ app: a.id, lost, why: lost.map((p) => `${PROP_LABEL[p]}: ${a.why[p]}`) });
}

// ---- tallies ---------------------------------------------------------------------------------------
const tally = Object.fromEntries(PROPS.map((p) => [p, results.filter((a) => a.r[p]).length]));
const fullyConformant = results.filter((a) => a.satisfied.length === PROPS.length).map((a) => a.id);
const N = results.length;

if (update) {
  writeFileSync(BASELINE, JSON.stringify({
    note: "Ratchet floor for UNIVERSAL APP CONFORMANCE (ADR-0112). 'floor' is the set of the six properties (P1..P6) each app already satisfies; the witness FAILS if any app LOSES a property below this floor, so the corpus can only get MORE conformant. Burn gaps down (make red props green) and re-seal with --update-baseline. New apps default to a floor of [] (must not regress once they gain a property).",
    sealedTally: tally, sealedFullyConformant: fullyConformant.length, apps: N,
    floor: Object.fromEntries(results.map((a) => [a.id, a.satisfied])),
  }, null, 2) + "\n");
  console.log(`app-conformance floor sealed → ${BASELINE}  (${N} apps · ${fullyConformant.length} fully conformant)`);
  process.exit(0);
}

// ---- report ----------------------------------------------------------------------------------------
const mark = (b) => (b ? "✓" : "·");
console.log(`Universal app conformance — ${N} apps · six properties (ADR-0112)\n`);
console.log(`   ${"app".padEnd(14)} ${PROPS.join("  ")}   satisfied`);
for (const a of results.sort((x, y) => y.satisfied.length - x.satisfied.length || x.id.localeCompare(y.id))) {
  console.log(`   ${a.id.padEnd(14)} ${PROPS.map((p) => " " + mark(a.r[p]) + " ").join("")}  ${a.satisfied.length}/6`);
}
console.log(`\n   per-property totals (of ${N}):`);
for (const p of PROPS) console.log(`     ${p} ${PROP_LABEL[p].padEnd(16)} ${tally[p]}/${N}`);
console.log(`\n   fully conformant (all 6): ${fullyConformant.length}/${N}${fullyConformant.length ? " — " + fullyConformant.join(", ") : ""}`);

if (report) {
  console.log(`\n   gaps (first reason per unmet property):`);
  for (const a of results) {
    const gaps = PROPS.filter((p) => !a.r[p]);
    if (gaps.length) console.log(`     ${a.id}: ${gaps.map((p) => `${PROP_LABEL[p]} — ${a.why[p]}`).join(" · ")}`);
  }
}

const witnessed = regressions.length === 0;
if (regressions.length) {
  console.log(`\nFAIL — app(s) regressed below the conformance floor:`);
  for (const r of regressions) { console.log(`  ✗ ${r.app}: lost ${r.lost.join(", ")}`); for (const w of r.why) console.log(`        ${w}`); }
} else {
  console.log(`\nPASS — no app dropped below its conformance floor (the corpus only ratchets up).`);
}

writeFileSync(join(here, "holo-app-conformance-witness.result.json"), JSON.stringify({
  spec: "Every holospace application is a self-contained, shareable, provenance-tracked κ-holospace: it runs in the ONE canonical shell (P1), is a sealed serverless κ-object with no undeclared backend (P2), is named by a content address resolvable by any transport tier (P3), is discoverable + launchable from its single root κ via the one door (P4), is shareable as a link with a per-app social card (P5), and embeds an out-of-band κ-addressed version chain with per-version creator κ for programmatic royalties (P6). Enforced as a RATCHET over the served app repo: no app may LOSE a property, so conformance only increases. Properties not yet met are reported RED, never faked green (Law L5).",
  authority: "ADR-0112 over ADR-0109 (Share) · ADR-0105/0106 (Workspace Sync + Session capture) · ADR-0082 (PROV-O) · ADR-0111 (Boot root + CSP/clickjacking floor) · ADR-0103 (Omni resolver) · #app-mobile-conformance (ratchet template) · Gateway launcher · static analysis of the served app repo + apps/index.jsonld",
  witnessed,
  covers: ["canonical-shell", "self-contained", "serverless", "storage-agnostic", "single-address", "share-as-link", "provenance", "royalties", "every-application", "ratchet", "honest-null"],
  appsScanned: N,
  perProperty: tally,
  fullyConformant: fullyConformant.length,
  fullyConformantApps: fullyConformant,
  matrix: Object.fromEntries(results.map((a) => [a.id, Object.fromEntries(PROPS.map((p) => [PROP_LABEL[p], a.r[p]]))])),
  regressions,
}, null, 2) + "\n");

console.log(`\nholo-app-conformance: ${witnessed ? "WITNESSED" : "FAILED"} · ${fullyConformant.length}/${N} fully conformant · totals ${PROPS.map((p) => `${p} ${tally[p]}`).join(" ")}`);
process.exit(witnessed ? 0 : 1);
