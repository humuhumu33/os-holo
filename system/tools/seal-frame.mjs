#!/usr/bin/env node
// seal-frame.mjs — re-pin a served OS frame into the κ-route closure (os/etc/os-closure.json),
// mirroring seal-shell.mjs's entry shape, for frames that are content-verified routes but not boot
// loaders (e.g. home.html, holospace.html). Run after editing such a frame so the content-verify SW
// re-derives its bytes and refuses a mismatch (Law L5). Does NOT recompute the OS-image Merkle root
// (that's the cross-repo full-image pipeline).
//   node tools/seal-frame.mjs <serve-rel-key> [key...]
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OS = join(here, "../os");
const CLOSURE = join(OS, "etc/os-closure.json");
const { blake3hex } = await import(pathToFileURL(join(OS, "usr/lib/holo/holo-blake3.mjs")));
const { atlasCoord, ATLAS } = await import(pathToFileURL(join(OS, "usr/lib/holo/holo-atlas-coord.mjs")));

const closure = JSON.parse(readFileSync(CLOSURE, "utf8"));
closure.closure = closure.closure || {};
for (const key of process.argv.slice(2)) {
  const buf = readFileSync(join(OS, "usr/share/frame", key));
  const dig = createHash("sha256").update(buf).digest(), hex = dig.toString("hex"), blakeHex = blake3hex(buf);
  closure.closure[key] = {
    ...(closure.closure[key] || {}),                          // preserve any extra fields
    kappa: "did:holo:sha256:" + hex,
    sri: "sha256-" + dig.toString("base64"),
    multibase: "u" + Buffer.concat([Buffer.from([0x12, 0x20]), dig]).toString("base64url"),
    bytes: buf.length,
    alsoKnownAs: ["did:holo:blake3:" + blakeHex],
    "holo:within": ATLAS.object,
    "holo:atlasCoordinate": atlasCoord(blakeHex),
  };
  console.log(`  ${key} → did:holo:sha256:${hex.slice(0, 12)}…`);
}
writeFileSync(CLOSURE, JSON.stringify(closure, null, 2) + "\n");
console.log("✓ re-pinned frame(s) in the κ-route closure (Law L5)");
