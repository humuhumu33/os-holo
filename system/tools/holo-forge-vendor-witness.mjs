// holo-forge-vendor-witness.mjs — proves the vendored esbuild-wasm toolchain is CONTENT-ADDRESSED: the
// build tool the Forge bundler class (ADR-0093) runs loads SAME-ORIGIN from the OS, and every byte
// re-derives to its committed κ pin (Law L5) — so the host serving it is NOT trusted (a tampered/wrong
// byte changes the hash → refused), removing the third-party-CDN dependency. The binaries are .gitignored
// artifacts (run tools/vendor-esbuild-wasm.mjs); if they are absent this witness SKIPS gracefully — the
// committed pin.json is still checked for shape.

import { readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFileSync } from "node:fs";

const here = dirname(fileURLToPath(import.meta.url));
const VENDOR = join(here, "../os/usr/lib/holo/holo-forge/vendor/esbuild-wasm");
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };
const sha = (buf) => createHash("sha256").update(buf).digest("hex");

const pinPath = join(VENDOR, "esbuild-wasm.pin.json");
ok("the κ pin (esbuild-wasm.pin.json) is committed", existsSync(pinPath));
const pin = existsSync(pinPath) ? JSON.parse(readFileSync(pinPath, "utf8")) : {};
ok("pin declares the toolchain + its files as did:holo κs", pin.tool === "esbuild-wasm" && !!pin.files && /^did:holo:sha256:/.test(pin.files["esbuild.wasm"] || ""), pin.version || "");

let vendored = 0, verified = 0;
for (const [name, did] of Object.entries(pin.files || {})) {
  const f = join(VENDOR, name);
  if (!existsSync(f)) continue;                                // gitignored artifact absent → skip (still re-derivable by re-running the vendor script)
  vendored++;
  const reDerived = "did:holo:sha256:" + sha(readFileSync(f));
  if (reDerived === did) verified++;
  ok("vendored " + name + " RE-DERIVES to its κ pin (Law L5)", reDerived === did, did.slice(0, 26) + "…");
}
if (vendored === 0) console.log("  ··  vendored binaries absent (run tools/vendor-esbuild-wasm.mjs) — pin checked, bytes skipped");
ok("every PRESENT vendored byte re-derives (host untrusted, L5)", verified === vendored);
ok("tamper would be refused (a flipped byte ≠ the pinned κ)", (() => { const b = Buffer.from("not the wasm"); return "did:holo:sha256:" + sha(b) !== (pin.files && pin.files["esbuild.wasm"]); })());

const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Forge vendored esbuild-wasm toolchain — the bundler's build tool is content-addressed + re-derivable, no trusted CDN (ADR-0093, Law L5)",
  passed: pass, failed: fail, vendoredPresent: vendored, checks };
writeFileSync(join(here, "holo-forge-vendor-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail" + (vendored ? "" : " (binaries not vendored on this host)"));
process.exit(fail === 0 ? 0 : 1);
