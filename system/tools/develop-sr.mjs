// develop-sr.mjs — "Develop to 8K": the offline super-resolution → κ-pin pipeline.
//
// Takes a low-res source, runs a super-resolution TRANSFORM, re-encodes to a
// content-addressed CMAF/HLS ladder, pins every byte (sha256), and writes a
// re-derivable PROV-O receipt:  source κ --[transform]--> output κ.
//
// The result is a κ-OBJECT YOU OWN: served as static bytes, played O(1) (no
// per-frame recompute), Law-L5 verified (the master playlist re-derives to its κ).
//
// The transform is model-agnostic. Today it runs ffmpeg Lanczos (classical: real
// 4K/8K *dimensions*, source-bound *detail*). A neural model (Real-ESRGAN / SwinIR)
// drops into the SAME slot (`runTransform`) for genuine detail synthesis — the
// substrate plumbing (pin, receipt, serve, verify, own) is identical either way.
//
//   node develop-sr.mjs --source <abs.mp4|id> --height 2160 [--method lanczos]
//                       [--id bbb] [--title "Big Buck Bunny"] [--preset medium] [--json]

import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const APPS = "C:/Users/pavel/Desktop/Hologram Apps";
const sha256 = (buf) => "sha256:" + createHash("sha256").update(buf).digest("hex");
const arg = (k, d) => { const i = process.argv.indexOf("--" + k); return i > 0 ? process.argv[i + 1] : d; };
const flag = (k) => process.argv.includes("--" + k);
const JSONOUT = flag("json");
const emit = (stage, extra = {}) => { const o = { stage, ...extra }; console.log(JSONOUT ? JSON.stringify(o) : `· ${stage}${extra.msg ? " — " + extra.msg : ""}`); };
const tierName = (h) => h >= 4320 ? "8K" : h >= 2160 ? "4K" : h >= 1440 ? "1440p" : h >= 1080 ? "1080p" : h + "p";

const height = parseInt(arg("height", "2160"), 10);
const seconds = parseInt(arg("seconds", "0"), 10);   // 0 = full title; >0 = a fast preview
const method = arg("method", "lanczos");
const sourceId = arg("id", "bbb");
const title = arg("title", "Big Buck Bunny");
const poster = arg("poster", "https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg");
const topics = arg("topics", "comedy,animation,nature,creative-commons").split(",");
const source = arg("source", join(APPS, "apps/video/video/big-buck-bunny-360p.mp4"));

const id = `dev-${sourceId}-${height}`;
const outDir = join(APPS, "apps/video/video/dev", id);
rmSync(outDir, { recursive: true, force: true }); mkdirSync(outDir, { recursive: true });

emit("resolving", { source });
const sourceBuf = readFileSync(source);
const sourceKappa = sha256(sourceBuf);
const probe = spawnSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height:format=duration", "-of", "csv=p=0", source], { encoding: "utf8" });
const nums = (probe.stdout || "").split(/[\n,]/).map((x) => parseFloat(x)).filter((n) => !isNaN(n));
const [sw, shgt, sdur] = [nums[0] || 0, nums[1] || 0, nums[2] || 10];

// ── the SR transform (the one swappable slot) ───────────────────────────────────
function videoFilter() {
  if (method === "lanczos") return `scale=-2:${height}:flags=lanczos,format=yuv420p`;
  // NEURAL HOOK: a Real-ESRGAN / SwinIR pass goes here (frames → model → frames),
  // then the same CMAF/pin/receipt path runs unchanged. Refuse rather than fake it.
  throw new Error(`method "${method}" needs a neural SR model installed (hook not wired) — use --method lanczos`);
}

emit("upscaling", { msg: `${shgt || "?"}p → ${height}p (${method})` });
const vf = videoFilter();
const ff = ["-y", "-i", source, ...(seconds > 0 ? ["-t", String(seconds)] : []), "-vf", vf,
  "-c:v", "libx264", "-profile:v", "high", "-preset", arg("preset", "medium"), "-crf", "20",
  "-c:a", "aac", "-b:a", "128k",
  "-f", "hls", "-hls_time", "4", "-hls_segment_type", "fmp4", "-hls_playlist_type", "vod",
  "-hls_fmp4_init_filename", "init.mp4", "-hls_segment_filename", "seg_%03d.m4s",
  "-master_pl_name", "master.m3u8", "-var_stream_map", "v:0,a:0", "stream_%v.m3u8"];
const enc = spawnSync("ffmpeg", ff, { cwd: outDir, encoding: "utf8" });
if (enc.status !== 0) { emit("error", { msg: (enc.stderr || "").slice(-1200) }); process.exit(1); }

// ── pin every byte (Law L5) ─────────────────────────────────────────────────────
emit("pinning");
const files = readdirSync(outDir).filter((f) => f !== "manifest.json" && f !== "receipt.jsonld");
const pin = {}; let bytes = 0;
for (const f of files.sort()) { const b = readFileSync(join(outDir, f)); pin[f] = sha256(b); bytes += b.length; }
const masterKappa = pin["master.m3u8"];
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(pin, null, 2) + "\n");

// ── PROV-O receipt — re-derivable lineage ───────────────────────────────────────
emit("receipt");
const receipt = {
  "@context": { prov: "http://www.w3.org/ns/prov#", holo: "https://hologram.os/ns#", dcterms: "http://purl.org/dc/terms/", xsd: "http://www.w3.org/2001/XMLSchema#" },
  "@id": "holo:develop/" + id, "@type": "prov:Activity",
  "dcterms:title": `Develop ${title} → ${tierName(height)}`,
  "prov:used": { "@id": "holo://" + sourceKappa, "holo:width": sw, "holo:height": shgt, "holo:role": "source" },
  "holo:transform": { "holo:method": method, "holo:engine": "ffmpeg/libx264 · scale=lanczos · CMAF fMP4 HLS", "holo:targetHeight": height, "holo:detailNote": method === "lanczos" ? "classical upscale: true 4K/8K dimensions, source-bound detail; neural model drops into this slot for synthesized detail" : "neural" },
  "prov:generated": { "@id": "holo://" + masterKappa, "@type": "prov:Entity", "holo:height": height, "holo:tier": tierName(height), "holo:files": files.length, "holo:bytes": bytes },
  "holo:pin": pin,
  "prov:wasAttributedTo": { "@id": "did:holo:develop-sr", "holo:law": "L5 — the pinned bytes re-derive to their κ" },
};
writeFileSync(join(outDir, "receipt.jsonld"), JSON.stringify(receipt, null, 2) + "\n");

// ── register the owned κ-item the player serves ─────────────────────────────────
const feedPath = join(APPS, "apps/player/feed/developed.json");
let feed = { version: 1, generatedAt: new Date().toISOString().slice(0, 10), items: [] };
try { feed = JSON.parse(readFileSync(feedPath, "utf8")); } catch {}
feed.items = (feed.items || []).filter((x) => x.id !== id);
feed.items.unshift({
  id, title: `${title} — ${tierName(height)}`, sourceId, sourceKappa, height, tier: tierName(height), method,
  src: `video/dev/${id}/master.m3u8`, type: "application/x-mpegURL", kappa: masterKappa,
  poster, topics, runtimeSec: Math.round(seconds > 0 ? Math.min(seconds, sdur || seconds) : sdur), bytes,
  receipt: `video/dev/${id}/receipt.jsonld`,
  blurb: `${title}, developed from ${shgt}p to ${tierName(height)} and pinned as a content-addressed object you own — served O(1), Law-L5 verified.`,
});
writeFileSync(feedPath, JSON.stringify(feed, null, 2) + "\n");

emit("done", { id, sourceKappa, kappa: masterKappa, height, tier: tierName(height), files: files.length, mb: +(bytes / 1048576).toFixed(1) });
