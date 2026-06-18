// pages/travel.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2 } from "holo:card";
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

// pages/travel.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var DEST = [
  ["Japan", "Tokyo", "\u{1F1EF}\u{1F1F5}", "Apr \xB7 Nov", 35.68, 139.69],
  ["Italy", "Rome", "\u{1F1EE}\u{1F1F9}", "May \xB7 Sep", 41.9, 12.5],
  ["Iceland", "Reykjav\xEDk", "\u{1F1EE}\u{1F1F8}", "Jun \xB7 Aug", 64.15, -21.94],
  ["Morocco", "Marrakesh", "\u{1F1F2}\u{1F1E6}", "Mar \xB7 May", 31.63, -7.99],
  ["Peru", "Lima", "\u{1F1F5}\u{1F1EA}", "May \xB7 Sep", -12.05, -77.04],
  ["Thailand", "Bangkok", "\u{1F1F9}\u{1F1ED}", "Nov \xB7 Feb", 13.76, 100.5],
  ["Portugal", "Lisbon", "\u{1F1F5}\u{1F1F9}", "Apr \xB7 Oct", 38.72, -9.14],
  ["Greece", "Athens", "\u{1F1EC}\u{1F1F7}", "May \xB7 Oct", 37.98, 23.73],
  ["Norway", "Oslo", "\u{1F1F3}\u{1F1F4}", "Jun \xB7 Aug", 59.91, 10.75],
  ["New Zealand", "Wellington", "\u{1F1F3}\u{1F1FF}", "Dec \xB7 Feb", -41.29, 174.78]
];
var clock = (offSec) => {
  const t = new Date(Date.now() + offSec * 1e3);
  const h = t.getUTCHours(), m = t.getUTCMinutes();
  return String(h).padStart(2, "0") + ":" + String(m).padStart(2, "0");
};
var daypart = (offSec) => {
  const h = new Date(Date.now() + offSec * 1e3).getUTCHours();
  return h < 6 ? ["night", "\u{1F319}"] : h < 12 ? ["morning", "\u{1F305}"] : h < 18 ? ["afternoon", "\u2600"] : ["evening", "\u{1F306}"];
};
function Travel() {
  const data = useFeed(async () => {
    const lat = DEST.map((d) => d[4]).join(","), lon = DEST.map((d) => d[5]).join(",");
    const j = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`, { cache: "no-store" }).then((r) => r.json());
    return Array.isArray(j) ? j : [j];
  }, 6e5);
  const [, tick] = useState2(0);
  useEffect2(() => {
    const id = setInterval(() => tick((n) => n + 1), 1e3);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsx2(Shell, { title: "Travel", live: true, sub: "live local time \xB7 weather", children: /* @__PURE__ */ jsx2("div", { style: grid(280), children: DEST.map((d, i) => {
    const loc = data && data[i];
    const off = loc ? loc.utc_offset_seconds : null;
    const t = loc && loc.current;
    const [part, pic] = off != null ? daypart(off) : ["\u2014", "\u2022"];
    return /* @__PURE__ */ jsxs2(Card2, { style: { overflow: "hidden" }, children: [
      /* @__PURE__ */ jsx2("div", { style: { aspectRatio: "1.9", display: "grid", placeItems: "center", fontSize: "3.4rem", background: "linear-gradient(135deg, oklch(0.3 0.08 250), oklch(0.22 0.06 280))" }, children: d[2] }),
      /* @__PURE__ */ jsxs2(CardHeader2, { children: [
        /* @__PURE__ */ jsx2(CardTitle2, { children: d[0] }),
        /* @__PURE__ */ jsxs2(CardDescription2, { children: [
          d[1],
          " \xB7 best ",
          d[3]
        ] })
      ] }),
      /* @__PURE__ */ jsx2(CardContent2, { children: /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "baseline", gap: ".5rem" }, children: [
        /* @__PURE__ */ jsx2("span", { style: { fontSize: "1.8rem", fontWeight: 700, fontVariantNumeric: "tabular-nums", letterSpacing: "-.02em" }, children: off != null ? clock(off) : "\u2014" }),
        /* @__PURE__ */ jsxs2("span", { style: { color: "var(--muted-foreground)", fontSize: ".85rem" }, children: [
          pic,
          " ",
          part
        ] }),
        /* @__PURE__ */ jsx2(Badge2, { variant: "secondary", style: { marginLeft: "auto" }, children: t ? Math.round(t.temperature_2m) + "\xB0 now" : "\u2026" })
      ] }) })
    ] }, d[0]);
  }) }) });
}
export {
  Travel as default
};
