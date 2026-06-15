// holo-live-edit-witness.mjs — proves liveEdit: the ONE primitive the Q chat sidecar, Holo DevTools
// (ADR-0095), and AI agents all edit a holospace through. A human edit and an agent edit are the SAME act
// on the SAME κ + the SAME live surface. Drives the pure editor with the REAL HoloRepo.publishSource as the
// κ addresser (so an edit's κ === the published holospace κ — one content address everywhere) and a
// recording render hook (the live surface), with the REAL scanPii driving the governed door's red-line.

import { createLiveEditor } from "../os/usr/lib/holo/holo-live-edit.mjs";
import { HoloRepo } from "../os/usr/lib/holo/holo-blocks-repo.mjs";
import { scanPii } from "../os/usr/lib/holo/holo-conscience.js";
import { verify as verifyObject } from "../os/usr/lib/holo/holo-object.mjs";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

const repo = new HoloRepo();
const seal = (name, source) => repo.publishSource({ name, source });   // the SAME κ addresser the studio uses

// the live surface — a recording render (stands in for the mounted iframe's srcdoc swap)
let rendered = [], renders = 0;
const ed = createLiveEditor({ seal, gate: () => null, now: () => 1700000000000 });
ed.register("home", { name: "Home", render: (src) => { renders++; rendered.push(src); } });

// ── 1) a human edit derives a NEW κ + re-renders the live surface in place ───────────────────────────
const e1 = ed.edit("home", "<h1>v1</h1>");
ok("edit seals the source to a κ + re-renders the live surface", e1.ok && e1.changed && renders === 1 && rendered[0] === "<h1>v1</h1>");
ok("the edit κ === repo.publishSource κ (one content address everywhere)", e1.kappa === repo.publishSource({ name: "Home", source: "<h1>v1</h1>" }).id);

// ── 2) identical source → same κ → O(1) NO-OP (no re-render) ─────────────────────────────────────────
const e1b = ed.edit("home", "<h1>v1</h1>");
ok("identical source → same κ, O(1) no-op (live surface NOT re-rendered)", e1b.ok && e1b.changed === false && renders === 1, "renders=" + renders);

// ── 3) a changed source → a NEW κ + a re-render ──────────────────────────────────────────────────────
const e2 = ed.edit("home", "<h1>v2</h1>");
ok("a changed source → a new κ + re-render", e2.changed === true && e2.kappa !== e1.kappa && renders === 2 && rendered[1] === "<h1>v2</h1>");

// ── 4) the surface object self-verifies (Law L5) — an edit is a real content-addressed object ────────
const obj = JSON.parse(repo.objStore.get(e2.kappa.split(":").pop()));
ok("the edited object re-derives (verify by content, Law L5)", verifyObject({ ...obj, id: e2.kappa }) === true);

// ── 5) editing an UNREGISTERED surface is refused (no live target) ───────────────────────────────────
ok("edit of an unknown surface → refused (no fake)", ed.edit("nope", "x").ok === false);

// ── 6) THE GOVERNED DOOR — agentEdit is FAIL-CLOSED with no conscience ───────────────────────────────
const noGate = createLiveEditor({ seal, gate: () => null, now: () => 1700000000000 });
noGate.register("home", { name: "Home", render: () => {} });
ok("agentEdit with NO conscience → refused (fail-closed, exposure ≠ authorization)", (await noGate.agentEdit("home", "<h1>x</h1>", { caller: "bot" })).refused === true);

// ── 7) agentEdit through a conscience: a PII red-line BLOCKS, a clean edit is ACCEPTED + receipted ───
let aRenders = 0;
const consc = () => ({ evaluate: (d) => scanPii(String(d.target) + " " + (d.source || "")).length ? { outcome: "block", blocked: ["P5"] } : { outcome: "accept" } });
const ag = createLiveEditor({ seal, gate: consc, now: () => 1700000000000 });
ag.register("home", { name: "Home", render: () => { aRenders++; } });
const blocked = await ag.agentEdit("home alice@example.com", "<h1>leak</h1>", { caller: "bot" });
ok("agentEdit blocked by a red-line verdict (no edit applied)", blocked.refused === true && aRenders === 0, blocked.reason);
const accepted = await ag.agentEdit("home", "<h1>agent v1</h1>", { caller: "trusted-agent" });
ok("agentEdit ACCEPTED → edits the SAME live surface a human would", accepted.ok === true && accepted.changed === true && aRenders === 1);
ok("an accepted agent edit mints a re-derivable hosc:Edit receipt (who · target · effect κ)", /hosc:Edit/.test(JSON.stringify(accepted.receipt)) && accepted.receipt["prov:generated"] === accepted.kappa && accepted.receipt["hosc:who"] === "trusted-agent");
ok("the agent's edit κ === a human edit κ for the same source (one act, one κ)", accepted.kappa === repo.publishSource({ name: "Home", source: "<h1>agent v1</h1>" }).id);

// ── 8) resolve-on-demand (the shell wires a live mounted window without pre-registering) ─────────────
let resolved = 0;
const live = createLiveEditor({ seal, resolve: (id) => id === "win-7" ? { name: "App", render: () => { resolved++; } } : null, gate: () => null });
const r1 = live.edit("win-7", "<b>a</b>"); const r2 = live.edit("win-7", "<b>a</b>"); const r3 = live.edit("win-7", "<b>b</b>");
ok("resolve-on-demand: a live window edits without pre-registration, with the no-op intact", r1.changed && !r2.changed && r3.changed && resolved === 2);

const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "liveEdit — the one κ-anchored primitive the chat sidecar, Holo DevTools, and AI agents edit a holospace through (humans + agents, one act, one κ, one live surface)",
  passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-live-edit-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
