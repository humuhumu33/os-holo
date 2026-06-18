// pages/finance.jsx
import { useState as useState2 } from "react";
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2, CardAction as CardAction2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";
import { Input } from "holo:input";
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
var col = (n) => n >= 0 ? "oklch(0.72 0.17 162)" : "oklch(0.65 0.21 25)";

// pages/finance.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var FIATS = ["EUR", "GBP", "JPY", "CNY", "INR"];
var cap = (n) => n >= 1e12 ? "$" + (n / 1e12).toFixed(2) + "T" : n >= 1e9 ? "$" + (n / 1e9).toFixed(1) + "B" : "$" + (n / 1e6).toFixed(0) + "M";
function Finance() {
  const [amt, setAmt] = useState2(100);
  const fx = useFeed(() => fetch("https://api.frankfurter.app/latest?from=USD&to=" + FIATS.join(","), { cache: "no-store" }).then((r) => r.json()).then((j) => j.rates), 36e5);
  const fng = useFeed(async () => {
    try {
      const j = await fetch("https://api.alternative.me/fng/", { cache: "no-store" }).then((r) => r.json());
      return { v: +j.data[0].value, label: j.data[0].value_classification };
    } catch {
      return { v: 50, label: "Neutral" };
    }
  }, 6e5) || { v: 50, label: "\u2014" };
  const coins = useFeed(() => fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=8&page=1&price_change_percentage=24h&sparkline=true", { cache: "no-store" }).then((r) => r.json()), 6e4);
  const fngColor = fng.v < 25 ? "oklch(0.65 0.21 25)" : fng.v < 45 ? "oklch(0.72 0.18 45)" : fng.v < 55 ? "oklch(0.8 0.14 95)" : fng.v < 75 ? "oklch(0.78 0.16 140)" : "oklch(0.72 0.17 162)";
  return /* @__PURE__ */ jsxs2(Shell, { title: "Finance", live: true, sub: "FX \xB7 crypto \xB7 sentiment", children: [
    /* @__PURE__ */ jsxs2("div", { style: { display: "grid", gridTemplateColumns: "minmax(0,1.618fr) minmax(0,1fr)", gap: "1.618rem", marginBottom: "1.618rem" }, children: [
      /* @__PURE__ */ jsxs2(Card2, { children: [
        /* @__PURE__ */ jsxs2(CardHeader2, { children: [
          /* @__PURE__ */ jsx2(CardTitle2, { children: "Convert" }),
          /* @__PURE__ */ jsx2(CardDescription2, { children: "USD \u2192 world \xB7 live mid-market rate" })
        ] }),
        /* @__PURE__ */ jsxs2(CardContent2, { children: [
          /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".6rem", marginBottom: "1rem" }, children: [
            /* @__PURE__ */ jsx2("span", { style: { fontSize: "1.4rem", fontWeight: 680 }, children: "$" }),
            /* @__PURE__ */ jsx2(Input, { type: "number", value: amt, onChange: (e) => setAmt(+e.target.value || 0), style: { fontSize: "1.4rem", height: "52px", maxWidth: "220px" } }),
            /* @__PURE__ */ jsx2("span", { style: { color: "var(--muted-foreground)" }, children: "USD" })
          ] }),
          /* @__PURE__ */ jsx2("div", { style: grid(150), children: FIATS.map((f) => /* @__PURE__ */ jsxs2("div", { style: { padding: ".7rem .9rem", border: "1px solid var(--border)", borderRadius: "var(--radius)" }, children: [
            /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".75rem" }, children: f }),
            /* @__PURE__ */ jsx2("div", { style: { fontSize: "1.25rem", fontWeight: 680, fontVariantNumeric: "tabular-nums" }, children: fx ? (amt * fx[f]).toLocaleString(void 0, { maximumFractionDigits: 2 }) : "\u2014" })
          ] }, f)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs2(Card2, { children: [
        /* @__PURE__ */ jsxs2(CardHeader2, { children: [
          /* @__PURE__ */ jsx2(CardTitle2, { children: "Fear & Greed" }),
          /* @__PURE__ */ jsx2(CardDescription2, { children: "market sentiment now" })
        ] }),
        /* @__PURE__ */ jsxs2(CardContent2, { style: { display: "flex", alignItems: "center", gap: "1.2rem" }, children: [
          /* @__PURE__ */ jsx2(Ring, { value: fng.v, color: fngColor, label: fng.v }),
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsx2("div", { style: { fontSize: "1.4rem", fontWeight: 680, color: fngColor }, children: fng.label }),
            /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".85rem" }, children: "0 fear \xB7 100 greed" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx2("h3", { style: { margin: "0 0 .8rem", fontSize: "1.2rem", fontWeight: 700 }, children: "Top assets \xB7 7-day trend" }),
    /* @__PURE__ */ jsx2("div", { style: grid(260), children: (coins || Array.from({ length: 8 })).map((c, i) => c ? /* @__PURE__ */ jsxs2(Card2, { children: [
      /* @__PURE__ */ jsx2(CardHeader2, { children: /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
        /* @__PURE__ */ jsx2("img", { src: c.image, width: "26", height: "26", style: { borderRadius: "50%" }, alt: "" }),
        /* @__PURE__ */ jsx2("div", { style: { minWidth: 0 }, children: /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: ".95rem" }, children: (c.symbol || "").toUpperCase() }) }),
        /* @__PURE__ */ jsx2(CardAction2, { children: /* @__PURE__ */ jsx2(Badge2, { variant: "outline", style: { color: col(c.price_change_percentage_24h), borderColor: "currentColor" }, children: (c.price_change_percentage_24h >= 0 ? "\u25B2" : "\u25BC") + Math.abs(c.price_change_percentage_24h || 0).toFixed(1) + "%" }) })
      ] }) }),
      /* @__PURE__ */ jsxs2(CardContent2, { children: [
        /* @__PURE__ */ jsx2(Spark, { data: c.sparkline_in_7d && c.sparkline_in_7d.price, up: c.price_change_percentage_24h >= 0, fill: true, h: 40 }),
        /* @__PURE__ */ jsxs2("div", { style: { display: "flex", justifyContent: "space-between", marginTop: ".5rem" }, children: [
          /* @__PURE__ */ jsxs2("span", { style: { fontWeight: 680, fontVariantNumeric: "tabular-nums" }, children: [
            "$",
            (c.current_price || 0).toLocaleString()
          ] }),
          /* @__PURE__ */ jsx2("span", { style: { color: "var(--muted-foreground)", fontSize: ".8rem" }, children: cap(c.market_cap || 0) })
        ] })
      ] })
    ] }, c.id) : /* @__PURE__ */ jsx2(Card2, { children: /* @__PURE__ */ jsx2(CardHeader2, { children: /* @__PURE__ */ jsx2(CardTitle2, { style: { color: "var(--muted-foreground)" }, children: "\u2026" }) }) }, i)) })
  ] });
}
export {
  Finance as default
};
