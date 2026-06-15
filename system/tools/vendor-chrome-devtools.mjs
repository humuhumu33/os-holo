// vendor-chrome-devtools.mjs — vendor the Chrome devtools-frontend UI UNMODIFIED (ADR-0095, Bet A).
//
// Downloads the npm `chrome-devtools-frontend` package (the BUILT front_end/, not a from-source GN/Ninja
// build), verifies the WHOLE tarball against a pinned sha512 integrity (Law L5 on the ONE external
// artifact — the MCP-SDK pin pattern, not 4843 per-file pins), and extracts the built UI into
//   system/os/usr/lib/holo/devtools/vendor/front_end/
//
// The UI is a CONTENT-ADDRESSED ARTIFACT, not source — it is .gitignored. CDP is the human door's PRIVATE
// transport (ADR-0095 §7 T1); agents/Q never touch this bundle, they use the W3C JSON-LD doors. Run once
// after clone (cwd = Hologram OS2/system):   node tools/vendor-chrome-devtools.mjs
//
// To bump the version: change VERSION, blank INTEGRITY, run once (it prints the integrity it got from the
// npm registry AND the sha512 it computed — they must match), paste it back, and commit the script.

import { mkdir, writeFile, rm, readFile } from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const VENDOR = path.resolve(HERE, "../os/usr/lib/holo/devtools/vendor");
const FRONT_END = path.join(VENDOR, "front_end");

// PINNED (Law L5). The version + the tarball integrity the download host is NOT trusted to honour.
const VERSION = "1.0.1645245";
const INTEGRITY = "sha512-noAeBfaJ2lveTLLyfwWi6Ypc4PxF085PdiCU5WKslMJ3ojDSEQhZsclpJdQ1N4gRdSgsvOjGlBOkyTLt2BpV5Q==";
const TARBALL = `https://registry.npmjs.org/chrome-devtools-frontend/-/chrome-devtools-frontend-${VERSION}.tgz`;

const sha512b64 = (buf) => "sha512-" + createHash("sha512").update(buf).digest("base64");

async function main() {
  if (existsSync(path.join(FRONT_END, "devtools_app.html")) || existsSync(path.join(FRONT_END, "inspector.html"))) {
    console.log("· front_end already vendored — delete", VENDOR, "to refresh"); return;
  }
  console.log(`· fetching chrome-devtools-frontend@${VERSION} …`);
  const res = await fetch(TARBALL, { redirect: "follow" });
  if (!res.ok) throw new Error(`download failed: HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  console.log(`  got ${(buf.length / 1e6).toFixed(1)} MB`);

  const got = sha512b64(buf);
  if (INTEGRITY) {
    if (got !== INTEGRITY) throw new Error(`INTEGRITY MISMATCH (Law L5 — refused)\n  expected ${INTEGRITY}\n  got      ${got}`);
    console.log("  ✓ tarball integrity verified (Law L5)");
  } else {
    console.log(`  (unpinned) integrity = "${got}"  ← paste into INTEGRITY and commit`);
  }

  // extract package/package/dist/front_end → VENDOR/front_end. The npm package roots everything under
  // "package/"; the built UI lives under "package/front_end". Use system tar (bsdtar/GNU tar, Win11+nix).
  mkdirSync(VENDOR, { recursive: true });
  const tgz = path.join(tmpdir(), `cdt-${VERSION}.tgz`);
  await writeFile(tgz, buf);
  console.log("· extracting front_end/ …");
  // --strip-components=1 drops the leading "package/"; extract only the front_end subtree.
  // --force-local + forward-slash archive path: GNU tar on Windows otherwise reads the "C:" drive colon
  // as a remote host. Extract from cwd=VENDOR (no -C) to dodge the same colon parse on the dest path.
  const tgzPosix = tgz.replace(/\\/g, "/");
  execFileSync("tar", ["--force-local", "-xzf", tgzPosix, "--strip-components=1", "package/front_end"], { cwd: VENDOR, stdio: "inherit" });
  await rm(tgz, { force: true });

  const ok = existsSync(FRONT_END);
  console.log(ok ? `\n  WITNESS-READY ✓  front_end → ${path.relative(path.resolve(HERE, ".."), FRONT_END)}` : "\n  FAILED — no front_end extracted");
  if (!ok) process.exit(1);
}

main().catch((e) => { console.error("vendor-chrome-devtools:", e.message); process.exit(1); });
