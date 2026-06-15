# ADR-0096 — Holo Q model registry: one any-browser coder brain + a fused specialist set

Status: Accepted (2026-06-15)
Relates: [[holo-q-mux-specialists]] (ADR-0091, one door window.Q) · [[holo-q-engine-vs-hologram-ai]] · [[holo-voice]] · ADR-0090 (governed remote boost)

## Context

Q is a browser-native cognitive organism: it must cover general **conversation** and
agentic **coding** at high quality + low latency, **100% serverless** (in-browser), in
**any** browser. Two hard facts from live testing constrain the model choice:

1. **WebGPU is not universal and aborts on real hardware.** On the operator's Windows
   GPU, onnxruntime-web's WebGPU EP crashed `_OrtCreateSession` loading quantized
   Qwen2.5-1.5B (116 s → `Aborted()`). So **WebGPU is an opt-in speed tier, not the
   floor.** `transformers.js` on **WASM** is the only any-browser guarantee.
2. **WebLLM (mlc-ai) is WebGPU-only** (no WASM fallback). `transformers.js` (WebGPU +
   WASM, onnx-community models) is therefore the any-browser runtime.

A 105-agent deep-research pass (23 primary sources, 25 claims adversarially verified;
20 confirmed, 5 killed) established the per-function picks below. Adversarial
verification **killed** the over-reaches: "SmolLM2-1.7B beats Qwen-1.5B" (0-3),
"3B coder is the sweet spot" (1-2), "Qwen-Coder is SOTA at every size" (1-2). The
honest conclusion: **1.5B is the coding pick — do not reach to 3B/7B.**

## Decision

**Fuse small specialists over one giant model.** Each function gets the smallest model
that clears its quality bar; every model is a content-addressed κ-object (did:holo:sha256),
re-derived on load (Law L5), swappable by re-pointing the κ. The default runtime is
`transformers.js` (WASM any-browser, WebGPU where it works); use **q8, not fp16**.

### Registry (the pinned set)

| Function | Model (q8) | Runtime | κ source | Quality basis | Fallback |
|---|---|---|---|---|---|
| **Brain + Coding** | **Qwen2.5-Coder-1.5B-Instruct** | transformers.js WASM+WebGPU | `onnx-community/Qwen2.5-Coder-1.5B-Instruct` (model_quantized, 1.8 GB) | best compact coder (~0.54 pass@1) | Qwen2.5-0.5B-Instruct |
| Embeddings (memory/RAG/recall/skills) | EmbeddingGemma-300m q8 (`Gemma3TextModel`) | transformers.js WASM+WebGPU — **on an ISOLATED 3.8.1 instance** (`vendor/transformers-embed/`); the main 3.0.2 has no Gemma3 | `onnx-community/embeddinggemma-300m-ONNX` (model_quantized + .onnx_data, ~309 MB) | top text embedder <500M, MTEB | `Xenova/bge-small-en-v1.5` (33 MB, BERT — runs on the 3.0.2 stack if the 3.8.1 path ever fails) |
| Vision (VLM) | Moondream2 | transformers.js WebGPU (WASM unverified → opt-in) | `Xenova/moondream2` | official browser VLM build | SmolVLM |
| Shared cheap base (routing·titling·compression·approval·curation) | SmolLM2-360M-Instruct | transformers.js WASM+WebGPU | `HuggingFaceTB/SmolLM2-360M-Instruct` | one tiny model, 5 functions | Qwen2.5-0.5B |
| ASR (hearing) | whisper-tiny | transformers.js WASM+WebGPU | `onnx-community/whisper-tiny` | Whisper WER | whisper-base |
| Wake recognizer | whisper-base | transformers.js (worker) | `onnx-community/whisper-base` | steadier on lone "Q" | whisper-tiny |
| VAD (attention) | silero-vad | ORT-web WASM | `onnx-community/silero-vad` | — | energy-VAD |
| TTS (speech) | Kokoro-82M | transformers.js WASM+WebGPU | `onnx-community/Kokoro-82M-v1.0-ONNX` | — | speechSynthesis |
| Turn-taking | heuristic (adaptive endpoint) | pure JS | — | — | — |
| **Opt-in GPU tier** (hardware-gated) | ternary engine (falcon-e-3b) / WebLLM | **WebGPU only** | apps/q κ-disks | higher coding quality+speed | the WASM brain |

Conscience, self-perception, identity, wake, proactivity, homeostasis, orchestration
are non-model (deterministic / host / κ-substrate) and remain covered.

### Orchestration topology

- **Always-warm (~420 MB RAM):** silero-vad + whisper-tiny (on wake) + SmolLM2-360M
  (the cheap-function base).
- **Lazy (cached after first use):** Coder-1.5B (first chat/code turn), EmbeddingGemma
  (first search), Moondream2 (first image), Kokoro (first speech).
- **Per-turn:** VAD → whisper-tiny *(hear)* → 360M base *(route + scope)* → Coder-1.5B
  *(reason/code)* OR EmbeddingGemma *(recall)* OR Moondream2 *(see)* → Kokoro *(speak)*.
- **Budget:** transformers.js WASM uses **system RAM, not VRAM** → the warm set is
  RAM-bound (~2 GB with the brain loaded), which is what makes it any-browser. VRAM only
  matters for the opt-in WebGPU tier.
- **Router:** deterministic-first (`route()`), the 360M base for ambiguous/agentic.

### κ-rooted discovery loop (auto-upgrade; the automated "Set to main")

1. **Monitor** the WebLLM `prebuiltAppConfig` + onnx-community/transformers.js index +
   MTEB/EvalPlus/Arena → candidate κs.
2. **Evaluate** candidate vs incumbent on a small held-out per-function eval, measuring
   quality + on-device latency.
3. **Verify + pin** the winner: fetch, sha256-pin (Law L5), re-point the registry κ.
4. **Roll back** on production regression (telemetry) by re-pointing to the prior κ.
   Fully reversible because everything is κ-addressed.

## Consequences

- **Cut as defaults:** Qwen2.5-1.5B-Instruct q4f16 (aborts, superseded); 5 of 6 Q-app
  ternary models (keep ≤1, falcon-e-3b, as the opt-in GPU tier pending a custom-engine
  test on real HW). Weights are .gitignored content-addressed artifacts → refetchable.
- **New capabilities Q gains:** real agentic coding, semantic memory (embeddings — was
  keyword-only), and sight (a real VLM — "Vision" was routing to the text model).
- **Honest tradeoff:** Coder-1.5B q8 on WASM is ~2–3 tok/s (coherent, slow); WebGPU
  (where it works) and the discovery loop are the speed path. Measure per-device with
  QLab; `preset('snappy')` or the 0.5B fallback for a faster floor.
- **Open caveats:** Moonshine (ASR) beats Whisper on WER but has **no confirmed browser
  build** → ASR stays whisper-tiny. The ternary engine's custom WebGPU is **untested on
  the operator's HW** → the opt-in tier is provisional.
