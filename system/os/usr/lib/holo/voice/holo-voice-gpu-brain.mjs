// holo-voice-gpu-brain.mjs — Q's OPT-IN GPU coding brain (ADR-0096).
//
// Wraps the Q studio app's custom-WebGPU TERNARY engine (qwen-coder-7b, ~3.2GB, q3/1.58-bit κ-disk) —
// VERIFIED to run on real hardware where onnxruntime-web's WebGPU EP aborts — as a brain provider whose
// generate(history) is an async-iterator of text deltas, byte-for-byte matching holo-voice-llm.mjs. So
// holo-voice.js's ensureBrain can PREFER it (CFG.gpuBrain + WebGPU) and fall back to the WASM Coder-1.5B
// any-browser floor on failure. ~29 tok/s on the operator's GPU vs ~2-3 tok/s WASM.
//
// Cross-repo: the engine + loader live in /apps/q/core/*. Their MODELS use relative "./models/…" (correct
// only when served at /apps/q/), but we run from the OS shell at "/", so we OVERRIDE kappaUrl to an
// ABSOLUTE /apps/q/models/<id>. The loader's own internal imports (../pkg, ../qvac-gpu) resolve relative
// to loader.js's URL, so those are unaffected.

const APP = "/apps/q/";
const DEFAULTS = { model: "qwen-coder-7b", maxTokens: 512 };

export function createGpuBrain(opts = {}) {
  const cfg = Object.assign({}, DEFAULTS, opts);
  let engine = null, loadingP = null, info = { ready: false, model: cfg.model, device: null };

  async function load(onProgress) {
    if (engine) return info;
    if (loadingP) return loadingP;
    loadingP = (async () => {
      if (!(typeof navigator !== "undefined" && navigator.gpu)) throw new Error("no WebGPU on this device");
      const ldr = await import(/* @vite-ignore */ APP + "core/loader.js");
      const eng = await import(/* @vite-ignore */ APP + "core/engine.js");
      await ldr.ready();                                               // wasm tokenizer/engine init (once)
      const base = (ldr.MODELS || []).find((x) => (x.kappaUrl || "").replace(/^\.\//, "").replace(/^models\//, "").replace(/\/+$/, "") === cfg.model)
        || (ldr.MODELS || []).find((x) => /qwen-?coder/i.test(x.name || ""));
      if (!base) throw new Error("model entry not found: " + cfg.model);
      // absolute κ-disk URL so it resolves from the OS shell, not /apps/q/
      const entry = Object.assign({}, base, { kappaUrl: APP + String(base.kappaUrl || ("models/" + cfg.model)).replace(/^\.\//, "") });
      const loaded = await ldr.loadModel(entry, { onProgress: onProgress || (() => {}), onStatus: () => {} });
      if (!loaded || !loaded.gpu) throw new Error("GPU model load failed (WebGPU build/upload)");
      engine = await eng.createEngine(entry, loaded);
      info = { ready: true, model: cfg.model, device: "webgpu" };
      return info;
    })().catch((e) => { loadingP = null; throw e; });
    return loadingP;
  }

  // generate(history, opts) → async-iterator of text DELTAS. The engine streams CUMULATIVE text via
  // onToken; we diff to deltas so the caller (converseAgent) streams identically to the WASM brain.
  async function* generate(history, o = {}) {
    if (!engine) await load(o.onProgress);
    const last = [...(history || [])].reverse().find((mm) => mm && mm.role === "user");
    const prompt = (last && last.content) || "";
    const ids = engine.tokenize(engine.frameTurn(prompt, false));      // correct per-model template (ChatML for Qwen)
    try { engine.reset(); } catch (e) {}                               // fresh KV for this turn
    const queue = []; let done = false, err = null, wake = null, prev = "";
    engine.generate(ids, {
      maxNew: o.maxTokens || cfg.maxTokens, signal: o.signal,
      onToken: ({ text }) => { const d = text.slice(prev.length); prev = text; if (d) { queue.push(d); if (wake) { wake(); wake = null; } } },
    }).then(() => { done = true; }, (e) => { err = e; done = true; }).finally(() => { if (wake) { wake(); wake = null; } });
    while (true) {
      if (queue.length) { yield queue.shift(); continue; }
      if (done) break;
      if (o.signal && o.signal.aborted) break;
      await new Promise((r) => { wake = r; });
    }
    if (err) throw err;
  }
  async function chat(history, o = {}) { let s = ""; for await (const d of generate(history, o)) s += d; return s.trim(); }

  return { id: "holo-q-ternary-gpu", load, generate, chat, info: () => info, destroy: () => { try { engine && engine.destroy(); } catch (e) {} } };
}

export default createGpuBrain;
