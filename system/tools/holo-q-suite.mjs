// holo-q-suite.mjs — the ONE #holo-q conformance runner. Executes the whole Holo Q witness stack — the
// spine, the unified Q surface, ambient/OS-aware/omnipotent routing, the cross-frame bridge, and the
// warm-κ surface cache — aggregates the results, and emits a single `holo-q.result.json` (EARL). This is
// the runnable core of the #holo-q conformance row (the non-idempotent gate + cross-repo os-closure
// re-lock stay batched, deliberately). One command to prove all of Q.
//
//   node tools/holo-q-suite.mjs
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SUITE = [
  { id: "spine",   file: "holo-q-spine-witness.mjs",   what: "Create build rides trinity.create → mux → fabric κ-memo (O(1) repeat)" },
  { id: "unified", file: "holo-q-unified-witness.mjs", what: "Q — one verb (create·ask·act) + fail-closed governed agent door" },
  { id: "ambient", file: "holo-q-ambient-witness.mjs", what: "context-aware · summon · OS-wide scope · omnipotent intent · capabilities" },
  { id: "bridge",  file: "holo-q-bridge-witness.mjs",  what: "Q reachable inside a sandboxed app, governed, the app holds nothing" },
  { id: "surface", file: "holo-q-surface-witness.mjs", what: "warm-κ surface cache — O(1) re-open · warm-on-close · LRU-bounded" },
];

const rows = []; let totalPass = 0, totalFail = 0;
for (const w of SUITE) {
  let out = "", code = 0;
  try { out = execFileSync(process.execPath, [join(here, w.file)], { encoding: "utf8" }); }
  catch (e) { out = (e.stdout || "") + "\n" + (e.stderr || ""); code = e.status == null ? 1 : e.status; }
  const m = out.match(/[—-]\s+(\d+)\s+ok,\s+(\d+)\s+fail/);
  const pass = m ? parseInt(m[1], 10) : 0;
  const fail = m ? parseInt(m[2], 10) : (code ? 1 : 0);
  const ok = code === 0 && fail === 0 && pass > 0;
  totalPass += pass; totalFail += fail;
  rows.push({ id: w.id, what: w.what, pass, fail, ok });
  console.log((ok ? "  ok  " : " FAIL ") + w.id.padEnd(8) + " " + String(pass).padStart(2) + " checks" + (fail ? " · " + fail + " FAIL" : "") + "  · " + w.what);
}

const allGreen = totalFail === 0 && rows.every((r) => r.ok);
const result = {
  "@type": "earl:TestResult",
  subject: "#holo-q — the Holo Q stack conformance suite (ADR-0091 + the Mixture-of-Specialists spine)",
  witnessed: allGreen, suites: rows.length, checks: totalPass, failed: totalFail, rows,
};
writeFileSync(join(here, "holo-q.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (allGreen ? "PASS" : "FAIL") + " — #holo-q: " + rows.length + " suites · " + totalPass + " checks · " + totalFail + " fail");
process.exit(allGreen ? 0 : 1);
