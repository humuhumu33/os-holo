// holo-omni-web3-card.mjs — render a resolveWeb3() result as a self-contained HTML document (one κ-card).
// The shell opens this as a verified inline tab (blob URL), the SAME way it opens a content-addressed
// object — so a web3 address (ENS · account · token · tx · chain) blooms in the omnibar next to web pages,
// κ-objects and AI answers. Pure: one function, a string in, an HTML string out, no imports, no DOM.
//
// The card is INTERACTIVE without trusting the frame: every actionable element posts a message UP to the
// shell omnibar — { type:"holo-omni:go", value } to resolve another address (the ENS→account hop, a
// token's contract, a tx's from/to), or { type:"holo-omni:find", value } to ask Q (the AI leg). The shell
// owns the authority; the card only suggests. Read-only by design — value-moves never originate here.

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const short = (s, n = 10) => { s = String(s || ""); return s.length > n * 2 + 1 ? s.slice(0, n) + "…" + s.slice(-n) : s; };
const get = (c, k) => c["holo:" + k];

// caption(result) — one honest line of "local facts" about the card (the Q caption, no model).
function caption(r) {
  const c = r.card, t = c["@type"];
  if (t === "holo:Name") return get(c, "address") ? `<b>${esc(get(c, "name"))}</b> resolves to <code>${esc(short(get(c, "address"), 6))}</code> on ${esc(get(c, "chain") || "Ethereum")}.` : `<b>${esc(get(c, "name"))}</b> has no address record.`;
  if (t === "holo:Asset") return `<b>${esc(get(c, "name") || get(c, "symbol"))}</b> — an ${esc(get(c, "standard"))} token on ${esc(get(c, "chain"))}, ${esc(get(c, "decimals"))} decimals.`;
  if (t === "holo:Transaction") return `A <b>${esc(get(c, "status"))}</b> transaction on ${esc(get(c, "chain"))}.`;
  if (t === "holo:Chain") return `${esc(get(c, "chain"))} (${esc(r.caip)})${get(c, "height") != null ? `, at block ${esc(get(c, "height"))}` : ""}.`;
  const nat = get(c, "native"), toks = (get(c, "tokens") || []).length;
  return `Holds <b>${esc(nat ? nat["holo:amount"] : "0")} ${esc(nat ? nat["holo:symbol"] : "")}</b> on ${esc(get(c, "chain"))}${toks ? ` and ${toks} token${toks > 1 ? "s" : ""}` : ""}.`;
}

// askQ(result) — the question the "Ask Q" button hands to the shell's AI leg (Holo Find / Q).
function askQ(r) {
  const c = r.card, t = c["@type"];
  if (t === "holo:Name") return `What is ${get(c, "name")}${get(c, "address") ? " (" + get(c, "address") + ")" : ""}?`;
  if (t === "holo:Asset") return `What is the ${get(c, "name") || get(c, "symbol")} token (${get(c, "address")}) on ${get(c, "chain")}?`;
  if (t === "holo:Transaction") return `Explain this ${get(c, "chain")} transaction ${get(c, "hash") || get(c, "signature")}.`;
  if (t === "holo:Chain") return `What is the ${get(c, "chain")} blockchain?`;
  return `What is the on-chain account ${get(c, "address")} on ${get(c, "chain")}?`;
}

function bodyFor(r) {
  const c = r.card, t = c["@type"], accent = get(c, "accent") || "#3b82f6", chain = get(c, "chain") || r.caip;
  const mine = get(c, "mine") ? `<span class="pill mine">yours</span>` : "";
  const row = (k, v) => v == null || v === "" ? "" : `<div class="row"><div class="k">${esc(k)}</div><div class="v">${v}</div></div>`;
  const goLink = (addr) => `<a class="go" data-go="${esc(addr)}" href="#">${esc(addr)}</a>`;

  if (t === "holo:Name") {
    const addr = get(c, "address"), avatar = get(c, "avatar");
    return { glyph: "@", accent, badge: "name", title: esc(get(c, "name")) + " " + mine, meta: esc(get(c, "ns")) + " · " + esc(r.caip),
      avatar, body: row("resolves to", addr ? goLink(addr) : `<span class="dim">no address record</span>`) + row("resolver", esc(get(c, "resolver"))) + row("note", get(c, "note") ? `<span class="dim">${esc(get(c, "note"))}</span>` : "") };
  }
  if (t === "holo:Asset") {
    return { glyph: "◈", accent, badge: "asset", title: esc((get(c, "name") || "Token") + (get(c, "symbol") ? " · " + get(c, "symbol") : "")), meta: esc(get(c, "standard")) + " · " + esc(chain),
      body: row("contract", goLink(get(c, "address"))) + row("decimals", esc(get(c, "decimals"))) + row("total supply", get(c, "totalSupply") ? esc(get(c, "totalSupply")) + " " + esc(get(c, "symbol") || "") : "") };
  }
  if (t === "holo:Transaction") {
    const st = get(c, "status"), pill = `<span class="pill ${st === "success" ? "good" : st === "failed" ? "bad" : ""}">${esc(st)}</span>`;
    const val = get(c, "value");
    return { glyph: "⇄", accent, badge: "tx", title: "Transaction " + pill, meta: esc(chain) + " · " + esc(r.caip),
      body: row("from", get(c, "from") ? goLink(get(c, "from")) : "") + row("to", get(c, "to") ? goLink(get(c, "to")) : "")
        + row("value", val ? esc(val["holo:amount"]) + " " + esc(val["holo:symbol"] || "") : "")
        + row("signer", get(c, "signer") ? esc(get(c, "signer")) + (get(c, "ed25519Verified") ? ` <span class="pill good">ed25519 ✓</span>` : "") : "")
        + row("block", get(c, "block")) + row("slot", get(c, "slot")) + row("gas used", get(c, "gasUsed")) + row("fee", get(c, "fee") != null ? esc(get(c, "fee")) + " SOL" : "") };
  }
  if (t === "holo:Chain") {
    return { glyph: (chain || "?")[0], accent, badge: "chain", title: esc(chain), meta: esc(r.caip),
      body: row("native", esc(get(c, "symbol"))) + row("height", get(c, "height")) };
  }
  // Account / Contract
  const nat = get(c, "native"), toks = get(c, "tokens") || [];
  const tokRows = toks.length ? `<div class="toks">${toks.map((tk) => `<div class="tok"><span class="sym">${esc(tk["holo:symbol"] || short(tk["holo:mint"] || "", 4))}</span><span class="nm">${esc(tk["holo:name"] || "")}</span><span class="amt">${esc(tk["holo:amount"] || "")}</span></div>`).join("")}</div>` : "";
  return { glyph: (chain || "?")[0], accent, badge: "account",
    title: esc(short(get(c, "address"), 8)) + " " + mine, meta: esc(t === "holo:Contract" ? "contract" : "account") + " · " + esc(chain),
    big: nat ? `<div class="big">${esc(nat["holo:amount"])}<small>${esc(nat["holo:symbol"])}</small></div>` : "",
    body: row("address", esc(get(c, "address"))) + row("nonce", get(c, "nonce")) + (toks.length ? row(`tokens (${toks.length})`, tokRows) : "") };
}

// web3CardDoc(result) → a full standalone HTML document string for one resolved web3 κ-card.
export function web3CardDoc(r) {
  if (!r || !r.ok || !r.card) {
    return `<!doctype html><meta charset="utf-8"><body style="margin:0;background:#05070d;color:#f87171;font:14px ui-monospace,monospace;padding:28px">Could not resolve · ${esc((r && r.reason) || "unknown")}</body>`;
  }
  const f = bodyFor(r), explorer = get(r.card, "explorer"), kappa = r.kappa || "", rid = r.receipt && r.receipt.id;
  const question = esc(askQ(r));
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  :root{--bg:#05070d;--panel:#0c111b;--panel2:#121a28;--line:#1d2840;--ink:#e8eef9;--dim:#7d8aa6;--good:#34d399;--bad:#f87171;--warn:#fbbf24;--vio:#a78bfa;--mono:ui-monospace,"SF Mono",Menlo,Consolas,monospace}
  *{box-sizing:border-box} html,body{margin:0} body{background:radial-gradient(900px 500px at 50% -10%,#0b1426,var(--bg) 60%);color:var(--ink);font:15px/1.5 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;min-height:100vh;padding:26px}
  .card{max-width:680px;margin:0 auto;background:var(--panel);border:1px solid var(--line);border-radius:16px;overflow:hidden;box-shadow:0 10px 48px rgba(0,0,0,.5)}
  .hd{display:flex;align-items:center;gap:13px;padding:16px 20px;border-bottom:1px solid var(--line);background:var(--panel2)}
  .glyph{width:38px;height:38px;border-radius:10px;display:grid;place-items:center;font-weight:700;font-size:16px;color:#0a0f1a;flex:none}
  .avatar{width:48px;height:48px;border-radius:12px;object-fit:cover;background:#0a1120;border:1px solid var(--line);flex:none}
  .ttl{font-weight:650;font-size:16px;letter-spacing:-.01em;word-break:break-all} .meta{color:var(--dim);font:11.5px var(--mono);margin-top:1px}
  .badge{font:10.5px var(--mono);padding:3px 9px;border-radius:7px;border:1px solid #3b2f63;color:var(--vio);text-transform:uppercase;letter-spacing:.04em;margin-left:auto;flex:none}
  .body{padding:14px 20px 16px} .big{font:600 32px/1 system-ui;letter-spacing:-.02em;margin:2px 0 6px} .big small{font-size:15px;color:var(--dim);font-weight:500;margin-left:6px}
  .row{display:grid;grid-template-columns:108px 1fr;gap:14px;padding:8px 0;border-bottom:1px solid #131a28;align-items:start} .row:last-child{border:0}
  .k{color:var(--dim);font-size:12.5px;padding-top:1px} .v{font:12.5px var(--mono);color:var(--ink);word-break:break-all} .dim{color:var(--dim)} code{font:12.5px var(--mono);color:#8ea6cf}
  a.go{color:#7fb0ff;text-decoration:none;cursor:pointer} a.go:hover{text-decoration:underline}
  .pill{font:11px var(--mono);padding:2px 9px;border-radius:6px;border:1px solid var(--line)} .pill.good{color:var(--good);border-color:#1f4f3f;background:#0c1c16} .pill.bad{color:var(--bad);border-color:#5a2230;background:#1c0f12} .pill.mine{color:var(--warn);border-color:#4a3b16;background:#1c160c}
  .toks{display:grid;gap:5px;margin-top:6px} .tok{display:flex;gap:10px;align-items:center;font:12.5px var(--mono);padding:6px 10px;background:#0a1120;border:1px solid var(--line);border-radius:8px} .sym{color:var(--ink);font-weight:600;min-width:62px} .amt{margin-left:auto;color:#cdd7ea} .nm{color:var(--dim);font-size:11px}
  .seal{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:11px 20px;border-top:1px solid var(--line);background:#080d16;font:11px var(--mono);color:var(--dim)} .seal .lk{color:#566c8a} .seal .vv{color:#8ea6cf} .seal .ok{color:var(--good)} .seal a{margin-left:auto;color:var(--ink);text-decoration:none;border:1px solid var(--line);border-radius:8px;padding:5px 12px} .seal a:hover{border-color:#3b82f6}
  .q{display:flex;gap:11px;align-items:center;padding:13px 20px;border-top:1px solid var(--line);background:#0a1322} .qm{color:var(--vio);font-weight:700} .qt{font-size:13px;color:#cbd6ea;flex:1} .qt .tag{color:var(--dim);font:11px var(--mono)}
  .ask{border:1px solid #3b2f63;background:#140f24;color:#d6c8ff;border-radius:8px;padding:6px 13px;font:12px var(--mono);cursor:pointer} .ask:hover{border-color:var(--vio)}
</style></head><body>
<div class="card">
  <div class="hd">
    ${f.avatar ? `<img class="avatar" src="${esc(f.avatar)}" onerror="this.style.display='none'">` : `<div class="glyph" style="background:${esc(f.accent)}">${esc(f.glyph)}</div>`}
    <div><div class="ttl">${f.title}</div><div class="meta">${f.meta}</div></div><span class="badge">${esc(f.badge)}</span>
  </div>
  <div class="body">${f.big || ""}${f.body}</div>
  <div class="seal"><span class="lk">κ</span> <span class="vv">${esc(short(kappa, 14))}</span>${rid ? ` <span class="ok">✓ receipt</span> <span class="vv">${esc(short(rid, 8))}</span>` : ""}<span class="ok"> · L5 sealed</span>${explorer ? `<a href="${esc(explorer)}" target="_blank" rel="noopener">Explorer ↗</a>` : ""}</div>
  <div class="q"><span class="qm">Q</span><span class="qt">${caption(r)} <span class="tag">· local facts</span></span><button class="ask" id="askq">Ask Q ↗</button></div>
</div>
<script>
  const post=(type,value)=>{try{parent.postMessage({type,value},"*")}catch(e){}};
  document.querySelectorAll("a.go").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();post("holo-omni:go",a.dataset.go)}));
  const aq=document.getElementById("askq"); if(aq) aq.addEventListener("click",()=>post("holo-omni:find",${JSON.stringify(question)}));
</script>
</body></html>`;
}

export default { web3CardDoc };
