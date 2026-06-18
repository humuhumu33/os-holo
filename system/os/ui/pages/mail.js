// pages/mail.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { Avatar, AvatarFallback } from "holo:avatar";
import { Badge as Badge2 } from "holo:badge";
import { Input } from "holo:input";
import { Separator as Separator2 } from "holo:separator";
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

// pages/mail.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SEED = [
  ["Ada Lovelace", "The Analytical Engine weaves algebraic patterns", "2m", true, "Focused"],
  ["Alan Turing", "Re: on computable numbers \u2014 a thought", "18m", true, "Focused"],
  ["Grace Hopper", "Compiler draft attached, nanoseconds enclosed", "1h", false, "Inbox"],
  ["Katherine Johnson", "Trajectory figures double-checked", "3h", false, "Inbox"],
  ["Vint Cerf", "Packets arriving in order, mostly", "yesterday", false, "Inbox"],
  ["Radia Perlman", "Spanning tree, no loops this time", "yesterday", false, "Archive"],
  ["Margaret Hamilton", "Priority display logic shipped", "2d", false, "Sent"]
];
var FOLDERS = ["Focused", "Inbox", "Sent", "Archive"];
function Mail() {
  const [folder, setFolder] = useState2("Focused");
  const [q, setQ] = useState2("");
  const [threads, setThreads] = useState2(SEED);
  useEffect2(() => {
    const NEW = [["Tim Berners-Lee", "One small link for a document\u2026", "now"], ["Hedy Lamarr", "Frequency hopping, re: your call", "now"], ["Claude Shannon", "Information, quantified (attachment)", "now"]];
    let k = 0;
    const id = setInterval(() => {
      const n = NEW[k % NEW.length];
      k++;
      setThreads((t) => [[n[0], n[1], "now", true, "Focused"], ...t].slice(0, 12));
    }, 15e3);
    return () => clearInterval(id);
  }, []);
  const unread = threads.filter((t) => t[3]).length;
  const list = threads.filter((t) => (folder === "Inbox" ? t[4] !== "Sent" && t[4] !== "Archive" : t[4] === folder) && (!q || (t[0] + t[1]).toLowerCase().includes(q.toLowerCase())));
  return /* @__PURE__ */ jsx2(Shell, { title: "Mail", sub: unread + " unread", live: true, children: /* @__PURE__ */ jsxs2("div", { style: { maxWidth: "760px" }, children: [
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".6rem", alignItems: "center", marginBottom: "1rem" }, children: [
      /* @__PURE__ */ jsx2(Tabs, { value: folder, onValueChange: setFolder, children: /* @__PURE__ */ jsx2(TabsList, { children: FOLDERS.map((f) => /* @__PURE__ */ jsx2(TabsTrigger, { value: f, children: f }, f)) }) }),
      /* @__PURE__ */ jsx2(Input, { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search mail", style: { marginLeft: "auto", maxWidth: "240px", height: "38px" } })
    ] }),
    list.length ? list.map((t, i) => [
      i ? /* @__PURE__ */ jsx2(Separator2, {}, "s" + i) : null,
      /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".8rem", alignItems: "center", padding: ".8rem .5rem", cursor: "pointer" }, children: [
        /* @__PURE__ */ jsx2(Avatar, { children: /* @__PURE__ */ jsx2(AvatarFallback, { children: t[0].split(" ").map((w) => w[0]).join("") }) }),
        /* @__PURE__ */ jsxs2("div", { style: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ jsx2("div", { style: { fontWeight: t[3] ? 650 : 450 }, children: t[0] }),
          /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".9rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: t[1] })
        ] }),
        /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".8rem", display: "flex", alignItems: "center", gap: ".5rem", flex: "none" }, children: t[2] === "now" ? /* @__PURE__ */ jsxs2(Badge2, { style: { gap: ".35rem" }, children: [
          /* @__PURE__ */ jsx2(Dot, {}),
          " new"
        ] }) : t[2] })
      ] }, i)
    ]) : /* @__PURE__ */ jsxs2("div", { style: { color: "var(--muted-foreground)", padding: "2rem .5rem" }, children: [
      "Nothing in ",
      folder.toLowerCase(),
      "."
    ] })
  ] }) });
}
export {
  Mail as default
};
