var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// http-url:https://esm.sh/@radix-ui/react-accessible-icon@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accessible-icon.mjs
var react_accessible_icon_exports = {};
__export(react_accessible_icon_exports, {
  AccessibleIcon: () => r,
  Root: () => m
});
import * as e3 from "react";

// http-url:https://esm.sh/@radix-ui/react-visually-hidden@1.2.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-visually-hidden.mjs
var react_visually_hidden_exports = {};
__export(react_visually_hidden_exports, {
  Root: () => p,
  VISUALLY_HIDDEN_STYLES: () => d2,
  VisuallyHidden: () => a
});
import * as e2 from "react";

// http-url:https://esm.sh/@radix-ui/react-primitive@2.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-primitive.mjs
import * as o from "react";
import * as e from "react-dom";

// http-url:https://esm.sh/@radix-ui/react-slot@1.3.0/X-ZXJlYWN0/es2022/react-slot.mjs
var react_slot_exports = {};
__export(react_slot_exports, {
  Root: () => L,
  Slot: () => L,
  Slottable: () => O,
  createSlot: () => b,
  createSlottable: () => g
});
import * as n from "react";

// http-url:https://esm.sh/@radix-ui/react-compose-refs@1.1.3/X-ZXJlYWN0/es2022/react-compose-refs.mjs
import * as f from "react";
function l(n21, o15) {
  if (typeof n21 == "function") return n21(o15);
  n21 != null && (n21.current = o15);
}
function i(...n21) {
  return (o15) => {
    let u20 = false, c16 = n21.map((t18) => {
      let e18 = l(t18, o15);
      return !u20 && typeof e18 == "function" && (u20 = true), e18;
    });
    if (u20) return () => {
      for (let t18 = 0; t18 < c16.length; t18++) {
        let e18 = c16[t18];
        typeof e18 == "function" ? e18() : l(n21[t18], null);
      }
    };
  };
}
function s(...n21) {
  return f.useCallback(i(...n21), n21);
}

// http-url:https://esm.sh/@radix-ui/react-slot@1.3.0/X-ZXJlYWN0/es2022/react-slot.mjs
function b(t18) {
  let e18 = n.forwardRef((r18, i21) => {
    let { children: o15, ...a18 } = r18, l20 = null, c16 = false, s16 = [];
    h(o15) && typeof d == "function" && (o15 = d(o15._payload)), n.Children.forEach(o15, (u20) => {
      if (x(u20)) {
        c16 = true;
        let f21 = u20, p15 = "child" in f21.props ? f21.props.child : f21.props.children;
        h(p15) && typeof d == "function" && (p15 = d(p15._payload)), l20 = _(f21, p15), s16.push(l20?.props?.children);
      } else s16.push(u20);
    }), l20 ? l20 = n.cloneElement(l20, void 0, s16) : !c16 && n.Children.count(o15) === 1 && n.isValidElement(o15) && (l20 = o15);
    let R18 = l20 ? $(l20) : void 0, S18 = s(i21, R18);
    if (!l20) {
      if (o15 || o15 === 0) throw new Error(c16 ? V(t18) : I(t18));
      return o15;
    }
    let y20 = v(a18, l20.props ?? {});
    return l20.type !== n.Fragment && (y20.ref = i21 ? S18 : R18), n.cloneElement(l20, y20);
  });
  return e18.displayName = `${t18}.Slot`, e18;
}
var L = b("Slot");
var E = Symbol.for("radix.slottable");
function g(t18) {
  let e18 = (r18) => "child" in r18 ? r18.children(r18.child) : r18.children;
  return e18.displayName = `${t18}.Slottable`, e18.__radixId = E, e18;
}
var O = g("Slottable");
var _ = (t18, e18) => {
  if ("child" in t18.props) {
    let r18 = t18.props.child;
    return n.isValidElement(r18) ? n.cloneElement(r18, void 0, t18.props.children(r18.props.children)) : null;
  }
  return n.isValidElement(e18) ? e18 : null;
};
function v(t18, e18) {
  let r18 = { ...e18 };
  for (let i21 in e18) {
    let o15 = t18[i21], a18 = e18[i21];
    /^on[A-Z]/.test(i21) ? o15 && a18 ? r18[i21] = (...c16) => {
      let s16 = a18(...c16);
      return o15(...c16), s16;
    } : o15 && (r18[i21] = o15) : i21 === "style" ? r18[i21] = { ...o15, ...a18 } : i21 === "className" && (r18[i21] = [o15, a18].filter(Boolean).join(" "));
  }
  return { ...t18, ...r18 };
}
function $(t18) {
  let e18 = Object.getOwnPropertyDescriptor(t18.props, "ref")?.get, r18 = e18 && "isReactWarning" in e18 && e18.isReactWarning;
  return r18 ? t18.ref : (e18 = Object.getOwnPropertyDescriptor(t18, "ref")?.get, r18 = e18 && "isReactWarning" in e18 && e18.isReactWarning, r18 ? t18.props.ref : t18.props.ref || t18.ref);
}
function x(t18) {
  return n.isValidElement(t18) && typeof t18.type == "function" && "__radixId" in t18.type && t18.type.__radixId === E;
}
var P = Symbol.for("react.lazy");
function h(t18) {
  return t18 != null && typeof t18 == "object" && "$$typeof" in t18 && t18.$$typeof === P && "_payload" in t18 && C(t18._payload);
}
function C(t18) {
  return typeof t18 == "object" && t18 !== null && "then" in t18;
}
var I = (t18) => `${t18} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
var V = (t18) => `${t18} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
var d = n[" use ".trim().toString()];

// http-url:https://esm.sh/@radix-ui/react-primitive@2.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-primitive.mjs
import { jsx as l2 } from "react/jsx-runtime";
var u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"];
var v2 = u.reduce((i21, t18) => {
  let a18 = b(`Primitive.${t18}`), r18 = o.forwardRef((m20, s16) => {
    let { asChild: c16, ...n21 } = m20, f21 = c16 ? a18 : t18;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), l2(f21, { ...n21, ref: s16 });
  });
  return r18.displayName = `Primitive.${t18}`, { ...i21, [t18]: r18 };
}, {});
function R(i21, t18) {
  i21 && e.flushSync(() => i21.dispatchEvent(t18));
}
var w = v2;

// http-url:https://esm.sh/@radix-ui/react-visually-hidden@1.2.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-visually-hidden.mjs
import { jsx as t } from "react/jsx-runtime";
var d2 = Object.freeze({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" });
var l3 = "VisuallyHidden";
var a = e2.forwardRef((r18, i21) => t(v2.span, { ...r18, ref: i21, style: { ...d2, ...r18.style } }));
a.displayName = l3;
var p = a;

// http-url:https://esm.sh/@radix-ui/react-accessible-icon@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accessible-icon.mjs
import { Fragment as l4, jsx as s2, jsxs as c } from "react/jsx-runtime";
var n2 = "AccessibleIcon";
var r = ({ children: o15, label: a18 }) => {
  let t18 = e3.Children.only(o15);
  return c(l4, { children: [e3.cloneElement(t18, { "aria-hidden": "true", focusable: "false" }), s2(p, { children: a18 })] });
};
r.displayName = n2;
var m = r;

// http-url:https://esm.sh/@radix-ui/react-accordion@1.2.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accordion.mjs
var react_accordion_exports = {};
__export(react_accordion_exports, {
  Accordion: () => H,
  AccordionContent: () => B2,
  AccordionHeader: () => j2,
  AccordionItem: () => G2,
  AccordionTrigger: () => Y3,
  Content: () => we,
  Header: () => _e,
  Item: () => xe,
  Root: () => he,
  Trigger: () => Pe,
  createAccordionScope: () => Ie
});
import * as n7 from "react";

// http-url:https://esm.sh/@radix-ui/react-context@1.1.4/X-ZXJlYWN0/es2022/react-context.mjs
import * as o2 from "react";
import { jsx as m2 } from "react/jsx-runtime";
function $2(t18, s16 = []) {
  let c16 = [];
  function a18(r18, e18) {
    let n21 = o2.createContext(e18);
    n21.displayName = r18 + "Context";
    let u20 = c16.length;
    c16 = [...c16, e18];
    let d14 = (x19) => {
      let { scope: v19, children: C18, ...p15 } = x19, R18 = v19?.[t18]?.[u20] || n21, l20 = o2.useMemo(() => p15, Object.values(p15));
      return m2(R18.Provider, { value: l20, children: C18 });
    };
    d14.displayName = r18 + "Provider";
    function f21(x19, v19) {
      let C18 = v19?.[t18]?.[u20] || n21, p15 = o2.useContext(C18);
      if (p15) return p15;
      if (e18 !== void 0) return e18;
      throw new Error(`\`${x19}\` must be used within \`${r18}\``);
    }
    return [d14, f21];
  }
  let i21 = () => {
    let r18 = c16.map((e18) => o2.createContext(e18));
    return function(n21) {
      let u20 = n21?.[t18] || r18;
      return o2.useMemo(() => ({ [`__scope${t18}`]: { ...n21, [t18]: u20 } }), [n21, u20]);
    };
  };
  return i21.scopeName = t18, [a18, S(i21, ...s16)];
}
function S(...t18) {
  let s16 = t18[0];
  if (t18.length === 1) return s16;
  let c16 = () => {
    let a18 = t18.map((i21) => ({ useScope: i21(), scopeName: i21.scopeName }));
    return function(r18) {
      let e18 = a18.reduce((n21, { useScope: u20, scopeName: d14 }) => {
        let x19 = u20(r18)[`__scope${d14}`];
        return { ...n21, ...x19 };
      }, {});
      return o2.useMemo(() => ({ [`__scope${s16.scopeName}`]: e18 }), [e18]);
    };
  };
  return c16.scopeName = s16.scopeName, c16;
}

// http-url:https://esm.sh/@radix-ui/react-collection@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-collection.mjs
import * as R2 from "react";
import { jsx as L2 } from "react/jsx-runtime";
import * as a2 from "react";
import { jsx as P2 } from "react/jsx-runtime";
function re(r18) {
  let e18 = r18 + "CollectionProvider", [t18, o15] = $2(e18), [n21, s16] = t18(e18, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), l20 = (h23) => {
    let { scope: d14, children: E24 } = h23, A17 = R2.useRef(null), i21 = R2.useRef(/* @__PURE__ */ new Map()).current;
    return L2(n21, { scope: d14, itemMap: i21, collectionRef: A17, children: E24 });
  };
  l20.displayName = e18;
  let f21 = r18 + "CollectionSlot", S18 = b(f21), M16 = R2.forwardRef((h23, d14) => {
    let { scope: E24, children: A17 } = h23, i21 = s16(f21, E24), c16 = s(d14, i21.collectionRef);
    return L2(S18, { ref: c16, children: A17 });
  });
  M16.displayName = f21;
  let m20 = r18 + "CollectionItemSlot", v19 = "data-radix-collection-item", O23 = b(m20), u20 = R2.forwardRef((h23, d14) => {
    let { scope: E24, children: A17, ...i21 } = h23, c16 = R2.useRef(null), N26 = s(d14, c16), C18 = s16(m20, E24);
    return R2.useEffect(() => (C18.itemMap.set(c16, { ref: c16, ...i21 }), () => {
      C18.itemMap.delete(c16);
    })), L2(O23, { [v19]: "", ref: N26, children: A17 });
  });
  u20.displayName = m20;
  function x19(h23) {
    let d14 = s16(r18 + "CollectionConsumer", h23);
    return R2.useCallback(() => {
      let A17 = d14.collectionRef.current;
      if (!A17) return [];
      let i21 = Array.from(A17.querySelectorAll(`[${v19}]`));
      return Array.from(d14.itemMap.values()).sort((C18, y20) => i21.indexOf(C18.ref.current) - i21.indexOf(y20.ref.current));
    }, [d14.collectionRef, d14.itemMap]);
  }
  return [{ Provider: l20, Slot: M16, ItemSlot: u20 }, x19, o15];
}
var U = /* @__PURE__ */ new WeakMap();
var j = class g2 extends Map {
  #e;
  constructor(e18) {
    super(e18), this.#e = [...super.keys()], U.set(this, true);
  }
  set(e18, t18) {
    return U.get(this) && (this.has(e18) ? this.#e[this.#e.indexOf(e18)] = e18 : this.#e.push(e18)), super.set(e18, t18), this;
  }
  insert(e18, t18, o15) {
    let n21 = this.has(t18), s16 = this.#e.length, l20 = $3(e18), f21 = l20 >= 0 ? l20 : s16 + l20, S18 = f21 < 0 || f21 >= s16 ? -1 : f21;
    if (S18 === this.size || n21 && S18 === this.size - 1 || S18 === -1) return this.set(t18, o15), this;
    let M16 = this.size + (n21 ? 0 : 1);
    l20 < 0 && f21++;
    let m20 = [...this.#e], v19, O23 = false;
    for (let u20 = f21; u20 < M16; u20++) if (f21 === u20) {
      let x19 = m20[u20];
      m20[u20] === t18 && (x19 = m20[u20 + 1]), n21 && this.delete(t18), v19 = this.get(x19), this.set(t18, o15);
    } else {
      !O23 && m20[u20 - 1] === t18 && (O23 = true);
      let x19 = m20[O23 ? u20 : u20 - 1], h23 = v19;
      v19 = this.get(x19), this.delete(x19), this.set(x19, h23);
    }
    return this;
  }
  with(e18, t18, o15) {
    let n21 = new g2(this);
    return n21.insert(e18, t18, o15), n21;
  }
  before(e18) {
    let t18 = this.#e.indexOf(e18) - 1;
    if (!(t18 < 0)) return this.entryAt(t18);
  }
  setBefore(e18, t18, o15) {
    let n21 = this.#e.indexOf(e18);
    return n21 === -1 ? this : this.insert(n21, t18, o15);
  }
  after(e18) {
    let t18 = this.#e.indexOf(e18);
    if (t18 = t18 === -1 || t18 === this.size - 1 ? -1 : t18 + 1, t18 !== -1) return this.entryAt(t18);
  }
  setAfter(e18, t18, o15) {
    let n21 = this.#e.indexOf(e18);
    return n21 === -1 ? this : this.insert(n21 + 1, t18, o15);
  }
  first() {
    return this.entryAt(0);
  }
  last() {
    return this.entryAt(-1);
  }
  clear() {
    return this.#e = [], super.clear();
  }
  delete(e18) {
    let t18 = super.delete(e18);
    return t18 && this.#e.splice(this.#e.indexOf(e18), 1), t18;
  }
  deleteAt(e18) {
    let t18 = this.keyAt(e18);
    return t18 !== void 0 ? this.delete(t18) : false;
  }
  at(e18) {
    let t18 = V2(this.#e, e18);
    if (t18 !== void 0) return this.get(t18);
  }
  entryAt(e18) {
    let t18 = V2(this.#e, e18);
    if (t18 !== void 0) return [t18, this.get(t18)];
  }
  indexOf(e18) {
    return this.#e.indexOf(e18);
  }
  keyAt(e18) {
    return V2(this.#e, e18);
  }
  from(e18, t18) {
    let o15 = this.indexOf(e18);
    if (o15 === -1) return;
    let n21 = o15 + t18;
    return n21 < 0 && (n21 = 0), n21 >= this.size && (n21 = this.size - 1), this.at(n21);
  }
  keyFrom(e18, t18) {
    let o15 = this.indexOf(e18);
    if (o15 === -1) return;
    let n21 = o15 + t18;
    return n21 < 0 && (n21 = 0), n21 >= this.size && (n21 = this.size - 1), this.keyAt(n21);
  }
  find(e18, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (Reflect.apply(e18, t18, [n21, o15, this])) return n21;
      o15++;
    }
  }
  findIndex(e18, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (Reflect.apply(e18, t18, [n21, o15, this])) return o15;
      o15++;
    }
    return -1;
  }
  filter(e18, t18) {
    let o15 = [], n21 = 0;
    for (let s16 of this) Reflect.apply(e18, t18, [s16, n21, this]) && o15.push(s16), n21++;
    return new g2(o15);
  }
  map(e18, t18) {
    let o15 = [], n21 = 0;
    for (let s16 of this) o15.push([s16[0], Reflect.apply(e18, t18, [s16, n21, this])]), n21++;
    return new g2(o15);
  }
  reduce(...e18) {
    let [t18, o15] = e18, n21 = 0, s16 = o15 ?? this.at(0);
    for (let l20 of this) n21 === 0 && e18.length === 1 ? s16 = l20 : s16 = Reflect.apply(t18, this, [s16, l20, n21, this]), n21++;
    return s16;
  }
  reduceRight(...e18) {
    let [t18, o15] = e18, n21 = o15 ?? this.at(-1);
    for (let s16 = this.size - 1; s16 >= 0; s16--) {
      let l20 = this.at(s16);
      s16 === this.size - 1 && e18.length === 1 ? n21 = l20 : n21 = Reflect.apply(t18, this, [n21, l20, s16, this]);
    }
    return n21;
  }
  toSorted(e18) {
    let t18 = [...this.entries()].sort(e18);
    return new g2(t18);
  }
  toReversed() {
    let e18 = new g2();
    for (let t18 = this.size - 1; t18 >= 0; t18--) {
      let o15 = this.keyAt(t18), n21 = this.get(o15);
      e18.set(o15, n21);
    }
    return e18;
  }
  toSpliced(...e18) {
    let t18 = [...this.entries()];
    return t18.splice(...e18), new g2(t18);
  }
  slice(e18, t18) {
    let o15 = new g2(), n21 = this.size - 1;
    if (e18 === void 0) return o15;
    e18 < 0 && (e18 = e18 + this.size), t18 !== void 0 && t18 > 0 && (n21 = t18 - 1);
    for (let s16 = e18; s16 <= n21; s16++) {
      let l20 = this.keyAt(s16), f21 = this.get(l20);
      o15.set(l20, f21);
    }
    return o15;
  }
  every(e18, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (!Reflect.apply(e18, t18, [n21, o15, this])) return false;
      o15++;
    }
    return true;
  }
  some(e18, t18) {
    let o15 = 0;
    for (let n21 of this) {
      if (Reflect.apply(e18, t18, [n21, o15, this])) return true;
      o15++;
    }
    return false;
  }
};
function V2(r18, e18) {
  if ("at" in Array.prototype) return Array.prototype.at.call(r18, e18);
  let t18 = Q(r18, e18);
  return t18 === -1 ? void 0 : r18[t18];
}
function Q(r18, e18) {
  let t18 = r18.length, o15 = $3(e18), n21 = o15 >= 0 ? o15 : t18 + o15;
  return n21 < 0 || n21 >= t18 ? -1 : n21;
}
function $3(r18) {
  return r18 !== r18 || r18 === 0 ? 0 : Math.trunc(r18);
}
function fe(r18) {
  let e18 = r18 + "CollectionProvider", [t18, o15] = $2(e18), [n21, s16] = t18(e18, { collectionElement: null, collectionRef: { current: null }, collectionRefObject: { current: null }, itemMap: new j(), setItemMap: () => {
  } }), l20 = ({ state: i21, ...c16 }) => i21 ? P2(S18, { ...c16, state: i21 }) : P2(f21, { ...c16 });
  l20.displayName = e18;
  let f21 = (i21) => {
    let c16 = d14();
    return P2(S18, { ...i21, state: c16 });
  };
  f21.displayName = e18 + "Init";
  let S18 = (i21) => {
    let { scope: c16, children: N26, state: C18 } = i21, y20 = a2.useRef(null), [w18, p15] = a2.useState(null), z17 = s(y20, p15), [D19, k16] = C18;
    return a2.useEffect(() => {
      if (!w18) return;
      let T20 = Z(() => {
      });
      return T20.observe(w18, { childList: true, subtree: true }), () => {
        T20.disconnect();
      };
    }, [w18]), P2(n21, { scope: c16, itemMap: D19, setItemMap: k16, collectionRef: z17, collectionRefObject: y20, collectionElement: w18, children: N26 });
  };
  S18.displayName = e18 + "Impl";
  let M16 = r18 + "CollectionSlot", m20 = b(M16), v19 = a2.forwardRef((i21, c16) => {
    let { scope: N26, children: C18 } = i21, y20 = s16(M16, N26), w18 = s(c16, y20.collectionRef);
    return P2(m20, { ref: w18, children: C18 });
  });
  v19.displayName = M16;
  let O23 = r18 + "CollectionItemSlot", u20 = "data-radix-collection-item", x19 = b(O23), h23 = a2.forwardRef((i21, c16) => {
    let { scope: N26, children: C18, ...y20 } = i21, w18 = a2.useRef(null), [p15, z17] = a2.useState(null), D19 = s(c16, w18, z17), k16 = s16(O23, N26), { setItemMap: T20 } = k16, _22 = a2.useRef(y20);
    X(_22.current, y20) || (_22.current = y20);
    let B19 = _22.current;
    return a2.useEffect(() => {
      let q23 = B19;
      return T20((I18) => p15 ? I18.has(p15) ? I18.set(p15, { ...q23, element: p15 }).toSorted(W) : (I18.set(p15, { ...q23, element: p15 }), I18.toSorted(W)) : I18), () => {
        T20((I18) => !p15 || !I18.has(p15) ? I18 : (I18.delete(p15), new j(I18)));
      };
    }, [p15, B19, T20]), P2(x19, { [u20]: "", ref: D19, children: C18 });
  });
  h23.displayName = O23;
  function d14() {
    return a2.useState(new j());
  }
  function E24(i21) {
    let { itemMap: c16 } = s16(r18 + "CollectionConsumer", i21);
    return c16;
  }
  return [{ Provider: l20, Slot: v19, ItemSlot: h23 }, { createCollectionScope: o15, useCollection: E24, useInitCollection: d14 }];
}
function X(r18, e18) {
  if (r18 === e18) return true;
  if (typeof r18 != "object" || typeof e18 != "object" || r18 == null || e18 == null) return false;
  let t18 = Object.keys(r18), o15 = Object.keys(e18);
  if (t18.length !== o15.length) return false;
  for (let n21 of t18) if (!Object.prototype.hasOwnProperty.call(e18, n21) || r18[n21] !== e18[n21]) return false;
  return true;
}
function Y(r18, e18) {
  return !!(e18.compareDocumentPosition(r18) & Node.DOCUMENT_POSITION_PRECEDING);
}
function W(r18, e18) {
  return !r18[1].element || !e18[1].element ? 0 : Y(r18[1].element, e18[1].element) ? -1 : 1;
}
function Z(r18) {
  return new MutationObserver((t18) => {
    for (let o15 of t18) if (o15.type === "childList") {
      r18();
      return;
    }
  });
}

// http-url:https://esm.sh/@radix-ui/primitive@1.1.4/es2022/primitive.mjs
var i2 = !!(typeof window < "u" && window.document && window.document.createElement);
function f2(e18, o15, { checkForDefaultPrevented: n21 = true } = {}) {
  return function(t18) {
    if (e18?.(t18), n21 === false || !t18.defaultPrevented) return o15?.(t18);
  };
}

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
import * as n4 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-layout-effect@1.1.2/X-ZXJlYWN0/es2022/react-use-layout-effect.mjs
import * as t2 from "react";
var e4 = globalThis?.document ? t2.useLayoutEffect : () => {
};

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
import * as c2 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-effect-event@0.0.3/X-ZXJlYWN0/es2022/react-use-effect-event.mjs
import * as e5 from "react";
var n3 = e5[" useEffectEvent ".trim().toString()];
var f3 = e5[" useInsertionEffect ".trim().toString()];
function i3(t18) {
  if (typeof n3 == "function") return n3(t18);
  let r18 = e5.useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return typeof f3 == "function" ? f3(() => {
    r18.current = t18;
  }) : e4(() => {
    r18.current = t18;
  }), e5.useMemo(() => (...o15) => r18.current?.(...o15), []);
}

// http-url:https://esm.sh/@radix-ui/react-use-controllable-state@1.2.3/X-ZXJlYWN0/es2022/react-use-controllable-state.mjs
var w2 = n4[" useInsertionEffect ".trim().toString()] || e4;
function D({ prop: e18, defaultProp: a18, onChange: s16 = () => {
}, caller: i21 }) {
  let [t18, f21, v19] = $4({ defaultProp: a18, onChange: s16 }), l20 = e18 !== void 0, r18 = l20 ? e18 : t18;
  {
    let u20 = n4.useRef(e18 !== void 0);
    n4.useEffect(() => {
      let o15 = u20.current;
      o15 !== l20 && console.warn(`${i21} is changing from ${o15 ? "controlled" : "uncontrolled"} to ${l20 ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), u20.current = l20;
    }, [l20, i21]);
  }
  let C18 = n4.useCallback((u20) => {
    if (l20) {
      let o15 = y(u20) ? u20(e18) : u20;
      o15 !== e18 && v19.current?.(o15);
    } else f21(u20);
  }, [l20, e18, f21, v19]);
  return [r18, C18];
}
function $4({ defaultProp: e18, onChange: a18 }) {
  let [s16, i21] = n4.useState(e18), t18 = n4.useRef(s16), f21 = n4.useRef(a18);
  return w2(() => {
    f21.current = a18;
  }, [a18]), n4.useEffect(() => {
    t18.current !== s16 && (f21.current?.(s16), t18.current = s16);
  }, [s16, t18]), [s16, i21, f21];
}
function y(e18) {
  return typeof e18 == "function";
}
var E2 = Symbol("RADIX:SYNC_STATE");

// http-url:https://esm.sh/@radix-ui/react-collapsible@1.1.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-collapsible.mjs
var react_collapsible_exports = {};
__export(react_collapsible_exports, {
  Collapsible: () => w3,
  CollapsibleContent: () => O2,
  CollapsibleTrigger: () => I2,
  Content: () => Z2,
  Root: () => X2,
  Trigger: () => Y2,
  createCollapsibleScope: () => W2
});
import * as e6 from "react";

// http-url:https://esm.sh/@radix-ui/react-presence@1.1.6/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-presence.mjs
import * as t3 from "react";
import * as g3 from "react";
function E3(n21, e18) {
  return g3.useReducer((r18, o15) => e18[r18][o15] ?? r18, n21);
}
var y2 = (n21) => {
  let { present: e18, children: r18 } = n21, o15 = v3(e18), i21 = typeof r18 == "function" ? r18({ present: o15.isPresent }) : t3.Children.only(r18), u20 = S2(o15.ref, h2(i21));
  return typeof r18 == "function" || o15.isPresent ? t3.cloneElement(i21, { ref: u20 }) : null;
};
y2.displayName = "Presence";
function v3(n21) {
  let [e18, r18] = t3.useState(), o15 = t3.useRef(null), i21 = t3.useRef(n21), u20 = t3.useRef("none"), s16 = n21 ? "mounted" : "unmounted", [c16, f21] = E3(s16, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return t3.useEffect(() => {
    let a18 = N(o15.current);
    u20.current = c16 === "mounted" ? a18 : "none";
  }, [c16]), e4(() => {
    let a18 = o15.current, m20 = i21.current;
    if (m20 !== n21) {
      let p15 = u20.current, l20 = N(a18);
      n21 ? f21("MOUNT") : l20 === "none" || a18?.display === "none" ? f21("UNMOUNT") : f21(m20 && p15 !== l20 ? "ANIMATION_OUT" : "UNMOUNT"), i21.current = n21;
    }
  }, [n21, f21]), e4(() => {
    if (e18) {
      let a18, m20 = e18.ownerDocument.defaultView ?? window, d14 = (l20) => {
        let O23 = N(o15.current).includes(CSS.escape(l20.animationName));
        if (l20.target === e18 && O23 && (f21("ANIMATION_END"), !i21.current)) {
          let T20 = e18.style.animationFillMode;
          e18.style.animationFillMode = "forwards", a18 = m20.setTimeout(() => {
            e18.style.animationFillMode === "forwards" && (e18.style.animationFillMode = T20);
          });
        }
      }, p15 = (l20) => {
        l20.target === e18 && (u20.current = N(o15.current));
      };
      return e18.addEventListener("animationstart", p15), e18.addEventListener("animationcancel", d14), e18.addEventListener("animationend", d14), () => {
        m20.clearTimeout(a18), e18.removeEventListener("animationstart", p15), e18.removeEventListener("animationcancel", d14), e18.removeEventListener("animationend", d14);
      };
    } else f21("ANIMATION_END");
  }, [e18, f21]), { isPresent: ["mounted", "unmountSuspended"].includes(c16), ref: t3.useCallback((a18) => {
    o15.current = a18 ? getComputedStyle(a18) : null, r18(a18);
  }, []) };
}
function A(n21, e18) {
  if (typeof n21 == "function") return n21(e18);
  n21 != null && (n21.current = e18);
}
function S2(...n21) {
  let e18 = t3.useRef(n21);
  return e18.current = n21, t3.useCallback((r18) => {
    let o15 = e18.current, i21 = false, u20 = o15.map((s16) => {
      let c16 = A(s16, r18);
      return !i21 && typeof c16 == "function" && (i21 = true), c16;
    });
    if (i21) return () => {
      for (let s16 = 0; s16 < u20.length; s16++) {
        let c16 = u20[s16];
        typeof c16 == "function" ? c16() : A(o15[s16], null);
      }
    };
  }, []);
}
function N(n21) {
  return n21?.animationName || "none";
}
function h2(n21) {
  let e18 = Object.getOwnPropertyDescriptor(n21.props, "ref")?.get, r18 = e18 && "isReactWarning" in e18 && e18.isReactWarning;
  return r18 ? n21.ref : (e18 = Object.getOwnPropertyDescriptor(n21, "ref")?.get, r18 = e18 && "isReactWarning" in e18 && e18.isReactWarning, r18 ? n21.props.ref : n21.props.ref || n21.ref);
}

// http-url:https://esm.sh/@radix-ui/react-id@1.1.2/X-ZXJlYWN0/es2022/react-id.mjs
import * as o3 from "react";
var f4 = o3[" useId ".trim().toString()] || (() => {
});
var s3 = 0;
function n5(t18) {
  let [r18, a18] = o3.useState(f4());
  return e4(() => {
    t18 || a18((e18) => e18 ?? String(s3++));
  }, [t18]), t18 || (r18 ? `radix-${r18}` : "");
}

// http-url:https://esm.sh/@radix-ui/react-collapsible@1.1.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-collapsible.mjs
import { jsx as c3 } from "react/jsx-runtime";
var u2 = "Collapsible";
var [B, W2] = $2(u2);
var [G, v4] = B(u2);
var w3 = e6.forwardRef((o15, r18) => {
  let { __scopeCollapsible: i21, open: a18, defaultOpen: t18, disabled: l20, onOpenChange: s16, ...m20 } = o15, [d14, p15] = D({ prop: a18, defaultProp: t18 ?? false, onChange: s16, caller: u2 });
  return c3(G, { scope: i21, disabled: l20, contentId: n5(), open: d14, onOpenToggle: e6.useCallback(() => p15((C18) => !C18), [p15]), children: c3(v2.div, { "data-state": h3(d14), "data-disabled": l20 ? "" : void 0, ...m20, ref: r18 }) });
});
w3.displayName = u2;
var A2 = "CollapsibleTrigger";
var I2 = e6.forwardRef((o15, r18) => {
  let { __scopeCollapsible: i21, ...a18 } = o15, t18 = v4(A2, i21);
  return c3(v2.button, { type: "button", "aria-controls": t18.open ? t18.contentId : void 0, "aria-expanded": t18.open || false, "data-state": h3(t18.open), "data-disabled": t18.disabled ? "" : void 0, disabled: t18.disabled, ...a18, ref: r18, onClick: f2(o15.onClick, t18.onOpenToggle) });
});
I2.displayName = A2;
var g4 = "CollapsibleContent";
var O2 = e6.forwardRef((o15, r18) => {
  let { forceMount: i21, ...a18 } = o15, t18 = v4(g4, o15.__scopeCollapsible);
  return c3(y2, { present: i21 || t18.open, children: ({ present: l20 }) => c3($5, { ...a18, ref: r18, present: l20 }) });
});
O2.displayName = g4;
var $5 = e6.forwardRef((o15, r18) => {
  let { __scopeCollapsible: i21, present: a18, children: t18, ...l20 } = o15, s16 = v4(g4, i21), [m20, d14] = e6.useState(a18), p15 = e6.useRef(null), C18 = s(r18, p15), y20 = e6.useRef(0), x19 = y20.current, N26 = e6.useRef(0), P16 = N26.current, R18 = s16.open || m20, _22 = e6.useRef(R18), f21 = e6.useRef(void 0);
  return e6.useEffect(() => {
    let n21 = requestAnimationFrame(() => _22.current = false);
    return () => cancelAnimationFrame(n21);
  }, []), e4(() => {
    let n21 = p15.current;
    if (n21) {
      f21.current = f21.current || { transitionDuration: n21.style.transitionDuration, animationName: n21.style.animationName }, n21.style.transitionDuration = "0s", n21.style.animationName = "none";
      let E24 = n21.getBoundingClientRect();
      y20.current = E24.height, N26.current = E24.width, _22.current || (n21.style.transitionDuration = f21.current.transitionDuration, n21.style.animationName = f21.current.animationName), d14(a18);
    }
  }, [s16.open, a18]), c3(v2.div, { "data-state": h3(s16.open), "data-disabled": s16.disabled ? "" : void 0, id: s16.contentId, hidden: !R18, ...l20, ref: C18, style: { "--radix-collapsible-content-height": x19 ? `${x19}px` : void 0, "--radix-collapsible-content-width": P16 ? `${P16}px` : void 0, ...o15.style }, children: R18 && t18 });
});
function h3(o15) {
  return o15 ? "open" : "closed";
}
var X2 = w3;
var Y2 = I2;
var Z2 = O2;

// http-url:https://esm.sh/@radix-ui/react-direction@1.1.2/X-ZXJlYWN0/es2022/react-direction.mjs
var react_direction_exports = {};
__export(react_direction_exports, {
  DirectionProvider: () => c4,
  Provider: () => s4,
  useDirection: () => v5
});
import * as r2 from "react";
import { jsx as n6 } from "react/jsx-runtime";
var o4 = r2.createContext(void 0);
var c4 = (e18) => {
  let { dir: t18, children: i21 } = e18;
  return n6(o4.Provider, { value: t18, children: i21 });
};
function v5(e18) {
  let t18 = r2.useContext(o4);
  return e18 || t18 || "ltr";
}
var s4 = c4;

// http-url:https://esm.sh/@radix-ui/react-accordion@1.2.14/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-accordion.mjs
import { jsx as c5 } from "react/jsx-runtime";
var d3 = "Accordion";
var re2 = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [E4, te, ce] = re(d3);
var [R3, Ie] = $2(d3, [ce, W2]);
var k = W2();
var H = n7.forwardRef((o15, i21) => {
  let { type: e18, ...t18 } = o15, a18 = t18, r18 = t18;
  return c5(E4.Provider, { scope: o15.__scopeAccordion, children: e18 === "multiple" ? c5(le, { ...r18, ref: i21 }) : c5(ae, { ...a18, ref: i21 }) });
});
H.displayName = d3;
var [K, ne] = R3(d3);
var [L3, ie] = R3(d3, { collapsible: false });
var ae = n7.forwardRef((o15, i21) => {
  let { value: e18, defaultValue: t18, onValueChange: a18 = () => {
  }, collapsible: r18 = false, ...s16 } = o15, [l20, p15] = D({ prop: e18, defaultProp: t18 ?? "", onChange: a18, caller: d3 });
  return c5(K, { scope: o15.__scopeAccordion, value: n7.useMemo(() => l20 ? [l20] : [], [l20]), onItemOpen: p15, onItemClose: n7.useCallback(() => r18 && p15(""), [r18, p15]), children: c5(L3, { scope: o15.__scopeAccordion, collapsible: r18, children: c5(z, { ...s16, ref: i21 }) }) });
});
var le = n7.forwardRef((o15, i21) => {
  let { value: e18, defaultValue: t18, onValueChange: a18 = () => {
  }, ...r18 } = o15, [s16, l20] = D({ prop: e18, defaultProp: t18 ?? [], onChange: a18, caller: d3 }), p15 = n7.useCallback((v19) => l20((f21 = []) => [...f21, v19]), [l20]), u20 = n7.useCallback((v19) => l20((f21 = []) => f21.filter((h23) => h23 !== v19)), [l20]);
  return c5(K, { scope: o15.__scopeAccordion, value: s16, onItemOpen: p15, onItemClose: u20, children: c5(L3, { scope: o15.__scopeAccordion, collapsible: true, children: c5(z, { ...r18, ref: i21 }) }) });
});
var [se, I3] = R3(d3);
var z = n7.forwardRef((o15, i21) => {
  let { __scopeAccordion: e18, disabled: t18, dir: a18, orientation: r18 = "vertical", ...s16 } = o15, l20 = n7.useRef(null), p15 = s(l20, i21), u20 = te(e18), f21 = v5(a18) === "ltr", h23 = f2(o15.onKeyDown, (A17) => {
    if (!re2.includes(A17.key)) return;
    let J20 = A17.target, x19 = u20().filter((S18) => !S18.ref.current?.disabled), g21 = x19.findIndex((S18) => S18.ref.current === J20), O23 = x19.length;
    if (g21 === -1) return;
    A17.preventDefault();
    let m20 = g21, _22 = 0, P16 = O23 - 1, w18 = () => {
      m20 = g21 + 1, m20 > P16 && (m20 = _22);
    }, N26 = () => {
      m20 = g21 - 1, m20 < _22 && (m20 = P16);
    };
    switch (A17.key) {
      case "Home":
        m20 = _22;
        break;
      case "End":
        m20 = P16;
        break;
      case "ArrowRight":
        r18 === "horizontal" && (f21 ? w18() : N26());
        break;
      case "ArrowDown":
        r18 === "vertical" && w18();
        break;
      case "ArrowLeft":
        r18 === "horizontal" && (f21 ? N26() : w18());
        break;
      case "ArrowUp":
        r18 === "vertical" && N26();
        break;
    }
    let Q20 = m20 % O23;
    x19[Q20].ref.current?.focus();
  });
  return c5(se, { scope: e18, disabled: t18, direction: a18, orientation: r18, children: c5(E4.Slot, { scope: e18, children: c5(v2.div, { ...s16, "data-orientation": r18, ref: p15, onKeyDown: t18 ? void 0 : h23 }) }) });
});
var b2 = "AccordionItem";
var [de, D2] = R3(b2);
var G2 = n7.forwardRef((o15, i21) => {
  let { __scopeAccordion: e18, value: t18, ...a18 } = o15, r18 = I3(b2, e18), s16 = ne(b2, e18), l20 = k(e18), p15 = n5(), u20 = t18 && s16.value.includes(t18) || false, v19 = r18.disabled || o15.disabled;
  return c5(de, { scope: e18, open: u20, disabled: v19, triggerId: p15, children: c5(X2, { "data-orientation": r18.orientation, "data-state": F(u20), ...l20, ...a18, ref: i21, disabled: v19, open: u20, onOpenChange: (f21) => {
    f21 ? s16.onItemOpen(t18) : s16.onItemClose(t18);
  } }) });
});
G2.displayName = b2;
var U2 = "AccordionHeader";
var j2 = n7.forwardRef((o15, i21) => {
  let { __scopeAccordion: e18, ...t18 } = o15, a18 = I3(d3, e18), r18 = D2(U2, e18);
  return c5(v2.h3, { "data-orientation": a18.orientation, "data-state": F(r18.open), "data-disabled": r18.disabled ? "" : void 0, ...t18, ref: i21 });
});
j2.displayName = U2;
var y3 = "AccordionTrigger";
var Y3 = n7.forwardRef((o15, i21) => {
  let { __scopeAccordion: e18, ...t18 } = o15, a18 = I3(d3, e18), r18 = D2(y3, e18), s16 = ie(y3, e18), l20 = k(e18);
  return c5(E4.ItemSlot, { scope: e18, children: c5(Y2, { "aria-disabled": r18.open && !s16.collapsible || void 0, "data-orientation": a18.orientation, id: r18.triggerId, ...l20, ...t18, ref: i21 }) });
});
Y3.displayName = y3;
var q = "AccordionContent";
var B2 = n7.forwardRef((o15, i21) => {
  let { __scopeAccordion: e18, ...t18 } = o15, a18 = I3(d3, e18), r18 = D2(q, e18), s16 = k(e18);
  return c5(Z2, { role: "region", "aria-labelledby": r18.triggerId, "data-orientation": a18.orientation, ...s16, ...t18, ref: i21, style: { "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", ...o15.style } });
});
B2.displayName = q;
function F(o15) {
  return o15 ? "open" : "closed";
}
var he = H;
var xe = G2;
var _e = j2;
var Pe = Y3;
var we = B2;

// http-url:https://esm.sh/@radix-ui/react-alert-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-alert-dialog.mjs
var react_alert_dialog_exports = {};
__export(react_alert_dialog_exports, {
  Action: () => W8,
  AlertDialog: () => m11,
  AlertDialogAction: () => T6,
  AlertDialogCancel: () => O7,
  AlertDialogContent: () => _7,
  AlertDialogDescription: () => C5,
  AlertDialogOverlay: () => u8,
  AlertDialogPortal: () => R7,
  AlertDialogTitle: () => N9,
  AlertDialogTrigger: () => d7,
  Cancel: () => X8,
  Content: () => U6,
  Description: () => $8,
  Overlay: () => Q5,
  Portal: () => K5,
  Root: () => B7,
  Title: () => Z6,
  Trigger: () => J5,
  createAlertDialogScope: () => z7
});
import * as i12 from "react";

// http-url:https://esm.sh/@radix-ui/react-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dialog.mjs
var react_dialog_exports = {};
__export(react_dialog_exports, {
  Close: () => te4,
  Content: () => Q4,
  Description: () => oe3,
  Dialog: () => W7,
  DialogClose: () => te4,
  DialogContent: () => Q4,
  DialogDescription: () => oe3,
  DialogOverlay: () => z6,
  DialogPortal: () => q6,
  DialogTitle: () => ee3,
  DialogTrigger: () => Y6,
  Overlay: () => z6,
  Portal: () => q6,
  Root: () => W7,
  Title: () => ee3,
  Trigger: () => Y6,
  WarningProvider: () => Ce3,
  createDialogScope: () => ve3
});
import * as i11 from "react";

// http-url:https://esm.sh/@radix-ui/react-dismissable-layer@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dismissable-layer.mjs
import * as e8 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-callback-ref@1.1.2/X-ZXJlYWN0/es2022/react-use-callback-ref.mjs
import * as e7 from "react";
function u3(t18) {
  let c16 = e7.useRef(t18);
  return e7.useEffect(() => {
    c16.current = t18;
  }), e7.useMemo(() => (...r18) => c16.current?.(...r18), []);
}

// http-url:https://esm.sh/@radix-ui/react-use-escape-keydown@1.1.2/X-ZXJlYWN0/es2022/react-use-escape-keydown.mjs
import * as n8 from "react";
function p2(r18, e18 = globalThis?.document) {
  let t18 = u3(r18);
  n8.useEffect(() => {
    let a18 = (o15) => {
      o15.key === "Escape" && t18(o15);
    };
    return e18.addEventListener("keydown", a18, { capture: true }), () => e18.removeEventListener("keydown", a18, { capture: true });
  }, [t18, e18]);
}

// http-url:https://esm.sh/@radix-ui/react-dismissable-layer@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dismissable-layer.mjs
import { jsx as k2 } from "react/jsx-runtime";
var j3 = "DismissableLayer";
var g5 = "dismissableLayer.update";
var X3 = "dismissableLayer.pointerDownOutside";
var Y4 = "dismissableLayer.focusOutside";
var N2;
var I4 = e8.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set(), dismissableSurfaces: /* @__PURE__ */ new Set() });
var _2 = e8.forwardRef((s16, o15) => {
  let { disableOutsidePointerEvents: t18 = false, deferPointerDownOutside: a18 = false, onEscapeKeyDown: u20, onPointerDownOutside: d14, onFocusOutside: p15, onInteractOutside: v19, onDismiss: l20, ...m20 } = s16, n21 = e8.useContext(I4), [c16, P16] = e8.useState(null), f21 = c16?.ownerDocument ?? globalThis?.document, [, y20] = e8.useState({}), O23 = s(o15, (i21) => P16(i21)), h23 = Array.from(n21.layers), [L25] = [...n21.layersWithOutsidePointerEventsDisabled].slice(-1), r18 = h23.indexOf(L25), E24 = c16 ? h23.indexOf(c16) : -1, D19 = n21.layersWithOutsidePointerEventsDisabled.size > 0, b20 = E24 >= r18, w18 = e8.useRef(false), H15 = G3((i21) => {
    let R18 = i21.target;
    if (!(R18 instanceof Node)) return;
    let x19 = [...n21.branches].some((C18) => C18.contains(R18));
    !b20 || x19 || (d14?.(i21), v19?.(i21), i21.defaultPrevented || l20?.());
  }, { ownerDocument: f21, deferPointerDownOutside: a18, isDeferredPointerDownOutsideRef: w18, dismissableSurfaces: n21.dismissableSurfaces }), B19 = J((i21) => {
    if (a18 && w18.current) return;
    let R18 = i21.target;
    [...n21.branches].some((C18) => C18.contains(R18)) || (p15?.(i21), v19?.(i21), i21.defaultPrevented || l20?.());
  }, f21);
  return p2((i21) => {
    E24 === n21.layers.size - 1 && (u20?.(i21), !i21.defaultPrevented && l20 && (i21.preventDefault(), l20()));
  }, f21), e8.useEffect(() => {
    if (c16) return t18 && (n21.layersWithOutsidePointerEventsDisabled.size === 0 && (N2 = f21.body.style.pointerEvents, f21.body.style.pointerEvents = "none"), n21.layersWithOutsidePointerEventsDisabled.add(c16)), n21.layers.add(c16), T(), () => {
      t18 && (n21.layersWithOutsidePointerEventsDisabled.delete(c16), n21.layersWithOutsidePointerEventsDisabled.size === 0 && (f21.body.style.pointerEvents = N2));
    };
  }, [c16, f21, t18, n21]), e8.useEffect(() => () => {
    c16 && (n21.layers.delete(c16), n21.layersWithOutsidePointerEventsDisabled.delete(c16), T());
  }, [c16, n21]), e8.useEffect(() => {
    let i21 = () => y20({});
    return document.addEventListener(g5, i21), () => document.removeEventListener(g5, i21);
  }, []), k2(v2.div, { ...m20, ref: O23, style: { pointerEvents: D19 ? b20 ? "auto" : "none" : void 0, ...s16.style }, onFocusCapture: f2(s16.onFocusCapture, B19.onFocusCapture), onBlurCapture: f2(s16.onBlurCapture, B19.onBlurCapture), onPointerDownCapture: f2(s16.onPointerDownCapture, H15.onPointerDownCapture) });
});
_2.displayName = j3;
var q2 = "DismissableLayerBranch";
var U3 = e8.forwardRef((s16, o15) => {
  let t18 = e8.useContext(I4), a18 = e8.useRef(null), u20 = s(o15, a18);
  return e8.useEffect(() => {
    let d14 = a18.current;
    if (d14) return t18.branches.add(d14), () => {
      t18.branches.delete(d14);
    };
  }, [t18.branches]), k2(v2.div, { ...s16, ref: u20 });
});
U3.displayName = q2;
function ne2() {
  let s16 = e8.useContext(I4), [o15, t18] = e8.useState(null);
  return e8.useEffect(() => {
    if (o15) return s16.dismissableSurfaces.add(o15), () => {
      s16.dismissableSurfaces.delete(o15);
    };
  }, [o15, s16.dismissableSurfaces]), t18;
}
function G3(s16, o15) {
  let { ownerDocument: t18 = globalThis?.document, deferPointerDownOutside: a18 = false, isDeferredPointerDownOutsideRef: u20, dismissableSurfaces: d14 } = o15, p15 = u3(s16), v19 = e8.useRef(false), l20 = e8.useRef(false), m20 = e8.useRef(/* @__PURE__ */ new Map()), n21 = e8.useRef(() => {
  });
  return e8.useEffect(() => {
    function c16() {
      l20.current = false, u20.current = false, m20.current.clear();
    }
    function P16() {
      return Array.from(m20.current.values()).some(Boolean);
    }
    function f21(r18) {
      if (!l20.current) return;
      let E24 = r18.target;
      E24 instanceof Node && [...d14].some((b20) => b20.contains(E24)) || m20.current.set(r18.type, true), r18.type === "click" && window.setTimeout(() => {
        l20.current && n21.current();
      }, 0);
    }
    function y20(r18) {
      l20.current && m20.current.set(r18.type, false);
    }
    let O23 = (r18) => {
      if (r18.target && !v19.current) {
        let D19 = function() {
          t18.removeEventListener("click", n21.current);
          let w18 = P16();
          c16(), w18 || z2(X3, p15, b20, { discrete: true });
        };
        var E24 = D19;
        let b20 = { originalEvent: r18 };
        l20.current = true, u20.current = a18 && r18.button === 0, m20.current.clear(), !a18 || r18.button !== 0 ? D19() : (t18.removeEventListener("click", n21.current), n21.current = D19, t18.addEventListener("click", n21.current, { once: true }));
      } else t18.removeEventListener("click", n21.current), c16();
      v19.current = false;
    }, h23 = ["pointerup", "mousedown", "mouseup", "touchstart", "touchend", "click"];
    for (let r18 of h23) t18.addEventListener(r18, f21, true), t18.addEventListener(r18, y20);
    let L25 = window.setTimeout(() => {
      t18.addEventListener("pointerdown", O23);
    }, 0);
    return () => {
      window.clearTimeout(L25), t18.removeEventListener("pointerdown", O23), t18.removeEventListener("click", n21.current);
      for (let r18 of h23) t18.removeEventListener(r18, f21, true), t18.removeEventListener(r18, y20);
    };
  }, [t18, p15, a18, u20, d14]), { onPointerDownCapture: () => v19.current = true };
}
function J(s16, o15 = globalThis?.document) {
  let t18 = u3(s16), a18 = e8.useRef(false);
  return e8.useEffect(() => {
    let u20 = (d14) => {
      d14.target && !a18.current && z2(Y4, t18, { originalEvent: d14 }, { discrete: false });
    };
    return o15.addEventListener("focusin", u20), () => o15.removeEventListener("focusin", u20);
  }, [o15, t18]), { onFocusCapture: () => a18.current = true, onBlurCapture: () => a18.current = false };
}
function T() {
  let s16 = new CustomEvent(g5);
  document.dispatchEvent(s16);
}
function z2(s16, o15, t18, { discrete: a18 }) {
  let u20 = t18.originalEvent.target, d14 = new CustomEvent(s16, { bubbles: false, cancelable: true, detail: t18 });
  o15 && u20.addEventListener(s16, o15, { once: true }), a18 ? R(u20, d14) : u20.dispatchEvent(d14);
}
var se2 = _2;
var re3 = U3;

// http-url:https://esm.sh/@radix-ui/react-focus-scope@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-focus-scope.mjs
import * as c6 from "react";
import { jsx as x2 } from "react/jsx-runtime";
var y4 = "focusScope.autoFocusOnMount";
var N3 = "focusScope.autoFocusOnUnmount";
var O3 = { bubbles: false, cancelable: true };
var D3 = "FocusScope";
var L4 = c6.forwardRef((e18, t18) => {
  let { loop: n21 = false, trapped: s16 = false, onMountAutoFocus: v19, onUnmountAutoFocus: U16, ...A17 } = e18, [o15, M16] = c6.useState(null), E24 = u3(v19), F11 = u3(U16), b20 = c6.useRef(null), P16 = s(t18, (u20) => M16(u20)), a18 = c6.useRef({ paused: false, pause() {
    this.paused = true;
  }, resume() {
    this.paused = false;
  } }).current;
  c6.useEffect(() => {
    if (s16) {
      let d14 = function(p15) {
        if (a18.paused || !o15) return;
        let m20 = p15.target;
        o15.contains(m20) ? b20.current = m20 : i4(b20.current, { select: true });
      }, f21 = function(p15) {
        if (a18.paused || !o15) return;
        let m20 = p15.relatedTarget;
        m20 !== null && (o15.contains(m20) || i4(b20.current, { select: true }));
      }, l20 = function(p15) {
        if (document.activeElement === document.body) for (let K20 of p15) K20.removedNodes.length > 0 && i4(o15);
      };
      var u20 = d14, h23 = f21, r18 = l20;
      document.addEventListener("focusin", d14), document.addEventListener("focusout", f21);
      let T20 = new MutationObserver(l20);
      return o15 && T20.observe(o15, { childList: true, subtree: true }), () => {
        document.removeEventListener("focusin", d14), document.removeEventListener("focusout", f21), T20.disconnect();
      };
    }
  }, [s16, o15, a18.paused]), c6.useEffect(() => {
    if (o15) {
      C2.add(a18);
      let u20 = document.activeElement;
      if (!o15.contains(u20)) {
        let r18 = new CustomEvent(y4, O3);
        o15.addEventListener(y4, E24), o15.dispatchEvent(r18), r18.defaultPrevented || (H2(z3(g6(o15)), { select: true }), document.activeElement === u20 && i4(o15));
      }
      return () => {
        o15.removeEventListener(y4, E24), setTimeout(() => {
          let r18 = new CustomEvent(N3, O3);
          o15.addEventListener(N3, F11), o15.dispatchEvent(r18), r18.defaultPrevented || i4(u20 ?? document.body, { select: true }), o15.removeEventListener(N3, F11), C2.remove(a18);
        }, 0);
      };
    }
  }, [o15, E24, F11, a18]);
  let _22 = c6.useCallback((u20) => {
    if (!n21 && !s16 || a18.paused) return;
    let h23 = u20.key === "Tab" && !u20.altKey && !u20.ctrlKey && !u20.metaKey, r18 = document.activeElement;
    if (h23 && r18) {
      let d14 = u20.currentTarget, [f21, l20] = V3(d14);
      f21 && l20 ? !u20.shiftKey && r18 === l20 ? (u20.preventDefault(), n21 && i4(f21, { select: true })) : u20.shiftKey && r18 === f21 && (u20.preventDefault(), n21 && i4(l20, { select: true })) : r18 === d14 && u20.preventDefault();
    }
  }, [n21, s16, a18.paused]);
  return x2(v2.div, { tabIndex: -1, ...A17, ref: P16, onKeyDown: _22 });
});
L4.displayName = D3;
function H2(e18, { select: t18 = false } = {}) {
  let n21 = document.activeElement;
  for (let s16 of e18) if (i4(s16, { select: t18 }), document.activeElement !== n21) return;
}
function V3(e18) {
  let t18 = g6(e18), n21 = R4(t18, e18), s16 = R4(t18.reverse(), e18);
  return [n21, s16];
}
function g6(e18) {
  let t18 = [], n21 = document.createTreeWalker(e18, NodeFilter.SHOW_ELEMENT, { acceptNode: (s16) => {
    let v19 = s16.tagName === "INPUT" && s16.type === "hidden";
    return s16.disabled || s16.hidden || v19 ? NodeFilter.FILTER_SKIP : s16.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n21.nextNode(); ) t18.push(n21.currentNode);
  return t18;
}
function R4(e18, t18) {
  for (let n21 of e18) if (!W3(n21, { upTo: t18 })) return n21;
}
function W3(e18, { upTo: t18 }) {
  if (getComputedStyle(e18).visibility === "hidden") return true;
  for (; e18; ) {
    if (t18 !== void 0 && e18 === t18) return false;
    if (getComputedStyle(e18).display === "none") return true;
    e18 = e18.parentElement;
  }
  return false;
}
function j4(e18) {
  return e18 instanceof HTMLInputElement && "select" in e18;
}
function i4(e18, { select: t18 = false } = {}) {
  if (e18 && e18.focus) {
    let n21 = document.activeElement;
    e18.focus({ preventScroll: true }), e18 !== n21 && j4(e18) && t18 && e18.select();
  }
}
var C2 = q3();
function q3() {
  let e18 = [];
  return { add(t18) {
    let n21 = e18[0];
    t18 !== n21 && n21?.pause(), e18 = I5(e18, t18), e18.unshift(t18);
  }, remove(t18) {
    e18 = I5(e18, t18), e18[0]?.resume();
  } };
}
function I5(e18, t18) {
  let n21 = [...e18], s16 = n21.indexOf(t18);
  return s16 !== -1 && n21.splice(s16, 1), n21;
}
function z3(e18) {
  return e18.filter((t18) => t18.tagName !== "A");
}

// http-url:https://esm.sh/@radix-ui/react-portal@1.1.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-portal.mjs
var react_portal_exports = {};
__export(react_portal_exports, {
  Portal: () => e9,
  Root: () => v6
});
import * as t4 from "react";
import * as r3 from "react-dom";
import { jsx as p3 } from "react/jsx-runtime";
var u4 = "Portal";
var e9 = t4.forwardRef((a18, c16) => {
  let { container: i21, ...n21 } = a18, [m20, s16] = t4.useState(false);
  e4(() => s16(true), []);
  let o15 = i21 || m20 && globalThis?.document?.body;
  return o15 ? r3.createPortal(p3(v2.div, { ...n21, ref: c16 }), o15) : null;
});
e9.displayName = u4;
var v6 = e9;

// http-url:https://esm.sh/@radix-ui/react-focus-guards@1.1.4/X-ZXJlYWN0/es2022/react-focus-guards.mjs
import * as s5 from "react";
var n9 = 0;
var t5 = null;
function a3() {
  s5.useEffect(() => {
    t5 || (t5 = { start: r4(), end: r4() });
    let { start: e18, end: o15 } = t5;
    return document.body.firstElementChild !== e18 && document.body.insertAdjacentElement("afterbegin", e18), document.body.lastElementChild !== o15 && document.body.insertAdjacentElement("beforeend", o15), n9++, () => {
      n9 === 1 && (t5?.start.remove(), t5?.end.remove(), t5 = null), n9 = Math.max(0, n9 - 1);
    };
  }, []);
}
function r4() {
  let e18 = document.createElement("span");
  return e18.setAttribute("data-radix-focus-guard", ""), e18.tabIndex = 0, e18.style.outline = "none", e18.style.opacity = "0", e18.style.position = "fixed", e18.style.pointerEvents = "none", e18;
}

// http-url:https://esm.sh/tslib@2.8.1/es2022/tslib.mjs
var v7 = function() {
  return v7 = Object.assign || function(t18) {
    for (var r18, n21 = 1, i21 = arguments.length; n21 < i21; n21++) {
      r18 = arguments[n21];
      for (var o15 in r18) Object.prototype.hasOwnProperty.call(r18, o15) && (t18[o15] = r18[o15]);
    }
    return t18;
  }, v7.apply(this, arguments);
};
function S3(e18, t18) {
  var r18 = {};
  for (var n21 in e18) Object.prototype.hasOwnProperty.call(e18, n21) && t18.indexOf(n21) < 0 && (r18[n21] = e18[n21]);
  if (e18 != null && typeof Object.getOwnPropertySymbols == "function") for (var i21 = 0, n21 = Object.getOwnPropertySymbols(e18); i21 < n21.length; i21++) t18.indexOf(n21[i21]) < 0 && Object.prototype.propertyIsEnumerable.call(e18, n21[i21]) && (r18[n21[i21]] = e18[n21[i21]]);
  return r18;
}
function V4(e18, t18, r18) {
  if (r18 || arguments.length === 2) for (var n21 = 0, i21 = t18.length, o15; n21 < i21; n21++) (o15 || !(n21 in t18)) && (o15 || (o15 = Array.prototype.slice.call(t18, 0, n21)), o15[n21] = t18[n21]);
  return e18.concat(o15 || Array.prototype.slice.call(t18));
}

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/Combination.mjs
import * as e15 from "react";

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/UI.mjs
import * as e12 from "react";

// http-url:https://esm.sh/react-remove-scroll-bar@2.3.8/X-ZXJlYWN0/es2022/constants.mjs
var r5 = "right-scroll-bar-position";
var a4 = "width-before-scroll-bar";

// http-url:https://esm.sh/use-callback-ref@1.3.3/X-ZXJlYWN0/es2022/use-callback-ref.mjs
import { useState as k3 } from "react";
import * as i5 from "react";
function o5(r18, e18) {
  return typeof r18 == "function" ? r18(e18) : r18 && (r18.current = e18), r18;
}
function u5(r18, e18) {
  var t18 = k3(function() {
    return { value: r18, callback: e18, facade: { get current() {
      return t18.value;
    }, set current(n21) {
      var a18 = t18.value;
      a18 !== n21 && (t18.value = n21, t18.callback(n21, a18));
    } } };
  })[0];
  return t18.callback = e18, t18.facade;
}
var x3 = typeof window < "u" ? i5.useLayoutEffect : i5.useEffect;
var s6 = /* @__PURE__ */ new WeakMap();
function v8(r18, e18) {
  var t18 = u5(e18 || null, function(n21) {
    return r18.forEach(function(a18) {
      return o5(a18, n21);
    });
  });
  return x3(function() {
    var n21 = s6.get(t18);
    if (n21) {
      var a18 = new Set(n21), l20 = new Set(r18), R18 = t18.current;
      a18.forEach(function(f21) {
        l20.has(f21) || o5(f21, null);
      }), l20.forEach(function(f21) {
        a18.has(f21) || o5(f21, R18);
      });
    }
    s6.set(t18, r18);
  }, [r18]), t18;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/exports.mjs
import * as i6 from "react";
var a5 = function(r18) {
  var e18 = r18.sideCar, o15 = S3(r18, ["sideCar"]);
  if (!e18) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var t18 = e18.read();
  if (!t18) throw new Error("Sidecar medium not found");
  return i6.createElement(t18, v7({}, o15));
};
a5.isSideCarExport = true;
function p4(r18, e18) {
  return r18.useMedium(e18), a5;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/hoc.mjs
import * as i8 from "react";

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/hook.mjs
import { useState as l5, useEffect as p5 } from "react";

// http-url:https://esm.sh/node/async_hooks.mjs
var c7 = class {
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
  enterWith(e18) {
    this._enterStore = e18;
  }
  run(e18, r18, ...t18) {
    this._currentStore = e18;
    let n21 = r18(...t18);
    return this._currentStore = void 0, n21;
  }
  exit(e18, ...r18) {
    let t18 = this._currentStore;
    this._currentStore = void 0;
    let n21 = e18(...r18);
    return this._currentStore = t18, n21;
  }
  static snapshot() {
    throw new Error("[unenv] `AsyncLocalStorage.snapshot` is not implemented!");
  }
};
var S4 = globalThis.AsyncLocalStorage || c7;
var R5 = Symbol("init");
var a6 = Symbol("before");
var o6 = Symbol("after");
var i7 = Symbol("destroy");
var A3 = Symbol("promiseResolve");
var T2 = class {
  __unenv__ = true;
  _enabled = false;
  _callbacks = {};
  constructor(e18 = {}) {
    this._callbacks = e18;
  }
  enable() {
    return this._enabled = true, this;
  }
  disable() {
    return this._enabled = false, this;
  }
  get [R5]() {
    return this._callbacks.init;
  }
  get [a6]() {
    return this._callbacks.before;
  }
  get [o6]() {
    return this._callbacks.after;
  }
  get [i7]() {
    return this._callbacks.destroy;
  }
  get [A3]() {
    return this._callbacks.promiseResolve;
  }
};
var s7 = function() {
  return 0;
};
var I6 = Object.assign(/* @__PURE__ */ Object.create(null), { NONE: 0, DIRHANDLE: 1, DNSCHANNEL: 2, ELDHISTOGRAM: 3, FILEHANDLE: 4, FILEHANDLECLOSEREQ: 5, BLOBREADER: 6, FSEVENTWRAP: 7, FSREQCALLBACK: 8, FSREQPROMISE: 9, GETADDRINFOREQWRAP: 10, GETNAMEINFOREQWRAP: 11, HEAPSNAPSHOT: 12, HTTP2SESSION: 13, HTTP2STREAM: 14, HTTP2PING: 15, HTTP2SETTINGS: 16, HTTPINCOMINGMESSAGE: 17, HTTPCLIENTREQUEST: 18, JSSTREAM: 19, JSUDPWRAP: 20, MESSAGEPORT: 21, PIPECONNECTWRAP: 22, PIPESERVERWRAP: 23, PIPEWRAP: 24, PROCESSWRAP: 25, PROMISE: 26, QUERYWRAP: 27, QUIC_ENDPOINT: 28, QUIC_LOGSTREAM: 29, QUIC_PACKET: 30, QUIC_SESSION: 31, QUIC_STREAM: 32, QUIC_UDP: 33, SHUTDOWNWRAP: 34, SIGNALWRAP: 35, STATWATCHER: 36, STREAMPIPE: 37, TCPCONNECTWRAP: 38, TCPSERVERWRAP: 39, TCPWRAP: 40, TTYWRAP: 41, UDPSENDWRAP: 42, UDPWRAP: 43, SIGINTWATCHDOG: 44, WORKER: 45, WORKERHEAPSNAPSHOT: 46, WRITEWRAP: 47, ZLIB: 48, CHECKPRIMEREQUEST: 49, PBKDF2REQUEST: 50, KEYPAIRGENREQUEST: 51, KEYGENREQUEST: 52, KEYEXPORTREQUEST: 53, CIPHERREQUEST: 54, DERIVEBITSREQUEST: 55, HASHREQUEST: 56, RANDOMBYTESREQUEST: 57, RANDOMPRIMEREQUEST: 58, SCRYPTREQUEST: 59, SIGNREQUEST: 60, TLSWRAP: 61, VERIFYREQUEST: 62 });
var _3 = 100;
var y5 = class {
  __unenv__ = true;
  type;
  _asyncId;
  _triggerAsyncId;
  constructor(e18, r18 = s7()) {
    this.type = e18, this._asyncId = -1 * _3++, this._triggerAsyncId = typeof r18 == "number" ? r18 : r18?.triggerAsyncId;
  }
  static bind(e18, r18, t18) {
    return new E5(r18 ?? "anonymous").bind(e18);
  }
  bind(e18, r18) {
    let t18 = (...n21) => this.runInAsyncScope(e18, r18, ...n21);
    return t18.asyncResource = this, t18;
  }
  runInAsyncScope(e18, r18, ...t18) {
    return e18.apply(r18, t18);
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
var E5 = globalThis.AsyncResource || y5;

// http-url:https://esm.sh/node/events.mjs
function te2(e18) {
  return new Error(`[unenv] ${e18} is not implemented yet!`);
}
function w4(e18) {
  return Object.assign(() => {
    throw te2(e18);
  }, { __unenv__: true });
}
var y6 = 10;
var ne3 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
}).prototype);
var G4 = (e18, t18) => e18;
var _4 = Error;
var ie2 = Error;
var v9 = Error;
var b3 = Error;
var se3 = Error;
var C3 = Symbol.for("nodejs.rejection");
var f5 = Symbol.for("kCapture");
var M = Symbol.for("events.errorMonitor");
var d4 = Symbol.for("shapeMode");
var x4 = Symbol.for("events.maxEventTargetListeners");
var oe = Symbol.for("kEnhanceStackBeforeInspector");
var ue = Symbol.for("nodejs.watermarkData");
var S5 = Symbol.for("kEventEmitter");
var h4 = Symbol.for("kAsyncResource");
var le2 = Symbol.for("kFirstEventParam");
var P3 = Symbol.for("kResistStopPropagation");
var W4 = Symbol.for("events.maxEventTargetListenersWarned");
var U4 = class E6 {
  _events = void 0;
  _eventsCount = 0;
  _maxListeners = y6;
  [f5] = false;
  [d4] = false;
  static captureRejectionSymbol = C3;
  static errorMonitor = M;
  static kMaxEventTargetListeners = x4;
  static kMaxEventTargetListenersWarned = W4;
  static usingDomains = false;
  static get on() {
    return fe2;
  }
  static get once() {
    return he2;
  }
  static get getEventListeners() {
    return ve;
  }
  static get getMaxListeners() {
    return me;
  }
  static get addAbortListener() {
    return X4;
  }
  static get EventEmitterAsyncResource() {
    return ae2;
  }
  static get EventEmitter() {
    return E6;
  }
  static setMaxListeners(t18 = y6, ...r18) {
    if (r18.length === 0) y6 = t18;
    else for (let n21 of r18) if (J2(n21)) n21[x4] = t18, n21[W4] = false;
    else if (typeof n21.setMaxListeners == "function") n21.setMaxListeners(t18);
    else throw new v9("eventTargets", ["EventEmitter", "EventTarget"], n21);
  }
  static listenerCount(t18, r18) {
    if (typeof t18.listenerCount == "function") return t18.listenerCount(r18);
    E6.prototype.listenerCount.call(t18, r18);
  }
  static init() {
    throw new Error("EventEmitter.init() is not implemented.");
  }
  static get captureRejections() {
    return this[f5];
  }
  static set captureRejections(t18) {
    this[f5] = t18;
  }
  static get defaultMaxListeners() {
    return y6;
  }
  static set defaultMaxListeners(t18) {
    y6 = t18;
  }
  constructor(t18) {
    this._events === void 0 || this._events === Object.getPrototypeOf(this)._events ? (this._events = { __proto__: null }, this._eventsCount = 0, this[d4] = false) : this[d4] = true, this._maxListeners = this._maxListeners || void 0, t18?.captureRejections ? this[f5] = !!t18.captureRejections : this[f5] = E6.prototype[f5];
  }
  setMaxListeners(t18) {
    return this._maxListeners = t18, this;
  }
  getMaxListeners() {
    return T3(this);
  }
  emit(t18, ...r18) {
    let n21 = t18 === "error", i21 = this._events;
    if (i21 !== void 0) n21 && i21[M] !== void 0 && this.emit(M, ...r18), n21 = n21 && i21.error === void 0;
    else if (!n21) return false;
    if (n21) {
      let s16;
      if (r18.length > 0 && (s16 = r18[0]), s16 instanceof Error) {
        try {
          let c16 = {};
          Error.captureStackTrace?.(c16, E6.prototype.emit), Object.defineProperty(s16, oe, { __proto__: null, value: Function.prototype.bind(de2, this, s16, c16), configurable: true });
        } catch {
        }
        throw s16;
      }
      let l20;
      try {
        l20 = G4(s16);
      } catch {
        l20 = s16;
      }
      let a18 = new ie2(l20);
      throw a18.context = s16, a18;
    }
    let o15 = i21[t18];
    if (o15 === void 0) return false;
    if (typeof o15 == "function") {
      let s16 = o15.apply(this, r18);
      s16 != null && K2(this, s16, t18, r18);
    } else {
      let s16 = o15.length, l20 = I7(o15);
      for (let a18 = 0; a18 < s16; ++a18) {
        let c16 = l20[a18].apply(this, r18);
        c16 != null && K2(this, c16, t18, r18);
      }
    }
    return true;
  }
  addListener(t18, r18) {
    return q4(this, t18, r18, false), this;
  }
  on(t18, r18) {
    return this.addListener(t18, r18);
  }
  prependListener(t18, r18) {
    return q4(this, t18, r18, true), this;
  }
  once(t18, r18) {
    return this.on(t18, z4(this, t18, r18)), this;
  }
  prependOnceListener(t18, r18) {
    return this.prependListener(t18, z4(this, t18, r18)), this;
  }
  removeListener(t18, r18) {
    let n21 = this._events;
    if (n21 === void 0) return this;
    let i21 = n21[t18];
    if (i21 === void 0) return this;
    if (i21 === r18 || i21.listener === r18) this._eventsCount -= 1, this[d4] ? n21[t18] = void 0 : this._eventsCount === 0 ? this._events = { __proto__: null } : (delete n21[t18], n21.removeListener && this.emit("removeListener", t18, i21.listener || r18));
    else if (typeof i21 != "function") {
      let o15 = -1;
      for (let s16 = i21.length - 1; s16 >= 0; s16--) if (i21[s16] === r18 || i21[s16].listener === r18) {
        o15 = s16;
        break;
      }
      if (o15 < 0) return this;
      o15 === 0 ? i21.shift() : ge(i21, o15), i21.length === 1 && (n21[t18] = i21[0]), n21.removeListener !== void 0 && this.emit("removeListener", t18, r18);
    }
    return this;
  }
  off(t18, r18) {
    return this.removeListener(t18, r18);
  }
  removeAllListeners(t18) {
    let r18 = this._events;
    if (r18 === void 0) return this;
    if (r18.removeListener === void 0) return arguments.length === 0 ? (this._events = { __proto__: null }, this._eventsCount = 0) : r18[t18] !== void 0 && (--this._eventsCount === 0 ? this._events = { __proto__: null } : delete r18[t18]), this[d4] = false, this;
    if (arguments.length === 0) {
      for (let i21 of Reflect.ownKeys(r18)) i21 !== "removeListener" && this.removeAllListeners(i21);
      return this.removeAllListeners("removeListener"), this._events = { __proto__: null }, this._eventsCount = 0, this[d4] = false, this;
    }
    let n21 = r18[t18];
    if (typeof n21 == "function") this.removeListener(t18, n21);
    else if (n21 !== void 0) for (let i21 = n21.length - 1; i21 >= 0; i21--) this.removeListener(t18, n21[i21]);
    return this;
  }
  listeners(t18) {
    return B3(this, t18, true);
  }
  rawListeners(t18) {
    return B3(this, t18, false);
  }
  eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  }
  listenerCount(t18, r18) {
    let n21 = this._events;
    if (n21 !== void 0) {
      let i21 = n21[t18];
      if (typeof i21 == "function") return r18 != null ? r18 === i21 || r18 === i21.listener ? 1 : 0 : 1;
      if (i21 !== void 0) {
        if (r18 != null) {
          let o15 = 0;
          for (let s16 = 0, l20 = i21.length; s16 < l20; s16++) (i21[s16] === r18 || i21[s16].listener === r18) && o15++;
          return o15;
        }
        return i21.length;
      }
    }
    return 0;
  }
};
var ae2 = class extends U4 {
  constructor(e18) {
    let t18;
    typeof e18 == "string" ? (t18 = e18, e18 = void 0) : t18 = e18?.name || new.target.name, super(e18), this[h4] = new ce2(this, t18, e18);
  }
  emit(e18, ...t18) {
    if (this[h4] === void 0) throw new _4("EventEmitterAsyncResource");
    let { asyncResource: r18 } = this;
    return Array.prototype.unshift(t18, super.emit, this, e18), Reflect.apply(r18.runInAsyncScope, r18, t18);
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
var ce2 = class extends E5 {
  constructor(e18, t18, r18) {
    super(t18, r18), this[S5] = e18;
  }
  get eventEmitter() {
    if (this[S5] === void 0) throw new _4("EventEmitterReferencingAsyncResource");
    return this[S5];
  }
};
var fe2 = function(e18, t18, r18 = {}) {
  let n21 = r18.signal;
  if (n21?.aborted) throw new b3(void 0, { cause: n21?.reason });
  let i21 = r18.highWaterMark ?? r18.highWatermark ?? Number.MAX_SAFE_INTEGER, o15 = r18.lowWaterMark ?? r18.lowWatermark ?? 1, s16 = new N4(), l20 = new N4(), a18 = false, c16 = null, m20 = false, p15 = 0, Q20 = Object.setPrototypeOf({ next() {
    if (p15) {
      let u20 = s16.shift();
      return p15--, a18 && p15 < o15 && (e18.resume?.(), a18 = false), Promise.resolve(k4(u20, false));
    }
    if (c16) {
      let u20 = Promise.reject(c16);
      return c16 = null, u20;
    }
    return m20 ? L25() : new Promise(function(u20, ee15) {
      l20.push({ resolve: u20, reject: ee15 });
    });
  }, return() {
    return L25();
  }, throw(u20) {
    if (!u20 || !(u20 instanceof Error)) throw new v9("EventEmitter.AsyncIterator", "Error", u20);
    R18(u20);
  }, [Symbol.asyncIterator]() {
    return this;
  }, [ue]: { get size() {
    return p15;
  }, get low() {
    return o15;
  }, get high() {
    return i21;
  }, get isPaused() {
    return a18;
  } } }, ne3), { addEventListener: A17, removeAll: V20 } = Ee();
  A17(e18, t18, r18[le2] ? $20 : function(...u20) {
    return $20(u20);
  }), t18 !== "error" && typeof e18.on == "function" && A17(e18, "error", R18);
  let F11 = r18?.close;
  if (F11?.length) for (let u20 of F11) A17(e18, u20, L25);
  let Y19 = n21 ? X4(n21, Z18) : null;
  return Q20;
  function Z18() {
    R18(new b3(void 0, { cause: n21?.reason }));
  }
  function $20(u20) {
    l20.isEmpty() ? (p15++, !a18 && p15 > i21 && (a18 = true, e18.pause?.()), s16.push(u20)) : l20.shift().resolve(k4(u20, false));
  }
  function R18(u20) {
    l20.isEmpty() ? c16 = u20 : l20.shift().reject(u20), L25();
  }
  function L25() {
    Y19?.[Symbol.dispose](), V20(), m20 = true;
    let u20 = k4(void 0, true);
    for (; !l20.isEmpty(); ) l20.shift().resolve(u20);
    return Promise.resolve(u20);
  }
};
var he2 = async function(e18, t18, r18 = {}) {
  let n21 = r18?.signal;
  if (n21?.aborted) throw new b3(void 0, { cause: n21?.reason });
  return new Promise((i21, o15) => {
    let s16 = (m20) => {
      typeof e18.removeListener == "function" && e18.removeListener(t18, l20), n21 != null && g7(n21, "abort", c16), o15(m20);
    }, l20 = (...m20) => {
      typeof e18.removeListener == "function" && e18.removeListener("error", s16), n21 != null && g7(n21, "abort", c16), i21(m20);
    }, a18 = { __proto__: null, once: true, [P3]: true };
    O4(e18, t18, l20, a18), t18 !== "error" && typeof e18.once == "function" && e18.once("error", s16);
    function c16() {
      g7(e18, t18, l20), g7(e18, "error", s16), o15(new b3(void 0, { cause: n21?.reason }));
    }
    n21 != null && O4(n21, "abort", c16, { __proto__: null, once: true, [P3]: true });
  });
};
var X4 = function(e18, t18) {
  if (e18 === void 0) throw new v9("signal", "AbortSignal", e18);
  let r18;
  return e18.aborted ? queueMicrotask(() => t18()) : (e18.addEventListener("abort", t18, { __proto__: null, once: true, [P3]: true }), r18 = () => {
    e18.removeEventListener("abort", t18);
  }), { __proto__: null, [Symbol.dispose]() {
    r18?.();
  } };
};
var ve = function(e18, t18) {
  if (typeof e18.listeners == "function") return e18.listeners(t18);
  if (J2(e18)) {
    let r18 = e18[kEvents].get(t18), n21 = [], i21 = r18?.next;
    for (; i21?.listener !== void 0; ) {
      let o15 = i21.listener?.deref ? i21.listener.deref() : i21.listener;
      n21.push(o15), i21 = i21.next;
    }
    return n21;
  }
  throw new v9("emitter", ["EventEmitter", "EventTarget"], e18);
};
var me = function(e18) {
  if (typeof e18?.getMaxListeners == "function") return T3(e18);
  if (e18?.[x4]) return e18[x4];
  throw new v9("emitter", ["EventEmitter", "EventTarget"], e18);
};
var H3 = 2048;
var j5 = H3 - 1;
var D4 = class {
  bottom;
  top;
  list;
  next;
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(H3), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & j5) === this.bottom;
  }
  push(e18) {
    this.list[this.top] = e18, this.top = this.top + 1 & j5;
  }
  shift() {
    let e18 = this.list[this.bottom];
    return e18 === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & j5, e18);
  }
};
var N4 = class {
  head;
  tail;
  constructor() {
    this.head = this.tail = new D4();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e18) {
    this.head.isFull() && (this.head = this.head.next = new D4()), this.head.push(e18);
  }
  shift() {
    let e18 = this.tail, t18 = e18.shift();
    return e18.isEmpty() && e18.next !== null && (this.tail = e18.next, e18.next = null), t18;
  }
};
function J2(e18) {
  return typeof e18?.addEventListener == "function";
}
function K2(e18, t18, r18, n21) {
  if (e18[f5]) try {
    let i21 = t18.then;
    typeof i21 == "function" && i21.call(t18, void 0, function(o15) {
      setTimeout(pe, 0, e18, o15, r18, n21);
    });
  } catch (i21) {
    e18.emit("error", i21);
  }
}
function pe(e18, t18, r18, n21) {
  if (typeof e18[C3] == "function") e18[C3](t18, r18, ...n21);
  else {
    let i21 = e18[f5];
    try {
      e18[f5] = false, e18.emit("error", t18);
    } finally {
      e18[f5] = i21;
    }
  }
}
function T3(e18) {
  return e18._maxListeners === void 0 ? y6 : e18._maxListeners;
}
function de2(e18, t18) {
  let r18 = "";
  try {
    let { name: o15 } = this.constructor;
    o15 !== "EventEmitter" && (r18 = ` on ${o15} instance`);
  } catch {
  }
  let n21 = `
Emitted 'error' event${r18} at:
`, i21 = (t18.stack || "").split(`
`).slice(1);
  return e18.stack + n21 + i21.join(`
`);
}
function q4(e18, t18, r18, n21) {
  let i21, o15, s16;
  if (o15 = e18._events, o15 === void 0 ? (o15 = e18._events = { __proto__: null }, e18._eventsCount = 0) : (o15.newListener !== void 0 && (e18.emit("newListener", t18, r18.listener ?? r18), o15 = e18._events), s16 = o15[t18]), s16 === void 0) o15[t18] = r18, ++e18._eventsCount;
  else if (typeof s16 == "function" ? s16 = o15[t18] = n21 ? [r18, s16] : [s16, r18] : n21 ? s16.unshift(r18) : s16.push(r18), i21 = T3(e18), i21 > 0 && s16.length > i21 && !s16.warned) {
    s16.warned = true;
    let l20 = new se3(`Possible EventEmitter memory leak detected. ${s16.length} ${String(t18)} listeners added to ${G4(e18, { depth: -1 })}. MaxListeners is ${i21}. Use emitter.setMaxListeners() to increase limit`, { name: "MaxListenersExceededWarning", emitter: e18, type: t18, count: s16.length });
    console.warn(l20);
  }
  return e18;
}
function ye() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function z4(e18, t18, r18) {
  let n21 = { fired: false, wrapFn: void 0, target: e18, type: t18, listener: r18 }, i21 = ye.bind(n21);
  return i21.listener = r18, n21.wrapFn = i21, i21;
}
function B3(e18, t18, r18) {
  let n21 = e18._events;
  if (n21 === void 0) return [];
  let i21 = n21[t18];
  return i21 === void 0 ? [] : typeof i21 == "function" ? r18 ? [i21.listener || i21] : [i21] : r18 ? _e2(i21) : I7(i21);
}
function I7(e18) {
  switch (e18.length) {
    case 2:
      return [e18[0], e18[1]];
    case 3:
      return [e18[0], e18[1], e18[2]];
    case 4:
      return [e18[0], e18[1], e18[2], e18[3]];
    case 5:
      return [e18[0], e18[1], e18[2], e18[3], e18[4]];
    case 6:
      return [e18[0], e18[1], e18[2], e18[3], e18[4], e18[5]];
  }
  return Array.prototype.slice.call(e18);
}
function _e2(e18) {
  let t18 = I7(e18);
  for (let r18 = 0; r18 < t18.length; ++r18) {
    let n21 = t18[r18].listener;
    typeof n21 == "function" && (t18[r18] = n21);
  }
  return t18;
}
function k4(e18, t18) {
  return { value: e18, done: t18 };
}
function g7(e18, t18, r18, n21) {
  if (typeof e18.removeListener == "function") e18.removeListener(t18, r18);
  else if (typeof e18.removeEventListener == "function") e18.removeEventListener(t18, r18, n21);
  else throw new v9("emitter", "EventEmitter", e18);
}
function O4(e18, t18, r18, n21) {
  if (typeof e18.on == "function") n21?.once ? e18.once(t18, r18) : e18.on(t18, r18);
  else if (typeof e18.addEventListener == "function") e18.addEventListener(t18, r18, n21);
  else throw new v9("emitter", "EventEmitter", e18);
}
function Ee() {
  let e18 = [];
  return { addEventListener(t18, r18, n21, i21) {
    O4(t18, r18, n21, i21), Array.prototype.push(e18, [t18, r18, n21, i21]);
  }, removeAll() {
    for (; e18.length > 0; ) Reflect.apply(g7, void 0, e18.pop());
  } };
}
function ge(e18, t18) {
  for (; t18 + 1 < e18.length; t18++) e18[t18] = e18[t18 + 1];
  e18.pop();
}
var Me = Symbol.for("nodejs.rejection");
var je = Symbol.for("events.errorMonitor");
var Ce = w4("node:events.setMaxListeners");
var Pe2 = w4("node:events.listenerCount");
var Oe = w4("node:events.init");

// http-url:https://esm.sh/node/tty.mjs
var o7 = class {
  fd;
  isRaw = false;
  isTTY = false;
  constructor(t18) {
    this.fd = t18;
  }
  setRawMode(t18) {
    return this.isRaw = t18, this;
  }
};
var s8 = class {
  fd;
  columns = 80;
  rows = 24;
  isTTY = false;
  constructor(t18) {
    this.fd = t18;
  }
  clearLine(t18, r18) {
    return r18 && r18(), false;
  }
  clearScreenDown(t18) {
    return t18 && t18(), false;
  }
  cursorTo(t18, r18, e18) {
    return e18 && typeof e18 == "function" && e18(), false;
  }
  moveCursor(t18, r18, e18) {
    return e18 && e18(), false;
  }
  getColorDepth(t18) {
    return 1;
  }
  hasColors(t18, r18) {
    return false;
  }
  getWindowSize() {
    return [this.columns, this.rows];
  }
  write(t18, r18, e18) {
    t18 instanceof Uint8Array && (t18 = new TextDecoder().decode(t18));
    try {
      console.log(t18);
    } catch {
    }
    return e18 && typeof e18 == "function" && e18(), false;
  }
};

// http-url:https://esm.sh/node/process.mjs
function r6(t18) {
  return new Error(`[unenv] ${t18} is not implemented yet!`);
}
function a7(t18) {
  return Object.assign(() => {
    throw r6(t18);
  }, { __unenv__: true });
}
var v10 = "22.14.0";
var _5 = class m3 extends U4 {
  env;
  hrtime;
  nextTick;
  constructor(e18) {
    super(), this.env = e18.env, this.hrtime = e18.hrtime, this.nextTick = e18.nextTick;
    for (let s16 of [...Object.getOwnPropertyNames(m3.prototype), ...Object.getOwnPropertyNames(U4.prototype)]) {
      let i21 = this[s16];
      typeof i21 == "function" && (this[s16] = i21.bind(this));
    }
  }
  emitWarning(e18, s16, i21) {
    console.warn(`${i21 ? `[${i21}] ` : ""}${s16 ? `${s16}: ` : ""}${e18}`);
  }
  emit(...e18) {
    return super.emit(...e18);
  }
  listeners(e18) {
    return super.listeners(e18);
  }
  #t;
  #s;
  #r;
  get stdin() {
    return this.#t ??= new o7(0);
  }
  get stdout() {
    return this.#s ??= new s8(1);
  }
  get stderr() {
    return this.#r ??= new s8(2);
  }
  #e = "/";
  chdir(e18) {
    this.#e = e18;
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
    return `v${v10}`;
  }
  get versions() {
    return { node: v10 };
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
    throw r6("process.umask");
  }
  getBuiltinModule() {
  }
  getActiveResourcesInfo() {
    throw r6("process.getActiveResourcesInfo");
  }
  exit() {
    throw r6("process.exit");
  }
  reallyExit() {
    throw r6("process.reallyExit");
  }
  kill() {
    throw r6("process.kill");
  }
  abort() {
    throw r6("process.abort");
  }
  dlopen() {
    throw r6("process.dlopen");
  }
  setSourceMapsEnabled() {
    throw r6("process.setSourceMapsEnabled");
  }
  loadEnvFile() {
    throw r6("process.loadEnvFile");
  }
  disconnect() {
    throw r6("process.disconnect");
  }
  cpuUsage() {
    throw r6("process.cpuUsage");
  }
  setUncaughtExceptionCaptureCallback() {
    throw r6("process.setUncaughtExceptionCaptureCallback");
  }
  hasUncaughtExceptionCaptureCallback() {
    throw r6("process.hasUncaughtExceptionCaptureCallback");
  }
  initgroups() {
    throw r6("process.initgroups");
  }
  openStdin() {
    throw r6("process.openStdin");
  }
  assert() {
    throw r6("process.assert");
  }
  binding() {
    throw r6("process.binding");
  }
  permission = { has: a7("process.permission.has") };
  report = { directory: "", filename: "", signal: "SIGUSR2", compact: false, reportOnFatalError: false, reportOnSignal: false, reportOnUncaughtException: false, getReport: a7("process.report.getReport"), writeReport: a7("process.report.writeReport") };
  finalization = { register: a7("process.finalization.register"), unregister: a7("process.finalization.unregister"), registerBeforeExit: a7("process.finalization.registerBeforeExit") };
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
var u6 = /* @__PURE__ */ Object.create(null);
var b4 = globalThis.process;
var o8 = (t18) => globalThis.__env__ || b4?.env || (t18 ? u6 : globalThis);
var x5 = new Proxy(u6, { get(t18, e18) {
  return o8()[e18] ?? u6[e18];
}, has(t18, e18) {
  let s16 = o8();
  return e18 in s16 || e18 in u6;
}, set(t18, e18, s16) {
  let i21 = o8(true);
  return i21[e18] = s16, true;
}, deleteProperty(t18, e18) {
  let s16 = o8(true);
  return delete s16[e18], true;
}, ownKeys() {
  let t18 = o8();
  return Object.keys(t18);
}, getOwnPropertyDescriptor(t18, e18) {
  let s16 = o8();
  if (e18 in s16) return { value: s16[e18], writable: true, enumerable: true, configurable: true };
} });
var w5 = Object.assign(function(t18) {
  let e18 = Date.now(), s16 = Math.trunc(e18 / 1e3), i21 = e18 % 1e3 * 1e6;
  if (t18) {
    let d14 = s16 - t18[0], n21 = i21 - t18[0];
    return n21 < 0 && (d14 = d14 - 1, n21 = 1e9 + n21), [d14, n21];
  }
  return [s16, i21];
}, { bigint: function() {
  return BigInt(Date.now() * 1e6);
} });
var E7 = globalThis.queueMicrotask ? (t18, ...e18) => {
  globalThis.queueMicrotask(t18.bind(void 0, ...e18));
} : k5();
function k5() {
  let t18 = [], e18 = false, s16, i21 = -1;
  function d14() {
    !e18 || !s16 || (e18 = false, s16.length > 0 ? t18 = [...s16, ...t18] : i21 = -1, t18.length > 0 && n21());
  }
  function n21() {
    if (e18) return;
    let c16 = setTimeout(d14);
    e18 = true;
    let l20 = t18.length;
    for (; l20; ) {
      for (s16 = t18, t18 = []; ++i21 < l20; ) s16 && s16[i21]();
      i21 = -1, l20 = t18.length;
    }
    s16 = void 0, e18 = false, clearTimeout(c16);
  }
  return (c16, ...l20) => {
    t18.push(c16.bind(void 0, ...l20)), t18.length === 1 && !e18 && setTimeout(n21);
  };
}
var h5 = new _5({ env: x5, hrtime: w5, nextTick: E7 });
var A4 = h5;
var { abort: O5, addListener: T4, allowedNodeEnvironmentFlags: S6, hasUncaughtExceptionCaptureCallback: N5, setUncaughtExceptionCaptureCallback: R6, loadEnvFile: I8, sourceMapsEnabled: B4, arch: j6, argv: D5, argv0: F2, chdir: $6, config: z5, connected: q5, constrainedMemory: W5, availableMemory: H4, cpuUsage: Q2, cwd: G5, debugPort: K3, dlopen: J3, disconnect: V5, emit: X5, emitWarning: Y5, env: Z3, eventNames: ee2, execArgv: te3, execPath: se4, exit: re4, finalization: ie3, features: ne4, getBuiltinModule: ae3, getActiveResourcesInfo: oe2, getMaxListeners: de3, hrtime: le3, kill: ue2, listeners: ce3, listenerCount: ge2, memoryUsage: pe2, nextTick: ve2, on: me2, off: he3, once: fe3, pid: _e3, platform: be, ppid: xe2, prependListener: we2, prependOnceListener: Ee2, rawListeners: ke, release: ye2, removeAllListeners: Me2, removeListener: Ce2, report: Le, resourceUsage: Pe3, setMaxListeners: Ue, setSourceMapsEnabled: Ae, stderr: Oe2, stdin: Te, stdout: Se, title: Ne, umask: Re, uptime: Ie2, version: Be, versions: je2, domain: De, initgroups: Fe, moduleLoadList: $e, reallyExit: ze, openStdin: qe, assert: We, binding: He, send: Qe, exitCode: Ge, channel: Ke, getegid: Je, geteuid: Ve, getgid: Xe, getgroups: Ye, getuid: Ze, setegid: et, seteuid: tt, setgid: st, setgroups: rt, setuid: it, permission: nt, mainModule: at, ref: ot, unref: dt, _events: lt, _eventsCount: ut, _exiting: ct, _maxListeners: gt, _debugEnd: pt, _debugProcess: vt, _fatalException: mt, _getActiveHandles: ht, _getActiveRequests: ft, _kill: _t, _preload_modules: bt, _rawDebug: xt, _startProfilerIdleNotifier: wt, _stopProfilerIdleNotifier: Et, _tickCallback: kt, _disconnect: yt, _handleQueue: Mt, _pendingMessage: Ct, _channel: Lt, _send: Pt, _linkedBinding: Ut } = h5;

// http-url:https://esm.sh/detect-node-es@1.1.0/es2022/detect-node-es.mjs
var e10 = Object.prototype.toString.call(typeof A4 < "u" ? A4 : 0) === "[object process]";

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/medium.mjs
function a8(u20) {
  return u20;
}
function s9(u20, r18) {
  r18 === void 0 && (r18 = a8);
  var e18 = [], o15 = false, d14 = { read: function() {
    if (o15) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
    return e18.length ? e18[e18.length - 1] : u20;
  }, useMedium: function(t18) {
    var n21 = r18(t18, o15);
    return e18.push(n21), function() {
      e18 = e18.filter(function(i21) {
        return i21 !== n21;
      });
    };
  }, assignSyncMedium: function(t18) {
    for (o15 = true; e18.length; ) {
      var n21 = e18;
      e18 = [], n21.forEach(t18);
    }
    e18 = { push: function(i21) {
      return t18(i21);
    }, filter: function() {
      return e18;
    } };
  }, assignMedium: function(t18) {
    o15 = true;
    var n21 = [];
    if (e18.length) {
      var i21 = e18;
      e18 = [], i21.forEach(t18), n21 = e18;
    }
    var h23 = function() {
      var f21 = n21;
      n21 = [], f21.forEach(t18);
    }, c16 = function() {
      return Promise.resolve().then(h23);
    };
    c16(), e18 = { push: function(f21) {
      n21.push(f21), c16();
    }, filter: function(f21) {
      return n21 = n21.filter(f21), e18;
    } };
  } };
  return d14;
}
function g8(u20) {
  u20 === void 0 && (u20 = {});
  var r18 = s9(null);
  return r18.options = v7({ async: true, ssr: false }, u20), r18;
}

// http-url:https://esm.sh/use-sidecar@1.1.3/X-ZXJlYWN0/es2022/dist/es2015/renderProp.mjs
import * as e11 from "react";
import { useState as m4, useCallback as d5, useEffect as v11, useLayoutEffect as g9 } from "react";

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/medium.mjs
var a9 = g8();

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/UI.mjs
var l7 = function() {
};
var m6 = e12.forwardRef(function(a18, d14) {
  var o15 = e12.useRef(null), t18 = e12.useState({ onScrollCapture: l7, onWheelCapture: l7, onTouchMoveCapture: l7 }), f21 = t18[0], R18 = t18[1], v19 = a18.forwardProps, n21 = a18.children, h23 = a18.className, u20 = a18.removeScrollBar, C18 = a18.enabled, g21 = a18.shards, P16 = a18.sideCar, S18 = a18.noRelative, b20 = a18.noIsolation, w18 = a18.inert, N26 = a18.allowPinchZoom, c16 = a18.as, M16 = c16 === void 0 ? "div" : c16, _22 = a18.gapMode, B19 = S3(a18, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k16 = P16, i21 = v8([o15, d14]), s16 = v7(v7({}, B19), f21);
  return e12.createElement(e12.Fragment, null, C18 && e12.createElement(k16, { sideCar: a9, removeScrollBar: u20, shards: g21, noRelative: S18, noIsolation: b20, inert: w18, setCallbacks: R18, allowPinchZoom: !!N26, lockRef: o15, gapMode: _22 }), v19 ? e12.cloneElement(e12.Children.only(n21), v7(v7({}, s16), { ref: i21 })) : e12.createElement(M16, v7({}, s16, { className: h23, ref: i21 }), n21));
});
m6.defaultProps = { enabled: true, removeScrollBar: true, inert: false };
m6.classNames = { fullWidth: a4, zeroRight: r5 };

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/SideEffect.mjs
import * as r10 from "react";

// http-url:https://esm.sh/get-nonce@1.0.1/es2022/get-nonce.mjs
var e13;
var t6 = function() {
  if (e13) return e13;
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};

// http-url:https://esm.sh/react-style-singleton@2.2.3/X-ZXJlYWN0/es2022/react-style-singleton.mjs
import * as l8 from "react";
function c8() {
  if (!document) return null;
  var t18 = document.createElement("style");
  t18.type = "text/css";
  var e18 = t6();
  return e18 && t18.setAttribute("nonce", e18), t18;
}
function s10(t18, e18) {
  t18.styleSheet ? t18.styleSheet.cssText = e18 : t18.appendChild(document.createTextNode(e18));
}
function f6(t18) {
  var e18 = document.head || document.getElementsByTagName("head")[0];
  e18.appendChild(t18);
}
var o9 = function() {
  var t18 = 0, e18 = null;
  return { add: function(n21) {
    t18 == 0 && (e18 = c8()) && (s10(e18, n21), f6(e18)), t18++;
  }, remove: function() {
    t18--, !t18 && e18 && (e18.parentNode && e18.parentNode.removeChild(e18), e18 = null);
  } };
};
var r8 = function() {
  var t18 = o9();
  return function(e18, n21) {
    l8.useEffect(function() {
      return t18.add(e18), function() {
        t18.remove();
      };
    }, [e18 && n21]);
  };
};
var m7 = function() {
  var t18 = r8(), e18 = function(n21) {
    var i21 = n21.styles, u20 = n21.dynamic;
    return t18(i21, u20), null;
  };
  return e18;
};

// http-url:https://esm.sh/react-remove-scroll-bar@2.3.8/X-ZXJlYWN0/es2022/react-remove-scroll-bar.mjs
import * as c9 from "react";
var d6 = "right-scroll-bar-position";
var l9 = "width-before-scroll-bar";
var p6 = "with-scroll-bars-hidden";
var s11 = "--removed-body-scroll-bar-size";
var h7 = { left: 0, top: 0, right: 0, gap: 0 };
var m8 = function(t18) {
  return parseInt(t18 || "", 10) || 0;
};
var b5 = function(t18) {
  var r18 = window.getComputedStyle(document.body), o15 = r18[t18 === "padding" ? "paddingLeft" : "marginLeft"], n21 = r18[t18 === "padding" ? "paddingTop" : "marginTop"], e18 = r18[t18 === "padding" ? "paddingRight" : "marginRight"];
  return [m8(o15), m8(n21), m8(e18)];
};
var f7 = function(t18) {
  if (t18 === void 0 && (t18 = "margin"), typeof window > "u") return h7;
  var r18 = b5(t18), o15 = document.documentElement.clientWidth, n21 = window.innerWidth;
  return { left: r18[0], top: r18[1], right: r18[2], gap: Math.max(0, n21 - o15 + r18[2] - r18[0]) };
};
var y7 = m7();
var i9 = "data-scroll-locked";
var S7 = function(t18, r18, o15, n21) {
  var e18 = t18.left, g21 = t18.top, v19 = t18.right, a18 = t18.gap;
  return o15 === void 0 && (o15 = "margin"), `
  .`.concat(p6, ` {
   overflow: hidden `).concat(n21, `;
   padding-right: `).concat(a18, "px ").concat(n21, `;
  }
  body[`).concat(i9, `] {
    overflow: hidden `).concat(n21, `;
    overscroll-behavior: contain;
    `).concat([r18 && "position: relative ".concat(n21, ";"), o15 === "margin" && `
    padding-left: `.concat(e18, `px;
    padding-top: `).concat(g21, `px;
    padding-right: `).concat(v19, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a18, "px ").concat(n21, `;
    `), o15 === "padding" && "padding-right: ".concat(a18, "px ").concat(n21, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(d6, ` {
    right: `).concat(a18, "px ").concat(n21, `;
  }
  
  .`).concat(l9, ` {
    margin-right: `).concat(a18, "px ").concat(n21, `;
  }
  
  .`).concat(d6, " .").concat(d6, ` {
    right: 0 `).concat(n21, `;
  }
  
  .`).concat(l9, " .").concat(l9, ` {
    margin-right: 0 `).concat(n21, `;
  }
  
  body[`).concat(i9, `] {
    `).concat(s11, ": ").concat(a18, `px;
  }
`);
};
var u7 = function() {
  var t18 = parseInt(document.body.getAttribute(i9) || "0", 10);
  return isFinite(t18) ? t18 : 0;
};
var w6 = function() {
  c9.useEffect(function() {
    return document.body.setAttribute(i9, (u7() + 1).toString()), function() {
      var t18 = u7() - 1;
      t18 <= 0 ? document.body.removeAttribute(i9) : document.body.setAttribute(i9, t18.toString());
    };
  }, []);
};
var C4 = function(t18) {
  var r18 = t18.noRelative, o15 = t18.noImportant, n21 = t18.gapMode, e18 = n21 === void 0 ? "margin" : n21;
  w6();
  var g21 = c9.useMemo(function() {
    return f7(e18);
  }, [e18]);
  return c9.createElement(y7, { styles: S7(g21, !r18, e18, o15 ? "" : "!important") });
};

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/aggresiveCapture.mjs
var r9 = false;
if (typeof window < "u") try {
  e14 = Object.defineProperty({}, "passive", { get: function() {
    return r9 = true, true;
  } }), window.addEventListener("test", e14, e14), window.removeEventListener("test", e14, e14);
} catch {
  r9 = false;
}
var e14;
var a10 = r9 ? { passive: false } : false;

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/handleScroll.mjs
var N7 = function(e18) {
  return e18.tagName === "TEXTAREA";
};
var b6 = function(e18, r18) {
  if (!(e18 instanceof Element)) return false;
  var l20 = window.getComputedStyle(e18);
  return l20[r18] !== "hidden" && !(l20.overflowY === l20.overflowX && !N7(e18) && l20[r18] === "visible");
};
var p7 = function(e18) {
  return b6(e18, "overflowY");
};
var D6 = function(e18) {
  return b6(e18, "overflowX");
};
var T5 = function(e18, r18) {
  var l20 = r18.ownerDocument, t18 = r18;
  do {
    typeof ShadowRoot < "u" && t18 instanceof ShadowRoot && (t18 = t18.host);
    var n21 = g10(e18, t18);
    if (n21) {
      var a18 = m9(e18, t18), i21 = a18[1], o15 = a18[2];
      if (i21 > o15) return true;
    }
    t18 = t18.parentNode;
  } while (t18 && t18 !== l20.body);
  return false;
};
var E8 = function(e18) {
  var r18 = e18.scrollTop, l20 = e18.scrollHeight, t18 = e18.clientHeight;
  return [r18, l20, t18];
};
var H5 = function(e18) {
  var r18 = e18.scrollLeft, l20 = e18.scrollWidth, t18 = e18.clientWidth;
  return [r18, l20, t18];
};
var g10 = function(e18, r18) {
  return e18 === "v" ? p7(r18) : D6(r18);
};
var m9 = function(e18, r18) {
  return e18 === "v" ? E8(r18) : H5(r18);
};
var B5 = function(e18, r18) {
  return e18 === "h" && r18 === "rtl" ? -1 : 1;
};
var V6 = function(e18, r18, l20, t18, n21) {
  var a18 = B5(e18, window.getComputedStyle(r18).direction), i21 = a18 * t18, o15 = l20.target, h23 = r18.contains(o15), u20 = false, S18 = i21 > 0, v19 = 0, f21 = 0;
  do {
    if (!o15) break;
    var d14 = m9(e18, o15), s16 = d14[0], C18 = d14[1], y20 = d14[2], w18 = C18 - y20 - a18 * s16;
    (s16 || w18) && g10(e18, o15) && (v19 += w18, f21 += s16);
    var c16 = o15.parentNode;
    o15 = c16 && c16.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? c16.host : c16;
  } while (!h23 && o15 !== document.body || h23 && (r18.contains(o15) || r18 === o15));
  return (S18 && (n21 && Math.abs(v19) < 1 || !n21 && i21 > v19) || !S18 && (n21 && Math.abs(f21) < 1 || !n21 && -i21 > f21)) && (u20 = true), u20;
};

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/SideEffect.mjs
var b7 = function(e18) {
  return "changedTouches" in e18 ? [e18.changedTouches[0].clientX, e18.changedTouches[0].clientY] : [0, 0];
};
var M2 = function(e18) {
  return [e18.deltaX, e18.deltaY];
};
var X6 = function(e18) {
  return e18 && "current" in e18 ? e18.current : e18;
};
var K4 = function(e18, c16) {
  return e18[0] === c16[0] && e18[1] === c16[1];
};
var O6 = function(e18) {
  return `
  .block-interactivity-`.concat(e18, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e18, ` {pointer-events: all;}
`);
};
var Q3 = 0;
var f8 = [];
function H6(e18) {
  var c16 = r10.useRef([]), E24 = r10.useRef([0, 0]), m20 = r10.useRef(), h23 = r10.useState(Q3++)[0], R18 = r10.useState(m7)[0], g21 = r10.useRef(e18);
  r10.useEffect(function() {
    g21.current = e18;
  }, [e18]), r10.useEffect(function() {
    if (e18.inert) {
      document.body.classList.add("block-interactivity-".concat(h23));
      var t18 = V4([e18.lockRef.current], (e18.shards || []).map(X6), true).filter(Boolean);
      return t18.forEach(function(a18) {
        return a18.classList.add("allow-interactivity-".concat(h23));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(h23)), t18.forEach(function(a18) {
          return a18.classList.remove("allow-interactivity-".concat(h23));
        });
      };
    }
  }, [e18.inert, e18.lockRef.current, e18.shards]);
  var k16 = r10.useCallback(function(t18, a18) {
    if ("touches" in t18 && t18.touches.length === 2 || t18.type === "wheel" && t18.ctrlKey) return !g21.current.allowPinchZoom;
    var l20 = b7(t18), u20 = E24.current, o15 = "deltaX" in t18 ? t18.deltaX : u20[0] - l20[0], i21 = "deltaY" in t18 ? t18.deltaY : u20[1] - l20[1], n21, v19 = t18.target, d14 = Math.abs(o15) > Math.abs(i21) ? "h" : "v";
    if ("touches" in t18 && d14 === "h" && v19.type === "range") return false;
    var P16 = window.getSelection(), C18 = P16 && P16.anchorNode, I18 = C18 ? C18 === v19 || C18.contains(v19) : false;
    if (I18) return false;
    var y20 = T5(d14, v19);
    if (!y20) return true;
    if (y20 ? n21 = d14 : (n21 = d14 === "v" ? "h" : "v", y20 = T5(d14, v19)), !y20) return false;
    if (!m20.current && "changedTouches" in t18 && (o15 || i21) && (m20.current = n21), !n21) return true;
    var Y19 = m20.current || n21;
    return V6(Y19, a18, t18, Y19 === "h" ? o15 : i21, true);
  }, []), S18 = r10.useCallback(function(t18) {
    var a18 = t18;
    if (!(!f8.length || f8[f8.length - 1] !== R18)) {
      var l20 = "deltaY" in a18 ? M2(a18) : b7(a18), u20 = c16.current.filter(function(n21) {
        return n21.name === a18.type && (n21.target === a18.target || a18.target === n21.shadowParent) && K4(n21.delta, l20);
      })[0];
      if (u20 && u20.should) {
        a18.cancelable && a18.preventDefault();
        return;
      }
      if (!u20) {
        var o15 = (g21.current.shards || []).map(X6).filter(Boolean).filter(function(n21) {
          return n21.contains(a18.target);
        }), i21 = o15.length > 0 ? k16(a18, o15[0]) : !g21.current.noIsolation;
        i21 && a18.cancelable && a18.preventDefault();
      }
    }
  }, []), w18 = r10.useCallback(function(t18, a18, l20, u20) {
    var o15 = { name: t18, delta: a18, target: l20, should: u20, shadowParent: Z4(l20) };
    c16.current.push(o15), setTimeout(function() {
      c16.current = c16.current.filter(function(i21) {
        return i21 !== o15;
      });
    }, 1);
  }, []), L25 = r10.useCallback(function(t18) {
    E24.current = b7(t18), m20.current = void 0;
  }, []), T20 = r10.useCallback(function(t18) {
    w18(t18.type, M2(t18), t18.target, k16(t18, e18.lockRef.current));
  }, []), x19 = r10.useCallback(function(t18) {
    w18(t18.type, b7(t18), t18.target, k16(t18, e18.lockRef.current));
  }, []);
  r10.useEffect(function() {
    return f8.push(R18), e18.setCallbacks({ onScrollCapture: T20, onWheelCapture: T20, onTouchMoveCapture: x19 }), document.addEventListener("wheel", S18, a10), document.addEventListener("touchmove", S18, a10), document.addEventListener("touchstart", L25, a10), function() {
      f8 = f8.filter(function(t18) {
        return t18 !== R18;
      }), document.removeEventListener("wheel", S18, a10), document.removeEventListener("touchmove", S18, a10), document.removeEventListener("touchstart", L25, a10);
    };
  }, []);
  var D19 = e18.removeScrollBar, A17 = e18.inert;
  return r10.createElement(r10.Fragment, null, A17 ? r10.createElement(R18, { styles: O6(h23) }) : null, D19 ? r10.createElement(C4, { noRelative: e18.noRelative, gapMode: e18.gapMode }) : null);
}
function Z4(e18) {
  for (var c16 = null; e18 !== null; ) e18 instanceof ShadowRoot && (c16 = e18.host, e18 = e18.host), e18 = e18.parentNode;
  return c16;
}

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/sidecar.mjs
var i10 = p4(a9, H6);

// http-url:https://esm.sh/react-remove-scroll@2.7.2/X-ZXJlYWN0/es2022/dist/es2015/Combination.mjs
var a11 = e15.forwardRef(function(o15, t18) {
  return e15.createElement(m6, v7({}, o15, { ref: t18, sideCar: i10 }));
});
a11.classNames = m6.classNames;
var l10 = a11;

// http-url:https://esm.sh/aria-hidden@1.2.6/es2022/aria-hidden.mjs
var W6 = function(r18) {
  if (typeof document > "u") return null;
  var a18 = Array.isArray(r18) ? r18[0] : r18;
  return a18.ownerDocument.body;
};
var f9 = /* @__PURE__ */ new WeakMap();
var v12 = /* @__PURE__ */ new WeakMap();
var p8 = {};
var h8 = 0;
var b8 = function(r18) {
  return r18 && (r18.host || b8(r18.parentNode));
};
var P4 = function(r18, a18) {
  return a18.map(function(t18) {
    if (r18.contains(t18)) return t18;
    var u20 = b8(t18);
    return u20 && r18.contains(u20) ? u20 : (console.error("aria-hidden", t18, "in not contained inside", r18, ". Doing nothing"), null);
  }).filter(function(t18) {
    return !!t18;
  });
};
var E9 = function(r18, a18, t18, u20) {
  var i21 = P4(a18, Array.isArray(r18) ? r18 : [r18]);
  p8[t18] || (p8[t18] = /* @__PURE__ */ new WeakMap());
  var s16 = p8[t18], l20 = [], c16 = /* @__PURE__ */ new Set(), O23 = new Set(i21), y20 = function(e18) {
    !e18 || c16.has(e18) || (c16.add(e18), y20(e18.parentNode));
  };
  i21.forEach(y20);
  var d14 = function(e18) {
    !e18 || O23.has(e18) || Array.prototype.forEach.call(e18.children, function(n21) {
      if (c16.has(n21)) d14(n21);
      else try {
        var o15 = n21.getAttribute(u20), A17 = o15 !== null && o15 !== "false", w18 = (f9.get(n21) || 0) + 1, M16 = (s16.get(n21) || 0) + 1;
        f9.set(n21, w18), s16.set(n21, M16), l20.push(n21), w18 === 1 && A17 && v12.set(n21, true), M16 === 1 && n21.setAttribute(t18, "true"), A17 || n21.setAttribute(u20, "true");
      } catch (x19) {
        console.error("aria-hidden: cannot operate on ", n21, x19);
      }
    });
  };
  return d14(a18), c16.clear(), h8++, function() {
    l20.forEach(function(e18) {
      var n21 = f9.get(e18) - 1, o15 = s16.get(e18) - 1;
      f9.set(e18, n21), s16.set(e18, o15), n21 || (v12.has(e18) || e18.removeAttribute(u20), v12.delete(e18)), o15 || e18.removeAttribute(t18);
    }), h8--, h8 || (f9 = /* @__PURE__ */ new WeakMap(), f9 = /* @__PURE__ */ new WeakMap(), v12 = /* @__PURE__ */ new WeakMap(), p8 = {});
  };
};
var S8 = function(r18, a18, t18) {
  t18 === void 0 && (t18 = "data-aria-hidden");
  var u20 = Array.from(Array.isArray(r18) ? r18 : [r18]), i21 = a18 || W6(r18);
  return i21 ? (u20.push.apply(u20, Array.from(i21.querySelectorAll("[aria-live], script"))), E9(u20, i21, t18, "aria-hidden")) : function() {
    return null;
  };
};

// http-url:https://esm.sh/@radix-ui/react-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dialog.mjs
import { Fragment as U5, jsx as s12 } from "react/jsx-runtime";
var m10 = "Dialog";
var [h9, ve3] = $2(m10);
var [V7, l11] = h9(m10);
var W7 = (e18) => {
  let { __scopeDialog: a18, children: r18, open: n21, defaultOpen: t18, onOpenChange: o15, modal: c16 = true } = e18, u20 = i11.useRef(null), O23 = i11.useRef(null), [T20, D19] = D({ prop: n21, defaultProp: t18 ?? false, onChange: o15, caller: m10 });
  return s12(V7, { scope: a18, triggerRef: u20, contentRef: O23, contentId: n5(), titleId: n5(), descriptionId: n5(), open: T20, onOpenChange: D19, onOpenToggle: i11.useCallback(() => D19((b20) => !b20), [D19]), modal: c16, children: r18 });
};
W7.displayName = m10;
var y8 = "DialogTrigger";
var Y6 = i11.forwardRef((e18, a18) => {
  let { __scopeDialog: r18, ...n21 } = e18, t18 = l11(y8, r18), o15 = s(a18, t18.triggerRef);
  return s12(v2.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": t18.open, "aria-controls": t18.open ? t18.contentId : void 0, "data-state": P5(t18.open), ...n21, ref: o15, onClick: f2(e18.onClick, t18.onOpenToggle) });
});
Y6.displayName = y8;
var _6 = "DialogPortal";
var [Z5, E10] = h9(_6, { forceMount: void 0 });
var q6 = (e18) => {
  let { __scopeDialog: a18, forceMount: r18, children: n21, container: t18 } = e18, o15 = l11(_6, a18);
  return s12(Z5, { scope: a18, forceMount: r18, children: i11.Children.map(n21, (c16) => s12(y2, { present: r18 || o15.open, children: s12(e9, { asChild: true, container: t18, children: c16 }) })) });
};
q6.displayName = _6;
var g11 = "DialogOverlay";
var z6 = i11.forwardRef((e18, a18) => {
  let r18 = E10(g11, e18.__scopeDialog), { forceMount: n21 = r18.forceMount, ...t18 } = e18, o15 = l11(g11, e18.__scopeDialog);
  return o15.modal ? s12(y2, { present: n21 || o15.open, children: s12(J4, { ...t18, ref: a18 }) }) : null;
});
z6.displayName = g11;
var B6 = b("DialogOverlay.RemoveScroll");
var J4 = i11.forwardRef((e18, a18) => {
  let { __scopeDialog: r18, ...n21 } = e18, t18 = l11(g11, r18), o15 = ne2(), c16 = s(a18, o15);
  return s12(l10, { as: B6, allowPinchZoom: true, shards: [t18.contentRef], children: s12(v2.div, { "data-state": P5(t18.open), ...n21, ref: c16, style: { pointerEvents: "auto", ...n21.style } }) });
});
var f10 = "DialogContent";
var Q4 = i11.forwardRef((e18, a18) => {
  let r18 = E10(f10, e18.__scopeDialog), { forceMount: n21 = r18.forceMount, ...t18 } = e18, o15 = l11(f10, e18.__scopeDialog);
  return s12(y2, { present: n21 || o15.open, children: o15.modal ? s12(X7, { ...t18, ref: a18 }) : s12($7, { ...t18, ref: a18 }) });
});
Q4.displayName = f10;
var X7 = i11.forwardRef((e18, a18) => {
  let r18 = l11(f10, e18.__scopeDialog), n21 = i11.useRef(null), t18 = s(a18, r18.contentRef, n21);
  return i11.useEffect(() => {
    let o15 = n21.current;
    if (o15) return S8(o15);
  }, []), s12(I9, { ...e18, ref: t18, trapFocus: r18.open, disableOutsidePointerEvents: r18.open, onCloseAutoFocus: f2(e18.onCloseAutoFocus, (o15) => {
    o15.preventDefault(), r18.triggerRef.current?.focus();
  }), onPointerDownOutside: f2(e18.onPointerDownOutside, (o15) => {
    let c16 = o15.detail.originalEvent, u20 = c16.button === 0 && c16.ctrlKey === true;
    (c16.button === 2 || u20) && o15.preventDefault();
  }), onFocusOutside: f2(e18.onFocusOutside, (o15) => o15.preventDefault()) });
});
var $7 = i11.forwardRef((e18, a18) => {
  let r18 = l11(f10, e18.__scopeDialog), n21 = i11.useRef(false), t18 = i11.useRef(false);
  return s12(I9, { ...e18, ref: a18, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (o15) => {
    e18.onCloseAutoFocus?.(o15), o15.defaultPrevented || (n21.current || r18.triggerRef.current?.focus(), o15.preventDefault()), n21.current = false, t18.current = false;
  }, onInteractOutside: (o15) => {
    e18.onInteractOutside?.(o15), o15.defaultPrevented || (n21.current = true, o15.detail.originalEvent.type === "pointerdown" && (t18.current = true));
    let c16 = o15.target;
    r18.triggerRef.current?.contains(c16) && o15.preventDefault(), o15.detail.originalEvent.type === "focusin" && t18.current && o15.preventDefault();
  } });
});
var I9 = i11.forwardRef((e18, a18) => {
  let { __scopeDialog: r18, trapFocus: n21, onOpenAutoFocus: t18, onCloseAutoFocus: o15, ...c16 } = e18, u20 = l11(f10, r18);
  return a3(), s12(U5, { children: s12(L4, { asChild: true, loop: true, trapped: n21, onMountAutoFocus: t18, onUnmountAutoFocus: o15, children: s12(_2, { role: "dialog", id: u20.contentId, "aria-describedby": u20.descriptionId, "aria-labelledby": u20.titleId, "data-state": P5(u20.open), ...c16, ref: a18, deferPointerDownOutside: true, onDismiss: () => u20.onOpenChange(false) }) }) });
});
var x6 = "DialogTitle";
var ee3 = i11.forwardRef((e18, a18) => {
  let { __scopeDialog: r18, ...n21 } = e18, t18 = l11(x6, r18);
  return s12(v2.h2, { id: t18.titleId, ...n21, ref: a18 });
});
ee3.displayName = x6;
var N8 = "DialogDescription";
var oe3 = i11.forwardRef((e18, a18) => {
  let { __scopeDialog: r18, ...n21 } = e18, t18 = l11(N8, r18);
  return s12(v2.p, { id: t18.descriptionId, ...n21, ref: a18 });
});
oe3.displayName = N8;
var A5 = "DialogClose";
var te4 = i11.forwardRef((e18, a18) => {
  let { __scopeDialog: r18, ...n21 } = e18, t18 = l11(A5, r18);
  return s12(v2.button, { type: "button", ...n21, ref: a18, onClick: f2(e18.onClick, () => t18.onOpenChange(false)) });
});
te4.displayName = A5;
var Ce3 = (e18) => e18.children;
function P5(e18) {
  return e18 ? "open" : "closed";
}

// http-url:https://esm.sh/@radix-ui/react-alert-dialog@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-alert-dialog.mjs
import { jsx as c10 } from "react/jsx-runtime";
var f11 = "AlertDialog";
var [w7, z7] = $2(f11, [ve3]);
var n11 = ve3();
var m11 = (o15) => {
  let { __scopeAlertDialog: r18, ...e18 } = o15, t18 = n11(r18);
  return c10(W7, { ...t18, ...e18, modal: true });
};
m11.displayName = f11;
var I10 = "AlertDialogTrigger";
var d7 = i12.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e18, ...t18 } = o15, l20 = n11(e18);
  return c10(Y6, { ...l20, ...t18, ref: r18 });
});
d7.displayName = I10;
var x7 = "AlertDialogPortal";
var R7 = (o15) => {
  let { __scopeAlertDialog: r18, ...e18 } = o15, t18 = n11(r18);
  return c10(q6, { ...t18, ...e18 });
};
R7.displayName = x7;
var L5 = "AlertDialogOverlay";
var u8 = i12.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e18, ...t18 } = o15, l20 = n11(e18);
  return c10(z6, { ...l20, ...t18, ref: r18 });
});
u8.displayName = L5;
var P6 = "AlertDialogContent";
var [h10, F3] = w7(P6);
var _7 = i12.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e18, children: t18, ...l20 } = o15, g21 = n11(e18), p15 = i12.useRef(null), y20 = s(r18, p15), D19 = i12.useRef(null);
  return c10(h10, { scope: e18, cancelRef: D19, children: c10(Q4, { role: "alertdialog", ...g21, ...l20, ref: y20, onOpenAutoFocus: f2(l20.onOpenAutoFocus, (s16) => {
    s16.preventDefault(), D19.current?.focus({ preventScroll: true });
  }), onPointerDownOutside: (s16) => s16.preventDefault(), onInteractOutside: (s16) => s16.preventDefault(), children: t18 }) });
});
_7.displayName = P6;
var G6 = "AlertDialogTitle";
var N9 = i12.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e18, ...t18 } = o15, l20 = n11(e18);
  return c10(ee3, { ...l20, ...t18, ref: r18 });
});
N9.displayName = G6;
var j7 = "AlertDialogDescription";
var C5 = i12.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e18, ...t18 } = o15, l20 = n11(e18);
  return c10(oe3, { ...l20, ...t18, ref: r18 });
});
C5.displayName = j7;
var H7 = "AlertDialogAction";
var T6 = i12.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e18, ...t18 } = o15, l20 = n11(e18);
  return c10(te4, { ...l20, ...t18, ref: r18 });
});
T6.displayName = H7;
var E11 = "AlertDialogCancel";
var O7 = i12.forwardRef((o15, r18) => {
  let { __scopeAlertDialog: e18, ...t18 } = o15, { cancelRef: l20 } = F3(E11, e18), g21 = n11(e18), p15 = s(r18, l20);
  return c10(te4, { ...g21, ...t18, ref: p15 });
});
O7.displayName = E11;
var B7 = m11;
var J5 = d7;
var K5 = R7;
var Q5 = u8;
var U6 = _7;
var W8 = T6;
var X8 = O7;
var Z6 = N9;
var $8 = C5;

// http-url:https://esm.sh/@radix-ui/react-aspect-ratio@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-aspect-ratio.mjs
var react_aspect_ratio_exports = {};
__export(react_aspect_ratio_exports, {
  AspectRatio: () => r11,
  Root: () => f12
});
import * as o10 from "react";
import { jsx as t7 } from "react/jsx-runtime";
var m12 = "AspectRatio";
var r11 = o10.forwardRef((i21, a18) => {
  let { ratio: e18 = 1 / 1, style: p15, ...s16 } = i21;
  return t7("div", { style: { position: "relative", width: "100%", paddingBottom: `${100 / e18}%` }, "data-radix-aspect-ratio-wrapper": "", children: t7(v2.div, { ...s16, ref: a18, style: { ...p15, position: "absolute", top: 0, right: 0, bottom: 0, left: 0 } }) });
});
r11.displayName = m12;
var f12 = r11;

// http-url:https://esm.sh/@radix-ui/react-avatar@1.2.0/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-avatar.mjs
var react_avatar_exports = {};
__export(react_avatar_exports, {
  Avatar: () => _8,
  AvatarFallback: () => T7,
  AvatarImage: () => h11,
  Fallback: () => T7,
  Image: () => h11,
  Root: () => _8,
  createAvatarScope: () => O8
});
import * as r12 from "react";
import { jsx as l12 } from "react/jsx-runtime";
var v13 = "Avatar";
var [L6, O8] = $2(v13);
var C6 = [0, () => {
}];
var [w8, A6] = L6(v13);
var _8 = r12.forwardRef((e18, o15) => {
  let { __scopeAvatar: a18, ...n21 } = e18, [i21, t18] = r12.useState("idle"), [c16, s16] = x8();
  return l12(w8, { scope: a18, imageLoadingStatus: i21, setImageLoadingStatus: t18, imageCount: c16, setImageCount: s16, children: l12(v2.span, { ...n21, ref: o15 }) });
});
_8.displayName = v13;
var R8 = "AvatarImage";
var h11 = r12.forwardRef((e18, o15) => {
  let { __scopeAvatar: a18, src: n21, onLoadingStatusChange: i21, ...t18 } = e18, c16 = A6(R8, a18);
  y9(c16.setImageCount);
  let s16 = b9(n21, { referrerPolicy: t18.referrerPolicy, crossOrigin: t18.crossOrigin, loadingStatus: c16.imageLoadingStatus, setLoadingStatus: c16.setImageLoadingStatus }), u20 = u3((m20) => {
    i21?.(m20);
  }), d14 = r12.useRef(s16);
  return e4(() => {
    let m20 = d14.current;
    d14.current = s16, s16 !== m20 && u20(s16);
  }, [s16, u20]), s16 === "loaded" ? l12(v2.img, { ...t18, ref: o15, src: n21 }) : null;
});
h11.displayName = R8;
var S9 = "AvatarFallback";
var T7 = r12.forwardRef((e18, o15) => {
  let { __scopeAvatar: a18, delayMs: n21, ...i21 } = e18, t18 = A6(S9, a18), [c16, s16] = r12.useState(n21 === void 0);
  return r12.useEffect(() => {
    if (n21 !== void 0) {
      let u20 = window.setTimeout(() => s16(true), n21);
      return () => window.clearTimeout(u20);
    }
  }, [n21]), c16 && t18.imageLoadingStatus !== "loaded" ? l12(v2.span, { ...i21, ref: o15 }) : null;
});
T7.displayName = S9;
function b9(e18, { loadingStatus: o15, setLoadingStatus: a18, referrerPolicy: n21, crossOrigin: i21 }) {
  return e4(() => {
    if (!e18) {
      a18("error");
      return;
    }
    let t18 = new window.Image(), c16 = (u20) => {
      let d14 = u20.currentTarget;
      a18(g12(d14));
    }, s16 = () => a18("error");
    return t18.addEventListener("load", c16), t18.addEventListener("error", s16), n21 && (t18.referrerPolicy = n21), t18.crossOrigin = i21 ?? null, t18.src = e18, a18(g12(t18)), () => {
      t18.removeEventListener("load", c16), t18.removeEventListener("error", s16), a18("idle");
    };
  }, [e18, i21, n21, a18]), o15;
}
function g12(e18) {
  return e18.complete ? e18.naturalWidth > 0 ? "loaded" : "error" : "loading";
}
function x8() {
  let e18 = C6;
  {
    e18 = r12.useState(0);
    let [o15] = e18, a18 = r12.useRef(false);
    r12.useEffect(() => {
      o15 > 1 && !a18.current && (a18.current = true, console.warn("Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior."));
    }, [o15]);
  }
  return e18;
}
function y9(e18) {
  r12.useEffect(() => (e18((o15) => o15 + 1), () => {
    e18((o15) => o15 - 1);
  }), [e18]);
}

// http-url:https://esm.sh/@radix-ui/react-checkbox@1.3.5/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-checkbox.mjs
var react_checkbox_exports = {};
__export(react_checkbox_exports, {
  Checkbox: () => Q6,
  CheckboxIndicator: () => V8,
  Indicator: () => V8,
  Root: () => Q6,
  createCheckboxScope: () => ae4,
  unstable_BubbleInput: () => q7,
  unstable_CheckboxBubbleInput: () => q7,
  unstable_CheckboxProvider: () => J6,
  unstable_CheckboxTrigger: () => w9,
  unstable_Provider: () => J6,
  unstable_Trigger: () => w9
});
import * as o11 from "react";

// http-url:https://esm.sh/@radix-ui/react-use-previous@1.1.2/X-ZXJlYWN0/es2022/react-use-previous.mjs
import * as t8 from "react";
function u9(r18) {
  let e18 = t8.useRef({ value: r18, previous: r18 });
  return t8.useMemo(() => (e18.current.value !== r18 && (e18.current.previous = e18.current.value, e18.current.value = r18), e18.current.previous), [r18]);
}

// http-url:https://esm.sh/@radix-ui/react-use-size@1.1.2/X-ZXJlYWN0/es2022/react-use-size.mjs
import * as h12 from "react";
function u10(r18) {
  let [z17, e18] = h12.useState(void 0);
  return e4(() => {
    if (r18) {
      e18({ width: r18.offsetWidth, height: r18.offsetHeight });
      let f21 = new ResizeObserver((i21) => {
        if (!Array.isArray(i21) || !i21.length) return;
        let b20 = i21[0], o15, t18;
        if ("borderBoxSize" in b20) {
          let s16 = b20.borderBoxSize, d14 = Array.isArray(s16) ? s16[0] : s16;
          o15 = d14.inlineSize, t18 = d14.blockSize;
        } else o15 = r18.offsetWidth, t18 = r18.offsetHeight;
        e18({ width: o15, height: t18 });
      });
      return f21.observe(r18, { box: "border-box" }), () => f21.unobserve(r18);
    } else e18(void 0);
  }, [r18]), z17;
}

// http-url:https://esm.sh/@radix-ui/react-checkbox@1.3.5/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-checkbox.mjs
import { Fragment as G7, jsx as b10, jsxs as K6 } from "react/jsx-runtime";
var _9 = "Checkbox";
var [U7, ae4] = $2(_9);
var [X9, E12] = U7(_9);
function J6(t18) {
  let { __scopeCheckbox: s16, checked: a18, children: u20, defaultChecked: n21, disabled: e18, form: p15, name: f21, onCheckedChange: i21, required: m20, value: C18 = "on", internal_do_not_use_render: d14 } = t18, [l20, R18] = D({ prop: a18, defaultProp: n21 ?? false, onChange: i21, caller: _9 }), [k16, x19] = o11.useState(null), [v19, r18] = o11.useState(null), c16 = o11.useRef(false), g21 = k16 ? !!p15 || !!k16.closest("form") : true, I18 = { checked: l20, disabled: e18, setChecked: R18, control: k16, setControl: x19, name: f21, form: p15, value: C18, hasConsumerStoppedPropagationRef: c16, required: m20, defaultChecked: h13(n21) ? false : n21, isFormControl: g21, bubbleInput: v19, setBubbleInput: r18 };
  return b10(X9, { scope: s16, ...I18, children: W9(d14) ? d14(I18) : u20 });
}
var N10 = "CheckboxTrigger";
var w9 = o11.forwardRef(({ __scopeCheckbox: t18, onKeyDown: s16, onClick: a18, ...u20 }, n21) => {
  let { control: e18, value: p15, disabled: f21, checked: i21, required: m20, setControl: C18, setChecked: d14, hasConsumerStoppedPropagationRef: l20, isFormControl: R18, bubbleInput: k16 } = E12(N10, t18), x19 = s(n21, C18), v19 = o11.useRef(i21);
  return o11.useEffect(() => {
    let r18 = e18?.form;
    if (r18) {
      let c16 = () => d14(v19.current);
      return r18.addEventListener("reset", c16), () => r18.removeEventListener("reset", c16);
    }
  }, [e18, d14]), b10(v2.button, { type: "button", role: "checkbox", "aria-checked": h13(i21) ? "mixed" : i21, "aria-required": m20, "data-state": A7(i21), "data-disabled": f21 ? "" : void 0, disabled: f21, value: p15, ...u20, ref: x19, onKeyDown: f2(s16, (r18) => {
    r18.key === "Enter" && r18.preventDefault();
  }), onClick: f2(a18, (r18) => {
    d14((c16) => h13(c16) ? true : !c16), k16 && R18 && (l20.current = r18.isPropagationStopped(), l20.current || r18.stopPropagation());
  }) });
});
w9.displayName = N10;
var Q6 = o11.forwardRef((t18, s16) => {
  let { __scopeCheckbox: a18, name: u20, checked: n21, defaultChecked: e18, required: p15, disabled: f21, value: i21, onCheckedChange: m20, form: C18, ...d14 } = t18;
  return b10(J6, { __scopeCheckbox: a18, checked: n21, defaultChecked: e18, disabled: f21, required: p15, onCheckedChange: m20, name: u20, form: C18, value: i21, internal_do_not_use_render: ({ isFormControl: l20 }) => K6(G7, { children: [b10(w9, { ...d14, ref: s16, __scopeCheckbox: a18 }), l20 && b10(q7, { __scopeCheckbox: a18 })] }) });
});
Q6.displayName = _9;
var T8 = "CheckboxIndicator";
var V8 = o11.forwardRef((t18, s16) => {
  let { __scopeCheckbox: a18, forceMount: u20, ...n21 } = t18, e18 = E12(T8, a18);
  return b10(y2, { present: u20 || h13(e18.checked) || e18.checked === true, children: b10(v2.span, { "data-state": A7(e18.checked), "data-disabled": e18.disabled ? "" : void 0, ...n21, ref: s16, style: { pointerEvents: "none", ...t18.style } }) });
});
V8.displayName = T8;
var M3 = "CheckboxBubbleInput";
var q7 = o11.forwardRef(({ __scopeCheckbox: t18, ...s16 }, a18) => {
  let { control: u20, hasConsumerStoppedPropagationRef: n21, checked: e18, defaultChecked: p15, required: f21, disabled: i21, name: m20, value: C18, form: d14, bubbleInput: l20, setBubbleInput: R18 } = E12(M3, t18), k16 = s(a18, R18), x19 = u9(e18), v19 = u10(u20);
  o11.useEffect(() => {
    let c16 = l20;
    if (!c16) return;
    let g21 = window.HTMLInputElement.prototype, y20 = Object.getOwnPropertyDescriptor(g21, "checked").set, D19 = !n21.current;
    if (x19 !== e18 && y20) {
      let F11 = new Event("click", { bubbles: D19 });
      c16.indeterminate = h13(e18), y20.call(c16, h13(e18) ? false : e18), c16.dispatchEvent(F11);
    }
  }, [l20, x19, e18, n21]);
  let r18 = o11.useRef(h13(e18) ? false : e18);
  return b10(v2.input, { type: "checkbox", "aria-hidden": true, defaultChecked: p15 ?? r18.current, required: f21, disabled: i21, name: m20, value: C18, form: d14, ...s16, tabIndex: -1, ref: k16, style: { ...s16.style, ...v19, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
q7.displayName = M3;
function W9(t18) {
  return typeof t18 == "function";
}
function h13(t18) {
  return t18 === "indeterminate";
}
function A7(t18) {
  return h13(t18) ? "indeterminate" : t18 ? "checked" : "unchecked";
}

// http-url:https://esm.sh/@radix-ui/react-context-menu@2.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-context-menu.mjs
var react_context_menu_exports = {};
__export(react_context_menu_exports, {
  Arrow: () => be6,
  CheckboxItem: () => he7,
  Content: () => Me4,
  ContextMenu: () => _12,
  ContextMenuArrow: () => L11,
  ContextMenuCheckboxItem: () => O11,
  ContextMenuContent: () => N14,
  ContextMenuGroup: () => A9,
  ContextMenuItem: () => T11,
  ContextMenuItemIndicator: () => k10,
  ContextMenuLabel: () => E16,
  ContextMenuPortal: () => I11,
  ContextMenuRadioGroup: () => y13,
  ContextMenuRadioItem: () => G10,
  ContextMenuSeparator: () => D11,
  ContextMenuSub: () => B9,
  ContextMenuSubContent: () => W12,
  ContextMenuSubTrigger: () => F4,
  ContextMenuTrigger: () => b12,
  Group: () => fe4,
  Item: () => Re2,
  ItemIndicator: () => _e6,
  Label: () => ve6,
  Portal: () => Ce5,
  RadioGroup: () => Pe6,
  RadioItem: () => ge7,
  Root: () => le4,
  Separator: () => Se3,
  Sub: () => Ie4,
  SubContent: () => Ne4,
  SubTrigger: () => we6,
  Trigger: () => xe6,
  createContextMenuScope: () => me4
});
import * as i15 from "react";

// http-url:https://esm.sh/@radix-ui/react-menu@2.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-menu.mjs
import * as r13 from "react";

// http-url:https://esm.sh/@radix-ui/react-popper@1.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-popper.mjs
import * as t9 from "react";

// http-url:https://esm.sh/@floating-ui/react-dom@^2.0.0?external=react,react-dom&target=es2022
var react_dom_2_0_exports = {};

// http-url:https://esm.sh/@floating-ui/utils@0.2.11/es2022/utils.mjs
var h14 = ["top", "right", "bottom", "left"];
var f13 = ["start", "end"];
var C7 = h14.reduce((t18, n21) => t18.concat(n21, n21 + "-" + f13[0], n21 + "-" + f13[1]), []);
var E13 = (t18) => ({ x: t18, y: t18 });

// http-url:https://esm.sh/@floating-ui/dom@1.7.6/es2022/dom.mjs
var yt2 = E13(0);

// http-url:https://esm.sh/@floating-ui/react-dom@^2.0.0?external=react,react-dom&target=es2022
__reExport(react_dom_2_0_exports, react_dom_star);
import * as react_dom_star from "react-dom";

// http-url:https://esm.sh/@radix-ui/react-arrow@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-arrow.mjs
import * as e16 from "react";
import { jsx as o12 } from "react/jsx-runtime";
var v14 = "Arrow";
var i14 = e16.forwardRef((r18, t18) => {
  let { children: a18, width: s16 = 10, height: m20 = 5, ...n21 } = r18;
  return o12(v2.svg, { ...n21, ref: t18, width: s16, height: m20, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: r18.asChild ? a18 : o12("polygon", { points: "0,0 30,0 15,10" }) });
});
i14.displayName = v14;
var f15 = i14;

// http-url:https://esm.sh/@radix-ui/react-popper@1.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-popper.mjs
import { jsx as u12 } from "react/jsx-runtime";
var N12 = "Popper";
var [j9, Fe2] = $2(N12);
var [be3, L9] = j9(N12);
var U8 = (r18) => {
  let { __scopePopper: c16, children: a18 } = r18, [i21, s16] = t9.useState(null), [e18, o15] = t9.useState(void 0);
  return u12(be3, { scope: c16, anchor: i21, onAnchorChange: s16, placementState: e18, setPlacementState: o15, children: a18 });
};
U8.displayName = N12;
var Z7 = "PopperAnchor";
var G8 = t9.forwardRef((r18, c16) => {
  let { __scopePopper: a18, virtualRef: i21, ...s16 } = r18, e18 = L9(Z7, a18), o15 = t9.useRef(null), h23 = e18.onAnchorChange, p15 = t9.useCallback((n21) => {
    o15.current = n21, n21 && h23(n21);
  }, [h23]), l20 = s(c16, p15), d14 = t9.useRef(null);
  t9.useEffect(() => {
    if (!i21) return;
    let n21 = d14.current;
    d14.current = i21.current, n21 !== d14.current && h23(d14.current);
  });
  let f21 = e18.placementState && E14(e18.placementState), g21 = f21?.[0], w18 = f21?.[1];
  return i21 ? null : u12(v2.div, { "data-radix-popper-side": g21, "data-radix-popper-align": w18, ...s16, ref: l20 });
});
G8.displayName = Z7;
var _11 = "PopperContent";
var [Oe3, Ne2] = j9(_11);
var q9 = t9.forwardRef((r18, c16) => {
  let { __scopePopper: a18, side: i21 = "bottom", sideOffset: s16 = 0, align: e18 = "center", alignOffset: o15 = 0, arrowPadding: h23 = 0, avoidCollisions: p15 = true, collisionBoundary: l20 = [], collisionPadding: d14 = 0, sticky: f21 = "partial", hideWhenDetached: g21 = false, updatePositionStrategy: w18 = "optimized", onPlaced: n21, ...m20 } = r18, $20 = L9(_11, a18), [S18, Q20] = t9.useState(null), V20 = s(c16, (x19) => Q20(x19)), [R18, ee15] = t9.useState(null), I18 = u10(R18), te14 = I18?.width ?? 0, H15 = I18?.height ?? 0, re17 = i21 + (e18 !== "center" ? "-" + e18 : ""), oe16 = typeof d14 == "number" ? d14 : { top: 0, right: 0, bottom: 0, left: 0, ...d14 }, W22 = Array.isArray(l20) ? l20 : [l20], z17 = W22.length > 0, A17 = { padding: oe16, boundary: W22.filter(Ee3), altBoundary: z17 }, { refs: ne18, floatingStyles: Y19, placement: C18, isPositioned: v19, middlewareData: P16 } = (0, react_dom_2_0_exports.useFloating)({ strategy: "fixed", placement: re17, whileElementsMounted: (...x19) => (0, react_dom_2_0_exports.autoUpdate)(...x19, { animationFrame: w18 === "always" }), elements: { reference: $20.anchor }, middleware: [(0, react_dom_2_0_exports.offset)({ mainAxis: s16 + H15, alignmentAxis: o15 }), p15 && (0, react_dom_2_0_exports.shift)({ mainAxis: true, crossAxis: false, limiter: f21 === "partial" ? (0, react_dom_2_0_exports.limitShift)() : void 0, ...A17 }), p15 && (0, react_dom_2_0_exports.flip)({ ...A17 }), (0, react_dom_2_0_exports.size)({ ...A17, apply: ({ elements: x19, rects: T20, availableWidth: le13, availableHeight: de12 }) => {
    let { width: fe15, height: me13 } = T20.reference, y20 = x19.floating.style;
    y20.setProperty("--radix-popper-available-width", `${le13}px`), y20.setProperty("--radix-popper-available-height", `${de12}px`), y20.setProperty("--radix-popper-anchor-width", `${fe15}px`), y20.setProperty("--radix-popper-anchor-height", `${me13}px`);
  } }), R18 && (0, react_dom_2_0_exports.arrow)({ element: R18, padding: h23 }), $e2({ arrowWidth: te14, arrowHeight: H15 }), g21 && (0, react_dom_2_0_exports.hide)({ strategy: "referenceHidden", ...A17, boundary: z17 ? A17.boundary : void 0 })] }), b20 = $20.setPlacementState;
  e4(() => (b20(C18), () => {
    b20(void 0);
  }), [C18, b20]);
  let [k16, D19] = E14(C18), M16 = u3(n21);
  e4(() => {
    v19 && M16?.();
  }, [v19, M16]);
  let ae14 = P16.arrow?.x, ie10 = P16.arrow?.y, se13 = P16.arrow?.centerOffset !== 0, [ce11, pe13] = t9.useState();
  return e4(() => {
    S18 && pe13(window.getComputedStyle(S18).zIndex);
  }, [S18]), u12("div", { ref: ne18.setFloating, "data-radix-popper-content-wrapper": "", style: { ...Y19, transform: v19 ? Y19.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: ce11, "--radix-popper-transform-origin": [P16.transformOrigin?.x, P16.transformOrigin?.y].join(" "), ...P16.hide?.referenceHidden && { visibility: "hidden", pointerEvents: "none" } }, dir: r18.dir, children: u12(Oe3, { scope: a18, placedSide: k16, placedAlign: D19, onArrowChange: ee15, arrowX: ae14, arrowY: ie10, shouldHideArrow: se13, children: u12(v2.div, { "data-side": k16, "data-align": D19, ...m20, ref: V20, style: { ...m20.style, animation: v19 ? void 0 : "none" } }) }) });
});
q9.displayName = _11;
var J7 = "PopperArrow";
var _e4 = { top: "bottom", right: "left", bottom: "top", left: "right" };
var K7 = t9.forwardRef(function(c16, a18) {
  let { __scopePopper: i21, ...s16 } = c16, e18 = Ne2(J7, i21), o15 = _e4[e18.placedSide];
  return u12("span", { ref: e18.onArrowChange, style: { position: "absolute", left: e18.arrowX, top: e18.arrowY, [o15]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[e18.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[e18.placedSide], visibility: e18.shouldHideArrow ? "hidden" : void 0 }, children: u12(f15, { ...s16, ref: a18, style: { ...s16.style, display: "block" } }) });
});
K7.displayName = J7;
function Ee3(r18) {
  return r18 !== null;
}
var $e2 = (r18) => ({ name: "transformOrigin", options: r18, fn(c16) {
  let { placement: a18, rects: i21, middlewareData: s16 } = c16, o15 = s16.arrow?.centerOffset !== 0, h23 = o15 ? 0 : r18.arrowWidth, p15 = o15 ? 0 : r18.arrowHeight, [l20, d14] = E14(a18), f21 = { start: "0%", center: "50%", end: "100%" }[d14], g21 = (s16.arrow?.x ?? 0) + h23 / 2, w18 = (s16.arrow?.y ?? 0) + p15 / 2, n21 = "", m20 = "";
  return l20 === "bottom" ? (n21 = o15 ? f21 : `${g21}px`, m20 = `${-p15}px`) : l20 === "top" ? (n21 = o15 ? f21 : `${g21}px`, m20 = `${i21.floating.height + p15}px`) : l20 === "right" ? (n21 = `${-p15}px`, m20 = o15 ? f21 : `${w18}px`) : l20 === "left" && (n21 = `${i21.floating.width + p15}px`, m20 = o15 ? f21 : `${w18}px`), { data: { x: n21, y: m20 } };
} });
function E14(r18) {
  let [c16, a18 = "center"] = r18.split("-");
  return [c16, a18];
}
var Be2 = U8;
var je3 = G8;
var Le2 = q9;
var Ue2 = K7;

// http-url:https://esm.sh/@radix-ui/react-roving-focus@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-roving-focus.mjs
import * as t10 from "react";
import { jsx as d9 } from "react/jsx-runtime";
var y12 = "rovingFocusGroup.onEntryFocus";
var X10 = { bubbles: false, cancelable: true };
var R11 = "RovingFocusGroup";
var [D9, N13, Z8] = re(R11);
var [$10, be4] = $2(R11, [Z8]);
var [ee4, te5] = $10(R11);
var O9 = t10.forwardRef((e18, n21) => d9(D9.Provider, { scope: e18.__scopeRovingFocusGroup, children: d9(D9.Slot, { scope: e18.__scopeRovingFocusGroup, children: d9(oe4, { ...e18, ref: n21 }) }) }));
O9.displayName = R11;
var oe4 = t10.forwardRef((e18, n21) => {
  let { __scopeRovingFocusGroup: s16, orientation: o15, loop: T20 = false, dir: w18, currentTabStopId: v19, defaultCurrentTabStopId: C18, onCurrentTabStopIdChange: S18, onEntryFocus: m20, preventScrollOnEntryFocus: a18 = false, ...I18 } = e18, b20 = t10.useRef(null), F11 = s(n21, b20), g21 = v5(w18), [E24, r18] = D({ prop: v19, defaultProp: C18 ?? null, onChange: S18, caller: R11 }), [i21, h23] = t10.useState(false), u20 = u3(m20), l20 = N13(s16), A17 = t10.useRef(false), [L25, P16] = t10.useState(0);
  return t10.useEffect(() => {
    let c16 = b20.current;
    if (c16) return c16.addEventListener(y12, u20), () => c16.removeEventListener(y12, u20);
  }, [u20]), d9(ee4, { scope: s16, orientation: o15, dir: g21, loop: T20, currentTabStopId: E24, onItemFocus: t10.useCallback((c16) => r18(c16), [r18]), onItemShiftTab: t10.useCallback(() => h23(true), []), onFocusableItemAdd: t10.useCallback(() => P16((c16) => c16 + 1), []), onFocusableItemRemove: t10.useCallback(() => P16((c16) => c16 - 1), []), children: d9(v2.div, { tabIndex: i21 || L25 === 0 ? -1 : 0, "data-orientation": o15, ...I18, ref: F11, style: { outline: "none", ...e18.style }, onMouseDown: f2(e18.onMouseDown, () => {
    A17.current = true;
  }), onFocus: f2(e18.onFocus, (c16) => {
    let U16 = !A17.current;
    if (c16.target === c16.currentTarget && U16 && !i21) {
      let x19 = new CustomEvent(y12, X10);
      if (c16.currentTarget.dispatchEvent(x19), !x19.defaultPrevented) {
        let _22 = l20().filter((f21) => f21.focusable), B19 = _22.find((f21) => f21.active), Y19 = _22.find((f21) => f21.id === E24), H15 = [B19, Y19, ..._22].filter(Boolean).map((f21) => f21.ref.current);
        k8(H15, a18);
      }
    }
    A17.current = false;
  }), onBlur: f2(e18.onBlur, () => h23(false)) }) });
});
var K8 = "RovingFocusGroupItem";
var M4 = t10.forwardRef((e18, n21) => {
  let { __scopeRovingFocusGroup: s16, focusable: o15 = true, active: T20 = false, tabStopId: w18, children: v19, ...C18 } = e18, S18 = n5(), m20 = w18 || S18, a18 = te5(K8, s16), I18 = a18.currentTabStopId === m20, b20 = N13(s16), { onFocusableItemAdd: F11, onFocusableItemRemove: g21, currentTabStopId: E24 } = a18;
  return t10.useEffect(() => {
    if (o15) return F11(), () => g21();
  }, [o15, F11, g21]), d9(D9.ItemSlot, { scope: s16, id: m20, focusable: o15, active: T20, children: d9(v2.span, { tabIndex: I18 ? 0 : -1, "data-orientation": a18.orientation, ...C18, ref: n21, onMouseDown: f2(e18.onMouseDown, (r18) => {
    o15 ? a18.onItemFocus(m20) : r18.preventDefault();
  }), onFocus: f2(e18.onFocus, () => a18.onItemFocus(m20)), onKeyDown: f2(e18.onKeyDown, (r18) => {
    if (r18.key === "Tab" && r18.shiftKey) {
      a18.onItemShiftTab();
      return;
    }
    if (r18.target !== r18.currentTarget) return;
    let i21 = ce4(r18, a18.orientation, a18.dir);
    if (i21 !== void 0) {
      if (r18.metaKey || r18.ctrlKey || r18.altKey || r18.shiftKey) return;
      r18.preventDefault();
      let u20 = b20().filter((l20) => l20.focusable).map((l20) => l20.ref.current);
      if (i21 === "last") u20.reverse();
      else if (i21 === "prev" || i21 === "next") {
        i21 === "prev" && u20.reverse();
        let l20 = u20.indexOf(r18.currentTarget);
        u20 = a18.loop ? se5(u20, l20 + 1) : u20.slice(l20 + 1);
      }
      setTimeout(() => k8(u20));
    }
  }), children: typeof v19 == "function" ? v19({ isCurrentTabStop: I18, hasTabStop: E24 != null }) : v19 }) });
});
M4.displayName = K8;
var re6 = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function ne5(e18, n21) {
  return n21 !== "rtl" ? e18 : e18 === "ArrowLeft" ? "ArrowRight" : e18 === "ArrowRight" ? "ArrowLeft" : e18;
}
function ce4(e18, n21, s16) {
  let o15 = ne5(e18.key, s16);
  if (!(n21 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o15)) && !(n21 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o15))) return re6[o15];
}
function k8(e18, n21 = false) {
  let s16 = document.activeElement;
  for (let o15 of e18) if (o15 === s16 || (o15.focus({ preventScroll: n21 }), document.activeElement !== s16)) return;
}
function se5(e18, n21) {
  return e18.map((s16, o15) => e18[(n21 + o15) % e18.length]);
}
var Fe3 = O9;
var ge5 = M4;

// http-url:https://esm.sh/@radix-ui/react-menu@2.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-menu.mjs
import { jsx as s14 } from "react/jsx-runtime";
var Q7 = ["Enter", " "];
var st2 = ["ArrowDown", "PageUp", "Home"];
var he6 = ["ArrowUp", "PageDown", "End"];
var ut2 = [...st2, ...he6];
var it2 = { ltr: [...Q7, "ArrowRight"], rtl: [...Q7, "ArrowLeft"] };
var lt2 = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] };
var L10 = "Menu";
var [k9, dt2, ft2] = re(L10);
var [E15, $t] = $2(L10, [ft2, Fe2, be4]);
var G9 = Fe2();
var Me3 = be4();
var [Ce4, P8] = E15(L10);
var [pt2, K9] = E15(L10);
var ge6 = (e18) => {
  let { __scopeMenu: n21, open: t18 = false, children: c16, dir: u20, onOpenChange: a18, modal: l20 = true } = e18, m20 = G9(n21), [p15, d14] = r13.useState(null), R18 = r13.useRef(false), o15 = u3(a18), f21 = v5(u20);
  return r13.useEffect(() => {
    let M16 = () => {
      R18.current = true, document.addEventListener("pointerdown", v19, { capture: true, once: true }), document.addEventListener("pointermove", v19, { capture: true, once: true });
    }, v19 = () => R18.current = false;
    return document.addEventListener("keydown", M16, { capture: true }), () => {
      document.removeEventListener("keydown", M16, { capture: true }), document.removeEventListener("pointerdown", v19, { capture: true }), document.removeEventListener("pointermove", v19, { capture: true });
    };
  }, []), r13.useEffect(() => {
    if (!t18) return;
    let M16 = () => o15(false);
    return window.addEventListener("blur", M16), () => window.removeEventListener("blur", M16);
  }, [t18, o15]), s14(Be2, { ...m20, children: s14(Ce4, { scope: n21, open: t18, onOpenChange: o15, content: p15, onContentChange: d14, children: s14(pt2, { scope: n21, onClose: r13.useCallback(() => o15(false), [o15]), isUsingKeyboardRef: R18, dir: f21, modal: l20, children: c16 }) }) });
};
ge6.displayName = L10;
var mt2 = "MenuAnchor";
var ee5 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, ...c16 } = e18, u20 = G9(t18);
  return s14(je3, { ...u20, ...c16, ref: n21 });
});
ee5.displayName = mt2;
var te6 = "MenuPortal";
var [Rt, _e5] = E15(te6, { forceMount: void 0 });
var Pe5 = (e18) => {
  let { __scopeMenu: n21, forceMount: t18, children: c16, container: u20 } = e18, a18 = P8(te6, n21);
  return s14(Rt, { scope: n21, forceMount: t18, children: s14(y2, { present: t18 || a18.open, children: s14(e9, { asChild: true, container: u20, children: c16 }) }) });
};
Pe5.displayName = te6;
var g15 = "MenuContent";
var [vt2, ne6] = E15(g15);
var Se2 = r13.forwardRef((e18, n21) => {
  let t18 = _e5(g15, e18.__scopeMenu), { forceMount: c16 = t18.forceMount, ...u20 } = e18, a18 = P8(g15, e18.__scopeMenu), l20 = K9(g15, e18.__scopeMenu);
  return s14(k9.Provider, { scope: e18.__scopeMenu, children: s14(y2, { present: c16 || a18.open, children: s14(k9.Slot, { scope: e18.__scopeMenu, children: l20.modal ? s14(ht2, { ...u20, ref: n21 }) : s14(Mt2, { ...u20, ref: n21 }) }) }) });
});
var ht2 = r13.forwardRef((e18, n21) => {
  let t18 = P8(g15, e18.__scopeMenu), c16 = r13.useRef(null), u20 = s(n21, c16);
  return r13.useEffect(() => {
    let a18 = c16.current;
    if (a18) return S8(a18);
  }, []), s14(oe5, { ...e18, ref: u20, trapFocus: t18.open, disableOutsidePointerEvents: t18.open, disableOutsideScroll: true, onFocusOutside: f2(e18.onFocusOutside, (a18) => a18.preventDefault(), { checkForDefaultPrevented: false }), onDismiss: () => t18.onOpenChange(false) });
});
var Mt2 = r13.forwardRef((e18, n21) => {
  let t18 = P8(g15, e18.__scopeMenu);
  return s14(oe5, { ...e18, ref: n21, trapFocus: false, disableOutsidePointerEvents: false, disableOutsideScroll: false, onDismiss: () => t18.onOpenChange(false) });
});
var Ct2 = b("MenuContent.ScrollLock");
var oe5 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, loop: c16 = false, trapFocus: u20, onOpenAutoFocus: a18, onCloseAutoFocus: l20, disableOutsidePointerEvents: m20, onEntryFocus: p15, onEscapeKeyDown: d14, onPointerDownOutside: R18, onFocusOutside: o15, onInteractOutside: f21, onDismiss: M16, disableOutsideScroll: v19, ...w18 } = e18, b20 = P8(g15, t18), I18 = K9(g15, t18), Be9 = G9(t18), Ve7 = Me3(t18), ue11 = dt2(t18), [Ye6, ie10] = r13.useState(null), U16 = r13.useRef(null), Xe5 = s(n21, U16, b20.onContentChange), B19 = r13.useRef(0), V20 = r13.useRef(""), je8 = r13.useRef(0), z17 = r13.useRef(null), le13 = r13.useRef("right"), Z18 = r13.useRef(0), He7 = v19 ? l10 : r13.Fragment, We7 = v19 ? { as: Ct2, allowPinchZoom: true } : void 0, ze5 = (i21) => {
    let x19 = V20.current + i21, S18 = ue11().filter((C18) => !C18.disabled), T20 = document.activeElement, q23 = S18.find((C18) => C18.ref.current === T20)?.textValue, J20 = S18.map((C18) => C18.textValue), de12 = At(J20, x19, q23), A17 = S18.find((C18) => C18.textValue === de12)?.ref.current;
    (function C18(fe15) {
      V20.current = fe15, window.clearTimeout(B19.current), fe15 !== "" && (B19.current = window.setTimeout(() => C18(""), 1e3));
    })(x19), A17 && setTimeout(() => A17.focus());
  };
  r13.useEffect(() => () => window.clearTimeout(B19.current), []), a3();
  let y20 = r13.useCallback((i21) => le13.current === z17.current?.side && kt2(i21, z17.current?.area), []);
  return s14(vt2, { scope: t18, searchRef: V20, onItemEnter: r13.useCallback((i21) => {
    y20(i21) && i21.preventDefault();
  }, [y20]), onItemLeave: r13.useCallback((i21) => {
    y20(i21) || (U16.current?.focus(), ie10(null));
  }, [y20]), onTriggerLeave: r13.useCallback((i21) => {
    y20(i21) && i21.preventDefault();
  }, [y20]), pointerGraceTimerRef: je8, onPointerGraceIntentChange: r13.useCallback((i21) => {
    z17.current = i21;
  }, []), children: s14(He7, { ...We7, children: s14(L4, { asChild: true, trapped: u20, onMountAutoFocus: f2(a18, (i21) => {
    i21.preventDefault(), U16.current?.focus({ preventScroll: true });
  }), onUnmountAutoFocus: l20, children: s14(_2, { asChild: true, disableOutsidePointerEvents: m20, onEscapeKeyDown: d14, onPointerDownOutside: R18, onFocusOutside: o15, onInteractOutside: f21, onDismiss: M16, children: s14(Fe3, { asChild: true, ...Ve7, dir: I18.dir, orientation: "vertical", loop: c16, currentTabStopId: Ye6, onCurrentTabStopIdChange: ie10, onEntryFocus: f2(p15, (i21) => {
    I18.isUsingKeyboardRef.current || i21.preventDefault();
  }), preventScrollOnEntryFocus: true, children: s14(Le2, { role: "menu", "aria-orientation": "vertical", "data-state": Ue3(b20.open), "data-radix-menu-content": "", dir: I18.dir, ...Be9, ...w18, ref: Xe5, style: { outline: "none", ...w18.style }, onKeyDown: f2(w18.onKeyDown, (i21) => {
    let S18 = i21.target.closest("[data-radix-menu-content]") === i21.currentTarget, T20 = i21.ctrlKey || i21.altKey || i21.metaKey, q23 = i21.key.length === 1;
    S18 && (i21.key === "Tab" && i21.preventDefault(), !T20 && q23 && ze5(i21.key));
    let J20 = U16.current;
    if (i21.target !== J20 || !ut2.includes(i21.key)) return;
    i21.preventDefault();
    let A17 = ue11().filter((C18) => !C18.disabled).map((C18) => C18.ref.current);
    he6.includes(i21.key) && A17.reverse(), bt2(A17);
  }), onBlur: f2(e18.onBlur, (i21) => {
    i21.currentTarget.contains(i21.target) || (window.clearTimeout(B19.current), V20.current = "");
  }), onPointerMove: f2(e18.onPointerMove, D10((i21) => {
    let x19 = i21.target, S18 = Z18.current !== i21.clientX;
    if (i21.currentTarget.contains(x19) && S18) {
      let T20 = i21.clientX > Z18.current ? "right" : "left";
      le13.current = T20, Z18.current = i21.clientX;
    }
  })) }) }) }) }) }) });
});
Se2.displayName = g15;
var gt2 = "MenuGroup";
var re7 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, ...c16 } = e18;
  return s14(v2.div, { role: "group", ...c16, ref: n21 });
});
re7.displayName = gt2;
var _t2 = "MenuLabel";
var Ee4 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, ...c16 } = e18;
  return s14(v2.div, { ...c16, ref: n21 });
});
Ee4.displayName = _t2;
var Y7 = "MenuItem";
var me3 = "menu.itemSelect";
var W11 = r13.forwardRef((e18, n21) => {
  let { disabled: t18 = false, onSelect: c16, ...u20 } = e18, a18 = r13.useRef(null), l20 = K9(Y7, e18.__scopeMenu), m20 = ne6(Y7, e18.__scopeMenu), p15 = s(n21, a18), d14 = r13.useRef(false), R18 = () => {
    let o15 = a18.current;
    if (!t18 && o15) {
      let f21 = new CustomEvent(me3, { bubbles: true, cancelable: true });
      o15.addEventListener(me3, (M16) => c16?.(M16), { once: true }), R(o15, f21), f21.defaultPrevented ? d14.current = false : l20.onClose();
    }
  };
  return s14(we5, { ...u20, ref: p15, disabled: t18, onClick: f2(e18.onClick, R18), onPointerDown: (o15) => {
    e18.onPointerDown?.(o15), d14.current = true;
  }, onPointerUp: f2(e18.onPointerUp, (o15) => {
    d14.current || o15.currentTarget?.click();
  }), onKeyDown: f2(e18.onKeyDown, (o15) => {
    let f21 = m20.searchRef.current !== "";
    t18 || f21 && o15.key === " " || Q7.includes(o15.key) && (o15.currentTarget.click(), o15.preventDefault());
  }) });
});
W11.displayName = Y7;
var we5 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, disabled: c16 = false, textValue: u20, ...a18 } = e18, l20 = ne6(Y7, t18), m20 = Me3(t18), p15 = r13.useRef(null), d14 = s(n21, p15), [R18, o15] = r13.useState(false), [f21, M16] = r13.useState("");
  return r13.useEffect(() => {
    let v19 = p15.current;
    v19 && M16((v19.textContent ?? "").trim());
  }, [a18.children]), s14(k9.ItemSlot, { scope: t18, disabled: c16, textValue: u20 ?? f21, children: s14(ge5, { asChild: true, ...m20, focusable: !c16, children: s14(v2.div, { role: "menuitem", "data-highlighted": R18 ? "" : void 0, "aria-disabled": c16 || void 0, "data-disabled": c16 ? "" : void 0, ...a18, ref: d14, onPointerMove: f2(e18.onPointerMove, D10((v19) => {
    c16 ? l20.onItemLeave(v19) : (l20.onItemEnter(v19), v19.defaultPrevented || v19.currentTarget.focus({ preventScroll: true }));
  })), onPointerLeave: f2(e18.onPointerLeave, D10((v19) => l20.onItemLeave(v19))), onFocus: f2(e18.onFocus, () => o15(true)), onBlur: f2(e18.onBlur, () => o15(false)) }) }) });
});
var Pt2 = "MenuCheckboxItem";
var Ie3 = r13.forwardRef((e18, n21) => {
  let { checked: t18 = false, onCheckedChange: c16, ...u20 } = e18;
  return s14(Ae4, { scope: e18.__scopeMenu, checked: t18, children: s14(W11, { role: "menuitemcheckbox", "aria-checked": X11(t18) ? "mixed" : t18, ...u20, ref: n21, "data-state": se6(t18), onSelect: f2(u20.onSelect, () => c16?.(X11(t18) ? true : !t18), { checkForDefaultPrevented: false }) }) });
});
Ie3.displayName = Pt2;
var ye5 = "MenuRadioGroup";
var [St, Et2] = E15(ye5, { value: void 0, onValueChange: () => {
} });
var xe5 = r13.forwardRef((e18, n21) => {
  let { value: t18, onValueChange: c16, ...u20 } = e18, a18 = u3(c16);
  return s14(St, { scope: e18.__scopeMenu, value: t18, onValueChange: a18, children: s14(re7, { ...u20, ref: n21 }) });
});
xe5.displayName = ye5;
var be5 = "MenuRadioItem";
var Te2 = r13.forwardRef((e18, n21) => {
  let { value: t18, ...c16 } = e18, u20 = Et2(be5, e18.__scopeMenu), a18 = t18 === u20.value;
  return s14(Ae4, { scope: e18.__scopeMenu, checked: a18, children: s14(W11, { role: "menuitemradio", "aria-checked": a18, ...c16, ref: n21, "data-state": se6(a18), onSelect: f2(c16.onSelect, () => u20.onValueChange?.(t18), { checkForDefaultPrevented: false }) }) });
});
Te2.displayName = be5;
var ce5 = "MenuItemIndicator";
var [Ae4, wt2] = E15(ce5, { checked: false });
var Oe4 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, forceMount: c16, ...u20 } = e18, a18 = wt2(ce5, t18);
  return s14(y2, { present: c16 || X11(a18.checked) || a18.checked === true, children: s14(v2.span, { ...u20, ref: n21, "data-state": se6(a18.checked) }) });
});
Oe4.displayName = ce5;
var It = "MenuSeparator";
var ke2 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, ...c16 } = e18;
  return s14(v2.div, { role: "separator", "aria-orientation": "horizontal", ...c16, ref: n21 });
});
ke2.displayName = It;
var yt3 = "MenuArrow";
var De2 = r13.forwardRef((e18, n21) => {
  let { __scopeMenu: t18, ...c16 } = e18, u20 = G9(t18);
  return s14(Ue2, { ...u20, ...c16, ref: n21 });
});
De2.displayName = yt3;
var ae5 = "MenuSub";
var [xt2, Ne3] = E15(ae5);
var Fe4 = (e18) => {
  let { __scopeMenu: n21, children: t18, open: c16 = false, onOpenChange: u20 } = e18, a18 = P8(ae5, n21), l20 = G9(n21), [m20, p15] = r13.useState(null), [d14, R18] = r13.useState(null), o15 = u3(u20);
  return r13.useEffect(() => (a18.open === false && o15(false), () => o15(false)), [a18.open, o15]), s14(Be2, { ...l20, children: s14(Ce4, { scope: n21, open: c16, onOpenChange: o15, content: d14, onContentChange: R18, children: s14(xt2, { scope: n21, contentId: n5(), triggerId: n5(), trigger: m20, onTriggerChange: p15, children: t18 }) }) });
};
Fe4.displayName = ae5;
var O10 = "MenuSubTrigger";
var Le3 = r13.forwardRef((e18, n21) => {
  let t18 = P8(O10, e18.__scopeMenu), c16 = K9(O10, e18.__scopeMenu), u20 = Ne3(O10, e18.__scopeMenu), a18 = ne6(O10, e18.__scopeMenu), l20 = r13.useRef(null), { pointerGraceTimerRef: m20, onPointerGraceIntentChange: p15 } = a18, d14 = { __scopeMenu: e18.__scopeMenu }, R18 = r13.useCallback(() => {
    l20.current && window.clearTimeout(l20.current), l20.current = null;
  }, []);
  return r13.useEffect(() => R18, [R18]), r13.useEffect(() => {
    let o15 = m20.current;
    return () => {
      window.clearTimeout(o15), p15(null);
    };
  }, [m20, p15]), s14(ee5, { asChild: true, ...d14, children: s14(we5, { id: u20.triggerId, "aria-haspopup": "menu", "aria-expanded": t18.open, "aria-controls": t18.open ? u20.contentId : void 0, "data-state": Ue3(t18.open), ...e18, ref: i(n21, u20.onTriggerChange), onClick: (o15) => {
    e18.onClick?.(o15), !(e18.disabled || o15.defaultPrevented) && (o15.currentTarget.focus(), t18.open || t18.onOpenChange(true));
  }, onPointerMove: f2(e18.onPointerMove, D10((o15) => {
    a18.onItemEnter(o15), !o15.defaultPrevented && !e18.disabled && !t18.open && !l20.current && (a18.onPointerGraceIntentChange(null), l20.current = window.setTimeout(() => {
      t18.onOpenChange(true), R18();
    }, 100));
  })), onPointerLeave: f2(e18.onPointerLeave, D10((o15) => {
    R18();
    let f21 = t18.content?.getBoundingClientRect();
    if (f21) {
      let M16 = t18.content?.dataset.side, v19 = M16 === "right", w18 = v19 ? -5 : 5, b20 = f21[v19 ? "left" : "right"], I18 = f21[v19 ? "right" : "left"];
      a18.onPointerGraceIntentChange({ area: [{ x: o15.clientX + w18, y: o15.clientY }, { x: b20, y: f21.top }, { x: I18, y: f21.top }, { x: I18, y: f21.bottom }, { x: b20, y: f21.bottom }], side: M16 }), window.clearTimeout(m20.current), m20.current = window.setTimeout(() => a18.onPointerGraceIntentChange(null), 300);
    } else {
      if (a18.onTriggerLeave(o15), o15.defaultPrevented) return;
      a18.onPointerGraceIntentChange(null);
    }
  })), onKeyDown: f2(e18.onKeyDown, (o15) => {
    let f21 = a18.searchRef.current !== "";
    e18.disabled || f21 && o15.key === " " || it2[c16.dir].includes(o15.key) && (t18.onOpenChange(true), t18.content?.focus(), o15.preventDefault());
  }) }) });
});
Le3.displayName = O10;
var Ge2 = "MenuSubContent";
var Ke2 = r13.forwardRef((e18, n21) => {
  let t18 = _e5(g15, e18.__scopeMenu), { forceMount: c16 = t18.forceMount, align: u20 = "start", ...a18 } = e18, l20 = P8(g15, e18.__scopeMenu), m20 = K9(g15, e18.__scopeMenu), p15 = Ne3(Ge2, e18.__scopeMenu), d14 = r13.useRef(null), R18 = s(n21, d14);
  return s14(k9.Provider, { scope: e18.__scopeMenu, children: s14(y2, { present: c16 || l20.open, children: s14(k9.Slot, { scope: e18.__scopeMenu, children: s14(oe5, { id: p15.contentId, "aria-labelledby": p15.triggerId, ...a18, ref: R18, align: u20, side: m20.dir === "rtl" ? "left" : "right", disableOutsidePointerEvents: false, disableOutsideScroll: false, trapFocus: false, onOpenAutoFocus: (o15) => {
    m20.isUsingKeyboardRef.current && d14.current?.focus(), o15.preventDefault();
  }, onCloseAutoFocus: (o15) => o15.preventDefault(), onFocusOutside: f2(e18.onFocusOutside, (o15) => {
    o15.target !== p15.trigger && l20.onOpenChange(false);
  }), onEscapeKeyDown: f2(e18.onEscapeKeyDown, (o15) => {
    m20.onClose(), o15.preventDefault();
  }), onKeyDown: f2(e18.onKeyDown, (o15) => {
    let f21 = o15.currentTarget.contains(o15.target), M16 = lt2[m20.dir].includes(o15.key);
    f21 && M16 && (l20.onOpenChange(false), p15.trigger?.focus(), o15.preventDefault());
  }) }) }) }) });
});
Ke2.displayName = Ge2;
function Ue3(e18) {
  return e18 ? "open" : "closed";
}
function X11(e18) {
  return e18 === "indeterminate";
}
function se6(e18) {
  return X11(e18) ? "indeterminate" : e18 ? "checked" : "unchecked";
}
function bt2(e18) {
  let n21 = document.activeElement;
  for (let t18 of e18) if (t18 === n21 || (t18.focus(), document.activeElement !== n21)) return;
}
function Tt(e18, n21) {
  return e18.map((t18, c16) => e18[(n21 + c16) % e18.length]);
}
function At(e18, n21, t18) {
  let u20 = n21.length > 1 && Array.from(n21).every((d14) => d14 === n21[0]) ? n21[0] : n21, a18 = t18 ? e18.indexOf(t18) : -1, l20 = Tt(e18, Math.max(a18, 0));
  u20.length === 1 && (l20 = l20.filter((d14) => d14 !== t18));
  let p15 = l20.find((d14) => d14.toLowerCase().startsWith(u20.toLowerCase()));
  return p15 !== t18 ? p15 : void 0;
}
function Ot(e18, n21) {
  let { x: t18, y: c16 } = e18, u20 = false;
  for (let a18 = 0, l20 = n21.length - 1; a18 < n21.length; l20 = a18++) {
    let m20 = n21[a18], p15 = n21[l20], d14 = m20.x, R18 = m20.y, o15 = p15.x, f21 = p15.y;
    R18 > c16 != f21 > c16 && t18 < (o15 - d14) * (c16 - R18) / (f21 - R18) + d14 && (u20 = !u20);
  }
  return u20;
}
function kt2(e18, n21) {
  if (!n21) return false;
  let t18 = { x: e18.clientX, y: e18.clientY };
  return Ot(t18, n21);
}
function D10(e18) {
  return (n21) => n21.pointerType === "mouse" ? e18(n21) : void 0;
}
var en = ge6;
var tn = ee5;
var nn = Pe5;
var on = Se2;
var rn = re7;
var cn = Ee4;
var an = W11;
var sn = Ie3;
var un = xe5;
var ln = Te2;
var dn = Oe4;
var fn = ke2;
var pn = De2;
var mn = Fe4;
var Rn = Le3;
var vn = Ke2;

// http-url:https://esm.sh/@radix-ui/react-context-menu@2.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-context-menu.mjs
import { Fragment as H8, jsx as u13, jsxs as K10 } from "react/jsx-runtime";
var R12 = "ContextMenu";
var [Y8, me4] = $2(R12, [$t]);
var c11 = $t();
var [q10, g16] = Y8(R12);
var _12 = (e18) => {
  let { __scopeContextMenu: n21, children: o15, onOpenChange: t18, open: a18, dir: p15, modal: m20 = true } = e18, s16 = i15.useRef(false);
  {
    let M16 = i15.useRef(false);
    i15.useEffect(() => {
      a18 === true && !s16.current && !M16.current && (M16.current = true, console.warn("ContextMenu: The `open` prop has been set to `true` before the user has interacted with the trigger, so its position is indeterminate. This is likely unintended and will result in the menu being anchored to the top-left corner of the viewport."));
    }, [a18]);
  }
  let [x19, C18] = D({ prop: a18, defaultProp: false, onChange: t18, caller: R12 }), d14 = c11(n21);
  return u13(q10, { scope: n21, open: x19, onOpenChange: C18, modal: m20, hasInteractedRef: s16, children: u13(en, { ...d14, dir: p15, open: x19, onOpenChange: C18, modal: m20, children: o15 }) });
};
_12.displayName = R12;
var S10 = "ContextMenuTrigger";
var b12 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, disabled: t18 = false, ...a18 } = e18, p15 = g16(S10, o15), m20 = c11(o15), s16 = i15.useRef({ x: 0, y: 0 }), x19 = i15.useRef({ getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s16.current }) }), C18 = i15.useRef(0), d14 = i15.useCallback(() => window.clearTimeout(C18.current), []), M16 = (l20) => {
    p15.hasInteractedRef.current = true, s16.current = { x: l20.clientX, y: l20.clientY }, p15.onOpenChange(true);
  };
  return i15.useEffect(() => d14, [d14]), i15.useEffect(() => {
    t18 && d14();
  }, [t18, d14]), K10(H8, { children: [u13(tn, { ...m20, virtualRef: x19 }), u13(v2.span, { "data-state": p15.open ? "open" : "closed", "data-disabled": t18 ? "" : void 0, ...a18, ref: n21, style: { WebkitTouchCallout: "none", ...e18.style }, onContextMenu: t18 ? e18.onContextMenu : f2(e18.onContextMenu, (l20) => {
    d14(), M16(l20), l20.preventDefault();
  }), onPointerDown: t18 ? e18.onPointerDown : f2(e18.onPointerDown, v15((l20) => {
    d14(), p15.open && p15.onOpenChange(false), C18.current = window.setTimeout(() => M16(l20), 700);
  })), onPointerMove: t18 ? e18.onPointerMove : f2(e18.onPointerMove, v15(d14)), onPointerCancel: t18 ? e18.onPointerCancel : f2(e18.onPointerCancel, v15(d14)), onPointerUp: t18 ? e18.onPointerUp : f2(e18.onPointerUp, v15(d14)) })] });
});
b12.displayName = S10;
var z9 = "ContextMenuPortal";
var I11 = (e18) => {
  let { __scopeContextMenu: n21, ...o15 } = e18, t18 = c11(n21);
  return u13(nn, { ...t18, ...o15 });
};
I11.displayName = z9;
var w11 = "ContextMenuContent";
var N14 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = g16(w11, o15), p15 = c11(o15), m20 = i15.useRef(false);
  return u13(on, { ...p15, ...t18, ref: n21, side: "right", sideOffset: 2, align: "start", onCloseAutoFocus: (s16) => {
    e18.onCloseAutoFocus?.(s16), !s16.defaultPrevented && m20.current && s16.preventDefault(), m20.current = false;
  }, onInteractOutside: (s16) => {
    e18.onInteractOutside?.(s16), !s16.defaultPrevented && !a18.modal && (m20.current = true);
  }, style: { ...e18.style, "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
N14.displayName = w11;
var J8 = "ContextMenuGroup";
var A9 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(rn, { ...a18, ...t18, ref: n21 });
});
A9.displayName = J8;
var Q8 = "ContextMenuLabel";
var E16 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(cn, { ...a18, ...t18, ref: n21 });
});
E16.displayName = Q8;
var V9 = "ContextMenuItem";
var T11 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(an, { ...a18, ...t18, ref: n21 });
});
T11.displayName = V9;
var Z9 = "ContextMenuCheckboxItem";
var O11 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(sn, { ...a18, ...t18, ref: n21 });
});
O11.displayName = Z9;
var $11 = "ContextMenuRadioGroup";
var y13 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(un, { ...a18, ...t18, ref: n21 });
});
y13.displayName = $11;
var ee6 = "ContextMenuRadioItem";
var G10 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(ln, { ...a18, ...t18, ref: n21 });
});
G10.displayName = ee6;
var te7 = "ContextMenuItemIndicator";
var k10 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(dn, { ...a18, ...t18, ref: n21 });
});
k10.displayName = te7;
var ne7 = "ContextMenuSeparator";
var D11 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(fn, { ...a18, ...t18, ref: n21 });
});
D11.displayName = ne7;
var oe6 = "ContextMenuArrow";
var L11 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(pn, { ...a18, ...t18, ref: n21 });
});
L11.displayName = oe6;
var U9 = "ContextMenuSub";
var B9 = (e18) => {
  let { __scopeContextMenu: n21, children: o15, onOpenChange: t18, open: a18, defaultOpen: p15 } = e18, m20 = c11(n21), [s16, x19] = D({ prop: a18, defaultProp: p15 ?? false, onChange: t18, caller: U9 });
  return u13(mn, { ...m20, open: s16, onOpenChange: x19, children: o15 });
};
B9.displayName = U9;
var re8 = "ContextMenuSubTrigger";
var F4 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(Rn, { ...a18, ...t18, ref: n21 });
});
F4.displayName = re8;
var ae6 = "ContextMenuSubContent";
var W12 = i15.forwardRef((e18, n21) => {
  let { __scopeContextMenu: o15, ...t18 } = e18, a18 = c11(o15);
  return u13(vn, { ...a18, ...t18, ref: n21, style: { ...e18.style, "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
W12.displayName = ae6;
function v15(e18) {
  return (n21) => n21.pointerType !== "mouse" ? e18(n21) : void 0;
}
var le4 = _12;
var xe6 = b12;
var Ce5 = I11;
var Me4 = N14;
var fe4 = A9;
var ve6 = E16;
var Re2 = T11;
var he7 = O11;
var Pe6 = y13;
var ge7 = G10;
var _e6 = k10;
var Se3 = D11;
var be6 = L11;
var Ie4 = B9;
var we6 = F4;
var Ne4 = W12;

// http-url:https://esm.sh/@radix-ui/react-dropdown-menu@2.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-dropdown-menu.mjs
var react_dropdown_menu_exports = {};
__export(react_dropdown_menu_exports, {
  Arrow: () => Ie5,
  CheckboxItem: () => Re3,
  Content: () => Me5,
  DropdownMenu: () => h16,
  DropdownMenuArrow: () => k11,
  DropdownMenuCheckboxItem: () => E17,
  DropdownMenuContent: () => C8,
  DropdownMenuGroup: () => N15,
  DropdownMenuItem: () => A10,
  DropdownMenuItemIndicator: () => T12,
  DropdownMenuLabel: () => x10,
  DropdownMenuPortal: () => I12,
  DropdownMenuRadioGroup: () => O12,
  DropdownMenuRadioItem: () => y14,
  DropdownMenuSeparator: () => G11,
  DropdownMenuSub: () => re9,
  DropdownMenuSubContent: () => K11,
  DropdownMenuSubTrigger: () => L12,
  DropdownMenuTrigger: () => b13,
  Group: () => fe5,
  Item: () => De3,
  ItemIndicator: () => Pe7,
  Label: () => ge8,
  Portal: () => ve7,
  RadioGroup: () => _e7,
  RadioItem: () => he8,
  Root: () => le5,
  Separator: () => be7,
  Sub: () => Se4,
  SubContent: () => Ne5,
  SubTrigger: () => Ce6,
  Trigger: () => we7,
  createDropdownMenuScope: () => me5
});
import * as p10 from "react";
import { jsx as i16 } from "react/jsx-runtime";
var M5 = "DropdownMenu";
var [W13, me5] = $2(M5, [$t]);
var c12 = $t();
var [j10, _13] = W13(M5);
var h16 = (e18) => {
  let { __scopeDropdownMenu: n21, children: o15, dir: r18, open: t18, defaultOpen: u20, onOpenChange: s16, modal: d14 = true } = e18, m20 = c12(n21), f21 = p10.useRef(null), [l20, w18] = D({ prop: t18, defaultProp: u20 ?? false, onChange: s16, caller: M5 });
  return i16(j10, { scope: n21, triggerId: n5(), triggerRef: f21, contentId: n5(), open: l20, onOpenChange: w18, onOpenToggle: p10.useCallback(() => w18((U16) => !U16), [w18]), modal: d14, children: i16(en, { ...m20, open: l20, onOpenChange: w18, dir: r18, modal: d14, children: o15 }) });
};
h16.displayName = M5;
var P9 = "DropdownMenuTrigger";
var b13 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, disabled: r18 = false, ...t18 } = e18, u20 = _13(P9, o15), s16 = c12(o15);
  return i16(tn, { asChild: true, ...s16, children: i16(v2.button, { type: "button", id: u20.triggerId, "aria-haspopup": "menu", "aria-expanded": u20.open, "aria-controls": u20.open ? u20.contentId : void 0, "data-state": u20.open ? "open" : "closed", "data-disabled": r18 ? "" : void 0, disabled: r18, ...t18, ref: i(n21, u20.triggerRef), onPointerDown: f2(e18.onPointerDown, (d14) => {
    !r18 && d14.button === 0 && d14.ctrlKey === false && (u20.onOpenToggle(), u20.open || d14.preventDefault());
  }), onKeyDown: f2(e18.onKeyDown, (d14) => {
    r18 || (["Enter", " "].includes(d14.key) && u20.onOpenToggle(), d14.key === "ArrowDown" && u20.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(d14.key) && d14.preventDefault());
  }) }) });
});
b13.displayName = P9;
var X12 = "DropdownMenuPortal";
var I12 = (e18) => {
  let { __scopeDropdownMenu: n21, ...o15 } = e18, r18 = c12(n21);
  return i16(nn, { ...r18, ...o15 });
};
I12.displayName = X12;
var S11 = "DropdownMenuContent";
var C8 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = _13(S11, o15), u20 = c12(o15), s16 = p10.useRef(false);
  return i16(on, { id: t18.contentId, "aria-labelledby": t18.triggerId, ...u20, ...r18, ref: n21, onCloseAutoFocus: f2(e18.onCloseAutoFocus, (d14) => {
    s16.current || t18.triggerRef.current?.focus(), s16.current = false, d14.preventDefault();
  }), onInteractOutside: f2(e18.onInteractOutside, (d14) => {
    let m20 = d14.detail.originalEvent, f21 = m20.button === 0 && m20.ctrlKey === true, l20 = m20.button === 2 || f21;
    (!t18.modal || l20) && (s16.current = true);
  }), style: { ...e18.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
C8.displayName = S11;
var q11 = "DropdownMenuGroup";
var N15 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(rn, { ...t18, ...r18, ref: n21 });
});
N15.displayName = q11;
var z10 = "DropdownMenuLabel";
var x10 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(cn, { ...t18, ...r18, ref: n21 });
});
x10.displayName = z10;
var J9 = "DropdownMenuItem";
var A10 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(an, { ...t18, ...r18, ref: n21 });
});
A10.displayName = J9;
var Q9 = "DropdownMenuCheckboxItem";
var E17 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(sn, { ...t18, ...r18, ref: n21 });
});
E17.displayName = Q9;
var V10 = "DropdownMenuRadioGroup";
var O12 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(un, { ...t18, ...r18, ref: n21 });
});
O12.displayName = V10;
var Y9 = "DropdownMenuRadioItem";
var y14 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(ln, { ...t18, ...r18, ref: n21 });
});
y14.displayName = Y9;
var Z10 = "DropdownMenuItemIndicator";
var T12 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(dn, { ...t18, ...r18, ref: n21 });
});
T12.displayName = Z10;
var $12 = "DropdownMenuSeparator";
var G11 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(fn, { ...t18, ...r18, ref: n21 });
});
G11.displayName = $12;
var ee7 = "DropdownMenuArrow";
var k11 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(pn, { ...t18, ...r18, ref: n21 });
});
k11.displayName = ee7;
var re9 = (e18) => {
  let { __scopeDropdownMenu: n21, children: o15, open: r18, onOpenChange: t18, defaultOpen: u20 } = e18, s16 = c12(n21), [d14, m20] = D({ prop: r18, defaultProp: u20 ?? false, onChange: t18, caller: "DropdownMenuSub" });
  return i16(mn, { ...s16, open: d14, onOpenChange: m20, children: o15 });
};
var oe7 = "DropdownMenuSubTrigger";
var L12 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(Rn, { ...t18, ...r18, ref: n21 });
});
L12.displayName = oe7;
var ne8 = "DropdownMenuSubContent";
var K11 = p10.forwardRef((e18, n21) => {
  let { __scopeDropdownMenu: o15, ...r18 } = e18, t18 = c12(o15);
  return i16(vn, { ...t18, ...r18, ref: n21, style: { ...e18.style, "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)", "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)", "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)", "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)" } });
});
K11.displayName = ne8;
var le5 = h16;
var we7 = b13;
var ve7 = I12;
var Me5 = C8;
var fe5 = N15;
var ge8 = x10;
var De3 = A10;
var Re3 = E17;
var _e7 = O12;
var he8 = y14;
var Pe7 = T12;
var be7 = G11;
var Ie5 = k11;
var Se4 = re9;
var Ce6 = L12;
var Ne5 = K11;

// http-url:https://esm.sh/@radix-ui/react-form@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-form.mjs
var react_form_exports = {};
__export(react_form_exports, {
  Control: () => je4,
  Field: () => Be3,
  Form: () => Z11,
  FormControl: () => te8,
  FormField: () => $13,
  FormLabel: () => ee8,
  FormMessage: () => oe8,
  FormSubmit: () => ne9,
  FormValidityState: () => re10,
  Label: () => Oe5,
  Message: () => Ue4,
  Root: () => Ne6,
  Submit: () => Ge3,
  ValidityState: () => qe2,
  createFormScope: () => we8
});
import * as t11 from "react";

// http-url:https://esm.sh/@radix-ui/react-label@2.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-label.mjs
var react_label_exports = {};
__export(react_label_exports, {
  Label: () => a13,
  Root: () => n12
});
import * as r14 from "react";
import { jsx as l13 } from "react/jsx-runtime";
var f16 = "Label";
var a13 = r14.forwardRef((e18, o15) => l13(v2.label, { ...e18, ref: o15, onMouseDown: (t18) => {
  t18.target.closest("button, input, select, textarea") || (e18.onMouseDown?.(t18), !t18.defaultPrevented && t18.detail > 1 && t18.preventDefault());
} }));
a13.displayName = f16;
var n12 = a13;

// http-url:https://esm.sh/@radix-ui/react-form@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-form.mjs
import { Fragment as fe6, jsx as h17 } from "react/jsx-runtime";
var [H9, we8] = $2("Form");
var K12 = "Form";
var [he9, S12] = H9(K12);
var [Ce7, X13] = H9(K12);
var Z11 = t11.forwardRef((e18, o15) => {
  let { __scopeForm: r18, onClearServerErrors: i21 = () => {
  }, ...s16 } = e18, l20 = t11.useRef(null), v19 = s(o15, l20), [d14, f21] = t11.useState({}), m20 = t11.useCallback((n21) => d14[n21], [d14]), g21 = t11.useCallback((n21, u20) => f21((c16) => ({ ...c16, [n21]: { ...c16[n21] ?? {}, ...u20 } })), []), b20 = t11.useCallback((n21) => {
    f21((u20) => ({ ...u20, [n21]: void 0 })), a18((u20) => ({ ...u20, [n21]: {} }));
  }, []), [C18, y20] = t11.useState({}), I18 = t11.useCallback((n21) => C18[n21] ?? [], [C18]), p15 = t11.useCallback((n21, u20) => {
    y20((c16) => ({ ...c16, [n21]: [...c16[n21] ?? [], u20] }));
  }, []), R18 = t11.useCallback((n21, u20) => {
    y20((c16) => ({ ...c16, [n21]: (c16[n21] ?? []).filter((E24) => E24.id !== u20) }));
  }, []), [_22, a18] = t11.useState({}), F11 = t11.useCallback((n21) => _22[n21] ?? {}, [_22]), M16 = t11.useCallback((n21, u20) => {
    a18((c16) => ({ ...c16, [n21]: { ...c16[n21] ?? {}, ...u20 } }));
  }, []), [V20, A17] = t11.useState({}), B19 = t11.useCallback((n21, u20) => {
    A17((c16) => {
      let E24 = new Set(c16[n21]).add(u20);
      return { ...c16, [n21]: E24 };
    });
  }, []), D19 = t11.useCallback((n21, u20) => {
    A17((c16) => {
      let E24 = new Set(c16[n21]);
      return E24.delete(u20), { ...c16, [n21]: E24 };
    });
  }, []), k16 = t11.useCallback((n21) => Array.from(V20[n21] ?? []).join(" ") || void 0, [V20]);
  return h17(he9, { scope: r18, getFieldValidity: m20, onFieldValidityChange: g21, getFieldCustomMatcherEntries: I18, onFieldCustomMatcherEntryAdd: p15, onFieldCustomMatcherEntryRemove: R18, getFieldCustomErrors: F11, onFieldCustomErrorsChange: M16, onFieldValiditionClear: b20, children: h17(Ce7, { scope: r18, onFieldMessageIdAdd: B19, onFieldMessageIdRemove: D19, getFieldDescription: k16, children: h17(v2.form, { ...s16, ref: v19, onInvalid: f2(e18.onInvalid, (n21) => {
    let u20 = ae7(n21.currentTarget);
    u20 === n21.target && u20.focus(), n21.preventDefault();
  }), onSubmit: f2(e18.onSubmit, i21, { checkForDefaultPrevented: false }), onReset: f2(e18.onReset, i21) }) }) });
});
Z11.displayName = K12;
var Y10 = "FormField";
var [Fe5, N16] = H9(Y10);
var $13 = t11.forwardRef((e18, o15) => {
  let { __scopeForm: r18, name: i21, serverInvalid: s16 = false, ...l20 } = e18, d14 = S12(Y10, r18).getFieldValidity(i21), f21 = n5();
  return h17(Fe5, { scope: r18, id: f21, name: i21, serverInvalid: s16, children: h17(v2.div, { "data-valid": J10(d14, s16), "data-invalid": Q10(d14, s16), ...l20, ref: o15 }) });
});
$13.displayName = Y10;
var j11 = "FormLabel";
var ee8 = t11.forwardRef((e18, o15) => {
  let { __scopeForm: r18, ...i21 } = e18, s16 = S12(j11, r18), l20 = N16(j11, r18), v19 = i21.htmlFor || l20.id, d14 = s16.getFieldValidity(l20.name);
  return h17(a13, { "data-valid": J10(d14, l20.serverInvalid), "data-invalid": Q10(d14, l20.serverInvalid), ...i21, ref: o15, htmlFor: v19 });
});
ee8.displayName = j11;
var w12 = "FormControl";
var te8 = t11.forwardRef((e18, o15) => {
  let { __scopeForm: r18, ...i21 } = e18, s16 = S12(w12, r18), l20 = N16(w12, r18), v19 = X13(w12, r18), d14 = t11.useRef(null), f21 = s(o15, d14), m20 = i21.name || l20.name, g21 = i21.id || l20.id, b20 = s16.getFieldCustomMatcherEntries(m20), { onFieldValidityChange: C18, onFieldCustomErrorsChange: y20, onFieldValiditionClear: I18 } = s16, p15 = t11.useCallback(async (a18) => {
    if (se7(a18.validity)) {
      let c16 = O13(a18.validity);
      C18(m20, c16);
      return;
    }
    let F11 = a18.form ? new FormData(a18.form) : new FormData(), M16 = [a18.value, F11], V20 = [], A17 = [];
    b20.forEach((c16) => {
      be8(c16, M16) ? A17.push(c16) : _e8(c16) && V20.push(c16);
    });
    let B19 = V20.map(({ id: c16, match: E24 }) => [c16, E24(...M16)]), D19 = Object.fromEntries(B19), k16 = Object.values(D19).some(Boolean), n21 = k16;
    a18.setCustomValidity(n21 ? T13 : "");
    let u20 = O13(a18.validity);
    if (C18(m20, u20), y20(m20, D19), !k16 && A17.length > 0) {
      let c16 = A17.map(({ id: le13, match: de12 }) => de12(...M16).then((me13) => [le13, me13])), E24 = await Promise.all(c16), W22 = Object.fromEntries(E24), ie10 = Object.values(W22).some(Boolean);
      a18.setCustomValidity(ie10 ? T13 : "");
      let ce11 = O13(a18.validity);
      C18(m20, ce11), y20(m20, W22);
    }
  }, [b20, m20, y20, C18]);
  t11.useEffect(() => {
    let a18 = d14.current;
    if (a18) {
      let F11 = () => p15(a18);
      return a18.addEventListener("change", F11), () => a18.removeEventListener("change", F11);
    }
  }, [p15]);
  let R18 = t11.useCallback(() => {
    let a18 = d14.current;
    a18 && (a18.setCustomValidity(""), I18(m20));
  }, [m20, I18]);
  t11.useEffect(() => {
    let a18 = d14.current?.form;
    if (a18) return a18.addEventListener("reset", R18), () => a18.removeEventListener("reset", R18);
  }, [R18]), t11.useEffect(() => {
    let a18 = d14.current, F11 = a18?.closest("form");
    if (F11 && l20.serverInvalid) {
      let M16 = ae7(F11);
      M16 === a18 && M16.focus();
    }
  }, [l20.serverInvalid]);
  let _22 = s16.getFieldValidity(m20);
  return h17(v2.input, { "data-valid": J10(_22, l20.serverInvalid), "data-invalid": Q10(_22, l20.serverInvalid), "aria-invalid": l20.serverInvalid ? true : void 0, "aria-describedby": v19.getFieldDescription(m20), title: "", ...i21, ref: f21, id: g21, name: m20, onInvalid: f2(e18.onInvalid, (a18) => {
    let F11 = a18.currentTarget;
    p15(F11);
  }), onChange: f2(e18.onChange, (a18) => {
    R18();
  }) });
});
te8.displayName = w12;
var T13 = "This value is not valid";
var ye6 = { badInput: T13, patternMismatch: "This value does not match the required pattern", rangeOverflow: "This value is too large", rangeUnderflow: "This value is too small", stepMismatch: "This value does not match the required step", tooLong: "This value is too long", tooShort: "This value is too short", typeMismatch: "This value does not match the required type", valid: void 0, valueMissing: "This value is missing" };
var L13 = "FormMessage";
var oe8 = t11.forwardRef((e18, o15) => {
  let { match: r18, name: i21, ...s16 } = e18, l20 = N16(L13, e18.__scopeForm), v19 = i21 ?? l20.name;
  return r18 === void 0 ? h17(z11, { ...s16, ref: o15, name: v19, children: e18.children || T13 }) : typeof r18 == "function" ? h17(Re4, { match: r18, ...s16, ref: o15, name: v19 }) : h17(Ee5, { match: r18, ...s16, ref: o15, name: v19 });
});
oe8.displayName = L13;
var Ee5 = t11.forwardRef((e18, o15) => {
  let { match: r18, forceMatch: i21 = false, name: s16, children: l20, ...v19 } = e18, f21 = S12(L13, v19.__scopeForm).getFieldValidity(s16);
  return i21 || f21?.[r18] ? h17(z11, { ref: o15, ...v19, name: s16, children: l20 ?? ye6[r18] }) : null;
});
var Re4 = t11.forwardRef((e18, o15) => {
  let { match: r18, forceMatch: i21 = false, name: s16, id: l20, children: v19, ...d14 } = e18, f21 = S12(L13, d14.__scopeForm), m20 = t11.useRef(null), g21 = s(o15, m20), b20 = n5(), C18 = l20 ?? b20, y20 = t11.useMemo(() => ({ id: C18, match: r18 }), [C18, r18]), { onFieldCustomMatcherEntryAdd: I18, onFieldCustomMatcherEntryRemove: p15 } = f21;
  t11.useEffect(() => (I18(s16, y20), () => p15(s16, y20.id)), [y20, s16, I18, p15]);
  let R18 = f21.getFieldValidity(s16), a18 = f21.getFieldCustomErrors(s16)[C18];
  return i21 || R18 && !se7(R18) && a18 ? h17(z11, { id: C18, ref: g21, ...d14, name: s16, children: v19 ?? T13 }) : null;
});
var z11 = t11.forwardRef((e18, o15) => {
  let { __scopeForm: r18, id: i21, name: s16, ...l20 } = e18, v19 = X13(L13, r18), d14 = n5(), f21 = i21 ?? d14, { onFieldMessageIdAdd: m20, onFieldMessageIdRemove: g21 } = v19;
  return t11.useEffect(() => (m20(s16, f21), () => g21(s16, f21)), [s16, f21, m20, g21]), h17(v2.span, { id: f21, ...l20, ref: o15 });
});
var U10 = "FormValidityState";
var re10 = (e18) => {
  let { __scopeForm: o15, name: r18, children: i21 } = e18, s16 = S12(U10, o15), l20 = N16(U10, o15), v19 = r18 ?? l20.name, d14 = s16.getFieldValidity(v19);
  return h17(fe6, { children: i21(d14) });
};
re10.displayName = U10;
var ge9 = "FormSubmit";
var ne9 = t11.forwardRef((e18, o15) => {
  let { __scopeForm: r18, ...i21 } = e18;
  return h17(v2.button, { type: "submit", ...i21, ref: o15 });
});
ne9.displayName = ge9;
function O13(e18) {
  let o15 = {};
  for (let r18 in e18) o15[r18] = e18[r18];
  return o15;
}
function pe4(e18) {
  return e18 instanceof HTMLElement;
}
function Me6(e18) {
  return "validity" in e18;
}
function Ie6(e18) {
  return Me6(e18) && (e18.validity.valid === false || e18.getAttribute("aria-invalid") === "true");
}
function ae7(e18) {
  let o15 = e18.elements, [r18] = Array.from(o15).filter(pe4).filter(Ie6);
  return r18;
}
function be8(e18, o15) {
  return e18.match.constructor.name === "AsyncFunction" || Ae5(e18.match, o15);
}
function _e8(e18) {
  return e18.match.constructor.name === "Function";
}
function Ae5(e18, o15) {
  return e18(...o15) instanceof Promise;
}
function se7(e18) {
  let o15 = false;
  for (let r18 in e18) {
    let i21 = r18;
    if (i21 !== "valid" && i21 !== "customError" && e18[i21]) {
      o15 = true;
      break;
    }
  }
  return o15;
}
function J10(e18, o15) {
  if (e18?.valid === true && !o15) return true;
}
function Q10(e18, o15) {
  if (e18?.valid === false || o15) return true;
}
var Ne6 = Z11;
var Be3 = $13;
var Oe5 = ee8;
var je4 = te8;
var Ue4 = oe8;
var qe2 = re10;
var Ge3 = ne9;

// http-url:https://esm.sh/@radix-ui/react-hover-card@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-hover-card.mjs
var react_hover_card_exports = {};
__export(react_hover_card_exports, {
  Arrow: () => pe5,
  Content: () => de4,
  HoverCard: () => y15,
  HoverCardArrow: () => M6,
  HoverCardContent: () => L14,
  HoverCardPortal: () => A11,
  HoverCardTrigger: () => D12,
  Portal: () => le6,
  Root: () => ie4,
  Trigger: () => se8,
  createHoverCardScope: () => ce6
});
import * as t12 from "react";
import { jsx as s15 } from "react/jsx-runtime";
var x11;
var b14 = "HoverCard";
var [_14, ce6] = $2(b14, [Fe2]);
var E18 = Fe2();
var [j12, g17] = _14(b14);
var y15 = (e18) => {
  let { __scopeHoverCard: o15, children: n21, open: c16, defaultOpen: a18, onOpenChange: i21, openDelay: v19 = 700, closeDelay: m20 = 300 } = e18, l20 = E18(o15), C18 = t12.useRef(0), p15 = t12.useRef(0), R18 = t12.useRef(false), f21 = t12.useRef(false), [h23, r18] = D({ prop: c16, defaultProp: a18 ?? false, onChange: i21, caller: b14 }), P16 = t12.useCallback(() => {
    clearTimeout(p15.current), C18.current = window.setTimeout(() => r18(true), v19);
  }, [v19, r18]), k16 = t12.useCallback(() => {
    clearTimeout(C18.current), !R18.current && !f21.current && (p15.current = window.setTimeout(() => r18(false), m20));
  }, [m20, r18]), F11 = t12.useCallback(() => r18(false), [r18]);
  return t12.useEffect(() => () => {
    clearTimeout(C18.current), clearTimeout(p15.current);
  }, []), s15(j12, { scope: o15, open: h23, onOpenChange: r18, onOpen: P16, onClose: k16, onDismiss: F11, hasSelectionRef: R18, isPointerDownOnContentRef: f21, children: s15(Be2, { ...l20, children: n21 }) });
};
y15.displayName = b14;
var N17 = "HoverCardTrigger";
var D12 = t12.forwardRef((e18, o15) => {
  let { __scopeHoverCard: n21, ...c16 } = e18, a18 = g17(N17, n21), i21 = E18(n21);
  return s15(je3, { asChild: true, ...i21, children: s15(v2.a, { "data-state": a18.open ? "open" : "closed", ...c16, ref: o15, onPointerEnter: f2(e18.onPointerEnter, w13(a18.onOpen)), onPointerLeave: f2(e18.onPointerLeave, w13(a18.onClose)), onFocus: f2(e18.onFocus, a18.onOpen), onBlur: f2(e18.onBlur, a18.onClose), onTouchStart: f2(e18.onTouchStart, (v19) => v19.preventDefault()) }) });
});
D12.displayName = N17;
var T14 = "HoverCardPortal";
var [V11, q12] = _14(T14, { forceMount: void 0 });
var A11 = (e18) => {
  let { __scopeHoverCard: o15, forceMount: n21, children: c16, container: a18 } = e18, i21 = g17(T14, o15);
  return s15(V11, { scope: o15, forceMount: n21, children: s15(y2, { present: n21 || i21.open, children: s15(e9, { asChild: true, container: a18, children: c16 }) }) });
};
A11.displayName = T14;
var S13 = "HoverCardContent";
var L14 = t12.forwardRef((e18, o15) => {
  let n21 = q12(S13, e18.__scopeHoverCard), { forceMount: c16 = n21.forceMount, ...a18 } = e18, i21 = g17(S13, e18.__scopeHoverCard);
  return s15(y2, { present: c16 || i21.open, children: s15(z12, { "data-state": i21.open ? "open" : "closed", ...a18, onPointerEnter: f2(e18.onPointerEnter, w13(i21.onOpen)), onPointerLeave: f2(e18.onPointerLeave, w13(i21.onClose)), ref: o15 }) });
});
L14.displayName = S13;
var z12 = t12.forwardRef((e18, o15) => {
  let { __scopeHoverCard: n21, onEscapeKeyDown: c16, onPointerDownOutside: a18, onFocusOutside: i21, onInteractOutside: v19, ...m20 } = e18, l20 = g17(S13, n21), C18 = E18(n21), p15 = t12.useRef(null), R18 = s(o15, p15), [f21, h23] = t12.useState(false);
  return t12.useEffect(() => {
    if (f21) {
      let r18 = document.body;
      return x11 = r18.style.userSelect || r18.style.webkitUserSelect, r18.style.userSelect = "none", r18.style.webkitUserSelect = "none", () => {
        r18.style.userSelect = x11, r18.style.webkitUserSelect = x11;
      };
    }
  }, [f21]), t12.useEffect(() => {
    if (p15.current) {
      let r18 = () => {
        h23(false), l20.isPointerDownOnContentRef.current = false, setTimeout(() => {
          document.getSelection()?.toString() !== "" && (l20.hasSelectionRef.current = true);
        });
      };
      return document.addEventListener("pointerup", r18), () => {
        document.removeEventListener("pointerup", r18), l20.hasSelectionRef.current = false, l20.isPointerDownOnContentRef.current = false;
      };
    }
  }, [l20.isPointerDownOnContentRef, l20.hasSelectionRef]), t12.useEffect(() => {
    p15.current && Q11(p15.current).forEach((P16) => P16.setAttribute("tabindex", "-1"));
  }), s15(_2, { asChild: true, disableOutsidePointerEvents: false, onInteractOutside: v19, onEscapeKeyDown: c16, onPointerDownOutside: a18, onFocusOutside: f2(i21, (r18) => {
    r18.preventDefault();
  }), onDismiss: l20.onDismiss, children: s15(Le2, { ...C18, ...m20, onPointerDown: f2(m20.onPointerDown, (r18) => {
    r18.currentTarget.contains(r18.target) && h23(true), l20.hasSelectionRef.current = false, l20.isPointerDownOnContentRef.current = true;
  }), ref: R18, style: { ...m20.style, userSelect: f21 ? "text" : void 0, WebkitUserSelect: f21 ? "text" : void 0, "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)", "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)", "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)", "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)" } }) });
});
var J11 = "HoverCardArrow";
var M6 = t12.forwardRef((e18, o15) => {
  let { __scopeHoverCard: n21, ...c16 } = e18, a18 = E18(n21);
  return s15(Ue2, { ...a18, ...c16, ref: o15 });
});
M6.displayName = J11;
function w13(e18) {
  return (o15) => o15.pointerType === "touch" ? void 0 : e18();
}
function Q11(e18) {
  let o15 = [], n21 = document.createTreeWalker(e18, NodeFilter.SHOW_ELEMENT, { acceptNode: (c16) => c16.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
  for (; n21.nextNode(); ) o15.push(n21.currentNode);
  return o15;
}
var ie4 = y15;
var se8 = D12;
var le6 = A11;
var de4 = L14;
var pe5 = M6;

// http-url:https://esm.sh/@radix-ui/react-menubar@1.1.18/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-menubar.mjs
var react_menubar_exports = {};
__export(react_menubar_exports, {
  Arrow: () => Ze2,
  CheckboxItem: () => Xe2,
  Content: () => He2,
  Group: () => je5,
  Item: () => We2,
  ItemIndicator: () => Je2,
  Label: () => ze2,
  Menu: () => Be4,
  Menubar: () => L15,
  MenubarArrow: () => $14,
  MenubarCheckboxItem: () => Y11,
  MenubarContent: () => j13,
  MenubarGroup: () => z13,
  MenubarItem: () => X14,
  MenubarItemIndicator: () => Q12,
  MenubarLabel: () => W14,
  MenubarMenu: () => U11,
  MenubarPortal: () => H10,
  MenubarRadioGroup: () => q13,
  MenubarRadioItem: () => J12,
  MenubarSeparator: () => Z12,
  MenubarSub: () => re11,
  MenubarSubContent: () => ne10,
  MenubarSubTrigger: () => ae8,
  MenubarTrigger: () => V12,
  Portal: () => Ve2,
  RadioGroup: () => Ye2,
  RadioItem: () => qe3,
  Root: () => Le4,
  Separator: () => Qe2,
  Sub: () => $e3,
  SubContent: () => rr,
  SubTrigger: () => er,
  Trigger: () => Ue5,
  createMenubarScope: () => Ke3
});
import * as u14 from "react";
import { jsx as i17 } from "react/jsx-runtime";
var _15 = "Menubar";
var [x12, se9, pe6] = re(_15);
var [k12, Ke3] = $2(_15, [pe6, be4]);
var l14 = $t();
var K13 = be4();
var [le7, N18] = k12(_15);
var L15 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, value: a18, onValueChange: t18, defaultValue: g21, loop: d14 = true, dir: p15, ...c16 } = e18, b20 = v5(p15), s16 = K13(r18), [f21, v19] = D({ prop: a18, onChange: t18, defaultProp: g21 ?? "", caller: _15 }), [M16, m20] = u14.useState(null);
  return i17(le7, { scope: r18, value: f21, onMenuOpen: u14.useCallback((R18) => {
    v19(R18), m20(R18);
  }, [v19]), onMenuClose: u14.useCallback(() => v19(""), [v19]), onMenuToggle: u14.useCallback((R18) => {
    v19((E24) => E24 ? "" : R18), m20(R18);
  }, [v19]), dir: b20, loop: d14, children: i17(x12.Provider, { scope: r18, children: i17(x12.Slot, { scope: r18, children: i17(Fe3, { asChild: true, ...s16, orientation: "horizontal", loop: d14, dir: b20, currentTabStopId: M16, onCurrentTabStopIdChange: m20, children: i17(v2.div, { role: "menubar", ...c16, ref: n21 }) }) }) }) });
});
L15.displayName = _15;
var y16 = "MenubarMenu";
var [de5, B10] = k12(y16);
var U11 = (e18) => {
  let { __scopeMenubar: n21, value: r18, ...a18 } = e18, t18 = n5(), g21 = r18 || t18 || "LEGACY_REACT_AUTO_VALUE", d14 = N18(y16, n21), p15 = l14(n21), c16 = u14.useRef(null), b20 = u14.useRef(false), s16 = d14.value === g21;
  return u14.useEffect(() => {
    s16 || (b20.current = false);
  }, [s16]), i17(de5, { scope: n21, value: g21, triggerId: n5(), triggerRef: c16, contentId: n5(), wasKeyboardTriggerOpenRef: b20, children: i17(en, { ...p15, open: s16, onOpenChange: (f21) => {
    f21 || d14.onMenuClose();
  }, modal: false, dir: d14.dir, ...a18 }) });
};
U11.displayName = y16;
var w14 = "MenubarTrigger";
var V12 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, disabled: a18 = false, ...t18 } = e18, g21 = K13(r18), d14 = l14(r18), p15 = N18(w14, r18), c16 = B10(w14, r18), b20 = u14.useRef(null), s16 = s(n21, b20, c16.triggerRef), [f21, v19] = u14.useState(false), M16 = p15.value === c16.value;
  return i17(x12.ItemSlot, { scope: r18, value: c16.value, disabled: a18, children: i17(ge5, { asChild: true, ...g21, focusable: !a18, tabStopId: c16.value, children: i17(tn, { asChild: true, ...d14, children: i17(v2.button, { type: "button", role: "menuitem", id: c16.triggerId, "aria-haspopup": "menu", "aria-expanded": M16, "aria-controls": M16 ? c16.contentId : void 0, "data-highlighted": f21 ? "" : void 0, "data-state": M16 ? "open" : "closed", "data-disabled": a18 ? "" : void 0, disabled: a18, ...t18, ref: s16, onPointerDown: f2(e18.onPointerDown, (m20) => {
    !a18 && m20.button === 0 && m20.ctrlKey === false && (p15.onMenuOpen(c16.value), M16 || m20.preventDefault());
  }), onPointerEnter: f2(e18.onPointerEnter, () => {
    p15.value && !M16 && (p15.onMenuOpen(c16.value), b20.current?.focus());
  }), onKeyDown: f2(e18.onKeyDown, (m20) => {
    a18 || (["Enter", " "].includes(m20.key) && p15.onMenuToggle(c16.value), m20.key === "ArrowDown" && p15.onMenuOpen(c16.value), ["Enter", " ", "ArrowDown"].includes(m20.key) && (c16.wasKeyboardTriggerOpenRef.current = true, m20.preventDefault()));
  }), onFocus: f2(e18.onFocus, () => v19(true)), onBlur: f2(e18.onBlur, () => v19(false)) }) }) }) });
});
V12.displayName = w14;
var me6 = "MenubarPortal";
var H10 = (e18) => {
  let { __scopeMenubar: n21, ...r18 } = e18, a18 = l14(n21);
  return i17(nn, { ...a18, ...r18 });
};
H10.displayName = me6;
var A12 = "MenubarContent";
var j13 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, align: a18 = "start", ...t18 } = e18, g21 = l14(r18), d14 = N18(A12, r18), p15 = B10(A12, r18), c16 = se9(r18), b20 = u14.useRef(false);
  return i17(on, { id: p15.contentId, "aria-labelledby": p15.triggerId, "data-radix-menubar-content": "", ...g21, ...t18, ref: n21, align: a18, onCloseAutoFocus: f2(e18.onCloseAutoFocus, (s16) => {
    !d14.value && !b20.current && p15.triggerRef.current?.focus(), b20.current = false, s16.preventDefault();
  }), onFocusOutside: f2(e18.onFocusOutside, (s16) => {
    let f21 = s16.target;
    c16().some((M16) => M16.ref.current?.contains(f21)) && s16.preventDefault();
  }), onInteractOutside: f2(e18.onInteractOutside, () => {
    b20.current = true;
  }), onEntryFocus: (s16) => {
    p15.wasKeyboardTriggerOpenRef.current || s16.preventDefault();
  }, onKeyDown: f2(e18.onKeyDown, (s16) => {
    if (["ArrowRight", "ArrowLeft"].includes(s16.key)) {
      let f21 = s16.target, v19 = f21.hasAttribute("data-radix-menubar-subtrigger"), M16 = f21.closest("[data-radix-menubar-content]") !== s16.currentTarget, R18 = (d14.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === s16.key;
      if (!R18 && v19 || M16 && R18) return;
      let S18 = c16().filter((P16) => !P16.disabled).map((P16) => P16.value);
      R18 && S18.reverse();
      let O23 = S18.indexOf(p15.value);
      S18 = d14.loop ? Ce8(S18, O23 + 1) : S18.slice(O23 + 1);
      let [T20] = S18;
      T20 && d14.onMenuOpen(T20);
    }
  }, { checkForDefaultPrevented: false }), style: { ...e18.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
j13.displayName = A12;
var be9 = "MenubarGroup";
var z13 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(rn, { ...t18, ...a18, ref: n21 });
});
z13.displayName = be9;
var ve8 = "MenubarLabel";
var W14 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(cn, { ...t18, ...a18, ref: n21 });
});
W14.displayName = ve8;
var fe7 = "MenubarItem";
var X14 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(an, { ...t18, ...a18, ref: n21 });
});
X14.displayName = fe7;
var Me7 = "MenubarCheckboxItem";
var Y11 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(sn, { ...t18, ...a18, ref: n21 });
});
Y11.displayName = Me7;
var ge10 = "MenubarRadioGroup";
var q13 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(un, { ...t18, ...a18, ref: n21 });
});
q13.displayName = ge10;
var Re5 = "MenubarRadioItem";
var J12 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(ln, { ...t18, ...a18, ref: n21 });
});
J12.displayName = Re5;
var he10 = "MenubarItemIndicator";
var Q12 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(dn, { ...t18, ...a18, ref: n21 });
});
Q12.displayName = he10;
var Se5 = "MenubarSeparator";
var Z12 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(fn, { ...t18, ...a18, ref: n21 });
});
Z12.displayName = Se5;
var _e9 = "MenubarArrow";
var $14 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(pn, { ...t18, ...a18, ref: n21 });
});
$14.displayName = _e9;
var ee9 = "MenubarSub";
var re11 = (e18) => {
  let { __scopeMenubar: n21, children: r18, open: a18, onOpenChange: t18, defaultOpen: g21 } = e18, d14 = l14(n21), [p15, c16] = D({ prop: a18, defaultProp: g21 ?? false, onChange: t18, caller: ee9 });
  return i17(mn, { ...d14, open: p15, onOpenChange: c16, children: r18 });
};
re11.displayName = ee9;
var Ie7 = "MenubarSubTrigger";
var ae8 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(Rn, { "data-radix-menubar-subtrigger": "", ...t18, ...a18, ref: n21 });
});
ae8.displayName = Ie7;
var Pe8 = "MenubarSubContent";
var ne10 = u14.forwardRef((e18, n21) => {
  let { __scopeMenubar: r18, ...a18 } = e18, t18 = l14(r18);
  return i17(vn, { ...t18, "data-radix-menubar-content": "", ...a18, ref: n21, style: { ...e18.style, "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-menubar-content-available-width": "var(--radix-popper-available-width)", "--radix-menubar-content-available-height": "var(--radix-popper-available-height)", "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)", "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)" } });
});
ne10.displayName = Pe8;
function Ce8(e18, n21) {
  return e18.map((r18, a18) => e18[(n21 + a18) % e18.length]);
}
var Le4 = L15;
var Be4 = U11;
var Ue5 = V12;
var Ve2 = H10;
var He2 = j13;
var je5 = z13;
var ze2 = W14;
var We2 = X14;
var Xe2 = Y11;
var Ye2 = q13;
var qe3 = J12;
var Je2 = Q12;
var Qe2 = Z12;
var Ze2 = $14;
var $e3 = re11;
var er = ae8;
var rr = ne10;

// http-url:https://esm.sh/@radix-ui/react-navigation-menu@1.2.16/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-navigation-menu.mjs
var react_navigation_menu_exports = {};
__export(react_navigation_menu_exports, {
  Content: () => mt3,
  Indicator: () => ft3,
  Item: () => lt3,
  Link: () => vt3,
  List: () => ut3,
  NavigationMenu: () => ue5,
  NavigationMenuContent: () => Me8,
  NavigationMenuIndicator: () => Ce9,
  NavigationMenuItem: () => pe7,
  NavigationMenuLink: () => we9,
  NavigationMenuList: () => fe8,
  NavigationMenuSub: () => le8,
  NavigationMenuTrigger: () => Re6,
  NavigationMenuViewport: () => he11,
  Root: () => st3,
  Sub: () => ct2,
  Trigger: () => dt3,
  Viewport: () => gt3,
  createNavigationMenuScope: () => at2
});
import * as n13 from "react";
import * as oe9 from "react-dom";
import { Fragment as Z13, jsx as u15, jsxs as ee10 } from "react/jsx-runtime";
var O14 = "NavigationMenu";
var [$15, ce7, De4] = re(O14);
var [G12, Oe6, Ae6] = re(O14);
var [Y12, at2] = $2(O14, [De4, Ae6]);
var [ke3, I13] = Y12(O14);
var [Fe6, Le5] = Y12(O14);
var ue5 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, value: a18, onValueChange: o15, defaultValue: r18, delayDuration: s16 = 200, skipDelayDuration: d14 = 300, orientation: l20 = "horizontal", dir: C18, ...c16 } = e18, [m20, E24] = n13.useState(null), N26 = s(t18, (M16) => E24(M16)), p15 = v5(C18), R18 = n13.useRef(0), h23 = n13.useRef(0), T20 = n13.useRef(0), [P16, v19] = n13.useState(true), [g21, f21] = D({ prop: a18, onChange: (M16) => {
    let x19 = M16 !== "", V20 = d14 > 0;
    x19 ? (window.clearTimeout(T20.current), V20 && v19(false)) : (window.clearTimeout(T20.current), T20.current = window.setTimeout(() => v19(true), d14)), o15?.(M16);
  }, defaultProp: r18 ?? "", caller: O14 }), w18 = n13.useCallback(() => {
    window.clearTimeout(h23.current), h23.current = window.setTimeout(() => f21(""), 150);
  }, [f21]), _22 = n13.useCallback((M16) => {
    window.clearTimeout(h23.current), f21(M16);
  }, [f21]), S18 = n13.useCallback((M16) => {
    g21 === M16 ? window.clearTimeout(h23.current) : R18.current = window.setTimeout(() => {
      window.clearTimeout(h23.current), f21(M16);
    }, s16);
  }, [g21, f21, s16]);
  return n13.useEffect(() => () => {
    window.clearTimeout(R18.current), window.clearTimeout(h23.current), window.clearTimeout(T20.current);
  }, []), u15(de6, { scope: i21, isRootMenu: true, value: g21, dir: p15, orientation: l20, rootNavigationMenu: m20, onTriggerEnter: (M16) => {
    window.clearTimeout(R18.current), P16 ? S18(M16) : _22(M16);
  }, onTriggerLeave: () => {
    window.clearTimeout(R18.current), w18();
  }, onContentEnter: () => window.clearTimeout(h23.current), onContentLeave: w18, onItemSelect: (M16) => {
    f21((x19) => x19 === M16 ? "" : M16);
  }, onItemDismiss: () => f21(""), children: u15(v2.nav, { "aria-label": "Main", "data-orientation": l20, dir: p15, ...c16, ref: N26 }) });
});
ue5.displayName = O14;
var U12 = "NavigationMenuSub";
var le8 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, value: a18, onValueChange: o15, defaultValue: r18, orientation: s16 = "horizontal", ...d14 } = e18, l20 = I13(U12, i21), [C18, c16] = D({ prop: a18, onChange: o15, defaultProp: r18 ?? "", caller: U12 });
  return u15(de6, { scope: i21, isRootMenu: false, value: C18, dir: l20.dir, orientation: s16, rootNavigationMenu: l20.rootNavigationMenu, onTriggerEnter: (m20) => c16(m20), onItemSelect: (m20) => c16(m20), onItemDismiss: () => c16(""), children: u15(v2.div, { "data-orientation": s16, ...d14, ref: t18 }) });
});
le8.displayName = U12;
var de6 = (e18) => {
  let { scope: t18, isRootMenu: i21, rootNavigationMenu: a18, dir: o15, orientation: r18, children: s16, value: d14, onItemSelect: l20, onItemDismiss: C18, onTriggerEnter: c16, onTriggerLeave: m20, onContentEnter: E24, onContentLeave: N26 } = e18, [p15, R18] = n13.useState(null), [h23, T20] = n13.useState(/* @__PURE__ */ new Map()), [P16, v19] = n13.useState(null);
  return u15(ke3, { scope: t18, isRootMenu: i21, rootNavigationMenu: a18, value: d14, previousValue: u9(d14), baseId: n5(), dir: o15, orientation: r18, viewport: p15, onViewportChange: R18, indicatorTrack: P16, onIndicatorTrackChange: v19, onTriggerEnter: u3(c16), onTriggerLeave: u3(m20), onContentEnter: u3(E24), onContentLeave: u3(N26), onItemSelect: u3(l20), onItemDismiss: u3(C18), onViewportContentChange: n13.useCallback((g21, f21) => {
    T20((w18) => (w18.set(g21, f21), new Map(w18)));
  }, []), onViewportContentRemove: n13.useCallback((g21) => {
    T20((f21) => f21.has(g21) ? (f21.delete(g21), new Map(f21)) : f21);
  }, []), children: u15($15.Provider, { scope: t18, children: u15(Fe6, { scope: t18, items: h23, children: s16 }) }) });
};
var ve9 = "NavigationMenuList";
var fe8 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, ...a18 } = e18, o15 = I13(ve9, i21), r18 = u15(v2.ul, { "data-orientation": o15.orientation, ...a18, ref: t18 });
  return u15(v2.div, { style: { position: "relative" }, ref: o15.onIndicatorTrackChange, children: u15($15.Slot, { scope: i21, children: o15.isRootMenu ? u15(Ee6, { asChild: true, children: r18 }) : r18 }) });
});
fe8.displayName = ve9;
var me7 = "NavigationMenuItem";
var [Ke4, ge11] = Y12(me7);
var pe7 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, value: a18, ...o15 } = e18, r18 = n5(), s16 = a18 || r18 || "LEGACY_REACT_AUTO_VALUE", d14 = n13.useRef(null), l20 = n13.useRef(null), C18 = n13.useRef(null), c16 = n13.useRef(() => {
  }), m20 = n13.useRef(false), E24 = n13.useCallback((p15 = "start") => {
    if (d14.current) {
      c16.current();
      let R18 = B11(d14.current);
      R18.length && X15(p15 === "start" ? R18 : R18.reverse());
    }
  }, []), N26 = n13.useCallback(() => {
    if (d14.current) {
      let p15 = B11(d14.current);
      p15.length && (c16.current = We3(p15));
    }
  }, []);
  return u15(Ke4, { scope: i21, value: s16, triggerRef: l20, contentRef: d14, focusProxyRef: C18, wasEscapeCloseRef: m20, onEntryKeyDown: E24, onFocusProxyEnter: E24, onRootContentClose: N26, onContentFocusOutside: N26, children: u15(v2.li, { ...o15, ref: t18 }) });
});
pe7.displayName = me7;
var H11 = "NavigationMenuTrigger";
var Re6 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, disabled: a18, ...o15 } = e18, r18 = I13(H11, e18.__scopeNavigationMenu), s16 = ge11(H11, e18.__scopeNavigationMenu), d14 = n13.useRef(null), l20 = s(d14, s16.triggerRef, t18), C18 = ye7(r18.baseId, s16.value), c16 = Ie8(r18.baseId, s16.value), m20 = n13.useRef(false), E24 = n13.useRef(false), N26 = s16.value === r18.value;
  return ee10(Z13, { children: [u15($15.ItemSlot, { scope: i21, value: s16.value, children: u15(Te3, { asChild: true, children: u15(v2.button, { id: C18, disabled: a18, "data-disabled": a18 ? "" : void 0, "data-state": J13(N26), "aria-expanded": N26, "aria-controls": N26 ? c16 : void 0, ...o15, ref: l20, onPointerEnter: f2(e18.onPointerEnter, () => {
    E24.current = false, s16.wasEscapeCloseRef.current = false;
  }), onPointerMove: f2(e18.onPointerMove, L16(() => {
    a18 || E24.current || s16.wasEscapeCloseRef.current || m20.current || (r18.onTriggerEnter(s16.value), m20.current = true);
  })), onPointerLeave: f2(e18.onPointerLeave, L16(() => {
    a18 || (r18.onTriggerLeave(), m20.current = false);
  })), onClick: f2(e18.onClick, () => {
    r18.onItemSelect(s16.value), E24.current = N26;
  }), onKeyDown: f2(e18.onKeyDown, (p15) => {
    let h23 = { horizontal: "ArrowDown", vertical: r18.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[r18.orientation];
    N26 && p15.key === h23 && (s16.onEntryKeyDown(), p15.preventDefault());
  }) }) }) }), N26 && ee10(Z13, { children: [u15(p, { "aria-hidden": true, tabIndex: 0, ref: s16.focusProxyRef, onFocus: (p15) => {
    let R18 = s16.contentRef.current, h23 = p15.relatedTarget, T20 = h23 === d14.current, P16 = R18?.contains(h23);
    (T20 || !P16) && s16.onFocusProxyEnter(T20 ? "start" : "end");
  } }), r18.viewport && u15("span", { "aria-owns": c16 })] })] });
});
Re6.displayName = H11;
var Ve3 = "NavigationMenuLink";
var te9 = "navigationMenu.linkSelect";
var we9 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, active: a18, onSelect: o15, ...r18 } = e18;
  return u15(Te3, { asChild: true, children: u15(v2.a, { "data-active": a18 ? "" : void 0, "aria-current": a18 ? "page" : void 0, ...r18, ref: t18, onClick: f2(e18.onClick, (s16) => {
    let d14 = s16.target, l20 = new CustomEvent(te9, { bubbles: true, cancelable: true });
    if (d14.addEventListener(te9, (C18) => o15?.(C18), { once: true }), R(d14, l20), !l20.defaultPrevented && !s16.metaKey) {
      let C18 = new CustomEvent(F5, { bubbles: true, cancelable: true });
      R(d14, C18);
    }
  }, { checkForDefaultPrevented: false }) }) });
});
we9.displayName = Ve3;
var j14 = "NavigationMenuIndicator";
var Ce9 = n13.forwardRef((e18, t18) => {
  let { forceMount: i21, ...a18 } = e18, o15 = I13(j14, e18.__scopeNavigationMenu), r18 = !!o15.value;
  return o15.indicatorTrack ? oe9.createPortal(u15(y2, { present: i21 || r18, children: u15(ze3, { ...a18, ref: t18 }) }), o15.indicatorTrack) : null;
});
Ce9.displayName = j14;
var ze3 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, ...a18 } = e18, o15 = I13(j14, i21), r18 = ce7(i21), [s16, d14] = n13.useState(null), [l20, C18] = n13.useState(null), c16 = o15.orientation === "horizontal", m20 = !!o15.value;
  n13.useEffect(() => {
    let p15 = r18().find((R18) => R18.value === o15.value)?.ref.current;
    p15 && d14(p15);
  }, [r18, o15.value]);
  let E24 = () => {
    s16 && C18({ size: c16 ? s16.offsetWidth : s16.offsetHeight, offset: c16 ? s16.offsetLeft : s16.offsetTop });
  };
  return W15(s16, E24), W15(o15.indicatorTrack, E24), l20 ? u15(v2.div, { "aria-hidden": true, "data-state": m20 ? "visible" : "hidden", "data-orientation": o15.orientation, ...a18, ref: t18, style: { position: "absolute", ...c16 ? { left: 0, width: l20.size + "px", transform: `translateX(${l20.offset}px)` } : { top: 0, height: l20.size + "px", transform: `translateY(${l20.offset}px)` }, ...a18.style } }) : null;
});
var A13 = "NavigationMenuContent";
var Me8 = n13.forwardRef((e18, t18) => {
  let { forceMount: i21, ...a18 } = e18, o15 = I13(A13, e18.__scopeNavigationMenu), r18 = ge11(A13, e18.__scopeNavigationMenu), s16 = s(r18.contentRef, t18), d14 = r18.value === o15.value, l20 = { value: r18.value, triggerRef: r18.triggerRef, focusProxyRef: r18.focusProxyRef, wasEscapeCloseRef: r18.wasEscapeCloseRef, onContentFocusOutside: r18.onContentFocusOutside, onRootContentClose: r18.onRootContentClose, ...a18 };
  return o15.viewport ? u15(Ge4, { forceMount: i21, ...l20, ref: s16 }) : u15(y2, { present: i21 || d14, children: u15(Ne7, { "data-state": J13(d14), ...l20, ref: s16, onPointerEnter: f2(e18.onPointerEnter, o15.onContentEnter), onPointerLeave: f2(e18.onPointerLeave, L16(o15.onContentLeave)), style: { pointerEvents: !d14 && o15.isRootMenu ? "none" : void 0, ...l20.style } }) });
});
Me8.displayName = A13;
var Ge4 = n13.forwardRef((e18, t18) => {
  let i21 = I13(A13, e18.__scopeNavigationMenu), { onViewportContentChange: a18, onViewportContentRemove: o15 } = i21;
  return e4(() => {
    a18(e18.value, { ref: t18, ...e18 });
  }, [e18, t18, a18]), e4(() => () => o15(e18.value), [e18.value, o15]), null;
});
var F5 = "navigationMenu.rootContentDismiss";
var Ne7 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, value: a18, triggerRef: o15, focusProxyRef: r18, wasEscapeCloseRef: s16, onRootContentClose: d14, onContentFocusOutside: l20, ...C18 } = e18, c16 = I13(A13, i21), m20 = n13.useRef(null), E24 = s(m20, t18), N26 = ye7(c16.baseId, a18), p15 = Ie8(c16.baseId, a18), R18 = ce7(i21), h23 = n13.useRef(null), { onItemDismiss: T20 } = c16;
  n13.useEffect(() => {
    let v19 = m20.current;
    if (c16.isRootMenu && v19) {
      let g21 = () => {
        T20(), d14(), v19.contains(document.activeElement) && o15.current?.focus();
      };
      return v19.addEventListener(F5, g21), () => v19.removeEventListener(F5, g21);
    }
  }, [c16.isRootMenu, e18.value, o15, T20, d14]);
  let P16 = n13.useMemo(() => {
    let g21 = R18().map((x19) => x19.value);
    c16.dir === "rtl" && g21.reverse();
    let f21 = g21.indexOf(c16.value), w18 = g21.indexOf(c16.previousValue), _22 = a18 === c16.value, S18 = w18 === g21.indexOf(a18);
    if (!_22 && !S18) return h23.current;
    let M16 = (() => {
      if (f21 !== w18) {
        if (_22 && w18 !== -1) return f21 > w18 ? "from-end" : "from-start";
        if (S18 && f21 !== -1) return f21 > w18 ? "to-start" : "to-end";
      }
      return null;
    })();
    return h23.current = M16, M16;
  }, [c16.previousValue, c16.value, c16.dir, R18, a18]);
  return u15(Ee6, { asChild: true, children: u15(_2, { id: p15, "aria-labelledby": N26, "data-motion": P16, "data-orientation": c16.orientation, ...C18, ref: E24, disableOutsidePointerEvents: false, onDismiss: () => {
    let v19 = new Event(F5, { bubbles: true, cancelable: true });
    m20.current?.dispatchEvent(v19);
  }, onFocusOutside: f2(e18.onFocusOutside, (v19) => {
    l20();
    let g21 = v19.target;
    c16.rootNavigationMenu?.contains(g21) && v19.preventDefault();
  }), onPointerDownOutside: f2(e18.onPointerDownOutside, (v19) => {
    let g21 = v19.target, f21 = R18().some((_22) => _22.ref.current?.contains(g21)), w18 = c16.isRootMenu && c16.viewport?.contains(g21);
    (f21 || w18 || !c16.isRootMenu) && v19.preventDefault();
  }), onKeyDown: f2(e18.onKeyDown, (v19) => {
    let g21 = v19.altKey || v19.ctrlKey || v19.metaKey;
    if (v19.key === "Tab" && !g21) {
      let w18 = B11(v19.currentTarget), _22 = document.activeElement, S18 = w18.findIndex((V20) => V20 === _22), x19 = v19.shiftKey ? w18.slice(0, S18).reverse() : w18.slice(S18 + 1, w18.length);
      X15(x19) ? v19.preventDefault() : r18.current?.focus();
    }
  }), onEscapeKeyDown: f2(e18.onEscapeKeyDown, (v19) => {
    s16.current = true;
  }) }) });
});
var q14 = "NavigationMenuViewport";
var he11 = n13.forwardRef((e18, t18) => {
  let { forceMount: i21, ...a18 } = e18, r18 = !!I13(q14, e18.__scopeNavigationMenu).value;
  return u15(y2, { present: i21 || r18, children: u15(Ue6, { ...a18, ref: t18 }) });
});
he11.displayName = q14;
var Ue6 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, children: a18, ...o15 } = e18, r18 = I13(q14, i21), s16 = s(t18, r18.onViewportChange), d14 = Le5(A13, e18.__scopeNavigationMenu), [l20, C18] = n13.useState(null), [c16, m20] = n13.useState(null), E24 = l20 ? l20?.width + "px" : void 0, N26 = l20 ? l20?.height + "px" : void 0, p15 = !!r18.value, R18 = p15 ? r18.value : r18.previousValue;
  return W15(c16, () => {
    c16 && C18({ width: c16.offsetWidth, height: c16.offsetHeight });
  }), u15(v2.div, { "data-state": J13(p15), "data-orientation": r18.orientation, ...o15, ref: s16, style: { pointerEvents: !p15 && r18.isRootMenu ? "none" : void 0, "--radix-navigation-menu-viewport-width": E24, "--radix-navigation-menu-viewport-height": N26, ...o15.style }, onPointerEnter: f2(e18.onPointerEnter, r18.onContentEnter), onPointerLeave: f2(e18.onPointerLeave, L16(r18.onContentLeave)), children: Array.from(d14.items).map(([T20, { ref: P16, forceMount: v19, ...g21 }]) => {
    let f21 = R18 === T20;
    return u15(y2, { present: v19 || f21, children: u15(Ne7, { ...g21, ref: i(P16, (w18) => {
      f21 && w18 && m20(w18);
    }) }) }, T20);
  }) });
});
var He3 = "FocusGroup";
var Ee6 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, ...a18 } = e18, o15 = I13(He3, i21);
  return u15(G12.Provider, { scope: i21, children: u15(G12.Slot, { scope: i21, children: u15(v2.div, { dir: o15.dir, ...a18, ref: t18 }) }) });
});
var ne11 = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
var Be5 = "FocusGroupItem";
var Te3 = n13.forwardRef((e18, t18) => {
  let { __scopeNavigationMenu: i21, ...a18 } = e18, o15 = Oe6(i21), r18 = I13(Be5, i21);
  return u15(G12.ItemSlot, { scope: i21, children: u15(v2.button, { ...a18, ref: t18, onKeyDown: f2(e18.onKeyDown, (s16) => {
    if (["Home", "End", ...ne11].includes(s16.key)) {
      let l20 = o15().map((m20) => m20.ref.current);
      if ([r18.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s16.key) && l20.reverse(), ne11.includes(s16.key)) {
        let m20 = l20.indexOf(s16.currentTarget);
        l20 = l20.slice(m20 + 1);
      }
      setTimeout(() => X15(l20)), s16.preventDefault();
    }
  }) }) });
});
function B11(e18) {
  let t18 = [], i21 = document.createTreeWalker(e18, NodeFilter.SHOW_ELEMENT, { acceptNode: (a18) => {
    let o15 = a18.tagName === "INPUT" && a18.type === "hidden";
    return a18.disabled || a18.hidden || o15 ? NodeFilter.FILTER_SKIP : a18.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; i21.nextNode(); ) t18.push(i21.currentNode);
  return t18;
}
function X15(e18) {
  let t18 = document.activeElement;
  return e18.some((i21) => i21 === t18 ? true : (i21.focus(), document.activeElement !== t18));
}
function We3(e18) {
  return e18.forEach((t18) => {
    t18.dataset.tabindex = t18.getAttribute("tabindex") || "", t18.setAttribute("tabindex", "-1");
  }), () => {
    e18.forEach((t18) => {
      let i21 = t18.dataset.tabindex;
      t18.setAttribute("tabindex", i21);
    });
  };
}
function W15(e18, t18) {
  let i21 = u3(t18);
  e4(() => {
    let a18 = 0;
    if (e18) {
      let o15 = new ResizeObserver(() => {
        cancelAnimationFrame(a18), a18 = window.requestAnimationFrame(i21);
      });
      return o15.observe(e18), () => {
        window.cancelAnimationFrame(a18), o15.unobserve(e18);
      };
    }
  }, [e18, i21]);
}
function J13(e18) {
  return e18 ? "open" : "closed";
}
function ye7(e18, t18) {
  return `${e18}-trigger-${t18}`;
}
function Ie8(e18, t18) {
  return `${e18}-content-${t18}`;
}
function L16(e18) {
  return (t18) => t18.pointerType === "mouse" ? e18(t18) : void 0;
}
var st3 = ue5;
var ct2 = le8;
var ut3 = fe8;
var lt3 = pe7;
var dt3 = Re6;
var vt3 = we9;
var ft3 = Ce9;
var mt3 = Me8;
var gt3 = he11;

// http-url:https://esm.sh/@radix-ui/react-one-time-password-field@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-one-time-password-field.mjs
var react_one_time_password_field_exports = {};
__export(react_one_time_password_field_exports, {
  HiddenInput: () => Me9,
  Input: () => je6,
  OneTimePasswordField: () => Be6,
  OneTimePasswordFieldHiddenInput: () => Me9,
  OneTimePasswordFieldInput: () => je6,
  Root: () => Be6
});

// http-url:https://esm.sh/@radix-ui/react-use-is-hydrated@0.1.1/X-ZXJlYWN0/es2022/react-use-is-hydrated.mjs
import * as u16 from "react";
import * as e17 from "react";
var t13 = false;
function n14() {
  let [s16, a18] = e17.useState(t13);
  return e17.useEffect(() => {
    t13 || (t13 = true, a18(true));
  }, []), s16;
}
var r15 = u16[" useSyncExternalStore ".trim().toString()];
function d10() {
  return () => {
  };
}
function o13() {
  return r15(d10, () => true, () => false);
}
var c13 = typeof r15 == "function" ? o13 : n14;

// http-url:https://esm.sh/@radix-ui/react-one-time-password-field@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-one-time-password-field.mjs
import * as n15 from "react";
import { flushSync as K14 } from "react-dom";

// http-url:https://esm.sh/@radix-ui/number@1.1.2/es2022/number.mjs
function m14(t18, [a18, n21]) {
  return Math.min(n21, Math.max(a18, t18));
}

// http-url:https://esm.sh/@radix-ui/react-one-time-password-field@0.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-one-time-password-field.mjs
import { jsx as v16 } from "react/jsx-runtime";
var q15 = { numeric: { type: "numeric", regexp: /[^\d]/g, pattern: "\\d{1}", inputMode: "numeric" }, alpha: { type: "alpha", regexp: /[^a-zA-Z]/g, pattern: "[a-zA-Z]{1}", inputMode: "text" }, alphanumeric: { type: "alphanumeric", regexp: /[^a-zA-Z0-9]/g, pattern: "[a-zA-Z0-9]{1}", inputMode: "text" }, none: null };
var ae9 = "OneTimePasswordField";
var [ne12, { useCollection: Te4, createCollectionScope: Ae7, useInitCollection: xe7 }] = fe(ae9);
var [ke4] = $2(ae9, [Ae7, be4]);
var de7 = be4();
var [ve10, ye8] = ke4(ae9);
var Be6 = n15.forwardRef(function({ __scopeOneTimePasswordField: g21, defaultValue: D19, value: I18, onValueChange: R18, autoSubmit: b20 = false, children: _22, onPaste: L25, onAutoSubmit: U16, disabled: ce11 = false, readOnly: le13 = false, autoComplete: ue11 = "one-time-code", autoFocus: se13 = false, form: O23, name: ie10, placeholder: pe13, type: W22 = "text", orientation: s16 = "horizontal", dir: C18, validationType: p15 = "numeric", sanitizeValue: P16, ...$20 }, J20) {
  let h23 = de7(g21), Q20 = v5(C18), B19 = xe7(), [l20] = B19, f21 = q15[p15] ? q15[p15] : null, r18 = n15.useCallback((t18) => {
    if (Array.isArray(t18) ? t18 = t18.map(fe9).join("") : t18 = fe9(t18), f21) {
      let a18 = new RegExp(f21.regexp);
      t18 = t18.replace(a18, "");
    } else P16 && (t18 = P16(t18));
    return t18.split("");
  }, [f21, P16]), X25 = n15.useMemo(() => I18 != null ? r18(I18) : void 0, [I18, r18]), [m20, w18] = D({ caller: "OneTimePasswordField", prop: X25, defaultProp: D19 != null ? r18(D19) : [], onChange: n15.useCallback((t18) => R18?.(t18.join("")), [R18]) }), M16 = n15.useRef(m20);
  M16.current = m20;
  let E24 = n15.useCallback((t18) => {
    let a18 = M16.current;
    switch (t18.type) {
      case "SET_CHAR": {
        let { index: A17, char: d14 } = t18, y20 = l20.at(A17)?.element;
        if (a18[A17] === d14) {
          let k16 = y20 && l20.from(y20, 1)?.element;
          x13(k16);
          return;
        }
        if (d14 === "") return;
        if (f21) {
          let k16 = new RegExp(f21.regexp);
          if (d14.replace(k16, "") !== d14) return;
        }
        if (a18.length >= l20.size) {
          let k16 = [...a18];
          k16[A17] = d14, K14(() => w18(k16));
          let N26 = y20 && l20.from(y20, 1)?.element;
          x13(N26);
          return;
        }
        let V20 = [...a18];
        V20[A17] = d14;
        let te14 = l20.at(-1)?.element;
        if (K14(() => w18(V20)), y20 !== te14) {
          let k16 = y20 && l20.from(y20, 1)?.element;
          x13(k16);
        } else y20?.select();
        return;
      }
      case "CLEAR_CHAR": {
        let { index: A17, reason: d14 } = t18;
        if (!a18[A17]) return;
        let y20 = a18.filter((k16, N26) => N26 !== A17), V20 = l20.at(A17)?.element, te14 = V20 && l20.from(V20, -1)?.element;
        K14(() => w18(y20)), d14 === "Backspace" ? x13(te14) : (d14 === "Delete" || d14 === "Cut") && x13(V20);
        return;
      }
      case "CLEAR": {
        if (a18.length === 0) return;
        t18.reason === "Backspace" || t18.reason === "Delete" ? (K14(() => w18([])), x13(l20.at(0)?.element)) : w18([]);
        return;
      }
      case "PASTE": {
        let { value: A17 } = t18, d14 = r18(A17);
        if (!d14) return;
        let y20 = d14.slice(0, l20.size);
        K14(() => w18(y20)), x13(l20.at(y20.length - 1)?.element);
        return;
      }
    }
  }, [l20, r18, w18, f21]), j19 = n15.useRef(f21);
  n15.useEffect(() => {
    f21 && j19.current?.type !== f21.type && (j19.current = f21, w18(r18(m20.join(""))));
  }, [r18, w18, f21, m20]);
  let F11 = n15.useRef(null), Y19 = n15.useRef(null), H15 = n15.useRef(null), ee15 = s(J20, H15), z17 = l20.at(0)?.element, T20 = n15.useCallback(() => {
    let t18;
    if (O23) {
      let a18 = (H15.current?.ownerDocument ?? document).getElementById(O23);
      Ie9(a18) && (t18 = a18);
    } else F11.current ? t18 = F11.current.form : z17 && (t18 = z17.form);
    return t18 ?? null;
  }, [O23, z17]), e18 = n15.useCallback(() => {
    T20()?.requestSubmit();
  }, [T20]);
  n15.useEffect(() => {
    let t18 = T20();
    if (t18) {
      let a18 = () => E24({ type: "CLEAR", reason: "Reset" });
      return t18.addEventListener("reset", a18), () => t18.removeEventListener("reset", a18);
    }
  }, [E24, T20]);
  let o15 = m20.join(""), u20 = n15.useRef(o15), c16 = l20.size;
  n15.useEffect(() => {
    let t18 = u20.current;
    u20.current = o15, t18 !== o15 && b20 && m20.every((a18) => a18 !== "") && m20.length === c16 && (U16?.(m20.join("")), e18());
  }, [e18, b20, o15, c16, U16, m20]);
  let G19 = c13();
  return v16(ve10, { scope: g21, value: m20, attemptSubmit: e18, disabled: ce11, readOnly: le13, autoComplete: ue11, autoFocus: se13, form: O23, name: ie10, placeholder: pe13, type: W22, hiddenInputRef: F11, userActionRef: Y19, dispatch: E24, validationType: p15, orientation: s16, isHydrated: G19, sanitizeValue: r18, children: v16(ne12.Provider, { scope: g21, state: B19, children: v16(ne12.Slot, { scope: g21, children: v16(Fe3, { asChild: true, ...h23, orientation: s16, dir: Q20, children: v16(w.div, { ...$20, role: "group", ref: ee15, onPaste: f2(L25, (t18) => {
    t18.preventDefault();
    let a18 = t18.clipboardData.getData("text/plain");
    E24({ type: "PASTE", value: a18 });
  }), children: _22 }) }) }) }) });
});
var Me9 = n15.forwardRef(function({ __scopeOneTimePasswordField: g21, ...D19 }, I18) {
  let { value: R18, hiddenInputRef: b20, name: _22 } = ye8("OneTimePasswordFieldHiddenInput", g21), L25 = s(b20, I18);
  return v16("input", { ref: L25, name: _22, value: R18.join("").trim(), autoComplete: "off", autoFocus: false, autoCapitalize: "off", autoCorrect: "off", autoSave: "off", spellCheck: false, ...D19, type: "hidden", readOnly: true });
});
var je6 = n15.forwardRef(function({ __scopeOneTimePasswordField: g21, onInvalidChange: D19, index: I18, ...R18 }, b20) {
  let { value: _22, defaultValue: L25, disabled: U16, readOnly: ce11, autoComplete: le13, autoFocus: ue11, form: se13, name: O23, placeholder: ie10, type: pe13, ...W22 } = R18, s16 = ye8("OneTimePasswordFieldInput", g21), { dispatch: C18, userActionRef: p15, validationType: P16, isHydrated: $20, disabled: J20 } = s16, h23 = Te4(g21), Q20 = de7(g21), B19 = n15.useRef(null), [l20, f21] = n15.useState(null), r18 = I18 ?? (l20 ? h23.indexOf(l20) : -1), X25 = I18 != null || $20, m20;
  X25 && s16.placeholder && s16.value.length === 0 && (m20 = s16.placeholder[r18]);
  let w18 = s(b20, B19, f21), M16 = s16.value[r18] ?? "", E24 = n15.useRef(null);
  n15.useEffect(() => () => {
    E24.current && window.clearTimeout(E24.current);
  }, []);
  let j19 = s16.value.join("").trim(), F11 = m14(j19.length, [0, h23.size - 1]), Y19 = r18 <= F11, H15 = P16 in q15 ? q15[P16] : void 0;
  return v16(ne12.ItemSlot, { scope: g21, children: v16(ge5, { ...Q20, asChild: true, focusable: !s16.disabled && Y19, active: r18 === F11, children: ({ hasTabStop: ee15, isCurrentTabStop: z17 }) => {
    let T20 = ee15 ? z17 : r18 === 0;
    return v16(w.input, { ref: w18, type: s16.type, disabled: J20, "aria-label": `Character ${r18 + 1} of ${h23.size}`, autoComplete: T20 ? s16.autoComplete : "off", "data-1p-ignore": T20 ? void 0 : "true", "data-lpignore": T20 ? void 0 : "true", "data-protonpass-ignore": T20 ? void 0 : "true", "data-bwignore": T20 ? void 0 : "true", inputMode: H15?.inputMode, maxLength: T20 ? h23.size : 1, pattern: H15?.pattern, readOnly: s16.readOnly, value: M16, placeholder: m20, "data-radix-otp-input": "", "data-radix-index": r18, ...W22, onFocus: f2(R18.onFocus, (e18) => {
      e18.currentTarget.select();
    }), onCut: f2(R18.onCut, (e18) => {
      e18.currentTarget.value !== "" && (p15.current = { type: "cut" }, E24.current = window.setTimeout(() => {
        p15.current = null;
      }, 10));
    }), onInput: f2(R18.onInput, (e18) => {
      let o15 = e18.currentTarget.value;
      o15.length > 1 && (e18.preventDefault(), p15.current = { type: "autocomplete-paste" }, C18({ type: "PASTE", value: o15 }), E24.current = window.setTimeout(() => {
        p15.current = null;
      }, 10));
    }), onChange: f2(R18.onChange, (e18) => {
      let o15 = e18.target.value;
      e18.preventDefault();
      let u20 = p15.current;
      if (p15.current = null, u20) switch (u20.type) {
        case "cut":
          C18({ type: "CLEAR_CHAR", index: r18, reason: "Cut" });
          return;
        case "autocomplete-paste":
          return;
        case "keydown": {
          if (u20.key === "Char") return;
          let c16 = u20.key === "Backspace" && (u20.metaKey || u20.ctrlKey);
          u20.key === "Clear" || c16 ? C18({ type: "CLEAR", reason: "Backspace" }) : C18({ type: "CLEAR_CHAR", index: r18, reason: u20.key });
          return;
        }
        default:
          return;
      }
      if (e18.target.validity.valid) if (o15 === "") {
        let c16 = "Backspace";
        if (Fe7(e18.nativeEvent)) {
          let G19 = e18.nativeEvent.inputType;
          G19 === "deleteContentBackward" ? c16 = "Backspace" : G19 === "deleteByCut" && (c16 = "Cut");
        }
        C18({ type: "CLEAR_CHAR", index: r18, reason: c16 });
      } else C18({ type: "SET_CHAR", char: o15, index: r18, event: e18 });
      else {
        let c16 = e18.target;
        D19?.(c16.value), requestAnimationFrame(() => {
          c16.ownerDocument.activeElement === c16 && c16.select();
        });
      }
    }), onKeyDown: f2(R18.onKeyDown, (e18) => {
      switch (e18.key) {
        case "Clear":
        case "Delete":
        case "Backspace": {
          if (e18.currentTarget.value === "") {
            if (e18.key === "Delete") return;
            if (e18.key === "Clear" || e18.metaKey || e18.ctrlKey) C18({ type: "CLEAR", reason: "Backspace" });
            else {
              let c16 = e18.currentTarget;
              requestAnimationFrame(() => {
                x13(h23.from(c16, -1)?.element);
              });
            }
          } else p15.current = { type: "keydown", key: e18.key, metaKey: e18.metaKey, ctrlKey: e18.ctrlKey }, E24.current = window.setTimeout(() => {
            p15.current = null;
          }, 10);
          return;
        }
        case "Enter": {
          e18.preventDefault(), s16.attemptSubmit();
          return;
        }
        case "ArrowDown":
        case "ArrowUp": {
          s16.orientation === "horizontal" && e18.preventDefault();
          return;
        }
        default:
          if (e18.currentTarget.value === e18.key) {
            let o15 = e18.currentTarget;
            e18.preventDefault(), x13(h23.from(o15, 1)?.element);
            return;
          } else if (e18.currentTarget.value && !(e18.currentTarget.selectionStart === 0 && e18.currentTarget.selectionEnd != null && e18.currentTarget.selectionEnd > 0)) {
            let o15 = e18.key;
            if (e18.key.length > 1 || e18.key === " ") return;
            {
              let u20 = h23.from(e18.currentTarget, 1)?.element, c16 = h23.at(-1)?.element;
              u20 !== c16 && e18.currentTarget !== c16 && (e18.currentTarget.selectionStart === 0 ? C18({ type: "SET_CHAR", char: o15, index: r18, event: e18 }) : C18({ type: "SET_CHAR", char: o15, index: r18 + 1, event: e18 }), p15.current = { type: "keydown", key: "Char", metaKey: e18.metaKey, ctrlKey: e18.ctrlKey }, E24.current = window.setTimeout(() => {
                p15.current = null;
              }, 10));
            }
          }
      }
    }), onPointerDown: f2(R18.onPointerDown, (e18) => {
      e18.preventDefault();
      let o15 = Math.min(r18, F11), u20 = h23.at(o15)?.element;
      x13(u20);
    }) });
  } }) });
});
function Ie9(i21) {
  return i21?.tagName === "FORM";
}
function fe9(i21) {
  return i21.replace(/\s/g, "");
}
function x13(i21) {
  i21 && (i21.ownerDocument.activeElement === i21 ? window.requestAnimationFrame(() => {
    i21.select?.();
  }) : i21.focus());
}
function Fe7(i21) {
  return i21.type === "input";
}

// http-url:https://esm.sh/@radix-ui/react-password-toggle-field@0.1.5/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-password-toggle-field.mjs
var react_password_toggle_field_exports = {};
__export(react_password_toggle_field_exports, {
  Icon: () => te10,
  Input: () => Y13,
  PasswordToggleField: () => X16,
  PasswordToggleFieldIcon: () => te10,
  PasswordToggleFieldInput: () => Y13,
  PasswordToggleFieldSlot: () => ee11,
  PasswordToggleFieldToggle: () => Z14,
  Root: () => X16,
  Slot: () => ee11,
  Toggle: () => Z14
});
import * as t14 from "react";
import { flushSync as B12 } from "react-dom";
import { jsx as _16 } from "react/jsx-runtime";
var I14 = "PasswordToggleField";
var [K15] = $2(I14);
var [Q13, w15] = K15(I14);
var C9 = { clickTriggered: false, selectionStart: null, selectionEnd: null };
var X16 = ({ __scopePasswordToggleField: n21, ...e18 }) => {
  let l20 = `${n5(e18.id)}-input`, [a18, c16] = t14.useState(l20), E24 = a18 ?? l20, d14 = t14.useCallback((i21) => c16(i21 != null ? String(i21) : null), []), { visible: m20, defaultVisible: R18, children: S18 } = e18, g21 = e18.onVisibilityChange, b20 = false;
  !g21 && "onVisiblityChange" in e18 && typeof e18.onVisiblityChange == "function" ? (b20 = true, g21 = e18.onVisiblityChange) : g21 = e18.onVisibilityChange, t14.useEffect(() => {
    b20 && console.warn("PasswordToggleField: The misspelled `onVisiblityChange` prop has been removed. Please use `onVisibilityChange` instead.");
  }, [b20]);
  let [h23 = false, p15] = D({ caller: I14, prop: m20, defaultProp: R18 ?? false, onChange: g21 }), f21 = t14.useRef(null), u20 = t14.useRef(C9);
  return _16(Q13, { scope: n21, inputId: E24, inputRef: f21, setVisible: p15, syncInputId: d14, visible: h23, focusState: u20, children: S18 });
};
X16.displayName = I14;
var V13 = I14 + "Input";
var Y13 = t14.forwardRef(({ __scopePasswordToggleField: n21, autoComplete: e18 = "current-password", autoCapitalize: s16 = "off", spellCheck: l20 = false, id: a18, ...c16 }, E24) => {
  let { visible: d14, inputRef: m20, inputId: R18, syncInputId: S18, setVisible: g21, focusState: b20 } = w15(V13, n21);
  t14.useEffect(() => {
    S18(a18);
  }, [a18, S18]);
  let h23 = i3(g21);
  return t14.useEffect(() => {
    let f21 = m20.current?.form;
    if (!f21) return;
    let u20 = new AbortController();
    return f21.addEventListener("reset", (i21) => {
      i21.defaultPrevented || h23(false);
    }, { signal: u20.signal }), f21.addEventListener("submit", () => {
      h23(false);
    }, { signal: u20.signal }), () => {
      u20.abort();
    };
  }, [m20]), _16(v2.input, { ...c16, id: a18 ?? R18, autoCapitalize: s16, autoComplete: e18, ref: s(E24, m20), spellCheck: l20, type: d14 ? "text" : "password", onBlur: f2(c16.onBlur, (p15) => {
    let { selectionStart: f21, selectionEnd: u20 } = p15.currentTarget;
    b20.current.selectionStart = f21, b20.current.selectionEnd = u20;
  }) });
});
Y13.displayName = V13;
var x14 = I14 + "Toggle";
var Z14 = t14.forwardRef(({ __scopePasswordToggleField: n21, onClick: e18, onPointerDown: s16, onPointerCancel: l20, onPointerUp: a18, onFocus: c16, children: E24, "aria-label": d14, "aria-controls": m20, "aria-hidden": R18, tabIndex: S18, ...g21 }, b20) => {
  let { setVisible: h23, visible: p15, inputRef: f21, inputId: u20, focusState: i21 } = w15(x14, n21), [k16, F11] = t14.useState(void 0), y20 = t14.useRef(null), M16 = s(b20, y20), W22 = c13();
  t14.useEffect(() => {
    let r18 = y20.current;
    if (!r18 || d14) {
      F11(void 0);
      return;
    }
    let o15 = p15 ? "Hide password" : "Show password";
    function T20(P16) {
      F11(P16 || void 0 ? void 0 : o15);
    }
    T20(r18.textContent);
    let v19 = new MutationObserver((P16) => {
      let L25;
      for (let q23 of P16) q23.type === "characterData" && r18.textContent && (L25 = r18.textContent);
      T20(L25);
    });
    return v19.observe(r18, { characterData: true, subtree: true }), () => {
      v19.disconnect();
    };
  }, [p15, d14]);
  let U16 = d14 || k16;
  return W22 ? m20 ??= u20 : (R18 ??= true, S18 ??= -1), t14.useEffect(() => {
    let r18 = () => {
    }, o15 = y20.current?.ownerDocument?.defaultView || window, T20 = () => i21.current.clickTriggered = false, v19 = () => r18 = ne13(o15, T20);
    return o15.addEventListener("pointerup", v19), () => {
      r18(), o15.removeEventListener("pointerup", v19);
    };
  }, [i21]), _16(v2.button, { "aria-controls": m20, "aria-hidden": R18, "aria-label": U16, ref: M16, id: u20, ...g21, onPointerDown: f2(s16, () => {
    i21.current.clickTriggered = true;
  }), onPointerCancel: (r18) => {
    l20?.(r18), i21.current = C9;
  }, onClick: (r18) => {
    if (e18?.(r18), r18.defaultPrevented) {
      i21.current = C9;
      return;
    }
    if (B12(() => {
      h23((o15) => !o15);
    }), i21.current.clickTriggered) {
      let o15 = f21.current;
      if (o15) {
        let { selectionStart: T20, selectionEnd: v19 } = i21.current;
        o15.focus(), (T20 !== null || v19 !== null) && requestAnimationFrame(() => {
          o15.ownerDocument.activeElement === o15 && (o15.selectionStart = T20, o15.selectionEnd = v19);
        });
      }
    }
    i21.current = C9;
  }, onPointerUp: (r18) => {
    a18?.(r18), setTimeout(() => {
      i21.current = C9;
    }, 50);
  }, type: "button", children: E24 });
});
Z14.displayName = x14;
var N19 = I14 + "Slot";
var ee11 = ({ __scopePasswordToggleField: n21, ...e18 }) => {
  let { visible: s16 } = w15(N19, n21);
  return "render" in e18 ? e18.render({ visible: s16 }) : s16 ? e18.visible : e18.hidden;
};
ee11.displayName = N19;
var G13 = I14 + "Icon";
var te10 = t14.forwardRef(({ __scopePasswordToggleField: n21, children: e18, ...s16 }, l20) => {
  let { visible: a18 } = w15(G13, n21), { visible: c16, hidden: E24, ...d14 } = s16;
  return _16(v2.svg, { ...d14, ref: l20, "aria-hidden": true, asChild: true, children: a18 ? c16 : E24 });
});
te10.displayName = G13;
function ne13(n21, e18, s16) {
  if (n21.requestIdleCallback) {
    let c16 = n21.requestIdleCallback(e18, s16);
    return () => {
      n21.cancelIdleCallback(c16);
    };
  }
  let l20 = Date.now(), a18 = n21.setTimeout(() => {
    e18({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (Date.now() - l20)) });
  }, 1);
  return () => {
    n21.clearTimeout(a18);
  };
}

// http-url:https://esm.sh/@radix-ui/react-popover@1.1.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-popover.mjs
var react_popover_exports = {};
__export(react_popover_exports, {
  Anchor: () => Ae8,
  Arrow: () => Ee7,
  Close: () => we10,
  Content: () => xe8,
  Popover: () => F6,
  PopoverAnchor: () => S14,
  PopoverArrow: () => G14,
  PopoverClose: () => L17,
  PopoverContent: () => k13,
  PopoverPortal: () => M7,
  PopoverTrigger: () => D13,
  Portal: () => _e10,
  Root: () => Ce10,
  Trigger: () => Oe7,
  createPopoverScope: () => ge12
});
import * as n16 from "react";
import { jsx as i18 } from "react/jsx-runtime";
var C10 = "Popover";
var [b15, ge12] = $2(C10, [Fe2]);
var R13 = Fe2();
var [Q14, l15] = b15(C10);
var F6 = (e18) => {
  let { __scopePopover: a18, children: t18, open: c16, defaultOpen: o15, onOpenChange: r18, modal: s16 = false } = e18, p15 = R13(a18), v19 = n16.useRef(null), [P16, h23] = n16.useState(false), [g21, f21] = D({ prop: c16, defaultProp: o15 ?? false, onChange: r18, caller: C10 });
  return i18(Be2, { ...p15, children: i18(Q14, { scope: a18, contentId: n5(), triggerRef: v19, open: g21, onOpenChange: f21, onOpenToggle: n16.useCallback(() => f21((A17) => !A17), [f21]), hasCustomAnchor: P16, onCustomAnchorAdd: n16.useCallback(() => h23(true), []), onCustomAnchorRemove: n16.useCallback(() => h23(false), []), modal: s16, children: t18 }) });
};
F6.displayName = C10;
var N20 = "PopoverAnchor";
var S14 = n16.forwardRef((e18, a18) => {
  let { __scopePopover: t18, ...c16 } = e18, o15 = l15(N20, t18), r18 = R13(t18), { onCustomAnchorAdd: s16, onCustomAnchorRemove: p15 } = o15;
  return n16.useEffect(() => (s16(), () => p15()), [s16, p15]), i18(je3, { ...r18, ...c16, ref: a18 });
});
S14.displayName = N20;
var y17 = "PopoverTrigger";
var D13 = n16.forwardRef((e18, a18) => {
  let { __scopePopover: t18, ...c16 } = e18, o15 = l15(y17, t18), r18 = R13(t18), s16 = s(a18, o15.triggerRef), p15 = i18(v2.button, { type: "button", "aria-haspopup": "dialog", "aria-expanded": o15.open, "aria-controls": o15.open ? o15.contentId : void 0, "data-state": H12(o15.open), ...c16, ref: s16, onClick: f2(e18.onClick, o15.onOpenToggle) });
  return o15.hasCustomAnchor ? p15 : i18(je3, { asChild: true, ...r18, children: p15 });
});
D13.displayName = y17;
var O15 = "PopoverPortal";
var [X17, Y14] = b15(O15, { forceMount: void 0 });
var M7 = (e18) => {
  let { __scopePopover: a18, forceMount: t18, children: c16, container: o15 } = e18, r18 = l15(O15, a18);
  return i18(X17, { scope: a18, forceMount: t18, children: i18(y2, { present: t18 || r18.open, children: i18(e9, { asChild: true, container: o15, children: c16 }) }) });
};
M7.displayName = O15;
var d11 = "PopoverContent";
var k13 = n16.forwardRef((e18, a18) => {
  let t18 = Y14(d11, e18.__scopePopover), { forceMount: c16 = t18.forceMount, ...o15 } = e18, r18 = l15(d11, e18.__scopePopover);
  return i18(y2, { present: c16 || r18.open, children: r18.modal ? i18(ee12, { ...o15, ref: a18 }) : i18(oe10, { ...o15, ref: a18 }) });
});
k13.displayName = d11;
var $16 = b("PopoverContent.RemoveScroll");
var ee12 = n16.forwardRef((e18, a18) => {
  let t18 = l15(d11, e18.__scopePopover), c16 = n16.useRef(null), o15 = s(a18, c16), r18 = n16.useRef(false);
  return n16.useEffect(() => {
    let s16 = c16.current;
    if (s16) return S8(s16);
  }, []), i18(l10, { as: $16, allowPinchZoom: true, children: i18(I15, { ...e18, ref: o15, trapFocus: t18.open, disableOutsidePointerEvents: true, onCloseAutoFocus: f2(e18.onCloseAutoFocus, (s16) => {
    s16.preventDefault(), r18.current || t18.triggerRef.current?.focus();
  }), onPointerDownOutside: f2(e18.onPointerDownOutside, (s16) => {
    let p15 = s16.detail.originalEvent, v19 = p15.button === 0 && p15.ctrlKey === true, P16 = p15.button === 2 || v19;
    r18.current = P16;
  }, { checkForDefaultPrevented: false }), onFocusOutside: f2(e18.onFocusOutside, (s16) => s16.preventDefault(), { checkForDefaultPrevented: false }) }) });
});
var oe10 = n16.forwardRef((e18, a18) => {
  let t18 = l15(d11, e18.__scopePopover), c16 = n16.useRef(false), o15 = n16.useRef(false);
  return i18(I15, { ...e18, ref: a18, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (r18) => {
    e18.onCloseAutoFocus?.(r18), r18.defaultPrevented || (c16.current || t18.triggerRef.current?.focus(), r18.preventDefault()), c16.current = false, o15.current = false;
  }, onInteractOutside: (r18) => {
    e18.onInteractOutside?.(r18), r18.defaultPrevented || (c16.current = true, r18.detail.originalEvent.type === "pointerdown" && (o15.current = true));
    let s16 = r18.target;
    t18.triggerRef.current?.contains(s16) && r18.preventDefault(), r18.detail.originalEvent.type === "focusin" && o15.current && r18.preventDefault();
  } });
});
var I15 = n16.forwardRef((e18, a18) => {
  let { __scopePopover: t18, trapFocus: c16, onOpenAutoFocus: o15, onCloseAutoFocus: r18, disableOutsidePointerEvents: s16, onEscapeKeyDown: p15, onPointerDownOutside: v19, onFocusOutside: P16, onInteractOutside: h23, ...g21 } = e18, f21 = l15(d11, t18), A17 = R13(t18);
  return a3(), i18(L4, { asChild: true, loop: true, trapped: c16, onMountAutoFocus: o15, onUnmountAutoFocus: r18, children: i18(_2, { asChild: true, disableOutsidePointerEvents: s16, onInteractOutside: h23, onEscapeKeyDown: p15, onPointerDownOutside: v19, onFocusOutside: P16, onDismiss: () => f21.onOpenChange(false), deferPointerDownOutside: true, children: i18(Le2, { "data-state": H12(f21.open), role: "dialog", id: f21.contentId, ...A17, ...g21, ref: a18, style: { ...g21.style, "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-popover-content-available-width": "var(--radix-popper-available-width)", "--radix-popover-content-available-height": "var(--radix-popper-available-height)", "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)", "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)" } }) }) });
});
var T15 = "PopoverClose";
var L17 = n16.forwardRef((e18, a18) => {
  let { __scopePopover: t18, ...c16 } = e18, o15 = l15(T15, t18);
  return i18(v2.button, { type: "button", ...c16, ref: a18, onClick: f2(e18.onClick, () => o15.onOpenChange(false)) });
});
L17.displayName = T15;
var re12 = "PopoverArrow";
var G14 = n16.forwardRef((e18, a18) => {
  let { __scopePopover: t18, ...c16 } = e18, o15 = R13(t18);
  return i18(Ue2, { ...o15, ...c16, ref: a18 });
});
G14.displayName = re12;
function H12(e18) {
  return e18 ? "open" : "closed";
}
var Ce10 = F6;
var Ae8 = S14;
var Oe7 = D13;
var _e10 = M7;
var xe8 = k13;
var we10 = L17;
var Ee7 = G14;

// http-url:https://esm.sh/@radix-ui/react-progress@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-progress.mjs
var react_progress_exports = {};
__export(react_progress_exports, {
  Indicator: () => L18,
  Progress: () => f17,
  ProgressIndicator: () => P10,
  Root: () => D14,
  createProgressScope: () => C11
});
import * as u17 from "react";
import { jsx as l16 } from "react/jsx-runtime";
var d12 = "Progress";
var v17 = 100;
var [$17, C11] = $2(d12);
var [h18, _17] = $17(d12);
var f17 = u17.forwardRef((r18, e18) => {
  let { __scopeProgress: i21, value: o15 = null, max: a18, getValueLabel: N26 = E19, ...b20 } = r18;
  (a18 || a18 === 0) && !p11(a18) && console.error(M8(`${a18}`, "Progress"));
  let t18 = p11(a18) ? a18 : v17;
  o15 !== null && !c14(o15, t18) && console.error(V14(`${o15}`, "Progress"));
  let s16 = c14(o15, t18) ? o15 : null, I18 = n17(s16) ? N26(s16, t18) : void 0;
  return l16(h18, { scope: i21, value: s16, max: t18, children: l16(v2.div, { "aria-valuemax": t18, "aria-valuemin": 0, "aria-valuenow": n17(s16) ? s16 : void 0, "aria-valuetext": I18, role: "progressbar", "data-state": x15(s16, t18), "data-value": s16 ?? void 0, "data-max": t18, ...b20, ref: e18 }) });
});
f17.displayName = d12;
var g18 = "ProgressIndicator";
var P10 = u17.forwardRef((r18, e18) => {
  let { __scopeProgress: i21, ...o15 } = r18, a18 = _17(g18, i21);
  return l16(v2.div, { "data-state": x15(a18.value, a18.max), "data-value": a18.value ?? void 0, "data-max": a18.max, ...o15, ref: e18 });
});
P10.displayName = g18;
function E19(r18, e18) {
  return `${Math.round(r18 / e18 * 100)}%`;
}
function x15(r18, e18) {
  return r18 == null ? "indeterminate" : r18 === e18 ? "complete" : "loading";
}
function n17(r18) {
  return typeof r18 == "number";
}
function p11(r18) {
  return n17(r18) && !isNaN(r18) && r18 > 0;
}
function c14(r18, e18) {
  return n17(r18) && !isNaN(r18) && r18 <= e18 && r18 >= 0;
}
function M8(r18, e18) {
  return `Invalid prop \`max\` of value \`${r18}\` supplied to \`${e18}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v17}\`.`;
}
function V14(r18, e18) {
  return `Invalid prop \`value\` of value \`${r18}\` supplied to \`${e18}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v17} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var D14 = f17;
var L18 = P10;

// http-url:https://esm.sh/@radix-ui/react-radio-group@1.4.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-radio-group.mjs
var react_radio_group_exports = {};
__export(react_radio_group_exports, {
  Indicator: () => Ce11,
  Item: () => ge13,
  RadioGroup: () => ve11,
  RadioGroupIndicator: () => Ce11,
  RadioGroupItem: () => ge13,
  Root: () => ve11,
  createRadioGroupScope: () => qe4,
  unstable_ItemBubbleInput: () => V15,
  unstable_ItemProvider: () => he12,
  unstable_ItemTrigger: () => K16,
  unstable_RadioGroupItemBubbleInput: () => V15,
  unstable_RadioGroupItemProvider: () => he12,
  unstable_RadioGroupItemTrigger: () => K16
});
import * as f18 from "react";
import * as p12 from "react";
import { Fragment as ae10, jsx as b16, jsxs as ne14 } from "react/jsx-runtime";
import { Fragment as ue6, jsx as m15, jsxs as pe8 } from "react/jsx-runtime";
var y18 = "Radio";
var [ie5, M9] = $2(y18);
var [se10, C12] = ie5(y18);
function F7(r18) {
  let { __scopeRadio: t18, checked: e18 = false, children: a18, disabled: o15, form: n21, name: i21, onCheck: u20, required: c16, value: l20 = "on", internal_do_not_use_render: d14 } = r18, [s16, R18] = p12.useState(null), [v19, _22] = p12.useState(null), h23 = p12.useRef(false), g21 = s16 ? !!n21 || !!s16.closest("form") : true, I18 = { checked: e18, disabled: o15, required: c16, name: i21, form: n21, value: l20, control: s16, setControl: R18, hasConsumerStoppedPropagationRef: h23, isFormControl: g21, bubbleInput: v19, setBubbleInput: _22, onCheck: () => u20?.() };
  return b16(se10, { scope: t18, ...I18, children: de8(d14) ? d14(I18) : a18 });
}
var B13 = "RadioTrigger";
var S15 = p12.forwardRef(({ __scopeRadio: r18, onClick: t18, ...e18 }, a18) => {
  let { checked: o15, disabled: n21, value: i21, setControl: u20, onCheck: c16, hasConsumerStoppedPropagationRef: l20, isFormControl: d14, bubbleInput: s16 } = C12(B13, r18), R18 = s(a18, u20);
  return b16(v2.button, { type: "button", role: "radio", "aria-checked": o15, "data-state": j15(o15), "data-disabled": n21 ? "" : void 0, disabled: n21, value: i21, ...e18, ref: R18, onClick: f2(t18, (v19) => {
    o15 || c16(), s16 && d14 && (l20.current = v19.isPropagationStopped(), l20.current || v19.stopPropagation());
  }) });
});
S15.displayName = B13;
var ce8 = p12.forwardRef((r18, t18) => {
  let { __scopeRadio: e18, name: a18, checked: o15, required: n21, disabled: i21, value: u20, onCheck: c16, form: l20, ...d14 } = r18;
  return b16(F7, { __scopeRadio: e18, checked: o15, disabled: i21, required: n21, onCheck: c16, name: a18, form: l20, value: u20, internal_do_not_use_render: ({ isFormControl: s16 }) => ne14(ae10, { children: [b16(S15, { ...d14, ref: t18, __scopeRadio: e18 }), s16 && b16(w16, { __scopeRadio: e18 })] }) });
});
ce8.displayName = y18;
var D15 = "RadioIndicator";
var O16 = p12.forwardRef((r18, t18) => {
  let { __scopeRadio: e18, forceMount: a18, ...o15 } = r18, n21 = C12(D15, e18);
  return b16(y2, { present: a18 || n21.checked, children: b16(v2.span, { "data-state": j15(n21.checked), "data-disabled": n21.disabled ? "" : void 0, ...o15, ref: t18 }) });
});
O16.displayName = D15;
var L19 = "RadioBubbleInput";
var w16 = p12.forwardRef(({ __scopeRadio: r18, ...t18 }, e18) => {
  let { control: a18, checked: o15, required: n21, disabled: i21, name: u20, value: c16, form: l20, bubbleInput: d14, setBubbleInput: s16, hasConsumerStoppedPropagationRef: R18 } = C12(L19, r18), v19 = s(e18, s16), _22 = u9(o15), h23 = u10(a18);
  p12.useEffect(() => {
    let I18 = d14;
    if (!I18) return;
    let H15 = window.HTMLInputElement.prototype, N26 = Object.getOwnPropertyDescriptor(H15, "checked").set, z17 = !R18.current;
    if (_22 !== o15 && N26) {
      let W22 = new Event("click", { bubbles: z17 });
      N26.call(I18, o15), I18.dispatchEvent(W22);
    }
  }, [d14, _22, o15, R18]);
  let g21 = p12.useRef(o15);
  return b16(v2.input, { type: "radio", "aria-hidden": true, defaultChecked: g21.current, required: n21, disabled: i21, name: u20, value: c16, form: l20, ...t18, tabIndex: -1, ref: v19, style: { ...t18.style, ...h23, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
w16.displayName = L19;
function de8(r18) {
  return typeof r18 == "function";
}
function j15(r18) {
  return r18 ? "checked" : "unchecked";
}
var le9 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var E20 = "RadioGroup";
var [Re7, qe4] = $2(E20, [be4, M9]);
var q16 = be4();
var P11 = M9();
var [me8, fe10] = Re7(E20);
var ve11 = f18.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e18, name: a18, defaultValue: o15, value: n21, required: i21 = false, disabled: u20 = false, orientation: c16, dir: l20, loop: d14 = true, onValueChange: s16, ...R18 } = r18, v19 = q16(e18), _22 = v5(l20), [h23, g21] = D({ prop: n21, defaultProp: o15 ?? null, onChange: s16, caller: E20 });
  return m15(me8, { scope: e18, name: a18, required: i21, disabled: u20, value: h23, onValueChange: g21, children: m15(Fe3, { asChild: true, ...v19, orientation: c16, dir: _22, loop: d14, children: m15(v2.div, { role: "radiogroup", "aria-required": i21, "aria-orientation": c16, "data-disabled": u20 ? "" : void 0, dir: _22, ...R18, ref: t18 }) }) });
});
ve11.displayName = E20;
var be10 = "RadioGroupItem";
var _e11 = "RadioGroupItemProvider";
var U13 = "RadioGroupItemTrigger";
var Ie10 = "RadioGroupItemBubbleInput";
function he12(r18) {
  let { __scopeRadioGroup: t18, value: e18, disabled: a18, children: o15, internal_do_not_use_render: n21 } = r18, i21 = fe10(_e11, t18), u20 = P11(t18), c16 = i21.disabled || a18;
  return m15(F7, { ...u20, checked: i21.value === e18, disabled: c16, required: i21.required, name: i21.name, value: e18, onCheck: () => i21.onValueChange(e18), internal_do_not_use_render: n21, children: o15 });
}
var K16 = f18.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e18, ...a18 } = r18, o15 = q16(e18), n21 = P11(e18), { checked: i21, disabled: u20 } = C12(U13, n21.__scopeRadio), c16 = f18.useRef(null), l20 = s(t18, c16), d14 = f18.useRef(false);
  return f18.useEffect(() => {
    let s16 = (v19) => {
      le9.includes(v19.key) && (d14.current = true);
    }, R18 = () => d14.current = false;
    return document.addEventListener("keydown", s16), document.addEventListener("keyup", R18), () => {
      document.removeEventListener("keydown", s16), document.removeEventListener("keyup", R18);
    };
  }, []), m15(ge5, { asChild: true, ...o15, focusable: !u20, active: i21, children: m15(S15, { ...n21, ...a18, ref: l20, onKeyDown: f2(a18.onKeyDown, (s16) => {
    s16.key === "Enter" && s16.preventDefault();
  }), onFocus: f2(a18.onFocus, () => {
    d14.current && c16.current?.click();
  }) }) });
});
K16.displayName = U13;
var ge13 = f18.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e18, value: a18, disabled: o15, ...n21 } = r18;
  return m15(he12, { __scopeRadioGroup: e18, value: a18, disabled: o15, internal_do_not_use_render: ({ isFormControl: i21 }) => pe8(ue6, { children: [m15(K16, { ...n21, ref: t18, __scopeRadioGroup: e18 }), i21 && m15(V15, { __scopeRadioGroup: e18 })] }) });
});
ge13.displayName = be10;
var V15 = f18.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e18, ...a18 } = r18, o15 = P11(e18);
  return m15(w16, { ...o15, ...a18, ref: t18 });
});
V15.displayName = Ie10;
var Ge5 = "RadioGroupIndicator";
var Ce11 = f18.forwardRef((r18, t18) => {
  let { __scopeRadioGroup: e18, ...a18 } = r18, o15 = P11(e18);
  return m15(O16, { ...o15, ...a18, ref: t18 });
});
Ce11.displayName = Ge5;

// http-url:https://esm.sh/@radix-ui/react-scroll-area@1.2.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-scroll-area.mjs
var react_scroll_area_exports = {};
__export(react_scroll_area_exports, {
  Corner: () => Me10,
  Root: () => Oe8,
  ScrollArea: () => $18,
  ScrollAreaCorner: () => re13,
  ScrollAreaScrollbar: () => K17,
  ScrollAreaThumb: () => te11,
  ScrollAreaViewport: () => J14,
  Scrollbar: () => Xe3,
  Thumb: () => Ye3,
  Viewport: () => Ie11,
  createScrollAreaScope: () => Ne8
});
import * as n18 from "react";
import * as j16 from "react";
import { Fragment as ue7, jsx as h19, jsxs as fe11 } from "react/jsx-runtime";
function de9(e18, o15) {
  return j16.useReducer((t18, c16) => o15[t18][c16] ?? t18, e18);
}
var V16 = "ScrollArea";
var [q17, Ne8] = $2(V16);
var [he13, v18] = q17(V16);
var $18 = n18.forwardRef((e18, o15) => {
  let { __scopeScrollArea: t18, type: c16 = "hover", dir: r18, scrollHideDelay: l20 = 600, ...a18 } = e18, [i21, s16] = n18.useState(null), [f21, d14] = n18.useState(null), [b20, u20] = n18.useState(null), [S18, w18] = n18.useState(null), [y20, M16] = n18.useState(null), [g21, _22] = n18.useState(0), [U16, D19] = n18.useState(0), [W22, x19] = n18.useState(false), [H15, z17] = n18.useState(false), m20 = s(o15, (E24) => s16(E24)), p15 = v5(r18);
  return h19(he13, { scope: t18, type: c16, dir: p15, scrollHideDelay: l20, scrollArea: i21, viewport: f21, onViewportChange: d14, content: b20, onContentChange: u20, scrollbarX: S18, onScrollbarXChange: w18, scrollbarXEnabled: W22, onScrollbarXEnabledChange: x19, scrollbarY: y20, onScrollbarYChange: M16, scrollbarYEnabled: H15, onScrollbarYEnabledChange: z17, onCornerWidthChange: _22, onCornerHeightChange: D19, children: h19(v2.div, { dir: p15, ...a18, ref: m20, style: { position: "relative", "--radix-scroll-area-corner-width": g21 + "px", "--radix-scroll-area-corner-height": U16 + "px", ...e18.style } }) });
});
$18.displayName = V16;
var G15 = "ScrollAreaViewport";
var J14 = n18.forwardRef((e18, o15) => {
  let { __scopeScrollArea: t18, children: c16, nonce: r18, ...l20 } = e18, a18 = v18(G15, t18), i21 = n18.useRef(null), s16 = s(o15, i21, a18.onViewportChange);
  return fe11(ue7, { children: [h19(be11, { nonce: r18 }), h19(v2.div, { "data-radix-scroll-area-viewport": "", ...l20, ref: s16, style: { overflowX: a18.scrollbarXEnabled ? "scroll" : "hidden", overflowY: a18.scrollbarYEnabled ? "scroll" : "hidden", ...e18.style }, children: h19("div", { ref: a18.onContentChange, style: { minWidth: "100%", display: "table" }, children: c16 }) })] });
});
J14.displayName = G15;
var be11 = n18.memo(({ nonce: e18 }) => h19("style", { dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" }, nonce: e18 }), (e18, o15) => e18.nonce === o15.nonce);
var R14 = "ScrollAreaScrollbar";
var K17 = n18.forwardRef((e18, o15) => {
  let { forceMount: t18, ...c16 } = e18, r18 = v18(R14, e18.__scopeScrollArea), { onScrollbarXEnabledChange: l20, onScrollbarYEnabledChange: a18 } = r18, i21 = e18.orientation === "horizontal";
  return n18.useEffect(() => (i21 ? l20(true) : a18(true), () => {
    i21 ? l20(false) : a18(false);
  }), [i21, l20, a18]), r18.type === "hover" ? h19(Se6, { ...c16, ref: o15, forceMount: t18 }) : r18.type === "scroll" ? h19(me9, { ...c16, ref: o15, forceMount: t18 }) : r18.type === "auto" ? h19(Q15, { ...c16, ref: o15, forceMount: t18 }) : r18.type === "always" ? h19(k14, { ...c16, ref: o15, "data-state": "visible" }) : null;
});
K17.displayName = R14;
var Se6 = n18.forwardRef((e18, o15) => {
  let { forceMount: t18, ...c16 } = e18, r18 = v18(R14, e18.__scopeScrollArea), [l20, a18] = n18.useState(false);
  return n18.useEffect(() => {
    let i21 = r18.scrollArea, s16 = 0;
    if (i21) {
      let f21 = () => {
        window.clearTimeout(s16), a18(true);
      }, d14 = () => {
        s16 = window.setTimeout(() => a18(false), r18.scrollHideDelay);
      };
      return i21.addEventListener("pointerenter", f21), i21.addEventListener("pointerleave", d14), () => {
        window.clearTimeout(s16), i21.removeEventListener("pointerenter", f21), i21.removeEventListener("pointerleave", d14);
      };
    }
  }, [r18.scrollArea, r18.scrollHideDelay]), h19(y2, { present: t18 || l20, children: h19(Q15, { "data-state": l20 ? "visible" : "hidden", ...c16, ref: o15 }) });
});
var me9 = n18.forwardRef((e18, o15) => {
  let { forceMount: t18, ...c16 } = e18, r18 = v18(R14, e18.__scopeScrollArea), l20 = e18.orientation === "horizontal", a18 = Y15(() => s16("SCROLL_END"), 100), [i21, s16] = de9("hidden", { hidden: { SCROLL: "scrolling" }, scrolling: { SCROLL_END: "idle", POINTER_ENTER: "interacting" }, interacting: { SCROLL: "interacting", POINTER_LEAVE: "idle" }, idle: { HIDE: "hidden", SCROLL: "scrolling", POINTER_ENTER: "interacting" } });
  return n18.useEffect(() => {
    if (i21 === "idle") {
      let f21 = window.setTimeout(() => s16("HIDE"), r18.scrollHideDelay);
      return () => window.clearTimeout(f21);
    }
  }, [i21, r18.scrollHideDelay, s16]), n18.useEffect(() => {
    let f21 = r18.viewport, d14 = l20 ? "scrollLeft" : "scrollTop";
    if (f21) {
      let b20 = f21[d14], u20 = () => {
        let S18 = f21[d14];
        b20 !== S18 && (s16("SCROLL"), a18()), b20 = S18;
      };
      return f21.addEventListener("scroll", u20), () => f21.removeEventListener("scroll", u20);
    }
  }, [r18.viewport, l20, s16, a18]), h19(y2, { present: t18 || i21 !== "hidden", children: h19(k14, { "data-state": i21 === "hidden" ? "hidden" : "visible", ...c16, ref: o15, onPointerEnter: f2(e18.onPointerEnter, () => s16("POINTER_ENTER")), onPointerLeave: f2(e18.onPointerLeave, () => s16("POINTER_LEAVE")) }) });
});
var Q15 = n18.forwardRef((e18, o15) => {
  let t18 = v18(R14, e18.__scopeScrollArea), { forceMount: c16, ...r18 } = e18, [l20, a18] = n18.useState(false), i21 = e18.orientation === "horizontal", s16 = Y15(() => {
    if (t18.viewport) {
      let f21 = t18.viewport.offsetWidth < t18.viewport.scrollWidth, d14 = t18.viewport.offsetHeight < t18.viewport.scrollHeight;
      a18(i21 ? f21 : d14);
    }
  }, 10);
  return T16(t18.viewport, s16), T16(t18.content, s16), h19(y2, { present: c16 || l20, children: h19(k14, { "data-state": l20 ? "visible" : "hidden", ...r18, ref: o15 }) });
});
var k14 = n18.forwardRef((e18, o15) => {
  let { orientation: t18 = "vertical", ...c16 } = e18, r18 = v18(R14, e18.__scopeScrollArea), l20 = n18.useRef(null), a18 = n18.useRef(0), [i21, s16] = n18.useState({ content: 0, viewport: 0, scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 } }), f21 = oe11(i21.viewport, i21.content), d14 = { ...c16, sizes: i21, onSizesChange: s16, hasThumb: f21 > 0 && f21 < 1, onThumbChange: (u20) => l20.current = u20, onThumbPointerUp: () => a18.current = 0, onThumbPointerDown: (u20) => a18.current = u20 };
  function b20(u20, S18) {
    return Pe9(u20, a18.current, i21, S18);
  }
  return t18 === "horizontal" ? h19(ve12, { ...d14, ref: o15, onThumbPositionChange: () => {
    if (r18.viewport && l20.current) {
      let u20 = r18.viewport.scrollLeft, S18 = F8(u20, i21, r18.dir);
      l20.current.style.transform = `translate3d(${S18}px, 0, 0)`;
    }
  }, onWheelScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollLeft = u20);
  }, onDragScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollLeft = b20(u20, r18.dir));
  } }) : t18 === "vertical" ? h19(pe9, { ...d14, ref: o15, onThumbPositionChange: () => {
    if (r18.viewport && l20.current) {
      let u20 = r18.viewport.scrollTop, S18 = F8(u20, i21);
      l20.current.style.transform = `translate3d(0, ${S18}px, 0)`;
    }
  }, onWheelScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollTop = u20);
  }, onDragScroll: (u20) => {
    r18.viewport && (r18.viewport.scrollTop = b20(u20));
  } }) : null;
});
var ve12 = n18.forwardRef((e18, o15) => {
  let { sizes: t18, onSizesChange: c16, ...r18 } = e18, l20 = v18(R14, e18.__scopeScrollArea), [a18, i21] = n18.useState(), s16 = n18.useRef(null), f21 = s(o15, s16, l20.onScrollbarXChange);
  return n18.useEffect(() => {
    s16.current && i21(getComputedStyle(s16.current));
  }, [s16]), h19(ee13, { "data-orientation": "horizontal", ...r18, ref: f21, sizes: t18, style: { bottom: 0, left: l20.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0, right: l20.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0, "--radix-scroll-area-thumb-width": X18(t18) + "px", ...e18.style }, onThumbPointerDown: (d14) => e18.onThumbPointerDown(d14.x), onDragScroll: (d14) => e18.onDragScroll(d14.x), onWheelScroll: (d14, b20) => {
    if (l20.viewport) {
      let u20 = l20.viewport.scrollLeft + d14.deltaX;
      e18.onWheelScroll(u20), le10(u20, b20) && d14.preventDefault();
    }
  }, onResize: () => {
    s16.current && l20.viewport && a18 && c16({ content: l20.viewport.scrollWidth, viewport: l20.viewport.offsetWidth, scrollbar: { size: s16.current.clientWidth, paddingStart: O17(a18.paddingLeft), paddingEnd: O17(a18.paddingRight) } });
  } });
});
var pe9 = n18.forwardRef((e18, o15) => {
  let { sizes: t18, onSizesChange: c16, ...r18 } = e18, l20 = v18(R14, e18.__scopeScrollArea), [a18, i21] = n18.useState(), s16 = n18.useRef(null), f21 = s(o15, s16, l20.onScrollbarYChange);
  return n18.useEffect(() => {
    s16.current && i21(getComputedStyle(s16.current));
  }, [s16]), h19(ee13, { "data-orientation": "vertical", ...r18, ref: f21, sizes: t18, style: { top: 0, right: l20.dir === "ltr" ? 0 : void 0, left: l20.dir === "rtl" ? 0 : void 0, bottom: "var(--radix-scroll-area-corner-height)", "--radix-scroll-area-thumb-height": X18(t18) + "px", ...e18.style }, onThumbPointerDown: (d14) => e18.onThumbPointerDown(d14.y), onDragScroll: (d14) => e18.onDragScroll(d14.y), onWheelScroll: (d14, b20) => {
    if (l20.viewport) {
      let u20 = l20.viewport.scrollTop + d14.deltaY;
      e18.onWheelScroll(u20), le10(u20, b20) && d14.preventDefault();
    }
  }, onResize: () => {
    s16.current && l20.viewport && a18 && c16({ content: l20.viewport.scrollHeight, viewport: l20.viewport.offsetHeight, scrollbar: { size: s16.current.clientHeight, paddingStart: O17(a18.paddingTop), paddingEnd: O17(a18.paddingBottom) } });
  } });
});
var [we11, Z15] = q17(R14);
var ee13 = n18.forwardRef((e18, o15) => {
  let { __scopeScrollArea: t18, sizes: c16, hasThumb: r18, onThumbChange: l20, onThumbPointerUp: a18, onThumbPointerDown: i21, onThumbPositionChange: s16, onDragScroll: f21, onWheelScroll: d14, onResize: b20, ...u20 } = e18, S18 = v18(R14, t18), [w18, y20] = n18.useState(null), M16 = s(o15, (m20) => y20(m20)), g21 = n18.useRef(null), _22 = n18.useRef(""), U16 = S18.viewport, D19 = c16.content - c16.viewport, W22 = u3(d14), x19 = u3(s16), H15 = Y15(b20, 10);
  function z17(m20) {
    if (g21.current) {
      let p15 = m20.clientX - g21.current.left, E24 = m20.clientY - g21.current.top;
      f21({ x: p15, y: E24 });
    }
  }
  return n18.useEffect(() => {
    let m20 = (p15) => {
      let E24 = p15.target;
      w18?.contains(E24) && W22(p15, D19);
    };
    return document.addEventListener("wheel", m20, { passive: false }), () => document.removeEventListener("wheel", m20, { passive: false });
  }, [U16, w18, D19, W22]), n18.useEffect(x19, [c16, x19]), T16(w18, H15), T16(S18.content, H15), h19(we11, { scope: t18, scrollbar: w18, hasThumb: r18, onThumbChange: u3(l20), onThumbPointerUp: u3(a18), onThumbPositionChange: x19, onThumbPointerDown: u3(i21), children: h19(v2.div, { ...u20, ref: M16, style: { position: "absolute", ...u20.style }, onPointerDown: f2(e18.onPointerDown, (m20) => {
    m20.button === 0 && (m20.target.setPointerCapture(m20.pointerId), g21.current = w18.getBoundingClientRect(), _22.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", S18.viewport && (S18.viewport.style.scrollBehavior = "auto"), z17(m20));
  }), onPointerMove: f2(e18.onPointerMove, z17), onPointerUp: f2(e18.onPointerUp, (m20) => {
    let p15 = m20.target;
    p15.hasPointerCapture(m20.pointerId) && p15.releasePointerCapture(m20.pointerId), document.body.style.webkitUserSelect = _22.current, S18.viewport && (S18.viewport.style.scrollBehavior = ""), g21.current = null;
  }) }) });
});
var N21 = "ScrollAreaThumb";
var te11 = n18.forwardRef((e18, o15) => {
  let { forceMount: t18, ...c16 } = e18, r18 = Z15(N21, e18.__scopeScrollArea);
  return h19(y2, { present: t18 || r18.hasThumb, children: h19(Re8, { ref: o15, ...c16 }) });
});
var Re8 = n18.forwardRef((e18, o15) => {
  let { __scopeScrollArea: t18, style: c16, ...r18 } = e18, l20 = v18(N21, t18), a18 = Z15(N21, t18), { onThumbPositionChange: i21 } = a18, s16 = s(o15, (b20) => a18.onThumbChange(b20)), f21 = n18.useRef(void 0), d14 = Y15(() => {
    f21.current && (f21.current(), f21.current = void 0);
  }, 100);
  return n18.useEffect(() => {
    let b20 = l20.viewport;
    if (b20) {
      let u20 = () => {
        if (d14(), !f21.current) {
          let S18 = Ce12(b20, i21);
          f21.current = S18, i21();
        }
      };
      return i21(), b20.addEventListener("scroll", u20), () => b20.removeEventListener("scroll", u20);
    }
  }, [l20.viewport, d14, i21]), h19(v2.div, { "data-state": a18.hasThumb ? "visible" : "hidden", ...r18, ref: s16, style: { width: "var(--radix-scroll-area-thumb-width)", height: "var(--radix-scroll-area-thumb-height)", ...c16 }, onPointerDownCapture: f2(e18.onPointerDownCapture, (b20) => {
    let S18 = b20.target.getBoundingClientRect(), w18 = b20.clientX - S18.left, y20 = b20.clientY - S18.top;
    a18.onThumbPointerDown({ x: w18, y: y20 });
  }), onPointerUp: f2(e18.onPointerUp, a18.onThumbPointerUp) });
});
te11.displayName = N21;
var B14 = "ScrollAreaCorner";
var re13 = n18.forwardRef((e18, o15) => {
  let t18 = v18(B14, e18.__scopeScrollArea), c16 = !!(t18.scrollbarX && t18.scrollbarY);
  return t18.type !== "scroll" && c16 ? h19(ge14, { ...e18, ref: o15 }) : null;
});
re13.displayName = B14;
var ge14 = n18.forwardRef((e18, o15) => {
  let { __scopeScrollArea: t18, ...c16 } = e18, r18 = v18(B14, t18), [l20, a18] = n18.useState(0), [i21, s16] = n18.useState(0), f21 = !!(l20 && i21);
  return T16(r18.scrollbarX, () => {
    let d14 = r18.scrollbarX?.offsetHeight || 0;
    r18.onCornerHeightChange(d14), s16(d14);
  }), T16(r18.scrollbarY, () => {
    let d14 = r18.scrollbarY?.offsetWidth || 0;
    r18.onCornerWidthChange(d14), a18(d14);
  }), f21 ? h19(v2.div, { ...c16, ref: o15, style: { width: l20, height: i21, position: "absolute", right: r18.dir === "ltr" ? 0 : void 0, left: r18.dir === "rtl" ? 0 : void 0, bottom: 0, ...e18.style } }) : null;
});
function O17(e18) {
  return e18 ? parseInt(e18, 10) : 0;
}
function oe11(e18, o15) {
  let t18 = e18 / o15;
  return isNaN(t18) ? 0 : t18;
}
function X18(e18) {
  let o15 = oe11(e18.viewport, e18.content), t18 = e18.scrollbar.paddingStart + e18.scrollbar.paddingEnd, c16 = (e18.scrollbar.size - t18) * o15;
  return Math.max(c16, 18);
}
function Pe9(e18, o15, t18, c16 = "ltr") {
  let r18 = X18(t18), l20 = r18 / 2, a18 = o15 || l20, i21 = r18 - a18, s16 = t18.scrollbar.paddingStart + a18, f21 = t18.scrollbar.size - t18.scrollbar.paddingEnd - i21, d14 = t18.content - t18.viewport, b20 = c16 === "ltr" ? [0, d14] : [d14 * -1, 0];
  return ne15([s16, f21], b20)(e18);
}
function F8(e18, o15, t18 = "ltr") {
  let c16 = X18(o15), r18 = o15.scrollbar.paddingStart + o15.scrollbar.paddingEnd, l20 = o15.scrollbar.size - r18, a18 = o15.content - o15.viewport, i21 = l20 - c16, s16 = t18 === "ltr" ? [0, a18] : [a18 * -1, 0], f21 = m14(e18, s16);
  return ne15([0, a18], [0, i21])(f21);
}
function ne15(e18, o15) {
  return (t18) => {
    if (e18[0] === e18[1] || o15[0] === o15[1]) return o15[0];
    let c16 = (o15[1] - o15[0]) / (e18[1] - e18[0]);
    return o15[0] + c16 * (t18 - e18[0]);
  };
}
function le10(e18, o15) {
  return e18 > 0 && e18 < o15;
}
var Ce12 = (e18, o15 = () => {
}) => {
  let t18 = { left: e18.scrollLeft, top: e18.scrollTop }, c16 = 0;
  return function r18() {
    let l20 = { left: e18.scrollLeft, top: e18.scrollTop }, a18 = t18.left !== l20.left, i21 = t18.top !== l20.top;
    (a18 || i21) && o15(), t18 = l20, c16 = window.requestAnimationFrame(r18);
  }(), () => window.cancelAnimationFrame(c16);
};
function Y15(e18, o15) {
  let t18 = u3(e18), c16 = n18.useRef(0);
  return n18.useEffect(() => () => window.clearTimeout(c16.current), []), n18.useCallback(() => {
    window.clearTimeout(c16.current), c16.current = window.setTimeout(t18, o15);
  }, [t18, o15]);
}
function T16(e18, o15) {
  let t18 = u3(o15);
  e4(() => {
    let c16 = 0;
    if (e18) {
      let r18 = new ResizeObserver(() => {
        cancelAnimationFrame(c16), c16 = window.requestAnimationFrame(t18);
      });
      return r18.observe(e18), () => {
        window.cancelAnimationFrame(c16), r18.unobserve(e18);
      };
    }
  }, [e18, t18]);
}
var Oe8 = $18;
var Ie11 = J14;
var Xe3 = K17;
var Ye3 = te11;
var Me10 = re13;

// http-url:https://esm.sh/@radix-ui/react-select@2.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-select.mjs
var react_select_exports = {};
__export(react_select_exports, {
  Arrow: () => Kt,
  Content: () => Pt3,
  Group: () => At2,
  Icon: () => wt3,
  Item: () => Vt,
  ItemIndicator: () => Bt,
  ItemText: () => kt3,
  Label: () => Dt,
  Portal: () => yt4,
  Root: () => vt4,
  ScrollDownButton: () => Ft,
  ScrollUpButton: () => Ht,
  Select: () => vt4,
  SelectArrow: () => Kt,
  SelectContent: () => Pt3,
  SelectGroup: () => At2,
  SelectIcon: () => wt3,
  SelectItem: () => Vt,
  SelectItemIndicator: () => Bt,
  SelectItemText: () => kt3,
  SelectLabel: () => Dt,
  SelectPortal: () => yt4,
  SelectScrollDownButton: () => Ft,
  SelectScrollUpButton: () => Ht,
  SelectSeparator: () => Wt,
  SelectTrigger: () => St2,
  SelectValue: () => gt4,
  SelectViewport: () => Nt,
  Separator: () => Wt,
  Trigger: () => St2,
  Value: () => gt4,
  Viewport: () => Nt,
  createSelectScope: () => vo,
  unstable_BubbleInput: () => Ye4,
  unstable_Provider: () => Me11,
  unstable_SelectBubbleInput: () => Ye4,
  unstable_SelectProvider: () => Me11
});
import * as t15 from "react";
import * as Pe10 from "react-dom";
import { Fragment as Te5, jsx as p13, jsxs as pe10 } from "react/jsx-runtime";
var it3 = [" ", "Enter", "ArrowUp", "ArrowDown"];
var dt4 = [" ", "Enter"];
var te12 = "Select";
var [fe12, me10, ut4] = re(te12);
var [oe12, vo] = $2(te12, [ut4, Fe2]);
var he14 = Fe2();
var [pt3, q18] = oe12(te12);
var [ft4, mt4] = oe12(te12);
var ht3 = "SelectProvider";
function Me11(o15) {
  let { __scopeSelect: c16, children: e18, open: a18, defaultOpen: n21, onOpenChange: f21, value: r18, defaultValue: i21, onValueChange: l20, dir: u20, name: S18, autoComplete: R18, disabled: y20, required: P16, form: C18, internal_do_not_use_render: s16 } = o15, h23 = he14(c16), [g21, d14] = t15.useState(null), [v19, B19] = t15.useState(null), [b20, Z18] = t15.useState(false), E24 = v5(u20), [A17, ne18] = D({ prop: a18, defaultProp: n21 ?? false, onChange: f21, caller: te12 }), [re17, H15] = D({ prop: r18, defaultProp: i21, onChange: l20, caller: te12 }), F11 = t15.useRef(null), $20 = g21 ? !!C18 || !!g21.closest("form") : true, [U16, D19] = t15.useState(/* @__PURE__ */ new Set()), W22 = n5(), K20 = Array.from(U16).map((V20) => V20.props.value).join(";"), G19 = t15.useCallback((V20) => {
    D19((J20) => new Set(J20).add(V20));
  }, []), L25 = t15.useCallback((V20) => {
    D19((J20) => {
      let ae14 = new Set(J20);
      return ae14.delete(V20), ae14;
    });
  }, []), ce11 = { required: P16, trigger: g21, onTriggerChange: d14, valueNode: v19, onValueNodeChange: B19, valueNodeHasChildren: b20, onValueNodeHasChildrenChange: Z18, contentId: W22, value: re17, onValueChange: H15, open: A17, onOpenChange: ne18, dir: E24, triggerPointerDownPosRef: F11, disabled: y20, name: S18, autoComplete: R18, form: C18, nativeOptions: U16, nativeSelectKey: K20, isFormControl: $20 };
  return p13(Be2, { ...h23, children: p13(pt3, { scope: c16, ...ce11, children: p13(fe12.Provider, { scope: c16, children: p13(ft4, { scope: c16, onNativeOptionAdd: G19, onNativeOptionRemove: L25, children: Gt(s16) ? s16(ce11) : e18 }) }) }) });
}
Me11.displayName = ht3;
var vt4 = (o15) => {
  let { __scopeSelect: c16, children: e18, ...a18 } = o15;
  return p13(Me11, { __scopeSelect: c16, ...a18, internal_do_not_use_render: ({ isFormControl: n21 }) => pe10(Te5, { children: [e18, n21 ? p13(Ye4, { __scopeSelect: c16 }) : null] }) });
};
vt4.displayName = te12;
var Oe9 = "SelectTrigger";
var St2 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, disabled: a18 = false, ...n21 } = o15, f21 = he14(e18), r18 = q18(Oe9, e18), i21 = r18.disabled || a18, l20 = s(c16, r18.onTriggerChange), u20 = me10(e18), S18 = t15.useRef("touch"), [R18, y20, P16] = je7((s16) => {
    let h23 = u20().filter((v19) => !v19.disabled), g21 = h23.find((v19) => v19.value === r18.value), d14 = qe5(h23, s16, g21);
    d14 !== void 0 && r18.onValueChange(d14.value);
  }), C18 = (s16) => {
    i21 || (r18.onOpenChange(true), P16()), s16 && (r18.triggerPointerDownPosRef.current = { x: Math.round(s16.pageX), y: Math.round(s16.pageY) });
  };
  return p13(je3, { asChild: true, ...f21, children: p13(v2.button, { type: "button", role: "combobox", "aria-controls": r18.open ? r18.contentId : void 0, "aria-expanded": r18.open, "aria-required": r18.required, "aria-autocomplete": "none", dir: r18.dir, "data-state": r18.open ? "open" : "closed", disabled: i21, "data-disabled": i21 ? "" : void 0, "data-placeholder": ve13(r18.value) ? "" : void 0, ...n21, ref: l20, onClick: f2(n21.onClick, (s16) => {
    s16.currentTarget.focus(), S18.current !== "mouse" && C18(s16);
  }), onPointerDown: f2(n21.onPointerDown, (s16) => {
    S18.current = s16.pointerType;
    let h23 = s16.target;
    h23.hasPointerCapture(s16.pointerId) && h23.releasePointerCapture(s16.pointerId), s16.button === 0 && s16.ctrlKey === false && s16.pointerType === "mouse" && (C18(s16), s16.preventDefault());
  }), onKeyDown: f2(n21.onKeyDown, (s16) => {
    let h23 = R18.current !== "";
    !(s16.ctrlKey || s16.altKey || s16.metaKey) && s16.key.length === 1 && y20(s16.key), !(h23 && s16.key === " ") && it3.includes(s16.key) && (C18(), s16.preventDefault());
  }) }) });
});
St2.displayName = Oe9;
var Ae9 = "SelectValue";
var gt4 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, className: a18, style: n21, children: f21, placeholder: r18 = "", ...i21 } = o15, l20 = q18(Ae9, e18), { onValueNodeHasChildrenChange: u20 } = l20, S18 = f21 !== void 0, R18 = s(c16, l20.onValueNodeChange);
  e4(() => {
    u20(S18);
  }, [u20, S18]);
  let y20 = ve13(l20.value);
  return p13(v2.span, { ...i21, asChild: y20 ? false : i21.asChild, ref: R18, style: { pointerEvents: "none" }, children: p13(t15.Fragment, { children: y20 ? r18 : f21 }, y20 ? "placeholder" : "value") });
});
gt4.displayName = Ae9;
var Rt2 = "SelectIcon";
var wt3 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, children: a18, ...n21 } = o15;
  return p13(v2.span, { "aria-hidden": true, ...n21, ref: c16, children: a18 || "\u25BC" });
});
wt3.displayName = Rt2;
var De5 = "SelectPortal";
var [Ct3, xt3] = oe12(De5, { forceMount: void 0 });
var yt4 = (o15) => {
  let { __scopeSelect: c16, forceMount: e18, ...a18 } = o15;
  return p13(Ct3, { scope: o15.__scopeSelect, forceMount: e18, children: p13(e9, { asChild: true, ...a18 }) });
};
yt4.displayName = De5;
var Y16 = "SelectContent";
var Pt3 = t15.forwardRef((o15, c16) => {
  let e18 = xt3(Y16, o15.__scopeSelect), { forceMount: a18 = e18.forceMount, ...n21 } = o15, f21 = q18(Y16, o15.__scopeSelect), [r18, i21] = t15.useState();
  return e4(() => {
    i21(new DocumentFragment());
  }, []), p13(y2, { present: a18 || f21.open, children: ({ present: l20 }) => l20 ? p13(ke5, { ...n21, ref: c16 }) : p13(Le6, { ...n21, fragment: r18 }) });
});
Pt3.displayName = Y16;
var Le6 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, children: a18, fragment: n21 } = o15;
  return n21 ? Pe10.createPortal(p13(Ve4, { scope: e18, children: p13(fe12.Slot, { scope: e18, children: p13("div", { ref: c16, children: a18 }) }) }), n21) : null;
});
Le6.displayName = "SelectContentFragment";
var O18 = 10;
var [Ve4, X19] = oe12(Y16);
var It2 = "SelectContentImpl";
var Tt2 = b("SelectContent.RemoveScroll");
var ke5 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18 } = o15, { position: a18 = "item-aligned", onCloseAutoFocus: n21, onEscapeKeyDown: f21, onPointerDownOutside: r18, side: i21, sideOffset: l20, align: u20, alignOffset: S18, arrowPadding: R18, collisionBoundary: y20, collisionPadding: P16, sticky: C18, hideWhenDetached: s16, avoidCollisions: h23, ...g21 } = o15, d14 = q18(Y16, e18), [v19, B19] = t15.useState(null), [b20, Z18] = t15.useState(null), E24 = s(c16, (m20) => B19(m20)), [A17, ne18] = t15.useState(null), [re17, H15] = t15.useState(null), F11 = me10(e18), [$20, U16] = t15.useState(false), D19 = t15.useRef(false);
  t15.useEffect(() => {
    if (v19) return S8(v19);
  }, [v19]), a3();
  let W22 = t15.useCallback((m20) => {
    let [I18, ...N26] = F11().map((T20) => T20.ref.current), [w18] = N26.slice(-1), x19 = document.activeElement;
    for (let T20 of m20) if (T20 === x19 || (T20?.scrollIntoView({ block: "nearest" }), T20 === I18 && b20 && (b20.scrollTop = 0), T20 === w18 && b20 && (b20.scrollTop = b20.scrollHeight), T20?.focus(), document.activeElement !== x19)) return;
  }, [F11, b20]), K20 = t15.useCallback(() => W22([A17, v19]), [W22, A17, v19]);
  t15.useEffect(() => {
    $20 && K20();
  }, [$20, K20]);
  let { onOpenChange: G19, triggerPointerDownPosRef: L25 } = d14;
  t15.useEffect(() => {
    if (v19) {
      let m20 = { x: 0, y: 0 }, I18 = (w18) => {
        m20 = { x: Math.abs(Math.round(w18.pageX) - (L25.current?.x ?? 0)), y: Math.abs(Math.round(w18.pageY) - (L25.current?.y ?? 0)) };
      }, N26 = (w18) => {
        m20.x <= 10 && m20.y <= 10 ? w18.preventDefault() : w18.composedPath().includes(v19) || G19(false), document.removeEventListener("pointermove", I18), L25.current = null;
      };
      return L25.current !== null && (document.addEventListener("pointermove", I18), document.addEventListener("pointerup", N26, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", I18), document.removeEventListener("pointerup", N26, { capture: true });
      };
    }
  }, [v19, G19, L25]), t15.useEffect(() => {
    let m20 = () => G19(false);
    return window.addEventListener("blur", m20), window.addEventListener("resize", m20), () => {
      window.removeEventListener("blur", m20), window.removeEventListener("resize", m20);
    };
  }, [G19]);
  let [ce11, V20] = je7((m20) => {
    let I18 = F11().filter((x19) => !x19.disabled), N26 = I18.find((x19) => x19.ref.current === document.activeElement), w18 = qe5(I18, m20, N26);
    w18 && setTimeout(() => w18.ref.current?.focus());
  }), J20 = t15.useCallback((m20, I18, N26) => {
    let w18 = !D19.current && !N26;
    (d14.value !== void 0 && d14.value === I18 || w18) && (ne18(m20), w18 && (D19.current = true));
  }, [d14.value]), ae14 = t15.useCallback(() => v19?.focus(), [v19]), le13 = t15.useCallback((m20, I18, N26) => {
    let w18 = !D19.current && !N26;
    (d14.value !== void 0 && d14.value === I18 || w18) && H15(m20);
  }, [d14.value]), de12 = a18 === "popper" ? we12 : Be7, se13 = de12 === we12 ? { side: i21, sideOffset: l20, align: u20, alignOffset: S18, arrowPadding: R18, collisionBoundary: y20, collisionPadding: P16, sticky: C18, hideWhenDetached: s16, avoidCollisions: h23 } : {};
  return p13(Ve4, { scope: e18, content: v19, viewport: b20, onViewportChange: Z18, itemRefCallback: J20, selectedItem: A17, onItemLeave: ae14, itemTextRefCallback: le13, focusSelectedItem: K20, selectedItemText: re17, position: a18, isPositioned: $20, searchRef: ce11, children: p13(l10, { as: Tt2, allowPinchZoom: true, children: p13(L4, { asChild: true, trapped: d14.open, onMountAutoFocus: (m20) => {
    m20.preventDefault();
  }, onUnmountAutoFocus: f2(n21, (m20) => {
    d14.trigger?.focus({ preventScroll: true }), m20.preventDefault();
  }), children: p13(_2, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: f21, onPointerDownOutside: r18, onFocusOutside: (m20) => m20.preventDefault(), onDismiss: () => d14.onOpenChange(false), children: p13(de12, { role: "listbox", id: d14.contentId, "data-state": d14.open ? "open" : "closed", dir: d14.dir, onContextMenu: (m20) => m20.preventDefault(), ...g21, ...se13, onPlaced: () => U16(true), ref: E24, style: { display: "flex", flexDirection: "column", outline: "none", ...g21.style }, onKeyDown: f2(g21.onKeyDown, (m20) => {
    let I18 = m20.ctrlKey || m20.altKey || m20.metaKey;
    if (m20.key === "Tab" && m20.preventDefault(), !I18 && m20.key.length === 1 && V20(m20.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(m20.key)) {
      let w18 = F11().filter((x19) => !x19.disabled).map((x19) => x19.ref.current);
      if (["ArrowUp", "End"].includes(m20.key) && (w18 = w18.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(m20.key)) {
        let x19 = m20.target, T20 = w18.indexOf(x19);
        w18 = w18.slice(T20 + 1);
      }
      setTimeout(() => W22(w18)), m20.preventDefault();
    }
  }) }) }) }) }) });
});
ke5.displayName = It2;
var _t3 = "SelectItemAlignedPosition";
var Be7 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, onPlaced: a18, ...n21 } = o15, f21 = q18(Y16, e18), r18 = X19(Y16, e18), [i21, l20] = t15.useState(null), [u20, S18] = t15.useState(null), R18 = s(c16, (E24) => S18(E24)), y20 = me10(e18), P16 = t15.useRef(false), C18 = t15.useRef(true), { viewport: s16, selectedItem: h23, selectedItemText: g21, focusSelectedItem: d14 } = r18, v19 = t15.useCallback(() => {
    if (f21.trigger && f21.valueNode && i21 && u20 && s16 && h23 && g21) {
      let E24 = f21.trigger.getBoundingClientRect(), A17 = u20.getBoundingClientRect(), ne18 = f21.valueNode.getBoundingClientRect(), re17 = g21.getBoundingClientRect();
      if (f21.dir !== "rtl") {
        let x19 = re17.left - A17.left, T20 = ne18.left - x19, Q20 = E24.left - T20, ee15 = E24.width + Q20, Se8 = Math.max(ee15, A17.width), ge16 = window.innerWidth - O18, Re12 = m14(T20, [O18, Math.max(O18, ge16 - Se8)]);
        i21.style.minWidth = ee15 + "px", i21.style.left = Re12 + "px";
      } else {
        let x19 = A17.right - re17.right, T20 = window.innerWidth - ne18.right - x19, Q20 = window.innerWidth - E24.right - T20, ee15 = E24.width + Q20, Se8 = Math.max(ee15, A17.width), ge16 = window.innerWidth - O18, Re12 = m14(T20, [O18, Math.max(O18, ge16 - Se8)]);
        i21.style.minWidth = ee15 + "px", i21.style.right = Re12 + "px";
      }
      let H15 = y20(), F11 = window.innerHeight - O18 * 2, $20 = s16.scrollHeight, U16 = window.getComputedStyle(u20), D19 = parseInt(U16.borderTopWidth, 10), W22 = parseInt(U16.paddingTop, 10), K20 = parseInt(U16.borderBottomWidth, 10), G19 = parseInt(U16.paddingBottom, 10), L25 = D19 + W22 + $20 + G19 + K20, ce11 = Math.min(h23.offsetHeight * 5, L25), V20 = window.getComputedStyle(s16), J20 = parseInt(V20.paddingTop, 10), ae14 = parseInt(V20.paddingBottom, 10), le13 = E24.top + E24.height / 2 - O18, de12 = F11 - le13, se13 = h23.offsetHeight / 2, m20 = h23.offsetTop + se13, I18 = D19 + W22 + m20, N26 = L25 - I18;
      if (I18 <= le13) {
        let x19 = H15.length > 0 && h23 === H15[H15.length - 1].ref.current;
        i21.style.bottom = "0px";
        let T20 = u20.clientHeight - s16.offsetTop - s16.offsetHeight, Q20 = Math.max(de12, se13 + (x19 ? ae14 : 0) + T20 + K20), ee15 = I18 + Q20;
        i21.style.height = ee15 + "px";
      } else {
        let x19 = H15.length > 0 && h23 === H15[0].ref.current;
        i21.style.top = "0px";
        let Q20 = Math.max(le13, D19 + s16.offsetTop + (x19 ? J20 : 0) + se13) + N26;
        i21.style.height = Q20 + "px", s16.scrollTop = I18 - le13 + s16.offsetTop;
      }
      i21.style.margin = `${O18}px 0`, i21.style.minHeight = ce11 + "px", i21.style.maxHeight = F11 + "px", a18?.(), requestAnimationFrame(() => P16.current = true);
    }
  }, [y20, f21.trigger, f21.valueNode, i21, u20, s16, h23, g21, f21.dir, a18]);
  e4(() => v19(), [v19]);
  let [B19, b20] = t15.useState();
  e4(() => {
    u20 && b20(window.getComputedStyle(u20).zIndex);
  }, [u20]);
  let Z18 = t15.useCallback((E24) => {
    E24 && C18.current === true && (v19(), d14?.(), C18.current = false);
  }, [v19, d14]);
  return p13(Et3, { scope: e18, contentWrapper: i21, shouldExpandOnScrollRef: P16, onScrollButtonChange: Z18, children: p13("div", { ref: l20, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: B19 }, children: p13(v2.div, { ...n21, ref: R18, style: { boxSizing: "border-box", maxHeight: "100%", ...n21.style } }) }) });
});
Be7.displayName = _t3;
var bt3 = "SelectPopperPosition";
var we12 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, align: a18 = "start", collisionPadding: n21 = O18, ...f21 } = o15, r18 = he14(e18);
  return p13(Le2, { ...r18, ...f21, ref: c16, align: a18, collisionPadding: n21, style: { boxSizing: "border-box", ...f21.style, "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" } });
});
we12.displayName = bt3;
var [Et3, _e12] = oe12(Y16, {});
var Ce13 = "SelectViewport";
var Nt = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, nonce: a18, ...n21 } = o15, f21 = X19(Ce13, e18), r18 = _e12(Ce13, e18), i21 = s(c16, f21.onViewportChange), l20 = t15.useRef(0);
  return pe10(Te5, { children: [p13("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: a18 }), p13(fe12.Slot, { scope: e18, children: p13(v2.div, { "data-radix-select-viewport": "", role: "presentation", ...n21, ref: i21, style: { position: "relative", flex: 1, overflow: "hidden auto", ...n21.style }, onScroll: f2(n21.onScroll, (u20) => {
    let S18 = u20.currentTarget, { contentWrapper: R18, shouldExpandOnScrollRef: y20 } = r18;
    if (y20?.current && R18) {
      let P16 = Math.abs(l20.current - S18.scrollTop);
      if (P16 > 0) {
        let C18 = window.innerHeight - O18 * 2, s16 = parseFloat(R18.style.minHeight), h23 = parseFloat(R18.style.height), g21 = Math.max(s16, h23);
        if (g21 < C18) {
          let d14 = g21 + P16, v19 = Math.min(C18, d14), B19 = d14 - v19;
          R18.style.height = v19 + "px", R18.style.bottom === "0px" && (S18.scrollTop = B19 > 0 ? B19 : 0, R18.style.justifyContent = "flex-end");
        }
      }
    }
    l20.current = S18.scrollTop;
  }) }) })] });
});
Nt.displayName = Ce13;
var He4 = "SelectGroup";
var [Mt3, Ot2] = oe12(He4);
var At2 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, ...a18 } = o15, n21 = n5();
  return p13(Mt3, { scope: e18, id: n21, children: p13(v2.div, { role: "group", "aria-labelledby": n21, ...a18, ref: c16 }) });
});
At2.displayName = He4;
var Fe8 = "SelectLabel";
var Dt = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, ...a18 } = o15, n21 = Ot2(Fe8, e18);
  return p13(v2.div, { id: n21.id, ...a18, ref: c16 });
});
Dt.displayName = Fe8;
var ue8 = "SelectItem";
var [Lt2, Ue7] = oe12(ue8);
var Vt = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, value: a18, disabled: n21 = false, textValue: f21, ...r18 } = o15, i21 = q18(ue8, e18), l20 = X19(ue8, e18), u20 = i21.value === a18, [S18, R18] = t15.useState(f21 ?? ""), [y20, P16] = t15.useState(false), C18 = s(c16, (d14) => l20.itemRefCallback?.(d14, a18, n21)), s16 = n5(), h23 = t15.useRef("touch"), g21 = () => {
    n21 || (i21.onValueChange(a18), i21.onOpenChange(false));
  };
  return p13(Lt2, { scope: e18, value: a18, disabled: n21, textId: s16, isSelected: u20, onItemTextChange: t15.useCallback((d14) => {
    R18((v19) => v19 || (d14?.textContent ?? "").trim());
  }, []), children: p13(fe12.ItemSlot, { scope: e18, value: a18, disabled: n21, textValue: S18, children: p13(v2.div, { role: "option", "aria-labelledby": s16, "data-highlighted": y20 ? "" : void 0, "aria-selected": u20 && y20, "data-state": u20 ? "checked" : "unchecked", "aria-disabled": n21 || void 0, "data-disabled": n21 ? "" : void 0, tabIndex: n21 ? void 0 : -1, ...r18, ref: C18, onFocus: f2(r18.onFocus, () => P16(true)), onBlur: f2(r18.onBlur, () => P16(false)), onClick: f2(r18.onClick, () => {
    h23.current !== "mouse" && g21();
  }), onPointerUp: f2(r18.onPointerUp, () => {
    h23.current === "mouse" && g21();
  }), onPointerDown: f2(r18.onPointerDown, (d14) => {
    h23.current = d14.pointerType;
  }), onPointerMove: f2(r18.onPointerMove, (d14) => {
    h23.current = d14.pointerType, n21 ? l20.onItemLeave?.() : h23.current === "mouse" && d14.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: f2(r18.onPointerLeave, (d14) => {
    d14.currentTarget === document.activeElement && l20.onItemLeave?.();
  }), onKeyDown: f2(r18.onKeyDown, (d14) => {
    l20.searchRef?.current !== "" && d14.key === " " || (dt4.includes(d14.key) && g21(), d14.key === " " && d14.preventDefault());
  }) }) }) });
});
Vt.displayName = ue8;
var ie6 = "SelectItemText";
var kt3 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, className: a18, style: n21, ...f21 } = o15, r18 = q18(ie6, e18), i21 = X19(ie6, e18), l20 = Ue7(ie6, e18), u20 = mt4(ie6, e18), [S18, R18] = t15.useState(null), y20 = s(c16, (g21) => R18(g21), l20.onItemTextChange, (g21) => i21.itemTextRefCallback?.(g21, l20.value, l20.disabled)), P16 = S18?.textContent, C18 = t15.useMemo(() => p13("option", { value: l20.value, disabled: l20.disabled, children: P16 }, l20.value), [l20.disabled, l20.value, P16]), { onNativeOptionAdd: s16, onNativeOptionRemove: h23 } = u20;
  return e4(() => (s16(C18), () => h23(C18)), [s16, h23, C18]), pe10(Te5, { children: [p13(v2.span, { id: l20.textId, ...f21, ref: y20 }), l20.isSelected && r18.valueNode && !r18.valueNodeHasChildren && !ve13(r18.value) ? Pe10.createPortal(f21.children, r18.valueNode) : null] });
});
kt3.displayName = ie6;
var We4 = "SelectItemIndicator";
var Bt = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, ...a18 } = o15;
  return Ue7(We4, e18).isSelected ? p13(v2.span, { "aria-hidden": true, ...a18, ref: c16 }) : null;
});
Bt.displayName = We4;
var xe9 = "SelectScrollUpButton";
var Ht = t15.forwardRef((o15, c16) => {
  let e18 = X19(xe9, o15.__scopeSelect), a18 = _e12(xe9, o15.__scopeSelect), [n21, f21] = t15.useState(false), r18 = s(c16, a18.onScrollButtonChange);
  return e4(() => {
    if (e18.viewport && e18.isPositioned) {
      let l20 = function() {
        let S18 = u20.scrollTop > 0;
        f21(S18);
      };
      var i21 = l20;
      let u20 = e18.viewport;
      return l20(), u20.addEventListener("scroll", l20), () => u20.removeEventListener("scroll", l20);
    }
  }, [e18.viewport, e18.isPositioned]), n21 ? p13(Ke5, { ...o15, ref: r18, onAutoScroll: () => {
    let { viewport: i21, selectedItem: l20 } = e18;
    i21 && l20 && (i21.scrollTop = i21.scrollTop - l20.offsetHeight);
  } }) : null;
});
Ht.displayName = xe9;
var ye9 = "SelectScrollDownButton";
var Ft = t15.forwardRef((o15, c16) => {
  let e18 = X19(ye9, o15.__scopeSelect), a18 = _e12(ye9, o15.__scopeSelect), [n21, f21] = t15.useState(false), r18 = s(c16, a18.onScrollButtonChange);
  return e4(() => {
    if (e18.viewport && e18.isPositioned) {
      let l20 = function() {
        let S18 = u20.scrollHeight - u20.clientHeight, R18 = Math.ceil(u20.scrollTop) < S18;
        f21(R18);
      };
      var i21 = l20;
      let u20 = e18.viewport;
      return l20(), u20.addEventListener("scroll", l20), () => u20.removeEventListener("scroll", l20);
    }
  }, [e18.viewport, e18.isPositioned]), n21 ? p13(Ke5, { ...o15, ref: r18, onAutoScroll: () => {
    let { viewport: i21, selectedItem: l20 } = e18;
    i21 && l20 && (i21.scrollTop = i21.scrollTop + l20.offsetHeight);
  } }) : null;
});
Ft.displayName = ye9;
var Ke5 = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, onAutoScroll: a18, ...n21 } = o15, f21 = X19("SelectScrollButton", e18), r18 = t15.useRef(null), i21 = me10(e18), l20 = t15.useCallback(() => {
    r18.current !== null && (window.clearInterval(r18.current), r18.current = null);
  }, []);
  return t15.useEffect(() => () => l20(), [l20]), e4(() => {
    i21().find((S18) => S18.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [i21]), p13(v2.div, { "aria-hidden": true, ...n21, ref: c16, style: { flexShrink: 0, ...n21.style }, onPointerDown: f2(n21.onPointerDown, () => {
    r18.current === null && (r18.current = window.setInterval(a18, 50));
  }), onPointerMove: f2(n21.onPointerMove, () => {
    f21.onItemLeave?.(), r18.current === null && (r18.current = window.setInterval(a18, 50));
  }), onPointerLeave: f2(n21.onPointerLeave, () => {
    l20();
  }) });
});
var Ut2 = "SelectSeparator";
var Wt = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, ...a18 } = o15;
  return p13(v2.div, { "aria-hidden": true, ...a18, ref: c16 });
});
Wt.displayName = Ut2;
var Ge6 = "SelectArrow";
var Kt = t15.forwardRef((o15, c16) => {
  let { __scopeSelect: e18, ...a18 } = o15, n21 = he14(e18);
  return X19(Ge6, e18).position === "popper" ? p13(Ue2, { ...n21, ...a18, ref: c16 }) : null;
});
Kt.displayName = Ge6;
var ze4 = "SelectBubbleInput";
var Ye4 = t15.forwardRef(({ __scopeSelect: o15, ...c16 }, e18) => {
  let a18 = q18(ze4, o15), { value: n21, onValueChange: f21, required: r18, disabled: i21, name: l20, autoComplete: u20, form: S18 } = a18, { nativeOptions: R18, nativeSelectKey: y20 } = a18, P16 = t15.useRef(null), C18 = s(e18, P16), s16 = n21 ?? "", h23 = u9(s16), g21 = Array.from(R18).some((d14) => (d14.props.value ?? "") === "");
  return t15.useEffect(() => {
    let d14 = P16.current;
    if (!d14) return;
    let v19 = window.HTMLSelectElement.prototype, b20 = Object.getOwnPropertyDescriptor(v19, "value").set;
    if (h23 !== s16 && b20) {
      let Z18 = new Event("change", { bubbles: true });
      b20.call(d14, s16), d14.dispatchEvent(Z18);
    }
  }, [h23, s16]), pe10(v2.select, { "aria-hidden": true, required: r18, tabIndex: -1, name: l20, autoComplete: u20, disabled: i21, form: S18, onChange: (d14) => f21(d14.target.value), ...c16, style: { ...d2, ...c16.style }, ref: C18, defaultValue: s16, children: [ve13(n21) && !g21 ? p13("option", { value: "" }) : null, Array.from(R18)] }, y20);
});
Ye4.displayName = ze4;
function Gt(o15) {
  return typeof o15 == "function";
}
function ve13(o15) {
  return o15 === "" || o15 === void 0;
}
function je7(o15) {
  let c16 = u3(o15), e18 = t15.useRef(""), a18 = t15.useRef(0), n21 = t15.useCallback((r18) => {
    let i21 = e18.current + r18;
    c16(i21), function l20(u20) {
      e18.current = u20, window.clearTimeout(a18.current), u20 !== "" && (a18.current = window.setTimeout(() => l20(""), 1e3));
    }(i21);
  }, [c16]), f21 = t15.useCallback(() => {
    e18.current = "", window.clearTimeout(a18.current);
  }, []);
  return t15.useEffect(() => () => window.clearTimeout(a18.current), []), [e18, n21, f21];
}
function qe5(o15, c16, e18) {
  let n21 = c16.length > 1 && Array.from(c16).every((u20) => u20 === c16[0]) ? c16[0] : c16, f21 = e18 ? o15.indexOf(e18) : -1, r18 = zt(o15, Math.max(f21, 0));
  n21.length === 1 && (r18 = r18.filter((u20) => u20 !== e18));
  let l20 = r18.find((u20) => u20.textValue.toLowerCase().startsWith(n21.toLowerCase()));
  return l20 !== e18 ? l20 : void 0;
}
function zt(o15, c16) {
  return o15.map((e18, a18) => o15[(c16 + a18) % o15.length]);
}

// http-url:https://esm.sh/@radix-ui/react-separator@1.1.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-separator.mjs
var react_separator_exports = {};
__export(react_separator_exports, {
  Root: () => T17,
  Separator: () => n19
});
import * as i19 from "react";
import { jsx as m16 } from "react/jsx-runtime";
var d13 = "Separator";
var a14 = "horizontal";
var l17 = ["horizontal", "vertical"];
var n19 = i19.forwardRef((r18, e18) => {
  let { decorative: s16, orientation: t18 = a14, ...c16 } = r18, o15 = f19(t18) ? t18 : a14, p15 = s16 ? { role: "none" } : { "aria-orientation": o15 === "vertical" ? o15 : void 0, role: "separator" };
  return m16(v2.div, { "data-orientation": o15, ...p15, ...c16, ref: e18 });
});
n19.displayName = d13;
function f19(r18) {
  return l17.includes(r18);
}
var T17 = n19;

// http-url:https://esm.sh/@radix-ui/react-slider@1.4.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-slider.mjs
var react_slider_exports = {};
__export(react_slider_exports, {
  Range: () => Ee8,
  Root: () => Pe11,
  Slider: () => Pe11,
  SliderRange: () => Ee8,
  SliderThumb: () => Te6,
  SliderTrack: () => _e13,
  Thumb: () => Te6,
  Track: () => _e13,
  createSliderScope: () => We5,
  unstable_BubbleInput: () => ae11,
  unstable_SliderBubbleInput: () => ae11,
  unstable_SliderThumbProvider: () => oe13,
  unstable_SliderThumbTrigger: () => re14,
  unstable_ThumbProvider: () => oe13,
  unstable_ThumbTrigger: () => re14
});
import * as c15 from "react";
import { Fragment as ge15, jsx as m17, jsxs as be12 } from "react/jsx-runtime";
var j17 = ["PageUp", "PageDown"];
var X20 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var W16 = { "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"], "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"], "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"] };
var C13 = "Slider";
var [z14, ve14, Re9] = re(C13);
var [F9, We5] = $2(C13, [Re9]);
var [we13, B15] = F9(C13);
var Pe11 = c15.forwardRef((e18, t18) => {
  let { name: n21, min: o15 = 0, max: r18 = 100, step: i21 = 1, orientation: d14 = "horizontal", disabled: s16 = false, minStepsBetweenThumbs: p15 = 0, defaultValue: u20 = [o15], value: S18, onValueChange: a18 = () => {
  }, onValueCommit: l20 = () => {
  }, inverted: g21 = false, form: w18, ...f21 } = e18, b20 = c15.useRef(/* @__PURE__ */ new Set()), h23 = c15.useRef(0), x19 = c15.useRef(false), y20 = d14 === "horizontal" ? xe10 : ye10, [P16 = [], U16] = D({ prop: S18, defaultProp: u20, onChange: (v19) => {
    [...b20.current][h23.current]?.focus({ preventScroll: true, focusVisible: x19.current }), x19.current = false, a18(v19);
  } }), V20 = c15.useRef(P16);
  function ce11(v19) {
    let _22 = Ie12(P16, v19);
    M16(v19, _22);
  }
  function le13(v19) {
    M16(v19, h23.current);
  }
  function de12() {
    let v19 = V20.current[h23.current];
    P16[h23.current] !== v19 && l20(P16);
  }
  function M16(v19, _22, { commit: k16 } = { commit: false }) {
    let Y19 = Ve5(i21), H15 = Ne9(Math.round((v19 - o15) / i21) * i21 + o15, Y19), I18 = m14(H15, [o15, r18]);
    U16((D19 = []) => {
      let E24 = Ce14(D19, I18, _22);
      if (Be8(E24, p15 * i21)) {
        h23.current = E24.indexOf(I18);
        let G19 = String(E24) !== String(D19);
        return G19 && k16 && l20(E24), G19 ? E24 : D19;
      } else return D19;
    });
  }
  return m17(we13, { scope: e18.__scopeSlider, name: n21, disabled: s16, min: o15, max: r18, valueIndexToChangeRef: h23, thumbs: b20.current, values: P16, orientation: d14, form: w18, children: m17(z14.Provider, { scope: e18.__scopeSlider, children: m17(z14.Slot, { scope: e18.__scopeSlider, children: m17(y20, { "aria-disabled": s16, "data-disabled": s16 ? "" : void 0, ...f21, ref: t18, onPointerDown: f2(f21.onPointerDown, () => {
    s16 || (V20.current = P16, x19.current = false);
  }), min: o15, max: r18, inverted: g21, onSlideStart: s16 ? void 0 : ce11, onSlideMove: s16 ? void 0 : le13, onSlideEnd: s16 ? void 0 : de12, onHomeKeyDown: () => {
    s16 || (x19.current = true, M16(o15, 0, { commit: true }));
  }, onEndKeyDown: () => {
    s16 || (x19.current = true, M16(r18, P16.length - 1, { commit: true }));
  }, onStepKeyDown: ({ event: v19, direction: _22 }) => {
    if (!s16) {
      x19.current = true;
      let H15 = j17.includes(v19.key) || v19.shiftKey && X20.includes(v19.key) ? 10 : 1, I18 = h23.current, D19 = P16[I18], E24 = i21 * H15 * _22;
      M16(D19 + E24, I18, { commit: true });
    }
  } }) }) }) });
});
Pe11.displayName = C13;
var [q19, J15] = F9(C13, { startEdge: "left", endEdge: "right", size: "width", direction: 1 });
var xe10 = c15.forwardRef((e18, t18) => {
  let { min: n21, max: o15, dir: r18, inverted: i21, onSlideStart: d14, onSlideMove: s16, onSlideEnd: p15, onStepKeyDown: u20, ...S18 } = e18, [a18, l20] = c15.useState(null), g21 = s(t18, (R18) => l20(R18)), w18 = c15.useRef(void 0), f21 = v5(r18), b20 = f21 === "ltr", h23 = b20 && !i21 || !b20 && i21;
  function x19(R18) {
    let y20 = w18.current || a18.getBoundingClientRect(), P16 = [0, y20.width], V20 = L20(P16, h23 ? [n21, o15] : [o15, n21]);
    return w18.current = y20, V20(R18 - y20.left);
  }
  return m17(q19, { scope: e18.__scopeSlider, startEdge: h23 ? "left" : "right", endEdge: h23 ? "right" : "left", direction: h23 ? 1 : -1, size: "width", children: m17(Q16, { dir: f21, "data-orientation": "horizontal", ...S18, ref: g21, style: { ...S18.style, "--radix-slider-thumb-transform": "translateX(-50%)" }, onSlideStart: (R18) => {
    let y20 = x19(R18.clientX);
    d14?.(y20);
  }, onSlideMove: (R18) => {
    let y20 = x19(R18.clientX);
    s16?.(y20);
  }, onSlideEnd: () => {
    w18.current = void 0, p15?.();
  }, onStepKeyDown: (R18) => {
    let P16 = W16[h23 ? "from-left" : "from-right"].includes(R18.key);
    u20?.({ event: R18, direction: P16 ? -1 : 1 });
  } }) });
});
var ye10 = c15.forwardRef((e18, t18) => {
  let { min: n21, max: o15, inverted: r18, onSlideStart: i21, onSlideMove: d14, onSlideEnd: s16, onStepKeyDown: p15, ...u20 } = e18, S18 = c15.useRef(null), a18 = s(t18, S18), l20 = c15.useRef(void 0), g21 = !r18;
  function w18(f21) {
    let b20 = l20.current || S18.current.getBoundingClientRect(), h23 = [0, b20.height], R18 = L20(h23, g21 ? [o15, n21] : [n21, o15]);
    return l20.current = b20, R18(f21 - b20.top);
  }
  return m17(q19, { scope: e18.__scopeSlider, startEdge: g21 ? "bottom" : "top", endEdge: g21 ? "top" : "bottom", size: "height", direction: g21 ? 1 : -1, children: m17(Q16, { "data-orientation": "vertical", ...u20, ref: a18, style: { ...u20.style, "--radix-slider-thumb-transform": "translateY(50%)" }, onSlideStart: (f21) => {
    let b20 = w18(f21.clientY);
    i21?.(b20);
  }, onSlideMove: (f21) => {
    let b20 = w18(f21.clientY);
    d14?.(b20);
  }, onSlideEnd: () => {
    l20.current = void 0, s16?.();
  }, onStepKeyDown: (f21) => {
    let h23 = W16[g21 ? "from-bottom" : "from-top"].includes(f21.key);
    p15?.({ event: f21, direction: h23 ? -1 : 1 });
  } }) });
});
var Q16 = c15.forwardRef((e18, t18) => {
  let { __scopeSlider: n21, onSlideStart: o15, onSlideMove: r18, onSlideEnd: i21, onHomeKeyDown: d14, onEndKeyDown: s16, onStepKeyDown: p15, ...u20 } = e18, S18 = B15(C13, n21);
  return m17(v2.span, { ...u20, ref: t18, onKeyDown: f2(e18.onKeyDown, (a18) => {
    a18.key === "Home" ? (d14(a18), a18.preventDefault()) : a18.key === "End" ? (s16(a18), a18.preventDefault()) : j17.concat(X20).includes(a18.key) && (p15(a18), a18.preventDefault());
  }), onPointerDown: f2(e18.onPointerDown, (a18) => {
    let l20 = a18.target;
    l20.setPointerCapture(a18.pointerId), a18.preventDefault(), S18.thumbs.has(l20) ? l20.focus({ preventScroll: true, focusVisible: false }) : o15(a18);
  }), onPointerMove: f2(e18.onPointerMove, (a18) => {
    a18.target.hasPointerCapture(a18.pointerId) && r18(a18);
  }), onPointerUp: f2(e18.onPointerUp, (a18) => {
    let l20 = a18.target;
    l20.hasPointerCapture(a18.pointerId) && (l20.releasePointerCapture(a18.pointerId), i21(a18));
  }) });
});
var Z16 = "SliderTrack";
var _e13 = c15.forwardRef((e18, t18) => {
  let { __scopeSlider: n21, ...o15 } = e18, r18 = B15(Z16, n21);
  return m17(v2.span, { "data-disabled": r18.disabled ? "" : void 0, "data-orientation": r18.orientation, ...o15, ref: t18 });
});
_e13.displayName = Z16;
var O19 = "SliderRange";
var Ee8 = c15.forwardRef((e18, t18) => {
  let { __scopeSlider: n21, ...o15 } = e18, r18 = B15(O19, n21), i21 = J15(O19, n21), d14 = c15.useRef(null), s16 = s(t18, d14), p15 = r18.values.length, u20 = r18.values.map((l20) => se11(l20, r18.min, r18.max)), S18 = p15 > 1 ? Math.min(...u20) : 0, a18 = 100 - Math.max(...u20);
  return m17(v2.span, { "data-orientation": r18.orientation, "data-disabled": r18.disabled ? "" : void 0, ...o15, ref: s16, style: { ...e18.style, [i21.startEdge]: S18 + "%", [i21.endEdge]: a18 + "%" } });
});
Ee8.displayName = O19;
var ee14 = "SliderThumb";
var [De6, te13] = F9(ee14);
var ne16 = "SliderThumbProvider";
function oe13(e18) {
  let { __scopeSlider: t18, name: n21, children: o15, internal_do_not_use_render: r18 } = e18, i21 = B15(ne16, t18), d14 = ve14(t18), [s16, p15] = c15.useState(null), u20 = c15.useMemo(() => s16 ? d14().findIndex((b20) => b20.ref.current === s16) : -1, [d14, s16]), S18 = u10(s16), a18 = s16 ? !!i21.form || !!s16.closest("form") : true, l20 = i21.values[u20], g21 = n21 ?? (i21.name ? i21.name + (i21.values.length > 1 ? "[]" : "") : void 0), w18 = l20 === void 0 ? 0 : se11(l20, i21.min, i21.max);
  c15.useEffect(() => {
    if (s16) return i21.thumbs.add(s16), () => {
      i21.thumbs.delete(s16);
    };
  }, [s16, i21.thumbs]);
  let f21 = { value: l20, name: g21, form: i21.form, isFormControl: a18, index: u20, thumb: s16, onThumbChange: p15, percent: w18, size: S18 };
  return m17(De6, { scope: t18, ...f21, children: ke6(r18) ? r18(f21) : o15 });
}
oe13.displayName = ne16;
var N22 = "SliderThumbTrigger";
var re14 = c15.forwardRef((e18, t18) => {
  let { __scopeSlider: n21, ...o15 } = e18, r18 = B15(N22, n21), i21 = J15(N22, n21), { index: d14, value: s16, percent: p15, size: u20, onThumbChange: S18 } = te13(N22, n21), a18 = s(t18, (f21) => S18(f21)), l20 = Me12(d14, r18.values.length), g21 = u20?.[i21.size], w18 = g21 ? Ke6(g21, p15, i21.direction) : 0;
  return m17("span", { style: { transform: "var(--radix-slider-thumb-transform)", position: "absolute", [i21.startEdge]: `calc(${p15}% + ${w18}px)` }, children: m17(z14.ItemSlot, { scope: n21, children: m17(v2.span, { role: "slider", "aria-label": e18["aria-label"] || l20, "aria-valuemin": r18.min, "aria-valuenow": s16, "aria-valuemax": r18.max, "aria-orientation": r18.orientation, "data-orientation": r18.orientation, "data-disabled": r18.disabled ? "" : void 0, tabIndex: r18.disabled ? void 0 : 0, ...o15, ref: a18, style: s16 === void 0 ? { display: "none" } : e18.style, onFocus: f2(e18.onFocus, () => {
    r18.valueIndexToChangeRef.current = d14;
  }) }) }) });
});
re14.displayName = N22;
var Te6 = c15.forwardRef((e18, t18) => {
  let { __scopeSlider: n21, name: o15, ...r18 } = e18;
  return m17(oe13, { __scopeSlider: n21, name: o15, internal_do_not_use_render: ({ index: i21, isFormControl: d14 }) => be12(ge15, { children: [m17(re14, { ...r18, ref: t18, __scopeSlider: n21 }), d14 ? m17(ae11, { __scopeSlider: n21 }, i21) : null] }) });
});
Te6.displayName = ee14;
var ie7 = "SliderBubbleInput";
var ae11 = c15.forwardRef(({ __scopeSlider: e18, ...t18 }, n21) => {
  let { value: o15, name: r18, form: i21 } = te13(ie7, e18), d14 = c15.useRef(null), s16 = s(d14, n21), p15 = u9(o15);
  return c15.useEffect(() => {
    let u20 = d14.current;
    if (!u20) return;
    let S18 = window.HTMLInputElement.prototype, l20 = Object.getOwnPropertyDescriptor(S18, "value").set;
    if (p15 !== o15 && l20) {
      let g21 = new Event("input", { bubbles: true });
      l20.call(u20, o15), u20.dispatchEvent(g21);
    }
  }, [p15, o15]), m17(v2.input, { style: { display: "none" }, name: r18, form: i21, ...t18, ref: s16, defaultValue: o15 });
});
ae11.displayName = ie7;
function Ce14(e18 = [], t18, n21) {
  let o15 = [...e18];
  return o15[n21] = t18, o15.sort((r18, i21) => r18 - i21);
}
function se11(e18, t18, n21) {
  let i21 = 100 / (n21 - t18) * (e18 - t18);
  return m14(i21, [0, 100]);
}
function Me12(e18, t18) {
  return t18 > 2 ? `Value ${e18 + 1} of ${t18}` : t18 === 2 ? ["Minimum", "Maximum"][e18] : void 0;
}
function Ie12(e18, t18) {
  if (e18.length === 1) return 0;
  let n21 = e18.map((r18) => Math.abs(r18 - t18)), o15 = Math.min(...n21);
  return n21.indexOf(o15);
}
function Ke6(e18, t18, n21) {
  let o15 = e18 / 2, i21 = L20([0, 50], [0, o15]);
  return (o15 - i21(t18) * n21) * n21;
}
function Ae10(e18) {
  return e18.slice(0, -1).map((t18, n21) => e18[n21 + 1] - t18);
}
function Be8(e18, t18) {
  if (t18 > 0) {
    let n21 = Ae10(e18);
    return Math.min(...n21) >= t18;
  }
  return true;
}
function L20(e18, t18) {
  return (n21) => {
    if (e18[0] === e18[1] || t18[0] === t18[1]) return t18[0];
    let o15 = (t18[1] - t18[0]) / (e18[1] - e18[0]);
    return t18[0] + o15 * (n21 - e18[0]);
  };
}
function Ve5(e18) {
  if (!Number.isFinite(e18)) return 0;
  let t18 = e18.toString();
  if (t18.includes("e")) {
    let [o15, r18] = t18.split("e"), i21 = o15.split(".")[1] || "", d14 = Number(r18);
    return Math.max(0, i21.length - d14);
  }
  let n21 = t18.split(".")[1];
  return n21 ? n21.length : 0;
}
function Ne9(e18, t18) {
  let n21 = Math.pow(10, t18);
  return Math.round(e18 * n21) / n21;
}
function ke6(e18) {
  return typeof e18 == "function";
}

// http-url:https://esm.sh/@radix-ui/react-switch@1.3.1/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-switch.mjs
var react_switch_exports = {};
__export(react_switch_exports, {
  Root: () => X21,
  Switch: () => X21,
  SwitchThumb: () => J16,
  Thumb: () => J16,
  createSwitchScope: () => oe14,
  unstable_BubbleInput: () => N23,
  unstable_Provider: () => W17,
  unstable_SwitchBubbleInput: () => N23,
  unstable_SwitchProvider: () => W17,
  unstable_SwitchTrigger: () => T18,
  unstable_Trigger: () => T18
});
import * as t16 from "react";
import { Fragment as G16, jsx as b17, jsxs as L21 } from "react/jsx-runtime";
var C14 = "Switch";
var [O20, oe14] = $2(C14);
var [D16, P12] = O20(C14);
function W17(e18) {
  let { __scopeSwitch: c16, checked: n21, children: a18, defaultChecked: r18, disabled: o15, form: s16, name: p15, onCheckedChange: h23, required: f21, value: i21 = "on", internal_do_not_use_render: u20 } = e18, [d14, S18] = D({ prop: n21, defaultProp: r18 ?? false, onChange: h23, caller: C14 }), [l20, m20] = t16.useState(null), [v19, R18] = t16.useState(null), w18 = t16.useRef(false), k16 = l20 ? !!s16 || !!l20.closest("form") : true, _22 = { checked: d14, setChecked: S18, disabled: o15, control: l20, setControl: m20, name: p15, form: s16, value: i21, hasConsumerStoppedPropagationRef: w18, required: f21, defaultChecked: r18, isFormControl: k16, bubbleInput: v19, setBubbleInput: R18 };
  return b17(D16, { scope: c16, ..._22, children: K18(u20) ? u20(_22) : a18 });
}
var E21 = "SwitchTrigger";
var T18 = t16.forwardRef(({ __scopeSwitch: e18, onClick: c16, ...n21 }, a18) => {
  let { value: r18, disabled: o15, checked: s16, required: p15, setControl: h23, setChecked: f21, hasConsumerStoppedPropagationRef: i21, isFormControl: u20, bubbleInput: d14 } = P12(E21, e18), S18 = s(a18, h23);
  return b17(v2.button, { type: "button", role: "switch", "aria-checked": s16, "aria-required": p15, "data-state": M10(s16), "data-disabled": o15 ? "" : void 0, disabled: o15, value: r18, ...n21, ref: S18, onClick: f2(c16, (l20) => {
    f21((m20) => !m20), d14 && u20 && (i21.current = l20.isPropagationStopped(), i21.current || l20.stopPropagation());
  }) });
});
T18.displayName = E21;
var X21 = t16.forwardRef((e18, c16) => {
  let { __scopeSwitch: n21, name: a18, checked: r18, defaultChecked: o15, required: s16, disabled: p15, value: h23, onCheckedChange: f21, form: i21, ...u20 } = e18;
  return b17(W17, { __scopeSwitch: n21, checked: r18, defaultChecked: o15, disabled: p15, required: s16, onCheckedChange: f21, name: a18, form: i21, value: h23, internal_do_not_use_render: ({ isFormControl: d14 }) => L21(G16, { children: [b17(T18, { ...u20, ref: c16, __scopeSwitch: n21 }), d14 && b17(N23, { __scopeSwitch: n21 })] }) });
});
X21.displayName = C14;
var x16 = "SwitchThumb";
var J16 = t16.forwardRef((e18, c16) => {
  let { __scopeSwitch: n21, ...a18 } = e18, r18 = P12(x16, n21);
  return b17(v2.span, { "data-state": M10(r18.checked), "data-disabled": r18.disabled ? "" : void 0, ...a18, ref: c16 });
});
J16.displayName = x16;
var B16 = "SwitchBubbleInput";
var N23 = t16.forwardRef(({ __scopeSwitch: e18, ...c16 }, n21) => {
  let { control: a18, hasConsumerStoppedPropagationRef: r18, checked: o15, defaultChecked: s16, required: p15, disabled: h23, name: f21, value: i21, form: u20, bubbleInput: d14, setBubbleInput: S18 } = P12(B16, e18), l20 = s(n21, S18), m20 = u9(o15), v19 = u10(a18);
  t16.useEffect(() => {
    let w18 = d14;
    if (!w18) return;
    let k16 = window.HTMLInputElement.prototype, I18 = Object.getOwnPropertyDescriptor(k16, "checked").set, q23 = !r18.current;
    if (m20 !== o15 && I18) {
      let A17 = new Event("click", { bubbles: q23 });
      I18.call(w18, o15), w18.dispatchEvent(A17);
    }
  }, [d14, m20, o15, r18]);
  let R18 = t16.useRef(o15);
  return b17(v2.input, { type: "checkbox", "aria-hidden": true, defaultChecked: s16 ?? R18.current, required: p15, disabled: h23, name: f21, value: i21, form: u20, ...c16, tabIndex: -1, ref: l20, style: { ...c16.style, ...v19, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0, transform: "translateX(-100%)" } });
});
N23.displayName = B16;
function K18(e18) {
  return typeof e18 == "function";
}
function M10(e18) {
  return e18 ? "checked" : "unchecked";
}

// http-url:https://esm.sh/@radix-ui/react-tabs@1.1.15/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-tabs.mjs
var react_tabs_exports = {};
__export(react_tabs_exports, {
  Content: () => X22,
  List: () => U14,
  Root: () => Q17,
  Tabs: () => I16,
  TabsContent: () => M11,
  TabsList: () => y19,
  TabsTrigger: () => F10,
  Trigger: () => W18,
  createTabsScope: () => J17
});
import * as u18 from "react";
import { jsx as l18 } from "react/jsx-runtime";
var g19 = "Tabs";
var [V17, J17] = $2(g19, [be4]);
var h20 = be4();
var [L22, R15] = V17(g19);
var I16 = u18.forwardRef((e18, r18) => {
  let { __scopeTabs: s16, value: t18, onValueChange: n21, defaultValue: c16, orientation: o15 = "horizontal", dir: d14, activationMode: f21 = "automatic", ...m20 } = e18, i21 = v5(d14), [a18, v19] = D({ prop: t18, onChange: n21, defaultProp: c16 ?? "", caller: g19 });
  return l18(L22, { scope: s16, baseId: n5(), value: a18, onValueChange: v19, orientation: o15, dir: i21, activationMode: f21, children: l18(v2.div, { dir: i21, "data-orientation": o15, ...m20, ref: r18 }) });
});
I16.displayName = g19;
var _18 = "TabsList";
var y19 = u18.forwardRef((e18, r18) => {
  let { __scopeTabs: s16, loop: t18 = true, ...n21 } = e18, c16 = R15(_18, s16), o15 = h20(s16);
  return l18(Fe3, { asChild: true, ...o15, orientation: c16.orientation, dir: c16.dir, loop: t18, children: l18(v2.div, { role: "tablist", "aria-orientation": c16.orientation, ...n21, ref: r18 }) });
});
y19.displayName = _18;
var A14 = "TabsTrigger";
var F10 = u18.forwardRef((e18, r18) => {
  let { __scopeTabs: s16, value: t18, disabled: n21 = false, ...c16 } = e18, o15 = R15(A14, s16), d14 = h20(s16), f21 = N24(o15.baseId, t18), m20 = P13(o15.baseId, t18), i21 = t18 === o15.value;
  return l18(ge5, { asChild: true, ...d14, focusable: !n21, active: i21, children: l18(v2.button, { type: "button", role: "tab", "aria-selected": i21, "aria-controls": m20, "data-state": i21 ? "active" : "inactive", "data-disabled": n21 ? "" : void 0, disabled: n21, id: f21, ...c16, ref: r18, onMouseDown: f2(e18.onMouseDown, (a18) => {
    !n21 && a18.button === 0 && a18.ctrlKey === false ? o15.onValueChange(t18) : a18.preventDefault();
  }), onKeyDown: f2(e18.onKeyDown, (a18) => {
    [" ", "Enter"].includes(a18.key) && o15.onValueChange(t18);
  }), onFocus: f2(e18.onFocus, () => {
    let a18 = o15.activationMode !== "manual";
    !i21 && !n21 && a18 && o15.onValueChange(t18);
  }) }) });
});
F10.displayName = A14;
var S16 = "TabsContent";
var M11 = u18.forwardRef((e18, r18) => {
  let { __scopeTabs: s16, value: t18, forceMount: n21, children: c16, ...o15 } = e18, d14 = R15(S16, s16), f21 = N24(d14.baseId, t18), m20 = P13(d14.baseId, t18), i21 = t18 === d14.value, a18 = u18.useRef(i21);
  return u18.useEffect(() => {
    let v19 = requestAnimationFrame(() => a18.current = false);
    return () => cancelAnimationFrame(v19);
  }, []), l18(y2, { present: n21 || i21, children: ({ present: v19 }) => l18(v2.div, { "data-state": i21 ? "active" : "inactive", "data-orientation": d14.orientation, role: "tabpanel", "aria-labelledby": f21, hidden: !v19, id: m20, tabIndex: 0, ...o15, ref: r18, style: { ...e18.style, animationDuration: a18.current ? "0s" : void 0 }, children: v19 && c16 }) });
});
M11.displayName = S16;
function N24(e18, r18) {
  return `${e18}-trigger-${r18}`;
}
function P13(e18, r18) {
  return `${e18}-content-${r18}`;
}
var Q17 = I16;
var U14 = y19;
var W18 = F10;
var X22 = M11;

// http-url:https://esm.sh/@radix-ui/react-toast@1.2.17/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toast.mjs
var react_toast_exports = {};
__export(react_toast_exports, {
  Action: () => lt4,
  Close: () => dt5,
  Description: () => ut5,
  Provider: () => st4,
  Root: () => it4,
  Title: () => ct3,
  Toast: () => pe11,
  ToastAction: () => Te7,
  ToastClose: () => Z17,
  ToastDescription: () => me11,
  ToastProvider: () => ce9,
  ToastTitle: () => fe13,
  ToastViewport: () => le11,
  Viewport: () => at3,
  createToastScope: () => nt2
});
import * as o14 from "react";
import * as re15 from "react-dom";
import { Fragment as ae12, jsx as l19, jsxs as G17 } from "react/jsx-runtime";
var J18 = "ToastProvider";
var [Q18, Ie13, Ae11] = re("Toast");
var [ie8, nt2] = $2("Toast", [Ae11]);
var [Fe9, Y17] = ie8(J18);
var ce9 = (e18) => {
  let { __scopeToast: r18, label: n21 = "Notification", duration: t18 = 5e3, swipeDirection: c16 = "right", swipeThreshold: d14 = 50, announcerContainer: p15, children: v19 } = e18, [T20, i21] = o14.useState(null), [x19, w18] = o14.useState(0), I18 = o14.useRef(false), A17 = o14.useRef(false);
  return n21.trim() || console.error(`Invalid prop \`label\` supplied to \`${J18}\`. Expected non-empty \`string\`.`), l19(Q18.Provider, { scope: r18, children: l19(Fe9, { scope: r18, label: n21, duration: t18, swipeDirection: c16, swipeThreshold: d14, toastCount: x19, viewport: T20, onViewportChange: i21, onToastAdd: o14.useCallback(() => w18((C18) => C18 + 1), []), onToastRemove: o14.useCallback(() => w18((C18) => C18 - 1), []), isFocusedToastEscapeKeyDownRef: I18, isClosePausedRef: A17, announcerContainer: p15, children: v19 }) });
};
ce9.displayName = J18;
var ue9 = "ToastViewport";
var _e14 = ["F8"];
var j18 = "toast.viewportPause";
var q20 = "toast.viewportResume";
var le11 = o14.forwardRef((e18, r18) => {
  let { __scopeToast: n21, hotkey: t18 = _e14, label: c16 = "Notifications ({hotkey})", ...d14 } = e18, p15 = Y17(ue9, n21), v19 = Ie13(n21), T20 = o14.useRef(null), i21 = o14.useRef(null), x19 = o14.useRef(null), w18 = o14.useRef(null), I18 = s(r18, w18, p15.onViewportChange), A17 = t18.join("+").replace(/Key/g, "").replace(/Digit/g, ""), C18 = p15.toastCount > 0;
  o14.useEffect(() => {
    let a18 = (R18) => {
      t18.length !== 0 && t18.every((m20) => R18[m20] || R18.code === m20) && w18.current?.focus();
    };
    return document.addEventListener("keydown", a18), () => document.removeEventListener("keydown", a18);
  }, [t18]), o14.useEffect(() => {
    let a18 = T20.current, R18 = w18.current;
    if (C18 && a18 && R18) {
      let f21 = () => {
        if (!p15.isClosePausedRef.current) {
          let E24 = new CustomEvent(j18);
          R18.dispatchEvent(E24), p15.isClosePausedRef.current = true;
        }
      }, m20 = () => {
        if (p15.isClosePausedRef.current) {
          let E24 = new CustomEvent(q20);
          R18.dispatchEvent(E24), p15.isClosePausedRef.current = false;
        }
      }, y20 = (E24) => {
        !a18.contains(E24.relatedTarget) && m20();
      }, P16 = () => {
        a18.contains(document.activeElement) || m20();
      };
      return a18.addEventListener("focusin", f21), a18.addEventListener("focusout", y20), a18.addEventListener("pointermove", f21), a18.addEventListener("pointerleave", P16), window.addEventListener("blur", f21), window.addEventListener("focus", m20), () => {
        a18.removeEventListener("focusin", f21), a18.removeEventListener("focusout", y20), a18.removeEventListener("pointermove", f21), a18.removeEventListener("pointerleave", P16), window.removeEventListener("blur", f21), window.removeEventListener("focus", m20);
      };
    }
  }, [C18, p15.isClosePausedRef]);
  let u20 = o14.useCallback(({ tabbingDirection: a18 }) => {
    let f21 = v19().map((m20) => {
      let y20 = m20.ref.current, P16 = [y20, ...$e4(y20)];
      return a18 === "forwards" ? P16 : P16.reverse();
    });
    return (a18 === "forwards" ? f21.reverse() : f21).flat();
  }, [v19]);
  return o14.useEffect(() => {
    let a18 = w18.current;
    if (a18) {
      let R18 = (f21) => {
        let m20 = f21.altKey || f21.ctrlKey || f21.metaKey;
        if (f21.key === "Tab" && !m20) {
          let P16 = document.activeElement, E24 = f21.shiftKey;
          if (f21.target === a18 && E24) {
            i21.current?.focus();
            return;
          }
          let _22 = u20({ tabbingDirection: E24 ? "backwards" : "forwards" }), k16 = _22.findIndex((S18) => S18 === P16);
          B17(_22.slice(k16 + 1)) ? f21.preventDefault() : E24 ? i21.current?.focus() : x19.current?.focus();
        }
      };
      return a18.addEventListener("keydown", R18), () => a18.removeEventListener("keydown", R18);
    }
  }, [v19, u20]), G17(re3, { ref: T20, role: "region", "aria-label": c16.replace("{hotkey}", A17), tabIndex: -1, style: { pointerEvents: C18 ? void 0 : "none" }, children: [C18 && l19(z15, { ref: i21, onFocusFromOutsideViewport: () => {
    let a18 = u20({ tabbingDirection: "forwards" });
    B17(a18);
  } }), l19(Q18.Slot, { scope: n21, children: l19(v2.ol, { tabIndex: -1, ...d14, ref: I18 }) }), C18 && l19(z15, { ref: x19, onFocusFromOutsideViewport: () => {
    let a18 = u20({ tabbingDirection: "backwards" });
    B17(a18);
  } })] });
});
le11.displayName = ue9;
var de10 = "ToastFocusProxy";
var z15 = o14.forwardRef((e18, r18) => {
  let { __scopeToast: n21, onFocusFromOutsideViewport: t18, ...c16 } = e18, d14 = Y17(de10, n21);
  return l19(a, { tabIndex: 0, ...c16, ref: r18, style: { position: "fixed" }, onFocus: (p15) => {
    let v19 = p15.relatedTarget;
    !d14.viewport?.contains(v19) && t18();
  } });
});
z15.displayName = de10;
var M12 = "Toast";
var Ne10 = "toast.swipeStart";
var Le7 = "toast.swipeMove";
var Me13 = "toast.swipeCancel";
var Oe10 = "toast.swipeEnd";
var pe11 = o14.forwardRef((e18, r18) => {
  let { forceMount: n21, open: t18, defaultOpen: c16, onOpenChange: d14, ...p15 } = e18, [v19, T20] = D({ prop: t18, defaultProp: c16 ?? true, onChange: d14, caller: M12 });
  return l19(y2, { present: n21 || v19, children: l19(Ve6, { open: v19, ...p15, ref: r18, onClose: () => T20(false), onPause: u3(e18.onPause), onResume: u3(e18.onResume), onSwipeStart: f2(e18.onSwipeStart, (i21) => {
    i21.currentTarget.setAttribute("data-swipe", "start");
  }), onSwipeMove: f2(e18.onSwipeMove, (i21) => {
    let { x: x19, y: w18 } = i21.detail.delta;
    i21.currentTarget.setAttribute("data-swipe", "move"), i21.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${x19}px`), i21.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${w18}px`);
  }), onSwipeCancel: f2(e18.onSwipeCancel, (i21) => {
    i21.currentTarget.setAttribute("data-swipe", "cancel"), i21.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), i21.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), i21.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), i21.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
  }), onSwipeEnd: f2(e18.onSwipeEnd, (i21) => {
    let { x: x19, y: w18 } = i21.detail.delta;
    i21.currentTarget.setAttribute("data-swipe", "end"), i21.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), i21.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), i21.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${x19}px`), i21.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${w18}px`), T20(false);
  }) }) });
});
pe11.displayName = M12;
var [ke7, Ke7] = ie8(M12, { onClose() {
} });
var Ve6 = o14.forwardRef((e18, r18) => {
  let { __scopeToast: n21, type: t18 = "foreground", duration: c16, open: d14, onClose: p15, onEscapeKeyDown: v19, onPause: T20, onResume: i21, onSwipeStart: x19, onSwipeMove: w18, onSwipeCancel: I18, onSwipeEnd: A17, ...C18 } = e18, u20 = Y17(M12, n21), [a18, R18] = o14.useState(null), f21 = s(r18, (s16) => R18(s16)), m20 = o14.useRef(null), y20 = o14.useRef(null), P16 = c16 || u20.duration, E24 = o14.useRef(0), F11 = o14.useRef(P16), O23 = o14.useRef(0), { onToastAdd: _22, onToastRemove: k16 } = u20, S18 = u3(() => {
    a18?.contains(document.activeElement) && u20.viewport?.focus(), p15();
  }), K20 = o14.useCallback((s16) => {
    !s16 || s16 === 1 / 0 || (window.clearTimeout(O23.current), E24.current = (/* @__PURE__ */ new Date()).getTime(), O23.current = window.setTimeout(S18, s16));
  }, [S18]);
  o14.useEffect(() => {
    let s16 = u20.viewport;
    if (s16) {
      let b20 = () => {
        K20(F11.current), i21?.();
      }, g21 = () => {
        let N26 = (/* @__PURE__ */ new Date()).getTime() - E24.current;
        F11.current = F11.current - N26, window.clearTimeout(O23.current), T20?.();
      };
      return s16.addEventListener(j18, g21), s16.addEventListener(q20, b20), () => {
        s16.removeEventListener(j18, g21), s16.removeEventListener(q20, b20);
      };
    }
  }, [u20.viewport, P16, T20, i21, K20]), o14.useEffect(() => {
    d14 && !u20.isClosePausedRef.current && K20(P16);
  }, [d14, P16, u20.isClosePausedRef, K20]), o14.useEffect(() => (_22(), () => k16()), [_22, k16]);
  let ee15 = o14.useMemo(() => a18 ? Re10(a18) : null, [a18]);
  return u20.viewport ? G17(ae12, { children: [ee15 && l19(He5, { __scopeToast: n21, role: "status", "aria-live": t18 === "foreground" ? "assertive" : "polite", children: ee15 }), l19(ke7, { scope: n21, onClose: S18, children: re15.createPortal(l19(Q18.ItemSlot, { scope: n21, children: l19(se2, { asChild: true, onEscapeKeyDown: f2(v19, () => {
    u20.isFocusedToastEscapeKeyDownRef.current || S18(), u20.isFocusedToastEscapeKeyDownRef.current = false;
  }), children: l19(v2.li, { tabIndex: 0, "data-state": d14 ? "open" : "closed", "data-swipe-direction": u20.swipeDirection, ...C18, ref: f21, style: { userSelect: "none", touchAction: "none", ...e18.style }, onKeyDown: f2(e18.onKeyDown, (s16) => {
    s16.key === "Escape" && (v19?.(s16.nativeEvent), s16.nativeEvent.defaultPrevented || (u20.isFocusedToastEscapeKeyDownRef.current = true, S18()));
  }), onPointerDown: f2(e18.onPointerDown, (s16) => {
    s16.button === 0 && (m20.current = { x: s16.clientX, y: s16.clientY });
  }), onPointerMove: f2(e18.onPointerMove, (s16) => {
    if (!m20.current) return;
    let b20 = s16.clientX - m20.current.x, g21 = s16.clientY - m20.current.y, N26 = !!y20.current, L25 = ["left", "right"].includes(u20.swipeDirection), V20 = ["left", "up"].includes(u20.swipeDirection) ? Math.min : Math.max, ye11 = L25 ? V20(0, b20) : 0, Pe12 = L25 ? 0 : V20(0, g21), $20 = s16.pointerType === "touch" ? 10 : 2, H15 = { x: ye11, y: Pe12 }, te14 = { originalEvent: s16, delta: H15 };
    N26 ? (y20.current = H15, W19(Le7, w18, te14, { discrete: false })) : oe15(H15, u20.swipeDirection, $20) ? (y20.current = H15, W19(Ne10, x19, te14, { discrete: false }), s16.target.setPointerCapture(s16.pointerId)) : (Math.abs(b20) > $20 || Math.abs(g21) > $20) && (m20.current = null);
  }), onPointerUp: f2(e18.onPointerUp, (s16) => {
    let b20 = y20.current, g21 = s16.target;
    if (g21.hasPointerCapture(s16.pointerId) && g21.releasePointerCapture(s16.pointerId), y20.current = null, m20.current = null, b20) {
      let N26 = s16.currentTarget, L25 = { originalEvent: s16, delta: b20 };
      oe15(b20, u20.swipeDirection, u20.swipeThreshold) ? W19(Oe10, A17, L25, { discrete: true }) : W19(Me13, I18, L25, { discrete: true }), N26.addEventListener("click", (V20) => V20.preventDefault(), { once: true });
    }
  }) }) }) }), u20.viewport) })] }) : null;
});
var He5 = (e18) => {
  let { __scopeToast: r18, children: n21, ...t18 } = e18, c16 = Y17(M12, r18), [d14, p15] = o14.useState(false), [v19, T20] = o14.useState(false);
  return Xe4(() => p15(true)), o14.useEffect(() => {
    let i21 = window.setTimeout(() => T20(true), 1e3);
    return () => window.clearTimeout(i21);
  }, []), v19 ? null : l19(e9, { asChild: true, container: c16.announcerContainer || void 0, children: l19(a, { ...t18, children: d14 && G17(ae12, { children: [c16.label, " ", n21] }) }) });
};
var We6 = "ToastTitle";
var fe13 = o14.forwardRef((e18, r18) => {
  let { __scopeToast: n21, ...t18 } = e18;
  return l19(v2.div, { ...t18, ref: r18 });
});
fe13.displayName = We6;
var Ue8 = "ToastDescription";
var me11 = o14.forwardRef((e18, r18) => {
  let { __scopeToast: n21, ...t18 } = e18;
  return l19(v2.div, { ...t18, ref: r18 });
});
me11.displayName = Ue8;
var ve15 = "ToastAction";
var Te7 = o14.forwardRef((e18, r18) => {
  let { altText: n21, ...t18 } = e18;
  return n21.trim() ? l19(Ee9, { altText: n21, asChild: true, children: l19(Z17, { ...t18, ref: r18 }) }) : (console.error(`Invalid prop \`altText\` supplied to \`${ve15}\`. Expected non-empty \`string\`.`), null);
});
Te7.displayName = ve15;
var we14 = "ToastClose";
var Z17 = o14.forwardRef((e18, r18) => {
  let { __scopeToast: n21, ...t18 } = e18, c16 = Ke7(we14, n21);
  return l19(Ee9, { asChild: true, children: l19(v2.button, { type: "button", ...t18, ref: r18, onClick: f2(e18.onClick, c16.onClose) }) });
});
Z17.displayName = we14;
var Ee9 = o14.forwardRef((e18, r18) => {
  let { __scopeToast: n21, altText: t18, ...c16 } = e18;
  return l19(v2.div, { "data-radix-toast-announce-exclude": "", "data-radix-toast-announce-alt": t18 || void 0, ...c16, ref: r18 });
});
function Re10(e18) {
  let r18 = [];
  return Array.from(e18.childNodes).forEach((t18) => {
    if (t18.nodeType === t18.TEXT_NODE && t18.textContent && r18.push(t18.textContent), Ye5(t18)) {
      let c16 = t18.ariaHidden || t18.hidden || t18.style.display === "none", d14 = t18.dataset.radixToastAnnounceExclude === "";
      if (!c16) if (d14) {
        let p15 = t18.dataset.radixToastAnnounceAlt;
        p15 && r18.push(p15);
      } else r18.push(...Re10(t18));
    }
  }), r18;
}
function W19(e18, r18, n21, { discrete: t18 }) {
  let c16 = n21.originalEvent.currentTarget, d14 = new CustomEvent(e18, { bubbles: true, cancelable: true, detail: n21 });
  r18 && c16.addEventListener(e18, r18, { once: true }), t18 ? R(c16, d14) : c16.dispatchEvent(d14);
}
var oe15 = (e18, r18, n21 = 0) => {
  let t18 = Math.abs(e18.x), c16 = Math.abs(e18.y), d14 = t18 > c16;
  return r18 === "left" || r18 === "right" ? d14 && t18 > n21 : !d14 && c16 > n21;
};
function Xe4(e18 = () => {
}) {
  let r18 = u3(e18);
  e4(() => {
    let n21 = 0, t18 = 0;
    return n21 = window.requestAnimationFrame(() => t18 = window.requestAnimationFrame(r18)), () => {
      window.cancelAnimationFrame(n21), window.cancelAnimationFrame(t18);
    };
  }, [r18]);
}
function Ye5(e18) {
  return e18.nodeType === e18.ELEMENT_NODE;
}
function $e4(e18) {
  let r18 = [], n21 = document.createTreeWalker(e18, NodeFilter.SHOW_ELEMENT, { acceptNode: (t18) => {
    let c16 = t18.tagName === "INPUT" && t18.type === "hidden";
    return t18.disabled || t18.hidden || c16 ? NodeFilter.FILTER_SKIP : t18.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n21.nextNode(); ) r18.push(n21.currentNode);
  return r18;
}
function B17(e18) {
  let r18 = document.activeElement;
  return e18.some((n21) => n21 === r18 ? true : (n21.focus(), document.activeElement !== r18));
}
var st4 = ce9;
var at3 = le11;
var it4 = pe11;
var ct3 = fe13;
var ut5 = me11;
var lt4 = Te7;
var dt5 = Z17;

// http-url:https://esm.sh/@radix-ui/react-toggle-group@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toggle-group.mjs
var react_toggle_group_exports = {};
__export(react_toggle_group_exports, {
  Item: () => E22,
  Root: () => h21,
  ToggleGroup: () => h21,
  ToggleGroupItem: () => E22,
  createToggleGroupScope: () => $19
});
import * as r17 from "react";

// http-url:https://esm.sh/@radix-ui/react-toggle@1.1.12/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toggle.mjs
var react_toggle_exports = {};
__export(react_toggle_exports, {
  Root: () => C15,
  Toggle: () => a15
});
import * as r16 from "react";
import { jsx as u19 } from "react/jsx-runtime";
var t17 = "Toggle";
var a15 = r16.forwardRef((e18, s16) => {
  let { pressed: d14, defaultPressed: i21, onPressedChange: l20, ...n21 } = e18, [o15, f21] = D({ prop: d14, onChange: l20, defaultProp: i21 ?? false, caller: t17 });
  return u19(v2.button, { type: "button", "aria-pressed": o15, "data-state": o15 ? "on" : "off", "data-disabled": e18.disabled ? "" : void 0, ...n21, ref: s16, onClick: f2(e18.onClick, () => {
    e18.disabled || f21(!o15);
  }) });
});
a15.displayName = t17;
var C15 = a15;

// http-url:https://esm.sh/@radix-ui/react-toggle-group@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toggle-group.mjs
import { jsx as a16 } from "react/jsx-runtime";
var p14 = "ToggleGroup";
var [C16, $19] = $2(p14, [be4]);
var _19 = be4();
var h21 = r17.forwardRef((e18, t18) => {
  let { type: u20, ...l20 } = e18;
  if (u20 === "single") return a16(M13, { role: "radiogroup", ...l20, ref: t18 });
  if (u20 === "multiple") return a16(A15, { role: "toolbar", ...l20, ref: t18 });
  throw new Error(`Missing prop \`type\` expected on \`${p14}\``);
});
h21.displayName = p14;
var [I17, x17] = C16(p14);
var M13 = r17.forwardRef((e18, t18) => {
  let { value: u20, defaultValue: l20, onValueChange: c16 = () => {
  }, ...s16 } = e18, [n21, o15] = D({ prop: u20, defaultProp: l20 ?? "", onChange: c16, caller: p14 });
  return a16(I17, { scope: e18.__scopeToggleGroup, type: "single", value: r17.useMemo(() => n21 ? [n21] : [], [n21]), onItemActivate: o15, onItemDeactivate: r17.useCallback(() => o15(""), [o15]), children: a16(b18, { ...s16, ref: t18 }) });
});
var A15 = r17.forwardRef((e18, t18) => {
  let { value: u20, defaultValue: l20, onValueChange: c16 = () => {
  }, ...s16 } = e18, [n21, o15] = D({ prop: u20, defaultProp: l20 ?? [], onChange: c16, caller: p14 }), i21 = r17.useCallback((g21) => o15((v19 = []) => [...v19, g21]), [o15]), f21 = r17.useCallback((g21) => o15((v19 = []) => v19.filter((y20) => y20 !== g21)), [o15]);
  return a16(I17, { scope: e18.__scopeToggleGroup, type: "multiple", value: n21, onItemActivate: i21, onItemDeactivate: f21, children: a16(b18, { ...s16, ref: t18 }) });
});
h21.displayName = p14;
var [w17, D17] = C16(p14);
var b18 = r17.forwardRef((e18, t18) => {
  let { __scopeToggleGroup: u20, disabled: l20 = false, rovingFocus: c16 = true, orientation: s16, dir: n21, loop: o15 = true, ...i21 } = e18, f21 = _19(u20), g21 = v5(n21), v19 = { dir: g21, ...i21 };
  return a16(w17, { scope: u20, rovingFocus: c16, disabled: l20, children: c16 ? a16(Fe3, { asChild: true, ...f21, orientation: s16, dir: g21, loop: o15, children: a16(v2.div, { ...v19, ref: t18 }) }) : a16(v2.div, { ...v19, ref: t18 }) });
});
var m18 = "ToggleGroupItem";
var E22 = r17.forwardRef((e18, t18) => {
  let u20 = x17(m18, e18.__scopeToggleGroup), l20 = D17(m18, e18.__scopeToggleGroup), c16 = _19(e18.__scopeToggleGroup), s16 = u20.value.includes(e18.value), n21 = l20.disabled || e18.disabled, o15 = { ...e18, pressed: s16, disabled: n21 }, i21 = r17.useRef(null);
  return l20.rovingFocus ? a16(ge5, { asChild: true, ...c16, focusable: !n21, active: s16, ref: i21, children: a16(R16, { ...o15, ref: t18 }) }) : a16(R16, { ...o15, ref: t18 });
});
E22.displayName = m18;
var R16 = r17.forwardRef((e18, t18) => {
  let { __scopeToggleGroup: u20, value: l20, ...c16 } = e18, s16 = x17(m18, u20), n21 = { role: "radio", "aria-checked": e18.pressed, "aria-pressed": void 0 }, o15 = s16.type === "single" ? n21 : void 0;
  return a16(a15, { ...o15, ...c16, ref: t18, onPressedChange: (i21) => {
    i21 ? s16.onItemActivate(l20) : s16.onItemDeactivate(l20);
  } });
});

// http-url:https://esm.sh/@radix-ui/react-toolbar@1.1.13/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-toolbar.mjs
var react_toolbar_exports = {};
__export(react_toolbar_exports, {
  Button: () => Q19,
  Link: () => V18,
  Root: () => q21,
  Separator: () => J19,
  ToggleGroup: () => W20,
  ToggleItem: () => X23,
  Toolbar: () => G18,
  ToolbarButton: () => g20,
  ToolbarLink: () => P14,
  ToolbarSeparator: () => S17,
  ToolbarToggleGroup: () => h22,
  ToolbarToggleItem: () => E23,
  createToolbarScope: () => H13
});
import * as n20 from "react";
import { jsx as i20 } from "react/jsx-runtime";
var T19 = "Toolbar";
var [x18, H13] = $2(T19, [be4, $19]);
var m19 = be4();
var b19 = $19();
var [C17, R17] = x18(T19);
var G18 = n20.forwardRef((o15, a18) => {
  let { __scopeToolbar: r18, orientation: e18 = "horizontal", dir: t18, loop: c16 = true, ...y20 } = o15, F11 = m19(r18), s16 = v5(t18);
  return i20(C17, { scope: r18, orientation: e18, dir: s16, children: i20(Fe3, { asChild: true, ...F11, orientation: e18, dir: s16, loop: c16, children: i20(v2.div, { role: "toolbar", "aria-orientation": e18, dir: s16, ...y20, ref: a18 }) }) });
});
G18.displayName = T19;
var _20 = "ToolbarSeparator";
var S17 = n20.forwardRef((o15, a18) => {
  let { __scopeToolbar: r18, ...e18 } = o15, t18 = R17(_20, r18);
  return i20(T17, { orientation: t18.orientation === "horizontal" ? "vertical" : "horizontal", ...e18, ref: a18 });
});
S17.displayName = _20;
var L23 = "ToolbarButton";
var g20 = n20.forwardRef((o15, a18) => {
  let { __scopeToolbar: r18, ...e18 } = o15, t18 = m19(r18);
  return i20(ge5, { asChild: true, ...t18, focusable: !o15.disabled, children: i20(v2.button, { type: "button", ...e18, ref: a18 }) });
});
g20.displayName = L23;
var M14 = "ToolbarLink";
var P14 = n20.forwardRef((o15, a18) => {
  let { __scopeToolbar: r18, ...e18 } = o15, t18 = m19(r18);
  return i20(ge5, { asChild: true, ...t18, focusable: true, children: i20(v2.a, { ...e18, ref: a18, onKeyDown: f2(o15.onKeyDown, (c16) => {
    c16.key === " " && c16.currentTarget.click();
  }) }) });
});
P14.displayName = M14;
var N25 = "ToolbarToggleGroup";
var h22 = n20.forwardRef((o15, a18) => {
  let { __scopeToolbar: r18, ...e18 } = o15, t18 = R17(N25, r18), c16 = b19(r18);
  return i20(h21, { "data-orientation": t18.orientation, dir: t18.dir, ...c16, ...e18, ref: a18, rovingFocus: false });
});
h22.displayName = N25;
var O21 = "ToolbarToggleItem";
var E23 = n20.forwardRef((o15, a18) => {
  let { __scopeToolbar: r18, ...e18 } = o15, t18 = b19(r18), c16 = { __scopeToolbar: o15.__scopeToolbar };
  return i20(g20, { asChild: true, ...c16, children: i20(E22, { ...t18, ...e18, ref: a18 }) });
});
E23.displayName = O21;
var q21 = G18;
var J19 = S17;
var Q19 = g20;
var V18 = P14;
var W20 = h22;
var X23 = E23;

// http-url:https://esm.sh/@radix-ui/react-tooltip@1.2.10/X-ZXJlYWN0LHJlYWN0LWRvbQ/es2022/react-tooltip.mjs
var react_tooltip_exports = {};
__export(react_tooltip_exports, {
  Arrow: () => Se7,
  Content: () => Ne11,
  Portal: () => Ie14,
  Provider: () => ke8,
  Root: () => Me14,
  Tooltip: () => U15,
  TooltipArrow: () => z16,
  TooltipContent: () => X24,
  TooltipPortal: () => q22,
  TooltipProvider: () => B18,
  TooltipTrigger: () => Y18,
  Trigger: () => He6,
  createTooltipScope: () => Le8
});
import * as a17 from "react";
import { jsx as f20, jsxs as re16 } from "react/jsx-runtime";
var [A16, Le8] = $2("Tooltip", [Fe2]);
var D18 = Fe2();
var V19 = "TooltipProvider";
var ne17 = 700;
var L24 = "tooltip.open";
var [ae13, M15] = A16(V19);
var B18 = (t18) => {
  let { __scopeTooltip: o15, delayDuration: e18 = ne17, skipDelayDuration: r18 = 300, disableHoverableContent: n21 = false, children: c16 } = t18, s16 = a17.useRef(true), m20 = a17.useRef(false), i21 = a17.useRef(0);
  return a17.useEffect(() => {
    let u20 = i21.current;
    return () => window.clearTimeout(u20);
  }, []), f20(ae13, { scope: o15, isOpenDelayedRef: s16, delayDuration: e18, onOpen: a17.useCallback(() => {
    r18 <= 0 || (window.clearTimeout(i21.current), s16.current = false);
  }, [r18]), onClose: a17.useCallback(() => {
    r18 <= 0 || (window.clearTimeout(i21.current), i21.current = window.setTimeout(() => s16.current = true, r18));
  }, [r18]), isPointerInTransitRef: m20, onPointerInTransitChange: a17.useCallback((u20) => {
    m20.current = u20;
  }, []), disableHoverableContent: n21, children: c16 });
};
B18.displayName = V19;
var _21 = "Tooltip";
var [ie9, O22] = A16(_21);
var U15 = (t18) => {
  let { __scopeTooltip: o15, children: e18, open: r18, defaultOpen: n21, onOpenChange: c16, disableHoverableContent: s16, delayDuration: m20 } = t18, i21 = M15(_21, t18.__scopeTooltip), u20 = D18(o15), [l20, p15] = a17.useState(null), v19 = n5(), d14 = a17.useRef(0), h23 = s16 ?? i21.disableHoverableContent, T20 = m20 ?? i21.delayDuration, R18 = a17.useRef(false), [C18, y20] = D({ prop: r18, defaultProp: n21 ?? false, onChange: (N26) => {
    N26 ? (i21.onOpen(), document.dispatchEvent(new CustomEvent(L24))) : i21.onClose(), c16?.(N26);
  }, caller: _21 }), b20 = a17.useMemo(() => C18 ? R18.current ? "delayed-open" : "instant-open" : "closed", [C18]), w18 = a17.useCallback(() => {
    window.clearTimeout(d14.current), d14.current = 0, R18.current = false, y20(true);
  }, [y20]), E24 = a17.useCallback(() => {
    window.clearTimeout(d14.current), d14.current = 0, y20(false);
  }, [y20]), I18 = a17.useCallback(() => {
    window.clearTimeout(d14.current), d14.current = window.setTimeout(() => {
      R18.current = true, y20(true), d14.current = 0;
    }, T20);
  }, [T20, y20]);
  return a17.useEffect(() => () => {
    d14.current && (window.clearTimeout(d14.current), d14.current = 0);
  }, []), f20(Be2, { ...u20, children: f20(ie9, { scope: o15, contentId: v19, open: C18, stateAttribute: b20, trigger: l20, onTriggerChange: p15, onTriggerEnter: a17.useCallback(() => {
    i21.isOpenDelayedRef.current ? I18() : w18();
  }, [i21.isOpenDelayedRef, I18, w18]), onTriggerLeave: a17.useCallback(() => {
    h23 ? E24() : (window.clearTimeout(d14.current), d14.current = 0);
  }, [E24, h23]), onOpen: w18, onClose: E24, disableHoverableContent: h23, children: e18 }) });
};
U15.displayName = _21;
var k15 = "TooltipTrigger";
var Y18 = a17.forwardRef((t18, o15) => {
  let { __scopeTooltip: e18, ...r18 } = t18, n21 = O22(k15, e18), c16 = M15(k15, e18), s16 = D18(e18), m20 = a17.useRef(null), i21 = s(o15, m20, n21.onTriggerChange), u20 = a17.useRef(false), l20 = a17.useRef(false), p15 = a17.useCallback(() => u20.current = false, []);
  return a17.useEffect(() => () => document.removeEventListener("pointerup", p15), [p15]), f20(je3, { asChild: true, ...s16, children: f20(v2.button, { "aria-describedby": n21.open ? n21.contentId : void 0, "data-state": n21.stateAttribute, ...r18, ref: i21, onPointerMove: f2(t18.onPointerMove, (v19) => {
    v19.pointerType !== "touch" && !l20.current && !c16.isPointerInTransitRef.current && (n21.onTriggerEnter(), l20.current = true);
  }), onPointerLeave: f2(t18.onPointerLeave, () => {
    n21.onTriggerLeave(), l20.current = false;
  }), onPointerDown: f2(t18.onPointerDown, () => {
    n21.open && n21.onClose(), u20.current = true, document.addEventListener("pointerup", p15, { once: true });
  }), onFocus: f2(t18.onFocus, () => {
    u20.current || n21.onOpen();
  }), onBlur: f2(t18.onBlur, n21.onClose), onClick: f2(t18.onClick, n21.onClose) }) });
});
Y18.displayName = k15;
var H14 = "TooltipPortal";
var [se12, ce10] = A16(H14, { forceMount: void 0 });
var q22 = (t18) => {
  let { __scopeTooltip: o15, forceMount: e18, children: r18, container: n21 } = t18, c16 = O22(H14, o15);
  return f20(se12, { scope: o15, forceMount: e18, children: f20(y2, { present: e18 || c16.open, children: f20(e9, { asChild: true, container: n21, children: r18 }) }) });
};
q22.displayName = H14;
var P15 = "TooltipContent";
var X24 = a17.forwardRef((t18, o15) => {
  let e18 = ce10(P15, t18.__scopeTooltip), { forceMount: r18 = e18.forceMount, side: n21 = "top", ...c16 } = t18, s16 = O22(P15, t18.__scopeTooltip);
  return f20(y2, { present: r18 || s16.open, children: s16.disableHoverableContent ? f20(K19, { side: n21, ...c16, ref: o15 }) : f20(le12, { side: n21, ...c16, ref: o15 }) });
});
var le12 = a17.forwardRef((t18, o15) => {
  let e18 = O22(P15, t18.__scopeTooltip), r18 = M15(P15, t18.__scopeTooltip), n21 = a17.useRef(null), c16 = s(o15, n21), [s16, m20] = a17.useState(null), { trigger: i21, onClose: u20 } = e18, l20 = n21.current, { onPointerInTransitChange: p15 } = r18, v19 = a17.useCallback(() => {
    m20(null), p15(false);
  }, [p15]), d14 = a17.useCallback((h23, T20) => {
    let R18 = h23.currentTarget, C18 = { x: h23.clientX, y: h23.clientY }, y20 = fe14(C18, R18.getBoundingClientRect()), b20 = ve16(C18, y20), w18 = me12(T20.getBoundingClientRect()), E24 = Re11([...b20, ...w18]);
    m20(E24), p15(true);
  }, [p15]);
  return a17.useEffect(() => () => v19(), [v19]), a17.useEffect(() => {
    if (i21 && l20) {
      let h23 = (R18) => d14(R18, l20), T20 = (R18) => d14(R18, i21);
      return i21.addEventListener("pointerleave", h23), l20.addEventListener("pointerleave", T20), () => {
        i21.removeEventListener("pointerleave", h23), l20.removeEventListener("pointerleave", T20);
      };
    }
  }, [i21, l20, d14, v19]), a17.useEffect(() => {
    if (s16) {
      let h23 = (T20) => {
        let R18 = T20.target, C18 = { x: T20.clientX, y: T20.clientY }, y20 = i21?.contains(R18) || l20?.contains(R18), b20 = !he15(C18, s16);
        y20 ? v19() : b20 && (v19(), u20());
      };
      return document.addEventListener("pointermove", h23), () => document.removeEventListener("pointermove", h23);
    }
  }, [i21, l20, s16, u20, v19]), f20(K19, { ...t18, ref: c16 });
});
var [ue10, pe12] = A16(_21, { isInside: false });
var de11 = g("TooltipContent");
var K19 = a17.forwardRef((t18, o15) => {
  let { __scopeTooltip: e18, children: r18, "aria-label": n21, onEscapeKeyDown: c16, onPointerDownOutside: s16, ...m20 } = t18, i21 = O22(P15, e18), u20 = D18(e18), { onClose: l20 } = i21;
  return a17.useEffect(() => (document.addEventListener(L24, l20), () => document.removeEventListener(L24, l20)), [l20]), a17.useEffect(() => {
    if (i21.trigger) {
      let p15 = (v19) => {
        v19.target instanceof Node && v19.target.contains(i21.trigger) && l20();
      };
      return window.addEventListener("scroll", p15, { capture: true }), () => window.removeEventListener("scroll", p15, { capture: true });
    }
  }, [i21.trigger, l20]), f20(_2, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: c16, onPointerDownOutside: s16, onFocusOutside: (p15) => p15.preventDefault(), onDismiss: l20, children: re16(Le2, { "data-state": i21.stateAttribute, ...u20, ...m20, ref: o15, style: { ...m20.style, "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }, children: [f20(de11, { children: r18 }), f20(ue10, { scope: e18, isInside: true, children: f20(p, { id: i21.contentId, role: "tooltip", children: n21 || r18 }) })] }) });
});
X24.displayName = P15;
var W21 = "TooltipArrow";
var z16 = a17.forwardRef((t18, o15) => {
  let { __scopeTooltip: e18, ...r18 } = t18, n21 = D18(e18);
  return pe12(W21, e18).isInside ? null : f20(Ue2, { ...n21, ...r18, ref: o15 });
});
z16.displayName = W21;
function fe14(t18, o15) {
  let e18 = Math.abs(o15.top - t18.y), r18 = Math.abs(o15.bottom - t18.y), n21 = Math.abs(o15.right - t18.x), c16 = Math.abs(o15.left - t18.x);
  switch (Math.min(e18, r18, n21, c16)) {
    case c16:
      return "left";
    case n21:
      return "right";
    case e18:
      return "top";
    case r18:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function ve16(t18, o15, e18 = 5) {
  let r18 = [];
  switch (o15) {
    case "top":
      r18.push({ x: t18.x - e18, y: t18.y + e18 }, { x: t18.x + e18, y: t18.y + e18 });
      break;
    case "bottom":
      r18.push({ x: t18.x - e18, y: t18.y - e18 }, { x: t18.x + e18, y: t18.y - e18 });
      break;
    case "left":
      r18.push({ x: t18.x + e18, y: t18.y - e18 }, { x: t18.x + e18, y: t18.y + e18 });
      break;
    case "right":
      r18.push({ x: t18.x - e18, y: t18.y - e18 }, { x: t18.x - e18, y: t18.y + e18 });
      break;
  }
  return r18;
}
function me12(t18) {
  let { top: o15, right: e18, bottom: r18, left: n21 } = t18;
  return [{ x: n21, y: o15 }, { x: e18, y: o15 }, { x: e18, y: r18 }, { x: n21, y: r18 }];
}
function he15(t18, o15) {
  let { x: e18, y: r18 } = t18, n21 = false;
  for (let c16 = 0, s16 = o15.length - 1; c16 < o15.length; s16 = c16++) {
    let m20 = o15[c16], i21 = o15[s16], u20 = m20.x, l20 = m20.y, p15 = i21.x, v19 = i21.y;
    l20 > r18 != v19 > r18 && e18 < (p15 - u20) * (r18 - l20) / (v19 - l20) + u20 && (n21 = !n21);
  }
  return n21;
}
function Re11(t18) {
  let o15 = t18.slice();
  return o15.sort((e18, r18) => e18.x < r18.x ? -1 : e18.x > r18.x ? 1 : e18.y < r18.y ? -1 : e18.y > r18.y ? 1 : 0), Te8(o15);
}
function Te8(t18) {
  if (t18.length <= 1) return t18.slice();
  let o15 = [];
  for (let r18 = 0; r18 < t18.length; r18++) {
    let n21 = t18[r18];
    for (; o15.length >= 2; ) {
      let c16 = o15[o15.length - 1], s16 = o15[o15.length - 2];
      if ((c16.x - s16.x) * (n21.y - s16.y) >= (c16.y - s16.y) * (n21.x - s16.x)) o15.pop();
      else break;
    }
    o15.push(n21);
  }
  o15.pop();
  let e18 = [];
  for (let r18 = t18.length - 1; r18 >= 0; r18--) {
    let n21 = t18[r18];
    for (; e18.length >= 2; ) {
      let c16 = e18[e18.length - 1], s16 = e18[e18.length - 2];
      if ((c16.x - s16.x) * (n21.y - s16.y) >= (c16.y - s16.y) * (n21.x - s16.x)) e18.pop();
      else break;
    }
    e18.push(n21);
  }
  return e18.pop(), o15.length === 1 && e18.length === 1 && o15[0].x === e18[0].x && o15[0].y === e18[0].y ? o15 : o15.concat(e18);
}
var ke8 = B18;
var Me14 = U15;
var He6 = Y18;
var Ie14 = q22;
var Ne11 = X24;
var Se7 = z16;
export {
  react_accessible_icon_exports as AccessibleIcon,
  react_accordion_exports as Accordion,
  react_alert_dialog_exports as AlertDialog,
  react_aspect_ratio_exports as AspectRatio,
  react_avatar_exports as Avatar,
  react_checkbox_exports as Checkbox,
  react_collapsible_exports as Collapsible,
  react_context_menu_exports as ContextMenu,
  react_dialog_exports as Dialog,
  react_direction_exports as Direction,
  react_dropdown_menu_exports as DropdownMenu,
  react_form_exports as Form,
  react_hover_card_exports as HoverCard,
  react_label_exports as Label,
  react_menubar_exports as Menubar,
  react_navigation_menu_exports as NavigationMenu,
  react_popover_exports as Popover,
  react_portal_exports as Portal,
  react_progress_exports as Progress,
  react_radio_group_exports as RadioGroup,
  react_scroll_area_exports as ScrollArea,
  react_select_exports as Select,
  react_separator_exports as Separator,
  react_slider_exports as Slider,
  react_slot_exports as Slot,
  react_switch_exports as Switch,
  react_tabs_exports as Tabs,
  react_toast_exports as Toast,
  react_toggle_exports as Toggle,
  react_toggle_group_exports as ToggleGroup,
  react_toolbar_exports as Toolbar,
  react_tooltip_exports as Tooltip,
  react_visually_hidden_exports as VisuallyHidden,
  react_one_time_password_field_exports as unstable_OneTimePasswordField,
  react_password_toggle_field_exports as unstable_PasswordToggleField
};
