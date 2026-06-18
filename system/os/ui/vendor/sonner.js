"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/sonner.tsx
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from "lucide-react";

// http-url:https://esm.sh/next-themes@0.4.6/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/next-themes.mjs
import * as t from "react";
var K = (e, i, o, u, c, l, d, h) => {
  let m = document.documentElement, v = ["light", "dark"];
  function y(r) {
    (Array.isArray(e) ? e : [e]).forEach((f) => {
      let S2 = f === "class", k = S2 && l ? c.map((b) => l[b] || b) : c;
      S2 ? (m.classList.remove(...k), m.classList.add(l && l[r] ? l[r] : r)) : m.setAttribute(f, r);
    }), C(r);
  }
  function C(r) {
    h && v.includes(r) && (m.style.colorScheme = r);
  }
  function a2() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) y(u);
  else try {
    let r = localStorage.getItem(i) || o, f = d && r === "system" ? a2() : r;
    y(f);
  } catch {
  }
};
var A = t.createContext(void 0);
var V = { setTheme: (e) => {
}, themes: [] };
var j = () => {
  var e;
  return (e = t.useContext(A)) != null ? e : V;
};
var z = t.memo(({ forcedTheme: e, storageKey: i, attribute: o, enableSystem: u, enableColorScheme: c, defaultTheme: l, value: d, themes: h, nonce: m, scriptProps: v }) => {
  let y = JSON.stringify([o, i, l, e, h, d, u, c]).slice(1, -1);
  return t.createElement("script", { ...v, suppressHydrationWarning: true, nonce: typeof window > "u" ? m : "", dangerouslySetInnerHTML: { __html: `(${K.toString()})(${y})` } });
});

// http-url:https://esm.sh/sonner@2.0.7/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/sonner.mjs
import a from "react";
import wt from "react-dom";
function Wt(r) {
  if (!r || typeof document > "u") return;
  let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = r : e.appendChild(document.createTextNode(r));
}
var Kt = (r) => {
  switch (r) {
    case "success":
      return Qt;
    case "info":
      return Zt;
    case "warning":
      return Jt;
    case "error":
      return te;
    default:
      return null;
  }
};
var qt = Array(12).fill(0);
var Gt = ({ visible: r, className: o }) => a.createElement("div", { className: ["sonner-loading-wrapper", o].filter(Boolean).join(" "), "data-visible": r }, a.createElement("div", { className: "sonner-spinner" }, qt.map((e, s) => a.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${s}` }))));
var Qt = a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, a.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" }));
var Jt = a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, a.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" }));
var Zt = a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, a.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" }));
var te = a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, a.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" }));
var ee = a.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, a.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), a.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var ae = () => {
  let [r, o] = a.useState(document.hidden);
  return a.useEffect(() => {
    let e = () => {
      o(document.hidden);
    };
    return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e);
  }, []), r;
};
var Et = 1;
var Tt = class {
  constructor() {
    this.subscribe = (o) => (this.subscribers.push(o), () => {
      let e = this.subscribers.indexOf(o);
      this.subscribers.splice(e, 1);
    }), this.publish = (o) => {
      this.subscribers.forEach((e) => e(o));
    }, this.addToast = (o) => {
      this.publish(o), this.toasts = [...this.toasts, o];
    }, this.create = (o) => {
      var e;
      let { message: s, ...b } = o, c = typeof o?.id == "number" || ((e = o.id) == null ? void 0 : e.length) > 0 ? o.id : Et++, g = this.toasts.find((v) => v.id === c), D = o.dismissible === void 0 ? true : o.dismissible;
      return this.dismissedToasts.has(c) && this.dismissedToasts.delete(c), g ? this.toasts = this.toasts.map((v) => v.id === c ? (this.publish({ ...v, ...o, id: c, title: s }), { ...v, ...o, id: c, dismissible: D, title: s }) : v) : this.addToast({ title: s, ...b, dismissible: D, id: c }), c;
    }, this.dismiss = (o) => (o ? (this.dismissedToasts.add(o), requestAnimationFrame(() => this.subscribers.forEach((e) => e({ id: o, dismiss: true })))) : this.toasts.forEach((e) => {
      this.subscribers.forEach((s) => s({ id: e.id, dismiss: true }));
    }), o), this.message = (o, e) => this.create({ ...e, message: o }), this.error = (o, e) => this.create({ ...e, message: o, type: "error" }), this.success = (o, e) => this.create({ ...e, type: "success", message: o }), this.info = (o, e) => this.create({ ...e, type: "info", message: o }), this.warning = (o, e) => this.create({ ...e, type: "warning", message: o }), this.loading = (o, e) => this.create({ ...e, type: "loading", message: o }), this.promise = (o, e) => {
      if (!e) return;
      let s;
      e.loading !== void 0 && (s = this.create({ ...e, promise: o, type: "loading", message: e.loading, description: typeof e.description != "function" ? e.description : void 0 }));
      let b = Promise.resolve(o instanceof Function ? o() : o), c = s !== void 0, g, D = b.then(async (i) => {
        if (g = ["resolve", i], a.isValidElement(i)) c = false, this.create({ id: s, type: "default", message: i });
        else if (se(i) && !i.ok) {
          c = false;
          let t2 = typeof e.error == "function" ? await e.error(`HTTP error! status: ${i.status}`) : e.error, E = typeof e.description == "function" ? await e.description(`HTTP error! status: ${i.status}`) : e.description, T = typeof t2 == "object" && !a.isValidElement(t2) ? t2 : { message: t2 };
          this.create({ id: s, type: "error", description: E, ...T });
        } else if (i instanceof Error) {
          c = false;
          let t2 = typeof e.error == "function" ? await e.error(i) : e.error, E = typeof e.description == "function" ? await e.description(i) : e.description, T = typeof t2 == "object" && !a.isValidElement(t2) ? t2 : { message: t2 };
          this.create({ id: s, type: "error", description: E, ...T });
        } else if (e.success !== void 0) {
          c = false;
          let t2 = typeof e.success == "function" ? await e.success(i) : e.success, E = typeof e.description == "function" ? await e.description(i) : e.description, T = typeof t2 == "object" && !a.isValidElement(t2) ? t2 : { message: t2 };
          this.create({ id: s, type: "success", description: E, ...T });
        }
      }).catch(async (i) => {
        if (g = ["reject", i], e.error !== void 0) {
          c = false;
          let N = typeof e.error == "function" ? await e.error(i) : e.error, t2 = typeof e.description == "function" ? await e.description(i) : e.description, O = typeof N == "object" && !a.isValidElement(N) ? N : { message: N };
          this.create({ id: s, type: "error", description: t2, ...O });
        }
      }).finally(() => {
        c && (this.dismiss(s), s = void 0), e.finally == null || e.finally.call(e);
      }), v = () => new Promise((i, N) => D.then(() => g[0] === "reject" ? N(g[1]) : i(g[1])).catch(N));
      return typeof s != "string" && typeof s != "number" ? { unwrap: v } : Object.assign(s, { unwrap: v });
    }, this.custom = (o, e) => {
      let s = e?.id || Et++;
      return this.create({ jsx: o(s), id: s, ...e }), s;
    }, this.getActiveToasts = () => this.toasts.filter((o) => !this.dismissedToasts.has(o.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
};
var S = new Tt();
var oe = (r, o) => {
  let e = o?.id || Et++;
  return S.addToast({ title: r, ...o, id: e }), e;
};
var se = (r) => r && typeof r == "object" && "ok" in r && typeof r.ok == "boolean" && "status" in r && typeof r.status == "number";
var ne = oe;
var re = () => S.toasts;
var ie = () => S.getActiveToasts();
var we = Object.assign(ne, { success: S.success, info: S.info, warning: S.warning, error: S.error, custom: S.custom, message: S.message, promise: S.promise, dismiss: S.dismiss, loading: S.loading }, { getHistory: re, getToasts: ie });
Wt("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function mt(r) {
  return r.label !== void 0;
}
var le = 3;
var de = "24px";
var ce = "16px";
var Ct = 4e3;
var ue = 356;
var fe = 14;
var me = 45;
var pe = 200;
function H(...r) {
  return r.filter(Boolean).join(" ");
}
function ge(r) {
  let [o, e] = r.split("-"), s = [];
  return o && s.push(o), e && s.push(e), s;
}
var he = (r) => {
  var o, e, s, b, c, g, D, v, i;
  let { invert: N, toast: t2, unstyled: E, interacting: O, setHeights: T, visibleToasts: pt, heights: U, index: d, toasts: ot, expanded: X, removeToast: st, defaultRichColors: gt, closeButton: z2, style: Z, cancelButtonStyle: Y, actionButtonStyle: ht, className: nt = "", descriptionClassName: bt = "", duration: tt, position: A2, gap: rt, expandByDefault: et, classNames: u, icons: y, closeButtonAriaLabel: j2 = "Close toast" } = r, [$, M] = a.useState(null), [F, it] = a.useState(null), [l, p] = a.useState(false), [m, R] = a.useState(false), [W, f] = a.useState(false), [K2, lt] = a.useState(false), [dt, q] = a.useState(false), [Ht, vt] = a.useState(0), [Ot, St] = a.useState(0), at = a.useRef(t2.duration || tt || Ct), Nt = a.useRef(null), P = a.useRef(null), zt = d === 0, Pt = d + 1 <= pt, k = t2.type, G = t2.dismissible !== false, jt = t2.className || "", Lt = t2.descriptionClassName || "", ct = a.useMemo(() => U.findIndex((n) => n.toastId === t2.id) || 0, [U, t2.id]), Yt = a.useMemo(() => {
    var n;
    return (n = t2.closeButton) != null ? n : z2;
  }, [t2.closeButton, z2]), kt = a.useMemo(() => t2.duration || tt || Ct, [t2.duration, tt]), yt = a.useRef(0), Q = a.useRef(0), _t = a.useRef(0), J = a.useRef(null), [$t, Ft] = A2.split("-"), Dt = a.useMemo(() => U.reduce((n, h, w) => w >= ct ? n : n + h.height, 0), [U, ct]), Rt = ae(), Vt = t2.invert || N, xt = k === "loading";
  Q.current = a.useMemo(() => ct * rt + Dt, [ct, Dt]), a.useEffect(() => {
    at.current = kt;
  }, [kt]), a.useEffect(() => {
    p(true);
  }, []), a.useEffect(() => {
    let n = P.current;
    if (n) {
      let h = n.getBoundingClientRect().height;
      return St(h), T((w) => [{ toastId: t2.id, height: h, position: t2.position }, ...w]), () => T((w) => w.filter((_) => _.toastId !== t2.id));
    }
  }, [T, t2.id]), a.useLayoutEffect(() => {
    if (!l) return;
    let n = P.current, h = n.style.height;
    n.style.height = "auto";
    let w = n.getBoundingClientRect().height;
    n.style.height = h, St(w), T((_) => _.find((x) => x.toastId === t2.id) ? _.map((x) => x.toastId === t2.id ? { ...x, height: w } : x) : [{ toastId: t2.id, height: w, position: t2.position }, ..._]);
  }, [l, t2.title, t2.description, T, t2.id, t2.jsx, t2.action, t2.cancel]);
  let L = a.useCallback(() => {
    R(true), vt(Q.current), T((n) => n.filter((h) => h.toastId !== t2.id)), setTimeout(() => {
      st(t2);
    }, pe);
  }, [t2, st, T, Q]);
  a.useEffect(() => {
    if (t2.promise && k === "loading" || t2.duration === 1 / 0 || t2.type === "loading") return;
    let n;
    return X || O || Rt ? (() => {
      if (_t.current < yt.current) {
        let _ = (/* @__PURE__ */ new Date()).getTime() - yt.current;
        at.current = at.current - _;
      }
      _t.current = (/* @__PURE__ */ new Date()).getTime();
    })() : at.current !== 1 / 0 && (yt.current = (/* @__PURE__ */ new Date()).getTime(), n = setTimeout(() => {
      t2.onAutoClose == null || t2.onAutoClose.call(t2, t2), L();
    }, at.current)), () => clearTimeout(n);
  }, [X, O, t2, k, Rt, L]), a.useEffect(() => {
    t2.delete && (L(), t2.onDismiss == null || t2.onDismiss.call(t2, t2));
  }, [L, t2.delete]);
  function Ut() {
    var n;
    if (y?.loading) {
      var h;
      return a.createElement("div", { className: H(u?.loader, t2 == null || (h = t2.classNames) == null ? void 0 : h.loader, "sonner-loader"), "data-visible": k === "loading" }, y.loading);
    }
    return a.createElement(Gt, { className: H(u?.loader, t2 == null || (n = t2.classNames) == null ? void 0 : n.loader), visible: k === "loading" });
  }
  let Xt = t2.icon || y?.[k] || Kt(k);
  var Bt, Mt;
  return a.createElement("li", { tabIndex: 0, ref: P, className: H(nt, jt, u?.toast, t2 == null || (o = t2.classNames) == null ? void 0 : o.toast, u?.default, u?.[k], t2 == null || (e = t2.classNames) == null ? void 0 : e[k]), "data-sonner-toast": "", "data-rich-colors": (Bt = t2.richColors) != null ? Bt : gt, "data-styled": !(t2.jsx || t2.unstyled || E), "data-mounted": l, "data-promise": !!t2.promise, "data-swiped": dt, "data-removed": m, "data-visible": Pt, "data-y-position": $t, "data-x-position": Ft, "data-index": d, "data-front": zt, "data-swiping": W, "data-dismissible": G, "data-type": k, "data-invert": Vt, "data-swipe-out": K2, "data-swipe-direction": F, "data-expanded": !!(X || et && l), "data-testid": t2.testId, style: { "--index": d, "--toasts-before": d, "--z-index": ot.length - d, "--offset": `${m ? Ht : Q.current}px`, "--initial-height": et ? "auto" : `${Ot}px`, ...Z, ...t2.style }, onDragEnd: () => {
    f(false), M(null), J.current = null;
  }, onPointerDown: (n) => {
    n.button !== 2 && (xt || !G || (Nt.current = /* @__PURE__ */ new Date(), vt(Q.current), n.target.setPointerCapture(n.pointerId), n.target.tagName !== "BUTTON" && (f(true), J.current = { x: n.clientX, y: n.clientY })));
  }, onPointerUp: () => {
    var n, h, w;
    if (K2 || !G) return;
    J.current = null;
    let _ = Number(((n = P.current) == null ? void 0 : n.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), ut = Number(((h = P.current) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), x = (/* @__PURE__ */ new Date()).getTime() - ((w = Nt.current) == null ? void 0 : w.getTime()), B = $ === "x" ? _ : ut, ft = Math.abs(B) / x;
    if (Math.abs(B) >= me || ft > 0.11) {
      vt(Q.current), t2.onDismiss == null || t2.onDismiss.call(t2, t2), it($ === "x" ? _ > 0 ? "right" : "left" : ut > 0 ? "down" : "up"), L(), lt(true);
      return;
    } else {
      var I, C;
      (I = P.current) == null || I.style.setProperty("--swipe-amount-x", "0px"), (C = P.current) == null || C.style.setProperty("--swipe-amount-y", "0px");
    }
    q(false), f(false), M(null);
  }, onPointerMove: (n) => {
    var h, w, _;
    if (!J.current || !G || ((h = window.getSelection()) == null ? void 0 : h.toString().length) > 0) return;
    let x = n.clientY - J.current.y, B = n.clientX - J.current.x;
    var ft;
    let I = (ft = r.swipeDirections) != null ? ft : ge(A2);
    !$ && (Math.abs(B) > 1 || Math.abs(x) > 1) && M(Math.abs(B) > Math.abs(x) ? "x" : "y");
    let C = { x: 0, y: 0 }, It = (V2) => 1 / (1.5 + Math.abs(V2) / 20);
    if ($ === "y") {
      if (I.includes("top") || I.includes("bottom")) if (I.includes("top") && x < 0 || I.includes("bottom") && x > 0) C.y = x;
      else {
        let V2 = x * It(x);
        C.y = Math.abs(V2) < Math.abs(x) ? V2 : x;
      }
    } else if ($ === "x" && (I.includes("left") || I.includes("right"))) if (I.includes("left") && B < 0 || I.includes("right") && B > 0) C.x = B;
    else {
      let V2 = B * It(B);
      C.x = Math.abs(V2) < Math.abs(B) ? V2 : B;
    }
    (Math.abs(C.x) > 0 || Math.abs(C.y) > 0) && q(true), (w = P.current) == null || w.style.setProperty("--swipe-amount-x", `${C.x}px`), (_ = P.current) == null || _.style.setProperty("--swipe-amount-y", `${C.y}px`);
  } }, Yt && !t2.jsx && k !== "loading" ? a.createElement("button", { "aria-label": j2, "data-disabled": xt, "data-close-button": true, onClick: xt || !G ? () => {
  } : () => {
    L(), t2.onDismiss == null || t2.onDismiss.call(t2, t2);
  }, className: H(u?.closeButton, t2 == null || (s = t2.classNames) == null ? void 0 : s.closeButton) }, (Mt = y?.close) != null ? Mt : ee) : null, (k || t2.icon || t2.promise) && t2.icon !== null && (y?.[k] !== null || t2.icon) ? a.createElement("div", { "data-icon": "", className: H(u?.icon, t2 == null || (b = t2.classNames) == null ? void 0 : b.icon) }, t2.promise || t2.type === "loading" && !t2.icon ? t2.icon || Ut() : null, t2.type !== "loading" ? Xt : null) : null, a.createElement("div", { "data-content": "", className: H(u?.content, t2 == null || (c = t2.classNames) == null ? void 0 : c.content) }, a.createElement("div", { "data-title": "", className: H(u?.title, t2 == null || (g = t2.classNames) == null ? void 0 : g.title) }, t2.jsx ? t2.jsx : typeof t2.title == "function" ? t2.title() : t2.title), t2.description ? a.createElement("div", { "data-description": "", className: H(bt, Lt, u?.description, t2 == null || (D = t2.classNames) == null ? void 0 : D.description) }, typeof t2.description == "function" ? t2.description() : t2.description) : null), a.isValidElement(t2.cancel) ? t2.cancel : t2.cancel && mt(t2.cancel) ? a.createElement("button", { "data-button": true, "data-cancel": true, style: t2.cancelButtonStyle || Y, onClick: (n) => {
    mt(t2.cancel) && G && (t2.cancel.onClick == null || t2.cancel.onClick.call(t2.cancel, n), L());
  }, className: H(u?.cancelButton, t2 == null || (v = t2.classNames) == null ? void 0 : v.cancelButton) }, t2.cancel.label) : null, a.isValidElement(t2.action) ? t2.action : t2.action && mt(t2.action) ? a.createElement("button", { "data-button": true, "data-action": true, style: t2.actionButtonStyle || ht, onClick: (n) => {
    mt(t2.action) && (t2.action.onClick == null || t2.action.onClick.call(t2.action, n), !n.defaultPrevented && L());
  }, className: H(u?.actionButton, t2 == null || (i = t2.classNames) == null ? void 0 : i.actionButton) }, t2.action.label) : null);
};
function At() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let r = document.documentElement.getAttribute("dir");
  return r === "auto" || !r ? window.getComputedStyle(document.documentElement).direction : r;
}
function be(r, o) {
  let e = {};
  return [r, o].forEach((s, b) => {
    let c = b === 1, g = c ? "--mobile-offset" : "--offset", D = c ? ce : de;
    function v(i) {
      ["top", "right", "bottom", "left"].forEach((N) => {
        e[`${g}-${N}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof s == "number" || typeof s == "string" ? v(s) : typeof s == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      s[i] === void 0 ? e[`${g}-${i}`] = D : e[`${g}-${i}`] = typeof s[i] == "number" ? `${s[i]}px` : s[i];
    }) : v(D);
  }), e;
}
var Te = a.forwardRef(function(o, e) {
  let { id: s, invert: b, position: c = "bottom-right", hotkey: g = ["altKey", "KeyT"], expand: D, closeButton: v, className: i, offset: N, mobileOffset: t2, theme: E = "light", richColors: O, duration: T, style: pt, visibleToasts: U = le, toastOptions: d, dir: ot = At(), gap: X = fe, icons: st, containerAriaLabel: gt = "Notifications" } = o, [z2, Z] = a.useState([]), Y = a.useMemo(() => s ? z2.filter((l) => l.toasterId === s) : z2.filter((l) => !l.toasterId), [z2, s]), ht = a.useMemo(() => Array.from(new Set([c].concat(Y.filter((l) => l.position).map((l) => l.position)))), [Y, c]), [nt, bt] = a.useState([]), [tt, A2] = a.useState(false), [rt, et] = a.useState(false), [u, y] = a.useState(E !== "system" ? E : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), j2 = a.useRef(null), $ = g.join("+").replace(/Key/g, "").replace(/Digit/g, ""), M = a.useRef(null), F = a.useRef(false), it = a.useCallback((l) => {
    Z((p) => {
      var m;
      return (m = p.find((R) => R.id === l.id)) != null && m.delete || S.dismiss(l.id), p.filter(({ id: R }) => R !== l.id);
    });
  }, []);
  return a.useEffect(() => S.subscribe((l) => {
    if (l.dismiss) {
      requestAnimationFrame(() => {
        Z((p) => p.map((m) => m.id === l.id ? { ...m, delete: true } : m));
      });
      return;
    }
    setTimeout(() => {
      wt.flushSync(() => {
        Z((p) => {
          let m = p.findIndex((R) => R.id === l.id);
          return m !== -1 ? [...p.slice(0, m), { ...p[m], ...l }, ...p.slice(m + 1)] : [l, ...p];
        });
      });
    });
  }), [z2]), a.useEffect(() => {
    if (E !== "system") {
      y(E);
      return;
    }
    if (E === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? y("dark") : y("light")), typeof window > "u") return;
    let l = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      l.addEventListener("change", ({ matches: p }) => {
        y(p ? "dark" : "light");
      });
    } catch {
      l.addListener(({ matches: m }) => {
        try {
          y(m ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [E]), a.useEffect(() => {
    z2.length <= 1 && A2(false);
  }, [z2]), a.useEffect(() => {
    let l = (p) => {
      var m;
      if (g.every((f) => p[f] || p.code === f)) {
        var W;
        A2(true), (W = j2.current) == null || W.focus();
      }
      p.code === "Escape" && (document.activeElement === j2.current || (m = j2.current) != null && m.contains(document.activeElement)) && A2(false);
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [g]), a.useEffect(() => {
    if (j2.current) return () => {
      M.current && (M.current.focus({ preventScroll: true }), M.current = null, F.current = false);
    };
  }, [j2.current]), a.createElement("section", { ref: e, "aria-label": `${gt} ${$}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, ht.map((l, p) => {
    var m;
    let [R, W] = l.split("-");
    return Y.length ? a.createElement("ol", { key: l, dir: ot === "auto" ? At() : ot, tabIndex: -1, ref: j2, className: i, "data-sonner-toaster": true, "data-sonner-theme": u, "data-y-position": R, "data-x-position": W, style: { "--front-toast-height": `${((m = nt[0]) == null ? void 0 : m.height) || 0}px`, "--width": `${ue}px`, "--gap": `${X}px`, ...pt, ...be(N, t2) }, onBlur: (f) => {
      F.current && !f.currentTarget.contains(f.relatedTarget) && (F.current = false, M.current && (M.current.focus({ preventScroll: true }), M.current = null));
    }, onFocus: (f) => {
      f.target instanceof HTMLElement && f.target.dataset.dismissible === "false" || F.current || (F.current = true, M.current = f.relatedTarget);
    }, onMouseEnter: () => A2(true), onMouseMove: () => A2(true), onMouseLeave: () => {
      rt || A2(false);
    }, onDragEnd: () => A2(false), onPointerDown: (f) => {
      f.target instanceof HTMLElement && f.target.dataset.dismissible === "false" || et(true);
    }, onPointerUp: () => et(false) }, Y.filter((f) => !f.position && p === 0 || f.position === l).map((f, K2) => {
      var lt, dt;
      return a.createElement(he, { key: f.id, icons: st, index: K2, toast: f, defaultRichColors: O, duration: (lt = d?.duration) != null ? lt : T, className: d?.className, descriptionClassName: d?.descriptionClassName, invert: b, visibleToasts: U, closeButton: (dt = d?.closeButton) != null ? dt : v, interacting: rt, position: l, style: d?.style, unstyled: d?.unstyled, classNames: d?.classNames, cancelButtonStyle: d?.cancelButtonStyle, actionButtonStyle: d?.actionButtonStyle, closeButtonAriaLabel: d?.closeButtonAriaLabel, removeToast: it, toasts: Y.filter((q) => q.position == f.position), heights: nt.filter((q) => q.position == f.position), setHeights: bt, expandByDefault: D, gap: X, expanded: tt, swipeDirections: o.swipeDirections });
    })) : null;
  }));
});

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/sonner.tsx
import { jsx } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  const { theme = "system" } = j();
  return /* @__PURE__ */ jsx(
    Te,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx(CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ jsx(InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ jsx(TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ jsx(OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      ...props
    }
  );
};
export {
  Toaster
};
