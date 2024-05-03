// ==UserScript==
// @name       wa-plusplus
// @namespace  npm/vite-plugin-monkey
// @version    0.2.4
// @author     monkey
// @icon       https://vitejs.dev/logo.svg
// @match      https://web.whatsapp.com
// @require    https://cdn.jsdelivr.net/npm/preact@10.19.3/dist/preact.min.js
// @sandbox    JavaScript
// @grant      none
// ==/UserScript==

(function (preact) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __assign = function() {
    __assign = Object.assign || function __assign2(t2) {
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
        for (var p2 in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p2))
            t2[p2] = s2[p2];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i2 = 0, l2 = from2.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i2);
          ar[i2] = from2[i2];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }
  var t$1, r$1, u$2, i$1, o$1 = 0, f$3 = [], c$1 = [], e$1 = preact.options.__b, a$1 = preact.options.__r, v$2 = preact.options.diffed, l$1 = preact.options.__c, m$2 = preact.options.unmount;
  function d$1(t2, u2) {
    preact.options.__h && preact.options.__h(r$1, t2, o$1 || u2), o$1 = 0;
    var i2 = r$1.__H || (r$1.__H = { __: [], __h: [] });
    return t2 >= i2.__.length && i2.__.push({ __V: c$1 }), i2.__[t2];
  }
  function h$1(n2) {
    return o$1 = 1, s$1(B$2, n2);
  }
  function s$1(n2, u2, i2) {
    var o2 = d$1(t$1++, 2);
    if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B$2(void 0, u2), function(n3) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = r$1, !r$1.u)) {
      var f2 = function(n3, t2, r2) {
        if (!o2.__c.__H)
          return true;
        var u3 = o2.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u3.every(function(n4) {
          return !n4.__N;
        }))
          return !c2 || c2.call(this, n3, t2, r2);
        var i3 = false;
        return u3.forEach(function(n4) {
          if (n4.__N) {
            var t3 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
          }
        }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
      };
      r$1.u = true;
      var c2 = r$1.shouldComponentUpdate, e2 = r$1.componentWillUpdate;
      r$1.componentWillUpdate = function(n3, t2, r2) {
        if (this.__e) {
          var u3 = c2;
          c2 = void 0, f2(n3, t2, r2), c2 = u3;
        }
        e2 && e2.call(this, n3, t2, r2);
      }, r$1.shouldComponentUpdate = f2;
    }
    return o2.__N || o2.__;
  }
  function p$1(u2, i2) {
    var o2 = d$1(t$1++, 3);
    !preact.options.__s && z$2(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r$1.__H.__h.push(o2));
  }
  function y$2(u2, i2) {
    var o2 = d$1(t$1++, 4);
    !preact.options.__s && z$2(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r$1.__h.push(o2));
  }
  function _$1(n2) {
    return o$1 = 5, F$2(function() {
      return { current: n2 };
    }, []);
  }
  function A$2(n2, t2, r2) {
    o$1 = 6, y$2(function() {
      return "function" == typeof n2 ? (n2(t2()), function() {
        return n2(null);
      }) : n2 ? (n2.current = t2(), function() {
        return n2.current = null;
      }) : void 0;
    }, null == r2 ? r2 : r2.concat(n2));
  }
  function F$2(n2, r2) {
    var u2 = d$1(t$1++, 7);
    return z$2(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
  }
  function T$2(n2, t2) {
    return o$1 = 8, F$2(function() {
      return n2;
    }, t2);
  }
  function q$2(n2) {
    var u2 = r$1.context[n2.__c], i2 = d$1(t$1++, 9);
    return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r$1)), u2.props.value) : n2.__;
  }
  function x$3(t2, r2) {
    preact.options.useDebugValue && preact.options.useDebugValue(r2 ? r2(t2) : t2);
  }
  function V$2() {
    var n2 = d$1(t$1++, 11);
    if (!n2.__) {
      for (var u2 = r$1.__v; null !== u2 && !u2.__m && null !== u2.__; )
        u2 = u2.__;
      var i2 = u2.__m || (u2.__m = [0, 0]);
      n2.__ = "P" + i2[0] + "-" + i2[1]++;
    }
    return n2.__;
  }
  function b$1() {
    for (var t2; t2 = f$3.shift(); )
      if (t2.__P && t2.__H)
        try {
          t2.__H.__h.forEach(k$2), t2.__H.__h.forEach(w$3), t2.__H.__h = [];
        } catch (r2) {
          t2.__H.__h = [], preact.options.__e(r2, t2.__v);
        }
  }
  preact.options.__b = function(n2) {
    r$1 = null, e$1 && e$1(n2);
  }, preact.options.__r = function(n2) {
    a$1 && a$1(n2), t$1 = 0;
    var i2 = (r$1 = n2.__c).__H;
    i2 && (u$2 === r$1 ? (i2.__h = [], r$1.__h = [], i2.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c$1, n3.__N = n3.i = void 0;
    })) : (i2.__h.forEach(k$2), i2.__h.forEach(w$3), i2.__h = [], t$1 = 0)), u$2 = r$1;
  }, preact.options.diffed = function(t2) {
    v$2 && v$2(t2);
    var o2 = t2.__c;
    o2 && o2.__H && (o2.__H.__h.length && (1 !== f$3.push(o2) && i$1 === preact.options.requestAnimationFrame || ((i$1 = preact.options.requestAnimationFrame) || j$3)(b$1)), o2.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c$1 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c$1;
    })), u$2 = r$1 = null;
  }, preact.options.__c = function(t2, r2) {
    r2.some(function(t3) {
      try {
        t3.__h.forEach(k$2), t3.__h = t3.__h.filter(function(n2) {
          return !n2.__ || w$3(n2);
        });
      } catch (u2) {
        r2.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r2 = [], preact.options.__e(u2, t3.__v);
      }
    }), l$1 && l$1(t2, r2);
  }, preact.options.unmount = function(t2) {
    m$2 && m$2(t2);
    var r2, u2 = t2.__c;
    u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
      try {
        k$2(n2);
      } catch (n3) {
        r2 = n3;
      }
    }), u2.__H = void 0, r2 && preact.options.__e(r2, u2.__v));
  };
  var g$3 = "function" == typeof requestAnimationFrame;
  function j$3(n2) {
    var t2, r2 = function() {
      clearTimeout(u2), g$3 && cancelAnimationFrame(t2), setTimeout(n2);
    }, u2 = setTimeout(r2, 100);
    g$3 && (t2 = requestAnimationFrame(r2));
  }
  function k$2(n2) {
    var t2 = r$1, u2 = n2.__c;
    "function" == typeof u2 && (n2.__c = void 0, u2()), r$1 = t2;
  }
  function w$3(n2) {
    var t2 = r$1;
    n2.__c = n2.__(), r$1 = t2;
  }
  function z$2(n2, t2) {
    return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n2[r2];
    });
  }
  function B$2(n2, t2) {
    return "function" == typeof t2 ? t2(n2) : t2;
  }
  function g$2(n2, t2) {
    for (var e2 in t2)
      n2[e2] = t2[e2];
    return n2;
  }
  function C$1(n2, t2) {
    for (var e2 in n2)
      if ("__source" !== e2 && !(e2 in t2))
        return true;
    for (var r2 in t2)
      if ("__source" !== r2 && n2[r2] !== t2[r2])
        return true;
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  function w$2(n2, e2) {
    function r2(n3) {
      var t2 = this.props.ref, r3 = t2 == n3.ref;
      return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : C$1(this.props, n3);
    }
    function u2(e3) {
      return this.shouldComponentUpdate = r2, preact.createElement(n2, e3);
    }
    return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
  }
  (E.prototype = new preact.Component()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t2) {
    return C$1(this.props, n2) || C$1(this.state, t2);
  };
  var x$2 = preact.options.__b;
  preact.options.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), x$2 && x$2(n2);
  };
  var R$1 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function N$1(n2) {
    function t2(t3) {
      var e2 = g$2({}, t3);
      return delete e2.ref, n2(e2, t3.ref || null);
    }
    return t2.$$typeof = R$1, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
  }
  var k$1 = function(n2, t2) {
    return null == n2 ? null : preact.toChildArray(preact.toChildArray(n2).map(t2));
  }, A$1 = { map: k$1, forEach: k$1, count: function(n2) {
    return n2 ? preact.toChildArray(n2).length : 0;
  }, only: function(n2) {
    var t2 = preact.toChildArray(n2);
    if (1 !== t2.length)
      throw "Children.only";
    return t2[0];
  }, toArray: preact.toChildArray }, O$1 = preact.options.__e;
  preact.options.__e = function(n2, t2, e2, r2) {
    if (n2.then) {
      for (var u2, o2 = t2; o2 = o2.__; )
        if ((u2 = o2.__c) && u2.__c)
          return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
    }
    O$1(n2, t2, e2, r2);
  };
  var T$1 = preact.options.unmount;
  function F$1(n2, t2, e2) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g$2({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return F$1(n3, t2, e2);
    })), n2;
  }
  function I$1(n2, t2, e2) {
    return n2 && e2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return I$1(n3, t2, e2);
    }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e2)), n2;
  }
  function L$1() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U$1(n2) {
    var t2 = n2.__.__c;
    return t2 && t2.__a && t2.__a(n2);
  }
  function D$1(n2) {
    var e2, r2, u2;
    function o2(o3) {
      if (e2 || (e2 = n2()).then(function(n3) {
        r2 = n3.default || n3;
      }, function(n3) {
        u2 = n3;
      }), u2)
        throw u2;
      if (!r2)
        throw e2;
      return preact.createElement(r2, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }
  function M$2() {
    this.u = null, this.o = null;
  }
  preact.options.unmount = function(n2) {
    var t2 = n2.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & n2.__u && (n2.type = null), T$1 && T$1(n2);
  }, (L$1.prototype = new preact.Component()).__c = function(n2, t2) {
    var e2 = t2.__c, r2 = this;
    null == r2.t && (r2.t = []), r2.t.push(e2);
    var u2 = U$1(r2.__v), o2 = false, i2 = function() {
      o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
    };
    e2.__R = i2;
    var l2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var n3 = r2.state.__a;
          r2.__v.__k[0] = I$1(n3, n3.__c.__P, n3.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
          t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
  }, L$1.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L$1.prototype.render = function(n2, e2) {
    if (this.__b) {
      if (this.__v.__k) {
        var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
        this.__v.__k[0] = F$1(this.__b, r2, o2.__O = o2.__P);
      }
      this.__b = null;
    }
    var i2 = e2.__a && preact.createElement(preact.Fragment, null, n2.fallback);
    return i2 && (i2.__u &= -33), [preact.createElement(preact.Fragment, null, e2.__a ? null : n2.children), i2];
  };
  var V$1 = function(n2, t2, e2) {
    if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
      for (e2 = n2.u; e2; ) {
        for (; e2.length > 3; )
          e2.pop()();
        if (e2[1] < e2[0])
          break;
        n2.u = e2 = e2[2];
      }
  };
  function W$1(n2) {
    return this.getChildContext = function() {
      return n2.context;
    }, n2.children;
  }
  function P(n2) {
    var e2 = this, r2 = n2.i;
    e2.componentWillUnmount = function() {
      preact.render(null, e2.l), e2.l = null, e2.i = null;
    }, e2.i && e2.i !== r2 && e2.componentWillUnmount(), e2.l || (e2.i = r2, e2.l = { nodeType: 1, parentNode: r2, childNodes: [], appendChild: function(n3) {
      this.childNodes.push(n3), e2.i.appendChild(n3);
    }, insertBefore: function(n3, t2) {
      this.childNodes.push(n3), e2.i.appendChild(n3);
    }, removeChild: function(n3) {
      this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.i.removeChild(n3);
    } }), preact.render(preact.createElement(W$1, { context: e2.context }, n2.__v), e2.l);
  }
  function j$2(n2, e2) {
    var r2 = preact.createElement(P, { __v: n2, i: e2 });
    return r2.containerInfo = e2, r2;
  }
  (M$2.prototype = new preact.Component()).__a = function(n2) {
    var t2 = this, e2 = U$1(t2.__v), r2 = t2.o.get(n2);
    return r2[0]++, function(u2) {
      var o2 = function() {
        t2.props.revealOrder ? (r2.push(u2), V$1(t2, n2, r2)) : u2();
      };
      e2 ? e2(o2) : o2();
    };
  }, M$2.prototype.render = function(n2) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var t2 = preact.toChildArray(n2.children);
    n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
    for (var e2 = t2.length; e2--; )
      this.o.set(t2[e2], this.u = [1, 0, this.u]);
    return n2.children;
  }, M$2.prototype.componentDidUpdate = M$2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t2, e2) {
      V$1(n2, e2, t2);
    });
  };
  var z$1 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, B$1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, H$2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Z$1 = /[A-Z0-9]/g, Y$1 = "undefined" != typeof document, $$2 = function(n2) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
  };
  function q$1(n2, t2, e2) {
    return null == t2.__k && (t2.textContent = ""), preact.render(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
  }
  function G$1(n2, t2, e2) {
    return preact.hydrate(n2, t2), "function" == typeof e2 && e2(), n2 ? n2.__c : null;
  }
  preact.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
    Object.defineProperty(preact.Component.prototype, t2, { configurable: true, get: function() {
      return this["UNSAFE_" + t2];
    }, set: function(n2) {
      Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
    } });
  });
  var J$1 = preact.options.event;
  function K$1() {
  }
  function Q$1() {
    return this.cancelBubble;
  }
  function X$1() {
    return this.defaultPrevented;
  }
  preact.options.event = function(n2) {
    return J$1 && (n2 = J$1(n2)), n2.persist = K$1, n2.isPropagationStopped = Q$1, n2.isDefaultPrevented = X$1, n2.nativeEvent = n2;
  };
  var nn, tn = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } }, en = preact.options.vnode;
  preact.options.vnode = function(n2) {
    "string" == typeof n2.type && function(n3) {
      var t2 = n3.props, e2 = n3.type, u2 = {};
      for (var o2 in t2) {
        var i2 = t2[o2];
        if (!("value" === o2 && "defaultValue" in t2 && null == i2 || Y$1 && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
          var l2 = o2.toLowerCase();
          "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : "ondoubleclick" === l2 ? o2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || $$2(t2.type) ? "onfocus" === l2 ? o2 = "onfocusin" : "onblur" === l2 ? o2 = "onfocusout" : H$2.test(o2) ? o2 = l2 : -1 === e2.indexOf("-") && B$1.test(o2) ? o2 = o2.replace(Z$1, "-$&").toLowerCase() : null === i2 && (i2 = void 0) : l2 = o2 = "oninput", "oninput" === l2 && u2[o2 = l2] && (o2 = "oninputCapture"), u2[o2] = i2;
        }
      }
      "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = preact.toChildArray(t2.children).forEach(function(n4) {
        n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
      })), "select" == e2 && null != u2.defaultValue && (u2.value = preact.toChildArray(t2.children).forEach(function(n4) {
        n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
      })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", tn)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
    }(n2), n2.$$typeof = z$1, en && en(n2);
  };
  var rn = preact.options.__r;
  preact.options.__r = function(n2) {
    rn && rn(n2), nn = n2.__c;
  };
  var un = preact.options.diffed;
  preact.options.diffed = function(n2) {
    un && un(n2);
    var t2 = n2.props, e2 = n2.__e;
    null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), nn = null;
  };
  var on = { ReactCurrentDispatcher: { current: { readContext: function(n2) {
    return nn.__n[n2.__c].props.value;
  } } } };
  function cn(n2) {
    return preact.createElement.bind(null, n2);
  }
  function fn(n2) {
    return !!n2 && n2.$$typeof === z$1;
  }
  function an(n2) {
    return fn(n2) && n2.type === preact.Fragment;
  }
  function sn(n2) {
    return fn(n2) ? preact.cloneElement.apply(null, arguments) : n2;
  }
  function hn(n2) {
    return !!n2.__k && (preact.render(null, n2), true);
  }
  function vn(n2) {
    return n2 && (n2.base || 1 === n2.nodeType && n2) || null;
  }
  var dn = function(n2, t2) {
    return n2(t2);
  }, pn = function(n2, t2) {
    return n2(t2);
  }, mn = preact.Fragment;
  function yn(n2) {
    n2();
  }
  function _n(n2) {
    return n2;
  }
  function bn() {
    return [false, yn];
  }
  var Sn = y$2, gn = fn;
  function Cn(n2, t2) {
    var e2 = t2(), r2 = h$1({ h: { __: e2, v: t2 } }), u2 = r2[0].h, o2 = r2[1];
    return y$2(function() {
      u2.__ = e2, u2.v = t2, En(u2) && o2({ h: u2 });
    }, [n2, e2, t2]), p$1(function() {
      return En(u2) && o2({ h: u2 }), n2(function() {
        En(u2) && o2({ h: u2 });
      });
    }, [n2]), e2;
  }
  function En(n2) {
    var t2, e2, r2 = n2.v, u2 = n2.__;
    try {
      var o2 = r2();
      return !((t2 = u2) === (e2 = o2) && (0 !== t2 || 1 / t2 == 1 / e2) || t2 != t2 && e2 != e2);
    } catch (n3) {
      return true;
    }
  }
  var wn = { useState: h$1, useId: V$2, useReducer: s$1, useEffect: p$1, useLayoutEffect: y$2, useInsertionEffect: Sn, useTransition: bn, useDeferredValue: _n, useSyncExternalStore: Cn, startTransition: yn, useRef: _$1, useImperativeHandle: A$2, useMemo: F$2, useCallback: T$2, useContext: q$2, useDebugValue: x$3, version: "17.0.2", Children: A$1, render: q$1, hydrate: G$1, unmountComponentAtNode: hn, createPortal: j$2, createElement: preact.createElement, createContext: preact.createContext, createFactory: cn, cloneElement: sn, createRef: preact.createRef, Fragment: preact.Fragment, isValidElement: fn, isElement: gn, isFragment: an, findDOMNode: vn, Component: preact.Component, PureComponent: E, memo: w$2, forwardRef: N$1, flushSync: pn, unstable_batchedUpdates: dn, StrictMode: mn, Suspense: L$1, SuspenseList: M$2, lazy: D$1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: on };
  var MS = "-ms-";
  var MOZ = "-moz-";
  var WEBKIT = "-webkit-";
  var COMMENT = "comm";
  var RULESET = "rule";
  var DECLARATION = "decl";
  var IMPORT = "@import";
  var KEYFRAMES = "@keyframes";
  var LAYER = "@layer";
  var abs = Math.abs;
  var from = String.fromCharCode;
  var assign = Object.assign;
  function hash(value, length2) {
    return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }
  function trim(value) {
    return value.trim();
  }
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }
  function indexof(value, search, position2) {
    return value.indexOf(search, position2);
  }
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }
  function strlen(value) {
    return value.length;
  }
  function sizeof(value) {
    return value.length;
  }
  function append(value, array) {
    return array.push(value), value;
  }
  function combine(array, callback) {
    return array.map(callback).join("");
  }
  function filter(array, pattern) {
    return array.filter(function(value) {
      return !match(value, pattern);
    });
  }
  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = "";
  function node(value, root, parent, type, props, children, length2, siblings) {
    return { value, root, parent, type, props, children, line, column, length: length2, return: "", siblings };
  }
  function copy(root, props) {
    return assign(node("", null, null, "", null, null, 0, root.siblings), root, { length: -root.length }, props);
  }
  function lift(root) {
    while (root.root)
      root = copy(root.root, { children: [root] });
    append(root, root.siblings);
  }
  function char() {
    return character;
  }
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10)
      column = 1, line--;
    return character;
  }
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10)
      column = 1, line++;
    return character;
  }
  function peek() {
    return charat(characters, position);
  }
  function caret() {
    return position;
  }
  function slice(begin, end) {
    return substr(characters, begin, end);
  }
  function token(type) {
    switch (type) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }
  function dealloc(value) {
    return characters = "", value;
  }
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }
  function whitespace(type) {
    while (character = peek())
      if (character < 33)
        next();
      else
        break;
    return token(type) > 2 || token(character) > 3 ? "" : " ";
  }
  function escaping(index, count) {
    while (--count && next())
      if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
        break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }
  function delimiter(type) {
    while (next())
      switch (character) {
        case type:
          return position;
        case 34:
        case 39:
          if (type !== 34 && type !== 39)
            delimiter(character);
          break;
        case 40:
          if (type === 41)
            delimiter(type);
          break;
        case 92:
          next();
          break;
      }
    return position;
  }
  function commenter(type, index) {
    while (next())
      if (type + character === 47 + 10)
        break;
      else if (type + character === 42 + 42 && peek() === 47)
        break;
    return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
  }
  function identifier(index) {
    while (!token(peek()))
      next();
    return slice(index, position);
  }
  function compile(value) {
    return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
  }
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length2 = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character2 = 0;
    var type = "";
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters2 = type;
    while (scanning)
      switch (previous = character2, character2 = next()) {
        case 40:
          if (previous != 108 && charat(characters2, length2 - 1) == 58) {
            if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f", abs(index ? points[index - 1] : 0)) != -1)
              ampersand = -1;
            break;
          }
        case 34:
        case 39:
        case 91:
          characters2 += delimit(character2);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          characters2 += whitespace(previous);
          break;
        case 92:
          characters2 += escaping(caret() - 1, 7);
          continue;
        case 47:
          switch (peek()) {
            case 42:
            case 47:
              append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
              break;
            default:
              characters2 += "/";
          }
          break;
        case 123 * variable:
          points[index++] = strlen(characters2) * ampersand;
        case 125 * variable:
        case 59:
        case 0:
          switch (character2) {
            case 0:
            case 125:
              scanning = 0;
            case 59 + offset:
              if (ampersand == -1)
                characters2 = replace(characters2, /\f/g, "");
              if (property > 0 && strlen(characters2) - length2)
                append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1, declarations) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2, declarations), declarations);
              break;
            case 59:
              characters2 += ";";
            default:
              append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2, rulesets), rulesets);
              if (character2 === 123)
                if (offset === 0)
                  parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
                else
                  switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2, children), children), rules, children, length2, points, rule ? props : children);
                      break;
                    default:
                      parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                  }
          }
          index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
          break;
        case 58:
          length2 = 1 + strlen(characters2), property = previous;
        default:
          if (variable < 1) {
            if (character2 == 123)
              --variable;
            else if (character2 == 125 && variable++ == 0 && prev() == 125)
              continue;
          }
          switch (characters2 += from(character2), character2 * variable) {
            case 38:
              ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
              break;
            case 44:
              points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
              break;
            case 64:
              if (peek() === 45)
                characters2 += delimit(next());
              atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
              break;
            case 45:
              if (previous === 45 && strlen(characters2) == 2)
                variable = 0;
          }
      }
    return rulesets;
  }
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2, siblings) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [""];
    var size = sizeof(rule);
    for (var i2 = 0, j2 = 0, k2 = 0; i2 < index; ++i2)
      for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
        if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
          props[k2++] = z2;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2, siblings);
  }
  function comment(value, root, parent, siblings) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings);
  }
  function declaration(value, root, parent, length2, siblings) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2, siblings);
  }
  function prefix(value, length2, children) {
    switch (hash(value, length2)) {
      case 5103:
        return WEBKIT + "print-" + value + value;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      case 4789:
        return MOZ + value + value;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      case 5936:
        switch (charat(value, length2 + 11)) {
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
        }
      case 6828:
      case 4268:
      case 2903:
        return WEBKIT + value + MS + value + value;
      case 6165:
        return WEBKIT + value + MS + "flex-" + value + value;
      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
      case 5443:
        return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/g, "") + (!match(value, /flex-|baseline/) ? MS + "grid-row-" + replace(value, /flex-|-self/g, "") : "") + value;
      case 4675:
        return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/g, "") + value;
      case 5548:
        return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
      case 5292:
        return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
      case 6060:
        return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
      case 4200:
        if (!match(value, /flex-|baseline/))
          return MS + "grid-column-align" + substr(value, length2) + value;
        break;
      case 2592:
      case 3360:
        return MS + replace(value, "template-", "") + value;
      case 4384:
      case 3616:
        if (children && children.some(function(element, index) {
          return length2 = index, match(element.props, /grid-\w+-end/);
        })) {
          return ~indexof(value + (children = children[length2].value), "span", 0) ? value : MS + replace(value, "-start", "") + value + MS + "grid-row-span:" + (~indexof(children, "span", 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ";";
        }
        return MS + replace(value, "-start", "") + value;
      case 4896:
      case 4128:
        return children && children.some(function(element) {
          return match(element.props, /grid-\w+-start/);
        }) ? value : MS + replace(replace(value, "-end", "-span"), "span ", "") + value;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (strlen(value) - 1 - length2 > 6)
          switch (charat(value, length2 + 1)) {
            case 109:
              if (charat(value, length2 + 4) !== 45)
                break;
            case 102:
              return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
            case 115:
              return ~indexof(value, "stretch", 0) ? prefix(replace(value, "stretch", "fill-available"), length2, children) + value : value;
          }
        break;
      case 5152:
      case 5920:
        return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(_2, a2, b2, c2, d2, e2, f2) {
          return MS + a2 + ":" + b2 + f2 + (c2 ? MS + a2 + "-span:" + (d2 ? e2 : +e2 - +b2) + f2 : "") + value;
        });
      case 4949:
        if (charat(value, length2 + 6) === 121)
          return replace(value, ":", ":" + WEBKIT) + value;
        break;
      case 6444:
        switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
          case 120:
            return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
          case 100:
            return replace(value, ":", ":" + MS) + value;
        }
        break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
        return replace(value, "scroll-", "scroll-snap-") + value;
    }
    return value;
  }
  function serialize(children, callback) {
    var output = "";
    for (var i2 = 0; i2 < children.length; i2++)
      output += callback(children[i2], i2, children, callback) || "";
    return output;
  }
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length)
          break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return "";
      case KEYFRAMES:
        return element.return = element.value + "{" + serialize(element.children, callback) + "}";
      case RULESET:
        if (!strlen(element.value = element.props.join(",")))
          return "";
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
  }
  function middleware(collection) {
    var length2 = sizeof(collection);
    return function(element, index, children, callback) {
      var output = "";
      for (var i2 = 0; i2 < length2; i2++)
        output += collection[i2](element, index, children, callback) || "";
      return output;
    };
  }
  function rulesheet(callback) {
    return function(element) {
      if (!element.root) {
        if (element = element.return)
          callback(element);
      }
    };
  }
  function prefixer(element, index, children, callback) {
    if (element.length > -1) {
      if (!element.return)
        switch (element.type) {
          case DECLARATION:
            element.return = prefix(element.value, element.length, children);
            return;
          case KEYFRAMES:
            return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
          case RULESET:
            if (element.length)
              return combine(children = element.props, function(value) {
                switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    lift(copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                  case "::placeholder":
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }));
                    lift(copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] }));
                    lift(copy(element, { props: [value] }));
                    assign(element, { props: filter(children, callback) });
                    break;
                }
                return "";
              });
        }
    }
  }
  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };
  var define_process_env_default = {};
  var f$2 = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", m$1 = "active", y$1 = "data-styled-version", v$1 = "6.1.8", g$1 = "/*!sc*/\n", S = "undefined" != typeof window && "HTMLElement" in window, w$1 = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && void 0 !== define_process_env_default.SC_DISABLE_SPEEDY && "" !== define_process_env_default.SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.SC_DISABLE_SPEEDY && define_process_env_default.SC_DISABLE_SPEEDY : false), _ = Object.freeze([]), C = Object.freeze({});
  function I(e2, t2, n2) {
    return void 0 === n2 && (n2 = C), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
  }
  var A = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, D = /(^-|-$)/g;
  function R(e2) {
    return e2.replace(O, "-").replace(D, "");
  }
  var T = /(a)(d)/gi, k = 52, j$1 = function(e2) {
    return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
  };
  function x$1(e2) {
    var t2, n2 = "";
    for (t2 = Math.abs(e2); t2 > k; t2 = t2 / k | 0)
      n2 = j$1(t2 % k) + n2;
    return (j$1(t2 % k) + n2).replace(T, "$1-$2");
  }
  var V, F = 5381, M$1 = function(e2, t2) {
    for (var n2 = t2.length; n2; )
      e2 = 33 * e2 ^ t2.charCodeAt(--n2);
    return e2;
  }, $$1 = function(e2) {
    return M$1(F, e2);
  };
  function z(e2) {
    return x$1($$1(e2) >>> 0);
  }
  function B(e2) {
    return e2.displayName || e2.name || "Component";
  }
  function L(e2) {
    return "string" == typeof e2 && true;
  }
  var G = "function" == typeof Symbol && Symbol.for, Y = G ? Symbol.for("react.memo") : 60115, W = G ? Symbol.for("react.forward_ref") : 60112, q = { childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true }, H$1 = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, U = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, J = ((V = {})[W] = { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, V[Y] = U, V);
  function X(e2) {
    return ("type" in (t2 = e2) && t2.type.$$typeof) === Y ? U : "$$typeof" in e2 ? J[e2.$$typeof] : q;
    var t2;
  }
  var Z = Object.defineProperty, K = Object.getOwnPropertyNames, Q = Object.getOwnPropertySymbols, ee = Object.getOwnPropertyDescriptor, te = Object.getPrototypeOf, ne = Object.prototype;
  function oe(e2, t2, n2) {
    if ("string" != typeof t2) {
      if (ne) {
        var o2 = te(t2);
        o2 && o2 !== ne && oe(e2, o2, n2);
      }
      var r2 = K(t2);
      Q && (r2 = r2.concat(Q(t2)));
      for (var s2 = X(e2), i2 = X(t2), a2 = 0; a2 < r2.length; ++a2) {
        var c2 = r2[a2];
        if (!(c2 in H$1 || n2 && n2[c2] || i2 && c2 in i2 || s2 && c2 in s2)) {
          var l2 = ee(t2, c2);
          try {
            Z(e2, c2, l2);
          } catch (e3) {
          }
        }
      }
    }
    return e2;
  }
  function re(e2) {
    return "function" == typeof e2;
  }
  function se(e2) {
    return "object" == typeof e2 && "styledComponentId" in e2;
  }
  function ie(e2, t2) {
    return e2 && t2 ? "".concat(e2, " ").concat(t2) : e2 || t2 || "";
  }
  function ae(e2, t2) {
    if (0 === e2.length)
      return "";
    for (var n2 = e2[0], o2 = 1; o2 < e2.length; o2++)
      n2 += t2 ? t2 + e2[o2] : e2[o2];
    return n2;
  }
  function ce(e2) {
    return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
  }
  function le(e2, t2, n2) {
    if (void 0 === n2 && (n2 = false), !n2 && !ce(e2) && !Array.isArray(e2))
      return t2;
    if (Array.isArray(t2))
      for (var o2 = 0; o2 < t2.length; o2++)
        e2[o2] = le(e2[o2], t2[o2]);
    else if (ce(t2))
      for (var o2 in t2)
        e2[o2] = le(e2[o2], t2[o2]);
    return e2;
  }
  function ue(e2, t2) {
    Object.defineProperty(e2, "toString", { value: t2 });
  }
  function he(t2) {
    for (var n2 = [], o2 = 1; o2 < arguments.length; o2++)
      n2[o2 - 1] = arguments[o2];
    return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t2, " for more information.").concat(n2.length > 0 ? " Args: ".concat(n2.join(", ")) : ""));
  }
  var fe = function() {
    function e2(e3) {
      this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
    }
    return e2.prototype.indexOfGroup = function(e3) {
      for (var t2 = 0, n2 = 0; n2 < e3; n2++)
        t2 += this.groupSizes[n2];
      return t2;
    }, e2.prototype.insertRules = function(e3, t2) {
      if (e3 >= this.groupSizes.length) {
        for (var n2 = this.groupSizes, o2 = n2.length, r2 = o2; e3 >= r2; )
          if ((r2 <<= 1) < 0)
            throw he(16, "".concat(e3));
        this.groupSizes = new Uint32Array(r2), this.groupSizes.set(n2), this.length = r2;
        for (var s2 = o2; s2 < r2; s2++)
          this.groupSizes[s2] = 0;
      }
      for (var i2 = this.indexOfGroup(e3 + 1), a2 = (s2 = 0, t2.length); s2 < a2; s2++)
        this.tag.insertRule(i2, t2[s2]) && (this.groupSizes[e3]++, i2++);
    }, e2.prototype.clearGroup = function(e3) {
      if (e3 < this.length) {
        var t2 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), o2 = n2 + t2;
        this.groupSizes[e3] = 0;
        for (var r2 = n2; r2 < o2; r2++)
          this.tag.deleteRule(n2);
      }
    }, e2.prototype.getGroup = function(e3) {
      var t2 = "";
      if (e3 >= this.length || 0 === this.groupSizes[e3])
        return t2;
      for (var n2 = this.groupSizes[e3], o2 = this.indexOfGroup(e3), r2 = o2 + n2, s2 = o2; s2 < r2; s2++)
        t2 += "".concat(this.tag.getRule(s2)).concat(g$1);
      return t2;
    }, e2;
  }(), me = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), ve = 1, ge = function(e2) {
    if (me.has(e2))
      return me.get(e2);
    for (; ye.has(ve); )
      ve++;
    var t2 = ve++;
    return me.set(e2, t2), ye.set(t2, e2), t2;
  }, Se = function(e2, t2) {
    ve = t2 + 1, me.set(e2, t2), ye.set(t2, e2);
  }, we = "style[".concat(f$2, "][").concat(y$1, '="').concat(v$1, '"]'), be = new RegExp("^".concat(f$2, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ee = function(e2, t2, n2) {
    for (var o2, r2 = n2.split(","), s2 = 0, i2 = r2.length; s2 < i2; s2++)
      (o2 = r2[s2]) && e2.registerName(t2, o2);
  }, Ne = function(e2, t2) {
    for (var n2, o2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(g$1), r2 = [], s2 = 0, i2 = o2.length; s2 < i2; s2++) {
      var a2 = o2[s2].trim();
      if (a2) {
        var c2 = a2.match(be);
        if (c2) {
          var l2 = 0 | parseInt(c2[1], 10), u2 = c2[2];
          0 !== l2 && (Se(u2, l2), Ee(e2, u2, c2[3]), e2.getTag().insertRules(l2, r2)), r2.length = 0;
        } else
          r2.push(a2);
      }
    }
  };
  function Pe() {
    return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
  }
  var _e = function(e2) {
    var t2 = document.head, n2 = e2 || t2, o2 = document.createElement("style"), r2 = function(e3) {
      var t3 = Array.from(e3.querySelectorAll("style[".concat(f$2, "]")));
      return t3[t3.length - 1];
    }(n2), s2 = void 0 !== r2 ? r2.nextSibling : null;
    o2.setAttribute(f$2, m$1), o2.setAttribute(y$1, v$1);
    var i2 = Pe();
    return i2 && o2.setAttribute("nonce", i2), n2.insertBefore(o2, s2), o2;
  }, Ce = function() {
    function e2(e3) {
      this.element = _e(e3), this.element.appendChild(document.createTextNode("")), this.sheet = function(e4) {
        if (e4.sheet)
          return e4.sheet;
        for (var t2 = document.styleSheets, n2 = 0, o2 = t2.length; n2 < o2; n2++) {
          var r2 = t2[n2];
          if (r2.ownerNode === e4)
            return r2;
        }
        throw he(17);
      }(this.element), this.length = 0;
    }
    return e2.prototype.insertRule = function(e3, t2) {
      try {
        return this.sheet.insertRule(t2, e3), this.length++, true;
      } catch (e4) {
        return false;
      }
    }, e2.prototype.deleteRule = function(e3) {
      this.sheet.deleteRule(e3), this.length--;
    }, e2.prototype.getRule = function(e3) {
      var t2 = this.sheet.cssRules[e3];
      return t2 && t2.cssText ? t2.cssText : "";
    }, e2;
  }(), Ie = function() {
    function e2(e3) {
      this.element = _e(e3), this.nodes = this.element.childNodes, this.length = 0;
    }
    return e2.prototype.insertRule = function(e3, t2) {
      if (e3 <= this.length && e3 >= 0) {
        var n2 = document.createTextNode(t2);
        return this.element.insertBefore(n2, this.nodes[e3] || null), this.length++, true;
      }
      return false;
    }, e2.prototype.deleteRule = function(e3) {
      this.element.removeChild(this.nodes[e3]), this.length--;
    }, e2.prototype.getRule = function(e3) {
      return e3 < this.length ? this.nodes[e3].textContent : "";
    }, e2;
  }(), Ae = function() {
    function e2(e3) {
      this.rules = [], this.length = 0;
    }
    return e2.prototype.insertRule = function(e3, t2) {
      return e3 <= this.length && (this.rules.splice(e3, 0, t2), this.length++, true);
    }, e2.prototype.deleteRule = function(e3) {
      this.rules.splice(e3, 1), this.length--;
    }, e2.prototype.getRule = function(e3) {
      return e3 < this.length ? this.rules[e3] : "";
    }, e2;
  }(), Oe = S, De = { isServer: !S, useCSSOMInjection: !w$1 }, Re = function() {
    function e2(e3, n2, o2) {
      void 0 === e3 && (e3 = C), void 0 === n2 && (n2 = {});
      var r2 = this;
      this.options = __assign(__assign({}, De), e3), this.gs = n2, this.names = new Map(o2), this.server = !!e3.isServer, !this.server && S && Oe && (Oe = false, function(e4) {
        for (var t2 = document.querySelectorAll(we), n3 = 0, o3 = t2.length; n3 < o3; n3++) {
          var r3 = t2[n3];
          r3 && r3.getAttribute(f$2) !== m$1 && (Ne(e4, r3), r3.parentNode && r3.parentNode.removeChild(r3));
        }
      }(this)), ue(this, function() {
        return function(e4) {
          for (var t2 = e4.getTag(), n3 = t2.length, o3 = "", r3 = function(n4) {
            var r4 = function(e5) {
              return ye.get(e5);
            }(n4);
            if (void 0 === r4)
              return "continue";
            var s3 = e4.names.get(r4), i2 = t2.getGroup(n4);
            if (void 0 === s3 || 0 === i2.length)
              return "continue";
            var a2 = "".concat(f$2, ".g").concat(n4, '[id="').concat(r4, '"]'), c2 = "";
            void 0 !== s3 && s3.forEach(function(e5) {
              e5.length > 0 && (c2 += "".concat(e5, ","));
            }), o3 += "".concat(i2).concat(a2, '{content:"').concat(c2, '"}').concat(g$1);
          }, s2 = 0; s2 < n3; s2++)
            r3(s2);
          return o3;
        }(r2);
      });
    }
    return e2.registerId = function(e3) {
      return ge(e3);
    }, e2.prototype.reconstructWithOptions = function(n2, o2) {
      return void 0 === o2 && (o2 = true), new e2(__assign(__assign({}, this.options), n2), this.gs, o2 && this.names || void 0);
    }, e2.prototype.allocateGSInstance = function(e3) {
      return this.gs[e3] = (this.gs[e3] || 0) + 1;
    }, e2.prototype.getTag = function() {
      return this.tag || (this.tag = (e3 = function(e4) {
        var t2 = e4.useCSSOMInjection, n2 = e4.target;
        return e4.isServer ? new Ae(n2) : t2 ? new Ce(n2) : new Ie(n2);
      }(this.options), new fe(e3)));
      var e3;
    }, e2.prototype.hasNameForId = function(e3, t2) {
      return this.names.has(e3) && this.names.get(e3).has(t2);
    }, e2.prototype.registerName = function(e3, t2) {
      if (ge(e3), this.names.has(e3))
        this.names.get(e3).add(t2);
      else {
        var n2 = /* @__PURE__ */ new Set();
        n2.add(t2), this.names.set(e3, n2);
      }
    }, e2.prototype.insertRules = function(e3, t2, n2) {
      this.registerName(e3, t2), this.getTag().insertRules(ge(e3), n2);
    }, e2.prototype.clearNames = function(e3) {
      this.names.has(e3) && this.names.get(e3).clear();
    }, e2.prototype.clearRules = function(e3) {
      this.getTag().clearGroup(ge(e3)), this.clearNames(e3);
    }, e2.prototype.clearTag = function() {
      this.tag = void 0;
    }, e2;
  }(), Te = /&/g, ke = /^\s*\/\/.*$/gm;
  function je(e2, t2) {
    return e2.map(function(e3) {
      return "rule" === e3.type && (e3.value = "".concat(t2, " ").concat(e3.value), e3.value = e3.value.replaceAll(",", ",".concat(t2, " ")), e3.props = e3.props.map(function(e4) {
        return "".concat(t2, " ").concat(e4);
      })), Array.isArray(e3.children) && "@keyframes" !== e3.type && (e3.children = je(e3.children, t2)), e3;
    });
  }
  function xe(e2) {
    var t2, n2, o2, r2 = void 0 === e2 ? C : e2, s2 = r2.options, i2 = void 0 === s2 ? C : s2, a2 = r2.plugins, c2 = void 0 === a2 ? _ : a2, l2 = function(e3, o3, r3) {
      return r3.startsWith(n2) && r3.endsWith(n2) && r3.replaceAll(n2, "").length > 0 ? ".".concat(t2) : e3;
    }, u2 = c2.slice();
    u2.push(function(e3) {
      e3.type === RULESET && e3.value.includes("&") && (e3.props[0] = e3.props[0].replace(Te, n2).replace(o2, l2));
    }), i2.prefix && u2.push(prefixer), u2.push(stringify);
    var p2 = function(e3, r3, s3, a3) {
      void 0 === r3 && (r3 = ""), void 0 === s3 && (s3 = ""), void 0 === a3 && (a3 = "&"), t2 = a3, n2 = r3, o2 = new RegExp("\\".concat(n2, "\\b"), "g");
      var c3 = e3.replace(ke, ""), l3 = compile(s3 || r3 ? "".concat(s3, " ").concat(r3, " { ").concat(c3, " }") : c3);
      i2.namespace && (l3 = je(l3, i2.namespace));
      var p3 = [];
      return serialize(l3, middleware(u2.concat(rulesheet(function(e4) {
        return p3.push(e4);
      })))), p3;
    };
    return p2.hash = c2.length ? c2.reduce(function(e3, t3) {
      return t3.name || he(15), M$1(e3, t3.name);
    }, F).toString() : "", p2;
  }
  var Ve = new Re(), Fe = xe(), Me = wn.createContext({ shouldForwardProp: void 0, styleSheet: Ve, stylis: Fe });
  Me.Consumer;
  wn.createContext(void 0);
  function Be() {
    return q$2(Me);
  }
  var Ge = function() {
    function e2(e3, t2) {
      var n2 = this;
      this.inject = function(e4, t3) {
        void 0 === t3 && (t3 = Fe);
        var o2 = n2.name + t3.hash;
        e4.hasNameForId(n2.id, o2) || e4.insertRules(n2.id, o2, t3(n2.rules, o2, "@keyframes"));
      }, this.name = e3, this.id = "sc-keyframes-".concat(e3), this.rules = t2, ue(this, function() {
        throw he(12, String(n2.name));
      });
    }
    return e2.prototype.getName = function(e3) {
      return void 0 === e3 && (e3 = Fe), this.name + e3.hash;
    }, e2;
  }(), Ye = function(e2) {
    return e2 >= "A" && e2 <= "Z";
  };
  function We(e2) {
    for (var t2 = "", n2 = 0; n2 < e2.length; n2++) {
      var o2 = e2[n2];
      if (1 === n2 && "-" === o2 && "-" === e2[0])
        return e2;
      Ye(o2) ? t2 += "-" + o2.toLowerCase() : t2 += o2;
    }
    return t2.startsWith("ms-") ? "-" + t2 : t2;
  }
  var qe = function(e2) {
    return null == e2 || false === e2 || "" === e2;
  }, He = function(t2) {
    var n2, o2, r2 = [];
    for (var s2 in t2) {
      var i2 = t2[s2];
      t2.hasOwnProperty(s2) && !qe(i2) && (Array.isArray(i2) && i2.isCss || re(i2) ? r2.push("".concat(We(s2), ":"), i2, ";") : ce(i2) ? r2.push.apply(r2, __spreadArray(__spreadArray(["".concat(s2, " {")], He(i2), false), ["}"], false)) : r2.push("".concat(We(s2), ": ").concat((n2 = s2, null == (o2 = i2) || "boolean" == typeof o2 || "" === o2 ? "" : "number" != typeof o2 || 0 === o2 || n2 in unitlessKeys || n2.startsWith("--") ? String(o2).trim() : "".concat(o2, "px")), ";")));
    }
    return r2;
  };
  function Ue(e2, t2, n2, o2) {
    if (qe(e2))
      return [];
    if (se(e2))
      return [".".concat(e2.styledComponentId)];
    if (re(e2)) {
      if (!re(s2 = e2) || s2.prototype && s2.prototype.isReactComponent || !t2)
        return [e2];
      var r2 = e2(t2);
      return Ue(r2, t2, n2, o2);
    }
    var s2;
    return e2 instanceof Ge ? n2 ? (e2.inject(n2, o2), [e2.getName(o2)]) : [e2] : ce(e2) ? He(e2) : Array.isArray(e2) ? Array.prototype.concat.apply(_, e2.map(function(e3) {
      return Ue(e3, t2, n2, o2);
    })) : [e2.toString()];
  }
  function Je(e2) {
    for (var t2 = 0; t2 < e2.length; t2 += 1) {
      var n2 = e2[t2];
      if (re(n2) && !se(n2))
        return false;
    }
    return true;
  }
  var Xe = $$1(v$1), Ze = function() {
    function e2(e3, t2, n2) {
      this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && Je(e3), this.componentId = t2, this.baseHash = M$1(Xe, t2), this.baseStyle = n2, Re.registerId(t2);
    }
    return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
      var o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e3, t2, n2) : "";
      if (this.isStatic && !n2.hash)
        if (this.staticRulesId && t2.hasNameForId(this.componentId, this.staticRulesId))
          o2 = ie(o2, this.staticRulesId);
        else {
          var r2 = ae(Ue(this.rules, e3, t2, n2)), s2 = x$1(M$1(this.baseHash, r2) >>> 0);
          if (!t2.hasNameForId(this.componentId, s2)) {
            var i2 = n2(r2, ".".concat(s2), void 0, this.componentId);
            t2.insertRules(this.componentId, s2, i2);
          }
          o2 = ie(o2, s2), this.staticRulesId = s2;
        }
      else {
        for (var a2 = M$1(this.baseHash, n2.hash), c2 = "", l2 = 0; l2 < this.rules.length; l2++) {
          var u2 = this.rules[l2];
          if ("string" == typeof u2)
            c2 += u2;
          else if (u2) {
            var p2 = ae(Ue(u2, e3, t2, n2));
            a2 = M$1(a2, p2 + l2), c2 += p2;
          }
        }
        if (c2) {
          var d2 = x$1(a2 >>> 0);
          t2.hasNameForId(this.componentId, d2) || t2.insertRules(this.componentId, d2, n2(c2, ".".concat(d2), void 0, this.componentId)), o2 = ie(o2, d2);
        }
      }
      return o2;
    }, e2;
  }(), Ke = wn.createContext(void 0);
  Ke.Consumer;
  function tt(e2) {
    var n2 = wn.useContext(Ke), r2 = F$2(function() {
      return function(e3, n3) {
        if (!e3)
          throw he(14);
        if (re(e3)) {
          var o2 = e3(n3);
          return o2;
        }
        if (Array.isArray(e3) || "object" != typeof e3)
          throw he(8);
        return n3 ? __assign(__assign({}, n3), e3) : e3;
      }(e2.theme, n2);
    }, [e2.theme, n2]);
    return e2.children ? wn.createElement(Ke.Provider, { value: r2 }, e2.children) : null;
  }
  var nt = {};
  function rt(e2, r2, s2) {
    var i2 = se(e2), a2 = e2, c2 = !L(e2), p2 = r2.attrs, d2 = void 0 === p2 ? _ : p2, h2 = r2.componentId, f2 = void 0 === h2 ? function(e3, t2) {
      var n2 = "string" != typeof e3 ? "sc" : R(e3);
      nt[n2] = (nt[n2] || 0) + 1;
      var o2 = "".concat(n2, "-").concat(z(v$1 + n2 + nt[n2]));
      return t2 ? "".concat(t2, "-").concat(o2) : o2;
    }(r2.displayName, r2.parentComponentId) : h2, m2 = r2.displayName, y2 = void 0 === m2 ? function(e3) {
      return L(e3) ? "styled.".concat(e3) : "Styled(".concat(B(e3), ")");
    }(e2) : m2, g2 = r2.displayName && r2.componentId ? "".concat(R(r2.displayName), "-").concat(r2.componentId) : r2.componentId || f2, S2 = i2 && a2.attrs ? a2.attrs.concat(d2).filter(Boolean) : d2, w2 = r2.shouldForwardProp;
    if (i2 && a2.shouldForwardProp) {
      var b2 = a2.shouldForwardProp;
      if (r2.shouldForwardProp) {
        var E2 = r2.shouldForwardProp;
        w2 = function(e3, t2) {
          return b2(e3, t2) && E2(e3, t2);
        };
      } else
        w2 = b2;
    }
    var N2 = new Ze(s2, g2, i2 ? a2.componentStyle : void 0);
    function O2(e3, r3) {
      return function(e4, r4, s3) {
        var i3 = e4.attrs, a3 = e4.componentStyle, c3 = e4.defaultProps, p3 = e4.foldedComponentIds, d3 = e4.styledComponentId, h3 = e4.target, f3 = wn.useContext(Ke), m3 = Be(), y3 = e4.shouldForwardProp || m3.shouldForwardProp;
        var v2 = I(r4, f3, c3) || C, g3 = function(e5, n2, o2) {
          for (var r5, s4 = __assign(__assign({}, n2), { className: void 0, theme: o2 }), i4 = 0; i4 < e5.length; i4 += 1) {
            var a4 = re(r5 = e5[i4]) ? r5(s4) : r5;
            for (var c4 in a4)
              s4[c4] = "className" === c4 ? ie(s4[c4], a4[c4]) : "style" === c4 ? __assign(__assign({}, s4[c4]), a4[c4]) : a4[c4];
          }
          return n2.className && (s4.className = ie(s4.className, n2.className)), s4;
        }(i3, r4, v2), S3 = g3.as || h3, w3 = {};
        for (var b3 in g3)
          void 0 === g3[b3] || "$" === b3[0] || "as" === b3 || "theme" === b3 && g3.theme === v2 || ("forwardedAs" === b3 ? w3.as = g3.forwardedAs : y3 && !y3(b3, S3) || (w3[b3] = g3[b3], y3 || true));
        var E3 = function(e5, t2) {
          var n2 = Be(), o2 = e5.generateAndInjectStyles(t2, n2.styleSheet, n2.stylis);
          return o2;
        }(a3, g3);
        var N3 = ie(p3, d3);
        return E3 && (N3 += " " + E3), g3.className && (N3 += " " + g3.className), w3[L(S3) && !A.has(S3) ? "class" : "className"] = N3, w3.ref = s3, preact.createElement(S3, w3);
      }(D2, e3, r3);
    }
    O2.displayName = y2;
    var D2 = wn.forwardRef(O2);
    return D2.attrs = S2, D2.componentStyle = N2, D2.displayName = y2, D2.shouldForwardProp = w2, D2.foldedComponentIds = i2 ? ie(a2.foldedComponentIds, a2.styledComponentId) : "", D2.styledComponentId = g2, D2.target = i2 ? a2.target : e2, Object.defineProperty(D2, "defaultProps", { get: function() {
      return this._foldedDefaultProps;
    }, set: function(e3) {
      this._foldedDefaultProps = i2 ? function(e4) {
        for (var t2 = [], n2 = 1; n2 < arguments.length; n2++)
          t2[n2 - 1] = arguments[n2];
        for (var o2 = 0, r3 = t2; o2 < r3.length; o2++)
          le(e4, r3[o2], true);
        return e4;
      }({}, a2.defaultProps, e3) : e3;
    } }), ue(D2, function() {
      return ".".concat(D2.styledComponentId);
    }), c2 && oe(D2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), D2;
  }
  function st(e2, t2) {
    for (var n2 = [e2[0]], o2 = 0, r2 = t2.length; o2 < r2; o2 += 1)
      n2.push(t2[o2], e2[o2 + 1]);
    return n2;
  }
  var it = function(e2) {
    return Object.assign(e2, { isCss: true });
  };
  function at(t2) {
    for (var n2 = [], o2 = 1; o2 < arguments.length; o2++)
      n2[o2 - 1] = arguments[o2];
    if (re(t2) || ce(t2))
      return it(Ue(st(_, __spreadArray([t2], n2, true))));
    var r2 = t2;
    return 0 === n2.length && 1 === r2.length && "string" == typeof r2[0] ? Ue(r2) : it(Ue(st(r2, n2)));
  }
  function ct(n2, o2, r2) {
    if (void 0 === r2 && (r2 = C), !o2)
      throw he(1, o2);
    var s2 = function(t2) {
      for (var s3 = [], i2 = 1; i2 < arguments.length; i2++)
        s3[i2 - 1] = arguments[i2];
      return n2(o2, r2, at.apply(void 0, __spreadArray([t2], s3, false)));
    };
    return s2.attrs = function(e2) {
      return ct(n2, o2, __assign(__assign({}, r2), { attrs: Array.prototype.concat(r2.attrs, e2).filter(Boolean) }));
    }, s2.withConfig = function(e2) {
      return ct(n2, o2, __assign(__assign({}, r2), e2));
    }, s2;
  }
  var lt = function(e2) {
    return ct(rt, e2);
  }, ut = lt;
  A.forEach(function(e2) {
    ut[e2] = lt(e2);
  });
  function ht(t2) {
    for (var n2 = [], o2 = 1; o2 < arguments.length; o2++)
      n2[o2 - 1] = arguments[o2];
    var r2 = ae(at.apply(void 0, __spreadArray([t2], n2, false))), s2 = z(r2);
    return new Ge(s2, r2);
  }
  var f$1 = 0;
  function u$1(e2, t2, n2, o2, i2, u2) {
    var a2, c2, p2 = {};
    for (c2 in t2)
      "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps))
      for (c2 in a2)
        void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return preact.options.vnode && preact.options.vnode(l2), l2;
  }
  const createSimpleContext = (data) => {
    const MyContext = preact.createContext({});
    const Provider = (props) => {
      const [myData, setMyData] = h$1(data);
      const setValue = (newData) => {
        console.log({
          myData,
          newData
        });
        setMyData({
          ...myData,
          ...newData
        });
      };
      return u$1(MyContext.Provider, {
        value: {
          value: myData,
          setValue
        },
        children: props.children
      });
    };
    return {
      Provider,
      useContext: () => q$2(MyContext)
    };
  };
  const theme = localStorage.getItem("theme");
  const AppContext = createSimpleContext({
    theme: {
      variant: theme ? JSON.parse(theme) : "light"
    },
    alert: {
      message: "Mensagem aqui!",
      type: "hidden",
      render: false
    },
    openChatId: "",
    allChatIds: [],
    fullScreenModal: {
      open: false,
      children: () => null,
      childrenProps: {}
    },
    features: {
      MessageReveal: true
    },
    client: null
  });
  var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, t = function(r2) {
    return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
  }, n = function(r2, t2, n2) {
    return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
  }, e = function(r2, t2, n2) {
    return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
  }, u = function(r2) {
    return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
  }, a = function(r2) {
    return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
  }, o = function(r2) {
    return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
  }, i = /^#([0-9a-f]{3,8})$/i, s = function(r2) {
    var t2 = r2.toString(16);
    return t2.length < 2 ? "0" + t2 : t2;
  }, h = function(r2) {
    var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
    return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
  }, b = function(r2) {
    var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
    t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
    var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
    return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
  }, g = function(r2) {
    return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
  }, d = function(r2) {
    return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
  }, f = function(r2) {
    return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
    var t2, n2, e2;
  }, c = function(r2) {
    return { h: (t2 = h(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
    var t2, n2, e2, u2;
  }, l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i, y = { string: [[function(r2) {
    var t2 = i.exec(r2);
    return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
  }, "hex"], [function(r2) {
    var t2 = v.exec(r2) || m.exec(r2);
    return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
  }, "rgb"], [function(t2) {
    var n2 = l.exec(t2) || p.exec(t2);
    if (!n2)
      return null;
    var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
    return f(a2);
  }, "hsl"]], object: [[function(r2) {
    var n2 = r2.r, e2 = r2.g, u2 = r2.b, o2 = r2.a, i2 = void 0 === o2 ? 1 : o2;
    return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
  }, "rgb"], [function(r2) {
    var n2 = r2.h, e2 = r2.s, u2 = r2.l, a2 = r2.a, o2 = void 0 === a2 ? 1 : a2;
    if (!t(n2) || !t(e2) || !t(u2))
      return null;
    var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
    return f(i2);
  }, "hsl"], [function(r2) {
    var n2 = r2.h, a2 = r2.s, o2 = r2.v, i2 = r2.a, s2 = void 0 === i2 ? 1 : i2;
    if (!t(n2) || !t(a2) || !t(o2))
      return null;
    var h2 = function(r3) {
      return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
    }({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
    return b(h2);
  }, "hsv"]] }, N = function(r2, t2) {
    for (var n2 = 0; n2 < t2.length; n2++) {
      var e2 = t2[n2][0](r2);
      if (e2)
        return [e2, t2[n2][1]];
    }
    return [null, void 0];
  }, x = function(r2) {
    return "string" == typeof r2 ? N(r2.trim(), y.string) : "object" == typeof r2 && null !== r2 ? N(r2, y.object) : [null, void 0];
  }, M = function(r2, t2) {
    var n2 = c(r2);
    return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
  }, H = function(r2) {
    return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
  }, $ = function(r2, t2) {
    var n2 = c(r2);
    return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
  }, j = function() {
    function r2(r3) {
      this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
    }
    return r2.prototype.isValid = function() {
      return null !== this.parsed;
    }, r2.prototype.brightness = function() {
      return n(H(this.rgba), 2);
    }, r2.prototype.isDark = function() {
      return H(this.rgba) < 0.5;
    }, r2.prototype.isLight = function() {
      return H(this.rgba) >= 0.5;
    }, r2.prototype.toHex = function() {
      return r3 = o(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, i2 = (a2 = r3.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
      var r3, t2, e2, u2, a2, i2;
    }, r2.prototype.toRgb = function() {
      return o(this.rgba);
    }, r2.prototype.toRgbString = function() {
      return r3 = o(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
      var r3, t2, n2, e2, u2;
    }, r2.prototype.toHsl = function() {
      return d(c(this.rgba));
    }, r2.prototype.toHslString = function() {
      return r3 = d(c(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
      var r3, t2, n2, e2, u2;
    }, r2.prototype.toHsv = function() {
      return r3 = h(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
      var r3;
    }, r2.prototype.invert = function() {
      return w({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
      var r3;
    }, r2.prototype.saturate = function(r3) {
      return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, r3));
    }, r2.prototype.desaturate = function(r3) {
      return void 0 === r3 && (r3 = 0.1), w(M(this.rgba, -r3));
    }, r2.prototype.grayscale = function() {
      return w(M(this.rgba, -1));
    }, r2.prototype.lighten = function(r3) {
      return void 0 === r3 && (r3 = 0.1), w($(this.rgba, r3));
    }, r2.prototype.darken = function(r3) {
      return void 0 === r3 && (r3 = 0.1), w($(this.rgba, -r3));
    }, r2.prototype.rotate = function(r3) {
      return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
    }, r2.prototype.alpha = function(r3) {
      return "number" == typeof r3 ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
      var t2;
    }, r2.prototype.hue = function(r3) {
      var t2 = c(this.rgba);
      return "number" == typeof r3 ? w({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
    }, r2.prototype.isEqual = function(r3) {
      return this.toHex() === w(r3).toHex();
    }, r2;
  }(), w = function(r2) {
    return r2 instanceof j ? r2 : new j(r2);
  };
  const createColorList = (color2) => {
    const [hue, saturation, brightness] = color2;
    return {
      default: color2,
      withSaturation: (sat) => [hue, sat, brightness],
      withBrigthness: (bright) => [hue, saturation, bright],
      addSaturation: (sat) => [hue, saturation + sat, brightness],
      addBrightness: (bright) => [hue, saturation, bright + brightness]
    };
  };
  const colors = {
    dark: {
      background: createColorList([173, 91, 22]),
      text: createColorList([200, 3, 94]),
      redFail: createColorList([6, 82, 62]),
      greenSuccess: createColorList([146, 79, 81]),
      primary: createColorList([175, 95, 41]),
      secundary: createColorList([176, 97, 60]),
      tertiary: createColorList([159, 86, 76]),
      icon: createColorList([203, 16, 63]),
      header: createColorList([202, 37, 20])
    },
    light: {
      background: createColorList([216, 2, 96]),
      text: createColorList([100, 7, 18]),
      redFail: createColorList([0, 56, 92]),
      greenSuccess: createColorList([123, 39, 84]),
      primary: createColorList([146, 64, 92]),
      secundary: createColorList([147, 40, 96]),
      tertiary: createColorList([149, 18, 99]),
      icon: createColorList([202, 24, 44]),
      header: createColorList([216, 2, 96])
    }
  };
  const color = ([h2, s2, v2]) => {
    const color2 = new j({
      h: h2,
      s: s2,
      v: v2
    });
    return color2.toHex();
  };
  const getThemedColors = (theme2) => {
    if ((theme2 == null ? void 0 : theme2.variant) === "dark" || theme2 === "dark") {
      return colors.dark;
    } else {
      return colors.light;
    }
  };
  const AlertContainer = ut.div`
	position: relative;
	transition: top ease-in-out 0.5s;
	top: ${({
  shown
}) => shown ? "0px" : "-205px"};
	display: flex;
	justify-content: flex-end;
	padding: 5px 10px;
`;
  const AlertBody = ut.div`
	background: ${({
  theme: theme2
}) => color(getThemedColors(theme2).background.default)};
	color: ${({
  theme: theme2
}) => color(getThemedColors(theme2).text.default)};
	width: 33%;
	height: 100px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	box-shadow: black 2px 2px 5px 2px;
	pointer-events: auto;
`;
  const IconContainer$1 = ut.div`
	width: 3rem;
	height: 3rem;
	padding: 20px;
	color: ${({
  color: color2
}) => color2};
`;
  function CheckIcon(props) {
    return u$1("svg", {
      fill: "currentColor",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      ...props,
      children: u$1("path", {
        d: "M12.736 3.97a.733.733 0 011.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 01-1.065.02L3.217 8.384a.757.757 0 010-1.06.733.733 0 011.047 0l3.052 3.093 5.4-6.425a.247.247 0 01.02-.022z"
      })
    });
  }
  function ExclamationIcon(props) {
    return u$1("svg", {
      fill: "currentColor",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      ...props,
      children: u$1("path", {
        d: "M7.005 3.1a1 1 0 111.99 0l-.388 6.35a.61.61 0 01-1.214 0L7.005 3.1zM7 12a1 1 0 112 0 1 1 0 01-2 0z"
      })
    });
  }
  function XIcon(props) {
    return u$1("svg", {
      fill: "currentColor",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      ...props,
      children: u$1("path", {
        d: "M4.646 4.646a.5.5 0 01.708 0L8 7.293l2.646-2.647a.5.5 0 01.708.708L8.707 8l2.647 2.646a.5.5 0 01-.708.708L8 8.707l-2.646 2.647a.5.5 0 01-.708-.708L7.293 8 4.646 5.354a.5.5 0 010-.708z"
      })
    });
  }
  function CircleIcon(props) {
    const theme2 = q$2(Ke);
    return u$1("svg", {
      fill: "currentColor",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      stroke: color(getThemedColors(theme2).primary.default),
      ...props,
      children: u$1("circle", {
        cx: "8",
        cy: "8",
        r: 7,
        fill: "none",
        strokeWidth: 1
      })
    });
  }
  function PlusIcon(props) {
    return u$1("svg", {
      fill: "currentColor",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      ...props,
      children: u$1("path", {
        d: "M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z"
      })
    });
  }
  function WhatsappIcon(props) {
    return u$1("svg", {
      fill: "currentColor",
      viewBox: "0 0 16 16",
      height: "1em",
      width: "1em",
      ...props,
      children: u$1("path", {
        d: "M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
      })
    });
  }
  const useAlert = () => {
    const {
      value,
      setValue
    } = AppContext.useContext();
    const hideAlert = (oldMessage) => {
      setValue({
        alert: {
          message: oldMessage,
          type: "hidden",
          render: true
        }
      });
      setTimeout(() => {
        setValue({
          alert: {
            message: oldMessage,
            type: "hidden",
            render: false
          }
        });
      }, 500);
    };
    const showAlert = (type, message, timeInSeconds = 4) => {
      if (value.alert.render) {
        return;
      }
      setValue({
        alert: {
          message,
          type: "hidden",
          render: true
        }
      });
      requestAnimationFrame(() => {
        setValue({
          alert: {
            message,
            type,
            render: true
          }
        });
      });
      setTimeout(() => {
        hideAlert(message);
      }, timeInSeconds * 1e3);
    };
    const showSuccess = (message, timeInSeconds = 4) => {
      showAlert("success", message, timeInSeconds);
    };
    const showFail = (message, timeInSeconds = 4) => {
      setValue({
        alert: {
          message,
          type: "fail",
          render: true
        }
      });
      setTimeout(() => {
        hideAlert(message);
      }, timeInSeconds * 1e3);
    };
    const showWarning = (message, timeInSeconds = 4) => {
      setValue({
        alert: {
          message,
          type: "warning",
          render: true
        }
      });
      setTimeout(() => {
        hideAlert(message);
      }, timeInSeconds * 1e3);
    };
    return {
      showSuccess,
      showFail,
      showWarning
    };
  };
  const useAlertBehavior = () => {
    const {
      alert,
      theme: theme2
    } = AppContext.useContext().value;
    const Icon = () => {
      if (alert.type === "fail") {
        return XIcon;
      }
      if (alert.type === "warning") {
        return ExclamationIcon;
      }
      return CheckIcon;
    };
    const getColor = () => {
      if (alert.type === "fail") {
        return color(getThemedColors(theme2.variant).redFail.default);
      }
      if (alert.type === "warning") {
        return color(getThemedColors(theme2.variant).text.default);
      }
      return color(getThemedColors(theme2.variant).greenSuccess.default);
    };
    return {
      Icon: Icon(),
      iconColor: getColor(),
      shown: alert.type !== "hidden",
      render: alert.render
    };
  };
  const Render = ({
    children,
    when
  }) => {
    const shouldRender = typeof when === "function" ? when() : when;
    if (shouldRender) {
      return children;
    } else {
      return null;
    }
  };
  const AlertComponent = () => {
    const {
      alert
    } = AppContext.useContext().value;
    const {
      Icon,
      iconColor,
      shown,
      render: render2
    } = useAlertBehavior();
    return u$1(Render, {
      when: render2,
      children: u$1(AlertContainer, {
        shown,
        children: u$1(AlertBody, {
          children: [u$1(IconContainer$1, {
            color: iconColor,
            children: u$1(Icon, {
              width: "3rem",
              height: "3rem"
            })
          }), u$1("h1", {
            children: alert.message
          })]
        })
      })
    });
  };
  const forExpression = (exp, interval = 1e3) => {
    return new Promise((resolve) => {
      const checker = setInterval(() => {
        const done = exp();
        if (done) {
          clearInterval(checker);
          resolve(true);
        }
      }, interval);
    });
  };
  const elementGetsVisible = async (selector, interval = 1e3) => {
    await forExpression(() => !!document.querySelector(selector), interval);
    return document.querySelector(selector);
  };
  const stopBubbling = (e2) => {
    e2.stopPropagation();
  };
  const useWaLoadEffect = (cb, dependencyArray) => {
    const {
      client
    } = AppContext.useContext().value;
    p$1(() => {
      if (client) {
        return cb();
      }
    }, [client, ...dependencyArray]);
  };
  const useDomObserver = (selector, cb, options2 = {
    childList: true
  }) => {
    const [observer, setDomObserver] = h$1(null);
    const [node2, setNode] = h$1(null);
    const callbackWrapper = T$2(async () => {
      if (options2.allowPropagation ?? false) {
        return cb();
      }
      observer == null ? void 0 : observer.disconnect();
      const result = await cb();
      activateOldObserver();
      return result;
    }, [observer, options2]);
    const setupObserver = async () => {
      if (!observer) {
        return createNewObserver();
      }
      activateOldObserver();
    };
    const createNewObserver = async () => {
      if (observer) {
        return observer;
      }
      const observedNode = await elementGetsVisible(selector, 100);
      setNode(observedNode);
      const myObserver = new MutationObserver(callbackWrapper);
      setDomObserver(myObserver);
      myObserver.observe(observedNode, options2);
    };
    const activateOldObserver = () => {
      if (observer) {
        observer.observe(node2, options2);
      }
    };
    const start = () => {
      setupObserver();
    };
    const flush = () => {
      observer == null ? void 0 : observer.disconnect();
      setDomObserver(null);
    };
    useWaLoadEffect(() => {
      setupObserver();
    }, []);
    return {
      start,
      flush
    };
  };
  const CommonSelectors = {
    chatWindow: "#app > div > div > :nth-child(4)"
  };
  const useModal = ({
    afterClose,
    afterOpen,
    beforeClose,
    beforeOpen
  }) => {
    const {
      value: context,
      setValue: setContext
    } = AppContext.useContext();
    const openModal = (component, props) => {
      beforeOpen == null ? void 0 : beforeOpen();
      setContext({
        fullScreenModal: {
          open: true,
          children: component,
          childrenProps: props ?? {}
        }
      });
      afterOpen == null ? void 0 : afterOpen();
    };
    const closeModal = () => {
      beforeClose == null ? void 0 : beforeClose();
      setContext({
        fullScreenModal: {
          open: false,
          children: () => null,
          childrenProps: {}
        }
      });
      afterClose == null ? void 0 : afterClose();
    };
    const useModalEffect = (cb) => {
      p$1(() => {
        cb(context.fullScreenModal);
      }, [context.fullScreenModal]);
    };
    return {
      openModal,
      closeModal,
      useModalEffect
    };
  };
  const useMessageRevalerLogic = () => {
    const [, setCurrentMessageId] = h$1(null);
    const {
      client
    } = AppContext.useContext().value;
    const modal = useModal({
      afterClose: () => setCurrentMessageId(null)
    });
    useDomObserver(CommonSelectors.chatWindow, async () => {
      const allMesasgesInDom = [...document.querySelectorAll("[data-id]")];
      const allMessageObj = await Promise.all(allMesasgesInDom.map(async (node2) => {
        const id = node2.getAttribute("data-id");
        return client.getMessageById(id);
      }));
      const allViewOnceMsgIds = allMessageObj.filter((msg) => msg && msg._data.isViewOnce).map((msg) => msg.id._serialized);
      allViewOnceMsgIds.forEach((id) => {
        const msgContainer = document.querySelector(`[data-id="${id}"]`);
        msgContainer.removeEventListener("click", onClickMessage);
        msgContainer.addEventListener("click", onClickMessage);
      });
    }, {
      subtree: true,
      childList: true
    });
    const getMessageId = (ev) => {
      let target = ev.target;
      while (!target.getAttribute("data-id")) {
        target = target.parentElement;
      }
      return target.getAttribute("data-id");
    };
    const onClickMessage = T$2(async (ev) => {
      const messageId = getMessageId(ev);
      modal.openModal(MessageRevealerComponent, {
        messageId
      });
    }, []);
    modal.useModalEffect((modal2) => {
      if (!modal2.open) {
        setCurrentMessageId(null);
      }
    });
  };
  const rotationAnimation = ht`
    from { 
        transform: rotate(0deg); 
    }
    to { 
        transform: rotate(360deg); 
    }
`;
  const ringAnimation = ht`
    0% {
      stroke-dasharray: 5, 40;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 40, 5;
      stroke-dashoffset: 0;
    }
    100% {
    stroke-dasharray: 5, 40;
      stroke-dashoffset: -45;
    }
`;
  const Container$5 = ut.div`
	animation: ${rotationAnimation};
	animation-duration: 1.5s;
	animation-direction: normal;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;
  const MyCircle = ut(CircleIcon)`
	stroke-linecap: round;
	stroke-dasharray: 0;
	stroke-dashoffset: 0;
	display: block;
	animation: ${ringAnimation};
	animation-duration: 2s;
	animation-direction: normal;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
`;
  const LoadingRing = ({
    size
  }) => {
    return u$1(Container$5, {
      children: u$1(MyCircle, {
        width: size,
        height: size
      })
    });
  };
  const useMediaPreviewBehavior = ({
    id
  }) => {
    const [media, setMedia] = h$1(null);
    const {
      client
    } = AppContext.useContext().value;
    const {
      showFail
    } = useAlert();
    const fetchMedia = async () => {
      try {
        const msg = await client.getMessageById(id);
        const media2 = await (msg == null ? void 0 : msg.downloadMedia());
        if (!media2) {
          return showFail("Falha ao obter midia da mensagem. Tente novamente mais tarde");
        }
        setMedia({
          type: msg.type,
          data: media2.data,
          mimetype: media2.mimetype,
          caption: (msg == null ? void 0 : msg.body) ?? null
        });
      } catch (e2) {
        showFail(`${e2}`);
      }
    };
    p$1(() => {
      fetchMedia();
    }, [id]);
    return {
      media,
      srcString: `data:${media == null ? void 0 : media.mimetype};base64,${media == null ? void 0 : media.data}`,
      isImage: (media == null ? void 0 : media.type) === "image",
      caption: media == null ? void 0 : media.caption
    };
  };
  const Image$1 = ut.img`
	height: 100%;
	object-fit: contain;
	max-width: 100%;
	max-height: 100%;
`;
  const Multimidia = ut.video`
	border-radius: 15px;
	width: 100%;
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
	pointer-events: auto;
`;
  const ImageContainer = ut.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
  const CaptionContainer = ut.div`
	height: 10%;
	width: 75%;
	top: calc(90%);
	display: flex;
	justify-content: center;
	align-items: center;
	line-break: auto;
	overflow: scroll;
	display: inline-block;
	position: absolute;
	text-align: center;
`;
  const MediaPreview = ({
    id
  }) => {
    const {
      media,
      srcString,
      isImage,
      caption
    } = useMediaPreviewBehavior({
      id
    });
    if (!media) {
      return u$1(LoadingRing, {
        size: "12rem"
      });
    }
    return u$1(ImageContainer, {
      children: [u$1(Render, {
        when: isImage,
        children: u$1(Image$1, {
          src: srcString
        })
      }), u$1(Render, {
        when: !isImage,
        children: u$1(Multimidia, {
          controls: true,
          children: u$1("source", {
            src: srcString
          })
        })
      }), u$1(Render, {
        when: !!caption,
        children: u$1(CaptionContainer, {
          children: caption
        })
      })]
    });
  };
  const Container$4 = ut.div`
	height: 75%;
	border-radius: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
	max-width: 75%;
`;
  const MessageRevealerComponent = ({
    messageId
  }) => {
    if (!messageId) {
      return null;
    }
    return u$1(Container$4, {
      onClick: stopBubbling,
      children: u$1(MediaPreview, {
        id: messageId
      })
    });
  };
  const MessageRevealer = () => {
    useMessageRevalerLogic();
    return null;
  };
  const useChatToolsBehaviour = () => {
    const [currentChat, setCurrentChat] = h$1({
      id: {
        _serialized: ""
      }
    });
    const {
      value: appContext,
      setValue: setAppContext
    } = AppContext.useContext();
    const Client2 = appContext.client;
    const [rootElement, setRootElement] = h$1(null);
    const [loading, setLoading] = h$1(true);
    const [toolbarOpen, setToolbarOpen] = h$1(false);
    useDomObserver(CommonSelectors.chatWindow, async () => {
      setToolbarOpen(false);
      const newRootElement = document.querySelector("footer > div");
      if ((currentChat == null ? void 0 : currentChat.id._serialized) === (newRootElement == null ? void 0 : newRootElement.getAttribute("chat-id"))) {
        return;
      }
      setRootElement(newRootElement);
      setLoading(true);
      const newCurrentChat = await getCurrentChat();
      setCurrentChat(newCurrentChat);
      setAppContext({
        openChatId: newCurrentChat.id._serialized
      });
      newRootElement.setAttribute("chat-id", newCurrentChat.id._serialized);
      setLoading(false);
    });
    const getCurrentChat = async () => {
      const someMessageId = (await elementGetsVisible("[data-id]")).getAttribute("data-id");
      const sampleMessageObject = await Client2.getMessageById(someMessageId);
      return sampleMessageObject.getChat();
    };
    const onClickButton = async () => {
      if (!loading) {
        setToolbarOpen((open) => !open);
      }
    };
    const closeToolbar = () => {
      setToolbarOpen(false);
    };
    return {
      onClickButton,
      closeToolbar,
      rootElement,
      loading,
      toolbarOpen
    };
  };
  const Button = ut.button`
	width: 3rem;
	height: 3rem;
	background: none;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({
  theme: theme2
}) => color(getThemedColors(theme2).icon.default)};
`;
  const IconContainer = ut.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;
  const WhatsappIconContainer = ut.div`
	position: absolute;
`;
  const FirstPlusContainer = ut.div`
	position: absolute;
	top: -0.3rem;
	left: 0.2rem;
`;
  const SecondPlusContainer = ut.div`
	position: absolute;
	top: -0.3rem;
	left: 0.7rem;
`;
  const WhatsappPlusPlusButton = ({
    onClick
  }) => {
    return u$1(Button, {
      onClick,
      children: u$1(IconContainer, {
        children: [u$1(WhatsappIconContainer, {
          children: u$1(WhatsappIcon, {
            width: "1.7rem",
            height: "1.7rem"
          })
        }), u$1(FirstPlusContainer, {
          children: u$1(PlusIcon, {
            width: "1.7rem",
            height: "1.7rem"
          })
        }), u$1(SecondPlusContainer, {
          children: u$1(PlusIcon, {
            width: "1.7rem",
            height: "1.7rem"
          })
        })]
      })
    });
  };
  const ToolContainerHeight = 48;
  const Container$3 = ut.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40px;
	width: 40px;
	padding: 5px;
`;
  const ToolBarContainer = ut.div`
	display: flex;
	flex-direction: column-reverse;
	position: absolute;
	bottom: 62px;
	right: 0px;
	border-radius: 15px 15px 0px 0px;
	overflow: hidden;
	transition: height ease-in-out 0.2s;
	height: ${(props) => props.open ? (props.children.length ?? 1) * ToolContainerHeight : 0}px;
`;
  const ButtonPrimitiveStyle = ut.button`
	width: 300px;
	height: 100%;
	height: ${ToolContainerHeight}px;
	background: ${({
  theme: theme2
}) => color(getThemedColors(theme2).header.default)};
	color: ${({
  theme: theme2
}) => color(getThemedColors(theme2).text.default)};
	box-sizing: content-box;
	border-bottom: solid 2px
		${({
  theme: theme2
}) => color(getThemedColors(theme2).header.default)};

	font-weight: 400;
	line-height: 19px;
	font-size: 14.2px;

	transition: all ease-in-out 0.25s;
	&:hover {
		border-bottom: solid 2px
			${({
  theme: theme2
}) => color(getThemedColors(theme2).primary.default)};
		background: ${({
  theme: theme2
}) => color(getThemedColors(theme2).header.addBrightness(-10))};
	}
`;
  const Container$2 = ut.div`
	pointer-events: auto;
`;
  const Checkbox = ut.input``;
  const Label = ut.span``;
  const useCheckBoxBehaviour = (props) => {
    const onInput = (ev) => {
      return props.onChangeValue(ev.target.checked);
    };
    return onInput;
  };
  const _CheckBox = (props, ref) => {
    const onInput = useCheckBoxBehaviour(props);
    return u$1(Container$2, {
      children: [u$1(Checkbox, {
        checked: props.checked,
        type: "checkbox",
        ref,
        onInput
      }), u$1(Label, {
        children: props.label
      })]
    });
  };
  const CheckBox = N$1(_CheckBox);
  const useFeaturesPanelBehaviour = () => {
    const {
      value: appContext,
      setValue: setAppContext
    } = AppContext.useContext();
    const toggleFeature = (featureName) => (value) => {
      setAppContext({
        features: {
          [featureName]: value
        }
      });
      localStorage.setItem("WA++Features", JSON.stringify({
        ...appContext.features,
        [featureName]: value
      }));
    };
    const featureIsActive = (featureName) => {
      return appContext.features[featureName];
    };
    return {
      toggleFeature,
      featureIsActive
    };
  };
  const Container$1 = ut.div`
	background: red;
	padding: 1rem;
`;
  const FeaturesPanel = () => {
    const {
      featureIsActive,
      toggleFeature
    } = useFeaturesPanelBehaviour();
    return u$1(Container$1, {
      onClick: stopBubbling,
      children: u$1(CheckBox, {
        checked: featureIsActive("MessageReveal"),
        onChangeValue: toggleFeature("MessageReveal"),
        label: "Message Reveler"
      })
    });
  };
  const useFeatureToggleBehaviour = (props) => {
    const modal = useModal({
      beforeOpen: props.closeToolbar
    });
    const onClick = () => {
      modal.openModal(FeaturesPanel);
    };
    return {
      onClick
    };
  };
  const FeatureToggle = (props) => {
    const {
      onClick
    } = useFeatureToggleBehaviour(props);
    return u$1(preact.Fragment, {
      children: u$1(ButtonPrimitiveStyle, {
        onClick,
        children: u$1("h1", {
          children: "Painel de funções"
        })
      })
    });
  };
  const ChatTools = () => {
    const {
      onClickButton,
      rootElement,
      loading,
      toolbarOpen,
      closeToolbar
    } = useChatToolsBehaviour();
    if (!rootElement) {
      return u$1(preact.Fragment, {});
    }
    return j$2(u$1(Container$3, {
      children: [u$1(Render, {
        when: loading,
        children: u$1(LoadingRing, {
          size: "2rem"
        })
      }), u$1(Render, {
        when: !loading,
        children: u$1(WhatsappPlusPlusButton, {
          onClick: onClickButton
        })
      }), u$1(ToolBarContainer, {
        open: toolbarOpen,
        children: u$1(FeatureToggle, {
          closeToolbar
        })
      })]
    }), rootElement);
  };
  const eventCallbackMap = {
    setItem: {},
    removeItem: {}
  };
  Storage.prototype.setItem = new Proxy(Storage.prototype.setItem, {
    apply(target, thisArg, argumentList) {
      let payload = {};
      try {
        payload = {
          key: argumentList[0],
          oldValue: JSON.parse(thisArg.getItem(argumentList[0])),
          newValue: JSON.parse(argumentList[1])
        };
      } catch (e2) {
        payload = {
          key: argumentList[0],
          oldValue: thisArg.getItem(argumentList[0]),
          newValue: argumentList[1]
        };
      }
      Object.values(eventCallbackMap.setItem).forEach((handler) => {
        handler(payload);
      });
      return Reflect.apply(target, thisArg, argumentList);
    }
  });
  Storage.prototype.removeItem = new Proxy(Storage.prototype.removeItem, {
    apply(target, thisArg, argumentList) {
      let payload = {};
      try {
        payload = {
          key: argumentList[0],
          oldValue: JSON.parse(thisArg.getItem(argumentList[0]))
        };
      } catch (e2) {
        payload = {
          key: argumentList[0],
          oldValue: thisArg.getItem(argumentList[0])
        };
      }
      Object.values(eventCallbackMap.removeItem).forEach((handler) => {
        handler(payload);
      });
      return Reflect.apply(target, thisArg, argumentList);
    }
  });
  const useSetItemListener = (callback, key) => {
    if (!eventCallbackMap.setItem[key]) {
      eventCallbackMap.setItem[key] = callback;
    }
  };
  const ThemeSync = () => {
    const {
      setValue: setAppContext
    } = AppContext.useContext();
    useWaLoadEffect(() => {
      const currentTheme = JSON.parse(localStorage.getItem("theme"));
      setUserTheme(currentTheme || getSystemThemePreference());
    }, []);
    const getSystemThemePreference = () => {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    };
    const setUserTheme = (theme2) => {
      setAppContext({
        theme: {
          variant: theme2
        }
      });
    };
    useWaLoadEffect(() => {
      useSetItemListener(({
        key,
        newValue
      }) => {
        if (key !== "theme") {
          return;
        }
        setUserTheme(newValue);
      }, "theme-sync");
    }, []);
    return u$1(preact.Fragment, {});
  };
  const ModuleController = ({
    active,
    children
  }) => {
    console.log(`Rendering of messageController is ${active}`);
    if (active) {
      return children;
    }
    return null;
  };
  const AllModules = () => {
    const {
      client,
      features
    } = AppContext.useContext().value;
    const [modulesReady, setModulesReady] = h$1(false);
    p$1(() => {
      if (!!client) {
        setModulesReady(true);
      }
    }, [client]);
    if (!modulesReady) {
      return null;
    } else {
      return u$1(preact.Fragment, {
        children: [u$1(ModuleController, {
          active: !!features.MessageReveal,
          children: u$1(MessageRevealer, {})
        }), u$1(ChatTools, {}), u$1(ThemeSync, {})]
      });
    }
  };
  let Location$1 = class Location2 {
    /**
     * @param {number} latitude
     * @param {number} longitude
     * @param {LocationSendOptions} [options] Location send options
     */
    constructor(latitude, longitude, options2 = {}) {
      __publicField(this, "latitude");
      __publicField(this, "longitude");
      __publicField(this, "name");
      __publicField(this, "address");
      __publicField(this, "url");
      __publicField(this, "description");
      this.latitude = latitude;
      this.longitude = longitude;
      this.name = options2.name;
      this.address = options2.address;
      this.url = options2.url;
      this.description = this.name && this.address ? `${this.name}
${this.address}` : this.name || this.address || "";
    }
  };
  var MessageTypes = /* @__PURE__ */ ((MessageTypes2) => {
    MessageTypes2["TEXT"] = "chat";
    MessageTypes2["AUDIO"] = "audio";
    MessageTypes2["VOICE"] = "ptt";
    MessageTypes2["IMAGE"] = "image";
    MessageTypes2["VIDEO"] = "video";
    MessageTypes2["DOCUMENT"] = "document";
    MessageTypes2["STICKER"] = "sticker";
    MessageTypes2["LOCATION"] = "location";
    MessageTypes2["CONTACT_CARD"] = "vcard";
    MessageTypes2["CONTACT_CARD_MULTI"] = "multi_vcard";
    MessageTypes2["REVOKED"] = "revoked";
    MessageTypes2["ORDER"] = "order";
    MessageTypes2["PRODUCT"] = "product";
    MessageTypes2["PAYMENT"] = "payment";
    MessageTypes2["UNKNOWN"] = "unknown";
    MessageTypes2["GROUP_INVITE"] = "groups_v4_invite";
    MessageTypes2["LIST"] = "list";
    MessageTypes2["LIST_RESPONSE"] = "list_response";
    MessageTypes2["BUTTONS_RESPONSE"] = "buttons_response";
    MessageTypes2["BROADCAST_NOTIFICATION"] = "broadcast_notification";
    MessageTypes2["CALL_LOG"] = "call_log";
    MessageTypes2["CIPHERTEXT"] = "ciphertext";
    MessageTypes2["DEBUG"] = "debug";
    MessageTypes2["E2E_NOTIFICATION"] = "e2e_notification";
    MessageTypes2["GP2"] = "gp2";
    MessageTypes2["GROUP_NOTIFICATION"] = "group_notification";
    MessageTypes2["HSM"] = "hsm";
    MessageTypes2["INTERACTIVE"] = "interactive";
    MessageTypes2["NATIVE_FLOW"] = "native_flow";
    MessageTypes2["NOTIFICATION"] = "notification";
    MessageTypes2["NOTIFICATION_TEMPLATE"] = "notification_template";
    MessageTypes2["OVERSIZED"] = "oversized";
    MessageTypes2["PROTOCOL"] = "protocol";
    MessageTypes2["REACTION"] = "reaction";
    MessageTypes2["TEMPLATE_BUTTON_REPLY"] = "template_button_reply";
    MessageTypes2["POLL_CREATION"] = "poll_creation";
    return MessageTypes2;
  })(MessageTypes || {});
  class Message {
    constructor(client, data) {
      __publicField(this, "client");
      __publicField(this, "_data");
      /** ACK status for the message */
      __publicField(this, "ack");
      /** If the message was sent to a group, this field will contain the user that sent the message. */
      __publicField(this, "author");
      /** String that represents from which device type the message was sent */
      __publicField(this, "deviceType");
      /** Message content */
      __publicField(this, "body");
      /** Indicates if the message was a broadcast */
      __publicField(this, "broadcast");
      /** Indicates if the message was a status update */
      __publicField(this, "isStatus");
      /** Indicates if the message is a Gif */
      __publicField(this, "isGif");
      /** Indicates if the message will disappear after it expires */
      __publicField(this, "isEphemeral");
      /** ID for the Chat that this message was sent to, except if the message was sent by the current user */
      __publicField(this, "from");
      /** Indicates if the message was sent by the current user */
      __publicField(this, "fromMe");
      /** Indicates if the message has media available for download */
      __publicField(this, "hasMedia");
      /** Indicates if the message was sent as a reply to another message */
      __publicField(this, "hasQuotedMsg");
      /** Indicates whether there are reactions to the message */
      __publicField(this, "hasReaction");
      /** Indicates the duration of the message in seconds */
      __publicField(this, "duration");
      /** ID that represents the message */
      __publicField(this, "id");
      /** Indicates if the message was forwarded */
      __publicField(this, "isForwarded");
      /**
       * Indicates how many times the message was forwarded.
       * The maximum value is 127.
       */
      __publicField(this, "forwardingScore");
      /** Indicates if the message was starred */
      __publicField(this, "isStarred");
      /** Location information contained in the message, if the message is type "location" */
      __publicField(this, "location");
      /** List of vCards contained in the message */
      __publicField(this, "vCards");
      /** Invite v4 info */
      __publicField(this, "inviteV4");
      /** MediaKey that represents the sticker 'ID' */
      __publicField(this, "mediaKey");
      /** Indicates the mentions in the message body. */
      __publicField(this, "mentionedIds");
      /** Indicates whether there are group mentions in the message body */
      __publicField(this, "groupMentions");
      /** Unix timestamp for when the message was created */
      __publicField(this, "timestamp");
      /**
       * ID for who this message is for.
       * If the message is sent by the current user, it will be the Chat to which the message is being sent.
       * If the message is sent by another user, it will be the ID for the current user.
       */
      __publicField(this, "to");
      /** Message type */
      __publicField(this, "type");
      /** Links included in the message. */
      __publicField(this, "links");
      /** Order ID */
      __publicField(this, "orderId");
      /** title */
      __publicField(this, "title");
      /** description*/
      __publicField(this, "description");
      /** Business Owner JID */
      __publicField(this, "businessOwnerJid");
      /** Product JID */
      __publicField(this, "productId");
      /** Last edit time */
      __publicField(this, "latestEditSenderTimestampMs");
      /** Last edit message author */
      __publicField(this, "latestEditMsgKey");
      /** Message buttons */
      __publicField(this, "dynamicReplyButtons");
      /** Selected button ID */
      __publicField(this, "selectedButtonId");
      /** Selected list row ID */
      __publicField(this, "selectedRowId");
      /** Returns message in a raw format */
      __publicField(this, "pollName");
      /** Avaiaible poll voting options */
      __publicField(this, "pollOptions");
      /** False for a single choice poll, true for a multiple choice poll */
      __publicField(this, "allowMultipleAnswers");
      /** Order Token for message type ORDER */
      __publicField(this, "token");
      __publicField(this, "pollInvalidated");
      __publicField(this, "isSentCagPollCreation");
      this.client = client;
      if (data)
        return this._patch(data);
    }
    _patch(data) {
      this._data = data;
      this.mediaKey = data.mediaKey;
      this.id = data.id;
      this.ack = data.ack;
      this.hasMedia = Boolean(data.mediaKey && data.directPath);
      this.body = this.hasMedia ? data.caption || "" : data.body || data.pollName || "";
      this.type = data.type;
      this.timestamp = data.t;
      this.from = typeof data.from === "object" && data.from !== null ? data.from._serialized : data.from;
      this.to = typeof data.to === "object" && data.to !== null ? data.to._serialized : data.to;
      this.author = typeof data.author === "object" && data.author !== null ? data.author._serialized : data.author;
      this.deviceType = typeof data.id.id === "string" && data.id.id.length > 21 ? "android" : typeof data.id.id === "string" && data.id.id.substring(0, 2) === "3A" ? "ios" : "web";
      this.isForwarded = data.isForwarded;
      this.forwardingScore = data.forwardingScore || 0;
      this.isStatus = data.isStatusV3 || data.id.remote === "status@broadcast";
      this.isStarred = data.star;
      this.broadcast = data.broadcast;
      this.fromMe = data.id.fromMe;
      this.hasQuotedMsg = data.quotedMsg ? true : false;
      this.hasReaction = data.hasReaction ? true : false;
      this.duration = data.duration ? data.duration : void 0;
      this.location = (() => {
        if (data.type !== MessageTypes.LOCATION) {
          return void 0;
        }
        let description;
        if (data.loc && typeof data.loc === "string") {
          let splitted = data.loc.split("\n");
          description = {
            name: splitted[0],
            address: splitted[1],
            url: data.clientUrl
          };
        }
        return new Location$1(data.lat, data.lng, description);
      })();
      this.vCards = data.type === MessageTypes.CONTACT_CARD_MULTI ? data.vcardList.map((c2) => c2.vcard) : data.type === MessageTypes.CONTACT_CARD ? [data.body] : [];
      this.inviteV4 = data.type === MessageTypes.GROUP_INVITE ? {
        inviteCode: data.inviteCode,
        inviteCodeExp: data.inviteCodeExp,
        groupId: data.inviteGrp,
        groupName: data.inviteGrpName,
        fromId: "_serialized" in data.from ? data.from._serialized : data.from,
        toId: "_serialized" in data.to ? data.to._serialized : data.to
      } : void 0;
      this.mentionedIds = data.mentionedJidList || [];
      this.groupMentions = data.groupMentions || [];
      this.orderId = data.orderId ? data.orderId : void 0;
      this.token = data.token ? data.token : void 0;
      this.isGif = Boolean(data.isGif);
      this.isEphemeral = data.isEphemeral;
      if (data.title) {
        this.title = data.title;
      }
      if (data.description) {
        this.description = data.description;
      }
      if (data.businessOwnerJid) {
        this.businessOwnerJid = data.businessOwnerJid;
      }
      if (data.productId) {
        this.productId = data.productId;
      }
      if (data.latestEditSenderTimestampMs) {
        this.latestEditSenderTimestampMs = data.latestEditSenderTimestampMs;
      }
      if (data.latestEditMsgKey) {
        this.latestEditMsgKey = data.latestEditMsgKey;
      }
      this.links = data.links;
      if (data.dynamicReplyButtons) {
        this.dynamicReplyButtons = data.dynamicReplyButtons;
      }
      if (data.selectedButtonId) {
        this.selectedButtonId = data.selectedButtonId;
      }
      if (data.listResponse && data.listResponse.singleSelectReply.selectedRowId) {
        this.selectedRowId = data.listResponse.singleSelectReply.selectedRowId;
      }
      if (this.type === MessageTypes.POLL_CREATION) {
        this.pollName = data.pollName;
        this.pollOptions = data.pollOptions;
        this.allowMultipleAnswers = Boolean(!data.pollSelectableOptionsCount);
        this.pollInvalidated = data.pollInvalidated;
        this.isSentCagPollCreation = data.isSentCagPollCreation;
        delete this._data.pollName;
        delete this._data.pollOptions;
        delete this._data.pollSelectableOptionsCount;
        delete this._data.pollInvalidated;
        delete this._data.isSentCagPollCreation;
      }
      return this;
    }
    _getChatId() {
      return this.fromMe ? this.to : this.from;
    }
    /**
     * Reloads this Message object's data in-place with the latest values from WhatsApp Web.
     * Note that the Message must still be in the web app cache for this to work, otherwise will return null.
     * @returns {Promise<Message>}
     */
    async reload() {
      const msg = window.Store.Msg.get(this.id._serialized);
      if (!msg)
        return null;
      const newData = window.WWebJS.getMessageModel(msg);
      if (!newData)
        return null;
      return this._patch(newData);
    }
    /**
     * Returns message in a raw format
     * @type {Object}
     */
    get rawData() {
      return this._data;
    }
    /**
     * Returns the Chat this message was sent in
     * @returns {Promise<Chat>}
     */
    getChat() {
      return this.client.getChatById(this._getChatId());
    }
    /**
     * Returns the Contact this message was sent from
     * @returns {Promise<Contact>}
     */
    getContact() {
      return this.client.getContactById(this.author || this.from);
    }
    /**
     * Returns the Contacts mentioned in this message
     * @returns {Promise<Array<Contact>>}
     */
    async getMentions() {
      return await Promise.all(this.mentionedIds.map(async (m2) => await this.client.getContactById(m2)));
    }
    /**
     * Returns groups mentioned in this message
     * @returns {Promise<GroupChat[]|[]>}
     */
    async getGroupMentions() {
      return await Promise.all(this.groupMentions.map(async (m2) => await this.client.getChatById(m2.groupJid._serialized)));
    }
    /**
     * Returns the quoted message, if any
     * @returns {Promise<Message>}
     */
    async getQuotedMessage() {
      if (!this.hasQuotedMsg)
        return void 0;
      return this.client.getQuotedMessage(this.id._serialized);
    }
    /**
     * Sends a message as a reply to this message. If chatId is specified, it will be sent
     * through the specified Chat. If not, it will send the message
     * in the same Chat as the original message was sent.
     *
     * @param {MessageContent} content
     * @param {string} [chatId]
     * @param {MessageSendOptions} [options]
     * @returns {Promise<Message>}
     */
    async reply(content, chatId, options2 = {}) {
      if (!chatId) {
        chatId = this._getChatId();
      }
      options2 = {
        ...options2,
        quotedMessageId: this.id._serialized
      };
      return this.client.sendMessage(chatId, content, options2);
    }
    /**
     * React to this message with an emoji
     * @param {string} reactionEmoji - Emoji to react with. Send an empty string to remove the reaction.
     * @return {Promise}
     */
    async react(reactionEmoji) {
      return this.client.reactToMesage(this.id._serialized, reactionEmoji);
    }
    /**
     * Forwards this message to another chat (that you chatted before, otherwise it will fail)
     *
     * @param {string} chat Chat model or chat ID to which the message will be forwarded
     * @returns {Promise}
     */
    async forward(serializedChatId) {
      return this.client.forwardMessageTochat(this.id._serialized, serializedChatId);
    }
    /**
     * Downloads and returns the attatched message media
     * @returns {Promise<MessageMedia>}
     */
    async downloadMedia() {
      if (!this.hasMedia) {
        return void 0;
      }
      const result = await this.client.downloadMediaFromMessage(this.id._serialized);
      if (!result)
        return void 0;
      return result;
    }
    /**
     * Deletes a message from the chat
     * @param {?boolean} toEveryone If true and the message is sent by the current user or the user is an admin, will delete it for everyone in the chat.
     */
    async delete(toEveryone) {
      return this.client.deleteMessage(this.id._serialized, toEveryone);
    }
    /**
     * Stars this message
     */
    async star() {
      return this.client.starMessage(this.id._serialized);
    }
    /**
     * Unstars this message
     */
    async unstar() {
      return this.client.unstarMessage(this.id._serialized);
    }
    /**
     * Pins the message (group admins can pin messages of all group members)
     * @param {number} duration The duration in seconds the message will be pinned in a chat
     * @returns {Promise<boolean>} Returns true if the operation completed successfully, false otherwise
     */
    async pin(durationInSecods) {
      return this.client.pinMessage(this.id._serialized, durationInSecods);
    }
    /**
     * Unpins the message (group admins can unpin messages of all group members)
     * @returns {Promise<boolean>} Returns true if the operation completed successfully, false otherwise
     */
    async unpin() {
      return this.client.unpinMessage(this.id._serialized);
    }
    /**
     * Message Info
     * @typedef {Object} MessageInfo
     * @property {Array<{id: ContactId, t: number}>} delivery Contacts to which the message has been delivered to
     * @property {number} deliveryRemaining Amount of people to whom the message has not been delivered to
     * @property {Array<{id: ContactId, t: number}>} played Contacts who have listened to the voice message
     * @property {number} playedRemaining Amount of people who have not listened to the message
     * @property {Array<{id: ContactId, t: number}>} read Contacts who have read the message
     * @property {number} readRemaining Amount of people who have not read the message
     */
    /**
     * Get information about message delivery status.
     * May return null if the message does not exist or is not sent by you.
     * @returns {Promise<?MessageInfo>}
     */
    async getInfo() {
      return this.client.getMessageInfo(this.id._serialized);
    }
    /**
     * Reaction List
     * @typedef {Object} ReactionList
     * @property {string} id Original emoji
     * @property {string} aggregateEmoji aggregate emoji
     * @property {boolean} hasReactionByMe Flag who sent the reaction
     * @property {Array<Reaction>} senders Reaction senders, to this message
     */
    /**
     * Gets the reactions associated with the given message
     * @return {Promise<ReactionList[]>}
     */
    async getReactions() {
      if (!this.hasReaction) {
        return null;
      }
      return this.client.getReactionsFromMessage(this.id._serialized);
    }
    /**
     * Edits the current message.
     * @param {string} content
     * @param {MessageEditOptions} [options] - Options used when editing the message
     * @returns {Promise<?Message>}
     */
    async edit(content, options2 = {}) {
      if (!this.fromMe) {
        return null;
      }
      return this.client.editMessage(this.id._serialized, content, options2);
    }
  }
  class Chat {
    /** Last message from chat */
    constructor(client, data) {
      /** Client instance */
      __publicField(this, "client");
      /** Indicates if the Chat is archived */
      __publicField(this, "archived");
      /** ID that represents the chat */
      __publicField(this, "id");
      /** Indicates if the Chat is a Group Chat */
      __publicField(this, "isGroup");
      /** Indicates if the Chat is readonly */
      __publicField(this, "isReadOnly");
      /** Indicates if the Chat is muted */
      __publicField(this, "isMuted");
      /** Unix timestamp for when the mute expires */
      __publicField(this, "muteExpiration");
      /** Title of the chat */
      __publicField(this, "name");
      /** Unix timestamp for when the last activity occurred */
      __publicField(this, "timestamp");
      /** Amount of messages unread */
      __publicField(this, "unreadCount");
      /** Last message fo chat */
      __publicField(this, "lastMessage");
      /** Indicates if the Chat is pinned */
      __publicField(this, "pinned");
      this.client = client;
      if (data)
        this._patch(data);
    }
    _patch(data) {
      this.id = data.id;
      this.name = data.formattedTitle;
      this.isGroup = data.isGroup;
      this.isReadOnly = data.isReadOnly;
      this.unreadCount = data.unreadCount;
      this.timestamp = data.t;
      this.archived = data.archive;
      this.pinned = !!data.pin;
      this.isMuted = data.isMuted;
      this.muteExpiration = data.muteExpiration;
      this.lastMessage = data.lastMessage ? new Message(this.client, data.lastMessage) : void 0;
    }
    /**
     * Send a message to this chat
     * @param {string|MessageMedia|Location} content
     * @param {MessageSendOptions} [options]
     * @returns {Promise<Message>} Message that was just sent
     */
    async sendMessage(content, options2) {
      return this.client.sendMessage(this.id._serialized, content, options2);
    }
    /**
     * Set the message as seen
     * @returns {Promise<Boolean>} result
     */
    async sendSeen() {
      return this.client.sendSeen(this.id._serialized);
    }
    /**
     * Clears all messages from the chat
     * @returns {Promise<Boolean>} result
     */
    async clearMessages() {
      return this.client.clearChatMessages(this.id._serialized);
    }
    /**
     * Deletes the chat
     * @returns {Promise<Boolean>} result
     */
    async delete() {
      return this.client.deleteChat(this.id._serialized);
    }
    /**
     * Archives this chat
     */
    async archive() {
      return this.client.archiveChat(this.id._serialized);
    }
    /**
     * un-archives this chat
     */
    async unarchive() {
      return this.client.unarchiveChat(this.id._serialized);
    }
    /**
     * Pins this chat
     * @returns {Promise<boolean>} New pin state. Could be false if the max number of pinned chats was reached.
     */
    async pin() {
      return this.client.pinChat(this.id._serialized);
    }
    /**
     * Unpins this chat
     * @returns {Promise<boolean>} New pin state
     */
    async unpin() {
      return this.client.unpinChat(this.id._serialized);
    }
    /**
     * Mutes this chat forever, unless a date is specified
     * @param {?Date} unmuteDate Date at which the Chat will be unmuted, leave as is to mute forever
     */
    async mute(unmuteDate) {
      return this.client.muteChat(this.id._serialized, unmuteDate);
    }
    /**
     * Unmutes this chat
     */
    async unmute() {
      return this.client.unmuteChat(this.id._serialized);
    }
    /**
     * Mark this chat as unread
     */
    async markUnread() {
      return this.client.markChatUnread(this.id._serialized);
    }
    /**
     * Loads chat messages, sorted from earliest to latest.
     * @param {Object} searchOptions Options for searching messages. Right now only limit and fromMe is supported.
     * @param {Number} [searchOptions.limit] The amount of messages to return. If no limit is specified, the available messages will be returned. Note that the actual number of returned messages may be smaller if there aren't enough messages in the conversation. Set this to Infinity to load all messages.
     * @param {Boolean} [searchOptions.fromMe] Return only messages from the bot number or vise versa. To get all messages, leave the option undefined.
     * @returns {Promise<Array<Message>>}
     */
    async fetchMessages(searchOptions) {
      return this.client.fetchMessagesFromChat(this.id._serialized, searchOptions);
    }
    /**
     * Simulate typing in chat. This will last for 25 seconds.
     */
    async sendStateTyping() {
      return this.client.sendTypingStateToChat(this.id._serialized);
    }
    /**
     * Simulate recording audio in chat. This will last for 25 seconds.
     */
    async sendStateRecording() {
      return this.client.sendRecordingAudioStateToChat(this.id._serialized);
    }
    /**
     * Stops typing or recording in chat immediately.
     */
    async clearState() {
      return this.client.clearChatState(this.id._serialized);
    }
    /**
     * Returns the Contact that corresponds to this Chat.
     * @returns {Promise<Contact>}
     */
    async getContact() {
      return await this.client.getContactById(this.id._serialized);
    }
    /**
     * Returns array of all Labels assigned to this Chat
     * @returns {Promise<Array<Label>>}
     */
    async getLabels() {
      return this.client.getChatLabels(this.id._serialized);
    }
    /**
     * Add or remove labels to this Chat
     * @param {Array<number|string>} labelIds
     * @returns {Promise<void>}
     */
    async changeLabels(labelIds) {
      return this.client.addOrRemoveLabelsFromChat(labelIds, [this.id._serialized]);
    }
  }
  class PrivateChat extends Chat {
  }
  const CreateChat = (client, data) => {
    if (data.isGroup) {
      return new Chat(client, data);
    } else {
      return new PrivateChat(client, data);
    }
  };
  const CreateContact = (client, data) => {
    if (data.isBusiness) {
      return new BusinessContact(client, data);
    } else {
      return new PrivateContact(client, data);
    }
  };
  class BusinessContact {
    constructor(Client2, data) {
    }
  }
  class PrivateContact {
    constructor(Client2, data) {
    }
  }
  class MessageMedia {
    constructor(mimetype, data, filename, filesize) {
      __publicField(this, "mimetype");
      __publicField(this, "data");
      __publicField(this, "filename");
      __publicField(this, "filesize");
      this.mimetype = mimetype;
      this.data = data;
      this.filename = filename;
      this.filesize = filesize;
    }
  }
  class Reaction {
    constructor(client, data) {
      __publicField(this, "client");
      __publicField(this, "id");
      __publicField(this, "orphan");
      __publicField(this, "orphanReason");
      __publicField(this, "timestamp");
      __publicField(this, "reaction");
      __publicField(this, "read");
      __publicField(this, "msgId");
      __publicField(this, "senderId");
      __publicField(this, "ack");
      this.client = client;
      if (data)
        this._patch(data);
    }
    _patch(data) {
      this.id = data.msgKey;
      this.orphan = data.orphan;
      this.orphanReason = data.orphanReason;
      this.timestamp = data.timestamp;
      this.reaction = data.reactionText;
      this.read = data.read;
      this.msgId = data.parentMsgKey;
      this.senderId = data.senderUserJid;
      this.ack = data.ack;
    }
  }
  class Client {
    constructor() {
    }
    async getMessageById(messageId) {
      const msg = await (async () => {
        let msg2 = window.Store.Msg.get(messageId);
        if (msg2)
          return window.WWebJS.getMessageModel(msg2);
        const params = messageId.split("_");
        if (params.length !== 3)
          throw new Error("Invalid serialized message id specified");
        let messagesObject = await window.Store.Msg.getMessagesById([messageId]);
        if (messagesObject && messagesObject.messages.length)
          msg2 = messagesObject.messages[0];
        if (msg2)
          return window.WWebJS.getMessageModel(msg2);
      })();
      if (msg)
        return new Message(this, msg);
      return null;
    }
    async getChatById(chatId) {
      const rawChat = await window.WWebJS.getChat(chatId);
      return CreateChat(this, rawChat);
    }
    async getContactById(contactId) {
      const rawContact = window.WWebJS.getContact(contactId);
      return CreateContact(this, rawContact);
    }
    async getQuotedMessage(messageId) {
      const msg = window.Store.Msg.get(messageId);
      const quotedMsg = window.Store.QuotedMsg.getQuotedMsgObj(msg);
      const quotedMessageModel = window.WWebJS.getMessageModel(quotedMsg);
      return new Message(this, quotedMessageModel);
    }
    async sendMessage(chatId, content, options2 = {}) {
      if (options2.mentions) {
        !Array.isArray(options2.mentions) && (options2.mentions = [options2.mentions]);
      }
      ({
        linkPreview: options2.linkPreview === false ? void 0 : true,
        sendAudioAsVoice: options2.sendAudioAsVoice,
        sendVideoAsGif: options2.sendVideoAsGif,
        sendMediaAsSticker: options2.sendMediaAsSticker,
        sendMediaAsDocument: options2.sendMediaAsDocument,
        caption: options2.caption,
        quotedMessageId: options2.quotedMessageId,
        parseVCards: options2.parseVCards === false ? false : true,
        mentionedJidList: options2.mentions || []
      });
      const sendSeen = typeof options2.sendSeen === "undefined" ? true : options2.sendSeen;
      if (content instanceof MessageMedia) {
        options2.isViewOnce, content = "";
      } else if (content instanceof Location) {
        content = "";
      }
      try {
        const chatWid = window.Store.WidFactory.createWid(chatId);
        const chat = await window.Store.Chat.find(chatWid);
        if (sendSeen) {
          await window.WWebJS.sendSeen(chatId);
        }
        const msg = await window.WWebJS.sendMessage(chat, content, options2, sendSeen);
        const newMessage = window.WWebJS.getMessageModel(msg);
        return new Message(this, newMessage);
      } catch (e2) {
        console.warn(e2);
        console.log({
          chatId,
          content,
          options: options2,
          sendSeen
        });
      }
    }
    async reactToMesage(serializedId, reactionEmoji) {
      const msg = await window.Store.Msg.get(serializedId);
      return await window.Store.sendReactionToMsg(msg, reactionEmoji);
    }
    async forwardMessageTochat(serializedMsgId, serializedChatId) {
      let msg = window.Store.Msg.get(serializedMsgId);
      let chat = window.Store.Chat.get(serializedChatId);
      return await chat.forwardMessages([msg]);
    }
    async downloadMediaFromMessage(serializedMsgId) {
      const msg = window.Store.Msg.get(serializedMsgId);
      if (!msg || !msg.mediaData) {
        return void 0;
      }
      if (msg.mediaData.mediaStage != "RESOLVED") {
        await msg.downloadMedia({
          downloadEvenIfExpensive: true,
          rmrReason: 1
        });
      }
      if (msg.mediaData.mediaStage.includes("ERROR") || msg.mediaData.mediaStage === "FETCHING") {
        return void 0;
      }
      try {
        const decryptedMedia = await window.Store.DownloadManager.downloadAndMaybeDecrypt({
          directPath: msg.directPath,
          encFilehash: msg.encFilehash,
          filehash: msg.filehash,
          mediaKey: msg.mediaKey,
          mediaKeyTimestamp: msg.mediaKeyTimestamp,
          type: msg.type,
          signal: new AbortController().signal
        });
        const data = await window.WWebJS.arrayBufferToBase64Async(decryptedMedia);
        return new MessageMedia(msg.mimetype, data, msg.filename, msg.size);
      } catch (e2) {
        if (e2.status && e2.status === 404)
          return void 0;
        throw e2;
      }
    }
    async deleteMessage(serializedMsgId, toEveryone) {
      let msg = window.Store.Msg.get(serializedMsgId);
      let chat = await window.Store.Chat.find(msg.id.remote);
      const canRevoke = window.Store.MsgActionChecks.canSenderRevokeMsg(msg) || window.Store.MsgActionChecks.canAdminRevokeMsg(msg);
      if (toEveryone && canRevoke) {
        return window.Store.Cmd.sendRevokeMsgs(chat, [msg], {
          clearMedia: true,
          type: msg.id.fromMe ? "Sender" : "Admin"
        });
      }
      return window.Store.Cmd.sendDeleteMsgs(chat, [msg], true);
    }
    async starMessage(serializedMessageId) {
      let msg = window.Store.Msg.get(serializedMessageId);
      if (window.Store.MsgActionChecks.canStarMsg(msg)) {
        let chat = await window.Store.Chat.find(msg.id.remote);
        return window.Store.Cmd.sendStarMsgs(chat, [msg], false);
      }
    }
    async unstarMessage(serializedMessageId) {
      let msg = window.Store.Msg.get(serializedMessageId);
      if (window.Store.MsgActionChecks.canStarMsg(msg)) {
        let chat = await window.Store.Chat.find(msg.id.remote);
        return window.Store.Cmd.sendUnstarMsgs(chat, [msg], false);
      }
    }
    async pinMessage(serializedMessageId, durationInSeconds) {
      return window.WWebJS.pinUnpinMsgAction(serializedMessageId, 1, durationInSeconds);
    }
    async unpinMessage(serializedMsgId) {
      return await window.WWebJS.pinUnpinMsgAction(serializedMsgId, 2);
    }
    async getMessageInfo(serializedMessageId) {
      const msg = window.Store.Msg.get(serializedMessageId);
      if (!msg || !msg.id.fromMe)
        return null;
      return new Promise((resolve) => {
        setTimeout(async () => {
          resolve(await window.Store.getMsgInfo(msg.id));
        }, Date.now() - msg.t * 1e3 < 1250 && Math.floor(Math.random() * (1200 - 1100 + 1)) + 1100 || 0);
      });
    }
    async getReactionsFromMessage(serializedMessageId) {
      const msgReactions = await window.Store.Reactions.find(serializedMessageId);
      if (!msgReactions || !msgReactions.reactions.length)
        return null;
      const reactionList = msgReactions.reactions.serialize();
      if (!reactionList) {
        return null;
      }
      return reactionList.map((reaction) => {
        reaction.senders = reaction.senders.map((sender) => {
          sender.timestamp = Math.round(sender.timestamp / 1e3);
          return new Reaction(this, sender);
        });
        return reaction;
      });
    }
    async editMessage(serializedMessageId, content, options2) {
      if (options2.mentions) {
        !Array.isArray(options2.mentions) && (options2.mentions = [options2.mentions]);
      }
      let internalOptions = {
        linkPreview: options2.linkPreview === false ? void 0 : true,
        mentionedJidList: options2.mentions || [],
        extraOptions: options2.extra
      };
      let msg = window.Store.Msg.get(serializedMessageId);
      if (!msg)
        return null;
      let canEdit = window.Store.MsgActionChecks.canEditText(msg) || window.Store.MsgActionChecks.canEditCaption(msg);
      if (canEdit) {
        const msgEdit = await window.WWebJS.editMessage(msg, content, internalOptions);
        return new Message(this, msgEdit.serialize());
      } else {
        console.warn("you can't edit this message.");
      }
      return null;
    }
    async sendSeen(serializedChatId) {
      return window.WWebJS.sendSeen(serializedChatId);
    }
    async clearChatMessages(serializedChatId) {
      return window.WWebJS.sendClearChat(serializedChatId);
    }
    async deleteChat(serializedChatId) {
      return window.WWebJS.sendDeleteChat(serializedChatId);
    }
    async archiveChat(serializedChatId) {
      try {
        let chat = await window.Store.Chat.get(serializedChatId);
        await window.Store.Cmd.archiveChat(chat, true);
        return true;
      } catch (e2) {
        return false;
      }
    }
    async unarchiveChat(serializedChatId) {
      try {
        let chat = await window.Store.Chat.get(serializedChatId);
        await window.Store.Cmd.archiveChat(chat, false);
        return true;
      } catch (e2) {
        return false;
      }
    }
    async pinChat(serializedChatId) {
      try {
        let chat = window.Store.Chat.get(serializedChatId);
        if (chat.pin) {
          return true;
        }
        const MAX_PIN_COUNT = 3;
        const chatModels = window.Store.Chat.getModelsArray();
        if (chatModels.length > MAX_PIN_COUNT) {
          let maxPinned = chatModels[MAX_PIN_COUNT - 1].pin;
          if (maxPinned) {
            return false;
          }
        }
        await window.Store.Cmd.pinChat(chat, true);
        return true;
      } catch (e2) {
        return false;
      }
    }
    async unpinChat(serializedChatId) {
      try {
        let chat = window.Store.Chat.get(serializedChatId);
        if (!chat.pin) {
          return true;
        }
        await window.Store.Cmd.pinChat(chat, false);
        return true;
      } catch (e2) {
        return false;
      }
    }
    async muteChat(serializedChatId, unmuteDate) {
      try {
        const actualUnmuteDate = unmuteDate ? unmuteDate.getTime() / 1e3 : -1;
        let chat = await window.Store.Chat.get(serializedChatId);
        await chat.mute.mute({
          expiration: actualUnmuteDate,
          sendDevice: true
        });
        return true;
      } catch (e2) {
        return false;
      }
    }
    async unmuteChat(serializedChatId) {
      try {
        let chat = await window.Store.Chat.get(serializedChatId);
        await window.Store.Cmd.muteChat(chat, false);
        return true;
      } catch (e2) {
        return false;
      }
    }
    async markChatUnread(serializedChatId) {
      try {
        let chat = await window.Store.Chat.get(serializedChatId);
        await window.Store.Cmd.markChatUnread(chat, true);
        return true;
      } catch (e2) {
        return false;
      }
    }
    async fetchMessagesFromChat(serializedChatId, searchOptions) {
      const msgFilter = (m2) => {
        if (m2.isNotification) {
          return false;
        }
        if (searchOptions && searchOptions.fromMe !== void 0 && m2.id.fromMe !== searchOptions.fromMe) {
          return false;
        }
        return true;
      };
      const chat = window.Store.Chat.get(serializedChatId);
      let msgs = chat.msgs.getModelsArray().filter(msgFilter);
      if (searchOptions && searchOptions.limit > 0) {
        while (msgs.length < searchOptions.limit) {
          const loadedMessages = await window.Store.ConversationMsgs.loadEarlierMsgs(chat);
          if (!loadedMessages || !loadedMessages.length)
            break;
          msgs = [...loadedMessages.filter(msgFilter), ...msgs];
        }
        if (msgs.length > searchOptions.limit) {
          msgs.sort((a2, b2) => a2.t > b2.t ? 1 : -1);
          msgs = msgs.splice(msgs.length - searchOptions.limit);
        }
      }
      return msgs.map((m2) => window.WWebJS.getMessageModel(m2)).map((model) => new Message(this, model));
    }
    /** Valid for 25 seconds or until calling `Client.clearChatState(serializedChatId)` */
    async sendTypingStateToChat(serializedChatId) {
      try {
        window.WWebJS.sendChatstate("typing", serializedChatId);
        return true;
      } catch (e2) {
        return false;
      }
    }
    /** Valid for 25 seconds or until calling `Client.clearChatState(serializedChatId)` */
    async sendRecordingAudioStateToChat(serializedChatId) {
      try {
        window.WWebJS.sendChatstate("recording", serializedChatId);
        return true;
      } catch (e2) {
        return false;
      }
    }
    /** Clears chatState. Used to revert `sendRecordningAudioStateToChat` or `sendTypingStateToChat` */
    async clearChatState(serializedChatId) {
      try {
        window.WWebJS.sendChatstate("stop", serializedChatId);
        return true;
      } catch (e2) {
        return false;
      }
    }
    // [TODO]: Check wtf is this;
    async getChatLabels(serializedChatId) {
      return window.WWebJS.getChatLabels(serializedChatId);
    }
    async getChatsByLabelId(labelId) {
      try {
        const label = window.Store.Label.get(labelId);
        const labelItems = label.labelItemCollection.getModelsArray();
        const chatIds = labelItems.reduce((result, item) => {
          if (item.parentType === "Chat") {
            result.push(item.parentId);
          }
          return result;
        }, []);
        return Promise.all(chatIds.map((id) => this.getChatById(id)));
      } catch (e2) {
        return [];
      }
    }
    async addOrRemoveLabelsFromChat(labelIds, serializedChatIds) {
      if (["smba", "smbi"].indexOf(window.Store.Conn.platform) === -1) {
        throw "[LT01] Only Whatsapp business";
      }
      const labels = window.WWebJS.getLabels().filter((e2) => labelIds.find((l2) => l2 == e2.id) !== void 0);
      const chats = window.Store.Chat.filter((e2) => serializedChatIds.includes(e2.id._serialized));
      let actions = labels.map((label) => ({
        id: label.id,
        type: "add"
      }));
      chats.forEach((chat) => {
        (chat.labels || []).forEach((n2) => {
          if (!actions.find((e2) => e2.id == n2)) {
            actions.push({
              id: n2,
              type: "remove"
            });
          }
        });
      });
      return await window.Store.Label.addOrRemoveLabels(actions, chats);
    }
    async getAllChats() {
      const proto_chats = await window.WWebJS.getChats();
      return proto_chats.map((chat) => CreateChat(this, chat));
    }
  }
  const inject = async () => {
    const ExposeStore = () => {
      window.Store = Object.assign({}, window.require("WAWebCollections"));
      window.Store.AppState = window.require("WAWebSocketModel").Socket;
      window.Store.BlockContact = window.require("WAWebBlockContactAction");
      window.Store.Conn = window.require("WAWebConnModel").Conn;
      window.Store.Cmd = window.require("WAWebCmd").Cmd;
      window.Store.DownloadManager = window.require("WAWebDownloadManager").downloadManager;
      window.Store.GroupQueryAndUpdate = window.require("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById;
      window.Store.MediaPrep = window.require("WAWebPrepRawMedia");
      window.Store.MediaObject = window.require("WAWebMediaStorage");
      window.Store.MediaTypes = window.require("WAWebMmsMediaTypes");
      window.Store.MediaUpload = window.require("WAWebMediaMmsV4Upload");
      window.Store.MsgKey = window.require("WAWebMsgKey");
      window.Store.NumberInfo = window.require("WAPhoneUtils");
      window.Store.OpaqueData = window.require("WAWebMediaOpaqueData");
      window.Store.QueryProduct = window.require("WAWebBizProductCatalogBridge");
      window.Store.QueryOrder = window.require("WAWebBizOrderBridge");
      window.Store.SendClear = window.require("WAWebChatClearBridge");
      window.Store.SendDelete = window.require("WAWebDeleteChatAction");
      window.Store.SendMessage = window.require("WAWebSendMsgChatAction");
      window.Store.EditMessage = window.require("WAWebSendMessageEditAction");
      window.Store.SendSeen = window.require("WAWebUpdateUnreadChatAction");
      window.Store.User = window.require("WAWebUserPrefsMeUser");
      window.Store.ContactMethods = window.require("WAWebContactGetters");
      window.Store.UploadUtils = window.require("WAWebUploadManager");
      window.Store.UserConstructor = window.require("WAWebWid");
      window.Store.Validators = window.require("WALinkify");
      window.Store.VCard = window.require("WAWebFrontendVcardUtils");
      window.Store.WidFactory = window.require("WAWebWidFactory");
      window.Store.ProfilePic = window.require("WAWebContactProfilePicThumbBridge");
      window.Store.PresenceUtils = window.require("WAWebPresenceChatAction");
      window.Store.ChatState = window.require("WAWebChatStateBridge");
      window.Store.findCommonGroups = window.require("WAWebFindCommonGroupsContactAction").findCommonGroups;
      window.Store.StatusUtils = window.require("WAWebContactStatusBridge");
      window.Store.ConversationMsgs = window.require("WAWebChatLoadMessages");
      window.Store.sendReactionToMsg = window.require("WAWebSendReactionMsgAction").sendReactionToMsg;
      window.Store.createOrUpdateReactionsModule = window.require("WAWebDBCreateOrUpdateReactions");
      window.Store.EphemeralFields = window.require("WAWebGetEphemeralFieldsMsgActionsUtils");
      window.Store.MsgActionChecks = window.require("WAWebMsgActionCapability");
      window.Store.QuotedMsg = window.require("WAWebQuotedMsgModelUtils");
      window.Store.LinkPreview = window.require("WAWebLinkPreviewChatAction");
      window.Store.Socket = window.require("WADeprecatedSendIq");
      window.Store.SocketWap = window.require("WAWap");
      window.Store.SearchContext = window.require("WAWebChatMessageSearch").getSearchContext;
      window.Store.DrawerManager = window.require("WAWebDrawerManager").DrawerManager;
      window.Store.LidUtils = window.require("WAWebApiContact");
      window.Store.WidToJid = window.require("WAWebWidToJid");
      window.Store.JidToWid = window.require("WAWebJidToWid");
      window.Store.getMsgInfo = window.require("WAWebApiMessageInfoStore").queryMsgInfo;
      window.Store.pinUnpinMsg = window.require("WAWebSendPinMessageAction").sendPinInChatMsg;
      window.Store.QueryExist = window.require("WAWebQueryExistsJob").queryWidExists;
      window.Store.ReplyUtils = window.require("WAWebMsgReply");
      window.Store.Settings = window.require("WAWebUserPrefsGeneral");
      window.Store.StickerTools = {
        ...window.require("WAWebImageUtils"),
        ...window.require("WAWebAddWebpMetadata")
      };
      window.Store.GroupUtils = {
        ...window.require("WAWebGroupCreateJob"),
        ...window.require("WAWebGroupModifyInfoJob"),
        ...window.require("WAWebExitGroupAction"),
        ...window.require("WAWebContactProfilePicThumbBridge")
      };
      window.Store.GroupParticipants = {
        ...window.require("WAWebModifyParticipantsGroupAction"),
        ...window.require("WASmaxGroupsAddParticipantsRPC")
      };
      window.Store.GroupInvite = {
        ...window.require("WAWebGroupInviteJob"),
        ...window.require("WAWebGroupQueryJob")
      };
      window.Store.GroupInviteV4 = {
        ...window.require("WAWebGroupInviteV4Job"),
        ...window.require("WAWebChatSendMessages")
      };
      window.Store.MembershipRequestUtils = {
        ...window.require("WAWebApiMembershipApprovalRequestStore"),
        ...window.require("WASmaxGroupsMembershipRequestsActionRPC")
      };
      if (!window.Store.Chat._find || !window.Store.Chat.findImpl) {
        window.Store.Chat._find = (e2) => {
          const target = window.Store.Chat.get(e2);
          return target ? Promise.resolve(target) : Promise.resolve({
            id: e2
          });
        };
        window.Store.Chat.findImpl = window.Store.Chat._find;
      }
      window.injectToFunction = (target, callback) => {
        const module = window.require(target.module);
        const originalFunction = module[target.function];
        const modifiedFunction = (...args) => callback(originalFunction, ...args);
        module[target.function] = modifiedFunction;
      };
      window.injectToFunction({
        module: "WAWebBackendJobsCommon",
        function: "mediaTypeFromProtobuf"
      }, (func, ...args) => {
        const [proto] = args;
        return proto.locationMessage ? null : func(...args);
      });
      window.injectToFunction({
        module: "WAWebE2EProtoUtils",
        function: "typeAttributeFromProtobuf"
      }, (func, ...args) => {
        const [proto] = args;
        return proto.locationMessage || proto.groupInviteMessage ? "text" : func(...args);
      });
    };
    ExposeStore();
    const LoadUtils = () => {
      window.WWebJS = {};
      window.WWebJS.sendSeen = async (chatId) => {
        let chat = window.Store.Chat.get(chatId);
        if (chat !== void 0) {
          await window.Store.SendSeen.sendSeen(chat, false);
          return true;
        }
        return false;
      };
      window.WWebJS.sendMessage = async (chat, content, options2 = {}) => {
        var _a;
        let attOptions = {};
        if (options2.attachment) {
          attOptions = options2.sendMediaAsSticker ? await window.WWebJS.processStickerData(options2.attachment) : await window.WWebJS.processMediaData(options2.attachment, {
            forceVoice: options2.sendAudioAsVoice,
            forceDocument: options2.sendMediaAsDocument,
            forceGif: options2.sendVideoAsGif
          });
          attOptions.caption = options2.caption;
          content = options2.sendMediaAsSticker ? void 0 : attOptions.preview;
          attOptions.isViewOnce = options2.isViewOnce;
          delete options2.attachment;
          delete options2.sendMediaAsSticker;
        }
        let quotedMsgOptions = {};
        if (options2.quotedMessageId) {
          let quotedMessage = window.Store.Msg.get(options2.quotedMessageId);
          const canReply = window.Store.ReplyUtils ? window.Store.ReplyUtils.canReplyMsg(quotedMessage.unsafe()) : quotedMessage.canReply();
          if (canReply) {
            quotedMsgOptions = quotedMessage.msgContextInfo(chat);
          }
          delete options2.quotedMessageId;
        }
        if (options2.mentionedJidList) {
          options2.mentionedJidList = await Promise.all(options2.mentionedJidList.map(async (id) => {
            const wid = window.Store.WidFactory.createWid(id);
            if (await window.Store.QueryExist(wid)) {
              return wid;
            }
          }));
          options2.mentionedJidList = options2.mentionedJidList.filter(Boolean);
        }
        if (options2.groupMentions) {
          options2.groupMentions = options2.groupMentions.map((e2) => ({
            groupSubject: e2.subject,
            groupJid: window.Store.WidFactory.createWid(e2.id)
          }));
        }
        let locationOptions = {};
        if (options2.location) {
          let {
            latitude,
            longitude,
            description,
            url
          } = options2.location;
          url = (_a = window.Store.Validators.findLink(url)) == null ? void 0 : _a.href;
          url && !description && (description = url);
          locationOptions = {
            type: "location",
            loc: description,
            lat: latitude,
            lng: longitude,
            clientUrl: url
          };
          delete options2.location;
        }
        let _pollOptions = {};
        if (options2.poll) {
          const {
            pollName,
            pollOptions
          } = options2.poll;
          const {
            allowMultipleAnswers,
            messageSecret
          } = options2.poll.options;
          _pollOptions = {
            type: "poll_creation",
            pollName,
            pollOptions,
            pollSelectableOptionsCount: allowMultipleAnswers ? 0 : 1,
            messageSecret: Array.isArray(messageSecret) && messageSecret.length === 32 ? new Uint8Array(messageSecret) : window.crypto.getRandomValues(new Uint8Array(32))
          };
          delete options2.poll;
        }
        let vcardOptions = {};
        if (options2.contactCard) {
          let contact = window.Store.Contact.get(options2.contactCard);
          vcardOptions = {
            body: window.Store.VCard.vcardFromContactModel(contact).vcard,
            type: "vcard",
            vcardFormattedName: contact.formattedName
          };
          delete options2.contactCard;
        } else if (options2.contactCardList) {
          let contacts = options2.contactCardList.map((c2) => window.Store.Contact.get(c2));
          let vcards = contacts.map((c2) => window.Store.VCard.vcardFromContactModel(c2));
          vcardOptions = {
            type: "multi_vcard",
            vcardList: vcards,
            body: void 0
          };
          delete options2.contactCardList;
        } else if (options2.parseVCards && typeof content === "string" && content.startsWith("BEGIN:VCARD")) {
          delete options2.parseVCards;
          try {
            const parsed = window.Store.VCard.parseVcard(content);
            if (parsed) {
              vcardOptions = {
                type: "vcard",
                vcardFormattedName: window.Store.VCard.vcardGetNameFromParsed(parsed)
              };
            }
          } catch (_2) {
          }
        }
        if (options2.linkPreview) {
          delete options2.linkPreview;
          const link = window.Store.Validators.findLink(content);
          if (link) {
            let preview = await window.Store.LinkPreview.getLinkPreview(link);
            if (preview && preview.data) {
              preview = preview.data;
              preview.preview = true;
              preview.subtype = "url";
              options2 = {
                ...options2,
                ...preview
              };
            }
          }
        }
        let buttonOptions = {};
        if (options2.buttons) {
          let caption;
          if (options2.buttons.type === "chat") {
            content = options2.buttons.body;
            caption = content;
          } else {
            caption = options2.caption ? options2.caption : " ";
          }
          buttonOptions = {
            productHeaderImageRejected: false,
            isFromTemplate: false,
            isDynamicReplyButtonsMsg: true,
            title: options2.buttons.title ? options2.buttons.title : void 0,
            footer: options2.buttons.footer ? options2.buttons.footer : void 0,
            dynamicReplyButtons: options2.buttons.buttons,
            replyButtons: options2.buttons.buttons,
            caption
          };
          delete options2.buttons;
        }
        let listOptions = {};
        if (options2.list) {
          if (window.Store.Conn.platform === "smba" || window.Store.Conn.platform === "smbi") {
            throw "[LT01] Whatsapp business can't send this yet";
          }
          listOptions = {
            type: "list",
            footer: options2.list.footer,
            list: {
              ...options2.list,
              listType: 1
            },
            body: options2.list.description
          };
          delete options2.list;
          delete listOptions.list.footer;
        }
        const meUser = window.Store.User.getMaybeMeUser();
        const newId = await window.Store.MsgKey.newId();
        const newMsgId = new window.Store.MsgKey({
          from: meUser,
          to: chat.id,
          id: newId,
          participant: chat.id.isGroup() ? meUser : void 0,
          selfDir: "out"
        });
        const extraOptions = options2.extraOptions || {};
        delete options2.extraOptions;
        const ephemeralFields = window.Store.EphemeralFields.getEphemeralFields(chat);
        const message = {
          ...options2,
          id: newMsgId,
          ack: 0,
          body: content,
          from: meUser,
          to: chat.id,
          local: true,
          self: "out",
          t: parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3),
          isNewMsg: true,
          type: "chat",
          ...ephemeralFields,
          ...locationOptions,
          ..._pollOptions,
          ...attOptions,
          ...attOptions.toJSON ? attOptions.toJSON() : {},
          ...quotedMsgOptions,
          ...vcardOptions,
          ...buttonOptions,
          ...listOptions,
          ...extraOptions
        };
        await window.Store.SendMessage.addAndSendMsgToChat(chat, message);
        return window.Store.Msg.get(newMsgId._serialized);
      };
      window.WWebJS.editMessage = async (msg, content, options2 = {}) => {
        const extraOptions = options2.extraOptions || {};
        delete options2.extraOptions;
        if (options2.mentionedJidList) {
          options2.mentionedJidList = await Promise.all(options2.mentionedJidList.map(async (id) => {
            const wid = window.Store.WidFactory.createWid(id);
            if (await window.Store.QueryExist(wid)) {
              return wid;
            }
          }));
          options2.mentionedJidList = options2.mentionedJidList.filter(Boolean);
        }
        if (options2.groupMentions) {
          options2.groupMentions = options2.groupMentions.map((e2) => ({
            groupSubject: e2.subject,
            groupJid: window.Store.WidFactory.createWid(e2.id)
          }));
        }
        if (options2.linkPreview) {
          delete options2.linkPreview;
          const link = window.Store.Validators.findLink(content);
          if (link) {
            const preview = await window.Store.LinkPreview.getLinkPreview(link);
            preview.preview = true;
            preview.subtype = "url";
            options2 = {
              ...options2,
              ...preview
            };
          }
        }
        const internalOptions = {
          ...options2,
          ...extraOptions
        };
        await window.Store.EditMessage.sendMessageEdit(msg, content, internalOptions);
        return window.Store.Msg.get(msg.id._serialized);
      };
      window.WWebJS.toStickerData = async (mediaInfo) => {
        if (mediaInfo.mimetype == "image/webp")
          return mediaInfo;
        const file = window.WWebJS.mediaInfoToFile(mediaInfo);
        const webpSticker = await window.Store.StickerTools.toWebpSticker(file);
        const webpBuffer = await webpSticker.arrayBuffer();
        const data = window.WWebJS.arrayBufferToBase64(webpBuffer);
        return {
          mimetype: "image/webp",
          data
        };
      };
      window.WWebJS.processStickerData = async (mediaInfo) => {
        if (mediaInfo.mimetype !== "image/webp")
          throw new Error("Invalid media type");
        const file = window.WWebJS.mediaInfoToFile(mediaInfo);
        let filehash = await window.WWebJS.getFileHash(file);
        let mediaKey = await window.WWebJS.generateHash(32);
        const controller = new AbortController();
        const uploadedInfo = await window.Store.UploadUtils.encryptAndUpload({
          blob: file,
          type: "sticker",
          signal: controller.signal,
          mediaKey
        });
        const stickerInfo = {
          ...uploadedInfo,
          clientUrl: uploadedInfo.url,
          deprecatedMms3Url: uploadedInfo.url,
          uploadhash: uploadedInfo.encFilehash,
          size: file.size,
          type: "sticker",
          filehash
        };
        return stickerInfo;
      };
      window.WWebJS.processMediaData = async (mediaInfo, {
        forceVoice,
        forceDocument,
        forceGif
      }) => {
        const file = window.WWebJS.mediaInfoToFile(mediaInfo);
        const mData = await window.Store.OpaqueData.createFromData(file, file.type);
        const mediaPrep = window.Store.MediaPrep.prepRawMedia(mData, {
          asDocument: forceDocument
        });
        const mediaData = await mediaPrep.waitForPrep();
        const mediaObject = window.Store.MediaObject.getOrCreateMediaObject(mediaData.filehash);
        const mediaType = window.Store.MediaTypes.msgToMediaType({
          type: mediaData.type,
          isGif: mediaData.isGif
        });
        if (forceVoice && mediaData.type === "audio") {
          mediaData.type = "ptt";
          const waveform = mediaObject.contentInfo.waveform;
          mediaData.waveform = waveform ?? await window.WWebJS.generateWaveform(file);
        }
        if (forceGif && mediaData.type === "video") {
          mediaData.isGif = true;
        }
        if (forceDocument) {
          mediaData.type = "document";
        }
        if (!(mediaData.mediaBlob instanceof window.Store.OpaqueData)) {
          mediaData.mediaBlob = await window.Store.OpaqueData.createFromData(mediaData.mediaBlob, mediaData.mediaBlob.type);
        }
        mediaData.renderableUrl = mediaData.mediaBlob.url();
        mediaObject.consolidate(mediaData.toJSON());
        mediaData.mediaBlob.autorelease();
        const uploadedMedia = await window.Store.MediaUpload.uploadMedia({
          mimetype: mediaData.mimetype,
          mediaObject,
          mediaType
        });
        const mediaEntry = uploadedMedia.mediaEntry;
        if (!mediaEntry) {
          throw new Error("upload failed: media entry was not created");
        }
        mediaData.set({
          clientUrl: mediaEntry.mmsUrl,
          deprecatedMms3Url: mediaEntry.deprecatedMms3Url,
          directPath: mediaEntry.directPath,
          mediaKey: mediaEntry.mediaKey,
          mediaKeyTimestamp: mediaEntry.mediaKeyTimestamp,
          filehash: mediaObject.filehash,
          encFilehash: mediaEntry.encFilehash,
          uploadhash: mediaEntry.uploadHash,
          size: mediaObject.size,
          streamingSidecar: mediaEntry.sidecar,
          firstFrameSidecar: mediaEntry.firstFrameSidecar
        });
        return mediaData;
      };
      window.WWebJS.getMessageModel = (message) => {
        const msg = message.serialize();
        msg.isEphemeral = message.isEphemeral;
        msg.isStatusV3 = message.isStatusV3;
        msg.links = window.Store.Validators.findLinks(message.mediaObject ? message.caption : message.body).map((link) => ({
          link: link.href,
          isSuspicious: Boolean(link.suspiciousCharacters && link.suspiciousCharacters.size)
        }));
        if (msg.buttons) {
          msg.buttons = msg.buttons.serialize();
        }
        if (msg.dynamicReplyButtons) {
          msg.dynamicReplyButtons = JSON.parse(JSON.stringify(msg.dynamicReplyButtons));
        }
        if (msg.replyButtons) {
          msg.replyButtons = JSON.parse(JSON.stringify(msg.replyButtons));
        }
        if (typeof msg.id.remote === "object") {
          msg.id = Object.assign({}, msg.id, {
            remote: msg.id.remote._serialized
          });
        }
        delete msg.pendingAckUpdate;
        return msg;
      };
      window.WWebJS.getChatModel = async (chat) => {
        let res = chat.serialize();
        res.isGroup = chat.isGroup;
        res.formattedTitle = chat.formattedTitle;
        res.isMuted = chat.mute && chat.mute.isMuted;
        if (chat.groupMetadata) {
          const chatWid = window.Store.WidFactory.createWid(chat.id._serialized);
          await window.Store.GroupMetadata.update(chatWid);
          res.groupMetadata = chat.groupMetadata.serialize();
        }
        res.lastMessage = null;
        if (res.msgs && res.msgs.length) {
          const lastMessage = chat.lastReceivedKey ? window.Store.Msg.get(chat.lastReceivedKey._serialized) : null;
          if (lastMessage) {
            res.lastMessage = window.WWebJS.getMessageModel(lastMessage);
          }
        }
        delete res.msgs;
        delete res.msgUnsyncedButtonReplyMsgs;
        delete res.unsyncedButtonReplies;
        return res;
      };
      window.WWebJS.getChat = async (chatId) => {
        const chatWid = window.Store.WidFactory.createWid(chatId);
        const chat = await window.Store.Chat.find(chatWid);
        return await window.WWebJS.getChatModel(chat);
      };
      window.WWebJS.getChats = async () => {
        const chats = window.Store.Chat.getModelsArray();
        const chatPromises = chats.map((chat) => window.WWebJS.getChatModel(chat));
        return await Promise.all(chatPromises);
      };
      window.WWebJS.getContactModel = (contact) => {
        let res = contact.serialize();
        res.isBusiness = contact.isBusiness === void 0 ? false : contact.isBusiness;
        if (contact.businessProfile) {
          res.businessProfile = contact.businessProfile.serialize();
        }
        const useOldImplementation = window.compareWwebVersions(window.Debug.VERSION, "<", "2.2327.4");
        res.isMe = useOldImplementation ? contact.isMe : window.Store.ContactMethods.getIsMe(contact);
        res.isUser = useOldImplementation ? contact.isUser : window.Store.ContactMethods.getIsUser(contact);
        res.isGroup = useOldImplementation ? contact.isGroup : window.Store.ContactMethods.getIsGroup(contact);
        res.isWAContact = useOldImplementation ? contact.isWAContact : window.Store.ContactMethods.getIsWAContact(contact);
        res.isMyContact = useOldImplementation ? contact.isMyContact : window.Store.ContactMethods.getIsMyContact(contact);
        res.isBlocked = contact.isContactBlocked;
        res.userid = useOldImplementation ? contact.userid : window.Store.ContactMethods.getUserid(contact);
        res.isEnterprise = useOldImplementation ? contact.isEnterprise : window.Store.ContactMethods.getIsEnterprise(contact);
        res.verifiedName = useOldImplementation ? contact.verifiedName : window.Store.ContactMethods.getVerifiedName(contact);
        res.verifiedLevel = useOldImplementation ? contact.verifiedLevel : window.Store.ContactMethods.getVerifiedLevel(contact);
        res.statusMute = useOldImplementation ? contact.statusMute : window.Store.ContactMethods.getStatusMute(contact);
        res.name = useOldImplementation ? contact.name : window.Store.ContactMethods.getName(contact);
        res.shortName = useOldImplementation ? contact.shortName : window.Store.ContactMethods.getShortName(contact);
        res.pushname = useOldImplementation ? contact.pushname : window.Store.ContactMethods.getPushname(contact);
        return res;
      };
      window.WWebJS.getContact = async (contactId) => {
        const wid = window.Store.WidFactory.createWid(contactId);
        const contact = await window.Store.Contact.find(wid);
        const bizProfile = await window.Store.BusinessProfile.fetchBizProfile(wid);
        bizProfile.profileOptions && (contact.businessProfile = bizProfile);
        return window.WWebJS.getContactModel(contact);
      };
      window.WWebJS.getContacts = () => {
        const contacts = window.Store.Contact.getModelsArray();
        return contacts.map((contact) => window.WWebJS.getContactModel(contact));
      };
      window.WWebJS.mediaInfoToFile = ({
        data,
        mimetype,
        filename
      }) => {
        const binaryData = window.atob(data);
        const buffer = new ArrayBuffer(binaryData.length);
        const view = new Uint8Array(buffer);
        for (let i2 = 0; i2 < binaryData.length; i2++) {
          view[i2] = binaryData.charCodeAt(i2);
        }
        const blob = new Blob([buffer], {
          type: mimetype
        });
        return new File([blob], filename, {
          type: mimetype,
          lastModified: Date.now()
        });
      };
      window.WWebJS.arrayBufferToBase64 = (arrayBuffer) => {
        let binary = "";
        const bytes = new Uint8Array(arrayBuffer);
        const len = bytes.byteLength;
        for (let i2 = 0; i2 < len; i2++) {
          binary += String.fromCharCode(bytes[i2]);
        }
        return window.btoa(binary);
      };
      window.WWebJS.arrayBufferToBase64Async = (arrayBuffer) => new Promise((resolve, reject) => {
        const blob = new Blob([arrayBuffer], {
          type: "application/octet-stream"
        });
        const fileReader = new FileReader();
        fileReader.onload = () => {
          const [, data] = fileReader.result.split(",");
          resolve(data);
        };
        fileReader.onerror = (e2) => reject(e2);
        fileReader.readAsDataURL(blob);
      });
      window.WWebJS.getFileHash = async (data) => {
        let buffer = await data.arrayBuffer();
        const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
        return btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
      };
      window.WWebJS.generateHash = async (length2) => {
        var result = "";
        var characters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters2.length;
        for (var i2 = 0; i2 < length2; i2++) {
          result += characters2.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      };
      window.WWebJS.generateWaveform = async (audioFile) => {
        try {
          const audioData = await audioFile.arrayBuffer();
          const audioContext = new AudioContext();
          const audioBuffer = await audioContext.decodeAudioData(audioData);
          const rawData = audioBuffer.getChannelData(0);
          const samples = 64;
          const blockSize = Math.floor(rawData.length / samples);
          const filteredData = [];
          for (let i2 = 0; i2 < samples; i2++) {
            const blockStart = blockSize * i2;
            let sum = 0;
            for (let j2 = 0; j2 < blockSize; j2++) {
              sum = sum + Math.abs(rawData[blockStart + j2]);
            }
            filteredData.push(sum / blockSize);
          }
          const multiplier = Math.pow(Math.max(...filteredData), -1);
          const normalizedData = filteredData.map((n2) => n2 * multiplier);
          const waveform = new Uint8Array(normalizedData.map((n2) => Math.floor(100 * n2)));
          return waveform;
        } catch (e2) {
          return void 0;
        }
      };
      window.WWebJS.sendClearChat = async (chatId) => {
        let chat = window.Store.Chat.get(chatId);
        if (chat !== void 0) {
          await window.Store.SendClear.sendClear(chat, false);
          return true;
        }
        return false;
      };
      window.WWebJS.sendDeleteChat = async (chatId) => {
        let chat = window.Store.Chat.get(chatId);
        if (chat !== void 0) {
          await window.Store.SendDelete.sendDelete(chat);
          return true;
        }
        return false;
      };
      window.WWebJS.sendChatstate = async (state, chatId) => {
        chatId = window.Store.WidFactory.createWid(chatId);
        switch (state) {
          case "typing":
            await window.Store.ChatState.sendChatStateComposing(chatId);
            break;
          case "recording":
            await window.Store.ChatState.sendChatStateRecording(chatId);
            break;
          case "stop":
            await window.Store.ChatState.sendChatStatePaused(chatId);
            break;
          default:
            throw "Invalid chatstate";
        }
        return true;
      };
      window.WWebJS.getLabelModel = (label) => {
        let res = label.serialize();
        res.hexColor = label.hexColor;
        return res;
      };
      window.WWebJS.getLabels = () => {
        const labels = window.Store.Label.getModelsArray();
        return labels.map((label) => window.WWebJS.getLabelModel(label));
      };
      window.WWebJS.getLabel = (labelId) => {
        const label = window.Store.Label.get(labelId);
        return window.WWebJS.getLabelModel(label);
      };
      window.WWebJS.getChatLabels = async (chatId) => {
        const chat = await window.WWebJS.getChat(chatId);
        return (chat.labels || []).map((id) => window.WWebJS.getLabel(id));
      };
      window.WWebJS.getOrderDetail = async (orderId, token2, chatId) => {
        const chatWid = window.Store.WidFactory.createWid(chatId);
        return window.Store.QueryOrder.queryOrder(chatWid, orderId, 80, 80, token2);
      };
      window.WWebJS.getProductMetadata = async (productId) => {
        let sellerId = window.Store.Conn.wid;
        let product = await window.Store.QueryProduct.queryProduct(sellerId, productId);
        if (product && product.data) {
          return product.data;
        }
        return void 0;
      };
      window.WWebJS.rejectCall = async (peerJid, id) => {
        peerJid = peerJid.split("@")[0] + "@s.whatsapp.net";
        let userId = window.Store.User.getMaybeMeUser().user + "@s.whatsapp.net";
        const stanza = window.Store.SocketWap.wap("call", {
          id: window.Store.SocketWap.generateId(),
          from: window.Store.SocketWap.USER_JID(userId),
          to: window.Store.SocketWap.USER_JID(peerJid)
        }, [window.Store.SocketWap.wap("reject", {
          "call-id": id,
          "call-creator": window.Store.SocketWap.USER_JID(peerJid),
          count: "0"
        })]);
        await window.Store.Socket.deprecatedCastStanza(stanza);
      };
      window.WWebJS.cropAndResizeImage = async (media, options2 = {}) => {
        if (!media.mimetype.includes("image"))
          throw new Error("Media is not an image");
        if (options2.mimetype && !options2.mimetype.includes("image"))
          delete options2.mimetype;
        options2 = Object.assign({
          size: 640,
          mimetype: media.mimetype,
          quality: 0.75,
          asDataUrl: false
        }, options2);
        const img = await new Promise((resolve, reject) => {
          const img2 = new Image();
          img2.onload = () => resolve(img2);
          img2.onerror = reject;
          img2.src = `data:${media.mimetype};base64,${media.data}`;
        });
        const sl = Math.min(img.width, img.height);
        const sx = Math.floor((img.width - sl) / 2);
        const sy = Math.floor((img.height - sl) / 2);
        const canvas = document.createElement("canvas");
        canvas.width = options2.size;
        canvas.height = options2.size;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, sx, sy, sl, sl, 0, 0, options2.size, options2.size);
        const dataUrl = canvas.toDataURL(options2.mimetype, options2.quality);
        if (options2.asDataUrl)
          return dataUrl;
        return Object.assign(media, {
          mimetype: options2.mimeType,
          data: dataUrl.replace(`data:${options2.mimeType};base64,`, "")
        });
      };
      window.WWebJS.setPicture = async (chatid, media) => {
        const thumbnail = await window.WWebJS.cropAndResizeImage(media, {
          asDataUrl: true,
          mimetype: "image/jpeg",
          size: 96
        });
        const profilePic = await window.WWebJS.cropAndResizeImage(media, {
          asDataUrl: true,
          mimetype: "image/jpeg",
          size: 640
        });
        const chatWid = window.Store.WidFactory.createWid(chatid);
        try {
          const collection = window.Store.ProfilePicThumb.get(chatid);
          if (!collection.canSet())
            return;
          const res = await window.Store.GroupUtils.sendSetPicture(chatWid, thumbnail, profilePic);
          return res ? res.status === 200 : false;
        } catch (err) {
          if (err.name === "ServerStatusCodeError")
            return false;
          throw err;
        }
      };
      window.WWebJS.deletePicture = async (chatid) => {
        const chatWid = window.Store.WidFactory.createWid(chatid);
        try {
          const collection = window.Store.ProfilePicThumb.get(chatid);
          if (!collection.canDelete())
            return;
          const res = await window.Store.GroupUtils.requestDeletePicture(chatWid);
          return res ? res.status === 200 : false;
        } catch (err) {
          if (err.name === "ServerStatusCodeError")
            return false;
          throw err;
        }
      };
      window.WWebJS.getProfilePicThumbToBase64 = async (chatWid) => {
        const profilePicCollection = await window.Store.ProfilePicThumb.find(chatWid);
        const _readImageAsBase64 = (imageBlob) => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = function() {
              const base64Image = reader.result;
              if (base64Image == null) {
                resolve(void 0);
              } else {
                const base64Data = base64Image.toString().split(",")[1];
                resolve(base64Data);
              }
            };
            reader.readAsDataURL(imageBlob);
          });
        };
        if (profilePicCollection == null ? void 0 : profilePicCollection.img) {
          try {
            const response = await fetch(profilePicCollection.img);
            if (response.ok) {
              const imageBlob = await response.blob();
              if (imageBlob) {
                const base64Image = await _readImageAsBase64(imageBlob);
                return base64Image;
              }
            }
          } catch (error) {
          }
        }
        return void 0;
      };
      window.WWebJS.getAddParticipantsRpcResult = async (groupMetadata, groupWid, participantWid) => {
        var _a;
        const participantLidArgs = (groupMetadata == null ? void 0 : groupMetadata.isLidAddressingMode) ? {
          phoneNumber: participantWid,
          lid: window.Store.LidUtils.getCurrentLid(participantWid)
        } : {
          phoneNumber: participantWid
        };
        const iqTo = window.Store.WidToJid.widToGroupJid(groupWid);
        const participantArgs = participantLidArgs.lid ? [{
          participantJid: window.Store.WidToJid.widToUserJid(participantLidArgs.lid),
          phoneNumberMixinArgs: {
            anyPhoneNumber: window.Store.WidToJid.widToUserJid(participantLidArgs.phoneNumber)
          }
        }] : [{
          participantJid: window.Store.WidToJid.widToUserJid(participantLidArgs.phoneNumber)
        }];
        let rpcResult, resultArgs;
        const isOldImpl = window.compareWwebVersions(window.Debug.VERSION, "<=", "2.2335.9");
        const data = {
          name: void 0,
          code: void 0,
          inviteV4Code: void 0,
          inviteV4CodeExp: void 0
        };
        try {
          rpcResult = await window.Store.GroupParticipants.sendAddParticipantsRPC({
            participantArgs,
            iqTo
          });
          resultArgs = isOldImpl ? rpcResult.value.addParticipant[0].addParticipantsParticipantMixins : rpcResult.value.addParticipant[0].addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup.value.addParticipantsParticipantMixins;
        } catch (err) {
          data.code = 400;
          return data;
        }
        if (rpcResult.name === "AddParticipantsResponseSuccess") {
          const code = (resultArgs == null ? void 0 : resultArgs.value.error) ?? "200";
          data.name = resultArgs == null ? void 0 : resultArgs.name;
          data.code = +code;
          data.inviteV4Code = resultArgs == null ? void 0 : resultArgs.value.addRequestCode;
          data.inviteV4CodeExp = (_a = resultArgs == null ? void 0 : resultArgs.value.addRequestExpiration) == null ? void 0 : _a.toString();
        } else if (rpcResult.name === "AddParticipantsResponseClientError") {
          const {
            code
          } = rpcResult.value.errorAddParticipantsClientErrors.value;
          data.code = +code;
        } else if (rpcResult.name === "AddParticipantsResponseServerError") {
          const {
            code
          } = rpcResult.value.errorServerErrors.value;
          data.code = +code;
        }
        return data;
      };
      window.WWebJS.membershipRequestAction = async (groupId, action, requesterIds, sleep) => {
        const groupWid = window.Store.WidFactory.createWid(groupId);
        const group = await window.Store.Chat.find(groupWid);
        const toApprove = action === "Approve";
        let membershipRequests;
        let response;
        let result = [];
        await window.Store.GroupQueryAndUpdate(groupWid);
        if (!(requesterIds == null ? void 0 : requesterIds.length)) {
          membershipRequests = group.groupMetadata.membershipApprovalRequests._models.map(({
            id
          }) => id);
        } else {
          !Array.isArray(requesterIds) && (requesterIds = [requesterIds]);
          membershipRequests = requesterIds.map((r2) => window.Store.WidFactory.createWid(r2));
        }
        if (!membershipRequests.length)
          return [];
        const participantArgs = membershipRequests.map((m2) => ({
          participantArgs: [{
            participantJid: window.Store.WidToJid.widToUserJid(m2)
          }]
        }));
        const groupJid = window.Store.WidToJid.widToGroupJid(groupWid);
        const _getSleepTime = (sleep2) => {
          if (!Array.isArray(sleep2) || sleep2.length === 2 && sleep2[0] === sleep2[1]) {
            return sleep2;
          }
          if (sleep2.length === 1) {
            return sleep2[0];
          }
          sleep2[1] - sleep2[0] < 100 && (sleep2[0] = sleep2[1]) && (sleep2[1] += 100);
          return Math.floor(Math.random() * (sleep2[1] - sleep2[0] + 1)) + sleep2[0];
        };
        const membReqResCodes = {
          default: `An unknown error occupied while ${toApprove ? "approving" : "rejecting"} the participant membership request`,
          400: "ParticipantNotFoundError",
          401: "ParticipantNotAuthorizedError",
          403: "ParticipantForbiddenError",
          404: "ParticipantRequestNotFoundError",
          408: "ParticipantTemporarilyBlockedError",
          409: "ParticipantConflictError",
          412: "ParticipantParentLinkedGroupsResourceConstraintError",
          500: "ParticipantResourceConstraintError"
        };
        try {
          for (const participant of participantArgs) {
            response = await window.Store.MembershipRequestUtils.sendMembershipRequestsActionRPC({
              iqTo: groupJid,
              [toApprove ? "approveArgs" : "rejectArgs"]: participant
            });
            if (response.name === "MembershipRequestsActionResponseSuccess") {
              const value = toApprove ? response.value.membershipRequestsActionApprove : response.value.membershipRequestsActionReject;
              if (value == null ? void 0 : value.participant) {
                const [_2] = value.participant.map((p2) => {
                  var _a, _b;
                  const error = toApprove ? (_a = value.participant[0].membershipRequestsActionAcceptParticipantMixins) == null ? void 0 : _a.value.error : (_b = value.participant[0].membershipRequestsActionRejectParticipantMixins) == null ? void 0 : _b.value.error;
                  return {
                    requesterId: window.Store.WidFactory.createWid(p2.jid)._serialized,
                    ...error ? {
                      error: +error,
                      message: membReqResCodes[error] || membReqResCodes.default
                    } : {
                      message: `${toApprove ? "Approved" : "Rejected"} successfully`
                    }
                  };
                });
                _2 && result.push(_2);
              }
            } else {
              result.push({
                requesterId: window.Store.JidToWid.userJidToUserWid(participant.participantArgs[0].participantJid)._serialized,
                message: "ServerStatusCodeError"
              });
            }
            sleep && participantArgs.length > 1 && participantArgs.indexOf(participant) !== participantArgs.length - 1 && await new Promise((resolve) => setTimeout(resolve, _getSleepTime(sleep)));
          }
          return result;
        } catch (err) {
          return [];
        }
      };
      window.WWebJS.pinUnpinMsgAction = async (msgId, action, duration) => {
        const message = window.Store.Msg.get(msgId);
        if (!message)
          return false;
        const response = await window.Store.pinUnpinMsg(message, action, duration);
        if (response.messageSendResult === "OK")
          return true;
        return false;
      };
    };
    LoadUtils();
    return {
      WAInterface: window.WWebJS,
      Store: window.Store
    };
  };
  const WaLoader = () => {
    const {
      value: appContext,
      setValue: setAppContext
    } = AppContext.useContext();
    p$1(() => {
      elementGetsVisible('span[data-icon="archived"]').then(async () => {
        const {
          Store,
          WAInterface
        } = await inject();
        if (!!Store && !!WAInterface) {
          setAppContext({
            client: new Client()
          });
        }
        console.log("WA++ EXTENSION READY");
      });
    }, []);
    return null;
  };
  const useFullScreenModalBehaviour = () => {
    const {
      value: context,
      setValue: setContext
    } = AppContext.useContext();
    const modal = useModal({});
    const closeModal = () => {
      modal.closeModal();
    };
    const isOpen = context.fullScreenModal.open;
    const actualCloseModal = (ev) => {
      ev.stopPropagation();
      closeModal();
    };
    return {
      isOpen,
      closeModal: actualCloseModal,
      Children: context.fullScreenModal.children,
      childrenProps: context.fullScreenModal.childrenProps
    };
  };
  const Container = ut.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.65);
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: auto;
	backdrop-filter: blur(2px);
`;
  ut.div`
	min-width: 1px;
	min-height: 1px;
`;
  const FullScreenModal = () => {
    const {
      isOpen,
      closeModal,
      Children,
      childrenProps
    } = useFullScreenModalBehaviour();
    if (!isOpen) {
      return null;
    }
    return u$1(Container, {
      onClick: closeModal,
      children: u$1(Children, {
        ...childrenProps
      })
    });
  };
  function App() {
    return u$1(AppContext.Provider, {
      children: u$1(AppContent, {})
    });
  }
  const AppContent = () => {
    var _a;
    const appContext = AppContext.useContext().value;
    return u$1(tt, {
      theme: {
        variant: ((_a = appContext.theme) == null ? void 0 : _a.variant) || "light"
      },
      children: u$1("div", {
        style: {
          width: "100%",
          height: "100%"
        },
        children: [u$1(WaLoader, {}), u$1(AllModules, {}), u$1(AlertComponent, {}), u$1(FullScreenModal, {})]
      })
    });
  };
  console.log("WA++ is installed properly!");
  preact.render(u$1(App, {}), (() => {
    const app = document.createElement("div");
    app.setAttribute("id", "WA++");
    app.setAttribute("style", `position: absolute;
			z-index: 999;
			width: 100vw;
			height: 100vh;
			pointer-events: none;`);
    document.body.append(app);
    return app;
  })());

})(preact);