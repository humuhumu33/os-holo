// holo-hub-checkout-witness.mjs — proves Holo Hub Stage 5 (ADR-0094): OWN + PAY, composed from the
// REAL Holo Own (Titles) + the REAL Holo Wallet rail seam. Uses real WebCrypto principals
// (holo-identity) and a REAL product κ from Stage 2 (holo-hub) — so "own the product" means own the
// exact κ the store renders. The wallet rail is mocked offline (the witness can't pop a wallet
// dialog) — but it IS the holo-wallet-bridge seam the browser uses; declineRail proves default-deny.
//
// Checks: a free product mints a portable Title that re-derives + resolves its owner (L5) · a paid
// buy settles ONLY against the seller's proven listing, pays the seller through the rail, and the
// buyer holds a Title over the product κ · the voucher κ is idempotent (same order → same txid) ·
// a TAMPERED listing proves nothing → pays nothing · a wallet DECLINE finalizes nothing
// (default-deny) · value cannot move without a wallet rail · the whole flow is 0-network.

import { publishListing, ownFree, buyProduct, mockRail, declineRail, verifyChain, resolveOwner } from "../os/usr/lib/holo/holo-hub-checkout.mjs";
import { enroll } from "../os/usr/lib/holo/holo-identity.mjs";
import { mapCatalog } from "../os/usr/lib/holo/holo-hub.mjs";
import { blakeLabel } from "../os/usr/lib/holo/holo-object.mjs";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const checks = {}; let pass = 0, fail = 0, kn = 0;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const ok = (n, c, x = "") => { (c ? pass++ : fail++); checks[(slug(n) || "check") + "-" + (++kn)] = !!c; console.log((c ? "  ok  " : " FAIL ") + n + (x ? "  — " + x : "")); };

// 0-network guard (Law L4)
let fetches = 0; globalThis.fetch = () => { fetches++; throw new Error("checkout must be 0-network"); };

// a REAL product κ from the catalog (Stage 2) — own the exact κ the store renders
const index = JSON.parse(readFileSync(join(here, "..", "..", "..", "Hologram Apps", "apps", "index.jsonld"), "utf8"));
const { products } = mapCatalog({ index, store: new Map() });
const storeKappa = products[0].id;               // did:holo:sha256:… (the axis the STORE shows)
const productKappa = blakeLabel(products[0]);    // blake3:… (the SAME content on the substrate axis Titles use)
ok("a real product κ is available from the Stage-2 catalog (dual-axis: sha256 shown, blake3 owned)",
  storeKappa.startsWith("did:holo:sha256:") && productKappa.startsWith("blake3:"), productKappa.slice(0, 26) + "…");

// real, self-sovereign principals (keys minted + held; never a server account)
const seller = await enroll({ label: "seller", passphrase: "s" });
const buyer  = await enroll({ label: "buyer",  passphrase: "b" });

// 1 · publish a listing (the seller asserts a Title over the product κ)
const listing = await publishListing({ productKappa, seller });
const lv = await verifyChain([listing]);
ok("listing: a Title over the product κ re-derives + self-verifies (L5)", lv.ok && listing.owned === productKappa);

// 2 · own a FREE product → the buyer holds a portable Title over the product κ
const free = await ownFree({ productKappa, buyer });
ok("free own: the buyer holds a Title over the product κ; owner resolves to the buyer",
  free.ok && free.title.owned === productKappa && (await resolveOwner([free.title])) === buyer.kappa.replace(/^did:holo:/, ""));

// 3 · BUY → settle against the proven listing + pay the seller through the (mock) wallet rail
const bought = await buyProduct({ productKappa, listing, buyer, price: 4.99, payTo: seller.kappa.replace(/^did:holo:/, ""), rail: mockRail() });
ok("buy: settles against the proven listing + pays via the wallet rail; buyer gets a Title",
  bought.ok && bought.paid && !!bought.payment?.txid && bought.title.owned === productKappa);
ok("buy: the payment pays the SELLER (voucher payee = the listing owner)", bought.voucher.payee === seller.kappa.replace(/^did:holo:/, ""));
ok("buy: the buyer's ownership Title binds the paid voucher + re-derives (L5)",
  (await verifyChain([bought.title])).ok && bought.title.rights?.paidVoucher === bought.voucher["@id"]);

// 4 · idempotent voucher κ (same order → same txid; pay-once guard, ADR-048)
const again = await buyProduct({ productKappa, listing, buyer, price: 4.99, payTo: seller.kappa.replace(/^did:holo:/, ""), rail: mockRail() });
ok("settlement voucher κ is idempotent (identical order → identical voucher id)", again.voucher["@id"] === bought.voucher["@id"]);

// 5 · TAMPER: a listing whose bytes were altered proves nothing → pays nothing
const forged = { ...listing, owned: "blake3:" + "0".repeat(64) };   // flip the owned κ (valid axis), keep the old id
const bad = await buyProduct({ productKappa, listing: forged, buyer, price: 4.99, rail: mockRail() });
ok("tamper REFUSED: a listing that does not re-derive settles nothing + pays nothing (L5)", bad.ok === false && bad.paid === false);

// 6 · DEFAULT-DENY: the wallet declines (or none is open) → nothing is finalized
let declined = false;
try { await buyProduct({ productKappa, listing, buyer, price: 4.99, payTo: seller.kappa.replace(/^did:holo:/, ""), rail: declineRail() }); }
catch (e) { declined = /declin/i.test(e.message); }
ok("default-deny: a wallet decline throws → no payment, no ownership finalized", declined);

// 7 · value cannot move without the wallet rail
let needsRail = false;
try { await buyProduct({ productKappa, listing, buyer, price: 1 }); } catch (e) { needsRail = /wallet rail/i.test(e.message); }
ok("value moves ONLY through Holo Wallet (no rail → refused, Law L4)", needsRail);

ok("0-network: the whole own+pay flow made no fetch", fetches === 0, fetches + " fetches");

// ── emit the EARL result + exit ──
const result = { "@type": "earl:TestResult", witnessed: fail === 0,
  subject: "Holo Hub — own + pay through Holo Own + the Holo Wallet rail (ADR-0094 Stage 5)",
  passed: pass, failed: fail, productKappa, checks };
writeFileSync(join(here, "holo-hub-checkout-witness.result.json"), JSON.stringify(result, null, 2) + "\n");
console.log("\n" + (fail === 0 ? "PASS" : "FAIL") + " — " + pass + " ok, " + fail + " fail");
process.exit(fail === 0 ? 0 : 1);
