// holo-stream-witness.mjs — proves Google-on-κ Stage 3: STREAMING render. answer() emits progressive
// stages (tier → each verified source as it seals → composed page), so the first credible result is
// delivered BEFORE the rest and BEFORE the composed page — the lever that makes the experience feel instant.
// Claims: stages arrive ordered; one "source" stage per sealed source; the first "source" is emitted before
// "composed"; and (with a per-source seal delay) the first source's timestamp precedes the composed one.
import { createSemantic } from "../os/sbin/holo-semantic.mjs";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };
const delay = (ms) => new Promise((r) => setTimeout(r, ms));

// a stub discovery with a per-source SEAL DELAY so streaming timing is observable + deterministic. Offline
// adapter only → no escalation; discover returns the same candidates for every probe.
function stubDiscovery(cands, sealDelayMs) {
  return {
    adapters: [{ id: "stub", offline: true }],
    async discover() { return cands.map((c) => ({ ...c, via: ["bm25"] })); },
    async sealCandidate(c) { await delay(sealDelayMs); return { ok: true, cid: c.cid, entityId: c.entityId, title: c.title, source: "stub", ref: "ipfs://" + c.cid, blocks: new Map([[c.cid, new TextEncoder().encode(c.title)]]), extract: c.title + " extract.", text: c.title + "\n" + c.title + " extract.", authority: 0 }; },
  };
}

async function main() {
  const cands = [
    { entityId: "did:e:a", cid: "bafyA".padEnd(20, "a"), title: "Alpha" },
    { entityId: "did:e:b", cid: "bafyB".padEnd(20, "b"), title: "Beta" },
    { entityId: "did:e:c", cid: "bafyC".padEnd(20, "c"), title: "Gamma" },
  ];
  const sem = createSemantic({ discovery: stubDiscovery(cands, 40) });

  const stages = [];
  const r = await sem.answer("alpha beta gamma", { topK: 3, onStage: (s) => stages.push(s) });
  ok("answer completed with a composed page", r.ok && !!r.cid, r.cid && r.cid.slice(0, 14) + "…");

  const phases = stages.map((s) => s.phase);
  ok("the first stage is the tier decision", phases[0] === "tier", phases.join("→"));
  ok("the last stage is the composed page", phases[phases.length - 1] === "composed");
  const sourceStages = stages.filter((s) => s.phase === "source");
  ok("one 'source' stage was emitted per sealed source", sourceStages.length === 3, sourceStages.length + " source stages");

  const firstSourceIdx = phases.indexOf("source");
  const composedIdx = phases.indexOf("composed");
  ok("the FIRST source is emitted before the composed page (progressive)", firstSourceIdx >= 0 && firstSourceIdx < composedIdx);

  const firstSourceMs = stages[firstSourceIdx].ms;
  const composedMs = stages[composedIdx].ms;
  ok("the first source arrives EARLIER than the composed page (timing)", firstSourceMs < composedMs, `first ${firstSourceMs}ms < composed ${composedMs}ms`);
  ok("each source carries verification + a title (paintable immediately)", sourceStages.every((s) => s.source && s.source.verified === true && s.source.title));

  const result = { "@type": "holo:WitnessResult", witness: "holo-stream", step: "G3",
    phases, firstSourceMs, composedMs, pass, fail, total: pass + fail, ok: fail === 0, checks };
  writeFileSync(join(here, "holo-stream-witness.result.json"), JSON.stringify(result, null, 2));
  console.log(`\n${fail === 0 ? "PASS" : "FAIL"}  ${pass}/${pass + fail}  ·  streaming: ${phases.join(" → ")}`);
  if (fail) process.exit(1);
}
main().catch((e) => { console.error("witness threw:", e); process.exit(1); });
