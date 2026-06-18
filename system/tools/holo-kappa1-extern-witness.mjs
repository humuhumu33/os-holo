#!/usr/bin/env node
// holo-kappa1-extern-witness.mjs — Phase 0a (Law L5 / conformance-audit KAPPA-1) witness: NO first-party
// app page may load EXECUTABLE CODE from a foreign origin. A cross-origin <script src> or ESM
// `import … from "https://…"` bypasses the κ-verifying delivery worker entirely (forge-sw/holo-fhs-sw
// only re-derive SAME-ORIGIN closure bytes), so the byte is run with ZERO re-derivation — the exact
// hole KAPPA-1 names (plasma, jupyter console, …). THE FIX: vendor the lib locally, pin it in the app
// lock, serve it verified. SRI is the minimum bar but does NOT satisfy L5 — re-derivation is required.
//
// Scope: first-party, hand-authored pages. Third-party MINIFIED build output (webpack bundles under
// /extensions/ or /build/, *.min.js) is a vendored object whose external refs need a REBUILD, not a
// hand edit — reported separately, not failed (mirrors the substrate witness's vendored-bundle stance).
//
//   node tools/holo-kappa1-extern-witness.mjs [--all]   # --all also lists code-load offenders inside bundles
import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative, extname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const APPS = process.env.HOLO_APPS_REPO || join(here, "../../../holo-apps");
const ROOT = join(APPS, "apps");
const showAll = process.argv.includes("--all");

// a path is THIRD-PARTY BUILD OUTPUT (not hand-authored) → reported, not failed
const isBundle = (rel) => /(^|\/)(extensions|build|dist|node_modules)\//.test(rel) || /\.min\.(js|mjs)$/.test(rel) || /\.[0-9a-f]{8,}\.js$/.test(rel);
// minified line check: hand-authored source has reasonable line lengths
const looksMinified = (txt) => { const n = txt.length, lines = txt.split("\n").length; return n / Math.max(1, lines) > 400; };

// external CODE load patterns (executable): cross-origin <script src>, ESM import/import() from http(s)
const reScript = /<script\b[^>]*\bsrc\s*=\s*["']https?:\/\/[^"']+/gi;
const reImport = /\bimport\s*(?:[^;'"]*?\bfrom\s*)?["']https?:\/\/[^"']+/gi;
const reDynImport = /\bimport\s*\(\s*["']https?:\/\/[^"']+/gi;
// external STYLE (lower severity — no code execution, but still an unverified foreign resource)
const reLink = /<link\b[^>]*\bhref\s*=\s*["']https?:\/\/[^"']+[^>]*\brel\s*=\s*["']stylesheet|<link\b[^>]*\brel\s*=\s*["']stylesheet["'][^>]*\bhref\s*=\s*["']https?:\/\//gi;

const walk = (dir, out = []) => { for (const n of readdirSync(dir)) { const p = join(dir, n); const s = statSync(p); s.isDirectory() ? (n === "node_modules" ? null : walk(p, out)) : out.push(p); } return out; };

const codeOffenders = {};   // app → [{file, kind, url}]
const styleOffenders = {};  // app → [{file, url}]
const bundleHits = {};      // app → count (reported only)

for (const app of readdirSync(ROOT)) {
  if (app === "tauri") continue;                                   // built mirror, not a source app
  const dir = join(ROOT, app); if (!statSync(dir).isFile() === false && !existsSync(dir)) continue;
  if (!statSync(dir).isDirectory()) continue;
  for (const abs of walk(dir)) {
    const rel = relative(ROOT, abs).split("\\").join("/");
    const ext = extname(abs).toLowerCase();
    if (![".html", ".htm", ".js", ".mjs"].includes(ext)) continue;
    let txt; try { txt = readFileSync(abs, "utf8"); } catch { continue; }
    const bundle = isBundle(rel) || looksMinified(txt);
    const code = [
      ...[...txt.matchAll(reScript)].map((m) => ({ kind: "script-src", url: m[0].match(/https?:\/\/[^"']+/)[0] })),
      ...[...txt.matchAll(reImport)].map((m) => ({ kind: "esm-import", url: m[0].match(/https?:\/\/[^"']+/)[0] })),
      ...[...txt.matchAll(reDynImport)].map((m) => ({ kind: "dyn-import", url: m[0].match(/https?:\/\/[^"']+/)[0] })),
    ];
    if (!code.length) { continue; }
    if (bundle) { bundleHits[app] = (bundleHits[app] || 0) + code.length; continue; }
    (codeOffenders[app] ||= []).push(...code.map((c) => ({ file: rel, ...c })));
  }
  // styles (HTML only, first-party)
  for (const abs of walk(dir)) {
    const rel = relative(ROOT, abs).split("\\").join("/");
    if (![".html", ".htm"].includes(extname(abs).toLowerCase())) continue;
    if (isBundle(rel)) continue;
    let txt; try { txt = readFileSync(abs, "utf8"); } catch { continue; }
    for (const m of txt.matchAll(reLink)) { const u = m[0].match(/https?:\/\/[^"']+/); if (u) (styleOffenders[app] ||= []).push({ file: rel, url: u[0] }); }
  }
}

const codeApps = Object.keys(codeOffenders).sort();
const total = codeApps.reduce((s, a) => s + codeOffenders[a].length, 0);
console.log(`KAPPA-1 — first-party external CODE loads (Law L5 violations: run unverified, cross-origin):\n`);
if (!codeApps.length) console.log("  (none)");
for (const a of codeApps) { console.log(`  ✗ ${a}  (${codeOffenders[a].length})`); for (const o of codeOffenders[a]) console.log(`      ${o.kind}  ${o.file}  →  ${o.url.slice(0, 70)}`); }

const styleApps = Object.keys(styleOffenders).sort();
if (styleApps.length) { console.log(`\n  ⚠ first-party external STYLESHEETS (unverified foreign resource, no code exec):`); for (const a of styleApps) for (const o of styleOffenders[a]) console.log(`      ${a}: ${o.file} → ${o.url.slice(0, 70)}`); }

const bundleApps = Object.keys(bundleHits).sort();
if (bundleApps.length) console.log(`\n  ℹ third-party MINIFIED BUNDLES with embedded external refs (need a rebuild, not a hand edit): ${bundleApps.map((a) => `${a}(${bundleHits[a]})`).join(", ")}`);
if (showAll && bundleApps.length) console.log("     (--all: these are vendored build output; de-CDN-ing them means rebuilding the upstream bundle)");

console.log(`\n${total === 0 ? "GREEN" : "RED"} — ${total} first-party external code load(s) across ${codeApps.length} app(s)`);
process.exit(total === 0 ? 0 : 1);
