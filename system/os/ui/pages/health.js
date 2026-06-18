// pages/health.jsx
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2, CardAction as CardAction2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";
import { Separator as Separator2 } from "holo:separator";

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
function Ring({ value = 0, max = 100, size = 92, color = "oklch(0.72 0.17 162)", label, unit }) {
  const r = (size - 12) / 2, circ = 2 * Math.PI * r, pct = Math.max(0, Math.min(1, value / max));
  const C = size / 2;
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, children: [
    /* @__PURE__ */ jsx("circle", { cx: C, cy: C, r, fill: "none", stroke: "var(--secondary)", strokeWidth: "9" }),
    /* @__PURE__ */ jsx("circle", { cx: C, cy: C, r, fill: "none", stroke: color, strokeWidth: "9", strokeLinecap: "round", strokeDasharray: circ, strokeDashoffset: circ * (1 - pct), transform: `rotate(-90 ${C} ${C})`, style: { transition: "stroke-dashoffset .6s ease" } }),
    /* @__PURE__ */ jsx("text", { x: "50%", y: "48%", textAnchor: "middle", dy: ".35em", fill: "var(--foreground)", style: { font: `680 ${(size * 0.26).toFixed(0)}px ui-sans-serif` }, children: label != null ? label : Math.round(pct * 100) }),
    unit ? /* @__PURE__ */ jsx("text", { x: "50%", y: "68%", textAnchor: "middle", fill: "var(--muted-foreground)", style: { font: `${(size * 0.12).toFixed(0)}px ui-sans-serif` }, children: unit }) : null
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

// pages/health.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var CITIES = [["San Francisco", 37.77, -122.42], ["New York", 40.71, -74.01], ["London", 51.51, -0.13], ["Tokyo", 35.68, 139.69], ["Delhi", 28.61, 77.21], ["Beijing", 39.9, 116.4], ["Paris", 48.85, 2.35], ["Sydney", -33.87, 151.21]];
var band = (v) => v == null ? ["\u2014", "var(--muted-foreground)"] : v <= 20 ? ["Good", "oklch(0.72 0.17 162)"] : v <= 40 ? ["Fair", "oklch(0.78 0.15 130)"] : v <= 60 ? ["Moderate", "oklch(0.82 0.16 90)"] : v <= 80 ? ["Poor", "oklch(0.72 0.18 45)"] : ["Very poor", "oklch(0.65 0.21 25)"];
var uvBand = (u) => u == null ? "\u2014" : u < 3 ? "Low" : u < 6 ? "Moderate" : u < 8 ? "High" : u < 11 ? "Very high" : "Extreme";
function Health() {
  const data = useFeed(async () => {
    const lat = CITIES.map((c) => c[1]).join(","), lon = CITIES.map((c) => c[2]).join(",");
    const j = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi,pm2_5,pm10,uv_index`, { cache: "no-store" }).then((r) => r.json());
    return Array.isArray(j) ? j : [j];
  }, 3e5);
  return /* @__PURE__ */ jsx2(Shell, { title: "Health", live: true, sub: "Air quality \xB7 UV \xB7 live", children: /* @__PURE__ */ jsx2("div", { style: grid(280), children: CITIES.map((c, i) => {
    const a = data && data[i] && data[i].current;
    const v = a && a.european_aqi;
    const [label, color] = band(v);
    const uv = a && a.uv_index;
    return /* @__PURE__ */ jsxs2(Card2, { children: [
      /* @__PURE__ */ jsxs2(CardHeader2, { children: [
        /* @__PURE__ */ jsx2(CardTitle2, { children: c[0] }),
        /* @__PURE__ */ jsx2(CardDescription2, { children: "European AQI" }),
        /* @__PURE__ */ jsx2(CardAction2, { children: /* @__PURE__ */ jsx2(Badge2, { style: { background: color, color: "#08120c", border: 0 }, children: label }) })
      ] }),
      /* @__PURE__ */ jsxs2(CardContent2, { style: { display: "flex", alignItems: "center", gap: "1.2rem" }, children: [
        /* @__PURE__ */ jsx2(Ring, { value: v == null ? 0 : v, max: 100, color, label: v == null ? "\u2014" : Math.round(v), unit: "AQI" }),
        /* @__PURE__ */ jsxs2("div", { style: { flex: 1 }, children: [
          /* @__PURE__ */ jsxs2("div", { style: { display: "flex", justifyContent: "space-between", fontSize: ".85rem", padding: ".25rem 0" }, children: [
            /* @__PURE__ */ jsx2("span", { style: { color: "var(--muted-foreground)" }, children: "UV index" }),
            /* @__PURE__ */ jsx2("b", { children: uv != null ? uv.toFixed(1) + " \xB7 " + uvBand(uv) : "\u2014" })
          ] }),
          /* @__PURE__ */ jsx2(Separator2, {}),
          /* @__PURE__ */ jsxs2("div", { style: { display: "flex", justifyContent: "space-between", fontSize: ".85rem", padding: ".25rem 0" }, children: [
            /* @__PURE__ */ jsx2("span", { style: { color: "var(--muted-foreground)" }, children: "PM2.5" }),
            /* @__PURE__ */ jsx2("b", { children: a ? a.pm2_5 : "\u2014" })
          ] }),
          /* @__PURE__ */ jsxs2("div", { style: { display: "flex", justifyContent: "space-between", fontSize: ".85rem", padding: ".25rem 0" }, children: [
            /* @__PURE__ */ jsx2("span", { style: { color: "var(--muted-foreground)" }, children: "PM10" }),
            /* @__PURE__ */ jsx2("b", { children: a ? a.pm10 : "\u2014" })
          ] })
        ] })
      ] })
    ] }, c[0]);
  }) }) });
}
export {
  Health as default
};
