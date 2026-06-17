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
const PAGE = join(here, "../../../holo-apps/apps/hub/stream-showcase.html");
const MOD = join(here, "../os/usr/lib/holo/holo-opfs-kappastore.mjs");
const ASSET = join(here, "../../../holo-apps/apps/video/video/dev/dev-bbb-2160");
const TYPES = { ".html": "text/html", ".mjs": "text/javascript", ".json": "application/json", ".mp4": "video/mp4", ".m4s": "video/mp4" };

const server = createServer((req, res) => {
  const u = decodeURIComponent(req.url.split("?")[0]);
  let file = null;
  if (u === "/" || u === "/index.html") file = PAGE;
  else if (u === "/holo-opfs-kappastore.mjs") file = MOD;
  else if (u.startsWith("/asset/")) file = join(ASSET, u.slice("/asset/".length));
  if (!file) { res.writeHead(404); return res.end("not found"); }
  try { const body = readFileSync(file); const ext = file.slice(file.lastIndexOf(".")); res.writeHead(200, { "content-type": TYPES[ext] || "application/octet-stream", "cache-control": "no-store" }); res.end(body); }
  catch (e) { res.writeHead(404); res.end(String(e)); }
});

function listen(port) { return new Promise((resolve, reject) => { server.once("error", reject); server.listen(port, "127.0.0.1", () => resolve(server.address().port)); }); }
let port; try { port = await listen(8787); } catch { server.removeAllListeners("error"); port = await listen(0); }
const url = `http://127.0.0.1:${port}/`;

console.log(`\n  Holo Hub streaming showcase — interactive\n  ${url}\n\n  Stream the κ-object → verify + decode 4K → Pin-to-own → Cut the origin (keeps playing from the κ-store).\n  Open in Chrome or Edge for full H.264/4K. Ctrl+C to stop.\n`);

// open the default browser (best-effort, per platform)
try {
  const p = process.platform;
  if (p === "win32") spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" }).unref();
  else if (p === "darwin") spawn("open", [url], { detached: true, stdio: "ignore" }).unref();
  else spawn("xdg-open", [url], { detached: true, stdio: "ignore" }).unref();
} catch { /* just use the printed URL */ }
