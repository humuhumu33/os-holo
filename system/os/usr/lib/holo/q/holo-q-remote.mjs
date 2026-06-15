// holo-q-remote.mjs — the HOST broker for the remote-model capability (ADR-0090): the governed,
// witnessed, provider-agnostic generalization of holo-q-boost.js. It is the ONE place a non-local LLM
// is reached, and it turns that reach into a single substrate operation (Law L4) that yields a κ.
//
// What the host owns and an app frame NEVER sees (the boost key-in-the-page hole, closed):
//   • the VAULT — endpoint URL + API key, bound to a provider-descriptor κ, never content-addressed,
//     never witnessed, never posted to an app. The app holds only the provider κ {wireFormat, modelId}.
//   • the GRANTS — per (app, provider) capability tokens, default-deny, scoped, revocable.
//   • the EGRESS GATE — the conscience (ADR-0033) runs on the OUTGOING prompt; P5/P6 red lines HARD
//     BLOCK PII / classified leaving the device; no grant ⇒ breachesConsent ⇒ block.
//   • the RECEIPT — every admitted answer mints a mandatory InferenceReceipt κ (P2 duty).
//
// Pure core + injected edges (fetchImpl · conscience · clock), so the whole seam is witnessed in Node
// with a mock fetch and the real conscience — no browser, no network. The thin postMessage wiring onto
// holo-gov.js's `holo-privacy:rpc` broker (via serveRpc → window.HoloQRemoteServe) is landed; the shell
// installs ONE broker so the shell frame and every iframe app share a single governed vault.

import { pick, decodeLine } from "./holo-q-adapter.mjs";
import { mintReceipt, verifyReceipt, responseKappa, requestKappa, providerKappa } from "./holo-q-receipt.mjs";

// ── egress decision: map an outgoing request → the conscience world-vars ───────────────────────────
// scanPii is injected from holo-conscience.js so the SAME PII guard the OS uses gates egress. A prompt
// carrying PII without lawful disclosure trips P5 (red line) → the gate hard-blocks the send.
export function egressDecision({ messages, hasGrant, classified = false, lawfulDisclosure = false }, scanPii) {
  const text = (messages || []).map((m) => m && m.content).join("\n");
  const pii = (typeof scanPii === "function" ? scanPii(text) : []) || [];
  return {
    decision: {
      disclosesPii: pii.length > 0 && !lawfulDisclosure,
      disclosesClassified: !!classified,
      breachesConsent: !hasGrant,
      lawfulDisclosure: !!lawfulDisclosure,
    },
    pii,
  };
}

// ── the broker ─────────────────────────────────────────────────────────────────────────────────────
// createRemoteBroker({ fetchImpl, conscience, clock }) → { registerProvider, requestCapability, infer,
//   revoke, hasGrant }. `conscience` = { evaluate, scanPii } (the holo-conscience.js surface). `clock`
//   returns an ISO string (injected so the witness is byte-stable). `fetchImpl` = the host's fetch.
export function createRemoteBroker({ fetchImpl, conscience, clock } = {}) {
  const vault = new Map();   // provider κ → { base, key, wireFormat, modelId }   (HOST-ONLY, never leaves)
  const grants = new Map();  // `${app}|${providerK}` → grant record                (default-deny)
  const now = clock || (() => new Date().toISOString());
  const gkey = (app, providerK) => `${app}|${providerK}`;

  // registerProvider(descriptor, secret): bind a provider-descriptor κ to its out-of-band URL + key.
  // descriptor = { wireFormat, modelId } (content-addressed, shareable); secret = { base?, key? } (vaulted).
  async function registerProvider(descriptor, secret = {}) {
    const providerK = await providerKappa(descriptor);
    const base = secret.base || pick(descriptor.wireFormat).base;
    vault.set(providerK, { base, key: secret.key || null, wireFormat: descriptor.wireFormat, modelId: descriptor.modelId });
    return providerK;   // the ONLY handle that crosses to the app
  }

  // requestCapability({ app, providerK, scope }): mint a grant or refuse. `app` is the HOST-ASSERTED
  // identity (holo-gov.js byWin), never the app's claim. Unknown provider ⇒ null (fail-closed).
  async function requestCapability({ app, providerK, scope = {} }) {
    if (!app || !providerK || !vault.has(providerK)) return null;
    const grant = {
      "@type": "VerifiablePresentation",
      "holoq:capability": "q:remote-model",
      "holoq:provider": providerK,
      recipient: app,                                   // un-forgeable: host-asserted
      "holoq:scope": { maxTokens: scope.maxTokens || 200000, ratePerMin: scope.ratePerMin || 20, expires: scope.expires || null },
      "holoq:issuedAt": now(),
    };
    grant.id = await requestKappa({ model: "grant", messages: [grant], params: {} });   // a κ handle
    grants.set(gkey(app, providerK), grant);
    return grant;
  }
  function revoke(app, providerK) { return grants.delete(gkey(app, providerK)); }
  function hasGrant(app, providerK) {
    const g = grants.get(gkey(app, providerK));
    if (!g) return false;
    const exp = g["holoq:scope"] && g["holoq:scope"].expires;
    if (exp && new Date(exp).getTime() < new Date(now()).getTime()) return false;   // expired
    return true;
  }

  // infer({ app, providerK, messages, params, classified?, lawfulDisclosure?, onDelta? }) → the
  // governed remote inference. Returns { receipt, response, conscience } on admit, or { blocked,
  // outcome, verdicts } when the conscience refuses. The KEY and URL never appear in the result.
  async function infer({ app, providerK, messages, params = {}, classified = false, lawfulDisclosure = false, onDelta = null, signal = null } = {}) {
    // 1 · default-deny: a live grant for THIS host-asserted app + provider must exist.
    const granted = hasGrant(app, providerK);
    // 2 · conscience gate on the OUTGOING prompt (the load-bearing step).
    const { decision, pii } = egressDecision({ messages, hasGrant: granted, classified, lawfulDisclosure }, conscience.scanPii);
    const verdict = conscience.evaluate(decision, { posture: "answer-then-caveat" });
    if (verdict.outcome === "block") return { blocked: true, outcome: "block", blocked_by: verdict.blocked, verdicts: verdict.verdicts, pii };
    if (!granted) return { blocked: true, outcome: "block", blocked_by: ["P4"], reason: "no grant", verdicts: verdict.verdicts };
    // 3 · resolve the engine from the vault (URL + key stay here).
    const v = vault.get(providerK);
    const adapter = pick(v.wireFormat);
    const startedAt = now();
    // 4 · stream the provider; accumulate text + usage with the adapter's pure parser.
    const { text, usage } = await streamRemote({ fetchImpl, adapter, base: v.base, key: v.key, model: v.modelId, messages, params, onDelta, signal });
    const endedAt = now();
    // 5 · admit: content-address the response, mint the mandatory receipt (P2).
    const responseK = await responseKappa(text);
    const requestK = await requestKappa({ model: v.modelId, messages, params });
    const receipt = await mintReceipt({
      requestK, responseK, providerK, wireFormat: v.wireFormat, modelId: v.modelId,
      usage, startedAt, endedAt, app,
      conscience: { outcome: verdict.outcome, caveats: verdict.caveats, sealed: verdict.sealed },
    });
    return { receipt, response: text, responseKappa: responseK, conscience: { outcome: verdict.outcome, caveats: verdict.caveats }, usage };
    // NOTE: no `base`, no `key` in the return — the app frame holds nothing.
  }

  // listProviders(): the discoverable engines — descriptor + κ ONLY, never base/key (no secret leaves).
  function listProviders() {
    return Array.from(vault.entries()).map(([providerK, v]) => ({ providerK, wireFormat: v.wireFormat, modelId: v.modelId }));
  }

  return { registerProvider, requestCapability, revoke, hasGrant, infer, listProviders, _vaultSize: () => vault.size };
}

// serveRpc(broker, { app, method, args, onDelta }) → { result } | { error }. The host-side dispatch a
// cross-frame request maps to, with `app` already the HOST-ASSERTED identity (holo-gov.js byWin — an app
// frame can never assert its own id). This is the ONE place the gov broker delegates remote-model methods
// to, so the mapping is witnessed here, not duplicated in the host wiring. Fail-closed: no app ⇒ refuse.
// The returned `result` carries NO base/url/key — only what `infer`/`requestCapability` already expose.
export async function serveRpc(broker, { app, method, args = {}, onDelta = null } = {}) {
  if (!broker) return { error: "no remote authority" };
  if (!app) return { error: "ungoverned frame" };                       // un-forgeable: host-asserted only
  try {
    if (method === "q.remote.providers") return { result: broker.listProviders() };
    if (method === "q.remote.cap") return { result: await broker.requestCapability({ app, providerK: args.providerK, scope: args.scope }) };
    if (method === "q.remote.infer") return { result: await broker.infer({ app, providerK: args.providerK, messages: args.messages, params: args.params, classified: args.classified, lawfulDisclosure: args.lawfulDisclosure, onDelta }) };
    return { error: "unsupported method: " + method };
  } catch (err) { return { error: String((err && err.message) || err) }; }
}

// streamRemote(...) → { text, usage } — the live SSE driver. The ONLY function that touches the network,
// and it does so host-side with the vaulted key. Reuses the adapter's pure decodeLine/parseEvent, so the
// reconstruction logic is exactly what the Node witness proves over canned bytes.
export async function streamRemote({ fetchImpl, adapter, base, key, model, messages, params = {}, onDelta = null, signal = null }) {
  const res = await fetchImpl(base + adapter.path(), {
    method: "POST", signal,
    headers: adapter.headers(key),
    body: JSON.stringify(adapter.body({ model, messages, params })),
  });
  if (!res.ok || !res.body) {
    let detail = ""; try { detail = await res.text(); } catch {}
    throw new Error("remote HTTP " + res.status + (detail ? ": " + detail.slice(0, 200) : ""));
  }
  const reader = res.body.getReader(), dec = new TextDecoder();
  let buf = "", text = ""; const usage = {};
  for (;;) {
    const { value, done } = await reader.read(); if (done) break;
    buf += dec.decode(value, { stream: true });
    let nl;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl); buf = buf.slice(nl + 1);
      const ev = decodeLine(line); if (ev === undefined) continue;
      const out = adapter.parseEvent(ev); if (!out) continue;
      if (out.text) { text += out.text; if (onDelta) { try { onDelta(out.text); } catch {} } }
      if (out.usage) Object.assign(usage, out.usage);
    }
  }
  return { text, usage };
}

export default { createRemoteBroker, streamRemote, egressDecision, serveRpc };
