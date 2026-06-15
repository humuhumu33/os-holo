// content.js — the Holo DevTools extension content script (ISOLATED world, ADR-0095, Tier 2). It is the
// bridge between the page's fake-WebSocket (holo-ext mode, in holo-devtools.html) and the background's
// chrome.debugger. Runs in every frame, but connects to the background LAZILY — only the DevTools frame
// posts holo-ext frames, so only it triggers a chrome.debugger attach (no spurious attaches on the rest).
//
// Wire: page --window.postMessage{__holoext:"send"}--> content --Port--> bg --chrome.debugger--> real CDP,
//       and back: bg --Port--> content --window.postMessage{__holoext:"recv"}--> page (the fake WS onmessage).

(function () {
  let port = null;
  function ensurePort() {
    if (port) return port;
    port = chrome.runtime.connect({ name: "holo-devtools-ext" });
    port.onMessage.addListener((frame) => { window.postMessage({ __holoext: "recv", frame }, "*"); });   // CDP reply/event → the page's fake WS
    port.onDisconnect.addListener(() => { port = null; window.postMessage({ __holoext: "closed" }, "*"); });
    return port;
  }
  window.addEventListener("message", (e) => {
    if (e.source !== window) return;                     // same-frame only
    const d = e.data; if (!d || d.__holoext !== "send") return;
    try { ensurePort().postMessage(d.frame); } catch (err) {}
  });
})();
