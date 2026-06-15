// holo-q-fuse-panel-witness.mjs — proves the DEFAULT PANEL assembly for Q.fuse (ADR-0098 / ADR-0096):
// PERSONA mode (one warm brain → N diverse reasoning lenses) is the any-browser default; MODEL mode
// (≥2 distinct loaded samplers → the registry panel) is the upgrade; with nothing loaded it REFUSES,
// it does not invent a model (Law L5). The adapter turns a (messages,opts)→deltas sampler into a fabric
// provider whose persona is baked in, so the SAME question addresses a DISTINCT κ per member — which is
// what carries diversity all the way through to the synthesis. Drives the REAL createFuse engine.
import { createFabric } from "../os/usr/lib/holo/q/holo-q-fabric.js";
import { createFuse, verifyReceipt } from "../os/usr/lib/holo/q/holo-q-fuse.js";
import { defaultPanel, samplerProvider, configureDefaultFuse, describePanel } from "../os/usr/lib/holo/q/holo-q-fuse-panel.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

// a fake on-device sampler: (messages, opts) → deltas. Its answer DEPENDS on the system prompt, so two
// personas over the SAME brain produce DIFFERENT bytes → different κs (the diversity that must survive).
let calls = 0;
const fakeSampler = (id) => (messages, _opts) => {
  calls++;
  const sys = (messages.find((m) => m.role === "system") || {}).content || "";
  const user = (messages.find((m) => m.role === "user") || {}).content || "";
  const lens = sys.includes("concise") ? "C" : sys.includes("first principles") ? "F" : sys.includes("adversarial") ? "S" : sys.includes("compare") ? "J" : sys.includes("synthesis") ? "Y" : "_";
  return (async function* () { yield { delta: `${id}/${lens}: ` + user.split("\n")[0].slice(0, 20) }; })();
};

// ── W0: honest contract ──
const d = describePanel();
ok("W0 describePanel labels persona vs model honestly", /persona/i.test(d.default) && /model/i.test(d.upgrade) && /REFUSES|invent/i.test(d.honest));

// ── W1: PERSONA mode (default) — one brain → 3 diverse lenses + judge + synth ──
const persona = defaultPanel({ sampler: fakeSampler("warm") });
ok("W1 persona mode selected", persona.mode === "persona" && persona.diversity === "persona", persona.mode);
ok("W1 three diverse panel members", persona.panel.length === 3 && new Set(persona.panel.map((p) => p.id)).size === 3, persona.panel.map((p) => p.id).join(","));
ok("W1 judge + synth providers present", typeof persona.judge.generate === "function" && typeof persona.synth.generate === "function");
ok("W1 members carry their lens role", persona.members.map((m) => m.role).join(",") === "concise,first-principles,skeptic", persona.members.map((m) => m.role).join(","));

// ── W2: the adapter — the persona reaches the sampler, so members DIVERGE on the same input ──
const collect = async (prov, input) => { let s = ""; for await (const d of prov.generate(input, {})) s += d; return s; };
const a = await collect(persona.panel[0], "same question");
const b = await collect(persona.panel[1], "same question");
ok("W2 adapter yields string deltas", typeof a === "string" && a.length > 0, a);
ok("W2 same input, different persona → different output", a !== b, JSON.stringify({ a, b }));

// ── W3: drive the REAL fuse engine with the default persona panel → distinct κs, one verifiable receipt ──
const fabric = createFabric();
const fuse = createFuse({ fabric, panel: persona.panel, judge: persona.judge, synth: persona.synth });
const r = await fuse.fuse("How do we make fusion cheap?");
ok("W3 fusion ok over the default panel", r.ok === true && typeof r.answer === "string" && r.answer.length > 0);
ok("W3 panel κs are DISTINCT (diversity survived to content)", new Set(r.panel.map((p) => p.kappa)).size === 3, r.panel.map((p) => p.kappa.slice(0, 8)).join(","));
ok("W3 tier is local (persona panel is 100% serverless)", r.tier === "local");
ok("W3 the FusionReceipt re-derives", (await verifyReceipt(r.receipt)).ok === true);

// ── W4: MODEL mode (upgrade) — ≥2 distinct samplers become the registry panel ──
const model = defaultPanel({ samplers: { "qwen2.5-coder-1.5b": fakeSampler("coder"), "smollm2-360m": fakeSampler("smol") } });
ok("W4 model mode selected with ≥2 samplers", model.mode === "model" && model.diversity === "model", model.mode);
ok("W4 panel members are the supplied models", model.panel.map((p) => p.id).join(",") === "qwen2.5-coder-1.5b,smollm2-360m", model.panel.map((p) => p.id).join(","));
ok("W4 judge defaults to the reasoner", model.judge.id === "qwen2.5-coder-1.5b", model.judge.id);

// ── W5: nothing loaded → REFUSE, never invent a model (Law L5) ──
const none = defaultPanel({});
ok("W5 unconfigured → empty panel + honest reason", none.panel.length === 0 && none.mode === "unconfigured" && /no sampler/.test(none.reason || ""), none.reason && none.reason.slice(0, 30));

// ── W6: configureDefaultFuse wires a Q-shaped door in one call ──
let captured = null;
const fakeQ = { configureFuse: (cfg) => { captured = cfg; } };
const wired = configureDefaultFuse(fakeQ, { sampler: fakeSampler("warm") });
ok("W6 configureDefaultFuse reports persona mode", wired.ok === true && wired.mode === "persona", JSON.stringify(wired.panel || wired.reason));
ok("W6 it called Q.configureFuse with a panel + judge + synth", !!captured && captured.panel.length === 3 && !!captured.judge && !!captured.synth);
const wiredNone = configureDefaultFuse(fakeQ, {});
ok("W6 with nothing loaded it refuses to wire", wiredNone.ok === false && /no sampler/.test(wiredNone.reason || ""));

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "Q.fuse default panel — persona/model diversity assembly over the ADR-0096 registry (ADR-0098)", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-fuse-panel-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
