// holo-devtools-host.mjs — the IN-FRAME embedder shim for the vendored Chrome devtools-frontend (ADR-0095,
// Bet A). devtools-frontend is a CDP client that talks to its embedder through ONE seam, confirmed against
// the vendored source:
//   • OUT: MainConnection.sendRawMessage → Host.InspectorFrontendHost.InspectorFrontendHostInstance
//          .sendMessageToBackend(message)            (front_end/core/sdk/Connections.ts:47)
//   • IN:  MainConnection subscribes to the host `events` emitter for DispatchMessage / DispatchMessageChunk
//          and delivers event.data to the protocol layer   (Connections.ts:30-32, 52-53;
//          front_end/core/host/InspectorFrontendHostAPI.ts:23-24 Events.DispatchMessage='dispatchMessage')
//
// So binding devtools to the κ-substrate needs NO fork of the UI: we install a `globalThis.InspectorFrontendHost`
// whose sendMessageToBackend forwards each CDP frame over the EXISTING Q cross-frame bus (holo-privacy:rpc,
// method:"cdp" — brokered by holo-gov.js exactly like q.summon/q.remote.*) to HoloDevToolsServe (the κ-CDP
// backend), and whose `events` emitter re-delivers the reply as a DispatchMessage. CDP stays the human door's
// PRIVATE transport (ADR-0095 §7 T1) — this shim lives only inside the DevTools holospace frame.
//
// Pure + transport-injected: the browser passes an rpc() that postMessages window.parent; the witness passes
// a mock bus. Identical logic both ways (the Atlas-isomorphism discipline).

// A minimal Common.ObjectWrapper-shaped emitter: addEventListener(type, handler, thisObj) and
// dispatchEventToListeners(type, data) → handler.call(thisObj, { data }). This is exactly the contract
// MainConnection relies on (it reads event.data).
function makeEvents() {
  const listeners = new Map();   // type -> Set<{handler, thisObj}>
  return {
    addEventListener(type, handler, thisObj) {
      if (!listeners.has(type)) listeners.set(type, new Set());
      const rec = { handler, thisObj };
      listeners.get(type).add(rec);
      return rec;
    },
    removeEventListener(type, handler, thisObj) {
      const set = listeners.get(type); if (!set) return;
      for (const rec of set) if (rec.handler === handler && rec.thisObj === thisObj) set.delete(rec);
    },
    dispatchEventToListeners(type, data) {
      const set = listeners.get(type); if (!set) return;
      for (const { handler, thisObj } of [...set]) { try { handler.call(thisObj, { data }); } catch (e) {} }
    },
  };
}

// createHoloDevToolsHost({ rpc }) → the InspectorFrontendHost-shaped embedder object devtools-frontend boots
// against. `rpc(method, args, onDelta) → Promise<reply>` is the transport (cross-frame in the browser, a mock
// in the witness). Only the surface the connection path touches is implemented; everything else is a safe stub
// (devtools degrades gracefully on unknown host calls).
export function createHoloDevToolsHost({ rpc } = {}) {
  if (typeof rpc !== "function") throw new Error("createHoloDevToolsHost: an rpc(method,args,onDelta) transport is required");
  const events = makeEvents();
  const DISPATCH = "dispatchMessage";   // Events.DispatchMessage (InspectorFrontendHostAPI.ts)

  const host = {
    events,

    // ── the OUT seam — every CDP frame the frontend sends rides the governed bus to the κ backend ──
    sendMessageToBackend(message) {
      const cdp = typeof message === "string" ? JSON.parse(message) : message;
      // onDelta delivers CDP EVENTS (method notifications) as they stream; both replies and events are
      // re-delivered to the frontend as DispatchMessage (a CDP frame is a CDP frame).
      rpc("cdp", { cdp }, (delta) => events.dispatchEventToListeners(DISPATCH, typeof delta === "string" ? delta : JSON.stringify(delta)))
        .then((reply) => { if (reply !== undefined && reply !== null) events.dispatchEventToListeners(DISPATCH, typeof reply === "string" ? reply : JSON.stringify(reply)); })
        .catch((err) => events.dispatchEventToListeners(DISPATCH, JSON.stringify({ id: cdp && cdp.id, error: { message: String((err && err.message) || err) } })));
    },

    // ── boot stubs the connection path / shell touch — kept honest + inert ──
    connectionReady() {},                       // Connections.ts:221
    isHostedMode() { return false; },           // false ⇒ use MainConnection (our seam), not the ?ws= path
    setInspectedTabId() {},
    getPreferences(cb) { try { cb({}); } catch (e) {} },
    getHostConfig(cb) { try { cb({}); } catch (e) {} },
    recordEnumeratedHistogram() {}, recordImpression() {}, recordCounted() {},
    bringToFront() {}, inspectElementCompleted() {}, sendMessageToEmbedder() {},
    // identity, for the receipt trail (the substrate, not Chrome, owns this)
    holo: { door: "human", transport: "holo-privacy:rpc#cdp" },
  };

  // Be a COMPLETE embedder: devtools calls many optional host methods (recordClick/recordHover/…
  // setChromeFlag/requestRestart/…). Any we don't explicitly implement is a safe no-op — so devtools
  // stops warning "Incompatible embedder" and no telemetry/lifecycle call can throw. The explicit methods
  // above (sendMessageToBackend, events, isHostedMode, getPreferences, …) keep their real behaviour.
  return new Proxy(host, {
    get(target, prop) {
      if (prop in target) return target[prop];
      if (typeof prop === "symbol") return undefined;
      return () => undefined;                 // unknown host method → no-op (void)
    },
    has() { return true; },                   // every host method "exists" (clean embedder)
  });
}

// installHoloDevToolsHost({ rpc }) — set globalThis.InspectorFrontendHost BEFORE the devtools bundle loads,
// so MainConnection picks up our embedder instead of the hosted-mode stub. Returns the host (for the witness).
export function installHoloDevToolsHost(opts = {}) {
  const host = createHoloDevToolsHost(opts);
  if (typeof globalThis !== "undefined") globalThis.InspectorFrontendHost = host;
  return host;
}

export default { createHoloDevToolsHost, installHoloDevToolsHost };
