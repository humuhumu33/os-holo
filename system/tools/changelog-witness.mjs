#!/usr/bin/env node
// changelog-witness.mjs — prove CHANGELOG.md conforms to Keep a Changelog + Semantic Versioning.
// Fail-closed: any violation exits non-zero, in keeping with the project's "done == witnessed"
// rule. Witnessed against external authorities: keepachangelog.com (structure) and semver.org
// (versions). Pure Node, no deps.
//
//   node system/tools/changelog-witness.mjs [CHANGELOG.md]
import { readFileSync } from "node:fs";

const SRC = process.argv[2] || "CHANGELOG.md";
const SECTIONS = new Set(["Added", "Changed", "Deprecated", "Removed", "Fixed", "Security"]);
const SEMVER = /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/; // semver.org 2.0.0
const fails = [];
const fail = (m) => fails.push(m);

let md;
try { md = readFileSync(SRC, "utf8"); } catch { console.error(`changelog-witness: cannot read ${SRC}`); process.exit(1); }

const lines = md.split(/\r?\n/);
if (!/^#\s+Changelog\s*$/m.test(md)) fail('missing the "# Changelog" title');

const versions = [];
let rel = null, sec = null, sawUnreleased = false, idx = 0;
for (const ln of lines) {
  idx++;
  let m = ln.match(/^##\s+\[([^\]]+)\](?:\s*-\s*(.*))?$/);
  if (m) {
    const [, ver, rest] = m; sec = null;
    if (/^unreleased$/i.test(ver)) {
      sawUnreleased = true; if (versions.length) fail("[Unreleased] must be the first version section");
      rel = { ver: "unreleased" }; continue;
    }
    if (!SEMVER.test(ver)) fail(`version "[${ver}]" is not valid SemVer (line ${idx})`);
    const date = (rest || "").trim();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) fail(`release [${ver}] needs an ISO date "- YYYY-MM-DD" (line ${idx})`);
    versions.push(ver); rel = { ver }; continue;
  }
  m = ln.match(/^###\s+(.+?)\s*$/);
  if (m) {
    sec = m[1].trim();
    if (!rel) fail(`section "${sec}" appears before any version (line ${idx})`);
    else if (!SECTIONS.has(sec)) fail(`"${sec}" is not a Keep a Changelog section (line ${idx})`);
    continue;
  }
}

if (!sawUnreleased) fail("missing an [Unreleased] section");

// versions must be strictly descending by SemVer
const cmp = (a, b) => { const pa = a.split(/[.+-]/).map(Number), pb = b.split(/[.+-]/).map(Number);
  for (let i = 0; i < 3; i++) if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) - (pb[i] || 0); return 0; };
for (let i = 1; i < versions.length; i++) if (cmp(versions[i - 1], versions[i]) <= 0)
  fail(`versions out of order: [${versions[i - 1]}] should be newer than [${versions[i]}]`);

if (fails.length) {
  console.error(`changelog-witness: ✗ ${fails.length} violation(s) in ${SRC}`);
  for (const f of fails) console.error("  - " + f);
  process.exit(1);
}
console.log(`changelog-witness: ✓ ${SRC} conforms to Keep a Changelog + SemVer (${versions.length} release(s))`);
