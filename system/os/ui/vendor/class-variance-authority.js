// http-url:https://esm.sh/clsx@2.1.1/es2022/clsx.mjs
function a(r) {
  var n, f, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var o = r.length;
    for (n = 0; n < o; n++) r[n] && (f = a(r[n])) && (t && (t += " "), t += f);
  } else for (f in r) r[f] && (t && (t += " "), t += f);
  return t;
}
function e() {
  for (var r, n, f = 0, t = "", o = arguments.length; f < o; f++) (r = arguments[f]) && (n = a(r)) && (t && (t += " "), t += n);
  return t;
}

// http-url:https://esm.sh/class-variance-authority@0.7.1/X-ZXJlYWN0LHJlYWN0LWRvbSxyZWFjdC1kb20vY2xpZW50LHJlYWN0L2pzeC1kZXYtcnVudGltZSxyZWFjdC9qc3gtcnVudGltZQ/es2022/class-variance-authority.mjs
var m = (e2) => typeof e2 == "boolean" ? `${e2}` : e2 === 0 ? "0" : e2;
var y = e;
var b = (e2, l) => (n) => {
  var s;
  if (l?.variants == null) return y(e2, n?.class, n?.className);
  let { variants: r, defaultVariants: d } = l, V = Object.keys(r).map((t) => {
    let a2 = n?.[t], u = d?.[t];
    if (a2 === null) return null;
    let i2 = m(a2) || m(u);
    return r[t][i2];
  }), v = n && Object.entries(n).reduce((t, a2) => {
    let [u, i2] = a2;
    return i2 === void 0 || (t[u] = i2), t;
  }, {}), N = l == null || (s = l.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((t, a2) => {
    let { class: u, className: i2, ...f } = a2;
    return Object.entries(f).every((C) => {
      let [c, o] = C;
      return Array.isArray(o) ? o.includes({ ...d, ...v }[c]) : { ...d, ...v }[c] === o;
    }) ? [...t, u, i2] : t;
  }, []);
  return y(e2, V, N, n?.class, n?.className);
};
export {
  b as cva,
  y as cx
};
