// pages/tech.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2, CardAction as CardAction2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";
import { Tabs, TabsList, TabsTrigger } from "holo:tabs";
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

// pages/tech.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ago = (ms) => {
  const d = (Date.now() - ms) / 1e3;
  return d < 60 ? (d | 0) + "s" : d < 3600 ? (d / 60 | 0) + "m" : d < 86400 ? (d / 3600 | 0) + "h" : (d / 86400 | 0) + "d";
};
var strip = (s) => String(s || "").replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ").trim();
function Tech() {
  const [tab, setTab] = useState2("Hacker News");
  const [hn, setHn] = useState2(null), [tc, setTc] = useState2(null), [gh, setGh] = useState2(null);
  useEffect2(() => {
    let on = true;
    const pull = async () => {
      try {
        const j = await fetch("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=18", { cache: "no-store" }).then((r) => r.json());
        if (on) setHn((j.hits || []).filter((h) => h.title).map((h) => ({ title: h.title, url: h.url || "https://news.ycombinator.com/item?id=" + h.objectID, pts: h.points, t: h.created_at_i * 1e3 })));
      } catch {
      }
      try {
        const p = await fetch("https://techcrunch.com/wp-json/wp/v2/posts?per_page=12", { cache: "no-store" }).then((r) => r.json());
        if (on && Array.isArray(p)) setTc(p.map((x) => ({ title: strip(x.title && x.title.rendered), excerpt: strip(x.excerpt && x.excerpt.rendered).slice(0, 160), url: x.link, t: Date.parse(x.date_gmt + "Z") })));
      } catch {
        if (on) setTc([]);
      }
      try {
        const since = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
        const j = await fetch(`https://api.github.com/search/repositories?q=created:>${since}&sort=stars&order=desc&per_page=15`, { cache: "no-store", headers: { Accept: "application/vnd.github+json" } }).then((r) => r.json());
        if (on) setGh(j.items || []);
      } catch {
      }
    };
    pull();
    const id = setInterval(pull, 12e4);
    return () => {
      on = false;
      clearInterval(id);
    };
  }, []);
  const newest = hn && tc ? [...hn || [], ...tc || []].sort((a, b) => b.t - a.t)[0] : null;
  const TABS = ["Hacker News", "TechCrunch", "Repos"];
  const feedCard = (x, src) => /* @__PURE__ */ jsx2(Card2, { onClick: () => window.open(x.url, "_blank"), style: { cursor: "pointer" }, children: /* @__PURE__ */ jsxs2(CardHeader2, { children: [
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".5rem", alignItems: "center", marginBottom: ".35rem" }, children: [
      /* @__PURE__ */ jsx2(Badge2, { variant: "outline", children: src }),
      /* @__PURE__ */ jsxs2(CardDescription2, { style: { marginLeft: "auto" }, children: [
        ago(x.t),
        " ago",
        x.pts != null ? " \xB7 \u25B2" + x.pts : ""
      ] })
    ] }),
    /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1.05rem", lineHeight: 1.25 }, children: x.title }),
    x.excerpt ? /* @__PURE__ */ jsx2(CardDescription2, { style: { marginTop: ".4rem", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }, children: x.excerpt }) : null
  ] }) }, x.url);
  return /* @__PURE__ */ jsxs2(Shell, { title: "Tech", live: true, sub: "what shipped today", children: [
    newest ? /* @__PURE__ */ jsxs2("div", { onClick: () => window.open(newest.url, "_blank"), style: { display: "flex", alignItems: "center", gap: ".6rem", padding: ".7rem 1rem", marginBottom: "1rem", border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "color-mix(in oklch, var(--primary) 5%, transparent)", cursor: "pointer", overflow: "hidden" }, children: [
      /* @__PURE__ */ jsxs2(Badge2, { style: { flex: "none", gap: ".4rem" }, children: [
        /* @__PURE__ */ jsx2(Dot, {}),
        " Just in"
      ] }),
      /* @__PURE__ */ jsx2("span", { style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: newest.title })
    ] }) : null,
    /* @__PURE__ */ jsx2("div", { style: { marginBottom: "1.2rem" }, children: /* @__PURE__ */ jsx2(Tabs, { value: tab, onValueChange: setTab, children: /* @__PURE__ */ jsx2(TabsList, { children: TABS.map((t) => /* @__PURE__ */ jsx2(TabsTrigger, { value: t, children: t }, t)) }) }) }),
    tab === "Hacker News" ? /* @__PURE__ */ jsx2("div", { style: grid(330), children: (hn || Array.from({ length: 9 })).map((x, i) => x ? feedCard(x, "news.ycombinator.com") : /* @__PURE__ */ jsx2(Card2, { children: /* @__PURE__ */ jsx2(CardHeader2, { children: /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1rem", color: "var(--muted-foreground)" }, children: "Streaming\u2026" }) }) }, i)) }) : null,
    tab === "TechCrunch" ? tc && tc.length ? /* @__PURE__ */ jsx2("div", { style: grid(360), children: tc.map((x) => feedCard(x, "techcrunch.com")) }) : /* @__PURE__ */ jsx2(Card2, { children: /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1rem" }, children: tc ? "TechCrunch feed unavailable here" : "Streaming\u2026" }),
      /* @__PURE__ */ jsx2(CardDescription2, { children: tc ? "blocked by this preview's isolation \u2014 resolves on the live OS via the web proxy" : "fetching techcrunch.com" })
    ] }) }) : null,
    tab === "Repos" ? /* @__PURE__ */ jsx2(Card2, { style: { overflow: "hidden" }, children: /* @__PURE__ */ jsxs2(Table, { children: [
      /* @__PURE__ */ jsx2(TableHeader, { children: /* @__PURE__ */ jsxs2(TableRow, { children: [
        /* @__PURE__ */ jsx2(TableHead, { children: "Repository" }),
        /* @__PURE__ */ jsx2(TableHead, { children: "Language" }),
        /* @__PURE__ */ jsx2(TableHead, { style: { textAlign: "right" }, children: "Stars" })
      ] }) }),
      /* @__PURE__ */ jsx2(TableBody, { children: (gh || Array.from({ length: 8 })).map((r, i) => r ? /* @__PURE__ */ jsxs2(TableRow, { onClick: () => window.open(r.html_url, "_blank"), style: { cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx2(TableCell, { children: /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
          /* @__PURE__ */ jsx2("img", { src: r.owner && r.owner.avatar_url, width: "22", height: "22", style: { borderRadius: "5px" }, alt: "" }),
          /* @__PURE__ */ jsxs2("div", { children: [
            /* @__PURE__ */ jsx2("b", { children: r.name }),
            " ",
            /* @__PURE__ */ jsx2("span", { style: { color: "var(--muted-foreground)" }, children: r.owner && r.owner.login }),
            /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".82rem", maxWidth: "520px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: r.description })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx2(TableCell, { children: r.language ? /* @__PURE__ */ jsx2(Badge2, { variant: "outline", children: r.language }) : "\u2014" }),
        /* @__PURE__ */ jsxs2(TableCell, { style: { textAlign: "right", fontVariantNumeric: "tabular-nums" }, children: [
          "\u2605 ",
          (r.stargazers_count || 0).toLocaleString()
        ] })
      ] }, r.id) : /* @__PURE__ */ jsxs2(TableRow, { children: [
        /* @__PURE__ */ jsx2(TableCell, { children: "\u2026" }),
        /* @__PURE__ */ jsx2(TableCell, {}),
        /* @__PURE__ */ jsx2(TableCell, {})
      ] }, i)) })
    ] }) }) : null
  ] });
}
export {
  Tech as default
};
