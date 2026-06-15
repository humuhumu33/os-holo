// holo-home-scene.mjs — the DESKTOP as a content-addressed holospace (ADR-0088), now the FIRST
// specialization of the general composed-holospace manifest (holo-scene.mjs, ADR-0089). The home is a
// `holo:HomeScene`: its background is a cosmos wallpaper SEED κ (Holo Cosmos, ADR-0080 — re-derives,
// never a pixel snapshot), its objects are the placed desktop κ-objects, and its props carry the
// dock/theme config κs. Everything else — sealing to the home κ, the render ⇄ serialize isomorphism,
// remix → child κ with provenance, walkLineage — comes from holo-scene unchanged. Re-derivable (Law
// L5): same desktop → same home κ on every device; pure + dependency-free.

import * as S from "./holo-scene.mjs";

const HOME = "holo:HomeScene";
const homeProps = ({ dock = null, theme = null } = {}) => { const p = {}; if (dock) p.dock = dock; if (theme) p.theme = theme; return Object.keys(p).length ? p : null; };
const bgOf = (wallpaper) => (wallpaper ? { seed: wallpaper.seed || wallpaper } : null);

// homeScene(...) → a normalized holo:HomeScene manifest (wallpaper→background.seed, dock/theme→props).
export function homeScene({ wallpaper = null, objects = [], dock = null, theme = null } = {}) {
  return S.scene({ type: HOME, background: bgOf(wallpaper), objects, props: homeProps({ dock, theme }) });
}

// serialize a live desktop → home manifest. readObject(node) → { k,x,y,w,h,state? }.
export function serializeWorld({ wallpaper = null, objectNodes = [], readObject, dock = null, theme = null } = {}) {
  return S.serializeWorld({ type: HOME, background: bgOf(wallpaper), objectNodes, readObject, props: homeProps({ dock, theme }) });
}

// render a home manifest → instantiate the desktop. Maps the generic hooks back to the home domain:
// setWallpaper(seed) ← background, setDock/setTheme ← props.
export function render(manifest, { setWallpaper, mountObject, setDock, setTheme } = {}) {
  return S.render(manifest, {
    setBackground: (bg) => { if (setWallpaper) setWallpaper(bg && bg.seed); },
    mountObject,
    applyProps: (p) => { if (p) { if (p.dock && setDock) setDock(p.dock); if (p.theme && setTheme) setTheme(p.theme); } },
  });
}

// the address + remix/lineage + edit helpers are the GENERAL engine, unchanged for the home.
export const canon = S.canon;
export const sceneKappa = S.sceneKappa;
export const remix = S.remix;
export const addObject = S.addObject;
export const removeObject = S.removeObject;
export const moveObject = S.moveObject;
export const setWallpaperSeed = (seed) => S.setBackground({ seed });
export const walkLineage = S.walkLineage;

export function describeHomeScene() {
  return { ...S.describeScene(), is: "the desktop as a Holo Scene (kind holo:HomeScene) — wallpaper-seed background + placed κ-objects + dock/theme props; built on the general holo-scene engine (ADR-0089)" };
}

export default { canon, homeScene, sceneKappa, serializeWorld, render, remix, addObject, removeObject, moveObject, setWallpaperSeed, walkLineage, describeHomeScene };
