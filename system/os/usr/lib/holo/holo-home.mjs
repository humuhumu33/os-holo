// holo-home.mjs — the BRIDGE from the shell's live desktop to the general scene model (ADR-0088/0089).
// The shell already holds the desktop as a repo object: `desktop.doc() → { world:[nodes], layout }`
// with its own `desktop.kappa()`, and the widget board's `HoloWidgets.snapshot()` is folded into it.
// This expresses that live desktop as ONE `holo:HomeScene` κ in the GENERAL manifest — so the home
// gains what the shell's repo-κ lacks: a uniform cross-app shape, per-object live STATE (the widget
// schema), and a provenance chain (remix → child κ `wasDerivedFrom`, Holo Prov ADR-0082).
//
// READ direction (`worldToScene`) is safe + additive — it makes the live desktop a remixable κ with
// lineage without touching how the desktop renders. The RENDER/boot direction (`sceneToWorld` →
// re-instantiate) is the inverse used by the staged compositor refactor; here it is pure + witnessed,
// not yet wired into the live boot. Pure given injected readers — the shell owns node/widget shape.

import * as Scene from "./holo-scene.mjs";
import { objectFrom, restoreState, WIDGET, WIDGET_DEF } from "./holo-scene-state.mjs";

const HOME = "holo:HomeScene";
const widgetKappa = (kind, w) => WIDGET_DEF(w.type);   // a widget instance's def κ (per type)

// worldToScene({ world, layout, wallpaperSeed, widgets, readNode, dock, theme }) → a home manifest.
//   world[]       — the desktop's placed nodes (apps/icons/windows); `readNode(node) → {k,x,y,w,h,z?,state?}`
//                   (the shell owns node shape: appId → holo://κ, src → web ref, content → κ).
//   widgets[]     — `HoloWidgets.snapshot()` instances; mapped via the holo:widget state schema (live state).
//   wallpaperSeed — the cosmos seed κ (Holo Cosmos, ADR-0080) — re-derives, never a pixel snapshot.
//   layout/dock/theme — config → props.
export function worldToScene({ world = [], layout = null, wallpaperSeed = null, widgets = [], readNode, dock = null, theme = null } = {}) {
  const nodeObjs = (world || []).map((n) => (readNode ? readNode(n) : null)).filter((o) => o && o.k);
  const widgetObjs = (widgets || []).map((w) => objectFrom(WIDGET, w, { kappaOf: widgetKappa }));
  const props = {};
  if (layout) props.layout = layout;
  if (dock) props.dock = dock;
  if (theme) props.theme = theme;
  return Scene.scene({
    type: HOME,
    background: wallpaperSeed ? { seed: wallpaperSeed.seed || wallpaperSeed } : null,
    objects: [...nodeObjs, ...widgetObjs],
    props: Object.keys(props).length ? props : null,
  });
}

// sceneToWorld(manifest, { mountNode, mountWidget, setWallpaper }) → instantiate the desktop (the staged
// render/boot direction). Pure controller: same manifest → same ordered hook-calls. A scene object is a
// WIDGET when its k is a widget def κ; everything else is a desktop node. Re-instantiation state comes
// from `restoreState` (widget → {type,config,hidden}).
export function sceneToWorld(manifest, { mountNode, mountWidget, setWallpaper } = {}) {
  const calls = [];
  if (manifest.background && manifest.background.seed) { if (setWallpaper) setWallpaper(manifest.background.seed); calls.push({ op: "wallpaper", seed: manifest.background.seed }); }
  for (const o of manifest.objects || []) {
    const isWidget = typeof o.k === "string" && o.k.startsWith("did:holo:widget:");
    if (isWidget) { const w = restoreState(WIDGET, o.state || {}); if (mountWidget) mountWidget({ ...w, x: o.x, y: o.y, w: o.w, h: o.h }); calls.push({ op: "widget", type: w.type, x: o.x, y: o.y }); }
    else { if (mountNode) mountNode(o); calls.push({ op: "node", k: o.k, x: o.x, y: o.y }); }
  }
  return { rendered: true, calls, layout: manifest.props && manifest.props.layout };
}

// the address + remix/lineage are the GENERAL engine — the home rides the same path as any app.
export const homeKappa = Scene.sceneKappa;
export const remixHome = Scene.remix;
export const walkHomeLineage = Scene.walkLineage;

export function describeHome() {
  return {
    is: "the live desktop expressed as ONE holo:HomeScene κ — the bridge from the shell `desktop` repo-object to the general scene model",
    gains: "uniform cross-app shape + per-object live STATE (widget schema) + a provenance chain (remix → child κ wasDerivedFrom)",
    read: "worldToScene — safe + additive: the live desktop becomes a remixable κ with lineage, no render change",
    render: "sceneToWorld — the inverse used by the STAGED compositor/Create wiring (csResolve → home κ; preview ← compositor render)",
    honest: "wallpaper = cosmos seed not pixels; nodes/widgets carry refs + layout + DEFINED state; the live boot refactor is not yet wired",
  };
}

export default { worldToScene, sceneToWorld, homeKappa, remixHome, walkHomeLineage, describeHome };
