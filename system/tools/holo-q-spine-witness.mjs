// holo-q-spine-witness.mjs — proves the Create build now rides the TRINITY SPINE end-to-end:
// the build routes through mux.routeTask → trinity.create → fabric κ-memo, auto-perceives BOTH faces
// with a REAL rebuild thunk (so the loop can heal), and the SAME verb serves a human surface and an
// agent (same input → same κ). This is the "witnessed → load-bearing" check for the reflection's move.
import { createTrinity } from "../os/usr/lib/holo/q/holo-q-trinity.js";
import mux from "../os/usr/lib/holo/q/holo-q-mux.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

// a fake "create" specialist (the codegen seam in the shell is the real one) — counts generations so we
// can prove the κ-memo skips recompute on a repeat ask.
let gens = 0;
const specialist = {
  id: "holo-create-test",
  generate: async function* (prompt, opts) {
    gens++;
    const html = "<!doctype html><body>" + prompt + (opts && opts.editing ? " · edited" : "") + "</body>";
    yield { replace: html };                                   // a {replace} block — fabric seals the accumulated value
  },
};
mux.bindSpecialist("create", specialist);

const T = createTrinity({ doc: null });                        // headless: no renderer; the host paints via onPartial

// ── W3: routing — the build's verb resolves to the bound specialist (not the main-model floor) ──
ok("W3 routeTask('create') → the bound specialist", mux.routeTask("create").id === "holo-create-test");

// ── W1: the κ-memo is ON the build path — a repeat ask is O(1), no regeneration ──
const a1 = await T.create({ id: "x1", task: "create", input: "a pricing page", render: false });
const gensAfterFirst = gens;
const a2 = await T.create({ id: "x2", task: "create", input: "a pricing page", render: false });   // same input, different id
ok("W1 first build computes (cold)", a1.cached === false, "cached=" + a1.cached);
ok("W1 repeat build is cached (hot)", a2.cached === "hot", "cached=" + a2.cached);
ok("W1 repeat did NOT regenerate", gens === gensAfterFirst && gensAfterFirst === 1, "gens=" + gens);
ok("W1 same input → same κ", a1.kappa === a2.kappa, a1.kappa);
ok("W1 build carries the value (HTML)", typeof a1.value === "string" && a1.value.includes("pricing"), (a1.value || "").slice(0, 40));

// ── W4: ONE verb — a human surface (streams via onPartial) and an agent (awaits) get the SAME κ ──
const painted = [];
const studioRes = await T.create({ id: "s1", task: "create", input: "a contact form", render: false,
  onPartial: (partial) => painted.push(partial) });
const agentRes = await T.create({ id: "g1", task: "create", input: "a contact form", render: false });
ok("W4 streaming surface delivered a partial", painted.length >= 1 && painted[0].includes("contact"));
ok("W4 human(stream) κ === agent(await) κ", studioRes.kappa === agentRes.kappa, studioRes.kappa);

// ── W4b: a CACHED streaming ask still paints the final once (O(1), instant — no deltas) ──
const painted2 = [];
const cachedStream = await T.create({ id: "s2", task: "create", input: "a contact form", render: false,
  onPartial: (partial, e) => painted2.push({ partial, cached: e.cached }) });
ok("W4b cached stream paints the final once", painted2.length === 1 && painted2[0].cached === "hot", JSON.stringify(painted2[0] && { cached: painted2[0].cached }));
ok("W4b cached stream κ matches", cachedStream.kappa === studioRes.kappa);

// ── W2: perception has a REAL object to heal — inject drift, the loop fires the rebuild thunk ──
// the build registered a code face + a builder under its id; simulate the screen lagging the code (drift)
// by recording a visual rendered from a DIFFERENT code version, then run the self-improvement loop.
const driftId = "x1";                                          // the id from W1 (builder registered)
T.scene.observeVisual(driftId, "deadbeef".repeat(8), { from: "stale".repeat(8) });   // renderedFrom ≠ code → drift
const beforeDrift = T.scene.feedback().drift.includes(driftId);
const report = await T.improve({ maxTicks: 4 });
const healedSome = report.traces.some((t) => t.healed >= 1);
ok("W2 drift was detected before healing", beforeDrift);
ok("W2 the loop fired the rebuild thunk (healed≥1)", healedSome, "traces=" + JSON.stringify(report.traces.map((t) => ({ d: t.drifted, h: t.healed }))));

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "holo-q spine (Create build rides trinity.create → mux → fabric κ-memo)", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-spine-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
