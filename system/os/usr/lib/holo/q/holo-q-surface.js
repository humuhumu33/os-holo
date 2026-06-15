// holo-q-surface.js — the warm-κ SURFACE CACHE: the content-addressed analog of the compute fabric
// (holo-q-fabric), but for RENDERED SURFACES (an app/holospace mounted in the compositor). It is the
// re-derivable core of the elegant answer to "opening a heavy app is a heavy load": an app is a κ, so
// opening it is RE-DERIVING a κ — which should be O(1) on a repeat and never re-mount what is still warm.
//
// THE POLICY (pure, witnessed — DOM-free so it can't lie):
//   • acquire(κ, mount) — first time: mount() once (a miss), cache the handle. Every acquire after, while
//     the surface is still warm/live, is O(1): the SAME handle, no re-mount, no reload.
//   • release(κ) — a closed/backgrounded surface is WARMED, not destroyed (so re-opening is instant). The
//     handle stays in the hot tier; WASM/WebGPU stay initialized (the host keeps it in-place, never
//     reparents — reparenting an iframe reloads it, which would defeat the whole point).
//   • LRU eviction — beyond `hotMax` warm surfaces, the least-recently-used WARM one is disposed (an
//     IN-USE surface is never evicted). This bounds memory while keeping the working set instant.
//   • telemetry — hits / misses / mounts / warmReuse / evictions, so the orchestrator can tune the set.
//
// The host (the compositor) supplies `mount()` (build the real iframe/surface) and the handle's
// `dispose()`; this module owns only the DECISION (reuse · warm · evict), so it is fully witnessable in
// Node with stub handles. The shell wiring (actually keeping surfaces in-place + warm) is a thin layer on
// top — deliberately separate, because that DOM surgery must be verified in a real desktop, not blind.

// recommendHotMax(deviceMemoryGB) — pick a warm-set size from the device's RAM (navigator.deviceMemory,
// in GB; ~4 when unknown). A small phone keeps 1–2 warm; a workstation keeps up to 8. Pure → witnessed.
export function recommendHotMax(deviceMemoryGB) {
  const m = (typeof deviceMemoryGB === "number" && deviceMemoryGB > 0) ? deviceMemoryGB : 4;
  if (m <= 1) return 1;
  if (m <= 2) return 2;
  if (m <= 4) return 4;
  if (m <= 8) return 6;
  return 8;
}

// createSurfaceCache({ hotMax?, maxWeight?, onEvict? }) — a κ-keyed warm cache of mounted surfaces.
// `hotMax` bounds the warm COUNT; `maxWeight` bounds the total memory WEIGHT (a heavy app declares a
// bigger `weight` on acquire, so fewer heavy surfaces stay warm than light ones — "which to warm").
export function createSurfaceCache({ hotMax = 6, maxWeight = Infinity, onEvict = null } = {}) {
  const hot = new Map();                         // κ → { handle, dispose, uses, warm, weight }  (Map order = LRU)
  const stats = { hits: 0, misses: 0, mounts: 0, warmReuse: 0, evictions: 0 };

  const touch = (k, rec) => { hot.delete(k); hot.set(k, rec); };   // move to MRU end

  function evictIfNeeded() {
    // evict the least-recently-used WARM surface while EITHER the warm count exceeds hotMax OR the total
    // weight (live + warm) exceeds maxWeight. Live (in-use) surfaces are pinned — never evicted.
    for (;;) {
      let warmCount = 0, totalWeight = 0, lruWarm = null;
      for (const [k, r] of hot) { totalWeight += (r.weight || 1); if (r.warm) { warmCount++; if (lruWarm == null) lruWarm = k; } }
      const over = warmCount > hotMax || totalWeight > maxWeight;
      if (!over || lruWarm == null) break;       // within budget, or nothing evictable (all pinned)
      const rec = hot.get(lruWarm); hot.delete(lruWarm); stats.evictions++;
      try { rec.dispose && rec.dispose(); } catch (e) {}
      if (onEvict) { try { onEvict(lruWarm); } catch (e) {} }
    }
  }

  // acquire(κ, mount) → { handle, cached:"hot"|false, reused }. `mount` => { handle, dispose? } (async ok).
  // O(1) when κ is already cached (warm or live) — mount() is NOT called again.
  async function acquire(k, mount, opts = {}) {
    const ex = hot.get(k);
    if (ex) { ex.uses++; const wasWarm = ex.warm; ex.warm = false; if (opts.weight != null) ex.weight = opts.weight; touch(k, ex); stats.hits++; if (wasWarm) stats.warmReuse++; return { handle: ex.handle, cached: "hot", reused: true }; }
    stats.misses++; stats.mounts++;
    const m = await mount();
    const rec = { handle: m.handle, dispose: m.dispose || null, uses: 1, warm: false, weight: opts.weight != null ? opts.weight : 1 };
    hot.set(k, rec);
    return { handle: m.handle, cached: false, reused: false };
  }

  // release(κ) — warm-keep (don't destroy). When its last user releases, it becomes evictable (LRU).
  function release(k) {
    const ex = hot.get(k); if (!ex) return false;
    ex.uses = Math.max(0, ex.uses - 1);
    if (ex.uses === 0) { ex.warm = true; touch(k, ex); evictIfNeeded(); }
    return true;
  }

  function has(k) { return hot.has(k); }
  function evict(k) { const ex = hot.get(k); if (!ex) return false; hot.delete(k); stats.evictions++; try { ex.dispose && ex.dispose(); } catch (e) {} return true; }

  function surfaceStats() {
    const total = stats.hits + stats.misses;
    let warm = 0, live = 0, weight = 0; for (const r of hot.values()) { (r.warm ? warm++ : live++); weight += (r.weight || 1); }
    return { ...stats, total, hitRate: total ? +(stats.hits / total).toFixed(3) : 0, warm, live, weight, size: hot.size };
  }

  return { acquire, release, has, evict, stats: surfaceStats, keys: () => [...hot.keys()], clear: () => hot.clear() };
}

export function describeSurfaceCache() {
  return {
    idiom: "content-addressed SURFACES — open(app κ) is O(1) on a repeat (warm in-place), the render analog of the fabric's κ-memo for compute",
    warm: "release warms (never destroys); WASM/WebGPU stay initialized; the host keeps the surface IN PLACE (never reparents → no reload)",
    bound: "LRU-evict warm surfaces beyond hotMax; an in-use surface is never evicted",
    honest: "this module owns the DECISION only (pure, witnessed); actually keeping iframes warm + in-place is the host's staged DOM layer (must be verified in a real desktop, not blind)",
  };
}

export default { createSurfaceCache, describeSurfaceCache };
