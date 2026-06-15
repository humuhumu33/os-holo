// holo-q-loop.js — the AUTONOMOUS self-improvement loop that closes Holo Perception (ADR-0086) onto
// action: the orchestrator OBSERVES the scene, EVALUATES it (drift + fabric latency telemetry), ACTS
// to improve it, RE-OBSERVES, and records the measured delta as a TRACE (the learning substrate,
// ADR-0081). This is the real-time feedback loop for streaming AI + rendered apps, made concrete:
// when an object's code moves but its screen lags (drift), the loop heals it; coherence is the
// objective, and every tick proves it moved the objective or stops.
//
// Deterministic + honest: `heal(id)` (the action — re-derive + re-render an object) is INJECTED, so
// the loop is a pure controller (witnessed in Node); the improvement signal is MEASURED (coherence,
// drift count, fabric latency), never a self-grade — it can't Goodhart. Bounded by `maxTicks` so it
// always terminates; an object it cannot heal is reported, not retried forever. Serverless: it reads
// the in-tab scene and acts through the fabric/renderer — no network, no pixels.

// createLoop({ scene, heal, fabric, gate }) — `scene` (Holo Perception) · `heal(id)→Promise` (the
// action that re-derives + re-renders one object) · `fabric` (for latency telemetry, optional) ·
// `gate` (conscience, optional — a blocked heal is skipped, never forced).
export function createLoop({ scene, heal, fabric = null, gate = null } = {}) {
  if (!scene || typeof heal !== "function") throw new Error("createLoop: { scene, heal } required");
  const traces = [];                                                 // append-only record (feeds ADR-0081 evolve)
  const allow = async () => ({ outcome: "accept" });
  const gateFn = gate || allow;

  // one tick: observe → act on drift → re-observe → record the measured improvement.
  async function tick() {
    const before = scene.feedback();
    if (!before.drift.length) return { acted: false, before, after: before, healed: 0 };
    let healed = 0, blocked = 0;
    for (const id of before.drift) {
      const verdict = await gateFn({ verb: "heal", id });
      if (verdict.outcome === "block") { blocked++; continue; }       // self-discipline: never force a heal
      try { await heal(id); healed++; } catch (e) { /* unhealable this tick — reported below */ }
    }
    const after = scene.feedback();
    const trace = {
      drifted: before.drift.length, healed, blocked,
      coherenceBefore: before.coherent, coherenceAfter: after.coherent,
      improved: after.drift.length < before.drift.length,            // the MEASURED objective moved
      remaining: after.drift.slice(),
      latency: fabric ? fabric.stats().avgColdMs : null,
    };
    traces.push(trace);
    return { acted: true, before, after, healed, blocked, trace };
  }

  // run until the scene is coherent (drift = 0) or the budget is spent or a tick makes no progress.
  async function run({ maxTicks = 8 } = {}) {
    const start = scene.feedback(); let ticks = 0, lastDrift = Infinity;
    while (ticks < maxTicks) {
      const r = await tick(); ticks++;
      const drift = r.after.drift.length;
      if (drift === 0) break;                                         // healed — coherent
      if (!r.acted || drift >= lastDrift) break;                      // no progress (unhealable / blocked) — stop, don't spin
      lastDrift = drift;
    }
    const end = scene.feedback();
    return {
      ticks, start, end,
      converged: end.drift.length === 0,
      coherenceGain: end.coherent - start.coherent,
      driftCleared: start.drift.length - end.drift.length,
      latency: fabric ? fabric.stats() : null,
      traces: traces.slice(),
    };
  }

  return { tick, run, traces: () => traces.slice(), describe: () => ({
    loop: "observe (perception drift + fabric telemetry) → evaluate → act (heal) → re-observe → trace",
    objective: "coherence (drift→0) — a MEASURED signal, not a self-grade (no Goodhart)",
    terminates: "bounded by maxTicks; stops on no-progress; an unhealable object is reported, not retried forever",
    governed: "each heal passes the conscience gate; a blocked heal is skipped (self-discipline, ADR-0033)",
    learns: "every tick appends a trace (before→action→after delta) — the corpus the orchestrator evolves on (ADR-0081)",
  }) };
}

export default { createLoop };
