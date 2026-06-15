// holo-fidelity.mjs — the ONE adaptive-fidelity policy for Hologram OS (exploration: hyper-real,
// device-adaptive holospaces). It reads the user's hardware ⊗ connection ⊗ preferences and derives a
// single settings object every surface consumes — so a weak phone on 3G and a workstation on fibre
// both feel right: never janky, never under-using good hardware. Pure web platform (Law L4); the
// decision function is pure (node-testable); browser probes are guarded so it imports anywhere.
//
//   import { current, refresh, subscribe, fidelity, deviceProfile } from "/_shared/holo-fidelity.mjs";
//   const f = current();            // { tier, renderScale, effects, motion, textureTier, prefetch, … }
//   subscribe(() => relayout());    // re-fires on resize / network change / reduced-motion change
//   It also publishes CSS vars (--holo-fx-*, --holo-render-scale) + <html data-holo-fidelity> for CSS.

// ── the PURE decision: device+connection profile → settings (no globals; unit-testable) ───────────
export function fidelity(p) {
  p = p || {};
  const cores = p.cores || 4, mem = p.mem || 4, dpr = Math.min(p.dpr || 1, 4);
  const screenPx = p.screenPx || 1920, mobile = !!p.mobile, gpu = !!p.gpu;
  const save = !!p.saveData, rm = !!p.reducedMotion, batt = p.batterySaver === true;
  const eff = p.effectiveType || "4g", down = p.downlink == null ? 10 : p.downlink;

  // hardware tier (mirrors splash.html renderProfile; one source of truth now)
  let tier;
  if (mobile) tier = (cores >= 6 && mem >= 4 && gpu) ? "1080p" : "720p";
  else if (cores >= 12 && mem >= 8 && screenPx >= 7000 && gpu) tier = "8k";
  else if (cores >= 8 && mem >= 8 && gpu) tier = "4k";
  else if (cores <= 4 || mem <= 4 || !gpu) tier = "1080p";
  else tier = "1440p";
  const DIM = { "720p": 1280, "1080p": 1920, "1440p": 2560, "4k": 3840, "8k": 7680 };
  const maxDim = DIM[tier];
  // WebGPU present layer (holo-gpu.js) Lanczos-upscales → render lean (≤1440) and reconstruct to maxDim
  const internalMaxDim = gpu ? Math.min(maxDim, 2560) : maxDim;
  const upscaleTarget = gpu ? maxDim : internalMaxDim;

  // connection class
  const slowNet = save || eff === "slow-2g" || eff === "2g" || (down > 0 && down < 1.5);
  const fastNet = !slowNet && (eff === "4g" || down >= 5);

  // a single "low tier" predicate gates the expensive niceties
  const low = mobile || cores <= 4 || mem <= 4 || !gpu || batt;

  let renderScale = tier === "720p" ? 0.75 : tier === "1080p" ? 0.9 : 1;
  if (batt) renderScale *= 0.85;

  const effects = {                                   // 0..1 budgets a surface multiplies its effect by
    blur: rm ? 0 : (low ? 0.4 : 1),                   // backdrop/frost blur radius
    shadow: low ? 0.5 : 1,                            // drop-shadow depth
    grain: (low || rm) ? 0 : 1,                       // film grain / dither
    parallax: rm ? 0 : (mobile ? 0 : (low ? 0.35 : 1)),// card tilt / depth parallax
    bloom: (low || rm) ? 0 : 1,
  };

  return {
    tier, maxDim, internalMaxDim, upscaleTarget, dpr,
    renderScale: +renderScale.toFixed(2),
    effects,
    motion: rm ? "reduced" : (low ? "lean" : "full"),  // animation richness
    textureTier: slowNet ? "low" : (fastNet && !mobile ? "high" : "medium"),
    prefetch: slowNet ? "off" : (fastNet ? "eager" : "lazy"),   // κ-prefetch aggressiveness
    targetFps: (mobile || batt) ? 60 : 120,
    gpu, slowNet, fastNet, low,
    coi: !!p.crossOriginIsolated, hdr: !!p.hdr, p3: !!p.p3,
  };
}

// ── browser probe: read the live device/connection/preferences (guarded for node) ─────────────────
export function deviceProfile() {
  const hasWin = typeof window !== "undefined";
  const n = typeof navigator !== "undefined" ? navigator : {};
  const c = n.connection || n.mozConnection || n.webkitConnection || {};
  const mm = (q) => { try { return typeof matchMedia === "function" && matchMedia(q).matches; } catch (e) { return false; } };
  const dpr = (hasWin && window.devicePixelRatio) || 1;
  const scr = typeof screen !== "undefined" ? Math.max(screen.width || 0, screen.height || 0) : 0;
  const mobile = mm("(pointer:coarse)") || /Mobi|Android|iPhone|iPad/i.test(n.userAgent || "");
  return {
    cores: n.hardwareConcurrency || 4, mem: n.deviceMemory || 4, dpr, screenPx: scr * dpr, mobile,
    gpu: typeof navigator !== "undefined" && !!navigator.gpu,
    effectiveType: c.effectiveType || "4g", downlink: c.downlink, saveData: !!c.saveData,
    reducedMotion: mm("(prefers-reduced-motion: reduce)"),
    crossOriginIsolated: hasWin && !!window.crossOriginIsolated,
    hdr: mm("(dynamic-range: high)"), p3: mm("(color-gamut: p3)"),
  };
}

// ── live policy + CSS publication + reactivity ────────────────────────────────────────────────────
let _cur = null;
const _subs = new Set();
export function current() { return _cur || (_cur = fidelity(deviceProfile())); }

export function applyVars(f) {
  if (typeof document === "undefined") return;
  const r = document.documentElement, S = (k, v) => r.style.setProperty(k, v);
  r.setAttribute("data-holo-fidelity", f.tier);
  r.setAttribute("data-holo-motion", f.motion);
  r.toggleAttribute("data-holo-hdr", !!f.hdr);     // display can show beyond-SDR highlights
  r.toggleAttribute("data-holo-p3", !!f.p3);       // wide-gamut display → richer accent/color
  S("--holo-fx-blur", String(f.effects.blur));
  S("--holo-fx-shadow", String(f.effects.shadow));
  S("--holo-fx-parallax", String(f.effects.parallax));
  S("--holo-render-scale", String(f.renderScale));
}
export function refresh() { _cur = fidelity(deviceProfile()); applyVars(_cur); _subs.forEach((cb) => { try { cb(_cur); } catch (e) {} }); return _cur; }
export function subscribe(cb) { _subs.add(cb); return () => _subs.delete(cb); }

// wire the live re-evaluation triggers (resize / network change / reduced-motion change) — debounced.
if (typeof window !== "undefined") {
  let t = 0; const ping = () => { clearTimeout(t); t = setTimeout(refresh, 200); };
  try {
    applyVars(current());
    window.addEventListener("resize", ping, { passive: true });
    const c = navigator.connection; if (c && c.addEventListener) c.addEventListener("change", ping);
    const mq = matchMedia("(prefers-reduced-motion: reduce)"); (mq.addEventListener ? mq.addEventListener("change", ping) : mq.addListener && mq.addListener(ping));
    window.HoloFidelity = { current, refresh, subscribe, fidelity, deviceProfile };
  } catch (e) {}
}
