// http-url:https://esm.sh/clsx@2.1.1/X-ZXJlYWN0LHJlYWN0LWRvbSxyZWFjdC1kb20vY2xpZW50LHJlYWN0L2pzeC1kZXYtcnVudGltZSxyZWFjdC9qc3gtcnVudGltZQ/es2022/clsx.mjs
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
export {
  e as clsx
};
