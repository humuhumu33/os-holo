#!/usr/bin/env node
// strip-emdash.mjs — remove the em dash (—, U+2014) from USER-FACING text, leaving CODE COMMENTS intact.
// "Delete it": a spaced dash " — " closes to a single space; otherwise the dash is closed up. A small
// state machine skips JS line (//) + block (/* */) comments and HTML (<!-- -->) comments, and ignores
// "//" inside URLs (preceded by ":") so holo:// and https:// don't read as comments. JSON has no
// comments, so every dash in data (titles, descriptions) is treated as user-facing.
//   node tools/strip-emdash.mjs <file> [file...]
import { readFileSync, writeFileSync } from "node:fs";

function strip(src) {
  let out = "", i = 0, st = "N", changed = 0;       // N=code/text · L=//line · B=/*block*/ · H=<!--html-->
  const n = src.length, prev = () => (out.length ? out[out.length - 1] : "");
  while (i < n) {
    const c = src[i], c2 = src[i + 1];
    if (st === "N") {
      if (c === "<" && src.startsWith("<!--", i)) { st = "H"; out += "<!--"; i += 4; continue; }
      if (c === "/" && c2 === "*") { st = "B"; out += "/*"; i += 2; continue; }
      if (c === "/" && c2 === "/" && prev() !== ":") { st = "L"; out += "//"; i += 2; continue; }
      if (c === "—") { changed++; if (prev() === " " && src[i + 1] === " ") { i += 2; } else { i += 1; } continue; }
      out += c; i++; continue;
    }
    if (st === "L") { out += c; if (c === "\n") st = "N"; i++; continue; }
    if (st === "B") { if (c === "*" && c2 === "/") { out += "*/"; st = "N"; i += 2; continue; } out += c; i++; continue; }
    if (st === "H") { if (c === "-" && src.startsWith("-->", i)) { out += "-->"; st = "N"; i += 3; continue; } out += c; i++; continue; }
  }
  return { out, changed };
}

const files = process.argv.slice(2);
let total = 0, touched = 0;
for (const f of files) {
  let src; try { src = readFileSync(f, "utf8"); } catch { continue; }
  if (!src.includes("—")) continue;
  const { out, changed } = strip(src);
  if (changed) { writeFileSync(f, out); total += changed; touched++; console.log(`  ${String(changed).padStart(4)}  ${f}`); }
}
console.log(`✓ removed ${total} user-facing em dash(es) across ${touched} file(s)`);
