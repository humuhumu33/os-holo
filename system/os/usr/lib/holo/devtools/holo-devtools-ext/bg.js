// bg.js — the Holo DevTools extension background service worker (ADR-0095, Tier 2). The ONLY first-party
// glue: it wraps the REAL Chrome DevTools Protocol (chrome.debugger) in the dbg-shaped API the pure relay
// (relay.mjs) expects, and binds one relay per connected DevTools frame (a long-lived Port). The relay does
// all the routing; this just adapts callback-style chrome.debugger to promises. 100% in-browser — this is
// how true V8 debugging (breakpoints/stepping/heap) reaches the vendored frontend with no native host.

import { createExtRelay } from "./relay.mjs";

// chrome.debugger (callbacks) → the dbg API the relay expects (promises). CDP is the human door's PRIVATE
// transport (§7 T1): we only ever attach to the tab that connected (the operator's own holospace).
const dbgApi = {
  sendCommand: (target, method, params) => new Promise((resolve, reject) => {
    chrome.debugger.sendCommand(target, method, params || {}, (res) => {
      const err = chrome.runtime.lastError;
      if (err) reject(new Error(err.message)); else resolve(res || {});
    });
  }),
  attach: (tabId, version) => new Promise((resolve, reject) => {
    chrome.debugger.attach({ tabId }, version || "1.3", () => {
      const err = chrome.runtime.lastError;
      if (err && !/already attached/i.test(err.message)) reject(new Error(err.message)); else resolve();   // idempotent
    });
  }),
  detach: (tabId) => { try { chrome.debugger.detach({ tabId }); } catch (e) {} },
  onEvent: (cb) => chrome.debugger.onEvent.addListener(cb),
  removeEvent: (cb) => chrome.debugger.onEvent.removeListener(cb),
  onDetach: (cb) => chrome.debugger.onDetach.addListener(cb),
};

// one DevTools frame = one Port = one relay, bound to that frame's TAB (the whole tab, incl. its holospace
// iframes — the frame tree shows them). The relay attaches lazily on the first CDP frame.
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "holo-devtools-ext") return;
  const tabId = port.sender && port.sender.tab && port.sender.tab.id;
  if (tabId == null) { port.disconnect(); return; }
  const relay = createExtRelay({ dbg: dbgApi, tabId, send: (frame) => { try { port.postMessage(frame); } catch (e) {} } });
  port.onMessage.addListener((frame) => { try { relay.onFrame(frame); } catch (e) {} });
  port.onDisconnect.addListener(() => relay.dispose());
});
