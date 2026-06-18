#!/usr/bin/env node
// pin-to-closure.mjs — ADD served files to os/etc/os-closure.json so the κ-verifying delivery worker
// re-derives them (Law L5) instead of serving them unverified (passthrough). The _shared render chain
// (holo-render → holo-surface → holo-memo → holo-compute → holo-blake3) was load-bearing but UNPINNED,
// so an origin swap of any of them ran unverified code — exactly the KAPPA-1 hole, on the render path.
// This mints a full DUAL-AXIS entry for each (did:holo:sha256 serve key ⊕ did:holo:blake3 σ-axis +
// sri + multibase), matching reseal-drift/seal-substrate. root is left as-is (not a hash over the entry
// set; the maintenance tools also leave it; no witness re-derives it). Idempotent; reports old→new.
//
//   node tools/pin-to-closure.mjs            # pin the default render chain
//   node tools/pin-to-closure.mjs --check    # report what would change (exit 1 if any)
//   node tools/pin-to-closure.mjs _shared/x.mjs _shared/y.js   # pin specific serving keys
import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OS = join(here, "../os");
const CLOSURE = join(OS, "etc/os-closure.json");
const argv = process.argv.slice(2);
const checkOnly = argv.includes("--check");
const keys = argv.filter((a) => !a.startsWith("--"));
const DEFAULT = ["_shared/holo-render.js", "_shared/holo-surface.mjs", "_shared/holo-memo.mjs", "_shared/holo-compute.mjs", "_shared/holo-blake3.mjs"];
const targets = keys.length ? keys : DEFAULT;

const { fhsMap } = await import(pathToFileURL(join(OS, "lib/holo-fhs-map.mjs")));
const { blake3hex } = await import(pathToFileURL(join(OS, "usr/lib/holo/holo-blake3.mjs")));

// same resolution order as seal-substrate/holo-substrate-witness (incl. _shared→lib fallback)
const abs = (key) => {
  const p = fhsMap(key); if (p) { const f = join(OS, p); if (existsSync(f) && statSync(f).isFile()) return f; }
  const d = join(OS, key); if (existsSync(d) && statSync(d).isFile()) return d;
  const m = key.match(/^_shared\/(.+)$/); if (m) { const l = join(OS, "lib", m[1]); if (existsSync(l) && statSync(l).isFile()) return l; }
  return null;
};
const entry = (buf) => {
  const dig = createHash("sha256").update(buf).digest();
  return {
    kappa: "did:holo:sha256:" + dig.toString("hex"),
    sri: "sha256-" + dig.toString("base64"),
    multibase: "u" + Buffer.concat([Buffer.from([0x12, 0x20]), dig]).toString("base64url"),
    bytes: buf.length,
    alsoKnownAs: ["did:holo:blake3:" + blake3hex(buf)],
  };
};

const doc = JSON.parse(readFileSync(CLOSURE, "utf8"));
const closure = doc.closure || {};
let changed = 0, missing = 0;
for (const key of targets) {
  const f = abs(key); if (!f) { console.error(`  ! ${key} — no file resolves (skipped)`); missing++; continue; }
  const e = entry(readFileSync(f));
  const had = closure[key];
  if (had && had.kappa === e.kappa && (had.alsoKnownAs || []).includes(e.alsoKnownAs[0])) { console.log(`  = ${key} (already pinned, current)`); continue; }
  changed++;
  console.log(`  ${had ? "↻" : "+"} ${key}\n      ${e.kappa.slice(0, 30)}…  ⊕  ${e.alsoKnownAs[0].slice(0, 30)}…`);
  if (!checkOnly) closure[key] = e;
}
if (!checkOnly && changed) writeFileSync(CLOSURE, JSON.stringify(doc, null, 2) + "\n");
console.log(`\n${changed} ${checkOnly ? "would pin" : "pinned"}${missing ? `, ${missing} missing` : ""} · ${Object.keys(closure).length} κ in the closure`);
process.exit((checkOnly && changed) || missing ? 1 : 0);
