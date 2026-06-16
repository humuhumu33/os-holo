// holo-q-remote-provider.mjs — the MISSING WIRE (ADR-0102): wrap a governed remote model (the ADR-0090
// broker) as a fabric-compatible provider, so a remote answer rides the SAME κ-memo fabric every local
// specialist rides (holo-q-fabric.js, ADR-0084). This is the whole magic: the fabric keys on
// κ(task ⊕ provider.id ⊕ input ⊕ params), so an identical prompt to the SAME OpenRouter model is an O(1)
// hot/durable hit — ZERO network, ZERO cost on a repeat. You pay the frontier model ONCE, ever, for a
// given question; near-repeats in Q.fuse leave the unchanged remote slot a cache hit. Over time the box
// gets cheaper AND more private (a memo'd answer never re-egresses).
//
// What this is NOT (honest, the describe() discipline): it is not "blind / zero-knowledge inference" — the
// provider still sees what the conscience egress gate lets leave. The privacy wins are real but bounded:
// PII is hard-blocked before a byte leaves (P5), only minimal claims need leave (the holo-zk selective-
// disclosure envelope a caller may build), and the κ-memo means repeats never re-egress. Blind compute
// (FHE / ZKML / TEE-attested) is a future axis — when a provider returns an attestation it is pinned into
// the receipt, never assumed. A remote call is governed egress, not serverless (the ADR-0090 trade).
//
// Pure, deps-injected → Node-witnessed. The browser installer (installOpenRouter) wires the real globals.

// makeRemoteProvider({ broker, app, providerK, id }) → a fabric provider { id, remote:true, generate }.
// `generate(input, opts)` yields plain text deltas (the contract holo-q-fabric.run expects from a
// generative provider) by driving broker.infer — which STILL runs the conscience egress gate and mints
// the mandatory InferenceReceipt (P2). The receipt is exposed on the provider as `.lastReceipt`, exactly
// like boost's sampler.lastReceipt. `remote:true` marks it a governed frontier slot, so Q.fuse seals
// tier "hybrid" (holo-q-fuse.js derives the tier from any member.remote).
export function makeRemoteProvider({ broker, app, providerK, id = "openrouter" } = {}) {
  if (!broker || !app || !providerK) throw new Error("makeRemoteProvider: { broker, app, providerK } are required");
  const provider = {
    id,
    remote: true,
    lastReceipt: null, lastBlocked: false, lastVerdict: null,
    generate: async function* (input, opts = {}) {
      // input is usually a built prompt string (a fuse panel/judge/synth prompt); a caller may instead
      // pass { messages } in opts for a multi-turn shape. The system/persona, if any, is the caller's job.
      const user = typeof input === "string" ? input : (input && (input.text || input.prompt || input.input)) || "";
      const messages = Array.isArray(opts.messages) ? opts.messages : [{ role: "user", content: user }];
      const params = opts.params || (opts.maxTokens ? { maxTokens: opts.maxTokens } : {});
      const queue = []; let done = false, err = null, wake = null;
      const bump = () => { if (wake) { const w = wake; wake = null; w(); } };
      broker.infer({ app, providerK, messages, params, signal: opts.signal, onDelta: (t) => { queue.push(t); bump(); } })
        .then((res) => {
          provider.lastReceipt = (res && res.receipt) || null;
          provider.lastBlocked = !!(res && res.blocked);
          provider.lastVerdict = (res && res.blocked) ? res : ((res && res.conscience) || null);
          done = true; bump();
        })
        .catch((e) => { err = e; done = true; bump(); });
      for (;;) {
        if (queue.length) { yield queue.shift(); continue; }
        if (err) throw err;
        if (done) return;                              // blocked ⇒ zero deltas ⇒ the leg seals an empty answer
        await new Promise((r) => { wake = r; });
      }
    },
  };
  return provider;
}

import { fetchCatalog, searchCatalog } from "./holo-q-openrouter-catalog.mjs";

const DEFAULT_BASE = "https://openrouter.ai/api/v1";
const DEFAULT_APP = "did:holo:openrouter-local";

// ── the CONTROLLER (ADR-0102 "select any model via a toggle") — stateful, deps-injected → Node-witnessed.
//    Holds the vaulted base/key in a CLOSURE (never exposed), the current model, and the live Q.fuse slot.
//    Three seamless verbs, none needing a reload:
//      listModels(query?)  → the live OpenRouter catalog (public GET, no key), searchable
//      setModel(slug)       → re-register a NEW {wireFormat,modelId} κ + re-wire the ONE hybrid slot
//      setEnabled(on)       → the TOGGLE: on ⇒ add the slot to Q.fuse · off ⇒ restore the 100%-local panel
//    `panelOps` (withRemoteMember/withoutRemoteMember) is injected so the wiring is witnessed without a DOM.
export function createOpenRouterController({ broker, app = DEFAULT_APP, base = DEFAULT_BASE, key, fetchImpl, Q = null, fabric = null, panelOps = null } = {}) {
  if (!broker) throw new Error("createOpenRouterController: a broker is required");
  if (!key) throw new Error("createOpenRouterController: an OpenRouter key is required (it stays vaulted in this closure)");
  const st = { enabled: false, model: null, providerK: null, provider: null };

  async function _panel() { return panelOps || await import("./holo-q-fuse-panel.js"); }

  // (re)register the engine — a new modelId is a new descriptor κ; the vaulted base/key are unchanged.
  async function _register(slug) {
    if (st.providerK) { try { broker.revoke(app, st.providerK); } catch (e) {} }
    const providerK = await broker.registerProvider({ wireFormat: "openrouter", modelId: slug }, { base, key });
    await broker.requestCapability({ app, providerK, scope: {} });
    st.model = slug; st.providerK = providerK;
    st.provider = makeRemoteProvider({ broker, app, providerK, id: "openrouter·" + slug });
    return st.provider;
  }

  async function setModel(slug) {
    if (!slug) throw new Error("setModel: a model slug is required");
    const provider = await _register(slug);
    let wired = false;
    if (st.enabled && Q) { const P = await _panel(); P.withRemoteMember(Q, provider, { fabric }); wired = true; }
    return { ok: true, model: slug, providerK: st.providerK, wired };
  }

  async function setEnabled(on) {
    st.enabled = !!on;
    if (!Q) return { ok: true, enabled: st.enabled, wired: false };
    const P = await _panel();
    if (st.enabled) { if (!st.provider) return { ok: false, reason: "no model selected — call setModel(slug) first" }; P.withRemoteMember(Q, st.provider, { fabric }); }
    else { P.withoutRemoteMember(Q, { fabric }); }
    return { ok: true, enabled: st.enabled, wired: st.enabled };
  }

  async function listModels(query = "", o = {}) { return searchCatalog(await fetchCatalog(fetchImpl, { base }), query, o); }
  function status() { return { enabled: st.enabled, model: st.model, providerK: st.providerK }; }
  function revoke() { if (st.providerK) { try { broker.revoke(app, st.providerK); } catch (e) {} } }

  return { setModel, setEnabled, listModels, status, revoke,
    get provider() { return st.provider; }, get providerK() { return st.providerK; }, get model() { return st.model; }, get enabled() { return st.enabled; } };
}

// ── browser installer — build the controller over the shell's SHARED host broker (one vault), select an
//    initial model, and (optionally) toggle it ON. Fail-closed: the conscience must be present + sealed.
export async function installOpenRouter(apiKey, opts = {}) {
  const g = (typeof window !== "undefined") ? window : globalThis;
  if (!apiKey) throw new Error("installOpenRouter: an OpenRouter API key (sk-or-…) is required — and note it lives in the browser; use a scoped, rate-limited key.");
  const C = g.HoloConscience;
  if (!C || typeof C.evaluate !== "function") throw new Error("installOpenRouter: the conscience gate (window.HoloConscience) is not present — remote egress is never ungoverned (fail-closed).");
  if (typeof C.verifyConstitution === "function" && C.sealed && !C.sealed()) { try { await C.verifyConstitution(); } catch (e) {} }
  if (C.sealed && !C.sealed()) throw new Error("installOpenRouter: the conscience did not seal — refusing to enable ungoverned egress.");

  const base = opts.baseURL || DEFAULT_BASE;
  const app = opts.app || DEFAULT_APP;
  const fetchImpl = opts.fetchImpl || ((...a) => g.fetch(...a));

  let broker = g.HoloQRemote;
  if (!broker) {
    const { createRemoteBroker } = await import("./holo-q-remote.mjs");
    broker = createRemoteBroker({ fetchImpl, conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock: () => new Date().toISOString() });
  }

  const ctl = createOpenRouterController({ broker, app, base, key: apiKey, fetchImpl, Q: (g.Q && typeof g.Q.configureFuse === "function") ? g.Q : null, fabric: opts.fabric || null });
  await ctl.setModel(opts.model || "openai/gpt-4o-mini");      // a slug the host chooses; never the brain by default
  if (opts.wireFuse) await ctl.setEnabled(true);              // the toggle defaults OFF — opt-in per call

  g.HoloOpenRouter = ctl;
  g.HoloOpenRouterInfo = { installed: true, model: ctl.model, enabled: ctl.enabled, note: "select ANY OpenRouter model via the toggle (ADR-0090/0102) — vaulted key, conscience-gated egress, κ-memoized (pay-once), receipted with the routed model/cost; a remote call is a network call, not serverless." };
  return { installed: true, model: ctl.model, providerK: ctl.providerK, enabled: ctl.enabled };
}

export function uninstallOpenRouter() {
  const g = (typeof window !== "undefined") ? window : globalThis;
  try { if (g.HoloOpenRouter) { if (typeof g.HoloOpenRouter.setEnabled === "function") g.HoloOpenRouter.setEnabled(false); g.HoloOpenRouter.revoke && g.HoloOpenRouter.revoke(); } } catch (e) {}
  g.HoloOpenRouter = null; g.HoloOpenRouterInfo = { installed: false };
  return { installed: false };
}

if (typeof window !== "undefined") {
  window.HoloOpenRouterInstall = installOpenRouter;
  window.HoloOpenRouterUninstall = uninstallOpenRouter;
  if (!window.HoloOpenRouterInfo) window.HoloOpenRouterInfo = { installed: false };
}

export default { makeRemoteProvider, createOpenRouterController, installOpenRouter, uninstallOpenRouter };
