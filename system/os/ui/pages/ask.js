// pages/ask.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2, CardAction as CardAction2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";
import { Input } from "holo:input";
import { Button as Button2 } from "holo:button";

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
var GRAPH = "holo:graph";
var getGraph = () => {
  try {
    return JSON.parse(localStorage.getItem(GRAPH) || "[]");
  } catch {
    return [];
  }
};
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
var Q_CORPUS = [
  { id: "open-web", title: "One door to every internet", source: "Hologram", text: "A single surface can resolve a web URL, an IPFS object, an on-chain address, a question, or a video into the same verified primitive. Nothing is trusted because of where it came from \u2014 only because its bytes hash to what they claim." },
  { id: "content-address", title: "Content addressing", source: "First principles", text: "A content address is the hash of the bytes themselves. The same content always has the same address, anywhere. To verify a download you just re-hash it: if it matches, it is genuine; if it does not, it is refused. Location stops mattering \u2014 identity is the content." },
  { id: "verify", title: "Verify by re-deriving", source: "First principles", text: "Instead of trusting a server, you re-derive the fingerprint of what you received and compare. A mismatch means tampering or corruption, so the object is not shown. Every part of a page is provably the real, untampered version before it paints." },
  { id: "holography", title: "Holography", source: "Wikipedia", text: "Holography is a technique that records a light field and later reconstructs it, best known for producing three-dimensional images. Each fragment of a hologram contains information about the whole scene, so the image can be rebuilt from a piece of the record." },
  { id: "hash", title: "Cryptographic hashing", source: "Cryptography", text: "A cryptographic hash maps any input to a fixed-size fingerprint. It is one-way and collision-resistant, so you cannot feasibly find two inputs with the same hash. SHA-256 is widely used to address and verify content by its digest." },
  { id: "ipfs", title: "IPFS and content identifiers", source: "Web", text: "The InterPlanetary File System addresses files by their content identifier rather than a server location. Any peer holding the bytes can serve them, and the receiver verifies them against the identifier. Popular blocks are served from whoever is nearest." },
  { id: "ethereum", title: "Ethereum and ENS", source: "Web3", text: "Ethereum is a programmable blockchain whose state anyone can read and verify. The Ethereum Name Service maps a human name like a .eth handle to an address and profile, so identities resolve without a central registrar." },
  { id: "privacy", title: "Privacy by construction", source: "Sovereignty", text: "Sovereign software keeps your data on your device by default. When something must leave, the purpose is stated and visible. Your history and identity are yours; there is no account to mine and no tracker following you between sites." },
  { id: "attention", title: "Protecting attention", source: "Calm design", text: "Calm software respects attention: it is finite, honest, and free of dark patterns. No infinite feeds engineered to trap you, no urgency manufactured to keep you scrolling. The interface does its job and gets out of the way." },
  { id: "recall", title: "Model-free recall", source: "On-device Q", text: "Recall can answer a question without a language model by ranking a local corpus against the query and extracting the most relevant passages, each with its source. It runs entirely on the device, cites real objects, and sends nothing to a server." },
  { id: "golden", title: "The golden ratio", source: "Design", text: "The golden ratio, about 1.618, appears when a layout's proportions feel naturally balanced. Using it for column widths, type scale, and spacing gives a composition quiet harmony without obvious geometry." },
  { id: "offline", title: "Works offline", source: "Sovereignty", text: "Because objects are addressed by content and cached on the device, a page seen once can open again with no network at all. Verified bytes resolve from local storage, so the experience survives airplane mode." }
];
var STOPQ = new Set("the a an of to in is are and or for on with by it its as at be this that from how what why who which can you your".split(" "));
var tokq = (s) => String(s).toLowerCase().match(/[a-z0-9]+/g)?.filter((w) => w.length > 1 && !STOPQ.has(w)) || [];
function qIndex(docs) {
  const D = docs.map((d) => ({ ...d, toks: tokq(d.title + " " + d.text) }));
  const DF = {};
  for (const d of D) for (const t of new Set(d.toks)) DF[t] = (DF[t] || 0) + 1;
  const N = D.length || 1, AVG = D.reduce((a, d) => a + d.toks.length, 0) / N || 1;
  return { D, DF, N, AVG };
}
function qRank(q, idx) {
  const k1 = 1.5, b = 0.75, qt = [...new Set(tokq(q))];
  return idx.D.map((d) => {
    let s = 0;
    const dl = d.toks.length;
    for (const t of qt) {
      const f = d.toks.filter((x) => x === t).length;
      if (!f) continue;
      const idf = Math.log(1 + (idx.N - idx.DF[t] + 0.5) / (idx.DF[t] + 0.5));
      s += idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * dl / idx.AVG));
    }
    return { d, s };
  }).filter((x) => x.s > 0).sort((a, b2) => b2.s - a.s);
}
function qAnswer(q, ranked) {
  const qt = new Set(tokq(q));
  const sents = [];
  for (const { d } of ranked.slice(0, 3)) for (const sent of d.text.match(/[^.!?]+[.!?]/g) || [d.text]) {
    const hit = tokq(sent).filter((w) => qt.has(w)).length;
    if (hit) sents.push({ sent: sent.trim(), hit });
  }
  return sents.sort((a, b) => b.hit - a.hit).slice(0, 2).map((x) => x.sent).join(" ");
}
function askLocal(q) {
  const personal = getGraph().filter((g) => g.text || g.title).map((g) => ({ id: "u:" + g.key, title: g.title, text: g.text || g.title, source: g.source || "your activity", personal: true }));
  const ranked = qRank(q, qIndex(Q_CORPUS.concat(personal)));
  return { ans: qAnswer(q, ranked), hits: ranked.slice(0, 4), mem: personal.length };
}
var qHighlight = (text, q) => {
  const qt = new Set(tokq(q));
  return String(text).split(/(\b)/).map((w, i) => qt.has(w.toLowerCase()) ? /* @__PURE__ */ jsx("mark", { style: { background: "color-mix(in oklch, var(--primary) 28%, transparent)", color: "inherit", borderRadius: "3px", padding: "0 .1em" }, children: w }, i) : w);
};
var _idxP = null;
async function getIndex() {
  if (_idxP) return _idxP;
  const O = typeof location !== "undefined" && location.origin || "";
  _idxP = (async () => {
    const idx = await import(O + "/sbin/holo-index.mjs");
    const car = new Uint8Array(await (await fetch(O + "/usr/share/frame/holo-index.car", { cache: "force-cache" })).arrayBuffer());
    const loaded = await idx.loadIndexFromCar(car, { embedder: null });
    return { adapter: idx.indexAdapter(loaded), docs: loaded.docs };
  })().catch(() => {
    _idxP = null;
    return null;
  });
  return _idxP;
}
async function askIndex(q) {
  const ix = await getIndex();
  if (!ix) return null;
  let hits;
  try {
    hits = await ix.adapter.search(q, { limit: 5 });
  } catch {
    return null;
  }
  const docs = hits.map((h) => {
    const d = ix.docs.get(h.cid) || {};
    return { id: h.cid, title: h.title, text: d.text || "", source: "verified index", authority: h.authority };
  }).filter((d) => d.text);
  if (!docs.length) return null;
  return { ans: qAnswer(q, docs.map((d) => ({ d }))), hits: docs.slice(0, 4) };
}
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

// pages/ask.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var SUGGEST = ["What is content addressing?", "How does verification work?", "Why does privacy matter here?", "What is holography?"];
function Ask() {
  const [q, setQ] = useState2("");
  const [res, setRes] = useState2(null);
  const [mem] = useState2(() => getGraph().length);
  const [idx, setIdx] = useState2(void 0);
  const ask = (v) => {
    v = (v || "").trim();
    if (!v) return;
    setRes({ q: v, ...askLocal(v) });
    setIdx(void 0);
    askIndex(v).then(setIdx);
  };
  return /* @__PURE__ */ jsxs2(Shell, { children: [
    /* @__PURE__ */ jsxs2("div", { style: { maxWidth: "780px", margin: "min(7vh,64px) auto 2rem", textAlign: "center" }, children: [
      /* @__PURE__ */ jsx2("h1", { style: { margin: "0 0 .4rem", fontSize: "clamp(1.9rem,3.6vw,2.8rem)", fontWeight: 760, letterSpacing: "-.03em" }, children: "Ask anything." }),
      /* @__PURE__ */ jsx2("p", { style: { margin: "0 0 1.4rem", color: "var(--muted-foreground)", fontSize: "1.05rem" }, children: "Answered on your device, from verified sources. No model, no server \u2014 your question never leaves." }),
      /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".5rem" }, children: [
        /* @__PURE__ */ jsx2(Input, { value: q, autoFocus: true, onChange: (e) => setQ(e.target.value), onKeyDown: (e) => {
          if (e.key === "Enter") ask(q);
        }, placeholder: "Ask a question\u2026", style: { height: "56px", borderRadius: "999px", paddingInline: "1.4rem", fontSize: "1.1rem" } }),
        /* @__PURE__ */ jsx2(Button2, { onClick: () => ask(q), style: { height: "56px", borderRadius: "999px", paddingInline: "1.5rem", fontSize: "1.05rem" }, children: "Ask \u2192" })
      ] }),
      /* @__PURE__ */ jsx2("div", { style: { display: "flex", gap: ".4rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }, children: SUGGEST.map((s) => /* @__PURE__ */ jsx2(Badge2, { variant: "outline", style: { cursor: "pointer" }, onClick: () => {
        setQ(s);
        ask(s);
      }, children: s }, s)) }),
      /* @__PURE__ */ jsxs2("div", { style: { marginTop: ".9rem", color: "var(--muted-foreground)", fontSize: ".82rem" }, children: [
        "\u{1F512} 0 bytes sent \xB7 runs entirely on this device",
        mem ? ` \xB7 recalling over ${mem} thing${mem > 1 ? "s" : ""} you've explored` : " \xB7 works offline"
      ] })
    ] }),
    res ? /* @__PURE__ */ jsxs2("div", { style: { maxWidth: "780px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.2rem" }, children: [
      /* @__PURE__ */ jsxs2(Card2, { children: [
        /* @__PURE__ */ jsxs2(CardHeader2, { children: [
          /* @__PURE__ */ jsxs2(CardTitle2, { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
            "Answer ",
            /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".4rem" }, children: [
              /* @__PURE__ */ jsx2(Dot, {}),
              " ",
              idx ? "verified index" : "on-device"
            ] })
          ] }),
          /* @__PURE__ */ jsxs2(CardDescription2, { children: [
            "\u201C",
            res.q,
            "\u201D"
          ] })
        ] }),
        /* @__PURE__ */ jsx2(CardContent2, { style: { fontSize: "1.1rem", lineHeight: 1.6 }, children: (() => {
          const a = idx && idx.ans || res.ans;
          return a ? qHighlight(a, res.q) : "No verified source on your device covers that yet \u2014 try a related question.";
        })() }),
        /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".5rem", padding: ".6rem 1rem", borderTop: "1px solid var(--border)", background: "color-mix(in oklch, var(--primary) 4%, transparent)", fontSize: ".78rem", color: "var(--muted-foreground)" }, children: [
          /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", style: { gap: ".4rem" }, children: [
            /* @__PURE__ */ jsx2(Dot, {}),
            " verified"
          ] }),
          /* @__PURE__ */ jsx2("span", { style: { marginLeft: "auto" }, children: idx === void 0 ? "searching your verified index\u2026" : "retrieved & ranked on-device \xB7 " + ((idx ? idx.hits.length : 0) + res.hits.length) + " sources \xB7 nothing sent" })
        ] })
      ] }),
      idx && idx.hits.length ? /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".06em" }, children: "From your verified index" }) : null,
      (idx ? idx.hits : []).map((d) => /* @__PURE__ */ jsxs2(Card2, { children: [
        /* @__PURE__ */ jsxs2(CardHeader2, { children: [
          /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1.05rem" }, children: d.title }),
          /* @__PURE__ */ jsx2(CardDescription2, { children: "verified index \xB7 re-derived" }),
          /* @__PURE__ */ jsx2(CardAction2, { children: /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", style: { gap: ".35rem" }, children: [
            /* @__PURE__ */ jsx2(Dot, {}),
            " verified"
          ] }) })
        ] }),
        /* @__PURE__ */ jsx2(CardContent2, { style: { lineHeight: 1.55 }, children: qHighlight(d.text.slice(0, 280).trim() + "\u2026", res.q) })
      ] }, d.id)),
      res.hits.length ? /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".06em" }, children: "Your library & basics" }) : null,
      res.hits.map(({ d, s }) => /* @__PURE__ */ jsxs2(Card2, { children: [
        /* @__PURE__ */ jsxs2(CardHeader2, { children: [
          /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1.05rem" }, children: d.title }),
          /* @__PURE__ */ jsx2(CardDescription2, { children: d.source }),
          /* @__PURE__ */ jsxs2(CardAction2, { style: { display: "flex", gap: ".4rem" }, children: [
            d.personal ? /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".35rem" }, children: [
              /* @__PURE__ */ jsx2(Dot, {}),
              " yours"
            ] }) : null,
            /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", children: [
              Math.round(Math.min(100, s / res.hits[0].s * 100)),
              "% match"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx2(CardContent2, { style: { lineHeight: 1.55 }, children: qHighlight(d.text, res.q) })
      ] }, d.id))
    ] }) : null
  ] });
}
export {
  Ask as default
};
