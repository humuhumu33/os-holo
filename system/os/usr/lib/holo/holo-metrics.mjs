// holo-metrics.mjs — the exploration measurement harness (loaded ONLY with ?metrics=1, so it can
// never touch the default experience). A tiny on-screen HUD + window.HoloMetrics for: sustained FPS,
// input→paint latency (pointer/keys), and the live fidelity tier. No deps, no network (Law L4).
//
//   open …/shell.html?metrics=1   →   a corner HUD; window.HoloMetrics.snapshot() for a reading.

(function () {
  "use strict";
  const W = window;
  if (W.HoloMetrics) return;

  // ── FPS: rolling average of rAF deltas ────────────────────────────────────────────────────────
  let last = performance.now(), fps = 0, frames = 0, acc = 0;
  // ── input→paint latency: timestamp an input, read the delta at the next frame after it ──────────
  let pending = 0, lastLatency = 0, worstLatency = 0;
  const mark = () => { if (!pending) pending = performance.now(); };
  ["pointerdown", "keydown", "wheel"].forEach((t) => addEventListener(t, mark, { capture: true, passive: true }));

  function frame(now) {
    const dt = now - last; last = now;
    acc += dt; frames++;
    if (acc >= 500) { fps = Math.round((frames * 1000) / acc); frames = 0; acc = 0; }
    if (pending) { lastLatency = Math.round(now - pending); if (lastLatency > worstLatency) worstLatency = lastLatency; pending = 0; }
    paint();
    requestAnimationFrame(frame);
  }

  // a Cache-API tally → bytes-over-network should trend to ~0 as the κ-cache warms (proxy: count
  // entries in the verified content-cache; the SW dedups identical bytes across every holospace).
  let cacheCount = "—";
  async function pollCache() {
    try { if (W.caches) { const c = await caches.open("holo-kappa-v1"); cacheCount = (await c.keys()).length; } } catch (e) {}
    setTimeout(pollCache, 3000);
  }

  let hud = null;
  function fidelityTier() { try { return (W.HoloFidelity && W.HoloFidelity.current().tier) || "?"; } catch (e) { return "?"; } }
  function memoStat() { try { const s = W.HoloCompute && W.HoloCompute.stats(); return s ? `L1:${s.l1hit} L2:${s.l2hit} miss:${s.miss}` : "—"; } catch (e) { return "—"; } }
  function paint() {
    if (!hud) return;
    const warn = lastLatency > 32 ? "color:#ffb4b4" : lastLatency > 16 ? "color:#ffd479" : "color:#8ce8c4";
    hud.innerHTML =
      `<b>${fps}</b> fps` +
      ` · <span style="${warn}">${lastLatency}<small>ms</small></span> in→paint <small>(max ${worstLatency})</small>` +
      ` · tier <b>${fidelityTier()}</b>` +
      ` · memo <b>${memoStat()}</b>` +
      ` · κ-cache <b>${cacheCount}</b>`;
  }

  function mount() {
    hud = document.createElement("div");
    hud.id = "holo-metrics";
    hud.style.cssText = "position:fixed;left:50%;bottom:6px;transform:translateX(-50%);z-index:9999;" +
      "font:12px/1.4 ui-monospace,Menlo,Consolas,monospace;color:#cfe;background:rgba(8,11,20,.78);" +
      "border:1px solid rgba(255,255,255,.14);border-radius:999px;padding:5px 14px;pointer-events:none;" +
      "backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);white-space:nowrap;letter-spacing:.02em;";
    hud.querySelectorAll && (hud.innerHTML = "measuring…");
    (document.body || document.documentElement).appendChild(hud);
    requestAnimationFrame(frame);
    pollCache();
  }
  if (document.readyState === "loading") addEventListener("DOMContentLoaded", mount); else mount();

  W.HoloMetrics = {
    snapshot() { return { fps, inputLatencyMs: lastLatency, worstLatencyMs: worstLatency, tier: fidelityTier(), kappaCacheEntries: cacheCount }; },
    reset() { worstLatency = 0; },
  };
})();
