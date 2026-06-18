"use client";

// http-url:https://esm.sh/@radix-ui/react-compose-refs@1.1.3/X-ZXJlYWN0/es2022/react-compose-refs.mjs
import * as f from "react";
function l(n9, o9) {
  if (typeof n9 == "function") return n9(o9);
  n9 != null && (n9.current = o9);
}
function i(...n9) {
  return (o9) => {
    let u7 = false, c6 = n9.map((t6) => {
      let e13 = l(t6, o9);
      return !u7 && typeof e13 == "function" && (u7 = true), e13;
    });
    if (u7) return () => {
      for (let t6 = 0; t6 < c6.length; t6++) {
        let e13 = c6[t6];
        typeof e13 == "function" ? e13() : l(n9[t6], null);
      }
    };
  };
}
function s(...n9) {
  return f.useCallback(i(...n9), n9);
}

// http-url:https://esm.sh/@radix-ui/primitive@1.1.4/es2022/primitive.mjs
var i2 = !!(typeof window < "u" && window.document && window.document.createElement);
function f2(e13, o9, { checkForDefaultPrevented: n9 = true } = {}) {
  return function(t6) {
    if (e13?.(t6), n9 === false || !t6.defaultPrevented) return o9?.(t6);
  };
}

// http-url:https://esm.sh/@radix-ui/react-context@1.1.4/X-ZXJlYWN0/es2022/react-context.mjs
import * as o from "react";
import { jsx as m } from "react/jsx-runtime";
function $(t6, s11 = []) {
  let c6 = [];
  function a10(r9, e13) {
    let n9 = o.createContext(e13);
    n9.displayName = r9 + "Context";
    let u7 = c6.length;
    c6 = [...c6, e13];
    let d5 = (x8) => {
      let { scope: v10, children: C5, ...p8 } = x8, R5 = v10?.[t6]?.[u7] || n9, l10 = o.useMemo(() => p8, Object.values(p8));
      return m(R5.Provider, { value: l10, children: C5 });
    };
    d5.displayName = r9 + "Provider";
    function f11(x8, v10) {
      let C5 = v10?.[t6]?.[u7] || n9, p8 = o.useContext(C5);
      if (p8) return p8;
      if (e13 !== void 0) return e13;
      throw new Error(`\`${x8}\` must be used within \`${r9}\``);
    }
    return [d5, f11];
  }
  let i12 = () => {
    let r9 = c6.map((e13) => o.createContext(e13));
    return function(n9) {
      let u7 = n9?.[t6] || r9;
      return o.useMemo(() => ({ [`__scope${t6}`]: { ...n9, [t6]: u7 } }), [n9, u7]);
    };
  };
  return i12.scopeName = t6, [a10, S(i12, ...s11)];
}
function S(...t6) {
  let s11 = t6[0];
  if (t6.length === 1) return s11;
  let c6 = () => {
    let a10 = t6.map((i12) => ({ useScope: i12(), scopeName: i12.scopeName }));
    return function(r9) {
      let e13 = a10.reduce((n9, { useScope: u7, scopeName: d5 }) => {
        let x8 = u7(r9)[`__scope${d5}`];
        return { ...n9, ...x8 };
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
  let e13 = n.forwardRef((r9, i12) => {
    let { children: o9, ...a10 } = r9, l10 = null, c6 = false, s11 = [];
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
  let e13 = (r9) => "child" in r9 ? r9.children(r9.child) : r9.children;
  return e13.displayName = `${t6}.Slottable`, e13.__radixId = E, e13;
}
var O = g("Slottable");
var _ = (t6, e13) => {
  if ("child" in t6.props) {
    let r9 = t6.props.child;
    return n.isValidElement(r9) ? n.cloneElement(r9, void 0, t6.props.children(r9.props.children)) : null;
  }
  return n.isValidElement(e13) ? e13 : null;
};
function v(t6, e13) {
  let r9 = { ...e13 };
  for (let i12 in e13) {
    let o9 = t6[i12], a10 = e13[i12];
    /^on[A-Z]/.test(i12) ? o9 && a10 ? r9[i12] = (...c6) => {
      let s11 = a10(...c6);
      return o9(...c6), s11;
    } : o9 && (r9[i12] = o9) : i12 === "style" ? r9[i12] = { ...o9, ...a10 } : i12 === "className" && (r9[i12] = [o9, a10].filter(Boolean).join(" "));
  }
  return { ...t6, ...r9 };
}
function $2(t6) {
  let e13 = Object.getOwnPropertyDescriptor(t6.props, "ref")?.get, r9 = e13 && "isReactWarning" in e13 && e13.isReactWarning;
  return r9 ? t6.ref : (e13 = Object.getOwnPropertyDescriptor(t6, "ref")?.get, r9 = e13 && "isReactWarning" in e13 && e13.isReactWarning, r9 ? t6.props.ref : t6.props.ref || t6.ref);
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
  let a10 = b(`Primitive.${t6}`), r9 = o2.forwardRef((m10, s11) => {
    let { asChild: c6, ...n9 } = m10, f11 = c6 ? a10 : t6;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), l2(f11, { ...n9, ref: s11 });
  });
  return r9.displayName = `Primitive.${t6}`, { ...i12, [t6]: r9 };
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
  }), e2.useMemo(() => (...r9) => c6.current?.(...r9), []);
}

// http-url:https://esm.sh/@radix-ui/react-use-escape-keydown@1.1.2/X-ZXJlYWN0/es2022/react-use-escape-keydown.mjs
import * as n2 from "react";
function p(r9, e13 = globalThis?.document) {
  let t6 = u2(r9);
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
  let { disableOutsidePointerEvents: t6 = false, deferPointerDownOutside: a10 = false, onEscapeKeyDown: u7, onPointerDownOutside: d5, onFocusOutside: p8, onInteractOutside: v10, onDismiss: l10, ...m10 } = s11, n9 = e3.useContext(I2), [c6, P5] = e3.useState(null), f11 = c6?.ownerDocument ?? globalThis?.document, [, y8] = e3.useState({}), O7 = s(o9, (i12) => P5(i12)), h9 = Array.from(n9.layers), [L4] = [...n9.layersWithOutsidePointerEventsDisabled].slice(-1), r9 = h9.indexOf(L4), E10 = c6 ? h9.indexOf(c6) : -1, D6 = n9.layersWithOutsidePointerEventsDisabled.size > 0, b8 = E10 >= r9, w5 = e3.useRef(false), H6 = G((i12) => {
    let R5 = i12.target;
    if (!(R5 instanceof Node)) return;
    let x8 = [...n9.branches].some((C5) => C5.contains(R5));
    !b8 || x8 || (d5?.(i12), v10?.(i12), i12.defaultPrevented || l10?.());
  }, { ownerDocument: f11, deferPointerDownOutside: a10, isDeferredPointerDownOutsideRef: w5, dismissableSurfaces: n9.dismissableSurfaces }), B5 = J((i12) => {
    if (a10 && w5.current) return;
    let R5 = i12.target;
    [...n9.branches].some((C5) => C5.contains(R5)) || (p8?.(i12), v10?.(i12), i12.defaultPrevented || l10?.());
  }, f11);
  return p((i12) => {
    E10 === n9.layers.size - 1 && (u7?.(i12), !i12.defaultPrevented && l10 && (i12.preventDefault(), l10()));
  }, f11), e3.useEffect(() => {
    if (c6) return t6 && (n9.layersWithOutsidePointerEventsDisabled.size === 0 && (N = f11.body.style.pointerEvents, f11.body.style.pointerEvents = "none"), n9.layersWithOutsidePointerEventsDisabled.add(c6)), n9.layers.add(c6), T(), () => {
      t6 && (n9.layersWithOutsidePointerEventsDisabled.delete(c6), n9.layersWithOutsidePointerEventsDisabled.size === 0 && (f11.body.style.pointerEvents = N));
    };
  }, [c6, f11, t6, n9]), e3.useEffect(() => () => {
    c6 && (n9.layers.delete(c6), n9.layersWithOutsidePointerEventsDisabled.delete(c6), T());
  }, [c6, n9]), e3.useEffect(() => {
    let i12 = () => y8({});
    return document.addEventListener(g2, i12), () => document.removeEventListener(g2, i12);
  }, []), k(v2.div, { ...m10, ref: O7, style: { pointerEvents: D6 ? b8 ? "auto" : "none" : void 0, ...s11.style }, onFocusCapture: f2(s11.onFocusCapture, B5.onFocusCapture), onBlurCapture: f2(s11.onBlurCapture, B5.onBlurCapture), onPointerDownCapture: f2(s11.onPointerDownCapture, H6.onPointerDownCapture) });
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
  let { ownerDocument: t6 = globalThis?.document, deferPointerDownOutside: a10 = false, isDeferredPointerDownOutsideRef: u7, dismissableSurfaces: d5 } = o9, p8 = u2(s11), v10 = e3.useRef(false), l10 = e3.useRef(false), m10 = e3.useRef(/* @__PURE__ */ new Map()), n9 = e3.useRef(() => {
  });
  return e3.useEffect(() => {
    function c6() {
      l10.current = false, u7.current = false, m10.current.clear();
    }
    function P5() {
      return Array.from(m10.current.values()).some(Boolean);
    }
    function f11(r9) {
      if (!l10.current) return;
      let E10 = r9.target;
      E10 instanceof Node && [...d5].some((b8) => b8.contains(E10)) || m10.current.set(r9.type, true), r9.type === "click" && window.setTimeout(() => {
        l10.current && n9.current();
      }, 0);
    }
    function y8(r9) {
      l10.current && m10.current.set(r9.type, false);
    }
    let O7 = (r9) => {
      if (r9.target && !v10.current) {
        let D6 = function() {
          t6.removeEventListener("click", n9.current);
          let w5 = P5();
          c6(), w5 || z(X, p8, b8, { discrete: true });
        };
        var E10 = D6;
        let b8 = { originalEvent: r9 };
        l10.current = true, u7.current = a10 && r9.button === 0, m10.current.clear(), !a10 || r9.button !== 0 ? D6() : (t6.removeEventListener("click", n9.current), n9.current = D6, t6.addEventListener("click", n9.current, { once: true }));
      } else t6.removeEventListener("click", n9.current), c6();
      v10.current = false;
    }, h9 = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
    for (let r9 of h9) t6.addEventListener(r9, f11, true), t6.addEventListener(r9, y8);
    let L4 = window.setTimeout(() => {
      t6.addEventListener("pointerdown", O7);
    }, 0);
    return () => {
      window.clearTimeout(L4), t6.removeEventListener("pointerdown", O7), t6.removeEventListener("click", n9.current);
      for (let r9 of h9) t6.removeEventListener(r9, f11, true), t6.removeEventListener(r9, y8);
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
  let { loop: n9 = false, trapped: s11 = false, onMountAutoFocus: v10, onUnmountAutoFocus: U4, ...A5 } = e13, [o9, M3] = c.useState(null), E10 = u2(v10), F2 = u2(U4), b8 = c.useRef(null), P5 = s(t6, (u7) => M3(u7)), a10 = c.useRef({ paused: false, pause() {
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
        if (document.activeElement === document.body) for (let K5 of p8) K5.removedNodes.length > 0 && i3(o9);
      };
      var u7 = d5, h9 = f11, r9 = l10;
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
        let r9 = new CustomEvent(y, O2);
        o9.addEventListener(y, E10), o9.dispatchEvent(r9), r9.defaultPrevented || (H(z2(g3(o9)), { select: true }), document.activeElement === u7 && i3(o9));
      }
      return () => {
        o9.removeEventListener(y, E10), setTimeout(() => {
          let r9 = new CustomEvent(N2, O2);
          o9.addEventListener(N2, F2), o9.dispatchEvent(r9), r9.defaultPrevented || i3(u7 ?? document.body, { select: true }), o9.removeEventListener(N2, F2), C2.remove(a10);
        }, 0);
      };
    }
  }, [o9, E10, F2, a10]);
  let _8 = c.useCallback((u7) => {
    if (!n9 && !s11 || a10.paused) return;
    let h9 = u7.key === "Tab" && !u7.altKey && !u7.ctrlKey && !u7.metaKey, r9 = document.activeElement;
    if (h9 && r9) {
      let d5 = u7.currentTarget, [f11, l10] = V2(d5);
      f11 && l10 ? !u7.shiftKey && r9 === l10 ? (u7.preventDefault(), n9 && i3(f11, { select: true })) : u7.shiftKey && r9 === f11 && (u7.preventDefault(), n9 && i3(l10, { select: true })) : r9 === d5 && u7.preventDefault();
    }
  }, [n9, s11, a10.paused]);
  return x2(v2.div, { tabIndex: -1, ...A5, ref: P5, onKeyDown: _8 });
});
L2.displayName = D;
function H(e13, { select: t6 = false } = {}) {
  let n9 = document.activeElement;
  for (let s11 of e13) if (i3(s11, { select: t6 }), document.activeElement !== n9) return;
}
function V2(e13) {
  let t6 = g3(e13), n9 = R2(t6, e13), s11 = R2(t6.reverse(), e13);
  return [n9, s11];
}
function g3(e13) {
  let t6 = [], n9 = document.createTreeWalker(e13, NodeFilter.SHOW_ELEMENT, { acceptNode: (s11) => {
    let v10 = s11.tagName === "INPUT" && s11.type === "hidden";
    return s11.disabled || s11.hidden || v10 ? NodeFilter.FILTER_SKIP : s11.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n9.nextNode(); ) t6.push(n9.currentNode);
  return t6;
}
function R2(e13, t6) {
  for (let n9 of e13) if (!W(n9, { upTo: t6 })) return n9;
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
    let n9 = document.activeElement;
    e13.focus({ preventScroll: true }), e13 !== n9 && j2(e13) && t6 && e13.select();
  }
}
var C2 = q2();
function q2() {
  let e13 = [];
  return { add(t6) {
    let n9 = e13[0];
    t6 !== n9 && n9?.pause(), e13 = I3(e13, t6), e13.unshift(t6);
  }, remove(t6) {
    e13 = I3(e13, t6), e13[0]?.resume();
  } };
}
function I3(e13, t6) {
  let n9 = [...e13], s11 = n9.indexOf(t6);
  return s11 !== -1 && n9.splice(s11, 1), n9;
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
  let [r9, a10] = o3.useState(f3());
  return e4(() => {
    t6 || a10((e13) => e13 ?? String(s3++));
  }, [t6]), t6 || (r9 ? `radix-${r9}` : "");
}

// http-url:https://esm.sh/@radix-ui/react-portal@1.1.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-portal.mjs
import * as t3 from "react";
import * as r2 from "react-dom";
import { jsx as p2 } from "react/jsx-runtime";
var u3 = "Portal";
var e5 = t3.forwardRef((a10, c6) => {
  let { container: i12, ...n9 } = a10, [m10, s11] = t3.useState(false);
  e4(() => s11(true), []);
  let o9 = i12 || m10 && globalThis?.document?.body;
  return o9 ? r2.createPortal(p2(v2.div, { ...n9, ref: c6 }), o9) : null;
});
e5.displayName = u3;

// http-url:https://esm.sh/@radix-ui/react-presence@1.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-presence.mjs
import * as t4 from "react";
import * as g4 from "react";
function E2(n9, e13) {
  return g4.useReducer((r9, o9) => e13[r9][o9] ?? r9, n9);
}
var y2 = (n9) => {
  let { present: e13, children: r9 } = n9, o9 = v3(e13), i12 = typeof r9 == "function" ? r9({ present: o9.isPresent }) : t4.Children.only(r9), u7 = S2(o9.ref, h2(i12));
  return typeof r9 == "function" || o9.isPresent ? t4.cloneElement(i12, { ref: u7 }) : null;
};
y2.displayName = "Presence";
function v3(n9) {
  let [e13, r9] = t4.useState(), o9 = t4.useRef(null), i12 = t4.useRef(n9), u7 = t4.useRef("none"), s11 = n9 ? "mounted" : "unmounted", [c6, f11] = E2(s11, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return t4.useEffect(() => {
    let a10 = N3(o9.current);
    u7.current = c6 === "mounted" ? a10 : "none";
  }, [c6]), e4(() => {
    let a10 = o9.current, m10 = i12.current;
    if (m10 !== n9) {
      let p8 = u7.current, l10 = N3(a10);
      n9 ? f11("MOUNT") : l10 === "none" || a10?.display === "none" ? f11("UNMOUNT") : f11(m10 && p8 !== l10 ? "ANIMATION_OUT" : "UNMOUNT"), i12.current = n9;
    }
  }, [n9, f11]), e4(() => {
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
    o9.current = a10 ? getComputedStyle(a10) : null, r9(a10);
  }, []) };
}
function A(n9, e13) {
  if (typeof n9 == "function") return n9(e13);
  n9 != null && (n9.current = e13);
}
function S2(...n9) {
  let e13 = t4.useRef(n9);
  return e13.current = n9, t4.useCallback((r9) => {
    let o9 = e13.current, i12 = false, u7 = o9.map((s11) => {
      let c6 = A(s11, r9);
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
function N3(n9) {
  return n9?.animationName || "none";
}
function h2(n9) {
  let e13 = Object.getOwnPropertyDescriptor(n9.props, "ref")?.get, r9 = e13 && "isReactWarning" in e13 && e13.isReactWarning;
  return r9 ? n9.ref : (e13 = Object.getOwnPropertyDescriptor(n9, "ref")?.get, r9 = e13 && "isReactWarning" in e13 && e13.isReactWarning, r9 ? n9.props.ref : n9.props.ref || n9.ref);
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
  let [t6, f11, v10] = $3({ defaultProp: a10, onChange: s11 }), l10 = e13 !== void 0, r9 = l10 ? e13 : t6;
  {
    let u7 = n6.useRef(e13 !== void 0);
    n6.useEffect(() => {
      let o9 = u7.current;
      o9 !== l10 && console.warn(`${i12} is changing from ${o9 ? "controlled" : "uncontrolled"} to ${l10 ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), u7.current = l10;
    }, [l10, i12]);
  }
  let C5 = n6.useCallback((u7) => {
    if (l10) {
      let o9 = y3(u7) ? u7(e13) : u7;
      o9 !== e13 && v10.current?.(o9);
    } else f11(u7);
  }, [l10, e13, f11, v10]);
  return [r9, C5];
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
var W2 = function(r9) {
  if (typeof document > "u") return null;
  var a10 = Array.isArray(r9) ? r9[0] : r9;
  return a10.ownerDocument.body;
};
var f5 = /* @__PURE__ */ new WeakMap();
var v4 = /* @__PURE__ */ new WeakMap();
var p3 = {};
var h3 = 0;
var b2 = function(r9) {
  return r9 && (r9.host || b2(r9.parentNode));
};
var P2 = function(r9, a10) {
  return a10.map(function(t6) {
    if (r9.contains(t6)) return t6;
    var u7 = b2(t6);
    return u7 && r9.contains(u7) ? u7 : (console.error("aria-hidden", t6, "in not contained inside", r9, ". Doing nothing"), null);
  }).filter(function(t6) {
    return !!t6;
  });
};
var E4 = function(r9, a10, t6, u7) {
  var i12 = P2(a10, Array.isArray(r9) ? r9 : [r9]);
  p3[t6] || (p3[t6] = /* @__PURE__ */ new WeakMap());
  var s11 = p3[t6], l10 = [], c6 = /* @__PURE__ */ new Set(), O7 = new Set(i12), y8 = function(e13) {
    !e13 || c6.has(e13) || (c6.add(e13), y8(e13.parentNode));
  };
  i12.forEach(y8);
  var d5 = function(e13) {
    !e13 || O7.has(e13) || Array.prototype.forEach.call(e13.children, function(n9) {
      if (c6.has(n9)) d5(n9);
      else try {
        var o9 = n9.getAttribute(u7), A5 = o9 !== null && o9 !== "false", w5 = (f5.get(n9) || 0) + 1, M3 = (s11.get(n9) || 0) + 1;
        f5.set(n9, w5), s11.set(n9, M3), l10.push(n9), w5 === 1 && A5 && v4.set(n9, true), M3 === 1 && n9.setAttribute(t6, "true"), A5 || n9.setAttribute(u7, "true");
      } catch (x8) {
        console.error("aria-hidden: cannot operate on ", n9, x8);
      }
    });
  };
  return d5(a10), c6.clear(), h3++, function() {
    l10.forEach(function(e13) {
      var n9 = f5.get(e13) - 1, o9 = s11.get(e13) - 1;
      f5.set(e13, n9), s11.set(e13, o9), n9 || (v4.has(e13) || e13.removeAttribute(u7), v4.delete(e13)), o9 || e13.removeAttribute(t6);
    }), h3--, h3 || (f5 = /* @__PURE__ */ new WeakMap(), f5 = /* @__PURE__ */ new WeakMap(), v4 = /* @__PURE__ */ new WeakMap(), p3 = {});
  };
};
var S3 = function(r9, a10, t6) {
  t6 === void 0 && (t6 = "data-aria-hidden");
  var u7 = Array.from(Array.isArray(r9) ? r9 : [r9]), i12 = a10 || W2(r9);
  return i12 ? (u7.push.apply(u7, Array.from(i12.querySelectorAll("[aria-live], script"))), E4(u7, i12, t6, "aria-hidden")) : function() {
    return null;
  };
};

// http-url:https://esm.sh/tslib@2.8.1/es2022/tslib.mjs
var v5 = function() {
  return v5 = Object.assign || function(t6) {
    for (var r9, n9 = 1, i12 = arguments.length; n9 < i12; n9++) {
      r9 = arguments[n9];
      for (var o9 in r9) Object.prototype.hasOwnProperty.call(r9, o9) && (t6[o9] = r9[o9]);
    }
    return t6;
  }, v5.apply(this, arguments);
};
function S4(e13, t6) {
  var r9 = {};
  for (var n9 in e13) Object.prototype.hasOwnProperty.call(e13, n9) && t6.indexOf(n9) < 0 && (r9[n9] = e13[n9]);
  if (e13 != null && typeof Object.getOwnPropertySymbols == "function") for (var i12 = 0, n9 = Object.getOwnPropertySymbols(e13); i12 < n9.length; i12++) t6.indexOf(n9[i12]) < 0 && Object.prototype.propertyIsEnumerable.call(e13, n9[i12]) && (r9[n9[i12]] = e13[n9[i12]]);
  return r9;
}
function V3(e13, t6, r9) {
  if (r9 || arguments.length === 2) for (var n9 = 0, i12 = t6.length, o9; n9 < i12; n9++) (o9 || !(n9 in t6)) && (o9 || (o9 = Array.prototype.slice.call(t6, 0, n9)), o9[n9] = t6[n9]);
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
function o4(r9, e13) {
  return typeof r9 == "function" ? r9(e13) : r9 && (r9.current = e13), r9;
}
function u4(r9, e13) {
  var t6 = k2(function() {
    return { value: r9, callback: e13, facade: { get current() {
      return t6.value;
    }, set current(n9) {
      var a10 = t6.value;
      a10 !== n9 && (t6.value = n9, t6.callback(n9, a10));
    } } };
  })[0];
  return t6.callback = e13, t6.facade;
}
var x3 = typeof window < "u" ? i5.useLayoutEffect : i5.useEffect;
var s4 = /* @__PURE__ */ new WeakMap();
function v6(r9, e13) {
  var t6 = u4(e13 || null, function(n9) {
    return r9.forEach(function(a10) {
      return o4(a10, n9);
    });
  });
  return x3(function() {
    var n9 = s4.get(t6);
    if (n9) {
      var a10 = new Set(n9), l10 = new Set(r9), R5 = t6.current;
      a10.forEach(function(f11) {
        l10.has(f11) || o4(f11, null);
      }), l10.forEach(function(f11) {
        a10.has(f11) || o4(f11, R5);
      });
    }
    s4.set(t6, r9);
  }, [r9]), t6;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/exports.mjs
import * as i6 from "react";
var a3 = function(r9) {
  var e13 = r9.sideCar, o9 = S4(r9, ["sideCar"]);
  if (!e13) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var t6 = e13.read();
  if (!t6) throw new Error("Sidecar medium not found");
  return i6.createElement(t6, v5({}, o9));
};
a3.isSideCarExport = true;
function p4(r9, e13) {
  return r9.useMedium(e13), a3;
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
  run(e13, r9, ...t6) {
    this._currentStore = e13;
    let n9 = r9(...t6);
    return this._currentStore = void 0, n9;
  }
  exit(e13, ...r9) {
    let t6 = this._currentStore;
    this._currentStore = void 0;
    let n9 = e13(...r9);
    return this._currentStore = t6, n9;
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
  constructor(e13, r9 = s5()) {
    this.type = e13, this._asyncId = -1 * _3++, this._triggerAsyncId = typeof r9 == "number" ? r9 : r9?.triggerAsyncId;
  }
  static bind(e13, r9, t6) {
    return new E5(r9 ?? "anonymous").bind(e13);
  }
  bind(e13, r9) {
    let t6 = (...n9) => this.runInAsyncScope(e13, r9, ...n9);
    return t6.asyncResource = this, t6;
  }
  runInAsyncScope(e13, r9, ...t6) {
    return e13.apply(r9, t6);
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
  static setMaxListeners(t6 = y5, ...r9) {
    if (r9.length === 0) y5 = t6;
    else for (let n9 of r9) if (J2(n9)) n9[x4] = t6, n9[W3] = false;
    else if (typeof n9.setMaxListeners == "function") n9.setMaxListeners(t6);
    else throw new v7("eventTargets", ["EventEmitter", "EventTarget"], n9);
  }
  static listenerCount(t6, r9) {
    if (typeof t6.listenerCount == "function") return t6.listenerCount(r9);
    E6.prototype.listenerCount.call(t6, r9);
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
  emit(t6, ...r9) {
    let n9 = t6 === "error", i12 = this._events;
    if (i12 !== void 0) n9 && i12[M] !== void 0 && this.emit(M, ...r9), n9 = n9 && i12.error === void 0;
    else if (!n9) return false;
    if (n9) {
      let s11;
      if (r9.length > 0 && (s11 = r9[0]), s11 instanceof Error) {
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
      let s11 = o9.apply(this, r9);
      s11 != null && K(this, s11, t6, r9);
    } else {
      let s11 = o9.length, l10 = I5(o9);
      for (let a10 = 0; a10 < s11; ++a10) {
        let c6 = l10[a10].apply(this, r9);
        c6 != null && K(this, c6, t6, r9);
      }
    }
    return true;
  }
  addListener(t6, r9) {
    return q3(this, t6, r9, false), this;
  }
  on(t6, r9) {
    return this.addListener(t6, r9);
  }
  prependListener(t6, r9) {
    return q3(this, t6, r9, true), this;
  }
  once(t6, r9) {
    return this.on(t6, z3(this, t6, r9)), this;
  }
  prependOnceListener(t6, r9) {
    return this.prependListener(t6, z3(this, t6, r9)), this;
  }
  removeListener(t6, r9) {
    let n9 = this._events;
    if (n9 === void 0) return this;
    let i12 = n9[t6];
    if (i12 === void 0) return this;
    if (i12 === r9 || i12.listener === r9) this._eventsCount -= 1, this[d2] ? n9[t6] = void 0 : this._eventsCount === 0 ? this._events = { __proto__: null } : (delete n9[t6], n9.removeListener && this.emit("removeListener", t6, i12.listener || r9));
    else if (typeof i12 != "function") {
      let o9 = -1;
      for (let s11 = i12.length - 1; s11 >= 0; s11--) if (i12[s11] === r9 || i12[s11].listener === r9) {
        o9 = s11;
        break;
      }
      if (o9 < 0) return this;
      o9 === 0 ? i12.shift() : ge(i12, o9), i12.length === 1 && (n9[t6] = i12[0]), n9.removeListener !== void 0 && this.emit("removeListener", t6, r9);
    }
    return this;
  }
  off(t6, r9) {
    return this.removeListener(t6, r9);
  }
  removeAllListeners(t6) {
    let r9 = this._events;
    if (r9 === void 0) return this;
    if (r9.removeListener === void 0) return arguments.length === 0 ? (this._events = { __proto__: null }, this._eventsCount = 0) : r9[t6] !== void 0 && (--this._eventsCount === 0 ? this._events = { __proto__: null } : delete r9[t6]), this[d2] = false, this;
    if (arguments.length === 0) {
      for (let i12 of Reflect.ownKeys(r9)) i12 !== "removeListener" && this.removeAllListeners(i12);
      return this.removeAllListeners("removeListener"), this._events = { __proto__: null }, this._eventsCount = 0, this[d2] = false, this;
    }
    let n9 = r9[t6];
    if (typeof n9 == "function") this.removeListener(t6, n9);
    else if (n9 !== void 0) for (let i12 = n9.length - 1; i12 >= 0; i12--) this.removeListener(t6, n9[i12]);
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
  listenerCount(t6, r9) {
    let n9 = this._events;
    if (n9 !== void 0) {
      let i12 = n9[t6];
      if (typeof i12 == "function") return r9 != null ? r9 === i12 || r9 === i12.listener ? 1 : 0 : 1;
      if (i12 !== void 0) {
        if (r9 != null) {
          let o9 = 0;
          for (let s11 = 0, l10 = i12.length; s11 < l10; s11++) (i12[s11] === r9 || i12[s11].listener === r9) && o9++;
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
    let { asyncResource: r9 } = this;
    return Array.prototype.unshift(t6, super.emit, this, e13), Reflect.apply(r9.runInAsyncScope, r9, t6);
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
  constructor(e13, t6, r9) {
    super(t6, r9), this[S6] = e13;
  }
  get eventEmitter() {
    if (this[S6] === void 0) throw new _4("EventEmitterReferencingAsyncResource");
    return this[S6];
  }
};
var fe = function(e13, t6, r9 = {}) {
  let n9 = r9.signal;
  if (n9?.aborted) throw new b3(void 0, { cause: n9?.reason });
  let i12 = r9.highWaterMark ?? r9.highWatermark ?? Number.MAX_SAFE_INTEGER, o9 = r9.lowWaterMark ?? r9.lowWatermark ?? 1, s11 = new N4(), l10 = new N4(), a10 = false, c6 = null, m10 = false, p8 = 0, Q4 = Object.setPrototypeOf({ next() {
    if (p8) {
      let u7 = s11.shift();
      return p8--, a10 && p8 < o9 && (e13.resume?.(), a10 = false), Promise.resolve(k3(u7, false));
    }
    if (c6) {
      let u7 = Promise.reject(c6);
      return c6 = null, u7;
    }
    return m10 ? L4() : new Promise(function(u7, ee5) {
      l10.push({ resolve: u7, reject: ee5 });
    });
  }, return() {
    return L4();
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
  } } }, ne2), { addEventListener: A5, removeAll: V8 } = Ee();
  A5(e13, t6, r9[le] ? $7 : function(...u7) {
    return $7(u7);
  }), t6 !== "error" && typeof e13.on == "function" && A5(e13, "error", R5);
  let F2 = r9?.close;
  if (F2?.length) for (let u7 of F2) A5(e13, u7, L4);
  let Y4 = n9 ? X2(n9, Z5) : null;
  return Q4;
  function Z5() {
    R5(new b3(void 0, { cause: n9?.reason }));
  }
  function $7(u7) {
    l10.isEmpty() ? (p8++, !a10 && p8 > i12 && (a10 = true, e13.pause?.()), s11.push(u7)) : l10.shift().resolve(k3(u7, false));
  }
  function R5(u7) {
    l10.isEmpty() ? c6 = u7 : l10.shift().reject(u7), L4();
  }
  function L4() {
    Y4?.[Symbol.dispose](), V8(), m10 = true;
    let u7 = k3(void 0, true);
    for (; !l10.isEmpty(); ) l10.shift().resolve(u7);
    return Promise.resolve(u7);
  }
};
var he = async function(e13, t6, r9 = {}) {
  let n9 = r9?.signal;
  if (n9?.aborted) throw new b3(void 0, { cause: n9?.reason });
  return new Promise((i12, o9) => {
    let s11 = (m10) => {
      typeof e13.removeListener == "function" && e13.removeListener(t6, l10), n9 != null && g5(n9, "abort", c6), o9(m10);
    }, l10 = (...m10) => {
      typeof e13.removeListener == "function" && e13.removeListener("error", s11), n9 != null && g5(n9, "abort", c6), i12(m10);
    }, a10 = { __proto__: null, once: true, [P3]: true };
    O3(e13, t6, l10, a10), t6 !== "error" && typeof e13.once == "function" && e13.once("error", s11);
    function c6() {
      g5(e13, t6, l10), g5(e13, "error", s11), o9(new b3(void 0, { cause: n9?.reason }));
    }
    n9 != null && O3(n9, "abort", c6, { __proto__: null, once: true, [P3]: true });
  });
};
var X2 = function(e13, t6) {
  if (e13 === void 0) throw new v7("signal", "AbortSignal", e13);
  let r9;
  return e13.aborted ? queueMicrotask(() => t6()) : (e13.addEventListener("abort", t6, { __proto__: null, once: true, [P3]: true }), r9 = () => {
    e13.removeEventListener("abort", t6);
  }), { __proto__: null, [Symbol.dispose]() {
    r9?.();
  } };
};
var ve = function(e13, t6) {
  if (typeof e13.listeners == "function") return e13.listeners(t6);
  if (J2(e13)) {
    let r9 = e13[kEvents].get(t6), n9 = [], i12 = r9?.next;
    for (; i12?.listener !== void 0; ) {
      let o9 = i12.listener?.deref ? i12.listener.deref() : i12.listener;
      n9.push(o9), i12 = i12.next;
    }
    return n9;
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
function K(e13, t6, r9, n9) {
  if (e13[f6]) try {
    let i12 = t6.then;
    typeof i12 == "function" && i12.call(t6, void 0, function(o9) {
      setTimeout(pe, 0, e13, o9, r9, n9);
    });
  } catch (i12) {
    e13.emit("error", i12);
  }
}
function pe(e13, t6, r9, n9) {
  if (typeof e13[C3] == "function") e13[C3](t6, r9, ...n9);
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
  let r9 = "";
  try {
    let { name: o9 } = this.constructor;
    o9 !== "EventEmitter" && (r9 = ` on ${o9} instance`);
  } catch {
  }
  let n9 = `
Emitted 'error' event${r9} at:
`, i12 = (t6.stack || "").split(`
`).slice(1);
  return e13.stack + n9 + i12.join(`
`);
}
function q3(e13, t6, r9, n9) {
  let i12, o9, s11;
  if (o9 = e13._events, o9 === void 0 ? (o9 = e13._events = { __proto__: null }, e13._eventsCount = 0) : (o9.newListener !== void 0 && (e13.emit("newListener", t6, r9.listener ?? r9), o9 = e13._events), s11 = o9[t6]), s11 === void 0) o9[t6] = r9, ++e13._eventsCount;
  else if (typeof s11 == "function" ? s11 = o9[t6] = n9 ? [r9, s11] : [s11, r9] : n9 ? s11.unshift(r9) : s11.push(r9), i12 = T3(e13), i12 > 0 && s11.length > i12 && !s11.warned) {
    s11.warned = true;
    let l10 = new se(`Possible EventEmitter memory leak detected. ${s11.length} ${String(t6)} listeners added to ${G2(e13, { depth: -1 })}. MaxListeners is ${i12}. Use emitter.setMaxListeners() to increase limit`, { name: "MaxListenersExceededWarning", emitter: e13, type: t6, count: s11.length });
    console.warn(l10);
  }
  return e13;
}
function ye() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function z3(e13, t6, r9) {
  let n9 = { fired: false, wrapFn: void 0, target: e13, type: t6, listener: r9 }, i12 = ye.bind(n9);
  return i12.listener = r9, n9.wrapFn = i12, i12;
}
function B(e13, t6, r9) {
  let n9 = e13._events;
  if (n9 === void 0) return [];
  let i12 = n9[t6];
  return i12 === void 0 ? [] : typeof i12 == "function" ? r9 ? [i12.listener || i12] : [i12] : r9 ? _e(i12) : I5(i12);
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
  for (let r9 = 0; r9 < t6.length; ++r9) {
    let n9 = t6[r9].listener;
    typeof n9 == "function" && (t6[r9] = n9);
  }
  return t6;
}
function k3(e13, t6) {
  return { value: e13, done: t6 };
}
function g5(e13, t6, r9, n9) {
  if (typeof e13.removeListener == "function") e13.removeListener(t6, r9);
  else if (typeof e13.removeEventListener == "function") e13.removeEventListener(t6, r9, n9);
  else throw new v7("emitter", "EventEmitter", e13);
}
function O3(e13, t6, r9, n9) {
  if (typeof e13.on == "function") n9?.once ? e13.once(t6, r9) : e13.on(t6, r9);
  else if (typeof e13.addEventListener == "function") e13.addEventListener(t6, r9, n9);
  else throw new v7("emitter", "EventEmitter", e13);
}
function Ee() {
  let e13 = [];
  return { addEventListener(t6, r9, n9, i12) {
    O3(t6, r9, n9, i12), Array.prototype.push(e13, [t6, r9, n9, i12]);
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
  clearLine(t6, r9) {
    return r9 && r9(), false;
  }
  clearScreenDown(t6) {
    return t6 && t6(), false;
  }
  cursorTo(t6, r9, e13) {
    return e13 && typeof e13 == "function" && e13(), false;
  }
  moveCursor(t6, r9, e13) {
    return e13 && e13(), false;
  }
  getColorDepth(t6) {
    return 1;
  }
  hasColors(t6, r9) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(t6, r9, e13) {
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
    let d5 = s11 - t6[0], n9 = i12 - t6[0];
    return n9 < 0 && (d5 = d5 - 1, n9 = 1e9 + n9), [d5, n9];
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
    !e13 || !s11 || (e13 = false, s11.length > 0 ? t6 = [...s11, ...t6] : i12 = -1, t6.length > 0 && n9());
  }
  function n9() {
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
    t6.push(c6.bind(void 0, ...l10)), t6.length === 1 && !e13 && setTimeout(n9);
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
function s7(u7, r9) {
  r9 === void 0 && (r9 = a6);
  var e13 = [], o9 = false, d5 = { read: function() {
    if (o9) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return e13.length ? e13[e13.length - 1] : u7;
  }, useMedium: function(t6) {
    var n9 = r9(t6, o9);
    return e13.push(n9), function() {
      e13 = e13.filter(function(i12) {
        return i12 !== n9;
      });
    };
  }, assignSyncMedium: function(t6) {
    for (o9 = true; e13.length; ) {
      var n9 = e13;
      e13 = [], n9.forEach(t6);
    }
    e13 = { push: function(i12) {
      return t6(i12);
    }, filter: function() {
      return e13;
    } };
  }, assignMedium: function(t6) {
    o9 = true;
    var n9 = [];
    if (e13.length) {
      var i12 = e13;
      e13 = [], i12.forEach(t6), n9 = e13;
    }
    var h9 = function() {
      var f11 = n9;
      n9 = [], f11.forEach(t6);
    }, c6 = function() {
      return Promise.resolve().then(h9);
    };
    c6(), e13 = { push: function(f11) {
      n9.push(f11), c6();
    }, filter: function(f11) {
      return n9 = n9.filter(f11), e13;
    } };
  } };
  return d5;
}
function g6(u7) {
  u7 === void 0 && (u7 = {});
  var r9 = s7(null);
  return r9.options = v5({ async: true, ssr: false }, u7), r9;
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
  var o9 = e9.useRef(null), t6 = e9.useState({ onScrollCapture: l5, onWheelCapture: l5, onTouchMoveCapture: l5 }), f11 = t6[0], R5 = t6[1], v10 = a10.forwardProps, n9 = a10.children, h9 = a10.className, u7 = a10.removeScrollBar, C5 = a10.enabled, g10 = a10.shards, P5 = a10.sideCar, S9 = a10.noRelative, b8 = a10.noIsolation, w5 = a10.inert, N9 = a10.allowPinchZoom, c6 = a10.as, M3 = c6 === void 0 ? "div" : c6, _8 = a10.gapMode, B5 = S4(a10, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k5 = P5, i12 = v6([o9, d5]), s11 = v5(v5({}, B5), f11);
  return e9.createElement(e9.Fragment, null, C5 && e9.createElement(k5, { sideCar: a7, removeScrollBar: u7, shards: g10, noRelative: S9, noIsolation: b8, inert: w5, setCallbacks: R5, allowPinchZoom: !!N9, lockRef: o9, gapMode: _8 }), v10 ? e9.cloneElement(e9.Children.only(n9), v5(v5({}, s11), { ref: i12 })) : e9.createElement(M3, v5({}, s11, { className: h9, ref: i12 }), n9));
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
  return { add: function(n9) {
    t6 == 0 && (e13 = c4()) && (s8(e13, n9), f7(e13)), t6++;
  }, remove: function() {
    t6--, !t6 && e13 && (e13.parentNode && e13.parentNode.removeChild(e13), e13 = null);
  } };
};
var r6 = function() {
  var t6 = o8();
  return function(e13, n9) {
    l6.useEffect(function() {
      return t6.add(e13), function() {
        t6.remove();
      };
    }, [e13 && n9]);
  };
};
var m6 = function() {
  var t6 = r6(), e13 = function(n9) {
    var i12 = n9.styles, u7 = n9.dynamic;
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
  var r9 = window.getComputedStyle(document.body), o9 = r9[t6 === "padding" ? "paddingLeft" : "marginLeft"], n9 = r9[t6 === "padding" ? "paddingTop" : "marginTop"], e13 = r9[t6 === "padding" ? "paddingRight" : "marginRight"];
  return [m7(o9), m7(n9), m7(e13)];
};
var f8 = function(t6) {
  if (t6 === void 0 && (t6 = "margin"), typeof window > "u") return h7;
  var r9 = b5(t6), o9 = document.documentElement.clientWidth, n9 = window.innerWidth;
  return { left: r9[0], top: r9[1], right: r9[2], gap: Math.max(0, n9 - o9 + r9[2] - r9[0]) };
};
var y6 = m6();
var i9 = "data-scroll-locked";
var S8 = function(t6, r9, o9, n9) {
  var e13 = t6.left, g10 = t6.top, v10 = t6.right, a10 = t6.gap;
  return o9 === void 0 && (o9 = "margin"), `
  .`.concat(p6, ` {
   overflow: hidden `).concat(n9, `;
   padding-right: `).concat(a10, "px ").concat(n9, `;
  }
  body[`).concat(i9, `] {
    overflow: hidden `).concat(n9, `;
    overscroll-behavior: contain;
    `).concat([r9 && "position: relative ".concat(n9, ";"), o9 === "margin" && `
    padding-left: `.concat(e13, `px;
    padding-top: `).concat(g10, `px;
    padding-right: `).concat(v10, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a10, "px ").concat(n9, `;
    `), o9 === "padding" && "padding-right: ".concat(a10, "px ").concat(n9, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(d4, ` {
    right: `).concat(a10, "px ").concat(n9, `;
  }
  
  .`).concat(l7, ` {
    margin-right: `).concat(a10, "px ").concat(n9, `;
  }
  
  .`).concat(d4, " .").concat(d4, ` {
    right: 0 `).concat(n9, `;
  }
  
  .`).concat(l7, " .").concat(l7, ` {
    margin-right: 0 `).concat(n9, `;
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
  var r9 = t6.noRelative, o9 = t6.noImportant, n9 = t6.gapMode, e13 = n9 === void 0 ? "margin" : n9;
  w4();
  var g10 = c5.useMemo(function() {
    return f8(e13);
  }, [e13]);
  return c5.createElement(y6, { styles: S8(g10, !r9, e13, o9 ? "" : "!important") });
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
var b6 = function(e13, r9) {
  if (!(e13 instanceof Element)) return false;
  var l10 = window.getComputedStyle(e13);
  return l10[r9] !== "hidden" && !(l10.overflowY === l10.overflowX && !N7(e13) && l10[r9] === "visible");
};
var p7 = function(e13) {
  return b6(e13, "overflowY");
};
var D5 = function(e13) {
  return b6(e13, "overflowX");
};
var T5 = function(e13, r9) {
  var l10 = r9.ownerDocument, t6 = r9;
  do {
    typeof ShadowRoot < "u" && t6 instanceof ShadowRoot && (t6 = t6.host);
    var n9 = g8(e13, t6);
    if (n9) {
      var a10 = m8(e13, t6), i12 = a10[1], o9 = a10[2];
      if (i12 > o9) return true;
    }
    t6 = t6.parentNode;
  } while (t6 && t6 !== l10.body);
  return false;
};
var E8 = function(e13) {
  var r9 = e13.scrollTop, l10 = e13.scrollHeight, t6 = e13.clientHeight;
  return [r9, l10, t6];
};
var H4 = function(e13) {
  var r9 = e13.scrollLeft, l10 = e13.scrollWidth, t6 = e13.clientWidth;
  return [r9, l10, t6];
};
var g8 = function(e13, r9) {
  return e13 === "v" ? p7(r9) : D5(r9);
};
var m8 = function(e13, r9) {
  return e13 === "v" ? E8(r9) : H4(r9);
};
var B3 = function(e13, r9) {
  return e13 === "h" && r9 === "rtl" ? -1 : 1;
};
var V5 = function(e13, r9, l10, t6, n9) {
  var a10 = B3(e13, window.getComputedStyle(r9).direction), i12 = a10 * t6, o9 = l10.target, h9 = r9.contains(o9), u7 = false, S9 = i12 > 0, v10 = 0, f11 = 0;
  do {
    if (!o9) break;
    var d5 = m8(e13, o9), s11 = d5[0], C5 = d5[1], y8 = d5[2], w5 = C5 - y8 - a10 * s11;
    (s11 || w5) && g8(e13, o9) && (v10 += w5, f11 += s11);
    var c6 = o9.parentNode;
    o9 = c6 && c6.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? c6.host : c6;
  } while (!h9 && o9 !== document.body || h9 && (r9.contains(o9) || r9 === o9));
  return (S9 && (n9 && Math.abs(v10) < 1 || !n9 && i12 > v10) || !S9 && (n9 && Math.abs(f11) < 1 || !n9 && -i12 > f11)) && (u7 = true), u7;
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
    var l10 = b7(t6), u7 = E10.current, o9 = "deltaX" in t6 ? t6.deltaX : u7[0] - l10[0], i12 = "deltaY" in t6 ? t6.deltaY : u7[1] - l10[1], n9, v10 = t6.target, d5 = Math.abs(o9) > Math.abs(i12) ? "h" : "v";
    if ("touches" in t6 && d5 === "h" && v10.type === "range") return false;
    var P5 = window.getSelection(), C5 = P5 && P5.anchorNode, I8 = C5 ? C5 === v10 || C5.contains(v10) : false;
    if (I8) return false;
    var y8 = T5(d5, v10);
    if (!y8) return true;
    if (y8 ? n9 = d5 : (n9 = d5 === "v" ? "h" : "v", y8 = T5(d5, v10)), !y8) return false;
    if (!m10.current && "changedTouches" in t6 && (o9 || i12) && (m10.current = n9), !n9) return true;
    var Y4 = m10.current || n9;
    return V5(Y4, a10, t6, Y4 === "h" ? o9 : i12, true);
  }, []), S9 = r8.useCallback(function(t6) {
    var a10 = t6;
    if (!(!f9.length || f9[f9.length - 1] !== R5)) {
      var l10 = "deltaY" in a10 ? M2(a10) : b7(a10), u7 = c6.current.filter(function(n9) {
        return n9.name === a10.type && (n9.target === a10.target || a10.target === n9.shadowParent) && K3(n9.delta, l10);
      })[0];
      if (u7 && u7.should) {
        a10.cancelable && a10.preventDefault();
        return;
      }
      if (!u7) {
        var o9 = (g10.current.shards || []).map(X4).filter(Boolean).filter(function(n9) {
          return n9.contains(a10.target);
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
  }, []), L4 = r8.useCallback(function(t6) {
    E10.current = b7(t6), m10.current = void 0;
  }, []), T6 = r8.useCallback(function(t6) {
    w5(t6.type, M2(t6), t6.target, k5(t6, e13.lockRef.current));
  }, []), x8 = r8.useCallback(function(t6) {
    w5(t6.type, b7(t6), t6.target, k5(t6, e13.lockRef.current));
  }, []);
  r8.useEffect(function() {
    return f9.push(R5), e13.setCallbacks({ onScrollCapture: T6, onWheelCapture: T6, onTouchMoveCapture: x8 }), document.addEventListener("wheel", S9, a8), document.addEventListener("touchmove", S9, a8), document.addEventListener("touchstart", L4, a8), function() {
      f9 = f9.filter(function(t6) {
        return t6 !== R5;
      }), document.removeEventListener("wheel", S9, a8), document.removeEventListener("touchmove", S9, a8), document.removeEventListener("touchstart", L4, a8);
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
  let { __scopeDialog: a10, children: r9, open: n9, defaultOpen: t6, onOpenChange: o9, modal: c6 = true } = e13, u7 = i11.useRef(null), O7 = i11.useRef(null), [T6, D6] = D2({ prop: n9, defaultProp: t6 ?? false, onChange: o9, caller: m9 });
  return s10(V6, { scope: a10, triggerRef: u7, contentRef: O7, contentId: n4(), titleId: n4(), descriptionId: n4(), open: T6, onOpenChange: D6, onOpenToggle: i11.useCallback(() => D6((b8) => !b8), [D6]), modal: c6, children: r9 });
};
W5.displayName = m9;
var y7 = "DialogTrigger";
var Y3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r9, ...n9 } = e13, t6 = l9(y7, r9), o9 = s(a10, t6.triggerRef);
  return s10(v2.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": t6.open, "aria-controls": t6.open ? t6.contentId : void 0, "data-state": P4(t6.open), ...n9, ref: o9, onClick: f2(e13.onClick, t6.onOpenToggle) });
});
Y3.displayName = y7;
var _6 = "DialogPortal";
var [Z3, E9] = h8(_6, { forceMount: void 0 });
var q5 = (e13) => {
  let { __scopeDialog: a10, forceMount: r9, children: n9, container: t6 } = e13, o9 = l9(_6, a10);
  return s10(Z3, { scope: a10, forceMount: r9, children: i11.Children.map(n9, (c6) => s10(y2, { present: r9 || o9.open, children: s10(e5, { asChild: true, container: t6, children: c6 }) })) });
};
q5.displayName = _6;
var g9 = "DialogOverlay";
var z5 = i11.forwardRef((e13, a10) => {
  let r9 = E9(g9, e13.__scopeDialog), { forceMount: n9 = r9.forceMount, ...t6 } = e13, o9 = l9(g9, e13.__scopeDialog);
  return o9.modal ? s10(y2, { present: n9 || o9.open, children: s10(J4, { ...t6, ref: a10 }) }) : null;
});
z5.displayName = g9;
var B4 = b("DialogOverlay.RemoveScroll");
var J4 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r9, ...n9 } = e13, t6 = l9(g9, r9), o9 = ne(), c6 = s(a10, o9);
  return s10(l8, { as: B4, allowPinchZoom: true, shards: [t6.contentRef], children: s10(v2.div, { "data-state": P4(t6.open), ...n9, ref: c6, style: { pointerEvents: "auto", ...n9.style } }) });
});
var f10 = "DialogContent";
var Q3 = i11.forwardRef((e13, a10) => {
  let r9 = E9(f10, e13.__scopeDialog), { forceMount: n9 = r9.forceMount, ...t6 } = e13, o9 = l9(f10, e13.__scopeDialog);
  return s10(y2, { present: n9 || o9.open, children: o9.modal ? s10(X5, { ...t6, ref: a10 }) : s10($5, { ...t6, ref: a10 }) });
});
Q3.displayName = f10;
var X5 = i11.forwardRef((e13, a10) => {
  let r9 = l9(f10, e13.__scopeDialog), n9 = i11.useRef(null), t6 = s(a10, r9.contentRef, n9);
  return i11.useEffect(() => {
    let o9 = n9.current;
    if (o9) return S3(o9);
  }, []), s10(I7, { ...e13, ref: t6, trapFocus: r9.open, disableOutsidePointerEvents: r9.open, onCloseAutoFocus: f2(e13.onCloseAutoFocus, (o9) => {
    o9.preventDefault(), r9.triggerRef.current?.focus();
  }), onPointerDownOutside: f2(e13.onPointerDownOutside, (o9) => {
    let c6 = o9.detail.originalEvent, u7 = c6.button === 0 && c6.ctrlKey === true;
    (c6.button === 2 || u7) && o9.preventDefault();
  }), onFocusOutside: f2(e13.onFocusOutside, (o9) => o9.preventDefault()) });
});
var $5 = i11.forwardRef((e13, a10) => {
  let r9 = l9(f10, e13.__scopeDialog), n9 = i11.useRef(false), t6 = i11.useRef(false);
  return s10(I7, { ...e13, ref: a10, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (o9) => {
    e13.onCloseAutoFocus?.(o9), o9.defaultPrevented || (n9.current || r9.triggerRef.current?.focus(), o9.preventDefault()), n9.current = false, t6.current = false;
  }, onInteractOutside: (o9) => {
    e13.onInteractOutside?.(o9), o9.defaultPrevented || (n9.current = true, o9.detail.originalEvent.type === "pointerdown" && (t6.current = true));
    let c6 = o9.target;
    r9.triggerRef.current?.contains(c6) && o9.preventDefault(), o9.detail.originalEvent.type === "focusin" && t6.current && o9.preventDefault();
  } });
});
var I7 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r9, trapFocus: n9, onOpenAutoFocus: t6, onCloseAutoFocus: o9, ...c6 } = e13, u7 = l9(f10, r9);
  return a(), s10(U3, { children: s10(L2, { asChild: true, loop: true, trapped: n9, onMountAutoFocus: t6, onUnmountAutoFocus: o9, children: s10(_2, { role: "dialog", id: u7.contentId, "aria-describedby": u7.descriptionId, "aria-labelledby": u7.titleId, "data-state": P4(u7.open), ...c6, ref: a10, deferPointerDownOutside: true, onDismiss: () => u7.onOpenChange(false) }) }) });
});
var x6 = "DialogTitle";
var ee3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r9, ...n9 } = e13, t6 = l9(x6, r9);
  return s10(v2.h2, { id: t6.titleId, ...n9, ref: a10 });
});
ee3.displayName = x6;
var N8 = "DialogDescription";
var oe3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r9, ...n9 } = e13, t6 = l9(N8, r9);
  return s10(v2.p, { id: t6.descriptionId, ...n9, ref: a10 });
});
oe3.displayName = N8;
var A4 = "DialogClose";
var te3 = i11.forwardRef((e13, a10) => {
  let { __scopeDialog: r9, ...n9 } = e13, t6 = l9(A4, r9);
  return s10(v2.button, { type: "button", ...n9, ref: a10, onClick: f2(e13.onClick, () => t6.onOpenChange(false)) });
});
te3.displayName = A4;
function P4(e13) {
  return e13 ? "open" : "closed";
}

// http-url:https://esm.sh/cmdk@1.1.1/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/cmdk.mjs
import * as n8 from "react";
var se3 = 1;
var Ce3 = 0.9;
var Se2 = 0.8;
var Ie2 = 0.17;
var Z4 = 0.1;
var _7 = 0.999;
var xe2 = 0.9999;
var Re2 = 0.99;
var Ae2 = /[\\\/_+.#"@\[\(\{&]/;
var Me3 = /[\\\/_+.#"@\[\(\{&]/g;
var De2 = /[\s-]/;
var me3 = /[\s-]/g;
function ee4(t6, l10, r9, f11, u7, c6, d5) {
  if (c6 === l10.length) return u7 === t6.length ? se3 : Re2;
  var m10 = `${u7},${c6}`;
  if (d5[m10] !== void 0) return d5[m10];
  for (var b8 = f11.charAt(c6), i12 = r9.indexOf(b8, u7), p8 = 0, h9, S9, E10, I8; i12 >= 0; ) h9 = ee4(t6, l10, r9, f11, i12 + 1, c6 + 1, d5), h9 > p8 && (i12 === u7 ? h9 *= se3 : Ae2.test(t6.charAt(i12 - 1)) ? (h9 *= Se2, E10 = t6.slice(u7, i12 - 1).match(Me3), E10 && u7 > 0 && (h9 *= Math.pow(_7, E10.length))) : De2.test(t6.charAt(i12 - 1)) ? (h9 *= Ce3, I8 = t6.slice(u7, i12 - 1).match(me3), I8 && u7 > 0 && (h9 *= Math.pow(_7, I8.length))) : (h9 *= Ie2, u7 > 0 && (h9 *= Math.pow(_7, i12 - u7))), t6.charAt(i12) !== l10.charAt(c6) && (h9 *= xe2)), (h9 < Z4 && r9.charAt(i12 - 1) === f11.charAt(c6 + 1) || f11.charAt(c6 + 1) === f11.charAt(c6) && r9.charAt(i12 - 1) !== f11.charAt(c6)) && (S9 = ee4(t6, l10, r9, f11, i12 + 1, c6 + 2, d5), S9 * Z4 > h9 && (h9 = S9 * Z4)), h9 > p8 && (p8 = h9), i12 = r9.indexOf(b8, i12 + 1);
  return d5[m10] = p8, p8;
}
function fe3(t6) {
  return t6.toLowerCase().replace(me3, " ");
}
function ve4(t6, l10, r9) {
  return t6 = r9 && r9.length > 0 ? `${t6 + " " + r9.join(" ")}` : t6, ee4(t6, l10, fe3(t6), fe3(l10), 0, 0, {});
}
var V7 = '[cmdk-group=""]';
var te4 = '[cmdk-group-items=""]';
var $e2 = '[cmdk-group-heading=""]';
var he3 = '[cmdk-item=""]';
var pe3 = `${he3}:not([aria-disabled="true"])`;
var re2 = "cmdk-item-select";
var K4 = "data-value";
var Fe2 = (t6, l10, r9) => ve4(t6, l10, r9);
var ge3 = n8.createContext(void 0);
var O6 = () => n8.useContext(ge3);
var be2 = n8.createContext(void 0);
var ne4 = () => n8.useContext(be2);
var we2 = n8.createContext(void 0);
var ye3 = n8.forwardRef((t6, l10) => {
  let r9 = L3(() => {
    var e13, o9;
    return { search: "", value: (o9 = (e13 = t6.value) != null ? e13 : t6.defaultValue) != null ? o9 : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), f11 = L3(() => /* @__PURE__ */ new Set()), u7 = L3(() => /* @__PURE__ */ new Map()), c6 = L3(() => /* @__PURE__ */ new Map()), d5 = L3(() => /* @__PURE__ */ new Set()), m10 = Ee3(t6), { label: b8, children: i12, value: p8, onValueChange: h9, filter: S9, shouldFilter: E10, loop: I8, disablePointerSelection: H6 = false, vimBindings: M3 = true, ...B5 } = t6, U4 = n4(), le3 = n4(), N9 = n4(), D6 = n8.useRef(null), w5 = He2();
  $6(() => {
    if (p8 !== void 0) {
      let e13 = p8.trim();
      r9.current.value = e13, k5.emit();
    }
  }, [p8]), $6(() => {
    w5(6, ue3);
  }, []);
  let k5 = n8.useMemo(() => ({ subscribe: (e13) => (d5.current.add(e13), () => d5.current.delete(e13)), snapshot: () => r9.current, setState: (e13, o9, s11) => {
    var a10, v10, g10, C5;
    if (!Object.is(r9.current[e13], o9)) {
      if (r9.current[e13] = o9, e13 === "search") X6(), W6(), w5(1, J5);
      else if (e13 === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let y8 = document.getElementById(N9);
          y8 ? y8.focus() : (a10 = document.getElementById(U4)) == null || a10.focus();
        }
        if (w5(7, () => {
          var y8;
          r9.current.selectedItemId = (y8 = F2()) == null ? void 0 : y8.id, k5.emit();
        }), s11 || w5(5, ue3), ((v10 = m10.current) == null ? void 0 : v10.value) !== void 0) {
          let y8 = o9 ?? "";
          (C5 = (g10 = m10.current).onValueChange) == null || C5.call(g10, y8);
          return;
        }
      }
      k5.emit();
    }
  }, emit: () => {
    d5.current.forEach((e13) => e13());
  } }), []), T6 = n8.useMemo(() => ({ value: (e13, o9, s11) => {
    var a10;
    o9 !== ((a10 = c6.current.get(e13)) == null ? void 0 : a10.value) && (c6.current.set(e13, { value: o9, keywords: s11 }), r9.current.filtered.items.set(e13, ae3(o9, s11)), w5(2, () => {
      W6(), k5.emit();
    }));
  }, item: (e13, o9) => (f11.current.add(e13), o9 && (u7.current.has(o9) ? u7.current.get(o9).add(e13) : u7.current.set(o9, /* @__PURE__ */ new Set([e13]))), w5(3, () => {
    X6(), W6(), r9.current.value || J5(), k5.emit();
  }), () => {
    c6.current.delete(e13), f11.current.delete(e13), r9.current.filtered.items.delete(e13);
    let s11 = F2();
    w5(4, () => {
      X6(), s11?.getAttribute("id") === e13 && J5(), k5.emit();
    });
  }), group: (e13) => (u7.current.has(e13) || u7.current.set(e13, /* @__PURE__ */ new Set()), () => {
    c6.current.delete(e13), u7.current.delete(e13);
  }), filter: () => m10.current.shouldFilter, label: b8 || t6["aria-label"], getDisablePointerSelection: () => m10.current.disablePointerSelection, listId: U4, inputId: N9, labelId: le3, listInnerRef: D6 }), []);
  function ae3(e13, o9) {
    var s11, a10;
    let v10 = (a10 = (s11 = m10.current) == null ? void 0 : s11.filter) != null ? a10 : Fe2;
    return e13 ? v10(e13, r9.current.search, o9) : 0;
  }
  function W6() {
    if (!r9.current.search || m10.current.shouldFilter === false) return;
    let e13 = r9.current.filtered.items, o9 = [];
    r9.current.filtered.groups.forEach((a10) => {
      let v10 = u7.current.get(a10), g10 = 0;
      v10.forEach((C5) => {
        let y8 = e13.get(C5);
        g10 = Math.max(y8, g10);
      }), o9.push([a10, g10]);
    });
    let s11 = D6.current;
    P5().sort((a10, v10) => {
      var g10, C5;
      let y8 = a10.getAttribute("id"), z6 = v10.getAttribute("id");
      return ((g10 = e13.get(z6)) != null ? g10 : 0) - ((C5 = e13.get(y8)) != null ? C5 : 0);
    }).forEach((a10) => {
      let v10 = a10.closest(te4);
      v10 ? v10.appendChild(a10.parentElement === v10 ? a10 : a10.closest(`${te4} > *`)) : s11.appendChild(a10.parentElement === s11 ? a10 : a10.closest(`${te4} > *`));
    }), o9.sort((a10, v10) => v10[1] - a10[1]).forEach((a10) => {
      var v10;
      let g10 = (v10 = D6.current) == null ? void 0 : v10.querySelector(`${V7}[${K4}="${encodeURIComponent(a10[0])}"]`);
      g10?.parentElement.appendChild(g10);
    });
  }
  function J5() {
    let e13 = P5().find((s11) => s11.getAttribute("aria-disabled") !== "true"), o9 = e13?.getAttribute(K4);
    k5.setState("value", o9 || void 0);
  }
  function X6() {
    var e13, o9, s11, a10;
    if (!r9.current.search || m10.current.shouldFilter === false) {
      r9.current.filtered.count = f11.current.size;
      return;
    }
    r9.current.filtered.groups = /* @__PURE__ */ new Set();
    let v10 = 0;
    for (let g10 of f11.current) {
      let C5 = (o9 = (e13 = c6.current.get(g10)) == null ? void 0 : e13.value) != null ? o9 : "", y8 = (a10 = (s11 = c6.current.get(g10)) == null ? void 0 : s11.keywords) != null ? a10 : [], z6 = ae3(C5, y8);
      r9.current.filtered.items.set(g10, z6), z6 > 0 && v10++;
    }
    for (let [g10, C5] of u7.current) for (let y8 of C5) if (r9.current.filtered.items.get(y8) > 0) {
      r9.current.filtered.groups.add(g10);
      break;
    }
    r9.current.filtered.count = v10;
  }
  function ue3() {
    var e13, o9, s11;
    let a10 = F2();
    a10 && (((e13 = a10.parentElement) == null ? void 0 : e13.firstChild) === a10 && ((s11 = (o9 = a10.closest(V7)) == null ? void 0 : o9.querySelector($e2)) == null || s11.scrollIntoView({ block: "nearest" })), a10.scrollIntoView({ block: "nearest" }));
  }
  function F2() {
    var e13;
    return (e13 = D6.current) == null ? void 0 : e13.querySelector(`${he3}[aria-selected="true"]`);
  }
  function P5() {
    var e13;
    return Array.from(((e13 = D6.current) == null ? void 0 : e13.querySelectorAll(pe3)) || []);
  }
  function Y4(e13) {
    let o9 = P5()[e13];
    o9 && k5.setState("value", o9.getAttribute(K4));
  }
  function Q4(e13) {
    var o9;
    let s11 = F2(), a10 = P5(), v10 = a10.findIndex((C5) => C5 === s11), g10 = a10[v10 + e13];
    (o9 = m10.current) != null && o9.loop && (g10 = v10 + e13 < 0 ? a10[a10.length - 1] : v10 + e13 === a10.length ? a10[0] : a10[v10 + e13]), g10 && k5.setState("value", g10.getAttribute(K4));
  }
  function ie3(e13) {
    let o9 = F2(), s11 = o9?.closest(V7), a10;
    for (; s11 && !a10; ) s11 = e13 > 0 ? ze2(s11, V7) : Ge2(s11, V7), a10 = s11?.querySelector(pe3);
    a10 ? k5.setState("value", a10.getAttribute(K4)) : Q4(e13);
  }
  let oe4 = () => Y4(P5().length - 1), ce3 = (e13) => {
    e13.preventDefault(), e13.metaKey ? oe4() : e13.altKey ? ie3(1) : Q4(1);
  }, de3 = (e13) => {
    e13.preventDefault(), e13.metaKey ? Y4(0) : e13.altKey ? ie3(-1) : Q4(-1);
  };
  return n8.createElement(v2.div, { ref: l10, tabIndex: -1, ...B5, "cmdk-root": "", onKeyDown: (e13) => {
    var o9;
    (o9 = B5.onKeyDown) == null || o9.call(B5, e13);
    let s11 = e13.nativeEvent.isComposing || e13.keyCode === 229;
    if (!(e13.defaultPrevented || s11)) switch (e13.key) {
      case "n":
      case "j": {
        M3 && e13.ctrlKey && ce3(e13);
        break;
      }
      case "ArrowDown": {
        ce3(e13);
        break;
      }
      case "p":
      case "k": {
        M3 && e13.ctrlKey && de3(e13);
        break;
      }
      case "ArrowUp": {
        de3(e13);
        break;
      }
      case "Home": {
        e13.preventDefault(), Y4(0);
        break;
      }
      case "End": {
        e13.preventDefault(), oe4();
        break;
      }
      case "Enter": {
        e13.preventDefault();
        let a10 = F2();
        if (a10) {
          let v10 = new Event(re2);
          a10.dispatchEvent(v10);
        }
      }
    }
  } }, n8.createElement("label", { "cmdk-label": "", htmlFor: T6.inputId, id: T6.labelId, style: Ne2 }, b8), G4(t6, (e13) => n8.createElement(be2.Provider, { value: k5 }, n8.createElement(ge3.Provider, { value: T6 }, e13))));
});
var Ke2 = n8.forwardRef((t6, l10) => {
  var r9, f11;
  let u7 = n4(), c6 = n8.useRef(null), d5 = n8.useContext(we2), m10 = O6(), b8 = Ee3(t6), i12 = (f11 = (r9 = b8.current) == null ? void 0 : r9.forceMount) != null ? f11 : d5?.forceMount;
  $6(() => {
    if (!i12) return m10.item(u7, d5?.id);
  }, [i12]);
  let p8 = ke2(u7, c6, [t6.value, t6.children, c6], t6.keywords), h9 = ne4(), S9 = x7((w5) => w5.value && w5.value === p8.current), E10 = x7((w5) => i12 || m10.filter() === false ? true : w5.search ? w5.filtered.items.get(u7) > 0 : true);
  n8.useEffect(() => {
    let w5 = c6.current;
    if (!(!w5 || t6.disabled)) return w5.addEventListener(re2, I8), () => w5.removeEventListener(re2, I8);
  }, [E10, t6.onSelect, t6.disabled]);
  function I8() {
    var w5, k5;
    H6(), (k5 = (w5 = b8.current).onSelect) == null || k5.call(w5, p8.current);
  }
  function H6() {
    h9.setState("value", p8.current, true);
  }
  if (!E10) return null;
  let { disabled: M3, value: B5, onSelect: U4, forceMount: le3, keywords: N9, ...D6 } = t6;
  return n8.createElement(v2.div, { ref: i(c6, l10), ...D6, id: u7, "cmdk-item": "", role: "option", "aria-disabled": !!M3, "aria-selected": !!S9, "data-disabled": !!M3, "data-selected": !!S9, onPointerMove: M3 || m10.getDisablePointerSelection() ? void 0 : H6, onClick: M3 ? void 0 : I8 }, t6.children);
});
var Le2 = n8.forwardRef((t6, l10) => {
  let { heading: r9, children: f11, forceMount: u7, ...c6 } = t6, d5 = n4(), m10 = n8.useRef(null), b8 = n8.useRef(null), i12 = n4(), p8 = O6(), h9 = x7((E10) => u7 || p8.filter() === false ? true : E10.search ? E10.filtered.groups.has(d5) : true);
  $6(() => p8.group(d5), []), ke2(d5, m10, [t6.value, t6.heading, b8]);
  let S9 = n8.useMemo(() => ({ id: d5, forceMount: u7 }), [u7]);
  return n8.createElement(v2.div, { ref: i(m10, l10), ...c6, "cmdk-group": "", role: "presentation", hidden: h9 ? void 0 : true }, r9 && n8.createElement("div", { ref: b8, "cmdk-group-heading": "", "aria-hidden": true, id: i12 }, r9), G4(t6, (E10) => n8.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r9 ? i12 : void 0 }, n8.createElement(we2.Provider, { value: S9 }, E10))));
});
var qe2 = n8.forwardRef((t6, l10) => {
  let { alwaysRender: r9, ...f11 } = t6, u7 = n8.useRef(null), c6 = x7((d5) => !d5.search);
  return !r9 && !c6 ? null : n8.createElement(v2.div, { ref: i(u7, l10), ...f11, "cmdk-separator": "", role: "separator" });
});
var Pe3 = n8.forwardRef((t6, l10) => {
  let { onValueChange: r9, ...f11 } = t6, u7 = t6.value != null, c6 = ne4(), d5 = x7((i12) => i12.search), m10 = x7((i12) => i12.selectedItemId), b8 = O6();
  return n8.useEffect(() => {
    t6.value != null && c6.setState("search", t6.value);
  }, [t6.value]), n8.createElement(v2.input, { ref: l10, ...f11, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": b8.listId, "aria-labelledby": b8.labelId, "aria-activedescendant": m10, id: b8.inputId, type: "text", value: u7 ? t6.value : d5, onChange: (i12) => {
    u7 || c6.setState("search", i12.target.value), r9?.(i12.target.value);
  } });
});
var Ve2 = n8.forwardRef((t6, l10) => {
  let { children: r9, label: f11 = "Suggestions", ...u7 } = t6, c6 = n8.useRef(null), d5 = n8.useRef(null), m10 = x7((i12) => i12.selectedItemId), b8 = O6();
  return n8.useEffect(() => {
    if (d5.current && c6.current) {
      let i12 = d5.current, p8 = c6.current, h9, S9 = new ResizeObserver(() => {
        h9 = requestAnimationFrame(() => {
          let E10 = i12.offsetHeight;
          p8.style.setProperty("--cmdk-list-height", E10.toFixed(1) + "px");
        });
      });
      return S9.observe(i12), () => {
        cancelAnimationFrame(h9), S9.unobserve(i12);
      };
    }
  }, []), n8.createElement(v2.div, { ref: i(c6, l10), ...u7, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": m10, "aria-label": f11, id: b8.listId }, G4(t6, (i12) => n8.createElement("div", { ref: i(d5, b8.listInnerRef), "cmdk-list-sizer": "" }, i12)));
});
var je3 = n8.forwardRef((t6, l10) => {
  let { open: r9, onOpenChange: f11, overlayClassName: u7, contentClassName: c6, container: d5, ...m10 } = t6;
  return n8.createElement(W5, { open: r9, onOpenChange: f11 }, n8.createElement(q5, { container: d5 }, n8.createElement(z5, { "cmdk-overlay": "", className: u7 }), n8.createElement(Q3, { "aria-label": t6.label, "cmdk-dialog": "", className: c6 }, n8.createElement(ye3, { ref: l10, ...m10 }))));
});
var Oe3 = n8.forwardRef((t6, l10) => x7((r9) => r9.filtered.count === 0) ? n8.createElement(v2.div, { ref: l10, ...t6, "cmdk-empty": "", role: "presentation" }) : null);
var Be2 = n8.forwardRef((t6, l10) => {
  let { progress: r9, children: f11, label: u7 = "Loading...", ...c6 } = t6;
  return n8.createElement(v2.div, { ref: l10, ...c6, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r9, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": u7 }, G4(t6, (d5) => n8.createElement("div", { "aria-hidden": true }, d5)));
});
var Qe2 = Object.assign(ye3, { List: Ve2, Item: Ke2, Input: Pe3, Group: Le2, Separator: qe2, Dialog: je3, Empty: Oe3, Loading: Be2 });
function ze2(t6, l10) {
  let r9 = t6.nextElementSibling;
  for (; r9; ) {
    if (r9.matches(l10)) return r9;
    r9 = r9.nextElementSibling;
  }
}
function Ge2(t6, l10) {
  let r9 = t6.previousElementSibling;
  for (; r9; ) {
    if (r9.matches(l10)) return r9;
    r9 = r9.previousElementSibling;
  }
}
function Ee3(t6) {
  let l10 = n8.useRef(t6);
  return $6(() => {
    l10.current = t6;
  }), l10;
}
var $6 = typeof window > "u" ? n8.useEffect : n8.useLayoutEffect;
function L3(t6) {
  let l10 = n8.useRef();
  return l10.current === void 0 && (l10.current = t6()), l10;
}
function x7(t6) {
  let l10 = ne4(), r9 = () => t6(l10.snapshot());
  return n8.useSyncExternalStore(l10.subscribe, r9, r9);
}
function ke2(t6, l10, r9, f11 = []) {
  let u7 = n8.useRef(), c6 = O6();
  return $6(() => {
    var d5;
    let m10 = (() => {
      var i12;
      for (let p8 of r9) {
        if (typeof p8 == "string") return p8.trim();
        if (typeof p8 == "object" && "current" in p8) return p8.current ? (i12 = p8.current.textContent) == null ? void 0 : i12.trim() : u7.current;
      }
    })(), b8 = f11.map((i12) => i12.trim());
    c6.value(t6, m10, b8), (d5 = l10.current) == null || d5.setAttribute(K4, m10), u7.current = m10;
  }), u7;
}
var He2 = () => {
  let [t6, l10] = n8.useState(), r9 = L3(() => /* @__PURE__ */ new Map());
  return $6(() => {
    r9.current.forEach((f11) => f11()), r9.current = /* @__PURE__ */ new Map();
  }, [t6]), (f11, u7) => {
    r9.current.set(f11, u7), l10({});
  };
};
function Ue2(t6) {
  let l10 = t6.type;
  return typeof l10 == "function" ? l10(t6.props) : "render" in l10 ? l10.render(t6.props) : t6;
}
function G4({ asChild: t6, children: l10 }, r9) {
  return t6 && n8.isValidElement(l10) ? n8.cloneElement(Ue2(l10), { ref: l10.ref }, r9(l10.props.children)) : r9(l10);
}
var Ne2 = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/command.tsx
import { SearchIcon } from "lucide-react";

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/dialog.tsx
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/button.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/dialog.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx2(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx2(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx2(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx2(XIcon, {}),
                /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/command.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    Qe2,
    {
      "data-slot": "command",
      className: cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(Dialog, { ...props, children: [
    /* @__PURE__ */ jsxs2(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsx3(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx3(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx3(
      DialogContent,
      {
        className: cn("overflow-hidden p-0", className),
        showCloseButton,
        children: /* @__PURE__ */ jsx3(Command, { className: "**:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children })
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx3(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx3(
          Qe2.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    Qe2.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    Qe2.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    Qe2.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    Qe2.Separator,
    {
      "data-slot": "command-separator",
      className: cn("-mx-1 h-px bg-border", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    Qe2.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
};
