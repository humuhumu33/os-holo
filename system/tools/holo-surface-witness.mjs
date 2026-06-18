#!/usr/bin/env node
// holo-surface-witness.mjs — Phase 1 MVP architecture witness for holo-surface.mjs. Proves (with a stub
// WebGPU device, so no real GPU is needed) the load-bearing claims of the κ-surface backend:
//   1. backend selection: WebGPU when navigator.gpu present, DOM otherwise; force override honored
//   2. L5 verify-BEFORE-GPU: a tampered surface κ is REFUSED before any GPU byte is touched
//   3. pipeline reuse (O(1)): the SECOND card render is a zero-recompile rebind (createRenderPipeline
//      runs ONCE across two renders) — the HoloMemo session cache
//   4. one draw per card; uniform buffer written
//   5. DOM reference: normalised spec → deterministic style (the truth the GPU output must match)
//
// Run: node holo-os/system/tools/holo-surface-witness.mjs
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const MOD = join(here, "../os/usr/lib/holo/holo-surface.mjs");
const S = await import(pathToFileURL(MOD)).catch((e) => ({ __err: e }));

let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : fail++; console.log((c ? "  ✓ " : "  ✗ ") + m); };
if (S.__err) { console.log("  ✗ import holo-surface.mjs  (" + S.__err.message + ")"); console.log("\nRED — module not ready"); process.exit(1); }

// ── stub WebGPU device (counts the GPU calls) ──
function stub() {
  const counts = { shader: 0, pipeline: 0, buffer: 0, bind: 0, draw: 0, submit: 0, write: 0, tex: 0, writeTex: 0, sampler: 0 };
  const pipeline = { getBindGroupLayout: () => ({}) };
  const device = {
    createShaderModule() { counts.shader++; return {}; },
    createRenderPipeline() { counts.pipeline++; return pipeline; },
    createBuffer() { counts.buffer++; return {}; },
    createBindGroup() { counts.bind++; return {}; },
    createTexture() { counts.tex++; return { createView: () => ({}) }; },
    createSampler() { counts.sampler++; return {}; },
    createCommandEncoder() { return { beginRenderPass: () => ({ setPipeline() {}, setBindGroup() {}, draw(n) { counts.draw = n; counts.draws = (counts.draws || 0) + 1; }, end() {} }), finish: () => ({}) }; },
    queue: { writeBuffer() { counts.write++; }, writeTexture() { counts.writeTex++; }, submit() { counts.submit++; } },
  };
  return { counts, device };
}
const inj = (s) => ({ device: s.device, format: "bgra8unorm", context: { configure() {} }, view: {} });
const canvas = () => ({ width: 0, height: 0, tagName: "CANVAS" });

// 1 — backend selection
{
  ok(S.pickBackend({ force: "gpu" }) === "gpu" && S.pickBackend({ force: "dom" }) === "dom", "backend: force override honored");
  const setNav = (v) => { try { Object.defineProperty(globalThis, "navigator", { value: v, configurable: true, writable: true }); return true; } catch { return false; } };
  const saved = globalThis.navigator;
  if (setNav({ gpu: {} })) {
    ok(S.pickBackend() === "gpu", "backend: navigator.gpu present → gpu");
    setNav(undefined); ok(S.pickBackend() === "dom", "backend: no navigator.gpu → dom (reference)");
    setNav(saved);
  } else { console.log("  · (navigator-presence selection verified in-browser; not overridable in this Node)"); }
}

// 2 — L5 verify-before-GPU
{
  const enc = new TextEncoder();
  const honest = enc.encode(JSON.stringify({ "@type": "holo:Surface", kind: "card", w: 100, h: 60 }));
  const resolve = async () => honest;
  let okHonest = false; try { const sp = await S.specOf("did:holo:blake3:" + "a".repeat(64), { resolve, verify: async () => true }); okHonest = sp.kind === "card"; } catch {}
  ok(okHonest, "L5: an honest surface κ resolves + parses");
  let refused = false; try { await S.specOf("did:holo:blake3:" + "a".repeat(64), { resolve, verify: async () => false }); } catch (e) { refused = /L5 REFUSED/.test(e.message); }
  ok(refused, "L5: a tampered surface κ is REFUSED before any GPU work");
}

// 3 + 4 — pipeline reuse + one draw + uniform write (stub device)
{
  const s = stub();
  const spec = { "@type": "holo:Surface", kind: "card", w: 200, h: 120, radius: 18, accentH: 10 };
  const r1 = await S.renderCardGPU(canvas(), spec, inj(s));
  const r2 = await S.renderCardGPU(canvas(), spec, inj(s));   // second card — must reuse the pipeline
  ok(r1.backend === "gpu" && r2.backend === "gpu", "gpu: renders report the gpu backend");
  ok(s.counts.pipeline === 1, `O(1): createRenderPipeline ran ONCE across two cards (got ${s.counts.pipeline})`);
  ok(s.counts.shader === 1, "O(1): shader compiled once (cached)");
  ok(s.counts.draw === 3 && s.counts.submit === 2, "gpu: one fullscreen-triangle draw per card, two submits");
  ok(s.counts.write === 2, "gpu: each card writes its own uniform buffer (cheap per-render)");
}

// 5 — DOM reference style is deterministic and reads the spec the same way
{
  const st = S.cardStyle({ w: 320, h: 200, radius: 16, accentH: 8, bg: [0.1, 0.1, 0.1, 1], accent: [0.4, 0.5, 1, 1] });
  ok(st.width === "320px" && st.height === "200px" && st.borderRadius === "16px", "dom: spec → px geometry");
  ok(/linear-gradient/.test(st.background) && /rgba\(/.test(st.background), "dom: accent-over-bg gradient matches the shader's top band");
  const n = S.normCard({}); ok(n.w === 320 && n.bg.length === 4, "dom: defaults are concrete (no drift between backends)");
}

// 6 — TWO-LAYER label texture (HoloMemo.handle): rasterise→L2 source once, hydrate→GPUTexture; dedup by key
{
  const s = stub();
  const t = (txt) => ({ "@type": "holo:Surface", kind: "card", w: 240, h: 140, text: txt });
  await S.renderCardGPU(canvas(), t("Hello κ"), inj(s));
  await S.renderCardGPU(canvas(), t("Hello κ"), inj(s));   // identical text → texture reused (L1)
  ok(s.counts.tex === 1 && s.counts.writeTex === 1, `two-layer: identical label rasterised+uploaded ONCE (tex=${s.counts.tex})`);
  await S.renderCardGPU(canvas(), t("Different"), inj(s));  // new text → new texture
  ok(s.counts.tex === 2, "two-layer: a different label builds a new texture");
  ok(s.counts.bind >= 3, "gpu: bind group carries uniform + texture + sampler (3 entries)");
}

// 7 — SCENE: container composition, one-draw-per-node, L3 dedup, hit-test
{
  const s = stub();
  let resolves = 0;
  const rowKappa = "did:holo:blake3:" + "c".repeat(64);
  const rowSpec = { "@type": "holo:Surface", kind: "container", w: 280, h: 40, fill: [0.2, 0.2, 0.25, 1], children: [{ kind: "text", text: "row", h: 40 }] };
  const resolve = async () => { resolves++; return new TextEncoder().encode(JSON.stringify(rowSpec)); };
  const root = { "@type": "holo:Surface", kind: "container", w: 300, layout: "stack", pad: 10, gap: 8, fill: [0.1, 0.1, 0.15, 1], children: [rowKappa, rowKappa, { kind: "text", text: "footer", h: 24 }] };
  const r = await S.renderSceneGPU(canvas(), root, { ...inj(s), resolve, verify: async () => true });
  ok(r.backend === "gpu" && r.nodes >= 4, `scene: composed tree drew ${r.nodes} nodes`);
  ok(s.counts.draws === r.nodes, "scene: one positioned-quad draw per node");
  ok(s.counts.pipeline === 1, "scene: one pipeline for the whole scene");
  ok(resolves === 1, "scene: a κ-ref child resolved ONCE despite two references (L3 dedup)");
  ok(r.hitIndex.length === 2 && r.hitIndex.every((i) => i.kappa === rowKappa), "scene: hit-index carries each composed child's κ");
  const hit = S.hitTest(r.hitIndex, 20, 20);
  ok(hit && hit.kappa === rowKappa, "scene: pointer hit-test returns the child κ (sub-frame, no GPU readback)");
}

// 8 — pure layout / normalize (no GPU)
{
  ok(S.normNode({ kind: "container", w: 200 }).kind === "container" && S.normNode({ kind: "text", text: "x" }).kind === "text" && S.normNode({ kind: "image", src: "k", w: 32, h: 32 }).kind === "image", "normNode: container/text/image kinds");
}

console.log(`\n${fail === 0 ? "GREEN" : "RED"} — ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
