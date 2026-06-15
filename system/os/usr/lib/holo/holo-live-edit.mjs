// holo-live-edit.mjs — liveEdit: the ONE primitive every door edits a holospace through. A holospace (and
// every holo app inside it) is a κ-object; "live edit" is a single function: seal the new source to a NEW
// content address (κ) and, if it changed, RE-RENDER the live mounted surface IN PLACE — zero mirror, O(1)
// no-op when the source seals to the current κ (κ-memo). The Q chat sidecar (humans, NL → Q.create), Holo
// DevTools (humans, κ-CDP, ADR-0095), and AI agents (MCP/Q, ADR-0093) all call THIS — so a human edit and
// an agent edit are the same act on the same κ, the same live surface. Anchored in κ-addressed objects.
//
// THE DOOR SPLIT (exposure ≠ authorization, ADR-0033): `edit` is the TRUSTED door (the user editing their
// OWN holospace via the sidecar/DevTools — ungated, instant). `agentEdit` is the GOVERNED door for any
// non-human caller: a WRITE is DEFAULT-DENY unless the conscience accepts, and every accepted edit mints a
// re-derivable PROV-O `hosc:Edit` receipt (who · target · effect κ). Pure + isomorphic: `seal` (the κ
// addresser, e.g. repo.publishSource), the surface `render`, and the conscience are INJECTED — so the
// exact same logic runs in the shell, the DevTools backend, and the Node witness.

export function createLiveEditor({ seal, resolve = null, gate = null, now = () => 0 } = {}) {
  if (typeof seal !== "function") throw new Error("createLiveEditor needs seal(name, source) -> { id }");
  const surfaces = new Map();   // id → { name, render(source), kappa }

  // register(id, { name, render }) — a mounted, editable surface. `render(source)` re-renders it IN PLACE
  // (the shell sets the live iframe's srcdoc; DevTools applies the mutation). Explicit; the witness uses it.
  function register(id, { name = "app", render } = {}) {
    if (typeof render !== "function") throw new Error("register needs a render(source)");
    const prev = surfaces.get(id);
    surfaces.set(id, { name, render, kappa: prev ? prev.kappa : null });
    return id;
  }
  function unregister(id) { surfaces.delete(id); }

  // resolve a surface: a registered one, else the injected `resolve(id) → { name, render } | null` (the
  // shell resolves a live mounted window on demand, so it need not pre-register every app). State (the last
  // κ, for the O(1) no-op) is cached per id across edits.
  function surfaceOf(id) {
    let s = surfaces.get(id);
    if (!s && typeof resolve === "function") { const r = resolve(id); if (r && typeof r.render === "function") { s = { name: r.name || "app", render: r.render, kappa: null }; surfaces.set(id, s); } }
    return s || null;
  }

  // edit(id, source) → { ok, kappa, changed }. The TRUSTED door. Seal → if the κ is unchanged it's an O(1)
  // no-op (no re-render); else re-render the live surface in place and return the new κ.
  function edit(id, source) {
    const s = surfaceOf(id);
    if (!s) return { ok: false, reason: "no live surface for " + id };
    const obj = seal(s.name, source);
    if (obj.id === s.kappa) return { ok: true, kappa: obj.id, changed: false, id };   // identical bytes → O(1)
    s.kappa = obj.id;
    try { s.render(source); } catch (e) { return { ok: false, reason: "render failed: " + ((e && e.message) || e), kappa: obj.id }; }
    return { ok: true, kappa: obj.id, changed: true, id };
  }

  // agentEdit(id, source, { caller }) → the GOVERNED door for a non-human caller. FAIL-CLOSED: a conscience
  // must accept (no conscience ⇒ denied). Mints a re-derivable PROV-O edit receipt on success.
  async function agentEdit(id, source, { caller = "external", allowUngoverned = false } = {}) {
    const C = typeof gate === "function" ? gate() : gate;
    if (C && typeof C.evaluate === "function") {
      let v; try { v = await C.evaluate({ verb: "holo.edit", caller, target: id }); }
      catch (e) { return { ok: false, refused: true, reason: "gate error: " + ((e && e.message) || e), caller }; }
      if (v && v.outcome === "block") return { ok: false, refused: true, reason: v.reason || (v.blocked || []).join(",") || "refused by conscience", caller, blocked: v.blocked };
    } else if (!allowUngoverned) {
      return { ok: false, refused: true, reason: "no conscience — agent edit is fail-closed (exposure ≠ authorization)", caller };
    }
    const r = edit(id, source);
    if (!r.ok) return { ...r, caller };
    return { ...r, caller, receipt: { "@context": { prov: "http://www.w3.org/ns/prov#", hosc: "https://hologram.os/ns/conformance#" },
      "@type": ["prov:Activity", "hosc:Edit"], "hosc:who": caller, "hosc:verb": "holo.edit", "hosc:target": id, "prov:generated": r.kappa, "hosc:at": now() } };
  }

  return {
    register, unregister, edit, agentEdit,
    kappaOf: (id) => { const s = surfaces.get(id); return s ? s.kappa : null; },
    has: (id) => surfaces.has(id), list: () => [...surfaces.keys()],
    describe: () => ({
      is: "liveEdit — the ONE primitive the Q chat sidecar, Holo DevTools (ADR-0095), and AI agents all edit a holospace through; a human edit and an agent edit are the same act on the same κ + live surface",
      doors: "edit = the trusted human door (ungated, instant); agentEdit = the governed non-human door (conscience default-deny + a re-derivable hosc:Edit receipt)",
      rederive: "every edit seals to a NEW κ; identical source → same κ → O(1) no-op (no re-render); zero mirror — the live mounted surface IS the edited object",
    }),
  };
}

export default { createLiveEditor };
