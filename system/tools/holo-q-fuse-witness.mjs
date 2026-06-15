// holo-q-fuse-witness.mjs — proves Q.fuse (ADR-0098): a serverless COMPOUND model on the κ substrate.
// Panel (N small specialists, parallel) → judge (compare) → synthesize (one new answer) → ONE sealed,
// re-derivable holoq:FusionReceipt. The load-bearing claims: the panel runs in parallel and each leg
// seals to a κ; an EXACT repeat fusion is O(1) (zero models run); a NEAR-repeat (swap one member)
// re-runs ONLY the changed leg + judge + synthesis (the two unchanged legs are cache hits); the
// FusionReceipt re-derives and a tampered byte breaks it (Law L5); a <2-member panel is refused.
import { createFabric } from "../os/usr/lib/holo/q/holo-q-fabric.js";
import { createFuse, buildJudgePrompt, buildSynthPrompt, verifyReceipt, describeFuse } from "../os/usr/lib/holo/q/holo-q-fuse.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

// ── fake specialists: distinct "minds" that each answer in their own voice. Each counts its generations
//    so we can prove the κ-memo skips recompute. A generative provider = { id, generate }, the same
//    shape the mux binds and the fabric drives (holo-q-fabric.js). ──
const gens = {};
const mind = (id, voice) => ({ id, generate: async function* (prompt) { gens[id] = (gens[id] || 0) + 1; yield { delta: voice(prompt) }; } });
// answers vary by member (diversity); judge/synth echo a deterministic transform so output is stable.
const alpha = mind("alpha-360m", (p) => "ALPHA says: " + p.split("\n")[0].slice(0, 24));
const beta  = mind("beta-coder-1_5b", (p) => "BETA reasons: " + p.split("\n")[0].slice(0, 24));
const gamma = mind("gamma-0_5b", (p) => "GAMMA notes: " + p.split("\n")[0].slice(0, 24));
const judge = mind("judge-coder-1_5b", (p) => "JUDGE: consensus on the topic; one contradiction; no blind spots. " + (p.includes("ALPHA") ? "saw-panel" : ""));
// the synth's output DEPENDS on the panel it saw (GAMMA vs DELTA) — so a different panel → different
// synthesis bytes → a different content κ (whereas an identical panel dedups to the same κ, Law L3).
const synth = mind("synth-brain", (p) => "FINAL[" + (p.includes("DELTA") ? "D" : p.includes("GAMMA") ? "G" : "?") + "]: " + (p.includes("JUDGE") ? "synthesised-from-panel-and-judge" : "no-judge"));

const fabric = createFabric();
const fuse = createFuse({ fabric, panel: [alpha, beta, gamma], judge, synth });

// ── W0: honest contract + refusal of a degenerate panel ──
const d = describeFuse();
ok("W0 describeFuse is honest (not Fable-5)", /Fable-5 in a tab/i.test(d.honest) && /\bnot\b/i.test(d.honest), d.honest.slice(0, 48));
const tooSmall = await fuse.fuse("anything", { panel: [alpha] });
ok("W0 a <2-member panel is refused (diversity is the point)", tooSmall.ok === false && /≥2/.test(tooSmall.reason || ""), tooSmall.reason);

// ── W1: the pipeline runs — panel (N, parallel) → judge → synth, each sealed to a κ ──
const Q = "What is the best way to cache a fusion?";
const r1 = await fuse.fuse(Q);
ok("W1 fusion ok", r1.ok === true);
ok("W1 panel had all 3 members", r1.panel.length === 3, "panel=" + r1.panel.map((p) => p.id).join(","));
ok("W1 every panel leg sealed to a κ", r1.panel.every((p) => typeof p.kappa === "string" && p.kappa.length > 0));
ok("W1 panel κs are DISTINCT per member (diversity preserved)", new Set(r1.panel.map((p) => p.kappa)).size === 3);
ok("W1 judge ran over the panel answers", typeof r1.judge.kappa === "string" && r1.judge.value.includes("saw-panel"), r1.judge.value.slice(0, 30));
ok("W1 synthesis is a NEW answer from panel+judge", r1.answer.includes("synthesised-from-panel-and-judge"), r1.answer);
ok("W1 first fusion is cold (models ran)", r1.cached === false, "cached=" + r1.cached);
ok("W1 each panel member generated once", gens["alpha-360m"] === 1 && gens["beta-coder-1_5b"] === 1 && gens["gamma-0_5b"] === 1, JSON.stringify(gens));
ok("W1 tier is local (100% serverless — no remote slot)", r1.tier === "local", "tier=" + r1.tier);

// ── W2: O(1) EXACT REPEAT — same question, same panel → zero models run, all legs cached ──
const before = { ...gens };
const r2 = await fuse.fuse(Q);
ok("W2 repeat fusion is fully cached", r2.cached === true, "cached=" + r2.cached);
ok("W2 repeat ran ZERO models", JSON.stringify(gens) === JSON.stringify(before), JSON.stringify(gens));
ok("W2 repeat → identical synthesis κ", r2.kappa === r1.kappa, r2.kappa);
ok("W2 repeat → identical panel κs", r2.panel.every((p, i) => p.kappa === r1.panel[i].kappa));

// ── W3: NEAR-REPEAT — swap ONE panel member → only the changed leg + judge + synth recompute ──
const delta = mind("delta-new", (p) => "DELTA: " + p.split("\n")[0].slice(0, 24));
const g0 = { ...gens };
const r3 = await fuse.fuse(Q, { panel: [alpha, beta, delta] });            // gamma → delta; alpha,beta unchanged
ok("W3 unchanged members did NOT recompute (O(1) hits)", gens["alpha-360m"] === g0["alpha-360m"] && gens["beta-coder-1_5b"] === g0["beta-coder-1_5b"], JSON.stringify({ a: gens["alpha-360m"], b: gens["beta-coder-1_5b"] }));
ok("W3 the swapped member computed once", gens["delta-new"] === 1, "delta=" + gens["delta-new"]);
ok("W3 judge + synth recomputed (panel changed)", gens["judge-coder-1_5b"] === g0["judge-coder-1_5b"] + 1 && gens["synth-brain"] === g0["synth-brain"] + 1, JSON.stringify({ j: gens["judge-coder-1_5b"], s: gens["synth-brain"] }));
ok("W3 near-repeat yields a DIFFERENT synthesis κ", r3.kappa !== r1.kappa);

// ── W4: the prompt builders are deterministic + carry every upstream output (why near-repeat is cheap) ──
const jp = buildJudgePrompt(Q, r1.panel);
ok("W4 judge prompt embeds every panel answer", r1.panel.every((p, i) => jp.includes(`[${i + 1}]`) && jp.includes(p.value.trim())));
const sp = buildSynthPrompt(Q, r1.panel, r1.judge.value);
ok("W4 synth prompt embeds panel + judge", sp.includes("JUDGE'S ANALYSIS") && sp.includes(r1.judge.value.slice(0, 12)));

// ── W5: the FusionReceipt is ONE self-verifying DAG (Law L5) ──
const v = await verifyReceipt(r1.receipt);
ok("W5 FusionReceipt re-derives (verifyReceipt ok)", v.ok === true, v.derived && v.derived.slice(0, 24));
ok("W5 receipt names the synthesis as prov:generated", r1.receipt.body["prov:generated"]["@id"] === r1.kappa);
ok("W5 receipt prov:used covers every panel member + the judge", r1.receipt.body["prov:used"].filter((u) => u["holoq:role"] === "panel").length === 3 && r1.receipt.body["prov:used"].some((u) => u["holoq:role"] === "judge"));
ok("W5 receipt records panelSize + tier", r1.receipt.body["holoq:panelSize"] === 3 && r1.receipt.body["holoq:tier"] === "local");
const tampered = { id: r1.receipt.id, body: { ...r1.receipt.body, "holoq:panelSize": 99 } };
const vt = await verifyReceipt(tampered);
ok("W5 a tampered receipt is REFUSED (a single altered byte breaks the κ)", vt.ok === false);

// ── W6: a remote panel slot flips tier to hybrid (the ADR-0090 opt-in seam) ──
const remoteSlot = { id: "frontier-remote", remote: true, generate: async function* (p) { yield { delta: "REMOTE: " + p.split("\n")[0].slice(0, 20) }; } };
const rh = await fuse.fuse("hybrid question", { panel: [alpha, remoteSlot] });
ok("W6 a remote panel member makes the fusion tier 'hybrid'", rh.ok === true && rh.tier === "hybrid", "tier=" + rh.tier);

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "Q.fuse — serverless compound model (panel→judge→synthesize, κ-memo O(1), one FusionReceipt) — ADR-0098", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-fuse-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
