# ADR-0102 — Q OpenRouter tier: frontier breadth as a governed, κ-memoized, receipt-sealed remote slot (pay-once intelligence), never an app-level fetch

Status: **LANDED + Node-witnessed 26/26** at `system/tools/holo-q-openrouter-witness.mjs` (mock fetch + the REAL sealed conscience). The adapter, the served-meta receipt pinning, the κ-memo remote provider, the durable index, and the Q.fuse hybrid-member wiring all land + are witnessed. A `#holo-q-openrouter` conformance row is added (`os/etc/conformance.jsonld`) and registered in the gate's live set. **Deferred** (the same staged steps ADR-0090/0098 defer): the live shell installer hook exercised in a booted shell behind an authed key, and the `os-closure.json` κ-pin for the new served modules.

Relates: [[holo-q-remote-model]] (ADR-0090, the governed remote broker this rides) · [[holo-q-fuse-adr]] (ADR-0098, the panel this joins as a hybrid slot) · [[holo-q-mux-specialists]] (ADR-0091, the one door `window.Q`) · [[holo-q-model-registry]] (ADR-0096, the local brain that stays the default) · ADR-0084 (the κ-memo fabric — the "O(1) L1/L2 compute") · ADR-0033 (the conscience egress gate) · ADR-0082 (PROV-O receipts) · `holo-zk.js` (the sovereign egress envelope).

## Context

The question: integrate OpenRouter — a unified gateway to frontier models — into Q. The naïve path (an SDK, an app-level `fetch` to `openrouter.ai`) is exactly the Law violation ADR-0090 already diagnosed for boost: a parallel network (breaks **L4**), an engine named by URL (breaks **L1**), a key on the page, no receipt. The real finding is sharper: **OpenRouter needs no new subsystem.** It is an OpenAI-wire aggregator, so it drops onto the ADR-0090 broker as one more vaulted provider. The only engineering of substance is (a) keeping the receipt honest through OpenRouter's routing indirection, and (b) the one wire that turns a remote call into *substrate-native* value — riding the κ-memo fabric.

## Decision

Make OpenRouter reachable only as a governed, witnessed substrate operation that yields a κ — and make every repeat free.

1. **A distinct `openrouter` adapter (L1), not a reuse of `openai`.** Same OpenAI chat wire, but its own `wire: "openrouter"` identity so a receipt names the engine honestly (the ollama precedent). It carries attribution headers (`HTTP-Referer`/`X-Title`) and asks for native cost (`usage:{include:true}`). The base URL + key live ONLY in the host vault; the engine identity is the κ of `{wireFormat:"openrouter", modelId:slug}`.

2. **The receipt pins the routing truth (L5).** An aggregator routes a requested slug to a real upstream. The adapter surfaces the model/provider it *actually* served + native cost as `out.meta`; `mintReceipt` pins `holoq:servedModel` / `holoq:servedProvider` / `holoq:cost` **inside the canonical body**. `requestK` names what was *asked*; the served fields name what *ran*. A flipped served provider breaks the address and is refused. This closes the one honesty gap OpenRouter adds beyond ADR-0090's "TLS + host integrity" caveat.

3. **The missing wire — remote inference rides the κ-memo fabric (the magic, L3).** `makeRemoteProvider` (`holo-q-remote-provider.mjs`) wraps the broker as a fabric provider `{id, remote:true, generate}`. Because the fabric keys on `κ(task ⊕ provider.id ⊕ input ⊕ params)`, an identical prompt to the same OpenRouter model is an **O(1) hit with zero network calls** — you pay the frontier model **once, ever**, for a given question. An injected durable `indexStore` (added to `holo-q-fabric.js`) makes pay-once survive a reload. The broker still runs the egress gate and mints the mandatory receipt on the cold path; the receipt is exposed as `provider.lastReceipt` (the boost precedent).

4. **The conscience gates egress; the key never leaks (ADR-0033).** PII in the outgoing prompt → P5 hard block; no grant ⇒ P4 block; default-deny, host-asserted, scoped, revocable. The API key never appears in a grant, a receipt, or the app-facing result.

5. **Surfaced through the one door as a Q.fuse hybrid slot (L4, no new transport).** `withRemoteMember(Q, makeRemoteProvider(...))` adds the remote model as ONE panel member. The default panel stays 100% local; a remote member flips the fusion tier `local`→`hybrid` (a per-call opt-in). A near-repeat (swap a local member) leaves the remote leg a cache hit — the frontier model is not re-paid; an exact repeat runs zero models. No new verb.

## Sovereignty & the honest ZK scope

True *blind* inference (the provider computes on your prompt without seeing it) needs FHE / ZKML / TEE-attestation — **not real at LLM scale, and `holo-zk.js` says so.** This ADR does NOT claim it. What is hologram-native and shipped:

- **Local stays the brain.** OpenRouter is opt-in breadth, never the default; the device tier never egresses.
- **Egress minimization.** P5 red-line block + a `holo-zk` selective-disclosure envelope (genuine SD-JWT membership proof) — only minimal salted claims need leave; the rest stay hidden.
- **Progressive privacy via κ-memo.** Once answered, a repeat never re-egresses.
- **The honest frontier axis.** When a provider returns a TEE/ZKML attestation, it is pinned into the receipt and verified — a strengthening, never a precondition. Named as roadmap, not faked.

## Select any model, via a toggle (seamless)

Pick *any* of OpenRouter's models live, behind one toggle, no reload:

- **Catalog** — `holo-q-openrouter-catalog.mjs` normalizes + searches the public `GET /models` catalog (337+ models, no key to browse). Pure `normalizeCatalog`/`searchCatalog` + one injected-fetch `fetchCatalog`.
- **Controller** — `createOpenRouterController` (`holo-q-remote-provider.mjs`) holds the vaulted base/key in a closure and exposes `listModels(query)`, `setModel(slug)` (a switch is a **new `{wireFormat,modelId}` κ** — vaulted key unchanged — re-wiring the one hybrid slot live), and `setEnabled(on)` (**the toggle**: on ⇒ add the slot, off ⇒ restore the 100%-local panel).
- **Single slot** — `withRemoteMember` drops any prior remote member (switching never stacks); `withoutRemoteMember` restores local.
- **Surface** — `holo-openrouter-studio.html`: a searchable picker + toggle + key field + a real test-fusion button. Works inside the shell (its `window.Q`/conscience) or standalone.

Live-verified through `window.Q`: 337 models browsed, key-gated toggle armed, model switched live to a new κ, a real `openai/gpt-4o-mini` fusion answered correctly with a hybrid `FusionReceipt` (served-by OpenAI, real cost) and a second call cached O(1); a rate-limited `:free` model surfaced an honest 429, not a faked answer. Witnessed 37/37.

## Honest costs

A remote call is governed egress, not serverless — the same deliberate trade ADR-0090 names. The receipt re-derives the bytes received and proves a gated egress under a sealed conscience with exactly these request/response bytes and the served-model OpenRouter reported; it does not independently prove the upstream beyond what the provider attests. The key still lives in the browser — this design contains it (vaulted, host-only) rather than eliminating it. The live shell installer hook and the os-closure re-lock are the staged remaining work.

## Composition

Built on ADR-0090 (the broker, vault, egress gate, receipt), ADR-0084 (the κ-memo fabric), ADR-0098 (the fusion panel), ADR-0091 (the one door), ADR-0033 (the conscience), `holo-zk.js` (the envelope); grounded in Laws L1/L3/L4/L5. Mints only `holoq:InferenceReceipt` (extended with served fields) over PROV-O · ODRL · schema.org · SD-JWT.
