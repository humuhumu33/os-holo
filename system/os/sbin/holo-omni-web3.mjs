// holo-omni-web3.mjs — the WEB3 leg of the omni resolver. One function, resolveWeb3(ref), turns ANY
// web3 address into the SAME kind of thing every other omni leg produces: a sealed, κ-addressed object
// (a JSON-LD "card") whose κ = did:holo:sha256:H(jcs(card)), plus a re-derivable egress receipt.
//
//   vitalik.eth                         → ENS name      → resolved address + avatar + records
//   0x<40 hex>                          → EVM account   → native balance · nonce · EOA/contract
//   0x<40 hex> (with code)              → EVM asset     → ERC-20 name/symbol/decimals/totalSupply
//   0x<64 hex>                          → EVM tx        → decoded from/to/value/status/gasUsed
//   <base58 32–44>                      → SOL account   → SOL balance · SPL token holdings
//   <base58 86–90>                      → SOL tx        → ed25519-verified signer · slot · status
//   eip155:1:0x… / solana:…:addr        → CAIP-10       → routed account on that chain
//   eip155:1 / solana:…                 → CAIP-2        → chain identity (name · latest block)
//
// CAIP (chain-agnostic) is the internal normal form, so every chain folds into one resolver, not N
// special cases. Reads are governed by a read-only host allowlist; each read seals a hosc:Egress receipt
// (read-only by default — nothing here moves value; value-moves go through the wallet bridge with human
// approval). Pure ESM, no DOM, browser+Node. It REUSES the existing chain crypto (holo-eth / holo-solana)
// and the existing κ-sealer (holo-q-receipt) — this file is glue, not a new engine.

import { Rpc, encodeCall, decodeWord, decodeString, selector, namehash, isAddress, isHash32 } from "../usr/lib/holo/holo-eth.js";
import { SolanaSource, isSolAddress, isSolSig, fmtSol, LAMPORTS } from "../usr/lib/holo/holo-solana.js";
import { address, jcs, sha256hex } from "../usr/lib/holo/q/holo-q-receipt.mjs";

// ── CAIP-2 chain table (the normal form). EVM chains share one reader; Solana has its own. ──────────
// caip → { name, symbol, decimals, rpcs (failover, first to answer wins), explorer, accent, kind }.
export const W3_CHAINS = {
  "eip155:1":      { name: "Ethereum",  symbol: "ETH",  decimals: 18, kind: "evm", accent: "#627eea", explorer: "https://etherscan.io",            rpcs: ["https://ethereum-rpc.publicnode.com", "https://eth.llamarpc.com", "https://rpc.ankr.com/eth"] },
  "eip155:8453":   { name: "Base",      symbol: "ETH",  decimals: 18, kind: "evm", accent: "#0052ff", explorer: "https://basescan.org",             rpcs: ["https://base-rpc.publicnode.com", "https://base.llamarpc.com", "https://mainnet.base.org"] },
  "eip155:42161":  { name: "Arbitrum",  symbol: "ETH",  decimals: 18, kind: "evm", accent: "#28a0f0", explorer: "https://arbiscan.io",              rpcs: ["https://arbitrum-one-rpc.publicnode.com", "https://arb1.arbitrum.io/rpc"] },
  "eip155:10":     { name: "Optimism",  symbol: "ETH",  decimals: 18, kind: "evm", accent: "#ff0420", explorer: "https://optimistic.etherscan.io",  rpcs: ["https://optimism-rpc.publicnode.com", "https://mainnet.optimism.io"] },
  "eip155:137":    { name: "Polygon",   symbol: "POL",  decimals: 18, kind: "evm", accent: "#8247e5", explorer: "https://polygonscan.com",          rpcs: ["https://polygon-bor-rpc.publicnode.com", "https://polygon.llamarpc.com"] },
  "eip155:56":     { name: "BNB Chain", symbol: "BNB",  decimals: 18, kind: "evm", accent: "#f0b90b", explorer: "https://bscscan.com",              rpcs: ["https://bsc-rpc.publicnode.com", "https://binance.llamarpc.com"] },
  "eip155:43114":  { name: "Avalanche", symbol: "AVAX", decimals: 18, kind: "evm", accent: "#e84142", explorer: "https://snowtrace.io",             rpcs: ["https://avalanche-c-chain-rpc.publicnode.com", "https://api.avax.network/ext/bc/C/rpc"] },
  "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": { name: "Solana", symbol: "SOL", decimals: 9, kind: "sol", accent: "#14f195", explorer: "https://solscan.io", rpcs: ["https://api.mainnet-beta.solana.com", "https://solana-rpc.publicnode.com"] },
};
const ETH = "eip155:1";
const SOL = "solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp";
const ENS_REGISTRY = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";   // ENS Registry (mainnet)
const ZERO_ADDR = "0x0000000000000000000000000000000000000000";

// Hosts a read-only resolve may reach without an explicit grant (the "balances/metadata resolve freely"
// rule). Anything not on this list is default-deny — the caller must pass an extended allowlist.
const READ_HOSTS = new Set();
for (const c of Object.values(W3_CHAINS)) for (const u of c.rpcs) { try { READ_HOSTS.add(new URL(u).host); } catch {} }
READ_HOSTS.add("metadata.ens.domains");

// ── classify (no network) ────────────────────────────────────────────────────────────────────────
// parseWeb3Ref(s) → { kind, … } | null  — null means "not a web3 address, let another leg try".
//   kinds: ens-name · evm-account · evm-tx · sol-account · sol-tx · caip-account · caip-chain
export function parseWeb3Ref(ref) {
  const s = String(ref || "").trim();
  if (!s) return null;
  // CAIP-10 account:  <namespace>:<reference>:<address>
  let m = s.match(/^(eip155|solana|bip122):([-_a-zA-Z0-9]{1,32}):(.+)$/);
  if (m) {
    const caip = m[1] + ":" + m[2];
    return { kind: "caip-account", caip, addr: m[3].trim() };
  }
  // CAIP-2 chain:  <namespace>:<reference>
  m = s.match(/^(eip155|solana|bip122):([-_a-zA-Z0-9]{1,32})$/);
  if (m) return { kind: "caip-chain", caip: m[1] + ":" + m[2] };
  // ENS / SNS name
  if (/^[a-z0-9-]([a-z0-9-]*\.)+(eth|sol)$/i.test(s)) {
    const tld = s.toLowerCase().endsWith(".sol") ? "sns" : "ens";
    return { kind: "ens-name", name: s.toLowerCase(), ns: tld };
  }
  // EVM tx hash (0x + 64 hex) — distinct from a bare κ (which is did:holo:… / sha256:… , no 0x)
  if (isHash32(s)) return { kind: "evm-tx", hash: s.toLowerCase(), caip: ETH };
  // EVM account / contract (0x + 40 hex)
  if (isAddress(s)) return { kind: "evm-account", addr: s, caip: ETH };
  // Solana signature (base58, 86–90)
  if (isSolSig(s)) return { kind: "sol-tx", sig: s, caip: SOL };
  // Solana account (base58, 32–44)
  if (isSolAddress(s)) return { kind: "sol-account", addr: s, caip: SOL };
  return null;
}

// ── governed read (default-deny by host) + sealed receipt ──────────────────────────────────────────
function hostOf(u) { try { return new URL(u).host; } catch { return ""; } }
function evmRpc(rpcs, allow) {
  return { async call(method, params) {
    let err;
    for (const u of rpcs) {
      if (!allow.has(hostOf(u))) { err = new Error("egress refused (default-deny): " + hostOf(u)); continue; }
      try { return await new Rpc(u, 15000).call(method, params); } catch (e) { err = e; }
    }
    throw err || new Error("all RPC endpoints failed");
  } };
}
// sealEgress(used, generatedKappa) → re-derivable hosc:Egress receipt for one read (Law L4/P2).
async function sealEgress({ verb, hosts, generated, caller = "omni" }) {
  const body = {
    "@context": { prov: "http://www.w3.org/ns/prov#", hosc: "https://hologram.os/ns/conscience#" },
    "@type": ["prov:Activity", "hosc:Egress"],
    "hosc:caller": caller, "hosc:verb": verb, "hosc:hosts": [...hosts].sort(),
    "hosc:grant": "read-only-allowlist", "hosc:outcome": "accept",
    ...(generated ? { "prov:generated": { "@id": generated } } : {}),
  };
  return { id: await address(body), body };
}
// seal a card → its κ is the content address of the card itself (Law L5).
async function sealCard(card) { return await address(card); }

const W3 = { "@context": { schema: "https://schema.org/", caip: "https://chainagnostic.org/", holo: "https://hologram.os/ns/web3#" } };

// ── EVM helpers ───────────────────────────────────────────────────────────────────────────────────
const weiToUnit = (hexWei, decimals) => {
  let v; try { v = BigInt(hexWei || "0x0"); } catch { v = 0n; }
  const base = 10n ** BigInt(decimals);
  const whole = v / base, frac = v % base;
  const fs = frac.toString().padStart(decimals, "0").slice(0, 6).replace(/0+$/, "");
  return whole.toString() + (fs ? "." + fs : "");
};
async function evmCall(rpc, to, sig, args = []) {
  return rpc.call("eth_call", [{ to, data: encodeCall(sig, args) }, "latest"]);   // encodeCall already 0x-prefixes
}
async function tryEvmString(rpc, to, sig) { try { const r = await evmCall(rpc, to, sig); return decodeString(r) || null; } catch { return null; } }
async function tryEvmUint(rpc, to, sig)   { try { const r = await evmCall(rpc, to, sig); return decodeWord(r, "uint256").toString(); } catch { return null; } }

// resolve an ENS name → { address, resolver } via Registry.resolver(node) then resolver.addr(node).
async function ensResolve(rpc, name) {
  const node = namehash(name);                                 // namehash already returns 0x-prefixed hex
  const resolverHex = await evmCall(rpc, ENS_REGISTRY, "resolver(bytes32)", [node]);
  const resolver = decodeWord(resolverHex, "address");
  if (!resolver || resolver.toLowerCase() === ZERO_ADDR) return { address: null, resolver: null, node };
  let addr = null;
  try { addr = decodeWord(await evmCall(rpc, resolver, "addr(bytes32)", [node]), "address"); } catch {}
  if (addr && addr.toLowerCase() === ZERO_ADDR) addr = null;
  return { address: addr, resolver, node };
}

// ── the resolver ────────────────────────────────────────────────────────────────────────────────
// resolveWeb3(ref, cfg) → { ok, kind:"web3", subkind, caip, kappa, card, receipt, ms } | { ok:false, … }
// cfg: { allow?:Set<host>, mine?:{evm?,solana?}, caller? }  — allow extends the read allowlist.
export async function resolveWeb3(ref, cfg = {}) {
  const t0 = (typeof performance !== "undefined" && performance.now) ? performance.now() : 0;
  const ms = () => (t0 ? Math.round((performance.now ? performance.now() : 0) - t0) : 0);
  const p = parseWeb3Ref(ref);
  if (!p) return { ok: false, kind: "web3", reason: "not a web3 address", ms: ms() };
  const allow = new Set(READ_HOSTS); if (cfg.allow) for (const h of cfg.allow) allow.add(h);
  const mine = cfg.mine || {};
  const caller = cfg.caller || "omni";
  try {
    let out;
    if (p.kind === "ens-name")        out = await doEnsName(p, allow, mine);
    else if (p.kind === "caip-chain") out = await doChain(p.caip, allow);
    else if (p.kind === "caip-account") out = await doAccount(p.caip, p.addr, allow, mine);
    else if (p.kind === "evm-account")  out = await doAccount(p.caip, p.addr, allow, mine);
    else if (p.kind === "evm-tx")       out = await doEvmTx(p.caip, p.hash, allow);
    else if (p.kind === "sol-account")  out = await doAccount(p.caip, p.addr, allow, mine);
    else if (p.kind === "sol-tx")       out = await doSolTx(p.caip, p.sig, allow);
    else return { ok: false, kind: "web3", reason: "unhandled web3 kind: " + p.kind, ms: ms() };
    const kappa = await sealCard(out.card);
    const receipt = await sealEgress({ verb: "web3.read." + out.subkind, hosts: out.hosts, generated: kappa, caller });
    return { ok: true, kind: "web3", subkind: out.subkind, caip: out.caip || p.caip, kappa, card: out.card, receipt, ms: ms() };
  } catch (e) {
    return { ok: false, kind: "web3", subkind: p.kind, reason: String((e && e.message) || e), ms: ms() };
  }
}

// account: native balance + EOA/contract (EVM) or SOL balance + SPL holdings (Solana). For a contract,
// also reads ERC-20 metadata so an asset address blooms as a token card.
async function doAccount(caip, addr, allow, mine) {
  const chain = W3_CHAINS[caip] || W3_CHAINS[ETH];
  const hosts = new Set();
  if (chain.kind === "sol") {
    const url = chain.rpcs.find((u) => allow.has(hostOf(u)));
    if (!url) throw new Error("egress refused (default-deny) for Solana RPC");
    hosts.add(hostOf(url));
    const src = new SolanaSource(url);
    const [lamports, tokens] = await Promise.all([src.balance(addr), src.tokenAccounts(addr).catch(() => [])]);
    // name the top few SPL holdings (on-chain Metaplex metadata, cached)
    const top = tokens.sort((a, b) => (+b.amount || 0) - (+a.amount || 0)).slice(0, 8);
    for (const t of top) { try { const meta = await src.tokenMeta(t.mint); t.symbol = meta.symbol; t.name = meta.name; } catch {} }
    const card = {
      ...W3, "@type": "holo:Account", "holo:caip": caip, "holo:chain": chain.name, "holo:accent": chain.accent,
      "holo:address": addr, "holo:explorer": chain.explorer + "/account/" + addr,
      "holo:native": { "holo:symbol": "SOL", "holo:amount": fmtSol(lamports), "holo:raw": String(lamports) },
      "holo:tokens": top.map((t) => ({ "holo:mint": t.mint, "holo:symbol": t.symbol || null, "holo:name": t.name || null, "holo:amount": t.amount })),
      ...(mine.solana && mine.solana === addr ? { "holo:mine": true } : {}),
    };
    return { subkind: "account", caip, card, hosts };
  }
  // EVM
  const rpc = evmRpc(chain.rpcs, allow); for (const u of chain.rpcs) if (allow.has(hostOf(u))) hosts.add(hostOf(u));
  const [balHex, code, nonceHex] = await Promise.all([
    rpc.call("eth_getBalance", [addr, "latest"]),
    rpc.call("eth_getCode", [addr, "latest"]).catch(() => "0x"),
    rpc.call("eth_getTransactionCount", [addr, "latest"]).catch(() => "0x0"),
  ]);
  const isContract = code && code !== "0x" && code !== "0x0";
  const base = {
    ...W3, "holo:caip": caip, "holo:chain": chain.name, "holo:accent": chain.accent,
    "holo:address": addr, "holo:explorer": chain.explorer + "/address/" + addr,
    "holo:native": { "holo:symbol": chain.symbol, "holo:amount": weiToUnit(balHex, chain.decimals), "holo:raw": String(BigInt(balHex || "0x0")) },
    "holo:nonce": Number(BigInt(nonceHex || "0x0")),
    ...(mine.evm && mine.evm.toLowerCase() === addr.toLowerCase() ? { "holo:mine": true } : {}),
  };
  if (isContract) {
    const [name, symbol, dec, supply] = await Promise.all([
      tryEvmString(rpc, addr, "name()"), tryEvmString(rpc, addr, "symbol()"),
      tryEvmUint(rpc, addr, "decimals()"), tryEvmUint(rpc, addr, "totalSupply()"),
    ]);
    if (symbol || name) {
      const decimals = dec != null ? Number(dec) : 18;
      const card = { ...base, "@type": "holo:Asset", "holo:standard": "ERC-20", "holo:name": name, "holo:symbol": symbol,
        "holo:decimals": decimals, "holo:totalSupply": supply ? weiToUnit("0x" + BigInt(supply).toString(16), decimals) : null };
      return { subkind: "asset", caip, card, hosts };
    }
    return { subkind: "contract", caip, card: { ...base, "@type": "holo:Contract", "holo:codeSize": (code.length - 2) / 2 }, hosts };
  }
  return { subkind: "account", caip, card: { ...base, "@type": "holo:Account", "holo:tokens": [] }, hosts };
}

async function doEnsName(p, allow, mine) {
  if (p.ns === "sns") {                                   // .sol — detected; on-chain SNS resolution not wired here
    const card = { ...W3, "@type": "holo:Name", "holo:name": p.name, "holo:ns": "SNS", "holo:caip": SOL,
      "holo:note": "SNS (.sol) name — resolution via Bonfida is not wired in this build" };
    return { subkind: "name", caip: SOL, card, hosts: new Set() };
  }
  const chain = W3_CHAINS[ETH]; const rpc = evmRpc(chain.rpcs, allow);
  const hosts = new Set(); for (const u of chain.rpcs) if (allow.has(hostOf(u))) hosts.add(hostOf(u));
  const { address: addr, resolver, node } = await ensResolve(rpc, p.name);
  const card = {
    ...W3, "@type": "holo:Name", "holo:name": p.name, "holo:ns": "ENS", "holo:caip": ETH,
    "holo:node": node, "holo:resolver": resolver,
    "holo:address": addr, "holo:avatar": addr ? "https://metadata.ens.domains/mainnet/avatar/" + p.name : null,
    "holo:explorer": addr ? chain.explorer + "/address/" + addr : "https://app.ens.domains/name/" + p.name,
    ...(addr && mine.evm && mine.evm.toLowerCase() === addr.toLowerCase() ? { "holo:mine": true } : {}),
  };
  if (addr) hosts.add("metadata.ens.domains");
  return { subkind: "name", caip: ETH, card, hosts };
}

async function doEvmTx(caip, hash, allow) {
  const chain = W3_CHAINS[caip] || W3_CHAINS[ETH]; const rpc = evmRpc(chain.rpcs, allow);
  const hosts = new Set(); for (const u of chain.rpcs) if (allow.has(hostOf(u))) hosts.add(hostOf(u));
  const [tx, rcpt] = await Promise.all([
    rpc.call("eth_getTransactionByHash", [hash]),
    rpc.call("eth_getTransactionReceipt", [hash]).catch(() => null),
  ]);
  if (!tx) throw new Error("transaction not found on " + chain.name);
  const card = {
    ...W3, "@type": "holo:Transaction", "holo:caip": caip, "holo:chain": chain.name, "holo:accent": chain.accent,
    "holo:hash": hash, "holo:from": tx.from, "holo:to": tx.to,
    "holo:value": { "holo:symbol": chain.symbol, "holo:amount": weiToUnit(tx.value, chain.decimals) },
    "holo:block": tx.blockNumber ? Number(BigInt(tx.blockNumber)) : null,
    "holo:status": rcpt ? (BigInt(rcpt.status || "0x0") === 1n ? "success" : "failed") : "pending",
    "holo:gasUsed": rcpt && rcpt.gasUsed ? Number(BigInt(rcpt.gasUsed)) : null,
    "holo:explorer": chain.explorer + "/tx/" + hash,
  };
  return { subkind: "tx", caip, card, hosts };
}

async function doSolTx(caip, sig, allow) {
  const chain = W3_CHAINS[SOL]; const url = chain.rpcs.find((u) => allow.has(hostOf(u)));
  if (!url) throw new Error("egress refused (default-deny) for Solana RPC");
  const hosts = new Set([hostOf(url)]); const src = new SolanaSource(url);
  const tx = await src.tx(sig);
  if (!tx) throw new Error("transaction not found on Solana");
  const k = tx._kappa || null;
  const card = {
    ...W3, "@type": "holo:Transaction", "holo:caip": SOL, "holo:chain": "Solana", "holo:accent": chain.accent,
    "holo:signature": sig, "holo:slot": tx.slot || null, "holo:blockTime": tx.blockTime || null,
    "holo:status": tx.meta && tx.meta.err ? "failed" : "success",
    "holo:fee": tx.meta && tx.meta.fee != null ? (tx.meta.fee / LAMPORTS).toFixed(9) : null,
    ...(k ? { "holo:signer": k.signer, "holo:ed25519Verified": k.ok, "holo:contentHash": k.contentHash } : {}),
    "holo:explorer": chain.explorer + "/tx/" + sig,
  };
  return { subkind: "tx", caip: SOL, card, hosts };
}

async function doChain(caip, allow) {
  const chain = W3_CHAINS[caip]; if (!chain) throw new Error("unknown chain " + caip);
  const hosts = new Set();
  let height = null;
  if (chain.kind === "evm") {
    const rpc = evmRpc(chain.rpcs, allow); for (const u of chain.rpcs) if (allow.has(hostOf(u))) hosts.add(hostOf(u));
    try { height = Number(BigInt(await rpc.call("eth_blockNumber", []))); } catch {}
  } else {
    const url = chain.rpcs.find((u) => allow.has(hostOf(u))); if (url) { hosts.add(hostOf(url)); try { height = await new SolanaSource(url).getSlot(); } catch {} }
  }
  const card = { ...W3, "@type": "holo:Chain", "holo:caip": caip, "holo:chain": chain.name, "holo:symbol": chain.symbol,
    "holo:accent": chain.accent, "holo:explorer": chain.explorer, "holo:height": height };
  return { subkind: "chain", caip, card, hosts };
}

export default { parseWeb3Ref, resolveWeb3, W3_CHAINS };
