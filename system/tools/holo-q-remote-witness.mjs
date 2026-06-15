#!/usr/bin/env node
// holo-q-remote-witness.mjs — proves the remote-model capability (ADR-0089) is a governed, witnessed,
// provider-agnostic egress boundary, NOT a parallel network. Pure Node + a MOCK fetch + the REAL
// conscience (holo-conscience.js), so the seam under test is exactly the shipped logic. Proves:
//   • provider-agnostic SSE shaping + reconstruction for Anthropic · OpenAI · Ollama (the any-llm value)
//   • the engine is a CONTENT address {wireFormat,modelId}, never a URL (Law L1); the key is vaulted
//   • every admitted answer mints a re-derivable InferenceReceipt κ; tamper any byte → refused (Law L5)
//   • the conscience gates EGRESS: PII trips P5 (red line) → HARD BLOCK; no grant ⇒ P4 block
//   • the response is content-addressed (identical bytes → identical κ; dedup, Law L3)
//   • the API key NEVER appears in a grant, a receipt, or the app-facing result
// Emits tools/holo-q-remote-witness.result.json and exits 0/1.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const Q = (f) => new URL("../os/usr/lib/holo/q/" + f, import.meta.url);
const SH = (f) => new URL("../os/usr/lib/holo/" + f, import.meta.url);

const A = await import(Q("holo-q-adapter.mjs"));
const R = await import(Q("holo-q-receipt.mjs"));
const { createRemoteBroker, serveRpc } = await import(Q("holo-q-remote.mjs"));
const { createRemoteClient } = await import(Q("holo-q-remote-client.mjs"));
const { createBoostSampler } = await import(Q("holo-q-boost.js"));
const CG = await import(Q("holo-q-codegen.js"));
const C = await import(SH("holo-conscience.js"));

const checks = {}, failed = [];
const ok = (name, cond, detail) => { checks[name] = !!cond; if (!cond) failed.push(name + (detail ? ` — ${detail}` : "")); return !!cond; };

// deterministic ISO clock so receipt κs are byte-stable across re-runs.
let _t = 0; const clock = () => new Date(1717000000000 + (_t++) * 1000).toISOString();

// a MOCK fetch that streams canned SSE bytes in two chunks (exercises the buffer seam). No network.
function mockFetch(sseText) {
  return async () => {
    const bytes = new TextEncoder().encode(sseText);
    const mid = Math.floor(bytes.length / 2);
    const chunks = [bytes.slice(0, mid), bytes.slice(mid)];
    let i = 0;
    return { ok: true, status: 200, body: { getReader: () => ({ read: async () => i < chunks.length ? { value: chunks[i++], done: false } : { value: undefined, done: true } }) } };
  };
}

const ANTHROPIC_SSE = [
  'event: message_start', 'data: {"type":"message_start","message":{"usage":{"input_tokens":10}}}', '',
  'data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"Pa"}}', '',
  'data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"ris."}}', '',
  'data: {"type":"message_delta","usage":{"output_tokens":2}}', '',
  'data: {"type":"message_stop"}', '',
].join("\n");
const OPENAI_SSE = [
  'data: {"choices":[{"delta":{"content":"Tok"}}]}', '',
  'data: {"choices":[{"delta":{"content":"yo."}}]}', '',
  'data: {"usage":{"prompt_tokens":8,"completion_tokens":2}}', '',
  'data: [DONE]', '',
].join("\n");

// an HTML-yielding Anthropic stream, so the boost sampler drives the REAL codegen to a source doc.
const ANTHROPIC_HTML_SSE = [
  'data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"<!doctype html>"}}', '',
  'data: {"type":"content_block_delta","delta":{"type":"text_delta","text":"<h1>Hi</h1>"}}', '',
  'data: {"type":"message_delta","usage":{"output_tokens":4}}', '',
  'data: {"type":"message_stop"}', '',
].join("\n");

const SECRET_KEY = "sk-ant-SECRET-do-not-leak-0xCAFE";

try {
  // 0 · the conscience self-verifies in Node (Law L5) — the gate we are about to rely on is sealed.
  const sealed = await C.verifyConstitution();
  ok("conscience-sealed-in-node", sealed && C.sealed(), "constitution did not re-derive to its pinned κ");

  // ── 1 · provider-agnostic shaping (the any-llm value, in pure functions) ──
  const aReq = { model: "claude-opus-4-8", messages: [{ role: "system", content: "S" }, { role: "user", content: "hi" }], params: { maxTokens: 100 } };
  const ab = A.adapters.anthropic.body(aReq), ah = A.adapters.anthropic.headers("K");
  ok("adapter-anthropic-shaping", A.adapters.anthropic.path() === "/v1/messages" && ab.system === "S" && ab.messages.length === 1 && ab.stream === true && ah["x-api-key"] === "K" && ah["anthropic-version"] === "2023-06-01", JSON.stringify(ab));
  const ob = A.adapters.openai.body(aReq), oh = A.adapters.openai.headers("K");
  ok("adapter-openai-shaping", A.adapters.openai.path() === "/v1/chat/completions" && ob.messages.length === 2 && oh.authorization === "Bearer K", JSON.stringify(ob));
  ok("adapter-ollama-nokey", !("authorization" in A.adapters.ollama.headers()) && A.adapters.ollama.wire === "ollama", "ollama leaked an auth header");

  // ── 2 · SSE reconstruction (the same logic the live streamer reuses) ──
  const ra = A.runSSE(A.adapters.anthropic, ANTHROPIC_SSE);
  ok("sse-anthropic-reconstruct", ra.text === "Paris." && ra.usage.promptTokens === 10 && ra.usage.completionTokens === 2 && ra.done === true, JSON.stringify(ra));
  const ro = A.runSSE(A.adapters.openai, OPENAI_SSE);
  ok("sse-openai-reconstruct", ro.text === "Tokyo." && ro.usage.promptTokens === 8 && ro.usage.completionTokens === 2 && ro.done === true, JSON.stringify(ro));

  // ── 3 · the engine is a content address, not a URL (Law L1) ──
  const descriptor = { wireFormat: "anthropic", modelId: "claude-opus-4-8" };
  const providerK = await R.providerKappa(descriptor);
  ok("provider-kappa-is-content-address", providerK.startsWith("did:holo:sha256:") && providerK === await R.providerKappa(descriptor), "provider κ not a stable content address");
  ok("provider-kappa-has-no-url", !providerK.includes("http") && !providerK.includes("api.anthropic"), "a URL leaked into the engine identity");

  // ── 4 · response κ is content-addressed (Law L3 dedup) ──
  const k1 = await R.responseKappa("Paris."), k2 = await R.responseKappa("Paris."), k3 = await R.responseKappa("London.");
  ok("response-kappa-dedup", k1 === k2 && k1 !== k3, "identical bytes did not converge / collision");

  // ── 5 · receipt re-derives; tamper any byte → refused (Law L5) ──
  const rec = await R.mintReceipt({ requestK: await R.requestKappa(aReq), responseK: k1, providerK, wireFormat: "anthropic", modelId: "claude-opus-4-8", usage: { promptTokens: 10, completionTokens: 2 }, startedAt: clock(), endedAt: clock(), app: "did:holo:sha256:" + "a".repeat(64), conscience: { outcome: "accept", caveats: [], sealed: true } });
  ok("receipt-rederives", (await R.verifyReceipt(rec)).ok, "receipt id != address(body)");
  const forged = JSON.parse(JSON.stringify(rec)); forged.body["holoq:tier"] = "device";   // lie about the tier
  ok("receipt-tamper-refused", (await R.verifyReceipt(forged)).ok === false, "forged receipt still verified");

  // ── 6 · the broker: default-deny, egress gate, admit + mint ──
  const broker = createRemoteBroker({ fetchImpl: mockFetch(ANTHROPIC_SSE), conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });

  // 6a · unknown provider ⇒ no grant (fail-closed)
  ok("default-deny-unknown-provider", (await broker.requestCapability({ app: "did:holo:app1", providerK: "did:holo:sha256:" + "f".repeat(64) })) === null, "granted a capability for an unregistered provider");

  // register the engine; the vault holds the URL + the SECRET key (never content-addressed)
  const regK = await broker.registerProvider(descriptor, { key: SECRET_KEY });
  ok("register-returns-content-kappa", regK === providerK, "registerProvider κ != providerKappa(descriptor)");

  const app = "did:holo:sha256:" + "1".repeat(64);

  // 6b · clean prompt, NO grant ⇒ blocked by P4 (consent)
  const noGrant = await broker.infer({ app, providerK, messages: [{ role: "user", content: "build a teal landing page" }] });
  ok("egress-no-grant-blocked", noGrant.blocked === true && (noGrant.blocked_by || []).includes("P4"), JSON.stringify(noGrant));

  // grant the capability (host-asserted app identity)
  await broker.requestCapability({ app, providerK, scope: { maxTokens: 1000 } });

  // 6c · PII in the outgoing prompt ⇒ P5 (red line) HARD BLOCK even WITH a grant
  const pii = await broker.infer({ app, providerK, messages: [{ role: "user", content: "summarise this, my email is alice@example.com" }] });
  ok("egress-pii-redline-blocked", pii.blocked === true && (pii.blocked_by || []).includes("P5"), JSON.stringify(pii));

  // 6d · clean prompt + grant ⇒ ADMIT: streams, content-addresses, mints a verifiable receipt
  const out = await broker.infer({ app, providerK, messages: [{ role: "user", content: "what is the capital of France?" }] });
  ok("infer-admits-and-streams", !out.blocked && out.response === "Paris." && out.usage.completionTokens === 2, JSON.stringify(out).slice(0, 200));
  ok("infer-mints-verifiable-receipt", !!out.receipt && (await R.verifyReceipt(out.receipt)).ok && out.receipt.body["holoq:tier"] === "remote" && out.receipt.body["holoq:provider"]["@id"] === providerK, "no/!verifiable receipt");
  ok("infer-response-is-content-addressed", out.responseKappa === await R.responseKappa("Paris."), "response κ != address(bytes)");

  // 6e · the KEY never leaks — not in the grant, the receipt, or the app-facing result
  const grantStr = JSON.stringify(broker.requestCapability ? (await broker.requestCapability({ app, providerK })) : {});
  const leak = JSON.stringify(out).includes(SECRET_KEY) || grantStr.includes(SECRET_KEY) || JSON.stringify(out.receipt).includes(SECRET_KEY);
  ok("key-never-leaves-the-vault", !leak, "the API key surfaced in app-facing output");

  // 6f · revocation ⇒ default-deny again
  broker.revoke(app, providerK);
  const revoked = await broker.infer({ app, providerK, messages: [{ role: "user", content: "again please" }] });
  ok("revoke-restores-default-deny", revoked.blocked === true, "inference proceeded after revoke");

  // ── 7 · BOOST SUBSUMED: the brokered sampler drives the REAL codegen as mode "boost" (ADR-0090) ──
  const boost = await createBoostSampler({ apiKey: SECRET_KEY, model: "claude-opus-4-8", app: "did:holo:boost", fetchImpl: mockFetch(ANTHROPIC_HTML_SSE), conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  const cg = CG.createCodegen({ device: null, boost });
  // 7a · a clean build streams through codegen, labeled "boost", producing a real source doc
  const built = await cg.generate({ prompt: "a teal landing page", boost: true });
  ok("boost-streams-through-codegen", built && built.mode === "boost" && built.source.includes("<h1>Hi</h1>"), JSON.stringify(built && { mode: built.mode, src: built.source }).slice(0, 160));
  // 7b · the boost build minted a re-derivable receipt (the boost call is now witnessed, P2)
  ok("boost-mints-verifiable-receipt", !!boost.lastReceipt && (await R.verifyReceipt(boost.lastReceipt)).ok && boost.lastReceipt.body["holoq:tier"] === "remote", "boost did not mint a verifiable receipt");
  // 7c · the API key is NOT reachable from the sampler the page holds (vaulted in the broker closure)
  const samplerSurface = JSON.stringify({ model: boost.model, lastReceipt: boost.lastReceipt, lastVerdict: boost.lastVerdict, keys: Object.keys(boost) });
  ok("boost-key-not-on-sampler", !samplerSurface.includes(SECRET_KEY) && Object.values(boost).every((v) => v !== SECRET_KEY), "the key is reachable from the page-held sampler");
  // 7d · a PII prompt through boost is HARD-BLOCKED (P5) — zero tokens reach the wire, codegen falls back
  const piiBuild = await cg.generate({ prompt: "summarise, contact me at bob@example.com", boost: true });
  ok("boost-pii-blocked-at-egress", piiBuild.source === "" && boost.lastBlocked === true && (boost.lastVerdict.blocked_by || []).includes("P5"), JSON.stringify({ src: piiBuild.source, blocked: boost.lastBlocked }));
  // 7e · boost registers into a SHARED host broker (the shell's window.HoloQRemote unification) and works
  const shared = createRemoteBroker({ fetchImpl: mockFetch(ANTHROPIC_HTML_SSE), conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  const boost2 = await createBoostSampler({ apiKey: SECRET_KEY, model: "claude-opus-4-8", app: "did:holo:shell", broker: shared });
  const built2 = await CG.createCodegen({ device: null, boost: boost2 }).generate({ prompt: "a card", boost: true });
  ok("boost-uses-shared-broker", built2.mode === "boost" && built2.source.includes("<h1>Hi</h1>") && shared.listProviders().length === 1, JSON.stringify({ mode: built2.mode, provs: shared.listProviders().length }));

  // ── 8 · CROSS-FRAME: an app reaches the host broker over the holo-privacy:rpc bus, holding NOTHING ──
  // A 2-party mock bus (real postMessage semantics: a window receives what is posted TO it; `source` is the
  // sender). The host mirrors holo-gov.js: host-asserted identity via byWin, delegate to serveRpc, stream
  // deltas. Every byte that crosses the bus is logged, to prove the key never leaves the host.
  const busLog = [];
  const frame = () => { const l = []; return { _l: l, addEventListener: (t, f) => { if (t === "message") l.push(f); }, deliver: (data, source) => { busLog.push(JSON.stringify(data)); for (const f of l) f({ data, source }); } }; };
  const appWin = frame(), hostWin = frame();
  appWin.postMessage = (msg) => appWin.deliver(msg, hostWin);     // posted TO app ⇒ app receives, sender=host
  hostWin.postMessage = (msg) => hostWin.deliver(msg, appWin);    // posted TO host ⇒ host receives, sender=app
  const xbroker = createRemoteBroker({ fetchImpl: mockFetch(ANTHROPIC_SSE), conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  const xProviderK = await xbroker.registerProvider({ wireFormat: "anthropic", modelId: "claude-opus-4-8" }, { key: SECRET_KEY });
  const byWin = new Map([[appWin, { did: "did:holo:app-frame-1" }]]);   // the host's mount record (un-forgeable)
  hostWin.addEventListener("message", async (e) => {
    const d = e.data; if (!d || d.type !== "holo-privacy:rpc") return;
    const reply = (result, error) => e.source.postMessage({ type: "holo-privacy:res", id: d.id, result: result == null ? null : result, error: error || null });
    const app = byWin.get(e.source); if (!app) return reply(null, "ungoverned frame");
    const onDelta = (t) => e.source.postMessage({ type: "holo-privacy:delta", id: d.id, delta: t });
    const out = await serveRpc(xbroker, { app: app.did || app.id || app.name, method: d.method, args: d.args || {}, onDelta });
    return reply(out.result != null ? out.result : null, out.error || null);
  });
  const client = createRemoteClient({ target: hostWin, source: appWin });

  // 8a · discovery returns provider descriptors with NO secret
  const provs = await client.providers();
  ok("xframe-providers-no-secret", Array.isArray(provs) && provs[0].providerK === xProviderK && !JSON.stringify(provs).includes(SECRET_KEY), JSON.stringify(provs));
  // 8b · capability grant, recipient stamped to the HOST-ASSERTED app id (not anything the app claimed)
  const grant = await client.requestCapability({ providerK: xProviderK, scope: { maxTokens: 500 } });
  ok("xframe-grant-host-asserted", grant && grant.recipient === "did:holo:app-frame-1" && grant["holoq:capability"] === "q:remote-model", JSON.stringify(grant));
  // 8c · infer streams deltas across the bus + returns a verifiable receipt; the app did no fetch, held no key
  let streamed = ""; const xout = await client.infer({ providerK: xProviderK, messages: [{ role: "user", content: "capital of France?" }], onDelta: (t) => { streamed += t; } });
  ok("xframe-infer-streams-and-receipts", streamed === "Paris." && xout.response === "Paris." && (await R.verifyReceipt(xout.receipt)).ok && xout.receipt.body["holoq:tier"] === "remote", JSON.stringify({ streamed, ok: !!xout.receipt }));
  // 8d · the API key NEVER crossed the bus (every message that flowed in either direction was logged)
  ok("xframe-key-never-crosses-bus", busLog.length > 0 && !busLog.some((m) => m.includes(SECRET_KEY)), `bus carried the key (${busLog.length} msgs)`);
  // 8e · PII over the bus is hard-blocked at the host (P5) — the app cannot exfiltrate PII via remote
  const xpii = await client.infer({ providerK: xProviderK, messages: [{ role: "user", content: "my ssn is 123-45-6789" }] });
  ok("xframe-pii-blocked-at-host", xpii.blocked === true && (xpii.blocked_by || []).includes("P5"), JSON.stringify(xpii));
  // 8f · an UNGOVERNED frame (never mounted by the host ⇒ not in byWin) is denied — un-forgeable identity
  ok("xframe-ungoverned-denied", (await serveRpc(xbroker, { app: null, method: "q.remote.providers" })).error === "ungoverned frame", "ungoverned frame was served");

} catch (e) {
  ok("witness-ran", false, String((e && e.stack) || e));
}

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult", witnessed, checks, failed,
  covers: [
    "A non-local LLM is reached through ONE governed substrate operation, not app-level fetch (Law L4)",
    "The engine is identified by a content address {wireFormat,modelId}, never a URL (Law L1)",
    "Provider request/response shaping is normalized across Anthropic·OpenAI·Ollama with no SDK/dependency",
    "Every admitted answer is a re-derivable PROV-O InferenceReceipt κ; tampering any byte is refused (Law L5)",
    "The response is content-addressed — identical generations converge to one κ (Law L3)",
    "The conscience gates EGRESS: PII trips P5 (red line) hard-block; no grant ⇒ P4 block (ADR-0033)",
    "Capabilities are default-deny, host-asserted, scoped, and revocable; the API key never leaves the vault",
    "Boost (ADR-0087) is subsumed: the brokered sampler drives the UNCHANGED codegen seam as mode 'boost', mints a receipt, blocks PII at egress, and never exposes the vaulted key",
    "Cross-frame: a sandboxed app reaches the host broker over the holo-privacy:rpc bus holding NO key/URL — host-asserted identity (byWin), streamed deltas, a verifiable receipt, PII hard-blocked at the host, the key never crosses the bus, an ungoverned frame denied",
  ],
  authority: "IETF RFC 8785 (JCS) · W3C PROV-O · W3C ODRL · W3C DID Core · UOR content-addressing (κ = H(canonical form)) · verify-by-re-derivation (Holospaces Laws L1/L3/L4/L5) · Holo Constitution (ADR-0033)",
};
writeFileSync(join(here, "holo-q-remote-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log(`holo-q-remote-witness — ${witnessed ? "WITNESSED ✓" : "NOT witnessed ✗"}`);
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"} ${k}`);
if (failed.length) console.log("  failed:\n   - " + failed.join("\n   - "));
process.exit(witnessed ? 0 : 1);
