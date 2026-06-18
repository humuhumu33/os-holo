// pages/news.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardDescription as CardDescription2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";
import { Tabs, TabsList, TabsTrigger } from "holo:tabs";

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

// pages/news.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TABS = [["Top", "search?tags=front_page"], ["New", "search_by_date?tags=story"], ["Ask", "search?tags=ask_hn"], ["Show", "search?tags=show_hn"]];
var ago = (s) => {
  const d = Date.now() / 1e3 - s;
  return d < 60 ? (d | 0) + "s" : d < 3600 ? (d / 60 | 0) + "m" : d < 86400 ? (d / 3600 | 0) + "h" : (d / 86400 | 0) + "d";
};
var host = (u) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return "news.ycombinator.com";
  }
};
function News() {
  const [tab, setTab] = useState2("Top");
  const [hits, setHits] = useState2(null);
  useEffect2(() => {
    let on = true;
    const q = (TABS.find((t) => t[0] === tab) || TABS[0])[1];
    const run = async () => {
      try {
        const j = await fetch(`https://hn.algolia.com/api/v1/${q}&hitsPerPage=20`, { cache: "no-store" }).then((r) => r.json());
        if (on) setHits((j.hits || []).filter((h) => h.title));
      } catch {
      }
    };
    setHits(null);
    run();
    const id = setInterval(run, 3e4);
    return () => {
      on = false;
      clearInterval(id);
    };
  }, [tab]);
  const list = hits || Array.from({ length: 9 });
  const breaking = hits && hits[0];
  return /* @__PURE__ */ jsxs2(Shell, { title: "News", live: true, sub: "Hacker News", children: [
    breaking ? /* @__PURE__ */ jsxs2("div", { onClick: () => window.open(breaking.url || "https://news.ycombinator.com/item?id=" + breaking.objectID, "_blank"), style: { display: "flex", alignItems: "center", gap: ".6rem", padding: ".7rem 1rem", marginBottom: "1rem", border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "color-mix(in oklch, var(--primary) 5%, transparent)", cursor: "pointer", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxs2(Badge2, { style: { flex: "none", gap: ".4rem" }, children: [
        /* @__PURE__ */ jsx2(Dot, {}),
        " Breaking"
      ] }),
      /* @__PURE__ */ jsx2("span", { style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: breaking.title }),
      /* @__PURE__ */ jsxs2("span", { style: { marginLeft: "auto", flex: "none", color: "var(--muted-foreground)", fontSize: ".8rem" }, children: [
        ago(breaking.created_at_i),
        " ago"
      ] })
    ] }) : null,
    /* @__PURE__ */ jsx2("div", { style: { marginBottom: "1.2rem" }, children: /* @__PURE__ */ jsx2(Tabs, { value: tab, onValueChange: setTab, children: /* @__PURE__ */ jsx2(TabsList, { children: TABS.map((t) => /* @__PURE__ */ jsx2(TabsTrigger, { value: t[0], children: t[0] }, t[0])) }) }) }),
    /* @__PURE__ */ jsx2("div", { style: grid(330), children: list.map((h, i) => h ? /* @__PURE__ */ jsx2(Card2, { onClick: () => window.open(h.url || "https://news.ycombinator.com/item?id=" + h.objectID, "_blank"), style: { cursor: "pointer" }, children: /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".5rem", alignItems: "center", marginBottom: ".35rem" }, children: [
        /* @__PURE__ */ jsx2(Badge2, { variant: "outline", children: host(h.url) }),
        /* @__PURE__ */ jsxs2(CardDescription2, { style: { marginLeft: "auto" }, children: [
          ago(h.created_at_i),
          " ago \xB7 \u25B2",
          h.points
        ] })
      ] }),
      /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1.05rem", lineHeight: 1.25 }, children: h.title })
    ] }) }, h.objectID) : /* @__PURE__ */ jsx2(Card2, { children: /* @__PURE__ */ jsx2(CardHeader2, { children: /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1.05rem", color: "var(--muted-foreground)" }, children: "Streaming\u2026" }) }) }, i)) })
  ] });
}
export {
  News as default
};
