#!/usr/bin/env node
// holo-hub-stream-serve.mjs — open the Holo Hub streaming showcase INTERACTIVELY in your own browser
// (full H.264/4K, real hardware decode). Serves the page + the OpfsKappaStore module + the real 4K Big
// Buck Bunny CMAF asset on one origin, opens your default browser, and stays running until Ctrl+C.
// Click "Stream the κ-object" → watch it verify + decode 4K → "Pin-to-own" → "Cut the origin" and it
// keeps playing from the local OPFS κ-store.
//   node tools/holo-hub-stream-serve.mjs            (or: npm run hub-stream-serve)
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const HUB = join(here, "../../../holo-apps/apps/hub");
const MOD = join(here, "../os/usr/lib/holo/holo-opfs-kappastore.mjs");
const APPS = join(here, "../../../holo-apps/apps");
const VID = join(here, "../../../holo-apps/apps/video/video/dev");
const ASSETS = { asset: join(VID, "dev-bbb-2160-hq"), asset2: join(VID, "dev-bbb-2160"), cloud: join(VID, "dev-bbb-cloud"), audio: join(VID, "dev-bbb-audio") };
const TYPES = { ".html": "text/html", ".mjs": "text/javascript", ".js": "text/javascript", ".json": "application/json", ".jsonld": "application/ld+json", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json", ".mp4": "video/mp4", ".m4s": "video/mp4" };

const server = createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]);
  let file = null;
  if (u === "/" || u === "/index.html") file = join(HUB, "catalog-stream.html");   // Phase 2a catalog
  else if (u === "/p1") file = join(HUB, "stream-showcase.html");                   // Phase 1 single tile
  else if (u === "/3d") file = join(HUB, "3d-stream.html");                          // Phase 2b — κ-object → 3D
  else if (u === "/audio") file = join(HUB, "audio-stream.html");                    // Phase 2b — lossless spatial audio
  else if (u === "/holo-opfs-kappastore.mjs") file = MOD;
  else if (u === "/apps/hub/holo-opfs-kappastore.mjs") file = MOD;                  // substrate module at the app path the embed imports
  else if (u.startsWith("/apps/")) file = join(APPS, u.slice("/apps/".length));     // the REAL wired Hub + apps tree
  else { const m = u.match(/^\/(asset2|asset|cloud|audio)\/(.+)$/); if (m) file = join(ASSETS[m[1]], m[2]); }
  if (!file) { res.writeHead(404); return res.end("not found"); }
  try { const body = readFileSync(file); const ext = file.slice(file.lastIndexOf(".")); res.writeHead(200, { "content-type": TYPES[ext] || "application/octet-stream", "cache-control": "no-store" }); res.end(body); }
  catch (e) { res.writeHead(404); res.end(String(e)); }
});

function listen(port) { return new Promise((resolve, reject) => { server.once("error", reject); server.listen(port, "127.0.0.1", () => resolve(server.address().port)); }); }
let port; try { port = await listen(8787); } catch { server.removeAllListeners("error"); port = await listen(0); }
const url = `http://127.0.0.1:${port}/`;

console.log(`\n  Holo Hub — κ-streaming — interactive\n  ${url}apps/hub/index.html   ← the REAL Hub (click the "κ-stream · verified" listing → it streams in Hub's player)\n  ${url} catalog · ${url}p1 single tile · ${url}3d κ→3D · ${url}audio lossless-spatial\n\n  Catalog: click a tile to stream (4K, verified) · "shared with you" → DEDUP-INSTANT (0 network) · ⓘ show-me-the-κ · Cut the origin keeps it playing.\n  3D: the 4K frame as a κ-point-cloud — each chunk verified before it renders; drag to orbit.\n  Audio: lossless FLAC κ-object, verified per-chunk, decoded, HRTF-spatial — Play with headphones (the sound orbits your head).\n  Open in Chrome or Edge for full fidelity. Ctrl+C to stop.\n`);

// open the default browser at the REAL wired Hub (best-effort, per platform)
const openUrl = url + "apps/hub/index.html";
try {
  const p = process.platform;
  if (p === "win32") spawn("cmd", ["/c", "start", "", openUrl], { detached: true, stdio: "ignore" }).unref();
  else if (p === "darwin") spawn("open", [openUrl], { detached: true, stdio: "ignore" }).unref();
  else spawn("xdg-open", [openUrl], { detached: true, stdio: "ignore" }).unref();
} catch { /* just use the printed URL */ }
