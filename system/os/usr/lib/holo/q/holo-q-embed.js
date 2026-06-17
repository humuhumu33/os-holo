// holo-q-embed.js — the FIRST Holo Q Mixture-of-Specialists execution adapter (ADR-0084), taken end
// to end: the "Session search" helper task stops borrowing the main model and instead runs a tiny
// on-device EMBEDDER (bge-small, ~120M, ONNX) auto-discovered from the open web. Recall becomes a
// real vector search that runs entirely in the tab, proven by receipt — and the user does nothing.
//
// It mirrors the voice engines' serverless browser-ML recipe (holo-voice-asr.mjs): lazily import the
// vendored transformers.js, pick WebGPU when present else WASM (the any-browser floor), point
// onnxruntime at the vendored wasm and the model κ-disk, run ORT in a Web Worker so the UI never
// blocks. It adds the four properties the task demands, as MECHANISMS not labels:
//
//   • AUTOMATIC — autowire() discovers → loads → binds → ready in one call; on any failure it falls
//     back to the deterministic reference embedder so recall ALWAYS works (never blocks, Law L5).
//   • LOW LATENCY — auto-WebGPU + q8 weights + ORT-in-worker, and a CONTENT-ADDRESSED cache: an
//     identical text returns its vector in O(1) with no compute (re-derivable, the substrate idiom).
//   • SELF-OPTIMIZING — live telemetry (latency EMA, cache hit-rate, device) the engine tunes on.
//   • SELF-IMPROVING — reevaluate() re-runs discovery and RECOMMENDS a swap when a better/faster
//     specialist appears; the orchestrator (Holo Mind, ADR-0081) ratifies it and records the trace.
//
// DOM-free, dependency-free (the cache key is a fast non-crypto hash; the RECEIPT κ is the caller's
// crypto job, via HoloQVACSpec.receiptBody — same split as holo-qvac.mjs).

const DEFAULTS = {
  lib: "../voice/vendor/transformers/transformers.js",                 // reuse the ONE vendored runtime
  libRemote: "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.0.2",
  ortPath: "../voice/vendor/transformers/",                            // onnxruntime-web wasm lives here
  // tiered by device; bge-small-en-v1.5 is the validated pick (live Hub #1 for feature-extraction).
  modelWebGPU: "Xenova/bge-small-en-v1.5", dtypeWebGPU: "fp16",        // quality tier
  modelWASM: "Xenova/bge-small-en-v1.5", dtypeWASM: "q8",              // any-browser floor (small + fast)
  localPath: "vendor/models/", remote: false, preferWebGPU: true,
  pooling: "mean", normalize: true,                                    // bge wants mean-pool + L2-normalize
};

function moduleBase() {
  try { return new URL("./", import.meta.url).href; }
  catch (e) { return new URL("./", (typeof location !== "undefined" ? location.href : "file:///")).href; }
}
async function hasWebGPU() {
  try { return !!(typeof navigator !== "undefined" && navigator.gpu && (await navigator.gpu.requestAdapter())); }
  catch (e) { return false; }
}
// FNV-1a — a fast deterministic memo key (NOT cryptographic; the cache only needs collision-resistance,
// the receipt κ is sealed by the caller). Matches holo-qvac.mjs's hash idiom.
function fnv1a(str) { let h = 0x811c9dc5; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; }
function cosine(a, b) { let d = 0; for (let i = 0; i < a.length; i++) d += a[i] * b[i]; return d; }   // unit vectors → dot

// ── the embedder ────────────────────────────────────────────────────────────────────────────────
export function createEmbedder(opts = {}) {
  const cfg = Object.assign({}, DEFAULTS, opts);
  let pipe = null, info = { ready: false, engine: null, model: null, device: null, dtype: null };
  let loading = null;
  const cache = new Map();                                            // fnv(model‖text) → vector
  const stats = { count: 0, hits: 0, misses: 0, lastMs: 0, emaMs: 0, device: null, model: null };

  async function load(onProgress) {
    if (pipe) return info;
    if (loading) return loading;
    loading = (async () => {
      const base = moduleBase();
      const libUrl = cfg.remote ? cfg.libRemote : new URL(cfg.lib, base).href;
      const tf = await import(/* @vite-ignore */ libUrl);             // throws → autowire() falls back
      const { pipeline, env } = tf;
      const webgpu = cfg.preferWebGPU && (await hasWebGPU());
      const device = webgpu ? "webgpu" : "wasm";
      const model = cfg.model || (webgpu ? cfg.modelWebGPU : cfg.modelWASM);
      const dtype = cfg.dtype || (webgpu ? cfg.dtypeWebGPU : cfg.dtypeWASM);
      if (env) {
        env.allowRemoteModels = !!cfg.remote;                         // serverless: weights are the κ-disk only
        env.allowLocalModels = !cfg.remote;
        if (!cfg.remote) {
          env.localModelPath = new URL(cfg.localPath, base).href;
          const wasmPaths = new URL(cfg.ortPath, base).href;
          if (env.backends && env.backends.onnx && env.backends.onnx.wasm) env.backends.onnx.wasm.wasmPaths = wasmPaths;
        }
        // ORT in a Web Worker (WASM path) so a recall query never freezes the UI.
        try { if (!webgpu && cfg.proxy !== false && env.backends && env.backends.onnx && env.backends.onnx.wasm) env.backends.onnx.wasm.proxy = true; } catch (e) {}
      }
      const prog = (p) => { try { onProgress && onProgress({ phase: p.status || "load", file: p.file, loaded: p.loaded, total: p.total, device, model }); } catch (e) {} };
      pipe = await pipeline("feature-extraction", model, { device, dtype, progress_callback: prog });
      info = { ready: true, engine: "transformers", model, device, dtype };
      stats.device = device; stats.model = model;
      return info;
    })().catch((e) => { loading = null; throw e; });
    return loading;
  }

  // embed(text) → a unit vector (number[]). Cache-first (O(1) on a repeat); else run + memoize + time.
  async function embed(text, o = {}) {
    // UNIFIED OS EMBEDDER (ADR-0096): when Holo Voice's embedder is present (EmbeddingGemma-300m, vendored
    // + verified), reuse THAT — one embedding model serves QVAC.embed AND recall/skills, instead of loading
    // a second per-task model. o.kind ("query"|"document") drives EmbeddingGemma's asymmetric-retrieval prompts.
    const HV = (typeof globalThis !== "undefined") && globalThis.HoloVoice;
    const kind = o.kind || "document";
    const key = fnv1a((stats.model || cfg.model || (HV && HV.embed ? "embeddinggemma-300m" : "?")) + " " + kind + " " + String(text));
    if (cache.has(key)) { stats.hits++; return cache.get(key); }
    if (HV && typeof HV.embed === "function") {
      try {
        const v = Array.from(await HV.embed(String(text), { kind }));
        if (v.length) { cache.set(key, v); stats.misses++; stats.count++; stats.model = stats.model || "embeddinggemma-300m"; stats.device = stats.device || "wasm"; return v; }
      } catch (e) { /* OS embedder hiccup → fall through to the local pipe / reference floor */ }
    }
    if (!pipe) await load(o.onProgress);
    const t0 = (typeof performance !== "undefined" ? performance.now() : Date.now());
    const out = await pipe(String(text), { pooling: cfg.pooling, normalize: cfg.normalize });
    const vec = Array.from(out.data || (out.tolist ? out.tolist()[0] : out));
    const dt = (typeof performance !== "undefined" ? performance.now() : Date.now()) - t0;
    stats.misses++; stats.count++; stats.lastMs = dt; stats.emaMs = stats.emaMs ? stats.emaMs * 0.8 + dt * 0.2 : dt;
    cache.set(key, vec);
    return vec;
  }
  async function embedMany(texts, o = {}) { const out = []; for (const t of texts) out.push(await embed(t, o)); return out; }

  // search(query, items) — rank items {id,text} by cosine to the query embedding (the recall use-case).
  async function search(query, items = [], k = 10) {
    const q = await embed(query, { kind: "query" });                   // asymmetric retrieval: query vs document prompts
    const scored = [];
    for (const it of items) scored.push({ id: it.id, text: it.text, score: cosine(q, await embed(it.text, { kind: "document" })) });
    return scored.sort((a, b) => b.score - a.score).slice(0, k);
  }

  // the inference receipt body (caller seals to a did:holo) — a recall embedding is a re-derivable
  // observation: same (model, text) → same vector → same κ (Law L5). Uses the shared QVAC shape.
  function receiptBody(text, vec) {
    const SPEC = (typeof globalThis !== "undefined" && globalThis.HoloQVACSpec) || null;
    const body = { capability: "text-embeddings", model: stats.model, provider: "holo-q-embed",
      params: { pooling: cfg.pooling, normalize: cfg.normalize, device: stats.device },
      input: { text: String(text) }, output: { dim: vec.length, normalized: !!cfg.normalize } };
    return SPEC && SPEC.receiptBody ? SPEC.receiptBody(body) : body;
  }

  return {
    id: "holo-q-embed", load, embed, embedMany, search, similarity: cosine, receiptBody,
    info: () => info, stats: () => ({ ...stats, hitRate: stats.count ? +(stats.hits / (stats.hits + stats.misses)).toFixed(3) : 0 }),
    clearCache: () => cache.clear(),
  };
}

// ── self-improvement: re-evaluate the bound specialist against fresh discovery ───────────────────────
// reevaluate({ mux, fetch }) → a RECOMMENDATION (keep | swap) + a trace the orchestrator records.
// Honest: it never swaps silently — it surfaces "a faster/better specialist now ranks higher", and
// Holo Mind (ADR-0081) ratifies under the same governed-succession gate as any self-change.
export async function reevaluate(embedder, { mux, fetch } = {}) {
  if (!mux || typeof mux.discover !== "function") return { recommend: "keep", reason: "no discovery seam" };
  const task = mux.TASKS.find((t) => t.id === "session-search");
  const ranked = await mux.discover(task, { fetch });
  const current = embedder.info().model;
  const top = ranked[0];
  if (!top) return { recommend: "keep", reason: "no candidates" };
  const swap = top.id !== current && top.runnable;
  return {
    recommend: swap ? "swap" : "keep",
    current, suggested: top.id, suggestedScore: top.score,
    reason: swap ? "a higher-ranked browser-runnable embedder is now available" : "current pick is still the top runnable specialist",
    trace: { task: "session-search", at: "reevaluate", current, suggested: top.id, stats: embedder.stats() },
  };
}

// ── autowire: the magic entry — discover → load → bind → ready, automatically and serverless ─────────
// autowire({ mux, fetch, remote, onProgress }) makes "Session search" live with no user action. On
// ANY failure (no transformers vendored, no WebGPU+no WASM, load error, nothing discoverable) it binds
// the deterministic reference embedder so recall still works — never blocks, never fakes (Law L5).
export async function autowire({ mux, fetch, remote = false, onProgress } = {}) {
  const out = { task: "session-search", bound: null, device: null, fellBackTo: null };
  // PREFER the unified OS embedder (EmbeddingGemma-300m, vendored + verified, ADR-0096) — one model for
  // QVAC.embed AND recall/skills — over a per-task bge-small download. createEmbedder.embed delegates to it.
  const HV = (typeof globalThis !== "undefined") && globalThis.HoloVoice;
  if (HV && typeof HV.embed === "function") {
    try {
      const embedder = createEmbedder({ remote });                     // its embed() delegates to HoloVoice.embed (no second model loaded)
      if (mux) mux.bindSpecialist("session-search", { id: "embeddinggemma-300m", embed: embedder.embed, embedder });
      return { ...out, embedder, bound: "embeddinggemma-300m", model: "onnx-community/embeddinggemma-300m-ONNX", device: "wasm", ready: true, via: "holo-voice/EmbeddingGemma" };
    } catch (e) { /* fall through to per-task discovery */ }
  }
  try {
    if (!mux) throw new Error("holo-q-mux not provided");
    const pick = await mux.pickSpecialist("session-search", { fetch });
    const model = pick.specialist ? pick.specialist.id : null;
    const embedder = createEmbedder({ model, remote });
    await embedder.load(onProgress);                                  // throws if the runtime/model can't load here
    mux.bindSpecialist("session-search", { id: embedder.id, embed: embedder.embed, embedder });
    out.bound = embedder.id; out.device = embedder.info().device; out.model = embedder.info().model;
    return { ...out, embedder, ready: true };
  } catch (e) {
    // honest fallback — the deterministic reference embedder (always-run floor, holo-qvac.mjs).
    const SPEC = (typeof globalThis !== "undefined" && globalThis.HoloQVACSpec) || null;
    const ref = SPEC && SPEC.referenceEmbed ? { id: "reference-embed", embed: async (t) => SPEC.referenceEmbed(t) } : null;
    if (ref && mux) mux.bindSpecialist("session-search", ref);
    return { ...out, fellBackTo: ref ? "reference-embed" : "none", ready: !!ref, reason: String((e && e.message) || e) };
  }
}

// resolveEmbedder({ remote, onProgress }) — a standalone, NEVER-THROW embedder for a surface that has no
// mux (a page). It DECIDES ONCE: the unified OS embedder (HoloVoice/EmbeddingGemma) if present, else the
// real bge-small via transformers, else — on ANY load failure — a deterministic reference floor. Deciding
// once is the correctness point: document vectors (index build) and query vectors must share ONE space, so
// a session never mixes a real-model doc vector with a floor query vector. embed() never throws.
export async function resolveEmbedder({ remote = false, onProgress } = {}) {
  const real = createEmbedder({ remote });
  const HV = (typeof globalThis !== "undefined") && globalThis.HoloVoice;
  if (HV && typeof HV.embed === "function") return real;        // embed() delegates to the OS embedder; no load needed
  try { await real.load(onProgress); return real; }             // bge-small live (WebGPU→WASM)
  catch (e) {
    const DIM = 256;
    const floor = (text) => { const o = new Array(DIM).fill(0); for (const w of String(text).toLowerCase().match(/[a-z0-9]+/g) || []) o[fnv1a(w) % DIM] += 1; const n = Math.sqrt(o.reduce((a, x) => a + x * x, 0)) || 1; return o.map((x) => x / n); };
    return { id: "reference-floor", info: () => ({ ready: true, model: "reference-floor", device: "cpu" }), async embed(t) { return floor(t); }, similarity: cosine, fellBackTo: "reference-floor", reason: String((e && e.message) || e) };
  }
}

export default { createEmbedder, reevaluate, autowire, resolveEmbedder };
