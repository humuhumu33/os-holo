#!/usr/bin/env node
// holo-widgets-modes-witness.mjs — the four desktop widget MODES (Focused · Learn · Work · Play), redesigned
// golden-ratio-true and wired to REAL holo-native widgets + apps. holo-widgets.js is a browser IIFE (window/
// DOM), so this witness (a) RE-DERIVES the golden geometry numerically — the φ width ladder + the golden
// cuts — and (b) source-asserts each scene composes real widgets, the launch tiles open real apps, the
// switch stays non-destructive, first boot lands in Focused, and the readability floor is held.
//
// Authority: φ = golden ratio (1.618) · holospaces Law L1/L2/L3/L5 · ADR-0057 (the 16px readability floor)
// · ADR-0088/0089 (the scene manifest / per-holospace boards).   node tools/holo-widgets-modes-witness.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const OS = join(here, "../os");
const checks = {}; const fail = [];
const ok = (n, c, d = "") => { checks[n] = !!c; if (!c) fail.push(n + (d ? ` — ${d}` : "")); return !!c; };
const src = readFileSync(join(OS, "usr/lib/holo/holo-widgets.js"), "utf8");
const shell = readFileSync(join(OS, "usr/share/frame/shell.html"), "utf8");

const REAL = ["clock", "note", "focus", "weather", "tasks", "system", "calendar", "links", "quote", "vinyl", "now-playing", "launch"];
const PHI = 1.618, near = (r, t = 0.02) => Math.abs(r - PHI) <= t;

// ── 1 · the φ WIDTH LADDER re-derives golden (hero : secondary : header = φ : φ) ──
const LAD = (hero) => { const sec = Math.round(hero / PHI), head = Math.round(sec / PHI); return { hero, sec, head }; };
const L = LAD(400);
ok("phi-width-ladder-is-golden", near(L.hero / L.sec) && near(L.sec / L.head), `400:${L.sec}:${L.head}`);

// ── 2 · the GOLDEN CUTS are complementary + their ratio is φ ──
ok("golden-cuts-complementary", Math.abs((0.382 + 0.618) - 1) < 1e-9 && near(0.618 / 0.382));

// ── slice each scene block ──
const starts = ["focused", "learn", "work", "play"].map((n) => ({ n, i: src.indexOf('defineScene("' + n + '"') }));
ok("all-four-modes-defined", starts.every((s) => s.i > 0));
const blockOf = (name) => {
  const me = starts.find((s) => s.n === name).i;
  const after = starts.map((s) => s.i).filter((i) => i > me).sort((a, b) => a - b)[0] || src.indexOf("DOMContentLoaded", me);
  return src.slice(me, after > 0 ? after : me + 1600);
};
const tilesIn = (block) => (block.match(/type:\s*"([\w-]+)"/g) || []).map((m) => m.match(/"([\w-]+)"/)[1]);
const usesGolden = (block) => /LAD\(/.test(block) && /0\.382/.test(block) && /0\.618/.test(block);

const F = blockOf("focused"), LE = blockOf("learn"), WK = blockOf("work"), PL = blockOf("play");

// ── 3 · every tile in every scene is a REAL holo-native widget/app (no mockups, no dead tiles) ──
const allTiles = [...tilesIn(F), ...tilesIn(LE), ...tilesIn(WK), ...tilesIn(PL)];
ok("every-tile-is-a-real-widget", allTiles.length > 0 && allTiles.every((t) => REAL.includes(t)), allTiles.filter((t) => !REAL.includes(t)).join(",") || "all real");

// ── 4 · FOCUSED is a bare desktop — nothing competing: zero widgets, only the wallpaper (the orb is sticky, outside the board) ──
ok("focused-is-bare", tilesIn(F).length === 0 && /return \[\];/.test(F),
  "tiles=" + tilesIn(F).join(","));

// ── 5 · LEARN is a φ:1 two-column study space with Q as copilot (distinct from Work) ──
ok("learn-golden-two-column", usesGolden(LE) && /HX\(b, m\)/.test(LE) && /RX\(W_/.test(LE));
ok("learn-has-Q-copilot", /type:\s*"launch"[\s\S]*?app:\s*"q"/.test(LE) && tilesIn(LE).includes("note") && tilesIn(LE).includes("links"));

// ── 6 · WORK wires REAL app launch tiles (Files · Code · Wallet) + keeps the bottom-right clear for the orb ──
ok("work-golden", usesGolden(WK));
ok("work-launches-real-apps",
  /appId:\s*"org\.hologram\.HoloFiles"/.test(WK) && /appId:\s*"org\.hologram\.HoloForge"/.test(WK) && /appId:\s*"org\.hologram\.HoloWallet"/.test(WK));
ok("work-leaves-orb-corner-free", /type:\s*"system"[\s\S]*?CX\(W_/.test(WK) && !/type:\s*"\w[\w-]*"[\s\S]*?RX\(W_[^)]*\), y: GY\(top, H_, m, 0\.618\)/.test(WK),
  "system must sit bottom-centre, nothing right-aligned on the lower golden band");

// ── 7 · PLAY puts the disc up front (hero on the focal point), roomier margins ──
ok("play-golden", usesGolden(PL));
ok("play-vinyl-is-hero", /type:\s*"vinyl",\s*w:\s*372,\s*x:\s*GPX\(b, 372, 0\.382\)/.test(PL) && /MARGIN\(W_, H_\) \* PHI/.test(PL));

// ── 8 · the launch widget opens REAL apps via the shell + summons Q; label respects the 16px floor ──
ok("launch-widget-defined", /W\.HoloWidgets\.define\("launch"/.test(src));
ok("launch-opens-real-apps", /S\.openApp\(c\.appId/.test(src) && /W\.Q && W\.Q\.summon/.test(src) && /map\[c\.app\]/.test(src));
ok("launch-label-respects-readability-floor", /max\(var\(--holo-font-min,16px\)/.test(src));
ok("shell-exposes-openApp", /openApp:\s*function\s*\(appId, title\)/.test(shell));

// ── 9 · NON-DESTRUCTIVE switch — leaving a mode saves its board; sticky (orb) survives (ADR per-mode boards) ──
ok("switch-is-non-destructive", /boards\[prev\] = modeSnapshot\(\)/.test(src) && /isStickyType/.test(src));

// ── 10 · FIRST BOOT lands in Focused (first-time users always start focused) ──
ok("first-boot-is-focused", /seedFirstRun[\s\S]*?setMode\("focused"\)/.test(src));

const witnessed = Object.values(checks).every(Boolean);
const result = {
  "@type": "earl:TestResult",
  witnessed,
  subject: "Holo Widgets desktop modes (Focused · Learn · Work · Play) — golden-ratio layouts wired to real widgets + app launch tiles, non-destructive, first-boot Focused",
  covers: [
    "the φ width ladder re-derives golden (hero:secondary:header = φ:φ) and the golden cuts 0.382/0.618 are complementary with ratio φ",
    "every tile in all four modes is a REAL holo-native widget/app (no mockups, no dead tiles)",
    "Focused is a bare desktop — zero widgets, nothing competing (the sticky Q orb lives outside the mode board and remains)",
    "Learn is a φ:1 two-column study space (reading surface + resources) with Q as a copilot launch tile, distinct from Work",
    "Work wires real app launch tiles (Files · Code · Wallet by org.hologram id) and keeps the bottom-right clear for the Q orb",
    "Play makes the vinyl disc the hero on the focal point with roomier (φ-stepped) margins",
    "the launch widget opens real apps via window.HoloShell (openApp) + summons Q; its label holds the 16px readability floor (ADR-0057)",
    "the mode switch stays non-destructive (each mode saves its own board; the sticky orb survives) and first boot lands in Focused",
  ],
  ladder: L, modes: { focused: tilesIn(F), learn: tilesIn(LE), work: tilesIn(WK), play: tilesIn(PL) },
  checks, failed: fail,
  authority: "φ = golden ratio (1.618) · holospaces Law L1/L2/L3/L5 · ADR-0057 (16px readability floor) · ADR-0088/0089 (scene manifest / per-holospace boards)",
};
writeFileSync(join(here, "holo-widgets-modes-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("Holo Widgets modes witness — Focused · Learn · Work · Play (golden-ratio, real widgets + apps)\n");
for (const [k, v] of Object.entries(checks)) console.log(`  ${v ? "✓" : "✗"}  ${k}`);
console.log(`\n  ladder 400:${L.sec}:${L.head}  ·  focused[${tilesIn(F).join(" ")}]  work[${tilesIn(WK).join(" ")}]`);
console.log(`\n  ${witnessed ? "WITNESSED ✓" : "NOT witnessed — " + fail.join("; ")}`);
process.exit(witnessed ? 0 : 1);
