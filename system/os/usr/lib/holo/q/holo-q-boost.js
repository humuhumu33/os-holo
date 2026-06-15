// holo-q-boost.js — BOOST, subsumed under the governed remote-model capability (ADR-0090). Boost is no
// longer a bare network call: it is the Anthropic specialization of the ONE witnessed egress operation.
// What changed vs the original (ADR-0087) raw-fetch global, and why it matters:
//   • the SSE shaping/parsing moved to holo-q-adapter.mjs (adapters.anthropic) — boost holds no fetch.
//   • the API key moved OFF window/the sampler INTO the broker VAULT (a closure-scoped Map) — the sampler
//     the page sees can no longer be read for the key (the boost "key visible to any script" hole, closed
//     in-frame; the cross-frame "app holds nothing" guarantee lands with the postMessage broker).
//   • every generation now passes the conscience EGRESS gate (PII/classified can't leave the device) and
//     mints a re-derivable InferenceReceipt κ (P2) — exposed on the sampler as `.lastReceipt`.
//
// The codegen seam is UNCHANGED: window.HoloBoost stays a sampler (messages, opts) → async-iterable of
// text deltas, and a boost build is still labeled mode "boost". shell.html needs no edit. HONEST COST is
// unchanged: a boost build is a network call (not serverless) and the key still lives in the browser —
// now CONTAINED host-side (vaulted, governed, receipted) rather than exposed on a global.

import { createRemoteBroker } from "./holo-q-remote.mjs";

const DEFAULT_BASE = "https://api.anthropic.com";
const DEFAULT_MODEL = "claude-opus-4-8";                            // most capable; user may override
const DEFAULT_APP = "did:holo:boost-local";                        // single-frame app identity (the host-asserted DID lands with the broker)

// createBoostSampler(cfg) → a brokered codegen sampler. Async: it registers the Anthropic engine in the
// broker vault and mints a capability grant before returning. Injected edges (fetchImpl · conscience ·
// clock) keep it pure/witnessable; the browser installer below wires the real window globals.
//   cfg: { apiKey, model?, maxTokens?, baseURL?, app?, scope?, broker?, fetchImpl, conscience, clock }
//   broker: an EXISTING host broker to register into (the shell's shared window.HoloQRemote — one vault
//     for the shell frame AND every iframe app). If omitted, a private broker is built from the injected
//     edges (the standalone/witness path). conscience: { evaluate, scanPii } — REQUIRED when building one.
export async function createBoostSampler({ apiKey, model = DEFAULT_MODEL, maxTokens = 4096, baseURL = DEFAULT_BASE, app = DEFAULT_APP, scope = {}, broker: injectedBroker = null, fetchImpl, conscience, clock } = {}) {
  if (!apiKey) throw new Error("createBoostSampler: apiKey required");
  if (!injectedBroker && (!conscience || typeof conscience.evaluate !== "function")) throw new Error("createBoostSampler: a conscience gate is required — egress is never ungoverned");
  const broker = injectedBroker || createRemoteBroker({ fetchImpl, conscience, clock });
  // the key + URL enter the VAULT here and never leave it; the app holds only the provider κ.
  const providerK = await broker.registerProvider({ wireFormat: "anthropic", modelId: model }, { base: baseURL, key: apiKey });
  await broker.requestCapability({ app, providerK, scope });

  // the sampler: bridge broker.infer (onDelta + a final receipt) into an async-iterable of text deltas.
  const sampler = (messages, opts = {}) => {
    const queue = []; let done = false, err = null, wake = null;
    const bump = () => { if (wake) { const w = wake; wake = null; w(); } };
    broker.infer({ app, providerK, messages, params: { maxTokens: opts.maxTokens || maxTokens, thinking: opts.thinking }, signal: opts.signal, onDelta: (t) => { queue.push(t); bump(); } })
      .then((res) => { sampler.lastReceipt = res.receipt || null; sampler.lastBlocked = !!res.blocked; sampler.lastVerdict = res.blocked ? res : (res.conscience || null); done = true; bump(); })
      .catch((e) => { err = e; done = true; bump(); });
    return (async function* () {
      for (;;) {
        if (queue.length) { yield queue.shift(); continue; }
        if (err) throw err;
        if (done) return;                                          // blocked ⇒ zero deltas ⇒ caller falls to device/template
        await new Promise((r) => { wake = r; });
      }
    })();
  };
  sampler.model = model;
  sampler.lastReceipt = null; sampler.lastBlocked = false; sampler.lastVerdict = null;
  sampler.revoke = () => broker.revoke(app, providerK);
  return sampler;
}

// installBoost(apiKey, opts) — set window.HoloBoost so Create's build flow uses the frontier model, now
// GOVERNED. Async (it mints the grant). Fail-closed: requires window.HoloConscience (no gate ⇒ no boost).
export async function installBoost(apiKey, opts = {}) {
  if (!apiKey || !/^sk-ant-/.test(String(apiKey))) throw new Error("HoloBoostInstall: a valid Anthropic key (sk-ant-…) is required — and note it lives in the browser; use a scoped, rate-limited key.");
  const g = (typeof window !== "undefined") ? window : globalThis;
  const C = g.HoloConscience;
  if (!C || typeof C.evaluate !== "function") throw new Error("HoloBoostInstall: the conscience gate (window.HoloConscience) is not present — boost egress is never ungoverned (fail-closed).");
  if (typeof C.verifyConstitution === "function" && !(C.sealed && C.sealed())) { try { await C.verifyConstitution(); } catch (e) {} }
  if (C.sealed && !C.sealed()) throw new Error("HoloBoostInstall: the conscience did not seal — refusing to enable ungoverned egress.");
  const sampler = await createBoostSampler({
    apiKey, model: opts.model || DEFAULT_MODEL, maxTokens: opts.maxTokens, baseURL: opts.baseURL, app: opts.app,
    broker: g.HoloQRemote || null,                          // prefer the shell's shared host broker (one vault); else a private one
    fetchImpl: (...a) => g.fetch(...a), conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock: () => new Date().toISOString(),
  });
  g.HoloBoost = sampler;
  g.HoloBoostInfo = { installed: true, model: sampler.model, note: "frontier model via the governed remote broker (ADR-0090) — vaulted key, conscience-gated egress, receipted; a boost build is a network call, not serverless" };
  return { installed: true, model: sampler.model };
}
export function uninstallBoost() {
  const g = (typeof window !== "undefined") ? window : globalThis;
  try { g.HoloBoost && g.HoloBoost.revoke && g.HoloBoost.revoke(); } catch (e) {}
  g.HoloBoost = null; g.HoloBoostInfo = { installed: false };
  return { installed: false };
}

// expose the installer on the page so a user (or a settings UI) can enable boost in one call.
if (typeof window !== "undefined") {
  window.HoloBoostInstall = installBoost;
  window.HoloBoostUninstall = uninstallBoost;
  if (!window.HoloBoostInfo) window.HoloBoostInfo = { installed: false };
}

export default { createBoostSampler, installBoost, uninstallBoost };
