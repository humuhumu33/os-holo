#!/usr/bin/env node
// holo-q-openrouter-witness.mjs — proves the OpenRouter remote tier (ADR-0102) is a GOVERNED, κ-MEMOIZED,
// receipt-sealed egress, with the routing TRUTH pinned into the receipt. Pure Node + a MOCK fetch (with a
// CALL COUNTER) + the REAL conscience (holo-conscience.js), so the seam under test is exactly the shipped
// logic — no browser, no network. Proves:
//   • a distinct `openrouter` adapter: OpenAI-wire body, Bearer + HTTP-Referer headers, served meta capture
//   • the engine is a CONTENT address {wireFormat,modelId}, never a URL (Law L1); the key is vaulted
//   • the receipt pins servedModel/servedProvider/cost INSIDE the canonical body; a flipped served provider
//     breaks the address and is refused (Law L5)
//   • the conscience gates EGRESS: PII → P5 hard block; no grant ⇒ P4 block; the key NEVER leaks
//   • THE MAGIC: a remote provider rides the κ-memo fabric → an identical prompt is an O(1) hit with ZERO
//     mock-fetch calls (pay-once); a NEAR-repeat (swap one LOCAL member) leaves the remote leg a cache hit
//   • the durable index (injected indexStore) survives a "reload" → a fresh fabric replays O(1), ZERO fetch
//   • Q.fuse seals tier "hybrid" with a remote member; the local default stays "local"
//   • the holo-zk selective-disclosure envelope hides unrevealed claims (sovereign egress minimization)
// Emits tools/holo-q-openrouter-witness.result.json and exits 0/1.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const Q = (f) => new URL("../os/usr/lib/holo/q/" + f, import.meta.url);
const SH = (f) => new URL("../os/usr/lib/holo/" + f, import.meta.url);

const A = await import(Q("holo-q-adapter.mjs"));
const R = await import(Q("holo-q-receipt.mjs"));
const { createRemoteBroker } = await import(Q("holo-q-remote.mjs"));
const { makeRemoteProvider, createOpenRouterController } = await import(Q("holo-q-remote-provider.mjs"));
const CAT = await import(Q("holo-q-openrouter-catalog.mjs"));
const { createFabric } = await import(Q("holo-q-fabric.js"));
const { createFuse } = await import(Q("holo-q-fuse.js"));
const { withRemoteMember } = await import(Q("holo-q-fuse-panel.js"));
const C = await import(SH("holo-conscience.js"));
const ZK = (await import(SH("holo-zk.js"))).default || globalThis.HoloZK;

const checks = {}, failed = [];
const ok = (name, cond, detail) => { checks[name] = !!cond; if (!cond) failed.push(name + (detail ? ` — ${detail}` : "")); return !!cond; };

// deterministic ISO clock so receipt κs are byte-stable across re-runs.
let _t = 0; const clock = () => new Date(1717000000000 + (_t++) * 1000).toISOString();

// a MOCK fetch that streams canned SSE bytes in two chunks AND counts how many times it is called (the
// whole pay-once proof rests on this counter: a memo hit must NOT call fetch).
function makeMockFetch(sseText) {
  const state = { calls: 0 };
  const fetchImpl = async () => {
    state.calls++;
    const bytes = new TextEncoder().encode(sseText);
    const mid = Math.floor(bytes.length / 2);
    const chunks = [bytes.slice(0, mid), bytes.slice(mid)];
    let i = 0;
    return { ok: true, status: 200, body: { getReader: () => ({ read: async () => i < chunks.length ? { value: chunks[i++], done: false } : { value: undefined, done: true } }) } };
  };
  return { fetchImpl, state };
}

// an OpenRouter SSE: OpenAI-shaped deltas, plus the routing truth (model it served, the upstream provider,
// and native cost in the final usage object) — exactly what the openrouter adapter must surface as meta.
const OPENROUTER_SSE = [
  'data: {"model":"anthropic/claude-3.5-sonnet","provider":"Anthropic","choices":[{"delta":{"content":"Pa"}}]}', '',
  'data: {"model":"anthropic/claude-3.5-sonnet","provider":"Anthropic","choices":[{"delta":{"content":"ris."}}]}', '',
  'data: {"model":"anthropic/claude-3.5-sonnet","provider":"Anthropic","usage":{"prompt_tokens":8,"completion_tokens":2,"cost":0.000123}}', '',
  'data: [DONE]', '',
].join("\n");

const SECRET_KEY = "sk-or-SECRET-do-not-leak-0xBEEF";

try {
  // 0 · the conscience self-verifies in Node (Law L5) — the gate we rely on is sealed.
  const sealed = await C.verifyConstitution();
  ok("conscience-sealed-in-node", sealed && C.sealed(), "constitution did not re-derive to its pinned κ");

  // ── 1 · the openrouter adapter: distinct identity, OpenAI-wire body, attribution headers ──
  const a = A.adapters.openrouter;
  const body = a.body({ model: "anthropic/claude-3.5-sonnet", messages: [{ role: "user", content: "hi" }], params: { maxTokens: 100 } });
  const hdr = a.headers(SECRET_KEY);
  ok("adapter-openrouter-distinct", a.wire === "openrouter" && a.base === "https://openrouter.ai/api/v1" && a.path() === "/chat/completions", "openrouter adapter identity wrong");
  ok("adapter-openrouter-body", body.stream === true && body.messages.length === 1 && body.stream_options && body.stream_options.include_usage === true, JSON.stringify(body));
  ok("adapter-openrouter-headers", hdr.authorization === "Bearer " + SECRET_KEY && hdr["HTTP-Referer"] === "https://hologram.os" && hdr["X-Title"] === "Hologram OS", JSON.stringify(hdr));

  // ── 2 · SSE reconstruction surfaces the routing META (the honesty payload) ──
  const recon = A.runSSE(a, OPENROUTER_SSE);
  ok("adapter-openrouter-reconstruct", recon.text === "Paris." && recon.usage.completionTokens === 2, JSON.stringify({ t: recon.text, u: recon.usage }));
  ok("adapter-openrouter-meta", recon.meta.servedModel === "anthropic/claude-3.5-sonnet" && recon.meta.servedProvider === "Anthropic" && recon.meta.cost && recon.meta.cost.amount === 0.000123, JSON.stringify(recon.meta));

  // ── 3 · engine is a content address, not a URL (Law L1) ──
  const descriptor = { wireFormat: "openrouter", modelId: "anthropic/claude-3.5-sonnet" };
  const providerK = await R.providerKappa(descriptor);
  ok("provider-kappa-is-content-address", providerK.startsWith("did:holo:sha256:") && providerK === await R.providerKappa(descriptor), "provider κ not a stable content address");
  ok("provider-kappa-has-no-url", !providerK.includes("http") && !providerK.includes("openrouter"), "a URL leaked into the engine identity");

  // ── 4 · the receipt PINS the served model/provider/cost; a flipped served provider is refused (Law L5) ──
  const rec = await R.mintReceipt({
    requestK: await R.requestKappa({ model: descriptor.modelId, messages: [{ role: "user", content: "q" }], params: {} }),
    responseK: await R.responseKappa("Paris."), providerK, wireFormat: "openrouter", modelId: descriptor.modelId,
    usage: { promptTokens: 8, completionTokens: 2 }, meta: recon.meta, startedAt: clock(), endedAt: clock(),
    app: "did:holo:sha256:" + "a".repeat(64), conscience: { outcome: "accept", caveats: [], sealed: true },
  });
  ok("receipt-pins-served-meta", rec.body["holoq:servedModel"] === "anthropic/claude-3.5-sonnet" && rec.body["holoq:servedProvider"] === "Anthropic" && rec.body["holoq:cost"]["holoq:amount"] === 0.000123, JSON.stringify(rec.body["holoq:cost"]));
  ok("receipt-rederives", (await R.verifyReceipt(rec)).ok, "receipt id != address(body)");
  const forged = JSON.parse(JSON.stringify(rec)); forged.body["holoq:servedProvider"] = "OpenAI";   // lie about who ran
  ok("receipt-served-tamper-refused", (await R.verifyReceipt(forged)).ok === false, "a flipped servedProvider still verified");

  // ── 5 · the broker over the openrouter adapter: default-deny, egress gate, admit + mint with cost ──
  const m1 = makeMockFetch(OPENROUTER_SSE);
  const broker = createRemoteBroker({ fetchImpl: m1.fetchImpl, conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  const regK = await broker.registerProvider(descriptor, { base: "https://openrouter.ai/api/v1", key: SECRET_KEY });
  ok("register-returns-content-kappa", regK === providerK, "registerProvider κ != providerKappa(descriptor)");
  const app = "did:holo:sha256:" + "1".repeat(64);

  // 5a · no grant ⇒ P4 block
  const noGrant = await broker.infer({ app, providerK, messages: [{ role: "user", content: "build a teal page" }] });
  ok("egress-no-grant-blocked", noGrant.blocked === true && (noGrant.blocked_by || []).includes("P4"), JSON.stringify(noGrant));
  await broker.requestCapability({ app, providerK, scope: { maxTokens: 1000 } });

  // 5b · PII ⇒ P5 hard block even WITH a grant
  const pii = await broker.infer({ app, providerK, messages: [{ role: "user", content: "summarise, my email is alice@example.com" }] });
  ok("egress-pii-redline-blocked", pii.blocked === true && (pii.blocked_by || []).includes("P5"), JSON.stringify(pii));

  // 5c · clean + grant ⇒ ADMIT: streams, receipt names the SERVED model + cost, key never leaks
  const out = await broker.infer({ app, providerK, messages: [{ role: "user", content: "what is the capital of France?" }] });
  ok("infer-admits-and-streams", !out.blocked && out.response === "Paris.", JSON.stringify(out).slice(0, 160));
  ok("infer-receipt-names-served", !!out.receipt && (await R.verifyReceipt(out.receipt)).ok && out.receipt.body["holoq:servedModel"] === "anthropic/claude-3.5-sonnet" && out.receipt.body["holoq:cost"]["holoq:amount"] === 0.000123, "receipt did not pin the served model/cost");
  const leak = JSON.stringify(out).includes(SECRET_KEY) || JSON.stringify(out.receipt).includes(SECRET_KEY);
  ok("key-never-leaves-the-vault", !leak, "the API key surfaced in app-facing output");

  // ── 6 · THE MAGIC: a remote provider rides the κ-memo fabric → pay-once (O(1), ZERO fetch on repeat) ──
  const m2 = makeMockFetch(OPENROUTER_SSE);
  const broker2 = createRemoteBroker({ fetchImpl: m2.fetchImpl, conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  await broker2.registerProvider(descriptor, { key: SECRET_KEY });
  await broker2.requestCapability({ app, providerK, scope: { maxTokens: 1000 } });
  const remote = makeRemoteProvider({ broker: broker2, app, providerK, id: "openrouter·sonnet" });

  const fab = createFabric();
  const first = await fab.compute({ provider: remote, task: "ask", input: "capital of France?", params: {} });
  ok("fabric-cold-runs-remote", first.value === "Paris." && first.cached === false && m2.state.calls === 1, `cold call count=${m2.state.calls}`);
  ok("remote-provider-sets-lastReceipt", !!remote.lastReceipt && (await R.verifyReceipt(remote.lastReceipt)).ok, "the remote leg did not expose a verifiable receipt");
  const second = await fab.compute({ provider: remote, task: "ask", input: "capital of France?", params: {} });
  ok("fabric-repeat-is-O1-zero-fetch", second.value === "Paris." && second.kappa === first.kappa && !!second.cached && m2.state.calls === 1, `repeat call count=${m2.state.calls} (must stay 1)`);

  // ── 7 · durable index survives a "reload" — a FRESH fabric replays O(1) with ZERO fetch (pay-once across sessions) ──
  const disk = new Map();
  const indexStore = { load: async () => [...disk.entries()], save: async (entries) => { disk.clear(); for (const [k, v] of entries) disk.set(k, v); } };
  const m3 = makeMockFetch(OPENROUTER_SSE);
  const broker3 = createRemoteBroker({ fetchImpl: m3.fetchImpl, conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  await broker3.registerProvider(descriptor, { key: SECRET_KEY });
  await broker3.requestCapability({ app, providerK, scope: { maxTokens: 1000 } });
  const remote3 = makeRemoteProvider({ broker: broker3, app, providerK, id: "openrouter·sonnet" });
  const sharedStore = (() => { const mm = new Map(); return { async put(b) { const k = await R.responseKappa(new TextDecoder().decode(b)); mm.set(k, b); return k; }, async get(k) { return mm.get(k) || null; }, async has(k) { return mm.has(k); } }; })();
  const fabA = createFabric({ store: sharedStore, indexStore });
  await fabA.compute({ provider: remote3, task: "ask", input: "capital of France?", params: {} });
  const callsAfterSeal = m3.state.calls;
  // simulate a reload: brand-new fabric, SAME durable store + index — must hit without re-fetching.
  const fabB = createFabric({ store: sharedStore, indexStore });
  const replay = await fabB.compute({ provider: remote3, task: "ask", input: "capital of France?", params: {} });
  ok("durable-index-replays-across-reload", replay.value === "Paris." && !!replay.cached && m3.state.calls === callsAfterSeal && callsAfterSeal === 1, `calls=${m3.state.calls} afterSeal=${callsAfterSeal}`);

  // ── 8 · Q.fuse: a remote member seals tier "hybrid"; a near-repeat leaves the remote leg a cache hit ──
  const localA = { id: "local-A", generate: async function* () { yield "Local A says Paris is the capital."; } };
  const localB = { id: "local-B", generate: async function* () { yield "Local B agrees: Paris."; } };
  const judge = { id: "judge", generate: async function* () { yield "Both agree on Paris."; } };
  const synth = { id: "synth", generate: async function* () { yield "Paris is the capital of France."; } };
  const m4 = makeMockFetch(OPENROUTER_SSE);
  const broker4 = createRemoteBroker({ fetchImpl: m4.fetchImpl, conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  await broker4.registerProvider(descriptor, { key: SECRET_KEY });
  await broker4.requestCapability({ app, providerK, scope: { maxTokens: 1000 } });
  const remote4 = makeRemoteProvider({ broker: broker4, app, providerK, id: "openrouter·sonnet" });

  const fuse = createFuse({ panel: [localA, remote4], judge, synth, clock });
  const f1 = await fuse.fuse("capital of France?");
  ok("fuse-hybrid-tier-with-remote", f1.ok && f1.tier === "hybrid" && f1.answer === "Paris is the capital of France.", JSON.stringify({ tier: f1.tier }));
  const remoteCallsAfterF1 = m4.state.calls;   // the remote panel leg ran exactly once
  ok("fuse-remote-leg-ran-once", remoteCallsAfterF1 === 1, `remote calls=${remoteCallsAfterF1}`);
  // near-repeat: swap the LOCAL member (localA → localB), SAME question. The remote leg's key is unchanged
  // → cache hit → the frontier model is NOT re-paid; only the changed local leg + judge + synth recompute.
  const f2 = await fuse.fuse("capital of France?", { panel: [localB, remote4], judge, synth });
  ok("fuse-near-repeat-spares-remote", f2.ok && f2.tier === "hybrid" && m4.state.calls === remoteCallsAfterF1, `remote calls after near-repeat=${m4.state.calls} (must stay ${remoteCallsAfterF1})`);
  // exact repeat: EVERYTHING is a hit (zero models run) — the strongest pay-once statement.
  const f3 = await fuse.fuse("capital of France?", { panel: [localB, remote4], judge, synth });
  ok("fuse-exact-repeat-all-cached", f3.ok && f3.cached === true && m4.state.calls === remoteCallsAfterF1, `cached=${f3.cached} calls=${m4.state.calls}`);

  // ── 8b · withRemoteMember PRESERVES judge + synth (regression the live browser test caught) ──
  let captured = null;
  const stubQ = { configureFuse: (c) => { captured = c; }, __fusePanel: [localA, localB], __fuseJudge: judge, __fuseSynth: synth };
  const wired = withRemoteMember(stubQ, remote4, {});
  ok("withRemoteMember-preserves-judge-synth", wired.ok && wired.tier === "hybrid" && captured && captured.judge === judge && captured.synth === synth && captured.panel.some((p) => p.remote), JSON.stringify({ ok: wired.ok, j: !!(captured && captured.judge), s: !!(captured && captured.synth) }));

  // ── 8c · CATALOG "select any model": normalize + search the public OpenRouter /models catalog ──
  const CATALOG_JSON = { data: [
    { id: "openai/gpt-4o-mini", name: "GPT-4o mini", context_length: 128000, pricing: { prompt: "0.00000015", completion: "0.0000006" } },
    { id: "anthropic/claude-3.5-sonnet", name: "Claude 3.5 Sonnet", context_length: 200000, pricing: { prompt: "0.000003", completion: "0.000015" } },
    { id: "meta-llama/llama-3.2-3b-instruct:free", name: "Llama 3.2 3B (free)", context_length: 131072, pricing: { prompt: "0", completion: "0" } },
  ] };
  const norm = CAT.normalizeCatalog(CATALOG_JSON);
  ok("catalog-normalizes", norm.length === 3 && norm[0].id === "anthropic/claude-3.5-sonnet" && typeof norm[0].promptPrice === "number" && norm.find((m) => m.id.endsWith(":free")).free === true, JSON.stringify(norm[0]));
  const found = CAT.searchCatalog(norm, "claude");
  ok("catalog-search", found.length === 1 && found[0].id === "anthropic/claude-3.5-sonnet", JSON.stringify(found.map((m) => m.id)));
  ok("catalog-free-only", CAT.searchCatalog(norm, "", { freeOnly: true }).every((m) => m.free), "freeOnly leaked a paid model");
  const catFetch = async () => ({ ok: true, status: 200, json: async () => CATALOG_JSON });
  const fetched = await CAT.fetchCatalog(catFetch, { base: "https://openrouter.ai/api/v1" });
  ok("catalog-fetch-normalizes", fetched.length === 3 && fetched.some((m) => m.id === "openai/gpt-4o-mini"), JSON.stringify(fetched.length));

  // ── 8d · the CONTROLLER (toggle + select any model), deps-injected, no DOM ──
  const m5 = makeMockFetch(OPENROUTER_SSE);
  const broker5 = createRemoteBroker({ fetchImpl: m5.fetchImpl, conscience: { evaluate: C.evaluate, scanPii: C.scanPii }, clock });
  // a stub door that withRemoteMember/withoutRemoteMember operate on (real panel ops, injected).
  const panelOps = await import(Q("holo-q-fuse-panel.js"));
  const ctlQ = { _cfg: null, configureFuse(c) { this._cfg = c; }, __fusePanel: [localA, localB], __fuseJudge: judge, __fuseSynth: synth };
  const ctl = createOpenRouterController({ broker: broker5, app, base: "https://openrouter.ai/api/v1", key: SECRET_KEY, fetchImpl: catFetch, Q: ctlQ, panelOps });
  // listModels rides the controller's catalog (public GET via the injected fetch).
  const listed = await ctl.listModels("gpt");
  ok("controller-listModels", Array.isArray(listed) && listed.some((m) => m.id === "openai/gpt-4o-mini"), JSON.stringify(listed.map((m) => m.id)));
  // toggle OFF by default → no remote slot.
  await ctl.setModel("openai/gpt-4o-mini");
  ok("controller-toggle-off-default", ctl.enabled === false && (ctlQ._cfg === null || !ctlQ._cfg.panel.some((p) => p.remote)), "remote wired while toggle off");
  // toggle ON → exactly ONE remote slot appears, judge/synth preserved.
  const onK = ctl.providerK;
  await ctl.setEnabled(true);
  const remoteMembers1 = ctlQ._cfg.panel.filter((p) => p.remote);
  ok("controller-toggle-on-wires-one-slot", ctl.enabled === true && remoteMembers1.length === 1 && remoteMembers1[0].id === "openrouter·openai/gpt-4o-mini" && ctlQ._cfg.synth === synth, JSON.stringify(ctlQ._cfg.panel.map((p) => p.id)));
  // SELECT ANY MODEL: switch slug → a NEW provider κ, and STILL exactly one remote slot (no stacking).
  await ctl.setModel("anthropic/claude-3.5-sonnet");
  const remoteMembers2 = ctlQ._cfg.panel.filter((p) => p.remote);
  ok("controller-setModel-new-kappa", ctl.providerK !== onK && ctl.model === "anthropic/claude-3.5-sonnet", "model switch did not mint a new provider κ");
  ok("controller-setModel-single-slot", remoteMembers2.length === 1 && remoteMembers2[0].id === "openrouter·anthropic/claude-3.5-sonnet", JSON.stringify(ctlQ._cfg.panel.map((p) => p.id)));
  // toggle OFF → 100%-local panel restored.
  await ctl.setEnabled(false);
  ok("controller-toggle-off-restores-local", ctl.enabled === false && !ctlQ._cfg.panel.some((p) => p.remote) && ctlQ._cfg.panel.length === 2, JSON.stringify(ctlQ._cfg.panel.map((p) => p.id)));

  // ── 9 · SOVEREIGN EGRESS ENVELOPE: holo-zk selective disclosure hides unrevealed claims ──
  if (ZK && typeof ZK.sdIssue === "function") {
    const sd = await ZK.sdIssue({ who: "Ada", when: "2026-06-16", topic: "private-deal", amount: 5000 });
    const pres = ZK.sdDisclose(sd, ["who", "when"]);                 // disclose only who+when to the remote model
    const got = await ZK.sdVerify(pres);
    const hides = got && got.who === "Ada" && got.when === "2026-06-16" && !("amount" in got) && !("topic" in got);
    const presStr = JSON.stringify(pres);
    ok("zk-envelope-hides-unrevealed", hides && !presStr.includes("private-deal") && !presStr.includes("5000"), JSON.stringify(got));
  } else {
    ok("zk-envelope-hides-unrevealed", false, "holo-zk not importable");
  }

} catch (e) {
  ok("witness-ran", false, String((e && e.stack) || e));
}

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult", witnessed, checks, failed,
  covers: [
    "OpenRouter is a DISTINCT openrouter adapter (OpenAI-wire body + Bearer/HTTP-Referer headers), so the receipt names the engine honestly (not reused from `openai`)",
    "The engine is a content address {wireFormat,modelId}, never a URL (Law L1); the API key is vaulted and never leaks into a receipt or app-facing result",
    "The receipt PINS the served model/provider/cost OpenRouter actually routed to, inside the canonical body — a flipped served provider breaks the address and is refused (Law L5)",
    "The conscience gates EGRESS: PII → P5 hard block; no grant ⇒ P4 block (ADR-0033)",
    "A remote model rides the κ-memo fabric (ADR-0084): an identical prompt is O(1) with ZERO network calls — pay-once (Law L3)",
    "An injected durable indexStore makes pay-once survive a reload: a fresh fabric replays O(1) with zero fetch (closes the fabric v1 index gap)",
    "Q.fuse seals tier 'hybrid' with a remote member; a near-repeat (swap a local member) leaves the remote leg a cache hit — the frontier model is not re-paid; an exact repeat runs zero models",
    "The holo-zk selective-disclosure envelope hides unrevealed claims — sovereign egress minimization (genuine SD-JWT membership proof, NOT blind/ZK inference, which is a future axis)",
  ],
  authority: "IETF RFC 8785 (JCS) · W3C PROV-O · W3C ODRL · W3C DID Core · IETF SD-JWT selective disclosure · UOR content-addressing (κ = H(canonical form)) · verify-by-re-derivation (Holospaces Laws L1/L3/L4/L5) · Holo Constitution (ADR-0033) · Holo Q ADR-0084/0090/0098 · ADR-0102",
};
writeFileSync(join(here, "holo-q-openrouter-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log(`holo-q-openrouter-witness — ${witnessed ? "WITNESSED ✓" : "NOT witnessed ✗"}`);
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"} ${k}`);
if (failed.length) console.log("  failed:\n   - " + failed.join("\n   - "));
process.exit(witnessed ? 0 : 1);
