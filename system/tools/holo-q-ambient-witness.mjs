// holo-q-ambient-witness.mjs — proves Ambient Q's load-bearing primitive: Q is CONTEXT-AWARE. Given the
// focused holospace as context, an intent EDITS "this" (the focused source is the edit base); without
// context it's a fresh build; summon(context) locks a context-bound Q; all of it rides the same κ-memo
// spine. (The shell surfaces this via a global ⌘/Ctrl-I that opens the one Q door on activeHolospace().)
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

// a specialist that RECORDS what the fabric handed it (so we can see context → editing/current).
let lastOpts = null, gens = 0;
mux.bindSpecialist("create", {
  id: "ambient-test",
  // a real edit specialist's output reflects the BASE doc it edits → fold `current` in (so editing a
  // different focused source yields different bytes, as a true editor would).
  generate: async function* (p, opts) { gens++; lastOpts = opts || {}; yield { replace: "<!doctype html><body>" + p + (opts && opts.current ? " | base:" + opts.current : "") + "</body>" }; },
});

const Q = createQ({ trinity: createTrinity({ doc: null }), mux, conscience: null, clock: () => 1700000000000 });

// ── context-aware: an intent WITH a focused source EDITS it (editing=true, current=the focused source) ──
const focused = { kappa: "did:holo:sha256:abc", source: "<body>OLD PAGE</body>", name: "Home" };
await Q.create("make it calmer", { context: focused });
ok("intent WITH context → edits THIS (editing=true)", lastOpts && lastOpts.editing === true);
ok("intent WITH context → focused source is the edit base", lastOpts && lastOpts.current === focused.source, (lastOpts && lastOpts.current || "").slice(0, 24));

// ── without context: a FRESH build (no editing) ──
lastOpts = null;
await Q.create("a pricing page");
ok("intent WITHOUT context → fresh build (not editing)", lastOpts && !lastOpts.editing);
ok("intent WITHOUT context → no edit base", lastOpts && lastOpts.current == null);

// ── summon(context) locks a context-bound Q — same result as passing context explicitly ──
const bound = Q.summon(focused);
const viaSummon = await bound.create("make it calmer");
const viaExplicit = await Q.create("make it calmer", { context: focused });
ok("summon(context) exposes create/ask/agent", typeof bound.create === "function" && typeof bound.ask === "function" && typeof bound.agent === "function");
ok("summon(ctx).create κ === create(intent,{context}) κ", viaSummon.kappa === viaExplicit.kappa, viaSummon.kappa.slice(0, 16));

// ── still rides the κ-memo: same intent + same context → O(1), no regeneration ──
const g0 = gens;
const rep = await Q.create("make it calmer", { context: focused });
ok("repeat (same intent+context) is O(1) cached", rep.cached === "hot", "cached=" + rep.cached);
ok("repeat did NOT regenerate", gens === g0, "gens delta=" + (gens - g0));

// ── a DIFFERENT focused source → a different edit → a different κ (context is part of the address) ──
const other = { source: "<body>OTHER</body>", name: "Other" };
const a = await Q.create("make it calmer", { context: focused });
const b = await Q.create("make it calmer", { context: other });
ok("different focused context → different κ (edits the right thing)", a.kappa !== b.kappa);

// ── context with only a κ (no source) → still creates, no spurious edit ──
lastOpts = null;
await Q.create("a todo app", { context: { kappa: "did:holo:sha256:xyz" } });
ok("context without source → fresh build (no false edit)", lastOpts && !lastOpts.editing);

// ── OS-wide awareness: Q.scope summarizes the WHOLE desktop (all open holospaces + which is focused) ──
const world = [
  { id: "n1", kind: "app", name: "Home", state: "normal" },
  { id: "n2", kind: "app", title: "Notepad  ·  holo://abc", state: "normal" },
  { id: "n3", kind: "web", webAddr: "example.com", name: "🌐 Example", state: "normal" },
  { id: "n4", kind: "app", name: "Hidden", state: "hidden" },
];
const sc = Q.scope(world, "n2");
ok("scope counts the OPEN holospaces (excludes hidden)", sc.count === 3, "count=" + sc.count);
ok("scope marks the FOCUSED one", sc.focused && sc.focused.name === "Notepad", sc.focused && sc.focused.name);
ok("scope summary names them (OS-aware context)", /Home/.test(sc.summary) && /Notepad \(focused\)/.test(sc.summary), sc.summary.slice(0, 60));
ok("scope strips chrome (κ tail, 🌐) from names", sc.open.some((i) => i.name === "Example") && !/holo:\/\//.test(sc.summary));
ok("scope on an empty desktop is honest", Q.scope([], null).count === 0 && /empty/.test(Q.scope([], null).summary));

// ── OMNIPOTENT routing: Q.intent classifies a line into act (open/close/…) · ask · build ──
const I = (t) => Q.intent(t);
ok("intent: 'open files' → open(files)", I("open files").kind === "open" && I("open files").target === "files", JSON.stringify(I("open files")));
ok("intent: 'launch notepad' → open(notepad)", I("launch notepad").kind === "open" && I("launch notepad").target === "notepad");
ok("intent: 'go to github.com' → open", I("go to github.com").kind === "open" && I("go to github.com").target === "github.com");
ok("intent: a bare URL → open", I("https://example.com").kind === "open" && I("example.org").kind === "open");
ok("intent: 'close this' → close(this)", I("close this").kind === "close" && I("close this").target === "this");
ok("intent: 'minimize' → minimize", I("minimize").kind === "minimize" && I("hide it").kind === "minimize");
ok("intent: 'maximize this' → maximize", I("maximize this").kind === "maximize" && I("full screen").kind === "maximize");
ok("intent: 'tile' / 'arrange' → arrange(tile)", I("tile").kind === "arrange" && I("tile").target === "tile" && I("arrange my windows").target === "tile");
ok("intent: 'cascade' → arrange(cascade)", I("cascade").kind === "arrange" && I("cascade").target === "cascade");
ok("intent: 'focus mode' / 'zen' → arrange(focus)", I("focus mode").kind === "arrange" && I("focus mode").target === "focus" && I("zen").target === "focus");
ok("intent: a question → ask", I("what is this?").kind === "ask" && I("how does it work").kind === "ask");
ok("intent: 'help' / 'what can you do' → help", I("help").kind === "help" && I("what can you do?").kind === "help" && I("what can i say").kind === "help");
ok("intent: anything else → build", I("a teal pricing page").kind === "build" && I("make me a CRM").kind === "build");
// capabilities() is the discoverability surface — structured, with examples
const caps = Q.capabilities();
ok("capabilities() lists the verbs with examples", Array.isArray(caps) && caps.length >= 5 && caps.every((c) => c.id && c.what && Array.isArray(c.examples) && c.examples.length), caps.map((c) => c.id).join(","));
ok("capabilities cover build·ask·open·window·arrange", ["build", "ask", "open", "window", "arrange"].every((id) => caps.some((c) => c.id === id)));
ok("intent: 'open' verb does NOT swallow a build ('make a page')", I("make a page").kind === "build");
ok("intent: empty → build (no crash)", I("").kind === "build" && I(null).kind === "build");

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "Ambient Q — context-aware + summon() + OS-wide scope() + omnipotent intent() routing", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-ambient-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
