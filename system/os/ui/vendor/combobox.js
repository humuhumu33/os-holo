"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to4, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to4, key) && key !== except)
        __defProp(to4, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to4;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/combobox.tsx
import * as React from "react";

// http-url:https://esm.sh/@base-ui/react?target=es2022&external=react,react-dom,react%2Fjsx-runtime,react-dom%2Fclient,react%2Fjsx-dev-runtime,radix-ui,lucide-react,class-variance-authority,clsx,tailwind-merge
var react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports = {};

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/accordion.mjs
import * as S6 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useControlled.mjs
import * as e from "react";
function m({ controlled: t48, default: r49, name: c40, state: f35 = "value" }) {
  let { current: n61 } = e.useRef(t48 !== void 0), [s54, i38] = e.useState(r49), l19 = n61 ? t48 : s54, a38 = e.useCallback((o62) => {
    n61 || i38(o62);
  }, []);
  return [l19, a38];
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useStableCallback.mjs
import * as s from "react";
import * as o from "react";
var r = { ...s };
var a = {};
function f(e58, t48) {
  let n61 = o.useRef(a);
  return n61.current === a && (n61.current = e58(t48)), n61;
}
var c = r.useInsertionEffect;
var i = c && c !== r.useLayoutEffect ? c : (e58) => e58();
function E(e58) {
  let t48 = f(l).current;
  return t48.next = e58, i(t48.effect), t48.trampoline;
}
function l() {
  let e58 = { next: void 0, callback: u, trampoline: (...t48) => e58.callback?.(...t48), effect: () => {
    e58.callback = e58.next;
  } };
  return e58;
}
function u() {
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useIsoLayoutEffect.mjs
import * as e2 from "react";
var t = () => {
};
var o2 = typeof document < "u" ? e2.useLayoutEffect : t;

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/list/CompositeList.mjs
import * as c2 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useRefWithInit.mjs
import * as r2 from "react";
var t2 = {};
function u2(n61, c40) {
  let e58 = r2.useRef(t2);
  return e58.current === t2 && (e58.current = n61(c40)), e58;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/list/CompositeListContext.mjs
import * as e3 from "react";
var t3 = e3.createContext({ register: () => {
}, unregister: () => {
}, subscribeMapChange: () => () => {
}, elementsRef: { current: [] }, nextIndexRef: { current: 0 } });
function o3() {
  return e3.useContext(t3);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/list/CompositeList.mjs
import { jsx as D } from "react/jsx-runtime";
function k(h24) {
  let { children: N20, elementsRef: t48, labelsRef: o62, onMapChange: T17 } = h24, E30 = E(T17), O14 = c2.useRef(0), l19 = u2(P).current, a38 = u2(L).current, [u37, M20] = c2.useState(0), i38 = c2.useRef(u37), C18 = E((e58, f35) => {
    a38.set(e58, f35 ?? null), i38.current += 1, M20(i38.current);
  }), I26 = E((e58) => {
    a38.delete(e58), i38.current += 1, M20(i38.current);
  }), r49 = c2.useMemo(() => {
    let e58 = /* @__PURE__ */ new Map();
    return Array.from(a38.keys()).filter((n61) => n61.isConnected).sort(S).forEach((n61, p31) => {
      let s54 = a38.get(n61) ?? {};
      e58.set(n61, { ...s54, index: p31 });
    }), e58;
  }, [a38, u37]);
  o2(() => {
    if (typeof MutationObserver != "function" || r49.size === 0) return;
    let e58 = new MutationObserver((f35) => {
      let n61 = /* @__PURE__ */ new Set(), p31 = (s54) => n61.has(s54) ? n61.delete(s54) : n61.add(s54);
      f35.forEach((s54) => {
        s54.removedNodes.forEach(p31), s54.addedNodes.forEach(p31);
      }), n61.size === 0 && (i38.current += 1, M20(i38.current));
    });
    return r49.forEach((f35, n61) => {
      n61.parentElement && e58.observe(n61.parentElement, { childList: true });
    }), () => {
      e58.disconnect();
    };
  }, [r49]), o2(() => {
    i38.current === u37 && (t48.current.length !== r49.size && (t48.current.length = r49.size), o62 && o62.current.length !== r49.size && (o62.current.length = r49.size), O14.current = r49.size), E30(r49);
  }, [E30, r49, t48, o62, u37]), o2(() => () => {
    t48.current = [];
  }, [t48]), o2(() => () => {
    o62 && (o62.current = []);
  }, [o62]);
  let g20 = E((e58) => (l19.add(e58), () => {
    l19.delete(e58);
  }));
  o2(() => {
    l19.forEach((e58) => e58(r49));
  }, [l19, r49]);
  let _19 = c2.useMemo(() => ({ register: C18, unregister: I26, subscribeMapChange: g20, elementsRef: t48, labelsRef: o62, nextIndexRef: O14 }), [C18, I26, g20, t48, o62, O14]);
  return D(t3.Provider, { value: _19, children: N20 });
}
function L() {
  return /* @__PURE__ */ new Map();
}
function P() {
  return /* @__PURE__ */ new Set();
}
function S(h24, N20) {
  let t48 = h24.compareDocumentPosition(N20);
  return t48 & Node.DOCUMENT_POSITION_FOLLOWING || t48 & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : t48 & Node.DOCUMENT_POSITION_PRECEDING || t48 & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/direction-context/DirectionContext.mjs
import * as t4 from "react";
var e4 = t4.createContext(void 0);
function o4() {
  return t4.useContext(e4)?.direction ?? "ltr";
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/formatErrorMessage.mjs
function n(t48, a38) {
  return function(e58, ...o62) {
    let r49 = new URL(t48);
    return r49.searchParams.set("code", e58.toString()), o62.forEach((s54) => r49.searchParams.append("args[]", s54)), `${a38} error #${e58}; visit ${r49} for the full message.`;
  };
}
var c3 = n("https://base-ui.com/production-error", "Base UI");
var f2 = c3;

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/accordion.mjs
import * as H4 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useRenderElement.mjs
import * as a5 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useMergedRefs.mjs
import * as o5 from "react";
var i2 = {};
function a2(n61, e58) {
  let t48 = o5.useRef(i2);
  return t48.current === i2 && (t48.current = n61(e58)), t48;
}
function d(n61, e58, t48, c40) {
  let l19 = a2(f3).current;
  return p(l19, n61, e58, t48, c40) && s2(l19, [n61, e58, t48, c40]), l19.callback;
}
function y(n61) {
  let e58 = a2(f3).current;
  return b(e58, n61) && s2(e58, n61), e58.callback;
}
function f3() {
  return { callback: null, cleanup: null, refs: [] };
}
function p(n61, e58, t48, c40, l19) {
  return n61.refs[0] !== e58 || n61.refs[1] !== t48 || n61.refs[2] !== c40 || n61.refs[3] !== l19;
}
function b(n61, e58) {
  return n61.refs.length !== e58.length || n61.refs.some((t48, c40) => t48 !== e58[c40]);
}
function s2(n61, e58) {
  if (n61.refs = e58, e58.every((t48) => t48 == null)) {
    n61.callback = null;
    return;
  }
  n61.callback = (t48) => {
    if (n61.cleanup && (n61.cleanup(), n61.cleanup = null), t48 != null) {
      let c40 = Array(e58.length).fill(null);
      for (let l19 = 0; l19 < e58.length; l19 += 1) {
        let u37 = e58[l19];
        if (u37 != null) switch (typeof u37) {
          case "function": {
            let r49 = u37(t48);
            typeof r49 == "function" && (c40[l19] = r49);
            break;
          }
          case "object": {
            u37.current = t48;
            break;
          }
          default:
        }
      }
      n61.cleanup = () => {
        for (let l19 = 0; l19 < e58.length; l19 += 1) {
          let u37 = e58[l19];
          if (u37 != null) switch (typeof u37) {
            case "function": {
              let r49 = c40[l19];
              typeof r49 == "function" ? r49() : u37(null);
              break;
            }
            case "object": {
              u37.current = null;
              break;
            }
            default:
          }
        }
      };
    }
  };
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/getReactElementRef.mjs
import * as n2 from "react";
import * as r3 from "react";
var a3 = parseInt(r3.version, 10);
function o6(t48) {
  return a3 >= t48;
}
function f4(t48) {
  if (!n2.isValidElement(t48)) return null;
  let e58 = t48, s54 = e58.props;
  return (o6(19) ? s54?.ref : e58.ref) ?? null;
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/mergeObjects.mjs
function n3(e58, r49) {
  if (e58 && !r49) return e58;
  if (!e58 && r49) return r49;
  if (e58 || r49) return { ...e58, ...r49 };
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/empty.mjs
function e5() {
}
var t5 = Object.freeze([]);
var o7 = Object.freeze({});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/getStateAttributesProps.mjs
function i3(r49, n61) {
  let o62 = {};
  for (let t48 in r49) {
    let e58 = r49[t48];
    if (n61?.hasOwnProperty(t48)) {
      let s54 = n61[t48](e58);
      s54 != null && Object.assign(o62, s54);
      continue;
    }
    e58 === true ? o62[`data-${t48.toLowerCase()}`] = "" : e58 && (o62[`data-${t48.toLowerCase()}`] = e58.toString());
  }
  return o62;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/resolveStyle.mjs
function e6(n61, o62) {
  return typeof n61 == "function" ? n61(o62) : n61;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/merge-props.mjs
var u3 = {};
function d2(t48, n61, e58, r49, c40) {
  if (!e58 && !r49 && !c40 && !t48) return o8(n61);
  let f35 = o8(t48);
  return n61 && (f35 = i4(f35, n61)), e58 && (f35 = i4(f35, e58)), r49 && (f35 = i4(f35, r49)), c40 && (f35 = i4(f35, c40)), f35;
}
function j(t48) {
  if (t48.length === 0) return u3;
  if (t48.length === 1) return o8(t48[0]);
  let n61 = o8(t48[0]);
  for (let e58 = 1; e58 < t48.length; e58 += 1) n61 = i4(n61, t48[e58]);
  return n61;
}
function o8(t48) {
  return l2(t48) ? { ...s3(t48, u3) } : m2(t48);
}
function i4(t48, n61) {
  return l2(n61) ? s3(n61, t48) : x(t48, n61);
}
function m2(t48) {
  let n61 = { ...t48 };
  for (let e58 in n61) {
    let r49 = n61[e58];
    a4(e58, r49) && (n61[e58] = v(r49));
  }
  return n61;
}
function x(t48, n61) {
  if (!n61) return t48;
  for (let e58 in n61) {
    let r49 = n61[e58];
    switch (e58) {
      case "style": {
        t48[e58] = n3(t48.style, r49);
        break;
      }
      case "className": {
        t48[e58] = A(t48.className, r49);
        break;
      }
      default:
        a4(e58, r49) ? t48[e58] = U(t48[e58], r49) : t48[e58] = r49;
    }
  }
  return t48;
}
function a4(t48, n61) {
  let e58 = t48.charCodeAt(0), r49 = t48.charCodeAt(1), c40 = t48.charCodeAt(2);
  return e58 === 111 && r49 === 110 && c40 >= 65 && c40 <= 90 && (typeof n61 == "function" || typeof n61 > "u");
}
function l2(t48) {
  return typeof t48 == "function";
}
function s3(t48, n61) {
  return l2(t48) ? t48(n61) : t48 ?? u3;
}
function U(t48, n61) {
  return n61 ? t48 ? (...e58) => {
    let r49 = e58[0];
    if (I(r49)) {
      let f35 = r49;
      E2(f35);
      let b14 = n61(...e58);
      return f35.baseUIHandlerPrevented || t48?.(...e58), b14;
    }
    let c40 = n61(...e58);
    return t48?.(...e58), c40;
  } : v(n61) : t48;
}
function v(t48) {
  return t48 && ((...n61) => {
    let e58 = n61[0];
    return I(e58) && E2(e58), t48(...n61);
  });
}
function E2(t48) {
  return t48.preventBaseUIHandler = () => {
    t48.baseUIHandlerPrevented = true;
  }, t48;
}
function A(t48, n61) {
  return n61 ? t48 ? n61 + " " + t48 : n61 : t48;
}
function I(t48) {
  return t48 != null && typeof t48 == "object" && "nativeEvent" in t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useRenderElement.mjs
import { createElement as h } from "react";
function p2(e58, r49) {
  return typeof e58 == "function" ? e58(r49) : e58;
}
function J(e58, r49, t48 = {}) {
  let f35 = r49.render, s54 = k2(r49, t48);
  if (t48.enabled === false) return null;
  let n61 = t48.state ?? o7;
  return L2(e58, f35, s54, n61);
}
function k2(e58, r49 = {}) {
  let { className: t48, style: f35, render: s54 } = e58, { state: n61 = o7, ref: c40, props: u37, stateAttributesMapping: N20, enabled: i38 = true } = r49, d31 = i38 ? p2(t48, n61) : void 0, m25 = i38 ? e6(f35, n61) : void 0, A17 = i38 ? i3(n61, N20) : o7, v17 = i38 && u37 ? I2(u37) : void 0, o62 = i38 ? n3(A17, v17) ?? {} : o7;
  return typeof document < "u" && (i38 ? Array.isArray(c40) ? o62.ref = y([o62.ref, f4(s54), ...c40]) : o62.ref = d(o62.ref, f4(s54), c40) : d(null, null)), i38 ? (d31 !== void 0 && (o62.className = A(o62.className, d31)), m25 !== void 0 && (o62.style = n3(o62.style, m25)), o62) : o7;
}
function I2(e58) {
  return Array.isArray(e58) ? j(e58) : d2(void 0, e58);
}
var O = Symbol.for("react.lazy");
function L2(e58, r49, t48, f35) {
  if (r49) {
    if (typeof r49 == "function") return r49(t48, f35);
    let s54 = d2(t48, r49.props);
    s54.ref = t48.ref;
    let n61 = r49;
    return n61?.$$typeof === O && (n61 = a5.Children.toArray(r49)[0]), a5.cloneElement(n61, s54);
  }
  if (e58 && typeof e58 == "string") return M(e58, t48);
  throw new Error(f2(8));
}
function M(e58, r49) {
  return e58 === "button" ? h("button", { type: "button", ...r49, key: r49.key }) : e58 === "img" ? h("img", { alt: "", ...r49, key: r49.key }) : a5.createElement(e58, r49);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/createBaseUIEventDetails.mjs
function u4(e58, t48, n61, a38) {
  let o62 = false, r49 = false, i38 = a38 ?? o7;
  return { reason: e58, event: t48 ?? new Event("base-ui"), cancel() {
    o62 = true;
  }, allowPropagation() {
    r49 = true;
  }, get isCanceled() {
    return o62;
  }, get isPropagationAllowed() {
    return r49;
  }, trigger: n61, ...i38 };
}
function d3(e58, t48, n61) {
  let a38 = n61 ?? o7;
  return { reason: e58, event: t48 ?? new Event("base-ui"), ...a38 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/reasons.mjs
var r4 = Object.defineProperty;
var n5 = (o62, e58) => {
  for (var t48 in e58) r4(o62, t48, { get: e58[t48], enumerable: true });
};
var s4 = {};
n5(s4, { cancelOpen: () => F, chipRemovePress: () => m3, clearPress: () => d4, closePress: () => g, closeWatcher: () => z, decrementPress: () => h2, disabled: () => K, drag: () => S2, escapeKey: () => R, focusOut: () => O2, imperativeAction: () => q, incrementPress: () => b2, initial: () => j2, inputBlur: () => k3, inputChange: () => w, inputClear: () => v2, inputPaste: () => f5, inputPress: () => y2, itemPress: () => l3, keyboard: () => C, linkPress: () => u5, listNavigation: () => A2, missing: () => W, none: () => p3, outsidePress: () => a6, pointer: () => N, scrub: () => E3, siblingOpen: () => H, swipe: () => D2, trackPress: () => P2, triggerFocus: () => x2, triggerHover: () => i5, triggerPress: () => c4, wheel: () => B, windowResize: () => G });
var p3 = "none";
var c4 = "trigger-press";
var i5 = "trigger-hover";
var x2 = "trigger-focus";
var a6 = "outside-press";
var l3 = "item-press";
var g = "close-press";
var u5 = "link-press";
var d4 = "clear-press";
var m3 = "chip-remove-press";
var P2 = "track-press";
var b2 = "increment-press";
var h2 = "decrement-press";
var w = "input-change";
var v2 = "input-clear";
var k3 = "input-blur";
var f5 = "input-paste";
var y2 = "input-press";
var O2 = "focus-out";
var R = "escape-key";
var z = "close-watcher";
var A2 = "list-navigation";
var C = "keyboard";
var N = "pointer";
var S2 = "drag";
var B = "wheel";
var E3 = "scrub";
var F = "cancel-open";
var H = "sibling-open";
var K = "disabled";
var W = "missing";
var j2 = "initial";
var q = "imperative-action";
var D2 = "swipe";
var G = "window-resize";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/accordion.mjs
import { jsx as $ } from "react/jsx-runtime";
import * as x6 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useId.mjs
import * as c5 from "react";
import * as l4 from "react";
var o9 = { ...l4 };
var n6 = 0;
function d5(a38, t48 = "mui") {
  let [e58, s54] = c5.useState(a38), f35 = a38 || e58;
  return c5.useEffect(() => {
    e58 == null && (n6 += 1, s54(`${t48}-${n6}`));
  }, [e58, t48]), f35;
}
var u6 = o9.useId;
function I3(a38, t48) {
  if (u6 !== void 0) {
    let e58 = u6();
    return a38 ?? (t48 ? `${t48}-${e58}` : e58);
  }
  return d5(a38, t48);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useBaseUiId.mjs
function r5(e58) {
  return I3(e58, "base-ui");
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/collapsible/root/useCollapsibleRoot.mjs
import * as t6 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useTransitionStatus.mjs
import * as a8 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useAnimationFrame.mjs
import * as o10 from "react";
import * as d6 from "react";
var l5 = {};
function h3(s54, t48) {
  let e58 = o10.useRef(l5);
  return e58.current === l5 && (e58.current = s54(t48)), e58;
}
var I4 = [];
function f6(s54) {
  d6.useEffect(s54, I4);
}
var c6 = null;
var A3 = globalThis.requestAnimationFrame;
var i6 = class {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (t48) => {
    this.isScheduled = false;
    let e58 = this.callbacks, u37 = this.callbacksCount;
    if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, u37 > 0) for (let r49 = 0; r49 < e58.length; r49 += 1) e58[r49]?.(t48);
  };
  request(t48) {
    let e58 = this.nextId;
    return this.nextId += 1, this.callbacks.push(t48), this.callbacksCount += 1, !this.isScheduled && (requestAnimationFrame(this.tick), this.isScheduled = true), e58;
  }
  cancel(t48) {
    let e58 = t48 - this.startId;
    e58 < 0 || e58 >= this.callbacks.length || (this.callbacks[e58] = null, this.callbacksCount -= 1);
  }
};
var n7 = new i6();
var a7 = class s5 {
  static create() {
    return new s5();
  }
  static request(t48) {
    return n7.request(t48);
  }
  static cancel(t48) {
    return n7.cancel(t48);
  }
  currentId = c6;
  request(t48) {
    this.cancel(), this.currentId = n7.request(() => {
      this.currentId = c6, t48();
    });
  }
  cancel = () => {
    this.currentId !== c6 && (n7.cancel(this.currentId), this.currentId = c6);
  };
  disposeEffect = () => this.cancel;
};
function R2() {
  let s54 = h3(a7.create).current;
  return f6(s54.disposeEffect), s54;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useTransitionStatus.mjs
function g2(t48, e58 = false, f35 = false) {
  let [n61, r49] = a8.useState(t48 && e58 ? "idle" : void 0), [i38, d31] = a8.useState(t48);
  return t48 && !i38 && (d31(true), r49("starting")), !t48 && i38 && n61 !== "ending" && !f35 && r49("ending"), !t48 && !i38 && n61 === "ending" && r49(void 0), o2(() => {
    if (!t48 && i38 && n61 !== "ending" && f35) {
      let s54 = a7.request(() => {
        r49("ending");
      });
      return () => {
        a7.cancel(s54);
      };
    }
  }, [t48, i38, n61, f35]), o2(() => {
    if (!t48 || e58) return;
    let s54 = a7.request(() => {
      r49(void 0);
    });
    return () => {
      a7.cancel(s54);
    };
  }, [e58, t48]), o2(() => {
    if (!t48 || !e58) return;
    t48 && i38 && n61 !== "idle" && r49("starting");
    let s54 = a7.request(() => {
      r49("idle");
    });
    return () => {
      a7.cancel(s54);
    };
  }, [e58, t48, i38, n61]), { mounted: i38, setMounted: d31, transitionStatus: n61 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/collapsible/root/useCollapsibleRoot.mjs
function A4(m25) {
  let { open: d31, defaultOpen: f35, onOpenChange: S18, disabled: o62 } = m25, [e58, n61] = m({ controlled: d31, default: f35, name: "Collapsible", state: "open" }), { mounted: a38, setMounted: s54, transitionStatus: r49 } = g2(e58, true, true), C18 = r5(), [g20, l19] = t6.useState(), i38 = g20 ?? C18, p31 = E((b14) => {
    let u37 = !e58, c40 = u4(s4.triggerPress, b14.nativeEvent);
    S18(u37, c40), !c40.isCanceled && n61(u37);
  });
  return t6.useMemo(() => ({ disabled: o62, handleTrigger: p31, mounted: a38, open: e58, panelId: i38, setMounted: s54, setOpen: n61, setPanelIdState: l19, transitionStatus: r49 }), [o62, p31, a38, e58, i38, s54, n61, l19, r49]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/collapsible/root/CollapsibleRootContext.mjs
import * as o11 from "react";
var s6 = o11.createContext(void 0);
function l6() {
  let e58 = o11.useContext(s6);
  if (e58 === void 0) throw new Error(f2(15));
  return e58;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/list/useCompositeListItem.mjs
import * as t7 from "react";
var I5 = function(n61) {
  return n61[n61.None = 0] = "None", n61[n61.GuessFromOrder = 1] = "GuessFromOrder", n61;
}({});
function N2(n61 = {}) {
  let { label: o62, metadata: l19, textRef: a38, indexGuessBehavior: L20, index: u37 } = n61, { register: d31, unregister: m25, subscribeMapChange: x21, elementsRef: R27, labelsRef: i38, nextIndexRef: p31 } = o3(), f35 = t7.useRef(-1), [r49, C18] = t7.useState(u37 ?? (L20 === I5.GuessFromOrder ? () => {
    if (f35.current === -1) {
      let e58 = p31.current;
      p31.current += 1, f35.current = e58;
    }
    return f35.current;
  } : -1)), c40 = t7.useRef(null), b14 = t7.useCallback((e58) => {
    if (c40.current = e58, r49 !== -1 && e58 !== null && (R27.current[r49] = e58, i38)) {
      let s54 = o62 !== void 0;
      i38.current[r49] = s54 ? o62 : a38?.current?.textContent ?? e58.textContent;
    }
  }, [r49, R27, i38, o62, a38]);
  return o2(() => {
    if (u37 != null) return;
    let e58 = c40.current;
    if (e58) return d31(e58, l19), () => {
      m25(e58);
    };
  }, [u37, d31, m25, l19]), o2(() => {
    if (u37 == null) return x21((e58) => {
      let s54 = c40.current ? e58.get(c40.current)?.index : null;
      s54 != null && C18(s54);
    });
  }, [u37, x21, C18]), t7.useMemo(() => ({ ref: b14, index: r49 }), [r49, b14]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/accordion.mjs
import * as L6 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/stateAttributesMapping.mjs
var n8 = function(t48) {
  return t48.startingStyle = "data-starting-style", t48.endingStyle = "data-ending-style", t48;
}({});
var e7 = { [n8.startingStyle]: "" };
var r6 = { [n8.endingStyle]: "" };
var i7 = { transitionStatus(t48) {
  return t48 === "starting" ? e7 : t48 === "ending" ? r6 : null;
} };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/collapsible/panel/CollapsiblePanelDataAttributes.mjs
var g3 = function(n61) {
  return n61.open = "data-open", n61.closed = "data-closed", n61[n61.startingStyle = n8.startingStyle] = "startingStyle", n61[n61.endingStyle = n8.endingStyle] = "endingStyle", n61;
}({});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/collapsibleOpenStateMapping.mjs
var t8 = function(e58) {
  return e58.panelOpen = "data-panel-open", e58;
}({});
var p4 = { [g3.open]: "" };
var r7 = { [g3.closed]: "" };
var i8 = { open(e58) {
  return e58 ? { [t8.panelOpen]: "" } : null;
} };
var s7 = { open(e58) {
  return e58 ? p4 : r7;
} };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/accordion.mjs
import { jsx as J2 } from "react/jsx-runtime";
import * as X from "react";
import * as oe2 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/isElementDisabled.mjs
function i9(t48) {
  return t48 == null || t48.hasAttribute("disabled") || t48.getAttribute("aria-disabled") === "true";
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/use-button/useButton.mjs
import * as i11 from "react";

// http-url:https://esm.sh/@floating-ui/utils@0.2.11/es2022/dom.mjs
function u7() {
  return typeof window < "u";
}
function a9(t48) {
  return m4(t48) ? (t48.nodeName || "").toLowerCase() : "#document";
}
function i10(t48) {
  var n61;
  return (t48 == null || (n61 = t48.ownerDocument) == null ? void 0 : n61.defaultView) || window;
}
function L3(t48) {
  var n61;
  return (n61 = (m4(t48) ? t48.ownerDocument : t48.document) || window.document) == null ? void 0 : n61.documentElement;
}
function m4(t48) {
  return u7() ? t48 instanceof Node || t48 instanceof i10(t48).Node : false;
}
function h4(t48) {
  return u7() ? t48 instanceof Element || t48 instanceof i10(t48).Element : false;
}
function g4(t48) {
  return u7() ? t48 instanceof HTMLElement || t48 instanceof i10(t48).HTMLElement : false;
}
function p5(t48) {
  return !u7() || typeof ShadowRoot > "u" ? false : t48 instanceof ShadowRoot || t48 instanceof i10(t48).ShadowRoot;
}
function y3(t48) {
  let { overflow: n61, overflowX: r49, overflowY: c40, display: e58 } = b3(t48);
  return /auto|scroll|overlay|hidden|clip/.test(n61 + c40 + r49) && e58 !== "inline" && e58 !== "contents";
}
var s8;
function R3() {
  return s8 == null && (s8 = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), s8;
}
function N3(t48) {
  return /^(html|body|#document)$/.test(a9(t48));
}
function b3(t48) {
  return i10(t48).getComputedStyle(t48);
}
function f7(t48) {
  if (a9(t48) === "html") return t48;
  let n61 = t48.assignedSlot || t48.parentNode || p5(t48) && t48.host || L3(t48);
  return p5(n61) ? n61.host : n61;
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/safeReact.mjs
import * as t9 from "react";
var a10 = { ...t9 };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/root/CompositeRootContext.mjs
import * as o12 from "react";
var n9 = o12.createContext(void 0);
function r8(e58 = false) {
  let t48 = o12.useContext(n9);
  if (t48 === void 0 && !e58) throw new Error(f2(16));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useFocusableWhenDisabled.mjs
import * as c7 from "react";
function f8(d31) {
  let { focusableWhenDisabled: e58, disabled: s54, composite: t48 = false, tabIndex: i38 = 0, isNativeButton: o62 } = d31, n61 = t48 && e58 !== false, l19 = t48 && e58 === false;
  return { props: c7.useMemo(() => {
    let a38 = { onKeyDown(b14) {
      s54 && e58 && b14.key !== "Tab" && b14.preventDefault();
    } };
    return t48 || (a38.tabIndex = i38, !o62 && s54 && (a38.tabIndex = e58 ? i38 : -1)), (o62 && (e58 || n61) || !o62 && s54) && (a38["aria-disabled"] = s54), o62 && (!e58 || l19) && (a38.disabled = s54), a38;
  }, [t48, s54, e58, n61, l19, o62, i38]) };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/use-button/useButton.mjs
function Q(r49 = {}) {
  let { disabled: n61 = false, focusableWhenDisabled: R27, tabIndex: y24 = 0, native: t48 = true, composite: x21 } = r49, m25 = i11.useRef(null), T17 = r8(true), a38 = x21 ?? T17 !== void 0, { props: u37 } = f8({ focusableWhenDisabled: R27, disabled: n61, composite: a38, tabIndex: y24, isNativeButton: t48 }), l19 = i11.useCallback(() => {
    let o62 = m25.current;
    d7(o62) && a38 && n61 && u37.disabled === void 0 && o62.disabled && (o62.disabled = false);
  }, [n61, u37.disabled, a38]);
  o2(l19, [l19]);
  let C18 = i11.useCallback((o62 = {}) => {
    let { onClick: s54, onMouseDown: f35, onKeyUp: P17, onKeyDown: S18, onPointerDown: U11, ...N20 } = o62;
    return d2({ onClick(e58) {
      if (n61) {
        e58.preventDefault();
        return;
      }
      s54?.(e58);
    }, onMouseDown(e58) {
      n61 || f35?.(e58);
    }, onKeyDown(e58) {
      if (n61 || (E2(e58), S18?.(e58), e58.baseUIHandlerPrevented)) return;
      let b14 = e58.target === e58.currentTarget, c40 = e58.currentTarget, g20 = d7(c40), k17 = !t48 && W2(c40), h24 = b14 && (t48 ? g20 : !k17), B17 = e58.key === "Enter", D14 = e58.key === " ", p31 = c40.getAttribute("role"), O14 = p31?.startsWith("menuitem") || p31 === "option" || p31 === "gridcell";
      if (b14 && a38 && D14) {
        if (e58.defaultPrevented && O14) return;
        e58.preventDefault(), k17 || t48 && g20 ? (c40.click(), e58.preventBaseUIHandler()) : h24 && (s54?.(e58), e58.preventBaseUIHandler());
        return;
      }
      h24 && (!t48 && (D14 || B17) && e58.preventDefault(), !t48 && B17 && s54?.(e58));
    }, onKeyUp(e58) {
      if (!n61) {
        if (E2(e58), P17?.(e58), e58.target === e58.currentTarget && t48 && a38 && d7(e58.currentTarget) && e58.key === " ") {
          e58.preventDefault();
          return;
        }
        e58.baseUIHandlerPrevented || e58.target === e58.currentTarget && !t48 && !a38 && e58.key === " " && s54?.(e58);
      }
    }, onPointerDown(e58) {
      if (n61) {
        e58.preventDefault();
        return;
      }
      U11?.(e58);
    } }, t48 ? { type: "button" } : { role: "button" }, u37, N20);
  }, [n61, u37, a38, t48]), E30 = E((o62) => {
    m25.current = o62, l19();
  });
  return { getButtonProps: C18, buttonRef: E30 };
}
function d7(r49) {
  return g4(r49) && r49.tagName === "BUTTON";
}
function W2(r49) {
  return !!(r49?.tagName === "A" && r49?.href);
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/detectBrowser.mjs
var o13 = typeof navigator < "u";
var r9 = s9();
var n10 = f9();
var a11 = u8();
var c8 = typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none");
var p6 = r9.platform === "MacIntel" && r9.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(r9.platform);
var g5 = o13 && /firefox/i.test(a11);
var m5 = o13 && /apple/i.test(navigator.vendor);
var d8 = o13 && /Edg/i.test(a11);
var l7 = o13 && /android/i.test(n10) || /android/i.test(a11);
var x3 = o13 && n10.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
var v3 = a11.includes("jsdom/");
function s9() {
  if (!o13) return { platform: "", maxTouchPoints: -1 };
  let t48 = navigator.userAgentData;
  return t48?.platform ? { platform: t48.platform, maxTouchPoints: navigator.maxTouchPoints } : { platform: navigator.platform ?? "", maxTouchPoints: navigator.maxTouchPoints ?? -1 };
}
function u8() {
  if (!o13) return "";
  let t48 = navigator.userAgentData;
  return t48 && Array.isArray(t48.brands) ? t48.brands.map(({ brand: e58, version: i38 }) => `${e58}/${i38}`).join(" ") : navigator.userAgent;
}
function f9() {
  if (!o13) return "";
  let t48 = navigator.userAgentData;
  return t48?.platform ? t48.platform : navigator.platform ?? "";
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/constants.mjs
var t10 = "data-base-ui-focusable";
var n11 = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
var r10 = "ArrowLeft";
var s10 = "ArrowRight";
var c9 = "ArrowUp";
var E4 = "ArrowDown";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/shadowDom.mjs
function a12(t48) {
  let e58 = t48.activeElement;
  for (; e58?.shadowRoot?.activeElement != null; ) e58 = e58.shadowRoot.activeElement;
  return e58;
}
function u9(t48, e58) {
  if (!t48 || !e58) return false;
  let n61 = e58.getRootNode?.();
  if (t48.contains(e58)) return true;
  if (n61 && p5(n61)) {
    let o62 = e58;
    for (; o62; ) {
      if (t48 === o62) return true;
      o62 = o62.parentNode || o62.host;
    }
  }
  return false;
}
function f10(t48) {
  return "composedPath" in t48 ? t48.composedPath()[0] : t48.target;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/element.mjs
function d9(t48, r49) {
  if (!h4(t48)) return false;
  let e58 = t48;
  if (r49.hasElement(e58)) return !e58.hasAttribute("data-trigger-disabled");
  for (let [, i38] of r49.entries()) if (u9(i38, e58)) return !i38.hasAttribute("data-trigger-disabled");
  return false;
}
function g6(t48, r49) {
  if (r49 == null) return false;
  if ("composedPath" in t48) return t48.composedPath().includes(r49);
  let e58 = t48;
  return e58.target != null && r49.contains(e58.target);
}
function E5(t48) {
  return t48.matches("html,body");
}
function f11(t48) {
  return g4(t48) && t48.matches(n11);
}
function T(t48) {
  return t48?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${n11}`) != null;
}
function A5(t48) {
  return t48 ? t48.getAttribute("role") === "combobox" && f11(t48) : false;
}
function y4(t48) {
  if (!t48 || v3) return true;
  try {
    return t48.matches(":focus-visible");
  } catch {
    return true;
  }
}
function F2(t48) {
  return t48 ? t48.hasAttribute(t10) ? t48 : t48.querySelector(`[${t10}]`) || t48 : null;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/nodes.mjs
function o14(r49, c40, t48 = true) {
  return r49.filter((e58) => e58.parentId === c40).flatMap((e58) => [...!t48 || e58.context?.open ? [e58] : [], ...o14(r49, e58.id, t48)]);
}
function u10(r49, c40) {
  let t48 = [], n61 = r49.find((e58) => e58.id === c40)?.parentId;
  for (; n61; ) {
    let e58 = r49.find((i38) => i38.id === n61);
    n61 = e58?.parentId, e58 && (t48 = t48.concat(e58));
  }
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/event.mjs
function p7(i38) {
  i38.preventDefault(), i38.stopPropagation();
}
function n12(i38) {
  return "nativeEvent" in i38;
}
function s11(i38) {
  return i38.pointerType === "" && i38.isTrusted ? true : l7 && i38.pointerType ? i38.type === "click" && i38.buttons === 1 : i38.detail === 0 && !i38.pointerType;
}
function c10(i38) {
  return v3 ? false : !l7 && i38.width === 0 && i38.height === 0 || l7 && i38.width === 1 && i38.height === 1 && i38.pressure === 0 && i38.detail === 0 && i38.pointerType === "mouse" || i38.width < 1 && i38.height < 1 && i38.pressure === 0 && i38.detail === 0 && i38.pointerType === "touch";
}
function d10(i38, t48) {
  let o62 = ["mouse", "pen"];
  return t48 || o62.push("", void 0), o62.includes(i38);
}
function f12(i38) {
  let t48 = i38.type;
  return t48 === "click" || t48 === "mousedown" || t48 === "keydown" || t48 === "keyup";
}

// http-url:https://esm.sh/@floating-ui/utils@0.2.11/es2022/utils.mjs
var h5 = ["top", "right", "bottom", "left"];
var f13 = ["start", "end"];
var C2 = h5.reduce((t48, n61) => t48.concat(n61, n61 + "-" + f13[0], n61 + "-" + f13[1]), []);
var p8 = Math.min;
var x4 = Math.max;
var j3 = Math.round;
var L4 = Math.floor;
var E6 = (t48) => ({ x: t48, y: t48 });
function R4(t48, n61, e58) {
  return x4(t48, p8(n61, e58));
}
function T2(t48, n61) {
  return typeof t48 == "function" ? t48(n61) : t48;
}
function g7(t48) {
  return t48.split("-")[0];
}
function m6(t48) {
  return t48.split("-")[1];
}
function d11(t48) {
  return t48 === "x" ? "y" : "x";
}
function A6(t48) {
  return t48 === "y" ? "height" : "width";
}
function P3(t48) {
  let n61 = t48[0];
  return n61 === "t" || n61 === "b" ? "y" : "x";
}
function y5(t48) {
  return d11(P3(t48));
}
function w2(t48) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t48 };
}
function B2(t48) {
  return typeof t48 != "number" ? w2(t48) : { top: t48, right: t48, bottom: t48, left: t48 };
}
function D3(t48) {
  let { x: n61, y: e58, width: r49, height: i38 } = t48;
  return { width: r49, height: i38, top: e58, left: n61, right: n61 + r49, bottom: e58 + i38, x: n61, y: e58 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/composite.mjs
function W3(t48, i38, c40) {
  return Math.floor(t48 / i38) !== c40;
}
function j4(t48, i38) {
  return i38 < 0 || i38 >= t48.length;
}
function I6(t48, i38) {
  return C3(t48.current, { disabledIndices: i38 });
}
function v4(t48, i38) {
  return C3(t48.current, { decrement: true, startingIndex: t48.current.length, disabledIndices: i38 });
}
function C3(t48, { startingIndex: i38 = -1, decrement: c40 = false, disabledIndices: a38, amount: n61 = 1 } = {}) {
  let o62 = i38;
  do
    o62 += c40 ? -n61 : n61;
  while (o62 >= 0 && o62 <= t48.length - 1 && B3(t48, o62, a38));
  return o62;
}
function tt(t48, { event: i38, orientation: c40, loopFocus: a38, onLoop: n61, rtl: o62, cols: e58, disabledIndices: w22, minIndex: G18, maxIndex: g20, prevIndex: r49, stopEvent: D14 = false }) {
  let f35 = r49, E30;
  if (i38.key === c9 ? E30 = "up" : i38.key === E4 && (E30 = "down"), E30) {
    let l19 = [], V12 = [], H16 = false, P17 = 0;
    {
      let R27 = null, u37 = -1;
      t48.forEach((y24, M20) => {
        if (y24 == null) return;
        P17 += 1;
        let s54 = y24.closest('[role="row"]');
        s54 && (H16 = true), (s54 !== R27 || u37 === -1) && (R27 = s54, u37 += 1, l19[u37] = []), l19[u37].push(M20), V12[M20] = u37;
      });
    }
    let N20 = false, S18 = 0;
    if (H16) for (let R27 of l19) {
      let u37 = R27.length;
      u37 > S18 && (S18 = u37), u37 !== e58 && (N20 = true);
    }
    let T17 = N20 && P17 < t48.length, h24 = S18 || e58, $9 = (R27) => {
      if (!N20 || r49 === -1) return;
      let u37 = V12[r49];
      if (u37 == null) return;
      let y24 = l19[u37].indexOf(r49), M20 = R27 === "up" ? -1 : 1;
      for (let s54 = u37 + M20, m25 = 0; m25 < l19.length; m25 += 1, s54 += M20) {
        if (s54 < 0 || s54 >= l19.length) {
          if (!a38 || T17) return;
          if (s54 = s54 < 0 ? l19.length - 1 : 0, n61) {
            let k17 = Math.min(y24, l19[s54].length - 1), O14 = l19[s54][k17] ?? l19[s54][0], J18 = n61(i38, r49, O14);
            s54 = V12[J18] ?? s54;
          }
        }
        let A17 = l19[s54];
        for (let k17 = Math.min(y24, A17.length - 1); k17 >= 0; k17 -= 1) {
          let O14 = A17[k17];
          if (!B3(t48, O14, w22)) return O14;
        }
      }
    }, q15 = (R27) => {
      if (!T17 || r49 === -1) return;
      let u37 = r49 % h24, y24 = R27 === "up" ? -h24 : h24, M20 = g20 - g20 % h24, s54 = L4(g20 / h24) + 1;
      for (let m25 = r49 - u37 + y24, A17 = 0; A17 < s54; A17 += 1, m25 += y24) {
        if (m25 < 0 || m25 > g20) {
          if (!a38) return;
          m25 = m25 < 0 ? M20 : 0;
        }
        let k17 = Math.min(m25 + h24 - 1, g20);
        for (let O14 = Math.min(m25 + u37, k17); O14 >= m25; O14 -= 1) if (!B3(t48, O14, w22)) return O14;
      }
    };
    D14 && p7(i38);
    let U11 = $9(E30) ?? q15(E30);
    if (U11 !== void 0) f35 = U11;
    else if (r49 === -1) f35 = E30 === "up" ? g20 : G18;
    else if (f35 = C3(t48, { startingIndex: r49, amount: h24, decrement: E30 === "up", disabledIndices: w22 }), a38) {
      if (E30 === "up" && (r49 - h24 < G18 || f35 < 0)) {
        let R27 = r49 % h24, u37 = g20 % h24, y24 = g20 - (u37 - R27);
        u37 === R27 ? f35 = g20 : f35 = u37 > R27 ? y24 : y24 - h24, n61 && (f35 = n61(i38, r49, f35));
      }
      E30 === "down" && r49 + h24 > g20 && (f35 = C3(t48, { startingIndex: r49 % h24 - h24, amount: h24, disabledIndices: w22 }), n61 && (f35 = n61(i38, r49, f35)));
    }
    j4(t48, f35) && (f35 = r49);
  }
  if (c40 === "both") {
    let l19 = L4(r49 / e58);
    i38.key === (o62 ? r10 : s10) && (D14 && p7(i38), r49 % e58 !== e58 - 1 ? (f35 = C3(t48, { startingIndex: r49, disabledIndices: w22 }), a38 && W3(f35, e58, l19) && (f35 = C3(t48, { startingIndex: r49 - r49 % e58 - 1, disabledIndices: w22 }), n61 && (f35 = n61(i38, r49, f35)))) : a38 && (f35 = C3(t48, { startingIndex: r49 - r49 % e58 - 1, disabledIndices: w22 }), n61 && (f35 = n61(i38, r49, f35))), W3(f35, e58, l19) && (f35 = r49)), i38.key === (o62 ? s10 : r10) && (D14 && p7(i38), r49 % e58 !== 0 ? (f35 = C3(t48, { startingIndex: r49, decrement: true, disabledIndices: w22 }), a38 && W3(f35, e58, l19) && (f35 = C3(t48, { startingIndex: r49 + (e58 - r49 % e58), decrement: true, disabledIndices: w22 }), n61 && (f35 = n61(i38, r49, f35)))) : a38 && (f35 = C3(t48, { startingIndex: r49 + (e58 - r49 % e58), decrement: true, disabledIndices: w22 }), n61 && (f35 = n61(i38, r49, f35))), W3(f35, e58, l19) && (f35 = r49));
    let V12 = L4(g20 / e58) === l19;
    j4(t48, f35) && (a38 && V12 ? (f35 = i38.key === (o62 ? s10 : r10) ? g20 : C3(t48, { startingIndex: r49 - r49 % e58 - 1, disabledIndices: w22 }), n61 && (f35 = n61(i38, r49, f35))) : f35 = r49);
  }
  return f35;
}
function rt(t48, i38, c40) {
  let a38 = [], n61 = 0;
  return t48.forEach(({ width: o62, height: e58 }, w22) => {
    o62 > i38;
    let G18 = false;
    for (c40 && (n61 = 0); !G18; ) {
      let g20 = [];
      for (let r49 = 0; r49 < o62; r49 += 1) for (let D14 = 0; D14 < e58; D14 += 1) g20.push(n61 + r49 + D14 * i38);
      n61 % i38 + o62 <= i38 && g20.every((r49) => a38[r49] == null) ? (g20.forEach((r49) => {
        a38[r49] = w22;
      }), G18 = true) : n61 += 1;
    }
  }), [...a38];
}
function it(t48, i38, c40, a38, n61) {
  if (t48 === -1) return -1;
  let o62 = c40.indexOf(t48), e58 = i38[t48];
  switch (n61) {
    case "tl":
      return o62;
    case "tr":
      return e58 ? o62 + e58.width - 1 : o62;
    case "bl":
      return e58 ? o62 + (e58.height - 1) * a38 : o62;
    case "br":
      return c40.lastIndexOf(t48);
    default:
      return -1;
  }
}
function ft(t48, i38) {
  return i38.flatMap((c40, a38) => t48.includes(c40) ? [a38] : []);
}
function B3(t48, i38, c40) {
  if (typeof c40 == "function" ? c40(i38) : c40?.includes(i38) ?? false) return true;
  let n61 = t48[i38];
  return n61 ? Z(n61) ? !c40 && (n61.hasAttribute("disabled") || n61.getAttribute("aria-disabled") === "true") : true : false;
}
function Y(t48) {
  return t48.visibility === "hidden" || t48.visibility === "collapse";
}
function Z(t48, i38 = t48 ? b3(t48) : null) {
  return !t48 || !t48.isConnected || !i38 || Y(i38) ? false : typeof t48.checkVisibility == "function" ? t48.checkVisibility() : i38.display !== "none" && i38.display !== "contents";
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/owner.mjs
function n13(o62) {
  return o62?.ownerDocument || document;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/tabbable.mjs
var R5 = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function S3(t48) {
  let n61 = t48.assignedSlot;
  if (n61) return n61;
  if (t48.parentElement) return t48.parentElement;
  let e58 = t48.getRootNode();
  return p5(e58) ? e58.host : null;
}
function c11(t48) {
  for (let n61 of Array.from(t48.children)) if (a9(n61) === "summary") return n61;
  return null;
}
function v5(t48, n61) {
  let e58 = c11(n61);
  return !!e58 && (t48 === e58 || u9(e58, t48));
}
function l8(t48) {
  let n61 = t48 ? a9(t48) : "";
  return t48 != null && t48.matches(R5) && (n61 !== "summary" || t48.parentElement != null && a9(t48.parentElement) === "details" && c11(t48.parentElement) === t48) && (n61 !== "details" || c11(t48) == null) && (n61 !== "input" || t48.type !== "hidden");
}
function p9(t48) {
  if (!l8(t48) || !t48.isConnected || t48.matches(":disabled")) return false;
  for (let n61 = t48; n61; n61 = S3(n61)) {
    let e58 = n61 !== t48, r49 = a9(n61) === "slot";
    if (n61.hasAttribute("inert") || e58 && a9(n61) === "details" && !n61.open && !v5(t48, n61) || n61.hasAttribute("hidden") || !r49 && !D4(n61, e58)) return false;
  }
  return true;
}
function D4(t48, n61) {
  let e58 = b3(t48);
  return n61 ? e58.display !== "none" : Z(t48, e58);
}
function x5(t48) {
  let n61 = t48.tabIndex;
  if (n61 < 0) {
    let e58 = a9(t48);
    if (e58 === "details" || e58 === "audio" || e58 === "video" || g4(t48) && t48.isContentEditable) return 0;
  }
  return n61;
}
function d12(t48) {
  if (a9(t48) !== "input") return null;
  let n61 = t48;
  return n61.type === "radio" && n61.name !== "" ? n61 : null;
}
function O3(t48, n61) {
  let e58 = d12(t48);
  if (!e58) return true;
  let r49 = n61.find((i38) => {
    let o62 = d12(i38);
    return o62?.name === e58.name && o62.form === e58.form && o62.checked;
  });
  return r49 ? r49 === e58 : n61.find((i38) => {
    let o62 = d12(i38);
    return o62?.name === e58.name && o62.form === e58.form;
  }) === e58;
}
function m7(t48) {
  if (g4(t48) && a9(t48) === "slot") {
    let n61 = t48.assignedElements({ flatten: true });
    if (n61.length > 0) return n61;
  }
  return g4(t48) && t48.shadowRoot ? Array.from(t48.shadowRoot.children) : Array.from(t48.children);
}
function g8(t48, n61) {
  m7(t48).forEach((e58) => {
    l8(e58) && n61.push(e58), g8(e58, n61);
  });
}
function h6(t48, n61, e58) {
  m7(t48).forEach((r49) => {
    g4(r49) && r49.matches(n61) && e58.push(r49), h6(r49, n61, e58);
  });
}
function P4(t48) {
  return p9(t48) && x5(t48) >= 0;
}
function w3(t48) {
  let n61 = [];
  return g8(t48, n61), n61.filter(p9);
}
function f14(t48) {
  let n61 = w3(t48);
  return n61.filter((e58) => x5(e58) >= 0 && O3(e58, n61));
}
function E7(t48, n61) {
  let e58 = f14(t48), r49 = e58.length;
  if (r49 === 0) return;
  let i38 = a12(n13(t48)), o62 = e58.indexOf(i38), T17 = o62 === -1 ? n61 === 1 ? 0 : r49 - 1 : o62 + n61;
  return e58[T17];
}
function V(t48) {
  return E7(n13(t48).body, 1) || t48;
}
function j5(t48) {
  return E7(n13(t48).body, -1) || t48;
}
function y6(t48, n61) {
  if (!t48) return null;
  let e58 = f14(n13(t48).body), r49 = e58.length;
  if (r49 === 0) return null;
  let i38 = e58.indexOf(t48);
  if (i38 === -1) return null;
  let o62 = (i38 + n61 + r49) % r49;
  return e58[o62];
}
function B4(t48) {
  return y6(t48, 1);
}
function H2(t48) {
  return y6(t48, -1);
}
function W4(t48, n61) {
  let e58 = n61 || t48.currentTarget, r49 = t48.relatedTarget;
  return !r49 || !u9(e58, r49);
}
function _(t48) {
  f14(t48).forEach((e58) => {
    e58.dataset.tabindex = e58.getAttribute("tabindex") || "", e58.setAttribute("tabindex", "-1");
  });
}
function q2(t48) {
  let n61 = [];
  h6(t48, "[data-tabindex]", n61), n61.forEach((e58) => {
    let r49 = e58.dataset.tabindex;
    delete e58.dataset.tabindex, r49 ? e58.setAttribute("tabindex", r49) : e58.removeAttribute("tabindex");
  });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/composite.mjs
var h7 = "ArrowUp";
var R6 = "ArrowDown";
var T3 = "ArrowLeft";
var L5 = "ArrowRight";
var n14 = "Home";
var d13 = "End";
var w4 = "PageUp";
var H3 = "PageDown";
var M2 = /* @__PURE__ */ new Set([T3, L5]);
var N4 = /* @__PURE__ */ new Set([T3, L5, n14, d13]);
var E8 = /* @__PURE__ */ new Set([h7, R6]);
var F3 = /* @__PURE__ */ new Set([h7, R6, n14, d13]);
var S4 = /* @__PURE__ */ new Set([...M2, ...E8]);
var Y2 = /* @__PURE__ */ new Set([...S4, n14, d13]);
var O4 = "Shift";
var I7 = "Control";
var u11 = "Alt";
var A7 = "Meta";
var B5 = /* @__PURE__ */ new Set([O4, I7, u11, A7]);
function W5(t48) {
  return g4(t48) && t48.tagName === "INPUT";
}
function K2(t48) {
  return !!(W5(t48) && t48.selectionStart != null || g4(t48) && t48.tagName === "TEXTAREA");
}
function D5(t48, o62, l19, f35) {
  if (!t48 || !o62 || !o62.scrollTo) return;
  let i38 = t48.scrollLeft, g20 = t48.scrollTop, P17 = t48.clientWidth < t48.scrollWidth, x21 = t48.clientHeight < t48.scrollHeight;
  if (P17 && f35 !== "vertical") {
    let s54 = a13(t48, o62, "left"), e58 = c12(t48), r49 = c12(o62);
    l19 === "ltr" && (s54 + o62.offsetWidth + r49.scrollMarginRight > t48.scrollLeft + t48.clientWidth - e58.scrollPaddingRight ? i38 = s54 + o62.offsetWidth + r49.scrollMarginRight - t48.clientWidth + e58.scrollPaddingRight : s54 - r49.scrollMarginLeft < t48.scrollLeft + e58.scrollPaddingLeft && (i38 = s54 - r49.scrollMarginLeft - e58.scrollPaddingLeft)), l19 === "rtl" && (s54 - r49.scrollMarginRight < t48.scrollLeft + e58.scrollPaddingLeft ? i38 = s54 - r49.scrollMarginLeft - e58.scrollPaddingLeft : s54 + o62.offsetWidth + r49.scrollMarginRight > t48.scrollLeft + t48.clientWidth - e58.scrollPaddingRight && (i38 = s54 + o62.offsetWidth + r49.scrollMarginRight - t48.clientWidth + e58.scrollPaddingRight));
  }
  if (x21 && f35 !== "horizontal") {
    let s54 = a13(t48, o62, "top"), e58 = c12(t48), r49 = c12(o62);
    s54 - r49.scrollMarginTop < t48.scrollTop + e58.scrollPaddingTop ? g20 = s54 - r49.scrollMarginTop - e58.scrollPaddingTop : s54 + o62.offsetHeight + r49.scrollMarginBottom > t48.scrollTop + t48.clientHeight - e58.scrollPaddingBottom && (g20 = s54 + o62.offsetHeight + r49.scrollMarginBottom - t48.clientHeight + e58.scrollPaddingBottom);
  }
  t48.scrollTo({ left: i38, top: g20, behavior: "auto" });
}
function a13(t48, o62, l19) {
  let f35 = l19 === "left" ? "offsetLeft" : "offsetTop", i38 = 0;
  for (; o62.offsetParent && (i38 += o62[f35], o62.offsetParent !== t48); ) o62 = o62.offsetParent;
  return i38;
}
function c12(t48) {
  let o62 = getComputedStyle(t48);
  return { scrollMarginTop: parseFloat(o62.scrollMarginTop) || 0, scrollMarginRight: parseFloat(o62.scrollMarginRight) || 0, scrollMarginBottom: parseFloat(o62.scrollMarginBottom) || 0, scrollMarginLeft: parseFloat(o62.scrollMarginLeft) || 0, scrollPaddingTop: parseFloat(o62.scrollPaddingTop) || 0, scrollPaddingRight: parseFloat(o62.scrollPaddingRight) || 0, scrollPaddingBottom: parseFloat(o62.scrollPaddingBottom) || 0, scrollPaddingLeft: parseFloat(o62.scrollPaddingLeft) || 0 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/accordion.mjs
import * as ne from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/collapsible/panel/useCollapsiblePanel.mjs
import * as s13 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/addEventListener.mjs
function t11(e58, n61, r49, d31) {
  return e58.addEventListener(n61, r49, d31), () => {
    e58.removeEventListener(n61, r49, d31);
  };
}

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useValueAsRef.mjs
import * as o15 from "react";
import * as f15 from "react";
var s12 = () => {
};
var r11 = typeof document < "u" ? o15.useLayoutEffect : s12;
var c13 = {};
function u12(e58, t48) {
  let n61 = f15.useRef(c13);
  return n61.current === c13 && (n61.current = e58(t48)), n61;
}
function I8(e58) {
  let t48 = u12(i12, e58).current;
  return t48.next = e58, r11(t48.effect), t48;
}
function i12(e58) {
  let t48 = { current: e58, next: e58, effect: () => {
    t48.current = t48.next;
  } };
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useOpenChangeComplete.mjs
import * as a14 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useAnimationsFinished.mjs
import * as c14 from "react-dom";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/resolveRef.mjs
function n15(r49) {
  return r49 == null ? r49 : "current" in r49 ? r49.current : r49;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useAnimationsFinished.mjs
function y7(f35, m25 = false, l19 = true) {
  let o62 = R2();
  return E((s54, n61 = null) => {
    o62.cancel();
    let a38 = n15(f35);
    if (a38 == null) return;
    let e58 = a38, u37 = () => {
      c14.flushSync(s54);
    };
    if (typeof e58.getAnimations != "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      s54();
      return;
    }
    function i38() {
      Promise.all(e58.getAnimations().map((t48) => t48.finished)).then(() => {
        n61?.aborted || u37();
      }).catch(() => {
        if (l19) {
          n61?.aborted || u37();
          return;
        }
        let t48 = e58.getAnimations();
        !n61?.aborted && t48.length > 0 && t48.some((r49) => r49.pending || r49.playState !== "finished") && i38();
      });
    }
    if (m25) {
      let t48 = n8.startingStyle;
      if (!e58.hasAttribute(t48)) {
        o62.request(i38);
        return;
      }
      let r49 = new MutationObserver(() => {
        e58.hasAttribute(t48) || (r49.disconnect(), i38());
      });
      r49.observe(e58, { attributes: true, attributeFilter: [t48] }), n61?.addEventListener("abort", () => r49.disconnect(), { once: true });
      return;
    }
    o62.request(i38);
  });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useOpenChangeComplete.mjs
function p10(i38) {
  let { enabled: e58 = true, open: n61, ref: s54, onComplete: l19 } = i38, o62 = E(l19), t48 = y7(s54, n61, false);
  a14.useEffect(() => {
    if (!e58) return;
    let r49 = new AbortController();
    return t48(o62, r49.signal), () => {
      r49.abort();
    };
  }, [e58, n61, o62, t48]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/collapsible/panel/useCollapsiblePanel.mjs
var g9 = { height: void 0, width: void 0 };
function be(n61) {
  let { externalRef: i38, hiddenUntilFound: a38, id: f35, keepMounted: u37, mounted: t48, onOpenChange: q15, open: o62, setMounted: p31, setOpen: z17, transitionStatus: l19 } = n61, m25 = s13.useRef(null), A17 = s13.useRef(null), [w22, Y18] = s13.useState(g9), T17 = s13.useRef(g9), v17 = s13.useRef(false), M20 = s13.useRef(o62), F14 = s13.useRef(false), [I26, P17] = s13.useState(false), h24 = s13.useRef(null), Z17 = d(i38, m25), B17 = I8({ mounted: t48, open: o62 }), H16 = y7(m25, false, false), b14 = !o62 && !t48, C18 = I26 ? "idle" : l19, L20 = o62 && (M20.current || F14.current), U11 = !o62 && t48 && A17.current === "css-animation" && w22.height === void 0 && w22.width === void 0 ? T17.current : w22, G18 = a38 && b14 && A17.current !== "css-animation", c40 = E((e58, r49 = true) => {
    r49 && (T17.current = e58), Y18(e58);
  }), R27 = E(() => {
    h24.current?.(), h24.current = null;
  }), j17 = E((e58) => {
    R27(), h24.current = () => {
      h24.current = null, e58();
    };
  }), W14 = E(() => {
    o62 && t48 && A17.current === "css-animation" && (F14.current = true);
  });
  o2(() => {
    !I26 || l19 === "starting" || P17(false);
  }, [I26, l19]), s13.useEffect(() => () => {
    W14(), R27();
  }, [W14, R27]), o2(() => {
    let e58 = m25.current;
    if (!e58) return;
    !o62 && h24.current && R27();
    let r49 = oe(e58, L20);
    if (A17.current = r49, o62 && l19 === "idle" && M20.current && r49 === "css-animation") {
      T17.current = y8(e58);
      return;
    }
    if (o62 && l19 === "starting") {
      let k17 = v17.current;
      if (v17.current = false, r49 === "none") {
        c40(y8(e58)), P17(true);
        return;
      }
      if (r49 === "css-transition") {
        let D14 = se(e58);
        if (c40(y8(e58)), !k17) return D14;
        let x21 = S5(e58, "transition-duration", "0s");
        return j17(x21), P17(true), D14;
      }
      if (r49 === "css-animation") {
        if (c40(y8(e58)), !k17) {
          S5(e58, "animation-name", "none")();
          return;
        }
        let D14 = S5(e58, "animation-name", "none"), x21 = S5(e58, "animation-duration", "0s");
        D14(), j17(x21), P17(true);
        return;
      }
    }
    if (!o62 && t48 && (l19 === "idle" || l19 === "starting")) {
      if (r49 === "none") {
        c40(g9, false), p31(false);
        return;
      }
      r49 === "css-animation" && (M20.current = false, F14.current = false), c40(y8(e58));
      return;
    }
    if (l19 !== "ending") return;
    if (r49 === "none") {
      p31(false);
      return;
    }
    let d31 = y8(e58);
    if (!((d31.height ?? 0) > 0 || (d31.width ?? 0) > 0)) {
      p31(false);
      return;
    }
    c40(d31), r49 === "css-animation" && S5(e58, "animation-name", "none")();
  }, [t48, o62, R27, c40, p31, j17, L20, l19]), p10({ enabled: o62 && t48 && C18 === "idle", open: true, ref: m25, onComplete() {
    o62 && c40(g9, false);
  } }), s13.useEffect(() => {
    if (o62 || !t48 || C18 !== "ending" || !m25.current) return;
    let r49 = new AbortController(), d31 = -1;
    function N20() {
      B17.current.open || (p31(false), c40(g9, false));
    }
    return d31 = a7.request(() => {
      r49.signal.aborted || H16(N20, r49.signal);
    }), () => {
      a7.cancel(d31), r49.abort();
    };
  }, [B17, t48, o62, C18, H16, c40, p31]), o2(() => {
    let e58 = m25.current;
    !e58 || !a38 || !b14 || e58.setAttribute("hidden", "until-found");
  }, [b14, a38]), s13.useEffect(function() {
    let r49 = m25.current;
    if (!r49) return;
    function d31(N20) {
      v17.current = true, z17(true), q15(true, u4(s4.none, N20));
    }
    return t11(r49, "beforematch", d31);
  }, [q15, z17]);
  let J18 = u37 || a38 || t48 || o62;
  return { height: U11.height, props: { ...G18 ? { [g3.startingStyle]: "" } : void 0, hidden: b14, id: f35 }, ref: Z17, shouldPreventOpenAnimation: L20, shouldRender: J18, transitionStatus: C18, width: U11.width };
}
function y8(n61) {
  return { height: n61.scrollHeight, width: n61.scrollWidth };
}
function oe(n61, i38 = false) {
  let a38 = i10(n61).getComputedStyle(n61), f35 = (a38.animationName.split(",").map((t48) => t48.trim()).some((t48) => t48 !== "" && t48 !== "none") || i38) && _2(a38.animationDuration), u37 = _2(a38.transitionDuration);
  return f35 && u37 || u37 ? "css-transition" : f35 ? "css-animation" : "none";
}
function _2(n61) {
  return n61.split(",").map((i38) => i38.trim()).some((i38) => i38 !== "" && Number.parseFloat(i38) > 0);
}
function S5(n61, i38, a38) {
  let f35 = n61.style.getPropertyValue(i38), u37 = n61.style.getPropertyPriority(i38);
  return n61.style.setProperty(i38, a38), () => {
    if (f35 === "") {
      n61.style.removeProperty(i38);
      return;
    }
    n61.style.setProperty(i38, f35, u37);
  };
}
function se(n61) {
  let i38 = { "justify-content": n61.style.justifyContent, "align-items": n61.style.alignItems, "align-content": n61.style.alignContent, "justify-items": n61.style.justifyItems };
  Object.keys(i38).forEach((u37) => {
    n61.style.setProperty(u37, "initial", "important");
  });
  function a38() {
    Object.entries(i38).forEach(([u37, t48]) => {
      if (t48 === "") {
        n61.style.removeProperty(u37);
        return;
      }
      n61.style.setProperty(u37, t48);
    });
  }
  let f35 = a7.request(a38);
  return () => {
    a7.cancel(f35), a38();
  };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/accordion.mjs
var se2 = Object.defineProperty;
var ae = (e58, t48) => {
  for (var s54 in t48) se2(e58, s54, { get: t48[s54], enumerable: true });
};
var ie = {};
ae(ie, { Header: () => Z2, Item: () => Q2, Panel: () => re, Root: () => q3, Trigger: () => te });
var j6 = H4.createContext(void 0);
function _3() {
  let e58 = H4.useContext(j6);
  if (e58 === void 0) throw new Error(f2(10));
  return e58;
}
var Re = { value: () => null };
var q3 = S6.forwardRef(function(t48, s54) {
  let { render: A17, className: h24, disabled: r49 = false, hiddenUntilFound: g20, keepMounted: b14, loopFocus: y24 = true, onValueChange: C18, multiple: k17 = false, orientation: l19 = "vertical", value: E30, defaultValue: N20, style: w22, ...P17 } = t48, p31 = o4(), V12 = S6.useMemo(() => {
    if (E30 === void 0) return N20 ?? [];
  }, [E30, N20]), u37 = S6.useRef([]), [i38, a38] = m({ controlled: E30, default: V12, name: "Accordion", state: "value" }), R27 = E((m25, T17) => {
    let f35 = u4(s4.none);
    if (k17) if (T17) {
      let n61 = i38.slice();
      if (n61.push(m25), C18?.(n61, f35), f35.isCanceled) return;
      a38(n61);
    } else {
      let n61 = i38.filter((M20) => M20 !== m25);
      if (C18?.(n61, f35), f35.isCanceled) return;
      a38(n61);
    }
    else {
      let n61 = i38[0] === m25 ? [] : [m25];
      if (C18?.(n61, f35), f35.isCanceled) return;
      a38(n61);
    }
  }), o62 = S6.useMemo(() => ({ value: i38, disabled: r49, orientation: l19 }), [i38, r49, l19]), v17 = S6.useMemo(() => ({ accordionItemRefs: u37, direction: p31, disabled: r49, handleValueChange: R27, hiddenUntilFound: g20 ?? false, keepMounted: b14 ?? false, loopFocus: y24, orientation: l19, state: o62, value: i38 }), [p31, r49, R27, g20, b14, y24, l19, o62, i38]), I26 = J("div", t48, { state: o62, ref: s54, props: [{ dir: p31, role: "region" }, P17], stateAttributesMapping: Re });
  return $(j6.Provider, { value: v17, children: $(k, { elementsRef: u37, children: I26 }) });
});
var K3 = L6.createContext(void 0);
function U2() {
  let e58 = L6.useContext(K3);
  if (e58 === void 0) throw new Error(f2(9));
  return e58;
}
var G2 = function(e58) {
  return e58.index = "data-index", e58.disabled = "data-disabled", e58.open = "data-open", e58;
}({});
var D6 = { ...s7, index: (e58) => Number.isInteger(e58) ? { [G2.index]: String(e58) } : null, ...i7, value: () => null };
var Q2 = x6.forwardRef(function(t48, s54) {
  let { className: A17, disabled: h24 = false, onOpenChange: r49, render: g20, value: b14, style: y24, ...C18 } = t48, { ref: k17, index: l19 } = N2(), E30 = d(s54, k17), { disabled: N20, handleValueChange: w22, state: P17, value: p31 } = _3(), V12 = r5(), u37 = b14 ?? V12, i38 = h24 || N20, a38 = x6.useMemo(() => {
    if (!p31) return false;
    for (let c40 = 0; c40 < p31.length; c40 += 1) if (p31[c40] === u37) return true;
    return false;
  }, [p31, u37]), R27 = E((c40, d31) => {
    r49?.(c40, d31), !d31.isCanceled && w22(u37, c40);
  }), o62 = A4({ open: a38, onOpenChange: R27, disabled: i38 }), v17 = x6.useMemo(() => ({ open: o62.open, disabled: o62.disabled, transitionStatus: o62.transitionStatus }), [o62.open, o62.disabled, o62.transitionStatus]), I26 = x6.useMemo(() => ({ ...o62, onOpenChange: R27, state: v17 }), [o62, v17, R27]), m25 = x6.useMemo(() => ({ ...P17, hidden: !a38 && !o62.mounted, index: l19, disabled: i38, open: a38 }), [o62.mounted, i38, l19, a38, P17]), T17 = r5(), [f35, n61] = x6.useState(T17), M20 = x6.useMemo(() => ({ open: a38, state: m25, setTriggerId: n61, triggerId: f35 }), [a38, m25, n61, f35]), F14 = J("div", t48, { state: m25, ref: E30, props: C18, stateAttributesMapping: D6 });
  return J2(s6.Provider, { value: I26, children: J2(K3.Provider, { value: M20, children: F14 }) });
});
var Z2 = X.forwardRef(function(t48, s54) {
  let { render: A17, className: h24, style: r49, ...g20 } = t48, { state: b14 } = U2();
  return J("h3", t48, { state: b14, ref: s54, props: g20, stateAttributesMapping: D6 });
});
function Fe(e58) {
  let { current: t48 } = e58, s54 = [];
  for (let A17 = 0; A17 < t48.length; A17 += 1) {
    let h24 = t48[A17];
    if (!i9(h24)) {
      let r49 = h24?.querySelector('[type="button"], [role="button"]');
      r49 && !i9(r49) && s54.push(r49);
    }
  }
  return s54;
}
var te = oe2.forwardRef(function(t48, s54) {
  let { disabled: A17, className: h24, id: r49, render: g20, nativeButton: b14 = true, style: y24, ...C18 } = t48, { panelId: k17, open: l19, handleTrigger: E30, disabled: N20 } = l6(), w22 = A17 ?? N20, { getButtonProps: P17, buttonRef: p31 } = Q({ disabled: w22, focusableWhenDisabled: true, native: b14, composite: true }), { accordionItemRefs: V12, direction: u37, loopFocus: i38, orientation: a38 } = _3(), R27 = u37 === "rtl", o62 = a38 === "horizontal", { state: v17, setTriggerId: I26, triggerId: m25 } = U2();
  return o2(() => (r49 && I26(r49), () => {
    I26(void 0);
  }), [r49, I26]), J("button", t48, { state: v17, ref: [s54, p31], props: [{ "aria-controls": l19 ? k17 : void 0, "aria-expanded": l19, id: m25, tabIndex: 0, onClick: E30, onKeyDown(n61) {
    if (!Y2.has(n61.key)) return;
    p7(n61);
    let M20 = Fe(V12), c40 = M20.length - 1, d31 = -1, O14 = M20.indexOf(n61.currentTarget);
    function W14() {
      i38 ? d31 = O14 + 1 > c40 ? 0 : O14 + 1 : d31 = Math.min(O14 + 1, c40);
    }
    function B17() {
      i38 ? d31 = O14 === 0 ? c40 : O14 - 1 : d31 = O14 - 1;
    }
    switch (n61.key) {
      case R6:
        o62 || W14();
        break;
      case h7:
        o62 || B17();
        break;
      case L5:
        o62 && (R27 ? B17() : W14());
        break;
      case T3:
        o62 && (R27 ? W14() : B17());
        break;
      case "Home":
        d31 = 0;
        break;
      case "End":
        d31 = c40;
        break;
      default:
        break;
    }
    d31 > -1 && M20[d31].focus();
  } }, C18, P17], stateAttributesMapping: i8 });
});
var z2 = function(e58) {
  return e58.accordionPanelHeight = "--accordion-panel-height", e58.accordionPanelWidth = "--accordion-panel-width", e58;
}({});
var re = ne.forwardRef(function(t48, s54) {
  let { className: A17, hiddenUntilFound: h24, keepMounted: r49, id: g20, render: b14, style: y24, ...C18 } = t48, { hiddenUntilFound: k17, keepMounted: l19 } = _3(), { mounted: E30, onOpenChange: N20, open: w22, panelId: P17, setMounted: p31, setOpen: V12, setPanelIdState: u37, transitionStatus: i38 } = l6(), a38 = h24 ?? k17, R27 = r49 ?? l19;
  o2(() => {
    if (g20) return u37(g20), () => {
      u37(void 0);
    };
  }, [g20, u37]);
  let { height: o62, props: v17, ref: I26, shouldPreventOpenAnimation: m25, shouldRender: T17, transitionStatus: f35, width: n61 } = be({ externalRef: s54, hiddenUntilFound: a38, id: g20 ?? P17, keepMounted: R27, mounted: E30, onOpenChange: N20, open: w22, setMounted: p31, setOpen: V12, transitionStatus: i38 }), { state: M20, triggerId: F14 } = U2(), c40 = { ...M20, transitionStatus: f35 }, d31 = e6(y24, c40), O14 = J("div", { ...t48, style: void 0 }, { state: c40, ref: I26, props: [v17, { "aria-labelledby": F14, role: "region", style: { [z2.accordionPanelHeight]: o62 === void 0 ? "auto" : `${o62}px`, [z2.accordionPanelWidth]: n61 === void 0 ? "auto" : `${n61}px` } }, C18, d31 ? { style: d31 } : void 0, m25 ? { style: { animationName: "none" } } : void 0], stateAttributesMapping: D6 });
  return T17 ? O14 : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/root/useRenderDialogRoot.mjs
import * as k8 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useOnFirstRender.mjs
import * as r12 from "react";
function n16(t48) {
  let e58 = r12.useRef(true);
  e58.current && (e58.current = false, t48());
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/root/useRenderDialogRoot.mjs
import * as r17 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useScrollLock.mjs
import * as X2 from "react";
import * as Z3 from "react";
import * as Q3 from "react";
function R7(o62, e58, t48, r49) {
  return o62.addEventListener(e58, t48, r49), () => {
    o62.removeEventListener(e58, t48, r49);
  };
}
var l9 = typeof navigator < "u";
var S7 = U3();
var W6 = K4();
var p11 = $2();
var F4 = typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none");
var P5 = S7.platform === "MacIntel" && S7.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(S7.platform);
var ut = l9 && /firefox/i.test(p11);
var ft2 = l9 && /apple/i.test(navigator.vendor);
var dt = l9 && /Edg/i.test(p11);
var ht = l9 && /android/i.test(W6) || /android/i.test(p11);
var mt = l9 && W6.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
var pt = p11.includes("jsdom/");
function U3() {
  if (!l9) return { platform: "", maxTouchPoints: -1 };
  let o62 = navigator.userAgentData;
  return o62?.platform ? { platform: o62.platform, maxTouchPoints: navigator.maxTouchPoints } : { platform: navigator.platform ?? "", maxTouchPoints: navigator.maxTouchPoints ?? -1 };
}
function $2() {
  if (!l9) return "";
  let o62 = navigator.userAgentData;
  return o62 && Array.isArray(o62.brands) ? o62.brands.map(({ brand: e58, version: t48 }) => `${e58}/${t48}`).join(" ") : navigator.userAgent;
}
function K4() {
  if (!l9) return "";
  let o62 = navigator.userAgentData;
  return o62?.platform ? o62.platform : navigator.platform ?? "";
}
function c15(o62) {
  return o62?.ownerDocument || document;
}
var J3 = () => {
};
var G3 = typeof document < "u" ? X2.useLayoutEffect : J3;
var f16 = 0;
var d14 = class o16 {
  static create() {
    return new o16();
  }
  currentId = f16;
  start(e58, t48) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = f16, t48();
    }, e58);
  }
  isStarted() {
    return this.currentId !== f16;
  }
  clear = () => {
    this.currentId !== f16 && (clearTimeout(this.currentId), this.currentId = f16);
  };
  disposeEffect = () => this.clear;
};
var b4 = null;
var Et = globalThis.requestAnimationFrame;
var x7 = class {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (e58) => {
    this.isScheduled = false;
    let t48 = this.callbacks, r49 = this.callbacksCount;
    if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, r49 > 0) for (let s54 = 0; s54 < t48.length; s54 += 1) t48[s54]?.(e58);
  };
  request(e58) {
    let t48 = this.nextId;
    return this.nextId += 1, this.callbacks.push(e58), this.callbacksCount += 1, !this.isScheduled && (requestAnimationFrame(this.tick), this.isScheduled = true), t48;
  }
  cancel(e58) {
    let t48 = e58 - this.startId;
    t48 < 0 || t48 >= this.callbacks.length || (this.callbacks[t48] = null, this.callbacksCount -= 1);
  }
};
var g10 = new x7();
var y9 = class o17 {
  static create() {
    return new o17();
  }
  static request(e58) {
    return g10.request(e58);
  }
  static cancel(e58) {
    return g10.cancel(e58);
  }
  currentId = b4;
  request(e58) {
    this.cancel(), this.currentId = g10.request(() => {
      this.currentId = b4, e58();
    });
  }
  cancel = () => {
    this.currentId !== b4 && (g10.cancel(this.currentId), this.currentId = b4);
  };
  disposeEffect = () => this.cancel;
};
function D7() {
}
var Yt = Object.freeze([]);
var At = Object.freeze({});
var M3 = {};
var q4 = {};
var B6 = "";
function ot(o62) {
  if (typeof document > "u") return false;
  let e58 = c15(o62);
  return i10(e58).innerWidth - e58.documentElement.clientWidth > 0;
}
function rt2(o62) {
  if (!(typeof CSS < "u" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document > "u") return false;
  let t48 = c15(o62), r49 = t48.documentElement, s54 = t48.body, n61 = y3(r49) ? r49 : s54, a38 = n61.style.overflowY, u37 = r49.style.scrollbarGutter;
  r49.style.scrollbarGutter = "stable", n61.style.overflowY = "scroll";
  let h24 = n61.offsetWidth;
  n61.style.overflowY = "hidden";
  let m25 = n61.offsetWidth;
  return n61.style.overflowY = a38, r49.style.scrollbarGutter = u37, h24 === m25;
}
function st(o62) {
  let e58 = c15(o62), t48 = e58.documentElement, r49 = e58.body, s54 = y3(t48) ? t48 : r49, n61 = { overflowY: s54.style.overflowY, overflowX: s54.style.overflowX };
  return Object.assign(s54.style, { overflowY: "hidden", overflowX: "hidden" }), () => {
    Object.assign(s54.style, n61);
  };
}
function nt(o62) {
  let e58 = c15(o62), t48 = e58.documentElement, r49 = e58.body, s54 = i10(t48), n61 = 0, a38 = 0, u37 = false, h24 = y9.create();
  if (F4 && (s54.visualViewport?.scale ?? 1) !== 1) return () => {
  };
  function m25() {
    let w22 = s54.getComputedStyle(t48), i38 = s54.getComputedStyle(r49), O14 = (w22.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
    n61 = t48.scrollTop, a38 = t48.scrollLeft, M3 = { scrollbarGutter: t48.style.scrollbarGutter, overflowY: t48.style.overflowY, overflowX: t48.style.overflowX }, B6 = t48.style.scrollBehavior, q4 = { position: r49.style.position, height: r49.style.height, width: r49.style.width, boxSizing: r49.style.boxSizing, overflowY: r49.style.overflowY, overflowX: r49.style.overflowX, scrollBehavior: r49.style.scrollBehavior };
    let H16 = t48.scrollHeight > t48.clientHeight, N20 = t48.scrollWidth > t48.clientWidth, V12 = w22.overflowY === "scroll" || i38.overflowY === "scroll", _19 = w22.overflowX === "scroll" || i38.overflowX === "scroll", E30 = Math.max(0, s54.innerWidth - r49.clientWidth), T17 = Math.max(0, s54.innerHeight - r49.clientHeight), Y18 = parseFloat(i38.marginTop) + parseFloat(i38.marginBottom), A17 = parseFloat(i38.marginLeft) + parseFloat(i38.marginRight), L20 = y3(t48) ? t48 : r49;
    if (u37 = rt2(o62), u37) {
      t48.style.scrollbarGutter = O14, L20.style.overflowY = "hidden", L20.style.overflowX = "hidden";
      return;
    }
    Object.assign(t48.style, { scrollbarGutter: O14, overflowY: "hidden", overflowX: "hidden" }), (H16 || V12) && (t48.style.overflowY = "scroll"), (N20 || _19) && (t48.style.overflowX = "scroll"), Object.assign(r49.style, { position: "relative", height: Y18 || T17 ? `calc(100dvh - ${Y18 + T17}px)` : "100dvh", width: A17 || E30 ? `calc(100vw - ${A17 + E30}px)` : "100vw", boxSizing: "border-box", overflow: "hidden", scrollBehavior: "unset" }), r49.scrollTop = n61, r49.scrollLeft = a38, t48.setAttribute("data-base-ui-scroll-locked", ""), t48.style.scrollBehavior = "unset";
  }
  function I26() {
    Object.assign(t48.style, M3), Object.assign(r49.style, q4), u37 || (t48.scrollTop = n61, t48.scrollLeft = a38, t48.removeAttribute("data-base-ui-scroll-locked"), t48.style.scrollBehavior = B6);
  }
  function j17() {
    I26(), h24.request(m25);
  }
  m25();
  let z17 = R7(s54, "resize", j17);
  return () => {
    h24.cancel(), I26(), typeof s54.removeEventListener == "function" && z17();
  };
}
var k4 = class {
  lockCount = 0;
  restore = null;
  timeoutLock = d14.create();
  timeoutUnlock = d14.create();
  acquire(e58) {
    return this.lockCount += 1, this.lockCount === 1 && this.restore === null && this.timeoutLock.start(0, () => this.lock(e58)), this.release;
  }
  release = () => {
    this.lockCount -= 1, this.lockCount === 0 && this.restore && this.timeoutUnlock.start(0, this.unlock);
  };
  unlock = () => {
    this.lockCount === 0 && this.restore && (this.restore?.(), this.restore = null);
  };
  lock(e58) {
    if (this.lockCount === 0 || this.restore !== null) return;
    let r49 = c15(e58).documentElement, s54 = i10(r49).getComputedStyle(r49).overflowY;
    if (s54 === "hidden" || s54 === "clip") {
      this.restore = D7;
      return;
    }
    let n61 = P5 || !ot(e58);
    this.restore = n61 ? st(e58) : nt(e58);
  }
};
var lt = new k4();
function qt(o62 = true, e58 = null) {
  G3(() => {
    if (o62) return lt.acquire(e58);
  }, [o62, e58]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/index.mjs
import * as ye2 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useTimeout.mjs
import * as u13 from "react";
import * as o18 from "react";
var s14 = {};
function i13(t48, c40) {
  let e58 = u13.useRef(s14);
  return e58.current === s14 && (e58.current = t48(c40)), e58;
}
var a15 = [];
function f17(t48) {
  o18.useEffect(t48, a15);
}
var r13 = 0;
var n17 = class t12 {
  static create() {
    return new t12();
  }
  currentId = r13;
  start(c40, e58) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = r13, e58();
    }, c40);
  }
  isStarted() {
    return this.currentId !== r13;
  }
  clear = () => {
    this.currentId !== r13 && (clearTimeout(this.currentId), this.currentId = r13);
  };
  disposeEffect = () => this.clear;
};
function p12() {
  let t48 = i13(n17.create).current;
  return f17(t48.disposeEffect), t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/index.mjs
import { jsx as wr } from "react/jsx-runtime";
import * as ge3 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/mergeCleanups.mjs
function r14(...n61) {
  return () => {
    for (let e58 = 0; e58 < n61.length; e58 += 1) {
      let t48 = n61[e58];
      t48 && t48();
    }
  };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/FocusGuard.mjs
import * as o19 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/visuallyHidden.mjs
var i14 = { clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: 0, padding: 0, width: 1, height: 1, margin: -1 };
var e8 = { ...i14, position: "fixed", top: 0, left: 0 };
var t13 = { ...i14, position: "absolute" };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/FocusGuard.mjs
import { jsx as c16 } from "react/jsx-runtime";
var R8 = o19.forwardRef(function(e58, s54) {
  let [r49, t48] = o19.useState();
  return o2(() => {
    m5 && t48("button");
  }, []), c16("span", { ...e58, ref: s54, style: e8, "aria-hidden": r49 ? void 0 : true, ...{ tabIndex: 0, role: r49 }, "data-base-ui-focus-guard": "" });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/createAttribute.mjs
function e9(t48) {
  return `data-base-ui-${t48}`;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/index.mjs
import * as oe4 from "react";
import * as Dt from "react-dom";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/constants.mjs
var E9 = 500;
var e10 = 500;
var I9 = { style: { transition: "none" } };
var _4 = "data-base-ui-click-trigger";
var t14 = "data-base-ui-swipe-ignore";
var o20 = "data-swipe-ignore";
var n18 = `[${t14}]`;
var s15 = `[${o20}]`;
var i15 = { fallbackAxisSide: "none" };
var S8 = { fallbackAxisSide: "end" };
var T4 = { clipPath: "inset(50%)", position: "fixed", top: 0, left: 0 };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/index.mjs
import { jsx as kt, jsxs as Tn } from "react/jsx-runtime";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/components/FloatingTree.mjs
import * as o22 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/createEventEmitter.mjs
function o21() {
  let t48 = /* @__PURE__ */ new Map();
  return { emit(e58, a38) {
    t48.get(e58)?.forEach((n61) => n61(a38));
  }, on(e58, a38) {
    t48.has(e58) || t48.set(e58, /* @__PURE__ */ new Set()), t48.get(e58).add(a38);
  }, off(e58, a38) {
    t48.get(e58)?.delete(a38);
  } };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/components/FloatingTreeStore.mjs
var s16 = class {
  nodesRef = { current: [] };
  events = o21();
  addNode(e58) {
    this.nodesRef.current.push(e58);
  }
  removeNode(e58) {
    let n61 = this.nodesRef.current.findIndex((t48) => t48 === e58);
    n61 !== -1 && this.nodesRef.current.splice(n61, 1);
  }
};

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/components/FloatingTree.mjs
import { jsx as c17 } from "react/jsx-runtime";
var a16 = o22.createContext(null);
var s17 = o22.createContext(null);
var d15 = () => o22.useContext(a16)?.id || null;
var f18 = (n61) => {
  let e58 = o22.useContext(s17);
  return n61 ?? e58;
};
function T5(n61) {
  let e58 = I3(), t48 = f18(n61), r49 = d15();
  return o2(() => {
    if (!e58) return;
    let i38 = { id: e58, parentId: r49 };
    return t48?.addNode(i38), () => {
      t48?.removeNode(i38);
    };
  }, [t48, e58, r49]), e58;
}
function v6(n61) {
  let { children: e58, id: t48 } = n61, r49 = d15();
  return c17(a16.Provider, { value: o22.useMemo(() => ({ id: t48, parentId: r49 }), [t48, r49]), children: e58 });
}
function I10(n61) {
  let { children: e58, externalTree: t48 } = n61, r49 = u2(() => t48 ?? new s16()).current;
  return c17(s17.Provider, { value: r49, children: e58 });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/index.mjs
import { jsx as Ln, jsxs as Eo } from "react/jsx-runtime";
import * as tt2 from "react";
import * as Te from "react";
import * as ve2 from "react";
import * as Ee from "react";

// http-url:https://esm.sh/@floating-ui/react-dom@^2.1.8?external=react,react-dom&target=es2022
var react_dom_2_1_exports = {};

// http-url:https://esm.sh/@floating-ui/dom@1.7.6/es2022/dom.mjs
var yt = E6(0);

// http-url:https://esm.sh/@floating-ui/react-dom@^2.1.8?external=react,react-dom&target=es2022
__reExport(react_dom_2_1_exports, react_dom_star);
import * as react_dom_star from "react-dom";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/popups/index.mjs
import * as a17 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
import * as f20 from "react";

// http-url:https://esm.sh/reselect@5.2.0/es2022/reselect.mjs
var R9 = Symbol("NOT_FOUND");
function z4(e58, t48 = `expected a function, instead received ${typeof e58}`) {
  if (typeof e58 != "function") throw new TypeError(t48);
}
function G4(e58, t48 = `expected an object, instead received ${typeof e58}`) {
  if (typeof e58 != "object") throw new TypeError(t48);
}
function L7(e58, t48 = "expected all items to be functions, instead received the following types: ") {
  if (!e58.every((n61) => typeof n61 == "function")) {
    let n61 = e58.map((i38) => typeof i38 == "function" ? `function ${i38.name || "unnamed"}()` : typeof i38).join(", ");
    throw new TypeError(`${t48}[${n61}]`);
  }
}
var N5 = (e58) => Array.isArray(e58) ? e58 : [e58];
function B7(e58) {
  let t48 = Array.isArray(e58[0]) ? e58[0] : e58;
  return L7(t48, "createSelector expects all input-selectors to be functions, but received the following types: "), t48;
}
function J4(e58, t48) {
  let n61 = [], { length: i38 } = e58;
  for (let c40 = 0; c40 < i38; c40++) n61.push(e58[c40].apply(null, t48));
  return n61;
}
var te2 = Object.getPrototypeOf({});
function se3(e58) {
  let t48;
  return { get(n61) {
    return t48 && e58(t48.key, n61) ? t48.value : R9;
  }, put(n61, i38) {
    t48 = { key: n61, value: i38 };
  }, getEntries() {
    return t48 ? [t48] : [];
  }, clear() {
    t48 = void 0;
  } };
}
function ie2(e58, t48) {
  let n61 = [];
  function i38(o62) {
    let l19 = n61.findIndex((u37) => t48(o62, u37.key));
    if (l19 > -1) {
      let u37 = n61[l19];
      return l19 > 0 && (n61.splice(l19, 1), n61.unshift(u37)), u37.value;
    }
    return R9;
  }
  function c40(o62, l19) {
    i38(o62) === R9 && (n61.unshift({ key: o62, value: l19 }), n61.length > e58 && n61.pop());
  }
  function r49() {
    return n61;
  }
  function s54() {
    n61 = [];
  }
  return { get: i38, put: c40, getEntries: r49, clear: s54 };
}
var F5 = (e58, t48) => e58 === t48;
function q6(e58) {
  return function(n61, i38) {
    if (n61 === null || i38 === null || n61.length !== i38.length) return false;
    let { length: c40 } = n61;
    for (let r49 = 0; r49 < c40; r49++) if (!e58(n61[r49], i38[r49])) return false;
    return true;
  };
}
function Re2(e58, t48) {
  let n61 = typeof t48 == "object" ? t48 : { equalityCheck: t48 }, { equalityCheck: i38 = F5, maxSize: c40 = 1, resultEqualityCheck: r49 } = n61, s54 = q6(i38), o62 = 0, l19 = c40 <= 1 ? se3(s54) : ie2(c40, s54);
  function u37() {
    let a38 = l19.get(arguments);
    if (a38 === R9) {
      if (a38 = e58.apply(null, arguments), o62++, r49) {
        let h24 = l19.getEntries().find((f35) => r49(f35.value, a38));
        h24 && (a38 = h24.value, o62 !== 0 && o62--);
      }
      l19.put(arguments, a38);
    }
    return a38;
  }
  return u37.clearCache = () => {
    l19.clear(), u37.resetResultsCount();
  }, u37.resultsCount = () => o62, u37.resetResultsCount = () => {
    o62 = 0;
  }, u37;
}
var ce = class {
  constructor(e58) {
    this.value = e58;
  }
  deref() {
    return this.value;
  }
};
var ue2 = () => typeof WeakRef > "u" ? ce : WeakRef;
var V2 = ue2();
var le = 0;
var I11 = 1;
function m8() {
  return { s: le, v: void 0, o: null, p: null };
}
function ae2(e58) {
  return e58 instanceof V2 ? e58.deref() : e58;
}
function K5(e58, t48 = {}) {
  let n61 = m8(), { resultEqualityCheck: i38 } = t48, c40, r49 = 0;
  function s54() {
    let o62 = n61, { length: l19 } = arguments;
    for (let p31 = 0, h24 = l19; p31 < h24; p31++) {
      let f35 = arguments[p31];
      if (typeof f35 == "function" || typeof f35 == "object" && f35 !== null) {
        let d31 = o62.o;
        d31 === null && (o62.o = d31 = /* @__PURE__ */ new WeakMap());
        let y24 = d31.get(f35);
        y24 === void 0 ? (o62 = m8(), d31.set(f35, o62)) : o62 = y24;
      } else {
        let d31 = o62.p;
        d31 === null && (o62.p = d31 = /* @__PURE__ */ new Map());
        let y24 = d31.get(f35);
        y24 === void 0 ? (o62 = m8(), d31.set(f35, o62)) : o62 = y24;
      }
    }
    let u37 = o62, a38;
    if (o62.s === I11) a38 = o62.v;
    else if (a38 = e58.apply(null, arguments), r49++, i38) {
      let p31 = ae2(c40);
      p31 != null && i38(p31, a38) && (a38 = p31, r49 !== 0 && r49--), c40 = typeof a38 == "object" && a38 !== null || typeof a38 == "function" ? new V2(a38) : a38;
    }
    return u37.s = I11, u37.v = a38, a38;
  }
  return s54.clearCache = () => {
    n61 = m8(), s54.resetResultsCount();
  }, s54.resultsCount = () => r49, s54.resetResultsCount = () => {
    r49 = 0;
  }, s54;
}
function fe(e58, ...t48) {
  let n61 = typeof e58 == "function" ? { memoize: e58, memoizeOptions: t48 } : e58, i38 = (...c40) => {
    let r49 = 0, s54 = 0, o62, l19 = {}, u37 = c40.pop();
    typeof u37 == "object" && (l19 = u37, u37 = c40.pop()), z4(u37, `createSelector expects an output function after the inputs, but received: [${typeof u37}]`);
    let a38 = { ...n61, ...l19 }, { memoize: p31, memoizeOptions: h24 = [], argsMemoize: f35 = K5, argsMemoizeOptions: d31 = [] } = a38, y24 = N5(h24), P17 = N5(d31), T17 = B7(c40), _19 = p31(function() {
      return r49++, u37.apply(null, arguments);
    }, ...y24), he6 = true, $9 = f35(function() {
      s54++;
      let U11 = J4(T17, arguments);
      return o62 = _19.apply(null, U11), o62;
    }, ...P17);
    return Object.assign($9, { resultFunc: u37, memoizedResultFunc: _19, dependencies: T17, dependencyRecomputations: () => s54, resetDependencyRecomputations: () => {
      s54 = 0;
    }, lastResult: () => o62, recomputations: () => r49, resetRecomputations: () => {
      r49 = 0;
    }, memoize: p31, argsMemoize: f35 });
  };
  return Object.assign(i38, { withTypes: () => i38 }), i38;
}
var pe2 = fe(K5);
var de = Object.assign((e58, t48 = pe2) => {
  G4(e58, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e58}`);
  let n61 = Object.keys(e58), i38 = n61.map((r49) => e58[r49]);
  return t48(i38, (...r49) => r49.reduce((s54, o62, l19) => (s54[n61[l19]] = o62, s54), {}));
}, { withTypes: () => de });

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/store.mjs
import * as ee from "react";

// http-url:https://esm.sh/use-sync-external-store@1.6.0/X-ZXJlYWN0/es2022/shim.mjs
var shim_exports = {};
__export(shim_exports, {
  default: () => G5,
  useSyncExternalStore: () => C4
});
import * as __0$ from "react";
var require2 = (n61) => {
  const e58 = (m25) => typeof m25.default < "u" ? m25.default : m25, c40 = (m25) => Object.assign({ __esModule: true }, m25);
  switch (n61) {
    case "react":
      return e58(__0$);
    default:
      console.error('module "' + n61 + '" not found');
      return null;
  }
};
var v7 = Object.create;
var i16 = Object.defineProperty;
var E10 = Object.getOwnPropertyDescriptor;
var m9 = Object.getOwnPropertyNames;
var y10 = Object.getPrototypeOf;
var h8 = Object.prototype.hasOwnProperty;
var j7 = ((e58) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e58, { get: (t48, n61) => (typeof require2 < "u" ? require2 : t48)[n61] }) : e58)(function(e58) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e58 + '" is not supported');
});
var f19 = (e58, t48) => () => (t48 || e58((t48 = { exports: {} }).exports, t48), t48.exports);
var x8 = (e58, t48, n61, u37) => {
  if (t48 && typeof t48 == "object" || typeof t48 == "function") for (let r49 of m9(t48)) !h8.call(e58, r49) && r49 !== n61 && i16(e58, r49, { get: () => t48[r49], enumerable: !(u37 = E10(t48, r49)) || u37.enumerable });
  return e58;
};
var w6 = (e58, t48, n61) => (n61 = e58 != null ? v7(y10(e58)) : {}, x8(t48 || !e58 || !e58.__esModule ? i16(n61, "default", { value: e58, enumerable: true }) : n61, e58));
var d16 = f19((l19) => {
  "use strict";
  var o62 = j7("react");
  function b14(e58, t48) {
    return e58 === t48 && (e58 !== 0 || 1 / e58 === 1 / t48) || e58 !== e58 && t48 !== t48;
  }
  var g20 = typeof Object.is == "function" ? Object.is : b14, q15 = o62.useState, D14 = o62.useEffect, O14 = o62.useLayoutEffect, V12 = o62.useDebugValue;
  function I26(e58, t48) {
    var n61 = t48(), u37 = q15({ inst: { value: n61, getSnapshot: t48 } }), r49 = u37[0].inst, c40 = u37[1];
    return O14(function() {
      r49.value = n61, r49.getSnapshot = t48, a38(r49) && c40({ inst: r49 });
    }, [e58, n61, t48]), D14(function() {
      return a38(r49) && c40({ inst: r49 }), e58(function() {
        a38(r49) && c40({ inst: r49 });
      });
    }, [e58]), V12(n61), n61;
  }
  function a38(e58) {
    var t48 = e58.getSnapshot;
    e58 = e58.value;
    try {
      var n61 = t48();
      return !g20(e58, n61);
    } catch {
      return true;
    }
  }
  function L20(e58, t48) {
    return t48();
  }
  var N20 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? L20 : I26;
  l19.useSyncExternalStore = o62.useSyncExternalStore !== void 0 ? o62.useSyncExternalStore : N20;
});
var p13 = f19((k17, S18) => {
  "use strict";
  S18.exports = d16();
});
var s19 = w6(p13());
var { useSyncExternalStore: C4 } = s19;
var G5 = s19.default ?? s19;

// http-url:https://esm.sh/use-sync-external-store@1.6.0/X-ZXJlYWN0/es2022/shim/with-selector.mjs
import * as __0$2 from "react";
var require3 = (n61) => {
  const e58 = (m25) => typeof m25.default < "u" ? m25.default : m25, c40 = (m25) => Object.assign({ __esModule: true }, m25);
  switch (n61) {
    case "react":
      return e58(__0$2);
    case "use-sync-external-store/shim":
      return e58(shim_exports);
    default:
      console.error('module "' + n61 + '" not found');
      return null;
  }
};
var N6 = Object.create;
var y11 = Object.defineProperty;
var W8 = Object.getOwnPropertyDescriptor;
var w7 = Object.getOwnPropertyNames;
var G6 = Object.getPrototypeOf;
var I12 = Object.prototype.hasOwnProperty;
var E11 = ((e58) => typeof require3 < "u" ? require3 : typeof Proxy < "u" ? new Proxy(e58, { get: (r49, u37) => (typeof require3 < "u" ? require3 : r49)[u37] }) : e58)(function(e58) {
  if (typeof require3 < "u") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + e58 + '" is not supported');
});
var R10 = (e58, r49) => () => (r49 || e58((r49 = { exports: {} }).exports, r49), r49.exports);
var _6 = (e58, r49, u37, t48) => {
  if (r49 && typeof r49 == "object" || typeof r49 == "function") for (let i38 of w7(r49)) !I12.call(e58, i38) && i38 !== u37 && y11(e58, i38, { get: () => r49[i38], enumerable: !(t48 = W8(r49, i38)) || t48.enumerable });
  return e58;
};
var h9 = (e58, r49, u37) => (u37 = e58 != null ? N6(G6(e58)) : {}, _6(r49 || !e58 || !e58.__esModule ? y11(u37, "default", { value: e58, enumerable: true }) : u37, e58));
var D9 = R10((z17) => {
  "use strict";
  var m25 = E11("react"), k17 = E11("use-sync-external-store/shim");
  function p31(e58, r49) {
    return e58 === r49 && (e58 !== 0 || 1 / e58 === 1 / r49) || e58 !== e58 && r49 !== r49;
  }
  var q15 = typeof Object.is == "function" ? Object.is : p31, A17 = k17.useSyncExternalStore, B17 = m25.useRef, C18 = m25.useEffect, F14 = m25.useMemo, H16 = m25.useDebugValue;
  z17.useSyncExternalStoreWithSelector = function(e58, r49, u37, t48, i38) {
    var f35 = B17(null);
    if (f35.current === null) {
      var l19 = { hasValue: false, value: null };
      f35.current = l19;
    } else l19 = f35.current;
    f35 = F14(function() {
      function d31(o62) {
        if (!j17) {
          if (j17 = true, n61 = o62, o62 = t48(o62), i38 !== void 0 && l19.hasValue) {
            var c40 = l19.value;
            if (i38(c40, o62)) return a38 = c40;
          }
          return a38 = o62;
        }
        if (c40 = a38, q15(n61, o62)) return c40;
        var V12 = t48(o62);
        return i38 !== void 0 && i38(c40, V12) ? (n61 = o62, c40) : (n61 = o62, a38 = V12);
      }
      var j17 = false, n61, a38, b14 = u37 === void 0 ? null : u37;
      return [function() {
        return d31(r49());
      }, b14 === null ? void 0 : function() {
        return d31(b14());
      }];
    }, [r49, u37, t48, i38]);
    var s54 = A17(e58, f35[0], f35[1]);
    return C18(function() {
      l19.hasValue = true, l19.value = s54;
    }, [s54]), H16(s54), s54;
  };
});
var O5 = R10((L20, M20) => {
  "use strict";
  M20.exports = D9();
});
var v8 = h9(O5());
var { useSyncExternalStoreWithSelector: P6 } = v8;
var Q4 = v8.default ?? v8;

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/store.mjs
import * as B8 from "react";
import * as De from "react";
import * as Z4 from "react";
import * as v9 from "react";
import * as Xe from "react";
import * as re3 from "react";
import * as b5 from "react";
import * as we2 from "react-dom";
import * as P7 from "react";
import * as ue3 from "react";
import { jsx as d17, jsxs as C5 } from "react/jsx-runtime";
function Le(t48, e58) {
  return function(r49, ...o62) {
    let i38 = new URL(t48);
    return i38.searchParams.set("code", r49.toString()), o62.forEach((g20) => i38.searchParams.append("args[]", g20)), `${e58} error #${r49}; visit ${i38} for the full message.`;
  };
}
var Ae2 = Le("https://base-ui.com/production-error", "Base UI");
var M4 = Ae2;
var ut2 = (t48, e58, n61, r49, o62, i38, ...g20) => {
  if (g20.length > 0) throw new Error(M4(1));
  let s54;
  if (t48 && e58 && n61 && r49 && o62 && i38) s54 = (l19, a38, c40, u37) => {
    let p31 = t48(l19, a38, c40, u37), m25 = e58(l19, a38, c40, u37), x21 = n61(l19, a38, c40, u37), I26 = r49(l19, a38, c40, u37), W14 = o62(l19, a38, c40, u37);
    return i38(p31, m25, x21, I26, W14, a38, c40, u37);
  };
  else if (t48 && e58 && n61 && r49 && o62) s54 = (l19, a38, c40, u37) => {
    let p31 = t48(l19, a38, c40, u37), m25 = e58(l19, a38, c40, u37), x21 = n61(l19, a38, c40, u37), I26 = r49(l19, a38, c40, u37);
    return o62(p31, m25, x21, I26, a38, c40, u37);
  };
  else if (t48 && e58 && n61 && r49) s54 = (l19, a38, c40, u37) => {
    let p31 = t48(l19, a38, c40, u37), m25 = e58(l19, a38, c40, u37), x21 = n61(l19, a38, c40, u37);
    return r49(p31, m25, x21, a38, c40, u37);
  };
  else if (t48 && e58 && n61) s54 = (l19, a38, c40, u37) => {
    let p31 = t48(l19, a38, c40, u37), m25 = e58(l19, a38, c40, u37);
    return n61(p31, m25, a38, c40, u37);
  };
  else if (t48 && e58) s54 = (l19, a38, c40, u37) => {
    let p31 = t48(l19, a38, c40, u37);
    return e58(p31, a38, c40, u37);
  };
  else if (t48) s54 = t48;
  else throw new Error("Missing arguments");
  return s54;
};
var Pe = fe({ memoize: Re2, memoizeOptions: { maxSize: 1, equalityCheck: Object.is } });
var je = parseInt(B8.version, 10);
function K6(t48) {
  return je >= t48;
}
var J5 = {};
function E12(t48, e58) {
  let n61 = Z4.useRef(J5);
  return n61.current === J5 && (n61.current = t48(e58)), n61;
}
var Ve = [];
var We;
function G7() {
  return We;
}
function Q5(t48) {
  Ve.push(t48);
}
var He = K6(19);
var Ye = He ? Ue : $e;
function L8(t48, e58, n61, r49, o62) {
  return Ye(t48, e58, n61, r49, o62);
}
function qe(t48, e58, n61, r49, o62) {
  let i38 = ee.useCallback(() => e58(t48.getSnapshot(), n61, r49, o62), [t48, e58, n61, r49, o62]);
  return C4(t48.subscribe, i38, i38);
}
Q5({ before(t48) {
  t48.syncIndex = 0, t48.didInitialize || (t48.syncTick = 1, t48.syncHooks = [], t48.didChangeStore = true, t48.getSnapshot = () => {
    let e58 = false;
    for (let n61 = 0; n61 < t48.syncHooks.length; n61 += 1) {
      let r49 = t48.syncHooks[n61], o62 = r49.selector(r49.store.state, r49.a1, r49.a2, r49.a3);
      (r49.didChange || !Object.is(r49.value, o62)) && (e58 = true, r49.value = o62, r49.didChange = false);
    }
    return e58 && (t48.syncTick += 1), t48.syncTick;
  });
}, after(t48) {
  t48.syncHooks.length > 0 && (t48.didChangeStore && (t48.didChangeStore = false, t48.subscribe = (e58) => {
    let n61 = /* @__PURE__ */ new Set();
    for (let o62 of t48.syncHooks) n61.add(o62.store);
    let r49 = [];
    for (let o62 of n61) r49.push(o62.subscribe(e58));
    return () => {
      for (let o62 of r49) o62();
    };
  }), C4(t48.subscribe, t48.getSnapshot, t48.getSnapshot));
} });
function Ue(t48, e58, n61, r49, o62) {
  let i38 = G7();
  if (!i38) return qe(t48, e58, n61, r49, o62);
  let g20 = i38.syncIndex;
  i38.syncIndex += 1;
  let s54;
  return i38.didInitialize ? (s54 = i38.syncHooks[g20], (s54.store !== t48 || s54.selector !== e58 || !Object.is(s54.a1, n61) || !Object.is(s54.a2, r49) || !Object.is(s54.a3, o62)) && (s54.store !== t48 && (i38.didChangeStore = true), s54.store = t48, s54.selector = e58, s54.a1 = n61, s54.a2 = r49, s54.a3 = o62, s54.didChange = true)) : (s54 = { store: t48, selector: e58, a1: n61, a2: r49, a3: o62, value: e58(t48.getSnapshot(), n61, r49, o62), didChange: false }, i38.syncHooks.push(s54)), s54.value;
}
function $e(t48, e58, n61, r49, o62) {
  return P6(t48.subscribe, t48.getSnapshot, t48.getSnapshot, (i38) => e58(i38, n61, r49, o62));
}
var A8 = class {
  constructor(e58) {
    this.state = e58, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
  }
  subscribe = (e58) => (this.listeners.add(e58), () => {
    this.listeners.delete(e58);
  });
  getSnapshot = () => this.state;
  setState(e58) {
    if (this.state === e58) return;
    this.state = e58, this.updateTick += 1;
    let n61 = this.updateTick;
    for (let r49 of this.listeners) {
      if (n61 !== this.updateTick) return;
      r49(e58);
    }
  }
  update(e58) {
    for (let n61 in e58) if (!Object.is(this.state[n61], e58[n61])) {
      this.setState({ ...this.state, ...e58 });
      return;
    }
  }
  set(e58, n61) {
    Object.is(this.state[e58], n61) || this.setState({ ...this.state, [e58]: n61 });
  }
  notifyAll() {
    let e58 = { ...this.state };
    this.setState(e58);
  }
  use(e58, n61, r49, o62) {
    return L8(this, e58, n61, r49, o62);
  }
};
var H5 = { ...Xe };
var Y3 = H5.useInsertionEffect;
var Be = Y3 && Y3 !== H5.useLayoutEffect ? Y3 : (t48) => t48();
function k7(t48) {
  let e58 = E12(Ke).current;
  return e58.next = t48, Be(e58.effect), e58.trampoline;
}
function Ke() {
  let t48 = { next: void 0, callback: Je, trampoline: (...e58) => t48.callback?.(...e58), effect: () => {
    t48.callback = t48.next;
  } };
  return t48;
}
function Je() {
}
var Ze = () => {
};
var w8 = typeof document < "u" ? re3.useLayoutEffect : Ze;
function ne2() {
}
var Tt = Object.freeze([]);
var _t = Object.freeze({});
var oe3 = class extends A8 {
  constructor(e58, n61 = {}, r49) {
    super(e58), this.context = n61, this.selectors = r49;
  }
  useSyncedValue(e58, n61) {
    v9.useDebugValue(e58);
    let r49 = this;
    w8(() => {
      r49.state[e58] !== n61 && r49.set(e58, n61);
    }, [r49, e58, n61]);
  }
  useSyncedValueWithCleanup(e58, n61) {
    let r49 = this;
    w8(() => (r49.state[e58] !== n61 && r49.set(e58, n61), () => {
      r49.set(e58, void 0);
    }), [r49, e58, n61]);
  }
  useSyncedValues(e58) {
    let n61 = this, r49 = Object.values(e58);
    w8(() => {
      n61.update(e58);
    }, [n61, ...r49]);
  }
  useControlledProp(e58, n61) {
    v9.useDebugValue(e58);
    let r49 = this, o62 = n61 !== void 0;
    w8(() => {
      o62 && !Object.is(r49.state[e58], n61) && r49.setState({ ...r49.state, [e58]: n61 });
    }, [r49, e58, n61, o62]);
  }
  select(e58, n61, r49, o62) {
    let i38 = this.selectors[e58];
    return i38(this.state, n61, r49, o62);
  }
  useState(e58, n61, r49, o62) {
    return v9.useDebugValue(e58), L8(this, this.selectors[e58], n61, r49, o62);
  }
  useContextCallback(e58, n61) {
    v9.useDebugValue(e58);
    let r49 = k7(n61 ?? ne2);
    this.context[e58] = r49;
  }
  useStateSetter(e58) {
    let n61 = v9.useRef(void 0);
    return n61.current === void 0 && (n61.current = (r49) => {
      this.set(e58, r49);
    }), n61.current;
  }
  observe(e58, n61) {
    let r49;
    typeof e58 == "function" ? r49 = e58 : r49 = this.selectors[e58];
    let o62 = r49(this.state);
    return n61(o62, o62, this), this.subscribe((i38) => {
      let g20 = r49(i38);
      if (!Object.is(o62, g20)) {
        let s54 = o62;
        o62 = g20, n61(g20, s54, this);
      }
    });
  }
};
var Xt = globalThis.requestAnimationFrame;
var q7 = class {
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (e58) => {
    this.isScheduled = false;
    let n61 = this.callbacks, r49 = this.callbacksCount;
    if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, r49 > 0) for (let o62 = 0; o62 < n61.length; o62 += 1) n61[o62]?.(e58);
  };
  request(e58) {
    let n61 = this.nextId;
    return this.nextId += 1, this.callbacks.push(e58), this.callbacksCount += 1, !this.isScheduled && (requestAnimationFrame(this.tick), this.isScheduled = true), n61;
  }
  cancel(e58) {
    let n61 = e58 - this.startId;
    n61 < 0 || n61 >= this.callbacks.length || (this.callbacks[n61] = null, this.callbacksCount -= 1);
  }
};
var V3 = new q7();

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/components/FloatingRootStore.mjs
var p14 = { open: ut2((n61) => n61.open), transitionStatus: ut2((n61) => n61.transitionStatus), domReferenceElement: ut2((n61) => n61.domReferenceElement), referenceElement: ut2((n61) => n61.positionReference ?? n61.referenceElement), floatingElement: ut2((n61) => n61.floatingElement), floatingId: ut2((n61) => n61.floatingId) };
var i17 = class extends oe3 {
  constructor(t48) {
    let { syncOnly: e58, nested: o62, onOpenChange: c40, triggerElements: a38, ...s54 } = t48;
    super({ ...s54, positionReference: s54.referenceElement, domReferenceElement: s54.referenceElement }, { onOpenChange: c40, dataRef: { current: {} }, events: o21(), nested: o62, triggerElements: a38 }, p14), this.syncOnly = e58;
  }
  syncOpenEvent = (t48, e58) => {
    (!t48 || !this.state.open || e58 != null && f12(e58)) && (this.context.dataRef.current.openEvent = t48 ? e58 : void 0);
  };
  dispatchOpenChange = (t48, e58) => {
    this.syncOpenEvent(t48, e58.event);
    let o62 = { open: t48, reason: e58.reason, nativeEvent: e58.event, nested: this.context.nested, triggerElement: e58.trigger };
    this.context.events.emit("openchange", o62);
  };
  setOpen = (t48, e58) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(t48, e58);
      return;
    }
    this.dispatchOpenChange(t48, e58), this.context.onOpenChange?.(t48, e58);
  };
};

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
function h10(p31) {
  let { popupStore: n61, treatPopupAsFloatingElement: m25 = false, floatingRootContext: c40, floatingId: o62, nested: l19, onOpenChange: g20 } = p31, r49 = n61.useState("open"), t48 = n61.useState("activeTriggerElement"), s54 = n61.useState(m25 ? "popupElement" : "positionerElement"), d31 = n61.context.triggerElements, u37 = g20, i38 = f20.useRef(null);
  c40 === void 0 && i38.current === null && (i38.current = new i17({ open: r49, transitionStatus: void 0, referenceElement: t48, floatingElement: s54, triggerElements: d31, onOpenChange: u37, floatingId: o62, syncOnly: true, nested: l19 }));
  let e58 = c40 ?? i38.current;
  return n61.useSyncedValue("floatingId", o62), o2(() => {
    let a38 = { open: r49, floatingId: o62, referenceElement: t48, floatingElement: s54 };
    h4(t48) && (a38.domReferenceElement = t48), e58.state.positionReference === e58.state.referenceElement && (a38.positionReference = t48), e58.update(a38);
  }, [r49, o62, t48, s54, e58]), e58.context.onOpenChange = u37, e58.context.nested = l19, e58;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/utils/getEmptyRootContext.mjs
function r15() {
  return new i17({ open: false, transitionStatus: void 0, floatingElement: null, referenceElement: null, triggerElements: new b6(), floatingId: void 0, syncOnly: false, nested: false, onOpenChange: void 0 });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/popups/index.mjs
function I13(e58, t48, r49, n61) {
  return { left: e58, top: t48, right: r49, bottom: n61, x: e58, y: t48, width: r49 - e58, height: n61 - t48 };
}
function B9(e58) {
  return { left: e58.left, top: e58.top, right: e58.right, bottom: e58.bottom, width: e58.width, height: e58.height };
}
function M5(e58) {
  let t48 = [], r49, n61 = Number.POSITIVE_INFINITY, i38 = Number.POSITIVE_INFINITY, l19 = Number.NEGATIVE_INFINITY, u37 = Number.NEGATIVE_INFINITY;
  for (let o62 of Array.from(e58).sort((c40, p31) => c40.top - p31.top)) {
    if (n61 = Math.min(n61, o62.left), i38 = Math.min(i38, o62.top), l19 = Math.max(l19, o62.right), u37 = Math.max(u37, o62.bottom), !r49 || o62.top - r49.top > r49.height / 2) t48.push(B9(o62));
    else {
      let c40 = t48[t48.length - 1];
      c40.left = Math.min(c40.left, o62.left), c40.right = Math.max(c40.right, o62.right), c40.bottom = Math.max(c40.bottom, o62.bottom), c40.width = c40.right - c40.left, c40.height = c40.bottom - c40.top;
    }
    r49 = o62;
  }
  return { lines: t48, fallback: I13(n61, i38, l19, u37) };
}
function O6(e58, t48, r49) {
  return e58.findIndex((n61) => t48 > n61.left - 2 && t48 < n61.right + 2 && r49 > n61.top - 2 && r49 < n61.bottom + 2);
}
function P8(e58) {
  return I13(e58.left, e58.top, e58.right, e58.bottom);
}
function _7(e58, t48, r49) {
  let { lines: n61 } = M5(e58.getClientRects());
  if (n61.length < 2) return;
  let i38 = O6(n61, t48, r49);
  return { x: t48, y: r49, lineIndex: i38 === -1 ? void 0 : i38, element: e58 };
}
function A9(e58, t48, r49) {
  let { lines: n61, fallback: i38 } = M5(e58.getClientRects());
  if (n61.length < 2) return null;
  let l19 = r49?.x, u37 = r49?.y, o62 = t48[0];
  if (r49?.lineIndex != null && n61[r49.lineIndex]) return P8(n61[r49.lineIndex]);
  if (l19 != null && u37 != null) {
    let s54 = O6(n61, l19, u37);
    if (s54 !== -1) return P8(n61[s54]);
  }
  if (n61.length === 2 && n61[0].left > n61[1].right && l19 != null && u37 != null) return i38;
  if (o62 === "t" || o62 === "b") {
    let s54 = n61[0], f35 = n61[n61.length - 1], v17 = o62 === "t" ? s54 : f35;
    return I13(v17.left, s54.top, v17.right, f35.bottom);
  }
  let c40 = o62 === "l", p31 = n61[0].left, T17 = n61[0].right, h24 = c40 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY, R27 = n61[0], x21 = n61[0];
  for (let s54 of n61) {
    p31 = Math.min(p31, s54.left), T17 = Math.max(T17, s54.right);
    let f35 = c40 ? s54.left : s54.right;
    c40 && f35 < h24 || !c40 && f35 > h24 ? (h24 = f35, R27 = s54, x21 = s54) : f35 === h24 && (x21 = s54);
  }
  return I13(p31, R27.top, T17, x21.bottom);
}
function U4(e58) {
  return "contextElement" in e58 && e58.contextElement ? e58.contextElement : h4(e58) ? e58 : void 0;
}
function Q6(e58, t48) {
  function r49(i38) {
    V4(e58, i38.currentTarget, i38.clientX, i38.clientY);
  }
  function n61(i38) {
    t48 || r49(i38);
  }
  return { onFocus() {
    e58.current = void 0;
  }, onMouseEnter: r49, onMouseMove: n61 };
}
function V4(e58, t48, r49, n61) {
  let i38 = _7(t48, r49, n61);
  return e58.current = i38, i38;
}
function W9(e58) {
  return { name: "inline", async fn(t48) {
    let r49 = t48.elements.reference;
    if (typeof r49?.getClientRects != "function") return {};
    let n61 = U4(r49), i38 = e58.current, l19 = i38?.element === r49 || i38?.element === n61 ? i38 : void 0, u37 = A9(r49, t48.placement, l19);
    if (!u37 || typeof t48.platform.getElementRects != "function") return {};
    let o62 = await t48.platform.getElementRects({ reference: { contextElement: n61, getBoundingClientRect() {
      return u37;
    } }, floating: t48.elements.floating, strategy: t48.strategy });
    return t48.rects.reference.x === o62.reference.x && t48.rects.reference.y === o62.reference.y && t48.rects.reference.width === o62.reference.width && t48.rects.reference.height === o62.reference.height ? {} : { reset: { rects: o62 } };
  } };
}
var le2 = { tabIndex: -1, [t10]: "" };
function ce2(e58, t48, r49 = false) {
  let n61 = I3(), i38 = d15() != null, l19 = a17.useRef(null);
  e58 === void 0 && l19.current === null && (l19.current = t48(n61, i38));
  let u37 = e58 ?? l19.current;
  return h10({ popupStore: u37, treatPopupAsFloatingElement: r49, floatingRootContext: u37.state.floatingRootContext, floatingId: n61, nested: i38, onOpenChange: u37.setOpen }), { store: u37, internalStore: l19.current };
}
function J6(e58, t48) {
  let r49 = a17.useRef(null), n61 = a17.useRef(null);
  return a17.useCallback((i38) => {
    if (e58 === void 0) return;
    let l19 = false;
    if (r49.current !== null) {
      let u37 = r49.current, o62 = n61.current, c40 = t48.context.triggerElements.getById(u37);
      o62 && c40 === o62 && (t48.context.triggerElements.delete(u37), l19 = true), r49.current = null, n61.current = null;
    }
    if (i38 !== null && (r49.current = e58, n61.current = i38, t48.context.triggerElements.add(e58, i38), l19 = true), l19) {
      let u37 = t48.context.triggerElements.size;
      t48.select("open") && t48.state.triggerCount !== u37 && t48.set("triggerCount", u37);
    }
  }, [t48, e58]);
}
function ge2(e58, t48, r49) {
  let n61 = r49?.id ?? null;
  (n61 || t48) && (e58.activeTriggerId = n61, e58.activeTriggerElement = r49 ?? null);
}
function se4(e58, t48, r49, n61) {
  let i38 = r49.useState("isMountedByTrigger", e58), l19 = J6(e58, r49), u37 = E((o62) => {
    if (l19(o62), !o62) return;
    let c40 = r49.select("open"), p31 = r49.select("activeTriggerId");
    if (p31 === e58) {
      r49.update({ activeTriggerElement: o62, ...c40 ? n61 : null });
      return;
    }
    p31 == null && c40 && r49.update({ activeTriggerId: e58, activeTriggerElement: o62, ...n61 });
  });
  return o2(() => {
    i38 && r49.update({ activeTriggerElement: t48.current, ...n61 });
  }, [i38, r49, t48, ...Object.values(n61)]), { registerTrigger: u37, isMountedByThisTrigger: i38 };
}
function pe3(e58) {
  let t48 = e58.useState("open"), r49 = e58.useState("triggerCount");
  o2(() => {
    if (!t48) {
      e58.state.triggerCount !== 0 && e58.set("triggerCount", 0);
      return;
    }
    let n61 = e58.context.triggerElements.size, i38 = {};
    if (e58.state.triggerCount !== n61 && (i38.triggerCount = n61), !e58.select("activeTriggerId") && n61 === 1) {
      let l19 = e58.context.triggerElements.entries().next();
      if (!l19.done) {
        let [u37, o62] = l19.value;
        i38.activeTriggerId = u37, i38.activeTriggerElement = o62;
      }
    }
    (i38.triggerCount !== void 0 || i38.activeTriggerId !== void 0) && e58.update(i38);
  }, [t48, e58, r49]);
}
function fe2(e58, t48, r49) {
  let { mounted: n61, setMounted: i38, transitionStatus: l19 } = g2(e58);
  t48.useSyncedValues({ mounted: n61, transitionStatus: l19 });
  let u37 = E(() => {
    i38(false), t48.update({ activeTriggerId: null, activeTriggerElement: null, mounted: false, preventUnmountingOnClose: false }), r49?.(), t48.context.onOpenChangeComplete?.(false);
  }), o62 = t48.useState("preventUnmountingOnClose");
  return p10({ enabled: n61 && !e58 && !o62, open: e58, ref: t48.context.popupRef, onComplete() {
    e58 || u37();
  } }), { forceUnmount: u37, transitionStatus: l19 };
}
function ae3(e58, t48) {
  e58.useSyncedValues(t48), o2(() => () => {
    e58.update({ activeTriggerProps: o7, inactiveTriggerProps: o7, popupProps: o7 });
  }, [e58]);
}
function de2(e58, t48) {
  o2(() => {
    !t48 && e58.state.openMethod !== null && e58.set("openMethod", null);
  }, [t48, e58]), o2(() => () => {
    e58.state.openMethod !== null && e58.set("openMethod", null);
  }, [e58]);
}
var b6 = class {
  constructor() {
    this.elementsSet = /* @__PURE__ */ new Set(), this.idMap = /* @__PURE__ */ new Map();
  }
  add(t48, r49) {
    let n61 = this.idMap.get(t48);
    n61 !== r49 && (n61 !== void 0 && this.elementsSet.delete(n61), this.elementsSet.add(r49), this.idMap.set(t48, r49));
  }
  delete(t48) {
    let r49 = this.idMap.get(t48);
    r49 && (this.elementsSet.delete(r49), this.idMap.delete(t48));
  }
  hasElement(t48) {
    return this.elementsSet.has(t48);
  }
  hasMatchingElement(t48) {
    for (let r49 of this.elementsSet) if (t48(r49)) return true;
    return false;
  }
  getById(t48) {
    return this.idMap.get(t48);
  }
  entries() {
    return this.idMap.entries();
  }
  elements() {
    return this.elementsSet.values();
  }
  get size() {
    return this.idMap.size;
  }
};
function Ce() {
  return { open: false, openProp: void 0, mounted: false, transitionStatus: void 0, floatingRootContext: r15(), floatingId: void 0, triggerCount: 0, preventUnmountingOnClose: false, payload: void 0, activeTriggerId: null, activeTriggerElement: null, triggerIdProp: void 0, popupElement: null, positionerElement: null, activeTriggerProps: o7, inactiveTriggerProps: o7, popupProps: o7 };
}
function Se(e58, t48, r49 = false) {
  return new i17({ open: false, transitionStatus: void 0, floatingElement: null, referenceElement: null, triggerElements: e58, floatingId: t48, syncOnly: true, nested: r49, onOpenChange: void 0 });
}
var m10 = ut2((e58) => e58.triggerIdProp ?? e58.activeTriggerId);
var S9 = ut2((e58) => e58.openProp ?? e58.open);
var N7 = ut2((e58) => (e58.popupElement?.id ?? e58.floatingId) || void 0);
function w9(e58, t48) {
  return t48 !== void 0 && S9(e58) && m10(e58) === t48;
}
function H6(e58, t48) {
  return w9(e58, t48) ? true : t48 !== void 0 && S9(e58) && m10(e58) == null && e58.triggerCount === 1;
}
var Re3 = { open: S9, mounted: ut2((e58) => e58.mounted), transitionStatus: ut2((e58) => e58.transitionStatus), floatingRootContext: ut2((e58) => e58.floatingRootContext), triggerCount: ut2((e58) => e58.triggerCount), preventUnmountingOnClose: ut2((e58) => e58.preventUnmountingOnClose), payload: ut2((e58) => e58.payload), activeTriggerId: m10, activeTriggerElement: ut2((e58) => e58.mounted ? e58.activeTriggerElement : null), popupId: N7, isTriggerActive: ut2((e58, t48) => t48 !== void 0 && m10(e58) === t48), isOpenedByTrigger: ut2((e58, t48) => w9(e58, t48)), isMountedByTrigger: ut2((e58, t48) => t48 !== void 0 && m10(e58) === t48 && e58.mounted), triggerProps: ut2((e58, t48) => t48 ? e58.activeTriggerProps : e58.inactiveTriggerProps), triggerPopupId: ut2((e58, t48) => H6(e58, t48) ? N7(e58) : void 0), popupProps: ut2((e58) => e58.popupProps), popupElement: ut2((e58) => e58.popupElement), positionerElement: ut2((e58) => e58.positionerElement) };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/index.mjs
import * as Me from "react";
import * as tn from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useOnMount.mjs
import * as t15 from "react";
var c18 = [];
function n19(e58) {
  t15.useEffect(e58, c18);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/hooks/useHoverInteractionSharedState.mjs
var i18 = class e11 {
  constructor() {
    this.pointerType = void 0, this.interactedInside = false, this.handler = void 0, this.blockMouseMove = true, this.performedPointerEventsMutation = false, this.pointerEventsScopeElement = null, this.pointerEventsReferenceElement = null, this.pointerEventsFloatingElement = null, this.restTimeoutPending = false, this.openChangeTimeout = new n17(), this.restTimeout = new n17(), this.handleCloseOptions = void 0;
  }
  static create() {
    return new e11();
  }
  dispose = () => {
    this.openChangeTimeout.clear(), this.restTimeout.clear();
  };
  disposeEffect = () => this.dispose;
};
var o23 = /* @__PURE__ */ new WeakMap();
function E13(e58) {
  if (!e58.performedPointerEventsMutation) return;
  let t48 = e58.pointerEventsScopeElement;
  t48 && o23.get(t48) === e58 && (e58.pointerEventsScopeElement?.style.removeProperty("pointer-events"), e58.pointerEventsReferenceElement?.style.removeProperty("pointer-events"), e58.pointerEventsFloatingElement?.style.removeProperty("pointer-events"), o23.delete(t48)), e58.performedPointerEventsMutation = false, e58.pointerEventsScopeElement = null, e58.pointerEventsReferenceElement = null, e58.pointerEventsFloatingElement = null;
}
function d18(e58, t48) {
  let { scopeElement: n61, referenceElement: s54, floatingElement: l19 } = t48, r49 = o23.get(n61);
  r49 && r49 !== e58 && E13(r49), E13(e58), e58.performedPointerEventsMutation = true, e58.pointerEventsScopeElement = n61, e58.pointerEventsReferenceElement = s54, e58.pointerEventsFloatingElement = l19, o23.set(n61, e58), n61.style.pointerEvents = "none", s54.style.pointerEvents = "auto", l19.style.pointerEvents = "auto";
}
function S10(e58) {
  let t48 = e58.context.dataRef.current, n61 = u2(() => t48.hoverInteractionState ?? i18.create()).current;
  return t48.hoverInteractionState || (t48.hoverInteractionState = n61), n19(t48.hoverInteractionState.disposeEffect), t48.hoverInteractionState;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/floating-ui-react/index.mjs
import * as Ae3 from "react";
import * as rr from "react-dom";
import * as Re4 from "react";
import * as de3 from "react";
import * as Ye2 from "react";
function xr(e58, c40) {
  return c40 != null && !d10(c40) ? 0 : typeof e58 == "function" ? e58() : e58;
}
function xe2(e58, c40, t48) {
  let s54 = xr(e58, t48);
  return typeof s54 == "number" ? s54 : s54?.[c40];
}
function Ve2(e58) {
  return typeof e58 == "function" ? e58() : e58;
}
function Ge(e58, c40) {
  return c40 || e58 === "click" || e58 === "mousedown";
}
function at(e58) {
  return e58?.includes("mouse") && e58 !== "mousedown";
}
var dn = ye2.createContext({ hasProvider: false, timeoutMs: 0, delayRef: { current: 0 }, initialDelayRef: { current: 0 }, timeout: new n17(), currentIdRef: { current: null }, currentContextRef: { current: null } });
function Fr(e58) {
  let { children: c40, delay: t48, timeoutMs: s54 = 0 } = e58, n61 = ye2.useRef(t48), u37 = ye2.useRef(t48), i38 = ye2.useRef(null), l19 = ye2.useRef(null), O14 = p12();
  return wr(dn.Provider, { value: ye2.useMemo(() => ({ hasProvider: true, delayRef: n61, initialDelayRef: u37, currentIdRef: i38, timeoutMs: s54, currentContextRef: l19, timeout: O14 }), [s54, O14]), children: c40 });
}
function kr(e58, c40 = { open: false }) {
  let { open: t48 } = c40, s54 = "rootStore" in e58 ? e58.rootStore : e58, n61 = s54.useState("floatingId"), u37 = ye2.useContext(dn), { currentIdRef: i38, delayRef: l19, timeoutMs: O14, initialDelayRef: T17, currentContextRef: r49, hasProvider: R27, timeout: g20 } = u37, [y24, m25] = ye2.useState(false);
  return o2(() => {
    function p31() {
      m25(false), r49.current?.setIsInstantPhase(false), i38.current = null, r49.current = null, l19.current = T17.current;
    }
    if (i38.current && !t48 && i38.current === n61) {
      if (m25(false), O14) {
        let a38 = n61;
        return g20.start(O14, () => {
          s54.select("open") || i38.current && i38.current !== a38 || p31();
        }), () => {
          g20.clear();
        };
      }
      p31();
    }
  }, [t48, n61, i38, l19, O14, T17, r49, g20, s54]), o2(() => {
    if (!t48) return;
    let p31 = r49.current, a38 = i38.current;
    g20.clear(), r49.current = { onOpenChange: s54.setOpen, setIsInstantPhase: m25 }, i38.current = n61, l19.current = { open: 0, close: xe2(T17.current, "close") }, a38 !== null && a38 !== n61 ? (m25(true), p31?.setIsInstantPhase(true), p31?.onOpenChange(false, u4(s4.none))) : (m25(false), p31?.setIsInstantPhase(false));
  }, [t48, n61, s54, i38, l19, T17, r49, g20]), o2(() => () => {
    r49.current = null;
  }, [r49]), ye2.useMemo(() => ({ hasProvider: R27, delayRef: l19, isInstantPhase: y24 }), [R27, l19, y24]);
}
var ft3 = 0;
function Be2(e58, c40 = {}) {
  let { preventScroll: t48 = false, sync: s54 = false, shouldFocus: n61 } = c40;
  cancelAnimationFrame(ft3);
  function u37() {
    n61 && !n61() || e58?.focus({ preventScroll: t48 });
  }
  if (s54) return u37(), e5;
  let i38 = requestAnimationFrame(u37);
  return ft3 = i38, () => {
    ft3 === i38 && (cancelAnimationFrame(i38), ft3 = 0);
  };
}
var It = { inert: /* @__PURE__ */ new WeakMap(), "aria-hidden": /* @__PURE__ */ new WeakMap() };
var pn = "data-base-ui-inert";
var Mt = { inert: /* @__PURE__ */ new WeakSet(), "aria-hidden": /* @__PURE__ */ new WeakSet() };
var Ze2 = /* @__PURE__ */ new WeakMap();
var St = 0;
function Hr(e58) {
  return Mt[e58];
}
function En(e58) {
  return e58 ? p5(e58) ? e58.host : En(e58.parentNode) : null;
}
var Pt = (e58, c40) => c40.map((t48) => {
  if (e58.contains(t48)) return t48;
  let s54 = En(t48);
  return e58.contains(s54) ? s54 : null;
}).filter((t48) => t48 != null);
var gn = (e58) => {
  let c40 = /* @__PURE__ */ new Set();
  return e58.forEach((t48) => {
    let s54 = t48;
    for (; s54 && !c40.has(s54); ) c40.add(s54), s54 = s54.parentNode;
  }), c40;
};
var Rn = (e58, c40, t48) => {
  let s54 = [], n61 = (u37) => {
    !u37 || t48.has(u37) || Array.from(u37.children).forEach((i38) => {
      a9(i38) !== "script" && (c40.has(i38) ? n61(i38) : s54.push(i38));
    });
  };
  return n61(e58), s54;
};
function Vr(e58, c40, t48, s54, { mark: n61 = true, markerIgnoreElements: u37 = [] }) {
  let i38 = s54 ? "inert" : t48 ? "aria-hidden" : null, l19 = null, O14 = null, T17 = Pt(c40, e58), r49 = n61 ? Pt(c40, u37) : [], R27 = new Set(r49), g20 = n61 ? Rn(c40, gn(T17), new Set(T17)).filter((p31) => !R27.has(p31)) : [], y24 = [], m25 = [];
  if (i38) {
    let p31 = It[i38], a38 = Hr(i38);
    O14 = a38, l19 = p31;
    let E30 = Pt(c40, Array.from(c40.querySelectorAll("[aria-live]"))), o62 = T17.concat(E30);
    Rn(c40, gn(o62), new Set(o62)).forEach((C18) => {
      let F14 = C18.getAttribute(i38), P17 = F14 !== null && F14 !== "false", b14 = (p31.get(C18) || 0) + 1;
      p31.set(C18, b14), y24.push(C18), b14 === 1 && P17 && a38.add(C18), P17 || C18.setAttribute(i38, i38 === "inert" ? "" : "true");
    });
  }
  return n61 && g20.forEach((p31) => {
    let a38 = (Ze2.get(p31) || 0) + 1;
    Ze2.set(p31, a38), m25.push(p31), a38 === 1 && p31.setAttribute(pn, "");
  }), St += 1, () => {
    l19 && y24.forEach((p31) => {
      let E30 = (l19.get(p31) || 0) - 1;
      l19.set(p31, E30), E30 || (!O14?.has(p31) && i38 && p31.removeAttribute(i38), O14?.delete(p31));
    }), n61 && m25.forEach((p31) => {
      let a38 = (Ze2.get(p31) || 0) - 1;
      Ze2.set(p31, a38), a38 || p31.removeAttribute(pn);
    }), St -= 1, St || (It.inert = /* @__PURE__ */ new WeakMap(), It["aria-hidden"] = /* @__PURE__ */ new WeakMap(), Mt.inert = /* @__PURE__ */ new WeakSet(), Mt["aria-hidden"] = /* @__PURE__ */ new WeakSet(), Ze2 = /* @__PURE__ */ new WeakMap());
  };
}
function wt(e58, c40 = {}) {
  let { ariaHidden: t48 = false, inert: s54 = false, mark: n61 = true, markerIgnoreElements: u37 = [] } = c40, i38 = n13(e58[0]).body;
  return Vr(e58, i38, t48, s54, { mark: n61, markerIgnoreElements: u37 });
}
var vn = oe4.createContext(null);
var Lt = () => oe4.useContext(vn);
var Zr = e9("portal");
function Cn(e58 = {}) {
  let { ref: c40, container: t48, componentProps: s54 = o7, elementProps: n61 } = e58, u37 = I3(), l19 = Lt()?.portalNode, [O14, T17] = oe4.useState(null), [r49, R27] = oe4.useState(null), g20 = E((a38) => {
    a38 !== null && R27(a38);
  }), y24 = oe4.useRef(null);
  o2(() => {
    if (t48 === null) {
      y24.current && (y24.current = null, R27(null), T17(null));
      return;
    }
    if (u37 == null) return;
    let a38 = (t48 && (m4(t48) ? t48 : t48.current)) ?? l19 ?? document.body;
    if (a38 == null) {
      y24.current && (y24.current = null, R27(null), T17(null));
      return;
    }
    y24.current !== a38 && (y24.current = a38, R27(null), T17(a38));
  }, [t48, l19, u37]);
  let m25 = J("div", s54, { ref: [c40, g20], props: [{ id: u37, [Zr]: "" }, n61] });
  return { portalNode: r49, portalSubtree: O14 && m25 ? Dt.createPortal(m25, O14) : null };
}
var eo = oe4.forwardRef(function(c40, t48) {
  let { render: s54, className: n61, style: u37, children: i38, container: l19, renderGuards: O14, ...T17 } = c40, { portalNode: r49, portalSubtree: R27 } = Cn({ container: l19, ref: t48, componentProps: c40, elementProps: T17 }), g20 = oe4.useRef(null), y24 = oe4.useRef(null), m25 = oe4.useRef(null), p31 = oe4.useRef(null), [a38, E30] = oe4.useState(null), o62 = oe4.useRef(false), h24 = a38?.modal, C18 = a38?.open, F14 = typeof O14 == "boolean" ? O14 : !!a38 && !a38.modal && a38.open && !!r49;
  oe4.useEffect(() => {
    if (!r49 || h24) return;
    function b14(M20) {
      r49 && M20.relatedTarget && W4(M20) && (M20.type === "focusin" ? o62.current && (q2(r49), o62.current = false) : (_(r49), o62.current = true));
    }
    return r14(t11(r49, "focusin", b14, true), t11(r49, "focusout", b14, true));
  }, [r49, h24]), oe4.useEffect(() => {
    !r49 || C18 !== false || (q2(r49), o62.current = false);
  }, [C18, r49]);
  let P17 = oe4.useMemo(() => ({ beforeOutsideRef: g20, afterOutsideRef: y24, beforeInsideRef: m25, afterInsideRef: p31, portalNode: r49, setFocusManagerState: E30 }), [r49]);
  return Tn(oe4.Fragment, { children: [R27, Tn(vn.Provider, { value: P17, children: [F14 && r49 && kt(R8, { "data-type": "outside", ref: g20, onFocus: (b14) => {
    if (W4(b14, r49)) m25.current?.focus();
    else {
      let M20 = a38 ? a38.domReference : null;
      j5(M20)?.focus();
    }
  } }), F14 && r49 && kt("span", { "aria-owns": r49.id, style: T4 }), r49 && Dt.createPortal(i38, r49), F14 && r49 && kt(R8, { "data-type": "outside", ref: y24, onFocus: (b14) => {
    if (W4(b14, r49)) p31.current?.focus();
    else {
      let M20 = a38 ? a38.domReference : null;
      V(M20)?.focus(), a38?.closeOnFocusOut && a38?.onOpenChange(false, u4(s4.focusOut, b14.nativeEvent));
    }
  } })] })] });
});
function ho(e58, c40) {
  let t48 = i10(f10(e58));
  return e58 instanceof t48.KeyboardEvent ? "keyboard" : e58 instanceof t48.FocusEvent ? c40 || "keyboard" : "pointerType" in e58 ? e58.pointerType || "keyboard" : "touches" in e58 ? "touch" : e58 instanceof t48.MouseEvent ? c40 || (e58.detail === 0 ? "keyboard" : "mouse") : "";
}
var Nn = 20;
var Ne = [];
function _t2() {
  Ne = Ne.filter((e58) => e58.deref()?.isConnected);
}
function bo(e58) {
  _t2(), e58 && a9(e58) !== "body" && (Ne.push(new WeakRef(e58)), Ne.length > Nn && (Ne = Ne.slice(-Nn)));
}
function Vt() {
  return _t2(), Ne[Ne.length - 1]?.deref();
}
function yo(e58) {
  return e58 ? P4(e58) ? e58 : f14(e58)[0] || e58 : null;
}
function An(e58, c40) {
  if (e58.hasAttribute("tabindex") && !e58.hasAttribute("data-tabindex") || !c40.current.includes("floating") && !e58.getAttribute("role")?.includes("dialog")) return;
  let s54 = w3(e58).filter((u37) => {
    let i38 = u37.getAttribute("data-tabindex") || "";
    return P4(u37) || u37.hasAttribute("data-tabindex") && !i38.startsWith("-");
  }), n61 = e58.getAttribute("tabindex");
  c40.current.includes("floating") || s54.length === 0 ? n61 !== "0" && e58.setAttribute("tabindex", "0") : (n61 !== "-1" || e58.hasAttribute("data-tabindex") && e58.getAttribute("data-tabindex") !== "-1") && (e58.setAttribute("tabindex", "-1"), e58.setAttribute("data-tabindex", "-1"));
}
function To(e58) {
  let { context: c40, children: t48, disabled: s54 = false, initialFocus: n61 = true, returnFocus: u37 = true, restoreFocus: i38 = false, modal: l19 = true, closeOnFocusOut: O14 = true, openInteractionType: T17 = "", nextFocusableElement: r49, previousFocusableElement: R27, beforeContentFocusGuardRef: g20, externalTree: y24, getInsideElements: m25 } = e58, p31 = "rootStore" in c40 ? c40.rootStore : c40, a38 = p31.useState("open"), E30 = p31.useState("domReferenceElement"), o62 = p31.useState("floatingElement"), { events: h24, dataRef: C18 } = p31.context, F14 = E(() => C18.current.floatingContext?.nodeId), P17 = n61 === false, b14 = A5(E30) && P17, M20 = ge3.useRef(["content"]), K14 = I8(n61), X11 = I8(u37), j17 = I8(T17), w22 = f18(y24), x21 = Lt(), q15 = ge3.useRef(false), f35 = ge3.useRef(false), D14 = ge3.useRef(false), I26 = ge3.useRef(null), A17 = ge3.useRef(""), L20 = ge3.useRef(""), W14 = ge3.useRef(null), J18 = ge3.useRef(null), te7 = d(W14, g20, x21?.beforeInsideRef), _19 = d(J18, x21?.afterInsideRef), v17 = p12(), Y18 = p12(), H16 = R2(), ne12 = x21 != null, V12 = F2(o62), z17 = E((G18 = V12) => G18 ? f14(G18) : []), se12 = E(() => m25?.().filter((G18) => G18 != null) ?? []);
  ge3.useEffect(() => {
    if (s54 || !l19) return;
    function G18(ce8) {
      ce8.key === "Tab" && u9(V12, a12(n13(V12))) && z17().length === 0 && !b14 && p7(ce8);
    }
    let re8 = n13(V12);
    return t11(re8, "keydown", G18);
  }, [s54, V12, l19, b14, z17]), ge3.useEffect(() => {
    if (s54 || !a38) return;
    let G18 = n13(V12);
    function re8() {
      D14.current = false;
    }
    function ce8(Q16) {
      let $9 = f10(Q16), ee7 = se12(), U11 = u9(o62, $9) || u9(E30, $9) || u9(x21?.portalNode, $9) || ee7.some((ue7) => ue7 === $9 || u9(ue7, $9));
      D14.current = !U11, L20.current = Q16.pointerType || "keyboard", $9?.closest(`[${_4}]`) && (f35.current = true);
    }
    function ie10() {
      L20.current = "keyboard";
    }
    return r14(t11(G18, "pointerdown", ce8, true), t11(G18, "pointerup", re8, true), t11(G18, "pointercancel", re8, true), t11(G18, "keydown", ie10, true));
  }, [s54, o62, E30, V12, a38, x21, se12]), ge3.useEffect(() => {
    if (s54 || !O14) return;
    let G18 = n13(V12);
    function re8() {
      f35.current = true, Y18.start(0, () => {
        f35.current = false;
      });
    }
    function ce8(ee7) {
      let U11 = f10(ee7);
      P4(U11) && (I26.current = U11);
    }
    function ie10(ee7) {
      let U11 = ee7.relatedTarget, ue7 = ee7.currentTarget, le9 = f10(ee7);
      queueMicrotask(() => {
        let Oe5 = F14(), fe7 = p31.context.triggerElements, N20 = se12(), d31 = U11?.hasAttribute(e9("focus-guard")) && [W14.current, J18.current, x21?.beforeInsideRef.current, x21?.afterInsideRef.current, x21?.beforeOutsideRef.current, x21?.afterOutsideRef.current, n15(R27), n15(r49)].includes(U11), k17 = !(u9(E30, U11) || u9(o62, U11) || u9(U11, o62) || u9(x21?.portalNode, U11) || N20.some((S18) => S18 === U11 || u9(S18, U11)) || U11 != null && fe7.hasElement(U11) || fe7.hasMatchingElement((S18) => u9(S18, U11)) || d31 || w22 && (o14(w22.nodesRef.current, Oe5).find((S18) => u9(S18.context?.elements.floating, U11) || u9(S18.context?.elements.domReference, U11)) || u10(w22.nodesRef.current, Oe5).find((S18) => [S18.context?.elements.floating, F2(S18.context?.elements.floating)].includes(U11) || S18.context?.elements.domReference === U11)));
        if (ue7 === E30 && V12 && An(V12, M20), i38 && ue7 !== E30 && !Z(le9) && a12(G18) === G18.body) {
          if (g4(V12) && (V12.focus(), i38 === "popup")) {
            H16.request(() => {
              V12.focus();
            });
            return;
          }
          let S18 = z17(), B17 = I26.current, me7 = (B17 && S18.includes(B17) ? B17 : null) || S18[S18.length - 1] || V12;
          g4(me7) && me7.focus();
        }
        if (C18.current.insideReactTree) {
          C18.current.insideReactTree = false;
          return;
        }
        (b14 || !l19) && U11 && k17 && !f35.current && (b14 || U11 !== Vt()) && (q15.current = true, p31.setOpen(false, u4(s4.focusOut, ee7)));
      });
    }
    function Q16() {
      D14.current || (C18.current.insideReactTree = true, v17.start(0, () => {
        C18.current.insideReactTree = false;
      }));
    }
    let $9 = g4(E30) ? E30 : null;
    if (!(!o62 && !$9)) return r14($9 && t11($9, "focusout", ie10), $9 && t11($9, "pointerdown", re8), o62 && t11(o62, "focusin", ce8), o62 && t11(o62, "focusout", ie10), o62 && x21 && t11(o62, "focusout", Q16, true));
  }, [s54, E30, o62, V12, l19, w22, x21, p31, O14, i38, z17, b14, F14, M20, C18, v17, Y18, H16, r49, R27, se12]), ge3.useEffect(() => {
    if (s54 || !o62 || !a38) return;
    let G18 = Array.from(x21?.portalNode?.querySelectorAll(`[${e9("portal")}]`) || []), ce8 = (w22 ? u10(w22.nodesRef.current, F14()) : []).find((ue7) => A5(ue7.context?.elements.domReference || null))?.context?.elements.domReference, Q16 = [...[o62, ...G18, W14.current, J18.current, x21?.beforeOutsideRef.current, x21?.afterOutsideRef.current, ...se12()], ce8, n15(R27), n15(r49), b14 ? E30 : null].filter((ue7) => ue7 != null), $9 = wt(Q16, { ariaHidden: l19 || b14, mark: false }), ee7 = [o62, ...G18].filter((ue7) => ue7 != null), U11 = wt(ee7);
    return () => {
      U11(), $9();
    };
  }, [a38, s54, E30, o62, l19, x21, b14, w22, F14, r49, R27, se12]), o2(() => {
    if (!a38 || s54 || !g4(V12)) return;
    let G18 = n13(V12), re8 = a12(G18);
    queueMicrotask(() => {
      let ce8 = K14.current, ie10 = typeof ce8 == "function" ? ce8(j17.current || "") : ce8;
      if (ie10 === void 0 || ie10 === false || u9(V12, re8)) return;
      let $9 = null, ee7 = () => ($9 == null && ($9 = z17(V12)), $9[0] || V12), U11;
      ie10 === true || ie10 === null ? U11 = ee7() : U11 = n15(ie10), U11 = U11 || ee7();
      let ue7 = u9(V12, a12(G18));
      Be2(U11, { preventScroll: U11 === V12, shouldFocus() {
        if (ue7) return true;
        let le9 = a12(G18);
        return !(le9 !== U11 && u9(V12, le9));
      } });
    });
  }, [s54, a38, V12, z17, K14, j17]), o2(() => {
    if (s54 || !V12) return;
    let G18 = n13(V12), re8 = a12(G18);
    bo(re8);
    function ce8(Q16) {
      if (Q16.open || (A17.current = ho(Q16.nativeEvent, L20.current)), Q16.reason === s4.triggerHover && Q16.nativeEvent.type === "mouseleave" && (q15.current = true), Q16.reason === s4.outsidePress) if (Q16.nested) q15.current = false;
      else if (s11(Q16.nativeEvent) || c10(Q16.nativeEvent)) q15.current = false;
      else {
        let $9 = false;
        n13(V12).createElement("div").focus({ get preventScroll() {
          return $9 = true, false;
        } }), $9 ? q15.current = false : q15.current = true;
      }
    }
    h24.on("openchange", ce8);
    function ie10() {
      let Q16 = X11.current, $9 = typeof Q16 == "function" ? Q16(A17.current) : Q16;
      if ($9 === void 0 || $9 === false) return null;
      if ($9 === null && ($9 = true), typeof $9 == "boolean") return E30?.isConnected ? E30 : Vt() || null;
      let ee7 = E30?.isConnected ? E30 : Vt();
      return n15($9) || ee7 || null;
    }
    return () => {
      h24.off("openchange", ce8);
      let Q16 = a12(G18), $9 = se12(), ee7 = u9(o62, Q16) || $9.some((le9) => le9 === Q16 || u9(le9, Q16)) || w22 && o14(w22.nodesRef.current, F14(), false).some((le9) => u9(le9.context?.elements.floating, Q16)), U11 = X11.current, ue7 = ie10();
      queueMicrotask(() => {
        let le9 = yo(ue7), Oe5 = typeof U11 != "boolean";
        U11 && !q15.current && g4(le9) && (!(!Oe5 && le9 !== Q16 && Q16 !== G18.body) || ee7) && le9.focus({ preventScroll: true }), q15.current = false;
      });
    };
  }, [s54, o62, V12, X11, h24, w22, E30, F14, se12]), o2(() => {
    if (!c8 || a38 || !o62) return;
    let G18 = a12(n13(o62));
    !g4(G18) || !f11(G18) || u9(o62, G18) && G18.blur();
  }, [a38, o62]), o2(() => {
    if (!(s54 || !x21)) return x21.setFocusManagerState({ modal: l19, closeOnFocusOut: O14, open: a38, onOpenChange: p31.setOpen, domReference: E30 }), () => {
      x21.setFocusManagerState(null);
    };
  }, [s54, x21, l19, a38, p31, O14, E30]), o2(() => {
    if (!(s54 || !V12)) return An(V12, M20), () => {
      queueMicrotask(_t2);
    };
  }, [s54, V12, M20]);
  let pe9 = !s54 && (l19 ? !b14 : true) && (ne12 || l19);
  return Eo(ge3.Fragment, { children: [pe9 && Ln(R8, { "data-type": "inside", ref: te7, onFocus: (G18) => {
    if (l19) {
      let re8 = z17();
      Be2(re8[re8.length - 1]);
    } else x21?.portalNode && (q15.current = false, W4(G18, x21.portalNode) ? V(E30)?.focus() : n15(R27 ?? x21.beforeOutsideRef)?.focus());
  } }), t48, pe9 && Ln(R8, { "data-type": "inside", ref: _19, onFocus: (G18) => {
    l19 ? Be2(z17()[0]) : x21?.portalNode && (O14 && (q15.current = true), W4(G18, x21.portalNode) ? j5(E30)?.focus() : n15(r49 ?? x21.afterOutsideRef)?.focus());
  } })] });
}
function Mo(e58, c40 = {}) {
  let { enabled: t48 = true, event: s54 = "click", toggle: n61 = true, ignoreMouse: u37 = false, stickIfOpen: i38 = true, touchOpenDelay: l19 = 0, reason: O14 = s4.triggerPress } = c40, T17 = "rootStore" in e58 ? e58.rootStore : e58, r49 = T17.context.dataRef, R27 = tt2.useRef(void 0), g20 = R2(), y24 = p12(), m25 = tt2.useMemo(() => {
    function p31(E30, o62, h24, C18) {
      let F14 = u4(O14, o62, h24);
      E30 && C18 === "touch" && l19 > 0 ? y24.start(l19, () => {
        T17.setOpen(true, F14);
      }) : T17.setOpen(E30, F14);
    }
    function a38(E30, o62, h24) {
      let C18 = r49.current.openEvent, F14 = T17.select("domReferenceElement") !== o62;
      return E30 && F14 || !E30 || !n61 ? true : C18 && i38 ? !h24(C18.type) : false;
    }
    return { onPointerDown(E30) {
      R27.current = E30.pointerType;
    }, onMouseDown(E30) {
      let o62 = R27.current, h24 = E30.nativeEvent, C18 = T17.select("open");
      if (E30.button !== 0 || s54 === "click" || d10(o62, true) && u37) return;
      let F14 = a38(C18, E30.currentTarget, (M20) => M20 === "click" || M20 === "mousedown"), P17 = f10(h24);
      if (f11(P17)) {
        p31(F14, h24, P17, o62);
        return;
      }
      let b14 = E30.currentTarget;
      g20.request(() => {
        p31(F14, h24, b14, o62);
      });
    }, onClick(E30) {
      if (s54 === "mousedown-only") return;
      let o62 = R27.current;
      if (s54 === "mousedown" && o62) {
        R27.current = void 0;
        return;
      }
      if (d10(o62, true) && u37) return;
      let h24 = T17.select("open"), C18 = a38(h24, E30.currentTarget, (F14) => F14 === "click" || F14 === "mousedown" || F14 === "keydown" || F14 === "keyup");
      p31(C18, E30.nativeEvent, E30.currentTarget, o62);
    }, onKeyDown() {
      R27.current = void 0;
    } };
  }, [r49, s54, u37, O14, T17, i38, n61, g20, y24, l19]);
  return tt2.useMemo(() => t48 ? { reference: m25 } : o7, [t48, m25]);
}
function No(e58, c40) {
  let t48 = null, s54 = null, n61 = false;
  return { contextElement: e58 || void 0, getBoundingClientRect() {
    let u37 = e58?.getBoundingClientRect() || { width: 0, height: 0, x: 0, y: 0 }, i38 = c40.axis === "x" || c40.axis === "both", l19 = c40.axis === "y" || c40.axis === "both", O14 = ["mouseenter", "mousemove"].includes(c40.dataRef.current.openEvent?.type || "") && c40.pointerType !== "touch", T17 = u37.width, r49 = u37.height, R27 = u37.x, g20 = u37.y;
    return t48 == null && c40.x && i38 && (t48 = u37.x - c40.x), s54 == null && c40.y && l19 && (s54 = u37.y - c40.y), R27 -= t48 || 0, g20 -= s54 || 0, T17 = 0, r49 = 0, !n61 || O14 ? (T17 = c40.axis === "y" ? u37.width : 0, r49 = c40.axis === "x" ? u37.height : 0, R27 = i38 && c40.x != null ? c40.x : R27, g20 = l19 && c40.y != null ? c40.y : g20) : n61 && !O14 && (r49 = c40.axis === "x" ? u37.height : r49, T17 = c40.axis === "y" ? u37.width : T17), n61 = true, { width: T17, height: r49, x: R27, y: g20, top: g20, right: R27 + T17, bottom: g20 + r49, left: R27 };
  } };
}
function Kn(e58) {
  return e58 != null && e58.clientX != null;
}
function Ao(e58, c40 = {}) {
  let { enabled: t48 = true, axis: s54 = "both" } = c40, n61 = "rootStore" in e58 ? e58.rootStore : e58, u37 = n61.useState("open"), i38 = n61.useState("floatingElement"), l19 = n61.useState("domReferenceElement"), O14 = n61.context.dataRef, T17 = Te.useRef(false), r49 = Te.useRef(null), [R27, g20] = Te.useState(), [y24, m25] = Te.useState([]), p31 = E((C18) => {
    n61.set("positionReference", C18);
  }), a38 = E((C18, F14, P17) => {
    T17.current || O14.current.openEvent && !Kn(O14.current.openEvent) || n61.set("positionReference", No(P17 ?? l19, { x: C18, y: F14, axis: s54, dataRef: O14, pointerType: R27 }));
  }), E30 = E((C18) => {
    u37 ? r49.current || (a38(C18.clientX, C18.clientY, C18.currentTarget), m25([])) : a38(C18.clientX, C18.clientY, C18.currentTarget);
  }), o62 = d10(R27) ? i38 : u37;
  Te.useEffect(() => {
    if (!t48) {
      p31(l19);
      return;
    }
    if (!o62) return;
    function C18() {
      r49.current?.(), r49.current = null;
    }
    let F14 = i10(i38);
    function P17(b14) {
      let M20 = f10(b14);
      u9(i38, M20) ? C18() : a38(b14.clientX, b14.clientY);
    }
    return !O14.current.openEvent || Kn(O14.current.openEvent) ? r49.current = t11(F14, "mousemove", P17) : p31(l19), C18;
  }, [o62, t48, i38, O14, l19, n61, a38, p31, y24]), Te.useEffect(() => () => {
    n61.set("positionReference", null);
  }, [n61]), Te.useEffect(() => {
    t48 && !i38 && (T17.current = false);
  }, [t48, i38]), Te.useEffect(() => {
    !t48 && u37 && (T17.current = true);
  }, [t48, u37]);
  let h24 = Te.useMemo(() => {
    function C18(F14) {
      g20(F14.pointerType);
    }
    return { onPointerDown: C18, onPointerEnter: C18, onMouseMove: E30, onMouseEnter: E30 };
  }, [E30]);
  return Te.useMemo(() => t48 ? { reference: h24, trigger: h24 } : {}, [t48, h24]);
}
var qo = { intentional: "onClick", sloppy: "onPointerDown" };
function Uo() {
  return false;
}
function jo(e58) {
  return { escapeKey: typeof e58 == "boolean" ? e58 : e58?.escapeKey ?? false, outsidePress: typeof e58 == "boolean" ? e58 : e58?.outsidePress ?? true };
}
function zo(e58, c40 = {}) {
  let { enabled: t48 = true, escapeKey: s54 = true, outsidePress: n61 = true, outsidePressEvent: u37 = "sloppy", referencePress: i38 = Uo, referencePressEvent: l19 = "sloppy", bubbles: O14, externalTree: T17 } = c40, r49 = "rootStore" in e58 ? e58.rootStore : e58, R27 = r49.useState("open"), g20 = r49.useState("floatingElement"), { dataRef: y24 } = r49.context, m25 = f18(T17), p31 = E(typeof n61 == "function" ? n61 : () => false), a38 = typeof n61 == "function" ? p31 : n61, E30 = a38 !== false, o62 = E(() => u37), { escapeKey: h24, outsidePress: C18 } = jo(O14), F14 = ve2.useRef(false), P17 = ve2.useRef(false), b14 = ve2.useRef(false), M20 = ve2.useRef(false), K14 = ve2.useRef(""), X11 = ve2.useRef(null), j17 = p12(), w22 = p12(), x21 = E(() => {
    w22.clear(), y24.current.insideReactTree = false;
  }), q15 = E((_19) => {
    let v17 = y24.current.floatingContext?.nodeId;
    return (m25 ? o14(m25.nodesRef.current, v17) : []).some((H16) => H16.context?.open && !H16.context.dataRef.current[_19]);
  }), f35 = E((_19) => g6(_19, r49.select("floatingElement")) || g6(_19, r49.select("domReferenceElement"))), D14 = E((_19) => {
    i38() && r49.setOpen(false, u4(s4.triggerPress, _19.nativeEvent));
  }), I26 = E((_19) => {
    if (!R27 || !t48 || !s54 || _19.key !== "Escape" || M20.current || !h24 && q15("__escapeKeyBubbles")) return;
    let v17 = n12(_19) ? _19.nativeEvent : _19, Y18 = u4(s4.escapeKey, v17);
    r49.setOpen(false, Y18), Y18.isCanceled || _19.preventDefault(), !h24 && !Y18.isPropagationAllowed && _19.stopPropagation();
  }), A17 = E(() => {
    y24.current.insideReactTree = true, w22.start(0, x21);
  }), L20 = E((_19) => {
    if (!R27 || !t48 || _19.button !== 0) return;
    let v17 = f10(_19.nativeEvent);
    u9(r49.select("floatingElement"), v17) && (F14.current || (F14.current = true, P17.current = false));
  }), W14 = E((_19) => {
    !R27 || !t48 || (_19.defaultPrevented || _19.nativeEvent.defaultPrevented) && F14.current && (P17.current = true);
  });
  ve2.useEffect(() => {
    if (!R27 || !t48) return;
    y24.current.__escapeKeyBubbles = h24, y24.current.__outsidePressBubbles = C18;
    let _19 = new n17(), v17 = new n17();
    function Y18() {
      _19.clear(), M20.current = true;
    }
    function H16() {
      _19.start(R3() ? 5 : 0, () => {
        M20.current = false;
      });
    }
    function ne12() {
      b14.current = true, v17.start(0, () => {
        b14.current = false;
      });
    }
    function V12() {
      F14.current = false, P17.current = false;
    }
    function z17() {
      let d31 = K14.current, k17 = d31 === "pen" || !d31 ? "mouse" : d31, S18 = o62(), B17 = typeof S18 == "function" ? S18() : S18;
      return typeof B17 == "string" ? B17 : B17[k17];
    }
    function se12(d31) {
      let k17 = z17();
      return k17 === "intentional" && d31.type !== "click" || k17 === "sloppy" && d31.type === "click";
    }
    function pe9(d31) {
      let k17 = y24.current.floatingContext?.nodeId, S18 = m25 && o14(m25.nodesRef.current, k17).some((B17) => g6(d31, B17.context?.elements.floating));
      return f35(d31) || S18;
    }
    function G18(d31) {
      if (se12(d31)) {
        d31.type !== "click" && !f35(d31) && (v17.clear(), b14.current = false), x21();
        return;
      }
      if (y24.current.insideReactTree) {
        x21();
        return;
      }
      let k17 = f10(d31), S18 = `[${e9("inert")}]`, B17 = h4(k17) ? k17.getRootNode() : null, me7 = Array.from((p5(B17) ? B17 : n13(r49.select("floatingElement"))).querySelectorAll(S18)), He10 = r49.context.triggerElements;
      if (k17 && (He10.hasElement(k17) || He10.hasMatchingElement((he6) => u9(he6, k17)))) return;
      let Ie7 = h4(k17) ? k17 : null;
      for (; Ie7 && !N3(Ie7); ) {
        let he6 = f7(Ie7);
        if (N3(he6) || !h4(he6)) break;
        Ie7 = he6;
      }
      if (!(me7.length && h4(k17) && !E5(k17) && !u9(k17, r49.select("floatingElement")) && me7.every((he6) => !u9(Ie7, he6)))) {
        if (g4(k17) && !("touches" in d31)) {
          let he6 = N3(k17), be8 = b3(k17), Fe5 = /auto|scroll/, Ot4 = he6 || Fe5.test(be8.overflowX), hr2 = he6 || Fe5.test(be8.overflowY), br = Ot4 && k17.clientWidth > 0 && k17.scrollWidth > k17.clientWidth, yr2 = hr2 && k17.clientHeight > 0 && k17.scrollHeight > k17.clientHeight, Tr = be8.direction === "rtl", vr = yr2 && (Tr ? d31.offsetX <= k17.offsetWidth - k17.clientWidth : d31.offsetX > k17.clientWidth), Cr = br && d31.offsetY > k17.clientHeight;
          if (vr || Cr) return;
        }
        if (!pe9(d31)) {
          if (z17() === "intentional" && b14.current) {
            v17.clear(), b14.current = false;
            return;
          }
          typeof a38 == "function" && !a38(d31) || q15("__outsidePressBubbles") || (r49.setOpen(false, u4(s4.outsidePress, d31)), x21());
        }
      }
    }
    function re8(d31) {
      z17() !== "sloppy" || d31.pointerType === "touch" || !r49.select("open") || !t48 || f35(d31) || G18(d31);
    }
    function ce8(d31) {
      if (z17() !== "sloppy" || !r49.select("open") || !t48 || f35(d31)) return;
      let k17 = d31.touches[0];
      k17 && (X11.current = { startTime: Date.now(), startX: k17.clientX, startY: k17.clientY, dismissOnTouchEnd: false, dismissOnMouseDown: true }, j17.start(1e3, () => {
        X11.current && (X11.current.dismissOnTouchEnd = false, X11.current.dismissOnMouseDown = false);
      }));
    }
    function ie10(d31, k17) {
      let S18 = f10(d31);
      if (!S18) return;
      let B17 = t11(S18, d31.type, () => {
        k17(d31), B17();
      });
    }
    function Q16(d31) {
      K14.current = "touch", ie10(d31, ce8);
    }
    function $9(d31) {
      j17.clear(), d31.type === "pointerdown" && (K14.current = d31.pointerType), !(d31.type === "mousedown" && X11.current && !X11.current.dismissOnMouseDown) && ie10(d31, (k17) => {
        k17.type === "pointerdown" ? re8(k17) : G18(k17);
      });
    }
    function ee7(d31) {
      if (!F14.current) return;
      let k17 = P17.current;
      if (V12(), z17() === "intentional") {
        if (d31.type === "pointercancel") {
          k17 && ne12();
          return;
        }
        if (!pe9(d31)) {
          if (k17) {
            ne12();
            return;
          }
          typeof a38 == "function" && !a38(d31) || (v17.clear(), b14.current = true, x21());
        }
      }
    }
    function U11(d31) {
      if (z17() !== "sloppy" || !X11.current || f35(d31)) return;
      let k17 = d31.touches[0];
      if (!k17) return;
      let S18 = Math.abs(k17.clientX - X11.current.startX), B17 = Math.abs(k17.clientY - X11.current.startY), me7 = Math.sqrt(S18 * S18 + B17 * B17);
      me7 > 5 && (X11.current.dismissOnTouchEnd = true), me7 > 10 && (G18(d31), j17.clear(), X11.current = null);
    }
    function ue7(d31) {
      ie10(d31, U11);
    }
    function le9(d31) {
      z17() !== "sloppy" || !X11.current || f35(d31) || (X11.current.dismissOnTouchEnd && G18(d31), j17.clear(), X11.current = null);
    }
    function Oe5(d31) {
      ie10(d31, le9);
    }
    let fe7 = n13(g20), N20 = r14(s54 && r14(t11(fe7, "keydown", I26), t11(fe7, "compositionstart", Y18), t11(fe7, "compositionend", H16)), E30 && r14(t11(fe7, "click", $9, true), t11(fe7, "pointerdown", $9, true), t11(fe7, "pointerup", ee7, true), t11(fe7, "pointercancel", ee7, true), t11(fe7, "mousedown", $9, true), t11(fe7, "mouseup", ee7, true), t11(fe7, "touchstart", Q16, true), t11(fe7, "touchmove", ue7, true), t11(fe7, "touchend", Oe5, true)));
    return () => {
      N20(), _19.clear(), v17.clear(), V12(), b14.current = false;
    };
  }, [y24, g20, s54, E30, a38, R27, t48, h24, C18, I26, x21, o62, q15, f35, m25, r49, j17]), ve2.useEffect(x21, [a38, x21]);
  let J18 = ve2.useMemo(() => ({ onKeyDown: I26, [qo[l19]]: D14, ...l19 !== "intentional" && { onClick: D14 } }), [I26, D14, l19]), te7 = ve2.useMemo(() => ({ onKeyDown: I26, onPointerDown: W14, onMouseDown: W14, onClickCapture: A17, onMouseDownCapture(_19) {
    A17(), L20(_19);
  }, onPointerDownCapture(_19) {
    A17(), L20(_19);
  }, onMouseUpCapture: A17, onTouchEndCapture: A17, onTouchMoveCapture: A17 }), [I26, A17, L20, W14]);
  return ve2.useMemo(() => t48 ? { reference: J18, floating: te7, trigger: J18 } : {}, [t48, J18, te7]);
}
function jt(e58) {
  let { open: c40 = false, onOpenChange: t48, elements: s54 = {} } = e58, n61 = I3(), u37 = d15() != null, i38 = u2(() => new i17({ open: c40, transitionStatus: void 0, onOpenChange: t48, referenceElement: s54.reference ?? null, floatingElement: s54.floating ?? null, triggerElements: new b6(), floatingId: n61, syncOnly: false, nested: u37 })).current;
  return o2(() => {
    let l19 = { open: c40, floatingId: n61 };
    s54.reference !== void 0 && (l19.referenceElement = s54.reference, l19.domReferenceElement = h4(s54.reference) ? s54.reference : null), s54.floating !== void 0 && (l19.floatingElement = s54.floating), i38.update(l19);
  }, [c40, n61, s54.reference, s54.floating, i38]), i38.context.onOpenChange = t48, i38.context.nested = u37, i38;
}
function ss(e58 = {}) {
  let { nodeId: c40, externalTree: t48 } = e58, s54 = jt(e58), n61 = e58.rootContext || s54, u37 = n61.useState("referenceElement"), i38 = n61.useState("floatingElement"), l19 = n61.useState("domReferenceElement"), O14 = n61.useState("open"), T17 = n61.useState("floatingId"), [r49, R27] = Ee.useState(null), [g20, y24] = Ee.useState(void 0), [m25, p31] = Ee.useState(void 0), a38 = Ee.useRef(null), E30 = f18(t48), o62 = Ee.useMemo(() => ({ reference: u37, floating: i38, domReference: l19 }), [u37, i38, l19]), h24 = (0, react_dom_2_1_exports.useFloating)({ ...e58, elements: { ...o62, ...r49 && { reference: r49 } } }), C18 = h4(g20) ? g20 : null, F14 = m25 === void 0 ? n61.state.floatingElement : m25;
  n61.useSyncedValue("referenceElement", g20 ?? null), n61.useSyncedValue("domReferenceElement", g20 === void 0 ? l19 : C18), n61.useSyncedValue("floatingElement", F14);
  let P17 = Ee.useCallback((w22) => {
    let x21 = h4(w22) ? { getBoundingClientRect: () => w22.getBoundingClientRect(), getClientRects: () => w22.getClientRects(), contextElement: w22 } : w22;
    R27(x21), h24.refs.setReference(x21);
  }, [h24.refs]), b14 = Ee.useCallback((w22) => {
    (h4(w22) || w22 === null) && (a38.current = w22, y24(w22)), (h4(h24.refs.reference.current) || h24.refs.reference.current === null || w22 !== null && !h4(w22)) && h24.refs.setReference(w22);
  }, [h24.refs, y24]), M20 = Ee.useCallback((w22) => {
    p31(w22), h24.refs.setFloating(w22);
  }, [h24.refs]), K14 = Ee.useMemo(() => ({ ...h24.refs, setReference: b14, setFloating: M20, setPositionReference: P17, domReference: a38 }), [h24.refs, b14, M20, P17]), X11 = Ee.useMemo(() => ({ ...h24.elements, domReference: l19 }), [h24.elements, l19]), j17 = Ee.useMemo(() => ({ ...h24, dataRef: n61.context.dataRef, open: O14, onOpenChange: n61.setOpen, events: n61.context.events, floatingId: T17, refs: K14, elements: X11, nodeId: c40, rootStore: n61 }), [h24, K14, X11, c40, n61, O14, T17]);
  return o2(() => {
    l19 && (a38.current = l19);
  }, [l19]), o2(() => {
    n61.context.dataRef.current.floatingContext = j17;
    let w22 = E30?.nodesRef.current.find((x21) => x21.id === c40);
    w22 && (w22.context = j17);
  }), Ee.useMemo(() => ({ ...h24, context: j17, refs: K14, elements: X11, rootStore: n61 }), [h24, K14, X11, j17, n61]);
}
var Jt = x3 && m5;
function Rs(e58, c40 = {}) {
  let { enabled: t48 = true, delay: s54 } = c40, n61 = "rootStore" in e58 ? e58.rootStore : e58, { events: u37, dataRef: i38 } = n61.context, l19 = Me.useRef(false), O14 = Me.useRef(null), T17 = Me.useRef(true), r49 = p12();
  Me.useEffect(() => {
    let g20 = n61.select("domReferenceElement");
    if (!t48) return;
    let y24 = i10(g20);
    function m25() {
      let E30 = n61.select("domReferenceElement");
      !n61.select("open") && g4(E30) && E30 === a12(n13(E30)) && (l19.current = true);
    }
    function p31() {
      T17.current = true;
    }
    function a38() {
      T17.current = false;
    }
    return r14(t11(y24, "blur", m25), Jt && t11(y24, "keydown", p31, true), Jt && t11(y24, "pointerdown", a38, true));
  }, [n61, t48]), Me.useEffect(() => {
    if (!t48) return;
    function g20(y24) {
      if (y24.reason === s4.triggerPress || y24.reason === s4.escapeKey) {
        let m25 = n61.select("domReferenceElement");
        h4(m25) && (O14.current = m25, l19.current = true);
      }
    }
    return u37.on("openchange", g20), () => {
      u37.off("openchange", g20);
    };
  }, [u37, t48, n61]);
  let R27 = Me.useMemo(() => {
    function g20() {
      l19.current = false, O14.current = null;
    }
    return { onMouseLeave() {
      g20();
    }, onFocus(y24) {
      let m25 = y24.currentTarget;
      if (l19.current) {
        if (O14.current === m25) return;
        g20();
      }
      let p31 = f10(y24.nativeEvent);
      if (h4(p31)) {
        if (Jt && !y24.relatedTarget) {
          if (!T17.current && !f11(p31)) return;
        } else if (!y4(p31)) return;
      }
      let a38 = d9(y24.relatedTarget, n61.context.triggerElements), { nativeEvent: E30, currentTarget: o62 } = y24, h24 = typeof s54 == "function" ? s54() : s54;
      if (n61.select("open") && a38 || h24 === 0 || h24 === void 0) {
        n61.setOpen(true, u4(s4.triggerFocus, E30, o62));
        return;
      }
      r49.start(h24, () => {
        l19.current || n61.setOpen(true, u4(s4.triggerFocus, E30, o62));
      });
    }, onBlur(y24) {
      g20();
      let m25 = y24.relatedTarget, p31 = y24.nativeEvent, a38 = h4(m25) && m25.hasAttribute(e9("focus-guard")) && m25.getAttribute("data-type") === "outside";
      r49.start(0, () => {
        let E30 = n61.select("domReferenceElement"), o62 = a12(n13(E30));
        !m25 && o62 === E30 || u9(i38.current.floatingContext?.refs.floating.current, o62) || u9(E30, o62) || a38 || d9(m25 ?? o62, n61.context.triggerElements) || n61.setOpen(false, u4(s4.triggerFocus, p31));
      });
    } };
  }, [i38, s54, n61, r49]);
  return Me.useMemo(() => t48 ? { reference: R27, trigger: R27 } : {}, [t48, R27]);
}
function Ps(e58, c40 = {}) {
  let { enabled: t48 = true, closeDelay: s54 = 0, nodeId: n61 } = c40, u37 = "rootStore" in e58 ? e58.rootStore : e58, i38 = u37.useState("open"), l19 = u37.useState("floatingElement"), O14 = u37.useState("domReferenceElement"), { dataRef: T17 } = u37.context, r49 = f18(), R27 = d15(), g20 = S10(u37), y24 = p12(), m25 = E(() => Ge(T17.current.openEvent?.type, g20.interactedInside)), p31 = E(() => at(T17.current.openEvent?.type)), a38 = E(() => {
    E13(g20);
  });
  o2(() => {
    i38 || (g20.pointerType = void 0, g20.restTimeoutPending = false, g20.interactedInside = false, a38());
  }, [i38, g20, a38]), tn.useEffect(() => a38, [a38]), o2(() => {
    if (t48 && i38 && g20.handleCloseOptions?.blockPointerEvents && p31() && h4(O14) && l19) {
      let E30 = O14, o62 = l19, h24 = n13(l19), C18 = r49?.nodesRef.current.find((M20) => M20.id === R27)?.context?.elements.floating;
      C18 && (C18.style.pointerEvents = "");
      let F14 = g20.pointerEventsScopeElement !== o62 ? g20.pointerEventsScopeElement : null, P17 = C18 !== o62 ? C18 : null, b14 = g20.handleCloseOptions?.getScope?.() ?? F14 ?? P17 ?? E30.closest("[data-rootownerid]") ?? h24.body;
      return d18(g20, { scopeElement: b14, referenceElement: E30, floatingElement: o62 }), () => {
        a38();
      };
    }
  }, [t48, i38, O14, l19, g20, p31, r49, R27, a38]), tn.useEffect(() => {
    if (!t48) return;
    function E30() {
      return !!(r49 && R27 && o14(r49.nodesRef.current, R27).length > 0);
    }
    function o62(M20) {
      let K14 = xe2(s54, "close", g20.pointerType), X11 = () => {
        u37.setOpen(false, u4(s4.triggerHover, M20)), r49?.events.emit("floating.closed", M20);
      };
      K14 ? g20.openChangeTimeout.start(K14, X11) : (g20.openChangeTimeout.clear(), X11());
    }
    function h24(M20) {
      let K14 = f10(M20);
      if (!T(K14)) {
        g20.interactedInside = false;
        return;
      }
      g20.interactedInside = K14?.closest("[aria-haspopup]") != null;
    }
    function C18() {
      g20.openChangeTimeout.clear(), y24.clear(), r49?.events.off("floating.closed", P17), a38();
    }
    function F14(M20) {
      if (E30() && r49) {
        r49.events.on("floating.closed", P17);
        return;
      }
      if (d9(M20.relatedTarget, u37.context.triggerElements)) return;
      let K14 = T17.current.floatingContext?.nodeId ?? n61, X11 = M20.relatedTarget;
      if (!(r49 && K14 && h4(X11) && o14(r49.nodesRef.current, K14, false).some((w22) => u9(w22.context?.elements.floating, X11)))) {
        if (g20.handler) {
          g20.handler(M20);
          return;
        }
        a38(), m25() || o62(M20);
      }
    }
    function P17(M20) {
      !r49 || !R27 || E30() || y24.start(0, () => {
        r49.events.off("floating.closed", P17), u37.setOpen(false, u4(s4.triggerHover, M20)), r49.events.emit("floating.closed", M20);
      });
    }
    let b14 = l19;
    return r14(b14 && t11(b14, "mouseenter", C18), b14 && t11(b14, "mouseleave", F14), b14 && t11(b14, "pointerdown", h24, true), () => {
      r49?.events.off("floating.closed", P17);
    });
  }, [t48, l19, u37, T17, s54, n61, m25, a38, g20, r49, R27, y24]);
}
var Ls = { current: null };
function Ns(e58, c40 = {}) {
  let { enabled: t48 = true, delay: s54 = 0, handleClose: n61 = null, mouseOnly: u37 = false, restMs: i38 = 0, move: l19 = true, triggerElementRef: O14 = Ls, externalTree: T17, isActiveTrigger: r49 = true, getHandleCloseContext: R27, isClosing: g20, shouldOpen: y24 } = c40, m25 = "rootStore" in e58 ? e58.rootStore : e58, { dataRef: p31, events: a38 } = m25.context, E30 = f18(T17), o62 = S10(m25), h24 = Ae3.useRef(false), C18 = I8(n61), F14 = I8(s54), P17 = I8(i38), b14 = I8(t48), M20 = I8(y24), K14 = I8(g20), X11 = E(() => Ge(p31.current.openEvent?.type, o62.interactedInside)), j17 = E(() => M20.current?.() !== false), w22 = E((f35, D14, I26) => {
    let A17 = m25.context.triggerElements;
    if (A17.hasElement(D14)) return !f35 || !u9(f35, D14);
    if (!h4(I26)) return false;
    let L20 = I26;
    return A17.hasMatchingElement((W14) => u9(W14, L20)) && (!f35 || !u9(f35, L20));
  }), x21 = E(() => {
    if (!o62.handler) return;
    n13(m25.select("domReferenceElement")).removeEventListener("mousemove", o62.handler), o62.handler = void 0;
  }), q15 = E(() => {
    E13(o62);
  });
  return r49 && (o62.handleCloseOptions = C18.current?.__options), Ae3.useEffect(() => x21, [x21]), Ae3.useEffect(() => {
    if (!t48) return;
    function f35(D14) {
      D14.open ? h24.current = false : (h24.current = D14.reason === s4.triggerHover, x21(), o62.openChangeTimeout.clear(), o62.restTimeout.clear(), o62.blockMouseMove = true, o62.restTimeoutPending = false);
    }
    return a38.on("openchange", f35), () => {
      a38.off("openchange", f35);
    };
  }, [t48, a38, o62, x21]), Ae3.useEffect(() => {
    if (!t48) return;
    function f35(L20, W14 = true) {
      let J18 = xe2(F14.current, "close", o62.pointerType);
      J18 ? o62.openChangeTimeout.start(J18, () => {
        m25.setOpen(false, u4(s4.triggerHover, L20)), E30?.events.emit("floating.closed", L20);
      }) : W14 && (o62.openChangeTimeout.clear(), m25.setOpen(false, u4(s4.triggerHover, L20)), E30?.events.emit("floating.closed", L20));
    }
    let D14 = O14.current ?? (r49 ? m25.select("domReferenceElement") : null);
    if (!h4(D14)) return;
    function I26(L20) {
      if (o62.openChangeTimeout.clear(), o62.blockMouseMove = false, u37 && !d10(o62.pointerType)) return;
      let W14 = Ve2(P17.current), J18 = xe2(F14.current, "open", o62.pointerType), te7 = f10(L20), _19 = L20.currentTarget ?? null, v17 = m25.select("domReferenceElement"), Y18 = _19;
      if (h4(te7) && !m25.context.triggerElements.hasElement(te7)) {
        for (let ce8 of m25.context.triggerElements.elements()) if (u9(ce8, te7)) {
          Y18 = ce8;
          break;
        }
      }
      h4(_19) && h4(v17) && !m25.context.triggerElements.hasElement(_19) && u9(_19, v17) && (Y18 = v17);
      let H16 = Y18 == null ? false : w22(v17, Y18, te7), ne12 = m25.select("open"), V12 = K14.current?.() ?? m25.select("transitionStatus") === "ending", z17 = !ne12 && V12 && h24.current, se12 = !H16 && h4(Y18) && h4(v17) && u9(v17, Y18) && z17, pe9 = W14 > 0 && !J18, G18 = H16 && (ne12 || z17) || se12, re8 = !ne12 || H16;
      if (G18) {
        j17() && m25.setOpen(true, u4(s4.triggerHover, L20, Y18));
        return;
      }
      pe9 || (J18 ? o62.openChangeTimeout.start(J18, () => {
        re8 && j17() && m25.setOpen(true, u4(s4.triggerHover, L20, Y18));
      }) : re8 && j17() && m25.setOpen(true, u4(s4.triggerHover, L20, Y18)));
    }
    function A17(L20) {
      if (X11()) {
        q15();
        return;
      }
      x21();
      let W14 = m25.select("domReferenceElement"), J18 = n13(W14);
      o62.restTimeout.clear(), o62.restTimeoutPending = false;
      let te7 = p31.current.floatingContext ?? R27?.();
      if (d9(L20.relatedTarget, m25.context.triggerElements)) return;
      if (C18.current && te7) {
        m25.select("open") || o62.openChangeTimeout.clear();
        let v17 = O14.current;
        o62.handler = C18.current({ ...te7, tree: E30, x: L20.clientX, y: L20.clientY, onClose() {
          q15(), x21(), b14.current && !X11() && v17 === m25.select("domReferenceElement") && f35(L20, true);
        } }), J18.addEventListener("mousemove", o62.handler), o62.handler(L20);
        return;
      }
      (o62.pointerType !== "touch" || !u9(m25.select("floatingElement"), L20.relatedTarget)) && f35(L20);
    }
    return l19 ? r14(t11(D14, "mousemove", I26, { once: true }), t11(D14, "mouseenter", I26), t11(D14, "mouseleave", A17)) : r14(t11(D14, "mouseenter", I26), t11(D14, "mouseleave", A17));
  }, [x21, q15, p31, F14, m25, t48, C18, o62, r49, w22, X11, u37, l19, P17, O14, E30, b14, R27, K14, j17]), Ae3.useMemo(() => {
    if (!t48) return;
    function f35(D14) {
      o62.pointerType = D14.pointerType;
    }
    return { onPointerDown: f35, onPointerEnter: f35, onMouseMove(D14) {
      let { nativeEvent: I26 } = D14, A17 = D14.currentTarget, L20 = m25.select("domReferenceElement"), W14 = m25.select("open"), J18 = w22(L20, A17, D14.target);
      if (u37 && !d10(o62.pointerType)) return;
      if (W14 && J18 && o62.handleCloseOptions?.blockPointerEvents) {
        let v17 = m25.select("floatingElement");
        if (v17) {
          let Y18 = o62.handleCloseOptions?.getScope?.() ?? A17.ownerDocument.body;
          d18(o62, { scopeElement: Y18, referenceElement: A17, floatingElement: v17 });
        }
      }
      let te7 = Ve2(P17.current);
      if (W14 && !J18 || te7 === 0 || !J18 && o62.restTimeoutPending && D14.movementX ** 2 + D14.movementY ** 2 < 2) return;
      o62.restTimeout.clear();
      function _19() {
        if (o62.restTimeoutPending = false, X11()) return;
        let v17 = m25.select("open");
        !o62.blockMouseMove && (!v17 || J18) && j17() && m25.setOpen(true, u4(s4.triggerHover, I26, A17));
      }
      o62.pointerType === "touch" ? rr.flushSync(() => {
        _19();
      }) : J18 && W14 ? _19() : (o62.restTimeoutPending = true, o62.restTimeout.start(te7, _19));
    } };
  }, [t48, o62, X11, w22, u37, m25, P17, j17]);
}
var Zs = "Escape";
function yt2(e58, c40, t48) {
  switch (e58) {
    case "vertical":
      return c40;
    case "horizontal":
      return t48;
    default:
      return c40 || t48;
  }
}
function ht2(e58, c40) {
  return yt2(c40, e58 === c9 || e58 === E4, e58 === r10 || e58 === s10);
}
function fn(e58, c40, t48) {
  return yt2(c40, e58 === E4, t48 ? e58 === r10 : e58 === s10) || e58 === "Enter" || e58 === " " || e58 === "";
}
function ec(e58, c40, t48) {
  return yt2(c40, t48 ? e58 === r10 : e58 === s10, e58 === E4);
}
function tc(e58, c40, t48, s54) {
  let n61 = t48 ? e58 === s10 : e58 === r10, u37 = e58 === c9;
  return c40 === "both" || c40 === "horizontal" && s54 && s54 > 1 ? e58 === Zs : yt2(c40, n61, u37);
}
function nc(e58, c40) {
  let { listRef: t48, activeIndex: s54, onNavigate: n61 = () => {
  }, enabled: u37 = true, selectedIndex: i38 = null, allowEscape: l19 = false, loopFocus: O14 = false, nested: T17 = false, rtl: r49 = false, virtual: R27 = false, focusItemOnOpen: g20 = "auto", focusItemOnHover: y24 = true, openOnArrowKeyDown: m25 = true, disabledIndices: p31 = void 0, orientation: a38 = "vertical", parentOrientation: E30, cols: o62 = 1, id: h24, resetOnPointerLeave: C18 = true, externalTree: F14 } = c40, P17 = "rootStore" in e58 ? e58.rootStore : e58, b14 = P17.useState("open"), M20 = P17.useState("floatingElement"), K14 = P17.useState("domReferenceElement"), X11 = P17.context.dataRef, j17 = F2(M20), w22 = A5(K14), x21 = I8(j17), q15 = d15(), f35 = f18(F14), D14 = de3.useRef(g20), I26 = de3.useRef(i38 ?? -1), A17 = de3.useRef(null), L20 = de3.useRef(true), W14 = E((N20) => {
    n61(I26.current === -1 ? null : I26.current, N20);
  }), J18 = de3.useRef(W14), te7 = de3.useRef(!!M20), _19 = de3.useRef(b14), v17 = de3.useRef(false), Y18 = de3.useRef(false), H16 = de3.useRef(null), ne12 = I8(p31), V12 = I8(b14), z17 = I8(i38), se12 = I8(C18), pe9 = R2(), G18 = R2(), re8 = E(() => {
    function N20(B17) {
      R27 ? f35?.events.emit("virtualfocus", B17) : H16.current = Be2(B17, { sync: v17.current, preventScroll: true });
    }
    let d31 = t48.current[I26.current], k17 = Y18.current;
    d31 && N20(d31), (v17.current ? (B17) => B17() : (B17) => pe9.request(B17))(() => {
      let B17 = t48.current[I26.current] || d31;
      if (!B17) return;
      d31 || N20(B17), U11 && (k17 || !L20.current) && B17.scrollIntoView?.({ block: "nearest", inline: "nearest" });
    });
  });
  o2(() => {
    X11.current.orientation = a38;
  }, [X11, a38]), o2(() => {
    u37 && (b14 && M20 ? (I26.current = i38 ?? -1, D14.current && i38 != null && (Y18.current = true, W14())) : te7.current && (I26.current = -1, J18.current()));
  }, [u37, b14, M20, i38, W14]), o2(() => {
    if (u37) {
      if (!b14) {
        v17.current = false;
        return;
      }
      if (M20) if (s54 == null) {
        if (v17.current = false, z17.current != null) return;
        if (te7.current && (I26.current = -1, re8()), (!_19.current || !te7.current) && D14.current && (A17.current != null || D14.current === true && A17.current == null)) {
          let N20 = 0, d31 = () => {
            t48.current[0] == null ? (N20 < 2 && (N20 ? (S18) => G18.request(S18) : queueMicrotask)(d31), N20 += 1) : (I26.current = A17.current == null || fn(A17.current, a38, r49) || T17 ? I6(t48) : v4(t48), A17.current = null, W14());
          };
          d31();
        }
      } else j4(t48.current, s54) || (I26.current = s54, re8(), Y18.current = false);
    }
  }, [u37, b14, M20, s54, z17, T17, t48, a38, r49, W14, re8, G18]), o2(() => {
    if (!u37 || M20 || !f35 || R27 || !te7.current) return;
    let N20 = f35.nodesRef.current, d31 = N20.find((B17) => B17.id === q15)?.context?.elements.floating, k17 = a12(n13(M20)), S18 = N20.some((B17) => B17.context && u9(B17.context.elements.floating, k17));
    d31 && !S18 && L20.current && d31.focus({ preventScroll: true });
  }, [u37, M20, f35, q15, R27]), o2(() => {
    J18.current = W14, _19.current = b14, te7.current = !!M20;
  }), o2(() => {
    b14 || (A17.current = null, D14.current = g20);
  }, [b14, g20]);
  let ce8 = s54 != null, ie10 = E((N20) => {
    if (!V12.current) return;
    let d31 = t48.current.indexOf(N20.currentTarget);
    d31 !== -1 && (I26.current !== d31 || s54 !== d31) && (I26.current = d31, W14(N20));
  }), Q16 = E(() => E30 ?? f35?.nodesRef.current.find((N20) => N20.id === q15)?.context?.dataRef?.current.orientation), $9 = E(() => I6(t48, ne12.current)), ee7 = E((N20) => {
    if (L20.current = false, v17.current = true, N20.which === 229 || !V12.current && N20.currentTarget === x21.current) return;
    if (T17 && tc(N20.key, a38, r49, o62)) {
      ht2(N20.key, Q16()) || p7(N20), P17.setOpen(false, u4(s4.listNavigation, N20.nativeEvent)), g4(K14) && (R27 ? f35?.events.emit("virtualfocus", K14) : K14.focus());
      return;
    }
    let d31 = I26.current, k17 = I6(t48, p31), S18 = v4(t48, p31);
    if (w22 || (N20.key === "Home" && (p7(N20), I26.current = k17, W14(N20)), N20.key === "End" && (p7(N20), I26.current = S18, W14(N20))), o62 > 1) {
      let B17 = Array.from({ length: t48.current.length }, () => ({ width: 1, height: 1 })), me7 = rt(B17, o62, false), He10 = me7.findIndex((be8) => be8 != null && !B3(t48.current, be8, p31)), Ie7 = me7.reduce((be8, Fe5, Ot4) => Fe5 != null && !B3(t48.current, Fe5, p31) ? Ot4 : be8, -1), he6 = me7[tt(me7.map((be8) => be8 != null ? t48.current[be8] : null), { event: N20, orientation: a38, loopFocus: O14, rtl: r49, cols: o62, disabledIndices: ft([...(typeof p31 != "function" ? p31 : null) || t48.current.map((be8, Fe5) => B3(t48.current, Fe5, p31) ? Fe5 : void 0), void 0], me7), minIndex: He10, maxIndex: Ie7, prevIndex: it(I26.current > S18 ? k17 : I26.current, B17, me7, o62, N20.key === E4 ? "bl" : N20.key === (r49 ? r10 : s10) ? "tr" : "tl"), stopEvent: true })];
      if (he6 != null && (I26.current = he6, W14(N20)), a38 === "both") return;
    }
    if (ht2(N20.key, a38)) {
      if (p7(N20), b14 && !R27 && a12(N20.currentTarget.ownerDocument) === N20.currentTarget) {
        I26.current = fn(N20.key, a38, r49) ? k17 : S18, W14(N20);
        return;
      }
      fn(N20.key, a38, r49) ? O14 ? d31 >= S18 ? l19 && d31 !== t48.current.length ? I26.current = -1 : (v17.current = false, I26.current = k17) : I26.current = C3(t48.current, { startingIndex: d31, disabledIndices: p31 }) : I26.current = Math.min(S18, C3(t48.current, { startingIndex: d31, disabledIndices: p31 })) : O14 ? d31 <= k17 ? l19 && d31 !== -1 ? I26.current = t48.current.length : (v17.current = false, I26.current = S18) : I26.current = C3(t48.current, { startingIndex: d31, decrement: true, disabledIndices: p31 }) : I26.current = Math.max(k17, C3(t48.current, { startingIndex: d31, decrement: true, disabledIndices: p31 })), j4(t48.current, I26.current) && (I26.current = -1), W14(N20);
    }
  }), U11 = de3.useMemo(() => ({ onFocus(d31) {
    v17.current = true, ie10(d31);
  }, onClick: ({ currentTarget: d31 }) => d31.focus({ preventScroll: true }), onMouseMove(d31) {
    v17.current = true, Y18.current = false, y24 && ie10(d31);
  }, onPointerLeave(d31) {
    if (!V12.current || !L20.current || d31.pointerType === "touch") return;
    v17.current = true;
    let k17 = d31.relatedTarget;
    if (!(!y24 || t48.current.includes(k17)) && se12.current && (H16.current?.(), H16.current = null, I26.current = -1, W14(d31), !R27)) {
      let S18 = x21.current, B17 = a12(n13(S18));
      S18 && u9(S18, B17) && S18.focus({ preventScroll: true });
    }
  } }), [ie10, V12, x21, y24, t48, W14, se12, R27]), ue7 = de3.useMemo(() => R27 && b14 && ce8 && { "aria-activedescendant": `${h24}-${s54}` }, [R27, b14, ce8, h24, s54]), le9 = de3.useMemo(() => ({ "aria-orientation": a38 === "both" ? void 0 : a38, ...w22 ? {} : ue7, onKeyDown(N20) {
    if (N20.key === "Tab" && N20.shiftKey && b14 && !R27) {
      let d31 = f10(N20.nativeEvent);
      if (d31 && !u9(x21.current, d31)) return;
      p7(N20), P17.setOpen(false, u4(s4.focusOut, N20.nativeEvent)), g4(K14) && K14.focus();
      return;
    }
    ee7(N20);
  }, onPointerMove() {
    L20.current = true;
  } }), [ue7, ee7, x21, a38, w22, P17, b14, R27, K14]), Oe5 = de3.useMemo(() => {
    function N20(S18) {
      P17.setOpen(true, u4(s4.listNavigation, S18.nativeEvent, S18.currentTarget));
    }
    function d31(S18) {
      g20 === "auto" && s11(S18.nativeEvent) && (D14.current = !R27);
    }
    function k17(S18) {
      D14.current = g20, g20 === "auto" && c10(S18.nativeEvent) && (D14.current = true);
    }
    return { onKeyDown(S18) {
      let B17 = P17.select("open");
      L20.current = false;
      let me7 = S18.key.startsWith("Arrow"), He10 = ec(S18.key, Q16(), r49), Ie7 = ht2(S18.key, a38), he6 = (T17 ? He10 : Ie7) || S18.key === "Enter" || S18.key.trim() === "";
      if (R27 && B17) return ee7(S18);
      if (!(!B17 && !m25 && me7)) {
        if (he6) {
          let be8 = ht2(S18.key, Q16());
          A17.current = T17 && be8 ? null : S18.key;
        }
        if (T17) {
          He10 && (p7(S18), B17 ? (I26.current = $9(), W14(S18)) : N20(S18));
          return;
        }
        Ie7 && (z17.current != null && (I26.current = z17.current), p7(S18), !B17 && m25 ? N20(S18) : ee7(S18), B17 && W14(S18));
      }
    }, onFocus(S18) {
      P17.select("open") && !R27 && (I26.current = -1, W14(S18));
    }, onPointerDown: k17, onPointerEnter: k17, onMouseDown: d31, onClick: d31 };
  }, [ee7, g20, $9, T17, W14, P17, m25, a38, Q16, r49, z17, R27]), fe7 = de3.useMemo(() => ({ ...ue7, ...Oe5 }), [ue7, Oe5]);
  return de3.useMemo(() => u37 ? { reference: fe7, floating: le9, item: U11, trigger: Oe5 } : {}, [u37, fe7, le9, Oe5, U11]);
}
function sc(e58, c40) {
  let { listRef: t48, elementsRef: s54, activeIndex: n61, onMatch: u37, onTyping: i38, enabled: l19 = true, resetMs: O14 = 750, selectedIndex: T17 = null } = c40, r49 = "rootStore" in e58 ? e58.rootStore : e58, R27 = r49.useState("open"), g20 = p12(), y24 = Ye2.useRef(""), m25 = Ye2.useRef(T17 ?? n61 ?? -1), p31 = Ye2.useRef(null), a38 = E((h24) => {
    function C18(w22) {
      let x21 = s54?.current[w22];
      return !x21 || Z(x21);
    }
    function F14(w22, x21, q15 = 0) {
      if (w22.length === 0) return -1;
      let f35 = (q15 % w22.length + w22.length) % w22.length, D14 = x21.toLocaleLowerCase();
      for (let I26 = 0; I26 < w22.length; I26 += 1) {
        let A17 = (f35 + I26) % w22.length;
        if (!(!w22[A17]?.toLocaleLowerCase().startsWith(D14) || !C18(A17))) return A17;
      }
      return -1;
    }
    let P17 = t48.current;
    if (y24.current.length > 0 && h24.key === " " && (p7(h24), i38?.(true)), y24.current.length > 0 && y24.current[0] !== " " && F14(P17, y24.current) === -1 && h24.key !== " " && i38?.(false), P17 == null || h24.key.length !== 1 || h24.ctrlKey || h24.metaKey || h24.altKey) return;
    R27 && h24.key !== " " && (p7(h24), i38?.(true));
    let b14 = y24.current === "";
    b14 && (m25.current = T17 ?? n61 ?? -1), P17.every((w22) => w22 ? w22[0]?.toLocaleLowerCase() !== w22[1]?.toLocaleLowerCase() : true) && y24.current === h24.key && (y24.current = "", m25.current = p31.current), y24.current += h24.key, g20.start(O14, () => {
      y24.current = "", m25.current = p31.current, i38?.(false);
    });
    let X11 = ((b14 ? T17 ?? n61 ?? -1 : m25.current) ?? 0) + 1, j17 = F14(P17, y24.current, X11);
    j17 !== -1 ? (u37?.(j17), p31.current = j17) : h24.key !== " " && (y24.current = "", i38?.(false));
  }), E30 = E((h24) => {
    let C18 = h24.relatedTarget, F14 = r49.select("domReferenceElement"), P17 = r49.select("floatingElement");
    u9(F14, C18) || u9(P17, C18) || (g20.clear(), y24.current = "", m25.current = p31.current, i38?.(false));
  });
  o2(() => {
    !R27 && T17 !== null || (g20.clear(), p31.current = null, y24.current !== "" && (y24.current = ""));
  }, [R27, T17, g20]), o2(() => {
    R27 && y24.current === "" && (m25.current = T17 ?? n61 ?? -1);
  }, [R27, T17, n61]);
  let o62 = Ye2.useMemo(() => ({ onKeyDown: a38, onBlur: E30 }), [a38, E30]);
  return Ye2.useMemo(() => l19 ? { reference: o62, floating: o62 } : {}, [l19, o62]);
}
var Er = 0.1;
var lc = Er * Er;
var Z5 = 0.5;
function Tt2(e58, c40, t48, s54, n61, u37) {
  return s54 >= c40 != u37 >= c40 && e58 <= (n61 - t48) * (c40 - s54) / (u37 - s54) + t48;
}
function vt(e58, c40, t48, s54, n61, u37, i38, l19, O14, T17) {
  let r49 = false;
  return Tt2(e58, c40, t48, s54, n61, u37) && (r49 = !r49), Tt2(e58, c40, n61, u37, i38, l19) && (r49 = !r49), Tt2(e58, c40, i38, l19, O14, T17) && (r49 = !r49), Tt2(e58, c40, O14, T17, t48, s54) && (r49 = !r49), r49;
}
function fc(e58, c40, t48) {
  return e58 >= t48.x && e58 <= t48.x + t48.width && c40 >= t48.y && c40 <= t48.y + t48.height;
}
function Ct(e58, c40, t48, s54, n61, u37) {
  let i38 = Math.min(t48, n61), l19 = Math.max(t48, n61), O14 = Math.min(s54, u37), T17 = Math.max(s54, u37);
  return e58 >= i38 && e58 <= l19 && c40 >= O14 && c40 <= T17;
}
function mc(e58 = {}) {
  let { blockPointerEvents: c40 = false } = e58, t48 = new n17(), s54 = ({ x: n61, y: u37, placement: i38, elements: l19, onClose: O14, nodeId: T17, tree: r49 }) => {
    let R27 = i38?.split("-")[0], g20 = false, y24 = null, m25 = null, p31 = typeof performance < "u" ? performance.now() : 0;
    function a38(o62, h24) {
      let C18 = performance.now(), F14 = C18 - p31;
      if (y24 === null || m25 === null || F14 === 0) return y24 = o62, m25 = h24, p31 = C18, false;
      let P17 = o62 - y24, b14 = h24 - m25, M20 = P17 * P17 + b14 * b14, K14 = F14 * F14 * lc;
      return y24 = o62, m25 = h24, p31 = C18, M20 < K14;
    }
    function E30() {
      t48.clear(), O14();
    }
    return function(h24) {
      t48.clear();
      let C18 = l19.domReference, F14 = l19.floating;
      if (!C18 || !F14 || R27 == null || n61 == null || u37 == null) return;
      let { clientX: P17, clientY: b14 } = h24, M20 = f10(h24), K14 = h24.type === "mouseleave", X11 = u9(F14, M20), j17 = u9(C18, M20);
      if (X11 && (g20 = true, !K14)) return;
      if (j17 && (g20 = false, !K14)) {
        g20 = true;
        return;
      }
      if (K14 && h4(h24.relatedTarget) && u9(F14, h24.relatedTarget)) return;
      function w22() {
        return !!(r49 && o14(r49.nodesRef.current, T17).length > 0);
      }
      function x21() {
        w22() || E30();
      }
      if (w22()) return;
      let q15 = C18.getBoundingClientRect(), f35 = F14.getBoundingClientRect(), D14 = n61 > f35.right - f35.width / 2, I26 = u37 > f35.bottom - f35.height / 2, A17 = f35.width > q15.width, L20 = f35.height > q15.height, W14 = (A17 ? q15 : f35).left, J18 = (A17 ? q15 : f35).right, te7 = (L20 ? q15 : f35).top, _19 = (L20 ? q15 : f35).bottom;
      if (R27 === "top" && u37 >= q15.bottom - 1 || R27 === "bottom" && u37 <= q15.top + 1 || R27 === "left" && n61 >= q15.right - 1 || R27 === "right" && n61 <= q15.left + 1) {
        x21();
        return;
      }
      let v17 = false;
      switch (R27) {
        case "top":
          v17 = Ct(P17, b14, W14, q15.top + 1, J18, f35.bottom - 1);
          break;
        case "bottom":
          v17 = Ct(P17, b14, W14, f35.top + 1, J18, q15.bottom - 1);
          break;
        case "left":
          v17 = Ct(P17, b14, f35.right - 1, _19, q15.left + 1, te7);
          break;
        case "right":
          v17 = Ct(P17, b14, q15.right - 1, _19, f35.left + 1, te7);
          break;
        default:
      }
      if (v17) return;
      if (g20 && !fc(P17, b14, q15)) {
        x21();
        return;
      }
      if (!K14 && a38(P17, b14)) {
        x21();
        return;
      }
      let Y18 = false;
      switch (R27) {
        case "top": {
          let H16 = A17 ? Z5 / 2 : Z5 * 4, ne12 = A17 || D14 ? n61 + H16 : n61 - H16, V12 = A17 ? n61 - H16 : D14 ? n61 + H16 : n61 - H16, z17 = u37 + Z5 + 1, se12 = D14 || A17 ? f35.bottom - Z5 : f35.top, pe9 = D14 ? A17 ? f35.bottom - Z5 : f35.top : f35.bottom - Z5;
          Y18 = vt(P17, b14, ne12, z17, V12, z17, f35.left, se12, f35.right, pe9);
          break;
        }
        case "bottom": {
          let H16 = A17 ? Z5 / 2 : Z5 * 4, ne12 = A17 || D14 ? n61 + H16 : n61 - H16, V12 = A17 ? n61 - H16 : D14 ? n61 + H16 : n61 - H16, z17 = u37 - Z5, se12 = D14 || A17 ? f35.top + Z5 : f35.bottom, pe9 = D14 ? A17 ? f35.top + Z5 : f35.bottom : f35.top + Z5;
          Y18 = vt(P17, b14, ne12, z17, V12, z17, f35.left, se12, f35.right, pe9);
          break;
        }
        case "left": {
          let H16 = L20 ? Z5 / 2 : Z5 * 4, ne12 = L20 || I26 ? u37 + H16 : u37 - H16, V12 = L20 ? u37 - H16 : I26 ? u37 + H16 : u37 - H16, z17 = n61 + Z5 + 1, se12 = I26 || L20 ? f35.right - Z5 : f35.left, pe9 = I26 ? L20 ? f35.right - Z5 : f35.left : f35.right - Z5;
          Y18 = vt(P17, b14, se12, f35.top, pe9, f35.bottom, z17, ne12, z17, V12);
          break;
        }
        case "right": {
          let H16 = L20 ? Z5 / 2 : Z5 * 4, ne12 = L20 || I26 ? u37 + H16 : u37 - H16, V12 = L20 ? u37 - H16 : I26 ? u37 + H16 : u37 - H16, z17 = n61 - Z5, se12 = I26 || L20 ? f35.left + Z5 : f35.right, pe9 = I26 ? L20 ? f35.left + Z5 : f35.right : f35.left + Z5;
          Y18 = vt(P17, b14, z17, ne12, z17, V12, se12, f35.top, pe9, f35.bottom);
          break;
        }
        default:
      }
      Y18 ? g20 || t48.start(40, x21) : x21();
    };
  };
  return s54.__options = { ...e58, blockPointerEvents: c40 }, s54;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/root/DialogRootContext.mjs
import * as o24 from "react";
var s20 = o24.createContext(false);
var r16 = o24.createContext(void 0);
function i19(e58) {
  let t48 = o24.useContext(r16);
  if (e58 === false && t48 === void 0) throw new Error(f2(27));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/store/DialogStore.mjs
import * as a18 from "react";
var C6 = { ...Re3, modal: ut2((e58) => e58.modal), nested: ut2((e58) => e58.nested), nestedOpenDialogCount: ut2((e58) => e58.nestedOpenDialogCount), nestedOpenDrawerCount: ut2((e58) => e58.nestedOpenDrawerCount), disablePointerDismissal: ut2((e58) => e58.disablePointerDismissal), openMethod: ut2((e58) => e58.openMethod), descriptionElementId: ut2((e58) => e58.descriptionElementId), titleElementId: ut2((e58) => e58.titleElementId), viewportElement: ut2((e58) => e58.viewportElement), role: ut2((e58) => e58.role) };
var l10 = class e12 extends oe3 {
  constructor(o62, t48, r49 = false) {
    let s54 = new b6(), i38 = R11(o62);
    i38.floatingRootContext = Se(s54, t48, r49), super(i38, { popupRef: a18.createRef(), backdropRef: a18.createRef(), internalBackdropRef: a18.createRef(), outsidePressEnabledRef: { current: true }, triggerElements: s54, onOpenChange: void 0, onOpenChangeComplete: void 0 }, C6);
  }
  setOpen = (o62, t48) => {
    if (t48.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    }, !o62 && t48.trigger == null && this.state.activeTriggerId != null && (t48.trigger = this.state.activeTriggerElement ?? void 0), this.context.onOpenChange?.(o62, t48), t48.isCanceled) return;
    this.state.floatingRootContext.dispatchOpenChange(o62, t48);
    let r49 = { open: o62 };
    ge2(r49, o62, t48.trigger), this.update(r49);
  };
  static useStore(o62, t48) {
    return ce2(o62, (s54, i38) => new e12(t48, s54, i38), true).store;
  }
};
function R11(e58 = {}) {
  return { ...Ce(), modal: true, disablePointerDismissal: false, popupElement: null, viewportElement: null, descriptionElementId: void 0, titleElementId: void 0, openMethod: null, nested: false, nestedOpenDialogCount: 0, nestedOpenDrawerCount: 0, role: "dialog", ...e58 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/root/useRenderDialogRoot.mjs
import { jsx as T7, jsxs as Z6 } from "react/jsx-runtime";
function I14(e58) {
  let { store: n61, parentContext: o62, actionsRef: c40, isDrawer: s54 } = e58, d31 = n61.useState("open");
  de2(n61, d31), pe3(n61);
  let { forceUnmount: u37 } = fe2(d31, n61), p31 = r17.useCallback(() => {
    n61.setOpen(false, u4(s4.imperativeAction));
  }, [n61]);
  return r17.useImperativeHandle(c40, () => ({ unmount: u37, close: p31 }), [u37, p31]), { parentContext: o62, isDrawer: s54 };
}
function N8({ store: e58, dialogRoot: n61 }) {
  let { parentContext: o62, isDrawer: c40 } = n61, s54 = e58.useState("open"), d31 = e58.useState("disablePointerDismissal"), u37 = e58.useState("modal"), p31 = e58.useState("popupElement"), x21 = e58.useState("floatingRootContext"), [g20, C18] = r17.useState(0), [f35, m25] = r17.useState(0), D14 = g20 === 0, i38 = zo(x21, { outsidePressEvent() {
    return e58.context.internalBackdropRef.current || e58.context.backdropRef.current ? "intentional" : { mouse: u37 === "trap-focus" ? "sloppy" : "intentional", touch: "sloppy" };
  }, outsidePress(a38) {
    if (!e58.context.outsidePressEnabledRef.current || "button" in a38 && a38.button !== 0 || "touches" in a38 && a38.touches.length !== 1) return false;
    let R27 = f10(a38);
    if (D14 && !d31) {
      let l19 = R27;
      return u37 && (e58.context.internalBackdropRef.current || e58.context.backdropRef.current) ? e58.context.internalBackdropRef.current === l19 || e58.context.backdropRef.current === l19 || u9(l19, p31) && !l19?.hasAttribute("data-base-ui-portal") : true;
    }
    return false;
  }, escapeKey: D14 });
  qt(s54 && u37 === true, p31), e58.useContextCallback("onNestedDialogOpen", (a38, R27) => {
    C18(a38), m25(R27);
  }), e58.useContextCallback("onNestedDialogClose", () => {
    C18(0), m25(0);
  }), r17.useEffect(() => (o62?.onNestedDialogOpen && s54 && o62.onNestedDialogOpen(g20 + 1, f35 + (c40 ? 1 : 0)), o62?.onNestedDialogClose && !s54 && o62.onNestedDialogClose(), () => {
    o62?.onNestedDialogClose && s54 && o62.onNestedDialogClose();
  }), [c40, s54, g20, f35, o62]);
  let O14 = i38.reference ?? o7, S18 = i38.trigger ?? o7, b14 = r17.useMemo(() => d2(le2, i38.floating), [i38.floating]);
  return ae3(e58, { activeTriggerProps: O14, inactiveTriggerProps: S18, popupProps: b14, nestedOpenDialogCount: g20, nestedOpenDrawerCount: f35 }), null;
}
function ge4(e58, n61 = "dialog") {
  let { children: o62, open: c40, defaultOpen: s54 = false, onOpenChange: d31, onOpenChangeComplete: u37, disablePointerDismissal: p31 = false, modal: x21 = true, actionsRef: g20, handle: C18, triggerId: f35, defaultTriggerId: m25 = null } = e58, D14 = n61 === "drawer", i38 = n61 === "alert-dialog", O14 = i38 ? true : x21, S18 = i38 || p31, b14 = i38 ? "alertdialog" : "dialog", a38 = i19(true), l19 = { modal: O14, disablePointerDismissal: S18, nested: !!a38, role: b14 }, t48 = l10.useStore(C18?.store, { open: s54, openProp: c40, activeTriggerId: m25, triggerIdProp: f35, ...l19 });
  n16(() => {
    let P17 = c40 === void 0 && t48.state.open === false && s54 === true ? { open: true, activeTriggerId: m25 } : null;
    i38 ? t48.update(P17 ? { ...l19, ...P17 } : l19) : P17 && t48.update(P17);
  }), t48.useControlledProp("openProp", c40), t48.useControlledProp("triggerIdProp", f35), t48.useSyncedValues(l19), t48.useContextCallback("onOpenChange", d31), t48.useContextCallback("onOpenChangeComplete", u37);
  let w22 = t48.useState("open"), v17 = t48.useState("mounted"), E30 = t48.useState("payload"), y24 = I14({ store: t48, actionsRef: g20, parentContext: a38?.store.context, isDrawer: D14 }), A17 = w22 || v17, B17 = k8.useMemo(() => ({ store: t48 }), [t48]);
  return T7(s20.Provider, { value: false, children: Z6(r16.Provider, { value: B17, children: [A17 && T7(N8, { store: t48, dialogRoot: y24 }), typeof o62 == "function" ? o62({ payload: E30 }) : o62] }) });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/backdrop/DialogBackdrop.mjs
import * as o25 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/popupStateMapping.mjs
var r18 = function(n61) {
  return n61.open = "data-open", n61.closed = "data-closed", n61[n61.startingStyle = n8.startingStyle] = "startingStyle", n61[n61.endingStyle = n8.endingStyle] = "endingStyle", n61.anchorHidden = "data-anchor-hidden", n61.side = "data-side", n61.align = "data-align", n61;
}({});
var e13 = function(n61) {
  return n61.popupOpen = "data-popup-open", n61.pressed = "data-pressed", n61;
}({});
var d19 = { [e13.popupOpen]: "" };
var t16 = { [e13.popupOpen]: "", [e13.pressed]: "" };
var l11 = { [r18.open]: "" };
var O7 = { [r18.closed]: "" };
var i20 = { [r18.anchorHidden]: "" };
var c19 = { open(n61) {
  return n61 ? d19 : null;
} };
var a19 = { open(n61) {
  return n61 ? t16 : null;
} };
var g11 = { open(n61) {
  return n61 ? l11 : O7;
}, anchorHidden(n61) {
  return n61 ? i20 : null;
} };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/backdrop/DialogBackdrop.mjs
var f21 = { ...g11, ...i7 };
var x9 = o25.forwardRef(function(e58, n61) {
  let { render: g20, className: R27, style: k17, forceRender: s54 = false, ...a38 } = e58, { store: t48 } = i19(), r49 = t48.useState("open"), i38 = t48.useState("nested"), p31 = t48.useState("mounted"), c40 = t48.useState("transitionStatus");
  return J("div", e58, { state: { open: r49, transitionStatus: c40 }, ref: [t48.context.backdropRef, n61], stateAttributesMapping: f21, props: [{ role: "presentation", hidden: !p31, style: { userSelect: "none", WebkitUserSelect: "none" } }, a38], enabled: s54 || !i38 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/close/DialogClose.mjs
import * as s21 from "react";
var k9 = s21.forwardRef(function(e58, n61) {
  let { render: v17, className: E30, style: N20, disabled: t48 = false, nativeButton: r49 = true, ...a38 } = e58, { store: o62 } = i19(), i38 = o62.useState("open"), { getButtonProps: l19, buttonRef: c40 } = Q({ disabled: t48, native: r49 }), f35 = { disabled: t48 };
  function m25(p31) {
    i38 && o62.setOpen(false, u4(s4.closePress, p31.nativeEvent));
  }
  return J("button", e58, { state: f35, ref: [n61, c40], props: [{ onClick: m25 }, a38, l19] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/description/DialogDescription.mjs
import * as i21 from "react";
var R12 = i21.forwardRef(function(e58, t48) {
  let { render: d31, className: m25, style: u37, id: r49, ...s54 } = e58, { store: n61 } = i19(), o62 = r5(r49);
  return n61.useSyncedValueWithCleanup("descriptionElementId", o62), J("p", e58, { ref: t48, props: [{ id: o62 }, s54] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/popup/DialogPopup.mjs
import * as m11 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/portal/DialogPortalContext.mjs
import * as o26 from "react";
var r19 = o26.createContext(void 0);
function a20() {
  let t48 = o26.useContext(r19);
  if (t48 === void 0) throw new Error(f2(26));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/popup/DialogPopup.mjs
import { jsx as L9 } from "react/jsx-runtime";
var u15 = function(t48) {
  return t48.nestedDialogs = "--nested-dialogs", t48;
}({});
var c20 = function(t48) {
  return t48[t48.open = r18.open] = "open", t48[t48.closed = r18.closed] = "closed", t48[t48.startingStyle = r18.startingStyle] = "startingStyle", t48[t48.endingStyle = r18.endingStyle] = "endingStyle", t48.nested = "data-nested", t48.nestedDialogOpen = "data-nested-dialog-open", t48;
}({});
var Y4 = { ...g11, ...i7, nestedDialogOpen(t48) {
  return t48 ? { [c20.nestedDialogOpen]: "" } : null;
} };
var ae4 = m11.forwardRef(function(i38, f35) {
  let { render: q15, className: z17, style: G18, finalFocus: S18, initialFocus: r49, ...p31 } = i38, { store: e58 } = i19(), g20 = e58.useState("descriptionElementId"), O14 = e58.useState("disablePointerDismissal"), a38 = e58.useState("floatingRootContext"), C18 = e58.useState("popupProps"), x21 = e58.useState("modal"), l19 = e58.useState("mounted"), y24 = e58.useState("nested"), d31 = e58.useState("nestedOpenDialogCount"), s54 = e58.useState("open"), E30 = e58.useState("openMethod"), P17 = e58.useState("titleElementId"), F14 = e58.useState("transitionStatus"), I26 = e58.useState("role"), R27 = a38.useState("floatingId"), h24 = p31.id ?? R27;
  a20(), p10({ open: s54, ref: e58.context.popupRef, onComplete() {
    s54 && e58.context.onOpenChangeComplete?.(true);
  } });
  function M20(o62) {
    return o62 === "touch" ? e58.context.popupRef.current : true;
  }
  let _19 = r49 === void 0 ? M20 : r49, D14 = d31 > 0, N20 = e58.useStateSetter("popupElement"), b14 = J("div", i38, { state: { open: s54, nested: y24, transitionStatus: F14, nestedDialogOpen: D14 }, props: [C18, { id: h24, "aria-labelledby": P17 ?? void 0, "aria-describedby": g20 ?? void 0, role: I26, ...le2, hidden: !l19, onKeyDown(o62) {
    Y2.has(o62.key) && o62.stopPropagation();
  }, style: { [u15.nestedDialogs]: d31 } }, p31], ref: [f35, e58.context.popupRef, N20], stateAttributesMapping: Y4 });
  return L9(To, { context: a38, openInteractionType: E30, disabled: !l19, closeOnFocusOut: !O14, initialFocus: _19, returnFocus: S18, modal: x21 !== false, restoreFocus: "popup", children: b14 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/portal/DialogPortal.mjs
import * as a22 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/inertValue.mjs
import * as e14 from "react";
var n20 = parseInt(e14.version, 10);
function r20(t48) {
  return n20 >= t48;
}
function s22(t48) {
  return r20(19) ? t48 : t48 ? "true" : void 0;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/InternalBackdrop.mjs
import * as r21 from "react";
import { jsx as a21 } from "react/jsx-runtime";
var l12 = r21.forwardRef(function(n61, p31) {
  let { cutout: e58, ...i38 } = n61, o62;
  if (e58) {
    let t48 = e58.getBoundingClientRect();
    o62 = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${t48.left}px ${t48.top}px,${t48.left}px ${t48.bottom}px,${t48.right}px ${t48.bottom}px,${t48.right}px ${t48.top}px,${t48.left}px ${t48.top}px)`;
  }
  return a21("div", { ref: p31, role: "presentation", "data-base-ui-inert": "", ...i38, style: { position: "fixed", inset: 0, userSelect: "none", WebkitUserSelect: "none", clipPath: o62 } });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/portal/DialogPortal.mjs
import { jsx as n21, jsxs as x10 } from "react/jsx-runtime";
var N9 = a22.forwardRef(function(t48, l19) {
  let { keepMounted: e58 = false, ...s54 } = t48, { store: o62 } = i19(), r49 = o62.useState("mounted"), i38 = o62.useState("modal"), c40 = o62.useState("open");
  return r49 || e58 ? n21(r19.Provider, { value: e58, children: x10(eo, { ref: l19, ...s54, children: [r49 && i38 === true && n21(l12, { ref: o62.context.internalBackdropRef, inert: s22(!c40) }), t48.children] }) }) : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/title/DialogTitle.mjs
import * as o27 from "react";
var R13 = o27.forwardRef(function(e58, i38) {
  let { render: d31, className: p31, style: u37, id: r49, ...l19 } = e58, { store: s54 } = i19(), t48 = r5(r49);
  return s54.useSyncedValueWithCleanup("titleElementId", t48), J("h2", e58, { ref: i38, props: [{ id: t48 }, l19] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/trigger/DialogTrigger.mjs
import * as o30 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useOpenInteractionType.mjs
import * as o29 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useEnhancedClickHandler.mjs
import * as t17 from "react";
function o28(c40) {
  let i38 = t17.useRef(""), r49 = t17.useCallback((e58) => {
    e58.defaultPrevented || (i38.current = e58.pointerType, c40(e58, e58.pointerType));
  }, [c40]);
  return { onClick: t17.useCallback((e58) => {
    if (e58.detail === 0) {
      c40(e58, "keyboard");
      return;
    }
    "pointerType" in e58 ? c40(e58, e58.pointerType) : c40(e58, i38.current), i38.current = "";
  }, [c40]), onPointerDown: r49 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/useValueChanged.mjs
import * as c21 from "react";
function u16(e58, n61) {
  let t48 = c21.useRef(e58), r49 = E(n61);
  o2(() => {
    t48.current !== e58 && r49(t48.current);
  }, [e58, r49]), o2(() => {
    t48.current = e58;
  }, [e58]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useOpenInteractionType.mjs
function p15(e58, n61) {
  let r49 = E((m25, s54) => {
    (typeof e58 == "function" ? e58() : e58) || n61(s54 || (p6 ? "touch" : ""));
  }), { onClick: t48, onPointerDown: i38 } = o28(r49);
  return o29.useMemo(() => ({ onClick: t48, onPointerDown: i38 }), [t48, i38]);
}
function C7(e58) {
  let [n61, r49] = o29.useState(null), t48 = p15(e58, r49);
  return u16(e58, (i38) => {
    i38 && !e58 && r49(null);
  }), o29.useMemo(() => ({ openMethod: n61, triggerProps: t48 }), [n61, t48]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/trigger/DialogTrigger.mjs
var W10 = o30.forwardRef(function(r49, g20) {
  let { render: F14, className: G18, style: U11, disabled: i38 = false, nativeButton: p31 = true, id: u37, payload: d31, handle: l19, ...c40 } = r49, m25 = i19(true), e58 = l19?.store ?? m25?.store;
  if (!e58) throw new Error(f2(79));
  let t48 = r5(u37), s54 = e58.useState("floatingRootContext"), n61 = e58.useState("isOpenedByTrigger", t48), f35 = e58.useState("triggerPopupId", t48), a38 = o30.useRef(null), { registerTrigger: T17, isMountedByThisTrigger: R27 } = se4(t48, a38, e58, { payload: d31 }), { getButtonProps: h24, buttonRef: D14 } = Q({ disabled: i38, native: p31 }), E30 = Mo(s54, { enabled: s54 != null }), I26 = p15(() => e58.select("open"), (C18) => {
    e58.set("openMethod", C18);
  }), B17 = { disabled: i38, open: n61 }, y24 = e58.useState("triggerProps", R27);
  return J("button", r49, { state: B17, ref: [D14, g20, T17, a38], props: [E30.reference, y24, I26, { [_4]: "", id: t48, "aria-haspopup": "dialog", "aria-expanded": n61, "aria-controls": f35 }, c40, h24], stateAttributesMapping: c19 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/viewport/DialogViewport.mjs
import * as p16 from "react";
var o31 = function(e58) {
  return e58[e58.open = r18.open] = "open", e58[e58.closed = r18.closed] = "closed", e58[e58.startingStyle = r18.startingStyle] = "startingStyle", e58[e58.endingStyle = r18.endingStyle] = "endingStyle", e58.nested = "data-nested", e58.nestedDialogOpen = "data-nested-dialog-open", e58;
}({});
var M6 = { ...g11, ...i7, nested(e58) {
  return e58 ? { [o31.nested]: "" } : null;
}, nestedDialogOpen(e58) {
  return e58 ? { [o31.nestedDialogOpen]: "" } : null;
} };
var H7 = p16.forwardRef(function(s54, l19) {
  let { render: h24, className: v17, style: x21, children: i38, ...a38 } = s54, u37 = a20(), { store: n61 } = i19(), r49 = n61.useState("open"), c40 = n61.useState("nested"), m25 = n61.useState("transitionStatus"), S18 = n61.useState("nestedOpenDialogCount"), d31 = n61.useState("mounted"), f35 = n61.useStateSetter("viewportElement"), g20 = S18 > 0;
  return J("div", s54, { enabled: u37 || d31, state: { open: r49, nested: c40, transitionStatus: m25, nestedDialogOpen: g20 }, ref: [l19, f35], stateAttributesMapping: M6, props: [{ role: "presentation", hidden: !d31, style: { pointerEvents: r49 ? void 0 : "none" }, children: i38 }, a38] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/dialog/store/DialogHandle.mjs
var n22 = class {
  constructor(e58) {
    this.store = e58 ?? new l10();
  }
  open(e58) {
    let o62 = e58 ? this.store.context.triggerElements.getById(e58) : void 0;
    this.store.setOpen(true, u4(s4.imperativeAction, void 0, o62));
  }
  openWithPayload(e58) {
    this.store.set("payload", e58), this.store.setOpen(true, u4(s4.imperativeAction, void 0, void 0));
  }
  close() {
    this.store.setOpen(false, u4(s4.imperativeAction, void 0, void 0));
  }
  get isOpen() {
    return this.store.select("open");
  }
};
function p17() {
  return new n22();
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/alert-dialog.mjs
var g12 = Object.defineProperty;
var n23 = (e58, o62) => {
  for (var t48 in o62) g12(e58, t48, { get: o62[t48], enumerable: true });
};
var s23 = {};
n23(s23, { Backdrop: () => x9, Close: () => k9, Description: () => R12, Handle: () => r22, Popup: () => ae4, Portal: () => N9, Root: () => a23, Title: () => R13, Trigger: () => l13, Viewport: () => H7, createHandle: () => p18 });
function a23(e58) {
  return ge4(e58, "alert-dialog");
}
var l13 = W10;
var i22 = { modal: true, disablePointerDismissal: true, role: "alertdialog" };
var r22 = class extends n22 {
  constructor(o62) {
    let t48 = o62 ?? new l10(i22);
    super(t48), o62 && this.store.update(i22);
  }
};
function p18() {
  return new r22();
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/autocomplete.mjs
import * as r31 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/root/AriaCombobox.mjs
import * as n28 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/root/ComboboxRootContext.mjs
import * as o32 from "react";
var n24 = o32.createContext(void 0);
var x11 = o32.createContext(void 0);
var r23 = o32.createContext(void 0);
var s24 = o32.createContext("");
function i23() {
  let t48 = o32.useContext(n24);
  if (!t48) throw new Error(f2(22));
  return t48;
}
function C8() {
  let t48 = o32.useContext(x11);
  if (!t48) throw new Error(f2(23));
  return t48;
}
function c22() {
  let t48 = o32.useContext(r23);
  if (!t48) throw new Error(f2(24));
  return t48;
}
function m12() {
  return o32.useContext(s24);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/itemEquality.mjs
var u17 = (n61, r49) => Object.is(n61, r49);
function e15(n61, r49, t48) {
  return n61 == null || r49 == null ? Object.is(n61, r49) : t48(n61, r49);
}
function i24(n61, r49, t48) {
  return !n61 || n61.length === 0 ? false : n61.some((f35) => f35 === void 0 ? false : e15(r49, f35, t48));
}
function o33(n61, r49, t48) {
  return !n61 || n61.length === 0 ? -1 : n61.findIndex((f35) => f35 === void 0 ? false : e15(f35, r49, t48));
}
function x12(n61, r49, t48) {
  return n61.filter((f35) => !e15(r49, f35, t48));
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/resolveValueLabel.mjs
import * as s25 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/serializeValue.mjs
function t18(r49) {
  if (r49 == null) return "";
  if (typeof r49 == "string") return r49;
  try {
    return JSON.stringify(r49);
  } catch {
    return String(r49);
  }
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/resolveValueLabel.mjs
import { jsx as i25 } from "react/jsx-runtime";
function c23(r49) {
  return r49 != null && r49.length > 0 && typeof r49[0] == "object" && r49[0] != null && "items" in r49[0];
}
function h11(r49) {
  if (!Array.isArray(r49)) return r49 != null && "null" in r49;
  let l19 = r49;
  if (c23(l19)) {
    for (let n61 of l19) for (let u37 of n61.items) if (u37 && u37.value == null && u37.label != null) return true;
    return false;
  }
  for (let n61 of l19) if (n61 && n61.value == null && n61.label != null) return true;
  return false;
}
function b7(r49, l19) {
  if (l19 && r49 != null) return l19(r49) ?? "";
  if (r49 && typeof r49 == "object") {
    if ("label" in r49 && r49.label != null) return String(r49.label);
    if ("value" in r49) return String(r49.value);
  }
  return t18(r49);
}
function j8(r49, l19) {
  return l19 && r49 != null ? l19(r49) ?? "" : r49 && typeof r49 == "object" && "value" in r49 && "label" in r49 ? t18(r49.value) : t18(r49);
}
function p19(r49, l19, n61) {
  function u37() {
    return b7(r49, n61);
  }
  if (n61 && r49 != null) return n61(r49);
  if (r49 && typeof r49 == "object" && "label" in r49 && r49.label != null) return r49.label;
  if (l19 && !Array.isArray(l19)) return l19[r49] ?? u37();
  if (Array.isArray(l19)) {
    let f35 = l19, t48 = c23(f35) ? f35.flatMap((e58) => e58.items) : f35;
    if (r49 == null || typeof r49 != "object") {
      let e58 = t48.find((o62) => o62.value === r49);
      return e58 && e58.label != null ? e58.label : u37();
    }
    if ("value" in r49) {
      let e58 = t48.find((o62) => o62 && o62.value === r49.value);
      if (e58 && e58.label != null) return e58.label;
    }
  }
  return u37();
}
function x13(r49, l19, n61) {
  return r49.reduce((u37, f35, t48) => (t48 > 0 && u37.push(", "), u37.push(i25(s25.Fragment, { children: p19(f35, l19, n61) }, t48)), u37), []);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/store.mjs
var d20 = { id: ut2((e58) => e58.id), labelId: ut2((e58) => e58.labelId), items: ut2((e58) => e58.items), selectedValue: ut2((e58) => e58.selectedValue), hasSelectionChips: ut2((e58) => {
  let i38 = e58.selectedValue;
  return Array.isArray(i38) && i38.length > 0;
}), hasSelectedValue: ut2((e58) => {
  let { selectedValue: i38, selectionMode: r49 } = e58;
  return i38 == null ? false : r49 === "multiple" && Array.isArray(i38) ? i38.length > 0 : true;
}), hasNullItemLabel: ut2((e58, i38) => i38 ? h11(e58.items) : false), open: ut2((e58) => e58.open), mounted: ut2((e58) => e58.mounted), forceMounted: ut2((e58) => e58.forceMounted), inline: ut2((e58) => e58.inline), activeIndex: ut2((e58) => e58.activeIndex), selectedIndex: ut2((e58) => e58.selectedIndex), isActive: ut2((e58, i38) => e58.activeIndex === i38), isSelected: ut2((e58, i38) => {
  let r49 = e58.isItemEqualToValue, l19 = e58.selectedValue;
  return Array.isArray(l19) ? l19.some((o62) => e15(i38, o62, r49)) : e15(i38, l19, r49);
}), transitionStatus: ut2((e58) => e58.transitionStatus), popupProps: ut2((e58) => e58.popupProps), inputProps: ut2((e58) => e58.inputProps), triggerProps: ut2((e58) => e58.triggerProps), itemProps: ut2((e58) => e58.itemProps), positionerElement: ut2((e58) => e58.positionerElement), listElement: ut2((e58) => e58.listElement), triggerElement: ut2((e58) => e58.triggerElement), inputElement: ut2((e58) => e58.inputElement), inputGroupElement: ut2((e58) => e58.inputGroupElement), popupSide: ut2((e58) => e58.popupSide), openMethod: ut2((e58) => e58.openMethod), inputInsidePopup: ut2((e58) => e58.inputInsidePopup), inputOwnsFormValue: ut2((e58) => e58.inputOwnsFormValue), selectionMode: ut2((e58) => e58.selectionMode), name: ut2((e58) => e58.name), form: ut2((e58) => e58.form), disabled: ut2((e58) => e58.disabled), readOnly: ut2((e58) => e58.readOnly), required: ut2((e58) => e58.required), grid: ut2((e58) => e58.grid), virtualized: ut2((e58) => e58.virtualized), itemToStringLabel: ut2((e58) => e58.itemToStringLabel), isItemEqualToValue: ut2((e58) => e58.isItemEqualToValue), modal: ut2((e58) => e58.modal), autoHighlight: ut2((e58) => e58.autoHighlight), submitOnItemClick: ut2((e58) => e58.submitOnItemClick) };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/field-root-context/FieldRootContext.mjs
import * as i27 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/field-constants/constants.mjs
var l14 = function(a38) {
  return a38.disabled = "data-disabled", a38.valid = "data-valid", a38.invalid = "data-invalid", a38.touched = "data-touched", a38.dirty = "data-dirty", a38.filled = "data-filled", a38.focused = "data-focused", a38;
}({});
var s26 = { badInput: false, customError: false, patternMismatch: false, rangeOverflow: false, rangeUnderflow: false, stepMismatch: false, tooLong: false, tooShort: false, typeMismatch: false, valid: null, valueMissing: false };
var e16 = { valid: null, touched: false, dirty: false, filled: false, focused: false };
var i26 = { disabled: false, ...e16 };
var n25 = { valid(a38) {
  return a38 === null ? null : a38 ? { [l14.valid]: "" } : { [l14.invalid]: "" };
} };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/field-root-context/FieldRootContext.mjs
var s27 = { invalid: void 0, name: void 0, validityData: { state: s26, errors: [], error: "", value: "", initialValue: null }, setValidityData: e5, disabled: void 0, touched: e16.touched, setTouched: e5, dirty: e16.dirty, setDirty: e5, filled: e16.filled, setFilled: e5, focused: e16.focused, setFocused: e5, validate: () => null, validationMode: "onSubmit", validationDebounceTime: 0, shouldValidateOnChange: () => false, state: i26, markedDirtyRef: { current: false }, registerFieldControl: e5, validation: { getValidationProps: (t48 = o7) => t48, getInputValidationProps: (t48 = o7) => t48, inputRef: { current: null }, commit: async () => {
} } };
var u18 = i27.createContext(s27);
function E14(t48 = true) {
  let r49 = i27.useContext(u18);
  if (r49.setValidityData === e5 && !t48) throw new Error(f2(28));
  return r49;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/field-register-control/useRegisterFieldControl.mjs
import * as c24 from "react";
function d21(o62, n61, s54, u37, i38 = true) {
  let { registerFieldControl: t48 } = E14(), e58 = c24.useRef(null);
  e58.current || (e58.current = Symbol()), o2(() => {
    let r49 = e58.current;
    return !r49 || !i38 ? void 0 : (t48(r49, { controlRef: o62, getValue: u37, id: n61, value: s54 }), () => {
      t48(r49, void 0);
    });
  }, [o62, i38, u37, n61, t48, s54]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/form-context/FormContext.mjs
import * as e17 from "react";
var o34 = e17.createContext({ formRef: { current: { fields: /* @__PURE__ */ new Map() } }, errors: {}, clearErrors: e5, validationMode: "onSubmit", submitAttemptedRef: { current: false } });
function n26() {
  return e17.useContext(o34);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/labelable-provider/useLabelableId.mjs
import * as o35 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/labelable-provider/LabelableContext.mjs
import * as e18 from "react";
var n27 = e18.createContext({ controlId: void 0, registerControlId: e5, labelId: void 0, setLabelId: e5, messageIds: [], setMessageIds: e5, getDescriptionProps: (o62) => o62 });
function s28() {
  return e18.useContext(n27);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/labelable-provider/useLabelableId.mjs
function F6(p31 = {}) {
  let { id: e58, implicit: u37 = false, controlRef: c40 } = p31, { controlId: s54, registerControlId: r49 } = s28(), l19 = r5(e58), d31 = u37 ? s54 : void 0, f35 = u2(() => Symbol("labelable-control")), i38 = o35.useRef(false), a38 = o35.useRef(e58 != null), n61 = E(() => {
    !i38.current || r49 === e5 || (i38.current = false, r49(f35.current, void 0));
  });
  return o2(() => {
    if (r49 === e5) return;
    let t48;
    if (u37) {
      let m25 = c40?.current;
      h4(m25) && m25.closest("label") != null ? t48 = e58 ?? null : t48 = d31 ?? l19;
    } else if (e58 != null) a38.current = true, t48 = e58;
    else if (a38.current) t48 = l19;
    else {
      n61();
      return;
    }
    if (t48 === void 0) {
      n61();
      return;
    }
    i38.current = true, r49(f35.current, t48);
  }, [e58, c40, d31, r49, u37, l19, f35, n61]), o35.useEffect(() => n61, [n61]), s54 ?? l19;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/root/utils/index.mjs
function f22(r49, e58) {
  return (t48, i38) => {
    if (t48 == null) return false;
    let n61 = b7(t48, e58);
    return r49.contains(n61, i38);
  };
}
function s29(r49, e58, t48) {
  return (i38, n61) => {
    if (i38 == null) return false;
    if (!n61) return true;
    let u37 = b7(i38, e58), l19 = t48 != null ? b7(t48, e58) : "";
    return l19 && r49.contains(l19, n61) && l19.length === n61.length ? true : r49.contains(u37, n61);
  };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/root/utils/useFilter.mjs
import * as e19 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/filter.mjs
var u19 = /* @__PURE__ */ new Map();
function p20(e58 = {}) {
  let c40 = { usage: "search", sensitivity: "base", ignorePunctuation: true, ...e58 }, a38 = `${h12(e58.locale)}|${JSON.stringify(c40)}`, g20 = u19.get(a38);
  if (g20) return g20;
  let o62 = new Intl.Collator(e58.locale, c40), f35 = { contains(i38, t48, s54) {
    if (!t48) return true;
    let n61 = b7(i38, s54);
    for (let r49 = 0; r49 <= n61.length - t48.length; r49 += 1) if (o62.compare(n61.slice(r49, r49 + t48.length), t48) === 0) return true;
    return false;
  }, startsWith(i38, t48, s54) {
    if (!t48) return true;
    let n61 = b7(i38, s54);
    return o62.compare(n61.slice(0, t48.length), t48) === 0;
  }, endsWith(i38, t48, s54) {
    if (!t48) return true;
    let n61 = b7(i38, s54), r49 = t48.length;
    return n61.length >= r49 && o62.compare(n61.slice(n61.length - r49), t48) === 0;
  } };
  return u19.set(a38, f35), f35;
}
function h12(e58) {
  return Array.isArray(e58) ? e58.map((c40) => h12(c40)).join(",") : e58 == null ? "" : String(e58);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/root/utils/useFilter.mjs
var C9 = p20;
function h13(n61 = {}) {
  let { multiple: o62 = false, value: r49, ...u37 } = n61, t48 = p20(u37), l19 = e19.useCallback((s54, i38, a38) => o62 ? f22(t48, a38)(s54, i38) : s29(t48, a38, r49)(s54, i38), [t48, r49, o62]);
  return e19.useMemo(() => ({ contains: l19, startsWith: t48.startsWith, endsWith: t48.endsWith }), [l19, t48]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/root/AriaCombobox.mjs
import { jsx as te3, jsxs as Kn2 } from "react/jsx-runtime";
var et = Symbol("none");
var G8 = { value: et, index: -1 };
function Mr(j17) {
  let { id: Ot4, onOpenChangeComplete: nt9, defaultSelectedValue: rt9 = null, selectedValue: Ft5, onSelectedValueChange: Tt11, defaultInputValue: it8, inputValue: ot5, open: Ht5, defaultOpen: Mt6 = false, selectionMode: s54 = "none", onItemHighlighted: wt8, name: Lt7, form: W14, disabled: kt8 = false, readOnly: L20 = false, required: fe7 = false, inputRef: qt5, grid: Y18 = false, items: a38, filteredItems: de8, filter: me7, openOnInputClick: pe9 = true, autoHighlight: lt8 = false, keepHighlight: Nt4 = false, highlightItemOnHover: _t8 = true, loopFocus: st7 = true, itemToStringLabel: m25, itemToStringValue: k17, isItemEqualToValue: J18 = u17, virtualized: He10 = false, inline: ne12 = false, fillInputOnItemPress: Gt5 = true, modal: Me10 = false, limit: T17 = -1, autoComplete: ut7 = "list", formAutoComplete: Ut5, locale: Qt2, submitOnItemClick: we7 = false } = j17, { clearErrors: at8 } = n26(), { setDirty: ge10, validityData: Ie7, shouldValidateOnChange: he6, setFilled: Le7, name: zt4, disabled: Bt5, setTouched: jt3, setFocused: Wt3, validationMode: Yt7, validation: C18 } = E14(), Jt7 = o4(), Q16 = F6({ id: Ot4 }), Re8 = C9({ locale: Qt2 }), [z17, re8] = n28.useState(false), [ct7, ie10] = n28.useState(null), ke8 = n28.useRef([]), ft9 = n28.useRef([]), qe4 = n28.useRef(null), y24 = n28.useRef(null), $t2 = n28.useRef(null), Kt4 = n28.useRef(null), Xt9 = n28.useRef(null), dt7 = n28.useRef(true), mt8 = n28.useRef(false), pt7 = n28.useRef(null), gt6 = n28.useRef(null), Ne7 = n28.useRef(null), S18 = n28.useRef(G8), _e7 = n28.useRef(null), $9 = n28.useRef([]), It7 = n28.useRef([]), q15 = Bt5 || kt8, H16 = zt4 ?? Lt7, p31 = s54 === "multiple", V12 = s54 === "single", K14 = ot5 !== void 0 || it8 !== void 0, N20 = a38 !== void 0, Ge7 = de8 !== void 0, g20;
  lt8 === "always" ? g20 = "always" : g20 = lt8 ? "input-change" : false;
  let [r49, Zt3] = m({ controlled: Ft5, default: p31 ? rt9 ?? t5 : rt9, name: "Combobox", state: "selectedValue" }), Ce7 = n28.useMemo(() => me7 === null ? () => true : me7 !== void 0 ? me7 : V12 && !z17 ? s29(Re8, m25, r49) : f22(Re8, m25), [me7, V12, r49, z17, Re8, m25]), ht8 = u2(() => K14 ? it8 ?? "" : V12 ? b7(r49, m25) : "").current, [I26, Dt8] = m({ controlled: ot5, default: ht8, name: "Combobox", state: "inputValue" }), [c40, en2] = m({ controlled: Ht5, default: Mt6, name: "Combobox", state: "open" }), M20 = c23(a38), h24 = ct7 ?? (I26 === "" ? "" : String(I26).trim()), Ue11 = V12 ? b7(r49, m25) : "", Rt8 = V12 && !z17 && h24 !== "" && Ue11 !== "" && Ue11.length === h24.length && Re8.contains(Ue11, h24), oe10 = Rt8 ? "" : h24, Ct9 = N20 && Ge7 && Rt8, X11 = n28.useMemo(() => a38 ? M20 ? a38.flatMap((e58) => e58.items) : a38 : t5, [a38, M20]), le9 = n28.useMemo(() => {
    if (de8 && !Ct9) return de8;
    if (!a38) return t5;
    if (M20) {
      let t48 = a38, o62 = [], l19 = 0;
      for (let d31 of t48) {
        if (T17 > -1 && l19 >= T17) break;
        let f35 = oe10 === "" ? d31.items : d31.items.filter((Ae7) => Ce7(Ae7, oe10, m25));
        if (f35.length === 0) continue;
        let B17 = T17 > -1 ? T17 - l19 : 1 / 0, _19 = f35.slice(0, B17);
        if (_19.length > 0) {
          let Ae7 = { ...d31, items: _19 };
          o62.push(Ae7), l19 += _19.length;
        }
      }
      return o62;
    }
    if (oe10 === "") return T17 > -1 ? X11.slice(0, T17) : X11;
    let e58 = [];
    for (let t48 of X11) {
      if (T17 > -1 && e58.length >= T17) break;
      Ce7(t48, oe10, m25) && e58.push(t48);
    }
    return e58;
  }, [de8, Ct9, a38, M20, oe10, T17, Ce7, m25, X11]), x21 = n28.useMemo(() => M20 ? le9.flatMap((t48) => t48.items) : le9, [le9, M20]), i38 = u2(() => new A8({ id: Q16, labelId: void 0, selectedValue: r49, open: c40, filter: Ce7, query: h24, items: a38, selectionMode: s54, listRef: ke8, labelsRef: ft9, popupRef: qe4, emptyRef: Xt9, inputRef: y24, startDismissRef: $t2, endDismissRef: Kt4, keyboardActiveRef: dt7, chipsContainerRef: pt7, clearRef: gt6, valuesRef: $9, allValuesRef: It7, selectionEventRef: Ne7, name: H16, form: W14, disabled: q15, readOnly: L20, required: fe7, grid: Y18, isGrouped: M20, virtualized: He10, openOnInputClick: pe9, itemToStringLabel: m25, isItemEqualToValue: J18, modal: Me10, autoHighlight: g20, submitOnItemClick: we7, hasInputValue: K14, mounted: false, forceMounted: false, transitionStatus: "idle", inline: ne12, activeIndex: null, selectedIndex: null, popupProps: {}, inputProps: {}, triggerProps: {}, itemProps: o7, positionerElement: null, listElement: null, triggerElement: null, inputElement: null, inputGroupElement: null, popupSide: null, openMethod: null, inputInsidePopup: true, inputOwnsFormValue: s54 === "none", onOpenChangeComplete: nt9 || e5, setOpen: e5, setInputValue: e5, setSelectedValue: e5, setIndices: e5, onItemHighlighted: e5, handleSelection: e5, forceMount: e5, requestSubmit: e5 })).current, Z17 = s54 === "none" ? I26 : r49, tn3 = n28.useMemo(() => s54 === "none" ? Z17 : Array.isArray(r49) ? r49.map((e58) => j8(e58, k17)) : j8(r49, k17), [Z17, k17, s54, r49]), Qe7 = E(wt8), ze8 = E(nt9), ye9 = L8(i38, d20.activeIndex), nn2 = L8(i38, d20.selectedIndex), Ve7 = L8(i38, d20.positionerElement), yt9 = L8(i38, d20.listElement), se12 = L8(i38, d20.triggerElement), xe9 = L8(i38, d20.inputElement), rn = L8(i38, d20.inputGroupElement), R27 = L8(i38, d20.inline), A17 = L8(i38, d20.inputInsidePopup), on3 = L8(i38, d20.inputOwnsFormValue), ln = I8(se12), { mounted: Vt8, setMounted: sn2, transitionStatus: Be6 } = g2(c40), { openMethod: xt5, triggerProps: je8 } = C7(c40), un3 = E(() => tn3);
  d21(A17 ? ln : y24, Q16, Z17, un3);
  let ve9 = E(() => {
    a38 ? ft9.current = x21.map((e58) => b7(e58, m25)) : i38.set("forceMounted", true);
  }), an = n28.useRef(r49);
  o2(() => {
    r49 !== an.current && ve9();
  }, [ve9, r49]);
  let v17 = E((e58) => {
    i38.update(e58);
    let t48 = e58.type || "none";
    if (e58.activeIndex !== void 0) if (e58.activeIndex === null) S18.current !== G8 && (S18.current = G8, Qe7(void 0, d3(t48, void 0, { index: -1 })));
    else {
      let o62 = $9.current[e58.activeIndex];
      S18.current = { value: o62, index: e58.activeIndex }, Qe7(o62, d3(t48, void 0, { index: e58.activeIndex }));
    }
  }), b14 = E((e58, t48) => {
    if (mt8.current = t48.reason === s4.inputClear, j17.onInputValueChange?.(e58, t48), !t48.isCanceled) {
      if (t48.reason === s4.inputChange) {
        let o62 = t48.event, l19 = o62.inputType;
        if (o62.type === "compositionend" || l19 != null && l19 !== "" && l19 !== "insertReplacementText") {
          let f35 = e58.trim() !== "";
          f35 && re8(true), _e7.current = { hasQuery: f35 }, f35 && g20 && i38.state.activeIndex == null && i38.set("activeIndex", 0);
        }
      }
      Dt8(e58);
    }
  }), ue7 = E((e58, t48) => {
    if (c40 !== e58 && (t48.reason === "escape-key" && N20 && x21.length === 0 && !i38.state.emptyRef.current && t48.allowPropagation(), j17.onOpenChange?.(e58, t48), !t48.isCanceled && (e58 && p31 && A17 && !R27 && ct7 !== null && (re8(false), ie10(null), I26 !== "" && b14("", u4(s4.inputClear, t48.event))), !e58 && z17 && (V12 ? (R27 || ie10(h24), h24 === "" && re8(false)) : p31 && (R27 || ie10(h24), A17 && v17({ activeIndex: null }), (!A17 || R27) && b14("", u4(s4.inputClear, t48.event)))), en2(e58), !e58 && A17 && (t48.reason === s4.focusOut || t48.reason === s4.outsidePress) && (jt3(true), Wt3(false), Yt7 === "onBlur")))) {
      let o62 = s54 === "none" ? I26 : r49;
      C18.commit(o62);
    }
  }), be8 = E((e58, t48) => {
    if (Tt11?.(e58, t48), t48.isCanceled) return;
    Zt3(e58), (s54 === "none" && qe4.current && Gt5 || V12 && !i38.state.inputInsidePopup) && b14(b7(e58, m25), u4(t48.reason, t48.event)), V12 && e58 != null && t48.reason !== s4.inputChange && z17 && !R27 && ie10(h24);
  }), cn3 = E((e58, t48) => {
    let o62 = t48;
    if (o62 === void 0) {
      if (ye9 === null) return;
      o62 = $9.current[ye9];
    }
    let l19 = f10(e58), d31 = Ne7.current ?? e58;
    Ne7.current = null;
    let f35 = u4(s4.itemPress, d31), B17 = l19?.closest("a")?.getAttribute("href");
    if (B17) {
      B17.startsWith("#") && ue7(false, f35);
      return;
    }
    if (p31) {
      let _19 = Array.isArray(r49) ? r49 : [], Rn2 = i24(_19, o62, i38.state.isItemEqualToValue) ? x12(_19, o62, i38.state.isItemEqualToValue) : [..._19, o62];
      if (be8(Rn2, f35), !(y24.current ? y24.current.value.trim() !== "" : false)) return;
      i38.state.inputInsidePopup ? b14("", u4(s4.inputClear, f35.event)) : ue7(false, f35);
    } else be8(o62, f35), ue7(false, f35);
  }), We8 = E(() => {
    if (!i38.state.submitOnItemClick) return;
    let e58 = C18.inputRef.current?.form ?? i38.state.inputElement?.form;
    e58 && typeof e58.requestSubmit == "function" && e58.requestSubmit();
  }), Ye6 = E(() => {
    if (sn2(false), ze8?.(false), re8(false), ie10(null), v17(s54 === "none" ? { activeIndex: null, selectedIndex: null } : { activeIndex: null }), p31 && y24.current && y24.current.value !== "" && !mt8.current && b14("", u4(s4.inputClear)), V12) if (i38.state.inputInsidePopup) y24.current && y24.current.value !== "" && b14("", u4(s4.inputClear));
    else {
      let e58 = b7(r49, m25);
      if (y24.current && y24.current.value !== e58) {
        let t48 = e58 === "" ? s4.inputClear : s4.none;
        b14(e58, u4(t48));
      }
    }
  }), fn2 = n28.useMemo(() => R27 && Ve7 ? { current: Ve7.closest('[role="dialog"]') } : qe4, [R27, Ve7]);
  p10({ enabled: !j17.actionsRef, open: c40, ref: fn2, onComplete() {
    c40 || Ye6();
  } }), n28.useImperativeHandle(j17.actionsRef, () => ({ unmount: Ye6 }), [Ye6]), o2(function() {
    if (c40 || s54 === "none") return;
    let t48 = a38 ? X11 : It7.current;
    if (p31) {
      let o62 = Array.isArray(r49) ? r49 : [], l19 = o62[o62.length - 1], d31 = o33(t48, l19, J18);
      v17({ selectedIndex: d31 === -1 ? null : d31 });
    } else {
      let o62 = o33(t48, r49, J18);
      v17({ selectedIndex: o62 === -1 ? null : o62 });
    }
  }, [c40, r49, a38, s54, X11, p31, J18, v17]), o2(() => {
    a38 && ($9.current = x21, ke8.current.length = x21.length);
  }, [a38, x21]), o2(() => {
    let e58 = _e7.current;
    if (e58 && (e58.hasQuery ? g20 && i38.set("activeIndex", 0) : g20 === "always" && i38.set("activeIndex", 0), _e7.current = null), !c40 && !R27) return;
    let o62 = N20 || Ge7 ? x21 : $9.current, l19 = i38.state.activeIndex;
    if (l19 == null) {
      if (g20 === "always" && o62.length > 0) {
        i38.set("activeIndex", 0);
        return;
      }
      S18.current !== G8 && (S18.current = G8, i38.state.onItemHighlighted(void 0, d3(s4.none, void 0, { index: -1 })));
      return;
    }
    if (l19 >= o62.length) {
      S18.current !== G8 && (S18.current = G8, i38.state.onItemHighlighted(void 0, d3(s4.none, void 0, { index: -1 }))), i38.set("activeIndex", null);
      return;
    }
    let d31 = o62[l19], f35 = S18.current.value, B17 = f35 !== et && e15(d31, f35, i38.state.isItemEqualToValue);
    (S18.current.index !== l19 || !B17) && (S18.current = { value: d31, index: l19 }, i38.state.onItemHighlighted(d31, d3(s4.none, void 0, { index: l19 })));
  }, [ye9, g20, Ge7, N20, x21, R27, c40, i38]), o2(() => {
    if (s54 === "none") {
      Le7(String(I26) !== "");
      return;
    }
    Le7(p31 ? Array.isArray(r49) && r49.length > 0 : r49 != null);
  }, [Le7, s54, I26, r49, p31]), n28.useEffect(() => {
    N20 && g20 && x21.length === 0 && v17({ activeIndex: null });
  }, [N20, g20, x21.length, v17]), u16(h24, () => {
    !c40 || h24 === "" || h24 === String(ht8) || re8(true);
  }), u16(r49, () => {
    if (s54 !== "none" && (at8(H16), ge10(r49 !== Ie7.initialValue), he6() ? C18.commit(r49) : C18.commit(r49, true), V12 && !K14 && !A17)) {
      let e58 = b7(r49, m25);
      I26 !== e58 && b14(e58, u4(s4.none));
    }
  }), u16(I26, () => {
    s54 === "none" && (at8(H16), ge10(I26 !== Ie7.initialValue), he6() ? C18.commit(I26) : C18.commit(I26, true));
  }), u16(a38, () => {
    if (!V12 || K14 || A17 || z17) return;
    let e58 = b7(r49, m25);
    I26 !== e58 && b14(e58, u4(s4.none));
  });
  let Pe6 = jt({ open: R27 ? true : c40, onOpenChange: ue7, elements: { reference: A17 ? se12 : xe9, floating: Ve7 } }), Je9, $e6;
  R27 || (Je9 = Y18 ? "grid" : "listbox", $e6 = c40 ? "true" : "false");
  let Ee7 = n28.useMemo(() => {
    let e58 = xe9?.tagName === "INPUT", t48 = xe9 == null || e58, o62 = t48 || c40, l19 = t48 ? { autoComplete: "off", spellCheck: "false", autoCorrect: "off", autoCapitalize: "none" } : {};
    return o62 && (l19.role = "combobox", l19["aria-expanded"] = $e6, l19["aria-haspopup"] = Je9, l19["aria-controls"] = c40 ? yt9?.id : void 0, l19["aria-autocomplete"] = ut7), { reference: l19, floating: { role: "presentation" } };
  }, [xe9, c40, $e6, Je9, yt9?.id, ut7]), vt6 = Mo(Pe6, { enabled: !L20 && !q15 && pe9, event: "mousedown-only", toggle: false, touchOpenDelay: A17 ? 0 : 100, reason: s4.inputPress }), Se8 = zo(Pe6, { enabled: !L20 && !q15 && !R27, outsidePressEvent: { mouse: "sloppy", touch: "intentional" }, bubbles: R27 ? true : void 0, outsidePress(e58) {
    let t48 = f10(e58);
    return !u9(se12, t48) && !u9(gt6.current, t48) && !u9(pt7.current, t48) && !u9(rn, t48);
  } }), D14 = nc(Pe6, { enabled: !L20 && !q15, id: Q16, listRef: ke8, activeIndex: ye9, selectedIndex: nn2, virtual: true, loopFocus: st7, allowEscape: st7 && !g20, focusItemOnOpen: z17 || s54 === "none" && !g20 ? false : "auto", focusItemOnHover: _t8, resetOnPointerLeave: !Nt4, cols: Y18 ? 2 : 1, orientation: Y18 ? "horizontal" : void 0, rtl: Jt7 === "rtl", disabledIndices: t5, onNavigate(e58, t48) {
    !t48 && !c40 || Be6 === "ending" || v17(t48 ? { activeIndex: e58, type: dt7.current ? "keyboard" : "pointer" } : { activeIndex: e58 });
  } }), Ke10 = n28.useMemo(() => d2(D14.reference, Se8.reference, vt6.reference, Ee7.reference), [D14.reference, Se8.reference, vt6.reference, Ee7.reference]), Xe11 = n28.useMemo(() => d2(le2, D14.floating, Se8.floating, Ee7.floating), [D14.floating, Se8.floating, Ee7.floating]), Ze9 = n28.useMemo(() => {
    let e58 = D14.item;
    return e58 ? { ...e58, onFocus: void 0 } : o7;
  }, [D14.item]);
  n16(() => {
    i38.update({ inline: ne12, popupProps: Xe11, inputProps: Ke10, triggerProps: je8, itemProps: Ze9, setOpen: ue7, setInputValue: b14, setSelectedValue: be8, setIndices: v17, onItemHighlighted: Qe7, handleSelection: cn3, forceMount: ve9, requestSubmit: We8 });
  }), o2(() => {
    i38.update({ id: Q16, selectedValue: r49, open: c40, mounted: Vt8, transitionStatus: Be6, items: a38, inline: ne12, popupProps: Xe11, inputProps: Ke10, triggerProps: je8, openMethod: xt5, itemProps: Ze9, selectionMode: s54, name: H16, form: W14, disabled: q15, readOnly: L20, required: fe7, grid: Y18, isGrouped: M20, virtualized: He10, onOpenChangeComplete: ze8, openOnInputClick: pe9, itemToStringLabel: m25, modal: Me10, autoHighlight: g20, isItemEqualToValue: J18, submitOnItemClick: we7, hasInputValue: K14, requestSubmit: We8, inputOwnsFormValue: s54 === "none" && (ne12 || !i38.state.inputInsidePopup) });
  }, [i38, Q16, r49, c40, Vt8, Be6, a38, Xe11, Ke10, Ze9, xt5, je8, s54, H16, q15, L20, fe7, C18, Y18, M20, He10, ze8, pe9, m25, Me10, J18, we7, K14, ne12, We8, g20, W14]);
  let dn2 = d(qt5, C18.inputRef), mn = n28.useMemo(() => ({ query: h24, hasItems: N20, filteredItems: le9, flatFilteredItems: x21 }), [h24, N20, le9, x21]), pn2 = n28.useMemo(() => Array.isArray(Z17) ? "" : j8(Z17, k17), [Z17, k17]), gn3 = p31 && Array.isArray(r49) && r49.length > 0, De10 = p31 || s54 === "none" && on3 ? void 0 : H16, In2 = n28.useMemo(() => !p31 || !Array.isArray(r49) || !H16 ? null : r49.map((e58) => {
    let t48 = j8(e58, k17);
    return te3("input", { type: "hidden", form: W14, name: H16, value: t48 }, t48);
  }), [p31, r49, W14, H16, k17]), hn = Kn2(n28.Fragment, { children: [j17.children, te3("input", { ...C18.getInputValidationProps({ onFocus() {
    if (A17) {
      se12?.focus();
      return;
    }
    (y24.current || se12)?.focus();
  }, onChange(e58) {
    if (e58.nativeEvent.defaultPrevented || q15 || L20) {
      e58.preventBaseUIHandler?.();
      return;
    }
    let t48 = e58.currentTarget.value, o62 = u4(s4.none, e58.nativeEvent);
    function l19() {
      if (p31) return;
      if (s54 === "none") {
        ge10(t48 !== Ie7.initialValue), b14(t48, o62), he6() && C18.commit(t48);
        return;
      }
      let d31 = $9.current.find((f35) => j8(f35, k17).toLowerCase() === t48.toLowerCase() || b7(f35, m25).toLowerCase() === t48.toLowerCase());
      d31 != null && (ge10(d31 !== Ie7.initialValue), be8?.(d31, o62), he6() && C18.commit(d31));
    }
    a38 ? l19() : (ve9(), queueMicrotask(l19));
  } }), id: Q16 && De10 == null ? `${Q16}-hidden-input` : void 0, form: W14, name: De10, autoComplete: Ut5, disabled: q15, required: fe7 && !gn3, readOnly: L20, value: pn2, ref: dn2, style: De10 ? t13 : e8, tabIndex: -1, "aria-hidden": true, suppressHydrationWarning: true }), In2] });
  return te3(n24.Provider, { value: i38, children: te3(x11.Provider, { value: Pe6, children: te3(r23.Provider, { value: mn, children: te3(s24.Provider, { value: I26, children: hn }) }) }) });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/autocomplete.mjs
import { jsx as _8 } from "react/jsx-runtime";
import * as V5 from "react";
import { jsx as q10 } from "react/jsx-runtime";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/trigger/ComboboxTrigger.mjs
import * as c25 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/utils/stateAttributesMapping.mjs
var r24 = { ...a19, ...n25, popupSide: (p31) => p31 ? { "data-popup-side": p31 } : null, listEmpty: (p31) => p31 ? { "data-list-empty": "" } : null };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/getPseudoElementBounds.mjs
function m13(e58) {
  let t48 = e58.getBoundingClientRect(), i38 = i10(e58), o62 = i38.getComputedStyle(e58, "::before"), n61 = i38.getComputedStyle(e58, "::after");
  if (!(o62.content !== "none" || n61.content !== "none")) return t48;
  let r49 = parseFloat(o62.width) || 0, c40 = parseFloat(o62.height) || 0, a38 = parseFloat(n61.width) || 0, f35 = parseFloat(n61.height) || 0, d31 = Math.max(t48.width, r49, a38), g20 = Math.max(t48.height, c40, f35), s54 = d31 - t48.width, h24 = g20 - t48.height;
  return { left: t48.left - s54 / 2, right: t48.right + s54 / 2, top: t48.top - h24 / 2, bottom: t48.bottom + h24 / 2 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/resolveAriaLabelledBy.mjs
function n29(e58) {
  return e58 == null ? void 0 : `${e58}-label`;
}
function t19(e58, l19) {
  return e58 ?? l19;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/trigger/ComboboxTrigger.mjs
var g13 = 2;
var tt3 = c25.forwardRef(function(y24, w22) {
  let { render: Oe5, className: Ae7, nativeButton: M20 = true, disabled: v17 = false, id: x21, style: Le7, ...I26 } = y24, { state: B17, disabled: O14, setTouched: A17, setFocused: h24, validationMode: L20, validation: R27 } = E14(), { labelId: N20 } = s28(), e58 = i23(), { filteredItems: k17 } = c22(), E30 = L8(e58, d20.selectionMode), T17 = L8(e58, d20.disabled), u37 = L8(e58, d20.readOnly), F14 = L8(e58, d20.required), U11 = L8(e58, d20.mounted), q15 = L8(e58, d20.popupSide), P17 = L8(e58, d20.positionerElement), Y18 = L8(e58, d20.listElement), X11 = L8(e58, d20.triggerProps), i38 = L8(e58, d20.triggerElement), r49 = L8(e58, d20.inputInsidePopup), _19 = L8(e58, d20.id), z17 = L8(e58, d20.labelId), d31 = L8(e58, d20.open), H16 = L8(e58, d20.selectedValue), K14 = L8(e58, d20.activeIndex), j17 = L8(e58, d20.selectedIndex), G18 = L8(e58, d20.hasSelectedValue), s54 = C8(), J18 = m12(), Q16 = p12(), p31 = O14 || T17 || v17, W14 = k17.length === 0, Z17 = U11 && P17 ? q15 : null;
  F6({ id: r49 ? x21 : void 0 });
  let $9 = r49 ? x21 ?? _19 : x21, ee7 = t19(N20, z17), S18 = c25.useRef("");
  function V12(n61) {
    S18.current = n61.pointerType;
  }
  let D14 = s54.useState("domReferenceElement");
  c25.useEffect(() => {
    r49 && i38 && i38 !== D14 && s54.set("domReferenceElement", i38);
  }, [i38, D14, s54, r49]);
  let { reference: te7 } = sc(s54, { enabled: !d31 && !u37 && !T17 && E30 === "single", listRef: e58.state.labelsRef, activeIndex: K14, selectedIndex: j17, onMatch(n61) {
    let a38 = e58.state.valuesRef.current[n61];
    a38 !== void 0 && e58.state.setSelectedValue(a38, u4("none"));
  } }), { reference: oe10 } = Mo(s54, { enabled: !u37 && !T17, event: "mousedown" }), { buttonRef: ne12, getButtonProps: re8 } = Q({ native: M20, disabled: p31 }), ie10 = { ...B17, open: d31, disabled: p31, popupSide: Z17, listEmpty: W14, placeholder: E30 === "none" ? false : !G18 }, se12 = E((n61) => {
    e58.set("triggerElement", n61);
  });
  return J("button", y24, { ref: [w22, ne12, se12], state: ie10, props: [X11, oe10, te7, { id: $9, tabIndex: r49 ? 0 : -1, role: r49 ? "combobox" : void 0, "aria-expanded": d31 ? "true" : "false", "aria-haspopup": r49 ? "dialog" : "listbox", "aria-controls": d31 ? Y18?.id : void 0, "aria-required": r49 && F14 || void 0, "aria-labelledby": ee7, onPointerDown: V12, onPointerEnter: V12, onFocus() {
    h24(true), !(p31 || u37) && Q16.start(0, e58.state.forceMount);
  }, onBlur(n61) {
    if (!u9(P17, n61.relatedTarget) && (A17(true), h24(false), L20 === "onBlur")) {
      let a38 = E30 === "none" ? J18 : H16;
      R27.commit(a38);
    }
  }, onMouseDown(n61) {
    if (p31 || u37 || (r49 || s54.set("domReferenceElement", n61.currentTarget), e58.state.forceMount(), S18.current !== "touch" && (e58.state.inputRef.current?.focus(), r49 || n61.preventDefault()), d31)) return;
    let a38 = n13(n61.currentTarget);
    function ae11(l19) {
      if (!i38) return;
      let f35 = f10(l19), le9 = e58.state.positionerElement, ce8 = e58.state.listElement;
      if (u9(i38, f35) || u9(le9, f35) || u9(ce8, f35) || f35 === i38) return;
      let m25 = m13(i38), ue7 = l19.clientX >= m25.left - g13 && l19.clientX <= m25.right + g13, de8 = l19.clientY >= m25.top - g13 && l19.clientY <= m25.bottom + g13;
      ue7 && de8 || e58.state.setOpen(false, u4("cancel-open", l19));
    }
    r49 && a38.addEventListener("mouseup", ae11, { once: true });
  }, onKeyDown(n61) {
    p31 || u37 || (n61.key === "ArrowDown" || n61.key === "ArrowUp") && (p7(n61), e58.state.setOpen(true, u4(s4.listNavigation, n61.nativeEvent)), e58.state.inputRef.current?.focus());
  } }, R27 ? R27.getValidationProps(I26) : I26, re8], stateAttributesMapping: r24 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/input/ComboboxInput.mjs
import * as p21 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/chips/ComboboxChipsContext.mjs
import * as o36 from "react";
var t20 = o36.createContext(void 0);
function e20() {
  return o36.useContext(t20);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/positioner/ComboboxPositionerContext.mjs
import * as o37 from "react";
var r25 = o37.createContext(void 0);
function s30(t48) {
  let e58 = o37.useContext(r25);
  if (e58 === void 0 && !t48) throw new Error(f2(21));
  return e58;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/utils/ComboboxInternalDismissButton.mjs
import * as t21 from "react";
import { jsx as d22 } from "react/jsx-runtime";
var N10 = t21.forwardRef(function(C18, s54) {
  let e58 = i23(), { buttonRef: n61, getButtonProps: r49 } = Q({ native: false }), i38 = d(s54, n61);
  function m25(o62) {
    e58.state.setOpen(false, u4(s4.closePress, o62.nativeEvent, o62.currentTarget));
  }
  let a38 = r49({ onClick: m25 });
  return d22("span", { ref: i38, ...a38, "aria-label": "Dismiss", tabIndex: void 0, style: t13 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/input/ComboboxInput.mjs
import { jsx as U5, jsxs as Ke2 } from "react/jsx-runtime";
var dt2 = p21.forwardRef(function(k17, W14) {
  let { render: Ne7, className: je8, disabled: X11 = false, id: z17, style: qe4, ...P17 } = k17, { state: G18, disabled: J18, setTouched: Q16, setFocused: S18, validationMode: Y18, validation: A17 } = E14(), { labelId: Z17 } = s28(), f35 = e20(), h24 = !!s30(true), e58 = i23(), { filteredItems: $9 } = c22(), O14 = m12(), w22 = o4(), L20 = L8(e58, d20.required), ee7 = L8(e58, d20.disabled), x21 = L8(e58, d20.readOnly), B17 = L8(e58, d20.name), te7 = L8(e58, d20.form), g20 = L8(e58, d20.selectionMode), F14 = L8(e58, d20.autoHighlight), ne12 = L8(e58, d20.inputProps), oe10 = L8(e58, d20.triggerProps), y24 = L8(e58, d20.open), M20 = L8(e58, d20.mounted), a38 = L8(e58, d20.selectedValue), se12 = L8(e58, d20.popupSide), ie10 = L8(e58, d20.positionerElement), re8 = L8(e58, d20.id), R27 = L8(e58, d20.inline), ae11 = L8(e58, d20.modal), v17 = !!F14, le9 = M20 && ie10 ? se12 : null, C18 = J18 || ee7 || X11, ue7 = $9.length === 0, _19 = h24 || R27, ce8 = !_19 || ae11, de8 = r5(z17 ?? (_19 ? void 0 : re8)), pe9 = t19(Z17, void 0), fe7 = h24 ? e16 : G18, [me7, T17] = p21.useState(null), E30 = p21.useRef(false), K14 = p21.useRef(null), D14 = p21.useRef(false), H16 = g20 === "none" && !h24, Ie7 = E((t48) => {
    let n61 = h24 || e58.state.inline;
    n61 && !e58.state.hasInputValue && e58.state.setInputValue("", u4(s4.none)), e58.update({ inputElement: t48, inputInsidePopup: n61, inputOwnsFormValue: H16 });
  }), he6 = h24 || !A17 ? P17 : A17.getValidationProps(P17), xe9 = { ...fe7, open: y24, disabled: C18, readOnly: x21, popupSide: le9, listEmpty: ue7 };
  function ge10(t48) {
    if (!f35) return;
    let n61, { highlightedChipIndex: l19 } = f35, u37 = f35.chipsRef.current.length, b14 = w22 === "rtl", m25 = b14 ? "ArrowRight" : "ArrowLeft", o62 = b14 ? "ArrowLeft" : "ArrowRight";
    if (l19 !== void 0) {
      if (t48.key === m25) t48.preventDefault(), l19 > 0 ? n61 = l19 - 1 : n61 = void 0;
      else if (t48.key === o62) t48.preventDefault(), l19 < u37 - 1 ? n61 = l19 + 1 : n61 = void 0;
      else if (t48.key === "Backspace" || t48.key === "Delete") {
        t48.preventDefault();
        let r49 = l19 >= a38.length - 1 ? a38.length - 2 : l19;
        n61 = r49 >= 0 ? r49 : void 0, e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: "keyboard" });
      }
      return n61;
    }
    return t48.key === m25 && (t48.currentTarget.selectionStart ?? 0) === 0 && a38.length > 0 ? (t48.preventDefault(), n61 = u37 > 0 ? u37 - 1 : void 0) : t48.key === "Backspace" && t48.currentTarget.value === "" && a38.length > 0 && (e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: "keyboard" }), t48.preventDefault()), n61;
  }
  let N20 = J("input", k17, { state: xe9, ref: [W14, e58.state.inputRef, Ie7], props: [ne12, oe10, { type: "text", value: k17.value ?? me7 ?? O14, "aria-readonly": x21 || void 0, "aria-required": L20 || void 0, "aria-labelledby": pe9, disabled: C18, readOnly: x21, required: g20 === "none" ? L20 : void 0, form: te7, ...H16 && B17 && { name: B17 }, id: de8, onFocus() {
    if (S18(true), !R27 || !D14.current) return;
    D14.current = false;
    let t48 = K14.current;
    t48 == null || !Object.hasOwn(e58.state.valuesRef.current, t48) || e58.state.setIndices({ activeIndex: t48 });
  }, onBlur() {
    Q16(true), S18(false);
    let t48 = e58.state.activeIndex;
    if (R27 && t48 !== null && F14 !== "always" && (K14.current = t48, D14.current = true, e58.state.setIndices({ activeIndex: null })), Y18 === "onBlur") {
      let n61 = g20 === "none" ? O14 : a38;
      A17.commit(n61);
    }
  }, onCompositionStart(t48) {
    l7 || (E30.current = true, T17(t48.currentTarget.value));
  }, onCompositionEnd(t48) {
    E30.current = false;
    let n61 = t48.currentTarget.value;
    T17(null), e58.state.setInputValue(n61, u4(s4.inputChange, t48.nativeEvent));
  }, onChange(t48) {
    let n61 = t48.nativeEvent.inputType, l19 = !n61 || n61 === "insertReplacementText", u37 = E30.current || !l19;
    if (E30.current) {
      let r49 = t48.currentTarget.value;
      T17(r49), r49 === "" && !e58.state.openOnInputClick && !e58.state.inputInsidePopup && e58.state.setOpen(false, u4(s4.inputClear, t48.nativeEvent));
      let I26 = r49.trim(), j17 = v17 && I26 !== "";
      !x21 && !C18 && I26 && u37 && (e58.state.setOpen(true, u4(s4.inputChange, t48.nativeEvent)), v17 || e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: e58.state.keyboardActiveRef.current ? "keyboard" : "pointer" })), y24 && e58.state.activeIndex !== null && !j17 && e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: e58.state.keyboardActiveRef.current ? "keyboard" : "pointer" });
      return;
    }
    e58.state.setInputValue(t48.currentTarget.value, u4(s4.inputChange, t48.nativeEvent));
    let b14 = t48.currentTarget.value === "", m25 = u4(s4.inputClear, t48.nativeEvent);
    b14 && !e58.state.inputInsidePopup && (g20 === "single" && e58.state.setSelectedValue(null, m25), e58.state.openOnInputClick || e58.state.setOpen(false, m25));
    let o62 = t48.currentTarget.value.trim();
    !x21 && !C18 && o62 && u37 && (e58.state.setOpen(true, u4(s4.inputChange, t48.nativeEvent)), v17 || e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: e58.state.keyboardActiveRef.current ? "keyboard" : "pointer" })), y24 && e58.state.activeIndex !== null && !v17 && e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: e58.state.keyboardActiveRef.current ? "keyboard" : "pointer" });
  }, onKeyDown(t48) {
    if (C18 || x21 || t48.ctrlKey || t48.shiftKey || t48.altKey || t48.metaKey) return;
    e58.state.keyboardActiveRef.current = true;
    let n61 = t48.currentTarget, l19 = n61.scrollWidth - n61.clientWidth, u37 = w22 === "rtl";
    if (t48.key === "Home") {
      p7(t48);
      let o62 = g5 && u37 ? n61.value.length : 0;
      n61.setSelectionRange(o62, o62), n61.scrollLeft = 0;
      return;
    }
    if (t48.key === "End") {
      p7(t48);
      let o62 = g5 && u37 ? 0 : n61.value.length;
      n61.setSelectionRange(o62, o62), n61.scrollLeft = u37 ? -l19 : l19;
      return;
    }
    if (!M20 && t48.key === "Escape") {
      let o62 = g20 === "multiple" && Array.isArray(a38) ? a38.length === 0 : a38 === null, r49 = u4(s4.escapeKey, t48.nativeEvent), I26 = g20 === "multiple" ? [] : null;
      e58.state.setInputValue("", r49), e58.state.setSelectedValue(I26, r49), !o62 && !e58.state.inline && !r49.isPropagationAllowed && t48.stopPropagation();
      return;
    }
    if (f35 && t48.key === "Backspace" && n61.value === "" && f35.highlightedChipIndex === void 0 && Array.isArray(a38) && a38.length > 0) {
      let o62 = f35.chipsRef.current.length, r49 = o62 > 0 ? o62 - 1 : a38.length - 1, I26 = a38.filter((j17, ye9) => ye9 !== r49);
      e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: e58.state.keyboardActiveRef.current ? "keyboard" : "pointer" }), e58.state.setSelectedValue(I26, u4(s4.none, t48.nativeEvent));
      return;
    }
    let b14 = f35?.highlightedChipIndex !== void 0, m25 = ge10(t48);
    if (f35?.setHighlightedChipIndex(m25), m25 !== void 0 ? f35?.chipsRef.current[m25]?.focus() : b14 && e58.state.inputRef.current?.focus(), t48.which !== 229 && t48.key === "Enter" && y24) {
      let o62 = e58.state.activeIndex, r49 = t48.nativeEvent;
      if (o62 === null) {
        if (R27) return;
        e58.state.setOpen(false, u4(s4.none, r49));
        return;
      }
      p7(t48);
      let I26 = e58.state.listRef.current[o62];
      I26 && (e58.state.selectionEventRef.current = r49, I26.click(), e58.state.selectionEventRef.current = null);
    }
  }, onPointerMove() {
    e58.state.keyboardActiveRef.current = false;
  }, onPointerDown() {
    e58.state.keyboardActiveRef.current = false;
  } }, he6], stateAttributesMapping: r24 }), be8 = h24 ? U5(u18.Provider, { value: s27, children: N20 }) : N20;
  return Ke2(p21.Fragment, { children: [y24 && ce8 && U5(N10, { ref: e58.state.startDismissRef }), be8] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/input-group/ComboboxInputGroup.mjs
import * as i28 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/utils/handleInputPress.mjs
function v10(t48, e58, i38, a38, u37) {
  if (t48.baseUIHandlerPrevented || a38) return;
  let n61 = f10(t48.nativeEvent), r49 = h4(n61) ? n61 : null;
  r49 !== t48.currentTarget && (u37?.(r49) || T(r49)) || (t48.preventDefault(), !i38 && (e58.state.inputRef.current?.focus(), e58.state.openOnInputClick && e58.state.setOpen(true, u4(s4.inputPress, t48.nativeEvent))));
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/input-group/ComboboxInputGroup.mjs
var Q7 = i28.forwardRef(function(s54, l19) {
  let { render: A17, className: k17, style: F14, ...m25 } = s54, { state: u37 } = E14(), e58 = i23(), { filteredItems: c40 } = c22(), a38 = L8(e58, d20.open), d31 = L8(e58, d20.mounted), b14 = L8(e58, d20.popupSide), f35 = L8(e58, d20.positionerElement), x21 = L8(e58, d20.disabled), r49 = L8(e58, d20.readOnly), C18 = L8(e58, d20.hasSelectedValue), S18 = L8(e58, d20.selectionMode), E30 = d31 && f35 ? b14 : null, p31 = x21, I26 = c40.length === 0, h24 = { ...u37, open: a38, disabled: p31, readOnly: r49, popupSide: E30, listEmpty: I26, placeholder: S18 === "none" ? false : !C18 }, R27 = E((n61) => {
    e58.set("inputGroupElement", n61);
  });
  return J("div", s54, { ref: [l19, R27], props: [{ role: "group", onMouseDown(n61) {
    v10(n61, e58, p31, r49, (g20) => u9(e58.state.chipsContainerRef.current, g20));
  } }, m25], state: h24, stateAttributesMapping: r24 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/icon/ComboboxIcon.mjs
import * as o38 from "react";
var b8 = o38.forwardRef(function(e58, n61) {
  let { render: s54, className: m25, style: a38, ...r49 } = e58;
  return J("span", e58, { ref: n61, props: [{ "aria-hidden": true, children: "\u25BC" }, r49] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/clear/ComboboxClear.mjs
import * as p22 from "react";
var q8 = { ...i7, ...c19 };
var se5 = p22.forwardRef(function(i38, m25) {
  let { render: G18, className: H16, disabled: f35 = false, nativeButton: b14 = true, keepMounted: C18 = false, style: J18, ...x21 } = i38, { disabled: R27 } = E14(), e58 = i23(), r49 = L8(e58, d20.selectionMode), v17 = L8(e58, d20.disabled), y24 = L8(e58, d20.readOnly), S18 = L8(e58, d20.open), l19 = L8(e58, d20.selectedValue), g20 = L8(e58, d20.hasSelectionChips), h24 = m12(), t48 = false;
  r49 === "none" ? t48 = h24 !== "" : r49 === "single" ? t48 = l19 != null : t48 = g20;
  let a38 = R27 || v17 || f35, { buttonRef: I26, getButtonProps: M20 } = Q({ native: b14, disabled: a38 }), { mounted: E30, transitionStatus: V12, setMounted: k17 } = g2(t48), A17 = { disabled: a38, visible: t48, open: S18, transitionStatus: V12 };
  p10({ open: t48, ref: e58.state.clearRef, onComplete() {
    t48 || k17(false);
  } });
  let D14 = J("button", i38, { state: A17, ref: [m25, I26, e58.state.clearRef], props: [{ tabIndex: -1, children: "x", onMouseDown(s54) {
    s54.preventDefault();
  }, onClick(s54) {
    if (a38 || y24) return;
    let c40 = e58.state.keyboardActiveRef;
    e58.state.setInputValue("", u4(s4.clearPress, s54.nativeEvent)), r49 !== "none" ? (e58.state.setSelectedValue(Array.isArray(l19) ? [] : null, u4(s4.clearPress, s54.nativeEvent)), e58.state.setIndices({ activeIndex: null, selectedIndex: null, type: c40.current ? "keyboard" : "pointer" })) : e58.state.setIndices({ activeIndex: null, type: c40.current ? "keyboard" : "pointer" }), e58.state.inputRef.current?.focus();
  } }, x21, M20], stateAttributesMapping: q8 });
  return C18 || E30 ? D14 : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/list/ComboboxList.mjs
import * as r26 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/collection/ComboboxCollection.mjs
import * as e21 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/collection/GroupCollectionContext.mjs
import * as o39 from "react";
import { jsx as i29 } from "react/jsx-runtime";
var t22 = o39.createContext(null);
function u20() {
  return o39.useContext(t22);
}
function s31(n61) {
  let { children: r49, items: e58 } = n61, c40 = o39.useMemo(() => ({ items: e58 }), [e58]);
  return i29(t22.Provider, { value: c40, children: r49 });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/collection/ComboboxCollection.mjs
import { jsx as c26 } from "react/jsx-runtime";
function x14(r49) {
  let { children: n61 } = r49, { filteredItems: m25 } = c22(), o62 = u20(), t48 = o62 ? o62.items : m25;
  return t48 ? c26(e21.Fragment, { children: t48.map(n61) }) : null;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/list/ComboboxList.mjs
import { jsx as f23 } from "react/jsx-runtime";
var $4 = r26.forwardRef(function(i38, d31) {
  var l19;
  let { render: F14, className: V12, style: q15, children: o62, ...p31 } = i38, e58 = i23(), b14 = C8(), x21 = !!s30(true), { filteredItems: C18, hasItems: v17 } = c22(), R27 = L8(e58, d20.selectionMode), E30 = L8(e58, d20.grid), y24 = L8(e58, d20.popupProps), I26 = L8(e58, d20.virtualized), g20 = R27 === "multiple", h24 = C18.length === 0, L20 = E((t48) => {
    e58.set("positionerElement", t48);
  }), P17 = E((t48) => {
    e58.set("listElement", t48);
  }), k17 = r26.useMemo(() => typeof o62 == "function" ? l19 || (l19 = f23(x14, { children: o62 })) : o62, [o62]), D14 = { empty: h24 }, M20 = b14.useState("floatingId"), c40 = J("div", i38, { state: D14, ref: [d31, P17, x21 ? null : L20], props: [y24, { children: k17, tabIndex: -1, id: M20, role: E30 ? "grid" : "listbox", "aria-multiselectable": g20 ? "true" : void 0, onKeyDown(t48) {
    if (!(e58.state.disabled || e58.state.readOnly) && t48.key === "Enter") {
      let a38 = e58.state.activeIndex;
      if (a38 == null) return;
      p7(t48);
      let N20 = t48.nativeEvent, m25 = e58.state.listRef.current[a38];
      m25 && (e58.state.selectionEventRef.current = N20, m25.click(), e58.state.selectionEventRef.current = null);
    }
  }, onKeyDownCapture() {
    e58.state.keyboardActiveRef.current = true;
  }, onPointerMoveCapture() {
    e58.state.keyboardActiveRef.current = false;
  } }, p31] });
  return I26 ? c40 : f23(k, { elementsRef: e58.state.listRef, labelsRef: v17 ? void 0 : e58.state.labelsRef, children: c40 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/status/ComboboxStatus.mjs
import * as t23 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/utils/useInitialLiveRegionTextMutation.mjs
import * as u21 from "react";
var c27 = "\u2060";
var d23 = 200;
function s32(t48) {
  let n61 = t48.ownerDocument.createTreeWalker(t48, NodeFilter.SHOW_TEXT), o62 = null;
  for (; n61.nextNode(); ) {
    let e58 = n61.currentNode;
    e58.nodeValue !== "" && (o62 = e58);
  }
  return o62;
}
function E15() {
  let t48 = p12(), n61 = u21.useRef(null);
  return u21.useEffect(() => {
    if (p6) return;
    let o62 = n61.current;
    if (o62 == null) return;
    let e58 = s32(o62);
    if (e58 == null) return;
    let r49 = e58.nodeValue ?? "", i38 = `${r49}${c27}`;
    return e58.nodeValue = i38, t48.start(d23, () => {
      e58.nodeValue === i38 && (e58.nodeValue = r49);
    }), () => {
      t48.clear(), e58.nodeValue === i38 && (e58.nodeValue = r49);
    };
  }, [n61, t48]), n61;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/status/ComboboxStatus.mjs
var f24 = t23.forwardRef(function(e58, o62) {
  let { render: u37, className: c40, style: l19, children: r49, ...i38 } = e58, s54 = E15();
  return J("div", e58, { ref: [o62, s54], props: [{ children: r49, role: "status", "aria-live": "polite", "aria-atomic": true }, i38] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/portal/ComboboxPortal.mjs
import * as m14 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/portal/ComboboxPortalContext.mjs
import * as o40 from "react";
var r27 = o40.createContext(void 0);
function s33() {
  let t48 = o40.useContext(r27);
  if (t48 === void 0) throw new Error(f2(20));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/portal/ComboboxPortal.mjs
import { jsx as n30 } from "react/jsx-runtime";
var M7 = m14.forwardRef(function(s54, l19) {
  let { keepMounted: o62 = false, ...a38 } = s54, r49 = i23(), c40 = L8(r49, d20.mounted), f35 = L8(r49, d20.forceMounted);
  return c40 || o62 || f35 ? n30(r27.Provider, { value: o62, children: n30(eo, { ref: l19, ...a38 }) }) : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/backdrop/ComboboxBackdrop.mjs
import * as n31 from "react";
var f25 = { ...g11, ...i7 };
var M8 = n31.forwardRef(function(r49, s54) {
  let { render: x21, className: S18, style: C18, ...p31 } = r49, o62 = i23(), a38 = L8(o62, d20.open), i38 = L8(o62, d20.mounted), m25 = L8(o62, d20.transitionStatus);
  return J("div", r49, { state: { open: a38, transitionStatus: m25 }, ref: s54, stateAttributesMapping: f25, props: [{ role: "presentation", hidden: !i38, style: { userSelect: "none", WebkitUserSelect: "none" } }, p31] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/positioner/ComboboxPositioner.mjs
import * as a24 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useAnchorPositioning.mjs
import * as f26 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/adaptiveOriginMiddleware.mjs
var d24 = { sideX: "left", sideY: "top" };
var Y5 = { name: "adaptiveOrigin", async fn(w22) {
  let { x: o62, y: s54, rects: { floating: l19 }, elements: { floating: i38 }, platform: a38, strategy: g20, placement: p31 } = w22, t48 = i10(i38), f35 = t48.getComputedStyle(i38);
  if (!(f35.transitionDuration !== "0s" && f35.transitionDuration !== "")) return { x: o62, y: s54, data: d24 };
  let r49 = await a38.getOffsetParent?.(i38), e58 = { width: 0, height: 0 };
  if (g20 === "fixed" && t48?.visualViewport) e58 = { width: t48.visualViewport.width, height: t48.visualViewport.height };
  else if (r49 === t48) {
    let m25 = n13(i38);
    e58 = { width: m25.documentElement.clientWidth, height: m25.documentElement.clientHeight };
  } else await a38.isElement?.(r49) && (e58 = await a38.getDimensions(r49));
  let n61 = g7(p31), h24 = o62, c40 = s54;
  n61 === "left" && (h24 = e58.width - (o62 + l19.width)), n61 === "top" && (c40 = e58.height - (s54 + l19.height));
  let u37 = n61 === "left" ? "right" : d24.sideX, y24 = n61 === "top" ? "bottom" : d24.sideY;
  return { x: h24, y: c40, data: { sideX: u37, sideY: y24 } };
} };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useAnchorPositioning.mjs
var ct = (i38) => ({ name: "arrow", options: i38, async fn(r49) {
  let { x: u37, y: o62, placement: s54, rects: c40, platform: b14, elements: $9, middlewareData: oe10 } = r49, { element: S18, padding: X11 = 0, offsetParent: z17 = "real" } = T2(i38, r49) || {};
  if (S18 == null) return {};
  let W14 = B2(X11), A17 = { x: u37, y: o62 }, a38 = y5(s54), t48 = A6(a38), R27 = await b14.getDimensions(S18), x21 = a38 === "y", ie10 = x21 ? "top" : "left", B17 = x21 ? "bottom" : "right", V12 = x21 ? "clientHeight" : "clientWidth", re8 = c40.reference[t48] + c40.reference[a38] - A17[a38] - c40.floating[t48], _19 = A17[a38] - c40.reference[a38], q15 = z17 === "real" ? await b14.getOffsetParent?.(S18) : $9.floating, p31 = $9.floating[V12] || c40.floating[t48];
  (!p31 || !await b14.isElement?.(q15)) && (p31 = $9.floating[V12] || c40.floating[t48]);
  let O14 = re8 / 2 - _19 / 2, G18 = p31 / 2 - R27[t48] / 2 - 1, Y18 = Math.min(W14[ie10], G18), J18 = Math.min(W14[B17], G18), v17 = Y18, M20 = p31 - R27[t48] - J18, y24 = p31 / 2 - R27[t48] / 2 + O14, K14 = R4(v17, y24, M20), m25 = !oe10.arrow && m6(s54) != null && y24 !== K14 && c40.reference[t48] / 2 - (y24 < v17 ? Y18 : J18) - R27[t48] / 2 < 0, H16 = m25 ? y24 < v17 ? y24 - v17 : y24 - M20 : 0;
  return { [a38]: A17[a38] + H16, data: { [a38]: K14, centerOffset: y24 - K14 - H16, ...m25 && { alignmentOffset: H16 } }, reset: m25 };
} });
var ze = (i38, r49) => ({ ...ct(i38), options: [i38, r49] });
var We2 = { name: "hide", async fn(i38) {
  let { width: r49, height: u37, x: o62, y: s54 } = i38.rects.reference, c40 = r49 === 0 && u37 === 0 && o62 === 0 && s54 === 0;
  return { data: { referenceHidden: (await (0, react_dom_2_1_exports.hide)().fn(i38)).data?.referenceHidden || c40 } };
} };
function Xe2(i38, r49, u37) {
  let o62 = i38 === "inline-start" || i38 === "inline-end";
  return { top: "top", right: o62 ? u37 ? "inline-start" : "inline-end" : "right", bottom: "bottom", left: o62 ? u37 ? "inline-end" : "inline-start" : "left" }[r49];
}
function Ie(i38, r49, u37) {
  let { rects: o62, placement: s54 } = i38;
  return { side: Xe2(r49, g7(s54), u37), align: m6(s54) || "center", anchor: { width: o62.reference.width, height: o62.reference.height }, positioner: { width: o62.floating.width, height: o62.floating.height } };
}
function Lt2(i38) {
  let { anchor: r49, positionMethod: u37 = "absolute", side: o62 = "bottom", sideOffset: s54 = 0, align: c40 = "center", alignOffset: b14 = 0, collisionBoundary: $9, collisionPadding: oe10 = 5, sticky: S18 = false, arrowPadding: X11 = 5, disableAnchorTracking: z17 = false, inline: W14, keepMounted: A17 = false, floatingRootContext: a38, mounted: t48, collisionAvoidance: R27, shiftCrossAxis: x21 = false, nodeId: ie10, adaptiveOrigin: B17, lazyFlip: V12 = false, externalTree: re8 } = i38, [_19, q15] = f26.useState(null);
  !t48 && _19 !== null && q15(null);
  let p31 = R27.side || "flip", O14 = R27.align || "flip", G18 = R27.fallbackAxisSide || "end", Y18 = typeof r49 == "function" ? r49 : void 0, J18 = E(Y18), v17 = Y18 ? J18 : r49, M20 = I8(r49), y24 = I8(t48), m25 = o4() === "rtl", H16 = _19 || { top: "top", right: "right", bottom: "bottom", left: "left", "inline-end": m25 ? "left" : "right", "inline-start": m25 ? "right" : "left" }[o62], _e7 = c40 === "center" ? H16 : `${H16}-${c40}`, n61 = oe10, P17 = 1, me7 = o62 === "bottom" ? P17 : 0, he6 = o62 === "top" ? P17 : 0, xe9 = o62 === "right" ? P17 : 0, ye9 = o62 === "left" ? P17 : 0;
  typeof n61 == "number" ? n61 = { top: n61 + me7, right: n61 + ye9, bottom: n61 + he6, left: n61 + xe9 } : n61 && (n61 = { top: (n61.top || 0) + me7, right: (n61.right || 0) + ye9, bottom: (n61.bottom || 0) + he6, left: (n61.left || 0) + xe9 });
  let N20 = { boundary: $9 === "clipping-ancestors" ? "clippingAncestors" : $9, padding: n61 }, k17 = f26.useRef(null), se12 = I8(s54), ce8 = I8(b14), qe4 = typeof s54 != "function" ? s54 : 0, Ge7 = typeof b14 != "function" ? b14 : 0, L20 = [];
  W14 && L20.push(W14), L20.push((0, react_dom_2_1_exports.offset)((e58) => {
    let l19 = Ie(e58, o62, m25), h24 = typeof se12.current == "function" ? se12.current(l19) : se12.current, d31 = typeof ce8.current == "function" ? ce8.current(l19) : ce8.current;
    return { mainAxis: h24, crossAxis: d31, alignmentAxis: d31 };
  }, [qe4, Ge7, m25, o62]));
  let we7 = O14 === "none" && p31 !== "shift", be8 = !we7 && (S18 || x21 || p31 === "shift"), Ae7 = p31 === "none" ? null : (0, react_dom_2_1_exports.flip)({ ...N20, padding: { top: n61.top + P17, right: n61.right + P17, bottom: n61.bottom + P17, left: n61.left + P17 }, mainAxis: !x21 && p31 === "flip", crossAxis: O14 === "flip" ? "alignment" : false, fallbackAxisSideDirection: G18 }), Re8 = we7 ? null : (0, react_dom_2_1_exports.shift)((e58) => {
    let l19 = n13(e58.elements.floating).documentElement;
    return { ...N20, rootBoundary: x21 ? { x: 0, y: 0, width: l19.clientWidth, height: l19.clientHeight } : void 0, mainAxis: O14 !== "none", crossAxis: be8, limiter: S18 || x21 ? void 0 : (0, react_dom_2_1_exports.limitShift)((h24) => {
      if (!k17.current) return {};
      let { width: d31, height: w22 } = k17.current.getBoundingClientRect(), g20 = P3(g7(h24.placement)), E30 = g20 === "y" ? d31 : w22, T17 = g20 === "y" ? n61.left + n61.right : n61.top + n61.bottom;
      return { offset: E30 / 2 + T17 / 2 };
    }) };
  }, [N20, S18, x21, n61, O14]);
  p31 === "shift" || O14 === "shift" || c40 === "center" ? L20.push(Re8, Ae7) : L20.push(Ae7, Re8), L20.push((0, react_dom_2_1_exports.size)({ ...N20, apply({ elements: { floating: e58 }, availableWidth: l19, availableHeight: h24, rects: d31 }) {
    if (!y24.current) return;
    let w22 = e58.style;
    w22.setProperty("--available-width", `${l19}px`), w22.setProperty("--available-height", `${h24}px`);
    let g20 = i10(e58).devicePixelRatio || 1, { x: E30, y: T17, width: ee7, height: fe7 } = d31.reference, de8 = (Math.round((E30 + ee7) * g20) - Math.round(E30 * g20)) / g20, ue7 = (Math.round((T17 + fe7) * g20) - Math.round(T17 * g20)) / g20;
    w22.setProperty("--anchor-width", `${de8}px`), w22.setProperty("--anchor-height", `${ue7}px`);
  } }), ze((e58) => ({ element: k17.current || n13(e58.elements.floating).createElement("div"), padding: X11, offsetParent: "floating" }), [X11]), { name: "transformOrigin", fn(e58) {
    let { elements: l19, middlewareData: h24, placement: d31, rects: w22, y: g20 } = e58, E30 = g7(d31), T17 = P3(E30), ee7 = k17.current, fe7 = h24.arrow?.x || 0, de8 = h24.arrow?.y || 0, ue7 = ee7?.clientWidth || 0, Je9 = ee7?.clientHeight || 0, pe9 = fe7 + ue7 / 2, Te7 = de8 + Je9 / 2, Ke10 = Math.abs(h24.shift?.y || 0), Ne7 = w22.reference.height / 2, j17 = typeof s54 == "function" ? s54(Ie(e58, o62, m25)) : s54, Qe7 = Ke10 > j17, Ze9 = { top: `${pe9}px calc(100% + ${j17}px)`, bottom: `${pe9}px ${-j17}px`, left: `calc(100% + ${j17}px) ${Te7}px`, right: `${-j17}px ${Te7}px` }[E30], et7 = `${pe9}px ${w22.reference.y + Ne7 - g20}px`;
    return l19.floating.style.setProperty("--transform-origin", be8 && T17 === "y" && Qe7 ? et7 : Ze9), {};
  } }, We2, B17), o2(() => {
    !t48 && a38 && a38.update({ referenceElement: null, floatingElement: null, domReferenceElement: null, positionReference: null });
  }, [t48, a38]);
  let ae11 = f26.useMemo(() => ({ elementResize: !z17 && typeof ResizeObserver < "u", layoutShift: !z17 && typeof IntersectionObserver < "u" }), [z17]), { refs: C18, elements: I26, x: Pe6, y: Se8, middlewareData: F14, update: Q16, placement: Oe5, context: ve9, isPositioned: D14, floatingStyles: Me10 } = ss({ rootContext: a38, open: A17 ? t48 : void 0, placement: _e7, middleware: L20, strategy: u37, whileElementsMounted: A17 ? void 0 : (...e58) => (0, react_dom_2_1_exports.autoUpdate)(...e58, ae11), nodeId: ie10, externalTree: re8 }), { sideX: De10, sideY: Ee7 } = F14.adaptiveOrigin || d24, le9 = D14 ? u37 : "fixed", $e6 = f26.useMemo(() => {
    let e58 = B17 ? { position: le9, [De10]: Pe6, [Ee7]: Se8 } : { position: le9, ...Me10 };
    return D14 || (e58.opacity = 0), e58;
  }, [B17, le9, De10, Pe6, Ee7, Se8, Me10, D14]), Z17 = f26.useRef(null);
  o2(() => {
    if (!t48) return;
    let e58 = M20.current, l19 = typeof e58 == "function" ? e58() : e58, d31 = (Ue2(l19) ? l19.current : l19) || null || null;
    d31 !== Z17.current && (C18.setPositionReference(d31), Z17.current = d31);
  }, [t48, C18, v17, M20]), f26.useEffect(() => {
    if (!t48) return;
    let e58 = M20.current;
    typeof e58 != "function" && Ue2(e58) && e58.current !== Z17.current && (C18.setPositionReference(e58.current), Z17.current = e58.current);
  }, [t48, C18, v17, M20]), f26.useEffect(() => {
    if (A17 && t48 && I26.domReference && I26.floating) return (0, react_dom_2_1_exports.autoUpdate)(I26.domReference, I26.floating, Q16, ae11);
  }, [A17, t48, I26, Q16, ae11]);
  let U11 = g7(Oe5), He10 = Xe2(o62, U11, m25), ke8 = m6(Oe5) || "center", Le7 = !!F14.hide?.referenceHidden;
  o2(() => {
    V12 && t48 && D14 && q15(U11);
  }, [V12, t48, D14, U11]);
  let Ce7 = f26.useMemo(() => ({ position: "absolute", top: F14.arrow?.y, left: F14.arrow?.x }), [F14.arrow]), Fe5 = F14.arrow?.centerOffset !== 0;
  return f26.useMemo(() => ({ positionerStyles: $e6, arrowStyles: Ce7, arrowRef: k17, arrowUncentered: Fe5, side: He10, align: ke8, physicalSide: U11, anchorHidden: Le7, refs: C18, context: ve9, isPositioned: D14, update: Q16 }), [$e6, Ce7, k17, Fe5, He10, ke8, U11, Le7, C18, ve9, D14, Q16]);
}
function Ue2(i38) {
  return i38 != null && "current" in i38;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/getDisabledMountTransitionStyles.mjs
function T8(t48) {
  return t48 === "starting" ? I9 : o7;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/usePositioner.mjs
function g14(t48, n61, { styles: o62, transitionStatus: r49, props: i38, refs: p31, hidden: s54, inert: a38 = false }) {
  let e58 = { ...o62 };
  return a38 && (e58.pointerEvents = "none"), J("div", t48, { state: n61, ref: p31, props: [{ role: "presentation", hidden: s54, style: e58 }, T8(r49), i38], stateAttributesMapping: g11 });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useAnchoredPopupScrollLock.mjs
import * as l15 from "react";
var i30 = 20;
function L10(t48, c40, o62, s54) {
  let [e58, r49] = l15.useState(false);
  o2(() => {
    if (!t48 || !c40 || o62 == null) {
      r49(false);
      return;
    }
    let u37 = n13(o62).documentElement.clientWidth, f35 = o62.offsetWidth;
    r49(u37 > 0 && f35 > 0 && f35 >= u37 - i30);
  }, [t48, c40, o62]), qt(t48 && (!c40 || e58), s54);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/positioner/ComboboxPositioner.mjs
import { jsx as Y6, jsxs as Z7 } from "react/jsx-runtime";
var Po = a24.forwardRef(function(m25, d31) {
  let { render: oo3, className: to4, anchor: u37, positionMethod: f35 = "absolute", side: b14 = "bottom", align: x21 = "center", sideOffset: C18 = 0, alignOffset: g20 = 0, collisionBoundary: P17 = "clipping-ancestors", collisionPadding: h24 = 5, arrowPadding: E30 = 5, sticky: y24 = false, disableAnchorTracking: I26 = false, collisionAvoidance: A17 = i15, style: eo4, ...O14 } = m25, o62 = i23(), { filteredItems: S18 } = c22(), v17 = C8(), N20 = s33(), c40 = L8(o62, d20.modal), s54 = L8(o62, d20.open), i38 = L8(o62, d20.mounted), k17 = L8(o62, d20.openMethod), R27 = L8(o62, d20.positionerElement), r49 = L8(o62, d20.triggerElement), l19 = L8(o62, d20.inputElement), p31 = L8(o62, d20.inputGroupElement), D14 = L8(o62, d20.inputInsidePopup), _19 = L8(o62, d20.transitionStatus), j17 = S18.length === 0, n61 = Lt2({ anchor: u37 ?? (D14 ? r49 : p31 ?? l19), floatingRootContext: v17, positionMethod: f35, mounted: i38, side: b14, sideOffset: C18, align: x21, alignOffset: g20, arrowPadding: E30, collisionBoundary: P17, collisionPadding: h24, sticky: y24, disableAnchorTracking: I26, keepMounted: N20, collisionAvoidance: A17, lazyFlip: true });
  L10(s54 && c40, k17 === "touch", R27, r49);
  let L20 = { open: s54, side: n61.side, align: n61.align, anchorHidden: n61.anchorHidden, empty: j17 };
  o2(() => {
    o62.set("popupSide", n61.side);
  }, [o62, n61.side]);
  let M20 = E((w22) => {
    o62.set("positionerElement", w22);
  }), V12 = g14(m25, L20, { styles: n61.positionerStyles, transitionStatus: _19, props: O14, refs: [d31, M20], hidden: !i38, inert: !s54 });
  return Z7(r25.Provider, { value: n61, children: [i38 && c40 && Y6(l12, { inert: s22(!s54), cutout: p31 ?? l19 ?? r49 }), V12] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/popup/ComboboxPopup.mjs
import * as i31 from "react";
import { jsx as g15, jsxs as q9 } from "react/jsx-runtime";
var z5 = { ...g11, ...i7 };
var at3 = i31.forwardRef(function(m25, x21) {
  let { render: J18, className: K14, style: L20, initialFocus: u37, finalFocus: c40, ...C18 } = m25, t48 = i23(), r49 = s30(), F14 = C8(), { filteredItems: R27 } = c22(), h24 = L8(t48, d20.mounted), a38 = L8(t48, d20.open), l19 = L8(t48, d20.openMethod), d31 = L8(t48, d20.transitionStatus), n61 = L8(t48, d20.inputInsidePopup), I26 = L8(t48, d20.inputElement), D14 = L8(t48, d20.modal), M20 = R27.length === 0;
  p10({ open: a38, ref: t48.state.popupRef, onComplete() {
    a38 && t48.state.onOpenChangeComplete(true);
  } });
  let E30 = { open: a38, side: r49.side, align: r49.align, anchorHidden: r49.anchorHidden, transitionStatus: d31, empty: M20 }, P17 = J("div", m25, { state: E30, ref: [x21, t48.state.popupRef], props: [{ role: n61 ? "dialog" : "presentation", tabIndex: -1, onFocus(s54) {
    let b14 = f10(s54.nativeEvent);
    l19 !== "touch" && (u9(t48.state.listElement, b14) || b14 === s54.currentTarget) && t48.state.inputRef.current?.focus();
  } }, T8(d31), C18], stateAttributesMapping: z5 }), v17 = u37 === void 0 ? n61 ? (s54) => s54 === "touch" ? t48.state.popupRef.current : I26 : false : u37, p31;
  c40 != null ? p31 = c40 : p31 = n61 ? void 0 : false;
  let f35 = !n61 || D14;
  return g15(To, { context: F14, disabled: !h24, modal: f35, openInteractionType: l19, initialFocus: v17, returnFocus: p31, getInsideElements: () => [t48.state.startDismissRef.current, t48.state.endDismissRef.current], children: q9(i31.Fragment, { children: [P17, f35 && g15(N10, { ref: t48.state.endDismissRef })] }) });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/arrow/ComboboxArrow.mjs
import * as e22 from "react";
var h14 = e22.forwardRef(function(o62, r49) {
  let { render: C18, className: R27, style: A17, ...t48 } = o62, s54 = i23(), { arrowRef: n61, side: m25, align: i38, arrowUncentered: p31, arrowStyles: a38 } = s30(), c40 = { open: L8(s54, d20.open), side: m25, align: i38, uncentered: p31 };
  return J("div", o62, { ref: [n61, r49], stateAttributesMapping: g11, state: c40, props: { style: a38, "aria-hidden": true, ...t48 } });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/group/ComboboxGroup.mjs
import * as e23 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/group/ComboboxGroupContext.mjs
import * as o41 from "react";
var r28 = o41.createContext(void 0);
function s34() {
  let t48 = o41.useContext(r28);
  if (t48 === void 0) throw new Error(f2(18));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/group/ComboboxGroup.mjs
import { jsx as n32 } from "react/jsx-runtime";
var N11 = e23.forwardRef(function(t48, l19) {
  let { render: f35, className: x21, style: C18, items: o62, ...a38 } = t48, [r49, s54] = e23.useState(), i38 = e23.useMemo(() => ({ labelId: r49, setLabelId: s54, items: o62 }), [r49, s54, o62]), p31 = J("div", t48, { ref: l19, props: [{ role: "group", "aria-labelledby": r49 }, a38] }), m25 = n32(r28.Provider, { value: i38, children: p31 });
  return o62 ? n32(s31, { items: o62, children: m25 }) : m25;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/group-label/ComboboxGroupLabel.mjs
import * as t24 from "react";
var E16 = t24.forwardRef(function(r49, s54) {
  let { render: d31, className: f35, style: l19, id: m25, ...n61 } = r49, { setLabelId: o62 } = s34(), e58 = r5(m25);
  return o2(() => (o62(e58), () => {
    o62(void 0);
  }), [e58, o62]), J("div", r49, { ref: s54, props: [{ id: e58 }, n61] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/item/ComboboxItem.mjs
import * as n34 from "react";
import * as O8 from "react-dom";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/item/ComboboxItemContext.mjs
import * as o42 from "react";
var n33 = o42.createContext(void 0);
function r29() {
  let t48 = o42.useContext(n33);
  if (!t48) throw new Error(f2(19));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/row/ComboboxRowContext.mjs
import * as o43 from "react";
var t25 = o43.createContext(false);
function e24() {
  return o43.useContext(t25);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/item/ComboboxItem.mjs
import { jsx as Z8 } from "react/jsx-runtime";
var xe3 = n34.memo(n34.forwardRef(function(h24, P17) {
  let { render: te7, className: oe10, style: ne12, value: u37 = null, index: c40, disabled: a38 = false, nativeButton: g20 = false, ...w22 } = h24, m25 = n34.useRef(false), p31 = n34.useRef(null), x21 = N2({ index: c40, textRef: p31, indexGuessBehavior: I5.GuessFromOrder }), e58 = i23(), B17 = e24(), { flatFilteredItems: q15, hasItems: d31 } = c22(), C18 = L8(e58, d20.open), R27 = L8(e58, d20.selectionMode), D14 = L8(e58, d20.readOnly), b14 = L8(e58, d20.virtualized), I26 = L8(e58, d20.isItemEqualToValue), V12 = R27 !== "none", o62 = c40 ?? (b14 ? o33(q15, u37, I26) : x21.index), l19 = x21.index !== -1, y24 = L8(e58, d20.id), E30 = L8(e58, d20.isActive, o62), N20 = L8(e58, d20.isSelected, u37), A17 = L8(e58, d20.itemProps), S18 = n34.useRef(null), G18 = y24 != null && l19 ? `${y24}-${o62}` : void 0, f35 = N20 && V12;
  o2(() => {
    if (!(l19 && (b14 || c40 != null))) return;
    let s54 = e58.state.listRef.current;
    return s54[o62] = S18.current, () => {
      delete s54[o62];
    };
  }, [l19, b14, o62, c40, e58]), o2(() => {
    if (!l19 || d31) return;
    let t48 = e58.state.valuesRef.current;
    return t48[o62] = u37, R27 !== "none" && e58.state.allValuesRef.current.push(u37), () => {
      delete t48[o62];
    };
  }, [l19, d31, o62, u37, e58, R27]), o2(() => {
    if (!C18) {
      m25.current = false;
      return;
    }
    if (!l19 || d31) return;
    let t48 = e58.state.selectedValue, s54 = Array.isArray(t48) ? t48[t48.length - 1] : t48;
    e15(u37, s54, I26) && e58.set("selectedIndex", o62);
  }, [l19, d31, C18, e58, o62, u37, I26]);
  let { getButtonProps: j17, buttonRef: k17 } = Q({ disabled: a38, focusableWhenDisabled: true, native: g20, composite: true }), z17 = { disabled: a38, selected: f35, highlighted: E30 };
  function M20(t48) {
    function s54() {
      e58.state.handleSelection(t48, u37);
    }
    e58.state.submitOnItemClick ? (O8.flushSync(s54), e58.state.requestSubmit()) : s54();
  }
  let F14 = { id: G18, role: B17 ? "gridcell" : "option", "aria-selected": V12 ? f35 : void 0, tabIndex: void 0, onPointerDownCapture(t48) {
    m25.current = true, t48.preventDefault();
  }, onMouseDown(t48) {
    t48.preventDefault();
  }, onClick(t48) {
    a38 || D14 || M20(t48.nativeEvent);
  }, onMouseUp(t48) {
    let s54 = m25.current;
    m25.current = false, !(a38 || D14 || t48.button !== 0 || s54 || !E30) && M20(t48.nativeEvent);
  } }, L20 = J("div", h24, { ref: [k17, P17, x21.ref, S18], state: z17, props: [A17, F14, w22, j17] }), T17 = n34.useMemo(() => ({ selected: f35, textRef: p31 }), [f35, p31]);
  return Z8(n33.Provider, { value: T17, children: L20 });
}));

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/row/ComboboxRow.mjs
import * as e25 from "react";
import { jsx as i32 } from "react/jsx-runtime";
var R14 = e25.forwardRef(function(o62, r49) {
  let { render: b14, className: c40, style: l19, ...t48 } = o62, m25 = J("div", o62, { ref: r49, props: [{ role: "row" }, t48] });
  return i32(t25.Provider, { value: true, children: m25 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/empty/ComboboxEmpty.mjs
import * as o44 from "react";
var E17 = o44.forwardRef(function(e58, t48) {
  let { render: u37, className: d31, style: x21, children: r49, ...m25 } = e58, { filteredItems: i38 } = c22(), s54 = i23(), n61 = E15(), a38 = i38.length === 0 ? r49 : null;
  return J("div", e58, { ref: [t48, s54.state.emptyRef, n61], props: [{ children: a38, role: "status", "aria-live": "polite", "aria-atomic": true }, m25] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/separator/Separator.mjs
import * as r30 from "react";
var d25 = r30.forwardRef(function(e58, o62) {
  let { className: i38, render: p31, orientation: t48 = "horizontal", style: c40, ...a38 } = e58;
  return J("div", e58, { state: { orientation: t48 }, ref: o62, props: [{ role: "separator", "aria-orientation": t48 }, a38] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/combobox/root/utils/useFilteredItems.mjs
function m15() {
  return c22().filteredItems;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/autocomplete.mjs
var w10 = Object.defineProperty;
var E18 = (u37, e58) => {
  for (var o62 in e58) w10(u37, o62, { get: e58[o62], enumerable: true });
};
var F7 = {};
E18(F7, { Arrow: () => h14, Backdrop: () => M8, Clear: () => se5, Collection: () => x14, Empty: () => E17, Group: () => N11, GroupLabel: () => E16, Icon: () => b8, Input: () => dt2, InputGroup: () => h15, Item: () => G9, List: () => $4, Popup: () => at3, Portal: () => M7, Positioner: () => Po, Root: () => A10, Row: () => R14, Separator: () => d25, Status: () => f24, Trigger: () => S11, Value: () => R15, useFilter: () => C9, useFilteredItems: () => m15 });
function A10(u37) {
  let { openOnInputClick: e58 = false, value: o62, defaultValue: n61, onValueChange: P17, mode: l19 = "list", itemToStringValue: c40, ...s54 } = u37, x21 = l19 === "inline" || l19 === "both", b14 = l19 === "inline" || l19 === "none", m25 = o62 !== void 0, [C18, y24] = r31.useState(n61 ?? ""), [I26, i38] = r31.useState("");
  r31.useEffect(() => {
    m25 && i38("");
  }, [o62, m25]);
  let a38;
  x21 && I26 !== "" ? a38 = I26 : m25 ? a38 = o62 ?? "" : a38 = C18;
  let d31 = C9(), f35 = r31.useMemo(() => s54.filter !== void 0 ? s54.filter : d31.contains, [s54.filter, d31]), g20 = String(m25 ? o62 : C18).trim(), L20 = r31.useMemo(() => l19 !== "both" ? b14 ? null : f35 : f35 === null ? null : (t48, p31, k17) => f35(t48, g20, k17), [f35, l19, g20, b14]);
  function T17(t48, p31) {
    i38(""), m25 || y24(t48), P17?.(t48, p31);
  }
  function j17(t48, p31) {
    u37.onItemHighlighted?.(t48, p31), p31.reason !== s4.pointer && (x21 ? t48 == null ? i38("") : i38(b7(t48, c40)) : i38(""));
  }
  return _8(Mr, { ...s54, itemToStringLabel: c40, openOnInputClick: e58, selectionMode: "none", fillInputOnItemPress: true, filter: L20, autoComplete: l19, inputValue: a38, defaultInputValue: n61, onInputValueChange: T17, onItemHighlighted: j17 });
}
function R15(u37) {
  let { children: e58 } = u37, o62 = m12(), n61 = null;
  return typeof e58 == "function" ? n61 = e58(String(o62)) : e58 != null ? n61 = e58 : n61 = o62, q10(V5.Fragment, { children: n61 });
}
var S11 = tt3;
var h15 = Q7;
var G9 = xe3;

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/avatar.mjs
import * as c28 from "react";
import * as R16 from "react";
import { jsx as P9 } from "react/jsx-runtime";
import * as A11 from "react";
import * as I15 from "react";
import * as p23 from "react";
var V6 = Object.defineProperty;
var _9 = (a38, t48) => {
  for (var o62 in t48) V6(a38, o62, { get: t48[o62], enumerable: true });
};
var h16 = {};
_9(h16, { Fallback: () => M9, Image: () => y12, Root: () => C10 });
var S12 = R16.createContext(void 0);
function v11() {
  let a38 = R16.useContext(S12);
  if (a38 === void 0) throw new Error(f2(13));
  return a38;
}
var u22 = { imageLoadingStatus: () => null };
var C10 = c28.forwardRef(function(t48, o62) {
  let { className: d31, render: m25, style: s54, ...e58 } = t48, [n61, i38] = c28.useState("idle"), l19 = { imageLoadingStatus: n61 }, f35 = c28.useMemo(() => ({ imageLoadingStatus: n61, setImageLoadingStatus: i38 }), [n61, i38]), r49 = J("span", t48, { state: l19, ref: o62, props: e58, stateAttributesMapping: u22 });
  return P9(S12.Provider, { value: f35, children: r49 });
});
function L11(a38, { referrerPolicy: t48, crossOrigin: o62 }) {
  let [d31, m25] = I15.useState("idle");
  return o2(() => {
    if (!a38) return m25("error"), e5;
    let s54 = true, e58 = new window.Image(), n61 = (i38) => () => {
      s54 && m25(i38);
    };
    return m25("loading"), e58.onload = n61("loaded"), e58.onerror = n61("error"), t48 && (e58.referrerPolicy = t48), e58.crossOrigin = o62 ?? null, e58.src = a38, e58.complete && m25(e58.naturalWidth > 0 ? "loaded" : "error"), () => {
      s54 = false;
    };
  }, [a38, o62, t48]), d31;
}
var H8 = { ...u22, ...i7 };
var y12 = A11.forwardRef(function(t48, o62) {
  let { className: d31, render: m25, onLoadingStatusChange: s54, referrerPolicy: e58, crossOrigin: n61, style: i38, ...l19 } = t48, f35 = v11(), r49 = L11(t48.src, { referrerPolicy: e58, crossOrigin: n61 }), g20 = r49 === "loaded", { mounted: x21, transitionStatus: w22, setMounted: O14 } = g2(g20), b14 = A11.useRef(null), E30 = E((N20) => {
    s54?.(N20), f35.setImageLoadingStatus(N20);
  });
  o2(() => {
    r49 !== "idle" && E30(r49);
  }, [r49, E30]), p10({ open: g20, ref: b14, onComplete() {
    g20 || O14(false);
  } });
  let k17 = J("img", t48, { state: { imageLoadingStatus: r49, transitionStatus: w22 }, ref: [o62, b14], props: l19, stateAttributesMapping: H8, enabled: x21 });
  return x21 ? k17 : null;
});
var M9 = p23.forwardRef(function(t48, o62) {
  let { className: d31, render: m25, delay: s54, style: e58, ...n61 } = t48, { imageLoadingStatus: i38 } = v11(), [l19, f35] = p23.useState(s54 === void 0), r49 = p12();
  return p23.useEffect(() => (s54 !== void 0 && r49.start(s54, () => f35(true)), r49.clear), [r49, s54]), J("span", t48, { state: { imageLoadingStatus: i38 }, ref: o62, props: n61, stateAttributesMapping: u22, enabled: i38 !== "loaded" && l19 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/button.mjs
import * as o45 from "react";
var l16 = o45.forwardRef(function(t48, n61) {
  let { render: p31, className: d31, disabled: e58 = false, focusableWhenDisabled: s54 = false, nativeButton: r49 = true, style: B17, ...u37 } = t48, { getButtonProps: a38, buttonRef: f35 } = Q({ disabled: e58, focusableWhenDisabled: s54, native: r49 });
  return J("button", t48, { state: { disabled: e58 }, ref: [n61, f35], props: [u37, a38] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/checkbox-group.mjs
import * as u24 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/checkbox-group/CheckboxGroupContext.mjs
import * as e26 from "react";
var n35 = e26.createContext(void 0);
function s35(t48 = true) {
  let o62 = e26.useContext(n35);
  if (o62 === void 0 && !t48) throw new Error(f2(3));
  return o62;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/checkbox/root/CheckboxRoot.mjs
import * as o47 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/getDefaultFormSubmitter.mjs
function r32(t48) {
  if (!t48) return null;
  for (let e58 of t48.elements) {
    let n61 = e58.tagName;
    if (n61 === "BUTTON" || n61 === "INPUT") {
      let u37 = e58;
      if (u37.type === "submit") return u37;
    }
  }
  return null;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/checkbox/utils/useStateAttributesMapping.mjs
import * as n36 from "react";
var e27 = function(d31) {
  return d31.checked = "data-checked", d31.unchecked = "data-unchecked", d31.indeterminate = "data-indeterminate", d31.disabled = "data-disabled", d31.readonly = "data-readonly", d31.required = "data-required", d31.valid = "data-valid", d31.invalid = "data-invalid", d31.touched = "data-touched", d31.dirty = "data-dirty", d31.filled = "data-filled", d31.focused = "data-focused", d31;
}({});
function f27(d31) {
  return n36.useMemo(() => ({ checked(i38) {
    return d31.indeterminate ? {} : i38 ? { [e27.checked]: "" } : { [e27.unchecked]: "" };
  }, ...n25 }), [d31.indeterminate]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/field/item/FieldItemContext.mjs
import * as e28 from "react";
var t26 = e28.createContext({ disabled: false });
function n37() {
  return e28.useContext(t26);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/labelable-provider/useAriaLabelledBy.mjs
import * as s36 from "react";
function y13(e58, n61, t48, r49 = true, i38) {
  let [a38, d31] = s36.useState(), o62 = r5(i38 ? `${i38}-label` : void 0), u37 = e58 ?? n61 ?? a38;
  return o2(() => {
    let f35 = e58 || n61 || !r49 ? void 0 : m16(t48.current, o62);
    a38 !== f35 && d31(f35);
  }), u37;
}
function m16(e58, n61) {
  let t48 = L12(e58);
  if (t48) return !t48.id && n61 && (t48.id = n61), t48.id || void 0;
}
function L12(e58) {
  if (!e58) return;
  let n61 = e58.parentElement;
  if (n61 && n61.tagName === "LABEL") return n61;
  let t48 = e58.id;
  if (t48) {
    let i38 = e58.nextElementSibling;
    if (i38 && i38.htmlFor === t48) return i38;
  }
  let r49 = e58.labels;
  return r49 && r49[0];
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/checkbox/root/CheckboxRootContext.mjs
import * as o46 from "react";
var n38 = o46.createContext(void 0);
function c29() {
  let e58 = o46.useContext(n38);
  if (e58 === void 0) throw new Error(f2(14));
  return e58;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/checkbox/root/CheckboxRoot.mjs
import { jsx as Y7, jsxs as ze2 } from "react/jsx-runtime";
var Qe = "data-parent";
var Bt = o47.forwardRef(function(N20, z17) {
  let { checked: Q16, className: et7, defaultChecked: Z17 = false, "aria-labelledby": ee7, disabled: te7 = false, form: O14, id: T17, indeterminate: E30 = false, inputRef: re8, name: ne12, onCheckedChange: oe10, parent: i38 = false, readOnly: C18 = false, render: tt8, required: R27 = false, uncheckedValue: M20, value: k17, nativeButton: P17 = false, style: rt9, ...ae11 } = N20, { clearErrors: ie10 } = n26(), { disabled: ue7, name: se12, setDirty: le9, setFilled: D14, setFocused: A17, setTouched: de8, state: G18, validationMode: ce8, validityData: fe7, shouldValidateOnChange: pe9, validation: me7 } = E14(), he6 = n37(), { labelId: Ce7, controlId: be8, registerControlId: f35, getDescriptionProps: w22 } = s28(), t48 = s35(), b14 = t48?.parent, g20 = b14 && t48.allValues, u37 = ue7 || he6.disabled || t48?.disabled || te7, p31 = se12 ?? ne12, r49 = k17 ?? p31, H16 = r5(), ge10 = r5(), s54 = be8;
  g20 ? s54 = i38 ? ge10 : `${b14.id}-${r49}` : T17 && (s54 = T17);
  let I26 = {};
  g20 && (i38 ? I26 = t48.parent.getParentProps() : r49 && (I26 = t48.parent.getChildProps(r49)));
  let { checked: L20 = Q16, indeterminate: v17 = E30, onCheckedChange: Re8, ...ke8 } = I26, m25 = t48?.value, _19 = t48?.setValue, j17 = t48?.defaultValue, V12 = o47.useRef(null), x21 = u2(() => Symbol("checkbox-control")), B17 = o47.useRef(false), { getButtonProps: Pe6, buttonRef: ve9 } = Q({ disabled: u37, native: P17 }), l19 = t48?.validation ?? me7, [n61, xe9] = m({ controlled: r49 && m25 && !i38 ? m25.includes(r49) : L20, default: r49 && j17 && !i38 ? j17.includes(r49) : Z17, name: "Checkbox", state: "checked" });
  o2(() => {
    f35 !== e5 && (B17.current = true, f35(x21.current, s54));
  }, [s54, f35, x21]), o47.useEffect(() => {
    let e58 = x21.current;
    return () => {
      !B17.current || f35 === e5 || (B17.current = false, f35(e58, void 0));
    };
  }, [f35, x21]), d21(V12, H16, n61, void 0, !t48);
  let d31 = o47.useRef(null), ye9 = d(re8, d31, l19.inputRef), Ee7 = y13(ee7, Ce7, d31, !P17, s54 ?? void 0);
  o2(() => {
    d31.current && (d31.current.indeterminate = v17, n61 && D14(true));
  }, [n61, v17, D14]), u16(n61, () => {
    t48 && !i38 || (ie10(p31), D14(n61), le9(n61 !== fe7.initialValue), pe9() ? l19.commit(n61) : l19.commit(n61, true));
  });
  let De10 = d2({ checked: n61, disabled: u37, form: O14, name: i38 ? void 0 : p31, id: P17 ? void 0 : s54 ?? void 0, required: R27, ref: ye9, style: p31 ? t13 : e8, tabIndex: -1, type: "checkbox", "aria-hidden": true, onChange(e58) {
    if (e58.nativeEvent.defaultPrevented) return;
    if (C18) {
      e58.preventDefault();
      return;
    }
    let a38 = e58.currentTarget.checked, h24 = u4(s4.none, e58.nativeEvent);
    if (Re8?.(a38, h24), oe10?.(a38, h24), !h24.isCanceled && (xe9(a38), r49 && m25 && _19 && !i38 && !g20)) {
      let c40 = a38 ? [...m25, r49] : m25.filter((y24) => y24 !== r49);
      _19(c40, h24);
    }
  }, onFocus() {
    V12.current?.focus();
  } }, k17 !== void 0 ? { value: (t48 ? n61 && k17 : k17) || "" } : o7, w22, t48 ? l19.getValidationProps : l19.getInputValidationProps), W14 = g20 ? !!L20 : n61, q15 = g20 && v17 || E30;
  o47.useEffect(() => {
    if (!b14 || !r49) return;
    let e58 = b14.disabledStatesRef.current;
    return e58.set(r49, u37), () => {
      e58.delete(r49);
    };
  }, [b14, u37, r49]);
  let S18 = o47.useMemo(() => ({ ...G18, checked: W14, disabled: u37, readOnly: C18, required: R27, indeterminate: q15 }), [G18, W14, u37, C18, R27, q15]), Ie7 = f27(S18), Ve7 = J("span", N20, { state: S18, ref: [ve9, V12, z17, t48?.registerControlRef], props: [{ id: P17 ? s54 ?? void 0 : H16, role: "checkbox", "aria-checked": v17 ? "mixed" : n61, "aria-readonly": C18 || void 0, "aria-required": R27 || void 0, "aria-labelledby": Ee7, [Qe]: i38 ? "" : void 0, onFocus() {
    A17(true);
  }, onBlur() {
    let e58 = d31.current;
    e58 && (de8(true), A17(false), ce8 === "onBlur" && l19.commit(t48 ? m25 : e58.checked));
  }, onKeyDown(e58) {
    if (e58.key !== "Enter" || (e58.preventBaseUIHandler(), e58.defaultPrevented)) return;
    let a38 = d31.current?.form ?? null, h24 = e58.currentTarget, c40 = e58.nativeEvent, y24 = e58.preventDefault, K14 = c40.preventDefault, F14 = false;
    e58.preventDefault = () => {
      F14 = true, y24.call(e58);
    }, c40.preventDefault = () => {
      F14 = true, K14.call(c40);
    }, K14.call(c40), i10(h24).queueMicrotask(() => {
      e58.preventDefault = y24, c40.preventDefault = K14, F14 || r32(a38)?.click();
    });
  }, onClick(e58) {
    if (C18 || u37) return;
    e58.preventDefault();
    let a38 = d31.current;
    a38 && a38.dispatchEvent(new (i10(a38)).PointerEvent("click", { bubbles: true, shiftKey: e58.shiftKey, ctrlKey: e58.ctrlKey, altKey: e58.altKey, metaKey: e58.metaKey }));
  } }, w22, l19.getValidationProps, ae11, ke8, Pe6], stateAttributesMapping: Ie7 });
  return ze2(n38.Provider, { value: S18, children: [Ve7, !n61 && !t48 && p31 && !i38 && M20 !== void 0 && Y7("input", { type: "hidden", form: O14, name: p31, value: M20 }), Y7("input", { ...De10, suppressHydrationWarning: true })] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/checkbox-group.mjs
import * as n39 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/areArraysEqual.mjs
function u23(t48, l19, r49 = (e58, n61) => e58 === n61) {
  return t48.length === l19.length && t48.every((e58, n61) => r49(e58, l19[n61]));
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/checkbox-group.mjs
import { jsx as ae5 } from "react/jsx-runtime";
var w11 = [];
function F8(A17) {
  let { allValues: a38 = w11, value: t48 = w11, onValueChange: g20 } = A17, k17 = n39.useRef(t48), f35 = n39.useRef(/* @__PURE__ */ new Map()), [p31, h24] = n39.useState("mixed"), m25 = r5(), P17 = t48.length === a38.length, c40 = t48.length !== a38.length && t48.length > 0, l19 = E(g20), x21 = n39.useCallback(() => ({ id: m25, indeterminate: c40, checked: P17, "aria-controls": a38.map((o62) => `${m25}-${o62}`).join(" "), onCheckedChange(o62, s54) {
    let e58 = k17.current, r49 = a38.filter((i38) => f35.current.get(i38) && e58.includes(i38)), C18 = a38.filter((i38) => !f35.current.get(i38) || f35.current.get(i38) && e58.includes(i38));
    if (e58.length === C18.length || e58.length === 0) {
      t48.length === C18.length ? l19(r49, s54) : l19(C18, s54);
      return;
    }
    p31 === "mixed" ? (l19(C18, s54), h24("on")) : p31 === "on" ? (l19(r49, s54), h24("off")) : p31 === "off" && (l19(e58, s54), h24("mixed"));
  } }), [a38, P17, m25, c40, l19, p31, t48.length]), V12 = n39.useCallback((o62) => ({ checked: t48.includes(o62), onCheckedChange(s54, e58) {
    let r49 = t48.slice();
    s54 ? r49.push(o62) : r49.splice(r49.indexOf(o62), 1), k17.current = r49, l19(r49, e58), h24("mixed");
  } }), [l19, t48]);
  return n39.useMemo(() => ({ id: m25, indeterminate: c40, getParentProps: x21, getChildProps: V12, disabledStatesRef: f35 }), [m25, c40, x21, V12]);
}
var le3 = u24.forwardRef(function(a38, t48) {
  let { allValues: g20, className: k17, defaultValue: f35, disabled: p31 = false, id: h24, onValueChange: m25, render: P17, value: c40, style: l19, ...x21 } = a38, { disabled: V12, name: o62, state: s54, validation: e58, setFilled: r49, setDirty: C18, shouldValidateOnChange: M20, validityData: i38 } = E14(), { labelId: B17, getDescriptionProps: I26 } = s28(), { clearErrors: T17 } = n26(), O14 = V12 || p31, y24 = u24.useMemo(() => {
    if (c40 === void 0) return f35 ?? [];
  }, [c40, f35]), [b14, U11] = m({ controlled: c40, default: y24, name: "CheckboxGroup", state: "value" }), E30 = E((d31, _19) => {
    m25?.(d31, _19), !_19.isCanceled && U11(d31);
  }), S18 = F8({ allValues: g20, value: b14, onValueChange: E30 }), Y18 = r5(h24), G18 = u24.useRef(null), N20 = u24.useCallback((d31) => {
    G18.current == null && d31 != null && !d31.hasAttribute(Qe) && (G18.current = d31);
  }, []);
  d21(G18, Y18, b14, void 0, !!o62);
  let R27 = b14 ?? t5;
  u16(R27, () => {
    o62 && T17(o62);
    let d31 = Array.isArray(i38.initialValue) ? i38.initialValue : t5;
    r49(R27.length > 0), C18(!u23(R27, d31)), M20() ? e58.commit(R27) : e58.commit(R27, true);
  });
  let v17 = { ...s54, disabled: O14 }, $9 = u24.useMemo(() => ({ allValues: g20, value: b14, defaultValue: y24, setValue: E30, parent: S18, disabled: O14, validation: e58, registerControlRef: N20 }), [g20, b14, y24, E30, S18, O14, e58, N20]), q15 = J("div", a38, { state: v17, ref: t48, props: [{ role: "group", "aria-labelledby": B17 }, I26, x21], stateAttributesMapping: n25 });
  return ae5(n35.Provider, { value: $9, children: q15 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/checkbox.mjs
import * as r33 from "react";
var h17 = Object.defineProperty;
var R17 = (s54, t48) => {
  for (var e58 in t48) h17(s54, e58, { get: t48[e58], enumerable: true });
};
var c30 = {};
R17(c30, { Indicator: () => i33, Root: () => Bt });
var i33 = r33.forwardRef(function(t48, e58) {
  let { render: E30, className: O14, style: V12, keepMounted: p31 = false, ...m25 } = t48, o62 = c29(), n61 = o62.checked || o62.indeterminate, { mounted: f35, transitionStatus: u37, setMounted: d31 } = g2(n61), a38 = r33.useRef(null), l19 = { ...o62, transitionStatus: u37 };
  p10({ open: n61, ref: a38, onComplete() {
    n61 || d31(false);
  } });
  let b14 = { ...f27(o62), ...i7, ...n25 }, x21 = p31 || f35, C18 = J("span", t48, { ref: [e58, a38], state: l19, stateAttributesMapping: b14, props: m25 });
  return x21 ? C18 : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/collapsible.mjs
import * as u25 from "react";
import { jsx as J7 } from "react/jsx-runtime";
import * as v12 from "react";
import * as O9 from "react";
var W11 = Object.defineProperty;
var j9 = (o62, t48) => {
  for (var n61 in t48) W11(o62, n61, { get: t48[n61], enumerable: true });
};
var T9 = {};
j9(T9, { Panel: () => w12, Root: () => y14, Trigger: () => E19 });
var g16 = { ...s7, ...i7 };
var y14 = u25.forwardRef(function(t48, n61) {
  let { render: C18, className: r49, defaultOpen: p31 = false, disabled: m25 = false, onOpenChange: l19, open: f35, style: c40, ...b14 } = t48, a38 = E(l19), e58 = A4({ open: f35, defaultOpen: p31, onOpenChange: a38, disabled: m25 }), s54 = u25.useMemo(() => ({ open: e58.open, disabled: e58.disabled, transitionStatus: e58.transitionStatus }), [e58.open, e58.disabled, e58.transitionStatus]), d31 = u25.useMemo(() => ({ ...e58, onOpenChange: a38, state: s54 }), [e58, a38, s54]), i38 = J("div", t48, { state: s54, ref: n61, props: b14, stateAttributesMapping: g16 });
  return J7(s6.Provider, { value: d31, children: i38 });
});
var ee2 = { ...i8, ...i7 };
var E19 = v12.forwardRef(function(t48, n61) {
  let { panelId: C18, open: r49, handleTrigger: p31, state: m25, disabled: l19 } = l6(), { className: f35, disabled: c40 = l19, id: b14, render: a38, nativeButton: e58 = true, style: s54, ...d31 } = t48, { getButtonProps: i38, buttonRef: h24 } = Q({ disabled: c40, focusableWhenDisabled: true, native: e58 });
  return J("button", t48, { state: m25, ref: [n61, h24], props: [{ "aria-controls": r49 ? C18 : void 0, "aria-expanded": r49, onClick: p31 }, d31, i38], stateAttributesMapping: ee2 });
});
var R18 = function(o62) {
  return o62.collapsiblePanelHeight = "--collapsible-panel-height", o62.collapsiblePanelWidth = "--collapsible-panel-width", o62;
}({});
var w12 = O9.forwardRef(function(t48, n61) {
  let { className: C18, hiddenUntilFound: r49, keepMounted: p31, render: m25, id: l19, style: f35, ...c40 } = t48, { mounted: b14, onOpenChange: a38, open: e58, panelId: s54, setMounted: d31, setPanelIdState: i38, setOpen: h24, state: P17, transitionStatus: k17 } = l6(), A17 = r49 ?? false, D14 = p31 ?? false;
  o2(() => {
    if (l19) return i38(l19), () => {
      i38(void 0);
    };
  }, [l19, i38]);
  let { height: x21, props: F14, ref: U11, shouldPreventOpenAnimation: I26, shouldRender: V12, transitionStatus: _19, width: M20 } = be({ externalRef: n61, hiddenUntilFound: A17, id: s54, keepMounted: D14, mounted: b14, onOpenChange: a38, open: e58, setMounted: d31, setOpen: h24, transitionStatus: k17 }), S18 = { ...P17, transitionStatus: _19 }, N20 = e6(f35, S18), B17 = J("div", { ...t48, style: void 0 }, { state: S18, ref: U11, props: [F14, { style: { [R18.collapsiblePanelHeight]: x21 === void 0 ? "auto" : `${x21}px`, [R18.collapsiblePanelWidth]: M20 === void 0 ? "auto" : `${M20}px` } }, c40, N20 ? { style: N20 } : void 0, I26 ? { style: { animationName: "none" } } : void 0], stateAttributesMapping: g16 });
  return V12 ? B17 : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/combobox.mjs
import "react";
import { jsx as pe4 } from "react/jsx-runtime";
import * as _10 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useRegisteredLabelId.mjs
function f28(o62, e58) {
  let r49 = r5(o62);
  return o2(() => (e58(r49), () => {
    e58(void 0);
  }), [r49, e58]), r49;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/labelable-provider/useLabel.mjs
function v13(o62 = {}) {
  let { id: c40, fallbackControlId: u37, native: r49 = false, setLabelId: a38, focusControl: l19 } = o62, { controlId: f35, setLabelId: d31 } = s28(), m25 = E((t48) => {
    d31(t48), a38?.(t48);
  }), i38 = f28(c40, m25), e58 = f35 ?? u37;
  function b14(t48) {
    if (l19) {
      l19(t48, e58);
      return;
    }
    if (!e58) return;
    let n61 = n13(t48.currentTarget).getElementById(e58);
    g4(n61) && D10(n61);
  }
  function s54(t48) {
    f10(t48.nativeEvent)?.closest("button,input,select,textarea") || (!t48.defaultPrevented && t48.detail > 1 && t48.preventDefault(), !r49 && b14(t48));
  }
  return r49 ? { id: i38, htmlFor: e58 ?? void 0, onMouseDown: s54 } : { id: i38, onClick: s54, onPointerDown(t48) {
    t48.preventDefault();
  } };
}
function D10(o62) {
  o62.focus({ focusVisible: true });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/combobox.mjs
import * as q11 from "react";
import { jsx as Ie2 } from "react/jsx-runtime";
import * as y15 from "react";
import { jsx as Ne2 } from "react/jsx-runtime";
import * as R19 from "react";
import { jsx as z6 } from "react/jsx-runtime";
import * as k10 from "react";
import * as oe5 from "react-dom";
import * as L13 from "react";
import { jsx as Ke3 } from "react/jsx-runtime";
import * as re4 from "react";
var ae6 = Object.defineProperty;
var me = (a38, e58) => {
  for (var s54 in e58) ae6(a38, s54, { get: e58[s54], enumerable: true });
};
var ne3 = {};
me(ne3, { Arrow: () => h14, Backdrop: () => M8, Chip: () => te4, ChipRemove: () => se6, Chips: () => Q8, Clear: () => se5, Collection: () => x14, Empty: () => E17, Group: () => N11, GroupLabel: () => E16, Icon: () => b8, Input: () => dt2, InputGroup: () => Q7, Item: () => xe3, ItemIndicator: () => J8, Label: () => W12, List: () => $4, Popup: () => at3, Portal: () => M7, Positioner: () => Po, Root: () => G10, Row: () => R14, Separator: () => d25, Status: () => f24, Trigger: () => tt3, Value: () => H9, useFilter: () => h13, useFilteredItems: () => m15 });
function G10(a38) {
  let { multiple: e58 = false, defaultValue: s54, value: l19, onValueChange: x21, autoComplete: f35, ...p31 } = a38;
  return pe4(Mr, { ...p31, selectionMode: e58 ? "multiple" : "single", selectedValue: l19, defaultSelectedValue: s54, onSelectedValueChange: x21, formAutoComplete: f35 });
}
var W12 = _10.forwardRef(function(e58, s54) {
  let { render: l19, className: x21, style: f35, ...p31 } = e58, t48 = p31;
  delete t48.id;
  let d31 = E14(), o62 = i23(), c40 = L8(o62, d20.inputInsidePopup), n61 = L8(o62, d20.triggerElement), b14 = L8(o62, d20.inputElement), C18 = L8(o62, d20.id), I26 = n29(C18), i38 = n61?.id ?? (c40 ? C18 : void 0), N20 = v13({ id: I26, fallbackControlId: i38, setLabelId(S18) {
    o62.set("labelId", S18);
  } });
  return J("div", e58, { ref: s54, state: d31.state, props: [N20, p31], stateAttributesMapping: n25 });
});
function H9(a38) {
  let { children: e58, placeholder: s54 } = a38, l19 = i23(), x21 = L8(l19, d20.itemToStringLabel), f35 = L8(l19, d20.selectedValue), p31 = L8(l19, d20.items), t48 = L8(l19, d20.selectionMode) === "multiple", d31 = L8(l19, d20.hasSelectedValue), o62 = !d31 && s54 != null && e58 == null, c40 = L8(l19, d20.hasNullItemLabel, o62), n61 = null;
  return typeof e58 == "function" ? n61 = e58(f35) : e58 != null ? n61 = e58 : !d31 && s54 != null && !c40 ? n61 = s54 : t48 && Array.isArray(f35) ? n61 = x13(f35, p31, x21) : n61 = p19(f35, p31, x21), Ie2(q11.Fragment, { children: n61 });
}
var J8 = y15.forwardRef(function(e58, s54) {
  let l19 = e58.keepMounted ?? false, { selected: x21 } = r29();
  return l19 || x21 ? Ne2(Se2, { ...e58, ref: s54 }) : null;
});
var Se2 = y15.memo(y15.forwardRef((a38, e58) => {
  let { render: s54, className: l19, style: x21, keepMounted: f35, ...p31 } = a38, { selected: t48 } = r29(), d31 = y15.useRef(null), { transitionStatus: o62, setMounted: c40 } = g2(t48), b14 = J("span", a38, { ref: [e58, d31], state: { selected: t48, transitionStatus: o62 }, props: [{ "aria-hidden": true, children: "\u2714\uFE0F" }, p31], stateAttributesMapping: i7 });
  return p10({ open: t48, ref: d31, onComplete() {
    t48 || c40(false);
  } }), b14;
}));
var Q8 = R19.forwardRef(function(e58, s54) {
  let { render: l19, className: x21, style: f35, ...p31 } = e58, t48 = i23(), d31 = L8(t48, d20.open), o62 = L8(t48, d20.hasSelectionChips), [c40, n61] = R19.useState(void 0);
  d31 && c40 !== void 0 && n61(void 0);
  let b14 = R19.useRef([]), C18 = J("div", e58, { ref: [s54, t48.state.chipsContainerRef], props: [o62 ? { role: "toolbar" } : o7, { onMouseDown(i38) {
    v10(i38, t48, t48.state.disabled, t48.state.readOnly);
  } }, p31] }), I26 = R19.useMemo(() => ({ highlightedChipIndex: c40, setHighlightedChipIndex: n61, chipsRef: b14 }), [c40, n61, b14]);
  return z6(t20.Provider, { value: I26, children: z6(k, { elementsRef: b14, children: C18 }) });
});
var j10 = L13.createContext(void 0);
function X3() {
  let a38 = L13.useContext(j10);
  if (!a38) throw new Error(f2(17));
  return a38;
}
var te4 = k10.forwardRef(function(e58, s54) {
  let { render: l19, className: x21, style: f35, ...p31 } = e58, t48 = i23(), { setHighlightedChipIndex: d31, chipsRef: o62 } = e20(), c40 = o4(), n61 = L8(t48, d20.disabled), b14 = L8(t48, d20.readOnly), C18 = L8(t48, d20.selectedValue), { ref: I26, index: i38 } = N2();
  function N20(r49) {
    let u37 = i38, m25 = c40 === "rtl", h24 = m25 ? "ArrowRight" : "ArrowLeft", E30 = m25 ? "ArrowLeft" : "ArrowRight";
    if (r49.key === h24) r49.preventDefault(), i38 > 0 ? u37 = i38 - 1 : u37 = void 0;
    else if (r49.key === E30) r49.preventDefault(), i38 < o62.current.length - 1 ? u37 = i38 + 1 : u37 = void 0;
    else if (r49.key === "Backspace" || r49.key === "Delete") {
      let A17 = i38 >= C18.length - 1 ? C18.length - 2 : i38;
      u37 = A17 >= 0 ? A17 : void 0, p7(r49), t48.state.setIndices({ activeIndex: null, selectedIndex: null, type: "keyboard" }), t48.state.setSelectedValue(C18.filter((F14, ie10) => ie10 !== i38), u4(s4.none, r49.nativeEvent));
    } else r49.key === "Enter" || r49.key === " " ? (p7(r49), u37 = void 0) : r49.key === "ArrowDown" || r49.key === "ArrowUp" ? (p7(r49), t48.state.setOpen(true, u4(s4.listNavigation, r49.nativeEvent)), u37 = void 0) : r49.key.length === 1 && !r49.ctrlKey && !r49.metaKey && !r49.altKey && (u37 = void 0);
    return u37;
  }
  let D14 = J("div", e58, { ref: [s54, I26], state: { disabled: n61 }, props: [{ tabIndex: -1, "aria-disabled": n61 || void 0, "aria-readonly": b14 || void 0, onKeyDown(r49) {
    if (n61 || b14) return;
    let u37 = N20(r49);
    oe5.flushSync(() => {
      d31(u37);
    }), u37 === void 0 ? t48.state.inputRef.current?.focus() : o62.current[u37]?.focus();
  } }, p31] }), M20 = k10.useMemo(() => ({ index: i38 }), [i38]);
  return Ke3(j10.Provider, { value: M20, children: D14 });
});
var se6 = re4.forwardRef(function(e58, s54) {
  let { render: l19, className: x21, disabled: f35 = false, nativeButton: p31 = true, style: t48, ...d31 } = e58, o62 = i23(), { index: c40 } = X3(), n61 = L8(o62, d20.disabled), b14 = L8(o62, d20.readOnly), C18 = L8(o62, d20.selectedValue), I26 = L8(o62, d20.isItemEqualToValue), i38 = n61 || f35, { buttonRef: N20, getButtonProps: S18 } = Q({ native: p31, disabled: i38 || b14, focusableWhenDisabled: true }), D14 = { disabled: i38 };
  function M20(m25) {
    let h24 = o62.state.activeIndex;
    if (h24 == null) return;
    let E30 = o33(o62.state.valuesRef.current, m25, I26);
    E30 !== -1 && h24 === E30 && o62.state.setIndices({ activeIndex: null, type: o62.state.keyboardActiveRef.current ? "keyboard" : "pointer" });
  }
  function r49(m25) {
    let h24 = u4(s4.chipRemovePress, m25.nativeEvent), E30 = C18[c40];
    return M20(E30), o62.state.setSelectedValue(C18.filter((A17, F14) => F14 !== c40), h24), o62.state.inputRef.current?.focus(), h24;
  }
  return J("button", e58, { ref: [s54, N20], state: D14, props: [{ tabIndex: -1, onMouseDown(m25) {
    m25.preventDefault();
  }, onClick(m25) {
    if (i38 || b14) return;
    r49(m25).isPropagationAllowed || m25.stopPropagation();
  }, onKeyDown(m25) {
    i38 || b14 || (m25.key === "Enter" || m25.key === " ") && (r49(m25).isPropagationAllowed || p7(m25));
  } }, d31, S18] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/context-menu.mjs
import * as r42 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/context-menu/root/ContextMenuRootContext.mjs
import * as t27 from "react";
var r34 = t27.createContext(void 0);
function u26(o62 = true) {
  let e58 = t27.useContext(r34);
  if (e58 === void 0 && !o62) throw new Error(f2(25));
  return e58;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/arrow/MenuArrow.mjs
import * as r36 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/positioner/MenuPositionerContext.mjs
import * as e29 from "react";
var i34 = e29.createContext(void 0);
function s37(o62) {
  let t48 = e29.useContext(i34);
  if (t48 === void 0 && !o62) throw new Error(f2(33));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/root/MenuRootContext.mjs
import * as e30 from "react";
var r35 = e30.createContext(void 0);
function u27(o62) {
  let t48 = e30.useContext(r35);
  if (t48 === void 0 && !o62) throw new Error(f2(36));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/arrow/MenuArrow.mjs
var S13 = r36.forwardRef(function(e58, t48) {
  let { render: M20, className: R27, style: A17, ...o62 } = e58, { store: n61 } = u27(), { arrowRef: s54, side: a38, align: i38, arrowUncentered: p31, arrowStyles: u37 } = s37(), c40 = { open: n61.useState("open"), side: a38, align: i38, uncentered: p31 };
  return J("div", e58, { ref: [s54, t48], stateAttributesMapping: g11, state: c40, props: { style: u37, "aria-hidden": true, ...o62 } });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/backdrop/MenuBackdrop.mjs
import * as s38 from "react";
var R20 = { ...g11, ...i7 };
var h18 = s38.forwardRef(function(t48, n61) {
  let { render: k17, className: x21, style: C18, ...r49 } = t48, { store: e58 } = u27(), a38 = e58.useState("open"), p31 = e58.useState("mounted"), i38 = e58.useState("transitionStatus"), u37 = e58.useState("lastOpenChangeReason"), o62 = u26(), c40 = { open: a38, transitionStatus: i38 };
  return J("div", t48, { ref: o62?.backdropRef ? [n61, o62.backdropRef] : n61, state: c40, stateAttributesMapping: R20, props: [{ role: "presentation", hidden: !p31, style: { pointerEvents: u37 === s4.triggerHover ? "none" : void 0, userSelect: "none", WebkitUserSelect: "none" } }, r49] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/checkbox-item/MenuCheckboxItem.mjs
import * as t28 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/checkbox-item/MenuCheckboxItemContext.mjs
import * as e31 from "react";
var n40 = e31.createContext(void 0);
function c31() {
  let t48 = e31.useContext(n40);
  if (t48 === void 0) throw new Error(f2(30));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/item/useMenuItem.mjs
import * as e32 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/item/useMenuItemCommonProps.mjs
import * as M10 from "react";
function b9(p31) {
  let { closeOnClick: a38, highlighted: m25, id: f35, nodeId: o62, store: r49, typingRef: l19, itemRef: i38, itemMetadata: u37 } = p31, { events: s54 } = r49.useState("floatingTreeRoot"), e58 = u26(true), n61 = e58 !== void 0;
  return M10.useMemo(() => ({ id: f35, role: "menuitem", tabIndex: m25 ? 0 : -1, onKeyDown(t48) {
    t48.key === " " && l19?.current && t48.preventDefault();
  }, onMouseMove(t48) {
    o62 && s54.emit("itemhover", { nodeId: o62, target: t48.currentTarget });
  }, onClick(t48) {
    a38 && s54.emit("close", { domEvent: t48, reason: s4.itemPress });
  }, onMouseUp(t48) {
    if (e58) {
      let c40 = e58.initialCursorPointRef.current;
      if (e58.initialCursorPointRef.current = null, n61 && c40 && Math.abs(t48.clientX - c40.x) <= 1 && Math.abs(t48.clientY - c40.y) <= 1 || n61 && !x3 && t48.button === 2) return;
    }
    i38.current && r49.context.allowMouseUpTriggerRef.current && (!n61 || t48.button === 2) && (!u37 || u37.type === "regular-item") && i38.current.click();
  } }), [a38, m25, f35, s54, o62, r49, l19, i38, e58, n61, u37]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/item/useMenuItem.mjs
var C11 = { type: "regular-item" };
function E20(i38) {
  let { closeOnClick: c40, disabled: a38 = false, highlighted: f35, id: p31, store: o62, typingRef: R27 = o62.context.typingRef, nativeButton: l19, itemMetadata: t48, nodeId: g20 } = i38, r49 = e32.useRef(null), { getButtonProps: n61, buttonRef: d31 } = Q({ disabled: a38, focusableWhenDisabled: true, native: l19, composite: true }), s54 = b9({ closeOnClick: c40, highlighted: f35, id: p31, nodeId: g20, store: o62, typingRef: R27, itemRef: r49, itemMetadata: t48 }), m25 = e32.useCallback((M20) => d2(s54, { onMouseEnter() {
    t48.type === "submenu-trigger" && t48.setActive();
  } }, M20, n61), [s54, n61, t48]), u37 = d(r49, d31);
  return e32.useMemo(() => ({ getItemProps: m25, itemRef: u37 }), [m25, u37]);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/utils/stateAttributesMapping.mjs
var e33 = function(d31) {
  return d31.checked = "data-checked", d31.unchecked = "data-unchecked", d31.disabled = "data-disabled", d31.highlighted = "data-highlighted", d31;
}({});
var r37 = { checked(d31) {
  return d31 ? { [e33.checked]: "" } : { [e33.unchecked]: "" };
}, ...i7 };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/checkbox-item/MenuCheckboxItem.mjs
import { jsx as T10 } from "react/jsx-runtime";
var ne4 = t28.forwardRef(function(r49, a38) {
  let { render: q15, className: z17, id: d31, label: u37, nativeButton: l19 = false, disabled: o62 = false, closeOnClick: f35 = false, checked: p31, defaultChecked: h24, onCheckedChange: C18, style: F14, ...k17 } = r49, i38 = N2({ label: u37 }), x21 = s37(true), I26 = r5(d31), { store: n61 } = u27(), s54 = n61.useState("isActive", i38.index), M20 = n61.useState("itemProps"), [e58, b14] = m({ controlled: p31, default: h24 ?? false, name: "MenuCheckboxItem", state: "checked" }), { getItemProps: v17, itemRef: R27 } = E20({ closeOnClick: f35, disabled: o62, highlighted: s54, id: I26, store: n61, nativeButton: l19, nodeId: x21?.context.nodeId, itemMetadata: C11 }), m25 = t28.useMemo(() => ({ disabled: o62, highlighted: s54, checked: e58 }), [o62, s54, e58]);
  function P17(g20) {
    let c40 = u4(s4.itemPress, g20.nativeEvent, void 0, { preventUnmountOnClose() {
    } });
    C18?.(!e58, c40), !c40.isCanceled && b14((N20) => !N20);
  }
  let E30 = J("div", r49, { state: m25, stateAttributesMapping: r37, props: [M20, { role: "menuitemcheckbox", "aria-checked": e58, onClick: P17 }, k17, v17], ref: [R27, a38, i38.ref] });
  return T10(n40.Provider, { value: m25, children: E30 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/checkbox-item-indicator/MenuCheckboxItemIndicator.mjs
import * as t29 from "react";
var E21 = t29.forwardRef(function(n61, c40) {
  let { render: k17, className: b14, style: C18, keepMounted: i38 = false, ...r49 } = n61, e58 = c31(), o62 = t29.useRef(null), { transitionStatus: s54, setMounted: a38 } = g2(e58.checked);
  p10({ open: e58.checked, ref: o62, onComplete() {
    e58.checked || a38(false);
  } });
  let d31 = { checked: e58.checked, disabled: e58.disabled, highlighted: e58.highlighted, transitionStatus: s54 };
  return J("span", n61, { state: d31, ref: [c40, o62], stateAttributesMapping: r37, props: { "aria-hidden": true, ...r49 }, enabled: i38 || e58.checked });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/group/MenuGroup.mjs
import * as e35 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/group/MenuGroupContext.mjs
import * as e34 from "react";
var n41 = e34.createContext(void 0);
function u28() {
  let o62 = e34.useContext(n41);
  if (o62 === void 0) throw new Error(f2(31));
  return o62;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/group/MenuGroup.mjs
import { jsx as p24 } from "react/jsx-runtime";
var R21 = e35.forwardRef(function(r49, o62) {
  let { render: d31, className: c40, style: m25, ...t48 } = r49, [n61, s54] = e35.useState(void 0), u37 = J("div", r49, { ref: o62, props: { role: "group", "aria-labelledby": n61, ...t48 } });
  return p24(n41.Provider, { value: s54, children: u37 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/group-label/MenuGroupLabel.mjs
import * as t30 from "react";
var R22 = t30.forwardRef(function(r49, n61) {
  let { render: m25, className: l19, style: c40, id: s54, ...u37 } = r49, e58 = r5(s54), o62 = u28();
  return o2(() => (o62(e58), () => {
    o62(void 0);
  }), [o62, e58]), J("div", r49, { ref: n61, props: { id: e58, role: "presentation", ...u37 } });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/item/MenuItem.mjs
import * as i35 from "react";
var k11 = i35.forwardRef(function(t48, r49) {
  let { render: h24, className: b14, id: m25, label: u37, nativeButton: a38 = false, disabled: o62 = false, closeOnClick: c40 = true, style: y24, ...d31 } = t48, s54 = N2({ label: u37 }), p31 = s37(true), f35 = r5(m25), { store: e58 } = u27(), n61 = e58.useState("isActive", s54.index), l19 = e58.useState("itemProps"), { getItemProps: I26, itemRef: M20 } = E20({ closeOnClick: c40, disabled: o62, highlighted: n61, id: f35, store: e58, nativeButton: a38, nodeId: p31?.context.nodeId, itemMetadata: C11 });
  return J("div", t48, { state: { disabled: o62, highlighted: n61 }, props: [l19, d31, I26], ref: [M20, r49, s54.ref] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/link-item/MenuLinkItem.mjs
import * as t31 from "react";
var F9 = t31.forwardRef(function(o62, i38) {
  let { render: E30, className: b14, id: m25, label: u37, closeOnClick: c40 = false, style: O14, ...p31 } = o62, n61 = t31.useRef(null), s54 = N2({ label: u37 }), f35 = s37(true)?.context.nodeId, a38 = r5(m25), { store: e58 } = u27(), r49 = e58.useState("isActive", s54.index), l19 = e58.useState("itemProps"), d31 = e58.context.typingRef, { getButtonProps: R27, buttonRef: I26 } = Q({ native: false, composite: true }), P17 = b9({ closeOnClick: c40, highlighted: r49, id: a38, nodeId: f35, store: e58, typingRef: d31, itemRef: n61 });
  function x21(g20) {
    return d2(P17, g20, R27);
  }
  return J("a", o62, { state: { highlighted: r49 }, props: [l19, p31, x21], ref: [n61, I26, i38, s54.ref] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/popup/MenuPopup.mjs
import * as n43 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/toolbar/root/ToolbarRootContext.mjs
import * as o48 from "react";
var n42 = o48.createContext(void 0);
function s39(e58) {
  let t48 = o48.useContext(n42);
  if (t48 === void 0 && !e58) throw new Error(f2(69));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/popup/MenuPopup.mjs
import { jsx as z7 } from "react/jsx-runtime";
var B10 = { ...g11, ...i7 };
var pe5 = n43.forwardRef(function(u37, f35) {
  let { render: L20, className: Q16, style: U11, finalFocus: i38, ...d31 } = u37, { store: e58 } = u27(), { side: g20, align: S18 } = s37(), b14 = s39(true) != null, a38 = e58.useState("open"), p31 = e58.useState("transitionStatus"), C18 = e58.useState("popupProps"), E30 = e58.useState("mounted"), R27 = e58.useState("instantType"), x21 = e58.useState("activeTriggerElement"), t48 = e58.useState("parent"), y24 = e58.useState("lastOpenChangeReason"), M20 = e58.useState("rootId"), c40 = e58.useState("floatingRootContext"), s54 = e58.useState("floatingTreeRoot"), F14 = e58.useState("closeDelay"), T17 = e58.useState("activeTriggerElement"), v17 = e58.useState("hoverEnabled"), P17 = e58.useState("disabled"), r49 = t48.type === "context-menu";
  p10({ open: a38, ref: e58.context.popupRef, onComplete() {
    a38 && e58.context.onOpenChangeComplete?.(true);
  } }), n43.useEffect(() => {
    function o62(m25) {
      e58.setOpen(false, u4(m25.reason, m25.domEvent));
    }
    return s54.events.on("close", o62), () => {
      s54.events.off("close", o62);
    };
  }, [s54.events, e58]), Ps(c40, { enabled: v17 && !P17 && !r49 && t48.type !== "menubar", closeDelay: F14 });
  let h24 = n43.useCallback((o62) => {
    e58.set("popupElement", o62);
  }, [e58]), O14 = { transitionStatus: p31, side: g20, align: S18, open: a38, nested: t48.type === "menu", instant: R27 }, D14 = J("div", u37, { state: O14, ref: [f35, e58.context.popupRef, h24], stateAttributesMapping: B10, props: [C18, { onKeyDown(o62) {
    b14 && Y2.has(o62.key) && o62.stopPropagation();
  } }, T8(p31), d31, { "data-rootownerid": M20 }] }), l19 = t48.type === void 0 || r49;
  return (x21 || t48.type === "menubar" && y24 !== s4.outsidePress) && (l19 = true), z7(To, { context: c40, modal: r49, disabled: !E30, returnFocus: i38 === void 0 ? l19 : i38, initialFocus: t48.type !== "menu", restoreFocus: true, externalTree: t48.type !== "menubar" ? s54 : void 0, previousFocusableElement: T17, nextFocusableElement: t48.type === void 0 ? e58.context.triggerFocusTargetRef : void 0, beforeContentFocusGuardRef: t48.type === void 0 ? e58.context.beforeContentFocusGuardRef : void 0, children: D14 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/portal/MenuPortal.mjs
import * as t32 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/portal/MenuPortalContext.mjs
import * as e36 from "react";
var n44 = e36.createContext(void 0);
function s40() {
  let t48 = e36.useContext(n44);
  if (t48 === void 0) throw new Error(f2(32));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/portal/MenuPortal.mjs
import { jsx as e37 } from "react/jsx-runtime";
var R23 = t32.forwardRef(function(r49, n61) {
  let { keepMounted: o62 = false, ...u37 } = r49, { store: s54 } = u27();
  return s54.useState("mounted") || o62 ? e37(n44.Provider, { value: o62, children: e37(eo, { ref: n61, ...u37 }) }) : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/positioner/MenuPositioner.mjs
import * as r38 from "react";
import { jsx as S14, jsxs as Pe2 } from "react/jsx-runtime";
var Ge2 = r38.forwardRef(function(u37, w22) {
  let { anchor: P17, positionMethod: V12 = "absolute", className: Ie7, render: Ce7, side: y24, align: H16, sideOffset: j17 = 0, alignOffset: B17 = 0, collisionBoundary: F14 = "clipping-ancestors", collisionPadding: U11 = 5, arrowPadding: W14 = 5, sticky: q15 = false, disableAnchorTracking: z17 = false, collisionAvoidance: G18 = i15, style: Ne7, ...J18 } = u37, { store: e58 } = u27(), K14 = s40(), Q16 = u26(true), t48 = e58.useState("parent"), I26 = e58.useState("floatingRootContext"), s54 = e58.useState("floatingTreeRoot"), x21 = e58.useState("mounted"), i38 = e58.useState("open"), C18 = e58.useState("modal"), X11 = e58.useState("openMethod"), d31 = e58.useState("activeTriggerElement"), Y18 = e58.useState("transitionStatus"), N20 = e58.useState("positionerElement"), Z17 = e58.useState("instantType"), $9 = e58.useState("hasViewport"), E30 = e58.useState("lastOpenChangeReason"), a38 = e58.useState("floatingNodeId"), b14 = e58.useState("floatingParentNodeId"), M20 = I26.useState("domReferenceElement"), A17 = r38.useRef(null), T17 = y7(N20, false, false), D14 = P17, k17 = j17, L20 = B17, h24 = H16, O14 = G18;
  t48.type === "context-menu" && (D14 = P17 ?? t48.context?.anchor, h24 = h24 ?? "start", !y24 && h24 !== "center" && (L20 = u37.alignOffset ?? 2, k17 = u37.sideOffset ?? -5));
  let p31 = y24, m25 = h24;
  t48.type === "menu" ? (p31 = p31 ?? "inline-end", m25 = m25 ?? "start", O14 = u37.collisionAvoidance ?? S8) : t48.type === "menubar" && (p31 = p31 ?? "bottom", m25 = m25 ?? "start");
  let _19 = t48.type === "context-menu", g20 = Lt2({ anchor: D14, floatingRootContext: I26, positionMethod: Q16 ? "fixed" : V12, mounted: x21, side: p31, sideOffset: k17, align: m25, alignOffset: L20, arrowPadding: _19 ? 0 : W14, collisionBoundary: F14, collisionPadding: U11, sticky: q15, nodeId: a38, keepMounted: K14, disableAnchorTracking: z17, collisionAvoidance: O14, shiftCrossAxis: _19 && !("side" in O14 && O14.side === "flip"), externalTree: s54, adaptiveOrigin: $9 ? Y5 : void 0 });
  r38.useEffect(() => {
    function n61(o62) {
      o62.open && (o62.parentNodeId === a38 && e58.set("hoverEnabled", false), o62.nodeId !== a38 && o62.parentNodeId === e58.select("floatingParentNodeId") && e58.setOpen(false, u4(s4.siblingOpen)));
    }
    return s54.events.on("menuopenchange", n61), () => {
      s54.events.off("menuopenchange", n61);
    };
  }, [e58, s54.events, a38]), r38.useEffect(() => {
    if (e58.select("floatingParentNodeId") == null) return;
    function n61(o62) {
      if (o62.open || o62.nodeId !== e58.select("floatingParentNodeId")) return;
      let l19 = o62.reason ?? s4.siblingOpen;
      e58.setOpen(false, u4(l19));
    }
    return s54.events.on("menuopenchange", n61), () => {
      s54.events.off("menuopenchange", n61);
    };
  }, [s54.events, e58]);
  let c40 = p12();
  r38.useEffect(() => {
    i38 || c40.clear();
  }, [i38, c40]), r38.useEffect(() => {
    function n61(o62) {
      if (!(!i38 || o62.nodeId !== e58.select("floatingParentNodeId"))) if (o62.target && d31 && d31 !== o62.target) {
        let l19 = e58.select("closeDelay");
        l19 > 0 ? c40.isStarted() || c40.start(l19, () => {
          e58.setOpen(false, u4(s4.siblingOpen));
        }) : e58.setOpen(false, u4(s4.siblingOpen));
      } else c40.clear();
    }
    return s54.events.on("itemhover", n61), () => {
      s54.events.off("itemhover", n61);
    };
  }, [s54.events, i38, d31, e58, c40]), r38.useEffect(() => {
    let n61 = { open: i38, nodeId: a38, parentNodeId: b14, reason: e58.select("lastOpenChangeReason") };
    s54.events.emit("menuopenchange", n61);
  }, [s54.events, i38, e58, a38, b14]), o2(() => {
    let n61 = M20, o62 = A17.current;
    if (n61 && (A17.current = n61), o62 && n61 && n61 !== o62) {
      e58.set("instantType", void 0);
      let l19 = new AbortController();
      return T17(() => {
        e58.set("instantType", "trigger-change");
      }, l19.signal), () => {
        l19.abort();
      };
    }
  }, [M20, T17, e58]);
  let ee7 = { open: i38, side: g20.side, align: g20.align, anchorHidden: g20.anchorHidden, nested: t48.type === "menu", instant: Z17 }, te7 = t48.type === "menubar" && t48.context.modal, ne12 = C18 && E30 !== s4.triggerHover;
  L10(i38 && (te7 || ne12), X11 === "touch", N20, d31);
  let oe10 = g14(u37, ee7, { styles: g20.positionerStyles, transitionStatus: Y18, props: J18, refs: [w22, e58.useStateSetter("positionerElement")], hidden: !x21, inert: !i38 }), se12 = x21 && t48.type !== "menu" && (t48.type !== "menubar" && C18 && E30 !== s4.triggerHover || t48.type === "menubar" && t48.context.modal), R27 = null;
  return t48.type === "menubar" ? R27 = t48.context.contentElement : t48.type === void 0 && (R27 = d31), Pe2(i34.Provider, { value: g20, children: [se12 && S14(l12, { ref: t48.type === "context-menu" || t48.type === "nested-context-menu" ? t48.context.internalBackdropRef : null, inert: s22(!i38), cutout: R27 }), S14(v6, { id: a38, children: S14(k, { elementsRef: e58.context.itemDomElements, labelsRef: e58.context.itemLabels, children: oe10 }) })] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/radio-group/MenuRadioGroup.mjs
import * as e39 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/radio-group/MenuRadioGroupContext.mjs
import * as e38 from "react";
var n45 = e38.createContext(void 0);
function u29() {
  let o62 = e38.useContext(n45);
  if (o62 === void 0) throw new Error(f2(34));
  return o62;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/radio-group/MenuRadioGroup.mjs
import { jsx as u30 } from "react/jsx-runtime";
var w13 = e39.memo(e39.forwardRef(function(a38, d31) {
  let { render: h24, className: N20, value: s54, defaultValue: i38, onValueChange: p31, disabled: o62 = false, style: g20, "aria-labelledby": c40, ...m25 } = a38, [f35, R27] = e39.useState(void 0), [r49, b14] = m({ controlled: s54, default: i38, name: "MenuRadioGroup" }), t48 = E((l19, n61) => {
    p31?.(l19, n61), !n61.isCanceled && b14(l19);
  }), v17 = J("div", a38, { state: { disabled: o62 }, ref: d31, props: { role: "group", "aria-labelledby": c40 ?? f35, "aria-disabled": o62 || void 0, ...m25 } }), M20 = e39.useMemo(() => ({ value: r49, setValue: t48, disabled: o62 }), [r49, t48, o62]);
  return u30(n41.Provider, { value: R27, children: u30(n45.Provider, { value: M20, children: v17 }) });
}));

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/radio-item/MenuRadioItem.mjs
import * as e41 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/radio-item/MenuRadioItemContext.mjs
import * as e40 from "react";
var n46 = e40.createContext(void 0);
function r39() {
  let t48 = e40.useContext(n46);
  if (t48 === void 0) throw new Error(f2(35));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/radio-item/MenuRadioItem.mjs
import { jsx as w14 } from "react/jsx-runtime";
var ie3 = e41.forwardRef(function(n61, d31) {
  let { render: q15, className: z17, id: u37, label: c40, nativeButton: l19 = false, disabled: p31 = false, closeOnClick: f35 = false, value: r49, style: F14, ...R27 } = n61, a38 = N2({ label: c40 }), M20 = s37(true), I26 = r5(u37), { store: t48 } = u27(), o62 = t48.useState("isActive", a38.index), v17 = t48.useState("itemProps"), { value: C18, setValue: x21, disabled: P17 } = u29(), i38 = P17 || p31, s54 = C18 === r49, { getItemProps: h24, itemRef: E30 } = E20({ closeOnClick: f35, disabled: i38, highlighted: o62, id: I26, store: t48, nativeButton: l19, nodeId: M20?.context.nodeId, itemMetadata: C11 }), m25 = e41.useMemo(() => ({ disabled: i38, highlighted: o62, checked: s54 }), [i38, o62, s54]);
  function b14(k17) {
    let N20 = u4(s4.itemPress, k17.nativeEvent, void 0, { preventUnmountOnClose() {
    } });
    x21(r49, N20);
  }
  let g20 = J("div", n61, { state: m25, stateAttributesMapping: r37, props: [v17, { role: "menuitemradio", "aria-checked": s54, onClick: b14 }, R27, h24], ref: [E30, d31, a38.ref] });
  return w14(n46.Provider, { value: m25, children: g20 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/radio-item-indicator/MenuRadioItemIndicator.mjs
import * as t33 from "react";
var x15 = t33.forwardRef(function(n61, i38) {
  let { render: R27, className: I26, style: M20, keepMounted: a38 = false, ...r49 } = n61, e58 = r39(), o62 = t33.useRef(null), { transitionStatus: s54, setMounted: d31 } = g2(e58.checked);
  p10({ open: e58.checked, ref: o62, onComplete() {
    e58.checked || d31(false);
  } });
  let c40 = { checked: e58.checked, disabled: e58.disabled, highlighted: e58.highlighted, transitionStatus: s54 };
  return J("span", n61, { state: c40, stateAttributesMapping: r37, ref: [i38, o62], props: { "aria-hidden": true, ...r49 }, enabled: a38 || e58.checked });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/root/MenuRoot.mjs
import * as n48 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/fastHooks.mjs
import * as p25 from "react";
import * as a25 from "react";
var f29 = {};
function u31(t48, n61) {
  let e58 = a25.useRef(f29);
  return e58.current === f29 && (e58.current = t48(n61)), e58;
}
var c32 = [];
var o49;
function I16(t48) {
  let n61 = (e58, m25) => {
    let r49 = u31(d26).current, s54;
    try {
      o49 = r49;
      for (let i38 of c32) i38.before(r49);
      s54 = t48(e58, m25);
      for (let i38 of c32) i38.after(r49);
      r49.didInitialize = true;
    } finally {
      o49 = void 0;
    }
    return s54;
  };
  return n61.displayName = t48.displayName || t48.name, n61;
}
function N12(t48) {
  return p25.forwardRef(I16(t48));
}
function d26() {
  return { didInitialize: false };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menubar/MenubarContext.mjs
import * as e42 from "react";
var o50 = e42.createContext(null);
function s41(n61) {
  let t48 = e42.useContext(o50);
  if (t48 === null && !n61) throw new Error(f2(5));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/store/MenuStore.mjs
import * as r40 from "react";
var I17 = { ...Re3, disabled: ut2((e58) => e58.parent.type === "menubar" && e58.parent.context.disabled || e58.disabled), modal: ut2((e58) => (e58.parent.type === void 0 || e58.parent.type === "context-menu") && (e58.modal ?? true)), openMethod: ut2((e58) => e58.openMethod), allowMouseEnter: ut2((e58) => e58.allowMouseEnter), stickIfOpen: ut2((e58) => e58.stickIfOpen), parent: ut2((e58) => e58.parent), rootId: ut2((e58) => e58.parent.type === "menu" ? e58.parent.store.select("rootId") : e58.parent.type !== void 0 ? e58.parent.context.rootId : e58.rootId), activeIndex: ut2((e58) => e58.activeIndex), isActive: ut2((e58, n61) => e58.activeIndex === n61), hoverEnabled: ut2((e58) => e58.hoverEnabled), instantType: ut2((e58) => e58.instantType), lastOpenChangeReason: ut2((e58) => e58.openChangeReason), floatingTreeRoot: ut2((e58) => e58.parent.type === "menu" ? e58.parent.store.select("floatingTreeRoot") : e58.floatingTreeRoot), floatingNodeId: ut2((e58) => e58.floatingNodeId), floatingParentNodeId: ut2((e58) => e58.floatingParentNodeId), itemProps: ut2((e58) => e58.itemProps), closeDelay: ut2((e58) => e58.closeDelay), hasViewport: ut2((e58) => e58.hasViewport), keyboardEventRelay: ut2((e58) => {
  if (e58.keyboardEventRelay) return e58.keyboardEventRelay;
  if (e58.parent.type === "menu") return e58.parent.store.select("keyboardEventRelay");
}) };
var c33 = class e43 extends oe3 {
  constructor(n61) {
    super({ ...h19(), ...n61 }, { positionerRef: r40.createRef(), popupRef: r40.createRef(), typingRef: { current: false }, itemDomElements: { current: [] }, itemLabels: { current: [] }, allowMouseUpTriggerRef: { current: false }, triggerFocusTargetRef: r40.createRef(), beforeContentFocusGuardRef: r40.createRef(), onOpenChangeComplete: void 0, triggerElements: new b6() }, I17), this.unsubscribeParentListener = this.observe("parent", (o62) => {
      if (this.unsubscribeParentListener?.(), o62.type === "menu") {
        let a38 = o62.store.select("rootId"), i38 = o62.store.select("floatingTreeRoot"), l19 = o62.store.select("keyboardEventRelay");
        this.unsubscribeParentListener = o62.store.subscribe(() => {
          let s54 = o62.store.select("rootId"), d31 = o62.store.select("floatingTreeRoot"), u37 = o62.store.select("keyboardEventRelay");
          a38 === s54 && i38 === d31 && l19 === u37 || (a38 = s54, i38 = d31, l19 = u37, this.notifyAll());
        }), this.context.allowMouseUpTriggerRef = o62.store.context.allowMouseUpTriggerRef;
        return;
      }
      o62.type !== void 0 && (this.context.allowMouseUpTriggerRef = o62.context.allowMouseUpTriggerRef), this.unsubscribeParentListener = null;
    });
  }
  setOpen(n61, o62) {
    this.state.floatingRootContext.context.events.emit("setOpen", { open: n61, eventDetails: o62 });
  }
  static useStore(n61, o62) {
    let a38 = u2(() => new e43(o62)).current;
    return n61 ?? a38;
  }
  unsubscribeParentListener = null;
};
function h19() {
  return { ...Ce(), disabled: false, modal: true, openMethod: null, allowMouseEnter: false, stickIfOpen: true, parent: { type: void 0 }, rootId: void 0, activeIndex: null, hoverEnabled: true, instantType: void 0, openChangeReason: null, floatingTreeRoot: new s16(), floatingNodeId: void 0, floatingParentNodeId: null, itemProps: o7, keyboardEventRelay: void 0, closeDelay: 0, hasViewport: false };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/submenu-root/MenuSubmenuRootContext.mjs
import * as e44 from "react";
var t34 = e44.createContext(void 0);
function n47() {
  return e44.useContext(t34);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/root/MenuRoot.mjs
import { jsx as Z9 } from "react/jsx-runtime";
var xt = I16(function($9) {
  let { children: v17, open: T17, onOpenChange: ee7, onOpenChangeComplete: te7, defaultOpen: _19 = false, disabled: ne12 = false, modal: oe10, loopFocus: re8 = true, orientation: se12 = "vertical", actionsRef: ie10, closeParentOnEsc: ae11 = false, handle: ue7, triggerId: H16, defaultTriggerId: U11 = null, highlightItemOnHover: ce8 = true } = $9, l19 = u26(true), u37 = u27(true), E30 = s41(true), K14 = n47(), b14 = n48.useMemo(() => K14 && u37 ? { type: "menu", store: u37.store } : E30 ? { type: "menubar", context: E30 } : l19 && !u37 ? { type: "context-menu", context: l19 } : { type: void 0 }, [l19, u37, E30, K14]), e58 = c33.useStore(ue7?.store, { open: _19, openProp: T17, activeTriggerId: U11, triggerIdProp: H16, parent: b14 });
  n16(() => {
    T17 === void 0 && e58.state.open === false && _19 === true && e58.update({ open: true, activeTriggerId: U11 });
  }), e58.useControlledProp("openProp", T17), e58.useControlledProp("triggerIdProp", H16), e58.useContextCallback("onOpenChangeComplete", te7);
  let le9 = I3(), h24 = I3(), g20 = e58.useState("floatingTreeRoot"), M20 = T5(g20), R27 = d15(), i38 = e58.useState("open"), y24 = e58.useState("activeTriggerElement"), L20 = e58.useState("positionerElement"), Y18 = e58.useState("hoverEnabled"), B17 = e58.useState("disabled"), pe9 = e58.useState("lastOpenChangeReason"), o62 = e58.useState("parent"), d31 = e58.useState("activeIndex"), de8 = e58.useState("payload"), fe7 = e58.useState("floatingParentNodeId"), S18 = n48.useRef(null), O14 = n48.useRef(o62.type !== "context-menu"), N20 = p12(), C18 = n48.useRef(true), D14 = p12(), V12 = fe7 != null, { openMethod: me7, triggerProps: x21 } = C7(i38);
  e58.useSyncedValues({ disabled: ne12, modal: o62.type === void 0 ? oe10 : void 0, openMethod: me7, rootId: le9 }), pe3(e58);
  let { forceUnmount: j17 } = fe2(i38, e58, () => {
    e58.update({ allowMouseEnter: false, stickIfOpen: true });
  });
  o2(() => {
    l19 && !u37 ? e58.update({ parent: { type: "context-menu", context: l19 }, floatingNodeId: M20, floatingParentNodeId: R27 }) : u37 && e58.update({ floatingNodeId: M20, floatingParentNodeId: R27 });
  }, [l19, u37, M20, R27, e58]), n48.useEffect(() => {
    if (i38 || (S18.current = null), o62.type === "context-menu") {
      if (!i38) {
        N20.clear(), O14.current = false;
        return;
      }
      N20.start(500, () => {
        O14.current = true;
      });
    }
  }, [N20, i38, o62.type]), o2(() => {
    !i38 && !Y18 && e58.set("hoverEnabled", true);
  }, [i38, Y18, e58]);
  let f35 = E((t48, r49) => {
    let s54 = r49.reason;
    if (i38 === t48 && r49.trigger === y24 && pe9 === s54 || (r49.preventUnmountOnClose = () => {
      e58.set("preventUnmountingOnClose", true);
    }, !t48 && r49.trigger == null && (r49.trigger = y24 ?? void 0), ee7?.(t48, r49), r49.isCanceled)) return;
    e58.state.floatingRootContext.dispatchOpenChange(t48, r49);
    let I26 = r49.event;
    if (t48 === false && I26?.type === "click" && I26.pointerType === "touch" && !C18.current) return;
    if (!t48 && d31 !== null) {
      let Ee7 = e58.context.itemDomElements.current[d31];
      queueMicrotask(() => {
        Ee7?.setAttribute("tabindex", "-1");
      });
    }
    t48 && s54 === s4.triggerFocus ? (C18.current = false, D14.start(300, () => {
      C18.current = true;
    })) : (C18.current = true, D14.clear());
    let z17 = (s54 === s4.triggerPress || s54 === s4.itemPress) && I26.detail === 0 && I26?.isTrusted, Te7 = !t48 && (s54 === s4.escapeKey || s54 == null), F14 = { open: t48, openChangeReason: s54 };
    S18.current = r49.event ?? null;
    let G18 = r49.trigger?.id ?? null;
    (G18 || t48) && (F14.activeTriggerId = G18, F14.activeTriggerElement = r49.trigger ?? null), e58.update(F14), o62.type === "menubar" && (s54 === s4.triggerFocus || s54 === s4.focusOut || s54 === s4.triggerHover || s54 === s4.listNavigation || s54 === s4.siblingOpen) ? e58.set("instantType", "group") : z17 || Te7 ? e58.set("instantType", z17 ? "click" : "dismiss") : e58.set("instantType", void 0);
  }), m25 = h10({ popupStore: e58, floatingId: h24, nested: R27 != null, onOpenChange: f35 }), w22 = m25.context.events;
  n48.useEffect(() => {
    let t48 = ({ open: r49, eventDetails: s54 }) => f35(r49, s54);
    return w22.on("setOpen", t48), () => {
      w22?.off("setOpen", t48);
    };
  }, [w22, f35]);
  let q15 = n48.useCallback(() => {
    e58.setOpen(false, u4(s4.imperativeAction));
  }, [e58]);
  n48.useImperativeHandle(ie10, () => ({ unmount: j17, close: q15 }), [j17, q15]);
  let k17;
  o62.type === "context-menu" && (k17 = o62.context), n48.useImperativeHandle(k17?.positionerRef, () => L20, [L20]), n48.useImperativeHandle(k17?.actionsRef, () => ({ setOpen: f35 }), [f35]);
  let p31 = zo(m25, { enabled: !B17, bubbles: { escapeKey: ae11 && o62.type === "menu" }, outsidePress() {
    return o62.type !== "context-menu" || S18.current?.type === "contextmenu" ? true : O14.current;
  }, externalTree: V12 ? g20 : void 0 }), ge10 = o4(), Re8 = n48.useCallback((t48) => {
    e58.select("activeIndex") !== t48 && e58.set("activeIndex", t48);
  }, [e58]), c40 = nc(m25, { enabled: !B17, listRef: e58.context.itemDomElements, activeIndex: d31, nested: o62.type !== void 0, loopFocus: re8, orientation: se12, parentOrientation: o62.type === "menubar" ? o62.context.orientation : void 0, rtl: ge10 === "rtl", disabledIndices: t5, onNavigate: Re8, openOnArrowKeyDown: o62.type !== "context-menu", externalTree: V12 ? g20 : void 0, focusItemOnHover: ce8 }), ye9 = n48.useCallback((t48) => {
    e58.context.typingRef.current = t48;
  }, [e58]), P17 = sc(m25, { listRef: e58.context.itemLabels, elementsRef: e58.context.itemDomElements, activeIndex: d31, resetMs: E9, onMatch: (t48) => {
    i38 && t48 !== d31 && e58.set("activeIndex", t48);
  }, onTyping: ye9 }), Ce7 = n48.useMemo(() => {
    let t48 = d2(P17.reference, c40.reference, p31.reference, { onMouseMove() {
      e58.set("allowMouseEnter", true);
    } }, x21);
    return t48["aria-haspopup"] = "menu", t48["aria-expanded"] = i38, t48;
  }, [e58, P17.reference, c40.reference, p31.reference, x21, i38]), xe9 = n48.useMemo(() => {
    let t48 = d2(c40.trigger, p31.trigger, x21);
    return t48["aria-haspopup"] = "menu", t48["aria-expanded"] = false, t48;
  }, [c40.trigger, p31.trigger, x21]), Pe6 = n48.useMemo(() => d2(le2, { id: h24, role: "menu", "aria-labelledby": y24?.id, onMouseMove() {
    e58.set("allowMouseEnter", true), o62.type === "menu" && e58.set("hoverEnabled", false);
  }, onClick() {
    e58.select("hoverEnabled") && e58.set("hoverEnabled", false);
  }, onKeyDown(t48) {
    let r49 = e58.select("keyboardEventRelay");
    r49 && !t48.isPropagationStopped() && r49(t48);
  } }, P17.floating, c40.floating, p31.floating), [y24, h24, o62.type, e58, P17.floating, c40.floating, p31.floating]), Ie7 = c40.item ?? o7;
  ae3(e58, { floatingRootContext: m25, activeTriggerProps: Ce7, inactiveTriggerProps: xe9, popupProps: Pe6, itemProps: Ie7 });
  let ve9 = n48.useMemo(() => ({ store: e58, parent: b14 }), [e58, b14]), J18 = Z9(r35.Provider, { value: ve9, children: typeof v17 == "function" ? v17({ payload: de8 }) : v17 });
  return o62.type === void 0 || o62.type === "context-menu" ? Z9(I10, { externalTree: g20, children: J18 }) : J18;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/submenu-root/MenuSubmenuRoot.mjs
import * as t35 from "react";
import { jsx as e45 } from "react/jsx-runtime";
function a26(n61) {
  let o62 = u27().store, r49 = t35.useMemo(() => ({ parentMenu: o62 }), [o62]);
  return e45(t34.Provider, { value: r49, children: e45(xt, { ...n61 }) });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/menu.mjs
import * as n50 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/item/useCompositeItem.mjs
import * as o51 from "react";
function I18(m25 = {}) {
  let { highlightItemOnHover: i38, highlightedIndex: c40, onHighlightedIndexChange: n61 } = r8(), { ref: u37, index: e58 } = N2(m25), s54 = c40 === e58, r49 = o51.useRef(null), d31 = d(u37, r49);
  return { compositeProps: o51.useMemo(() => ({ tabIndex: s54 ? 0 : -1, onFocus() {
    n61(e58);
  }, onMouseMove() {
    let t48 = r49.current;
    if (!i38 || !t48) return;
    let f35 = t48.hasAttribute("disabled") || t48.ariaDisabled === "true";
    !s54 && !f35 && t48.focus();
  } }), [s54, n61, e58, i38]), compositeRef: d31, index: e58 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/item/CompositeItem.mjs
function P10(e58) {
  let { render: d31, className: E30, style: R27, state: o62 = o7, props: s54 = t5, refs: r49 = t5, metadata: m25, stateAttributesMapping: p31, tag: i38 = "div", ...a38 } = e58, { compositeProps: n61, compositeRef: f35 } = I18({ metadata: m25 });
  return J(i38, e58, { state: o62, ref: [...r49, f35], props: [n61, ...s54, a38], stateAttributesMapping: p31 });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/utils/findRootOwnerId.mjs
function n49(t48) {
  if (g4(t48) && t48.hasAttribute("data-rootownerid")) return t48.getAttribute("data-rootownerid") ?? void 0;
  if (!N3(t48)) return n49(f7(t48));
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/popups/useTriggerFocusGuards.mjs
import * as s42 from "react";
import * as a27 from "react-dom";
function d27(r49, l19) {
  let c40 = s42.useRef(null);
  function f35(t48) {
    a27.flushSync(() => {
      r49.setOpen(false, u4(s4.focusOut, t48.nativeEvent, t48.currentTarget));
    }), H2(c40.current)?.focus();
  }
  function i38(t48) {
    let n61 = r49.select("positionerElement");
    if (n61 && W4(t48, n61)) r49.context.beforeContentFocusGuardRef.current?.focus();
    else {
      a27.flushSync(() => {
        r49.setOpen(false, u4(s4.focusOut, t48.nativeEvent, t48.currentTarget));
      });
      let e58 = B4(r49.context.triggerFocusTargetRef.current || l19.current);
      for (; e58 !== null && u9(n61, e58); ) {
        let b14 = e58;
        if (e58 = V(e58), e58 === b14) break;
      }
      e58?.focus();
    }
  }
  return { preFocusGuardRef: c40, handlePreFocusGuardFocus: f35, handleFocusTargetFocus: i38 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/menu.mjs
import * as w15 from "react";
import { jsx as x16, jsxs as Ze3 } from "react/jsx-runtime";
import * as Z10 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/usePopupViewport.mjs
import * as s44 from "react";
import * as Y8 from "react-dom";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/usePreviousValue.mjs
import * as r41 from "react";
function s43(e58) {
  let [t48, u37] = r41.useState({ current: e58, previous: null });
  return e58 !== t48.current && u37({ current: e58, previous: t48.current }), t48.previous;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/usePopupViewport.mjs
import * as C12 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/getCssDimensions.mjs
function g17(t48) {
  let i38 = b3(t48), o62 = parseFloat(i38.width) || 0, s54 = parseFloat(i38.height) || 0, f35 = g4(t48), e58 = f35 ? t48.offsetWidth : o62, h24 = f35 ? t48.offsetHeight : s54;
  return (j3(o62) !== e58 || j3(s54) !== h24) && (o62 = e58, s54 = h24), { width: o62, height: s54 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/direction-provider.mjs
import * as o52 from "react";
import { jsx as c34 } from "react/jsx-runtime";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/usePopupViewport.mjs
import { jsx as I19, jsxs as ae7 } from "react/jsx-runtime";
var ne5 = () => true;
function U6(t48) {
  let { popupElement: e58, positionerElement: n61, content: r49, mounted: i38, enabled: f35 = ne5, onMeasureLayout: u37, onMeasureLayoutComplete: L20, side: a38, direction: R27 } = t48, g20 = y7(e58, true, false), m25 = R2(), v17 = C12.useRef(null), h24 = C12.useRef(null), x21 = C12.useRef(true), c40 = C12.useRef(e5), y24 = E(u37), P17 = E(L20), F14 = C12.useMemo(() => {
    let l19 = a38 === "top", o62 = a38 === "left";
    return R27 === "rtl" ? (l19 = l19 || a38 === "inline-end", o62 = o62 || a38 === "inline-end") : (l19 = l19 || a38 === "inline-start", o62 = o62 || a38 === "inline-start"), l19 ? { position: "absolute", [a38 === "top" ? "bottom" : "top"]: "0", [o62 ? "right" : "left"]: "0" } : o7;
  }, [a38, R27]);
  o2(() => {
    if (!i38 || !f35() || typeof ResizeObserver != "function") {
      c40.current = e5, x21.current = true, v17.current = null, h24.current = null;
      return;
    }
    if (!e58 || !n61) return;
    c40.current = H10(e58, F14);
    let l19 = new ResizeObserver((S18) => {
      let M20 = S18[0];
      M20 && (h24.current = { width: Math.ceil(M20.borderBoxSize[0].inlineSize), height: Math.ceil(M20.borderBoxSize[0].blockSize) });
    });
    l19.observe(e58), z8(e58, "auto");
    let o62 = B11(e58, "position", "static"), w22 = B11(e58, "transform", "none"), $9 = B11(e58, "scale", "1"), N20 = H10(n61, { "--available-width": "max-content", "--available-height": "max-content" });
    function D14() {
      o62(), w22(), N20();
    }
    function b14() {
      D14(), $9();
    }
    if (y24?.(), x21.current || v17.current === null) {
      O10(n61, "max-content");
      let S18 = g17(e58);
      return v17.current = S18, O10(n61, S18), b14(), P17?.(null, S18), x21.current = false, () => {
        l19.disconnect(), c40.current(), c40.current = e5;
      };
    }
    z8(e58, "auto"), O10(n61, "max-content");
    let A17 = v17.current ?? h24.current, d31 = g17(e58);
    if (v17.current = d31, !A17) return O10(n61, d31), b14(), P17?.(null, d31), () => {
      l19.disconnect(), m25.cancel(), c40.current(), c40.current = e5;
    };
    z8(e58, A17), b14(), P17?.(A17, d31), O10(n61, d31);
    let V12 = new AbortController();
    return m25.request(() => {
      z8(e58, d31), g20(() => {
        e58.style.setProperty("--popup-width", "auto"), e58.style.setProperty("--popup-height", "auto");
      }, V12.signal);
    }), () => {
      l19.disconnect(), V12.abort(), m25.cancel(), c40.current(), c40.current = e5;
    };
  }, [r49, e58, n61, g20, m25, f35, i38, y24, P17, F14]);
}
function B11(t48, e58, n61) {
  let r49 = t48.style.getPropertyValue(e58);
  return t48.style.setProperty(e58, n61), () => {
    t48.style.setProperty(e58, r49);
  };
}
function H10(t48, e58) {
  let n61 = [];
  for (let [r49, i38] of Object.entries(e58)) n61.push(B11(t48, r49, i38));
  return n61.length ? () => {
    n61.forEach((r49) => r49());
  } : e5;
}
function z8(t48, e58) {
  let n61 = e58 === "auto" ? "auto" : `${e58.width}px`, r49 = e58 === "auto" ? "auto" : `${e58.height}px`;
  t48.style.setProperty("--popup-width", n61), t48.style.setProperty("--popup-height", r49);
}
function O10(t48, e58) {
  let n61 = e58 === "max-content" ? "max-content" : `${e58.width}px`, r49 = e58 === "max-content" ? "max-content" : `${e58.height}px`;
  t48.style.setProperty("--positioner-width", n61), t48.style.setProperty("--positioner-height", r49);
}
function De2(t48) {
  let { store: e58, side: n61, cssVars: r49, children: i38 } = t48, f35 = o4(), u37 = e58.useState("activeTriggerElement"), L20 = e58.useState("activeTriggerId"), a38 = e58.useState("open"), R27 = e58.useState("payload"), g20 = e58.useState("mounted"), m25 = e58.useState("popupElement"), v17 = e58.useState("positionerElement"), h24 = s43(a38 ? u37 : null), x21 = fe3(L20, R27), c40 = s44.useRef(null), [y24, P17] = s44.useState(null), [F14, l19] = s44.useState(null), o62 = s44.useRef(null), w22 = s44.useRef(null), $9 = y7(o62, true, false), N20 = R2(), [D14, b14] = s44.useState(null), [A17, d31] = s44.useState(false);
  o2(() => (e58.set("hasViewport", true), () => {
    e58.set("hasViewport", false);
  }), [e58]);
  let V12 = E(() => {
    o62.current?.style.setProperty("animation", "none"), o62.current?.style.setProperty("transition", "none"), w22.current?.style.setProperty("display", "none");
  }), S18 = E((p31) => {
    o62.current?.style.removeProperty("animation"), o62.current?.style.removeProperty("transition"), w22.current?.style.removeProperty("display"), p31 && b14(p31);
  }), M20 = s44.useRef(null);
  o2(() => {
    if (u37 && h24 && u37 !== h24 && M20.current !== u37 && c40.current) {
      P17(c40.current), d31(true);
      let p31 = pe6(h24, u37);
      l19(p31), N20.request(() => {
        Y8.flushSync(() => {
          d31(false);
        }), $9(() => {
          P17(null), b14(null), c40.current = null;
        });
      }), M20.current = u37;
    }
  }, [u37, h24, y24, $9, N20]), o2(() => {
    let p31 = o62.current;
    if (!p31) return;
    let K14 = n13(p31).createElement("div");
    for (let Q16 of Array.from(p31.childNodes)) K14.appendChild(Q16.cloneNode(true));
    c40.current = K14;
  });
  let k17 = y24 != null, j17;
  k17 ? j17 = ae7(s44.Fragment, { children: [I19("div", { "data-previous": true, inert: s22(true), ref: w22, style: { ...D14 ? { [r49.popupWidth]: `${D14.width}px`, [r49.popupHeight]: `${D14.height}px` } : null, position: "absolute" }, "data-ending-style": A17 ? void 0 : "" }, "previous"), I19("div", { "data-current": true, ref: o62, "data-starting-style": A17 ? "" : void 0, children: i38 }, x21)] }) : j17 = I19("div", { "data-current": true, ref: o62, children: i38 }, x21), o2(() => {
    let p31 = w22.current;
    !p31 || !y24 || p31.replaceChildren(...Array.from(y24.childNodes));
  }, [y24]), U6({ popupElement: m25, positionerElement: v17, mounted: g20, content: R27, onMeasureLayout: V12, onMeasureLayoutComplete: S18, side: n61, direction: f35 });
  let G18 = { activationDirection: le4(F14), transitioning: k17 };
  return { children: j17, state: G18 };
}
function le4(t48) {
  if (t48) return `${J9(t48.horizontal, 5, "right", "left")} ${J9(t48.vertical, 5, "down", "up")}`;
}
function J9(t48, e58, n61, r49) {
  return t48 > e58 ? n61 : t48 < -e58 ? r49 : "";
}
function pe6(t48, e58) {
  let n61 = t48.getBoundingClientRect(), r49 = e58.getBoundingClientRect(), i38 = { x: n61.left + n61.width / 2, y: n61.top + n61.height / 2 }, f35 = { x: r49.left + r49.width / 2, y: r49.top + r49.height / 2 };
  return { horizontal: f35.x - i38.x, vertical: f35.y - i38.y };
}
function fe3(t48, e58) {
  let [n61, r49] = s44.useState(0), i38 = s44.useRef(t48), f35 = s44.useRef(e58), u37 = s44.useRef(false);
  return o2(() => {
    let L20 = i38.current, a38 = f35.current, R27 = t48 !== L20, g20 = e58 !== a38;
    R27 ? (r49((m25) => m25 + 1), u37.current = !g20) : u37.current && g20 && (r49((m25) => m25 + 1), u37.current = false), i38.current = t48, f35.current = e58;
  }, [t48, e58]), `${t48 ?? "current"}-${n61}`;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/menu/submenu-trigger/MenuSubmenuTrigger.mjs
import * as t36 from "react";
var ye3 = t36.forwardRef(function(l19, M20) {
  let { render: Z17, className: ee7, style: te7, label: oe10, id: E30, nativeButton: T17 = false, openOnHover: c40 = true, delay: m25 = 100, closeDelay: s54 = 0, disabled: v17 = false, ...I26 } = l19, i38 = N2(), x21 = s37(), { store: e58 } = u27(), r49 = r5(E30), g20 = e58.useState("open"), p31 = e58.useState("floatingRootContext"), P17 = e58.useState("floatingTreeRoot"), y24 = e58.useState("triggerPopupId", r49), d31 = J6(r49, e58), C18 = t36.useCallback((n61) => {
    let S18 = d31(n61);
    return n61 !== null && e58.select("open") && e58.select("activeTriggerId") == null && e58.update({ activeTriggerId: r49, activeTriggerElement: n61, closeDelay: s54 }), S18;
  }, [d31, s54, e58, r49]), f35 = t36.useRef(null), h24 = t36.useCallback((n61) => {
    f35.current = n61, e58.set("activeTriggerElement", n61);
  }, [e58]), b14 = n47();
  if (!b14?.parentMenu) throw new Error(f2(37));
  e58.useSyncedValue("closeDelay", s54);
  let o62 = b14.parentMenu, w22 = o62.useState("itemProps"), a38 = o62.useState("isActive", i38.index), k17 = t36.useMemo(() => ({ type: "submenu-trigger", setActive() {
    o62.set("activeIndex", i38.index);
  } }), [o62, i38.index]), O14 = e58.useState("disabled"), u37 = v17 || O14, { getItemProps: D14, itemRef: N20 } = E20({ closeOnClick: false, disabled: u37, highlighted: a38, id: r49, store: e58, typingRef: o62.context.typingRef, nativeButton: T17, itemMetadata: k17, nodeId: x21?.context.nodeId }), B17 = e58.useState("hoverEnabled"), _19 = o62.useState("allowMouseEnter"), A17 = Ns(p31, { enabled: B17 && c40 && !u37, handleClose: mc({ blockPointerEvents: true }), mouseOnly: true, move: true, restMs: m25, delay: _19 ? { open: m25, close: s54 } : 0, triggerElementRef: f35, externalTree: P17, isClosing: () => e58.select("transitionStatus") === "ending" }), V12 = Mo(p31, { enabled: !u37, event: "mousedown", toggle: !c40, ignoreMouse: c40, stickIfOpen: false }).reference ?? o7, R27 = e58.useState("triggerProps", true);
  return delete R27.id, J("div", l19, { state: { disabled: u37, highlighted: a38, open: g20 }, stateAttributesMapping: c19, props: [V12, A17, R27, w22, { "aria-controls": y24, tabIndex: g20 || a38 ? 0 : -1, onBlur() {
    a38 && o62.set("activeIndex", null);
  } }, I26, D14], ref: [M20, i38.ref, N20, C18, h24] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/menu.mjs
var Ce2 = Object.defineProperty;
var we3 = (t48, e58) => {
  for (var o62 in e58) Ce2(t48, o62, { get: e58[o62], enumerable: true });
};
var re5 = {};
we3(re5, { Arrow: () => S13, Backdrop: () => h18, CheckboxItem: () => ne4, CheckboxItemIndicator: () => E21, Group: () => R21, GroupLabel: () => R22, Handle: () => M11, Item: () => k11, LinkItem: () => F9, Popup: () => pe5, Portal: () => R23, Positioner: () => Ge2, RadioGroup: () => w13, RadioItem: () => ie3, RadioItemIndicator: () => x15, Root: () => xt, Separator: () => d25, SubmenuRoot: () => a26, SubmenuTrigger: () => ye3, Trigger: () => z9, Viewport: () => ee3, createHandle: () => oe6 });
function Y9(t48) {
  let { enabled: e58 = true, mouseDownAction: o62, open: a38 } = t48, s54 = w15.useRef(false);
  return w15.useMemo(() => e58 ? { onMouseDown: (f35) => {
    (o62 === "open" && !a38 || o62 === "close" && a38) && (s54.current = true, n13(f35.currentTarget).addEventListener("click", () => {
      s54.current = false;
    }, { once: true }));
  }, onClick: (f35) => {
    s54.current && (s54.current = false, f35.preventBaseUIHandler());
  } } : o7, [e58, o62, a38]);
}
var E22 = 2;
var z9 = N12(function(e58, o62) {
  let { render: a38, className: s54, style: f35, disabled: O14 = false, nativeButton: v17 = true, id: R27, openOnHover: y24, delay: P17 = 100, closeDelay: T17 = 0, handle: b14, payload: S18, ...ne12 } = e58, se12 = u27(true), r49 = b14?.store ?? se12?.store;
  if (!r49) throw new Error(f2(85));
  let u37 = r5(R27), ie10 = r49.useState("isTriggerActive", u37), k17 = r49.useState("floatingRootContext"), c40 = r49.useState("isOpenedByTrigger", u37), ae11 = r49.useState("triggerPopupId", u37), h24 = n50.useRef(null), i38 = tt4(), ue7 = r8(true), D14 = f18(), I26 = n50.useMemo(() => D14 ?? new s16(), [D14]), ce8 = T5(I26), pe9 = d15(), { registerTrigger: me7, isMountedByThisTrigger: H16 } = se4(u37, h24, r49, { payload: S18, closeDelay: T17, parent: i38, floatingTreeRoot: I26, floatingNodeId: ce8, floatingParentNodeId: pe9, keyboardEventRelay: ue7?.relayKeyboardEvent }), p31 = i38.type === "menubar", fe7 = r49.useState("disabled"), g20 = O14 || fe7 || p31 && i38.context.disabled, { getButtonProps: le9, buttonRef: de8 } = Q({ disabled: g20, native: v17 });
  n50.useEffect(() => {
    !c40 && i38.type === void 0 && (r49.context.allowMouseUpTriggerRef.current = false);
  }, [r49, c40, i38.type]);
  let l19 = n50.useRef(null), B17 = p12(), F14 = E((m25) => {
    if (!l19.current) return;
    B17.clear(), r49.context.allowMouseUpTriggerRef.current = false;
    let d31 = m25.target;
    if (u9(l19.current, d31) || u9(r49.select("positionerElement"), d31) || d31 === l19.current || d31 != null && n49(d31) === r49.select("rootId")) return;
    let C18 = m13(l19.current);
    m25.clientX >= C18.left - E22 && m25.clientX <= C18.right + E22 && m25.clientY >= C18.top - E22 && m25.clientY <= C18.bottom + E22 || I26.events.emit("close", { domEvent: m25, reason: s4.cancelOpen });
  });
  n50.useEffect(() => {
    c40 && r49.select("lastOpenChangeReason") === s4.triggerHover && n13(l19.current).addEventListener("mouseup", F14, { once: true });
  }, [c40, F14, r49]);
  let N20 = p31 && i38.context.hasSubmenuOpen, ge10 = Ns(k17, { enabled: (y24 ?? N20) && !g20 && i38.type !== "context-menu" && (!p31 || N20 && !H16), handleClose: mc({ blockPointerEvents: !p31 }), mouseOnly: true, move: false, restMs: i38.type === void 0 ? P17 : void 0, delay: { close: T17 }, triggerElementRef: h24, externalTree: I26, isActiveTrigger: ie10, isClosing: () => r49.select("transitionStatus") === "ending" }), xe9 = et2(c40, r49.select("lastOpenChangeReason")), A17 = Mo(k17, { enabled: !g20 && i38.type !== "context-menu", event: c40 && p31 ? "click" : "mousedown", toggle: true, ignoreMouse: false, stickIfOpen: i38.type === void 0 ? xe9 : false }), _19 = Rs(k17, { enabled: !g20 && N20 }), Me10 = Y9({ open: c40, enabled: p31, mouseDownAction: "open" }), Re8 = n50.useMemo(() => d2(_19.reference, A17.reference), [_19.reference, A17.reference]), Te7 = r49.useState("triggerProps", H16), { preFocusGuardRef: be8, handlePreFocusGuardFocus: he6, handleFocusTargetFocus: Ie7 } = d27(r49, h24), V12 = { disabled: g20, open: c40 }, U11 = [l19, o62, de8, me7, h24], G18 = [Re8, ge10 ?? o7, Te7, { "aria-haspopup": "menu", "aria-controls": ae11, id: u37, onMouseDown: (m25) => {
    if (r49.select("open")) return;
    B17.start(200, () => {
      r49.context.allowMouseUpTriggerRef.current = true;
    }), n13(m25.currentTarget).addEventListener("mouseup", F14, { once: true });
  } }, p31 ? { role: "menuitem" } : {}, Me10, ne12, le9], L20 = J("button", e58, { enabled: !p31, stateAttributesMapping: a19, state: V12, ref: U11, props: G18 });
  return p31 ? x16(P10, { tag: "button", render: a38, className: s54, style: f35, state: V12, refs: U11, props: G18, stateAttributesMapping: a19 }) : c40 ? Ze3(n50.Fragment, { children: [x16(R8, { ref: be8, onFocus: he6 }, `${u37}-pre-focus-guard`), x16(n50.Fragment, { children: L20 }, u37), x16(R8, { ref: r49.context.triggerFocusTargetRef, onFocus: Ie7 }, `${u37}-post-focus-guard`)] }) : x16(n50.Fragment, { children: L20 }, u37);
});
function et2(t48, e58) {
  let o62 = p12(), [a38, s54] = n50.useState(false);
  return o2(() => {
    t48 && e58 === "trigger-hover" ? (s54(true), o62.start(e10, () => {
      s54(false);
    })) : t48 || (o62.clear(), s54(false));
  }, [t48, e58, o62]), a38;
}
function tt4() {
  let t48 = u26(true), e58 = u27(true), o62 = s41(true);
  return n50.useMemo(() => o62 ? { type: "menubar", context: o62 } : t48 && !e58 ? { type: "context-menu", context: t48 } : { type: void 0 }, [t48, e58, o62]);
}
var Q9 = function(t48) {
  return t48.popupWidth = "--popup-width", t48.popupHeight = "--popup-height", t48;
}({});
var it2 = { activationDirection: (t48) => t48 ? { "data-activation-direction": t48 } : null };
var ee3 = Z10.forwardRef(function(e58, o62) {
  let { render: a38, className: s54, style: f35, children: O14, ...v17 } = e58, { store: R27 } = u27(), { side: y24 } = s37(), P17 = R27.useState("instantType"), { children: T17, state: b14 } = De2({ store: R27, side: y24, cssVars: Q9, children: O14 }), S18 = { activationDirection: b14.activationDirection, transitioning: b14.transitioning, instant: P17 };
  return J("div", e58, { state: S18, ref: o62, props: [v17, { children: T17 }], stateAttributesMapping: it2 });
});
var M11 = class {
  constructor() {
    this.store = new c33();
  }
  open(e58) {
    let o62 = e58 ? this.store.context.triggerElements.getById(e58) : void 0;
    if (e58 && !o62) throw new Error(f2(83, e58));
    this.store.setOpen(true, u4("imperative-action", void 0, o62));
  }
  close() {
    this.store.setOpen(false, u4("imperative-action", void 0, void 0));
  }
  get isOpen() {
    return this.store.select("open");
  }
};
function oe6() {
  return new M11();
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/context-menu.mjs
import { jsx as I20 } from "react/jsx-runtime";
import * as s45 from "react";
var F10 = Object.defineProperty;
var H11 = (m25, u37) => {
  for (var a38 in u37) F10(m25, a38, { get: u37[a38], enumerable: true });
};
var X4 = {};
H11(X4, { Arrow: () => S13, Backdrop: () => h18, CheckboxItem: () => ne4, CheckboxItemIndicator: () => E21, Group: () => R21, GroupLabel: () => R22, Item: () => k11, LinkItem: () => F9, Popup: () => pe5, Portal: () => R23, Positioner: () => Ge2, RadioGroup: () => w13, RadioItem: () => ie3, RadioItemIndicator: () => x15, Root: () => D11, Separator: () => d25, SubmenuRoot: () => a26, SubmenuTrigger: () => ye3, Trigger: () => Y10 });
function D11(m25) {
  let [u37, a38] = r42.useState({ getBoundingClientRect() {
    return DOMRect.fromRect({ width: 0, height: 0, x: 0, y: 0 });
  } }), b14 = r42.useRef(null), P17 = r42.useRef(null), S18 = r42.useRef(null), M20 = r42.useRef(null), C18 = r42.useRef(true), l19 = r42.useRef(null), i38 = I3(), p31 = r42.useMemo(() => ({ anchor: u37, setAnchor: a38, actionsRef: S18, backdropRef: b14, internalBackdropRef: P17, positionerRef: M20, allowMouseUpTriggerRef: C18, initialCursorPointRef: l19, rootId: i38 }), [u37, i38]);
  return I20(r34.Provider, { value: p31, children: I20(r35.Provider, { value: void 0, children: I20(re5.Root, { ...m25 }) }) });
}
var U7 = 500;
var Y10 = s45.forwardRef(function(u37, a38) {
  let { render: b14, className: P17, style: S18, ...M20 } = u37, { setAnchor: C18, actionsRef: l19, internalBackdropRef: i38, backdropRef: p31, positionerRef: _19, allowMouseUpTriggerRef: T17, initialCursorPointRef: j17, rootId: E30 } = u26(false), { store: k17 } = u27(false), V12 = k17.useState("open"), R27 = k17.useState("disabled"), d31 = s45.useRef(null), c40 = s45.useRef(null), x21 = p12(), w22 = p12(), g20 = s45.useRef(false);
  function O14(e58, t48, o62) {
    let n61 = o62.type.startsWith("touch");
    j17.current = { x: e58, y: t48 }, C18({ getBoundingClientRect() {
      return DOMRect.fromRect({ width: n61 ? 10 : 0, height: n61 ? 10 : 0, x: e58, y: t48 });
    } }), g20.current = false, l19.current?.setOpen(true, u4(s4.triggerPress, o62)), w22.start(U7, () => {
      g20.current = true;
    });
  }
  function W14(e58) {
    if (R27) return;
    T17.current = true, p7(e58), O14(e58.clientX, e58.clientY, e58.nativeEvent);
    let t48 = n13(d31.current);
    t11(t48, "mouseup", (o62) => {
      if (T17.current = false, !g20.current) return;
      w22.clear(), g20.current = false;
      let n61 = f10(o62);
      u9(_19.current, n61) || E30 && n61 && n49(n61) === E30 || l19.current?.setOpen(false, u4(s4.cancelOpen, o62));
    }, { once: true });
  }
  function q15(e58) {
    if (!R27 && (T17.current = false, e58.touches.length === 1)) {
      e58.stopPropagation();
      let t48 = e58.touches[0];
      c40.current = { x: t48.clientX, y: t48.clientY }, x21.start(U7, () => {
        c40.current && O14(c40.current.x, c40.current.y, e58.nativeEvent);
      });
    }
  }
  function z17(e58) {
    if (x21.isStarted() && c40.current && e58.touches.length === 1) {
      let t48 = e58.touches[0], o62 = 10, n61 = Math.abs(t48.clientX - c40.current.x), f35 = Math.abs(t48.clientY - c40.current.y);
      (n61 > o62 || f35 > o62) && x21.clear();
    }
  }
  function v17() {
    x21.clear(), c40.current = null;
  }
  return s45.useEffect(() => {
    function e58(o62) {
      if (R27) return;
      let f35 = f10(o62);
      (u9(d31.current, f35) || u9(i38.current, f35) || u9(p31.current, f35)) && o62.preventDefault();
    }
    let t48 = n13(d31.current);
    return t11(t48, "contextmenu", e58);
  }, [p31, R27, i38]), J("div", u37, { state: { open: V12 }, ref: [d31, a38], props: [{ onContextMenu: W14, onTouchStart: q15, onTouchMove: z17, onTouchEnd: v17, onTouchCancel: v17, style: { WebkitTouchCallout: "none" } }, M20], stateAttributesMapping: a19 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/csp-provider.mjs
import * as o54 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/csp-context/CSPContext.mjs
import * as e46 from "react";
var t37 = e46.createContext(void 0);
var n51 = { disableStyleElements: false };
function o53() {
  return e46.useContext(t37) ?? n51;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/csp-provider.mjs
import { jsx as s46 } from "react/jsx-runtime";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/dialog.mjs
import * as a28 from "react";
var l17 = Object.defineProperty;
var p26 = (r49, o62) => {
  for (var e58 in o62) l17(r49, e58, { get: o62[e58], enumerable: true });
};
var i36 = {};
p26(i36, { Backdrop: () => x9, Close: () => k9, Description: () => R12, Handle: () => n22, Popup: () => ae4, Portal: () => N9, Root: () => t38, Title: () => R13, Trigger: () => W10, Viewport: () => H7, createHandle: () => p17 });
function t38(r49) {
  let o62 = a28.useContext(s20) ? "drawer" : "dialog";
  return ge4(r49, o62);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/drawer.mjs
import * as Dt3 from "react";
import * as vt2 from "react";
import * as et3 from "react";
import * as Ze4 from "react";
import * as Nt from "react";
import * as Te2 from "react";
import * as rt3 from "react";
import * as Ye3 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/clamp.mjs
function t39(E30, m25 = Number.MIN_SAFE_INTEGER, r49 = Number.MAX_SAFE_INTEGER) {
  return Math.max(m25, Math.min(E30, r49));
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/drawer.mjs
import * as ot2 from "react";
import { jsx as nn } from "react/jsx-runtime";
import * as Xe4 from "react";
import { jsx as cn } from "react/jsx-runtime";
import * as G11 from "react";
import { jsx as Ge3, jsxs as Bt2 } from "react/jsx-runtime";
import * as ne6 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useSwipeDismiss.mjs
import * as r43 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/scrollable.mjs
function n52(r49, t48) {
  let o62 = b3(r49);
  if (t48 === "vertical") {
    let e58 = o62.overflowY;
    return (e58 === "auto" || e58 === "scroll") && r49.scrollHeight > r49.clientHeight;
  }
  let l19 = o62.overflowX;
  return (l19 === "auto" || l19 === "scroll") && r49.scrollWidth > r49.clientWidth;
}
function f30(r49, t48, o62) {
  let l19 = r49;
  for (; l19 && l19 !== t48; ) {
    for (let e58 of o62) if (n52(l19, e58)) return true;
    l19 = l19.parentElement;
  }
  return false;
}
function s47(r49, t48, o62 = "vertical") {
  let l19 = g4(r49) ? r49 : null;
  for (; l19 && l19 !== t48; ) {
    if (n52(l19, o62)) return l19;
    l19 = l19.parentElement;
  }
  return n52(t48, o62) ? t48 : null;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/getElementAtPoint.mjs
function o55(t48, e58, n61) {
  return typeof t48?.elementFromPoint == "function" ? t48.elementFromPoint(e58, n61) : null;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useSwipeDismiss.mjs
var xt2 = 40;
var Rt = 10;
var gt = 1;
var St2 = 50;
var je2 = 16;
var wt2 = 80;
var Dt2 = 'button,a,input,select,textarea,label,[role="button"]';
function Xe3(h24, g20, m25) {
  switch (h24) {
    case "up":
      return -m25;
    case "down":
      return m25;
    case "left":
      return -g20;
    case "right":
      return g20;
    default:
      return 0;
  }
}
function bt(h24) {
  let m25 = i10(h24).getComputedStyle(h24).transform, x21 = 0, y24 = 0, I26 = 1;
  if (m25 && m25 !== "none") {
    let de8 = m25.match(/matrix(?:3d)?\(([^)]+)\)/);
    if (de8) {
      let S18 = de8[1].split(", ").map(parseFloat);
      S18.length === 6 ? (x21 = S18[4], y24 = S18[5], I26 = Math.sqrt(S18[0] * S18[0] + S18[1] * S18[1])) : S18.length === 16 && (x21 = S18[12], y24 = S18[13], I26 = S18[0]);
    }
  }
  return { x: x21, y: y24, scale: I26 };
}
function Me2(h24) {
  return Number.isFinite(h24) && h24 > 0 ? h24 : null;
}
function Tt3(h24) {
  return h24 % 2 === 1;
}
function Ie3(h24, g20, m25) {
  let x21 = h24[m25];
  if (typeof x21 == "function") try {
    x21.call(h24, g20);
  } catch (y24) {
    if (y24 && typeof y24 == "object" && "name" in y24 && y24.name === "NotFoundError") return;
    throw y24;
  }
}
function Yt2(h24) {
  let { enabled: g20, directions: m25, elementRef: x21, movementCssVars: y24, canStart: I26, ignoreSelectorWhenTouch: de8 = true, ignoreScrollableAncestors: S18 = false, swipeThreshold: N20, onDismiss: Je9, onProgress: Ke10, onCancel: Qe7, onSwipeStart: Ze9, onRelease: et7, onSwipingChange: tt8, trackDrag: K14 = true } = h24, nt9 = Dt2, Q16 = m25.length === 1 ? m25[0] : void 0, U11 = Math.max(0, typeof N20 == "number" ? N20 : xt2), Z17 = m25.includes("left"), ee7 = m25.includes("right"), te7 = m25.includes("up"), ne12 = m25.includes("down"), M20 = Z17 || ee7, v17 = te7 || ne12, Oe5 = r43.useMemo(() => {
    let e58 = [];
    return v17 && e58.push("vertical"), M20 && e58.push("horizontal"), e58;
  }, [M20, v17]), [pe9, k17] = r43.useState(void 0), [B17, rt9] = r43.useState(false), [ct7, re8] = r43.useState(false), [ve9, _e7] = r43.useState(false), [ke8, W14] = r43.useState({ x: 0, y: 0 }), [Ae7, Ve7] = r43.useState({ x: 0, y: 0, scale: 1 }), [ce8, se12] = r43.useState(null), $9 = r43.useRef({ x: 0, y: 0 }), O14 = r43.useRef({ x: 0, y: 0 }), G18 = r43.useRef(null), D14 = r43.useRef({ x: 0, y: 0, scale: 1 }), A17 = r43.useRef(void 0), me7 = r43.useRef(0), oe10 = r43.useRef(false), w22 = r43.useRef({ x: 0, y: 0 }), ie10 = r43.useRef(false), he6 = r43.useRef(false), ye9 = r43.useRef(null), V12 = r43.useRef(false), q15 = r43.useRef(false), xe9 = r43.useRef({ width: 0, height: 0 }), Fe5 = r43.useRef(0), X11 = r43.useRef(U11), ae11 = r43.useRef(null), Re8 = r43.useRef(null), ge10 = r43.useRef({ x: 0, y: 0 }), Se8 = r43.useRef(null), le9 = r43.useRef(false), ue7 = E((e58) => {
    le9.current !== e58 && (le9.current = e58, rt9(e58), tt8?.(e58));
  });
  function He10(e58) {
    if (!e58) return;
    if (typeof N20 != "function") {
      X11.current = U11;
      return;
    }
    let t48 = x21.current;
    if (!t48) return;
    let n61 = N20({ element: t48, direction: e58 });
    X11.current = Math.max(0, n61);
  }
  let T17 = E((e58, t48) => {
    let n61 = Number.isFinite(e58) ? t39(e58, 0, 1) : 0, a38 = n61 !== Fe5.current, o62 = false;
    if (t48) {
      let c40 = Se8.current;
      o62 = !c40 || c40.deltaX !== t48.deltaX || c40.deltaY !== t48.deltaY || c40.direction !== t48.direction;
    }
    !a38 && !o62 || (Fe5.current = n61, t48 ? Se8.current = t48 : a38 && (Se8.current = null), Ke10?.(n61, t48));
  });
  function ze8(e58, t48) {
    if (t48 === null) return;
    let n61 = Re8.current;
    if (n61 && t48 > n61.time) {
      let a38 = Math.max(t48 - n61.time, je2);
      ge10.current = { x: (e58.x - n61.x) / a38, y: (e58.y - n61.y) / a38 };
    }
    Re8.current = { x: e58.x, y: e58.y, time: t48 };
  }
  let st7 = r43.useCallback(() => {
    k17(void 0), ue7(false), re8(false), _e7(false), W14({ x: 0, y: 0 }), Ve7({ x: 0, y: 0, scale: 1 }), se12(null), T17(0), X11.current = U11, $9.current = { x: 0, y: 0 }, O14.current = { x: 0, y: 0 }, D14.current = { x: 0, y: 0, scale: 1 }, A17.current = void 0, me7.current = 0, oe10.current = false, w22.current = { x: 0, y: 0 }, ie10.current = false, G18.current = null, he6.current = false, ye9.current = null, V12.current = false, q15.current = false, xe9.current = { width: 0, height: 0 }, ae11.current = null, Re8.current = null, ge10.current = { x: 0, y: 0 }, Se8.current = null;
  }, [ue7, U11, T17]);
  r43.useEffect(() => {
    typeof N20 != "function" && (X11.current = U11);
  }, [U11, N20]);
  function Ne7(e58) {
    if ("touches" in e58) {
      let t48 = e58.touches[0];
      return t48 ? { x: t48.clientX, y: t48.clientY } : null;
    }
    return { x: e58.clientX, y: e58.clientY };
  }
  function we7(e58) {
    return "touches" in e58 ? true : e58.pointerType === "touch";
  }
  function Ue11(e58, t48) {
    let n61 = n13(x21.current);
    return o55(n61, e58.x, e58.y) ?? f10(t48);
  }
  function Ce7(e58, t48) {
    return M20 && !v17 ? s47(e58, t48, "horizontal") : v17 && !M20 ? s47(e58, t48, "vertical") : s47(e58, t48, "vertical") ?? s47(e58, t48, "horizontal");
  }
  function Be6(e58, t48, n61) {
    V12.current = false;
    let a38 = we7(e58), o62 = Ue11(t48, e58.nativeEvent), l19 = n13(x21.current).body, p31 = a38 && l19 ? Ce7(o62, l19) : null, s54 = n61?.ignoreScrollableTarget ?? false;
    if (p31 && !s54 || (V12.current = !!(p31 && s54), (o62 ? o62.closest(nt9) : false) && (!a38 || de8))) return false;
    let u37 = x21.current;
    if (S18 && u37 && o62 && Oe5.length > 0 && !(n61?.ignoreScrollableAncestors ?? false) && f30(o62, u37, Oe5)) return false;
    if (oe10.current = false, A17.current = void 0, me7.current = 0, $9.current = t48, ae11.current = Me2(e58.timeStamp), w22.current = t48, G18.current = t48, u37) {
      xe9.current = { width: u37.offsetWidth, height: u37.offsetHeight }, He10(Q16);
      let f35 = bt(u37);
      D14.current = f35, O14.current = { x: f35.x, y: f35.y }, Ve7(f35), W14({ x: f35.x, y: f35.y }), ze8({ x: f35.x, y: f35.y }, ae11.current), "touches" in e58 || Ie3(u37, e58.pointerId, "setPointerCapture");
    }
    return Ze9?.(e58.nativeEvent), ue7(true), re8(false), se12(null), ie10.current = true, T17(0), true;
  }
  function De10() {
    be8(), V12.current = false, G18.current = null;
  }
  function be8() {
    he6.current = false, ye9.current = null;
  }
  function ot5(e58) {
    if (De10(), !le9.current) return;
    ue7(false), re8(false), se12(null);
    let t48 = K14 ? Ae7 : D14.current;
    O14.current = { x: t48.x, y: t48.y }, W14({ x: t48.x, y: t48.y }), k17(void 0), q15.current = false;
    let n61 = x21.current;
    n61 && Ie3(n61, e58.pointerId, "releasePointerCapture"), T17(0, { deltaX: 0, deltaY: 0, direction: void 0 }), Qe7?.(e58.nativeEvent);
  }
  function it8(e58, t48) {
    let n61 = (l19) => l19 >= 0 ? l19 ** 0.5 : -(Math.abs(l19) ** 0.5), a38 = (l19, p31, s54) => !p31 && l19 < 0 || !s54 && l19 > 0 ? n61(l19) : l19, o62 = M20 ? a38(e58, Z17, ee7) : n61(e58), c40 = v17 ? a38(t48, te7, ne12) : n61(t48);
    return { x: o62, y: c40 };
  }
  function at8(e58, t48, n61) {
    let a38 = Math.abs(t48), o62 = Math.abs(n61);
    if (v17 && n61 !== 0 && (!M20 || o62 >= a38)) {
      let p31 = Math.max(0, e58.scrollHeight - e58.clientHeight), s54 = e58.scrollTop <= 0, d31 = e58.scrollTop >= p31, u37 = n61 > 0, f35 = n61 < 0;
      return u37 && s54 && ne12 || f35 && d31 && te7;
    }
    if (M20 && t48 !== 0 && (!v17 || a38 > o62)) {
      let p31 = Math.max(0, e58.scrollWidth - e58.clientWidth), s54 = e58.scrollLeft <= 0, d31 = e58.scrollLeft >= p31, u37 = t48 > 0, f35 = t48 < 0;
      return u37 && s54 && ee7 || f35 && d31 && Z17;
    }
    return null;
  }
  let Te7 = E((e58) => {
    if (!g20 || e58.defaultPrevented || e58.nativeEvent.defaultPrevented || !("touches" in e58) && e58.button !== 0) return;
    let t48 = Ne7(e58);
    !t48 || (he6.current = true, ye9.current = t48, V12.current = false, q15.current = false, !(I26 ? I26(t48, { nativeEvent: e58.nativeEvent, direction: Q16 }) : true)) || Be6(e58, t48) && be8();
  });
  function lt8(e58, t48, n61) {
    if (!g20 || !le9.current) return;
    let a38 = f10(e58.nativeEvent);
    if (we7(e58) && !V12.current) {
      let b14 = e58.currentTarget;
      if (Ce7(a38, b14)) return;
    }
    if ("touches" in e58 || e58.preventDefault(), ie10.current) {
      $9.current = t48;
      let b14 = Me2(e58.timeStamp);
      b14 !== null && (ae11.current = b14), ie10.current = false;
    }
    let o62 = t48.x, c40 = t48.y, l19 = n61.x, p31 = n61.y;
    (p31 < 0 && c40 > w22.current.y || p31 > 0 && c40 < w22.current.y) && (w22.current = { x: w22.current.x, y: c40 }), (l19 < 0 && o62 > w22.current.x || l19 > 0 && o62 < w22.current.x) && (w22.current = { x: o62, y: w22.current.y });
    let s54 = o62 - $9.current.x, d31 = c40 - $9.current.y, u37 = c40 - w22.current.y, f35 = o62 - w22.current.x;
    if (!ct7 && Math.sqrt(s54 * s54 + d31 * d31) >= gt && (re8(true), ce8 === null && M20 && v17)) {
      let J18 = Math.abs(s54), Ye6 = Math.abs(d31);
      se12(J18 > Ye6 ? "horizontal" : "vertical");
    }
    let i38;
    if (!A17.current) ce8 === "vertical" ? d31 > 0 ? i38 = "down" : d31 < 0 && (i38 = "up") : ce8 === "horizontal" ? s54 > 0 ? i38 = "right" : s54 < 0 && (i38 = "left") : Math.abs(s54) >= Math.abs(d31) ? i38 = s54 > 0 ? "right" : "left" : i38 = d31 > 0 ? "down" : "up", i38 && (i38 === "left" && Z17 || i38 === "right" && ee7 || i38 === "up" && te7 || i38 === "down" && ne12) && (A17.current = i38, me7.current = Xe3(i38, s54, d31), k17(i38), He10(i38));
    else {
      let b14 = A17.current, J18 = Xe3(b14, f35, u37);
      J18 > X11.current ? (oe10.current = false, k17(b14)) : !(Z17 && ee7) && !(te7 && ne12) && me7.current - J18 >= Rt && (oe10.current = true);
    }
    let C18 = it8(s54, d31), E30 = D14.current.x, R27 = D14.current.y;
    ce8 === "horizontal" ? M20 && (E30 += C18.x) : (ce8 === "vertical" || M20 && (E30 += C18.x), v17 && (R27 += C18.y)), O14.current = { x: E30, y: R27 }, K14 && W14({ x: E30, y: R27 }), ze8({ x: E30, y: R27 }, Me2(e58.timeStamp));
    let _19 = E30 - D14.current.x, Y18 = R27 - D14.current.y, F14 = A17.current, H16 = Q16 ?? A17.current;
    if (!H16) {
      T17(0, { deltaX: _19, deltaY: Y18, direction: F14 });
      return;
    }
    let L20 = H16 === "left" || H16 === "right" ? xe9.current.width : xe9.current.height, P17 = D14.current.scale || 1;
    if (L20 <= 0 || P17 <= 0) {
      T17(0, { deltaX: _19, deltaY: Y18, direction: F14 });
      return;
    }
    let z17 = Xe3(H16, E30 - D14.current.x, R27 - D14.current.y);
    if (z17 <= 0) {
      T17(0, { deltaX: _19, deltaY: Y18, direction: F14 });
      return;
    }
    T17(z17 / (L20 * P17), { deltaX: _19, deltaY: Y18, direction: F14 });
  }
  let Ee7 = E((e58) => {
    let t48 = Ne7(e58);
    if (!t48) return;
    if (!("touches" in e58)) {
      let o62 = Tt3(e58.buttons);
      o62 && (q15.current = true);
      let c40 = e58.buttons === 0 && q15.current;
      if (e58.buttons !== 0 && !o62 || c40) {
        ot5(e58);
        return;
      }
    }
    if (!B17 && he6.current) {
      if (!we7(e58) && (e58.defaultPrevented || e58.nativeEvent.defaultPrevented)) {
        De10();
        return;
      }
      if (I26 ? I26(t48, { nativeEvent: e58.nativeEvent, direction: Q16 }) : true) {
        let c40 = ye9.current, l19 = false;
        if (we7(e58)) {
          let s54 = x21.current;
          if (c40 && s54) {
            let d31 = Ue11(t48, e58.nativeEvent), f35 = n13(s54).body, i38 = f35 ? Ce7(d31, f35) : null;
            if (i38 && (u9(s54, i38) || u9(i38, s54))) {
              let C18 = t48.x - c40.x, E30 = t48.y - c40.y, R27 = at8(i38, C18, E30);
              if (R27 === false) return;
              R27 === true && (l19 = true);
            }
          }
        }
        Be6(e58, t48, { ignoreScrollableTarget: l19, ignoreScrollableAncestors: l19 }) && (c40 && l19 ? (be8(), $9.current = c40, w22.current = c40, G18.current = c40, ie10.current = false) : (be8(), V12.current = false));
      }
    }
    let n61 = G18.current, a38 = n61 === null ? { x: 0, y: 0 } : { x: t48.x - n61.x, y: t48.y - n61.y };
    G18.current = t48, lt8(e58, t48, a38);
  }), j17 = E((e58) => {
    if (!g20) return;
    let t48 = O14.current, n61 = D14.current, a38 = t48.x - n61.x, o62 = t48.y - n61.y, c40 = { deltaX: a38, deltaY: o62, direction: pe9 ?? A17.current };
    if (!le9.current) {
      De10(), T17(0, c40);
      return;
    }
    ue7(false), re8(false), se12(null), De10(), q15.current = false;
    let l19 = x21.current;
    l19 && ("touches" in e58 || Ie3(l19, e58.pointerId, "releasePointerCapture"));
    let p31 = a38, s54 = o62, d31 = ae11.current, u37 = Me2(e58.timeStamp), f35 = d31 !== null && u37 !== null && u37 > d31 ? u37 - d31 : 0, i38 = f35 > 0 ? Math.max(f35, St2) : 0, C18 = i38 > 0 ? p31 / i38 : 0, E30 = i38 > 0 ? s54 / i38 : 0, R27 = ge10.current.x, _19 = ge10.current.y, Y18 = Re8.current;
    if (Y18 && u37 !== null && u37 >= Y18.time) {
      let z17 = u37 - Y18.time;
      if (z17 <= wt2) {
        let b14 = Math.max(z17, je2), J18 = t48.x - Y18.x, Ye6 = t48.y - Y18.y, We8 = J18 / b14, $e6 = Ye6 / b14;
        We8 !== 0 && (R27 = We8), $e6 !== 0 && (_19 = $e6);
      } else R27 = 0, _19 = 0;
    }
    let F14 = et7?.({ event: e58.nativeEvent, direction: pe9 ?? A17.current, deltaX: p31, deltaY: s54, velocityX: C18, velocityY: E30, releaseVelocityX: R27, releaseVelocityY: _19 }), H16 = typeof F14 == "boolean";
    if (oe10.current && !H16) {
      O14.current = { x: n61.x, y: n61.y }, W14({ x: n61.x, y: n61.y }), k17(void 0), T17(0, c40);
      return;
    }
    let L20 = false, P17;
    if (H16) L20 = F14, P17 = pe9 ?? A17.current ?? Q16;
    else for (let z17 of m25) {
      switch (z17) {
        case "right":
          p31 > X11.current && (L20 = true, P17 = "right");
          break;
        case "left":
          p31 < -X11.current && (L20 = true, P17 = "left");
          break;
        case "down":
          s54 > X11.current && (L20 = true, P17 = "down");
          break;
        case "up":
          s54 < -X11.current && (L20 = true, P17 = "up");
          break;
        default:
          break;
      }
      if (L20) break;
    }
    L20 && P17 ? (k17(P17), _e7(true), Je9?.(e58.nativeEvent, { direction: P17 })) : (O14.current = { x: n61.x, y: n61.y }, W14({ x: n61.x, y: n61.y }), k17(void 0), T17(0, c40));
  }), ut7 = r43.useCallback(() => {
    let e58 = K14 ? ke8 : O14.current, t48 = K14 ? Ae7 : D14.current;
    if (!B17 && e58.x === t48.x && e58.y === t48.y && !ve9) return { [y24.x]: "0px", [y24.y]: "0px" };
    let n61 = e58.x - t48.x, a38 = e58.y - t48.y;
    return { transition: B17 ? "none" : void 0, transform: B17 ? `translateX(${e58.x}px) translateY(${e58.y}px) scale(${t48.scale})` : void 0, [y24.x]: `${n61}px`, [y24.y]: `${a38}px` };
  }, [ve9, ke8, Ae7, B17, y24, K14]), ft9 = r43.useCallback(() => g20 ? { onPointerDown: Te7, onPointerMove: Ee7, onPointerUp: j17, onPointerCancel: j17 } : {}, [g20, j17, Ee7, Te7]), dt7 = r43.useCallback(() => g20 ? { onTouchStart: Te7, onTouchMove: Ee7, onTouchEnd: j17, onTouchCancel: j17 } : {}, [g20, j17, Ee7, Te7]);
  return { swiping: B17, swipeDirection: pe9, dragDismissed: ve9, getPointerProps: ft9, getTouchProps: dt7, getDragStyles: ut7, reset: st7 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/drawer.mjs
import * as I21 from "react";
import * as fr from "react-dom";
import { jsx as er } from "react/jsx-runtime";
var Er2 = Object.defineProperty;
var xr2 = (e58, t48) => {
  for (var o62 in t48) Er2(e58, o62, { get: t48[o62], enumerable: true });
};
var Rr = {};
xr2(Rr, { Backdrop: () => Et2, Close: () => xt3, Content: () => Ct2, Description: () => yt3, Handle: () => n22, Indent: () => bt2, IndentBackground: () => Ot, Popup: () => _t3, Portal: () => Ht, Provider: () => Vt2, Root: () => Xt2, SwipeArea: () => Gt, Title: () => qt2, Trigger: () => Jt2, Viewport: () => wr2, createHandle: () => p17 });
var P11 = function(e58) {
  return e58.nestedDrawers = "--nested-drawers", e58.height = "--drawer-height", e58.frontmostHeight = "--drawer-frontmost-height", e58.swipeMovementX = "--drawer-swipe-movement-x", e58.swipeMovementY = "--drawer-swipe-movement-y", e58.snapPointOffset = "--drawer-snap-point-offset", e58.swipeStrength = "--drawer-swipe-strength", e58;
}({});
var Y11 = function(e58) {
  return e58.swipeProgress = "--drawer-swipe-progress", e58;
}({});
var Nr = { ...g11, ...i7 };
var Et2 = Dt3.forwardRef(function(t48, o62) {
  let { render: u37, className: p31, style: w22, forceRender: d31 = false, ..._19 } = t48, { store: c40 } = i19(), n61 = c40.useState("open"), D14 = c40.useState("nested"), g20 = c40.useState("mounted"), y24 = c40.useState("transitionStatus");
  return J("div", t48, { state: { open: n61, transitionStatus: y24 }, ref: [c40.context.backdropRef, o62], stateAttributesMapping: Nr, props: [{ role: "presentation", hidden: !g20, style: { pointerEvents: n61 ? void 0 : "none", userSelect: "none", WebkitUserSelect: "none", [Y11.swipeProgress]: "0", [P11.swipeStrength]: "1" } }, _19], enabled: d31 || !D14 });
});
var xt3 = k9;
var Qe2 = "data-drawer-content";
var Ct2 = vt2.forwardRef(function(t48, o62) {
  let { render: u37, className: p31, style: w22, ...d31 } = t48;
  return i19(), J("div", t48, { ref: o62, props: [{ [Qe2]: "" }, d31] });
});
var yt3 = R12;
var pt2 = Ze4.createContext(void 0);
function ve3(e58) {
  let t48 = Ze4.useContext(pt2);
  if (e58 === false && t48 === void 0) throw new Error(f2(91));
  return t48;
}
var Fr2 = { active(e58) {
  return e58 ? { "data-active": "" } : { "data-inactive": "" };
} };
var bt2 = et3.forwardRef(function(t48, o62) {
  let { render: u37, className: p31, style: w22, ...d31 } = t48, _19 = ve3(true), c40 = _19?.active ?? false, n61 = _19?.visualStateStore, D14 = et3.useRef(null);
  return o2(() => {
    let y24 = D14.current;
    if (!y24 || !n61) return;
    let b14 = () => {
      let { swipeProgress: h24, frontmostHeight: N20 } = n61.getSnapshot();
      h24 <= 0 ? y24.style.setProperty(Y11.swipeProgress, "0") : y24.style.setProperty(Y11.swipeProgress, `${h24}`), N20 <= 0 ? y24.style.removeProperty(P11.height) : y24.style.setProperty(P11.height, `${N20}px`);
    };
    b14();
    let E30 = n61.subscribe(b14);
    return () => {
      E30(), y24.style.setProperty(Y11.swipeProgress, "0"), y24.style.removeProperty(P11.height);
    };
  }, [n61]), J("div", t48, { ref: [o62, D14], state: { active: c40 }, props: [{ style: { [Y11.swipeProgress]: "0" } }, d31], stateAttributesMapping: Fr2 });
});
var kr2 = { active(e58) {
  return e58 ? { "data-active": "" } : { "data-inactive": "" };
} };
var Ot = Nt.forwardRef(function(t48, o62) {
  let { render: u37, className: p31, style: w22, ...d31 } = t48, n61 = { active: ve3(true)?.active ?? false };
  return J("div", t48, { ref: o62, state: n61, props: d31, stateAttributesMapping: kr2 });
});
var K7 = function(e58) {
  return e58[e58.open = r18.open] = "open", e58[e58.closed = r18.closed] = "closed", e58[e58.startingStyle = r18.startingStyle] = "startingStyle", e58[e58.endingStyle = r18.endingStyle] = "endingStyle", e58.expanded = "data-expanded", e58.nestedDrawerOpen = "data-nested-drawer-open", e58.nestedDrawerSwiping = "data-nested-drawer-swiping", e58.swipeDismiss = "data-swipe-dismiss", e58.swipeDirection = "data-swipe-direction", e58.swiping = "data-swiping", e58;
}({});
var lt2 = rt3.createContext(void 0);
function Ce3(e58) {
  let t48 = rt3.useContext(lt2);
  if (e58 === false && t48 === void 0) throw new Error(f2(90));
  return t48;
}
function Tt4(e58, t48, o62) {
  if (!Number.isFinite(t48) || t48 <= 0) return null;
  if (typeof e58 == "number") return Number.isFinite(e58) ? e58 <= 1 ? t39(e58, 0, 1) * t48 : e58 : null;
  let u37 = e58.trim();
  if (u37.endsWith("px")) {
    let p31 = Number.parseFloat(u37);
    return Number.isFinite(p31) ? p31 : null;
  }
  if (u37.endsWith("rem")) {
    let p31 = Number.parseFloat(u37);
    return Number.isFinite(p31) ? p31 * o62 : null;
  }
  return null;
}
function Ur(e58, t48) {
  let o62 = null, u37 = 1 / 0;
  for (let p31 of t48) {
    let w22 = Math.abs(p31.height - e58);
    w22 < u37 && (u37 = w22, o62 = p31);
  }
  return o62;
}
function nt2() {
  let { store: e58 } = i19(), { snapPoints: t48, activeSnapPoint: o62, setActiveSnapPoint: u37, popupHeight: p31 } = Ce3(), w22 = e58.useState("viewportElement"), [d31, _19] = Ye3.useState(0), [c40, n61] = Ye3.useState(16), D14 = E(() => {
    let E30 = n13(w22).documentElement;
    w22 && _19(w22.offsetHeight), w22 || _19(E30.clientHeight);
    let h24 = parseFloat(getComputedStyle(E30).fontSize);
    Number.isFinite(h24) && n61(h24);
  });
  o2(() => {
    if (D14(), !w22 || typeof ResizeObserver != "function") return;
    let b14 = new ResizeObserver(D14);
    return b14.observe(w22), () => {
      b14.disconnect();
    };
  }, [D14, w22]);
  let g20 = Ye3.useMemo(() => {
    if (!t48 || t48.length === 0 || d31 <= 0 || p31 <= 0) return [];
    let b14 = Math.min(p31, d31);
    if (!Number.isFinite(b14) || b14 <= 0) return [];
    let E30 = t48.map((M20) => {
      let C18 = Tt4(M20, d31, c40);
      if (C18 === null || !Number.isFinite(C18)) return null;
      let k17 = t39(C18, 0, b14);
      return { value: M20, height: k17, offset: Math.max(0, p31 - k17) };
    }).filter((M20) => !!M20);
    if (E30.length <= 1) return E30;
    let h24 = [], N20 = [];
    for (let M20 = E30.length - 1; M20 >= 0; M20 -= 1) {
      let C18 = E30[M20];
      N20.some((W14) => Math.abs(W14 - C18.height) <= 1) || (N20.push(C18.height), h24.push(C18));
    }
    return h24.reverse(), h24;
  }, [p31, c40, t48, d31]), y24 = Ye3.useMemo(() => {
    if (o62 === void 0) return g20[0];
    if (o62 === null) return;
    let b14 = g20.find((M20) => Object.is(M20.value, o62));
    if (b14) return b14;
    let E30 = Math.min(p31, d31), h24 = Tt4(o62, d31, c40);
    if (h24 === null || !Number.isFinite(h24)) return;
    let N20 = t39(h24, 0, E30);
    return Ur(N20, g20) ?? void 0;
  }, [o62, p31, g20, c40, d31]);
  return { snapPoints: t48, activeSnapPoint: o62, setActiveSnapPoint: u37, popupHeight: p31, viewportHeight: d31, resolvedSnapPoints: g20, activeSnapPointOffset: y24?.offset ?? null };
}
var mt2 = ot2.createContext(null);
function Mt2(e58) {
  let t48 = ot2.useContext(mt2);
  if (e58 === false && t48 === null) throw new Error(f2(92));
  return t48;
}
var It2 = false;
function on() {
  It2 || (typeof CSS < "u" && "registerProperty" in CSS && ([P11.swipeMovementX, P11.swipeMovementY, P11.snapPointOffset].forEach((e58) => {
    try {
      CSS.registerProperty({ name: e58, syntax: "<length>", inherits: false, initialValue: "0px" });
    } catch {
    }
  }), [{ name: Y11.swipeProgress, initialValue: "0" }, { name: P11.swipeStrength, initialValue: "1" }].forEach(({ name: e58, initialValue: t48 }) => {
    try {
      CSS.registerProperty({ name: e58, syntax: "<number>", inherits: false, initialValue: t48 });
    } catch {
    }
  })), It2 = true);
}
var sn = { ...g11, ...i7, expanded(e58) {
  return e58 ? { [K7.expanded]: "" } : null;
}, nestedDrawerOpen(e58) {
  return e58 ? { [K7.nestedDrawerOpen]: "" } : null;
}, nestedDrawerSwiping(e58) {
  return e58 ? { [K7.nestedDrawerSwiping]: "" } : null;
}, swipeDirection(e58) {
  return e58 ? { [K7.swipeDirection]: e58 } : null;
}, swiping(e58) {
  return e58 ? { [K7.swiping]: "" } : null;
} };
var _t3 = Te2.forwardRef(function(t48, o62) {
  let { render: u37, className: p31, style: w22, finalFocus: d31, initialFocus: _19, ...c40 } = t48, { store: n61 } = i19(), { swipeDirection: D14, frontmostHeight: g20, hasNestedDrawer: y24, nestedSwiping: b14, nestedSwipeProgressStore: E30, onPopupHeightChange: h24, notifyParentFrontmostHeight: N20, notifyParentHasNestedDrawer: M20 } = Ce3(), C18 = n61.useState("descriptionElementId"), k17 = n61.useState("disablePointerDismissal"), W14 = n61.useState("floatingRootContext"), H16 = n61.useState("popupProps"), Z17 = n61.useState("modal"), q15 = n61.useState("mounted"), Ie7 = n61.useState("nested"), fe7 = n61.useState("nestedOpenDrawerCount"), J18 = n61.useState("transitionStatus"), O14 = n61.useState("open"), $9 = n61.useState("openMethod"), ee7 = n61.useState("titleElementId"), Ee7 = n61.useState("role"), ye9 = W14.useState("floatingId"), me7 = c40.id ?? ye9, de8 = Mt2(true);
  a20();
  let { snapPoints: X11, activeSnapPoint: be8, activeSnapPointOffset: oe10 } = nt2(), se12 = fe7 > 0, te7 = de8?.swiping ?? false, re8 = de8?.swipeStrength ?? null, [j17, B17] = Te2.useState(0), x21 = Te2.useRef(0), ce8 = E(() => {
    let T17 = n61.context.popupRef.current;
    if (!T17) return;
    let V12 = T17.offsetHeight;
    if (x21.current > 0 && g20 > x21.current && V12 > x21.current) return;
    if (x21.current > 0 && y24) {
      let r49 = x21.current;
      B17(r49), h24(r49);
      return;
    }
    let L20 = V12;
    L20 !== x21.current && (x21.current = L20, B17(L20), h24(L20));
  });
  o2(() => {
    if (!q15) {
      x21.current = 0, B17(0), h24(0);
      return;
    }
    let T17 = n61.context.popupRef.current;
    if (!T17 || (on(), ce8(), typeof ResizeObserver != "function")) return;
    let V12 = new ResizeObserver(ce8);
    return V12.observe(T17), () => {
      V12.disconnect();
    };
  }, [ce8, q15, se12, h24, n61.context.popupRef]), o2(() => {
    let T17 = n61.context.popupRef, V12 = () => {
      let L20 = T17.current;
      if (!L20) return;
      let r49 = E30.getSnapshot();
      r49 > 0 ? L20.style.setProperty(Y11.swipeProgress, `${r49}`) : L20.style.setProperty(Y11.swipeProgress, "0");
    };
    V12();
    let we7 = E30.subscribe(V12);
    return () => {
      we7();
      let L20 = T17.current;
      L20 && L20.style.setProperty(Y11.swipeProgress, "0");
    };
  }, [E30, n61.context.popupRef]), Te2.useEffect(() => {
    if (O14) return N20?.(g20), () => {
      N20?.(0);
    };
  }, [g20, O14, N20]), Te2.useEffect(() => M20 ? (M20(O14 || J18 === "ending"), () => {
    M20(false);
  }) : void 0, [M20, O14, J18]), p10({ open: O14, ref: n61.context.popupRef, onComplete() {
    O14 && n61.context.onOpenChangeComplete?.(true);
  } });
  let Me10 = _19 === void 0 ? n61.context.popupRef : _19, Pe6 = n61.useStateSetter("popupElement"), s54 = { open: O14, nested: Ie7, transitionStatus: J18, expanded: be8 === 1, nestedDrawerOpen: se12, nestedDrawerSwiping: b14, swipeDirection: D14, swiping: te7 }, i38;
  j17 && !(!y24 && J18 !== "ending") && (i38 = `${j17}px`);
  let ie10 = X11 && X11.length > 0 && (D14 === "down" || D14 === "up"), ue7 = null;
  ie10 && oe10 !== null && (ue7 = D14 === "up" ? -oe10 : oe10);
  let A17 = de8 ? de8.getDragStyles() : o7;
  if (ie10 && D14 === "down") {
    let T17 = oe10 ?? 0, V12 = Number.parseFloat(String(A17[P11.swipeMovementY] ?? 0)), we7 = Number.isFinite(V12) ? T17 + V12 : T17, L20 = we7 < 0;
    if (te7 && L20 && Number.isFinite(V12)) {
      let r49 = Math.abs(we7), a38 = -Math.sqrt(r49) - T17;
      A17 = { ...A17, transform: void 0, [P11.swipeMovementY]: `${a38}px` };
    } else A17 = { ...A17, transform: void 0 };
  }
  let xe9 = J("div", t48, { state: s54, props: [H16, { id: me7, "aria-labelledby": ee7, "aria-describedby": C18, role: Ee7, ...le2, hidden: !q15, onKeyDown(T17) {
    Y2.has(T17.key) && T17.stopPropagation();
  }, style: { ...A17, [Y11.swipeProgress]: "0", [P11.nestedDrawers]: fe7, [P11.height]: i38, [P11.snapPointOffset]: typeof ue7 == "number" ? `${ue7}px` : "0px", [P11.frontmostHeight]: g20 ? `${g20}px` : void 0, [P11.swipeStrength]: typeof re8 == "number" && Number.isFinite(re8) && re8 > 0 ? `${re8}` : "1" } }, c40], ref: [o62, n61.context.popupRef, Pe6], stateAttributesMapping: sn });
  return nn(To, { context: W14, openInteractionType: $9, disabled: !q15, closeOnFocusOut: !k17, initialFocus: Me10, returnFocus: d31, modal: Z17 !== false, restoreFocus: "popup", children: xe9 });
});
var Ht = N9;
function Vt2(e58) {
  let { children: t48 } = e58, [o62, u37] = Xe4.useState(() => /* @__PURE__ */ new Map()), [p31] = Xe4.useState(un), w22 = E((n61, D14) => {
    u37((g20) => {
      if (g20.get(n61) === D14) return g20;
      let b14 = new Map(g20);
      return b14.set(n61, D14), b14;
    });
  }), d31 = E((n61) => {
    u37((D14) => {
      if (!D14.has(n61)) return D14;
      let g20 = new Map(D14);
      return g20.delete(n61), g20;
    });
  }), _19 = Xe4.useMemo(() => {
    for (let n61 of o62.values()) if (n61) return true;
    return false;
  }, [o62]), c40 = Xe4.useMemo(() => ({ setDrawerOpen: w22, removeDrawer: d31, active: _19, visualStateStore: p31 }), [_19, d31, w22, p31]);
  return cn(pt2.Provider, { value: c40, children: t48 });
}
function un() {
  let e58 = { swipeProgress: 0, frontmostHeight: 0 }, t48 = /* @__PURE__ */ new Set();
  return { getSnapshot: () => e58, set(o62) {
    let u37 = e58.swipeProgress;
    o62.swipeProgress !== void 0 && (u37 = Number.isFinite(o62.swipeProgress) ? o62.swipeProgress : 0);
    let p31 = e58.frontmostHeight;
    o62.frontmostHeight !== void 0 && (p31 = Number.isFinite(o62.frontmostHeight) ? o62.frontmostHeight : 0), !(u37 === e58.swipeProgress && p31 === e58.frontmostHeight) && (e58 = { swipeProgress: u37, frontmostHeight: p31 }, t48.forEach((w22) => {
      w22();
    }));
  }, subscribe(o62) {
    return t48.add(o62), () => {
      t48.delete(o62);
    };
  } };
}
var kt2;
var Wt;
function Xt2(e58) {
  let { children: t48, open: o62, defaultOpen: u37 = false, onOpenChange: p31, onOpenChangeComplete: w22, disablePointerDismissal: d31 = false, modal: _19 = true, actionsRef: c40, handle: n61, triggerId: D14, defaultTriggerId: g20 = null, swipeDirection: y24 = "down", snapToSequentialPoints: b14 = false, snapPoints: E30, snapPoint: h24, defaultSnapPoint: N20, onSnapPointChange: M20 } = e58, C18 = Ce3(true), k17 = C18?.onNestedSwipeProgressChange, W14 = C18?.onNestedFrontmostHeightChange, H16 = C18?.onNestedSwipingChange, Z17 = C18?.onNestedDrawerPresenceChange, [q15, Ie7] = G11.useState(0), [fe7, J18] = G11.useState(0), [O14, $9] = G11.useState(false), [ee7, Ee7] = G11.useState(false), [ye9] = G11.useState(Sn), me7 = N20 !== void 0 ? N20 : E30?.[0] ?? null, de8 = h24 !== void 0, [X11, be8] = m({ controlled: h24, default: me7, name: "Drawer", state: "snapPoint" }), oe10 = G11.useRef(false), se12 = E((i38, F14) => {
    let ie10 = F14 ?? u4(s4.none);
    M20?.(i38, ie10), !ie10.isCanceled && be8(i38);
  }), te7 = G11.useMemo(() => de8 || !E30 || E30.length === 0 ? X11 : X11 === null || !E30.some((i38) => Object.is(i38, X11)) ? me7 : X11, [X11, de8, me7, E30]), re8 = E((i38) => {
    Ie7(i38), !oe10.current && i38 > 0 && J18(i38);
  }), j17 = E((i38) => {
    if (i38 > 0) {
      oe10.current = true, J18(i38);
      return;
    }
    oe10.current = false, q15 > 0 && J18(q15);
  }), B17 = E((i38) => {
    $9(i38);
  }), x21 = E((i38) => {
    ye9.set(i38), k17?.(i38);
  }), ce8 = E((i38) => {
    Ee7(i38), H16?.(i38);
  }), Me10 = E((i38, F14) => {
    p31?.(i38, F14), !F14.isCanceled && !i38 && E30 && E30.length > 0 && se12(me7, u4(F14.reason, F14.event, F14.trigger));
  }), Pe6 = G11.useMemo(() => ({ swipeDirection: y24, snapToSequentialPoints: b14, snapPoints: E30, activeSnapPoint: te7, setActiveSnapPoint: se12, frontmostHeight: fe7, popupHeight: q15, hasNestedDrawer: O14, nestedSwiping: ee7, nestedSwipeProgressStore: ye9, onNestedDrawerPresenceChange: B17, onPopupHeightChange: re8, onNestedFrontmostHeightChange: j17, onNestedSwipingChange: ce8, onNestedSwipeProgressChange: x21, notifyParentFrontmostHeight: W14, notifyParentSwipingChange: H16, notifyParentSwipeProgressChange: k17, notifyParentHasNestedDrawer: Z17 }), [te7, fe7, O14, ee7, ye9, Z17, k17, H16, W14, B17, j17, x21, ce8, re8, q15, se12, E30, b14, y24]), s54 = typeof t48 == "function" ? (i38) => Bt2(G11.Fragment, { children: [kt2 || (kt2 = Ge3(Lt3, {})), t48(i38)] }) : Bt2(G11.Fragment, { children: [Wt || (Wt = Ge3(Lt3, {})), t48] });
  return Ge3(lt2.Provider, { value: Pe6, children: Ge3(s20.Provider, { value: true, children: Ge3(i36.Root, { open: o62, defaultOpen: u37, onOpenChange: Me10, onOpenChangeComplete: w22, disablePointerDismissal: d31, modal: _19, actionsRef: c40, handle: n61, triggerId: D14, defaultTriggerId: g20, children: s54 }) }) });
}
function Sn() {
  let e58 = 0, t48 = /* @__PURE__ */ new Set();
  return { getSnapshot: () => e58, set(o62) {
    let u37 = Number.isFinite(o62) ? o62 : 0;
    u37 !== e58 && (e58 = u37, t48.forEach((p31) => {
      p31();
    }));
  }, subscribe(o62) {
    return t48.add(o62), () => {
      t48.delete(o62);
    };
  } };
}
function Lt3() {
  let e58 = I3(), t48 = ve3(true), { store: o62 } = i19(false), u37 = o62.useState("open"), p31 = o62.useState("nestedOpenDialogCount"), w22 = o62.useState("popupElement"), d31 = p31 === 0;
  return G11.useEffect(() => {
    if (!(!t48 || e58 == null)) return () => {
      t48.removeDrawer(e58);
    };
  }, [e58, t48]), G11.useEffect(() => {
    e58 != null && t48?.setDrawerOpen(e58, u37);
  }, [e58, u37, t48]), G11.useEffect(() => {
    if (!u37 || !d31 || !l7) return;
    let c40 = i10(w22).CloseWatcher;
    if (!c40) return;
    function n61(y24) {
      o62.select("open") && o62.setOpen(false, u4(s4.closeWatcher, y24));
    }
    let D14 = new c40(), g20 = t11(D14, "close", n61);
    return () => {
      g20(), D14.destroy();
    };
  }, [o62, d31, u37, w22]), null;
}
var Ue3 = function(e58) {
  return e58[e58.open = r18.open] = "open", e58[e58.closed = r18.closed] = "closed", e58.disabled = "data-disabled", e58.swipeDirection = "data-swipe-direction", e58.swiping = "data-swiping", e58;
}({});
var yn = 0.5;
var bn = 1;
var Nn2 = 0.1;
var On = 40;
var Tn2 = { [Ue3.open]: "" };
var Mn = { [Ue3.closed]: "" };
var An2 = { [Ue3.swiping]: "" };
var In = { [Ue3.disabled]: "" };
var _n = { open(e58) {
  return e58 ? Tn2 : Mn;
}, swiping(e58) {
  return e58 ? An2 : null;
}, swipeDirection(e58) {
  return e58 ? { [Ue3.swipeDirection]: e58 } : null;
}, disabled(e58) {
  return e58 ? In : null;
} };
var Kt = { up: "down", down: "up", left: "right", right: "left" };
function Hn(e58) {
  return e58 === "left" || e58 === "right" ? "pan-y" : "pan-x";
}
var Gt = ne6.forwardRef(function(t48, o62) {
  let { render: u37, className: p31, style: w22, disabled: d31 = false, swipeDirection: _19, ...c40 } = t48, { store: n61 } = i19(), { swipeDirection: D14, frontmostHeight: g20 } = Ce3(), y24 = ve3(true), [b14, E30] = ne6.useState(false), h24 = p12(), N20 = ne6.useRef(null), M20 = ne6.useRef(null), C18 = ne6.useRef(false), k17 = ne6.useRef({ x: 0, y: 0 }), W14 = ne6.useRef(null), H16 = ne6.useRef(false), Z17 = ne6.useRef(null), q15 = r5(t48.id), Ie7 = J6(q15, n61), fe7 = n61.useState("open"), J18 = E(() => {
    k17.current.x = 0, k17.current.y = 0;
  }), O14 = _19 ?? Kt[D14], $9 = Kt[O14], ee7 = !d31 && (!fe7 || b14);
  function Ee7() {
    h24.clear(), n61.context.outsidePressEnabledRef.current = false;
  }
  function ye9() {
    h24.start(0, () => {
      n61.context.outsidePressEnabledRef.current = true;
    });
  }
  function me7() {
    let s54 = n61.context.popupRef.current;
    if (!s54) return null;
    let F14 = $9 === "left" || $9 === "right" ? s54.offsetWidth : s54.offsetHeight;
    return F14 <= 0 ? null : F14;
  }
  function de8() {
    let s54 = me7();
    if (s54 == null) return null;
    let i38 = n61.context.popupRef.current;
    if (!i38) return s54;
    let F14 = $9 === "left" || $9 === "right", ie10 = bt(i38), ue7 = F14 ? ie10.x : ie10.y;
    return Number.isFinite(ue7) && Math.abs(ue7) > 0.5 ? Math.min(s54, Math.abs(ue7)) : s54;
  }
  function X11() {
    let s54 = me7();
    return s54 == null ? On : s54 * yn;
  }
  function be8() {
    if (!b14) return;
    let s54 = n61.context.popupRef.current;
    if (!s54 || !n61.select("open") || !n61.select("mounted")) return;
    W14.current == null && (W14.current = de8());
    let i38 = W14.current;
    if (!i38 || !Number.isFinite(i38) || i38 <= 0) return;
    let { x: F14, y: ie10 } = k17.current, ue7 = Xe3(O14, F14, ie10), A17 = Math.max(0, ue7), xe9 = A17 > i38 ? i38 + Math.sqrt(A17 - i38) : A17, we7 = (i38 - xe9) * ($9 === "left" || $9 === "up" ? -1 : 1), L20 = $9 === "left" || $9 === "right", r49 = L20 ? we7 : 0, l19 = L20 ? 0 : we7, a38 = Math.max(0, Math.min(1, A17 / i38)), f35 = Math.max(0, Math.min(1, 1 - a38));
    s54.style.setProperty(P11.swipeMovementX, `${r49}px`), s54.style.setProperty(P11.swipeMovementY, `${l19}px`), s54.setAttribute(K7.swiping, ""), Z17.current === null && (Z17.current = s54.style.transition), s54.style.transition = "none";
    let S18 = n61.context.backdropRef.current;
    S18 && (S18.setAttribute(K7.swiping, ""), S18.style.setProperty(Y11.swipeProgress, `${f35}`), a38 > 0 && g20 > 0 ? S18.style.setProperty(P11.height, `${g20}px`) : S18.style.removeProperty(P11.height)), y24?.visualStateStore.set({ swipeProgress: a38, frontmostHeight: a38 > 0 ? g20 : 0 }), H16.current = true;
  }
  let oe10 = E(() => {
    let s54 = n61.context.popupRef.current;
    s54 && H16.current && (s54.style.removeProperty(P11.swipeMovementX), s54.style.removeProperty(P11.swipeMovementY), s54.removeAttribute(K7.swiping)), s54 && Z17.current !== null && (s54.style.transition = Z17.current, Z17.current = null);
    let i38 = n61.context.backdropRef.current;
    i38 && (i38.removeAttribute(K7.swiping), i38.style.setProperty(Y11.swipeProgress, "0"), i38.style.removeProperty(P11.height)), y24?.visualStateStore.set({ swipeProgress: 0, frontmostHeight: 0 }), H16.current = false;
  });
  function se12(s54) {
    n61.select("open") || (C18.current = true, n61.setOpen(true, u4(s4.swipe, s54, N20.current ?? void 0)));
  }
  function te7(s54) {
    n61.select("open") && n61.setOpen(false, u4(s4.swipe, s54, N20.current ?? void 0));
  }
  function re8() {
    M20.current = null, C18.current = false, W14.current = null, E30(false);
  }
  function j17() {
    re8(), ye9(), J18(), oe10();
  }
  let B17 = Yt2({ enabled: ee7, directions: [O14], elementRef: N20, trackDrag: false, movementCssVars: { x: P11.swipeMovementX, y: P11.swipeMovementY }, onSwipeStart(s54) {
    Ee7(), M20.current = s54, C18.current = false, E30(true), J18();
  }, onProgress(s54, i38) {
    !i38 || !M20.current || (k17.current.x = i38.deltaX, k17.current.y = i38.deltaY, i38.direction !== O14) || Xe3(O14, i38.deltaX, i38.deltaY) < bn && !C18.current || (C18.current || se12(M20.current), be8());
  }, onRelease({ event: s54, direction: i38, deltaX: F14, deltaY: ie10, releaseVelocityX: ue7, releaseVelocityY: A17 }) {
    let xe9 = Xe3(O14, F14, ie10), T17 = Xe3(O14, ue7, A17), V12 = X11(), we7 = V12 != null && xe9 >= V12, L20 = T17 >= Nn2;
    return V12 != null && i38 === O14 && (we7 || L20) && !d31 ? n61.select("open") || se12(s54) : C18.current && te7(s54), j17(), false;
  }, onCancel: j17 }), x21 = B17.getPointerProps(), ce8 = B17.getTouchProps(), Me10 = B17.reset;
  ne6.useEffect(() => {
    ee7 || (Me10(), J18(), oe10(), re8());
  }, [oe10, ee7, J18, Me10]), ne6.useEffect(() => () => {
    n61.context.outsidePressEnabledRef.current = true;
  }, [n61]);
  let Pe6 = { open: fe7, swiping: B17.swiping, swipeDirection: O14, disabled: d31 };
  return J("div", t48, { state: Pe6, ref: [o62, N20, Ie7], stateAttributesMapping: _n, props: [{ role: "presentation", "aria-hidden": true, style: { pointerEvents: ee7 ? void 0 : "none", touchAction: Hn(O14) }, onPointerDown(s54) {
    s54.pointerType !== "touch" && (x21.onPointerDown?.(s54), s54.cancelable && s54.preventDefault());
  }, onPointerMove(s54) {
    s54.pointerType !== "touch" && x21.onPointerMove?.(s54);
  }, onPointerUp(s54) {
    s54.pointerType !== "touch" && x21.onPointerUp?.(s54);
  }, onPointerCancel(s54) {
    s54.pointerType !== "touch" && x21.onPointerCancel?.(s54);
  } }, ce8, q15 ? { id: q15 } : void 0, c40] });
});
var qt2 = R13;
var Jt2 = W10;
var Rt2 = 10;
var tr = 0.5;
var rr2 = 0.5;
var $n = 300;
var nr = 4;
var or = 0.2;
var jn = 4;
var gt2 = 80;
var sr = 360;
var ht3 = 0.1;
var ir = 1;
var Kn3 = `[${Qe2}]`;
var wr2 = I21.forwardRef(function(t48, o62) {
  let { render: u37, className: p31, style: w22, children: d31, ..._19 } = t48, { store: c40 } = i19(), { swipeDirection: n61, notifyParentSwipingChange: D14, notifyParentSwipeProgressChange: g20, frontmostHeight: y24, snapToSequentialPoints: b14 } = Ce3(), E30 = ve3(true), { snapPoints: h24, resolvedSnapPoints: N20, activeSnapPoint: M20, activeSnapPointOffset: C18, setActiveSnapPoint: k17, popupHeight: W14 } = nt2(), H16 = c40.useState("open"), Z17 = c40.useState("mounted"), q15 = c40.useState("nested"), Ie7 = c40.useState("nestedOpenDrawerCount"), fe7 = c40.useState("viewportElement"), J18 = c40.useState("popupElement"), O14 = E30?.visualStateStore, $9 = Ie7 > 0, ee7 = n61 === "left" || n61 === "right" ? "horizontal" : "vertical", Ee7 = ee7 === "vertical", ye9 = Ee7 ? "horizontal" : "vertical", [me7, de8] = I21.useState(null), X11 = I21.useRef(void 0), be8 = I21.useRef(null), oe10 = R2(), se12 = I21.useRef(false), te7 = I21.useRef(""), re8 = I21.useRef(false), j17 = I21.useRef(false), B17 = I21.useRef(null), x21 = I21.useMemo(() => {
    if (!h24 || h24.length < 2 || n61 !== "down" && n61 !== "up" || N20.length < 2) return null;
    let r49 = N20.map((m25) => m25.offset).filter((m25) => Number.isFinite(m25)).sort((m25, R27) => m25 - R27);
    if (r49.length < 2) return null;
    let l19 = r49[0], a38 = r49[1], f35 = r49[r49.length - 1], S18 = a38 - l19;
    if (!Number.isFinite(S18) || S18 <= 0) {
      let m25 = f35 - l19;
      if (!Number.isFinite(m25) || m25 <= 0) return null;
      S18 = m25;
    }
    return { minOffset: l19, range: S18 };
  }, [N20, h24, n61]), ce8 = I21.useMemo(() => !x21 || C18 === null ? null : t39((C18 - x21.minOffset) / x21.range, 0, 1), [C18, x21]), Me10 = I21.useMemo(() => h24 && h24.length > 0 && (n61 === "down" || n61 === "up") ? n61 === "down" ? ["down", "up"] : ["up", "down"] : [n61], [h24, n61]), Pe6 = E((r49) => {
    Gn(c40.context.popupRef.current, c40.context.backdropRef.current, r49);
  }), s54 = E(() => {
    Pe6(false), c40.context.popupRef.current?.removeAttribute(n8.endingStyle), de8(null);
  }), i38 = E(() => {
    se12.current && (se12.current = false, D14?.(false));
  }), F14 = E(({ resolvedProgress: r49, shouldTrackProgress: l19, notifyParent: a38 }) => {
    let f35 = H16 && !q15 && l19, S18 = f35 ? r49 : 0, m25 = H16 && l19 ? r49 : 0;
    a38 && g20 && (g20(m25), m25 <= 0 && i38()), O14?.set({ swipeProgress: S18, frontmostHeight: S18 > 0 ? y24 : 0 });
    let R27 = c40.context.backdropRef.current;
    if (R27) {
      if (!f35 || S18 <= 0) {
        R27.style.setProperty(Y11.swipeProgress, "0"), R27.style.removeProperty(P11.height);
        return;
      }
      R27.style.setProperty(Y11.swipeProgress, `${S18}`), y24 > 0 ? R27.style.setProperty(P11.height, `${y24}px`) : R27.style.removeProperty(P11.height);
    }
  });
  function ie10({ direction: r49, deltaX: l19, deltaY: a38, velocityX: f35, velocityY: S18, releaseVelocityX: m25, releaseVelocityY: R27 }) {
    if (!r49) return null;
    let v17 = c40.context.popupRef.current;
    if (!v17) return null;
    let Q16 = r49 === "left" || r49 === "right" ? v17.offsetWidth : v17.offsetHeight;
    if (!Number.isFinite(Q16) || Q16 <= 0) return null;
    let ae11 = r49 === "left" || r49 === "right" ? l19 : a38, U11 = h24 && h24.length > 0 ? C18 ?? 0 : 0, pe9 = 0;
    r49 === "down" ? pe9 = U11 : r49 === "up" && (pe9 = -U11);
    let Ae7 = pe9 + ae11, Be6 = r49 === "left" || r49 === "up" ? -Ae7 : Ae7, le9 = Math.max(0, Q16 - Be6);
    if (!Number.isFinite(le9) || le9 <= 0) return null;
    let _e7 = r49 === "left" || r49 === "right" ? m25 : R27, qe4 = r49 === "left" || r49 === "right" ? f35 : S18, Je9 = Math.abs(_e7) > 0 && Number.isFinite(_e7) ? _e7 : qe4, ge10 = r49 === "left" || r49 === "up" ? -Je9 : Je9;
    if (!Number.isFinite(ge10) || ge10 <= or) return null;
    let $e6 = t39(ge10, or, jn), He10 = t39(le9 / $e6, gt2, sr);
    if (!Number.isFinite(He10)) return null;
    let je8 = (He10 - gt2) / (sr - gt2), Fe5 = t39(ht3 + je8 * (ir - ht3), ht3, ir);
    return !Number.isFinite(Fe5) || Fe5 <= 0 ? null : Fe5;
  }
  function ue7(r49) {
    if (se12.current || !r49) return;
    let l19 = r49.direction ?? n61, a38 = l19 === "left" || l19 === "right" ? r49.deltaX : r49.deltaY;
    !Number.isFinite(a38) || Math.abs(a38) < Rt2 || (se12.current = true, D14?.(true));
  }
  let A17 = Yt2({ enabled: Z17 && !$9, directions: Me10, elementRef: c40.context.popupRef, ignoreSelectorWhenTouch: false, ignoreScrollableAncestors: true, movementCssVars: { x: P11.swipeMovementX, y: P11.swipeMovementY }, onSwipeStart(r49) {
    if ("touches" in r49 || "pointerType" in r49 && r49.pointerType === "touch") return;
    let l19 = c40.context.popupRef.current;
    if (!l19) return;
    let f35 = n13(l19).getSelection?.();
    if (!f35 || f35.isCollapsed) return;
    let S18 = h4(f35.anchorNode) ? f35.anchorNode : f35.anchorNode?.parentElement, m25 = h4(f35.focusNode) ? f35.focusNode : f35.focusNode?.parentElement;
    !u9(l19, S18) && !u9(l19, m25) || f35.removeAllRanges();
  }, onSwipingChange(r49) {
    ar(c40.context.backdropRef.current, r49), !r49 && !g20 && i38();
  }, swipeThreshold({ element: r49, direction: l19 }) {
    return cr(r49, l19);
  }, canStart(r49, l19) {
    let a38 = c40.context.popupRef.current;
    if (!a38) return false;
    let f35 = a38.ownerDocument, S18 = o55(f35, r49.x, r49.y);
    if (!S18 || !u9(a38, S18)) return false;
    let m25 = l19.nativeEvent;
    return !(("touches" in m25 || "pointerType" in m25 && m25.pointerType === "touch") && pr(f35, a38) || m25.type === "touchstart" && St3(S18));
  }, onProgress(r49, l19) {
    ue7(l19);
    let a38 = l19?.direction ?? A17.swipeDirection, f35 = a38 === void 0 || a38 === n61, S18 = !!(h24 && h24.length > 0), R27 = S18 && (n61 === "down" || n61 === "up") || !S18 || n61 === "left" || n61 === "right" || f35, v17 = r49;
    if (x21 && W14 > 0) {
      if (l19 && Number.isFinite(l19.deltaY)) {
        let Q16 = C18 ?? x21.minOffset, ae11 = t39(Q16 + l19.deltaY, 0, W14);
        v17 = t39((ae11 - x21.minOffset) / x21.range, 0, 1);
      } else if (ce8 !== null) v17 = ce8;
      else if (a38 === "down" || a38 === "up") {
        let Q16 = r49 * W14, ae11 = C18 ?? x21.minOffset, U11 = a38 === "down" ? ae11 + Q16 : ae11 - Q16;
        v17 = t39((U11 - x21.minOffset) / x21.range, 0, 1);
      }
    }
    F14({ resolvedProgress: v17, shouldTrackProgress: R27, notifyParent: true });
  }, onRelease({ event: r49, deltaX: l19, deltaY: a38, direction: f35, velocityX: S18, velocityY: m25, releaseVelocityX: R27, releaseVelocityY: v17 }) {
    let Q16 = { deltaX: l19, deltaY: a38, velocityX: S18, velocityY: m25, releaseVelocityX: R27, releaseVelocityY: v17 };
    function ae11(z17) {
      let he6 = c40.context.popupRef.current;
      he6 && (i38(), Pe6(true), he6.style.removeProperty("transition"), he6.setAttribute(n8.endingStyle, ""), fr.flushSync(() => {
        de8(ie10({ direction: z17, ...Q16 }));
      }));
    }
    if (!h24 || h24.length === 0) {
      if (!f35) {
        s54();
        return;
      }
      let z17 = c40.context.popupRef.current;
      if (!z17) {
        s54();
        return;
      }
      let he6 = cr(z17, f35), Ne7 = f35 === "left" || f35 === "right" ? l19 : a38;
      if (!Number.isFinite(Ne7)) {
        s54();
        return;
      }
      let Oe5 = f35 === "left" || f35 === "up" ? -Ne7 : Ne7;
      if (Oe5 <= 0) return s54(), false;
      let Ke10 = f35 === "left" || f35 === "right" ? S18 : m25;
      if ((f35 === "left" || f35 === "up" ? -Ke10 : Ke10) >= tr && Oe5 > 0) return ae11(f35), true;
      let Le7 = Oe5 > he6;
      return Le7 ? ae11(f35) : s54(), Le7;
    }
    if (n61 !== "down" && n61 !== "up") {
      s54();
      return;
    }
    if (!W14 || N20.length === 0) {
      s54();
      return;
    }
    let U11 = n61 === "down" ? a38 : -a38;
    if (!Number.isFinite(U11)) {
      s54();
      return;
    }
    let pe9 = Math.sign(U11), Ae7 = n61 === "down" ? v17 : -v17, Be6 = n61 === "down" ? m25 : -m25, le9 = Number.isFinite(Ae7) ? Ae7 : Be6;
    if (pe9 !== 0 && Math.abs(U11) >= Rt2 && Number.isFinite(le9)) {
      let z17 = Math.sign(le9);
      z17 !== 0 && z17 !== pe9 && (le9 = Be6);
    }
    let _e7 = C18 ?? 0, qe4 = t39(_e7 + U11, 0, W14), Je9 = Number.isFinite(le9) && Math.abs(le9) >= rr2 ? t39(le9, -nr, nr) * $n : 0, ge10 = b14 ? qe4 : t39(qe4 + Je9, 0, W14), $e6 = u4(s4.swipe, r49), He10 = () => (X11.current = M20, k17?.(null, $e6), ae11(n61), true);
    if (b14) {
      let z17 = [...N20].sort((Se8, Re8) => Se8.offset - Re8.offset);
      if (z17.length === 0) return s54(), false;
      let he6 = 0, Ne7 = Math.abs(_e7 - z17[0].offset);
      for (let Se8 = 1; Se8 < z17.length; Se8 += 1) {
        let Re8 = Math.abs(_e7 - z17[Se8].offset);
        Re8 < Ne7 && (Ne7 = Re8, he6 = Se8);
      }
      let Oe5 = z17[0];
      Ne7 = Math.abs(ge10 - Oe5.offset);
      for (let Se8 of z17) {
        let Re8 = Math.abs(ge10 - Se8.offset);
        Re8 < Ne7 && (Ne7 = Re8, Oe5 = Se8);
      }
      let Ke10 = Math.sign(le9), Pt6 = pe9 !== 0 && Ke10 !== 0 && Ke10 === pe9 && Math.abs(le9) >= rr2, Le7 = ge10;
      if (Pt6) {
        let Se8 = t39(he6 + pe9, 0, z17.length - 1);
        if (Se8 !== he6) {
          let Re8 = z17[Se8];
          (pe9 > 0 ? ge10 < Re8.offset : ge10 > Re8.offset) && (Oe5 = Re8, Le7 = Re8.offset);
        } else if (pe9 > 0) return He10();
      }
      let Pr2 = Math.abs(Le7 - W14), Dr = Math.abs(Le7 - Oe5.offset);
      return Pr2 < Dr ? He10() : (k17?.(Oe5.value, $e6), s54(), false);
    }
    if (le9 >= tr && U11 > 0) return He10();
    let je8 = N20[0], Fe5 = Math.abs(ge10 - je8.offset);
    for (let z17 of N20) {
      let he6 = Math.abs(ge10 - z17.offset);
      he6 < Fe5 && (Fe5 = he6, je8 = z17);
    }
    return Math.abs(ge10 - W14) < Fe5 ? He10() : (k17?.(je8.value, $e6), s54(), false);
  }, onDismiss(r49) {
    O14?.set({ swipeProgress: 0, frontmostHeight: 0 });
    let l19 = c40.context.backdropRef.current;
    l19 && (l19.style.setProperty(Y11.swipeProgress, "0"), l19.style.removeProperty(P11.height));
    let a38 = u4(s4.swipe, r49);
    if (c40.setOpen(false, a38), a38.isCanceled) {
      let f35 = X11.current;
      f35 !== void 0 && k17?.(f35, u4(s4.swipe, r49)), X11.current = void 0, be8.current?.(), s54();
      return;
    }
    if (c40.select("open")) {
      let f35 = r49;
      oe10.request(() => {
        if (c40.select("open")) {
          let S18 = X11.current;
          S18 !== void 0 && k17?.(S18, u4(s4.swipe, f35)), X11.current = void 0, s54(), be8.current?.();
        } else X11.current = void 0;
      });
      return;
    }
    X11.current = void 0, Pe6(true);
  } }), xe9 = A17.getPointerProps(), T17 = A17.getTouchProps(), V12 = A17.reset;
  be8.current = V12, I21.useEffect(() => {
    let r49 = fe7 ?? J18;
    if (!r49) return;
    let l19 = r49, a38 = n13(l19), f35 = i10(a38);
    function S18(m25) {
      if (j17.current) return;
      let R27 = B17.current, v17 = m25.touches[0];
      if (!v17 || !R27) return;
      let Q16 = Ee7 ? v17.clientY - R27.lastY : v17.clientX - R27.lastX;
      if (gr(m25, f35)) {
        R27.allowSwipe = false, ke(R27, v17);
        return;
      }
      if (m25.touches.length === 2) {
        ke(R27, v17);
        return;
      }
      if (pr(a38, l19) || !H16 || !Z17 || $9) {
        ke(R27, v17);
        return;
      }
      if (Zn(R27, v17, Ee7)) {
        ke(R27, v17);
        return;
      }
      let U11 = R27.scrollTarget;
      if (!U11 || U11 === a38.documentElement || U11 === a38.body) {
        m25.cancelable && m25.preventDefault(), ke(R27, v17);
        return;
      }
      if (!eo2(U11, ee7)) {
        m25.cancelable && m25.preventDefault(), ke(R27, v17);
        return;
      }
      let Ae7 = Q16;
      if (Ae7 !== 0) {
        let Be6 = ro(U11, ee7, n61, Ae7);
        R27.allowSwipe ? m25.cancelable && m25.preventDefault() : m25.cancelable && Be6 ? (R27.allowSwipe = true, m25.preventDefault()) : R27.allowSwipe = false;
      }
      ke(R27, v17);
    }
    return t11(a38, "touchmove", S18, { passive: false, capture: true });
  }, [Z17, $9, H16, J18, Ee7, ee7, n61, fe7]), I21.useEffect(() => {
    if (!x21 || A17.swiping) return;
    F14({ resolvedProgress: !H16 || q15 ? 0 : ce8 ?? 0, shouldTrackProgress: true, notifyParent: false });
  }, [F14, y24, q15, g20, H16, ce8, x21, A17.swiping, c40, O14]), I21.useEffect(() => {
    if (g20) return H16 || g20(0), () => {
      g20(0);
    };
  }, [g20, H16]), I21.useEffect(() => {
    H16 && (V12(), s54());
  }, [s54, H16, V12]), I21.useEffect(() => () => {
    O14?.set({ swipeProgress: 0, frontmostHeight: 0 }), ar(c40.context.backdropRef.current, false), i38();
  }, [i38, c40, O14]);
  let we7 = I21.useMemo(() => ({ swiping: A17.swiping, getDragStyles: A17.getDragStyles, swipeStrength: me7 ?? null, setSwipeDismissed: Pe6 }), [Pe6, A17.getDragStyles, A17.swiping, me7]);
  function L20() {
    j17.current = false, B17.current = null, te7.current = "", re8.current = false;
  }
  return er(H7, { ref: o62, className: p31, style: w22, render: u37, ...d2(_19, { onPointerDown(r49) {
    if (te7.current = r49.pointerType, re8.current = r49.pointerType === "pen", !H16 || !Z17 || $9) return;
    let l19 = n13(r49.currentTarget), a38 = o55(l19, r49.clientX, r49.clientY);
    St3(a38) || qn(a38) || r49.pointerType !== "touch" && xe9.onPointerDown?.(r49);
  }, onPointerMove(r49) {
    r49.pointerType !== "touch" && xe9.onPointerMove?.(r49);
  }, onPointerUp(r49) {
    te7.current === r49.pointerType && (te7.current = ""), r49.pointerType !== "touch" && xe9.onPointerUp?.(r49);
  }, onPointerCancel(r49) {
    te7.current === r49.pointerType && (te7.current = ""), r49.pointerType !== "touch" && xe9.onPointerCancel?.(r49);
  }, onTouchStart(r49) {
    if (te7.current === "pen" && re8.current) {
      re8.current = false, j17.current = false, B17.current = null;
      return;
    }
    if (!H16 || !Z17 || $9) {
      j17.current = false, B17.current = null;
      return;
    }
    let a38 = r49.touches[0];
    if (!a38) return;
    if (lr(r49)) {
      j17.current = false, B17.current = null;
      return;
    }
    let f35 = n13(r49.currentTarget), S18 = o55(f35, a38.clientX, a38.clientY);
    if (j17.current = St3(S18), j17.current) {
      B17.current = null;
      return;
    }
    let m25 = fe7 ?? J18, R27 = f10(r49.nativeEvent), v17 = h4(R27) ? R27 : null;
    if (m25 && v17 && !u9(m25, v17)) {
      j17.current = true, B17.current = null;
      return;
    }
    let Q16 = null, ae11 = false;
    m25 && v17 && (Q16 = s47(v17, m25, ee7), ae11 = s47(v17, m25, ye9) != null);
    let U11 = null;
    Q16 && (U11 = to(Q16, ee7, n61) ? null : false), B17.current = { startX: a38.clientX, startY: a38.clientY, lastX: a38.clientX, lastY: a38.clientY, scrollTarget: Q16, hasCrossAxisScrollableContent: ae11, allowSwipe: U11, preserveNativeCrossAxisScroll: false }, T17.onTouchStart?.(r49);
  }, onTouchMove(r49) {
    if (j17.current || lr(r49)) return;
    let l19 = B17.current;
    l19?.preserveNativeCrossAxisScroll || l19?.allowSwipe === false || l19?.scrollTarget != null && !l19.allowSwipe || T17.onTouchMove?.(r49);
  }, onTouchEnd(r49) {
    L20(), T17.onTouchEnd?.(r49);
  }, onTouchCancel(r49) {
    L20(), T17.onTouchCancel?.(r49);
  }, "data-nested-dialog-open": void 0 }), children: er(mt2.Provider, { value: we7, children: d31 }) });
});
function Gn(e58, t48, o62) {
  if (o62) {
    e58?.setAttribute(K7.swipeDismiss, ""), t48?.setAttribute(K7.swipeDismiss, "");
    return;
  }
  e58?.removeAttribute(K7.swipeDismiss), t48?.removeAttribute(K7.swipeDismiss);
}
function ar(e58, t48) {
  if (e58) {
    if (t48) {
      e58.setAttribute(K7.swiping, "");
      return;
    }
    e58.removeAttribute(K7.swiping);
  }
}
function St3(e58) {
  return !!e58?.closest(n18);
}
function qn(e58) {
  return !!e58?.closest(Kn3);
}
function cr(e58, t48) {
  let o62 = t48 === "left" || t48 === "right" ? e58.offsetWidth : e58.offsetHeight;
  return Math.max(o62 * 0.5, Rt2);
}
function ur(e58, t48) {
  return e58 instanceof t48.HTMLInputElement && e58.type === "range";
}
function Jn(e58) {
  return h4(e58) ? e58.tagName === "INPUT" || e58.tagName === "TEXTAREA" : false;
}
function Qn(e58, t48) {
  let o62 = h4(e58.anchorNode) ? e58.anchorNode : e58.anchorNode?.parentElement, u37 = h4(e58.focusNode) ? e58.focusNode : e58.focusNode?.parentElement;
  return e58.containsNode(t48, true) || u9(t48, o62) || u9(t48, u37);
}
function pr(e58, t48) {
  let o62 = a12(e58);
  if (!!(o62 && u9(t48, o62)) && Jn(o62)) {
    let { selectionStart: w22, selectionEnd: d31 } = o62;
    if (w22 != null && d31 != null && w22 < d31) return true;
  }
  let p31 = e58.getSelection?.();
  return !p31 || p31.isCollapsed ? false : Qn(p31, t48);
}
function gr(e58, t48) {
  let o62 = e58.composedPath();
  return o62 ? o62.some((u37) => ur(u37, t48)) : ur(f10(e58), t48);
}
function lr(e58) {
  return gr(e58.nativeEvent, i10(e58.currentTarget));
}
function ke(e58, t48) {
  e58.lastX = t48.clientX, e58.lastY = t48.clientY;
}
function Zn(e58, t48, o62) {
  if (e58.preserveNativeCrossAxisScroll) return true;
  if (e58.allowSwipe === true || !e58.hasCrossAxisScrollableContent) return false;
  let u37 = o62 ? t48.clientY - e58.startY : t48.clientX - e58.startX, p31 = o62 ? t48.clientX - e58.startX : t48.clientY - e58.startY, w22 = Math.abs(u37), d31 = Math.abs(p31);
  return d31 < 6 || d31 <= w22 + 2 ? false : (e58.preserveNativeCrossAxisScroll = true, true);
}
function eo2(e58, t48) {
  return t48 === "vertical" ? e58.scrollHeight > e58.clientHeight : e58.scrollWidth > e58.clientWidth;
}
function hr(e58, t48) {
  if (t48 === "vertical") {
    let u37 = Math.max(0, e58.scrollHeight - e58.clientHeight);
    return { offset: e58.scrollTop, max: u37 };
  }
  let o62 = Math.max(0, e58.scrollWidth - e58.clientWidth);
  return { offset: e58.scrollLeft, max: o62 };
}
function to(e58, t48, o62) {
  let { offset: u37, max: p31 } = hr(e58, t48), w22 = Sr(o62, t48);
  return w22 === null ? false : w22 ? u37 <= 0 : u37 >= p31;
}
function ro(e58, t48, o62, u37) {
  let { offset: p31, max: w22 } = hr(e58, t48), d31 = Sr(o62, t48);
  return d31 === null || !(d31 ? u37 > 0 : u37 < 0) ? false : d31 ? p31 <= 0 : p31 >= w22;
}
function Sr(e58, t48) {
  return t48 === "vertical" ? e58 === "down" ? true : e58 === "up" ? false : null : e58 === "right" ? true : e58 === "left" ? false : null;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/field.mjs
import * as d28 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/fieldset/root/FieldsetRootContext.mjs
import * as e47 from "react";
var n53 = e47.createContext({ legendId: void 0, setLegendId: () => {
}, disabled: void 0 });
function r44(o62 = false) {
  let t48 = e47.useContext(n53);
  if (!t48 && !o62) throw new Error(f2(86));
  return t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/labelable-provider.mjs
import * as e48 from "react";
import { jsx as j11 } from "react/jsx-runtime";
var _11 = function(t48) {
  let p31 = r5(), x21 = t48.controlId === void 0 ? p31 : t48.controlId, [i38, L20] = e48.useState(x21), [l19, d31] = e48.useState(t48.labelId), [o62, c40] = e48.useState([]), g20 = u2(() => /* @__PURE__ */ new Map()), { messageIds: u37 } = s28(), f35 = E((r49, m25) => {
    let n61 = g20.current;
    if (m25 === void 0) {
      n61.delete(r49);
      return;
    }
    n61.set(r49, m25), L20((a38) => {
      if (n61.size === 0) return;
      let s54;
      for (let I26 of n61.values()) {
        if (a38 !== void 0 && I26 === a38) return a38;
        s54 === void 0 && (s54 = I26);
      }
      return s54;
    });
  }), b14 = e48.useCallback((r49) => d2({ "aria-describedby": u37.concat(o62).join(" ") || void 0 }, r49), [u37, o62]), C18 = e48.useMemo(() => ({ controlId: i38, registerControlId: f35, labelId: l19, setLabelId: d31, messageIds: o62, setMessageIds: c40, getDescriptionProps: b14 }), [i38, f35, l19, d31, o62, c40, b14]);
  return j11(n27.Provider, { value: C18, children: t48.children });
};

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/field.mjs
import * as A12 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/field/utils/getCombinedFieldValidityData.mjs
function n54(e58, t48) {
  return { ...e58, state: { ...e58.state, valid: !t48 && e58.state.valid } };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/field-register-control/useFieldControlRegistration.mjs
import * as o56 from "react";
function E23(y24) {
  let { commit: p31, invalid: a38, markedDirtyRef: F14, name: c40, setRegisteredFieldId: R27, setValidityData: C18, validityData: l19 } = y24, { formRef: n61 } = n26(), f35 = o56.useRef(null), r49 = o56.useRef(null), m25 = o56.useRef(null), i38 = E(() => {
    let e58 = r49.current;
    if (e58) return e58.getValue ? e58.getValue() : e58.value;
  }), s54 = E(() => {
    let e58 = r49.current;
    if (!e58) return;
    let t48 = e58.value;
    t48 === void 0 && (t48 = i38()), F14.current = true, p31(t48);
  });
  function D14() {
    let e58 = r49.current;
    !e58 || !e58.id || n61.current.fields.set(e58.id, { getValue: i38, name: c40, controlRef: e58.controlRef ?? m25, validityData: n54(l19, a38), validate: s54 });
  }
  function g20(e58 = r49.current?.id) {
    e58 && n61.current.fields.delete(e58);
  }
  function b14() {
    let e58 = r49.current;
    if (!e58) return;
    let t48 = e58.value;
    t48 === void 0 && (t48 = i38()), l19.initialValue === null && t48 !== null && C18((u37) => ({ ...u37, initialValue: t48 }));
  }
  return o2(() => {
    let e58 = r49.current;
    !e58 || !e58.id || n61.current.fields.set(e58.id, { getValue: i38, name: c40, controlRef: e58.controlRef ?? m25, validityData: n54(l19, a38), validate: s54 });
  }, [n61, i38, a38, c40, s54, l19]), o2(() => {
    let e58 = n61.current.fields;
    return () => {
      let t48 = r49.current?.id;
      t48 && e58.delete(t48);
    };
  }, [n61]), E((e58, t48) => {
    if (!t48) {
      f35.current === e58 && (f35.current = null, g20(), r49.current = null, R27(void 0));
      return;
    }
    let u37 = r49.current?.id;
    f35.current = e58, r49.current = t48, R27(t48.id), u37 && u37 !== t48.id && g20(u37), b14(), D14();
  });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/field.mjs
import { jsx as Z11 } from "react/jsx-runtime";
import * as J10 from "react";
import * as _12 from "react";
import { jsx as ce3 } from "react/jsx-runtime";
import * as fe4 from "react";
import * as q12 from "react";
import * as Y12 from "react";
import { jsx as Et3 } from "react/jsx-runtime";
import * as z10 from "react";
import { jsx as be3 } from "react/jsx-runtime";
var xe4 = Object.defineProperty;
var Ee2 = (y24, e58) => {
  for (var i38 in e58) xe4(y24, i38, { get: e58[i38], enumerable: true });
};
var ye4 = {};
Ee2(ye4, { Control: () => ve4, Description: () => me2, Error: () => ue4, Item: () => ge5, Label: () => de4, Root: () => le5, Validity: () => Re5 });
var H12 = Object.keys(s26);
function Le2(y24) {
  if (!y24 || y24.valid || !y24.valueMissing) return false;
  let e58 = false;
  for (let i38 of H12) i38 !== "valid" && (i38 === "valueMissing" && (e58 = y24[i38]), y24[i38] && (e58 = false));
  return e58;
}
function ne7(y24) {
  let { formRef: e58, clearErrors: i38 } = n26(), { setValidityData: I26, validate: N20, validityData: C18, validationDebounceTime: F14, invalid: m25, markedDirtyRef: p31, state: l19, name: t48, shouldValidateOnChange: a38, getRegisteredFieldId: h24 } = y24, { controlId: M20, getDescriptionProps: S18 } = s28(), c40 = p12(), L20 = A12.useRef(null), n61 = E(async (v17, R27 = false) => {
    let o62 = L20.current;
    if (!o62) return;
    function x21(s54, r49 = m25) {
      let u37 = h24() ?? M20;
      if (u37 == null) return;
      let f35 = e58.current.fields.get(u37);
      if (!f35) return;
      let g20 = n54(s54, r49);
      e58.current.fields.set(u37, { ...f35, validityData: g20 });
    }
    if (R27) {
      if (l19.valid !== false) return;
      let s54 = o62.validity;
      if (!s54.valueMissing) {
        let u37 = { value: v17, state: { ...s26, valid: true }, error: "", errors: [], initialValue: C18.initialValue };
        o62.setCustomValidity(""), x21(u37, false), I26(u37);
        return;
      }
      let r49 = H12.reduce((u37, f35) => (u37[f35] = s54[f35], u37), {});
      if (!r49.valid && !Le2(r49)) return;
    }
    function k17(s54) {
      let r49 = H12.reduce((f35, g20) => (f35[g20] = s54.validity[g20], f35), {}), u37 = false;
      for (let f35 of H12) if (f35 !== "valid") {
        if (f35 === "valueMissing" && r49[f35]) u37 = true;
        else if (r49[f35]) return r49;
      }
      return u37 && !p31.current && (r49.valid = true, r49.valueMissing = false), r49;
    }
    c40.clear();
    let b14 = null, E30 = [], D14 = k17(o62), V12, T17 = a38();
    if (o62.validationMessage && !T17) V12 = o62.validationMessage, E30 = [o62.validationMessage];
    else {
      let s54 = Array.from(e58.current.fields.values()).reduce((u37, f35) => (f35.name && (u37[f35.name] = f35.getValue()), u37), {}), r49 = N20(v17, s54);
      typeof r49 == "object" && r49 !== null && "then" in r49 ? b14 = await r49 : b14 = r49, b14 !== null ? (D14.valid = false, D14.customError = true, Array.isArray(b14) ? (E30 = b14, o62.setCustomValidity(b14.join(`
`))) : b14 && (E30 = [b14], o62.setCustomValidity(b14))) : T17 && (o62.setCustomValidity(""), D14.customError = false, o62.validationMessage ? (V12 = o62.validationMessage, E30 = [o62.validationMessage]) : o62.validity.valid && !D14.valid && (D14.valid = true));
    }
    let O14 = { value: v17, state: D14, error: V12 ?? (Array.isArray(b14) ? b14[0] : b14 ?? ""), errors: E30, initialValue: C18.initialValue };
    x21(O14), I26(O14);
  }), P17 = A12.useCallback((v17 = {}) => d2(S18, l19.valid === false ? { "aria-invalid": true } : o7, v17), [S18, l19.valid]), w22 = A12.useCallback((v17 = {}) => d2({ onChange(R27) {
    if (R27.nativeEvent.defaultPrevented) return;
    if (i38(t48), !a38()) {
      n61(R27.currentTarget.value, true);
      return;
    }
    let o62 = R27.currentTarget;
    if (o62.value === "") {
      n61(o62.value);
      return;
    }
    c40.clear(), F14 ? c40.start(F14, () => {
      n61(o62.value);
    }) : n61(o62.value);
  } }, P17(v17)), [P17, i38, t48, c40, n61, F14, a38]);
  return A12.useMemo(() => ({ getValidationProps: P17, getInputValidationProps: w22, inputRef: L20, commit: n61 }), [P17, w22, n61]);
}
var Ue4 = d28.forwardRef(function(e58, i38) {
  let { errors: I26, validationMode: N20, submitAttemptedRef: C18 } = n26(), { render: F14, className: m25, validate: p31, validationDebounceTime: l19 = 0, validationMode: t48 = N20, name: a38, disabled: h24 = false, invalid: M20, dirty: S18, touched: c40, actionsRef: L20, style: n61, ...P17 } = e58, { disabled: w22 } = r44(), v17 = E(p31 || (() => null)), R27 = w22 || h24, [o62, x21] = d28.useState(false), [k17, b14] = d28.useState(false), [E30, D14] = d28.useState(false), [V12, T17] = d28.useState(false), O14 = S18 ?? k17, s54 = c40 ?? o62, r49 = d28.useRef(false), u37 = d28.useRef(void 0), f35 = d28.useCallback(() => u37.current, []), g20 = d28.useCallback((B17) => {
    u37.current = B17;
  }, []), j17 = E((B17) => {
    S18 === void 0 && (B17 && (r49.current = true), b14(B17));
  }), ee7 = E((B17) => {
    c40 === void 0 && x21(B17);
  }), Q16 = E(() => t48 === "onChange" || t48 === "onSubmit" && C18.current), Fe5 = !!a38 && Object.hasOwn(I26, a38) && I26[a38] !== void 0, K14 = M20 === true || Fe5, [U11, X11] = d28.useState({ state: s26, error: "", errors: [], value: null, initialValue: null }), te7 = !K14 && U11.state.valid, G18 = d28.useMemo(() => ({ disabled: R27, touched: s54, dirty: O14, valid: te7, filled: E30, focused: V12 }), [R27, s54, O14, te7, E30, V12]), $9 = ne7({ setValidityData: X11, validate: v17, validityData: U11, validationDebounceTime: l19, invalid: K14, markedDirtyRef: r49, state: G18, name: a38, shouldValidateOnChange: Q16, getRegisteredFieldId: f35 }), re8 = U11.value, ie10 = d28.useCallback(() => {
    r49.current = true, $9.commit(re8);
  }, [$9, re8]), oe10 = E23({ commit: $9.commit, invalid: K14, markedDirtyRef: r49, name: a38, setRegisteredFieldId: g20, setValidityData: X11, validityData: U11 });
  d28.useImperativeHandle(L20, () => ({ validate: ie10 }), [ie10]);
  let Ve7 = d28.useMemo(() => ({ invalid: K14, name: a38, validityData: U11, setValidityData: X11, disabled: R27, touched: s54, setTouched: ee7, dirty: O14, setDirty: j17, filled: E30, setFilled: D14, focused: V12, setFocused: T17, validate: v17, validationMode: t48, validationDebounceTime: l19, shouldValidateOnChange: Q16, state: G18, markedDirtyRef: r49, registerFieldControl: oe10, validation: $9 }), [K14, a38, U11, R27, s54, ee7, O14, j17, E30, D14, V12, T17, v17, t48, l19, Q16, G18, oe10, $9]), Ce7 = J("div", e58, { ref: i38, state: G18, props: P17, stateAttributesMapping: n25 });
  return Z11(u18.Provider, { value: Ve7, children: Ce7 });
});
var le5 = d28.forwardRef(function(e58, i38) {
  return Z11(_11, { children: Z11(Ue4, { ...e58, ref: i38 }) });
});
var de4 = J10.forwardRef(function(e58, i38) {
  let { render: I26, className: N20, style: C18, id: F14, nativeLabel: m25 = true, ...p31 } = e58, l19 = E14(false), { labelId: t48 } = s28(), a38 = J10.useRef(null), h24 = v13({ id: t48 ?? F14, native: m25 });
  return J("label", e58, { ref: [i38, a38], state: l19.state, props: [h24, p31], stateAttributesMapping: n25 });
});
var rt4 = { ...n25, ...i7 };
var ue4 = _12.forwardRef(function(e58, i38) {
  let { render: I26, id: N20, className: C18, match: F14, style: m25, ...p31 } = e58, l19 = r5(N20), { validityData: t48, state: a38, name: h24 } = E14(false), { setMessageIds: M20 } = s28(), { errors: S18 } = n26(), c40 = h24 ? S18[h24] : null, L20 = typeof F14 == "string", n61 = false;
  F14 === true ? n61 = true : L20 ? n61 = !!t48.state[F14] : n61 = !!c40 || t48.state.valid === false;
  let { mounted: P17, transitionStatus: w22, setMounted: v17 } = g2(n61);
  o2(() => {
    if (!(!n61 || !l19)) return M20((s54) => s54.concat(l19)), () => {
      M20((s54) => s54.filter((r49) => r49 !== l19));
    };
  }, [n61, l19, M20]);
  let R27 = _12.useRef(null), [o62, x21] = _12.useState(null), [k17, b14] = _12.useState(null), E30 = t48.errors.length > 1 ? ce3("ul", { children: t48.errors.map((s54) => ce3("li", { children: s54 }, s54)) }) : t48.error, D14 = L20 ? E30 : c40 || E30, V12 = t48.error;
  c40 != null ? V12 = Array.isArray(c40) ? JSON.stringify(c40) : c40 : t48.errors.length > 1 && (V12 = JSON.stringify(t48.errors)), n61 && V12 !== k17 && (b14(V12), x21(D14)), p10({ open: n61, ref: R27, onComplete() {
    n61 || v17(false);
  } });
  let T17 = { ...a38, transitionStatus: w22 }, O14 = J("div", e58, { ref: [i38, R27], state: T17, props: [{ id: l19, children: n61 ? D14 : o62 }, p31], stateAttributesMapping: rt4, enabled: P17 });
  return P17 ? O14 : null;
});
var me2 = fe4.forwardRef(function(e58, i38) {
  let { render: I26, id: N20, className: C18, style: F14, ...m25 } = e58, p31 = r5(N20), l19 = E14(false), { setMessageIds: t48 } = s28();
  return o2(() => {
    if (p31) return t48((h24) => h24.concat(p31)), () => {
      t48((h24) => h24.filter((M20) => M20 !== p31));
    };
  }, [p31, t48]), J("p", e58, { ref: i38, state: l19.state, props: [{ id: p31 }, m25], stateAttributesMapping: n25 });
});
var ve4 = q12.forwardRef(function(e58, i38) {
  let { render: I26, className: N20, id: C18, name: F14, value: m25, disabled: p31 = false, onValueChange: l19, defaultValue: t48, autoFocus: a38 = false, style: h24, ...M20 } = e58, { state: S18, name: c40, disabled: L20, setTouched: n61, setDirty: P17, validityData: w22, setFocused: v17, setFilled: R27, validationMode: o62, validation: x21 } = E14(), k17 = L20 || p31, b14 = c40 ?? F14, E30 = { ...S18, disabled: k17 }, { labelId: D14 } = s28(), V12 = F6({ id: C18 });
  o2(() => {
    let g20 = m25 != null;
    x21.inputRef.current?.value || g20 && m25 !== "" ? R27(true) : g20 && m25 === "" && R27(false);
  }, [x21.inputRef, R27, m25]);
  let T17 = q12.useRef(null);
  o2(() => {
    a38 && T17.current === a12(n13(T17.current)) && v17(true);
  }, [a38, v17]);
  let [O14] = m({ controlled: m25, default: t48, name: "FieldControl", state: "value" }), s54 = m25 !== void 0, r49 = s54 ? O14 : void 0, u37 = E(() => x21.inputRef.current?.value);
  return d21(x21.inputRef, V12, r49, u37), J("input", e58, { ref: [i38, T17], state: E30, props: [{ id: V12, disabled: k17, name: b14, ref: x21.inputRef, "aria-labelledby": D14, autoFocus: a38, ...s54 ? { value: r49 } : { defaultValue: t48 }, onChange(g20) {
    let j17 = g20.currentTarget.value;
    l19?.(j17, u4(s4.none, g20.nativeEvent)), P17(j17 !== w22.initialValue), R27(j17 !== "");
  }, onFocus() {
    v17(true);
  }, onBlur(g20) {
    n61(true), v17(false), o62 === "onBlur" && x21.commit(g20.currentTarget.value);
  }, onKeyDown(g20) {
    g20.currentTarget.tagName === "INPUT" && g20.key === "Enter" && (n61(true), x21.commit(g20.currentTarget.value));
  } }, x21.getInputValidationProps(), M20], stateAttributesMapping: n25 });
});
var Re5 = function(e58) {
  let { children: i38 } = e58, { validityData: I26, invalid: N20 } = E14(false), C18 = Y12.useMemo(() => n54(I26, N20), [I26, N20]), F14 = C18.state.valid === false, { transitionStatus: m25 } = g2(F14), p31 = Y12.useMemo(() => ({ ...C18, validity: C18.state, transitionStatus: m25 }), [C18, m25]);
  return Et3(Y12.Fragment, { children: i38(p31) });
};
var ge5 = z10.forwardRef(function(e58, i38) {
  let { render: I26, className: N20, style: C18, disabled: F14 = false, ...m25 } = e58, { state: p31, disabled: l19 } = E14(false), t48 = l19 || F14, a38 = s35(), M20 = a38?.allValues !== void 0 ? a38?.parent.id : void 0, S18 = z10.useMemo(() => ({ disabled: t48 }), [t48]), c40 = J("div", e58, { ref: i38, state: p31, props: m25, stateAttributesMapping: n25 });
  return be3(_11, { controlId: M20, children: be3(t26.Provider, { value: S18, children: c40 }) });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/fieldset.mjs
import * as s48 from "react";
import { jsx as y16 } from "react/jsx-runtime";
import * as f31 from "react";
var g18 = Object.defineProperty;
var L14 = (i38, e58) => {
  for (var t48 in e58) g18(i38, t48, { get: e58[t48], enumerable: true });
};
var u32 = {};
L14(u32, { Legend: () => p27, Root: () => c35 });
var c35 = s48.forwardRef(function(e58, t48) {
  let { render: R27, className: F14, style: x21, disabled: r49 = false, ...l19 } = e58, [d31, o62] = s48.useState(void 0), a38 = J("fieldset", e58, { ref: t48, state: { disabled: r49 }, props: [{ "aria-labelledby": d31 }, l19] }), m25 = s48.useMemo(() => ({ legendId: d31, setLegendId: o62, disabled: r49 }), [d31, o62, r49]);
  return y16(n53.Provider, { value: m25, children: a38 });
});
var p27 = f31.forwardRef(function(e58, t48) {
  let { render: R27, className: F14, style: x21, id: r49, ...l19 } = e58, { disabled: d31, setLegendId: o62 } = r44(), n61 = r5(r49);
  return o2(() => (o62(n61), () => {
    o62(void 0);
  }), [o62, n61]), J("div", e58, { state: { disabled: d31 ?? false }, ref: t48, props: [{ id: n61 }, l19] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/form.mjs
import * as r45 from "react";
import { jsx as P12 } from "react/jsx-runtime";
var w16 = r45.forwardRef(function(u37, h24) {
  let { render: T17, className: _19, validationMode: m25 = "onSubmit", errors: i38, onSubmit: x21, onFormSubmit: d31, actionsRef: S18, style: j17, ...V12 } = u37, s54 = r45.useRef({ fields: /* @__PURE__ */ new Map() }), l19 = r45.useRef(false), v17 = r45.useRef(false), f35 = E((e58) => {
    e58 && (e58.focus(), e58.tagName === "INPUT" && e58.select());
  }), [n61, p31] = r45.useState(i38);
  u16(i38, () => {
    p31(i38);
  }), r45.useEffect(() => {
    if (!l19.current) return;
    l19.current = false;
    let e58 = Array.from(s54.current.fields.values()).filter((t48) => t48.validityData.state.valid === false);
    e58.length && f35(e58[0].controlRef.current);
  }, [n61, f35]);
  let R27 = r45.useCallback((e58) => {
    let t48 = Array.from(s54.current.fields.values());
    if (e58) {
      let a38 = t48.find((o62) => o62.name === e58);
      a38 && a38.validate();
    } else t48.forEach((a38) => {
      a38.validate();
    });
  }, []);
  r45.useImperativeHandle(S18, () => ({ validate: R27 }), [R27]);
  let A17 = J("form", u37, { ref: h24, props: [{ noValidate: true, onSubmit(e58) {
    v17.current = true;
    let t48 = Array.from(s54.current.fields.values());
    t48.forEach((o62) => {
      o62.validate();
    }), t48 = Array.from(s54.current.fields.values());
    let a38 = t48.filter((o62) => !o62.validityData.state.valid);
    if (a38.length) e58.preventDefault(), f35(a38[0].controlRef.current);
    else if (l19.current = true, x21?.(e58), d31) {
      e58.preventDefault();
      let o62 = t48.reduce((F14, c40) => (c40.name && (F14[c40.name] = c40.getValue()), F14), {});
      d31(o62, d3(s4.none, e58.nativeEvent));
    }
  } }, V12] }), E30 = E((e58) => {
    if (e58 && n61 && o7.hasOwnProperty.call(n61, e58)) {
      let t48 = { ...n61 };
      delete t48[e58], p31(t48);
    }
  }), C18 = r45.useMemo(() => ({ formRef: s54, validationMode: m25, errors: n61 ?? o7, clearErrors: E30, submitAttemptedRef: v17 }), [s54, m25, n61, E30]);
  return P12(o34.Provider, { value: C18, children: A17 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/input.mjs
import * as t40 from "react";
import { jsx as n55 } from "react/jsx-runtime";
var p28 = t40.forwardRef(function(o62, r49) {
  return n55(ye4.Control, { ref: r49, ...o62 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/menubar.mjs
import * as e49 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/root/CompositeRoot.mjs
import * as h20 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/root/useCompositeRoot.mjs
import * as c36 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/constants.mjs
var t41 = "data-composite-item-active";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/root/useCompositeRoot.mjs
var Oe = [];
function He2(A17) {
  let { itemSizes: p31, cols: a38 = 1, loopFocus: K14 = true, onLoop: f35, dense: D14 = false, orientation: i38 = "both", direction: S18, highlightedIndex: U11, onHighlightedIndexChange: j17, rootRef: J18, enableHomeAndEndKeys: m25 = false, stopEventPropagation: N20 = false, disabledIndices: l19, modifierKeys: G18 = Oe } = A17, [Q16, $9] = c36.useState(0), M20 = a38 > 1, E30 = c36.useRef(null), W14 = d(E30, J18), t48 = c36.useRef([]), P17 = c36.useRef(false), s54 = U11 ?? Q16, y24 = E((e58, o62 = false) => {
    if ((j17 ?? $9)(e58), o62) {
      let r49 = t48.current[e58];
      D5(E30.current, r49, S18, i38);
    }
  }), F14 = E((e58) => {
    if (e58.size === 0 || P17.current) return;
    P17.current = true;
    let o62 = Array.from(e58.keys()), r49 = o62.find((g20) => g20?.hasAttribute(t41)) ?? null, I26 = r49 ? o62.indexOf(r49) : -1;
    I26 !== -1 && y24(I26), D5(E30.current, r49, S18, i38);
  }), V12 = E((e58, o62, r49) => f35 ? f35?.(e58, o62, r49, t48) : r49), T17 = c36.useMemo(() => ({ "aria-orientation": i38 === "both" ? void 0 : i38, ref: W14, onFocus(e58) {
    let o62 = E30.current, r49 = f10(e58.nativeEvent);
    !o62 || r49 == null || !K2(r49) || r49.setSelectionRange(0, r49.value.length ?? 0);
  }, onKeyDown(e58) {
    let o62 = m25 ? Y2 : S4;
    if (!o62.has(e58.key) || be4(e58, G18) || !E30.current) return;
    let I26 = S18 === "rtl", g20 = I26 ? T3 : L5, ee7 = { horizontal: g20, vertical: R6, both: g20 }[i38], _19 = I26 ? L5 : T3, te7 = { horizontal: _19, vertical: h7, both: _19 }[i38], R27 = f10(e58.nativeEvent);
    if (R27 != null && K2(R27) && !i9(R27)) {
      let h24 = R27.selectionStart, d31 = R27.selectionEnd, L20 = R27.value ?? "";
      if (h24 == null || e58.shiftKey || h24 !== d31 || e58.key !== te7 && h24 < L20.length || e58.key !== ee7 && h24 > 0) return;
    }
    let n61 = s54, O14 = I6(t48, l19), b14 = v4(t48, l19);
    if (M20) {
      let h24 = p31 || Array.from({ length: t48.current.length }, () => ({ width: 1, height: 1 })), d31 = rt(h24, a38, D14), L20 = d31.findIndex((u37) => u37 != null && !B3(t48.current, u37, l19)), re8 = d31.reduce((u37, x21, oe10) => x21 != null && !B3(t48.current, x21, l19) ? oe10 : u37, -1);
      n61 = d31[tt(d31.map((u37) => u37 != null ? t48.current[u37] : null), { event: e58, orientation: i38, loopFocus: K14, onLoop: V12, cols: a38, disabledIndices: ft([...l19 || t48.current.map((u37, x21) => B3(t48.current, x21) ? x21 : void 0), void 0], d31), minIndex: L20, maxIndex: re8, prevIndex: it(s54 > b14 ? O14 : s54, h24, d31, a38, e58.key === R6 ? "bl" : e58.key === L5 ? "tr" : "tl"), rtl: I26 })];
    }
    let v17 = { horizontal: [g20], vertical: [R6], both: [g20, R6] }[i38], C18 = { horizontal: [_19], vertical: [h7], both: [_19, h7] }[i38], ne12 = M20 ? o62 : { horizontal: m25 ? N4 : M2, vertical: m25 ? F3 : E8, both: o62 }[i38];
    m25 && (e58.key === n14 ? n61 = O14 : e58.key === d13 && (n61 = b14)), n61 === s54 && (v17.includes(e58.key) || C18.includes(e58.key)) && (K14 && n61 === b14 && v17.includes(e58.key) ? (n61 = O14, f35 && (n61 = f35(e58, s54, n61, t48))) : K14 && n61 === O14 && C18.includes(e58.key) ? (n61 = b14, f35 && (n61 = f35(e58, s54, n61, t48))) : n61 = C3(t48.current, { startingIndex: n61, decrement: C18.includes(e58.key), disabledIndices: l19 })), n61 !== s54 && !j4(t48.current, n61) && (N20 && e58.stopPropagation(), ne12.has(e58.key) && e58.preventDefault(), y24(n61, true), queueMicrotask(() => {
      t48.current[n61]?.focus();
    }));
  } }), [a38, D14, S18, l19, t48, m25, s54, M20, p31, K14, f35, V12, W14, G18, y24, i38, N20]);
  return c36.useMemo(() => ({ props: T17, highlightedIndex: s54, onHighlightedIndexChange: y24, elementsRef: t48, disabledIndices: l19, onMapChange: F14, relayKeyboardEvent: T17.onKeyDown }), [T17, s54, y24, t48, l19, F14]);
}
function be4(A17, p31) {
  for (let a38 of B5.values()) if (!p31.includes(a38) && A17.getModifierState(a38)) return true;
  return false;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/internals/composite/root/CompositeRoot.mjs
import { jsx as a29 } from "react/jsx-runtime";
function X5(e58) {
  let { render: N20, className: S18, style: U11, refs: p31 = t5, props: d31 = t5, state: g20 = o7, stateAttributesMapping: m25, highlightedIndex: l19, onHighlightedIndexChange: c40, orientation: f35, dense: C18, itemSizes: u37, loopFocus: x21, onLoop: R27, cols: I26, enableHomeAndEndKeys: M20, onMapChange: P17, stopEventPropagation: E30 = true, rootRef: v17, disabledIndices: H16, modifierKeys: y24, highlightItemOnHover: o62 = false, tag: b14 = "div", ...A17 } = e58, K14 = o4(), { props: T17, highlightedIndex: t48, onHighlightedIndexChange: n61, elementsRef: Y18, onMapChange: _19, relayKeyboardEvent: i38 } = He2({ itemSizes: u37, cols: I26, loopFocus: x21, onLoop: R27, dense: C18, orientation: f35, highlightedIndex: l19, onHighlightedIndexChange: c40, rootRef: v17, stopEventPropagation: E30, enableHomeAndEndKeys: M20, direction: K14, disabledIndices: H16, modifierKeys: y24 }), j17 = J(b14, e58, { state: g20, ref: p31, props: [T17, ...d31, A17], stateAttributesMapping: m25 }), L20 = h20.useMemo(() => ({ highlightedIndex: t48, onHighlightedIndexChange: n61, highlightItemOnHover: o62, relayKeyboardEvent: i38 }), [t48, n61, o62, i38]);
  return a29(n9.Provider, { value: L20, children: a29(k, { elementsRef: Y18, onMapChange: (r49) => {
    P17?.(r49), _19(r49);
  }, children: j17 }) });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/menubar.mjs
import { jsx as s49 } from "react/jsx-runtime";
var d29 = function(n61) {
  return n61.modal = "data-modal", n61.orientation = "data-orientation", n61.hasSubmenuOpen = "data-has-submenu-open", n61;
}({});
var T11 = { hasSubmenuOpen(n61) {
  return n61 ? { [d29.hasSubmenuOpen]: "" } : null;
} };
var j12 = e49.forwardRef(function(r49, a38) {
  let { orientation: t48 = "horizontal", loopFocus: u37 = true, render: o62, className: b14, modal: c40 = true, disabled: l19 = false, id: h24, style: g20, ...R27 } = r49, [p31, f35] = e49.useState(null), [i38, S18] = e49.useState(false), m25 = r5(h24), M20 = { orientation: t48, modal: c40, hasSubmenuOpen: i38 }, O14 = e49.useRef(null), x21 = e49.useRef(false), N20 = e49.useMemo(() => ({ contentElement: p31, setContentElement: f35, setHasSubmenuOpen: S18, hasSubmenuOpen: i38, modal: c40, disabled: l19, orientation: t48, allowMouseUpTriggerRef: x21, rootId: m25 }), [p31, i38, c40, l19, t48, m25]);
  return s49(o50.Provider, { value: N20, children: s49(I10, { children: s49(w17, { children: s49(X5, { render: o62, className: b14, style: g20, state: M20, stateAttributesMapping: T11, refs: [a38, f35, O14], props: [{ role: "menubar", id: m25 }, R27], orientation: t48, loopFocus: u37, highlightItemOnHover: i38 }) }) }) });
});
function w17(n61) {
  let r49 = T5(), { events: a38 } = f18(), t48 = s41();
  return e49.useEffect(() => {
    function u37(o62) {
      !o62.nodeId || o62.parentNodeId !== r49 || (o62.open ? t48.hasSubmenuOpen || t48.setHasSubmenuOpen(true) : o62.reason !== "sibling-open" && o62.reason !== "list-navigation" && t48.setHasSubmenuOpen(false));
    }
    return a38.on("menuopenchange", u37), () => {
      a38.off("menuopenchange", u37);
    };
  }, [a38, r49, t48]), s49(v6, { id: r49, children: n61.children });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/meter.mjs
import * as s50 from "react";
import * as d30 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/formatNumber.mjs
var u33 = /* @__PURE__ */ new Map();
function m17(t48, r49) {
  let n61 = JSON.stringify({ locale: t48, options: r49 }), o62 = u33.get(n61);
  if (o62) return o62;
  let i38 = new Intl.NumberFormat(t48, r49);
  return u33.set(n61, i38), i38;
}
function e50(t48, r49, n61) {
  return t48 == null ? "" : m17(r49, n61).format(t48);
}
function c37(t48, r49, n61) {
  return e50(t48, r49, { ...n61, maximumFractionDigits: 20 });
}
function f32(t48, r49, n61) {
  return t48 == null ? "" : n61 ? e50(t48, r49, n61) : e50(t48 / 100, r49, { style: "percent" });
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/meter.mjs
import { jsx as x17, jsxs as B12 } from "react/jsx-runtime";
import * as v14 from "react";
import * as V7 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/valueToPercent.mjs
function n56(r49, e58, t48) {
  return (r49 - e58) * 100 / (t48 - e58);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/meter.mjs
import * as h21 from "react";
import * as I22 from "react";
var k12 = Object.defineProperty;
var P13 = (n61, e58) => {
  for (var r49 in e58) k12(n61, r49, { get: e58[r49], enumerable: true });
};
var w18 = {};
P13(w18, { Indicator: () => y17, Label: () => C13, Root: () => N13, Track: () => E24, Value: () => b10 });
var R24 = d30.createContext(void 0);
function m18() {
  let n61 = d30.useContext(R24);
  if (n61 === void 0) throw new Error(f2(38));
  return n61;
}
var N13 = s50.forwardRef(function(e58, r49) {
  let { format: c40, getAriaValueText: l19, locale: i38, max: a38 = 100, min: o62 = 0, value: t48, render: p31, className: G18, children: _19, style: J18, ...L20 } = e58, [T17, M20] = s50.useState(), u37 = f32(t48, i38, c40), f35 = `${t48}%`;
  l19 ? f35 = l19(u37, t48) : c40 && (f35 = u37);
  let g20 = { "aria-labelledby": T17, "aria-valuemax": a38, "aria-valuemin": o62, "aria-valuenow": t48, "aria-valuetext": f35, role: "meter", children: B12(s50.Fragment, { children: [_19, x17("span", { role: "presentation", style: e8, children: "x" })] }) }, D14 = s50.useMemo(() => ({ formattedValue: u37, max: a38, min: o62, setLabelId: M20, value: t48 }), [u37, a38, o62, M20, t48]), O14 = J("div", e58, { ref: r49, props: [g20, L20] });
  return x17(R24.Provider, { value: D14, children: O14 });
});
var E24 = v14.forwardRef(function(e58, r49) {
  let { render: c40, className: l19, style: i38, ...a38 } = e58;
  return J("div", e58, { ref: r49, props: a38 });
});
var y17 = V7.forwardRef(function(e58, r49) {
  let { render: c40, className: l19, style: i38, ...a38 } = e58, o62 = m18(), t48 = n56(o62.value, o62.min, o62.max);
  return J("div", e58, { ref: r49, props: [{ style: { insetInlineStart: 0, height: "inherit", width: `${t48}%` } }, a38] });
});
var b10 = h21.forwardRef(function(e58, r49) {
  let { className: c40, render: l19, children: i38, style: a38, ...o62 } = e58, { value: t48, formattedValue: p31 } = m18();
  return J("span", e58, { ref: r49, props: [{ "aria-hidden": true, children: typeof i38 == "function" ? i38(p31, t48) : (p31 || t48) ?? "" }, o62] });
});
var C13 = I22.forwardRef(function(e58, r49) {
  let { render: c40, className: l19, style: i38, id: a38, ...o62 } = e58, { setLabelId: t48 } = m18(), p31 = f28(a38, t48);
  return J("span", e58, { ref: r49, props: [{ id: p31, role: "presentation" }, o62] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/navigation-menu.mjs
import * as C14 from "react";
import * as me3 from "react";
import { jsx as xe5 } from "react/jsx-runtime";
import * as Ve3 from "react";
import * as Ae4 from "react";
import { jsx as Qe3 } from "react/jsx-runtime";
import * as ke2 from "react";
import * as Fe2 from "react";
import { jsx as Wo } from "react/jsx-runtime";
import * as ae8 from "react";
import * as wt3 from "react-dom";
import { jsx as tt5 } from "react/jsx-runtime";
import * as M12 from "react";
import * as je3 from "react-dom";
import { jsx as Le3, jsxs as At2 } from "react/jsx-runtime";
import * as Ht2 from "react";
import * as We3 from "react";
import { jsx as kt3 } from "react/jsx-runtime";
import * as Z12 from "react";
import * as Bt3 from "react-dom";
import * as $e2 from "react";
import { jsx as Gn2 } from "react/jsx-runtime";
import * as Ue5 from "react";
import { jsx as ye5, jsxs as or2 } from "react/jsx-runtime";
import * as Gt2 from "react";
import * as qt3 from "react";
import * as Kt2 from "react";
import * as eo3 from "react";
import { jsx as Nr2 } from "react/jsx-runtime";
import * as oo from "react";
var Ro = Object.defineProperty;
var No2 = (n61, o62) => {
  for (var i38 in o62) Ro(n61, i38, { get: o62[i38], enumerable: true });
};
var ro2 = {};
No2(ro2, { Arrow: () => Jt3, Backdrop: () => Yt3, Content: () => It3, Icon: () => no, Item: () => yt4, Link: () => to2, List: () => Ct3, Popup: () => Xt3, Portal: () => zt, Positioner: () => Lt4, Root: () => Mt3, Trigger: () => Vt3, Viewport: () => Ut });
var Je2 = me3.createContext(void 0);
function E25(n61) {
  let o62 = me3.useContext(Je2);
  if (o62 === void 0 && !n61) throw new Error(f2(41));
  return o62;
}
var Ze5 = me3.createContext(void 0);
function J11() {
  return me3.useContext(Ze5);
}
var A13 = function(n61) {
  return n61.popupWidth = "--popup-width", n61.popupHeight = "--popup-height", n61;
}({});
var F11 = function(n61) {
  return n61.availableWidth = "--available-width", n61.availableHeight = "--available-height", n61.anchorWidth = "--anchor-width", n61.anchorHeight = "--anchor-height", n61.transformOrigin = "--transform-origin", n61.positionerWidth = "--positioner-width", n61.positionerHeight = "--positioner-height", n61;
}({});
var So = /* @__PURE__ */ new Set([s4.triggerHover, s4.outsidePress, s4.focusOut]);
function Do(n61, o62) {
  let { width: i38, height: u37 } = g17(n61);
  i38 === 0 || u37 === 0 || (n61.style.setProperty(A13.popupWidth, `${i38}px`), n61.style.setProperty(A13.popupHeight, `${u37}px`), o62.style.setProperty(F11.positionerWidth, `${i38}px`), o62.style.setProperty(F11.positionerHeight, `${u37}px`));
}
var Mt3 = C14.forwardRef(function(o62, i38) {
  let { defaultValue: u37 = null, value: R27, onValueChange: l19, actionsRef: p31, delay: d31 = 50, closeDelay: f35 = 50, orientation: s54 = "horizontal", onOpenChangeComplete: g20 } = o62, c40 = d15() != null, m25 = E25(true), [r49, w22] = m({ controlled: R27, default: u37, name: "NavigationMenu", state: "value" }), v17 = r49 != null, e58 = C14.useRef(void 0), N20 = C14.useRef(null), [y24, z17] = C14.useState(null), [b14, D14] = C14.useState(null), [O14, q15] = C14.useState(null), [k17, I26] = C14.useState(null), [T17, B17] = C14.useState(null), [W14, _19] = C14.useState(void 0), [X11, H16] = C14.useState(false), x21 = C14.useRef(null), oe10 = C14.useRef(null), Q16 = C14.useRef(null), Re8 = C14.useRef(null), Ne7 = C14.useRef(null), $9 = C14.useRef(null), K14 = C14.useRef({ abortController: null, owner: null }), { mounted: U11, setMounted: ee7, transitionStatus: V12 } = g2(v17);
  C14.useEffect(() => {
    H16(false);
  }, [r49]);
  let G18 = E((L20, j17) => {
    L20 || (e58.current = j17.reason, B17(null), _19(void 0), y24 && b14 && Do(b14, y24)), L20 !== r49 && l19?.(L20, j17), !j17.isCanceled && (w22(L20), c40 && !L20 && j17.reason === s4.linkPress && m25 && m25.setValue(null, j17));
  }), Pe6 = E(() => {
    let L20 = n13(N20.current), j17 = a12(L20);
    !(e58.current && So.has(e58.current)) && g4(x21.current) && (j17 === n13(b14).body || u9(b14, j17)) && b14 && (x21.current.focus({ preventScroll: true }), x21.current = void 0), ee7(false), g20?.(false), B17(null), _19(void 0), oe10.current = null, e58.current = void 0;
  });
  p10({ enabled: !p31, open: v17, ref: { current: b14 }, onComplete() {
    v17 || Pe6();
  } }), p10({ enabled: !p31, open: v17, ref: { current: k17 }, onComplete() {
    v17 || Pe6();
  } });
  let Ge7 = C14.useMemo(() => ({ open: v17, value: r49, setValue: G18, mounted: U11, transitionStatus: V12, positionerElement: y24, setPositionerElement: z17, popupElement: b14, setPopupElement: D14, viewportElement: O14, setViewportElement: q15, viewportTargetElement: k17, setViewportTargetElement: I26, activationDirection: T17, setActivationDirection: B17, floatingRootContext: W14, setFloatingRootContext: _19, currentContentRef: oe10, nested: c40, rootRef: N20, beforeInsideRef: Q16, afterInsideRef: Re8, beforeOutsideRef: Ne7, afterOutsideRef: $9, prevTriggerElementRef: x21, popupAutoSizeResetRef: K14, delay: d31, closeDelay: f35, orientation: s54, viewportInert: X11, setViewportInert: H16 }), [v17, r49, G18, U11, V12, y24, b14, O14, k17, T17, W14, c40, d31, f35, s54, X11]), he6 = xe5(Je2.Provider, { value: Ge7, children: xe5(Ao2, { componentProps: o62, forwardedRef: i38, children: o62.children }) });
  return c40 ? he6 : xe5(I10, { children: he6 });
});
function Ao2(n61) {
  let { className: o62, render: i38, defaultValue: u37, value: R27, onValueChange: l19, actionsRef: p31, delay: d31, closeDelay: f35, orientation: s54, onOpenChangeComplete: g20, style: c40, ...m25 } = n61.componentProps, r49 = T5(), { rootRef: w22, nested: v17, open: e58 } = E25(), N20 = { open: e58, nested: v17 }, y24 = J(v17 ? "div" : "nav", n61.componentProps, { state: N20, ref: [n61.forwardedRef, w22], props: m25 });
  return xe5(Ze5.Provider, { value: r49, children: xe5(v6, { id: r49, children: y24 }) });
}
var De3 = "data-base-ui-navigation-menu-trigger";
var _e = Ae4.createContext(void 0);
function Et4() {
  return Ae4.useContext(_e);
}
var Ct3 = Ve3.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, ...p31 } = o62, d31 = J11(), { orientation: f35, open: s54, floatingRootContext: g20, positionerElement: c40, value: m25, closeDelay: r49, viewportElement: w22, nested: v17 } = E25(), e58 = Ve3.useMemo(() => r15(), []), N20 = g20 || e58, y24 = c40 ? true : !m25;
  Ps(N20, { enabled: !!g20 && (c40 || w22 ? true : !m25), closeDelay: r49, nodeId: d31 });
  let b14 = zo(N20, { enabled: y24, outsidePressEvent: "intentional", outsidePress(T17) {
    return f10(T17)?.closest(`[${De3}]`) === null;
  } }), D14 = g20 ? b14 : void 0, O14 = { open: s54 }, q15 = v17 ? o7 : { onKeyDown(T17) {
    (f35 === "horizontal" && (T17.key === "ArrowLeft" || T17.key === "ArrowRight") || f35 === "vertical" && (T17.key === "ArrowUp" || T17.key === "ArrowDown")) && T17.stopPropagation();
  } }, k17 = [D14?.floating || o7, q15, { "aria-orientation": void 0 }, p31], I26 = J("ul", o62, { state: O14, ref: i38, props: k17, enabled: v17 });
  return v17 ? Qe3(_e.Provider, { value: D14, children: I26 }) : Qe3(_e.Provider, { value: D14, children: Qe3(X5, { render: u37, className: R27, style: l19, state: O14, refs: [i38], props: k17, loopFocus: false, orientation: f35, tag: "ul" }) });
});
var et4 = Fe2.createContext(void 0);
function de5() {
  let n61 = Fe2.useContext(et4);
  if (!n61) throw new Error(f2(39));
  return n61;
}
var yt4 = ke2.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, value: p31, ...d31 } = o62, f35 = r5(), s54 = p31 ?? f35, g20 = J("li", o62, { ref: i38, props: d31 }), c40 = ke2.useMemo(() => ({ value: s54 }), [s54]);
  return Wo(et4.Provider, { value: c40, children: g20 });
});
var bt3 = { ...g11, ...i7, activationDirection(n61) {
  return n61 ? { "data-activation-direction": n61 } : null;
} };
var It3 = ae8.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, keepMounted: p31 = false, ...d31 } = o62, { mounted: f35, viewportElement: s54, value: g20, activationDirection: c40, currentContentRef: m25, viewportTargetElement: r49 } = E25(), { value: w22 } = de5(), v17 = J11(), e58 = f35 && g20 === w22, N20 = ae8.useRef(null), [y24, z17] = ae8.useState(false), [b14, D14] = ae8.useState(false), { mounted: O14, setMounted: q15, transitionStatus: k17 } = g2(e58);
  O14 && !f35 && q15(false), p10({ ref: N20, open: e58, onComplete() {
    e58 || q15(false);
  } }), o2(() => {
    e58 && N20.current && (m25.current = N20.current);
  }, [e58, m25]);
  let I26 = { open: e58, transitionStatus: k17, activationDirection: c40 }, T17 = E((x21) => {
    x21 && e58 && (m25.current = x21);
  }), B17 = { onFocus(x21) {
    f10(x21.nativeEvent)?.hasAttribute("data-base-ui-focus-guard") || D14(true);
  }, onBlur(x21) {
    u9(x21.currentTarget, x21.relatedTarget) || D14(false);
  } }, W14 = !e58 && O14 ? { style: { position: "absolute", top: 0, left: 0 }, inert: s22(!b14), ...B17 } : B17, _19 = r49 || s54, X11 = p31 && !O14, H16 = p31 && !_19 && !y24;
  return p31 && _19 && !y24 && z17(true), H16 ? tt5(X5, { render: u37, className: R27, style: l19, state: I26, refs: [i38], props: [W14, { hidden: true }, d31], stateAttributesMapping: bt3 }) : !_19 || !O14 && !p31 ? null : wt3.createPortal(tt5(v6, { id: v17, children: tt5(X5, { render: u37, className: R27, style: l19, state: I26, refs: [i38, N20, T17], props: [W14, X11 ? { hidden: true } : o7, d31], stateAttributesMapping: bt3 }) }), _19);
});
function He3({ currentTarget: n61, relatedTarget: o62 }, i38) {
  let { popupElement: u37, rootRef: R27, tree: l19, nodeId: p31 } = i38, d31 = l19 ? o14(l19.nodesRef.current, p31).some((f35) => u9(f35.context?.elements.floating, o62)) : [];
  return u37 ? !u9(u37, n61) && !u9(u37, o62) && !u9(R27.current, o62) && !d31 && !(u9(u37, o62) && o62?.hasAttribute("data-base-ui-focus-guard")) : !u9(R27.current, o62) && !d31;
}
var _t4 = { width: 0, height: 0 };
var Vt3 = M12.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, nativeButton: p31 = true, disabled: d31, ...f35 } = o62, { value: s54, setValue: g20, mounted: c40, open: m25, positionerElement: r49, setActivationDirection: w22, setFloatingRootContext: v17, popupElement: e58, viewportElement: N20, transitionStatus: y24, rootRef: z17, beforeOutsideRef: b14, afterOutsideRef: D14, afterInsideRef: O14, beforeInsideRef: q15, prevTriggerElementRef: k17, popupAutoSizeResetRef: I26, currentContentRef: T17, delay: B17, closeDelay: W14, orientation: _19, setViewportInert: X11, nested: H16 } = E25(), { value: x21 } = de5(), oe10 = J11(), Q16 = f18(), Re8 = Et4(), Ne7 = o4(), $9 = p12(), K14 = R2(), U11 = R2(), ee7 = R2(), V12 = R2(), [G18, Pe6] = M12.useState(null), [Ge7, he6] = M12.useState(true), [L20, j17] = M12.useState(""), le9 = M12.useRef(null), be8 = M12.useRef(false), Y18 = M12.useRef(_t4), we7 = M12.useRef(false), S18 = m25 && s54 === x21, Ie7 = I8(S18), st7 = r49 ? true : !s54, ie10 = r49 || N20, io2 = ie10 ? true : !s54, so3 = y7(e58, false, false), ao3 = M12.useCallback((t48) => {
    le9.current = t48, Pe6(t48);
  }, []), ne12 = E((t48 = false) => {
    !t48 && I26.current.owner !== x21 || (I26.current.abortController?.abort(), I26.current.abortController = null, I26.current.owner = null);
  });
  o2(() => {
    S18 || (U11.cancel(), V12.cancel(), ne12());
  }, [S18, U11, V12, ne12]);
  function at8() {
    e58 && (e58.style.setProperty(A13.popupWidth, "auto"), e58.style.setProperty(A13.popupHeight, "auto"));
  }
  function Ye6() {
    !e58 || !r49 || (e58.style.removeProperty(A13.popupWidth), e58.style.removeProperty(A13.popupHeight), r49.style.removeProperty(F11.positionerWidth), r49.style.removeProperty(F11.positionerHeight));
  }
  function qe4(t48, a38) {
    !e58 || !r49 || (e58.style.setProperty(A13.popupWidth, `${t48}px`), e58.style.setProperty(A13.popupHeight, `${a38}px`), r49.style.setProperty(F11.positionerWidth, `${t48}px`), r49.style.setProperty(F11.positionerHeight, `${a38}px`));
  }
  function ut7() {
    ne12(true);
    let t48 = new AbortController();
    I26.current.abortController = t48, I26.current.owner = x21, so3(() => {
      I26.current.abortController !== t48 || I26.current.owner !== x21 || (I26.current.abortController = null, I26.current.owner = null, at8());
    }, t48.signal);
  }
  let Me10 = E((t48, a38, h24 = {}) => {
    if (!e58 || !r49) return;
    ne12(true);
    let { syncPositioner: P17 = false } = h24;
    Ye6();
    let { width: se12, height: Ee7 } = g17(e58), Te7 = se12 || Y18.current.width, Oe5 = Ee7 || Y18.current.height;
    (a38 === 0 || t48 === 0) && (t48 = Te7, a38 = Oe5), e58.style.setProperty(A13.popupWidth, `${t48}px`), e58.style.setProperty(A13.popupHeight, `${a38}px`), r49.style.setProperty(F11.positionerWidth, `${P17 ? t48 : Te7}px`), r49.style.setProperty(F11.positionerHeight, `${P17 ? a38 : Oe5}px`), V12.request(() => {
      Ie7.current && (e58.style.setProperty(A13.popupWidth, `${Te7}px`), e58.style.setProperty(A13.popupHeight, `${Oe5}px`), P17 && (r49.style.setProperty(F11.positionerWidth, `${Te7}px`), r49.style.setProperty(F11.positionerHeight, `${Oe5}px`)), ut7());
    });
  }), ct7 = E((t48, a38) => {
    !e58 || !r49 || (V12.cancel(), U11.cancel(), ne12(true), !(t48 === 0 || a38 === 0) && (qe4(t48, a38), U11.request(() => {
      U11.request(() => {
        Ye6();
        let { width: h24, height: P17 } = g17(e58), se12 = h24 || t48 || Y18.current.width, Ee7 = P17 || a38 || Y18.current.height;
        qe4(t48, a38), V12.request(() => {
          Ie7.current && (qe4(se12, Ee7), ut7());
        });
      });
    })));
  }), pe9 = E(() => {
    if (!e58 || !r49) return;
    V12.cancel(), ne12(true), Ye6();
    let { width: t48, height: a38 } = g17(e58);
    t48 === 0 || a38 === 0 || (Y18.current = { width: t48, height: a38 }, at8(), r49.style.setProperty(F11.positionerWidth, `${t48}px`), r49.style.setProperty(F11.positionerHeight, `${a38}px`));
  }), lt8 = E(() => {
    if (!e58) return { size: Y18.current, syncPositioner: false };
    let t48 = e58.style.getPropertyValue(A13.popupWidth), a38 = e58.style.getPropertyValue(A13.popupHeight);
    return t48 !== "" && t48 !== "auto" && a38 !== "" && a38 !== "auto" ? { size: { width: e58.offsetWidth || Y18.current.width, height: e58.offsetHeight || Y18.current.height }, syncPositioner: true } : { size: Y18.current, syncPositioner: false };
  });
  M12.useEffect(() => {
    m25 || ($9.clear(), U11.cancel(), ee7.cancel(), V12.cancel(), ne12(true), we7.current = false, j17(""));
  }, [$9, m25, U11, ee7, V12, ne12]), M12.useEffect(() => {
    c40 || (Y18.current = _t4);
  }, [c40]), M12.useEffect(() => {
    if (!e58 || typeof ResizeObserver != "function") return;
    let t48 = new ResizeObserver(() => {
      Y18.current = { width: e58.offsetWidth, height: e58.offsetHeight };
    });
    return t48.observe(e58), () => {
      t48.disconnect();
    };
  }, [e58]), M12.useEffect(() => {
    if (!m25 || !S18 || !e58 || !r49) return;
    let t48 = i10(r49);
    function a38() {
      ee7.cancel(), ee7.request(pe9);
    }
    let h24 = t11(t48, "resize", a38);
    return () => {
      ee7.cancel(), h24();
    };
  }, [m25, S18, e58, r49, ee7, pe9]), M12.useEffect(() => {
    let t48 = T17.current;
    if (!t48 || !e58 || !S18 || typeof MutationObserver != "function") return;
    let a38 = new MutationObserver(() => {
      if (y24 === "starting" || e58.hasAttribute(n8.startingStyle)) {
        pe9();
        return;
      }
      let { size: h24, syncPositioner: P17 } = lt8();
      if (P17) {
        ct7(h24.width, h24.height);
        return;
      }
      Me10(h24.width, h24.height);
    });
    return a38.observe(t48, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["hidden"] }), () => {
      a38.disconnect();
    };
  }, [T17, e58, S18, y24, lt8, ct7, Me10, pe9]), M12.useEffect(() => (S18 && m25 && e58 && be8.current && (be8.current = false, K14.request(() => {
    b14.current?.focus();
  })), () => {
    K14.cancel();
  }), [b14, K14, S18, m25, e58]), o2(() => {
    if (Ie7.current && m25 && e58) {
      let t48 = T17.current?.querySelector("[data-nested]") != null;
      if (y24 === "starting" && t48) return V12.request(pe9), () => {
        V12.cancel();
      };
      if (we7.current) {
        we7.current = false;
        return;
      }
      let { width: a38, height: h24 } = g17(e58);
      Me10(a38, h24);
    }
  }, [T17, Me10, Ie7, m25, e58, V12, pe9, y24]);
  function uo2(t48, a38) {
    let h24 = a38.reason === s4.triggerHover;
    if (!st7 || L20 === "touch" && h24 || !t48 && s54 !== x21) return;
    function P17() {
      h24 && (he6(true), $9.clear(), $9.start(e10, () => {
        he6(false);
      })), t48 ? g20(x21, a38) : (g20(null, a38), j17(""));
    }
    h24 ? je3.flushSync(P17) : P17();
  }
  let re8 = jt({ open: m25, onOpenChange: uo2, elements: { reference: G18, floating: ie10 } }), te7 = S10(re8), pt7 = L20 !== "touch";
  M12.useEffect(() => {
    m25 || (re8.context.dataRef.current.openEvent = void 0, te7.pointerType = void 0, te7.interactedInside = false, te7.restTimeoutPending = false, te7.openChangeTimeout.clear(), te7.restTimeout.clear(), E13(te7));
  }, [re8, te7, m25]);
  let co3 = E(() => !H16 || r49 || !le9.current || !ie10 ? null : On2(le9.current, ie10, oe10));
  function ft9() {
    return !H16 || !r49 ? le9.current?.closest("ul") ?? null : null;
  }
  let Xe11 = Ns(re8, { enabled: io2, move: false, handleClose: mc({ blockPointerEvents: pt7, getScope: ft9 }), restMs: c40 && r49 ? 0 : B17, delay: { close: W14 }, triggerElementRef: le9, getHandleCloseContext: co3 }), mt8 = M12.useMemo(() => Xe11 ? { reference: Xe11 } : void 0, [Xe11]), dt7 = Mo(re8, { enabled: st7, stickIfOpen: Ge7, toggle: S18 }), lo2 = M12.useMemo(() => d2(dt7.reference, mt8?.reference), [dt7.reference, mt8]);
  o2(() => {
    S18 && (v17(re8), k17.current = G18);
  }, [S18, re8, v17, k17, G18]);
  function gt6(t48) {
    je3.flushSync(() => {
      let a38 = g4(t48.currentTarget) ? t48.currentTarget : null, h24 = k17.current?.getBoundingClientRect();
      if (c40 && h24 && G18) {
        let P17 = G18.getBoundingClientRect(), se12 = P17.left > h24.left, Ee7 = P17.top > h24.top;
        _19 === "horizontal" && P17.left !== h24.left ? w22(se12 ? "right" : "left") : _19 === "vertical" && P17.top !== h24.top && w22(Ee7 ? "down" : "up");
      }
      if (t48.type !== "click" && s54 != null && (re8.context.dataRef.current.openEvent = void 0), !(L20 === "touch" && t48.type !== "click") && (s54 != null && g20(x21, u4(t48.type === "mouseenter" ? s4.triggerHover : s4.triggerPress, t48.nativeEvent)), t48.type === "mouseenter" && pt7 && (!H16 || !r49) && ie10 && a38)) {
        let P17 = () => {
          let se12 = ft9() ?? a38.ownerDocument.body;
          d18(te7, { scopeElement: se12, referenceElement: a38, floatingElement: ie10 });
        };
        s54 != null && s54 !== x21 ? queueMicrotask(P17) : P17();
      }
    });
  }
  let Ke10 = E((t48) => {
    if (!e58 || !r49) {
      gt6(t48);
      return;
    }
    let { width: a38, height: h24 } = g17(e58), P17 = s54 != null && s54 !== x21 && (t48.type === "click" || L20 !== "touch");
    gt6(t48), P17 && (we7.current = true), Me10(a38, h24);
  }), po2 = { open: S18 };
  function vt6(t48) {
    j17(t48.pointerType);
  }
  function fo(t48) {
    vt6(t48), E13(te7);
  }
  let mo2 = { tabIndex: 0, onMouseEnter: Ke10, onClick: Ke10, onPointerEnter: vt6, onPointerDown: fo, "aria-expanded": S18, "aria-controls": S18 ? e58?.id : void 0, [De3]: "", onFocus() {
    S18 && X11(false);
  }, onMouseMove() {
    be8.current = false;
  }, onKeyDown(t48) {
    if (be8.current = true, H16) return;
    let a38 = Ne7 === "rtl" ? "ArrowLeft" : "ArrowRight", h24 = _19 === "horizontal" && t48.key === "ArrowDown", P17 = _19 === "vertical" && t48.key === a38;
    (h24 || P17) && (g20(x21, u4(s4.listNavigation, t48.nativeEvent)), Ke10(t48), p7(t48));
  }, onBlur(t48) {
    r49 && e58 && He3({ currentTarget: t48.currentTarget, relatedTarget: t48.relatedTarget }, { popupElement: e58, rootRef: z17, tree: Q16, nodeId: oe10 }) && g20(null, u4(s4.focusOut, t48.nativeEvent));
  } }, { getButtonProps: go, buttonRef: vo2 } = Q({ disabled: d31, focusableWhenDisabled: true, native: p31 }), fe7 = ie10;
  return At2(M12.Fragment, { children: [Le3(P10, { tag: "button", render: u37, className: R27, style: l19, state: po2, stateAttributesMapping: a19, refs: [i38, ao3, vo2], props: [lo2, Re8?.reference || t5, mo2, f35, go] }), S18 && At2(M12.Fragment, { children: [Le3(R8, { ref: b14, onFocus: (t48) => {
    fe7 && W4(t48, fe7) ? q15.current?.focus() : j5(G18)?.focus();
  } }), Le3("span", { "aria-owns": N20?.id, style: T4 }), Le3(R8, { ref: D14, onFocus: (t48) => {
    if (fe7 && W4(t48, fe7)) je3.flushSync(() => {
      X11(false);
    }), (O14.current || G18)?.focus();
    else {
      let a38 = V(G18);
      H16 && !r49 && fe7 && a38 && u9(fe7, a38) && (a38 = B4(O14.current)), a38?.focus(), (!H16 || r49) && !u9(z17.current, a38) && g20(null, u4(s4.focusOut, t48.nativeEvent));
    }
  } })] })] });
});
function Tn3(n61, o62) {
  let i38 = n61.getBoundingClientRect(), u37 = o62.getBoundingClientRect(), R27 = i38.left + i38.width / 2, l19 = i38.top + i38.height / 2, p31 = u37.left + u37.width / 2, d31 = u37.top + u37.height / 2, f35 = p31 - R27, s54 = d31 - l19;
  return Math.abs(f35) >= Math.abs(s54) ? f35 >= 0 ? "right" : "left" : s54 >= 0 ? "bottom" : "top";
}
function On2(n61, o62, i38) {
  return { placement: Tn3(n61, o62), elements: { domReference: n61, floating: o62 }, nodeId: i38 };
}
var nt3 = We3.createContext(void 0);
function Ft() {
  let n61 = We3.useContext(nt3);
  if (n61 === void 0) throw new Error(f2(40));
  return n61;
}
var zt = Ht2.forwardRef(function(o62, i38) {
  let { keepMounted: u37 = false, ...R27 } = o62, { mounted: l19 } = E25();
  return l19 || u37 ? kt3(nt3.Provider, { value: u37, children: kt3(eo, { ref: i38, ...R27 }) }) : null;
});
var rt5 = $e2.createContext(void 0);
function ce4(n61 = false) {
  let o62 = $e2.useContext(rt5);
  if (!o62 && !n61) throw new Error(f2(42));
  return o62;
}
var Yn = r15();
var Lt4 = Z12.forwardRef(function(o62, i38) {
  let { open: u37, mounted: R27, positionerElement: l19, setPositionerElement: p31, floatingRootContext: d31, nested: f35, transitionStatus: s54 } = E25(), { className: g20, render: c40, anchor: m25, positionMethod: r49 = "absolute", side: w22 = "bottom", align: v17 = "center", sideOffset: e58 = 0, alignOffset: N20 = 0, collisionBoundary: y24 = "clipping-ancestors", collisionPadding: z17 = 5, collisionAvoidance: b14 = f35 ? S8 : i15, arrowPadding: D14 = 5, sticky: O14 = false, disableAnchorTracking: q15 = false, style: k17, ...I26 } = o62, T17 = Ft(), B17 = J11(), W14 = p12(), [_19, X11] = Z12.useState(false), H16 = Z12.useRef(null), x21 = Z12.useRef(null);
  Z12.useEffect(() => {
    if (!l19) return;
    function $9(K14) {
      l19 && W4(K14) && (K14.type === "focusin" ? q2 : _)(l19);
    }
    return r14(t11(l19, "focusin", $9, true), t11(l19, "focusout", $9, true));
  }, [l19]);
  let oe10 = (d31 || Yn).useState("domReferenceElement"), Q16 = Lt2({ anchor: m25 ?? oe10 ?? x21, positionMethod: r49, mounted: R27, side: w22, sideOffset: e58, align: v17, alignOffset: N20, arrowPadding: D14, collisionBoundary: y24, collisionPadding: z17, sticky: O14, disableAnchorTracking: q15, keepMounted: T17, floatingRootContext: d31, collisionAvoidance: b14, nodeId: B17, adaptiveOrigin: Y5 }), Re8 = { open: u37, side: Q16.side, align: Q16.align, anchorHidden: Q16.anchorHidden, instant: _19 };
  Z12.useEffect(() => {
    if (!u37) return;
    function $9() {
      Bt3.flushSync(() => {
        X11(true);
      }), W14.start(100, () => {
        X11(false);
      });
    }
    let K14 = i10(l19);
    return t11(K14, "resize", $9);
  }, [u37, W14, l19]);
  let Ne7 = g14(o62, Re8, { styles: Q16.positionerStyles, transitionStatus: s54, props: I26, refs: [i38, p31, H16], hidden: !R27, inert: !u37 });
  return Gn2(rt5.Provider, { value: Q16, children: Ne7 });
});
var nr2 = r15();
function $t({ children: n61 }) {
  let { beforeInsideRef: o62, beforeOutsideRef: i38, afterInsideRef: u37, afterOutsideRef: R27, positionerElement: l19, viewportElement: p31, floatingRootContext: d31 } = E25(), f35 = !!ce4(true), s54 = l19 || p31;
  return !d31 && !f35 ? n61 : or2(Ue5.Fragment, { children: [ye5(R8, { ref: o62, onFocus: (g20) => {
    s54 && W4(g20, s54) ? V(s54)?.focus() : i38.current?.focus();
  } }), n61, ye5(R8, { ref: u37, onFocus: (g20) => {
    s54 && W4(g20, s54) ? j5(s54)?.focus() : R27.current?.focus();
  } })] });
}
var Ut = Ue5.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, children: p31, id: d31, ...f35 } = o62, s54 = I3(d31), { setViewportElement: g20, setViewportTargetElement: c40, floatingRootContext: m25, prevTriggerElementRef: r49, viewportInert: w22, setViewportInert: v17 } = E25(), N20 = !!ce4(true), y24 = (m25 || nr2).useState("domReferenceElement");
  o2(() => {
    y24 && (r49.current = y24);
  }, [y24, r49]);
  let z17 = J("div", o62, { ref: [i38, g20], props: [{ id: s54, onBlur(b14) {
    let D14 = b14.relatedTarget, O14 = b14.currentTarget;
    D14 && !u9(O14, D14) && D14 !== y24 && v17(true);
  }, ...!N20 && w22 && { inert: s22(true) }, children: N20 ? p31 : ye5($t, { children: ye5("div", { ref: c40, children: p31 }) }) }, f35] });
  return N20 ? ye5($t, { children: z17 }) : z17;
});
var ar2 = { ...g11, ...i7 };
var Yt3 = Gt2.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, ...p31 } = o62, { open: d31, mounted: f35, transitionStatus: s54 } = E25();
  return J("div", o62, { state: { open: d31, transitionStatus: s54 }, ref: i38, props: [{ role: "presentation", hidden: !f35, style: { userSelect: "none", WebkitUserSelect: "none" } }, p31], stateAttributesMapping: ar2 });
});
var mr = { ...g11, ...i7 };
var Xt3 = qt3.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, id: p31, ...d31 } = o62, { open: f35, transitionStatus: s54, setPopupElement: g20 } = E25(), c40 = ce4(), m25 = o4(), r49 = r5(p31), w22 = { open: f35, transitionStatus: s54, side: c40.side, align: c40.align, anchorHidden: c40.anchorHidden }, v17 = c40.side === "top", e58 = c40.side === "left";
  return m25 === "rtl" ? (v17 = v17 || c40.side === "inline-end", e58 = e58 || c40.side === "inline-end") : (v17 = v17 || c40.side === "inline-start", e58 = e58 || c40.side === "inline-start"), J("nav", o62, { state: w22, ref: [i38, g20], props: [{ id: r49, tabIndex: -1, style: v17 ? { position: "absolute", [c40.side === "top" ? "bottom" : "top"]: "0", [e58 ? "right" : "left"]: "0" } : {} }, d31], stateAttributesMapping: mr });
});
var Jt3 = Kt2.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, ...p31 } = o62, { open: d31 } = E25(), { arrowRef: f35, side: s54, align: g20, arrowUncentered: c40, arrowStyles: m25 } = ce4();
  return J("div", o62, { state: { open: d31, side: s54, align: g20, uncentered: c40 }, ref: [i38, f35], props: [{ style: m25, "aria-hidden": true }, p31], stateAttributesMapping: g11 });
});
var to2 = eo3.forwardRef(function(o62, i38) {
  let { className: u37, render: R27, active: l19 = false, closeOnClick: p31 = false, style: d31, ...f35 } = o62, { setValue: s54, popupElement: g20, positionerElement: c40, rootRef: m25 } = E25(), r49 = J11(), w22 = f18();
  return Nr2(P10, { tag: "a", render: R27, className: u37, style: d31, state: { active: l19 }, refs: [i38], props: [{ "aria-current": l19 ? "page" : void 0, tabIndex: void 0, onClick(N20) {
    p31 && s54(null, u4(s4.linkPress, N20.nativeEvent));
  }, onBlur(N20) {
    c40 && g20 && He3({ currentTarget: N20.currentTarget, relatedTarget: N20.relatedTarget }, { popupElement: g20, rootRef: m25, tree: w22, nodeId: r49 }) && s54(null, u4(s4.focusOut, N20.nativeEvent));
  } }, f35] });
});
var no = oo.forwardRef(function(o62, i38) {
  let { render: u37, className: R27, style: l19, ...p31 } = o62, { value: d31 } = de5(), { open: f35, value: s54 } = E25();
  return J("span", o62, { state: { open: f35 && s54 === d31 }, ref: i38, props: [{ "aria-hidden": true, children: "\u25BC" }, p31], stateAttributesMapping: c19 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/number-field.mjs
import * as $5 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useForcedRerendering.mjs
import * as e51 from "react";
function a30() {
  let [, t48] = e51.useState({});
  return e51.useCallback(() => {
    t48({});
  }, []);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/number-field.mjs
import * as Me3 from "react";
import { jsx as Ar, jsxs as yr } from "react/jsx-runtime";
import * as At3 from "react";
import * as We4 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/usePressAndHold.mjs
import * as r46 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/useInterval.mjs
import * as f33 from "react";
import * as a31 from "react";
var o57 = {};
function c38(t48, r49) {
  let e58 = f33.useRef(o57);
  return e58.current === o57 && (e58.current = t48(r49)), e58;
}
var m19 = [];
function i37(t48) {
  a31.useEffect(t48, m19);
}
var n57 = 0;
var s51 = class t42 {
  static create() {
    return new t42();
  }
  currentId = n57;
  start(r49, e58) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = n57, e58();
    }, r49);
  }
  isStarted() {
    return this.currentId !== n57;
  }
  clear = () => {
    this.currentId !== n57 && (clearTimeout(this.currentId), this.currentId = n57);
  };
  disposeEffect = () => this.clear;
};
var I23 = 0;
var u34 = class t43 extends s51 {
  static create() {
    return new t43();
  }
  start(r49, e58) {
    this.clear(), this.currentId = setInterval(() => {
      e58();
    }, r49);
  }
  clear = () => {
    this.currentId !== I23 && (clearInterval(this.currentId), this.currentId = I23);
  };
};
function M13() {
  let t48 = c38(u34.create).current;
  return i37(t48.disposeEffect), t48;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/internals/usePressAndHold.mjs
var F12 = 60;
var H13 = 400;
var Y13 = 8;
var v15 = 50;
var X6 = 3;
function a32(l19) {
  return l19 === "touch" || l19 === "pen";
}
function V8(l19) {
  let { disabled: R27, readOnly: p31 = false, tick: E30, onStop: L20, tickDelay: M20 = F12, startDelay: b14 = H13, scrollDistance: x21 = Y13, elementRef: S18 } = l19, h24 = p12(), C18 = M13(), P17 = p12(), n61 = r46.useRef(false), u37 = r46.useRef(0), A17 = r46.useRef({ x: 0, y: 0 }), s54 = r46.useRef(false), T17 = r46.useRef(false), d31 = r46.useRef(""), y24 = r46.useRef(() => {
  }), t48 = E(() => {
    P17.clear(), h24.clear(), C18.clear(), y24.current(), u37.current = 0;
  });
  function m25(e58) {
    t48();
    let o62 = S18.current;
    if (!o62) return;
    let i38 = i10(o62);
    function f35(c40) {
      c40.preventDefault();
    }
    if (y24.current = t11(i38, "contextmenu", f35), t11(i38, "pointerup", (c40) => {
      n61.current = false, t48(), L20?.(c40);
    }, { once: true }), !E30(e58)) {
      t48();
      return;
    }
    h24.start(b14, () => {
      C18.start(M20, () => {
        E30(e58) || t48();
      });
    });
  }
  r46.useEffect(() => () => t48(), [t48]);
  let U11 = { onTouchStart() {
    s54.current = true;
  }, onTouchEnd() {
    s54.current = false;
  }, onPointerDown(e58) {
    let o62 = !e58.button || e58.button === 0;
    if (e58.defaultPrevented || !o62 || R27 || p31) return;
    d31.current = e58.pointerType, T17.current = false, n61.current = true, A17.current = { x: e58.clientX, y: e58.clientY }, a32(e58.pointerType) ? P17.start(v15, () => {
      let f35 = u37.current;
      u37.current = 0, n61.current && f35 < X6 ? (m25(e58.nativeEvent), T17.current = true) : (T17.current = false, t48());
    }) : (e58.preventDefault(), m25(e58.nativeEvent));
  }, onPointerUp(e58) {
    a32(e58.pointerType) && (n61.current = false);
  }, onPointerMove(e58) {
    if (R27 || p31 || !a32(e58.pointerType) || !n61.current) return;
    u37.current != null && (u37.current += 1);
    let { x: o62, y: i38 } = A17.current, f35 = o62 - e58.clientX, c40 = i38 - e58.clientY;
    f35 ** 2 + c40 ** 2 > x21 ** 2 && t48();
  }, onMouseEnter(e58) {
    e58.defaultPrevented || R27 || p31 || !n61.current || s54.current || a32(d31.current) || m25(e58.nativeEvent);
  }, onMouseLeave() {
    s54.current || t48();
  }, onMouseUp() {
    s54.current || t48();
  } }, O14 = E((e58) => e58.defaultPrevented ? true : a32(d31.current) ? T17.current : e58.detail !== 0);
  return { pointerHandlers: U11, shouldSkipClick: O14 };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/number-field.mjs
import * as Be3 from "react";
import * as Te3 from "react";
import * as M14 from "react";
import * as at4 from "react-dom";
import * as Ke4 from "react";
import { jsx as un2 } from "react/jsx-runtime";
import * as Ye4 from "react";
import * as kt4 from "react-dom";
var Kt3 = Object.defineProperty;
var Yt4 = (t48, o62) => {
  for (var r49 in o62) Kt3(t48, r49, { get: o62[r49], enumerable: true });
};
var Ht3 = {};
Yt4(Ht3, { Decrement: () => Ft2, Group: () => yt5, Increment: () => Dt4, Input: () => Pt2, Root: () => Ct4, ScrubArea: () => Ut2, ScrubAreaCursor: () => Gt3 });
var ze3 = Me3.createContext(void 0);
function Q10() {
  let t48 = Me3.useContext(ze3);
  if (t48 === void 0) throw new Error(f2(43));
  return t48;
}
var X7 = { inputValue: () => null, value: () => null, ...n25 };
var zt2 = ["\u96F6", "\u3007", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D"];
var qt4 = { \u96F6: "0", "\u3007": "0", \u4E00: "1", \u4E8C: "2", \u4E09: "3", \u56DB: "4", \u4E94: "5", \u516D: "6", \u4E03: "7", \u516B: "8", \u4E5D: "9" };
var ct2 = ["\u0660", "\u0661", "\u0662", "\u0663", "\u0664", "\u0665", "\u0666", "\u0667", "\u0668", "\u0669"];
var lt3 = ["\u06F0", "\u06F1", "\u06F2", "\u06F3", "\u06F4", "\u06F5", "\u06F6", "\u06F7", "\u06F8", "\u06F9"];
var Ze6 = ["\uFF10", "\uFF11", "\uFF12", "\uFF13", "\uFF14", "\uFF15", "\uFF16", "\uFF17", "\uFF18", "\uFF19"];
var Xe5 = ["%", "\u066A", "\uFF05", "\uFE6A"];
var Je3 = ["\u2030", "\u0609"];
var mt3 = ["\u2212", "\uFF0D", "\u2012", "\u2013", "\u2014", "\uFE63"];
var pt3 = ["\uFF0B", "\uFE62"];
var Zt = "\uFF0E";
var Xt4 = "\uFF0C";
var Jt4 = new RegExp(`[${ct2.join("")}]`, "g");
var Qt = new RegExp(`[${lt3.join("")}]`, "g");
var er2 = new RegExp(`[${Ze6.join("")}]`, "g");
var tr2 = new RegExp(`[${zt2.join("")}]`, "g");
var rr3 = new RegExp(`[${Xe5.join("")}]`);
var nr3 = new RegExp(`[${Je3.join("")}]`);
var Oe2 = /[٠١٢٣٤٥٦٧٨٩]/;
var Ue6 = /[۰۱۲۳۴۵۶۷۸۹]/;
var ke3 = /[零〇一二三四五六七八九]/;
var Qe4 = new RegExp(`[${Ze6.join("")}]`);
var ft4 = [".", ",", Zt, Xt4, "\u066B", "\u066C"];
var et5 = /\p{Zs}/u;
var dt3 = ["+", ...pt3];
var Rt3 = ["-", ...mt3];
var Le4 = (t48) => t48.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var or3 = (t48) => t48.replace(/[-\\\]^]/g, (o62) => `\\${o62}`);
var Et5 = (t48) => `[${t48.map(or3).join("")}]`;
var bt4 = Et5(["-"].concat(mt3));
var Nt2 = Et5(["+"].concat(pt3));
var tt6 = new RegExp(bt4, "gu");
var rt6 = new RegExp(Nt2, "gu");
var _e2 = new RegExp(bt4);
var De4 = new RegExp(Nt2);
function Fe3(t48, o62) {
  let r49 = m17(t48, o62).formatToParts(11111.1), i38 = {};
  return r49.forEach((s54) => {
    i38[s54.type] = s54.value;
  }), m17(t48).formatToParts(0.1).forEach((s54) => {
    s54.type === "decimal" && (i38[s54.type] = s54.value);
  }), i38;
}
function Ne3(t48, o62, r49) {
  if (t48 == null) return null;
  let i38 = String(t48).replace(/\p{Cf}/gu, "").trim();
  i38 = i38.replace(tt6, "-").replace(rt6, "+");
  let s54 = false, b14 = i38.match(/([+-])\s*$/);
  b14 && (b14[1] === "-" && (s54 = true), i38 = i38.replace(/([+-])\s*$/, ""));
  let S18 = i38.match(/^\s*([+-])/);
  S18 && (S18[1] === "-" && (s54 = true), i38 = i38.replace(/^\s*[+-]/, ""));
  let m25 = o62;
  m25 === void 0 && (Oe2.test(i38) || Ue6.test(i38) ? m25 = "ar" : ke3.test(i38) && (m25 = "zh"));
  let { group: E30, decimal: a38, currency: D14 } = Fe3(m25, r49), N20 = m17(m25, r49).formatToParts(1).filter((d31) => d31.type === "unit").map((d31) => Le4(d31.value)), w22 = N20.length ? new RegExp(N20.join("|"), "g") : null, h24 = null;
  E30 && (/\p{Zs}/u.test(E30) ? h24 = /\p{Zs}/gu : E30 === "'" || E30 === "\u2019" ? h24 = /['’]/g : h24 = new RegExp(Le4(E30), "g"));
  let u37 = [{ regex: E30 ? h24 : null, replacement: "" }, { regex: a38 ? new RegExp(Le4(a38), "g") : null, replacement: "." }, { regex: /．/g, replacement: "." }, { regex: /，/g, replacement: "" }, { regex: /٫/g, replacement: "." }, { regex: /٬/g, replacement: "" }, { regex: D14 ? new RegExp(Le4(D14), "g") : null, replacement: "" }, { regex: w22, replacement: "" }, { regex: Jt4, replacement: (d31) => String(ct2.indexOf(d31)) }, { regex: Qt, replacement: (d31) => String(lt3.indexOf(d31)) }, { regex: er2, replacement: (d31) => String(Ze6.indexOf(d31)) }, { regex: tr2, replacement: (d31) => qt4[d31] }].reduce((d31, { regex: A17, replacement: P17 }) => A17 ? d31.replace(A17, P17) : d31, i38), F14 = u37.lastIndexOf(".");
  if (F14 !== -1 && (u37 = `${u37.slice(0, F14).replace(/\./g, "")}.${u37.slice(F14 + 1).replace(/\./g, "")}`), /^[-+]?Infinity$/i.test(i38) || /[∞]/.test(i38)) return null;
  let W14 = (s54 ? "-" : "") + u37, L20 = parseFloat(W14), O14 = r49?.style, z17 = O14 === "unit" && r49?.unit === "percent", n61 = rr3.test(t48) || O14 === "percent";
  return nr3.test(t48) ? L20 /= 1e3 : !z17 && n61 && (L20 /= 100), Number.isNaN(L20) ? null : L20;
}
var ur2 = 1e-10;
function ar3(t48) {
  let o62 = m17("en-US").resolvedOptions(), r49 = t48?.minimumFractionDigits ?? o62.minimumFractionDigits ?? 0;
  return { maximumFractionDigits: Math.max(t48?.maximumFractionDigits ?? o62.maximumFractionDigits ?? 20, r49), minimumFractionDigits: r49 };
}
function cr2(t48, o62) {
  if (!Number.isFinite(t48)) return t48;
  let r49 = Math.min(Math.max(o62, 0), 20);
  return Number(t48.toFixed(r49));
}
function nt4(t48, o62) {
  let { maximumFractionDigits: r49 } = ar3(o62);
  return cr2(t48, r49);
}
function lr2(t48, o62, r49, i38 = "directional") {
  if (r49 === 0) return t48;
  let s54 = Math.abs(r49), b14 = Math.sign(r49), S18 = s54 * ur2 * b14, m25 = i38 === "nearest" ? r49 : s54, E30 = (t48 - o62 + S18) / m25, a38;
  return i38 === "nearest" ? a38 = Math.round(E30) : b14 > 0 ? a38 = Math.floor(E30) : a38 = Math.ceil(E30), o62 + a38 * (i38 === "nearest" ? r49 : s54);
}
function gt3(t48, { step: o62, minWithDefault: r49, maxWithDefault: i38, minWithZeroDefault: s54, format: b14, snapOnStep: S18, small: m25, clamp: E30 }) {
  if (t48 === null) return t48;
  let a38 = E30 ? t39(t48, r49, i38) : t48;
  if (o62 != null && S18) {
    if (o62 === 0) return nt4(a38, b14);
    let D14 = s54;
    !m25 && r49 !== Number.MIN_SAFE_INTEGER && (D14 = r49);
    let N20 = lr2(a38, D14, o62, m25 ? "nearest" : "directional");
    return nt4(N20, b14);
  }
  return nt4(a38, b14);
}
var Ct4 = $5.forwardRef(function(o62, r49) {
  let { id: i38, min: s54, max: b14, smallStep: S18 = 0.1, step: m25 = 1, largeStep: E30 = 10, required: a38 = false, disabled: D14 = false, readOnly: N20 = false, form: w22, name: h24, defaultValue: G18, value: u37, onValueChange: F14, onValueCommitted: W14, allowWheelScrub: L20 = false, snapOnStep: O14 = false, allowOutOfRange: z17 = false, format: n61, locale: p31, render: d31, className: A17, inputRef: P17, style: B17, ...T17 } = o62, { setDirty: j17, validityData: te7, disabled: J18, setFilled: re8, invalid: ie10, name: se12, state: fe7, validation: me7, shouldValidateOnChange: xe9 } = E14(), U11 = J18 || D14, de8 = se12 ?? h24, Se8 = m25 === "any" ? 1 : m25, [ue7, y24] = $5.useState(false), _19 = s54 ?? Number.MIN_SAFE_INTEGER, e58 = b14 ?? Number.MAX_SAFE_INTEGER, l19 = s54 ?? 0, c40 = n61?.style, g20 = $5.useRef(null), f35 = d(P17, me7.inputRef), x21 = F6({ id: i38 }), [k17, H16] = m({ controlled: u37, default: G18, name: "NumberField", state: "value" }), C18 = k17 ?? null, K14 = I8(C18);
  o2(() => {
    re8(C18 !== null);
  }, [re8, C18]);
  let le9 = a30(), ae11 = I8(n61), he6 = $5.useRef(false), Ve7 = E((v17, R27) => {
    he6.current = false, W14?.(v17, R27);
  }), Re8 = $5.useRef(true), we7 = $5.useRef(null), [Ee7, be8] = $5.useState(() => u37 !== void 0 ? ht4(C18, p31, n61) : e50(C18, p31, n61)), [Ie7, Ce7] = $5.useState("numeric"), V12 = E(() => {
    let { decimal: v17, group: R27, currency: q15, literal: Y18 } = Fe3(p31, n61), I26 = /* @__PURE__ */ new Set();
    ft4.forEach((Z17) => I26.add(Z17)), v17 && I26.add(v17), R27 && (I26.add(R27), et5.test(R27) && I26.add(" "));
    let ye9 = c40 === "percent" || c40 === "unit" && n61?.unit === "percent", ce8 = c40 === "percent" || c40 === "unit" && n61?.unit === "permille";
    return ye9 && Xe5.forEach((Z17) => I26.add(Z17)), ce8 && Je3.forEach((Z17) => I26.add(Z17)), c40 === "currency" && q15 && I26.add(q15), Y18 && (Array.from(Y18).forEach((Z17) => I26.add(Z17)), et5.test(Y18) && I26.add(" ")), dt3.forEach((Z17) => I26.add(Z17)), _19 < 0 && Rt3.forEach((Z17) => I26.add(Z17)), I26;
  }), ne12 = E((v17) => v17?.altKey ? S18 : v17?.shiftKey ? E30 : Se8), Ae7 = E((v17, R27) => {
    let q15 = R27.event, Y18 = R27.direction, I26 = R27.reason, ye9 = !z17 || !(I26 === s4.inputChange || I26 === s4.inputBlur || I26 === s4.inputPaste || I26 === s4.inputClear || I26 === s4.none), ce8 = gt3(v17, { step: Y18 ? ne12(q15) * Y18 : void 0, format: ae11.current, minWithDefault: _19, maxWithDefault: e58, minWithZeroDefault: l19, snapOnStep: O14, small: q15?.altKey ?? false, clamp: ye9 }), Z17 = R27.reason === s4.inputChange || R27.reason === s4.inputClear || R27.reason === s4.inputBlur || R27.reason === s4.inputPaste || R27.reason === s4.none, je8 = ce8 !== C18 || Z17 && (v17 !== C18 || Re8.current === false);
    if (je8) {
      if (we7.current = ce8, F14?.(ce8, R27), R27.isCanceled) return je8;
      H16(ce8), j17(ce8 !== te7.initialValue), he6.current = true;
    }
    return Re8.current && be8(e50(ce8, p31, n61)), le9(), je8;
  }), ve9 = E((v17, { direction: R27, currentValue: q15, event: Y18, reason: I26 }) => {
    let ye9 = q15 ?? K14.current, ce8 = typeof ye9 == "number" ? ye9 + v17 * R27 : Math.max(0, s54 ?? 0);
    return Ae7(ce8, u4(I26, Y18, void 0, { direction: R27 }));
  });
  o2(function() {
    if (!Re8.current) return;
    let R27 = u37 !== void 0 ? ht4(C18, p31, n61) : e50(C18, p31, n61);
    R27 !== Ee7 && be8(R27);
  }), o2(function() {
    if (!p6) return;
    let R27 = "text";
    _19 >= 0 && (R27 = "decimal"), Ce7(R27);
  }, [_19, c40]), $5.useEffect(function() {
    let R27 = g20.current;
    if (U11 || N20 || !L20 || !R27) return;
    function q15(Y18) {
      if (Y18.ctrlKey || a12(n13(g20.current)) !== g20.current) return;
      Y18.preventDefault(), Re8.current = true;
      let I26 = ne12(Y18) ?? 1;
      ve9(I26, { direction: Y18.deltaY > 0 ? -1 : 1, event: Y18, reason: "wheel" });
    }
    return t11(R27, "wheel", q15);
  }, [L20, ve9, U11, N20, ne12]);
  let $e6 = $5.useMemo(() => ({ ...fe7, disabled: U11, readOnly: N20, required: a38, value: C18, inputValue: Ee7, scrubbing: ue7 }), [fe7, U11, N20, a38, C18, Ee7, ue7]), Wt3 = $5.useMemo(() => ({ inputRef: g20, inputValue: Ee7, value: C18, minWithDefault: _19, maxWithDefault: e58, disabled: U11, readOnly: N20, id: x21, setValue: Ae7, incrementValue: ve9, getStepAmount: ne12, allowInputSyncRef: Re8, formatOptionsRef: ae11, valueRef: K14, lastChangedValueRef: we7, hasPendingCommitRef: he6, name: de8, required: a38, invalid: ie10, inputMode: Ie7, getAllowedNonNumericKeys: V12, min: s54, max: b14, setInputValue: be8, locale: p31, isScrubbing: ue7, setIsScrubbing: y24, state: $e6, onValueCommitted: Ve7 }), [g20, Ee7, C18, _19, e58, U11, N20, x21, Ae7, ve9, ne12, ae11, K14, de8, a38, ie10, Ie7, V12, s54, b14, be8, p31, ue7, $e6, Ve7]), Bt5 = J("div", o62, { ref: r49, state: $e6, props: T17, stateAttributesMapping: X7 });
  return yr(ze3.Provider, { value: Wt3, children: [Bt5, Ar("input", { ...me7.getInputValidationProps({ onFocus() {
    g20.current?.focus();
  }, onChange(v17) {
    if (v17.nativeEvent.defaultPrevented || U11 || N20) {
      v17.preventBaseUIHandler?.();
      return;
    }
    let R27 = v17.currentTarget.valueAsNumber, q15 = Number.isNaN(R27) ? null : R27, Y18 = u4(s4.none, v17.nativeEvent);
    j17(q15 !== te7.initialValue), Ae7(q15, Y18), xe9() && me7.commit(q15);
  } }), ref: f35, type: "number", form: w22, name: de8, value: C18 ?? "", min: s54, max: b14, step: m25, disabled: U11, required: a38, "aria-hidden": true, tabIndex: -1, style: de8 ? t13 : e8, suppressHydrationWarning: true })] });
});
function ht4(t48, o62, r49) {
  return r49?.maximumFractionDigits != null || r49?.minimumFractionDigits != null ? e50(t48, o62, r49) : c37(t48, o62, r49);
}
var yt5 = At3.forwardRef(function(o62, r49) {
  let { render: i38, className: s54, style: b14, ...S18 } = o62, { state: m25 } = Q10();
  return J("div", o62, { ref: r49, state: m25, props: [{ role: "group" }, S18], stateAttributesMapping: X7 });
});
function Vr2(t48) {
  return t48 === "touch" || t48 === "pen";
}
function He4(t48) {
  let { allowInputSyncRef: o62, disabled: r49, formatOptionsRef: i38, getStepAmount: s54, id: b14, incrementValue: S18, inputRef: m25, inputValue: E30, isIncrement: a38, locale: D14, readOnly: N20, setValue: w22, valueRef: h24, lastChangedValueRef: G18, onValueCommitted: u37 } = t48, F14 = a38 ? s4.incrementPress : s4.decrementPress;
  function W14(n61) {
    o62.current = true;
    let p31 = Ne3(E30, D14, i38.current);
    p31 !== null && (h24.current = p31, w22(p31, u4(F14, n61, void 0, { direction: a38 ? 1 : -1 })));
  }
  let { pointerHandlers: L20, shouldSkipClick: O14 } = V8({ disabled: r49 || N20, elementRef: m25, tickDelay: 60, startDelay: 400, scrollDistance: 8, tick(n61) {
    let p31 = s54(n61) ?? 1;
    return S18(p31, { direction: a38 ? 1 : -1, event: n61, reason: F14 });
  }, onStop(n61) {
    let p31 = G18.current ?? h24.current;
    u37(p31, d3(F14, n61));
  } });
  return { disabled: r49, "aria-readonly": N20 || void 0, "aria-label": a38 ? "Increase" : "Decrease", "aria-controls": b14, tabIndex: -1, style: { WebkitUserSelect: "none", userSelect: "none" }, ...L20, onClick(n61) {
    let p31 = r49 || N20;
    if (n61.defaultPrevented || p31 || O14(n61)) return;
    W14(n61.nativeEvent);
    let d31 = s54(n61) ?? 1, A17 = h24.current;
    S18(d31, { direction: a38 ? 1 : -1, event: n61.nativeEvent, reason: F14 });
    let P17 = G18.current ?? h24.current;
    P17 !== A17 && u37(P17, d3(F14, n61.nativeEvent));
  }, onPointerDown(n61) {
    let p31 = !n61.button || n61.button === 0;
    n61.defaultPrevented || N20 || !p31 || r49 || (W14(n61.nativeEvent), Vr2(n61.pointerType) || m25.current?.focus(), L20.onPointerDown(n61));
  } };
}
var Dt4 = We4.forwardRef(function(o62, r49) {
  let { render: i38, className: s54, disabled: b14 = false, nativeButton: S18 = true, style: m25, ...E30 } = o62, { allowInputSyncRef: a38, disabled: D14, formatOptionsRef: N20, getStepAmount: w22, id: h24, incrementValue: G18, inputRef: u37, inputValue: F14, locale: W14, maxWithDefault: L20, readOnly: O14, setValue: z17, state: n61, value: p31, valueRef: d31, lastChangedValueRef: A17, onValueCommitted: P17 } = Q10(), B17 = p31 != null && p31 >= L20, T17 = b14 || D14 || B17, j17 = He4({ isIncrement: true, inputRef: u37, inputValue: F14, disabled: T17, readOnly: O14, id: h24, setValue: z17, getStepAmount: w22, incrementValue: G18, allowInputSyncRef: a38, formatOptionsRef: N20, valueRef: d31, locale: W14, lastChangedValueRef: A17, onValueCommitted: P17 }), { getButtonProps: te7, buttonRef: J18 } = Q({ disabled: T17, native: S18, focusableWhenDisabled: true }), re8 = We4.useMemo(() => ({ ...n61, disabled: T17 }), [n61, T17]);
  return J("button", o62, { ref: [r49, J18], state: re8, props: [j17, E30, te7], stateAttributesMapping: X7 });
});
var Ft2 = Be3.forwardRef(function(o62, r49) {
  let { render: i38, className: s54, disabled: b14 = false, nativeButton: S18 = true, style: m25, ...E30 } = o62, { allowInputSyncRef: a38, disabled: D14, formatOptionsRef: N20, getStepAmount: w22, id: h24, incrementValue: G18, inputRef: u37, inputValue: F14, minWithDefault: W14, readOnly: L20, setValue: O14, state: z17, value: n61, valueRef: p31, locale: d31, lastChangedValueRef: A17, onValueCommitted: P17 } = Q10(), B17 = n61 != null && n61 <= W14, T17 = b14 || D14 || B17, j17 = He4({ isIncrement: false, inputRef: u37, inputValue: F14, disabled: T17, readOnly: L20, id: h24, setValue: O14, getStepAmount: w22, incrementValue: G18, allowInputSyncRef: a38, formatOptionsRef: N20, valueRef: p31, locale: d31, lastChangedValueRef: A17, onValueCommitted: P17 }), { getButtonProps: te7, buttonRef: J18 } = Q({ disabled: T17, native: S18, focusableWhenDisabled: true }), re8 = Be3.useMemo(() => ({ ...z17, disabled: T17 }), [z17, T17]);
  return J("button", o62, { ref: [r49, J18], state: re8, props: [j17, E30, te7], stateAttributesMapping: X7 });
});
var jr = { ...n25, ...X7 };
var zr = /* @__PURE__ */ new Set(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab", "Enter", "Escape"]);
var Pt2 = Te3.forwardRef(function(o62, r49) {
  let { render: i38, className: s54, style: b14, ...S18 } = o62, { allowInputSyncRef: m25, disabled: E30, formatOptionsRef: a38, getAllowedNonNumericKeys: D14, getStepAmount: N20, id: w22, incrementValue: h24, inputMode: G18, inputValue: u37, max: F14, min: W14, name: L20, readOnly: O14, required: z17, setValue: n61, state: p31, setInputValue: d31, locale: A17, inputRef: P17, value: B17, onValueCommitted: T17, lastChangedValueRef: j17, hasPendingCommitRef: te7, valueRef: J18 } = Q10(), { clearErrors: re8 } = n26(), { validationMode: ie10, setTouched: se12, setFocused: fe7, invalid: me7, shouldValidateOnChange: xe9, validation: U11 } = E14(), { labelId: de8 } = s28(), Se8 = Te3.useRef(false), ue7 = Te3.useRef(false);
  return d21(P17, w22, B17), u16(B17, (e58) => {
    let l19 = xe9();
    if (re8(L20), l19 && U11.commit(B17), !(e58 === B17 || l19)) {
      if (ue7.current) {
        ue7.current = false;
        return;
      }
      U11.commit(B17, true);
    }
  }), J("input", o62, { ref: [r49, P17], state: p31, props: [{ id: w22, required: z17, disabled: E30, readOnly: O14, inputMode: G18, value: u37, type: "text", autoComplete: "off", autoCorrect: "off", spellCheck: "false", "aria-roledescription": "Number field", "aria-invalid": me7 || void 0, "aria-labelledby": de8, suppressHydrationWarning: true, onFocus(e58) {
    if (e58.defaultPrevented || O14 || E30 || (fe7(true), Se8.current)) return;
    Se8.current = true;
    let l19 = e58.currentTarget, c40 = l19.value.length;
    l19.setSelectionRange(c40, c40);
  }, onBlur(e58) {
    if (e58.defaultPrevented || O14 || E30) return;
    se12(true), fe7(false);
    let l19 = !m25.current, c40 = te7.current;
    if (m25.current = true, u37.trim() === "") {
      n61(null, u4(s4.inputClear, e58.nativeEvent)), ie10 === "onBlur" && U11.commit(null), T17(null, d3(s4.inputClear, e58.nativeEvent));
      return;
    }
    let g20 = a38.current, f35 = Ne3(u37, A17, g20);
    if (f35 === null) return;
    let x21 = g20?.maximumFractionDigits != null || g20?.minimumFractionDigits != null, k17 = g20?.maximumFractionDigits, H16 = x21 && typeof k17 == "number" ? Number(f35.toFixed(k17)) : f35, C18 = d3(s4.inputBlur, e58.nativeEvent), K14 = B17 !== H16, le9 = l19 || K14 || c40;
    ie10 === "onBlur" && U11.commit(H16), K14 && (ue7.current = true, n61(H16, u4(s4.inputBlur, e58.nativeEvent))), le9 && T17(H16, C18);
    let ae11 = e50(H16, A17, g20);
    !(!x21 && f35 === B17 && u37 === c37(f35, A17, g20)) && u37 !== ae11 && d31(ae11);
  }, onChange(e58) {
    if (e58.nativeEvent.defaultPrevented) return;
    m25.current = false;
    let l19 = e58.currentTarget.value;
    if (l19.trim() === "") {
      d31(l19), n61(null, u4(s4.inputClear, e58.nativeEvent));
      return;
    }
    let c40 = D14();
    if (!Array.from(l19).every((x21) => {
      let k17 = x21 >= "0" && x21 <= "9", H16 = Oe2.test(x21), C18 = ke3.test(x21), K14 = Ue6.test(x21), le9 = Qe4.test(x21), ae11 = _e2.test(x21);
      return k17 || H16 || C18 || K14 || le9 || ae11 || c40.has(x21);
    })) return;
    let f35 = Ne3(l19, A17, a38.current);
    d31(l19), f35 !== null && n61(f35, u4(s4.inputChange, e58.nativeEvent));
  }, onKeyDown(e58) {
    if (e58.defaultPrevented || O14 || E30) return;
    let l19 = e58.nativeEvent;
    m25.current = true;
    let c40 = D14(), g20 = c40.has(e58.key), { decimal: f35, currency: x21, percentSign: k17 } = Fe3(A17, a38.current), H16 = e58.currentTarget.selectionStart, C18 = e58.currentTarget.selectionEnd, K14 = H16 === 0 && C18 === u37.length, le9 = (V12) => H16 != null && C18 != null && V12 >= H16 && V12 < C18;
    if (_e2.test(e58.key) && Array.from(c40).some((V12) => _e2.test(V12 || ""))) {
      let V12 = u37.search(tt6), ne12 = V12 != null && V12 !== -1 && le9(V12);
      g20 = !(_e2.test(u37) || De4.test(u37)) || K14 || ne12;
    }
    if (De4.test(e58.key) && Array.from(c40).some((V12) => De4.test(V12 || ""))) {
      let V12 = u37.search(rt6), ne12 = V12 != null && V12 !== -1 && le9(V12);
      g20 = !(_e2.test(u37) || De4.test(u37)) || K14 || ne12;
    }
    [f35, x21, k17].forEach((V12) => {
      if (e58.key === V12) {
        let ne12 = u37.indexOf(V12), Ae7 = le9(ne12);
        g20 = !u37.includes(V12) || K14 || Ae7;
      }
    });
    let ae11 = e58.key >= "0" && e58.key <= "9", he6 = Oe2.test(e58.key), Ve7 = ke3.test(e58.key), Re8 = Ue6.test(e58.key), we7 = Qe4.test(e58.key), Ee7 = zr.has(e58.key);
    if (e58.which === 229 || e58.altKey || e58.ctrlKey || e58.metaKey || g20 || ae11 || he6 || we7 || Ve7 || Re8 || Ee7) return;
    let be8 = Ne3(u37, A17, a38.current), Ie7 = N20(e58) ?? 1;
    p7(e58);
    let Ce7 = d3(s4.keyboard, l19);
    e58.key === "ArrowUp" ? (h24(Ie7, { direction: 1, currentValue: be8, event: l19, reason: s4.keyboard }), T17(j17.current ?? J18.current, Ce7)) : e58.key === "ArrowDown" ? (h24(Ie7, { direction: -1, currentValue: be8, event: l19, reason: s4.keyboard }), T17(j17.current ?? J18.current, Ce7)) : e58.key === "Home" && W14 != null ? (n61(W14, u4(s4.keyboard, l19)), T17(j17.current ?? J18.current, Ce7)) : e58.key === "End" && F14 != null && (n61(F14, u4(s4.keyboard, l19)), T17(j17.current ?? J18.current, Ce7));
  }, onPaste(e58) {
    if (e58.defaultPrevented || O14 || E30) return;
    e58.preventDefault();
    let c40 = (e58.clipboardData || window.Clipboard).getData("text/plain"), g20 = Ne3(c40, A17, a38.current);
    g20 !== null && (m25.current = false, n61(g20, u4(s4.inputPaste, e58.nativeEvent)), d31(c40));
  } }, U11.getValidationProps(), S18], stateAttributesMapping: jr });
});
var st2 = Ke4.createContext(void 0);
function Tt5() {
  let t48 = Ke4.useContext(st2);
  if (t48 === void 0) throw new Error(f2(44));
  return t48;
}
function Vt4(t48, o62) {
  let r49 = i10(o62), i38 = o62.getBoundingClientRect();
  if (i38 && t48 != null) return { x: i38.left - t48 / 2, y: i38.top - t48 / 2, width: i38.right + t48 / 2, height: i38.bottom + t48 / 2 };
  let s54 = r49.visualViewport;
  return s54 ? { x: s54.offsetLeft, y: s54.offsetTop, width: s54.offsetLeft + s54.width, height: s54.offsetTop + s54.height } : { x: 0, y: 0, width: r49.document.documentElement.clientWidth, height: r49.document.documentElement.clientHeight };
}
function wt4(t48, o62) {
  let r49 = i10(t48).visualViewport;
  if (!r49) return () => {
  };
  function i38() {
    r49 && (o62.current = r49.scale);
  }
  return i38(), t11(r49, "resize", i38);
}
var Ut2 = M14.forwardRef(function(o62, r49) {
  let { render: i38, className: s54, direction: b14 = "horizontal", pixelSensitivity: S18 = 2, teleportDistance: m25, style: E30, ...a38 } = o62, { state: D14, setIsScrubbing: N20, disabled: w22, readOnly: h24, inputRef: G18, incrementValue: u37, allowInputSyncRef: F14, getStepAmount: W14, onValueCommitted: L20, lastChangedValueRef: O14, valueRef: z17 } = Q10(), n61 = M14.useRef(null), p31 = M14.useRef(false), d31 = M14.useRef(false), A17 = M14.useRef(null), P17 = M14.useRef(null), B17 = M14.useRef({ x: 0, y: 0 }), T17 = M14.useRef(1), j17 = p12(), [te7, J18] = M14.useState(false), [re8, ie10] = M14.useState(false), [se12, fe7] = M14.useState(false);
  M14.useEffect(() => {
    if (!(!se12 || !P17.current)) return wt4(P17.current, T17);
  }, [se12]);
  function me7(y24, _19) {
    P17.current && (P17.current.style.transform = `translate3d(${y24}px,${_19}px,0) scale(${1 / T17.current})`);
  }
  let xe9 = E(({ movementX: y24, movementY: _19 }) => {
    let e58 = P17.current, l19 = n61.current;
    if (!e58 || !l19) return;
    let c40 = Vt4(m25, l19), g20 = B17.current, f35 = { x: Math.round(g20.x + y24), y: Math.round(g20.y + _19) }, x21 = e58.offsetWidth, k17 = e58.offsetHeight;
    f35.x + x21 / 2 < c40.x ? f35.x = c40.width - x21 / 2 : f35.x + x21 / 2 > c40.width && (f35.x = c40.x - x21 / 2), f35.y + k17 / 2 < c40.y ? f35.y = c40.height - k17 / 2 : f35.y + k17 / 2 > c40.height && (f35.y = c40.y - k17 / 2), B17.current = f35, me7(f35.x, f35.y);
  }), U11 = E((y24, { clientX: _19, clientY: e58 }) => {
    at4.flushSync(() => {
      fe7(y24), N20(y24);
    });
    let l19 = P17.current;
    if (!l19 || !y24) return;
    let c40 = { x: _19 - l19.offsetWidth / 2, y: e58 - l19.offsetHeight / 2 };
    B17.current = c40, me7(c40.x, c40.y);
  });
  M14.useEffect(function() {
    if (!G18.current || w22 || h24 || !se12) return;
    let _19 = 0;
    function e58(f35) {
      function x21() {
        try {
          n13(n61.current).exitPointerLock();
        } catch {
        } finally {
          p31.current = false, U11(false, f35), L20(O14.current ?? z17.current, d3(s4.scrub, f35));
          let k17 = A17.current, H16 = G18.current;
          !d31.current && k17 != null && H16 && k17.dispatchEvent(new (i10(H16)).MouseEvent("click", { bubbles: true, cancelable: true })), d31.current = false, A17.current = null;
        }
      }
      g5 ? j17.start(20, x21) : x21();
    }
    function l19(f35) {
      if (!p31.current) return;
      f35.preventDefault(), xe9(f35);
      let { movementX: x21, movementY: k17 } = f35;
      if (_19 += b14 === "vertical" ? k17 : x21, Math.abs(_19) >= S18) {
        _19 = 0, d31.current = true;
        let H16 = b14 === "vertical" ? -k17 : x21, C18 = W14(f35) ?? 1, K14 = H16 * C18;
        K14 !== 0 && (F14.current = true, u37(Math.abs(K14), { direction: K14 >= 0 ? 1 : -1, event: f35, reason: s4.scrub }));
      }
    }
    let c40 = i10(G18.current), g20 = r14(t11(c40, "pointerup", e58, true), t11(c40, "pointermove", l19, true));
    return () => {
      j17.clear(), g20();
    };
  }, [w22, h24, F14, u37, se12, W14, G18, U11, xe9, b14, S18, O14, L20, z17, j17]), M14.useEffect(function() {
    let _19 = n61.current;
    if (!_19 || w22 || h24) return;
    function e58(l19) {
      l19.touches.length === 1 && l19.preventDefault();
    }
    return t11(_19, "touchstart", e58);
  }, [w22, h24]);
  let Se8 = J("span", o62, { ref: [r49, n61], state: D14, props: [{ role: "presentation", style: { touchAction: "none", WebkitUserSelect: "none", userSelect: "none" }, async onPointerDown(y24) {
    let _19 = !y24.button || y24.button === 0;
    if (y24.defaultPrevented || h24 || !_19 || w22) return;
    let e58 = y24.pointerType === "touch";
    if (J18(e58), y24.pointerType === "mouse" && (y24.preventDefault(), G18.current?.focus()), p31.current = true, d31.current = false, A17.current = f10(y24.nativeEvent), U11(true, y24.nativeEvent), !e58 && !c8) try {
      await n13(n61.current).body.requestPointerLock(), ie10(false);
    } catch {
      ie10(true);
    } finally {
      p31.current && at4.flushSync(() => {
        U11(true, y24.nativeEvent);
      });
    }
  } }, a38], stateAttributesMapping: X7 }), ue7 = M14.useMemo(() => ({ isScrubbing: se12, isTouchInput: te7, isPointerLockDenied: re8, scrubAreaCursorRef: P17, scrubAreaRef: n61, direction: b14, pixelSensitivity: S18, teleportDistance: m25 }), [se12, te7, re8, b14, S18, m25]);
  return un2(st2.Provider, { value: ue7, children: Se8 });
});
var Gt3 = Ye4.forwardRef(function(o62, r49) {
  let { render: i38, className: s54, style: b14, ...S18 } = o62, { state: m25 } = Q10(), { isScrubbing: E30, isTouchInput: a38, isPointerLockDenied: D14, scrubAreaCursorRef: N20 } = Tt5(), [w22, h24] = Ye4.useState(null), u37 = J("span", o62, { enabled: E30 && !c8 && !a38 && !D14, ref: [r49, N20, h24], state: m25, props: [{ role: "presentation", style: { position: "fixed", top: 0, left: 0, pointerEvents: "none" } }, S18], stateAttributesMapping: X7 });
  return u37 && kt4.createPortal(u37, n13(w22).body);
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/otp-field.mjs
import * as u35 from "react";
import * as ue5 from "react";
import { jsx as Ge4, jsxs as Ft3 } from "react/jsx-runtime";
import * as Y14 from "react";
var at5 = Object.defineProperty;
var it3 = (t48, r49) => {
  for (var s54 in r49) at5(t48, s54, { get: r49[s54], enumerable: true });
};
var Je4 = {};
it3(Je4, { Input: () => He5, Root: () => We5, Separator: () => d25 });
var ve5 = ue5.createContext(void 0);
function ze4() {
  let t48 = ue5.useContext(ve5);
  if (t48 === void 0) throw new Error(f2(98));
  return t48;
}
function $e3(t48, r49, s54) {
  return { ...t48, value: r49, index: s54, filled: r49 !== "" };
}
var je4 = { value: () => null, length: () => null, ...n25 };
var qe2 = { value: () => null, index: () => null, ...n25 };
var ut3 = { numeric: { slotPattern: "\\d{1}", getRootPattern: (t48) => `\\d{${t48}}`, regexp: /[^\d]/g, inputMode: "numeric" }, alpha: { slotPattern: "[a-zA-Z]{1}", getRootPattern: (t48) => `[a-zA-Z]{${t48}}`, regexp: /[^a-zA-Z]/g, inputMode: "text" }, alphanumeric: { slotPattern: "[a-zA-Z0-9]{1}", getRootPattern: (t48) => `[a-zA-Z0-9]{${t48}}`, regexp: /[^a-zA-Z0-9]/g, inputMode: "text" } };
function Me4(t48) {
  return t48 === "none" ? null : ut3[t48];
}
function st3(t48) {
  return (t48 ?? "").replace(/\s/g, "");
}
function Ke5(t48, r49) {
  return r49 ? t48.replace(r49.regexp, "") : t48;
}
function G12(t48, r49, s54, x21) {
  let b14 = st3(t48), y24 = Me4(s54), d31 = Ke5(b14, y24), C18 = b14.length > d31.length;
  if (x21) {
    let w22 = x21(d31);
    C18 ||= d31.length > w22.length, d31 = Ke5(w22, y24), C18 ||= w22.length > d31.length;
  }
  let T17 = r49 < 0 ? 0 : r49, B17 = Array.from(d31);
  return [B17.slice(0, T17).join(""), C18 || B17.length > T17];
}
function Q11(t48, r49, s54, x21) {
  return G12(t48, r49, s54, x21)[0];
}
function Ee3(t48, r49, s54, x21, b14, y24) {
  let d31 = Q11(s54, x21, b14, y24), C18 = t48.slice(0, r49), T17 = t48.slice(r49 + d31.length);
  return Q11(`${C18}${d31}${T17}`, x21, b14, y24);
}
function se7(t48, r49) {
  return r49 < 0 || r49 >= t48.length ? t48 : `${t48.slice(0, r49)}${t48.slice(r49 + 1)}`;
}
var We5 = u35.forwardRef(function(r49, s54) {
  let { "aria-describedby": x21, "aria-labelledby": b14, id: y24, autoComplete: d31 = "one-time-code", defaultValue: C18, value: T17, onValueChange: B17, onValueComplete: w22, form: m25, length: i38, autoSubmit: V12 = false, mask: z17 = false, inputMode: de8, validationType: F14 = "numeric", normalizeValue: A17, disabled: pe9 = false, readOnly: v17 = false, required: k17 = false, name: g20, onValueInvalid: fe7, render: De10, className: me7, style: Z17, ...ge10 } = r49, { setDirty: $9, validityData: _19, disabled: he6, setFilled: N20, invalid: O14, name: Re8, state: o62, validation: M20, validationMode: Pe6, shouldValidateOnChange: E30, setFocused: ee7, setTouched: xe9 } = E14(), { clearErrors: be8 } = n26(), { getDescriptionProps: te7, labelId: Oe5 } = s28(), L20 = he6 || pe9, e58 = Re8 ?? g20, [c40, h24] = m({ controlled: T17, default: C18, name: "OTPField", state: "value" }), I26 = u35.useRef(null), p31 = u35.useRef([]), R27 = u35.useRef(null), D14 = u35.useRef(null), ne12 = u35.useMemo(() => ({ get current() {
    return p31.current[0] ?? null;
  } }), []), P17 = F6({ id: y24 }), re8 = y13(b14, Oe5, ne12, true, P17), oe10 = b14 == null ? re8 : void 0, j17 = te7({}), ae11 = Mt4(j17["aria-describedby"], x21), q15 = Me4(F14), Se8 = q15?.slotPattern, Qe7 = q15?.getRootPattern(i38), Ie7 = de8 ?? q15?.inputMode, Xe11 = Number.isInteger(i38) && i38 > 0, l19 = Q11(c40, i38, F14, A17), H16 = I8(l19), ie10 = l19 !== "", [kt8, Ye6] = u35.useState(0), [et7, tt8] = u35.useState(() => Math.min(l19.length, i38 - 1)), [ye9, we7] = u35.useState(false), Ae7 = ye9 ? Math.min(et7, Math.max(i38 - 1, 0)) : Math.min(l19.length, i38 - 1);
  o2(() => {
    N20(ie10);
  }, [ie10, N20]), d21(ne12, P17, l19);
  let J18 = E((n61) => {
    let a38 = Math.min(Math.max(n61, 0), Math.max(p31.current.length - 1, 0)), f35 = p31.current[a38];
    f35?.focus(), f35?.select();
  }), Ce7 = E((n61, a38) => {
    R27.current = { index: n61, value: a38 };
  });
  function nt9() {
    let n61 = M20.inputRef.current?.form ?? p31.current[0]?.form ?? null;
    if (m25) {
      let a38 = n13(I26.current).getElementById(m25);
      a38?.tagName === "FORM" && (n61 = a38);
    }
    n61 && typeof n61.requestSubmit == "function" && n61.requestSubmit();
  }
  function ke8(n61, a38) {
    w22?.(n61, a38), V12 && nt9();
  }
  u16(l19, () => {
    be8(e58), $9(l19 !== _19.initialValue), E30() ? M20.commit(l19) : M20.commit(l19, true);
    let n61 = D14.current;
    n61 != null && (D14.current = null, n61.value === l19 && ke8(l19, n61.eventDetails));
    let a38 = R27.current;
    a38 != null && (R27.current = null, a38.value === l19 && J18(a38.index));
  });
  let Te7 = E((n61, a38) => {
    let f35 = Q11(n61, i38, F14, A17), K14 = f35.length === i38 && (H16.current.length !== i38 || a38.reason === s4.inputPaste) ? vt3(a38) : null;
    return f35 === H16.current ? (K14 != null && ke8(f35, K14), null) : (B17?.(f35, a38), a38.isCanceled ? null : (h24(f35), K14 != null ? D14.current = { value: f35, eventDetails: K14 } : f35.length !== i38 && (D14.current = null), f35));
  }), Ve7 = E((n61, a38) => {
    fe7?.(n61, a38);
  }), Ne7 = E((n61, a38) => {
    if (n61 > H16.current.length) {
      J18(Math.min(H16.current.length, i38 - 1));
      return;
    }
    tt8(n61), we7(true), ee7(true), a38.currentTarget.select();
  }), Le7 = E((n61) => {
    u9(I26.current, n61.relatedTarget) || (xe9(true), we7(false), ee7(false), Pe6 === "onBlur" && M20.commit(H16.current));
  }), Be6 = u35.useCallback((n61) => {
    if (P17 != null) return n61 === 0 ? P17 : `${P17}-${n61 + 1}`;
  }, [P17]), Fe5 = u35.useMemo(() => ({ ...o62, complete: l19.length === i38, disabled: L20, filled: ie10, focused: ye9, length: i38, readOnly: v17, required: k17, value: l19 }), [L20, o62, ie10, ye9, i38, v17, k17, l19]), rt9 = u35.useMemo(() => ({ autoComplete: d31, activeIndex: Ae7, disabled: L20, form: m25, focusInput: J18, queueFocusInput: Ce7, getInputId: Be6, handleInputBlur: Le7, handleInputFocus: Ne7, inputMode: Ie7, inputAriaLabelledBy: oe10, invalid: O14, length: i38, mask: z17, pattern: Se8, reportValueInvalid: Ve7, readOnly: v17, required: k17, normalizeValue: A17, setValue: Te7, state: Fe5, validationType: F14, value: l19 }), [Ae7, d31, L20, J18, m25, Be6, Le7, Ne7, Ie7, oe10, O14, i38, z17, Se8, Ce7, v17, Ve7, k17, A17, Te7, Fe5, F14, l19]), ot5 = J("div", r49, { ref: [s54, I26], state: Fe5, props: [{ role: "group", "aria-describedby": ae11, "aria-labelledby": re8 }, ge10], stateAttributesMapping: je4 });
  return Ge4(k, { elementsRef: p31, onMapChange: (n61) => {
    Ye6(n61.size);
  }, children: Ft3(ve5.Provider, { value: rt9, children: [ot5, Xe11 && Ge4("input", { ...M20.getInputValidationProps({ onFocus() {
    J18(0);
  }, onChange(n61) {
    if (n61.nativeEvent.defaultPrevented || L20 || v17) {
      n61.preventBaseUIHandler?.();
      return;
    }
    let a38 = n61.currentTarget.value, [f35, K14] = G12(a38, i38, F14, A17);
    K14 && Ve7(a38, d3(s4.inputChange, n61.nativeEvent));
    let le9 = Te7(f35, u4(s4.inputChange, n61.nativeEvent));
    le9 != null && le9 !== "" && Ce7(le9.length - 1, le9);
  } }), ref: M20.inputRef, type: "text", id: P17 && e58 == null ? `${P17}-hidden-input` : void 0, form: m25, name: e58, value: l19, autoComplete: d31, inputMode: Ie7, minLength: i38, maxLength: i38, pattern: Qe7, disabled: L20, readOnly: v17, required: k17, "aria-hidden": true, tabIndex: -1, style: e58 ? t13 : e8 })] }) });
});
function vt3(t48) {
  return t48.reason === s4.inputChange || t48.reason === s4.inputPaste ? d3(t48.reason, t48.event) : null;
}
function Mt4(...t48) {
  let r49 = t48.flatMap((s54) => s54?.split(/\s+/).filter(Boolean) ?? []);
  return r49.length > 0 ? Array.from(new Set(r49)).join(" ") : void 0;
}
var He5 = Y14.forwardRef(function(r49, s54) {
  let { "aria-label": x21, "aria-labelledby": b14, render: y24, className: d31, style: C18, ...T17 } = r49, { activeIndex: B17, autoComplete: w22, disabled: m25, form: i38, focusInput: V12, queueFocusInput: z17, getInputId: de8, handleInputBlur: F14, handleInputFocus: A17, inputMode: pe9, inputAriaLabelledBy: v17, invalid: k17, length: g20, mask: fe7, pattern: De10, reportValueInvalid: me7, readOnly: Z17, required: ge10, normalizeValue: $9, setValue: _19, state: he6, validationType: N20, value: O14 } = ze4(), { ref: Re8, index: o62 } = N2({ indexGuessBehavior: I5.GuessFromOrder }), M20 = Y14.useRef(null), Pe6 = o4(), E30 = O14[o62] ?? "", ee7 = $e3(he6, E30, o62), xe9 = x21, be8 = b14 ?? v17, te7 = o62 === 0 ? void 0 : xe9, Oe5 = { id: de8(o62), value: E30, type: fe7 ? "password" : "text", inputMode: pe9, autoComplete: o62 === 0 ? w22 : "off", autoCorrect: "off", spellCheck: "false", enterKeyHint: o62 === g20 - 1 ? "done" : "next", maxLength: o62 === 0 ? g20 : 1, tabIndex: B17 === o62 ? 0 : -1, disabled: m25, form: i38, pattern: De10, readOnly: Z17, required: ge10, "aria-labelledby": te7 == null ? be8 : void 0, "aria-invalid": k17 || void 0, "aria-label": te7, onMouseDown(e58) {
    e58.defaultPrevented || m25 || (e58.preventDefault(), V12(o62));
  }, onFocus(e58) {
    e58.defaultPrevented || m25 || A17(o62, e58);
  }, onBlur(e58) {
    e58.defaultPrevented || F14(e58);
  }, onChange(e58) {
    if (e58.defaultPrevented || m25 || Z17) return;
    let c40 = e58.currentTarget.value, [h24, I26] = G12(c40, g20, N20, $9);
    if (I26 && me7(c40, d3(s4.inputChange, e58.nativeEvent)), h24 === "") {
      c40 === "" ? _19(se7(O14, o62), u4(s4.inputClear, e58.nativeEvent)) : E30 !== "" && (e58.currentTarget.value = E30, e58.currentTarget.select());
      return;
    }
    let p31 = Ee3(O14, o62, h24, g20, N20, $9), R27 = _19(p31, u4(s4.inputChange, e58.nativeEvent));
    if (R27 != null) {
      let D14 = Math.min(o62 + h24.length, g20 - 1);
      z17(D14, R27);
    }
  }, onKeyDown(e58) {
    if (e58.defaultPrevented || m25) return;
    let c40 = 0, h24 = Math.max(g20 - 1, c40), I26 = Math.min(O14.length, h24), p31 = (e58.ctrlKey || e58.metaKey) && !e58.altKey, R27 = Pe6 === "rtl", D14 = R27 ? "ArrowRight" : "ArrowLeft", ne12 = R27 ? "ArrowLeft" : "ArrowRight";
    if (e58.key === D14) {
      p7(e58), V12(p31 ? c40 : Math.max(c40, o62 - 1));
      return;
    }
    if (e58.key === ne12) {
      p7(e58), V12(p31 ? I26 : Math.min(h24, o62 + 1));
      return;
    }
    if (e58.key === "Home" || e58.key === "ArrowUp") {
      p7(e58), V12(c40);
      return;
    }
    if (e58.key === "End" || e58.key === "ArrowDown") {
      p7(e58), V12(I26);
      return;
    }
    if (Z17) return;
    function P17(j17, ae11) {
      let q15 = _19(j17, u4(s4.keyboard, e58.nativeEvent));
      q15 != null && z17(ae11, q15);
    }
    if (e58.key === "Backspace" && p31) {
      p7(e58), P17("", c40);
      return;
    }
    if (e58.key === "Delete") {
      p7(e58), P17(se7(O14, o62), o62);
      return;
    }
    let re8 = e58.currentTarget.value, oe10 = e58.currentTarget.selectionStart === 0 && e58.currentTarget.selectionEnd === re8.length;
    if (e58.key.length === 1 && oe10 && E30 === e58.key) {
      p7(e58), o62 < g20 - 1 && V12(o62 + 1);
      return;
    }
    if (e58.key === "Backspace") {
      p7(e58);
      let j17 = Math.max(c40, o62 - 1);
      P17(se7(O14, E30 === "" ? j17 : o62), j17);
    }
  }, onPaste(e58) {
    if (e58.defaultPrevented || m25 || Z17) return;
    let c40 = "";
    try {
      c40 = e58.clipboardData?.getData("text/plain") ?? "";
    } catch {
      return;
    }
    e58.preventDefault();
    let [h24, I26] = G12(c40, g20, N20, $9);
    if (I26 && me7(c40, d3(s4.inputPaste, e58.nativeEvent)), h24 === "") return;
    let p31 = _19(Ee3(O14, o62, h24, g20, N20, $9), u4(s4.inputPaste, e58.nativeEvent));
    if (p31 != null) {
      let R27 = Math.min(o62 + h24.length, g20 - 1);
      z17(R27, p31);
    }
  } };
  return J("input", r49, { ref: [s54, Re8, M20], state: ee7, props: [Oe5, T17], stateAttributesMapping: qe2 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/popover.mjs
import * as N14 from "react";
import * as Q12 from "react";
import * as M15 from "react";
import * as ce5 from "react-dom";
import { jsx as X8, jsxs as Co } from "react/jsx-runtime";
import * as w19 from "react";
import { jsx as Z13, jsxs as Ao3 } from "react/jsx-runtime";
import * as Re6 from "react";
import * as ee4 from "react";
import { jsx as ve6 } from "react/jsx-runtime";
import * as K8 from "react";
import * as oe7 from "react";
import { jsx as he2, jsxs as zo2 } from "react/jsx-runtime";
import * as te5 from "react";
import * as b11 from "react";
import { jsx as Zo } from "react/jsx-runtime";
import { jsx as Ne4 } from "react/jsx-runtime";
import * as Me5 from "react";
import * as be5 from "react";
import * as Fe4 from "react";
import * as Ae5 from "react";
import * as De5 from "react";
import * as je5 from "react";
var Ye5 = Object.defineProperty;
var Je5 = (e58, o62) => {
  for (var t48 in o62) Ye5(e58, t48, { get: o62[t48], enumerable: true });
};
var We6 = {};
Je5(We6, { Arrow: () => we4, Backdrop: () => _e3, Close: () => Be4, Description: () => Ve4, Handle: () => z11, Popup: () => Ie4, Portal: () => Ce4, Positioner: () => Ee4, Root: () => me4, Title: () => ke4, Trigger: () => ge6, Viewport: () => Ue7, createHandle: () => Ke6 });
var ne8 = Q12.createContext(void 0);
function m20(e58) {
  let o62 = Q12.useContext(ne8);
  if (o62 === void 0 && !e58) throw new Error(f2(47));
  return o62;
}
function no2() {
  return { ...Ce(), disabled: false, modal: false, focusManagerModal: false, instantType: void 0, openMethod: null, openChangeReason: null, titleElementId: void 0, descriptionElementId: void 0, stickIfOpen: true, nested: false, openOnHover: false, closeDelay: 0, hasViewport: false };
}
var so = { ...Re3, disabled: ut2((e58) => e58.disabled), instantType: ut2((e58) => e58.instantType), openMethod: ut2((e58) => e58.openMethod), openChangeReason: ut2((e58) => e58.openChangeReason), modal: ut2((e58) => e58.modal), focusManagerModal: ut2((e58) => e58.focusManagerModal), stickIfOpen: ut2((e58) => e58.stickIfOpen), titleElementId: ut2((e58) => e58.titleElementId), descriptionElementId: ut2((e58) => e58.descriptionElementId), openOnHover: ut2((e58) => e58.openOnHover), closeDelay: ut2((e58) => e58.closeDelay), hasViewport: ut2((e58) => e58.hasViewport) };
var L15 = class e52 extends oe3 {
  constructor(o62, t48, c40 = false) {
    let i38 = { ...no2(), ...o62 }, d31 = new b6();
    i38.open && o62?.mounted === void 0 && (i38.mounted = true), i38.floatingRootContext = Se(d31, t48, c40), super(i38, { popupRef: M15.createRef(), backdropRef: M15.createRef(), internalBackdropRef: M15.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerFocusTargetRef: M15.createRef(), beforeContentFocusGuardRef: M15.createRef(), stickIfOpenTimeout: new n17(), triggerElements: d31 }, so);
  }
  setOpen = (o62, t48) => {
    let c40 = t48.reason === s4.triggerHover, i38 = t48.reason === s4.triggerPress && t48.event.detail === 0, d31 = !o62 && (t48.reason === s4.escapeKey || t48.reason == null);
    t48.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    let s54 = this.select("activeTriggerId");
    if (!o62 && t48.reason === s4.closePress && t48.trigger == null && s54 != null && (t48.trigger = this.context.triggerElements.getById(s54) ?? this.select("activeTriggerElement") ?? void 0), this.context.onOpenChange?.(o62, t48), t48.isCanceled) return;
    this.state.floatingRootContext.dispatchOpenChange(o62, t48);
    let a38 = () => {
      let p31 = { open: o62, openChangeReason: t48.reason };
      ge2(p31, o62, t48.trigger), this.update(p31);
    };
    c40 ? (this.set("stickIfOpen", true), this.context.stickIfOpenTimeout.start(e10, () => {
      this.set("stickIfOpen", false);
    }), ce5.flushSync(a38)) : a38(), i38 || d31 ? this.set("instantType", i38 ? "click" : "dismiss") : t48.reason === s4.focusOut ? this.set("instantType", "focus") : this.set("instantType", void 0);
  };
  static useStore(o62, t48) {
    let { store: c40, internalStore: i38 } = ce2(o62, (d31, s54) => new e52(t48, d31, s54));
    return M15.useEffect(() => i38?.disposeEffect(), [i38]), c40;
  }
  disposeEffect = () => this.context.stickIfOpenTimeout.disposeEffect();
};
function le6({ props: e58 }) {
  let { children: o62, open: t48, defaultOpen: c40 = false, onOpenChange: i38, onOpenChangeComplete: d31, modal: s54 = false, handle: a38, triggerId: p31, defaultTriggerId: r49 = null } = e58, n61 = L15.useStore(a38?.store, { modal: s54, open: c40, openProp: t48, activeTriggerId: r49, triggerIdProp: p31 });
  n16(() => {
    t48 === void 0 && n61.state.open === false && c40 === true && n61.update({ open: true, activeTriggerId: r49 });
  }), n61.useControlledProp("openProp", t48), n61.useControlledProp("triggerIdProp", p31);
  let f35 = n61.useState("open"), g20 = n61.useState("mounted"), P17 = n61.useState("payload"), C18 = d15() != null;
  n61.useContextCallback("onOpenChange", i38), n61.useContextCallback("onOpenChangeComplete", d31), de2(n61, f35), pe3(n61);
  let { forceUnmount: E30 } = fe2(f35, n61, () => {
    n61.update({ stickIfOpen: true, openChangeReason: null });
  });
  n61.useSyncedValues({ modal: s54, nested: C18 }), N14.useEffect(() => {
    f35 || n61.context.stickIfOpenTimeout.clear();
  }, [n61, f35]);
  let l19 = N14.useCallback(() => {
    n61.setOpen(false, u4(s4.imperativeAction));
  }, [n61]);
  N14.useImperativeHandle(e58.actionsRef, () => ({ unmount: E30, close: l19 }), [E30, l19]);
  let v17 = f35 || g20, _19 = N14.useMemo(() => ({ store: n61 }), [n61]);
  return Co(ne8.Provider, { value: _19, children: [v17 && X8(xo, { store: n61, modal: s54 }), typeof o62 == "function" ? o62({ payload: P17 }) : o62] });
}
function me4(e58) {
  return m20(true) ? X8(le6, { props: e58 }) : X8(I10, { children: X8(le6, { props: e58 }) });
}
function xo({ store: e58, modal: o62 }) {
  let t48 = e58.useState("floatingRootContext"), c40 = zo(t48, { outsidePressEvent: { mouse: o62 === "trap-focus" ? "sloppy" : "intentional", touch: "sloppy" } }), i38 = c40.reference ?? o7, d31 = c40.trigger ?? o7, s54 = N14.useMemo(() => d2(le2, c40.floating), [c40.floating]);
  return ae3(e58, { activeTriggerProps: i38, inactiveTriggerProps: d31, popupProps: s54 }), null;
}
var ge6 = w19.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, disabled: s54 = false, nativeButton: a38 = true, handle: p31, payload: r49, openOnHover: n61 = false, delay: f35 = 300, closeDelay: g20 = 0, id: P17, ...C18 } = o62, E30 = m20(true), l19 = p31?.store ?? E30?.store;
  if (!l19) throw new Error(f2(74));
  let v17 = r5(P17), _19 = l19.useState("isTriggerActive", v17), u37 = l19.useState("floatingRootContext"), A17 = l19.useState("isOpenedByTrigger", v17), V12 = l19.useState("triggerPopupId", v17), S18 = w19.useRef(null), { registerTrigger: F14, isMountedByThisTrigger: x21 } = se4(v17, S18, l19, { payload: r49, disabled: s54, openOnHover: n61, closeDelay: g20 }), O14 = l19.useState("openChangeReason"), D14 = l19.useState("stickIfOpen"), B17 = l19.useState("openMethod"), W14 = l19.useState("focusManagerModal"), H16 = Ns(u37, { enabled: u37 != null && n61 && (B17 !== "touch" || O14 !== s4.triggerPress), mouseOnly: true, move: false, handleClose: mc(), restMs: f35, delay: { close: g20 }, triggerElementRef: S18, isActiveTrigger: _19, isClosing: () => l19.select("transitionStatus") === "ending" }), Y18 = Mo(u37, { enabled: u37 != null, stickIfOpen: D14 }), J18 = p15(() => l19.select("open"), (I26) => {
    l19.set("openMethod", I26);
  }), $9 = l19.useState("triggerProps", x21), { getButtonProps: k17, buttonRef: j17 } = Q({ disabled: s54, native: a38 }), T17 = { open(I26) {
    return I26 && O14 === s4.triggerPress ? a19.open(I26) : c19.open(I26);
  } }, { preFocusGuardRef: U11, handlePreFocusGuardFocus: h24, handleFocusTargetFocus: re8 } = d27(l19, S18), y24 = J("button", o62, { state: { disabled: s54, open: A17 }, ref: [j17, t48, F14, S18], props: [Y18.reference, H16, $9, J18, { [_4]: "", id: v17, "aria-haspopup": "dialog", "aria-expanded": A17, "aria-controls": V12 }, C18, k17], stateAttributesMapping: T17 });
  return x21 && !W14 ? Ao3(w19.Fragment, { children: [Z13(R8, { ref: U11, onFocus: h24 }), Z13(w19.Fragment, { children: y24 }, v17), Z13(R8, { ref: l19.context.triggerFocusTargetRef, onFocus: re8 })] }) : Z13(w19.Fragment, { children: y24 }, v17);
});
var se8 = ee4.createContext(void 0);
function Pe3() {
  let e58 = ee4.useContext(se8);
  if (e58 === void 0) throw new Error(f2(45));
  return e58;
}
var Ce4 = Re6.forwardRef(function(o62, t48) {
  let { keepMounted: c40 = false, ...i38 } = o62, { store: d31 } = m20();
  return d31.useState("mounted") || c40 ? ve6(se8.Provider, { value: c40, children: ve6(eo, { ref: t48, ...i38 }) }) : null;
});
var ie4 = oe7.createContext(void 0);
function G13() {
  let e58 = oe7.useContext(ie4);
  if (!e58) throw new Error(f2(46));
  return e58;
}
var Ee4 = K8.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, anchor: s54, positionMethod: a38 = "absolute", side: p31 = "bottom", align: r49 = "center", sideOffset: n61 = 0, alignOffset: f35 = 0, collisionBoundary: g20 = "clipping-ancestors", collisionPadding: P17 = 5, arrowPadding: C18 = 5, sticky: E30 = false, disableAnchorTracking: l19 = false, collisionAvoidance: v17 = S8, ..._19 } = o62, { store: u37 } = m20(), A17 = Pe3(), V12 = T5(), S18 = u37.useState("floatingRootContext"), F14 = u37.useState("mounted"), x21 = u37.useState("open"), O14 = u37.useState("openChangeReason"), D14 = u37.useState("activeTriggerElement"), B17 = u37.useState("modal"), W14 = u37.useState("openMethod"), H16 = u37.useState("positionerElement"), Y18 = u37.useState("instantType"), J18 = u37.useState("transitionStatus"), $9 = u37.useState("hasViewport"), k17 = K8.useRef(null), j17 = y7(H16, false, false), T17 = Lt2({ anchor: s54, floatingRootContext: S18, positionMethod: a38, mounted: F14, side: p31, sideOffset: n61, align: r49, alignOffset: f35, arrowPadding: C18, collisionBoundary: g20, collisionPadding: P17, sticky: E30, disableAnchorTracking: l19, keepMounted: A17, nodeId: V12, collisionAvoidance: v17, adaptiveOrigin: $9 ? Y5 : void 0 }), U11 = S18.useState("domReferenceElement");
  o2(() => {
    let y24 = U11, I26 = k17.current;
    if (y24 && (k17.current = y24), I26 && y24 && y24 !== I26) {
      u37.set("instantType", void 0);
      let pe9 = new AbortController();
      return j17(() => {
        u37.set("instantType", "trigger-change");
      }, pe9.signal), () => {
        pe9.abort();
      };
    }
  }, [U11, j17, u37]), L10(x21 && B17 === true && O14 !== s4.triggerHover, W14 === "touch", H16, D14);
  let h24 = K8.useCallback((y24) => {
    u37.set("positionerElement", y24);
  }, [u37]), re8 = { open: x21, side: T17.side, align: T17.align, anchorHidden: T17.anchorHidden, instant: Y18 }, ae11 = g14(o62, re8, { styles: T17.positionerStyles, transitionStatus: J18, props: _19, refs: [t48, h24], hidden: !F14, inert: !x21 });
  return zo2(ie4.Provider, { value: T17, children: [F14 && B17 === true && O14 !== s4.triggerHover && he2(l12, { ref: u37.context.internalBackdropRef, inert: s22(!x21), cutout: D14 }), he2(v6, { id: V12, children: ae11 })] });
});
var Se3 = b11.createContext(void 0);
function Oe3() {
  let [e58, o62] = b11.useState(0), t48 = E(() => (o62((i38) => i38 + 1), () => {
    o62((i38) => Math.max(0, i38 - 1));
  }));
  return { context: b11.useMemo(() => ({ register: t48 }), [t48]), hasClosePart: e58 > 0 };
}
function Te4(e58) {
  let { value: o62, children: t48 } = e58;
  return Zo(Se3.Provider, { value: o62, children: t48 });
}
function ye6() {
  let e58 = b11.useContext(Se3);
  o2(() => e58?.register(), [e58]);
}
var mt4 = { ...g11, ...i7 };
var Ie4 = te5.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, initialFocus: s54, finalFocus: a38, ...p31 } = o62, { store: r49 } = m20(), n61 = G13(), f35 = s39(true) != null, { context: g20, hasClosePart: P17 } = Oe3(), C18 = r49.useState("open"), E30 = r49.useState("openMethod"), l19 = r49.useState("instantType"), v17 = r49.useState("transitionStatus"), _19 = r49.useState("popupProps"), u37 = r49.useState("titleElementId"), A17 = r49.useState("descriptionElementId"), V12 = r49.useState("modal"), S18 = r49.useState("mounted"), F14 = r49.useState("openChangeReason"), x21 = r49.useState("activeTriggerElement"), O14 = r49.useState("floatingRootContext"), D14 = O14.useState("floatingId"), B17 = r49.useState("disabled"), W14 = r49.useState("openOnHover"), H16 = r49.useState("closeDelay"), Y18 = p31.id ?? D14;
  p10({ open: C18, ref: r49.context.popupRef, onComplete() {
    C18 && r49.context.onOpenChangeComplete?.(true);
  } }), Ps(O14, { enabled: W14 && !B17, closeDelay: H16 });
  function J18(h24) {
    return h24 === "touch" ? r49.context.popupRef.current : true;
  }
  let $9 = s54 === void 0 ? J18 : s54, k17 = V12 !== false && P17;
  r49.useSyncedValue("focusManagerModal", k17);
  let j17 = te5.useCallback((h24) => {
    r49.set("popupElement", h24);
  }, [r49]), T17 = { open: C18, side: n61.side, align: n61.align, instant: l19, transitionStatus: v17 }, U11 = J("div", o62, { state: T17, ref: [t48, r49.context.popupRef, j17], props: [_19, { id: Y18, role: "dialog", ...le2, "aria-labelledby": u37, "aria-describedby": A17, onKeyDown(h24) {
    f35 && Y2.has(h24.key) && h24.stopPropagation();
  } }, T8(v17), p31], stateAttributesMapping: mt4 });
  return Ne4(To, { context: O14, openInteractionType: E30, modal: k17, disabled: !S18 || F14 === s4.triggerHover, initialFocus: $9, returnFocus: a38, restoreFocus: "popup", previousFocusableElement: g4(x21) ? x21 : void 0, nextFocusableElement: r49.context.triggerFocusTargetRef, beforeContentFocusGuardRef: r49.context.beforeContentFocusGuardRef, children: Ne4(Te4, { value: g20, children: U11 }) });
});
var we4 = Me5.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, ...s54 } = o62, { store: a38 } = m20(), p31 = a38.useState("open"), { arrowRef: r49, side: n61, align: f35, arrowUncentered: g20, arrowStyles: P17 } = G13();
  return J("div", o62, { state: { open: p31, side: n61, align: f35, uncentered: g20 }, ref: [t48, r49], props: [{ style: P17, "aria-hidden": true }, s54], stateAttributesMapping: g11 });
});
var Ct5 = { ...g11, ...i7 };
var _e3 = be5.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, ...s54 } = o62, { store: a38 } = m20(), p31 = a38.useState("open"), r49 = a38.useState("mounted"), n61 = a38.useState("transitionStatus"), f35 = a38.useState("openChangeReason");
  return J("div", o62, { state: { open: p31, transitionStatus: n61 }, ref: [a38.context.backdropRef, t48], props: [{ role: "presentation", hidden: !r49, style: { pointerEvents: f35 === s4.triggerHover ? "none" : void 0, userSelect: "none", WebkitUserSelect: "none" } }, s54], stateAttributesMapping: Ct5 });
});
var ke4 = Fe4.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, ...s54 } = o62, { store: a38 } = m20(), p31 = r5(s54.id);
  return a38.useSyncedValueWithCleanup("titleElementId", p31), J("h2", o62, { ref: t48, props: [{ id: p31 }, s54] });
});
var Ve4 = Ae5.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, ...s54 } = o62, { store: a38 } = m20(), p31 = r5(s54.id);
  return a38.useSyncedValueWithCleanup("descriptionElementId", p31), J("p", o62, { ref: t48, props: [{ id: p31 }, s54] });
});
var Be4 = De5.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, disabled: s54 = false, nativeButton: a38 = true, ...p31 } = o62, { buttonRef: r49, getButtonProps: n61 } = Q({ disabled: s54, focusableWhenDisabled: false, native: a38 }), { store: f35 } = m20();
  return ye6(), J("button", o62, { ref: [t48, r49], props: [{ onClick(P17) {
    f35.setOpen(false, u4(s4.closePress, P17.nativeEvent));
  } }, p31, n61] });
});
var He6 = function(e58) {
  return e58.popupWidth = "--popup-width", e58.popupHeight = "--popup-height", e58;
}({});
var wt5 = { activationDirection: (e58) => e58 ? { "data-activation-direction": e58 } : null };
var Ue7 = je5.forwardRef(function(o62, t48) {
  let { render: c40, className: i38, style: d31, children: s54, ...a38 } = o62, { store: p31 } = m20(), { side: r49 } = G13(), n61 = p31.useState("instantType"), { children: f35, state: g20 } = De2({ store: p31, side: r49, cssVars: He6, children: s54 }), P17 = { activationDirection: g20.activationDirection, transitioning: g20.transitioning, instant: n61 };
  return J("div", o62, { state: P17, ref: t48, props: [a38, { children: f35 }], stateAttributesMapping: wt5 });
});
var z11 = class {
  constructor() {
    this.store = new L15();
  }
  open(o62) {
    let t48 = o62 ? this.store.context.triggerElements.getById(o62) ?? void 0 : void 0;
    if (o62 && !t48) throw new Error(f2(80, o62));
    this.store.setOpen(true, u4(s4.imperativeAction, void 0, t48));
  }
  close() {
    this.store.setOpen(false, u4(s4.imperativeAction, void 0, void 0));
  }
  get isOpen() {
    return this.store.select("open");
  }
};
function Ke6() {
  return new z11();
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/preview-card.mjs
import * as y18 from "react";
import * as _13 from "react";
import * as J12 from "react";
import * as K9 from "react-dom";
import { jsx as A14, jsxs as Je6 } from "react/jsx-runtime";
import * as Z14 from "react";
import * as D12 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/FloatingPortalLite.mjs
import * as t44 from "react";
import * as a33 from "react-dom";
import { jsxs as m21 } from "react/jsx-runtime";
var N15 = t44.forwardRef(function(r49, i38) {
  let { children: l19, container: n61, className: p31, render: d31, style: u37, ...s54 } = r49, { portalNode: e58, portalSubtree: o62 } = Cn({ container: n61, ref: i38, componentProps: r49, elementProps: s54 });
  return !o62 && !e58 ? null : m21(t44.Fragment, { children: [o62, e58 && a33.createPortal(l19, e58)] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/preview-card.mjs
import { jsx as Q13 } from "react/jsx-runtime";
import * as te6 from "react";
import * as ne9 from "react";
import * as V9 from "react";
import { jsx as re6 } from "react/jsx-runtime";
import * as se9 from "react";
import * as pe7 from "react";
import * as de6 from "react";
import * as fe5 from "react";
var xe6 = Object.defineProperty;
var he3 = (o62, e58) => {
  for (var t48 in e58) xe6(o62, t48, { get: e58[t48], enumerable: true });
};
var ve7 = {};
he3(ve7, { Arrow: () => ce6, Backdrop: () => ue6, Handle: () => T12, Popup: () => ae9, Portal: () => ee5, Positioner: () => ie5, Root: () => z12, Trigger: () => oe8, Viewport: () => le7, createHandle: () => Pe4 });
var U8 = _13.createContext(void 0);
function m22(o62) {
  let e58 = _13.useContext(U8);
  if (e58 === void 0 && !o62) throw new Error(f2(50));
  return e58;
}
var De6 = { ...Re3, instantType: ut2((o62) => o62.instantType), hasViewport: ut2((o62) => o62.hasViewport) };
var E26 = class o58 extends oe3 {
  constructor(e58, t48, i38 = false) {
    let a38 = new b6(), p31 = { ...Ve5(), ...e58 };
    p31.floatingRootContext = Se(a38, t48, i38), super(p31, { popupRef: J12.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerElements: a38, closeDelayRef: { current: 300 }, inlineRectCoordsRef: { current: void 0 } }, De6);
  }
  setOpen = (e58, t48) => {
    let i38 = t48.reason, a38 = i38 === s4.triggerHover, p31 = e58 && i38 === s4.triggerFocus, u37 = !e58 && (i38 === s4.triggerPress || i38 === s4.escapeKey);
    if (t48.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    }, this.context.onOpenChange?.(e58, t48), t48.isCanceled) return;
    let n61 = t48.event;
    e58 && a38 && t48.trigger && "clientX" in n61 && "clientY" in n61 && this.context.inlineRectCoordsRef.current?.element !== t48.trigger && V4(this.context.inlineRectCoordsRef, t48.trigger, n61.clientX, n61.clientY), this.state.floatingRootContext.dispatchOpenChange(e58, t48);
    let d31 = () => {
      let s54 = { open: e58 };
      p31 ? s54.instantType = "focus" : u37 ? s54.instantType = "dismiss" : i38 === s4.triggerHover && (s54.instantType = void 0), ge2(s54, e58, t48.trigger), this.update(s54);
    };
    a38 ? K9.flushSync(d31) : d31();
  };
  static useStore(e58, t48) {
    return ce2(e58, (a38, p31) => new o58(t48, a38, p31)).store;
  }
};
function Ve5() {
  return { ...Ce(), instantType: void 0, hasViewport: false };
}
function q13(o62) {
  let { open: e58, defaultOpen: t48 = false, onOpenChange: i38, onOpenChangeComplete: a38, actionsRef: p31, handle: u37, triggerId: n61, defaultTriggerId: d31 = null, children: s54 } = o62, r49 = E26.useStore(u37?.store, { open: t48, openProp: e58, activeTriggerId: d31, triggerIdProp: n61 });
  n16(() => {
    e58 === void 0 && r49.state.open === false && t48 === true && r49.update({ open: true, activeTriggerId: d31 });
  }), r49.useControlledProp("openProp", e58), r49.useControlledProp("triggerIdProp", n61), r49.useContextCallback("onOpenChange", i38), r49.useContextCallback("onOpenChangeComplete", a38);
  let f35 = r49.useState("open"), l19 = r49.useState("activeTriggerId"), c40 = r49.useState("mounted"), C18 = r49.useState("payload");
  pe3(r49);
  let { forceUnmount: P17 } = fe2(f35, r49, () => {
    r49.context.inlineRectCoordsRef.current = void 0;
  });
  o2(() => {
    f35 && l19 == null && r49.set("payload", void 0);
  }, [r49, l19, f35]);
  let v17 = y18.useCallback(() => {
    r49.setOpen(false, u4(s4.imperativeAction));
  }, [r49]);
  y18.useImperativeHandle(p31, () => ({ unmount: P17, close: v17 }), [P17, v17]);
  let x21 = f35 || c40;
  return Je6(U8.Provider, { value: r49, children: [x21 && A14(Ke7, { store: r49 }), typeof s54 == "function" ? s54({ payload: C18 }) : s54] });
}
function Ke7({ store: o62 }) {
  let e58 = o62.useState("floatingRootContext"), t48 = zo(e58), i38 = t48.reference ?? o7, a38 = t48.trigger ?? o7, p31 = y18.useMemo(() => d2(le2, t48.floating), [t48.floating]);
  return ae3(o62, { activeTriggerProps: i38, inactiveTriggerProps: a38, popupProps: p31 }), null;
}
var z12 = I16(function(e58) {
  return m22(true) ? A14(q13, { ...e58 }) : A14(I10, { children: A14(q13, { ...e58 }) });
});
var j13 = D12.createContext(void 0);
function G14() {
  let o62 = D12.useContext(j13);
  if (o62 === void 0) throw new Error(f2(48));
  return o62;
}
var ee5 = Z14.forwardRef(function(e58, t48) {
  let { keepMounted: i38 = false, ...a38 } = e58;
  return m22().useState("mounted") || i38 ? Q13(j13.Provider, { value: i38, children: Q13(N15, { ref: t48, ...a38 }) }) : null;
});
var oe8 = N12(function(e58, t48) {
  let { render: i38, className: a38, delay: p31, closeDelay: u37, id: n61, payload: d31, handle: s54, style: r49, ...f35 } = e58, l19 = m22(true), c40 = s54?.store ?? l19;
  if (!c40) throw new Error(f2(89));
  let C18 = r5(n61), P17 = c40.useState("isTriggerActive", C18), v17 = c40.useState("isOpenedByTrigger", C18), x21 = c40.useState("floatingRootContext"), M20 = c40.context.inlineRectCoordsRef, g20 = te6.useRef(null), I26 = p31 ?? 600, h24 = u37 ?? 300, { registerTrigger: S18, isMountedByThisTrigger: w22 } = se4(C18, g20, c40, { payload: d31 });
  o2(() => {
    w22 && (c40.context.closeDelayRef.current = h24);
  }, [c40, w22, h24]);
  let b14 = Ns(x21, { mouseOnly: true, move: false, handleClose: mc(), delay: () => ({ open: I26, close: h24 }), triggerElementRef: g20, isActiveTrigger: P17, isClosing: () => c40.select("transitionStatus") === "ending" }), B17 = Rs(x21, { delay: I26 }), k17 = { open: v17 }, L20 = c40.useState("triggerProps", w22), H16 = Q6(M20, v17);
  return J("a", e58, { state: k17, ref: [t48, S18, g20], props: [b14, B17.reference, L20, H16, { id: C18 }, f35], stateAttributesMapping: c19 });
});
var Y15 = V9.createContext(void 0);
function N16() {
  let o62 = V9.useContext(Y15);
  if (o62 === void 0) throw new Error(f2(49));
  return o62;
}
var ie5 = ne9.forwardRef(function(e58, t48) {
  let { render: i38, className: a38, anchor: p31, positionMethod: u37 = "absolute", side: n61 = "bottom", align: d31 = "center", sideOffset: s54 = 0, alignOffset: r49 = 0, collisionBoundary: f35 = "clipping-ancestors", collisionPadding: l19 = 5, arrowPadding: c40 = 5, sticky: C18 = false, disableAnchorTracking: P17 = false, collisionAvoidance: v17 = S8, style: x21, ...M20 } = e58, g20 = m22(), I26 = G14(), h24 = T5(), S18 = g20.useState("open"), w22 = g20.useState("mounted"), b14 = g20.useState("floatingRootContext"), B17 = g20.useState("instantType"), k17 = g20.useState("transitionStatus"), L20 = g20.useState("hasViewport"), H16 = g20.context.inlineRectCoordsRef, R27 = Lt2({ anchor: p31, floatingRootContext: b14, positionMethod: u37, mounted: w22, side: n61, sideOffset: s54, align: d31, alignOffset: r49, arrowPadding: c40, collisionBoundary: f35, collisionPadding: l19, sticky: C18, disableAnchorTracking: P17, keepMounted: I26, nodeId: h24, collisionAvoidance: v17, adaptiveOrigin: L20 ? Y5 : void 0, inline: W9(H16) }), W14 = R27.update;
  o2(() => {
    S18 && w22 && W14();
  }, [S18, w22, W14]);
  let we7 = { open: S18, side: R27.side, align: R27.align, anchorHidden: R27.anchorHidden, instant: B17 }, Re8 = g14(e58, we7, { styles: R27.positionerStyles, transitionStatus: k17, props: M20, refs: [t48, g20.useStateSetter("positionerElement")], hidden: !w22, inert: !S18 });
  return re6(Y15.Provider, { value: R27, children: re6(v6, { id: h24, children: Re8 }) });
});
var Et6 = { ...g11, ...i7 };
var ae9 = se9.forwardRef(function(e58, t48) {
  let { className: i38, render: a38, style: p31, ...u37 } = e58, n61 = m22(), { side: d31, align: s54 } = N16(), r49 = n61.useState("open"), f35 = n61.useState("instantType"), l19 = n61.useState("transitionStatus"), c40 = n61.useState("popupProps"), C18 = n61.useState("floatingRootContext");
  p10({ open: r49, ref: n61.context.popupRef, onComplete() {
    r49 && n61.context.onOpenChangeComplete?.(true);
  } });
  let P17 = E(() => n61.context.closeDelayRef.current);
  return Ps(C18, { closeDelay: P17 }), J("div", e58, { state: { open: r49, side: d31, align: s54, instant: f35, transitionStatus: l19 }, ref: [t48, n61.context.popupRef, n61.useStateSetter("popupElement")], props: [c40, T8(l19), u37], stateAttributesMapping: Et6 });
});
var ce6 = pe7.forwardRef(function(e58, t48) {
  let { render: i38, className: a38, style: p31, ...u37 } = e58, n61 = m22(), { arrowRef: d31, side: s54, align: r49, arrowUncentered: f35, arrowStyles: l19 } = N16(), C18 = { open: n61.useState("open"), side: s54, align: r49, uncentered: f35 };
  return J("div", e58, { state: C18, ref: [d31, t48], props: [{ style: l19, "aria-hidden": true }, u37], stateAttributesMapping: g11 });
});
var _t5 = { ...g11, ...i7 };
var ue6 = de6.forwardRef(function(e58, t48) {
  let { render: i38, className: a38, style: p31, ...u37 } = e58, n61 = m22(), d31 = n61.useState("open"), s54 = n61.useState("mounted"), r49 = n61.useState("transitionStatus");
  return J("div", e58, { state: { open: d31, transitionStatus: r49 }, ref: [t48], props: [{ role: "presentation", hidden: !s54, style: { pointerEvents: "none", userSelect: "none", WebkitUserSelect: "none" } }, u37], stateAttributesMapping: _t5 });
});
var me5 = function(o62) {
  return o62.popupWidth = "--popup-width", o62.popupHeight = "--popup-height", o62;
}({});
var Vt5 = { activationDirection: (o62) => o62 ? { "data-activation-direction": o62 } : null };
var le7 = fe5.forwardRef(function(e58, t48) {
  let { render: i38, className: a38, style: p31, children: u37, ...n61 } = e58, d31 = m22(), s54 = N16(), r49 = d31.useState("instantType"), { children: f35, state: l19 } = De2({ store: d31, side: s54.side, cssVars: me5, children: u37 }), c40 = { activationDirection: l19.activationDirection, transitioning: l19.transitioning, instant: r49 };
  return J("div", e58, { state: c40, ref: t48, props: [n61, { children: f35 }], stateAttributesMapping: Vt5 });
});
var T12 = class {
  constructor() {
    this.store = new E26();
  }
  open(e58) {
    let t48 = e58 ? this.store.context.triggerElements.getById(e58) : void 0;
    if (e58 && !t48) throw new Error(f2(88, e58));
    this.store.setOpen(true, u4(s4.imperativeAction, void 0, t48));
  }
  close() {
    this.store.setOpen(false, u4(s4.imperativeAction, void 0, void 0));
  }
  get isOpen() {
    return this.store.select("open");
  }
};
function Pe4() {
  return new T12();
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/progress.mjs
import * as m23 from "react";
import * as P14 from "react";
import { jsx as y19, jsxs as J13 } from "react/jsx-runtime";
import * as A15 from "react";
import * as C15 from "react";
import * as w20 from "react";
import * as L16 from "react";
var $6 = Object.defineProperty;
var B13 = (e58, t48) => {
  for (var o62 in t48) $6(e58, o62, { get: t48[o62], enumerable: true });
};
var T13 = {};
B13(T13, { Indicator: () => I24, Label: () => S15, Root: () => h22, Track: () => M16, Value: () => _14 });
var E27 = P14.createContext(void 0);
function l18() {
  let e58 = P14.useContext(E27);
  if (e58 === void 0) throw new Error(f2(51));
  return e58;
}
var x18 = function(e58) {
  return e58.complete = "data-complete", e58.indeterminate = "data-indeterminate", e58.progressing = "data-progressing", e58;
}({});
var a34 = { status(e58) {
  return e58 === "progressing" ? { [x18.progressing]: "" } : e58 === "complete" ? { [x18.complete]: "" } : e58 === "indeterminate" ? { [x18.indeterminate]: "" } : null;
} };
function K10(e58, t48) {
  return t48 == null ? "indeterminate progress" : e58 || `${t48}%`;
}
var h22 = m23.forwardRef(function(t48, o62) {
  let { format: f35, getAriaValueText: d31 = K10, locale: p31, max: s54 = 100, min: n61 = 0, value: r49, render: i38, className: u37, children: c40, style: R27, ...N20 } = t48, [D14, v17] = m23.useState(), O14 = I8(f35), g20 = "indeterminate";
  Number.isFinite(r49) && (g20 = r49 === s54 ? "complete" : "progressing");
  let b14 = f32(r49, p31, O14.current), V12 = m23.useMemo(() => ({ status: g20 }), [g20]), k17 = { "aria-labelledby": D14, "aria-valuemax": s54, "aria-valuemin": n61, "aria-valuenow": r49 ?? void 0, "aria-valuetext": d31(b14, r49), role: "progressbar", children: J13(m23.Fragment, { children: [c40, y19("span", { role: "presentation", style: e8, children: "x" })] }) }, j17 = m23.useMemo(() => ({ formattedValue: b14, max: s54, min: n61, setLabelId: v17, state: V12, status: g20, value: r49 }), [b14, s54, n61, v17, V12, g20, r49]), F14 = J("div", t48, { state: V12, ref: o62, props: [k17, N20], stateAttributesMapping: a34 });
  return y19(E27.Provider, { value: j17, children: F14 });
});
var M16 = A15.forwardRef(function(t48, o62) {
  let { render: f35, className: d31, style: p31, ...s54 } = t48, { state: n61 } = l18();
  return J("div", t48, { state: n61, ref: o62, props: s54, stateAttributesMapping: a34 });
});
var I24 = C15.forwardRef(function(t48, o62) {
  let { render: f35, className: d31, style: p31, ...s54 } = t48, { max: n61, min: r49, value: i38, state: u37 } = l18(), c40 = Number.isFinite(i38) && i38 !== null ? n56(i38, r49, n61) : null, R27 = c40 == null ? {} : { insetInlineStart: 0, height: "inherit", width: `${c40}%` };
  return J("div", t48, { state: u37, ref: o62, props: [{ style: R27 }, s54], stateAttributesMapping: a34 });
});
var _14 = w20.forwardRef(function(t48, o62) {
  let { className: f35, render: d31, children: p31, style: s54, ...n61 } = t48, { value: r49, formattedValue: i38, state: u37 } = l18(), c40 = r49 == null ? "indeterminate" : i38, R27 = r49 == null ? null : i38;
  return J("span", t48, { state: u37, ref: o62, props: [{ "aria-hidden": true, children: typeof p31 == "function" ? p31(c40, r49) : R27 }, n61], stateAttributesMapping: a34 });
});
var S15 = L16.forwardRef(function(t48, o62) {
  let { render: f35, className: d31, style: p31, id: s54, ...n61 } = t48, { setLabelId: r49, state: i38 } = l18(), u37 = f28(s54, r49);
  return J("span", t48, { state: i38, ref: o62, props: [{ id: u37, role: "presentation" }, n61], stateAttributesMapping: a34 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/radio-group.mjs
import * as o60 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/radio-group/RadioGroupContext.mjs
import * as t45 from "react";
var e53 = t45.createContext(void 0);
function o59() {
  return t45.useContext(e53);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/radio-group.mjs
import { jsx as P15 } from "react/jsx-runtime";
var fe6 = [O4];
var me6 = o60.forwardRef(function(k17, E30) {
  let { render: G18, className: N20, disabled: T17, readOnly: l19, required: i38, onValueChange: v17, value: D14, defaultValue: M20, form: b14, name: O14, inputRef: s54, id: S18, style: w22, ...C18 } = k17, { setTouched: y24, setFocused: d31, shouldValidateOnChange: K14, validationMode: q15, name: A17, disabled: B17, state: c40, validation: a38, setDirty: _19, setFilled: j17, validityData: H16 } = E14(), { labelId: L20 } = s28(), { clearErrors: U11 } = n26(), W14 = r44(true), u37 = B17 || T17, f35 = A17 ?? O14, Y18 = r5(S18), [t48, z17] = m({ controlled: D14, default: M20, name: "RadioGroup", state: "value" }), [g20, m25] = o60.useState(false), V12 = E((e58, r49) => {
    v17?.(e58, r49), !r49.isCanceled && z17(e58);
  }), n61 = o60.useRef(null), h24 = o60.useRef(null), p31 = o60.useRef(null);
  function x21(e58) {
    let r49;
    return s54 && (typeof s54 == "function" ? r49 = s54(e58) : s54.current = e58), h24.current = e58, a38.inputRef.current = e58, r49;
  }
  let F14 = E((e58, r49 = false) => {
    if (e58) {
      if (r49) {
        n61.current === e58 && (n61.current = null);
        return;
      }
      n61.current == null && (n61.current = e58);
    }
  }), I26 = E((e58) => {
    if (!e58 || e58.disabled) return;
    p31.current || (p31.current = e58);
    let r49 = h24.current;
    if (e58.checked || r49 == null || r49.disabled) return x21(e58);
  });
  d21(n61, Y18, t48 ?? null), u16(t48, () => {
    U11(f35), _19(t48 !== H16.initialValue), j17(t48 != null), K14() ? a38.commit(t48) : a38.commit(t48, true);
    let e58 = p31.current;
    t48 == null && e58 && !e58.disabled && x21(e58);
  });
  let J18 = C18["aria-labelledby"] ?? L20 ?? W14?.legendId, Q16 = { ...c40, disabled: u37 ?? false, required: i38 ?? false, readOnly: l19 ?? false }, X11 = o60.useMemo(() => ({ ...c40, checkedValue: t48, disabled: u37, form: b14, validation: a38, name: f35, readOnly: l19, registerControlRef: F14, registerInputRef: I26, required: i38, setCheckedValue: V12, setTouched: m25, touched: g20 }), [t48, u37, b14, a38, c40, f35, l19, F14, I26, i38, V12, m25, g20]), Z17 = { role: "radiogroup", "aria-required": i38 || void 0, "aria-disabled": u37 || void 0, "aria-readonly": l19 || void 0, "aria-labelledby": J18, onFocus() {
    d31(true);
  }, onBlur(e58) {
    u9(e58.currentTarget, e58.relatedTarget) || (y24(true), d31(false), q15 === "onBlur" && a38.commit(t48));
  }, onKeyDownCapture(e58) {
    e58.key.startsWith("Arrow") && (y24(true), m25(true), d31(true));
  } };
  return P15(e53.Provider, { value: X11, children: P15(X5, { render: G18, className: N20, style: w22, state: Q16, props: [Z17, a38.getValidationProps, C18], refs: [E30], stateAttributesMapping: n25, enableHomeAndEndKeys: false, modifierKeys: fe6 }) });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/radio.mjs
import * as c39 from "react";
import * as x19 from "react";
import { jsx as z13, jsxs as ze5 } from "react/jsx-runtime";
import * as E28 from "react";
var Ie5 = Object.defineProperty;
var ve8 = (e58, i38) => {
  for (var u37 in i38) Ie5(e58, u37, { get: i38[u37], enumerable: true });
};
var Q14 = {};
ve8(Q14, { Indicator: () => Y16, Root: () => J14 });
var T14 = function(e58) {
  return e58.checked = "data-checked", e58.unchecked = "data-unchecked", e58.disabled = "data-disabled", e58.readonly = "data-readonly", e58.required = "data-required", e58.valid = "data-valid", e58.invalid = "data-invalid", e58.touched = "data-touched", e58.dirty = "data-dirty", e58.filled = "data-filled", e58.focused = "data-focused", e58;
}({});
var m24 = { checked(e58) {
  return e58 ? { [T14.checked]: "" } : { [T14.unchecked]: "" };
}, ...i7, ...n25 };
var _15 = x19.createContext(void 0);
function H14() {
  let e58 = x19.useContext(_15);
  if (e58 === void 0) throw new Error(f2(52));
  return e58;
}
var J14 = c39.forwardRef(function(i38, u37) {
  let { render: w22, className: B17, disabled: K14 = false, readOnly: I26 = false, required: v17 = false, "aria-labelledby": R27, value: o62, inputRef: g20, nativeButton: l19 = false, id: k17, style: P17, ...y24 } = i38, n61 = o59(), { disabled: N20, readOnly: X11, required: Z17, form: $9, checkedValue: A17, touched: ee7 = false, validation: te7, name: S18 } = n61 ?? {}, oe10 = n61?.setCheckedValue ?? e5, re8 = n61?.setTouched ?? e5, O14 = n61?.registerControlRef ?? e5, h24 = n61?.registerInputRef ?? e5, { setDirty: ne12, validityData: ie10, setTouched: ae11, setFilled: M20, state: q15, disabled: de8 } = E14(), se12 = n37(), { labelId: ce8, getDescriptionProps: ue7 } = s28(), r49 = de8 || se12.disabled || N20 || K14, a38 = X11 || I26, C18 = Z17 || v17, le9 = $9, d31 = n61 ? A17 === o62 : o62 === "", p31 = c39.useRef(null), s54 = c39.useRef(null), fe7 = E((t48) => {
    t48 && O14(t48, r49);
  }), pe9 = d(g20, s54, h24);
  o2(() => {
    s54.current?.checked && M20(true);
  }, [M20]), o2(() => {
    if (s54.current) {
      if (r49 && d31) {
        h24(null);
        return;
      }
      p31.current && O14(p31.current, r49), h24(s54.current);
    }
  }, [d31, r49, O14, h24]);
  let me7 = r5(), F14 = F6({ id: k17, implicit: false, controlRef: p31 }), G18 = l19 ? void 0 : F14, Re8 = y13(R27, ce8, s54, !l19, G18), ye9 = { role: "radio", "aria-checked": d31, "aria-required": C18 || void 0, "aria-readonly": a38 || void 0, "aria-labelledby": Re8, [t41]: d31 ? "" : void 0, id: l19 ? F14 : me7, onKeyDown(t48) {
    t48.key === "Enter" && t48.preventDefault();
  }, onClick(t48) {
    if (t48.defaultPrevented || r49 || a38) return;
    t48.preventDefault();
    let f35 = s54.current;
    f35 && f35.dispatchEvent(new (i10(f35)).PointerEvent("click", { bubbles: true, shiftKey: t48.shiftKey, ctrlKey: t48.ctrlKey, altKey: t48.altKey, metaKey: t48.metaKey }));
  }, onFocus(t48) {
    t48.defaultPrevented || r49 || a38 || !ee7 || (s54.current?.click(), re8(false));
  } }, { getButtonProps: he6, buttonRef: Ce7 } = Q({ disabled: r49, native: l19 }), xe9 = { type: "radio", ref: pe9, form: le9, id: G18, name: S18, tabIndex: -1, style: S18 ? t13 : e8, "aria-hidden": true, ...o62 !== void 0 ? { value: t18(o62) } : o7, disabled: r49, checked: d31, required: C18, readOnly: a38, onChange(t48) {
    if (t48.nativeEvent.defaultPrevented || r49 || a38 || o62 === void 0) return;
    let f35 = u4(s4.none, t48.nativeEvent);
    f35.isCanceled || (ae11(true), ne12(o62 !== ie10.initialValue), M20(true), oe10(o62, f35));
  }, onFocus() {
    p31.current?.focus();
  } }, V12 = c39.useMemo(() => ({ ...q15, required: C18, disabled: r49, readOnly: a38, checked: d31 }), [q15, r49, a38, d31, C18]), be8 = V12, L20 = n61 !== void 0, j17 = [u37, p31, Ce7, fe7], D14 = [ye9, ue7, te7?.getValidationProps ?? o7, y24, he6], Ee7 = J("span", i38, { enabled: !L20, state: V12, ref: j17, props: D14, stateAttributesMapping: m24 });
  return ze5(_15.Provider, { value: be8, children: [L20 ? z13(P10, { tag: "span", render: w22, className: B17, style: P17, state: V12, refs: j17, props: D14, stateAttributesMapping: m24 }) : Ee7, z13("input", { ...xe9, suppressHydrationWarning: true })] });
});
var Y16 = E28.forwardRef(function(i38, u37) {
  let { render: w22, className: B17, style: K14, keepMounted: I26 = false, ...v17 } = i38, R27 = H14(), o62 = R27.checked, { mounted: g20, transitionStatus: l19, setMounted: k17 } = g2(o62), P17 = { ...R27, transitionStatus: l19 }, y24 = E28.useRef(null), n61 = I26 || g20, N20 = J("span", i38, { ref: [u37, y24], state: P17, props: v17, stateAttributesMapping: m24 });
  return p10({ open: o62, ref: y24, onComplete() {
    o62 || k17(false);
  } }), n61 ? N20 : null;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/scroll-area.mjs
import * as r47 from "react";
import * as Ce5 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/styles.mjs
import { jsx as s52 } from "react/jsx-runtime";
var e54 = "base-ui-disable-scrollbar";
var a35 = { className: e54, getElement(l19) {
  return s52("style", { nonce: l19, href: e54, precedence: "base-ui:low", children: `.${e54}{scrollbar-width:none}.${e54}::-webkit-scrollbar{display:none}` });
} };

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/scroll-area.mjs
import { jsxs as Ot2 } from "react/jsx-runtime";
import * as L17 from "react";
import * as Xe6 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/scrollEdges.mjs
var f34 = 1;
function a36(n61, t48) {
  return Math.max(0, n61 - t48);
}
function u36(n61, t48) {
  if (t48 <= 0) return 0;
  let r49 = t39(n61, 0, t48), e58 = r49, o62 = t48 - r49, c40 = e58 <= f34, i38 = o62 <= f34;
  return c40 && i38 ? e58 <= o62 ? 0 : t48 : c40 ? 0 : i38 ? t48 : r49;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/scroll-area.mjs
import { jsx as It4 } from "react/jsx-runtime";
import * as xe7 from "react";
import * as Me6 from "react";
import { jsx as jt2 } from "react/jsx-runtime";
import * as Ne5 from "react";
import * as at6 from "react";
import * as ft5 from "react";
var wt6 = Object.defineProperty;
var Rt4 = (e58, t48) => {
  for (var h24 in t48) wt6(e58, h24, { get: t48[h24], enumerable: true });
};
var dt4 = {};
Rt4(dt4, { Content: () => ct3, Corner: () => ut4, Root: () => Je7, Scrollbar: () => st4, Thumb: () => it4, Viewport: () => nt5 });
var _e4 = Ce5.createContext(void 0);
function z14() {
  let e58 = Ce5.useContext(_e4);
  if (e58 === void 0) throw new Error(f2(53));
  return e58;
}
var pe8 = function(e58) {
  return e58.scrollAreaCornerHeight = "--scroll-area-corner-height", e58.scrollAreaCornerWidth = "--scroll-area-corner-width", e58;
}({});
function y20(e58, t48, h24) {
  if (!e58) return 0;
  let D14 = getComputedStyle(e58), j17 = h24 === "x" ? "Inline" : "Block";
  return h24 === "x" && t48 === "margin" ? parseFloat(D14[`${t48}InlineStart`]) * 2 : parseFloat(D14[`${t48}${j17}Start`]) + parseFloat(D14[`${t48}${j17}End`]);
}
var Ze7 = function(e58) {
  return e58.orientation = "data-orientation", e58.hovering = "data-hovering", e58.scrolling = "data-scrolling", e58.hasOverflowX = "data-has-overflow-x", e58.hasOverflowY = "data-has-overflow-y", e58.overflowXStart = "data-overflow-x-start", e58.overflowXEnd = "data-overflow-x-end", e58.overflowYStart = "data-overflow-y-start", e58.overflowYEnd = "data-overflow-y-end", e58;
}({});
var ie6 = function(e58) {
  return e58.scrolling = "data-scrolling", e58.hasOverflowX = "data-has-overflow-x", e58.hasOverflowY = "data-has-overflow-y", e58.overflowXStart = "data-overflow-x-start", e58.overflowXEnd = "data-overflow-x-end", e58.overflowYStart = "data-overflow-y-start", e58.overflowYEnd = "data-overflow-y-end", e58;
}({});
var J15 = { hasOverflowX: (e58) => e58 ? { [ie6.hasOverflowX]: "" } : null, hasOverflowY: (e58) => e58 ? { [ie6.hasOverflowY]: "" } : null, overflowXStart: (e58) => e58 ? { [ie6.overflowXStart]: "" } : null, overflowXEnd: (e58) => e58 ? { [ie6.overflowXEnd]: "" } : null, overflowYStart: (e58) => e58 ? { [ie6.overflowYStart]: "" } : null, overflowYEnd: (e58) => e58 ? { [ie6.overflowYEnd]: "" } : null, cornerHidden: () => null };
var Ct6 = { x: 0, y: 0 };
var Ge5 = { width: 0, height: 0 };
var Yt5 = { xStart: false, xEnd: false, yStart: false, yEnd: false };
var Tt6 = { x: true, y: true, corner: true };
var Je7 = r47.forwardRef(function(t48, h24) {
  let { render: D14, className: j17, overflowEdgeThreshold: p31, style: X11, ...f35 } = t48, Y18 = Xt5(p31), A17 = r5(), M20 = p12(), N20 = p12(), { nonce: O14, disableStyleElements: H16 } = o53(), [E30, u37] = r47.useState(false), [w22, C18] = r47.useState(false), [d31, I26] = r47.useState(false), [fe7, Q16] = r47.useState(false), [ee7, U11] = r47.useState(false), [W14, $9] = r47.useState(Ge5), [te7, re8] = r47.useState(Ge5), [b14, ue7] = r47.useState(Yt5), [T17, oe10] = r47.useState(Tt6), n61 = r47.useRef(null), c40 = r47.useRef(null), V12 = r47.useRef(null), v17 = r47.useRef(null), a38 = r47.useRef(null), R27 = r47.useRef(null), o62 = r47.useRef(null), S18 = r47.useRef(false), x21 = r47.useRef(0), i38 = r47.useRef(0), g20 = r47.useRef(0), K14 = r47.useRef(0), m25 = r47.useRef("vertical"), F14 = r47.useRef(Ct6), Z17 = E((l19) => {
    let _19 = l19.x - F14.current.x, le9 = l19.y - F14.current.y;
    F14.current = l19, le9 !== 0 && (I26(true), M20.start(500, () => {
      I26(false);
    })), _19 !== 0 && (C18(true), N20.start(500, () => {
      C18(false);
    }));
  }), q15 = E((l19) => {
    l19.button === 0 && (S18.current = true, x21.current = l19.clientY, i38.current = l19.clientX, m25.current = l19.currentTarget.getAttribute(Ze7.orientation), c40.current && (g20.current = c40.current.scrollTop, K14.current = c40.current.scrollLeft), a38.current && m25.current === "vertical" && a38.current.setPointerCapture(l19.pointerId), R27.current && m25.current === "horizontal" && R27.current.setPointerCapture(l19.pointerId));
  }), we7 = E((l19) => {
    if (!S18.current) return;
    let _19 = l19.clientY - x21.current, le9 = l19.clientX - i38.current;
    if (c40.current) {
      let me7 = c40.current.scrollHeight, Re8 = c40.current.clientHeight, We8 = c40.current.scrollWidth, ve9 = c40.current.clientWidth;
      if (a38.current && V12.current && m25.current === "vertical") {
        let he6 = y20(V12.current, "padding", "y"), ge10 = y20(a38.current, "margin", "y"), Ee7 = a38.current.offsetHeight, se12 = V12.current.offsetHeight - Ee7 - he6 - ge10, ce8 = _19 / se12;
        c40.current.scrollTop = g20.current + ce8 * (me7 - Re8), l19.preventDefault(), I26(true), M20.start(500, () => {
          I26(false);
        });
      }
      if (R27.current && v17.current && m25.current === "horizontal") {
        let he6 = y20(v17.current, "padding", "x"), ge10 = y20(R27.current, "margin", "x"), Ee7 = R27.current.offsetWidth, se12 = v17.current.offsetWidth - Ee7 - he6 - ge10, ce8 = le9 / se12;
        c40.current.scrollLeft = K14.current + ce8 * (We8 - ve9), l19.preventDefault(), C18(true), N20.start(500, () => {
          C18(false);
        });
      }
    }
  }), de8 = E((l19) => {
    S18.current = false, a38.current && m25.current === "vertical" && a38.current.releasePointerCapture(l19.pointerId), R27.current && m25.current === "horizontal" && R27.current.releasePointerCapture(l19.pointerId);
  });
  function G18(l19) {
    Q16(l19.pointerType === "touch");
  }
  function Ae7(l19) {
    if (G18(l19), l19.pointerType !== "touch") {
      let _19 = u9(n61.current, l19.target);
      u37(_19);
    }
  }
  let ne12 = r47.useMemo(() => ({ scrolling: w22 || d31, hasOverflowX: !T17.x, hasOverflowY: !T17.y, overflowXStart: b14.xStart, overflowXEnd: b14.xEnd, overflowYStart: b14.yStart, overflowYEnd: b14.yEnd, cornerHidden: T17.corner }), [w22, d31, T17.x, T17.y, T17.corner, b14]), P17 = { role: "presentation", onPointerEnter: Ae7, onPointerMove: Ae7, onPointerDown: G18, onPointerLeave() {
    u37(false);
  }, style: { position: "relative", [pe8.scrollAreaCornerHeight]: `${W14.height}px`, [pe8.scrollAreaCornerWidth]: `${W14.width}px` } }, k17 = J("div", t48, { state: ne12, ref: [h24, n61], props: [P17, f35], stateAttributesMapping: J15 }), He10 = r47.useMemo(() => ({ handlePointerDown: q15, handlePointerMove: we7, handlePointerUp: de8, handleScroll: Z17, cornerSize: W14, setCornerSize: $9, thumbSize: te7, setThumbSize: re8, hasMeasuredScrollbar: ee7, setHasMeasuredScrollbar: U11, touchModality: fe7, cornerRef: o62, scrollingX: w22, setScrollingX: C18, scrollingY: d31, setScrollingY: I26, hovering: E30, setHovering: u37, viewportRef: c40, rootRef: n61, scrollbarYRef: V12, scrollbarXRef: v17, thumbYRef: a38, thumbXRef: R27, rootId: A17, hiddenState: T17, setHiddenState: oe10, overflowEdges: b14, setOverflowEdges: ue7, viewportState: ne12, overflowEdgeThreshold: Y18 }), [q15, we7, de8, Z17, W14, te7, ee7, fe7, w22, C18, d31, I26, E30, u37, A17, T17, b14, ne12, Y18]);
  return Ot2(_e4.Provider, { value: He10, children: [!H16 && a35.getElement(O14), k17] });
});
function Xt5(e58) {
  if (typeof e58 == "number") {
    let t48 = Math.max(0, e58);
    return { xStart: t48, xEnd: t48, yStart: t48, yEnd: t48 };
  }
  return { xStart: Math.max(0, e58?.xStart || 0), xEnd: Math.max(0, e58?.xEnd || 0), yStart: Math.max(0, e58?.yStart || 0), yEnd: Math.max(0, e58?.yEnd || 0) };
}
var ze6 = Xe6.createContext(void 0);
function Qe5() {
  let e58 = Xe6.useContext(ze6);
  if (e58 === void 0) throw new Error(f2(55));
  return e58;
}
var B14 = function(e58) {
  return e58.scrollAreaOverflowXStart = "--scroll-area-overflow-x-start", e58.scrollAreaOverflowXEnd = "--scroll-area-overflow-x-end", e58.scrollAreaOverflowYStart = "--scroll-area-overflow-y-start", e58.scrollAreaOverflowYEnd = "--scroll-area-overflow-y-end", e58;
}({});
var ot3 = false;
function _t6() {
  ot3 || c8 || (typeof CSS < "u" && "registerProperty" in CSS && [B14.scrollAreaOverflowXStart, B14.scrollAreaOverflowXEnd, B14.scrollAreaOverflowYStart, B14.scrollAreaOverflowYEnd].forEach((e58) => {
    try {
      CSS.registerProperty({ name: e58, syntax: "<length>", inherits: false, initialValue: "0px" });
    } catch {
    }
  }), ot3 = true);
}
var nt5 = L17.forwardRef(function(t48, h24) {
  let { render: D14, className: j17, style: p31, ...X11 } = t48, { viewportRef: f35, scrollbarYRef: Y18, scrollbarXRef: A17, thumbYRef: M20, thumbXRef: N20, cornerRef: O14, cornerSize: H16, setCornerSize: E30, setThumbSize: u37, rootId: w22, setHiddenState: C18, hiddenState: d31, setHasMeasuredScrollbar: I26, handleScroll: fe7, setHovering: Q16, setOverflowEdges: ee7, overflowEdges: U11, overflowEdgeThreshold: W14, scrollingX: $9, scrollingY: te7 } = z14(), re8 = o4(), b14 = L17.useRef(true), ue7 = L17.useRef([NaN, NaN, NaN, NaN]), T17 = p12(), oe10 = p12(), n61 = E(() => {
    let o62 = f35.current, S18 = Y18.current, x21 = A17.current, i38 = M20.current, g20 = N20.current, K14 = O14.current;
    if (!o62) return;
    let m25 = o62.scrollHeight, F14 = o62.scrollWidth, Z17 = o62.clientHeight, q15 = o62.clientWidth, we7 = o62.scrollTop, de8 = o62.scrollLeft, G18 = ue7.current, Ae7 = Number.isNaN(G18[0]);
    if (G18[0] = Z17, G18[1] = m25, G18[2] = q15, G18[3] = F14, Ae7 && I26(true), m25 === 0 || F14 === 0) return;
    let ne12 = zt3(o62), P17 = ne12.y, k17 = ne12.x, He10 = q15 / F14, l19 = Z17 / m25, _19 = Math.max(0, F14 - q15), le9 = Math.max(0, m25 - Z17), me7 = 0, Re8 = 0;
    if (!k17) {
      let s54 = 0;
      re8 === "rtl" ? s54 = t39(-de8, 0, _19) : s54 = t39(de8, 0, _19), me7 = u36(s54, _19), Re8 = _19 - me7;
    }
    let We8 = P17 ? 0 : t39(we7, 0, le9), ve9 = P17 ? 0 : u36(We8, le9), he6 = P17 ? 0 : le9 - ve9, ge10 = k17 ? 0 : q15, Ee7 = P17 ? 0 : Z17, se12 = 0, ce8 = 0;
    !k17 && !P17 && (se12 = S18?.offsetWidth || 0, ce8 = x21?.offsetHeight || 0);
    let Ue11 = H16.width === 0 && H16.height === 0, mt8 = Ue11 ? se12 : 0, ht8 = Ue11 ? ce8 : 0, $e6 = y20(x21, "padding", "x"), Fe5 = y20(S18, "padding", "y"), ke8 = y20(g20, "margin", "x"), Be6 = y20(i38, "margin", "y"), je8 = ge10 - $e6 - ke8, Ke10 = Ee7 - Fe5 - Be6, pt7 = x21 ? Math.min(x21.offsetWidth - mt8, je8) : je8, St6 = S18 ? Math.min(S18.offsetHeight - ht8, Ke10) : Ke10, Ve7 = Math.max(16, pt7 * He10), Pe6 = Math.max(16, St6 * l19);
    if (u37((s54) => s54.height === Pe6 && s54.width === Ve7 ? s54 : { width: Ve7, height: Pe6 }), S18 && i38) {
      let s54 = S18.offsetHeight - Pe6 - Fe5 - Be6, ae11 = m25 - Z17, Oe5 = ae11 === 0 ? 0 : we7 / ae11, Ie7 = Math.min(s54, Math.max(0, Oe5 * s54));
      i38.style.transform = `translate3d(0,${Ie7}px,0)`;
    }
    if (x21 && g20) {
      let s54 = x21.offsetWidth - Ve7 - $e6 - ke8, ae11 = F14 - q15, Oe5 = ae11 === 0 ? 0 : de8 / ae11, Ie7 = re8 === "rtl" ? t39(Oe5 * s54, -s54, 0) : t39(Oe5 * s54, 0, s54);
      g20.style.transform = `translate3d(${Ie7}px,0,0)`;
    }
    let xt5 = [[B14.scrollAreaOverflowXStart, me7], [B14.scrollAreaOverflowXEnd, Re8], [B14.scrollAreaOverflowYStart, ve9], [B14.scrollAreaOverflowYEnd, he6]];
    for (let [s54, ae11] of xt5) o62.style.setProperty(s54, `${ae11}px`);
    K14 && (k17 || P17 ? E30({ width: 0, height: 0 }) : !k17 && !P17 && E30({ width: se12, height: ce8 })), C18((s54) => Lt5(s54, ne12));
    let be8 = { xStart: !k17 && me7 > W14.xStart, xEnd: !k17 && Re8 > W14.xEnd, yStart: !P17 && ve9 > W14.yStart, yEnd: !P17 && he6 > W14.yEnd };
    ee7((s54) => s54.xStart === be8.xStart && s54.xEnd === be8.xEnd && s54.yStart === be8.yStart && s54.yEnd === be8.yEnd ? s54 : be8);
  });
  o2(() => {
    f35.current && _t6();
  }, [f35]), o2(() => {
    queueMicrotask(n61);
  }, [n61, d31, re8]), o2(() => {
    f35.current?.matches(":hover") && Q16(true);
  }, [f35, Q16]), L17.useEffect(() => {
    let o62 = f35.current;
    if (typeof ResizeObserver > "u" || !o62) return;
    let S18 = false, x21 = new ResizeObserver(() => {
      if (!S18) {
        S18 = true;
        let i38 = ue7.current;
        if (i38[0] === o62.clientHeight && i38[1] === o62.scrollHeight && i38[2] === o62.clientWidth && i38[3] === o62.scrollWidth) return;
      }
      n61();
    });
    return x21.observe(o62), oe10.start(0, () => {
      let i38 = o62.getAnimations({ subtree: true });
      i38.length !== 0 && Promise.allSettled(i38.map((g20) => g20.finished)).then(n61).catch(() => {
      });
    }), () => {
      x21.disconnect(), oe10.clear();
    };
  }, [n61, f35, oe10]);
  function c40() {
    b14.current = false;
  }
  let V12 = { role: "presentation", ...w22 && { "data-id": `${w22}-viewport` }, tabIndex: d31.x && d31.y ? -1 : 0, className: a35.className, style: { overflow: "scroll" }, onScroll() {
    f35.current && (n61(), b14.current || fe7({ x: f35.current.scrollLeft, y: f35.current.scrollTop }), T17.start(100, () => {
      b14.current = true;
    }));
  }, onWheel: c40, onTouchMove: c40, onPointerMove: c40, onPointerEnter: c40, onKeyDown: c40 }, v17 = L17.useMemo(() => ({ scrolling: $9 || te7, hasOverflowX: !d31.x, hasOverflowY: !d31.y, overflowXStart: U11.xStart, overflowXEnd: U11.xEnd, overflowYStart: U11.yStart, overflowYEnd: U11.yEnd, cornerHidden: d31.corner }), [$9, te7, d31.x, d31.y, d31.corner, U11]), a38 = J("div", t48, { ref: [h24, f35], state: v17, props: [V12, X11], stateAttributesMapping: J15 }), R27 = L17.useMemo(() => ({ computeThumbPosition: n61 }), [n61]);
  return It4(ze6.Provider, { value: R27, children: a38 });
});
function zt3(e58) {
  let t48 = e58.clientHeight >= e58.scrollHeight, h24 = e58.clientWidth >= e58.scrollWidth;
  return { y: t48, x: h24, corner: t48 || h24 };
}
function Lt5(e58, t48) {
  return e58.y === t48.y && e58.x === t48.x && e58.corner === t48.corner ? e58 : t48;
}
var De7 = Me6.createContext(void 0);
function lt4() {
  let e58 = Me6.useContext(De7);
  if (e58 === void 0) throw new Error(f2(54));
  return e58;
}
var Se4 = function(e58) {
  return e58.scrollAreaThumbHeight = "--scroll-area-thumb-height", e58.scrollAreaThumbWidth = "--scroll-area-thumb-width", e58;
}({});
var st4 = xe7.forwardRef(function(t48, h24) {
  let { render: D14, className: j17, orientation: p31 = "vertical", keepMounted: X11 = false, style: f35, ...Y18 } = t48, { hovering: A17, scrollingX: M20, scrollingY: N20, hiddenState: O14, overflowEdges: H16, scrollbarYRef: E30, scrollbarXRef: u37, viewportRef: w22, thumbYRef: C18, thumbXRef: d31, handlePointerDown: I26, handlePointerUp: fe7, rootId: Q16, thumbSize: ee7, hasMeasuredScrollbar: U11 } = z14(), W14 = { hovering: A17, scrolling: { horizontal: M20, vertical: N20 }[p31], orientation: p31, hasOverflowX: !O14.x, hasOverflowY: !O14.y, overflowXStart: H16.xStart, overflowXEnd: H16.xEnd, overflowYStart: H16.yStart, overflowYEnd: H16.yEnd, cornerHidden: O14.corner }, $9 = o4(), te7 = !U11 && !X11, re8 = p31 === "vertical" ? O14.y : O14.x, b14 = X11 || !re8;
  xe7.useEffect(() => {
    if (!b14) return;
    let n61 = w22.current, c40 = p31 === "vertical" ? E30.current : u37.current;
    if (!c40) return;
    function V12(v17) {
      if (!n61 || !c40 || v17.ctrlKey) return;
      v17.preventDefault();
      let a38 = p31 === "horizontal", R27 = a38 ? "scrollLeft" : "scrollTop", o62 = a38 ? v17.deltaX : v17.deltaY, S18 = a38 ? n61.scrollWidth - n61.clientWidth : n61.scrollHeight - n61.clientHeight, x21 = a38 && $9 === "rtl" ? -S18 : 0, i38 = a38 && $9 === "rtl" ? 0 : S18, g20 = n61[R27];
      g20 <= x21 && o62 < 0 || g20 >= i38 && o62 > 0 || (n61[R27] = Math.min(i38, Math.max(x21, g20 + o62)));
    }
    return t11(c40, "wheel", V12, { passive: false });
  }, [$9, p31, u37, E30, b14, w22]);
  let ue7 = { ...Q16 && { "data-id": `${Q16}-scrollbar` }, onPointerDown(n61) {
    if (n61.button !== 0) return;
    let c40 = f10(n61.nativeEvent), V12 = p31 === "vertical" ? C18.current : d31.current;
    if (!(V12 && u9(V12, c40)) && w22.current) {
      if (C18.current && E30.current && p31 === "vertical") {
        let v17 = y20(C18.current, "margin", "y"), a38 = y20(E30.current, "padding", "y"), R27 = C18.current.offsetHeight, o62 = E30.current.getBoundingClientRect(), S18 = n61.clientY - o62.top - R27 / 2 - a38 + v17 / 2, x21 = w22.current.scrollHeight, i38 = w22.current.clientHeight, g20 = E30.current.offsetHeight - R27 - a38 - v17, m25 = S18 / g20 * (x21 - i38);
        w22.current.scrollTop = m25;
      }
      if (d31.current && u37.current && p31 === "horizontal") {
        let v17 = y20(d31.current, "margin", "x"), a38 = y20(u37.current, "padding", "x"), R27 = d31.current.offsetWidth, o62 = u37.current.getBoundingClientRect(), S18 = n61.clientX - o62.left - R27 / 2 - a38 + v17 / 2, x21 = w22.current.scrollWidth, i38 = w22.current.clientWidth, g20 = u37.current.offsetWidth - R27 - a38 - v17, K14 = S18 / g20, m25;
        $9 === "rtl" ? (m25 = (1 - K14) * (x21 - i38), w22.current.scrollLeft <= 0 && (m25 = -m25)) : m25 = K14 * (x21 - i38), w22.current.scrollLeft = m25;
      }
      I26(n61);
    }
  }, onPointerUp: fe7, style: { position: "absolute", touchAction: "none", WebkitUserSelect: "none", userSelect: "none", visibility: te7 ? "hidden" : void 0, ...p31 === "vertical" && { top: 0, bottom: `var(${pe8.scrollAreaCornerHeight})`, insetInlineEnd: 0, [Se4.scrollAreaThumbHeight]: `${ee7.height}px` }, ...p31 === "horizontal" && { insetInlineStart: 0, insetInlineEnd: `var(${pe8.scrollAreaCornerWidth})`, bottom: 0, [Se4.scrollAreaThumbWidth]: `${ee7.width}px` } } }, T17 = J("div", t48, { ref: [h24, p31 === "vertical" ? E30 : u37], state: W14, props: [ue7, Y18], stateAttributesMapping: J15 }), oe10 = xe7.useMemo(() => ({ orientation: p31 }), [p31]);
  return b14 ? jt2(De7.Provider, { value: oe10, children: T17 }) : null;
});
var ct3 = Ne5.forwardRef(function(t48, h24) {
  let { render: D14, className: j17, style: p31, ...X11 } = t48, { computeThumbPosition: f35 } = Qe5(), { viewportState: Y18 } = z14(), A17 = Ne5.useRef(null);
  return o2(() => {
    if (typeof ResizeObserver > "u") return;
    let N20 = false, O14 = new ResizeObserver(() => {
      if (!N20) {
        N20 = true;
        return;
      }
      f35();
    });
    return A17.current && O14.observe(A17.current), () => {
      O14.disconnect();
    };
  }, [f35]), J("div", t48, { ref: [h24, A17], state: Y18, stateAttributesMapping: J15, props: [{ role: "presentation", style: { minWidth: "fit-content" } }, X11] });
});
var it4 = at6.forwardRef(function(t48, h24) {
  let { render: D14, className: j17, style: p31, ...X11 } = t48, { thumbYRef: f35, thumbXRef: Y18, handlePointerDown: A17, handlePointerMove: M20, handlePointerUp: N20, setScrollingX: O14, setScrollingY: H16, hasMeasuredScrollbar: E30 } = z14(), { orientation: u37 } = lt4();
  return J("div", t48, { ref: [h24, u37 === "vertical" ? f35 : Y18], state: { orientation: u37 }, props: [{ onPointerDown: A17, onPointerMove: M20, onPointerUp(d31) {
    u37 === "vertical" && H16(false), u37 === "horizontal" && O14(false), N20(d31);
  }, style: { visibility: E30 ? void 0 : "hidden", ...u37 === "vertical" && { height: `var(${Se4.scrollAreaThumbHeight})` }, ...u37 === "horizontal" && { width: `var(${Se4.scrollAreaThumbWidth})` } } }, X11] });
});
var ut4 = ft5.forwardRef(function(t48, h24) {
  let { render: D14, className: j17, style: p31, ...X11 } = t48, { cornerRef: f35, cornerSize: Y18, hiddenState: A17 } = z14(), M20 = J("div", t48, { ref: [h24, f35], props: [{ style: { position: "absolute", bottom: 0, insetInlineEnd: 0, width: Y18.width, height: Y18.height } }, X11] });
  return A17.corner ? null : M20;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/select.mjs
import * as _16 from "react";
import * as $e4 from "react";
import { jsx as Vt6, jsxs as Ir } from "react/jsx-runtime";
import * as Jt5 from "react";
import * as Xe7 from "react";
import * as oo2 from "react";
import * as no3 from "react";
import * as ao from "react";
import * as Pt3 from "react";
import { jsx as co } from "react/jsx-runtime";
import * as mo from "react";
import * as de7 from "react";
import * as dt5 from "react";
import { jsx as So2, jsxs as gn2 } from "react/jsx-runtime";
import * as ge7 from "react";
import { jsx as _n2, jsxs as Un } from "react/jsx-runtime";
import * as vo from "react";
import * as Se5 from "react";
import * as yt6 from "react";
import { jsx as Jn2 } from "react/jsx-runtime";
import * as ke5 from "react";
import { jsx as os } from "react/jsx-runtime";
import * as Je8 from "react";
import * as No3 from "react";
import * as _o from "react";
import * as Lo from "react";
import { jsx as Rs2 } from "react/jsx-runtime";
import * as Fo from "react";
import { jsx as hs } from "react/jsx-runtime";
import * as Ze8 from "react";
import * as bt5 from "react";
import { jsx as Es } from "react/jsx-runtime";
import * as jo2 from "react";
var Wo2 = Object.defineProperty;
var qo2 = (e58, t48) => {
  for (var s54 in t48) Wo2(e58, s54, { get: t48[s54], enumerable: true });
};
var Yo = {};
qo2(Yo, { Arrow: () => Po2, Backdrop: () => po, Group: () => ko, GroupLabel: () => Go, Icon: () => so2, Item: () => Ao4, ItemIndicator: () => Vo, ItemText: () => Mo2, Label: () => Zt2, List: () => wo, Popup: () => Co2, Portal: () => uo, Positioner: () => Ro2, Root: () => Xt6, ScrollDownArrow: () => Uo2, ScrollUpArrow: () => Bo, Separator: () => d25, Trigger: () => to3, Value: () => ro3 });
var wt7 = $e4.createContext(null);
var Tt7 = $e4.createContext(null);
function N17() {
  let e58 = $e4.useContext(wt7);
  if (e58 === null) throw new Error(f2(60));
  return e58;
}
function ut5() {
  let e58 = $e4.useContext(Tt7);
  if (e58 === null) throw new Error(f2(61));
  return e58;
}
var r48 = { id: ut2((e58) => e58.id), labelId: ut2((e58) => e58.labelId), modal: ut2((e58) => e58.modal), multiple: ut2((e58) => e58.multiple), items: ut2((e58) => e58.items), itemToStringLabel: ut2((e58) => e58.itemToStringLabel), itemToStringValue: ut2((e58) => e58.itemToStringValue), isItemEqualToValue: ut2((e58) => e58.isItemEqualToValue), value: ut2((e58) => e58.value), hasSelectedValue: ut2((e58) => {
  let { value: t48, multiple: s54, itemToStringValue: m25 } = e58;
  return t48 == null ? false : s54 && Array.isArray(t48) ? t48.length > 0 : j8(t48, m25) !== "";
}), hasNullItemLabel: ut2((e58, t48) => t48 ? h11(e58.items) : false), open: ut2((e58) => e58.open), mounted: ut2((e58) => e58.mounted), forceMount: ut2((e58) => e58.forceMount), transitionStatus: ut2((e58) => e58.transitionStatus), openMethod: ut2((e58) => e58.openMethod), activeIndex: ut2((e58) => e58.activeIndex), selectedIndex: ut2((e58) => e58.selectedIndex), isActive: ut2((e58, t48) => e58.activeIndex === t48), isSelected: ut2((e58, t48, s54) => {
  let m25 = e58.isItemEqualToValue, S18 = e58.value;
  return e58.multiple ? Array.isArray(S18) && S18.some((y24) => e15(s54, y24, m25)) : e58.selectedIndex === t48 && e58.selectedIndex !== null ? true : e15(s54, S18, m25);
}), isSelectedByFocus: ut2((e58, t48) => e58.selectedIndex === t48), popupProps: ut2((e58) => e58.popupProps), triggerProps: ut2((e58) => e58.triggerProps), triggerElement: ut2((e58) => e58.triggerElement), positionerElement: ut2((e58) => e58.positionerElement), listElement: ut2((e58) => e58.listElement), popupSide: ut2((e58) => e58.popupSide), scrollUpArrowVisible: ut2((e58) => e58.scrollUpArrowVisible), scrollDownArrowVisible: ut2((e58) => e58.scrollDownArrowVisible), hasScrollArrows: ut2((e58) => e58.hasScrollArrows) };
function Xt6(e58) {
  let { id: t48, value: s54, defaultValue: m25 = null, onValueChange: S18, open: y24, defaultOpen: c40 = false, onOpenChange: u37, name: l19, form: n61, autoComplete: a38, disabled: f35 = false, readOnly: d31 = false, required: R27 = false, modal: E30 = true, actionsRef: A17, inputRef: I26, onOpenChangeComplete: P17, items: U11, multiple: b14 = false, itemToStringLabel: g20, itemToStringValue: V12, isItemEqualToValue: k17 = u17, highlightItemOnHover: v17 = true, children: Q16 } = e58, { clearErrors: q15 } = n26(), { setDirty: O14, setTouched: ee7, setFocused: ne12, shouldValidateOnChange: se12, validityData: D14, setFilled: L20, name: z17, disabled: X11, validation: w22, validationMode: ce8 } = E14(), F14 = F6({ id: t48 }), j17 = X11 || f35, Y18 = z17 ?? l19, [o62, i38] = m({ controlled: s54, default: b14 ? m25 ?? t5 : m25, name: "Select", state: "value" }), [p31, K14] = m({ controlled: y24, default: c40, name: "Select", state: "open" }), B17 = _16.useRef([]), J18 = _16.useRef([]), ae11 = _16.useRef(null), be8 = _16.useRef(null), Ce7 = _16.useRef(0), Me10 = _16.useRef(null), C18 = _16.useRef([]), H16 = _16.useRef(false), te7 = _16.useRef(false), ye9 = _16.useRef(null), M20 = _16.useRef(null), le9 = _16.useRef({ allowSelectedMouseUp: false, allowUnselectedMouseUp: false, dragY: 0 }), oe10 = _16.useRef(false), { mounted: ue7, setMounted: Z17, transitionStatus: W14 } = g2(p31), { openMethod: G18, triggerProps: ve9 } = C7(p31), h24 = u2(() => new A8({ id: F14, labelId: void 0, modal: E30, multiple: b14, itemToStringLabel: g20, itemToStringValue: V12, isItemEqualToValue: k17, value: o62, open: p31, mounted: ue7, transitionStatus: W14, items: U11, forceMount: false, openMethod: null, activeIndex: null, selectedIndex: null, popupProps: {}, triggerProps: {}, triggerElement: null, positionerElement: null, listElement: null, popupSide: null, scrollUpArrowVisible: false, scrollDownArrowVisible: false, hasScrollArrows: false })).current, Re8 = L8(h24, r48.activeIndex), we7 = L8(h24, r48.selectedIndex), Ne7 = L8(h24, r48.triggerElement), Ee7 = L8(h24, r48.positionerElement), _e7 = s43(G18), je8 = G18 ?? _e7, Te7 = _16.useMemo(() => b14 && Array.isArray(o62) && o62.length === 0 ? "" : j8(o62, V12), [b14, o62, V12]), Ge7 = _16.useMemo(() => b14 && Array.isArray(o62) ? o62.map((x21) => j8(x21, V12)) : j8(o62, V12), [b14, o62, V12]), me7 = I8(h24.state.triggerElement), ie10 = E(() => Ge7);
  d21(me7, F14, o62, ie10);
  let Pe6 = _16.useRef(o62), Qe7 = b14 ? Array.isArray(o62) && o62.length > 0 : o62 != null;
  o2(() => {
    o62 !== Pe6.current && h24.set("forceMount", true);
  }, [h24, o62]), o2(() => {
    L20(Qe7);
  }, [Qe7, L20]), o2(function() {
    let $9 = C18.current, fe7;
    if (b14) {
      let xe9 = Array.isArray(o62) ? o62 : [];
      if (xe9.length === 0) fe7 = null;
      else {
        let Ae7 = xe9[xe9.length - 1], ot5 = o33($9, Ae7, k17);
        fe7 = ot5 === -1 ? null : ot5;
      }
    } else {
      let xe9 = o33($9, o62, k17);
      fe7 = xe9 === -1 ? null : xe9;
    }
    fe7 === null && (M20.current = null), !p31 && h24.set("selectedIndex", fe7);
  }, [Qe7, b14, p31, o62, C18, k17, h24, M20]), u16(o62, () => {
    q15(Y18), O14(o62 !== D14.initialValue), se12() ? w22.commit(o62) : w22.commit(o62, true);
  });
  let pe9 = E((x21, $9) => {
    if (u37?.(x21, $9), !$9.isCanceled && (K14(x21), !x21 && ($9.reason === s4.focusOut || $9.reason === s4.outsidePress) && (ee7(true), ne12(false), ce8 === "onBlur" && w22.commit(o62)), !x21 && h24.state.activeIndex !== null)) {
      let fe7 = B17.current[h24.state.activeIndex];
      queueMicrotask(() => {
        fe7?.setAttribute("tabindex", "-1");
      });
    }
  }), Ye6 = E(() => {
    Z17(false), h24.update({ activeIndex: null, openMethod: null }), P17?.(false);
  });
  p10({ enabled: !A17, open: p31, ref: ae11, onComplete() {
    p31 || Ye6();
  } }), _16.useImperativeHandle(A17, () => ({ unmount: Ye6 }), [Ye6]);
  let Ue11 = E((x21, $9) => {
    S18?.(x21, $9), !$9.isCanceled && i38(x21);
  }), We8 = E(() => {
    let x21 = h24.state.listElement || ae11.current;
    if (!x21) return;
    let $9 = a36(x21.scrollHeight, x21.clientHeight), fe7 = u36(x21.scrollTop, $9), xe9 = fe7 > 0, Ae7 = fe7 < $9;
    h24.state.scrollUpArrowVisible !== xe9 && h24.set("scrollUpArrowVisible", xe9), h24.state.scrollDownArrowVisible !== Ae7 && h24.set("scrollDownArrowVisible", Ae7);
  }), re8 = jt({ open: p31, onOpenChange: pe9, elements: { reference: Ne7, floating: Ee7 } }), ct7 = Mo(re8, { enabled: !d31 && !j17, event: "mousedown" }), Oe5 = zo(re8), Fe5 = nc(re8, { enabled: !d31 && !j17, listRef: B17, activeIndex: Re8, selectedIndex: we7, disabledIndices: t5, onNavigate(x21) {
    x21 === null && !p31 || h24.set("activeIndex", x21);
  }, focusItemOnHover: v17 }), Be6 = sc(re8, { enabled: !d31 && !j17 && (p31 || !b14), listRef: J18, activeIndex: Re8, selectedIndex: we7, onMatch(x21) {
    p31 ? h24.set("activeIndex", x21) : Ue11(C18.current[x21], u4("none"));
  }, onTyping(x21) {
    H16.current = x21;
  } }), qe4 = _16.useMemo(() => {
    let x21 = d2(Be6.reference, Fe5.reference, Oe5.reference, ct7.reference, ve9);
    return F14 && (x21.id = F14), x21;
  }, [ct7.reference, Be6.reference, Fe5.reference, Oe5.reference, ve9, F14]), et7 = _16.useMemo(() => d2(le2, Be6.floating, Fe5.floating, Oe5.floating), [Be6.floating, Fe5.floating, Oe5.floating]), at8 = Fe5.item ?? o7;
  n16(() => {
    h24.update({ popupProps: et7, triggerProps: qe4 });
  }), o2(() => {
    h24.update({ id: F14, modal: E30, multiple: b14, value: o62, open: p31, mounted: ue7, transitionStatus: W14, popupProps: et7, triggerProps: qe4, items: U11, itemToStringLabel: g20, itemToStringValue: V12, isItemEqualToValue: k17, openMethod: je8 });
  }, [h24, F14, E30, b14, o62, p31, ue7, W14, et7, qe4, U11, g20, V12, k17, je8]);
  let Ct9 = _16.useMemo(() => ({ store: h24, name: Y18, required: R27, disabled: j17, readOnly: d31, multiple: b14, highlightItemOnHover: v17, setValue: Ue11, setOpen: pe9, listRef: B17, popupRef: ae11, scrollHandlerRef: be8, handleScrollArrowVisibility: We8, scrollArrowsMountedCountRef: Ce7, itemProps: at8, events: re8.context.events, valueRef: Me10, valuesRef: C18, labelsRef: J18, typingRef: H16, selectionRef: le9, firstItemTextRef: ye9, selectedItemTextRef: M20, validation: w22, onOpenChangeComplete: P17, keyboardActiveRef: te7, alignItemWithTriggerActiveRef: oe10, initialValueRef: Pe6 }), [h24, Y18, R27, j17, d31, b14, v17, Ue11, pe9, at8, re8.context.events, w22, P17, We8]), he6 = d(I26, w22.inputRef), ze8 = b14 && Array.isArray(o62) && o62.length > 0, tt8 = b14 ? void 0 : Y18, vt6 = _16.useMemo(() => !b14 || !Array.isArray(o62) || !Y18 ? null : o62.map((x21) => {
    let $9 = j8(x21, V12);
    return Vt6("input", { type: "hidden", form: n61, name: Y18, value: $9 }, $9);
  }), [b14, o62, n61, Y18, V12]);
  return Vt6(wt7.Provider, { value: Ct9, children: Ir(Tt7.Provider, { value: re8, children: [Q16, Vt6("input", { ...w22.getInputValidationProps({ onFocus() {
    h24.state.triggerElement?.focus({ focusVisible: true });
  }, onChange(x21) {
    if (x21.nativeEvent.defaultPrevented || j17 || d31) {
      x21.preventBaseUIHandler?.();
      return;
    }
    let $9 = x21.currentTarget.value, fe7 = u4(s4.none, x21.nativeEvent);
    function xe9() {
      if (b14) return;
      let Ae7 = C18.current.find((ot5) => j8(ot5, V12).toLowerCase() === $9.toLowerCase() || b7(ot5, g20).toLowerCase() === $9.toLowerCase());
      Ae7 != null && (O14(Ae7 !== D14.initialValue), Ue11(Ae7, fe7), se12() && w22.commit(Ae7));
    }
    h24.set("forceMount", true), queueMicrotask(xe9);
  } }), id: F14 && tt8 == null ? `${F14}-hidden-input` : void 0, form: n61, name: tt8, autoComplete: a38, value: Te7, disabled: j17, required: R27 && !ze8, readOnly: d31, ref: he6, style: Y18 ? t13 : e8, tabIndex: -1, "aria-hidden": true, suppressHydrationWarning: true }), vt6] }) });
}
var Zt2 = Jt5.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, ...c40 } = t48, u37 = c40;
  delete u37.id;
  let l19 = E14(), { store: n61 } = N17(), a38 = L8(n61, r48.triggerElement), f35 = L8(n61, r48.id), d31 = n29(f35), R27 = v13({ id: d31, fallbackControlId: a38?.id ?? f35, setLabelId(E30) {
    n61.set("labelId", E30);
  } });
  return J("div", t48, { ref: s54, state: l19.state, props: [R27, c40], stateAttributesMapping: n25 });
});
var ft6 = 2;
var Gr = 400;
var Yr = { ...a19, ...n25, popupSide: (e58) => e58 ? { "data-popup-side": e58 } : null, value: () => null };
var to3 = Xe7.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, id: y24, disabled: c40 = false, nativeButton: u37 = true, style: l19, ...n61 } = t48, { setTouched: a38, setFocused: f35, validationMode: d31, state: R27, disabled: E30 } = E14(), { labelId: A17 } = s28(), { store: I26, setOpen: P17, selectionRef: U11, validation: b14, readOnly: g20, required: V12, alignItemWithTriggerActiveRef: k17, disabled: v17, keyboardActiveRef: Q16 } = N17(), q15 = E30 || v17 || c40, O14 = L8(I26, r48.open), ee7 = L8(I26, r48.mounted), ne12 = L8(I26, r48.value), se12 = L8(I26, r48.triggerProps), D14 = L8(I26, r48.positionerElement), L20 = L8(I26, r48.listElement), z17 = L8(I26, r48.popupSide), X11 = L8(I26, r48.id), w22 = L8(I26, r48.labelId), ce8 = L8(I26, r48.hasSelectedValue), F14 = ee7 && D14 ? z17 : null, j17 = y24 ?? X11, Y18 = t19(A17, w22);
  F6({ id: j17 });
  let o62 = I8(D14), i38 = Xe7.useRef(null), { getButtonProps: p31, buttonRef: K14 } = Q({ disabled: q15, native: u37 }), B17 = E((H16) => {
    I26.set("triggerElement", H16);
  }), J18 = d(s54, i38, K14, B17), ae11 = p12(), be8 = p12(), Ce7 = p12();
  Xe7.useEffect(() => {
    if (O14) return Ce7.start(Gr, () => {
      U11.current.allowUnselectedMouseUp = true, U11.current.allowSelectedMouseUp = true;
    }), () => {
      Ce7.clear();
    };
    U11.current = { allowSelectedMouseUp: false, allowUnselectedMouseUp: false, dragY: 0 }, be8.clear();
  }, [O14, U11, be8, Ce7]);
  let Me10 = d2(se12, { id: j17, role: "combobox", "aria-expanded": O14 ? "true" : "false", "aria-haspopup": "listbox", "aria-controls": O14 ? L20?.id ?? F2(D14)?.id : void 0, "aria-labelledby": Y18, "aria-readonly": g20 || void 0, "aria-required": V12 || void 0, tabIndex: q15 ? -1 : 0, ref: J18, onFocus(H16) {
    f35(true), O14 && k17.current && P17(false, u4(s4.none, H16.nativeEvent)), ae11.start(0, () => {
      I26.set("forceMount", true);
    });
  }, onBlur(H16) {
    u9(D14, H16.relatedTarget) || (a38(true), f35(false), d31 === "onBlur" && b14.commit(ne12));
  }, onPointerMove() {
    Q16.current = false;
  }, onKeyDown() {
    Q16.current = true;
  }, onMouseDown(H16) {
    if (O14) return;
    let te7 = n13(H16.currentTarget);
    function ye9(M20) {
      if (!i38.current) return;
      let le9 = M20.target;
      if (u9(i38.current, le9) || u9(o62.current, le9) || le9 === i38.current) return;
      let oe10 = m13(i38.current);
      M20.clientX >= oe10.left - ft6 && M20.clientX <= oe10.right + ft6 && M20.clientY >= oe10.top - ft6 && M20.clientY <= oe10.bottom + ft6 || P17(false, u4(s4.cancelOpen, M20));
    }
    be8.start(0, () => {
      te7.addEventListener("mouseup", ye9, { once: true });
    });
  } }, b14.getValidationProps, n61, p31);
  Me10.role = "combobox";
  let C18 = { ...R27, open: O14, disabled: q15, value: ne12, readOnly: g20, popupSide: F14, placeholder: !ce8 };
  return J("button", t48, { ref: [s54, i38], state: C18, stateAttributesMapping: Yr, props: Me10 });
});
var $r = { value: () => null };
var ro3 = oo2.forwardRef(function(t48, s54) {
  let { className: m25, render: S18, children: y24, placeholder: c40, style: u37, ...l19 } = t48, { store: n61, valueRef: a38 } = N17(), f35 = L8(n61, r48.value), d31 = L8(n61, r48.items), R27 = L8(n61, r48.itemToStringLabel), E30 = L8(n61, r48.hasSelectedValue), A17 = !E30 && c40 != null && y24 == null, I26 = L8(n61, r48.hasNullItemLabel, A17), P17 = { value: f35, placeholder: !E30 }, U11 = null;
  return typeof y24 == "function" ? U11 = y24(f35) : y24 != null ? U11 = y24 : !E30 && c40 != null && !I26 ? U11 = c40 : Array.isArray(f35) ? U11 = x13(f35, d31, R27) : U11 = p19(f35, d31, R27), J("span", t48, { state: P17, ref: [s54, a38], props: [{ children: U11 }, l19], stateAttributesMapping: $r });
});
var so2 = no3.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, ...c40 } = t48, { store: u37 } = N17(), n61 = { open: L8(u37, r48.open) };
  return J("span", t48, { state: n61, ref: s54, props: [{ "aria-hidden": true, children: "\u25BC" }, c40], stateAttributesMapping: c19 });
});
var lo = Pt3.createContext(void 0);
var uo = ao.forwardRef(function(t48, s54) {
  let { store: m25 } = N17(), S18 = L8(m25, r48.mounted), y24 = L8(m25, r48.forceMount);
  return S18 || y24 ? co(lo.Provider, { value: true, children: co(eo, { ref: s54, ...t48 }) }) : null;
});
var on2 = { ...g11, ...i7 };
var po = mo.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, ...c40 } = t48, { store: u37 } = N17(), l19 = L8(u37, r48.open), n61 = L8(u37, r48.mounted), a38 = L8(u37, r48.transitionStatus);
  return J("div", t48, { state: { open: l19, transitionStatus: a38 }, ref: s54, props: [{ role: "presentation", hidden: !n61, style: { userSelect: "none", WebkitUserSelect: "none" } }, c40], stateAttributesMapping: on2 });
});
var Dt5 = dt5.createContext(void 0);
function De8() {
  let e58 = dt5.useContext(Dt5);
  if (!e58) throw new Error(f2(59));
  return e58;
}
function Ke8(e58, t48) {
  e58 && Object.assign(e58.style, t48);
}
var gt4 = { position: "relative", maxHeight: "100%", overflowX: "hidden", overflowY: "auto" };
var Sn2 = { position: "fixed" };
var Ro2 = de7.forwardRef(function(t48, s54) {
  let { anchor: m25, positionMethod: S18 = "absolute", className: y24, render: c40, side: u37 = "bottom", align: l19 = "center", sideOffset: n61 = 0, alignOffset: a38 = 0, collisionBoundary: f35 = "clipping-ancestors", collisionPadding: d31, arrowPadding: R27 = 5, sticky: E30 = false, disableAnchorTracking: A17, alignItemWithTrigger: I26 = true, collisionAvoidance: P17 = i15, style: U11, ...b14 } = t48, { store: g20, listRef: V12, labelsRef: k17, alignItemWithTriggerActiveRef: v17, selectedItemTextRef: Q16, valuesRef: q15, initialValueRef: O14, popupRef: ee7, setValue: ne12 } = N17(), se12 = ut5(), D14 = L8(g20, r48.open), L20 = L8(g20, r48.mounted), z17 = L8(g20, r48.modal), X11 = L8(g20, r48.value), w22 = L8(g20, r48.openMethod), ce8 = L8(g20, r48.positionerElement), F14 = L8(g20, r48.triggerElement), j17 = L8(g20, r48.isItemEqualToValue), Y18 = L8(g20, r48.transitionStatus), o62 = de7.useRef(null), i38 = de7.useRef(null), [p31, K14] = de7.useState(I26), B17 = L20 && p31 && w22 !== "touch";
  !L20 && p31 !== I26 && K14(I26), o2(() => {
    L20 || (r48.scrollUpArrowVisible(g20.state) && g20.set("scrollUpArrowVisible", false), r48.scrollDownArrowVisible(g20.state) && g20.set("scrollDownArrowVisible", false));
  }, [g20, L20]), de7.useImperativeHandle(v17, () => B17), L10((B17 || z17) && D14, w22 === "touch", ce8, F14);
  let J18 = Lt2({ anchor: m25, floatingRootContext: se12, positionMethod: S18, mounted: L20, side: u37, sideOffset: n61, align: l19, alignOffset: a38, arrowPadding: R27, collisionBoundary: f35, collisionPadding: d31, sticky: E30, disableAnchorTracking: A17 ?? B17, collisionAvoidance: P17, keepMounted: true }), ae11 = B17 ? "none" : J18.side, be8 = B17 ? Sn2 : J18.positionerStyles, Ce7 = { open: D14, side: ae11, align: J18.align, anchorHidden: J18.anchorHidden };
  o2(() => {
    g20.set("popupSide", J18.side);
  }, [g20, J18.side]);
  let Me10 = E((M20) => {
    g20.set("positionerElement", M20);
  }), C18 = g14(t48, Ce7, { styles: be8, transitionStatus: Y18, props: b14, refs: [s54, Me10], hidden: !L20, inert: !D14 }), H16 = de7.useRef(0), te7 = E((M20) => {
    if (M20.size === 0 && H16.current === 0 || q15.current.length === 0) return;
    let le9 = H16.current;
    if (H16.current = M20.size, M20.size === le9) return;
    let oe10 = u4(s4.none);
    if (le9 !== 0 && !g20.state.multiple && X11 !== null && o33(q15.current, X11, j17) === -1) {
      let Z17 = O14.current, G18 = Z17 != null && o33(q15.current, Z17, j17) !== -1 ? Z17 : null;
      ne12(G18, oe10), G18 === null && (g20.set("selectedIndex", null), Q16.current = null);
    }
    if (le9 !== 0 && g20.state.multiple && Array.isArray(X11)) {
      let ue7 = (W14) => o33(q15.current, W14, j17) !== -1, Z17 = X11.filter((W14) => ue7(W14));
      (Z17.length !== X11.length || Z17.some((W14) => !i24(X11, W14, j17))) && (ne12(Z17, oe10), Z17.length === 0 && (g20.set("selectedIndex", null), Q16.current = null));
    }
    if (D14 && B17) {
      g20.update({ scrollUpArrowVisible: false, scrollDownArrowVisible: false });
      let ue7 = { height: "" };
      Ke8(ce8, ue7), Ke8(ee7.current, ue7);
    }
  }), ye9 = de7.useMemo(() => ({ ...J18, side: ae11, alignItemWithTriggerActive: B17, setControlledAlignItemWithTrigger: K14, scrollUpArrowRef: o62, scrollDownArrowRef: i38 }), [J18, ae11, B17, K14]);
  return So2(k, { elementsRef: V12, labelsRef: k17, onMapChange: te7, children: gn2(Dt5.Provider, { value: ye9, children: [L20 && z17 && So2(l12, { inert: s22(!D14), cutout: F14 }), C18] }) });
});
var Fn = { ...g11, ...i7 };
var Co2 = ge7.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, finalFocus: c40, ...u37 } = t48, { store: l19, popupRef: n61, onOpenChangeComplete: a38, setOpen: f35, valueRef: d31, firstItemTextRef: R27, selectedItemTextRef: E30, keyboardActiveRef: A17, multiple: I26, handleScrollArrowVisibility: P17, scrollHandlerRef: U11, listRef: b14, highlightItemOnHover: g20 } = N17(), { side: V12, align: k17, alignItemWithTriggerActive: v17, isPositioned: Q16, setControlledAlignItemWithTrigger: q15, scrollDownArrowRef: O14, scrollUpArrowRef: ee7 } = De8(), ne12 = s39(true) != null, se12 = ut5(), D14 = o4(), { nonce: L20, disableStyleElements: z17 } = o53(), X11 = L8(l19, r48.id), w22 = L8(l19, r48.open), ce8 = L8(l19, r48.mounted), F14 = L8(l19, r48.popupProps), j17 = L8(l19, r48.transitionStatus), Y18 = L8(l19, r48.triggerElement), o62 = L8(l19, r48.positionerElement), i38 = L8(l19, r48.listElement), p31 = ge7.useRef(false), K14 = ge7.useRef(false), B17 = ge7.useRef({}), J18 = R2(), ae11 = E((C18) => {
    if (!o62 || !n61.current || !K14.current) return;
    if (p31.current || !v17) {
      P17();
      return;
    }
    let H16 = o62.style.top === "0px", te7 = o62.style.bottom === "0px";
    if (!H16 && !te7) {
      P17();
      return;
    }
    let ye9 = Io(o62), M20 = lt5(o62.getBoundingClientRect().height, "y", ye9), le9 = n13(o62), oe10 = getComputedStyle(o62), ue7 = parseFloat(oe10.marginTop), Z17 = parseFloat(oe10.marginBottom), W14 = Eo2(getComputedStyle(n61.current)), G18 = Math.min(le9.documentElement.clientHeight - ue7 - Z17, W14), ve9 = C18.scrollTop, h24 = Rt5(C18), Re8 = 0, we7 = null, Ne7 = false, Ee7 = false, _e7 = (me7) => {
      o62.style.height = `${me7}px`;
    }, je8 = (me7, ie10) => {
      let Pe6 = t39(me7, 0, G18 - M20);
      Pe6 > 0 && _e7(M20 + Pe6), C18.scrollTop = ie10, G18 - (M20 + Pe6) <= f34 && (p31.current = true), P17();
    }, Te7 = H16 ? h24 - ve9 : ve9, Ge7 = Math.min(M20 + Te7, G18);
    if (Re8 = Ge7, Te7 <= f34) {
      je8(Te7, H16 ? h24 : 0);
      return;
    }
    if (G18 - Ge7 > f34) H16 ? Ee7 = true : we7 = 0;
    else if (Ne7 = true, te7 && ve9 < h24) {
      let me7 = M20 + Te7 - G18;
      we7 = ve9 - (Te7 - me7);
    }
    if (Re8 = Math.ceil(Re8), Re8 !== 0 && _e7(Re8), Ee7 || we7 != null) {
      let me7 = Rt5(C18), ie10 = Ee7 ? me7 : t39(we7, 0, me7);
      Math.abs(C18.scrollTop - ie10) > f34 && (C18.scrollTop = ie10);
    }
    (Ne7 || Re8 >= G18 - f34) && (p31.current = true), P17();
  });
  ge7.useImperativeHandle(U11, () => ae11, [ae11]), p10({ open: w22, ref: n61, onComplete() {
    w22 && a38?.(true);
  } });
  let be8 = { open: w22, transitionStatus: j17, side: V12, align: k17 };
  o2(() => {
    !o62 || !n61.current || Object.keys(B17.current).length || (B17.current = { top: o62.style.top || "0", left: o62.style.left || "0", right: o62.style.right, height: o62.style.height, bottom: o62.style.bottom, minHeight: o62.style.minHeight, maxHeight: o62.style.maxHeight, marginTop: o62.style.marginTop, marginBottom: o62.style.marginBottom });
  }, [n61, o62]), o2(() => {
    w22 || v17 || (K14.current = false, p31.current = false, Ke8(o62, B17.current));
  }, [w22, v17, o62, n61]), o2(() => {
    let C18 = n61.current;
    if (!w22 || !Y18 || !o62 || !C18 || v17 && !Q16 || l19.state.transitionStatus === "ending") return;
    if (!v17) {
      K14.current = true, J18.request(P17), C18.style.removeProperty("--transform-origin");
      return;
    }
    let H16 = Bn(C18);
    C18.style.removeProperty("--transform-origin");
    try {
      let te7 = E30.current;
      te7?.isConnected || (te7 = !r48.hasSelectedValue(l19.state) && R27.current?.isConnected ? R27.current : null);
      let ye9 = d31.current, M20 = getComputedStyle(o62), le9 = getComputedStyle(C18), oe10 = n13(Y18), ue7 = i10(o62), Z17 = Io(Y18), W14 = ht5(Y18.getBoundingClientRect(), Z17), G18 = ht5(o62.getBoundingClientRect(), Z17), ve9 = W14.height, h24 = i38 || C18, Re8 = h24.scrollHeight, we7 = parseFloat(le9.borderBottomWidth), Ne7 = parseFloat(M20.marginTop) || 10, Ee7 = parseFloat(M20.marginBottom) || 10, _e7 = parseFloat(M20.minHeight) || 100, je8 = Eo2(le9), Te7 = 5, Ge7 = 5, me7 = 20, ie10 = oe10.documentElement.clientHeight - Ne7 - Ee7, Pe6 = oe10.documentElement.clientWidth, Qe7 = ie10 - W14.bottom + ve9, pe9, Ye6 = D14 === "rtl" ? W14.right - G18.width : W14.left, Ue11 = 0;
      if (te7 && ye9) {
        let he6 = ht5(ye9.getBoundingClientRect(), Z17);
        pe9 = ht5(te7.getBoundingClientRect(), Z17), Ye6 = G18.left + (D14 === "rtl" ? he6.right - pe9.right : he6.left - pe9.left);
        let ze8 = he6.top - W14.top + he6.height / 2;
        Ue11 = pe9.top - G18.top + pe9.height / 2 - ze8;
      }
      let We8 = Qe7 + Ue11 + Ee7 + we7, re8 = Math.min(ie10, We8), ct7 = ie10 - Ne7 - Ee7, Oe5 = We8 - re8, Fe5 = Pe6 - Ge7;
      o62.style.left = `${t39(Ye6, Te7, Fe5 - G18.width)}px`, o62.style.height = `${re8}px`, o62.style.maxHeight = "auto", o62.style.marginTop = `${Ne7}px`, o62.style.marginBottom = `${Ee7}px`, C18.style.height = "100%";
      let Be6 = Rt5(h24), qe4 = Oe5 >= Be6 - f34;
      qe4 && (re8 = Math.min(ie10, G18.height) - (Oe5 - Be6));
      let et7 = W14.top < me7 || W14.bottom > ie10 - me7 || Math.ceil(re8) + f34 < Math.min(Re8, _e7), at8 = (ue7.visualViewport?.scale ?? 1) !== 1 && c8;
      if (et7 || at8) {
        K14.current = true, Ke8(o62, B17.current), q15(false);
        return;
      }
      let Ct9 = Math.max(_e7, re8);
      if (qe4) {
        let he6 = Math.max(0, ie10 - We8);
        o62.style.top = G18.height >= ct7 ? "0" : `${he6}px`, o62.style.height = `${re8}px`, h24.scrollTop = Rt5(h24);
      } else o62.style.bottom = "0", h24.scrollTop = Oe5;
      if (pe9) {
        let he6 = G18.top, ze8 = G18.height, tt8 = pe9.top + pe9.height / 2, vt6 = ze8 > 0 ? (tt8 - he6) / ze8 * 100 : 50, x21 = t39(vt6, 0, 100);
        C18.style.setProperty("--transform-origin", `50% ${x21}%`);
      }
      (Ct9 === ie10 || re8 >= je8) && (p31.current = true), P17(), g20 && l19.state.selectedIndex === null && l19.state.activeIndex === null && b14.current[0] != null && l19.set("activeIndex", 0), K14.current = true;
    } finally {
      H16();
    }
  }, [l19, w22, o62, Y18, d31, R27, E30, n61, P17, v17, q15, J18, O14, ee7, i38, b14, g20, D14, Q16]), ge7.useEffect(() => {
    if (!v17 || !o62 || !w22) return;
    let C18 = i10(o62);
    function H16(te7) {
      f35(false, u4(s4.windowResize, te7));
    }
    return t11(C18, "resize", H16);
  }, [f35, v17, o62, w22]);
  let Ce7 = { ...i38 ? { role: "presentation", "aria-orientation": void 0 } : { role: "listbox", "aria-multiselectable": I26 || void 0, id: `${X11}-list` }, onKeyDown(C18) {
    A17.current = true, ne12 && Y2.has(C18.key) && C18.stopPropagation();
  }, onMouseMove() {
    A17.current = false;
  }, onScroll(C18) {
    i38 || ae11(C18.currentTarget);
  }, ...v17 && { style: i38 ? { height: "100%" } : gt4 } }, Me10 = J("div", t48, { ref: [s54, n61], state: be8, stateAttributesMapping: Fn, props: [F14, Ce7, T8(j17), { className: !i38 && v17 ? a35.className : void 0 }, u37] });
  return Un(ge7.Fragment, { children: [!z17 && a35.getElement(L20), _n2(To, { context: se12, modal: false, disabled: !ce8, returnFocus: c40, restoreFocus: true, children: Me10 })] });
});
function Eo2(e58) {
  let t48 = e58.maxHeight || "";
  return t48.endsWith("px") && parseFloat(t48) || 1 / 0;
}
function Rt5(e58) {
  return a36(e58.scrollHeight, e58.clientHeight);
}
function Io(e58) {
  return react_dom_2_1_exports.platform.getScale(e58);
}
function lt5(e58, t48, s54) {
  return e58 / s54[t48];
}
function ht5(e58, t48) {
  return D3({ x: lt5(e58.x, "x", t48), y: lt5(e58.y, "y", t48), width: lt5(e58.width, "x", t48), height: lt5(e58.height, "y", t48) });
}
var bo2 = [["transform", "none"], ["scale", "1"], ["translate", "0 0"]];
function Bn(e58) {
  let { style: t48 } = e58, s54 = {};
  for (let [m25, S18] of bo2) s54[m25] = t48.getPropertyValue(m25), t48.setProperty(m25, S18, "important");
  return () => {
    for (let [m25] of bo2) {
      let S18 = s54[m25];
      S18 ? t48.setProperty(m25, S18) : t48.removeProperty(m25);
    }
  };
}
var wo = vo.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, ...c40 } = t48, { store: u37, scrollHandlerRef: l19 } = N17(), { alignItemWithTriggerActive: n61 } = De8(), a38 = L8(u37, r48.hasScrollArrows), f35 = L8(u37, r48.openMethod), d31 = L8(u37, r48.multiple), E30 = { id: `${L8(u37, r48.id)}-list`, role: "listbox", "aria-multiselectable": d31 || void 0, onScroll(I26) {
    l19.current?.(I26.currentTarget);
  }, ...n61 && { style: gt4 }, className: a38 && f35 !== "touch" ? a35.className : void 0 }, A17 = E((I26) => {
    u37.set("listElement", I26);
  });
  return J("div", t48, { ref: [s54, A17], props: [E30, c40] });
});
var Ut3 = yt6.createContext(void 0);
function it5() {
  let e58 = yt6.useContext(Ut3);
  if (!e58) throw new Error(f2(57));
  return e58;
}
var Ao4 = Se5.memo(Se5.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, value: c40 = null, label: u37, disabled: l19 = false, nativeButton: n61 = false, ...a38 } = t48, f35 = Se5.useRef(null), d31 = N2({ label: u37, textRef: f35, indexGuessBehavior: I5.GuessFromOrder }), { store: R27, itemProps: E30, setOpen: A17, setValue: I26, selectionRef: P17, typingRef: U11, valuesRef: b14, multiple: g20, selectedItemTextRef: V12 } = N17(), k17 = L8(R27, r48.isActive, d31.index), v17 = L8(R27, r48.isSelected, d31.index, c40), Q16 = L8(R27, r48.isSelectedByFocus, d31.index), q15 = L8(R27, r48.isItemEqualToValue), O14 = d31.index, ee7 = O14 !== -1, ne12 = Se5.useRef(null);
  o2(() => {
    if (!ee7) return;
    let i38 = b14.current;
    return i38[O14] = c40, () => {
      delete i38[O14];
    };
  }, [ee7, O14, c40, b14]), o2(() => {
    if (!ee7) return;
    let i38 = R27.state.value, p31 = i38;
    g20 && Array.isArray(i38) && i38.length > 0 && (p31 = i38[i38.length - 1]), p31 !== void 0 && e15(c40, p31, q15) && (R27.set("selectedIndex", O14), f35.current && (V12.current = f35.current));
  }, [ee7, O14, g20, q15, R27, c40, V12]);
  let se12 = Se5.useRef(null), D14 = Se5.useRef("mouse"), L20 = Se5.useRef(false), { getButtonProps: z17, buttonRef: X11 } = Q({ disabled: l19, focusableWhenDisabled: true, native: n61, composite: true }), w22 = { disabled: l19, selected: v17, highlighted: k17 };
  function ce8(i38) {
    let p31 = R27.state.value;
    if (g20) {
      let K14 = Array.isArray(p31) ? p31 : [], B17 = v17 ? x12(K14, c40, q15) : [...K14, c40];
      I26(B17, u4(s4.itemPress, i38));
    } else I26(c40, u4(s4.itemPress, i38)), A17(false, u4(s4.itemPress, i38));
  }
  function F14() {
    P17.current.dragY = 0;
  }
  let j17 = { role: "option", "aria-selected": v17, tabIndex: k17 ? 0 : -1, onKeyDown(i38) {
    se12.current = i38.key, R27.set("activeIndex", O14), i38.key === " " && U11.current && i38.preventDefault();
  }, onClick(i38) {
    let p31 = i38.type === "click" && D14.current !== "touch", K14 = i38.nativeEvent.pointerType, B17 = p31 && s11(i38.nativeEvent) && (K14 !== void 0 || k17), J18 = p31 && !B17 && !L20.current;
    L20.current = false, !(i38.type === "keydown" && se12.current === null) && (l19 || i38.type === "keydown" && se12.current === " " && U11.current || J18 || (se12.current = null, ce8(i38.nativeEvent)));
  }, onPointerEnter(i38) {
    D14.current = i38.pointerType;
  }, onPointerMove(i38) {
    if (i38.pointerType === "mouse" && i38.buttons === 1) {
      let p31 = P17.current;
      p31.dragY += i38.movementY, p31.dragY ** 2 >= 64 && (p31.allowUnselectedMouseUp = true);
    }
  }, onPointerDown(i38) {
    D14.current = i38.pointerType, L20.current = true, F14();
  }, onMouseUp() {
    if (F14(), l19 || D14.current === "touch" || L20.current) return;
    let i38 = !P17.current.allowSelectedMouseUp && v17, p31 = !P17.current.allowUnselectedMouseUp && !v17;
    i38 || p31 || (L20.current = true, ne12.current?.click(), L20.current = false);
  } }, Y18 = J("div", t48, { ref: [X11, s54, d31.ref, ne12], state: w22, props: [E30, j17, a38, z17] }), o62 = Se5.useMemo(() => ({ selected: v17, index: O14, textRef: f35, selectedByFocus: Q16, hasRegistered: ee7 }), [v17, O14, f35, Q16, ee7]);
  return Jn2(Ut3.Provider, { value: o62, children: Y18 });
}));
var Vo = ke5.forwardRef(function(t48, s54) {
  let m25 = t48.keepMounted ?? false, { selected: S18 } = it5();
  return m25 || S18 ? os(rs2, { ...t48, ref: s54 }) : null;
});
var rs2 = ke5.memo(ke5.forwardRef((e58, t48) => {
  let { render: s54, className: m25, style: S18, keepMounted: y24, ...c40 } = e58, { selected: u37 } = it5(), l19 = ke5.useRef(null), { transitionStatus: n61, setMounted: a38 } = g2(u37), d31 = J("span", e58, { ref: [t48, l19], state: { selected: u37, transitionStatus: n61 }, props: [{ "aria-hidden": true, children: "\u2714\uFE0F" }, c40], stateAttributesMapping: i7 });
  return p10({ open: u37, ref: l19, onComplete() {
    u37 || a38(false);
  } }), d31;
}));
var Mo2 = Je8.memo(Je8.forwardRef(function(t48, s54) {
  let { index: m25, textRef: S18, selectedByFocus: y24, hasRegistered: c40 } = it5(), { firstItemTextRef: u37, selectedItemTextRef: l19 } = N17(), { render: n61, className: a38, style: f35, ...d31 } = t48, R27 = Je8.useCallback((A17) => {
    A17 && (c40 && m25 === 0 && (u37.current = A17), c40 && y24 && (l19.current = A17));
  }, [u37, l19, m25, y24, c40]);
  return J("div", t48, { ref: [R27, s54, S18], props: d31 });
}));
var as = { ...g11, ...i7 };
var Po2 = No3.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, ...c40 } = t48, { store: u37 } = N17(), { side: l19, align: n61, arrowRef: a38, arrowStyles: f35, arrowUncentered: d31, alignItemWithTriggerActive: R27 } = De8(), A17 = { open: L8(u37, r48.open, true), side: l19, align: n61, uncentered: d31 }, I26 = J("div", t48, { state: A17, ref: [a38, s54], props: [{ style: f35, "aria-hidden": true }, c40], stateAttributesMapping: as });
  return R27 ? null : I26;
});
var It5 = Lo.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, direction: c40, keepMounted: u37 = false, ...l19 } = t48, n61 = c40 === "up", { store: a38, popupRef: f35, listRef: d31, handleScrollArrowVisibility: R27, scrollArrowsMountedCountRef: E30 } = N17(), { side: A17, scrollDownArrowRef: I26, scrollUpArrowRef: P17 } = De8(), U11 = n61 ? r48.scrollUpArrowVisible : r48.scrollDownArrowVisible, b14 = L8(a38, U11), g20 = L8(a38, r48.openMethod), V12 = b14 && g20 !== "touch", k17 = p12(), v17 = n61 ? P17 : I26, { transitionStatus: Q16, setMounted: q15 } = g2(V12);
  o2(() => (E30.current += 1, a38.state.hasScrollArrows || a38.set("hasScrollArrows", true), () => {
    E30.current = Math.max(0, E30.current - 1), E30.current === 0 && a38.state.hasScrollArrows && a38.set("hasScrollArrows", false);
  }), [a38, E30]), p10({ open: V12, ref: v17, onComplete() {
    V12 || q15(false);
  } });
  let ne12 = J("div", t48, { ref: [s54, v17], state: { direction: c40, visible: V12, side: A17, transitionStatus: Q16 }, props: [{ "aria-hidden": true, children: n61 ? "\u25B2" : "\u25BC", style: { position: "absolute" }, onMouseMove(D14) {
    if (D14.movementX === 0 && D14.movementY === 0 || k17.isStarted()) return;
    a38.set("activeIndex", null);
    function L20() {
      let z17 = a38.state.listElement ?? f35.current;
      if (!z17) return;
      a38.set("activeIndex", null), R27();
      let X11 = a36(z17.scrollHeight, z17.clientHeight), w22 = u36(z17.scrollTop, X11), ce8 = w22 === (n61 ? 0 : X11), F14 = d31.current;
      if (w22 !== z17.scrollTop && (z17.scrollTop = w22), F14.length === 0 && a38.set(n61 ? "scrollUpArrowVisible" : "scrollDownArrowVisible", !ce8), ce8) {
        k17.clear();
        return;
      }
      if (F14.length > 0) {
        let j17 = v17.current?.offsetHeight || 0;
        z17.scrollTop = Ss(F14, n61, w22, z17.clientHeight, j17, X11);
      }
      k17.start(40, L20);
    }
    k17.start(40, L20);
  }, onMouseLeave() {
    k17.clear();
  } }, l19] });
  return V12 || u37 ? ne12 : null;
});
function Ss(e58, t48, s54, m25, S18, y24) {
  if (t48) {
    let a38 = 0, f35 = s54 + S18 - f34;
    for (let E30 = 0; E30 < e58.length; E30 += 1) {
      let A17 = e58[E30];
      if (A17 && A17.offsetTop >= f35) {
        a38 = E30;
        break;
      }
    }
    let d31 = Math.max(0, a38 - 1), R27 = e58[d31];
    return d31 < a38 && R27 ? u36(R27.offsetTop - S18, y24) : 0;
  }
  let c40 = e58.length - 1, u37 = s54 + m25 - S18 + f34;
  for (let a38 = 0; a38 < e58.length; a38 += 1) {
    let f35 = e58[a38];
    if (f35 && f35.offsetTop + f35.offsetHeight > u37) {
      c40 = Math.max(0, a38 - 1);
      break;
    }
  }
  let l19 = Math.min(e58.length - 1, c40 + 1), n61 = e58[l19];
  return l19 > c40 && n61 ? u36(n61.offsetTop + n61.offsetHeight - m25 + S18, y24) : y24;
}
var Uo2 = _o.forwardRef(function(t48, s54) {
  return Rs2(It5, { ...t48, ref: s54, direction: "down" });
});
var Bo = Fo.forwardRef(function(t48, s54) {
  return hs(It5, { ...t48, ref: s54, direction: "up" });
});
var kt5 = bt5.createContext(void 0);
function Ho() {
  let e58 = bt5.useContext(kt5);
  if (e58 === void 0) throw new Error(f2(56));
  return e58;
}
var ko = Ze8.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, ...c40 } = t48, [u37, l19] = Ze8.useState(), n61 = Ze8.useMemo(() => ({ labelId: u37, setLabelId: l19 }), [u37, l19]), a38 = J("div", t48, { ref: s54, props: [{ role: "group", "aria-labelledby": u37 }, c40] });
  return Es(kt5.Provider, { value: n61, children: a38 });
});
var Go = jo2.forwardRef(function(t48, s54) {
  let { render: m25, className: S18, style: y24, id: c40, ...u37 } = t48, { setLabelId: l19 } = Ho(), n61 = r5(c40);
  return o2(() => {
    l19(n61);
  }, [n61, l19]), J("div", t48, { ref: s54, props: [{ id: n61 }, u37] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/slider.mjs
import * as T15 from "react";
import * as Ue8 from "react";
import { jsx as mt5 } from "react/jsx-runtime";
import * as Rt6 from "react";
import * as je6 from "react";
import * as ie7 from "react";
import * as Ct7 from "react";
import * as ne10 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/utils/useIsHydrating.mjs
function n58() {
  return e5;
}
function e55() {
  return false;
}
function o61() {
  return true;
}
function s53() {
  return C4(n58, e55, o61);
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/slider.mjs
import { jsx as Tt8, jsxs as Yr2 } from "react/jsx-runtime";
import * as Dt6 from "react";
var Ht4 = Object.defineProperty;
var Wt2 = (e58, t48) => {
  for (var n61 in t48) Ht4(e58, n61, { get: t48[n61], enumerable: true });
};
var kt6 = {};
Wt2(kt6, { Control: () => It6, Indicator: () => Bt4, Label: () => yt7, Root: () => bt6, Thumb: () => Ot3, Track: () => Et7, Value: () => vt4 });
function He7(e58, t48) {
  return e58 - t48;
}
function ct4(e58, t48, n61) {
  let s54 = e58.slice();
  return s54[t48] = n61, s54.sort(He7);
}
function We7(e58, t48, n61, s54, i38, c40) {
  let a38 = e58;
  return a38 = t39(a38, n61, s54), i38 && (a38 = ct4(c40, t48, t39(a38, c40[t48 - 1] || -1 / 0, c40[t48 + 1] || 1 / 0))), a38;
}
function ze7(e58, t48, n61) {
  if (!Array.isArray(e58)) return true;
  let s54 = e58.reduce((i38, c40, a38, u37) => (a38 === u37.length - 1 || i38.push(Math.abs(c40 - u37[a38 + 1])), i38), []);
  return Math.min(...s54) >= t48 * n61;
}
var X9 = { activeThumbIndex: () => null, max: () => null, min: () => null, minStepsBetweenValues: () => null, step: () => null, values: () => null, ...n25 };
var et6 = Ue8.createContext(void 0);
function re7() {
  let e58 = Ue8.useContext(et6);
  if (e58 === void 0) throw new Error(f2(62));
  return e58;
}
function ur3(e58) {
  return "key" in e58 ? s4.keyboard : s4.inputChange;
}
function cr3(e58, t48) {
  return typeof e58 == "number" && typeof t48 == "number" ? e58 === t48 : Array.isArray(e58) && Array.isArray(t48) ? u23(e58, t48) : false;
}
var bt6 = T15.forwardRef(function(t48, n61) {
  let { "aria-labelledby": s54, className: i38, defaultValue: c40, disabled: a38 = false, id: u37, format: f35, largeStep: P17 = 10, locale: m25, render: O14, max: S18 = 100, min: p31 = 0, minStepsBetweenValues: o62 = 0, form: x21, name: h24, onValueChange: I26, onValueCommitted: g20, orientation: V12 = "horizontal", step: F14 = 1, thumbCollisionBehavior: ye9 = "push", thumbAlignment: oe10 = "center", value: ve9, style: se12, ...U11 } = t48, fe7 = r5(u37), k17 = n29(fe7), me7 = E(I26), _19 = E(g20), { clearErrors: C18 } = n26(), { state: j17, disabled: H16, name: $9, setTouched: b14, setDirty: w22, validityData: Se8, shouldValidateOnChange: ae11, validation: ee7 } = E14(), { labelId: le9 } = s28(), [ue7, Ee7] = T15.useState(), ce8 = s54 ?? t19(le9, ue7), q15 = H16 || a38, J18 = $9 ?? h24, [D14, pe9] = m({ controlled: ve9, default: c40 ?? p31, name: "Slider" }), W14 = T15.useRef(null), M20 = T15.useRef(null), be8 = T15.useRef([]), Le7 = T15.useRef(null), r49 = T15.useRef(null), l19 = T15.useRef(-1), d31 = T15.useRef(null), y24 = T15.useRef(null), E30 = T15.useRef("none"), A17 = I8(f35), [B17, K14] = T15.useState(-1), [Q16, Oe5] = T15.useState(-1), [he6, ge10] = T15.useState(false), [Ve7, Fe5] = T15.useState(() => /* @__PURE__ */ new Map()), [Ne7, R27] = T15.useState([void 0, void 0]), Re8 = E((N20) => {
    K14(N20), N20 !== -1 && Oe5(N20);
  });
  d21(M20, fe7, D14), u16(D14, () => {
    C18(J18), ae11() ? ee7.commit(D14) : ee7.commit(D14, true);
    let N20 = Se8.initialValue, G18;
    Array.isArray(D14) && Array.isArray(N20) ? G18 = !u23(D14, N20) : G18 = D14 !== N20, w22(G18);
  });
  let z17 = E((N20) => {
    N20 && (M20.current = N20);
  }), xe9 = Array.isArray(D14), Ie7 = T15.useMemo(() => xe9 ? D14.slice().sort(He7) : [t39(D14, p31, S18)], [S18, p31, xe9, D14]), De10 = E((N20, G18) => {
    if (Number.isNaN(N20) || cr3(N20, D14)) return;
    let Z17 = G18 ?? u4(s4.none, void 0, void 0, { activeThumbIndex: -1 });
    E30.current = Z17.reason;
    let de8 = Z17.event, Pe6 = de8.constructor ?? Event, Ae7 = new Pe6(de8.type, de8);
    Object.defineProperty(Ae7, "target", { writable: true, value: { value: N20, name: J18 } }), Z17.event = Ae7, y24.current = N20, me7(N20, Z17), !Z17.isCanceled && pe9(N20);
  }), Be6 = E((N20, G18, Z17) => {
    let de8 = We7(N20, G18, p31, S18, xe9, Ie7);
    if (ze7(de8, F14, o62)) {
      let Pe6 = ur3(Z17);
      De10(de8, u4(Pe6, Z17.nativeEvent, void 0, { activeThumbIndex: G18 })), b14(true);
      let Ae7 = y24.current ?? de8;
      _19(Ae7, d3(Pe6, Z17.nativeEvent));
    }
  });
  o2(() => {
    let N20 = a12(n13(W14.current));
    q15 && u9(W14.current, N20) && N20.blur();
  }, [q15]), q15 && B17 !== -1 && Re8(-1);
  let ke8 = T15.useMemo(() => ({ ...j17, activeThumbIndex: B17, disabled: q15, dragging: he6, orientation: V12, max: S18, min: p31, minStepsBetweenValues: o62, step: F14, values: Ie7 }), [j17, B17, q15, he6, S18, p31, o62, V12, F14, Ie7]), Ce7 = T15.useMemo(() => ({ active: B17, controlRef: M20, disabled: q15, dragging: he6, validation: ee7, formatOptionsRef: A17, handleInputChange: Be6, indicatorPosition: Ne7, inset: oe10 !== "center", labelId: ce8, rootLabelId: k17, largeStep: P17, lastUsedThumbIndex: Q16, lastChangedValueRef: y24, lastChangeReasonRef: E30, form: x21, locale: m25, max: S18, min: p31, minStepsBetweenValues: o62, name: J18, onValueCommitted: _19, orientation: V12, pressedInputRef: Le7, pressedThumbCenterOffsetRef: r49, pressedThumbIndexRef: l19, pressedValuesRef: d31, registerFieldControlRef: z17, renderBeforeHydration: oe10 === "edge", setActive: Re8, setDragging: ge10, setIndicatorPosition: R27, setLabelId: Ee7, setValue: De10, state: ke8, step: F14, thumbCollisionBehavior: ye9, thumbMap: Ve7, thumbRefs: be8, values: Ie7 }), [B17, M20, ce8, k17, q15, he6, ee7, A17, Be6, Ne7, P17, Q16, y24, E30, x21, m25, S18, p31, o62, J18, _19, V12, Le7, r49, l19, d31, z17, Re8, ge10, R27, Ee7, De10, ke8, F14, ye9, oe10, Ve7, be8, Ie7]), _e7 = J("div", t48, { state: ke8, ref: [n61, W14], props: [{ "aria-labelledby": ce8, id: fe7, role: "group" }, ee7.getValidationProps, U11], stateAttributesMapping: X9 });
  return mt5(et6.Provider, { value: Ce7, children: mt5(k, { elementsRef: be8, onMapChange: Fe5, children: _e7 }) });
});
var yt7 = Rt6.forwardRef(function(t48, n61) {
  let { render: s54, className: i38, style: c40, ...a38 } = t48, u37 = a38;
  delete u37.id;
  let { state: f35, setLabelId: P17, controlRef: m25, rootLabelId: O14 } = re7();
  function S18(o62, x21) {
    if (x21) {
      let g20 = n13(o62.currentTarget).getElementById(x21);
      if (g4(g20)) {
        D10(g20);
        return;
      }
    }
    let h24 = m25.current?.querySelectorAll('input[type="range"]'), I26 = h24?.length === 1 ? h24[0] : null;
    g4(I26) && D10(I26);
  }
  let p31 = v13({ id: O14, setLabelId: P17, focusControl: S18 });
  return J("div", t48, { ref: n61, state: f35, props: [p31, a38], stateAttributesMapping: X9 });
});
var vt4 = je6.forwardRef(function(t48, n61) {
  let { "aria-live": s54 = "off", render: i38, className: c40, children: a38, style: u37, ...f35 } = t48, { thumbMap: P17, state: m25, values: O14, formatOptionsRef: S18, locale: p31 } = re7(), o62 = "";
  for (let V12 of P17.values()) V12?.inputId && (o62 += `${V12.inputId} `);
  let x21 = o62.trim() === "" ? void 0 : o62.trim(), h24 = je6.useMemo(() => {
    let V12 = [];
    for (let F14 = 0; F14 < O14.length; F14 += 1) V12.push(e50(O14[F14], p31, S18.current ?? void 0));
    return V12;
  }, [S18, p31, O14]), I26 = O14.map((V12, F14) => h24[F14] || V12).join(" \u2013 ");
  return J("output", t48, { state: m25, ref: n61, props: [{ "aria-live": s54, children: typeof a38 == "function" ? a38(h24, O14) : I26, htmlFor: x21 }, f35], stateAttributesMapping: X9 });
});
function qe3(e58) {
  let t48 = e58.getBoundingClientRect();
  return { x: (t48.left + t48.right) / 2, y: (t48.top + t48.bottom) / 2 };
}
function we5(e58) {
  if (e58 === 0) return 0;
  if (Math.abs(e58) < 1) {
    let n61 = e58.toExponential().split("e-"), s54 = n61[0].split(".")[1];
    return (s54 ? s54.length : 0) + parseInt(n61[1], 10);
  }
  let t48 = e58.toString().split(".")[1];
  return t48 ? t48.length : 0;
}
function Ke9(e58, t48, n61) {
  let s54 = Math.round((e58 - n61) / t48) * t48 + n61;
  return Number(s54.toFixed(Math.max(we5(t48), we5(n61))));
}
function nt6({ values: e58, index: t48, nextValue: n61, min: s54, max: i38, step: c40, minStepsBetweenValues: a38, initialValues: u37 }) {
  if (e58.length === 0) return [];
  let f35 = e58.slice(), P17 = c40 * a38, m25 = f35.length - 1, O14 = u37 ?? e58, S18 = s54 + t48 * P17, p31 = i38 - (m25 - t48) * P17;
  f35[t48] = t39(n61, S18, p31);
  for (let o62 = t48 + 1; o62 <= m25; o62 += 1) {
    let x21 = f35[o62 - 1] + P17, h24 = i38 - (m25 - o62) * P17, I26 = O14[o62] ?? f35[o62], g20 = Math.max(f35[o62], x21);
    I26 < g20 && (g20 = Math.max(I26, x21)), f35[o62] = t39(g20, x21, h24);
  }
  for (let o62 = t48 - 1; o62 >= 0; o62 -= 1) {
    let x21 = f35[o62 + 1] - P17, h24 = s54 + o62 * P17, I26 = O14[o62] ?? f35[o62], g20 = Math.min(f35[o62], x21);
    I26 > g20 && (g20 = Math.min(I26, x21)), f35[o62] = t39(g20, h24, x21);
  }
  for (let o62 = 0; o62 <= m25; o62 += 1) f35[o62] = Number(f35[o62].toFixed(12));
  return f35;
}
function St4({ behavior: e58, values: t48, currentValues: n61, initialValues: s54, pressedIndex: i38, nextValue: c40, min: a38, max: u37, step: f35, minStepsBetweenValues: P17 }) {
  let m25 = n61 ?? t48, O14 = s54 ?? t48;
  if (!(m25.length > 1)) return { value: c40, thumbIndex: 0, didSwap: false };
  let p31 = f35 * P17;
  switch (e58) {
    case "swap": {
      let o62 = m25[i38], x21 = 1e-7, h24 = m25.slice(), I26 = h24[i38 - 1], g20 = h24[i38 + 1], V12 = I26 != null ? I26 + p31 : a38, F14 = g20 != null ? g20 - p31 : u37, ye9 = t39(c40, V12, F14), oe10 = Number(ye9.toFixed(12));
      h24[i38] = oe10;
      let ve9 = c40 > o62, se12 = c40 < o62, U11 = ve9 && g20 != null && c40 >= g20 - x21, fe7 = se12 && I26 != null && c40 <= I26 + x21;
      if (!U11 && !fe7) return { value: h24, thumbIndex: i38, didSwap: false };
      let k17 = U11 ? i38 + 1 : i38 - 1, me7 = h24.map((H16, $9) => {
        if ($9 === i38) return oe10;
        let b14 = O14[$9];
        return b14 ?? m25[$9];
      }), _19 = c40;
      U11 ? _19 = Math.max(c40, h24[k17]) : _19 = Math.min(c40, h24[k17]);
      let C18 = nt6({ values: h24, index: k17, nextValue: _19, min: a38, max: u37, step: f35, minStepsBetweenValues: P17, initialValues: me7 }), j17 = U11 ? k17 - 1 : k17 + 1;
      if (j17 >= 0 && j17 < C18.length) {
        let H16 = C18[j17 - 1], $9 = C18[j17 + 1], b14 = H16 != null ? H16 + p31 : a38;
        b14 = Math.max(b14, a38 + j17 * p31);
        let w22 = $9 != null ? $9 - p31 : u37;
        w22 = Math.min(w22, u37 - (C18.length - 1 - j17) * p31);
        let Se8 = t39(oe10, b14, w22);
        C18[j17] = Number(Se8.toFixed(12));
      }
      return { value: C18, thumbIndex: k17, didSwap: true };
    }
    case "push":
      return { value: nt6({ values: m25, index: i38, nextValue: c40, min: a38, max: u37, step: f35, minStepsBetweenValues: P17 }), thumbIndex: i38, didSwap: false };
    default: {
      let o62 = m25.slice(), x21 = o62[i38 - 1], h24 = o62[i38 + 1], I26 = x21 != null ? x21 + p31 : a38, g20 = h24 != null ? h24 - p31 : u37, V12 = t39(c40, I26, g20);
      return o62[i38] = Number(V12.toFixed(12)), { value: o62, thumbIndex: i38, didSwap: false };
    }
  }
}
var Pr = 2;
function Vr3(e58, t48) {
  if (!e58) return { start: 0, end: 0 };
  function n61(c40) {
    let a38 = c40 != null ? parseFloat(c40) : 0;
    return Number.isNaN(a38) ? 0 : a38;
  }
  let s54 = t48 ? "Top" : "InlineStart", i38 = t48 ? "Bottom" : "InlineEnd";
  return { start: n61(e58[`border${s54}Width`]) + n61(e58[`padding${s54}`]), end: n61(e58[`border${i38}Width`]) + n61(e58[`padding${i38}`]) };
}
function Xe8(e58, t48) {
  if (t48.current != null && e58.changedTouches) {
    let n61 = e58;
    for (let s54 = 0; s54 < n61.changedTouches.length; s54 += 1) {
      let i38 = n61.changedTouches[s54];
      if (i38.identifier === t48.current) return { x: i38.clientX, y: i38.clientY };
    }
    return null;
  }
  return { x: e58.clientX, y: e58.clientY };
}
var It6 = ie7.forwardRef(function(t48, n61) {
  let { render: s54, className: i38, style: c40, ...a38 } = t48, { disabled: u37, dragging: f35, inset: P17, lastChangedValueRef: m25, lastChangeReasonRef: O14, max: S18, min: p31, minStepsBetweenValues: o62, onValueCommitted: x21, orientation: h24, pressedInputRef: I26, pressedThumbCenterOffsetRef: g20, pressedThumbIndexRef: V12, pressedValuesRef: F14, registerFieldControlRef: ye9, renderBeforeHydration: oe10, setActive: ve9, setDragging: se12, setValue: U11, state: fe7, step: k17, thumbCollisionBehavior: me7, thumbRefs: _19, values: C18 } = re7(), j17 = o4(), H16 = C18.length > 1, $9 = h24 === "vertical", b14 = ie7.useRef(null), w22 = ie7.useRef(null), Se8 = E((r49) => {
    r49 && w22.current == null && (w22.current = i10(r49).getComputedStyle(r49));
  }), ae11 = ie7.useRef(null), ee7 = ie7.useRef(0), le9 = ie7.useRef(0), ue7 = I8(C18);
  function Ee7(r49) {
    V12.current !== r49 && (V12.current = r49);
    let l19 = _19.current[r49];
    if (!l19) {
      g20.current = null, I26.current = null;
      return;
    }
    I26.current = l19.querySelector('input[type="range"]');
  }
  function ce8(r49) {
    let l19 = b14.current;
    if (!l19) return null;
    let { width: d31, height: y24, bottom: E30, left: A17, right: B17 } = l19.getBoundingClientRect(), K14 = Vr3(w22.current, $9), Q16 = le9.current, Oe5 = ($9 ? y24 : d31) - K14.start - K14.end - Q16 * 2, he6 = g20.current ?? 0, ge10 = r49.x - he6, Ve7 = r49.y - he6, Fe5 = $9 ? E30 - Ve7 - K14.end : (j17 === "rtl" ? B17 - ge10 : ge10 - A17) - K14.start, Ne7 = t39((Fe5 - Q16) / Oe5, 0, 1), R27 = (S18 - p31) * Ne7 + p31;
    if (R27 = Ke9(R27, k17, p31), R27 = t39(R27, p31, S18), !H16) return { value: R27, thumbIndex: 0, didSwap: false };
    let Re8 = V12.current;
    if (Re8 < 0) return null;
    let z17 = St4({ behavior: me7, values: C18, currentValues: ue7.current ?? C18, initialValues: F14.current, pressedIndex: Re8, nextValue: R27, min: p31, max: S18, step: k17, minStepsBetweenValues: o62 });
    return me7 === "swap" && z17.didSwap ? Ee7(z17.thumbIndex) : V12.current = z17.thumbIndex, z17;
  }
  function q15(r49) {
    F14.current = H16 ? C18.slice() : null, ue7.current = C18;
    let l19 = V12.current, d31 = l19;
    if (l19 > -1 && l19 < C18.length) {
      if (C18[l19] === S18) {
        let y24 = l19;
        for (; y24 > 0 && C18[y24 - 1] === S18; ) y24 -= 1;
        d31 = y24;
      }
    } else {
      let y24 = $9 ? "y" : "x", E30;
      d31 = -1;
      for (let A17 = 0; A17 < _19.current.length; A17 += 1) {
        let B17 = _19.current[A17];
        if (h4(B17)) {
          let K14 = qe3(B17), Q16 = Math.abs(r49[y24] - K14[y24]);
          (E30 === void 0 || Q16 <= E30) && (d31 = A17, E30 = Q16);
        }
      }
    }
    if (d31 > -1 && d31 !== l19 && Ee7(d31), P17) {
      let y24 = _19.current[d31];
      if (h4(y24)) {
        let E30 = y24.getBoundingClientRect(), A17 = $9 ? "height" : "width";
        le9.current = E30[A17] / 2;
      }
    }
  }
  function J18(r49) {
    let l19 = _19.current?.[r49]?.querySelector('input[type="range"]');
    l19 && l19.focus({ preventScroll: true, focusVisible: false });
  }
  let D14 = E((r49) => {
    let l19 = Xe8(r49, ae11);
    if (l19 == null) return;
    if (ee7.current += 1, r49.type === "pointermove" && r49.buttons === 0) {
      pe9(r49);
      return;
    }
    let d31 = ce8(l19);
    d31 != null && ze7(d31.value, k17, o62) && (!f35 && ee7.current > Pr && se12(true), U11(d31.value, u4(s4.drag, r49, void 0, { activeThumbIndex: d31.thumbIndex })), ue7.current = Array.isArray(d31.value) ? d31.value : [d31.value], d31.didSwap && J18(d31.thumbIndex));
  });
  function pe9(r49) {
    ve9(-1), se12(false), I26.current = null, g20.current = null;
    let l19 = Xe8(r49, ae11), d31 = l19 != null ? ce8(l19) : null;
    if (d31 != null) {
      let y24 = O14.current;
      x21(m25.current ?? d31.value, d3(y24, r49));
    }
    "pointerType" in r49 && b14.current?.hasPointerCapture(r49.pointerId) && b14.current?.releasePointerCapture(r49.pointerId), V12.current = -1, ae11.current = null, F14.current = null, M20();
  }
  let W14 = E((r49) => {
    if (u37) return;
    let l19 = r49.changedTouches[0];
    l19 != null && (ae11.current = l19.identifier);
    let d31 = Xe8(r49, ae11);
    if (d31 != null) {
      q15(d31);
      let E30 = ce8(d31);
      if (E30 == null) return;
      J18(E30.thumbIndex), U11(E30.value, u4(s4.trackPress, r49, void 0, { activeThumbIndex: E30.thumbIndex })), ue7.current = Array.isArray(E30.value) ? E30.value : [E30.value], E30.didSwap && J18(E30.thumbIndex);
    }
    ee7.current = 0;
    let y24 = n13(b14.current);
    y24.addEventListener("touchmove", D14, { passive: true }), y24.addEventListener("touchend", pe9, { passive: true });
  }), M20 = E(() => {
    let r49 = n13(b14.current);
    r49.removeEventListener("pointermove", D14), r49.removeEventListener("pointerup", pe9), r49.removeEventListener("touchmove", D14), r49.removeEventListener("touchend", pe9), F14.current = null;
  }), be8 = R2();
  return ie7.useEffect(() => {
    let r49 = b14.current;
    if (!r49) return () => M20();
    let l19 = t11(r49, "touchstart", W14, { passive: true });
    return () => {
      l19(), be8.cancel(), M20();
    };
  }, [M20, W14, b14, be8]), ie7.useEffect(() => {
    u37 && M20();
  }, [u37, M20]), J("div", t48, { state: fe7, ref: [n61, ye9, b14, Se8], props: [{ "data-base-ui-slider-control": oe10 ? "" : void 0, onPointerDown(r49) {
    let l19 = b14.current, d31 = f10(r49.nativeEvent);
    if (!l19 || u37 || r49.defaultPrevented || !h4(d31) || r49.button !== 0) return;
    let y24 = Xe8(r49, ae11);
    if (y24 != null) {
      q15(y24);
      let A17 = ce8(y24);
      if (A17 == null) return;
      u9(_19.current[A17.thumbIndex], a12(n13(l19))) ? r49.preventDefault() : be8.request(() => {
        J18(A17.thumbIndex);
      }), se12(true), g20.current != null || (U11(A17.value, u4(s4.trackPress, r49.nativeEvent, void 0, { activeThumbIndex: A17.thumbIndex })), ue7.current = Array.isArray(A17.value) ? A17.value : [A17.value], A17.didSwap && J18(A17.thumbIndex));
    }
    r49.nativeEvent.pointerId && l19.setPointerCapture(r49.nativeEvent.pointerId), ee7.current = 0;
    let E30 = n13(b14.current);
    E30.addEventListener("pointermove", D14, { passive: true }), E30.addEventListener("pointerup", pe9, { once: true });
  } }, a38], stateAttributesMapping: X9 });
});
var Et7 = Ct7.forwardRef(function(t48, n61) {
  let { render: s54, className: i38, style: c40, ...a38 } = t48, { state: u37 } = re7();
  return J("div", t48, { state: u37, ref: n61, props: [{ style: { position: "relative" } }, a38], stateAttributesMapping: X9 });
});
var Pt4 = function(e58) {
  return e58.index = "data-index", e58.dragging = "data-dragging", e58.orientation = "data-orientation", e58.disabled = "data-disabled", e58.valid = "data-valid", e58.invalid = "data-invalid", e58.touched = "data-touched", e58.dirty = "data-dirty", e58.focused = "data-focused", e58;
}({});
var Vt7 = '!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest("[data-base-ui-slider-control]");if(!e)return;const r=e.querySelector("[data-base-ui-slider-indicator]"),i=e.getBoundingClientRect(),n="vertical"===e.getAttribute("data-orientation")?"height":"width",o=e.querySelectorAll(\'input[type="range"]\'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute("value")??"");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute("max")??"100"),g=parseFloat(e.getAttribute("min")??"0"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty("--position",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty("visibility"),r&&(0===t?(a=v,r.style.setProperty("--start-position",`${v}%`),l||r.style.removeProperty("visibility")):t===s&&(u=v-(a??0),r.style.setProperty("--end-position",`${v}%`),r.style.setProperty("--relative-size",`${u}%`),r.style.removeProperty("visibility"))))}}();';
var Xr = /* @__PURE__ */ new Set([...Y2, w4, H3]);
function Jr(e58, t48, n61, s54) {
  if (!(t48 < 0)) return e58.length === 2 ? t48 === 0 ? `${e50(e58[t48], s54, n61)} start range` : `${e50(e58[t48], s54, n61)} end range` : n61 ? e50(e58[t48], s54, n61) : void 0;
}
function Me7(e58, t48, n61, s54, i38) {
  let c40 = n61 === 1 ? e58 + t48 : e58 - t48, a38 = Number(c40.toFixed(Math.max(we5(e58), we5(t48), we5(s54))));
  return t39(a38, s54, i38);
}
var Ot3 = ne10.forwardRef(function(t48, n61) {
  let { render: s54, children: i38, className: c40, "aria-describedby": a38, "aria-label": u37, "aria-labelledby": f35, disabled: P17 = false, getAriaLabel: m25, getAriaValueText: O14, id: S18, index: p31, inputRef: o62, onBlur: x21, onFocus: h24, onKeyDown: I26, tabIndex: g20, style: V12, ...F14 } = t48, { nonce: ye9 } = o53(), oe10 = r5(S18), { active: ve9, lastUsedThumbIndex: se12, controlRef: U11, disabled: fe7, validation: k17, formatOptionsRef: me7, handleInputChange: _19, inset: C18, labelId: j17, largeStep: H16, locale: $9, max: b14, min: w22, minStepsBetweenValues: Se8, form: ae11, name: ee7, orientation: le9, pressedInputRef: ue7, pressedThumbCenterOffsetRef: Ee7, pressedThumbIndexRef: ce8, renderBeforeHydration: q15, setActive: J18, setIndicatorPosition: D14, state: pe9, step: W14, values: M20 } = re7(), be8 = o4(), Le7 = P17 || fe7, r49 = M20.length > 1, l19 = le9 === "vertical", d31 = be8 === "rtl", { setTouched: y24, setFocused: E30, validationMode: A17 } = E14(), B17 = ne10.useRef(null), K14 = ne10.useRef(null), Q16 = ne10.useRef(false), Oe5 = r5(), he6 = F6(), ge10 = r49 ? Oe5 : he6, Ve7 = ne10.useMemo(() => ({ inputId: ge10 }), [ge10]), { ref: Fe5, index: Ne7 } = N2({ metadata: Ve7 }), R27 = r49 ? p31 ?? Ne7 : 0, Re8 = R27 === M20.length - 1, z17 = M20[R27], xe9 = n56(z17, w22, b14), [Ie7, De10] = ne10.useState(), Be6 = s53(), ke8 = se12 >= 0 && se12 < M20.length ? se12 : -1, Ce7 = E(() => {
    let v17 = U11.current, L20 = B17.current;
    if (!v17 || !L20) return;
    let Y18 = L20.getBoundingClientRect(), te7 = v17.getBoundingClientRect(), $e6 = l19 ? "height" : "width", $t2 = te7[$e6] - Y18[$e6], ut7 = (Y18[$e6] / 2 + $t2 * xe9 / 100) / te7[$e6] * 100, Qe7 = Number.isFinite(ut7) ? ut7 : void 0;
    De10(Qe7), R27 === 0 ? D14((Ze9) => [Qe7, Ze9[1]]) : Re8 && D14((Ze9) => [Ze9[0], Qe7]);
  });
  o2(() => {
    C18 && queueMicrotask(Ce7);
  }, [Ce7, C18]), o2(() => {
    C18 && Ce7();
  }, [Ce7, C18, xe9]), o2(() => {
    if (!C18) return;
    let v17 = U11.current, L20 = B17.current;
    if (!v17 || !L20) return;
    let Y18 = i10(v17).ResizeObserver;
    if (typeof Y18 != "function") return;
    let te7 = new Y18(Ce7);
    return te7.observe(v17), te7.observe(L20), () => {
      te7.disconnect();
    };
  }, [U11, Ce7, C18]);
  let _e7 = l19 ? "bottom" : "insetInlineStart", N20 = l19 ? "left" : "top", G18;
  r49 ? ve9 === R27 ? G18 = 2 : ke8 === R27 && (G18 = 1) : ve9 === R27 && (G18 = 1);
  let Z17;
  C18 ? Z17 = { "--position": `${Ie7 ?? 0}%`, visibility: q15 && Be6 || Ie7 === void 0 ? "hidden" : void 0, position: "absolute", [_e7]: "var(--position)", [N20]: "50%", translate: `${(l19 || !d31 ? -1 : 1) * 50}% ${(l19 ? 1 : -1) * 50}%`, zIndex: G18 } : Z17 = Number.isFinite(xe9) ? { position: "absolute", [_e7]: `${xe9}%`, [N20]: "50%", translate: `${(l19 || !d31 ? -1 : 1) * 50}% ${(l19 ? 1 : -1) * 50}%`, zIndex: G18 } : e8;
  let de8;
  le9 === "vertical" && (de8 = d31 ? "vertical-rl" : "vertical-lr");
  let Pe6 = typeof m25 == "function" ? m25(R27) : u37, Ae7 = d2({ "aria-label": Pe6, "aria-labelledby": f35 ?? (Pe6 == null ? j17 : void 0), "aria-describedby": a38, "aria-orientation": le9, "aria-valuenow": z17, "aria-valuetext": typeof O14 == "function" ? O14(e50(z17, $9, me7.current ?? void 0), z17, R27) : Jr(M20, R27, me7.current ?? void 0, $9), disabled: Le7, form: ae11, id: ge10, max: b14, min: w22, name: ee7, onChange(v17) {
    _19(v17.currentTarget.valueAsNumber, R27, v17);
  }, onFocus(v17) {
    let L20 = Q16.current;
    Q16.current = false, J18(R27), E30(true), L20 && v17.stopPropagation();
  }, onBlur(v17) {
    if (Q16.current) {
      v17.stopPropagation();
      return;
    }
    B17.current && (J18(-1), y24(true), E30(false), A17 === "onBlur" && k17.commit(We7(z17, R27, w22, b14, r49, M20)));
  }, onKeyDown(v17) {
    if (!Xr.has(v17.key)) return;
    Y2.has(v17.key) && v17.stopPropagation();
    let L20 = null, Y18 = Ke9(z17, W14, w22);
    switch (v17.key) {
      case h7:
        L20 = Me7(Y18, v17.shiftKey ? H16 : W14, 1, w22, b14);
        break;
      case L5:
        L20 = Me7(Y18, v17.shiftKey ? H16 : W14, d31 ? -1 : 1, w22, b14);
        break;
      case R6:
        L20 = Me7(Y18, v17.shiftKey ? H16 : W14, -1, w22, b14);
        break;
      case T3:
        L20 = Me7(Y18, v17.shiftKey ? H16 : W14, d31 ? 1 : -1, w22, b14);
        break;
      case w4:
        L20 = Me7(Y18, H16, 1, w22, b14);
        break;
      case H3:
        L20 = Me7(Y18, H16, -1, w22, b14);
        break;
      case d13:
        L20 = b14, r49 && (L20 = Number.isFinite(M20[R27 + 1]) ? M20[R27 + 1] - W14 * Se8 : b14);
        break;
      case n14:
        L20 = w22, r49 && (L20 = Number.isFinite(M20[R27 - 1]) ? M20[R27 - 1] + W14 * Se8 : w22);
        break;
      default:
        break;
    }
    if (L20 !== null) {
      let te7 = v17.currentTarget;
      y4(te7) || (Q16.current = true, te7.blur(), te7.focus({ preventScroll: true, focusVisible: true })), _19(L20, R27, v17), v17.preventDefault();
    }
  }, step: W14, style: { ...e8, width: "100%", height: "100%", writingMode: de8 }, tabIndex: g20 ?? void 0, type: "range", value: z17 ?? "" }, k17.getInputValidationProps), _t8 = d(K14, k17.inputRef, o62);
  return J("div", t48, { state: pe9, ref: [n61, Fe5, B17], props: [{ [Pt4.index]: R27, children: Yr2(ne10.Fragment, { children: [i38, Tt8("input", { ref: _t8, ...Ae7, suppressHydrationWarning: true }), C18 && Be6 && q15 && Re8 && Tt8("script", { nonce: ye9, dangerouslySetInnerHTML: { __html: Vt7 }, suppressHydrationWarning: true })] }), id: oe10, onBlur: x21, onFocus: h24, onPointerDown(v17) {
    if (ce8.current = R27, B17.current != null) {
      let L20 = le9 === "horizontal" ? "x" : "y", Y18 = qe3(B17.current), te7 = (le9 === "horizontal" ? v17.clientX : v17.clientY) - Y18[L20];
      Ee7.current = te7;
    }
    K14.current != null && ue7.current !== K14.current && (ue7.current = K14.current);
  }, style: Z17, suppressHydrationWarning: q15 || void 0 }, F14], stateAttributesMapping: X9 });
});
function en(e58, t48, n61, s54, i38, c40) {
  let a38 = n61 === void 0 || t48 && s54 === void 0 ? "hidden" : void 0, u37 = e58 ? "bottom" : "insetInlineStart", f35 = e58 ? "height" : "width", m25 = { visibility: i38 && c40 ? "hidden" : a38, position: e58 ? "absolute" : "relative", [e58 ? "width" : "height"]: "inherit" };
  return m25["--start-position"] = `${n61 ?? 0}%`, t48 ? (m25["--relative-size"] = `${(s54 ?? 0) - (n61 ?? 0)}%`, m25[u37] = "var(--start-position)", m25[f35] = "var(--relative-size)", m25) : (m25[u37] = 0, m25[f35] = "var(--start-position)", m25);
}
function tn2(e58, t48, n61, s54) {
  let i38 = e58 ? "bottom" : "insetInlineStart", c40 = e58 ? "height" : "width", u37 = { position: e58 ? "absolute" : "relative", [e58 ? "width" : "height"]: "inherit" };
  if (!t48) return u37[i38] = 0, u37[c40] = `${n61}%`, u37;
  let f35 = s54 - n61;
  return u37[i38] = `${n61}%`, u37[c40] = `${f35}%`, u37;
}
var Bt4 = Dt6.forwardRef(function(t48, n61) {
  let { render: s54, className: i38, style: c40, ...a38 } = t48, { indicatorPosition: u37, inset: f35, max: P17, min: m25, orientation: O14, renderBeforeHydration: S18, state: p31, values: o62 } = re7(), x21 = s53(), h24 = O14 === "vertical", I26 = o62.length > 1, g20 = f35 ? en(h24, I26, u37[0], u37[1], S18, x21) : tn2(h24, I26, n56(o62[0], m25, P17), n56(o62[o62.length - 1], m25, P17));
  return J("div", t48, { state: p31, ref: n61, props: [{ "data-base-ui-slider-indicator": S18 ? "" : void 0, style: g20, suppressHydrationWarning: S18 || void 0 }, a38], stateAttributesMapping: X9 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/switch.mjs
import * as a37 from "react";
import * as y21 from "react";
import { jsx as K11, jsxs as Me8 } from "react/jsx-runtime";
import * as _17 from "react";
var ce7 = Object.defineProperty;
var le8 = (e58, r49) => {
  for (var d31 in r49) ce7(e58, d31, { get: r49[d31], enumerable: true });
};
var L18 = {};
le8(L18, { Root: () => O11, Thumb: () => F13 });
var C16 = y21.createContext(void 0);
function M17() {
  let e58 = y21.useContext(C16);
  if (e58 === void 0) throw new Error(f2(63));
  return e58;
}
var k13 = function(e58) {
  return e58.checked = "data-checked", e58.unchecked = "data-unchecked", e58.disabled = "data-disabled", e58.readonly = "data-readonly", e58.required = "data-required", e58.valid = "data-valid", e58.invalid = "data-invalid", e58.touched = "data-touched", e58.dirty = "data-dirty", e58.filled = "data-filled", e58.focused = "data-focused", e58;
}({});
var R25 = { ...n25, checked(e58) {
  return e58 ? { [k13.checked]: "" } : { [k13.unchecked]: "" };
} };
var O11 = a37.forwardRef(function(r49, d31) {
  let { checked: v17, className: j17, defaultChecked: w22, "aria-labelledby": x21, form: f35, id: q15, inputRef: H16, name: D14, nativeButton: m25 = false, onCheckedChange: U11, readOnly: l19 = false, required: p31 = false, disabled: W14 = false, render: Oe5, uncheckedValue: E30, value: g20, style: _e7, ...J18 } = r49, { clearErrors: Y18 } = n26(), { state: S18, setTouched: z17, setDirty: G18, validityData: Q16, setFilled: b14, setFocused: N20, shouldValidateOnChange: X11, validationMode: Z17, disabled: $9, name: A17, validation: s54 } = E14(), { labelId: ee7 } = s28(), n61 = $9 || W14, u37 = A17 ?? D14, i38 = a37.useRef(null), te7 = d(i38, H16, s54.inputRef), h24 = a37.useRef(null), P17 = r5(), I26 = F6({ id: q15, implicit: false, controlRef: h24 }), B17 = m25 ? void 0 : I26, [o62, oe10] = m({ controlled: v17, default: !!w22, name: "Switch", state: "checked" });
  d21(h24, P17, o62), o2(() => {
    i38.current && b14(i38.current.checked);
  }, [i38, b14]), u16(o62, () => {
    Y18(u37), G18(o62 !== Q16.initialValue), b14(o62), X11() ? s54.commit(o62) : s54.commit(o62, true);
  });
  let { getButtonProps: re8, buttonRef: ne12 } = Q({ disabled: n61, native: m25 }), ie10 = y13(x21, ee7, i38, !m25, B17), ae11 = { id: m25 ? I26 : P17, role: "switch", "aria-checked": o62, "aria-readonly": l19 || void 0, "aria-required": p31 || void 0, "aria-labelledby": ie10, onFocus() {
    n61 || N20(true);
  }, onBlur() {
    let t48 = i38.current;
    !t48 || n61 || (z17(true), N20(false), Z17 === "onBlur" && s54.commit(t48.checked));
  }, onClick(t48) {
    if (l19 || n61) return;
    t48.preventDefault();
    let c40 = i38.current;
    c40 && c40.dispatchEvent(new (i10(c40)).PointerEvent("click", { bubbles: true, shiftKey: t48.shiftKey, ctrlKey: t48.ctrlKey, altKey: t48.altKey, metaKey: t48.metaKey }));
  } }, de8 = d2({ checked: o62, disabled: n61, form: f35, id: B17, name: u37, required: p31, style: u37 ? t13 : e8, tabIndex: -1, type: "checkbox", "aria-hidden": true, ref: te7, onChange(t48) {
    if (t48.nativeEvent.defaultPrevented) return;
    if (l19) {
      t48.preventDefault();
      return;
    }
    let c40 = t48.currentTarget.checked, T17 = u4(s4.none, t48.nativeEvent);
    U11?.(c40, T17), !T17.isCanceled && oe10(c40);
  }, onFocus() {
    h24.current?.focus();
  } }, s54.getInputValidationProps, g20 !== void 0 ? { value: g20 } : o7), V12 = a37.useMemo(() => ({ ...S18, checked: o62, disabled: n61, readOnly: l19, required: p31 }), [S18, o62, n61, l19, p31]), se12 = J("span", r49, { state: V12, ref: [d31, h24, ne12], props: [ae11, s54.getValidationProps, J18, re8], stateAttributesMapping: R25 });
  return Me8(C16.Provider, { value: V12, children: [se12, !o62 && u37 && E30 !== void 0 && K11("input", { type: "hidden", form: f35, name: u37, value: E30 }), K11("input", { ...de8, suppressHydrationWarning: true })] });
});
var F13 = _17.forwardRef(function(r49, d31) {
  let { render: v17, className: j17, style: w22, ...x21 } = r49, f35 = M17();
  return J("span", r49, { state: f35, ref: d31, stateAttributesMapping: R25, props: x21 });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/tabs.mjs
import * as b12 from "react";
import * as nt7 from "react";
import { jsx as pt4 } from "react/jsx-runtime";
import * as O12 from "react";
import * as it6 from "react";
import * as G15 from "react";
import { jsx as Xt7, jsxs as Gt4 } from "react/jsx-runtime";
import * as J16 from "react";
import * as N18 from "react";
import { jsx as St5 } from "react/jsx-runtime";
var Dt7 = Object.defineProperty;
var Pt5 = (t48, s54) => {
  for (var g20 in s54) Dt7(t48, g20, { get: s54[g20], enumerable: true });
};
var Nt3 = {};
Pt5(Nt3, { Indicator: () => Et8, List: () => Lt6, Panel: () => Mt5, Root: () => bt7, Tab: () => Tt9 });
var st5 = nt7.createContext(void 0);
function j14() {
  let t48 = nt7.useContext(st5);
  if (t48 === void 0) throw new Error(f2(64));
  return t48;
}
var ft7 = function(t48) {
  return t48.activationDirection = "data-activation-direction", t48.orientation = "data-orientation", t48;
}({});
var U9 = { tabActivationDirection: (t48) => ({ [ft7.activationDirection]: t48 }) };
var bt7 = b12.forwardRef(function(s54, g20) {
  let { className: H16, defaultValue: n61 = 0, onValueChange: E30, orientation: a38 = "horizontal", render: I26, value: S18, style: P17, ...C18 } = s54, B17 = s54.defaultValue !== void 0, w22 = b12.useRef([]), [p31, y24] = b12.useState(() => /* @__PURE__ */ new Map()), [e58, h24] = m({ controlled: S18, default: n61, name: "Tabs", state: "value" }), T17 = S18 !== void 0, [i38, l19] = b12.useState(() => /* @__PURE__ */ new Map()), m25 = b12.useCallback((o62) => {
    if (o62 === void 0) return null;
    for (let [d31, R27] of i38.entries()) if (R27 != null && o62 === (R27.value ?? R27.index)) return d31;
    return null;
  }, [i38]), [M20, v17] = b12.useState(() => ({ previousValue: e58, tabActivationDirection: "none" })), { previousValue: f35, tabActivationDirection: x21 } = M20, c40 = x21, L20 = false;
  f35 !== e58 && (c40 = mt6(f35, e58, a38, i38), L20 = f35 != null && e58 != null && m25(e58) == null);
  let r49 = L20 ? f35 : e58, D14 = f35 !== r49 || x21 !== c40;
  o2(() => {
    D14 && v17({ previousValue: r49, tabActivationDirection: c40 });
  }, [r49, D14, c40]);
  let Z17 = E((o62, d31) => {
    let R27 = mt6(e58, o62, a38, i38);
    d31.activationDirection = R27, E30?.(o62, d31), !d31.isCanceled && h24(o62);
  }), A17 = E((o62, d31) => {
    E30?.(o62, u4(d31, void 0, void 0, { activationDirection: "none" }));
  }), _19 = E((o62, d31) => {
    y24((R27) => {
      if (R27.get(o62) === d31) return R27;
      let F14 = new Map(R27);
      return F14.set(o62, d31), F14;
    });
  }), z17 = E((o62, d31) => {
    y24((R27) => {
      if (!R27.has(o62) || R27.get(o62) !== d31) return R27;
      let F14 = new Map(R27);
      return F14.delete(o62), F14;
    });
  }), $9 = b12.useCallback((o62) => p31.get(o62), [p31]), k17 = b12.useCallback((o62) => {
    for (let d31 of i38.values()) if (o62 === d31?.value) return d31?.id;
  }, [i38]), q15 = b12.useMemo(() => ({ getTabElementBySelectedValue: m25, getTabIdByPanelValue: k17, getTabPanelIdByValue: $9, onValueChange: Z17, orientation: a38, registerMountedTabPanel: _19, setTabMap: l19, unregisterMountedTabPanel: z17, tabActivationDirection: c40, value: e58 }), [m25, k17, $9, Z17, a38, _19, l19, z17, c40, e58]), V12 = b12.useMemo(() => {
    for (let o62 of i38.values()) if (o62 != null && o62.value === e58) return o62;
  }, [i38, e58]), X11 = b12.useMemo(() => {
    for (let o62 of i38.values()) if (o62 != null && !o62.disabled) return o62.value;
  }, [i38]), u37 = b12.useRef(!B17), W14 = b12.useRef(B17), Q16 = b12.useRef(false);
  o2(() => {
    if (T17) return;
    function o62(Y18, tt8) {
      h24(Y18), v17((at8) => at8.previousValue === Y18 && at8.tabActivationDirection === "none" ? at8 : { previousValue: Y18, tabActivationDirection: "none" }), A17(Y18, tt8), u37.current = false;
    }
    if (i38.size === 0) {
      if (!Q16.current || e58 === null) return;
      o62(null, s4.missing);
      return;
    }
    Q16.current = true;
    let d31 = V12?.disabled, R27 = V12 == null && e58 !== null;
    if (!d31 && e58 === n61 && (W14.current = false), W14.current && d31 && e58 === n61) return;
    let F14 = u37.current;
    if (d31 || R27) {
      let Y18 = X11 ?? null;
      if (e58 === Y18) {
        u37.current = false;
        return;
      }
      let tt8 = s4.missing;
      F14 ? tt8 = s4.initial : d31 && (tt8 = s4.disabled), o62(Y18, tt8);
      return;
    }
    F14 && V12 != null && (A17(e58, s4.initial), u37.current = false);
  }, [n61, X11, T17, A17, V12, h24, i38, e58]);
  let It7 = J("div", s54, { state: { orientation: a38, tabActivationDirection: c40 }, ref: g20, props: C18, stateAttributesMapping: U9 });
  return pt4(st5.Provider, { value: q15, children: pt4(k, { elementsRef: w22, children: It7 }) });
});
function mt6(t48, s54, g20, H16) {
  if (t48 == null || s54 == null) return "none";
  let n61 = null, E30 = null;
  for (let [S18, P17] of H16.entries()) {
    if (P17 == null) continue;
    let C18 = P17.value ?? P17.index;
    if (t48 === C18 && (n61 = S18), s54 === C18 && (E30 = S18), n61 != null && E30 != null) break;
  }
  if (n61 == null || E30 == null) return n61 !== E30 && (typeof t48 == "number" || typeof t48 == "string") && typeof t48 == typeof s54 ? g20 === "horizontal" ? s54 > t48 ? "right" : "left" : s54 > t48 ? "down" : "up" : "none";
  let a38 = n61.getBoundingClientRect(), I26 = E30.getBoundingClientRect();
  if (g20 === "horizontal") {
    if (I26.left < a38.left) return "left";
    if (I26.left > a38.left) return "right";
  } else {
    if (I26.top < a38.top) return "up";
    if (I26.top > a38.top) return "down";
  }
  return "none";
}
var ct5 = it6.createContext(void 0);
function rt7() {
  let t48 = it6.useContext(ct5);
  if (t48 === void 0) throw new Error(f2(65));
  return t48;
}
var Tt9 = O12.forwardRef(function(s54, g20) {
  let { className: H16, disabled: n61 = false, render: E30, value: a38, id: I26, nativeButton: S18 = true, style: P17, ...C18 } = s54, { value: B17, getTabPanelIdByValue: w22, orientation: p31 } = j14(), { activateOnFocus: y24, highlightedTabIndex: e58, onTabActivation: h24, registerTabResizeObserverElement: T17, setHighlightedTabIndex: i38, tabsListElement: l19 } = rt7(), m25 = r5(I26), M20 = O12.useMemo(() => ({ disabled: n61, id: m25, value: a38 }), [n61, m25, a38]), { compositeProps: v17, compositeRef: f35, index: x21 } = I18({ metadata: M20 }), c40 = a38 === B17, L20 = O12.useRef(false), r49 = O12.useRef(null);
  O12.useEffect(() => {
    let u37 = r49.current;
    if (u37) return T17(u37);
  }, [T17]), o2(() => {
    if (L20.current) {
      L20.current = false;
      return;
    }
    if (!(c40 && x21 > -1 && e58 !== x21)) return;
    let u37 = l19;
    if (u37 != null) {
      let W14 = a12(n13(u37));
      if (W14 && u9(u37, W14)) return;
    }
    n61 || i38(x21);
  }, [c40, x21, e58, i38, n61, l19]);
  let { getButtonProps: D14, buttonRef: Z17 } = Q({ disabled: n61, native: S18, focusableWhenDisabled: true }), A17 = w22(a38), _19 = O12.useRef(false), z17 = O12.useRef(false);
  function $9(u37) {
    c40 || n61 || h24(a38, u4(s4.none, u37.nativeEvent, void 0, { activationDirection: "none" }));
  }
  function k17(u37) {
    c40 || (x21 > -1 && !n61 && i38(x21), !n61 && y24 && (!_19.current || _19.current && z17.current) && h24(a38, u4(s4.none, u37.nativeEvent, void 0, { activationDirection: "none" })));
  }
  function q15(u37) {
    if (c40 || n61) return;
    _19.current = true;
    function W14() {
      _19.current = false, z17.current = false;
    }
    (!u37.button || u37.button === 0) && (z17.current = true, n13(u37.currentTarget).addEventListener("pointerup", W14, { once: true }));
  }
  return J("button", s54, { state: { disabled: n61, active: c40, orientation: p31 }, ref: [g20, Z17, f35, r49], props: [v17, { role: "tab", "aria-controls": A17, "aria-selected": c40, id: m25, onClick: $9, onFocus: k17, onPointerDown: q15, [t41]: c40 ? "" : void 0, onKeyDownCapture() {
    L20.current = true;
  } }, C18, D14] });
});
var vt5 = '!function(){const t=document.currentScript.previousElementSibling;if(!t)return;const e=t.closest(\'[role="tablist"]\');if(!e)return;const i=e.querySelector("[data-active]");if(!i)return;if(0===i.offsetWidth||0===e.offsetWidth)return;let o=0,n=0,h=0,l=0,r=0,f=0;function s(t){const e=getComputedStyle(t);let i=parseFloat(e.width)||0,o=parseFloat(e.height)||0;return(Math.round(i)!==t.offsetWidth||Math.round(o)!==t.offsetHeight)&&(i=t.offsetWidth,o=t.offsetHeight),{width:i,height:o}}if(null!=i&&null!=e){const{width:t,height:c}=s(i),{width:u,height:d}=s(e),a=i.getBoundingClientRect(),g=e.getBoundingClientRect(),p=u>0?g.width/u:1,b=d>0?g.height/d:1;if(Math.abs(p)>Number.EPSILON&&Math.abs(b)>Number.EPSILON){const t=a.left-g.left,i=a.top-g.top;o=t/p+e.scrollLeft-e.clientLeft,h=i/b+e.scrollTop-e.clientTop}else o=i.offsetLeft,h=i.offsetTop;r=t,f=c,n=e.scrollWidth-o-r,l=e.scrollHeight-h-f}function c(e,i){t.style.setProperty(`--active-tab-${e}`,`${i}px`)}c("left",o),c("right",n),c("top",h),c("bottom",l),c("width",r),c("height",f),r>0&&f>0&&t.removeAttribute("hidden")}();';
var K12 = function(t48) {
  return t48.activeTabLeft = "--active-tab-left", t48.activeTabRight = "--active-tab-right", t48.activeTabTop = "--active-tab-top", t48.activeTabBottom = "--active-tab-bottom", t48.activeTabWidth = "--active-tab-width", t48.activeTabHeight = "--active-tab-height", t48;
}({});
var Jt6 = { ...U9, activeTabPosition: () => null, activeTabSize: () => null };
var Et8 = G15.forwardRef(function(s54, g20) {
  let { className: H16, render: n61, renderBeforeHydration: E30 = false, style: a38, ...I26 } = s54, { nonce: S18 } = o53(), { getTabElementBySelectedValue: P17, orientation: C18, tabActivationDirection: B17, value: w22 } = j14(), { tabsListElement: p31, registerIndicatorUpdateListener: y24 } = rt7(), e58 = s53(), h24 = a30();
  G15.useEffect(() => y24(h24), [y24, h24]);
  let T17 = 0, i38 = 0, l19 = 0, m25 = 0, M20 = 0, v17 = 0, f35 = false;
  if (w22 != null && p31 != null) {
    let A17 = P17(w22);
    if (f35 = true, A17 != null) {
      let { width: _19, height: z17 } = g17(A17), { width: $9, height: k17 } = g17(p31), q15 = A17.getBoundingClientRect(), V12 = p31.getBoundingClientRect(), X11 = $9 > 0 ? V12.width / $9 : 1, u37 = k17 > 0 ? V12.height / k17 : 1;
      if (Math.abs(X11) > Number.EPSILON && Math.abs(u37) > Number.EPSILON) {
        let Q16 = q15.left - V12.left, lt8 = q15.top - V12.top;
        T17 = Q16 / X11 + p31.scrollLeft - p31.clientLeft, l19 = lt8 / u37 + p31.scrollTop - p31.clientTop;
      } else T17 = A17.offsetLeft, l19 = A17.offsetTop;
      M20 = _19, v17 = z17, i38 = p31.scrollWidth - T17 - M20, m25 = p31.scrollHeight - l19 - v17;
    }
  }
  let x21 = f35 ? { left: T17, right: i38, top: l19, bottom: m25 } : null, c40 = f35 ? { width: M20, height: v17 } : null, L20 = f35 ? { [K12.activeTabLeft]: `${T17}px`, [K12.activeTabRight]: `${i38}px`, [K12.activeTabTop]: `${l19}px`, [K12.activeTabBottom]: `${m25}px`, [K12.activeTabWidth]: `${M20}px`, [K12.activeTabHeight]: `${v17}px` } : void 0, r49 = f35 && M20 > 0 && v17 > 0, Z17 = J("span", s54, { state: { orientation: C18, activeTabPosition: x21, activeTabSize: c40, tabActivationDirection: B17 }, ref: g20, props: [{ role: "presentation", style: L20, hidden: !r49 }, I26, { suppressHydrationWarning: true }], stateAttributesMapping: Jt6 });
  return w22 == null ? null : Gt4(G15.Fragment, { children: [Z17, e58 && E30 && Xt7("script", { nonce: S18, dangerouslySetInnerHTML: { __html: vt5 }, suppressHydrationWarning: true })] });
});
var yt8 = function(t48) {
  return t48.index = "data-index", t48.activationDirection = "data-activation-direction", t48.orientation = "data-orientation", t48.hidden = "data-hidden", t48[t48.startingStyle = n8.startingStyle] = "startingStyle", t48[t48.endingStyle = n8.endingStyle] = "endingStyle", t48;
}({});
var se10 = { ...U9, ...i7 };
var Mt5 = J16.forwardRef(function(s54, g20) {
  let { className: H16, value: n61, render: E30, keepMounted: a38 = false, style: I26, ...S18 } = s54, { value: P17, getTabIdByPanelValue: C18, orientation: B17, tabActivationDirection: w22, registerMountedTabPanel: p31, unregisterMountedTabPanel: y24 } = j14(), e58 = r5(), h24 = J16.useMemo(() => ({ id: e58, value: n61 }), [e58, n61]), { ref: T17, index: i38 } = N2({ metadata: h24 }), l19 = n61 === P17, { mounted: m25, transitionStatus: M20, setMounted: v17 } = g2(l19), f35 = !m25, x21 = C18(n61), c40 = { hidden: f35, orientation: B17, tabActivationDirection: w22, transitionStatus: M20 }, L20 = J16.useRef(null), r49 = J("div", s54, { state: c40, ref: [g20, T17, L20], props: [{ "aria-labelledby": x21, hidden: f35, id: e58, role: "tabpanel", tabIndex: l19 ? 0 : -1, inert: s22(!l19), [yt8.index]: i38 }, S18], stateAttributesMapping: se10 });
  return p10({ open: l19, ref: L20, onComplete() {
    l19 || v17(false);
  } }), o2(() => {
    if (!(f35 && !a38) && e58 != null) return p31(n61, e58), () => {
      y24(n61, e58);
    };
  }, [f35, a38, n61, e58, p31, y24]), a38 || m25 ? r49 : null;
});
var Lt6 = N18.forwardRef(function(s54, g20) {
  let { activateOnFocus: H16 = false, className: n61, loopFocus: E30 = true, render: a38, style: I26, ...S18 } = s54, { onValueChange: P17, orientation: C18, value: B17, setTabMap: w22, tabActivationDirection: p31 } = j14(), [y24, e58] = N18.useState(0), [h24, T17] = N18.useState(null), i38 = N18.useRef(/* @__PURE__ */ new Set()), l19 = N18.useRef(/* @__PURE__ */ new Set()), m25 = N18.useRef(null);
  N18.useEffect(() => {
    if (typeof ResizeObserver > "u") return;
    let r49 = new ResizeObserver(() => {
      i38.current.forEach((D14) => {
        D14();
      });
    });
    return m25.current = r49, h24 && r49.observe(h24), l19.current.forEach((D14) => {
      r49.observe(D14);
    }), () => {
      r49.disconnect(), m25.current = null;
    };
  }, [h24]);
  let M20 = E((r49) => (i38.current.add(r49), () => {
    i38.current.delete(r49);
  })), v17 = E((r49) => (l19.current.add(r49), m25.current?.observe(r49), () => {
    l19.current.delete(r49), m25.current?.unobserve(r49);
  })), f35 = E((r49, D14) => {
    r49 !== B17 && P17(r49, D14);
  }), x21 = { orientation: C18, tabActivationDirection: p31 }, c40 = { "aria-orientation": C18 === "vertical" ? "vertical" : void 0, role: "tablist" }, L20 = N18.useMemo(() => ({ activateOnFocus: H16, highlightedTabIndex: y24, registerIndicatorUpdateListener: M20, registerTabResizeObserverElement: v17, onTabActivation: f35, setHighlightedTabIndex: e58, tabsListElement: h24 }), [H16, y24, M20, v17, f35, e58, h24]);
  return St5(ct5.Provider, { value: L20, children: St5(X5, { render: a38, className: n61, style: I26, state: x21, refs: [g20, T17], props: [c40, S18], stateAttributesMapping: U9, highlightedIndex: y24, enableHomeAndEndKeys: true, loopFocus: E30, orientation: C18, onHighlightedIndexChange: e58, onMapChange: w22, disabledIndices: t5 }) });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/toast.mjs
import * as Ue9 from "react";
import * as he4 from "react";

// http-url:https://esm.sh/@base-ui/utils@0.2.9/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/generateId.mjs
var t46 = 0;
function n59(e58) {
  return t46 += 1, `${e58}-${Math.random().toString(36).slice(2, 6)}-${t46}`;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/toast.mjs
import { jsx as Ut4 } from "react/jsx-runtime";
import * as y22 from "react";
import { jsx as Z15, jsxs as ke6 } from "react/jsx-runtime";
import * as R26 from "react";
import * as tt7 from "react-dom";
import * as Ee5 from "react";
import { jsx as no4 } from "react/jsx-runtime";
import * as ye7 from "react";
import * as nt8 from "react";
import * as it7 from "react";
import * as Pe5 from "react";
import * as ut6 from "react";
import * as ee6 from "react";
import * as Se6 from "react";
import { jsx as No4 } from "react/jsx-runtime";
import * as pt5 from "react";
import * as be6 from "react";
var Ft4 = Object.defineProperty;
var _t7 = (t48, e58) => {
  for (var o62 in e58) Ft4(t48, o62, { get: e58[o62], enumerable: true });
};
var xt4 = {};
_t7(xt4, { Action: () => dt6, Arrow: () => ht6, Close: () => ct6, Content: () => st6, Description: () => rt8, Portal: () => lt6, Positioner: () => mt7, Provider: () => je7, Root: () => ot4, Title: () => at7, Viewport: () => Xe9, createToastManager: () => gt5, useToastManager: () => Tt10 });
var ne11 = he4.createContext(void 0);
function W13() {
  let t48 = he4.useContext(ne11);
  if (!t48) throw new Error(f2(73));
  return t48;
}
function Te5(t48, e58) {
  if (typeof t48 == "string") return { description: t48 };
  if (typeof t48 == "function") {
    let o62 = t48(e58);
    return typeof o62 == "string" ? { description: o62 } : o62;
  }
  return t48;
}
function _e5(t48) {
  let e58 = /* @__PURE__ */ new Map(), o62 = 0, s54 = 0;
  return t48.forEach((c40, d31) => {
    let n61 = c40.transitionStatus === "ending";
    e58.set(c40.id, { value: c40, domIndex: d31, visibleIndex: n61 ? -1 : o62, offsetY: s54 }), s54 += c40.height || 0, n61 || (o62 += 1);
  }), e58;
}
var ge8 = (t48) => t48.toastMetadata;
var V10 = { toasts: ut2((t48) => t48.toasts), isEmpty: ut2((t48) => t48.toasts.length === 0), toast: ut2(ge8, (t48, e58) => t48.get(e58)?.value), toastIndex: ut2(ge8, (t48, e58) => t48.get(e58)?.domIndex ?? -1), toastOffsetY: ut2(ge8, (t48, e58) => t48.get(e58)?.offsetY ?? 0), toastVisibleIndex: ut2(ge8, (t48, e58) => t48.get(e58)?.visibleIndex ?? -1), hovering: ut2((t48) => t48.hovering), focused: ut2((t48) => t48.focused), expanded: ut2((t48) => t48.hovering || t48.focused), expandedOrOutOfFocus: ut2((t48) => t48.hovering || t48.focused || !t48.isWindowFocused), prevFocusElement: ut2((t48) => t48.prevFocusElement) };
var xe8 = class extends oe3 {
  timers = /* @__PURE__ */ new Map();
  areTimersPaused = false;
  constructor(e58) {
    super({ ...e58, toastMetadata: _e5(e58.toasts) }, {}, V10);
  }
  setFocused(e58) {
    this.set("focused", e58);
  }
  setHovering(e58) {
    this.set("hovering", e58);
  }
  setIsWindowFocused(e58) {
    this.set("isWindowFocused", e58);
  }
  setPrevFocusElement(e58) {
    this.set("prevFocusElement", e58);
  }
  setViewport = (e58) => {
    this.set("viewport", e58);
  };
  disposeEffect = () => () => {
    this.timers.forEach((e58) => {
      e58.timeout?.clear();
    }), this.timers.clear();
  };
  removeToast(e58, o62 = {}) {
    let s54 = V10.toastIndex(this.state, e58);
    if (s54 === -1) return;
    let c40 = this.state.toasts[s54];
    o62.skipOnRemove || c40?.onRemove?.();
    let d31 = [...this.state.toasts];
    d31.splice(s54, 1), this.setToasts(d31);
  }
  addToast = (e58) => {
    let { timeout: o62, limit: s54 } = this.state, c40 = e58.id || n59("toast");
    if (e58.id) {
      let a38 = V10.toast(this.state, e58.id);
      if (a38) if (a38.transitionStatus === "ending") this.removeToast(e58.id, { skipOnRemove: true });
      else {
        let { id: r49, transitionStatus: m25, ...u37 } = e58;
        return this.updateToastInternal(e58.id, u37, { resetTimer: true, markUpdated: true }), e58.id;
      }
    }
    let d31 = { ...e58, id: c40, updateKey: 0, transitionStatus: "starting" }, n61 = [d31, ...this.state.toasts], p31 = n61.filter((a38) => a38.transitionStatus !== "ending");
    if (p31.length > s54) {
      let a38 = p31.length - s54, r49 = p31.slice(-a38), m25 = new Set(r49.map((u37) => u37.id));
      this.setToasts(n61.map((u37) => {
        let h24 = m25.has(u37.id);
        return u37.limited !== h24 ? { ...u37, limited: h24 } : u37;
      }));
    } else this.setToasts(n61.map((a38) => a38.limited ? { ...a38, limited: false } : a38));
    let i38 = d31.timeout ?? o62;
    return d31.type !== "loading" && i38 > 0 && this.scheduleTimer(c40, i38, () => this.closeToast(c40)), V10.expandedOrOutOfFocus(this.state) && this.pauseTimers(), c40;
  };
  updateToast = (e58, o62) => {
    this.updateToastInternal(e58, o62, { markUpdated: true });
  };
  updateToastInternal = (e58, o62, s54 = {}) => {
    let { timeout: c40, toasts: d31 } = this.state, n61 = V10.toast(this.state, e58) ?? null;
    if (!n61 || n61.transitionStatus === "ending") return;
    let p31 = { ...n61, ...o62, ...s54.markUpdated && { updateKey: (n61.updateKey ?? 0) + 1 } };
    this.setToasts(d31.map((g20) => g20.id === e58 ? p31 : g20));
    let i38 = p31.timeout ?? c40, a38 = n61?.timeout ?? c40, r49 = Object.hasOwn(o62, "timeout"), m25 = p31.transitionStatus !== "ending" && p31.type !== "loading" && i38 > 0, u37 = this.timers.has(e58), h24 = a38 !== i38, x21 = n61?.type === "loading";
    if (!m25 && u37) {
      this.timers.get(e58)?.timeout?.clear(), this.timers.delete(e58);
      return;
    }
    if (m25 && (!u37 || h24 || r49 || x21 || s54.resetTimer)) {
      let g20 = this.timers.get(e58);
      g20 && (g20.timeout?.clear(), this.timers.delete(e58)), this.scheduleTimer(e58, i38, () => this.closeToast(e58)), V10.expandedOrOutOfFocus(this.state) && this.pauseTimers();
    }
  };
  closeToast = (e58) => {
    let o62 = e58 === void 0, { limit: s54, toasts: c40 } = this.state, d31;
    if (o62) d31 = c40, this.timers.forEach((a38) => {
      a38.timeout?.clear();
    }), this.timers.clear();
    else {
      let a38 = V10.toast(this.state, e58);
      if (!a38) return;
      d31 = [a38];
      let r49 = this.timers.get(e58);
      r49?.timeout && (r49.timeout.clear(), this.timers.delete(e58));
    }
    let n61 = 0, p31 = c40.map((a38) => {
      if (o62 || a38.id === e58) return { ...a38, transitionStatus: "ending", height: 0 };
      if (a38.transitionStatus === "ending") return a38;
      let r49 = n61 >= s54;
      return n61 += 1, a38.limited !== r49 ? { ...a38, limited: r49 } : a38;
    }), i38 = { toasts: p31, toastMetadata: _e5(p31) };
    (o62 || c40.length === 1) && (i38.hovering = false, i38.focused = false), this.update(i38), d31.forEach((a38) => {
      a38.transitionStatus !== "ending" && a38.onClose?.();
    }), this.handleFocusManagement(e58);
  };
  promiseToast = (e58, o62) => {
    let s54 = Te5(o62.loading), c40 = this.addToast({ ...s54, type: "loading" }), d31 = e58.then((n61) => {
      let p31 = Te5(o62.success, n61);
      return this.updateToast(c40, { ...p31, type: "success", timeout: p31.timeout }), n61;
    }).catch((n61) => {
      let p31 = Te5(o62.error, n61);
      return this.updateToast(c40, { ...p31, type: "error", timeout: p31.timeout }), Promise.reject(n61);
    });
    return {}.hasOwnProperty.call(o62, "setPromise") && o62.setPromise(d31), d31;
  };
  pauseTimers() {
    this.areTimersPaused || (this.areTimersPaused = true, this.timers.forEach((e58) => {
      if (e58.timeout) {
        e58.timeout.clear();
        let o62 = Date.now() - e58.start, s54 = e58.delay - o62;
        e58.remaining = s54 > 0 ? s54 : 0;
      }
    }));
  }
  resumeTimers() {
    this.areTimersPaused && (this.areTimersPaused = false, this.timers.forEach((e58, o62) => {
      e58.remaining = e58.remaining > 0 ? e58.remaining : e58.delay, e58.timeout ??= n17.create(), e58.timeout.start(e58.remaining, () => {
        this.timers.delete(o62), e58.callback();
      }), e58.start = Date.now();
    }));
  }
  restoreFocusToPrevElement() {
    this.state.prevFocusElement?.focus({ preventScroll: true });
  }
  handleDocumentPointerDown = (e58) => {
    if (e58.pointerType !== "touch") return;
    let o62 = f10(e58);
    u9(this.state.viewport, o62) || (this.resumeTimers(), this.update({ hovering: false, focused: false }));
  };
  scheduleTimer(e58, o62, s54) {
    let c40 = Date.now(), d31 = !V10.expandedOrOutOfFocus(this.state), n61 = d31 ? n17.create() : void 0;
    n61?.start(o62, () => {
      this.timers.delete(e58), s54();
    }), this.timers.set(e58, { timeout: n61, start: d31 ? c40 : 0, delay: o62, remaining: o62, callback: s54 });
  }
  setToasts(e58) {
    let o62 = { toasts: e58, toastMetadata: _e5(e58) };
    e58.length === 0 && (o62.hovering = false, o62.focused = false), this.update(o62);
  }
  handleFocusManagement(e58) {
    let o62 = a12(n13(this.state.viewport));
    if (!this.state.viewport || !u9(this.state.viewport, o62) || !y4(o62)) return;
    if (e58 === void 0) {
      this.restoreFocusToPrevElement();
      return;
    }
    let s54 = V10.toasts(this.state), c40 = V10.toastIndex(this.state, e58), d31 = null, n61 = c40 + 1;
    for (; n61 < s54.length; ) {
      if (s54[n61].transitionStatus !== "ending") {
        d31 = s54[n61];
        break;
      }
      n61 += 1;
    }
    if (!d31) for (n61 = c40 - 1; n61 >= 0; ) {
      if (s54[n61].transitionStatus !== "ending") {
        d31 = s54[n61];
        break;
      }
      n61 -= 1;
    }
    d31 ? d31.ref?.current?.focus() : this.restoreFocusToPrevElement();
  }
};
var je7 = function(e58) {
  let { children: o62, timeout: s54 = 5e3, limit: c40 = 3, toastManager: d31 } = e58, n61 = u2(() => new xe8({ timeout: s54, limit: c40, viewport: null, toasts: [], hovering: false, focused: false, isWindowFocused: true, prevFocusElement: null })).current;
  return n19(n61.disposeEffect), Ue9.useEffect(function() {
    return d31 ? d31[" subscribe"](({ action: a38, options: r49 }) => {
      let m25 = r49.id;
      a38 === "promise" && r49.promise ? n61.promiseToast(r49.promise, r49) : a38 === "update" && m25 ? n61.updateToast(m25, r49) : a38 === "close" ? n61.closeToast(m25) : n61.addToast(r49);
    }) : void 0;
  }, [n61, d31]), n61.useSyncedValues({ timeout: s54, limit: c40 }), Ut4(ne11.Provider, { value: n61, children: o62 });
};
var $e5 = function(t48) {
  return t48.frontmostHeight = "--toast-frontmost-height", t48;
}({});
var Xe9 = y22.forwardRef(function(e58, o62) {
  let { render: s54, className: c40, style: d31, children: n61, ...p31 } = e58, i38 = W13(), a38 = p12(), r49 = y22.useRef(false), m25 = y22.useRef(false), u37 = y22.useRef(false), h24 = i38.useState("isEmpty"), x21 = i38.useState("toasts"), g20 = i38.useState("focused"), I26 = i38.useState("expanded"), B17 = i38.useState("prevFocusElement"), Y18 = x21[0]?.height ?? 0, X11 = y22.useMemo(() => x21.some((l19) => l19.transitionStatus === "ending"), [x21]), z17 = y22.useMemo(() => x21.filter((l19) => l19.priority === "high"), [x21]);
  y22.useEffect(() => {
    let l19 = i38.state.viewport;
    if (!l19) return;
    function w22(A17) {
      h24 || A17.key === "F6" && f10(A17) !== l19 && (A17.preventDefault(), i38.setPrevFocusElement(a12(n13(l19))), l19?.focus({ preventScroll: true }), i38.pauseTimers(), i38.setFocused(true));
    }
    let K14 = i10(l19);
    return t11(K14, "keydown", w22);
  }, [i38, h24]), y22.useEffect(() => {
    let l19 = i38.state.viewport;
    if (!l19 || h24) return;
    let w22 = i10(l19);
    function K14(S18) {
      f10(S18) === w22 && (i38.setIsWindowFocused(false), i38.pauseTimers());
    }
    function A17(S18) {
      if (S18.relatedTarget) return;
      let Q16 = f10(S18), ae11 = a12(n13(l19));
      (Q16 === w22 || !u9(l19, Q16) || !y4(ae11)) && i38.resumeTimers(), a38.start(0, () => i38.setIsWindowFocused(true));
    }
    return r14(t11(w22, "blur", K14, true), t11(w22, "focus", A17, true));
  }, [i38, a38, h24]), y22.useEffect(() => {
    let l19 = i38.state.viewport;
    if (!l19 || h24) return;
    let w22 = n13(l19);
    return t11(w22, "pointerdown", i38.handleDocumentPointerDown, true);
  }, [h24, i38]);
  function N20(l19) {
    let w22 = i38.state.viewport;
    w22 && (r49.current = true, l19.relatedTarget === w22 ? x21[0]?.ref?.current?.focus() : i38.restoreFocusToPrevElement());
  }
  function te7(l19) {
    l19.key === "Tab" && l19.shiftKey && f10(l19.nativeEvent) === i38.state.viewport && (l19.preventDefault(), i38.restoreFocusToPrevElement(), i38.resumeTimers());
  }
  function _19() {
    let l19 = i38.state.toasts.some((w22) => w22.transitionStatus === "ending");
    !i38.state.isWindowFocused || l19 || u37.current || !m25.current || (i38.resumeTimers(), i38.setHovering(false), m25.current = false);
  }
  y22.useEffect(_19, [X11, i38]);
  function q15() {
    i38.pauseTimers(), i38.setHovering(true), m25.current = false;
  }
  function j17() {
    X11 || u37.current ? m25.current = true : (i38.resumeTimers(), i38.setHovering(false));
  }
  function oe10(l19) {
    l19.pointerType === "touch" && (u37.current = true);
  }
  function H16(l19) {
    l19.pointerType === "touch" && (u37.current = false, _19());
  }
  function J18() {
    if (r49.current) {
      r49.current = false;
      return;
    }
    g20 || y4(a12(n13(i38.state.viewport))) && (i38.setFocused(true), i38.pauseTimers());
  }
  function P17(l19) {
    !g20 || u9(i38.state.viewport, l19.relatedTarget) || (i38.setFocused(false), i38.resumeTimers());
  }
  let $9 = { tabIndex: -1, role: "region", "aria-live": "polite", "aria-atomic": false, "aria-relevant": "additions text", "aria-label": "Notifications", onMouseEnter: q15, onMouseMove: q15, onMouseLeave: j17, onFocus: J18, onBlur: P17, onKeyDown: te7, onClick: J18, onPointerDown: oe10, onPointerUp: H16, onPointerCancel: H16 }, D14 = { expanded: I26 }, G18 = J("div", e58, { ref: [o62, i38.setViewport], state: D14, props: [$9, { style: { [$e5.frontmostHeight]: Y18 ? `${Y18}px` : void 0 } }, p31, { children: ke6(y22.Fragment, { children: [!h24 && B17 && Z15(R8, { onFocus: N20 }), n61, !h24 && B17 && Z15(R8, { onFocus: N20 })] }) }] });
  return ke6(y22.Fragment, { children: [!h24 && B17 && Z15(R8, { onFocus: N20 }), G18, !g20 && z17.length > 0 && Z15("div", { style: e8, children: z17.map((l19) => ke6("div", { role: "alert", "aria-atomic": true, children: [Z15("div", { children: l19.title }), Z15("div", { children: l19.description })] }, l19.id)) })] });
});
var Le5 = Ee5.createContext(void 0);
function k14() {
  let t48 = Ee5.useContext(Le5);
  if (!t48) throw new Error(f2(66));
  return t48;
}
var L19 = function(t48) {
  return t48.index = "--toast-index", t48.offsetY = "--toast-offset-y", t48.height = "--toast-height", t48.swipeMovementX = "--toast-swipe-movement-x", t48.swipeMovementY = "--toast-swipe-movement-y", t48;
}({});
var ro4 = { ...i7, swipeDirection(t48) {
  return t48 ? { "data-swipe-direction": t48 } : null;
} };
var ie8 = 40;
var io = 10;
var U10 = 0.5;
var ao2 = 1;
var co2 = `${n18},${s15}`;
var ot4 = R26.forwardRef(function(e58, o62) {
  let { toast: s54, render: c40, className: d31, swipeDirection: n61 = ["down", "right"], style: p31, ...i38 } = e58, a38 = s54.positionerProps?.anchor !== void 0, r49 = [];
  a38 || (r49 = Array.isArray(n61) ? n61 : [n61]);
  let m25 = r49.length > 0, u37 = W13(), [h24, x21] = R26.useState(void 0), [g20, I26] = R26.useState(false), [B17, Y18] = R26.useState(false), [X11, z17] = R26.useState(false), [N20, te7] = R26.useState({ x: 0, y: 0 }), [_19, q15] = R26.useState({ x: 0, y: 0, scale: 1 }), [j17, oe10] = R26.useState(), [H16, J18] = R26.useState(), [P17, $9] = R26.useState(null), D14 = R26.useRef(null), G18 = R26.useRef({ x: 0, y: 0 }), l19 = R26.useRef({ x: 0, y: 0, scale: 1 }), w22 = R26.useRef(void 0), K14 = R26.useRef(0), A17 = R26.useRef(false), S18 = R26.useRef({ x: 0, y: 0 }), Q16 = R26.useRef(false), ae11 = R26.useRef({ x: 0, y: 0 }), ce8 = R26.useRef(null), se12 = R26.useRef(null), De10 = u37.useState("toastIndex", s54.id), Oe5 = u37.useState("toastVisibleIndex", s54.id), Rt8 = u37.useState("toastOffsetY", s54.id), vt6 = u37.useState("focused"), Ce7 = u37.useState("expanded");
  p10({ open: s54.transitionStatus !== "ending", ref: D14, onComplete() {
    s54.transitionStatus === "ending" && u37.removeToast(s54.id);
  } });
  let ue7 = E((f35 = false) => {
    let T17 = D14.current;
    if (!T17) return;
    let v17 = T17.style.height;
    T17.style.height = "auto";
    let b14 = T17.offsetHeight;
    T17.style.height = v17;
    function E30() {
      u37.updateToastInternal(s54.id, { ref: D14, height: b14, ...s54.transitionStatus === "starting" ? { transitionStatus: void 0 } : {} });
    }
    f35 ? tt7.flushSync(E30) : E30();
  });
  o2(ue7, [ue7]);
  function de8(f35) {
    ae11.current = f35, te7(f35);
  }
  o2(() => () => {
    se12.current?.abort();
  }, []);
  function wt8(f35, T17) {
    let v17 = f35, b14 = T17;
    return !r49.includes("left") && !r49.includes("right") ? v17 = f35 > 0 ? f35 ** U10 : -(Math.abs(f35) ** U10) : (!r49.includes("right") && f35 > 0 && (v17 = f35 ** U10), !r49.includes("left") && f35 < 0 && (v17 = -(Math.abs(f35) ** U10))), !r49.includes("up") && !r49.includes("down") ? b14 = T17 > 0 ? T17 ** U10 : -(Math.abs(T17) ** U10) : (!r49.includes("down") && T17 > 0 && (b14 = T17 ** U10), !r49.includes("up") && T17 < 0 && (b14 = -(Math.abs(T17) ** U10))), { x: v17, y: b14 };
  }
  let le9 = E((f35) => {
    if (f35.pointerId !== ce8.current) return;
    ce8.current = null, se12.current?.abort(), se12.current = null, I26(false), Y18(false), $9(null);
    let T17 = l19.current;
    if (f35.type === "pointercancel" || A17.current) {
      de8({ x: T17.x, y: T17.y }), x21(void 0);
      return;
    }
    let v17 = false, b14 = ae11.current, E30 = b14.x - T17.x, O14 = b14.y - T17.y, C18;
    for (let Ie7 of r49) {
      switch (Ie7) {
        case "right":
          E30 > ie8 && (v17 = true, C18 = "right");
          break;
        case "left":
          E30 < -ie8 && (v17 = true, C18 = "left");
          break;
        case "down":
          O14 > ie8 && (v17 = true, C18 = "down");
          break;
        case "up":
          O14 < -ie8 && (v17 = true, C18 = "up");
          break;
        default:
          break;
      }
      if (v17) break;
    }
    v17 ? (x21(C18), z17(true), u37.closeToast(s54.id)) : (de8({ x: T17.x, y: T17.y }), x21(void 0));
  });
  function Et9(f35) {
    if (f35.button !== 0) return;
    f35.pointerType === "touch" && u37.pauseTimers();
    let T17 = f10(f35.nativeEvent);
    if (T17 ? T17.closest(`button,a,input,textarea,[role="button"],${co2}`) : false) return;
    if (A17.current = false, w22.current = void 0, K14.current = 0, ce8.current = f35.pointerId, G18.current = { x: f35.clientX, y: f35.clientY }, S18.current = G18.current, D14.current) {
      let E30 = bt(D14.current);
      l19.current = E30, q15(E30), de8({ x: E30.x, y: E30.y });
    }
    u37.setHovering(true), I26(true), Y18(false), $9(null), Q16.current = true;
    let b14 = D14.current;
    if (b14) {
      se12.current?.abort();
      let E30 = new AbortController();
      se12.current = E30;
      let O14 = n13(b14);
      O14.addEventListener("pointerup", le9, { signal: E30.signal }), O14.addEventListener("pointercancel", le9, { signal: E30.signal }), b14.setPointerCapture?.(f35.pointerId);
    }
  }
  function yt9(f35) {
    if (f35.pointerId !== ce8.current) return;
    f35.preventDefault(), Q16.current && (G18.current = { x: f35.clientX, y: f35.clientY }, Q16.current = false);
    let { clientY: T17, clientX: v17, movementX: b14, movementY: E30 } = f35;
    (E30 < 0 && T17 > S18.current.y || E30 > 0 && T17 < S18.current.y) && (S18.current = { x: S18.current.x, y: T17 }), (b14 < 0 && v17 > S18.current.x || b14 > 0 && v17 < S18.current.x) && (S18.current = { x: v17, y: S18.current.y });
    let O14 = v17 - G18.current.x, C18 = T17 - G18.current.y, Ie7 = T17 - S18.current.y, Ct9 = v17 - S18.current.x;
    if (!B17 && Math.sqrt(O14 * O14 + C18 * C18) >= ao2 && (Y18(true), P17 === null)) {
      let pe9 = r49.includes("left") || r49.includes("right"), It7 = r49.includes("up") || r49.includes("down");
      if (pe9 && It7) {
        let Nt4 = Math.abs(O14), Mt6 = Math.abs(C18);
        $9(Nt4 > Mt6 ? "horizontal" : "vertical");
      }
    }
    let M20;
    if (!w22.current) P17 === "vertical" ? C18 > 0 ? M20 = "down" : C18 < 0 && (M20 = "up") : P17 === "horizontal" ? O14 > 0 ? M20 = "right" : O14 < 0 && (M20 = "left") : Math.abs(O14) >= Math.abs(C18) ? M20 = O14 > 0 ? "right" : "left" : M20 = C18 > 0 ? "down" : "up", M20 && r49.includes(M20) && (w22.current = M20, K14.current = Xe3(M20, O14, C18), x21(M20));
    else {
      let Fe5 = w22.current, pe9 = Xe3(Fe5, Ct9, Ie7);
      pe9 > ie8 ? (A17.current = false, x21(Fe5)) : !(r49.includes("left") && r49.includes("right")) && !(r49.includes("up") && r49.includes("down")) && K14.current - pe9 >= io && (A17.current = true);
    }
    let me7 = wt8(O14, C18), Ne7 = l19.current.x, Me10 = l19.current.y;
    P17 === "horizontal" ? (r49.includes("left") || r49.includes("right")) && (Ne7 += me7.x) : (P17 === "vertical" || (r49.includes("left") || r49.includes("right")) && (Ne7 += me7.x), (r49.includes("up") || r49.includes("down")) && (Me10 += me7.y)), de8({ x: Ne7, y: Me10 });
  }
  function Pt6(f35) {
    if (f35.key === "Escape") {
      if (!D14.current || !u9(D14.current, a12(n13(D14.current)))) return;
      u37.closeToast(s54.id);
    }
  }
  R26.useEffect(() => {
    if (!m25) return;
    let f35 = D14.current;
    if (!f35) return;
    function T17(v17) {
      u9(f35, f10(v17)) && v17.preventDefault();
    }
    return t11(f35, "touchmove", T17, { passive: false });
  }, [m25]);
  function St6() {
    if (!g20 && N20.x === _19.x && N20.y === _19.y && !X11) return { [L19.swipeMovementX]: "0px", [L19.swipeMovementY]: "0px" };
    let f35 = N20.x - _19.x, T17 = N20.y - _19.y;
    return { transition: g20 ? "none" : void 0, transform: g20 ? `translateX(${N20.x}px) translateY(${N20.y}px) scale(${_19.scale})` : void 0, [L19.swipeMovementX]: `${f35}px`, [L19.swipeMovementY]: `${T17}px` };
  }
  let Be6 = s54.priority === "high", bt8 = { role: Be6 ? "alertdialog" : "dialog", tabIndex: 0, "aria-modal": false, "aria-labelledby": j17, "aria-describedby": H16, "aria-hidden": Be6 && !vt6 ? true : void 0, onPointerDown: m25 ? Et9 : void 0, onPointerMove: m25 ? yt9 : void 0, onPointerUp: m25 ? le9 : void 0, onPointerCancel: m25 ? le9 : void 0, onKeyDown: Pt6, inert: s22(s54.limited), style: { ...St6(), [L19.index]: s54.transitionStatus === "ending" ? De10 : Oe5, [L19.offsetY]: `${Rt8}px`, [L19.height]: s54.height ? `${s54.height}px` : void 0 } }, fe7 = R26.useMemo(() => ({ rootRef: D14, toast: s54, titleId: j17, setTitleId: oe10, descriptionId: H16, setDescriptionId: J18, swiping: g20, swipeDirection: h24, recalculateHeight: ue7, index: De10, visibleIndex: Oe5, expanded: Ce7 }), [s54, j17, H16, g20, h24, ue7, De10, Oe5, Ce7]), Dt8 = { transitionStatus: s54.transitionStatus, expanded: Ce7, limited: s54.limited || false, type: s54.type, swiping: fe7.swiping, swipeDirection: fe7.swipeDirection }, Ot4 = J("div", e58, { ref: [o62, fe7.rootRef], state: Dt8, stateAttributesMapping: ro4, props: [bt8, i38] });
  return no4(Le5.Provider, { value: fe7, children: Ot4 });
});
var st6 = ye7.forwardRef(function(e58, o62) {
  let { render: s54, className: c40, style: d31, ...n61 } = e58, { visibleIndex: p31, expanded: i38, recalculateHeight: a38 } = k14(), r49 = ye7.useRef(null);
  o2(() => {
    let x21 = r49.current;
    if (!x21 || (a38(), typeof ResizeObserver != "function" || typeof MutationObserver != "function")) return;
    let g20 = new ResizeObserver(() => a38(true)), I26 = new MutationObserver(() => a38(true));
    return g20.observe(x21), I26.observe(x21, { childList: true, subtree: true, characterData: true }), () => {
      g20.disconnect(), I26.disconnect();
    };
  }, [a38]);
  let m25 = p31 > 0;
  return J("div", e58, { ref: [o62, r49], state: { expanded: i38, behind: m25 }, props: n61 });
});
var rt8 = nt8.forwardRef(function(e58, o62) {
  let { render: s54, className: c40, style: d31, id: n61, children: p31, ...i38 } = e58, { toast: a38, setDescriptionId: r49 } = k14(), m25 = p31 ?? a38.description, u37 = !!m25, h24 = I3(n61);
  o2(() => {
    if (u37) return r49(h24), () => {
      r49(void 0);
    };
  }, [u37, h24, r49]);
  let x21 = { type: a38.type }, g20 = J("p", e58, { ref: o62, state: x21, props: { ...i38, id: h24, children: m25 } });
  return u37 ? g20 : null;
});
var at7 = it7.forwardRef(function(e58, o62) {
  let { render: s54, className: c40, style: d31, id: n61, children: p31, ...i38 } = e58, { toast: a38, setTitleId: r49 } = k14(), m25 = p31 ?? a38.title, u37 = !!m25, h24 = I3(n61);
  o2(() => {
    if (u37) return r49(h24), () => {
      r49(void 0);
    };
  }, [u37, h24, r49]);
  let x21 = { type: a38.type }, g20 = J("h2", e58, { ref: o62, state: x21, props: { ...i38, id: h24, children: m25 } });
  return u37 ? g20 : null;
});
var ct6 = Pe5.forwardRef(function(e58, o62) {
  let { render: s54, className: c40, style: d31, disabled: n61, nativeButton: p31 = true, ...i38 } = e58, a38 = W13(), { toast: r49 } = k14(), m25 = a38.useState("expanded"), [u37, h24] = Pe5.useState(false), { getButtonProps: x21, buttonRef: g20 } = Q({ disabled: n61, native: p31 }), I26 = { type: r49.type };
  return J("button", e58, { ref: [o62, g20], state: I26, props: [{ "aria-hidden": !m25 && !u37, onClick() {
    a38.closeToast(r49.id);
  }, onFocus() {
    h24(true);
  }, onBlur() {
    h24(false);
  } }, i38, x21] });
});
var dt6 = ut6.forwardRef(function(e58, o62) {
  let { render: s54, className: c40, style: d31, disabled: n61, nativeButton: p31 = true, ...i38 } = e58, { toast: a38 } = k14(), r49 = a38.actionProps?.children ?? i38.children, m25 = !!r49, { getButtonProps: u37, buttonRef: h24 } = Q({ disabled: n61, native: p31 }), x21 = { type: a38.type }, g20 = J("button", e58, { ref: [o62, h24], state: x21, props: [i38, a38.actionProps, u37, { children: r49 }] });
  return m25 ? g20 : null;
});
var lt6 = N15;
var He8 = Se6.createContext(void 0);
function ft8() {
  let t48 = Se6.useContext(He8);
  if (t48 === void 0) throw new Error(f2(84));
  return t48;
}
var mt7 = ee6.forwardRef(function(e58, o62) {
  let { toast: s54, ...c40 } = e58, d31 = W13(), n61 = s54.positionerProps ?? o7, { render: p31, className: i38, anchor: a38 = n61.anchor, positionMethod: r49 = n61.positionMethod ?? "absolute", side: m25 = n61.side ?? "top", align: u37 = n61.align ?? "center", sideOffset: h24 = n61.sideOffset ?? 0, alignOffset: x21 = n61.alignOffset ?? 0, collisionBoundary: g20 = n61.collisionBoundary ?? "clipping-ancestors", collisionPadding: I26 = n61.collisionPadding ?? 5, arrowPadding: B17 = n61.arrowPadding ?? 5, sticky: Y18 = n61.sticky ?? false, disableAnchorTracking: X11 = n61.disableAnchorTracking ?? false, collisionAvoidance: z17 = n61.collisionAvoidance ?? S8, style: N20, ...te7 } = c40, [_19, q15] = ee6.useState(null), j17 = d31.useState("toastIndex", s54.id), oe10 = d31.useState("toastVisibleIndex", s54.id), H16 = h4(a38) ? a38 : null, J18 = jt({ open: true, onOpenChange: e5, elements: { floating: _19, reference: H16 } }), P17 = Lt2({ anchor: H16, positionMethod: r49, floatingRootContext: J18, mounted: true, side: m25, sideOffset: h24, align: u37, alignOffset: x21, collisionBoundary: g20, collisionPadding: I26, sticky: Y18, arrowPadding: B17, disableAnchorTracking: X11, keepMounted: true, collisionAvoidance: z17 }), $9 = ee6.useMemo(() => ({ side: P17.side, align: P17.align, anchorHidden: P17.anchorHidden }), [P17.side, P17.align, P17.anchorHidden]), D14 = g14(e58, $9, { styles: { ...P17.positionerStyles, [L19.index]: s54.transitionStatus === "ending" ? j17 : oe10 }, transitionStatus: s54.transitionStatus, props: te7, refs: [o62, q15] });
  return No4(He8.Provider, { value: P17, children: D14 });
});
var ht6 = pt5.forwardRef(function(e58, o62) {
  let { className: s54, render: c40, style: d31, ...n61 } = e58, { arrowRef: p31, side: i38, align: a38, arrowUncentered: r49, arrowStyles: m25 } = ft8();
  return J("div", e58, { state: { side: i38, align: a38, uncentered: r49 }, ref: [o62, p31], props: [{ style: m25, "aria-hidden": true }, n61] });
});
function Tt10() {
  let t48 = be6.useContext(ne11);
  if (!t48) throw new Error(f2(73));
  let e58 = t48.useState("toasts");
  return be6.useMemo(() => ({ toasts: e58, add: t48.addToast, close: t48.closeToast, update: t48.updateToast, promise: t48.promiseToast }), [e58, t48]);
}
function gt5() {
  let t48 = /* @__PURE__ */ new Set();
  function e58(o62) {
    t48.forEach((s54) => s54(o62));
  }
  return { " subscribe": function(s54) {
    return t48.add(s54), () => {
      t48.delete(s54);
    };
  }, add(o62) {
    let s54 = o62.id || n59("toast"), c40 = { ...o62, id: s54, transitionStatus: "starting" };
    return e58({ action: "add", options: c40 }), s54;
  }, close(o62) {
    e58({ action: "close", options: { id: o62 } });
  }, update(o62, s54) {
    e58({ action: "update", options: { ...s54, id: o62 } });
  }, promise(o62, s54) {
    let c40 = o62;
    return e58({ action: "promise", options: { ...s54, promise: o62, setPromise(d31) {
      c40 = d31;
    } } }), c40;
  } };
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/toggle-group.mjs
import * as t47 from "react";

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/esm/toggle-group/ToggleGroupContext.mjs
import * as e56 from "react";
var n60 = e56.createContext(void 0);
function p29(t48 = true) {
  let o62 = e56.useContext(n60);
  if (o62 === void 0 && !t48) throw new Error(f2(7));
  return o62;
}

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/toggle-group.mjs
import { jsx as T16 } from "react/jsx-runtime";
var G16 = function(e58) {
  return e58.disabled = "data-disabled", e58.orientation = "data-orientation", e58.multiple = "data-multiple", e58;
}({});
var V11 = { multiple(e58) {
  return e58 ? { [G16.multiple]: "" } : null;
} };
var B15 = t47.forwardRef(function(p31, d31) {
  let { defaultValue: n61, disabled: v17 = false, loopFocus: E30 = true, onValueChange: M20, orientation: l19 = "horizontal", multiple: m25 = false, value: r49, className: N20, render: P17, style: h24, ...f35 } = p31, s54 = s39(true), c40 = t47.useMemo(() => r49 !== void 0 || n61 !== void 0, [r49, n61]), i38 = (s54?.disabled ?? false) || v17, [a38, y24] = m({ controlled: r49, default: r49 === void 0 ? n61 ?? t5 : void 0, name: "ToggleGroup", state: "value" }), g20 = E((u37, R27, C18) => {
    let o62;
    m25 ? (o62 = a38.slice(), R27 ? o62.push(u37) : o62.splice(a38.indexOf(u37), 1)) : o62 = R27 ? [u37] : [], M20?.(o62, C18), !C18.isCanceled && y24(o62);
  }), b14 = { disabled: i38, multiple: m25, orientation: l19 }, A17 = t47.useMemo(() => ({ disabled: i38, orientation: l19, setGroupValue: g20, value: a38, isValueInitialized: c40 }), [i38, l19, g20, a38, c40]), x21 = { role: "group" }, _19 = J("div", p31, { enabled: !!s54, state: b14, ref: d31, props: [x21, f35], stateAttributesMapping: V11 });
  return T16(n60.Provider, { value: A17, children: s54 ? _19 : T16(X5, { render: P17, className: N20, style: h24, state: b14, refs: [d31], props: [x21, f35], stateAttributesMapping: V11, loopFocus: E30, enableHomeAndEndKeys: true, orientation: l19 }) });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/toggle.mjs
import * as p30 from "react";
import { jsx as z15 } from "react/jsx-runtime";
var A16 = p30.forwardRef(function(n61, d31) {
  let { className: f35, defaultPressed: g20 = false, disabled: m25 = false, form: k17, onPressedChange: c40, pressed: v17, render: P17, type: U11, value: T17, nativeButton: x21 = true, style: C18, ...E30 } = n61, o62 = r5(T17 || void 0), e58 = p29(), b14 = e58?.value ?? [], h24 = e58 ? void 0 : g20, a38 = (m25 || e58?.disabled) ?? false, [t48, N20] = m({ controlled: e58 ? o62 !== void 0 && b14.indexOf(o62) > -1 : v17, default: h24, name: "Toggle", state: "pressed" }), { getButtonProps: y24, buttonRef: I26 } = Q({ disabled: a38, native: x21 }), l19 = { disabled: a38, pressed: t48 }, i38 = [I26, d31], u37 = [{ "aria-pressed": t48, onClick(V12) {
    let r49 = !t48, s54 = u4(s4.none, V12.nativeEvent);
    o62 && e58?.setGroupValue?.(o62, r49, s54), c40?.(r49, s54), !s54.isCanceled && N20(r49);
  } }, E30, y24], R27 = J("button", n61, { enabled: !e58, state: l19, ref: i38, props: u37 });
  return e58 ? z15(P10, { tag: "button", render: P17, className: f35, style: C18, state: l19, refs: i38, props: u37 }) : R27;
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/toolbar.mjs
import * as _18 from "react";
import { jsx as S16 } from "react/jsx-runtime";
import * as b13 from "react";
import { jsx as h23 } from "react/jsx-runtime";
import * as D13 from "react";
import * as N19 from "react";
import { jsx as H15 } from "react/jsx-runtime";
import * as E29 from "react";
import { jsx as Q15 } from "react/jsx-runtime";
import * as j15 from "react";
import { jsx as Z16 } from "react/jsx-runtime";
import * as v16 from "react";
import { jsx as no5 } from "react/jsx-runtime";
var g19 = Object.defineProperty;
var k15 = (l19, o62) => {
  for (var e58 in o62) g19(l19, e58, { get: o62[e58], enumerable: true });
};
var O13 = {};
k15(O13, { Button: () => M18, Group: () => P16, Input: () => B16, Link: () => w21, Root: () => I25, Separator: () => G17 });
var G17 = _18.forwardRef(function(o62, e58) {
  let a38 = s39(), r49 = { vertical: "horizontal", horizontal: "vertical" }[a38.orientation];
  return S16(d25, { orientation: r49, ...o62, ref: e58 });
});
var I25 = b13.forwardRef(function(o62, e58) {
  let { disabled: a38 = false, loopFocus: r49 = true, orientation: t48 = "horizontal", className: u37, render: p31, style: m25, ...f35 } = o62, [i38, c40] = b13.useState(() => /* @__PURE__ */ new Map()), T17 = b13.useMemo(() => {
    let x21 = [];
    for (let s54 of i38.values()) s54?.index && !s54.focusableWhenDisabled && x21.push(s54.index);
    return x21;
  }, [i38]), n61 = b13.useMemo(() => ({ disabled: a38, orientation: t48, setItemMap: c40 }), [a38, t48, c40]), d31 = { disabled: a38, orientation: t48 }, R27 = { "aria-orientation": t48, role: "toolbar" };
  return h23(n42.Provider, { value: n61, children: h23(X5, { render: p31, className: u37, style: m25, state: d31, refs: [e58], props: [R27, f35], disabledIndices: T17, loopFocus: r49, onMapChange: c40, orientation: t48 }) });
});
var y23 = N19.createContext(void 0);
function C17(l19) {
  let o62 = N19.useContext(y23);
  if (o62 === void 0 && !l19) throw new Error(f2(68));
  return o62;
}
var P16 = D13.forwardRef(function(o62, e58) {
  let { className: a38, disabled: r49 = false, render: t48, style: u37, ...p31 } = o62, { orientation: m25, disabled: f35 } = s39(), i38 = f35 || r49, c40 = D13.useMemo(() => ({ disabled: i38 }), [i38]), n61 = J("div", o62, { state: { disabled: i38, orientation: m25 }, ref: e58, props: [{ role: "group" }, p31] });
  return H15(y23.Provider, { value: c40, children: n61 });
});
var M18 = E29.forwardRef(function(o62, e58) {
  let { className: a38, disabled: r49 = false, focusableWhenDisabled: t48 = true, render: u37, nativeButton: p31 = true, style: m25, ...f35 } = o62, i38 = E29.useMemo(() => ({ focusableWhenDisabled: t48 }), [t48]), { disabled: c40, orientation: T17 } = s39(), n61 = C17(true), d31 = c40 || (n61?.disabled ?? false) || r49, { getButtonProps: R27, buttonRef: x21 } = Q({ disabled: d31, focusableWhenDisabled: t48, native: p31 });
  return Q15(P10, { tag: "button", render: u37, className: a38, style: m25, metadata: i38, state: { disabled: d31, orientation: T17, focusable: t48 }, refs: [e58, x21], props: [f35, { disabled: d31 }, R27] });
});
var $7 = { focusableWhenDisabled: true };
var w21 = j15.forwardRef(function(o62, e58) {
  let { className: a38, render: r49, style: t48, ...u37 } = o62, { orientation: p31 } = s39();
  return Z16(P10, { tag: "a", render: r49, className: a38, style: t48, metadata: $7, state: { orientation: p31 }, refs: [e58], props: [u37] });
});
var B16 = v16.forwardRef(function(o62, e58) {
  let { className: a38, focusableWhenDisabled: r49 = true, render: t48, disabled: u37 = false, style: p31, ...m25 } = o62, f35 = v16.useMemo(() => ({ focusableWhenDisabled: r49 }), [r49]), { disabled: i38, orientation: c40 } = s39(), T17 = C17(true), n61 = i38 || (T17?.disabled ?? false) || u37, { props: d31 } = f8({ composite: true, disabled: n61, focusableWhenDisabled: r49, isNativeButton: false });
  return no5(P10, { tag: "input", render: t48, className: a38, style: p31, metadata: f35, state: { disabled: n61, orientation: c40, focusable: r49 }, refs: [e58], props: [{ onClick(s54) {
    n61 && s54.preventDefault();
  }, onKeyDown(s54) {
    s54.key !== T3 && s54.key !== L5 && n61 && p7(s54);
  }, onPointerDown(s54) {
    n61 && s54.preventDefault();
  } }, m25, d31] });
});

// http-url:https://esm.sh/@base-ui/react@1.5.0/X-ZWNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSxjbHN4LGx1Y2lkZS1yZWFjdCxyYWRpeC11aSxyZWFjdCxyZWFjdC1kb20scmVhY3QtZG9tL2NsaWVudCxyZWFjdC9qc3gtZGV2LXJ1bnRpbWUscmVhY3QvanN4LXJ1bnRpbWUsdGFpbHdpbmQtbWVyZ2U/es2022/tooltip.mjs
import * as S17 from "react";
import * as Y17 from "react";
import * as ge9 from "react";
import * as Te6 from "react-dom";
import { jsx as Rt7, jsxs as Ct8 } from "react/jsx-runtime";
import * as $8 from "react";
import * as K13 from "react";
import * as be7 from "react";
import * as q14 from "react";
import { jsx as Ne6 } from "react/jsx-runtime";
import * as J17 from "react";
import * as z16 from "react";
import { jsx as Yt6 } from "react/jsx-runtime";
import * as Ie6 from "react";
import * as Ve6 from "react";
import * as ae10 from "react";
import { jsx as _e6 } from "react/jsx-runtime";
import * as Ue10 from "react";
var Qe6 = Object.defineProperty;
var Xe10 = (e58, t48) => {
  for (var o62 in t48) Qe6(e58, o62, { get: t48[o62], enumerable: true });
};
var Ge6 = {};
Xe10(Ge6, { Arrow: () => He9, Handle: () => j16, Popup: () => Ae6, Portal: () => we6, Positioner: () => De9, Provider: () => Me9, Root: () => Re7, Trigger: () => Oe4, Viewport: () => Be5, createHandle: () => Le6 });
var X10 = Y17.createContext(void 0);
function x20(e58) {
  let t48 = Y17.useContext(X10);
  if (t48 === void 0 && !e58) throw new Error(f2(72));
  return t48;
}
var pt6 = { ...Re3, disabled: ut2((e58) => e58.disabled), instantType: ut2((e58) => e58.instantType), isInstantPhase: ut2((e58) => e58.isInstantPhase), trackCursorAxis: ut2((e58) => e58.trackCursorAxis), disableHoverablePopup: ut2((e58) => e58.disableHoverablePopup), lastOpenChangeReason: ut2((e58) => e58.openChangeReason), closeOnClick: ut2((e58) => e58.closeOnClick), closeDelay: ut2((e58) => e58.closeDelay), hasViewport: ut2((e58) => e58.hasViewport) };
var M19 = class e57 extends oe3 {
  constructor(t48, o62, r49 = false) {
    let i38 = new b6(), p31 = { ...lt7(), ...t48 };
    p31.floatingRootContext = Se(i38, o62, r49), super(p31, { popupRef: ge9.createRef(), onOpenChange: void 0, onOpenChangeComplete: void 0, triggerElements: i38 }, pt6);
  }
  setOpen = (t48, o62) => {
    let r49 = o62.reason, i38 = r49 === s4.triggerHover, p31 = t48 && r49 === s4.triggerFocus, c40 = !t48 && (r49 === s4.triggerPress || r49 === s4.escapeKey);
    if (o62.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    }, this.context.onOpenChange?.(t48, o62), o62.isCanceled) return;
    this.state.floatingRootContext.dispatchOpenChange(t48, o62);
    let a38 = () => {
      let u37 = { open: t48, openChangeReason: r49 };
      p31 ? u37.instantType = "focus" : c40 ? u37.instantType = "dismiss" : r49 === s4.triggerHover && (u37.instantType = void 0), ge2(u37, t48, o62.trigger), this.update(u37);
    };
    i38 ? Te6.flushSync(a38) : a38();
  };
  cancelPendingOpen(t48) {
    this.state.floatingRootContext.dispatchOpenChange(false, u4(s4.triggerPress, t48));
  }
  static useStore(t48, o62) {
    return ce2(t48, (i38, p31) => new e57(o62, i38, p31)).store;
  }
};
function lt7() {
  return { ...Ce(), disabled: false, instantType: void 0, isInstantPhase: false, trackCursorAxis: "none", disableHoverablePopup: false, openChangeReason: null, closeOnClick: true, closeDelay: 0, hasViewport: false };
}
var Re7 = I16(function(t48) {
  let { disabled: o62 = false, defaultOpen: r49 = false, open: i38, disableHoverablePopup: p31 = false, trackCursorAxis: c40 = "none", actionsRef: a38, onOpenChange: u37, onOpenChangeComplete: C18, handle: f35, triggerId: P17, defaultTriggerId: m25 = null, children: R27 } = t48, n61 = M19.useStore(f35?.store, { open: r49, openProp: i38, activeTriggerId: m25, triggerIdProp: P17 });
  n16(() => {
    i38 === void 0 && n61.state.open === false && r49 === true && n61.update({ open: true, activeTriggerId: m25 });
  }), n61.useControlledProp("openProp", i38), n61.useControlledProp("triggerIdProp", P17), n61.useContextCallback("onOpenChange", u37), n61.useContextCallback("onOpenChangeComplete", C18);
  let s54 = n61.useState("open"), g20 = !o62 && s54, I26 = n61.useState("activeTriggerId"), A17 = n61.useState("mounted"), d31 = n61.useState("payload");
  n61.useSyncedValues({ trackCursorAxis: c40, disableHoverablePopup: p31 }), n61.useSyncedValue("disabled", o62), pe3(n61);
  let { forceUnmount: y24, transitionStatus: E30 } = fe2(g20, n61), w22 = n61.useState("isInstantPhase"), N20 = n61.useState("instantType"), V12 = n61.useState("lastOpenChangeReason"), D14 = S17.useRef(null);
  o2(() => {
    s54 && o62 && n61.setOpen(false, u4(s4.disabled));
  }, [s54, o62, n61]), o2(() => {
    E30 === "ending" && V12 === s4.none || E30 !== "ending" && w22 ? (N20 !== "delay" && (D14.current = N20), n61.set("instantType", "delay")) : D14.current !== null && (n61.set("instantType", D14.current), D14.current = null);
  }, [E30, w22, V12, N20, n61]), o2(() => {
    g20 && I26 == null && n61.set("payload", void 0);
  }, [n61, I26, g20]);
  let O14 = S17.useCallback(() => {
    n61.setOpen(false, u4(s4.imperativeAction));
  }, [n61]);
  S17.useImperativeHandle(a38, () => ({ unmount: y24, close: O14 }), [y24, O14]);
  let U11 = g20 || A17 || !o62 && c40 !== "none";
  return Ct8(X10.Provider, { value: n61, children: [U11 && Rt7(ht7, { store: n61, disabled: o62, trackCursorAxis: c40 }), typeof R27 == "function" ? R27({ payload: d31 }) : R27] });
});
function ht7({ store: e58, disabled: t48, trackCursorAxis: o62 }) {
  let r49 = e58.useState("floatingRootContext"), i38 = zo(r49, { enabled: !t48, referencePress: () => e58.select("closeOnClick") }), p31 = Ao(r49, { enabled: !t48 && o62 !== "none", axis: o62 === "none" ? void 0 : o62 }), c40 = S17.useMemo(() => d2(p31.reference, i38.reference), [p31.reference, i38.reference]), a38 = S17.useMemo(() => d2(p31.trigger, i38.trigger), [p31.trigger, i38.trigger]), u37 = S17.useMemo(() => d2(le2, p31.floating, i38.floating), [p31.floating, i38.floating]);
  return ae3(e58, { activeTriggerProps: c40, inactiveTriggerProps: a38, popupProps: u37 }), null;
}
var oe9 = K13.createContext(void 0);
function Ce6() {
  return K13.useContext(oe9);
}
var he5 = function(e58) {
  return e58[e58.popupOpen = e13.popupOpen] = "popupOpen", e58.triggerDisabled = "data-trigger-disabled", e58;
}({});
var Ee6 = "data-base-ui-tooltip-trigger";
function ye8(e58) {
  if ("composedPath" in e58) {
    let o62 = e58.composedPath();
    for (let r49 = 0; r49 < o62.length; r49 += 1) {
      let i38 = o62[r49];
      if (h4(i38)) return i38;
    }
  }
  let t48 = e58.target;
  return h4(t48) ? t48 : null;
}
function kt7(e58) {
  let t48 = e58;
  for (; t48; ) {
    if (t48.hasAttribute(Ee6)) return t48;
    let o62 = t48.parentElement;
    if (o62) {
      t48 = o62;
      continue;
    }
    let r49 = t48.getRootNode();
    t48 = "host" in r49 && h4(r49.host) ? r49.host : null;
  }
  return null;
}
var Oe4 = N12(function(t48, o62) {
  let { render: r49, className: i38, style: p31, handle: c40, payload: a38, disabled: u37, delay: C18, closeOnClick: f35 = true, closeDelay: P17, id: m25, ...R27 } = t48, n61 = x20(true), s54 = c40?.store ?? n61;
  if (!s54) throw new Error(f2(82));
  let g20 = r5(m25), I26 = s54.useState("isTriggerActive", g20), A17 = s54.useState("isOpenedByTrigger", g20), d31 = s54.useState("floatingRootContext"), y24 = $8.useRef(null), E30 = C18 ?? 600, w22 = P17 ?? 0, { registerTrigger: N20, isMountedByThisTrigger: V12 } = se4(g20, y24, s54, { payload: a38, closeOnClick: f35, closeDelay: w22 }), D14 = Ce6(), { delayRef: O14, isInstantPhase: U11, hasProvider: F14 } = kr(d31, { open: A17 }), h24 = S10(d31);
  s54.useSyncedValue("isInstantPhase", U11);
  let Q16 = s54.useState("disabled"), H16 = u37 ?? Q16, pe9 = I8(H16), le9 = s54.useState("trackCursorAxis"), We8 = s54.useState("disableHoverablePopup"), B17 = $8.useRef(false), L20 = p12(), G18 = $8.useRef(void 0);
  function ce8() {
    let l19 = D14?.delay, T17 = typeof O14.current == "object" ? O14.current.open : void 0, v17 = E30;
    return F14 && (T17 !== 0 ? v17 = C18 ?? l19 ?? E30 : v17 = 0), v17;
  }
  function ue7(l19) {
    let T17 = y24.current;
    if (!T17 || !l19) return false;
    let v17 = kt7(l19);
    return v17 !== null && v17 !== T17 && u9(T17, v17);
  }
  function Ye6(l19) {
    let T17 = ue7(l19);
    return B17.current = T17, T17 && (h24.openChangeTimeout.clear(), h24.restTimeout.clear(), h24.restTimeoutPending = false, L20.clear()), T17;
  }
  let Ke10 = Ns(d31, { enabled: !H16, mouseOnly: true, move: false, handleClose: !We8 && le9 !== "both" ? mc() : null, restMs: ce8, delay() {
    let l19 = typeof O14.current == "object" ? O14.current.close : void 0, T17 = w22;
    return P17 == null && F14 && (T17 = l19), { close: T17 };
  }, triggerElementRef: y24, isActiveTrigger: I26, isClosing: () => s54.select("transitionStatus") === "ending", shouldOpen() {
    return !B17.current;
  } }), $e6 = Rs(d31, { enabled: !H16 }).reference, qe4 = (l19) => {
    let T17 = B17.current, v17 = ye8(l19), de8 = Ye6(v17), W14 = y24.current, Je9 = W14 && v17 && u9(W14, v17);
    if (de8 && s54.select("open") && s54.select("lastOpenChangeReason") === s4.triggerHover) {
      s54.setOpen(false, u4(s4.triggerHover, l19));
      return;
    }
    if (T17 && !de8 && Je9 && !pe9.current && !s54.select("open") && W14 && d10(G18.current)) {
      let fe7 = () => {
        !B17.current && !pe9.current && !s54.select("open") && s54.setOpen(true, u4(s4.triggerHover, l19, W14));
      }, me7 = ce8();
      me7 === 0 ? (L20.clear(), fe7()) : L20.start(me7, fe7);
    }
  }, ze8 = s54.useState("triggerProps", V12);
  return J("button", t48, { state: { open: A17 }, ref: [o62, N20, y24], props: [Ke10, $e6, V12 || le9 !== "none" ? ze8 : void 0, { onMouseOver(l19) {
    qe4(l19.nativeEvent);
  }, onFocus(l19) {
    ue7(ye8(l19.nativeEvent)) && l19.preventBaseUIHandler();
  }, onMouseLeave() {
    B17.current = false, L20.clear(), G18.current = void 0;
  }, onPointerEnter(l19) {
    G18.current = l19.pointerType;
  }, onPointerDown(l19) {
    G18.current = l19.pointerType, s54.set("closeOnClick", f35), f35 && !s54.select("open") && s54.cancelPendingOpen(l19.nativeEvent);
  }, onClick(l19) {
    f35 && !s54.select("open") && s54.cancelPendingOpen(l19.nativeEvent);
  }, id: g20, [he5.triggerDisabled]: H16 ? "" : void 0, [Ee6]: H16 ? void 0 : "" }, R27], stateAttributesMapping: c19 });
});
var se11 = q14.createContext(void 0);
function Se7() {
  let e58 = q14.useContext(se11);
  if (e58 === void 0) throw new Error(f2(70));
  return e58;
}
var we6 = be7.forwardRef(function(t48, o62) {
  let { keepMounted: r49 = false, ...i38 } = t48;
  return x20().useState("mounted") || r49 ? Ne6(se11.Provider, { value: r49, children: Ne6(N15, { ref: o62, ...i38 }) }) : null;
});
var ie9 = z16.createContext(void 0);
function k16() {
  let e58 = z16.useContext(ie9);
  if (e58 === void 0) throw new Error(f2(71));
  return e58;
}
var De9 = J17.forwardRef(function(t48, o62) {
  let { render: r49, className: i38, anchor: p31, positionMethod: c40 = "absolute", side: a38 = "top", align: u37 = "center", sideOffset: C18 = 0, alignOffset: f35 = 0, collisionBoundary: P17 = "clipping-ancestors", collisionPadding: m25 = 5, arrowPadding: R27 = 5, sticky: n61 = false, disableAnchorTracking: s54 = false, collisionAvoidance: g20 = S8, style: I26, ...A17 } = t48, d31 = x20(), y24 = Se7(), E30 = d31.useState("open"), w22 = d31.useState("mounted"), N20 = d31.useState("trackCursorAxis"), V12 = d31.useState("disableHoverablePopup"), D14 = d31.useState("floatingRootContext"), O14 = d31.useState("instantType"), U11 = d31.useState("transitionStatus"), F14 = d31.useState("hasViewport"), h24 = Lt2({ anchor: p31, positionMethod: c40, floatingRootContext: D14, mounted: w22, side: a38, sideOffset: C18, align: u37, alignOffset: f35, collisionBoundary: P17, collisionPadding: m25, sticky: n61, arrowPadding: R27, disableAnchorTracking: s54, keepMounted: y24, collisionAvoidance: g20, adaptiveOrigin: F14 ? Y5 : void 0 }), Q16 = J17.useMemo(() => ({ open: E30, side: h24.side, align: h24.align, anchorHidden: h24.anchorHidden, instant: N20 !== "none" ? "tracking-cursor" : O14 }), [E30, h24.side, h24.align, h24.anchorHidden, N20, O14]), H16 = g14(t48, Q16, { styles: h24.positionerStyles, transitionStatus: U11, props: A17, refs: [o62, d31.useStateSetter("positionerElement")], hidden: !w22, inert: !E30 || N20 === "both" || V12 });
  return Yt6(ie9.Provider, { value: h24, children: H16 });
});
var Xt8 = { ...g11, ...i7 };
var Ae6 = Ie6.forwardRef(function(t48, o62) {
  let { render: r49, className: i38, style: p31, ...c40 } = t48, a38 = x20(), { side: u37, align: C18 } = k16(), f35 = a38.useState("open"), P17 = a38.useState("instantType"), m25 = a38.useState("transitionStatus"), R27 = a38.useState("popupProps"), n61 = a38.useState("floatingRootContext"), s54 = a38.useState("disabled"), g20 = a38.useState("closeDelay");
  p10({ open: f35, ref: a38.context.popupRef, onComplete() {
    f35 && a38.context.onOpenChangeComplete?.(true);
  } }), Ps(n61, { enabled: !s54, closeDelay: g20 });
  let I26 = a38.useStateSetter("popupElement");
  return J("div", t48, { state: { open: f35, side: u37, align: C18, instant: P17, transitionStatus: m25 }, ref: [o62, a38.context.popupRef, I26], props: [R27, T8(m25), c40], stateAttributesMapping: Xt8 });
});
var He9 = Ve6.forwardRef(function(t48, o62) {
  let { render: r49, className: i38, style: p31, ...c40 } = t48, a38 = x20(), { arrowRef: u37, side: C18, align: f35, arrowUncentered: P17, arrowStyles: m25 } = k16(), R27 = a38.useState("open"), n61 = a38.useState("instantType");
  return J("div", t48, { state: { open: R27, side: C18, align: f35, uncentered: P17, instant: n61 }, ref: [o62, u37], props: [{ style: m25, "aria-hidden": true }, c40], stateAttributesMapping: g11 });
});
var Me9 = function(t48) {
  let { delay: o62, closeDelay: r49, timeout: i38 = 400 } = t48, p31 = ae10.useMemo(() => ({ delay: o62, closeDelay: r49 }), [o62, r49]), c40 = ae10.useMemo(() => ({ open: o62, close: r49 }), [o62, r49]);
  return _e6(oe9.Provider, { value: p31, children: _e6(Fr, { delay: c40, timeoutMs: i38, children: t48.children }) });
};
var ke7 = function(e58) {
  return e58.popupWidth = "--popup-width", e58.popupHeight = "--popup-height", e58;
}({});
var no6 = { activationDirection: (e58) => e58 ? { "data-activation-direction": e58 } : null };
var Be5 = Ue10.forwardRef(function(t48, o62) {
  let { render: r49, className: i38, style: p31, children: c40, ...a38 } = t48, u37 = x20(), C18 = k16(), f35 = u37.useState("instantType"), { children: P17, state: m25 } = De2({ store: u37, side: C18.side, cssVars: ke7, children: c40 }), R27 = { activationDirection: m25.activationDirection, transitioning: m25.transitioning, instant: f35 };
  return J("div", t48, { state: R27, ref: o62, props: [a38, { children: P17 }], stateAttributesMapping: no6 });
});
var j16 = class {
  constructor() {
    this.store = new M19();
  }
  open(t48) {
    let o62 = t48 ? this.store.context.triggerElements.getById(t48) : void 0;
    if (t48 && !o62) throw new Error(f2(81, t48));
    this.store.setOpen(true, u4(s4.imperativeAction, void 0, o62));
  }
  close() {
    this.store.setOpen(false, u4(s4.imperativeAction, void 0, void 0));
  }
  get isOpen() {
    return this.store.select("open");
  }
};
function Le6() {
  return new j16();
}

// http-url:https://esm.sh/@base-ui/react?target=es2022&external=react,react-dom,react%2Fjsx-runtime,react-dom%2Fclient,react%2Fjsx-dev-runtime,radix-ui,lucide-react,class-variance-authority,clsx,tailwind-merge
__reExport(react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports, react_star);
import * as react_star from "react";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/combobox.tsx
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";

// ../../ui-main/ui-main/apps/v4/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn2(...inputs) {
  return twMerge(clsx(inputs));
}

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
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn2(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/input-group.tsx
import { cva as cva2 } from "class-variance-authority";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/input.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx2(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn2(
        "h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/textarea.tsx
import { jsx as jsx3 } from "react/jsx-runtime";

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/input-group.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn2(
        "group/input-group relative flex w-full items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none dark:bg-input/30",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-[3px] has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
var inputGroupAddonVariants = cva2(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start": "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn2(inputGroupAddonVariants({ align }), className),
      onClick: (e58) => {
        if (e58.target.closest("button")) {
          return;
        }
        e58.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
var inputGroupButtonVariants = cva2(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn2(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn2(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}

// ../../ui-main/ui-main/apps/v4/registry/new-york-v4/ui/combobox.tsx
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var Combobox = react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Root;
function ComboboxValue({ ...props }) {
  return /* @__PURE__ */ jsx5(react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Value, { "data-slot": "combobox-value", ...props });
}
function ComboboxTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Trigger,
    {
      "data-slot": "combobox-trigger",
      className: cn2("[&_svg:not([class*='size-'])]:size-4", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx5(
          ChevronDownIcon,
          {
            "data-slot": "combobox-trigger-icon",
            className: "pointer-events-none size-4 text-muted-foreground"
          }
        )
      ]
    }
  );
}
function ComboboxClear({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Clear,
    {
      "data-slot": "combobox-clear",
      render: /* @__PURE__ */ jsx5(InputGroupButton, { variant: "ghost", size: "icon-xs" }),
      className: cn2(className),
      ...props,
      children: /* @__PURE__ */ jsx5(XIcon, { className: "pointer-events-none" })
    }
  );
}
function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs(InputGroup, { className: cn2("w-auto", className), children: [
    /* @__PURE__ */ jsx5(
      react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Input,
      {
        render: /* @__PURE__ */ jsx5(InputGroupInput, { disabled }),
        ...props
      }
    ),
    /* @__PURE__ */ jsxs(InputGroupAddon, { align: "inline-end", children: [
      showTrigger && /* @__PURE__ */ jsx5(
        InputGroupButton,
        {
          size: "icon-xs",
          variant: "ghost",
          asChild: true,
          "data-slot": "input-group-button",
          className: "group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent",
          disabled,
          children: /* @__PURE__ */ jsx5(ComboboxTrigger, {})
        }
      ),
      showClear && /* @__PURE__ */ jsx5(ComboboxClear, { disabled })
    ] }),
    children
  ] });
}
function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}) {
  return /* @__PURE__ */ jsx5(react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Portal, { children: /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Positioner,
    {
      side,
      sideOffset,
      align,
      alignOffset,
      anchor,
      className: "isolate z-50",
      children: /* @__PURE__ */ jsx5(
        react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Popup,
        {
          "data-slot": "combobox-content",
          "data-chips": !!anchor,
          className: cn2(
            "group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[chips=true]:min-w-(--anchor-width) data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:border-input/30 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:shadow-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            className
          ),
          ...props
        }
      )
    }
  ) });
}
function ComboboxList({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.List,
    {
      "data-slot": "combobox-list",
      className: cn2(
        "max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0",
        className
      ),
      ...props
    }
  );
}
function ComboboxItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Item,
    {
      "data-slot": "combobox-item",
      className: cn2(
        "relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx5(
          react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.ItemIndicator,
          {
            "data-slot": "combobox-item-indicator",
            render: /* @__PURE__ */ jsx5("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center" }),
            children: /* @__PURE__ */ jsx5(CheckIcon, { className: "pointer-events-none size-4 pointer-coarse:size-5" })
          }
        )
      ]
    }
  );
}
function ComboboxGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Group,
    {
      "data-slot": "combobox-group",
      className: cn2(className),
      ...props
    }
  );
}
function ComboboxLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.GroupLabel,
    {
      "data-slot": "combobox-label",
      className: cn2(
        "px-2 py-1.5 text-xs text-muted-foreground pointer-coarse:px-3 pointer-coarse:py-2 pointer-coarse:text-sm",
        className
      ),
      ...props
    }
  );
}
function ComboboxCollection({ ...props }) {
  return /* @__PURE__ */ jsx5(react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Collection, { "data-slot": "combobox-collection", ...props });
}
function ComboboxEmpty({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Empty,
    {
      "data-slot": "combobox-empty",
      className: cn2(
        "hidden w-full justify-center py-2 text-center text-sm text-muted-foreground group-data-empty/combobox-content:flex",
        className
      ),
      ...props
    }
  );
}
function ComboboxSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Separator,
    {
      "data-slot": "combobox-separator",
      className: cn2("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function ComboboxChips({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Chips,
    {
      "data-slot": "combobox-chips",
      className: cn2(
        "flex min-h-9 flex-wrap items-center gap-1.5 rounded-md border border-input bg-transparent bg-clip-padding px-2.5 py-1.5 text-sm shadow-xs transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-aria-invalid:border-destructive has-aria-invalid:ring-[3px] has-aria-invalid:ring-destructive/20 has-data-[slot=combobox-chip]:px-1.5 dark:bg-input/30 dark:has-aria-invalid:border-destructive/50 dark:has-aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Chip,
    {
      "data-slot": "combobox-chip",
      className: cn2(
        "flex h-[calc(--spacing(5.5))] w-fit items-center justify-center gap-1 rounded-sm bg-muted px-1.5 text-xs font-medium whitespace-nowrap text-foreground has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0",
        className
      ),
      ...props,
      children: [
        children,
        showRemove && /* @__PURE__ */ jsx5(
          react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.ChipRemove,
          {
            render: /* @__PURE__ */ jsx5(Button, { variant: "ghost", size: "icon-xs" }),
            className: "-ml-1 opacity-50 hover:opacity-100",
            "data-slot": "combobox-chip-remove",
            children: /* @__PURE__ */ jsx5(XIcon, { className: "pointer-events-none" })
          }
        )
      ]
    }
  );
}
function ComboboxChipsInput({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    react_target_es2022_external_react_react_dom_react_2Fjsx_runtime_react_dom_2Fclient_react_2Fjsx_dev_runtime_radix_ui_lucide_react_class_variance_authority_clsx_tailwind_merge_exports.Combobox.Input,
    {
      "data-slot": "combobox-chip-input",
      className: cn2("min-w-16 flex-1 outline-none", className),
      ...props
    }
  );
}
function useComboboxAnchor() {
  return React.useRef(null);
}
export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor
};
