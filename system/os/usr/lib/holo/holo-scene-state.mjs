// holo-scene-state.mjs — per-object-kind STATE SCHEMAS for the composed-holospace manifest (ADR-0089).
// A scene object is { k, x, y, w, h, z?, state? }; `state` is the DEFINED minimal per-instance state
// that round-trips into the scene κ (re-derivable), as opposed to the transient runtime an object
// DISCARDS. This module is the registry of those schemas — each object kind names exactly what
// persists (so the κ is content-exact, not frame-exact) — and ships the first concrete one:
//
//   holo:widget — over the Holo Widgets runtime (holo-widgets.js), whose own serialize() already
//   persists { type, config, hidden } and explicitly KEEPS OUT the transient `_state` (countdown
//   progress, animation phase). The schema formalizes that line, so a board of widgets round-trips
//   its live state to a κ: same widgets+config → same κ on every device, a config edit → a new κ, and
//   a tick of a countdown changes NOTHING (transient, by omission).
//
// Pure + dependency-free. Composes with holo-scene.mjs (the general engine) — kept separate so the
// engine stays kind-agnostic and new kinds register without touching it.

const REGISTRY = new Map();

// defineObjectState(kind, { persist?, normalize, restore? }) — register a kind's state schema.
//   persist(raw)   → the persisted subset (drop transient/runtime/DOM handles)   [optional; default identity]
//   normalize(s)   → the canonical minimal state (defaults, drop empties, sort)   [REQUIRED — makes the κ deterministic]
//   restore(state) → the args a host runtime needs to re-instantiate the object   [optional; default identity]
export function defineObjectState(kind, schema) {
  if (!schema || typeof schema.normalize !== "function") throw new Error("defineObjectState: a normalize(state) is required for kind " + kind);
  REGISTRY.set(kind, schema); return schema;
}
export function objectState(kind) { return REGISTRY.get(kind) || null; }
export function kinds() { return [...REGISTRY.keys()]; }

// persistState(kind, raw) → the minimal, normalized state, or undefined if the kind has no schema
// (an object with no schema carries no state — it round-trips by its source κ alone, the safe default).
export function persistState(kind, raw) {
  const s = REGISTRY.get(kind); if (!s) return undefined;
  return s.normalize(s.persist ? s.persist(raw) : raw);
}
// restoreState(kind, state) → the instantiation args for a host runtime (the inverse of persist).
export function restoreState(kind, state) {
  const s = REGISTRY.get(kind); if (!s) return state;
  return s.restore ? s.restore(state) : state;
}

// objectFrom(kind, raw, { kappaOf }) → a scene object { k, x, y, w, h, z?, state }. `kappaOf(kind,raw)`
// resolves the object's content/definition κ (e.g. a widget TYPE's sealed def κ); defaults to raw.k.
export function objectFrom(kind, raw, { kappaOf } = {}) {
  const o = { k: kappaOf ? kappaOf(kind, raw) : raw.k, x: raw.x | 0, y: raw.y | 0, w: raw.w | 0, h: raw.h | 0 };
  if (raw.z !== undefined) o.z = raw.z | 0;
  const st = persistState(kind, raw); if (st !== undefined) o.state = st;
  return o;
}

// ── the first kind: holo:widget (Holo Widgets runtime) ───────────────────────────────────────────
export const WIDGET = "holo:widget";
export const WIDGET_DEF = (type) => "did:holo:widget:" + String(type);   // a type's def κ (placeholder until each type is sealed)

defineObjectState(WIDGET, {
  // PERSIST — the re-derivable instance state (mirrors the runtime's serialize(): type ⊕ config ⊕ hidden).
  // The transient `_state` / `el` / `body` / `_subs` are NOT read — content-exact, not frame-exact.
  persist: (w) => ({ type: w.type, config: (w.config && typeof w.config === "object") ? w.config : {}, hidden: !!w.hidden }),
  // NORMALIZE — drop empty/null config entries + sort, so the SAME logical widget → SAME bytes → SAME κ
  // regardless of key order or stray empties. (canon sorts at hash time too; this keeps `state` clean.)
  normalize: (s) => {
    const cfg = {};
    for (const k of Object.keys(s.config || {}).sort()) { const v = s.config[k]; if (v !== undefined && v !== null && v !== "") cfg[k] = v; }
    const out = { type: s.type, config: cfg };
    if (s.hidden) out.hidden = true;          // omit when false → the default carries no bytes
    return out;
  },
  // RESTORE — the args the widget runtime needs to re-mount this instance (type + config + hidden).
  restore: (s) => ({ type: s.type, config: s.config || {}, hidden: !!s.hidden }),
});

export function describeStateSchemas() {
  return {
    is: "per-object-kind state schemas — each kind NAMES the minimal state that round-trips into the scene κ",
    line: "persist (re-derivable instance state) vs the transient runtime an object discards — content-exact, not frame-exact",
    widget: "holo:widget = { type, config, hidden? }; the transient `_state` (countdown/animation) is excluded by omission",
    extend: "register a kind with defineObjectState(kind, { normalize, persist?, restore? }) — the engine stays kind-agnostic",
  };
}

export default { defineObjectState, objectState, kinds, persistState, restoreState, objectFrom, WIDGET, WIDGET_DEF, describeStateSchemas };
