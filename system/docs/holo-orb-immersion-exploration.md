# Holo Q Orb — immersion & adaptivity exploration

How to make Q's κ-addressed orb dramatically more immersive and adaptive **using the stack we already have** — no CDN, on-device, κ-native, offline-first, framerate-safe.

Ran through the deep-research harness (103 agents, 21 sources, 25 claims adversarially verified, 2 killed). This doc is the ranked, buildable result. Everything plugs into [holo-voice-orb.mjs](../os/usr/lib/holo/voice/holo-voice-orb.mjs) (the orb's κ descriptor + transform stack) and [holo-voice.js](../os/usr/lib/holo/holo-voice.js) (the `orbLevel()`/`orbColor()` signal seam).

## Why

A single RMS `volume` scalar can't carry presence. Speech has *shape* (bands, prosody, transients), the user has *state* (listening/thinking/speaking), and the machine has an *environment* (theme, time, device). Feeding those signals — which we already compute — turns a reactive ball into something that feels like it's listening and thinking. The constraint is what makes it tractable: lean on what's already on-device and content-addressed; gate the expensive stuff behind capability and keep a graceful floor.

## What shipped (v0.28) — Tier 1, near-free, behind the κ descriptor

The orb's drive signal went from one number to a rich signal `{ level, bass, mid, treble, bright, onset, state }`, all derived from the **AnalyserNode we already hold** (`getByteFrequencyData`, zero download). VERIFIED in-browser/offline (Web Audio FFT).

1. **Frequency bands over RMS** — bass → a uniform "pump", mids → surface texture (noise amp), treble → spectrum-spin + sparkle. Base `level` still drives the morph amplitude so the tuned look is preserved.
2. **Voice prosody → warmth** — spectral centroid (`bright`) shifts the spectrum toward white on brighter/sharper speech.
3. **Onset flares** — a transient envelope (positive energy jumps) gives a brief swell + brightness flash on consonants/beats. The "alive" cue.
4. **State choreography** — `STATE.live` maps to body language: listening = calm wide breath (slower spin, more breathe); thinking = tight fast swirl (more twist, faster spin); speaking = bands drive it fully; gold mind-flare on Holo Mind actions (unchanged).

Seam: `orbLevel()` returns the signal; `updateMorph(sig,…)` reads it (number fallback retained). No new dependency, no CDN, framerate-neutral.

## Tier 2 — cheap, no CDN, high adaptivity

5. **Wallpaper/accent palette adaptation — DONE (v0.29).** The orb samples the desktop wallpaper (the `#world` background-image — same-origin path or blob, so no canvas taint), pulls its vibrant hues into spectrum stops, and adopts them via `orbColor().stops`; falls back to a vivid arc around the OS accent (`--holo-accent`), then to the brand spectrum. Hand-rolled 28×28 canvas sampler — **no `node-vibrant`**. Recomputed only when the wallpaper/accent changes (on settle, on tab-return, on orb-open; `HoloVoice.adaptOrb()`). Verified: on the UOR blue-earth wallpaper the orb narrowed from the full hue wheel to blue→violet→magenta (210–300°).
6. **Circadian tint — DONE (v0.30).** Warmer + dimmer at night, cool + bright by day — a smooth `(1+cos)/2` night curve (1 at midnight → 0 at noon) → `{warm,dim}` fed via `orbColor()`; the orb shifts toward red + dims (never off). Verified: night vs noon = dimmer (0.41 vs 0.52) and warmer (R/B 1.50 vs 1.05).
7. **Frame-time adaptive quality — DONE (v0.30).** The render loop tracks an EMA of frame `dt`; every 45 frames it scales `renderer.setPixelRatio` down (to 0.7) when fps < 45 and back up (to the device cap) when fps > 57. O(1), zero download — holds framerate on weak GPUs / battery saver. (Lighter than `detect-gpu`; no dep.) Can't measure fps headless, but it's sound by construction and the live orb runs clean.
8. **Presence/idle — DONE (v0.30).** A `presence()` factor (1 when in conversation or recently active, ramping to a serene 0.32 after ~45s idle) scales the orb's AMBIENT motion (spin/breathe/twist + base rotation) — voice reactivity stays full. Reduced-motion forces calm (slow spin, no shimmer). Activity tracked via pointer/key/wheel/touch + voice; tab-hidden pauses via rAF throttle.

## Tier 3 — high ceiling

8.5. **Particle aura — DONE (v0.31).** A luminous shell of additive `THREE.Points` around the wireframe, voice-reactive: it breathes outward with `level`+bass+onset (capped), sparkles on treble/onset, colours track the same adaptive spectrum, drifts in slow orbit, and obeys circadian warm/dim + presence/reduced-motion. This delivers the research's "GPGPU particle field" idea **robustly on the existing r134 core** — no Three.js upgrade, no WebGPU, no render-targets, transparent-safe, offline. Golden-spiral distribution; count (700) thins automatically on weak GPUs via the frame-time probe. Verified: 120/120 particles lit + spectrum-coloured, shell pulsed to the cap on a rich signal, additive blending, zero errors. Tunable in `ORB_DESCRIPTOR.aura` (count/spread/size/drift).

9. **WebGPU raymarched volumetric orb — DONE (v0.32).** A fullscreen WGSL fragment shader marches a noise-displaced SDF sphere with an intrinsic volumetric glow, coloured by the same κ spectrum (wallpaper-adaptive) and driven by the same live signal + circadian + presence. Built as **raw WebGPU** (`voice/holo-voice-orb-gpu.mjs`) — NO Three.js upgrade (r134 can't do WebGPU anyway), NO vendoring (WGSL inline), so it stays 100% serverless. **O(1) CPU/frame**: we write ~48 uniform floats + one draw call; all work is GPU-parallel (no per-vertex CPU loop), and the render resolution auto-scales to hold framerate on any device. Strictly gated: it's the hero for the **live overlay only** (one on-demand context; the desktop/button orbs stay the efficient WebGL particle orb), on a dedicated canvas, and **any failure → WebGL orb → 2D orb**, so the user never sees a broken orb. Verified in-browser: adapter+device+shader+pipeline build with NO validation error (a `pushErrorScope` makes a bad shader fall back), draws submit, κ derives, the bridge selects `webgpu` for the overlay (445×445, WebGL floor hidden), zero console errors. The *look* needs a real browser (headless can't screenshot WebGPU). Tunables in `ORB_GPU_DESCRIPTOR` (march steps/radius/freq, glow, spectrum).

   *Still future:* the same via Three's TSL/WebGPURenderer (would need the r134→~r167 upgrade) — unnecessary now that the raw-WebGPU path delivers it without the dependency churn.
10. **Bloom/feedback glow** — real, but on r134 needs vendoring more Three post-processing modules; a cheap fake (additive brightness + a feedback canvas) gets most of the look. Medium.
11. **Model-as-visual ("see it think" via real latent/attention)** — SPECULATIVE/expensive (attention-viz is research). The cheap proxy (#4 state choreography) delivers ~80% of the feeling for ~0% of the cost. Skip until there's a clear win.

## Hype killed (don't over-engineer)

- **"3 flashes/sec = seizure cap"** — *refuted.* WCAG's flash rule targets bright, large-area flashing, not smooth pulsing; no hard cap on the orb's breathing. Still keep it calm and honor **SC 2.2.2** (moving content pausable after 5s).
- **"`prefers-reduced-motion` disables all animation via CSS"** — *refuted.* CSS can't stop a JS rAF loop — must be handled in JS (we already do via `_rm`).
- **Ambient-light sensor & gyro parallax** — *not reliably available* (experimental/flagged across browsers). Don't depend on them; optional progressive enhancement at most.

## Constraints (every idea above obeys these)

100% serverless + on-device, no CDN at runtime (ADR-0029); κ-native + offline-first; holds framerate with graceful degradation (reduced-motion in JS, low-GPU/battery floor); calm-by-default and accessible.

## Sources (selected)

- Web Audio FFT / AnalyserNode — frequency-domain in-browser. [addpipe guide](https://blog.addpipe.com/understanding-audio-frequency-analysis-in-javascript-a-guide-to-using-analysernode-and-getbytefrequencydata/)
- Meyda — offline self-hostable spectral features (we hand-roll bands instead). [meyda.js.org](https://meyda.js.org/) · [github](https://github.com/meyda/meyda)
- Three.js WebGPURenderer + TSL. [threejs manual](https://threejs.org/manual/en/webgpurenderer.html) · [TSL field guide](https://blog.maximeheckel.com/posts/field-guide-to-tsl-and-webgpu/) · [migration](https://www.utsubo.com/blog/webgpu-threejs-migration-guide)
- WebGPU fluids/particles/raymarch in-browser. [codrops fluids](https://tympanus.net/codrops/2025/01/29/particles-progress-and-perseverance-a-journey-into-webgpu-fluids/) · [webgpu-raymarching](https://github.com/battesonb/webgpu-raymarching)
- GPU tiering offline. [detect-gpu](https://github.com/pmndrs/detect-gpu) · [isFallbackAdapter](https://developer.mozilla.org/en-US/docs/Web/API/GPUAdapter/isFallbackAdapter)
- Palette extraction. [node-vibrant](https://github.com/Vibrant-Colors/node-vibrant)
- Sensors (limited support). [AmbientLightSensor](https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor) · [W3C sensors roadmap](https://www.w3.org/2018/12/web-roadmaps/mobile/sensors.html)
- Accessibility. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [web.dev motion](https://web.dev/learn/accessibility/motion)
