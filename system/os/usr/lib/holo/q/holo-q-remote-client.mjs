// holo-q-remote-client.mjs — the APP-SIDE client for the remote-model capability (ADR-0090). A sandboxed
// holospace imports this to reach the host broker over the SAME `holo-privacy:rpc` channel holo-gov.js
// already brokers — so a non-local LLM is reached WITHOUT the app holding a key, a URL, or doing fetch.
// The app holds only a provider κ {wireFormat,modelId}; the host (un-forgeably identifying the frame via
// byWin) gates, streams, and mints the receipt. This is the cross-frame realization of "the app frame
// holds NOTHING" (the same shape as Holo Privacy disclosures).
//
// Protocol (app → host over postMessage):
//   { type:"holo-privacy:rpc", method:"q.remote.cap"|"q.remote.infer"|"q.remote.providers", args, id }
// Host → app:
//   { type:"holo-privacy:delta", id, delta }      (zero-or-more, streamed text)
//   { type:"holo-privacy:res",   id, result, error }   (one final)
//
// Pure + injectable (source/target windows), so the full round-trip is witnessed in Node with a mock bus.

const RPC = "holo-privacy:rpc", RES = "holo-privacy:res", DELTA = "holo-privacy:delta";

// createRemoteClient({ target?, source? }) → { requestCapability, infer, providers, model }. `target` is
// the host window to post to (default window.parent); `source` is where replies arrive (default window).
export function createRemoteClient({ target, source } = {}) {
  const tgt = target || (typeof window !== "undefined" ? window.parent : null);
  const src = source || (typeof window !== "undefined" ? window : null);
  if (!tgt || !src) throw new Error("createRemoteClient: target + source windows are required");

  const pending = new Map();          // id → { resolve, reject, onDelta }
  let _seq = 0;
  const nextId = () => "qr-" + (++_seq);

  src.addEventListener("message", (e) => {
    const d = e && e.data; if (!d || (d.type !== RES && d.type !== DELTA)) return;
    const p = pending.get(d.id); if (!p) return;
    if (d.type === DELTA) { if (p.onDelta) { try { p.onDelta(d.delta); } catch (x) {} } return; }
    pending.delete(d.id);
    if (d.error) p.reject(new Error(d.error)); else p.resolve(d.result);
  });

  const call = (method, args, onDelta) => new Promise((resolve, reject) => {
    const id = nextId();
    pending.set(id, { resolve, reject, onDelta });
    try { tgt.postMessage({ type: RPC, method, args: args || {}, id }, "*"); }
    catch (err) { pending.delete(id); reject(err); }
  });

  return {
    // providers() → [{ providerK, wireFormat, modelId }] — discovery, no secrets.
    providers: () => call("q.remote.providers"),
    // requestCapability({ providerK, scope }) → grant | null.
    requestCapability: ({ providerK, scope } = {}) => call("q.remote.cap", { providerK, scope }),
    // infer({ providerK, messages, params, onDelta }) → { receipt, response, responseKappa, conscience }
    //   | { blocked, outcome, blocked_by }. Streams text via onDelta; the final result carries the receipt
    //   κ. No key/url ever crosses the bus.
    infer: ({ providerK, messages, params, onDelta } = {}) => call("q.remote.infer", { providerK, messages, params }, onDelta),
  };
}

export default { createRemoteClient };
