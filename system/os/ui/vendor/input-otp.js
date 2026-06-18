"use client";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/input-otp.tsx
import * as React from "react";

// http-url:https://esm.sh/input-otp@1.4.2/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/input-otp.mjs
import * as t from "react";
import * as q from "react";
import * as S from "react";
var Re = Object.defineProperty;
var ke = Object.defineProperties;
var Te = Object.getOwnPropertyDescriptors;
var Z = Object.getOwnPropertySymbols;
var ve = Object.prototype.hasOwnProperty;
var he = Object.prototype.propertyIsEnumerable;
var fe = (r, l, a) => l in r ? Re(r, l, { enumerable: true, configurable: true, writable: true, value: a }) : r[l] = a;
var De = (r, l) => {
  for (var a in l || (l = {})) ve.call(l, a) && fe(r, a, l[a]);
  if (Z) for (var a of Z(l)) he.call(l, a) && fe(r, a, l[a]);
  return r;
};
var Ae = (r, l) => ke(r, Te(l));
var Oe = (r, l) => {
  var a = {};
  for (var c in r) ve.call(r, c) && l.indexOf(c) < 0 && (a[c] = r[c]);
  if (r != null && Z) for (var c of Z(r)) l.indexOf(c) < 0 && he.call(r, c) && (a[c] = r[c]);
  return a;
};
function _e(r) {
  let l = setTimeout(r, 0), a = setTimeout(r, 10), c = setTimeout(r, 50);
  return [l, a, c];
}
function Ie(r) {
  let l = q.useRef();
  return q.useEffect(() => {
    l.current = r;
  }), l.current;
}
var We = 18;
var ge = 40;
var Be = `${ge}px`;
var je = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function He({ containerRef: r, inputRef: l, pushPasswordManagerStrategy: a, isFocused: c }) {
  let [x, p] = S.useState(false), [H, R] = S.useState(false), [_, F] = S.useState(false), L = S.useMemo(() => a === "none" ? false : (a === "increase-width" || a === "experimental-no-flickering") && x && H, [x, H, a]), I = S.useCallback(() => {
    let f = r.current, C = l.current;
    if (!f || !C || _ || a === "none") return;
    let g = f, w = g.getBoundingClientRect().left + g.offsetWidth, W = g.getBoundingClientRect().top + g.offsetHeight / 2, i = w - We, G = W;
    document.querySelectorAll(je).length === 0 && document.elementFromPoint(i, G) === f || (p(true), F(true));
  }, [r, l, _, a]);
  return S.useEffect(() => {
    let f = r.current;
    if (!f || a === "none") return;
    function C() {
      let w = window.innerWidth - f.getBoundingClientRect().right;
      R(w >= ge);
    }
    C();
    let g = setInterval(C, 1e3);
    return () => {
      clearInterval(g);
    };
  }, [r, a]), S.useEffect(() => {
    let f = c || document.activeElement === l.current;
    if (a === "none" || !f) return;
    let C = setTimeout(I, 0), g = setTimeout(I, 2e3), w = setTimeout(I, 5e3), W = setTimeout(() => {
      F(true);
    }, 6e3);
    return () => {
      clearTimeout(C), clearTimeout(g), clearTimeout(w), clearTimeout(W);
    };
  }, [l, c, a, I]), { hasPWMBadge: x, willPushPWMBadge: L, PWM_BADGE_SPACE_WIDTH: Be };
}
var Fe = t.createContext({});
var Le = t.forwardRef((r, l) => {
  var a = r, { value: c, onChange: x, maxLength: p, textAlign: H = "left", pattern: R, placeholder: _, inputMode: F = "numeric", onComplete: L, pushPasswordManagerStrategy: I = "increase-width", pasteTransformer: f, containerClassName: C, noScriptCSSFallback: g = Ge, render: w, children: W } = a, i = Oe(a, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), G, ne, re, le, ae;
  let [be, Se] = t.useState(typeof i.defaultValue == "string" ? i.defaultValue : ""), u = c ?? be, k = Ie(u), N = t.useCallback((e) => {
    x?.(e), Se(e);
  }, [x]), E = t.useMemo(() => R ? typeof R == "string" ? new RegExp(R) : R : null, [R]), s = t.useRef(null), J = t.useRef(null), K = t.useRef({ value: u, onChange: N, isIOS: typeof window < "u" && ((ne = (G = window?.CSS) == null ? void 0 : G.supports) == null ? void 0 : ne.call(G, "-webkit-touch-callout", "none")) }), X = t.useRef({ prev: [(re = s.current) == null ? void 0 : re.selectionStart, (le = s.current) == null ? void 0 : le.selectionEnd, (ae = s.current) == null ? void 0 : ae.selectionDirection] });
  t.useImperativeHandle(l, () => s.current, []), t.useEffect(() => {
    let e = s.current, n = J.current;
    if (!e || !n) return;
    K.current.value !== e.value && K.current.onChange(e.value), X.current.prev = [e.selectionStart, e.selectionEnd, e.selectionDirection];
    function d() {
      if (document.activeElement !== e) {
        z(null), U(null);
        return;
      }
      let o = e.selectionStart, m = e.selectionEnd, Y = e.selectionDirection, b = e.maxLength, D = e.value, P = X.current.prev, y = -1, M = -1, A;
      if (D.length !== 0 && o !== null && m !== null) {
        let ye = o === m, Me = o === D.length && D.length < b;
        if (ye && !Me) {
          let O = o;
          if (O === 0) y = 0, M = 1, A = "forward";
          else if (O === b) y = O - 1, M = O, A = "backward";
          else if (b > 1 && D.length > 1) {
            let te = 0;
            if (P[0] !== null && P[1] !== null) {
              A = O < P[1] ? "backward" : "forward";
              let xe = P[0] === P[1] && P[0] < b;
              A === "backward" && !xe && (te = -1);
            }
            y = te + O, M = te + O + 1;
          }
        }
        y !== -1 && M !== -1 && y !== M && s.current.setSelectionRange(y, M, A);
      }
      let de = y !== -1 ? y : o, me = M !== -1 ? M : m, Ce = A ?? Y;
      z(de), U(me), X.current.prev = [de, me, Ce];
    }
    if (document.addEventListener("selectionchange", d, { capture: true }), d(), document.activeElement === e && Q(true), !document.getElementById("input-otp-style")) {
      let o = document.createElement("style");
      if (o.id = "input-otp-style", document.head.appendChild(o), o.sheet) {
        let m = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        V(o.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), V(o.sheet, `[data-input-otp]:autofill { ${m} }`), V(o.sheet, `[data-input-otp]:-webkit-autofill { ${m} }`), V(o.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), V(o.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let v = () => {
      n && n.style.setProperty("--root-height", `${e.clientHeight}px`);
    };
    v();
    let h = new ResizeObserver(v);
    return h.observe(e), () => {
      document.removeEventListener("selectionchange", d, { capture: true }), h.disconnect();
    };
  }, []);
  let [oe, ie] = t.useState(false), [$, Q] = t.useState(false), [T, z] = t.useState(null), [B, U] = t.useState(null);
  t.useEffect(() => {
    _e(() => {
      var e, n, d, v;
      (e = s.current) == null || e.dispatchEvent(new Event("input"));
      let h = (n = s.current) == null ? void 0 : n.selectionStart, o = (d = s.current) == null ? void 0 : d.selectionEnd, m = (v = s.current) == null ? void 0 : v.selectionDirection;
      h !== null && o !== null && (z(h), U(o), X.current.prev = [h, o, m]);
    });
  }, [u, $]), t.useEffect(() => {
    k !== void 0 && u !== k && k.length < p && u.length === p && L?.(u);
  }, [p, L, k, u]);
  let j = He({ containerRef: J, inputRef: s, pushPasswordManagerStrategy: I, isFocused: $ }), ue = t.useCallback((e) => {
    let n = e.currentTarget.value.slice(0, p);
    if (n.length > 0 && E && !E.test(n)) {
      e.preventDefault();
      return;
    }
    typeof k == "string" && n.length < k.length && document.dispatchEvent(new Event("selectionchange")), N(n);
  }, [p, N, k, E]), se = t.useCallback(() => {
    var e;
    if (s.current) {
      let n = Math.min(s.current.value.length, p - 1), d = s.current.value.length;
      (e = s.current) == null || e.setSelectionRange(n, d), z(n), U(d);
    }
    Q(true);
  }, [p]), ce = t.useCallback((e) => {
    var n, d;
    let v = s.current;
    if (!f && (!K.current.isIOS || !e.clipboardData || !v)) return;
    let h = e.clipboardData.getData("text/plain"), o = f ? f(h) : h;
    e.preventDefault();
    let m = (n = s.current) == null ? void 0 : n.selectionStart, Y = (d = s.current) == null ? void 0 : d.selectionEnd, b = (m !== Y ? u.slice(0, m) + o + u.slice(Y) : u.slice(0, m) + o + u.slice(m)).slice(0, p);
    if (b.length > 0 && E && !E.test(b)) return;
    v.value = b, N(b);
    let D = Math.min(b.length, p - 1), P = b.length;
    v.setSelectionRange(D, P), z(D), U(P);
  }, [p, N, E, u]), Ee = t.useMemo(() => ({ position: "relative", cursor: i.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [i.disabled]), pe = t.useMemo(() => ({ position: "absolute", inset: 0, width: j.willPushPWMBadge ? `calc(100% + ${j.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: j.willPushPWMBadge ? `inset(0 ${j.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: H, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [j.PWM_BADGE_SPACE_WIDTH, j.willPushPWMBadge, H]), we = t.useMemo(() => t.createElement("input", Ae(De({ autoComplete: i.autoComplete || "one-time-code" }, i), { "data-input-otp": true, "data-input-otp-placeholder-shown": u.length === 0 || void 0, "data-input-otp-mss": T, "data-input-otp-mse": B, inputMode: F, pattern: E?.source, "aria-placeholder": _, style: pe, maxLength: p, value: u, ref: s, onPaste: (e) => {
    var n;
    ce(e), (n = i.onPaste) == null || n.call(i, e);
  }, onChange: ue, onMouseOver: (e) => {
    var n;
    ie(true), (n = i.onMouseOver) == null || n.call(i, e);
  }, onMouseLeave: (e) => {
    var n;
    ie(false), (n = i.onMouseLeave) == null || n.call(i, e);
  }, onFocus: (e) => {
    var n;
    se(), (n = i.onFocus) == null || n.call(i, e);
  }, onBlur: (e) => {
    var n;
    Q(false), (n = i.onBlur) == null || n.call(i, e);
  } })), [ue, se, ce, F, pe, p, B, T, i, E?.source, u]), ee = t.useMemo(() => ({ slots: Array.from({ length: p }).map((e, n) => {
    var d;
    let v = $ && T !== null && B !== null && (T === B && n === T || n >= T && n < B), h = u[n] !== void 0 ? u[n] : null, o = u[0] !== void 0 ? null : (d = _?.[n]) != null ? d : null;
    return { char: h, placeholderChar: o, isActive: v, hasFakeCaret: v && h === null };
  }), isFocused: $, isHovering: !i.disabled && oe }), [$, oe, p, B, T, i.disabled, u]), Pe = t.useMemo(() => w ? w(ee) : t.createElement(Fe.Provider, { value: ee }, W), [W, ee, w]);
  return t.createElement(t.Fragment, null, g !== null && t.createElement("noscript", null, t.createElement("style", null, g)), t.createElement("div", { ref: J, "data-input-otp-container": true, style: Ee, className: C }, Pe, t.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, we)));
});
Le.displayName = "Input";
function V(r, l) {
  try {
    r.insertRule(l);
  } catch {
    console.error("input-otp could not insert CSS rule:", l);
  }
}
var Ge = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/input-otp.tsx
import { MinusIcon } from "lucide-react";

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/input-otp.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Le,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "flex items-center gap-2 has-disabled:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn("flex items-center", className),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React.useContext(Fe);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-[3px] data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "input-otp-separator", role: "separator", ...props, children: /* @__PURE__ */ jsx(MinusIcon, {}) });
}
export {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
};
