// holo-q-bridge-witness.mjs — proves Q is reachable from INSIDE an app (a separate iframe window) over the
// governed cross-frame channel, with the app holding NOTHING and its identity asserted by the HOST.
// Mocks the postMessage bus; exercises createQClient (app) ⇄ createQServe (host) end-to-end.
import { createQClient, createQServe } from "../os/usr/lib/holo/q/holo-q-app.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// ── a tiny 2-window postMessage bus (app ⇄ host) ──
function mkWin() { const ls = []; return { addEventListener: (t, fn) => { if (t === "message") ls.push(fn); }, _deliver: (data, source) => { for (const fn of ls.slice()) fn({ data, source }); } }; }
const appWin = mkWin(), hostWin = mkWin();
hostWin.postMessage = (data) => hostWin._deliver(data, appWin);   // app → host (source = app)
appWin.postMessage = (data) => appWin._deliver(data, hostWin);    // host → app (source = host)

// ── capture every byte the app puts on the wire (to prove the app holds/leaks nothing) ──
const wire = [];
const realHostPost = hostWin.postMessage;
hostWin.postMessage = (data) => { wire.push(data); realHostPost(data); };

// ── stub Q (host-side authority) ──
let blocking = false;
const stubQ = {
  ask: async (text, { context }) => "ANSWER[" + text + "] about: " + (context && (context.source || context.name)),
  agent: async (text, opts) => blocking ? { ok: false, refused: true, reason: "policy" }
    : { ok: true, caller: opts.caller, kappa: "did:holo:sha256:eff", value: "<built/>", receipt: { who: opts.caller, verb: "q.agent", effectKappa: "did:holo:sha256:eff" } },
};
let summonCalls = [];
const serve = createQServe({ Q: stubQ, summon: (t, c) => summonCalls.push({ text: t, context: c }) });

// ── the HOST gov: identity is HOST-asserted (byWin), NOT anything the client claims ──
const HOST_APP = "did:holo:app:trusted-test";
hostWin.addEventListener("message", async (e) => {
  const d = e.data; if (!d || d.type !== "holo-privacy:rpc") return;
  const onDelta = (t) => e.source.postMessage({ type: "holo-privacy:delta", id: d.id, delta: t });
  const out = await serve({ app: HOST_APP, method: d.method, args: d.args || {}, onDelta });
  e.source.postMessage({ type: "holo-privacy:res", id: d.id, result: (out && out.result != null) ? out.result : null, error: (out && out.error) || null });
});

// ── the APP client (holds only intents) ──
const Q = createQClient({ target: hostWin, source: appWin });

// 1) summon — opens the shell orb over the app, passing the app's own context
const sres = await Q.summon("make this calmer", { name: "MyApp", source: "<b>hello from the app</b>" });
ok("app can SUMMON the shell Q", sres && sres.ok === true, JSON.stringify(sres));
ok("summon reaches the host with the app's context", summonCalls.length === 1 && /hello from the app/.test(summonCalls[0].context.source));
ok("summon is attributed to the HOST-asserted app id", sres.app === HOST_APP, sres.app);

// 2) ask — Q answers about what's INSIDE the app (its supplied context)
const ans = await Q.ask("what is this?", { name: "MyApp", source: "<b>hello from the app</b>" });
ok("app can ASK Q (answer about the app's content)", typeof ans === "string" && /hello from the app/.test(ans), (ans || "").slice(0, 48));

// 3) create — routes through Q's GOVERNED door; identity is the host-asserted app, receipted
const cr = await Q.create("build a dashboard", { source: "<b>ctx</b>" });
ok("app create rides the governed door (ok + receipt)", cr && cr.ok === true && !!cr.receipt);
ok("create receipt is the HOST-asserted app (not client-claimed)", cr.receipt.who === HOST_APP, cr.receipt.who);

// 4) governed refuse — a blocking conscience refuses the app's create
blocking = true;
const refused = await Q.create("exfiltrate everything", { source: "x" });
ok("app create REFUSED when the conscience blocks", refused && refused.ok === false && refused.refused === true, refused && refused.reason);
blocking = false;

// 5) the app holds/leaks NOTHING — only {type,method,args,id} crossed; no Q, no functions, no secrets
const leak = wire.some((m) => m.type !== "holo-privacy:rpc" || Object.keys(m).some((k) => !["type", "method", "args", "id"].includes(k)) || typeof m.args === "function");
ok("the app frame holds nothing — only intents cross the bus", !leak, JSON.stringify(Object.keys(wire[0] || {})));

// 6) no Q authority installed ⇒ fail-closed (serve refuses an unknown method)
ok("unknown q method is refused", (await serve({ app: HOST_APP, method: "q.nuke", args: {} })).error != null);

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "Q cross-frame bridge — the one Q reachable from inside a sandboxed app, governed, app holds nothing", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-bridge-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
