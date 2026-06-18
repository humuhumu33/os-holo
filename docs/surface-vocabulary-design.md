# Hologram Surface Vocabulary — Design (Phase 3b)

**Status: DESIGN / for review. No production code yet.** A throwaway spike is allowed to de-risk one assumption; nothing merged. Build begins only after sign-off.

Companion to the κ-render substrate work (Phases 0–3a). Honest about *implemented* vs *proposed*.

## 0. North star

The fewest orthogonal primitives that **compose into everything**, each a self-verifying κ-object, each rendered on the GPU, each magical. Abstract complexity; deliver simplicity. The streamed experience is **100% κ-addressed across every media type**: low latency, high FPS, very sharp, instantly responsive to pointer + text, fully interactive, immersive — one unified seamless surface.

## 1. Conformance frame (holospaces — strict)

Grounded in the holospaces repo (`docs/` arc42 incl. `08-Concepts.md`, `Conceptual-Model.md`, `Lifecycle-Technical-Processes.md`; `vv/` discipline) reconciled with the local tree.

- **Laws:** L1 identity-is-content · L2 one canonical axis · L3 dedup (store is the memory) · L4 pure web platform · L5 verify-before-use, fail-closed. **Verify-before-GPU is non-negotiable** — no byte reaches a GPU buffer before re-deriving its κ.
- **Conscience red lines** (CONSTITUTION.md): P5 data-minimisation (render/input path emits **zero** telemetry), P7 kill-switch supremacy (input routes through the gate, fail-closed).
- **V&V discipline:** every capability lands as an **expected-RED `CC-*` target** witnessed against an **external authority**, built to green, then **promoted** to `vv/suites/`. Rows named in §8.
- **Canonical axis:** BLAKE3 σ-axis (sealed in Phase 0b, `holo-substrate-witness` 7/7). Surfaces address and key end-to-end on BLAKE3; sha256 is the legacy interop projection (see §9 seam).

## 2. The primitive kinds — six, hard cap

Every kind is a declarative, JSON-serialisable κ-object: `{ "@type":"holo:Surface", kind, ... }`. *Implemented today:* `card` (a `container` with a fill + text) via `holo-surface.mjs`. Everything below is *proposed*.

| Kind | Irreducible because | Spec (core fields) | Backend | Memo strategy | κ-addressing |
|---|---|---|---|---|---|
| **container** | the ONLY structure/decoration primitive — layout + optional fill/border/radius/shadow + children. The "card" is just a container with a fill. | `layout: stack\|grid\|flow\|free`, `w/h/sizing`, `gap/pad`, `fill?/border?/radius?/shadow?`, `children:[κ\|spec]` | WGSL SDF (fill/border/shadow) + CPU layout | layout result → `handle` (L2 source = computed boxes; L1 = draw list); pipeline → `memo` | the container κ; children are κ refs (L3 dedup) |
| **text** | irreducible content; resolution-dependent rasterisation | `text`, `font/size/weight/color`, `wrap`, `align` | rasterise → glyph atlas → sampled texture | `handle` two-layer (atlas bytes → L2; GPUTexture → L1), keyed per run⊕DPR | run is part of the spec κ; shared atlas content-derived |
| **image** | raster content | `src:κ`, `fit`, `tint?` | decode → GPUTexture | `handle` (decoded bytes → L2; texture → L1) | `src` is a raster κ (png/jpeg/webp) |
| **vector** | resolution-independent sharpness at any DPR (icons/logos) — rasterising loses it | `src:κ` (SVG/path), `fill/stroke` | tessellate (or re-rasterise per DPR) | `handle` keyed per (vector κ ⊕ DPR) | `src` is an SVG/path κ |
| **media** | time-based; must NOT be re-rendered on the GPU | `manifest:κ`, `kind:video\|audio`, `poster?` | **delegate** to MSE `<video>`/WebAudio, composited as a layer (or external texture) | segment cache via existing video pipeline | manifest κ + each CMAF segment a κ (see §4) |
| **framebuffer** | opaque external pixel source (legacy, quarantined) | `engine:κ`, `image:κ` | v86/WebGL → `CanvasTexture` (holo-3d pattern) | engine+image κ-gated; frames transient | source κ-gated; per-frame pixels transient (honest exception, §4) |

**Rejected by composition:** "card", "list", "panel", "button", "grid", "row" — all are `container` + children + a small style set. No component zoo. A *button* is a `container` with a fill + a `text` child + an interaction binding (§5), not a kind.

## 3. Composition model

- A `container.children` is an ordered list of **κ references** (resolved → L5-verified → L3-deduped) or inline specs. Each child is itself a standalone-renderable κ-surface — the **holographic principle**: the whole scene reconstructs from any fragment's κ.
- **Layout** (box model: stack/grid/flow/free) is computed **once** per `(container κ ⊕ viewport class ⊕ DPR)` and memoised via `handle` (the computed box list is the serialisable L2 source; the GPU draw list / vertex buffer is the L1 hydrate). Resize within a viewport class is a rebind.
- **A composed scene is one addressable κ** — the root container's κ. Streaming a scene = streaming its root κ; children stream in via the existing `warm`/`prefetch`/`autoStream` primitive in `holo-render.js`, deduped by the arena (L1) and OPFS (L2).
- Identity is content (L1): editing any node mints a new κ up the tree (a Merkle-ish surface tree). Shared subtrees (an icon, a row template) resolve once across the whole OS (L3).

## 4. 100% κ-addressing across every media type

- **text / container** — content lives in the spec κ; the glyph atlas is content-derived from `(run ⊕ font ⊕ DPR)`.
- **image / vector** — `src` is a content κ; decoded/tessellated output is `handle`-cached, never refetched unverified.
- **video / audio** — the `manifest` is a κ; **each CMAF/segment is a κ** (the `video` app already content-addresses segments). MSE appends only segments that re-derive (L5). No CDN/path load → no KAPPA-1 hole.
- **framebuffer / live** — the *engine + boot image* are κ-gated (proven: holo-3d, holo-linux). **Honest exception:** per-frame pixels of a 60fps emulator or a live WebRTC stream are **transient, not κ** — you cannot content-address every frame. The *source* is κ-gated; the pixels are a verified-source projection. This is the one place "100% κ" means "κ-gated source," and the design says so plainly rather than overclaiming.

## 5. Input + interactivity model (the hybrid)

The key decision: **the DOM-reference renderer is not just a fallback — it is also the semantics/input/a11y layer.** GPU draws pixels; a synchronized, hidden DOM mirror provides hit-testing fallback, focus, IME, and accessibility. (This is how production GPU UIs, e.g. Flutter, stay correct.)

- **Pointer:** a CPU spatial index of leaf bounds is built during layout (keyed by κ). A pointer event hit-tests the laid-out tree → the κ of the hit surface → a declarative interaction event. O(log n), **no GPU readback** → sub-frame latency.
- **Text input + IME:** a real DOM `<input>`/`contenteditable` positioned over the focused `text` surface handles composition/IME (the honest way to get IME); keystrokes mutate the text spec → re-render (unchanged runs hit the atlas memo). IME *requires* DOM — embraced, not fought.
- **Declarative + verifiable:** interactions are κ-addressed bindings (`event → action κ`); dispatch routes through the **conscience gate, fail-closed (P7)**; the path emits **no telemetry (P5)**.
- **Accessibility:** the DOM mirror *is* the ARIA tree, kept in lockstep with the surface tree — a11y for free, and it doubles as the parity oracle (§7).

## 6. Performance budget (per device tier)

| Path | Target | Mechanism |
|---|---|---|
| Warm rebind (cached pipeline+atlas+layout) | **< 1 frame (sub-ms)** | HoloMemo L1 (measured 0.4ms in Phase 1) |
| Warm post-reload | a few ms, no recompute | L2 source bytes → re-upload (two-layer) |
| Cold first paint | front-loaded via idle `warm()`/`autoStream` | rarely seen |
| Steady state | **60–120fps**; input→pixel **≤16ms** | one draw pass; no per-frame CPU recompute |
| Sharpness | render at `min(DPR, 2–3)`; SDF/MSAA AA; vector re-raster per DPR | "very sharp" within source resolution |
| Tier 0 (no WebGPU) | 60fps held by lookup-not-recompute | DOM reference + memo |

**Honest caps:** sharpness is bounded by source resolution (a 1024² framebuffer can't be 8K); huge scenes are bounded by GPU memory; remote/8K-per-frame streaming is **not** promised (no tile/delta model — the named open problem). "Magical" is true for local κ-surfaces and segmented media; it is *aspirational* for remote high-FPS until tiling exists.

## 7. DOM-reference parity gate

DOM stays the **truth** each GPU kind must match. Replace the current pixel-spot check with: render the same κ on both backends, rasterise the DOM mirror (SVG `foreignObject`→canvas), and diff within a per-kind tolerance (text looser, fills tight). Because the DOM mirror is also the a11y/semantic layer, *semantics* are always DOM-true; *visual* parity is the gated, tolerance-bounded claim.

## 8. Conformance plan (CC-* rows → external authority)

| Row | External authority | Witness proves |
|---|---|---|
| `CC-render` (extend, exists) | IANA media types; `schema:encodingFormat`; Law L5 | dispatch is a view over re-derived bytes |
| `CC-surface-layout` (new) | W3C CSS Box/Flexbox/Grid | container layout matches CSS semantics; DOM-parity |
| `CC-surface-text` (new) | Unicode UAX #14/#29; W3C CSS Fonts/Text | line-breaking + shaping parity; atlas is content-derived |
| `CC-surface-input` (new) | W3C Pointer Events; UI/Input Events; WAI-ARIA | hit-test + IME + a11y correctness; gate-routed, no telemetry |
| `CC-surface-media` (new) | W3C MSE; WebCodecs; IANA media types | every segment re-derives (L5); no unverified load |
| `CC-surface-gpu` (new) | W3C WebGPU | verify-before-GPU; pipeline/atlas O(1) reuse |

Each: author the **expected-RED target** in `vv/targets/`, build to green, **promote** to `vv/suites/` with its arc42 ch.10 catalog row. (Matches the existing CC-render/-linkeddata/-sparql/-reasoning/-owl/-did/-vc family.)

## 9. Open seams to resolve (decisions proposed)

1. **Hash-axis** — `holo-render.js` verifies on **sha256** internally; the substrate σ-axis is **blake3**. *Proposed:* surfaces address/key/verify on **blake3 end-to-end** (memo keys already blake3); bridge legacy sha256 via the dual-axis resolver (both axes already in every closure entry). Migrate holo-render's L5 to blake3 in a contained pass.
2. **Pipeline non-serialisability** — pipelines stay session-L1 (`memo`, recompile on reload, fast); only *assets* use the two-layer L2. Accepted.
3. **GPU/DOM text divergence** — metrics differ; the DOM mirror is the semantic truth, visual parity is tolerance-bounded. Accepted with a generous text tolerance + DPR atlas quality.
4. **Multi-WebGPU verification** — headless screenshot can't capture multi-canvas pages; verify via pixel-readback + DOM structure + Node witnesses (as in Phases 1–3a). Tooling limit, documented.

## 10. Top 5 risks → mitigation

1. **Input latency / IME on GPU surfaces** → DOM semantic mirror + CPU spatial hit-index; sub-frame, no readback.
2. **Text quality/parity GPU vs DOM** → DOM = a11y/semantic truth; DPR-scaled atlas; tolerance gate.
3. **Vocabulary scope creep** → 6-kind hard cap; reject anything composition expresses; orthogonality review per addition.
4. **Hash-axis fork** → blake3 end-to-end for surfaces + dual-axis resolve bridge.
5. **Weak/no-WebGPU devices** → DOM reference path + memo (lookup-not-recompute); honest per-tier caps.

## 11. Smallest viable first build slice (for review)

Build **`container` (stack + grid) + `text` + `image`**, with:
- composition (a container referencing child κ-surfaces; L3 dedup; scene = root κ),
- the DOM-reference/a11y/IME mirror + CPU hit-index (so it's interactive, not just pixels),
- `handle` two-layer for atlas/image/layout; blake3 keys,
- a `CC-surface-layout` + `CC-surface-text` expected-RED target.

This renders a real **content-card feed/list** — enough to migrate one simple app view (e.g. a `notepad` outline row set or a `search`/feed list) and prove an existing app inherits the GPU path in practice. Defer `vector`, `media`, `framebuffer` to later slices.

**Stop here for review. Build nothing until this slice + vocabulary are approved.**
