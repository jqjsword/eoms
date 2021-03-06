/**
 * Gantt-Schedule-Timeline-Calendar
 *
 * @copyright NEURONET - Rafal Pospiech <https://neuronet.io>
 * @author    Rafal Pospiech <neuronet.io@gmail.com>
 * @package   gantt-schedule-timeline-calendar
 * @version   3.6.6
 * @license   NEURONET Free License (see https://github.com/neuronetio/gantt-schedule-timeline-calendar/blob/master/LICENSE)
 */
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
const t = t=>(...e)=>{
    const i = t(...e);
    return i.isDirective = !0,
    i
}
;
class e {
    constructor() {
        this.isDirective = !0,
        this.isClass = !0
    }
    body(t) {}
}
const i = t=>null != t && "boolean" == typeof t.isDirective
  , n = "undefined" != typeof window && null != window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback
  , s = (t,e,i=null,n=null)=>{
    for (; e !== i; ) {
        const i = e.nextSibling;
        t.insertBefore(e, n),
        e = i
    }
}
  , o = (t,e,i=null)=>{
    for (; e !== i; ) {
        const i = e.nextSibling;
        t.removeChild(e),
        e = i
    }
}
  , r = {}
  , a = {}
  , l = `{{lit-${String(Math.random()).slice(2)}}}`
  , c = `\x3c!--${l}--\x3e`
  , d = new RegExp(`${l}|${c}`);
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
        const i = []
          , n = []
          , s = document.createTreeWalker(e.content, 133, null, !1);
        let o = 0
          , r = -1
          , a = 0;
        const {strings: c, values: {length: h}} = t;
        for (; a < h; ) {
            const t = s.nextNode();
            if (null !== t) {
                if (r++,
                1 === t.nodeType) {
                    if (t.hasAttributes()) {
                        const e = t.attributes
                          , {length: i} = e;
                        let n = 0;
                        for (let t = 0; t < i; t++)
                            u(e[t].name, "$lit$") && n++;
                        for (; n-- > 0; ) {
                            const e = c[a]
                              , i = g.exec(e)[2]
                              , n = i.toLowerCase() + "$lit$"
                              , s = t.getAttribute(n);
                            t.removeAttribute(n);
                            const o = s.split(d);
                            this.parts.push({
                                type: "attribute",
                                index: r,
                                name: i,
                                strings: o
                            }),
                            a += o.length - 1
                        }
                    }
                    "TEMPLATE" === t.tagName && (n.push(t),
                    s.currentNode = t.content)
                } else if (3 === t.nodeType) {
                    const e = t.data;
                    if (e.indexOf(l) >= 0) {
                        const n = t.parentNode
                          , s = e.split(d)
                          , o = s.length - 1;
                        for (let e = 0; e < o; e++) {
                            let i, o = s[e];
                            if ("" === o)
                                i = m();
                            else {
                                const t = g.exec(o);
                                null !== t && u(t[2], "$lit$") && (o = o.slice(0, t.index) + t[1] + t[2].slice(0, -"$lit$".length) + t[3]),
                                i = document.createTextNode(o)
                            }
                            n.insertBefore(i, t),
                            this.parts.push({
                                type: "node",
                                index: ++r
                            })
                        }
                        "" === s[o] ? (n.insertBefore(m(), t),
                        i.push(t)) : t.data = s[o],
                        a += o
                    }
                } else if (8 === t.nodeType)
                    if (t.data === l) {
                        const e = t.parentNode;
                        null !== t.previousSibling && r !== o || (r++,
                        e.insertBefore(m(), t)),
                        o = r,
                        this.parts.push({
                            type: "node",
                            index: r
                        }),
                        null === t.nextSibling ? t.data = "" : (i.push(t),
                        r--),
                        a++
                    } else {
                        let e = -1;
                        for (; -1 !== (e = t.data.indexOf(l, e + 1)); )
                            this.parts.push({
                                type: "node",
                                index: -1
                            }),
                            a++
                    }
            } else
                s.currentNode = n.pop()
        }
        for (const t of i)
            t.parentNode.removeChild(t)
    }
}
const u = (t,e)=>{
    const i = t.length - e.length;
    return i >= 0 && t.slice(i) === e
}
  , f = t=>-1 !== t.index
  , p = document.createComment("")
  , m = ()=>p.cloneNode()
  , g = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class v {
    constructor(t, e, i) {
        this.__parts = [],
        this.template = t,
        this.processor = e,
        this.options = i
    }
    update(t) {
        let e = 0;
        for (const i of this.__parts)
            void 0 !== i && i.setValue(t[e]),
            e++;
        for (const t of this.__parts)
            void 0 !== t && t.commit()
    }
    _clone() {
        const t = n ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0)
          , e = []
          , i = this.template.parts
          , s = document.createTreeWalker(t, 133, null, !1);
        let o, r = 0, a = 0, l = s.nextNode();
        for (; r < i.length; )
            if (o = i[r],
            f(o)) {
                for (; a < o.index; )
                    a++,
                    "TEMPLATE" === l.nodeName && (e.push(l),
                    s.currentNode = l.content),
                    null === (l = s.nextNode()) && (s.currentNode = e.pop(),
                    l = s.nextNode());
                if ("node" === o.type) {
                    const t = this.processor.handleTextExpression(this.options);
                    t.insertAfterNode(l.previousSibling),
                    this.__parts.push(t)
                } else
                    this.__parts.push(...this.processor.handleAttributeExpressions(l, o.name, o.strings, this.options));
                r++
            } else
                this.__parts.push(void 0),
                r++;
        return n && (document.adoptNode(t),
        customElements.upgrade(t)),
        t
    }
}
const y = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
    createHTML: t=>t
})
  , w = ` ${l} `
  , b = document.createElement("template");
class x {
    constructor(t, e, i, n) {
        this.strings = t,
        this.values = e,
        this.type = i,
        this.processor = n
    }
    getHTML() {
        const t = this.strings.length - 1;
        let e = ""
          , i = !1;
        for (let n = 0; n < t; n++) {
            const t = this.strings[n]
              , s = t.lastIndexOf("\x3c!--");
            i = (s > -1 || i) && -1 === t.indexOf("--\x3e", s + 1);
            const o = g.exec(t);
            e += null === o ? t + (i ? w : c) : t.substr(0, o.index) + o[1] + o[2] + "$lit$" + o[3] + l
        }
        return e += this.strings[t],
        e
    }
    getTemplateElement() {
        const t = b.cloneNode();
        let e = this.getHTML();
        return void 0 !== y && (e = y.createHTML(e)),
        t.innerHTML = e,
        t
    }
}
class $ extends x {  //#
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`
    }
    getTemplateElement() {
        const t = super.getTemplateElement()
          , e = t.content
          , i = e.firstChild;
        return e.removeChild(i),
        s(e, i.firstChild),
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
const D = t=>null === t || !("object" == typeof t || "function" == typeof t)
  , P = t=>Array.isArray(t) || !(!t || !t[Symbol.iterator])
  , _ = document.createTextNode("");
class M {
    constructor(t, e, i) {
        this.dirty = !0,
        this.element = t,
        this.name = e,
        this.strings = i,
        this.parts = [];
        for (let t = 0; t < i.length - 1; t++)
            this.parts[t] = this._createPart()
    }
    _createPart() {
        return new I(this)
    }
    _getValue() {
        const t = this.strings
          , e = t.length - 1
          , i = this.parts;
        if (1 === e && "" === t[0] && "" === t[1]) {
            const t = i[0].value;
            if ("symbol" == typeof t)
                return String(t);
            if ("string" == typeof t || !P(t))
                return t
        }
        let n = "";
        for (let s = 0; s < e; s++) {
            n += t[s];
            const e = i[s];
            if (void 0 !== e) {
                const t = e.value;
                if (D(t) || !P(t))
                    n += "string" == typeof t ? t : String(t);
                else
                    for (const e of t)
                        n += "string" == typeof e ? e : String(e)
            }
        }
        return n += t[e],
        n
    }
    commit() {
        this.dirty && (this.dirty = !1,
        this.element.setAttribute(this.name, this._getValue()))
    }
}
class I {
    constructor(t) {
        this.value = void 0,
        this.committer = t
    }
    setValue(t) {
        t === r || D(t) && t === this.value || (this.value = t,
        i(t) || (this.committer.dirty = !0))
    }
    commit() {
        for (; i(this.value); ) {
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
        this.startNode = t.appendChild(m()),
        this.endNode = t.appendChild(m())
    }
    insertAfterNode(t) {
        this.startNode = t,
        this.endNode = t.nextSibling
    }
    appendIntoPart(t) {
        t.__insert(this.startNode = m()),
        t.__insert(this.endNode = m())
    }
    insertAfterPart(t) {
        t.__insert(this.startNode = m()),
        this.endNode = t.endNode,
        t.endNode = this.startNode
    }
    setValue(t) {
        this.__pendingValue = t
    }
    commit() {
        if (null === this.startNode.parentNode)
            return;
        for (; i(this.__pendingValue); ) {
            const t = this.__pendingValue;
            this.__pendingValue = r,
            t.isClass ? t.body(this) : t(this)
        }
        const t = this.__pendingValue;
        t !== r && (D(t) ? t !== this.value && this.__commitText(t) : t instanceof x ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : P(t) ? this.__commitIterable(t) : t === a ? (this.value = a,
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
        const e = this.startNode.nextSibling
          , i = "string" == typeof (t = null == t ? "" : t) ? t : String(t);
        if (e === this.endNode.previousSibling && 3 === e.nodeType)
            e.data = i;
        else {
            const t = _.cloneNode();
            t.textContent = i,
            this.__commitNode(t)
        }
        this.value = t
    }
    __commitTemplateResult(t) {
        const e = this.options.templateFactory(t);
        if (this.value instanceof v && this.value.template === e)
            this.value.update(t.values);
        else {
            const i = new v(e,t.processor,this.options)
              , n = i._clone();
            i.update(t.values),
            this.__commitNode(n),
            this.value = i
        }
    }
    __commitIterable(t) {
        Array.isArray(this.value) || (this.value = [],
        this.clear());
        const e = this.value;
        let i, n = 0;
        for (const s of t)
            i = e[n],
            void 0 === i && (i = new S(this.options),
            e.push(i),
            0 === n ? i.appendIntoPart(this) : i.insertAfterPart(e[n - 1])),
            i.setValue(s),
            i.commit(),
            n++;
        n < e.length && (e.length = n,
        this.clear(i && i.endNode))
    }
    clear(t=this.startNode) {
        o(this.startNode.parentNode, t.nextSibling, this.endNode)
    }
}
class C {
    constructor(t, e, i) {
        if (this.value = void 0,
        this.__pendingValue = void 0,
        2 !== i.length || "" !== i[0] || "" !== i[1])
            throw new Error("Boolean attributes can only contain a single expression");
        this.element = t,
        this.name = e,
        this.strings = i
    }
    setValue(t) {
        this.__pendingValue = t
    }
    commit() {
        for (; i(this.__pendingValue); ) {
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
class R extends M {
    constructor(t, e, i) {
        super(t, e, i),
        this.single = 2 === i.length && "" === i[0] && "" === i[1]
    }
    _createPart() {
        return new A(this)
    }
    _getValue() {
        return this.single ? this.parts[0].value : super._getValue()
    }
    commit() {
        this.dirty && (this.dirty = !1,
        this.element[this.name] = this._getValue())
    }
}
class A extends I {
}
let T = !1;
(()=>{
    try {
        const t = {
            get capture() {
                return T = !0,
                !1
            }
        };
        window.addEventListener("test", t, t),
        window.removeEventListener("test", t, t)
    } catch (t) {}
}
)();
class O {
    constructor(t, e, i) {
        this.value = void 0,
        this.__pendingValue = void 0,
        this.element = t,
        this.eventName = e,
        this.eventContext = i,
        this.__boundHandleEvent = t=>this.handleEvent(t)
    }
    setValue(t) {
        this.__pendingValue = t
    }
    commit() {
        for (; i(this.__pendingValue); ) {
            const t = this.__pendingValue;
            this.__pendingValue = r,
            t.isClass ? t.body(this) : t(this)
        }
        if (this.__pendingValue === r)
            return;
        const t = this.__pendingValue
          , e = this.value
          , n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive)
          , s = null != t && (null == e || n);
        n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options),
        s && (this.__options = L(t),
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)),
        this.value = t,
        this.__pendingValue = r
    }
    handleEvent(t) {
        "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
    }
}
const L = t=>t && (T ? {
    capture: t.capture,
    passive: t.passive,
    once: t.once
} : t.capture /**
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
class k {
    handleAttributeExpressions(t, e, i, n) {
        const s = e[0];
        return "." === s ? new R(t,e.slice(1),i).parts : "@" === s ? [new O(t,e.slice(1),n.eventContext)] : "?" === s ? [new C(t,e.slice(1),i)] : new M(t,e,i).parts
    }
    handleTextExpression(t) {
        return new S(t)
    }
}
const z = new k;
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
function N(t) {
    let e = G.get(t.type);
    void 0 === e && (e = {
        stringsArray: new WeakMap,
        keyString: new Map
    },
    G.set(t.type, e));
    let i = e.stringsArray.get(t.strings);
    if (void 0 !== i)
        return i;
    const n = t.strings.join(l);
    return i = e.keyString.get(n),
    void 0 === i && (i = new h(t,t.getTemplateElement()),
    e.keyString.set(n, i)),
    e.stringsArray.set(t.strings, i),
    i
}
const G = new Map
  , H = new WeakMap
  , E = (t,e,i)=>{
    let n = H.get(e);
    void 0 === n && (o(e, e.firstChild),
    H.set(e, n = new S(Object.assign({
        templateFactory: N
    }, i))),
    n.appendInto(e)),
    n.setValue(t),
    n.commit()
}
;
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
"undefined" != typeof window && (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.3.0");
const V = (t,...e)=>new x(t,e,"html",z)
  , Y = (t,...e)=>new $(t,e,"svg",z);
var W = Object.freeze({
    __proto__: null,
    html: V,
    svg: Y,
    DefaultTemplateProcessor: k,
    defaultTemplateProcessor: z,
    directive: t,
    Directive: e,
    isDirective: i,
    removeNodes: o,
    reparentNodes: s,
    noChange: r,
    nothing: a,
    AttributeCommitter: M,
    AttributePart: I,
    BooleanAttributePart: C,
    EventPart: O,
    isIterable: P,
    isPrimitive: D,
    NodePart: S,
    PropertyCommitter: R,
    PropertyPart: A,
    parts: H,
    render: E,
    templateCaches: G,
    templateFactory: N,
    TemplateInstance: v,
    SVGTemplateResult: $,
    TemplateResult: x,
    createMarker: m,
    isTemplatePartActive: f,
    Template: h
});
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
const j = t((t,e)=>async i=>{
    var n, s;
    if (!(i instanceof S))
        throw new Error("asyncAppend can only be used in text bindings");
    if (t === i.value)
        return;
    let o;
    i.value = t;
    let r = 0;
    try {
        for (var a, l = function(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, i = t[Symbol.asyncIterator];
            return i ? i.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](),
            e = {},
            n("next"),
            n("throw"),
            n("return"),
            e[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            e);
            function n(i) {
                e[i] = t[i] && function(e) {
                    return new Promise((function(n, s) {
                        !function(t, e, i, n) {
                            Promise.resolve(n).then((function(e) {
                                t({
                                    value: e,
                                    done: i
                                })
                            }
                            ), e)
                        }(n, s, (e = t[i](e)).done, e.value)
                    }
                    ))
                }
            }
        }(t); !(a = await l.next()).done; ) {
            let n = a.value;
            if (i.value !== t)
                break;
            0 === r && i.clear(),
            void 0 !== e && (n = e(n, r));
            let s = i.startNode;
            void 0 !== o && (s = m(),
            o.endNode = s,
            i.endNode.parentNode.insertBefore(s, i.endNode)),
            o = new S(i.options),
            o.insertAfterNode(s),
            o.setValue(n),
            o.commit(),
            r++
        }
    } catch (t) {
        n = {
            error: t
        }
    } finally {
        try {
            a && !a.done && (s = l.return) && await s.call(l)
        } finally {
            if (n)
                throw n.error
        }
    }
}
);
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
const B = t((t,e)=>async i=>{
    var n, s;
    if (!(i instanceof S))
        throw new Error("asyncReplace can only be used in text bindings");
    if (t === i.value)
        return;
    const o = new S(i.options);
    i.value = t;
    let r = 0;
    try {
        for (var a, l = function(t) {
            if (!Symbol.asyncIterator)
                throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, i = t[Symbol.asyncIterator];
            return i ? i.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](),
            e = {},
            n("next"),
            n("throw"),
            n("return"),
            e[Symbol.asyncIterator] = function() {
                return this
            }
            ,
            e);
            function n(i) {
                e[i] = t[i] && function(e) {
                    return new Promise((function(n, s) {
                        !function(t, e, i, n) {
                            Promise.resolve(n).then((function(e) {
                                t({
                                    value: e,
                                    done: i
                                })
                            }
                            ), e)
                        }(n, s, (e = t[i](e)).done, e.value)
                    }
                    ))
                }
            }
        }(t); !(a = await l.next()).done; ) {
            let n = a.value;
            if (i.value !== t)
                break;
            0 === r && (i.clear(),
            o.appendIntoPart(i)),
            void 0 !== e && (n = e(n, r)),
            o.setValue(n),
            o.commit(),
            r++
        }
    } catch (t) {
        n = {
            error: t
        }
    } finally {
        try {
            a && !a.done && (s = l.return) && await s.call(l)
        } finally {
            if (n)
                throw n.error
        }
    }
}
)
  , F = new WeakMap
  , X = t(t=>e=>{
    if (!(e instanceof S))
        throw new Error("cache can only be used in text bindings");
    let i = F.get(e);
    void 0 === i && (i = new WeakMap,
    F.set(e, i));
    const n = e.value;
    if (n instanceof v) {
        if (t instanceof x && n.template === e.options.templateFactory(t))
            return void e.setValue(t);
        {
            let t = i.get(n.template);
            void 0 === t && (t = {
                instance: n,
                nodes: document.createDocumentFragment()
            },
            i.set(n.template, t)),
            s(t.nodes, e.startNode.nextSibling, e.endNode)
        }
    }
    if (t instanceof x) {
        const n = e.options.templateFactory(t)
          , s = i.get(n);
        void 0 !== s && (e.setValue(s.nodes),
        e.commit(),
        e.value = s.instance)
    }
    e.setValue(t)
}
);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
class U {
    constructor(t) {
        this.classes = new Set,
        this.changed = !1,
        this.element = t;
        const e = (t.getAttribute("class") || "").split(/\s+/);
        for (const t of e)
            this.classes.add(t)
    }
    add(t) {
        this.classes.add(t),
        this.changed = !0
    }
    remove(t) {
        this.classes.delete(t),
        this.changed = !0
    }
    commit() {
        if (this.changed) {
            let t = "";
            this.classes.forEach(e=>t += e + " "),
            this.element.setAttribute("class", t)
        }
    }
}
const Q = new WeakMap
  , q = t(t=>e=>{
    if (!(e instanceof I) || e instanceof A || "class" !== e.committer.name || e.committer.parts.length > 1)
        throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
    const {committer: i} = e
      , {element: n} = i;
    let s = Q.get(e);
    void 0 === s && (n.setAttribute("class", i.strings.join(" ")),
    Q.set(e, s = new Set));
    const o = n.classList || new U(n);
    s.forEach(e=>{
        e in t || (o.remove(e),
        s.delete(e))
    }
    );
    for (const e in t) {
        const i = t[e];
        i != s.has(e) && (i ? (o.add(e),
        s.add(e)) : (o.remove(e),
        s.delete(e)))
    }
    "function" == typeof o.commit && o.commit()
}
)
  , J = new WeakMap
  , K = t((t,e)=>i=>{
    const n = J.get(i);
    if (Array.isArray(t)) {
        if (Array.isArray(n) && n.length === t.length && t.every((t,e)=>t === n[e]))
            return
    } else if (n === t && (void 0 !== t || J.has(i)))
        return;
    i.setValue(e()),
    J.set(i, Array.isArray(t) ? Array.from(t) : t)
}
)
  , Z = new WeakMap
  , tt = t(t=>e=>{
    const i = Z.get(e);
    if (void 0 === t && e instanceof I) {
        if (void 0 !== i || !Z.has(e)) {
            const t = e.committer.name;
            e.committer.element.removeAttribute(t)
        }
    } else
        t !== i && e.setValue(t);
    Z.set(e, t)
}
)
  , et = (t,e)=>{
    const i = t.startNode.parentNode
      , n = void 0 === e ? t.endNode : e.startNode
      , s = i.insertBefore(m(), n);
    i.insertBefore(m(), n);
    const o = new S(t.options);
    return o.insertAfterNode(s),
    o
}
  , it = (t,e)=>(t.setValue(e),
t.commit(),
t)
  , nt = (t,e,i)=>{
    const n = t.startNode.parentNode
      , o = i ? i.startNode : t.endNode
      , r = e.endNode.nextSibling;
    r !== o && s(n, e.startNode, r, o)
}
  , st = t=>{
    o(t.startNode.parentNode, t.startNode, t.endNode.nextSibling)
}
  , ot = (t,e,i)=>{
    const n = new Map;
    for (let s = e; s <= i; s++)
        n.set(t[s], s);
    return n
}
  , rt = new WeakMap
  , at = new WeakMap
  , lt = t((t,e,i)=>{
    let n;
    return void 0 === i ? i = e : void 0 !== e && (n = e),
    e=>{
        if (!(e instanceof S))
            throw new Error("repeat can only be used in text bindings");
        const s = rt.get(e) || []
          , o = at.get(e) || []
          , r = []
          , a = []
          , l = [];
        let c, d, h = 0;
        for (const e of t)
            l[h] = n ? n(e, h) : h,
            a[h] = i(e, h),
            h++;
        let u = 0
          , f = s.length - 1
          , p = 0
          , m = a.length - 1;
        for (; u <= f && p <= m; )
            if (null === s[u])
                u++;
            else if (null === s[f])
                f--;
            else if (o[u] === l[p])
                r[p] = it(s[u], a[p]),
                u++,
                p++;
            else if (o[f] === l[m])
                r[m] = it(s[f], a[m]),
                f--,
                m--;
            else if (o[u] === l[m])
                r[m] = it(s[u], a[m]),
                nt(e, s[u], r[m + 1]),
                u++,
                m--;
            else if (o[f] === l[p])
                r[p] = it(s[f], a[p]),
                nt(e, s[f], s[u]),
                f--,
                p++;
            else if (void 0 === c && (c = ot(l, p, m),
            d = ot(o, u, f)),
            c.has(o[u]))
                if (c.has(o[f])) {
                    const t = d.get(l[p])
                      , i = void 0 !== t ? s[t] : null;
                    if (null === i) {
                        const t = et(e, s[u]);
                        it(t, a[p]),
                        r[p] = t
                    } else
                        r[p] = it(i, a[p]),
                        nt(e, i, s[u]),
                        s[t] = null;
                    p++
                } else
                    st(s[f]),
                    f--;
            else
                st(s[u]),
                u++;
        for (; p <= m; ) {
            const t = et(e, r[m + 1]);
            it(t, a[p]),
            r[p++] = t
        }
        for (; u <= f; ) {
            const t = s[u++];
            null !== t && st(t)
        }
        rt.set(e, r),
        at.set(e, l)
    }
}
)
  , ct = new WeakMap
  , dt = document.createElement("template")
  , ht = t(t=>e=>{
    if (!(e instanceof S))
        throw new Error("unsafeHTML can only be used in text bindings");
    const i = ct.get(e);
    if (void 0 !== i && D(t) && t === i.value && e.value === i.fragment)
        return;
    const n = dt.cloneNode();
    n.innerHTML = t;
    const s = document.importNode(n.content, !0);
    e.setValue(s),
    ct.set(e, {
        value: t,
        fragment: s
    })
}
)
  , ut = new WeakMap
  , ft = t((...t)=>e=>{
    let i = ut.get(e);
    void 0 === i && (i = {
        lastRenderedIndex: 2147483647,
        values: []
    },
    ut.set(e, i));
    const n = i.values;
    let s = n.length;
    i.values = t;
    for (let o = 0; o < t.length && !(o > i.lastRenderedIndex); o++) {
        const r = t[o];
        if (D(r) || "function" != typeof r.then) {
            e.setValue(r),
            i.lastRenderedIndex = o;
            break
        }
        o < s && r === n[o] || (i.lastRenderedIndex = 2147483647,
        s = 0,
        Promise.resolve(r).then(t=>{
            const n = i.values.indexOf(r);
            n > -1 && n < i.lastRenderedIndex && (i.lastRenderedIndex = n,
            e.setValue(t),
            e.commit())
        }
        ))
    }
}
)
  , pt = t(t=>e=>{
    let i;
    if (e instanceof O || e instanceof S)
        throw new Error("The `live` directive is not allowed on text or event bindings");
    if (e instanceof C)
        mt(e.strings),
        i = e.element.hasAttribute(e.name),
        e.value = i;
    else {
        const {element: n, name: s, strings: o} = e.committer;
        if (mt(o),
        e instanceof A) {
            if (i = n[s],
            i === t)
                return
        } else
            e instanceof I && (i = n.getAttribute(s));
        if (i === String(t))
            return
    }
    e.setValue(t)
}
)
  , mt = t=>{
    if (2 !== t.length || "" !== t[0] || "" !== t[1])
        throw new Error("`live` bindings can only contain a single expression")
}
  , gt = new WeakMap;
class vt extends e {
    constructor(t) {
        super(),
        this.ifFn = t
    }
    body(t) {
        const e = this.ifFn()
          , i = t.committer.element;
        if (e)
            gt.has(t) || gt.set(t, {
                element: i,
                nextSibling: i.nextSibling,
                previousSibling: i.previousSibling,
                parent: i.parentNode
            }),
            i.remove();
        else {
            const e = gt.get(t);
            e && (e.nextSibling && e.nextSibling.parentNode ? e.nextSibling.parentNode.insertBefore(e.element, e.nextSibling) : e.previousSibling && e.previousSibling.parentNode ? e.previousSibling.parentNode.appendChild(e.element) : e.parent && e.parent.appendChild(e.element),
            gt.delete(t))
        }
    }
}
class yt extends e {
    constructor(t, e=!1) {
        super(),
        this.toRemove = [],
        this.toUpdate = [],
        this.debug = !1,
        this.previous = {},
        this.style = t,
        this.detach = e
    }
    setStyle(t) {
        this.style = t
    }
    setDebug(t=!0) {
        this.debug = t
    }
    setDetach(t) {
        this.detach = t
    }
    body(t) {
        this.toRemove.length = 0,
        this.toUpdate.length = 0;
        const e = t.committer.element
          , i = e.style;
        let n = this.previous;
        if (e.attributes.getNamedItem("style")) {
            const t = e.attributes.getNamedItem("style").value.split(";").map(t=>t.substr(0, t.indexOf(":")).trim()).filter(t=>!!t);
            for (const e of t)
                void 0 === this.style[e] && (this.toRemove.includes(e) || this.toRemove.push(e))
        }
        for (const t in n)
            this.style.hasOwnProperty(t) && void 0 === this.style[t] && (this.toRemove.includes(t) || this.toRemove.push(t));
        for (const t in this.style) {
            if (!this.style.hasOwnProperty(t))
                continue;
            const e = this.style[t]
              , i = n[t];
            void 0 !== i && i === e || this.toUpdate.push(t)
        }
        if (this.debug && (console.log("[StyleMap] to remove", [...this.toRemove]),
        console.log("[StyleMap] to update", [...this.toUpdate])),
        this.toRemove.length || this.toUpdate.length) {
            let t, n;
            this.detach && (t = e.parentNode,
            t && (n = e.nextSibling,
            e.remove()));
            for (const t of this.toRemove)
                i.removeProperty(t),
                i[t] && delete i[t];
            for (const t of this.toUpdate) {
                const e = this.style[t];
                t.includes("-") ? i.setProperty(t, e) : i[t] = e
            }
            this.detach && t && t.insertBefore(e, n),
            this.previous = Object.assign({}, this.style)
        }
    }
}
class wt {
    constructor() {
        this.isAction = !0
    }
}
wt.prototype.isAction = !0;
const bt = {
    element: document.createTextNode(""),
    axis: "xy",
    threshold: 10,
    onDown() {},
    onMove() {},
    onUp() {},
    onWheel() {}
}
  , xt = "undefined" != typeof PointerEvent;
let $t = 0;
class Dt extends wt {
    constructor(t, e) {
        super(),
        this.moving = "",
        this.initialX = 0,
        this.initialY = 0,
        this.lastY = 0,
        this.lastX = 0,
        this.onPointerDown = this.onPointerDown.bind(this),
        this.onPointerMove = this.onPointerMove.bind(this),
        this.onPointerUp = this.onPointerUp.bind(this),
        this.onWheel = this.onWheel.bind(this),
        this.element = t,
        this.id = ++$t,
        this.options = Object.assign(Object.assign({}, bt), e.pointerOptions),
        xt ? (t.addEventListener("pointerdown", this.onPointerDown),
        document.addEventListener("pointermove", this.onPointerMove),
        document.addEventListener("pointerup", this.onPointerUp)) : (t.addEventListener("touchstart", this.onPointerDown),
        document.addEventListener("touchmove", this.onPointerMove, {
            passive: !1
        }),
        document.addEventListener("touchend", this.onPointerUp),
        document.addEventListener("touchcancel", this.onPointerUp),
        t.addEventListener("mousedown", this.onPointerDown),
        document.addEventListener("mousemove", this.onPointerMove, {
            passive: !1
        }),
        document.addEventListener("mouseup", this.onPointerUp))
    }
    normalizeMouseWheelEvent(t) {
        let e = t.deltaX || 0
          , i = t.deltaY || 0
          , n = t.deltaZ || 0;
        const s = t.deltaMode
          , o = parseInt(getComputedStyle(t.target).getPropertyValue("line-height"));
        let r = 1;
        switch (s) {
        case 1:
            r = o;
            break;
        case 2:
            r = window.height
        }
        return e *= r,
        i *= r,
        n *= r,
        {
            x: e,
            y: i,
            z: n,
            event: t
        }
    }
    onWheel(t) {
        const e = this.normalizeMouseWheelEvent(t);
        this.options.onWheel(e)
    }
    normalizePointerEvent(t) {
        let e = {
            x: 0,
            y: 0,
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0,
            screenX: 0,
            screenY: 0,
            event: t
        };
        switch (t.type) {
        case "wheel":
            const i = this.normalizeMouseWheelEvent(t);
            e.x = i.x,
            e.y = i.y,
            e.pageX = e.x,
            e.pageY = e.y,
            e.screenX = e.x,
            e.screenY = e.y,
            e.clientX = e.x,
            e.clientY = e.y;
            break;
        case "touchstart":
        case "touchmove":
        case "touchend":
        case "touchcancel":
            e.x = t.changedTouches[0].screenX,
            e.y = t.changedTouches[0].screenY,
            e.pageX = t.changedTouches[0].pageX,
            e.pageY = t.changedTouches[0].pageY,
            e.screenX = t.changedTouches[0].screenX,
            e.screenY = t.changedTouches[0].screenY,
            e.clientX = t.changedTouches[0].clientX,
            e.clientY = t.changedTouches[0].clientY;
            break;
        default:
            e.x = t.x,
            e.y = t.y,
            e.pageX = t.pageX,
            e.pageY = t.pageY,
            e.screenX = t.screenX,
            e.screenY = t.screenY,
            e.clientX = t.clientX,
            e.clientY = t.clientY
        }
        return e
    }
    onPointerDown(t) {
        if ("mousedown" === t.type && 0 !== t.button)
            return;
        this.moving = "xy";
        const e = this.normalizePointerEvent(t);
        this.lastX = e.x,
        this.lastY = e.y,
        this.initialX = e.x,
        this.initialY = e.y,
        this.options.onDown(e)
    }
    handleX(t) {
        let e = t.x - this.lastX;
        return this.lastY = t.y,
        this.lastX = t.x,
        e
    }
    handleY(t) {
        let e = t.y - this.lastY;
        return this.lastY = t.y,
        this.lastX = t.x,
        e
    }
    onPointerMove(t) {
        if ("" === this.moving || "mousemove" === t.type && 0 !== t.button)
            return;
        const e = this.normalizePointerEvent(t);
        if ("x|y" === this.options.axis) {
            let i = 0
              , n = 0;
            ("x" === this.moving || "xy" === this.moving && Math.abs(e.x - this.initialX) > this.options.threshold) && (this.moving = "x",
            i = this.handleX(e)),
            ("y" === this.moving || "xy" === this.moving && Math.abs(e.y - this.initialY) > this.options.threshold) && (this.moving = "y",
            n = this.handleY(e)),
            this.options.onMove({
                movementX: i,
                movementY: n,
                x: e.x,
                y: e.y,
                initialX: this.initialX,
                initialY: this.initialY,
                lastX: this.lastX,
                lastY: this.lastY,
                event: t
            })
        } else if ("xy" === this.options.axis) {
            let i = 0
              , n = 0;
            Math.abs(e.x - this.initialX) > this.options.threshold && (i = this.handleX(e)),
            Math.abs(e.y - this.initialY) > this.options.threshold && (n = this.handleY(e)),
            this.options.onMove({
                movementX: i,
                movementY: n,
                x: e.x,
                y: e.y,
                initialX: this.initialX,
                initialY: this.initialY,
                lastX: this.lastX,
                lastY: this.lastY,
                event: t
            })
        } else if ("x" === this.options.axis)
            ("x" === this.moving || "xy" === this.moving && Math.abs(e.x - this.initialX) > this.options.threshold) && (this.moving = "x",
            this.options.onMove({
                movementX: this.handleX(e),
                movementY: 0,
                initialX: this.initialX,
                initialY: this.initialY,
                lastX: this.lastX,
                lastY: this.lastY,
                event: t
            }));
        else if ("y" === this.options.axis) {
            let i = 0;
            ("y" === this.moving || "xy" === this.moving && Math.abs(e.y - this.initialY) > this.options.threshold) && (this.moving = "y",
            i = this.handleY(e)),
            this.options.onMove({
                movementX: 0,
                movementY: i,
                x: e.x,
                y: e.y,
                initialX: this.initialX,
                initialY: this.initialY,
                lastX: this.lastX,
                lastY: this.lastY,
                event: t
            })
        }
    }
    onPointerUp(t) {
        this.moving = "";
        const e = this.normalizePointerEvent(t);
        this.options.onUp({
            movementX: 0,
            movementY: 0,
            x: e.x,
            y: e.y,
            initialX: this.initialX,
            initialY: this.initialY,
            lastX: this.lastX,
            lastY: this.lastY,
            event: t
        }),
        this.lastY = 0,
        this.lastX = 0
    }
    destroy(t) {
        xt ? (t.removeEventListener("pointerdown", this.onPointerDown),
        document.removeEventListener("pointermove", this.onPointerMove),
        document.removeEventListener("pointerup", this.onPointerUp)) : (t.removeEventListener("mousedown", this.onPointerDown),
        document.removeEventListener("mousemove", this.onPointerMove),
        document.removeEventListener("mouseup", this.onPointerUp),
        t.removeEventListener("touchstart", this.onPointerDown),
        document.removeEventListener("touchmove", this.onPointerMove),
        document.removeEventListener("touchend", this.onPointerUp),
        document.removeEventListener("touchcancel", this.onPointerUp))
    }
}
function Pt(t) {
    let e = 0;
    return function(i) {
        e || (e = requestAnimationFrame((function() {
            e = 0,
            t.apply(void 0, [i])
        }
        )))
    }
}
function _t(t) {
    return t && "object" == typeof t && null !== t && t.constructor && "Object" === t.constructor.name
}
function Mt(t, ...e) {
    const i = e.shift();
    if (_t(t) && _t(i))
        for (const e in i)
            if (_t(i[e]))
                "function" == typeof i[e].clone ? t[e] = i[e].clone() : (void 0 === t[e] && (t[e] = {}),
                t[e] = Mt(t[e], i[e]));
            else if (Array.isArray(i[e])) {
                t[e] = new Array(i[e].length);
                let n = 0;
                for (let s of i[e])
                    _t(s) ? "function" == typeof s.clone ? t[e][n] = s.clone() : t[e][n] = Mt({}, s) : t[e][n] = s,
                    n++
            } else
                t[e] = i[e];
    return e.length ? Mt(t, ...e) : t
}
function It(t) {
    if (void 0 !== t.actions) {
        const e = t.actions.map(t=>{
            const e = Object.assign({}, t)
              , i = Object.assign({}, e.props);
            return delete i.state,
            delete i.api,
            delete e.element,
            e.props = i,
            e
        }
        );
        t.actions = e
    }
    return Mt({}, t)
}
var St = {
    mergeDeep: Mt,
    clone: It,
    schedule: Pt
};
class Ct {
    constructor(t, e) {
        this.slotInstances = {},
        this.destroyed = !1,
        this.vido = t,
        this.props = e,
        this.destroy = this.destroy.bind(this),
        this.change = this.change.bind(this),
        this.html = this.html.bind(this),
        this.getInstances = this.getInstances.bind(this),
        this.setComponents = this.setComponents.bind(this),
        this.vido.onDestroy(()=>{
            this.destroy()
        }
        )
    }
    setComponents(t) {
        if (t && !this.destroyed) {
            for (const e in t) {
                const i = t[e];
                void 0 === this.slotInstances[e] && (this.slotInstances[e] = []);
                for (const t of this.slotInstances[e])
                    t.destroy();
                this.slotInstances[e].length = 0;
                for (const t of i)
                    this.slotInstances[e].push(this.vido.createComponent(t, this.props))
            }
            this.vido.update()
        }
    }
    destroy() {
        if (!this.destroyed) {
            for (const t in this.slotInstances) {
                for (const e of this.slotInstances[t])
                    e.destroy();
                this.slotInstances[t].length = 0
            }
            this.destroyed = !0
        }
    }
    change(t, e) {
        if (!this.destroyed)
            for (const i in this.slotInstances) {
                const n = this.slotInstances[i];
                for (const i of n)
                    i.change(t, e)
            }
    }
    getInstances(t) {
        return this.destroyed ? [] : void 0 === t ? this.slotInstances : this.slotInstances[t]
    }
    html(t, e) {
        if (this.destroyed)
            return;
        if (!this.slotInstances[t] || 0 === this.slotInstances[t].length)
            return e;
        let i = e;
        for (const e of this.slotInstances[t])
            i = e.html(i);
        return i
    }
    getProps() {
        return this.props
    }
    isDestroyed() {
        return this.destroyed
    }
}
function Rt(i, n) {
    let s = 0;
    const o = new Map;
    let r, a, l = new Map, c = 0;
    const d = []
      , h = Promise.resolve()
      , u = {}
      , f = function(t) {
        return class extends e {
            constructor(t) {
                super(),
                this.actions = [],
                this.instance = t
            }
            set(t, e) {
                return this.actions = t,
                this.props = e,
                this
            }
            body(e) {
                const i = e.committer.element;
                for (const e of this.actions)
                    if (void 0 !== e) {
                        let n;
                        if (t.has(this.instance))
                            for (const s of t.get(this.instance))
                                if (s.componentAction.create === e && s.element === i) {
                                    n = s;
                                    break
                                }
                        if (n)
                            n.props = this.props;
                        else {
                            void 0 !== i.vido && delete i.vido;
                            const n = {
                                create: e,
                                update() {},
                                destroy() {}
                            }
                              , s = {
                                instance: this.instance,
                                componentAction: n,
                                element: i,
                                props: this.props
                            };
                            let o = [];
                            t.has(this.instance) && (o = t.get(this.instance)),
                            o.push(s),
                            t.set(this.instance, o)
                        }
                    }
            }
        }
    }(l);
    class p {
        constructor(t) {
            this.instance = t
        }
        create(t, e) {
            const i = new f(this.instance);
            return i.set(t, e),
            i
        }
    }
    const m = function(t, e, i) {
        return class {
            constructor(t, e, i={}) {
                this.destroyed = !1,
                this.instance = t,
                this.name = e.name,
                this.vidoInstance = e,
                this.props = i,
                this.destroy = this.destroy.bind(this),
                this.update = this.update.bind(this),
                this.change = this.change.bind(this),
                this.html = this.html.bind(this)
            }
            destroy() {
                this.destroyed || (this.vidoInstance.debug && (console.groupCollapsed("destroying component " + this.instance),
                console.log(i({
                    components: t.keys(),
                    actionsByInstance: e
                })),
                console.trace(),
                console.groupEnd()),
                this.vidoInstance.destroyComponent(this.instance, this.vidoInstance),
                this.destroyed = !0)
            }
            update(n) {
                return this.vidoInstance.debug && (console.groupCollapsed("updating component " + this.instance),
                console.log(i({
                    components: t.keys(),
                    actionsByInstance: e
                })),
                console.trace(),
                console.groupEnd()),
                this.vidoInstance.updateTemplate(n)
            }
            change(n, s={}) {
                this.vidoInstance.debug && (console.groupCollapsed("changing component " + this.instance),
                console.log(i({
                    props: this.props,
                    newProps: n,
                    components: t.keys(),
                    actionsByInstance: e
                })),
                console.trace(),
                console.groupEnd());
                const o = t.get(this.instance);
                o && o.change(n, s)
            }
            html(e={}) {
                const i = t.get(this.instance);
                if (i && !i.destroyed)
                    return i.update(e, this.vidoInstance)
            }
            _getComponents() {
                return t
            }
            _getActions() {
                return e
            }
        }
    }(o, l, It)
      , g = function(t, e, i) {
        return class {
            constructor(t, e, i) {
                this.destroyed = !1,
                this.instance = t,
                this.vidoInstance = e,
                this.renderFunction = i,
                this.destroy = this.destroy.bind(this),
                this.update = this.update.bind(this),
                this.change = this.change.bind(this)
            }
            destroy() {
                if (!this.destroyed) {
                    this.vidoInstance.debug && (console.groupCollapsed("component destroy method fired " + this.instance),
                    console.log(i({
                        props: this.vidoInstance.props,
                        components: t.keys(),
                        destroyable: this.vidoInstance.destroyable,
                        actionsByInstance: e
                    })),
                    console.trace(),
                    console.groupEnd()),
                    this.content && "function" == typeof this.content.destroy && this.content.destroy();
                    for (const t of this.vidoInstance.destroyable)
                        t();
                    this.vidoInstance.onChangeFunctions.length = 0,
                    this.vidoInstance.destroyable.length = 0,
                    this.vidoInstance.destroyed = !0,
                    this.destroyed = !0,
                    this.vidoInstance.update()
                }
            }
            update(n={}) {
                return this.vidoInstance.debug && (console.groupCollapsed("component update method fired " + this.instance),
                console.log(i({
                    components: t.keys(),
                    actionsByInstance: e
                })),
                console.trace(),
                console.groupEnd()),
                this.renderFunction(n)
            }
            change(n, s={
                leave: !1
            }) {
                const o = n;
                this.vidoInstance.debug && (console.groupCollapsed("component change method fired " + this.instance),
                console.log(i({
                    props: o,
                    components: t.keys(),
                    onChangeFunctions: this.vidoInstance.onChangeFunctions,
                    changedProps: n,
                    actionsByInstance: e
                })),
                console.trace(),
                console.groupEnd());
                for (const t of this.vidoInstance.onChangeFunctions)
                    t(n, s)
            }
        }
    }(o, l, It);
    class v {
        constructor(e="", s="") {
            this.instance = "",
            this.name = "",
            this.destroyable = [],
            this.destroyed = !1,
            this.onChangeFunctions = [],
            this.debug = !1,
            this.state = i,
            this.api = n,
            this.lastProps = {},
            this.html = V,
            this.svg = Y,
            this.directive = t,
            this.asyncAppend = j,
            this.asyncReplace = B,
            this.cache = X,
            this.classMap = q,
            this.guard = K,
            this.live = pt,
            this.ifDefined = tt,
            this.repeat = lt,
            this.unsafeHTML = ht,
            this.until = ft,
            this.schedule = Pt,
            this.getElement = function(t) {
                return function(e) {
                    return t(()=>t=>{
                        e(t.committer.element)
                    }
                    )()
                }
            }(t),
            this.actionsByInstance = ()=>{}
            ,
            this.StyleMap = yt,
            this.Detach = vt,
            this.PointerAction = Dt,
            this.Action = wt,
            this.Slots = Ct,
            this._components = o,
            this._actions = l,
            this.instance = e,
            this.reuseComponents = this.reuseComponents.bind(this),
            this.onDestroy = this.onDestroy.bind(this),
            this.onChange = this.onChange.bind(this),
            this.update = this.update.bind(this),
            this.destroyComponent = this.destroyComponent.bind(this);
            for (const t in u)
                this[t] = u[t].bind(this);
            this.name = s,
            this.Actions = new p(e)
        }
        static addMethod(t, e) {
            u[t] = e
        }
        onDestroy(t) {
            this.destroyable.push(t)
        }
        onChange(t) {
            this.onChangeFunctions.push(t)
        }
        update(t) {
            return this.updateTemplate(t)
        }
        reuseComponents(t, e, i, n, s=!0, o=!1) {
            const r = []
              , a = t.length
              , l = e.length;
            let c = !1;
            !s || void 0 !== e && 0 !== e.length || (c = !0);
            let d = 0;
            if (a < l) {
                let s = l - a;
                for (; s; ) {
                    const o = e[l - s]
                      , a = this.createComponent(n, i(o));
                    t.push(a),
                    r.push(a),
                    s--
                }
            } else if (a > l) {
                let e = a - l;
                for (s && (c = !0,
                d = a - e); e; ) {
                    const i = a - e;
                    s || (r.push(t[i]),
                    t[i].destroy()),
                    e--
                }
                s || (t.length = l)
            }
            let h = 0;
            o && console.log("modified components", r),
            o && console.log("current components", t),
            o && console.log("data array", e);
            for (const n of t) {
                const t = e[h];
                o && console.log(`reuse components data at '${h}'`, t),
                n && !r.includes(n) && (o && console.log("getProps fn result", i(t)),
                n.change(i(t), {
                    leave: c && h >= d
                })),
                h++
            }
        }
        createComponent(t, e={}) {
            const i = t.name + ":" + s++;
            let n;
            n = new v(i,name);
            const r = new m(i,n,e)
              , a = new g(i,n,t(n, e));
            return o.set(i, a),
            o.get(i).change(e),
            n.debug && (console.groupCollapsed("component created " + i),
            console.log(It({
                props: e,
                components: o.keys(),
                actionsByInstance: l
            })),
            console.trace(),
            console.groupEnd()),
            r
        }
        destroyComponent(t, e) {
            if (e.debug && (console.groupCollapsed(`destroying component ${t}...`),
            console.log(It({
                components: o.keys(),
                actionsByInstance: l
            })),
            console.trace(),
            console.groupEnd()),
            l.has(t))
                for (const e of l.get(t))
                    "function" == typeof e.componentAction.destroy && e.componentAction.destroy(e.element, e.props);
            l.delete(t);
            const i = o.get(t);
            i ? (i.destroy(),
            o.delete(t),
            e.debug && (console.groupCollapsed("component destroyed " + t),
            console.log(It({
                components: o.keys(),
                actionsByInstance: l
            })),
            console.trace(),
            console.groupEnd())) : console.warn(`No component to destroy! [${t}]`)
        }
        executeActions() {
            for (const t of l.values()) {
                for (const e of t)
                    if (void 0 === e.element.vido) {
                        const t = o.get(e.instance);
                        e.isActive = function() {
                            return t && !1 === t.destroyed
                        }
                        ;
                        const i = e.componentAction
                          , n = i.create;
                        if (void 0 !== n) {
                            let t;
                            t = n.prototype && (n.prototype.isAction || n.prototype.update || n.prototype.destroy) || n.isAction ? new n(e.element,e.props) : n(e.element, e.props),
                            void 0 !== t && ("function" == typeof t ? i.destroy = t : ("function" == typeof t.update && (i.update = t.update.bind(t)),
                            "function" == typeof t.destroy && (i.destroy = t.destroy.bind(t))))
                        }
                    } else
                        e.element.vido = e.props,
                        "function" == typeof e.componentAction.update && e.isActive() && e.componentAction.update(e.element, e.props);
                for (const e of t)
                    e.element.vido = e.props
            }
        }
        updateTemplate(t) {
            return t && d.push(t),
            new Promise(t=>{
                const e = ++c
                  , i = this;
                h.then((function() {
                    if (e === c) {
                        c = 0,
                        i.render();
                        for (const t of d)
                            t();
                        d.length = 0,
                        t()
                    }
                }
                ))
            }
            )
        }
        createApp(t) {
            a = t.element;
            const e = this.createComponent(t.component, t.props);
            return r = e.instance,
            this.render(),
            e
        }
        render() {
            const t = o.get(r);
            t ? (E(t.update(), a),
            this.executeActions()) : a && a.remove()
        }
    }
    return new v
}
Rt.prototype.lithtml = W,
Rt.prototype.Action = wt,
Rt.prototype.Directive = e,
Rt.prototype.schedule = Pt,
Rt.prototype.Detach = vt,
Rt.prototype.StyleMap = yt,
Rt.prototype.PointerAction = Dt,
Rt.prototype.asyncAppend = j,
Rt.prototype.asyncReplace = B,
Rt.prototype.cache = X,
Rt.prototype.classMap = q,
Rt.prototype.guard = K,
Rt.prototype.live = pt,
Rt.prototype.ifDefined = tt,
Rt.prototype.repeat = lt,
Rt.prototype.unsafeHTML = ht,
Rt.prototype.until = ft,
Rt.prototype.Slots = Ct;
var At = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function Tt(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
function Ot(t, e, i) {
    return t(i = {
        path: e,
        exports: {},
        require: function(t, e) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == e && i.path)
        }
    }, i.exports),
    i.exports
}
function Lt(t) {
    if (t.__esModule)
        return t;
    var e = Object.defineProperty({}, "__esModule", {
        value: !0
    });
    return Object.keys(t).forEach((function(i) {
        var n = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(e, i, n.get ? n : {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    }
    )),
    e
}
var kt = Ot((function(t, e) {
    t.exports = function() {
        var t = "millisecond"
          , e = "second"
          , i = "minute"
          , n = "hour"
          , s = "day"
          , o = "week"
          , r = "month"
          , a = "quarter"
          , l = "year"
          , c = "date"
          , d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/
          , h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
          , u = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        }
          , f = function(t, e, i) {
            var n = String(t);
            return !n || n.length >= e ? t : "" + Array(e + 1 - n.length).join(i) + t
        }
          , p = {
            s: f,
            z: function(t) {
                var e = -t.utcOffset()
                  , i = Math.abs(e)
                  , n = Math.floor(i / 60)
                  , s = i % 60;
                return (e <= 0 ? "+" : "-") + f(n, 2, "0") + ":" + f(s, 2, "0")
            },
            m: function t(e, i) {
                if (e.date() < i.date())
                    return -t(i, e);
                var n = 12 * (i.year() - e.year()) + (i.month() - e.month())
                  , s = e.clone().add(n, r)
                  , o = i - s < 0
                  , a = e.clone().add(n + (o ? -1 : 1), r);
                return +(-(n + (i - s) / (o ? s - a : a - s)) || 0)
            },
            a: function(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            },
            p: function(d) {
                return {
                    M: r,
                    y: l,
                    w: o,
                    d: s,
                    D: c,
                    h: n,
                    m: i,
                    s: e,
                    ms: t,
                    Q: a
                }[d] || String(d || "").toLowerCase().replace(/s$/, "")
            },
            u: function(t) {
                return void 0 === t
            }
        }
          , m = "en"
          , g = {};
        g[m] = u;
        var v = function(t) {
            return t instanceof x
        }
          , y = function(t, e, i) {
            var n;
            if (!t)
                return m;
            if ("string" == typeof t)
                g[t] && (n = t),
                e && (g[t] = e,
                n = t);
            else {
                var s = t.name;
                g[s] = t,
                n = s
            }
            return !i && n && (m = n),
            n || !i && m
        }
          , w = function(t, e) {
            if (v(t))
                return t.clone();
            var i = "object" == typeof e ? e : {};
            return i.date = t,
            i.args = arguments,
            new x(i)
        }
          , b = p;
        b.l = y,
        b.i = v,
        b.w = function(t, e) {
            return w(t, {
                locale: e.$L,
                utc: e.$u,
                x: e.$x,
                $offset: e.$offset
            })
        }
        ;
        var x = function() {
            function u(t) {
                this.$L = y(t.locale, null, !0),
                this.parse(t)
            }
            var f = u.prototype;
            return f.parse = function(t) {
                this.$d = function(t) {
                    var e = t.date
                      , i = t.utc;
                    if (null === e)
                        return new Date(NaN);
                    if (b.u(e))
                        return new Date;
                    if (e instanceof Date)
                        return new Date(e);
                    if ("string" == typeof e && !/Z$/i.test(e)) {
                        var n = e.match(d);
                        if (n) {
                            var s = n[2] - 1 || 0
                              , o = (n[7] || "0").substring(0, 3);
                            return i ? new Date(Date.UTC(n[1], s, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, o)) : new Date(n[1],s,n[3] || 1,n[4] || 0,n[5] || 0,n[6] || 0,o)
                        }
                    }
                    return new Date(e)
                }(t),
                this.$x = t.x || {},
                this.init()
            }
            ,
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
            }
            ,
            f.$utils = function() {
                return b
            }
            ,
            f.isValid = function() {
                return !("Invalid Date" === this.$d.toString())
            }
            ,
            f.isSame = function(t, e) {
                var i = w(t);
                return this.startOf(e) <= i && i <= this.endOf(e)
            }
            ,
            f.isAfter = function(t, e) {
                return w(t) < this.startOf(e)
            }
            ,
            f.isBefore = function(t, e) {
                return this.endOf(e) < w(t)
            }
            ,
            f.$g = function(t, e, i) {
                return b.u(t) ? this[e] : this.set(i, t)
            }
            ,
            f.unix = function() {
                return Math.floor(this.valueOf() / 1e3)
            }
            ,
            f.valueOf = function() {
                return this.$d.getTime()
            }
            ,
            f.startOf = function(t, a) {
                var d = this
                  , h = !!b.u(a) || a
                  , u = b.p(t)
                  , f = function(t, e) {
                    var i = b.w(d.$u ? Date.UTC(d.$y, e, t) : new Date(d.$y,e,t), d);
                    return h ? i : i.endOf(s)
                }
                  , p = function(t, e) {
                    return b.w(d.toDate()[t].apply(d.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), d)
                }
                  , m = this.$W
                  , g = this.$M
                  , v = this.$D
                  , y = "set" + (this.$u ? "UTC" : "");
                switch (u) {
                case l:
                    return h ? f(1, 0) : f(31, 11);
                case r:
                    return h ? f(1, g) : f(0, g + 1);
                case o:
                    var w = this.$locale().weekStart || 0
                      , x = (m < w ? m + 7 : m) - w;
                    return f(h ? v - x : v + (6 - x), g);
                case s:
                case c:
                    return p(y + "Hours", 0);
                case n:
                    return p(y + "Minutes", 1);
                case i:
                    return p(y + "Seconds", 2);
                case e:
                    return p(y + "Milliseconds", 3);
                default:
                    return this.clone()
                }
            }
            ,
            f.endOf = function(t) {
                return this.startOf(t, !1)
            }
            ,
            f.$set = function(o, a) {
                var d, h = b.p(o), u = "set" + (this.$u ? "UTC" : ""), f = (d = {},
                d[s] = u + "Date",
                d[c] = u + "Date",
                d[r] = u + "Month",
                d[l] = u + "FullYear",
                d[n] = u + "Hours",
                d[i] = u + "Minutes",
                d[e] = u + "Seconds",
                d[t] = u + "Milliseconds",
                d)[h], p = h === s ? this.$D + (a - this.$W) : a;
                if (h === r || h === l) {
                    var m = this.clone().set(c, 1);
                    m.$d[f](p),
                    m.init(),
                    this.$d = m.set(c, Math.min(this.$D, m.daysInMonth())).$d
                } else
                    f && this.$d[f](p);
                return this.init(),
                this
            }
            ,
            f.set = function(t, e) {
                return this.clone().$set(t, e)
            }
            ,
            f.get = function(t) {
                return this[b.p(t)]()
            }
            ,
            f.add = function(t, a) {
                var c, d = this;
                t = Number(t);
                var h = b.p(a)
                  , u = function(e) {
                    var i = w(d);
                    return b.w(i.date(i.date() + Math.round(e * t)), d)
                };
                if (h === r)
                    return this.set(r, this.$M + t);
                if (h === l)
                    return this.set(l, this.$y + t);
                if (h === s)
                    return u(1);
                if (h === o)
                    return u(7);
                var f = (c = {},
                c[i] = 6e4,
                c[n] = 36e5,
                c[e] = 1e3,
                c)[h] || 1
                  , p = this.$d.getTime() + t * f;
                return b.w(p, this)
            }
            ,
            f.subtract = function(t, e) {
                return this.add(-1 * t, e)
            }
            ,
            f.format = function(t) {
                var e = this;
                if (!this.isValid())
                    return "Invalid Date";
                var i = t || "YYYY-MM-DDTHH:mm:ssZ"
                  , n = b.z(this)
                  , s = this.$locale()
                  , o = this.$H
                  , r = this.$m
                  , a = this.$M
                  , l = s.weekdays
                  , c = s.months
                  , d = function(t, n, s, o) {
                    return t && (t[n] || t(e, i)) || s[n].substr(0, o)
                }
                  , u = function(t) {
                    return b.s(o % 12 || 12, t, "0")
                }
                  , f = s.meridiem || function(t, e, i) {
                    var n = t < 12 ? "AM" : "PM";
                    return i ? n.toLowerCase() : n
                }
                  , p = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: a + 1,
                    MM: b.s(a + 1, 2, "0"),
                    MMM: d(s.monthsShort, a, c, 3),
                    MMMM: d(c, a),
                    D: this.$D,
                    DD: b.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: d(s.weekdaysMin, this.$W, l, 2),
                    ddd: d(s.weekdaysShort, this.$W, l, 3),
                    dddd: l[this.$W],
                    H: String(o),
                    HH: b.s(o, 2, "0"),
                    h: u(1),
                    hh: u(2),
                    a: f(o, r, !0),
                    A: f(o, r, !1),
                    m: String(r),
                    mm: b.s(r, 2, "0"),
                    s: String(this.$s),
                    ss: b.s(this.$s, 2, "0"),
                    SSS: b.s(this.$ms, 3, "0"),
                    Z: n
                };
                return i.replace(h, (function(t, e) {
                    return e || p[t] || n.replace(":", "")
                }
                ))
            }
            ,
            f.utcOffset = function() {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }
            ,
            f.diff = function(t, c, d) {
                var h, u = b.p(c), f = w(t), p = 6e4 * (f.utcOffset() - this.utcOffset()), m = this - f, g = b.m(this, f);
                return g = (h = {},
                h[l] = g / 12,
                h[r] = g,
                h[a] = g / 3,
                h[o] = (m - p) / 6048e5,
                h[s] = (m - p) / 864e5,
                h[n] = m / 36e5,
                h[i] = m / 6e4,
                h[e] = m / 1e3,
                h)[u] || m,
                d ? g : b.a(g)
            }
            ,
            f.daysInMonth = function() {
                return this.endOf(r).$D
            }
            ,
            f.$locale = function() {
                return g[this.$L]
            }
            ,
            f.locale = function(t, e) {
                if (!t)
                    return this.$L;
                var i = this.clone()
                  , n = y(t, e, !0);
                return n && (i.$L = n),
                i
            }
            ,
            f.clone = function() {
                return b.w(this.$d, this)
            }
            ,
            f.toDate = function() {
                return new Date(this.valueOf())
            }
            ,
            f.toJSON = function() {
                return this.isValid() ? this.toISOString() : null
            }
            ,
            f.toISOString = function() {
                return this.$d.toISOString()
            }
            ,
            f.toString = function() {
                return this.$d.toUTCString()
            }
            ,
            u
        }()
          , $ = x.prototype;
        return w.prototype = $,
        [["$ms", t], ["$s", e], ["$m", i], ["$H", n], ["$W", s], ["$M", r], ["$y", l], ["$D", c]].forEach((function(t) {
            $[t[1]] = function(e) {
                return this.$g(e, t[0], t[1])
            }
        }
        )),
        w.extend = function(t, e) {
            return t.$i || (t(e, x, w),
            t.$i = !0),
            w
        }
        ,
        w.locale = y,
        w.isDayjs = v,
        w.unix = function(t) {
            return w(1e3 * t)
        }
        ,
        w.en = g[m],
        w.Ls = g,
        w.p = {},
        w
    }()
}
))
  , zt = Ot((function(t, e) {
    t.exports = function(t, e, i) {
        var n = e.prototype;
        i.utc = function(t) {
            return new e({
                date: t,
                utc: !0,
                args: arguments
            })
        }
        ,
        n.utc = function(t) {
            var e = i(this.toDate(), {
                locale: this.$L,
                utc: !0
            });
            return t ? e.add(this.utcOffset(), "minute") : e
        }
        ,
        n.local = function() {
            return i(this.toDate(), {
                locale: this.$L,
                utc: !1
            })
        }
        ;
        var s = n.parse;
        n.parse = function(t) {
            t.utc && (this.$u = !0),
            this.$utils().u(t.$offset) || (this.$offset = t.$offset),
            s.call(this, t)
        }
        ;
        var o = n.init;
        n.init = function() {
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
                o.call(this)
        }
        ;
        var r = n.utcOffset;
        n.utcOffset = function(t, e) {
            var i = this.$utils().u;
            if (i(t))
                return this.$u ? 0 : i(this.$offset) ? r.call(this) : this.$offset;
            var n = Math.abs(t) <= 16 ? 60 * t : t
              , s = this;
            if (e)
                return s.$offset = n,
                s.$u = 0 === t,
                s;
            if (0 !== t) {
                var o = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                (s = this.local().add(n + o, "minute")).$offset = n,
                s.$x.$localOffset = o
            } else
                s = this.utc();
            return s
        }
        ;
        var a = n.format;
        n.format = function(t) {
            var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
            return a.call(this, e)
        }
        ,
        n.valueOf = function() {
            var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || (new Date).getTimezoneOffset());
            return this.$d.valueOf() - 6e4 * t
        }
        ,
        n.isUTC = function() {
            return !!this.$u
        }
        ,
        n.toISOString = function() {
            return this.toDate().toISOString()
        }
        ,
        n.toString = function() {
            return this.toDate().toUTCString()
        }
        ;
        var l = n.toDate;
        n.toDate = function(t) {
            return "s" === t && this.$offset ? i(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this)
        }
        ;
        var c = n.diff;
        n.diff = function(t, e, n) {
            if (t && this.$u === t.$u)
                return c.call(this, t, e, n);
            var s = this.local()
              , o = i(t).local();
            return c.call(s, o, e, n)
        }
    }
}
));
class Nt {
    constructor(t, e) {
        this.utcMode = !1,
        this.state = t,
        this.api = e,
        this.dayjs = kt,
        this.locale = t.get("config.locale"),
        this.utcMode = t.get("config.utcMode"),
        this.resetCurrentDate(),
        this.utcMode && kt.extend(zt),
        kt.locale(this.locale, null, !0)
    }
    resetCurrentDate() {
        const t = kt();
        this.currentDate = {
            timestamp: t.valueOf(),
            second: t.startOf("second"),
            minute: t.startOf("minute"),
            hour: t.startOf("hour"),
            day: t.startOf("day"),
            week: t.startOf("week"),
            month: t.startOf("month"),
            year: t.startOf("year")
        }
    }
    date(t) {
        const e = this.utcMode ? kt.utc : kt;
        return t ? e(t).locale(this.locale.name) : e().locale(this.locale.name)
    }
    addAdditionalSpace(t) {
        if (!t.additionalSpaceAdded && t.additionalSpaces && t.additionalSpaces[t.period]) {
            t.additionalSpaceAdded = !0;
            const e = t.additionalSpaces[t.period];
            e.before && (t.from = this.date(t.from).subtract(e.before, e.period).valueOf()),
            e.after && (t.to = this.date(t.to).add(e.after, e.period).valueOf()),
            t.additionalSpaceAdded = !0
        }
        return t
    }
    recalculateFromTo(t) {
        const e = t.period;
        (t = Object.assign({}, t)).from = +t.from,
        t.to = +t.to,
        t.fromDate = this.date(t.from),
        t.toDate = this.date(t.to).endOf(e);
        let i = Number.MAX_SAFE_INTEGER
          , n = 0;
        const s = this.state.get("config.chart.items");
        if (Object.keys(s).length > 0 && (0 === t.from || 0 === t.to)) {
            for (const t in s) {
                const e = s[t];
                e.time.start < i && e.time.start && (i = e.time.start),
                e.time.end > n && (n = e.time.end)
            }
            0 === t.from && (t.from = this.date(i).startOf(e).valueOf()),
            0 === t.to && (t.to = this.date(n).endOf(e).valueOf()),
            t.fromDate = this.date(t.from),
            t.toDate = this.date(t.to).endOf(e)
        }
        return t.from = t.fromDate.startOf(e).valueOf(),
        t.to = t.toDate.endOf(e).valueOf(),
        t.additionalSpaceAdded || ((t = this.addAdditionalSpace(t)).additionalSpaceAdded = !0),
        t
    }
    getCenter(t) {
        return t.leftGlobal + Math.round((t.rightGlobal - t.leftGlobal) / 2)
    }
    getGlobalOffsetPxFromDates(t, e=this.state.get("$data.chart.time")) {
        const i = t.valueOf();
        if (!e.allDates || 0 === e.allDates.length)
            return -100;
        const n = e.allDates[e.level];
        if (!n)
            return -1;
        let s;
        for (let t = 0, e = n.length; t < e; t++) {
            const e = n[t];
            if (i <= e.rightGlobal) {
                s = e;
                break
            }
        }
        if (s)
            return i < s.leftGlobal ? s.leftPx : s.rightPx - (s.rightGlobal - i) / e.timePerPixel;
        {
            const i = t.valueOf();
            if (i <= e.leftGlobal)
                return 0;
            if (i >= e.rightGlobal)
                return e.totalViewDurationPx
        }
    }
    getViewOffsetPxFromDates(t, e=!0, i=this.state.get("$data.chart.time")) {
        const n = this.getGlobalOffsetPxFromDates(t, i) - i.leftPx;
        return e && this.limitOffsetPxToView(n),
        n
    }
    limitOffsetPxToView(t, e=this.state.get("$data.chart.time")) {
        return t < 0 ? 0 : t > e.width ? e.width : t
    }
    findDateAtOffsetPx(t, e) {
        return e.find(e=>e.leftPx >= t)
    }
    findDateAtTime(t, e) {
        return e.find(e=>e.rightGlobal >= t)
    }
    getTimeFromViewOffsetPx(t, e=this.state.get("config.chart.time"), i=!0) {
        const n = t + e.leftPx
          , s = e.allDates[e.level];
        if (n < 0) {
            let t, i = e.fromDate.subtract(1, e.period), s = 0;
            for (let o = 0; o < 1e3; o++) {
                const o = this.generatePeriodDates({
                    leftDate: i,
                    rightDate: i.add(1, e.period),
                    period: e.period,
                    time: e,
                    level: this.state.get("config.chart.calendarLevels." + e.level),
                    levelIndex: e.level,
                    callOnDate: !0,
                    callOnLevelDates: !1
                });
                if (o.length && (t = o[0],
                s -= t.width,
                s <= n))
                    return t.leftGlobal + (n - s) * e.timePerPixel;
                i = i.subtract(1, e.period).startOf(e.period)
            }
        } else if (n > e.totalViewDurationPx) {
            let t, i, s = e.toDate.startOf("day").add(1, "day"), o = e.rightPx;
            for (let r = 0; r < 1e3; r++) {
                const r = this.generatePeriodDates({
                    leftDate: s,
                    rightDate: s.add(1, e.period),
                    period: e.period,
                    time: e,
                    level: this.state.get("config.chart.calendarLevels." + e.level),
                    levelIndex: e.level,
                    callOnDate: !0,
                    callOnLevelDates: !1
                });
                if (r.length && (t = r[0],
                o += t.width,
                o >= n))
                    return i && (t = i),
                    t.rightGlobal - (o - n) * e.timePerPixel;
                s = s.add(1, e.period).startOf(e.period),
                i = t
            }
        }
        for (let t = 0, o = s.length; t < o; t++) {
            const o = s[t];
            if (o.rightPx >= n) {
                const t = o.rightGlobal - Math.round((o.rightPx - n) * e.timePerPixel);
                return i ? t + 1 : t
            }
        }
        return 0
    }
    calculateScrollPosPxFromTime(t, e, i) {
        if (i || (i = this.state.get("config.scroll.horizontal")),
        !i.maxPosPx)
            return 0;
        e || (e = this.state.get("$data.chart.time"));
        const n = this.findDateAtTime(t, e.allDates[e.level]);
        return Math.round((i.maxPosPx - i.innerSize) * n.leftPercent)
    }
    getCurrentFormatForLevel(t, e) {
        return t.find(t=>+e.zoom <= +t.zoomTo)
    }
    generatePeriodDates({leftDate: t, rightDate: e, period: i, level: n, levelIndex: s, time: o, callOnDate: r, callOnLevelDates: a}) {
        if (!o.timePerPixel)
            return [];
        const l = this.getCurrentFormatForLevel(n, o);
        let c = 0;
        const d = Math.ceil(e.diff(t, i, !0));
        let h = [];
        for (let r = 0; r < d; r++) {
            let r = l.periodIncrement;
            r || (r = 1),
            "function" == typeof r && (r = r({
                currentDates: h,
                leftDate: t,
                rightDate: e,
                period: i,
                level: n,
                levelIndex: s,
                time: o,
                vido: this.api.vido,
                api: this.api
            }));
            const a = t.add(r - 1, i).endOf(i);
            if (a.valueOf() > e.valueOf())
                break;
            const d = {
                leftGlobal: t.valueOf(),
                leftGlobalDate: t,
                rightGlobalDate: a,
                rightGlobal: a.valueOf(),
                width: 0,
                leftPx: 0,
                rightPx: 0,
                period: i,
                formatted: null,
                current: t.valueOf() === this.currentDate[i].valueOf(),
                previous: t.add(1, i).valueOf() === this.currentDate[i].valueOf(),
                next: t.subtract(1, i).valueOf() === this.currentDate[i].valueOf()
            }
              , u = d.rightGlobal - d.leftGlobal;
            d.width = u / o.timePerPixel,
            d.leftPx = c,
            c += d.width,
            d.rightPx = c,
            h.push(d),
            t = t.add(r || 1, i)
        }
        if (r)
            for (let t = 0, e = o.onDate.length; t < e; t++)
                h = h.map(e=>o.onDate[t]({
                    date: e,
                    format: l,
                    time: o,
                    level: n,
                    levelIndex: s
                })).filter(t=>null !== t);
        if (a)
            for (let t = 0, e = o.onLevelDates.length; t < e; t++)
                h = o.onLevelDates[t]({
                    dates: h,
                    format: l,
                    time: o,
                    level: n,
                    levelIndex: s
                });
        return h
    }
    getDatesDiffPx(t, e, i, n=!0) {
        if (t.valueOf() === e.valueOf())
            return 0;
        const s = i.allDates[i.level];
        if (0 === s.length)
            return 0;
        let o = 0
          , r = !1;
        if (e.valueOf() < t.valueOf()) {
            const i = t;
            t = e,
            e = i,
            r = !0
        }
        let a = [];
        if (t.valueOf() < s[0].leftGlobal) {
            const e = s[0].period
              , n = i.level
              , o = this.state.get("config.chart.calendarLevels." + n);
            a = this.generatePeriodDates({
                leftDate: t,
                rightDate: s[0].leftGlobalDate,
                period: e,
                level: o,
                levelIndex: n,
                time: i,
                callOnDate: !0,
                callOnLevelDates: !1
            })
        }
        a = [...a, ...s];
        const l = s[s.length - 1].leftGlobalDate;
        if (e.valueOf() > l.valueOf()) {
            const t = s[0].period
              , n = i.level
              , o = this.state.get("config.chart.calendarLevels." + n)
              , r = this.generatePeriodDates({
                leftDate: e,
                rightDate: l,
                period: t,
                level: o,
                levelIndex: n,
                time: i,
                callOnDate: !0,
                callOnLevelDates: !1
            });
            a = [...a, ...r]
        }
        const c = this.state.get("config.chart.calendarLevels." + i.level)
          , d = this.getCurrentFormatForLevel(c, i);
        for (const t of i.onLevelDates)
            a = t({
                dates: a,
                time: i,
                format: d,
                level: c,
                levelIndex: i.level
            });
        let h, u, f = !1;
        for (h of a) {
            if (h.leftGlobal >= t.valueOf() && (f = !0,
            u = h),
            h.rightGlobal >= e.valueOf())
                break;
            f && (o += h.width)
        }
        if (n) {
            let n = (t.valueOf() - h.leftGlobal) / i.timePerPixel;
            u && (n = (t.valueOf() - u.leftGlobal) / i.timePerPixel);
            const s = (e.valueOf() - h.leftGlobal) / i.timePerPixel - n;
            return r ? -o - s : o + s
        }
        return r ? -o : o
    }
    getLeftViewDate(t=this.state.get("$data.chart.time")) {
        if (!t.levels || !t.levels.length)
            return null;
        const e = t.levels[t.level];
        return e.length ? e[0] : null
    }
    getRightViewDate(t=this.state.get("$data.chart.time")) {
        if (!t.levels || !t.levels.length || !t.levels[t.level])
            return null;
        const e = t.levels[t.level];
        return e.length ? e[e.length - 1] : null
    }
    getLowerPeriod(t) {
        switch (t) {
        case "year":
            return "month";
        case "month":
            return "week";
        case "week":
            return "day";
        case "day":
            return "hour";
        case "hour":
            return "minute";
        case "minute":
            return "second";
        case "second":
            return "millisecond";
        default:
            return t
        }
    }
    getHigherPeriod(t) {
        switch (t) {
        case "month":
            return "year";
        case "week":
            return "month";
        case "day":
            return "week";
        case "hour":
            return "day";
        case "minute":
            return "hour";
        case "second":
            return "minute";
        case "millisecond":
            return "second";
        default:
            return t
        }
    }
}
var Gt = new class {
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
}
;
class Ht extends Ct {
    constructor(t, e, i) {
        super(e, i),
        this.subs = [],
        this.name = t,
        this.subs.push(e.state.subscribe("config.slots." + t, this.setComponents, {
            queue: !0
        }))
    }
    destroy() {
        this.subs.forEach(t=>t()),
        super.destroy()
    }
    getName() {
        return this.name
    }
}
function Et(t, e, i) {
    return new Ht(t,e,i)
}
const Vt = St.mergeDeep
  , Yt = "gstc";
function Wt(t, e="") {
    let i = "gstc__" + t;
    return t === Yt && (i = Yt),
    e ? `${i} ${i}--${e.replace(":", "-")}` : i
}
function jt(t, e) {
    let i = "gstc__" + t;
    return t === Yt && (i = Yt),
    `${i}--${e}`
}
class Bt {
    constructor(t) {
        this.name = Yt,
        this.debug = !1,
        this.plugins = {},
        this.pluginsPositions = new Set,
        this.iconsCache = {},
        this.unsubscribes = [],
        this.mutedMethods = new Set,
        this.generateSlots = Et,
        this.mergeDeep = Vt,
        this.getClass = Wt,
        this.getId = jt,
        this.GSTCID = Gt.GSTCID,
        this.isGSTCID = Gt.isGSTCID,
        this.sourceID = Gt.sourceID,
        this.allActions = [],
        this.state = t,
        this.time = new Nt(this.state,this),
        this.unsubscribes.push(this.state.subscribe("config.debug", t=>this.debug = t)),
        this.debug && (window.state = t)
    }
    getListenerPosition(t) {
        for (const e of this.state.getListeners().values())
            for (const i of e.listeners)
                if (i[1].fn === t)
                    return i[0]
    }
    setVido(t) {
        this.vido = t
    }
    log(...t) {
        this.debug && console.log.call(console, ...t)
    }
    pluginInitialized(t) {
        this.pluginsPositions.add(t)
    }
    pluginDestroyed(t) {
        this.pluginsPositions.delete(t)
    }
    clearPluginsPositions() {
        this.pluginsPositions.clear()
    }
    isPluginInitialized(t) {
        return this.pluginsPositions.has(t)
    }
    getPluginPosition(t) {
        return [...this.pluginsPositions].indexOf(t)
    }
    getPluginsPositions() {
        const t = {};
        let e = 0;
        for (const i of this.pluginsPositions)
            t[i] = e++;
        return t
    }
    isPluginInitializedBefore(t, e) {
        return this.getPluginPosition(t) < this.getPluginPosition(e)
    }
    getActions(t) {
        this.allActions.includes(t) || this.allActions.push(t);
        let e = this.state.get("config.actions." + t);
        return void 0 === e && (e = []),
        e.slice()
    }
    isItemInViewport(t, e, i) {
        if (!e || !i) {
            const t = this.state.get("config.chart.time");
            e = t.leftGlobal,
            i = t.rightGlobal
        }
        return t.time.start <= i && t.time.end >= e
    }
    getChildrenLinkedItemsIds(t, e, i=[]) {
        const n = e[t];
        if (n.linkedWith && n.linkedWith.length) {
            i.includes(t) || i.push(t);
            for (const t of n.linkedWith) {
                if (i.includes(t))
                    continue;
                i.push(t);
                const n = e[t];
                n.linkedWith && n.linkedWith.length && this.getChildrenLinkedItemsIds(t, e, i)
            }
        }
        return i
    }
    collectAllLinkedItems(t, e) {
        for (const i in t) {
            const n = t[i];
            e[n.id].linkedWith = n.linkedWith || []
        }
        const i = [];
        for (const t in e) {
            if (i.includes(t))
                continue;
            const n = this.getChildrenLinkedItemsIds(t, e)
              , s = Array.from(new Set([...e[t].linkedWith, ...n]));
            e[t].linkedWith = [...s.filter(e=>e !== t)],
            i.includes(t) || i.push(t);
            for (const t of s)
                e[t].linkedWith = [...s.filter(e=>e !== t)],
                i.includes(t) || i.push(t)
        }
    }
    getChildrenDependantItemsIds(t, e, i=[]) {
        if (t.dependant && t.dependant.length)
            for (const n of t.dependant) {
                if (i.includes(n))
                    continue;
                i.push(n);
                const s = e[n];
                if (!s)
                    throw new Error(`Dependant item not found [id:'${n}'] found in item [id:'${t.id}']`);
                s.dependant && s.dependant.length && this.getChildrenDependantItemsIds(s, e, i)
            }
        return i
    }
    calculateItemVerticalPosition(t, e=null, i=null) {
        const n = this.getItem(t);
        if (e || (e = this.getItemData(t)),
        i || (i = this.getRowData(n.rowId)),
        n.gap && e || (this.prepareItem(n),
        e = this.getItemData(t)),
        !i)
            return e.position;
        const s = i.position.top + n.gap.top
          , o = e.position.rowTop + n.gap.top;
        let r = i.position.viewTop + e.position.actualRowTop;
        return i.position.viewTop === 1 / 0 ? r = 1 / 0 : -1 === i.position.viewTop && (r = -1),
        e.position.top = s,
        e.position.actualRowTop = o,
        e.position.viewTop = r,
        e.position
    }
    calculateItemHorizontalPosition(t, e=null, i=null, n=this.state.get("$data.chart.time"), s=this.state.get("config.chart.spacing")) {
        const o = this.getItem(t);
        if (e || (e = this.getItemData(t)),
        i || (i = this.getRowData(o.rowId)),
        !i)
            return e.position;
        const r = e.time.startDate.valueOf() === o.time.start ? e.time.startDate : this.time.date(o.time.start)
          , a = e.time.endDate.valueOf() === o.time.end ? e.time.endDate : this.time.date(o.time.end)
          , l = this.time.getViewOffsetPxFromDates(r, !1, n)
          , c = this.time.getViewOffsetPxFromDates(a, !1, n);
        return s = s || 0,
        e.position.left = l,
        e.position.actualLeft = this.time.limitOffsetPxToView(l, n),
        e.position.right = c,
        e.position.actualRight = this.time.limitOffsetPxToView(c, n),
        e.width = c - l - s,
        e.actualWidth = e.position.actualRight - e.position.actualLeft - s,
        e.position
    }
    calculateItemPosition(t, e=null, i=null, n=this.state.get("$data.chart.time"), s=this.state.get("config.chart.spacing")) {
        return this.calculateItemHorizontalPosition(t, e, i, n, s),
        this.calculateItemVerticalPosition(t, e, i),
        e.position
    }
    getItemPosition(t, e=null, i=null, n=this.state.get("$data.chart.time"), s=this.state.get("config.chart.spacing")) {
        return e || (e = this.getItemData(t)),
        0 === e.position.left && 0 === e.position.right && this.calculateItemPosition(t, e, i, n, s),
        e.position
    }
    getRow(t) {
        return this.state.get("config.list.rows." + t)
    }
    getRows(t) {
        if (!t.length)
            return [];
        const e = this.getAllRows()
          , i = [];
        for (const n of t)
            e[n] && i.push(e[n]);
        return i
    }
    getAllRows() {
        return this.state.get("config.list.rows")
    }
    getVisibleRowsId() {
        return this.state.get("$data.list.visibleRows")
    }
    getRowsData() {
        return this.state.get("$data.list.rows")
    }
    setRowsData(t) {
        this.state.update("$data.list.rows", t)
    }
    getRowData(t) {
        return this.state.get("$data.list.rows." + t)
    }
    setRowData(t, e) {
        this.state.update("$data.list.rows." + t, e)
    }
    getItem(t) {
        return this.state.get("config.chart.items." + t)
    }
    getItems(t=[]) {
        const e = []
          , i = this.getAllItems();
        for (const n of t)
            i[n] && e.push(i[n]);
        return e
    }
    getAllItems() {
        return this.state.get("config.chart.items")
    }
    getItemData(t) {
        return this.state.get("$data.chart.items." + t)
    }
    getItemsData() {
        return this.state.get("$data.chart.items")
    }
    setItemData(t, e) {
        this.state.update("$data.chart.items." + t, t=>{
            for (const i in e)
                t[i] = e[i];
            return t
        }
        )
    }
    setItemsData(t) {
        this.state.update("$data.chart.items", t)
    }
    prepareDependantItems(t, e) {
        return this.getChildrenDependantItemsIds(t, e).filter(e=>e !== t.id)
    }
    prepareItem(t, e=this.state.get("config.chart.item.height"), i=this.getItemsData(), n=this.getAllItems()) {
        let s = t.id;
        s = String(s),
        t.id = s,
        i[t.id] || (i[t.id] = {
            actualHeight: 0,
            outerHeight: 0,
            time: null,
            position: {
                left: 0,
                actualLeft: 0,
                right: 0,
                actualRight: 0,
                rowTop: t.rowTop || 0,
                actualRowTop: t.actualRowTop || 0,
                top: 0,
                viewTop: 0
            },
            width: -1,
            actualWidth: -1,
            detached: !1,
            linkedWith: [],
            dependant: this.getChildrenDependantItemsIds(t, n)
        }),
        t.time || console.error("There is something wrong with this item.", t),
        t.time.start = +t.time.start,
        t.time.end = +t.time.end,
        t.id = String(t.id);
        const o = this.state.get("config.chart.item");
        "number" != typeof t.height && (t.height = e),
        i[t.id].time = {
            startDate: this.time.date(t.time.start),
            endDate: this.time.date(t.time.end)
        },
        i[t.id].actualHeight = t.height,
        "number" != typeof t.top && (t.top = 0),
        t.gap || (t.gap = {}),
        "number" != typeof t.gap.top && (t.gap.top = o.gap.top),
        "number" != typeof t.gap.bottom && (t.gap.bottom = o.gap.bottom),
        "number" != typeof t.minWidth && (t.minWidth = o.minWidth),
        i[t.id].outerHeight = i[t.id].actualHeight + t.gap.top + t.gap.bottom,
        i[t.id].position.actualRowTop = i[t.id].position.rowTop + t.gap.top
    }
    prepareItems(t) {
        const e = this.state.get("config.chart.item.height")
          , i = this.getItemsData();
        for (const n in t) {
            const s = t[n];
            this.prepareItem(s, e, i, t)
        }
        return this.collectAllLinkedItems(t, i),
        t
    }
    sortRows(t, e, i={}) {
        if (!t.length)
            return {};
        for (const n of t)
            for (const s of e)
                n.id === s.id && (i[n.id] = n,
                this.sortRows(t, s.children, i));
        return i
    }
    fillEmptyRowValues(t) {
        const e = this.state.get("config.list.row.height")
          , i = this.getRowsData();
        let n = 0;
        for (let s in t) {
            const o = t[s];
            let r = i[s];
            s = String(s),
            o.id = s,
            i[s] || (r = {
                id: o.id,
                parentId: o.parentId,
                parents: [],
                children: [],
                position: {
                    top: 0,
                    topPercent: 0,
                    bottomPercent: 0,
                    viewTop: 0
                },
                items: [],
                actualHeight: 0,
                outerHeight: 0,
                visible: !0,
                inView: !0
            }),
            "number" != typeof o.height && (o.height = e),
            r.actualHeight = o.height,
            "boolean" != typeof o.expanded && (o.expanded = !1),
            r.position.top = n,
            "object" != typeof o.gap && (o.gap = {}),
            "number" != typeof o.gap.top && (o.gap.top = 0),
            "number" != typeof o.gap.bottom && (o.gap.bottom = 0),
            r.outerHeight = r.actualHeight + o.gap.top + o.gap.bottom,
            i[s] = r,
            n += r.outerHeight
        }
        return t
    }
    itemsOnTheSameLevel(t, e) {
        const i = this.getItemData(t.id)
          , n = this.getItemData(e.id)
          , s = i.position.rowTop + i.outerHeight
          , o = n.position.rowTop + n.outerHeight;
        return n.position.rowTop <= i.position.rowTop && o > i.position.rowTop || (n.position.rowTop >= i.position.rowTop && n.position.rowTop < s || n.position.rowTop >= i.position.rowTop && o < s)
    }
    itemsOverlaps(t, e) {
        return !!this.itemsOnTheSameLevel(t, e) && (e.time.start >= t.time.start && e.time.start <= t.time.end || (e.time.end >= t.time.start && e.time.end <= t.time.end || (e.time.start >= t.time.start && e.time.end <= t.time.end || e.time.start <= t.time.start && e.time.end >= t.time.end)))
    }
    itemOverlapsWithOthers(t, e) {
        for (let i = 0, n = e.length; i < n; i++) {
            const n = e[i]
              , s = n.time.start && t.time.start && n.time.end && t.time.end;
            if (t.id !== n.id && this.itemsOverlaps(t, n) && s)
                return n
        }
        return null
    }
    fixOverlappedItems(t) {
        if (this.isMutedMethod("fixOverlapped"))
            return;
        if (0 === t.length)
            return;
        let e = 0;
        for (const i of t) {
            const n = this.getItemData(i.id);
            n.position.rowTop = i.top,
            n.position.actualRowTop = n.position.rowTop + i.gap.top;
            let s = this.itemOverlapsWithOthers(i, t);
            if (e && s) {
                const e = this.getItemData(s.id);
                for (; s = this.itemOverlapsWithOthers(i, t); )
                    n.position.rowTop += e.outerHeight,
                    n.position.actualRowTop = n.position.rowTop + i.gap.top
            }
            e++
        }
    }
    recalculateRowHeight(t, e) {
        if (!e)
            return 0;
        let i = 0;
        const n = this.getItemsData()
          , s = this.getItems(e.items);
        this.fixOverlappedItems(s);
        for (const t of s) {
            const e = n[t.id];
            i = Math.max(i, e.position.rowTop + e.outerHeight)
        }
        return i < t.height && (i = t.height),
        e.actualHeight = i,
        e.outerHeight = e.actualHeight + t.gap.top + t.gap.bottom,
        e.outerHeight
    }
    recalculateRowsHeights(t=Object.keys(this.state.get("config.list.rows"))) {
        let e = 0;
        const i = this.getAllRows()
          , n = this.getRowsData();
        for (const s of t) {
            const t = i[s]
              , o = n[s];
            this.recalculateRowHeight(t, o),
            e += o.outerHeight
        }
        return e
    }
    recalculateRowsPercents(t, e) {
        let i = 0;
        const n = this.getRowsData();
        for (const s of t) {
            const t = n[s];
            e <= 0 ? (t.position.topPercent = 0,
            t.position.bottomPercent = 0) : (t.position.topPercent = i ? i / e : 0,
            t.position.bottomPercent = (i + t.outerHeight) / e),
            i += t.outerHeight
        }
    }
    calculateVisibleRowsHeights() {
        if (this.isMutedMethod("calculateVisibleRowsHeights"))
            return;
        const t = this.state.get("config.scroll.vertical.offset") || 0
          , e = this.state.get("$data.list.visibleRows");
        let i = 0;
        const n = this.getAllRows()
          , s = this.getRowsData();
        for (const t of e)
            i += this.recalculateRowHeight(n[t], s[t]);
        this.debug && console.log("Calculate visible rows height.", {
            height: i,
            rows: n,
            visibleRows: e
        }),
        this.state.update("$data.list.visibleRowsHeight", i + t)
    }
    generateParents(t, e="parentId") {
        const i = {};
        for (const n in t) {
            const s = t[n]
              , o = void 0 !== s[e] && null !== s[e] ? s[e] : "";
            void 0 === i[o] && (i[o] = {}),
            i[o][s.id] = s
        }
        return i
    }
    fastTree(t, e, i=[]) {
        const n = t[e.id];
        if (e.parents = i,
        void 0 === n)
            return e.children = [],
            e;
        "" !== e.id && (i = [...i, e.id]),
        e.children = Object.values(n).map(t=>t.id);
        for (const e in n) {
            const s = n[e];
            this.fastTree(t, s, i)
        }
        return e
    }
    makeRowsTree(t, e) {
        for (const i in t) {
            const n = t[i];
            n.parentId === e.id && e.children.push(this.makeRowsTree(t, {
                id: n.id,
                children: []
            }))
        }
        return e
    }
    makeTreeMap(t, e, i=!1) {
        const n = this.generateParents(e, "rowId");
        for (const e in t) {
            if (!t[e])
                return;
            if (t[e].items.length = 0,
            void 0 !== n[e])
                for (const i of Object.values(n[e]))
                    t[e].items.push(i.id)
        }
        if (!i) {
            const e = this.generateParents(this.getRowsData())
              , i = {
                id: "",
                children: [],
                parents: [],
                items: []
            };
            this.fastTree(e, i);
            const n = this.makeRowsTree(t, {
                id: void 0,
                children: []
            });
            this.state.update("$data.treeMap", n)
        }
    }
    getRowsWithParentsExpanded(t) {
        const e = []
          , i = this.getRowsData();
        t: for (const n in t) {
            if (!i[n] || !i[n].parents)
                return [];
            for (const e of i[n].parents) {
                const i = t[e];
                if (!i || !i.expanded)
                    continue t
            }
            e.push(n)
        }
        return e
    }
    getVisibleRowsAndCalculateViewTop() {
        const t = this.state.get("$data.list.rowsWithParentsExpanded");
        this.debug && console.log("getVisibleRows #1", {
            rowsWithParentsExpanded: t
        });
        const e = []
          , i = this.state.get("config.scroll.vertical");
        let n = this.state.get("$data.innerHeight");
        if (this.debug && console.log("getVisibleRows #2", {
            innerHeight: n
        }),
        !n)
            return [];
        const s = this.getRowsData();
        if (n += i.offset || 0,
        this.debug && console.log("getVisibleRows #3", {
            index: i.dataIndex
        }),
        void 0 === i.dataIndex)
            return [];
        const o = this.state.get("$data.list.rowsIds")
          , r = o.indexOf(i.data.id);
        let a = 0
          , l = 0;
        for (let i = 0, c = o.length; i < c; i++) {
            const c = o[i]
              , d = t.includes(c)
              , h = i >= r && a <= n
              , u = s[c];
            if (!u)
                return [];
            u.inView = h,
            u.visible = d,
            u.position.top = l,
            u.position.viewTop = a,
            i >= r && d && (a += u.outerHeight),
            d && (l += u.outerHeight),
            h && d && e.push(c)
        }
        let c = 0;
        for (let e = r - 1; e >= 0; e--) {
            const i = o[e]
              , n = t.includes(i)
              , r = s[i];
            n && (c += r.outerHeight),
            r.position.viewTop = -c
        }
        return this.state.update("$data.list.rows", s),
        this.debug && console.log("getVisibleRows #4 final", {
            visibleRows: e,
            innerHeight: n
        }),
        e
    }
    getSortableValue(t, e) {
        return "string" == typeof t ? e[t] : "function" == typeof t ? t({
            row: e,
            vido: this.vido
        }) : ""
    }
    sortRowsByColumn(t, e=!0) {
        const i = this.state.get("config.list.sort.compare");
        let n = this.getAllRows();
        if (0 === Object.keys(n).length)
            return n;
        const s = Object.values(n);
        i ? s.sort(i(t)) : s.sort((i,n)=>{
            const s = this.getSortableValue(t.sortable, i)
              , o = this.getSortableValue(t.sortable, n);
            return "number" == typeof s ? e ? s - o : o - s : "string" == typeof s ? e ? s.localeCompare(o) : o.localeCompare(s) : void 0
        }
        );
        const o = this.state.get("$data.treeMap");
        n = this.sortRows(s, o.children),
        this.state.update("config.list.rows", n, {
            data: "sortRowsByColumn"
        }),
        this.setScrollTop(0)
    }
    normalizeMouseWheelEvent(t) {
        let e = t.deltaX || 0
          , i = t.deltaY || 0
          , n = t.deltaZ || 0;
        const s = t.deltaMode
          , o = this.state.get("config.list.rowHeight");
        let r = 1;
        switch (s) {
        case 1:
            o && (r = o);
            break;
        case 2:
            r = window.height
        }
        return e *= r,
        i *= r,
        n *= r,
        {
            x: e,
            y: i,
            z: n,
            event: t
        }
    }
    scrollToTime(t, e=!0, i=this.state.get("$data.chart.time")) {
        if (!i.allDates)
            return 0;
        if (e) {
            t -= this.state.get("$data.chart.dimensions.width") / 2 * i.timePerPixel
        }
        const n = this.time.findDateAtTime(t, i.allDates[i.level])
          , s = i.allDates[i.level].indexOf(n);
        return -1 === s ? 0 : this.setScrollLeft(s, i).posPx
    }
    setScrollLeft(t, e=this.state.get("$data.chart.time"), i, n="scroll") {
        void 0 === t && (t = 0);
        let s = !0;
        void 0 === i && (s = !1,
        i = this.state.multi());
        const o = e.allDates[e.level];
        if (!o)
            return;
        const r = o[t];
        if (!r)
            return;
        let a;
        return i = i.update("config.scroll.horizontal", i=>{
            i.data = Object.assign({}, r);
            const n = e.allDates[e.level].length - i.lastPageCount;
            t > n && (t = n),
            i.dataIndex = t,
            i.posPx = this.time.calculateScrollPosPxFromTime(i.data.leftGlobal, e, i);
            const s = i.maxPosPx - i.innerSize;
            return i.posPx > s && (i.posPx = s),
            a = i,
            i
        }
        ),
        n && (i = i.update("$data.chart.time.recalculateTimesLastReason", n)),
        s ? i : (i.done(),
        a)
    }
    getScrollLeft() {
        return this.state.get("config.scroll.horizontal")
    }
    setScrollTop(t, e=0) {
        void 0 === t && (t = 0);
        const i = this.state.get("$data.list.rowsWithParentsExpanded")
          , n = this.getRows(i);
        if (n[t] || 0 === t || (t = 0),
        !n[t])
            return;
        const s = n[t]
          , o = this.getRowData(s.id);
        this.state.update("config.scroll.vertical", i=>{
            const s = n.length - i.lastPageCount;
            return t + i.lastPageCount > n.length && (t = s),
            t === s && (e = 0),
            i.data = n[t],
            i.offset = e,
            i.posPx = o.position.topPercent * i.maxPosPx + Math.floor(i.scrollArea * (e / i.area)),
            i.dataIndex = t,
            i
        }
        )
    }
    getScrollTop() {
        return this.state.get("config.scroll.vertical")
    }
    getCurrentCalendarLevels() {
        return this.state.get("$data.chart.time.levels")
    }
    getGridCells(t) {
        const e = this.state.get("$data.chart.grid.cells");
        if (!e)
            return [];
        if (void 0 !== t) {
            const i = [];
            for (const n of t)
                i.push(e[n]);
            return i
        }
        const i = [];
        for (const t in e) {
            const n = e[t];
            i.push(n)
        }
        return i
    }
    getAllGridCells() {
        return this.state.get("$data.chart.grid.cells")
    }
    getGridRows(t) {
        const e = this.state.get("$data.chart.grid.rows");
        return void 0 !== t ? e ? Object.values(e).filter(e=>t.includes(e.row.id)) : [] : e ? Object.values(e) : []
    }
    getAllGridRows() {
        return this.state.get("$data.chart.grid.rows")
    }
    getGridCell(t) {
        return this.state.get("$data.chart.grid.cells." + t)
    }
    getGridRow(t) {
        return this.state.get("$data.chart.grid.rows." + t)
    }
    muteMethod(t) {
        this.mutedMethods.add(t)
    }
    unmuteMethod(t) {
        this.mutedMethods.delete(t)
    }
    isMutedMethod(t) {
        return this.mutedMethods.has(t)
    }
    getSVGIconSrc(t) {
        return "string" == typeof this.iconsCache[t] || (this.iconsCache[t] = "data:image/svg+xml;base64," + btoa(t)),
        this.iconsCache[t]
    }
    destroy() {
        for (const t of this.unsubscribes)
            t();
        this.unsubscribes = [],
        this.debug && delete window.state
    }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Ft(t, e, i, n) {
    return new (i || (i = Promise))((function(s, o) {
        function r(t) {
            try {
                l(n.next(t))
            } catch (t) {
                o(t)
            }
        }
        function a(t) {
            try {
                l(n.throw(t))
            } catch (t) {
                o(t)
            }
        }
        function l(t) {
            var e;
            t.done ? s(t.value) : (e = t.value,
            e instanceof i ? e : new i((function(t) {
                t(e)
            }
            ))).then(r, a)
        }
        l((n = n.apply(t, e || [])).next())
    }
    ))
}
function Xt(t, e) {
    const {onDestroy: i, state: n, api: s, html: o, StyleMap: r, Actions: a, update: l, schedule: c} = t
      , d = "scroll-bar";
    let h, u, f, p = "", m = "";
    i(n.subscribe("config.classNames", ()=>{
        h = s.getClass(d),
        u = s.getClass("scroll-bar-inner")
    }
    ));
    const g = "horizontal" === e.type ? "height" : "width"
      , v = "height" === g ? "width" : "height"
      , y = "horizontal" === e.type ? "left" : "top"
      , w = new r({})
      , b = new r({});
    let x = 0
      , $ = !1
      , D = []
      , P = []
      , _ = 0
      , M = 0
      , I = 0
      , S = 0;
    function C() {
        return "vertical" === e.type ? P.length ? s.getRowData(P[P.length - 1]).position.top + s.getRowData(P[P.length - 1]).outerHeight : 0 : D.length ? D[D.length - 1].rightPx : 0
    }
    "horizontal" === e.type && i(n.subscribe("$data.chart.time", ()=>{
        const t = n.get("$data.chart.time");
        if (!t.leftGlobalDate)
            return;
        if (n.get("config.scroll.horizontal").area !== t.scrollWidth && n.update("config.scroll.horizontal.area", t.scrollWidth),
        t.allDates && t.allDates[t.level]) {
            const e = t.allDates[t.level]
              , i = e.find(e=>e.leftGlobal === t.leftGlobal);
            let o = e.indexOf(i);
            const r = n.get("config.scroll.horizontal.lastPageCount");
            o > e.length - r && (o = e.length - r),
            s.setScrollLeft(o, t, void 0, "time")
        }
    }
    ));
    const R = {
        maxPosPx: 0,
        innerSize: 0,
        sub: 0,
        scrollArea: 0
    };
    i(n.subscribeAll("horizontal" === e.type ? ["config.scroll." + e.type, "$data.chart.time"] : ["config.scroll." + e.type, "$data.innerHeight", "$data.list.rowsWithParentsExpanded;", "$data.list.rowsHeight"], (function() {
        const t = n.get("$data.chart.time")
          , i = n.get("config.scroll." + e.type)
          , s = n.get("$data.chart.dimensions.width")
          , o = n.get("$data.innerHeight");
        $ = i.precise,
        f = i.size,
        M = "horizontal" === e.type ? s : o,
        M = M || 0,
        "horizontal" === e.type ? M -= f : M += f,
        M < 0 && (M = 0),
        w.style[g] = f + "px",
        w.style[v] = M + "px",
        "vertical" === e.type && (w.style.top = n.get("config.headerHeight") + "px"),
        b.style[g] = "100%",
        I = M,
        "horizontal" === e.type ? D = t.allDates && t.allDates[t.level] ? t.allDates[t.level] : [] : P = n.get("$data.list.rowsWithParentsExpanded") || [];
        const r = C();
        n.get(`config.scroll.${e.type}.lastPageSize`) && (S = 0,
        r <= I || i.lastPageSize === r ? (I = 0,
        _ = 0) : (M && r ? _ = M * (M / r) : (_ = 0,
        I = 0),
        _ < i.minInnerSize && (S = i.minInnerSize - _,
        _ = i.minInnerSize)),
        b.style[v] = _ + "px",
        x = Math.round(M - S),
        function(t, e, i, n) {
            const s = R.maxPosPx !== t || R.innerSize !== e || R.sub !== i || R.scrollArea !== n;
            return s && (R.maxPosPx = x,
            R.innerSize = e,
            R.sub = i,
            R.scrollArea = n),
            s
        }(x, _, S, M) && n.update("config.scroll." + e.type, t=>(t.maxPosPx = x,
        t.innerSize = _,
        t.sub = S,
        t.scrollArea = M,
        t)),
        l())
    }
    )));
    let A = 0;
    i(n.subscribe(`config.scroll.${e.type}.posPx`, t=>{
        t !== A && (b.style[y] = t + "px",
        A = t,
        l())
    }
    ));
    const T = s.getActions(d);
    T.push(class extends wt {
        constructor(t) {
            super(),
            n.update("$data.elements.scroll-bar--" + e.type, t)
        }
        update() {}
        destroy() {}
    }
    );
    const O = a.create(T, {
        api: s,
        state: n,
        props: e
    })
      , L = [class extends wt {
        constructor(t) {
            super(),
            this.moving = !1,
            this.initialPos = 0,
            this.currentPos = 0,
            this.cumulation = 0,
            this.lastDataIndex = 0,
            this.dataIndex = 0,
            n.update("$data.elements.scroll-bar-inner--" + e.type, t),
            this.bodyClassName = n.get("config.scroll.bodyClassName"),
            this.pointerDown = this.pointerDown.bind(this),
            this.pointerUp = this.pointerUp.bind(this);
            const i = this.pointerMove.bind(this);
            this.pointerMove = c(i),
            this.unsubscribe = n.subscribe("config.scroll." + e.type, this.dataChanged.bind(this)),
            this.destroy = this.destroy.bind(this),
            t.addEventListener("pointerdown", this.pointerDown),
            document.addEventListener("pointermove", this.pointerMove, {
                passive: !0
            }),
            document.addEventListener("pointerup", this.pointerUp)
        }
        destroy(t) {
            this.unsubscribe(),
            t.removeEventListener("pointerdown", this.pointerDown),
            document.removeEventListener("pointermove", this.pointerMove),
            document.removeEventListener("pointerup", this.pointerUp)
        }
        dataChanged() {
            const t = n.get("config.scroll." + e.type)
              , i = t.dataIndex;
            if (this.lastDataIndex = i,
            "horizontal" === e.type && D && D.length) {
                const t = D[i];
                if (!t)
                    return;
                if (this.lastDate && this.lastDate.leftPercent === t.leftPercent)
                    return;
                const e = this.limitPosition(t.leftPercent * (M - S));
                this.currentPos = e,
                l()
            } else if ("vertical" === e.type) {
                const e = P[i]
                  , n = s.getRow(e)
                  , o = s.getRowData(e);
                if (!n)
                    return;
                if (this.lastRow && this.lastRowData.position.topPercent === o.position.topPercent)
                    return;
                const r = Math.round(o.position.topPercent * (M - S));
                this.currentPos = r + t.offset,
                l()
            }
        }
        limitPosition(t) {
            return Math.max(Math.min(t, x), 0)
        }
        pointerDown(t) {
            s.muteMethod("calculateRowsHeight"),
            t.preventDefault(),
            t.stopPropagation(),
            document.body.classList.add(this.bodyClassName),
            this.moving = !0,
            this.initialPos = "horizontal" === e.type ? t.screenX : t.screenY,
            m = " " + s.getClass(d) + "-inner--active",
            p = " " + s.getClass(d) + "--active",
            l()
        }
        pointerUp(t) {
            this.moving && (s.unmuteMethod("calculateRowsHeight"),
            t.preventDefault(),
            t.stopPropagation(),
            document.body.classList.remove(this.bodyClassName)),
            this.moving = !1,
            this.cumulation = 0,
            m = "",
            p = "",
            l()
        }
        pointerMove(t) {
            if (this.moving) {
                t.stopPropagation();
                const i = "horizontal" === e.type ? t.screenX : t.screenY
                  , n = i - this.initialPos;
                this.cumulation += n,
                this.currentPos = this.limitPosition(this.currentPos + n),
                this.initialPos = i;
                const o = this.currentPos / x;
                let r = 0
                  , a = 0;
                if ("horizontal" === e.type)
                    for (let t = D.length; r < t; r++) {
                        if (D[r].leftPercent >= o)
                            break
                    }
                else {
                    let t, e;
                    for (let i = P.length; r < i && (t = s.getRow(P[r]),
                    e = s.getRowData(P[r]),
                    !(e.position.bottomPercent >= o)); r++)
                        ;
                    if (r !== t.length - 1 && $) {
                        const t = o - e.position.topPercent;
                        a = Math.floor(t * C())
                    }
                }
                r || (r = 0),
                this.dataIndex = r,
                "horizontal" === e.type ? (this.lastDate = D[r],
                s.setScrollLeft(r, void 0, void 0, void 0)) : (this.lastRow = s.getRow(P[r]),
                this.lastRowData = s.getRowData(P[r]),
                s.setScrollTop(r, a)),
                r !== this.lastDataIndex && (this.cumulation = 0),
                this.lastDataIndex = r
            }
        }
    }
    ]
      , k = a.create(L, {
        api: s,
        state: n,
        props: e
    })
      , z = s.generateSlots(d, t, e);
    return ()=>z.html("outer", o`
        <div
          data-actions=${O}
          class=${h + " " + h + "--" + e.type + p}
          style=${w}
        >
          ${z.html("inner", o`
              <div
                data-actions=${k}
                class=${u + " " + u + "--" + e.type + m}
                style=${b}
              >
                ${z.html("content")}
              </div>
            `)}
        </div>
      `)
}
function Ut(t, e={}) {
    const {api: i, state: n, onDestroy: s, Actions: o, update: r, reuseComponents: a, html: l, StyleMap: c, cache: d} = t
      , h = "list"
      , u = i.getActions(h);
    let f;
    const p = n.subscribe("config.components.ListColumn", t=>f = t);
    !function() {
        const t = n.get("config.list.expander.icons")
          , e = {};
        for (const n in t) {
            const s = t[n];
            e[n] = i.getSVGIconSrc(s)
        }
        n.update("$data.list.expander.icons", e)
    }(),
    function() {
        const t = {
            open: "",
            close: ""
        }
          , e = n.get("config.list.toggle.icons");
        for (const n in e) {
            const s = e[n];
            t[n] = i.getSVGIconSrc(s)
        }
        n.update("$data.list.toggle.icons", t)
    }();
    const m = i.getClass(h)
      , g = i.generateSlots(h, t, e);
    let v, y;
    s(n.subscribe("config.list", (function() {
        v = n.get("config.list"),
        y = v.columns.percent,
        r()
    }
    )));
    const w = [];
    s(n.subscribe("config.list.columns.data", (function(t) {
        a(w, Object.values(t), t=>({
            column: t
        }), f),
        r()
    }
    )));
    const b = new c({
        height: "",
        "--expander-padding-width": "",
        "--expander-size": ""
    });
    let x;
    function $(t) {
        x || (x = t.clientWidth,
        0 === y && (x = 0),
        n.update("$data.list.width", x))
    }
    s(n.subscribeAll(["$data.height", "config.list.expander"], ()=>{
        const t = n.get("config.list.expander");
        b.style.height = n.get("$data.height") + "px",
        b.style["--expander-padding-width"] = t.padding + "px",
        b.style["--expander-size"] = t.size + "px",
        r()
    }
    )),
    s(()=>{
        w.forEach(t=>t.destroy()),
        p()
    }
    );
    u.push(class {
        constructor(t, e) {
            e.state.update("$data.elements.list", t),
            $(t)
        }
        update(t) {
            return $(t)
        }
    }
    );
    const D = o.create(u, Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    }));
    return ()=>g.html("outer", d(v.columns.percent > 0 ? l`
              <div class=${m} data-actions=${D} style=${b}>
                ${g.html("content", w.map(t=>t.html()))}
              </div>
            ` : ""))
}
class Qt {
    constructor(t, e) {
        let i = !1
          , n = e.state.get("$data.elements.list-columns");
        void 0 === n && (n = [],
        i = !0),
        n.includes(t) || (n.push(t),
        i = !0),
        i && e.state.update("$data.elements.list-columns", n)
    }
    destroy(t, e) {
        e.state.update("$data.elements.list-columns", e=>e.filter(e=>e !== t))
    }
}
function qt(t, e) {
    const {api: i, state: n, onDestroy: s, onChange: o, Actions: r, update: a, createComponent: l, reuseComponents: c, html: d, StyleMap: h} = t
      , u = [];
    let f, p;
    u.push(n.subscribe("config.components.ListColumnRow", t=>f = t)),
    u.push(n.subscribe("config.components.ListColumnHeader", t=>p = t));
    const m = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    })
      , g = "list-column"
      , v = "list-column-rows"
      , y = i.getActions(g)
      , w = i.getActions(v);
    let b, x, $, D;
    const P = new h({
        width: "",
        "--width": ""
    })
      , _ = new h({
        height: ""
    })
      , M = new h({
        "margin-top": "0px"
    })
      , I = i.generateSlots(g, t, e);
    let S;
    function C() {
        const t = n.get("config.list");
        D = t.columns.data[e.column.id].width * t.columns.percent * .01,
        S = D;
        const i = n.get("$data.innerHeight");
        P.style.width = S + "px",
        P.style["--width"] = S + "px",
        _.style.height = i + "px"
    }
    s(n.subscribeAll(["config.list.columns.percent", "config.list.columns.resizer.width", "$data.chart.dimensions.width", "$data.innerHeight", "$data.list.width", "$data.list.visibleRowsHeight"], C, {
        bulk: !0
    }));
    const R = l(p, e);
    s(R.destroy);
    const A = [];
    function T() {
        n.mute(T);
        const t = n.get("$data.list.visibleRows") || []
          , s = i.getRows(t)
          , o = i.getRowsData();
        c(A, s, t=>t && {
            column: e.column,
            row: t,
            rowData: o[t.id],
            width: S
        }, f, !1),
        I.change(e),
        n.unmute(T)
    }
    o(t=>{
        e = t,
        b = i.getClass(g, e.column.id),
        $ = i.getClass("list-column-rows-offset", e.column.id),
        x = i.getClass(v, e.column.id);
        for (const t in e)
            m[t] = e[t];
        C(),
        R.change(e),
        T()
    }
    ),
    s(n.subscribeAll(["$data.list.visibleRows", "$data.list.visibleRowsHeight", "$data.list.rows", "config.list.rows", "config.chart.items.*.height", "config.chart.items.*.rowId", "config.chart.items.*.time"], T, {
        bulk: !0
    })),
    s(n.subscribe("config.scroll.vertical.offset", t=>{
        M.style.transform = `translateY(-${t || 0}px)`,
        a()
    }
    )),
    s(()=>{
        A.forEach(t=>t.destroy()),
        u.forEach(t=>t())
    }
    ),
    y.push(Qt);
    const O = r.create(y, {
        column: e.column,
        state: n,
        api: i
    })
      , L = r.create(w, {
        api: i,
        state: n
    });
    return ()=>{
        const t = d`
      <div class=${$} style=${M}>
        ${I.html("content", A.map(t=>t.html()))}
      </div>
    `
          , e = d`
      <div class=${x} style=${_} data-actions=${L}>
        ${I.html("container-inner", t)}
      </div>
    `;
        return I.html("outer", d`
        <div class=${b} data-actions=${O} style=${P}>
          ${I.html("inner", d` ${R.html()}${I.html("container-outer", e)} `)}
        </div>
      `)
    }
}
function Jt(t, e) {
    const {api: i, state: n, onDestroy: s, onChange: o, Actions: r, update: a, createComponent: l, html: c, StyleMap: d} = t
      , h = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    })
      , u = "list-column-header"
      , f = i.getActions(u)
      , p = [];
    let m;
    p.push(n.subscribe("config.components.ListColumnHeaderResizer", t=>m = t));
    const g = l(m, e);
    let v;
    p.push(n.subscribe("config.components.ListColumnRowExpander", t=>v = t));
    const y = l(v, e);
    s(()=>{
        g.destroy(),
        y.destroy(),
        p.forEach(t=>t())
    }
    );
    const w = i.generateSlots(u, t, e);
    let b, x;
    o(t=>{
        e = t,
        b = i.getClass(u, e.column.id),
        x = i.getClass(u + "-content", e.column.id);
        for (const t in e)
            h[t] = e[t];
        g.change(e),
        y.change(e),
        w.change(t)
    }
    );
    const $ = new d({
        height: "",
        "--height": "",
        "--paddings-count": ""
    });
    s(n.subscribe("config.headerHeight", ()=>{
        const t = n.get("config");
        $.style.height = t.headerHeight + "px",
        $.style["--height"] = t.headerHeight + "px",
        $.style["--paddings-count"] = "1",
        a()
    }
    ));
    const D = r.create(f, h);
    return ()=>w.html("outer", c`
        <div class=${b} style=${$} data-actions=${D}>
          ${w.html("content", e.column.expander ? c`
      <div class=${x}>${y.html()}${g.html(e.column)}</div>
    ` : c` <div class=${x}>${g.html(e.column)}</div> `)}
        </div>
      `)
}
function Kt(t, e) {
    const {api: i, state: n, onDestroy: s, update: o, html: r, Actions: a, onChange: l, PointerAction: c, StyleMap: d, unsafeHTML: h} = t
      , u = "list-column-header-resizer"
      , f = i.getActions(u)
      , p = i.getActions(u + "-dots")
      , m = {
        up: "",
        down: ""
    };
    let g, v, y, w;
    s(n.subscribe("config.list.sort.icons", t=>{
        m.up = i.getSVGIconSrc(t.up),
        m.down = i.getSVGIconSrc(t.down)
    }
    )),
    g = i.getClass(u),
    v = i.getClass(u + "-container"),
    y = i.getClass(u + "-dots"),
    w = i.getClass(u + "-dots-dot");
    const b = i.getClass(u + "-sort-icon");
    let x;
    const $ = new d({});
    let D = !1;
    const P = i.generateSlots(u, t, e);
    let _ = !0;
    function M() {
        if (!e.column)
            return;
        g = i.getClass(u, e.column.id),
        v = i.getClass(u + "-container", e.column.id),
        y = i.getClass(u + "-dots", e.column.id),
        w = i.getClass(u + "-dots-dot", e.column.id),
        _ = !("resizer"in e.column) || e.column.resizer;
        const t = n.get("config.list");
        x = e.column.width * t.columns.percent * .01,
        $.style["--width"] = t.columns.resizer.width + "px",
        D = t.columns.resizer.inRealTime,
        n.update("$data.list.width", x),
        P.change(e),
        o()
    }
    l(t=>{
        e = t,
        M()
    }
    ),
    s(n.subscribeAll(["config.list.columns.percent", "config.list.columns.resizer.width", "config.list.columns.resizer.inRealTime"], M));
    let I = [1, 2, 3, 4, 5, 6, 7, 8];
    s(n.subscribe("config.list.columns.resizer.dots", t=>{
        I = [];
        for (let e = 0; e < t; e++)
            I.push(e);
        o()
    }
    ));
    let S = !0;
    function C() {
        e.column.sortable && (S = !S,
        n.update("config.list.sort", t=>(t.activeColumnId = e.column.id,
        t.asc = S,
        t)))
    }
    let R = !1;
    function A() {
        return e.column.sortable && R ? S ? r` <img src="${m.down}" class=${b} /> ` : r` <img src="${m.up}" class=${b} /> ` : null
    }
    s(n.subscribe("config.list.sort", t=>{
        if (t.activeColumnId === e.column.id)
            return S = t.asc,
            void (R = !0);
        R = !1
    }
    ));
    let T = x;
    const O = {
        column: e.column,
        api: i,
        state: n,
        pointerOptions: {
            axis: "x",
            onMove: function({movementX: t, event: i}) {
                if (!_)
                    return;
                t && (i.preventDefault(),
                i.stopPropagation());
                let s = n.get("config.list.columns.minWidth");
                "number" == typeof e.column.minWidth && (s = e.column.minWidth),
                T += t,
                T < s && (T = s),
                D && n.update(`config.list.columns.data.${e.column.id}.width`, T)
            }
        }
    };
    p.push(c);
    const L = a.create(f, O)
      , k = a.create(p, O);
    return ()=>{
        const i = "function" == typeof e.column.header.content ? e.column.header.content({
            column: e.column,
            vido: t
        }) : e.column.header.content
          , n = r`
      <div class=${v} @click=${C}>
        ${P.html("content", e.column.header.html ? h(e.column.header.html) : i)} ${A()}
      </div>
      <div class=${y} style=${$} data-actions=${k}>
        ${I.map(()=>r` <div class=${w} /> `)}
      </div>
    `
          , s = r`
      <div class=${v} @click=${C}>
        ${P.html("content", e.column.header.html ? h(e.column.header.html) : i)} ${A()}
      </div>
    `;
        return P.html("outer", r`
        <div class=${g} data-actions=${L}>
          ${P.html("container-outer", _ ? n : s)}
        </div>
      `)
    }
}
class Zt {
    constructor(t, e) {
        let i = e.state.get("$data.elements.list-column-rows")
          , n = !1;
        void 0 === i && (n = !0,
        i = []),
        i.includes(t) || (i.push(t),
        n = !0),
        n && e.state.update("$data.elements.list-column-rows", i)
    }
    destroy(t, e) {
        e.state.update("$data.elements.list-column-rows", e=>e.filter(e=>e !== t))
    }
}
function te(t, e) {
    const {api: i, state: n, onDestroy: s, Detach: o, Actions: r, update: a, html: l, createComponent: c, onChange: d, StyleMap: h, unsafeHTML: u} = t
      , f = "list-column-row"
      , p = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    });
    let m = !1;
    const g = new o(()=>m);
    let v;
    s(n.subscribe("config.components.ListColumnRowExpander", t=>v = t));
    const y = new h(e.column.expander ? {
        height: "",
        top: "",
        "--height": "",
        "--expander-padding-width": "",
        "--expander-size": ""
    } : {
        height: "",
        top: "",
        "--height": ""
    },!0)
      , w = c(v, {
        row: e.row
    });
    let b = i.getClass(f)
      , x = i.getClass(f + "-content")
      , $ = i.getClass(f);
    const D = i.generateSlots(f, t, e);
    let P;
    d((function(s, o) {
        var r;
        if (o.leave || !s || void 0 === s.row || void 0 === s.column)
            return m = !0,
            D.change(s, o),
            void a();
        m = !1,
        e = s;
        for (const t in e)
            p[t] = e[t];
        if (!e.column || !e.row || !e.rowData)
            return m = !0,
            D.change(s, o),
            void a();
        if (void 0 === e.column || void 0 === e.row)
            return;
        P = e.column.isHTML ? void 0 === e.row ? null : "function" == typeof e.column.data ? u(e.column.data({
            row: e.row,
            vido: t
        })) : "function" == typeof e.row[e.column.data] ? u(e.row[e.column.data]({
            row: e.row,
            vido: t
        })) : u(e.row[e.column.data]) : void 0 === e.row ? null : "function" == typeof e.column.data ? e.column.data({
            row: e.row,
            vido: t
        }) : "function" == typeof e.row[e.column.data] ? e.row[e.column.data]({
            row: e.row,
            vido: t
        }) : e.row[e.column.data];
        const l = `${e.row.id}-${e.column.id}`;
        b = i.getClass(f, l),
        x = i.getClass(f + "-content", l),
        $ = i.getClass(f);
        const c = n.get("config.list.expander");
        y.setStyle({}),
        y.style.height = e.rowData.outerHeight + "px",
        y.style["--height"] = e.rowData.outerHeight + "px",
        e.column.expander && (y.style["--expander-padding-width"] = c.padding * (e.rowData.parents.length + 1) + "px");
        const d = n.get("config.list.rows");
        for (const t of e.rowData.parents) {
            const e = d[t];
            if ("object" == typeof e.style && "Object" === e.style.constructor.name && "object" == typeof e.style.children) {
                const t = e.style.children;
                for (const e in t)
                    y.style[e] = t[e]
            }
        }
        if ((null === (r = null == e ? void 0 : e.row) || void 0 === r ? void 0 : r.style) && y.setStyle(Object.assign(Object.assign({}, y.style), e.row.style)),
        e.row.classNames) {
            if (Array.isArray(e.row.classNames) && e.row.classNames.length)
                $ = i.getClass(f, l) + " " + e.row.classNames.join(" ");
            else if ("function" == typeof e.row.classNames) {
                const n = e.row.classNames({
                    row: e.row,
                    vido: t
                });
                Array.isArray(n) && n.length && ($ = i.getClass(f, l) + " " + n.join(" "))
            }
        } else
            $ = b;
        w && w.change(e),
        D.change(e, o),
        a()
    }
    )),
    s(()=>{
        w && w.destroy()
    }
    );
    const _ = i.getActions(f);
    _.includes(Zt) || _.push(Zt);
    const M = r.create(_, p);
    return ()=>D.html("outer", l`
        <div detach=${g} class=${$} style=${y} data-actions=${M}>
          ${D.html("inner", l`
              ${e.column.expander ? w.html() : null}
              <div class=${x}>${D.html("content", P)}</div>
            `)}
        </div>
      `)
}
function ee(t, e) {
    const {api: i, state: n, onDestroy: s, Actions: o, html: r, createComponent: a, onChange: l, update: c} = t
      , d = "list-column-row-expander"
      , h = i.getActions(d)
      , u = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    });
    let f, p = i.getClass(d);
    const m = n.subscribe("config.components.ListColumnRowExpanderToggle", t=>f = t)
      , g = a(f, e.row ? {
        row: e.row
    } : {});
    s(()=>{
        g.destroy(),
        m()
    }
    );
    const v = i.generateSlots(d, t, e);
    e.row && l((function(t) {
        e = t,
        p = i.getClass(d, e.row.id);
        for (const t in e)
            u[t] = e[t];
        g.change(e),
        v.change(t),
        c()
    }
    ));
    const y = o.create(h, u);
    return ()=>v.html("outer", r`
        <div class=${p} data-action=${y}>
          ${v.html("content", g.html())}
        </div>
      `)
}
function ie(t, e) {
    const {api: i, state: n, onDestroy: s, Actions: o, update: r, html: a, onChange: l} = t
      , c = "list-column-row-expander-toggle"
      , d = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    })
      , h = i.getActions(c);
    let u, f, p, m;
    u = i.getClass(c),
    f = i.getClass(c + "-child"),
    p = i.getClass(c + "-open"),
    m = i.getClass(c + "-closed");
    let g, v, y, w = !1;
    s(n.subscribe("$data.list.expander.icons", t=>{
        t && (g = t.child,
        v = t.open,
        y = t.closed),
        r()
    }
    ));
    const b = i.generateSlots(c, t, e);
    function x(t) {
        w = t,
        r()
    }
    let $;  //#
    function D() {
        w = !w,
        e.row ? n.update(`config.list.rows.${e.row.id}.expanded`, w) : n.update("config.list.rows", t=>{
            for (const e in t)
                t[e].expanded = w;
            return t
        }
        , {
            only: ["*.expanded"]
        })
    }
    e.row ? (l((function(t) {
        var s;
        e = t,
        u = i.getClass(c, e.row.id),
        f = i.getClass(c + "-child", e.row.id),
        p = i.getClass(c + "-open", e.row.id),
        m = i.getClass(c + "-closed", e.row.id);
        for (const t in e)
            d[t] = e[t];
        $ && $(),
        (null === (s = null == e ? void 0 : e.row) || void 0 === s ? void 0 : s.id) && ($ = n.subscribe(`config.list.rows.${e.row.id}.expanded`, x)),
        b.change(t)
    }
    )),
    s((function() {
        $ && $()
    }
    ))) : s(n.subscribe("config.list.rows.*.expanded", (function(t) {
        for (const e of t)
            if (e.value) {
                w = !0;
                break
            }
        r()
    }
    ), {
        bulk: !0
    }));
    const P = o.create(h, d);
    return ()=>{
        return b.html("outer", a` <div class=${u} data-action=${P} @click=${D}>${b.html("content", g ? 0 === (null === (i = null === (t = e.rowData) || void 0 === t ? void 0 : t.children) || void 0 === i ? void 0 : i.length) ? a` <img width="16" height="16" class=${f} src=${g} /> ` : w ? a` <img width="16" height="16" class=${p} src=${v} /> ` : a` <img width="16" height="16" class=${m} src=${y} /> ` : "")}</div> `);
        var t, i
    }
}
function ne(t, e={}) {
    const {html: i, onDestroy: n, api: s, state: o, update: r, StyleMap: a} = t
      , l = "list-toggle"
      , c = s.getClass(l);
    let d = {
        open: "",
        close: ""
    };
    n(o.subscribe("$data.list.toggle.icons", t=>{
        t && (d = t,
        r())
    }
    ));
    const h = new a({
        top: "0px"
    });
    n(o.subscribe("config.scroll.vertical.offset", t=>{
        h.style.top = (t || 0) + "px"
    }
    ));
    let u = !0;
    n(o.subscribe("config.list.columns.percent", t=>u = 0 !== t));
    let f = !1;
    function p() {
        f = !0
    }
    function m() {
        f && (f = !1,
        o.update("config.list.columns.percent", t=>0 === t ? 100 : 0))
    }
    const g = s.generateSlots(l, t, e);
    return ()=>g.html("outer", i`
        <div class=${c} style=${h} @pointerdown=${p} @pointerup=${m}>
          ${g.html("content", i`
              <img src=${u ? d.close : d.open} />
            `)}
        </div>
      `)
}
function se(t, e={}) {
    const {api: i, state: n, onDestroy: s, Actions: o, html: r, createComponent: a} = t
      , l = "chart"
      , c = [];
    let d, h, u;
    c.push(n.subscribe("config.components.ChartCalendar", t=>d = t)),
    c.push(n.subscribe("config.components.ChartTimeline", t=>h = t)),
    c.push(n.subscribe("config.components.ScrollBar", t=>u = t));
    const f = a(d);
    s(f.destroy);
    const p = a(h);
    s(p.destroy);
    const m = a(u, {
        type: "horizontal"
    });
    s(m.destroy);
    const g = a(u, {
        type: "vertical"
    });
    s(g.destroy),
    s(()=>{
        c.forEach(t=>t())
    }
    );
    const v = i.getClass(l)
      , y = i.getActions(l);
    let w = !1;
    s(n.subscribe("config.chart.time.calculatedZoomMode", t=>w = t));
    const b = {
        handleEvent: function(t) {
            t.type
        },
        passive: !1,
        capture: !1
    };
    let x, $ = 0;
    y.push((function(t) {
        x || (x = new ResizeObserver(()=>{
            const e = t.clientWidth
              , i = t.clientHeight
              , s = e - n.get("config.scroll.horizontal.size");
            $ !== e && ($ = e,
            n.update("$data.chart.dimensions", {
                width: e,
                innerWidth: s,
                height: i
            }))
        }
        ),
        x.observe(t),
        n.update("$data.elements.chart", t))
    }
    )),
    s(()=>{
        x.disconnect()
    }
    );
    const D = o.create(y, {
        api: i,
        state: n
    })
      , P = i.generateSlots(l, t, e);
    return ()=>P.html("outer", r`
        <div class=${v} data-actions=${D} @wheel=${b}>
          ${P.html("content", r`
              ${f.html()}${p.html()}${g.html()}
              ${w ? null : m.html()}
            `)}
        </div>
      `)
}
function oe(t, e) {
    const {api: i, state: n, onDestroy: s, Actions: o, update: r, reuseComponents: a, html: l, StyleMap: c} = t
      , d = "chart-calendar"
      , h = i.getActions(d)
      , u = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    })
      , f = n.get("config.components.ChartCalendarDate")
      , p = i.getClass(d);
    let m;
    const g = new c({
        height: "",
        "--headerHeight": "",
        "margin-left": ""
    });
    s(n.subscribe("config.headerHeight", t=>{
        m = t,
        g.style.height = m + "px",
        g.style["--calendar-height"] = m + "px",
        r()
    }
    ));
    let v = []
      , y = 0;
    s(n.subscribe("$data.chart.time.levels", t=>{
        let e = 0;
        if (t.length !== y) {
            y = t.length,
            v.forEach(t=>t.forEach(t=>t.destroy())),
            v = [];
            for (let t = 0; t < y; t++)
                v.push([])
        }
        for (const n of t) {
            if (!n.length)
                continue;
            let t = "YYYY-MM-DD HH";
            switch (n[0].period) {
            case "day":
                t = "YYYY-MM-DD";
                break;
            case "week":
                t = "YYYY-MM-ww";
                break;
            case "month":
                t = "YYYY-MM";
                break;
            case "year":
                t = "YYYY"
            }
            const s = i.time.date().format(t);
            a(v[e], n, i=>i && {
                level: e,
                date: i,
                currentDate: s,
                currentDateFormat: t
            }, f),
            e++
        }
        r()
    }
    )),
    s(()=>{
        v.forEach(t=>t.forEach(t=>t.destroy()))
    }
    ),
    h.push(t=>{
        n.update("$data.elements.chart-calendar", t)
    }
    );
    const w = o.create(h, u)
      , b = i.generateSlots(d, t, e);
    return ()=>b.html("outer", l`
        <div class=${p} data-actions=${w} style=${g}>
          ${b.html("inner", v.length ? v.map((t,e)=>t && t.length ? l`
                        <div class=${p + "-dates " + p + "-dates--level-" + e}>
                          ${b.html("content", t.map(t=>t.html()))}
                        </div>
                      ` : null) : null)}
        </div>
      `)
}
class ae extends wt {
    constructor(t, e) {
        super(),
        e.state.update("$data.elements.chart-calendar-dates", e=>(void 0 === e && (e = []),
        e.includes(t) || e.push(t),
        e))
    }
}
function le(t, e) {
    const {api: i, state: n, onDestroy: s, Actions: o, update: r, onChange: a, html: l, StyleMap: c, Detach: d} = t
      , h = "chart-calendar-date"
      , u = i.getActions(h)
      , f = i.getClass(h);
    let p, m, g = "";
    s(n.subscribe("config.chart.time", t=>p = t));
    const v = new c({
        width: "0px"
    });
    let y = "";
    function w() {
        if (!e)
            return;
        const t = n.get("config.chart.calendarLevels." + e.level);
        v.style.width = e.date.currentView.width + "px";
        const i = t.find(t=>+p.zoom <= +t.zoomTo);
        g = e.date.current ? " gstc-current" : e.date.next ? " gstc-next" : e.date.previous ? " gstc-previous" : "";
        let s = f + "-content " + f + "-content--" + e.date.period + g;
        i.classNames && Array.isArray(i.classNames) ? (s += " " + i.classNames.join(" "),
        y = " " + i.classNames.join(" ")) : y = "",
        m = l` <div class=${s}>${e.date.formatted}</div> `,
        r()
    }
    let b = !1;
    const x = new d(()=>b)
      , $ = i.generateSlots(h, t, e);
    let D, P, _;
    const M = {
        date: e.date,
        period: e.period,
        api: i,
        state: n
    };
    a((t,i)=>{
        if (i.leave)
            return b = !0,
            $.change(t, i),
            r();
        b = !1,
        P = e.level === p.level,
        _ = P ? f + "--main-date " : f + "--non-main-date ",
        e = t,
        M.date = e.date,
        M.period = e.period,
        D && D(),
        D = n.subscribeAll(["$data.chart.time", "config.chart.calendarLevels"], w, {
            bulk: !0
        }),
        $.change(t, i)
    }
    ),
    s(()=>{
        D()
    }
    ),
    u.includes(ae) || u.push(ae);
    const I = o.create(u, M);
    return ()=>$.html("outer", l`
        <div
          detach=${x}
          class=${f + " " + f + "--" + e.date.period + " " + _ + f + "--level-" + e.level + g + y}
          style=${v}
          data-actions=${I}
        >
          ${$.html("content", m)}
        </div>
      `)
}
function ce(t, e) {
    const {api: i, state: n, onDestroy: s, Action: o, Actions: r, update: a, html: l, createComponent: c, StyleMap: d} = t
      , h = "chart-timeline"
      , u = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    });
    let f, p, m;
    s(n.subscribe("config.components.ChartTimelineGrid", t=>{
        f && f.destroy(),
        f = c(t)
    }
    )),
    s(()=>{
        f && f.destroy()
    }
    ),
    s(n.subscribe("config.components.ChartTimelineItems", t=>{
        p && p.destroy(),
        p = c(t)
    }
    )),
    s(()=>{
        p && p.destroy()
    }
    ),
    s(n.subscribe("config.components.ListToggle", t=>{
        m && m.destroy(),
        m = c(t)
    }
    )),
    s(()=>{
        m && m.destroy()
    }
    );
    const g = i.generateSlots(h, t, e)
      , v = i.getClass(h)
      , y = i.getClass("chart-timeline-inner");
    let w;
    s(n.subscribe("config.list.toggle.display", t=>w = t));
    const b = new d({})
      , x = new d({});
    s(n.subscribeAll(["$data.innerHeight", "config.scroll.vertical.offset", "$data.chart.dimensions.width", "$data.list.visibleRowsHeight", "$data.chart.time.dates.day"], (function() {
        const t = n.get("$data.chart.dimensions.width")
          , e = n.get("$data.list.visibleRowsHeight");
        b.style.height = n.get("$data.innerHeight") + "px",
        b.style["--height"] = b.style.height,
        t ? (b.style.width = t + "px",
        b.style["--width"] = t + "px") : (b.style.width = "0px",
        b.style["--width"] = "0px"),
        x.style.height = e + "px",
        x.style.width = t ? t + "px" : "0px";
        const i = n.get("config.scroll.vertical.offset") || 0;
        x.style.transform = `translateY(-${i}px)`,
        a()
    }
    )));
    let $ = []; //#
    s(n.subscribe("config.actions.chart-timeline", t=>{
        $ = t
    }
    )),
    $.push(class extends o {
        constructor(t) {
            super();
            n.get("$data.elements.chart-timeline") !== t && n.update("$data.elements.chart-timeline", t)
        }
    }
    );
    const D = r.create($, u);
    return ()=>g.html("outer", l`
        <div class=${v} style=${b} data-actions=${D}>
          ${g.html("inner", l`
              <div class=${y} style=${x}>
                ${g.html("content", l` ${f.html()}${p.html()}${w ? m.html() : ""} `)}
              </div>
            `)}
        </div>
      `)
}
class de {
    constructor(t, e) {
        e.state.get("$data.elements.chart-timeline-grid") !== t && e.state.update("$data.elements.chart-timeline-grid", t)
    }
    destroy(t, e) {
        e.state.update("$data.elements", t=>(delete t["chart-timeline-grid"],
        t))
    }
}
function he(t, e) {
    const {api: i, state: n, onDestroy: s, Actions: o, update: r, html: a, reuseComponents: l, StyleMap: c} = t
      , d = "chart-timeline-grid"
      , h = i.getActions(d)
      , u = {
        api: i,
        state: n
    }
      , f = n.get("config.components.ChartTimelineGridRow")
      , p = i.getClass(d);
    let m, g;
    s(n.subscribe("config.chart.grid.cell.onCreate", t=>m = t)),
    s(n.subscribe("config.debug", t=>g = t));
    const v = [];
    let y = {};
    const w = new Map
      , b = new c({})
      , x = [];
    function $() {
        g && console.log("[grid.ts] generateCells");
        const e = n.get("$data.chart.dimensions.width")
          , s = n.get("$data.innerHeight")
          , o = n.get("config.scroll.vertical.offset") || 0
          , r = n.get("$data.chart.time")
          , a = n.get("$data.chart.time.levels." + r.level);
        if (!a || 0 === a.length)
            return void n.update("$data.chart.grid", {
                rows: {},
                cells: {}
            });
        const l = n.get("$data.list.visibleRows");
        b.style.height = s + o + "px",
        b.style.width = e + "px";
        let c = 0;
        y = {};
        const d = i.getAllRows()
          , h = i.getRowsData()
          , u = {};
        for (const n of l) {
            const s = d[n]
              , o = h[n];
            if (s && o) {
                x.length = 0;
                for (const e of a) {
                    let n;
                    w.has(e.leftGlobal) ? n = w.get(e.leftGlobal) : (n = i.time.date(e.leftGlobal).format("YYYY-MM-DDTHH-mm-ss"),
                    w.set(e.leftGlobal, n));
                    const r = {
                        id: s.id + "-" + n,
                        time: e,
                        row: s,
                        rowData: o,
                        top: c,
                        vido: t,
                        content: null
                    };
                    for (const t of m)
                        r.content = t(r);
                    u[r.id] = r,
                    x.push(r.id)
                }
                y[n] = {
                    row: s,
                    rowData: o,
                    cells: x,
                    top: c,
                    width: e
                },
                c += o.outerHeight
            } else
                g && console.warn("generateCells EMPTY ROW", {
                    row: s,
                    rowId: n,
                    visibleRowsId: l,
                    rows: d
                })
        }
        n.update("$data.chart.grid", {
            rows: y,
            cells: u
        })
    }
    s(n.subscribeAll(["$data.list.rowsHeight", "$data.list.visibleRows", "$data.list.visibleRowsHeight", "$data.chart.time.levels", "$data.innerHeight", "$data.chart.dimensions.width"], $)),
    s(n.subscribe("$data.list.rows.*.actualHeight", $, {
        bulk: !0
    })),
    s(n.subscribeAll(["$data.chart.grid", "config.list.rows"], (function() {
        g && console.log("[grid.ts] generate rows components");
        const t = i.getGridRows();
        l(v, t || [], t=>t, f, !1),
        r()
    }
    ))),
    s(()=>{
        v.forEach(t=>t.destroy())
    }
    ),
    h.push(de);
    const D = o.create(h, u)
      , P = i.generateSlots(d, t, e);
    return ()=>P.html("outer", a`
        <div class=${p} data-actions=${D} style=${b}>
          ${P.html("content", v.map(t=>t.html()))}
        </div>
      `)
}
class ue {
    constructor(t, e) {
        let i = !1
          , n = e.state.get("$data.elements.chart-timeline-grid-rows");
        void 0 === n && (n = [],
        i = !0),
        n.includes(t) || (n.push(t),
        i = !0),
        i && e.state.update("$data.elements.chart-timeline-grid-rows", n, {
            only: null
        })
    }
    destroy(t, e) {
        e.state.update("$data.elements.chart-timeline-grid-rows", e=>e.filter(e=>e !== t))
    }
}
function fe(t, e) {
    const {api: i, state: n, onDestroy: s, Detach: o, Actions: r, update: a, html: l, reuseComponents: c, onChange: d, StyleMap: h} = t
      , u = "chart-timeline-grid-row"
      , f = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    });
    let p;
    s(n.subscribe("config.components.ChartTimelineGridRowCell", t=>p = t));
    const m = i.getActions(u);
    let g = i.getClass(u);
    const v = new h({
        width: e.width + "px",
        height: e.row.height + "px"
    },!0);
    let y = !1;
    const w = new o(()=>y)
      , b = i.generateSlots(u, t, e)
      , x = [];
    d((function(t, n) {
        var s;
        if (n.leave || void 0 === t.row)
            return y = !0,
            c(x, [], t=>t, p, !1),
            b.change(t, n),
            void a();
        y = !1,
        e = t,
        g = i.getClass(u, e.row.id);
        const o = i.getGridCells(e.cells);
        c(x, o, t=>t, p, !1),
        v.setStyle({}),
        v.style.height = e.rowData.outerHeight + "px",
        v.style.width = e.width + "px",
        (null === (s = null == e ? void 0 : e.row) || void 0 === s ? void 0 : s.style) && v.setStyle(Object.assign(Object.assign({}, v.style), e.row.style));
        for (const t in e)
            f[t] = e[t];
        b.change(t, n)
    }
    )),
    s((function() {
        x.forEach(t=>t.destroy())
    }
    )),
    -1 === m.indexOf(ue) && m.push(ue);
    const $ = r.create(m, f);
    return ()=>b.html("outer", l`
        <div detach=${w} class=${g} data-actions=${$} style=${v}>
          ${b.html("content", x.map(t=>t.html()))}
        </div>
      `)
}
class pe {
    constructor(t, e) {
        let i = !1
          , n = e.state.get("$data.elements.chart-timeline-grid-row-cells");
        void 0 === n && (n = [],
        i = !0),
        n.includes(t) || (n.push(t),
        i = !0),
        i && e.state.update("$data.elements.chart-timeline-grid-row-cells", n, {
            only: null
        })
    }
    destroy(t, e) {
        e.state.update("$data.elements.chart-timeline-grid-row-cells", e=>e.filter(e=>e !== t), {
            only: [""]
        })
    }
}
function me(t, e) {
    const {api: i, state: n, Detach: s, Actions: o, html: r, onChange: a, StyleMap: l} = t
      , c = "chart-timeline-grid-row-cell"
      , d = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    });
    let h = !1;
    const u = new s(()=>h)
      , f = i.getActions(c)
      , p = i.generateSlots(c, t, e);
    let m;
    function g(t) {
        m = i.getClass(c, e.id),
        t.current && (m += " current")
    }
    g(e.time);
    const v = new l({
        width: "",
        height: ""
    });
    a((function(t, n) {
        var s;
        if (n.leave || void 0 === t.row)
            return h = !0,
            void p.change(t, n);
        h = !1,
        e = t;
        for (const t in e)
            d[t] = e[t];
        if (g(e.time),
        v.setStyle({}),
        !e || !e.row)
            return;
        const o = i.getRowData(e.row.id);
        v.style.width = ((null === (s = null == e ? void 0 : e.time) || void 0 === s ? void 0 : s.width) || 0) + "px",
        v.style.height = ((null == o ? void 0 : o.outerHeight) || 0) + "px",
        e.row.style && v.setStyle(Object.assign(Object.assign({}, v.style), e.row.style)),
        p.change(e, n)
    }
    )),
    f.push(pe);
    const y = o.create(f, d);
    return ()=>p.html("outer", r`
        <div detach=${u} class=${m} data-actions=${y} style=${v}>
          ${p.html("content", e.content)}
        </div>
      `)
}
function ge(t, e={}) {
    const {api: i, state: n, onDestroy: s, Actions: o, update: r, html: a, reuseComponents: l, StyleMap: c} = t
      , d = "chart-timeline-items";
    let h, u;
    s(n.subscribe("config.actions." + d, t=>h = t)),
    s(n.subscribe("config.components.ChartTimelineItemsRow", t=>u = t));
    const f = i.getClass(d)
      , p = new c({},!0);
    let m;
    s(n.subscribeAll(["$data.innerHeight", "$data.chart.dimensions.width", "config.scroll.vertical.offset"], (function() {
        const t = n.get("$data.chart.dimensions.width")
          , e = n.get("$data.innerHeight")
          , i = n.get("config.scroll.vertical.offset") || 0;
        p.style.width = t + "px",
        p.style.height = e + i + "px"
    }
    ))),
    s(n.subscribe("config.debug", t=>m = t));
    const g = [];
    s(n.subscribeAll(["$data.list.visibleRows", "config.list.rows", "config.components.ChartTimelineItemsRow", "config.chart.items", "$data.chart.items.*.actualWidth"], (function t() {
        n.mute(t),
        m && console.log("[items.ts] Updating item & rows components.");
        const e = n.get("$data.list.visibleRows") || []
          , s = i.getRows(e)
          , o = i.getRowsData();
        l(g, s, t=>({
            row: t,
            rowData: o[t.id]
        }), u, !1),
        r(),
        n.unmute(t)
    }
    ), {
        bulk: !0
    })),
    s(()=>{
        g.forEach(t=>t.destroy())
    }
    );
    const v = o.create(h, {
        api: i,
        state: n
    })
      , y = i.generateSlots(d, t, e);
    return ()=>y.html("outer", a`
        <div class=${f} style=${p} data-actions=${v}>
          ${y.html("content", g.map(t=>t.html()))}
        </div>
      `)
}
class ve {
    constructor(t, e) {
        let i = !1
          , n = e.state.get("$data.elements.chart-timeline-items-rows");
        void 0 === n && (n = [],
        i = !0),
        n.includes(t) || (n.push(t),
        i = !0),
        i && e.state.update("$data.elements.chart-timeline-items-rows", n, {
            only: null
        })
    }
    destroy(t, e) {
        e.state.update("$data.elements.chart-timeline-items-rows", e=>e.filter(e=>e !== t))
    }
}
function ye(t, e) {
    const {api: i, state: n, onDestroy: s, Detach: o, Actions: r, update: a, html: l, onChange: c, reuseComponents: d, StyleMap: h} = t
      , u = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    });
    let f;
    s(n.subscribe("config.components.ChartTimelineItemsRowItem", t=>f = t));
    let p = "";
    const m = []
      , g = new h({
        width: "",
        height: ""
    },!0);
    let v = !1;
    const y = new o(()=>v);
    function w(t=e.rowData, i=null) {
        const s = n.get("$data.chart");
        v = !1,
        g.style.width = s.dimensions.width + "px",
        e ? (g.style.height = t.outerHeight + "px",
        g.style["--row-height"] = t.outerHeight + "px",
        a()) : v = !0
    }
    function b(t, e) {
        if (!t || !e)
            return v = !0,
            d(m, [], ()=>null, f, !1),
            a();
        const n = e.items;
        if (void 0 === n)
            return v = !0,
            d(m, [], ()=>null, f, !1),
            w(),
            a();
        const s = i.getItems(n);
        d(m, s, e=>({
            row: t,
            item: e,
            itemData: i.getItemData(e.id)
        }), f, !1),
        w(),
        a()
    }
    const x = "chart-timeline-items-row";
    let $ = i.getClass(x); //#
    const D = i.generateSlots(x, t, e);
    c((function(n, s) {
        if (s.leave || !n || void 0 === n.row)
            return v = !0,
            d(m, [], ()=>null, f, !1),
            D.change(n, s),
            a();
        e = n,
        $ = i.getClass(x, e.row.id);
        for (const t in e)
            u[t] = e[t];
        if (e.row.classNames) {
            if (Array.isArray(e.row.classNames) && e.row.classNames.length)
                p = $ + " " + e.row.classNames.join(" ");
            else if ("function" == typeof e.row.classNames) {
                const i = e.row.classNames({
                    row: e.row,
                    vido: t
                });
                Array.isArray(i) && i.length && (p = $ + " " + i.join(" "))
            }
        } else
            p = $;
        b(e.row, e.rowData),
        D.change(n, s),
        a()
    }
    )),
    s(n.subscribe("$data.chart.dimensions.width", ()=>b(e.row, e.rowData))),
    s(()=>{
        m.forEach(t=>t.destroy())
    }
    );
    const P = i.getActions(x);
    P.push(ve);
    const _ = r.create(P, u);
    return ()=>D.html("outer", l`
        <div detach=${y} class=${p} data-actions=${_} style=${g}>
          ${D.html("content", m.map(t=>t.html()))}
        </div>
      `)
}
class we {
    constructor(t, e) {
        let i = !1
          , n = e.state.get("$data.elements.chart-timeline-items-row-items");
        void 0 === n && (n = [],
        i = !0),
        n.includes(t) || (n.push(t),
        i = !0),
        i && e.state.update("$data.elements.chart-timeline-items-row-items", n, {
            only: null
        })
    }
    destroy(t, e) {
        e.state.update("$data.elements.chart-timeline-items-row-items", e=>e.filter(e=>e !== t))
    }
}
function be(t, e) {
    const {api: i, state: n, onDestroy: s, Detach: o, Actions: r, update: a, html: l, onChange: c, unsafeHTML: d, StyleMap: h} = t;
    let u, f, p;
    s(n.subscribe("config.debug", t=>p = t));
    let m = 0
      , g = 0
      , v = !1
      , y = "";
    const w = new h({
        width: "",
        height: "",
        left: "",
        top: ""
    })
      , b = new h({})
      , x = new h({})
      , $ = {
        item: e.item,
        row: e.row,
        left: m,
        width: g,
        api: i,
        state: n
    }
      , D = "chart-timeline-items-row-item";
    let P, _;
    P = i.getClass(D),
    _ = i.getClass(D + "-label");
    const M = i.generateSlots(D, t, e);
    let I, S = !1;
    function C(s=n.get("$data.chart.time")) {
        var o;
        if (M.change(e, {
            leave: !1
        }),
        v || 0 === s.levels.length || !s.levels[s.level] || 0 === s.levels[s.level].length)
            return S = !0,
            a();
        if (!e.item || !e.itemData)
            return S = !0,
            a();
        "verbose" === p && (console.groupCollapsed("[items-row-item.ts] Update item (before)"),
        console.log({
            id: e.item.id,
            item: e.item
        }),
        console.trace(),
        console.groupEnd());
        const r = e.itemData;
        if (m = r.position.actualLeft,
        g = r.actualWidth,
        e.item.time.end < s.leftGlobal || e.item.time.start > s.rightGlobal || g <= 0)
            return S = !0,
            "verbose" === p && console.log(`[items-row-item.ts] Item ${e.item.id} detached because of time or width.`, {
                itemTime: e.item.time,
                itemWidthPx: g
            }),
            r.detached = S,
            a();
        if (y = P,
        e.item.time.start < s.leftGlobal ? (b.style.display = "flex",
        y += " " + i.getClass(D + "--left-cut", e.row.id + "-" + e.item.id)) : b.style.display = "none",
        r.position.right > s.width ? (x.style.display = "flex",
        y += " " + i.getClass(D + "--right-cut", e.row.id + "-" + e.item.id)) : x.style.display = "none",
        e.item.classNames)
            if (Array.isArray(e.item.classNames) && e.item.classNames.length)
                y += " " + e.item.classNames.join(" ");
            else if ("function" == typeof e.item.classNames) {
                const i = e.item.classNames({
                    item: e.item,
                    vido: t
                });
                Array.isArray(i) && (y += " " + i.join(" "))
            }
        const l = w.style.width
          , c = w.style.left
          , d = w.style.top
          , h = w.style.height;
        w.setStyle({});
        const u = i.isItemInViewport(e.item, s.leftGlobal, s.rightGlobal);
        S = !u,
        r.detached = S,
        u ? (w.style.width = g + "px",
        w.style.left = m + "px",
        w.style.top = r.position.actualRowTop + "px",
        w.style.height = r.actualHeight + "px") : (w.style.width = l,
        w.style.left = c,
        w.style.top = d,
        w.style.height = h),
        (null === (o = null == e ? void 0 : e.item) || void 0 === o ? void 0 : o.style) && w.setStyle(Object.assign(Object.assign({}, w.style), e.item.style)),
        $.left = m,
        $.width = g,
        "verbose" === p && console.log("[items-row-item.ts] Update item (after)", {
            id: e.item.id,
            itemLeftPx: m,
            itemWidthPx: g,
            item: e.item
        }),
        a()
    }
    s(n.subscribe("config.chart.item.cutIcons", t=>{
        I = {
            left: i.getSVGIconSrc(t.left),
            right: i.getSVGIconSrc(t.right)
        }
    }
    ));
    const R = i.getClass(D + "-cut")
      , A = ()=>l`
    <div class=${R} style=${b}>
      <img src="${I.left}" class=${R + "-image"} />
    </div>
  `
      , T = ()=>l`
    <div class=${R} style=${x}>
      <img src="${I.right}" class=${R + "-image"} />
    </div>
  `;
    c((function(t, n) {
        if (n.leave || void 0 === t.row || void 0 === t.item)
            return v = !0,
            S = !0,
            M.change(t, n),
            a();
        S = !1,
        v = !1,
        (e = t).item.id === u && e.row.id === f || (u = e.item.id,
        f = e.row.id,
        P = i.getClass(D, e.row.id + "-" + e.item.id),
        _ = i.getClass(D + "-label", e.row.id + "-" + e.item.id),
        $.item = e.item,
        $.row = e.row),
        C(),
        M.change(t, n)
    }
    ));
    const O = i.getActions(D);
    s(n.subscribe("$data.chart.time", C)),
    O.push(we);
    const L = r.create(O, $)
      , k = new o(()=>S);
    function z() {
        return e.item ? e.item.isHTML ? e.item && e.item.label ? "function" == typeof e.item.label ? d(e.item.label({
            item: e.item,
            vido: t
        })) : d(e.item.label) : null : e.item && e.item.label ? "function" == typeof e.item.label ? e.item.label({
            item: e.item,
            vido: t
        }) : e.item.label : null : null
    }
    function N({className: t, labelClassName: e, detach: i, actions: n, styleMap: s, slots: o, cutterLeft: r, cutterRight: a, getContent: l, vido: c, props: d}) {
        return o.html("outer", c.html`
        <div detach=${i} class=${t} data-actions=${n} style=${s}>
          ${o.html("inner", c.html`
              ${r()}
              <div class=${e}>${o.html("content", l())}</div>
              ${a()}
            `)}
        </div>
      `)
    }
    let G = N;
    return s(n.subscribe("config.templates." + D, t=>{
        G = t || N
    }
    )),
    ()=>G({
        className: y,
        labelClassName: _,
        detach: k,
        actions: L,
        styleMap: w,
        slots: M,
        cutterLeft: A,
        cutterRight: T,
        getContent: z,
        vido: t,
        props: e
    })
}
const xe = ["main", "scroll-bar", "list", "list-column", "list-column-header", "list-column-header-resizer", "list-column-row", "list-column-row-expander", "list-column-row-expander-toggle", "list-toggle", "chart", "chart-calendar", "chart-calendar-date", "chart-timeline", "chart-timeline-grid", "chart-timeline-grid-row", "chart-timeline-grid-row-cell", "chart-timeline-items", "chart-timeline-items-row", "chart-timeline-items-row-item"];
function $e() {
    const t = {};
    return xe.forEach(e=>t[e] = []),
    t
}
function De() {
    const t = {};
    return xe.forEach(e=>t[e] = null),
    t
}
function Pe() {
    const t = {};
    return xe.forEach(e=>{
        t[e] = {
            outer: [],
            inner: [],
            "container-outer": [],
            "container-inner": [],
            content: []
        }
    }
    ),
    t
}
var _e = Ot((function(t, e) {
    function i(t, e) {
        void 0 === e && (e = "*"),
        this.wchar = e,
        this.pattern = t,
        this.segments = [],
        this.starCount = 0,
        this.minLength = 0,
        this.maxLength = 0,
        this.segStartIndex = 0;
        for (var i = 0, n = t.length; i < n; i += 1) {
            var s = t[i];
            s === e && (this.starCount += 1,
            i > this.segStartIndex && this.segments.push(t.substring(this.segStartIndex, i)),
            this.segments.push(s),
            this.segStartIndex = i + 1)
        }
        this.segStartIndex < t.length && this.segments.push(t.substring(this.segStartIndex)),
        this.starCount ? (this.minLength = t.length - this.starCount,
        this.maxLength = 1 / 0) : this.maxLength = this.minLength = t.length
    }
    e.__esModule = !0,
    i.prototype.match = function(t) {
        if (this.pattern === this.wchar)
            return !0;
        if (0 === this.segments.length)
            return this.pattern === t;
        var e = t.length;
        if (e < this.minLength || e > this.maxLength)
            return !1;
        for (var i = this.segments.length - 1, n = t.length - 1, s = !1; ; ) {
            var o = this.segments[i];
            if (i -= 1,
            o === this.wchar)
                s = !0;
            else {
                var r = n + 1 - o.length
                  , a = t.lastIndexOf(o, r);
                if (-1 === a || a > r)
                    return !1;
                if (s)
                    n = a - 1,
                    s = !1;
                else {
                    if (a !== r)
                        return !1;
                    n -= o.length
                }
            }
            if (0 > i)
                break
        }
        return !0
    }
    ,
    e.default = i,
    e.Match = function(t, e, i) {
        if (void 0 === i && (i = "*"),
        t === i)
            return !0;
        for (var n = [], s = 0, o = 0, r = 0, a = 0, l = 0, c = t.length; l < c; l += 1) {
            var d = t[l];
            d === i && (s += 1,
            l > a && n.push(t.substring(a, l)),
            n.push(d),
            a = l + 1)
        }
        if (a < t.length && n.push(t.substring(a)),
        s ? (o = t.length - s,
        r = 1 / 0) : r = o = t.length,
        0 === n.length)
            return t === e;
        var h = e.length;
        if (h < o || h > r)
            return !1;
        for (var u = n.length - 1, f = e.length - 1, p = !1; ; ) {
            var m = n[u];
            if (u -= 1,
            m === i)
                p = !0;
            else {
                var g = f + 1 - m.length
                  , v = e.lastIndexOf(m, g);
                if (-1 === v || v > g)
                    return !1;
                if (p)
                    f = v - 1,
                    p = !1;
                else {
                    if (v !== g)
                        return !1;
                    f -= m.length
                }
            }
            if (0 > u)
                break
        }
        return !0
    }
}
))
  , Me = Ot((function(t, e) {
    var i = At && At.__values || function(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator]
          , i = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && i >= t.length && (t = void 0),
                {
                    value: t && t[i++],
                    done: !t
                }
            }
        }
    }
    ;
    function n(t, e, i, n) {
        void 0 === n && (n = void 0),
        this.obj = t,
        this.delimeter = e,
        this.wildcard = i,
        this.is_match = n
    }
    e.__esModule = !0,
    n.prototype.simpleMatch = function(t, e) {
        if (t === e)
            return !0;
        if (t === this.wildcard)
            return !0;
        if (this.is_match)
            return this.is_match(t, e);
        var i = t.indexOf(this.wildcard);
        if (i > -1) {
            var n = t.substr(i + 1);
            if (0 === i || e.substring(0, i) === t.substring(0, i)) {
                var s = n.length;
                return !(s > 0) || e.substr(-s) === n
            }
        }
        return !1
    }
    ,
    n.prototype.match = function(t, e) {
        return this.is_match ? this.is_match(t, e) : t === e || t === this.wildcard || e === this.wildcard || this.simpleMatch(t, e) || _e.Match(t, e, this.wildcard)
    }
    ,
    n.prototype.handleArray = function(t, e, n, s, o) {
        var r, a;
        void 0 === o && (o = {});
        var l = t.indexOf(this.delimeter, n)
          , c = !1;
        -1 === l && (c = !0,
        l = t.length);
        var d = t.substring(n, l)
          , h = 0;
        try {
            for (var u = i(e), f = u.next(); !f.done; f = u.next()) {
                var p = f.value
                  , m = h.toString()
                  , g = "" === s ? m : s + this.delimeter + h;
                (d === this.wildcard || d === m || this.simpleMatch(d, m)) && (c ? o[g] = p : this.goFurther(t, p, l + 1, g, o)),
                h++
            }
        } catch (t) {
            r = {
                error: t
            }
        } finally {
            try {
                f && !f.done && (a = u.return) && a.call(u)
            } finally {
                if (r)
                    throw r.error
            }
        }
        return o
    }
    ,
    n.prototype.handleObject = function(t, e, i, n, s) {
        void 0 === s && (s = {});
        var o = t.indexOf(this.delimeter, i)
          , r = !1;
        -1 === o && (r = !0,
        o = t.length);
        var a = t.substring(i, o);
        for (var l in e) {
            l = l.toString();
            var c = "" === n ? l : n + this.delimeter + l;
            (a === this.wildcard || a === l || this.simpleMatch(a, l)) && (r ? s[c] = e[l] : this.goFurther(t, e[l], o + 1, c, s))
        }
        return s
    }
    ,
    n.prototype.goFurther = function(t, e, i, n, s) {
        return void 0 === s && (s = {}),
        Array.isArray(e) ? this.handleArray(t, e, i, n, s) : this.handleObject(t, e, i, n, s)
    }
    ,
    n.prototype.get = function(t) {
        return this.goFurther(t, this.obj, 0, "")
    }
    ,
    e.default = n
}
))
  , Ie = Ot((function(t, e) {
    var i = At && At.__values || function(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator]
          , i = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && i >= t.length && (t = void 0),
                {
                    value: t && t[i++],
                    done: !t
                }
            }
        }
    }
    ;
    e.__esModule = !0;
    var n = function() {
        function t() {}
        return t.get = function(t, e, n) {
            var s, o;
            if (void 0 === n && (n = !1),
            e) {
                var r = e;
                try {
                    for (var a = i(t), l = a.next(); !l.done; l = a.next()) {
                        var c = l.value;
                        if (r.hasOwnProperty(c))
                            r = r[c];
                        else {
                            if (!n)
                                return;
                            r[c] = {},
                            r = r[c]
                        }
                    }
                } catch (t) {
                    s = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (o = a.return) && o.call(a)
                    } finally {
                        if (s)
                            throw s.error
                    }
                }
                return r
            }
        }
        ,
        t.set = function(e, i, n) {
            if (n) {
                if (0 !== e.length) {
                    var s = e.slice()
                      , o = s.pop()
                      , r = t.get(s, n, !0);
                    return "object" == typeof r && (r[o] = i),
                    i
                }
                for (var a in i)
                    n[a] = i[a]
            }
        }
        ,
        t
    }();
    e.default = n
}
));
let Se, Ce = 0, Re = null;
function Ae() {
    return null !== Re && Re.buffer === Se.memory.buffer || (Re = new Uint8Array(Se.memory.buffer)),
    Re
}
let Te = new TextEncoder("utf-8");
const Oe = "function" == typeof Te.encodeInto ? function(t, e) {
    return Te.encodeInto(t, e)
}
: function(t, e) {
    const i = Te.encode(t);
    return e.set(i),
    {
        read: t.length,
        written: i.length
    }
}
;
function Le(t, e, i) {
    if (void 0 === i) {
        const i = Te.encode(t)
          , n = e(i.length);
        return Ae().subarray(n, n + i.length).set(i),
        Ce = i.length,
        n
    }
    let n = t.length
      , s = e(n);
    const o = Ae();
    let r = 0;
    for (; r < n; r++) {
        const e = t.charCodeAt(r);
        if (e > 127)
            break;
        o[s + r] = e
    }
    if (r !== n) {
        0 !== r && (t = t.slice(r)),
        s = i(s, n, n = r + 3 * t.length);
        const e = Ae().subarray(s + r, s + n);
        r += Oe(t, e).written
    }
    return Ce = r,
    s
}
var ke = Lt(Object.freeze({
    __proto__: null,
    is_match: function(t, e) {
        var i = Le(t, Se.__wbindgen_malloc, Se.__wbindgen_realloc)
          , n = Ce
          , s = Le(e, Se.__wbindgen_malloc, Se.__wbindgen_realloc)
          , o = Ce;
        return 0 !== Se.is_match(i, n, s, o)
    },
    default: async function t(e) {
        ("string" == typeof e || "function" == typeof Request && e instanceof Request || "function" == typeof URL && e instanceof URL) && (e = fetch(e));
        const {instance: i, module: n} = await async function(t, e) {
            if ("function" == typeof Response && t instanceof Response) {
                if ("function" == typeof WebAssembly.instantiateStreaming)
                    try {
                        return await WebAssembly.instantiateStreaming(t, e)
                    } catch (e) {
                        if ("application/wasm" == t.headers.get("Content-Type"))
                            throw e;
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e)
                    }
                const i = await t.arrayBuffer();
                return await WebAssembly.instantiate(i, e)
            }
            {
                const i = await WebAssembly.instantiate(t, e);
                return i instanceof WebAssembly.Instance ? {
                    instance: i,
                    module: t
                } : i
            }
        }(await e, {});
        return Se = i.exports,
        t.__wbindgen_wasm_module = n,
        Se
    }
}))
  , ze = Tt(Ot((function(t, e) {
    var i = At && At.__assign || function() {
        return (i = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var s in e = arguments[i])
                    Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            return t
        }
        ).apply(this, arguments)
    }
      , n = At && At.__awaiter || function(t, e, i, n) {
        return new (i || (i = Promise))((function(s, o) {
            function r(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    o(t)
                }
            }
            function a(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }
            function l(t) {
                t.done ? s(t.value) : new i((function(e) {
                    e(t.value)
                }
                )).then(r, a)
            }
            l((n = n.apply(t, e || [])).next())
        }
        ))
    }
      , s = At && At.__generator || function(t, e) {
        var i, n, s, o, r = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        },
        "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }
        ),
        o;
        function a(o) {
            return function(a) {
                return function(o) {
                    if (i)
                        throw new TypeError("Generator is already executing.");
                    for (; r; )
                        try {
                            if (i = 1,
                            n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n),
                            0) : n.next) && !(s = s.call(n, o[1])).done)
                                return s;
                            switch (n = 0,
                            s && (o = [2 & o[0], s.value]),
                            o[0]) {
                            case 0:
                            case 1:
                                s = o;
                                break;
                            case 4:
                                return r.label++,
                                {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                r.label++,
                                n = o[1],
                                o = [0];
                                continue;
                            case 7:
                                o = r.ops.pop(),
                                r.trys.pop();
                                continue;
                            default:
                                if (!(s = r.trys,
                                (s = s.length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                    r.label = o[1];
                                    break
                                }
                                if (6 === o[0] && r.label < s[1]) {
                                    r.label = s[1],
                                    s = o;
                                    break
                                }
                                if (s && r.label < s[2]) {
                                    r.label = s[2],
                                    r.ops.push(o);
                                    break
                                }
                                s[2] && r.ops.pop(),
                                r.trys.pop();
                                continue
                            }
                            o = e.call(t, r)
                        } catch (t) {
                            o = [6, t],
                            n = 0
                        } finally {
                            i = s = 0
                        }
                    if (5 & o[0])
                        throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, a])
            }
        }
    }
      , o = At && At.__values || function(t) {
        var e = "function" == typeof Symbol && t[Symbol.iterator]
          , i = 0;
        return e ? e.call(t) : {
            next: function() {
                return t && i >= t.length && (t = void 0),
                {
                    value: t && t[i++],
                    done: !t
                }
            }
        }
    }
      , r = At && At.__read || function(t, e) {
        var i = "function" == typeof Symbol && t[Symbol.iterator];
        if (!i)
            return t;
        var n, s, o = i.call(t), r = [];
        try {
            for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
                r.push(n.value)
        } catch (t) {
            s = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (i = o.return) && i.call(o)
            } finally {
                if (s)
                    throw s.error
            }
        }
        return r
    }
      , a = At && At.__spread || function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t = t.concat(r(arguments[e]));
        return t
    }
    ;
    function l(t, e) {
        console.debug(t, e)
    }
    e.__esModule = !0;
    var c = {
        bulk: !1,
        debug: !1,
        source: "",
        data: void 0,
        queue: !1
    }
      , d = {
        only: [],
        source: "",
        debug: !1,
        data: void 0,
        queue: !1,
        force: !1
    }
      , h = function() {
        function t(t, e) {
            void 0 === t && (t = {}),
            void 0 === e && (e = {}),
            this.jobsRunning = 0,
            this.updateQueue = [],
            this.subscribeQueue = [],
            this.listenersIgnoreCache = new WeakMap,
            this.destroyed = !1,
            this.queueRuns = 0,
            this.lastExecs = new WeakMap,
            this.listeners = new Map,
            this.waitingListeners = new Map,
            this.data = t,
            this.options = i({}, {
                delimiter: ".",
                debug: !1,
                extraDebug: !1,
                useMute: !0,
                notRecursive: ";",
                param: ":",
                wildcard: "*",
                experimentalMatch: !1,
                queue: !1,
                maxSimultaneousJobs: 1e3,
                maxQueueRuns: 1e3,
                log: l,
                Promise: Promise
            }, e),
            this.id = 0,
            this.pathGet = Ie.default.get,
            this.pathSet = Ie.default.set,
            e.Promise ? this.resolved = e.Promise.resolve() : this.resolved = Promise.resolve(),
            this.muted = new Set,
            this.mutedListeners = new Set,
            this.scan = new Me.default(this.data,this.options.delimiter,this.options.wildcard),
            this.destroyed = !1
        }
        return t.prototype.loadWasmMatcher = function(t) {
            return n(this, void 0, void 0, (function() {
                return s(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, ke.default(t)];
                    case 1:
                        return e.sent(),
                        this.is_match = ke.is_match,
                        this.scan = new Me.default(this.data,this.options.delimiter,this.options.wildcard,this.is_match),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        ,
        t.prototype.same = function(t, e) {
            return (["number", "string", "undefined", "boolean"].includes(typeof t) || null === t) && e === t
        }
        ,
        t.prototype.getListeners = function() {
            return this.listeners
        }
        ,
        t.prototype.destroy = function() {
            this.destroyed = !0,
            this.data = void 0,
            this.listeners = new Map,
            this.updateQueue = [],
            this.jobsRunning = 0
        }
        ,
        t.prototype.match = function(t, e, i) {
            return void 0 === i && (i = !0),
            this.is_match ? this.is_match(t, e) : t === e || (t === this.options.wildcard || e === this.options.wildcard || !(!i && this.getIndicesCount(this.options.delimiter, t) < this.getIndicesCount(this.options.delimiter, e)) && this.scan.match(t, e))
        }
        ,
        t.prototype.getIndicesOf = function(t, e) {
            var i = t.length;
            if (0 == i)
                return [];
            for (var n, s = 0, o = []; (n = e.indexOf(t, s)) > -1; )
                o.push(n),
                s = n + i;
            return o
        }
        ,
        t.prototype.getIndicesCount = function(t, e) {
            var i = t.length;
            if (0 == i)
                return 0;
            for (var n, s = 0, o = 0; (n = e.indexOf(t, s)) > -1; )
                o++,
                s = n + i;
            return o
        }
        ,
        t.prototype.cutPath = function(t, e) {
            if ((t = this.cleanNotRecursivePath(t)) === (e = this.cleanNotRecursivePath(e)))
                return t;
            var i = this.getIndicesCount(this.options.delimiter, e)
              , n = this.getIndicesOf(this.options.delimiter, t);
            return t.substr(0, n[i])
        }
        ,
        t.prototype.trimPath = function(t) {
            return (t = this.cleanNotRecursivePath(t)).charAt(0) === this.options.delimiter ? t.substr(1) : t
        }
        ,
        t.prototype.split = function(t) {
            return "" === t ? [] : t.split(this.options.delimiter)
        }
        ,
        t.prototype.isWildcard = function(t) {
            return t.includes(this.options.wildcard) || this.hasParams(t)
        }
        ,
        t.prototype.isNotRecursive = function(t) {
            return t.endsWith(this.options.notRecursive)
        }
        ,
        t.prototype.cleanNotRecursivePath = function(t) {
            return this.isNotRecursive(t) ? t.substring(0, t.length - 1) : t
        }
        ,
        t.prototype.hasParams = function(t) {
            return t.includes(this.options.param)
        }
        ,
        t.prototype.getParamsInfo = function(t) {
            var e, i, n = {
                replaced: "",
                original: t,
                params: {}
            }, s = 0, r = [];
            try {
                for (var a = o(this.split(t)), l = a.next(); !l.done; l = a.next()) {
                    var c = l.value;
                    n.params[s] = {
                        original: c,
                        replaced: "",
                        name: ""
                    };
                    var d = new RegExp("\\" + this.options.param + "([^\\" + this.options.delimiter + "\\" + this.options.param + "]+)","g")
                      , h = d.exec(c);
                    h ? (n.params[s].name = h[1],
                    d.lastIndex = 0,
                    n.params[s].replaced = c.replace(d, this.options.wildcard),
                    r.push(n.params[s].replaced),
                    s++) : (delete n.params[s],
                    r.push(c),
                    s++)
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    l && !l.done && (i = a.return) && i.call(a)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            return n.replaced = r.join(this.options.delimiter),
            n
        }
        ,
        t.prototype.getParams = function(t, e) {
            if (t) {
                var i = this.split(e)
                  , n = {};
                for (var s in t.params) {
                    n[t.params[s].name] = i[s]
                }
                return n
            }
        }
        ,
        t.prototype.waitForAll = function(t, e) {
            var i, n, s = {};
            try {
                for (var r = o(t), a = r.next(); !a.done; a = r.next()) {
                    var l = a.value;
                    s[l] = {
                        dirty: !1
                    },
                    this.hasParams(l) && (s[l].paramsInfo = this.getParamsInfo(l)),
                    s[l].isWildcard = this.isWildcard(l),
                    s[l].isRecursive = !this.isNotRecursive(l)
                }
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    a && !a.done && (n = r.return) && n.call(r)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return this.waitingListeners.set(t, {
                fn: e,
                paths: s
            }),
            e(s),
            function() {
                this.waitingListeners.delete(t)
            }
        }
        ,
        t.prototype.executeWaitingListeners = function(t) {
            var e, i;
            if (!this.destroyed)
                try {
                    for (var n = o(this.waitingListeners.values()), s = n.next(); !s.done; s = n.next()) {
                        var r = s.value
                          , a = r.fn
                          , l = r.paths
                          , c = 0
                          , d = 0;
                        for (var h in l) {
                            var u = l[h]
                              , f = !1;
                            u.isRecursive && (t = this.cutPath(t, h)),
                            u.isWildcard && this.match(h, t) && (f = !0),
                            t === h && (f = !0),
                            f && (u.dirty = !0),
                            u.dirty && c++,
                            d++
                        }
                        c === d && a(l)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (i = n.return) && i.call(n)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
        }
        ,
        t.prototype.subscribeAll = function(t, e, i) {
            var n, s;
            if (void 0 === i && (i = c),
            this.destroyed)
                return function() {}
                ;
            var r = [];
            try {
                for (var a = o(t), l = a.next(); !l.done; l = a.next()) {
                    var d = l.value;
                    r.push(this.subscribe(d, e, i))
                }
            } catch (t) {
                n = {
                    error: t
                }
            } finally {
                try {
                    l && !l.done && (s = a.return) && s.call(a)
                } finally {
                    if (n)
                        throw n.error
                }
            }
            return function() {
                var t, e;
                try {
                    for (var i = o(r), n = i.next(); !n.done; n = i.next()) {
                        (0,
                        n.value)()
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (e = i.return) && e.call(i)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
            }
        }
        ,
        t.prototype.getCleanListenersCollection = function(t) {
            return void 0 === t && (t = {}),
            i({
                listeners: new Map,
                isRecursive: !1,
                isWildcard: !1,
                hasParams: !1,
                match: void 0,
                paramsInfo: void 0,
                path: void 0,
                originalPath: void 0,
                count: 0
            }, t)
        }
        ,
        t.prototype.getCleanListener = function(t, e) {
            return void 0 === e && (e = c),
            {
                fn: t,
                options: i({}, c, e)
            }
        }
        ,
        t.prototype.getListenerCollectionMatch = function(t, e, i) {
            t = this.cleanNotRecursivePath(t);
            var n = this;
            return function(s, o) {
                void 0 === o && (o = !1);
                var r = t;
                return e ? s = n.cutPath(s, t) : r = n.cutPath(n.cleanNotRecursivePath(t), s),
                o && console.log("[getListenerCollectionMatch]", {
                    listenerPath: t,
                    scopedListenerPath: r,
                    path: s,
                    isRecursive: e,
                    isWildcard: i
                }),
                !(!i || !n.match(r, s, e)) || r === s
            }
        }
        ,
        t.prototype.getListenersCollection = function(t, e) {
            if (this.listeners.has(t)) {
                var n = this.listeners.get(t);
                return n.listeners.set(++this.id, e),
                e.id = this.id,
                n
            }
            var s, o = this.hasParams(t);
            o && (s = this.getParamsInfo(t));
            var r = {
                isRecursive: !this.isNotRecursive(t),
                isWildcard: this.isWildcard(t),
                hasParams: o,
                paramsInfo: s,
                originalPath: t,
                path: o ? s.replaced : t
            };
            r.isRecursive || (r.path = this.cleanNotRecursivePath(r.path));
            var a = this.getCleanListenersCollection(i({}, r, {
                match: this.getListenerCollectionMatch(r.path, r.isRecursive, r.isWildcard)
            }));
            return this.id++,
            a.listeners.set(this.id, e),
            e.id = this.id,
            this.listeners.set(r.originalPath, a),
            a
        }
        ,
        t.prototype.subscribe = function(t, e, i, n) {
            if (void 0 === i && (i = c),
            void 0 === n && (n = "subscribe"),
            this.destroyed)
                return function() {}
                ;
            this.jobsRunning++;
            var s = this.getCleanListener(e, i);
            this.listenersIgnoreCache.set(s, {
                truthy: [],
                falsy: []
            });
            var o = this.getListenersCollection(t, s);
            i.debug && console.log(),
            o.count++;
            var r = this.cleanNotRecursivePath(o.path);
            if (o.isWildcard) {
                var a = this.scan.get(r);
                if (i.bulk) {
                    var l = [];
                    for (var d in a)
                        this.isMuted(d) || l.push({
                            path: d,
                            params: this.getParams(o.paramsInfo, d),
                            value: a[d]
                        });
                    this.isMuted(e) || e(l, {
                        type: n,
                        listener: s,
                        listenersCollection: o,
                        path: {
                            listener: t,
                            update: void 0,
                            resolved: void 0
                        },
                        options: i,
                        params: void 0
                    })
                } else
                    for (var d in a)
                        this.isMuted(d) || this.isMuted(e) || e(a[d], {
                            type: n,
                            listener: s,
                            listenersCollection: o,
                            path: {
                                listener: t,
                                update: void 0,
                                resolved: this.cleanNotRecursivePath(d)
                            },
                            params: this.getParams(o.paramsInfo, d),
                            options: i
                        })
            } else
                this.isMuted(r) || this.isMuted(e) || e(this.pathGet(this.split(r), this.data), {
                    type: n,
                    listener: s,
                    listenersCollection: o,
                    path: {
                        listener: t,
                        update: void 0,
                        resolved: this.cleanNotRecursivePath(t)
                    },
                    params: this.getParams(o.paramsInfo, r),
                    options: i
                });
            return this.debugSubscribe(s, o, t),
            this.jobsRunning--,
            this.unsubscribe(t, this.id)
        }
        ,
        t.prototype.unsubscribe = function(t, e) {
            var i = this.listeners
              , n = i.get(t);
            return function() {
                n.listeners.delete(e),
                n.count--,
                0 === n.count && i.delete(t)
            }
        }
        ,
        t.prototype.runQueuedListeners = function() {
            var t = this;
            if (!this.destroyed && 0 !== this.subscribeQueue.length)
                if (0 === this.jobsRunning) {
                    this.queueRuns = 0;
                    for (var e = a(this.subscribeQueue), i = 0, n = e.length; i < n; i++)
                        e[i]();
                    this.subscribeQueue.length = 0
                } else {
                    if (this.queueRuns++,
                    this.queueRuns >= this.options.maxQueueRuns)
                        throw this.queueRuns = 0,
                        new Error("Maximal number of queue runs exhausted.");
                    Promise.resolve().then((function() {
                        return t.runQueuedListeners()
                    }
                    )).catch((function(t) {
                        throw t
                    }
                    ))
                }
        }
        ,
        t.prototype.getQueueNotifyListeners = function(t, e) {
            var n, s, r, a, l = this;
            for (var c in void 0 === e && (e = []),
            t)
                if (!this.isMuted(c)) {
                    var d = t[c]
                      , h = d.single
                      , u = d.bulk
                      , f = function(t) {
                        var i, n, s = !1;
                        try {
                            for (var r = (i = void 0,
                            o(e)), a = r.next(); !a.done; a = r.next()) {
                                if (a.value.id === t.listener.id) {
                                    s = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            i = {
                                error: t
                            }
                        } finally {
                            try {
                                a && !a.done && (n = r.return) && n.call(r)
                            } finally {
                                if (i)
                                    throw i.error
                            }
                        }
                        if (s)
                            return "continue";
                        var l = p.debugTime(t);
                        p.isMuted(t.listener.fn) || (t.listener.options.queue && p.jobsRunning ? p.subscribeQueue.push((function() {
                            t.listener.fn(t.value(), t.eventInfo)
                        }
                        )) : e.push({
                            id: t.listener.id,
                            originalFn: t.listener.fn,
                            fn: function() {
                                t.listener.fn(t.value(), t.eventInfo)
                            }
                        })),
                        p.debugListener(l, t)
                    }
                      , p = this;
                    try {
                        for (var m = (n = void 0,
                        o(h)), g = m.next(); !g.done; g = m.next()) {
                            f(g.value)
                        }
                    } catch (t) {
                        n = {
                            error: t
                        }
                    } finally {
                        try {
                            g && !g.done && (s = m.return) && s.call(m)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                    var v = function(t) {
                        var n, s, r, a, c = !1;
                        try {
                            for (var d = (n = void 0,
                            o(e)), h = d.next(); !h.done; h = d.next()) {
                                if (h.value.id === t.listener.id) {
                                    c = !0;
                                    break
                                }
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (s = d.return) && s.call(d)
                            } finally {
                                if (n)
                                    throw n.error
                            }
                        }
                        if (c)
                            return "continue";
                        var u = y.debugTime(t)
                          , f = [];
                        try {
                            for (var p = (r = void 0,
                            o(t.value)), m = p.next(); !m.done; m = p.next()) {
                                var g = m.value;
                                f.push(i({}, g, {
                                    value: g.value()
                                }))
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                m && !m.done && (a = p.return) && a.call(p)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                        y.isMuted(t.listener.fn) || (t.listener.options.queue && y.jobsRunning ? y.subscribeQueue.push((function() {
                            return !l.jobsRunning && (t.listener.fn(f, t.eventInfo),
                            !0)
                        }
                        )) : e.push({
                            id: t.listener.id,
                            originalFn: t.listener.fn,
                            fn: function() {
                                t.listener.fn(f, t.eventInfo)
                            }
                        })),
                        y.debugListener(u, t)
                    }
                      , y = this;
                    try {
                        for (var w = (r = void 0,
                        o(u)), b = w.next(); !b.done; b = w.next()) {
                            v(b.value)
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            b && !b.done && (a = w.return) && a.call(w)
                        } finally {
                            if (r)
                                throw r.error
                        }
                    }
                }
            return Promise.resolve().then((function() {
                return l.runQueuedListeners()
            }
            )),
            e
        }
        ,
        t.prototype.shouldIgnore = function(t, e) {
            var i, n;
            if (!t.options.ignore)
                return !1;
            try {
                for (var s = o(t.options.ignore), r = s.next(); !r.done; r = s.next()) {
                    var a = r.value;
                    if (e.startsWith(a))
                        return !0;
                    if (this.is_match && this.is_match(a, e))
                        return !0;
                    var l = this.cutPath(e, a);
                    if (this.match(a, l))
                        return !0
                }
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = s.return) && n.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            return !1
        }
        ,
        t.prototype.getSubscribedListeners = function(t, e, n, s, a) {
            var l, c, h = this;
            void 0 === s && (s = "update"),
            void 0 === a && (a = null),
            n = i({}, d, n);
            var u = {}
              , f = function(i, r) {
                var l, c, d, f;
                if (u[i] = {
                    single: [],
                    bulk: [],
                    bulkData: []
                },
                r.match(t)) {
                    var m = r.paramsInfo ? p.getParams(r.paramsInfo, t) : void 0
                      , g = p.cutPath(t, i)
                      , v = r.isRecursive || r.isWildcard ? function() {
                        return h.get(g)
                    }
                    : function() {
                        return e
                    }
                      , y = [{
                        value: v,
                        path: t,
                        params: m
                    }];
                    try {
                        for (var w = (l = void 0,
                        o(r.listeners.values())), b = w.next(); !b.done; b = w.next()) {
                            var x = b.value;
                            p.shouldIgnore(x, t) ? x.options.debug && console.log("[getSubscribedListeners] Listener was not fired because it was ignored.", {
                                listener: x,
                                listenersCollection: r
                            }) : x.options.bulk ? u[i].bulk.push({
                                listener: x,
                                listenersCollection: r,
                                eventInfo: {
                                    type: s,
                                    listener: x,
                                    path: {
                                        listener: i,
                                        update: a || t,
                                        resolved: void 0
                                    },
                                    params: m,
                                    options: n
                                },
                                value: y
                            }) : u[i].single.push({
                                listener: x,
                                listenersCollection: r,
                                eventInfo: {
                                    type: s,
                                    listener: x,
                                    path: {
                                        listener: i,
                                        update: a || t,
                                        resolved: p.cleanNotRecursivePath(t)
                                    },
                                    params: m,
                                    options: n
                                },
                                value: v
                            })
                        }
                    } catch (t) {
                        l = {
                            error: t
                        }
                    } finally {
                        try {
                            b && !b.done && (c = w.return) && c.call(w)
                        } finally {
                            if (l)
                                throw l.error
                        }
                    }
                } else if (p.options.extraDebug) {
                    var $ = !1;
                    try {
                        for (var D = (d = void 0,
                        o(r.listeners.values())), P = D.next(); !P.done; P = D.next()) {
                            (x = P.value).options.debug && ($ = !0,
                            console.log("[getSubscribedListeners] Listener was not fired because there was no match.", {
                                listener: x,
                                listenersCollection: r,
                                updatePath: t
                            }))
                        }
                    } catch (t) {
                        d = {
                            error: t
                        }
                    } finally {
                        try {
                            P && !P.done && (f = D.return) && f.call(D)
                        } finally {
                            if (d)
                                throw d.error
                        }
                    }
                    $ && r.match(t, !0)
                }
            }
              , p = this;
            try {
                for (var m = o(this.listeners), g = m.next(); !g.done; g = m.next()) {
                    var v = r(g.value, 2);
                    f(v[0], v[1])
                }
            } catch (t) {
                l = {
                    error: t
                }
            } finally {
                try {
                    g && !g.done && (c = m.return) && c.call(m)
                } finally {
                    if (l)
                        throw l.error
                }
            }
            return u
        }
        ,
        t.prototype.notifySubscribedListeners = function(t, e, i, n, s) {
            return void 0 === n && (n = "update"),
            void 0 === s && (s = null),
            this.getQueueNotifyListeners(this.getSubscribedListeners(t, e, i, n, s))
        }
        ,
        t.prototype.getNestedListeners = function(t, e, i, n, s) {
            var a, l;
            void 0 === n && (n = "update"),
            void 0 === s && (s = null);
            var c = {}
              , d = function(a, l) {
                var d, u;
                if (!l.isRecursive)
                    return "continue";
                c[a] = {
                    single: [],
                    bulk: []
                };
                var f = h.cutPath(a, t);
                if (h.match(f, t)) {
                    var p = h.trimPath(a.substr(f.length))
                      , m = new Me.default(e,h.options.delimiter,h.options.wildcard).get(p)
                      , g = l.paramsInfo ? h.getParams(l.paramsInfo, t) : void 0
                      , v = []
                      , y = {}
                      , w = function(e) {
                        var d, u, f = function() {
                            return m[e]
                        }, p = [t, e].join(h.options.delimiter);
                        try {
                            for (var w = (d = void 0,
                            o(l.listeners)), b = w.next(); !b.done; b = w.next()) {
                                var x = r(b.value, 2)
                                  , $ = x[0]
                                  , D = x[1]
                                  , P = {
                                    type: n,
                                    listener: D,
                                    listenersCollection: l,
                                    path: {
                                        listener: a,
                                        update: s || t,
                                        resolved: h.cleanNotRecursivePath(p)
                                    },
                                    params: g,
                                    options: i
                                };
                                h.shouldIgnore(D, t) || (D.options.bulk ? (v.push({
                                    value: f,
                                    path: p,
                                    params: g
                                }),
                                y[$] = D) : c[a].single.push({
                                    listener: D,
                                    listenersCollection: l,
                                    eventInfo: P,
                                    value: f
                                }))
                            }
                        } catch (t) {
                            d = {
                                error: t
                            }
                        } finally {
                            try {
                                b && !b.done && (u = w.return) && u.call(w)
                            } finally {
                                if (d)
                                    throw d.error
                            }
                        }
                    };
                    for (var b in m)
                        w(b);
                    for (var x in y) {
                        var $ = y[x]
                          , D = {
                            type: n,
                            listener: $,
                            listenersCollection: l,
                            path: {
                                listener: a,
                                update: t,
                                resolved: void 0
                            },
                            options: i,
                            params: g
                        };
                        c[a].bulk.push({
                            listener: $,
                            listenersCollection: l,
                            eventInfo: D,
                            value: v
                        })
                    }
                } else if (h.options.extraDebug)
                    try {
                        for (var P = (d = void 0,
                        o(l.listeners.values())), _ = P.next(); !_.done; _ = P.next()) {
                            ($ = _.value).options.debug && console.log("[getNestedListeners] Listener was not fired because there was no match.", {
                                listener: $,
                                listenersCollection: l,
                                currentCutPath: f,
                                updatePath: t
                            })
                        }
                    } catch (t) {
                        d = {
                            error: t
                        }
                    } finally {
                        try {
                            _ && !_.done && (u = P.return) && u.call(P)
                        } finally {
                            if (d)
                                throw d.error
                        }
                    }
            }
              , h = this;
            try {
                for (var u = o(this.listeners), f = u.next(); !f.done; f = u.next()) {
                    var p = r(f.value, 2);
                    d(p[0], p[1])
                }
            } catch (t) {
                a = {
                    error: t
                }
            } finally {
                try {
                    f && !f.done && (l = u.return) && l.call(u)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            return c
        }
        ,
        t.prototype.notifyNestedListeners = function(t, e, i, n, s, o) {
            return void 0 === n && (n = "update"),
            void 0 === o && (o = null),
            this.getQueueNotifyListeners(this.getNestedListeners(t, e, i, n, o), s)
        }
        ,
        t.prototype.getNotifyOnlyListeners = function(t, e, i, n, s) {
            var a, l;
            void 0 === n && (n = "update"),
            void 0 === s && (s = null);
            var c = {};
            if ("object" != typeof i.only || !Array.isArray(i.only) || void 0 === i.only[0] || !this.canBeNested(e))
                return c;
            var d = function(a) {
                var l = new Me.default(e,h.options.delimiter,h.options.wildcard).get(a);
                c[a] = {
                    bulk: [],
                    single: []
                };
                var d = function(e) {
                    var d, u, f, p, m = t + h.options.delimiter + e;
                    try {
                        for (var g = (d = void 0,
                        o(h.listeners)), v = g.next(); !v.done; v = g.next()) {
                            var y = r(v.value, 2)
                              , w = y[0]
                              , b = y[1]
                              , x = b.paramsInfo ? h.getParams(b.paramsInfo, m) : void 0;
                            if (h.match(w, m)) {
                                var $ = function() {
                                    return l[e]
                                }
                                  , D = [{
                                    value: $,
                                    path: m,
                                    params: x
                                }]
                                  , P = function(e) {
                                    var o = {
                                        type: n,
                                        listener: e,
                                        listenersCollection: b,
                                        path: {
                                            listener: w,
                                            update: s || t,
                                            resolved: h.cleanNotRecursivePath(m)
                                        },
                                        params: x,
                                        options: i
                                    };
                                    if (h.shouldIgnore(e, t))
                                        return "continue";
                                    e.options.bulk ? c[a].bulk.some((function(t) {
                                        return t.listener === e
                                    }
                                    )) || c[a].bulk.push({
                                        listener: e,
                                        listenersCollection: b,
                                        eventInfo: o,
                                        value: D
                                    }) : c[a].single.push({
                                        listener: e,
                                        listenersCollection: b,
                                        eventInfo: o,
                                        value: $
                                    })
                                };
                                try {
                                    for (var _ = (f = void 0,
                                    o(b.listeners.values())), M = _.next(); !M.done; M = _.next()) {
                                        P(M.value)
                                    }
                                } catch (t) {
                                    f = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        M && !M.done && (p = _.return) && p.call(_)
                                    } finally {
                                        if (f)
                                            throw f.error
                                    }
                                }
                            }
                        }
                    } catch (t) {
                        d = {
                            error: t
                        }
                    } finally {
                        try {
                            v && !v.done && (u = g.return) && u.call(g)
                        } finally {
                            if (d)
                                throw d.error
                        }
                    }
                };
                for (var u in l)
                    d(u)
            }
              , h = this;
            try {
                for (var u = o(i.only), f = u.next(); !f.done; f = u.next()) {
                    d(f.value)
                }
            } catch (t) {
                a = {
                    error: t
                }
            } finally {
                try {
                    f && !f.done && (l = u.return) && l.call(u)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            return c
        }
        ,
        t.prototype.sortAndRunQueue = function(t, e) {
            var i, n;
            t.sort((function(t, e) {
                return t.id - e.id
            }
            )),
            this.options.debug && console.log("[deep-state-observer] queue for " + e, t);
            try {
                for (var s = o(t), r = s.next(); !r.done; r = s.next()) {
                    r.value.fn()
                }
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    r && !r.done && (n = s.return) && n.call(s)
                } finally {
                    if (i)
                        throw i.error
                }
            }
        }
        ,
        t.prototype.notifyOnly = function(t, e, i, n, s) {
            void 0 === n && (n = "update"),
            void 0 === s && (s = "");
            var o = this.getQueueNotifyListeners(this.getNotifyOnlyListeners(t, e, i, n, s));
            this.sortAndRunQueue(o, t)
        }
        ,
        t.prototype.canBeNested = function(t) {
            return "object" == typeof t && null !== t
        }
        ,
        t.prototype.getUpdateValues = function(t, e, i) {
            var n = i;
            return "function" == typeof i && (n = i(this.pathGet(e, this.data))),
            {
                newValue: n,
                oldValue: t
            }
        }
        ,
        t.prototype.wildcardNotify = function(t, e) {
            var i, n, s, r, a = [];
            try {
                for (var l = o(t), c = l.next(); !c.done; c = l.next()) {
                    var d = c.value;
                    this.getQueueNotifyListeners(d, a)
                }
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    c && !c.done && (n = l.return) && n.call(l)
                } finally {
                    if (i)
                        throw i.error
                }
            }
            try {
                for (var h = o(e), u = h.next(); !u.done; u = h.next()) {
                    var f = u.value;
                    this.executeWaitingListeners(f)
                }
            } catch (t) {
                s = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (r = h.return) && r.call(h)
                } finally {
                    if (s)
                        throw s.error
                }
            }
            return this.jobsRunning--,
            a
        }
        ,
        t.prototype.wildcardUpdate = function(t, e, n, s) {
            void 0 === n && (n = d),
            void 0 === s && (s = !1),
            ++this.jobsRunning,
            n = i({}, d, n);
            var o = this.scan.get(t)
              , r = {};
            for (var a in o) {
                var l = this.split(a)
                  , c = this.getUpdateValues(o[a], l, e)
                  , h = c.oldValue
                  , u = c.newValue;
                this.same(u, h) && !n.force || (this.pathSet(l, u, this.data),
                r[a] = u)
            }
            var f = []
              , p = [];
            for (var a in r) {
                u = r[a];
                n.only.length ? f.push(this.getNotifyOnlyListeners(a, u, n, "update", t)) : (f.push(this.getSubscribedListeners(a, u, n, "update", t)),
                this.canBeNested(u) && f.push(this.getNestedListeners(a, u, n, "update", t))),
                n.debug && this.options.log("Wildcard update", {
                    path: a,
                    newValue: u
                }),
                p.push(a)
            }
            if (s) {
                var m = this;
                return function() {
                    var e = m.wildcardNotify(f, p);
                    m.sortAndRunQueue(e, t)
                }
            }
            var g = this.wildcardNotify(f, p);
            this.sortAndRunQueue(g, t)
        }
        ,
        t.prototype.runUpdateQueue = function() {
            if (!this.destroyed)
                for (; this.updateQueue.length && this.updateQueue.length < this.options.maxSimultaneousJobs; ) {
                    var t = this.updateQueue.shift();
                    t.options.queue = !1,
                    this.update(t.updatePath, t.fnOrValue, t.options, t.multi)
                }
        }
        ,
        t.prototype.updateNotify = function(t, e, i) {
            var n = this.notifySubscribedListeners(t, e, i);
            this.canBeNested(e) && this.notifyNestedListeners(t, e, i, "update", n),
            this.sortAndRunQueue(n, t),
            this.executeWaitingListeners(t)
        }
        ,
        t.prototype.updateNotifyOnly = function(t, e, i) {
            this.notifyOnly(t, e, i),
            this.executeWaitingListeners(t)
        }
        ,
        t.prototype.update = function(t, e, n, s) {
            var o = this;
            if (void 0 === n && (n = i({}, d)),
            void 0 === s && (s = !1),
            !this.destroyed) {
                var r = this.jobsRunning;
                if ((this.options.queue || n.queue) && r) {
                    if (r > this.options.maxSimultaneousJobs)
                        throw new Error("Maximal simultaneous jobs limit reached.");
                    this.updateQueue.push({
                        updatePath: t,
                        fnOrValue: e,
                        options: n,
                        multi: s
                    });
                    var a = Promise.resolve().then((function() {
                        o.runUpdateQueue()
                    }
                    ));
                    return s ? function() {
                        return a
                    }
                    : a
                }
                if (this.isWildcard(t))
                    return this.wildcardUpdate(t, e, n, s);
                ++this.jobsRunning;
                var l = this.split(t)
                  , c = this.getUpdateValues(this.pathGet(l, this.data), l, e)
                  , h = c.oldValue
                  , u = c.newValue;
                if (n.debug && this.options.log("Updating " + t + " " + (n.source ? "from " + n.source : ""), {
                    oldValue: h,
                    newValue: u
                }),
                this.same(u, h) && !n.force)
                    return --this.jobsRunning,
                    s ? function() {
                        return u
                    }
                    : u;
                if (this.pathSet(l, u, this.data),
                null === (n = i({}, d, n)).only)
                    return --this.jobsRunning,
                    s ? function() {}
                    : u;
                if (n.only.length) {
                    if (--this.jobsRunning,
                    s) {
                        var f = this;
                        return function() {
                            return f.updateNotifyOnly(t, u, n)
                        }
                    }
                    return this.updateNotifyOnly(t, u, n),
                    u
                }
                if (s) {
                    --this.jobsRunning;
                    var p = this;
                    return function() {
                        return p.updateNotify(t, u, n)
                    }
                }
                return this.updateNotify(t, u, n),
                --this.jobsRunning,
                u
            }
        }
        ,
        t.prototype.multi = function() {
            if (this.destroyed)
                return {
                    update: function() {},
                    done: function() {}
                };
            var t = this
              , e = [];
            return {
                update: function(i, n, s) {
                    return void 0 === s && (s = d),
                    e.push(t.update(i, n, s, !0)),
                    this
                },
                done: function() {
                    for (var t = 0, i = e.length; t < i; t++)
                        e[t]();
                    e.length = 0
                }
            }
        }
        ,
        t.prototype.get = function(t) {
            if (void 0 === t && (t = void 0),
            !this.destroyed)
                return void 0 === t || "" === t ? this.data : this.pathGet(this.split(t), this.data)
        }
        ,
        t.prototype.last = function(t) {
            var e = this
              , i = this.lastExecs.get(t);
            i || (i = {
                calls: 0
            },
            this.lastExecs.set(t, i));
            var n = ++i.calls;
            this.resolved.then((function() {
                n === i.calls && (e.lastExecs.set(t, {
                    calls: 0
                }),
                t())
            }
            ))
        }
        ,
        t.prototype.isMuted = function(t) {
            var e, i;
            if (!this.options.useMute)
                return !1;
            if ("function" == typeof t)
                return this.isMutedListener(t);
            try {
                for (var n = o(this.muted), s = n.next(); !s.done; s = n.next()) {
                    var r = s.value
                      , a = !this.isNotRecursive(r)
                      , l = this.trimPath(r);
                    if (this.match(t, l))
                        return !0;
                    if (this.match(l, t))
                        return !0;
                    if (a) {
                        var c = this.cutPath(l, t);
                        if (this.match(c, r))
                            return !0;
                        if (this.match(r, c))
                            return !0
                    }
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    s && !s.done && (i = n.return) && i.call(n)
                } finally {
                    if (e)
                        throw e.error
                }
            }
            return !1
        }
        ,
        t.prototype.isMutedListener = function(t) {
            return this.mutedListeners.has(t)
        }
        ,
        t.prototype.mute = function(t) {
            if ("function" == typeof t)
                return this.mutedListeners.add(t);
            this.muted.add(t)
        }
        ,
        t.prototype.unmute = function(t) {
            if ("function" == typeof t)
                return this.mutedListeners.delete(t);
            this.muted.delete(t)
        }
        ,
        t.prototype.debugSubscribe = function(t, e, i) {
            t.options.debug && this.options.log("listener subscribed", {
                listenerPath: i,
                listener: t,
                listenersCollection: e
            })
        }
        ,
        t.prototype.debugListener = function(t, e) {
            (e.eventInfo.options.debug || e.listener.options.debug) && this.options.log("Listener fired", {
                time: Date.now() - t,
                info: e
            })
        }
        ,
        t.prototype.debugTime = function(t) {
            return t.listener.options.debug || t.eventInfo.options.debug ? Date.now() : 0
        }
        ,
        t
    }();
    e.default = h
}
)));
const Ne = St.mergeDeep;
function Ge(t) {
    let e = function(t, e) {
        return St.mergeDeep(t, e)
    };
    "function" == typeof t.merge && (e = t.merge);
    const i = function() {
        const t = [{
            zoomTo: 17,
            period: "day",
            periodIncrement: 1,
            classNames: ["gstc-date-medium gstc-date-left"],
            format: ({timeStart: t})=>t.format("DD MMMM YYYY (dddd)")
        }, {
            zoomTo: 23,
            period: "month",
            periodIncrement: 1,
            format: ({timeStart: t})=>t.format("MMMM YYYY")
        }, {
            zoomTo: 24,
            period: "month",
            periodIncrement: 1,
            format: ({timeStart: t})=>t.format("MMMM 'YY")
        }, {
            zoomTo: 25,
            period: "month",
            periodIncrement: 1,
            format: ({timeStart: t})=>t.format("MMM YYYY")
        }, {
            zoomTo: 27,
            period: "year",
            periodIncrement: 1,
            format: ({timeStart: t})=>t.format("YYYY")
        }, {
            zoomTo: 100,
            period: "year",
            periodIncrement: 1,
            format: ()=>null
        }]
          , e = [{
            zoomTo: 16,
            period: "hour",
            main: !0,
            periodIncrement: 1,
            format: ({timeStart: t})=>t.format("HH:mm")
        }, {
            zoomTo: 17,
            period: "hour",
            main: !0,
            periodIncrement: 1,
            format: ({timeStart: t})=>t.format("HH")
        }, {
            zoomTo: 19,
            period: "day",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-medium"],
            format: ({timeStart: t, className: e, vido: i})=>i.html`<span class="${e}-content gstc-date-bold">${t.format("DD")}</span> <span class="${e}-content gstc-date-thin">${t.format("dddd")}</span>`
        }, {
            zoomTo: 20,
            period: "day",
            main: !0,
            periodIncrement: 1,
            format: ({timeStart: t, vido: e, className: i})=>e.html`<div class="${i}-content gstc-date-top">${t.format("DD")}</div><div class="${i}-content gstc-date-small">${t.format("dddd")}</div>`
        }, {
            zoomTo: 21,
            period: "day",
            main: !0,
            periodIncrement: 1,
            format: ({timeStart: t, vido: e, className: i})=>e.html`<div class="${i}-content gstc-date-top">${t.format("DD")}</div><div class="${i}-content gstc-date-small">${t.format("ddd")}</div>`
        }, {
            zoomTo: 22,
            period: "day",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-vertical"],
            format: ({timeStart: t, className: e, vido: i})=>i.html`<div class="${e}-content gstc-date-top">${t.format("DD")}</div><div class="${e}-content gstc-date-extra-small">${t.format("ddd")}</div>`
        }, {
            zoomTo: 23,
            period: "week",
            main: !0,
            periodIncrement: 1,
            format: ({timeStart: t, timeEnd: e, className: i, vido: n})=>n.html`<div class="${i}-content gstc-date-top">${t.format("DD")} - ${e.format("DD")}</div><div class="${i}-content gstc-date-small gstc-date-thin">${t.format("ddd")} - ${e.format("dd")}</div>`
        }, {
            zoomTo: 25,
            period: "week",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-vertical"],
            format: ({timeStart: t, timeEnd: e, className: i, vido: n})=>n.html`<div class="${i}-content gstc-date-top gstc-date-small gstc-date-normal">${t.format("DD")}</div><div class="gstc-dash gstc-date-small">-</div><div class="${i}-content gstc-date-small gstc-date-normal">${e.format("DD")}</div>`
        }, {
            zoomTo: 26,
            period: "month",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-month-level-1"],
            format: ({timeStart: t, vido: e, className: i})=>e.html`<div class="${i}-content gstc-date-top">${t.format("MMM")}</div><div class="${i}-content gstc-date-small gstc-date-bottom">${t.format("MM")}</div>`
        }, {
            zoomTo: 27,
            period: "month",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-vertical"],
            format: ({timeStart: t, className: e, vido: i})=>i.html`<div class="${e}-content gstc-date-top">${t.format("MM")}</div><div class="${e}-content gstc-date-extra-small">${t.format("MMM")}</div>`
        }, {
            zoomTo: 28,
            period: "year",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-big"],
            format: ({timeStart: t})=>t.format("YYYY")
        }, {
            zoomTo: 29,
            period: "year",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-medium"],
            format: ({timeStart: t})=>t.format("YYYY")
        }, {
            zoomTo: 30,
            period: "year",
            main: !0,
            periodIncrement: 1,
            classNames: ["gstc-date-medium"],
            format: ({timeStart: t})=>t.format("YY")
        }, {
            zoomTo: 100,
            period: "year",
            main: !0,
            periodIncrement: 1,
            format: ()=>null
        }];
        return {
            licenseKey: "",
            debug: !1,
            plugins: [],
            plugin: {},
            innerHeight: 428,
            headerHeight: 72,
            components: {
                ScrollBar: Xt,
                List: Ut,
                ListColumn: qt,
                ListColumnHeader: Jt,
                ListColumnHeaderResizer: Kt,
                ListColumnRow: te,
                ListColumnRowExpander: ee,
                ListColumnRowExpanderToggle: ie,
                ListToggle: ne,
                Chart: se,
                ChartCalendar: oe,
                ChartCalendarDate: le,
                ChartTimeline: ce,
                ChartTimelineGrid: he,
                ChartTimelineGridRow: fe,
                ChartTimelineGridRowCell: me,
                ChartTimelineItems: ge,
                ChartTimelineItemsRow: ye,
                ChartTimelineItemsRowItem: be
            },
            slots: Pe(),
            list: {
                rows: {},
                row: {
                    height: 40,
                    gap: {
                        top: 0,
                        bottom: 0
                    }
                },
                columns: {
                    percent: 100,
                    resizer: {
                        width: 10,
                        inRealTime: !0,
                        dots: 6
                    },
                    minWidth: 50,
                    data: {}
                },
                expander: {
                    padding: 18,
                    size: 20,
                    icon: {
                        width: 16,
                        height: 16
                    },
                    icons: {
                        child: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><ellipse ry="4" rx="4" id="svg_1" cy="12" cx="12" fill="#000000B0"/></svg>',
                        open: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',
                        closed: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>'
                    }
                },
                toggle: {
                    display: !0,
                    icons: {
                        open: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path stroke="null" d="m16.406954,16.012672l4.00393,-4.012673l-4.00393,-4.012673l1.232651,-1.232651l5.245324,5.245324l-5.245324,5.245324l-1.232651,-1.232651z"/><path stroke="null" d="m-0.343497,12.97734zm1.620144,0l11.341011,0l0,-1.954681l-11.341011,0l0,1.954681zm0,3.909362l11.341011,0l0,-1.954681l-11.341011,0l0,1.954681zm0,-9.773404l0,1.95468l11.341011,0l0,-1.95468l-11.341011,0z"/></svg>',
                        close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path transform="rotate(-180 4.392796516418457,12) " stroke="null" d="m1.153809,16.012672l4.00393,-4.012673l-4.00393,-4.012673l1.232651,-1.232651l5.245324,5.245324l-5.245324,5.245324l-1.232651,-1.232651z"/><path stroke="null" d="m9.773297,12.97734zm1.620144,0l11.341011,0l0,-1.954681l-11.341011,0l0,1.954681zm0,3.909362l11.341011,0l0,-1.954681l-11.341011,0l0,1.954681zm0,-9.773404l0,1.95468l11.341011,0l0,-1.95468l-11.341011,0z"/></svg>'
                    }
                },
                sort: {
                    compare: null,
                    asc: !0,
                    activeColumnId: null,
                    icons: {
                        up: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',
                        down: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>'
                    }
                }
            },
            scroll: {
                bodyClassName: "gstc-scrolling",
                horizontal: {
                    size: 20,
                    minInnerSize: 40,
                    data: null,
                    posPx: 0,
                    maxPosPx: 0,
                    area: 0,
                    multiplier: 3,
                    offset: 0,
                    precise: !1
                },
                vertical: {
                    size: 20,
                    minInnerSize: 40,
                    data: null,
                    posPx: 0,
                    maxPosPx: 0,
                    area: 0,
                    multiplier: 3,
                    offset: 0,
                    precise: !1
                }
            },
            chart: {
                time: {
                    period: "day",
                    from: 0,
                    to: 0,
                    zoom: 20,
                    leftGlobal: 0,
                    centerGlobal: 0,
                    rightGlobal: 0,
                    calculatedZoomMode: !1,
                    onLevelDates: [],
                    onCurrentViewLevelDates: [],
                    onDate: [],
                    allDates: [],
                    additionalSpaceAdded: !1
                },
                calendarLevels: [t, e],
                grid: {
                    cell: {
                        onCreate: []
                    }
                },
                item: {
                    gap: {
                        top: 4,
                        bottom: 4
                    },
                    rowTop: 0,
                    height: 32,
                    minWidth: 10,
                    cutIcons: {
                        left: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20 9v6h-8v4.84L4.16 12L12 4.16V9h8z" fill="#ffffff"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>',
                        right: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M4 15V9h8V4.16L19.84 12L12 19.84V15H4z" fill="#ffffff"/><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>'
                    }
                },
                items: {},
                spacing: 1
            },
            actions: $e(),
            templates: De(),
            locale: {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekStart: 1,
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                ordinal: t=>{
                    const e = ["th", "st", "nd", "rd"]
                      , i = t % 100;
                    return `[${t}${e[(i - 20) % 10] || e[i] || e[0]}]`
                }
            },
            utcMode: !1,
            merge: (t,e)=>St.mergeDeep({}, t, e),
            useLast: !0,
            Promise: Promise,
            mute: [],
            version: "3.6.6"
        }
    }()
      , n = function(t, e, i) {
        const n = i({}, e.actions)
          , s = i({}, t.actions);
        let o = [...Object.keys(n), ...Object.keys(s)];
        o = o.filter(t=>o.includes(t));
        const r = {};
        for (const t of o)
            r[t] = [],
            void 0 !== n[t] && Array.isArray(n[t]) && (r[t] = [...n[t]]),
            void 0 !== s[t] && Array.isArray(s[t]) && (r[t] = [...r[t], ...s[t]]);
        return delete t.actions,
        delete e.actions,
        r
    }(t, i, e)
      , s = {
        config: e(i, t)
    };
    return s.config.actions = n,
    s
}
const He = {
    name: "gstc",
    GSTCID: Gt.GSTCID,
    isGSTCID: Gt.isGSTCID,
    sourceID: Gt.sourceID,
    fromArray(t) {
        const e = this.GSTCID
          , i = {};
        for (const n of t)
            n.id = e(n.id),
            "rowId"in n && (n.rowId = e(n.rowId)),
            "parentId"in n && (n.parentId = e(n.parentId)),
            i[n.id] = n;
        return i
    },
    stateFromConfig: function(t) {
        return this.state = new ze(Ge(t),{
            delimiter: ".",
            useMute: true,
            maxSimultaneousJobs: 1e3,
            Promise: t.Promise,
            debug: !!t.debug
        })
    },
    wasmStateFromConfig: function(t, e="./wildcard_matcher_bg.wasm") {
        return Ft(this, void 0, void 0, (function*() {
            return this.state = new ze(Ge(t),{
                delimiter: ".",
                useMute: true,
                maxSimultaneousJobs: 1e3
            }),
            yield this.state.loadWasmMatcher(e),
            this.state
        }
        ))
    },
    merge: Ne,
    lithtml: W,
    html: W,
    date: t=>t ? kt(t) : kt(),
    setPeriod(t) {
        return this.state.update("config.chart.time.period", t),
        this.state.get("config.chart.time.zoom")
    },
    dayjs: kt
};
function Ee(t) {
    const {api: e, onDestroy: i, state: n, update: s, StyleMap: o} = t
      , r = e.name;
    let a;
    i(n.subscribe("config.debug", t=>a = t));
    let l = !1
      , c = -1;
    function d(t, e) {
        e.options.data = "fullReload",
        m.fullReload(e),
        setTimeout(m.triggerLoadedEvent, 0)
    }
    function h(t, e) {
        "subscribe" !== e.type && "fullReload" !== e.options.data && m.fullReload(e)
    }
    function u(t, e) {
        "subscribe" !== e.type && "sortRowsByColumn" !== e.options.data && "fullReload" !== e.options.data && (a && console.trace("partial full cause", e),
        m.partialReload(!0, e))
    }
    function f(t, e) {
        "subscribe" !== e.type && "fullReload" !== e.options.data && (a && console.log("partial not full cause", e),
        m.partialReload(!1, e))
    }
    function p(t=null, e) {
        e && "subscribe" === e.type || e && e.options.data && "updateVisibleItems" === e.options.data || m.minimalReload(e)
    }
    var m = {
        className: Wt(r),
        styleMap: new o({}),
        initializePlugins() {
            const e = [];
            function s() {
                e.forEach(t=>t()),
                e.length = 0
            }
            i(n.subscribe("config.plugins", i=>{
                if (a && console.log("Plugins changed. Destroying plugins..."),
                s(),
                a && console.log("Plugins destroyed. Initializing plugins..."),
                void 0 !== i && Array.isArray(i))
                    for (const n of i) {
                        const i = n(t);
                        "function" == typeof i ? e.push(i) : i && Object.prototype.hasOwnProperty.call(i, "destroy") && e.push(i.destroy.bind(i))
                    }
                a && console.log("Plugins intialized.")
            }
            )),
            i(s)
        },
        heightChange() {
            if (e.isMutedMethod("heightChange"))
                return;
            a && console.log("Height change.", ["config.innerHeight", "config.headerHeight", "config.scroll.horizontal.size"]);
            const t = n.get("config")
              , i = n.get("config.scroll.horizontal.size")
              , o = t.innerHeight - i;
            n.multi().update("$data.innerHeight", o).update("$data.height", t.innerHeight + t.headerHeight).done(),
            m.styleMap.style["--height"] = o + "px",
            s()
        },
        resizerActiveChange(t) {
            l = t,
            m.className = Wt(e.name),
            l && (m.className += ` ${e.name}__list-column-header-resizer--active`),
            s()
        },
        generateTreeFromVisibleRows() {
            if (e.isMutedMethod("generateTreeFromVisibleRows"))
                return;
            const t = e.getVisibleRowsId()
              , i = e.getAllRows()
              , o = e.getRowsData()
              , r = {}
              , a = {}
              , l = n.get("config.chart.items")
              , c = {};
            for (const e of t) {
                const t = i[e]
                  , n = o[e];
                a[e] = n,
                r[e] = t;
                for (const t of n.children) {
                    r[t] = i[t];
                    for (const e of o[t].items)
                        c[e] = l[e]
                }
                for (const t of n.items)
                    c[t] = l[t]
            }
            e.makeTreeMap(a, c, !0),
            s()
        },
        generateTree(t=!0) {
            let i = n.get("$data.list.rowsIds");
            i = i.slice();
            const s = n.get("config.list.rows");
            if (i && i.length) {
                if (i.sort(),
                !s)
                    return;
                const e = Object.keys(s);
                e.sort(),
                e.join(",") !== i.join(",") && (t = !0)
            }
            if (a && console.log("Generating tree.", {
                fullReload: t
            }),
            !t)
                return m.generateTreeFromVisibleRows();
            e.fillEmptyRowValues(s);
            let o = e.getAllRows();
            const r = e.getRowsData()
              , l = n.get("config.chart.items");
            e.makeTreeMap(r, l);
            const c = n.get("$data.treeMap");
            o = e.sortRows(Object.values(o), c.children);
            n.get("config").rows = o,
            e.prepareItems(l),
            n.update("$data.list.rowsIds", Object.keys(o))
        },
        prepareExpanded() {
            if (e.isMutedMethod("prepareExpanded"))
                return;
            const t = e.getAllRows();
            if (!t)
                return;
            const i = e.getRowsWithParentsExpanded(t);
            n.update("$data.list.rowsWithParentsExpanded", i)
        },
        calculateRowsHeight() {
            if (e.isMutedMethod("calculateRowsHeight"))
                return;
            const t = n.get("$data.list.rowsWithParentsExpanded")
              , i = e.recalculateRowsHeights(t);
            n.update("$data.list.rowsHeight", i),
            a && console.log("calculateRowsHeight.", {
                rowsHeight: i
            })
        },
        recalculateRowPercents() {
            if (e.isMutedMethod("recalculateRowPercents"))
                return;
            const t = n.get("$data.list.rowsWithParentsExpanded");
            e.recalculateRowsPercents(t, n.get("config.scroll.vertical.area"))
        },
        getLastPageRowsHeight(t, i) {
            if (e.isMutedMethod("getLastPageRowsHeight"))
                return;
            if (0 === i.length)
                return 0;
            let s = 0
              , o = 0;
            const r = e.getAllRows()
              , l = e.getRowsData();
            for (let e = i.length - 1; e >= 0; e--) {
                const n = l[i[e]];
                if (s += n.outerHeight,
                s >= t) {
                    s -= n.outerHeight;
                    break
                }
                o++
            }
            return a && console.log("Last page height.", {
                lastPageCount: o,
                lastPageSize: s,
                rows: r
            }),
            n.multi().update("config.scroll.vertical.lastPageSize", s, {
                force: !0
            }).update("config.scroll.vertical.lastPageCount", o, {
                force: !0
            }).done(),
            s
        },
        calculateVerticalScrollArea() {
            if (e.isMutedMethod("calculateVerticalScrollArea"))
                return;
            const t = n.get("$data.list.rowsWithParentsExpanded")
              , i = n.get("$data.list.rowsHeight");
            if (i === c)
                return;
            c = i;
            const s = n.get("$data.innerHeight")
              , o = m.getLastPageRowsHeight(s, t);
            a && console.log("Calculate height related things.", {
                rowsWithParentsExpanded: t,
                lastRowsHeight: c,
                innerHeight: s
            }),
            n.multi().update("config.scroll.vertical.area", i, {
                force: !0
            }).update("config.scroll.vertical.areaWithoutLastPage", i - o, {
                force: !0
            }).done()
        },
        generateVisibleRowsAndItems() {
            if (e.isMutedMethod("generateVisibleRowsAndItems"))
                return;
            const t = e.getVisibleRowsAndCalculateViewTop()
              , i = n.get("$data.list.visibleRows") || [];
            let o = !0;
            t.length !== i.length ? o = !0 : t.length && (o = t.join("|") !== i.join("|")),
            a && console.log("Generating visible rows and items #1.", {
                visibleRowsId: t,
                shouldUpdateRows: o
            }),
            o && (a && console.log("Saving visible rows and items #2.", {
                visibleRowsId: t,
                shouldUpdateRows: o
            }),
            n.update("$data.list.visibleRows", t));
            const r = []
              , l = e.getRowsData();
            for (const e of t) {
                const t = l[e];
                for (const e of t.items)
                    r.push(e)
            }
            const c = n.get("$data.chart.visibleItems") || [];
            a && console.log("Generating visible rows and items #3.", {
                visibleItemsId: r,
                visibleRowsId: t,
                shouldUpdateRows: o,
                rowsData: l
            }),
            r.join("|") !== c.join("|") && (a && console.log("Generate visible rows and items #4.", {
                visibleItemsId: r,
                currentVisibleItems: c
            }),
            n.update("$data.chart.visibleItems", r)),
            s()
        },
        resetScroll() {
            n.update("config.scroll", t=>(t.horizontal.dataIndex = 0,
            t.horizontal.data = null,
            t.horizontal.posPx = 0,
            t.vertical.dataIndex = 0,
            t.vertical.data = Object.values(n.get("config.list.rows"))[0],
            t.vertical.posPx = 0,
            t))
        },
        updateItemsVerticalPositions() {
            const t = e.getAllItems()
              , i = e.getItemsData()
              , n = e.getRowsData();
            for (const s in t) {
                const o = t[s];
                e.calculateItemVerticalPosition(s, i[s], n[o.rowId])
            }
        },
        getMutedListeners() {
            const t = [];
            return n.isMutedListener(d) && t.push(d),
            n.isMutedListener(h) && t.push(h),
            n.isMutedListener(u) && t.push(u),
            n.isMutedListener(f) && t.push(f),
            n.isMutedListener(p) && t.push(p),
            t
        },
        triggerLoadedEvent() {
            Promise.resolve().then(()=>{
                const t = n.get("$data.elements.main");
                if (!t)
                    return;
                const e = t.parentNode;
                if (!e)
                    return;
                const i = new Event("gstc-loaded");
                t.dispatchEvent(i),
                e.dispatchEvent(i)
            }
            )
        },
        getLastPageDatesWidth(t, e) {
            if (0 === e.length)
                return 0;
            let i = 0
              , s = 0;
            if (e.length) {
                if (Math.ceil(e[e.length - 1].rightPx) > t)
                    for (let n = e.length - 1; n >= 0; n--) {
                        const o = e[n];
                        if (i += o.width,
                        i >= t) {
                            i -= o.width;
                            break
                        }
                        s++
                    }
            }
            return n.update("config.scroll.horizontal", t=>(t.lastPageSize = i,
            t.lastPageCount = s,
            t)),
            i
        },
        generatePeriodDates(i, n, s, o) {
            const r = i.period
              , a = n.from
              , l = e.time.date(a).startOf(r)
              , c = e.time.date(n.to).endOf(r)
              , d = e.time.generatePeriodDates({
                leftDate: l,
                rightDate: c,
                level: s,
                levelIndex: o,
                period: r,
                time: n,
                callOnDate: !1,
                callOnLevelDates: !0
            })
              , h = Wt("chart-calendar-date");
            for (const e of d)
                e.formatted = i.format({
                    timeStart: e.leftGlobalDate,
                    timeEnd: e.rightGlobalDate,
                    vido: t,
                    className: h,
                    props: {
                        date: e
                    }
                });
            return d
        },
        limitGlobal: (t,i)=>(t.leftGlobal < t.from && (t.leftGlobal = t.from),
        t.rightGlobal > t.to && (t.rightGlobal = t.to),
        t.leftGlobalDate = e.time.date(t.leftGlobal).startOf(t.period),
        t.leftGlobal = t.leftGlobalDate.valueOf(),
        t.rightGlobalDate = e.time.date(t.rightGlobal).endOf(t.period),
        t.rightGlobal = t.rightGlobalDate.valueOf(),
        t.centerGlobal = i.centerGlobal,
        t.centerGlobalDate = i.centerGlobalDate,
        t),
        setCenter(t) {
            let i = Math.floor(t.rightGlobalDate.diff(t.leftGlobalDate, "millisecond", !0) / 2);
            const n = e.time.getRightViewDate(t);
            n.width !== n.currentView.width && (i -= (n.width - n.currentView.width) * t.timePerPixel),
            t.centerGlobalDate = t.leftGlobalDate.add(i, "millisecond"),
            t.centerGlobal = t.centerGlobalDate.valueOf()
        },
        guessPeriod(t, e) {
            if (!t.zoom)
                return t;
            for (const i of e) {
                const e = i.find(e=>+t.zoom <= +e.zoomTo);
                e && e.main && (t.period = e.period)
            }
            return a && console.log("[main.ts] guessPeriod", t.period, {
                time: t
            }),
            t
        },
        calculateDatesPercents(t, e) {
            const i = m.getLastPageDatesWidth(e, t);
            let n = 0;
            for (const e of t)
                n += e.width;
            const s = n - i;
            for (const e of t)
                e.leftPercent = e.leftPx / s,
                e.rightPercent = e.rightPx / s;
            return s
        },
        getFormatAndLevelIndexForZoom(t, e=n.get("config.chart.calendarLevels")) {
            let i = 0
              , s = 0;
            for (const n of e) {
                for (const e of n)
                    if (e.main && t <= e.zoomTo)
                        return s = i,
                        {
                            levelIndex: s,
                            format: e
                        };
                i++
            }
            if (!s)
                throw new Error(`There is no main date format for zoom ${t}.`)
        },
        generateAllDates(t, e, i) {
            if (!t.zoom)
                return 0;
            t.allDates = new Array(e.length);
            const {format: n, levelIndex: s} = m.getFormatAndLevelIndexForZoom(t.zoom, e);
            t.level = s,
            t.allDates[t.level] = m.generatePeriodDates(n, t, e[s], t.level);
            let o = 0;
            for (const i of e) {
                const e = i.find(e=>+t.zoom <= +e.zoomTo);
                o !== t.level && (t.allDates[o] = m.generatePeriodDates(e, t, i, o)),
                o++
            }
            return m.calculateDatesPercents(t.allDates[t.level], i)
        },
        getPeriodDates(t, i) {
            if (!t.length)
                return [];
            const n = t.filter(t=>t.leftGlobal >= i.leftGlobal && t.leftGlobal <= i.rightGlobal || t.rightGlobal >= i.leftGlobal && t.rightGlobal <= i.rightGlobal || t.leftGlobal <= i.leftGlobal && t.rightGlobal >= i.rightGlobal || t.leftGlobal >= i.leftGlobal && t.rightGlobal <= i.rightGlobal);
            if (!n.length)
                return [];
            let s = 0;
            n[0].period !== i.period && i.leftGlobal > n[0].leftGlobal && (s = e.time.getDatesDiffPx(i.leftGlobalDate, n[0].leftGlobalDate, i, !1));
            let o = 0;
            const r = n.length - 1;
            return n.map((t,e)=>(t.currentView = {
                leftPx: o,
                rightPx: t.rightPx,
                width: t.width
            },
            s < 0 && (t.currentView.width = t.width + s,
            t.currentView.leftPx = 0,
            s = 0),
            t.currentView.rightPx = t.currentView.leftPx + t.currentView.width,
            o += t.currentView.width,
            e === r && t.currentView.rightPx > i.width && (t.currentView.rightPx = i.width,
            t.currentView.width = t.currentView.rightPx - t.currentView.leftPx),
            t))
        },
        updateLevels(t, e) {
            t.levels = [];
            let i = 0;
            for (const n of e) {
                const e = n.find(e=>+t.zoom <= +e.zoomTo);
                if (e.main && (t.format = e,
                t.level = i),
                e) {
                    let s = m.getPeriodDates(t.allDates[i], t);
                    t.onCurrentViewLevelDates.forEach(o=>{
                        s = o({
                            dates: s,
                            format: e,
                            time: t,
                            level: n,
                            levelIndex: i
                        })
                    }
                    ),
                    t.levels.push(s)
                }
                i++
            }
        },
        calculateTotalViewDuration(t) {
            let e = 0
              , i = 0;
            for (const n of t.allDates[t.level])
                e += n.width,
                i += n.rightGlobal - n.leftGlobal;
            t.totalViewDurationPx = e,
            t.totalViewDurationMs = i
        },
        calculateRightGlobal(t, i, n) {
            const s = e.time.findDateAtTime(t, n);
            if (!s)
                return t;
            let o = n.indexOf(s)
              , r = s.leftGlobal
              , a = 0;
            for (let t = n.length; o < t; o++) {
                const t = n[o];
                if (r = t.leftGlobal,
                a += t.width,
                a >= i)
                    break
            }
            return r
        },
        updateVisibleItems(t=n.get("$data.chart.time"), i=n.multi()) {
            a && console.log("Updating visible items.", {});
            const s = n.get("$data.chart.visibleItems")
              , o = e.getItems(s);
            if (!o)
                return i;
            const r = e.getAllRows()
              , l = e.getRowsData()
              , c = e.getItemsData();
            if (!r)
                return i;
            if (!t.levels || !t.levels[t.level])
                return i;
            const d = n.get("config.chart.spacing");
            for (const n of o) {
                if (!n)
                    return i;
                const s = r[n.rowId]
                  , o = l[n.rowId];
                s && o && e.calculateItemPosition(n.id, c[n.id], o, t, d)
            }
            return i = i.update("$data.chart.items", t=>t),
            a && console.log("Visible items updated.", {
                visibleItemsId: s,
                visibleItems: o
            }),
            i
        },
        recalculateTimes(t) {
            if (e.isMutedMethod("recalculateTimes"))
                return;
            a && console.log("Recalculating times.", {
                reason: t
            });
            const i = n.get("$data.chart.dimensions.width");
            if (!i)
                return;
            const o = n.get("config.chart.time")
              , r = n.get("config.chart.calendarLevels")
              , l = Object.assign({}, n.get("$data.chart.time"));
            let c = Vt({}, o);
            if (!(c.from && c.to || Object.keys(n.get("config.chart.items")).length))
                return;
            c.fromDate = e.time.date(c.from),
            c.toDate = e.time.date(c.to);
            const d = n.get("config.scroll.horizontal");
            let h = 0;
            if (c.calculatedZoomMode && i) {
                if (c.totalViewDurationMs = e.time.date(c.to).diff(c.from, "millisecond"),
                c.timePerPixel = c.totalViewDurationMs / i,
                c.zoom = Math.log(c.timePerPixel) / Math.log(2),
                m.guessPeriod(c, r),
                l.zoom !== c.zoom || 0 === c.allDates.length || "forceUpdate" === t.name || "items" === t.name || "reload" === t.name || "from" === t.name || "to" === t.name) {
                    h = m.generateAllDates(c, r, i),
                    m.calculateTotalViewDuration(c);
                    const t = c.allDates[c.level];
                    c.to = t[t.length - 1].rightGlobal,
                    c.toDate = e.time.date(c.to)
                }
                c.leftGlobal = c.from,
                c.leftGlobalDate = e.time.date(c.leftGlobal),
                c.rightGlobal = c.to,
                c.rightGlobalDate = e.time.date(c.rightGlobal)
            } else if (c.timePerPixel = Math.pow(2, c.zoom),
            "items" === t.name && (c.from = t.from,
            c.to = t.to,
            c.fromDate = e.time.date(c.from),
            c.toDate = e.time.date(c.to)),
            c = e.time.recalculateFromTo(c),
            l.zoom !== c.zoom || 0 === c.allDates.length || "forceUpdate" === t.name || "items" === t.name || "reload" === t.name || "from" === t.name || "to" === t.name) {
                h = m.generateAllDates(c, r, i),
                m.calculateTotalViewDuration(c);
                const t = c.allDates[c.level];
                c.to = t[t.length - 1].rightGlobal,
                c.toDate = e.time.date(c.to)
            } else
                c.totalViewDurationPx = l.totalViewDurationPx,
                c.totalViewDurationMs = l.totalViewDurationMs;
            c.scrollWidth = h || l.scrollWidth;
            const u = c.allDates[c.level];
            let f = !1;
            const p = n.get("$data.chart.time.recalculateTimesLastReason") || "";
            if (!c.calculatedZoomMode)
                if (c.zoom === l.zoom && "period" !== t.name || !l.centerGlobal) {
                    let t = d.data;
                    t || (t = u[0]),
                    c.leftGlobalDate = t.leftGlobalDate,
                    c.leftGlobal = c.leftGlobalDate.valueOf(),
                    c.rightGlobal = m.calculateRightGlobal(c.leftGlobal, i, u),
                    c.rightGlobalDate = e.time.date(c.rightGlobal).endOf(c.period),
                    c.rightGlobal = c.rightGlobal.valueOf(),
                    f = "zoom" !== p && "period" !== p && "time" !== p
                } else {
                    const t = i * c.timePerPixel
                      , n = Math.round(t / 2)
                      , s = Math.ceil(l.centerGlobalDate.diff(l.centerGlobal + n, c.period, !0));
                    c.leftGlobalDate = l.centerGlobalDate.add(s, c.period);
                    const o = c.leftGlobalDate.valueOf();
                    let r = e.time.findDateAtTime(o, u);
                    r || (r = u[0]),
                    c.leftGlobal = r.leftGlobal,
                    c.leftGlobalDate = r.leftGlobalDate,
                    c.rightGlobal = m.calculateRightGlobal(c.leftGlobal, i, u),
                    c.rightGlobalDate = e.time.date(c.rightGlobal).endOf(c.period),
                    c.rightGlobal = c.rightGlobalDate.valueOf()
                }
            m.limitGlobal(c, l),
            c.leftInner = c.leftGlobal - c.from,
            c.rightInner = c.rightGlobal - c.from,
            c.leftPx = 0,
            c.rightPx = i,
            c.width = i,
            m.updateLevels(c, r),
            f && m.setCenter(c);
            const g = c.levels[c.level];
            g && g.length && (c.leftPx = g[0].leftPx,
            c.rightPx = g[g.length - 1].leftPx);
            let v = n.multi().update("$data.chart.time", c).update("config.chart.time", t=>(t.zoom = c.zoom,
            t.level = c.level,
            t.period = c.format.period,
            t.leftGlobal = c.leftGlobal,
            t.leftGlobalDate = c.leftGlobalDate,
            t.centerGlobal = c.centerGlobal,
            t.rightGlobal = c.rightGlobal,
            t.rightGlobalDate = c.rightGlobalDate,
            t.from = c.from,
            t.to = c.to,
            t.allDates = c.allDates,
            t.additionalSpaceAdded = c.additionalSpaceAdded,
            t));
            v = m.updateVisibleItems(c, v),
            v = v.update("$data.chart.time.recalculateTimesLastReason", t.name),
            v.done(),
            a && console.log("Time recalculated.", {
                time: c
            }),
            s()
        },
        minimalReload(t) {
            if (e.isMutedMethod("minimalReload"))
                return;
            a && console.log("Minimal reload fired.", {
                eventInfo: t
            }),
            e.muteMethod("minimalReload");
            const i = m.getMutedListeners();
            n.mute(d),
            n.mute(h),
            n.mute(u),
            n.mute(f),
            n.mute(p),
            m.calculateRowsHeight(),
            m.generateVisibleRowsAndItems(),
            m.calculateVerticalScrollArea(),
            m.recalculateRowPercents(),
            e.calculateVisibleRowsHeights(),
            m.updateItemsVerticalPositions(),
            m.updateVisibleItems().done(),
            i.includes(d) || n.unmute(d),
            i.includes(h) || n.unmute(h),
            i.includes(u) || n.unmute(u),
            i.includes(f) || n.unmute(f),
            i.includes(p) || n.unmute(p),
            e.unmuteMethod("minimalReload"),
            a && console.log("Minimal reload finished.", {
                eventInfo: t
            })
        },
        partialReload(t=!0, i) {
            if (e.isMutedMethod("partialReload"))
                return;
            a && console.log("Partial reload fired.", {
                fullReload: t,
                eventInfo: i
            }),
            e.muteMethod("partialReload");
            const s = m.getMutedListeners();
            n.mute(d),
            n.mute(h),
            n.mute(u),
            n.mute(f),
            n.mute(p),
            m.generateTree(t),
            m.prepareExpanded(),
            m.minimalReload(i),
            s.includes(d) || n.unmute(d),
            s.includes(h) || n.unmute(h),
            s.includes(u) || n.unmute(u),
            s.includes(f) || n.unmute(f),
            s.includes(p) || n.unmute(p),
            e.unmuteMethod("partialReload"),
            a && console.log("Partial reload finished.", {
                fullReload: t,
                eventInfo: i
            })
        },
        fullReload(t) {
            if (e.isMutedMethod("fullReload"))
                return;
            a && console.log("Full reload fired.", t),
            e.muteMethod("fullReload");
            const i = m.getMutedListeners();
            n.mute("*"),
            n.mute(d),
            n.mute(h),
            n.mute(u),
            n.mute(f),
            n.mute(p);
            const o = n.get("$data");
            o.list.rows = {},
            o.chart.items = {},
            m.partialReload(!0, t),
            m.recalculateTimes({
                name: "reload"
            }),
            m.resetScroll(),
            i.includes(d) || n.unmute(d),
            i.includes(h) || n.unmute(h),
            i.includes(u) || n.unmute(u),
            i.includes(f) || n.unmute(f),
            i.includes(p) || n.unmute(p),
            e.unmuteMethod("fullReload"),
            n.unmute("*"),
            s(),
            a && console.log("Full reload finished.", t)
        }
    };
    i(n.subscribeAll(["config.innerHeight", "config.headerHeight", "config.scroll.horizontal.size"], m.heightChange)),
    i(n.subscribe("$data.list.columns.resizer.active", m.resizerActiveChange)),
    i(n.subscribe("config;", d)),
    i(n.subscribeAll(["config.chart.items;", "config.list.rows;"], h)),
    i(n.subscribeAll(["config.list.rows.*;", "config.list.rows.*.parentId"], u, {
        bulk: !0
    })),
    i(n.subscribe("config.chart.items.*;", u, {
        bulk: !0
    })),
    i(n.subscribeAll(["config.chart.items.*.rowId", "config.list.rows.*.expanded"], f, {
        bulk: !0
    })),
    i(n.subscribeAll(["config.chart.items.*.time", "config.chart.items.*.height", "config.chart.items.*.top", "$data.list.rows.*.outerHeight", "config.scroll.vertical.offset", "$data.innerHeight", "$data.list.rowsHeight"], p, {
        bulk: !0
    })),
    i(n.subscribe("config.list.sort", t=>{
        const i = n.get("config.list.columns.data." + t.activeColumnId);
        i && e.sortRowsByColumn(i, t.asc)
    }
    )),
    i(n.subscribe("config.chart.items", (function(t, e) {
        e.options.data && "updateVisibleItems" === e.options.data || m.updateVisibleItems().done()
    }
    ), {
        bulk: !0,
        ignore: ["config.chart.items.*.selected", "config.chart.items.*.selecting", "config.chart.items.*.moving"]
    }));
    const g = {
        initialized: !1,
        zoom: 0,
        period: "",
        scrollDataIndex: 0,
        chartWidth: 0,
        from: 0,
        to: 0
    };
    return i(n.subscribeAll(["config.chart.time", "$data.chart.time", "config.chart.calendarLevels", "config.scroll.horizontal.dataIndex", "$data.chart.dimensions.width"], ()=>{
        const t = function() {
            const t = n.get("config.chart.time")
              , e = n.get("config.scroll.horizontal.dataIndex")
              , i = n.get("$data.chart.dimensions.width")
              , s = Object.assign({}, g);
            return g.zoom = t.zoom,
            g.period = t.period,
            g.from = t.from,
            g.to = t.to,
            g.scrollDataIndex = e,
            g.chartWidth = i,
            g.initialized ? !0 === t.forceUpdate ? (n.update("config.chart.time.forceUpdate", !1),
            {
                name: "forceUpdate"
            }) : t.zoom !== s.zoom ? {
                name: "zoom",
                oldValue: s.zoom,
                newValue: t.zoom
            } : t.period !== s.period ? {
                name: "period",
                oldValue: s.period,
                newValue: t.period
            } : t.from !== s.from ? {
                name: "from",
                oldValue: s.from,
                newValue: t.from
            } : t.to !== s.to ? {
                name: "to",
                oldValue: s.to,
                newValue: t.to
            } : e !== s.scrollDataIndex ? {
                name: "scroll",
                oldValue: s.scrollDataIndex,
                newValue: e
            } : i !== s.chartWidth ? {
                name: "chartWidth",
                oldValue: s.chartWidth,
                newValue: i
            } : {
                name: ""
            } : (g.initialized = !0,
            {
                name: "all"
            })
        }();
        t.name && m.recalculateTimes(t)
    }
    , {
        bulk: !0
    })),
    i(n.subscribe("config.chart.items.:itemId.time", t=>{
        const i = n.get("$data.chart.time")
          , s = e.getAllItems();
        for (const e of t) {
            const t = s[e.params.itemId];
            if (!t)
                return;
            if (t.time.start < i.from || t.time.end > i.to) {
                let e = i.from
                  , n = i.to;
                return t.time.start < i.from && (e = t.time.start),
                t.time.end > i.to && (n = t.time.end),
                m.recalculateTimes({
                    name: "items",
                    from: e,
                    to: n
                })
            }
        }
    }
    , {
        bulk: !0
    })),
    t.api.main = m,
    m
}
var Ve = Ot((function(t, e) {
    var i;
    t.exports = (i = i || function(t, e) {
        var i = Object.create || function() {
            function t() {}
            return function(e) {
                var i;
                return t.prototype = e,
                i = new t,
                t.prototype = null,
                i
            }
        }()
          , n = {}
          , s = n.lib = {}
          , o = s.Base = {
            extend: function(t) {
                var e = i(this);
                return t && e.mixIn(t),
                e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                    e.$super.init.apply(this, arguments)
                }
                ),
                e.init.prototype = e,
                e.$super = this,
                e
            },
            create: function() {
                var t = this.extend();
                return t.init.apply(t, arguments),
                t
            },
            init: function() {},
            mixIn: function(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (this[e] = t[e]);
                t.hasOwnProperty("toString") && (this.toString = t.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        }
          , r = s.WordArray = o.extend({
            init: function(t, i) {
                t = this.words = t || [],
                this.sigBytes = i != e ? i : 4 * t.length
            },
            toString: function(t) {
                return (t || l).stringify(this)
            },
            concat: function(t) {
                var e = this.words
                  , i = t.words
                  , n = this.sigBytes
                  , s = t.sigBytes;
                if (this.clamp(),
                n % 4)
                    for (var o = 0; o < s; o++) {
                        var r = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        e[n + o >>> 2] |= r << 24 - (n + o) % 4 * 8
                    }
                else
                    for (o = 0; o < s; o += 4)
                        e[n + o >>> 2] = i[o >>> 2];
                return this.sigBytes += s,
                this
            },
            clamp: function() {
                var e = this.words
                  , i = this.sigBytes;
                e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
                e.length = t.ceil(i / 4)
            },
            clone: function() {
                var t = o.clone.call(this);
                return t.words = this.words.slice(0),
                t
            },
            random: function(e) {
                for (var i, n = [], s = function(e) {
                    e = e;
                    var i = 987654321
                      , n = 4294967295;
                    return function() {
                        var s = ((i = 36969 * (65535 & i) + (i >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;
                        return s /= 4294967296,
                        (s += .5) * (t.random() > .5 ? 1 : -1)
                    }
                }, o = 0; o < e; o += 4) {
                    var a = s(4294967296 * (i || t.random()));
                    i = 987654071 * a(),
                    n.push(4294967296 * a() | 0)
                }
                return new r.init(n,e)
            }
        })
          , a = n.enc = {}
          , l = a.Hex = {
            stringify: function(t) {
                for (var e = t.words, i = t.sigBytes, n = [], s = 0; s < i; s++) {
                    var o = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                    n.push((o >>> 4).toString(16)),
                    n.push((15 & o).toString(16))
                }
                return n.join("")
            },
            parse: function(t) {
                for (var e = t.length, i = [], n = 0; n < e; n += 2)
                    i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                return new r.init(i,e / 2)
            }
        }
          , c = a.Latin1 = {
            stringify: function(t) {
                for (var e = t.words, i = t.sigBytes, n = [], s = 0; s < i; s++) {
                    var o = e[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                    n.push(String.fromCharCode(o))
                }
                return n.join("")
            },
            parse: function(t) {
                for (var e = t.length, i = [], n = 0; n < e; n++)
                    i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                return new r.init(i,e)
            }
        }
          , d = a.Utf8 = {
            stringify: function(t) {
                try {
                    return decodeURIComponent(escape(c.stringify(t)))
                } catch (t) {
                    throw new Error("Malformed UTF-8 data")
                }
            },
            parse: function(t) {
                return c.parse(unescape(encodeURIComponent(t)))
            }
        }
          , h = s.BufferedBlockAlgorithm = o.extend({
            reset: function() {
                this._data = new r.init,
                this._nDataBytes = 0
            },
            _append: function(t) {
                "string" == typeof t && (t = d.parse(t)),
                this._data.concat(t),
                this._nDataBytes += t.sigBytes
            },
            _process: function(e) {
                var i = this._data
                  , n = i.words
                  , s = i.sigBytes
                  , o = this.blockSize
                  , a = s / (4 * o)
                  , l = (a = e ? t.ceil(a) : t.max((0 | a) - this._minBufferSize, 0)) * o
                  , c = t.min(4 * l, s);
                if (l) {
                    for (var d = 0; d < l; d += o)
                        this._doProcessBlock(n, d);
                    var h = n.splice(0, l);
                    i.sigBytes -= c
                }
                return new r.init(h,c)
            },
            clone: function() {
                var t = o.clone.call(this);
                return t._data = this._data.clone(),
                t
            },
            _minBufferSize: 0
        })
          , u = (s.Hasher = h.extend({
            cfg: o.extend(),
            init: function(t) {
                this.cfg = this.cfg.extend(t),
                this.reset()
            },
            reset: function() {
                h.reset.call(this),
                this._doReset()
            },
            update: function(t) {
                return this._append(t),
                this._process(),
                this
            },
            finalize: function(t) {
                return t && this._append(t),
                this._doFinalize()
            },
            blockSize: 16,
            _createHelper: function(t) {
                return function(e, i) {
                    return new t.init(i).finalize(e)
                }
            },
            _createHmacHelper: function(t) {
                return function(e, i) {
                    return new u.HMAC.init(t,i).finalize(e)
                }
            }
        }),
        n.algo = {});
        return n
    }(Math),
    i)
}
))
  , pbkdf2 = (Ot((function(t, e) {
    var i;
    t.exports = (i = Ve,
    function() {
        var t = i
          , e = t.lib
          , n = e.WordArray
          , s = e.Hasher
          , o = t.algo
          , r = []
          , a = o.SHA1 = s.extend({
            _doReset: function() {
                this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(t, e) {
                for (var i = this._hash.words, n = i[0], s = i[1], o = i[2], a = i[3], l = i[4], c = 0; c < 80; c++) {
                    if (c < 16)
                        r[c] = 0 | t[e + c];
                    else {
                        var d = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16];
                        r[c] = d << 1 | d >>> 31
                    }
                    var h = (n << 5 | n >>> 27) + l + r[c];
                    h += c < 20 ? 1518500249 + (s & o | ~s & a) : c < 40 ? 1859775393 + (s ^ o ^ a) : c < 60 ? (s & o | s & a | o & a) - 1894007588 : (s ^ o ^ a) - 899497514,
                    l = a,
                    a = o,
                    o = s << 30 | s >>> 2,
                    s = n,
                    n = h
                }
                i[0] = i[0] + n | 0,
                i[1] = i[1] + s | 0,
                i[2] = i[2] + o | 0,
                i[3] = i[3] + a | 0,
                i[4] = i[4] + l | 0
            },
            _doFinalize: function() {
                var t = this._data
                  , e = t.words
                  , i = 8 * this._nDataBytes
                  , n = 8 * t.sigBytes;
                return e[n >>> 5] |= 128 << 24 - n % 32,
                e[14 + (n + 64 >>> 9 << 4)] = Math.floor(i / 4294967296),
                e[15 + (n + 64 >>> 9 << 4)] = i,
                t.sigBytes = 4 * e.length,
                this._process(),
                this._hash
            },
            clone: function() {
                var t = s.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        });
        t.SHA1 = s._createHelper(a),
        t.HmacSHA1 = s._createHmacHelper(a)
    }(),
    i.SHA1)
}
)),
Ot((function(t, e) {
    var i;
    t.exports = (i = Ve,
    void function() {
        var t = i
          , e = t.lib.Base
          , n = t.enc.Utf8;
        t.algo.HMAC = e.extend({
            init: function(t, e) {
                t = this._hasher = new t.init,
                "string" == typeof e && (e = n.parse(e));
                var i = t.blockSize
                  , s = 4 * i;
                e.sigBytes > s && (e = t.finalize(e)),
                e.clamp();
                for (var o = this._oKey = e.clone(), r = this._iKey = e.clone(), a = o.words, l = r.words, c = 0; c < i; c++)
                    a[c] ^= 1549556828,
                    l[c] ^= 909522486;
                o.sigBytes = r.sigBytes = s,
                this.reset()
            },
            reset: function() {
                var t = this._hasher;
                t.reset(),
                t.update(this._iKey)
            },
            update: function(t) {
                return this._hasher.update(t),
                this
            },
            finalize: function(t) {
                var e = this._hasher
                  , i = e.finalize(t);
                return e.reset(),
                e.finalize(this._oKey.clone().concat(i))
            }
        })
    }())
}
)),
Ot((function(t, e) {
    var i;
    t.exports = (i = Ve,
    function() {
        var t = i
          , e = t.lib
          , n = e.Base
          , s = e.WordArray
          , o = t.algo
          , r = o.SHA1
          , a = o.HMAC
          , l = o.PBKDF2 = n.extend({
            cfg: n.extend({
                keySize: 4,
                hasher: r,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, e) {
                for (var i = this.cfg, n = a.create(i.hasher, t), o = s.create(), r = s.create([1]), l = o.words, c = r.words, d = i.keySize, h = i.iterations; l.length < d; ) {
                    var u = n.update(e).finalize(r);
                    n.reset();
                    for (var f = u.words, p = f.length, m = u, g = 1; g < h; g++) {
                        m = n.finalize(m),
                        n.reset();
                        for (var v = m.words, y = 0; y < p; y++)
                            f[y] ^= v[y]
                    }
                    o.concat(u),
                    c[0]++
                }
                return o.sigBytes = 4 * d,
                o
            }
        });
        t.PBKDF2 = function(t, e, i) {
            return l.create(i).compute(t, e)
        }
    }(),
    i.PBKDF2)
}
)))
  , aes = (Ot((function(t, e) {
    var i;
    t.exports = (i = Ve,
    function() {
        var t = i
          , e = t.lib.WordArray;
        function n(t, i, n) {
            for (var s = [], o = 0, r = 0; r < i; r++)
                if (r % 4) {
                    var a = n[t.charCodeAt(r - 1)] << r % 4 * 2
                      , l = n[t.charCodeAt(r)] >>> 6 - r % 4 * 2;
                    s[o >>> 2] |= (a | l) << 24 - o % 4 * 8,
                    o++
                }
            return e.create(s, o)
        }
        t.enc.Base64 = {
            stringify: function(t) {
                var e = t.words
                  , i = t.sigBytes
                  , n = this._map;
                t.clamp();
                for (var s = [], o = 0; o < i; o += 3)
                    for (var r = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, a = 0; a < 4 && o + .75 * a < i; a++)
                        s.push(n.charAt(r >>> 6 * (3 - a) & 63));
                var l = n.charAt(64);
                if (l)
                    for (; s.length % 4; )
                        s.push(l);
                return s.join("")
            },
            parse: function(t) {
                var e = t.length
                  , i = this._map
                  , s = this._reverseMap;
                if (!s) {
                    s = this._reverseMap = [];
                    for (var o = 0; o < i.length; o++)
                        s[i.charCodeAt(o)] = o
                }
                var r = i.charAt(64);
                if (r) {
                    var a = t.indexOf(r);
                    -1 !== a && (e = a)
                }
                return n(t, e, s)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }
    }(),
    i.enc.Base64)
}
)),
Ot((function(t, e) {
    var i;
    t.exports = (i = Ve,
    function(t) {
        var e = i
          , n = e.lib
          , s = n.WordArray
          , o = n.Hasher
          , r = e.algo
          , a = [];
        !function() {
            for (var e = 0; e < 64; e++)
                a[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
        }();
        var l = r.MD5 = o.extend({
            _doReset: function() {
                this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878])
            },
            _doProcessBlock: function(t, e) {
                for (var i = 0; i < 16; i++) {
                    var n = e + i
                      , s = t[n];
                    t[n] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
                }
                var o = this._hash.words
                  , r = t[e + 0]
                  , l = t[e + 1]
                  , f = t[e + 2]
                  , p = t[e + 3]
                  , m = t[e + 4]
                  , g = t[e + 5]
                  , v = t[e + 6]
                  , y = t[e + 7]
                  , w = t[e + 8]
                  , b = t[e + 9]
                  , x = t[e + 10]
                  , $ = t[e + 11]
                  , D = t[e + 12]
                  , P = t[e + 13]
                  , _ = t[e + 14]
                  , M = t[e + 15]
                  , I = o[0]
                  , S = o[1]
                  , C = o[2]
                  , R = o[3];
                I = c(I, S, C, R, r, 7, a[0]),
                R = c(R, I, S, C, l, 12, a[1]),
                C = c(C, R, I, S, f, 17, a[2]),
                S = c(S, C, R, I, p, 22, a[3]),
                I = c(I, S, C, R, m, 7, a[4]),
                R = c(R, I, S, C, g, 12, a[5]),
                C = c(C, R, I, S, v, 17, a[6]),
                S = c(S, C, R, I, y, 22, a[7]),
                I = c(I, S, C, R, w, 7, a[8]),
                R = c(R, I, S, C, b, 12, a[9]),
                C = c(C, R, I, S, x, 17, a[10]),
                S = c(S, C, R, I, $, 22, a[11]),
                I = c(I, S, C, R, D, 7, a[12]),
                R = c(R, I, S, C, P, 12, a[13]),
                C = c(C, R, I, S, _, 17, a[14]),
                I = d(I, S = c(S, C, R, I, M, 22, a[15]), C, R, l, 5, a[16]),
                R = d(R, I, S, C, v, 9, a[17]),
                C = d(C, R, I, S, $, 14, a[18]),
                S = d(S, C, R, I, r, 20, a[19]),
                I = d(I, S, C, R, g, 5, a[20]),
                R = d(R, I, S, C, x, 9, a[21]),
                C = d(C, R, I, S, M, 14, a[22]),
                S = d(S, C, R, I, m, 20, a[23]),
                I = d(I, S, C, R, b, 5, a[24]),
                R = d(R, I, S, C, _, 9, a[25]),
                C = d(C, R, I, S, p, 14, a[26]),
                S = d(S, C, R, I, w, 20, a[27]),
                I = d(I, S, C, R, P, 5, a[28]),
                R = d(R, I, S, C, f, 9, a[29]),
                C = d(C, R, I, S, y, 14, a[30]),
                I = h(I, S = d(S, C, R, I, D, 20, a[31]), C, R, g, 4, a[32]),
                R = h(R, I, S, C, w, 11, a[33]),
                C = h(C, R, I, S, $, 16, a[34]),
                S = h(S, C, R, I, _, 23, a[35]),
                I = h(I, S, C, R, l, 4, a[36]),
                R = h(R, I, S, C, m, 11, a[37]),
                C = h(C, R, I, S, y, 16, a[38]),
                S = h(S, C, R, I, x, 23, a[39]),
                I = h(I, S, C, R, P, 4, a[40]),
                R = h(R, I, S, C, r, 11, a[41]),
                C = h(C, R, I, S, p, 16, a[42]),
                S = h(S, C, R, I, v, 23, a[43]),
                I = h(I, S, C, R, b, 4, a[44]),
                R = h(R, I, S, C, D, 11, a[45]),
                C = h(C, R, I, S, M, 16, a[46]),
                I = u(I, S = h(S, C, R, I, f, 23, a[47]), C, R, r, 6, a[48]),
                R = u(R, I, S, C, y, 10, a[49]),
                C = u(C, R, I, S, _, 15, a[50]),
                S = u(S, C, R, I, g, 21, a[51]),
                I = u(I, S, C, R, D, 6, a[52]),
                R = u(R, I, S, C, p, 10, a[53]),
                C = u(C, R, I, S, x, 15, a[54]),
                S = u(S, C, R, I, l, 21, a[55]),
                I = u(I, S, C, R, w, 6, a[56]),
                R = u(R, I, S, C, M, 10, a[57]),
                C = u(C, R, I, S, v, 15, a[58]),
                S = u(S, C, R, I, P, 21, a[59]),
                I = u(I, S, C, R, m, 6, a[60]),
                R = u(R, I, S, C, $, 10, a[61]),
                C = u(C, R, I, S, f, 15, a[62]),
                S = u(S, C, R, I, b, 21, a[63]),
                o[0] = o[0] + I | 0,
                o[1] = o[1] + S | 0,
                o[2] = o[2] + C | 0,
                o[3] = o[3] + R | 0
            },
            _doFinalize: function() {
                var e = this._data
                  , i = e.words
                  , n = 8 * this._nDataBytes
                  , s = 8 * e.sigBytes;
                i[s >>> 5] |= 128 << 24 - s % 32;
                var o = t.floor(n / 4294967296)
                  , r = n;
                i[15 + (s + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                i[14 + (s + 64 >>> 9 << 4)] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8),
                e.sigBytes = 4 * (i.length + 1),
                this._process();
                for (var a = this._hash, l = a.words, c = 0; c < 4; c++) {
                    var d = l[c];
                    l[c] = 16711935 & (d << 8 | d >>> 24) | 4278255360 & (d << 24 | d >>> 8)
                }
                return a
            },
            clone: function() {
                var t = o.clone.call(this);
                return t._hash = this._hash.clone(),
                t
            }
        });
        function c(t, e, i, n, s, o, r) {
            var a = t + (e & i | ~e & n) + s + r;
            return (a << o | a >>> 32 - o) + e
        }
        function d(t, e, i, n, s, o, r) {
            var a = t + (e & n | i & ~n) + s + r;
            return (a << o | a >>> 32 - o) + e
        }
        function h(t, e, i, n, s, o, r) {
            var a = t + (e ^ i ^ n) + s + r;
            return (a << o | a >>> 32 - o) + e
        }
        function u(t, e, i, n, s, o, r) {
            var a = t + (i ^ (e | ~n)) + s + r;
            return (a << o | a >>> 32 - o) + e
        }
        e.MD5 = o._createHelper(l),
        e.HmacMD5 = o._createHmacHelper(l)
    }(Math),
    i.MD5)
}
)),
Ot((function(t, e) {
    var i;
    t.exports = (i = Ve,
    function() {
        var t = i
          , e = t.lib
          , n = e.Base
          , s = e.WordArray
          , o = t.algo
          , r = o.MD5
          , a = o.EvpKDF = n.extend({
            cfg: n.extend({
                keySize: 4,
                hasher: r,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, e) {
                for (var i = this.cfg, n = i.hasher.create(), o = s.create(), r = o.words, a = i.keySize, l = i.iterations; r.length < a; ) {
                    c && n.update(c);
                    var c = n.update(t).finalize(e);
                    n.reset();
                    for (var d = 1; d < l; d++)
                        c = n.finalize(c),
                        n.reset();
                    o.concat(c)
                }
                return o.sigBytes = 4 * a,
                o
            }
        });
        t.EvpKDF = function(t, e, i) {
            return a.create(i).compute(t, e)
        }
    }(),
    i.EvpKDF)
}
)),
Ot((function(t, e) {
    var i;
    t.exports = void ((i = Ve).lib.Cipher || function(t) {
        var e = i
          , n = e.lib
          , s = n.Base
          , o = n.WordArray
          , r = n.BufferedBlockAlgorithm
          , a = e.enc
          , l = (a.Utf8,
        a.Base64)
          , c = e.algo.EvpKDF
          , d = n.Cipher = r.extend({
            cfg: s.extend(),
            createEncryptor: function(t, e) {
                return this.create(this._ENC_XFORM_MODE, t, e)
            },
            createDecryptor: function(t, e) {
                return this.create(this._DEC_XFORM_MODE, t, e)
            },
            init: function(t, e, i) {
                this.cfg = this.cfg.extend(i),
                this._xformMode = t,
                this._key = e,
                this.reset()
            },
            reset: function() {
                r.reset.call(this),
                this._doReset()
            },
            process: function(t) {
                return this._append(t),
                this._process()
            },
            finalize: function(t) {
                return t && this._append(t),
                this._doFinalize()
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function() {
                function t(t) {
                    return "string" == typeof t ? w : v
                }
                return function(e) {
                    return {
                        encrypt: function(i, n, s) {
                            return t(n).encrypt(e, i, n, s)
                        },
                        decrypt: function(i, n, s) {
                            return t(n).decrypt(e, i, n, s)
                        }
                    }
                }
            }()
        })
          , h = (n.StreamCipher = d.extend({
            _doFinalize: function() {
                return this._process(!0)
            },
            blockSize: 1
        }),
        e.mode = {})
          , u = n.BlockCipherMode = s.extend({
            createEncryptor: function(t, e) {
                return this.Encryptor.create(t, e)
            },
            createDecryptor: function(t, e) {
                return this.Decryptor.create(t, e)
            },
            init: function(t, e) {
                this._cipher = t,
                this._iv = e
            }
        })
          , f = h.CBC = function() {
            var e = u.extend();
            function i(e, i, n) {
                var s = this._iv;
                if (s) {
                    var o = s;
                    this._iv = t
                } else
                    o = this._prevBlock;
                for (var r = 0; r < n; r++)
                    e[i + r] ^= o[r]
            }
            return e.Encryptor = e.extend({
                processBlock: function(t, e) {
                    var n = this._cipher
                      , s = n.blockSize;
                    i.call(this, t, e, s),
                    n.encryptBlock(t, e),
                    this._prevBlock = t.slice(e, e + s)
                }
            }),
            e.Decryptor = e.extend({
                processBlock: function(t, e) {
                    var n = this._cipher
                      , s = n.blockSize
                      , o = t.slice(e, e + s);
                    n.decryptBlock(t, e),
                    i.call(this, t, e, s),
                    this._prevBlock = o
                }
            }),
            e
        }()
          , p = (e.pad = {}).Pkcs7 = {
            pad: function(t, e) {
                for (var i = 4 * e, n = i - t.sigBytes % i, s = n << 24 | n << 16 | n << 8 | n, r = [], a = 0; a < n; a += 4)
                    r.push(s);
                var l = o.create(r, n);
                t.concat(l)
            },
            unpad: function(t) {
                var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                t.sigBytes -= e
            }
        }
          , m = (n.BlockCipher = d.extend({
            cfg: d.cfg.extend({
                mode: f,
                padding: p
            }),
            reset: function() {
                d.reset.call(this);
                var t = this.cfg
                  , e = t.iv
                  , i = t.mode;
                if (this._xformMode == this._ENC_XFORM_MODE)
                    var n = i.createEncryptor;
                else
                    n = i.createDecryptor,
                    this._minBufferSize = 1;
                this._mode && this._mode.__creator == n ? this._mode.init(this, e && e.words) : (this._mode = n.call(i, this, e && e.words),
                this._mode.__creator = n)
            },
            _doProcessBlock: function(t, e) {
                this._mode.processBlock(t, e)
            },
            _doFinalize: function() {
                var t = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                    t.pad(this._data, this.blockSize);
                    var e = this._process(!0)
                } else
                    e = this._process(!0),
                    t.unpad(e);
                return e
            },
            blockSize: 4
        }),
        n.CipherParams = s.extend({
            init: function(t) {
                this.mixIn(t)
            },
            toString: function(t) {
                return (t || this.formatter).stringify(this)
            }
        }))
          , g = (e.format = {}).OpenSSL = {
            stringify: function(t) {
                var e = t.ciphertext
                  , i = t.salt;
                if (i)
                    var n = o.create([1398893684, 1701076831]).concat(i).concat(e);
                else
                    n = e;
                return n.toString(l)
            },
            parse: function(t) {
                var e = l.parse(t)
                  , i = e.words;
                if (1398893684 == i[0] && 1701076831 == i[1]) {
                    var n = o.create(i.slice(2, 4));
                    i.splice(0, 4),
                    e.sigBytes -= 16
                }
                return m.create({
                    ciphertext: e,
                    salt: n
                })
            }
        }
          , v = n.SerializableCipher = s.extend({
            cfg: s.extend({
                format: g
            }),
            encrypt: function(t, e, i, n) {
                n = this.cfg.extend(n);
                var s = t.createEncryptor(i, n)
                  , o = s.finalize(e)
                  , r = s.cfg;
                return m.create({
                    ciphertext: o,
                    key: i,
                    iv: r.iv,
                    algorithm: t,
                    mode: r.mode,
                    padding: r.padding,
                    blockSize: t.blockSize,
                    formatter: n.format
                })
            },
            decrypt: function(t, e, i, n) {
                return n = this.cfg.extend(n),
                e = this._parse(e, n.format),
                t.createDecryptor(i, n).finalize(e.ciphertext)
            },
            _parse: function(t, e) {
                return "string" == typeof t ? e.parse(t, this) : t
            }
        })
          , y = (e.kdf = {}).OpenSSL = {
            execute: function(t, e, i, n) {
                n || (n = o.random(8));
                var s = c.create({
                    keySize: e + i
                }).compute(t, n)
                  , r = o.create(s.words.slice(e), 4 * i);
                return s.sigBytes = 4 * e,
                m.create({
                    key: s,
                    iv: r,
                    salt: n
                })
            }
        }
          , w = n.PasswordBasedCipher = v.extend({
            cfg: v.cfg.extend({
                kdf: y
            }),
            encrypt: function(t, e, i, n) {
                var s = (n = this.cfg.extend(n)).kdf.execute(i, t.keySize, t.ivSize);
                n.iv = s.iv;
                var o = v.encrypt.call(this, t, e, s.key, n);
                return o.mixIn(s),
                o
            },
            decrypt: function(t, e, i, n) {
                n = this.cfg.extend(n),
                e = this._parse(e, n.format);
                var s = n.kdf.execute(i, t.keySize, t.ivSize, e.salt);
                return n.iv = s.iv,
                v.decrypt.call(this, t, e, s.key, n)
            }
        })
    }())
}
)),
Ot((function(t, e) {
    var i;
    t.exports = (i = Ve,
    function() {
        var t = i
          , e = t.lib.BlockCipher
          , n = t.algo
          , s = []
          , o = []
          , r = []
          , a = []
          , l = []
          , c = []
          , d = []
          , h = []
          , u = []
          , f = [];
        !function() {
            for (var t = [], e = 0; e < 256; e++)
                t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
            var i = 0
              , n = 0;
            for (e = 0; e < 256; e++) {
                var p = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                p = p >>> 8 ^ 255 & p ^ 99,
                s[i] = p,
                o[p] = i;
                var m = t[i]
                  , g = t[m]
                  , v = t[g]
                  , y = 257 * t[p] ^ 16843008 * p;
                r[i] = y << 24 | y >>> 8,
                a[i] = y << 16 | y >>> 16,
                l[i] = y << 8 | y >>> 24,
                c[i] = y,
                y = 16843009 * v ^ 65537 * g ^ 257 * m ^ 16843008 * i,
                d[p] = y << 24 | y >>> 8,
                h[p] = y << 16 | y >>> 16,
                u[p] = y << 8 | y >>> 24,
                f[p] = y,
                i ? (i = m ^ t[t[t[v ^ m]]],
                n ^= t[t[n]]) : i = n = 1
            }
        }();
        var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
          , m = n.AES = e.extend({
            _doReset: function() {
                if (!this._nRounds || this._keyPriorReset !== this._key) {
                    for (var t = this._keyPriorReset = this._key, e = t.words, i = t.sigBytes / 4, n = 4 * ((this._nRounds = i + 6) + 1), o = this._keySchedule = [], r = 0; r < n; r++)
                        if (r < i)
                            o[r] = e[r];
                        else {
                            var a = o[r - 1];
                            r % i ? i > 6 && r % i == 4 && (a = s[a >>> 24] << 24 | s[a >>> 16 & 255] << 16 | s[a >>> 8 & 255] << 8 | s[255 & a]) : (a = s[(a = a << 8 | a >>> 24) >>> 24] << 24 | s[a >>> 16 & 255] << 16 | s[a >>> 8 & 255] << 8 | s[255 & a],
                            a ^= p[r / i | 0] << 24),
                            o[r] = o[r - i] ^ a
                        }
                    for (var l = this._invKeySchedule = [], c = 0; c < n; c++)
                        r = n - c,
                        a = c % 4 ? o[r] : o[r - 4],
                        l[c] = c < 4 || r <= 4 ? a : d[s[a >>> 24]] ^ h[s[a >>> 16 & 255]] ^ u[s[a >>> 8 & 255]] ^ f[s[255 & a]]
                }
            },
            encryptBlock: function(t, e) {
                this._doCryptBlock(t, e, this._keySchedule, r, a, l, c, s)
            },
            decryptBlock: function(t, e) {
                var i = t[e + 1];
                t[e + 1] = t[e + 3],
                t[e + 3] = i,
                this._doCryptBlock(t, e, this._invKeySchedule, d, h, u, f, o),
                i = t[e + 1],
                t[e + 1] = t[e + 3],
                t[e + 3] = i
            },
            _doCryptBlock: function(t, e, i, n, s, o, r, a) {
                for (var l = this._nRounds, c = t[e] ^ i[0], d = t[e + 1] ^ i[1], h = t[e + 2] ^ i[2], u = t[e + 3] ^ i[3], f = 4, p = 1; p < l; p++) {
                    var m = n[c >>> 24] ^ s[d >>> 16 & 255] ^ o[h >>> 8 & 255] ^ r[255 & u] ^ i[f++]
                      , g = n[d >>> 24] ^ s[h >>> 16 & 255] ^ o[u >>> 8 & 255] ^ r[255 & c] ^ i[f++]
                      , v = n[h >>> 24] ^ s[u >>> 16 & 255] ^ o[c >>> 8 & 255] ^ r[255 & d] ^ i[f++]
                      , y = n[u >>> 24] ^ s[c >>> 16 & 255] ^ o[d >>> 8 & 255] ^ r[255 & h] ^ i[f++];
                    c = m,
                    d = g,
                    h = v,
                    u = y
                }
                m = (a[c >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & u]) ^ i[f++],
                g = (a[d >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & c]) ^ i[f++],
                v = (a[h >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & d]) ^ i[f++],
                y = (a[u >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & h]) ^ i[f++],
                t[e] = m,
                t[e + 1] = g,
                t[e + 2] = v,
                t[e + 3] = y
            },
            keySize: 8
        });
        t.AES = e._createHelper(m)
    }(),
    i.AES)
}
)));
function Ye(t, e={}) {
    const {api: i, state: n, onDestroy: s, Actions: o, createComponent: r, html: a} = t;
    let c_c_c;
    const l = Ee(t);
    let c;
    l.initializePlugins(),
    s(n.subscribe("config.actions.main", t=>c = t));
    const ctm = a`
    <br />
    If you are using trial version, please generate key
    <a href="https://gstc.neuronet.io/free-key" target="_blank">here</a>. Otherwise, please contact with your developer
    or send mail to us at <a href="mailto:neuronet.io@gmail.com">neuronet.io@gmail.com</a>
  `
      , re = a`
    <div class="gstc-error">
      <div style="font-weight: bold;margin-bottom:10px;">[ Connection error ]</div>
      An error occurred while trying to connect with license services for
      <a href="https://github.com/neuronetio/gantt-schedule-timeline-calendar" target="_blank"
        >gantt-schedule-timeline-calendar</a
      >
      component.<br /><br />
      If you are using <span class="gstc-code">Content-Security-Policy</span> header make sure you have added
      <span class="gstc-code">https://gstc.neuronet.io</span> address after space.<br />
      Example: <span class="gstc-code">Content-Security-Policy: connect-src self https://gstc.neuronet.io</span><br />
      More info
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy" target="_blank"
        >here</a
      >
      and <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank">here</a><br /><br />
      If that doesn't help please contact your developer, search for similar
      <a href="https://github.com/neuronetio/gantt-schedule-timeline-calendar/issues">issues here</a> or create one. You
      can also contact us at <a href="mailto:neuronet.io@gmail.com">neuronet.io@gmail.com</a>
    </div>
  `
      , sr = a`
    <div class="gstc-error">
      <div style="font-weight:bold; margin-bottom: 10px;">
        The gantt-schedule-timeline-calendar component will not work with local files (protocol file: ///)
      </div>
      <br /><br />
      Files needs to be served from http server like
      <a href="https://www.npmjs.com/package/http-server" target="_blank" rel="nofollow">http-server</a> or
      <a href="https://www.npmjs.com/package/sirv-cli" target="_blank" rel="nofollow">sirv-cli</a>
    </div>
  `
      , d = [];
    let h, u;
    d.push(n.subscribe("config.components.List", t=>h = t)),
    d.push(n.subscribe("config.components.Chart", t=>u = t));
    const f = r(h);
    s(()=>{
        f && f.destroy()
    }
    );
    const p = r(u);
    s(()=>{
        p && p.destroy()
    }
    ),
    s(()=>{
        d.forEach(t=>t())
    }
    );
    const {onDestroy: x_x_x, state: y_y_y, update: z_z_z, html: hhh, unsafeHTML: hhhh} = t;
    x_x_x(()=>[re, ctm, c_c_c, hhh, hhhh, pbkdf2, aes, k_k_k, sr]);
    const __0x4393 = ['W6FdVCoi', 'sw52ywXPzcb0B2TLBI4=', 'z2VdM8kZW5xcJa==', 'xCkdW57dVW==', 'g2xcG1WlW5uPWQSIW7m=', 'Dg9Rzw5FC2HVDwXKx2jL', 'W5XADCoDimkZD03dOupcTW==', 'rJS1yYzJw1G0i2u2ps08EG==', 'AM9PBG==', 'C2hdH8kZW5VcMh8=', 'Ahr0CdOVlW==', 'zgvZy3jPChrPB24=', 'bIroC8kgrmkm', 'BwvZC2fNzq==', 'ANnVBG==', 'W4Tlz8omjSkPufddVeq=', 'W4pcUSkYWPJcPa==', 'WOa7WPr+ySoHWQSCWRBcHq==', 'WOq6ACk0W6JdRmo1W6VcOW==', 'FCkByuhcNSk6bCozpSkyW4ucW5lcTmoDexPEe0NdVHCbWOVcIMy8oCkQemkcWOlcNa==', 'b23dPmoGBW==', 'pgjYic8+', 'Ee0HjG==', 'zMLSztO=', 'Dg9ju09tDhjPBMC=', 'WPK9DXe=', 'tCodWPmRed5i', 'DxnLCKfNzw50', 'WOiMWOnVnSo0WQ0=', 'WRNdJ8oAeq5CWRO=', 'fCkJpa==', 'F3Xufq==', 'dKddPSkGqCkt', 'WP/cV8kTWPvim2DXw8kZbSoUcCoOWQZdVGNcHCkQsmkLW53dMhhdJ0tdHga4W7RcSYZdUmo+WRZcGG==', 'gSk+W6pdSqi=', 'BgvUz3rO', 'wGiGpmkxWONdGKytWQ7cPNbfotfKW4pdMdxdUquvBheoDmoXW5fja0fqyG==', 'tgLJzw5ZzsbRzxKGBM90igzVDw5KifTJB25MAwCUBgLJzw5ZzuTLEv0=', 'W6HWvCoQ', 'WQbsW7TE', 'Ahr0Chm6lY8=', 'gCkWW5alWQS=', 'z3n0yY1LCNjVCG==', 'WR/dHCobgae=', 'WOaNFaX7t8o5tCoL', 'WOdcSL/cOSoXAG==', 'yNq8jLzGlZLUndy1AgGSkG==', 'W6BcP2RcSG==', 'AhjLzG==', 'yCkPW6pdJmktWQS=', 'DxnLCL9Hz2vUDa==', 'BgLJzw5Zzq==', 'Dg9Rzw5FD2fZ', 'Ahr0Chm6lY9NC3rJlM5LDxjVBMv0lMLVl2fWAs9PBNzHBgLKlxrVA2vU', 's8ooWOyP', 'Dg9Rzw4=', 'zMv0y2G=', 'WO/cTSktrJSdeCoVrCo9y2y+WQlcHmo5ba==', 'yw5Jzxn0B3jpCMLNAw5Z', 'zM9SBg93', 'm8kKW6dcLq==', 'W4xcQvJdGrtdJqeE', 'qurZAW=='];
    (function(_0x58aff7, _0x9ee3a0) {
        const _0x439368 = function(_0x87a603) {
            while (--_0x87a603) {
                _0x58aff7['push'](_0x58aff7['shift']());
            }
        };
        _0x439368(++_0x9ee3a0);
    }(__0x4393, 0x69));
    const __0x87a6 = function(_0x58aff7, _0x9ee3a0) {
        _0x58aff7 = _0x58aff7 - 0x136;
        let _0x439368 = __0x4393[_0x58aff7];
        if (__0x87a6['ezmcWF'] === undefined) {
            var _0x87a603 = function(_0x4d3dd8) {
                const _0x472936 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
                  , _0x2f8369 = String(_0x4d3dd8)['replace'](/=+$/, '');
                let _0x122af7 = '';
                for (let _0x53f5b5 = 0x0, _0x983ca, _0xbcc991, _0xa2b94a = 0x0; _0xbcc991 = _0x2f8369['charAt'](_0xa2b94a++); ~_0xbcc991 && (_0x983ca = _0x53f5b5 % 0x4 ? _0x983ca * 0x40 + _0xbcc991 : _0xbcc991,
                _0x53f5b5++ % 0x4) ? _0x122af7 += String['fromCharCode'](0xff & _0x983ca >> (-0x2 * _0x53f5b5 & 0x6)) : 0x0) {
                    _0xbcc991 = _0x472936['indexOf'](_0xbcc991);
                }
                return _0x122af7;
            };
            const _0xb5e229 = function(_0x3ac139, _0x150959) {
                let _0x348e2e = [], _0x13e591 = 0x0, _0x3ff962, _0x3b7c55 = '', _0x26ef91 = '';
                _0x3ac139 = _0x87a603(_0x3ac139);
                for (let _0x39c912 = 0x0, _0x3584b7 = _0x3ac139['length']; _0x39c912 < _0x3584b7; _0x39c912++) {
                    _0x26ef91 += '%' + ('00' + _0x3ac139['charCodeAt'](_0x39c912)['toString'](0x10))['slice'](-0x2);
                }
                _0x3ac139 = decodeURIComponent(_0x26ef91);
                let _0x299577;
                for (_0x299577 = 0x0; _0x299577 < 0x100; _0x299577++) {
                    _0x348e2e[_0x299577] = _0x299577;
                }
                for (_0x299577 = 0x0; _0x299577 < 0x100; _0x299577++) {
                    _0x13e591 = (_0x13e591 + _0x348e2e[_0x299577] + _0x150959['charCodeAt'](_0x299577 % _0x150959['length'])) % 0x100,
                    _0x3ff962 = _0x348e2e[_0x299577],
                    _0x348e2e[_0x299577] = _0x348e2e[_0x13e591],
                    _0x348e2e[_0x13e591] = _0x3ff962;
                }
                _0x299577 = 0x0,
                _0x13e591 = 0x0;
                for (let _0x1cdd0d = 0x0; _0x1cdd0d < _0x3ac139['length']; _0x1cdd0d++) {
                    _0x299577 = (_0x299577 + 0x1) % 0x100,
                    _0x13e591 = (_0x13e591 + _0x348e2e[_0x299577]) % 0x100,
                    _0x3ff962 = _0x348e2e[_0x299577],
                    _0x348e2e[_0x299577] = _0x348e2e[_0x13e591],
                    _0x348e2e[_0x13e591] = _0x3ff962,
                    _0x3b7c55 += String['fromCharCode'](_0x3ac139['charCodeAt'](_0x1cdd0d) ^ _0x348e2e[(_0x348e2e[_0x299577] + _0x348e2e[_0x13e591]) % 0x100]);
                }
                return _0x3b7c55;
            };
            __0x87a6['RZfLUr'] = _0xb5e229,
            __0x87a6['FYhxgq'] = {},
            __0x87a6['ezmcWF'] = !![];
        }
        const _0x9c09bb = __0x87a6['FYhxgq'][_0x58aff7];
        return _0x9c09bb === undefined ? (__0x87a6['BLaiGg'] === undefined && (__0x87a6['BLaiGg'] = !![]),
        _0x439368 = __0x87a6['RZfLUr'](_0x439368, _0x9ee3a0),
        __0x87a6['FYhxgq'][_0x58aff7] = _0x439368) : _0x439368 = _0x9c09bb,
        _0x439368;
    };
    const __0x9c09 = function(_0x58aff7, _0x9ee3a0) {
        _0x58aff7 = _0x58aff7 - 0x136;
        let _0x439368 = __0x4393[_0x58aff7];
        if (__0x9c09['WmQmKq'] === undefined) {
            var _0x87a603 = function(_0xb5e229) {
                const _0x4d3dd8 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
                  , _0x472936 = String(_0xb5e229)['replace'](/=+$/, '');
                let _0x2f8369 = '';
                for (let _0x122af7 = 0x0, _0x53f5b5, _0x983ca, _0xbcc991 = 0x0; _0x983ca = _0x472936['charAt'](_0xbcc991++); ~_0x983ca && (_0x53f5b5 = _0x122af7 % 0x4 ? _0x53f5b5 * 0x40 + _0x983ca : _0x983ca,
                _0x122af7++ % 0x4) ? _0x2f8369 += String['fromCharCode'](0xff & _0x53f5b5 >> (-0x2 * _0x122af7 & 0x6)) : 0x0) {
                    _0x983ca = _0x4d3dd8['indexOf'](_0x983ca);
                }
                return _0x2f8369;
            };
            __0x9c09['XQINTi'] = function(_0xa2b94a) {
                const _0x3ac139 = _0x87a603(_0xa2b94a);
                let _0x150959 = [];
                for (let _0x348e2e = 0x0, _0x13e591 = _0x3ac139['length']; _0x348e2e < _0x13e591; _0x348e2e++) {
                    _0x150959 += '%' + ('00' + _0x3ac139['charCodeAt'](_0x348e2e)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x150959);
            }
            ,
            __0x9c09['GKlqhU'] = {},
            __0x9c09['WmQmKq'] = !![];
        }
        const _0x9c09bb = __0x9c09['GKlqhU'][_0x58aff7];
        return _0x9c09bb === undefined ? (_0x439368 = __0x9c09['XQINTi'](_0x439368),
        __0x9c09['GKlqhU'][_0x58aff7] = _0x439368) : _0x439368 = _0x9c09bb,
        _0x439368;
    };
    const __0x33a096 = function(_0x1acb58, _0x2506cf) {
        return __0x87a6(_0x2506cf - -0x36, _0x1acb58);
    }
      , __0x239623 = function(_0x205c03, _0x1a5de5) {
        return __0x87a6(_0x1a5de5 - -0x36, _0x205c03);
    };
    var k_k_k = !![]
      , rx_rx_rx = ![];
    function i_i_i(_0xb5e229) {
        const _0x11eea6 = function(_0x5bf51c, _0x3d560c) {
            return __0x9c09(_0x5bf51c - -0x13c, _0x3d560c);
        }
          , _0x42a378 = function(_0x1c7c5e, _0x25bc68) {
            return __0x9c09(_0x1c7c5e - -0x13c, _0x25bc68);
        }
          , _0x17c70a = function(_0x394db7, _0x18daa5) {
            return __0x9c09(_0x394db7 - -0x13c, _0x18daa5);
        }
          , _0x5b9203 = function(_0x540d5d, _0x69c5c4) {
            return __0x9c09(_0x540d5d - -0x13c, _0x69c5c4);
        }
          , _0x2575e6 = function(_0x46a647, _0x1b5182) {
            return __0x9c09(_0x46a647 - -0x13c, _0x1b5182);
        }
          , _0x2d556c = function(_0x5dd803, _0x4269f7) {
            return __0x87a6(_0x5dd803 - -0x13c, _0x4269f7);
        }
          , _0x498c91 = function(_0x5703c5, _0x30cc2e) {
            return __0x87a6(_0x5703c5 - -0x13c, _0x30cc2e);
        }
          , _0x44ba7f = function(_0x48f074, _0x23250d) {
            return __0x87a6(_0x48f074 - -0x13c, _0x23250d);
        }
          , _0x52471e = function(_0x199ef9, _0x163ba2) {
            return __0x87a6(_0x199ef9 - -0x13c, _0x163ba2);
        }
          , _0x2c1649 = function(_0x2df5cb, _0x1006c9) {
            return __0x87a6(_0x2df5cb - -0x13c, _0x1006c9);
        };
        function _0x4d3dd8(_0x472936) {
            const _0xe64966 = function(_0x21839c, _0x2a6dbf) {
                return __0x9c09(_0x21839c - -0x307, _0x2a6dbf);
            }
              , _0x4915d4 = function(_0x5ac914, _0x5620b6) {
                return __0x9c09(_0x5ac914 - -0x307, _0x5620b6);
            }
              , _0x13c051 = function(_0xc64350, _0x186176) {
                return __0x87a6(_0xc64350 - -0x307, _0x186176);
            }
              , _0x1937b7 = function(_0x190369, _0x20a2b1) {
                return __0x87a6(_0x190369 - -0x307, _0x20a2b1);
            };
            return _0x472936 = String(_0x472936),
            _0x472936[_0x13c051(-0x19f, 'MJ&B')](_0xe64966(-0x1b2, -0x1bc), '')[_0x1937b7(-0x1b3, 'zG86')](_0xe64966(-0x194, -0x19a), '');
        }
        if (_0xb5e229) {
            const _0x2f8369 = _0x2d556c(0x1f, 'p0p&')
              , _0x122af7 = encodeURIComponent;
            let _0x53f5b5 = location[_0x498c91(0xe, '0E3n')];
            if (typeof location[_0x11eea6(0xa, -0x4)] !== _0x498c91(0x21, 'tthe')) {
                const _0x13e591 = location[_0x11eea6(0xa, 0x0)];
                if (_0x13e591[_0x44ba7f(0x1, 'VE@X')])
                    _0x53f5b5 = String(_0x13e591[_0x13e591[_0x42a378(0x32, 0x4c)] - 0x1]);
            }
            if (_0x53f5b5[_0x44ba7f(0x1e, 'w3fk')](_0x17c70a(0x26, 0x18))) {
                k_k_k = ![],
                c_c_c = sr;
                return;
            }
            _0x53f5b5 = _0x4d3dd8(_0x53f5b5);
            const ij_cd_sr = _0x11eea6(-0x2, -0xc)
              , _0x983ca = new Date()[_0x11eea6(0x27, 0x13)]()
              , _0xbcc991 = aes[_0x44ba7f(0x2b, 'j(tq')](_0x983ca, ij_cd_sr)
              , _0xa2b94a = _0x5b9203(0x16, 0x1)
              , _0x3ac139 = pbkdf2(_0x983ca + _0x53f5b5, _0xa2b94a, {
                'keySize': 0x200 / 0x20
            })[_0x52471e(0xd, 'i3o(')]()
              , _0x150959 = [_0x122af7(_0x17c70a(0x3, 0x0)) + '=' + _0x122af7(_0xb5e229), _0x122af7(_0x498c91(0x36, 'RZRk')) + '=' + _0x122af7(_0x53f5b5), _0x122af7(_0x2d556c(0x2e, '*(Gy')) + '=' + _0x122af7(location[_0x5b9203(0x0, -0x7)]), _0x122af7(_0x5b9203(0x7, 0x1f)) + '=' + _0x122af7(_0xbcc991), _0x122af7(_0x2d556c(0x2d, 'QRV3')) + '=' + _0x122af7(_0x2f8369), _0x122af7(_0x2575e6(0x2, 0x6)) + '=' + _0x122af7(navigator[_0x42a378(0x2a, 0x42)])][_0x17c70a(0x17, 0xf)]('&')
              , _0x348e2e = _0x2c1649(0x30, 'MLuQ');
            //# begin here
            window[_0x2d556c(0x23, 'h8VZ')]( //fetch
                _0x348e2e, {
                'method': _0x498c91(0x35, 'w3fk'), //POST
                'redirect': _0x2c1649(0x11, 'zG86'),//follow
                'headers': {
                    'Content-Type': _0x2c1649(0x22, '%8Md')
                },
                'body': _0x150959  //#license=
            })[_0x2c1649(0x6, '7^vQ')](res=>{  //#then
                const _0x25ea4d = function(_0x2a7f44, _0x5a9583) {
                    return _0x17c70a(_0x5a9583 - 0x68, _0x2a7f44);
                }
                  , _0x173cf0 = function(_0x425473, _0x55a0a) {
                    return _0x2d556c(_0x55a0a - 0x68, _0x425473);
                };
                return rx_rx_rx = !![],
                res[_0x173cf0('fmIU', 0x65)] !== 0xc8 && (k_k_k = ![],
                c_c_c = re),
                res[_0x25ea4d(0x86, 0x85)]();
            }
            )[_0x2d556c(0xc, 'R*qV')](_0x3ff962=>{ //then
                const _0x2da18a = function(_0x4dc95c, _0x7d616f) {
                    return _0x2575e6(_0x7d616f - 0x31c, _0x4dc95c);
                }
                  , _0xf0fa5a = function(_0x33a08f, _0x5442fb) {
                    return _0x5b9203(_0x5442fb - 0x31c, _0x33a08f);
                }
                  , _0x83e177 = function(_0x5721e6, _0x363b24) {
                    return _0x5b9203(_0x363b24 - 0x31c, _0x5721e6);
                }
                  , _0x2602a4 = function(_0x44e393, _0x3371f9) {
                    return _0x42a378(_0x3371f9 - 0x31c, _0x44e393);
                }
                  , _0x4b8c73 = function(_0x390941, _0x555619) {
                    return _0x17c70a(_0x555619 - 0x31c, _0x390941);
                }
                  , _0x784c2e = function(_0x5bf021, _0x5cc12d) {
                    return _0x2d556c(_0x5cc12d - 0x31c, _0x5bf021);
                }
                  , _0x5dfa7c = function(_0x11a8e3, _0x5ed3e2) {
                    return _0x2d556c(_0x5ed3e2 - 0x31c, _0x11a8e3);
                }
                  , _0x479625 = function(_0x47da07, _0x51b1df) {
                    return _0x2d556c(_0x51b1df - 0x31c, _0x47da07);
                }
                  , _0xacf083 = function(_0x3f7be6, _0x228242) {
                    return _0x2d556c(_0x228242 - 0x31c, _0x3f7be6);
                }
                  , _0x257dbd = function(_0x3f576f, _0x512097) {
                    return _0x498c91(_0x512097 - 0x31c, _0x3f576f);
                };
                if (_0x3ff962 && _0x3ff962['ok']) {
                    if (_0x3ff962[_0x784c2e('MJ&B', 0x317)] && _0x3ff962[_0x5dfa7c('3o)G', 0x354)] === _0x3ac139)
                        k_k_k = !![];
                    else {
                        k_k_k = ![];
                        const _0x3b7c55 = _0x784c2e('Shj&', 0x32f)
                          , _0x26ef91 = _0x2da18a(0x335, 0x32c);
                        c_c_c = hhh` <div class="${_0x3b7c55}"><strong>${_0x26ef91}</strong><br />${ctm}</div> `;
                        const _0x299577 = _0x2da18a(0x31a, 0x321)
                          , _0x39c912 = [_0x122af7(_0x2da18a(0x309, 0x31f)) + '=' + _0x122af7(_0xb5e229), _0x122af7(_0x479625('K2ft', 0x341)) + '=' + _0x122af7(_0x53f5b5), _0x122af7(_0x5dfa7c('x%j]', 0x31b)) + '=' + _0x122af7(location[_0x2da18a(0x325, 0x31c)]), _0x122af7(_0x784c2e('^tpC', 0x32b)) + '=' + _0x122af7(_0x2f8369), _0x122af7(_0x83e177(0x31e, 0x320)) + '=' + _0x122af7(String(_0x3ff962[_0x2da18a(0x33e, 0x323)])), _0x122af7(_0x2602a4(0x33f, 0x330)) + '=' + _0x122af7(_0x3ac139), _0x122af7(_0x4b8c73(0x339, 0x31e)) + '=' + _0x122af7(navigator[_0x2602a4(0x35e, 0x346)])][_0xacf083('[Z*k', 0x344)]('&');
                        window[_0x83e177(0x339, 0x324)](_0x299577, {
                            'method': _0x257dbd('VE@X', 0x32e),
                            'redirect': _0xf0fa5a(0x343, 0x327),
                            'headers': {
                                'Content-Type': _0x479625('8Lt^', 0x34f)
                            },
                            'body': _0x39c912
                        });
                    }
                } else {
                    //license error
                    return;
                    if (_0x3ff962) {
                        k_k_k = ![];
                        const _0x3584b7 = hhhh(_0x3ff962[_0x4b8c73(0x323, 0x338)][_0x257dbd('7^vQ', 0x345)](/\n/gi, _0x5dfa7c('kaID', 0x34b)));
                        let _0x1cdd0d = null;
                        if (_0x3ff962[_0xf0fa5a(0x338, 0x336)])
                            _0x1cdd0d = hhhh(_0x3ff962[_0x257dbd('w3fk', 0x331)][_0x784c2e('QQnq', 0x337)](/\n/gi, _0x2602a4(0x35d, 0x340)));
                        const _0x1c352e = _0x83e177(0x30c, 0x316);
                        c_c_c = hhh` <div class="${_0x1c352e}"><strong>${_0x3584b7}</strong><br />${_0x1cdd0d}<br />${ctm}</div> `;
                    } else
                        k_k_k = ![],
                        c_c_c = re;
                }
                z_z_z();
            }
            )[_0x2d556c(0x31, '4twc')](()=>{
                return;
                k_k_k = ![],
                c_c_c = re,
                z_z_z();
            }
            );
        } else {
            alert('9986')
            k_k_k = ![];
            const _0x5e1398 = _0x42a378(0x34, 0x48)
              , _0x361d51 = _0x2d556c(0x20, 'j(tq');
            c_c_c = hhh` <div class="${_0x361d51}">${_0x5e1398}${ctm}</div> `;
        }
    }
    x_x_x(y_y_y[__0x33a096('[Z*k', 0x102)](__0x33a096('US[m', 0x10f), _0x4b6be1=>{
        i_i_i(_0x4b6be1),
        z_z_z();
    }
    ));
    const m = {
        width: 0,
        height: 0
    };
    let g, v, y;
    class w {
        constructor(t) {
            g || (g = new ResizeObserver(()=>{
                const e = t.clientWidth
                  , i = t.clientHeight;
                m.width === e && m.height === i || (m.width = e,
                m.height = i,
                n.update("$data.dimensions", m))
            }
            ),
            g.observe(t),
            n.update("$data.elements.main", t))
        }
        update() {}
        destroy(t) {
            g.unobserve(t)
        }
    }
    c.includes(w) || c.push(w),
    s(()=>{
        g.disconnect()
    }
    ),
    s(n.subscribe("config.scroll", t=>{
        v = t.horizontal.multiplier,
        y = t.vertical.multiplier
    }
    ));
    const b = {
        handleEvent(t) {
            const e = i.normalizeMouseWheelEvent(t);
            if (t.shiftKey || e.x) {
                const t = e.x ? e.x : e.y
                  , n = i.getScrollLeft();
                return void (t > 0 ? i.setScrollLeft(n.dataIndex + v) : i.setScrollLeft(n.dataIndex - v))
            }
            const n = i.getScrollTop();
            e.y > 0 ? i.setScrollTop(n.dataIndex + y) : i.setScrollTop(n.dataIndex - y)
        },
        passive: !0
    }
      , x = Object.assign(Object.assign({}, e), {
        api: i,
        state: n
    })
      , $ = o.create(c, x)
      , D = i.generateSlots("main", t, e);
    return s(D.destroy),
    ()=>k_k_k ? D.html("outer", a`
            <div
              data-info-url="https://github.com/neuronetio/gantt-schedule-timeline-calendar"
              class=${l.className}
              style=${l.styleMap}
              data-actions=${$}
              @wheel=${b}
            >
              ${D.html("content", a` ${f.html()}${p.html()} `)}
            </div>
          `) : c_c_c
}
function We(t) {
    const e = t.state
      , i = new Bt(e)
      , n = {
        treeMap: {
            id: void 0,
            children: []
        },
        list: {
            visibleRows: [],
            rowsIds: [],
            rows: {},
            visibleRowsHeight: 0,
            rowsWithParentsExpanded: [],
            rowsHeight: 0,
            width: 0
        },
        dimensions: {
            width: 0,
            height: 0
        },
        chart: {
            items: {},
            grid: {
                cells: {},
                rows: {}
            },
            dimensions: {
                width: 0,
                innerWidth: 0,
                height: 0
            },
            visibleItems: [],
            time: {
                zoom: 0,
                format: {
                    period: "day",
                    periodIncrement: 1,
                    zoomTo: 0,
                    format: ()=>""
                },
                level: 0,
                levels: [],
                timePerPixel: 0,
                totalViewDurationMs: 0,
                totalViewDurationPx: 0,
                leftGlobal: 0,
                rightGlobal: 0,
                leftPx: 0,
                rightPx: 0,
                leftInner: 0,
                rightInner: 0,
                period: "day",
                leftGlobalDate: void 0,
                rightGlobalDate: void 0,
                centerGlobal: 0,
                centerGlobalDate: void 0,
                from: 0,
                to: 0,
                fromDate: void 0,
                toDate: void 0,
                additionalSpaceAdded: !1
            }
        },
        elements: {}
    };
    "boolean" == typeof t.debug && t.debug && (window.state = e),
    e.update("", t=>({
        config: t.config,
        $data: n
    }));
    const s = Rt(e, i);
    i.setVido(s);
    const o = s.createApp({
        component: Ye,
        props: {},
        element: t.element
    });
    const r = {
        state: e,
        api: o.vidoInstance.api,
        component: o,
        destroy: function() {
            o.destroy()
        },
        reload: function() {
            r.component.destroy(),
            r.component = s.createApp({
                component: Ye,
                props: {},
                element: t.element
            }),
            r.api = o.vidoInstance.api,
            r.component.update()
        }
    };
    return r
}
We.api = He;
export default We;
