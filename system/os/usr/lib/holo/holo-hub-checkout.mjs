// holo-hub-checkout.mjs — Holo Hub Stage 5 (ADR-0094): OWN + PAY, pure COMPOSITION of seams that
// already exist — Holo Own (Titles, ADR-0053) + the Holo Wallet rail (ADR-0068, the OS-wide
// default-deny, human-approval signing seam). No new payment path, no parallel ledger (Law L4).
//
//   • Own a product  → mint a portable Title over the product κ (the buyer holds it, verifiable).
//   • Buy a product  → settle ONLY against the seller's proven listing (L5), then move real value
//                       ONLY through the running Holo Wallet (walletRail → holo-wallet-bridge →
//                       the human approves in the wallet; the key never leaves it). Default-deny:
//                       no wallet / a decline / an unproven listing ⇒ nothing moves and nothing is
//                       finalized.
//
// Identity (who signs Titles) is a self-sovereign did:key principal (holo-identity); payment (who
// sends value) is the wallet — two real seams, cleanly separated. Pure + isomorphic: the browser
// uses walletRail (the live wallet); the witness uses mockRail/declineRail (offline, deterministic).

import { mint, settle, verifyChain, resolveOwner, toDid } from "./holo-own.mjs";
import { walletRail, mockRail, declineRail, settleVia } from "./holo-own-rail.js";

const own = { settle, mint, verifyChain };

// publishListing: the seller asserts a Title over the product κ — the offer the store sells.
export async function publishListing({ productKappa, seller, rights = { offer: "sale" } }) {
  return mint({ owned: productKappa, rights }, seller);
}

// ownFree: a free product — the buyer mints their own portable ownership Title over the product κ.
export async function ownFree({ productKappa, buyer, rights = { license: "use" } }) {
  const title = await mint({ owned: productKappa, rights }, buyer);
  return { ok: true, paid: false, free: true, title, owner: toDid(await resolveOwner([title])) };
}

// buyProduct: pay the seller through the Holo Wallet rail, then the buyer holds a Title.
//   rail   — walletRail({chain}) in the browser (→ the live Holo Wallet); mockRail()/declineRail() in tests.
//   payTo  — the seller's chain payout address (defaults to the voucher payee for offline tests).
export async function buyProduct({ productKappa, listing, buyer, price, currency = "USDT0", chain = "plasma", payTo = null, rail }) {
  if (!rail) throw new Error("buyProduct needs a wallet rail — value moves ONLY through Holo Wallet (Law L4)");
  // the order commits to the seller's PROVEN listing head (which owns the product κ) + the price.
  // (kept to the witnessed Order shape — subject + amount; κ-ref fields stay on the substrate axis.)
  const order = { subject: listing["@id"], amount: { value: String(price), currency } };
  // settle (verifyChain inside, L5) → a voucher; then move real value via the wallet rail (default-deny).
  // A tampered/unproven listing settles nothing AND pays nothing; a wallet decline throws (nothing finalized).
  const settled = await settleVia(own, { order, chain: { titles: [listing] } }, rail, payTo);
  if (!settled) return { ok: false, paid: false, reason: "listing did not prove (L5) — nothing paid" };
  // the buyer now holds a portable ownership Title over the product κ, bound to the paid voucher.
  const title = await mint({ owned: productKappa, rights: { license: "use", paidVoucher: settled["@id"] } }, buyer);
  return { ok: true, paid: true, voucher: settled, payment: settled.payment, txid: settled.txid,
    title, owner: toDid(await resolveOwner([title])) };
}

export { walletRail, mockRail, declineRail, verifyChain, resolveOwner, toDid };
