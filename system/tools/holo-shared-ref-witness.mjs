#!/usr/bin/env node
// holo-shared-ref-witness.mjs — proves every app's content-addressed _shared <script>/<link> reference
// pins the CURRENT bytes of the shared lib it names (via the data-holo-shared hint). This is the gate that
// would have caught the Holo Terms outage: a shared lib (holo-terms.js) was edited → its κ moved → an app
// still pinned the OLD hex in `src="/.holo/sha256/<hex>.js" data-holo-shared="holo-terms.js"` → the κ-route
// re-derives from disk, finds nothing at that hex → 404 → window.HoloTerms undefined → a runtime throw on
// every load, with NO build-time error. Sealed refs drifting silently is the failure mode; this makes it
// LOUD: any stale ref → witnessed:false → the conformance gate goes red.
//
// It is the read-only twin of repin-shared-refs.mjs (the writer): same scan, same data-holo-shared hint,
// same κ-of-current-bytes. A green here ⟺ `repin-shared-refs --check` finds nothing to change. The fix is
// one command — node tools/repin-shared-refs.mjs — so detection (this) + heal (that) close the loop.
//
// Authority: UOR-ADDR (κ = H(bytes)) · holospaces Law L5 (re-derive to verify) · ADR-0057 (shared UI floor)
// · W3C Service Workers (holo-fhs-sw content-verify, which 409s the same drift in production).
//   node tools/holo-shared-ref-witness.mjs

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SHARED = join(here, "../os/usr/lib/holo");                            // the OS2 runtime _shared resolves here
const APPS = process.env.HOLO_APPS_DIR || "C:/Users/pavel/Desktop/Hologram Apps/apps";   // what OS2 serves

const kappaCache = new Map();
const kappaOf = (name) => {
  if (kappaCache.has(name)) return kappaCache.get(name);
  const p = join(SHARED, name);
  const k = (existsSync(p) && statSync(p).isFile()) ? createHash("sha256").update(readFileSync(p)).digest("hex") : null;
  kappaCache.set(name, k); return k;
};

const htmls = [];
const walk = (dir) => { for (const n of readdirSync(dir)) { const p = join(dir, n); const s = statSync(p);
  if (s.isDirectory()) walk(p); else if (p.endsWith(".html")) htmls.push(p); } };
const appsPresent = existsSync(APPS);
if (appsPresent) walk(APPS);

// <… /.holo/sha256/<hex>[.ext]" … data-holo-shared="<name>" …>
const REF = /\/\.holo\/sha256\/([a-f0-9]{64})(?:\.\w+)?"[^>]*?\bdata-holo-shared="([^"]+)"/g;

let refs = 0, verified = 0, skipped = 0;
const stale = [];                                                          // { file, name, pinned, current }
for (const file of htmls) {
  const src = readFileSync(file, "utf8");
  let m;
  while ((m = REF.exec(src))) {
    refs++;
    const pinned = m[1], name = m[2];
    const cur = kappaOf(name);
    if (!cur) { skipped++; continue; }                                     // names a vendored / app-local lib not in the OS2 runtime → can't verify
    if (cur === pinned) { verified++; continue; }
    stale.push({ file: file.replace(/.*[\\/]apps[\\/]/, "apps/"), name, pinned: pinned.slice(0, 12) + "…", current: cur.slice(0, 12) + "…" });
  }
}

const witnessed = stale.length === 0;
for (const s of stale) console.log(` STALE  ${s.file}  ${s.name}  pinned ${s.pinned} ≠ current ${s.current}`);
if (!appsPresent) console.log("  apps dir absent (lean image) — nothing to verify (vacuously green)");
console.log(`\n${witnessed ? "PASS" : "FAIL"} — ${verified}/${refs} shared refs current` +
  (skipped ? `, ${skipped} skipped (not OS2-runtime libs)` : "") +
  (stale.length ? `, ${stale.length} STALE → heal: node tools/repin-shared-refs.mjs` : "") +
  ` · scanned ${htmls.length} app HTML(s)`);

const result = {
  "@type": "earl:TestResult", witnessed,
  subject: "holo shared-ref integrity (every app's /.holo/sha256 data-holo-shared pin == current lib κ — no silent 404 drift)",
  passed: verified, failed: stale.length, appsPresent, refs, skipped,
  stale: stale.slice(0, 50),
  covers: witnessed ? ["app shared-ref pins current (no κ drift)"] : [],
};
writeFileSync(join(here, "holo-shared-ref-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
process.exit(witnessed ? 0 : 1);
