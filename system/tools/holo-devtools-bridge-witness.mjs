#!/usr/bin/env node
// holo-devtools-bridge-witness.mjs — HOLO DEVTOOLS (ADR-0095, Bet A): the vendored frontend ⇄ κ backend
// TRANSPORT BINDING. Bet B proved the κ-CDP backend in isolation; this proves the OTHER unknown — that the
// REAL Chrome devtools-frontend embedder contract drives that backend over the Q cross-frame bus, with no
// fork of the UI. It binds against the contract READ FROM THE VENDORED SOURCE (not memory):
//   • OUT: MainConnection.sendRawMessage → InspectorFrontendHostInstance.sendMessageToBackend(msg)  (Connections.ts:47)
//   • IN : MainConnection listens on the host `events` emitter for DispatchMessage, delivering event.data    (Connections.ts:30,52-53)
// The witness reconstructs MainConnection's exact two-line behaviour, points it at our installed host shim,
// runs it over a MOCK of the holo-privacy:rpc bus (the holo-q-bridge-witness pattern — un-forgeable app id,
// onDelta stream, reply), and asserts CDP frames round-trip to the κ substrate and back.
//
// Authority: the VENDORED chrome-devtools-frontend embedder API (Connections.ts · InspectorFrontendHostAPI.ts) ·
//   the Q cross-frame protocol (ADR-0091 holo-q-app.js) · W3C DID Core · holospaces Law L1/L4/L5.
//   node tools/holo-devtools-bridge-witness.mjs
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { makeObject } from "../os/usr/lib/holo/holo-object.mjs";
import { scene } from "../os/usr/lib/holo/holo-scene.mjs";
import { createHoloDevToolsHost } from "../os/usr/lib/holo/devtools/holo-devtools-host.mjs";
import { createDevToolsServe } from "../os/usr/lib/holo/devtools/holo-devtools-serve.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const VENDOR = join(here, "../os/usr/lib/holo/devtools/vendor/front_end");
const checks = {}; const fail = [];
const ok = (n, c, d = "") => { checks[n] = !!c; if (!c) fail.push(n + (d ? ` — ${d}` : "")); return !!c; };

// ── 0 · the binding is grounded in the REAL vendored seam (would go RED if a version bump moves it) ──
const connPath = join(VENDOR, "core/sdk/Connections.ts");
const apiPath = join(VENDOR, "core/host/InspectorFrontendHostAPI.ts");
const vendored = existsSync(connPath) && existsSync(apiPath);
ok("vendored-front_end-present", vendored, "run tools/vendor-chrome-devtools.mjs");
if (vendored) {
  const conn = readFileSync(connPath, "utf8");
  const api = readFileSync(apiPath, "utf8");
  ok("seam-out-sendMessageToBackend", /sendMessageToBackend\(message\)/.test(conn) && /sendMessageToBackend\(message: string\)/.test(api));
  ok("seam-in-DispatchMessage-event", /DispatchMessage = 'dispatchMessage'/.test(api) && /addEventListener\(\s*[^)]*DispatchMessage/.test(conn));
}

// ── a real composed holospace: two self-verifying κ-objects in a scene ──
const store = new Map();
const note = makeObject(store, { type: ["schema:CreativeWork", "holo:Note"], "schema:text": "bridge hello" });
const clock = makeObject(store, { type: ["schema:SoftwareApplication", "holo:Widget"], "holo:widget": "clock" });
const sceneManifest = scene({ type: "holo:AppScene", objects: [{ k: note.id, x: 10, y: 20, w: 100, h: 80 }, { k: clock.id, x: 200, y: 40, w: 120, h: 120 }] });

// ── the SHELL side: HoloDevToolsServe over the κ backend (default: no conscience ⇒ eval fail-closed) ──
const serve = createDevToolsServe({ store, scene: sceneManifest });

// ── the MOCK cross-frame bus (models holo-gov.js: asserts the app identity un-forgeably, streams onDelta) ──
const makeBus = (srv, app) => (method, args, onDelta) => Promise.resolve(srv({ app, method, args, onEvent: onDelta }))
  .then((out) => { if (out && out.error) throw new Error(out.error); return out && out.result; });

// ── the IN-FRAME host shim, installed as the embedder (globalThis.InspectorFrontendHost) ──
const host = createHoloDevToolsHost({ rpc: makeBus(serve, "holo-devtools") });
globalThis.InspectorFrontendHost = host;
ok("host-installs-as-embedder", typeof host.sendMessageToBackend === "function" && !!host.events && host.isHostedMode() === false);

// ── reconstruct MainConnection's EXACT contract (Connections.ts:30,37,47,52-53) and a protocol client ──
class FakeMainConnection {
  constructor() { this.onMessage = null; host.events.addEventListener("dispatchMessage", this.dispatchMessage, this); }
  setOnMessage(cb) { this.onMessage = cb; }
  sendRawMessage(msg) { globalThis.InspectorFrontendHost.sendMessageToBackend(msg); }   // :47
  dispatchMessage(event) { if (this.onMessage) this.onMessage.call(null, event.data); } // :52-53
}
const conn = new FakeMainConnection();
let seq = 0; const pending = new Map();
conn.setOnMessage((data) => { const m = JSON.parse(data); const p = pending.get(m.id); if (p) { pending.delete(m.id); p(m); } });
const send = (method, params = {}) => new Promise((resolve) => { const id = ++seq; pending.set(id, resolve); conn.sendRawMessage(JSON.stringify({ id, method, params })); });

// ── 1 · a CDP DOM.getDocument over the bridge returns the SCENE TREE by κ ──
const docFrame = await send("DOM.getDocument");
// #document › HTML (documentElement) › BODY › κ-nodes — the standard CDP document shape the Elements panel renders
const objNodes = docFrame.result && docFrame.result.root.children[0].children[0].children;
ok("dom-getDocument-roundtrips-the-scene-tree",
  docFrame.id === 1 && objNodes && objNodes.length === 2 &&
  objNodes.map((n) => n.kappa).sort().join("|") === [note.id, clock.id].sort().join("|"));

// ── 2 · request id multiplexing — concurrent frames resolve to their OWN replies (the protocol works) ──
const [a, b] = await Promise.all([send("Target.getTargets"), send("DOM.getDocument")]);
ok("concurrent-frames-multiplex-by-id",
  a.result.targetInfos[0].title === "holo:AppScene" && b.result.root.nodeType === 9 && a.id !== b.id);

// ── 3 · Network frame → the κ-stream verify badge survives the transport (Law L5) ──
const net = await send("Network.getResponseBody", { requestId: note.id });
ok("network-verify-badge-over-bridge", net.result.holo.found === true && net.result.holo.verify.ok === true);

// ── 4 · Runtime.evaluate is FAIL-CLOSED end-to-end (no conscience on the shell side) ──
const ev = await send("Runtime.evaluate", { expression: "drop tables" });
ok("eval-fail-closed-over-bridge", ev.result.refused === true && /fail-closed/.test(ev.result.reason));

// ── 5 · a GOVERNED shell routes the eval through Q + seals a receipt, over the SAME bridge ──
const govServe = createDevToolsServe({ store, scene: sceneManifest,
  conscience: { evaluate: () => ({ outcome: "accept" }) }, qAgent: (expr) => ({ kappa: note.id, value: "ok:" + expr }) });
const govHost = createHoloDevToolsHost({ rpc: makeBus(govServe, "holo-devtools") });
const govReply = await new Promise((resolve) => {
  const c = { onMessage: null }; govHost.events.addEventListener("dispatchMessage", (e) => resolve(JSON.parse(e.data)));
  govHost.sendMessageToBackend(JSON.stringify({ id: 99, method: "Runtime.evaluate", params: { expression: "inspect" } }));
});
ok("governed-eval-routes-and-receipts-over-bridge",
  govReply.result.result && govReply.result.result.objectId === note.id && govReply.result.receipt.verb === "devtools.eval");

// ── 6 · a malformed CDP frame is refused (the bus carries the error back, not a crash) ──
const badServe = createDevToolsServe({ store, scene: sceneManifest });
let busError = null;
try { await makeBus(badServe, "holo-devtools")("cdp", { cdp: { notamethod: true } }); } catch (e) { busError = e.message; }
ok("malformed-frame-refused", /malformed cdp frame/.test(busError || ""));

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult",
  witnessed,
  subject: "Holo DevTools transport binding (ADR-0095 Bet A) — the vendored Chrome devtools-frontend embedder contract drives the κ-CDP backend over the Q cross-frame bus, no UI fork",
  covers: [
    "the binding targets the REAL vendored seam — Connections.ts sendMessageToBackend (out) + the DispatchMessage event (in); a version bump that moves the seam turns this RED",
    "the host shim installs as the embedder (globalThis.InspectorFrontendHost) with sendMessageToBackend + an events emitter; isHostedMode()===false ⇒ MainConnection (our seam), not ?ws=",
    "a reconstruction of MainConnection's exact contract (Connections.ts:47 send · :52-53 receive event.data) drives CDP frames through the shim",
    "DOM.getDocument round-trips the scene tree BY κ across the bridge (the human door reaches the κ substrate)",
    "request-id multiplexing — concurrent CDP frames resolve to their own replies (the protocol works over the bus)",
    "the Network κ-stream verify badge survives the transport (Law L5)",
    "Runtime.evaluate is FAIL-CLOSED end-to-end with no conscience (Law L4) and ROUTES through Q + seals a receipt when the shell is governed",
    "a malformed CDP frame is refused and carried back as an error, not a crash (the holo-gov.js / ungoverned-frame discipline)",
  ],
  vendored: { version: "1.0.1645245", front_end: existsSync(VENDOR) },
  checks, failed: fail,
  authority: "the vendored chrome-devtools-frontend embedder API (Connections.ts · InspectorFrontendHostAPI.ts, pinned by tarball integrity) · the Q cross-frame protocol (ADR-0091 holo-q-app.js) · W3C DID Core · holospaces Law L1/L4/L5",
};
writeFileSync(join(here, "holo-devtools-bridge-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("Holo DevTools witness — the vendored-frontend ⇄ κ-backend transport binding (Bet A)\n");
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"}  ${k}`);
console.log(`\n  ${witnessed ? "WITNESSED ✓" : "NOT witnessed — " + fail.join("; ")}`);
process.exit(witnessed ? 0 : 1);
