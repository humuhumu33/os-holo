// holo-build-index.mjs — build the PRE-BUILT κ-index asset the live OS ships. Crawls a curated seed set
// over the linked-data adapter (live Wikidata + Wikipedia), builds the retrieval corpus, and seals it into
// one self-verifying IPFS object → writes it as a CAR file under the frame assets. The OS then fetches this
// CAR, re-derives it (Law L5), and queries it network-free as a discovery source (holo-index.indexAdapter).
//
// Run: node holo-build-index.mjs   (needs network at build time). The committed CAR is fixed + self-
// verifying thereafter; rebuilding from live sources may yield a different CID as the world's content drifts.
import { createDiscovery, linkedDataAdapter } from "../os/sbin/holo-discover.mjs";
import { crawl, buildIndex, toIndexCar } from "../os/sbin/holo-index.mjs";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const ASSET_DIR = join(here, "..", "os", "usr", "share", "frame");

// a small, curated seed set — Rome-centric (so the canonical demo query lands) plus a few neighbours for
// breadth. Each seed → one sealed, content-addressed source object in the index.
const SEEDS = [
  "ancient Rome", "Roman Empire", "Roman Republic", "Julius Caesar", "Augustus",
  "Punic Wars", "Colosseum", "Roman Senate", "ancient Greece", "ancient Egypt",
];

async function main() {
  const discovery = createDiscovery({ adapters: [linkedDataAdapter()] });   // global fetch → live endpoints
  console.log(`crawling ${SEEDS.length} seeds (live Wikidata + Wikipedia)…`);
  const docs = await crawl(SEEDS, { discovery });
  console.log(`  sealed ${docs.length} source objects`);
  if (!docs.length) { console.error("no docs crawled — is the network reachable?"); process.exit(1); }
  const idx = await buildIndex(docs, { embedder: null });                   // BM25 index (no model needed at build)
  const car = toIndexCar(idx.indexCid, idx.blocks);
  writeFileSync(join(ASSET_DIR, "holo-index.car"), car);
  const sidecar = {
    "@type": "holo:SemanticIndex", indexCid: idx.indexCid, did: idx.did, stateKappa: idx.stateKappa,
    car: "holo-index.car", carBytes: car.length, count: idx.docs.size,
    docs: [...idx.docs.values()].map((d) => ({ cid: d.cid, title: d.title, meta: d.meta })),
  };
  writeFileSync(join(ASSET_DIR, "holo-index.json"), JSON.stringify(sidecar, null, 2));
  console.log(`\nindex ${idx.indexCid}`);
  console.log(`  ${idx.docs.size} docs · CAR ${car.length} B → ${join(ASSET_DIR, "holo-index.car")}`);
  console.log(`  titles: ${[...idx.docs.values()].map((d) => d.title).join(", ")}`);
}
main().catch((e) => { console.error("build failed:", e); process.exit(1); });
