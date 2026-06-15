// holo-compute.mjs — O(1) tiered κ-memo for Hologram OS (exploration slice 4). A result keyed by the
// κ (sha256) of its inputs is computed ONCE, then served from the nearest tier forever:
//   L1  in-memory Map      (this session — instant)
//   L2  Cache API          (persists across reloads, shared with the κ-cache convention)
//   …   compute(κ)         (the expensive work — WebGPU kernel, downscale, grade, layout, …)
// This generalizes what holo-gpu.js already does for its content-addressed LUT (built once per κ,
// replayed forever) so ANY compute gets the same O(1) repeat. Pure web platform (Law L4); the L1 +
// key logic is node-testable (crypto.subtle is present in Node ≥ 16 webcrypto).
//
//   import { memo, kappaHex, stats } from "/_shared/holo-compute.mjs";
//   const grade = await memo([srcKappa, "lut-aces-v1"], (k) => buildOnGPU(k));   // once, then O(1)

const L1 = new Map();
const STATS = { l1hit: 0, l2hit: 0, miss: 0 };
const ENC = (typeof TextEncoder !== "undefined") ? new TextEncoder() : null;
const HEX = /^[0-9a-f]{64}$/i;
const CACHE = "holo-compute-v1";

// κ of the key material: a sha256-hex content address (the identity the result is memoized under).
export async function kappaHex(input) {
  let bytes;
  if (input instanceof Uint8Array) bytes = input;
  else if (input instanceof ArrayBuffer) bytes = new Uint8Array(input);
  else bytes = ENC.encode(typeof input === "string" ? input : JSON.stringify(input));
  const subtle = (typeof crypto !== "undefined" && crypto.subtle) || null;
  if (subtle) { const d = await subtle.digest("SHA-256", bytes); return Array.from(new Uint8Array(d), (b) => b.toString(16).padStart(2, "0")).join(""); }
  // last-resort non-crypto key (only if no WebCrypto at all) — still deterministic, just not a κ.
  let h = 0x811c9dc5; for (let i = 0; i < bytes.length; i++) { h ^= bytes[i]; h = Math.imul(h, 0x01000193) >>> 0; }
  return ("00000000" + (h >>> 0).toString(16)).slice(-8).repeat(8).slice(0, 64);
}

async function l2get(k) {
  try { if (typeof caches === "undefined") return undefined; const c = await caches.open(CACHE); const r = await c.match("holo-memo:/" + k); return r ? JSON.parse(await r.text()) : undefined; }
  catch (e) { return undefined; }
}
async function l2put(k, v) {
  try { if (typeof caches === "undefined") return; const c = await caches.open(CACHE); await c.put("holo-memo:/" + k, new Response(JSON.stringify(v), { headers: { "content-type": "application/json" } })); }
  catch (e) {}
}

// memo(keyMaterial, compute, opts?) → the value, computed at most once across L1/L2.
//   keyMaterial: a 64-hex κ string (used as-is) OR anything → hashed to its κ first.
//   opts.l2: set false to skip the persistent tier (session-only memo).
export async function memo(keyMaterial, compute, opts) {
  opts = opts || {};
  const k = (typeof keyMaterial === "string" && HEX.test(keyMaterial)) ? keyMaterial.toLowerCase() : await kappaHex(keyMaterial);
  if (L1.has(k)) { STATS.l1hit++; return L1.get(k); }                 // L1 — instant, this session
  if (opts.l2 !== false) { const v = await l2get(k); if (v !== undefined) { STATS.l2hit++; L1.set(k, v); return v; } }   // L2 — persisted
  STATS.miss++;
  const v = await compute(k);                                         // compute ONCE
  L1.set(k, v); if (opts.l2 !== false) l2put(k, v);
  return v;
}

export function stats() { return Object.assign({ l1size: L1.size }, STATS); }
export function clearL1() { L1.clear(); }

if (typeof window !== "undefined") window.HoloCompute = { memo, kappaHex, stats, clearL1 };
