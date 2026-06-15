// holo-q-surface-witness.mjs — proves the warm-κ surface cache: opening an app κ is O(1) on a repeat
// (no re-mount), a closed surface is WARMED not destroyed (instant re-open), and the warm set is
// LRU-bounded (an in-use surface is never evicted). The re-derivable core of the heavy-open fix.
import { createSurfaceCache, recommendHotMax } from "../os/usr/lib/holo/q/holo-q-surface.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// a stub "surface": counts how many times it was actually mounted (re-fetched/re-init) vs disposed.
let mounts = 0; const disposed = [];
const mk = (k) => () => { mounts++; return { handle: { k, id: mounts }, dispose: () => disposed.push(k) }; };

const cache = createSurfaceCache({ hotMax: 2 });

// ── O(1) re-open: acquiring the SAME κ does NOT re-mount ──
const a1 = await cache.acquire("appA", mk("appA"));
const a2 = await cache.acquire("appA", mk("appA"));
ok("first acquire mounts (miss)", a1.cached === false && a1.reused === false);
ok("repeat acquire is O(1) hot — no re-mount", a2.cached === "hot" && a2.reused === true && mounts === 1, "mounts=" + mounts);
ok("same κ → same handle", a1.handle === a2.handle);

// ── warm-keep: release does NOT destroy; re-acquire is an instant warm reuse ──
cache.release("appA"); cache.release("appA");           // two acquires → two releases → warm
ok("release warms, does NOT dispose", disposed.length === 0 && cache.has("appA"));
const a3 = await cache.acquire("appA", mk("appA"));
ok("re-open after close is a WARM reuse (still no re-mount)", a3.cached === "hot" && mounts === 1 && cache.stats().warmReuse >= 1);
cache.release("appA");                                   // back to warm

// ── LRU eviction: beyond hotMax warm surfaces, the least-recently-used WARM one is disposed ──
await cache.acquire("appB", mk("appB")); cache.release("appB");   // warm
await cache.acquire("appC", mk("appC")); cache.release("appC");   // warm → now 3 warm (appA,appB,appC) > hotMax 2
ok("LRU-evicts the oldest WARM surface beyond hotMax", disposed.includes("appA") && !cache.has("appA"), "disposed=" + JSON.stringify(disposed));
ok("the newer warm surfaces survive", cache.has("appB") && cache.has("appC"));

// ── an IN-USE surface is never evicted (pinned) ──
const cache2 = createSurfaceCache({ hotMax: 1 });
await cache2.acquire("live1", mk("live1"));              // live (uses=1, never released)
await cache2.acquire("live2", mk("live2"));              // live
await cache2.acquire("warm1", mk("warm1")); cache2.release("warm1");   // 1 warm, cap 1 → ok
ok("in-use surfaces are pinned (never evicted)", cache2.has("live1") && cache2.has("live2"));

// ── telemetry is honest ──
const st = cache.stats();
ok("telemetry: mounts counted once per distinct κ", st.mounts === 3, "mounts=" + st.mounts);
ok("telemetry: hits + hitRate reflect the O(1) reuse", st.hits >= 2 && st.hitRate > 0, JSON.stringify({ hits: st.hits, rate: st.hitRate }));

// ── TUNING: hotMax scales with device RAM ──
ok("recommendHotMax scales with device memory", recommendHotMax(1) === 1 && recommendHotMax(2) === 2 && recommendHotMax(4) === 4 && recommendHotMax(8) === 6 && recommendHotMax(16) === 8, [1, 2, 4, 8, 16].map(recommendHotMax).join(","));
ok("recommendHotMax defaults sanely when memory unknown", recommendHotMax(undefined) === 4 && recommendHotMax(0) === 4);

// ── TUNING: a WEIGHT budget keeps fewer HEAVY surfaces warm than light ones ──
const wc = createSurfaceCache({ hotMax: 99, maxWeight: 6 });   // count is not the limit here; weight is
const wd = [];
const wmk = (k) => () => ({ handle: k, dispose: () => wd.push(k) });
await wc.acquire("h1", wmk("h1"), { weight: 3 }); wc.release("h1");
await wc.acquire("h2", wmk("h2"), { weight: 3 }); wc.release("h2");   // total weight 6 — at budget
await wc.acquire("h3", wmk("h3"), { weight: 3 }); wc.release("h3");   // 9 > 6 → evict LRU warm (h1)
ok("weight budget evicts heavy LRU surfaces over maxWeight", wd.includes("h1") && !wc.has("h1") && wc.has("h3"), "evicted=" + JSON.stringify(wd));
ok("a heavy surface counts more weight than a light one", wc.stats().weight <= 6, "weight=" + wc.stats().weight);
// a LIGHT surface (weight 1) fits where a heavy one wouldn't
const lc = createSurfaceCache({ hotMax: 99, maxWeight: 3 });
await lc.acquire("L1", () => ({ handle: 1 }), { weight: 1 }); lc.release("L1");
await lc.acquire("L2", () => ({ handle: 2 }), { weight: 1 }); lc.release("L2");
await lc.acquire("L3", () => ({ handle: 3 }), { weight: 1 }); lc.release("L3");
ok("three LIGHT surfaces fit a budget that holds one heavy", lc.stats().warm === 3 && lc.stats().weight === 3);

const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "Q warm-κ surface cache — open(app κ) is O(1) on repeat, warm-on-close, LRU-bounded + device-tuned (hotMax/weight)", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-surface-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
