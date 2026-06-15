// holo-devtools-ext-relay.mjs — the PURE CDP ⇄ chrome.debugger relay (ADR-0095, Tier 2). This is the one
// thing pure-web reflection (Tier 1) can't do: TRUE V8 debugging — live breakpoints, stepping, scope, and
// heap snapshots — because no web API exposes the debugger. A browser EXTENSION can: chrome.debugger IS the
// real Chrome DevTools Protocol over the live V8/Blink backend. So Tier 2 closes the gap IN-BROWSER (no
// native app): the SAME vendored devtools-frontend, the SAME fake-WebSocket bridge, but the bridge routes to
// chrome.debugger instead of the κ backend. The frontend gets genuine F12 of the live tab.
//
// This module is the LOAD-BEARING, testable half — a pure relay with chrome.debugger INJECTED, so the
// background service worker passes the real API and the witness passes a mock (the Atlas-isomorphism
// discipline, identical logic both ways). It faithfully carries the FLAT PROTOCOL: a command bearing a
// sessionId is sent to that session ({tabId, sessionId}); the reply echoes the sessionId; an event from a
// session is tagged with it — the exact routing the frontend's WebSocketConnection expects (the same fix
// Tier 1 carries, here delegated to chrome.debugger which already speaks it).
//
// Honest scope: the debugger/heap data IS real V8 (not κ-objects) — true debugging needs the real backend.
// The κ-substrate anchoring stays on the EDIT layer (liveEdit), which the shell still drives; this tier adds
// the one capability the substrate cannot synthesize. CDP stays the human door's PRIVATE transport (§7 T1):
// the extension only attaches to the OPERATOR's own holospace tab, on explicit opt-in.

// createExtRelay({ dbg, tabId, send }) → { onFrame, dispose }
//   dbg.sendCommand(target, method, params) -> Promise<result>  (target = {tabId} | {tabId, sessionId})
//   dbg.attach(tabId) -> Promise            dbg.detach(tabId) -> Promise|void
//   dbg.onEvent((source, method, params) => …)   source = { tabId, sessionId? }
//   send(frame)  -> deliver a CDP frame (reply or event) back to the devtools-frontend
export function createExtRelay({ dbg, tabId, send, version = "1.3" } = {}) {
  if (!dbg || typeof dbg.sendCommand !== "function") throw new Error("createExtRelay: a chrome.debugger-shaped `dbg` is required");
  if (typeof send !== "function") throw new Error("createExtRelay: a send(frame) sink is required");

  let attached = false;
  let attaching = null;

  // chrome.debugger EVENTS → CDP frames the frontend renders. Tag with the source session (flat protocol).
  const handleEvent = (source, method, params) => {
    if (!source || source.tabId !== tabId) return;     // ignore other tabs' targets
    send(source.sessionId ? { method, params, sessionId: source.sessionId } : { method, params });
  };
  if (typeof dbg.onEvent === "function") dbg.onEvent(handleEvent);

  // chrome.debugger DETACH (the browser revoked the session, e.g. devtools opened, tab navigated) → tell the
  // frontend honestly so it shows "disconnected" rather than hanging.
  if (typeof dbg.onDetach === "function") dbg.onDetach((source, reason) => {
    if (!source || source.tabId !== tabId) return;
    attached = false; attaching = null;
    send({ method: "Inspector.detached", params: { reason: String(reason || "target_closed") } });
  });

  async function ensureAttached() {
    if (attached) return;
    if (!attaching) attaching = Promise.resolve(dbg.attach(tabId, version)).then(() => { attached = true; attaching = null; }, (e) => { attaching = null; throw e; });
    return attaching;
  }

  // a CDP frame FROM the frontend → chrome.debugger.sendCommand on the right session; reply echoes sessionId.
  async function onFrame(frame) {
    if (!frame || typeof frame.method !== "string") return;
    const sid = frame.sessionId || null;
    const tag = sid ? { sessionId: sid } : {};
    try {
      await ensureAttached();
      const target = sid ? { tabId, sessionId: sid } : { tabId };
      const result = await dbg.sendCommand(target, frame.method, frame.params || {});
      send({ id: frame.id, result: result || {}, ...tag });
    } catch (e) {
      send({ id: frame.id, error: { code: -32000, message: String((e && e.message) || e) }, ...tag });
    }
  }

  function dispose() {
    if (typeof dbg.removeEvent === "function") try { dbg.removeEvent(handleEvent); } catch (e) {}
    if (attached && typeof dbg.detach === "function") try { dbg.detach(tabId); } catch (e) {}
    attached = false; attaching = null;
  }

  return { onFrame, dispose, get attached() { return attached; } };
}

export default { createExtRelay };
