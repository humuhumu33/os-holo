"use client";

// http-url:https://esm.sh/@radix-ui/primitive@1.1.4/es2022/primitive.mjs
var i = !!(typeof window < "u" && window.document && window.document.createElement);
function f(e13, o9, { checkForDefaultPrevented: n8 = true } = {}) {
  return function(t6) {
    if (e13?.(t6), n8 === false || !t6.defaultPrevented) return o9?.(t6);
  };
}

// http-url:https://esm.sh/@radix-ui/react-compose-refs@1.1.3/X-ZXJlYWN0/es2022/react-compose-refs.mjs
import * as f2 from "react";
function l(n8, o9) {
  if (typeof n8 == "function") return n8(o9);
  n8 != null && (n8.current = o9);
}
function i2(...n8) {
  return (o9) => {
    let u7 = false, c6 = n8.map((t6) => {
      let e13 = l(t6, o9);
      return !u7 && typeof e13 == "function" && (u7 = true), e13;
    });
    if (u7) return () => {
      for (let t6 = 0; t6 < c6.length; t6++) {
        let e13 = c6[t6];
        typeof e13 == "function" ? e13() : l(n8[t6], null);
      }
    };
  };
}
function s(...n8) {
  return f2.useCallback(i2(...n8), n8);
}

// http-url:https://esm.sh/@radix-ui/react-context@1.1.4/X-ZXJlYWN0/es2022/react-context.mjs
import * as o from "react";
import { jsx as m } from "react/jsx-runtime";
function $(t6, s11 = []) {
  let c6 = [];
  function a10(r10, e13) {
    let n8 = o.createContext(e13);
    n8.displayName = r10 + "Context";
    let u7 = c6.length;
    c6 = [...c6, e13];
    let d5 = (x7) => {
      let { scope: v10, children: C6, ...p8 } = x7, R5 = v10?.[t6]?.[u7] || n8, l10 = o.useMemo(() => p8, Object.values(p8));
      return m(R5.Provider, { value: l10, children: C6 });
    };
    d5.displayName = r10 + "Provider";
    function f11(x7, v10) {
      let C6 = v10?.[t6]?.[u7] || n8, p8 = o.useContext(C6);
      if (p8) return p8;
      if (e13 !== void 0) return e13;
      throw new Error(`\`${x7}\` must be used within \`${r10}\``);
    }
    return [d5, f11];
  }
  let i12 = () => {
    let r10 = c6.map((e13) => o.createContext(e13));
    return function(n8) {
      let u7 = n8?.[t6] || r10;
      return o.useMemo(() => ({ [`__scope${t6}`]: { ...n8, [t6]: u7 } }), [n8, u7]);
    };
  };
  return i12.scopeName = t6, [a10, S(i12, ...s11)];
}
function S(...t6) {
  let s11 = t6[0];
  if (t6.length === 1) return s11;
  let c6 = () => {
    let a10 = t6.map((i12) => ({ useScope: i12(), scopeName: i12.scopeName }));
    return function(r10) {
      let e13 = a10.reduce((n8, { useScope: u7, scopeName: d5 }) => {
        let x7 = u7(r10)[`__scope${d5}`];
        return { ...n8, ...x7 };
      }, {});
      return o.useMemo(() => ({ [`__scope${s11.scopeName}`]: e13 }), [e13]);
    };
  };
  return c6.scopeName = s11.scopeName, c6;
}

// http-url:https://esm.sh/@radix-ui/react-dismissable-layer@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dismissable-layer.mjs
import * as e3 from "react";

// http-url:https://esm.sh/@radix-ui/react-primitive@2.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-primitive.mjs
import * as o2 from "react";
import * as e from "react-dom";

// http-url:https://esm.sh/@radix-ui/react-slot@1.3.0/X-ZXJlYWN0/es2022/react-slot.mjs
import * as n from "react";
function b(t6) {
  let e13 = n.forwardRef((r10, i12) => {
    let { children: o9, ...a10 } = r10, l10 = null, c6 = false, s11 = [];
    h(o9) && typeof d == "function" && (o9 = d(o9._payload)), n.Children.forEach(o9, (u7) => {
      if (x(u7)) {
        c6 = true;
        let f11 = u7, p8 = "child" in f11.props ? f11.props.child : f11.props.children;
        h(p8) && typeof d == "function" && (p8 = d(p8._payload)), l10 = _(f11, p8), s11.push(l10?.props?.children);
      } else s11.push(u7);
    }), l10 ? l10 = n.cloneElement(l10, void 0, s11) : !c6 && n.Children.count(o9) === 1 && n.isValidElement(o9) && (l10 = o9);
    let R5 = l10 ? $2(l10) : void 0, S9 = s(i12, R5);
    if (!l10) {
      if (o9 || o9 === 0) throw new Error(c6 ? V(t6) : I(t6));
      return o9;
    }
    let y8 = v(a10, l10.props ?? {});
    return l10.type !== n.Fragment && (y8.ref = i12 ? S9 : R5), n.cloneElement(l10, y8);
  });
  return e13.displayName = `${t6}.Slot`, e13;
}
var L = b("Slot");
var E = Symbol.for("radix.slottable");
function g(t6) {
  let e13 = (r10) => "child" in r10 ? r10.children(r10.child) : r10.children;
  return e13.displayName = `${t6}.Slottable`, e13.__radixId = E, e13;
}
var O = g("Slottable");
var _ = (t6, e13) => {
  if ("child" in t6.props) {
    let r10 = t6.props.child;
    return n.isValidElement(r10) ? n.cloneElement(r10, void 0, t6.props.children(r10.props.children)) : null;
  }
  return n.isValidElement(e13) ? e13 : null;
};
function v(t6, e13) {
  let r10 = { ...e13 };
  for (let i12 in e13) {
    let o9 = t6[i12], a10 = e13[i12];
    /^on[A-Z]/.test(i12) ? o9 && a10 ? r10[i12] = (...c6) => {
      let s11 = a10(...c6);
      return o9(...c6), s11;
    } : o9 && (r10[i12] = o9) : i12 === "style" ? r10[i12] = { ...o9, ...a10 } : i12 === "className" && (r10[i12] = [o9, a10].filter(Boolean).join(" "));
  }
  return { ...t6, ...r10 };
}
function $2(t6) {
  let e13 = Object.getOwnPropertyDescriptor(t6.props, "ref")?.get, r10 = e13 && "isReactWarning" in e13 && e13.isReactWarning;
  return r10 ? t6.ref : (e13 = Object.getOwnPropertyDescriptor(t6, "ref")?.get, r10 = e13 && "isReactWarning" in e13 && e13.isReactWarning, r10 ? t6.props.ref : t6.props.ref || t6.ref);
}
function x(t6) {
  return n.isValidElement(t6) && typeof t6.type == "function" && "__radixId" in t6.type && t6.type.__radixId === E;
}
var P = Symbol.for("react.lazy");
function h(t6) {
  return t6 != null && typeof t6 == "object" && "$$typeof" in t6 && t6.$$typeof === P && "_payload" in t6 && C(t6._payload);
}
function C(t6) {
  return typeof t6 == "object" && t6 !== null && "then" in t6;
}
var I = (t6) => `${t6} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
var V = (t6) => `${t6} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
var d = n[" use ".trim().toString()];

// http-url:https://esm.sh/@radix-ui/react-primitive@2.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-primitive.mjs
import { jsx as l2 } from "react/jsx-runtime";
var u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"];
var v2 = u.reduce((i12, t6) => {
  let a10 = b(`Primitive.${t6}`), r10 = o2.forwardRef((m10, s11) => {
    let { asChild: c6, ...n8 } = m10, f11 = c6 ? a10 : t6;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), l2(f11, { ...n8, ref: s11 });
  });
  return r10.displayName = `Primitive.${t6}`, { ...i12, [t6]: r10 };
}, {});
function R(i12, t6) {
  i12 && e.flushSync(() => i12.dispatchEvent(t6));
}

// http-url:https://esm.sh/@radix-ui/react-use-callback-ref@1.1.2/X-ZXJlYWN0/es2022/react-use-callback-ref.mjs
import * as e2 from "react";
function u2(t6) {
  let c6 = e2.useRef(t6);
  return e2.useEffect(() => {
    c6.current = t6;
  }), e2.useMemo(() => (...r10) => c6.current?.(...r10), []);
}

// http-url:https://esm.sh/@radix-ui/react-use-escape-keydown@1.1.2/X-ZXJlYWN0/es2022/react-use-escape-keydown.mjs
import * as n2 from "react";
function p(r10, e13 = globalThis?.document) {
  let t6 = u2(r10);
  n2.useEffect(() => {
    let a10 = (o9) => {
      o9.key === "Escape" && t6(o9);
    };
    return e13.addEventListener("keydown", a10, { capture: true }), () => e13.removeEventListener("keydown", a10, { capture: true });
  }, [t6, e13]);
}

// http-url:https://esm.sh/@radix-ui/react-dismissable-layer@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dismissable-layer.mjs
import { jsx as k } from "react/jsx-runtime";
var j = "DismissableLayer";
var g2 = "dismissableLayer.update";
var X = "dismissableLayer.pointerDownOutside";
var Y = "dismissableLayer.focusOutside";
var N;
var I2 = e3.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set(), dismissableSurfaces: /* @__PURE__ */ new Set() });
var _2 = e3.forwardRef((s11, o9) => {
  let { disableOutsidePointerEvents: t6 = false, deferPointerDownOutside: a10 = false, onEscapeKeyDown: u7, onPointerDownOutside: d5, onFocusOutside: p8, onInteractOutside: v10, onDismiss: l10, ...m10 } = s11, n8 = e3.useContext(I2), [c6, P5] = e3.useState(null), f11 = c6?.ownerDocument ?? globalThis?.document, [, y8] = e3.useState({}), O7 = s(o9, (i12) => P5(i12)), h9 = Array.from(n8.layers), [L3] = [...n8.layersWithOutsidePointerEventsDisabled].slice(-1), r10 = h9.indexOf(L3), E10 = c6 ? h9.indexOf(c6) : -1, D6 = n8.layersWithOutsidePointerEventsDisabled.size > 0, b8 = E10 >= r10, w5 = e3.useRef(false), H6 = G((i12) => {
    let R5 = i12.target;
    if (!(R5 instanceof Node)) return;
    let x7 = [...n8.branches].some((C6) => C6.contains(R5));
    !b8 || x7 || (d5?.(i12), v10?.(i12), i12.defaultPrevented || l10?.());
  }, { ownerDocument: f11, deferPointerDownOutside: a10, isDeferredPointerDownOutsideRef: w5, dismissableSurfaces: n8.dismissableSurfaces }), B5 = J((i12) => {
    if (a10 && w5.current) return;
    let R5 = i12.target;
    [...n8.branches].some((C6) => C6.contains(R5)) || (p8?.(i12), v10?.(i12), i12.defaultPrevented || l10?.());
  }, f11);
  return p((i12) => {
    E10 === n8.layers.size - 1 && (u7?.(i12), !i12.defaultPrevented && l10 && (i12.preventDefault(), l10()));
  }, f11), e3.useEffect(() => {
    if (c6) return t6 && (n8.layersWithOutsidePointerEventsDisabled.size === 0 && (N = f11.body.style.pointerEvents, f11.body.style.pointerEvents = "none"), n8.layersWithOutsidePointerEventsDisabled.add(c6)), n8.layers.add(c6), T(), () => {
      t6 && (n8.layersWithOutsidePointerEventsDisabled.delete(c6), n8.layersWithOutsidePointerEventsDisabled.size === 0 && (f11.body.style.pointerEvents = N));
    };
  }, [c6, f11, t6, n8]), e3.useEffect(() => () => {
    c6 && (n8.layers.delete(c6), n8.layersWithOutsidePointerEventsDisabled.delete(c6), T());
  }, [c6, n8]), e3.useEffect(() => {
    let i12 = () => y8({});
    return document.addEventListener(g2, i12), () => document.removeEventListener(g2, i12);
  }, []), k(v2.div, { ...m10, ref: O7, style: { pointerEvents: D6 ? b8 ? "auto" : "none" : void 0, ...s11.style }, onFocusCapture: f(s11.onFocusCapture, B5.onFocusCapture), onBlurCapture: f(s11.onBlurCapture, B5.onBlurCapture), onPointerDownCapture: f(s11.onPointerDownCapture, H6.onPointerDownCapture) });
});
_2.displayName = j;
var q = "DismissableLayerBranch";
var U = e3.forwardRef((s11, o9) => {
  let t6 = e3.useContext(I2), a10 = e3.useRef(null), u7 = s(o9, a10);
  return e3.useEffect(() => {
    let d5 = a10.current;
    if (d5) return t6.branches.add(d5), () => {
      t6.branches.delete(d5);
    };
  }, [t6.branches]), k(v2.div, { ...s11, ref: u7 });
});
U.displayName = q;
function ne() {
  let s11 = e3.useContext(I2), [o9, t6] = e3.useState(null);
  return e3.useEffect(() => {
    if (o9) return s11.dismissableSurfaces.add(o9), () => {
      s11.dismissableSurfaces.delete(o9);
    };
  }, [o9, s11.dismissableSurfaces]), t6;
}
function G(s11, o9) {
  let { ownerDocument: t6 = globalThis?.document, deferPointerDownOutside: a10 = false, isDeferredPointerDownOutsideRef: u7, dismissableSurfaces: d5 } = o9, p8 = u2(s11), v10 = e3.useRef(false), l10 = e3.useRef(false), m10 = e3.useRef(/* @__PURE__ */ new Map()), n8 = e3.useRef(() => {
  });
  return e3.useEffect(() => {
    function c6() {
      l10.current = false, u7.current = false, m10.current.clear();
    }
    function P5() {
      return Array.from(m10.current.values()).some(Boolean);
    }
    function f11(r10) {
      if (!l10.current) return;
      let E10 = r10.target;
      E10 instanceof Node && [...d5].some((b8) => b8.contains(E10)) || m10.current.set(r10.type, true), r10.type === "click" && window.setTimeout(() => {
        l10.current && n8.current();
      }, 0);
    }
    function y8(r10) {
      l10.current && m10.current.set(r10.type, false);
    }
    let O7 = (r10) => {
      if (r10.target && !v10.current) {
        let D6 = function() {
          t6.removeEventListener("click", n8.current);
          let w5 = P5();
          c6(), w5 || z(X, p8, b8, { discrete: true });
        };
        var E10 = D6;
        let b8 = { originalEvent: r10 };
        l10.current = true, u7.current = a10 && r10.button === 0, m10.current.clear(), !a10 || r10.button !== 0 ? D6() : (t6.removeEventListener("click", n8.current), n8.current = D6, t6.addEventListener("click", n8.current, { once: true }));
      } else t6.removeEventListener("click", n8.current), c6();
      v10.current = false;
    }, h9 = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
    for (let r10 of h9) t6.addEventListener(r10, f11, true), t6.addEventListener(r10, y8);
    let L3 = window.setTimeout(() => {
      t6.addEventListener("pointerdown", O7);
    }, 0);
    return () => {
      window.clearTimeout(L3), t6.removeEventListener("pointerdown", O7), t6.removeEventListener("click", n8.current);
      for (let r10 of h9) t6.removeEventListener(r10, f11, true), t6.removeEventListener(r10, y8);
    };
  }, [t6, p8, a10, u7, d5]), { onPointerDownCapture: () => v10.current = true };
}
function J(s11, o9 = globalThis?.document) {
  let t6 = u2(s11), a10 = e3.useRef(false);
  return e3.useEffect(() => {
    let u7 = (d5) => {
      d5.target && !a10.current && z(Y, t6, { originalEvent: d5 }, { discrete: false });
    };
    return o9.addEventListener("focusin", u7), () => o9.removeEventListener("focusin", u7);
  }, [o9, t6]), { onFocusCapture: () => a10.current = true, onBlurCapture: () => a10.current = false };
}
function T() {
  let s11 = new CustomEvent(g2);
  document.dispatchEvent(s11);
}
function z(s11, o9, t6, { discrete: a10 }) {
  let u7 = t6.originalEvent.target, d5 = new CustomEvent(s11, { bubbles: false, cancelable: true, detail: t6 });
  o9 && u7.addEventListener(s11, o9, { once: true }), a10 ? R(u7, d5) : u7.dispatchEvent(d5);
}

// http-url:https://esm.sh/@radix-ui/react-focus-guards@1.1.4/X-ZXJlYWN0/es2022/react-focus-guards.mjs
import * as s2 from "react";
var n3 = 0;
var t = null;
function a() {
  s2.useEffect(() => {
    t || (t = { start: r(), end: r() });
    let { start: e13, end: o9 } = t;
    return document.body.firstElementChild !== e13 && document.body.insertAdjacentElement("afterbegin", e13), document.body.lastElementChild !== o9 && document.body.insertAdjacentElement("beforeend", o9), n3++, () => {
      n3 === 1 && (t?.start.remove(), t?.end.remove(), t = null), n3 = Math.max(0, n3 - 1);
    };
  }, []);
}
function r() {
  let e13 = document.createElement("span");
  return e13.setAttribute("data-radix-focus-guard", ""), e13.tabIndex = 0, e13.style.outline = "none", e13.style.opacity = "0", e13.style.position = "fixed", e13.style.pointerEvents = "none", e13;
}

// http-url:https://esm.sh/@radix-ui/react-focus-scope@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-focus-scope.mjs
import * as c from "react";
import { jsx as x2 } from "react/jsx-runtime";
var y = "focusScope.autoFocusOnMount";
var N2 = "focusScope.autoFocusOnUnmount";
var O2 = { bubbles: false, cancelable: true };
var D = "FocusScope";
var L2 = c.forwardRef((e13, t6) => {
  let { loop: n8 = false, trapped: s11 = false, onMountAutoFocus: v10, onUnmountAutoFocus: U4, ...A5 } = e13, [o9, M3] = c.useState(null), E10 = u2(v10), F2 = u2(U4), b8 = c.useRef(null), P5 = s(t6, (u7) => M3(u7)), a10 = c.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  c.useEffect(() => {
    if (s11) {
      let d5 = function(p8) {
        if (a10.paused || !o9) return;
        let m10 = p8.target;
        o9.contains(m10) ? b8.current = m10 : i3(b8.current, { select: true });
      }, f11 = function(p8) {
        if (a10.paused || !o9) return;
        let m10 = p8.relatedTarget;
        m10 !== null && (o9.contains(m10) || i3(b8.current, { select: true }));
      }, l10 = function(p8) {
        if (document.activeElement === document.body) for (let K4 of p8) K4.removedNodes.length > 0 && i3(o9);
      };
      var u7 = d5, h9 = f11, r10 = l10;
      document.addEventListener("focusin", d5), document.addEventListener("focusout", f11);
      let T6 = new MutationObserver(l10);
      return o9 && T6.observe(o9, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", d5), document.removeEventListener("focusout", f11), T6.disconnect();
      };
    }
  }, [s11, o9, a10.paused]), c.useEffect(() => {
    if (o9) {
      C2.add(a10);
      let u7 = document.activeElement;
      if (!o9.contains(u7)) {
        let r10 = new CustomEvent(y, O2);
        o9.addEventListener(y, E10), o9.dispatchEvent(r10), r10.defaultPrevented || (H(z2(g3(o9)), { select: true }), document.activeElement === u7 && i3(o9));
      }
      return () => {
        o9.removeEventListener(y, E10), setTimeout(() => {
          let r10 = new CustomEvent(N2, O2);
          o9.addEventListener(N2, F2), o9.dispatchEvent(r10), r10.defaultPrevented || i3(u7 ?? document.body, { select: true }), o9.removeEventListener(N2, F2), C2.remove(a10);
        }, 0);
      };
    }
  }, [o9, E10, F2, a10]);
  let _7 = c.useCallback((u7) => {
    if (!n8 && !s11 || a10.paused) return;
    let h9 = u7.key === "Tab" && !u7.altKey && !u7.ctrlKey && !u7.metaKey, r10 = document.activeElement;
    if (h9 && r10) {
      let d5 = u7.currentTarget, [f11, l10] = V2(d5);
      f11 && l10 ? !u7.shiftKey && r10 === l10 ? (u7.preventDefault(), n8 && i3(f11, { select: true })) : u7.shiftKey && r10 === f11 && (u7.preventDefault(), n8 && i3(l10, { select: true })) : r10 === d5 && u7.preventDefault();
    }
  }, [n8, s11, a10.paused]);
  return x2(v2.div, { tabIndex: -1, ...A5, ref: P5, onKeyDown: _7 });
});
L2.displayName = D;
function H(e13, { select: t6 = false } = {}) {
  let n8 = document.activeElement;
  for (let s11 of e13) if (i3(s11, { select: t6 }), document.activeElement !== n8) return;
}
function V2(e13) {
  let t6 = g3(e13), n8 = R2(t6, e13), s11 = R2(t6.reverse(), e13);
  return [n8, s11];
}
function g3(e13) {
  let t6 = [], n8 = document.createTreeWalker(e13, NodeFilter.SHOW_ELEMENT, { acceptNode: (s11) => {
    let v10 = s11.tagName === "INPUT" && s11.type === "hidden";
    return s11.disabled || s11.hidden || v10 ? NodeFilter.FILTER_SKIP : s11.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n8.nextNode(); ) t6.push(n8.currentNode);
  return t6;
}
function R2(e13, t6) {
  for (let n8 of e13) if (!W(n8, { upTo: t6 })) return n8;
}
function W(e13, { upTo: t6 }) {
  if (getComputedStyle(e13).visibility === "hidden") return true;
  for (; e13; ) {
    if (t6 !== void 0 && e13 === t6) return false;
    if (getComputedStyle(e13).display === "none") return true;
    e13 = e13.parentElement;
  }
  return false;
}
function j2(e13) {
  return e13 instanceof HTMLInputElement && "select" in e13;
}
function i3(e13, { select: t6 = false } = {}) {
  if (e13 && e13.focus) {
    let n8 = document.activeElement;
    e13.focus({ preventScroll: true }), e13 !== n8 && j2(e13) && t6 && e13.select();
  }
}
var C2 = q2();
function q2() {
  let e13 = [];
  return { add(t6) {
    let n8 = e13[0];
    t6 !== n8 && n8?.pause(), e13 = I3(e13, t6), e13.unshift(t6);
  }, remove(t6) {
    e13 = I3(e13, t6), e13[0]?.resume();
  } };
}
function I3(e13, t6) {
  let n8 = [...e13], s11 = n8.indexOf(t6);
  return s11 !== -1 && n8.splice(s11, 1), n8;
}
function z2(e13) {
  return e13.filter((t6) => t6.tagName !== "A");
}

// http-url:https://esm.sh/@radix-ui/react-id@1.1.2/X-ZXJlYWN0/es2022/react-id.mjs
import * as o3 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-layout-effect@1.1.2/X-ZXJlYWN0/es2022/react-use-layout-effect.mjs
import * as t2 from "react";
var e4 = globalThis?.document ? t2.useLayoutEffect : () => {
};

// http-url:https://esm.sh/@radix-ui/react-id@1.1.2/X-ZXJlYWN0/es2022/react-id.mjs
var f3 = o3[" useId ".trim().toString()] || (() => {
});
var s3 = 0;
function n4(t6) {
  let [r10, a10] = o3.useState(f3());
  return e4(() => {
    t6 || a10((e13) => e13 ?? String(s3++));
  }, [t6]), t6 || (r10 ? `radix-${r10}` : "");
}

// http-url:https://esm.sh/@radix-ui/react-portal@1.1.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-portal.mjs
import * as t3 from "react";
import * as r2 from "react-dom";
import { jsx as p2 } from "react/jsx-runtime";
var u3 = "Portal";
var e5 = t3.forwardRef((a10, c6) => {
  let { container: i12, ...n8 } = a10, [m10, s11] = t3.useState(false);
  e4(() => s11(true), []);
  let o9 = i12 || m10 && globalThis?.document?.body;
  return o9 ? r2.createPortal(p2(v2.div, { ...n8, ref: c6 }), o9) : null;
});
e5.displayName = u3;

// http-url:https://esm.sh/@radix-ui/react-presence@1.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-presence.mjs
import * as t4 from "react";
import * as g4 from "react";
function E2(n8, e13) {
  return g4.useReducer((r10, o9) => e13[r10][o9] ?? r10, n8);
}
var y2 = (n8) => {
  let { present: e13, children: r10 } = n8, o9 = v3(e13), i12 = typeof r10 == "function" ? r10({ present: o9.isPresent }) : t4.Children.only(r10), u7 = S2(o9.ref, h2(i12));
  return typeof r10 == "function" || o9.isPresent ? t4.cloneElement(i12, { ref: u7 }) : null;
};
y2.displayName = "Presence";
function v3(n8) {
  let [e13, r10] = t4.useState(), o9 = t4.useRef(null), i12 = t4.useRef(n8), u7 = t4.useRef("none"), s11 = n8 ? "mounted" : "unmounted", [c6, f11] = E2(s11, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return t4.useEffect(() => {
    let a10 = N3(o9.current);
    u7.current = c6 === "mounted" ? a10 : "none";
  }, [c6]), e4(() => {
    let a10 = o9.current, m10 = i12.current;
    if (m10 !== n8) {
      let p8 = u7.current, l10 = N3(a10);
      n8 ? f11("MOUNT") : l10 === "none" || a10?.display === "none" ? f11("UNMOUNT") : f11(m10 && p8 !== l10 ? "ANIMATION_OUT" : "UNMOUNT"), i12.current = n8;
    }
  }, [n8, f11]), e4(() => {
    if (e13) {
      let a10, m10 = e13.ownerDocument.defaultView ?? window, d5 = (l10) => {
        let O7 = N3(o9.current).includes(CSS.escape(l10.animationName));
        if (l10.target === e13 && O7 && (f11("ANIMATION_END"), !i12.current)) {
          let T6 = e13.style.animationFillMode;
          e13.style.animationFillMode = "forwards", a10 = m10.setTimeout(() => {
            e13.style.animationFillMode === "forwards" && (e13.style.animationFillMode = T6);
          });
        }
      }, p8 = (l10) => {
        l10.target === e13 && (u7.current = N3(o9.current));
      };
      return e13.addEventListener("animationstart", p8), e13.addEventListener("animationcancel", d5), e13.addEventListener("animationend", d5), () => {
        m10.clearTimeout(a10), e13.removeEventListener("animationstart", p8), e13.removeEventListener("animationcancel", d5), e13.removeEventListener("animationend", d5);
      };
    } else f11("ANIMATION_END");
  }, [e13, f11]), { isPresent: ["mounted", "unmountSuspended"].includes(c6), ref: t4.useCallback((a10) => {
    o9.current = a10 ? getComputedStyle(a10) : null, r10(a10);
  }, []) };
}
function A(n8, e13) {
  if (typeof n8 == "function") return n8(e13);
  n8 != null && (n8.current = e13);
}
function S2(...n8) {
  let e13 = t4.useRef(n8);
  return e13.current = n8, t4.useCallback((r10) => {
    let o9 = e13.current, i12 = false, u7 = o9.map((s11) => {
      let c6 = A(s11, r10);
      return !i12 && typeof c6 == "function" && (i12 = true), c6;
    });
    if (i12) return () => {
      for (let s11 = 0; s11 < u7.length; s11++) {
        let c6 = u7[s11];
        typeof c6 == "function" ? c6() : A(o9[s11], null);
      }
    };
  }, []);
}
function N3(n8) {
  return n8?.animationName || "none";
}
function h2(n8) {
  let e13 = Object.getOwnPropertyDescriptor(n8.props, "ref")?.get, r10 = e13 && "isReactWarning" in e13 && e13.isReactWarning;
  return r10 ? n8.ref : (e13 = Object.getOwnPropertyDescriptor(n8, "ref")?.get, r10 = e13 && "isReactWarning" in e13 && e13.isReactWarning, r10 ? n8.props.ref : n8.props.ref || n8.ref);
}

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
import * as n6 from "react";
import * as c2 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-effect-event@0.0.3/X-ZXJlYWN0/es2022/react-use-effect-event.mjs
import * as e6 from "react";
var n5 = e6[" useEffectEvent ".trim().toString()];
var f4 = e6[" useInsertionEffect ".trim().toString()];

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
var w = n6[" useInsertionEffect ".trim().toString()] || e4;
function D2({ prop: e13, defaultProp: a10, onChange: s11 = () => {
}, caller: i12 }) {
  let [t6, f11, v10] = $3({ defaultProp: a10, onChange: s11 }), l10 = e13 !== void 0, r10 = l10 ? e13 : t6;
  {
    let u7 = n6.useRef(e13 !== void 0);
    n6.useEffect(() => {
      let o9 = u7.current;
      o9 !== l10 && console.warn(`${i12} is changing from ${o9 ? "controlled" : "uncontrolled"} to ${l10 ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), u7.current = l10;
    }, [l10, i12]);
  }
  let C6 = n6.useCallback((u7) => {
    if (l10) {
      let o9 = y3(u7) ? u7(e13) : u7;
      o9 !== e13 && v10.current?.(o9);
    } else f11(u7);
  }, [l10, e13, f11, v10]);
  return [r10, C6];
}
function $3({ defaultProp: e13, onChange: a10 }) {
  let [s11, i12] = n6.useState(e13), t6 = n6.useRef(s11), f11 = n6.useRef(a10);
  return w(() => {
    f11.current = a10;
  }, [a10]), n6.useEffect(() => {
    t6.current !== s11 && (f11.current?.(s11), t6.current = s11);
  }, [s11, t6]), [s11, i12, f11];
}
function y3(e13) {
  return typeof e13 == "function";
}
var E3 = Symbol("RADIX:SYNC_STATE");

// http-url:https://esm.sh/aria-hidden@1.2.6/es2022/aria-hidden.mjs
var W2 = function(r10) {
  if (typeof document > "u") return null;
  var a10 = Array.isArray(r10) ? r10[0] : r10;
  return a10.ownerDocument.body;
};
var f5 = /* @__PURE__ */ new WeakMap();
var v4 = /* @__PURE__ */ new WeakMap();
var p3 = {};
var h3 = 0;
var b2 = function(r10) {
  return r10 && (r10.host || b2(r10.parentNode));
};
var P2 = function(r10, a10) {
  return a10.map(function(t6) {
    if (r10.contains(t6)) return t6;
    var u7 = b2(t6);
    return u7 && r10.contains(u7) ? u7 : (console.error("aria-hidden", t6, "in not contained inside", r10, ". Doing nothing"), null);
  }).filter(function(t6) {
    return !!t6;
  });
};
var E4 = function(r10, a10, t6, u7) {
  var i12 = P2(a10, Array.isArray(r10) ? r10 : [r10]);
  p3[t6] || (p3[t6] = /* @__PURE__ */ new WeakMap());
  var s11 = p3[t6], l10 = [], c6 = /* @__PURE__ */ new Set(), O7 = new Set(i12), y8 = function(e13) {
    !e13 || c6.has(e13) || (c6.add(e13), y8(e13.parentNode));
  };
  i12.forEach(y8);
  var d5 = function(e13) {
    !e13 || O7.has(e13) || Array.prototype.forEach.call(e13.children, function(n8) {
      if (c6.has(n8)) d5(n8);
      else try {
        var o9 = n8.getAttribute(u7), A5 = o9 !== null && o9 !== "false", w5 = (f5.get(n8) || 0) + 1, M3 = (s11.get(n8) || 0) + 1;
        f5.set(n8, w5), s11.set(n8, M3), l10.push(n8), w5 === 1 && A5 && v4.set(n8, true), M3 === 1 && n8.setAttribute(t6, "true"), A5 || n8.setAttribute(u7, "true");
      } catch (x7) {
        console.error("aria-hidden: cannot operate on ", n8, x7);
      }
    });
  };
  return d5(a10), c6.clear(), h3++, function() {
    l10.forEach(function(e13) {
      var n8 = f5.get(e13) - 1, o9 = s11.get(e13) - 1;
      f5.set(e13, n8), s11.set(e13, o9), n8 || (v4.has(e13) || e13.removeAttribute(u7), v4.delete(e13)), o9 || e13.removeAttribute(t6);
    }), h3--, h3 || (f5 = /* @__PURE__ */ new WeakMap(), f5 = /* @__PURE__ */ new WeakMap(), v4 = /* @__PURE__ */ new WeakMap(), p3 = {});
  };
};
var S3 = function(r10, a10, t6) {
  t6 === void 0 && (t6 = "data-aria-hidden");
  var u7 = Array.from(Array.isArray(r10) ? r10 : [r10]), i12 = a10 || W2(r10);
  return i12 ? (u7.push.apply(u7, Array.from(i12.querySelectorAll("[aria-live], script"))), E4(u7, i12, t6, "aria-hidden")) : function() {
    return null;
  };
};

// http-url:https://esm.sh/tslib@2.8.1/es2022/tslib.mjs
var v5 = function() {
  return v5 = Object.assign || function(t6) {
    for (var r10, n8 = 1, i12 = arguments.length; n8 < i12; n8++) {
      r10 = arguments[n8];
      for (var o9 in r10) Object.prototype.hasOwnProperty.call(r10, o9) && (t6[o9] = r10[o9]);
    }
    return t6;
  }, v5.apply(this, arguments);
};
function S4(e13, t6) {
  var r10 = {};
  for (var n8 in e13) Object.prototype.hasOwnProperty.call(e13, n8) && t6.indexOf(n8) < 0 && (r10[n8] = e13[n8]);
  if (e13 != null && typeof Object.getOwnPropertySymbols == "function") for (var i12 = 0, n8 = Object.getOwnPropertySymbols(e13); i12 < n8.length; i12++) t6.indexOf(n8[i12]) < 0 && Object.prototype.propertyIsEnumerable.call(e13, n8[i12]) && (r10[n8[i12]] = e13[n8[i12]]);
  return r10;
}
function V3(e13, t6, r10) {
  if (r10 || arguments.length === 2) for (var n8 = 0, i12 = t6.length, o9; n8 < i12; n8++) (o9 || !(n8 in t6)) && (o9 || (o9 = Array.prototype.slice.call(t6, 0, n8)), o9[n8] = t6[n8]);
  return e13.concat(o9 || Array.prototype.slice.call(t6));
}

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/Combination.mjs
import * as e12 from "react";

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/UI.mjs
import * as e9 from "react";

// http-url:https://esm.sh/react-remove-scroll-bar@2.3.8/X-ZXJlYWN0/es2022/constants.mjs
var r3 = "right-scroll-bar-position";
var a2 = "width-before-scroll-bar";

// http-url:https://esm.sh/use-callback-ref@1.3.3/X-ZXJlYWN0/es2022/use-callback-ref.mjs
import { useState as k2 } from "react";
import * as i5 from "react";
function o4(r10, e13) {
  return typeof r10 == "function" ? r10(e13) : r10 && (r10.current = e13), r10;
}
function u4(r10, e13) {
  var t6 = k2(function() {
    return { value: r10, callback: e13, facade: { get current() {
      return t6.value;
    }, set current(n8) {
      var a10 = t6.value;
      a10 !== n8 && (t6.value = n8, t6.callback(n8, a10));
    } } };
  })[0];
  return t6.callback = e13, t6.facade;
}
var x3 = typeof window < "u" ? i5.useLayoutEffect : i5.useEffect;
var s4 = /* @__PURE__ */ new WeakMap();
function v6(r10, e13) {
  var t6 = u4(e13 || null, function(n8) {
    return r10.forEach(function(a10) {
      return o4(a10, n8);
    });
  });
  return x3(function() {
    var n8 = s4.get(t6);
    if (n8) {
      var a10 = new Set(n8), l10 = new Set(r10), R5 = t6.current;
      a10.forEach(function(f11) {
        l10.has(f11) || o4(f11, null);
      }), l10.forEach(function(f11) {
        a10.has(f11) || o4(f11, R5);
      });
    }
    s4.set(t6, r10);
  }, [r10]), t6;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/exports.mjs
import * as i6 from "react";
var a3 = function(r10) {
  var e13 = r10.sideCar, o9 = S4(r10, ["sideCar"]);
  if (!e13) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var t6 = e13.read();
  if (!t6) throw new Error("Sidecar medium not found");
  return i6.createElement(t6, v5({}, o9));
};
a3.isSideCarExport = true;
function p4(r10, e13) {
  return r10.useMedium(e13), a3;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/hoc.mjs
import * as i8 from "react";

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/hook.mjs
import { useState as l3, useEffect as p5 } from "react";

// http-url:https://esm.sh/node/async_hooks.mjs
var c3 = class {
  __unenv__ = true;
  _currentStore;
  _enterStore;
  _enabled = true;
  getStore() {
    return this._currentStore ?? this._enterStore;
  }
  disable() {
    this._enabled = false;
  }
  enable() {
    this._enabled = true;
  }
  enterWith(e13) {
    this._enterStore = e13;
  }
  run(e13, r10, ...t6) {
    this._currentStore = e13;
    let n8 = r10(...t6);
    return this._currentStore = void 0, n8;
  }
  exit(e13, ...r10) {
    let t6 = this._currentStore;
    this._currentStore = void 0;
    let n8 = e13(...r10);
    return this._currentStore = t6, n8;
  }
  static snapshot() {
    throw new Error("[unenv] `AsyncLocalStorage.snapshot` is not implemented!");
  }
};
var S5 = globalThis.AsyncLocalStorage || c3;
var R3 = Symbol("init");
var a4 = Symbol("before");
var o5 = Symbol("after");
var i7 = Symbol("destroy");
var A2 = Symbol("promiseResolve");
var T2 = class {
  __unenv__ = true;
  _enabled = false;
  _callbacks = {};
  constructor(e13 = {}) {
    this._callbacks = e13;
  }
  enable() {
    return this._enabled = true, this;
  }
  disable() {
    return this._enabled = false, this;
  }
  get [R3]() {
    return this._callbacks.init;
  }
  get [a4]() {
    return this._callbacks.before;
  }
  get [o5]() {
    return this._callbacks.after;
  }
  get [i7]() {
    return this._callbacks.destroy;
  }
  get [A2]() {
    return this._callbacks.promiseResolve;
  }
};
var s5 = function() {
  return 0;
};
var I4 = Object.assign(/* @__PURE__ */ Object.create(null), { NONE: 0, DIRHANDLE: 1, DNSCHANNEL: 2, ELDHISTOGRAM: 3, FILEHANDLE: 4, FILEHANDLECLOSEREQ: 5, BLOBREADER: 6, FSEVENTWRAP: 7, FSREQCALLBACK: 8, FSREQPROMISE: 9, GETADDRINFOREQWRAP: 10, GETNAMEINFOREQWRAP: 11, HEAPSNAPSHOT: 12, HTTP2SESSION: 13, HTTP2STREAM: 14, HTTP2PING: 15, HTTP2SETTINGS: 16, HTTPINCOMINGMESSAGE: 17, HTTPCLIENTREQUEST: 18, JSSTREAM: 19, JSUDPWRAP: 20, MESSAGEPORT: 21, PIPECONNECTWRAP: 22, PIPESERVERWRAP: 23, PIPEWRAP: 24, PROCESSWRAP: 25, PROMISE: 26, QUERYWRAP: 27, QUIC_ENDPOINT: 28, QUIC_LOGSTREAM: 29, QUIC_PACKET: 30, QUIC_SESSION: 31, QUIC_STREAM: 32, QUIC_UDP: 33, SHUTDOWNWRAP: 34, SIGNALWRAP: 35, STATWATCHER: 36, STREAMPIPE: 37, TCPCONNECTWRAP: 38, TCPSERVERWRAP: 39, TCPWRAP: 40, TTYWRAP: 41, UDPSENDWRAP: 42, UDPWRAP: 43, SIGINTWATCHDOG: 44, WORKER: 45, WORKERHEAPSNAPSHOT: 46, WRITEWRAP: 47, ZLIB: 48, CHECKPRIMEREQUEST: 49, PBKDF2REQUEST: 50, KEYPAIRGENREQUEST: 51, KEYGENREQUEST: 52, KEYEXPORTREQUEST: 53, CIPHERREQUEST: 54, DERIVEBITSREQUEST: 55, HASHREQUEST: 56, RANDOMBYTESREQUEST: 57, RANDOMPRIMEREQUEST: 58, SCRYPTREQUEST: 59, SIGNREQUEST: 60, TLSWRAP: 61, VERIFYREQUEST: 62 });
var _3 = 100;
var y4 = class {
  __unenv__ = true;
  type;
  _asyncId;
  _triggerAsyncId;
  constructor(e13, r10 = s5()) {
    this.type = e13, this._asyncId = -1 * _3++, this._triggerAsyncId = typeof r10 == "number" ? r10 : r10?.triggerAsyncId;
  }
  static bind(e13, r10, t6) {
    return new E5(r10 ?? "anonymous").bind(e13);
  }
  bind(e13, r10) {
    let t6 = (...n8) => this.runInAsyncScope(e13, r10, ...n8);
    return t6.asyncResource = this, t6;
  }
  runInAsyncScope(e13, r10, ...t6) {
    return e13.apply(r10, t6);
  }
  emitDestroy() {
    return this;
  }
  asyncId() {
    return this._asyncId;
  }
  triggerAsyncId() {
    return this._triggerAsyncId;
  }
};
var E5 = globalThis.AsyncResource || y4;

// http-url:https://esm.sh/node/events.mjs
function te(e13) {
  return new Error(`[unenv] ${e13} is not implemented yet!`);
}
function w2(e13) {
  return Object.assign(() => {
    throw te(e13);
  }, { __unenv__: true });
}
var y5 = 10;
var ne2 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
}).prototype);
var G2 = (e13, t6) => e13;
var _4 = Error;
var ie = Error;
var v7 = Error;
var b3 = Error;
var se = Error;
var C3 = Symbol.for("nodejs.rejection");
var f6 = Symbol.for("kCapture");
var M = Symbol.for("events.errorMonitor");
var d2 = Symbol.for("shapeMode");
var x4 = Symbol.for("events.maxEventTargetListeners");
var oe = Symbol.for("kEnhanceStackBeforeInspector");
var ue = Symbol.for("nodejs.watermarkData");
var S6 = Symbol.for("kEventEmitter");
var h4 = Symbol.for("kAsyncResource");
var le = Symbol.for("kFirstEventParam");
var P3 = Symbol.for("kResistStopPropagation");
var W3 = Symbol.for("events.maxEventTargetListenersWarned");
var U2 = class E6 {
  _events = void 0;
  _eventsCount = 0;
  _maxListeners = y5;
  [f6] = false;
  [d2] = false;
  static captureRejectionSymbol = C3;
  static errorMonitor = M;
  static kMaxEventTargetListeners = x4;
  static kMaxEventTargetListenersWarned = W3;
  static usingDomains = false;
  static get on() {
    return fe;
  }
  static get once() {
    return he;
  }
  static get getEventListeners() {
    return ve;
  }
  static get getMaxListeners() {
    return me;
  }
  static get addAbortListener() {
    return X2;
  }
  static get EventEmitterAsyncResource() {
    return ae;
  }
  static get EventEmitter() {
    return E6;
  }
  static setMaxListeners(t6 = y5, ...r10) {
    if (r10.length === 0) y5 = t6;
    else for (let n8 of r10) if (J2(n8)) n8[x4] = t6, n8[W3] = false;
    else if (typeof n8.setMaxListeners == "function") n8.setMaxListeners(t6);
    else throw new v7("eventTargets", ["EventEmitter", "EventTarget"], n8);
  }
  static listenerCount(t6, r10) {
    if (typeof t6.listenerCount == "function") return t6.listenerCount(r10);
    E6.prototype.listenerCount.call(t6, r10);
  }
  static init() {
    throw new Error("EventEmitter.init() is not implemented.");
  }
  static get captureRejections() {
    return this[f6];
  }
  static set captureRejections(t6) {
    this[f6] = t6;
  }
  static get defaultMaxListeners() {
    return y5;
  }
  static set defaultMaxListeners(t6) {
    y5 = t6;
  }
  constructor(t6) {
    this._events === void 0 || this._events === Object.getPrototypeOf(this)._events ? (this._events = { __proto__: null }, this._eventsCount = 0, this[d2] = false) : this[d2] = true, this._maxListeners = this._maxListeners || void 0, t6?.captureRejections ? this[f6] = !!t6.captureRejections : this[f6] = E6.prototype[f6];
  }
  setMaxListeners(t6) {
    return this._maxListeners = t6, this;
  }
  getMaxListeners() {
    return T3(this);
  }
  emit(t6, ...r10) {
    let n8 = t6 === "error", i12 = this._events;
    if (i12 !== void 0) n8 && i12[M] !== void 0 && this.emit(M, ...r10), n8 = n8 && i12.error === void 0;
    else if (!n8) return false;
    if (n8) {
      let s11;
      if (r10.length > 0 && (s11 = r10[0]), s11 instanceof Error) {
        try {
          let c6 = {};
          Error.captureStackTrace?.(c6, E6.prototype.emit), Object.defineProperty(s11, oe, { __proto__: null, value: Function.prototype.bind(de, this, s11, c6), configurable: true });
        } catch {
        }
        throw s11;
      }
      let l10;
      try {
        l10 = G2(s11);
      } catch {
        l10 = s11;
      }
      let a10 = new ie(l10);
      throw a10.context = s11, a10;
    }
    let o9 = i12[t6];
    if (o9 === void 0) return false;
    if (typeof o9 == "function") {
      let s11 = o9.apply(this, r10);
      s11 != null && K(this, s11, t6, r10);
    } else {
      let s11 = o9.length, l10 = I5(o9);
      for (let a10 = 0; a10 < s11; ++a10) {
        let c6 = l10[a10].apply(this, r10);
        c6 != null && K(this, c6, t6, r10);
      }
    }
    return true;
  }
  addListener(t6, r10) {
    return q3(this, t6, r10, false), this;
  }
  on(t6, r10) {
    return this.addListener(t6, r10);
  }
  prependListener(t6, r10) {
    return q3(this, t6, r10, true), this;
  }
  once(t6, r10) {
    return this.on(t6, z3(this, t6, r10)), this;
  }
  prependOnceListener(t6, r10) {
    return this.prependListener(t6, z3(this, t6, r10)), this;
  }
  removeListener(t6, r10) {
    let n8 = this._events;
    if (n8 === void 0) return this;
    let i12 = n8[t6];
    if (i12 === void 0) return this;
    if (i12 === r10 || i12.listener === r10) this._eventsCount -= 1, this[d2] ? n8[t6] = void 0 : this._eventsCount === 0 ? this._events = { __proto__: null } : (delete n8[t6], n8.removeListener && this.emit("removeListener", t6, i12.listener || r10));
    else if (typeof i12 != "function") {
      let o9 = -1;
      for (let s11 = i12.length - 1; s11 >= 0; s11--) if (i12[s11] === r10 || i12[s11].listener === r10) {
        o9 = s11;
        break;
      }
      if (o9 < 0) return this;
      o9 === 0 ? i12.shift() : ge(i12, o9), i12.length === 1 && (n8[t6] = i12[0]), n8.removeListener !== void 0 && this.emit("removeListener", t6, r10);
    }
    return this;
  }
  off(t6, r10) {
    return this.removeListener(t6, r10);
  }
  removeAllListeners(t6) {
    let r10 = this._events;
    if (r10 === void 0) return this;
    if (r10.removeListener === void 0) return arguments.length === 0 ? (this._events = { __proto__: null }, this._eventsCount = 0) : r10[t6] !== void 0 && (--this._eventsCount === 0 ? this._events = { __proto__: null } : delete r10[t6]), this[d2] = false, this;
    if (arguments.length === 0) {
      for (let i12 of Reflect.ownKeys(r10)) i12 !== "removeListener" && this.removeAllListeners(i12);
      return this.removeAllListeners("removeListener"), this._events = { __proto__: null }, this._eventsCount = 0, this[d2] = false, this;
    }
    let n8 = r10[t6];
    if (typeof n8 == "function") this.removeListener(t6, n8);
    else if (n8 !== void 0) for (let i12 = n8.length - 1; i12 >= 0; i12--) this.removeListener(t6, n8[i12]);
    return this;
  }
  listeners(t6) {
    return B(this, t6, true);
  }
  rawListeners(t6) {
    return B(this, t6, false);
  }
  eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  }
  listenerCount(t6, r10) {
    let n8 = this._events;
    if (n8 !== void 0) {
      let i12 = n8[t6];
      if (typeof i12 == "function") return r10 != null ? r10 === i12 || r10 === i12.listener ? 1 : 0 : 1;
      if (i12 !== void 0) {
        if (r10 != null) {
          let o9 = 0;
          for (let s11 = 0, l10 = i12.length; s11 < l10; s11++) (i12[s11] === r10 || i12[s11].listener === r10) && o9++;
          return o9;
        }
        return i12.length;
      }
    }
    return 0;
  }
};
var ae = class extends U2 {
  constructor(e13) {
    let t6;
    typeof e13 == "string" ? (t6 = e13, e13 = void 0) : t6 = e13?.name || new.target.name, super(e13), this[h4] = new ce(this, t6, e13);
  }
  emit(e13, ...t6) {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    let { asyncResource: r10 } = this;
    return Array.prototype.unshift(t6, super.emit, this, e13), Reflect.apply(r10.runInAsyncScope, r10, t6);
  }
  emitDestroy() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    this.asyncResource.emitDestroy();
  }
  get asyncId() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    return this.asyncResource.asyncId();
  }
  get triggerAsyncId() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    return this.asyncResource.triggerAsyncId();
  }
  get asyncResource() {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    return this[h4];
  }
};
var ce = class extends E5 {
  constructor(e13, t6, r10) {
    super(t6, r10), this[S6] = e13;
  }
  get eventEmitter() {
    if (this[S6] === void 0) throw new _4("EventEmitterReferencingAsyncResource");
    return this[S6];
  }
};
var fe = function(e13, t6, r10 = {}) {
  let n8 = r10.signal;
  if (n8?.aborted) throw new b3(void 0, { cause: n8?.reason });
  let i12 = r10.highWaterMark ?? r10.highWatermark ?? Number.MAX_SAFE_INTEGER, o9 = r10.lowWaterMark ?? r10.lowWatermark ?? 1, s11 = new N4(), l10 = new N4(), a10 = false, c6 = null, m10 = false, p8 = 0, Q4 = Object.setPrototypeOf({ next() {
    if (p8) {
      let u7 = s11.shift();
      return p8--, a10 && p8 < o9 && (e13.resume?.(), a10 = false), Promise.resolve(k3(u7, false));
    }
    if (c6) {
      let u7 = Promise.reject(c6);
      return c6 = null, u7;
    }
    return m10 ? L3() : new Promise(function(u7, ee5) {
      l10.push({ resolve: u7, reject: ee5 });
    });
  }, return() {
    return L3();
  }, throw(u7) {
    if (!u7 || !(u7 instanceof Error)) throw new v7("EventEmitter.AsyncIterator", "Error", u7);
    R5(u7);
  }, [Symbol.asyncIterator]() {
    return this;
  }, [ue]: { get size() {
    return p8;
  }, get low() {
    return o9;
  }, get high() {
    return i12;
  }, get isPaused() {
    return a10;
  } } }, ne2), { addEventListener: A5, removeAll: V7 } = Ee();
  A5(e13, t6, r10[le] ? $7 : function(...u7) {
    return $7(u7);
  }), t6 !== "error" && typeof e13.on == "function" && A5(e13, "error", R5);
  let F2 = r10?.close;
  if (F2?.length) for (let u7 of F2) A5(e13, u7, L3);
  let Y4 = n8 ? X2(n8, Z4) : null;
  return Q4;
  function Z4() {
    R5(new b3(void 0, { cause: n8?.reason }));
  }
  function $7(u7) {
    l10.isEmpty() ? (p8++, !a10 && p8 > i12 && (a10 = true, e13.pause?.()), s11.push(u7)) : l10.shift().resolve(k3(u7, false));
  }
  function R5(u7) {
    l10.isEmpty() ? c6 = u7 : l10.shift().reject(u7), L3();
  }
  function L3() {
    Y4?.[Symbol.dispose](), V7(), m10 = true;
    let u7 = k3(void 0, true);
    for (; !l10.isEmpty(); ) l10.shift().resolve(u7);
    return Promise.resolve(u7);
  }
};
var he = async function(e13, t6, r10 = {}) {
  let n8 = r10?.signal;
  if (n8?.aborted) throw new b3(void 0, { cause: n8?.reason });
  return new Promise((i12, o9) => {
    let s11 = (m10) => {
      typeof e13.removeListener == "function" && e13.removeListener(t6, l10), n8 != null && g5(n8, "abort", c6), o9(m10);
    }, l10 = (...m10) => {
      typeof e13.removeListener == "function" && e13.removeListener("error", s11), n8 != null && g5(n8, "abort", c6), i12(m10);
    }, a10 = { __proto__: null, once: true, [P3]: true };
    O3(e13, t6, l10, a10), t6 !== "error" && typeof e13.once == "function" && e13.once("error", s11);
    function c6() {
      g5(e13, t6, l10), g5(e13, "error", s11), o9(new b3(void 0, { cause: n8?.reason }));
    }
    n8 != null && O3(n8, "abort", c6, { __proto__: null, once: true, [P3]: true });
  });
};
var X2 = function(e13, t6) {
  if (e13 === void 0) throw new v7("signal", "AbortSignal", e13);
  let r10;
  return e13.aborted ? queueMicrotask(() => t6()) : (e13.addEventListener("abort", t6, { __proto__: null, once: true, [P3]: true }), r10 = () => {
    e13.removeEventListener("abort", t6);
  }), { __proto__: null, [Symbol.dispose]() {
    r10?.();
  } };
};
var ve = function(e13, t6) {
  if (typeof e13.listeners == "function") return e13.listeners(t6);
  if (J2(e13)) {
    let r10 = e13[kEvents].get(t6), n8 = [], i12 = r10?.next;
    for (; i12?.listener !== void 0; ) {
      let o9 = i12.listener?.deref ? i12.listener.deref() : i12.listener;
      n8.push(o9), i12 = i12.next;
    }
    return n8;
  }
  throw new v7("emitter", ["EventEmitter", "EventTarget"], e13);
};
var me = function(e13) {
  if (typeof e13?.getMaxListeners == "function") return T3(e13);
  if (e13?.[x4]) return e13[x4];
  throw new v7("emitter", ["EventEmitter", "EventTarget"], e13);
};
var H2 = 2048;
var j3 = H2 - 1;
var D3 = class {
  bottom;
  top;
  list;
  next;
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(H2), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & j3) === this.bottom;
  }
  push(e13) {
    this.list[this.top] = e13, this.top = this.top + 1 & j3;
  }
  shift() {
    let e13 = this.list[this.bottom];
    return e13 === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & j3, e13);
  }
};
var N4 = class {
  head;
  tail;
  constructor() {
    this.head = this.tail = new D3();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e13) {
    this.head.isFull() && (this.head = this.head.next = new D3()), this.head.push(e13);
  }
  shift() {
    let e13 = this.tail, t6 = e13.shift();
    return e13.isEmpty() && e13.next !== null && (this.tail = e13.next, e13.next = null), t6;
  }
};
function J2(e13) {
  return typeof e13?.addEventListener == "function";
}
function K(e13, t6, r10, n8) {
  if (e13[f6]) try {
    let i12 = t6.then;
    typeof i12 == "function" && i12.call(t6, void 0, function(o9) {
      setTimeout(pe, 0, e13, o9, r10, n8);
    });
  } catch (i12) {
    e13.emit("error", i12);
  }
}
function pe(e13, t6, r10, n8) {
  if (typeof e13[C3] == "function") e13[C3](t6, r10, ...n8);
  else {
    let i12 = e13[f6];
    try {
      e13[f6] = false, e13.emit("error", t6);
    } finally {
      e13[f6] = i12;
    }
  }
}
function T3(e13) {
  return e13._maxListeners === void 0 ? y5 : e13._maxListeners;
}
function de(e13, t6) {
  let r10 = "";
  try {
    let { name: o9 } = this.constructor;
    o9 !== "EventEmitter" && (r10 = ` on ${o9} instance`);
  } catch {
  }
  let n8 = `
Emitted 'error' event${r10} at:
`, i12 = (t6.stack || "").split(`
`).slice(1);
  return e13.stack + n8 + i12.join(`
`);
}
function q3(e13, t6, r10, n8) {
  let i12, o9, s11;
  if (o9 = e13._events, o9 === void 0 ? (o9 = e13._events = { __proto__: null }, e13._eventsCount = 0) : (o9.newListener !== void 0 && (e13.emit("newListener", t6, r10.listener ?? r10), o9 = e13._events), s11 = o9[t6]), s11 === void 0) o9[t6] = r10, ++e13._eventsCount;
  else if (typeof s11 == "function" ? s11 = o9[t6] = n8 ? [r10, s11] : [s11, r10] : n8 ? s11.unshift(r10) : s11.push(r10), i12 = T3(e13), i12 > 0 && s11.length > i12 && !s11.warned) {
    s11.warned = true;
    let l10 = new se(`Possible EventEmitter memory leak detected. ${s11.length} ${String(t6)} listeners added to ${G2(e13, { depth: -1 })}. MaxListeners is ${i12}. Use emitter.setMaxListeners() to increase limit`, { name: "MaxListenersExceededWarning", emitter: e13, type: t6, count: s11.length });
    console.warn(l10);
  }
  return e13;
}
function ye() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function z3(e13, t6, r10) {
  let n8 = { fired: false, wrapFn: void 0, target: e13, type: t6, listener: r10 }, i12 = ye.bind(n8);
  return i12.listener = r10, n8.wrapFn = i12, i12;
}
function B(e13, t6, r10) {
  let n8 = e13._events;
  if (n8 === void 0) return [];
  let i12 = n8[t6];
  return i12 === void 0 ? [] : typeof i12 == "function" ? r10 ? [i12.listener || i12] : [i12] : r10 ? _e(i12) : I5(i12);
}
function I5(e13) {
  switch (e13.length) {
    case 2:
      return [e13[0], e13[1]];
    case 3:
      return [e13[0], e13[1], e13[2]];
    case 4:
      return [e13[0], e13[1], e13[2], e13[3]];
    case 5:
      return [e13[0], e13[1], e13[2], e13[3], e13[4]];
    case 6:
      return [e13[0], e13[1], e13[2], e13[3], e13[4], e13[5]];
  }
  return Array.prototype.slice.call(e13);
}
function _e(e13) {
  let t6 = I5(e13);
  for (let r10 = 0; r10 < t6.length; ++r10) {
    let n8 = t6[r10].listener;
    typeof n8 == "function" && (t6[r10] = n8);
  }
  return t6;
}
function k3(e13, t6) {
  return { value: e13, done: t6 };
}
function g5(e13, t6, r10, n8) {
  if (typeof e13.removeListener == "function") e13.removeListener(t6, r10);
  else if (typeof e13.removeEventListener == "function") e13.removeEventListener(t6, r10, n8);
  else throw new v7("emitter", "EventEmitter", e13);
}
function O3(e13, t6, r10, n8) {
  if (typeof e13.on == "function") n8?.once ? e13.once(t6, r10) : e13.on(t6, r10);
  else if (typeof e13.addEventListener == "function") e13.addEventListener(t6, r10, n8);
  else throw new v7("emitter", "EventEmitter", e13);
}
function Ee() {
  let e13 = [];
  return { addEventListener(t6, r10, n8, i12) {
    O3(t6, r10, n8, i12), Array.prototype.push(e13, [t6, r10, n8, i12]);
  }, removeAll() {
    for (; e13.length > 0; ) Reflect.apply(g5, void 0, e13.pop());
  } };
}
function ge(e13, t6) {
  for (; t6 + 1 < e13.length; t6++) e13[t6] = e13[t6 + 1];
  e13.pop();
}
var Me = Symbol.for("nodejs.rejection");
var je = Symbol.for("events.errorMonitor");
var Ce = w2("node:events.setMaxListeners");
var Pe = w2("node:events.listenerCount");
var Oe = w2("node:events.init");

// http-url:https://esm.sh/node/tty.mjs
var o6 = class {
  fd;
  isRaw = false;
  isTTY = false;
  constructor(t6) {
    this.fd = t6;
  }
  setRawMode(t6) {
    return this.isRaw = t6, this;
  }
};
var s6 = class {
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(t6) {
    this.fd = t6;
  }
  clearLine(t6, r10) {
    return r10 && r10(), false;
  }
  clearScreenDown(t6) {
    return t6 && t6(), false;
  }
  cursorTo(t6, r10, e13) {
    return e13 && typeof e13 == "function" && e13(), false;
  }
  moveCursor(t6, r10, e13) {
    return e13 && e13(), false;
  }
  getColorDepth(t6) {
    return 1;
  }
  hasColors(t6, r10) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(t6, r10, e13) {
    t6 instanceof Uint8Array && (t6 = new TextDecoder().decode(t6));
    try {
      console.log(t6);
    } catch {
    }
    return e13 && typeof e13 == "function" && e13(), false;
  }
};

// http-url:https://esm.sh/node/process.mjs
function r4(t6) {
  return new Error(`[unenv] ${t6} is not implemented yet!`);
}
function a5(t6) {
  return Object.assign(() => {
    throw r4(t6);
  }, { __unenv__: true });
}
var v8 = "22.14.0";
var _5 = class m2 extends U2 {
  env;
  hrtime;
  nextTick;
  constructor(e13) {
    super(), this.env = e13.env, this.hrtime = e13.hrtime, this.nextTick = e13.nextTick;
    for (let s11 of [...Object.getOwnPropertyNames(m2.prototype), ...Object.getOwnPropertyNames(U2.prototype)]) {
      let i12 = this[s11];
      typeof i12 == "function" && (this[s11] = i12.bind(this));
    }
  }
  emitWarning(e13, s11, i12) {
    console.warn(`${i12 ? `[${i12}] ` : ""}${s11 ? `${s11}: ` : ""}${e13}`);
  }
  emit(...e13) {
    return super.emit(...e13);
  }
  listeners(e13) {
    return super.listeners(e13);
  }
  #t;
  #s;
  #r;
  get stdin() {
    return this.#t ??= new o6(0);
  }
  get stdout() {
    return this.#s ??= new s6(1);
  }
  get stderr() {
    return this.#r ??= new s6(2);
  }
  #e = "/";
  chdir(e13) {
    this.#e = e13;
  }
  cwd() {
    return this.#e;
  }
  arch = "";
  platform = "";
  argv = [];
  argv0 = "";
  execArgv = [];
  execPath = "";
  title = "";
  pid = 200;
  ppid = 100;
  get version() {
    return `v${v8}`;
  }
  get versions() {
    return { node: v8 };
  }
  get allowedNodeEnvironmentFlags() {
    return /* @__PURE__ */ new Set();
  }
  get sourceMapsEnabled() {
    return false;
  }
  get debugPort() {
    return 0;
  }
  get throwDeprecation() {
    return false;
  }
  get traceDeprecation() {
    return false;
  }
  get features() {
    return {};
  }
  get release() {
    return {};
  }
  get connected() {
    return false;
  }
  get config() {
    return {};
  }
  get moduleLoadList() {
    return [];
  }
  constrainedMemory() {
    return 0;
  }
  availableMemory() {
    return 0;
  }
  uptime() {
    return 0;
  }
  resourceUsage() {
    return {};
  }
  ref() {
  }
  unref() {
  }
  umask() {
    throw r4("process.umask");
  }
  getBuiltinModule() {
  }
  getActiveResourcesInfo() {
    throw r4("process.getActiveResourcesInfo");
  }
  exit() {
    throw r4("process.exit");
  }
  reallyExit() {
    throw r4("process.reallyExit");
  }
  kill() {
    throw r4("process.kill");
  }
  abort() {
    throw r4("process.abort");
  }
  dlopen() {
    throw r4("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw r4("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw r4("process.loadEnvFile");
  }
  disconnect() {
    throw r4("process.disconnect");
  }
  cpuUsage() {
    throw r4("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw r4("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw r4("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw r4("process.initgroups");
  }
  openStdin() {
    throw r4("process.openStdin");
  }
  assert() {
    throw r4("process.assert");
  }
  binding() {
    throw r4("process.binding");
  }
  permission = { has: a5("process.permission.has") };
  report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: a5("process.report.getReport"), writeReport: a5("process.report.writeReport") };
  finalization = { register: a5("process.finalization.register"), unregister: a5("process.finalization.unregister"), registerBeforeExit: a5("process.finalization.registerBeforeExit") };
  memoryUsage = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: () => 0 });
  mainModule = void 0;
  domain = void 0;
  send = void 0;
  exitCode = void 0;
  channel = void 0;
  getegid = void 0;
  geteuid = void 0;
  getgid = void 0;
  getgroups = void 0;
  getuid = void 0;
  setegid = void 0;
  seteuid = void 0;
  setgid = void 0;
  setgroups = void 0;
  setuid = void 0;
  _events = void 0;
  _eventsCount = void 0;
  _exiting = void 0;
  _maxListeners = void 0;
  _debugEnd = void 0;
  _debugProcess = void 0;
  _fatalException = void 0;
  _getActiveHandles = void 0;
  _getActiveRequests = void 0;
  _kill = void 0;
  _preload_modules = void 0;
  _rawDebug = void 0;
  _startProfilerIdleNotifier = void 0;
  _stopProfilerIdleNotifier = void 0;
  _tickCallback = void 0;
  _disconnect = void 0;
  _handleQueue = void 0;
  _pendingMessage = void 0;
  _channel = void 0;
  _send = void 0;
  _linkedBinding = void 0;
};
var u5 = /* @__PURE__ */ Object.create(null);
var b4 = globalThis.process;
var o7 = (t6) => globalThis.__env__ || b4?.env || (t6 ? u5 : globalThis);
var x5 = new Proxy(u5, { get(t6, e13) {
  return o7()[e13] ?? u5[e13];
}, has(t6, e13) {
  let s11 = o7();
  return e13 in s11 || e13 in u5;
}, set(t6, e13, s11) {
  let i12 = o7(true);
  return i12[e13] = s11, true;
}, deleteProperty(t6, e13) {
  let s11 = o7(true);
  return delete s11[e13], true;
}, ownKeys() {
  let t6 = o7();
  return Object.keys(t6);
}, getOwnPropertyDescriptor(t6, e13) {
  let s11 = o7();
  if (e13 in s11) return { value: s11[e13], writable: true, enumerable: true, configurable: true };
} });
var w3 = Object.assign(function(t6) {
  let e13 = Date.now(), s11 = Math.trunc(e13 / 1e3), i12 = e13 % 1e3 * 1e6;
  if (t6) {
    let d5 = s11 - t6[0], n8 = i12 - t6[0];
    return n8 < 0 && (d5 = d5 - 1, n8 = 1e9 + n8), [d5, n8];
  }
  return [s11, i12];
}, { bigint: function() {
  return BigInt(Date.now() * 1e6);
} });
var E7 = globalThis.queueMicrotask ? (t6, ...e13) => {
  globalThis.queueMicrotask(t6.bind(void 0, ...e13));
} : k4();
function k4() {
  let t6 = [], e13 = false, s11, i12 = -1;
  function d5() {
    !e13 || !s11 || (e13 = false, s11.length > 0 ? t6 = [...s11, ...t6] : i12 = -1, t6.length > 0 && n8());
  }
  function n8() {
    if (e13) return;
    let c6 = setTimeout(d5);
    e13 = true;
    let l10 = t6.length;
    for (; l10; ) {
      for (s11 = t6, t6 = []; ++i12 < l10; ) s11 && s11[i12]();
      i12 = -1, l10 = t6.length;
    }
    s11 = void 0, e13 = false, clearTimeout(c6);
  }
  return (c6, ...l10) => {
    t6.push(c6.bind(void 0, ...l10)), t6.length === 1 && !e13 && setTimeout(n8);
  };
}
var h5 = new _5({ env: x5, hrtime: w3, nextTick: E7 });
var A3 = h5;
var { abort: O4, addListener: T4, allowedNodeEnvironmentFlags: S7, hasUncaughtExceptionCaptureCallback: N5, setUncaughtExceptionCaptureCallback: R4, loadEnvFile: I6, sourceMapsEnabled: B2, arch: j4, argv: D4, argv0: F, chdir: $4, config: z4, connected: q4, constrainedMemory: W4, availableMemory: H3, cpuUsage: Q, cwd: G3, debugPort: K2, dlopen: J3, disconnect: V4, emit: X3, emitWarning: Y2, env: Z, eventNames: ee2, execArgv: te2, execPath: se2, exit: re, finalization: ie2, features: ne3, getBuiltinModule: ae2, getActiveResourcesInfo: oe2, getMaxListeners: de2, hrtime: le2, kill: ue2, listeners: ce2, listenerCount: ge2, memoryUsage: pe2, nextTick: ve2, on: me2, off: he2, once: fe2, pid: _e2, platform: be, ppid: xe, prependListener: we, prependOnceListener: Ee2, rawListeners: ke, release: ye2, removeAllListeners: Me2, removeListener: Ce2, report: Le, resourceUsage: Pe2, setMaxListeners: Ue, setSourceMapsEnabled: Ae, stderr: Oe2, stdin: Te, stdout: Se, title: Ne, umask: Re, uptime: Ie, version: Be, versions: je2, domain: De, initgroups: Fe, moduleLoadList: $e, reallyExit: ze, openStdin: qe, assert: We, binding: He, send: Qe, exitCode: Ge, channel: Ke, getegid: Je, geteuid: Ve, getgid: Xe, getgroups: Ye, getuid: Ze, setegid: et, seteuid: tt, setgid: st, setgroups: rt, setuid: it, permission: nt, mainModule: at, ref: ot, unref: dt, _events: lt, _eventsCount: ut, _exiting: ct, _maxListeners: gt, _debugEnd: pt, _debugProcess: vt, _fatalException: mt, _getActiveHandles: ht, _getActiveRequests: ft, _kill: _t, _preload_modules: bt, _rawDebug: xt, _startProfilerIdleNotifier: wt, _stopProfilerIdleNotifier: Et, _tickCallback: kt, _disconnect: yt, _handleQueue: Mt, _pendingMessage: Ct, _channel: Lt, _send: Pt, _linkedBinding: Ut } = h5;

// http-url:https://esm.sh/detect-node-es@1.1.0/es2022/detect-node-es.mjs
var e7 = Object.prototype.toString.call(typeof A3 < "u" ? A3 : 0) === "[object process]";

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/medium.mjs
function a6(u7) {
  return u7;
}
function s7(u7, r10) {
  r10 === void 0 && (r10 = a6);
  var e13 = [], o9 = false, d5 = { read: function() {
    if (o9) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return e13.length ? e13[e13.length - 1] : u7;
  }, useMedium: function(t6) {
    var n8 = r10(t6, o9);
    return e13.push(n8), function() {
      e13 = e13.filter(function(i12) {
        return i12 !== n8;
      });
    };
  }, assignSyncMedium: function(t6) {
    for (o9 = true; e13.length; ) {
      var n8 = e13;
      e13 = [], n8.forEach(t6);
    }
    e13 = { push: function(i12) {
      return t6(i12);
    }, filter: function() {
      return e13;
    } };
  }, assignMedium: function(t6) {
    o9 = true;
    var n8 = [];
    if (e13.length) {
      var i12 = e13;
      e13 = [], i12.forEach(t6), n8 = e13;
    }
    var h9 = function() {
      var f11 = n8;
      n8 = [], f11.forEach(t6);
    }, c6 = function() {
      return Promise.resolve().then(h9);
    };
    c6(), e13 = { push: function(f11) {
      n8.push(f11), c6();
    }, filter: function(f11) {
      return n8 = n8.filter(f11), e13;
    } };
  } };
  return d5;
}
function g6(u7) {
  u7 === void 0 && (u7 = {});
  var r10 = s7(null);
  return r10.options = v5({ async: true, ssr: false }, u7), r10;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/renderProp.mjs
import * as e8 from "react";
import { useState as m3, useCallback as d3, useEffect as v9, useLayoutEffect as g7 } from "react";

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/medium.mjs
var a7 = g6();

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/UI.mjs
var l5 = function() {
};
var m5 = e9.forwardRef(function(a10, d5) {
  var o9 = e9.useRef(null), t6 = e9.useState({ onScrollCapture: l5, onWheelCapture: l5, onTouchMoveCapture: l5 }), f11 = t6[0], R5 = t6[1], v10 = a10.forwardProps, n8 = a10.children, h9 = a10.className, u7 = a10.removeScrollBar, C6 = a10.enabled, g10 = a10.shards, P5 = a10.sideCar, S9 = a10.noRelative, b8 = a10.noIsolation, w5 = a10.inert, N9 = a10.allowPinchZoom, c6 = a10.as, M3 = c6 === void 0 ? "div" : c6, _7 = a10.gapMode, B5 = S4(a10, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k5 = P5, i12 = v6([o9, d5]), s11 = v5(v5({}, B5), f11);
  return e9.createElement(e9.Fragment, null, C6 && e9.createElement(k5, { sideCar: a7, removeScrollBar: u7, shards: g10, noRelative: S9, noIsolation: b8, inert: w5, setCallbacks: R5, allowPinchZoom: !!N9, lockRef: o9, gapMode: _7 }), v10 ? e9.cloneElement(e9.Children.only(n8), v5(v5({}, s11), { ref: i12 })) : e9.createElement(M3, v5({}, s11, { className: h9, ref: i12 }), n8));
});
m5.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
m5.classNames = { fullWidth: a2, zeroRight: r3 };

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/SideEffect.mjs
import * as r8 from "react";

// http-url:https://esm.sh/get-nonce@1.0.1/es2022/get-nonce.mjs
var e10;
var t5 = function() {
  if (e10) return e10;
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};

// http-url:https://esm.sh/react-style-singleton@2.2.3/X-ZXJlYWN0/es2022/react-style-singleton.mjs
import * as l6 from "react";
function c4() {
  if (!document) return null;
  var t6 = document.createElement("style");
  t6.type = "text/css";
  var e13 = t5();
  return e13 && t6.setAttribute("nonce", e13), t6;
}
function s8(t6, e13) {
  t6.styleSheet ? t6.styleSheet.cssText = e13 : t6.appendChild(document.createTextNode(e13));
}
function f7(t6) {
  var e13 = document.head || document.getElementsByTagName("head")[0];
  e13.appendChild(t6);
}
var o8 = function() {
  var t6 = 0, e13 = null;
  return { add: function(n8) {
    t6 == 0 && (e13 = c4()) && (s8(e13, n8), f7(e13)), t6++;
  }, remove: function() {
    t6--, !t6 && e13 && (e13.parentNode && e13.parentNode.removeChild(e13), e13 = null);
  } };
};
var r6 = function() {
  var t6 = o8();
  return function(e13, n8) {
    l6.useEffect(function() {
      return t6.add(e13), function() {
        t6.remove();
      };
    }, [e13 && n8]);
  };
};
var m6 = function() {
  var t6 = r6(), e13 = function(n8) {
    var i12 = n8.styles, u7 = n8.dynamic;
    return t6(i12, u7), null;
  };
  return e13;
};

// http-url:https://esm.sh/react-remove-scroll-bar@2.3.8/X-ZXJlYWN0/es2022/react-remove-scroll-bar.mjs
import * as c5 from "react";
var d4 = "right-scroll-bar-position";
var l7 = "width-before-scroll-bar";
var p6 = "with-scroll-bars-hidden";
var s9 = "--removed-body-scroll-bar-size";
var h7 = { left: 0, top: 0, right: 0, gap: 0 };
var m7 = function(t6) {
  return parseInt(t6 || "", 10) || 0;
};
var b5 = function(t6) {
  var r10 = window.getComputedStyle(document.body), o9 = r10[t6 === "padding" ? "paddingLeft" : "marginLeft"], n8 = r10[t6 === "padding" ? "paddingTop" : "marginTop"], e13 = r10[t6 === "padding" ? "paddingRight" : "marginRight"];
  return [m7(o9), m7(n8), m7(e13)];
};
var f8 = function(t6) {
  if (t6 === void 0 && (t6 = "margin"), typeof window > "u") return h7;
  var r10 = b5(t6), o9 = document.documentElement.clientWidth, n8 = window.innerWidth;
  return { left: r10[0], top: r10[1], right: r10[2], gap: Math.max(0, n8 - o9 + r10[2] - r10[0]) };
};
var y6 = m6();
var i9 = "data-scroll-locked";
var S8 = function(t6, r10, o9, n8) {
  var e13 = t6.left, g10 = t6.top, v10 = t6.right, a10 = t6.gap;
  return o9 === void 0 && (o9 = "margin"), `
  .`.concat(p6, ` {
   overflow: hidden `).concat(n8, `;
   padding-right: `).concat(a10, "px ").concat(n8, `;
  }
  body[`).concat(i9, `] {
    overflow: hidden `).concat(n8, `;
    overscroll-behavior: contain;
    `).concat([r10 && "position: relative ".concat(n8, ";"), o9 === "margin" && `
    padding-left: `.concat(e13, `px;
    padding-top: `).concat(g10, `px;
    padding-right: `).concat(v10, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a10, "px ").concat(n8, `;
    `), o9 === "padding" && "padding-right: ".concat(a10, "px ").concat(n8, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(d4, ` {
    right: `).concat(a10, "px ").concat(n8, `;
  }
  
  .`).concat(l7, ` {
    margin-right: `).concat(a10, "px ").concat(n8, `;
  }
  
  .`).concat(d4, " .").concat(d4, ` {
    right: 0 `).concat(n8, `;
  }
  
  .`).concat(l7, " .").concat(l7, ` {
    margin-right: 0 `).concat(n8, `;
  }
  
  body[`).concat(i9, `] {
    `).concat(s9, ": ").concat(a10, `px;
  }
`);
};
var u6 = function() {
  var t6 = parseInt(document.body.getAttribute(i9) || "0", 10);
  return isFinite(t6) ? t6 : 0;
};
var w4 = function() {
  c5.useEffect(function() {
    return document.body.setAttribute(i9, (u6() + 1).toString()), function() {
      var t6 = u6() - 1;
      t6 <= 0 ? document.body.removeAttribute(i9) : document.body.setAttribute(i9, t6.toString());
    };
  }, []);
};
var C4 = function(t6) {
  var r10 = t6.noRelative, o9 = t6.noImportant, n8 = t6.gapMode, e13 = n8 === void 0 ? "margin" : n8;
  w4();
  var g10 = c5.useMemo(function() {
    return f8(e13);
  }, [e13]);
  return c5.createElement(y6, { styles: S8(g10, !r10, e13, o9 ? "" : "!important") });
};

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/aggresiveCapture.mjs
var r7 = false;
if (typeof window < "u") try {
  e11 = Object.defineProperty({}, "passive", { get: function() {
    return r7 = true, true;
  } }), window.addEventListener("test", e11, e11), window.removeEventListener("test", e11, e11);
} catch {
  r7 = false;
}
var e11;
var a8 = r7 ? { passive: false } : false;

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/handleScroll.mjs
var N7 = function(e13) {
  return e13.tagName === "TEXTAREA";
};
var b6 = function(e13, r10) {
  if (!(e13 instanceof Element)) return false;
  var l10 = window.getComputedStyle(e13);
  return l10[r10] !== "hidden" && !(l10.overflowY === l10.overflowX && !N7(e13) && l10[r10] === "visible");
};
var p7 = function(e13) {
  return b6(e13, "overflowY");
};
var D5 = function(e13) {
  return b6(e13, "overflowX");
};
var T5 = function(e13, r10) {
  var l10 = r10.ownerDocument, t6 = r10;
  do {
    typeof ShadowRoot < "u" && t6 instanceof ShadowRoot && (t6 = t6.host);
    var n8 = g8(e13, t6);
    if (n8) {
      var a10 = m8(e13, t6), i12 = a10[1], o9 = a10[2];
      if (i12 > o9) return true;
    }
    t6 = t6.parentNode;
  } while (t6 && t6 !== l10.body);
  return false;
};
var E8 = function(e13) {
  var r10 = e13.scrollTop, l10 = e13.scrollHeight, t6 = e13.clientHeight;
  return [r10, l10, t6];
};
var H4 = function(e13) {
  var r10 = e13.scrollLeft, l10 = e13.scrollWidth, t6 = e13.clientWidth;
  return [r10, l10, t6];
};
var g8 = function(e13, r10) {
  return e13 === "v" ? p7(r10) : D5(r10);
};
var m8 = function(e13, r10) {
  return e13 === "v" ? E8(r10) : H4(r10);
};
var B3 = function(e13, r10) {
  return e13 === "h" && r10 === "rtl" ? -1 : 1;
};
var V5 = function(e13, r10, l10, t6, n8) {
  var a10 = B3(e13, window.getComputedStyle(r10).direction), i12 = a10 * t6, o9 = l10.target, h9 = r10.contains(o9), u7 = false, S9 = i12 > 0, v10 = 0, f11 = 0;
  do {
    if (!o9) break;
    var d5 = m8(e13, o9), s11 = d5[0], C6 = d5[1], y8 = d5[2], w5 = C6 - y8 - a10 * s11;
    (s11 || w5) && g8(e13, o9) && (v10 += w5, f11 += s11);
    var c6 = o9.parentNode;
    o9 = c6 && c6.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? c6.host : c6;
  } while (!h9 && o9 !== document.body || h9 && (r10.contains(o9) || r10 === o9));
  return (S9 && (n8 && Math.abs(v10) < 1 || !n8 && i12 > v10) || !S9 && (n8 && Math.abs(f11) < 1 || !n8 && -i12 > f11)) && (u7 = true), u7;
};

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/SideEffect.mjs
var b7 = function(e13) {
  return "changedTouches" in e13 ? [e13.changedTouches[0].clientX, e13.changedTouches[0].clientY] : [0, 0];
};
var M2 = function(e13) {
  return [e13.deltaX, e13.deltaY];
};
var X4 = function(e13) {
  return e13 && "current" in e13 ? e13.current : e13;
};
var K3 = function(e13, c6) {
  return e13[0] === c6[0] && e13[1] === c6[1];
};
var O5 = function(e13) {
  return `
  .block-interactivity-`.concat(e13, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e13, ` {pointer-events: all;}
`);
};
var Q2 = 0;
var f9 = [];
function H5(e13) {
  var c6 = r8.useRef([]), E10 = r8.useRef([0, 0]), m10 = r8.useRef(), h9 = r8.useState(Q2++)[0], R5 = r8.useState(m6)[0], g10 = r8.useRef(e13);
  r8.useEffect(function() {
    g10.current = e13;
  }, [e13]), r8.useEffect(function() {
    if (e13.inert) {
      document.body.classList.add("block-interactivity-".concat(h9));
      var t6 = V3([e13.lockRef.current], (e13.shards || []).map(X4), true).filter(Boolean);
      return t6.forEach(function(a10) {
        return a10.classList.add("allow-interactivity-".concat(h9));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(h9)), t6.forEach(function(a10) {
          return a10.classList.remove("allow-interactivity-".concat(h9));
        });
      };
    }
  }, [e13.inert, e13.lockRef.current, e13.shards]);
  var k5 = r8.useCallback(function(t6, a10) {
    if ("touches" in t6 && t6.touches.length === 2 || t6.type === "wheel" && t6.ctrlKey) return !g10.current.allowPinchZoom;
    var l10 = b7(t6), u7 = E10.current, o9 = "deltaX" in t6 ? t6.deltaX : u7[0] - l10[0], i12 = "deltaY" in t6 ? t6.deltaY : u7[1] - l10[1], n8, v10 = t6.target, d5 = Math.abs(o9) > Math.abs(i12) ? "h" : "v";
    if ("touches" in t6 && d5 === "h" && v10.type === "range") return false;
    var P5 = window.getSelection(), C6 = P5 && P5.anchorNode, I8 = C6 ? C6 === v10 || C6.contains(v10) : false;
    if (I8) return false;
    var y8 = T5(d5, v10);
    if (!y8) return true;
    if (y8 ? n8 = d5 : (n8 = d5 === "v" ? "h" : "v", y8 = T5(d5, v10)), !y8) return false;
    if (!m10.current && "changedTouches" in t6 && (o9 || i12) && (m10.current = n8), !n8) return true;
    var Y4 = m10.current || n8;
    return V5(Y4, a10, t6, Y4 === "h" ? o9 : i12, true);
  }, []), S9 = r8.useCallback(function(t6) {
    var a10 = t6;
    if (!(!f9.length || f9[f9.length - 1] !== R5)) {
      var l10 = "deltaY" in a10 ? M2(a10) : b7(a10), u7 = c6.current.filter(function(n8) {
        return n8.name === a10.type && (n8.target === a10.target || a10.target === n8.shadowParent) && K3(n8.delta, l10);
      })[0];
      if (u7 && u7.should) {
        a10.cancelable && a10.preventDefault();
        return;
      }
      if (!u7) {
        var o9 = (g10.current.shards || []).map(X4).filter(Boolean).filter(function(n8) {
          return n8.contains(a10.target);
        }), i12 = o9.length > 0 ? k5(a10, o9[0]) : !g10.current.noIsolation;
        i12 && a10.cancelable && a10.preventDefault();
      }
    }
  }, []), w5 = r8.useCallback(function(t6, a10, l10, u7) {
    var o9 = { name: t6, delta: a10, target: l10, should: u7, shadowParent: Z2(l10) };
    c6.current.push(o9), setTimeout(function() {
      c6.current = c6.current.filter(function(i12) {
        return i12 !== o9;
      });
    }, 1);
  }, []), L3 = r8.useCallback(function(t6) {
    E10.current = b7(t6), m10.current = void 0;
  }, []), T6 = r8.useCallback(function(t6) {
    w5(t6.type, M2(t6), t6.target, k5(t6, e13.lockRef.current));
  }, []), x7 = r8.useCallback(function(t6) {
    w5(t6.type, b7(t6), t6.target, k5(t6, e13.lockRef.current));
  }, []);
  r8.useEffect(function() {
    return f9.push(R5), e13.setCallbacks({ onScrollCapture: T6, onWheelCapture: T6, onTouchMoveCapture: x7 }), document.addEventListener("wheel", S9, a8), document.addEventListener("touchmove", S9, a8), document.addEventListener("touchstart", L3, a8), function() {
      f9 = f9.filter(function(t6) {
        return t6 !== R5;
      }), document.removeEventListener("wheel", S9, a8), document.removeEventListener("touchmove", S9, a8), document.removeEventListener("touchstart", L3, a8);
    };
  }, []);
  var D6 = e13.removeScrollBar, A5 = e13.inert;
  return r8.createElement(r8.Fragment, null, A5 ? r8.createElement(R5, { styles: O5(h9) }) : null, D6 ? r8.createElement(C4, { noRelative: e13.noRelative, gapMode: e13.gapMode }) : null);
}
function Z2(e13) {
  for (var c6 = null; e13 !== null; ) e13 instanceof ShadowRoot && (c6 = e13.host, e13 = e13.host), e13 = e13.parentNode;
  return c6;
}

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/sidecar.mjs
var i10 = p4(a7, H5);

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/Combination.mjs
var a9 = e12.forwardRef(function(o9, t6) {
  return e12.createElement(m5, v5({}, o9, { ref: t6, sideCar: i10 }));
});
a9.classNames = m5.classNames;
var l8 = a9;

// http-url:https://esm.sh/@radix-ui/react-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dialog.mjs
import * as i11 from "react";
import { Fragment as U3, jsx as s10 } from "react/jsx-runtime";
var m9 = "Dialog";
var [h8, ve3] = $(m9);
var [V6, l9] = h8(m9);
var W5 = (e13) => {
  let { __scopeDialog: a10, children: r10, open: n8, defaultOpen: t6, onOpenChange: o9, modal: c6 = true } = e13, u7 = i11.useRef(null), O7 = i11.useRef(null), [T6, D6] = D2({ prop: n8, defaultProp: t6 ?? false, onChange: o9, caller: m9 });
  return s10(V6, { scope: a10, triggerRef: u7, contentRef: O7, contentId: n4(), titleId: n4(), descriptionId: n4(), open: T6, onOpenChange: D6, onOpenToggle: i11.useCallback(() => D6((b8) => !b8), [D6]), modal: c6, children: r10 });
};
W5.displayName = m9;
var y7 = "DialogTrigger";
var Y3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r10, ...n8 } = e13, t6 = l9(y7, r10), o9 = s(a10, t6.triggerRef);
  return s10(v2.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": t6.open, "aria-controls": t6.open ? t6.contentId : void 0, "data-state": P4(t6.open), ...n8, ref: o9, onClick: f(e13.onClick, t6.onOpenToggle) });
});
Y3.displayName = y7;
var _6 = "DialogPortal";
var [Z3, E9] = h8(_6, { forceMount: void 0 });
var q5 = (e13) => {
  let { __scopeDialog: a10, forceMount: r10, children: n8, container: t6 } = e13, o9 = l9(_6, a10);
  return s10(Z3, { scope: a10, forceMount: r10, children: i11.Children.map(n8, (c6) => s10(y2, { present: r10 || o9.open, children: s10(e5, { asChild: true, container: t6, children: c6 }) })) });
};
q5.displayName = _6;
var g9 = "DialogOverlay";
var z5 = i11.forwardRef((e13, a10) => {
  let r10 = E9(g9, e13.__scopeDialog), { forceMount: n8 = r10.forceMount, ...t6 } = e13, o9 = l9(g9, e13.__scopeDialog);
  return o9.modal ? s10(y2, { present: n8 || o9.open, children: s10(J4, { ...t6, ref: a10 }) }) : null;
});
z5.displayName = g9;
var B4 = b("DialogOverlay.RemoveScroll");
var J4 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r10, ...n8 } = e13, t6 = l9(g9, r10), o9 = ne(), c6 = s(a10, o9);
  return s10(l8, { as: B4, allowPinchZoom: true, shards: [t6.contentRef], children: s10(v2.div, { "data-state": P4(t6.open), ...n8, ref: c6, style: { pointerEvents: "auto", ...n8.style } }) });
});
var f10 = "DialogContent";
var Q3 = i11.forwardRef((e13, a10) => {
  let r10 = E9(f10, e13.__scopeDialog), { forceMount: n8 = r10.forceMount, ...t6 } = e13, o9 = l9(f10, e13.__scopeDialog);
  return s10(y2, { present: n8 || o9.open, children: o9.modal ? s10(X5, { ...t6, ref: a10 }) : s10($5, { ...t6, ref: a10 }) });
});
Q3.displayName = f10;
var X5 = i11.forwardRef((e13, a10) => {
  let r10 = l9(f10, e13.__scopeDialog), n8 = i11.useRef(null), t6 = s(a10, r10.contentRef, n8);
  return i11.useEffect(() => {
    let o9 = n8.current;
    if (o9) return S3(o9);
  }, []), s10(I7, { ...e13, ref: t6, trapFocus: r10.open, disableOutsidePointerEvents: r10.open, onCloseAutoFocus: f(e13.onCloseAutoFocus, (o9) => {
    o9.preventDefault(), r10.triggerRef.current?.focus();
  }), onPointerDownOutside: f(e13.onPointerDownOutside, (o9) => {
    let c6 = o9.detail.originalEvent, u7 = c6.button === 0 && c6.ctrlKey === true;
    (c6.button === 2 || u7) && o9.preventDefault();
  }), onFocusOutside: f(e13.onFocusOutside, (o9) => o9.preventDefault()) });
});
var $5 = i11.forwardRef((e13, a10) => {
  let r10 = l9(f10, e13.__scopeDialog), n8 = i11.useRef(false), t6 = i11.useRef(false);
  return s10(I7, { ...e13, ref: a10, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (o9) => {
    e13.onCloseAutoFocus?.(o9), o9.defaultPrevented || (n8.current || r10.triggerRef.current?.focus(), o9.preventDefault()), n8.current = false, t6.current = false;
  }, onInteractOutside: (o9) => {
    e13.onInteractOutside?.(o9), o9.defaultPrevented || (n8.current = true, o9.detail.originalEvent.type === "pointerdown" && (t6.current = true));
    let c6 = o9.target;
    r10.triggerRef.current?.contains(c6) && o9.preventDefault(), o9.detail.originalEvent.type === "focusin" && t6.current && o9.preventDefault();
  } });
});
var I7 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r10, trapFocus: n8, onOpenAutoFocus: t6, onCloseAutoFocus: o9, ...c6 } = e13, u7 = l9(f10, r10);
  return a(), s10(U3, { children: s10(L2, { asChild: true, loop: true, trapped: n8, onMountAutoFocus: t6, onUnmountAutoFocus: o9, children: s10(_2, { role: "dialog", id: u7.contentId, "aria-describedby": u7.descriptionId, "aria-labelledby": u7.titleId, "data-state": P4(u7.open), ...c6, ref: a10, deferPointerDownOutside: true, onDismiss: () => u7.onOpenChange(false) }) }) });
});
var x6 = "DialogTitle";
var ee3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r10, ...n8 } = e13, t6 = l9(x6, r10);
  return s10(v2.h2, { id: t6.titleId, ...n8, ref: a10 });
});
ee3.displayName = x6;
var N8 = "DialogDescription";
var oe3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r10, ...n8 } = e13, t6 = l9(N8, r10);
  return s10(v2.p, { id: t6.descriptionId, ...n8, ref: a10 });
});
oe3.displayName = N8;
var A4 = "DialogClose";
var te3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r10, ...n8 } = e13, t6 = l9(A4, r10);
  return s10(v2.button, { type: "button", ...n8, ref: a10, onClick: f(e13.onClick, () => t6.onOpenChange(false)) });
});
te3.displayName = A4;
function P4(e13) {
  return e13 ? "open" : "closed";
}

// http-url:https://esm.sh/vaul@1.1.2/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/vaul.mjs
import * as zt from "react";
import r9, { useLayoutEffect as ve4, useEffect as ye3, useMemo as be2 } from "react";
function ge3(t6) {
  if (!t6 || typeof document > "u") return;
  let n8 = document.head || document.getElementsByTagName("head")[0], e13 = document.createElement("style");
  e13.type = "text/css", n8.appendChild(e13), e13.styleSheet ? e13.styleSheet.cssText = t6 : e13.appendChild(document.createTextNode(t6));
}
var Vt = r9.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, onPress: () => {
}, onRelease: () => {
}, onDrag: () => {
}, onNestedDrag: () => {
}, onNestedOpenChange: () => {
}, onNestedRelease: () => {
}, openProp: void 0, dismissible: false, isOpen: false, isDragging: false, keyboardIsOpen: { current: false }, snapPointsOffset: null, snapPoints: null, handleOnly: false, modal: false, shouldFade: false, activeSnapPoint: null, onOpenChange: () => {
}, setActiveSnapPoint: () => {
}, closeDrawer: () => {
}, direction: "bottom", shouldAnimate: { current: true }, shouldScaleBackground: false, setBackgroundColorOnScale: true, noBodyStyles: false, container: null, autoFocus: false });
var at2 = () => {
  let t6 = r9.useContext(Vt);
  if (!t6) throw new Error("useDrawerContext must be used within a Drawer.Root");
  return t6;
};
ge3(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Se2() {
  let t6 = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(t6) && /Mobile/.test(t6) || /FxiOS/.test(t6));
}
function Re2() {
  return Ct2(/^Mac/);
}
function Te2() {
  return Ct2(/^iPhone/);
}
function Bt() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function De2() {
  return Ct2(/^iPad/) || Re2() && navigator.maxTouchPoints > 1;
}
function Yt() {
  return Te2() || De2();
}
function Ct2(t6) {
  return typeof window < "u" && window.navigator != null ? t6.test(window.navigator.platform) : void 0;
}
var Ee3 = 24;
var Oe3 = typeof window < "u" ? ve4 : ye3;
function Ut2(...t6) {
  return (...n8) => {
    for (let e13 of t6) typeof e13 == "function" && e13(...n8);
  };
}
var Rt = typeof document < "u" && window.visualViewport;
function Ft(t6) {
  let n8 = window.getComputedStyle(t6);
  return /(auto|scroll)/.test(n8.overflow + n8.overflowX + n8.overflowY);
}
function jt(t6) {
  for (Ft(t6) && (t6 = t6.parentElement); t6 && !Ft(t6); ) t6 = t6.parentElement;
  return t6 || document.scrollingElement || document.documentElement;
}
var xe2 = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
var wt2 = 0;
var Tt;
function Ce3(t6 = {}) {
  let { isDisabled: n8 } = t6;
  Oe3(() => {
    if (!n8) return wt2++, wt2 === 1 && Yt() && (Tt = $e2()), () => {
      wt2--, wt2 === 0 && Tt?.();
    };
  }, [n8]);
}
function $e2() {
  let t6, n8 = 0, e13 = (m10) => {
    t6 = jt(m10.target), !(t6 === document.documentElement && t6 === document.body) && (n8 = m10.changedTouches[0].pageY);
  }, o9 = (m10) => {
    if (!t6 || t6 === document.documentElement || t6 === document.body) {
      m10.preventDefault();
      return;
    }
    let p8 = m10.changedTouches[0].pageY, U4 = t6.scrollTop, k5 = t6.scrollHeight - t6.clientHeight;
    k5 !== 0 && ((U4 <= 0 && p8 > n8 || U4 >= k5 && p8 < n8) && m10.preventDefault(), n8 = p8);
  }, i12 = (m10) => {
    let p8 = m10.target;
    Ot(p8) && p8 !== document.activeElement && (m10.preventDefault(), p8.style.transform = "translateY(-2000px)", p8.focus(), requestAnimationFrame(() => {
      p8.style.transform = "";
    }));
  }, a10 = (m10) => {
    let p8 = m10.target;
    Ot(p8) && (p8.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      p8.style.transform = "", Rt && (Rt.height < window.innerHeight ? requestAnimationFrame(() => {
        Wt(p8);
      }) : Rt.addEventListener("resize", () => Wt(p8), { once: true }));
    }));
  }, g10 = () => {
    window.scrollTo(0, 0);
  }, u7 = window.pageXOffset, b8 = window.pageYOffset, D6 = Ut2(Ae2(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let h9 = Ut2(ct2(document, "touchstart", e13, { passive: false, capture: true }), ct2(document, "touchmove", o9, { passive: false, capture: true }), ct2(document, "touchend", i12, { passive: false, capture: true }), ct2(document, "focus", a10, true), ct2(window, "scroll", g10));
  return () => {
    D6(), h9(), window.scrollTo(u7, b8);
  };
}
function Ae2(t6, n8, e13) {
  let o9 = t6.style[n8];
  return t6.style[n8] = e13, () => {
    t6.style[n8] = o9;
  };
}
function ct2(t6, n8, e13, o9) {
  return t6.addEventListener(n8, e13, o9), () => {
    t6.removeEventListener(n8, e13, o9);
  };
}
function Wt(t6) {
  let n8 = document.scrollingElement || document.documentElement;
  for (; t6 && t6 !== n8; ) {
    let e13 = jt(t6);
    if (e13 !== document.documentElement && e13 !== document.body && e13 !== t6) {
      let o9 = e13.getBoundingClientRect().top, i12 = t6.getBoundingClientRect().top, a10 = t6.getBoundingClientRect().bottom, g10 = e13.getBoundingClientRect().bottom + Ee3;
      a10 > g10 && (e13.scrollTop += i12 - o9);
    }
    t6 = e13.parentElement;
  }
}
function Ot(t6) {
  return t6 instanceof HTMLInputElement && !xe2.has(t6.type) || t6 instanceof HTMLTextAreaElement || t6 instanceof HTMLElement && t6.isContentEditable;
}
function Pe3(t6, n8) {
  typeof t6 == "function" ? t6(n8) : t6 != null && (t6.current = n8);
}
function Me3(...t6) {
  return (n8) => t6.forEach((e13) => Pe3(e13, n8));
}
function qt(...t6) {
  return zt.useCallback(Me3(...t6), t6);
}
var Xt = /* @__PURE__ */ new WeakMap();
function $6(t6, n8, e13 = false) {
  if (!t6 || !(t6 instanceof HTMLElement)) return;
  let o9 = {};
  Object.entries(n8).forEach(([i12, a10]) => {
    if (i12.startsWith("--")) {
      t6.style.setProperty(i12, a10);
      return;
    }
    o9[i12] = t6.style[i12], t6.style[i12] = a10;
  }), !e13 && Xt.set(t6, o9);
}
function Ie2(t6, n8) {
  if (!t6 || !(t6 instanceof HTMLElement)) return;
  let e13 = Xt.get(t6);
  e13 && (t6.style[n8] = e13[n8]);
}
var C5 = (t6) => {
  switch (t6) {
    case "top":
    case "bottom":
      return true;
    case "left":
    case "right":
      return false;
    default:
      return t6;
  }
};
function ht2(t6, n8) {
  if (!t6) return null;
  let e13 = window.getComputedStyle(t6), o9 = e13.transform || e13.webkitTransform || e13.mozTransform, i12 = o9.match(/^matrix3d\((.+)\)$/);
  return i12 ? parseFloat(i12[1].split(", ")[C5(n8) ? 13 : 12]) : (i12 = o9.match(/^matrix\((.+)\)$/), i12 ? parseFloat(i12[1].split(", ")[C5(n8) ? 5 : 4]) : null);
}
function Ne2(t6) {
  return 8 * (Math.log(t6 + 1) - 2);
}
function Dt(t6, n8) {
  if (!t6) return () => {
  };
  let e13 = t6.style.cssText;
  return Object.assign(t6.style, n8), () => {
    t6.style.cssText = e13;
  };
}
function _e3(...t6) {
  return (...n8) => {
    for (let e13 of t6) typeof e13 == "function" && e13(...n8);
  };
}
var O6 = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] };
var Kt = 0.4;
var He2 = 0.25;
var Le2 = 100;
var Gt = 8;
var tt2 = 16;
var xt2 = 26;
var Et2 = "vaul-dragging";
function Jt(t6) {
  let n8 = r9.useRef(t6);
  return r9.useEffect(() => {
    n8.current = t6;
  }), r9.useMemo(() => (...e13) => n8.current == null ? void 0 : n8.current.call(n8, ...e13), []);
}
function ke2({ defaultProp: t6, onChange: n8 }) {
  let e13 = r9.useState(t6), [o9] = e13, i12 = r9.useRef(o9), a10 = Jt(n8);
  return r9.useEffect(() => {
    i12.current !== o9 && (a10(o9), i12.current = o9);
  }, [o9, i12, a10]), e13;
}
function Qt({ prop: t6, defaultProp: n8, onChange: e13 = () => {
} }) {
  let [o9, i12] = ke2({ defaultProp: n8, onChange: e13 }), a10 = t6 !== void 0, g10 = a10 ? t6 : o9, u7 = Jt(e13), b8 = r9.useCallback((D6) => {
    if (a10) {
      let m10 = typeof D6 == "function" ? D6(t6) : D6;
      m10 !== t6 && u7(m10);
    } else i12(D6);
  }, [a10, t6, i12, u7]);
  return [g10, b8];
}
function Be2({ activeSnapPointProp: t6, setActiveSnapPointProp: n8, snapPoints: e13, drawerRef: o9, overlayRef: i12, fadeFromIndex: a10, onSnapPointChange: g10, direction: u7 = "bottom", container: b8, snapToSequentialPoint: D6 }) {
  let [h9, m10] = Qt({ prop: t6, defaultProp: e13?.[0], onChange: n8 }), [p8, U4] = r9.useState(typeof window < "u" ? { innerWidth: window.innerWidth, innerHeight: window.innerHeight } : void 0);
  r9.useEffect(() => {
    function c6() {
      U4({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    }
    return window.addEventListener("resize", c6), () => window.removeEventListener("resize", c6);
  }, []);
  let k5 = r9.useMemo(() => h9 === e13?.[e13.length - 1] || null, [e13, h9]), E10 = r9.useMemo(() => {
    var c6;
    return (c6 = e13?.findIndex((S9) => S9 === h9)) != null ? c6 : null;
  }, [e13, h9]), F2 = e13 && e13.length > 0 && (a10 || a10 === 0) && !Number.isNaN(a10) && e13[a10] === h9 || !e13, w5 = r9.useMemo(() => {
    let c6 = b8 ? { width: b8.getBoundingClientRect().width, height: b8.getBoundingClientRect().height } : typeof window < "u" ? { width: window.innerWidth, height: window.innerHeight } : { width: 0, height: 0 };
    var S9;
    return (S9 = e13?.map((y8) => {
      let _7 = typeof y8 == "string", M3 = 0;
      if (_7 && (M3 = parseInt(y8, 10)), C5(u7)) {
        let s11 = _7 ? M3 : p8 ? y8 * c6.height : 0;
        return p8 ? u7 === "bottom" ? c6.height - s11 : -c6.height + s11 : s11;
      }
      let z6 = _7 ? M3 : p8 ? y8 * c6.width : 0;
      return p8 ? u7 === "right" ? c6.width - z6 : -c6.width + z6 : z6;
    })) != null ? S9 : [];
  }, [e13, p8, b8]), P5 = r9.useMemo(() => E10 !== null ? w5?.[E10] : null, [w5, E10]), A5 = r9.useCallback((c6) => {
    var S9;
    let y8 = (S9 = w5?.findIndex((_7) => _7 === c6)) != null ? S9 : null;
    g10(y8), $6(o9.current, { transition: `transform ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})`, transform: C5(u7) ? `translate3d(0, ${c6}px, 0)` : `translate3d(${c6}px, 0, 0)` }), w5 && y8 !== w5.length - 1 && a10 !== void 0 && y8 !== a10 && y8 < a10 ? $6(i12.current, { transition: `opacity ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})`, opacity: "0" }) : $6(i12.current, { transition: `opacity ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})`, opacity: "1" }), m10(e13?.[Math.max(y8, 0)]);
  }, [o9.current, e13, w5, a10, i12, m10]);
  r9.useEffect(() => {
    if (h9 || t6) {
      var c6;
      let S9 = (c6 = e13?.findIndex((y8) => y8 === t6 || y8 === h9)) != null ? c6 : -1;
      w5 && S9 !== -1 && typeof w5[S9] == "number" && A5(w5[S9]);
    }
  }, [h9, t6, e13, w5, A5]);
  function d5({ draggedDistance: c6, closeDrawer: S9, velocity: y8, dismissible: _7 }) {
    if (a10 === void 0) return;
    let M3 = u7 === "bottom" || u7 === "right" ? (P5 ?? 0) - c6 : (P5 ?? 0) + c6, z6 = E10 === a10 - 1, s11 = E10 === 0, W6 = c6 > 0;
    if (z6 && $6(i12.current, { transition: `opacity ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})` }), !D6 && y8 > 2 && !W6) {
      _7 ? S9() : A5(w5[0]);
      return;
    }
    if (!D6 && y8 > 2 && W6 && w5 && e13) {
      A5(w5[e13.length - 1]);
      return;
    }
    let H6 = w5?.reduce((I8, X6) => typeof I8 != "number" || typeof X6 != "number" ? I8 : Math.abs(X6 - M3) < Math.abs(I8 - M3) ? X6 : I8), V7 = C5(u7) ? window.innerHeight : window.innerWidth;
    if (y8 > Kt && Math.abs(c6) < V7 * 0.4) {
      let I8 = W6 ? 1 : -1;
      if (I8 > 0 && k5 && e13) {
        A5(w5[e13.length - 1]);
        return;
      }
      if (s11 && I8 < 0 && _7 && S9(), E10 === null) return;
      A5(w5[E10 + I8]);
      return;
    }
    A5(H6);
  }
  function j5({ draggedDistance: c6 }) {
    if (P5 === null) return;
    let S9 = u7 === "bottom" || u7 === "right" ? P5 - c6 : P5 + c6;
    (u7 === "bottom" || u7 === "right") && S9 < w5[w5.length - 1] || (u7 === "top" || u7 === "left") && S9 > w5[w5.length - 1] || $6(o9.current, { transform: C5(u7) ? `translate3d(0, ${S9}px, 0)` : `translate3d(${S9}px, 0, 0)` });
  }
  function Q4(c6, S9) {
    if (!e13 || typeof E10 != "number" || !w5 || a10 === void 0) return null;
    let y8 = E10 === a10 - 1;
    if (E10 >= a10 && S9) return 0;
    if (y8 && !S9) return 1;
    if (!F2 && !y8) return null;
    let M3 = y8 ? E10 + 1 : E10 - 1, z6 = y8 ? w5[M3] - w5[M3 - 1] : w5[M3 + 1] - w5[M3], s11 = c6 / Math.abs(z6);
    return y8 ? 1 - s11 : s11;
  }
  return { isLastSnapPoint: k5, activeSnapPoint: h9, shouldFade: F2, getPercentageDragged: Q4, setActiveSnapPoint: m10, activeSnapPointIndex: E10, onRelease: d5, onDrag: j5, snapPointsOffset: w5 };
}
var Ue2 = () => () => {
};
function Fe2() {
  let { direction: t6, isOpen: n8, shouldScaleBackground: e13, setBackgroundColorOnScale: o9, noBodyStyles: i12 } = at2(), a10 = r9.useRef(null), g10 = be2(() => document.body.style.backgroundColor, []);
  function u7() {
    return (window.innerWidth - xt2) / window.innerWidth;
  }
  r9.useEffect(() => {
    if (n8 && e13) {
      a10.current && clearTimeout(a10.current);
      let b8 = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!b8) return;
      _e3(o9 && !i12 ? Dt(document.body, { background: "black" }) : Ue2, Dt(b8, { transformOrigin: C5(t6) ? "top" : "left", transitionProperty: "transform, border-radius", transitionDuration: `${O6.DURATION}s`, transitionTimingFunction: `cubic-bezier(${O6.EASE.join(",")})` }));
      let D6 = Dt(b8, { borderRadius: `${Gt}px`, overflow: "hidden", ...C5(t6) ? { transform: `scale(${u7()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${u7()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` } });
      return () => {
        D6(), a10.current = window.setTimeout(() => {
          g10 ? document.body.style.background = g10 : document.body.style.removeProperty("background");
        }, O6.DURATION * 1e3);
      };
    }
  }, [n8, e13, g10]);
}
var dt2 = null;
function We2({ isOpen: t6, modal: n8, nested: e13, hasBeenOpened: o9, preventScrollRestoration: i12, noBodyStyles: a10 }) {
  let [g10, u7] = r9.useState(() => typeof window < "u" ? window.location.href : ""), b8 = r9.useRef(0), D6 = r9.useCallback(() => {
    if (Bt() && dt2 === null && t6 && !a10) {
      dt2 = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height, right: "unset" };
      let { scrollX: m10, innerHeight: p8 } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, { top: `${-b8.current}px`, left: `${-m10}px`, right: "0px", height: "auto" }), window.setTimeout(() => window.requestAnimationFrame(() => {
        let U4 = p8 - window.innerHeight;
        U4 && b8.current >= p8 && (document.body.style.top = `${-(b8.current + U4)}px`);
      }), 300);
    }
  }, [t6]), h9 = r9.useCallback(() => {
    if (Bt() && dt2 !== null && !a10) {
      let m10 = -parseInt(document.body.style.top, 10), p8 = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, dt2), window.requestAnimationFrame(() => {
        if (i12 && g10 !== window.location.href) {
          u7(window.location.href);
          return;
        }
        window.scrollTo(p8, m10);
      }), dt2 = null;
    }
  }, [g10]);
  return r9.useEffect(() => {
    function m10() {
      b8.current = window.scrollY;
    }
    return m10(), window.addEventListener("scroll", m10), () => {
      window.removeEventListener("scroll", m10);
    };
  }, []), r9.useEffect(() => {
    if (n8) return () => {
      typeof document > "u" || document.querySelector("[data-vaul-drawer]") || h9();
    };
  }, [n8, h9]), r9.useEffect(() => {
    e13 || !o9 || (t6 ? (!window.matchMedia("(display-mode: standalone)").matches && D6(), n8 || window.setTimeout(() => {
      h9();
    }, 500)) : h9());
  }, [t6, o9, g10, n8, e13, D6, h9]), { restorePositionSetting: h9 };
}
function Zt({ open: t6, onOpenChange: n8, children: e13, onDrag: o9, onRelease: i12, snapPoints: a10, shouldScaleBackground: g10 = false, setBackgroundColorOnScale: u7 = true, closeThreshold: b8 = He2, scrollLockTimeout: D6 = Le2, dismissible: h9 = true, handleOnly: m10 = false, fadeFromIndex: p8 = a10 && a10.length - 1, activeSnapPoint: U4, setActiveSnapPoint: k5, fixed: E10, modal: F2 = true, onClose: w5, nested: P5, noBodyStyles: A5 = false, direction: d5 = "bottom", defaultOpen: j5 = false, disablePreventScroll: Q4 = true, snapToSequentialPoint: c6 = false, preventScrollRestoration: S9 = false, repositionInputs: y8 = true, onAnimationEnd: _7, container: M3, autoFocus: z6 = false }) {
  var s11, W6;
  let [H6 = false, V7] = Qt({ defaultProp: j5, prop: t6, onChange: (l10) => {
    n8?.(l10), !l10 && !P5 && ue3(), setTimeout(() => {
      _7?.(l10);
    }, O6.DURATION * 1e3), l10 && !F2 && typeof window < "u" && window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    }), l10 || (document.body.style.pointerEvents = "auto");
  } }), [I8, X6] = r9.useState(false), [K4, ot2] = r9.useState(false), [re2, $t] = r9.useState(false), et2 = r9.useRef(null), ft2 = r9.useRef(null), gt2 = r9.useRef(null), vt2 = r9.useRef(null), it2 = r9.useRef(null), lt2 = r9.useRef(false), yt2 = r9.useRef(null), bt2 = r9.useRef(0), nt2 = r9.useRef(false), At = r9.useRef(!j5), Pt2 = r9.useRef(0), f11 = r9.useRef(null), Mt2 = r9.useRef(((s11 = f11.current) == null ? void 0 : s11.getBoundingClientRect().height) || 0), It = r9.useRef(((W6 = f11.current) == null ? void 0 : W6.getBoundingClientRect().width) || 0), St = r9.useRef(0), ae3 = r9.useCallback((l10) => {
    a10 && l10 === st2.length - 1 && (ft2.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: oe4, activeSnapPointIndex: rt2, setActiveSnapPoint: Nt, onRelease: ie3, snapPointsOffset: st2, onDrag: le3, shouldFade: _t2, getPercentageDragged: se3 } = Be2({ snapPoints: a10, activeSnapPointProp: U4, setActiveSnapPointProp: k5, drawerRef: f11, fadeFromIndex: p8, overlayRef: et2, onSnapPointChange: ae3, direction: d5, container: M3, snapToSequentialPoint: c6 });
  Ce3({ isDisabled: !H6 || K4 || !F2 || re2 || !I8 || !y8 || !Q4 });
  let { restorePositionSetting: ue3 } = We2({ isOpen: H6, modal: F2, nested: P5 ?? false, hasBeenOpened: I8, preventScrollRestoration: S9, noBodyStyles: A5 });
  function mt2() {
    return (window.innerWidth - xt2) / window.innerWidth;
  }
  function ce3(l10) {
    var R5, T6;
    !h9 && !a10 || f11.current && !f11.current.contains(l10.target) || (Mt2.current = ((R5 = f11.current) == null ? void 0 : R5.getBoundingClientRect().height) || 0, It.current = ((T6 = f11.current) == null ? void 0 : T6.getBoundingClientRect().width) || 0, ot2(true), gt2.current = /* @__PURE__ */ new Date(), Yt() && window.addEventListener("touchend", () => lt2.current = false, { once: true }), l10.target.setPointerCapture(l10.pointerId), bt2.current = C5(d5) ? l10.pageY : l10.pageX);
  }
  function Ht(l10, R5) {
    var T6;
    let v10 = l10, x7 = (T6 = window.getSelection()) == null ? void 0 : T6.toString(), B5 = f11.current ? ht2(f11.current, d5) : null, L3 = /* @__PURE__ */ new Date();
    if (v10.tagName === "SELECT" || v10.hasAttribute("data-vaul-no-drag") || v10.closest("[data-vaul-no-drag]")) return false;
    if (d5 === "right" || d5 === "left") return true;
    if (ft2.current && L3.getTime() - ft2.current.getTime() < 500) return false;
    if (B5 !== null && (d5 === "bottom" ? B5 > 0 : B5 < 0)) return true;
    if (x7 && x7.length > 0) return false;
    if (it2.current && L3.getTime() - it2.current.getTime() < D6 && B5 === 0 || R5) return it2.current = L3, false;
    for (; v10; ) {
      if (v10.scrollHeight > v10.clientHeight) {
        if (v10.scrollTop !== 0) return it2.current = /* @__PURE__ */ new Date(), false;
        if (v10.getAttribute("role") === "dialog") return true;
      }
      v10 = v10.parentNode;
    }
    return true;
  }
  function de3(l10) {
    if (f11.current && K4) {
      let R5 = d5 === "bottom" || d5 === "right" ? 1 : -1, T6 = (bt2.current - (C5(d5) ? l10.pageY : l10.pageX)) * R5, v10 = T6 > 0, x7 = a10 && !h9 && !v10;
      if (x7 && rt2 === 0) return;
      let B5 = Math.abs(T6), L3 = document.querySelector("[data-vaul-drawer-wrapper]"), G4 = d5 === "bottom" || d5 === "top" ? Mt2.current : It.current, Y4 = B5 / G4, Z4 = se3(B5, v10);
      if (Z4 !== null && (Y4 = Z4), x7 && Y4 >= 1 || !lt2.current && !Ht(l10.target, v10)) return;
      if (f11.current.classList.add(Et2), lt2.current = true, $6(f11.current, { transition: "none" }), $6(et2.current, { transition: "none" }), a10 && le3({ draggedDistance: T6 }), v10 && !a10) {
        let q6 = Ne2(T6), pt2 = Math.min(q6 * -1, 0) * R5;
        $6(f11.current, { transform: C5(d5) ? `translate3d(0, ${pt2}px, 0)` : `translate3d(${pt2}px, 0, 0)` });
        return;
      }
      let J5 = 1 - Y4;
      if ((_t2 || p8 && rt2 === p8 - 1) && (o9?.(l10, Y4), $6(et2.current, { opacity: `${J5}`, transition: "none" }, true)), L3 && et2.current && g10) {
        let q6 = Math.min(mt2() + Y4 * (1 - mt2()), 1), pt2 = 8 - Y4 * 8, kt2 = Math.max(0, 14 - Y4 * 14);
        $6(L3, { borderRadius: `${pt2}px`, transform: C5(d5) ? `scale(${q6}) translate3d(0, ${kt2}px, 0)` : `scale(${q6}) translate3d(${kt2}px, 0, 0)`, transition: "none" }, true);
      }
      if (!a10) {
        let q6 = B5 * R5;
        $6(f11.current, { transform: C5(d5) ? `translate3d(0, ${q6}px, 0)` : `translate3d(${q6}px, 0, 0)` });
      }
    }
  }
  r9.useEffect(() => {
    window.requestAnimationFrame(() => {
      At.current = true;
    });
  }, []), r9.useEffect(() => {
    var l10;
    function R5() {
      if (!f11.current || !y8) return;
      let T6 = document.activeElement;
      if (Ot(T6) || nt2.current) {
        var v10;
        let x7 = ((v10 = window.visualViewport) == null ? void 0 : v10.height) || 0, B5 = window.innerHeight, L3 = B5 - x7, G4 = f11.current.getBoundingClientRect().height || 0, Y4 = G4 > B5 * 0.8;
        St.current || (St.current = G4);
        let Z4 = f11.current.getBoundingClientRect().top;
        if (Math.abs(Pt2.current - L3) > 60 && (nt2.current = !nt2.current), a10 && a10.length > 0 && st2 && rt2) {
          let J5 = st2[rt2] || 0;
          L3 += J5;
        }
        if (Pt2.current = L3, G4 > x7 || nt2.current) {
          let J5 = f11.current.getBoundingClientRect().height, q6 = J5;
          J5 > x7 && (q6 = x7 - (Y4 ? Z4 : xt2)), E10 ? f11.current.style.height = `${J5 - Math.max(L3, 0)}px` : f11.current.style.height = `${Math.max(q6, x7 - Z4)}px`;
        } else Se2() || (f11.current.style.height = `${St.current}px`);
        a10 && a10.length > 0 && !nt2.current ? f11.current.style.bottom = "0px" : f11.current.style.bottom = `${Math.max(L3, 0)}px`;
      }
    }
    return (l10 = window.visualViewport) == null || l10.addEventListener("resize", R5), () => {
      var T6;
      return (T6 = window.visualViewport) == null ? void 0 : T6.removeEventListener("resize", R5);
    };
  }, [rt2, a10, st2]);
  function ut2(l10) {
    fe3(), w5?.(), l10 || V7(false), setTimeout(() => {
      a10 && Nt(a10[0]);
    }, O6.DURATION * 1e3);
  }
  function Lt2() {
    if (!f11.current) return;
    let l10 = document.querySelector("[data-vaul-drawer-wrapper]"), R5 = ht2(f11.current, d5);
    $6(f11.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})` }), $6(et2.current, { transition: `opacity ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})`, opacity: "1" }), g10 && R5 && R5 > 0 && H6 && $6(l10, { borderRadius: `${Gt}px`, overflow: "hidden", ...C5(d5) ? { transform: `scale(${mt2()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${mt2()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${O6.DURATION}s`, transitionTimingFunction: `cubic-bezier(${O6.EASE.join(",")})` }, true);
  }
  function fe3() {
    !K4 || !f11.current || (f11.current.classList.remove(Et2), lt2.current = false, ot2(false), vt2.current = /* @__PURE__ */ new Date());
  }
  function me3(l10) {
    if (!K4 || !f11.current) return;
    f11.current.classList.remove(Et2), lt2.current = false, ot2(false), vt2.current = /* @__PURE__ */ new Date();
    let R5 = ht2(f11.current, d5);
    if (!l10 || !Ht(l10.target, false) || !R5 || Number.isNaN(R5) || gt2.current === null) return;
    let T6 = vt2.current.getTime() - gt2.current.getTime(), v10 = bt2.current - (C5(d5) ? l10.pageY : l10.pageX), x7 = Math.abs(v10) / T6;
    if (x7 > 0.05 && ($t(true), setTimeout(() => {
      $t(false);
    }, 200)), a10) {
      ie3({ draggedDistance: v10 * (d5 === "bottom" || d5 === "right" ? 1 : -1), closeDrawer: ut2, velocity: x7, dismissible: h9 }), i12?.(l10, true);
      return;
    }
    if (d5 === "bottom" || d5 === "right" ? v10 > 0 : v10 < 0) {
      Lt2(), i12?.(l10, true);
      return;
    }
    if (x7 > Kt) {
      ut2(), i12?.(l10, false);
      return;
    }
    var B5;
    let L3 = Math.min((B5 = f11.current.getBoundingClientRect().height) != null ? B5 : 0, window.innerHeight);
    var G4;
    let Y4 = Math.min((G4 = f11.current.getBoundingClientRect().width) != null ? G4 : 0, window.innerWidth), Z4 = d5 === "left" || d5 === "right";
    if (Math.abs(R5) >= (Z4 ? Y4 : L3) * b8) {
      ut2(), i12?.(l10, false);
      return;
    }
    i12?.(l10, true), Lt2();
  }
  r9.useEffect(() => (H6 && ($6(document.documentElement, { scrollBehavior: "auto" }), ft2.current = /* @__PURE__ */ new Date()), () => {
    Ie2(document.documentElement, "scrollBehavior");
  }), [H6]);
  function pe3(l10) {
    let R5 = l10 ? (window.innerWidth - tt2) / window.innerWidth : 1, T6 = l10 ? -tt2 : 0;
    yt2.current && window.clearTimeout(yt2.current), $6(f11.current, { transition: `transform ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})`, transform: C5(d5) ? `scale(${R5}) translate3d(0, ${T6}px, 0)` : `scale(${R5}) translate3d(${T6}px, 0, 0)` }), !l10 && f11.current && (yt2.current = setTimeout(() => {
      let v10 = ht2(f11.current, d5);
      $6(f11.current, { transition: "none", transform: C5(d5) ? `translate3d(0, ${v10}px, 0)` : `translate3d(${v10}px, 0, 0)` });
    }, 500));
  }
  function we2(l10, R5) {
    if (R5 < 0) return;
    let T6 = (window.innerWidth - tt2) / window.innerWidth, v10 = T6 + R5 * (1 - T6), x7 = -tt2 + R5 * tt2;
    $6(f11.current, { transform: C5(d5) ? `scale(${v10}) translate3d(0, ${x7}px, 0)` : `scale(${v10}) translate3d(${x7}px, 0, 0)`, transition: "none" });
  }
  function he3(l10, R5) {
    let T6 = C5(d5) ? window.innerHeight : window.innerWidth, v10 = R5 ? (T6 - tt2) / T6 : 1, x7 = R5 ? -tt2 : 0;
    R5 && $6(f11.current, { transition: `transform ${O6.DURATION}s cubic-bezier(${O6.EASE.join(",")})`, transform: C5(d5) ? `scale(${v10}) translate3d(0, ${x7}px, 0)` : `scale(${v10}) translate3d(${x7}px, 0, 0)` });
  }
  return r9.useEffect(() => {
    F2 || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [F2]), r9.createElement(W5, { defaultOpen: j5, onOpenChange: (l10) => {
    !h9 && !l10 || (l10 ? X6(true) : ut2(true), V7(l10));
  }, open: H6 }, r9.createElement(Vt.Provider, { value: { activeSnapPoint: oe4, snapPoints: a10, setActiveSnapPoint: Nt, drawerRef: f11, overlayRef: et2, onOpenChange: n8, onPress: ce3, onRelease: me3, onDrag: de3, dismissible: h9, shouldAnimate: At, handleOnly: m10, isOpen: H6, isDragging: K4, shouldFade: _t2, closeDrawer: ut2, onNestedDrag: we2, onNestedOpenChange: pe3, onNestedRelease: he3, keyboardIsOpen: nt2, modal: F2, snapPointsOffset: st2, activeSnapPointIndex: rt2, direction: d5, shouldScaleBackground: g10, setBackgroundColorOnScale: u7, noBodyStyles: A5, container: M3, autoFocus: z6 } }, e13));
}
var te4 = r9.forwardRef(function({ ...t6 }, n8) {
  let { overlayRef: e13, snapPoints: o9, onRelease: i12, shouldFade: a10, isOpen: g10, modal: u7, shouldAnimate: b8 } = at2(), D6 = qt(n8, e13), h9 = o9 && o9.length > 0;
  if (!u7) return null;
  let m10 = r9.useCallback((p8) => i12(p8), [i12]);
  return r9.createElement(z5, { onMouseUp: m10, ref: D6, "data-vaul-overlay": "", "data-vaul-snap-points": g10 && h9 ? "true" : "false", "data-vaul-snap-points-overlay": g10 && a10 ? "true" : "false", "data-vaul-animate": b8?.current ? "true" : "false", ...t6 });
});
te4.displayName = "Drawer.Overlay";
var ee4 = r9.forwardRef(function({ onPointerDownOutside: t6, style: n8, onOpenAutoFocus: e13, ...o9 }, i12) {
  let { drawerRef: a10, onPress: g10, onRelease: u7, onDrag: b8, keyboardIsOpen: D6, snapPointsOffset: h9, activeSnapPointIndex: m10, modal: p8, isOpen: U4, direction: k5, snapPoints: E10, container: F2, handleOnly: w5, shouldAnimate: P5, autoFocus: A5 } = at2(), [d5, j5] = r9.useState(false), Q4 = qt(i12, a10), c6 = r9.useRef(null), S9 = r9.useRef(null), y8 = r9.useRef(false), _7 = E10 && E10.length > 0;
  Fe2();
  let M3 = (s11, W6, H6 = 0) => {
    if (y8.current) return true;
    let V7 = Math.abs(s11.y), I8 = Math.abs(s11.x), X6 = I8 > V7, K4 = ["bottom", "right"].includes(W6) ? 1 : -1;
    if (W6 === "left" || W6 === "right") {
      if (!(s11.x * K4 < 0) && I8 >= 0 && I8 <= H6) return X6;
    } else if (!(s11.y * K4 < 0) && V7 >= 0 && V7 <= H6) return !X6;
    return y8.current = true, true;
  };
  r9.useEffect(() => {
    _7 && window.requestAnimationFrame(() => {
      j5(true);
    });
  }, []);
  function z6(s11) {
    c6.current = null, y8.current = false, u7(s11);
  }
  return r9.createElement(Q3, { "data-vaul-drawer-direction": k5, "data-vaul-drawer": "", "data-vaul-delayed-snap-points": d5 ? "true" : "false", "data-vaul-snap-points": U4 && _7 ? "true" : "false", "data-vaul-custom-container": F2 ? "true" : "false", "data-vaul-animate": P5?.current ? "true" : "false", ...o9, ref: Q4, style: h9 && h9.length > 0 ? { "--snap-point-height": `${h9[m10 ?? 0]}px`, ...n8 } : n8, onPointerDown: (s11) => {
    w5 || (o9.onPointerDown == null || o9.onPointerDown.call(o9, s11), c6.current = { x: s11.pageX, y: s11.pageY }, g10(s11));
  }, onOpenAutoFocus: (s11) => {
    e13?.(s11), A5 || s11.preventDefault();
  }, onPointerDownOutside: (s11) => {
    if (t6?.(s11), !p8 || s11.defaultPrevented) {
      s11.preventDefault();
      return;
    }
    D6.current && (D6.current = false);
  }, onFocusOutside: (s11) => {
    if (!p8) {
      s11.preventDefault();
      return;
    }
  }, onPointerMove: (s11) => {
    if (S9.current = s11, w5 || (o9.onPointerMove == null || o9.onPointerMove.call(o9, s11), !c6.current)) return;
    let W6 = s11.pageY - c6.current.y, H6 = s11.pageX - c6.current.x, V7 = s11.pointerType === "touch" ? 10 : 2;
    M3({ x: H6, y: W6 }, k5, V7) ? b8(s11) : (Math.abs(H6) > V7 || Math.abs(W6) > V7) && (c6.current = null);
  }, onPointerUp: (s11) => {
    o9.onPointerUp == null || o9.onPointerUp.call(o9, s11), c6.current = null, y8.current = false, u7(s11);
  }, onPointerOut: (s11) => {
    o9.onPointerOut == null || o9.onPointerOut.call(o9, s11), z6(S9.current);
  }, onContextMenu: (s11) => {
    o9.onContextMenu == null || o9.onContextMenu.call(o9, s11), S9.current && z6(S9.current);
  } });
});
ee4.displayName = "Drawer.Content";
var ze2 = 250;
var Ve2 = 120;
var ne4 = r9.forwardRef(function({ preventCycle: t6 = false, children: n8, ...e13 }, o9) {
  let { closeDrawer: i12, isDragging: a10, snapPoints: g10, activeSnapPoint: u7, setActiveSnapPoint: b8, dismissible: D6, handleOnly: h9, isOpen: m10, onPress: p8, onDrag: U4 } = at2(), k5 = r9.useRef(null), E10 = r9.useRef(false);
  function F2() {
    if (E10.current) {
      A5();
      return;
    }
    window.setTimeout(() => {
      w5();
    }, Ve2);
  }
  function w5() {
    if (a10 || t6 || E10.current) {
      A5();
      return;
    }
    if (A5(), !g10 || g10.length === 0) {
      D6 || i12();
      return;
    }
    if (u7 === g10[g10.length - 1] && D6) {
      i12();
      return;
    }
    let j5 = g10.findIndex((c6) => c6 === u7);
    if (j5 === -1) return;
    let Q4 = g10[j5 + 1];
    b8(Q4);
  }
  function P5() {
    k5.current = window.setTimeout(() => {
      E10.current = true;
    }, ze2);
  }
  function A5() {
    k5.current && window.clearTimeout(k5.current), E10.current = false;
  }
  return r9.createElement("div", { onClick: F2, onPointerCancel: A5, onPointerDown: (d5) => {
    h9 && p8(d5), P5();
  }, onPointerMove: (d5) => {
    h9 && U4(d5);
  }, ref: o9, "data-vaul-drawer-visible": m10 ? "true" : "false", "data-vaul-handle": "", "aria-hidden": "true", ...e13 }, r9.createElement("span", { "data-vaul-handle-hitarea": "", "aria-hidden": "true" }, n8));
});
ne4.displayName = "Drawer.Handle";
function Ye2({ onDrag: t6, onOpenChange: n8, open: e13, ...o9 }) {
  let { onNestedDrag: i12, onNestedOpenChange: a10, onNestedRelease: g10 } = at2();
  if (!i12) throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return r9.createElement(Zt, { nested: true, open: e13, onClose: () => {
    a10(false);
  }, onDrag: (u7, b8) => {
    i12(u7, b8), t6?.(u7, b8);
  }, onOpenChange: (u7) => {
    u7 && a10(u7), n8?.(u7);
  }, onRelease: g10, ...o9 });
}
function je3(t6) {
  let n8 = at2(), { container: e13 = n8.container, ...o9 } = t6;
  return r9.createElement(q5, { container: e13, ...o9 });
}
var Xe2 = { Root: Zt, NestedRoot: Ye2, Content: ee4, Overlay: te4, Trigger: Y3, Portal: je3, Handle: ne4, Close: te3, Title: ee3, Description: oe3 };

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/drawer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ jsx(Xe2.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(Xe2.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(Xe2.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(Xe2.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Xe2.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      Xe2.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-background",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Xe2.Title,
    {
      "data-slot": "drawer-title",
      className: cn("font-semibold text-foreground", className),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Xe2.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
};
