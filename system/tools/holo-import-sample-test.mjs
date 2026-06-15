#!/usr/bin/env node
// holo-import-sample-test.mjs — prove the Holo Import pipeline (ADR-0092) "just works" on a REAL GitHub
// repo, end-to-end, over the network. Mirrors the shell's ghFetchRepo (the governed ingest boundary) and
// runs the SAME importRepo the Import button calls. Not a gate witness (needs network, like the bridge) —
// a manual proof:   node tools/holo-import-sample-test.mjs [owner/repo]
import { importRepo, parseRepoRef } from "../os/usr/lib/holo/holo-import.mjs";
import { sha256hex } from "../os/usr/lib/holo/holo-blocks-repo.mjs";

const SAMPLE = process.argv[2] || "octocat/Spoon-Knife";   // GitHub's canonical tiny static repo (index.html)
const GH = { headers: { "User-Agent": "holo-import-test", "Accept": "application/vnd.github+json" } };

async function ghFetchRepo({ owner, repo, ref }) {
  const api = "https://api.github.com/repos/" + owner + "/" + repo;
  let branch = ref;
  if (!branch) { const r = await fetch(api, GH); if (!r.ok) throw new Error("repo not found (" + r.status + ")"); branch = (await r.json()).default_branch; }
  const cr = await fetch(api + "/commits/" + encodeURIComponent(branch), GH); if (!cr.ok) throw new Error("ref not found"); const commit = (await cr.json()).sha;
  const tr = await fetch(api + "/git/trees/" + commit + "?recursive=1", GH); const tree = ((await tr.json()).tree) || [];
  const paths = tree.filter((t) => t.type === "blob").map((t) => t.path);
  const files = new Map(); paths.forEach((p) => files.set(p, {}));
  const want = paths.filter((p) => /(^|\/)package\.json$/.test(p) || /\.(html|css|js|mjs)$/i.test(p)).slice(0, 60);
  await Promise.all(want.map(async (p) => { try { const raw = await fetch("https://raw.githubusercontent.com/" + owner + "/" + repo + "/" + commit + "/" + p); if (raw.ok) files.set(p, { text: await raw.text() }); } catch (e) {} }));
  return { commit, files };
}

const ok = (n, c) => console.log(`  ${c ? "✓" : "✗"}  ${n}`) || c;
console.log(`Holo Import — real-repo test · ${SAMPLE}\n`);
const ref = parseRepoRef("https://github.com/" + SAMPLE);
let pass = ok("parseRepoRef recognizes the GitHub URL", !!ref && ref.owner && ref.repo);

const r = await importRepo({ input: "https://github.com/" + SAMPLE, fetchRepo: ghFetchRepo, hash: sha256hex });
pass = ok("import returned ok", r.ok === true) && pass;
pass = ok("classified + runnable serverless", r.runnable === true) && pass;
pass = ok("app sealed to a did:holo κ", !!r.app && /^did:holo:sha256:[0-9a-f]{64}$/.test(r.app.id)) && pass;
pass = ok("html is a real, non-trivial document", typeof r.html === "string" && r.html.length > 200 && /<html|<!doctype|<body/i.test(r.html)) && pass;
pass = ok("import receipt commits to the app κ (PROV-O provenance)", !!r.receipt && JSON.stringify(r.receipt).includes(r.app.id)) && pass;
pass = ok("honest provenance: selfContained flag + externalRefs reported", typeof r.selfContained === "boolean" && Array.isArray(r.externalRefs)) && pass;

console.log(`\n  repo commit : ${r.commit}`);
console.log(`  class       : ${r.classification && r.classification.class} (${r.classification && r.classification.path})`);
console.log(`  app κ       : ${r.app && r.app.id}`);
console.log(`  html bytes  : ${r.html ? r.html.length : 0}`);
console.log(`  selfContained: ${r.selfContained}  (true = 100% serverless, nothing fetched at runtime)`);
console.log(`  externalRefs : ${(r.externalRefs || []).length}${(r.externalRefs || []).length ? " → " + r.externalRefs.slice(0, 6).map((x) => x.ref || x).join(", ") : ""}`);
console.log(`\n  ${pass ? "IMPORT WORKS ✓ — a real GitHub repo → a self-verifying, serverless holo app κ" : "FAILED"}`);
process.exit(pass ? 0 : 1);
