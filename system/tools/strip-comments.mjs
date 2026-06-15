#!/usr/bin/env node
// strip-comments.mjs — remove HTML/CSS/JS comments from a single self-contained .html file.
// A real tokenizer: respects '…' "…" strings, `…${…}…` template literals (incl. nested templates),
// and /regex/ literals, so it never eats code that merely contains // or /* inside a string/regex.
//   node tools/strip-comments.mjs <file.html>
import { readFileSync, writeFileSync } from "node:fs";

const stripHtml = (s) => s.replace(/<!--[\s\S]*?-->/g, "");
function stripCss(src) {
  let out = "", i = 0; const n = src.length;
  while (i < n) {
    const c = src[i], c2 = src[i + 1];
    if (c === "/" && c2 === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? n : e + 2; continue; }
    if (c === '"' || c === "'") { const q = c; out += c; i++; while (i < n) { const d = src[i]; out += d; i++; if (d === "\\") { if (i < n) { out += src[i]; i++; } continue; } if (d === q) break; } continue; }
    out += c; i++;
  }
  return out;
}
function stripJs(src) {
  let out = "", i = 0, prev = ""; const n = src.length, tail = () => out.slice(-12);
  const regexCtx = () => prev === "" || "(,=:;{}[!&|?+-*%<>~^".includes(prev) || /(?:return|typeof|instanceof|in|of|new|delete|void|throw|case|do|else|yield|await)$/.test(tail());
  function str(q) { out += src[i++]; while (i < n) { const d = src[i++]; out += d; if (d === "\\") { if (i < n) out += src[i++]; continue; } if (d === q) break; } prev = q; }
  function regex() { out += src[i++]; let cls = false; while (i < n) { const d = src[i]; if (d === "\\") { out += src[i++]; if (i < n) out += src[i++]; continue; } if (d === "[") { cls = true; out += src[i++]; continue; } if (d === "]") { cls = false; out += src[i++]; continue; } if (d === "/" && !cls) { out += src[i++]; break; } if (d === "\n") break; out += src[i++]; } while (i < n && /[a-z]/i.test(src[i])) out += src[i++]; prev = "/"; }
  function expr() { let depth = 1; while (i < n && depth > 0) { const c = src[i], c2 = src[i + 1]; if (c === "/" && c2 === "/") { const e = src.indexOf("\n", i); i = e < 0 ? n : e; continue; } if (c === "/" && c2 === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? n : e + 2; continue; } if (c === "'" || c === '"') { str(c); continue; } if (c === "`") { tmpl(); continue; } if (c === "/" && regexCtx()) { regex(); continue; } if (c === "{") { depth++; out += c; prev = c; i++; continue; } if (c === "}") { depth--; out += c; i++; if (depth === 0) return; prev = c; continue; } out += c; if (!/\s/.test(c)) prev = c; i++; } }
  function tmpl() { out += src[i++]; while (i < n) { const d = src[i]; if (d === "\\") { out += src[i++]; if (i < n) out += src[i++]; continue; } if (d === "`") { out += src[i++]; break; } if (d === "$" && src[i + 1] === "{") { out += "${"; i += 2; expr(); continue; } out += src[i++]; } prev = "`"; }
  while (i < n) {
    const c = src[i], c2 = src[i + 1];
    if (c === "/" && c2 === "/") { const e = src.indexOf("\n", i); i = e < 0 ? n : e; continue; }
    if (c === "/" && c2 === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? n : e + 2; continue; }
    if (c === "'" || c === '"') { str(c); continue; }
    if (c === "`") { tmpl(); continue; }
    if (c === "/" && regexCtx()) { regex(); continue; }
    out += c; if (!/\s/.test(c)) prev = c; i++;
  }
  return out;
}

function transform(html) {
  let result = "", i = 0; const n = html.length, low = html.toLowerCase();
  while (i < n) {
    const sIdx = low.indexOf("<style", i), jIdx = low.indexOf("<script", i);
    let next = -1, kind = null;
    if (sIdx >= 0 && (jIdx < 0 || sIdx < jIdx)) { next = sIdx; kind = "style"; }
    else if (jIdx >= 0) { next = jIdx; kind = "script"; }
    if (next < 0) { result += stripHtml(html.slice(i)); break; }
    result += stripHtml(html.slice(i, next));
    const gt = html.indexOf(">", next), openTag = html.slice(next, gt + 1);
    const closeTag = kind === "style" ? "</style>" : "</script>", closeIdx = low.indexOf(closeTag, gt + 1);
    const inner = html.slice(gt + 1, closeIdx < 0 ? n : closeIdx);
    result += openTag + (kind === "style" ? stripCss(inner) : stripJs(inner)) + (closeIdx < 0 ? "" : closeTag);
    i = closeIdx < 0 ? n : closeIdx + closeTag.length;
  }
  return result.replace(/[ \t]+$/gm, "").replace(/\n{3,}/g, "\n\n");
}

const f = process.argv[2];
const before = readFileSync(f, "utf8");
const after = transform(before);
writeFileSync(f, after);
console.log(`✓ ${f}: ${before.length} → ${after.length} bytes (-${before.length - after.length})`);
