// pages/weather.jsx
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2, CardAction as CardAction2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";

// pages/_shell.jsx
import { useState, useEffect } from "react";
import { Button } from "holo:button";
import { Badge } from "holo:badge";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardAction } from "holo:card";
import { Separator } from "holo:separator";
import { Skeleton } from "holo:skeleton";
import { jsx, jsxs } from "react/jsx-runtime";
var CATS = [
  ["Home", "home"],
  ["Ask", "ask"],
  ["News", "news"],
  ["Finance", "finance"],
  ["Markets", "markets"],
  ["Weather", "weather"],
  ["Mail", "mail"],
  ["Spaces", "spaces"],
  ["Health", "health"],
  ["Style", "style"],
  ["Travel", "travel"],
  ["Tech", "tech"]
];
function useFeed(fn, ms) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let on = true;
    const run = async () => {
      try {
        const v = await fn();
        if (on && v != null) setData(v);
      } catch {
      }
    };
    run();
    const id = ms ? setInterval(run, ms) : 0;
    return () => {
      on = false;
      if (id) clearInterval(id);
    };
  }, []);
  return data;
}
function Dot() {
  return /* @__PURE__ */ jsx("span", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#22d3ee", display: "inline-block", boxShadow: "0 0 8px #22d3ee" } });
}
function Spark({ data, up = true, w = 120, h = 34, fill }) {
  if (!data || data.length < 2) return /* @__PURE__ */ jsx("div", { style: { height: h } });
  const mn = Math.min(...data), mx = Math.max(...data), rng = mx - mn || 1;
  const xy = (v, i) => `${(i / (data.length - 1) * w).toFixed(1)},${(h - (v - mn) / rng * (h - 4) - 2).toFixed(1)}`;
  const pts = data.map(xy).join(" ");
  const c = up ? "oklch(0.72 0.17 162)" : "oklch(0.65 0.21 25)";
  return /* @__PURE__ */ jsxs("svg", { width: "100%", height: h, viewBox: `0 0 ${w} ${h}`, preserveAspectRatio: "none", style: { display: "block" }, children: [
    fill ? /* @__PURE__ */ jsx("polygon", { points: `0,${h} ${pts} ${w},${h}`, fill: c, opacity: "0.12" }) : null,
    /* @__PURE__ */ jsx("polyline", { points: pts, fill: "none", stroke: c, strokeWidth: "1.5", strokeLinejoin: "round", vectorEffect: "non-scaling-stroke" })
  ] });
}
var APPS = [
  { name: "News", page: "news", icon: "\u{1F4F0}", aliases: ["news", "headlines", "stories"] },
  { name: "Finance", page: "finance", icon: "\u{1F4B9}", aliases: ["finance", "fx", "currency"] },
  { name: "Markets", page: "markets", icon: "\u{1F4CA}", aliases: ["markets", "crypto", "prices", "ticker"] },
  { name: "Weather", page: "weather", icon: "\u26C5", aliases: ["weather", "forecast"] },
  { name: "Mail", page: "mail", icon: "\u2709", aliases: ["mail", "inbox", "email"] },
  { name: "Spaces", page: "spaces", icon: "\u{1FA9F}", aliases: ["spaces", "rooms"] },
  { name: "Health", page: "health", icon: "\u2764", aliases: ["health", "air quality", "aqi"] },
  { name: "Style", page: "style", icon: "\u2726", aliases: ["style", "fashion", "lookbook"] },
  { name: "Travel", page: "travel", icon: "\u2708", aliases: ["travel", "destinations"] },
  { name: "Tech", page: "tech", icon: "\u232C", aliases: ["tech", "repos"] },
  { name: "Wallet", slug: "wallet", icon: "\u25A6", aliases: ["wallet", "balance"], verbs: ["send", "pay", "swap"], desc: "Self-custodial, multi-chain" },
  { name: "Music", slug: "music", icon: "\u266A", aliases: ["music"], verbs: ["play"], desc: "A content-addressed library" },
  { name: "Files", slug: "files", icon: "\u25A3", aliases: ["files", "documents"], desc: "Your object universe" },
  { name: "Code", slug: "code", icon: "\u27E8\u27E9", aliases: ["code", "ide"], desc: "Agentic coding, local" },
  { name: "Trade", slug: "trade", icon: "\u2197", aliases: ["trade", "trading"], verbs: ["trade"], desc: "Self-custodial terminal" },
  { name: "Jupyter", slug: "jypyter", icon: "\u2211", aliases: ["jupyter", "notebook"], verbs: ["run"], desc: "Python notebooks" },
  { name: "Browser", slug: "browser", icon: "\u25A2", aliases: ["browser"], desc: "Verifiable web" },
  { name: "IPFS", slug: "ipfs", icon: "\u25C8", aliases: ["ipfs"], desc: "Browse IPFS" },
  { name: "Notepad", slug: "notepad", icon: "\u25A4", aliases: ["notes", "notepad"], verbs: ["remember", "note"], desc: "Your notes" },
  { name: "Meet", slug: "meet", icon: "\u25C9", aliases: ["meet"], verbs: ["call"], desc: "Encrypted video" },
  { name: "Docs", slug: "docs", icon: "\u25A6", aliases: ["docs"], verbs: ["draft", "write", "summarize"], desc: "Office suite" }
];
var VERB_APP = {};
for (const a of APPS) for (const v of a.verbs || []) if (!VERB_APP[v]) VERB_APP[v] = a;
var ACT_VERBS = Object.keys(VERB_APP);
var STOPQ = new Set("the a an of to in is are and or for on with by it its as at be this that from how what why who which can you your".split(" "));
function Shell({ title, sub, live, children }) {
  const cur = typeof location !== "undefined" && new URLSearchParams(location.search).get("p") || "home";
  return /* @__PURE__ */ jsxs("div", { style: { minHeight: "100dvh" }, children: [
    /* @__PURE__ */ jsx("header", { style: { position: "sticky", top: 0, zIndex: 30, backdropFilter: "blur(18px) saturate(1.2)", background: "color-mix(in oklch, var(--background) 78%, transparent)", borderBottom: "1px solid var(--border)" }, children: /* @__PURE__ */ jsxs("div", { style: { maxWidth: "1280px", margin: "0 auto", padding: ".7rem 1.618rem", display: "flex", alignItems: "center", gap: ".6rem" }, children: [
      /* @__PURE__ */ jsxs("a", { href: "?p=home", style: { display: "flex", alignItems: "center", gap: ".5rem", fontWeight: 760, letterSpacing: "-.02em", color: "inherit", textDecoration: "none" }, children: [
        /* @__PURE__ */ jsx("span", { style: { width: "30px", height: "30px", borderRadius: "9px", display: "grid", placeItems: "center", color: "#fff", background: "linear-gradient(100deg,#22d3ee,#6366f1 48%,#a855f7)" }, children: "\u25C7" }),
        /* @__PURE__ */ jsx("span", { style: { fontSize: "1.05rem" }, children: "Hologram" })
      ] }),
      /* @__PURE__ */ jsx("nav", { style: { display: "flex", gap: ".15rem", overflowX: "auto", marginLeft: ".4rem", scrollbarWidth: "none" }, children: CATS.map(([n, p]) => /* @__PURE__ */ jsx("a", { href: "?p=" + p, style: { textDecoration: "none", flex: "none" }, children: /* @__PURE__ */ jsx(Button, { variant: p === cur ? "secondary" : "ghost", size: "sm", children: n }) }, p)) })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { style: { maxWidth: "1280px", margin: "0 auto", padding: "1.618rem 1.618rem 4.236rem" }, children: [
      title || sub || live ? /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: ".618rem", marginBottom: "1.618rem", flexWrap: "wrap" }, children: [
        title ? /* @__PURE__ */ jsx("h1", { style: { margin: 0, fontSize: "clamp(1.6rem,2.4vw,2.2rem)", fontWeight: 740, letterSpacing: "-.02em" }, children: title }) : null,
        live ? /* @__PURE__ */ jsxs(Badge, { variant: "secondary", style: { gap: ".4rem" }, children: [
          /* @__PURE__ */ jsx(Dot, {}),
          " live"
        ] }) : null,
        sub ? /* @__PURE__ */ jsx(Badge, { variant: "outline", style: { marginLeft: "auto" }, children: sub }) : null
      ] }) : null,
      children
    ] })
  ] });
}
var grid = (min = 280) => ({ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`, gap: "1.618rem" });

// pages/weather.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CITIES = [["San Francisco", 37.77, -122.42], ["New York", 40.71, -74.01], ["London", 51.51, -0.13], ["Tokyo", 35.68, 139.69], ["Paris", 48.85, 2.35], ["Dubai", 25.2, 55.27], ["Sydney", -33.87, 151.21], ["Reykjav\xEDk", 64.15, -21.94]];
var WMO = { 0: ["Clear", "\u2600", ["oklch(0.5 0.13 240)", "oklch(0.3 0.12 250)"]], 1: ["Mainly clear", "\u{1F324}", ["oklch(0.5 0.12 240)", "oklch(0.32 0.1 250)"]], 2: ["Partly cloudy", "\u26C5", ["oklch(0.45 0.07 245)", "oklch(0.3 0.05 255)"]], 3: ["Overcast", "\u2601", ["oklch(0.4 0.03 250)", "oklch(0.28 0.02 255)"]], 45: ["Fog", "\u{1F32B}", ["oklch(0.42 0.02 250)", "oklch(0.3 0.02 255)"]], 48: ["Fog", "\u{1F32B}", ["oklch(0.42 0.02 250)", "oklch(0.3 0.02 255)"]], 51: ["Drizzle", "\u{1F326}", ["oklch(0.4 0.06 230)", "oklch(0.28 0.05 245)"]], 61: ["Rain", "\u{1F327}", ["oklch(0.38 0.07 235)", "oklch(0.26 0.06 250)"]], 63: ["Rain", "\u{1F327}", ["oklch(0.38 0.07 235)", "oklch(0.26 0.06 250)"]], 65: ["Heavy rain", "\u{1F327}", ["oklch(0.34 0.08 240)", "oklch(0.22 0.07 255)"]], 71: ["Snow", "\u{1F328}", ["oklch(0.55 0.03 240)", "oklch(0.4 0.03 250)"]], 80: ["Showers", "\u{1F326}", ["oklch(0.4 0.06 230)", "oklch(0.28 0.05 245)"]], 95: ["Storm", "\u26C8", ["oklch(0.32 0.09 285)", "oklch(0.2 0.08 290)"]] };
var cond = (c) => WMO[c] || ["\u2014", "\u2022", ["oklch(0.35 0.04 250)", "oklch(0.24 0.03 255)"]];
function Weather() {
  const data = useFeed(async () => {
    const lat = CITIES.map((c) => c[1]).join(","), lon = CITIES.map((c) => c[2]).join(",");
    const j = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m&hourly=temperature_2m&forecast_days=1`, { cache: "no-store" }).then((r) => r.json());
    return Array.isArray(j) ? j : [j];
  }, 18e4);
  return /* @__PURE__ */ jsx2(Shell, { title: "Weather", live: true, sub: "Open-Meteo", children: /* @__PURE__ */ jsx2("div", { style: grid(300), children: CITIES.map((c, i) => {
    const w = data && data[i] && data[i].current;
    const hourly = data && data[i] && data[i].hourly && data[i].hourly.temperature_2m;
    const [d, ic, g] = cond(w && w.weather_code);
    return /* @__PURE__ */ jsxs2(Card2, { style: { overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxs2("div", { style: { background: `linear-gradient(135deg, ${g[0]}, ${g[1]})`, color: "#fff", padding: "1.2rem" }, children: [
        /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "flex-start" }, children: [
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsx2("div", { style: { fontWeight: 680, fontSize: "1.1rem" }, children: c[0] }),
            /* @__PURE__ */ jsx2("div", { style: { opacity: 0.85, fontSize: ".85rem" }, children: d })
          ] }),
          /* @__PURE__ */ jsx2("div", { style: { marginLeft: "auto", fontSize: "2rem", lineHeight: 1 }, children: ic })
        ] }),
        /* @__PURE__ */ jsx2("div", { style: { fontSize: "3rem", fontWeight: 720, letterSpacing: "-.03em", marginTop: ".3rem" }, children: w ? Math.round(w.temperature_2m) + "\xB0" : "\u2014" })
      ] }),
      /* @__PURE__ */ jsxs2(CardContent2, { style: { paddingTop: "1rem" }, children: [
        /* @__PURE__ */ jsx2(Spark, { data: hourly, up: true, h: 36, fill: true }),
        /* @__PURE__ */ jsxs2("div", { style: { display: "flex", justifyContent: "space-between", marginTop: ".5rem", fontSize: ".8rem", color: "var(--muted-foreground)" }, children: [
          /* @__PURE__ */ jsx2("span", { children: w ? `\u{1F4A7} ${w.relative_humidity_2m}%` : "loading\u2026" }),
          /* @__PURE__ */ jsx2("span", { children: w ? `\u{1F32C} ${Math.round(w.wind_speed_10m)} km/h` : "" }),
          /* @__PURE__ */ jsx2("span", { children: "next 24h" })
        ] })
      ] })
    ] }, c[0]);
  }) }) });
}
export {
  Weather as default
};
