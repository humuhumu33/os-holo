#!/usr/bin/env node
// gen-figlet-manifest.mjs — seal the vendored FIGlet fonts as κ-objects.
// Walks usr/lib/holo/vendor/figlet-fonts/*.flf, computes the dual-axis identity
// for each (sha256 serve-key + blake3 substrate anchor, exactly like the rest of
// the substrate), and writes manifest.json. The manifest is BOTH the font list
// the engine enumerates AND the κ map it verifies each .flf against on read (L5).
//
//   node tools/gen-figlet-manifest.mjs        # regenerate after adding/updating fonts
//
// Provenance: figlet@1.11.0 (npm) — Patrick Gillespie, MIT — github.com/patorjk/figlet.js
// (same author + same font data as the TAAG tool at patorjk.com/software/taag).

import { readdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { blake3hex } from "../os/usr/lib/holo/holo-blake3.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const FONT_DIR = path.join(HERE, "..", "os", "usr", "lib", "holo", "vendor", "figlet-fonts");
const DEFAULT_FONT = "Graffiti";

const sha256hex = (buf) => createHash("sha256").update(buf).digest("hex");
const sriOf = (buf) => "sha256-" + createHash("sha256").update(buf).digest("base64");

const files = (await readdir(FONT_DIR)).filter((f) => f.endsWith(".flf")).sort();
const fonts = {};
let totalBytes = 0;
for (const file of files) {
  const name = file.slice(0, -4); // strip .flf
  const buf = await readFile(path.join(FONT_DIR, file));
  totalBytes += buf.length;
  fonts[name] = {
    file,
    bytes: buf.length,
    kappa: "did:holo:sha256:" + sha256hex(buf),
    sri: sriOf(buf),
    alsoKnownAs: ["did:holo:blake3:" + blake3hex(new Uint8Array(buf))],
  };
}

const manifest = {
  algo: "sha256",
  name: "figlet-fonts",
  authority: "figlet@1.11.0 (npm) — Patrick Gillespie, MIT — github.com/patorjk/figlet.js",
  note: "FIGlet font data, identical to the TAAG generator (patorjk.com/software/taag). Each .flf is dual-axis κ-addressed; the engine re-verifies bytes against `kappa` on read (Law L5).",
  default: DEFAULT_FONT,
  count: files.length,
  totalBytes,
  fonts,
};

const out = path.join(FONT_DIR, "manifest.json");
await writeFile(out, JSON.stringify(manifest, null, 2) + "\n");
console.log(`✓ sealed ${files.length} fonts (${(totalBytes / 1048576).toFixed(1)} MB) → ${path.relative(process.cwd(), out)}`);
console.log(`  default: ${DEFAULT_FONT} → ${fonts[DEFAULT_FONT]?.kappa || "(MISSING!)"}`);
