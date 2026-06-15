// holo-devtools-serve.mjs — the SHELL-SIDE authority for Holo DevTools (ADR-0095, Bet A). The twin of
// HoloQServe / HoloQRemoteServe: holo-gov.js brokers a `holo-privacy:rpc` with method:"cdp" coming from the
// DevTools holospace frame, asserts the caller's identity un-forgeably (byWin), and hands it here. We wrap
// the pure κ-CDP backend (createDevToolsBackend) and answer one CDP frame per call. ONE branch added to the
// broker, nothing else — the design's "holo-gov.js gains ONE branch" claim, realized.
//
// Wiring (in the shell, once): window.HoloDevToolsServe = createDevToolsServe({ store, scene, conscience, qAgent });
// and in holo-gov.js onMessage:  if (d.method === "cdp") { ... return reply(await HoloDevToolsServe({app, method:d.method, args:d.args, onDelta})) }
//
// Read-through-κ inspection of the caller's OWN scene is sovereign (re-derivation, Law L5); Runtime.evaluate +
// mutation are fail-closed through the conscience the backend already enforces (Law L4). An ungoverned frame
// (no host-asserted app) is refused upstream by holo-gov.js, exactly like the Q doors.

import { createDevToolsBackend } from "./holo-devtools-backend.mjs";

// createDevToolsServe(opts) → an async serve({ app, method, args, onDelta }) the broker calls.
// opts are the backend's: { store, scene, resolve, verifyDeep, conscience, qAgent, now }.
export function createDevToolsServe(opts = {}) {
  const backend = createDevToolsBackend(opts);

  async function serve({ app, method, args = {}, onEvent = null } = {}) {
    const caller = app || "frame";
    if (method !== "cdp") return { error: "unsupported method: " + method };
    const cdp = args && args.cdp;
    if (!cdp || typeof cdp.method !== "string") return { error: "malformed cdp frame" };
    // FLAT-PROTOCOL session routing — a command bearing a sessionId is a PAGE-session command; its response
    // AND every event it triggers must carry that same sessionId, or the frontend's page session never
    // resolves them and the Elements tree stays blank (confirmed against real Chromium). Same fix the live
    // tier carries; required for the vendored frontend to paint over the bridge.
    const sid = cdp.sessionId || null;
    const sessionOnEvent = (typeof onEvent === "function") ? (ev) => onEvent(sid ? { ...ev, sessionId: sid } : ev) : null;
    try {
      const out = backend.serve(cdp, { caller, onEvent: sessionOnEvent });   // { id, result }
      const reply = out && typeof out.then === "function" ? await out : out;
      if (sid && reply && typeof reply === "object") reply.sessionId = sid;   // echo sessionId on the response
      return { result: reply };                              // the broker posts this back as the rpc reply
    } catch (e) {
      return { error: String((e && e.message) || e) };
    }
  }

  // expose the backend so the shell can re-point the inspected scene (setScene) on focus change.
  serve.backend = backend;
  serve.setScene = (s) => backend.setScene(s);
  return serve;
}

export default { createDevToolsServe };
