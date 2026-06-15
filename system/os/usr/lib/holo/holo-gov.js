// holo-gov.js — HOST governance: surface + ENFORCE Holo Terms and Holo Privacy for every mounted
// holospace, at the ONE host that mounts them. Drop-in (host frame only):
//
//   <script src="_shared/holo-terms.js"></script>
//   <script src="_shared/holo-privacy.js"></script>
//   <script src="_shared/holo-gov.js"></script>      (exposes window.HoloGov)
//
// Why a HOST module, not a per-app one: an app is governed because the HOST is governed — not because
// it opts in. This is the same shape as the capability gate. Holo Terms is enforced at the door
// (holo-launch.mount clamps the iframe sandbox to declared ∩ granted). Holo Privacy is enforced here:
// the host owns the wallet + keys; an app frame holds NOTHING; the only way to mint a disclosure is to
// ask the host, which re-stamps the recipient from what it actually mounted (un-forgeable) and gates
// under the user's standing stance (default-deny). Both are then SURFACED as one shield per focused
// app — Terms (left) + Privacy (right) — so silent enforcement becomes visible. Universal by
// construction: a witness proves the host carries this, so no app can be an ungoverned island.
//
// Two roles:
//   • register(frameWindow, app) — the mount path records the verified identity {did,id,name} of what
//     it spawned into a given iframe window. The privacy broker trusts THIS, never the app's claim.
//   • focus(app) — the host tells the shields which app is in front, so they show that app's grants.

(function () {
  "use strict";
  const W = typeof window !== "undefined" ? window : globalThis;
  if (W.HoloGov) return;
  if (typeof document === "undefined") return;

  // contentWindow → the host-asserted identity of the app mounted in it. WeakMap so it clears with the
  // frame; keyed by window REFERENCE (not origin) so it also covers sandboxed frames whose origin is
  // "null". An unregistered source ⇒ ungoverned ⇒ default-deny.
  const byWin = new WeakMap();
  let _active = null;

  function register(frameWindow, app) { if (frameWindow && app) byWin.set(frameWindow, app); }
  function focus(app) {
    _active = app || null;
    try { W.HoloTerms && W.HoloTerms.setActiveApp(_active); } catch (e) {}
    try { W.HoloPrivacy && W.HoloPrivacy.setActiveApp(_active); } catch (e) {}
  }

  // ── the Privacy BROKER — the host gate an app frame reaches over postMessage ───────────────────
  // The host is the broker: a mounted app posts {type:"holo-privacy:rpc", method, args}; the host runs
  // HoloPrivacy under the user's stance and replies with the MINIMAL result (a Verifiable Presentation
  // or null). The recipient is taken from what the host mounted (byWin), so an app can never disclose
  // AS someone else, nor reach the wallet/keys (they never leave this frame). Fail-closed throughout.
  async function onMessage(e) {
    const d = e.data; if (!d || d.type !== "holo-privacy:rpc") return;
    const reply = (result, error) => { try { e.source && e.source.postMessage({ type: "holo-privacy:res", id: d.id, result: result == null ? null : result, error: error || null }, "*"); } catch (x) {} };
    const app = byWin.get(e.source);                       // host-asserted identity of the requester
    if (!app) return reply(null, "ungoverned frame");      // unknown frame ⇒ default-deny
    try {
      // ── the remote-model capability (ADR-0090): delegate to the host broker (W.HoloQRemoteServe),
      // streaming text deltas back as they arrive. The host asserts the app id (above); the key/URL never
      // leave the host. Fail-closed: no broker installed ⇒ refuse. Same un-forgeable shape as `gate`.
      if (d.method && d.method.indexOf("q.remote.") === 0) {
        if (typeof W.HoloQRemoteServe !== "function") return reply(null, "no remote authority");
        const onDelta = (t) => { try { e.source && e.source.postMessage({ type: "holo-privacy:delta", id: d.id, delta: t }, "*"); } catch (x) {} };
        const out = await W.HoloQRemoteServe({ app: app.did || app.id || app.name, method: d.method, args: d.args || {}, onDelta });
        return reply((out && out.result != null) ? out.result : null, (out && out.error) || null);
      }
      // ── Ambient Q from INSIDE an app (ADR-0091 cross-frame): delegate q.summon/q.ask/q.create to the
      // host Q server (W.HoloQServe). The host asserts the app id (byWin, above); q.create rides Q's
      // GOVERNED door (fail-closed + receipted) so an app can't silently act as the user. Fail-closed:
      // no Q authority installed ⇒ refuse.
      if (d.method === "q.summon" || d.method === "q.ask" || d.method === "q.create" || d.method === "q.act") {
        if (typeof W.HoloQServe !== "function") return reply(null, "no Q authority");
        const onDelta = (t) => { try { e.source && e.source.postMessage({ type: "holo-privacy:delta", id: d.id, delta: t }, "*"); } catch (x) {} };
        const out = await W.HoloQServe({ app: app.did || app.id || app.name, method: d.method, args: d.args || {}, onDelta });
        return reply((out && out.result != null) ? out.result : null, (out && out.error) || null);
      }
      // ── Holo DevTools (ADR-0095): the human DevTools holospace frame speaks CDP over this same bus
      // (method:"cdp"). Delegate to the host κ-CDP backend (W.HoloDevToolsServe), streaming CDP events
      // back as deltas. The host asserts the app id (byWin, above) — CDP is the human door's PRIVATE
      // transport, never reached by agents/Q (they use the W3C MCP/REST doors). Fail-closed: no DevTools
      // authority installed ⇒ refuse. Same un-forgeable shape as q.summon/q.remote.*.
      if (d.method === "cdp") {
        if (typeof W.HoloDevToolsServe !== "function") return reply(null, "no devtools authority");
        const onDelta = (t) => { try { e.source && e.source.postMessage({ type: "holo-privacy:delta", id: d.id, delta: t }, "*"); } catch (x) {} };
        const out = await W.HoloDevToolsServe({ app: app.did || app.id || app.name, method: d.method, args: d.args || {}, onEvent: onDelta });
        return reply((out && out.result != null) ? out.result : null, (out && out.error) || null);
      }
      if (!W.HoloPrivacy) return reply(null, "no privacy authority");
      if (d.method === "status") return reply(W.HoloPrivacy.status ? W.HoloPrivacy.status() : null);
      if (d.method === "gate") {
        // un-forgeable recipient: override whatever the app put in the request body.
        const request = Object.assign({}, d.args || {}, { recipient: app.did || app.id || app.name });
        const out = await W.HoloPrivacy.gate(request);
        return reply(out);
      }
      return reply(null, "unsupported method: " + d.method);
    } catch (err) { return reply(null, String((err && err.message) || err)); }
  }
  W.addEventListener("message", onMessage);

  W.HoloGov = { register, focus, active: () => _active };
})();
