// holo-q-trinity.js — the UNIFIED experience: one OS-wide loop every native app inherits by
// conforming, not by wiring. It composes the six Holo Q modules into the create·exist·perceive
// TRINITY and hides them behind one mount + one verb. The trinity is INVISIBLE — the user just sees
// things appear instantly, privately, and quietly improve.
//
//   CREATE   (immanent)    — the interpreter's act: route through the Mixture-of-Specialists fabric
//                            (ADR-0084/0085). Sovereign + UNGATED + fast (the interpreter is free).
//   EXIST    (transcendent)— the κ-substrate: every output content-addressed + memoized, automatically
//                            (cross-app O(1) reuse). The shared ground where observer meets observed.
//   PERCEIVE (omniscient)  — Holo Perception (ADR-0086) + the self-improvement loop: every object's
//                            code+visual faces auto-register; drift heals; latency optimizes; it learns.
//                            GOVERNED by the conscience (the orchestrator edits only what EXISTS).
//
// The ethic is the architecture: creation is sovereign and ungated; improvement is governed. Create
// then edit — never both at once: each `create` SEALS to a κ before `perceive` ever touches it, so even
// streaming is edit-of-the-just-created at micro-granularity (ADR-0086 precedence). 100% serverless,
// very low latency (shared κ-memo + a scene-κ that skips an unchanged perceive pass), continuously
// self-improving (a cheap ambient ticker). Pure ESM; everything injected → witnessed in Node.

import { createFabric } from "./holo-q-fabric.js";
import { createScene } from "./holo-q-perception.js";
import { createRenderer } from "./holo-q-render.js";
import { createLoop } from "./holo-q-loop.js";
import mux from "./holo-q-mux.js";

export function createTrinity({ doc = (typeof document !== "undefined" ? document : null), muxImpl = mux, gate = null } = {}) {
  const fabric = createFabric();                                    // EXIST — shared κ-memo (cross-app O(1))
  const scene = createScene();                                     // PERCEIVE — one OS-wide view of every κ-object
  const builders = new Map();                                      // id → rebuild thunk (how to re-create → heal)
  // the conscience gate, resolved LAZILY per call (so shell load-order can't matter): if the
  // constitution (ADR-0033) is loaded, every heal passes it; if not, allow — healing is a low-risk
  // edit and CREATE is ungated by design anyway (the interpreter is sovereign).
  const gateFn = gate || (async (d) => {
    const C = (typeof window !== "undefined") ? window.HoloConscience : null;
    if (C && typeof C.evaluate === "function") { try { return await C.evaluate(d); } catch (e) { return { outcome: "block", reason: "gate error: " + (e && e.message) }; } }
    return { outcome: "accept" };
  });
  // IMPROVE — the orchestrator's governed omniscient act: heal drift by re-creating from current state.
  const loop = createLoop({ scene, fabric, gate: gateFn, heal: async (id) => { const b = builders.get(id); if (b) await b(); } });

  // mount({ id, target }) — an app joins the trinity in ONE call. Its create() renders into `target`,
  // each object in its own sub-container so healing one never disturbs the others; the renderer
  // auto-feeds the VISUAL face, the fabric the CODE face. Conform, and you're in the loop.
  const apps = new Map();
  function mount({ id: appId = "app", target = null, doc: d = doc } = {}) {
    const renderer = target ? createRenderer({ target, doc: d }) : null;
    if (renderer) scene.attachRenderer(renderer);
    const containers = new Map();
    const containerFor = (objId) => { let c = containers.get(objId); if (!c && target) { c = d.createElement("div"); target.appendChild(c); containers.set(objId, c); } return c; };

    // CREATE — sovereign immanent act. exist (seal) + perceive (register) happen automatically.
    async function create(spec = {}) {
      const { id, task = "create", provider = null, input, params = {}, render = true, onPartial = null } = spec;
      const key = id != null ? id : (typeof input === "string" ? input : JSON.stringify(input));
      const prov = provider || muxImpl.routeTask(task);
      if (!prov || (!prov.embed && !prov.classify && !prov.generate)) throw new Error("holo-trinity.create: no specialist bound for task '" + task + "'");
      // `params` may be a THUNK — re-evaluated on every create (incl. a heal re-create), so improvement
      // reflects CURRENT state, and any state the act reads is in the memo key (correct re-derivation).
      const p = typeof params === "function" ? params() : params;
      builders.set(key, () => create({ ...spec, id: key, onPartial: null, render: false }));   // heal: silent re-derive
      // STREAMING surface — a UI subscribes via onPartial; the act rides the fabric STREAM (live deltas),
      // seals to a κ, and perceives BOTH faces (the UI paints exactly the sealed κ → coherent by
      // construction). A cached ask yields no deltas → paint the final once (O(1), instant). This is the
      // one path a host surface (the Create studio) drives, so its build sits ON the κ-memo and the loop.
      if (onPartial) {
        let last = null, streamed = false;
        for await (const e of fabric.run({ provider: prov, task, input, params: p })) {
          if (e.phase === "delta") { streamed = true; try { onPartial(e.partial, e); } catch (_e) {} }
          else last = e;
        }
        if (!last) throw new Error("holo-trinity.create: stream produced no final");
        if (!streamed) { try { onPartial(last.value, last); } catch (_e) {} }   // cached → paint the final
        scene.observeCode(key, last.kappa, { source: prov.id, kind: task });
        scene.observeVisual(key, last.kappa, { from: last.kappa });             // painted κ === sealed κ → coherent
        return { id: key, value: last.value, kappa: last.kappa, cached: last.cached, ms: last.ms };
      }
      if (render && renderer) {
        const into = containerFor(key);
        async function* events() {
          const f = await fabric.compute({ provider: prov, task, input, params: p });  // immanent → seal (transcendent)
          scene.observeCode(key, f.kappa, { source: prov.id, kind: task });            // CODE face
          yield { phase: "final", value: f.value, kappa: f.kappa, cached: f.cached, ms: f.ms };
        }
        while (into.firstChild) into.removeChild(into.firstChild);  // replace just this object's view (κ cache kept)
        const out = await renderer.paintStream(events(), { into, id: key });          // VISUAL face via onFinal
        return { id: key, kappa: out.kappa, cached: out.cached, ms: out.ms };
      }
      const f = await fabric.compute({ provider: prov, task, input, params: p });      // non-visual: code face only
      scene.observeCode(key, f.kappa, { source: prov.id, kind: task });
      return { id: key, value: f.value, kappa: f.kappa, cached: f.cached, ms: f.ms };
    }

    const handle = { appId, renderer, scene, create, improve: (o) => loop.run(o), state: () => scene.feedback() };
    apps.set(appId, handle); return handle;
  }

  const improve = (o) => loop.run(o);

  // the ONE verb — both a human surface (the Create studio) and an AI agent call this exact entry.
  // Lazily mounts a default headless app (no renderer; the host paints via onPartial) and delegates.
  let _default = null;
  const create = (spec) => (_default || (_default = mount({ id: "shell" }))).create(spec);

  // continuous self-improvement: a cheap in-tab ticker — the scene-κ makes an unchanged pass ~free, so
  // it can run often without cost. Opt-in (the shell starts it); invisible to the user.
  let timer = null;
  const startImproving = (intervalMs = 1500) => { if (timer || typeof setInterval === "undefined") return; timer = setInterval(() => { improve({ maxTicks: 4 }).catch(() => {}); }, intervalMs); };
  const stopImproving = () => { if (timer) { clearInterval(timer); timer = null; } };

  return {
    mount, create, improve, startImproving, stopImproving, scene, fabric,
    state: () => scene.feedback(), traces: () => loop.traces(),
    describe: () => ({
      trinity: "create (immanent·fabric) · exist (transcendent·κ-substrate) · perceive (omniscient·perception+loop)",
      surface: "mount() once per app; create() for any act; exist + perceive are automatic — the loop is invisible",
      ethic: "create is sovereign + ungated (interpreter); improve is conscience-governed (orchestrator edits only what EXISTS)",
      precedence: "each create SEALS to κ before perceive touches it — create-then-edit, even when streaming (micro-granularity)",
      constraints: "shared κ-memo (cross-app O(1)) + scene-κ skip → very low latency; no network in the loop → 100% serverless",
    }),
  };
}

// the OS-wide singleton — every native app inherits ONE trinity (the shell installs it).
export function installTrinity(opts) { const g = (typeof window !== "undefined") ? window : globalThis; if (!g.HoloTrinity) g.HoloTrinity = createTrinity(opts); return g.HoloTrinity; }

export default { createTrinity, installTrinity };
