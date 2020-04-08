// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

// @ts-nocheck
/* eslint-disable */
let System, __instantiateAsync, __instantiate;

(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };

  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }

  __instantiateAsync = async (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExpA(m);
  };

  __instantiate = (m) => {
    System = __instantiateAsync = __instantiate = undefined;
    rF(m);
    return gExp(m);
  };
})();

System.register("https://unpkg.com/preact@10.3.4/dist/preact.module", [], function (exports_1, context_1) {
    "use strict";
    var n, l, u, i, t, o, r, f, e, c, s;
    var __moduleName = context_1 && context_1.id;
    function a(n, l) { for (var u in l)
        n[u] = l[u]; return n; }
    function v(n) { var l = n.parentNode; l && l.removeChild(n); }
    function h(n, l, u) { var i, t = arguments, o = {}; for (i in l)
        "key" !== i && "ref" !== i && (o[i] = l[i]); if (arguments.length > 3)
        for (u = [u], i = 3; i < arguments.length; i++)
            u.push(t[i]); if (null != u && (o.children = u), "function" == typeof n && null != n.defaultProps)
        for (i in n.defaultProps)
            void 0 === o[i] && (o[i] = n.defaultProps[i]); return p(n, o, l && l.key, l && l.ref); }
    exports_1("createElement", h);
    exports_1("h", h);
    function p(l, u, i, t) { var o = { type: l, props: u, key: i, ref: t, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0 }; return n.vnode && n.vnode(o), o; }
    function y() { return {}; }
    exports_1("createRef", y);
    function d(n) { return n.children; }
    exports_1("Fragment", d);
    function m(n, l) { this.props = n, this.context = l; }
    exports_1("Component", m);
    function w(n, l) { if (null == l)
        return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null; for (var u; l < n.__k.length; l++)
        if (null != (u = n.__k[l]) && null != u.__e)
            return u.__e; return "function" == typeof n.type ? w(n) : null; }
    function g(n) { var l, u; if (null != (n = n.__) && null != n.__c) {
        for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
            if (null != (u = n.__k[l]) && null != u.__e) {
                n.__e = n.__c.base = u.__e;
                break;
            }
        return g(n);
    } }
    function k(l) { (!l.__d && (l.__d = !0) && u.push(l) && !i++ || o !== n.debounceRendering) && ((o = n.debounceRendering) || t)(_); }
    function _() { for (var n; i = u.length;)
        n = u.sort(function (n, l) { return n.__v.__b - l.__v.__b; }), u = [], n.some(function (n) { var l, u, i, t, o, r; n.__d && (o = (t = (l = n).__v).__e, (r = l.__P) && (u = [], i = A(r, t, a({}, t), l.__n, void 0 !== r.ownerSVGElement, null, u, null == o ? w(t) : o), T(u, t), i != o && g(t))); }); }
    function b(n, l, u, i, t, o, r, f, s) { var a, h, p, y, d, m, g, k = u && u.__k || c, _ = k.length; if (f == e && (f = null != o ? o[0] : _ ? w(u, 0) : null), a = 0, l.__k = x(l.__k, function (u) { if (null != u) {
        if (u.__ = l, u.__b = l.__b + 1, null === (p = k[a]) || p && u.key == p.key && u.type === p.type)
            k[a] = void 0;
        else
            for (h = 0; h < _; h++) {
                if ((p = k[h]) && u.key == p.key && u.type === p.type) {
                    k[h] = void 0;
                    break;
                }
                p = null;
            }
        if (y = A(n, u, p = p || e, i, t, o, r, f, s), (h = u.ref) && p.ref != h && (g || (g = []), p.ref && g.push(p.ref, null, u), g.push(h, u.__c || y, u)), null != y) {
            var c;
            if (null == m && (m = y), void 0 !== u.__d)
                c = u.__d, u.__d = void 0;
            else if (o == p || y != f || null == y.parentNode) {
                n: if (null == f || f.parentNode !== n)
                    n.appendChild(y), c = null;
                else {
                    for (d = f, h = 0; (d = d.nextSibling) && h < _; h += 2)
                        if (d == y)
                            break n;
                    n.insertBefore(y, f), c = f;
                }
                "option" == l.type && (n.value = "");
            }
            f = void 0 !== c ? c : y.nextSibling, "function" == typeof l.type && (l.__d = f);
        }
        else
            f && p.__e == f && f.parentNode != n && (f = w(p));
    } return a++, u; }), l.__e = m, null != o && "function" != typeof l.type)
        for (a = o.length; a--;)
            null != o[a] && v(o[a]); for (a = _; a--;)
        null != k[a] && D(k[a], k[a]); if (g)
        for (a = 0; a < g.length; a++)
            j(g[a], g[++a], g[++a]); }
    function x(n, l, u) { if (null == u && (u = []), null == n || "boolean" == typeof n)
        l && u.push(l(null));
    else if (Array.isArray(n))
        for (var i = 0; i < n.length; i++)
            x(n[i], l, u);
    else
        u.push(l ? l("string" == typeof n || "number" == typeof n ? p(null, n, null, null) : null != n.__e || null != n.__c ? p(n.type, n.props, n.key, null) : n) : n); return u; }
    exports_1("toChildArray", x);
    function P(n, l, u, i, t) { var o; for (o in u)
        o in l || N(n, o, null, u[o], i); for (o in l)
        t && "function" != typeof l[o] || "value" === o || "checked" === o || u[o] === l[o] || N(n, o, l[o], u[o], i); }
    function C(n, l, u) { "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === s.test(l) ? u + "px" : null == u ? "" : u; }
    function N(n, l, u, i, t) { var o, r, f, e, c; if (t ? "className" === l && (l = "class") : "class" === l && (l = "className"), "key" === l || "children" === l)
        ;
    else if ("style" === l)
        if (o = n.style, "string" == typeof u)
            o.cssText = u;
        else {
            if ("string" == typeof i && (o.cssText = "", i = null), i)
                for (r in i)
                    u && r in u || C(o, r, "");
            if (u)
                for (f in u)
                    i && u[f] === i[f] || C(o, f, u[f]);
        }
    else
        "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (i || n.addEventListener(l, z, e), (n.l || (n.l = {}))[l] = u) : n.removeEventListener(l, z, e)) : "list" !== l && "tagName" !== l && "form" !== l && "type" !== l && "size" !== l && !t && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u && !/^ar/.test(l) ? n.removeAttribute(l) : n.setAttribute(l, u)); }
    function z(l) { this.l[l.type](n.event ? n.event(l) : l); }
    function A(l, u, i, t, o, r, f, e, c) { var s, v, h, p, y, w, g, k, _, x, P = u.type; if (void 0 !== u.constructor)
        return null; (s = n.__b) && s(u); try {
        n: if ("function" == typeof P) {
            if (k = u.props, _ = (s = P.contextType) && t[s.__c], x = s ? _ ? _.props.value : s.__ : t, i.__c ? g = (v = u.__c = i.__c).__ = v.__E : ("prototype" in P && P.prototype.render ? u.__c = v = new P(k, x) : (u.__c = v = new m(k, x), v.constructor = P, v.render = E), _ && _.sub(v), v.props = k, v.state || (v.state = {}), v.context = x, v.__n = t, h = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != P.getDerivedStateFromProps && (v.__s == v.state && (v.__s = a({}, v.__s)), a(v.__s, P.getDerivedStateFromProps(k, v.__s))), p = v.props, y = v.state, h)
                null == P.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && v.__h.push(v.componentDidMount);
            else {
                if (null == P.getDerivedStateFromProps && k !== p && null != v.componentWillReceiveProps && v.componentWillReceiveProps(k, x), !v.__e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(k, v.__s, x)) {
                    for (v.props = k, v.state = v.__s, v.__d = !1, v.__v = u, u.__e = i.__e, u.__k = i.__k, v.__h.length && f.push(v), s = 0; s < u.__k.length; s++)
                        u.__k[s] && (u.__k[s].__ = u);
                    break n;
                }
                null != v.componentWillUpdate && v.componentWillUpdate(k, v.__s, x), null != v.componentDidUpdate && v.__h.push(function () { v.componentDidUpdate(p, y, w); });
            }
            v.context = x, v.props = k, v.state = v.__s, (s = n.__r) && s(u), v.__d = !1, v.__v = u, v.__P = l, s = v.render(v.props, v.state, v.context), u.__k = null != s && s.type == d && null == s.key ? s.props.children : Array.isArray(s) ? s : [s], null != v.getChildContext && (t = a(a({}, t), v.getChildContext())), h || null == v.getSnapshotBeforeUpdate || (w = v.getSnapshotBeforeUpdate(p, y)), b(l, u, i, t, o, r, f, e, c), v.base = u.__e, v.__h.length && f.push(v), g && (v.__E = v.__ = null), v.__e = !1;
        }
        else
            u.__e = $(i.__e, u, i, t, o, r, f, c);
        (s = n.diffed) && s(u);
    }
    catch (l) {
        n.__e(l, u, i);
    } return u.__e; }
    function T(l, u) { n.__c && n.__c(u, l), l.some(function (u) { try {
        l = u.__h, u.__h = [], l.some(function (n) { n.call(u); });
    }
    catch (l) {
        n.__e(l, u.__v);
    } }); }
    function $(n, l, u, i, t, o, r, f) { var s, a, v, h, p, y = u.props, d = l.props; if (t = "svg" === l.type || t, null != o)
        for (s = 0; s < o.length; s++)
            if (null != (a = o[s]) && ((null === l.type ? 3 === a.nodeType : a.localName === l.type) || n == a)) {
                n = a, o[s] = null;
                break;
            } if (null == n) {
        if (null === l.type)
            return document.createTextNode(d);
        n = t ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type, d.is && { is: d.is }), o = null;
    } if (null === l.type)
        y !== d && n.data != d && (n.data = d);
    else if (l !== u) {
        if (null != o && (o = c.slice.call(n.childNodes)), v = (y = u.props || e).dangerouslySetInnerHTML, h = d.dangerouslySetInnerHTML, !f) {
            if (y === e)
                for (y = {}, p = 0; p < n.attributes.length; p++)
                    y[n.attributes[p].name] = n.attributes[p].value;
            (h || v) && (h && v && h.__html == v.__html || (n.innerHTML = h && h.__html || ""));
        }
        P(n, d, y, t, f), l.__k = l.props.children, h || b(n, l, u, i, "foreignObject" !== l.type && t, o, r, e, f), f || ("value" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked));
    } return n; }
    function j(l, u, i) { try {
        "function" == typeof l ? l(u) : l.current = u;
    }
    catch (l) {
        n.__e(l, i);
    } }
    function D(l, u, i) { var t, o, r; if (n.unmount && n.unmount(l), (t = l.ref) && (t.current && t.current !== l.__e || j(t, null, u)), i || "function" == typeof l.type || (i = null != (o = l.__e)), l.__e = l.__d = void 0, null != (t = l.__c)) {
        if (t.componentWillUnmount)
            try {
                t.componentWillUnmount();
            }
            catch (l) {
                n.__e(l, u);
            }
        t.base = t.__P = null;
    } if (t = l.__k)
        for (r = 0; r < t.length; r++)
            t[r] && D(t[r], u, i); null != o && v(o); }
    exports_1("_unmount", D);
    function E(n, l, u) { return this.constructor(n, u); }
    function H(l, u, i) { var t, o, f; n.__ && n.__(l, u), o = (t = i === r) ? null : i && i.__k || u.__k, l = h(d, null, [l]), f = [], A(u, (t ? u : i || u).__k = l, o || e, e, void 0 !== u.ownerSVGElement, i && !t ? [i] : o ? null : c.slice.call(u.childNodes), f, i || e, t), T(f, l); }
    exports_1("render", H);
    function I(n, l) { H(n, l, r); }
    exports_1("hydrate", I);
    function L(n, l) { return l = a(a({}, n.props), l), arguments.length > 2 && (l.children = c.slice.call(arguments, 2)), p(n.type, l, l.key || n.key, l.ref || n.ref); }
    exports_1("cloneElement", L);
    function M(n) { var l = {}, u = { __c: "__cC" + f++, __: n, Consumer: function (n, l) { return n.children(l); }, Provider: function (n) { var i, t = this; return this.getChildContext || (i = [], this.getChildContext = function () { return l[u.__c] = t, l; }, this.shouldComponentUpdate = function (l) { n.value !== l.value && i.some(function (n) { n.context = l.value, k(n); }); }, this.sub = function (n) { i.push(n); var l = n.componentWillUnmount; n.componentWillUnmount = function () { i.splice(i.indexOf(n), 1), l && l.call(n); }; }), n.children; } }; return u.Consumer.contextType = u, u; }
    exports_1("createContext", M);
    return {
        setters: [],
        execute: function () {
            e = {}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
            exports_1("options", n = { __e: function (n, l) { for (var u, i; l = l.__;)
                    if ((u = l.__c) && !u.__)
                        try {
                            if (u.constructor && null != u.constructor.getDerivedStateFromError && (i = !0, u.setState(u.constructor.getDerivedStateFromError(n))), null != u.componentDidCatch && (i = !0, u.componentDidCatch(n)), i)
                                return k(u.__E = u);
                        }
                        catch (l) {
                            n = l;
                        } throw n; } }), exports_1("isValidElement", l = function (n) { return null != n && void 0 === n.constructor; }), m.prototype.setState = function (n, l) { var u; u = this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n && (n = n(u, this.props)), n && a(u, n), null != n && this.__v && (l && this.__h.push(l), k(this)); }, m.prototype.forceUpdate = function (n) { this.__v && (this.__e = !0, n && this.__h.push(n), k(this)); }, m.prototype.render = d, u = [], i = 0, t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, r = e, f = 0;
        }
    };
});
System.register("https://unpkg.com/htm@3.0.3/dist/htm.module", [], function (exports_2, context_2) {
    "use strict";
    var n, t;
    var __moduleName = context_2 && context_2.id;
    function default_1(s) { var r = t.get(this); return r || (r = new Map, t.set(this, r)), (r = n(this, r.get(s) || (r.set(s, r = function (n) { for (var t, s, r = 1, e = "", u = "", h = [0], p = function (n) { 1 === r && (n || (e = e.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h.push(0, n, e) : 3 === r && (n || e) ? (h.push(3, n, e), r = 2) : 2 === r && "..." === e && n ? h.push(4, n, 0) : 2 === r && e && !n ? h.push(5, 0, !0, e) : r >= 5 && ((e || !n && 5 === r) && (h.push(r, 0, e, s), r = 6), n && (h.push(r, n, 0, s), r = 6)), e = ""; }, a = 0; a < n.length; a++) {
        a && (1 === r && p(), p(a));
        for (var l = 0; l < n[a].length; l++)
            t = n[a][l], 1 === r ? "<" === t ? (p(), h = [h], r = 3) : e += t : 4 === r ? "--" === e && ">" === t ? (r = 1, e = "") : e = t + e[0] : u ? t === u ? u = "" : e += t : '"' === t || "'" === t ? u = t : ">" === t ? (p(), r = 1) : r && ("=" === t ? (r = 5, s = e, e = "") : "/" === t && (r < 5 || ">" === n[a][l + 1]) ? (p(), 3 === r && (h = h[0]), r = h, (h = h[0]).push(2, 0, r), r = 0) : " " === t || "\t" === t || "\n" === t || "\r" === t ? (p(), r = 2) : e += t), 3 === r && "!--" === e && (r = 4, h = h[0]);
    } return p(), h; }(s)), r), arguments, [])).length > 1 ? r : r[0]; }
    exports_2("default", default_1);
    return {
        setters: [],
        execute: function () {
            n = function (t, s, r, e) { var u; s[0] = 0; for (var h = 1; h < s.length; h++) {
                var p = s[h++], a = s[h] ? (s[0] |= p ? 1 : 2, r[s[h++]]) : s[++h];
                3 === p ? e[0] = a : 4 === p ? e[1] = Object.assign(e[1] || {}, a) : 5 === p ? (e[1] = e[1] || {})[s[++h]] = a : 6 === p ? e[1][s[++h]] += a + "" : p ? (u = t.apply(a, n(t, a, r, ["", null])), e.push(u), a[0] ? s[0] |= 2 : (s[h - 2] = 0, s[h] = u)) : e.push(a);
            } return e; }, t = new Map;
        }
    };
});
System.register("https://unpkg.com/htm@3.0.3/preact/index.module", ["https://unpkg.com/preact@10.3.4/dist/preact.module", "https://unpkg.com/htm@3.0.3/dist/htm.module"], function (exports_3, context_3) {
    "use strict";
    var preact_1, htm_1, m;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (preact_1_1) {
                preact_1 = preact_1_1;
                exports_3({
                    "h": preact_1_1["h"],
                    "render": preact_1_1["render"],
                    "Component": preact_1_1["Component"]
                });
            },
            function (htm_1_1) {
                htm_1 = htm_1_1;
            }
        ],
        execute: function () {
            m = htm_1.default.bind(preact_1.h);
            exports_3("html", m);
        }
    };
});
System.register("https://unpkg.com/preact@10.3.4/hooks/dist/hooks.module", ["https://unpkg.com/preact@10.3.4/dist/preact.module"], function (exports_4, context_4) {
    "use strict";
    var preact_2, t, r, u, i, o, f, c, e;
    var __moduleName = context_4 && context_4.id;
    function a(t) { preact_2.options.__h && preact_2.options.__h(r); var u = r.__H || (r.__H = { __: [], __h: [] }); return t >= u.__.length && u.__.push({}), u.__[t]; }
    function v(n) { return m(x, n); }
    exports_4("useState", v);
    function m(n, u, i) { var o = a(t++); return o.__c || (o.__c = r, o.__ = [i ? i(u) : x(void 0, u), function (t) { var r = n(o.__[0], t); o.__[0] !== r && (o.__[0] = r, o.__c.setState({})); }]), o.__; }
    exports_4("useReducer", m);
    function p(n, u) { var i = a(t++); q(i.__H, u) && (i.__ = n, i.__H = u, r.__H.__h.push(i)); }
    exports_4("useEffect", p);
    function l(n, u) { var i = a(t++); q(i.__H, u) && (i.__ = n, i.__H = u, r.__h.push(i)); }
    exports_4("useLayoutEffect", l);
    function y(n) { return s(function () { return { current: n }; }, []); }
    exports_4("useRef", y);
    function d(n, t, r) { l(function () { "function" == typeof n ? n(t()) : n && (n.current = t()); }, null == r ? r : r.concat(n)); }
    exports_4("useImperativeHandle", d);
    function s(n, r) { var u = a(t++); return q(u.__H, r) ? (u.__H = r, u.__h = n, u.__ = n()) : u.__; }
    exports_4("useMemo", s);
    function h(n, t) { return s(function () { return n; }, t); }
    exports_4("useCallback", h);
    function T(n) { var u = r.context[n.__c]; if (!u)
        return n.__; var i = a(t++); return null == i.__ && (i.__ = !0, u.sub(r)), u.props.value; }
    exports_4("useContext", T);
    function w(t, r) { preact_2.options.useDebugValue && preact_2.options.useDebugValue(r ? r(t) : t); }
    exports_4("useDebugValue", w);
    function A(n) { var u = a(t++), i = v(); return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n) { u.__ && u.__(n), i[1](n); }), [i[0], function () { i[1](void 0); }]; }
    exports_4("useErrorBoundary", A);
    function F() { i.some(function (t) { if (t.__P)
        try {
            t.__H.__h.forEach(_), t.__H.__h.forEach(g), t.__H.__h = [];
        }
        catch (r) {
            return preact_2.options.__e(r, t.__v), !0;
        } }), i = []; }
    function _(n) { n.t && n.t(); }
    function g(n) { var t = n.__(); "function" == typeof t && (n.t = t); }
    function q(n, t) { return !n || t.some(function (t, r) { return t !== n[r]; }); }
    function x(n, t) { return "function" == typeof t ? t(n) : t; }
    return {
        setters: [
            function (preact_2_1) {
                preact_2 = preact_2_1;
            }
        ],
        execute: function () {
            i = [], o = preact_2.options.__r, f = preact_2.options.diffed, c = preact_2.options.__c, e = preact_2.options.unmount;
            preact_2.options.__r = function (n) { o && o(n), t = 0, (r = n.__c).__H && (r.__H.__h.forEach(_), r.__H.__h.forEach(g), r.__H.__h = []); }, preact_2.options.diffed = function (t) { f && f(t); var r = t.__c; if (r) {
                var o = r.__H;
                o && o.__h.length && (1 !== i.push(r) && u === preact_2.options.requestAnimationFrame || ((u = preact_2.options.requestAnimationFrame) || function (n) { var t, r = function () { clearTimeout(u), cancelAnimationFrame(t), setTimeout(n); }, u = setTimeout(r, 100); "undefined" != typeof window && (t = requestAnimationFrame(r)); })(F));
            } }, preact_2.options.__c = function (t, r) { r.some(function (t) { try {
                t.__h.forEach(_), t.__h = t.__h.filter(function (n) { return !n.__ || g(n); });
            }
            catch (u) {
                r.some(function (n) { n.__h && (n.__h = []); }), r = [], preact_2.options.__e(u, t.__v);
            } }), c && c(t, r); }, preact_2.options.unmount = function (t) { e && e(t); var r = t.__c; if (r) {
                var u = r.__H;
                if (u)
                    try {
                        u.__.forEach(function (n) { return n.t && n.t(); });
                    }
                    catch (t) {
                        preact_2.options.__e(t, r.__v);
                    }
            } };
        }
    };
});
System.register("file:///Users/harwood/matt/deno-preact/with-hydration", ["https://unpkg.com/htm@3.0.3/preact/index.module"], function (exports_5, context_5) {
    "use strict";
    var preact_3, id, withHydration;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (preact_3_1) {
                preact_3 = preact_3_1;
            }
        ],
        execute: function () {
            //@ts-ignore
            // const isServer = window && window.matchMedia;
            id = 0;
            exports_5("withHydration", withHydration = (Component) => (props) => {
                id += 1;
                const scriptSrc = `
    window.__STATE__.components[${id}]={name:${JSON.stringify(Component.name)},props:${JSON.stringify(props)}}
  `;
                return preact_3.html `
    ${preact_3.html `<script
      dangerouslySetInnerHTML=${{ __html: scriptSrc }}
      data-cmp-id=${id}
    ></script>`}
    <${Component} ...${props} />
  `;
            });
        }
    };
});
System.register("file:///Users/harwood/matt/deno-preact/app", ["https://unpkg.com/htm@3.0.3/preact/index.module", "https://unpkg.com/preact@10.3.4/hooks/dist/hooks.module", "file:///Users/harwood/matt/deno-preact/with-hydration"], function (exports_6, context_6) {
    "use strict";
    var preact_4, hooks_1, with_hydration_ts_1, BaseApp, App;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (preact_4_1) {
                preact_4 = preact_4_1;
            },
            function (hooks_1_1) {
                hooks_1 = hooks_1_1;
            },
            function (with_hydration_ts_1_1) {
                with_hydration_ts_1 = with_hydration_ts_1_1;
            }
        ],
        execute: function () {
            exports_6("BaseApp", BaseApp = (props) => {
                const [likes, setLikes] = hooks_1.useState(0);
                const handleClick = (e) => {
                    e.preventDefault();
                    setLikes(likes + 1);
                };
                return preact_4.html `
    <div>HOW MANY LIKES ${likes}</div>
    <button onClick=${handleClick}>Increment</button>
  `;
            });
            exports_6("App", App = with_hydration_ts_1.withHydration(BaseApp));
        }
    };
});

const __exp = __instantiate("file:///Users/harwood/matt/deno-preact/app");
export const BaseApp = __exp["BaseApp"];
export const App = __exp["App"];
