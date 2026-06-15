// holo-journey.js — the sovereign journey state for the Q Companion (ADR: q-companion-journey.md).
//
// Q is the user's guide from the first meeting and the quiet keeper of their story. This module is the
// ONE source of "where am I in my story": the milestones crossed, whether Q has introduced itself, and
// which per-stage invitations have already been offered (so each fires once, ever).
//
// Sovereign + on-device: state lives in localStorage on this device only — nothing leaves (Law L1).
// Content-addressed: kappa() seals the milestone set to a did:holo:sha256 you can re-derive (Law L5),
// so "my story" is a verifiable object, not a server's record. No dependencies; classic <script>,
// exposes window.HoloJourney. Load it BEFORE holo-voice.js so the first meeting can read it.
//
//   <script defer src="/_shared/holo-journey.js"></script>   (exposes window.HoloJourney)

(function () {
  var W = window; if (W.HoloJourney) return;
  var KEY = "holo.journey.v1";
  // the five stages of the journey, in order (Arrive→Read→Write→Own→Explore).
  var MILESTONES = ["signed-in", "first-space", "first-creation", "first-verify", "first-import"];

  function load() {
    try { var v = JSON.parse(localStorage.getItem(KEY) || "null"); if (v && typeof v === "object") return normalize(v); } catch (e) {}
    return { met: false, milestones: {}, invites: {}, ts: {} };
  }
  function normalize(v) {
    return { met: !!v.met, milestones: v.milestones || {}, invites: v.invites || {}, ts: v.ts || {} };
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  function stamp() { try { return Date.now(); } catch (e) { return 0; } }
  function emit(name, detail) { try { W.dispatchEvent(new CustomEvent("holo-journey", { detail: Object.assign({ kind: name }, detail || {}) })); } catch (e) {} }

  var S = load();

  // join a list the way a person would: "a", "a and b", "a, b and c".
  function joinList(a) {
    if (!a.length) return ""; if (a.length === 1) return a[0];
    return a.slice(0, -1).join(", ") + " and " + a[a.length - 1];
  }

  var API = {
    MILESTONES: MILESTONES.slice(),

    // ── the first meeting ──────────────────────────────────────────────────────────────────────
    met: function () { return !!S.met; },
    markMet: function () { if (S.met) return false; S.met = true; S.ts.met = stamp(); save(S); emit("met"); return true; },

    // ── milestones (idempotent; marking a new one fires a "holo-journey" event) ───────────────────
    has: function (m) { return !!S.milestones[m]; },
    mark: function (m) {
      if (!m || S.milestones[m]) return false;
      S.milestones[m] = true; S.ts[m] = stamp(); save(S); emit("milestone", { milestone: m }); return true;
    },
    milestones: function () { return MILESTONES.filter(function (m) { return S.milestones[m]; }); },
    count: function () { return API.milestones().length; },

    // ── per-stage invitations (once, ever) ───────────────────────────────────────────────────────
    invited: function (k) { return !!S.invites[k]; },
    markInvited: function (k) { if (!k || S.invites[k]) return false; S.invites[k] = true; save(S); return true; },

    // ── "my story so far" — Q reflects the milestones back as a short sentence (Q speaks to the user) ─
    story: function () {
      var parts = [];
      if (S.milestones["first-space"]) parts.push("made this machine yours");
      if (S.milestones["first-creation"]) parts.push("built something of your own");
      if (S.milestones["first-verify"]) parts.push("proved the OS to yourself");
      if (S.milestones["first-import"]) parts.push("brought the web in on your terms");
      if (!parts.length) return "Your story's just beginning. Make the first thing that's yours.";
      return "So far, you've " + joinList(parts) + ".";
    },

    // ── content address of the story — re-derivable (Law L5) ──────────────────────────────────────
    kappa: function () {
      try {
        var json = JSON.stringify({ met: S.met, milestones: S.milestones });
        var bytes = new TextEncoder().encode(json);
        return crypto.subtle.digest("SHA-256", bytes).then(function (d) {
          return "did:holo:sha256:" + Array.from(new Uint8Array(d)).map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
        });
      } catch (e) { return Promise.resolve(null); }
    },

    state: function () { try { return JSON.parse(JSON.stringify(S)); } catch (e) { return null; } },
    // sovereignty: forget my journey (the right to start over).
    reset: function () { S = { met: false, milestones: {}, invites: {}, ts: {} }; save(S); emit("reset"); return true; },
  };

  W.HoloJourney = API;
})();
