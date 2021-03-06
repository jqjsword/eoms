"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

function t(t, e, s) {
    return t(s = {
            path: e,
            exports: {},
            require: function(t, e) {
                return function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == e && s.path)
            }
        }, s.exports),
        s.exports
}
t((function(t, e) {
        t.exports = function() {
            var t = "millisecond",
                e = "second",
                s = "minute",
                i = "hour",
                n = "day",
                r = "week",
                o = "month",
                a = "quarter",
                l = "year",
                u = "date",
                h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
                c = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                d = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                },
                f = function(t, e, s) {
                    var i = String(t);
                    return !i || i.length >= e ? t : "" + Array(e + 1 - i.length).join(s) + t
                },
                p = {
                    s: f,
                    z: function(t) {
                        var e = -t.utcOffset(),
                            s = Math.abs(e),
                            i = Math.floor(s / 60),
                            n = s % 60;
                        return (e <= 0 ? "+" : "-") + f(i, 2, "0") + ":" + f(n, 2, "0")
                    },
                    m: function t(e, s) {
                        if (e.date() < s.date())
                            return -t(s, e);
                        var i = 12 * (s.year() - e.year()) + (s.month() - e.month()),
                            n = e.clone().add(i, o),
                            r = s - n < 0,
                            a = e.clone().add(i + (r ? -1 : 1), o);
                        return +(-(i + (s - n) / (r ? n - a : a - n)) || 0)
                    },
                    a: function(t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                    },
                    p: function(h) {
                        return {
                            M: o,
                            y: l,
                            w: r,
                            d: n,
                            D: u,
                            h: i,
                            m: s,
                            s: e,
                            ms: t,
                            Q: a
                        }[h] || String(h || "").toLowerCase().replace(/s$/, "")
                    },
                    u: function(t) {
                        return void 0 === t
                    }
                },
                m = "en",
                g = {};
            g[m] = d;
            var v = function(t) {
                    return t instanceof x
                },
                $ = function(t, e, s) {
                    var i;
                    if (!t)
                        return m;
                    if ("string" == typeof t)
                        g[t] && (i = t),
                        e && (g[t] = e,
                            i = t);
                    else {
                        var n = t.name;
                        g[n] = t,
                            i = n
                    }
                    return !s && i && (m = i),
                        i || !s && m
                },
                _ = function(t, e) {
                    if (v(t))
                        return t.clone();
                    var s = "object" == typeof e ? e : {};
                    return s.date = t,
                        s.args = arguments,
                        new x(s)
                },
                y = p;
            y.l = $,
                y.i = v,
                y.w = function(t, e) {
                    return _(t, {
                        locale: e.$L,
                        utc: e.$u,
                        x: e.$x,
                        $offset: e.$offset
                    })
                };
            var x = function() {
                    function d(t) {
                        this.$L = $(t.locale, null, !0),
                            this.parse(t)
                    }
                    var f = d.prototype;
                    return f.parse = function(t) {
                            this.$d = function(t) {
                                    var e = t.date,
                                        s = t.utc;
                                    if (null === e)
                                        return new Date(NaN);
                                    if (y.u(e))
                                        return new Date;
                                    if (e instanceof Date)
                                        return new Date(e);
                                    if ("string" == typeof e && !/Z$/i.test(e)) {
                                        var i = e.match(h);
                                        if (i) {
                                            var n = i[2] - 1 || 0,
                                                r = (i[7] || "0").substring(0, 3);
                                            return s ? new Date(Date.UTC(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)) : new Date(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, r)
                                        }
                                    }
                                    return new Date(e)
                                }(t),
                                this.$x = t.x || {},
                                this.init()
                        },
                        f.init = function() {
                            var t = this.$d;
                            this.$y = t.getFullYear(),
                                this.$M = t.getMonth(),
                                this.$D = t.getDate(),
                                this.$W = t.getDay(),
                                this.$H = t.getHours(),
                                this.$m = t.getMinutes(),
                                this.$s = t.getSeconds(),
                                this.$ms = t.getMilliseconds()
                        },
                        f.$utils = function() {
                            return y
                        },
                        f.isValid = function() {
                            return !("Invalid Date" === this.$d.toString())
                        },
                        f.isSame = function(t, e) {
                            var s = _(t);
                            return this.startOf(e) <= s && s <= this.endOf(e)
                        },
                        f.isAfter = function(t, e) {
                            return _(t) < this.startOf(e)
                        },
                        f.isBefore = function(t, e) {
                            return this.endOf(e) < _(t)
                        },
                        f.$g = function(t, e, s) {
                            return y.u(t) ? this[e] : this.set(s, t)
                        },
                        f.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        },
                        f.valueOf = function() {
                            return this.$d.getTime()
                        },
                        f.startOf = function(t, a) {
                            var h = this,
                                c = !!y.u(a) || a,
                                d = y.p(t),
                                f = function(t, e) {
                                    var s = y.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
                                    return c ? s : s.endOf(n)
                                },
                                p = function(t, e) {
                                    return y.w(h.toDate()[t].apply(h.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h)
                                },
                                m = this.$W,
                                g = this.$M,
                                v = this.$D,
                                $ = "set" + (this.$u ? "UTC" : "");
                            switch (d) {
                                case l:
                                    return c ? f(1, 0) : f(31, 11);
                                case o:
                                    return c ? f(1, g) : f(0, g + 1);
                                case r:
                                    var _ = this.$locale().weekStart || 0,
                                        x = (m < _ ? m + 7 : m) - _;
                                    return f(c ? v - x : v + (6 - x), g);
                                case n:
                                case u:
                                    return p($ + "Hours", 0);
                                case i:
                                    return p($ + "Minutes", 1);
                                case s:
                                    return p($ + "Seconds", 2);
                                case e:
                                    return p($ + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        },
                        f.endOf = function(t) {
                            return this.startOf(t, !1)
                        },
                        f.$set = function(r, a) {
                            var h, c = y.p(r),
                                d = "set" + (this.$u ? "UTC" : ""),
                                f = (h = {},
                                    h[n] = d + "Date",
                                    h[u] = d + "Date",
                                    h[o] = d + "Month",
                                    h[l] = d + "FullYear",
                                    h[i] = d + "Hours",
                                    h[s] = d + "Minutes",
                                    h[e] = d + "Seconds",
                                    h[t] = d + "Milliseconds",
                                    h)[c],
                                p = c === n ? this.$D + (a - this.$W) : a;
                            if (c === o || c === l) {
                                var m = this.clone().set(u, 1);
                                m.$d[f](p),
                                    m.init(),
                                    this.$d = m.set(u, Math.min(this.$D, m.daysInMonth())).$d
                            } else
                                f && this.$d[f](p);
                            return this.init(),
                                this
                        },
                        f.set = function(t, e) {
                            return this.clone().$set(t, e)
                        },
                        f.get = function(t) {
                            return this[y.p(t)]()
                        },
                        f.add = function(t, a) {
                            var u, h = this;
                            t = Number(t);
                            var c = y.p(a),
                                d = function(e) {
                                    var s = _(h);
                                    return y.w(s.date(s.date() + Math.round(e * t)), h)
                                };
                            if (c === o)
                                return this.set(o, this.$M + t);
                            if (c === l)
                                return this.set(l, this.$y + t);
                            if (c === n)
                                return d(1);
                            if (c === r)
                                return d(7);
                            var f = (u = {},
                                    u[s] = 6e4,
                                    u[i] = 36e5,
                                    u[e] = 1e3,
                                    u)[c] || 1,
                                p = this.$d.getTime() + t * f;
                            return y.w(p, this)
                        },
                        f.subtract = function(t, e) {
                            return this.add(-1 * t, e)
                        },
                        f.format = function(t) {
                            var e = this;
                            if (!this.isValid())
                                return "Invalid Date";
                            var s = t || "YYYY-MM-DDTHH:mm:ssZ",
                                i = y.z(this),
                                n = this.$locale(),
                                r = this.$H,
                                o = this.$m,
                                a = this.$M,
                                l = n.weekdays,
                                u = n.months,
                                h = function(t, i, n, r) {
                                    return t && (t[i] || t(e, s)) || n[i].substr(0, r)
                                },
                                d = function(t) {
                                    return y.s(r % 12 || 12, t, "0")
                                },
                                f = n.meridiem || function(t, e, s) {
                                    var i = t < 12 ? "AM" : "PM";
                                    return s ? i.toLowerCase() : i
                                },
                                p = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: a + 1,
                                    MM: y.s(a + 1, 2, "0"),
                                    MMM: h(n.monthsShort, a, u, 3),
                                    MMMM: h(u, a),
                                    D: this.$D,
                                    DD: y.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: h(n.weekdaysMin, this.$W, l, 2),
                                    ddd: h(n.weekdaysShort, this.$W, l, 3),
                                    dddd: l[this.$W],
                                    H: String(r),
                                    HH: y.s(r, 2, "0"),
                                    h: d(1),
                                    hh: d(2),
                                    a: f(r, o, !0),
                                    A: f(r, o, !1),
                                    m: String(o),
                                    mm: y.s(o, 2, "0"),
                                    s: String(this.$s),
                                    ss: y.s(this.$s, 2, "0"),
                                    SSS: y.s(this.$ms, 3, "0"),
                                    Z: i
                                };
                            return s.replace(c, (function(t, e) {
                                return e || p[t] || i.replace(":", "")
                            }))
                        },
                        f.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        },
                        f.diff = function(t, u, h) {
                            var c, d = y.p(u),
                                f = _(t),
                                p = 6e4 * (f.utcOffset() - this.utcOffset()),
                                m = this - f,
                                g = y.m(this, f);
                            return g = (c = {},
                                    c[l] = g / 12,
                                    c[o] = g,
                                    c[a] = g / 3,
                                    c[r] = (m - p) / 6048e5,
                                    c[n] = (m - p) / 864e5,
                                    c[i] = m / 36e5,
                                    c[s] = m / 6e4,
                                    c[e] = m / 1e3,
                                    c)[d] || m,
                                h ? g : y.a(g)
                        },
                        f.daysInMonth = function() {
                            return this.endOf(o).$D
                        },
                        f.$locale = function() {
                            return g[this.$L]
                        },
                        f.locale = function(t, e) {
                            if (!t)
                                return this.$L;
                            var s = this.clone(),
                                i = $(t, e, !0);
                            return i && (s.$L = i),
                                s
                        },
                        f.clone = function() {
                            return y.w(this.$d, this)
                        },
                        f.toDate = function() {
                            return new Date(this.valueOf())
                        },
                        f.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        },
                        f.toISOString = function() {
                            return this.$d.toISOString()
                        },
                        f.toString = function() {
                            return this.$d.toUTCString()
                        },
                        d
                }(),
                b = x.prototype;
            return _.prototype = b, [
                    ["$ms", t],
                    ["$s", e],
                    ["$m", s],
                    ["$H", i],
                    ["$W", n],
                    ["$M", o],
                    ["$y", l],
                    ["$D", u]
                ].forEach((function(t) {
                    b[t[1]] = function(e) {
                        return this.$g(e, t[0], t[1])
                    }
                })),
                _.extend = function(t, e) {
                    return t.$i || (t(e, x, _),
                            t.$i = !0),
                        _
                },
                _.locale = $,
                _.isDayjs = v,
                _.unix = function(t) {
                    return _(1e3 * t)
                },
                _.en = g[m],
                _.Ls = g,
                _.p = {},
                _
        }()
    })),
    t((function(t, e) {
        t.exports = function(t, e, s) {
            var i = e.prototype;
            s.utc = function(t) {
                    return new e({
                        date: t,
                        utc: !0,
                        args: arguments
                    })
                },
                i.utc = function(t) {
                    var e = s(this.toDate(), {
                        locale: this.$L,
                        utc: !0
                    });
                    return t ? e.add(this.utcOffset(), "minute") : e
                },
                i.local = function() {
                    return s(this.toDate(), {
                        locale: this.$L,
                        utc: !1
                    })
                };
            var n = i.parse;
            i.parse = function(t) {
                t.utc && (this.$u = !0),
                    this.$utils().u(t.$offset) || (this.$offset = t.$offset),
                    n.call(this, t)
            };
            var r = i.init;
            i.init = function() {
                if (this.$u) {
                    var t = this.$d;
                    this.$y = t.getUTCFullYear(),
                        this.$M = t.getUTCMonth(),
                        this.$D = t.getUTCDate(),
                        this.$W = t.getUTCDay(),
                        this.$H = t.getUTCHours(),
                        this.$m = t.getUTCMinutes(),
                        this.$s = t.getUTCSeconds(),
                        this.$ms = t.getUTCMilliseconds()
                } else
                    r.call(this)
            };
            var o = i.utcOffset;
            i.utcOffset = function(t, e) {
                var s = this.$utils().u;
                if (s(t))
                    return this.$u ? 0 : s(this.$offset) ? o.call(this) : this.$offset;
                var i = Math.abs(t) <= 16 ? 60 * t : t,
                    n = this;
                if (e)
                    return n.$offset = i,
                        n.$u = 0 === t,
                        n;
                if (0 !== t) {
                    var r = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                    (n = this.local().add(i + r, "minute")).$offset = i,
                        n.$x.$localOffset = r
                } else
                    n = this.utc();
                return n
            };
            var a = i.format;
            i.format = function(t) {
                    var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                    return a.call(this, e)
                },
                i.valueOf = function() {
                    var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
                    return this.$d.valueOf() - 6e4 * t
                },
                i.isUTC = function() {
                    return !!this.$u
                },
                i.toISOString = function() {
                    return this.toDate().toISOString()
                },
                i.toString = function() {
                    return this.toDate().toUTCString()
                };
            var l = i.toDate;
            i.toDate = function(t) {
                return "s" === t && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this)
            };
            var u = i.diff;
            i.diff = function(t, e, i) {
                if (t && this.$u === t.$u)
                    return u.call(this, t, e, i);
                var n = this.local(),
                    r = s(t).local();
                return u.call(n, r, e, i)
            }
        }
    }));
new class {
    constructor() {
        this.GSTCID = this.GSTCID.bind(this),
            this.isGSTCID = this.isGSTCID.bind(this),
            this.sourceID = this.sourceID.bind(this)
    }
    GSTCID(t) {
        return "gstcid-" + t
    }
    isGSTCID(t) {
        return t.startsWith("gstcid-")
    }
    sourceID(t) {
        return this.isGSTCID(t) ? t.substr(7) : t
    }
};
const e = t => null != t && "boolean" == typeof t.isDirective,
    s = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
    i = (t, e, s = null, i = null) => {
        for (; e !== s;) {
            const s = e.nextSibling;
            t.insertBefore(e, i),
                e = s
        }
    },
    n = (t, e, s = null) => {
        for (; e !== s;) {
            const s = e.nextSibling;
            t.removeChild(e),
                e = s
        }
    },
    r = {},
    o = {},
    a = `{{lit-${String(Math.random()).slice(2)}}}`,
    l = `\x3c!--${a}--\x3e`,
    u = new RegExp(`${a}|${l}`);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class h {
    constructor(t, e) {
        this.parts = [],
            this.element = e;
        const s = [],
            i = [],
            n = document.createTreeWalker(e.content, 133, null, !1);
        let r = 0,
            o = -1,
            l = 0;
        const { strings: h, values: { length: d } } = t;
        for (; l < d;) {
            const t = n.nextNode();
            if (null !== t) {
                if (o++,
                    1 === t.nodeType) {
                    if (t.hasAttributes()) {
                        const e = t.attributes,
                            { length: s } = e;
                        let i = 0;
                        for (let t = 0; t < s; t++)
                            c(e[t].name, "$lit$") && i++;
                        for (; i-- > 0;) {
                            const e = h[l],
                                s = m.exec(e)[2],
                                i = s.toLowerCase() + "$lit$",
                                n = t.getAttribute(i);
                            t.removeAttribute(i);
                            const r = n.split(u);
                            this.parts.push({
                                    type: "attribute",
                                    index: o,
                                    name: s,
                                    strings: r
                                }),
                                l += r.length - 1
                        }
                    }
                    "TEMPLATE" === t.tagName && (i.push(t),
                        n.currentNode = t.content)
                } else if (3 === t.nodeType) {
                    const e = t.data;
                    if (e.indexOf(a) >= 0) {
                        const i = t.parentNode,
                            n = e.split(u),
                            r = n.length - 1;
                        for (let e = 0; e < r; e++) {
                            let s, r = n[e];
                            if ("" === r)
                                s = p();
                            else {
                                const t = m.exec(r);
                                null !== t && c(t[2], "$lit$") && (r = r.slice(0, t.index) + t[1] + t[2].slice(0, -"$lit$".length) + t[3]),
                                    s = document.createTextNode(r)
                            }
                            i.insertBefore(s, t),
                                this.parts.push({
                                    type: "node",
                                    index: ++o
                                })
                        }
                        "" === n[r] ? (i.insertBefore(p(), t),
                                s.push(t)) : t.data = n[r],
                            l += r
                    }
                } else if (8 === t.nodeType)
                    if (t.data === a) {
                        const e = t.parentNode;
                        null !== t.previousSibling && o !== r || (o++,
                                e.insertBefore(p(), t)),
                            r = o,
                            this.parts.push({
                                type: "node",
                                index: o
                            }),
                            null === t.nextSibling ? t.data = "" : (s.push(t),
                                o--),
                            l++
                    } else {
                        let e = -1;
                        for (; - 1 !== (e = t.data.indexOf(a, e + 1));)
                            this.parts.push({
                                type: "node",
                                index: -1
                            }),
                            l++
                    }
            } else
                n.currentNode = i.pop()
        }
        for (const t of s)
            t.parentNode.removeChild(t)
    }
}
const c = (t, e) => {
        const s = t.length - e.length;
        return s >= 0 && t.slice(s) === e
    },
    d = t => -1 !== t.index,
    f = document.createComment(""),
    p = () => f.cloneNode(),
    m = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g {
    constructor(t, e, s) {
        this.__parts = [],
            this.template = t,
            this.processor = e,
            this.options = s
    }
    update(t) {
        let e = 0;
        for (const s of this.__parts)
            void 0 !== s && s.setValue(t[e]),
            e++;
        for (const t of this.__parts)
            void 0 !== t && t.commit()
    }
    _clone() {
        const t = s ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
            e = [],
            i = this.template.parts,
            n = document.createTreeWalker(t, 133, null, !1);
        let r, o = 0,
            a = 0,
            l = n.nextNode();
        for (; o < i.length;)
            if (r = i[o],
                d(r)) {
                for (; a < r.index;)
                    a++,
                    "TEMPLATE" === l.nodeName && (e.push(l),
                        n.currentNode = l.content),
                    null === (l = n.nextNode()) && (n.currentNode = e.pop(),
                        l = n.nextNode());
                if ("node" === r.type) {
                    const t = this.processor.handleTextExpression(this.options);
                    t.insertAfterNode(l.previousSibling),
                        this.__parts.push(t)
                } else
                    this.__parts.push(...this.processor.handleAttributeExpressions(l, r.name, r.strings, this.options));
                o++
            } else
                this.__parts.push(void 0),
                o++;
        return s && (document.adoptNode(t),
                customElements.upgrade(t)),
            t
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
    }
}
const v = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
        createHTML: t => t
    }),
    $ = ` ${a} `,
    _ = document.createElement("template");
class y {
    constructor(t, e, s, i) {
        this.strings = t,
            this.values = e,
            this.type = s,
            this.processor = i
    }
    getHTML() {
        const t = this.strings.length - 1;
        let e = "",
            s = !1;
        for (let i = 0; i < t; i++) {
            const t = this.strings[i],
                n = t.lastIndexOf("\x3c!--");
            s = (n > -1 || s) && -1 === t.indexOf("--\x3e", n + 1);
            const r = m.exec(t);
            e += null === r ? t + (s ? $ : l) : t.substr(0, r.index) + r[1] + r[2] + "$lit$" + r[3] + a
        }
        return e += this.strings[t],
            e
    }
    getTemplateElement() {
        const t = _.cloneNode();
        let e = this.getHTML();
        return void 0 !== v && (e = v.createHTML(e)),
            t.innerHTML = e,
            t
    }
}
class x extends y {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`
    }
    getTemplateElement() {
        const t = super.getTemplateElement(),
            e = t.content,
            s = e.firstChild;
        return e.removeChild(s),
            i(e, s.firstChild),
            t
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
    }
}
const b = t => null === t || !("object" == typeof t || "function" == typeof t),
    w = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]),
    T = document.createTextNode("");
class D {
    constructor(t, e, s) {
        this.dirty = !0,
            this.element = t,
            this.name = e,
            this.strings = s,
            this.parts = [];
        for (let t = 0; t < s.length - 1; t++)
            this.parts[t] = this._createPart()
    }
    _createPart() {
        return new N(this)
    }
    _getValue() {
        const t = this.strings,
            e = t.length - 1,
            s = this.parts;
        if (1 === e && "" === t[0] && "" === t[1]) {
            const t = s[0].value;
            if ("symbol" == typeof t)
                return String(t);
            if ("string" == typeof t || !w(t))
                return t
        }
        let i = "";
        for (let n = 0; n < e; n++) {
            i += t[n];
            const e = s[n];
            if (void 0 !== e) {
                const t = e.value;
                if (b(t) || !w(t))
                    i += "string" == typeof t ? t : String(t);
                else
                    for (const e of t)
                        i += "string" == typeof e ? e : String(e)
            }
        }
        return i += t[e],
            i
    }
    commit() {
        this.dirty && (this.dirty = !1,
            this.element.setAttribute(this.name, this._getValue()))
    }
}
class N {
    constructor(t) {
        this.value = void 0,
            this.committer = t
    }
    setValue(t) {
        t === r || b(t) && t === this.value || (this.value = t,
            e(t) || (this.committer.dirty = !0))
    }
    commit() {
        for (; e(this.value);) {
            const t = this.value;
            this.value = r,
                t.isClass ? t.body(this) : t(this)
        }
        this.value !== r && this.committer.commit()
    }
}
class S {
    constructor(t) {
        this.value = void 0,
            this.__pendingValue = void 0,
            this.options = t
    }
    appendInto(t) {
        this.startNode = t.appendChild(p()),
            this.endNode = t.appendChild(p())
    }
    insertAfterNode(t) {
        this.startNode = t,
            this.endNode = t.nextSibling
    }
    appendIntoPart(t) {
        t.__insert(this.startNode = p()),
            t.__insert(this.endNode = p())
    }
    insertAfterPart(t) {
        t.__insert(this.startNode = p()),
            this.endNode = t.endNode,
            t.endNode = this.startNode
    }
    setValue(t) {
        this.__pendingValue = t
    }
    commit() {
        if (null === this.startNode.parentNode)
            return;
        for (; e(this.__pendingValue);) {
            const t = this.__pendingValue;
            this.__pendingValue = r,
                t.isClass ? t.body(this) : t(this)
        }
        const t = this.__pendingValue;
        t !== r && (b(t) ? t !== this.value && this.__commitText(t) : t instanceof y ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : w(t) ? this.__commitIterable(t) : t === o ? (this.value = o,
            this.clear()) : this.__commitText(t))
    }
    __insert(t) {
        this.endNode.parentNode.insertBefore(t, this.endNode)
    }
    __commitNode(t) {
        this.value !== t && (this.clear(),
            this.__insert(t),
            this.value = t)
    }
    __commitText(t) {
        const e = this.startNode.nextSibling,
            s = "string" == typeof(t = null == t ? "" : t) ? t : String(t);
        if (e === this.endNode.previousSibling && 3 === e.nodeType)
            e.data = s;
        else {
            const t = T.cloneNode();
            t.textContent = s,
                this.__commitNode(t)
        }
        this.value = t
    }
    __commitTemplateResult(t) {
        const e = this.options.templateFactory(t);
        if (this.value instanceof g && this.value.template === e)
            this.value.update(t.values);
        else {
            const s = new g(e, t.processor, this.options),
                i = s._clone();
            s.update(t.values),
                this.__commitNode(i),
                this.value = s
        }
    }
    __commitIterable(t) {
        Array.isArray(this.value) || (this.value = [],
            this.clear());
        const e = this.value;
        let s, i = 0;
        for (const n of t)
            s = e[i],
            void 0 === s && (s = new S(this.options),
                e.push(s),
                0 === i ? s.appendIntoPart(this) : s.insertAfterPart(e[i - 1])),
            s.setValue(n),
            s.commit(),
            i++;
        i < e.length && (e.length = i,
            this.clear(s && s.endNode))
    }
    clear(t = this.startNode) {
        n(this.startNode.parentNode, t.nextSibling, this.endNode)
    }
}
class M {
    constructor(t, e, s) {
        if (this.value = void 0,
            this.__pendingValue = void 0,
            2 !== s.length || "" !== s[0] || "" !== s[1])
            throw new Error("Boolean attributes can only contain a single expression");
        this.element = t,
            this.name = e,
            this.strings = s
    }
    setValue(t) {
        this.__pendingValue = t
    }
    commit() {
        for (; e(this.__pendingValue);) {
            const t = this.__pendingValue;
            this.__pendingValue = r,
                t.isClass ? t.body(this) : t(this)
        }
        if (this.__pendingValue === r)
            return;
        const t = !!this.__pendingValue;
        this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name),
                this.value = t),
            this.__pendingValue = r
    }
}
class C extends D {
    constructor(t, e, s) {
        super(t, e, s),
            this.single = 2 === s.length && "" === s[0] && "" === s[1]
    }
    _createPart() {
        return new O(this)
    }
    _getValue() {
        return this.single ? this.parts[0].value : super._getValue()
    }
    commit() {
        this.dirty && (this.dirty = !1,
            this.element[this.name] = this._getValue())
    }
}
class O extends N {}
let V = !1;
(() => {
    try {
        const t = {
            get capture() {
                return V = !0, !1
            }
        };
        window.addEventListener("test", t, t),
            window.removeEventListener("test", t, t)
    } catch (t) {}
})();
class A {
    constructor(t, e, s) {
        this.value = void 0,
            this.__pendingValue = void 0,
            this.element = t,
            this.eventName = e,
            this.eventContext = s,
            this.__boundHandleEvent = t => this.handleEvent(t)
    }
    setValue(t) {
        this.__pendingValue = t
    }
    commit() {
        for (; e(this.__pendingValue);) {
            const t = this.__pendingValue;
            this.__pendingValue = r,
                t.isClass ? t.body(this) : t(this)
        }
        if (this.__pendingValue === r)
            return;
        const t = this.__pendingValue,
            s = this.value,
            i = null == t || null != s && (t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive),
            n = null != t && (null == s || i);
        i && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
            n && (this.__options = E(t),
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
            this.value = t,
            this.__pendingValue = r
    }
    handleEvent(t) {
        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
    }
}
const E = t => t && (V ? {
        capture: t.capture,
        passive: t.passive,
        once: t.once
    } : t.capture
    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
);
class H {
    handleAttributeExpressions(t, e, s, i) {
        const n = e[0];
        return "." === n ? new C(t, e.slice(1), s).parts : "@" === n ? [new A(t, e.slice(1), i.eventContext)] : "?" === n ? [new M(t, e.slice(1), s)] : new D(t, e, s).parts
    }
    handleTextExpression(t) {
        return new S(t)
    }
}
const I = new H;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function k(t) {
    let e = P.get(t.type);
    void 0 === e && (e = {
            stringsArray: new WeakMap,
            keyString: new Map
        },
        P.set(t.type, e));
    let s = e.stringsArray.get(t.strings);
    if (void 0 !== s)
        return s;
    const i = t.strings.join(a);
    return s = e.keyString.get(i),
        void 0 === s && (s = new h(t, t.getTemplateElement()),
            e.keyString.set(i, s)),
        e.stringsArray.set(t.strings, s),
        s
}
const P = new Map,
    L = new WeakMap;

/**
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
Object.freeze({
    __proto__: null,
    html: (t, ...e) => new y(t, e, "html", I),
    svg: (t, ...e) => new x(t, e, "svg", I),
    DefaultTemplateProcessor: H,
    defaultTemplateProcessor: I,
    directive: t => (...e) => {
        const s = t(...e);
        return s.isDirective = !0,
            s
    },
    Directive: class {
        constructor() {
            this.isDirective = !0,
                this.isClass = !0
        }
        body(t) {}
    },
    isDirective: e,
    removeNodes: n,
    reparentNodes: i,
    noChange: r,
    nothing: o,
    AttributeCommitter: D,
    AttributePart: N,
    BooleanAttributePart: M,
    EventPart: A,
    isIterable: w,
    isPrimitive: b,
    NodePart: S,
    PropertyCommitter: C,
    PropertyPart: O,
    parts: L,
    render: (t, e, s) => {
        let i = L.get(e);
        void 0 === i && (n(e, e.firstChild),
                L.set(e, i = new S(Object.assign({
                    templateFactory: k
                }, s))),
                i.appendInto(e)),
            i.setValue(t),
            i.commit()
    },
    templateCaches: P,
    templateFactory: k,
    TemplateInstance: g,
    SVGTemplateResult: x,
    TemplateResult: y,
    createMarker: p,
    isTemplatePartActive: d,
    Template: h
});
document.createElement("template"),
    document.createTextNode("");

function Y(t, e = "") {
    let s = "gstc__" + t;
    return "gstc" === t && (s = "gstc"),
        e ? `${s} ${s}--${e.replace(":", "-")}` : s
}
const W = "config.plugin.TimeBookmarks",
    U = "config.slots.chart.content";
class F {
    constructor(t, e) {
        this.unsub = [],
            this.options = function(t) {
                return Object.assign({
                    enabled: !0,
                    className: Y("chart-time-bookmark")
                }, t)
            }(t),
            this.vido = e,
            this.state = e.state,
            this.className = this.options.className,
            this.slotComponent = this.slotComponent.bind(this),
            this.destroy = this.destroy.bind(this),
            this.state.update(W, this.options),
            this.state.update(U, t => (t.includes(this.slotComponent) || t.push(this.slotComponent),
                t)),
            this.unsub.push(this.state.subscribe(W, t => this.options = t))
    }
    destroy() {
        this.unsub.forEach(t => t()),
            this.state.update(U, t => t.filter(t => t !== this.slotComponent)),
            this.vido.api.pluginDestroyed("TimeBookmarks")
    }
    slotComponent(t) {
        const { html: e, onDestroy: s, state: i, update: n, api: r } = t, o = "#3498DB", a = [];
        s(i.subscribeAll([W, "config.chart.time", "config.scroll.horizontal.dataIndex"], () => {
            const t = i.get(W);
            a.length = 0;
            for (const e in t.bookmarks) {
                const s = Object.assign(Object.assign({}, t.bookmarks[e]), {
                    id: e,
                    leftViewPx: 0
                });
                s.id = e,
                    s.leftViewPx = r.time.getViewOffsetPxFromDates(r.time.date(s.time)),
                    a.push(s)
            }
            n()
        }));
        let l = 0;
        s(i.subscribe("config.headerHeight", t => {
            l = t,
                n()
        }));
        let u = 0;
        s(i.subscribe("config.innerHeight", t => {
            u = t,
                n()
        }));
        let h = 0;
        s(i.subscribe("config.scroll.horizontal.size", t => {
            h = t,
                n()
        }));
        const c = t => e `<div
        class="${this.className} ${this.className}--${t.id}"
        style="left:${t.leftViewPx}px;top: ${l - 8}px;"
      >
        <div class="${this.className}-handle" style="background: ${t.color || o};">
          ${t.label}
        </div>
        <div class="${this.className}-line" style="border-left: 1px solid ${t.color || o};"></div>
      </div>`;
        return t => e `${t}
        <div class="${this.className}s" style="height: ${u + l - h}px;">
          ${a.map(t => c(t))}
        </div>`
    }
}

function B(t = {}) {
    return function(e) {
        const s = e.state.get(W);
        s && (t = e.api.mergeDeep({}, t, s));
        const i = new F(t, e);
        return e.api.pluginInitialized("TimeBookmarks"),
            i.destroy
    }
}
export { B as Plugin, W as pluginPath, U as slotPath };