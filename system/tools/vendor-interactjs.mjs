// vendor-interactjs.mjs — vendor interact.js (MIT) as the Holo Widgets SNAP ENGINE (precise drag/resize +
// magnetic grid/edge/centre snapping for every object on a holospace tab). One UMD bundle, global `interact`.
//
// Pins the npm TARBALL by its sha512 integrity (Law L5 on the one artifact — the MCP-SDK pattern), extracts
// dist/interact.min.js to system/os/usr/lib/holo/interactjs/ (served same-origin at /_shared/interactjs/,
// content-verified by the SW on serve — no CDN at runtime). The bundle is a .gitignored content artifact;
// run once after clone (cwd = Hologram OS2/system):   node tools/vendor-interactjs.mjs
//
// To bump: change VERSION, blank INTEGRITY, run once (prints the integrity it got), paste it back, commit.

import { writeFile, rm } from "node:fs/promises";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VENDOR = path.resolve(HERE, "../os/usr/lib/holo/interactjs");
const BUNDLE = path.join(VENDOR, "interact.min.js");

const VERSION = "1.10.27";
const INTEGRITY = "sha512-y/8RcCftGAF24gSp76X2JS3XpHiUvDQyhF8i7ujemBz77hwiHDuJzftHx7thY8cxGogwGiPJ+o97kWB6eAXnsA==";
const TARBALL = `https://registry.npmjs.org/interactjs/-/interactjs-${VERSION}.tgz`;
const sha512b64 = (buf) => "sha512-" + createHash("sha512").update(buf).digest("base64");

async function main() {
  if (existsSync(BUNDLE)) { console.log("· interact.min.js already vendored — delete", VENDOR, "to refresh"); return; }
  console.log(`· fetching interactjs@${VERSION} …`);
  const res = await fetch(TARBALL, { redirect: "follow" });
  if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const got = sha512b64(buf);
  if (INTEGRITY) {
    if (got !== INTEGRITY) throw new Error(`INTEGRITY MISMATCH (Law L5 — refused)\n  expected ${INTEGRITY}\n  got      ${got}`);
    console.log("  ✓ tarball integrity verified (Law L5)");
  } else {
    console.log(`  (unpinned) integrity = "${got}"  ← paste into INTEGRITY and commit`);
  }
  mkdirSync(VENDOR, { recursive: true });
  const tgz = path.join(tmpdir(), `interactjs-${VERSION}.tgz`).replace(/\\/g, "/");
  await writeFile(tgz, buf);
  // --force-local + cwd extract: GNU tar on Windows otherwise reads the "C:" drive colon as a remote host.
  execFileSync("tar", ["--force-local", "-xzf", tgz, "--strip-components=2", "package/dist/interact.min.js"], { cwd: VENDOR, stdio: "inherit" });
  await rm(tgz, { force: true });
  if (!existsSync(BUNDLE)) { console.log("\n  FAILED — no interact.min.js extracted"); process.exit(1); }
  const k = "did:holo:sha256:" + createHash("sha256").update(readFileSync(BUNDLE)).digest("hex");
  console.log(`\n  WITNESS-READY ✓  interact.min.js → ${path.relative(path.resolve(HERE, ".."), BUNDLE)}\n  κ ${k}`);
}
main().catch((e) => { console.error("vendor-interactjs:", e.message); process.exit(1); });
