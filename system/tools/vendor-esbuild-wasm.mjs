// vendor-esbuild-wasm.mjs — make the Holo Forge bundler class (ADR-0093) 100% serverless by vendoring
// esbuild-wasm ON-DISK, content-addressed, so the build tool loads SAME-ORIGIN from the OS (re-derived to
// its κ, Law L5) instead of a third-party CDN.
//
// Downloads, into system/os/usr/lib/holo/holo-forge/vendor/esbuild-wasm/ :
//   • browser.min.js — the esbuild-wasm browser ESM API (initialize/build/transform)
//   • esbuild.wasm   — the ~9 MB WebAssembly compiler the API instantiates
//
// These are CONTENT-ADDRESSED ARTIFACTS, not source — they are .gitignored (like the Holo Voice weights).
// Run once after clone (or to refresh), cwd = Hologram OS2/system:   node tools/vendor-esbuild-wasm.mjs
//
// Every file is verified against a pinned sha256 (PINS below, Law L5) — the download host is NOT trusted:
// a tampered/wrong byte changes the hash → refused. The κ pins are written to esbuild-wasm.pin.json (small,
// COMMITTED), which the shell loader + the witness read to verify the bytes before use. To bump the
// version: change VER, run once with empty PINS (it prints what it got), paste them back, commit.

import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VER = "0.21.5";
const VENDOR = path.resolve(HERE, "../os/usr/lib/holo/holo-forge/vendor/esbuild-wasm");
const SRC = (p) => `https://unpkg.com/esbuild-wasm@${VER}/${p}`;   // unpkg serves raw package files
const FILES = [
  { name: "browser.min.js", url: SRC("lib/browser.min.js") },
  { name: "esbuild.wasm", url: SRC("esbuild.wasm") },
];
// PINS — fill after the first run (the script prints them); a present pin is ENFORCED (Law L5).
const PINS = {
  "browser.min.js": "6525467654c98b3cc9edcda44dd2fd6859bb9e00cd771cce85a431c5d2057ef3",
  "esbuild.wasm": "711d62484385c29d64ddcdc4c0beb3fb7903635a41bafffeb652938ee8480587",
};

const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

async function main() {
  await mkdir(VENDOR, { recursive: true });
  const got = {};
  for (const f of FILES) {
    process.stdout.write("• " + f.name + " … ");
    const res = await fetch(f.url);
    if (!res.ok) throw new Error("fetch " + f.url + " → HTTP " + res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    const hex = sha256(buf);
    if (PINS[f.name] && PINS[f.name] !== hex) throw new Error("κ MISMATCH for " + f.name + " — refused (Law L5)\n  want: " + PINS[f.name] + "\n  got:  " + hex);
    await writeFile(path.join(VENDOR, f.name), buf);
    got[f.name] = { sha256: hex, bytes: buf.length, did: "did:holo:sha256:" + hex };
    console.log(buf.length.toLocaleString() + " B  did:holo:sha256:" + hex.slice(0, 16) + "…");
  }
  const pin = { "@type": "holo:VendoredToolchain", tool: "esbuild-wasm", version: VER,
    files: Object.fromEntries(Object.entries(got).map(([n, v]) => [n, v.did])),
    sizes: Object.fromEntries(Object.entries(got).map(([n, v]) => [n, v.bytes])) };
  await writeFile(path.join(VENDOR, "esbuild-wasm.pin.json"), JSON.stringify(pin, null, 2) + "\n");
  console.log("\nPINS (paste into the script + commit esbuild-wasm.pin.json):");
  for (const [n, v] of Object.entries(got)) console.log('  "' + n + '": "' + v.sha256 + '",');
  console.log("\nVendored to " + VENDOR + " — the shell now loads esbuild-wasm SAME-ORIGIN (no CDN), verified by κ (Law L5).");
}
main().catch((e) => { console.error("vendor-esbuild-wasm FAILED:", e.message); process.exit(1); });
