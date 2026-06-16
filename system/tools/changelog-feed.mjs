#!/usr/bin/env node
// changelog-feed.mjs — turn the Keep a Changelog CHANGELOG.md into an Atom feed (feed.xml),
// so the changelog is subscribable. Pure Node, no deps. Released versions become entries;
// the [Unreleased] section is omitted (a feed carries shipped releases).
//
//   node system/tools/changelog-feed.mjs [CHANGELOG.md] [feed.xml]
import { readFileSync, writeFileSync } from "node:fs";

const SRC = process.argv[2] || "CHANGELOG.md";
const OUT = process.argv[3] || "feed.xml";
const SITE = "https://humuhumu33.github.io/os-holo";
const REPO = "https://github.com/humuhumu33/os-holo";
const SECTIONS = ["Added", "Changed", "Deprecated", "Removed", "Fixed", "Security"];

const xml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" }[c]));

function parse(md) {
  const rels = []; let rel = null, sec = null;
  for (const ln of md.split(/\r?\n/)) {
    let m = ln.match(/^##\s+\[([^\]]+)\](?:\s*-\s*(\d{4}-\d{2}-\d{2}))?/);
    if (m) { rel = { version: m[1], date: m[2] || "", secs: {} }; rels.push(rel); sec = null; continue; }
    m = ln.match(/^###\s+(.+?)\s*$/);
    if (m && rel) { sec = m[1].trim(); rel.secs[sec] ||= []; continue; }
    m = ln.match(/^[-*]\s+(.+)$/);
    if (m && rel && sec) rel.secs[sec].push(m[1].trim());
  }
  return rels;
}

const md = readFileSync(SRC, "utf8");
const releases = parse(md).filter((r) => !/unreleased/i.test(r.version));
const updated = (releases[0]?.date ? releases[0].date + "T00:00:00Z" : new Date().toISOString());

const entries = releases.map((r) => {
  const id = `${REPO}/releases/tag/v${r.version}`;
  let html = "";
  for (const name of SECTIONS) {
    const items = r.secs[name]; if (!items?.length) continue;
    html += `<h3>${name}</h3><ul>` + items.map((i) => `<li>${xml(i)}</li>`).join("") + `</ul>`;
  }
  return `  <entry>
    <title>v${xml(r.version)}</title>
    <id>${xml(id)}</id>
    <link href="${xml(SITE)}/changelog.html"/>
    <updated>${r.date ? r.date + "T00:00:00Z" : updated}</updated>
    <content type="html">${xml(html)}</content>
  </entry>`;
}).join("\n");

const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Hologram OS — Changelog</title>
  <subtitle>Notable changes, generated from the repository history.</subtitle>
  <id>${SITE}/changelog.html</id>
  <link href="${SITE}/changelog.html"/>
  <link rel="self" type="application/atom+xml" href="${SITE}/feed.xml"/>
  <updated>${updated}</updated>
  <author><name>Hologram OS</name></author>
${entries}
</feed>
`;

writeFileSync(OUT, feed);
console.log(`changelog-feed: wrote ${OUT} (${releases.length} release entr${releases.length === 1 ? "y" : "ies"})`);
