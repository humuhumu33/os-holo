#!/usr/bin/env node
// seal-hub-closure.mjs — seal the Holo Hub (ADR-0094) OS-tree files into the OS-wide κ-route closure
// (os/etc/os-closure.json), keyed by serve-rel path → { kappa, sri, multibase, bytes } — exactly the
// shape + mechanism seal-login-closure.mjs uses. Once sealed, each byte resolves by content at
// /.holo/sha256/<hex> and re-derives to its κ (Law L5). Mirrors the established convention: it maintains
// the `closure` κ-route map only; the OS-image Merkle `root`/`files` count is the separate full-image
// build pipeline (compute-manifest → copy-content), deliberately left untouched here.
//
//   node tools/seal-hub-closure.mjs

import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OS = join(here, "../os");
const CLOSURE = join(OS, "etc/os-closure.json");

// serve-rel key → physical FHS path (the libs serve at /_shared/<name>; shell.html at its own key).
const FILES = {
  "_shared/holo-hub.mjs": "usr/lib/holo/holo-hub.mjs",                 // catalog → product κ data layer (Stage 2)
  "_shared/holo-hub-kernel.mjs": "usr/lib/holo/holo-hub-kernel.mjs",   // Medusa commerce-math Forge κ-transform (Stage 3)
  "_shared/holo-hub-checkout.mjs": "usr/lib/holo/holo-hub-checkout.mjs", // own + pay via Holo Own + the wallet rail (Stage 5)
  "_shared/holo-hub-agent.mjs": "usr/lib/holo/holo-hub-agent.mjs",     // the agent door — Store-API-shaped MCP surface (Stage 6)
  "_shared/holo-forge-bundle.mjs": "usr/lib/holo/holo-forge-bundle.mjs", // Forge bundler (gained format:"esm"/define for the kernel)
  "shell.html": "usr/share/frame/shell.html",                          // ▶ Play now launches the Hub
};

const entry = (buf) => {
  const dig = createHash("sha256").update(buf).digest();
  return {
    kappa: "did:holo:sha256:" + dig.toString("hex"),
    sri: "sha256-" + dig.toString("base64"),
    multibase: "u" + Buffer.concat([Buffer.from([0x12, 0x20]), dig]).toString("base64url"),
    bytes: buf.length,
  };
};

const doc = JSON.parse(readFileSync(CLOSURE, "utf8"));
doc.closure = doc.closure || {};
let added = 0, updated = 0;
for (const [key, rel] of Object.entries(FILES)) {
  const abs = join(OS, rel);
  if (!existsSync(abs) || !statSync(abs).isFile()) { console.log(`  ⚠ missing ${rel} — skipped`); continue; }
  const e = entry(readFileSync(abs));
  if (doc.closure[key]) { if (doc.closure[key].kappa !== e.kappa) { doc.closure[key] = e; updated++; } else { console.log(`  = unchanged  ${key}`); continue; } }
  else { doc.closure[key] = e; added++; }
  console.log(`${doc.closure[key].kappa.slice(0, 26)}…  ${key}`);
}
writeFileSync(CLOSURE, JSON.stringify(doc, null, 2) + "\n");
console.log(`\nsealed ${added} new + ${updated} updated → ${Object.keys(doc.closure).length} κ in the closure`);
