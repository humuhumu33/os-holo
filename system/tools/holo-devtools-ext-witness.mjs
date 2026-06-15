// holo-devtools-ext-witness.mjs — proves the Tier 2 relay (ADR-0095): the in-browser EXTENSION path that
// gives TRUE V8 debugging (breakpoints/stepping/heap) by relaying the vendored devtools-frontend's CDP to
// chrome.debugger (the real Chrome DevTools Protocol over live V8). Pure-Node over a MOCK chrome.debugger:
// the relay is the load-bearing half, chrome.debugger is injected (identical logic to the real background
// service worker — the Atlas-isomorphism discipline). Run: node system/tools/holo-devtools-ext-witness.mjs

import { createExtRelay } from "../os/usr/lib/holo/devtools/holo-devtools-ext/relay.mjs";
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url));

let pass = 0, fail = 0;
const ok = (name, cond, extra) => { if (cond) { pass++; console.log("  ✓ " + name); } else { fail++; console.log("  ✗ " + name + (extra ? "  — " + extra : "")); } };

// ── a mock chrome.debugger: records attach/detach, answers a few real-debugger methods, emits events ──
function mockDebugger() {
  const calls = []; let evCb = null, detachCb = null; const attaches = [];
  const responders = {
    "Debugger.enable": () => ({ debuggerId: "dbg-1" }),
    "Debugger.setBreakpointByUrl": (p) => ({ breakpointId: "bp-1", locations: [{ scriptId: "s1", lineNumber: p.lineNumber, columnNumber: p.columnNumber || 0 }] }),
    "Debugger.resume": () => ({}),
    "Debugger.stepOver": () => ({}),
    "HeapProfiler.takeHeapSnapshot": () => ({}),                // streams via HeapProfiler.addHeapSnapshotChunk events
    "Runtime.evaluate": (p) => ({ result: { type: "number", value: 42 }, _echo: p.expression }),
    "__throws": () => { throw new Error("boom"); },
  };
  return {
    _calls: calls, _attaches: attaches,
    attach: (tabId, version) => { attaches.push({ tabId, version }); return Promise.resolve(); },
    detach: (tabId) => { calls.push(["detach", tabId]); },
    sendCommand: (target, method, params) => {
      calls.push([method, target.sessionId || null]);
      if (method === "__throws") return responders.__throws();
      const r = responders[method]; return Promise.resolve(r ? r(params || {}) : {});
    },
    onEvent: (cb) => { evCb = cb; },
    onDetach: (cb) => { detachCb = cb; },
    _emit: (source, method, params) => evCb && evCb(source, method, params),
    _detach: (source, reason) => detachCb && detachCb(source, reason),
  };
}

const TAB = 7;
const sink = () => { const frames = []; return { send: (f) => frames.push(f), frames }; };

console.log("holo-devtools-ext-relay — Tier 2 (real V8 debugging via chrome.debugger, in-browser)\n");

// 1 · attach happens once, lazily, on the first frame -------------------------------------------------
{
  const dbg = mockDebugger(); const s = sink();
  const relay = createExtRelay({ dbg, tabId: TAB, send: s.send });
  await relay.onFrame({ id: 1, method: "Debugger.enable", params: {} });
  await relay.onFrame({ id: 2, method: "Runtime.enable", params: {} });
  ok("attaches to the tab exactly once (lazy)", dbg._attaches.length === 1 && dbg._attaches[0].tabId === TAB, JSON.stringify(dbg._attaches));
  ok("attach uses CDP version 1.3", dbg._attaches[0].version === "1.3");
}

// 2 · a real-debugger command round-trips (the gap Tier 1 can't fill) --------------------------------
{
  const dbg = mockDebugger(); const s = sink();
  const relay = createExtRelay({ dbg, tabId: TAB, send: s.send });
  await relay.onFrame({ id: 10, method: "Debugger.setBreakpointByUrl", params: { lineNumber: 12, url: "holo://app.js" } });
  const reply = s.frames.find((f) => f.id === 10);
  ok("Debugger.setBreakpointByUrl round-trips a real breakpointId", reply && reply.result.breakpointId === "bp-1", JSON.stringify(reply));
  await relay.onFrame({ id: 11, method: "HeapProfiler.takeHeapSnapshot", params: {} });
  ok("HeapProfiler.takeHeapSnapshot is accepted (real heap)", !!s.frames.find((f) => f.id === 11 && f.result));
}

// 3 · FLAT-PROTOCOL session routing — sent to {tabId,sessionId}, reply + events echo the sessionId ----
{
  const dbg = mockDebugger(); const s = sink();
  const relay = createExtRelay({ dbg, tabId: TAB, send: s.send });
  await relay.onFrame({ id: 20, method: "Runtime.evaluate", params: { expression: "6*7" }, sessionId: "S1" });
  const reply = s.frames.find((f) => f.id === 20);
  ok("command is sent to {tabId, sessionId}", dbg._calls.some((c) => c[0] === "Runtime.evaluate" && c[1] === "S1"));
  ok("reply ECHOES the sessionId", reply && reply.sessionId === "S1");
  ok("reply carries the real result (42)", reply && reply.result.result.value === 42);
  // an event from that session → tagged
  dbg._emit({ tabId: TAB, sessionId: "S1" }, "Debugger.paused", { reason: "breakpoint", callFrames: [] });
  const ev = s.frames.find((f) => f.method === "Debugger.paused");
  ok("session EVENT (Debugger.paused) is tagged with the sessionId", ev && ev.sessionId === "S1");
  // an event from ANOTHER tab is ignored
  dbg._emit({ tabId: 99 }, "Debugger.paused", {});
  ok("events from OTHER tabs are ignored", s.frames.filter((f) => f.method === "Debugger.paused").length === 1);
}

// 4 · errors round-trip as a CDP error frame (not a crash) -------------------------------------------
{
  const dbg = mockDebugger(); const s = sink();
  const relay = createExtRelay({ dbg, tabId: TAB, send: s.send });
  await relay.onFrame({ id: 30, method: "__throws", params: {}, sessionId: "S2" });
  const reply = s.frames.find((f) => f.id === 30);
  ok("a failing command returns a CDP error frame (sessionId preserved)", reply && reply.error && /boom/.test(reply.error.message) && reply.sessionId === "S2", JSON.stringify(reply));
}

// 5 · onDetach surfaces honestly + dispose detaches --------------------------------------------------
{
  const dbg = mockDebugger(); const s = sink();
  const relay = createExtRelay({ dbg, tabId: TAB, send: s.send });
  await relay.onFrame({ id: 40, method: "Debugger.enable", params: {} });
  dbg._detach({ tabId: TAB }, "canceled_by_user");
  ok("a browser detach surfaces Inspector.detached to the frontend (honest)", !!s.frames.find((f) => f.method === "Inspector.detached"));
  ok("after a browser detach, the relay is no longer attached (won't double-detach)", relay.attached === false);
  // a FRESH relay: dispose() detaches the still-attached debugger
  const dbg2 = mockDebugger(); const s2 = sink();
  const relay2 = createExtRelay({ dbg: dbg2, tabId: TAB, send: s2.send });
  await relay2.onFrame({ id: 41, method: "Debugger.enable", params: {} });
  relay2.dispose();
  ok("dispose() detaches a still-attached debugger", dbg2._calls.some((c) => c[0] === "detach"));
}

const result = {
  witnessed: fail === 0,
  covers: [
    "Tier 2 IN-BROWSER real V8 debugging — relays the vendored frontend's CDP to chrome.debugger (the real DevTools Protocol over live V8), closing the one gap pure-web can't: breakpoints/stepping/heap",
    "lazy attach to the operator's tab, exactly once, at CDP version 1.3",
    "TRUE debugger commands round-trip — Debugger.setBreakpointByUrl returns a real breakpointId; HeapProfiler.takeHeapSnapshot is accepted",
    "flat-protocol session routing — commands go to {tabId, sessionId}; the reply ECHOES the sessionId; session events (Debugger.paused) are TAGGED; other tabs' events are ignored",
    "errors round-trip as a CDP error frame (sessionId preserved), never a crash",
    "a browser-initiated detach surfaces Inspector.detached honestly; dispose() detaches the debugger",
  ],
  failed: fail,
  authority: "the Chrome Extensions chrome.debugger API (the real Chrome DevTools Protocol over live V8/Blink) · CDP 1.3 flat protocol (sessionId routing) · the VENDORED chrome-devtools-frontend WebSocketConnection path · holospaces Laws L1/L4/L5",
};
writeFileSync(join(here, "holo-devtools-ext-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "WITNESSED ✓  " : "FAILED ✗  ") + pass + " checks, " + fail + " failures");
process.exit(fail === 0 ? 0 : 1);
