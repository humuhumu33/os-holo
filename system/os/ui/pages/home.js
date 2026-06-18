// pages/home.jsx
import { useState as useState2, useEffect as useEffect2 } from "react";
import { Card as Card2, CardHeader as CardHeader2, CardTitle as CardTitle2, CardContent as CardContent2, CardDescription as CardDescription2, CardAction as CardAction2 } from "holo:card";
import { Badge as Badge2 } from "holo:badge";
import { Input } from "holo:input";
import { Button as Button2 } from "holo:button";
import { Skeleton as Skeleton2 } from "holo:skeleton";
import { Separator as Separator2 } from "holo:separator";
import { Avatar, AvatarImage, AvatarFallback } from "holo:avatar";

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
var GRAPH = "holo:graph";
var getGraph = () => {
  try {
    return JSON.parse(localStorage.getItem(GRAPH) || "[]");
  } catch {
    return [];
  }
};
var rememberObject = (rec) => {
  try {
    if (!rec || !rec.key || !rec.text && !rec.title) return;
    const g = getGraph().filter((x) => x.key !== rec.key);
    g.unshift({ key: rec.key, kind: rec.kind, title: rec.title || rec.key, text: rec.text || "", source: rec.source || "", t: rec.t || 0 });
    localStorage.setItem(GRAPH, JSON.stringify(g.slice(0, 60)));
  } catch {
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
var appRoute = (a) => a.page ? "?p=" + a.page : "/usr/share/frame/holospace.html?app=" + a.slug;
var VERB_APP = {};
for (const a of APPS) for (const v of a.verbs || []) if (!VERB_APP[v]) VERB_APP[v] = a;
var ACT_VERBS = Object.keys(VERB_APP);
function classifyIntent(raw) {
  const q = (raw || "").trim(), ql = q.toLowerCase();
  if (!q) return { kind: "empty" };
  if (MEDIA.test(q)) return { kind: "find", find: "media" };
  if (/^ipfs:\/\//i.test(q) || /^(Qm[1-9A-HJ-NP-Za-km-z]{44}|bafy[a-z0-9]{20,})$/i.test(q)) return { kind: "find", find: "ipfs" };
  if (/^[a-z0-9-]+\.eth$/i.test(q) || /^0x[0-9a-fA-F]{40}$/.test(q)) return { kind: "find", find: "name" };
  if (/^https?:\/\//i.test(q) || /^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(q)) return { kind: "find", find: "web" };
  const verb = ACT_VERBS.find((v) => ql.startsWith(v + " "));
  if (verb) return { kind: "act", verb, app: VERB_APP[verb], args: q.slice(verb.length).trim() };
  const exact = APPS.find((a) => a.name.toLowerCase() === ql || a.aliases.includes(ql) || ql === "open " + a.name.toLowerCase());
  if (exact) return { kind: "navigate", app: exact };
  if (/^my\s+/i.test(q)) return { kind: "recall", term: q.replace(/^my\s+/i, "").trim() };
  if (/\?$/.test(q) || /^(what|how|why|who|when|where|which|is|are|can|does|did|explain|tell|define)\b/.test(ql)) return { kind: "ask" };
  const loose = APPS.find((a) => a.aliases.some((x) => ql === x || ql.startsWith(x + " ")));
  if (loose) return { kind: "navigate", app: loose };
  return { kind: "ask" };
}
var intentLabel = (it) => it ? it.kind === "find" ? it.find : it.kind === "navigate" ? "open " + it.app.name : it.kind === "act" ? it.verb + " \xB7 " + it.app.name : it.kind === "recall" ? "your library" : it.kind === "ask" ? "ask" : "" : "";
var SAFE_EXEC = /* @__PURE__ */ new Set(["remember", "note"]);
var NOTES = "holo:notes";
var getNotes = () => {
  try {
    return JSON.parse(localStorage.getItem(NOTES) || "[]");
  } catch {
    return [];
  }
};
var addNote = (text) => {
  const t = String(text || "").trim();
  if (!t) return null;
  try {
    const n = { text: t, t: 0 };
    const a = [n, ...getNotes().filter((x) => x.text !== t)].slice(0, 100);
    localStorage.setItem(NOTES, JSON.stringify(a));
    rememberObject({ key: "note:" + t, kind: "note", title: t, text: t, source: "your notes", t: 0 });
    return n;
  } catch {
    return null;
  }
};
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
var col = (n) => n >= 0 ? "oklch(0.72 0.17 162)" : "oklch(0.65 0.21 25)";
var MEDIA = /\.(mp4|webm|mov|m4v|mkv|mp3|wav|ogg|m4a|flac|jpg|jpeg|png|gif|webp|avif|svg|pdf)(\?|#|$)/i;

// pages/home.jsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var MEDIA2 = /\.(mp4|webm|mov|m4v|mp3|wav|ogg|m4a|flac|jpg|jpeg|png|gif|webp|avif|svg|pdf)(\?|#|$)/i;
var mediaKind = (u) => {
  const m = String(u).toLowerCase().match(MEDIA2);
  if (!m) return null;
  const e = m[1];
  return /mp4|webm|mov|m4v/.test(e) ? "video" : /mp3|wav|ogg|m4a|flac/.test(e) ? "audio" : /pdf/.test(e) ? "pdf" : "image";
};
var isCID = (s) => /^(Qm[1-9A-HJ-NP-Za-km-z]{44}|bafy[a-z0-9]{20,})$/i.test(s);
var hostOf = (u) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};
function findKind(q) {
  if (MEDIA2.test(q)) return "media";
  if (/^ipfs:\/\//i.test(q) || isCID(q)) return "ipfs";
  if (/\.eth$/i.test(q) || /^0x[0-9a-fA-F]{40}$/.test(q)) return "name";
  if (/^https?:\/\//i.test(q) || /^[\w-]+(\.[\w-]+)+(\/.*)?$/.test(q)) return "web";
  return "topic";
}
async function resolveFind(q) {
  const k = findKind(q);
  if (k === "media") return { kind: "media", mk: mediaKind(q), src: q, via: hostOf(q) };
  if (k === "ipfs") {
    const cid = q.replace(/^ipfs:\/\//i, "");
    return { kind: "ipfs", cid, gw: "https://ipfs.io/ipfs/" + cid, via: "ipfs.io" };
  }
  if (k === "name") {
    const r = await fetch("https://api.ensdata.net/" + encodeURIComponent(q), { cache: "no-store" }).then((r2) => r2.json());
    return { kind: "name", name: r.ens || q, address: r.address, avatar: r.avatar_small || r.avatar, via: "ensdata.net" };
  }
  if (k === "web") {
    const u = /^https?:\/\//i.test(q) ? q : "https://" + q;
    const r = await fetch("https://api.microlink.io/?url=" + encodeURIComponent(u), { cache: "no-store" }).then((r2) => r2.json());
    const d = r.data || {};
    return { kind: "web", url: u, title: d.title || u, desc: d.description, image: d.image && d.image.url, publisher: d.publisher || hostOf(u), via: "microlink.io" };
  }
  const os = await fetch("https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&namespace=0&format=json&origin=*&search=" + encodeURIComponent(q), { cache: "no-store" }).then((r) => r.json());
  const title = os && os[1] && os[1][0] || q, desc = os && os[2] && os[2][0] || "";
  const s = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title.replace(/ /g, "_")), { cache: "no-store" }).then((r) => r.json()).catch(() => ({}));
  return { kind: "topic", title: s.title || title, extract: s.extract || desc || "No summary available.", thumb: s.thumbnail && s.thumbnail.source, url: s.content_urls && s.content_urls.desktop && s.content_urls.desktop.page || "https://en.wikipedia.org/wiki/" + encodeURIComponent(title.replace(/ /g, "_")), via: "wikipedia.org" };
}
var RECENT = "holo:omni-index";
var getRecent = () => {
  try {
    return JSON.parse(localStorage.getItem(RECENT) || "[]");
  } catch {
    return [];
  }
};
var pushRecent = (q) => {
  try {
    localStorage.setItem(RECENT, JSON.stringify([q, ...getRecent().filter((x) => x !== q)].slice(0, 12)));
  } catch {
  }
};
var fade = (shown, kids) => /* @__PURE__ */ jsx2("div", { style: { opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(8px) scale(.99)", transition: "opacity .35s ease, transform .35s ease" }, children: kids });
var Verified = ({ via, note }) => /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".5rem", padding: ".6rem 1rem", borderTop: "1px solid var(--border)", background: "color-mix(in oklch, var(--primary) 4%, transparent)", fontSize: ".78rem", color: "var(--muted-foreground)" }, children: [
  /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", style: { gap: ".4rem" }, children: [
    /* @__PURE__ */ jsx2(Dot, {}),
    " verified"
  ] }),
  /* @__PURE__ */ jsx2("span", { style: { marginLeft: "auto" }, children: note || (via ? "resolved for you \xB7 via " + via + " \xB7 nothing logged" : "") })
] });
var Close = ({ on }) => on ? /* @__PURE__ */ jsx2(Button2, { variant: "ghost", size: "sm", onClick: on, children: "\u2715" }) : null;
function FindCard({ input, onClose }) {
  const [st, setSt] = useState2({ s: "loading" });
  const [shown, setShown] = useState2(false);
  useState2(() => {
    let on = true;
    (async () => {
      try {
        const r2 = await resolveFind(input);
        if (!on) return;
        setSt({ s: "ok", r: r2 });
        const txt = r2.kind === "web" ? r2.title + " " + (r2.desc || "") : r2.kind === "topic" ? r2.title + " " + (r2.extract || "") : r2.kind === "name" ? "ENS " + (r2.address || "") : r2.kind === "ipfs" ? "IPFS " + r2.cid : r2.src;
        rememberObject({ key: input, kind: r2.kind, title: r2.title || r2.name || input, text: txt, source: r2.via, t: Date.now() });
      } catch (e) {
        if (on) setSt({ s: "err", msg: String(e && e.message || e) });
      }
    })();
    setTimeout(() => on && setShown(true), 20);
    return () => {
      on = false;
    };
  });
  const head = (t, sub) => /* @__PURE__ */ jsxs2(CardHeader2, { children: [
    /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1.1rem", wordBreak: "break-word" }, children: t }),
    sub ? /* @__PURE__ */ jsx2(CardDescription2, { children: sub }) : null,
    /* @__PURE__ */ jsxs2(CardAction2, { style: { display: "flex", gap: ".4rem" }, children: [
      /* @__PURE__ */ jsx2(Badge2, { variant: "secondary", children: st.r ? st.r.kind : "find" }),
      /* @__PURE__ */ jsx2(Close, { on: onClose })
    ] })
  ] });
  if (st.s === "loading") return fade(shown, /* @__PURE__ */ jsxs2(Card2, { children: [
    head("Resolving\u2026", input),
    /* @__PURE__ */ jsxs2(CardContent2, { children: [
      /* @__PURE__ */ jsx2(Skeleton2, { style: { height: "120px", marginBottom: "10px" } }),
      /* @__PURE__ */ jsx2(Skeleton2, { style: { height: "14px", width: "70%" } })
    ] })
  ] }));
  if (st.s === "err") return fade(shown, /* @__PURE__ */ jsxs2(Card2, { style: { borderColor: "oklch(0.5 0.18 25 / .5)" }, children: [
    head("Couldn\u2019t resolve", input),
    /* @__PURE__ */ jsx2(CardContent2, { style: { color: "var(--muted-foreground)", fontSize: ".85rem" }, children: "This source is unreachable from here." })
  ] }));
  const r = st.r;
  let body;
  if (r.kind === "media") body = r.mk === "video" ? /* @__PURE__ */ jsx2("video", { src: r.src, controls: true, preload: "metadata", style: { width: "100%", maxHeight: "62vh", display: "block", background: "#000" } }) : r.mk === "audio" ? /* @__PURE__ */ jsx2("audio", { src: r.src, controls: true, style: { width: "100%", margin: "1rem 0" } }) : r.mk === "pdf" ? /* @__PURE__ */ jsx2("iframe", { src: r.src, style: { width: "100%", height: "62vh", border: 0 } }) : /* @__PURE__ */ jsx2("img", { src: r.src, style: { width: "100%", display: "block" }, alt: "" });
  else if (r.kind === "ipfs") body = /* @__PURE__ */ jsxs2("a", { href: r.gw, target: "_blank", rel: "noopener", children: [
    /* @__PURE__ */ jsx2("img", { src: r.gw, onError: (e) => {
      e.target.style.display = "none";
    }, style: { width: "100%", display: "block" }, alt: "" }),
    /* @__PURE__ */ jsx2("div", { style: { padding: "1rem", fontFamily: "ui-monospace,monospace", fontSize: ".8rem", color: "var(--muted-foreground)", wordBreak: "break-all" }, children: r.cid })
  ] });
  else if (r.kind === "name") body = /* @__PURE__ */ jsxs2(CardContent2, { style: { display: "flex", alignItems: "center", gap: "1rem" }, children: [
    /* @__PURE__ */ jsxs2(Avatar, { style: { width: "56px", height: "56px" }, children: [
      r.avatar ? /* @__PURE__ */ jsx2(AvatarImage, { src: r.avatar }) : null,
      /* @__PURE__ */ jsx2(AvatarFallback, { children: (r.name || "?").slice(0, 2).toUpperCase() })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: { minWidth: 0 }, children: [
      /* @__PURE__ */ jsx2("div", { style: { fontSize: "1.2rem", fontWeight: 680 }, children: r.name }),
      /* @__PURE__ */ jsx2("div", { style: { fontFamily: "ui-monospace,monospace", fontSize: ".82rem", color: "var(--muted-foreground)", wordBreak: "break-all" }, children: r.address || "no address record" })
    ] })
  ] });
  else if (r.kind === "web") body = /* @__PURE__ */ jsxs2("a", { href: r.url, target: "_blank", rel: "noopener", style: { color: "inherit" }, children: [
    r.image ? /* @__PURE__ */ jsx2("img", { src: r.image, style: { width: "100%", maxHeight: "320px", objectFit: "cover", display: "block" }, alt: "" }) : null,
    /* @__PURE__ */ jsxs2(CardContent2, { children: [
      /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".8rem", marginBottom: ".3rem" }, children: r.publisher }),
      /* @__PURE__ */ jsx2("div", { style: { fontWeight: 660, fontSize: "1.05rem", lineHeight: 1.3 }, children: r.title }),
      r.desc ? /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", marginTop: ".4rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }, children: r.desc }) : null
    ] })
  ] });
  else body = /* @__PURE__ */ jsxs2("a", { href: r.url, target: "_blank", rel: "noopener", style: { color: "inherit", display: "flex", gap: "1rem", padding: "1rem 1.5rem" }, children: [
    r.thumb ? /* @__PURE__ */ jsx2("img", { src: r.thumb, style: { width: "108px", height: "108px", objectFit: "cover", borderRadius: "var(--radius)", flex: "none" }, alt: "" }) : null,
    /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("div", { style: { fontWeight: 680, fontSize: "1.15rem", marginBottom: ".3rem" }, children: r.title }),
      /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }, children: r.extract })
    ] })
  ] });
  const T = { media: r.src && r.src.split("/").pop(), ipfs: "IPFS object", name: "Identity", web: "Link", topic: r.title };
  return fade(shown, /* @__PURE__ */ jsxs2(Card2, { style: { overflow: "hidden" }, children: [
    head(T[r.kind], r.via ? "via " + r.via : ""),
    body,
    /* @__PURE__ */ jsx2(Verified, { via: r.via })
  ] }));
}
function AskCard({ input, onClose, onWeb }) {
  const [local] = useState2(() => askLocal(input));
  const [idx, setIdx] = useState2(void 0);
  useEffect2(() => {
    let on = true;
    askIndex(input).then((r) => {
      if (on) setIdx(r);
    });
    return () => {
      on = false;
    };
  }, [input]);
  const ans = idx && idx.ans ? idx.ans : local.ans;
  const personal = local.hits.filter((h) => h.d.personal).map((h) => h.d);
  return /* @__PURE__ */ jsxs2(Card2, { children: [
    /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsxs2(CardTitle2, { style: { display: "flex", alignItems: "center", gap: ".5rem", fontSize: "1.1rem" }, children: [
        "Answer ",
        /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".4rem" }, children: [
          /* @__PURE__ */ jsx2(Dot, {}),
          " ",
          idx ? "verified index" : "on-device"
        ] })
      ] }),
      /* @__PURE__ */ jsxs2(CardDescription2, { children: [
        "\u201C",
        input,
        "\u201D"
      ] }),
      /* @__PURE__ */ jsx2(CardAction2, { children: /* @__PURE__ */ jsx2(Close, { on: onClose }) })
    ] }),
    /* @__PURE__ */ jsx2(CardContent2, { style: { fontSize: "1.05rem", lineHeight: 1.6 }, children: ans ? qHighlight(ans, input) : "No source on your device covers that yet." }),
    idx && idx.hits.length ? /* @__PURE__ */ jsxs2(CardContent2, { style: { paddingTop: 0 }, children: [
      /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".05em", marginBottom: ".4rem" }, children: "From your verified index" }),
      /* @__PURE__ */ jsx2("div", { style: { display: "flex", flexWrap: "wrap", gap: ".4rem" }, children: idx.hits.map((d) => /* @__PURE__ */ jsx2(Badge2, { variant: "outline", children: d.title }, d.id)) })
    ] }) : null,
    personal.length ? /* @__PURE__ */ jsx2(CardContent2, { style: { paddingTop: 0, display: "flex", flexWrap: "wrap", gap: ".4rem" }, children: personal.map((d) => /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".35rem" }, children: [
      /* @__PURE__ */ jsx2(Dot, {}),
      " ",
      d.title
    ] }, d.id)) }) : null,
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".5rem", padding: ".6rem 1rem", borderTop: "1px solid var(--border)", background: "color-mix(in oklch, var(--primary) 4%, transparent)", fontSize: ".78rem", color: "var(--muted-foreground)" }, children: [
      /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", style: { gap: ".4rem" }, children: [
        /* @__PURE__ */ jsx2(Dot, {}),
        " verified"
      ] }),
      /* @__PURE__ */ jsx2("span", { children: idx === void 0 ? "searching your index\u2026" : "retrieved on-device \xB7 nothing sent" }),
      /* @__PURE__ */ jsx2(Button2, { variant: "outline", size: "sm", style: { marginLeft: "auto" }, onClick: () => onWeb(input), children: "Look it up on the web \u2192" })
    ] })
  ] });
}
function AppCard({ app, onClose }) {
  return /* @__PURE__ */ jsxs2(Card2, { children: [
    /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsx2(CardAction2, { style: { fontSize: "1.5rem", width: "46px", height: "46px", borderRadius: "12px", display: "grid", placeItems: "center", background: "var(--secondary)" }, children: app.icon }),
      /* @__PURE__ */ jsxs2(CardTitle2, { children: [
        "Open ",
        app.name
      ] }),
      /* @__PURE__ */ jsx2(CardDescription2, { children: app.desc || "Hologram surface" })
    ] }),
    /* @__PURE__ */ jsxs2(CardContent2, { style: { display: "flex", gap: ".5rem" }, children: [
      /* @__PURE__ */ jsxs2(Button2, { onClick: () => location.href = appRoute(app), children: [
        "Open ",
        app.name,
        " \u2192"
      ] }),
      /* @__PURE__ */ jsx2(Close, { on: onClose })
    ] })
  ] });
}
function ActCard({ it, onClose }) {
  const safe = SAFE_EXEC.has(it.verb) && it.args;
  const [saved] = useState2(() => safe ? addNote(it.args) : null);
  if (safe) return /* @__PURE__ */ jsxs2(Card2, { children: [
    /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsxs2(CardTitle2, { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
        "Saved ",
        /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".4rem" }, children: [
          /* @__PURE__ */ jsx2(Dot, {}),
          " on your device"
        ] })
      ] }),
      /* @__PURE__ */ jsx2(CardDescription2, { children: "Q remembered this for you" }),
      /* @__PURE__ */ jsx2(CardAction2, { children: /* @__PURE__ */ jsx2(Close, { on: onClose }) })
    ] }),
    /* @__PURE__ */ jsx2(CardContent2, { children: /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".6rem", padding: ".8rem .9rem", border: "1px solid var(--border)", borderRadius: "var(--radius)", background: "color-mix(in oklch, var(--primary) 4%, transparent)" }, children: [
      /* @__PURE__ */ jsx2("span", { style: { fontSize: "1.3rem" }, children: "\u2713" }),
      /* @__PURE__ */ jsxs2("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ jsx2("div", { style: { fontWeight: 600 }, children: it.args }),
        /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".82rem" }, children: "Kept in this browser. Find it later by asking \u201Cmy notes\u201D." })
      ] })
    ] }) })
  ] });
  return /* @__PURE__ */ jsxs2(Card2, { children: [
    /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsxs2(CardTitle2, { style: { display: "flex", alignItems: "center", gap: ".5rem", textTransform: "capitalize" }, children: [
        it.verb,
        " ",
        /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".4rem" }, children: [
          /* @__PURE__ */ jsx2(Dot, {}),
          " Q prepared"
        ] })
      ] }),
      /* @__PURE__ */ jsx2(CardDescription2, { children: it.args || "" }),
      /* @__PURE__ */ jsx2(CardAction2, { children: /* @__PURE__ */ jsx2(Close, { on: onClose }) })
    ] }),
    /* @__PURE__ */ jsx2(CardContent2, { children: /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".6rem", padding: ".7rem .9rem", border: "1px solid var(--border)", borderRadius: "var(--radius)" }, children: [
      /* @__PURE__ */ jsx2("span", { style: { fontSize: "1.4rem" }, children: it.app.icon }),
      /* @__PURE__ */ jsxs2("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ jsxs2("div", { style: { fontWeight: 600 }, children: [
          it.verb,
          it.args ? " " + it.args : ""
        ] }),
        /* @__PURE__ */ jsxs2("div", { style: { color: "var(--muted-foreground)", fontSize: ".82rem" }, children: [
          "Q will set this up in ",
          it.app.name,
          ". You confirm before anything happens \u2014 nothing runs automatically."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx2("div", { style: { display: "flex", gap: ".5rem", padding: ".6rem 1rem", borderTop: "1px solid var(--border)" }, children: /* @__PURE__ */ jsxs2(Button2, { onClick: () => location.href = appRoute(it.app), children: [
      "Review in ",
      it.app.name,
      " \u2192"
    ] }) })
  ] });
}
function RecallCard({ term, onClose }) {
  const notesMode = /^notes?$/i.test((term || "").trim());
  const [items] = useState2(() => {
    try {
      return notesMode ? getNotes().map((n) => ({ key: "n" + n.text, title: n.text, text: n.text, source: "your notes", kind: "note" })) : JSON.parse(localStorage.getItem("holo:graph") || "[]");
    } catch {
      return [];
    }
  });
  const list = items.filter((g) => notesMode || !term || (g.title + " " + g.text).toLowerCase().includes(term.toLowerCase()));
  return /* @__PURE__ */ jsxs2(Card2, { children: [
    /* @__PURE__ */ jsxs2(CardHeader2, { children: [
      /* @__PURE__ */ jsxs2(CardTitle2, { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
        "Your library ",
        /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".4rem" }, children: [
          /* @__PURE__ */ jsx2(Dot, {}),
          " on-device"
        ] })
      ] }),
      /* @__PURE__ */ jsx2(CardDescription2, { children: term ? "\u201C" + term + "\u201D" : "everything you've explored" }),
      /* @__PURE__ */ jsx2(CardAction2, { children: /* @__PURE__ */ jsx2(Close, { on: onClose }) })
    ] }),
    /* @__PURE__ */ jsx2(CardContent2, { style: { display: "flex", flexDirection: "column" }, children: list.length ? list.slice(0, 8).map((g, i) => [i ? /* @__PURE__ */ jsx2(Separator2, {}, "s" + i) : null, /* @__PURE__ */ jsxs2("div", { style: { padding: ".55rem 0" }, children: [
      /* @__PURE__ */ jsx2("div", { style: { fontWeight: 550 }, children: g.title }),
      /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)", fontSize: ".8rem" }, children: g.source || g.kind })
    ] }, g.key)]) : /* @__PURE__ */ jsx2("div", { style: { color: "var(--muted-foreground)" }, children: "Nothing yet \u2014 search something and it's remembered here, on your device." }) })
  ] });
}
function Briefing({ run }) {
  const recent = (() => {
    try {
      return getGraph().filter((g) => g.kind !== "note").sort((a, b) => (b.t || 0) - (a.t || 0)).slice(0, 6);
    } catch {
      return [];
    }
  })();
  const notes = getNotes().slice(0, 4);
  const news = useFeed(() => fetch("https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=5", { cache: "no-store" }).then((r) => r.json()).then((j) => j.hits || []), 6e4);
  const icon = { web: "\u{1F517}", topic: "\u{1F4A1}", name: "\u25C8", media: "\u25B6", ipfs: "\u25C8" };
  return /* @__PURE__ */ jsxs2("div", { style: { maxWidth: "980px", margin: "0 auto 2.618rem", display: "grid", gridTemplateColumns: "minmax(0,1.618fr) minmax(0,1fr)", gap: "1.618rem", alignItems: "start" }, children: [
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", flexDirection: "column", gap: "1.2rem" }, children: [
      recent.length ? /* @__PURE__ */ jsxs2("section", { children: [
        /* @__PURE__ */ jsx2("h3", { style: { margin: "0 0 .7rem", fontSize: "1.05rem", fontWeight: 700 }, children: "Pick up where you left off" }),
        /* @__PURE__ */ jsx2("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".7rem" }, children: recent.map((g) => /* @__PURE__ */ jsx2(Card2, { onClick: () => run(g.key), style: { cursor: "pointer" }, children: /* @__PURE__ */ jsx2(CardHeader2, { style: { padding: ".8rem .9rem" }, children: /* @__PURE__ */ jsxs2("div", { style: { display: "flex", alignItems: "center", gap: ".5rem" }, children: [
          /* @__PURE__ */ jsx2("span", { style: { fontSize: "1rem", flex: "none" }, children: icon[g.kind] || "\u2022" }),
          /* @__PURE__ */ jsxs2("div", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: ".92rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, children: g.title }),
            /* @__PURE__ */ jsx2(CardDescription2, { style: { fontSize: ".75rem" }, children: g.source || g.kind })
          ] })
        ] }) }) }, g.key)) })
      ] }) : null,
      /* @__PURE__ */ jsxs2("section", { children: [
        /* @__PURE__ */ jsxs2("h3", { style: { margin: "0 0 .7rem", fontSize: "1.05rem", fontWeight: 700, display: "flex", alignItems: "center", gap: ".5rem" }, children: [
          "Live now ",
          /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", style: { gap: ".35rem" }, children: [
            /* @__PURE__ */ jsx2(Dot, {}),
            " open web"
          ] })
        ] }),
        /* @__PURE__ */ jsx2("div", { style: { display: "flex", flexDirection: "column" }, children: (news || Array.from({ length: 4 })).map((h, i) => h ? [
          i ? /* @__PURE__ */ jsx2(Separator2, {}, "s" + i) : null,
          /* @__PURE__ */ jsxs2("a", { onClick: () => window.open(h.url || "https://news.ycombinator.com/item?id=" + h.objectID, "_blank"), style: { cursor: "pointer", display: "block", padding: ".6rem .2rem", color: "inherit" }, children: [
            /* @__PURE__ */ jsx2("div", { style: { fontSize: ".95rem", lineHeight: 1.3 }, children: h.title }),
            /* @__PURE__ */ jsxs2("div", { style: { color: "var(--muted-foreground)", fontSize: ".75rem", marginTop: ".15rem" }, children: [
              (() => {
                try {
                  return new URL(h.url).hostname.replace(/^www\./, "");
                } catch {
                  return "news.ycombinator.com";
                }
              })(),
              " \xB7 \u25B2",
              h.points
            ] })
          ] }, h.objectID)
        ] : /* @__PURE__ */ jsx2("div", { style: { padding: ".6rem .2rem", color: "var(--muted-foreground)" }, children: "streaming\u2026" }, i)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", flexDirection: "column", gap: "1.2rem" }, children: [
      notes.length ? /* @__PURE__ */ jsxs2(Card2, { children: [
        /* @__PURE__ */ jsx2(CardHeader2, { children: /* @__PURE__ */ jsxs2(CardTitle2, { style: { display: "flex", alignItems: "center", gap: ".5rem", fontSize: "1rem" }, children: [
          "Your notes ",
          /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { gap: ".4rem" }, children: [
            /* @__PURE__ */ jsx2(Dot, {}),
            " private"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx2(CardContent2, { style: { display: "flex", flexDirection: "column" }, children: notes.map((n, i) => [i ? /* @__PURE__ */ jsx2(Separator2, {}, "s" + i) : null, /* @__PURE__ */ jsx2("div", { style: { padding: ".5rem 0", fontSize: ".92rem" }, children: n.text }, i)]) })
      ] }) : null,
      /* @__PURE__ */ jsxs2(Card2, { children: [
        /* @__PURE__ */ jsx2(CardHeader2, { children: /* @__PURE__ */ jsx2(CardTitle2, { style: { fontSize: "1rem" }, children: recent.length ? "Because it's yours" : "A calm start" }) }),
        /* @__PURE__ */ jsx2(CardContent2, { style: { color: "var(--muted-foreground)", fontSize: ".9rem", lineHeight: 1.5 }, children: recent.length ? "This page is composed from what you've explored \u2014 kept on your device, never sent. Type anything to add to it." : "Nothing tracked, nothing stored elsewhere. Ask a question, drop a link, or just explore \u2014 it stays yours." })
      ] })
    ] })
  ] });
}
var SEEDS = ["vitalik.eth", "What is content addressing?", "play lofi", "wallet", "https://news.ycombinator.com"];
var COMPANION = (it) => !it || it.kind === "empty" ? "Ask me anything \u2014 a question, a name, a link, or a command like \u201Cplay lofi\u201D." : it.kind === "ask" ? "I\u2019ll answer from your device \u2014 nothing leaves." : it.kind === "find" ? "I\u2019ll resolve and verify that for you." : it.kind === "navigate" ? "I\u2019ll open " + it.app.name + "." : it.kind === "act" ? "I\u2019ll prepare \u201C" + it.verb + (it.args ? " " + it.args : "") + "\u201D \u2014 you confirm in " + it.app.name + "." : it.kind === "recall" ? "I\u2019ll look in your library." : "";
function Home() {
  const [q, setQ] = useState2("");
  const [it, setIt] = useState2(null);
  const [results, setResults] = useState2([]);
  const [recent, setRecent] = useState2(getRecent());
  const tape = useFeed(async () => {
    const s = encodeURIComponent(JSON.stringify(["BTCUSDT", "ETHUSDT", "SOLUSDT", "BNBUSDT"]));
    const d = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbols=" + s, { cache: "no-store" }).then((r) => r.json());
    return d.map((x) => ({ sym: x.symbol.replace("USDT", ""), px: +x.lastPrice, chg: +x.priceChangePercent }));
  }, 3e3);
  const [shared, setShared] = useState2(null);
  const run = (v) => {
    v = (v || "").trim();
    if (!v) return;
    const intent = classifyIntent(v);
    setResults((rs) => [{ id: v + ":" + rs.length, input: v, view: intent.kind === "find" ? "find" : intent.kind, it: intent }, ...rs].slice(0, 6));
    pushRecent(v);
    setRecent(getRecent());
    setQ("");
    setIt(null);
  };
  useEffect2(() => {
    try {
      const qq = new URLSearchParams(location.search).get("q");
      if (qq) run(qq);
    } catch {
    }
  }, []);
  const shareLink = (input) => location.origin + location.pathname + "?q=" + encodeURIComponent(input);
  const share = (input) => {
    try {
      navigator.clipboard.writeText(shareLink(input));
    } catch {
    }
    setShared(input);
    setTimeout(() => setShared((s) => s === input ? null : s), 1800);
  };
  const web = (v) => setResults((rs) => [{ id: "web:" + v + ":" + rs.length, input: v, view: "find", it: { kind: "find" } }, ...rs].slice(0, 6));
  const drop = (id) => setResults((rs) => rs.filter((r) => r.id !== id));
  const render = (it2) => {
    const close = () => drop(it2.id);
    switch (it2.view) {
      case "find":
        return /* @__PURE__ */ jsx2(FindCard, { input: it2.input, onClose: close });
      case "ask":
        return /* @__PURE__ */ jsx2(AskCard, { input: it2.input, onClose: close, onWeb: web });
      case "navigate":
        return /* @__PURE__ */ jsx2(AppCard, { app: it2.it.app, onClose: close });
      case "act":
        return /* @__PURE__ */ jsx2(ActCard, { it: it2.it, onClose: close });
      case "recall":
        return /* @__PURE__ */ jsx2(RecallCard, { term: it2.it.term, onClose: close });
      default:
        return /* @__PURE__ */ jsx2(AskCard, { input: it2.input, onClose: close, onWeb: web });
    }
  };
  return /* @__PURE__ */ jsxs2(Shell, { children: [
    /* @__PURE__ */ jsxs2("div", { style: { maxWidth: "820px", margin: "min(8vh,80px) auto 2rem", textAlign: "center" }, children: [
      /* @__PURE__ */ jsx2("h1", { style: { margin: "0 0 .4rem", fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 760, letterSpacing: "-.03em" }, children: "One tab for everything." }),
      /* @__PURE__ */ jsx2("p", { style: { margin: "0 0 1.618rem", color: "var(--muted-foreground)", fontSize: "1.1rem" }, children: "Ask, find, open, or act \u2014 one answer, beautifully, on your device." }),
      /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".5rem", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxs2("div", { style: { position: "relative", flex: 1 }, children: [
          /* @__PURE__ */ jsx2(Input, { value: q, autoFocus: true, onChange: (e) => {
            setQ(e.target.value);
            setIt(e.target.value.trim() ? classifyIntent(e.target.value) : null);
          }, onKeyDown: (e) => {
            if (e.key === "Enter") run(e.currentTarget.value);
          }, placeholder: "Search anything, or just ask\u2026", style: { height: "58px", borderRadius: "999px", paddingInline: "1.4rem", fontSize: "1.15rem" } }),
          it && it.kind !== "empty" ? /* @__PURE__ */ jsx2(Badge2, { variant: "secondary", style: { position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)" }, children: intentLabel(it) }) : null
        ] }),
        /* @__PURE__ */ jsx2(Button2, { onClick: () => run(q), style: { height: "58px", borderRadius: "999px", paddingInline: "1.6rem", fontSize: "1.05rem" }, children: "Go \u2192" })
      ] }),
      /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".5rem", alignItems: "center", justifyContent: "center", marginTop: ".9rem", color: "var(--muted-foreground)", fontSize: ".9rem" }, children: [
        /* @__PURE__ */ jsx2("span", { style: { width: "22px", height: "22px", borderRadius: "50%", flex: "none", background: "linear-gradient(120deg,#22d3ee,#6366f1 50%,#a855f7)", display: "grid", placeItems: "center", color: "#fff", fontSize: ".7rem", fontWeight: 800 }, children: "Q" }),
        /* @__PURE__ */ jsx2("span", { children: COMPANION(it) })
      ] }),
      /* @__PURE__ */ jsx2("div", { style: { display: "flex", gap: ".4rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }, children: (recent.length ? recent : SEEDS).slice(0, 6).map((s) => /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", style: { cursor: "pointer", maxWidth: "260px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, onClick: () => run(s), children: [
        recent.length ? "\u21BA " : "",
        s
      ] }, s)) }),
      /* @__PURE__ */ jsx2("div", { style: { marginTop: ".9rem", color: "var(--muted-foreground)", fontSize: ".82rem" }, children: "\u{1F512} Private \u2014 your history stays in this browser. No account, no tracking." })
    ] }),
    results.length ? /* @__PURE__ */ jsx2("div", { style: { display: "flex", flexDirection: "column", gap: "1.2rem", maxWidth: "820px", margin: "0 auto 2.618rem" }, children: results.map((r) => /* @__PURE__ */ jsxs2("div", { children: [
      /* @__PURE__ */ jsx2("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: ".3rem" }, children: /* @__PURE__ */ jsx2(Button2, { variant: "ghost", size: "sm", onClick: () => share(r.input), children: shared === r.input ? "\u2713 link copied" : "Share \u2197" }) }),
      render(r)
    ] }, r.id)) }) : /* @__PURE__ */ jsx2(Briefing, { run }),
    /* @__PURE__ */ jsx2(Separator2, { style: { maxWidth: "820px", margin: "0 auto 1.2rem" } }),
    /* @__PURE__ */ jsxs2("div", { style: { display: "flex", gap: ".5rem", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }, children: [
      /* @__PURE__ */ jsxs2(Badge2, { variant: "outline", style: { gap: ".4rem" }, children: [
        /* @__PURE__ */ jsx2(Dot, {}),
        " live"
      ] }),
      (tape || [{}, {}, {}, {}]).map((t, i) => /* @__PURE__ */ jsxs2(Badge2, { variant: "secondary", style: { fontFamily: "ui-monospace,monospace", gap: ".35rem" }, children: [
        /* @__PURE__ */ jsx2("b", { children: t.sym || "\xB7\xB7\xB7" }),
        t.px ? "$" + t.px.toLocaleString(void 0, { maximumFractionDigits: 0 }) : "",
        t.chg != null ? /* @__PURE__ */ jsx2("span", { style: { color: col(t.chg) }, children: (t.chg >= 0 ? "\u25B2" : "\u25BC") + Math.abs(t.chg).toFixed(2) + "%" }) : null
      ] }, i))
    ] })
  ] });
}
export {
  Home as default
};
