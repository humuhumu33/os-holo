#!/usr/bin/env node
// holo-dev-fresh-gate-witness.mjs — Phase 0a (Law L5) witness: dev-fresh must require an EXPLICIT
// opt-in, NEVER hostname alone (conformance-audit M1). holo-fhs-sw.js previously set
//   const DEV = /^(localhost|127.0.0.1|0.0.0.0|[::1])$/.test(self.location.hostname)
// so ANY loopback origin — a production build run locally, a packaged app bound to 127.0.0.1, an
// attacker-controlled local proxy — silently disabled L5 re-derivation for every PATH request.
// THE FIX: gate dev-fresh on an explicit ALLOW_DEV_FRESH flag (sealed default false; flipped ONLY by
// the dev server tools/holo-serve-fhs.mjs) AND a loopback hostname.
//
// Behavioral definition (devFreshAllowed(allow, hostname) — the shared pure helper; this witness IS the spec):
//   localhost + allow=false  → false   (THE FIX: hostname alone is NOT enough)
//   localhost + allow=true   → true    (explicit dev opt-in on a loopback)
//   prod host + allow=true   → false   (a real host never gets dev-fresh)
//
// Run: node holo-os/system/tools/holo-dev-fresh-gate-witness.mjs
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFileSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const MAP = join(here, "../os/lib/holo-fhs-map.mjs");
const SW = join(here, "../os/holo-fhs-sw.js");
const { devFreshAllowed } = await import(pathToFileURL(MAP)).catch(() => ({}));

let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : fail++; console.log((c ? "  ✓ " : "  ✗ ") + m); };

ok(typeof devFreshAllowed === "function", "devFreshAllowed helper exists (shared by SW + witness)");
if (typeof devFreshAllowed === "function") {
  ok(devFreshAllowed(false, "localhost") === false, "localhost + allow=false → dev-fresh OFF (hostname alone insufficient)");
  ok(devFreshAllowed(false, "127.0.0.1") === false, "127.0.0.1 + allow=false → dev-fresh OFF");
  ok(devFreshAllowed(true, "localhost") === true, "localhost + allow=true → dev-fresh ON (explicit opt-in)");
  ok(devFreshAllowed(true, "example.com") === false, "prod host + allow=true → dev-fresh OFF (real host never)");
  ok(devFreshAllowed(true, "myapp.github.io") === false, "github.io + allow=true → dev-fresh OFF");
} else { fail += 5; }

// the sealed SW must ship the flag default OFF and gate DEV through the helper (not a raw hostname test)
const sw = readFileSync(SW, "utf8");
ok(/const ALLOW_DEV_FRESH = false;/.test(sw), "sealed SW ships ALLOW_DEV_FRESH = false");
ok(/devFreshAllowed\(\s*ALLOW_DEV_FRESH\s*,/.test(sw), "SW computes DEV via devFreshAllowed(ALLOW_DEV_FRESH, …)");
ok(!/const DEV = \/\^\(localhost/.test(sw), "SW no longer gates DEV on hostname alone");

console.log(`\n${fail === 0 ? "GREEN" : "RED"} — ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
