# ADR-0098 — Q.fuse: a serverless compound model (panel → judge → synthesize) on the κ substrate

Status: Accepted (2026-06-15)
Relates: [[holo-q-mux-specialists]] (ADR-0091, one door window.Q) · [[holo-q-model-registry]] (ADR-0096) · ADR-0084 (mux fabric) · ADR-0090 (governed remote boost) · ADR-0033/0083 (conscience) · ADR-0045/0081 (work receipts) · [[holo-q-engine-vs-hologram-ai]]

## Context

OpenRouter's **Fusion** (and the pi-fusion plugin) ship a "compound model": send a
prompt to a **panel** of 3–5 models in parallel, have a **judge** compare them, and a
**synthesizer** write one new answer none of the panel produced. Their headline — "Fable-5
intelligence at half price" — comes from fusing *frontier hosted* models. We cannot and
will not reproduce that number: the operator constraint is **100% serverless, in-browser**
(ADR-0096), which caps the default panel at the WASM/WebGPU floor.

But the headline is the wrong thing to copy. The load-bearing insight is that the **lift is
the synthesis step, and it is model-size-agnostic**: a diverse panel of small models, judged
and synthesized, beats any one of them (OpenRouter's own budget panel beat GPT-5.5). That
property holds on the WASM floor. So the deliverable is **"compound beats components on the
WASM floor"**, never "Fable-5 in a tab".

A four-sweep grounding of the stack found the substrate already carries ~90% of what fusion
needs, and that fusion's cost problem is exactly what the κ substrate solves:

- The compute **fabric** (`holo-q-fabric.js`) is a content-addressed κ-memo over the durable
  OS κ-store: the first `(provider, input, params)` streams and seals to a κ; every identical
  ask after is **O(1)**, no compute, no token stream.
- The **receipt** canonicalization (`holo-q-receipt.mjs`: `address`/`jcs`/`verifyReceipt`)
  seals a re-derivable PROV-O object (Law L5).
- The **provider** interface (`{ id, generate?|embed?|classify? }`) means *any* generative
  provider is a panel member — including a remote-broker-backed one (ADR-0090).

The one thing the substrate lacked: a primitive that runs **N providers on the SAME prompt in
parallel** and fuses them. The mux routes **one** specialist per task (`routeTask`); nothing
ran an ensemble. That gap is this ADR.

## Decision

Add **`Q.fuse`** — one more verb on the single door (ADR-0091) — implemented as a thin
orchestrator over the existing fabric, receipt, and conscience seams. **No new transport, no
new gate, no new store** (Law L4). New module: `q/holo-q-fuse.js`.

### The three stages, every stage a κ op

```
input ─► PANEL    N providers · same prompt · Promise.all over fabric.run("fuse-panel")
                  → [{ id, value, κ_member }]ₙ      each leg independently κ-memoized
           │
           ▼
        JUDGE     fabric.run("fuse-judge", buildJudgePrompt(input, answers))
                  → consensus · contradictions · unique insights · blind spots, κ_judge
           │
           ▼
     SYNTHESIZE   fabric.run("fuse-synth", buildSynthPrompt(input, answers, judge))
                  → one NEW answer, κ_synth          (default synth = the strongest brain)
           │
           ▼
       RECEIPT    mintFusionReceipt → ONE holoq:FusionReceipt
                  prov:used = [κ_member…(tagged), κ_judge] · prov:generated = κ_synth
```

`buildJudgePrompt` / `buildSynthPrompt` are **pure** and embed every upstream output as text,
so each stage's κ is a deterministic function of everything before it — which is *why*
near-repeat is cheap (below).

### What is reused vs new

| Capability | Status | Where |
|---|---|---|
| Provider interface, streaming compute, seal-to-κ | reuse | `holo-q-fabric.js` `run()` |
| O(1) L1/L2 memo (hot LRU + durable index→kstore) | reuse | `holo-q-fabric.js` `memoKey`/`hot`/`index` |
| Receipt canonicalization + Law-L5 re-derivation | reuse | `holo-q-receipt.mjs` `address`/`verifyReceipt` |
| Conscience verdict carried into the receipt | reuse | `holo-conscience.js` `evaluate` |
| Governed remote panel slot (per-host grant) | reuse | `holo-q-remote.mjs` `createRemoteBroker` |
| **Parallel panel runner + judge/synth prompts** | **new** | `holo-q-fuse.js` `createFuse` |
| **`holoq:FusionReceipt` type + `Q.fuse` verb** | **new** | `holo-q-fuse.js` · `holo-q.js` |
| **Default panel assembly (persona / model)** | **new** | `holo-q-fuse-panel.js` `defaultPanel` |
| **Live deliberation studio (the UX)** | **new** | `holo-q-fuse-studio.html` |

The host wires the panel (which models) via `Q.configureFuse({ panel, judge?, synth? })` —
exactly as binding a specialist is the host's job (mux). With no panel configured, `Q.fuse`
returns an honest notice and never throws, like `Q.ask`.

### Default panel — the honest diversity tension, resolved two ways

Real MODEL diversity (3 distinct loaded models) is multi-GB and device-gated; the any-browser
warm set (ADR-0096) is one brain. `holo-q-fuse-panel.js` ships both, labelled, never faked:

- **PERSONA mode (default):** one warm brain, N members differing by reasoning *lens* (concise ·
  first-principles · skeptic) — diverse *paths*, not weights (the self-consistency idea; synthesis
  still lifts above a single greedy pass). Labelled `diversity:"persona"`.
- **MODEL mode (upgrade):** when the host supplies ≥2 distinct samplers, each registry model
  becomes a member. Labelled `diversity:"model"`.
- With nothing loaded it **refuses** (returns an empty panel + honest reason) rather than inventing
  a model — Law L5.

A `(messages,opts)→deltas` sampler (the `holo-q-codegen.js` / `holo-voice-llm.mjs` shape) is adapted
into the fabric's `{id, generate(input,opts)}` provider, with the persona baked into the *provider*
so the same question addresses a distinct κ per member — which is what carries diversity through to
the synthesis.

### The O(1) story (the edge, made concrete)

The fabric memo-keys each leg by `κ(task ⊕ providerId ⊕ input ⊕ params)`.

- **Exact repeat** (same question, same panel): every leg + judge + synthesis is a hot/durable
  hit → the whole fusion returns with **zero models run**. OpenRouter re-pays 5× every call.
- **Near-repeat** (swap one panel member): the unchanged members are O(1) hits; only the new
  member's leg runs, then judge + synthesis recompute because their input changed. Cost = *one*
  panel leg + judge + synth, not five.
- **Identical output bytes → identical κ** (Law L3): if two different panels happen to produce
  the same synthesis text, they dedup to the same κ — content addressing, not call addressing.

Witnessed end-to-end in `tools/holo-q-fuse-witness.mjs` (**27/27**): parallel panel, distinct
per-member κs, zero-model exact repeat, single-leg near-repeat, FusionReceipt re-derivation, a
tampered receipt refused, and the hybrid-tier flip. The default-panel assembly is witnessed in
`tools/holo-q-fuse-panel-witness.mjs` (**18/18**: persona/model mode selection, the sampler→provider
adapter, refuse-when-unloaded, `configureDefaultFuse`). **Browser-verified** via the studio
(`holo-q-fuse-studio.html`) over the live engine: first run sealed a verifiable receipt with 3
distinct persona κs; the exact repeat returned in **~1 ms** with three `hot · O(1)` badges and zero
models run; a `fetch` guard held at **0 network calls** throughout.

### The hybrid lever (opt-in, never default)

A panel member flagged `remote: true` is a governed frontier slot routed through the ADR-0090
broker (vault-held key, per-host grant, egress-gated, receipted). The fusion's `tier` then
seals as **"hybrid"** instead of **"local"** — an honest, per-call marker that this run was no
longer 100% serverless. The seam is "a provider is a provider"; no special-casing in fuse.

## Consequences

- **What Q gains:** a compound answer that lifts above the best single on-device specialist,
  fully serverless, with a streaming UI (N panel cards filling in parallel → judge → synthesis
  assembling live) and a tap-to-verify receipt over the whole DAG.
- **Honest limits (stated, not hidden):**
  - It lifts above the best *small* model; it does **not** reach frontier. Never frame it as
    Fable-5-class.
  - **No per-token streaming seal** — a κ seals at leg *completion*; streaming is transport. (The
    earlier "streaming self-verifying" framing was corrected here.)
  - **No compute fan-out across the mesh** — `holo-peers.mjs` recovers *objects* across peers,
    not *compute*. The panel runs in the tab where Q runs. Distributed panels need a
    step-delegation transport that does not exist; out of scope for v1.
  - **Suspend/resume** of a long fusion is possible in principle (ADR-0077 `holo-suspend.mjs`)
    but that module is a spike (witness-green, not gated) — not promised here.
- **Default panel:** `holo-q-fuse-panel.js` assembles it — PERSONA mode (one warm brain, diverse
  lenses) by default, MODEL mode (Coder-1.5B + SmolLM2-360M + a third distinct family; judge =
  Coder-1.5B; synth = the active brain) when ≥2 samplers are loaded. **Diversity across families/
  lenses** is what makes synthesis beat a vote — redundancy collapses it back to majority.
- **Shell wiring (landed):** `shell.html` calls `configureDefaultFuse(window.Q, { sampler })` the
  moment a warm on-device brain loads (`wireFuse(device)`, one-time, at both codegen bind points) —
  so `Q.fuse` lights up in PERSONA mode with the same brain the build uses, and returns its honest
  notice until then. The import path mirrors the adjacent `holo-q-codegen.js` load; syntax-checked.
  Not exercised live end-to-end here: the warm-brain fusion needs a multi-GB model behind an
  authenticated desktop boot, outside this harness — the engine, panel, and `configureDefaultFuse`
  path are browser-verified independently (above).
- **Gated (landed):** two conformance rows — `#q-fuse` (engine, `holo-q-fuse-witness.mjs`) and
  `#q-fuse-panel` (default panel, `holo-q-fuse-panel-witness.mjs`) — are in `os/etc/conformance.jsonld`,
  both registered in `gate.mjs`'s live set, both **`earl:passed`**. `shell.html` was resealed
  (`reseal-drift` → `os-closure.json`) and its Secure-Boot pin repinned (`repin-boot-loaders` →
  `boot-manifest.json`), so the edit re-derives (Law L5). The gate still reports pre-existing,
  unrelated failures on this branch (boot / app-coverage / substrate / app-ui / holo-code / qvac /
  telemetry / shell-canonical's `files`-embed + default-boot-route checks) — none touched by this
  work; the two Q.fuse rows are green and no net-new failure was introduced.
- **Reversible:** `Q.fuse` is additive; nothing else changes. Remove the verb and the door is
  exactly ADR-0091. Pending follow-ups (not blocking): the `os-closure.json` κ-pin for the new
  served modules (the deferred re-lock cascade, as ADR-0052/0081/0097); the registry's discovery
  loop choosing the MODEL-mode panel.
