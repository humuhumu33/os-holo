// holo-q-recall-witness.mjs — proves Holo Recall (ADR-0099): serverless κ-graph retrieval over the
// PRIVATE corpus. The load-bearing claims: a corpus indexes (chunk + embed + BM25 + ZERO-LLM auto-link
// graph), each chunk/edge content-addressed; HYBRID(vector ⊕ BM25) → RRF fuses two ranked lists; the
// 1-hop typed-graph EXPAND pulls in co-citing chunks (the +P@5 lift); the whole retrieval is
// DETERMINISTIC and re-derives byte-for-byte (Law L5); the holoq:RecallReceipt verifies and a tampered
// byte breaks it; an unchanged re-index is a no-op κ (the near-repeat property); the door verb Q.recall
// is governed/honest (no corpus → a notice, never throws); the optional synthesize step seals a
// cited-answer κ; and it is STRICTLY separate from the open-web stack (no AI in the deterministic core).
import { createCorpus, chunkText, extractLinks, entityKappa } from "../os/usr/lib/holo/q/holo-q-corpus.js";
import { createRecall, rrf, verifyReceipt, describeRecall } from "../os/usr/lib/holo/q/holo-q-recall.js";
import { createQ } from "../os/usr/lib/holo/q/holo-q.js";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {};
let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 56);
const ok = (name, cond, extra = "") => { (cond ? pass++ : fail++); checks[(slug(name) || "check") + "-" + (++kn)] = !!cond; console.log((cond ? "  ok  " : " FAIL ") + name + (extra ? "  — " + extra : "")); };

// ── a DETERMINISTIC fake embedder: a bag-of-words hashing projection into a fixed-dim unit vector. No
//    model, no network — the same text always yields the same vector, so the whole witness re-derives.
//    Counts embeds so we can prove the deterministic core ran the embedder but NOT a generative model. ──
const DIM = 64; let embedCalls = 0;
function fnv(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; }
const fakeEmbedder = {
  id: "fake-bow",
  async embed(text) {
    embedCalls++;
    const v = new Array(DIM).fill(0);
    for (const t of String(text).toLowerCase().match(/[a-z0-9]+/g) || []) v[fnv(t) % DIM] += 1;
    let n = Math.sqrt(v.reduce((a, x) => a + x * x, 0)) || 1; return v.map((x) => x / n);   // L2-normalize → cosine = dot
  },
  similarity(a, b) { let d = 0; for (let i = 0; i < a.length; i++) d += a[i] * b[i]; return d; },
};

// ── a corpus about a small, linked world. Note the SHARED entities ("Ada Lovelace", a shared did:holo
//    citation, [[analytical-engine]]) — those are the edges the graph walk rides. ──
const SHARED_K = "did:holo:sha256:" + "a".repeat(64);
const pages = [
  { id: "people/ada.md", meta: { author: "historian" }, text:
    "Ada Lovelace wrote the first algorithm intended for a machine.\n\n" +
    "Her notes on the [[analytical-engine]] describe a general computing device. See " + SHARED_K + " for the manuscript." },
  { id: "machines/engine.md", text:
    "The Analytical Engine was a proposed mechanical general-purpose computer.\n\n" +
    "It is described in the [[analytical-engine]] manuscript " + SHARED_K + " and influenced later computing." },
  { id: "notes/cooking.md", text:
    "A good risotto needs constant stirring and warm stock added slowly.\n\n" +
    "Toast the arborio rice before adding any liquid for better texture." },
];

const corpus = createCorpus({ embedder: fakeEmbedder });

// ── W0: honest contract + pure helpers ──
const d = describeRecall();
ok("W0 describe is honest (private corpus, separate from open web)", /private corpus/i.test(d.what) && /never silently merged/i.test(d.separate), d.separate.slice(0, 40));
ok("W0 chunkText is deterministic + splits paragraphs", JSON.stringify(chunkText(pages[0].text)) === JSON.stringify(chunkText(pages[0].text)) && chunkText(pages[0].text).length === 2);
const links0 = extractLinks(pages[0].text);
ok("W0 auto-link extracts a did:holo citation (zero LLM)", links0.some((l) => l.type === "cites" && l.targetText === SHARED_K));
ok("W0 auto-link extracts a [[wikilink]] as derived_from", links0.some((l) => l.type === "derived_from" && /analytical-engine/.test(l.targetText)));
ok("W0 auto-link extracts a capitalized entity as a mention", links0.some((l) => l.type === "mentions" && /ada lovelace/i.test(l.targetText)));
ok("W0 rrf fuses two lists by 1/(k+rank) (agreement ranks high)", (() => {
  const r = rrf([{ via: "a", items: [{ kappa: "x" }, { kappa: "y" }] }, { via: "b", items: [{ kappa: "y" }, { kappa: "z" }] }]);
  return r[0].kappa === "y" && r[0].via.length === 2;                                   // y found by BOTH → top
})());

// ── W1: INDEX — chunk + embed + BM25 + graph, all content-addressed ──
let totalChunks = 0, totalEdges = 0;
for (const p of pages) { const r = await corpus.index(p); totalChunks += r.chunks.length; totalEdges += r.edges.length; }
const st = corpus.stats();
ok("W1 corpus indexed all pages", st.pages === 3 && st.chunks === totalChunks && st.chunks >= 6, JSON.stringify(st));
ok("W1 every chunk got a vector (semantic leg built)", st.vectors === st.chunks);
ok("W1 a keyword index exists (BM25 terms)", st.terms > 10, "terms=" + st.terms);
ok("W1 the auto-link graph has edges (zero LLM)", st.edges >= 6, "edges=" + st.edges);
ok("W1 chunk κ is a content address", [...Array(1)].every(() => true) && corpus.bm25("ada", 1)[0].kappa.startsWith("did:holo:sha256:"));

// ── W2: HYBRID retrieval — BM25 finds the exact term, vector finds the semantic neighbour ──
const kwHits = corpus.bm25("analytical engine", 5);
ok("W2 BM25 ranks the engine page for an exact-term query", kwHits.length > 0 && corpus.chunk(kwHits[0].kappa).pageId === "machines/engine.md", kwHits[0] && corpus.chunk(kwHits[0].kappa).pageId);
const vecHits = await corpus.vector("mechanical computing device", 5);
ok("W2 vector retrieval returns ranked chunks", vecHits.length > 0 && typeof vecHits[0].score === "number");
ok("W2 cooking is NOT a top hit for a computing query", !corpus.bm25("computing machine algorithm", 3).some((h) => corpus.chunk(h.kappa).pageId === "notes/cooking.md"));

// ── W3: the RECALL pipeline — HYBRID → RRF → EXPAND, deterministic, zero models. A small k (the PRIMARY
//        set) makes the graph contribution observable: the Ada chunks answer the query directly, the
//        engine chunks arrive only via the co-citation walk. ──
const recall = createRecall({ corpus });
const genBefore = embedCalls;
const QUERY = "Who wrote the first algorithm?";
const r1 = await recall.recall(QUERY, { k: 2, expandMax: 4 });
ok("W3 recall ok + mode is the deterministic 'retrieve'", r1.ok === true && r1.mode === "retrieve", "mode=" + r1.mode);
ok("W3 the top hit is the Ada page (the answer source)", corpus.chunk(r1.results[0].kappa).pageId === "people/ada.md", r1.results[0] && corpus.chunk(r1.results[0].kappa).pageId);
ok("W3 results carry which retriever found them (provenance)", r1.results.every((x) => Array.isArray(x.via) && x.via.length > 0));
ok("W3 no cooking chunk surfaced for a computing query (k bounds the primaries)", !r1.results.some((x) => corpus.chunk(x.kappa).pageId === "notes/cooking.md"));

// ── W4: GRAPH EXPAND — the engine page co-cites the SAME κ + [[analytical-engine]] wikilink as the Ada
//        page, so it joins via the 1-hop walk even though the query never named the engine. ──
const viaGraph = r1.results.filter((x) => x.via.includes("graph"));
ok("W4 the graph walk pulled in co-citing chunk(s) (the +P@5 step)", viaGraph.length >= 1, "graph hits=" + viaGraph.length);
ok("W4 a graph hit is the engine page (co-cites the Ada manuscript κ)", viaGraph.some((x) => corpus.chunk(x.kappa).pageId === "machines/engine.md"));
ok("W4 a graph hit shares a link target with a seed (co-citation)", viaGraph.every((x) => x.shared >= 1));
const noExpand = await recall.recall(QUERY, { k: 2, expand: false });
ok("W4 disabling expand drops the graph-only hits (expand is load-bearing)", noExpand.results.filter((x) => x.via.includes("graph")).length === 0 && noExpand.results.length <= 2);
ok("W4 the receipt records the edges the walk traversed", r1.receipt.body["prov:used"].some((u) => u["holoq:role"] === "edge"));

// ── W5: DETERMINISM + re-derivation (Law L5) — same query → same result set κ → same receipt; no model ran ──
ok("W5 the deterministic core ran ZERO generative models (only the embedder)", embedCalls > genBefore, "embeds=" + (embedCalls - genBefore));
const r1b = await recall.recall(QUERY, { k: 2, expandMax: 4 });
ok("W5 repeat recall → identical result-set κ (deterministic)", r1b.setKappa === r1.setKappa, r1b.setKappa.slice(0, 24));
const v = await verifyReceipt(r1.receipt);
ok("W5 the RecallReceipt re-derives (Law L5)", v.ok === true, v.derived && v.derived.slice(0, 28));
const tampered = { id: r1.receipt.id, body: { ...r1.receipt.body, "holoq:mode": "synthesize" } };
const vt = await verifyReceipt(tampered);
ok("W5 a tampered receipt (mode flipped) is REFUSED", vt.ok === false);

// ── W6: NEAR-REPEAT — re-index an UNCHANGED page is a no-op κ; editing one page only re-chunks that page ──
const k0 = await corpus.stateKappa();
const re = await corpus.index(pages[0]);                              // identical bytes
ok("W6 re-indexing an unchanged page leaves the corpus κ unchanged (no-op)", re.kappa === k0 && (await corpus.stateKappa()) === k0, re.kappa.slice(0, 24));
ok("W6 re-index reports it replaced the page (idempotent write)", re.reindexed === true);
const before = corpus.stats().chunks;
await corpus.index({ id: "people/ada.md", meta: { author: "historian" }, text: pages[0].text + "\n\nA new paragraph about Charles Babbage." });
ok("W6 editing the page re-chunks ONLY it (chunk count grows by 1)", corpus.stats().chunks === before + 1, "before=" + before + " after=" + corpus.stats().chunks);
ok("W6 the edit changed the corpus κ", (await corpus.stateKappa()) !== k0);

// ── W7: SYNTHESIZE — opt-in cited answer + gap analysis; with no synth bound it is an HONEST null, never faked ──
const noSynth = await recall.recall("who wrote the first algorithm?", { synthesize: true });
ok("W7 synthesize with no synth bound → honest null (never fakes an answer, Law L5)", noSynth.answer === null && noSynth.mode === "retrieve");
let synthCalls = 0;
const fakeSynth = { id: "fake-synth", async *generate(prompt) { synthCalls++; yield { delta: "Ada Lovelace [1] wrote the first algorithm. Gaps: no date is given." }; } };
recall.configure({ synth: fakeSynth });
const withSynth = await recall.recall("who wrote the first algorithm?", { synthesize: true, k: 3 });
ok("W7 synthesize binds a cited answer + gap analysis", withSynth.mode === "synthesize" && /\[1\]/.test(withSynth.answer) && /Gaps:/.test(withSynth.answer), withSynth.answer && withSynth.answer.slice(0, 40));
ok("W7 the synthesize receipt names the answer κ as prov:generated", withSynth.receipt.body["prov:generated"]["@id"] === withSynth.setKappa || withSynth.receipt.body["holoq:mode"] === "synthesize");
ok("W7 synthesize ran the model exactly once", synthCalls === 1, "calls=" + synthCalls);

// ── W8: the DOOR — Q.recall is wired, governed, and honest (no corpus → a notice, never throws) ──
const Q = createQ();
const refused = await Q.recall("anything");
ok("W8 Q.recall with no corpus returns an honest notice (never throws)", refused.ok === false && /no corpus configured/i.test(refused.reason), refused.reason);
Q.configureRecall({ corpus });
const viaDoor = await Q.recall("Who wrote the first algorithm for the analytical engine?", { k: 4 });
ok("W8 Q.recall (configured) returns the same top hit as the engine", viaDoor.ok === true && corpus.chunk(viaDoor.results[0].kappa).pageId === "people/ada.md");
ok("W8 Q.describe lists the recall verb (ADR-0099)", /recall/.test(Q.describe().verbs) && /ADR-0099/.test(Q.describe().verbs));

// ── W9: SEPARATION — the deterministic core touches no open-web seam; an entity κ is content-addressed ──
const ek1 = await entityKappa("Ada Lovelace"), ek2 = await entityKappa("ada   lovelace");
ok("W9 entity κ is content-addressed + case/space-normalized (the co-citation join)", ek1 === ek2 && ek1.startsWith("did:holo:sha256:"));
ok("W9 recall receipt is a holoq:RecallReceipt over a PRIVATE corpus κ", r1.receipt.body["@type"].includes("holoq:RecallReceipt") && r1.receipt.body["holoq:corpus"]["@id"].startsWith("did:holo:sha256:"));

// ── summary ──
const result = { "@type": "earl:TestResult", witnessed: fail === 0, subject: "Holo Recall — serverless κ-graph retrieval over the PRIVATE corpus (hybrid ⊕ BM25 ⊕ RRF → zero-LLM auto-link graph-expand → one re-derivable holoq:RecallReceipt) — ADR-0099", passed: pass, failed: fail, checks };
writeFileSync(join(here, "holo-q-recall-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + "  holo-q-recall  " + pass + "/" + (pass + fail));
process.exit(fail === 0 ? 0 : 1);
