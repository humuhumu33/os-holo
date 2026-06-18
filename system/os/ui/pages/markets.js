// pages/markets.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "holo:table";

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
var col = (n) => n >= 0 ? "oklch(0.72 0.17 162)" : "oklch(0.65 0.21 25)";

// pages/markets.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SYMS = [["BTC", "BTCUSDT"], ["ETH", "ETHUSDT"], ["SOL", "SOLUSDT"], ["BNB", "BNBUSDT"], ["XRP", "XRPUSDT"], ["DOGE", "DOGEUSDT"], ["ADA", "ADAUSDT"], ["LINK", "LINKUSDT"], ["AVAX", "AVAXUSDT"], ["TON", "TONUSDT"]];
var money = (n) => "$" + n.toLocaleString(void 0, { maximumFractionDigits: n < 1 ? 5 : n < 1e3 ? 2 : 0 });
var vol = (n) => n >= 1e9 ? (n / 1e9).toFixed(1) + "B" : (n / 1e6).toFixed(0) + "M";
function Markets() {
  const [m, setM] = useState2({});
  const [hist, setHist] = useState2({});
  const [flash, setFlash] = useState2({});
  useEffect2(() => {
    let on = true;
    const tick = async () => {
      try {
        const syms = encodeURIComponent(JSON.stringify(SYMS.map((s) => s[1])));
        const d = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbols=" + syms, { cache: "no-store" }).then((r) => r.json());
        if (!on) return;
        const o = {}, fl = {};
        for (const x of d) {
          o[x.symbol] = { px: +x.lastPrice, chg: +x.priceChangePercent, vol: +x.quoteVolume };
          fl[x.symbol] = m[x.symbol] && +x.lastPrice !== m[x.symbol].px;
        }
        setM(o);
        setFlash(fl);
        setHist((h) => {
          const n = { ...h };
          for (const x of d) n[x.symbol] = [...h[x.symbol] || [], +x.lastPrice].slice(-48);
          return n;
        });
      } catch {
      }
    };
    tick();
    const id = setInterval(tick, 2e3);
    return () => {
      on = false;
      clearInterval(id);
    };
  }, []);
  return /* @__PURE__ */ jsx2(Shell, { title: "Markets", live: true, sub: Object.keys(m).length ? "Binance \xB7 2s" : "connecting\u2026", children: /* @__PURE__ */ jsx2(Card2, { style: { overflow: "hidden" }, children: /* @__PURE__ */ jsxs2(Table, { children: [
    /* @__PURE__ */ jsx2(TableHeader, { children: /* @__PURE__ */ jsxs2(TableRow, { children: [
      /* @__PURE__ */ jsx2(TableHead, { children: "Pair" }),
      /* @__PURE__ */ jsx2(TableHead, { children: "Last" }),
      /* @__PURE__ */ jsx2(TableHead, { children: "24h" }),
      /* @__PURE__ */ jsx2(TableHead, { style: { width: "160px" }, children: "Trend" }),
      /* @__PURE__ */ jsx2(TableHead, { style: { textAlign: "right" }, children: "Volume" })
    ] }) }),
    /* @__PURE__ */ jsx2(TableBody, { children: SYMS.map(([sym, id]) => {
      const t = m[id];
      const u = t && t.chg >= 0;
      return /* @__PURE__ */ jsxs2(TableRow, { children: [
        /* @__PURE__ */ jsxs2(TableCell, { children: [
          /* @__PURE__ */ jsx2("b", { children: sym }),
          /* @__PURE__ */ jsx2("span", { style: { color: "var(--muted-foreground)" }, children: " / USDT" })
        ] }),
        /* @__PURE__ */ jsx2(TableCell, { className: flash[id] ? "flash" : "", style: { fontVariantNumeric: "tabular-nums", fontWeight: 600, color: flash[id] ? col(u) : "var(--foreground)", transition: "color .9s" }, children: t ? money(t.px) : "\u2026" }),
        /* @__PURE__ */ jsx2(TableCell, { children: /* @__PURE__ */ jsx2(Badge2, { variant: "outline", style: { color: t ? col(t.chg) : "var(--muted-foreground)", borderColor: "currentColor" }, children: t ? (u ? "\u25B2" : "\u25BC") + Math.abs(t.chg).toFixed(2) + "%" : "\u2026" }) }),
        /* @__PURE__ */ jsx2(TableCell, { children: /* @__PURE__ */ jsx2(Spark, { data: hist[id], up: u, h: 28, fill: true }) }),
        /* @__PURE__ */ jsx2(TableCell, { style: { textAlign: "right", color: "var(--muted-foreground)", fontVariantNumeric: "tabular-nums" }, children: t ? "$" + vol(t.vol) : "" })
      ] }, sym);
    }) })
  ] }) }) });
}
export {
  Markets as default
};
