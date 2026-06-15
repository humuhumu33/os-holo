# Exploration — hyper-real, device-adaptive holospaces (κ-streamed · O(1) · WebGPU)

Goal: every holospace tab + app inside it feels as real and immediate as the native machine,
adapting to the user's hardware ⊗ connection, on Hologram's κ-addressed rendering/streaming + O(1)
compute (memory / disk / WebGPU). Findings + a flagged prototype; measure everything.

## Audit — the levers that already exist
- **κ-cache + self-heal** — `os/holo-fhs-sw.js`: every byte resolves by κ, re-derived (Law L5);
  VERIFIED bytes cached once and shared across apps (`KCACHE`) → re-open is **network-free**. A
  missing/wrong κ self-heals from IPFS / a mesh peer by content address. COOP/COEP stamped →
  SharedArrayBuffer + WebGPU available.
- **O(1) WebGPU present layer** — `usr/lib/holo/holo-gpu.js` (`window.HoloGPU`): zero-copy
  `importExternalTexture`, a precomputed **32³ content-addressed LUT** (filmic/tone grade) dispatched
  per pixel in O(1) — "built once per κ, replayed forever". Degrades to plain `<video>` with no GPU.
- **Hardware tiering** — `usr/share/frame/splash.html renderProfile()`: cores × mem × dpr × screen →
  720p…8K, with an internal render cap when the GPU upscaler is present. (Was duplicated; now unified.)
- **κ→render paths** — `holo-render.js`, `holo-gfx.js`, `holo-space3d.js`, `holo-cosmos.js`; the shell
  holospace card is GPU-composited (transform/box-shadow, layered shadow + edge-light already added).
- **O(1) memo** — Holo Q's κ-memo (identical inputs → cached result).

**Gap:** there was no single, *connection-aware*, *reactive* fidelity policy feeding all surfaces, and
no κ-streamed progressive (placeholder→full) path or explicit L1/L2/WebGPU tiering wired in the shell.

## Slice 1 (done) — the shared fidelity policy
`usr/lib/holo/holo-fidelity.mjs` — pure, node-tested, no deps:
- `deviceProfile()` reads cores/mem/dpr/screen/mobile/`navigator.gpu`/`navigator.connection`
  (effectiveType·downlink·saveData)/reduced-motion/COI/HDR/P3.
- `fidelity(profile)` → one settings object: `tier · maxDim · internalMaxDim · upscaleTarget ·
  renderScale · effects{blur,shadow,grain,parallax,bloom} · motion · textureTier · prefetch ·
  targetFps · hdr · p3`.
- `current()/refresh()/subscribe()` + publishes CSS vars (`--holo-fx-blur/-shadow/-parallax`,
  `--holo-render-scale`) and `<html data-holo-fidelity|data-holo-motion>`; re-evaluates on
  resize / connection change / reduced-motion change (debounced). `window.HoloFidelity`.

Verified divergence (node): LOW phone/3G/saveData → 720p, scale .75, lean, prefetch **off**, blur .4,
no parallax/bloom. HIGH workstation/8K/HDR → 8K, full effects, HDR+P3, **eager** prefetch. Reduced-
motion strips blur/parallax/bloom but keeps resolution.

## Plan — next slices (each behind a flag, verified in a real browser at :8123)
2. **Consume the policy in the shell** — multiply the holospace card's blur/shadow/parallax by the
   `--holo-fx-*` vars; gate the card tilt/parallax on `data-holo-motion`; set wallpaper/stream tier
   from `textureTier`. (Edits `shell.html` → reseal.)
3. **κ-streamed progressive rendering** — wallpaper first: ship a tiny κ placeholder (blur-up) → swap
   to the full κ when it streams in + re-derives (Law L5). Then one app shell. Prefetch open
   tabs/recents/hovered links into `KCACHE` per `prefetch`.
4. **O(1) tiered cache** — formalize L1 (in-memory κ-memo) → L2 (`KCACHE`/OPFS, survives reload) →
   WebGPU kernel; a result keyed by its inputs' κ computed once, served from the nearest tier. Wire
   `holo-gpu.js`'s LUT path as the first WebGPU kernel for the wallpaper/canvas.
5. **Realism + latency polish** — spring/interruptible motion, 120Hz-aware; Display-P3/HDR when
   supported; input→paint < 1 frame; move heavy work to workers/WebGPU.

## Measure (harness to build)
Per device+network tier: cold/warm open, tab-switch, sustained FPS, input latency, bytes-over-network
(→ ~0 on warm κ-cache), memory. A/B adaptive vs. fixed baseline on a fast + a slow profile. Log what
the low tier drops (no silent truncation).

## Constraints honoured
Law L5 (re-derive before show) · L4 (pure web platform, no deps) · L1 (content not location) ·
reduced-motion + saveData respected · sealed frames reseal via `tools/reseal-drift.mjs` · ship behind
a flag, never regress the low-end path.
