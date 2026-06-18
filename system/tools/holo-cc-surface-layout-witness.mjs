#!/usr/bin/env node
// holo-cc-surface-layout-witness.mjs — the CC-surface-layout conformance row (Phase 3b). External
// authority: W3C CSS — Flexbox (flex-direction:column + gap) and Grid (grid-template-columns +
// gap), over the CSS box model (padding shrinks the content box; gap separates items). Proves the
// container `layout` (stack | grid) places child boxes exactly as the CSS box model prescribes — the
// truth the DOM-reference mirror also renders, so GPU and DOM agree. Staged for holospaces vv/:
// author as an expected-RED target in vv/targets/, build to green (here), promote to vv/suites/.
//
// Run: node holo-os/system/tools/holo-cc-surface-layout-witness.mjs
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const here = dirname(fileURLToPath(import.meta.url));
const { layoutScene } = await import(pathToFileURL(join(here, "../os/usr/lib/holo/holo-surface.mjs")));

let pass = 0, fail = 0;
const ok = (c, m) => { c ? pass++ : fail++; console.log((c ? "  ✓ " : "  ✗ ") + m); };
const box = (draws, i) => draws[i].box.map((n) => Math.round(n * 100) / 100);
const eq = (a, b) => a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) < 0.5);

// ── STACK = CSS flex-direction:column with gap, inside a padded box ──
// container w=200, pad=12, gap=10; children heights 20,30,40 → inner width 176, x=12, y advances by h+gap
{
  const { draws } = layoutScene({ kind: "container", w: 200, pad: 12, gap: 10, children: [
    { kind: "text", text: "a", h: 20 }, { kind: "text", text: "b", h: 30 }, { kind: "text", text: "c", h: 40 } ] });
  ok(draws.length === 4, "stack: container bg + 3 children = 4 draw nodes");
  ok(eq(box(draws, 1), [12, 12, 176, 20]), "stack: child1 box = [12,12,176,20] (pad shrinks width, top of column)");
  ok(eq(box(draws, 2), [12, 42, 176, 30]), "stack: child2 y = 12+20+gap10 = 42 (CSS column flow)");
  ok(eq(box(draws, 3), [12, 82, 176, 40]), "stack: child3 y = 42+30+gap10 = 82");
  ok(eq(box(draws, 0), [0, 0, 200, 134]), "stack: container height = pad + Σh + Σgap + pad = 134");
}

// ── GRID = CSS grid-template-columns:repeat(2,1fr) with gap ──
// container w=200, pad=12, gap=10, cols=2; 4 children h=30 → cellW=(176-10)/2=83; row-major placement
{
  const { draws } = layoutScene({ kind: "container", w: 200, layout: "grid", cols: 2, pad: 12, gap: 10, children: [
    { kind: "text", text: "1", h: 30 }, { kind: "text", text: "2", h: 30 }, { kind: "text", text: "3", h: 30 }, { kind: "text", text: "4", h: 30 } ] });
  ok(eq(box(draws, 1), [12, 12, 83, 30]), "grid: cell(0,0) = [12,12,83,30] (cellW=(inner-gap)/cols)");
  ok(eq(box(draws, 2), [105, 12, 83, 30]), "grid: cell(0,1) x = 12 + cellW83 + gap10 = 105");
  ok(eq(box(draws, 3), [12, 52, 83, 30]), "grid: cell(1,0) wraps to next row, y = 12+30+gap10 = 52");
  ok(eq(box(draws, 4), [105, 52, 83, 30]), "grid: cell(1,1) = [105,52,83,30]");
  ok(eq(box(draws, 0), [0, 0, 200, 94]), "grid: container height = pad + 2 rows*30 + gap + pad = 94");
}

console.log(`\n${fail === 0 ? "GREEN" : "RED"} — ${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);
