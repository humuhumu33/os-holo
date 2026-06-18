// pages/spaces.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
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

// pages/spaces.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SPACES = [
  ["Holo Q", "A real assistant that thinks entirely in your browser", "\u2726", "q", "Productivity", 1],
  ["Holo Wallet", "Self-custodial, multi-chain. One seed, every chain", "\u25A6", "wallet", "Finance", 1],
  ["Holo Browser", "A browser where every page is verifiable content", "\u25A2", "browser", "Communication", 1],
  ["Holo Code", "An agentic coding partner that runs on your machine", "\u27E8\u27E9", "code", "Developer", 1],
  ["Holo Trade", "A self-custodial trading terminal, key-less", "\u2197", "trade", "Finance", 1],
  ["Holo Jupyter", "Python notebooks with a bundled kernel, in-browser", "\u2211", "jypyter", "Developer", 1],
  ["Holo Files", "One window onto the whole object universe", "\u25A3", "files", "Utilities", 0],
  ["Holo Music", "A content-addressed music library", "\u266A", "music", "Multimedia", 0],
  ["Holo IPFS", "Browse the entire IPFS space as easily as the web", "\u25C8", "ipfs", "Communication", 0]
];
function Spaces() {
  const [people, setPeople] = useState2(() => SPACES.map((s) => s[5] ? 2 + s[3].length % 5 : 0));
  useEffect2(() => {
    const id = setInterval(() => setPeople((p) => p.map((n, i) => SPACES[i][5] ? Math.max(1, n + (Math.sin(Date.now() / 1500 + i) > 0.6 ? 1 : Math.sin(Date.now() / 1700 + i) < -0.7 ? -1 : 0)) : 0)), 2500);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsx2(Shell, { title: "Spaces", live: true, sub: "rooms you can jump into", children: /* @__PURE__ */ jsx2("div", { style: grid(300), children: SPACES.map((s, i) => /* @__PURE__ */ jsxs2(Card2, { onClick: () => location.href = "/usr/share/frame/holospace.html?app=" + s[3], style: { cursor: "pointer" }, children: [
    /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsx2(CardAction2, { style: { fontSize: "1.5rem", width: "46px", height: "46px", borderRadius: "12px", display: "grid", placeItems: "center", background: "var(--secondary)" }, children: s[2] }),
      /* @__PURE__ */ jsx2(CardTitle2, { children: s[0] }),
      /* @__PURE__ */ jsx2(CardDescription2, { children: s[1] })
    ] }),
    /* @__PURE__ */ jsxs2(CardContent2, { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
      /* @__PURE__ */ jsx2(Badge2, { variant: "outline", children: s[4] }),
      people[i] > 0 ? /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { marginLeft: "auto", gap: ".4rem" }, children: [
        /* @__PURE__ */ jsx2("span", { style: { width: "7px", height: "7px", borderRadius: "50%", background: "oklch(0.72 0.17 162)", display: "inline-block" } }),
        people[i],
        " active now"
      ] }) : /* @__PURE__ */ jsx2(Badge2, { variant: "outline", style: { marginLeft: "auto", color: "var(--muted-foreground)" }, children: "resume" })
    ] })
  ] }, s[3])) }) });
}
export {
  Spaces as default
};
