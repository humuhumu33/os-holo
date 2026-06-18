#!/usr/bin/env node
// prune-dangling-closure.mjs — remove DANGLING entries from os/etc/os-closure.json: closure keys that
// are anchored (carry a κ) but whose bytes resolve NOWHERE (the file is absent from this image). A
// dangling pin can never be served (it 404s, never 409s) and the substrate witness counts it as an
// un-re-derivable object (Law L5). Pruning makes the closure HONEST: it pins only what it can serve.
//
// Resolution mirrors seal-substrate.mjs / holo-substrate-witness.mjs EXACTLY (FHS map → os-root →
// _shared→lib → orig → apps), so a key is pruned ONLY when every resolution path misses. root is left
// as-is (it is not a hash over the entry set — the maintenance tools reseal-drift/seal-substrate also
// leave it, and no witness re-derives it). A runaway guard aborts if the dangling set is implausibly
// large (a sign of a partial checkout, where you want to RESTORE files, not prune pins).
//
//   node tools/prune-dangling-closure.mjs            # report only (default, writes nothing)
//   node tools/prune-dangling-closure.mjs --write    # actually prune
import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OS2 = join(here, "../os");
const ORIG = process.env.HOLO_OS_DIR || join(here, "../os");
const APPS = process.env.HOLO_APPS_REPO || join(here, "../../../holo-apps");
const CLOSURE = join(OS2, "etc/os-closure.json");
const write = process.argv.includes("--write");
const GUARD = 20;   // abort if more than this many dangle — that is a missing-files problem, not a pin-hygiene one

const { fhsMap } = await import(pathToFileURL(join(OS2, "lib/holo-fhs-map.mjs")));

// EXACT mirror of seal-substrate.mjs bytesOf — a key resolves iff some path holds its bytes.
const resolves = (key) => {
  if (key.startsWith("apps/")) { const a = join(APPS, key); if (existsSync(a) && statSync(a).isFile()) return true; }
  const p = fhsMap(key); if (p) { const f = join(OS2, p); if (existsSync(f) && statSync(f).isFile()) return true; }
  const d = join(OS2, key); if (existsSync(d) && statSync(d).isFile()) return true;
  const m = key.match(/^_shared\/(.+)$/); if (m) { const l = join(OS2, "lib", m[1]); if (existsSync(l) && statSync(l).isFile()) return true; }
  const o = join(ORIG, key); if (existsSync(o) && statSync(o).isFile()) return true;
  return false;
};

const doc = JSON.parse(readFileSync(CLOSURE, "utf8"));
const closure = doc.closure || {};
const dangling = Object.keys(closure).filter((k) => closure[k] && typeof closure[k] === "object" && !resolves(k));

console.log(`${dangling.length} dangling closure ${dangling.length === 1 ? "entry" : "entries"} (anchored but unresolvable):`);
for (const k of dangling) console.log(`  ✕ ${k}`);

if (dangling.length > GUARD) { console.error(`\nABORT — ${dangling.length} > guard ${GUARD}. This looks like a partial checkout (restore the files), not pin hygiene. Nothing written.`); process.exit(2); }

if (!write) { console.log(`\n(report only — pass --write to prune) · ${Object.keys(closure).length} κ in the closure`); process.exit(dangling.length ? 1 : 0); }

for (const k of dangling) delete closure[k];
writeFileSync(CLOSURE, JSON.stringify(doc, null, 2) + "\n");
console.log(`\n✓ pruned ${dangling.length} · ${Object.keys(closure).length} κ remain in the closure`);
