// serve-codedesktop.local.mjs — local PREVIEW/verify server for Holo Code Desktop on this mirror tree.
// The shipped serve-apps.mjs points at an absent sibling root and does no _shared mapping; this one
// roots holo-apps (so /apps/* and the engine's ../code/*.mjs resolve) and rewrites any **/_shared/<x>
// → holo-os/system/os/usr/lib/holo/<x> — exactly the mapping the OS gateway/Service Worker performs in
// the canonical environment. Preview only; no caching, permissive CORS.
import http from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname } from "node:path";

const APPS = "C:/Users/pavel/Desktop/HOLOGRAM/holo-apps";
const SHARED = "C:/Users/pavel/Desktop/HOLOGRAM/holo-os/system/os/usr/lib/holo";
const PORT = Number(process.argv[2]) || 8799;
const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json",
  ".jsonld": "application/ld+json", ".css": "text/css", ".svg": "image/svg+xml", ".wasm": "application/wasm",
  ".ttf": "font/ttf", ".woff": "font/woff", ".woff2": "font/woff2", ".map": "application/json",
  ".png": "image/png", ".ico": "image/x-icon", ".txt": "text/plain",
};

http.createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") { res.writeHead(302, { location: "/apps/code-desktop/index.html" }); return res.end(); }
  if (p.endsWith("/")) p += "index.html";
  const i = p.lastIndexOf("/_shared/");               // _shared at ANY depth (apps/code/_shared, apps/code-desktop/_shared, …)
  let file;
  if (i !== -1) file = join(SHARED, p.slice(i + "/_shared/".length));
  else if (p.startsWith("/_shared/")) file = join(SHARED, p.slice("/_shared/".length));
  else file = join(APPS, p.replace(/^\//, ""));
  try {
    const data = await readFile(file);
    res.writeHead(200, { "content-type": MIME[extname(p)] || "application/octet-stream", "access-control-allow-origin": "*", "cache-control": "no-store" });
    res.end(data);
  } catch {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 " + p + "  →  " + file);
  }
}).listen(PORT, () => console.log(`Holo Code Desktop preview → http://localhost:${PORT}/  (root=${APPS}, _shared→${SHARED})`));
