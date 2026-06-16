#!/usr/bin/env node
// commitlint.mjs — guard the history against non-Conventional-Commits, so the auto-generated
// changelog can never be silently corrupted. Reads commit SUBJECTS on stdin (one per line) and
// fails closed if any non-merge subject breaks the grammar. Pure Node, no deps.
//
//   git log --format=%s <base>..HEAD | node system/tools/commitlint.mjs
//
// Grammar (conventionalcommits.org): type(scope)!: description
const TYPES = ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"];
const RE = new RegExp(`^(${TYPES.join("|")})(\\([a-z0-9._\\-/ ]+\\))?!?: .{1,}$`);

let buf = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (d) => (buf += d));
process.stdin.on("end", () => {
  const subjects = buf.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  const bad = [];
  for (const s of subjects) {
    if (/^Merge /.test(s) || /^Revert "/.test(s)) continue;      // merges + git-revert are allowed
    if (!RE.test(s)) bad.push(s);
    else if (s.length > 100) bad.push(`${s}  (subject > 100 chars)`);
  }
  if (bad.length) {
    console.error(`commitlint: ✗ ${bad.length} commit(s) are not Conventional Commits:`);
    for (const b of bad) console.error("  - " + b);
    console.error(`\nExpected: <type>(optional-scope): description`);
    console.error(`Types: ${TYPES.join(", ")}.  Example: feat(gateway): add changelog page`);
    process.exit(1);
  }
  console.log(`commitlint: ✓ ${subjects.length} commit subject(s) conform to Conventional Commits`);
});
