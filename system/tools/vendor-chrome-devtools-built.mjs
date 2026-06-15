// vendor-chrome-devtools-built.mjs — vendor the BUILT (compiled) Chrome DevTools front_end (ADR-0095, Bet A
// completion). npm ships TypeScript SOURCE, which a browser can't run; the COMPILED bundle ships inside
// Chrome and is served, complete + static, over remote debugging at http://<host>/devtools/. This crawler
// BFS-follows the real ES-module + CSS graph from the standalone entrypoint and writes every same-origin
// file UNMODIFIED into system/os/usr/lib/holo/devtools/vendor/front_end/ — so the OS serves the real,
// feature-complete F12 UI 100% serverless (devtools-frontend is BSD-3-Clause; vendored, not reimplemented).
//
// Usage (with a Chrome already serving a debug port — see the launch step in the task):
//   DT_BASE=http://localhost:9222/devtools/ node tools/vendor-chrome-devtools-built.mjs
//
// Honest scope: the crawl follows STATIC + literal-dynamic imports, `new URL(...,import.meta.url)` worker/
// asset refs, and CSS @import/url(). Computed/never-referenced lazy chunks (if any) are not discoverable
// statically; they are reported as runtime 404s when first hit and can be re-crawled. Every byte is what
// Chrome served (Law L5: pin by content after vendoring).

import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../os/usr/lib/holo/devtools/vendor/front_end");
const BASE = (process.env.DT_BASE || "http://localhost:9222/devtools/").replace(/\/?$/, "/");
const BASE_URL = new URL(BASE);
const CAP = Number(process.env.DT_CAP || 6000);

const SEEDS = ["inspector.html", "entrypoints/inspector/inspector.js",
  "application_tokens.css", "design_system_tokens.css"];

// specifier extractors (JS + CSS). Conservative: literals only; resolved against the file's own URL.
// NOTE: the served bundle is MINIFIED (`}from"x"` — no space) and uses BACKSLASH separators on Windows
// (`./..\\..\\core\\common\\common.js`). So match `from`/`import` directly adjacent to the quote, and
// normalize `\` → `/` before resolving (done in enqueue).
const JS_PATTERNS = [
  /\bfrom\s*["']([^"']+)["']/g,                  // import … from "x"  /  export … from "x"  (minified-safe)
  /\bimport\s*["']([^"']+)["']/g,                // side-effect import "x"
  /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g,      // dynamic import("x")
  /new\s+URL\(\s*["']([^"']+)["']\s*,\s*import\.meta\.url\s*\)/g, // worker/asset URL
];
const CSS_PATTERNS = [
  /@import\s+(?:url\(\s*)?["']?([^"')]+)["']?\)?/g,
  /url\(\s*["']?([^"')\s]+)["']?\s*\)/g,
];
const HTML_PATTERNS = [
  /(?:src|href)\s*=\s*["']([^"']+)["']/g,
];

const extOf = (p) => (p.split("?")[0].split("#")[0].match(/\.([a-z0-9]+)$/i) || [, ""])[1].toLowerCase();
const ASSET_EXT = /\.(js|mjs|css|json|svg|wasm|map|html|png|jpg|jpeg|gif|woff2?|ttf|avif|webp)(\?|#|$)/i;
// Only follow specifiers that LOOK like a real relative/absolute file path with a known asset extension —
// the served bundle is minified, so a broad `from"…"` match otherwise catches code fragments as fake paths.
const isFollowable = (spec) => spec && /^[./]/.test(spec) && !/^(data:|blob:|https?:|wss?:|chrome:|devtools:|#)/i.test(spec) && ASSET_EXT.test(spec);

async function main() {
  console.log(`· crawling built devtools from ${BASE}`);
  // fail fast if the debug server isn't up
  try { const t = await fetch(BASE + "inspector.html", { method: "GET" }); if (!t.ok) throw new Error("HTTP " + t.status); }
  catch (e) { console.error(`  no devtools server at ${BASE} (${e.message}). Launch Chrome with --remote-debugging-port first.`); process.exit(1); }

  const seen = new Set(); const queue = [...SEEDS]; const errors = []; const external = new Set();
  let written = 0;

  const enqueue = (specRaw, fromRel) => {
    const spec = String(specRaw).replace(/\\+/g, "/");  // Windows-served bundles use (escaped) backslash separators → collapse runs to one slash
    if (!isFollowable(spec)) { if (/^https?:/i.test(spec)) external.add(spec); return; }
    let abs;
    try { abs = new URL(spec, BASE + fromRel); } catch (e) { return; }
    if (abs.origin !== BASE_URL.origin || !abs.pathname.startsWith(BASE_URL.pathname)) { external.add(abs.href); return; }
    const rel = decodeURIComponent(abs.pathname.slice(BASE_URL.pathname.length)).replace(/^\/+/, "");
    if (rel && !seen.has(rel)) queue.push(rel);
  };

  while (queue.length && seen.size < CAP) {
    const rel = queue.shift();
    if (!rel || seen.has(rel)) continue;
    seen.add(rel);
    let res;
    try { res = await fetch(BASE + rel); } catch (e) { errors.push(`${rel} — ${e.message}`); continue; }
    if (!res.ok) { errors.push(`${rel} — HTTP ${res.status}`); continue; }
    const ext = extOf(rel);
    const isText = /^(js|mjs|css|html|json|svg|map)$/.test(ext) || (res.headers.get("content-type") || "").match(/text|javascript|json|svg/);
    const buf = Buffer.from(await res.arrayBuffer());
    const dst = path.join(ROOT, rel);
    try { await mkdir(path.dirname(dst), { recursive: true }); await writeFile(dst, buf); written++; }
    catch (e) { errors.push(`${rel} — write ${e.code || e.message}`); continue; }
    if (written % 200 === 0) console.log(`  … ${written} files`);

    if (isText) {
      const text = buf.toString("utf8");
      const pats = ext === "css" ? CSS_PATTERNS : ext === "html" ? [...HTML_PATTERNS] : JS_PATTERNS;
      if (ext === "html") { for (const p of CSS_PATTERNS) pats.push(p); }   // html may inline url()
      for (const re of pats) { re.lastIndex = 0; let m; while ((m = re.exec(text))) enqueue(m[1], rel); }
    }
  }

  console.log(`\n  files written : ${written}`);
  console.log(`  unique paths  : ${seen.size}${seen.size >= CAP ? " (HIT CAP — raise DT_CAP)" : ""}`);
  console.log(`  fetch errors  : ${errors.length}`);
  if (errors.length) console.log("   - " + errors.slice(0, 20).join("\n   - "));
  if (external.size) console.log(`  external refs (NOT vendored, expected 0 for serverless): ${external.size}\n   - ` + [...external].slice(0, 10).join("\n   - "));
  const entryOk = existsSync(path.join(ROOT, "entrypoints/inspector/inspector.js"));
  console.log(`\n  ${entryOk ? "ENTRY PRESENT ✓ — vendor/front_end/entrypoints/inspector/inspector.js" : "FAILED — entry missing"}`);
  process.exit(entryOk ? 0 : 1);
}

main().catch((e) => { console.error("vendor-built:", e.message); process.exit(1); });
