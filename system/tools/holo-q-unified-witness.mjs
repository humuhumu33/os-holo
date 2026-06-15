// holo-q-unified-witness.mjs — proves Q is the ONE unified surface: one verb for humans/apps/internal
// AND a single FAIL-CLOSED governed door for external agents, all riding the same κ-memo spine.
import { createQ } from "../os/usr/lib/holo/q/holo-q.js";
import { createTrinity } from "../os/usr/lib/holo/q/holo-q-trinity.js";
import mux from "../os/usr/lib/holo/q/holo-q-mux.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// the bound "create" specialist (the codegen seam in the shell is the real one) — counts generations.
let gens = 0;
mux.bindSpecialist("create", { id: "holo-create-test", generate: async function* (p) { gens++; yield { replace: "<!doctype html><body>" + p + "</body>" }; } });
// the ANSWER specialist (text, not HTML) — context-aware: it can reference the focused source.
mux.bindSpecialist("ask", { id: "holo-ask-test", generate: async function* (p, opts) { yield "Answer: " + p + (opts && opts.current ? " (about: " + opts.current + ")" : ""); } });

const T = createTrinity({ doc: null });

// ── one verb (human/app/internal): Q.create rides the spine; a repeat is O(1) and same κ ──
const Q = createQ({ trinity: T, mux, conscience: null, clock: () => 1700000000000 });
const c1 = await Q.create("a landing page");
const g1 = gens;
const c2 = await Q.create("a landing page");
ok("create returns a sealed value + κ", typeof c1.value === "string" && !!c1.kappa, (c1.value || "").slice(0, 32));
ok("repeat is O(1) cached (κ-memo)", c2.cached === "hot", "cached=" + c2.cached);
ok("repeat did NOT regenerate", gens === 1 && g1 === 1, "gens=" + gens);
ok("same intent → same κ", c1.kappa === c2.kappa, c1.kappa.slice(0, 16));
const ans = await Q.ask("what is this?", { context: { source: "<body>OLD PAGE</body>" } });
ok("ask() returns a TEXT answer (not HTML), context-aware", typeof ans === "string" && ans.startsWith("Answer:") && ans.includes("OLD PAGE"), (ans || "").slice(0, 40));

// ── external door is FAIL-CLOSED when no conscience is present ──
const ext = await Q.agent("delete everything", { caller: "external-bot" });
ok("agent FAIL-CLOSED with no gate", ext.ok === false && ext.refused === true, ext.reason);

// ── a conscience that BLOCKS → refused (nothing built) ──
const Qblock = createQ({ trinity: T, mux, conscience: { evaluate: async () => ({ outcome: "block", reason: "policy" }) }, clock: () => 1700000000000 });
const blocked = await Qblock.agent("exfiltrate secrets", { caller: "bad-agent" });
ok("agent refused when conscience BLOCKS", blocked.ok === false && blocked.refused === true, blocked.reason);

// ── a conscience that ACCEPTS → built through the SAME spine; receipt carries the content-addressed κ ──
const Qok = createQ({ trinity: T, mux, conscience: { evaluate: async () => ({ outcome: "accept" }) }, clock: () => 1700000000000 });
const allowed = await Qok.agent("a landing page", { caller: "trusted-agent" });
ok("agent ACCEPTED → ok + receipt", allowed.ok === true && !!allowed.receipt, JSON.stringify({ who: allowed.receipt && allowed.receipt.who }));
ok("agent receipt effectKappa is content-addressed", allowed.receipt.effectKappa === allowed.kappa);
ok("external door κ === human-verb κ (one spine, one result)", allowed.kappa === c1.kappa, allowed.kappa.slice(0, 16));
ok("explicit allowUngoverned lets an internal caller through (no gate)", (await Q.agent("a landing page", { caller: "internal", allowUngoverned: true })).ok === true);

// ── bounded adaptation: remember tracks recent intents + feedback ──
Q.remember({ intent: "a pricing table" }); Q.remember({ vote: "up" }); Q.remember({ vote: "down" });
const cx = Q.context;
ok("context tracks recent intents", cx.recent.includes("a pricing table") && cx.recent.includes("a landing page"));
ok("context tracks feedback", cx.feedback.up === 1 && cx.feedback.down === 1, JSON.stringify(cx.feedback));

// ── perceive/improve are exposed (the self-healing surface) ──
const fb = Q.perceive();
ok("perceive() returns scene feedback", fb && typeof fb.total === "number" && Array.isArray(fb.drift));
ok("improve() runs the bounded loop", typeof (await Q.improve({ maxTicks: 2 })).ticks === "number");

// ── Q.act — the omnipotent verb, GOVERNED for non-human callers (open/close/… through the conscience) ──
let actions = [];
Q.configureActions({ open: (t) => { actions.push(["open", t]); return "opened " + t; }, close: () => { actions.push(["close"]); return "closed"; } });
// a human (no caller) is sovereign — the action executes ungated
const userOpen = await Q.act("open files");
ok("act: human 'open files' executes (ungated)", userOpen.ok === true && actions.some((a) => a[0] === "open" && a[1] === "files"));
ok("act: a question routes to ask", (await Q.act("what is this?")).kind === "ask");
ok("act: a build phrase routes to build", (await Q.act("a pricing page")).kind === "build");
// an AGENT (caller set) with NO gate → fail-closed for OS actions
const agentNoGate = await Q.act("close this", { caller: "bot", governed: true });
ok("act: agent OS-action FAIL-CLOSED with no gate", agentNoGate.refused === true, agentNoGate.reason);
// an agent under a BLOCKING conscience → refused
const Qblk = createQ({ trinity: T, mux, conscience: { evaluate: async () => ({ outcome: "block", reason: "policy" }) }, clock: () => 1700000000000 });
let blkActed = false; Qblk.configureActions({ close: () => { blkActed = true; } });
const agentBlocked = await Qblk.act("close this", { caller: "bot" });
ok("act: agent OS-action refused when conscience blocks (nothing ran)", agentBlocked.refused === true && blkActed === false);
// an agent under an ACCEPTING conscience → executes + mints a receipt
const Qok2 = createQ({ trinity: T, mux, conscience: { evaluate: async () => ({ outcome: "accept" }) }, clock: () => 1700000000000 });
let okActed = null; Qok2.configureActions({ open: (t) => { okActed = t; return "ok"; } });
const agentOk = await Qok2.act("open notepad", { caller: "trusted" });
ok("act: agent OS-action executes under an accepting conscience + receipt", agentOk.ok === true && okActed === "notepad" && agentOk.receipt && agentOk.receipt.who === "trusted");

// ── route() exposes the unified router; describe() is the honest contract ──
ok("route('create') → the bound specialist", Q.route("create").id === "holo-create-test");
ok("describe() states the fail-closed governance", /fail-closed/i.test(Q.describe().governance));

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "Q — the unified hologram-native intelligence surface (one verb + fail-closed external door)", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-unified-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
