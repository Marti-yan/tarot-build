function Sp(a, e) {
  for (var s = 0; s < e.length; s++) {
    const r = e[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in a)) {
          const n = Object.getOwnPropertyDescriptor(r, i);
          n &&
            Object.defineProperty(
              a,
              i,
              n.get ? n : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(a, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const n of i)
      if (n.type === "childList")
        for (const o of n.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(i) {
    const n = {};
    return (
      i.integrity && (n.integrity = i.integrity),
      i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const n = s(i);
    fetch(i.href, n);
  }
})();
function jp(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var Ld = { exports: {} },
  ei = {},
  kd = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qr = Symbol.for("react.element"),
  Ep = Symbol.for("react.portal"),
  wp = Symbol.for("react.fragment"),
  bp = Symbol.for("react.strict_mode"),
  yp = Symbol.for("react.profiler"),
  Ap = Symbol.for("react.provider"),
  Tp = Symbol.for("react.context"),
  Op = Symbol.for("react.forward_ref"),
  Cp = Symbol.for("react.suspense"),
  Pp = Symbol.for("react.memo"),
  Mp = Symbol.for("react.lazy"),
  dl = Symbol.iterator;
function Ip(a) {
  return a === null || typeof a != "object"
    ? null
    : ((a = (dl && a[dl]) || a["@@iterator"]),
      typeof a == "function" ? a : null);
}
var _d = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ud = Object.assign,
  Vd = {};
function Ls(a, e, s) {
  (this.props = a),
    (this.context = e),
    (this.refs = Vd),
    (this.updater = s || _d);
}
Ls.prototype.isReactComponent = {};
Ls.prototype.setState = function (a, e) {
  if (typeof a != "object" && typeof a != "function" && a != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, a, e, "setState");
};
Ls.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function $d() {}
$d.prototype = Ls.prototype;
function so(a, e, s) {
  (this.props = a),
    (this.context = e),
    (this.refs = Vd),
    (this.updater = s || _d);
}
var ro = (so.prototype = new $d());
ro.constructor = so;
Ud(ro, Ls.prototype);
ro.isPureReactComponent = !0;
var ul = Array.isArray,
  Bd = Object.prototype.hasOwnProperty,
  to = { current: null },
  Fd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gd(a, e, s) {
  var r,
    i = {},
    n = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (n = "" + e.key),
    e))
      Bd.call(e, r) && !Fd.hasOwnProperty(r) && (i[r] = e[r]);
  var d = arguments.length - 2;
  if (d === 1) i.children = s;
  else if (1 < d) {
    for (var l = Array(d), p = 0; p < d; p++) l[p] = arguments[p + 2];
    i.children = l;
  }
  if (a && a.defaultProps)
    for (r in ((d = a.defaultProps), d)) i[r] === void 0 && (i[r] = d[r]);
  return {
    $$typeof: qr,
    type: a,
    key: n,
    ref: o,
    props: i,
    _owner: to.current,
  };
}
function zp(a, e) {
  return {
    $$typeof: qr,
    type: a.type,
    key: e,
    ref: a.ref,
    props: a.props,
    _owner: a._owner,
  };
}
function io(a) {
  return typeof a == "object" && a !== null && a.$$typeof === qr;
}
function Rp(a) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    a.replace(/[=:]/g, function (s) {
      return e[s];
    })
  );
}
var cl = /\/+/g;
function bi(a, e) {
  return typeof a == "object" && a !== null && a.key != null
    ? Rp("" + a.key)
    : e.toString(36);
}
function ut(a, e, s, r, i) {
  var n = typeof a;
  (n === "undefined" || n === "boolean") && (a = null);
  var o = !1;
  if (a === null) o = !0;
  else
    switch (n) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (a.$$typeof) {
          case qr:
          case Ep:
            o = !0;
        }
    }
  if (o)
    return (
      (o = a),
      (i = i(o)),
      (a = r === "" ? "." + bi(o, 0) : r),
      ul(i)
        ? ((s = ""),
          a != null && (s = a.replace(cl, "$&/") + "/"),
          ut(i, e, s, "", function (p) {
            return p;
          }))
        : i != null &&
          (io(i) &&
            (i = zp(
              i,
              s +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(cl, "$&/") + "/") +
                a
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ul(a)))
    for (var d = 0; d < a.length; d++) {
      n = a[d];
      var l = r + bi(n, d);
      o += ut(n, e, s, l, i);
    }
  else if (((l = Ip(a)), typeof l == "function"))
    for (a = l.call(a), d = 0; !(n = a.next()).done; )
      (n = n.value), (l = r + bi(n, d++)), (o += ut(n, e, s, l, i));
  else if (n === "object")
    throw (
      ((e = String(a)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(a).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Hr(a, e, s) {
  if (a == null) return a;
  var r = [],
    i = 0;
  return (
    ut(a, r, "", "", function (n) {
      return e.call(s, n, i++);
    }),
    r
  );
}
function Np(a) {
  if (a._status === -1) {
    var e = a._result;
    (e = e()),
      e.then(
        function (s) {
          (a._status === 0 || a._status === -1) &&
            ((a._status = 1), (a._result = s));
        },
        function (s) {
          (a._status === 0 || a._status === -1) &&
            ((a._status = 2), (a._result = s));
        }
      ),
      a._status === -1 && ((a._status = 0), (a._result = e));
  }
  if (a._status === 1) return a._result.default;
  throw a._result;
}
var ye = { current: null },
  ct = { transition: null },
  Dp = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: ct,
    ReactCurrentOwner: to,
  };
B.Children = {
  map: Hr,
  forEach: function (a, e, s) {
    Hr(
      a,
      function () {
        e.apply(this, arguments);
      },
      s
    );
  },
  count: function (a) {
    var e = 0;
    return (
      Hr(a, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (a) {
    return (
      Hr(a, function (e) {
        return e;
      }) || []
    );
  },
  only: function (a) {
    if (!io(a))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return a;
  },
};
B.Component = Ls;
B.Fragment = wp;
B.Profiler = yp;
B.PureComponent = so;
B.StrictMode = bp;
B.Suspense = Cp;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dp;
B.cloneElement = function (a, e, s) {
  if (a == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        a +
        "."
    );
  var r = Ud({}, a.props),
    i = a.key,
    n = a.ref,
    o = a._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((n = e.ref), (o = to.current)),
      e.key !== void 0 && (i = "" + e.key),
      a.type && a.type.defaultProps)
    )
      var d = a.type.defaultProps;
    for (l in e)
      Bd.call(e, l) &&
        !Fd.hasOwnProperty(l) &&
        (r[l] = e[l] === void 0 && d !== void 0 ? d[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = s;
  else if (1 < l) {
    d = Array(l);
    for (var p = 0; p < l; p++) d[p] = arguments[p + 2];
    r.children = d;
  }
  return { $$typeof: qr, type: a.type, key: i, ref: n, props: r, _owner: o };
};
B.createContext = function (a) {
  return (
    (a = {
      $$typeof: Tp,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (a.Provider = { $$typeof: Ap, _context: a }),
    (a.Consumer = a)
  );
};
B.createElement = Gd;
B.createFactory = function (a) {
  var e = Gd.bind(null, a);
  return (e.type = a), e;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (a) {
  return { $$typeof: Op, render: a };
};
B.isValidElement = io;
B.lazy = function (a) {
  return { $$typeof: Mp, _payload: { _status: -1, _result: a }, _init: Np };
};
B.memo = function (a, e) {
  return { $$typeof: Pp, type: a, compare: e === void 0 ? null : e };
};
B.startTransition = function (a) {
  var e = ct.transition;
  ct.transition = {};
  try {
    a();
  } finally {
    ct.transition = e;
  }
};
B.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (a, e) {
  return ye.current.useCallback(a, e);
};
B.useContext = function (a) {
  return ye.current.useContext(a);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (a) {
  return ye.current.useDeferredValue(a);
};
B.useEffect = function (a, e) {
  return ye.current.useEffect(a, e);
};
B.useId = function () {
  return ye.current.useId();
};
B.useImperativeHandle = function (a, e, s) {
  return ye.current.useImperativeHandle(a, e, s);
};
B.useInsertionEffect = function (a, e) {
  return ye.current.useInsertionEffect(a, e);
};
B.useLayoutEffect = function (a, e) {
  return ye.current.useLayoutEffect(a, e);
};
B.useMemo = function (a, e) {
  return ye.current.useMemo(a, e);
};
B.useReducer = function (a, e, s) {
  return ye.current.useReducer(a, e, s);
};
B.useRef = function (a) {
  return ye.current.useRef(a);
};
B.useState = function (a) {
  return ye.current.useState(a);
};
B.useSyncExternalStore = function (a, e, s) {
  return ye.current.useSyncExternalStore(a, e, s);
};
B.useTransition = function () {
  return ye.current.useTransition();
};
B.version = "18.2.0";
kd.exports = B;
var _ = kd.exports;
const re = jp(_),
  qp = Sp({ __proto__: null, default: re }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lp = _,
  kp = Symbol.for("react.element"),
  _p = Symbol.for("react.fragment"),
  Up = Object.prototype.hasOwnProperty,
  Vp = Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $p = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hd(a, e, s) {
  var r,
    i = {},
    n = null,
    o = null;
  s !== void 0 && (n = "" + s),
    e.key !== void 0 && (n = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) Up.call(e, r) && !$p.hasOwnProperty(r) && (i[r] = e[r]);
  if (a && a.defaultProps)
    for (r in ((e = a.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: kp,
    type: a,
    key: n,
    ref: o,
    props: i,
    _owner: Vp.current,
  };
}
ei.Fragment = _p;
ei.jsx = Hd;
ei.jsxs = Hd;
Ld.exports = ei;
var t = Ld.exports,
  sn = {},
  Wd = { exports: {} },
  ke = {},
  Qd = { exports: {} },
  Xd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (a) {
  function e(A, P) {
    var L = A.length;
    A.push(P);
    e: for (; 0 < L; ) {
      var $ = (L - 1) >>> 1,
        F = A[$];
      if (0 < i(F, P)) (A[$] = P), (A[L] = F), (L = $);
      else break e;
    }
  }
  function s(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var P = A[0],
      L = A.pop();
    if (L !== P) {
      A[0] = L;
      e: for (var $ = 0, F = A.length, V = F >>> 1; $ < V; ) {
        var G = 2 * ($ + 1) - 1,
          ge = A[G],
          ce = G + 1,
          Ue = A[ce];
        if (0 > i(ge, L))
          ce < F && 0 > i(Ue, ge)
            ? ((A[$] = Ue), (A[ce] = L), ($ = ce))
            : ((A[$] = ge), (A[G] = L), ($ = G));
        else if (ce < F && 0 > i(Ue, L)) (A[$] = Ue), (A[ce] = L), ($ = ce);
        else break e;
      }
    }
    return P;
  }
  function i(A, P) {
    var L = A.sortIndex - P.sortIndex;
    return L !== 0 ? L : A.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var n = performance;
    a.unstable_now = function () {
      return n.now();
    };
  } else {
    var o = Date,
      d = o.now();
    a.unstable_now = function () {
      return o.now() - d;
    };
  }
  var l = [],
    p = [],
    c = 1,
    u = null,
    m = 3,
    v = !1,
    S = !1,
    x = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(A) {
    for (var P = s(p); P !== null; ) {
      if (P.callback === null) r(p);
      else if (P.startTime <= A)
        r(p), (P.sortIndex = P.expirationTime), e(l, P);
      else break;
      P = s(p);
    }
  }
  function E(A) {
    if (((x = !1), h(A), !S))
      if (s(l) !== null) (S = !0), q(b);
      else {
        var P = s(p);
        P !== null && D(E, P.startTime - A);
      }
  }
  function b(A, P) {
    (S = !1), x && ((x = !1), g(C), (C = -1)), (v = !0);
    var L = m;
    try {
      for (
        h(P), u = s(l);
        u !== null && (!(u.expirationTime > P) || (A && !N()));

      ) {
        var $ = u.callback;
        if (typeof $ == "function") {
          (u.callback = null), (m = u.priorityLevel);
          var F = $(u.expirationTime <= P);
          (P = a.unstable_now()),
            typeof F == "function" ? (u.callback = F) : u === s(l) && r(l),
            h(P);
        } else r(l);
        u = s(l);
      }
      if (u !== null) var V = !0;
      else {
        var G = s(p);
        G !== null && D(E, G.startTime - P), (V = !1);
      }
      return V;
    } finally {
      (u = null), (m = L), (v = !1);
    }
  }
  var y = !1,
    z = null,
    C = -1,
    T = 5,
    O = -1;
  function N() {
    return !(a.unstable_now() - O < T);
  }
  function R() {
    if (z !== null) {
      var A = a.unstable_now();
      O = A;
      var P = !0;
      try {
        P = z(!0, A);
      } finally {
        P ? I() : ((y = !1), (z = null));
      }
    } else y = !1;
  }
  var I;
  if (typeof f == "function")
    I = function () {
      f(R);
    };
  else if (typeof MessageChannel < "u") {
    var w = new MessageChannel(),
      M = w.port2;
    (w.port1.onmessage = R),
      (I = function () {
        M.postMessage(null);
      });
  } else
    I = function () {
      j(R, 0);
    };
  function q(A) {
    (z = A), y || ((y = !0), I());
  }
  function D(A, P) {
    C = j(function () {
      A(a.unstable_now());
    }, P);
  }
  (a.unstable_IdlePriority = 5),
    (a.unstable_ImmediatePriority = 1),
    (a.unstable_LowPriority = 4),
    (a.unstable_NormalPriority = 3),
    (a.unstable_Profiling = null),
    (a.unstable_UserBlockingPriority = 2),
    (a.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (a.unstable_continueExecution = function () {
      S || v || ((S = !0), q(b));
    }),
    (a.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (a.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (a.unstable_getFirstCallbackNode = function () {
      return s(l);
    }),
    (a.unstable_next = function (A) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var L = m;
      m = P;
      try {
        return A();
      } finally {
        m = L;
      }
    }),
    (a.unstable_pauseExecution = function () {}),
    (a.unstable_requestPaint = function () {}),
    (a.unstable_runWithPriority = function (A, P) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = m;
      m = A;
      try {
        return P();
      } finally {
        m = L;
      }
    }),
    (a.unstable_scheduleCallback = function (A, P, L) {
      var $ = a.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? $ + L : $))
          : (L = $),
        A)
      ) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return (
        (F = L + F),
        (A = {
          id: c++,
          callback: P,
          priorityLevel: A,
          startTime: L,
          expirationTime: F,
          sortIndex: -1,
        }),
        L > $
          ? ((A.sortIndex = L),
            e(p, A),
            s(l) === null &&
              A === s(p) &&
              (x ? (g(C), (C = -1)) : (x = !0), D(E, L - $)))
          : ((A.sortIndex = F), e(l, A), S || v || ((S = !0), q(b))),
        A
      );
    }),
    (a.unstable_shouldYield = N),
    (a.unstable_wrapCallback = function (A) {
      var P = m;
      return function () {
        var L = m;
        m = P;
        try {
          return A.apply(this, arguments);
        } finally {
          m = L;
        }
      };
    });
})(Xd);
Qd.exports = Xd;
var Bp = Qd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yd = _,
  Le = Bp;
function k(a) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, s = 1;
    s < arguments.length;
    s++
  )
    e += "&args[]=" + encodeURIComponent(arguments[s]);
  return (
    "Minified React error #" +
    a +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zd = new Set(),
  gr = {};
function is(a, e) {
  Ps(a, e), Ps(a + "Capture", e);
}
function Ps(a, e) {
  for (gr[a] = e, a = 0; a < e.length; a++) Zd.add(e[a]);
}
var ma = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  rn = Object.prototype.hasOwnProperty,
  Fp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pl = {},
  ml = {};
function Gp(a) {
  return rn.call(ml, a)
    ? !0
    : rn.call(pl, a)
    ? !1
    : Fp.test(a)
    ? (ml[a] = !0)
    : ((pl[a] = !0), !1);
}
function Hp(a, e, s, r) {
  if (s !== null && s.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : s !== null
        ? !s.acceptsBooleans
        : ((a = a.toLowerCase().slice(0, 5)), a !== "data-" && a !== "aria-");
    default:
      return !1;
  }
}
function Wp(a, e, s, r) {
  if (e === null || typeof e > "u" || Hp(a, e, s, r)) return !0;
  if (r) return !1;
  if (s !== null)
    switch (s.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Ae(a, e, s, r, i, n, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = s),
    (this.propertyName = a),
    (this.type = e),
    (this.sanitizeURL = n),
    (this.removeEmptyString = o);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (a) {
    he[a] = new Ae(a, 0, !1, a, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (a) {
  var e = a[0];
  he[e] = new Ae(e, 1, !1, a[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  he[a] = new Ae(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (a) {
  he[a] = new Ae(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (a) {
    he[a] = new Ae(a, 3, !1, a.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  he[a] = new Ae(a, 3, !0, a, null, !1, !1);
});
["capture", "download"].forEach(function (a) {
  he[a] = new Ae(a, 4, !1, a, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  he[a] = new Ae(a, 6, !1, a, null, !1, !1);
});
["rowSpan", "start"].forEach(function (a) {
  he[a] = new Ae(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
var no = /[\-:]([a-z])/g;
function oo(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (a) {
    var e = a.replace(no, oo);
    he[e] = new Ae(e, 1, !1, a, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (a) {
    var e = a.replace(no, oo);
    he[e] = new Ae(e, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  var e = a.replace(no, oo);
  he[e] = new Ae(e, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  he[a] = new Ae(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (a) {
  he[a] = new Ae(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
function lo(a, e, s, r) {
  var i = he.hasOwnProperty(e) ? he[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Wp(e, s, i, r) && (s = null),
    r || i === null
      ? Gp(e) && (s === null ? a.removeAttribute(e) : a.setAttribute(e, "" + s))
      : i.mustUseProperty
      ? (a[i.propertyName] = s === null ? (i.type === 3 ? !1 : "") : s)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        s === null
          ? a.removeAttribute(e)
          : ((i = i.type),
            (s = i === 3 || (i === 4 && s === !0) ? "" : "" + s),
            r ? a.setAttributeNS(r, e, s) : a.setAttribute(e, s))));
}
var xa = Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Wr = Symbol.for("react.element"),
  cs = Symbol.for("react.portal"),
  ps = Symbol.for("react.fragment"),
  uo = Symbol.for("react.strict_mode"),
  tn = Symbol.for("react.profiler"),
  Kd = Symbol.for("react.provider"),
  Jd = Symbol.for("react.context"),
  co = Symbol.for("react.forward_ref"),
  nn = Symbol.for("react.suspense"),
  on = Symbol.for("react.suspense_list"),
  po = Symbol.for("react.memo"),
  Ea = Symbol.for("react.lazy"),
  eu = Symbol.for("react.offscreen"),
  fl = Symbol.iterator;
function Gs(a) {
  return a === null || typeof a != "object"
    ? null
    : ((a = (fl && a[fl]) || a["@@iterator"]),
      typeof a == "function" ? a : null);
}
var ee = Object.assign,
  yi;
function Js(a) {
  if (yi === void 0)
    try {
      throw Error();
    } catch (s) {
      var e = s.stack.trim().match(/\n( *(at )?)/);
      yi = (e && e[1]) || "";
    }
  return (
    `
` +
    yi +
    a
  );
}
var Ai = !1;
function Ti(a, e) {
  if (!a || Ai) return "";
  Ai = !0;
  var s = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(a, [], e);
      } else {
        try {
          e.call();
        } catch (p) {
          r = p;
        }
        a.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      a();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var i = p.stack.split(`
`),
          n = r.stack.split(`
`),
          o = i.length - 1,
          d = n.length - 1;
        1 <= o && 0 <= d && i[o] !== n[d];

      )
        d--;
      for (; 1 <= o && 0 <= d; o--, d--)
        if (i[o] !== n[d]) {
          if (o !== 1 || d !== 1)
            do
              if ((o--, d--, 0 > d || i[o] !== n[d])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  a.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", a.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= d);
          break;
        }
    }
  } finally {
    (Ai = !1), (Error.prepareStackTrace = s);
  }
  return (a = a ? a.displayName || a.name : "") ? Js(a) : "";
}
function Qp(a) {
  switch (a.tag) {
    case 5:
      return Js(a.type);
    case 16:
      return Js("Lazy");
    case 13:
      return Js("Suspense");
    case 19:
      return Js("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (a = Ti(a.type, !1)), a;
    case 11:
      return (a = Ti(a.type.render, !1)), a;
    case 1:
      return (a = Ti(a.type, !0)), a;
    default:
      return "";
  }
}
function ln(a) {
  if (a == null) return null;
  if (typeof a == "function") return a.displayName || a.name || null;
  if (typeof a == "string") return a;
  switch (a) {
    case ps:
      return "Fragment";
    case cs:
      return "Portal";
    case tn:
      return "Profiler";
    case uo:
      return "StrictMode";
    case nn:
      return "Suspense";
    case on:
      return "SuspenseList";
  }
  if (typeof a == "object")
    switch (a.$$typeof) {
      case Jd:
        return (a.displayName || "Context") + ".Consumer";
      case Kd:
        return (a._context.displayName || "Context") + ".Provider";
      case co:
        var e = a.render;
        return (
          (a = a.displayName),
          a ||
            ((a = e.displayName || e.name || ""),
            (a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef")),
          a
        );
      case po:
        return (
          (e = a.displayName || null), e !== null ? e : ln(a.type) || "Memo"
        );
      case Ea:
        (e = a._payload), (a = a._init);
        try {
          return ln(a(e));
        } catch {}
    }
  return null;
}
function Xp(a) {
  var e = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (a = e.render),
        (a = a.displayName || a.name || ""),
        e.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ln(e);
    case 8:
      return e === uo ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function _a(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function au(a) {
  var e = a.type;
  return (
    (a = a.nodeName) &&
    a.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Yp(a) {
  var e = au(a) ? "checked" : "value",
    s = Object.getOwnPropertyDescriptor(a.constructor.prototype, e),
    r = "" + a[e];
  if (
    !a.hasOwnProperty(e) &&
    typeof s < "u" &&
    typeof s.get == "function" &&
    typeof s.set == "function"
  ) {
    var i = s.get,
      n = s.set;
    return (
      Object.defineProperty(a, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), n.call(this, o);
        },
      }),
      Object.defineProperty(a, e, { enumerable: s.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (a._valueTracker = null), delete a[e];
        },
      }
    );
  }
}
function Qr(a) {
  a._valueTracker || (a._valueTracker = Yp(a));
}
function su(a) {
  if (!a) return !1;
  var e = a._valueTracker;
  if (!e) return !0;
  var s = e.getValue(),
    r = "";
  return (
    a && (r = au(a) ? (a.checked ? "true" : "false") : a.value),
    (a = r),
    a !== s ? (e.setValue(a), !0) : !1
  );
}
function yt(a) {
  if (((a = a || (typeof document < "u" ? document : void 0)), typeof a > "u"))
    return null;
  try {
    return a.activeElement || a.body;
  } catch {
    return a.body;
  }
}
function dn(a, e) {
  var s = e.checked;
  return ee({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: s ?? a._wrapperState.initialChecked,
  });
}
function hl(a, e) {
  var s = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (s = _a(e.value != null ? e.value : s)),
    (a._wrapperState = {
      initialChecked: r,
      initialValue: s,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function ru(a, e) {
  (e = e.checked), e != null && lo(a, "checked", e, !1);
}
function un(a, e) {
  ru(a, e);
  var s = _a(e.value),
    r = e.type;
  if (s != null)
    r === "number"
      ? ((s === 0 && a.value === "") || a.value != s) && (a.value = "" + s)
      : a.value !== "" + s && (a.value = "" + s);
  else if (r === "submit" || r === "reset") {
    a.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? cn(a, e.type, s)
    : e.hasOwnProperty("defaultValue") && cn(a, e.type, _a(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (a.defaultChecked = !!e.defaultChecked);
}
function gl(a, e, s) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + a._wrapperState.initialValue),
      s || e === a.value || (a.value = e),
      (a.defaultValue = e);
  }
  (s = a.name),
    s !== "" && (a.name = ""),
    (a.defaultChecked = !!a._wrapperState.initialChecked),
    s !== "" && (a.name = s);
}
function cn(a, e, s) {
  (e !== "number" || yt(a.ownerDocument) !== a) &&
    (s == null
      ? (a.defaultValue = "" + a._wrapperState.initialValue)
      : a.defaultValue !== "" + s && (a.defaultValue = "" + s));
}
var er = Array.isArray;
function bs(a, e, s, r) {
  if (((a = a.options), e)) {
    e = {};
    for (var i = 0; i < s.length; i++) e["$" + s[i]] = !0;
    for (s = 0; s < a.length; s++)
      (i = e.hasOwnProperty("$" + a[s].value)),
        a[s].selected !== i && (a[s].selected = i),
        i && r && (a[s].defaultSelected = !0);
  } else {
    for (s = "" + _a(s), e = null, i = 0; i < a.length; i++) {
      if (a[i].value === s) {
        (a[i].selected = !0), r && (a[i].defaultSelected = !0);
        return;
      }
      e !== null || a[i].disabled || (e = a[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function pn(a, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ee({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue,
  });
}
function vl(a, e) {
  var s = e.value;
  if (s == null) {
    if (((s = e.children), (e = e.defaultValue), s != null)) {
      if (e != null) throw Error(k(92));
      if (er(s)) {
        if (1 < s.length) throw Error(k(93));
        s = s[0];
      }
      e = s;
    }
    e == null && (e = ""), (s = e);
  }
  a._wrapperState = { initialValue: _a(s) };
}
function tu(a, e) {
  var s = _a(e.value),
    r = _a(e.defaultValue);
  s != null &&
    ((s = "" + s),
    s !== a.value && (a.value = s),
    e.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s)),
    r != null && (a.defaultValue = "" + r);
}
function xl(a) {
  var e = a.textContent;
  e === a._wrapperState.initialValue && e !== "" && e !== null && (a.value = e);
}
function iu(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mn(a, e) {
  return a == null || a === "http://www.w3.org/1999/xhtml"
    ? iu(e)
    : a === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : a;
}
var Xr,
  nu = (function (a) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, s, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return a(e, s, r, i);
          });
        }
      : a;
  })(function (a, e) {
    if (a.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a)
      a.innerHTML = e;
    else {
      for (
        Xr = Xr || document.createElement("div"),
          Xr.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Xr.firstChild;
        a.firstChild;

      )
        a.removeChild(a.firstChild);
      for (; e.firstChild; ) a.appendChild(e.firstChild);
    }
  });
function vr(a, e) {
  if (e) {
    var s = a.firstChild;
    if (s && s === a.lastChild && s.nodeType === 3) {
      s.nodeValue = e;
      return;
    }
  }
  a.textContent = e;
}
var ir = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zp = ["Webkit", "ms", "Moz", "O"];
Object.keys(ir).forEach(function (a) {
  Zp.forEach(function (e) {
    (e = e + a.charAt(0).toUpperCase() + a.substring(1)), (ir[e] = ir[a]);
  });
});
function ou(a, e, s) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : s || typeof e != "number" || e === 0 || (ir.hasOwnProperty(a) && ir[a])
    ? ("" + e).trim()
    : e + "px";
}
function lu(a, e) {
  a = a.style;
  for (var s in e)
    if (e.hasOwnProperty(s)) {
      var r = s.indexOf("--") === 0,
        i = ou(s, e[s], r);
      s === "float" && (s = "cssFloat"), r ? a.setProperty(s, i) : (a[s] = i);
    }
}
var Kp = ee(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function fn(a, e) {
  if (e) {
    if (Kp[a] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(k(137, a));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(k(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(k(62));
  }
}
function hn(a, e) {
  if (a.indexOf("-") === -1) return typeof e.is == "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gn = null;
function mo(a) {
  return (
    (a = a.target || a.srcElement || window),
    a.correspondingUseElement && (a = a.correspondingUseElement),
    a.nodeType === 3 ? a.parentNode : a
  );
}
var vn = null,
  ys = null,
  As = null;
function Sl(a) {
  if ((a = _r(a))) {
    if (typeof vn != "function") throw Error(k(280));
    var e = a.stateNode;
    e && ((e = ii(e)), vn(a.stateNode, a.type, e));
  }
}
function du(a) {
  ys ? (As ? As.push(a) : (As = [a])) : (ys = a);
}
function uu() {
  if (ys) {
    var a = ys,
      e = As;
    if (((As = ys = null), Sl(a), e)) for (a = 0; a < e.length; a++) Sl(e[a]);
  }
}
function cu(a, e) {
  return a(e);
}
function pu() {}
var Oi = !1;
function mu(a, e, s) {
  if (Oi) return a(e, s);
  Oi = !0;
  try {
    return cu(a, e, s);
  } finally {
    (Oi = !1), (ys !== null || As !== null) && (pu(), uu());
  }
}
function xr(a, e) {
  var s = a.stateNode;
  if (s === null) return null;
  var r = ii(s);
  if (r === null) return null;
  s = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((a = a.type),
        (r = !(
          a === "button" ||
          a === "input" ||
          a === "select" ||
          a === "textarea"
        ))),
        (a = !r);
      break e;
    default:
      a = !1;
  }
  if (a) return null;
  if (s && typeof s != "function") throw Error(k(231, e, typeof s));
  return s;
}
var xn = !1;
if (ma)
  try {
    var Hs = {};
    Object.defineProperty(Hs, "passive", {
      get: function () {
        xn = !0;
      },
    }),
      window.addEventListener("test", Hs, Hs),
      window.removeEventListener("test", Hs, Hs);
  } catch {
    xn = !1;
  }
function Jp(a, e, s, r, i, n, o, d, l) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(s, p);
  } catch (c) {
    this.onError(c);
  }
}
var nr = !1,
  At = null,
  Tt = !1,
  Sn = null,
  em = {
    onError: function (a) {
      (nr = !0), (At = a);
    },
  };
function am(a, e, s, r, i, n, o, d, l) {
  (nr = !1), (At = null), Jp.apply(em, arguments);
}
function sm(a, e, s, r, i, n, o, d, l) {
  if ((am.apply(this, arguments), nr)) {
    if (nr) {
      var p = At;
      (nr = !1), (At = null);
    } else throw Error(k(198));
    Tt || ((Tt = !0), (Sn = p));
  }
}
function ns(a) {
  var e = a,
    s = a;
  if (a.alternate) for (; e.return; ) e = e.return;
  else {
    a = e;
    do (e = a), e.flags & 4098 && (s = e.return), (a = e.return);
    while (a);
  }
  return e.tag === 3 ? s : null;
}
function fu(a) {
  if (a.tag === 13) {
    var e = a.memoizedState;
    if (
      (e === null && ((a = a.alternate), a !== null && (e = a.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function jl(a) {
  if (ns(a) !== a) throw Error(k(188));
}
function rm(a) {
  var e = a.alternate;
  if (!e) {
    if (((e = ns(a)), e === null)) throw Error(k(188));
    return e !== a ? null : a;
  }
  for (var s = a, r = e; ; ) {
    var i = s.return;
    if (i === null) break;
    var n = i.alternate;
    if (n === null) {
      if (((r = i.return), r !== null)) {
        s = r;
        continue;
      }
      break;
    }
    if (i.child === n.child) {
      for (n = i.child; n; ) {
        if (n === s) return jl(i), a;
        if (n === r) return jl(i), e;
        n = n.sibling;
      }
      throw Error(k(188));
    }
    if (s.return !== r.return) (s = i), (r = n);
    else {
      for (var o = !1, d = i.child; d; ) {
        if (d === s) {
          (o = !0), (s = i), (r = n);
          break;
        }
        if (d === r) {
          (o = !0), (r = i), (s = n);
          break;
        }
        d = d.sibling;
      }
      if (!o) {
        for (d = n.child; d; ) {
          if (d === s) {
            (o = !0), (s = n), (r = i);
            break;
          }
          if (d === r) {
            (o = !0), (r = n), (s = i);
            break;
          }
          d = d.sibling;
        }
        if (!o) throw Error(k(189));
      }
    }
    if (s.alternate !== r) throw Error(k(190));
  }
  if (s.tag !== 3) throw Error(k(188));
  return s.stateNode.current === s ? a : e;
}
function hu(a) {
  return (a = rm(a)), a !== null ? gu(a) : null;
}
function gu(a) {
  if (a.tag === 5 || a.tag === 6) return a;
  for (a = a.child; a !== null; ) {
    var e = gu(a);
    if (e !== null) return e;
    a = a.sibling;
  }
  return null;
}
var vu = Le.unstable_scheduleCallback,
  El = Le.unstable_cancelCallback,
  tm = Le.unstable_shouldYield,
  im = Le.unstable_requestPaint,
  te = Le.unstable_now,
  nm = Le.unstable_getCurrentPriorityLevel,
  fo = Le.unstable_ImmediatePriority,
  xu = Le.unstable_UserBlockingPriority,
  Ot = Le.unstable_NormalPriority,
  om = Le.unstable_LowPriority,
  Su = Le.unstable_IdlePriority,
  ai = null,
  ta = null;
function lm(a) {
  if (ta && typeof ta.onCommitFiberRoot == "function")
    try {
      ta.onCommitFiberRoot(ai, a, void 0, (a.current.flags & 128) === 128);
    } catch {}
}
var Ke = Math.clz32 ? Math.clz32 : cm,
  dm = Math.log,
  um = Math.LN2;
function cm(a) {
  return (a >>>= 0), a === 0 ? 32 : (31 - ((dm(a) / um) | 0)) | 0;
}
var Yr = 64,
  Zr = 4194304;
function ar(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function Ct(a, e) {
  var s = a.pendingLanes;
  if (s === 0) return 0;
  var r = 0,
    i = a.suspendedLanes,
    n = a.pingedLanes,
    o = s & 268435455;
  if (o !== 0) {
    var d = o & ~i;
    d !== 0 ? (r = ar(d)) : ((n &= o), n !== 0 && (r = ar(n)));
  } else (o = s & ~i), o !== 0 ? (r = ar(o)) : n !== 0 && (r = ar(n));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (n = e & -e), i >= n || (i === 16 && (n & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= s & 16), (e = a.entangledLanes), e !== 0))
    for (a = a.entanglements, e &= r; 0 < e; )
      (s = 31 - Ke(e)), (i = 1 << s), (r |= a[s]), (e &= ~i);
  return r;
}
function pm(a, e) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function mm(a, e) {
  for (
    var s = a.suspendedLanes,
      r = a.pingedLanes,
      i = a.expirationTimes,
      n = a.pendingLanes;
    0 < n;

  ) {
    var o = 31 - Ke(n),
      d = 1 << o,
      l = i[o];
    l === -1
      ? (!(d & s) || d & r) && (i[o] = pm(d, e))
      : l <= e && (a.expiredLanes |= d),
      (n &= ~d);
  }
}
function jn(a) {
  return (
    (a = a.pendingLanes & -1073741825),
    a !== 0 ? a : a & 1073741824 ? 1073741824 : 0
  );
}
function ju() {
  var a = Yr;
  return (Yr <<= 1), !(Yr & 4194240) && (Yr = 64), a;
}
function Ci(a) {
  for (var e = [], s = 0; 31 > s; s++) e.push(a);
  return e;
}
function Lr(a, e, s) {
  (a.pendingLanes |= e),
    e !== 536870912 && ((a.suspendedLanes = 0), (a.pingedLanes = 0)),
    (a = a.eventTimes),
    (e = 31 - Ke(e)),
    (a[e] = s);
}
function fm(a, e) {
  var s = a.pendingLanes & ~e;
  (a.pendingLanes = e),
    (a.suspendedLanes = 0),
    (a.pingedLanes = 0),
    (a.expiredLanes &= e),
    (a.mutableReadLanes &= e),
    (a.entangledLanes &= e),
    (e = a.entanglements);
  var r = a.eventTimes;
  for (a = a.expirationTimes; 0 < s; ) {
    var i = 31 - Ke(s),
      n = 1 << i;
    (e[i] = 0), (r[i] = -1), (a[i] = -1), (s &= ~n);
  }
}
function ho(a, e) {
  var s = (a.entangledLanes |= e);
  for (a = a.entanglements; s; ) {
    var r = 31 - Ke(s),
      i = 1 << r;
    (i & e) | (a[r] & e) && (a[r] |= e), (s &= ~i);
  }
}
var W = 0;
function Eu(a) {
  return (a &= -a), 1 < a ? (4 < a ? (a & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wu,
  go,
  bu,
  yu,
  Au,
  En = !1,
  Kr = [],
  Pa = null,
  Ma = null,
  Ia = null,
  Sr = new Map(),
  jr = new Map(),
  ba = [],
  hm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wl(a, e) {
  switch (a) {
    case "focusin":
    case "focusout":
      Pa = null;
      break;
    case "dragenter":
    case "dragleave":
      Ma = null;
      break;
    case "mouseover":
    case "mouseout":
      Ia = null;
      break;
    case "pointerover":
    case "pointerout":
      Sr.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jr.delete(e.pointerId);
  }
}
function Ws(a, e, s, r, i, n) {
  return a === null || a.nativeEvent !== n
    ? ((a = {
        blockedOn: e,
        domEventName: s,
        eventSystemFlags: r,
        nativeEvent: n,
        targetContainers: [i],
      }),
      e !== null && ((e = _r(e)), e !== null && go(e)),
      a)
    : ((a.eventSystemFlags |= r),
      (e = a.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      a);
}
function gm(a, e, s, r, i) {
  switch (e) {
    case "focusin":
      return (Pa = Ws(Pa, a, e, s, r, i)), !0;
    case "dragenter":
      return (Ma = Ws(Ma, a, e, s, r, i)), !0;
    case "mouseover":
      return (Ia = Ws(Ia, a, e, s, r, i)), !0;
    case "pointerover":
      var n = i.pointerId;
      return Sr.set(n, Ws(Sr.get(n) || null, a, e, s, r, i)), !0;
    case "gotpointercapture":
      return (
        (n = i.pointerId), jr.set(n, Ws(jr.get(n) || null, a, e, s, r, i)), !0
      );
  }
  return !1;
}
function Tu(a) {
  var e = Wa(a.target);
  if (e !== null) {
    var s = ns(e);
    if (s !== null) {
      if (((e = s.tag), e === 13)) {
        if (((e = fu(s)), e !== null)) {
          (a.blockedOn = e),
            Au(a.priority, function () {
              bu(s);
            });
          return;
        }
      } else if (e === 3 && s.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function pt(a) {
  if (a.blockedOn !== null) return !1;
  for (var e = a.targetContainers; 0 < e.length; ) {
    var s = wn(a.domEventName, a.eventSystemFlags, e[0], a.nativeEvent);
    if (s === null) {
      s = a.nativeEvent;
      var r = new s.constructor(s.type, s);
      (gn = r), s.target.dispatchEvent(r), (gn = null);
    } else return (e = _r(s)), e !== null && go(e), (a.blockedOn = s), !1;
    e.shift();
  }
  return !0;
}
function bl(a, e, s) {
  pt(a) && s.delete(e);
}
function vm() {
  (En = !1),
    Pa !== null && pt(Pa) && (Pa = null),
    Ma !== null && pt(Ma) && (Ma = null),
    Ia !== null && pt(Ia) && (Ia = null),
    Sr.forEach(bl),
    jr.forEach(bl);
}
function Qs(a, e) {
  a.blockedOn === e &&
    ((a.blockedOn = null),
    En ||
      ((En = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, vm)));
}
function Er(a) {
  function e(i) {
    return Qs(i, a);
  }
  if (0 < Kr.length) {
    Qs(Kr[0], a);
    for (var s = 1; s < Kr.length; s++) {
      var r = Kr[s];
      r.blockedOn === a && (r.blockedOn = null);
    }
  }
  for (
    Pa !== null && Qs(Pa, a),
      Ma !== null && Qs(Ma, a),
      Ia !== null && Qs(Ia, a),
      Sr.forEach(e),
      jr.forEach(e),
      s = 0;
    s < ba.length;
    s++
  )
    (r = ba[s]), r.blockedOn === a && (r.blockedOn = null);
  for (; 0 < ba.length && ((s = ba[0]), s.blockedOn === null); )
    Tu(s), s.blockedOn === null && ba.shift();
}
var Ts = xa.ReactCurrentBatchConfig,
  Pt = !0;
function xm(a, e, s, r) {
  var i = W,
    n = Ts.transition;
  Ts.transition = null;
  try {
    (W = 1), vo(a, e, s, r);
  } finally {
    (W = i), (Ts.transition = n);
  }
}
function Sm(a, e, s, r) {
  var i = W,
    n = Ts.transition;
  Ts.transition = null;
  try {
    (W = 4), vo(a, e, s, r);
  } finally {
    (W = i), (Ts.transition = n);
  }
}
function vo(a, e, s, r) {
  if (Pt) {
    var i = wn(a, e, s, r);
    if (i === null) ki(a, e, r, Mt, s), wl(a, r);
    else if (gm(i, a, e, s, r)) r.stopPropagation();
    else if ((wl(a, r), e & 4 && -1 < hm.indexOf(a))) {
      for (; i !== null; ) {
        var n = _r(i);
        if (
          (n !== null && wu(n),
          (n = wn(a, e, s, r)),
          n === null && ki(a, e, r, Mt, s),
          n === i)
        )
          break;
        i = n;
      }
      i !== null && r.stopPropagation();
    } else ki(a, e, r, null, s);
  }
}
var Mt = null;
function wn(a, e, s, r) {
  if (((Mt = null), (a = mo(r)), (a = Wa(a)), a !== null))
    if (((e = ns(a)), e === null)) a = null;
    else if (((s = e.tag), s === 13)) {
      if (((a = fu(e)), a !== null)) return a;
      a = null;
    } else if (s === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      a = null;
    } else e !== a && (a = null);
  return (Mt = a), null;
}
function Ou(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nm()) {
        case fo:
          return 1;
        case xu:
          return 4;
        case Ot:
        case om:
          return 16;
        case Su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Aa = null,
  xo = null,
  mt = null;
function Cu() {
  if (mt) return mt;
  var a,
    e = xo,
    s = e.length,
    r,
    i = "value" in Aa ? Aa.value : Aa.textContent,
    n = i.length;
  for (a = 0; a < s && e[a] === i[a]; a++);
  var o = s - a;
  for (r = 1; r <= o && e[s - r] === i[n - r]; r++);
  return (mt = i.slice(a, 1 < r ? 1 - r : void 0));
}
function ft(a) {
  var e = a.keyCode;
  return (
    "charCode" in a
      ? ((a = a.charCode), a === 0 && e === 13 && (a = 13))
      : (a = e),
    a === 10 && (a = 13),
    32 <= a || a === 13 ? a : 0
  );
}
function Jr() {
  return !0;
}
function yl() {
  return !1;
}
function _e(a) {
  function e(s, r, i, n, o) {
    (this._reactName = s),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = n),
      (this.target = o),
      (this.currentTarget = null);
    for (var d in a)
      a.hasOwnProperty(d) && ((s = a[d]), (this[d] = s ? s(n) : n[d]));
    return (
      (this.isDefaultPrevented = (
        n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
      )
        ? Jr
        : yl),
      (this.isPropagationStopped = yl),
      this
    );
  }
  return (
    ee(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var s = this.nativeEvent;
        s &&
          (s.preventDefault
            ? s.preventDefault()
            : typeof s.returnValue != "unknown" && (s.returnValue = !1),
          (this.isDefaultPrevented = Jr));
      },
      stopPropagation: function () {
        var s = this.nativeEvent;
        s &&
          (s.stopPropagation
            ? s.stopPropagation()
            : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
          (this.isPropagationStopped = Jr));
      },
      persist: function () {},
      isPersistent: Jr,
    }),
    e
  );
}
var ks = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (a) {
      return a.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  So = _e(ks),
  kr = ee({}, ks, { view: 0, detail: 0 }),
  jm = _e(kr),
  Pi,
  Mi,
  Xs,
  si = ee({}, kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jo,
    button: 0,
    buttons: 0,
    relatedTarget: function (a) {
      return a.relatedTarget === void 0
        ? a.fromElement === a.srcElement
          ? a.toElement
          : a.fromElement
        : a.relatedTarget;
    },
    movementX: function (a) {
      return "movementX" in a
        ? a.movementX
        : (a !== Xs &&
            (Xs && a.type === "mousemove"
              ? ((Pi = a.screenX - Xs.screenX), (Mi = a.screenY - Xs.screenY))
              : (Mi = Pi = 0),
            (Xs = a)),
          Pi);
    },
    movementY: function (a) {
      return "movementY" in a ? a.movementY : Mi;
    },
  }),
  Al = _e(si),
  Em = ee({}, si, { dataTransfer: 0 }),
  wm = _e(Em),
  bm = ee({}, kr, { relatedTarget: 0 }),
  Ii = _e(bm),
  ym = ee({}, ks, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Am = _e(ym),
  Tm = ee({}, ks, {
    clipboardData: function (a) {
      return "clipboardData" in a ? a.clipboardData : window.clipboardData;
    },
  }),
  Om = _e(Tm),
  Cm = ee({}, ks, { data: 0 }),
  Tl = _e(Cm),
  Pm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Mm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Im = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zm(a) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(a) : (a = Im[a]) ? !!e[a] : !1;
}
function jo() {
  return zm;
}
var Rm = ee({}, kr, {
    key: function (a) {
      if (a.key) {
        var e = Pm[a.key] || a.key;
        if (e !== "Unidentified") return e;
      }
      return a.type === "keypress"
        ? ((a = ft(a)), a === 13 ? "Enter" : String.fromCharCode(a))
        : a.type === "keydown" || a.type === "keyup"
        ? Mm[a.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jo,
    charCode: function (a) {
      return a.type === "keypress" ? ft(a) : 0;
    },
    keyCode: function (a) {
      return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
    },
    which: function (a) {
      return a.type === "keypress"
        ? ft(a)
        : a.type === "keydown" || a.type === "keyup"
        ? a.keyCode
        : 0;
    },
  }),
  Nm = _e(Rm),
  Dm = ee({}, si, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ol = _e(Dm),
  qm = ee({}, kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jo,
  }),
  Lm = _e(qm),
  km = ee({}, ks, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _m = _e(km),
  Um = ee({}, si, {
    deltaX: function (a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function (a) {
      return "deltaY" in a
        ? a.deltaY
        : "wheelDeltaY" in a
        ? -a.wheelDeltaY
        : "wheelDelta" in a
        ? -a.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Vm = _e(Um),
  $m = [9, 13, 27, 32],
  Eo = ma && "CompositionEvent" in window,
  or = null;
ma && "documentMode" in document && (or = document.documentMode);
var Bm = ma && "TextEvent" in window && !or,
  Pu = ma && (!Eo || (or && 8 < or && 11 >= or)),
  Cl = String.fromCharCode(32),
  Pl = !1;
function Mu(a, e) {
  switch (a) {
    case "keyup":
      return $m.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Iu(a) {
  return (a = a.detail), typeof a == "object" && "data" in a ? a.data : null;
}
var ms = !1;
function Fm(a, e) {
  switch (a) {
    case "compositionend":
      return Iu(e);
    case "keypress":
      return e.which !== 32 ? null : ((Pl = !0), Cl);
    case "textInput":
      return (a = e.data), a === Cl && Pl ? null : a;
    default:
      return null;
  }
}
function Gm(a, e) {
  if (ms)
    return a === "compositionend" || (!Eo && Mu(a, e))
      ? ((a = Cu()), (mt = xo = Aa = null), (ms = !1), a)
      : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Pu && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Hm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ml(a) {
  var e = a && a.nodeName && a.nodeName.toLowerCase();
  return e === "input" ? !!Hm[a.type] : e === "textarea";
}
function zu(a, e, s, r) {
  du(r),
    (e = It(e, "onChange")),
    0 < e.length &&
      ((s = new So("onChange", "change", null, s, r)),
      a.push({ event: s, listeners: e }));
}
var lr = null,
  wr = null;
function Wm(a) {
  Bu(a, 0);
}
function ri(a) {
  var e = gs(a);
  if (su(e)) return a;
}
function Qm(a, e) {
  if (a === "change") return e;
}
var Ru = !1;
if (ma) {
  var zi;
  if (ma) {
    var Ri = "oninput" in document;
    if (!Ri) {
      var Il = document.createElement("div");
      Il.setAttribute("oninput", "return;"),
        (Ri = typeof Il.oninput == "function");
    }
    zi = Ri;
  } else zi = !1;
  Ru = zi && (!document.documentMode || 9 < document.documentMode);
}
function zl() {
  lr && (lr.detachEvent("onpropertychange", Nu), (wr = lr = null));
}
function Nu(a) {
  if (a.propertyName === "value" && ri(wr)) {
    var e = [];
    zu(e, wr, a, mo(a)), mu(Wm, e);
  }
}
function Xm(a, e, s) {
  a === "focusin"
    ? (zl(), (lr = e), (wr = s), lr.attachEvent("onpropertychange", Nu))
    : a === "focusout" && zl();
}
function Ym(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return ri(wr);
}
function Zm(a, e) {
  if (a === "click") return ri(e);
}
function Km(a, e) {
  if (a === "input" || a === "change") return ri(e);
}
function Jm(a, e) {
  return (a === e && (a !== 0 || 1 / a === 1 / e)) || (a !== a && e !== e);
}
var ea = typeof Object.is == "function" ? Object.is : Jm;
function br(a, e) {
  if (ea(a, e)) return !0;
  if (typeof a != "object" || a === null || typeof e != "object" || e === null)
    return !1;
  var s = Object.keys(a),
    r = Object.keys(e);
  if (s.length !== r.length) return !1;
  for (r = 0; r < s.length; r++) {
    var i = s[r];
    if (!rn.call(e, i) || !ea(a[i], e[i])) return !1;
  }
  return !0;
}
function Rl(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Nl(a, e) {
  var s = Rl(a);
  a = 0;
  for (var r; s; ) {
    if (s.nodeType === 3) {
      if (((r = a + s.textContent.length), a <= e && r >= e))
        return { node: s, offset: e - a };
      a = r;
    }
    e: {
      for (; s; ) {
        if (s.nextSibling) {
          s = s.nextSibling;
          break e;
        }
        s = s.parentNode;
      }
      s = void 0;
    }
    s = Rl(s);
  }
}
function Du(a, e) {
  return a && e
    ? a === e
      ? !0
      : a && a.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Du(a, e.parentNode)
      : "contains" in a
      ? a.contains(e)
      : a.compareDocumentPosition
      ? !!(a.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function qu() {
  for (var a = window, e = yt(); e instanceof a.HTMLIFrameElement; ) {
    try {
      var s = typeof e.contentWindow.location.href == "string";
    } catch {
      s = !1;
    }
    if (s) a = e.contentWindow;
    else break;
    e = yt(a.document);
  }
  return e;
}
function wo(a) {
  var e = a && a.nodeName && a.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (a.type === "text" ||
        a.type === "search" ||
        a.type === "tel" ||
        a.type === "url" ||
        a.type === "password")) ||
      e === "textarea" ||
      a.contentEditable === "true")
  );
}
function ef(a) {
  var e = qu(),
    s = a.focusedElem,
    r = a.selectionRange;
  if (
    e !== s &&
    s &&
    s.ownerDocument &&
    Du(s.ownerDocument.documentElement, s)
  ) {
    if (r !== null && wo(s)) {
      if (
        ((e = r.start),
        (a = r.end),
        a === void 0 && (a = e),
        "selectionStart" in s)
      )
        (s.selectionStart = e), (s.selectionEnd = Math.min(a, s.value.length));
      else if (
        ((a = ((e = s.ownerDocument || document) && e.defaultView) || window),
        a.getSelection)
      ) {
        a = a.getSelection();
        var i = s.textContent.length,
          n = Math.min(r.start, i);
        (r = r.end === void 0 ? n : Math.min(r.end, i)),
          !a.extend && n > r && ((i = r), (r = n), (n = i)),
          (i = Nl(s, n));
        var o = Nl(s, r);
        i &&
          o &&
          (a.rangeCount !== 1 ||
            a.anchorNode !== i.node ||
            a.anchorOffset !== i.offset ||
            a.focusNode !== o.node ||
            a.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          a.removeAllRanges(),
          n > r
            ? (a.addRange(e), a.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), a.addRange(e)));
      }
    }
    for (e = [], a = s; (a = a.parentNode); )
      a.nodeType === 1 &&
        e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    for (typeof s.focus == "function" && s.focus(), s = 0; s < e.length; s++)
      (a = e[s]),
        (a.element.scrollLeft = a.left),
        (a.element.scrollTop = a.top);
  }
}
var af = ma && "documentMode" in document && 11 >= document.documentMode,
  fs = null,
  bn = null,
  dr = null,
  yn = !1;
function Dl(a, e, s) {
  var r = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
  yn ||
    fs == null ||
    fs !== yt(r) ||
    ((r = fs),
    "selectionStart" in r && wo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (dr && br(dr, r)) ||
      ((dr = r),
      (r = It(bn, "onSelect")),
      0 < r.length &&
        ((e = new So("onSelect", "select", null, e, s)),
        a.push({ event: e, listeners: r }),
        (e.target = fs))));
}
function et(a, e) {
  var s = {};
  return (
    (s[a.toLowerCase()] = e.toLowerCase()),
    (s["Webkit" + a] = "webkit" + e),
    (s["Moz" + a] = "moz" + e),
    s
  );
}
var hs = {
    animationend: et("Animation", "AnimationEnd"),
    animationiteration: et("Animation", "AnimationIteration"),
    animationstart: et("Animation", "AnimationStart"),
    transitionend: et("Transition", "TransitionEnd"),
  },
  Ni = {},
  Lu = {};
ma &&
  ((Lu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete hs.animationend.animation,
    delete hs.animationiteration.animation,
    delete hs.animationstart.animation),
  "TransitionEvent" in window || delete hs.transitionend.transition);
function ti(a) {
  if (Ni[a]) return Ni[a];
  if (!hs[a]) return a;
  var e = hs[a],
    s;
  for (s in e) if (e.hasOwnProperty(s) && s in Lu) return (Ni[a] = e[s]);
  return a;
}
var ku = ti("animationend"),
  _u = ti("animationiteration"),
  Uu = ti("animationstart"),
  Vu = ti("transitionend"),
  $u = new Map(),
  ql =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Va(a, e) {
  $u.set(a, e), is(e, [a]);
}
for (var Di = 0; Di < ql.length; Di++) {
  var qi = ql[Di],
    sf = qi.toLowerCase(),
    rf = qi[0].toUpperCase() + qi.slice(1);
  Va(sf, "on" + rf);
}
Va(ku, "onAnimationEnd");
Va(_u, "onAnimationIteration");
Va(Uu, "onAnimationStart");
Va("dblclick", "onDoubleClick");
Va("focusin", "onFocus");
Va("focusout", "onBlur");
Va(Vu, "onTransitionEnd");
Ps("onMouseEnter", ["mouseout", "mouseover"]);
Ps("onMouseLeave", ["mouseout", "mouseover"]);
Ps("onPointerEnter", ["pointerout", "pointerover"]);
Ps("onPointerLeave", ["pointerout", "pointerover"]);
is(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
is(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
is("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
is(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
is(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
is(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var sr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  tf = new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));
function Ll(a, e, s) {
  var r = a.type || "unknown-event";
  (a.currentTarget = s), sm(r, e, void 0, a), (a.currentTarget = null);
}
function Bu(a, e) {
  e = (e & 4) !== 0;
  for (var s = 0; s < a.length; s++) {
    var r = a[s],
      i = r.event;
    r = r.listeners;
    e: {
      var n = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var d = r[o],
            l = d.instance,
            p = d.currentTarget;
          if (((d = d.listener), l !== n && i.isPropagationStopped())) break e;
          Ll(i, d, p), (n = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((d = r[o]),
            (l = d.instance),
            (p = d.currentTarget),
            (d = d.listener),
            l !== n && i.isPropagationStopped())
          )
            break e;
          Ll(i, d, p), (n = l);
        }
    }
  }
  if (Tt) throw ((a = Sn), (Tt = !1), (Sn = null), a);
}
function X(a, e) {
  var s = e[Pn];
  s === void 0 && (s = e[Pn] = new Set());
  var r = a + "__bubble";
  s.has(r) || (Fu(e, a, 2, !1), s.add(r));
}
function Li(a, e, s) {
  var r = 0;
  e && (r |= 4), Fu(s, a, r, e);
}
var at = "_reactListening" + Math.random().toString(36).slice(2);
function yr(a) {
  if (!a[at]) {
    (a[at] = !0),
      Zd.forEach(function (s) {
        s !== "selectionchange" && (tf.has(s) || Li(s, !1, a), Li(s, !0, a));
      });
    var e = a.nodeType === 9 ? a : a.ownerDocument;
    e === null || e[at] || ((e[at] = !0), Li("selectionchange", !1, e));
  }
}
function Fu(a, e, s, r) {
  switch (Ou(e)) {
    case 1:
      var i = xm;
      break;
    case 4:
      i = Sm;
      break;
    default:
      i = vo;
  }
  (s = i.bind(null, e, s, a)),
    (i = void 0),
    !xn ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? a.addEventListener(e, s, { capture: !0, passive: i })
        : a.addEventListener(e, s, !0)
      : i !== void 0
      ? a.addEventListener(e, s, { passive: i })
      : a.addEventListener(e, s, !1);
}
function ki(a, e, s, r, i) {
  var n = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var d = r.stateNode.containerInfo;
        if (d === i || (d.nodeType === 8 && d.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; d !== null; ) {
          if (((o = Wa(d)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = n = o;
            continue e;
          }
          d = d.parentNode;
        }
      }
      r = r.return;
    }
  mu(function () {
    var p = n,
      c = mo(s),
      u = [];
    e: {
      var m = $u.get(a);
      if (m !== void 0) {
        var v = So,
          S = a;
        switch (a) {
          case "keypress":
            if (ft(s) === 0) break e;
          case "keydown":
          case "keyup":
            v = Nm;
            break;
          case "focusin":
            (S = "focus"), (v = Ii);
            break;
          case "focusout":
            (S = "blur"), (v = Ii);
            break;
          case "beforeblur":
          case "afterblur":
            v = Ii;
            break;
          case "click":
            if (s.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Al;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = wm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Lm;
            break;
          case ku:
          case _u:
          case Uu:
            v = Am;
            break;
          case Vu:
            v = _m;
            break;
          case "scroll":
            v = jm;
            break;
          case "wheel":
            v = Vm;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Om;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ol;
        }
        var x = (e & 4) !== 0,
          j = !x && a === "scroll",
          g = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var f = p, h; f !== null; ) {
          h = f;
          var E = h.stateNode;
          if (
            (h.tag === 5 &&
              E !== null &&
              ((h = E),
              g !== null && ((E = xr(f, g)), E != null && x.push(Ar(f, E, h)))),
            j)
          )
            break;
          f = f.return;
        }
        0 < x.length &&
          ((m = new v(m, S, null, s, c)), u.push({ event: m, listeners: x }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((m = a === "mouseover" || a === "pointerover"),
          (v = a === "mouseout" || a === "pointerout"),
          m &&
            s !== gn &&
            (S = s.relatedTarget || s.fromElement) &&
            (Wa(S) || S[fa]))
        )
          break e;
        if (
          (v || m) &&
          ((m =
            c.window === c
              ? c
              : (m = c.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          v
            ? ((S = s.relatedTarget || s.toElement),
              (v = p),
              (S = S ? Wa(S) : null),
              S !== null &&
                ((j = ns(S)), S !== j || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((v = null), (S = p)),
          v !== S)
        ) {
          if (
            ((x = Al),
            (E = "onMouseLeave"),
            (g = "onMouseEnter"),
            (f = "mouse"),
            (a === "pointerout" || a === "pointerover") &&
              ((x = Ol),
              (E = "onPointerLeave"),
              (g = "onPointerEnter"),
              (f = "pointer")),
            (j = v == null ? m : gs(v)),
            (h = S == null ? m : gs(S)),
            (m = new x(E, f + "leave", v, s, c)),
            (m.target = j),
            (m.relatedTarget = h),
            (E = null),
            Wa(c) === p &&
              ((x = new x(g, f + "enter", S, s, c)),
              (x.target = h),
              (x.relatedTarget = j),
              (E = x)),
            (j = E),
            v && S)
          )
            a: {
              for (x = v, g = S, f = 0, h = x; h; h = us(h)) f++;
              for (h = 0, E = g; E; E = us(E)) h++;
              for (; 0 < f - h; ) (x = us(x)), f--;
              for (; 0 < h - f; ) (g = us(g)), h--;
              for (; f--; ) {
                if (x === g || (g !== null && x === g.alternate)) break a;
                (x = us(x)), (g = us(g));
              }
              x = null;
            }
          else x = null;
          v !== null && kl(u, m, v, x, !1),
            S !== null && j !== null && kl(u, j, S, x, !0);
        }
      }
      e: {
        if (
          ((m = p ? gs(p) : window),
          (v = m.nodeName && m.nodeName.toLowerCase()),
          v === "select" || (v === "input" && m.type === "file"))
        )
          var b = Qm;
        else if (Ml(m))
          if (Ru) b = Km;
          else {
            b = Ym;
            var y = Xm;
          }
        else
          (v = m.nodeName) &&
            v.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (b = Zm);
        if (b && (b = b(a, p))) {
          zu(u, b, s, c);
          break e;
        }
        y && y(a, m, p),
          a === "focusout" &&
            (y = m._wrapperState) &&
            y.controlled &&
            m.type === "number" &&
            cn(m, "number", m.value);
      }
      switch (((y = p ? gs(p) : window), a)) {
        case "focusin":
          (Ml(y) || y.contentEditable === "true") &&
            ((fs = y), (bn = p), (dr = null));
          break;
        case "focusout":
          dr = bn = fs = null;
          break;
        case "mousedown":
          yn = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (yn = !1), Dl(u, s, c);
          break;
        case "selectionchange":
          if (af) break;
        case "keydown":
        case "keyup":
          Dl(u, s, c);
      }
      var z;
      if (Eo)
        e: {
          switch (a) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        ms
          ? Mu(a, s) && (C = "onCompositionEnd")
          : a === "keydown" && s.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (Pu &&
          s.locale !== "ko" &&
          (ms || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && ms && (z = Cu())
            : ((Aa = c),
              (xo = "value" in Aa ? Aa.value : Aa.textContent),
              (ms = !0))),
        (y = It(p, C)),
        0 < y.length &&
          ((C = new Tl(C, a, null, s, c)),
          u.push({ event: C, listeners: y }),
          z ? (C.data = z) : ((z = Iu(s)), z !== null && (C.data = z)))),
        (z = Bm ? Fm(a, s) : Gm(a, s)) &&
          ((p = It(p, "onBeforeInput")),
          0 < p.length &&
            ((c = new Tl("onBeforeInput", "beforeinput", null, s, c)),
            u.push({ event: c, listeners: p }),
            (c.data = z)));
    }
    Bu(u, e);
  });
}
function Ar(a, e, s) {
  return { instance: a, listener: e, currentTarget: s };
}
function It(a, e) {
  for (var s = e + "Capture", r = []; a !== null; ) {
    var i = a,
      n = i.stateNode;
    i.tag === 5 &&
      n !== null &&
      ((i = n),
      (n = xr(a, s)),
      n != null && r.unshift(Ar(a, n, i)),
      (n = xr(a, e)),
      n != null && r.push(Ar(a, n, i))),
      (a = a.return);
  }
  return r;
}
function us(a) {
  if (a === null) return null;
  do a = a.return;
  while (a && a.tag !== 5);
  return a || null;
}
function kl(a, e, s, r, i) {
  for (var n = e._reactName, o = []; s !== null && s !== r; ) {
    var d = s,
      l = d.alternate,
      p = d.stateNode;
    if (l !== null && l === r) break;
    d.tag === 5 &&
      p !== null &&
      ((d = p),
      i
        ? ((l = xr(s, n)), l != null && o.unshift(Ar(s, l, d)))
        : i || ((l = xr(s, n)), l != null && o.push(Ar(s, l, d)))),
      (s = s.return);
  }
  o.length !== 0 && a.push({ event: e, listeners: o });
}
var nf = /\r\n?/g,
  of = /\u0000|\uFFFD/g;
function _l(a) {
  return (typeof a == "string" ? a : "" + a)
    .replace(
      nf,
      `
`
    )
    .replace(of, "");
}
function st(a, e, s) {
  if (((e = _l(e)), _l(a) !== e && s)) throw Error(k(425));
}
function zt() {}
var An = null,
  Tn = null;
function On(a, e) {
  return (
    a === "textarea" ||
    a === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Cn = typeof setTimeout == "function" ? setTimeout : void 0,
  lf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ul = typeof Promise == "function" ? Promise : void 0,
  df =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ul < "u"
      ? function (a) {
          return Ul.resolve(null).then(a).catch(uf);
        }
      : Cn;
function uf(a) {
  setTimeout(function () {
    throw a;
  });
}
function _i(a, e) {
  var s = e,
    r = 0;
  do {
    var i = s.nextSibling;
    if ((a.removeChild(s), i && i.nodeType === 8))
      if (((s = i.data), s === "/$")) {
        if (r === 0) {
          a.removeChild(i), Er(e);
          return;
        }
        r--;
      } else (s !== "$" && s !== "$?" && s !== "$!") || r++;
    s = i;
  } while (s);
  Er(e);
}
function za(a) {
  for (; a != null; a = a.nextSibling) {
    var e = a.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = a.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return a;
}
function Vl(a) {
  a = a.previousSibling;
  for (var e = 0; a; ) {
    if (a.nodeType === 8) {
      var s = a.data;
      if (s === "$" || s === "$!" || s === "$?") {
        if (e === 0) return a;
        e--;
      } else s === "/$" && e++;
    }
    a = a.previousSibling;
  }
  return null;
}
var _s = Math.random().toString(36).slice(2),
  ra = "__reactFiber$" + _s,
  Tr = "__reactProps$" + _s,
  fa = "__reactContainer$" + _s,
  Pn = "__reactEvents$" + _s,
  cf = "__reactListeners$" + _s,
  pf = "__reactHandles$" + _s;
function Wa(a) {
  var e = a[ra];
  if (e) return e;
  for (var s = a.parentNode; s; ) {
    if ((e = s[fa] || s[ra])) {
      if (
        ((s = e.alternate),
        e.child !== null || (s !== null && s.child !== null))
      )
        for (a = Vl(a); a !== null; ) {
          if ((s = a[ra])) return s;
          a = Vl(a);
        }
      return e;
    }
    (a = s), (s = a.parentNode);
  }
  return null;
}
function _r(a) {
  return (
    (a = a[ra] || a[fa]),
    !a || (a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3) ? null : a
  );
}
function gs(a) {
  if (a.tag === 5 || a.tag === 6) return a.stateNode;
  throw Error(k(33));
}
function ii(a) {
  return a[Tr] || null;
}
var Mn = [],
  vs = -1;
function $a(a) {
  return { current: a };
}
function Y(a) {
  0 > vs || ((a.current = Mn[vs]), (Mn[vs] = null), vs--);
}
function Q(a, e) {
  vs++, (Mn[vs] = a.current), (a.current = e);
}
var Ua = {},
  je = $a(Ua),
  Ce = $a(!1),
  Ja = Ua;
function Ms(a, e) {
  var s = a.type.contextTypes;
  if (!s) return Ua;
  var r = a.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    n;
  for (n in s) i[n] = e[n];
  return (
    r &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = e),
      (a.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Pe(a) {
  return (a = a.childContextTypes), a != null;
}
function Rt() {
  Y(Ce), Y(je);
}
function $l(a, e, s) {
  if (je.current !== Ua) throw Error(k(168));
  Q(je, e), Q(Ce, s);
}
function Gu(a, e, s) {
  var r = a.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return s;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(k(108, Xp(a) || "Unknown", i));
  return ee({}, s, r);
}
function Nt(a) {
  return (
    (a =
      ((a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext) || Ua),
    (Ja = je.current),
    Q(je, a),
    Q(Ce, Ce.current),
    !0
  );
}
function Bl(a, e, s) {
  var r = a.stateNode;
  if (!r) throw Error(k(169));
  s
    ? ((a = Gu(a, e, Ja)),
      (r.__reactInternalMemoizedMergedChildContext = a),
      Y(Ce),
      Y(je),
      Q(je, a))
    : Y(Ce),
    Q(Ce, s);
}
var la = null,
  ni = !1,
  Ui = !1;
function Hu(a) {
  la === null ? (la = [a]) : la.push(a);
}
function mf(a) {
  (ni = !0), Hu(a);
}
function Ba() {
  if (!Ui && la !== null) {
    Ui = !0;
    var a = 0,
      e = W;
    try {
      var s = la;
      for (W = 1; a < s.length; a++) {
        var r = s[a];
        do r = r(!0);
        while (r !== null);
      }
      (la = null), (ni = !1);
    } catch (i) {
      throw (la !== null && (la = la.slice(a + 1)), vu(fo, Ba), i);
    } finally {
      (W = e), (Ui = !1);
    }
  }
  return null;
}
var xs = [],
  Ss = 0,
  Dt = null,
  qt = 0,
  Ve = [],
  $e = 0,
  es = null,
  ua = 1,
  ca = "";
function Fa(a, e) {
  (xs[Ss++] = qt), (xs[Ss++] = Dt), (Dt = a), (qt = e);
}
function Wu(a, e, s) {
  (Ve[$e++] = ua), (Ve[$e++] = ca), (Ve[$e++] = es), (es = a);
  var r = ua;
  a = ca;
  var i = 32 - Ke(r) - 1;
  (r &= ~(1 << i)), (s += 1);
  var n = 32 - Ke(e) + i;
  if (30 < n) {
    var o = i - (i % 5);
    (n = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ua = (1 << (32 - Ke(e) + i)) | (s << i) | r),
      (ca = n + a);
  } else (ua = (1 << n) | (s << i) | r), (ca = a);
}
function bo(a) {
  a.return !== null && (Fa(a, 1), Wu(a, 1, 0));
}
function yo(a) {
  for (; a === Dt; )
    (Dt = xs[--Ss]), (xs[Ss] = null), (qt = xs[--Ss]), (xs[Ss] = null);
  for (; a === es; )
    (es = Ve[--$e]),
      (Ve[$e] = null),
      (ca = Ve[--$e]),
      (Ve[$e] = null),
      (ua = Ve[--$e]),
      (Ve[$e] = null);
}
var qe = null,
  Ne = null,
  Z = !1,
  Ze = null;
function Qu(a, e) {
  var s = Fe(5, null, null, 0);
  (s.elementType = "DELETED"),
    (s.stateNode = e),
    (s.return = a),
    (e = a.deletions),
    e === null ? ((a.deletions = [s]), (a.flags |= 16)) : e.push(s);
}
function Fl(a, e) {
  switch (a.tag) {
    case 5:
      var s = a.type;
      return (
        (e =
          e.nodeType !== 1 || s.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((a.stateNode = e), (qe = a), (Ne = za(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = a.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((a.stateNode = e), (qe = a), (Ne = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((s = es !== null ? { id: ua, overflow: ca } : null),
            (a.memoizedState = {
              dehydrated: e,
              treeContext: s,
              retryLane: 1073741824,
            }),
            (s = Fe(18, null, null, 0)),
            (s.stateNode = e),
            (s.return = a),
            (a.child = s),
            (qe = a),
            (Ne = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function In(a) {
  return (a.mode & 1) !== 0 && (a.flags & 128) === 0;
}
function zn(a) {
  if (Z) {
    var e = Ne;
    if (e) {
      var s = e;
      if (!Fl(a, e)) {
        if (In(a)) throw Error(k(418));
        e = za(s.nextSibling);
        var r = qe;
        e && Fl(a, e)
          ? Qu(r, s)
          : ((a.flags = (a.flags & -4097) | 2), (Z = !1), (qe = a));
      }
    } else {
      if (In(a)) throw Error(k(418));
      (a.flags = (a.flags & -4097) | 2), (Z = !1), (qe = a);
    }
  }
}
function Gl(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  qe = a;
}
function rt(a) {
  if (a !== qe) return !1;
  if (!Z) return Gl(a), (Z = !0), !1;
  var e;
  if (
    ((e = a.tag !== 3) &&
      !(e = a.tag !== 5) &&
      ((e = a.type),
      (e = e !== "head" && e !== "body" && !On(a.type, a.memoizedProps))),
    e && (e = Ne))
  ) {
    if (In(a)) throw (Xu(), Error(k(418)));
    for (; e; ) Qu(a, e), (e = za(e.nextSibling));
  }
  if ((Gl(a), a.tag === 13)) {
    if (((a = a.memoizedState), (a = a !== null ? a.dehydrated : null), !a))
      throw Error(k(317));
    e: {
      for (a = a.nextSibling, e = 0; a; ) {
        if (a.nodeType === 8) {
          var s = a.data;
          if (s === "/$") {
            if (e === 0) {
              Ne = za(a.nextSibling);
              break e;
            }
            e--;
          } else (s !== "$" && s !== "$!" && s !== "$?") || e++;
        }
        a = a.nextSibling;
      }
      Ne = null;
    }
  } else Ne = qe ? za(a.stateNode.nextSibling) : null;
  return !0;
}
function Xu() {
  for (var a = Ne; a; ) a = za(a.nextSibling);
}
function Is() {
  (Ne = qe = null), (Z = !1);
}
function Ao(a) {
  Ze === null ? (Ze = [a]) : Ze.push(a);
}
var ff = xa.ReactCurrentBatchConfig;
function Xe(a, e) {
  if (a && a.defaultProps) {
    (e = ee({}, e)), (a = a.defaultProps);
    for (var s in a) e[s] === void 0 && (e[s] = a[s]);
    return e;
  }
  return e;
}
var Lt = $a(null),
  kt = null,
  js = null,
  To = null;
function Oo() {
  To = js = kt = null;
}
function Co(a) {
  var e = Lt.current;
  Y(Lt), (a._currentValue = e);
}
function Rn(a, e, s) {
  for (; a !== null; ) {
    var r = a.alternate;
    if (
      ((a.childLanes & e) !== e
        ? ((a.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      a === s)
    )
      break;
    a = a.return;
  }
}
function Os(a, e) {
  (kt = a),
    (To = js = null),
    (a = a.dependencies),
    a !== null &&
      a.firstContext !== null &&
      (a.lanes & e && (Oe = !0), (a.firstContext = null));
}
function He(a) {
  var e = a._currentValue;
  if (To !== a)
    if (((a = { context: a, memoizedValue: e, next: null }), js === null)) {
      if (kt === null) throw Error(k(308));
      (js = a), (kt.dependencies = { lanes: 0, firstContext: a });
    } else js = js.next = a;
  return e;
}
var Qa = null;
function Po(a) {
  Qa === null ? (Qa = [a]) : Qa.push(a);
}
function Yu(a, e, s, r) {
  var i = e.interleaved;
  return (
    i === null ? ((s.next = s), Po(e)) : ((s.next = i.next), (i.next = s)),
    (e.interleaved = s),
    ha(a, r)
  );
}
function ha(a, e) {
  a.lanes |= e;
  var s = a.alternate;
  for (s !== null && (s.lanes |= e), s = a, a = a.return; a !== null; )
    (a.childLanes |= e),
      (s = a.alternate),
      s !== null && (s.childLanes |= e),
      (s = a),
      (a = a.return);
  return s.tag === 3 ? s.stateNode : null;
}
var wa = !1;
function Mo(a) {
  a.updateQueue = {
    baseState: a.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zu(a, e) {
  (a = a.updateQueue),
    e.updateQueue === a &&
      (e.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects,
      });
}
function pa(a, e) {
  return {
    eventTime: a,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ra(a, e, s) {
  var r = a.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), H & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      ha(a, s)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), Po(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    ha(a, s)
  );
}
function ht(a, e, s) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (s & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= a.pendingLanes), (s |= r), (e.lanes = s), ho(a, s);
  }
}
function Hl(a, e) {
  var s = a.updateQueue,
    r = a.alternate;
  if (r !== null && ((r = r.updateQueue), s === r)) {
    var i = null,
      n = null;
    if (((s = s.firstBaseUpdate), s !== null)) {
      do {
        var o = {
          eventTime: s.eventTime,
          lane: s.lane,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        };
        n === null ? (i = n = o) : (n = n.next = o), (s = s.next);
      } while (s !== null);
      n === null ? (i = n = e) : (n = n.next = e);
    } else i = n = e;
    (s = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: n,
      shared: r.shared,
      effects: r.effects,
    }),
      (a.updateQueue = s);
    return;
  }
  (a = s.lastBaseUpdate),
    a === null ? (s.firstBaseUpdate = e) : (a.next = e),
    (s.lastBaseUpdate = e);
}
function _t(a, e, s, r) {
  var i = a.updateQueue;
  wa = !1;
  var n = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    d = i.shared.pending;
  if (d !== null) {
    i.shared.pending = null;
    var l = d,
      p = l.next;
    (l.next = null), o === null ? (n = p) : (o.next = p), (o = l);
    var c = a.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (d = c.lastBaseUpdate),
      d !== o &&
        (d === null ? (c.firstBaseUpdate = p) : (d.next = p),
        (c.lastBaseUpdate = l)));
  }
  if (n !== null) {
    var u = i.baseState;
    (o = 0), (c = p = l = null), (d = n);
    do {
      var m = d.lane,
        v = d.eventTime;
      if ((r & m) === m) {
        c !== null &&
          (c = c.next =
            {
              eventTime: v,
              lane: 0,
              tag: d.tag,
              payload: d.payload,
              callback: d.callback,
              next: null,
            });
        e: {
          var S = a,
            x = d;
          switch (((m = e), (v = s), x.tag)) {
            case 1:
              if (((S = x.payload), typeof S == "function")) {
                u = S.call(v, u, m);
                break e;
              }
              u = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = x.payload),
                (m = typeof S == "function" ? S.call(v, u, m) : S),
                m == null)
              )
                break e;
              u = ee({}, u, m);
              break e;
            case 2:
              wa = !0;
          }
        }
        d.callback !== null &&
          d.lane !== 0 &&
          ((a.flags |= 64),
          (m = i.effects),
          m === null ? (i.effects = [d]) : m.push(d));
      } else
        (v = {
          eventTime: v,
          lane: m,
          tag: d.tag,
          payload: d.payload,
          callback: d.callback,
          next: null,
        }),
          c === null ? ((p = c = v), (l = u)) : (c = c.next = v),
          (o |= m);
      if (((d = d.next), d === null)) {
        if (((d = i.shared.pending), d === null)) break;
        (m = d),
          (d = m.next),
          (m.next = null),
          (i.lastBaseUpdate = m),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (l = u),
      (i.baseState = l),
      (i.firstBaseUpdate = p),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else n === null && (i.shared.lanes = 0);
    (ss |= o), (a.lanes = o), (a.memoizedState = u);
  }
}
function Wl(a, e, s) {
  if (((a = e.effects), (e.effects = null), a !== null))
    for (e = 0; e < a.length; e++) {
      var r = a[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = s), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Ku = new Yd.Component().refs;
function Nn(a, e, s, r) {
  (e = a.memoizedState),
    (s = s(r, e)),
    (s = s == null ? e : ee({}, e, s)),
    (a.memoizedState = s),
    a.lanes === 0 && (a.updateQueue.baseState = s);
}
var oi = {
  isMounted: function (a) {
    return (a = a._reactInternals) ? ns(a) === a : !1;
  },
  enqueueSetState: function (a, e, s) {
    a = a._reactInternals;
    var r = we(),
      i = Da(a),
      n = pa(r, i);
    (n.payload = e),
      s != null && (n.callback = s),
      (e = Ra(a, n, i)),
      e !== null && (Je(e, a, i, r), ht(e, a, i));
  },
  enqueueReplaceState: function (a, e, s) {
    a = a._reactInternals;
    var r = we(),
      i = Da(a),
      n = pa(r, i);
    (n.tag = 1),
      (n.payload = e),
      s != null && (n.callback = s),
      (e = Ra(a, n, i)),
      e !== null && (Je(e, a, i, r), ht(e, a, i));
  },
  enqueueForceUpdate: function (a, e) {
    a = a._reactInternals;
    var s = we(),
      r = Da(a),
      i = pa(s, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = Ra(a, i, r)),
      e !== null && (Je(e, a, r, s), ht(e, a, r));
  },
};
function Ql(a, e, s, r, i, n, o) {
  return (
    (a = a.stateNode),
    typeof a.shouldComponentUpdate == "function"
      ? a.shouldComponentUpdate(r, n, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !br(s, r) || !br(i, n)
      : !0
  );
}
function Ju(a, e, s) {
  var r = !1,
    i = Ua,
    n = e.contextType;
  return (
    typeof n == "object" && n !== null
      ? (n = He(n))
      : ((i = Pe(e) ? Ja : je.current),
        (r = e.contextTypes),
        (n = (r = r != null) ? Ms(a, i) : Ua)),
    (e = new e(s, n)),
    (a.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = oi),
    (a.stateNode = e),
    (e._reactInternals = a),
    r &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = i),
      (a.__reactInternalMemoizedMaskedChildContext = n)),
    e
  );
}
function Xl(a, e, s, r) {
  (a = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(s, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(s, r),
    e.state !== a && oi.enqueueReplaceState(e, e.state, null);
}
function Dn(a, e, s, r) {
  var i = a.stateNode;
  (i.props = s), (i.state = a.memoizedState), (i.refs = Ku), Mo(a);
  var n = e.contextType;
  typeof n == "object" && n !== null
    ? (i.context = He(n))
    : ((n = Pe(e) ? Ja : je.current), (i.context = Ms(a, n))),
    (i.state = a.memoizedState),
    (n = e.getDerivedStateFromProps),
    typeof n == "function" && (Nn(a, e, n, s), (i.state = a.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && oi.enqueueReplaceState(i, i.state, null),
      _t(a, s, i, r),
      (i.state = a.memoizedState)),
    typeof i.componentDidMount == "function" && (a.flags |= 4194308);
}
function Ys(a, e, s) {
  if (
    ((a = s.ref), a !== null && typeof a != "function" && typeof a != "object")
  ) {
    if (s._owner) {
      if (((s = s._owner), s)) {
        if (s.tag !== 1) throw Error(k(309));
        var r = s.stateNode;
      }
      if (!r) throw Error(k(147, a));
      var i = r,
        n = "" + a;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === n
        ? e.ref
        : ((e = function (o) {
            var d = i.refs;
            d === Ku && (d = i.refs = {}),
              o === null ? delete d[n] : (d[n] = o);
          }),
          (e._stringRef = n),
          e);
    }
    if (typeof a != "string") throw Error(k(284));
    if (!s._owner) throw Error(k(290, a));
  }
  return a;
}
function tt(a, e) {
  throw (
    ((a = Object.prototype.toString.call(e)),
    Error(
      k(
        31,
        a === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : a
      )
    ))
  );
}
function Yl(a) {
  var e = a._init;
  return e(a._payload);
}
function ec(a) {
  function e(g, f) {
    if (a) {
      var h = g.deletions;
      h === null ? ((g.deletions = [f]), (g.flags |= 16)) : h.push(f);
    }
  }
  function s(g, f) {
    if (!a) return null;
    for (; f !== null; ) e(g, f), (f = f.sibling);
    return null;
  }
  function r(g, f) {
    for (g = new Map(); f !== null; )
      f.key !== null ? g.set(f.key, f) : g.set(f.index, f), (f = f.sibling);
    return g;
  }
  function i(g, f) {
    return (g = qa(g, f)), (g.index = 0), (g.sibling = null), g;
  }
  function n(g, f, h) {
    return (
      (g.index = h),
      a
        ? ((h = g.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((g.flags |= 2), f) : h)
            : ((g.flags |= 2), f))
        : ((g.flags |= 1048576), f)
    );
  }
  function o(g) {
    return a && g.alternate === null && (g.flags |= 2), g;
  }
  function d(g, f, h, E) {
    return f === null || f.tag !== 6
      ? ((f = Wi(h, g.mode, E)), (f.return = g), f)
      : ((f = i(f, h)), (f.return = g), f);
  }
  function l(g, f, h, E) {
    var b = h.type;
    return b === ps
      ? c(g, f, h.props.children, E, h.key)
      : f !== null &&
        (f.elementType === b ||
          (typeof b == "object" &&
            b !== null &&
            b.$$typeof === Ea &&
            Yl(b) === f.type))
      ? ((E = i(f, h.props)), (E.ref = Ys(g, f, h)), (E.return = g), E)
      : ((E = Et(h.type, h.key, h.props, null, g.mode, E)),
        (E.ref = Ys(g, f, h)),
        (E.return = g),
        E);
  }
  function p(g, f, h, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Qi(h, g.mode, E)), (f.return = g), f)
      : ((f = i(f, h.children || [])), (f.return = g), f);
  }
  function c(g, f, h, E, b) {
    return f === null || f.tag !== 7
      ? ((f = Za(h, g.mode, E, b)), (f.return = g), f)
      : ((f = i(f, h)), (f.return = g), f);
  }
  function u(g, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Wi("" + f, g.mode, h)), (f.return = g), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Wr:
          return (
            (h = Et(f.type, f.key, f.props, null, g.mode, h)),
            (h.ref = Ys(g, null, f)),
            (h.return = g),
            h
          );
        case cs:
          return (f = Qi(f, g.mode, h)), (f.return = g), f;
        case Ea:
          var E = f._init;
          return u(g, E(f._payload), h);
      }
      if (er(f) || Gs(f))
        return (f = Za(f, g.mode, h, null)), (f.return = g), f;
      tt(g, f);
    }
    return null;
  }
  function m(g, f, h, E) {
    var b = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return b !== null ? null : d(g, f, "" + h, E);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Wr:
          return h.key === b ? l(g, f, h, E) : null;
        case cs:
          return h.key === b ? p(g, f, h, E) : null;
        case Ea:
          return (b = h._init), m(g, f, b(h._payload), E);
      }
      if (er(h) || Gs(h)) return b !== null ? null : c(g, f, h, E, null);
      tt(g, h);
    }
    return null;
  }
  function v(g, f, h, E, b) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (g = g.get(h) || null), d(f, g, "" + E, b);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Wr:
          return (g = g.get(E.key === null ? h : E.key) || null), l(f, g, E, b);
        case cs:
          return (g = g.get(E.key === null ? h : E.key) || null), p(f, g, E, b);
        case Ea:
          var y = E._init;
          return v(g, f, h, y(E._payload), b);
      }
      if (er(E) || Gs(E)) return (g = g.get(h) || null), c(f, g, E, b, null);
      tt(f, E);
    }
    return null;
  }
  function S(g, f, h, E) {
    for (
      var b = null, y = null, z = f, C = (f = 0), T = null;
      z !== null && C < h.length;
      C++
    ) {
      z.index > C ? ((T = z), (z = null)) : (T = z.sibling);
      var O = m(g, z, h[C], E);
      if (O === null) {
        z === null && (z = T);
        break;
      }
      a && z && O.alternate === null && e(g, z),
        (f = n(O, f, C)),
        y === null ? (b = O) : (y.sibling = O),
        (y = O),
        (z = T);
    }
    if (C === h.length) return s(g, z), Z && Fa(g, C), b;
    if (z === null) {
      for (; C < h.length; C++)
        (z = u(g, h[C], E)),
          z !== null &&
            ((f = n(z, f, C)), y === null ? (b = z) : (y.sibling = z), (y = z));
      return Z && Fa(g, C), b;
    }
    for (z = r(g, z); C < h.length; C++)
      (T = v(z, g, C, h[C], E)),
        T !== null &&
          (a && T.alternate !== null && z.delete(T.key === null ? C : T.key),
          (f = n(T, f, C)),
          y === null ? (b = T) : (y.sibling = T),
          (y = T));
    return (
      a &&
        z.forEach(function (N) {
          return e(g, N);
        }),
      Z && Fa(g, C),
      b
    );
  }
  function x(g, f, h, E) {
    var b = Gs(h);
    if (typeof b != "function") throw Error(k(150));
    if (((h = b.call(h)), h == null)) throw Error(k(151));
    for (
      var y = (b = null), z = f, C = (f = 0), T = null, O = h.next();
      z !== null && !O.done;
      C++, O = h.next()
    ) {
      z.index > C ? ((T = z), (z = null)) : (T = z.sibling);
      var N = m(g, z, O.value, E);
      if (N === null) {
        z === null && (z = T);
        break;
      }
      a && z && N.alternate === null && e(g, z),
        (f = n(N, f, C)),
        y === null ? (b = N) : (y.sibling = N),
        (y = N),
        (z = T);
    }
    if (O.done) return s(g, z), Z && Fa(g, C), b;
    if (z === null) {
      for (; !O.done; C++, O = h.next())
        (O = u(g, O.value, E)),
          O !== null &&
            ((f = n(O, f, C)), y === null ? (b = O) : (y.sibling = O), (y = O));
      return Z && Fa(g, C), b;
    }
    for (z = r(g, z); !O.done; C++, O = h.next())
      (O = v(z, g, C, O.value, E)),
        O !== null &&
          (a && O.alternate !== null && z.delete(O.key === null ? C : O.key),
          (f = n(O, f, C)),
          y === null ? (b = O) : (y.sibling = O),
          (y = O));
    return (
      a &&
        z.forEach(function (R) {
          return e(g, R);
        }),
      Z && Fa(g, C),
      b
    );
  }
  function j(g, f, h, E) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === ps &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Wr:
          e: {
            for (var b = h.key, y = f; y !== null; ) {
              if (y.key === b) {
                if (((b = h.type), b === ps)) {
                  if (y.tag === 7) {
                    s(g, y.sibling),
                      (f = i(y, h.props.children)),
                      (f.return = g),
                      (g = f);
                    break e;
                  }
                } else if (
                  y.elementType === b ||
                  (typeof b == "object" &&
                    b !== null &&
                    b.$$typeof === Ea &&
                    Yl(b) === y.type)
                ) {
                  s(g, y.sibling),
                    (f = i(y, h.props)),
                    (f.ref = Ys(g, y, h)),
                    (f.return = g),
                    (g = f);
                  break e;
                }
                s(g, y);
                break;
              } else e(g, y);
              y = y.sibling;
            }
            h.type === ps
              ? ((f = Za(h.props.children, g.mode, E, h.key)),
                (f.return = g),
                (g = f))
              : ((E = Et(h.type, h.key, h.props, null, g.mode, E)),
                (E.ref = Ys(g, f, h)),
                (E.return = g),
                (g = E));
          }
          return o(g);
        case cs:
          e: {
            for (y = h.key; f !== null; ) {
              if (f.key === y)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  s(g, f.sibling),
                    (f = i(f, h.children || [])),
                    (f.return = g),
                    (g = f);
                  break e;
                } else {
                  s(g, f);
                  break;
                }
              else e(g, f);
              f = f.sibling;
            }
            (f = Qi(h, g.mode, E)), (f.return = g), (g = f);
          }
          return o(g);
        case Ea:
          return (y = h._init), j(g, f, y(h._payload), E);
      }
      if (er(h)) return S(g, f, h, E);
      if (Gs(h)) return x(g, f, h, E);
      tt(g, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (s(g, f.sibling), (f = i(f, h)), (f.return = g), (g = f))
          : (s(g, f), (f = Wi(h, g.mode, E)), (f.return = g), (g = f)),
        o(g))
      : s(g, f);
  }
  return j;
}
var zs = ec(!0),
  ac = ec(!1),
  Ur = {},
  ia = $a(Ur),
  Or = $a(Ur),
  Cr = $a(Ur);
function Xa(a) {
  if (a === Ur) throw Error(k(174));
  return a;
}
function Io(a, e) {
  switch ((Q(Cr, e), Q(Or, a), Q(ia, Ur), (a = e.nodeType), a)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : mn(null, "");
      break;
    default:
      (a = a === 8 ? e.parentNode : e),
        (e = a.namespaceURI || null),
        (a = a.tagName),
        (e = mn(e, a));
  }
  Y(ia), Q(ia, e);
}
function Rs() {
  Y(ia), Y(Or), Y(Cr);
}
function sc(a) {
  Xa(Cr.current);
  var e = Xa(ia.current),
    s = mn(e, a.type);
  e !== s && (Q(Or, a), Q(ia, s));
}
function zo(a) {
  Or.current === a && (Y(ia), Y(Or));
}
var K = $a(0);
function Ut(a) {
  for (var e = a; e !== null; ) {
    if (e.tag === 13) {
      var s = e.memoizedState;
      if (
        s !== null &&
        ((s = s.dehydrated), s === null || s.data === "$?" || s.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === a) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === a) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Vi = [];
function Ro() {
  for (var a = 0; a < Vi.length; a++)
    Vi[a]._workInProgressVersionPrimary = null;
  Vi.length = 0;
}
var gt = xa.ReactCurrentDispatcher,
  $i = xa.ReactCurrentBatchConfig,
  as = 0,
  J = null,
  oe = null,
  de = null,
  Vt = !1,
  ur = !1,
  Pr = 0,
  hf = 0;
function ve() {
  throw Error(k(321));
}
function No(a, e) {
  if (e === null) return !1;
  for (var s = 0; s < e.length && s < a.length; s++)
    if (!ea(a[s], e[s])) return !1;
  return !0;
}
function Do(a, e, s, r, i, n) {
  if (
    ((as = n),
    (J = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (gt.current = a === null || a.memoizedState === null ? Sf : jf),
    (a = s(r, i)),
    ur)
  ) {
    n = 0;
    do {
      if (((ur = !1), (Pr = 0), 25 <= n)) throw Error(k(301));
      (n += 1),
        (de = oe = null),
        (e.updateQueue = null),
        (gt.current = Ef),
        (a = s(r, i));
    } while (ur);
  }
  if (
    ((gt.current = $t),
    (e = oe !== null && oe.next !== null),
    (as = 0),
    (de = oe = J = null),
    (Vt = !1),
    e)
  )
    throw Error(k(300));
  return a;
}
function qo() {
  var a = Pr !== 0;
  return (Pr = 0), a;
}
function sa() {
  var a = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return de === null ? (J.memoizedState = de = a) : (de = de.next = a), de;
}
function We() {
  if (oe === null) {
    var a = J.alternate;
    a = a !== null ? a.memoizedState : null;
  } else a = oe.next;
  var e = de === null ? J.memoizedState : de.next;
  if (e !== null) (de = e), (oe = a);
  else {
    if (a === null) throw Error(k(310));
    (oe = a),
      (a = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      de === null ? (J.memoizedState = de = a) : (de = de.next = a);
  }
  return de;
}
function Mr(a, e) {
  return typeof e == "function" ? e(a) : e;
}
function Bi(a) {
  var e = We(),
    s = e.queue;
  if (s === null) throw Error(k(311));
  s.lastRenderedReducer = a;
  var r = oe,
    i = r.baseQueue,
    n = s.pending;
  if (n !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = n.next), (n.next = o);
    }
    (r.baseQueue = i = n), (s.pending = null);
  }
  if (i !== null) {
    (n = i.next), (r = r.baseState);
    var d = (o = null),
      l = null,
      p = n;
    do {
      var c = p.lane;
      if ((as & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
          (r = p.hasEagerState ? p.eagerState : a(r, p.action));
      else {
        var u = {
          lane: c,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null,
        };
        l === null ? ((d = l = u), (o = r)) : (l = l.next = u),
          (J.lanes |= c),
          (ss |= c);
      }
      p = p.next;
    } while (p !== null && p !== n);
    l === null ? (o = r) : (l.next = d),
      ea(r, e.memoizedState) || (Oe = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = l),
      (s.lastRenderedState = r);
  }
  if (((a = s.interleaved), a !== null)) {
    i = a;
    do (n = i.lane), (J.lanes |= n), (ss |= n), (i = i.next);
    while (i !== a);
  } else i === null && (s.lanes = 0);
  return [e.memoizedState, s.dispatch];
}
function Fi(a) {
  var e = We(),
    s = e.queue;
  if (s === null) throw Error(k(311));
  s.lastRenderedReducer = a;
  var r = s.dispatch,
    i = s.pending,
    n = e.memoizedState;
  if (i !== null) {
    s.pending = null;
    var o = (i = i.next);
    do (n = a(n, o.action)), (o = o.next);
    while (o !== i);
    ea(n, e.memoizedState) || (Oe = !0),
      (e.memoizedState = n),
      e.baseQueue === null && (e.baseState = n),
      (s.lastRenderedState = n);
  }
  return [n, r];
}
function rc() {}
function tc(a, e) {
  var s = J,
    r = We(),
    i = e(),
    n = !ea(r.memoizedState, i);
  if (
    (n && ((r.memoizedState = i), (Oe = !0)),
    (r = r.queue),
    Lo(oc.bind(null, s, r, a), [a]),
    r.getSnapshot !== e || n || (de !== null && de.memoizedState.tag & 1))
  ) {
    if (
      ((s.flags |= 2048),
      Ir(9, nc.bind(null, s, r, i, e), void 0, null),
      ue === null)
    )
      throw Error(k(349));
    as & 30 || ic(s, e, i);
  }
  return i;
}
function ic(a, e, s) {
  (a.flags |= 16384),
    (a = { getSnapshot: e, value: s }),
    (e = J.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (J.updateQueue = e),
        (e.stores = [a]))
      : ((s = e.stores), s === null ? (e.stores = [a]) : s.push(a));
}
function nc(a, e, s, r) {
  (e.value = s), (e.getSnapshot = r), lc(e) && dc(a);
}
function oc(a, e, s) {
  return s(function () {
    lc(e) && dc(a);
  });
}
function lc(a) {
  var e = a.getSnapshot;
  a = a.value;
  try {
    var s = e();
    return !ea(a, s);
  } catch {
    return !0;
  }
}
function dc(a) {
  var e = ha(a, 1);
  e !== null && Je(e, a, 1, -1);
}
function Zl(a) {
  var e = sa();
  return (
    typeof a == "function" && (a = a()),
    (e.memoizedState = e.baseState = a),
    (a = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mr,
      lastRenderedState: a,
    }),
    (e.queue = a),
    (a = a.dispatch = xf.bind(null, J, a)),
    [e.memoizedState, a]
  );
}
function Ir(a, e, s, r) {
  return (
    (a = { tag: a, create: e, destroy: s, deps: r, next: null }),
    (e = J.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (J.updateQueue = e),
        (e.lastEffect = a.next = a))
      : ((s = e.lastEffect),
        s === null
          ? (e.lastEffect = a.next = a)
          : ((r = s.next), (s.next = a), (a.next = r), (e.lastEffect = a))),
    a
  );
}
function uc() {
  return We().memoizedState;
}
function vt(a, e, s, r) {
  var i = sa();
  (J.flags |= a),
    (i.memoizedState = Ir(1 | e, s, void 0, r === void 0 ? null : r));
}
function li(a, e, s, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var n = void 0;
  if (oe !== null) {
    var o = oe.memoizedState;
    if (((n = o.destroy), r !== null && No(r, o.deps))) {
      i.memoizedState = Ir(e, s, n, r);
      return;
    }
  }
  (J.flags |= a), (i.memoizedState = Ir(1 | e, s, n, r));
}
function Kl(a, e) {
  return vt(8390656, 8, a, e);
}
function Lo(a, e) {
  return li(2048, 8, a, e);
}
function cc(a, e) {
  return li(4, 2, a, e);
}
function pc(a, e) {
  return li(4, 4, a, e);
}
function mc(a, e) {
  if (typeof e == "function")
    return (
      (a = a()),
      e(a),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (a = a()),
      (e.current = a),
      function () {
        e.current = null;
      }
    );
}
function fc(a, e, s) {
  return (
    (s = s != null ? s.concat([a]) : null), li(4, 4, mc.bind(null, e, a), s)
  );
}
function ko() {}
function hc(a, e) {
  var s = We();
  e = e === void 0 ? null : e;
  var r = s.memoizedState;
  return r !== null && e !== null && No(e, r[1])
    ? r[0]
    : ((s.memoizedState = [a, e]), a);
}
function gc(a, e) {
  var s = We();
  e = e === void 0 ? null : e;
  var r = s.memoizedState;
  return r !== null && e !== null && No(e, r[1])
    ? r[0]
    : ((a = a()), (s.memoizedState = [a, e]), a);
}
function vc(a, e, s) {
  return as & 21
    ? (ea(s, e) || ((s = ju()), (J.lanes |= s), (ss |= s), (a.baseState = !0)),
      e)
    : (a.baseState && ((a.baseState = !1), (Oe = !0)), (a.memoizedState = s));
}
function gf(a, e) {
  var s = W;
  (W = s !== 0 && 4 > s ? s : 4), a(!0);
  var r = $i.transition;
  $i.transition = {};
  try {
    a(!1), e();
  } finally {
    (W = s), ($i.transition = r);
  }
}
function xc() {
  return We().memoizedState;
}
function vf(a, e, s) {
  var r = Da(a);
  if (
    ((s = {
      lane: r,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sc(a))
  )
    jc(e, s);
  else if (((s = Yu(a, e, s, r)), s !== null)) {
    var i = we();
    Je(s, a, r, i), Ec(s, e, r);
  }
}
function xf(a, e, s) {
  var r = Da(a),
    i = { lane: r, action: s, hasEagerState: !1, eagerState: null, next: null };
  if (Sc(a)) jc(e, i);
  else {
    var n = a.alternate;
    if (
      a.lanes === 0 &&
      (n === null || n.lanes === 0) &&
      ((n = e.lastRenderedReducer), n !== null)
    )
      try {
        var o = e.lastRenderedState,
          d = n(o, s);
        if (((i.hasEagerState = !0), (i.eagerState = d), ea(d, o))) {
          var l = e.interleaved;
          l === null
            ? ((i.next = i), Po(e))
            : ((i.next = l.next), (l.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (s = Yu(a, e, i, r)),
      s !== null && ((i = we()), Je(s, a, r, i), Ec(s, e, r));
  }
}
function Sc(a) {
  var e = a.alternate;
  return a === J || (e !== null && e === J);
}
function jc(a, e) {
  ur = Vt = !0;
  var s = a.pending;
  s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
    (a.pending = e);
}
function Ec(a, e, s) {
  if (s & 4194240) {
    var r = e.lanes;
    (r &= a.pendingLanes), (s |= r), (e.lanes = s), ho(a, s);
  }
}
var $t = {
    readContext: He,
    useCallback: ve,
    useContext: ve,
    useEffect: ve,
    useImperativeHandle: ve,
    useInsertionEffect: ve,
    useLayoutEffect: ve,
    useMemo: ve,
    useReducer: ve,
    useRef: ve,
    useState: ve,
    useDebugValue: ve,
    useDeferredValue: ve,
    useTransition: ve,
    useMutableSource: ve,
    useSyncExternalStore: ve,
    useId: ve,
    unstable_isNewReconciler: !1,
  },
  Sf = {
    readContext: He,
    useCallback: function (a, e) {
      return (sa().memoizedState = [a, e === void 0 ? null : e]), a;
    },
    useContext: He,
    useEffect: Kl,
    useImperativeHandle: function (a, e, s) {
      return (
        (s = s != null ? s.concat([a]) : null),
        vt(4194308, 4, mc.bind(null, e, a), s)
      );
    },
    useLayoutEffect: function (a, e) {
      return vt(4194308, 4, a, e);
    },
    useInsertionEffect: function (a, e) {
      return vt(4, 2, a, e);
    },
    useMemo: function (a, e) {
      var s = sa();
      return (
        (e = e === void 0 ? null : e), (a = a()), (s.memoizedState = [a, e]), a
      );
    },
    useReducer: function (a, e, s) {
      var r = sa();
      return (
        (e = s !== void 0 ? s(e) : e),
        (r.memoizedState = r.baseState = e),
        (a = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: e,
        }),
        (r.queue = a),
        (a = a.dispatch = vf.bind(null, J, a)),
        [r.memoizedState, a]
      );
    },
    useRef: function (a) {
      var e = sa();
      return (a = { current: a }), (e.memoizedState = a);
    },
    useState: Zl,
    useDebugValue: ko,
    useDeferredValue: function (a) {
      return (sa().memoizedState = a);
    },
    useTransition: function () {
      var a = Zl(!1),
        e = a[0];
      return (a = gf.bind(null, a[1])), (sa().memoizedState = a), [e, a];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (a, e, s) {
      var r = J,
        i = sa();
      if (Z) {
        if (s === void 0) throw Error(k(407));
        s = s();
      } else {
        if (((s = e()), ue === null)) throw Error(k(349));
        as & 30 || ic(r, e, s);
      }
      i.memoizedState = s;
      var n = { value: s, getSnapshot: e };
      return (
        (i.queue = n),
        Kl(oc.bind(null, r, n, a), [a]),
        (r.flags |= 2048),
        Ir(9, nc.bind(null, r, n, s, e), void 0, null),
        s
      );
    },
    useId: function () {
      var a = sa(),
        e = ue.identifierPrefix;
      if (Z) {
        var s = ca,
          r = ua;
        (s = (r & ~(1 << (32 - Ke(r) - 1))).toString(32) + s),
          (e = ":" + e + "R" + s),
          (s = Pr++),
          0 < s && (e += "H" + s.toString(32)),
          (e += ":");
      } else (s = hf++), (e = ":" + e + "r" + s.toString(32) + ":");
      return (a.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  jf = {
    readContext: He,
    useCallback: hc,
    useContext: He,
    useEffect: Lo,
    useImperativeHandle: fc,
    useInsertionEffect: cc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: Bi,
    useRef: uc,
    useState: function () {
      return Bi(Mr);
    },
    useDebugValue: ko,
    useDeferredValue: function (a) {
      var e = We();
      return vc(e, oe.memoizedState, a);
    },
    useTransition: function () {
      var a = Bi(Mr)[0],
        e = We().memoizedState;
      return [a, e];
    },
    useMutableSource: rc,
    useSyncExternalStore: tc,
    useId: xc,
    unstable_isNewReconciler: !1,
  },
  Ef = {
    readContext: He,
    useCallback: hc,
    useContext: He,
    useEffect: Lo,
    useImperativeHandle: fc,
    useInsertionEffect: cc,
    useLayoutEffect: pc,
    useMemo: gc,
    useReducer: Fi,
    useRef: uc,
    useState: function () {
      return Fi(Mr);
    },
    useDebugValue: ko,
    useDeferredValue: function (a) {
      var e = We();
      return oe === null ? (e.memoizedState = a) : vc(e, oe.memoizedState, a);
    },
    useTransition: function () {
      var a = Fi(Mr)[0],
        e = We().memoizedState;
      return [a, e];
    },
    useMutableSource: rc,
    useSyncExternalStore: tc,
    useId: xc,
    unstable_isNewReconciler: !1,
  };
function Ns(a, e) {
  try {
    var s = "",
      r = e;
    do (s += Qp(r)), (r = r.return);
    while (r);
    var i = s;
  } catch (n) {
    i =
      `
Error generating stack: ` +
      n.message +
      `
` +
      n.stack;
  }
  return { value: a, source: e, stack: i, digest: null };
}
function Gi(a, e, s) {
  return { value: a, source: null, stack: s ?? null, digest: e ?? null };
}
function qn(a, e) {
  try {
    console.error(e.value);
  } catch (s) {
    setTimeout(function () {
      throw s;
    });
  }
}
var wf = typeof WeakMap == "function" ? WeakMap : Map;
function wc(a, e, s) {
  (s = pa(-1, s)), (s.tag = 3), (s.payload = { element: null });
  var r = e.value;
  return (
    (s.callback = function () {
      Ft || ((Ft = !0), (Hn = r)), qn(a, e);
    }),
    s
  );
}
function bc(a, e, s) {
  (s = pa(-1, s)), (s.tag = 3);
  var r = a.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (s.payload = function () {
      return r(i);
    }),
      (s.callback = function () {
        qn(a, e);
      });
  }
  var n = a.stateNode;
  return (
    n !== null &&
      typeof n.componentDidCatch == "function" &&
      (s.callback = function () {
        qn(a, e),
          typeof r != "function" &&
            (Na === null ? (Na = new Set([this])) : Na.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    s
  );
}
function Jl(a, e, s) {
  var r = a.pingCache;
  if (r === null) {
    r = a.pingCache = new wf();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(s) || (i.add(s), (a = qf.bind(null, a, e, s)), e.then(a, a));
}
function ed(a) {
  do {
    var e;
    if (
      ((e = a.tag === 13) &&
        ((e = a.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return a;
    a = a.return;
  } while (a !== null);
  return null;
}
function ad(a, e, s, r, i) {
  return a.mode & 1
    ? ((a.flags |= 65536), (a.lanes = i), a)
    : (a === e
        ? (a.flags |= 65536)
        : ((a.flags |= 128),
          (s.flags |= 131072),
          (s.flags &= -52805),
          s.tag === 1 &&
            (s.alternate === null
              ? (s.tag = 17)
              : ((e = pa(-1, 1)), (e.tag = 2), Ra(s, e, 1))),
          (s.lanes |= 1)),
      a);
}
var bf = xa.ReactCurrentOwner,
  Oe = !1;
function Ee(a, e, s, r) {
  e.child = a === null ? ac(e, null, s, r) : zs(e, a.child, s, r);
}
function sd(a, e, s, r, i) {
  s = s.render;
  var n = e.ref;
  return (
    Os(e, i),
    (r = Do(a, e, s, r, n, i)),
    (s = qo()),
    a !== null && !Oe
      ? ((e.updateQueue = a.updateQueue),
        (e.flags &= -2053),
        (a.lanes &= ~i),
        ga(a, e, i))
      : (Z && s && bo(e), (e.flags |= 1), Ee(a, e, r, i), e.child)
  );
}
function rd(a, e, s, r, i) {
  if (a === null) {
    var n = s.type;
    return typeof n == "function" &&
      !Ho(n) &&
      n.defaultProps === void 0 &&
      s.compare === null &&
      s.defaultProps === void 0
      ? ((e.tag = 15), (e.type = n), yc(a, e, n, r, i))
      : ((a = Et(s.type, null, r, e, e.mode, i)),
        (a.ref = e.ref),
        (a.return = e),
        (e.child = a));
  }
  if (((n = a.child), !(a.lanes & i))) {
    var o = n.memoizedProps;
    if (
      ((s = s.compare), (s = s !== null ? s : br), s(o, r) && a.ref === e.ref)
    )
      return ga(a, e, i);
  }
  return (
    (e.flags |= 1),
    (a = qa(n, r)),
    (a.ref = e.ref),
    (a.return = e),
    (e.child = a)
  );
}
function yc(a, e, s, r, i) {
  if (a !== null) {
    var n = a.memoizedProps;
    if (br(n, r) && a.ref === e.ref)
      if (((Oe = !1), (e.pendingProps = r = n), (a.lanes & i) !== 0))
        a.flags & 131072 && (Oe = !0);
      else return (e.lanes = a.lanes), ga(a, e, i);
  }
  return Ln(a, e, s, r, i);
}
function Ac(a, e, s) {
  var r = e.pendingProps,
    i = r.children,
    n = a !== null ? a.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(ws, ze),
        (ze |= s);
    else {
      if (!(s & 1073741824))
        return (
          (a = n !== null ? n.baseLanes | s : s),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: a,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          Q(ws, ze),
          (ze |= a),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = n !== null ? n.baseLanes : s),
        Q(ws, ze),
        (ze |= r);
    }
  else
    n !== null ? ((r = n.baseLanes | s), (e.memoizedState = null)) : (r = s),
      Q(ws, ze),
      (ze |= r);
  return Ee(a, e, i, s), e.child;
}
function Tc(a, e) {
  var s = e.ref;
  ((a === null && s !== null) || (a !== null && a.ref !== s)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Ln(a, e, s, r, i) {
  var n = Pe(s) ? Ja : je.current;
  return (
    (n = Ms(e, n)),
    Os(e, i),
    (s = Do(a, e, s, r, n, i)),
    (r = qo()),
    a !== null && !Oe
      ? ((e.updateQueue = a.updateQueue),
        (e.flags &= -2053),
        (a.lanes &= ~i),
        ga(a, e, i))
      : (Z && r && bo(e), (e.flags |= 1), Ee(a, e, s, i), e.child)
  );
}
function td(a, e, s, r, i) {
  if (Pe(s)) {
    var n = !0;
    Nt(e);
  } else n = !1;
  if ((Os(e, i), e.stateNode === null))
    xt(a, e), Ju(e, s, r), Dn(e, s, r, i), (r = !0);
  else if (a === null) {
    var o = e.stateNode,
      d = e.memoizedProps;
    o.props = d;
    var l = o.context,
      p = s.contextType;
    typeof p == "object" && p !== null
      ? (p = He(p))
      : ((p = Pe(s) ? Ja : je.current), (p = Ms(e, p)));
    var c = s.getDerivedStateFromProps,
      u =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    u ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((d !== r || l !== p) && Xl(e, o, r, p)),
      (wa = !1);
    var m = e.memoizedState;
    (o.state = m),
      _t(e, r, o, i),
      (l = e.memoizedState),
      d !== r || m !== l || Ce.current || wa
        ? (typeof c == "function" && (Nn(e, s, c, r), (l = e.memoizedState)),
          (d = wa || Ql(e, s, d, r, m, l, p))
            ? (u ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = p),
          (r = d))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      Zu(a, e),
      (d = e.memoizedProps),
      (p = e.type === e.elementType ? d : Xe(e.type, d)),
      (o.props = p),
      (u = e.pendingProps),
      (m = o.context),
      (l = s.contextType),
      typeof l == "object" && l !== null
        ? (l = He(l))
        : ((l = Pe(s) ? Ja : je.current), (l = Ms(e, l)));
    var v = s.getDerivedStateFromProps;
    (c =
      typeof v == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((d !== u || m !== l) && Xl(e, o, r, l)),
      (wa = !1),
      (m = e.memoizedState),
      (o.state = m),
      _t(e, r, o, i);
    var S = e.memoizedState;
    d !== u || m !== S || Ce.current || wa
      ? (typeof v == "function" && (Nn(e, s, v, r), (S = e.memoizedState)),
        (p = wa || Ql(e, s, p, r, m, S, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (d === a.memoizedProps && m === a.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (d === a.memoizedProps && m === a.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = l),
        (r = p))
      : (typeof o.componentDidUpdate != "function" ||
          (d === a.memoizedProps && m === a.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (d === a.memoizedProps && m === a.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return kn(a, e, s, r, n, i);
}
function kn(a, e, s, r, i, n) {
  Tc(a, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && Bl(e, s, !1), ga(a, e, n);
  (r = e.stateNode), (bf.current = e);
  var d =
    o && typeof s.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    a !== null && o
      ? ((e.child = zs(e, a.child, null, n)), (e.child = zs(e, null, d, n)))
      : Ee(a, e, d, n),
    (e.memoizedState = r.state),
    i && Bl(e, s, !0),
    e.child
  );
}
function Oc(a) {
  var e = a.stateNode;
  e.pendingContext
    ? $l(a, e.pendingContext, e.pendingContext !== e.context)
    : e.context && $l(a, e.context, !1),
    Io(a, e.containerInfo);
}
function id(a, e, s, r, i) {
  return Is(), Ao(i), (e.flags |= 256), Ee(a, e, s, r), e.child;
}
var _n = { dehydrated: null, treeContext: null, retryLane: 0 };
function Un(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function Cc(a, e, s) {
  var r = e.pendingProps,
    i = K.current,
    n = !1,
    o = (e.flags & 128) !== 0,
    d;
  if (
    ((d = o) ||
      (d = a !== null && a.memoizedState === null ? !1 : (i & 2) !== 0),
    d
      ? ((n = !0), (e.flags &= -129))
      : (a === null || a.memoizedState !== null) && (i |= 1),
    Q(K, i & 1),
    a === null)
  )
    return (
      zn(e),
      (a = e.memoizedState),
      a !== null && ((a = a.dehydrated), a !== null)
        ? (e.mode & 1
            ? a.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (a = r.fallback),
          n
            ? ((r = e.mode),
              (n = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && n !== null
                ? ((n.childLanes = 0), (n.pendingProps = o))
                : (n = ci(o, r, 0, null)),
              (a = Za(a, r, s, null)),
              (n.return = e),
              (a.return = e),
              (n.sibling = a),
              (e.child = n),
              (e.child.memoizedState = Un(s)),
              (e.memoizedState = _n),
              a)
            : _o(e, o))
    );
  if (((i = a.memoizedState), i !== null && ((d = i.dehydrated), d !== null)))
    return yf(a, e, o, r, d, i, s);
  if (n) {
    (n = r.fallback), (o = e.mode), (i = a.child), (d = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (e.deletions = null))
        : ((r = qa(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      d !== null ? (n = qa(d, n)) : ((n = Za(n, o, s, null)), (n.flags |= 2)),
      (n.return = e),
      (r.return = e),
      (r.sibling = n),
      (e.child = r),
      (r = n),
      (n = e.child),
      (o = a.child.memoizedState),
      (o =
        o === null
          ? Un(s)
          : {
              baseLanes: o.baseLanes | s,
              cachePool: null,
              transitions: o.transitions,
            }),
      (n.memoizedState = o),
      (n.childLanes = a.childLanes & ~s),
      (e.memoizedState = _n),
      r
    );
  }
  return (
    (n = a.child),
    (a = n.sibling),
    (r = qa(n, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = s),
    (r.return = e),
    (r.sibling = null),
    a !== null &&
      ((s = e.deletions),
      s === null ? ((e.deletions = [a]), (e.flags |= 16)) : s.push(a)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function _o(a, e) {
  return (
    (e = ci({ mode: "visible", children: e }, a.mode, 0, null)),
    (e.return = a),
    (a.child = e)
  );
}
function it(a, e, s, r) {
  return (
    r !== null && Ao(r),
    zs(e, a.child, null, s),
    (a = _o(e, e.pendingProps.children)),
    (a.flags |= 2),
    (e.memoizedState = null),
    a
  );
}
function yf(a, e, s, r, i, n, o) {
  if (s)
    return e.flags & 256
      ? ((e.flags &= -257), (r = Gi(Error(k(422)))), it(a, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = a.child), (e.flags |= 128), null)
      : ((n = r.fallback),
        (i = e.mode),
        (r = ci({ mode: "visible", children: r.children }, i, 0, null)),
        (n = Za(n, i, o, null)),
        (n.flags |= 2),
        (r.return = e),
        (n.return = e),
        (r.sibling = n),
        (e.child = r),
        e.mode & 1 && zs(e, a.child, null, o),
        (e.child.memoizedState = Un(o)),
        (e.memoizedState = _n),
        n);
  if (!(e.mode & 1)) return it(a, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var d = r.dgst;
    return (r = d), (n = Error(k(419))), (r = Gi(n, r, void 0)), it(a, e, o, r);
  }
  if (((d = (o & a.childLanes) !== 0), Oe || d)) {
    if (((r = ue), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== n.retryLane &&
          ((n.retryLane = i), ha(a, i), Je(r, a, i, -1));
    }
    return Go(), (r = Gi(Error(k(421)))), it(a, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = a.child),
      (e = Lf.bind(null, a)),
      (i._reactRetry = e),
      null)
    : ((a = n.treeContext),
      (Ne = za(i.nextSibling)),
      (qe = e),
      (Z = !0),
      (Ze = null),
      a !== null &&
        ((Ve[$e++] = ua),
        (Ve[$e++] = ca),
        (Ve[$e++] = es),
        (ua = a.id),
        (ca = a.overflow),
        (es = e)),
      (e = _o(e, r.children)),
      (e.flags |= 4096),
      e);
}
function nd(a, e, s) {
  a.lanes |= e;
  var r = a.alternate;
  r !== null && (r.lanes |= e), Rn(a.return, e, s);
}
function Hi(a, e, s, r, i) {
  var n = a.memoizedState;
  n === null
    ? (a.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: s,
        tailMode: i,
      })
    : ((n.isBackwards = e),
      (n.rendering = null),
      (n.renderingStartTime = 0),
      (n.last = r),
      (n.tail = s),
      (n.tailMode = i));
}
function Pc(a, e, s) {
  var r = e.pendingProps,
    i = r.revealOrder,
    n = r.tail;
  if ((Ee(a, e, r.children, s), (r = K.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (a !== null && a.flags & 128)
      e: for (a = e.child; a !== null; ) {
        if (a.tag === 13) a.memoizedState !== null && nd(a, s, e);
        else if (a.tag === 19) nd(a, s, e);
        else if (a.child !== null) {
          (a.child.return = a), (a = a.child);
          continue;
        }
        if (a === e) break e;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e) break e;
          a = a.return;
        }
        (a.sibling.return = a.return), (a = a.sibling);
      }
    r &= 1;
  }
  if ((Q(K, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (s = e.child, i = null; s !== null; )
          (a = s.alternate),
            a !== null && Ut(a) === null && (i = s),
            (s = s.sibling);
        (s = i),
          s === null
            ? ((i = e.child), (e.child = null))
            : ((i = s.sibling), (s.sibling = null)),
          Hi(e, !1, i, s, n);
        break;
      case "backwards":
        for (s = null, i = e.child, e.child = null; i !== null; ) {
          if (((a = i.alternate), a !== null && Ut(a) === null)) {
            e.child = i;
            break;
          }
          (a = i.sibling), (i.sibling = s), (s = i), (i = a);
        }
        Hi(e, !0, s, null, n);
        break;
      case "together":
        Hi(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function xt(a, e) {
  !(e.mode & 1) &&
    a !== null &&
    ((a.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function ga(a, e, s) {
  if (
    (a !== null && (e.dependencies = a.dependencies),
    (ss |= e.lanes),
    !(s & e.childLanes))
  )
    return null;
  if (a !== null && e.child !== a.child) throw Error(k(153));
  if (e.child !== null) {
    for (
      a = e.child, s = qa(a, a.pendingProps), e.child = s, s.return = e;
      a.sibling !== null;

    )
      (a = a.sibling), (s = s.sibling = qa(a, a.pendingProps)), (s.return = e);
    s.sibling = null;
  }
  return e.child;
}
function Af(a, e, s) {
  switch (e.tag) {
    case 3:
      Oc(e), Is();
      break;
    case 5:
      sc(e);
      break;
    case 1:
      Pe(e.type) && Nt(e);
      break;
    case 4:
      Io(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      Q(Lt, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(K, K.current & 1), (e.flags |= 128), null)
          : s & e.child.childLanes
          ? Cc(a, e, s)
          : (Q(K, K.current & 1),
            (a = ga(a, e, s)),
            a !== null ? a.sibling : null);
      Q(K, K.current & 1);
      break;
    case 19:
      if (((r = (s & e.childLanes) !== 0), a.flags & 128)) {
        if (r) return Pc(a, e, s);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Q(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Ac(a, e, s);
  }
  return ga(a, e, s);
}
var Mc, Vn, Ic, zc;
Mc = function (a, e) {
  for (var s = e.child; s !== null; ) {
    if (s.tag === 5 || s.tag === 6) a.appendChild(s.stateNode);
    else if (s.tag !== 4 && s.child !== null) {
      (s.child.return = s), (s = s.child);
      continue;
    }
    if (s === e) break;
    for (; s.sibling === null; ) {
      if (s.return === null || s.return === e) return;
      s = s.return;
    }
    (s.sibling.return = s.return), (s = s.sibling);
  }
};
Vn = function () {};
Ic = function (a, e, s, r) {
  var i = a.memoizedProps;
  if (i !== r) {
    (a = e.stateNode), Xa(ia.current);
    var n = null;
    switch (s) {
      case "input":
        (i = dn(a, i)), (r = dn(a, r)), (n = []);
        break;
      case "select":
        (i = ee({}, i, { value: void 0 })),
          (r = ee({}, r, { value: void 0 })),
          (n = []);
        break;
      case "textarea":
        (i = pn(a, i)), (r = pn(a, r)), (n = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (a.onclick = zt);
    }
    fn(s, r);
    var o;
    s = null;
    for (p in i)
      if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
        if (p === "style") {
          var d = i[p];
          for (o in d) d.hasOwnProperty(o) && (s || (s = {}), (s[o] = ""));
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (gr.hasOwnProperty(p)
              ? n || (n = [])
              : (n = n || []).push(p, null));
    for (p in r) {
      var l = r[p];
      if (
        ((d = i != null ? i[p] : void 0),
        r.hasOwnProperty(p) && l !== d && (l != null || d != null))
      )
        if (p === "style")
          if (d) {
            for (o in d)
              !d.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (s || (s = {}), (s[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                d[o] !== l[o] &&
                (s || (s = {}), (s[o] = l[o]));
          } else s || (n || (n = []), n.push(p, s)), (s = l);
        else
          p === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (d = d ? d.__html : void 0),
              l != null && d !== l && (n = n || []).push(p, l))
            : p === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (n = n || []).push(p, "" + l)
            : p !== "suppressContentEditableWarning" &&
              p !== "suppressHydrationWarning" &&
              (gr.hasOwnProperty(p)
                ? (l != null && p === "onScroll" && X("scroll", a),
                  n || d === l || (n = []))
                : (n = n || []).push(p, l));
    }
    s && (n = n || []).push("style", s);
    var p = n;
    (e.updateQueue = p) && (e.flags |= 4);
  }
};
zc = function (a, e, s, r) {
  s !== r && (e.flags |= 4);
};
function Zs(a, e) {
  if (!Z)
    switch (a.tailMode) {
      case "hidden":
        e = a.tail;
        for (var s = null; e !== null; )
          e.alternate !== null && (s = e), (e = e.sibling);
        s === null ? (a.tail = null) : (s.sibling = null);
        break;
      case "collapsed":
        s = a.tail;
        for (var r = null; s !== null; )
          s.alternate !== null && (r = s), (s = s.sibling);
        r === null
          ? e || a.tail === null
            ? (a.tail = null)
            : (a.tail.sibling = null)
          : (r.sibling = null);
    }
}
function xe(a) {
  var e = a.alternate !== null && a.alternate.child === a.child,
    s = 0,
    r = 0;
  if (e)
    for (var i = a.child; i !== null; )
      (s |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = a),
        (i = i.sibling);
  else
    for (i = a.child; i !== null; )
      (s |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = a),
        (i = i.sibling);
  return (a.subtreeFlags |= r), (a.childLanes = s), e;
}
function Tf(a, e, s) {
  var r = e.pendingProps;
  switch ((yo(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return xe(e), null;
    case 1:
      return Pe(e.type) && Rt(), xe(e), null;
    case 3:
      return (
        (r = e.stateNode),
        Rs(),
        Y(Ce),
        Y(je),
        Ro(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (a === null || a.child === null) &&
          (rt(e)
            ? (e.flags |= 4)
            : a === null ||
              (a.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Ze !== null && (Xn(Ze), (Ze = null)))),
        Vn(a, e),
        xe(e),
        null
      );
    case 5:
      zo(e);
      var i = Xa(Cr.current);
      if (((s = e.type), a !== null && e.stateNode != null))
        Ic(a, e, s, r, i),
          a.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(k(166));
          return xe(e), null;
        }
        if (((a = Xa(ia.current)), rt(e))) {
          (r = e.stateNode), (s = e.type);
          var n = e.memoizedProps;
          switch (((r[ra] = e), (r[Tr] = n), (a = (e.mode & 1) !== 0), s)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < sr.length; i++) X(sr[i], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              hl(r, n), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!n.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              vl(r, n), X("invalid", r);
          }
          fn(s, n), (i = null);
          for (var o in n)
            if (n.hasOwnProperty(o)) {
              var d = n[o];
              o === "children"
                ? typeof d == "string"
                  ? r.textContent !== d &&
                    (n.suppressHydrationWarning !== !0 &&
                      st(r.textContent, d, a),
                    (i = ["children", d]))
                  : typeof d == "number" &&
                    r.textContent !== "" + d &&
                    (n.suppressHydrationWarning !== !0 &&
                      st(r.textContent, d, a),
                    (i = ["children", "" + d]))
                : gr.hasOwnProperty(o) &&
                  d != null &&
                  o === "onScroll" &&
                  X("scroll", r);
            }
          switch (s) {
            case "input":
              Qr(r), gl(r, n, !0);
              break;
            case "textarea":
              Qr(r), xl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof n.onClick == "function" && (r.onclick = zt);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            a === "http://www.w3.org/1999/xhtml" && (a = iu(s)),
            a === "http://www.w3.org/1999/xhtml"
              ? s === "script"
                ? ((a = o.createElement("div")),
                  (a.innerHTML = "<script></script>"),
                  (a = a.removeChild(a.firstChild)))
                : typeof r.is == "string"
                ? (a = o.createElement(s, { is: r.is }))
                : ((a = o.createElement(s)),
                  s === "select" &&
                    ((o = a),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (a = o.createElementNS(a, s)),
            (a[ra] = e),
            (a[Tr] = r),
            Mc(a, e, !1, !1),
            (e.stateNode = a);
          e: {
            switch (((o = hn(s, r)), s)) {
              case "dialog":
                X("cancel", a), X("close", a), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", a), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < sr.length; i++) X(sr[i], a);
                i = r;
                break;
              case "source":
                X("error", a), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", a), X("load", a), (i = r);
                break;
              case "details":
                X("toggle", a), (i = r);
                break;
              case "input":
                hl(a, r), (i = dn(a, r)), X("invalid", a);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ee({}, r, { value: void 0 })),
                  X("invalid", a);
                break;
              case "textarea":
                vl(a, r), (i = pn(a, r)), X("invalid", a);
                break;
              default:
                i = r;
            }
            fn(s, i), (d = i);
            for (n in d)
              if (d.hasOwnProperty(n)) {
                var l = d[n];
                n === "style"
                  ? lu(a, l)
                  : n === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && nu(a, l))
                  : n === "children"
                  ? typeof l == "string"
                    ? (s !== "textarea" || l !== "") && vr(a, l)
                    : typeof l == "number" && vr(a, "" + l)
                  : n !== "suppressContentEditableWarning" &&
                    n !== "suppressHydrationWarning" &&
                    n !== "autoFocus" &&
                    (gr.hasOwnProperty(n)
                      ? l != null && n === "onScroll" && X("scroll", a)
                      : l != null && lo(a, n, l, o));
              }
            switch (s) {
              case "input":
                Qr(a), gl(a, r, !1);
                break;
              case "textarea":
                Qr(a), xl(a);
                break;
              case "option":
                r.value != null && a.setAttribute("value", "" + _a(r.value));
                break;
              case "select":
                (a.multiple = !!r.multiple),
                  (n = r.value),
                  n != null
                    ? bs(a, !!r.multiple, n, !1)
                    : r.defaultValue != null &&
                      bs(a, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (a.onclick = zt);
            }
            switch (s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return xe(e), null;
    case 6:
      if (a && e.stateNode != null) zc(a, e, a.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(k(166));
        if (((s = Xa(Cr.current)), Xa(ia.current), rt(e))) {
          if (
            ((r = e.stateNode),
            (s = e.memoizedProps),
            (r[ra] = e),
            (n = r.nodeValue !== s) && ((a = qe), a !== null))
          )
            switch (a.tag) {
              case 3:
                st(r.nodeValue, s, (a.mode & 1) !== 0);
                break;
              case 5:
                a.memoizedProps.suppressHydrationWarning !== !0 &&
                  st(r.nodeValue, s, (a.mode & 1) !== 0);
            }
          n && (e.flags |= 4);
        } else
          (r = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(r)),
            (r[ra] = e),
            (e.stateNode = r);
      }
      return xe(e), null;
    case 13:
      if (
        (Y(K),
        (r = e.memoizedState),
        a === null ||
          (a.memoizedState !== null && a.memoizedState.dehydrated !== null))
      ) {
        if (Z && Ne !== null && e.mode & 1 && !(e.flags & 128))
          Xu(), Is(), (e.flags |= 98560), (n = !1);
        else if (((n = rt(e)), r !== null && r.dehydrated !== null)) {
          if (a === null) {
            if (!n) throw Error(k(318));
            if (
              ((n = e.memoizedState),
              (n = n !== null ? n.dehydrated : null),
              !n)
            )
              throw Error(k(317));
            n[ra] = e;
          } else
            Is(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          xe(e), (n = !1);
        } else Ze !== null && (Xn(Ze), (Ze = null)), (n = !0);
        if (!n) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = s), e)
        : ((r = r !== null),
          r !== (a !== null && a.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (a === null || K.current & 1 ? le === 0 && (le = 3) : Go())),
          e.updateQueue !== null && (e.flags |= 4),
          xe(e),
          null);
    case 4:
      return (
        Rs(), Vn(a, e), a === null && yr(e.stateNode.containerInfo), xe(e), null
      );
    case 10:
      return Co(e.type._context), xe(e), null;
    case 17:
      return Pe(e.type) && Rt(), xe(e), null;
    case 19:
      if ((Y(K), (n = e.memoizedState), n === null)) return xe(e), null;
      if (((r = (e.flags & 128) !== 0), (o = n.rendering), o === null))
        if (r) Zs(n, !1);
        else {
          if (le !== 0 || (a !== null && a.flags & 128))
            for (a = e.child; a !== null; ) {
              if (((o = Ut(a)), o !== null)) {
                for (
                  e.flags |= 128,
                    Zs(n, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = s,
                    s = e.child;
                  s !== null;

                )
                  (n = s),
                    (a = r),
                    (n.flags &= 14680066),
                    (o = n.alternate),
                    o === null
                      ? ((n.childLanes = 0),
                        (n.lanes = a),
                        (n.child = null),
                        (n.subtreeFlags = 0),
                        (n.memoizedProps = null),
                        (n.memoizedState = null),
                        (n.updateQueue = null),
                        (n.dependencies = null),
                        (n.stateNode = null))
                      : ((n.childLanes = o.childLanes),
                        (n.lanes = o.lanes),
                        (n.child = o.child),
                        (n.subtreeFlags = 0),
                        (n.deletions = null),
                        (n.memoizedProps = o.memoizedProps),
                        (n.memoizedState = o.memoizedState),
                        (n.updateQueue = o.updateQueue),
                        (n.type = o.type),
                        (a = o.dependencies),
                        (n.dependencies =
                          a === null
                            ? null
                            : {
                                lanes: a.lanes,
                                firstContext: a.firstContext,
                              })),
                    (s = s.sibling);
                return Q(K, (K.current & 1) | 2), e.child;
              }
              a = a.sibling;
            }
          n.tail !== null &&
            te() > Ds &&
            ((e.flags |= 128), (r = !0), Zs(n, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((a = Ut(o)), a !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (s = a.updateQueue),
              s !== null && ((e.updateQueue = s), (e.flags |= 4)),
              Zs(n, !0),
              n.tail === null && n.tailMode === "hidden" && !o.alternate && !Z)
            )
              return xe(e), null;
          } else
            2 * te() - n.renderingStartTime > Ds &&
              s !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Zs(n, !1), (e.lanes = 4194304));
        n.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((s = n.last),
            s !== null ? (s.sibling = o) : (e.child = o),
            (n.last = o));
      }
      return n.tail !== null
        ? ((e = n.tail),
          (n.rendering = e),
          (n.tail = e.sibling),
          (n.renderingStartTime = te()),
          (e.sibling = null),
          (s = K.current),
          Q(K, r ? (s & 1) | 2 : s & 1),
          e)
        : (xe(e), null);
    case 22:
    case 23:
      return (
        Fo(),
        (r = e.memoizedState !== null),
        a !== null && (a.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? ze & 1073741824 && (xe(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : xe(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, e.tag));
}
function Of(a, e) {
  switch ((yo(e), e.tag)) {
    case 1:
      return (
        Pe(e.type) && Rt(),
        (a = e.flags),
        a & 65536 ? ((e.flags = (a & -65537) | 128), e) : null
      );
    case 3:
      return (
        Rs(),
        Y(Ce),
        Y(je),
        Ro(),
        (a = e.flags),
        a & 65536 && !(a & 128) ? ((e.flags = (a & -65537) | 128), e) : null
      );
    case 5:
      return zo(e), null;
    case 13:
      if ((Y(K), (a = e.memoizedState), a !== null && a.dehydrated !== null)) {
        if (e.alternate === null) throw Error(k(340));
        Is();
      }
      return (
        (a = e.flags), a & 65536 ? ((e.flags = (a & -65537) | 128), e) : null
      );
    case 19:
      return Y(K), null;
    case 4:
      return Rs(), null;
    case 10:
      return Co(e.type._context), null;
    case 22:
    case 23:
      return Fo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var nt = !1,
  Se = !1,
  Cf = typeof WeakSet == "function" ? WeakSet : Set,
  U = null;
function Es(a, e) {
  var s = a.ref;
  if (s !== null)
    if (typeof s == "function")
      try {
        s(null);
      } catch (r) {
        ae(a, e, r);
      }
    else s.current = null;
}
function $n(a, e, s) {
  try {
    s();
  } catch (r) {
    ae(a, e, r);
  }
}
var od = !1;
function Pf(a, e) {
  if (((An = Pt), (a = qu()), wo(a))) {
    if ("selectionStart" in a)
      var s = { start: a.selectionStart, end: a.selectionEnd };
    else
      e: {
        s = ((s = a.ownerDocument) && s.defaultView) || window;
        var r = s.getSelection && s.getSelection();
        if (r && r.rangeCount !== 0) {
          s = r.anchorNode;
          var i = r.anchorOffset,
            n = r.focusNode;
          r = r.focusOffset;
          try {
            s.nodeType, n.nodeType;
          } catch {
            s = null;
            break e;
          }
          var o = 0,
            d = -1,
            l = -1,
            p = 0,
            c = 0,
            u = a,
            m = null;
          a: for (;;) {
            for (
              var v;
              u !== s || (i !== 0 && u.nodeType !== 3) || (d = o + i),
                u !== n || (r !== 0 && u.nodeType !== 3) || (l = o + r),
                u.nodeType === 3 && (o += u.nodeValue.length),
                (v = u.firstChild) !== null;

            )
              (m = u), (u = v);
            for (;;) {
              if (u === a) break a;
              if (
                (m === s && ++p === i && (d = o),
                m === n && ++c === r && (l = o),
                (v = u.nextSibling) !== null)
              )
                break;
              (u = m), (m = u.parentNode);
            }
            u = v;
          }
          s = d === -1 || l === -1 ? null : { start: d, end: l };
        } else s = null;
      }
    s = s || { start: 0, end: 0 };
  } else s = null;
  for (Tn = { focusedElem: a, selectionRange: s }, Pt = !1, U = e; U !== null; )
    if (((e = U), (a = e.child), (e.subtreeFlags & 1028) !== 0 && a !== null))
      (a.return = e), (U = a);
    else
      for (; U !== null; ) {
        e = U;
        try {
          var S = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps,
                    j = S.memoizedState,
                    g = e.stateNode,
                    f = g.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? x : Xe(e.type, x),
                      j
                    );
                  g.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = e.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (E) {
          ae(e, e.return, E);
        }
        if (((a = e.sibling), a !== null)) {
          (a.return = e.return), (U = a);
          break;
        }
        U = e.return;
      }
  return (S = od), (od = !1), S;
}
function cr(a, e, s) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & a) === a) {
        var n = i.destroy;
        (i.destroy = void 0), n !== void 0 && $n(e, s, n);
      }
      i = i.next;
    } while (i !== r);
  }
}
function di(a, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var s = (e = e.next);
    do {
      if ((s.tag & a) === a) {
        var r = s.create;
        s.destroy = r();
      }
      s = s.next;
    } while (s !== e);
  }
}
function Bn(a) {
  var e = a.ref;
  if (e !== null) {
    var s = a.stateNode;
    switch (a.tag) {
      case 5:
        a = s;
        break;
      default:
        a = s;
    }
    typeof e == "function" ? e(a) : (e.current = a);
  }
}
function Rc(a) {
  var e = a.alternate;
  e !== null && ((a.alternate = null), Rc(e)),
    (a.child = null),
    (a.deletions = null),
    (a.sibling = null),
    a.tag === 5 &&
      ((e = a.stateNode),
      e !== null &&
        (delete e[ra], delete e[Tr], delete e[Pn], delete e[cf], delete e[pf])),
    (a.stateNode = null),
    (a.return = null),
    (a.dependencies = null),
    (a.memoizedProps = null),
    (a.memoizedState = null),
    (a.pendingProps = null),
    (a.stateNode = null),
    (a.updateQueue = null);
}
function Nc(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function ld(a) {
  e: for (;;) {
    for (; a.sibling === null; ) {
      if (a.return === null || Nc(a.return)) return null;
      a = a.return;
    }
    for (
      a.sibling.return = a.return, a = a.sibling;
      a.tag !== 5 && a.tag !== 6 && a.tag !== 18;

    ) {
      if (a.flags & 2 || a.child === null || a.tag === 4) continue e;
      (a.child.return = a), (a = a.child);
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Fn(a, e, s) {
  var r = a.tag;
  if (r === 5 || r === 6)
    (a = a.stateNode),
      e
        ? s.nodeType === 8
          ? s.parentNode.insertBefore(a, e)
          : s.insertBefore(a, e)
        : (s.nodeType === 8
            ? ((e = s.parentNode), e.insertBefore(a, s))
            : ((e = s), e.appendChild(a)),
          (s = s._reactRootContainer),
          s != null || e.onclick !== null || (e.onclick = zt));
  else if (r !== 4 && ((a = a.child), a !== null))
    for (Fn(a, e, s), a = a.sibling; a !== null; ) Fn(a, e, s), (a = a.sibling);
}
function Gn(a, e, s) {
  var r = a.tag;
  if (r === 5 || r === 6)
    (a = a.stateNode), e ? s.insertBefore(a, e) : s.appendChild(a);
  else if (r !== 4 && ((a = a.child), a !== null))
    for (Gn(a, e, s), a = a.sibling; a !== null; ) Gn(a, e, s), (a = a.sibling);
}
var pe = null,
  Ye = !1;
function Sa(a, e, s) {
  for (s = s.child; s !== null; ) Dc(a, e, s), (s = s.sibling);
}
function Dc(a, e, s) {
  if (ta && typeof ta.onCommitFiberUnmount == "function")
    try {
      ta.onCommitFiberUnmount(ai, s);
    } catch {}
  switch (s.tag) {
    case 5:
      Se || Es(s, e);
    case 6:
      var r = pe,
        i = Ye;
      (pe = null),
        Sa(a, e, s),
        (pe = r),
        (Ye = i),
        pe !== null &&
          (Ye
            ? ((a = pe),
              (s = s.stateNode),
              a.nodeType === 8 ? a.parentNode.removeChild(s) : a.removeChild(s))
            : pe.removeChild(s.stateNode));
      break;
    case 18:
      pe !== null &&
        (Ye
          ? ((a = pe),
            (s = s.stateNode),
            a.nodeType === 8
              ? _i(a.parentNode, s)
              : a.nodeType === 1 && _i(a, s),
            Er(a))
          : _i(pe, s.stateNode));
      break;
    case 4:
      (r = pe),
        (i = Ye),
        (pe = s.stateNode.containerInfo),
        (Ye = !0),
        Sa(a, e, s),
        (pe = r),
        (Ye = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = s.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var n = i,
            o = n.destroy;
          (n = n.tag),
            o !== void 0 && (n & 2 || n & 4) && $n(s, e, o),
            (i = i.next);
        } while (i !== r);
      }
      Sa(a, e, s);
      break;
    case 1:
      if (
        !Se &&
        (Es(s, e),
        (r = s.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = s.memoizedProps),
            (r.state = s.memoizedState),
            r.componentWillUnmount();
        } catch (d) {
          ae(s, e, d);
        }
      Sa(a, e, s);
      break;
    case 21:
      Sa(a, e, s);
      break;
    case 22:
      s.mode & 1
        ? ((Se = (r = Se) || s.memoizedState !== null), Sa(a, e, s), (Se = r))
        : Sa(a, e, s);
      break;
    default:
      Sa(a, e, s);
  }
}
function dd(a) {
  var e = a.updateQueue;
  if (e !== null) {
    a.updateQueue = null;
    var s = a.stateNode;
    s === null && (s = a.stateNode = new Cf()),
      e.forEach(function (r) {
        var i = kf.bind(null, a, r);
        s.has(r) || (s.add(r), r.then(i, i));
      });
  }
}
function Qe(a, e) {
  var s = e.deletions;
  if (s !== null)
    for (var r = 0; r < s.length; r++) {
      var i = s[r];
      try {
        var n = a,
          o = e,
          d = o;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 5:
              (pe = d.stateNode), (Ye = !1);
              break e;
            case 3:
              (pe = d.stateNode.containerInfo), (Ye = !0);
              break e;
            case 4:
              (pe = d.stateNode.containerInfo), (Ye = !0);
              break e;
          }
          d = d.return;
        }
        if (pe === null) throw Error(k(160));
        Dc(n, o, i), (pe = null), (Ye = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (p) {
        ae(i, e, p);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) qc(e, a), (e = e.sibling);
}
function qc(a, e) {
  var s = a.alternate,
    r = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(e, a), aa(a), r & 4)) {
        try {
          cr(3, a, a.return), di(3, a);
        } catch (x) {
          ae(a, a.return, x);
        }
        try {
          cr(5, a, a.return);
        } catch (x) {
          ae(a, a.return, x);
        }
      }
      break;
    case 1:
      Qe(e, a), aa(a), r & 512 && s !== null && Es(s, s.return);
      break;
    case 5:
      if (
        (Qe(e, a),
        aa(a),
        r & 512 && s !== null && Es(s, s.return),
        a.flags & 32)
      ) {
        var i = a.stateNode;
        try {
          vr(i, "");
        } catch (x) {
          ae(a, a.return, x);
        }
      }
      if (r & 4 && ((i = a.stateNode), i != null)) {
        var n = a.memoizedProps,
          o = s !== null ? s.memoizedProps : n,
          d = a.type,
          l = a.updateQueue;
        if (((a.updateQueue = null), l !== null))
          try {
            d === "input" && n.type === "radio" && n.name != null && ru(i, n),
              hn(d, o);
            var p = hn(d, n);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                u = l[o + 1];
              c === "style"
                ? lu(i, u)
                : c === "dangerouslySetInnerHTML"
                ? nu(i, u)
                : c === "children"
                ? vr(i, u)
                : lo(i, c, u, p);
            }
            switch (d) {
              case "input":
                un(i, n);
                break;
              case "textarea":
                tu(i, n);
                break;
              case "select":
                var m = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!n.multiple;
                var v = n.value;
                v != null
                  ? bs(i, !!n.multiple, v, !1)
                  : m !== !!n.multiple &&
                    (n.defaultValue != null
                      ? bs(i, !!n.multiple, n.defaultValue, !0)
                      : bs(i, !!n.multiple, n.multiple ? [] : "", !1));
            }
            i[Tr] = n;
          } catch (x) {
            ae(a, a.return, x);
          }
      }
      break;
    case 6:
      if ((Qe(e, a), aa(a), r & 4)) {
        if (a.stateNode === null) throw Error(k(162));
        (i = a.stateNode), (n = a.memoizedProps);
        try {
          i.nodeValue = n;
        } catch (x) {
          ae(a, a.return, x);
        }
      }
      break;
    case 3:
      if (
        (Qe(e, a), aa(a), r & 4 && s !== null && s.memoizedState.isDehydrated)
      )
        try {
          Er(e.containerInfo);
        } catch (x) {
          ae(a, a.return, x);
        }
      break;
    case 4:
      Qe(e, a), aa(a);
      break;
    case 13:
      Qe(e, a),
        aa(a),
        (i = a.child),
        i.flags & 8192 &&
          ((n = i.memoizedState !== null),
          (i.stateNode.isHidden = n),
          !n ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            ($o = te())),
        r & 4 && dd(a);
      break;
    case 22:
      if (
        ((c = s !== null && s.memoizedState !== null),
        a.mode & 1 ? ((Se = (p = Se) || c), Qe(e, a), (Se = p)) : Qe(e, a),
        aa(a),
        r & 8192)
      ) {
        if (
          ((p = a.memoizedState !== null),
          (a.stateNode.isHidden = p) && !c && a.mode & 1)
        )
          for (U = a, c = a.child; c !== null; ) {
            for (u = U = c; U !== null; ) {
              switch (((m = U), (v = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  cr(4, m, m.return);
                  break;
                case 1:
                  Es(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (s = m.return);
                    try {
                      (e = r),
                        (S.props = e.memoizedProps),
                        (S.state = e.memoizedState),
                        S.componentWillUnmount();
                    } catch (x) {
                      ae(r, s, x);
                    }
                  }
                  break;
                case 5:
                  Es(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    cd(u);
                    continue;
                  }
              }
              v !== null ? ((v.return = m), (U = v)) : cd(u);
            }
            c = c.sibling;
          }
        e: for (c = null, u = a; ; ) {
          if (u.tag === 5) {
            if (c === null) {
              c = u;
              try {
                (i = u.stateNode),
                  p
                    ? ((n = i.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none"))
                    : ((d = u.stateNode),
                      (l = u.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (d.style.display = ou("display", o)));
              } catch (x) {
                ae(a, a.return, x);
              }
            }
          } else if (u.tag === 6) {
            if (c === null)
              try {
                u.stateNode.nodeValue = p ? "" : u.memoizedProps;
              } catch (x) {
                ae(a, a.return, x);
              }
          } else if (
            ((u.tag !== 22 && u.tag !== 23) ||
              u.memoizedState === null ||
              u === a) &&
            u.child !== null
          ) {
            (u.child.return = u), (u = u.child);
            continue;
          }
          if (u === a) break e;
          for (; u.sibling === null; ) {
            if (u.return === null || u.return === a) break e;
            c === u && (c = null), (u = u.return);
          }
          c === u && (c = null), (u.sibling.return = u.return), (u = u.sibling);
        }
      }
      break;
    case 19:
      Qe(e, a), aa(a), r & 4 && dd(a);
      break;
    case 21:
      break;
    default:
      Qe(e, a), aa(a);
  }
}
function aa(a) {
  var e = a.flags;
  if (e & 2) {
    try {
      e: {
        for (var s = a.return; s !== null; ) {
          if (Nc(s)) {
            var r = s;
            break e;
          }
          s = s.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (vr(i, ""), (r.flags &= -33));
          var n = ld(a);
          Gn(a, n, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            d = ld(a);
          Fn(a, d, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (l) {
      ae(a, a.return, l);
    }
    a.flags &= -3;
  }
  e & 4096 && (a.flags &= -4097);
}
function Mf(a, e, s) {
  (U = a), Lc(a);
}
function Lc(a, e, s) {
  for (var r = (a.mode & 1) !== 0; U !== null; ) {
    var i = U,
      n = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || nt;
      if (!o) {
        var d = i.alternate,
          l = (d !== null && d.memoizedState !== null) || Se;
        d = nt;
        var p = Se;
        if (((nt = o), (Se = l) && !p))
          for (U = i; U !== null; )
            (o = U),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? pd(i)
                : l !== null
                ? ((l.return = o), (U = l))
                : pd(i);
        for (; n !== null; ) (U = n), Lc(n), (n = n.sibling);
        (U = i), (nt = d), (Se = p);
      }
      ud(a);
    } else
      i.subtreeFlags & 8772 && n !== null ? ((n.return = i), (U = n)) : ud(a);
  }
}
function ud(a) {
  for (; U !== null; ) {
    var e = U;
    if (e.flags & 8772) {
      var s = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Se || di(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Se)
                if (s === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? s.memoizedProps
                      : Xe(e.type, s.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    s.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var n = e.updateQueue;
              n !== null && Wl(e, n, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((s = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      s = e.child.stateNode;
                      break;
                    case 1:
                      s = e.child.stateNode;
                  }
                Wl(e, o, s);
              }
              break;
            case 5:
              var d = e.stateNode;
              if (s === null && e.flags & 4) {
                s = d;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && s.focus();
                    break;
                  case "img":
                    l.src && (s.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var p = e.alternate;
                if (p !== null) {
                  var c = p.memoizedState;
                  if (c !== null) {
                    var u = c.dehydrated;
                    u !== null && Er(u);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Se || (e.flags & 512 && Bn(e));
      } catch (m) {
        ae(e, e.return, m);
      }
    }
    if (e === a) {
      U = null;
      break;
    }
    if (((s = e.sibling), s !== null)) {
      (s.return = e.return), (U = s);
      break;
    }
    U = e.return;
  }
}
function cd(a) {
  for (; U !== null; ) {
    var e = U;
    if (e === a) {
      U = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      (s.return = e.return), (U = s);
      break;
    }
    U = e.return;
  }
}
function pd(a) {
  for (; U !== null; ) {
    var e = U;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var s = e.return;
          try {
            di(4, e);
          } catch (l) {
            ae(e, s, l);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ae(e, i, l);
            }
          }
          var n = e.return;
          try {
            Bn(e);
          } catch (l) {
            ae(e, n, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Bn(e);
          } catch (l) {
            ae(e, o, l);
          }
      }
    } catch (l) {
      ae(e, e.return, l);
    }
    if (e === a) {
      U = null;
      break;
    }
    var d = e.sibling;
    if (d !== null) {
      (d.return = e.return), (U = d);
      break;
    }
    U = e.return;
  }
}
var If = Math.ceil,
  Bt = xa.ReactCurrentDispatcher,
  Uo = xa.ReactCurrentOwner,
  Ge = xa.ReactCurrentBatchConfig,
  H = 0,
  ue = null,
  ie = null,
  fe = 0,
  ze = 0,
  ws = $a(0),
  le = 0,
  zr = null,
  ss = 0,
  ui = 0,
  Vo = 0,
  pr = null,
  Te = null,
  $o = 0,
  Ds = 1 / 0,
  oa = null,
  Ft = !1,
  Hn = null,
  Na = null,
  ot = !1,
  Ta = null,
  Gt = 0,
  mr = 0,
  Wn = null,
  St = -1,
  jt = 0;
function we() {
  return H & 6 ? te() : St !== -1 ? St : (St = te());
}
function Da(a) {
  return a.mode & 1
    ? H & 2 && fe !== 0
      ? fe & -fe
      : ff.transition !== null
      ? (jt === 0 && (jt = ju()), jt)
      : ((a = W),
        a !== 0 || ((a = window.event), (a = a === void 0 ? 16 : Ou(a.type))),
        a)
    : 1;
}
function Je(a, e, s, r) {
  if (50 < mr) throw ((mr = 0), (Wn = null), Error(k(185)));
  Lr(a, s, r),
    (!(H & 2) || a !== ue) &&
      (a === ue && (!(H & 2) && (ui |= s), le === 4 && ya(a, fe)),
      Me(a, r),
      s === 1 && H === 0 && !(e.mode & 1) && ((Ds = te() + 500), ni && Ba()));
}
function Me(a, e) {
  var s = a.callbackNode;
  mm(a, e);
  var r = Ct(a, a === ue ? fe : 0);
  if (r === 0)
    s !== null && El(s), (a.callbackNode = null), (a.callbackPriority = 0);
  else if (((e = r & -r), a.callbackPriority !== e)) {
    if ((s != null && El(s), e === 1))
      a.tag === 0 ? mf(md.bind(null, a)) : Hu(md.bind(null, a)),
        df(function () {
          !(H & 6) && Ba();
        }),
        (s = null);
    else {
      switch (Eu(r)) {
        case 1:
          s = fo;
          break;
        case 4:
          s = xu;
          break;
        case 16:
          s = Ot;
          break;
        case 536870912:
          s = Su;
          break;
        default:
          s = Ot;
      }
      s = Gc(s, kc.bind(null, a));
    }
    (a.callbackPriority = e), (a.callbackNode = s);
  }
}
function kc(a, e) {
  if (((St = -1), (jt = 0), H & 6)) throw Error(k(327));
  var s = a.callbackNode;
  if (Cs() && a.callbackNode !== s) return null;
  var r = Ct(a, a === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & a.expiredLanes || e) e = Ht(a, r);
  else {
    e = r;
    var i = H;
    H |= 2;
    var n = Uc();
    (ue !== a || fe !== e) && ((oa = null), (Ds = te() + 500), Ya(a, e));
    do
      try {
        Nf();
        break;
      } catch (d) {
        _c(a, d);
      }
    while (1);
    Oo(),
      (Bt.current = n),
      (H = i),
      ie !== null ? (e = 0) : ((ue = null), (fe = 0), (e = le));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = jn(a)), i !== 0 && ((r = i), (e = Qn(a, i)))), e === 1)
    )
      throw ((s = zr), Ya(a, 0), ya(a, r), Me(a, te()), s);
    if (e === 6) ya(a, r);
    else {
      if (
        ((i = a.current.alternate),
        !(r & 30) &&
          !zf(i) &&
          ((e = Ht(a, r)),
          e === 2 && ((n = jn(a)), n !== 0 && ((r = n), (e = Qn(a, n)))),
          e === 1))
      )
        throw ((s = zr), Ya(a, 0), ya(a, r), Me(a, te()), s);
      switch (((a.finishedWork = i), (a.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Ga(a, Te, oa);
          break;
        case 3:
          if (
            (ya(a, r), (r & 130023424) === r && ((e = $o + 500 - te()), 10 < e))
          ) {
            if (Ct(a, 0) !== 0) break;
            if (((i = a.suspendedLanes), (i & r) !== r)) {
              we(), (a.pingedLanes |= a.suspendedLanes & i);
              break;
            }
            a.timeoutHandle = Cn(Ga.bind(null, a, Te, oa), e);
            break;
          }
          Ga(a, Te, oa);
          break;
        case 4:
          if ((ya(a, r), (r & 4194240) === r)) break;
          for (e = a.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ke(r);
            (n = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~n);
          }
          if (
            ((r = i),
            (r = te() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * If(r / 1960)) - r),
            10 < r)
          ) {
            a.timeoutHandle = Cn(Ga.bind(null, a, Te, oa), r);
            break;
          }
          Ga(a, Te, oa);
          break;
        case 5:
          Ga(a, Te, oa);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Me(a, te()), a.callbackNode === s ? kc.bind(null, a) : null;
}
function Qn(a, e) {
  var s = pr;
  return (
    a.current.memoizedState.isDehydrated && (Ya(a, e).flags |= 256),
    (a = Ht(a, e)),
    a !== 2 && ((e = Te), (Te = s), e !== null && Xn(e)),
    a
  );
}
function Xn(a) {
  Te === null ? (Te = a) : Te.push.apply(Te, a);
}
function zf(a) {
  for (var e = a; ; ) {
    if (e.flags & 16384) {
      var s = e.updateQueue;
      if (s !== null && ((s = s.stores), s !== null))
        for (var r = 0; r < s.length; r++) {
          var i = s[r],
            n = i.getSnapshot;
          i = i.value;
          try {
            if (!ea(n(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((s = e.child), e.subtreeFlags & 16384 && s !== null))
      (s.return = e), (e = s);
    else {
      if (e === a) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === a) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function ya(a, e) {
  for (
    e &= ~Vo,
      e &= ~ui,
      a.suspendedLanes |= e,
      a.pingedLanes &= ~e,
      a = a.expirationTimes;
    0 < e;

  ) {
    var s = 31 - Ke(e),
      r = 1 << s;
    (a[s] = -1), (e &= ~r);
  }
}
function md(a) {
  if (H & 6) throw Error(k(327));
  Cs();
  var e = Ct(a, 0);
  if (!(e & 1)) return Me(a, te()), null;
  var s = Ht(a, e);
  if (a.tag !== 0 && s === 2) {
    var r = jn(a);
    r !== 0 && ((e = r), (s = Qn(a, r)));
  }
  if (s === 1) throw ((s = zr), Ya(a, 0), ya(a, e), Me(a, te()), s);
  if (s === 6) throw Error(k(345));
  return (
    (a.finishedWork = a.current.alternate),
    (a.finishedLanes = e),
    Ga(a, Te, oa),
    Me(a, te()),
    null
  );
}
function Bo(a, e) {
  var s = H;
  H |= 1;
  try {
    return a(e);
  } finally {
    (H = s), H === 0 && ((Ds = te() + 500), ni && Ba());
  }
}
function rs(a) {
  Ta !== null && Ta.tag === 0 && !(H & 6) && Cs();
  var e = H;
  H |= 1;
  var s = Ge.transition,
    r = W;
  try {
    if (((Ge.transition = null), (W = 1), a)) return a();
  } finally {
    (W = r), (Ge.transition = s), (H = e), !(H & 6) && Ba();
  }
}
function Fo() {
  (ze = ws.current), Y(ws);
}
function Ya(a, e) {
  (a.finishedWork = null), (a.finishedLanes = 0);
  var s = a.timeoutHandle;
  if ((s !== -1 && ((a.timeoutHandle = -1), lf(s)), ie !== null))
    for (s = ie.return; s !== null; ) {
      var r = s;
      switch ((yo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Rt();
          break;
        case 3:
          Rs(), Y(Ce), Y(je), Ro();
          break;
        case 5:
          zo(r);
          break;
        case 4:
          Rs();
          break;
        case 13:
          Y(K);
          break;
        case 19:
          Y(K);
          break;
        case 10:
          Co(r.type._context);
          break;
        case 22:
        case 23:
          Fo();
      }
      s = s.return;
    }
  if (
    ((ue = a),
    (ie = a = qa(a.current, null)),
    (fe = ze = e),
    (le = 0),
    (zr = null),
    (Vo = ui = ss = 0),
    (Te = pr = null),
    Qa !== null)
  ) {
    for (e = 0; e < Qa.length; e++)
      if (((s = Qa[e]), (r = s.interleaved), r !== null)) {
        s.interleaved = null;
        var i = r.next,
          n = s.pending;
        if (n !== null) {
          var o = n.next;
          (n.next = i), (r.next = o);
        }
        s.pending = r;
      }
    Qa = null;
  }
  return a;
}
function _c(a, e) {
  do {
    var s = ie;
    try {
      if ((Oo(), (gt.current = $t), Vt)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Vt = !1;
      }
      if (
        ((as = 0),
        (de = oe = J = null),
        (ur = !1),
        (Pr = 0),
        (Uo.current = null),
        s === null || s.return === null)
      ) {
        (le = 1), (zr = e), (ie = null);
        break;
      }
      e: {
        var n = a,
          o = s.return,
          d = s,
          l = e;
        if (
          ((e = fe),
          (d.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var p = l,
            c = d,
            u = c.tag;
          if (!(c.mode & 1) && (u === 0 || u === 11 || u === 15)) {
            var m = c.alternate;
            m
              ? ((c.updateQueue = m.updateQueue),
                (c.memoizedState = m.memoizedState),
                (c.lanes = m.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var v = ed(o);
          if (v !== null) {
            (v.flags &= -257),
              ad(v, o, d, n, e),
              v.mode & 1 && Jl(n, p, e),
              (e = v),
              (l = p);
            var S = e.updateQueue;
            if (S === null) {
              var x = new Set();
              x.add(l), (e.updateQueue = x);
            } else S.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Jl(n, p, e), Go();
              break e;
            }
            l = Error(k(426));
          }
        } else if (Z && d.mode & 1) {
          var j = ed(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256),
              ad(j, o, d, n, e),
              Ao(Ns(l, d));
            break e;
          }
        }
        (n = l = Ns(l, d)),
          le !== 4 && (le = 2),
          pr === null ? (pr = [n]) : pr.push(n),
          (n = o);
        do {
          switch (n.tag) {
            case 3:
              (n.flags |= 65536), (e &= -e), (n.lanes |= e);
              var g = wc(n, l, e);
              Hl(n, g);
              break e;
            case 1:
              d = l;
              var f = n.type,
                h = n.stateNode;
              if (
                !(n.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Na === null || !Na.has(h))))
              ) {
                (n.flags |= 65536), (e &= -e), (n.lanes |= e);
                var E = bc(n, d, e);
                Hl(n, E);
                break e;
              }
          }
          n = n.return;
        } while (n !== null);
      }
      $c(s);
    } catch (b) {
      (e = b), ie === s && s !== null && (ie = s = s.return);
      continue;
    }
    break;
  } while (1);
}
function Uc() {
  var a = Bt.current;
  return (Bt.current = $t), a === null ? $t : a;
}
function Go() {
  (le === 0 || le === 3 || le === 2) && (le = 4),
    ue === null || (!(ss & 268435455) && !(ui & 268435455)) || ya(ue, fe);
}
function Ht(a, e) {
  var s = H;
  H |= 2;
  var r = Uc();
  (ue !== a || fe !== e) && ((oa = null), Ya(a, e));
  do
    try {
      Rf();
      break;
    } catch (i) {
      _c(a, i);
    }
  while (1);
  if ((Oo(), (H = s), (Bt.current = r), ie !== null)) throw Error(k(261));
  return (ue = null), (fe = 0), le;
}
function Rf() {
  for (; ie !== null; ) Vc(ie);
}
function Nf() {
  for (; ie !== null && !tm(); ) Vc(ie);
}
function Vc(a) {
  var e = Fc(a.alternate, a, ze);
  (a.memoizedProps = a.pendingProps),
    e === null ? $c(a) : (ie = e),
    (Uo.current = null);
}
function $c(a) {
  var e = a;
  do {
    var s = e.alternate;
    if (((a = e.return), e.flags & 32768)) {
      if (((s = Of(s, e)), s !== null)) {
        (s.flags &= 32767), (ie = s);
        return;
      }
      if (a !== null)
        (a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null);
      else {
        (le = 6), (ie = null);
        return;
      }
    } else if (((s = Tf(s, e, ze)), s !== null)) {
      ie = s;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      ie = e;
      return;
    }
    ie = e = a;
  } while (e !== null);
  le === 0 && (le = 5);
}
function Ga(a, e, s) {
  var r = W,
    i = Ge.transition;
  try {
    (Ge.transition = null), (W = 1), Df(a, e, s, r);
  } finally {
    (Ge.transition = i), (W = r);
  }
  return null;
}
function Df(a, e, s, r) {
  do Cs();
  while (Ta !== null);
  if (H & 6) throw Error(k(327));
  s = a.finishedWork;
  var i = a.finishedLanes;
  if (s === null) return null;
  if (((a.finishedWork = null), (a.finishedLanes = 0), s === a.current))
    throw Error(k(177));
  (a.callbackNode = null), (a.callbackPriority = 0);
  var n = s.lanes | s.childLanes;
  if (
    (fm(a, n),
    a === ue && ((ie = ue = null), (fe = 0)),
    (!(s.subtreeFlags & 2064) && !(s.flags & 2064)) ||
      ot ||
      ((ot = !0),
      Gc(Ot, function () {
        return Cs(), null;
      })),
    (n = (s.flags & 15990) !== 0),
    s.subtreeFlags & 15990 || n)
  ) {
    (n = Ge.transition), (Ge.transition = null);
    var o = W;
    W = 1;
    var d = H;
    (H |= 4),
      (Uo.current = null),
      Pf(a, s),
      qc(s, a),
      ef(Tn),
      (Pt = !!An),
      (Tn = An = null),
      (a.current = s),
      Mf(s),
      im(),
      (H = d),
      (W = o),
      (Ge.transition = n);
  } else a.current = s;
  if (
    (ot && ((ot = !1), (Ta = a), (Gt = i)),
    (n = a.pendingLanes),
    n === 0 && (Na = null),
    lm(s.stateNode),
    Me(a, te()),
    e !== null)
  )
    for (r = a.onRecoverableError, s = 0; s < e.length; s++)
      (i = e[s]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ft) throw ((Ft = !1), (a = Hn), (Hn = null), a);
  return (
    Gt & 1 && a.tag !== 0 && Cs(),
    (n = a.pendingLanes),
    n & 1 ? (a === Wn ? mr++ : ((mr = 0), (Wn = a))) : (mr = 0),
    Ba(),
    null
  );
}
function Cs() {
  if (Ta !== null) {
    var a = Eu(Gt),
      e = Ge.transition,
      s = W;
    try {
      if (((Ge.transition = null), (W = 16 > a ? 16 : a), Ta === null))
        var r = !1;
      else {
        if (((a = Ta), (Ta = null), (Gt = 0), H & 6)) throw Error(k(331));
        var i = H;
        for (H |= 4, U = a.current; U !== null; ) {
          var n = U,
            o = n.child;
          if (U.flags & 16) {
            var d = n.deletions;
            if (d !== null) {
              for (var l = 0; l < d.length; l++) {
                var p = d[l];
                for (U = p; U !== null; ) {
                  var c = U;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cr(8, c, n);
                  }
                  var u = c.child;
                  if (u !== null) (u.return = c), (U = u);
                  else
                    for (; U !== null; ) {
                      c = U;
                      var m = c.sibling,
                        v = c.return;
                      if ((Rc(c), c === p)) {
                        U = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = v), (U = m);
                        break;
                      }
                      U = v;
                    }
                }
              }
              var S = n.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var j = x.sibling;
                    (x.sibling = null), (x = j);
                  } while (x !== null);
                }
              }
              U = n;
            }
          }
          if (n.subtreeFlags & 2064 && o !== null) (o.return = n), (U = o);
          else
            e: for (; U !== null; ) {
              if (((n = U), n.flags & 2048))
                switch (n.tag) {
                  case 0:
                  case 11:
                  case 15:
                    cr(9, n, n.return);
                }
              var g = n.sibling;
              if (g !== null) {
                (g.return = n.return), (U = g);
                break e;
              }
              U = n.return;
            }
        }
        var f = a.current;
        for (U = f; U !== null; ) {
          o = U;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (U = h);
          else
            e: for (o = f; U !== null; ) {
              if (((d = U), d.flags & 2048))
                try {
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      di(9, d);
                  }
                } catch (b) {
                  ae(d, d.return, b);
                }
              if (d === o) {
                U = null;
                break e;
              }
              var E = d.sibling;
              if (E !== null) {
                (E.return = d.return), (U = E);
                break e;
              }
              U = d.return;
            }
        }
        if (
          ((H = i), Ba(), ta && typeof ta.onPostCommitFiberRoot == "function")
        )
          try {
            ta.onPostCommitFiberRoot(ai, a);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = s), (Ge.transition = e);
    }
  }
  return !1;
}
function fd(a, e, s) {
  (e = Ns(s, e)),
    (e = wc(a, e, 1)),
    (a = Ra(a, e, 1)),
    (e = we()),
    a !== null && (Lr(a, 1, e), Me(a, e));
}
function ae(a, e, s) {
  if (a.tag === 3) fd(a, a, s);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        fd(e, a, s);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Na === null || !Na.has(r)))
        ) {
          (a = Ns(s, a)),
            (a = bc(e, a, 1)),
            (e = Ra(e, a, 1)),
            (a = we()),
            e !== null && (Lr(e, 1, a), Me(e, a));
          break;
        }
      }
      e = e.return;
    }
}
function qf(a, e, s) {
  var r = a.pingCache;
  r !== null && r.delete(e),
    (e = we()),
    (a.pingedLanes |= a.suspendedLanes & s),
    ue === a &&
      (fe & s) === s &&
      (le === 4 || (le === 3 && (fe & 130023424) === fe && 500 > te() - $o)
        ? Ya(a, 0)
        : (Vo |= s)),
    Me(a, e);
}
function Bc(a, e) {
  e === 0 &&
    (a.mode & 1
      ? ((e = Zr), (Zr <<= 1), !(Zr & 130023424) && (Zr = 4194304))
      : (e = 1));
  var s = we();
  (a = ha(a, e)), a !== null && (Lr(a, e, s), Me(a, s));
}
function Lf(a) {
  var e = a.memoizedState,
    s = 0;
  e !== null && (s = e.retryLane), Bc(a, s);
}
function kf(a, e) {
  var s = 0;
  switch (a.tag) {
    case 13:
      var r = a.stateNode,
        i = a.memoizedState;
      i !== null && (s = i.retryLane);
      break;
    case 19:
      r = a.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(e), Bc(a, s);
}
var Fc;
Fc = function (a, e, s) {
  if (a !== null)
    if (a.memoizedProps !== e.pendingProps || Ce.current) Oe = !0;
    else {
      if (!(a.lanes & s) && !(e.flags & 128)) return (Oe = !1), Af(a, e, s);
      Oe = !!(a.flags & 131072);
    }
  else (Oe = !1), Z && e.flags & 1048576 && Wu(e, qt, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      xt(a, e), (a = e.pendingProps);
      var i = Ms(e, je.current);
      Os(e, s), (i = Do(null, e, r, a, i, s));
      var n = qo();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Pe(r) ? ((n = !0), Nt(e)) : (n = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Mo(e),
            (i.updater = oi),
            (e.stateNode = i),
            (i._reactInternals = e),
            Dn(e, r, a, s),
            (e = kn(null, e, r, !0, n, s)))
          : ((e.tag = 0), Z && n && bo(e), Ee(null, e, i, s), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (xt(a, e),
          (a = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Uf(r)),
          (a = Xe(r, a)),
          i)
        ) {
          case 0:
            e = Ln(null, e, r, a, s);
            break e;
          case 1:
            e = td(null, e, r, a, s);
            break e;
          case 11:
            e = sd(null, e, r, a, s);
            break e;
          case 14:
            e = rd(null, e, r, Xe(r.type, a), s);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        Ln(a, e, r, i, s)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        td(a, e, r, i, s)
      );
    case 3:
      e: {
        if ((Oc(e), a === null)) throw Error(k(387));
        (r = e.pendingProps),
          (n = e.memoizedState),
          (i = n.element),
          Zu(a, e),
          _t(e, r, null, s);
        var o = e.memoizedState;
        if (((r = o.element), n.isDehydrated))
          if (
            ((n = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = n),
            (e.memoizedState = n),
            e.flags & 256)
          ) {
            (i = Ns(Error(k(423)), e)), (e = id(a, e, r, s, i));
            break e;
          } else if (r !== i) {
            (i = Ns(Error(k(424)), e)), (e = id(a, e, r, s, i));
            break e;
          } else
            for (
              Ne = za(e.stateNode.containerInfo.firstChild),
                qe = e,
                Z = !0,
                Ze = null,
                s = ac(e, null, r, s),
                e.child = s;
              s;

            )
              (s.flags = (s.flags & -3) | 4096), (s = s.sibling);
        else {
          if ((Is(), r === i)) {
            e = ga(a, e, s);
            break e;
          }
          Ee(a, e, r, s);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        sc(e),
        a === null && zn(e),
        (r = e.type),
        (i = e.pendingProps),
        (n = a !== null ? a.memoizedProps : null),
        (o = i.children),
        On(r, i) ? (o = null) : n !== null && On(r, n) && (e.flags |= 32),
        Tc(a, e),
        Ee(a, e, o, s),
        e.child
      );
    case 6:
      return a === null && zn(e), null;
    case 13:
      return Cc(a, e, s);
    case 4:
      return (
        Io(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        a === null ? (e.child = zs(e, null, r, s)) : Ee(a, e, r, s),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        sd(a, e, r, i, s)
      );
    case 7:
      return Ee(a, e, e.pendingProps, s), e.child;
    case 8:
      return Ee(a, e, e.pendingProps.children, s), e.child;
    case 12:
      return Ee(a, e, e.pendingProps.children, s), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (n = e.memoizedProps),
          (o = i.value),
          Q(Lt, r._currentValue),
          (r._currentValue = o),
          n !== null)
        )
          if (ea(n.value, o)) {
            if (n.children === i.children && !Ce.current) {
              e = ga(a, e, s);
              break e;
            }
          } else
            for (n = e.child, n !== null && (n.return = e); n !== null; ) {
              var d = n.dependencies;
              if (d !== null) {
                o = n.child;
                for (var l = d.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (n.tag === 1) {
                      (l = pa(-1, s & -s)), (l.tag = 2);
                      var p = n.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var c = p.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (p.pending = l);
                      }
                    }
                    (n.lanes |= s),
                      (l = n.alternate),
                      l !== null && (l.lanes |= s),
                      Rn(n.return, s, e),
                      (d.lanes |= s);
                    break;
                  }
                  l = l.next;
                }
              } else if (n.tag === 10) o = n.type === e.type ? null : n.child;
              else if (n.tag === 18) {
                if (((o = n.return), o === null)) throw Error(k(341));
                (o.lanes |= s),
                  (d = o.alternate),
                  d !== null && (d.lanes |= s),
                  Rn(o, s, e),
                  (o = n.sibling);
              } else o = n.child;
              if (o !== null) o.return = n;
              else
                for (o = n; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((n = o.sibling), n !== null)) {
                    (n.return = o.return), (o = n);
                    break;
                  }
                  o = o.return;
                }
              n = o;
            }
        Ee(a, e, i.children, s), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Os(e, s),
        (i = He(i)),
        (r = r(i)),
        (e.flags |= 1),
        Ee(a, e, r, s),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Xe(r, e.pendingProps)),
        (i = Xe(r.type, i)),
        rd(a, e, r, i, s)
      );
    case 15:
      return yc(a, e, e.type, e.pendingProps, s);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        xt(a, e),
        (e.tag = 1),
        Pe(r) ? ((a = !0), Nt(e)) : (a = !1),
        Os(e, s),
        Ju(e, r, i),
        Dn(e, r, i, s),
        kn(null, e, r, !0, a, s)
      );
    case 19:
      return Pc(a, e, s);
    case 22:
      return Ac(a, e, s);
  }
  throw Error(k(156, e.tag));
};
function Gc(a, e) {
  return vu(a, e);
}
function _f(a, e, s, r) {
  (this.tag = a),
    (this.key = s),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Fe(a, e, s, r) {
  return new _f(a, e, s, r);
}
function Ho(a) {
  return (a = a.prototype), !(!a || !a.isReactComponent);
}
function Uf(a) {
  if (typeof a == "function") return Ho(a) ? 1 : 0;
  if (a != null) {
    if (((a = a.$$typeof), a === co)) return 11;
    if (a === po) return 14;
  }
  return 2;
}
function qa(a, e) {
  var s = a.alternate;
  return (
    s === null
      ? ((s = Fe(a.tag, e, a.key, a.mode)),
        (s.elementType = a.elementType),
        (s.type = a.type),
        (s.stateNode = a.stateNode),
        (s.alternate = a),
        (a.alternate = s))
      : ((s.pendingProps = e),
        (s.type = a.type),
        (s.flags = 0),
        (s.subtreeFlags = 0),
        (s.deletions = null)),
    (s.flags = a.flags & 14680064),
    (s.childLanes = a.childLanes),
    (s.lanes = a.lanes),
    (s.child = a.child),
    (s.memoizedProps = a.memoizedProps),
    (s.memoizedState = a.memoizedState),
    (s.updateQueue = a.updateQueue),
    (e = a.dependencies),
    (s.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (s.sibling = a.sibling),
    (s.index = a.index),
    (s.ref = a.ref),
    s
  );
}
function Et(a, e, s, r, i, n) {
  var o = 2;
  if (((r = a), typeof a == "function")) Ho(a) && (o = 1);
  else if (typeof a == "string") o = 5;
  else
    e: switch (a) {
      case ps:
        return Za(s.children, i, n, e);
      case uo:
        (o = 8), (i |= 8);
        break;
      case tn:
        return (
          (a = Fe(12, s, e, i | 2)), (a.elementType = tn), (a.lanes = n), a
        );
      case nn:
        return (a = Fe(13, s, e, i)), (a.elementType = nn), (a.lanes = n), a;
      case on:
        return (a = Fe(19, s, e, i)), (a.elementType = on), (a.lanes = n), a;
      case eu:
        return ci(s, i, n, e);
      default:
        if (typeof a == "object" && a !== null)
          switch (a.$$typeof) {
            case Kd:
              o = 10;
              break e;
            case Jd:
              o = 9;
              break e;
            case co:
              o = 11;
              break e;
            case po:
              o = 14;
              break e;
            case Ea:
              (o = 16), (r = null);
              break e;
          }
        throw Error(k(130, a == null ? a : typeof a, ""));
    }
  return (
    (e = Fe(o, s, e, i)), (e.elementType = a), (e.type = r), (e.lanes = n), e
  );
}
function Za(a, e, s, r) {
  return (a = Fe(7, a, r, e)), (a.lanes = s), a;
}
function ci(a, e, s, r) {
  return (
    (a = Fe(22, a, r, e)),
    (a.elementType = eu),
    (a.lanes = s),
    (a.stateNode = { isHidden: !1 }),
    a
  );
}
function Wi(a, e, s) {
  return (a = Fe(6, a, null, e)), (a.lanes = s), a;
}
function Qi(a, e, s) {
  return (
    (e = Fe(4, a.children !== null ? a.children : [], a.key, e)),
    (e.lanes = s),
    (e.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation,
    }),
    e
  );
}
function Vf(a, e, s, r, i) {
  (this.tag = e),
    (this.containerInfo = a),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ci(0)),
    (this.expirationTimes = Ci(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ci(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Wo(a, e, s, r, i, n, o, d, l) {
  return (
    (a = new Vf(a, e, s, d, l)),
    e === 1 ? ((e = 1), n === !0 && (e |= 8)) : (e = 0),
    (n = Fe(3, null, null, e)),
    (a.current = n),
    (n.stateNode = a),
    (n.memoizedState = {
      element: r,
      isDehydrated: s,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Mo(n),
    a
  );
}
function $f(a, e, s) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: cs,
    key: r == null ? null : "" + r,
    children: a,
    containerInfo: e,
    implementation: s,
  };
}
function Hc(a) {
  if (!a) return Ua;
  a = a._reactInternals;
  e: {
    if (ns(a) !== a || a.tag !== 1) throw Error(k(170));
    var e = a;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Pe(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(k(171));
  }
  if (a.tag === 1) {
    var s = a.type;
    if (Pe(s)) return Gu(a, s, e);
  }
  return e;
}
function Wc(a, e, s, r, i, n, o, d, l) {
  return (
    (a = Wo(s, r, !0, a, i, n, o, d, l)),
    (a.context = Hc(null)),
    (s = a.current),
    (r = we()),
    (i = Da(s)),
    (n = pa(r, i)),
    (n.callback = e ?? null),
    Ra(s, n, i),
    (a.current.lanes = i),
    Lr(a, i, r),
    Me(a, r),
    a
  );
}
function pi(a, e, s, r) {
  var i = e.current,
    n = we(),
    o = Da(i);
  return (
    (s = Hc(s)),
    e.context === null ? (e.context = s) : (e.pendingContext = s),
    (e = pa(n, o)),
    (e.payload = { element: a }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (a = Ra(i, e, o)),
    a !== null && (Je(a, i, o, n), ht(a, i, o)),
    o
  );
}
function Wt(a) {
  if (((a = a.current), !a.child)) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hd(a, e) {
  if (((a = a.memoizedState), a !== null && a.dehydrated !== null)) {
    var s = a.retryLane;
    a.retryLane = s !== 0 && s < e ? s : e;
  }
}
function Qo(a, e) {
  hd(a, e), (a = a.alternate) && hd(a, e);
}
function Bf() {
  return null;
}
var Qc =
  typeof reportError == "function"
    ? reportError
    : function (a) {
        console.error(a);
      };
function Xo(a) {
  this._internalRoot = a;
}
mi.prototype.render = Xo.prototype.render = function (a) {
  var e = this._internalRoot;
  if (e === null) throw Error(k(409));
  pi(a, e, null, null);
};
mi.prototype.unmount = Xo.prototype.unmount = function () {
  var a = this._internalRoot;
  if (a !== null) {
    this._internalRoot = null;
    var e = a.containerInfo;
    rs(function () {
      pi(null, a, null, null);
    }),
      (e[fa] = null);
  }
};
function mi(a) {
  this._internalRoot = a;
}
mi.prototype.unstable_scheduleHydration = function (a) {
  if (a) {
    var e = yu();
    a = { blockedOn: null, target: a, priority: e };
    for (var s = 0; s < ba.length && e !== 0 && e < ba[s].priority; s++);
    ba.splice(s, 0, a), s === 0 && Tu(a);
  }
};
function Yo(a) {
  return !(!a || (a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11));
}
function fi(a) {
  return !(
    !a ||
    (a.nodeType !== 1 &&
      a.nodeType !== 9 &&
      a.nodeType !== 11 &&
      (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "))
  );
}
function gd() {}
function Ff(a, e, s, r, i) {
  if (i) {
    if (typeof r == "function") {
      var n = r;
      r = function () {
        var p = Wt(o);
        n.call(p);
      };
    }
    var o = Wc(e, r, a, 0, null, !1, !1, "", gd);
    return (
      (a._reactRootContainer = o),
      (a[fa] = o.current),
      yr(a.nodeType === 8 ? a.parentNode : a),
      rs(),
      o
    );
  }
  for (; (i = a.lastChild); ) a.removeChild(i);
  if (typeof r == "function") {
    var d = r;
    r = function () {
      var p = Wt(l);
      d.call(p);
    };
  }
  var l = Wo(a, 0, !1, null, null, !1, !1, "", gd);
  return (
    (a._reactRootContainer = l),
    (a[fa] = l.current),
    yr(a.nodeType === 8 ? a.parentNode : a),
    rs(function () {
      pi(e, l, s, r);
    }),
    l
  );
}
function hi(a, e, s, r, i) {
  var n = s._reactRootContainer;
  if (n) {
    var o = n;
    if (typeof i == "function") {
      var d = i;
      i = function () {
        var l = Wt(o);
        d.call(l);
      };
    }
    pi(e, o, a, i);
  } else o = Ff(s, e, a, i, r);
  return Wt(o);
}
wu = function (a) {
  switch (a.tag) {
    case 3:
      var e = a.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var s = ar(e.pendingLanes);
        s !== 0 &&
          (ho(e, s | 1), Me(e, te()), !(H & 6) && ((Ds = te() + 500), Ba()));
      }
      break;
    case 13:
      rs(function () {
        var r = ha(a, 1);
        if (r !== null) {
          var i = we();
          Je(r, a, 1, i);
        }
      }),
        Qo(a, 1);
  }
};
go = function (a) {
  if (a.tag === 13) {
    var e = ha(a, 134217728);
    if (e !== null) {
      var s = we();
      Je(e, a, 134217728, s);
    }
    Qo(a, 134217728);
  }
};
bu = function (a) {
  if (a.tag === 13) {
    var e = Da(a),
      s = ha(a, e);
    if (s !== null) {
      var r = we();
      Je(s, a, e, r);
    }
    Qo(a, e);
  }
};
yu = function () {
  return W;
};
Au = function (a, e) {
  var s = W;
  try {
    return (W = a), e();
  } finally {
    W = s;
  }
};
vn = function (a, e, s) {
  switch (e) {
    case "input":
      if ((un(a, s), (e = s.name), s.type === "radio" && e != null)) {
        for (s = a; s.parentNode; ) s = s.parentNode;
        for (
          s = s.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < s.length;
          e++
        ) {
          var r = s[e];
          if (r !== a && r.form === a.form) {
            var i = ii(r);
            if (!i) throw Error(k(90));
            su(r), un(r, i);
          }
        }
      }
      break;
    case "textarea":
      tu(a, s);
      break;
    case "select":
      (e = s.value), e != null && bs(a, !!s.multiple, e, !1);
  }
};
cu = Bo;
pu = rs;
var Gf = { usingClientEntryPoint: !1, Events: [_r, gs, ii, du, uu, Bo] },
  Ks = {
    findFiberByHostInstance: Wa,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Hf = {
    bundleType: Ks.bundleType,
    version: Ks.version,
    rendererPackageName: Ks.rendererPackageName,
    rendererConfig: Ks.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xa.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (a) {
      return (a = hu(a)), a === null ? null : a.stateNode;
    },
    findFiberByHostInstance: Ks.findFiberByHostInstance || Bf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var lt = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!lt.isDisabled && lt.supportsFiber)
    try {
      (ai = lt.inject(Hf)), (ta = lt);
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gf;
ke.createPortal = function (a, e) {
  var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yo(e)) throw Error(k(200));
  return $f(a, e, null, s);
};
ke.createRoot = function (a, e) {
  if (!Yo(a)) throw Error(k(299));
  var s = !1,
    r = "",
    i = Qc;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (s = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Wo(a, 1, !1, null, null, s, !1, r, i)),
    (a[fa] = e.current),
    yr(a.nodeType === 8 ? a.parentNode : a),
    new Xo(e)
  );
};
ke.findDOMNode = function (a) {
  if (a == null) return null;
  if (a.nodeType === 1) return a;
  var e = a._reactInternals;
  if (e === void 0)
    throw typeof a.render == "function"
      ? Error(k(188))
      : ((a = Object.keys(a).join(",")), Error(k(268, a)));
  return (a = hu(e)), (a = a === null ? null : a.stateNode), a;
};
ke.flushSync = function (a) {
  return rs(a);
};
ke.hydrate = function (a, e, s) {
  if (!fi(e)) throw Error(k(200));
  return hi(null, a, e, !0, s);
};
ke.hydrateRoot = function (a, e, s) {
  if (!Yo(a)) throw Error(k(405));
  var r = (s != null && s.hydratedSources) || null,
    i = !1,
    n = "",
    o = Qc;
  if (
    (s != null &&
      (s.unstable_strictMode === !0 && (i = !0),
      s.identifierPrefix !== void 0 && (n = s.identifierPrefix),
      s.onRecoverableError !== void 0 && (o = s.onRecoverableError)),
    (e = Wc(e, null, a, 1, s ?? null, i, !1, n, o)),
    (a[fa] = e.current),
    yr(a),
    r)
  )
    for (a = 0; a < r.length; a++)
      (s = r[a]),
        (i = s._getVersion),
        (i = i(s._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [s, i])
          : e.mutableSourceEagerHydrationData.push(s, i);
  return new mi(e);
};
ke.render = function (a, e, s) {
  if (!fi(e)) throw Error(k(200));
  return hi(null, a, e, !1, s);
};
ke.unmountComponentAtNode = function (a) {
  if (!fi(a)) throw Error(k(40));
  return a._reactRootContainer
    ? (rs(function () {
        hi(null, null, a, !1, function () {
          (a._reactRootContainer = null), (a[fa] = null);
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Bo;
ke.unstable_renderSubtreeIntoContainer = function (a, e, s, r) {
  if (!fi(s)) throw Error(k(200));
  if (a == null || a._reactInternals === void 0) throw Error(k(38));
  return hi(a, e, s, !1, r);
};
ke.version = "18.2.0-next-9e3b772b8-20220608";
function Xc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc);
    } catch (a) {
      console.error(a);
    }
}
Xc(), (Wd.exports = ke);
var Wf = Wd.exports,
  vd = Wf;
(sn.createRoot = vd.createRoot), (sn.hydrateRoot = vd.hydrateRoot);
/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Rr() {
  return (
    (Rr = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var e = 1; e < arguments.length; e++) {
            var s = arguments[e];
            for (var r in s)
              Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s[r]);
          }
          return a;
        }),
    Rr.apply(this, arguments)
  );
}
var Oa;
(function (a) {
  (a.Pop = "POP"), (a.Push = "PUSH"), (a.Replace = "REPLACE");
})(Oa || (Oa = {}));
const xd = "popstate";
function Qf(a) {
  a === void 0 && (a = {});
  function e(r, i) {
    let { pathname: n, search: o, hash: d } = r.location;
    return Yn(
      "",
      { pathname: n, search: o, hash: d },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function s(r, i) {
    return typeof i == "string" ? i : Qt(i);
  }
  return Yf(e, s, null, a);
}
function ne(a, e) {
  if (a === !1 || a === null || typeof a > "u") throw new Error(e);
}
function Zo(a, e) {
  if (!a) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function Xf() {
  return Math.random().toString(36).substr(2, 8);
}
function Sd(a, e) {
  return { usr: a.state, key: a.key, idx: e };
}
function Yn(a, e, s, r) {
  return (
    s === void 0 && (s = null),
    Rr(
      { pathname: typeof a == "string" ? a : a.pathname, search: "", hash: "" },
      typeof e == "string" ? Us(e) : e,
      { state: s, key: (e && e.key) || r || Xf() }
    )
  );
}
function Qt(a) {
  let { pathname: e = "/", search: s = "", hash: r = "" } = a;
  return (
    s && s !== "?" && (e += s.charAt(0) === "?" ? s : "?" + s),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function Us(a) {
  let e = {};
  if (a) {
    let s = a.indexOf("#");
    s >= 0 && ((e.hash = a.substr(s)), (a = a.substr(0, s)));
    let r = a.indexOf("?");
    r >= 0 && ((e.search = a.substr(r)), (a = a.substr(0, r))),
      a && (e.pathname = a);
  }
  return e;
}
function Yf(a, e, s, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: n = !1 } = r,
    o = i.history,
    d = Oa.Pop,
    l = null,
    p = c();
  p == null && ((p = 0), o.replaceState(Rr({}, o.state, { idx: p }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function u() {
    d = Oa.Pop;
    let j = c(),
      g = j == null ? null : j - p;
    (p = j), l && l({ action: d, location: x.location, delta: g });
  }
  function m(j, g) {
    d = Oa.Push;
    let f = Yn(x.location, j, g);
    s && s(f, j), (p = c() + 1);
    let h = Sd(f, p),
      E = x.createHref(f);
    try {
      o.pushState(h, "", E);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError") throw b;
      i.location.assign(E);
    }
    n && l && l({ action: d, location: x.location, delta: 1 });
  }
  function v(j, g) {
    d = Oa.Replace;
    let f = Yn(x.location, j, g);
    s && s(f, j), (p = c());
    let h = Sd(f, p),
      E = x.createHref(f);
    o.replaceState(h, "", E),
      n && l && l({ action: d, location: x.location, delta: 0 });
  }
  function S(j) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      f = typeof j == "string" ? j : Qt(j);
    return (
      ne(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          f
      ),
      new URL(f, g)
    );
  }
  let x = {
    get action() {
      return d;
    },
    get location() {
      return a(i, o);
    },
    listen(j) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(xd, u),
        (l = j),
        () => {
          i.removeEventListener(xd, u), (l = null);
        }
      );
    },
    createHref(j) {
      return e(i, j);
    },
    createURL: S,
    encodeLocation(j) {
      let g = S(j);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: m,
    replace: v,
    go(j) {
      return o.go(j);
    },
  };
  return x;
}
var jd;
(function (a) {
  (a.data = "data"),
    (a.deferred = "deferred"),
    (a.redirect = "redirect"),
    (a.error = "error");
})(jd || (jd = {}));
function Zf(a, e, s) {
  s === void 0 && (s = "/");
  let r = typeof e == "string" ? Us(e) : e,
    i = Ko(r.pathname || "/", s);
  if (i == null) return null;
  let n = Yc(a);
  Kf(n);
  let o = null;
  for (let d = 0; o == null && d < n.length; ++d) o = oh(n[d], uh(i));
  return o;
}
function Yc(a, e, s, r) {
  e === void 0 && (e = []), s === void 0 && (s = []), r === void 0 && (r = "");
  let i = (n, o, d) => {
    let l = {
      relativePath: d === void 0 ? n.path || "" : d,
      caseSensitive: n.caseSensitive === !0,
      childrenIndex: o,
      route: n,
    };
    l.relativePath.startsWith("/") &&
      (ne(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let p = La([r, l.relativePath]),
      c = s.concat(l);
    n.children &&
      n.children.length > 0 &&
      (ne(
        n.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + p + '".')
      ),
      Yc(n.children, e, c, p)),
      !(n.path == null && !n.index) &&
        e.push({ path: p, score: ih(p, n.index), routesMeta: c });
  };
  return (
    a.forEach((n, o) => {
      var d;
      if (n.path === "" || !((d = n.path) != null && d.includes("?"))) i(n, o);
      else for (let l of Zc(n.path)) i(n, o, l);
    }),
    e
  );
}
function Zc(a) {
  let e = a.split("/");
  if (e.length === 0) return [];
  let [s, ...r] = e,
    i = s.endsWith("?"),
    n = s.replace(/\?$/, "");
  if (r.length === 0) return i ? [n, ""] : [n];
  let o = Zc(r.join("/")),
    d = [];
  return (
    d.push(...o.map((l) => (l === "" ? n : [n, l].join("/")))),
    i && d.push(...o),
    d.map((l) => (a.startsWith("/") && l === "" ? "/" : l))
  );
}
function Kf(a) {
  a.sort((e, s) =>
    e.score !== s.score
      ? s.score - e.score
      : nh(
          e.routesMeta.map((r) => r.childrenIndex),
          s.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Jf = /^:\w+$/,
  eh = 3,
  ah = 2,
  sh = 1,
  rh = 10,
  th = -2,
  Ed = (a) => a === "*";
function ih(a, e) {
  let s = a.split("/"),
    r = s.length;
  return (
    s.some(Ed) && (r += th),
    e && (r += ah),
    s
      .filter((i) => !Ed(i))
      .reduce((i, n) => i + (Jf.test(n) ? eh : n === "" ? sh : rh), r)
  );
}
function nh(a, e) {
  return a.length === e.length && a.slice(0, -1).every((r, i) => r === e[i])
    ? a[a.length - 1] - e[e.length - 1]
    : 0;
}
function oh(a, e) {
  let { routesMeta: s } = a,
    r = {},
    i = "/",
    n = [];
  for (let o = 0; o < s.length; ++o) {
    let d = s[o],
      l = o === s.length - 1,
      p = i === "/" ? e : e.slice(i.length) || "/",
      c = lh(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: l },
        p
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let u = d.route;
    n.push({
      params: r,
      pathname: La([i, c.pathname]),
      pathnameBase: hh(La([i, c.pathnameBase])),
      route: u,
    }),
      c.pathnameBase !== "/" && (i = La([i, c.pathnameBase]));
  }
  return n;
}
function lh(a, e) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [s, r] = dh(a.path, a.caseSensitive, a.end),
    i = e.match(s);
  if (!i) return null;
  let n = i[0],
    o = n.replace(/(.)\/+$/, "$1"),
    d = i.slice(1);
  return {
    params: r.reduce((p, c, u) => {
      let { paramName: m, isOptional: v } = c;
      if (m === "*") {
        let x = d[u] || "";
        o = n.slice(0, n.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const S = d[u];
      return v && !S ? (p[m] = void 0) : (p[m] = ch(S || "", m)), p;
    }, {}),
    pathname: n,
    pathnameBase: o,
    pattern: a,
  };
}
function dh(a, e, s) {
  e === void 0 && (e = !1),
    s === void 0 && (s = !0),
    Zo(
      a === "*" || !a.endsWith("*") || a.endsWith("/*"),
      'Route path "' +
        a +
        '" will be treated as if it were ' +
        ('"' + a.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + a.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      a
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)(\?)?/g,
          (o, d, l) => (
            r.push({ paramName: d, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    a.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (i += "\\/*$")
      : a !== "" && a !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function uh(a) {
  try {
    return decodeURI(a);
  } catch (e) {
    return (
      Zo(
        !1,
        'The URL path "' +
          a +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      a
    );
  }
}
function ch(a, e) {
  try {
    return decodeURIComponent(a);
  } catch (s) {
    return (
      Zo(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            a +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + s + ").")
      ),
      a
    );
  }
}
function Ko(a, e) {
  if (e === "/") return a;
  if (!a.toLowerCase().startsWith(e.toLowerCase())) return null;
  let s = e.endsWith("/") ? e.length - 1 : e.length,
    r = a.charAt(s);
  return r && r !== "/" ? null : a.slice(s) || "/";
}
function ph(a, e) {
  e === void 0 && (e = "/");
  let {
    pathname: s,
    search: r = "",
    hash: i = "",
  } = typeof a == "string" ? Us(a) : a;
  return {
    pathname: s ? (s.startsWith("/") ? s : mh(s, e)) : e,
    search: gh(r),
    hash: vh(i),
  };
}
function mh(a, e) {
  let s = e.replace(/\/+$/, "").split("/");
  return (
    a.split("/").forEach((i) => {
      i === ".." ? s.length > 1 && s.pop() : i !== "." && s.push(i);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Xi(a, e, s, r) {
  return (
    "Cannot include a '" +
    a +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + s + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function fh(a) {
  return a.filter(
    (e, s) => s === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Kc(a, e) {
  let s = fh(a);
  return e
    ? s.map((r, i) => (i === a.length - 1 ? r.pathname : r.pathnameBase))
    : s.map((r) => r.pathnameBase);
}
function Jc(a, e, s, r) {
  r === void 0 && (r = !1);
  let i;
  typeof a == "string"
    ? (i = Us(a))
    : ((i = Rr({}, a)),
      ne(
        !i.pathname || !i.pathname.includes("?"),
        Xi("?", "pathname", "search", i)
      ),
      ne(
        !i.pathname || !i.pathname.includes("#"),
        Xi("#", "pathname", "hash", i)
      ),
      ne(!i.search || !i.search.includes("#"), Xi("#", "search", "hash", i)));
  let n = a === "" || i.pathname === "",
    o = n ? "/" : i.pathname,
    d;
  if (o == null) d = s;
  else if (r) {
    let u = e.length === 0 ? [] : e[e.length - 1].replace(/^\//, "").split("/");
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), u.pop();
      i.pathname = m.join("/");
    }
    d = "/" + u.join("/");
  } else {
    let u = e.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (u -= 1);
      i.pathname = m.join("/");
    }
    d = u >= 0 ? e[u] : "/";
  }
  let l = ph(i, d),
    p = o && o !== "/" && o.endsWith("/"),
    c = (n || o === ".") && s.endsWith("/");
  return !l.pathname.endsWith("/") && (p || c) && (l.pathname += "/"), l;
}
const La = (a) => a.join("/").replace(/\/\/+/g, "/"),
  hh = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
  gh = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
  vh = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a);
function xh(a) {
  return (
    a != null &&
    typeof a.status == "number" &&
    typeof a.statusText == "string" &&
    typeof a.internal == "boolean" &&
    "data" in a
  );
}
const ep = ["post", "put", "patch", "delete"];
new Set(ep);
const Sh = ["get", ...ep];
new Set(Sh);
/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Nr() {
  return (
    (Nr = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var e = 1; e < arguments.length; e++) {
            var s = arguments[e];
            for (var r in s)
              Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s[r]);
          }
          return a;
        }),
    Nr.apply(this, arguments)
  );
}
const Jo = _.createContext(null),
  jh = _.createContext(null),
  os = _.createContext(null),
  gi = _.createContext(null),
  ls = _.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ap = _.createContext(null);
function Eh(a, e) {
  let { relative: s } = e === void 0 ? {} : e;
  Vr() || ne(!1);
  let { basename: r, navigator: i } = _.useContext(os),
    { hash: n, pathname: o, search: d } = rp(a, { relative: s }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : La([r, o])),
    i.createHref({ pathname: l, search: d, hash: n })
  );
}
function Vr() {
  return _.useContext(gi) != null;
}
function vi() {
  return Vr() || ne(!1), _.useContext(gi).location;
}
function sp(a) {
  _.useContext(os).static || _.useLayoutEffect(a);
}
function wh() {
  let { isDataRoute: a } = _.useContext(ls);
  return a ? Dh() : bh();
}
function bh() {
  Vr() || ne(!1);
  let a = _.useContext(Jo),
    { basename: e, future: s, navigator: r } = _.useContext(os),
    { matches: i } = _.useContext(ls),
    { pathname: n } = vi(),
    o = JSON.stringify(Kc(i, s.v7_relativeSplatPath)),
    d = _.useRef(!1);
  return (
    sp(() => {
      d.current = !0;
    }),
    _.useCallback(
      function (p, c) {
        if ((c === void 0 && (c = {}), !d.current)) return;
        if (typeof p == "number") {
          r.go(p);
          return;
        }
        let u = Jc(p, JSON.parse(o), n, c.relative === "path");
        a == null &&
          e !== "/" &&
          (u.pathname = u.pathname === "/" ? e : La([e, u.pathname])),
          (c.replace ? r.replace : r.push)(u, c.state, c);
      },
      [e, r, o, n, a]
    )
  );
}
function rp(a, e) {
  let { relative: s } = e === void 0 ? {} : e,
    { future: r } = _.useContext(os),
    { matches: i } = _.useContext(ls),
    { pathname: n } = vi(),
    o = JSON.stringify(Kc(i, r.v7_relativeSplatPath));
  return _.useMemo(() => Jc(a, JSON.parse(o), n, s === "path"), [a, o, n, s]);
}
function yh(a, e) {
  return Ah(a, e);
}
function Ah(a, e, s, r) {
  Vr() || ne(!1);
  let { navigator: i } = _.useContext(os),
    { matches: n } = _.useContext(ls),
    o = n[n.length - 1],
    d = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let p = vi(),
    c;
  if (e) {
    var u;
    let j = typeof e == "string" ? Us(e) : e;
    l === "/" || ((u = j.pathname) != null && u.startsWith(l)) || ne(!1),
      (c = j);
  } else c = p;
  let m = c.pathname || "/",
    v = l === "/" ? m : m.slice(l.length) || "/",
    S = Zf(a, { pathname: v }),
    x = Mh(
      S &&
        S.map((j) =>
          Object.assign({}, j, {
            params: Object.assign({}, d, j.params),
            pathname: La([
              l,
              i.encodeLocation
                ? i.encodeLocation(j.pathname).pathname
                : j.pathname,
            ]),
            pathnameBase:
              j.pathnameBase === "/"
                ? l
                : La([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(j.pathnameBase).pathname
                      : j.pathnameBase,
                  ]),
          })
        ),
      n,
      s,
      r
    );
  return e && x
    ? _.createElement(
        gi.Provider,
        {
          value: {
            location: Nr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Oa.Pop,
          },
        },
        x
      )
    : x;
}
function Th() {
  let a = Nh(),
    e = xh(a)
      ? a.status + " " + a.statusText
      : a instanceof Error
      ? a.message
      : JSON.stringify(a),
    s = a instanceof Error ? a.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    n = null;
  return _.createElement(
    _.Fragment,
    null,
    _.createElement("h2", null, "Unexpected Application Error!"),
    _.createElement("h3", { style: { fontStyle: "italic" } }, e),
    s ? _.createElement("pre", { style: i }, s) : null,
    n
  );
}
const Oh = _.createElement(Th, null);
class Ch extends _.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, s) {
    return s.location !== e.location ||
      (s.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : s.error,
          location: s.location,
          revalidation: e.revalidation || s.revalidation,
        };
  }
  componentDidCatch(e, s) {
    console.error(
      "React Router caught the following error during render",
      e,
      s
    );
  }
  render() {
    return this.state.error !== void 0
      ? _.createElement(
          ls.Provider,
          { value: this.props.routeContext },
          _.createElement(ap.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ph(a) {
  let { routeContext: e, match: s, children: r } = a,
    i = _.useContext(Jo);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = s.route.id),
    _.createElement(ls.Provider, { value: e }, r)
  );
}
function Mh(a, e, s, r) {
  var i;
  if (
    (e === void 0 && (e = []),
    s === void 0 && (s = null),
    r === void 0 && (r = null),
    a == null)
  ) {
    var n;
    if ((n = s) != null && n.errors) a = s.matches;
    else return null;
  }
  let o = a,
    d = (i = s) == null ? void 0 : i.errors;
  if (d != null) {
    let c = o.findIndex(
      (u) => u.route.id && (d == null ? void 0 : d[u.route.id])
    );
    c >= 0 || ne(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    p = -1;
  if (s && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let u = o[c];
      if (
        ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (p = c),
        u.route.loader &&
          u.route.id &&
          s.loaderData[u.route.id] === void 0 &&
          (!s.errors || s.errors[u.route.id] === void 0))
      ) {
        (l = !0), p >= 0 ? (o = o.slice(0, p + 1)) : (o = [o[0]]);
        break;
      }
    }
  return o.reduceRight((c, u, m) => {
    let v,
      S = !1,
      x = null,
      j = null;
    s &&
      ((v = d && u.route.id ? d[u.route.id] : void 0),
      (x = u.route.errorElement || Oh),
      l &&
        (p < 0 && m === 0
          ? (qh("route-fallback", !1), (S = !0), (j = null))
          : p === m &&
            ((S = !0), (j = u.route.hydrateFallbackElement || null))));
    let g = e.concat(o.slice(0, m + 1)),
      f = () => {
        let h;
        return (
          v
            ? (h = x)
            : S
            ? (h = j)
            : u.route.Component
            ? (h = _.createElement(u.route.Component, null))
            : u.route.element
            ? (h = u.route.element)
            : (h = c),
          _.createElement(Ph, {
            match: u,
            routeContext: { outlet: c, matches: g, isDataRoute: s != null },
            children: h,
          })
        );
      };
    return s && (u.route.ErrorBoundary || u.route.errorElement || m === 0)
      ? _.createElement(Ch, {
          location: s.location,
          revalidation: s.revalidation,
          component: x,
          error: v,
          children: f(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : f();
  }, null);
}
var tp = (function (a) {
    return (
      (a.UseBlocker = "useBlocker"),
      (a.UseRevalidator = "useRevalidator"),
      (a.UseNavigateStable = "useNavigate"),
      a
    );
  })(tp || {}),
  Xt = (function (a) {
    return (
      (a.UseBlocker = "useBlocker"),
      (a.UseLoaderData = "useLoaderData"),
      (a.UseActionData = "useActionData"),
      (a.UseRouteError = "useRouteError"),
      (a.UseNavigation = "useNavigation"),
      (a.UseRouteLoaderData = "useRouteLoaderData"),
      (a.UseMatches = "useMatches"),
      (a.UseRevalidator = "useRevalidator"),
      (a.UseNavigateStable = "useNavigate"),
      (a.UseRouteId = "useRouteId"),
      a
    );
  })(Xt || {});
function Ih(a) {
  let e = _.useContext(Jo);
  return e || ne(!1), e;
}
function zh(a) {
  let e = _.useContext(jh);
  return e || ne(!1), e;
}
function Rh(a) {
  let e = _.useContext(ls);
  return e || ne(!1), e;
}
function ip(a) {
  let e = Rh(),
    s = e.matches[e.matches.length - 1];
  return s.route.id || ne(!1), s.route.id;
}
function Nh() {
  var a;
  let e = _.useContext(ap),
    s = zh(Xt.UseRouteError),
    r = ip(Xt.UseRouteError);
  return e !== void 0 ? e : (a = s.errors) == null ? void 0 : a[r];
}
function Dh() {
  let { router: a } = Ih(tp.UseNavigateStable),
    e = ip(Xt.UseNavigateStable),
    s = _.useRef(!1);
  return (
    sp(() => {
      s.current = !0;
    }),
    _.useCallback(
      function (i, n) {
        n === void 0 && (n = {}),
          s.current &&
            (typeof i == "number"
              ? a.navigate(i)
              : a.navigate(i, Nr({ fromRouteId: e }, n)));
      },
      [a, e]
    )
  );
}
const wd = {};
function qh(a, e, s) {
  !e && !wd[a] && (wd[a] = !0);
}
function Ie(a) {
  ne(!1);
}
function Lh(a) {
  let {
    basename: e = "/",
    children: s = null,
    location: r,
    navigationType: i = Oa.Pop,
    navigator: n,
    static: o = !1,
    future: d,
  } = a;
  Vr() && ne(!1);
  let l = e.replace(/^\/*/, "/"),
    p = _.useMemo(
      () => ({
        basename: l,
        navigator: n,
        static: o,
        future: Nr({ v7_relativeSplatPath: !1 }, d),
      }),
      [l, d, n, o]
    );
  typeof r == "string" && (r = Us(r));
  let {
      pathname: c = "/",
      search: u = "",
      hash: m = "",
      state: v = null,
      key: S = "default",
    } = r,
    x = _.useMemo(() => {
      let j = Ko(c, l);
      return j == null
        ? null
        : {
            location: { pathname: j, search: u, hash: m, state: v, key: S },
            navigationType: i,
          };
    }, [l, c, u, m, v, S, i]);
  return x == null
    ? null
    : _.createElement(
        os.Provider,
        { value: p },
        _.createElement(gi.Provider, { children: s, value: x })
      );
}
function kh(a) {
  let { children: e, location: s } = a;
  return yh(Zn(e), s);
}
new Promise(() => {});
function Zn(a, e) {
  e === void 0 && (e = []);
  let s = [];
  return (
    _.Children.forEach(a, (r, i) => {
      if (!_.isValidElement(r)) return;
      let n = [...e, i];
      if (r.type === _.Fragment) {
        s.push.apply(s, Zn(r.props.children, n));
        return;
      }
      r.type !== Ie && ne(!1), !r.props.index || !r.props.children || ne(!1);
      let o = {
        id: r.props.id || n.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Zn(r.props.children, n)), s.push(o);
    }),
    s
  );
}
/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kn() {
  return (
    (Kn = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var e = 1; e < arguments.length; e++) {
            var s = arguments[e];
            for (var r in s)
              Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s[r]);
          }
          return a;
        }),
    Kn.apply(this, arguments)
  );
}
function _h(a, e) {
  if (a == null) return {};
  var s = {},
    r = Object.keys(a),
    i,
    n;
  for (n = 0; n < r.length; n++)
    (i = r[n]), !(e.indexOf(i) >= 0) && (s[i] = a[i]);
  return s;
}
function Uh(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function Vh(a, e) {
  return a.button === 0 && (!e || e === "_self") && !Uh(a);
}
const $h = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Bh = "startTransition",
  bd = qp[Bh];
function Fh(a) {
  let { basename: e, children: s, future: r, window: i } = a,
    n = _.useRef();
  n.current == null && (n.current = Qf({ window: i, v5Compat: !0 }));
  let o = n.current,
    [d, l] = _.useState({ action: o.action, location: o.location }),
    { v7_startTransition: p } = r || {},
    c = _.useCallback(
      (u) => {
        p && bd ? bd(() => l(u)) : l(u);
      },
      [l, p]
    );
  return (
    _.useLayoutEffect(() => o.listen(c), [o, c]),
    _.createElement(Lh, {
      basename: e,
      children: s,
      location: d.location,
      navigationType: d.action,
      navigator: o,
      future: r,
    })
  );
}
const Gh =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  dt = _.forwardRef(function (e, s) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: n,
        replace: o,
        state: d,
        target: l,
        to: p,
        preventScrollReset: c,
        unstable_viewTransition: u,
      } = e,
      m = _h(e, $h),
      { basename: v } = _.useContext(os),
      S,
      x = !1;
    if (typeof p == "string" && Hh.test(p) && ((S = p), Gh))
      try {
        let h = new URL(window.location.href),
          E = p.startsWith("//") ? new URL(h.protocol + p) : new URL(p),
          b = Ko(E.pathname, v);
        E.origin === h.origin && b != null
          ? (p = b + E.search + E.hash)
          : (x = !0);
      } catch {}
    let j = Eh(p, { relative: i }),
      g = Wh(p, {
        replace: o,
        state: d,
        target: l,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: u,
      });
    function f(h) {
      r && r(h), h.defaultPrevented || g(h);
    }
    return _.createElement(
      "a",
      Kn({}, m, { href: S || j, onClick: x || n ? r : f, ref: s, target: l })
    );
  });
var yd;
(function (a) {
  (a.UseScrollRestoration = "useScrollRestoration"),
    (a.UseSubmit = "useSubmit"),
    (a.UseSubmitFetcher = "useSubmitFetcher"),
    (a.UseFetcher = "useFetcher"),
    (a.useViewTransitionState = "useViewTransitionState");
})(yd || (yd = {}));
var Ad;
(function (a) {
  (a.UseFetcher = "useFetcher"),
    (a.UseFetchers = "useFetchers"),
    (a.UseScrollRestoration = "useScrollRestoration");
})(Ad || (Ad = {}));
function Wh(a, e) {
  let {
      target: s,
      replace: r,
      state: i,
      preventScrollReset: n,
      relative: o,
      unstable_viewTransition: d,
    } = e === void 0 ? {} : e,
    l = wh(),
    p = vi(),
    c = rp(a, { relative: o });
  return _.useCallback(
    (u) => {
      if (Vh(u, s)) {
        u.preventDefault();
        let m = r !== void 0 ? r : Qt(p) === Qt(c);
        l(a, {
          replace: m,
          state: i,
          preventScrollReset: n,
          relative: o,
          unstable_viewTransition: d,
        });
      }
    },
    [p, l, c, r, i, s, a, n, o, d]
  );
}
const Qh = "_textSection_1dvmp_1",
  Xh = { textSection: Qh };
function Yh() {
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx("h1", { children: "Taro na Net" }),
      t.jsx("section", {
        className: Xh.textSection,
        children:
          '"Ao fazer seu jogo, não desejo determinar o seu futuro, E sim ajudar em sua melhor escolha para seu dia de amanhã. Desejo que seu caminho seja brando aos teus pés, Que o sol brilhe cálido sobre tua face, e que as chuvas. Caiam severas em teus campos, E que DEUS te guarde nas palmas de suas mãos! "',
      }),
      t.jsx("br", {}),
      t.jsxs("section", {
        children: [
          " ",
          t.jsx("span", {
            children:
              "Trabalho com Taro há muitos anos. Tenho o dom de ver o futuro e orientar para que a pessoa consiga seguir o caminho certo, aquele caminho que Deus quer que ela siga e seja feliz. Mais de 40.000 consultas e reconhecida internacionalmente, atuando em vários países…",
          }),
          t.jsx("span", {
            children:
              "Vários tipos de taros tais como: Baralho Cigano Taro Mitológico Taro dos Anjos Taro do Amor Cartomancia Taro dos Negócios Numerologia através do Taro Mesa Radiônica Quântica e Radiestesia",
          }),
          t.jsx("br", {}),
          t.jsx("br", {}),
          t.jsxs("div", {
            children: [
              t.jsx("h5", { children: "Experiências:" }),
              t.jsxs("ol", {
                children: [
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Baralho cigano:" }),
                      t.jsx("span", {
                        children:
                          "É a própria magia; têm o poder de nos aconselhar; fazer-nos sonhar; conhecer-nos; acreditar e perceber nosso mundo interior. Nos ajudam a trilhar o caminho correto, nos mostram o presente e o futuro para que possamos nos harmonizar e visualizar nossos sonhos.",
                      }),
                    ],
                  }),
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Taro dos anjos:" }),
                      t.jsx("span", {
                        children:
                          "È um dos taros que mais exerce fascínio sobre as pessoas depois do taro cigano. Cada carta corresponde a uma hierarquia de anjos. Ele é certeiro até mesmo em perguntas diretas. Responde com uma exatidão enorme. Também cada pessoa tem um Anjo correspondente ao dia de seu nascimento. E o Salmo referente ao dia que nos protege e abre caminho.",
                      }),
                    ],
                  }),
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Taro dos negócios:" }),
                      t.jsx("span", {
                        children:
                          "É um taro que nos da uma certeza se um negócio vai dar certo ou não, nos orienta a esperar ou não, é muito direto nas respostas.",
                      }),
                    ],
                  }),
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Symbolon (Taro cigano):" }),
                      t.jsx("span", {
                        children:
                          "É o taro da alma. São tiradas 7 cartas para um determinada situação e ele responde junto com a época que vai acontecer através da astrologia. Exemplo se for sob o signo de aries é de Março a Abril.",
                      }),
                    ],
                  }),
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Taro Mitológico:" }),
                      t.jsx("span", {
                        children:
                          "É o taro do inconsciente. São cartas que descrevem deuses, deusas, heróis e heroínas da mitologia grega, com todos os seus conhecidos arquétipos, cujas experiências espelham perfeitamente as mudanças e os padrões da vida atual. São cartas que exercem um grande fascínio sobre as pessoas.",
                      }),
                    ],
                  }),
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Taro do amor:" }),
                      t.jsx("span", {
                        children:
                          "É composto pelos arcanos maiores (segredos maiores). Responde perfeitamente sobre perguntas do amor e do relacionamento na vida das pessoas. Se a pessoa tem interesse em saber se a outra vai voltar, se vai ficar, se vai dar certo e o que precisa saber para manter o relacionamento amoroso, já que o amor é a força propulsora que dá movimento ao mundo.",
                      }),
                    ],
                  }),
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Numerologia:" }),
                      t.jsxs("span", {
                        children: [
                          "A ciência dos números que nos fascina e nos mostra claramente os números que regem nossas vidas.",
                          t.jsxs("ul", {
                            children: [
                              t.jsx("li", {
                                children:
                                  "Número do destino: o que devemos aprender para ter sucesso na vida.",
                              }),
                              t.jsx("li", {
                                children:
                                  "Número do carma: o que você deve aprender nesta vida.",
                              }),
                              t.jsx("li", {
                                children:
                                  "Tendências ocultas: desejos de encarnações passadas que podem atrapalhar sua vida presente.",
                              }),
                              t.jsx("li", {
                                children:
                                  "Número da resposta subconsciente: como você reage aos imprevistos.",
                              }),
                              t.jsx("li", {
                                children:
                                  "Número da expressão: suas habilidades naturais.",
                              }),
                              t.jsx("li", {
                                children:
                                  "Número da motivação: onde você encontra sua motivação.",
                              }),
                              t.jsx("li", {
                                children:
                                  "Número da personalidade: o que você quer ou parece ser.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  t.jsxs("li", {
                    children: [
                      t.jsx("h4", { children: "Cartomancia:" }),
                      t.jsx("span", {
                        children:
                          "Conduz-nos a um mundo mágico e oculto em que as técnicas de interpretação têm por objetivo a previsão direta e imediata do futuro as mensagens nas cartas são claras e poderosas favoráveis ou não. Sempre nos preocupamos em saber do futuro, fosse por qual motivo fosse: curiosidade, tirar duvidas, acalmar, decidir qual o caminho a seguir. Quando se faz uso de um oráculo , o que estamos buscando são meios de estabelecer contato com nossa porção inconsciente , que na verdade possui as respostas a todas as nossas dúvidas… A cartomancia fascina não só as consulentes, mas os próprios cartomantes porque muitas vezes as predições são proféticas. Embora cada carta tenha seu significado de acordo com o naipe, o elemento mais importante para ler a sorte e saber interpretar a combinação que elas formam. A mensagem de cada carta altera-se conforme onde se posicionar.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Zh = "_numerologia_qpaap_5",
  Kh = { numerologia: Zh },
  Jh = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: " Numerologia " }),
        t.jsxs("section", {
          className: Kh.numerologia,
          children: [
            t.jsxs("div", {
              children: [
                t.jsx("i", {
                  children: t.jsx("h4", {
                    children:
                      "A NUMEROLOGIA ESOTÉRICA É A ARTE E A CIÊNCIA DE COMPREENDER O SIGNIFICADO ESPIRITUAL E A PROGRESSÃO ORDEIRA DE TODA MANIFESTAÇÃO.",
                  }),
                }),
                t.jsx("p", {
                  children:
                    "O dia do nascimento é muito importante, pois sua vibração imprime suas características na personalidade da pessoa. Todos nascem num dia predestinado dentro do plano universal e são influenciados pelas vibrações emitidas nesse exato momento no campo da energia terrestre. Ou seja, desde o instante do nascimento, as pessoas recebem as influências dos números que imperam. Essas são as vibrações que guiarão e motivarão as atitudes da pessoa durante sua vida.",
                }),
              ],
            }),
            t.jsx("h4", { children: "O QUE SIGNIFICA NASCER NESTES DIAS:" }),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 1" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Quem nasce neste dia é uma pessoa individualista, que gosta de ser o centro das atenções. É confiante e prefere fazer as coisas do jeito próprio.",
                    }),
                    t.jsx("p", {
                      children:
                        "Gosta de posições de poder e autoridade. É um ótimo chefe, pois é um líder nato, de personalidade forte, dinâmica e independente. Adora planejar mas nem sempre executar. Por isso nem sempre termina o que começa. Gosta de abrir seu próprio caminho e detesta ouvir críticas.",
                    }),
                    t.jsx("p", {
                      children:
                        "É um inventor e pioneiro em suas idéias. Gosta de colocar seu estilo pessoal em tudo o que faz. Não gosta de receber ordens. Para a pessoa que nasceu no dia 1 serve o lema: Eu mando e você me segue. Usa mais a razão que o coração. Não manifesta seus sentimentos de amizade, mas gosta de senti-los nos outros. Tem tendências intelectuais, mas é prevenido, apto a “tocar mais de um instrumento”. Tem um grande poder de raciocínio e é excelente organizador.",
                    }),
                    t.jsx("p", {
                      children:
                        "Cautela contra o ciúme e o autoritarismo. Você tem necessidade de ser um pioneiro, um inovador. Embora seja sensível e de sentimentos profundos, não os demonstra e raramente expressa suas emoções porque elas podem indicar fraqueza, e esta é uma faceta que você odeia demonstrar. Deve ter cuidado para não usar toda sua potência e energia para você mesmo, porque você tende a ser um tanto egocêntrico em qualquer situação. Interessado principalmente no seu próprio desenvolvimento, é independente, cheio de vigor e força de vontade.",
                    }),
                    t.jsx("p", {
                      children:
                        "Você é mais planejador do que construtor. Bom diagnosticador, prefere atividade mental a um trabalho manual, embora mantenha-se ocupado por causa seu excesso de energia.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/01.jpg",
                      alt: "",
                    }),
                    t.jsx("br", {}),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 02" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Quanta carência! Nascidos no dia 2 acreditam que seus irmãos, primos e amigos sempre receberam mais afeto o que eles. Não adianta insistir. O “2″ trabalha melhor em grupo do que sozinho. Aprecia muito a música e tem grande talento para a dança ou para tocar um instrumento. Muito sensível, qualquer alteração no ambiente o afeta. A pessoa 2 tem a capacidade de se colocar no lugar do outro e sentir exatamente o que o outro sente. Sabe as suas necessidades.",
                    }),
                    t.jsx("p", {
                      children:
                        "Geralmente é tímido e introspectivo. É um diplomata nato; trabalha melhor em equipe do que sozinho. É uma pessoa da paz e evita ambientes com discussões. Vive colocando “panos quentes”, vê os dois lados numa disputa e atua como mediador até chegar a um consenso. Atrai as pessoas com atitudes amáveis e nunca com agressividade. Gosta de música, do ritmo, da dança; tem o senso natural da harmonia e é um grande apreciador das coisas boas e belas da vida.",
                    }),
                    t.jsx("p", {
                      children:
                        "Está sujeito à muita influência do meio ambiente que pode, inclusive, deformá-lo e deve ter cuidado para não cair em depressão. A subestimação de suas aptidões pode se construir num sério obstáculo, por isso deve valorizar-se mais e terá sucesso nos campos artístico e financeiro. É cooperativo e detalhista. Tem talento para usar as palavras e para a música. Deve colocar seu talento em uso. Não muito ambicioso, pode não lutar pelo estilo de vida de que gostaria de levar. Sente-se mais feliz quando está com aqueles de quem gosta e com amigos, porque você precisa da segurança emocional que eles podem lhe dar.",
                    }),
                    t.jsx("p", {
                      children:
                        "Além do mais, eles lhe dão a chance de fazer algo por eles. Tem uma profunda necessidade de amor, compreensão e de uma vida calma. É também parte da sua natureza ser sensível, amigável, de bom coração, nervoso e desejoso de atenção.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/02.jpg",
                      alt: "",
                    }),
                    t.jsx("br", {}),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 03" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Quem nasce nesse dia fala demais e sem pensar. Pega várias coisas para fazer ao mesmo tempo e depois não dá conta. Têm temperamento intelectual, artístico e criativo e capacidade para se recuperar rapidamente de qualquer doença.",
                    }),
                    t.jsx("p", {
                      children:
                        "Gosta de ter muitos amigos e têm excelente senso de humor. Para ser feliz, precisa apenas encontrar um meio de se exteriorizar. A vida social e os amigos são essenciais em sua vida. Dotado de inteligência arguta e grande imaginação, tem facilidade para fazer conferências, escrever, ensinar e, sem dúvida, encontrará no jornalismo uma boa profissão. Suas melhores realizações se situarão nos campos intelectual, artístico e de criatividade.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem um entusiasmo capaz de colocar para cima as outras pessoas. Para uma pessoa 3 tudo é possível e a qualquer hora. Não existe impedimentos nem problemas.",
                    }),
                    t.jsx("p", {
                      children:
                        "Ela não perde nada: nenhum encontro com os amigos, nenhuma festa, nem que esteja doente! O problema é conseguir organizar tudo isso em sua vida!",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/03.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 04" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Quem nasceu ness dia tem uma personalidade muito madura desde cedo, e por isso aparenta ser mais velho do que realmente é. Tradicional e conservador, não se adapta facilmente às inovações. É uma pessoa firme, determinada e, por vezes, até obstinada. Não gosta de mudar seu pensamento nem seus métodos, mas suas aptidões o levam para o terreno das coisas práticas, onde você é batalhador, sistemático, leal, consciencioso. Diz sempre a verdade, mesmo quando a mesma não é agradável e, por isso, às vezes arranja inimigos. É honesto e confiável, um porto seguro. Quer tudo nos devidos lugares. Gosta de processos e métodos e também de obedecer regras. Lê o manual inteiro antes de ligar um aparelho de tv novo que comprou. Faz uma coisa de cada vez e cuida dos mínimos detalhes. Não gosta de novidades repentinas. Prefere tudo programado de preferência com muito tempo de antecedência. É emotivo, mas está sempre se controlando, e os outros, não percebendo isto, não retribuem seus sentimentos de amizade. Sempre vai até o fim. Assim, qualquer trabalho que exija atenção, disciplina e resistência se adaptam perfeitamente a você; todavia, a sua realização está no mundo dos negócios. É um trabalhador incansável. Poderia ter como ocupação secundária a música, a pintura ou a escultura.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/04.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 05" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Nunca se sabe o que esperar de uma pessoa que nasceu no dia 5. Está sempre pronta para uma nova aventura. Se puder, estará sempre com uma mochila nas costas, pronto para viajar. Adora esportes radicais, não gosta de ter casa própria, nem emprego fixo. E ninguém segura porque ela tem asas e só aprende se conseguir experimentar. De preferência tudo o que puder fazer rapidamente, e com grande emoção. Viajar, mudar de cidade, ou de casa, mudar de emprego e de amor.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem boa voz e pode alegrar os outros cantando. Irradia entusiasmo e tem personalidade magnética, característica ótima para um vendedor. De raciocínio rápido e corpo ágil, a versatilidade é a sua característica. Detesta restrições e rotina. É um entusiasta da vida e a vive intensamente, a cada minuto. As viagens farão parte da sua vida, devido a sua agitação. Qualquer trabalho que inicie lhe dará prazer e o seu entusiasmo pelas coisas o transformará num bom promotor de vendas.",
                    }),
                    t.jsx("p", {
                      children:
                        "Qualquer área de atividade que o coloque à frente do público se adequará às suas características, sempre que houver movimento e ação. O magnetismo e a sensualidade são seus pontos fortes, além da facilidade em se expressar. Pode criar problemas para seu parceiro devido a sua independência. Não suporta a sensação de que está sendo cobrado, vigiado ou controlado. Com os seus atrativos, deverá ter cuidado com o sexo oposto, pois pode se machucar.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/05.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 06" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "O nascido no dia 6 é um eterno apaixonado. Compreensivo e gentil, carente de atenção e de elogios. Ou tem vários namorados ou se casa muito cedo para logo ter alguém para sempre ao seu lado. Planta raízes profundas no lar e na comunidade por conta de sua natureza amorosa. Gosta de cuidar da sua casa, de crianças e de animais. Elogios são essenciais para a sua felicidade. Não suporta críticas.",
                    }),
                    t.jsxs("p", {
                      children: [
                        " ",
                        "uma pessoa apegada ao lar e, para se realizar plenamente, precisa de companheirismo, de amor e de alguém que o encoraje. Só deseja amar e ser amado. Parece frágil mas não é. Se achar que alguém é injustiçado ou se fazem mal para alguém que ele ama, defende com unhas e dentes.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Em condições adversas, os jovens nascidos sob esse número podem ter sérios problemas, perdendo a confiança na vida. Tem uma voz muito agradável, que pode ser cultivada, além de ser interessado pelas artes e pela música. Será sempre bem sucedido em qualquer grupo ou em negócios que envolvam a comunidade, porque é um idealista, uma pessoa que gosta de melhorar as coisas ao seu redor, não importa quais sejam as condições. Os campos da beleza, da saúde, da música e do teatro são os mais indicados para você.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/06.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 07" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Este número rege a perfeição. Quem nasce sob ele é exigente, seletivo e perfeccionista, e cobra perfeição de si mesmo e dos outros. É do tipo introspectivo, tranqüilo e analítico, e gosta de ficar sozinho. Ninguém nunca sabe o que está pensando. Tem um ar misterioso.",
                    }),
                    t.jsx("p", {
                      children:
                        "Seu objetivo é sempre a perfeição, isto é, encontrar o que há de melhor nas coisas. Por ser exigente não é uma pessoa muito fácil de se conhecer, embora seja amistoso quando conhece bem uma pessoa. Seu interesse volta-se para o campo da ciência e do ocultismo.Tem qualidades mediúnicas, é sensitivo e pode seguir a sua intuição.",
                    }),
                    t.jsx("p", {
                      children:
                        "É difícil encontrar um parceiro, pois além de não se deixar dominar, não se adapta com facilidade aos outros. Pode demorar muito a tomar decisões porque pensa demais. Precisa confiar muito na outra pessoa para poder contar suas intimidades. Terá sucesso nas atividades que exigem especialização, como a área científica. Trabalha melhor sozinho, pois não gosta de receber ordens.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/07.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 08" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "“O que vou ganhar com isso?” Essa é a pergunta mais comum feita por alguém que nasceu neste dia. Essa pessoa tem talento para os negócios, tem capacidade executiva e facilidade para ganhar dinheiro. Gosta de causar boa impressão e aprecia gestos generosos, como fazer doações. Tem um bom senso inato, é equilibrado e sabe exercer autoridade.",
                    }),
                    t.jsx("p", {
                      children:
                        "O dia do seu nascimento indica dinheiro, você gosta do poder, do dinheiro e de status, não se interessando pelas coisas medíocres e procurando estar sempre em evidência. Que mostrar que é uma pessoa vencedora no mundo material. Por isso ter posses como carro, casa, bom trabalho, roupas de marca, fazem a diferença.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem grande capacidade administrativa. Ambiciosa, tem objetivos claros e faz de tudo para chegar até eles. Para ser bem sucedida, precisa se organizar, pois as suas forças só se devolverão totalmente dentro de uma estrutura organizada.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/08.bmp",
                      alt: "",
                      width: "100%",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 9" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Sabe aquele velhinho metido a garotão? Ele nasceu no dia 9. É uma pessoa que rejuvenesce à medida que o tempo passa. É essencialmente humana e considerada os irmão mais velho da turma. Prefere amigos de mais idade, acredita que o mundo é cor de rosa e fica muito triste quando se decepciona. Geralmente tem um grande coração e gosta de ajudar as pessoas.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem um grande carisma e as pessoas estão sempre buscando a sua companhia. Dotado tanto de inteligência quanto de atividade criadora, uma grande gama de atividade está a sua espera.",
                    }),
                    t.jsx("p", {
                      children:
                        "Sendo o 9 um número de vibração universal, provavelmente haverá muitas viagens em sua vida ou, pelo menos, muitas oportunidades de comunicação. É bastante impressionável, generoso e protetor; por isso, deve tomar cuidado para não dar muito à pessoa errada.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quanto mais amplas forem as suas idéias, mais feliz será. Poderá se tornar famoso nos campos artístico e profissional e ter êxito na área literária, artística, publicitária ou religiosa.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/09.bmp",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 10" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Número poderoso. No Antigo Testamento, Deus se apresenta como o número 10. Quem nasce nesse dia terá todas as chances do mundo de prosperar na vida. Porém, tem tendência a altos e baixas de prosperidade por causa do ego inflado. Precisa entrar em sintonia com sua espiritualidade para evitar uma queda.",
                    }),
                    t.jsx("p", {
                      children:
                        "Nasceu para dirigir e ser independente; assim, não deve apoiar-se em outras pessoas, já que elas é que dependem dele. Prefere dar ordens do que obedecê-las. É um chefe que consegue tudo o que deseja, quando motivado.",
                    }),
                    t.jsx("p", {
                      children:
                        "Não deve trabalhar subordinado a outra pessoa, pois isso não dará certo, já que é um individualista e poderá empreender, simultaneamente, vários caminhos, desde que esteja à frente. Deve cultivar as suas capacidades artísticas. Qualquer atividade individual é melhor para esse nativo, pois pela sua determinação será bem sucedido em qualquer campo que escolher. Criativo, pode seguir qualquer linha artística. Tem muita energia e se recupera rapidamente de qualquer queda na vida. É muito firme no que deseja . Porém não é individualista. Sabe dar atenção para os outros e valorizar a sua colaboração.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/10.bmp",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 11" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "No dia 11 nascem pessoas de ideais e aspirações e que estão sempre em evidência. Embora pareçam calmas, são tensas e emocionalmente exageradas em seus amores. Mas tendem a reprimir seus desejos e impulsos sexuais. O 11, tal como o 22, é um número fundamental.",
                    }),
                    t.jsx("p", {
                      children:
                        "Se você nasceu neste dia terá grandes ideais e aspirações. Sua grande dificuldade é que você, muitas vezes, deixa a razão sobrepor-se à intuição. Esta atitude não o levará a coisas boas, já que você tem qualidades mediúnicas, é sensitivo e deve seguir a sua intuição. Sendo o 11 um número principal, você estará sempre sob alta vibração e precisará saber manter o equilíbrio mesmo com os nervos à flor da pele. Para sua saúde e felicidade são indispensáveis o controle e meio termo.",
                    }),
                    t.jsx("p", {
                      children:
                        "Apesar de sua inteligência acima da média, você deve seguir suas intuições, pois elas permitirão que seu grande potencial se manifeste de modo incomum. Só gosta de se envolver com assuntos muito importantes. Tem grandes ideais, muitas opções e por isso mesmo nunca sabe o que fazer.",
                    }),
                    t.jsx("p", {
                      children:
                        "Muito nervoso e tenso, suas emoções mudam rapidamente, e parece que tem duas personalidades. Pode considerar os outros e cooperar e de repente mudar suas reações e ficar distante. Tem que aprender a equilibrar o seu lado mental com o emocional.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/11.bmp",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 12" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Quem nasceu nesse dia tem uma personalidade cordial e amistosa, inteligência prática e talento literário ou artístico. Se o seu meio ambiente for suficientemente estimulante e o seu amor à vida se mantiver, será um companheiro encantador e um verdadeiro perito em vendas e propaganda. Mas, se os amores e as amizades estiverem causando problemas, ficará triste, sombrio e desencorajado, já que o amor e a amizade são importantes na sua vida.",
                    }),
                    t.jsx("p", {
                      children:
                        "Precisa se sentir ocupado e se envolve com vários projetos, todos ao mesmo tempo. Tem muitos talentos e sabe influenciar as pessoas. Convence com sua criatividade e sua mente lógica num debate. Adora seus amigos e tem muitos, de várias tribos, porém tem que ficar sozinho de vez em quando. Precisa aprender a não desperdiçar as energias, mas precisa manter-se intelectualmente ocupado, para evitar a depressão. É um bom professor, porém demasiadamente severo. Gosta de tv, fotografia, cinema. O mundo das diversões e das atividades literárias é o mais indicado para você.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/12.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 13" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Ao contrário do que se pensa este não é um número negativo. Nascer num dia 13 não é sinal de mal agouro. Muito pelo contrário, é sinal de que você consegue transformar situações e pessoas. Sabe quando as coisas não estão bem? Pois é, quem nasceu no dia 13 sabe como tirar do chão uma empresa que está à falência e sabe como dar a volta em um problema. Nada fica igual durante muito tempo. Muitas vezes começa as coisas com o pé esquerdo e, não o compreendendo, as pessoas consideram-no áspero e ditatorial, pois você tem dificuldades em expressar seus sentimentos.",
                    }),
                    t.jsx("p", {
                      children:
                        "É uma pessoa um pouco descontente e resmungona – isso acontece porque está em constante transformação. Pode ser um bom gerente, pois é sistemático, prático e trabalha duramente. Sendo você uma pessoa ambiciosa e que trabalha duro, gosta de organizar e administrar os outros.",
                    }),
                    t.jsx("p", {
                      children:
                        "Você se preocupa com os pormenores, com a ciência e a mecânica. Tente manifestar melhor os seus sentimentos, use a imaginação e, se possível, cultive um hobby como o entalhe em madeira ou a escultura.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/13.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 14" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "É o número da alquimia e indica talento para lidar com ervas e na área de medicamentos. Nascer no dia 14 significa querer VIVER, não somente existir. É o mais sensual de todos os números. Ativo, perspicaz e emotivo, quem nasce nesse dia gosta de correr riscos, mas deve se cuidar para não se deixar levar por vícios. O casamento poderá trazer-lhe estabilidade. É versátil, de natureza dupla e de inteligência, ao mesmo tempo, lógica e imaginativa.",
                    }),
                    t.jsx("p", {
                      children:
                        "Pode construir ou destruir, tão poderosa é a força do número do seu nascimento. Está sempre com um pé na terra e outro no céu, tendo, pois, condições de harmonizar as coisas práticas e espirituais. Faz tudo com muita rapidez porque quer terminar logo para se entregar a outra motivação. Muito versátil, adapta-se a qualquer tipo de situação e não gosta de monotonia.",
                    }),
                    t.jsx("p", {
                      children:
                        "Pode ser organizado e até respeitar limites se tiver motivação para isso. Não se fixa por muito tempo em nada nem em ninguém. Gosta do que é novo e original, da mudança e da variedade. Isso poderá levá-lo a um excesso de experiências em vários campos, o que não será bom, pois, para vencer, precisará de estabilidade na profissão. O sucesso virá se seguir seu talento na área de vendas, viagens, mineração ou corretagem.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/14.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 15" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Este é o número da luxúria. Quem nasce no dia 15 tende a ser dissimulado e costuma conseguir tudo o que quer na vida. Dá muito valor aos prazeres em geral e pode até recorrer a negócios ilícitos em nome deles. É uma pessoa que gosta de cooperar, de dar, e é simpático. Gosta de ajudar e de assumir responsabilidades. Apegado à família e ao lar, porém prefere um trabalho que não seja em casa.",
                    }),
                    t.jsx("p", {
                      children:
                        "É mais independente e adora mudanças mesmo se forem do tipo mudar de lugar os móveis da casa. Precisa sentir-se em movimento. Atrai ajuda e favores das outras pessoas. Sabe dar conselhos e resolver problemas é o seu forte. Seus amigos são tão importantes que logo passam a fazer parte da família.",
                    }),
                    t.jsx("p", {
                      children:
                        "Mas não deve permanecer num meio ambiente em que se sinta dominado, reprimido, porque isto afetará a sua saúde e bem estar. Aprecia tudo o que é bom e belo na vida e necessita de um lar feliz, harmonioso, com um companheiro que lhe permita ser o que você realmente é. Terá sucesso nos campos artísticos e profissional.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/15.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 16" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "O 16 é um número espiritual, levando as pessoas nascidas nesse dia a darem mais importância às coisas espirituais do que às terrenas. Contudo, sua inteligência prática e inventiva poderá torná-las bem sucedidas no mundo dos negócios. Contudo, para se sentir melhor, quem é deste número deverá desenvolver as aptidões literárias, artísticas e musicais, inatas em sua pessoa.",
                    }),
                    t.jsx("p", {
                      children:
                        "É um perfeccionista e pode se irritar, ficar deprimido e de mal-humor quando não consegue atingir a perfeição.Precisa de um lar onde se sinta independente e amado. Adora ficar sozinho, mas também com seus amigos, que são um mais diferente do que o outro, de preferência, poucos amigos e muito próximos.",
                    }),
                    t.jsx("p", {
                      children:
                        "Gosta do lar e da privacidade que ele oferece. Ama a natureza e prefere ficar em locais tranquilos. O mais importante na vida não é o sucesso material. Não gosta muito de conselhos. Prefere agir de acordo com a sua intuição. Por isso sabe como solucionar problemas, de maneira muito diferenciada. Valoriza os detalhes.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/16.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 17" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Suas variações de humor e atitude são, em geral, bem acentuadas. Entretanto, a família e a pessoa amada são muito importantes para você, que é sensível e emocional, no que se refere à sua vida privada e aos seus negócios. O número 17 é considerado um grande número de nascimento, no que concerne às finanças. Deve tomar as grandes decisões e deixar as pequenas para os outros. Se souber utilizar adequadamente suas qualidades, nunca sentirá falta de dinheiro. Adora se envolver com grandes projetos, de preferência nos que esteja na posição de chefe. Sabe mandar e precisa mostrar que é uma pessoa bem sucedida. Tem talentos para os negócios e valoriza tudo o que pode conseguir através de negociações, compra e venda. Tem objetivos claros e faz de tudo para chegar onde quer. Porém tem um lado espiritual que faz com que perceba que o mundo material não é tudo na vida. Tem talento para qualquer atividade técnica ou científica. Deve ter o seu próprio negócio.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/17.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 18" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "O número indica grande mediunidade. Quem nasce nesse dia tem forte intuição e costuma ter sonhos premonitórios, que podem predizer o futuro ou fornecer informações importantes sobre como resolver algum problema. Tem a ambição e coragem do 1 e a capacidade executiva do 8 e usa para ajudar as outras pessoas. Sua mente é aberta e seu interesse é por temas universais. Compreende o mundo de uma forma livre de preconceitos.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem habilidade para dar conselhos sensatos, ama a música e a arte. Deve estar preparado para mudanças e viagens. É intelectual, emotivo e requintado. É independente, eficiente, um líder nato. O mundo intelectual exerce sobre você grande fascínio e, nele, você sabe se expressar.",
                    }),
                    t.jsx("p", {
                      children:
                        "Sua personalidade apresenta um lado emocional e sensível, que o faz gostar da música mas você é muito contestador. Deve usar essa capacidade crítica, como ensaísta ou escritor. Terá uma vida muito ativa e fará muitas viagens.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/18.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 19" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Este é um número kármico e desde a antiguidade está ligado ao Sol – e esse astro tanto pode promover a vida quanto fazer secar até a morte. Nasceu líder. Tem uma incrível capacidade de passar por cima dos obstáculos, que são vistos como desafios e não como dificuldades. É uma pessoa radical nas suas atitudes, sujeita a variações de humor que percorrem toda a escala numérica, de 1 a 9. . Independente e perseverante, você tem tendência a se deixar levar pela cólera.",
                    }),
                    t.jsx("p", {
                      children:
                        "Vive a vida sempre à beira de um precipício emocional, mas tem imensos recursos e consegue sempre enfrentar as dificuldades. Encara tudo de uma maneira prática e racional. Ter o seu próprio negócio é o ideal. Utilize a sua versatilidade e idéias originais e jamais sofrerá necessidade.",
                    }),
                    t.jsx("p", {
                      children:
                        "Evite manter-se sempre no mesmo caminho e faça das mudanças uma constante na sua vida, para não sofrer decepções. Escolha com cuidado o seu companheiro, pois o seu número de nascimento indica que poderá ter muitos problemas no casamento.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/19.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 20" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Cultivar as amizades e ter o passado como base de vida são as características principais da personalidade de quem nasceu nesse dia. É muito afetuoso e por isso tem muitos amigos. Prefere estar rodeado de gente do que sozinho e por isso sempre escolherá uma atividade que seja feita em grupo.",
                    }),
                    t.jsx("p", {
                      children:
                        "Considera os sentimentos dos outros e se existir uma discussão, estará presente apaziguando, ouvindo os dois lados e dando a sua opinião ponderada. Sempre terá uma segunda chance na vida. É um pacificador nato e muito ligado à família. Talento para a diplomacia. É, acima de tudo, um tipo emocional. Precisa de amigos, de camaradagem, do conforto e apoio dado pelos outros.",
                    }),
                    t.jsx("p", {
                      children:
                        "Deseja se sentir seguro no lar e entre seus familiares e será bem sucedido nos assuntos domésticos, onde a sua capacidade de compreender e absorver os pormenores será um fator positivo. Tem talentos musicais ou artísticos que deverá desenvolver. Evite ser dominado pelas emoções, pois, do contrário, granjeará reputação de volúvel. Cultivando o seu dom natural de simpatia e o trato paciente com os pormenores, poderá ser bem sucedido.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/20.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 21" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "As pessoas que nascem nesse dia são “crianças grandes”. Eternamente joviais, têm uma loucura sadia que os faz interessar-se em várias coisas ao mesmo tempo. Pode sobressair-se nas artes dramáticas ou em qualquer área de expressão que use as palavras. Magnéticos e musicais, amam a beleza, a arte e a dança. Para ser realmente feliz, deve encontrar meios para se expressar na literatura e nas artes. É cauteloso e encantador mas, também, individualista e independente. Todavia, se fizer várias coisas ao mesmo tempo, dispersará suas forças e energia. Pode faltar maturidade. Até a aparência é de uma pessoa mais jovem.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quem nasceu no dia 21 gosta de diversão e vida social, quer conversar. Tem sempre muitos projetos para desenvolver, todos ao mesmo tempo. Prefere trabalhar em atividades em que não precise ficar confinado a 4 paredes, principalmente se puder usar toda a sua capacidade criativa.Tem o dom da comunicação e expressa alegria de viver, entusiasmo e otimismo. Gosta de estar cercado de coisas boas e belas e é um excelente anfitrião.",
                    }),
                    t.jsx("p", {
                      children:
                        "No campo emocional, é muito instável, sujeito a altos e baixos; o amor, para o bem e para o mal, é sempre um impacto na sua vida. Nesse terreno, em geral, prefere receber a dar. Será bem sucedido no mundo literário. Deve aproveitar seus períodos de repouso para ler, ver os amigos e ter vida social mais intensa, coisas que só lhe farão bem.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/21.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 22" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Quem nasceu sob a influência do 22, um número mestre, conforme encarar as coisas, poderá sentir-se feliz ou infeliz: todavia, é difícil chegar sozinho a uma conclusão. Gostaria de encontrar um mundo o melhor possível, permitindo-lhe manter o equilíbrio mental e os pés na terra. Pessoa leal , que ama seu lar , a família e a natureza. Quer viver uma vida segura e estável porém não é uma pessoa que procura fazer sempre a mesma coisa garantindo assim uma vida acomodada.",
                    }),
                    t.jsx("p", {
                      children:
                        "Deseja mais: quer se envolver em negócios, produção, gerenciamento e organização. Tudo o que envolve construção. Este número é um mestre e então a pessoa tem que trabalhar mais para fazer um bem maior para as outras pessoas do que para a sua ambição pessoal.",
                    }),
                    t.jsx("p", {
                      children:
                        "Deve mostrar ao mundo o seu interesse pelas coisas públicas, já que as causas humanitárias e os movimentos de ajuda se adaptam às suas qualidades. Suas idéias levam-no a buscar horizontes mais amplos do que a média das pessoas, mas precisará de coragem e decisão para manter os olhos nos seus ideais e os pés nesta beleza terra.",
                    }),
                    t.jsx("p", {
                      children:
                        "Deve esforçar-se para viver construtiva e harmonicamente. Para isso, deve ter cuidado em manter o equilíbrio entre suas emoções e o lado prático de sua natureza.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/22.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 23" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Sensitivo e compreensivo, este é o “rei” do mundo espiritual. Pode tornar-se um líder religioso. Tem personalidade encantadora e inclinação social. Sua meta deve ser elevada, porque é necessário que se orgulhe de suas realizações. É independente, auto-suficiente, orgulhoso e responsável.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quando está diante de um problema, tem raciocínio rápido e notável capacidade de análise que o leva a diagnosticar, com acerto, a doença no corpo político de uma organização. Terá mais sucesso com o sexo oposto do que com seu próprio sexo; o mesmo acontecerá com as pessoas mais velhas, junto às quais será bem sucedido do que junto às mais moças.",
                    }),
                    t.jsx("p", {
                      children:
                        "Adapta-se facilmente às mudanças no seu meio e na sua vida. Sendo muito versátil, pode aventurar-se no negócios, no mundo das diversões ou nas profissões médicas. Trabalha muito bem com outras pessoas, embora seja muito independente e auto-suficiente.",
                    }),
                    t.jsx("p", {
                      children:
                        "Adora tudo o que é muito diferente, até excêntrico. Quer ter experiências diferentes, mudanças, viagens. Pode ter algum hobby incomum, que a destaca de outras pessoas. Gosta de falar, e tem o dom de convencer as pessoas. É muito crítico quando está estressado.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/23.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 24" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Dotado de surpreendente energia, precisa estar sempre em atividade, em constante movimento. O número 24 lhe dá condições de assumir responsabilidades, principalmente na família ou na comunidade, dois mundos em que você colocou ou se verdadeiro interesse. Tem os defeitos correspondentes a suas virtudes, pois também pode ficar ansioso e preocupado com a possibilidade de não realizar o que lhe parece certo.",
                    }),
                    t.jsx("p", {
                      children:
                        "Chegar aos seus objetivos lhe custará, sem dúvida, um trabalho árduo, mas os atingirá, possivelmente, no campo educacional. Quer casar, ter um lar, filhos. Tem horror a ficar sozinho. Adora compromissos e ser responsável por alguma coisa, por seus filhos, por um clube, pela comunidade, pelo grupo de oração. Precisa se sentir útil, servindo aos outros. Ciumento, quer controlar os passos das pessoas.",
                    }),
                    t.jsx("p", {
                      children:
                        "Acha que tem a obrigação e consegue resolver os problemas do “mundo”. É uma pessoa prática, mas tendem a ser sonhador. Tem um ego muito desenvolvido e é um cozinheiro nato. A voz agradável favorece o canto.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/24.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 25" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "É intuitivo, cheio de inspiração. Seu hábito de ocultar pensamentos e sentimentos e torna freqüentemente mal compreendido. É uma pessoa que se sente muito bem quando está sozinha. Ama a natureza e prefere ficar em locais tranquilos. O sucesso material não é tão importante para você. Gosta de música e pode tocar instrumentos. Prefere ouvir a sua intuição do que receber conselhos de outras pessoas. Interessa-se por assuntos ligados a ciência, religião, esoterismo, filosofia. Reprime suas emoções. Não consegue expressá-las.",
                    }),
                    t.jsx("p", {
                      children:
                        "Sabe analisar a fundo um problema, como se fosse um detetive. O Sucesso é indispensável para que possa manter sua auto-estima. Estabelecendo para si mesmo padrões de perfeição, fica deprimido e mal-humorado quando não consegue alcançá-los. O maior defeito é subestimar suas próprias qualidades. Deve ter cuidado para não tornar-se pessimista, crítico ou extravagante.",
                    }),
                    t.jsx("p", {
                      children:
                        "Essas influências poderão conduzi-lo a atividades criativas como as vendas. Contudo, deverá desenvolver seu poder de concentração e evitar a melancolia e as variações de humor. A cidade, com suas luzes, não é o melhor ambiente para você, que, para ser feliz, necessita da vida simples do campo.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/25.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 26" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Ama, acima de tudo, o lar e os filhos. Em sua vida, tudo o mais fica em segundo plano. Entretanto, apesar disso, poderá ser muito bem sucedido no campo dos negócios, pois é um organizador nato e um excelente executivo. É amoroso e muito emocional. Sabe cooperar e dá importância à harmonia. Aprecia tudo o que é chique, elegante e caro. Um bom restaurante, uma roupa alinhada, um excelente corte de cabelo. Exibicionista, adora impressionar. Troca facilmente um bom jantar em um restaurante simples, por apenas um café e uma água em outro sofisticado, pelo simples prazer de ver e ser visto. Mas sabe ser generoso e dividir sua atenção com as outras pessoas dando oportunidades a elas e incentivando-as principalmente no trabalho onde sempre deseja estar no comando. Poderia exercer suas atividades na área administrativa ou diplomática. Dá um ótimo relações-públicas. Sempre se enche de entusiasmo ao começar qualquer coisa, mas nem sempre acha tão fácil terminá-las. Por isso, está precisando de tais persistência para dar continuidade aos seus empreendimentos. O orgulho da posição e do status é muito forte em você. Assim, o casamento não é aconselhável, a não ser que tenha muito dinheiro ou condições de consegui-lo. Não viva a remoer o passado e não permita que suas emoções o atormentem.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/26.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 27" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Tem força, determinação e altos ideais, de modo que é um líder natural. Por isso, deve esforçar-se por liderar, ou trabalhar por conta própria, a posição de subalterno ou sociedade meio a meio não se adequando a você. Trabalha melhor sozinho, já que não gosta de dar satisfação de sua conduta. Pode ser bastante influenciável e muitas vezes apresentar dificuldades em tomar decisões. Deve aprender a não achar que os acontecimentos tem relação direta consigo. Pode ser uma pessoa bastante dramática e emocional, ou muito distante e fria.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os dois extremos são muito comuns. Pode ter habilidades artísticas e musicais, assim como, interesse pelo Oriente, sua cultura e religião. Seu “sexto sentido” é forte, e sua data de nascimento tende a atraí-lo para a metafísica e a filosofia. Seu principal problema é que quando as coisas começam a sair erradas, você poderá se permitir ataques de introversão e repugnância cega; controle estas tendências e seus relacionamentos irão bem.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem que aprender a deixar o passado ir embora. Na amizade e no casamento, tem muito a dar em termos de companheirismo e afeição cega. A atividade literária ou artística seria a melhor para você.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/27.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 28" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu aniversário indica um caráter forte, e que prefere o anticonvencional dentro dos limites do convencional. É dominante, independente e ambicioso, e deveria trabalhar com alguma capacidade individual, se bem que dentro de algum grupo organizado. Gosta de ser o centro das atenções. Muito ambicioso, faz sacrifícios para conseguir o que deseja. Muito determinado gosta de ver o resultado onde investe sua energia. Sabe como comandar as pessoas, mas consegue colaborar com elas, trabalhando junto. É original e adora aventuras.",
                    }),
                    t.jsx("p", {
                      children:
                        "Possui capacidade executiva e de liderança. Pode organizar, gerenciar e administrar situações e empreendimentos. Prefere lidar com as situações usando a diplomacia e a persuasão. É inclinado a sonhar, e então trabalhar por seus ideais. Tem todas as chances do mundo de chegar ao topo.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tendo-o atingido, tenderá, por vezes, a perder o interesse. A liberdade é muito importante para você, mas freqüentemente se sente encurralado, e raramente se sente disposto a aceitar a situação; de fato, poderá criar grandes casos com estas situações. O entusiasmo o interessa. Avesso a convenções, gosta de fazer as coisas a sua maneira.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/28.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 29" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Na numerologia, este é considerado um grande aniversário. É um dia que tende levá-lo perante ao público, pois você é intuitivo e idealista, com fortes qualidades de liderança. Influencia as pessoas com o seu exemplo de vida. Externamente é uma pessoa calma, confiante e firme, porém por dentro corre uma energia de muita tensão . Tem que tomar cuidado para controlar o seu lado exagerado e dramático.",
                    }),
                    t.jsx("p", {
                      children:
                        "É inclinado à melancolia e insolubilidade, por causa de seus fortes sentimentos; com você, o bem é sempre o muito bom, e o mal é sempre muito mau. Vive numa gangorra emocional, não sendo assim de convívio fácil, nem fácil de entender. Se sente perdido e solitário quando está sozinho. Tem medo de se machucar numa relação e por isso prefere relacionamentos casuais que não exigem tanto de si.Geralmente bondoso, precisa aceitar que nada é permanente, que as coisas mudam.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os interesses fora de seu trabalho podem ser um conforto e ajudá-lo a manter-se calmo e sereno. É capaz de grandes realizações em diversas áreas. Radical em tudo o que faz, experimenta emoções intensas e pode voltar-se para a área religiosa . Precisa de uma válvula para seu senso artístico e dramático, talvez escrevendo, ou pela música. Pode ser tremendamente bem sucedido se outros fatores de seu Mapa Numerológico concordarem.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/29.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 30" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "O número da intelectualidade. Neste dia nascem pessoas de grande imaginação e intuição, que apreciam a arte, a música e o teatro e são eloqüentes. Totalmente cheia de vida, impossível não notar uma pessoa que nasceu no dia 30. Ela consegue transformar o evento mais simples, num grande e vistoso acontecimento. Ela já é um acontecimento.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem uma grande imaginação e acredita que assim como ela, todos querem o melhor e aí se engana porque muitas vezes confia nas pessoas ingenuamente. É a luz na festa. Sempre tem o que contar ou mostrar. Nasceu dotada de privilegiada imaginação. Assim, esse deve ser o caminho a trilhar para a auto-realização,indispensável à sua felicidade. O teatro e a literatura poderiam ser, para você, meios naturais de expressão; mas nunca se mantenha preso a um trabalho rotineiro para não ter do que se arrepender mais tarde. Muito cedo todos perceberão que é inútil discutir com você, pois suas idéias são arraigadas e você não parece disposto a abrir mão delas. Embora, por vezes, possa parecer uma pessoa de humor desigual, pode ser um bom amigo e se tornar muito popular.",
                    }),
                    t.jsx("p", {
                      children:
                        "Uma vez que tem ideais de grande força, qualquer trabalho de cunho social poderá atraí-lo. Além disso, qualquer atividade que permita o desenvolvimento dos seus talentos artísticos, também o interessará. Você tem condições de fazer bem e simultaneamente diversas coisas, mas, devido a sua tendência à precipitação, correrá o risco de esbanjar as suas energias.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/30.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "DIA 31" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "O burocrata. Segue todas as regras, agindo sem nenhuma novidade, obedecendo códigos e leis, porque isso lhe traz segurança e estabilidade. É uma pessoa firme, determinada e, por vezes, até obstinada. Não gosta de mudar seu pensamento nem seus métodos, mas suas aptidões o levam para o terreno das coisas práticas, onde é batalhador, sistemático, leal e consciencioso. Porém tem um lado transgressor, que acelera e sai dos limites.",
                    }),
                    t.jsx("p", {
                      children:
                        "É imprevisível e está sempre surpreendendo as pessoas. Perseverante, nunca desiste. É uma pessoa séria e sincera, gosta de conversar, de estar com os amigos e de lembrar deles. Gosta de contar sobre si mesma, seus planos, sua vida. Não gosta de ficar sozinha. Aprecia os relacionamentos sociais e viagens. Diz sempre a verdade, mesmo quando a mesma não é agradável e, por isso, às vezes arranja inimigos. É emotiva, mas está sempre se controlando, e os outros, não percebendo isto, não retribuem seus sentimentos de amizade.",
                    }),
                    t.jsx("p", {
                      children:
                        "De senso prático, tem grande capacidade para tornar-se um excelente administrador de empresas Trabalha duramente, é honesto, leal, determinado e econômico. É daquelas pessoas que desejam a responsabilidade desde cedo. Sempre vai até o fim. Assim, qualquer trabalho que exija atenção, disciplina e resistência se adaptam perfeitamente a você; todavia, a sua realização está no mundo do negócios.",
                    }),
                    t.jsx("img", {
                      src: "./pages/numerologia/31.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  eg = "_banhos_cdkqs_1",
  ag = { banhos: eg },
  sg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: "Banhos e Ervas Especiais" }),
        t.jsxs("section", {
          className: ag.banhos,
          children: [
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "ÁGUAS NA UMBANDA" }),
                t.jsx("span", {
                  children:
                    "A água na Umbanda é um dos elementos naturais mais receptivos, com uma energia condutora, ela é utilizada principalmente pelos Guias Espirituais nos momentos onde há a necessidade de realizar grande limpeza, purificação e energização de nosso corpo astral e de nossa casa, afinal existem cargas e energias negativas, que somente esse elemento natural é capaz de desfazer, limpar e equilibrar.",
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "ÁGUA DO MAR" }),
                t.jsxs("span", {
                  children: [
                    "Ótima para descarrego e para energização, batida contra as rochas e as areias da praia, vibra energia, por isso nunca se apanha água do mar quando o mesmo está sem ondas. A energia salina do mar “queima” as larvas e miasmas astrais, principalmente sob a vibração de Iemanjá. Podemos ir molhando os chákras à medida que vamos adentrando no mar, pedindo licença. No final, podemos dar um bom mergulho de cabeça, imaginando que estamos deixando todas as impurezas espirituais e recarregando nosso corpo de energias sutis. Ideal, se realizado em mar com ondas. Saudemos Mamãe Iemanjá e todo o Povo do Mar.",
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/01.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "ÁGUA DA CACHOEIRA" }),
                t.jsxs("span", {
                  children: [
                    "Com a mesma função do banho de mar, só que executado em águas doces. A queda d’água provoca um excelente “choque” em nosso corpo, restituindo as energias, ao mesmo tempo em que limpamos toda a nossa alma, é água batida nas pedras, nas quais vibra, crepita e nos livra de todas as impurezas. Ideal, se tomado em cachoeiras localizadas próximas de matas e sob o sol. Saudemos Mamãe Oxum e todo Povo d’água.",
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/02-1.jpg",
                      alt: "",
                    }),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/02-2.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "ÁGUA DOS RIOS E LAGOAS" }),
                t.jsxs("span", {
                  children: [
                    "Tem também grande propriedade curadora e equilibradora. Se o rio tiver pouco movimento, quase parado, assim como a lagoa ou mangue, essa água tem uma energia decantadora e curadora. Saudemos Nanã Buruquê. Se o rio for bem movimentado com corredeiras, a energia da água é energética, equilibradora e reparadora. Saudemos Mamãe Oxum.",
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/03-1.jpg",
                      alt: "",
                    }),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/03-2.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "ÁGUA MINERAL" }),
                t.jsxs("span", {
                  children: [
                    "Água da pureza, do equilíbrio, da harmonização e da paz. Envolve nossos chakras desobstruindo-os e equilibrando- os. Utilizada para a fixação de fluidos espirituais transmitido pelas Entidades de Luz. É uma água muito fácil de se encontrar, por isso aproveitem esse Axé. Saudemos Oxalá.",
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/04-1.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "ÁGUA DE POÇO" }),
                t.jsxs("span", {
                  children: [
                    "É excelente nos casos de doenças, tanto no corpo espiritual como no corpo astral, pois tem uma grande energia transmutadora. Essa água está em contato com a terra, que é o agente mais poderoso de regeneração física absorvendo a energia ruim da área afetada, colocando em seu lugar uma energia boa. A cura se processa graças a uma troca de energia devido a interação entre os componentes físico, químico e energético que a terra oferece. Saudemos Omulu e também Nanã",
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/05-1.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "ÁGUA DA CHUVA" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "É altamente energética e purificadora. É a água que entrou em estado de vaporização e absorve toda a energia do ar, quando novamente entra em outro estado de mudança e retorna ao estado liquido, caindo do céu sobre a terra.",
                    }),
                    t.jsx("p", {
                      children:
                        "Por isso, é utilizada justamente nos momentos em que precisamos de mudança. A água da chuva é benéfica e pura, porém, depois de cair no chão, torna-se pesada, pois atrai as vibrações negativas do local. sendo ótima também para banhos de descarrego e limpeza de ambientes, pois é ela que limpa as ruas e as encruzas carregando todas as vibrações dos trabalhos arriados nesses locais. Saudemos Iansã, dona do tempo e das tempestades.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/06-1.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "BANHOS" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Todos nós temos ao redor do nosso corpo físico um campo eletromagnético, composto por corpos sutis, que se denomina aura.As auras das pessoas e dos lugares funcionam como antenas que recebem e enviam mensagens entre si, que são decodificadas através da nossa intuição.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quando passamos por situações estranhas, energias desequilibradas se agregam à nossa aura e permanecem lá por muito tempo provocando doenças.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quando tomamos um Banho de Ervas limpamos a nossa aura fazendo com que ela volte a funcionar normalmente e harmonizando os nossos chákras que são túneis por onde entram as energias no nosso corpo físico.",
                    }),
                    t.jsx("p", {
                      children:
                        "Cada planta tem características próprias que interagem com as nossas energias provocando as mudanças necessárias. As ervas podem limpar, energizar, melhorar nossa auto-estima, tirar nosso cansaço, etc…",
                    }),
                    t.jsx("p", {
                      children:
                        "Para fazer um banho de ervas, devemos olhar a grande lista de ervas abaixo e escolher aquela que vai se adequar à nossa situação. Pegue um punhado de cada erva e faça um chá com elas. Coe numa jarra e após tomar um banho normal, jogue o chá do ombro para baixo, ou da cabeça para baixo dependendo o tipo de ervas. As ervas podem ser misturadas e o resultado será melhor se usado número impar de ervas.",
                    }),
                    t.jsx("p", {
                      children:
                        "O sal grosso pode ser usado como banho de limpeza, mas é preciso que se tome um banho de ervas logo depois. As sobras das ervas devem ser colocadas em um jardim. O banho pode ser preparado, quente ou frio, depende do tipo de erva a ser utilizada.",
                    }),
                    t.jsx("p", {
                      children:
                        "Preferencialmente tome os banhos antes de dormir, exceto os energéticos e estimulantes que devem, ser tomados de manhã. Obs: Os banhos de ervas, flores, devem e podem ser jogados da cabeça para baixo. Os banhos que são jogados do pescoço para baixo são aqueles que contém: sal grosso, cachaça, enxofre, pimenta, comigo ninguém pode, fumo ou aqueles destinados para outros fins. Quando usar sal grosso deve ser colocado açúcar na mesma medida usada para o sal grosso.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/07-1.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "Dicas Importantes Para Os Banhos :" }),
                t.jsx("span", {
                  children: t.jsxs("ol", {
                    children: [
                      t.jsx("li", {
                        children: t.jsx("p", {
                          children:
                            "Os banhos devem ser acompanhados de preces pessoais espontâneas e sinceras. Peça. Converse com Deus e com seus protetores espirituais. Os resultados são fantásticos. Se desejar, acenda uma vela branca para o seu anjo da guarda.",
                        }),
                      }),
                      t.jsx("li", {
                        children: t.jsx("p", {
                          children:
                            "As flores e ervas frescas não devem ser fervidas. O valor energético das mesmas se perderá. 3 – Caso não consiga flores e ervas frescas, você pode usá-las secas. Neste caso, poderá colocá-las em água fervente e abafá-las. Evite fervê-las.",
                        }),
                      }),
                      t.jsx("li", {
                        children: t.jsx("p", {
                          children:
                            "Caso não consiga flores e ervas frescas, você pode usá-las secas. Neste caso, poderá colocá-las em água fervente e abafá-las. Evite fervê-las.",
                        }),
                      }),
                      t.jsx("li", {
                        children: t.jsx("p", {
                          children:
                            "Se estiver sentindo frio, acrescente ao banho, já preparado, uma quantidade de água mineral quente.",
                        }),
                      }),
                      t.jsx("li", {
                        children: t.jsx("p", {
                          children:
                            "Os resíduos dos banhos devem ser devolvidos à natureza. Coloque os resíduos num jardim ou no mar. Não se joga no lixo flores e ervas utilizadas em banhos energéticos, pois, se forem devolvidas à natureza, servirão como adubo",
                        }),
                      }),
                      t.jsx("li", {
                        children: t.jsx("p", {
                          children:
                            "Na verdade não existe mal algum em jogar uma mistura de sal grosso e água na cabeça. Afinal de contas, nós não tiramos a cabeça para entrar no mar, onde há maior concentração de sal que nos banhos de limpeza energética. O que causa desconforto e cansaço é manter o sal no corpo por muito tempo. Por isso, três horas após um banho com sal grosso, banhe-se apenas com água, caso use o banho da cabeça aos pés.",
                        }),
                      }),
                      t.jsx("li", {
                        children: t.jsx("p", {
                          children:
                            "Banhos preparados com ervas como arruda, comigo-ninguém-pode, espada-de-são-jorge e pára-raios não devem tocar a cabeça. Podem causar cansaço, letargia, dores e insônia. Evite-as.",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", { children: "BANHOS" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Em todas as tradições místico-esotéricas, os banhos são indicados como poderosos auxiliares nos processos de cura e equilíbrio de energia do nosso corpo.",
                    }),
                    t.jsx("p", {
                      children:
                        "O banho feito com lírios brancos e rosas brancas, por exemplo, acalma e restaura a paz espiritual.",
                    }),
                    t.jsx("p", {
                      children:
                        "Banhos com mel ajudaram adoçar o temperamento e com camomila propiciam bons sonhos.",
                    }),
                    t.jsx("p", {
                      children:
                        "Para o cansaço e a tensão do dia, faça um escalda-pés com melissa e se sentirá relaxado.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/08-1.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h4", {
                  children:
                    "RELAÇÃO DE ERVAS, FOLHAS, PLANTAS E SUAS PROPRIEDADES:",
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "ABRE CAMINHO" }),
                        ": ou ",
                        t.jsx("b", { children: "PERIQUITINHO DE OGUM" }),
                        ": Novas forças.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Sua aplicação é também de cunho litúrgico. Nas formas de banho de defesa, sacudimento e defumação, com o principal objetivo de abrir os caminhos seja no trabalho ou na vida pessoal.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os pós feitos de suas folhas secas e triturados servem para misturar no pó de pemba ou pó de abre caminho.",
                    }),
                    t.jsx("p", {
                      children:
                        "Também se usa a folha seca no meio da carteira profissional ou da carteira (a exemplo do acocô) e o correto é devolver a folha de onde foi retirada.",
                    }),
                    t.jsx("p", {
                      children:
                        "Orixás: Ogum Características: Folhas bem finas e de coloração roxa de um lado e verde do outro.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("div", {
              children: t.jsxs("span", {
                children: [
                  t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "AÇAFRÃO: " }),
                      "Usado em rituais de prosperidade, cura e estimular a clarividência.",
                    ],
                  }),
                  t.jsx("br", {}),
                  t.jsx("img", {
                    src: "./pages/banhosErvas/09-1.jpg",
                    alt: "",
                  }),
                ],
              }),
            }),
            t.jsxs("div", {
              children: [
                t.jsxs("p", {
                  children: [
                    t.jsx("b", { children: "AÇÚCAR: " }),
                    "Aceitação.",
                  ],
                }),
                t.jsxs("p", {
                  children: [
                    t.jsx("b", { children: "ÁGUA-DE-ARROZ: " }),
                    "Calmante.",
                  ],
                }),
                t.jsxs("p", {
                  children: [
                    t.jsx("b", { children: "ÁGUA-MARINHA(PLANTA): " }),
                    "Limpeza.",
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "ALECRIM: " }),
                        "Clareza mental. Indicado para aqueles que tendem a guardar, reter sentimentos como mágoas e ressentimentos, liberando estas energias já densas, alternado o seu padrão, realçando o exercício do perdão e trazendo a alegria e o amor á tona em nossos comportamentos.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Indicado para aqueles que tendem sempre a guardar , reter sentimentos como mágoas e ressentimentos, liberando estas energias já densas, alterando o seu padrão, realçando o exercício do perdão e trazendo a alegria e o amor á tona em nossos comportamentos.",
                    }),
                    t.jsx("p", {
                      children:
                        "Usado em encantamentos de proteção, para ajudar nos estudos. Lavar as mãos com uma infusão de alecrim substitui um banho de purificação. Beba um chá de alecrim antes de fazer um exame ou uma entrevista para ter a mente alerta. O chá de alecrim é ótimo para trazer o ânimo de volta.",
                    }),
                    t.jsx("p", {
                      children:
                        "Está ligado a fidelidade, amor, lembranças felizes. O cheiro do alecrim mantém a pessoa alegre, é um símbolo de amizade. Limpa os ambientes das energias negativas. Limpa o corpo e o espírito pois é a erva do orixá maior. Oxalá. Defesa dos males. Tira inveja e olho gordo, protege de magias.",
                    }),
                    t.jsx("p", {
                      children:
                        "É um maravilhoso desimpregnador de larvas astrais, razão pela qual deve-se usar na defumação, afasta a energia do mal olhado e harmoniza todo o ambiente. Queimando- se o seu caule, purifica-se de forma acentuada, o ambiente onde se encontram pessoas doentes. Nos banhos de ervas o alecrim equilibra o emocional, ajuda a perdoar as mágoas e restitui imediatamente a energia perdida. È uma das ervas que ajudam na depressão e estados permanentes de cansaço por problemas emocionais.",
                    }),
                    t.jsx("p", {
                      children:
                        "É a planta chave da falta de auto-estima e aumenta a capacidade de aprendizado ativando o mental e o racional. Erva da juventude eterna, do amor, da amizade e da alegria de viver.",
                    }),
                    t.jsx("p", {
                      children:
                        "Ajuda as crianças com estrutura emocional em desarmonia e atua nos desconfiados, nos que não acreditam em si mesmos, nos que não tem coragem de se lançarem em novos projetos. È a erva da coragem. Essa erva colocada debaixo do travesseiro afasta maus sonhos e usado como escalda-pés tira todas a energias acumuladas durante o dia.",
                    }),
                    t.jsx("p", {
                      children:
                        "Afasta maus espíritos e ladrões. Felicidade, cura, proteção, purificação e justiça. Ajuda na recuperação e tratamento de doenças. Atrai a falange dos caboclos. Protege na área profissional. Estimulante para concentração, adivinhação, memória e estudo.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "ALFAZEMA OU LAVANDA: " }),
                    t.jsx("p", {
                      children:
                        "Mudança. Aos que agem de maneira impensada ou sentem insegurança para agir despertando o discernimento. Atua no sistema nervoso do corpo, acalmando-o, permitindo diminuir as culpas de atos impensados e ajudando a manifestação da intuição. Para trazer paz e harmonia.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/10-1.jpg",
                      alt: "",
                    }),
                    t.jsx("br", {}),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "ALHO (PALHA):" }),
                    t.jsx("p", {
                      children:
                        "Proteção. Erva extremamente protetora. Pode ser pendurado em casa para proteger. Também utilizado para fazer exorcismos.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "ALPISTE:" }),
                    t.jsx("p", {
                      children: "Prosperidade. Banho para atrair clientela.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "Amendoeira:" }),
                    t.jsx("p", {
                      children:
                        "Seus galhos são usados nos locais em que o homem exerce suas atividades lucrativas. (erva de Exu);.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "Amoreira:" }),
                    t.jsx("p", {
                      children:
                        "Planta que armazena fluidos negativos e os solta ao entardecer; é usada pelos sacerdotes no culto a Eguns.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "ANGÉLICA:" }),
                    t.jsx("p", {
                      children:
                        "A raiz dessa erva guardada em um saquinho de tecido azul, funciona como um poderoso talismã protetor.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "ANGELIM- AMARGOSO- MORCEGUEIRA:" }),
                    t.jsx("p", {
                      children:
                        "São aplicadas em banhos fortes de descarrego, com o propósito de destruir os fluidos negativos, realizando um excelente descarrego.Nos rituais, suas folhas e flores são utilizadas nos abô dos filhos de Nanã, e as cascas são utilizadas em banhos fortes com a finalidade de destruir os fluidos negativos que possa haver, realizando um excelente descarrego nos filhos de Exu.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "ANIS ESTRELADO:" }),
                    t.jsx("p", {
                      children:
                        "Aumenta a auto-estima. Ensina o fluir natural dos sentimentos da forma como se originam, sem que as barreiras conceituais ou outras manifestações da personalidade tenham qualquer influência. Usado para proteção.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("b", { children: "ANTÚRIO:" }),
                    t.jsx("p", {
                      children:
                        "Essa flor ajuda a recomeçar projetos paralisados, pois simboliza a ressureição e é também um grande afrodisíaco.",
                    }),
                    t.jsx("img", {
                      src: "./pages/banhosErvas/11-1.jpg",
                      alt: "",
                    }),
                  ],
                }),
                t.jsxs("span", { children: [t.jsx("b", {}), t.jsx("p", {})] }),
                t.jsxs("span", { children: [t.jsx("b", {}), t.jsx("p", {})] }),
                t.jsxs("span", { children: [t.jsx("b", {}), t.jsx("p", {})] }),
                t.jsxs("span", { children: [t.jsx("b", {}), t.jsx("p", {})] }),
              ],
            }),
          ],
        }),
      ],
    }),
  rg = "_velas_1eka5_1",
  tg = "_upper_1eka5_25",
  Td = { velas: rg, upper: tg },
  ig = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: "Mensagem das Velas" }),
        t.jsxs("section", {
          className: Td.velas,
          children: [
            t.jsx("h4", {
              children: "MENSAGEM DAS VELAS E SIGNIFICADO DAS CORES DAS VELAS",
            }),
            t.jsxs("div", {
              children: [
                t.jsx("img", { src: "./pages/msgvelas/01.jpg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Quadradas:" }),
                      " Mobilizam energias e propostas de teor material, quando buscamos cimentar algo pratico e objetivo, agrega solidez e força.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/02.jpg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Cilíndricas:" }),
                      " São elementos de força que promovem a elevação, geram a sensação de superação, São velas usadas para o crescimento e orientação e ideais para superar limites, purificação espiritual.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/03.jpg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Redondas:" }),
                      " Ativam e facilitam mudanças, acender uma vela redonda serve para dar uma injeção de vigor a uma situação que encontra-se adormecida, uma carga de energia.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/04.jpg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", {
                        children: "Velas Triangulares Ou Hexagonais:",
                      }),
                      " Quando apresentam ângulos muito marcados geram uma energia de luta e combate, pode – se usar para vencer uma concorrência ou para superar o outro em uma disputa comercial ou judicial.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/05.jpg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Espiraladas:" }),
                      " Quando se busca maior objetividade em assuntos em que a fantasia está mesclada com a realidade, as que apresentam a forma de caracol são usadas para claridade mental e sabedoria interior.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/06.jpg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas De Mel:" }),
                      " Sugerem doçura e harmonia, indicadas para cumprir desejos de sintonia de casal e para criar bons laços de trabalho.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/07.jpg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Com Símbolos Orientais:" }),
                      " Quase todos eles são indicados para a prosperidade, sabedoria, saúde, paz e amor. Enquanto queimam vão ativando distintos símbolos ou setores de nossa vida.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", {
                  src: "./pages/msgvelas/08.jpg",
                  alt: "",
                  width: "75%",
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Frutais:" }),
                      " São ótimas para indicarem a melhor solução diante de problemas no trabalho ou resolução profissional.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", {
                  src: "./pages/msgvelas/09.jpg",
                  alt: "",
                  width: "100%",
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Flutuantes:" }),
                      " Somente se utilizam para propósitos sentimentais em relação estável ou para espalhar amor na família. Devem se acendidas entre ás 12 hs e 18 hs durante o dia, enquanto rege o elemento sol para receber toda energia e força, caso queira fazer um jantar á luz de velas flutuante pela noite, basta colocar o recipiente com água em pleno sol por cerca de duas horas e depois colocar as velas flutuantes acesas nesta água.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/10.jpeg", alt: "" }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "Velas Perfumadas:" }),
                      " Os aromas permitem que a cor se oculte a força que tem cada essência. Os aromas atuam sobre nosso sistema nervoso inclusive estimulam as distintas funções do organismo no sentido sensorial e extra- sensorial.",
                    ],
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsx("h5", {
              children:
                "AO ACENDER UMA VELA,É POSSÍVEL IDENTIFICAR ALGUMAS MENSAGENS:",
            }),
            t.jsxs("div", {
              children: [
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", {
                        children: "VELA QUE NÃO ACENDE PRONTAMENTE:",
                      }),
                      " O ANJO PODE ESTAR TENDO DIFICULDADES PARA ANCORAR. O ASTRAL AO SEU REDOR PODE ESTAR “POLUÍDO”.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", {
                        children: "VELA QUEIMANDO COM LUZ AZULADA:",
                      }),
                      " INDICA A PRESENÇA DE ANJOS E FADAS.É UM BOM SINAL..",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CHAMA VACILANTE:" }),
                      " O ANJO DEMONSTRA QUE, DEVIDO ÀS CIRCUNSTÂNCIAS, SEU PEDIDO TERÁ ALGUMAS MUDANÇAS.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CHAMA QUE LEVANTA E ABAIXA:" }),
                      " VOCÊ ESTÁ PENSANDO EM VÁRIAS COISAS AO MESMO TEMPO. SUA MENTE PODE ESTAR UM POUCO TUMULTUADA.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", {
                        children: "CHAMA QUE SOLTA FAGULHAS NO AR:",
                      }),
                      " O ANJO COLOCARÁ ALGUÉM NO SEU CAMINHO PARA COMUNICAR O QUE DESEJA.PODERÁ TER ALGUM TIPO DE DESAPONTAMENTO ANTES DO PEDIDO SER REALIZADO.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CHAMA QUE PARECE UMA ESPIRAL:" }),
                      " SEUS PEDIDOS SERÃO ALCANÇADOS.O ANJO ESTÁ LEVANDO SUA MENSAGEM.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "PAVIO QUE SE DIVIDE EM DOIS:" }),
                      " O PEDIDO FOI FEITO DE FORMA DÚBIA.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "PONTA DO PAVIO BRILHANTE:" }),
                      " SORTE E SUCESSO NO PEDIDO.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "VELA QUE CHORA MUITO:" }),
                      " O ANJO SENTE DIFICULDADES EM REALIZAR SEU PEDIDO.",
                      " ",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", {
                        children:
                          "SOBRA UM POUCO DE PAVIO E A CERA FICA EM VOLTA:",
                      }),
                      " O ANJO PEDE MAIS ORAÇÃO.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SE A VELA APAGA:" }),
                      " O ANJO AJUDARÁ NA PARTE MAIS DIFÍCIL DO PEDIDO, O RESTO CABE A VOCÊ RESOLVER.",
                    ],
                  }),
                }),
                t.jsx("br", {}),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      '"QUANDO VISUALIAMOS UMA DETERMINADA COR, NOSSO CÉREBRO ATUA PARA QUE A AURA A REFLITA.',
                      t.jsx("br", {}),
                      "É ATRAVÉS DESSE PROCESSO QUE O ANJO IRÁ CAPTAR E ENTENDER NOSSOS PEDIDOS.",
                      t.jsx("br", {}),
                      "PARA CADA TIPO DE PEDIDO É UTILIZADO UMA COR DE VELA.",
                      t.jsx("br", {}),
                      ' ESTE É O PRIMEIRO ELO DE LIGAÇÃO COM OS ANJOS." (MONICA BUONFIGLIO).',
                    ],
                  }),
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/11.gif", alt: "" }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              className: Td.upper,
              children: [
                t.jsx("img", { src: "./pages/msgvelas/12.jpg", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "VELA BRANCA:" }),
                    t.jsxs("p", {
                      children: [
                        "REPRESENTA A PUREZA E SINCERIDADE.",
                        t.jsx("br", {}),
                        "É UTILIZADA PARA OBTERMOS PAZ DE ESPÍRITO, HARMONIA, EQUILÍBRIO EM NOSSAS CASAS. ",
                        t.jsx("br", {}),
                        "AFASTA O “GÊNIO CONTRÀRIO” QUE PODERÁ ESTAR MANIFESTO NO AMBIENTE, CAUSANDO BRIGAS, DESENTENDIMENTOS ENTRE AS PESSOAS, DISCUSSÕES POR MOTIVOS FÚTEIS, ENFIM, UM MAL ESTAR GERAL RELACIONADO A LUA.",
                        " ",
                        t.jsx("br", {}),
                        "LIGAÇÃO COM O ARCANJO GABRIEL, O ANJO DA ANUNCIAÇÃO(DIA DA SEMANA segunda FEIRA)SEU NOME SIGNIFICA HERÓI DA HUMANIDADE, CHANCELER DE DEUS PERANTE OS HOMENS PARA TRAZER PAZ E NOTÍCIAS DE DESAPARECIDOS. ",
                        t.jsx("br", {}),
                        "HARMONIZAÇÃO, RELACIONAMENTOS FAMILIARES, NOTÍCIAS DE EMPREGO, GRAVIDEZ DIFÍCIL, CONTENÇÃO DE GULA , TUDO O QUE SE RELACIONA Á COMUNICAÇÃO E PURIFICAÇÃO DA AURA, TANTO PESSOAL QUANTO DE AMBIENTES.",
                      ],
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/13.gif", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "VELA VERMELHA:" }),
                    t.jsx("p", {
                      children:
                        "ASSOCIADA AO PLANETA MARTE, REPRESENTA O DINAMISMO, A FORÇA, O ÂNIMO, DETERMINAÇÃO, AÇÃO, DINAMISMO, VIGOR, PROTEÇÃO, A CORAGEM, CONQUISTAR E LIDERAR ASSUNTOS RELACIONADOS À MATÉRIA, TRABALHO E DINHEIRO PARA QUE SE TENHA TRIUNFO E EVOLUÇÃO RÁPIDA DOS ACONTECIMENTOS.",
                    }),
                    t.jsx("p", {
                      children:
                        "PODE SER USADA EM QUALQUER SITUAÇÃO RELACIONADA À EMERGÊNCIA, PEDIDOS QUE NECESSITAM SER SOLUCIONADOS COM URGÊNCIA.",
                    }),
                    t.jsx("p", {
                      children:
                        "LIGAÇÃO COM O ARCANJO CAMAEL (DIA TERÇA FEIRA) SEU NOME SIGNIFICA FORÇA E HEROÍSMO. PILAR DO RIGOR, REMOVE TODOS OS OBSTÁCULOS QUE IMPEDEM O CUMPRIMENTO DAS LEIS DE DEUS e AGE EM SITUAÇÕES QUE NECESSITAM DE URGÊNCIA, JUSTIÇA, MOMENTOS DE GRANDE AFLIÇÃO, AFASTA MÁS INFLUÊNCIAS E PERIGOS COM FOGO.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/14.jpg", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "VELA VERDE:" }),
                    t.jsx("p", {
                      children:
                        "LIGADA AO PLANETA VÊNUS,SIMBOLIZA A CALMA,A TRANQUILIDADE E O EQUILÍBRIO.",
                    }),
                    t.jsx("p", {
                      children:
                        "DEVE SER ACESA QUANDO O PEDIDO ESTIVER RELACIONADO COM SAÚDE, CURA ESPIRITUAL, FERTILIDADE, ESTABILIDADE E ABUNDÂNCIA.",
                    }),
                    t.jsx("p", {
                      children:
                        "LIGAÇÃO COM ARCANJO RAFAEL (DIA DA SEMANA 4 FEIRA). SEU NOME SIGNIFICA DEUS DA CURA, HARMONIA E SAÚDE.",
                    }),
                    t.jsx("p", {
                      children:
                        "TEM PODERES SOBRE OS FENÔMENOS DA NATUREZA, MANTÉM AS LEIS QUE REGEM O UNIVERSO, PRÍNCIPE DAS VIRTUDES E DA CURA, ATUA EM QUALQUER TIPO DE DOENÇA, DESDE VÍCIOS ATÉ DOENÇA DE CARMA. ELE ISOLA O PACIENTE EM UM CÍRCULO MÁGICO PROTEGENDO-O CONTRA MIASMAS, LARVAS ASTRAIS E VAMPIROS QUE SUGAM A ENERGIA DO PACIENTE COM O ROMPIMENTO DO CAMPO ÁURICO.",
                    }),
                    t.jsx("p", {
                      children:
                        "ATUA TAMBÉM SOBRE A MEMÓRIas, DE FORMA GERAL, EM ESTUDOS, PREPARAÇÃO PARA PROVAS OU ENTREVISTAS, CONCURSOS, VESTIBULAR.",
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "ORAÇÃO DO ARCANJO RAFAEL: " }),
                        " ”ARCANJO RAFAEL, MÉDICO CELESTE, DERRAME SOBRE MIM (OU NOME DA PESSOA DOENTE) SEU PODER CURADOR, PARA QUE CADA CÉLULA DE MEU CORPO SEJA CARREGADA DE FORÇA VITAL E QUE O MEU ORGANISMO SE RECUPERE, CURANDO MEU CORPO E ESPÍRITO COM A GRAÇA DIVINA”.",
                      ],
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/15.gif", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "VELA AZUL:" }),
                    t.jsx("p", {
                      children:
                        "REPRESENTA VERDADE, TRANQUILIDADE E COMPREENSÃO.",
                    }),
                    t.jsx("p", {
                      children:
                        "ESTA COR ESTÁ ASSOCIADA AO PLANETA JÚPITER,QUE REPRESENTA TRABALHO E PROSPERIDADE, ESTA COR TAMBÉM REPRESENTA A LIMPEZA E A TRANSPARÊNCIA DE COMPORTAMENTO",
                    }),
                    t.jsx("p", {
                      children:
                        "GERALMENTE AS PESSOAS QUE GOSTAM DO AZUL SÃO HONESTAS,TRABALHADORAS E GOSTAM DE FALAR A VERDADE.",
                    }),
                    t.jsx("p", {
                      children:
                        " DEVE SER USADA NA MAGIA BRANCA QUANDO O PEDIDO É RELACIONADO,PRINCIPALMENTE,A NEGÓCIOS OU TRABALHO",
                    }),
                    t.jsx("p", {
                      children:
                        "DEVE SER ACESA QUANDO SE DESEJA ADQUIRIR CALMA, SERENIDADE, SABEDORIA, DESENVOLVER E TRABALHAR PODERES PARANORMAIS, SENSITIVIDADE, INTUIÇÃO E TER EXPANSÃO NOS PROJETOS.",
                    }),
                    t.jsx("p", {
                      children:
                        "lIGAÇÃO COM O ARCANJO TZADKIEL (quinta FEIRA) SEU NOME SIGNIFICA MISERICÓRDIA, GENEROSIDADE E JUSTIÇA DIVINA. PROMOVE A PROSPERIDADE E ABUNDÂNCIA SEM LIMITES DE GENEROSIDADE,RESPONSABELIDADE PATERNAL, JUSTIÇA, POLÍTICA, ESPORTES, JOGOS, HERANÇAS E GANHO DE DINHEIRO.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/16.jpg", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "VELA ROSA:" }),
                    t.jsx("p", {
                      children: "REPRESENTA A BELEZA, O AMOR E A MORALIDADE.",
                    }),
                    t.jsx("p", {
                      children:
                        "RELACIONADA AO PLANETA VÊNUS, DEVE SER USADA EM ASSUNTOS AMOROSOS PARA FORTIFICAR RELACIONAMENTOS AFETIVOS E FILIAIS, OU ATIVAR A CHAMA INTERIOR DE SUA ALMA GÊMEA.",
                    }),
                    t.jsx("p", {
                      children:
                        "LIGAÇÃO COM O ARCANJO HANIEL (sexta FEIRA) SEU NOME SIGNIFICA A GRAÇA DE DEUS, DÁ EMOÇÃO E AMOR PARA CRIAR,DÁ VIDA AO MUNDO DO PENSAMENTO,TRAZ A LUZ DO CONHECIMENTO DIVINO, ATÉ No CHEFE DOS CUPIDOS E PROTETOR DO AMOR.",
                    }),
                    t.jsx("p", {
                      children:
                        "pARA HARMONIA DE RELACIONAMENTOS ENTRE PAIS E FILHOS, RECONCILIAÇÃO DE CASAIS, AUTO-ESTIMA, FERTILIDADE, AMOR UNIVERSAL, FAVORECE OS CASAMENTOS, ESTÉTICA, BELEZA, CIRURGIAS PLÁSTICAS E AJUDA A ENCONTRAR O VERDADEIRO AMOR.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/17.jpg", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "VELA LILÁS:" }),
                    t.jsx("p", {
                      children:
                        "ESTA COR ESTA LIGADA AO PLANETA URANO TEM FORTE LIGAÇÃO COM A ESPIRITUALIDADE.",
                    }),
                    t.jsx("p", {
                      children:
                        "É A COR QUE REPRESENTA O GRANDE MESTRE ASCENSIONADO SAINT-GERMAIN,TAMBÉM CONSIDERADO O MESTRE DA FRATERNIDADE DEVE SER USADA QUANDO O PEDIDO ESTIVER RELACIONADO A ESPIRITUALIDADE.",
                    }),
                    t.jsx("p", {
                      children:
                        "DEVE SER USADA QUANDO HÁ NECESSIDADE DE TRANSMUTAR AS ENERGIAS ,TRANSFORMAR NEGATIVIDDE,TER INSPIRAÇÕES AUMENTAR A INTUIÇÃO,COMBATER O “STRESS” E ACALMAR-SE.",
                    }),
                    t.jsx("p", {
                      children:
                        "LIGAÇÃO COM O ARCANJO TZAPKIEL(SÁBADO) REGE A MEMÓRIA REENCARNATIVA, CUIDA DO CARMA, CUIDA DA COBRANÇA DE DIVERSAS FORMAS DE RESPONSABELIDADES HUMANAS, TECE A MALHA CÓSMICA PARA TRANSFORMAÇÃO DO CARMA EM DARMA.PARA FORTALECER E DESPERTAR A ESPIRITUALIDADE, PARA EVOLUIR, AUMENTAR O PODER DE CONCENTRAÇÃO E AFASTAR VÍCIOS.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/18.jpg", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "VELA AMARELA:" }),
                    t.jsx("p", {
                      children:
                        "SIMBOLIZA A VIDA, A ALEGRIA, A FORÇA,  O ENTUSIASMO,  O PODER E O VIGOR DA MENTE.AGUÇA A INTELIGÊNCIA, AGILIZA O RACIOCÍNIO.",
                    }),
                    t.jsx("p", {
                      children:
                        "ESTA COR SIMBOLIZA A TROCA, MUDANÇAS E ESTUDO, DEVERÁ SER USADA PARA PEDIDOS QUE TENHAM A VER COM ESSAS SITUAÇÕES",
                    }),
                    t.jsx("p", {
                      children:
                        "O AMARELO ESTÁ RELACIONADO COM O PLANETA SOL, DEVE SER ACESA QUANDO HÁ NECESSIDADE DE CURA ENERGÉTICA, CLAREAR A MENTE, ABRIR O INTELECTO, FIRMAR OS PENSAMENTOS E OCORRER MUDANÇAS RÁPIDAS DAS SITUAÇÕES.",
                    }),
                    t.jsx("p", {
                      children:
                        "LIGAÇÃO COM O ARCANJO MIGUEL (DOMINGO) SEU NOME SIGNIFICA PRÍNCIPE DA LUZ, GRITO DE BATALHA, COMANDANTE DO EXÉRCITO CELESTE, ABRE CAMINHOS, VENCE AS DIFICULDADES, RESOLVE PROBLEMAS FINANCEIROS,  CRIA NOVAS OPÇÕES DE VIDA, NOVOS EMPREGOS, CONCRETIZA OBJETIVOS, DÁ PROTEÇÃO AFASTA SENSAÇÕES DE ANGÚSTIA E OPRESSÃO E DOMINA AS FORÇAS DO MAL.",
                    }),
                    t.jsx("p", {
                      children:
                        "nÃO ESQUEÇAM QUE O ELEMENTO FOGO, ATRAVÉS DE SEUS ELEMENTAIS DA NATUREZA,  AS SALAMANDRAS, TEM O PODER ALQUÍMICO DE TRANSMUTAÇÃO E TRANSFORMAÇÃO DE ENERGIA.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsx("img", { src: "./pages/msgvelas/19.gif", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A VELA LARANJA:" }),
                    t.jsx("p", {
                      children:
                        "DEVE SER USADA PARA TER FORÇA MENTAL,AUMENTAR A CONFIANÇA, A CRIATIVIDADE,O ENTUSIASMO, O PODER DE ATRAÇÃO E OBTER SUCESSO NOS EMPREENDIMENTOS.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
              ],
            }),
          ],
        }),
      ],
    }),
  ng = "_SPrincipal_1p5dj_1",
  og = { SPrincipal: ng },
  lg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: "Cartomancia" }),
        t.jsxs("section", {
          className: og.SPrincipal,
          children: [
            t.jsxs("span", {
              children: [
                t.jsx("p", {
                  children:
                    "Conduz-nos a um mundo mágico e oculto em que as técnicas de interpretação têm por objetivo a previsão direta e imediata do futuro as mensagens nas cartas são claras e poderosas favoráveis ou não. Sempre nos preocupamos em saber do futuro, fosse por qual motivo fosse: curiosidade, tirar dúvidas, acalmar, decidir qual o caminho a seguir.",
                }),
                t.jsx("br", {}),
                t.jsx("p", {
                  children:
                    "A cartomancia fascina não só as consulentes, mas os próprios cartomantes porque muitas vezes as predições são proféticas.",
                }),
                t.jsx("br", {}),
                t.jsx("p", {
                  children:
                    "Embora casa carta tenha seu significado de acordo com o naipe, o elemento mais importante para ler a sorte e saber interpretar a combinação que elas formam. A mensagem de cada carta altera-se conforme onde se posicionar. Existem formas de jogar a cartomancia:",
                }),
              ],
            }),
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/cartomancia/01.jpg", alt: "" }),
                t.jsx("br", {}),
                t.jsx("i", { children: '"A ferradura do destino"' }),
                " ",
                t.jsx("br", {}),
                t.jsx("i", { children: '"O leque"' }),
                " ",
                t.jsx("br", {}),
                t.jsx("i", { children: '"Previsões diárias"' }),
                " ",
                t.jsx("br", {}),
                t.jsx("i", { children: '"Previsões semanais"' }),
                " ",
                t.jsx("br", {}),
                t.jsx("p", {
                  children:
                    "As letras do alfabeto nesta jogada além de sabermos o tempo em que os acontecimentos ocorrerão, podemos visualizar as respostas sempre muito corretas.",
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/cartomancia/02.png", alt: "" }),
                " ",
                t.jsx("br", {}),
                t.jsx("b", { children: "Bastões:" }),
                t.jsx("p", {
                  children:
                    "Corresponde ao Naipe de Paus do baralho comum. Significa        energia, novos empreendimentos, viagens, oportunidades no amor e no trabalho. Este muito relacionado com a vida intelectual, de criação artística. E um Naipe energético, sendo que esta força poderá ser construtiva, mas também poderá ser destrutiva, conforme a orientação que lhe for dada. Ela sugere mudanças, mas sempre com sentidos opostos para melhor ou para pior, sem meios termos. Representa pessoas de caráter energéticas e empreendedor. Esta associada ao Verão.",
                }),
              ],
            }),
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/cartomancia/03.png", alt: "" }),
                " ",
                t.jsx("br", {}),
                t.jsx("b", { children: "Gládios:" }),
                t.jsx("p", {
                  children:
                    "Corresponde ao Naipe de Espadas do baralho comum. Simboliza um grande numero de atitudes, algumas destrutivas outras construtivas. Brigas, ambição, força, coragem, todos os sentimentos aparecem juntos. Representa pessoas com o temperamento esperto e vivo. Esta associada ao Inverno.",
                }),
              ],
            }),
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/cartomancia/04.png", alt: "" }),
                " ",
                t.jsx("br", {}),
                t.jsx("b", { children: "Moedas:" }),
                t.jsx("p", {
                  children:
                    "Corresponde ao Naipe de Ouros no baralho comum. Indica forças materiais em qualquer campo de atividade. Este e o naipe da dedicação da paciência, dos negócios, do comercio e da educação. Representa pessoas com tendência à melancolia, loiras, ruivas a grisalhas. Esta associada à Primavera.",
                }),
              ],
            }),
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/cartomancia/05.png", alt: "" }),
                " ",
                t.jsx("br", {}),
                t.jsx("b", { children: "Taças:" }),
                t.jsx("p", {
                  children:
                    "Corresponde ao Naipe de Paus do baralho comum. Significa        energia, novos empreendimentos, viagens, oportunidades no amor e no trabalho. Este muito relacionado com a vida intelectual, de criação artística. E um Naipe energético, sendo que esta força poderá ser construtiva, mas também poderá ser destrutiva, conforme a orientação que lhe for dada. Ela sugere mudanças, mas sempre com sentidos opostos para melhor ou para pior, sem meios termos. Representa pessoas de caráter energéticas e empreendedor. Esta associada ao Verão.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  dg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: "Mesa Radiônica e Radiestesia" }),
        t.jsxs("section", {
          children: [
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/mesaRadionica/01.jpg", alt: "" }),
                t.jsx("h5", {
                  children: "MESA RADIÔNICA DOS RELACIONAMENTOS:",
                }),
                t.jsx("p", {
                  children:
                    "Essa mesa é indicada para solteiros, que não conseguem encontrar um amor.",
                }),
                t.jsx("p", {
                  children:
                    "Para casais que necessitam de proteção e/ou fortalecer seu relacionamento, ou todos aqueles que desejam receber a energia mais poderosa do Universo, que é o puro amor da Chama Rosa da Mestra Rovena!",
                }),
                t.jsx("p", {
                  children:
                    "Ajudar o consulente encontrar sua alma gêmea;Fortalecer relacionamentos conjugais;Resolver problemas no casamento, namoro, família, amizades;",
                }),
                t.jsx("p", {
                  children:
                    "Promover a libertação de relações abusivas;Ajuda a atrair novas e boas amizades;",
                }),
                t.jsx("p", {
                  children:
                    "Remove obstáculos que impedem o bom relacionamento do casal;Protege o relacionamento de influências negativas;",
                }),
                t.jsx("p", {
                  children:
                    "Ajuda o consulente a cumprir seu propósito e vida;",
                }),
                t.jsx("p", {
                  children:
                    "Trabalha questões de vidas passadas, pendências de antigos relacionamentos;",
                }),
                t.jsx("p", {
                  children:
                    "Aumenta o amor por si mesmo, o amor próprio, trabalha a auto aceitação;",
                }),
                t.jsx("p", {
                  children:
                    "Ajuda a remover da mente o medo de se relacionar, de tentar outra vez depois de uma decepção;",
                }),
                t.jsx("p", {
                  children:
                    "Esses são só alguns benefícios, pois a Mesa pode ajudar ainda em várias outras questões da vida do consulente, mediante a capacidade energética",
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("span", {
              children: [
                t.jsx("img", {
                  src: "./pages/mesaRadionica/02.jpg",
                  width: "80%",
                  alt: "",
                }),
                t.jsx("h5", { children: "MESA RADIÔNICA DA PROSPERIDADE:" }),
                t.jsx("p", {
                  children:
                    "Realiza Limpeza de crenças limitantes relacionadas aodinheiro;",
                }),
                t.jsx("p", {
                  children:
                    "Ajuda o consulente no equilíbrio financeiro, fazendo assim que o mesmo evite gastos desnecessários;",
                }),
                t.jsx("p", {
                  children:
                    "Afasta energias negativas, olho gordo, inveja, magias queestejam travando a vida financeira;- Aumenta a confiança do consulente em sua própriacapacidade, despertando o lado empreendedor e/ou forçainterior do mesmo;",
                }),
                t.jsx("p", {
                  children:
                    "Ajuda o consulente no equilíbrio financeiro, fazendo assimque o mesmo evite gastos desnecessários;Ajuda o consulente a ter uma probabilidade maior depassar em concursos, provas, e processos seletivos;- Abre os caminhos para prosperidade;",
                }),
                t.jsx("p", {
                  children:
                    "Busca solucionar problemas de vidas passadas quepossam estar impedindo a prosperidade do consulentenesta vida;",
                }),
                t.jsx("p", {
                  children:
                    "Materializa o financeiro, traz Sorte e Fartura;- Muda a consciência do consulente em relação aodinheiro, o tornando um ser humano mais próspero;",
                }),
                t.jsx("p", {
                  children:
                    "Identifica possíveis problemas que podem estar impedindo a boa fluidez do dinheiro;",
                }),
                t.jsx("p", {
                  children:
                    "Atrai prosperidade em todas as áreas da vida, tornando oconsulente próspero no dinheiro, mais também no amor, nasaúde física entre outros;",
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/mesaRadionica/03.jpg", alt: "" }),
                t.jsx("h5", {
                  children:
                    "A Mesa Radiônica Akáshica pode ser usada para tratar diversos assuntos tais como:",
                }),
                t.jsx("p", {
                  children:
                    "-Trabalha o atendido na frequência de suas 12 dimensões reequilibrando fragmentos de alma em dimensões inferiores e ativando sua conexão com níveis superiores de alta frequência atuando diretamente na mudança de consciência e cura da alma em todos os seus registros fragmentados, realizando a Cura Akáshica total.",
                }),
                t.jsx("p", {
                  children:
                    "-Problemas de saúde e baixa energia (aumento da frequência/imunidade física, mental, emocional e espiritual, alinhamento dos chacras, reequilíbrio da aura, em qualquer linha do tempo com a qual o atendido possa estar em conexão.",
                }),
                t.jsx("p", {
                  children:
                    "-Limpeza de registros akáshicos negativos e de toda energia criada de todas as vivências do ser influenciando negativamente a vida atual aqui/agora. A limpeza desses registros melhora imediatamente não só a vida atual do atendido, mas também de todos os seus níveis ligados a qualquer espaço dimensional, vidas passadas, paralelas, simultâneas, interdimensionais.",
                }),
                t.jsx("p", {
                  children:
                    "-Bloqueios (conscientes ou inconscientes – do presente, passado, paralelo e futuro).",
                }),
                t.jsx("p", {
                  children:
                    "-Remoção de condicionamento negativo, crenças limitantes adquiridas e herdadas, vícios e padrões antigos, como medo, culpa e vergonha ligados aos nossos níveis em dimensões nferiores.",
                }),
                t.jsx("p", {
                  children:
                    "-Questões emocionais (problemas de relacionamento, família, parcerias, etc.).",
                }),
                t.jsx("p", {
                  children:
                    "-Autodesenvolvimento, habilidades psíquicas e conexões com dons adquiridos em outras imensões.",
                }),
                t.jsx("p", {
                  children:
                    "– Conexão com o propósito de vida, onde haverá um alinhamento ao propósito existencial do consulente, para que ele o desenvolva da melhor forma possível e para o bem maior de todos os envolvidos.",
                }),
                t.jsx("p", {
                  children:
                    "-Aumentar a autoestima e a confiança trabalhando o desapego oportunizando a entrega ao amor verdadeiro.",
                }),
                t.jsx("p", {
                  children:
                    "-Tratar animais, plantas e solo que necessitam de cura akáshica e equilíbrio energético.",
                }),
              ],
            }),
          ],
        }),
        t.jsx("br", {}),
        t.jsxs("section", {
          children: [
            t.jsxs("span", {
              children: [
                t.jsx("img", {
                  src: "./pages/mesaRadionica/04.jpg",
                  alt: "",
                  width: "40%",
                }),
                t.jsx("img", { src: "./pages/mesaRadionica/05.jpg", alt: "" }),
              ],
            }),
            t.jsxs("span", {
              children: [
                t.jsx("p", {
                  children:
                    "A Radiestesia é a arte, ou ciência, que investiga as radiações naturais dos objetos e seres vivos. A mesa Radiônica é a ciencia, ou arte, capaz de trabalhar tais energias, de forma a equilibra-las e harmonizá-las.",
                }),
                t.jsx("p", {
                  children:
                    "A mesa radiônica é uma tábua composta por vários gráficos e símbolos especialmente desenvolvida para trabalhar a limpeza, equilíbrio e harmonização de pessoas, situações, objetos e ambientes. Com a mesa e o pêndulo é possível trabalhar com a radiestesia, fazendo medições e investigações e com a radiônica, fazendo as limpezas e harmonizações que forem necessárias. A Radiestesia é utilizada para descobrir os desequilíbrios energéticos, já a mesa radiônica equilibra tudo aquilo que tem necessidade de ser equilibrado.",
                }),
              ],
            }),
          ],
        }),
        t.jsxs("section", {
          children: [
            t.jsxs("span", {
              children: [
                t.jsx("img", { src: "./pages/mesaRadionica/06.jpg", alt: "" }),
                t.jsx("h5", {
                  children:
                    "Com a consulta da mesa radiônica somos capazes de:",
                }),
                t.jsx("p", {
                  children:
                    "- equilibrar e harmonizar os corpos físico, mental, emocional e energético;",
                }),
                t.jsx("p", {
                  children:
                    "- fazer a limpeza e harmonização de pessoas, objetos e ambientes;",
                }),
                t.jsx("p", {
                  children: "- fazer a limpeza e harmonização dos chakras;",
                }),
                t.jsx("p", {
                  children: "- harmonizar todos os tipos de relacionamentos;",
                }),
                t.jsx("p", { children: "- acelerar um processo judicial;" }),
                t.jsx("p", {
                  children:
                    "- potencializar uma situação (encontrar trabalho, comprar, vender,alugar etc);",
                }),
                t.jsx("p", {}),
                t.jsx("p", {
                  children: "- ativar a percepção extra-sensorial;",
                }),
                t.jsx("p", {
                  children:
                    "- transmutar padrões mentais e comportamentais (medos, traumas etc);",
                }),
                t.jsx("p", {
                  children:
                    "- limpar as energias residenciais e/ou local de trabalho;",
                }),
                t.jsx("p", {
                  children:
                    "- verificar e ‘liberar’ (caso permitido) os votos, pactos, contratos, promessas, compromissos desta vida e vidas passadas;",
                }),
                t.jsx("p", {
                  children:
                    "- limpar e harmonizar as causas e origens das doenças, bem como potencializar o processo de cura e recuperação",
                }),
                t.jsx("p", {
                  children:
                    "- acelerar o efeito de tratamento com medicamentos e neutralizar os efeitos colaterais dos mesmos;",
                }),
                t.jsx("p", {
                  children:
                    "- transmuta padrões negativos em relação a finanças, trabalho, relacionamentos etc.",
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsx("br", {}),
            t.jsx("span", {
              children:
                "Todo trabalho é feito sempre dentro do que é Divino para que as soluções e resultados seja o MELHOR para TODOS os envolvidos dentro de uma situação. É uma terapia de limpeza energética. Em momento algum ela substitui o tratamento médico convencional ou a consulta com um profissional médico credenciado.",
            }),
          ],
        }),
      ],
    }),
  ug = "_link_1hx78_1",
  cg = { link: ug },
  pg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: " tarot dos anjos " }),
        t.jsxs("section", {
          children: [
            t.jsxs("div", {
              children: [
                t.jsxs("span", {
                  children: [
                    t.jsx("img", {
                      src: "./pages/tarotdosanjos/01.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Ritual para a ancoragem dos anjos cabalísticos",
                    }),
                    t.jsx("p", {
                      children:
                        "O seguinte ritual, ensinado por Monica Buonfiglio no livro “A magia dos anjos cabalísticos”, é um meio poderoso para estabelecer uma ligação intensa com os anjos e pedir a ajuda deles em qualquer situação. Pode ser utilizado para a purificação astral de algum lugar, para o equilíbrio energético ou para fazer algum pedido. Deve ser realizado durante sete dias seguidos.",
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Em primeiro lugar, você deve conhecer o nome de seu anjo cabalístico e do príncipe que governa a categoria da qual ele faz parte.",
                    }),
                    t.jsx("p", {
                      children:
                        "Você também vai precisar de um prato branco de porcelana, sete velas comuns, cada vela tendo uma das seguintes cores: branco, azul, amarelo, verde, vermelho, rosa e lilás, e sete folhas de papel com o seguinte desenho:",
                    }),
                    t.jsx("img", {
                      src: "./pages/tarotdosanjos/02.png",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Antes de começar o ritual, prepare o ambiente acendendo um incenso. Em seguida, coloque o papel com o desenho sobre o prato. No primeiro dia, a vela utilizada será a branca. Você deve ungi-la com óleo essencial ou óleo comum. Depois, fixe-a sobre o desenho, bem no centro, onde os dois cículos encontram-se. Acenda a vela, invoque seu Príncipe e seu anjo e recite o Salmo correspondente.",
                    }),
                    t.jsx("img", {
                      src: "./pages/tarotdosanjos/03.png",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Depois, deixe a vela queimar até o fim. Se, no final, o fogo da vela queimar o papel, mesmo que uma pequena parte dele, é sinal de que você conseguiu conectar-se a seu anjo e pode continuar a realização do ritual com as outras velas.",
                    }),
                    t.jsx("p", {
                      children:
                        "Caso o papel não queime, você deve usar outra vela branca no dia seguinte. Apenas quando a vela branca queimar o papel, você deve passar para a cor seguinte.",
                    }),
                    t.jsx("p", {
                      children:
                        "Se o papel queimar mais para o lado do círculo direito, chamado OD (círculo da inteligência), a solução será obtida de forma inteligente. Já se o papel queimar mais do lado esquerdo, chamado OB (círculo do instinto), seu anjo estará lutando contra seu gênio contrário, afastando-o astralmente de sua casa, até então, carregada. Se o papel queimar, pelo menos num pequeno pedaço, é sinal de que o anjo conseguiu ancorar e o pedido feito por você será atendido.",
                    }),
                    t.jsx("p", {
                      children:
                        "No segundo dia, escolha outra cor de vela e repita o mesmo procedimento, e assim por diante, até o sétimo dia. Apenas com a vela branca você deverá observar a queima ou não do papel, com as outras cores não é necessário. O que sobrar das folhas de papel, você deverá queimar e soprar as cinzas ao vento. Se sobrar cera depois da vela queimada, enterre-a ou jogue-a em água corrente. Faça a mesma coisa se o prato quebrar.",
                    }),
                    t.jsx("p", {
                      children:
                        "Se você interromper por algum motivo a realização do ritual antes de finalizá-lo, você deverá recomeçar a partir da vela branca.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsxs("span", {
                  children: [
                    t.jsx("img", {
                      src: "./pages/tarotdosanjos/04.jpg",
                      alt: "",
                    }),
                    t.jsx("h4", {
                      children:
                        "AO ACENDER UMA VELA,É POSSÍVEL IDENTIFICAR ALGUMAS MENSAGENS:",
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "Vela que não acende prontamente: ",
                        }),
                        "O anjo pode estar tendo dificuldades para ancorar .O astral ao seu redor pode estar “poluído”.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "Vela queimando com luz azulada: ",
                        }),
                        "Indica a presença de anjos e fadas. É um bom sinal.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Chama vacilante: " }),
                        "O anjo demonstra que, devido às circunstâncias, seu pedido terá algumas mudanças.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Chama que levanta e abaixa:" }),
                        "Você está pensando em várias coisas ao mesmo tempo. Sua mente pode estar um pouco tumultuada.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "Chama que solta fagulhas no ar: ",
                        }),
                        "O anjo colocará alguém no seu caminho para comunicar o que deseja. Poderá ter algum tipo de desapontamento antes do pedido ser realizado.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "Chama que parece uma espiral: ",
                        }),
                        "Seus pedidos serão alcançados. O anjo está levando sua mensagem.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "Pavio que se divide em dois: ",
                        }),
                        "O pedido foi feito de forma dúbia.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Ponta do pavio brilhante:" }),
                        "Sorte e sucesso no pedido.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: " Vela que chora muito: " }),
                        "O anjo sente dificuldades em realizar seu pedido.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children:
                            "Sobra um pouco de pavio e a cera fica em volta: ",
                        }),
                        "O anjo pede mais oração.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: " Se a vela apaga: " }),
                        "O anjo ajudará na parte mais difícil do pedido, o resto cabe a você resolver.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Quando visualizamos uma determinada cor, nosso cérebro atua para que a aura a reflita. É através desse processo que o anjo irá captar e entender nossos pedidos. Para cada tipo de pedido é utilizado uma cor de vela. Este é o primeiro elo de ligação com os anjos. (Monica buonfiglio).",
                    }),
                    t.jsxs("p", {
                      children: [
                        " ",
                        t.jsx("b", { children: "OBS;" }),
                        " NESTE BLOG VC ENCONTRARÁ O NOME DE SEU PRÍNCIPE,SEU ANJO,E O SALMO CORRESPONDENTE AO SEU DIA DE NASCIMENTO.",
                      ],
                    }),
                    t.jsx("a", {
                      className: cg.link,
                      href: "https://tarodosanjosedicasdoanjododia.blogspot.com/",
                      children: "tarodosanjos-Blog",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsx("div", {
              children: t.jsxs("span", {
                children: [
                  t.jsx("p", {
                    children:
                      "Colocar o nome do príncipe no papel Abaixo o nome de seu anjo de guarda logo abaixo o seu nome de batismo.",
                  }),
                  t.jsx("p", {
                    children:
                      "A vela precisa ser untada por que o azeite é sagrado, pelas escrituras, pois ele destila nas lamparinas que ardem à face de deus.",
                  }),
                  t.jsx("p", {
                    children:
                      "Olear a vela é fazer um elo psíquico entre você ela através do tato você está passando energia e, dessa forma, a vela funciona como uma extensão da mente.",
                  }),
                  t.jsx("p", {
                    children: "Acenda um incenso com um isqueiro.",
                  }),
                  t.jsxs("p", {
                    children: [
                      "faça o salmo do seu dia de nascimento e escreva na parte da baixo do desenho da lemniscata seu pedido e no final a frase:",
                      " ",
                      t.jsx("i", {
                        children:
                          '"Bendito é o meu pedido pois ele é atendido."',
                      }),
                      " ",
                    ],
                  }),
                ],
              }),
            }),
            t.jsxs("div", {
              children: [
                t.jsxs("span", {
                  children: [
                    t.jsx("img", {
                      src: "./pages/tarotdosanjos/05.jpg",
                      alt: "",
                    }),
                    t.jsx("h5", { children: "NO 1º DIA DA VELA BRANCA:" }),
                    t.jsx("p", {
                      children:
                        "Representa pureza e sinceridade, é utilizada para paz de espírito, harmonia e equilibrio em nossas casas. (lembre-se se não queimar o papel nem que seja um pouco, terá de refazer)",
                    }),
                    t.jsx("p", {
                      children:
                        "Verdade, tranquilidade e compreensão, relacionado ao trabalho e prosperidade, negócios.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("h5", { children: "VELA AMARELA:" }),
                    t.jsx("p", {
                      children:
                        "Vida, alegria, força, entusiasmo, vontade de viver. simboliza estudos, deve ser usada para pedir sobre estas situações;",
                    }),
                    t.jsx("br", {}),
                    t.jsx("h5", { children: "VELA ROSA:" }),
                    t.jsx("p", {
                      children:
                        "Beleza, amor, deve ser usada para pedir sobre assuntos amorosos, para fortalecer laços afetivos e filiais.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("h5", { children: "VELA VERDE:" }),
                    t.jsx("p", {
                      children: "Calma, tranquilidade, saúde, equilíbrio.",
                    }),
                    t.jsx("img", {
                      src: "./pages/tarotdosanjos/06.jpg",
                      alt: "",
                    }),
                    t.jsx("h5", { children: "VELA VIOLETA OU LILÁS:" }),
                    t.jsx("p", { children: "Ligada a espiritualidade." }),
                    t.jsx("br", {}),
                    t.jsx("h5", { children: "VELA VERMELHA:" }),
                    t.jsx("p", {
                      children:
                        "Usada para fazer pedido relacionado á emergências e que necessitam ser solucionados com urgência",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "ESTE RITUAL DEVE SER REPETIDO DE 72 DIAS EM 72 DIAS OS ANJOS SEMPRE ATENDEM É UM DOS RITUAIS MAIS PODEROSOS DE ANJOS QUE EXISTEM…",
                    }),
                    t.jsx("img", {
                      src: "./pages/tarotdosanjos/07.jpg",
                      alt: "",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  mg = "_divlink_r332g_1",
  fg = "_intro_r332g_41",
  Od = { divlink: mg, intro: fg };
const hg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("section", {
          children: t.jsxs("div", {
            className: Od.divlink,
            children: [
              t.jsx(dt, {
                to: "/magia-dos-ciganos/baralho",
                children: " Baralho Cigano",
              }),
              t.jsxs(dt, {
                to: "/magia-dos-ciganos/simpatia",
                children: [" ", "Simpatia Ciganas e outras"],
              }),
              t.jsxs(dt, {
                to: "/magia-dos-ciganos/rituais",
                children: [" ", "Rituais e orações Ciganas"],
              }),
              t.jsxs(dt, {
                to: "/magia-dos-ciganos/astrologia",
                children: [" ", "A astrologia dos ciganos"],
              }),
            ],
          }),
        }),
        t.jsx("br", {}),
        t.jsxs("section", {
          className: Od.intro,
          children: [
            t.jsx("h1", { children: " A magia e a Historia dos ciganos " }),
            t.jsxs("div", {
              children: [
                t.jsx("img", { src: "./pages/ciganos/magia/01.jpg", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Os Ciganos não gostam e não aceitam a palavra tribo para denominar seus grupos, pois não possuem chefes equivalentes aos caciques das tribos indígenas, nas mãos de quem está o poder.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os ciganos também não possuem pajés ou curandeiros, ou ainda um feiticeiro em particular, pois cada cigano e cigana tem seus talentos para a magia, possui dons místicos, sendo portanto um feiticeiro em si mesmo. Todo povo cigano se considera portador de virtudes doadas por Deus como patrimônio de berço, cabendo à cada um desenvolver e aprimorar seus dons divinos da melhor e mais adequada maneira.",
                    }),
                    t.jsx("p", {
                      children:
                        "Existem autores que citam que cada grupo cigano tem seu feiticeiro particular denominado kakú, porém esta palavra no idioma romani significa apenas tio, não tendo qualquer credibilidade esta afirmação. Os ciganos preferem e acham mais correto o termo clã para denominar seus grupos.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("img", { src: "./pages/ciganos/magia/02.jpg", alt: "" }),
                t.jsx("h5", { children: "FAMÍLIA CIGANA:" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "É exercido de maneira completa e responsável pelo homem. Ele é o líder e à ele competem a proteção, a segurança e o sustento da família. A mulher e os filhos o respeitam como máxima autoridade e lhe são inteiramente subordinados.",
                    }),
                    t.jsx("p", {
                      children:
                        "São os homens que resolvem as pendências, acertam o casamento dos filhos, decidem o destino da viagem e se reúnem em conselhos sobre assuntos abrangentes e comuns ao Clã.",
                    }),
                    t.jsx("p", {
                      children:
                        "As mulheres ciganas não trabalham fora do lar e quando vão às ruas para ler a sorte, esta tarefa é entendida como um cumprimento de tradições e não como parte do sustento da família, apesar de elas entregarem aos maridos todo o dinheiro conseguido.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os ciganos formam casais legítimos unidos pelos laços do matrimônio, não fazendo pare de seus costumes viverem amasiados ou aceitarem o concubinato. Vivem juntos geralmente até a morte e raramente ocorrem entre eles separações ou divórcios, que somente acontecem se existir uma razão muitíssimo grave e com decisão do Tribunal reunido para julgar a questão.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os pares ciganos, marido e mulher, são muito reservados e discretos em público, não trocando nenhum tipo de carinho que possa ser entendido como intimidade, que é vivida somente em absoluta privacidade.",
                    }),
                    t.jsx("p", {
                      children:
                        "Enquanto o homem representa o esteio e o braço forte da família, a mulher significa o lado terno e de proteção espiritual dos lares ciganos.",
                    }),
                    t.jsx("p", {
                      children:
                        "Cabe às mulheres cuidarem das tarefas do lar e as meninas ficam sempre ao redor da mãe, auxiliando nos trabalhos da casa, ajudando a cuidar dos irmãos menores e aprendendo as tradições e costumes como a execução da dança, a leitura das cartas e das mãos, a realização dos rituais e cerimônias, os preceitos religiosos.",
                    }),
                    t.jsx("p", {
                      children:
                        "Cabe às mulheres cuidarem das tarefas do lar e as meninas ficam sempre ao redor da mãe, auxiliando nos trabalhos da casa, ajudando a cuidar dos irmãos menores e aprendendo as tradições e costumes como a execução da dança, a leitura das cartas e das mãos, a realização dos rituais e cerimônias, os preceitos religiosos.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("img", {
                  src: "./pages/ciganos/magia/03.jpg",
                  alt: "",
                  width: "100%",
                }),
                t.jsx("h5", { children: "Grupos Ciganos:" }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "GRUPO KALONS" }),
                        " componentes deste grupo fixaram residência especialmente na Espanha e Portugal, onde sofreram severas perseguições, pois sendo estes países profundamente católicos e conservadores, não podiam admitir os costumes ciganos, tanto que foram proibidos de falar o seu idioma, usar suas vestes típicas e realizar festas e cerimônias segundo suas tradições. O que os ciganos sofreram na Península Ibérica, lembra de certa maneira o que os negros sofreram em terras do Brasil.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Os ataques da realeza ao grupo Kalon foram tão rigorosos, que ele foi obrigado a criar um dialeto, mescla de seu próprio idioma com o português e o espanhol, em particular em Portugal, onde as proibições não foram verbais, mas determinadas por decreto do rei D. João V. Apesar de todos os sofrimentos o Clã Kalon sobrevive até os dias atuais, sendo um dos grupos que mais fielmente segue as tradições ciganas. Tem-se que os Kalons originaram-se no antigo Egito.",
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "GRUPO MOLDÁVIO" }),
                        "De pele mais clara e olhos azuis, este grupo originou-se em terras da Rússia, tendo de enfrentar os rigores do inverno russo em suas precárias carroças. Sob as pesadas roupas e capotes escuros mal reconhecemos sua origem cigana. A denominação moldávio vem da palavra Moldávia, república da Europa central, que chegou a fazer parte do Império Russo e da antiga URSS. Há poucas diferenças entre o dialeto moldávio e o romeno; contudo, distinguem-se fortemente na escrita, uma vez que o moldávio adotou o alfabeto cirílico (Dicionário Aurélio).",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "GRUPO HOHARANÔ " }),
                        "Surgiram em terras turcas e se destacaram em especial como grandes criadores de cavalos. Os integrantes deste grupo chegaram ao Brasil bem depois do grupo Kalon, somente no final do século XVIII.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "GRUPOS KALDERASH E MATCHUIYA",
                        }),
                        "Os ciganos do grupo Kalderash são originários da Romênia e da antiga Iugoslávia, o berço dos Matchuiya. Ambos os grupos chegaram ao Brasil no final do século XVIII. Os primeiros ciganos a chegarem no Brasil eram do grupo Kalon e vieram de Portugal em meados do século XVII. Portugal, necessitando de mestres de forja no Brasil, enviou-os para cá para que fabricassem ferraduras, armamentos e ferramentas. Faziam também artesanalmente utensílios domésticos, seus tachos e alambiques para o fabrico da cachaça, famosos até hoje por serem extremamente bem feitos e resistentes.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("img", { src: "./pages/ciganos/magia/04.jpg", alt: "" }),
                t.jsx("h5", { children: "O CRIS-ROMANI" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Para os ciganos a liberdade e a interação com a natureza constituem bens do mais alto valor e estima, o que os motiva a obedecerem à um código de ética e moral até rigoroso. Nada mais enganoso que julgá-los estroinas, devassos, desregrados ou amorais. Seu amor pela família e pelo grupo, sua consciência que é o seu reto proceder – talvez a única forma de preservar e perpetuar suas origens e o próprio povo. São obedientes às leis universais, como não roubar e não matar. Quando um cigano ou uma cigana infringe as leis é convocado o Tribunal de Justiça ou o Cris-romani, formado por ciganos idosos ou pelos mais velhos do grupo, que julgam os infratores, procurando exercer seu papel com o mais alto sentido de responsabilidade e respeito.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("img", {
                  src: "./pages/ciganos/magia/05.jpg",
                  alt: "",
                  width: "100%",
                }),
                t.jsx("h5", { children: "Profissões" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Junto com a modernidade, o aumento progressivo das cidades, os ciganos foram ficando cada vez mais limitados em suas andanças, tornando-se mais sedentários ou passando a morar mais tempo no mesmo lugar. Assim as profissões mais freqüentes são as do comércio e as ligadas às artes, principalmente à musica. Cantores, compositores, músicos, dançarinos, surgem com suas melodias, passos marcantes de dança, como a flamenga da Espanha, trazendo alegria e energia contagiantes para os recintos onde se apresentam.",
                    }),
                    t.jsx("p", {
                      children:
                        "Ao longo do tempo fizeram e ainda fazem parte de trupes circenses, uma vez que o mundo do circo sempre mudando de lugar, combina perfeitamente com o pensamento e sentimento ciganos.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("img", { src: "./pages/ciganos/magia/06.jpg", alt: "" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "A leitura de cartas e das mãos pelas mulheres ciganas também rende dinheiro, porém essa atividade não é considerada uma atividade profissional, mas um ato de devoção à fé cigana.",
                    }),
                    t.jsx("p", {
                      children:
                        "O povo cigano é um povo honesto, que vive procurando manter sua dignidade e honradez, não sendo procedente a reputação de ladrões que lhes é imputada.",
                    }),
                    t.jsx("br", {}),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "A CONVERSA SECRETA DAS MÃOS… ",
                        }),
                        " ",
                        t.jsx("br", {}),
                        "O Cigano segurar um charuto em “balanço” entre o polegar e o dedo médio, a mão horizontal aberta para o alto, significa – ",
                        t.jsx("b", { children: "“ESPERAR A OFERTA”. " }),
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "O Cigano segurar um charuto abaixado, na direção do cinzeiro significa – ",
                        t.jsx("b", { children: " “REFLETIR”. " }),
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "O Cigano segurar um charuto entre o polegar, o indicador e o médio, apontando horizontalmente, como um dedo, significa –",
                        t.jsx("b", { children: " “AVISO”." }),
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "O Cigano segurar um charuto, perpendicular à mao, entre o dedo anular e os tres outros dedos, significa – ",
                        t.jsx("b", { children: " “DEIXA FALAR, ESPERA.”" }),
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "O Cigano segurar um charuto, verticalmente entre o polegar,o dedo médio e a palma da mão, significa: – “CUIDADO CONTIGO, PERIGO.” charuto de cabeça pra baixo entre o polegar e o dedo médio, significa: ",
                        t.jsx("b", { children: " “ESPERA OUTRA PROPOSTA”." }),
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "O Cigano segurar um charuto normalmente entre os dedos indicador e médio, significa: –  ",
                        t.jsx("b", { children: '"ESTÁ BEM, COMPRA"' }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("img", { src: "./pages/ciganos/magia/07.jpg", alt: "" }),
                t.jsx("img", { src: "./pages/ciganos/magia/08.jpg", alt: "" }),
              ],
            }),
          ],
        }),
      ],
    }),
  gg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: "Baralho Cigano" }),
        t.jsxs("section", {
          children: [
            t.jsxs("div", {
              children: [
                t.jsx("img", {
                  src: "../pages/ciganos/baralho/01.jpg",
                  alt: "",
                }),
                t.jsx("h5", { children: "Significado das cartas" }),
                t.jsx("img", {
                  src: "../pages/ciganos/baralho/02.jpg",
                  alt: "",
                }),
              ],
            }),
            t.jsxs("div", {
              children: [
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children:
                            "1 – O MENSAGEIRO – NOVE DE COPAS (EXU): SIMBOLOGIA –",
                        }),
                        " Esta figura significa o homem em ação, em busca da sabedoria, da autoconfiança e do conhecimento interior. Também é a criatividade presente no ser humano. Representa as ações, A capacidade de mudar o rumo das coisas.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM " }),
                        " - Alcançará seus objetivos. Se estiver rodeada de cartas negativas, sua sorte está ameaçada.Todo cavaleiro é destemido e tem a ousadia dentro de si, o que demonstra a necessidade de acreditar em si mesmo e em seu próprio potencial. Ele não recua diante dos obstáculos ou dos caminhos desconhecidos, logo é o “senhor de sua montaria”, exatamente como os Cavaleiros da Távola Redonda.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "O cavaleiro tem o impulso para enfrentar a vida e sempre traz alguma coisa, seja bom ou ruim, logo significa que algo está a caminho, mas ainda não chegou. Algo está na sintonia do consulente.Significa o movimento, a transformação da energia espiritual em material. A alegria de viver, o dinheiro e as conquistas de bens materiais. O sexo em sua forma mais primitiva.",
                    }),
                    t.jsx("p", {
                      children:
                        "A forma positiva leva à ação realizadora, à manifestação das propostas do Plano Terra e a atividade dos objetivos propostos.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", {
                          children: "2 – O TREVO – SEIS DE OUROS SIMBOLOGIA",
                        }),
                        "– Este arcano é representado por um trevo de quatro folhas. Significam os tropeços da vida, as desorientações, mas que não trazem muitas preocupações, porque são problemas passageiros, de fácil solução.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM " }),
                        "– As dificuldades serão passageiras, se acreditar que possui a força infinita da sabedoria.Em nossa vida sempre vamos encontrar algumas pedras pelo caminho. Os problemas surgem para que os enfrentemos de frente, pois somos capazes de superá-los. Esta carta representa os obstáculos, os pequenos problemas (de fácil solução), os empecilhos que surgem para testar e aumentar a nossa força de vontade e determinação em prosseguir.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Significa destruição, a quebra da harmonia, desventura, tropeço, a pedra no caminho. Demonstra sempre negatividade. Representa uma energia que foi enviada e que já se materializou na vida da pessoa.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "3 – O NAVIO – DEZ DE ESPADA (YEMANJÁ)",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA" }),
                        "– É representado pela figura de um navio em águas revoltas. Estas águas significam a segurança na perigosa viagem da vida. Esta carta enfatiza a importância de todos os sentimentos.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM" }),
                        " – Mudanças positivas em todos os aspectos: físico, espiritual e material. Se vier perto da carta que significa você, é sinal de viagem breve.A função de um navio é fazer viagens e mudanças externas, ou seja, o deslocamento físico. Um navio também busca novos horizontes, o que deve ser a ação do consulente, no sentido de dar um novo rumo à trajetória de sua existência. Lembra dos desbravadores do mar? Pedro Alvares Cabral, Cristóvão Colombo e tantos outros buscaram novas terras.Significa saúde, viagens, mudanças e a transmutação. Está sempre em movimento e possui grande capacidade de adaptação a novas realidades.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "A forma positiva demonstra saúde ou grande capacidade de recuperação, mudanças favoráveis, transformação da rotina. Na forma negativa afasta ou atrasa as viagens ou mudanças. Há perigo de doenças ou debilidade nas defesas.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "4 – A CASA – REI DE COPAS",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA " }),
                        "- É representada pela figura de uma casa que mostra seu próprio lar e todos que dele participam. Indica a confiança, a prosperidade, o amor e o apoio familiar. Também significa o equilíbrio cósmico.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM " }),
                        "– Quando estiver localizada abaixo do que designa você, é melhor ficar alerta com as pessoas ao seu redor. Do contrário, terá sorte.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "A casa (ou edificação) representa o ambiente onde se mora, se estuda, se trabalha ou o ambiente religioso. Pode ser a casa interna do consulente, pois toda casa representa estrutura, solidez e equilíbrio. Por isso mostra um lado racional para que o próprio equilíbrio seja mantido. É uma carta parada e no negativo indica rigidez na personalidade do consulente.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("p", {
                      children:
                        "Significa o lar, o lugar seguro, o ponto de retorno e de recuperação, onde se está protegido e em equilíbrio.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("p", {
                      children:
                        "Na sua forma positiva significa que a pessoa tem um lugar seguro, que a sua reposição de energia ocorre continuamente. A pessoa está protegida das influências negativas externas. Na sua forma negativa mostra que está havendo desarmonia e desentendimento em casa. A pessoa só se sente bem em outros lugares.",
                    }),
                    t.jsx("br", {}),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "5 – A ÁRVORE – SETE DE COPAS (OXÓSSI)",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA " }),
                        "- Tal como o elemento que representa, esta lâmina demonstra a fertilidade permanente na vida do ser humano, a troca de energias positivas e também a força da vitalidade que existe em cada um.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM " }),
                        "– Quando esta carta aparece longe de que indica você, é sinal de boa saúde. Quando aparece perto, indica sorte e progresso.A árvore tem raízes que crescem primeiro, antes de gerar frutos, portanto há um crescimento lento, porém com base. Significa progresso, prosperidade, fertilidade.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Representa, inclusive, a família, por causa de árvore genealógica.Significa a fartura, a abundância, o crescimento de tudo o que foi plantado. Na forma positiva significa que tudo que se quer semear será colhido em abundância. Novas oportunidades surgirão trazendo fartura à mesa e garantia de sucesso nos empreendimentos.",
                    }),
                    t.jsx("p", {
                      children:
                        "Negativa significa que está havendo uma quebra no ciclo natural das coisas, que não se está conseguindo completar o que se começou. O que se plantou pode estar sendo colhido por outra pessoa. Pode vir a faltar comida à mesa.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "6 – AS NUVENS – REI DE PAUS(IANSÃ)",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA " }),
                        "- É simbolizada por um céu cinzento e assustador. Significa a instabilidade emocional, sensação de incapacidade em resolver os problemas. Também é sinal de mudanças lentas, tristeza.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM " }),
                        "– As mudanças de sua vida deverão ser vagarosas, de acordo com as necessidades. Os momentos de tristeza serão passageiros.Uma nuvem escura significa o que está nebuloso: dúvidas, incertezas, ansiedades, ilusões, fantasias, confusão de sentimentos, preocupações, instabilidade mental. É o que não está claro.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Indica uma crise, porém passageira, pois a recuperação virá rápida, assim que os ventos da confusão passarem. A criança começa a frequentar a escola. Conhece outras pessoas, outra realidade. Tem de conciliar rapidamente o velho com o novo. Começam as primeiras inseguranças e medos diante do novo.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("p", {
                      children:
                        "São os ventos, o dinamismo, o movimento incessante, a grande capacidade de fluir e não se aprisionar em nada. Confusão de sentimentos; instabilidade; aborrecimentos; tumultos. Na forma positiva significa um grande poder para lutar e vencer. Pessoa altiva, independente, que persegue seus objetivos com garra. Exerce grande atratividade no sexo oposto.",
                    }),
                    t.jsx("p", {
                      children:
                        "Negativa indica arrogância. Pessoa sob influência negativa, com prejuízo para a saúde e perda de interesse pela vida. A pessoa não consegue se ligar em nada, nem a ninguém. Tudo é motivo para brigas e discórdias, principalmente com quem mais gosta.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "7 – A SERPENTE – DAMA DE PAUS (OXUMARÊ)",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA " }),
                        " - Nesta carta, aparece a figura de uma serpente venenosa. Esta lâmina que tem muita carga negativa, significa que traições e forças externas ocultas estão agindo em seu campo astral.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM" }),
                        " - Se este arcano estiver perto da carta que representa você, é sinal que poderá passar por alguns riscos como traições.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "A cobra é sempre um sinal de perigo, pelo seu veneno, pois ataca com o bote. Significa a traição, brigas, intrigas, discórdias, maledicência e desarmonias.",
                    }),
                    t.jsx("p", {
                      children:
                        "A cobra também representa a sexualidade (kundalini) do consulente e a maneira como ele a expressa.",
                    }),
                    t.jsx("p", {
                      children:
                        "Outro aspecto é a auto-sabotagem (medo e insegurança que paralisam) e a necessidade de defesa.Começa a pré-adolescência e o desejo de auto-afirmação, que leva a competições acirradas.",
                    }),
                    t.jsx("br", {}),
                    t.jsx("p", {
                      children:
                        "Significa discórdia, desarmonia, intriga e maledicência. A ilusão das falsas aparências. Traição; inveja. Se positiva, representa o arco – íris com sua beleza ilusória e de promessas de brilho e riquezas. Negativa significa o rastejar da cobra, o deslizar sorrateiro e intencionalmente maléfico, sempre pronta para dar seu bote mortal.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "8 – O CAIXÃO – NOVE DE OUROS (EGUNS)",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: " SIMBOLOGIA -" }),
                        "É simbolizada pela figura de um caixão de defunto que representa momentos de ruptura. Por outro lado, refere-se às forças ocultas do inconsciente que podem levar à destruição, mas também a evolução.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: " MENSAGEM – " }),
                        "Se estiver afastado da figura que representa você, é sinal de mudanças benéficas. O contrário, significa acontecimentos ruins.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "A vida é feita de ciclos que se iniciam e se encerram, portanto esta carta significa a renovação, o renascimento (não a morte física) após um novo aprendizado, logo as transformações internas, profundas e necessárias que o consulente precisa se deparar. Com isso traz nova etapa que será cumprida com o aprendizado já conquistado.",
                    }),
                    t.jsx("p", {
                      children:
                        "O caixão representa o mundo interior do consulente, são as mudanças de valores, a quebra de padrão de comportamento, é o aprendizado interno.",
                    }),
                    t.jsx("p", {
                      children:
                        "Significa a destruição; a perda definitiva; perdas materiais; doenças graves; a morte.",
                    }),
                    t.jsx("p", {
                      children:
                        "Na forma positiva demonstra que a perda está próxima ou já configurada. Existe um claro objetivo de interromper um desenvolvimento",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "9 – AS FLORES – DAMA DE ESPADAS (NANÃ)",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA – " }),
                        "As flores simbolizam a felicidade, alegria e beleza, a fraternidade e a união das pessoas. Também indica a realização de todas as possibilidades e sonhos.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM -" }),
                        " Esta carta representa a felicidade em todos os aspectos da vida. É um arcano ligado à alegria, realização em todos os setores da vida. As flores sempre alegram uma pessoa e enfeitam um ambiente. Esta carta simboliza as alegrias, o contentamento, a satisfação e o entendimento entre as pessoas. Mostra as coisas boas no lado afetivo e indica namoro também.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Simbolicamente, o ramalhete de flores é a imagem da perfeição espiritual, logo representa a Cigana Espiritual do(a) consulente(a).Com a juventude, um dos períodos mais felizes: o jovem descobre como pode ser forte em grupo (fazendo parte dele).Significa alegria, satisfação íntima; felicidade. Entendimento entre as pessoas. Generosidade. Fraternidade. Sorte; contentamento.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "10 – A FOICE – VALETE DE OUROS",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA –" }),
                        " Uma foice ceifando o trigo representa a destruição do tempo, a morte. É a perda dolorosa no momento certo, o perigo, a transformação e o desprendimento.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM –" }),
                        " Esta lâmina traz perigo de ruptura e separação. Mas se esta carta estiver rodeada de outras positivas, indica a possibilidade, uma nova chance que surge.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "A função de uma foice é cortar e separar, a saber: ",
                        t.jsx("br", {}),
                        "1) cortar: esta carta representa o rompimento, a interrupção, a separação, o término e o corte. ",
                        t.jsx("br", {}),
                        "2) Separar: esta carta também representa as decisões a serem tomadas, logo as escolhas, pois separa o joio do trigo.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Também signfica a distância que precisamos manter numa determinada questão e a necessidade de se fazer ajustes na relação ou na vida, pois a foice também apara.Começa o desejo de independência com relação aos pais, sendo ainda dependente.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "11 – O AÇOITE – VALETE DE PAUS",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA –" }),
                        " Tem o símbolo de um grande chicote que representa a força, o poder mental. Também pode indicar o poder judiciário e a chance de um acordo em família.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM –" }),
                        " De acordo com a situação, este arcano representa o uso abusivo da força, quando seria melhor uma conversa. Indica o emprego necessário da sabedoria e da intuição.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Também significa a necessidade de se dedicar a algo, com rédeas curtas, ou seja, se esforçar para atingir os objetivos, correr atrás do que se quer, ter empenho para obter êxito.",
                    }),
                    t.jsx("p", {
                      children:
                        "A magia e o poder pessoal (poder de persuasão) também são indicados por esta carta e a conseqüente intenção ou força da mente que é utilizada para se concretizar os objetivos.Começam os primeiros conflitos interiores. Necessidade de aceitação e afirmação.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "12 – OS PÁSSAROS – SETE DE OUROS",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA " }),
                        "- A imagem de um casal de pássaros juntinhos num galho de árvore representa o amor. Indica uma vida sentimental feliz. Este arcano quando aparece perto da carta A SERPENTE tem toda sua negatividade neutralizada.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM –" }),
                        " Indica respeito pelo par. Também é um aviso para não sufocar o companheiro de ciúme.Esta carta é a única onde consta duas figuras: dois pássaros ou duas corujas ou dois pombos. Portanto indica namoro, romantismo, carinho.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "É uma carta espiritual, pois nos remete a fé e a paciência, ou seja, a necessidade de deixar as coisas acontecerem, logo a necessidade de esperar, com confiança em si mesmo e na vida. Outro significado é o abrir as asas para alçar vôo, é a expansão, é o pensar alto.Tudo é sonho. Planos para o futuro. É o desejo de encontrar o parceiro para a vida toda.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "13 – A CRIANÇA – VALETE DE ESPADAS",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA -" }),
                        " É a figura de uma criança inocente que representa a alegria, a própria inocência, a naturalidade e a espontaneidade ainda presente no coração das pessoas.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM – " }),
                        "Esta carta traz um conselho: você deve ficar bastante atenta com atitudes impensadas, repentinas e infantis. Estas ações podem magoá-lo(a) profundamente.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "Para uma criança tudo é novo e os acontecimentos representam novidades e jovialidade. ",
                        t.jsx("br", {}),
                        "Esta carta significa a infância e os filhos. Também simboliza a criança interior e a postura de se estar aberto (receptivo) perante a vida. Representa a necessidade de flexibilizar numa determinada situação, pois o radicalismo impede o fluxo natural da energia e tende a estagnação. percepção de que a infância ficou para trás e de que esse momento pode ser vivido de um novo modo, com entusiasmo e alegria. Tudo vai dar certo.",
                      ],
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "14 – A RAPOSA – NOVE DE PAUS",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA –" }),
                        " Uma raposa esperando sua caça é o que traz este arcano. Com esta figura, ele simboliza as armadilhas da vida, as traições, a deslealdade e a salvação pela astúcia.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM –" }),
                        " Se aparecer perto da que representa você, é porque é muito invejado(a). Já se aparecer longe, é sinal de que está se prejudicando com sua inveja e cobiça.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Também representa a feminilidade, o charme e a sedução de uma mulher.A raposa ouve muito bem, é silenciosa e é observadora, usa a cautela e a estratégia como precaução. A raposa é inteligente e aproveita as oportunidades que a vida oferece, por isso ela presta atenção em tudo, antes de agir.",
                    }),
                    t.jsx("p", {
                      children:
                        "Outro significado é “a outra ou o outro” numa infidelidade conjugal.omeçam os primeiros erros. A vida em sociedade exige maior “jogo de cintura”. É necessário ser esperto para sobreviver.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children: t.jsx("b", {
                        children: "15 – O URSO – DEZ DE PAUS",
                      }),
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "SIMBOLOGIA –" }),
                        " Nesta carta, aparece a figura ameaçadora de um grande urso. Ela representa a falsidade dos amigos. Também mostra a inveja de pessoas próximas e queridas.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "MENSAGEM –" }),
                        " Você deve ter cuidado com falsos amigos, do tipo “amigo-urso”. Sentimentos ruins como inveja, a cobiça podem interferir nas energias do seu campo astral.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Esta é uma carta polêmica, pois alguns livros dizem que é a pior carta do baralho. Porém, ela tem vários significados.Carta de alerta: Cuidado com algum rival e cuidado para não entrar em depressão. O pleno desabrochar da sexualidade. É arrebatado pela paixão.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", { children: t.jsx("b", {}) }),
                    t.jsx("p", { children: t.jsx("b", {}) }),
                    t.jsx("p", { children: t.jsx("b", {}) }),
                    t.jsx("p", {}),
                  ],
                }),
                t.jsx("br", {}),
              ],
            }),
          ],
        }),
      ],
    }),
  vg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: "Simpatias Ciganas e Outras" }),
        t.jsxs("section", {
          children: [
            t.jsxs("div", {
              children: [
                t.jsx("h4", {
                  children: "Rituais, Magias e Simpatias para todos os fins.",
                }),
                t.jsx("img", {
                  src: "../pages/ciganos/simpatia/01.jpg",
                  alt: "",
                }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", {
                      children: t.jsx("p", {
                        children:
                          "A lua cheia é favorável à realização das magias que visem ampliar algo. ",
                      }),
                    }),
                    t.jsx("li", {
                      children: t.jsx("p", {
                        children:
                          "Se você está tentando aumentar a distância de alguma coisa, separando-se de uma pessoa ou de uma situação, aproveite o astral de hoje e resolva isso de uma vez por todas.",
                      }),
                    }),
                    t.jsx("li", {
                      children: t.jsx("p", {
                        children:
                          "Arrume um altar com algumas velas pretas e vermelhas, flores brancas, incenso de cedro e um caldeirão. Após fazer isso, escreva em uma folha de papel o seu pedido de libertação e a coloque no interior do caldeirão. Em seguida, acenda a vela, o incenso e o fogo dentro do caldeirão. Então, invoque respeitosamente as salamandras e lhes peça que queimem os laços que o prendem.",
                      }),
                    }),
                    t.jsx("li", {
                      children: t.jsx("p", {
                        children:
                          "A magia descrita a seguir é um ritual que deve ser feito para Xangô para pedir justiça quando o Sol está em Libra: coloque canjica branca cozida temperada com 12 paus de canela e 12 cravos-da-índia em uma gamela de madeira. Por cima, coloque 12 moedas e espete 12 quiabos crus, com as cabeças para cima. Cubra com calda de açúcar cristalizada com 12 gotas de baunilha e mais 12 claras batida. Amare um quiabo usando uma fita branca e outra vermelha. No lado direito, acenda seis velas brancas e, no esquerdo, acenda seis velas vermelhas, colocando água limpa na frente. Diga: “Salve Xangô! O rei está vivo! Ele desce sobre a Terra!”.",
                      }),
                    }),
                    t.jsx("li", {
                      children: t.jsx("p", {
                        children:
                          "A lua cheia sempre privilegia os relacionamentos, tanto os pessoais quanto os amorosos, os comerciais e os sociais. Aqui estão alguns encantamentos simples e fáceis, que devem ser feitos nesta fase lunar para prender alguém para sempre. Use como tempero uma pitada de cominho nos alimentos que a pessoa desejada for ingerir. Prepare um banho romântico, com essência de melissa. Coloque sob o colchão, no lado em que a pessoa querida se deita um ramo de alecrim. Enquanto ela dorme, passe suavemente sobre a sua testa um pouco de pó de raiz de lírio branco. Antes que ela saia, polvilhe os seus sapatos com pó de alcaçuz.",
                      }),
                    }),
                    t.jsx("li", {
                      children: t.jsx("p", {
                        children:
                          "Esta é uma receita para a preparação de um óleo do amor, ideal para os que desejam que esse sentimento faça parte da sua vida. Coloque em uma panela, de preferência feita de barro, um pouco de óleo mineral ou qualquer outro, desde que não tenha cheiro. Misture uma colher de sobremesa de folhas trituradas de malva e outra de folhas de louro. Acrescente uma colher de café de cravo em pó e outra de canela em pó. Aqueça a mistura em fogo baixo e mexa com uma colher de pau. Apague antes de ferver e pingue 15 gotas de essência de sândalo, 25 gotas de rosas e mais 15 gotas de bálsamo. Coe em filtro de papel.",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Oração para pedir bênção da casa" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "(Esta oração pode ser recitada por qualquer pessoa que resida na casa, ou no momento em que acontecer a mudança).",
                    }),
                    t.jsx("p", {
                      children:
                        "Deus Pai, Todo Poderoso, entrai neste lar e abençoai a todos os que nele moram. Afaste desta casa o espírito do mal e enviai os Vossos Santos anjos para guardá-la e defende-la dos inimigos.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para a simpatia dar certo:" }),
                t.jsxs("ol", {
                  children: [
                    t.jsx("li", { children: "Passo – É preciso ter Fé ." }),
                    t.jsx("li", {
                      children:
                        "Passo – Só faça quando tiver certeza que merece ser atendido.",
                    }),
                    t.jsx("li", {
                      children:
                        "Passo – Agradeça sempre. Mesmo que não tenha alcançado a graça na primeira vez.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para arrumar namorado (I)" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Para fazer esta simpatia, você deverá contar com a ajuda de uma boa amiga, que já tenha namorado: escreva seu nome, com uma caneta vermelha, na barra do vestido dela, num dia em que ela for namorar. Na volta, ela deverá emprestar o vestido para você e, na noite seguinte, você sairá com ele. Observe atentamente os olhares e as reações dos homens e faça a sua escolha.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para conseguir namorado (II)" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Coloque uma imagem de Santo Antonio em seu quarto, diante de um espelho, no primeiro dia de Lua Cheia. Durante três dias seguidos, deposite, logo pela manhã, no pé do santo, uma rosa vermelha. Reze uma Ave Maria e um Pai Nosso, pedindo a ele que lhe consiga um namorado. A partir do quarto dia, se nada tiver acontecido, vire o santo para o lado do espelho e só o desvire quando conseguir arrumar um namorado.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para conquistar pessoa especial" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Na primeira sexta-feira do mês, pegue vinte e uns pequenos pedaços de papel branco, escreva seu nome com tinta vermelha no centro de um coração, passe cole e dobre, de forma que o coração fique na parte colada do papel. Atire-os no portão ou na porta das casas onde moram homens com quem você gostaria de namorar.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para conseguir o ser amado" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Pegue um punhado de cinzas de uma fogueira acesa na noite da véspera do dia de Santo Antonio. Guarde num envelope bem fechado, numa gaveta ou caixa de madeira. Quando quiser arrumar um (a) namorado (a), jogue um punhado de cinzas num copo de água, mexa bem, depois espalhe na rua, diante de sua casa. Nunca use toda a cinza de uma só vez.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para iniciar um namoro" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Pegue uma fita de Nosso Senhor do Bonfim e peça para a pessoa de quem você gosta amarrá-la no seu pulso esquerdo, dando sete nós. Após isso. Não tire a fita. Deixe que ela caia sozinha. Em breve você esta pessoa estarão namorando.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Noivo decidir casamento" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Para que seu noivo pare de enrolar você, faça esta simpatia no dia 24/06. Pegue uma foto dele e escreva atrás dela o nome completo do seu amor. Encha um copo com água e açúcar e mergulhe a foto nessa mistura. Guarde o copo num lugar que só você saiba, durante 7 dias. Passando este prazo, jogue a água nos pés de uma árvore dizendo: “Meu querido e poderoso São João, que tanto poder tem em unir os casais, ajudai-me neste pedido. Eu quero que o meu noivo decida se casar logo comigo. “A foto, embrulhe num papel branco e guarde num cantinho só seu, como por exemplo: sua agenda, bolsa, gaveta de peças íntimas, etc.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para aumentar a paixão" }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Compre uma lata de fermento em pó, pegue um pedaço de papel branco e escreva o nome completo da pessoa amada. Dobre bem o papel e coloque-o dentro da latinha, fechando-a seguida. Abra um buraco no quintal e entes de enterrar a latinha diga: “Assim como o fermento cresce, eu quero que o amor de (nome da pessoa) cresça por mim”. “Aí então enterre a latinha”.",
                    }),
                    t.jsx("p", {}),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para conseguir um namorado" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Quando sair de casa, pegue uma fitinha vermelha e dê três nós nela, colocando-a dentro do seu sutiã, do lado esquerdo. Verá como isto atrairá uma pessoa que seja do seu tipo e pense como você.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Para o marido largar a amante" }),
                t.jsx("span", {
                  children: t.jsx("p", {
                    children:
                      "Pegar 2 pedaços de carne e fazer um buraco pequeno em cada pedaço, escrever o nome da amante num pedaço e o nome do marido em outro pedaço de papel branco. Coloque os 2 papéis cada um em um pedaço de carne. Aquele que ficar com o nome dela jogar para um gato comer, e o que ficar com o nome dele, para um cachorro comer.",
                  }),
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", {}),
                t.jsxs("span", { children: [t.jsx("p", {}), t.jsx("p", {})] }),
              ],
            }),
          ],
        }),
      ],
    }),
  xg = () =>
    t.jsxs(t.Fragment, {
      children: [
        t.jsx("h1", { children: "A astrologia dos ciganos" }),
        t.jsxs("section", {
          children: [
            t.jsx("img", {
              src: "../pages/ciganos/astrologia/01.jpg",
              alt: "",
            }),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "ÁRIES (21/03 a 20/04)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Áries" }),
                    t.jsx("li", { children: "Metal regente: Ferro" }),
                    t.jsx("li", { children: "perfume: Lavanda" }),
                    t.jsx("li", { children: "Dia da Sorte: Terça-feira" }),
                    t.jsx("li", { children: "pedra: Jaspe Verde" }),
                    t.jsx("li", { children: "cor: Vermelho" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      " O Punhal é a imagem da luta e vontade de vencer. Representa honra, vitória e êxitos. Os ciganos também usavam o punhal para abrir matas, sendo então, símbolo de superação e pioneirismo. A pessoa sob esta influência é uma pessoa irrequieta, firme e dona de si mesma. Ousada, tem uma personalidade forte e odeia ser subestimada. Quando isso ocorre, torna-se agressiva. Ama demais, é fiel e adora sexo. Não é econômica, mas sabe controlar o dinheiro. Se sai bem em esportes, artes marciais e cargos de chefia e liderança.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      " Wladimir do Oriente",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é o Punhal e este representa sucesso, vitória e está sempre presente na vida de um cigano.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quem nasce sob este signo tem uma personalidade muito forte e não gosta de receber ordens.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem um coração sonhador e quando ama se entrega integralmente a esse amor.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é o Fogo,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Franqueza,",
                        t.jsx("br", {}),
                        "Sua Pedra é a Granada,",
                        t.jsx("br", {}),
                        "Sua Carta é a 11,",
                        t.jsx("br", {}),
                        "Sua Cor é o Vermelho,",
                        t.jsx("br", {}),
                        "Seu Incenso é o Almíscar e o Sândalo,",
                        t.jsx("br", {}),
                        "Seu Perfume é o de Violeta,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Vermelha,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 3,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é o Domingo e a Terça,",
                        t.jsx("br", {}),
                        "A Cigana dos Caminhos é a Dolores.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        " O punhal é uma arma intrinsecamente ligada à sobrevivência do cigano. Características: Você jamais foge da luta. Enfrenta os desafios com coragem e faz questão De vencê-los. Aliás, a única coisa que o assusta é a possibilidade de fracassar. Você simplesmente não tolera a idéia de perder!",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        "Tal como a arma que o simboliza, você é um desbravador. Tem espírito pioneiro e se comporta com bravura e ousadia.",
                        " ",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "O lado negativo da sua personalidade fica por conta de um comportamento agressivo e pela dificuldade em controlar as próprias emoções, além da tendência a agir de maneira egoísta. É importante que você tome cuidado para não machucar as pessoas, seja com palavras ou atitudes. Lembre-se: o punhal pode ser mortal.",
                    }),
                    t.jsx("p", {
                      children:
                        "Nos relacionamentos afetivos, você costuma colocar seus desejos e objetivos acima da vontade do parceiro. Mas é um amante intenso, ardoroso, entusiasmado, que se realiza ao dar e receber prazer. Raramente se mantém fiel, pois aprecia as aventuras e não se conforma em abrir mão de certas emoções,simplesmente porque precisa cumprir com algum dever ou compromisso. Planeta regente: Marte.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "TOURO (21/04 a 20/05)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Touro" }),
                    t.jsx("li", { children: "Metal regente: Cobre" }),
                    t.jsx("li", { children: "perfume: Rosa" }),
                    t.jsx("li", { children: "Dia da Sorte: Sexta-feira" }),
                    t.jsx("li", {
                      children: "pedras: Safira Azul ou Esmeralda",
                    }),
                    t.jsx("li", { children: "cores: Verde claro e Rosa." }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      " Relaciona-se ao ouro e a nobreza. É símbolo de amor puro, força, poder e elegância, o que torna a pessoa desse elemento valorizada e importante. A pessoa sob esta influência luta pelo que quer, pois a estabilidade financeira lhe é fundamental. Nasceu para administrar e querer ser dona de seu próprio trabalho. É fiel no amor, sensível e não suporta que brinquem com seus sentimentos. Gosta das artes e tem grande criatividade para trabalhar nesse setor.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Ramiro",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Coroa e este representa a riqueza e a pureza do amor.",
                    }),
                    t.jsx("p", {
                      children:
                        "As pessoas nascidas sob este signo costumam crescer na vida e obter bastante sucesso nos negócios que comandam.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "São sensíveis e se apaixonam facilmente.",
                        t.jsx("br", {}),
                        "Seu Elemento é a Terra,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Lealdade,",
                        t.jsx("br", {}),
                        "Sua Pedra é o Quartzo Rosa,",
                        t.jsx("br", {}),
                        "Sua Carta é o 6,",
                        t.jsx("br", {}),
                        "Sua Cor é o Verde, o Rosa e o Azul,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Rosa e o Alecrim,",
                        t.jsx("br", {}),
                        "Seu Perfume é o de Jasmim e o Almíscar,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Azul,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 3,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Quarta e a Sexta,",
                        t.jsx("br", {}),
                        "O Cigano dos Caminhos é o Wlademir.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        " A Coroa simboliza a riqueza material. Ao longo do tempo, a arte de forjar o ouro e lapidar a pedra foi cada vez mais aprimorada pelos ourives ciganos. As jóias usadas por esse povo – pelo menos por seus representantes mais prósperos – são famosas pela beleza e exuberância.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Além disso, como a Coroa representa a nobreza, este signo está associado à conquista do poder. Características: O conforto material é sua prioridade número 1. Quando enfrenta dificuldades financeiras, fica tão angustiado que esse problema acaba afetando outras áreas da sua vida.",
                    }),
                    t.jsx("p", {
                      children:
                        "Além disso, você se esforça bastante para realizar seus objetivos e raramente se deixa abater pelas dificuldades. De tão obstinado, às vezes chega a parecer teimoso. Aliás, você não suporta ter de recuar ou desistir.",
                    }),
                    t.jsx("p", {
                      children:
                        "Às vezes insiste num erro apenas para não passar pelo constrangimento de admitir que falhou.",
                    }),
                    t.jsx("p", {
                      children:
                        "Nos relacionamentos amorosos, preza demais a fidelidade, a confiança mútua, a certeza de um afeto sincero e correspondido. Quando encontra alguém capaz de compreendê-lo e torná-lo feliz, você se entrega e nem pensa em desviar dos bons caminhos desse romance.",
                    }),
                    t.jsx("p", {
                      children:
                        "Outras qualidades que merecem destaque no seu jeito de ser: a lealdade, a capacidade de trabalho, a sabedoria no exercício da liderança e a sensatez, que lhe permite tomar decisões corretas em todas as áreas da vida. Para evoluir ainda mais como indivíduo, é importante que você supere a intransigência e se torne mais compreensivo e flexível. Planeta regente: Vênus.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Gêmeos (21/05 a 20/06)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Gêmeos" }),
                    t.jsx("li", { children: "Metal regente: Níquel" }),
                    t.jsx("li", { children: "perfume: Flora" }),
                    t.jsx("li", { children: "Dia da Sorte: Quarta-feira" }),
                    t.jsx("li", { children: "pedras: Topázio ou Magnetita" }),
                    t.jsx("li", { children: "cores: Amarelo e Ocre" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      " Representa as luzes e a verdade, portanto a sabedoria e a clareza de idéias. As candeias eram usadas para iluminar os acampamentos. Também simbolizam a esperteza e a vivacidade. A pessoa sob esta influência é comunicativa e tem uma inteligência brilhante, fazendo muitos amigos. Adora estudar e pesquisar, principalmente, o que se relaciona a ela mesma. É romântica e nunca desiste de uma conquista, mesmo que não se envolva por completo. Quando quer algo, consegue.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      " Clarita.",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Candeias e este representa as lamparinas que antigamente iluminavam os acampamentos ciganos nas noites sem luar. Que representam a sabedoria, a claridade das idéias e são símbolo de vivacidade.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quem nasce sob este signo é inteligente, esforçado e sempre alcança seus objetivos.",
                    }),
                    t.jsx("p", {
                      children:
                        "O romantismo faz parte da vida de quem é do signo de candeias.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é o Ar,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Inteligência,",
                        t.jsx("br", {}),
                        "Sua Pedra é a Safira e Jade,",
                        t.jsx("br", {}),
                        "Sua Carta é a 7,",
                        t.jsx("br", {}),
                        "Sua Cor é o Azul e o Amarelo,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Rosa e o de Alecrim,",
                        t.jsx("br", {}),
                        "Seu Perfume é o de Lavanda e de Sândalo,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Branca,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 5,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Quarta e a Quinta,",
                        t.jsx("br", {}),
                        "A Cigana dos Caminhos é a Soraya.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        " As Candeias simbolizam a luminosidade. Afinal, esses objetos serviam para iluminar os acampamentos. Numa interpretação esotérica, as Candeias são a sabedoria que clareia os caminhos e a capacidade de usar a luz da razão para dissipar as trevas da ignorância. Também indicam a vitória da razão: é a luz artificial (criada pelo homem) se sobrepondo à escuridão da natureza.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Características: Um dos atributos que mais se destacam na sua personalidade é o dom de enxergar com clareza até os fatos mais obscuros e mal explicados. Você tem uma inteligência brilhante e, graças a essa característica, raramente fica sem compreender alguma coisa.",
                    }),
                    t.jsx("p", {
                      children:
                        "É extremamente racional e tende a colocar as emoções em segundo plano, dando absoluta prioridade às questões práticas e objetivas. O sentimentalismo não é seu forte: mesmo na vida a dois, você dá mais valor à solidariedade, à existência de afinidades (sobretudo no plano intelectual) e ao companheirismo do que à paixão ou às expectativas românticas.",
                    }),
                    t.jsx("p", {
                      children:
                        "Preza demais a liberdade e não agüenta permanecer ao lado de um parceiro que tente limitar seus movimentos. Aliás, um dos seus maiores desafios no amor é aprender a permanecer fiel. De modo geral, você cativa as pessoas com seu jeito alegre e descontraído. Comunica-se com facilidade e tem talento para a escrita. Versátil, adapta-se bem ás novas situações, o que favorece bastante sua atuação profissional Planeta regente: Mercúrio.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "CÂNCER (21/06 a 21/07)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Câncer" }),
                    t.jsx("li", { children: "Metal regente: Prata" }),
                    t.jsx("li", { children: "perfume: Rosa" }),
                    t.jsx("li", { children: "Dia da Sorte: Segunda-feira" }),
                    t.jsx("li", { children: "pedra: Esmerald" }),
                    t.jsx("li", { children: "cores: Branco e Prateado" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      "Por representar o ir e vir e estar relacionada à Lua, pela sua forma arredondada, as pessoas regidas por esse signo tem urna forte ligação com as mulheres e gestantes em geral. A emoção é a palavra que traduz seu jeito. A Roda move sua vida na alegria e na tristeza. É dócil e tranqüila, mas, quando se irrita, sai de baixo. É um pouco insegura e tem uma certa tendência à nostalgia. Ama com intensidade e sente muito ciúme.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Esmeralda.",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Roda que representa o movimento da vida. Está relacionada à Lua e tem uma forte ligação com as mulheres.",
                    }),
                    t.jsx("p", {
                      children:
                        "As pessoas nascidas sob o signo de roda são um pouco inseguras, bastante ciumentas e facilmente entram em depressão.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é a Água, ",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Simpatia e a Sensualidade, ",
                        t.jsx("br", {}),
                        "Sua Pedra é a Esmeralda e a Malaquita, ",
                        t.jsx("br", {}),
                        "Sua Carta é o 10, ",
                        t.jsx("br", {}),
                        "Sua Cor é o Branco, o Azul e o Violeta, ",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Maçã e o de Violeta, ",
                        t.jsx("br", {}),
                        "Seu Perfume é o Jasmim e o Sândalo, ",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Azul, ",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 2, ",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Segunda e a Terça, ",
                        t.jsx("br", {}),
                        "As Ciganas dos Caminhos são Carmencita e Milena.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        "A Roda simboliza o movimento da vida. Não podemos nos esquecer de que a vida do cigano começa e termina sobre as rodas dos carroções. É sobre essas rodas que se constituem o lar e a família, que surgem as dores e os amores. Além disso, o movimento cíclico da roda está associado ao giro do destino – o eterno nascer, crescer, morrer, renascer…",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Características: O nativo de Roda é emotivo e sonhador. Preza demais a segurança, em especial no plano afetivo. Mesmo que não tenha uma vida estável ou organizada, você sempre encontra um meio de se firmar em alguma coisa – que geralmente tem a ver com os relacionamentos construtivos que você desenvolve ao longo da vida. Então, nos momentos difíceis, você sempre tem a quem recorrer.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Nostálgico e saudosista, o nativo de Roda se apega demais ao passado e dá grande valor à família e às tradições. Isso é positivo por um lado, mas, por outro, pode atrapalhá-lo no que tange aos projetos para o futuro. É importante que você aprenda a dosar as coisas de tal maneira que o passado sirva de experiência, mas não o impeça de caminhar, avançar, evoluir.",
                        " ",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "A intuição aguçada é uma arma poderosa para que você tome sempre as decisões corretas. Ouça-a e respeite-a – assim, evitará o risco de se iludir. Para sua realização pessoal, será muito importante construir um relacionamento amoroso estável e ter Planeta regente: Lua",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "LEÃO (22/07 a 22/08)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Leão" }),
                    t.jsx("li", { children: "Metal regente: Ouro" }),
                    t.jsx("li", { children: "Perfume: Sândalo" }),
                    t.jsx("li", { children: "Dia da Sorte: Domingo" }),
                    t.jsx("li", { children: "Pedra: Rubi" }),
                    t.jsx("li", {
                      children: "Cores: Amarelo, Laranja e Dourado",
                    }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      " A estrela cigana possui seis pontas, formando dois triângulos iguais, que indicam a igualdade entre o que está acima e o que está a baixo. Representa sucesso e evolução interior. A pessoa que nasce sob esta influência é otimista e alto astral, nasceu para brilhar. Curte a vida intensamente e tem um talento especial para atrair as pessoas. Vive rodeada de amigos, mas tem mania de querer que tudo seja como você deseja. Conseguirá ótimas oportunidades como atriz, dançarina, modelo, cantora, etc.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      " Yordana dos Ventos",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Estrela que é de grande espiritualidade e também de sucesso na vida.",
                    }),
                    t.jsx("p", {
                      children:
                        "As pessoas nascidas sob este signo são muito otimistas, fazem amizades com facilidade e gostam muito de estar rodeadas de pessoas amigas.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é o Fogo,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a generosidade,",
                        t.jsx("br", {}),
                        "Sua Pedra é o Topázio e o Rubi,",
                        t.jsx("br", {}),
                        "Sua Carta é o 8,",
                        t.jsx("br", {}),
                        "Sua Cor é o Amarelo e o Laranja,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Almíscar e de Sândalo,",
                        t.jsx("br", {}),
                        "Seu Perfume é o de Sândalo,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Vermelha,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 4,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é o Domingo e a Quinta,",
                        t.jsx("br", {}),
                        "A Cigana dos Caminhos é a Carmelita.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        " A Estrela é formada pela interseção de dois triângulos idênticos: um deles, com o vértice voltado para cima, simboliza a energia masculina, ascendente e solar.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "O outro, apontando para baixo, simboliza a energia feminina, descendente e lunar. A Estrela mostra a união perfeita dos opostos, que interagem e promovem a harmonia do universo, e indica a junção do humano com o divino.",
                    }),
                    t.jsx("p", {
                      children:
                        "Características: O nativo de Estrela tem consciência de sua porção divina. Ele sabe que, dentro dele, habita um poder que lhe permite transcender a matéria, ultrapassar os próprios limites e se aprimorar em todos os aspectos.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "O problema é que, em certas ocasiões, a consciência das próprias qualidades leva o nativo de Estrela a se tornar um tanto vaidoso – e isso faz com que ele revele um lado negativo da sua personalidade, traduzido em orgulho e prepotência. Mas os atributos positivos deste signo superam de longe suas eventuais falhas: quem nasce sob os auspícios da Estrela é inteligente, criativo, dotado de senso de liderança e extremamente requintado.",
                        " ",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Com charme e autoconfiança, atrai simpatia e respeito por onde quer que passe. Também tem um lado generoso e um desejo autêntico de fazer o bem",
                    }),
                    t.jsx("p", {
                      children:
                        "Nos relacionamentos afetivos, gosta de ser bem tratado e precisa sentir que é realmente amado pelo parceiro. E recompensa a dedicação do outro oferecendo afeto verdadeiro e apoio incondicional. Dotado de forte sensualidade, atribui grande importância à afinidade física na vida a dois. Planeta regente: Sol",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "VIRGEM (23/08 a 22/09)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Virgem" }),
                    t.jsx("li", { children: "Metal regente: Níquel" }),
                    t.jsx("li", { children: "perfume: Gardênia" }),
                    t.jsx("li", { children: "Dia da Sorte: Quarta-feira" }),
                    t.jsx("li", { children: "pedras: Ágata e Turmalina" }),
                    t.jsx("li", { children: "cores: Azul marinho e Verde" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      "Exatidão e perfeição. Nos séculos passados, era usado como relógio, e os ciganos o associaram à pontualidade, à disciplina e à firmeza. A pessoa sob esta influência é bastante organizada, ambiciosa, que supera sempre suas próprias expectativas. Acha que a vida é para ser aproveitada nos mínimos detalhes, porém, com consciência e sem exageros. Muito inteligente, analisa e critica tudo o que está ao seu redor. Se sai bem trabalhando com administração.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Letícia del Ouro.",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é o Sino que antigamente funcionava como relógio, anunciando determinados momentos importantes de atenção. Por isso, significa pontualidade e ordem.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os nativos deste signo são bastante inteligentes, mas um pouco exigentes e até ambiciosos.",
                    }),
                    t.jsx("p", {
                      children:
                        "No amor, dificilmente se entregam a fortes paixões.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é a Terra,",
                        t.jsx("br", {}),
                        "Sua Qualidade é o Otimismo e a Coragem,",
                        t.jsx("br", {}),
                        "Sua Pedra é a Ametista e o Citrino,",
                        t.jsx("br", {}),
                        "Sua Carta é o 8,",
                        t.jsx("br", {}),
                        "Sua Cor é o Azul e o Amarelo,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Rosas e o Benjoim,",
                        t.jsx("br", {}),
                        "Seu Perfume é o Almíscar e o Violeta,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Branca e Amarela,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 5,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Quarta e o Sábado,",
                        t.jsx("br", {}),
                        "Os Ciganos dos Caminhos são o Pablo e a Luana",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        "O Sino simboliza a exatidão. Afinal, era por suas badaladas na torre da igreja que os habitantes das antigas aldeias programavam suas atividades e controlavam o passar das horas. Até o século 18, o sino era igual a um relógio comunitário. Confeccionado com materiais fortes, como o estanho, o bronze, o ferro ou a prata, esse objeto representa a firmeza e a durabilidade.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Características: Método, disciplina, honestidade e precisão. Estas quatro palavras são onipresentes no dia-a-dia do nativo de Sino. Você gosta de tudo muito organizado e não tolera situações obscuras ou mal resolvidas. Quando algo está mal explicado, você abre o jogo e trata de ir logo esclarecendo tudo. Dedicado ao trabalho, você geralmente coloca as questões profissionais em primeiro plano. Aliás, se esse setor não estiver indo bem, você fica angustiado e se abala emocionalmente. Mas logo supera o problema, pois sua persistência lhe permite continuar lutando até vencer.",
                    }),
                    t.jsx("p", {
                      children:
                        "O nativo de Sino tem uma personalidade forte e não desiste facilmente dos seus objetivos, ainda que isso signifique entrar em conflito com outras pessoas ou passar por situações de angústia e sofrimento. Aliás, você suporta as dores com resignação, pois sabe que a vida é feita de altos e baixos e não se revolta com isso.",
                    }),
                    t.jsx("p", {
                      children:
                        "Nos relacionamentos afetivos, você dá muito valor à sinceridade, à fidelidade e ao afeto verdadeiro. Quando o romance entra em crise, faz o possível e o impossível para mudar a situação. Sua evolução espiritual ocorre a partir do trabalho e de uma vida íntegra e honesta. Planeta regente: Mercúrio",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "LIBRA (23/09 a 22/10)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Libra" }),
                    t.jsx("li", { children: "Metal regente: Cobre" }),
                    t.jsx("li", { children: "perfume: Alfazema" }),
                    t.jsx("li", { children: "pedra: Diamante rosa" }),
                    t.jsx("li", { children: "Dia da Sorte: Sexta-feira" }),
                    t.jsx("li", { children: "cores: Rosa e Azul" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      "A moeda é associada ao equilíbrio e à justiça e relacionada à riqueza material e espiritual, que é representada pela cara e coroa. Para os ciganos, cara é o ouro físico, e coroa, o espiritual. A pessoa sob esta influência é sensível, charmosa, vive de amores e sentimentos. Tem que estar apaixonada sempre. As atenções se voltam para você facilmente. Tem talentos artísticos e decorativos. Adora ajudar as pessoas e vive para isso. Razão pela qual está sempre cercada de amigos e companheiros.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Rugero Malvasquez.",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Moeda que têm dois lados, cara e coroa, o que significa matéria e espírito.",
                    }),
                    t.jsx("p", {
                      children:
                        "As pessoas nascidas sob este signo são sensíveis, elegantes, apaixonam-se facilmente e vivem todos os momentos de amor intensamente.",
                    }),
                    t.jsx("p", {
                      children:
                        "São solidários e estão sempre de bem com a vida, talvez por saberem amar de verdade.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é o Ar,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Harmonia,",
                        t.jsx("br", {}),
                        "Sua Pedra é o Quartzo Rosa,",
                        t.jsx("br", {}),
                        "Sua Carta é o 9,",
                        t.jsx("br", {}),
                        "Sua Cor é o Rosa e o Azul,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Maçã e o de Rosa,",
                        t.jsx("br", {}),
                        "Seu Perfume é o Almíscar e o Violeta,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Branca,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 6,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Sexta e o Sábado,",
                        t.jsx("br", {}),
                        "Seus Ciganos dos Caminhos são Iago e Ramón.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        "Toda moeda tem cara e coroa. Assim, A Moeda simboliza os dois lados de uma situação: é a riqueza material e espiritual, o equilíbrio, a união dos opostos, o sim e o não. Em certos momentos, o lado “cara” se sobrepõe – são aquelas ocasiões em que agimos de maneira mais realista e nos voltamos para as questões práticas. Em outros, vem à tona a “coroa”, que simboliza a emoção e a espiritualidade.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Características: Como o símbolo do seu signo já revela, você é uma pessoa que procura sempre avaliar os dois lados de uma mesma situação – por isso, você tem o dom da compreensão profunda. Age com justiça, equilíbrio, lealdade. É versátil e diplomático: nas situações de conflito, prefere conciliar as divergências a tomar partido.",
                    }),
                    t.jsx("p", {
                      children:
                        "Aprecia o conforto material – afinal, a moeda é também um símbolo de riqueza -, mas não sucumbe ao desejo de acumular bens ou enriquecer. Sua prioridade é viver com conforto e ter acesso à beleza e às coisas prazerosas.",
                    }),
                    t.jsx("p", {
                      children:
                        "Em geral, você procura simplificar a vida. Mantém o otimismo e a positividade mesmo nos momentos difíceis e não desanima com nada. Dá extremo valor aos relacionamentos e aos laços de afeto, amizade e ternura.",
                    }),
                    t.jsx("p", {
                      children:
                        "A felicidade amorosa é sua grande prioridade na vida. Você realmente nasceu para ser feliz ao lado de alguém em quem confie e que corresponda às suas expectativas românticas. Na busca do parceiro ideal, poderá passar por diversos relacionamentos e até cometer algumas infidelidades. Mas, depois de eleger sua alma gêmea, fará o possível e o impossível para viver bem com ela. Planeta regente: Vênus",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "ESCORPIÃO (23/10 a 21/11)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Escorpião" }),
                    t.jsx("li", { children: "Metal regente: Ferro" }),
                    t.jsx("li", { children: "perfume: Almíscar" }),
                    t.jsx("li", { children: "pedras: Opala e Topázio" }),
                    t.jsx("li", { children: "Dia de Sorte: Terça-feir" }),
                    t.jsx("li", { children: "cores: Púrpura e Marrom" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      " A adaga é entregue ao cigano quando ele sai da adolescência e ingressa na vida adulta. Por isso, é associada também à morte, ou seja, às mudanças necessárias que a vida nos oferece para crescermos. A pessoa sob esta influência tem um temperamento forte e enigmático, se torna irresistível e respeitada. Possui uma mente analítica, percebendo tudo o que está ao seu redor. Sempre procura se aprofundar no que está à sua volta, seja no amor ou no trabalho. Ama de maneira sensual e arrebatadora.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Urdela",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Adaga que simboliza as mudanças, o novo que chega trazendo mudanças necessárias para o nosso crescimento.",
                    }),
                    t.jsx("p", {
                      children:
                        "As pessoas que nascem sob este signo geralmente são fortes, otimistas, perseverantes e bastante criativas.",
                    }),
                    t.jsx("p", {
                      children: "Estão sempre amando, nunca estão sozinhas.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é a Água,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Determinação,",
                        t.jsx("br", {}),
                        "Sua Pedra é a Granada,",
                        t.jsx("br", {}),
                        "Sua Carta é o 6,",
                        t.jsx("br", {}),
                        "Sua Cor é o vermelho e o cinza,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Almíscar e o de Eucalipto,",
                        t.jsx("br", {}),
                        "Seu Perfume é o Patchuli,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Azul,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 13,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Terça e a Quinta,",
                        t.jsx("br", {}),
                        "Sua Cigana dos Caminhos é a Carmelita.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        " A Adaga simboliza a transformação. Quando o jovem cigano sai da infância e ingressa na vida adulta, ele passa por uma iniciação e recebe essa arma. Portanto, ela tem a ver com um rito de passagem associado ao amadurecimento sexual. Mas a adaga também pode matar – por isso, ela indica o poder sobre a vida e a morte. Este é o signo das transformações profundas.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Características: A sexualidade é um dos atributos que mais sobressaem no nativo de Adaga. Atraente, sedutor, ele exerce verdadeiro fascínio sobre o sexo oposto. É intuitivo e consegue mergulhar fundo em todas as verdades.",
                    }),
                    t.jsx("p", {
                      children:
                        "Tem um dom especial: em vez de se ater às aparências, ele enxerga os corações das pessoas. E, tal como a adaga que simboliza o seu signo, você é capaz de ferir profundamente, seja com atos ou com palavras. Por isso, é importante que você controle a sua imensa força, para não causar danos ou mágoas irremediáveis. A vida do nativo de Adaga costuma passar por muitos altos e baixos. São as transformações necessárias ao seu desenvolvimento e à sua evolução.",
                    }),
                    t.jsx("p", {
                      children:
                        "Nos relacionamentos amorosos, você faz uma única exigência: fidelidade. Nada lhe parece mais imperdoável do que uma traição, mesmo porque você reluta demais em revelar seus sentimentos e se magoa quando descobre que a pessoa que escolheu para amar não foi digna do seu afeto. Por atribuir uma importância muito grande ao prazer físico, você também faz questão de ter um parceiro que lhe permita realizar todas as suas fantasias. Planeta regente: Marte",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "SAGITÁRIO (22/11 a 21/12)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Sagitário" }),
                    t.jsx("li", { children: "Metal regente: Estanho" }),
                    t.jsx("li", { children: "perfume: Jasmim" }),
                    t.jsx("li", { children: "pedras: Safira e Turquesa" }),
                    t.jsx("li", { children: "Dia de Sorte: Quinta-feira" }),
                    t.jsx("li", { children: "cores: Púrpura e Violeta" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      "O machado é o destruidor de bloqueios e barreiras. Ele simboliza a liberdade, pois rompe com todas os obstáculos que a natureza impõem. A pessoa sob esta influência tem a liberdade como a palavra que mais gosta de falar e curtir. Aventureira, jamais permanece parada em um só lugar. É como o vento, que tudo toca, em tudo está, mas em nada fica. Otimista, até as dores para você são sinais de alegria. Apaixona-se e se desapaixona facilmente. Se dá bem com trabalhos sem rotinas em que possa aprender sempre.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Zoraya de Louvraria.",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é o Machado que simboliza a liberdade por ter o poder de romper todas as dificuldades.",
                    }),
                    t.jsx("p", {
                      children:
                        "As pessoas nascidas sob este signo são maravilhosamente divertidas, alegres, felizes e otimistas.",
                    }),
                    t.jsx("p", {
                      children: "Acreditam sempre que o melhor virá.",
                    }),
                    t.jsx("p", {
                      children:
                        "Assim, nos caminhos da vida estão sempre de novo amor, pois não conseguem se prender a ilusões amorosas.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é o Fogo,",
                        t.jsx("br", {}),
                        "Sua Qualidade é o Otimismo e a Honestidade,",
                        t.jsx("br", {}),
                        "Sua Pedra é o Topázio,",
                        t.jsx("br", {}),
                        "Sua Carta é o 10,",
                        t.jsx("br", {}),
                        "Sua Cor é o Laranja e o Amarelo,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Cravo e o de Canela,",
                        t.jsx("br", {}),
                        "Seu Perfume é o Madeira e o Verbana,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Vermelha,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 7,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Terça e a Quinta,",
                        t.jsx("br", {}),
                        "O Cigano dos Caminhos é o Ramur.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        "O Machado simboliza a aventura do desbravamento e o ingresso num mundo novo. Seu uso era imprescindível para o cotidiano dos ciganos: graças a essa ferramenta, a árvore podia ser transformada em lenha para cozinhar e em madeira para sustentar as tendas. Portanto, o Machado está associado à destruição dos obstáculos e à ação do homem sobre a natureza.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Características: O nativo de Machado tem a missão de abrir novos caminhos. Constantemente, a vida lhe impõe situações que o obrigam a desbravar fronteiras e ultrapassar obstáculos. Isso se aplica a todos os setores de sua existência. O Machado está sempre enfrentando situações novas, e uma boa parte desses desafios ele busca por vontade própria. Uma vez tendo conseguido seu intento, parte logo para o próximo embate. No trabalho, por exemplo, ele se caracteriza pelo pioneirismo e pelo ímpeto de fazer coisas originais.",
                    }),
                    t.jsx("p", {
                      children:
                        "No amor, não se conforma em ficar acomodado a uma situação insatisfatória. Ele ousa, busca surpresas, aprimora o relacionamento de tal forma que uma nova emoção se apresente a cada dia. Se o parceiro não compartilhar do seu entusiasmo, o nativo de Machado terá dificuldade em se manter fiel. Ele ama a aventura em todas as suas manifestações: é apaixonado por esportes e viagens, gosta de manter contato com novas culturas e, acima de tudo, está sempre em busca de conhecimento – aprender é o seu lema. Idealista e dono de um senso de justiça bastante apurado, você luta pelas coisas que considera corretas e se rebela contra o conformismo. Planeta regente: Júpiter.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "CAPRICÓRNIO (22/12 a 20/01)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Capricórnio" }),
                    t.jsx("li", { children: "Metal regente: Chumbo" }),
                    t.jsx("li", { children: "perfume: Cítrico" }),
                    t.jsx("li", { children: "pedras: Ônix e Quartzo" }),
                    t.jsx("li", { children: "Dia de Sorte: Sábado" }),
                    t.jsx("li", {
                      children: "cores: Preto, Cinza e Verde-escuro",
                    }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      "A ferradura representa o esforço e o trabalho. Os ciganos têm a ferradura como um poderoso talismã, que atrai a boa sorte, a fortuna e afasta o azar. A pessoa sob esta influência tem seu bom senso, às vezes se torna séria demais. Tem, então, que se soltar um pouco mais. Raramente, confia em alguém. Busca amores estáveis e concretos. Pretende casar e ter filhos. É completamente familiar, ama os poucos amigos e se dedica à profissão.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Rochele da Bréscia.",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Ferradura que representa sorte, caminhos, prosperidade e atrai boa sorte para quem a tem em seu lar ou em sua barraca.",
                    }),
                    t.jsx("p", {
                      children:
                        "Os nativos deste signo são muito desconfiados e estão sempre muito atentos a novas amizades.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "São também muito materialistas.",
                        t.jsx("br", {}),
                        "Seu Elemento é a Terra,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Responsabilidade,",
                        t.jsx("br", {}),
                        "Sua Pedra é a Safira,",
                        t.jsx("br", {}),
                        "Sua Carta é o 11,",
                        t.jsx("br", {}),
                        "Sua Cor é o Azul e o Lilás,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Lótus e de Alecrim,",
                        t.jsx("br", {}),
                        "Seu Perfume é o Vetiver e o Violeta,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Branca,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 8,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Sexta e o Sábado,",
                        t.jsx("br", {}),
                        "O Cigano dos Caminhos é o Ramur.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        "A Ferradura simboliza a boa sorte, mas também representa o esforço e o trabalho. Usada em animais como o boi, o cavalo e a mula, ela está associada à luta pela sobrevivência. Portanto, este signo indica uma vida árdua, mas o fator sorte garante que o esforço será recompensado. Os ciganos acreditam que a Ferradura atraia prosperidade e ajude a afastar as energias negativas.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "Características: Você tem uma forte ligaçãocom a terra. Levando-se em consideração que seu símbolo – a ferradura – é usada em animais que puxam arado e desempenham outras funções agrícolas, pode-se afirmar que a melhor maneira de você se fortalecer é manter um contato estreito e freqüente com a natureza.",
                    }),
                    t.jsx("p", {
                      children:
                        "Trabalhador incansável, você luta por conquistar a estabilidade nos planos profissional e financeiro. Nem sempre você faz o que gosta, e talvez a vida lhe negue a oportunidade de seguir a carreira dos seus sonhos. Mesmo assim, você aprenderá a amar o seu trabalho, pois terá consciência de que é ele que lhe proporciona o seu sustento.",
                    }),
                    t.jsx("p", {
                      children:
                        "Nos relacionamentos afetivos, você gosta de um jogo aberto: o mistério e a aventura até podem fasciná-lo a princípio, mas sua tendência será buscar uma pessoa confiável e de personalidade forte para ficar a seu lado. Embora não faça o gênero romântico, você é capaz de amar intensamente, e será muito feliz se o seu parceiro permanecer fiel e verdadeiro. Ao assumir um compromisso definitivo, o nativo de Ferradura tem a intenção de que ele dure para sempre. Por isso, ele reluta em aceitar o fracasso de uma relação. É muito importante que a pessoa nascida sob este signo não se feche para o amor caso algum dia sofra uma decepção. Seu desafio é criar coragem para lutar e ser feliz! Planeta regente: Saturno.",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "Aquário (21/01 a 19/02)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Aquário" }),
                    t.jsx("li", { children: "Metal regente: Alumínio" }),
                    t.jsx("li", { children: "perfume: Canela" }),
                    t.jsx("li", { children: "pedra: Água marinha" }),
                    t.jsx("li", { children: "Dia de Sorte: Sábado" }),
                    t.jsx("li", { children: "cores: Laranja e Marrom claro" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      "União e receptividade, pois qualquer líquido cabe nela e adquire sua forma. Tanto que, no casamento cigano, os noivos tomam vinho em uma única taça, que representa valor e comunhão. A pessoa sob esta influência sente uma grande preocupação com os assuntos à sua volta. Inteligente, humana, inquieta, tem vários amigos sinceros. Original, está sempre inovando. Vive atrás da felicidade. No amor, aprecia a sinceridade e a fidelidade.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Cigana da Praia Yajuri",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Taça que representa a união, o amor.",
                    }),
                    t.jsx("p", {
                      children:
                        "É usada nas cerimônias dos casamentos ciganos, nas quais os noivos bebem o vinho e prometem amor eterno.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quem nasce sob este signo é muito inteligente e solidário à humanidade, por isso vive cercado de amigos.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é o Ar,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Amabilidade,",
                        t.jsx("br", {}),
                        "Sua Pedra é o Lápis-Lazúli,",
                        t.jsx("br", {}),
                        "Sua Carta é o 3,",
                        t.jsx("br", {}),
                        "Sua Cor é o Azul,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Violeta e o de Rosa,",
                        t.jsx("br", {}),
                        "Seu Perfume é o de Rosa e o Sândalo,",
                        t.jsx("br", {}),
                        "Sua Vela é de Cor Branca,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 3,",
                        t.jsx("br", {}),
                        "Seu Dia da Semana é a Quarta e o Sábado,",
                        t.jsx("br", {}),
                        "A Cigana dos Caminhos é a Madalena",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        " A Taça simboliza a receptividade e a união. Receptividade porque nela pode ser colocado qualquer líquido – desde a água pura até o vinho mais sofisticado. E união porque ela está presente em todas as celebrações importantes do povo cigano: num casamento, por exemplo, os noivos sorvem vinho da mesma taça, e esse gesto significa que um compromisso está sendo selado.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        " ",
                        "Características: Sua receptividade é valiosa. Graças a ela, você consegue absorver novos conhecimentos, incorporar idéias originais ao trabalho e usar a criatividade de forma construtiva. Você também se destaca pela inteligência e pela habilidade em resolver problemas complicados de maneira simples e eficiente.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "No amor, prefere relacionamentos livres, em que a confiança e a amizade prevaleçam. Para o nativo de Taça, a compreensão vale mais do que a paixão ou os sonhos românticos. Você é bastante racional e geralmente coloca as emoções em segundo plano. Preocupado com os rumos da humanidade, cultiva ideais bastante elevados, e se esforça para transformar alguns de seus sonhos em realidade. Além disso, vive num constante dilema: há um lado seu que deseja evoluir, progredir, crescer, conhecer coisas novas. E um lado mais conservador que se apega aos valores e tradições e teme o avanço natural do tempo e dos acontecimentos. O ideal é que você encontre um equilíbrio entre esses dois pólos, respeitando e aprendendo com o passado, mas também se adaptando ao novo e crescendo com isso. Planeta regente:Saturno",
                    }),
                  ],
                }),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h5", { children: "PEIXES (20/02 a 20/03)" }),
                t.jsxs("ul", {
                  children: [
                    t.jsx("li", { children: "Signo Zodiacal: Peixes" }),
                    t.jsx("li", { children: "Metal regente: Platina" }),
                    t.jsx("li", { children: "perfume: Glicínia" }),
                    t.jsx("li", { children: "pedra: Ametista" }),
                    t.jsx("li", { children: "Dia de Sorte: Quinta-feira" }),
                    t.jsx("li", { children: "cores: Violeta e Azul" }),
                  ],
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "SIMBOLOGIA - " }),
                      "Representa o grande Deus. É sinal de religiosidade e fé. É o local em que todos entram em contato com seu Deus interno e desperta a força e o amor. A pessoa sob esta influência é emotiva, sensível, leal, justa, espiritualizada e sonhadora, é o próprio amor encamado. Tem muita força espiritual e dons para a clarividência. Ama cegamente e, às vezes, se desilude. É romântica e carinhosa. Quanto ao trabalho, gosta de tudo o que se relaciona a ajudar ao próximo.",
                    ],
                  }),
                }),
                t.jsx("span", {
                  children: t.jsxs("p", {
                    children: [
                      t.jsx("b", { children: "CIGANO PROTETOR - " }),
                      "Tiziano Vesquilaz e Zandra Vesquilaz.",
                    ],
                  }),
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Seu Símbolo Cigano é a Capela que representa o encontro com Deus nos momentos de desabafo, onde nos sentimos mais próximos dele e da Virgem Maria.",
                    }),
                    t.jsx("p", {
                      children:
                        "As pessoas regidas por este signo são muito protegidas espiritualmente, mas também muito sensíveis.",
                    }),
                    t.jsx("p", {
                      children:
                        "Quando amam, exageram na dose do amor e por isso sofrem por se entregarem demais às ilusões.",
                    }),
                    t.jsxs("p", {
                      children: [
                        "Seu Elemento é a Água,",
                        t.jsx("br", {}),
                        "Sua Qualidade é a Harmonia,",
                        t.jsx("br", {}),
                        "Sua Pedra é a Ametista e a Turquesa,",
                        t.jsx("br", {}),
                        "Sua Carta é o 16,",
                        t.jsx("br", {}),
                        "Sua Cor é o Verde,",
                        t.jsx("br", {}),
                        "Seu Incenso é o de Violeta e o de Alfazema,",
                        t.jsx("br", {}),
                        "Seu Número de Sorte é o 9,",
                        t.jsx("br", {}),
                        "Seu Dia da semana é a Segunda e a Quinta,",
                        t.jsx("br", {}),
                        "Os Ciganos dos Caminhos são Ramires e Sarita.",
                      ],
                    }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsxs("p", {
                      children: [
                        t.jsx("b", { children: "Símbolo - " }),
                        "As capelas simbolizam a religiosidade. Uma característica comum ao povo cigano é a capacidade de absorver a fé e os costumes ritualísticos das regiões por onde passam. Sua tradição espiritualista mescla elementos do cristianismo, de diferentes seitas orientais, de diversas modalidades demagia. Para eles, a trilogia fé / crença / espiritualidade é um elemento de vital importância.",
                      ],
                    }),
                    t.jsxs("p", {
                      children: [
                        " ",
                        "Características: Sua vida se divide em duas partes distintas: uma, é a da luta cotidiana, da qual fazem parte o trabalho, as preocupações financeiras, os desafios de cada momento. Outra é a da sua espiritualidade. Desta, fazem parte seus dilemas de fé, suas dúvidas quanto ao seu papel no mundo. O nativo de Capelas se debate desde muito cedo com as mais elevadas questões filosóficas. Quer descobrir se tem alguma missão, se existem energias superiores regendo o Universo, se a vida continua depois da morte.",
                      ],
                    }),
                    t.jsx("p", {
                      children:
                        "E tanto pode se apegar ardorosamente a uma crença, fazendo dela a resposta para todos os seus questionamentos, quanto migrar de uma doutrina para outra, sem jamais se contentar com nada. E corre o risco, também, de se tornar um agnóstico. Aquele que em nada crê, e que nada espera. Só que, lá no fundinho do coração, haverá sempre uma ponta de dúvida e um profundo desejo de saber! Você também se destaca pela sensibilidade, pela intuição aguçada e pela capacidade de compreender as pessoas. O talento artístico é outro atributo importante dessa personalidade romântica e sonhadora. Planeta regente: Júpiter",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        t.jsx("br", {}),
        t.jsxs("section", {
          children: [
            t.jsx("h4", { children: "SÍMBOLOS CIGANOS" }),
            t.jsx("img", {
              src: "../pages/ciganos/astrologia/02.jpg",
              alt: "",
            }),
            t.jsx("div", {
              children: t.jsxs("span", {
                children: [
                  t.jsx("p", {
                    children:
                      "A Bandeira como símbolo de um grupo, têm seu significado “encantado”!",
                  }),
                  t.jsx("p", {
                    children:
                      "Esta bandeira foi instituída como símbolo internacional de todos os Ciganos do mundo no ano de 1971, pela Internacional Gypsy Committee Organized no ” First World Romani Congress ” – Primeiro Congresso Mundial Cigano – realizado em Londres.",
                  }),
                  t.jsx("p", {
                    children:
                      "A roda vermelha no centro da bandeira simboliza a vida, representa o caminho a percorrer e o já percorrido. A tradição, como continuísmo eterno, se sobrepõe ao azul e ao verde, com seus aros representando a força do fogo, da transformação e do movimento.",
                  }),
                  t.jsx("p", {
                    children:
                      "O azul representa os valores espirituais, a paz, a ligação do consciente com os mundos superiores, significando libertação e liberdade.",
                  }),
                  t.jsx("p", {
                    children:
                      "O verde representa a Mãe Natureza, a terra, o mundo orgânico, a força da luz do crescimento vinculado com as matas, com os caminhos desbravados e abertos pelos Ciganos. Representa o sentimento de gratidão e respeito pela terra, de preservação da natureza pelo que ela nos oferece, proporcionando a sobrevivência do homem e a obrigação de ser respeitada pelo homem, que dela retira seus suprimentos, devendo mantê-la e defendê-la.",
                  }),
                ],
              }),
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsx("h4", {
                  children: "SÍMBOLOS CIGANOS E SEUS SIGNIFICADOS:",
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "pentagrama:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/03.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Pentagrama (estrela de 5 pontas) simboliza o Homem Integral (de braços e pernas abertos) interagindo em perfeita harmonia com a plenitude da existência.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A CORUJA:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/04.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza segurança. É usada para trazer segurança e equilíbrio no plano físico, financeiro, e para se livrar de perdas materiais. Simboliza “o ver a totalidade”. É usado para ampliar a percepção com a sabedoria possibilitando ver à totalidade: o consciente e o inconsciente.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A CHAVE:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/06.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza as soluções. É usado para atrair boas soluções de problemas. O símbolo da chave quando trabalhado no fogo costuma atrair sucesso e riquezas.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A ESTRELA DE 6 PONTAS:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/07.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza proteção. É usada como talismã de proteção contra inimigos visíveis e invisíveis. Também conhecida como Estrela Cigana e Estrela de David. A Estrela Cigana é o símbolo dos grandes chefes ciganos. Possui seis pontas, formando dois triângulos iguais, que indicam a igualdade entre o que está a cima e o que está a baixo. Representa sucesso e evolução interior.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A FERRADURA:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/08.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza energia e sorte. É usada para atrair energia positiva e boa sorte. A ferradura representa o esforço e o trabalho. Os ciganos têm a ferradura como um poderoso talismã, que atrai a boa sorte, a fortuna e afasta a má sorte.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A LUA:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/09.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza a magia e os mistérios. Usada geralmente pelas ciganas, para atrair percepção, o poder feminino, a cura e o exorcismo atentando sempre as fases: nova, crescente, cheia e minguante. A lua cheia é o maior elo de ligação com o sagrado, sendo chamada de madrinha. As grandes festas sempre acontecem nas noites de lua cheia.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A MOEDA:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/10.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza proteção e prosperidade. Usada contra energias negativas e para atrair dinheiro. A moeda é associada ao equilíbrio e à justiça e relacionada à riqueza material e espiritual, que é representada pela cara e coroa. Para os ciganos, cara é o ouro físico, e coroa, o espiritual.",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza proteção e prosperidade. É usado contra energias negativas e para atrair dinheiro.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "O PUNHAL:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/12.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza a força,o poder, vitória e superação. É muito usado nos rituais de magia, tem o poder de transmutar energias. Os ciganos também usavam o punhal para abrir matas, sendo então, um dos grande símbolo de superação e pioneirismo, além da roda. O punhal também é usado na cerimônia cigana de noivado e casamento, onde é feito um corte nos pulsos dos noivos, em seguida o pulsos são amarrados em um lenço vermelho, representando a união de duas vidas em uma só.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A RODA:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/13.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza a Samsara, representando o ir e vir, o circular, o passar por diversos estados, o ciclo da vida, morte e renascimento, e é usada para atrair a grande consciência, a evolução, o equilíbrio. A roda é o grande símbolo cigano, que é representado pela roda dos vurdón que gira. Devem ser respeitados pois são detentores das tradições. É o maior tesouro do cigano, ao contrário da cultura dos gadjes onde o idoso é menos respeitado porque não contribui economicamente.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A TAÇA:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/14.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza união e receptividade, pois qualquer líquido cabe nela e adquire sua forma. Tanto que, no casamento cigano, os noivos tomam vinho em uma única taça, que representa valor e comunhão eterna.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "O TREVO:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/16.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "É o símbolo mais tradicional de boa sorte. Trevo de quatro folhas: traz felicidade e fortuna. Quando se encontra um trevo de quatro folhas na natureza, pode-se esperar sempre boas notícias.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
                t.jsxs("span", {
                  children: [
                    t.jsx("h5", { children: "A ÂNCORA:" }),
                    t.jsx("img", {
                      src: "../pages/ciganos/astrologia/17.jpg",
                      alt: "",
                    }),
                    t.jsx("p", {
                      children:
                        "Simboliza segurança. É usado para trazer segurança e equilíbrio no plano físico, financeiro e para se livrar de perdas materiais.",
                    }),
                  ],
                }),
                t.jsx("br", {}),
              ],
            }),
            t.jsx("br", {}),
            t.jsxs("div", {
              children: [
                t.jsxs("span", {
                  children: [
                    t.jsx("p", { children: "OBJETOS DE PROTEÇÃO E SORTE" }),
                    t.jsx("p", { children: "TERRA, FOGO, ÁGUA e AR." }),
                  ],
                }),
                t.jsxs("span", {
                  children: [
                    t.jsx("p", {
                      children:
                        "Os ciganos preservam e utilizam muito os elementos da natureza em seus rituais. Acreditam que o Fogo queima a negatividade e ilumina a positividade. A vela, para eles concentra as energias dos quatro elementos. A Água e a Terra são representados pela cera e o pavio. O Fogo é a chama e o Ar (oxigênio) a mantém viva (acesa).",
                    }),
                    t.jsx("p", {
                      children:
                        "Símbolos, amuletos e talismãs são objetos de proteção, de força, aos quais se atribui um poder místico que está ligado com sua forma e a simbologia que eles representam. O punhal, o violino, o pandeiro, o leque, o xale, as medalhas e as fitas coloridas; o coral, o âmbar, o ônix, o abalone, a concha marinha (vieira), o hipocampo (cavalo-marinho), a coruja (mocho), o cavalo, o cachorro, o galo e o lobo são símbolos sagrados para o povo cigano.",
                    }),
                    t.jsx("p", {
                      children:
                        "A verbena, a sálvia, o ópio, o sândalo e algumas resinas extraídas das cascas das árvores sagradas são ingredientes indispensáveis na manufatura caseira de incensos, velas e sais de banho, mesclados com essências de aromas inebriantes e simplesmente usados nas abluções do dia-a-dia, nos contatos sociais e comerciais, nos encontros amorosos e principalmente nos ritos iniciáticos, de uma forma sensível e absolutamente mágica, conferindo grandes poderes.",
                    }),
                    t.jsx("p", {
                      children:
                        "Incensos – De acordo com sua fragrância, atuam das mais variadas formas, desde a limpeza de ambientes (Cedro, Lavanda e Alecrim), para a prosperidade (Canela, Maçã, e Cravo), e magias de amor (Dama da Noite, Rosas, Verbena).",
                    }),
                    t.jsx("p", {
                      children:
                        "Que o Povo Cigano e sua Sabedoria protejam seu caminho e tragam inspiração e beleza à sua vida.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Sg = () => t.jsx("div", { children: "Rituais" });
function jg() {
  return t.jsx(Fh, {
    children: t.jsxs(kh, {
      children: [
        t.jsx(Ie, { path: "/", element: t.jsx(Yh, {}), children: " " }),
        t.jsx(Ie, {
          path: "/magia-dos-ciganos",
          element: t.jsx(hg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/magia-dos-ciganos/baralho",
          element: t.jsx(gg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/magia-dos-ciganos/simpatia",
          element: t.jsx(vg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/magia-dos-ciganos/astrologia",
          element: t.jsx(xg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/magia-dos-ciganos/rituais",
          element: t.jsx(Sg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/banhos-e-ervas",
          element: t.jsx(sg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/cartomancia",
          element: t.jsx(lg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/mensagem-das-velas",
          element: t.jsx(ig, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/mesa-radionica",
          element: t.jsx(dg, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/numerologia",
          element: t.jsx(Jh, {}),
          children: " ",
        }),
        t.jsx(Ie, {
          path: "/tarot-dos-anjos",
          element: t.jsx(pg, {}),
          children: " ",
        }),
      ],
    }),
  });
}
const Eg = () => {
  const [a, e] = _.useState(!1),
    s = () => {
      e(!a);
    };
  return t.jsxs("nav", {
    children: [
      t.jsx("ul", {
        id: "menu",
        children: t.jsxs("li", {
          id: "list-menu",
          className: a ? "active" : "disabled",
          onClick: s,
          children: [
            t.jsx("span", {
              children: t.jsx("svg", {
                width: "58",
                height: "30",
                viewBox: "0 0 67 49",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: t.jsx("path", {
                  d: a
                    ? "M2.5 46L45.5 3M2.5 3L48 48.5"
                    : "M3 3H64M3 24.5H48M3 46H64",
                  stroke: "#c1c1c1",
                  strokeWidth: "5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              }),
            }),
            a &&
              t.jsxs("ul", {
                children: [
                  t.jsx("li", {
                    children: t.jsx("a", {
                      href: "/Magia-dos-ciganos",
                      children: "As magias e a Historia dos Ciganos",
                    }),
                  }),
                  t.jsx("li", {
                    children: t.jsx("a", {
                      href: "/Banhos-e-ervas",
                      children: "Banhos e Ervas Especiais",
                    }),
                  }),
                  t.jsx("li", {
                    children: t.jsx("a", {
                      href: "/Cartomancia",
                      children: "Cartomancia",
                    }),
                  }),
                  t.jsx("li", {
                    children: t.jsx("a", {
                      href: "/Mensagem-das-velas",
                      children: "Mensagem das Velas",
                    }),
                  }),
                  t.jsx("li", {
                    children: t.jsx("a", {
                      href: "/Mesa-radionica",
                      children: "Mesa Radiônica e Radiestesia",
                    }),
                  }),
                  t.jsx("li", {
                    children: t.jsx("a", {
                      href: "/Numerologia",
                      children: "Numerologia",
                    }),
                  }),
                  t.jsx("li", {
                    children: t.jsx("a", {
                      href: "/Tarot-dos-anjos",
                      children: "Tarot dos Anjos",
                    }),
                  }),
                ],
              }),
          ],
        }),
      }),
      t.jsxs("ul", {
        id: "navbar",
        children: [
          t.jsx("li", {
            children: t.jsx("a", { href: "/", children: "Inicio" }),
          }),
          t.jsx("li", {
            children: t.jsxs("a", {
              href: " https://wa.me//554891161249?text=Gostaria%20de%20mais%20informações%20sobre%20as%20consultas!",
              id: "cta",
              className: "hvr-icon-forward hvr-sweep-to-left",
              children: [
                "Marcar Consulta",
                t.jsx("img", {
                  src: "svg-seta.svg",
                  height: "20px",
                  width: "40px",
                  className: "fa fa-chevron-circle-right hvr-icon",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
};
function Cd(a) {
  return (
    a !== null &&
    typeof a == "object" &&
    "constructor" in a &&
    a.constructor === Object
  );
}
function el(a, e) {
  a === void 0 && (a = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((s) => {
      typeof a[s] > "u"
        ? (a[s] = e[s])
        : Cd(e[s]) &&
          Cd(a[s]) &&
          Object.keys(e[s]).length > 0 &&
          el(a[s], e[s]);
    });
}
const np = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function be() {
  const a = typeof document < "u" ? document : {};
  return el(a, np), a;
}
const wg = {
  document: np,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(a) {
    return typeof setTimeout > "u" ? (a(), null) : setTimeout(a, 0);
  },
  cancelAnimationFrame(a) {
    typeof setTimeout > "u" || clearTimeout(a);
  },
};
function se() {
  const a = typeof window < "u" ? window : {};
  return el(a, wg), a;
}
function ja(a) {
  return (
    a === void 0 && (a = ""),
    a
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function bg(a) {
  const e = a;
  Object.keys(e).forEach((s) => {
    try {
      e[s] = null;
    } catch {}
    try {
      delete e[s];
    } catch {}
  });
}
function ts(a, e) {
  return e === void 0 && (e = 0), setTimeout(a, e);
}
function Be() {
  return Date.now();
}
function yg(a) {
  const e = se();
  let s;
  return (
    e.getComputedStyle && (s = e.getComputedStyle(a, null)),
    !s && a.currentStyle && (s = a.currentStyle),
    s || (s = a.style),
    s
  );
}
function Jn(a, e) {
  e === void 0 && (e = "x");
  const s = se();
  let r, i, n;
  const o = yg(a);
  return (
    s.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((d) => d.replace(",", "."))
            .join(", ")),
        (n = new s.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((n =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = n.toString().split(","))),
    e === "x" &&
      (s.WebKitCSSMatrix
        ? (i = n.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    e === "y" &&
      (s.WebKitCSSMatrix
        ? (i = n.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function rr(a) {
  return (
    typeof a == "object" &&
    a !== null &&
    a.constructor &&
    Object.prototype.toString.call(a).slice(8, -1) === "Object"
  );
}
function Ag(a) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? a instanceof HTMLElement
    : a && (a.nodeType === 1 || a.nodeType === 11);
}
function Re() {
  const a = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let s = 1; s < arguments.length; s += 1) {
    const r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
    if (r != null && !Ag(r)) {
      const i = Object.keys(Object(r)).filter((n) => e.indexOf(n) < 0);
      for (let n = 0, o = i.length; n < o; n += 1) {
        const d = i[n],
          l = Object.getOwnPropertyDescriptor(r, d);
        l !== void 0 &&
          l.enumerable &&
          (rr(a[d]) && rr(r[d])
            ? r[d].__swiper__
              ? (a[d] = r[d])
              : Re(a[d], r[d])
            : !rr(a[d]) && rr(r[d])
            ? ((a[d] = {}), r[d].__swiper__ ? (a[d] = r[d]) : Re(a[d], r[d]))
            : (a[d] = r[d]));
      }
    }
  }
  return a;
}
function tr(a, e, s) {
  a.style.setProperty(e, s);
}
function op(a) {
  let { swiper: e, targetPosition: s, side: r } = a;
  const i = se(),
    n = -e.translate;
  let o = null,
    d;
  const l = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(e.cssModeFrameID);
  const p = s > n ? "next" : "prev",
    c = (m, v) => (p === "next" && m >= v) || (p === "prev" && m <= v),
    u = () => {
      (d = new Date().getTime()), o === null && (o = d);
      const m = Math.max(Math.min((d - o) / l, 1), 0),
        v = 0.5 - Math.cos(m * Math.PI) / 2;
      let S = n + v * (s - n);
      if ((c(S, s) && (S = s), e.wrapperEl.scrollTo({ [r]: S }), c(S, s))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [r]: S });
          }),
          i.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = i.requestAnimationFrame(u);
    };
  u();
}
function ds(a) {
  return (
    a.querySelector(".swiper-slide-transform") ||
    (a.shadowRoot && a.shadowRoot.querySelector(".swiper-slide-transform")) ||
    a
  );
}
function me(a, e) {
  return e === void 0 && (e = ""), [...a.children].filter((s) => s.matches(e));
}
function Yt(a) {
  try {
    console.warn(a);
    return;
  } catch {}
}
function De(a, e) {
  e === void 0 && (e = []);
  const s = document.createElement(a);
  return s.classList.add(...(Array.isArray(e) ? e : ja(e))), s;
}
function Zt(a) {
  const e = se(),
    s = be(),
    r = a.getBoundingClientRect(),
    i = s.body,
    n = a.clientTop || i.clientTop || 0,
    o = a.clientLeft || i.clientLeft || 0,
    d = a === e ? e.scrollY : a.scrollTop,
    l = a === e ? e.scrollX : a.scrollLeft;
  return { top: r.top + d - n, left: r.left + l - o };
}
function Tg(a, e) {
  const s = [];
  for (; a.previousElementSibling; ) {
    const r = a.previousElementSibling;
    e ? r.matches(e) && s.push(r) : s.push(r), (a = r);
  }
  return s;
}
function Og(a, e) {
  const s = [];
  for (; a.nextElementSibling; ) {
    const r = a.nextElementSibling;
    e ? r.matches(e) && s.push(r) : s.push(r), (a = r);
  }
  return s;
}
function Ca(a, e) {
  return se().getComputedStyle(a, null).getPropertyValue(e);
}
function Dr(a) {
  let e = a,
    s;
  if (e) {
    for (s = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (s += 1);
    return s;
  }
}
function Ka(a, e) {
  const s = [];
  let r = a.parentElement;
  for (; r; ) e ? r.matches(e) && s.push(r) : s.push(r), (r = r.parentElement);
  return s;
}
function fr(a, e) {
  function s(r) {
    r.target === a && (e.call(a, r), a.removeEventListener("transitionend", s));
  }
  e && a.addEventListener("transitionend", s);
}
function eo(a, e, s) {
  const r = se();
  return s
    ? a[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          r
            .getComputedStyle(a, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          r
            .getComputedStyle(a, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
        )
    : a.offsetWidth;
}
let Yi;
function Cg() {
  const a = se(),
    e = be();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in a ||
      (a.DocumentTouch && e instanceof a.DocumentTouch)
    ),
  };
}
function lp() {
  return Yi || (Yi = Cg()), Yi;
}
let Zi;
function Pg(a) {
  let { userAgent: e } = a === void 0 ? {} : a;
  const s = lp(),
    r = se(),
    i = r.navigator.platform,
    n = e || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    d = r.screen.width,
    l = r.screen.height,
    p = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = n.match(/(iPad).*OS\s([\d_]+)/);
  const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    v = i === "Win32";
  let S = i === "MacIntel";
  const x = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      S &&
      s.touch &&
      x.indexOf(`${d}x${l}`) >= 0 &&
      ((c = n.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (S = !1)),
    p && !v && ((o.os = "android"), (o.android = !0)),
    (c || m || u) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Mg(a) {
  return a === void 0 && (a = {}), Zi || (Zi = Pg(a)), Zi;
}
let Ki;
function Ig() {
  const a = se();
  let e = !1;
  function s() {
    const r = a.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (s()) {
    const r = String(a.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, n] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      e = i < 16 || (i === 16 && n < 2);
    }
  }
  return {
    isSafari: e || s(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      a.navigator.userAgent
    ),
  };
}
function zg() {
  return Ki || (Ki = Ig()), Ki;
}
function Rg(a) {
  let { swiper: e, on: s, emit: r } = a;
  const i = se();
  let n = null,
    o = null;
  const d = () => {
      !e || e.destroyed || !e.initialized || (r("beforeResize"), r("resize"));
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((n = new ResizeObserver((u) => {
          o = i.requestAnimationFrame(() => {
            const { width: m, height: v } = e;
            let S = m,
              x = v;
            u.forEach((j) => {
              let { contentBoxSize: g, contentRect: f, target: h } = j;
              (h && h !== e.el) ||
                ((S = f ? f.width : (g[0] || g).inlineSize),
                (x = f ? f.height : (g[0] || g).blockSize));
            }),
              (S !== m || x !== v) && d();
          });
        })),
        n.observe(e.el));
    },
    p = () => {
      o && i.cancelAnimationFrame(o),
        n && n.unobserve && e.el && (n.unobserve(e.el), (n = null));
    },
    c = () => {
      !e || e.destroyed || !e.initialized || r("orientationchange");
    };
  s("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", d), i.addEventListener("orientationchange", c);
  }),
    s("destroy", () => {
      p(),
        i.removeEventListener("resize", d),
        i.removeEventListener("orientationchange", c);
    });
}
function Ng(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  const n = [],
    o = se(),
    d = function (c, u) {
      u === void 0 && (u = {});
      const m = o.MutationObserver || o.WebkitMutationObserver,
        v = new m((S) => {
          if (e.__preventObserver__) return;
          if (S.length === 1) {
            i("observerUpdate", S[0]);
            return;
          }
          const x = function () {
            i("observerUpdate", S[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(x)
            : o.setTimeout(x, 0);
        });
      v.observe(c, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData,
      }),
        n.push(v);
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = Ka(e.hostEl);
          for (let u = 0; u < c.length; u += 1) d(c[u]);
        }
        d(e.hostEl, { childList: e.params.observeSlideChildren }),
          d(e.wrapperEl, { attributes: !1 });
      }
    },
    p = () => {
      n.forEach((c) => {
        c.disconnect();
      }),
        n.splice(0, n.length);
    };
  s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", l),
    r("destroy", p);
}
var Dg = {
  on(a, e, s) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    const i = s ? "unshift" : "push";
    return (
      a.split(" ").forEach((n) => {
        r.eventsListeners[n] || (r.eventsListeners[n] = []),
          r.eventsListeners[n][i](e);
      }),
      r
    );
  },
  once(a, e, s) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof e != "function") return r;
    function i() {
      r.off(a, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var n = arguments.length, o = new Array(n), d = 0; d < n; d++)
        o[d] = arguments[d];
      e.apply(r, o);
    }
    return (i.__emitterProxy = e), r.on(a, i, s);
  },
  onAny(a, e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof a != "function") return s;
    const r = e ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(a) < 0 && s.eventsAnyListeners[r](a), s;
  },
  offAny(a) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const s = e.eventsAnyListeners.indexOf(a);
    return s >= 0 && e.eventsAnyListeners.splice(s, 1), e;
  },
  off(a, e) {
    const s = this;
    return (
      !s.eventsListeners ||
        s.destroyed ||
        !s.eventsListeners ||
        a.split(" ").forEach((r) => {
          typeof e > "u"
            ? (s.eventsListeners[r] = [])
            : s.eventsListeners[r] &&
              s.eventsListeners[r].forEach((i, n) => {
                (i === e || (i.__emitterProxy && i.__emitterProxy === e)) &&
                  s.eventsListeners[r].splice(n, 1);
              });
        }),
      s
    );
  },
  emit() {
    const a = this;
    if (!a.eventsListeners || a.destroyed || !a.eventsListeners) return a;
    let e, s, r;
    for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++)
      n[o] = arguments[o];
    return (
      typeof n[0] == "string" || Array.isArray(n[0])
        ? ((e = n[0]), (s = n.slice(1, n.length)), (r = a))
        : ((e = n[0].events), (s = n[0].data), (r = n[0].context || a)),
      s.unshift(r),
      (Array.isArray(e) ? e : e.split(" ")).forEach((l) => {
        a.eventsAnyListeners &&
          a.eventsAnyListeners.length &&
          a.eventsAnyListeners.forEach((p) => {
            p.apply(r, [l, ...s]);
          }),
          a.eventsListeners &&
            a.eventsListeners[l] &&
            a.eventsListeners[l].forEach((p) => {
              p.apply(r, s);
            });
      }),
      a
    );
  },
};
function qg() {
  const a = this;
  let e, s;
  const r = a.el;
  typeof a.params.width < "u" && a.params.width !== null
    ? (e = a.params.width)
    : (e = r.clientWidth),
    typeof a.params.height < "u" && a.params.height !== null
      ? (s = a.params.height)
      : (s = r.clientHeight),
    !((e === 0 && a.isHorizontal()) || (s === 0 && a.isVertical())) &&
      ((e =
        e -
        parseInt(Ca(r, "padding-left") || 0, 10) -
        parseInt(Ca(r, "padding-right") || 0, 10)),
      (s =
        s -
        parseInt(Ca(r, "padding-top") || 0, 10) -
        parseInt(Ca(r, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(s) && (s = 0),
      Object.assign(a, {
        width: e,
        height: s,
        size: a.isHorizontal() ? e : s,
      }));
}
function Lg() {
  const a = this;
  function e(O, N) {
    return parseFloat(O.getPropertyValue(a.getDirectionLabel(N)) || 0);
  }
  const s = a.params,
    { wrapperEl: r, slidesEl: i, size: n, rtlTranslate: o, wrongRTL: d } = a,
    l = a.virtual && s.virtual.enabled,
    p = l ? a.virtual.slides.length : a.slides.length,
    c = me(i, `.${a.params.slideClass}, swiper-slide`),
    u = l ? a.virtual.slides.length : c.length;
  let m = [];
  const v = [],
    S = [];
  let x = s.slidesOffsetBefore;
  typeof x == "function" && (x = s.slidesOffsetBefore.call(a));
  let j = s.slidesOffsetAfter;
  typeof j == "function" && (j = s.slidesOffsetAfter.call(a));
  const g = a.snapGrid.length,
    f = a.slidesGrid.length;
  let h = s.spaceBetween,
    E = -x,
    b = 0,
    y = 0;
  if (typeof n > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * n)
    : typeof h == "string" && (h = parseFloat(h)),
    (a.virtualSize = -h),
    c.forEach((O) => {
      o ? (O.style.marginLeft = "") : (O.style.marginRight = ""),
        (O.style.marginBottom = ""),
        (O.style.marginTop = "");
    }),
    s.centeredSlides &&
      s.cssMode &&
      (tr(r, "--swiper-centered-offset-before", ""),
      tr(r, "--swiper-centered-offset-after", ""));
  const z = s.grid && s.grid.rows > 1 && a.grid;
  z ? a.grid.initSlides(c) : a.grid && a.grid.unsetSlides();
  let C;
  const T =
    s.slidesPerView === "auto" &&
    s.breakpoints &&
    Object.keys(s.breakpoints).filter(
      (O) => typeof s.breakpoints[O].slidesPerView < "u"
    ).length > 0;
  for (let O = 0; O < u; O += 1) {
    C = 0;
    let N;
    if (
      (c[O] && (N = c[O]),
      z && a.grid.updateSlide(O, N, c),
      !(c[O] && Ca(N, "display") === "none"))
    ) {
      if (s.slidesPerView === "auto") {
        T && (c[O].style[a.getDirectionLabel("width")] = "");
        const R = getComputedStyle(N),
          I = N.style.transform,
          w = N.style.webkitTransform;
        if (
          (I && (N.style.transform = "none"),
          w && (N.style.webkitTransform = "none"),
          s.roundLengths)
        )
          C = a.isHorizontal() ? eo(N, "width", !0) : eo(N, "height", !0);
        else {
          const M = e(R, "width"),
            q = e(R, "padding-left"),
            D = e(R, "padding-right"),
            A = e(R, "margin-left"),
            P = e(R, "margin-right"),
            L = R.getPropertyValue("box-sizing");
          if (L && L === "border-box") C = M + A + P;
          else {
            const { clientWidth: $, offsetWidth: F } = N;
            C = M + q + D + A + P + (F - $);
          }
        }
        I && (N.style.transform = I),
          w && (N.style.webkitTransform = w),
          s.roundLengths && (C = Math.floor(C));
      } else
        (C = (n - (s.slidesPerView - 1) * h) / s.slidesPerView),
          s.roundLengths && (C = Math.floor(C)),
          c[O] && (c[O].style[a.getDirectionLabel("width")] = `${C}px`);
      c[O] && (c[O].swiperSlideSize = C),
        S.push(C),
        s.centeredSlides
          ? ((E = E + C / 2 + b / 2 + h),
            b === 0 && O !== 0 && (E = E - n / 2 - h),
            O === 0 && (E = E - n / 2 - h),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            s.roundLengths && (E = Math.floor(E)),
            y % s.slidesPerGroup === 0 && m.push(E),
            v.push(E))
          : (s.roundLengths && (E = Math.floor(E)),
            (y - Math.min(a.params.slidesPerGroupSkip, y)) %
              a.params.slidesPerGroup ===
              0 && m.push(E),
            v.push(E),
            (E = E + C + h)),
        (a.virtualSize += C + h),
        (b = C),
        (y += 1);
    }
  }
  if (
    ((a.virtualSize = Math.max(a.virtualSize, n) + j),
    o &&
      d &&
      (s.effect === "slide" || s.effect === "coverflow") &&
      (r.style.width = `${a.virtualSize + h}px`),
    s.setWrapperSize &&
      (r.style[a.getDirectionLabel("width")] = `${a.virtualSize + h}px`),
    z && a.grid.updateWrapperSize(C, m),
    !s.centeredSlides)
  ) {
    const O = [];
    for (let N = 0; N < m.length; N += 1) {
      let R = m[N];
      s.roundLengths && (R = Math.floor(R)),
        m[N] <= a.virtualSize - n && O.push(R);
    }
    (m = O),
      Math.floor(a.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
        m.push(a.virtualSize - n);
  }
  if (l && s.loop) {
    const O = S[0] + h;
    if (s.slidesPerGroup > 1) {
      const N = Math.ceil(
          (a.virtual.slidesBefore + a.virtual.slidesAfter) / s.slidesPerGroup
        ),
        R = O * s.slidesPerGroup;
      for (let I = 0; I < N; I += 1) m.push(m[m.length - 1] + R);
    }
    for (let N = 0; N < a.virtual.slidesBefore + a.virtual.slidesAfter; N += 1)
      s.slidesPerGroup === 1 && m.push(m[m.length - 1] + O),
        v.push(v[v.length - 1] + O),
        (a.virtualSize += O);
  }
  if ((m.length === 0 && (m = [0]), h !== 0)) {
    const O =
      a.isHorizontal() && o ? "marginLeft" : a.getDirectionLabel("marginRight");
    c.filter((N, R) =>
      !s.cssMode || s.loop ? !0 : R !== c.length - 1
    ).forEach((N) => {
      N.style[O] = `${h}px`;
    });
  }
  if (s.centeredSlides && s.centeredSlidesBounds) {
    let O = 0;
    S.forEach((R) => {
      O += R + (h || 0);
    }),
      (O -= h);
    const N = O - n;
    m = m.map((R) => (R <= 0 ? -x : R > N ? N + j : R));
  }
  if (s.centerInsufficientSlides) {
    let O = 0;
    if (
      (S.forEach((N) => {
        O += N + (h || 0);
      }),
      (O -= h),
      O < n)
    ) {
      const N = (n - O) / 2;
      m.forEach((R, I) => {
        m[I] = R - N;
      }),
        v.forEach((R, I) => {
          v[I] = R + N;
        });
    }
  }
  if (
    (Object.assign(a, {
      slides: c,
      snapGrid: m,
      slidesGrid: v,
      slidesSizesGrid: S,
    }),
    s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
  ) {
    tr(r, "--swiper-centered-offset-before", `${-m[0]}px`),
      tr(
        r,
        "--swiper-centered-offset-after",
        `${a.size / 2 - S[S.length - 1] / 2}px`
      );
    const O = -a.snapGrid[0],
      N = -a.slidesGrid[0];
    (a.snapGrid = a.snapGrid.map((R) => R + O)),
      (a.slidesGrid = a.slidesGrid.map((R) => R + N));
  }
  if (
    (u !== p && a.emit("slidesLengthChange"),
    m.length !== g &&
      (a.params.watchOverflow && a.checkOverflow(),
      a.emit("snapGridLengthChange")),
    v.length !== f && a.emit("slidesGridLengthChange"),
    s.watchSlidesProgress && a.updateSlidesOffset(),
    !l && !s.cssMode && (s.effect === "slide" || s.effect === "fade"))
  ) {
    const O = `${s.containerModifierClass}backface-hidden`,
      N = a.el.classList.contains(O);
    u <= s.maxBackfaceHiddenSlides
      ? N || a.el.classList.add(O)
      : N && a.el.classList.remove(O);
  }
}
function kg(a) {
  const e = this,
    s = [],
    r = e.virtual && e.params.virtual.enabled;
  let i = 0,
    n;
  typeof a == "number"
    ? e.setTransition(a)
    : a === !0 && e.setTransition(e.params.speed);
  const o = (d) => (r ? e.slides[e.getSlideIndexByData(d)] : e.slides[d]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((d) => {
        s.push(d);
      });
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const d = e.activeIndex + n;
        if (d > e.slides.length && !r) break;
        s.push(o(d));
      }
  else s.push(o(e.activeIndex));
  for (n = 0; n < s.length; n += 1)
    if (typeof s[n] < "u") {
      const d = s[n].offsetHeight;
      i = d > i ? d : i;
    }
  (i || i === 0) && (e.wrapperEl.style.height = `${i}px`);
}
function _g() {
  const a = this,
    e = a.slides,
    s = a.isElement
      ? a.isHorizontal()
        ? a.wrapperEl.offsetLeft
        : a.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < e.length; r += 1)
    e[r].swiperSlideOffset =
      (a.isHorizontal() ? e[r].offsetLeft : e[r].offsetTop) -
      s -
      a.cssOverflowAdjustment();
}
function Ug(a) {
  a === void 0 && (a = (this && this.translate) || 0);
  const e = this,
    s = e.params,
    { slides: r, rtlTranslate: i, snapGrid: n } = e;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -a;
  i && (o = a),
    r.forEach((l) => {
      l.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let d = s.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0
    ? (d = (parseFloat(d.replace("%", "")) / 100) * e.size)
    : typeof d == "string" && (d = parseFloat(d));
  for (let l = 0; l < r.length; l += 1) {
    const p = r[l];
    let c = p.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (c -= r[0].swiperSlideOffset);
    const u =
        (o + (s.centeredSlides ? e.minTranslate() : 0) - c) /
        (p.swiperSlideSize + d),
      m =
        (o - n[0] + (s.centeredSlides ? e.minTranslate() : 0) - c) /
        (p.swiperSlideSize + d),
      v = -(o - c),
      S = v + e.slidesSizesGrid[l],
      x = v >= 0 && v <= e.size - e.slidesSizesGrid[l];
    ((v >= 0 && v < e.size - 1) ||
      (S > 1 && S <= e.size) ||
      (v <= 0 && S >= e.size)) &&
      (e.visibleSlides.push(p),
      e.visibleSlidesIndexes.push(l),
      r[l].classList.add(s.slideVisibleClass)),
      x && r[l].classList.add(s.slideFullyVisibleClass),
      (p.progress = i ? -u : u),
      (p.originalProgress = i ? -m : m);
  }
}
function Vg(a) {
  const e = this;
  if (typeof a > "u") {
    const c = e.rtlTranslate ? -1 : 1;
    a = (e && e.translate && e.translate * c) || 0;
  }
  const s = e.params,
    r = e.maxTranslate() - e.minTranslate();
  let { progress: i, isBeginning: n, isEnd: o, progressLoop: d } = e;
  const l = n,
    p = o;
  if (r === 0) (i = 0), (n = !0), (o = !0);
  else {
    i = (a - e.minTranslate()) / r;
    const c = Math.abs(a - e.minTranslate()) < 1,
      u = Math.abs(a - e.maxTranslate()) < 1;
    (n = c || i <= 0), (o = u || i >= 1), c && (i = 0), u && (i = 1);
  }
  if (s.loop) {
    const c = e.getSlideIndexByData(0),
      u = e.getSlideIndexByData(e.slides.length - 1),
      m = e.slidesGrid[c],
      v = e.slidesGrid[u],
      S = e.slidesGrid[e.slidesGrid.length - 1],
      x = Math.abs(a);
    x >= m ? (d = (x - m) / S) : (d = (x + S - v) / S), d > 1 && (d -= 1);
  }
  Object.assign(e, { progress: i, progressLoop: d, isBeginning: n, isEnd: o }),
    (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
      e.updateSlidesProgress(a),
    n && !l && e.emit("reachBeginning toEdge"),
    o && !p && e.emit("reachEnd toEdge"),
    ((l && !n) || (p && !o)) && e.emit("fromEdge"),
    e.emit("progress", i);
}
function $g() {
  const a = this,
    { slides: e, params: s, slidesEl: r, activeIndex: i } = a,
    n = a.virtual && s.virtual.enabled,
    o = a.grid && s.grid && s.grid.rows > 1,
    d = (u) => me(r, `.${s.slideClass}${u}, swiper-slide${u}`)[0];
  e.forEach((u) => {
    u.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
  });
  let l, p, c;
  if (n)
    if (s.loop) {
      let u = i - a.virtual.slidesBefore;
      u < 0 && (u = a.virtual.slides.length + u),
        u >= a.virtual.slides.length && (u -= a.virtual.slides.length),
        (l = d(`[data-swiper-slide-index="${u}"]`));
    } else l = d(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((l = e.filter((u) => u.column === i)[0]),
        (c = e.filter((u) => u.column === i + 1)[0]),
        (p = e.filter((u) => u.column === i - 1)[0]))
      : (l = e[i]);
  l &&
    (l.classList.add(s.slideActiveClass),
    o
      ? (c && c.classList.add(s.slideNextClass),
        p && p.classList.add(s.slidePrevClass))
      : ((c = Og(l, `.${s.slideClass}, swiper-slide`)[0]),
        s.loop && !c && (c = e[0]),
        c && c.classList.add(s.slideNextClass),
        (p = Tg(l, `.${s.slideClass}, swiper-slide`)[0]),
        s.loop && !p === 0 && (p = e[e.length - 1]),
        p && p.classList.add(s.slidePrevClass))),
    a.emitSlidesClasses();
}
const wt = (a, e) => {
    if (!a || a.destroyed || !a.params) return;
    const s = () => (a.isElement ? "swiper-slide" : `.${a.params.slideClass}`),
      r = e.closest(s());
    if (r) {
      let i = r.querySelector(`.${a.params.lazyPreloaderClass}`);
      !i &&
        a.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${a.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${a.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  Ji = (a, e) => {
    if (!a.slides[e]) return;
    const s = a.slides[e].querySelector('[loading="lazy"]');
    s && s.removeAttribute("loading");
  },
  ao = (a) => {
    if (!a || a.destroyed || !a.params) return;
    let e = a.params.lazyPreloadPrevNext;
    const s = a.slides.length;
    if (!s || !e || e < 0) return;
    e = Math.min(e, s);
    const r =
        a.params.slidesPerView === "auto"
          ? a.slidesPerViewDynamic()
          : Math.ceil(a.params.slidesPerView),
      i = a.activeIndex;
    if (a.params.grid && a.params.grid.rows > 1) {
      const o = i,
        d = [o - e];
      d.push(...Array.from({ length: e }).map((l, p) => o + r + p)),
        a.slides.forEach((l, p) => {
          d.includes(l.column) && Ji(a, p);
        });
      return;
    }
    const n = i + r - 1;
    if (a.params.rewind || a.params.loop)
      for (let o = i - e; o <= n + e; o += 1) {
        const d = ((o % s) + s) % s;
        (d < i || d > n) && Ji(a, d);
      }
    else
      for (let o = Math.max(i - e, 0); o <= Math.min(n + e, s - 1); o += 1)
        o !== i && (o > n || o < i) && Ji(a, o);
  };
function Bg(a) {
  const { slidesGrid: e, params: s } = a,
    r = a.rtlTranslate ? a.translate : -a.translate;
  let i;
  for (let n = 0; n < e.length; n += 1)
    typeof e[n + 1] < "u"
      ? r >= e[n] && r < e[n + 1] - (e[n + 1] - e[n]) / 2
        ? (i = n)
        : r >= e[n] && r < e[n + 1] && (i = n + 1)
      : r >= e[n] && (i = n);
  return s.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Fg(a) {
  const e = this,
    s = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: r, params: i, activeIndex: n, realIndex: o, snapIndex: d } = e;
  let l = a,
    p;
  const c = (v) => {
    let S = v - e.virtual.slidesBefore;
    return (
      S < 0 && (S = e.virtual.slides.length + S),
      S >= e.virtual.slides.length && (S -= e.virtual.slides.length),
      S
    );
  };
  if ((typeof l > "u" && (l = Bg(e)), r.indexOf(s) >= 0)) p = r.indexOf(s);
  else {
    const v = Math.min(i.slidesPerGroupSkip, l);
    p = v + Math.floor((l - v) / i.slidesPerGroup);
  }
  if ((p >= r.length && (p = r.length - 1), l === n && !e.params.loop)) {
    p !== d && ((e.snapIndex = p), e.emit("snapIndexChange"));
    return;
  }
  if (l === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = c(l);
    return;
  }
  const u = e.grid && i.grid && i.grid.rows > 1;
  let m;
  if (e.virtual && i.virtual.enabled && i.loop) m = c(l);
  else if (u) {
    const v = e.slides.filter((x) => x.column === l)[0];
    let S = parseInt(v.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(S) && (S = Math.max(e.slides.indexOf(v), 0)),
      (m = Math.floor(S / i.grid.rows));
  } else if (e.slides[l]) {
    const v = e.slides[l].getAttribute("data-swiper-slide-index");
    v ? (m = parseInt(v, 10)) : (m = l);
  } else m = l;
  Object.assign(e, {
    previousSnapIndex: d,
    snapIndex: p,
    previousRealIndex: o,
    realIndex: m,
    previousIndex: n,
    activeIndex: l,
  }),
    e.initialized && ao(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== m && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Gg(a, e) {
  const s = this,
    r = s.params;
  let i = a.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    s.isElement &&
    e &&
    e.length > 1 &&
    e.includes(a) &&
    [...e.slice(e.indexOf(a) + 1, e.length)].forEach((d) => {
      !i && d.matches && d.matches(`.${r.slideClass}, swiper-slide`) && (i = d);
    });
  let n = !1,
    o;
  if (i) {
    for (let d = 0; d < s.slides.length; d += 1)
      if (s.slides[d] === i) {
        (n = !0), (o = d);
        break;
      }
  }
  if (i && n)
    (s.clickedSlide = i),
      s.virtual && s.params.virtual.enabled
        ? (s.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (s.clickedIndex = o);
  else {
    (s.clickedSlide = void 0), (s.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    s.clickedIndex !== void 0 &&
    s.clickedIndex !== s.activeIndex &&
    s.slideToClickedSlide();
}
var Hg = {
  updateSize: qg,
  updateSlides: Lg,
  updateAutoHeight: kg,
  updateSlidesOffset: _g,
  updateSlidesProgress: Ug,
  updateProgress: Vg,
  updateSlidesClasses: $g,
  updateActiveIndex: Fg,
  updateClickedSlide: Gg,
};
function Wg(a) {
  a === void 0 && (a = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: s, rtlTranslate: r, translate: i, wrapperEl: n } = e;
  if (s.virtualTranslate) return r ? -i : i;
  if (s.cssMode) return i;
  let o = Jn(n, a);
  return (o += e.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function Qg(a, e) {
  const s = this,
    { rtlTranslate: r, params: i, wrapperEl: n, progress: o } = s;
  let d = 0,
    l = 0;
  const p = 0;
  s.isHorizontal() ? (d = r ? -a : a) : (l = a),
    i.roundLengths && ((d = Math.floor(d)), (l = Math.floor(l))),
    (s.previousTranslate = s.translate),
    (s.translate = s.isHorizontal() ? d : l),
    i.cssMode
      ? (n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
          ? -d
          : -l)
      : i.virtualTranslate ||
        (s.isHorizontal()
          ? (d -= s.cssOverflowAdjustment())
          : (l -= s.cssOverflowAdjustment()),
        (n.style.transform = `translate3d(${d}px, ${l}px, ${p}px)`));
  let c;
  const u = s.maxTranslate() - s.minTranslate();
  u === 0 ? (c = 0) : (c = (a - s.minTranslate()) / u),
    c !== o && s.updateProgress(a),
    s.emit("setTranslate", s.translate, e);
}
function Xg() {
  return -this.snapGrid[0];
}
function Yg() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Zg(a, e, s, r, i) {
  a === void 0 && (a = 0),
    e === void 0 && (e = this.params.speed),
    s === void 0 && (s = !0),
    r === void 0 && (r = !0);
  const n = this,
    { params: o, wrapperEl: d } = n;
  if (n.animating && o.preventInteractionOnTransition) return !1;
  const l = n.minTranslate(),
    p = n.maxTranslate();
  let c;
  if (
    (r && a > l ? (c = l) : r && a < p ? (c = p) : (c = a),
    n.updateProgress(c),
    o.cssMode)
  ) {
    const u = n.isHorizontal();
    if (e === 0) d[u ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!n.support.smoothScroll)
        return (
          op({ swiper: n, targetPosition: -c, side: u ? "left" : "top" }), !0
        );
      d.scrollTo({ [u ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (n.setTransition(0),
        n.setTranslate(c),
        s && (n.emit("beforeTransitionStart", e, i), n.emit("transitionEnd")))
      : (n.setTransition(e),
        n.setTranslate(c),
        s && (n.emit("beforeTransitionStart", e, i), n.emit("transitionStart")),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = function (m) {
              !n ||
                n.destroyed ||
                (m.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  s && n.emit("transitionEnd")));
            }),
          n.wrapperEl.addEventListener(
            "transitionend",
            n.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var Kg = {
  getTranslate: Wg,
  setTranslate: Qg,
  minTranslate: Xg,
  maxTranslate: Yg,
  translateTo: Zg,
};
function Jg(a, e) {
  const s = this;
  s.params.cssMode ||
    ((s.wrapperEl.style.transitionDuration = `${a}ms`),
    (s.wrapperEl.style.transitionDelay = a === 0 ? "0ms" : "")),
    s.emit("setTransition", a, e);
}
function dp(a) {
  let { swiper: e, runCallbacks: s, direction: r, step: i } = a;
  const { activeIndex: n, previousIndex: o } = e;
  let d = r;
  if (
    (d || (n > o ? (d = "next") : n < o ? (d = "prev") : (d = "reset")),
    e.emit(`transition${i}`),
    s && n !== o)
  ) {
    if (d === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`),
      d === "next"
        ? e.emit(`slideNextTransition${i}`)
        : e.emit(`slidePrevTransition${i}`);
  }
}
function ev(a, e) {
  a === void 0 && (a = !0);
  const s = this,
    { params: r } = s;
  r.cssMode ||
    (r.autoHeight && s.updateAutoHeight(),
    dp({ swiper: s, runCallbacks: a, direction: e, step: "Start" }));
}
function av(a, e) {
  a === void 0 && (a = !0);
  const s = this,
    { params: r } = s;
  (s.animating = !1),
    !r.cssMode &&
      (s.setTransition(0),
      dp({ swiper: s, runCallbacks: a, direction: e, step: "End" }));
}
var sv = { setTransition: Jg, transitionStart: ev, transitionEnd: av };
function rv(a, e, s, r, i) {
  a === void 0 && (a = 0),
    e === void 0 && (e = this.params.speed),
    s === void 0 && (s = !0),
    typeof a == "string" && (a = parseInt(a, 10));
  const n = this;
  let o = a;
  o < 0 && (o = 0);
  const {
    params: d,
    snapGrid: l,
    slidesGrid: p,
    previousIndex: c,
    activeIndex: u,
    rtlTranslate: m,
    wrapperEl: v,
    enabled: S,
  } = n;
  if ((n.animating && d.preventInteractionOnTransition) || (!S && !r && !i))
    return !1;
  const x = Math.min(n.params.slidesPerGroupSkip, o);
  let j = x + Math.floor((o - x) / n.params.slidesPerGroup);
  j >= l.length && (j = l.length - 1);
  const g = -l[j];
  if (d.normalizeSlideIndex)
    for (let h = 0; h < p.length; h += 1) {
      const E = -Math.floor(g * 100),
        b = Math.floor(p[h] * 100),
        y = Math.floor(p[h + 1] * 100);
      typeof p[h + 1] < "u"
        ? E >= b && E < y - (y - b) / 2
          ? (o = h)
          : E >= b && E < y && (o = h + 1)
        : E >= b && (o = h);
    }
  if (
    n.initialized &&
    o !== u &&
    ((!n.allowSlideNext &&
      (m
        ? g > n.translate && g > n.minTranslate()
        : g < n.translate && g < n.minTranslate())) ||
      (!n.allowSlidePrev &&
        g > n.translate &&
        g > n.maxTranslate() &&
        (u || 0) !== o))
  )
    return !1;
  o !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(g);
  let f;
  if (
    (o > u ? (f = "next") : o < u ? (f = "prev") : (f = "reset"),
    (m && -g === n.translate) || (!m && g === n.translate))
  )
    return (
      n.updateActiveIndex(o),
      d.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      d.effect !== "slide" && n.setTranslate(g),
      f !== "reset" && (n.transitionStart(s, f), n.transitionEnd(s, f)),
      !1
    );
  if (d.cssMode) {
    const h = n.isHorizontal(),
      E = m ? g : -g;
    if (e === 0) {
      const b = n.virtual && n.params.virtual.enabled;
      b &&
        ((n.wrapperEl.style.scrollSnapType = "none"),
        (n._immediateVirtual = !0)),
        b && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? ((n._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              v[h ? "scrollLeft" : "scrollTop"] = E;
            }))
          : (v[h ? "scrollLeft" : "scrollTop"] = E),
        b &&
          requestAnimationFrame(() => {
            (n.wrapperEl.style.scrollSnapType = ""), (n._immediateVirtual = !1);
          });
    } else {
      if (!n.support.smoothScroll)
        return (
          op({ swiper: n, targetPosition: E, side: h ? "left" : "top" }), !0
        );
      v.scrollTo({ [h ? "left" : "top"]: E, behavior: "smooth" });
    }
    return !0;
  }
  return (
    n.setTransition(e),
    n.setTranslate(g),
    n.updateActiveIndex(o),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", e, r),
    n.transitionStart(s, f),
    e === 0
      ? n.transitionEnd(s, f)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = function (E) {
            !n ||
              n.destroyed ||
              (E.target === this &&
                (n.wrapperEl.removeEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(s, f)));
          }),
        n.wrapperEl.addEventListener(
          "transitionend",
          n.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function tv(a, e, s, r) {
  a === void 0 && (a = 0),
    e === void 0 && (e = this.params.speed),
    s === void 0 && (s = !0),
    typeof a == "string" && (a = parseInt(a, 10));
  const i = this,
    n = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = a;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let d;
      if (n) {
        const m = o * i.params.grid.rows;
        d = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else d = i.getSlideIndexByData(o);
      const l = n
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: p } = i.params;
      let c = i.params.slidesPerView;
      c === "auto"
        ? (c = i.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          p && c % 2 === 0 && (c = c + 1));
      let u = l - d < c;
      if ((p && (u = u || d < Math.ceil(c / 2)), u)) {
        const m = p
          ? d < i.activeIndex
            ? "prev"
            : "next"
          : d - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: m,
          slideTo: !0,
          activeSlideIndex: m === "next" ? d + 1 : d - l + 1,
          slideRealIndex: m === "next" ? i.realIndex : void 0,
        });
      }
      if (n) {
        const m = o * i.params.grid.rows;
        o = i.slides.filter(
          (v) => v.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, e, s, r);
    }),
    i
  );
}
function iv(a, e, s) {
  a === void 0 && (a = this.params.speed), e === void 0 && (e = !0);
  const r = this,
    { enabled: i, params: n, animating: o } = r;
  if (!i) return r;
  let d = n.slidesPerGroup;
  n.slidesPerView === "auto" &&
    n.slidesPerGroup === 1 &&
    n.slidesPerGroupAuto &&
    (d = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < n.slidesPerGroupSkip ? 1 : d,
    p = r.virtual && n.virtual.enabled;
  if (n.loop) {
    if (o && !p && n.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && n.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + l, a, e, s);
        }),
        !0
      );
  }
  return n.rewind && r.isEnd
    ? r.slideTo(0, a, e, s)
    : r.slideTo(r.activeIndex + l, a, e, s);
}
function nv(a, e, s) {
  a === void 0 && (a = this.params.speed), e === void 0 && (e = !0);
  const r = this,
    {
      params: i,
      snapGrid: n,
      slidesGrid: o,
      rtlTranslate: d,
      enabled: l,
      animating: p,
    } = r;
  if (!l) return r;
  const c = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (p && !c && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const u = d ? r.translate : -r.translate;
  function m(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const v = m(u),
    S = n.map((g) => m(g));
  let x = n[S.indexOf(v) - 1];
  if (typeof x > "u" && i.cssMode) {
    let g;
    n.forEach((f, h) => {
      v >= f && (g = h);
    }),
      typeof g < "u" && (x = n[g > 0 ? g - 1 : g]);
  }
  let j = 0;
  if (
    (typeof x < "u" &&
      ((j = o.indexOf(x)),
      j < 0 && (j = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((j = j - r.slidesPerViewDynamic("previous", !0) + 1),
        (j = Math.max(j, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const g =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(g, a, e, s);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(j, a, e, s);
      }),
      !0
    );
  return r.slideTo(j, a, e, s);
}
function ov(a, e, s) {
  a === void 0 && (a = this.params.speed), e === void 0 && (e = !0);
  const r = this;
  return r.slideTo(r.activeIndex, a, e, s);
}
function lv(a, e, s, r) {
  a === void 0 && (a = this.params.speed),
    e === void 0 && (e = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let n = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, n),
    d = o + Math.floor((n - o) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[d]) {
    const p = i.snapGrid[d],
      c = i.snapGrid[d + 1];
    l - p > (c - p) * r && (n += i.params.slidesPerGroup);
  } else {
    const p = i.snapGrid[d - 1],
      c = i.snapGrid[d];
    l - p <= (c - p) * r && (n -= i.params.slidesPerGroup);
  }
  return (
    (n = Math.max(n, 0)),
    (n = Math.min(n, i.slidesGrid.length - 1)),
    i.slideTo(n, a, e, s)
  );
}
function dv() {
  const a = this,
    { params: e, slidesEl: s } = a,
    r = e.slidesPerView === "auto" ? a.slidesPerViewDynamic() : e.slidesPerView;
  let i = a.clickedIndex,
    n;
  const o = a.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (a.animating) return;
    (n = parseInt(a.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? i < a.loopedSlides - r / 2 ||
          i > a.slides.length - a.loopedSlides + r / 2
          ? (a.loopFix(),
            (i = a.getSlideIndex(
              me(s, `${o}[data-swiper-slide-index="${n}"]`)[0]
            )),
            ts(() => {
              a.slideTo(i);
            }))
          : a.slideTo(i)
        : i > a.slides.length - r
        ? (a.loopFix(),
          (i = a.getSlideIndex(
            me(s, `${o}[data-swiper-slide-index="${n}"]`)[0]
          )),
          ts(() => {
            a.slideTo(i);
          }))
        : a.slideTo(i);
  } else a.slideTo(i);
}
var uv = {
  slideTo: rv,
  slideToLoop: tv,
  slideNext: iv,
  slidePrev: nv,
  slideReset: ov,
  slideToClosest: lv,
  slideToClickedSlide: dv,
};
function cv(a) {
  const e = this,
    { params: s, slidesEl: r } = e;
  if (!s.loop || (e.virtual && e.params.virtual.enabled)) return;
  const i = () => {
      me(r, `.${s.slideClass}, swiper-slide`).forEach((u, m) => {
        u.setAttribute("data-swiper-slide-index", m);
      });
    },
    n = e.grid && s.grid && s.grid.rows > 1,
    o = s.slidesPerGroup * (n ? s.grid.rows : 1),
    d = e.slides.length % o !== 0,
    l = n && e.slides.length % s.grid.rows !== 0,
    p = (c) => {
      for (let u = 0; u < c; u += 1) {
        const m = e.isElement
          ? De("swiper-slide", [s.slideBlankClass])
          : De("div", [s.slideClass, s.slideBlankClass]);
        e.slidesEl.append(m);
      }
    };
  if (d) {
    if (s.loopAddBlankSlides) {
      const c = o - (e.slides.length % o);
      p(c), e.recalcSlides(), e.updateSlides();
    } else
      Yt(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (l) {
    if (s.loopAddBlankSlides) {
      const c = s.grid.rows - (e.slides.length % s.grid.rows);
      p(c), e.recalcSlides(), e.updateSlides();
    } else
      Yt(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  e.loopFix({
    slideRealIndex: a,
    direction: s.centeredSlides ? void 0 : "next",
  });
}
function pv(a) {
  let {
    slideRealIndex: e,
    slideTo: s = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: n,
    byController: o,
    byMousewheel: d,
  } = a === void 0 ? {} : a;
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const {
      slides: p,
      allowSlidePrev: c,
      allowSlideNext: u,
      slidesEl: m,
      params: v,
    } = l,
    { centeredSlides: S } = v;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && v.virtual.enabled)
  ) {
    s &&
      (!v.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : v.centeredSlides && l.snapIndex < v.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = u),
      l.emit("loopFix");
    return;
  }
  let x = v.slidesPerView;
  x === "auto"
    ? (x = l.slidesPerViewDynamic())
    : ((x = Math.ceil(parseFloat(v.slidesPerView, 10))),
      S && x % 2 === 0 && (x = x + 1));
  const j = v.slidesPerGroupAuto ? x : v.slidesPerGroup;
  let g = j;
  g % j !== 0 && (g += j - (g % j)),
    (g += v.loopAdditionalSlides),
    (l.loopedSlides = g);
  const f = l.grid && v.grid && v.grid.rows > 1;
  p.length < x + g
    ? Yt(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : f &&
      v.grid.fill === "row" &&
      Yt(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const h = [],
    E = [];
  let b = l.activeIndex;
  typeof n > "u"
    ? (n = l.getSlideIndex(
        p.filter((I) => I.classList.contains(v.slideActiveClass))[0]
      ))
    : (b = n);
  const y = r === "next" || !r,
    z = r === "prev" || !r;
  let C = 0,
    T = 0;
  const O = f ? Math.ceil(p.length / v.grid.rows) : p.length,
    R = (f ? p[n].column : n) + (S && typeof i > "u" ? -x / 2 + 0.5 : 0);
  if (R < g) {
    C = Math.max(g - R, j);
    for (let I = 0; I < g - R; I += 1) {
      const w = I - Math.floor(I / O) * O;
      if (f) {
        const M = O - w - 1;
        for (let q = p.length - 1; q >= 0; q -= 1)
          p[q].column === M && h.push(q);
      } else h.push(O - w - 1);
    }
  } else if (R + x > O - g) {
    T = Math.max(R - (O - g * 2), j);
    for (let I = 0; I < T; I += 1) {
      const w = I - Math.floor(I / O) * O;
      f
        ? p.forEach((M, q) => {
            M.column === w && E.push(q);
          })
        : E.push(w);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    z &&
      h.forEach((I) => {
        (p[I].swiperLoopMoveDOM = !0),
          m.prepend(p[I]),
          (p[I].swiperLoopMoveDOM = !1);
      }),
    y &&
      E.forEach((I) => {
        (p[I].swiperLoopMoveDOM = !0),
          m.append(p[I]),
          (p[I].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    v.slidesPerView === "auto"
      ? l.updateSlides()
      : f &&
        ((h.length > 0 && z) || (E.length > 0 && y)) &&
        l.slides.forEach((I, w) => {
          l.grid.updateSlide(w, I, l.slides);
        }),
    v.watchSlidesProgress && l.updateSlidesOffset(),
    s)
  ) {
    if (h.length > 0 && z) {
      if (typeof e > "u") {
        const I = l.slidesGrid[b],
          M = l.slidesGrid[b + C] - I;
        d
          ? l.setTranslate(l.translate - M)
          : (l.slideTo(b + C, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - M),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - M)));
      } else if (i) {
        const I = f ? h.length / v.grid.rows : h.length;
        l.slideTo(l.activeIndex + I, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (E.length > 0 && y)
      if (typeof e > "u") {
        const I = l.slidesGrid[b],
          M = l.slidesGrid[b - T] - I;
        d
          ? l.setTranslate(l.translate - M)
          : (l.slideTo(b - T, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - M),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - M)));
      } else {
        const I = f ? E.length / v.grid.rows : E.length;
        l.slideTo(l.activeIndex - I, 0, !1, !0);
      }
  }
  if (
    ((l.allowSlidePrev = c),
    (l.allowSlideNext = u),
    l.controller && l.controller.control && !o)
  ) {
    const I = {
      slideRealIndex: e,
      direction: r,
      setTranslate: i,
      activeSlideIndex: n,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((w) => {
          !w.destroyed &&
            w.params.loop &&
            w.loopFix({
              ...I,
              slideTo: w.params.slidesPerView === v.slidesPerView ? s : !1,
            });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...I,
          slideTo:
            l.controller.control.params.slidesPerView === v.slidesPerView
              ? s
              : !1,
        });
  }
  l.emit("loopFix");
}
function mv() {
  const a = this,
    { params: e, slidesEl: s } = a;
  if (!e.loop || (a.virtual && a.params.virtual.enabled)) return;
  a.recalcSlides();
  const r = [];
  a.slides.forEach((i) => {
    const n =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[n] = i;
  }),
    a.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      s.append(i);
    }),
    a.recalcSlides(),
    a.slideTo(a.realIndex, 0);
}
var fv = { loopCreate: cv, loopFix: pv, loopDestroy: mv };
function hv(a) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const s = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (s.style.cursor = "move"),
    (s.style.cursor = a ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function gv() {
  const a = this;
  (a.params.watchOverflow && a.isLocked) ||
    a.params.cssMode ||
    (a.isElement && (a.__preventObserver__ = !0),
    (a[
      a.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    a.isElement &&
      requestAnimationFrame(() => {
        a.__preventObserver__ = !1;
      }));
}
var vv = { setGrabCursor: hv, unsetGrabCursor: gv };
function xv(a, e) {
  e === void 0 && (e = this);
  function s(r) {
    if (!r || r === be() || r === se()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(a);
    return !i && !r.getRootNode ? null : i || s(r.getRootNode().host);
  }
  return s(e);
}
function Pd(a, e, s) {
  const r = se(),
    { params: i } = a,
    n = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return n && (s <= o || s >= r.innerWidth - o)
    ? n === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function Sv(a) {
  const e = this,
    s = be();
  let r = a;
  r.originalEvent && (r = r.originalEvent);
  const i = e.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    Pd(e, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: o, enabled: d } = e;
  if (
    !d ||
    (!n.simulateTouch && r.pointerType === "mouse") ||
    (e.animating && n.preventInteractionOnTransition)
  )
    return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let l = r.target;
  if (
    (n.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(l)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const p = !!n.noSwipingClass && n.noSwipingClass !== "",
    c = r.composedPath ? r.composedPath() : r.path;
  p && r.target && r.target.shadowRoot && c && (l = c[0]);
  const u = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    m = !!(r.target && r.target.shadowRoot);
  if (n.noSwiping && (m ? xv(u, l) : l.closest(u))) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !l.closest(n.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const v = o.currentX,
    S = o.currentY;
  if (!Pd(e, r, v)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = v),
    (o.startY = S),
    (i.touchStartTime = Be()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    n.threshold > 0 && (i.allowThresholdMove = !1);
  let x = !0;
  l.matches(i.focusableElements) &&
    ((x = !1), l.nodeName === "SELECT" && (i.isTouched = !1)),
    s.activeElement &&
      s.activeElement.matches(i.focusableElements) &&
      s.activeElement !== l &&
      s.activeElement.blur();
  const j = x && e.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || j) &&
    !l.isContentEditable &&
    r.preventDefault(),
    n.freeMode &&
      n.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !n.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", r);
}
function jv(a) {
  const e = be(),
    s = this,
    r = s.touchEventsData,
    { params: i, touches: n, rtlTranslate: o, enabled: d } = s;
  if (!d || (!i.simulateTouch && a.pointerType === "mouse")) return;
  let l = a;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" &&
      (r.touchId !== null || l.pointerId !== r.pointerId))
  )
    return;
  let p;
  if (l.type === "touchmove") {
    if (
      ((p = [...l.changedTouches].filter((y) => y.identifier === r.touchId)[0]),
      !p || p.identifier !== r.touchId)
    )
      return;
  } else p = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", l);
    return;
  }
  const c = p.pageX,
    u = p.pageY;
  if (l.preventedByNestedSwiper) {
    (n.startX = c), (n.startY = u);
    return;
  }
  if (!s.allowTouchMove) {
    l.target.matches(r.focusableElements) || (s.allowClick = !1),
      r.isTouched &&
        (Object.assign(n, { startX: c, startY: u, currentX: c, currentY: u }),
        (r.touchStartTime = Be()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (s.isVertical()) {
      if (
        (u < n.startY && s.translate <= s.maxTranslate()) ||
        (u > n.startY && s.translate >= s.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (c < n.startX && s.translate <= s.maxTranslate()) ||
      (c > n.startX && s.translate >= s.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    l.target === e.activeElement &&
    l.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (s.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && s.emit("touchMove", l),
    (n.previousX = n.currentX),
    (n.previousY = n.currentY),
    (n.currentX = c),
    (n.currentY = u);
  const m = n.currentX - n.startX,
    v = n.currentY - n.startY;
  if (s.params.threshold && Math.sqrt(m ** 2 + v ** 2) < s.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let y;
    (s.isHorizontal() && n.currentY === n.startY) ||
    (s.isVertical() && n.currentX === n.startX)
      ? (r.isScrolling = !1)
      : m * m + v * v >= 25 &&
        ((y = (Math.atan2(Math.abs(v), Math.abs(m)) * 180) / Math.PI),
        (r.isScrolling = s.isHorizontal()
          ? y > i.touchAngle
          : 90 - y > i.touchAngle));
  }
  if (
    (r.isScrolling && s.emit("touchMoveOpposite", l),
    typeof r.startMoving > "u" &&
      (n.currentX !== n.startX || n.currentY !== n.startY) &&
      (r.startMoving = !0),
    r.isScrolling)
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (s.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let S = s.isHorizontal() ? m : v,
    x = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  i.oneWayMovement &&
    ((S = Math.abs(S) * (o ? 1 : -1)), (x = Math.abs(x) * (o ? 1 : -1))),
    (n.diff = S),
    (S *= i.touchRatio),
    o && ((S = -S), (x = -x));
  const j = s.touchesDirection;
  (s.swipeDirection = S > 0 ? "prev" : "next"),
    (s.touchesDirection = x > 0 ? "prev" : "next");
  const g = s.params.loop && !i.cssMode,
    f =
      (s.touchesDirection === "next" && s.allowSlideNext) ||
      (s.touchesDirection === "prev" && s.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (g && f && s.loopFix({ direction: s.swipeDirection }),
      (r.startTranslate = s.getTranslate()),
      s.setTransition(0),
      s.animating)
    ) {
      const y = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      s.wrapperEl.dispatchEvent(y);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (s.allowSlideNext === !0 || s.allowSlidePrev === !0) &&
        s.setGrabCursor(!0),
      s.emit("sliderFirstMove", l);
  }
  let h;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      j !== s.touchesDirection &&
      g &&
      f &&
      Math.abs(S) >= 1)
  ) {
    Object.assign(n, {
      startX: c,
      startY: u,
      currentX: c,
      currentY: u,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  s.emit("sliderMove", l),
    (r.isMoved = !0),
    (r.currentTranslate = S + r.startTranslate);
  let E = !0,
    b = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (b = 0),
    S > 0
      ? (g &&
          f &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1]
              : s.minTranslate()) &&
          s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > s.minTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + r.startTranslate + S) ** b)))
      : S < 0 &&
        (g &&
          f &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? s.maxTranslate() +
                s.slidesSizesGrid[s.slidesSizesGrid.length - 1]
              : s.maxTranslate()) &&
          s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              s.slides.length -
              (i.slidesPerView === "auto"
                ? s.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < s.maxTranslate() &&
          ((E = !1),
          i.resistance &&
            (r.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - r.startTranslate - S) ** b))),
    E && (l.preventedByNestedSwiper = !0),
    !s.allowSlideNext &&
      s.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !s.allowSlidePrev &&
      s.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !s.allowSlidePrev &&
      !s.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(S) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (r.currentTranslate = r.startTranslate),
          (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
      i.watchSlidesProgress) &&
      (s.updateActiveIndex(), s.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
    s.updateProgress(r.currentTranslate),
    s.setTranslate(r.currentTranslate));
}
function Ev(a) {
  const e = this,
    s = e.touchEventsData;
  let r = a;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((E) => E.identifier === s.touchId)[0]),
      !i || i.identifier !== s.touchId)
    )
      return;
  } else {
    if (s.touchId !== null || r.pointerId !== s.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (s.pointerId = null), (s.touchId = null);
  const {
    params: o,
    touches: d,
    rtlTranslate: l,
    slidesGrid: p,
    enabled: c,
  } = e;
  if (!c || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (s.allowTouchCallbacks && e.emit("touchEnd", r),
    (s.allowTouchCallbacks = !1),
    !s.isTouched)
  ) {
    s.isMoved && o.grabCursor && e.setGrabCursor(!1),
      (s.isMoved = !1),
      (s.startMoving = !1);
    return;
  }
  o.grabCursor &&
    s.isMoved &&
    s.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const u = Be(),
    m = u - s.touchStartTime;
  if (e.allowClick) {
    const E = r.path || (r.composedPath && r.composedPath());
    e.updateClickedSlide((E && E[0]) || r.target, E),
      e.emit("tap click", r),
      m < 300 &&
        u - s.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", r);
  }
  if (
    ((s.lastClickTime = Be()),
    ts(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !s.isTouched ||
      !s.isMoved ||
      !e.swipeDirection ||
      (d.diff === 0 && !s.loopSwapReset) ||
      (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
  ) {
    (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
    return;
  }
  (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
  let v;
  if (
    (o.followFinger
      ? (v = l ? e.translate : -e.translate)
      : (v = -s.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: v });
    return;
  }
  let S = 0,
    x = e.slidesSizesGrid[0];
  for (
    let E = 0;
    E < p.length;
    E += E < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const b = E < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof p[E + b] < "u"
      ? v >= p[E] && v < p[E + b] && ((S = E), (x = p[E + b] - p[E]))
      : v >= p[E] && ((S = E), (x = p[p.length - 1] - p[p.length - 2]));
  }
  let j = null,
    g = null;
  o.rewind &&
    (e.isBeginning
      ? (g =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (j = 0));
  const f = (v - p[S]) / x,
    h = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (m > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (f >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? j : S + h)
        : e.slideTo(S)),
      e.swipeDirection === "prev" &&
        (f > 1 - o.longSwipesRatio
          ? e.slideTo(S + h)
          : g !== null && f < 0 && Math.abs(f) > o.longSwipesRatio
          ? e.slideTo(g)
          : e.slideTo(S));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (r.target === e.navigation.nextEl || r.target === e.navigation.prevEl)
      ? r.target === e.navigation.nextEl
        ? e.slideTo(S + h)
        : e.slideTo(S)
      : (e.swipeDirection === "next" && e.slideTo(j !== null ? j : S + h),
        e.swipeDirection === "prev" && e.slideTo(g !== null ? g : S));
  }
}
function Md() {
  const a = this,
    { params: e, el: s } = a;
  if (s && s.offsetWidth === 0) return;
  e.breakpoints && a.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: n } = a,
    o = a.virtual && a.params.virtual.enabled;
  (a.allowSlideNext = !0),
    (a.allowSlidePrev = !0),
    a.updateSize(),
    a.updateSlides(),
    a.updateSlidesClasses();
  const d = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  a.isEnd &&
  !a.isBeginning &&
  !a.params.centeredSlides &&
  !d
    ? a.slideTo(a.slides.length - 1, 0, !1, !0)
    : a.params.loop && !o
    ? a.slideToLoop(a.realIndex, 0, !1, !0)
    : a.slideTo(a.activeIndex, 0, !1, !0),
    a.autoplay &&
      a.autoplay.running &&
      a.autoplay.paused &&
      (clearTimeout(a.autoplay.resizeTimeout),
      (a.autoplay.resizeTimeout = setTimeout(() => {
        a.autoplay &&
          a.autoplay.running &&
          a.autoplay.paused &&
          a.autoplay.resume();
      }, 500))),
    (a.allowSlidePrev = i),
    (a.allowSlideNext = r),
    a.params.watchOverflow && n !== a.snapGrid && a.checkOverflow();
}
function wv(a) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && a.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (a.stopPropagation(), a.stopImmediatePropagation())));
}
function bv() {
  const a = this,
    { wrapperEl: e, rtlTranslate: s, enabled: r } = a;
  if (!r) return;
  (a.previousTranslate = a.translate),
    a.isHorizontal()
      ? (a.translate = -e.scrollLeft)
      : (a.translate = -e.scrollTop),
    a.translate === 0 && (a.translate = 0),
    a.updateActiveIndex(),
    a.updateSlidesClasses();
  let i;
  const n = a.maxTranslate() - a.minTranslate();
  n === 0 ? (i = 0) : (i = (a.translate - a.minTranslate()) / n),
    i !== a.progress && a.updateProgress(s ? -a.translate : a.translate),
    a.emit("setTranslate", a.translate, !1);
}
function yv(a) {
  const e = this;
  wt(e, a.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function Av() {
  const a = this;
  a.documentTouchHandlerProceeded ||
    ((a.documentTouchHandlerProceeded = !0),
    a.params.touchReleaseOnEdges && (a.el.style.touchAction = "auto"));
}
const up = (a, e) => {
  const s = be(),
    { params: r, el: i, wrapperEl: n, device: o } = a,
    d = !!r.nested,
    l = e === "on" ? "addEventListener" : "removeEventListener",
    p = e;
  s[l]("touchstart", a.onDocumentTouchStart, { passive: !1, capture: d }),
    i[l]("touchstart", a.onTouchStart, { passive: !1 }),
    i[l]("pointerdown", a.onTouchStart, { passive: !1 }),
    s[l]("touchmove", a.onTouchMove, { passive: !1, capture: d }),
    s[l]("pointermove", a.onTouchMove, { passive: !1, capture: d }),
    s[l]("touchend", a.onTouchEnd, { passive: !0 }),
    s[l]("pointerup", a.onTouchEnd, { passive: !0 }),
    s[l]("pointercancel", a.onTouchEnd, { passive: !0 }),
    s[l]("touchcancel", a.onTouchEnd, { passive: !0 }),
    s[l]("pointerout", a.onTouchEnd, { passive: !0 }),
    s[l]("pointerleave", a.onTouchEnd, { passive: !0 }),
    s[l]("contextmenu", a.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[l]("click", a.onClick, !0),
    r.cssMode && n[l]("scroll", a.onScroll),
    r.updateOnWindowResize
      ? a[p](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Md,
          !0
        )
      : a[p]("observerUpdate", Md, !0),
    i[l]("load", a.onLoad, { capture: !0 });
};
function Tv() {
  const a = this,
    { params: e } = a;
  (a.onTouchStart = Sv.bind(a)),
    (a.onTouchMove = jv.bind(a)),
    (a.onTouchEnd = Ev.bind(a)),
    (a.onDocumentTouchStart = Av.bind(a)),
    e.cssMode && (a.onScroll = bv.bind(a)),
    (a.onClick = wv.bind(a)),
    (a.onLoad = yv.bind(a)),
    up(a, "on");
}
function Ov() {
  up(this, "off");
}
var Cv = { attachEvents: Tv, detachEvents: Ov };
const Id = (a, e) => a.grid && e.grid && e.grid.rows > 1;
function Pv() {
  const a = this,
    { realIndex: e, initialized: s, params: r, el: i } = a,
    n = r.breakpoints;
  if (!n || (n && Object.keys(n).length === 0)) return;
  const o = a.getBreakpoint(n, a.params.breakpointsBase, a.el);
  if (!o || a.currentBreakpoint === o) return;
  const l = (o in n ? n[o] : void 0) || a.originalParams,
    p = Id(a, r),
    c = Id(a, l),
    u = r.enabled;
  p && !c
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      a.emitContainerClasses())
    : !p &&
      c &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      a.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      if (typeof l[g] > "u") return;
      const f = r[g] && r[g].enabled,
        h = l[g] && l[g].enabled;
      f && !h && a[g].disable(), !f && h && a[g].enable();
    });
  const m = l.direction && l.direction !== r.direction,
    v = r.loop && (l.slidesPerView !== r.slidesPerView || m),
    S = r.loop;
  m && s && a.changeDirection(), Re(a.params, l);
  const x = a.params.enabled,
    j = a.params.loop;
  Object.assign(a, {
    allowTouchMove: a.params.allowTouchMove,
    allowSlideNext: a.params.allowSlideNext,
    allowSlidePrev: a.params.allowSlidePrev,
  }),
    u && !x ? a.disable() : !u && x && a.enable(),
    (a.currentBreakpoint = o),
    a.emit("_beforeBreakpoint", l),
    s &&
      (v
        ? (a.loopDestroy(), a.loopCreate(e), a.updateSlides())
        : !S && j
        ? (a.loopCreate(e), a.updateSlides())
        : S && !j && a.loopDestroy()),
    a.emit("breakpoint", l);
}
function Mv(a, e, s) {
  if ((e === void 0 && (e = "window"), !a || (e === "container" && !s))) return;
  let r = !1;
  const i = se(),
    n = e === "window" ? i.innerHeight : s.clientHeight,
    o = Object.keys(a).map((d) => {
      if (typeof d == "string" && d.indexOf("@") === 0) {
        const l = parseFloat(d.substr(1));
        return { value: n * l, point: d };
      }
      return { value: d, point: d };
    });
  o.sort((d, l) => parseInt(d.value, 10) - parseInt(l.value, 10));
  for (let d = 0; d < o.length; d += 1) {
    const { point: l, value: p } = o[d];
    e === "window"
      ? i.matchMedia(`(min-width: ${p}px)`).matches && (r = l)
      : p <= s.clientWidth && (r = l);
  }
  return r || "max";
}
var Iv = { setBreakpoint: Pv, getBreakpoint: Mv };
function zv(a, e) {
  const s = [];
  return (
    a.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && s.push(e + i);
          })
        : typeof r == "string" && s.push(e + r);
    }),
    s
  );
}
function Rv() {
  const a = this,
    { classNames: e, params: s, rtl: r, el: i, device: n } = a,
    o = zv(
      [
        "initialized",
        s.direction,
        { "free-mode": a.params.freeMode && s.freeMode.enabled },
        { autoheight: s.autoHeight },
        { rtl: r },
        { grid: s.grid && s.grid.rows > 1 },
        {
          "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column",
        },
        { android: n.android },
        { ios: n.ios },
        { "css-mode": s.cssMode },
        { centered: s.cssMode && s.centeredSlides },
        { "watch-progress": s.watchSlidesProgress },
      ],
      s.containerModifierClass
    );
  e.push(...o), i.classList.add(...e), a.emitContainerClasses();
}
function Nv() {
  const a = this,
    { el: e, classNames: s } = a;
  e.classList.remove(...s), a.emitContainerClasses();
}
var Dv = { addClasses: Rv, removeClasses: Nv };
function qv() {
  const a = this,
    { isLocked: e, params: s } = a,
    { slidesOffsetBefore: r } = s;
  if (r) {
    const i = a.slides.length - 1,
      n = a.slidesGrid[i] + a.slidesSizesGrid[i] + r * 2;
    a.isLocked = a.size > n;
  } else a.isLocked = a.snapGrid.length === 1;
  s.allowSlideNext === !0 && (a.allowSlideNext = !a.isLocked),
    s.allowSlidePrev === !0 && (a.allowSlidePrev = !a.isLocked),
    e && e !== a.isLocked && (a.isEnd = !1),
    e !== a.isLocked && a.emit(a.isLocked ? "lock" : "unlock");
}
var Lv = { checkOverflow: qv },
  Kt = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function kv(a, e) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      n = r[i];
    if (typeof n != "object" || n === null) {
      Re(e, r);
      return;
    }
    if (
      (a[i] === !0 && (a[i] = { enabled: !0 }),
      i === "navigation" &&
        a[i] &&
        a[i].enabled &&
        !a[i].prevEl &&
        !a[i].nextEl &&
        (a[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        a[i] &&
        a[i].enabled &&
        !a[i].el &&
        (a[i].auto = !0),
      !(i in a && "enabled" in n))
    ) {
      Re(e, r);
      return;
    }
    typeof a[i] == "object" && !("enabled" in a[i]) && (a[i].enabled = !0),
      a[i] || (a[i] = { enabled: !1 }),
      Re(e, r);
  };
}
const en = {
    eventsEmitter: Dg,
    update: Hg,
    translate: Kg,
    transition: sv,
    slide: uv,
    loop: fv,
    grabCursor: vv,
    events: Cv,
    breakpoints: Iv,
    checkOverflow: Lv,
    classes: Dv,
  },
  an = {};
let $r = class na {
  constructor() {
    let e, s;
    for (var r = arguments.length, i = new Array(r), n = 0; n < r; n++)
      i[n] = arguments[n];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (s = i[0])
      : ([e, s] = i),
      s || (s = {}),
      (s = Re({}, s)),
      e && !s.el && (s.el = e);
    const o = be();
    if (
      s.el &&
      typeof s.el == "string" &&
      o.querySelectorAll(s.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(s.el).forEach((u) => {
          const m = Re({}, s, { el: u });
          c.push(new na(m));
        }),
        c
      );
    }
    const d = this;
    (d.__swiper__ = !0),
      (d.support = lp()),
      (d.device = Mg({ userAgent: s.userAgent })),
      (d.browser = zg()),
      (d.eventsListeners = {}),
      (d.eventsAnyListeners = []),
      (d.modules = [...d.__modules__]),
      s.modules && Array.isArray(s.modules) && d.modules.push(...s.modules);
    const l = {};
    d.modules.forEach((c) => {
      c({
        params: s,
        swiper: d,
        extendParams: kv(s, l),
        on: d.on.bind(d),
        once: d.once.bind(d),
        off: d.off.bind(d),
        emit: d.emit.bind(d),
      });
    });
    const p = Re({}, Kt, l);
    return (
      (d.params = Re({}, p, an, s)),
      (d.originalParams = Re({}, d.params)),
      (d.passedParams = Re({}, s)),
      d.params &&
        d.params.on &&
        Object.keys(d.params.on).forEach((c) => {
          d.on(c, d.params.on[c]);
        }),
      d.params && d.params.onAny && d.onAny(d.params.onAny),
      Object.assign(d, {
        enabled: d.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return d.params.direction === "horizontal";
        },
        isVertical() {
          return d.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: d.params.allowSlideNext,
        allowSlidePrev: d.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: d.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: d.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      d.emit("_swiper"),
      d.params.init && d.init(),
      d
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: s, params: r } = this,
      i = me(s, `.${r.slideClass}, swiper-slide`),
      n = Dr(i[0]);
    return Dr(e) - n;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (s) => s.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: s, params: r } = e;
    e.slides = me(s, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, s) {
    const r = this;
    e = Math.min(Math.max(e, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * e + i;
    r.translateTo(o, typeof s > "u" ? 0 : s),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const s = e.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", s.join(" "));
  }
  getSlideClasses(e) {
    const s = this;
    return s.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(s.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const s = [];
    e.slides.forEach((r) => {
      const i = e.getSlideClasses(r);
      s.push({ slideEl: r, classNames: i }), e.emit("_slideClass", r, i);
    }),
      e.emit("_slideClasses", s);
  }
  slidesPerViewDynamic(e, s) {
    e === void 0 && (e = "current"), s === void 0 && (s = !1);
    const r = this,
      {
        params: i,
        slides: n,
        slidesGrid: o,
        slidesSizesGrid: d,
        size: l,
        activeIndex: p,
      } = r;
    let c = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let u = n[p] ? n[p].swiperSlideSize : 0,
        m;
      for (let v = p + 1; v < n.length; v += 1)
        n[v] &&
          !m &&
          ((u += n[v].swiperSlideSize), (c += 1), u > l && (m = !0));
      for (let v = p - 1; v >= 0; v -= 1)
        n[v] &&
          !m &&
          ((u += n[v].swiperSlideSize), (c += 1), u > l && (m = !0));
    } else if (e === "current")
      for (let u = p + 1; u < n.length; u += 1)
        (s ? o[u] + d[u] - o[p] < l : o[u] - o[p] < l) && (c += 1);
    else for (let u = p - 1; u >= 0; u -= 1) o[p] - o[u] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: s, params: r } = e;
    r.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && wt(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function i() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        d = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let n;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && e.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        e.isEnd &&
        !r.centeredSlides
      ) {
        const o = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
        n = e.slideTo(o.length - 1, 0, !1, !0);
      } else n = e.slideTo(e.activeIndex, 0, !1, !0);
      n || i();
    }
    r.watchOverflow && s !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, s) {
    s === void 0 && (s = !0);
    const r = this,
      i = r.params.direction;
    return (
      e || (e = i === "horizontal" ? "vertical" : "horizontal"),
      e === i ||
        (e !== "horizontal" && e !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${e}`),
        r.emitContainerClasses(),
        (r.params.direction = e),
        r.slides.forEach((n) => {
          e === "vertical" ? (n.style.width = "") : (n.style.height = "");
        }),
        r.emit("changeDirection"),
        s && r.update()),
      r
    );
  }
  changeLanguageDirection(e) {
    const s = this;
    (s.rtl && e === "rtl") ||
      (!s.rtl && e === "ltr") ||
      ((s.rtl = e === "rtl"),
      (s.rtlTranslate = s.params.direction === "horizontal" && s.rtl),
      s.rtl
        ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`),
          (s.el.dir = "rtl"))
        : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`),
          (s.el.dir = "ltr")),
      s.update());
  }
  mount(e) {
    const s = this;
    if (s.mounted) return !0;
    let r = e || s.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = s),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (s.isElement = !0);
    const i = () =>
      `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() =>
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : me(r, i())[0])();
    return (
      !o &&
        s.params.createElements &&
        ((o = De("div", s.params.wrapperClass)),
        r.append(o),
        me(r, `.${s.params.slideClass}`).forEach((d) => {
          o.append(d);
        })),
      Object.assign(s, {
        el: r,
        wrapperEl: o,
        slidesEl:
          s.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: s.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Ca(r, "direction") === "rtl",
        rtlTranslate:
          s.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Ca(r, "direction") === "rtl"),
        wrongRTL: Ca(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const s = this;
    if (s.initialized || s.mount(e) === !1) return s;
    s.emit("beforeInit"),
      s.params.breakpoints && s.setBreakpoint(),
      s.addClasses(),
      s.updateSize(),
      s.updateSlides(),
      s.params.watchOverflow && s.checkOverflow(),
      s.params.grabCursor && s.enabled && s.setGrabCursor(),
      s.params.loop && s.virtual && s.params.virtual.enabled
        ? s.slideTo(
            s.params.initialSlide + s.virtual.slidesBefore,
            0,
            s.params.runCallbacksOnInit,
            !1,
            !0
          )
        : s.slideTo(
            s.params.initialSlide,
            0,
            s.params.runCallbacksOnInit,
            !1,
            !0
          ),
      s.params.loop && s.loopCreate(),
      s.attachEvents();
    const i = [...s.el.querySelectorAll('[loading="lazy"]')];
    return (
      s.isElement && i.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((n) => {
        n.complete
          ? wt(s, n)
          : n.addEventListener("load", (o) => {
              wt(s, o.target);
            });
      }),
      ao(s),
      (s.initialized = !0),
      ao(s),
      s.emit("init"),
      s.emit("afterInit"),
      s
    );
  }
  destroy(e, s) {
    e === void 0 && (e = !0), s === void 0 && (s = !0);
    const r = this,
      { params: i, el: n, wrapperEl: o, slides: d } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        s &&
          (r.removeClasses(),
          n.removeAttribute("style"),
          o.removeAttribute("style"),
          d &&
            d.length &&
            d.forEach((l) => {
              l.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        e !== !1 && ((r.el.swiper = null), bg(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    Re(an, e);
  }
  static get extendedDefaults() {
    return an;
  }
  static get defaults() {
    return Kt;
  }
  static installModule(e) {
    na.prototype.__modules__ || (na.prototype.__modules__ = []);
    const s = na.prototype.__modules__;
    typeof e == "function" && s.indexOf(e) < 0 && s.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((s) => na.installModule(s)), na)
      : (na.installModule(e), na);
  }
};
Object.keys(en).forEach((a) => {
  Object.keys(en[a]).forEach((e) => {
    $r.prototype[e] = en[a][e];
  });
});
$r.use([Rg, Ng]);
const Vs = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function va(a) {
  return (
    typeof a == "object" &&
    a !== null &&
    a.constructor &&
    Object.prototype.toString.call(a).slice(8, -1) === "Object" &&
    !a.__swiper__
  );
}
function ka(a, e) {
  const s = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((r) => s.indexOf(r) < 0)
    .forEach((r) => {
      typeof a[r] > "u"
        ? (a[r] = e[r])
        : va(e[r]) && va(a[r]) && Object.keys(e[r]).length > 0
        ? e[r].__swiper__
          ? (a[r] = e[r])
          : ka(a[r], e[r])
        : (a[r] = e[r]);
    });
}
function al(a) {
  return (
    a === void 0 && (a = {}),
    a.navigation &&
      typeof a.navigation.nextEl > "u" &&
      typeof a.navigation.prevEl > "u"
  );
}
function sl(a) {
  return a === void 0 && (a = {}), a.pagination && typeof a.pagination.el > "u";
}
function rl(a) {
  return a === void 0 && (a = {}), a.scrollbar && typeof a.scrollbar.el > "u";
}
function cp(a) {
  a === void 0 && (a = "");
  const e = a
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    s = [];
  return (
    e.forEach((r) => {
      s.indexOf(r) < 0 && s.push(r);
    }),
    s.join(" ")
  );
}
function bt(a) {
  return (
    a === void 0 && (a = ""),
    a.replace(/-[a-z]/g, (e) => e.toUpperCase().replace("-", ""))
  );
}
function _v(a) {
  return (
    a === void 0 && (a = ""),
    a
      ? a.includes("swiper-wrapper")
        ? a
        : `swiper-wrapper ${a}`
      : "swiper-wrapper"
  );
}
function pp(a) {
  let {
    swiper: e,
    slides: s,
    passedParams: r,
    changedParams: i,
    nextEl: n,
    prevEl: o,
    scrollbarEl: d,
    paginationEl: l,
  } = a;
  const p = i.filter(
      (T) => T !== "children" && T !== "direction" && T !== "wrapperClass"
    ),
    {
      params: c,
      pagination: u,
      navigation: m,
      scrollbar: v,
      virtual: S,
      thumbs: x,
    } = e;
  let j, g, f, h, E, b, y, z;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    c.thumbs &&
    !c.thumbs.swiper &&
    (j = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      c.controller &&
      !c.controller.control &&
      (g = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      u &&
      !u.el &&
      (f = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || d) &&
      (c.scrollbar || c.scrollbar === !1) &&
      v &&
      !v.el &&
      (h = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || n) &&
      (c.navigation || c.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (E = !0);
  const C = (T) => {
    e[T] &&
      (e[T].destroy(),
      T === "navigation"
        ? (e.isElement && (e[T].prevEl.remove(), e[T].nextEl.remove()),
          (c[T].prevEl = void 0),
          (c[T].nextEl = void 0),
          (e[T].prevEl = void 0),
          (e[T].nextEl = void 0))
        : (e.isElement && e[T].el.remove(),
          (c[T].el = void 0),
          (e[T].el = void 0)));
  };
  i.includes("loop") &&
    e.isElement &&
    (c.loop && !r.loop ? (b = !0) : !c.loop && r.loop ? (y = !0) : (z = !0)),
    p.forEach((T) => {
      if (va(c[T]) && va(r[T]))
        Object.assign(c[T], r[T]),
          (T === "navigation" || T === "pagination" || T === "scrollbar") &&
            "enabled" in r[T] &&
            !r[T].enabled &&
            C(T);
      else {
        const O = r[T];
        (O === !0 || O === !1) &&
        (T === "navigation" || T === "pagination" || T === "scrollbar")
          ? O === !1 && C(T)
          : (c[T] = r[T]);
      }
    }),
    p.includes("controller") &&
      !g &&
      e.controller &&
      e.controller.control &&
      c.controller &&
      c.controller.control &&
      (e.controller.control = c.controller.control),
    i.includes("children") && s && S && c.virtual.enabled
      ? ((S.slides = s), S.update(!0))
      : i.includes("virtual") &&
        S &&
        c.virtual.enabled &&
        (s && (S.slides = s), S.update(!0)),
    i.includes("children") && s && c.loop && (z = !0),
    j && x.init() && x.update(!0),
    g && (e.controller.control = c.controller.control),
    f &&
      (e.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-pagination"),
        l.part.add("pagination"),
        e.el.appendChild(l)),
      l && (c.pagination.el = l),
      u.init(),
      u.render(),
      u.update()),
    h &&
      (e.isElement &&
        (!d || typeof d == "string") &&
        ((d = document.createElement("div")),
        d.classList.add("swiper-scrollbar"),
        d.part.add("scrollbar"),
        e.el.appendChild(d)),
      d && (c.scrollbar.el = d),
      v.init(),
      v.updateSize(),
      v.setTranslate()),
    E &&
      (e.isElement &&
        ((!n || typeof n == "string") &&
          ((n = document.createElement("div")),
          n.classList.add("swiper-button-next"),
          (n.innerHTML = e.hostEl.constructor.nextButtonSvg),
          n.part.add("button-next"),
          e.el.appendChild(n)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = e.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          e.el.appendChild(o))),
      n && (c.navigation.nextEl = n),
      o && (c.navigation.prevEl = o),
      m.init(),
      m.update()),
    i.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && e.changeDirection(r.direction, !1),
    (b || z) && e.loopDestroy(),
    (y || z) && e.loopCreate(),
    e.update();
}
function Uv(a, e) {
  a === void 0 && (a = {}), e === void 0 && (e = !0);
  const s = { on: {} },
    r = {},
    i = {};
  ka(s, Kt), (s._emitClasses = !0), (s.init = !1);
  const n = {},
    o = Vs.map((l) => l.replace(/_/, "")),
    d = Object.assign({}, a);
  return (
    Object.keys(d).forEach((l) => {
      typeof a[l] > "u" ||
        (o.indexOf(l) >= 0
          ? va(a[l])
            ? ((s[l] = {}), (i[l] = {}), ka(s[l], a[l]), ka(i[l], a[l]))
            : ((s[l] = a[l]), (i[l] = a[l]))
          : l.search(/on[A-Z]/) === 0 && typeof a[l] == "function"
          ? e
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = a[l])
            : (s.on[`${l[2].toLowerCase()}${l.substr(3)}`] = a[l])
          : (n[l] = a[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      s[l] === !0 && (s[l] = {}), s[l] === !1 && delete s[l];
    }),
    { params: s, passedParams: i, rest: n, events: r }
  );
}
function Vv(a, e) {
  let {
    el: s,
    nextEl: r,
    prevEl: i,
    paginationEl: n,
    scrollbarEl: o,
    swiper: d,
  } = a;
  al(e) &&
    r &&
    i &&
    ((d.params.navigation.nextEl = r),
    (d.originalParams.navigation.nextEl = r),
    (d.params.navigation.prevEl = i),
    (d.originalParams.navigation.prevEl = i)),
    sl(e) &&
      n &&
      ((d.params.pagination.el = n), (d.originalParams.pagination.el = n)),
    rl(e) &&
      o &&
      ((d.params.scrollbar.el = o), (d.originalParams.scrollbar.el = o)),
    d.init(s);
}
function $v(a, e, s, r, i) {
  const n = [];
  if (!e) return n;
  const o = (l) => {
    n.indexOf(l) < 0 && n.push(l);
  };
  if (s && r) {
    const l = r.map(i),
      p = s.map(i);
    l.join("") !== p.join("") && o("children"),
      r.length !== s.length && o("children");
  }
  return (
    Vs.filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in a && l in e)
          if (va(a[l]) && va(e[l])) {
            const p = Object.keys(a[l]),
              c = Object.keys(e[l]);
            p.length !== c.length
              ? o(l)
              : (p.forEach((u) => {
                  a[l][u] !== e[l][u] && o(l);
                }),
                c.forEach((u) => {
                  a[l][u] !== e[l][u] && o(l);
                }));
          } else a[l] !== e[l] && o(l);
      }),
    n
  );
}
const Bv = (a) => {
  !a ||
    a.destroyed ||
    !a.params.virtual ||
    (a.params.virtual && !a.params.virtual.enabled) ||
    (a.updateSlides(),
    a.updateProgress(),
    a.updateSlidesClasses(),
    a.parallax &&
      a.params.parallax &&
      a.params.parallax.enabled &&
      a.parallax.setTranslate());
};
function Jt() {
  return (
    (Jt = Object.assign
      ? Object.assign.bind()
      : function (a) {
          for (var e = 1; e < arguments.length; e++) {
            var s = arguments[e];
            for (var r in s)
              Object.prototype.hasOwnProperty.call(s, r) && (a[r] = s[r]);
          }
          return a;
        }),
    Jt.apply(this, arguments)
  );
}
function mp(a) {
  return (
    a.type && a.type.displayName && a.type.displayName.includes("SwiperSlide")
  );
}
function fp(a) {
  const e = [];
  return (
    re.Children.toArray(a).forEach((s) => {
      mp(s)
        ? e.push(s)
        : s.props &&
          s.props.children &&
          fp(s.props.children).forEach((r) => e.push(r));
    }),
    e
  );
}
function Fv(a) {
  const e = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    re.Children.toArray(a).forEach((r) => {
      if (mp(r)) e.push(r);
      else if (r.props && r.props.slot && s[r.props.slot])
        s[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = fp(r.props.children);
        i.length > 0 ? i.forEach((n) => e.push(n)) : s["container-end"].push(r);
      } else s["container-end"].push(r);
    }),
    { slides: e, slots: s }
  );
}
function Gv(a, e, s) {
  if (!s) return null;
  const r = (c) => {
      let u = c;
      return (
        c < 0 ? (u = e.length + c) : u >= e.length && (u = u - e.length), u
      );
    },
    i = a.isHorizontal()
      ? { [a.rtlTranslate ? "right" : "left"]: `${s.offset}px` }
      : { top: `${s.offset}px` },
    { from: n, to: o } = s,
    d = a.params.loop ? -e.length : 0,
    l = a.params.loop ? e.length * 2 : e.length,
    p = [];
  for (let c = d; c < l; c += 1) c >= n && c <= o && p.push(e[r(c)]);
  return p.map((c, u) =>
    re.cloneElement(c, { swiper: a, style: i, key: `slide-${u}` })
  );
}
function hr(a, e) {
  return typeof window > "u" ? _.useEffect(a, e) : _.useLayoutEffect(a, e);
}
const zd = _.createContext(null),
  Hv = _.createContext(null),
  hp = _.forwardRef(function (a, e) {
    let {
        className: s,
        tag: r = "div",
        wrapperTag: i = "div",
        children: n,
        onSwiper: o,
        ...d
      } = a === void 0 ? {} : a,
      l = !1;
    const [p, c] = _.useState("swiper"),
      [u, m] = _.useState(null),
      [v, S] = _.useState(!1),
      x = _.useRef(!1),
      j = _.useRef(null),
      g = _.useRef(null),
      f = _.useRef(null),
      h = _.useRef(null),
      E = _.useRef(null),
      b = _.useRef(null),
      y = _.useRef(null),
      z = _.useRef(null),
      { params: C, passedParams: T, rest: O, events: N } = Uv(d),
      { slides: R, slots: I } = Fv(n),
      w = () => {
        S(!v);
      };
    Object.assign(C.on, {
      _containerClasses(P, L) {
        c(L);
      },
    });
    const M = () => {
      Object.assign(C.on, N), (l = !0);
      const P = { ...C };
      if (
        (delete P.wrapperClass,
        (g.current = new $r(P)),
        g.current.virtual && g.current.params.virtual.enabled)
      ) {
        g.current.virtual.slides = R;
        const L = {
          cache: !1,
          slides: R,
          renderExternal: m,
          renderExternalUpdate: !1,
        };
        ka(g.current.params.virtual, L),
          ka(g.current.originalParams.virtual, L);
      }
    };
    j.current || M(), g.current && g.current.on("_beforeBreakpoint", w);
    const q = () => {
        l ||
          !N ||
          !g.current ||
          Object.keys(N).forEach((P) => {
            g.current.on(P, N[P]);
          });
      },
      D = () => {
        !N ||
          !g.current ||
          Object.keys(N).forEach((P) => {
            g.current.off(P, N[P]);
          });
      };
    _.useEffect(() => () => {
      g.current && g.current.off("_beforeBreakpoint", w);
    }),
      _.useEffect(() => {
        !x.current &&
          g.current &&
          (g.current.emitSlidesClasses(), (x.current = !0));
      }),
      hr(() => {
        if ((e && (e.current = j.current), !!j.current))
          return (
            g.current.destroyed && M(),
            Vv(
              {
                el: j.current,
                nextEl: E.current,
                prevEl: b.current,
                paginationEl: y.current,
                scrollbarEl: z.current,
                swiper: g.current,
              },
              C
            ),
            o && o(g.current),
            () => {
              g.current && !g.current.destroyed && g.current.destroy(!0, !1);
            }
          );
      }, []),
      hr(() => {
        q();
        const P = $v(T, f.current, R, h.current, (L) => L.key);
        return (
          (f.current = T),
          (h.current = R),
          P.length &&
            g.current &&
            !g.current.destroyed &&
            pp({
              swiper: g.current,
              slides: R,
              passedParams: T,
              changedParams: P,
              nextEl: E.current,
              prevEl: b.current,
              scrollbarEl: z.current,
              paginationEl: y.current,
            }),
          () => {
            D();
          }
        );
      }),
      hr(() => {
        Bv(g.current);
      }, [u]);
    function A() {
      return C.virtual
        ? Gv(g.current, R, u)
        : R.map((P, L) =>
            re.cloneElement(P, { swiper: g.current, swiperSlideIndex: L })
          );
    }
    return re.createElement(
      r,
      Jt({ ref: j, className: cp(`${p}${s ? ` ${s}` : ""}`) }, O),
      re.createElement(
        Hv.Provider,
        { value: g.current },
        I["container-start"],
        re.createElement(
          i,
          { className: _v(C.wrapperClass) },
          I["wrapper-start"],
          A(),
          I["wrapper-end"]
        ),
        al(C) &&
          re.createElement(
            re.Fragment,
            null,
            re.createElement("div", {
              ref: b,
              className: "swiper-button-prev",
            }),
            re.createElement("div", { ref: E, className: "swiper-button-next" })
          ),
        rl(C) &&
          re.createElement("div", { ref: z, className: "swiper-scrollbar" }),
        sl(C) &&
          re.createElement("div", { ref: y, className: "swiper-pagination" }),
        I["container-end"]
      )
    );
  });
hp.displayName = "Swiper";
const Ha = _.forwardRef(function (a, e) {
  let {
    tag: s = "div",
    children: r,
    className: i = "",
    swiper: n,
    zoom: o,
    lazy: d,
    virtualIndex: l,
    swiperSlideIndex: p,
    ...c
  } = a === void 0 ? {} : a;
  const u = _.useRef(null),
    [m, v] = _.useState("swiper-slide"),
    [S, x] = _.useState(!1);
  function j(E, b, y) {
    b === u.current && v(y);
  }
  hr(() => {
    if (
      (typeof p < "u" && (u.current.swiperSlideIndex = p),
      e && (e.current = u.current),
      !(!u.current || !n))
    ) {
      if (n.destroyed) {
        m !== "swiper-slide" && v("swiper-slide");
        return;
      }
      return (
        n.on("_slideClass", j),
        () => {
          n && n.off("_slideClass", j);
        }
      );
    }
  }),
    hr(() => {
      n && u.current && !n.destroyed && v(n.getSlideClasses(u.current));
    }, [n]);
  const g = {
      isActive: m.indexOf("swiper-slide-active") >= 0,
      isVisible: m.indexOf("swiper-slide-visible") >= 0,
      isPrev: m.indexOf("swiper-slide-prev") >= 0,
      isNext: m.indexOf("swiper-slide-next") >= 0,
    },
    f = () => (typeof r == "function" ? r(g) : r),
    h = () => {
      x(!0);
    };
  return re.createElement(
    s,
    Jt(
      {
        ref: u,
        className: cp(`${m}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: h,
      },
      c
    ),
    o &&
      re.createElement(
        zd.Provider,
        { value: g },
        re.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          f(),
          d &&
            !S &&
            re.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      re.createElement(
        zd.Provider,
        { value: g },
        f(),
        d &&
          !S &&
          re.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Ha.displayName = "SwiperSlide";
function Wv(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  s({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0,
    },
  });
  let n;
  const o = be();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: [],
  };
  const d = o.createElement("div");
  function l(S, x) {
    const j = e.params.virtual;
    if (j.cache && e.virtual.cache[x]) return e.virtual.cache[x];
    let g;
    return (
      j.renderSlide
        ? ((g = j.renderSlide.call(e, S, x)),
          typeof g == "string" && ((d.innerHTML = g), (g = d.children[0])))
        : e.isElement
        ? (g = De("swiper-slide"))
        : (g = De("div", e.params.slideClass)),
      g.setAttribute("data-swiper-slide-index", x),
      j.renderSlide || (g.innerHTML = S),
      j.cache && (e.virtual.cache[x] = g),
      g
    );
  }
  function p(S) {
    const {
        slidesPerView: x,
        slidesPerGroup: j,
        centeredSlides: g,
        loop: f,
      } = e.params,
      { addSlidesBefore: h, addSlidesAfter: E } = e.params.virtual,
      { from: b, to: y, slides: z, slidesGrid: C, offset: T } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const O = e.activeIndex || 0;
    let N;
    e.rtlTranslate ? (N = "right") : (N = e.isHorizontal() ? "left" : "top");
    let R, I;
    g
      ? ((R = Math.floor(x / 2) + j + E), (I = Math.floor(x / 2) + j + h))
      : ((R = x + (j - 1) + E), (I = (f ? x : j) + h));
    let w = O - I,
      M = O + R;
    f || ((w = Math.max(w, 0)), (M = Math.min(M, z.length - 1)));
    let q = (e.slidesGrid[w] || 0) - (e.slidesGrid[0] || 0);
    f && O >= I
      ? ((w -= I), g || (q += e.slidesGrid[0]))
      : f && O < I && ((w = -I), g && (q += e.slidesGrid[0])),
      Object.assign(e.virtual, {
        from: w,
        to: M,
        offset: q,
        slidesGrid: e.slidesGrid,
        slidesBefore: I,
        slidesAfter: R,
      });
    function D() {
      e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        i("virtualUpdate");
    }
    if (b === w && y === M && !S) {
      e.slidesGrid !== C &&
        q !== T &&
        e.slides.forEach((V) => {
          V.style[N] = `${q - Math.abs(e.cssOverflowAdjustment())}px`;
        }),
        e.updateProgress(),
        i("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: q,
        from: w,
        to: M,
        slides: (function () {
          const G = [];
          for (let ge = w; ge <= M; ge += 1) G.push(z[ge]);
          return G;
        })(),
      }),
        e.params.virtual.renderExternalUpdate ? D() : i("virtualUpdate");
      return;
    }
    const A = [],
      P = [],
      L = (V) => {
        let G = V;
        return (
          V < 0 ? (G = z.length + V) : G >= z.length && (G = G - z.length), G
        );
      };
    if (S)
      e.slides
        .filter((V) => V.matches(`.${e.params.slideClass}, swiper-slide`))
        .forEach((V) => {
          V.remove();
        });
    else
      for (let V = b; V <= y; V += 1)
        if (V < w || V > M) {
          const G = L(V);
          e.slides
            .filter((ge) =>
              ge.matches(
                `.${e.params.slideClass}[data-swiper-slide-index="${G}"], swiper-slide[data-swiper-slide-index="${G}"]`
              )
            )
            .forEach((ge) => {
              ge.remove();
            });
        }
    const $ = f ? -z.length : 0,
      F = f ? z.length * 2 : z.length;
    for (let V = $; V < F; V += 1)
      if (V >= w && V <= M) {
        const G = L(V);
        typeof y > "u" || S
          ? P.push(G)
          : (V > y && P.push(G), V < b && A.push(G));
      }
    if (
      (P.forEach((V) => {
        e.slidesEl.append(l(z[V], V));
      }),
      f)
    )
      for (let V = A.length - 1; V >= 0; V -= 1) {
        const G = A[V];
        e.slidesEl.prepend(l(z[G], G));
      }
    else
      A.sort((V, G) => G - V),
        A.forEach((V) => {
          e.slidesEl.prepend(l(z[V], V));
        });
    me(e.slidesEl, ".swiper-slide, swiper-slide").forEach((V) => {
      V.style[N] = `${q - Math.abs(e.cssOverflowAdjustment())}px`;
    }),
      D();
  }
  function c(S) {
    if (typeof S == "object" && "length" in S)
      for (let x = 0; x < S.length; x += 1) S[x] && e.virtual.slides.push(S[x]);
    else e.virtual.slides.push(S);
    p(!0);
  }
  function u(S) {
    const x = e.activeIndex;
    let j = x + 1,
      g = 1;
    if (Array.isArray(S)) {
      for (let f = 0; f < S.length; f += 1)
        S[f] && e.virtual.slides.unshift(S[f]);
      (j = x + S.length), (g = S.length);
    } else e.virtual.slides.unshift(S);
    if (e.params.virtual.cache) {
      const f = e.virtual.cache,
        h = {};
      Object.keys(f).forEach((E) => {
        const b = f[E],
          y = b.getAttribute("data-swiper-slide-index");
        y && b.setAttribute("data-swiper-slide-index", parseInt(y, 10) + g),
          (h[parseInt(E, 10) + g] = b);
      }),
        (e.virtual.cache = h);
    }
    p(!0), e.slideTo(j, 0);
  }
  function m(S) {
    if (typeof S > "u" || S === null) return;
    let x = e.activeIndex;
    if (Array.isArray(S))
      for (let j = S.length - 1; j >= 0; j -= 1)
        e.params.virtual.cache &&
          (delete e.virtual.cache[S[j]],
          Object.keys(e.virtual.cache).forEach((g) => {
            g > S &&
              ((e.virtual.cache[g - 1] = e.virtual.cache[g]),
              e.virtual.cache[g - 1].setAttribute(
                "data-swiper-slide-index",
                g - 1
              ),
              delete e.virtual.cache[g]);
          })),
          e.virtual.slides.splice(S[j], 1),
          S[j] < x && (x -= 1),
          (x = Math.max(x, 0));
    else
      e.params.virtual.cache &&
        (delete e.virtual.cache[S],
        Object.keys(e.virtual.cache).forEach((j) => {
          j > S &&
            ((e.virtual.cache[j - 1] = e.virtual.cache[j]),
            e.virtual.cache[j - 1].setAttribute(
              "data-swiper-slide-index",
              j - 1
            ),
            delete e.virtual.cache[j]);
        })),
        e.virtual.slides.splice(S, 1),
        S < x && (x -= 1),
        (x = Math.max(x, 0));
    p(!0), e.slideTo(x, 0);
  }
  function v() {
    (e.virtual.slides = []),
      e.params.virtual.cache && (e.virtual.cache = {}),
      p(!0),
      e.slideTo(0, 0);
  }
  r("beforeInit", () => {
    if (!e.params.virtual.enabled) return;
    let S;
    if (typeof e.passedParams.virtual.slides > "u") {
      const x = [...e.slidesEl.children].filter((j) =>
        j.matches(`.${e.params.slideClass}, swiper-slide`)
      );
      x &&
        x.length &&
        ((e.virtual.slides = [...x]),
        (S = !0),
        x.forEach((j, g) => {
          j.setAttribute("data-swiper-slide-index", g),
            (e.virtual.cache[g] = j),
            j.remove();
        }));
    }
    S || (e.virtual.slides = e.params.virtual.slides),
      e.classNames.push(`${e.params.containerModifierClass}virtual`),
      (e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0),
      p();
  }),
    r("setTranslate", () => {
      e.params.virtual.enabled &&
        (e.params.cssMode && !e._immediateVirtual
          ? (clearTimeout(n),
            (n = setTimeout(() => {
              p();
            }, 100)))
          : p());
    }),
    r("init update resize", () => {
      e.params.virtual.enabled &&
        e.params.cssMode &&
        tr(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
    }),
    Object.assign(e.virtual, {
      appendSlide: c,
      prependSlide: u,
      removeSlide: m,
      removeAllSlides: v,
      update: p,
    });
}
function Qv(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  const n = be(),
    o = se();
  (e.keyboard = { enabled: !1 }),
    s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } });
  function d(c) {
    if (!e.enabled) return;
    const { rtlTranslate: u } = e;
    let m = c;
    m.originalEvent && (m = m.originalEvent);
    const v = m.keyCode || m.charCode,
      S = e.params.keyboard.pageUpDown,
      x = S && v === 33,
      j = S && v === 34,
      g = v === 37,
      f = v === 39,
      h = v === 38,
      E = v === 40;
    if (
      (!e.allowSlideNext &&
        ((e.isHorizontal() && f) || (e.isVertical() && E) || j)) ||
      (!e.allowSlidePrev &&
        ((e.isHorizontal() && g) || (e.isVertical() && h) || x))
    )
      return !1;
    if (
      !(m.shiftKey || m.altKey || m.ctrlKey || m.metaKey) &&
      !(
        n.activeElement &&
        n.activeElement.nodeName &&
        (n.activeElement.nodeName.toLowerCase() === "input" ||
          n.activeElement.nodeName.toLowerCase() === "textarea")
      )
    ) {
      if (e.params.keyboard.onlyInViewport && (x || j || g || f || h || E)) {
        let b = !1;
        if (
          Ka(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
          Ka(e.el, `.${e.params.slideActiveClass}`).length === 0
        )
          return;
        const y = e.el,
          z = y.clientWidth,
          C = y.clientHeight,
          T = o.innerWidth,
          O = o.innerHeight,
          N = Zt(y);
        u && (N.left -= y.scrollLeft);
        const R = [
          [N.left, N.top],
          [N.left + z, N.top],
          [N.left, N.top + C],
          [N.left + z, N.top + C],
        ];
        for (let I = 0; I < R.length; I += 1) {
          const w = R[I];
          if (w[0] >= 0 && w[0] <= T && w[1] >= 0 && w[1] <= O) {
            if (w[0] === 0 && w[1] === 0) continue;
            b = !0;
          }
        }
        if (!b) return;
      }
      e.isHorizontal()
        ? ((x || j || g || f) &&
            (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
          (((j || f) && !u) || ((x || g) && u)) && e.slideNext(),
          (((x || g) && !u) || ((j || f) && u)) && e.slidePrev())
        : ((x || j || h || E) &&
            (m.preventDefault ? m.preventDefault() : (m.returnValue = !1)),
          (j || E) && e.slideNext(),
          (x || h) && e.slidePrev()),
        i("keyPress", v);
    }
  }
  function l() {
    e.keyboard.enabled ||
      (n.addEventListener("keydown", d), (e.keyboard.enabled = !0));
  }
  function p() {
    e.keyboard.enabled &&
      (n.removeEventListener("keydown", d), (e.keyboard.enabled = !1));
  }
  r("init", () => {
    e.params.keyboard.enabled && l();
  }),
    r("destroy", () => {
      e.keyboard.enabled && p();
    }),
    Object.assign(e.keyboard, { enable: l, disable: p });
}
function Xv(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  const n = se();
  s({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel",
    },
  }),
    (e.mousewheel = { enabled: !1 });
  let o,
    d = Be(),
    l;
  const p = [];
  function c(h) {
    let z = 0,
      C = 0,
      T = 0,
      O = 0;
    return (
      "detail" in h && (C = h.detail),
      "wheelDelta" in h && (C = -h.wheelDelta / 120),
      "wheelDeltaY" in h && (C = -h.wheelDeltaY / 120),
      "wheelDeltaX" in h && (z = -h.wheelDeltaX / 120),
      "axis" in h && h.axis === h.HORIZONTAL_AXIS && ((z = C), (C = 0)),
      (T = z * 10),
      (O = C * 10),
      "deltaY" in h && (O = h.deltaY),
      "deltaX" in h && (T = h.deltaX),
      h.shiftKey && !T && ((T = O), (O = 0)),
      (T || O) &&
        h.deltaMode &&
        (h.deltaMode === 1 ? ((T *= 40), (O *= 40)) : ((T *= 800), (O *= 800))),
      T && !z && (z = T < 1 ? -1 : 1),
      O && !C && (C = O < 1 ? -1 : 1),
      { spinX: z, spinY: C, pixelX: T, pixelY: O }
    );
  }
  function u() {
    e.enabled && (e.mouseEntered = !0);
  }
  function m() {
    e.enabled && (e.mouseEntered = !1);
  }
  function v(h) {
    return (e.params.mousewheel.thresholdDelta &&
      h.delta < e.params.mousewheel.thresholdDelta) ||
      (e.params.mousewheel.thresholdTime &&
        Be() - d < e.params.mousewheel.thresholdTime)
      ? !1
      : h.delta >= 6 && Be() - d < 60
      ? !0
      : (h.direction < 0
          ? (!e.isEnd || e.params.loop) &&
            !e.animating &&
            (e.slideNext(), i("scroll", h.raw))
          : (!e.isBeginning || e.params.loop) &&
            !e.animating &&
            (e.slidePrev(), i("scroll", h.raw)),
        (d = new n.Date().getTime()),
        !1);
  }
  function S(h) {
    const E = e.params.mousewheel;
    if (h.direction < 0) {
      if (e.isEnd && !e.params.loop && E.releaseOnEdges) return !0;
    } else if (e.isBeginning && !e.params.loop && E.releaseOnEdges) return !0;
    return !1;
  }
  function x(h) {
    let E = h,
      b = !0;
    if (
      !e.enabled ||
      h.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
    )
      return;
    const y = e.params.mousewheel;
    e.params.cssMode && E.preventDefault();
    let z = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (z = document.querySelector(e.params.mousewheel.eventsTarget));
    const C = z && z.contains(E.target);
    if (!e.mouseEntered && !C && !y.releaseOnEdges) return !0;
    E.originalEvent && (E = E.originalEvent);
    let T = 0;
    const O = e.rtlTranslate ? -1 : 1,
      N = c(E);
    if (y.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(N.pixelX) > Math.abs(N.pixelY)) T = -N.pixelX * O;
        else return !0;
      else if (Math.abs(N.pixelY) > Math.abs(N.pixelX)) T = -N.pixelY;
      else return !0;
    else
      T = Math.abs(N.pixelX) > Math.abs(N.pixelY) ? -N.pixelX * O : -N.pixelY;
    if (T === 0) return !0;
    y.invert && (T = -T);
    let R = e.getTranslate() + T * y.sensitivity;
    if (
      (R >= e.minTranslate() && (R = e.minTranslate()),
      R <= e.maxTranslate() && (R = e.maxTranslate()),
      (b = e.params.loop
        ? !0
        : !(R === e.minTranslate() || R === e.maxTranslate())),
      b && e.params.nested && E.stopPropagation(),
      !e.params.freeMode || !e.params.freeMode.enabled)
    ) {
      const I = {
        time: Be(),
        delta: Math.abs(T),
        direction: Math.sign(T),
        raw: h,
      };
      p.length >= 2 && p.shift();
      const w = p.length ? p[p.length - 1] : void 0;
      if (
        (p.push(I),
        w
          ? (I.direction !== w.direction ||
              I.delta > w.delta ||
              I.time > w.time + 150) &&
            v(I)
          : v(I),
        S(I))
      )
        return !0;
    } else {
      const I = { time: Be(), delta: Math.abs(T), direction: Math.sign(T) },
        w =
          l &&
          I.time < l.time + 500 &&
          I.delta <= l.delta &&
          I.direction === l.direction;
      if (!w) {
        l = void 0;
        let M = e.getTranslate() + T * y.sensitivity;
        const q = e.isBeginning,
          D = e.isEnd;
        if (
          (M >= e.minTranslate() && (M = e.minTranslate()),
          M <= e.maxTranslate() && (M = e.maxTranslate()),
          e.setTransition(0),
          e.setTranslate(M),
          e.updateProgress(),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          ((!q && e.isBeginning) || (!D && e.isEnd)) && e.updateSlidesClasses(),
          e.params.loop &&
            e.loopFix({
              direction: I.direction < 0 ? "next" : "prev",
              byMousewheel: !0,
            }),
          e.params.freeMode.sticky)
        ) {
          clearTimeout(o), (o = void 0), p.length >= 15 && p.shift();
          const A = p.length ? p[p.length - 1] : void 0,
            P = p[0];
          if (
            (p.push(I), A && (I.delta > A.delta || I.direction !== A.direction))
          )
            p.splice(0);
          else if (
            p.length >= 15 &&
            I.time - P.time < 500 &&
            P.delta - I.delta >= 1 &&
            I.delta <= 6
          ) {
            const L = T > 0 ? 0.8 : 0.2;
            (l = I),
              p.splice(0),
              (o = ts(() => {
                e.slideToClosest(e.params.speed, !0, void 0, L);
              }, 0));
          }
          o ||
            (o = ts(() => {
              (l = I),
                p.splice(0),
                e.slideToClosest(e.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (w || i("scroll", E),
          e.params.autoplay &&
            e.params.autoplayDisableOnInteraction &&
            e.autoplay.stop(),
          y.releaseOnEdges &&
            (M === e.minTranslate() || M === e.maxTranslate()))
        )
          return !0;
      }
    }
    return E.preventDefault ? E.preventDefault() : (E.returnValue = !1), !1;
  }
  function j(h) {
    let E = e.el;
    e.params.mousewheel.eventsTarget !== "container" &&
      (E = document.querySelector(e.params.mousewheel.eventsTarget)),
      E[h]("mouseenter", u),
      E[h]("mouseleave", m),
      E[h]("wheel", x);
  }
  function g() {
    return e.params.cssMode
      ? (e.wrapperEl.removeEventListener("wheel", x), !0)
      : e.mousewheel.enabled
      ? !1
      : (j("addEventListener"), (e.mousewheel.enabled = !0), !0);
  }
  function f() {
    return e.params.cssMode
      ? (e.wrapperEl.addEventListener(event, x), !0)
      : e.mousewheel.enabled
      ? (j("removeEventListener"), (e.mousewheel.enabled = !1), !0)
      : !1;
  }
  r("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && f(),
      e.params.mousewheel.enabled && g();
  }),
    r("destroy", () => {
      e.params.cssMode && g(), e.mousewheel.enabled && f();
    }),
    Object.assign(e.mousewheel, { enable: g, disable: f });
}
function tl(a, e, s, r) {
  return (
    a.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!s[i] && s.auto === !0) {
          let n = me(a.el, `.${r[i]}`)[0];
          n || ((n = De("div", r[i])), (n.className = r[i]), a.el.append(n)),
            (s[i] = n),
            (e[i] = n);
        }
      }),
    s
  );
}
function Yv(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  s({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  const n = (x) => (Array.isArray(x) ? x : [x]).filter((j) => !!j);
  function o(x) {
    let j;
    return x &&
      typeof x == "string" &&
      e.isElement &&
      ((j = e.el.querySelector(x)), j)
      ? j
      : (x &&
          (typeof x == "string" && (j = [...document.querySelectorAll(x)]),
          e.params.uniqueNavElements &&
            typeof x == "string" &&
            j.length > 1 &&
            e.el.querySelectorAll(x).length === 1 &&
            (j = e.el.querySelector(x))),
        x && !j ? x : j);
  }
  function d(x, j) {
    const g = e.params.navigation;
    (x = n(x)),
      x.forEach((f) => {
        f &&
          (f.classList[j ? "add" : "remove"](...g.disabledClass.split(" ")),
          f.tagName === "BUTTON" && (f.disabled = j),
          e.params.watchOverflow &&
            e.enabled &&
            f.classList[e.isLocked ? "add" : "remove"](g.lockClass));
      });
  }
  function l() {
    const { nextEl: x, prevEl: j } = e.navigation;
    if (e.params.loop) {
      d(j, !1), d(x, !1);
      return;
    }
    d(j, e.isBeginning && !e.params.rewind), d(x, e.isEnd && !e.params.rewind);
  }
  function p(x) {
    x.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), i("navigationPrev"));
  }
  function c(x) {
    x.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), i("navigationNext"));
  }
  function u() {
    const x = e.params.navigation;
    if (
      ((e.params.navigation = tl(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(x.nextEl || x.prevEl))
    )
      return;
    let j = o(x.nextEl),
      g = o(x.prevEl);
    Object.assign(e.navigation, { nextEl: j, prevEl: g }),
      (j = n(j)),
      (g = n(g));
    const f = (h, E) => {
      h && h.addEventListener("click", E === "next" ? c : p),
        !e.enabled && h && h.classList.add(...x.lockClass.split(" "));
    };
    j.forEach((h) => f(h, "next")), g.forEach((h) => f(h, "prev"));
  }
  function m() {
    let { nextEl: x, prevEl: j } = e.navigation;
    (x = n(x)), (j = n(j));
    const g = (f, h) => {
      f.removeEventListener("click", h === "next" ? c : p),
        f.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    x.forEach((f) => g(f, "next")), j.forEach((f) => g(f, "prev"));
  }
  r("init", () => {
    e.params.navigation.enabled === !1 ? S() : (u(), l());
  }),
    r("toEdge fromEdge lock unlock", () => {
      l();
    }),
    r("destroy", () => {
      m();
    }),
    r("enable disable", () => {
      let { nextEl: x, prevEl: j } = e.navigation;
      if (((x = n(x)), (j = n(j)), e.enabled)) {
        l();
        return;
      }
      [...x, ...j]
        .filter((g) => !!g)
        .forEach((g) => g.classList.add(e.params.navigation.lockClass));
    }),
    r("click", (x, j) => {
      let { nextEl: g, prevEl: f } = e.navigation;
      (g = n(g)), (f = n(f));
      const h = j.target;
      if (e.params.navigation.hideOnClick && !f.includes(h) && !g.includes(h)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === h || e.pagination.el.contains(h))
        )
          return;
        let E;
        g.length
          ? (E = g[0].classList.contains(e.params.navigation.hiddenClass))
          : f.length &&
            (E = f[0].classList.contains(e.params.navigation.hiddenClass)),
          i(E === !0 ? "navigationShow" : "navigationHide"),
          [...g, ...f]
            .filter((b) => !!b)
            .forEach((b) =>
              b.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const v = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        u(),
        l();
    },
    S = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        m();
    };
  Object.assign(e.navigation, {
    enable: v,
    disable: S,
    update: l,
    init: u,
    destroy: m,
  });
}
function da(a) {
  return (
    a === void 0 && (a = ""),
    `.${a
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function Zv(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  const n = "swiper-pagination";
  s({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (f) => f,
      formatFractionTotal: (f) => f,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] });
  let o,
    d = 0;
  const l = (f) => (Array.isArray(f) ? f : [f]).filter((h) => !!h);
  function p() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    );
  }
  function c(f, h) {
    const { bulletActiveClass: E } = e.params.pagination;
    f &&
      ((f = f[`${h === "prev" ? "previous" : "next"}ElementSibling`]),
      f &&
        (f.classList.add(`${E}-${h}`),
        (f = f[`${h === "prev" ? "previous" : "next"}ElementSibling`]),
        f && f.classList.add(`${E}-${h}-${h}`)));
  }
  function u(f) {
    const h = f.target.closest(da(e.params.pagination.bulletClass));
    if (!h) return;
    f.preventDefault();
    const E = Dr(h) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === E) return;
      e.slideToLoop(E);
    } else e.slideTo(E);
  }
  function m() {
    const f = e.rtl,
      h = e.params.pagination;
    if (p()) return;
    let E = e.pagination.el;
    E = l(E);
    let b, y;
    const z =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length,
      C = e.params.loop
        ? Math.ceil(z / e.params.slidesPerGroup)
        : e.snapGrid.length;
    if (
      (e.params.loop
        ? ((y = e.previousRealIndex || 0),
          (b =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex))
        : typeof e.snapIndex < "u"
        ? ((b = e.snapIndex), (y = e.previousSnapIndex))
        : ((y = e.previousIndex || 0), (b = e.activeIndex || 0)),
      h.type === "bullets" &&
        e.pagination.bullets &&
        e.pagination.bullets.length > 0)
    ) {
      const T = e.pagination.bullets;
      let O, N, R;
      if (
        (h.dynamicBullets &&
          ((o = eo(T[0], e.isHorizontal() ? "width" : "height", !0)),
          E.forEach((I) => {
            I.style[e.isHorizontal() ? "width" : "height"] = `${
              o * (h.dynamicMainBullets + 4)
            }px`;
          }),
          h.dynamicMainBullets > 1 &&
            y !== void 0 &&
            ((d += b - (y || 0)),
            d > h.dynamicMainBullets - 1
              ? (d = h.dynamicMainBullets - 1)
              : d < 0 && (d = 0)),
          (O = Math.max(b - d, 0)),
          (N = O + (Math.min(T.length, h.dynamicMainBullets) - 1)),
          (R = (N + O) / 2)),
        T.forEach((I) => {
          const w = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (M) => `${h.bulletActiveClass}${M}`
            ),
          ]
            .map((M) =>
              typeof M == "string" && M.includes(" ") ? M.split(" ") : M
            )
            .flat();
          I.classList.remove(...w);
        }),
        E.length > 1)
      )
        T.forEach((I) => {
          const w = Dr(I);
          w === b
            ? I.classList.add(...h.bulletActiveClass.split(" "))
            : e.isElement && I.setAttribute("part", "bullet"),
            h.dynamicBullets &&
              (w >= O &&
                w <= N &&
                I.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),
              w === O && c(I, "prev"),
              w === N && c(I, "next"));
        });
      else {
        const I = T[b];
        if (
          (I && I.classList.add(...h.bulletActiveClass.split(" ")),
          e.isElement &&
            T.forEach((w, M) => {
              w.setAttribute("part", M === b ? "bullet-active" : "bullet");
            }),
          h.dynamicBullets)
        ) {
          const w = T[O],
            M = T[N];
          for (let q = O; q <= N; q += 1)
            T[q] &&
              T[q].classList.add(...`${h.bulletActiveClass}-main`.split(" "));
          c(w, "prev"), c(M, "next");
        }
      }
      if (h.dynamicBullets) {
        const I = Math.min(T.length, h.dynamicMainBullets + 4),
          w = (o * I - o) / 2 - R * o,
          M = f ? "right" : "left";
        T.forEach((q) => {
          q.style[e.isHorizontal() ? M : "top"] = `${w}px`;
        });
      }
    }
    E.forEach((T, O) => {
      if (
        (h.type === "fraction" &&
          (T.querySelectorAll(da(h.currentClass)).forEach((N) => {
            N.textContent = h.formatFractionCurrent(b + 1);
          }),
          T.querySelectorAll(da(h.totalClass)).forEach((N) => {
            N.textContent = h.formatFractionTotal(C);
          })),
        h.type === "progressbar")
      ) {
        let N;
        h.progressbarOpposite
          ? (N = e.isHorizontal() ? "vertical" : "horizontal")
          : (N = e.isHorizontal() ? "horizontal" : "vertical");
        const R = (b + 1) / C;
        let I = 1,
          w = 1;
        N === "horizontal" ? (I = R) : (w = R),
          T.querySelectorAll(da(h.progressbarFillClass)).forEach((M) => {
            (M.style.transform = `translate3d(0,0,0) scaleX(${I}) scaleY(${w})`),
              (M.style.transitionDuration = `${e.params.speed}ms`);
          });
      }
      h.type === "custom" && h.renderCustom
        ? ((T.innerHTML = h.renderCustom(e, b + 1, C)),
          O === 0 && i("paginationRender", T))
        : (O === 0 && i("paginationRender", T), i("paginationUpdate", T)),
        e.params.watchOverflow &&
          e.enabled &&
          T.classList[e.isLocked ? "add" : "remove"](h.lockClass);
    });
  }
  function v() {
    const f = e.params.pagination;
    if (p()) return;
    const h =
      e.virtual && e.params.virtual.enabled
        ? e.virtual.slides.length
        : e.grid && e.params.grid.rows > 1
        ? e.slides.length / Math.ceil(e.params.grid.rows)
        : e.slides.length;
    let E = e.pagination.el;
    E = l(E);
    let b = "";
    if (f.type === "bullets") {
      let y = e.params.loop
        ? Math.ceil(h / e.params.slidesPerGroup)
        : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && y > h && (y = h);
      for (let z = 0; z < y; z += 1)
        f.renderBullet
          ? (b += f.renderBullet.call(e, z, f.bulletClass))
          : (b += `<${f.bulletElement} ${
              e.isElement ? 'part="bullet"' : ""
            } class="${f.bulletClass}"></${f.bulletElement}>`);
    }
    f.type === "fraction" &&
      (f.renderFraction
        ? (b = f.renderFraction.call(e, f.currentClass, f.totalClass))
        : (b = `<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`)),
      f.type === "progressbar" &&
        (f.renderProgressbar
          ? (b = f.renderProgressbar.call(e, f.progressbarFillClass))
          : (b = `<span class="${f.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      E.forEach((y) => {
        f.type !== "custom" && (y.innerHTML = b || ""),
          f.type === "bullets" &&
            e.pagination.bullets.push(...y.querySelectorAll(da(f.bulletClass)));
      }),
      f.type !== "custom" && i("paginationRender", E[0]);
  }
  function S() {
    e.params.pagination = tl(
      e,
      e.originalParams.pagination,
      e.params.pagination,
      { el: "swiper-pagination" }
    );
    const f = e.params.pagination;
    if (!f.el) return;
    let h;
    typeof f.el == "string" && e.isElement && (h = e.el.querySelector(f.el)),
      !h &&
        typeof f.el == "string" &&
        (h = [...document.querySelectorAll(f.el)]),
      h || (h = f.el),
      !(!h || h.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof f.el == "string" &&
          Array.isArray(h) &&
          h.length > 1 &&
          ((h = [...e.el.querySelectorAll(f.el)]),
          h.length > 1 &&
            (h = h.filter((E) => Ka(E, ".swiper")[0] === e.el)[0])),
        Array.isArray(h) && h.length === 1 && (h = h[0]),
        Object.assign(e.pagination, { el: h }),
        (h = l(h)),
        h.forEach((E) => {
          f.type === "bullets" &&
            f.clickable &&
            E.classList.add(...(f.clickableClass || "").split(" ")),
            E.classList.add(f.modifierClass + f.type),
            E.classList.add(
              e.isHorizontal() ? f.horizontalClass : f.verticalClass
            ),
            f.type === "bullets" &&
              f.dynamicBullets &&
              (E.classList.add(`${f.modifierClass}${f.type}-dynamic`),
              (d = 0),
              f.dynamicMainBullets < 1 && (f.dynamicMainBullets = 1)),
            f.type === "progressbar" &&
              f.progressbarOpposite &&
              E.classList.add(f.progressbarOppositeClass),
            f.clickable && E.addEventListener("click", u),
            e.enabled || E.classList.add(f.lockClass);
        }));
  }
  function x() {
    const f = e.params.pagination;
    if (p()) return;
    let h = e.pagination.el;
    h &&
      ((h = l(h)),
      h.forEach((E) => {
        E.classList.remove(f.hiddenClass),
          E.classList.remove(f.modifierClass + f.type),
          E.classList.remove(
            e.isHorizontal() ? f.horizontalClass : f.verticalClass
          ),
          f.clickable &&
            (E.classList.remove(...(f.clickableClass || "").split(" ")),
            E.removeEventListener("click", u));
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((E) =>
          E.classList.remove(...f.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const f = e.params.pagination;
    let { el: h } = e.pagination;
    (h = l(h)),
      h.forEach((E) => {
        E.classList.remove(f.horizontalClass, f.verticalClass),
          E.classList.add(
            e.isHorizontal() ? f.horizontalClass : f.verticalClass
          );
      });
  }),
    r("init", () => {
      e.params.pagination.enabled === !1 ? g() : (S(), v(), m());
    }),
    r("activeIndexChange", () => {
      typeof e.snapIndex > "u" && m();
    }),
    r("snapIndexChange", () => {
      m();
    }),
    r("snapGridLengthChange", () => {
      v(), m();
    }),
    r("destroy", () => {
      x();
    }),
    r("enable disable", () => {
      let { el: f } = e.pagination;
      f &&
        ((f = l(f)),
        f.forEach((h) =>
          h.classList[e.enabled ? "remove" : "add"](
            e.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      m();
    }),
    r("click", (f, h) => {
      const E = h.target,
        b = l(e.pagination.el);
      if (
        e.params.pagination.el &&
        e.params.pagination.hideOnClick &&
        b &&
        b.length > 0 &&
        !E.classList.contains(e.params.pagination.bulletClass)
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && E === e.navigation.nextEl) ||
            (e.navigation.prevEl && E === e.navigation.prevEl))
        )
          return;
        const y = b[0].classList.contains(e.params.pagination.hiddenClass);
        i(y === !0 ? "paginationShow" : "paginationHide"),
          b.forEach((z) => z.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
  const j = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let { el: f } = e.pagination;
      f &&
        ((f = l(f)),
        f.forEach((h) =>
          h.classList.remove(e.params.pagination.paginationDisabledClass)
        )),
        S(),
        v(),
        m();
    },
    g = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: f } = e.pagination;
      f &&
        ((f = l(f)),
        f.forEach((h) =>
          h.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        x();
    };
  Object.assign(e.pagination, {
    enable: j,
    disable: g,
    render: v,
    update: m,
    init: S,
    destroy: x,
  });
}
function Kv(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  const n = be();
  let o = !1,
    d = null,
    l = null,
    p,
    c,
    u,
    m;
  s({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical",
    },
  }),
    (e.scrollbar = { el: null, dragEl: null });
  function v() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: R, rtlTranslate: I } = e,
      { dragEl: w, el: M } = R,
      q = e.params.scrollbar,
      D = e.params.loop ? e.progressLoop : e.progress;
    let A = c,
      P = (u - c) * D;
    I
      ? ((P = -P), P > 0 ? ((A = c - P), (P = 0)) : -P + c > u && (A = u + P))
      : P < 0
      ? ((A = c + P), (P = 0))
      : P + c > u && (A = u - P),
      e.isHorizontal()
        ? ((w.style.transform = `translate3d(${P}px, 0, 0)`),
          (w.style.width = `${A}px`))
        : ((w.style.transform = `translate3d(0px, ${P}px, 0)`),
          (w.style.height = `${A}px`)),
      q.hide &&
        (clearTimeout(d),
        (M.style.opacity = 1),
        (d = setTimeout(() => {
          (M.style.opacity = 0), (M.style.transitionDuration = "400ms");
        }, 1e3)));
  }
  function S(R) {
    !e.params.scrollbar.el ||
      !e.scrollbar.el ||
      (e.scrollbar.dragEl.style.transitionDuration = `${R}ms`);
  }
  function x() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const { scrollbar: R } = e,
      { dragEl: I, el: w } = R;
    (I.style.width = ""),
      (I.style.height = ""),
      (u = e.isHorizontal() ? w.offsetWidth : w.offsetHeight),
      (m =
        e.size /
        (e.virtualSize +
          e.params.slidesOffsetBefore -
          (e.params.centeredSlides ? e.snapGrid[0] : 0))),
      e.params.scrollbar.dragSize === "auto"
        ? (c = u * m)
        : (c = parseInt(e.params.scrollbar.dragSize, 10)),
      e.isHorizontal()
        ? (I.style.width = `${c}px`)
        : (I.style.height = `${c}px`),
      m >= 1 ? (w.style.display = "none") : (w.style.display = ""),
      e.params.scrollbar.hide && (w.style.opacity = 0),
      e.params.watchOverflow &&
        e.enabled &&
        R.el.classList[e.isLocked ? "add" : "remove"](
          e.params.scrollbar.lockClass
        );
  }
  function j(R) {
    return e.isHorizontal() ? R.clientX : R.clientY;
  }
  function g(R) {
    const { scrollbar: I, rtlTranslate: w } = e,
      { el: M } = I;
    let q;
    (q =
      (j(R) -
        Zt(M)[e.isHorizontal() ? "left" : "top"] -
        (p !== null ? p : c / 2)) /
      (u - c)),
      (q = Math.max(Math.min(q, 1), 0)),
      w && (q = 1 - q);
    const D = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * q;
    e.updateProgress(D),
      e.setTranslate(D),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  function f(R) {
    const I = e.params.scrollbar,
      { scrollbar: w, wrapperEl: M } = e,
      { el: q, dragEl: D } = w;
    (o = !0),
      (p =
        R.target === D
          ? j(R) -
            R.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"]
          : null),
      R.preventDefault(),
      R.stopPropagation(),
      (M.style.transitionDuration = "100ms"),
      (D.style.transitionDuration = "100ms"),
      g(R),
      clearTimeout(l),
      (q.style.transitionDuration = "0ms"),
      I.hide && (q.style.opacity = 1),
      e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
      i("scrollbarDragStart", R);
  }
  function h(R) {
    const { scrollbar: I, wrapperEl: w } = e,
      { el: M, dragEl: q } = I;
    o &&
      (R.preventDefault ? R.preventDefault() : (R.returnValue = !1),
      g(R),
      (w.style.transitionDuration = "0ms"),
      (M.style.transitionDuration = "0ms"),
      (q.style.transitionDuration = "0ms"),
      i("scrollbarDragMove", R));
  }
  function E(R) {
    const I = e.params.scrollbar,
      { scrollbar: w, wrapperEl: M } = e,
      { el: q } = w;
    o &&
      ((o = !1),
      e.params.cssMode &&
        ((e.wrapperEl.style["scroll-snap-type"] = ""),
        (M.style.transitionDuration = "")),
      I.hide &&
        (clearTimeout(l),
        (l = ts(() => {
          (q.style.opacity = 0), (q.style.transitionDuration = "400ms");
        }, 1e3))),
      i("scrollbarDragEnd", R),
      I.snapOnRelease && e.slideToClosest());
  }
  function b(R) {
    const { scrollbar: I, params: w } = e,
      M = I.el;
    if (!M) return;
    const q = M,
      D = w.passiveListeners ? { passive: !1, capture: !1 } : !1,
      A = w.passiveListeners ? { passive: !0, capture: !1 } : !1;
    if (!q) return;
    const P = R === "on" ? "addEventListener" : "removeEventListener";
    q[P]("pointerdown", f, D),
      n[P]("pointermove", h, D),
      n[P]("pointerup", E, A);
  }
  function y() {
    !e.params.scrollbar.el || !e.scrollbar.el || b("on");
  }
  function z() {
    !e.params.scrollbar.el || !e.scrollbar.el || b("off");
  }
  function C() {
    const { scrollbar: R, el: I } = e;
    e.params.scrollbar = tl(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar",
    });
    const w = e.params.scrollbar;
    if (!w.el) return;
    let M;
    if (
      (typeof w.el == "string" && e.isElement && (M = e.el.querySelector(w.el)),
      !M && typeof w.el == "string")
    ) {
      if (((M = n.querySelectorAll(w.el)), !M.length)) return;
    } else M || (M = w.el);
    e.params.uniqueNavElements &&
      typeof w.el == "string" &&
      M.length > 1 &&
      I.querySelectorAll(w.el).length === 1 &&
      (M = I.querySelector(w.el)),
      M.length > 0 && (M = M[0]),
      M.classList.add(e.isHorizontal() ? w.horizontalClass : w.verticalClass);
    let q;
    M &&
      ((q = M.querySelector(da(e.params.scrollbar.dragClass))),
      q || ((q = De("div", e.params.scrollbar.dragClass)), M.append(q))),
      Object.assign(R, { el: M, dragEl: q }),
      w.draggable && y(),
      M &&
        M.classList[e.enabled ? "remove" : "add"](
          ...ja(e.params.scrollbar.lockClass)
        );
  }
  function T() {
    const R = e.params.scrollbar,
      I = e.scrollbar.el;
    I &&
      I.classList.remove(
        ...ja(e.isHorizontal() ? R.horizontalClass : R.verticalClass)
      ),
      z();
  }
  r("init", () => {
    e.params.scrollbar.enabled === !1 ? N() : (C(), x(), v());
  }),
    r("update resize observerUpdate lock unlock", () => {
      x();
    }),
    r("setTranslate", () => {
      v();
    }),
    r("setTransition", (R, I) => {
      S(I);
    }),
    r("enable disable", () => {
      const { el: R } = e.scrollbar;
      R &&
        R.classList[e.enabled ? "remove" : "add"](
          ...ja(e.params.scrollbar.lockClass)
        );
    }),
    r("destroy", () => {
      T();
    });
  const O = () => {
      e.el.classList.remove(...ja(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.remove(
            ...ja(e.params.scrollbar.scrollbarDisabledClass)
          ),
        C(),
        x(),
        v();
    },
    N = () => {
      e.el.classList.add(...ja(e.params.scrollbar.scrollbarDisabledClass)),
        e.scrollbar.el &&
          e.scrollbar.el.classList.add(
            ...ja(e.params.scrollbar.scrollbarDisabledClass)
          ),
        T();
    };
  Object.assign(e.scrollbar, {
    enable: O,
    disable: N,
    updateSize: x,
    setTranslate: v,
    init: C,
    destroy: T,
  });
}
function Jv(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({ parallax: { enabled: !1 } });
  const i =
      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
    n = (l, p) => {
      const { rtl: c } = e,
        u = c ? -1 : 1,
        m = l.getAttribute("data-swiper-parallax") || "0";
      let v = l.getAttribute("data-swiper-parallax-x"),
        S = l.getAttribute("data-swiper-parallax-y");
      const x = l.getAttribute("data-swiper-parallax-scale"),
        j = l.getAttribute("data-swiper-parallax-opacity"),
        g = l.getAttribute("data-swiper-parallax-rotate");
      if (
        (v || S
          ? ((v = v || "0"), (S = S || "0"))
          : e.isHorizontal()
          ? ((v = m), (S = "0"))
          : ((S = m), (v = "0")),
        v.indexOf("%") >= 0
          ? (v = `${parseInt(v, 10) * p * u}%`)
          : (v = `${v * p * u}px`),
        S.indexOf("%") >= 0
          ? (S = `${parseInt(S, 10) * p}%`)
          : (S = `${S * p}px`),
        typeof j < "u" && j !== null)
      ) {
        const h = j - (j - 1) * (1 - Math.abs(p));
        l.style.opacity = h;
      }
      let f = `translate3d(${v}, ${S}, 0px)`;
      if (typeof x < "u" && x !== null) {
        const h = x - (x - 1) * (1 - Math.abs(p));
        f += ` scale(${h})`;
      }
      if (g && typeof g < "u" && g !== null) {
        const h = g * p * -1;
        f += ` rotate(${h}deg)`;
      }
      l.style.transform = f;
    },
    o = () => {
      const { el: l, slides: p, progress: c, snapGrid: u, isElement: m } = e,
        v = me(l, i);
      e.isElement && v.push(...me(e.hostEl, i)),
        v.forEach((S) => {
          n(S, c);
        }),
        p.forEach((S, x) => {
          let j = S.progress;
          e.params.slidesPerGroup > 1 &&
            e.params.slidesPerView !== "auto" &&
            (j += Math.ceil(x / 2) - c * (u.length - 1)),
            (j = Math.min(Math.max(j, -1), 1)),
            S.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach(
              (g) => {
                n(g, j);
              }
            );
        });
    },
    d = function (l) {
      l === void 0 && (l = e.params.speed);
      const { el: p, hostEl: c } = e,
        u = [...p.querySelectorAll(i)];
      e.isElement && u.push(...c.querySelectorAll(i)),
        u.forEach((m) => {
          let v =
            parseInt(m.getAttribute("data-swiper-parallax-duration"), 10) || l;
          l === 0 && (v = 0), (m.style.transitionDuration = `${v}ms`);
        });
    };
  r("beforeInit", () => {
    e.params.parallax.enabled &&
      ((e.params.watchSlidesProgress = !0),
      (e.originalParams.watchSlidesProgress = !0));
  }),
    r("init", () => {
      e.params.parallax.enabled && o();
    }),
    r("setTranslate", () => {
      e.params.parallax.enabled && o();
    }),
    r("setTransition", (l, p) => {
      e.params.parallax.enabled && d(p);
    });
}
function ex(a) {
  let { swiper: e, extendParams: s, on: r, emit: i } = a;
  const n = se();
  s({
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed",
    },
  }),
    (e.zoom = { enabled: !1 });
  let o = 1,
    d = !1,
    l,
    p;
  const c = [],
    u = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3,
    },
    m = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {},
    },
    v = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
  let S = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return S;
    },
    set(D) {
      if (S !== D) {
        const A = u.imageEl,
          P = u.slideEl;
        i("zoomChange", D, A, P);
      }
      S = D;
    },
  });
  function x() {
    if (c.length < 2) return 1;
    const D = c[0].pageX,
      A = c[0].pageY,
      P = c[1].pageX,
      L = c[1].pageY;
    return Math.sqrt((P - D) ** 2 + (L - A) ** 2);
  }
  function j() {
    if (c.length < 2) return { x: null, y: null };
    const D = u.imageEl.getBoundingClientRect();
    return [
      (c[0].pageX + (c[1].pageX - c[0].pageX) / 2 - D.x - n.scrollX) / o,
      (c[0].pageY + (c[1].pageY - c[0].pageY) / 2 - D.y - n.scrollY) / o,
    ];
  }
  function g() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function f(D) {
    const A = g();
    return !!(
      D.target.matches(A) ||
      e.slides.filter((P) => P.contains(D.target)).length > 0
    );
  }
  function h(D) {
    const A = `.${e.params.zoom.containerClass}`;
    return !!(
      D.target.matches(A) ||
      [...e.hostEl.querySelectorAll(A)].filter((P) => P.contains(D.target))
        .length > 0
    );
  }
  function E(D) {
    if ((D.pointerType === "mouse" && c.splice(0, c.length), !f(D))) return;
    const A = e.params.zoom;
    if (((l = !1), (p = !1), c.push(D), !(c.length < 2))) {
      if (((l = !0), (u.scaleStart = x()), !u.slideEl)) {
        (u.slideEl = D.target.closest(`.${e.params.slideClass}, swiper-slide`)),
          u.slideEl || (u.slideEl = e.slides[e.activeIndex]);
        let P = u.slideEl.querySelector(`.${A.containerClass}`);
        if (
          (P &&
            (P = P.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
          (u.imageEl = P),
          P
            ? (u.imageWrapEl = Ka(u.imageEl, `.${A.containerClass}`)[0])
            : (u.imageWrapEl = void 0),
          !u.imageWrapEl)
        ) {
          u.imageEl = void 0;
          return;
        }
        u.maxRatio =
          u.imageWrapEl.getAttribute("data-swiper-zoom") || A.maxRatio;
      }
      if (u.imageEl) {
        const [P, L] = j();
        (u.originX = P),
          (u.originY = L),
          (u.imageEl.style.transitionDuration = "0ms");
      }
      d = !0;
    }
  }
  function b(D) {
    if (!f(D)) return;
    const A = e.params.zoom,
      P = e.zoom,
      L = c.findIndex(($) => $.pointerId === D.pointerId);
    L >= 0 && (c[L] = D),
      !(c.length < 2) &&
        ((p = !0),
        (u.scaleMove = x()),
        u.imageEl &&
          ((P.scale = (u.scaleMove / u.scaleStart) * o),
          P.scale > u.maxRatio &&
            (P.scale = u.maxRatio - 1 + (P.scale - u.maxRatio + 1) ** 0.5),
          P.scale < A.minRatio &&
            (P.scale = A.minRatio + 1 - (A.minRatio - P.scale + 1) ** 0.5),
          (u.imageEl.style.transform = `translate3d(0,0,0) scale(${P.scale})`)));
  }
  function y(D) {
    if (!f(D) || (D.pointerType === "mouse" && D.type === "pointerout")) return;
    const A = e.params.zoom,
      P = e.zoom,
      L = c.findIndex(($) => $.pointerId === D.pointerId);
    L >= 0 && c.splice(L, 1),
      !(!l || !p) &&
        ((l = !1),
        (p = !1),
        u.imageEl &&
          ((P.scale = Math.max(Math.min(P.scale, u.maxRatio), A.minRatio)),
          (u.imageEl.style.transitionDuration = `${e.params.speed}ms`),
          (u.imageEl.style.transform = `translate3d(0,0,0) scale(${P.scale})`),
          (o = P.scale),
          (d = !1),
          P.scale > 1 && u.slideEl
            ? u.slideEl.classList.add(`${A.zoomedSlideClass}`)
            : P.scale <= 1 &&
              u.slideEl &&
              u.slideEl.classList.remove(`${A.zoomedSlideClass}`),
          P.scale === 1 &&
            ((u.originX = 0), (u.originY = 0), (u.slideEl = void 0))));
  }
  function z(D) {
    const A = e.device;
    if (!u.imageEl || m.isTouched) return;
    A.android && D.cancelable && D.preventDefault(), (m.isTouched = !0);
    const P = c.length > 0 ? c[0] : D;
    (m.touchesStart.x = P.pageX), (m.touchesStart.y = P.pageY);
  }
  function C(D) {
    if (!f(D) || !h(D)) return;
    const A = e.zoom;
    if (!u.imageEl || !m.isTouched || !u.slideEl) return;
    m.isMoved ||
      ((m.width = u.imageEl.offsetWidth),
      (m.height = u.imageEl.offsetHeight),
      (m.startX = Jn(u.imageWrapEl, "x") || 0),
      (m.startY = Jn(u.imageWrapEl, "y") || 0),
      (u.slideWidth = u.slideEl.offsetWidth),
      (u.slideHeight = u.slideEl.offsetHeight),
      (u.imageWrapEl.style.transitionDuration = "0ms"));
    const P = m.width * A.scale,
      L = m.height * A.scale;
    if (P < u.slideWidth && L < u.slideHeight) return;
    if (
      ((m.minX = Math.min(u.slideWidth / 2 - P / 2, 0)),
      (m.maxX = -m.minX),
      (m.minY = Math.min(u.slideHeight / 2 - L / 2, 0)),
      (m.maxY = -m.minY),
      (m.touchesCurrent.x = c.length > 0 ? c[0].pageX : D.pageX),
      (m.touchesCurrent.y = c.length > 0 ? c[0].pageY : D.pageY),
      Math.max(
        Math.abs(m.touchesCurrent.x - m.touchesStart.x),
        Math.abs(m.touchesCurrent.y - m.touchesStart.y)
      ) > 5 && (e.allowClick = !1),
      !m.isMoved && !d)
    ) {
      if (
        e.isHorizontal() &&
        ((Math.floor(m.minX) === Math.floor(m.startX) &&
          m.touchesCurrent.x < m.touchesStart.x) ||
          (Math.floor(m.maxX) === Math.floor(m.startX) &&
            m.touchesCurrent.x > m.touchesStart.x))
      ) {
        m.isTouched = !1;
        return;
      }
      if (
        !e.isHorizontal() &&
        ((Math.floor(m.minY) === Math.floor(m.startY) &&
          m.touchesCurrent.y < m.touchesStart.y) ||
          (Math.floor(m.maxY) === Math.floor(m.startY) &&
            m.touchesCurrent.y > m.touchesStart.y))
      ) {
        m.isTouched = !1;
        return;
      }
    }
    D.cancelable && D.preventDefault(), D.stopPropagation(), (m.isMoved = !0);
    const F = (A.scale - o) / (u.maxRatio - e.params.zoom.minRatio),
      { originX: V, originY: G } = u;
    (m.currentX =
      m.touchesCurrent.x - m.touchesStart.x + m.startX + F * (m.width - V * 2)),
      (m.currentY =
        m.touchesCurrent.y -
        m.touchesStart.y +
        m.startY +
        F * (m.height - G * 2)),
      m.currentX < m.minX &&
        (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** 0.8),
      m.currentX > m.maxX &&
        (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** 0.8),
      m.currentY < m.minY &&
        (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** 0.8),
      m.currentY > m.maxY &&
        (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** 0.8),
      v.prevPositionX || (v.prevPositionX = m.touchesCurrent.x),
      v.prevPositionY || (v.prevPositionY = m.touchesCurrent.y),
      v.prevTime || (v.prevTime = Date.now()),
      (v.x =
        (m.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2),
      (v.y =
        (m.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2),
      Math.abs(m.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0),
      Math.abs(m.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0),
      (v.prevPositionX = m.touchesCurrent.x),
      (v.prevPositionY = m.touchesCurrent.y),
      (v.prevTime = Date.now()),
      (u.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`);
  }
  function T() {
    const D = e.zoom;
    if (!u.imageEl) return;
    if (!m.isTouched || !m.isMoved) {
      (m.isTouched = !1), (m.isMoved = !1);
      return;
    }
    (m.isTouched = !1), (m.isMoved = !1);
    let A = 300,
      P = 300;
    const L = v.x * A,
      $ = m.currentX + L,
      F = v.y * P,
      V = m.currentY + F;
    v.x !== 0 && (A = Math.abs(($ - m.currentX) / v.x)),
      v.y !== 0 && (P = Math.abs((V - m.currentY) / v.y));
    const G = Math.max(A, P);
    (m.currentX = $), (m.currentY = V);
    const ge = m.width * D.scale,
      ce = m.height * D.scale;
    (m.minX = Math.min(u.slideWidth / 2 - ge / 2, 0)),
      (m.maxX = -m.minX),
      (m.minY = Math.min(u.slideHeight / 2 - ce / 2, 0)),
      (m.maxY = -m.minY),
      (m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX)),
      (m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY)),
      (u.imageWrapEl.style.transitionDuration = `${G}ms`),
      (u.imageWrapEl.style.transform = `translate3d(${m.currentX}px, ${m.currentY}px,0)`);
  }
  function O() {
    const D = e.zoom;
    u.slideEl &&
      e.activeIndex !== e.slides.indexOf(u.slideEl) &&
      (u.imageEl && (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      u.imageWrapEl && (u.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      u.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
      (D.scale = 1),
      (o = 1),
      (u.slideEl = void 0),
      (u.imageEl = void 0),
      (u.imageWrapEl = void 0),
      (u.originX = 0),
      (u.originY = 0));
  }
  function N(D) {
    const A = e.zoom,
      P = e.params.zoom;
    if (!u.slideEl) {
      D &&
        D.target &&
        (u.slideEl = D.target.closest(`.${e.params.slideClass}, swiper-slide`)),
        u.slideEl ||
          (e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (u.slideEl = me(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
            : (u.slideEl = e.slides[e.activeIndex]));
      let Fs = u.slideEl.querySelector(`.${P.containerClass}`);
      Fs &&
        (Fs = Fs.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (u.imageEl = Fs),
        Fs
          ? (u.imageWrapEl = Ka(u.imageEl, `.${P.containerClass}`)[0])
          : (u.imageWrapEl = void 0);
    }
    if (!u.imageEl || !u.imageWrapEl) return;
    e.params.cssMode &&
      ((e.wrapperEl.style.overflow = "hidden"),
      (e.wrapperEl.style.touchAction = "none")),
      u.slideEl.classList.add(`${P.zoomedSlideClass}`);
    let L, $, F, V, G, ge, ce, Ue, il, nl, ol, ll, Fr, Gr, Si, ji, Ei, wi;
    typeof m.touchesStart.x > "u" && D
      ? ((L = D.pageX), ($ = D.pageY))
      : ((L = m.touchesStart.x), ($ = m.touchesStart.y));
    const Bs = typeof D == "number" ? D : null;
    o === 1 && Bs && ((L = void 0), ($ = void 0)),
      (A.scale =
        Bs || u.imageWrapEl.getAttribute("data-swiper-zoom") || P.maxRatio),
      (o = Bs || u.imageWrapEl.getAttribute("data-swiper-zoom") || P.maxRatio),
      D && !(o === 1 && Bs)
        ? ((Ei = u.slideEl.offsetWidth),
          (wi = u.slideEl.offsetHeight),
          (F = Zt(u.slideEl).left + n.scrollX),
          (V = Zt(u.slideEl).top + n.scrollY),
          (G = F + Ei / 2 - L),
          (ge = V + wi / 2 - $),
          (il = u.imageEl.offsetWidth),
          (nl = u.imageEl.offsetHeight),
          (ol = il * A.scale),
          (ll = nl * A.scale),
          (Fr = Math.min(Ei / 2 - ol / 2, 0)),
          (Gr = Math.min(wi / 2 - ll / 2, 0)),
          (Si = -Fr),
          (ji = -Gr),
          (ce = G * A.scale),
          (Ue = ge * A.scale),
          ce < Fr && (ce = Fr),
          ce > Si && (ce = Si),
          Ue < Gr && (Ue = Gr),
          Ue > ji && (Ue = ji))
        : ((ce = 0), (Ue = 0)),
      Bs && A.scale === 1 && ((u.originX = 0), (u.originY = 0)),
      (u.imageWrapEl.style.transitionDuration = "300ms"),
      (u.imageWrapEl.style.transform = `translate3d(${ce}px, ${Ue}px,0)`),
      (u.imageEl.style.transitionDuration = "300ms"),
      (u.imageEl.style.transform = `translate3d(0,0,0) scale(${A.scale})`);
  }
  function R() {
    const D = e.zoom,
      A = e.params.zoom;
    if (!u.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual
        ? (u.slideEl = me(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
        : (u.slideEl = e.slides[e.activeIndex]);
      let P = u.slideEl.querySelector(`.${A.containerClass}`);
      P &&
        (P = P.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (u.imageEl = P),
        P
          ? (u.imageWrapEl = Ka(u.imageEl, `.${A.containerClass}`)[0])
          : (u.imageWrapEl = void 0);
    }
    !u.imageEl ||
      !u.imageWrapEl ||
      (e.params.cssMode &&
        ((e.wrapperEl.style.overflow = ""),
        (e.wrapperEl.style.touchAction = "")),
      (D.scale = 1),
      (o = 1),
      (u.imageWrapEl.style.transitionDuration = "300ms"),
      (u.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      (u.imageEl.style.transitionDuration = "300ms"),
      (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      u.slideEl.classList.remove(`${A.zoomedSlideClass}`),
      (u.slideEl = void 0),
      (u.originX = 0),
      (u.originY = 0));
  }
  function I(D) {
    const A = e.zoom;
    A.scale && A.scale !== 1 ? R() : N(D);
  }
  function w() {
    const D = e.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
      A = e.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: D, activeListenerWithCapture: A };
  }
  function M() {
    const D = e.zoom;
    if (D.enabled) return;
    D.enabled = !0;
    const { passiveListener: A, activeListenerWithCapture: P } = w();
    e.wrapperEl.addEventListener("pointerdown", E, A),
      e.wrapperEl.addEventListener("pointermove", b, P),
      ["pointerup", "pointercancel", "pointerout"].forEach((L) => {
        e.wrapperEl.addEventListener(L, y, A);
      }),
      e.wrapperEl.addEventListener("pointermove", C, P);
  }
  function q() {
    const D = e.zoom;
    if (!D.enabled) return;
    D.enabled = !1;
    const { passiveListener: A, activeListenerWithCapture: P } = w();
    e.wrapperEl.removeEventListener("pointerdown", E, A),
      e.wrapperEl.removeEventListener("pointermove", b, P),
      ["pointerup", "pointercancel", "pointerout"].forEach((L) => {
        e.wrapperEl.removeEventListener(L, y, A);
      }),
      e.wrapperEl.removeEventListener("pointermove", C, P);
  }
  r("init", () => {
    e.params.zoom.enabled && M();
  }),
    r("destroy", () => {
      q();
    }),
    r("touchStart", (D, A) => {
      e.zoom.enabled && z(A);
    }),
    r("touchEnd", (D, A) => {
      e.zoom.enabled && T();
    }),
    r("doubleTap", (D, A) => {
      !e.animating &&
        e.params.zoom.enabled &&
        e.zoom.enabled &&
        e.params.zoom.toggle &&
        I(A);
    }),
    r("transitionEnd", () => {
      e.zoom.enabled && e.params.zoom.enabled && O();
    }),
    r("slideChange", () => {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && O();
    }),
    Object.assign(e.zoom, { enable: M, disable: q, in: N, out: R, toggle: I });
}
function ax(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({ controller: { control: void 0, inverse: !1, by: "slide" } }),
    (e.controller = { control: void 0 });
  function i(p, c) {
    const u = (function () {
      let x, j, g;
      return (f, h) => {
        for (j = -1, x = f.length; x - j > 1; )
          (g = (x + j) >> 1), f[g] <= h ? (j = g) : (x = g);
        return x;
      };
    })();
    (this.x = p), (this.y = c), (this.lastIndex = p.length - 1);
    let m, v;
    return (
      (this.interpolate = function (x) {
        return x
          ? ((v = u(this.x, x)),
            (m = v - 1),
            ((x - this.x[m]) * (this.y[v] - this.y[m])) /
              (this.x[v] - this.x[m]) +
              this.y[m])
          : 0;
      }),
      this
    );
  }
  function n(p) {
    e.controller.spline = e.params.loop
      ? new i(e.slidesGrid, p.slidesGrid)
      : new i(e.snapGrid, p.snapGrid);
  }
  function o(p, c) {
    const u = e.controller.control;
    let m, v;
    const S = e.constructor;
    function x(j) {
      if (j.destroyed) return;
      const g = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" &&
        (n(j), (v = -e.controller.spline.interpolate(-g))),
        (!v || e.params.controller.by === "container") &&
          ((m =
            (j.maxTranslate() - j.minTranslate()) /
            (e.maxTranslate() - e.minTranslate())),
          (Number.isNaN(m) || !Number.isFinite(m)) && (m = 1),
          (v = (g - e.minTranslate()) * m + j.minTranslate())),
        e.params.controller.inverse && (v = j.maxTranslate() - v),
        j.updateProgress(v),
        j.setTranslate(v, e),
        j.updateActiveIndex(),
        j.updateSlidesClasses();
    }
    if (Array.isArray(u))
      for (let j = 0; j < u.length; j += 1)
        u[j] !== c && u[j] instanceof S && x(u[j]);
    else u instanceof S && c !== u && x(u);
  }
  function d(p, c) {
    const u = e.constructor,
      m = e.controller.control;
    let v;
    function S(x) {
      x.destroyed ||
        (x.setTransition(p, e),
        p !== 0 &&
          (x.transitionStart(),
          x.params.autoHeight &&
            ts(() => {
              x.updateAutoHeight();
            }),
          fr(x.wrapperEl, () => {
            m && x.transitionEnd();
          })));
    }
    if (Array.isArray(m))
      for (v = 0; v < m.length; v += 1)
        m[v] !== c && m[v] instanceof u && S(m[v]);
    else m instanceof u && c !== m && S(m);
  }
  function l() {
    e.controller.control &&
      e.controller.spline &&
      ((e.controller.spline = void 0), delete e.controller.spline);
  }
  r("beforeInit", () => {
    if (
      typeof window < "u" &&
      (typeof e.params.controller.control == "string" ||
        e.params.controller.control instanceof HTMLElement)
    ) {
      const p = document.querySelector(e.params.controller.control);
      if (p && p.swiper) e.controller.control = p.swiper;
      else if (p) {
        const c = (u) => {
          (e.controller.control = u.detail[0]),
            e.update(),
            p.removeEventListener("init", c);
        };
        p.addEventListener("init", c);
      }
      return;
    }
    e.controller.control = e.params.controller.control;
  }),
    r("update", () => {
      l();
    }),
    r("resize", () => {
      l();
    }),
    r("observerUpdate", () => {
      l();
    }),
    r("setTranslate", (p, c, u) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTranslate(c, u);
    }),
    r("setTransition", (p, c, u) => {
      !e.controller.control ||
        e.controller.control.destroyed ||
        e.controller.setTransition(c, u);
    }),
    Object.assign(e.controller, { setTranslate: o, setTransition: d });
}
function sx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
    },
  }),
    (e.a11y = { clicked: !1 });
  let i = null;
  function n(w) {
    const M = i;
    M.length !== 0 && ((M.innerHTML = ""), (M.innerHTML = w));
  }
  const o = (w) => (Array.isArray(w) ? w : [w]).filter((M) => !!M);
  function d(w) {
    w === void 0 && (w = 16);
    const M = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(w).replace(/x/g, M);
  }
  function l(w) {
    (w = o(w)),
      w.forEach((M) => {
        M.setAttribute("tabIndex", "0");
      });
  }
  function p(w) {
    (w = o(w)),
      w.forEach((M) => {
        M.setAttribute("tabIndex", "-1");
      });
  }
  function c(w, M) {
    (w = o(w)),
      w.forEach((q) => {
        q.setAttribute("role", M);
      });
  }
  function u(w, M) {
    (w = o(w)),
      w.forEach((q) => {
        q.setAttribute("aria-roledescription", M);
      });
  }
  function m(w, M) {
    (w = o(w)),
      w.forEach((q) => {
        q.setAttribute("aria-controls", M);
      });
  }
  function v(w, M) {
    (w = o(w)),
      w.forEach((q) => {
        q.setAttribute("aria-label", M);
      });
  }
  function S(w, M) {
    (w = o(w)),
      w.forEach((q) => {
        q.setAttribute("id", M);
      });
  }
  function x(w, M) {
    (w = o(w)),
      w.forEach((q) => {
        q.setAttribute("aria-live", M);
      });
  }
  function j(w) {
    (w = o(w)),
      w.forEach((M) => {
        M.setAttribute("aria-disabled", !0);
      });
  }
  function g(w) {
    (w = o(w)),
      w.forEach((M) => {
        M.setAttribute("aria-disabled", !1);
      });
  }
  function f(w) {
    if (w.keyCode !== 13 && w.keyCode !== 32) return;
    const M = e.params.a11y,
      q = w.target;
    (e.pagination &&
      e.pagination.el &&
      (q === e.pagination.el || e.pagination.el.contains(w.target)) &&
      !w.target.matches(da(e.params.pagination.bulletClass))) ||
      (e.navigation &&
        e.navigation.nextEl &&
        q === e.navigation.nextEl &&
        ((e.isEnd && !e.params.loop) || e.slideNext(),
        e.isEnd ? n(M.lastSlideMessage) : n(M.nextSlideMessage)),
      e.navigation &&
        e.navigation.prevEl &&
        q === e.navigation.prevEl &&
        ((e.isBeginning && !e.params.loop) || e.slidePrev(),
        e.isBeginning ? n(M.firstSlideMessage) : n(M.prevSlideMessage)),
      e.pagination &&
        q.matches(da(e.params.pagination.bulletClass)) &&
        q.click());
  }
  function h() {
    if (e.params.loop || e.params.rewind || !e.navigation) return;
    const { nextEl: w, prevEl: M } = e.navigation;
    M && (e.isBeginning ? (j(M), p(M)) : (g(M), l(M))),
      w && (e.isEnd ? (j(w), p(w)) : (g(w), l(w)));
  }
  function E() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  function b() {
    return E() && e.params.pagination.clickable;
  }
  function y() {
    const w = e.params.a11y;
    E() &&
      e.pagination.bullets.forEach((M) => {
        e.params.pagination.clickable &&
          (l(M),
          e.params.pagination.renderBullet ||
            (c(M, "button"),
            v(
              M,
              w.paginationBulletMessage.replace(/\{\{index\}\}/, Dr(M) + 1)
            ))),
          M.matches(da(e.params.pagination.bulletActiveClass))
            ? M.setAttribute("aria-current", "true")
            : M.removeAttribute("aria-current");
      });
  }
  const z = (w, M, q) => {
      l(w),
        w.tagName !== "BUTTON" &&
          (c(w, "button"), w.addEventListener("keydown", f)),
        v(w, q),
        m(w, M);
    },
    C = () => {
      e.a11y.clicked = !0;
    },
    T = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          e.destroyed || (e.a11y.clicked = !1);
        });
      });
    },
    O = (w) => {
      if (e.a11y.clicked) return;
      const M = w.target.closest(`.${e.params.slideClass}, swiper-slide`);
      if (!M || !e.slides.includes(M)) return;
      const q = e.slides.indexOf(M) === e.activeIndex,
        D =
          e.params.watchSlidesProgress &&
          e.visibleSlides &&
          e.visibleSlides.includes(M);
      q ||
        D ||
        (w.sourceCapabilities && w.sourceCapabilities.firesTouchEvents) ||
        (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
        e.slideTo(e.slides.indexOf(M), 0));
    },
    N = () => {
      const w = e.params.a11y;
      w.itemRoleDescriptionMessage && u(e.slides, w.itemRoleDescriptionMessage),
        w.slideRole && c(e.slides, w.slideRole);
      const M = e.slides.length;
      w.slideLabelMessage &&
        e.slides.forEach((q, D) => {
          const A = e.params.loop
              ? parseInt(q.getAttribute("data-swiper-slide-index"), 10)
              : D,
            P = w.slideLabelMessage
              .replace(/\{\{index\}\}/, A + 1)
              .replace(/\{\{slidesLength\}\}/, M);
          v(q, P);
        });
    },
    R = () => {
      const w = e.params.a11y;
      e.el.append(i);
      const M = e.el;
      w.containerRoleDescriptionMessage &&
        u(M, w.containerRoleDescriptionMessage),
        w.containerMessage && v(M, w.containerMessage);
      const q = e.wrapperEl,
        D = w.id || q.getAttribute("id") || `swiper-wrapper-${d(16)}`,
        A = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      S(q, D), x(q, A), N();
      let { nextEl: P, prevEl: L } = e.navigation ? e.navigation : {};
      (P = o(P)),
        (L = o(L)),
        P && P.forEach(($) => z($, D, w.nextSlideMessage)),
        L && L.forEach(($) => z($, D, w.prevSlideMessage)),
        b() &&
          (Array.isArray(e.pagination.el)
            ? e.pagination.el
            : [e.pagination.el]
          ).forEach((F) => {
            F.addEventListener("keydown", f);
          }),
        e.el.addEventListener("focus", O, !0),
        e.el.addEventListener("pointerdown", C, !0),
        e.el.addEventListener("pointerup", T, !0);
    };
  function I() {
    i && i.remove();
    let { nextEl: w, prevEl: M } = e.navigation ? e.navigation : {};
    (w = o(w)),
      (M = o(M)),
      w && w.forEach((q) => q.removeEventListener("keydown", f)),
      M && M.forEach((q) => q.removeEventListener("keydown", f)),
      b() &&
        (Array.isArray(e.pagination.el)
          ? e.pagination.el
          : [e.pagination.el]
        ).forEach((D) => {
          D.removeEventListener("keydown", f);
        }),
      e.el.removeEventListener("focus", O, !0),
      e.el.removeEventListener("pointerdown", C, !0),
      e.el.removeEventListener("pointerup", T, !0);
  }
  r("beforeInit", () => {
    (i = De("span", e.params.a11y.notificationClass)),
      i.setAttribute("aria-live", "assertive"),
      i.setAttribute("aria-atomic", "true");
  }),
    r("afterInit", () => {
      e.params.a11y.enabled && R();
    }),
    r("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      e.params.a11y.enabled && N();
    }),
    r("fromEdge toEdge afterInit lock unlock", () => {
      e.params.a11y.enabled && h();
    }),
    r("paginationUpdate", () => {
      e.params.a11y.enabled && y();
    }),
    r("destroy", () => {
      e.params.a11y.enabled && I();
    });
}
function rx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1,
    },
  });
  let i = !1,
    n = {};
  const o = (v) =>
      v
        .toString()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, ""),
    d = (v) => {
      const S = se();
      let x;
      v ? (x = new URL(v)) : (x = S.location);
      const j = x.pathname
          .slice(1)
          .split("/")
          .filter((E) => E !== ""),
        g = j.length,
        f = j[g - 2],
        h = j[g - 1];
      return { key: f, value: h };
    },
    l = (v, S) => {
      const x = se();
      if (!i || !e.params.history.enabled) return;
      let j;
      e.params.url ? (j = new URL(e.params.url)) : (j = x.location);
      const g = e.slides[S];
      let f = o(g.getAttribute("data-history"));
      if (e.params.history.root.length > 0) {
        let E = e.params.history.root;
        E[E.length - 1] === "/" && (E = E.slice(0, E.length - 1)),
          (f = `${E}/${v ? `${v}/` : ""}${f}`);
      } else j.pathname.includes(v) || (f = `${v ? `${v}/` : ""}${f}`);
      e.params.history.keepQuery && (f += j.search);
      const h = x.history.state;
      (h && h.value === f) ||
        (e.params.history.replaceState
          ? x.history.replaceState({ value: f }, null, f)
          : x.history.pushState({ value: f }, null, f));
    },
    p = (v, S, x) => {
      if (S)
        for (let j = 0, g = e.slides.length; j < g; j += 1) {
          const f = e.slides[j];
          if (o(f.getAttribute("data-history")) === S) {
            const E = e.getSlideIndex(f);
            e.slideTo(E, v, x);
          }
        }
      else e.slideTo(0, v, x);
    },
    c = () => {
      (n = d(e.params.url)), p(e.params.speed, n.value, !1);
    },
    u = () => {
      const v = se();
      if (e.params.history) {
        if (!v.history || !v.history.pushState) {
          (e.params.history.enabled = !1),
            (e.params.hashNavigation.enabled = !0);
          return;
        }
        if (((i = !0), (n = d(e.params.url)), !n.key && !n.value)) {
          e.params.history.replaceState || v.addEventListener("popstate", c);
          return;
        }
        p(0, n.value, e.params.runCallbacksOnInit),
          e.params.history.replaceState || v.addEventListener("popstate", c);
      }
    },
    m = () => {
      const v = se();
      e.params.history.replaceState || v.removeEventListener("popstate", c);
    };
  r("init", () => {
    e.params.history.enabled && u();
  }),
    r("destroy", () => {
      e.params.history.enabled && m();
    }),
    r("transitionEnd _freeModeNoMomentumRelease", () => {
      i && l(e.params.history.key, e.activeIndex);
    }),
    r("slideChange", () => {
      i && e.params.cssMode && l(e.params.history.key, e.activeIndex);
    });
}
function tx(a) {
  let { swiper: e, extendParams: s, emit: r, on: i } = a,
    n = !1;
  const o = be(),
    d = se();
  s({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(m, v) {
        if (e.virtual && e.params.virtual.enabled) {
          const S = e.slides.filter(
            (j) => j.getAttribute("data-hash") === v
          )[0];
          return S
            ? parseInt(S.getAttribute("data-swiper-slide-index"), 10)
            : 0;
        }
        return e.getSlideIndex(
          me(
            e.slidesEl,
            `.${e.params.slideClass}[data-hash="${v}"], swiper-slide[data-hash="${v}"]`
          )[0]
        );
      },
    },
  });
  const l = () => {
      r("hashChange");
      const m = o.location.hash.replace("#", ""),
        v =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        S = v ? v.getAttribute("data-hash") : "";
      if (m !== S) {
        const x = e.params.hashNavigation.getSlideIndex(e, m);
        if (typeof x > "u" || Number.isNaN(x)) return;
        e.slideTo(x);
      }
    },
    p = () => {
      if (!n || !e.params.hashNavigation.enabled) return;
      const m =
          e.virtual && e.params.virtual.enabled
            ? e.slidesEl.querySelector(
                `[data-swiper-slide-index="${e.activeIndex}"]`
              )
            : e.slides[e.activeIndex],
        v = m
          ? m.getAttribute("data-hash") || m.getAttribute("data-history")
          : "";
      e.params.hashNavigation.replaceState &&
      d.history &&
      d.history.replaceState
        ? (d.history.replaceState(null, null, `#${v}` || ""), r("hashSet"))
        : ((o.location.hash = v || ""), r("hashSet"));
    },
    c = () => {
      if (
        !e.params.hashNavigation.enabled ||
        (e.params.history && e.params.history.enabled)
      )
        return;
      n = !0;
      const m = o.location.hash.replace("#", "");
      if (m) {
        const S = e.params.hashNavigation.getSlideIndex(e, m);
        e.slideTo(S || 0, 0, e.params.runCallbacksOnInit, !0);
      }
      e.params.hashNavigation.watchState && d.addEventListener("hashchange", l);
    },
    u = () => {
      e.params.hashNavigation.watchState &&
        d.removeEventListener("hashchange", l);
    };
  i("init", () => {
    e.params.hashNavigation.enabled && c();
  }),
    i("destroy", () => {
      e.params.hashNavigation.enabled && u();
    }),
    i("transitionEnd _freeModeNoMomentumRelease", () => {
      n && p();
    }),
    i("slideChange", () => {
      n && e.params.cssMode && p();
    });
}
function ix(a) {
  let { swiper: e, extendParams: s, on: r, emit: i, params: n } = a;
  (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    s({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    d,
    l = n && n.autoplay ? n.autoplay.delay : 3e3,
    p = n && n.autoplay ? n.autoplay.delay : 3e3,
    c,
    u = new Date().getTime(),
    m,
    v,
    S,
    x,
    j,
    g,
    f;
  function h(A) {
    !e ||
      e.destroyed ||
      !e.wrapperEl ||
      (A.target === e.wrapperEl &&
        (e.wrapperEl.removeEventListener("transitionend", h), !f && O()));
  }
  const E = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? (m = !0) : m && ((p = c), (m = !1));
      const A = e.autoplay.paused ? c : u + p - new Date().getTime();
      (e.autoplay.timeLeft = A),
        i("autoplayTimeLeft", A, A / l),
        (d = requestAnimationFrame(() => {
          E();
        }));
    },
    b = () => {
      let A;
      return (
        e.virtual && e.params.virtual.enabled
          ? (A = e.slides.filter((L) =>
              L.classList.contains("swiper-slide-active")
            )[0])
          : (A = e.slides[e.activeIndex]),
        A ? parseInt(A.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    y = (A) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(d), E();
      let P = typeof A > "u" ? e.params.autoplay.delay : A;
      (l = e.params.autoplay.delay), (p = e.params.autoplay.delay);
      const L = b();
      !Number.isNaN(L) &&
        L > 0 &&
        typeof A > "u" &&
        ((P = L), (l = L), (p = L)),
        (c = P);
      const $ = e.params.speed,
        F = () => {
          !e ||
            e.destroyed ||
            (e.params.autoplay.reverseDirection
              ? !e.isBeginning || e.params.loop || e.params.rewind
                ? (e.slidePrev($, !0, !0), i("autoplay"))
                : e.params.autoplay.stopOnLastSlide ||
                  (e.slideTo(e.slides.length - 1, $, !0, !0), i("autoplay"))
              : !e.isEnd || e.params.loop || e.params.rewind
              ? (e.slideNext($, !0, !0), i("autoplay"))
              : e.params.autoplay.stopOnLastSlide ||
                (e.slideTo(0, $, !0, !0), i("autoplay")),
            e.params.cssMode &&
              ((u = new Date().getTime()),
              requestAnimationFrame(() => {
                y();
              })));
        };
      return (
        P > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              F();
            }, P)))
          : requestAnimationFrame(() => {
              F();
            }),
        P
      );
    },
    z = () => {
      (u = new Date().getTime()),
        (e.autoplay.running = !0),
        y(),
        i("autoplayStart");
    },
    C = () => {
      (e.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(d),
        i("autoplayStop");
    },
    T = (A, P) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(o), A || (g = !0);
      const L = () => {
        i("autoplayPause"),
          e.params.autoplay.waitForTransition
            ? e.wrapperEl.addEventListener("transitionend", h)
            : O();
      };
      if (((e.autoplay.paused = !0), P)) {
        j && (c = e.params.autoplay.delay), (j = !1), L();
        return;
      }
      (c = (c || e.params.autoplay.delay) - (new Date().getTime() - u)),
        !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), L());
    },
    O = () => {
      (e.isEnd && c < 0 && !e.params.loop) ||
        e.destroyed ||
        !e.autoplay.running ||
        ((u = new Date().getTime()),
        g ? ((g = !1), y(c)) : y(),
        (e.autoplay.paused = !1),
        i("autoplayResume"));
    },
    N = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const A = be();
      A.visibilityState === "hidden" && ((g = !0), T(!0)),
        A.visibilityState === "visible" && O();
    },
    R = (A) => {
      A.pointerType === "mouse" &&
        ((g = !0), (f = !0), !(e.animating || e.autoplay.paused) && T(!0));
    },
    I = (A) => {
      A.pointerType === "mouse" && ((f = !1), e.autoplay.paused && O());
    },
    w = () => {
      e.params.autoplay.pauseOnMouseEnter &&
        (e.el.addEventListener("pointerenter", R),
        e.el.addEventListener("pointerleave", I));
    },
    M = () => {
      e.el.removeEventListener("pointerenter", R),
        e.el.removeEventListener("pointerleave", I);
    },
    q = () => {
      be().addEventListener("visibilitychange", N);
    },
    D = () => {
      be().removeEventListener("visibilitychange", N);
    };
  r("init", () => {
    e.params.autoplay.enabled && (w(), q(), z());
  }),
    r("destroy", () => {
      M(), D(), e.autoplay.running && C();
    }),
    r("_freeModeStaticRelease", () => {
      (S || g) && O();
    }),
    r("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? C() : T(!0, !0);
    }),
    r("beforeTransitionStart", (A, P, L) => {
      e.destroyed ||
        !e.autoplay.running ||
        (L || !e.params.autoplay.disableOnInteraction ? T(!0, !0) : C());
    }),
    r("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          C();
          return;
        }
        (v = !0),
          (S = !1),
          (g = !1),
          (x = setTimeout(() => {
            (g = !0), (S = !0), T(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !v)) {
        if (
          (clearTimeout(x),
          clearTimeout(o),
          e.params.autoplay.disableOnInteraction)
        ) {
          (S = !1), (v = !1);
          return;
        }
        S && e.params.cssMode && O(), (S = !1), (v = !1);
      }
    }),
    r("slideChange", () => {
      e.destroyed || !e.autoplay.running || (j = !0);
    }),
    Object.assign(e.autoplay, { start: z, stop: C, pause: T, resume: O });
}
function nx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let i = !1,
    n = !1;
  e.thumbs = { swiper: null };
  function o() {
    const p = e.thumbs.swiper;
    if (!p || p.destroyed) return;
    const c = p.clickedIndex,
      u = p.clickedSlide;
    if (
      (u && u.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof c > "u" ||
      c === null
    )
      return;
    let m;
    p.params.loop
      ? (m = parseInt(
          p.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (m = c),
      e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
  }
  function d() {
    const { thumbs: p } = e.params;
    if (i) return !1;
    i = !0;
    const c = e.constructor;
    if (p.swiper instanceof c)
      (e.thumbs.swiper = p.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    else if (rr(p.swiper)) {
      const u = Object.assign({}, p.swiper);
      Object.assign(u, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new c(u)),
        (n = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", o),
      !0
    );
  }
  function l(p) {
    const c = e.thumbs.swiper;
    if (!c || c.destroyed) return;
    const u =
      c.params.slidesPerView === "auto"
        ? c.slidesPerViewDynamic()
        : c.params.slidesPerView;
    let m = 1;
    const v = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (m = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (m = 1),
      (m = Math.floor(m)),
      c.slides.forEach((j) => j.classList.remove(v)),
      c.params.loop || (c.params.virtual && c.params.virtual.enabled))
    )
      for (let j = 0; j < m; j += 1)
        me(
          c.slidesEl,
          `[data-swiper-slide-index="${e.realIndex + j}"]`
        ).forEach((g) => {
          g.classList.add(v);
        });
    else
      for (let j = 0; j < m; j += 1)
        c.slides[e.realIndex + j] && c.slides[e.realIndex + j].classList.add(v);
    const S = e.params.thumbs.autoScrollOffset,
      x = S && !c.params.loop;
    if (e.realIndex !== c.realIndex || x) {
      const j = c.activeIndex;
      let g, f;
      if (c.params.loop) {
        const h = c.slides.filter(
          (E) => E.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
        )[0];
        (g = c.slides.indexOf(h)),
          (f = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (g = e.realIndex), (f = g > e.previousIndex ? "next" : "prev");
      x && (g += f === "next" ? S : -1 * S),
        c.visibleSlidesIndexes &&
          c.visibleSlidesIndexes.indexOf(g) < 0 &&
          (c.params.centeredSlides
            ? g > j
              ? (g = g - Math.floor(u / 2) + 1)
              : (g = g + Math.floor(u / 2) - 1)
            : g > j && c.params.slidesPerGroup,
          c.slideTo(g, p ? 0 : void 0));
    }
  }
  r("beforeInit", () => {
    const { thumbs: p } = e.params;
    if (!(!p || !p.swiper))
      if (typeof p.swiper == "string" || p.swiper instanceof HTMLElement) {
        const c = be(),
          u = () => {
            const v =
              typeof p.swiper == "string"
                ? c.querySelector(p.swiper)
                : p.swiper;
            if (v && v.swiper) (p.swiper = v.swiper), d(), l(!0);
            else if (v) {
              const S = (x) => {
                (p.swiper = x.detail[0]),
                  v.removeEventListener("init", S),
                  d(),
                  l(!0),
                  p.swiper.update(),
                  e.update();
              };
              v.addEventListener("init", S);
            }
            return v;
          },
          m = () => {
            if (e.destroyed) return;
            u() || requestAnimationFrame(m);
          };
        requestAnimationFrame(m);
      } else d(), l(!0);
  }),
    r("slideChange update resize observerUpdate", () => {
      l();
    }),
    r("setTransition", (p, c) => {
      const u = e.thumbs.swiper;
      !u || u.destroyed || u.setTransition(c);
    }),
    r("beforeDestroy", () => {
      const p = e.thumbs.swiper;
      !p || p.destroyed || (n && p.destroy());
    }),
    Object.assign(e.thumbs, { init: d, update: l });
}
function ox(a) {
  let { swiper: e, extendParams: s, emit: r, once: i } = a;
  s({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function n() {
    if (e.params.cssMode) return;
    const l = e.getTranslate();
    e.setTranslate(l),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function o() {
    if (e.params.cssMode) return;
    const { touchEventsData: l, touches: p } = e;
    l.velocities.length === 0 &&
      l.velocities.push({
        position: p[e.isHorizontal() ? "startX" : "startY"],
        time: l.touchStartTime,
      }),
      l.velocities.push({
        position: p[e.isHorizontal() ? "currentX" : "currentY"],
        time: Be(),
      });
  }
  function d(l) {
    let { currentPos: p } = l;
    if (e.params.cssMode) return;
    const {
        params: c,
        wrapperEl: u,
        rtlTranslate: m,
        snapGrid: v,
        touchEventsData: S,
      } = e,
      j = Be() - S.touchStartTime;
    if (p < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (p > -e.maxTranslate()) {
      e.slides.length < v.length
        ? e.slideTo(v.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (c.freeMode.momentum) {
      if (S.velocities.length > 1) {
        const C = S.velocities.pop(),
          T = S.velocities.pop(),
          O = C.position - T.position,
          N = C.time - T.time;
        (e.velocity = O / N),
          (e.velocity /= 2),
          Math.abs(e.velocity) < c.freeMode.minimumVelocity && (e.velocity = 0),
          (N > 150 || Be() - C.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= c.freeMode.momentumVelocityRatio),
        (S.velocities.length = 0);
      let g = 1e3 * c.freeMode.momentumRatio;
      const f = e.velocity * g;
      let h = e.translate + f;
      m && (h = -h);
      let E = !1,
        b;
      const y = Math.abs(e.velocity) * 20 * c.freeMode.momentumBounceRatio;
      let z;
      if (h < e.maxTranslate())
        c.freeMode.momentumBounce
          ? (h + e.maxTranslate() < -y && (h = e.maxTranslate() - y),
            (b = e.maxTranslate()),
            (E = !0),
            (S.allowMomentumBounce = !0))
          : (h = e.maxTranslate()),
          c.loop && c.centeredSlides && (z = !0);
      else if (h > e.minTranslate())
        c.freeMode.momentumBounce
          ? (h - e.minTranslate() > y && (h = e.minTranslate() + y),
            (b = e.minTranslate()),
            (E = !0),
            (S.allowMomentumBounce = !0))
          : (h = e.minTranslate()),
          c.loop && c.centeredSlides && (z = !0);
      else if (c.freeMode.sticky) {
        let C;
        for (let T = 0; T < v.length; T += 1)
          if (v[T] > -h) {
            C = T;
            break;
          }
        Math.abs(v[C] - h) < Math.abs(v[C - 1] - h) ||
        e.swipeDirection === "next"
          ? (h = v[C])
          : (h = v[C - 1]),
          (h = -h);
      }
      if (
        (z &&
          i("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (m
            ? (g = Math.abs((-h - e.translate) / e.velocity))
            : (g = Math.abs((h - e.translate) / e.velocity)),
          c.freeMode.sticky)
        ) {
          const C = Math.abs((m ? -h : h) - e.translate),
            T = e.slidesSizesGrid[e.activeIndex];
          C < T
            ? (g = c.speed)
            : C < 2 * T
            ? (g = c.speed * 1.5)
            : (g = c.speed * 2.5);
        }
      } else if (c.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      c.freeMode.momentumBounce && E
        ? (e.updateProgress(b),
          e.setTransition(g),
          e.setTranslate(h),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          fr(u, () => {
            !e ||
              e.destroyed ||
              !S.allowMomentumBounce ||
              (r("momentumBounce"),
              e.setTransition(c.speed),
              setTimeout(() => {
                e.setTranslate(b),
                  fr(u, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (r("_freeModeNoMomentumRelease"),
          e.updateProgress(h),
          e.setTransition(g),
          e.setTranslate(h),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            fr(u, () => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(h),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (c.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else c.freeMode && r("_freeModeNoMomentumRelease");
    (!c.freeMode.momentum || j >= c.longSwipesMs) &&
      (r("_freeModeStaticRelease"),
      e.updateProgress(),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: n, onTouchMove: o, onTouchEnd: d },
  });
}
function lx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({ grid: { rows: 1, fill: "column" } });
  let i, n, o, d;
  const l = () => {
      let x = e.params.spaceBetween;
      return (
        typeof x == "string" && x.indexOf("%") >= 0
          ? (x = (parseFloat(x.replace("%", "")) / 100) * e.size)
          : typeof x == "string" && (x = parseFloat(x)),
        x
      );
    },
    p = (x) => {
      const { slidesPerView: j } = e.params,
        { rows: g, fill: f } = e.params.grid,
        h =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : x.length;
      (o = Math.floor(h / g)),
        Math.floor(h / g) === h / g ? (i = h) : (i = Math.ceil(h / g) * g),
        j !== "auto" && f === "row" && (i = Math.max(i, j * g)),
        (n = i / g);
    },
    c = () => {
      e.slides &&
        e.slides.forEach((x) => {
          x.swiperSlideGridSet &&
            ((x.style.height = ""),
            (x.style[e.getDirectionLabel("margin-top")] = ""));
        });
    },
    u = (x, j, g) => {
      const { slidesPerGroup: f } = e.params,
        h = l(),
        { rows: E, fill: b } = e.params.grid,
        y =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : g.length;
      let z, C, T;
      if (b === "row" && f > 1) {
        const O = Math.floor(x / (f * E)),
          N = x - E * f * O,
          R = O === 0 ? f : Math.min(Math.ceil((y - O * E * f) / E), f);
        (T = Math.floor(N / R)),
          (C = N - T * R + O * f),
          (z = C + (T * i) / E),
          (j.style.order = z);
      } else
        b === "column"
          ? ((C = Math.floor(x / E)),
            (T = x - C * E),
            (C > o || (C === o && T === E - 1)) &&
              ((T += 1), T >= E && ((T = 0), (C += 1))))
          : ((T = Math.floor(x / n)), (C = x - T * n));
      (j.row = T),
        (j.column = C),
        (j.style.height = `calc((100% - ${(E - 1) * h}px) / ${E})`),
        (j.style[e.getDirectionLabel("margin-top")] =
          T !== 0 ? h && `${h}px` : ""),
        (j.swiperSlideGridSet = !0);
    },
    m = (x, j) => {
      const { centeredSlides: g, roundLengths: f } = e.params,
        h = l(),
        { rows: E } = e.params.grid;
      if (
        ((e.virtualSize = (x + h) * i),
        (e.virtualSize = Math.ceil(e.virtualSize / E) - h),
        e.params.cssMode ||
          (e.wrapperEl.style[e.getDirectionLabel("width")] = `${
            e.virtualSize + h
          }px`),
        g)
      ) {
        const b = [];
        for (let y = 0; y < j.length; y += 1) {
          let z = j[y];
          f && (z = Math.floor(z)), j[y] < e.virtualSize + j[0] && b.push(z);
        }
        j.splice(0, j.length), j.push(...b);
      }
    },
    v = () => {
      d = e.params.grid && e.params.grid.rows > 1;
    },
    S = () => {
      const { params: x, el: j } = e,
        g = x.grid && x.grid.rows > 1;
      d && !g
        ? (j.classList.remove(
            `${x.containerModifierClass}grid`,
            `${x.containerModifierClass}grid-column`
          ),
          (o = 1),
          e.emitContainerClasses())
        : !d &&
          g &&
          (j.classList.add(`${x.containerModifierClass}grid`),
          x.grid.fill === "column" &&
            j.classList.add(`${x.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        (d = g);
    };
  r("init", v),
    r("update", S),
    (e.grid = {
      initSlides: p,
      unsetSlides: c,
      updateSlide: u,
      updateWrapperSize: m,
    });
}
function dx(a) {
  const e = this,
    { params: s, slidesEl: r } = e;
  s.loop && e.loopDestroy();
  const i = (n) => {
    if (typeof n == "string") {
      const o = document.createElement("div");
      (o.innerHTML = n), r.append(o.children[0]), (o.innerHTML = "");
    } else r.append(n);
  };
  if (typeof a == "object" && "length" in a)
    for (let n = 0; n < a.length; n += 1) a[n] && i(a[n]);
  else i(a);
  e.recalcSlides(),
    s.loop && e.loopCreate(),
    (!s.observer || e.isElement) && e.update();
}
function ux(a) {
  const e = this,
    { params: s, activeIndex: r, slidesEl: i } = e;
  s.loop && e.loopDestroy();
  let n = r + 1;
  const o = (d) => {
    if (typeof d == "string") {
      const l = document.createElement("div");
      (l.innerHTML = d), i.prepend(l.children[0]), (l.innerHTML = "");
    } else i.prepend(d);
  };
  if (typeof a == "object" && "length" in a) {
    for (let d = 0; d < a.length; d += 1) a[d] && o(a[d]);
    n = r + a.length;
  } else o(a);
  e.recalcSlides(),
    s.loop && e.loopCreate(),
    (!s.observer || e.isElement) && e.update(),
    e.slideTo(n, 0, !1);
}
function cx(a, e) {
  const s = this,
    { params: r, activeIndex: i, slidesEl: n } = s;
  let o = i;
  r.loop && ((o -= s.loopedSlides), s.loopDestroy(), s.recalcSlides());
  const d = s.slides.length;
  if (a <= 0) {
    s.prependSlide(e);
    return;
  }
  if (a >= d) {
    s.appendSlide(e);
    return;
  }
  let l = o > a ? o + 1 : o;
  const p = [];
  for (let c = d - 1; c >= a; c -= 1) {
    const u = s.slides[c];
    u.remove(), p.unshift(u);
  }
  if (typeof e == "object" && "length" in e) {
    for (let c = 0; c < e.length; c += 1) e[c] && n.append(e[c]);
    l = o > a ? o + e.length : o;
  } else n.append(e);
  for (let c = 0; c < p.length; c += 1) n.append(p[c]);
  s.recalcSlides(),
    r.loop && s.loopCreate(),
    (!r.observer || s.isElement) && s.update(),
    r.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1);
}
function px(a) {
  const e = this,
    { params: s, activeIndex: r } = e;
  let i = r;
  s.loop && ((i -= e.loopedSlides), e.loopDestroy());
  let n = i,
    o;
  if (typeof a == "object" && "length" in a) {
    for (let d = 0; d < a.length; d += 1)
      (o = a[d]), e.slides[o] && e.slides[o].remove(), o < n && (n -= 1);
    n = Math.max(n, 0);
  } else
    (o = a),
      e.slides[o] && e.slides[o].remove(),
      o < n && (n -= 1),
      (n = Math.max(n, 0));
  e.recalcSlides(),
    s.loop && e.loopCreate(),
    (!s.observer || e.isElement) && e.update(),
    s.loop ? e.slideTo(n + e.loopedSlides, 0, !1) : e.slideTo(n, 0, !1);
}
function mx() {
  const a = this,
    e = [];
  for (let s = 0; s < a.slides.length; s += 1) e.push(s);
  a.removeSlide(e);
}
function fx(a) {
  let { swiper: e } = a;
  Object.assign(e, {
    appendSlide: dx.bind(e),
    prependSlide: ux.bind(e),
    addSlide: cx.bind(e),
    removeSlide: px.bind(e),
    removeAllSlides: mx.bind(e),
  });
}
function $s(a) {
  const {
    effect: e,
    swiper: s,
    on: r,
    setTranslate: i,
    setTransition: n,
    overwriteParams: o,
    perspective: d,
    recreateShadows: l,
    getEffectParams: p,
  } = a;
  r("beforeInit", () => {
    if (s.params.effect !== e) return;
    s.classNames.push(`${s.params.containerModifierClass}${e}`),
      d && d() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const u = o ? o() : {};
    Object.assign(s.params, u), Object.assign(s.originalParams, u);
  }),
    r("setTranslate", () => {
      s.params.effect === e && i();
    }),
    r("setTransition", (u, m) => {
      s.params.effect === e && n(m);
    }),
    r("transitionEnd", () => {
      if (s.params.effect === e && l) {
        if (!p || !p().slideShadows) return;
        s.slides.forEach((u) => {
          u.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          ).forEach((m) => m.remove());
        }),
          l();
      }
    });
  let c;
  r("virtualUpdate", () => {
    s.params.effect === e &&
      (s.slides.length || (c = !0),
      requestAnimationFrame(() => {
        c && s.slides && s.slides.length && (i(), (c = !1));
      }));
  });
}
function Br(a, e) {
  const s = ds(e);
  return (
    s !== e &&
      ((s.style.backfaceVisibility = "hidden"),
      (s.style["-webkit-backface-visibility"] = "hidden")),
    s
  );
}
function xi(a) {
  let { swiper: e, duration: s, transformElements: r, allSlides: i } = a;
  const { activeIndex: n } = e,
    o = (d) =>
      d.parentElement
        ? d.parentElement
        : e.slides.filter(
            (p) => p.shadowRoot && p.shadowRoot === d.parentNode
          )[0];
  if (e.params.virtualTranslate && s !== 0) {
    let d = !1,
      l;
    i
      ? (l = r)
      : (l = r.filter((p) => {
          const c = p.classList.contains("swiper-slide-transform") ? o(p) : p;
          return e.getSlideIndex(c) === n;
        })),
      l.forEach((p) => {
        fr(p, () => {
          if (d || !e || e.destroyed) return;
          (d = !0), (e.animating = !1);
          const c = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          e.wrapperEl.dispatchEvent(c);
        });
      });
  }
}
function hx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({ fadeEffect: { crossFade: !1 } }),
    $s({
      effect: "fade",
      swiper: e,
      on: r,
      setTranslate: () => {
        const { slides: o } = e,
          d = e.params.fadeEffect;
        for (let l = 0; l < o.length; l += 1) {
          const p = e.slides[l];
          let u = -p.swiperSlideOffset;
          e.params.virtualTranslate || (u -= e.translate);
          let m = 0;
          e.isHorizontal() || ((m = u), (u = 0));
          const v = e.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(p.progress), 0)
              : 1 + Math.min(Math.max(p.progress, -1), 0),
            S = Br(d, p);
          (S.style.opacity = v),
            (S.style.transform = `translate3d(${u}px, ${m}px, 0px)`);
        }
      },
      setTransition: (o) => {
        const d = e.slides.map((l) => ds(l));
        d.forEach((l) => {
          l.style.transitionDuration = `${o}ms`;
        }),
          xi({ swiper: e, duration: o, transformElements: d, allSlides: !0 });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
function gx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });
  const i = (l, p, c) => {
    let u = c
        ? l.querySelector(".swiper-slide-shadow-left")
        : l.querySelector(".swiper-slide-shadow-top"),
      m = c
        ? l.querySelector(".swiper-slide-shadow-right")
        : l.querySelector(".swiper-slide-shadow-bottom");
    u ||
      ((u = De(
        "div",
        `swiper-slide-shadow-cube swiper-slide-shadow-${
          c ? "left" : "top"
        }`.split(" ")
      )),
      l.append(u)),
      m ||
        ((m = De(
          "div",
          `swiper-slide-shadow-cube swiper-slide-shadow-${
            c ? "right" : "bottom"
          }`.split(" ")
        )),
        l.append(m)),
      u && (u.style.opacity = Math.max(-p, 0)),
      m && (m.style.opacity = Math.max(p, 0));
  };
  $s({
    effect: "cube",
    swiper: e,
    on: r,
    setTranslate: () => {
      const {
          el: l,
          wrapperEl: p,
          slides: c,
          width: u,
          height: m,
          rtlTranslate: v,
          size: S,
          browser: x,
        } = e,
        j = e.params.cubeEffect,
        g = e.isHorizontal(),
        f = e.virtual && e.params.virtual.enabled;
      let h = 0,
        E;
      j.shadow &&
        (g
          ? ((E = e.wrapperEl.querySelector(".swiper-cube-shadow")),
            E || ((E = De("div", "swiper-cube-shadow")), e.wrapperEl.append(E)),
            (E.style.height = `${u}px`))
          : ((E = l.querySelector(".swiper-cube-shadow")),
            E || ((E = De("div", "swiper-cube-shadow")), l.append(E))));
      for (let y = 0; y < c.length; y += 1) {
        const z = c[y];
        let C = y;
        f && (C = parseInt(z.getAttribute("data-swiper-slide-index"), 10));
        let T = C * 90,
          O = Math.floor(T / 360);
        v && ((T = -T), (O = Math.floor(-T / 360)));
        const N = Math.max(Math.min(z.progress, 1), -1);
        let R = 0,
          I = 0,
          w = 0;
        C % 4 === 0
          ? ((R = -O * 4 * S), (w = 0))
          : (C - 1) % 4 === 0
          ? ((R = 0), (w = -O * 4 * S))
          : (C - 2) % 4 === 0
          ? ((R = S + O * 4 * S), (w = S))
          : (C - 3) % 4 === 0 && ((R = -S), (w = 3 * S + S * 4 * O)),
          v && (R = -R),
          g || ((I = R), (R = 0));
        const M = `rotateX(${g ? 0 : -T}deg) rotateY(${
          g ? T : 0
        }deg) translate3d(${R}px, ${I}px, ${w}px)`;
        N <= 1 &&
          N > -1 &&
          ((h = C * 90 + N * 90), v && (h = -C * 90 - N * 90)),
          (z.style.transform = M),
          j.slideShadows && i(z, N, g);
      }
      if (
        ((p.style.transformOrigin = `50% 50% -${S / 2}px`),
        (p.style["-webkit-transform-origin"] = `50% 50% -${S / 2}px`),
        j.shadow)
      )
        if (g)
          E.style.transform = `translate3d(0px, ${u / 2 + j.shadowOffset}px, ${
            -u / 2
          }px) rotateX(90deg) rotateZ(0deg) scale(${j.shadowScale})`;
        else {
          const y = Math.abs(h) - Math.floor(Math.abs(h) / 90) * 90,
            z =
              1.5 -
              (Math.sin((y * 2 * Math.PI) / 360) / 2 +
                Math.cos((y * 2 * Math.PI) / 360) / 2),
            C = j.shadowScale,
            T = j.shadowScale / z,
            O = j.shadowOffset;
          E.style.transform = `scale3d(${C}, 1, ${T}) translate3d(0px, ${
            m / 2 + O
          }px, ${-m / 2 / T}px) rotateX(-90deg)`;
        }
      const b =
        (x.isSafari || x.isWebView) && x.needPerspectiveFix ? -S / 2 : 0;
      (p.style.transform = `translate3d(0px,0,${b}px) rotateX(${
        e.isHorizontal() ? 0 : h
      }deg) rotateY(${e.isHorizontal() ? -h : 0}deg)`),
        p.style.setProperty("--swiper-cube-translate-z", `${b}px`);
    },
    setTransition: (l) => {
      const { el: p, slides: c } = e;
      if (
        (c.forEach((u) => {
          (u.style.transitionDuration = `${l}ms`),
            u
              .querySelectorAll(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .forEach((m) => {
                m.style.transitionDuration = `${l}ms`;
              });
        }),
        e.params.cubeEffect.shadow && !e.isHorizontal())
      ) {
        const u = p.querySelector(".swiper-cube-shadow");
        u && (u.style.transitionDuration = `${l}ms`);
      }
    },
    recreateShadows: () => {
      const l = e.isHorizontal();
      e.slides.forEach((p) => {
        const c = Math.max(Math.min(p.progress, 1), -1);
        i(p, c, l);
      });
    },
    getEffectParams: () => e.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0,
    }),
  });
}
function qs(a, e, s) {
  const r = `swiper-slide-shadow${s ? `-${s}` : ""}${
      a ? ` swiper-slide-shadow-${a}` : ""
    }`,
    i = ds(e);
  let n = i.querySelector(`.${r.split(" ").join(".")}`);
  return n || ((n = De("div", r.split(" "))), i.append(n)), n;
}
function vx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
  const i = (l, p) => {
    let c = e.isHorizontal()
        ? l.querySelector(".swiper-slide-shadow-left")
        : l.querySelector(".swiper-slide-shadow-top"),
      u = e.isHorizontal()
        ? l.querySelector(".swiper-slide-shadow-right")
        : l.querySelector(".swiper-slide-shadow-bottom");
    c || (c = qs("flip", l, e.isHorizontal() ? "left" : "top")),
      u || (u = qs("flip", l, e.isHorizontal() ? "right" : "bottom")),
      c && (c.style.opacity = Math.max(-p, 0)),
      u && (u.style.opacity = Math.max(p, 0));
  };
  $s({
    effect: "flip",
    swiper: e,
    on: r,
    setTranslate: () => {
      const { slides: l, rtlTranslate: p } = e,
        c = e.params.flipEffect;
      for (let u = 0; u < l.length; u += 1) {
        const m = l[u];
        let v = m.progress;
        e.params.flipEffect.limitRotation &&
          (v = Math.max(Math.min(m.progress, 1), -1));
        const S = m.swiperSlideOffset;
        let j = -180 * v,
          g = 0,
          f = e.params.cssMode ? -S - e.translate : -S,
          h = 0;
        e.isHorizontal()
          ? p && (j = -j)
          : ((h = f), (f = 0), (g = -j), (j = 0)),
          (m.style.zIndex = -Math.abs(Math.round(v)) + l.length),
          c.slideShadows && i(m, v);
        const E = `translate3d(${f}px, ${h}px, 0px) rotateX(${g}deg) rotateY(${j}deg)`,
          b = Br(c, m);
        b.style.transform = E;
      }
    },
    setTransition: (l) => {
      const p = e.slides.map((c) => ds(c));
      p.forEach((c) => {
        (c.style.transitionDuration = `${l}ms`),
          c
            .querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .forEach((u) => {
              u.style.transitionDuration = `${l}ms`;
            });
      }),
        xi({ swiper: e, duration: l, transformElements: p });
    },
    recreateShadows: () => {
      e.params.flipEffect,
        e.slides.forEach((l) => {
          let p = l.progress;
          e.params.flipEffect.limitRotation &&
            (p = Math.max(Math.min(l.progress, 1), -1)),
            i(l, p);
        });
    },
    getEffectParams: () => e.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function xx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0,
    },
  }),
    $s({
      effect: "coverflow",
      swiper: e,
      on: r,
      setTranslate: () => {
        const { width: o, height: d, slides: l, slidesSizesGrid: p } = e,
          c = e.params.coverflowEffect,
          u = e.isHorizontal(),
          m = e.translate,
          v = u ? -m + o / 2 : -m + d / 2,
          S = u ? c.rotate : -c.rotate,
          x = c.depth;
        for (let j = 0, g = l.length; j < g; j += 1) {
          const f = l[j],
            h = p[j],
            E = f.swiperSlideOffset,
            b = (v - E - h / 2) / h,
            y =
              typeof c.modifier == "function" ? c.modifier(b) : b * c.modifier;
          let z = u ? S * y : 0,
            C = u ? 0 : S * y,
            T = -x * Math.abs(y),
            O = c.stretch;
          typeof O == "string" &&
            O.indexOf("%") !== -1 &&
            (O = (parseFloat(c.stretch) / 100) * h);
          let N = u ? 0 : O * y,
            R = u ? O * y : 0,
            I = 1 - (1 - c.scale) * Math.abs(y);
          Math.abs(R) < 0.001 && (R = 0),
            Math.abs(N) < 0.001 && (N = 0),
            Math.abs(T) < 0.001 && (T = 0),
            Math.abs(z) < 0.001 && (z = 0),
            Math.abs(C) < 0.001 && (C = 0),
            Math.abs(I) < 0.001 && (I = 0);
          const w = `translate3d(${R}px,${N}px,${T}px)  rotateX(${C}deg) rotateY(${z}deg) scale(${I})`,
            M = Br(c, f);
          if (
            ((M.style.transform = w),
            (f.style.zIndex = -Math.abs(Math.round(y)) + 1),
            c.slideShadows)
          ) {
            let q = u
                ? f.querySelector(".swiper-slide-shadow-left")
                : f.querySelector(".swiper-slide-shadow-top"),
              D = u
                ? f.querySelector(".swiper-slide-shadow-right")
                : f.querySelector(".swiper-slide-shadow-bottom");
            q || (q = qs("coverflow", f, u ? "left" : "top")),
              D || (D = qs("coverflow", f, u ? "right" : "bottom")),
              q && (q.style.opacity = y > 0 ? y : 0),
              D && (D.style.opacity = -y > 0 ? -y : 0);
          }
        }
      },
      setTransition: (o) => {
        e.slides
          .map((l) => ds(l))
          .forEach((l) => {
            (l.style.transitionDuration = `${o}ms`),
              l
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((p) => {
                  p.style.transitionDuration = `${o}ms`;
                });
          });
      },
      perspective: () => !0,
      overwriteParams: () => ({ watchSlidesProgress: !0 }),
    });
}
function Sx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
      next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
    },
  });
  const i = (d) => (typeof d == "string" ? d : `${d}px`);
  $s({
    effect: "creative",
    swiper: e,
    on: r,
    setTranslate: () => {
      const { slides: d, wrapperEl: l, slidesSizesGrid: p } = e,
        c = e.params.creativeEffect,
        { progressMultiplier: u } = c,
        m = e.params.centeredSlides;
      if (m) {
        const v = p[0] / 2 - e.params.slidesOffsetBefore || 0;
        l.style.transform = `translateX(calc(50% - ${v}px))`;
      }
      for (let v = 0; v < d.length; v += 1) {
        const S = d[v],
          x = S.progress,
          j = Math.min(Math.max(S.progress, -c.limitProgress), c.limitProgress);
        let g = j;
        m ||
          (g = Math.min(
            Math.max(S.originalProgress, -c.limitProgress),
            c.limitProgress
          ));
        const f = S.swiperSlideOffset,
          h = [e.params.cssMode ? -f - e.translate : -f, 0, 0],
          E = [0, 0, 0];
        let b = !1;
        e.isHorizontal() || ((h[1] = h[0]), (h[0] = 0));
        let y = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1,
        };
        j < 0 ? ((y = c.next), (b = !0)) : j > 0 && ((y = c.prev), (b = !0)),
          h.forEach((I, w) => {
            h[w] = `calc(${I}px + (${i(y.translate[w])} * ${Math.abs(j * u)}))`;
          }),
          E.forEach((I, w) => {
            E[w] = y.rotate[w] * Math.abs(j * u);
          }),
          (S.style.zIndex = -Math.abs(Math.round(x)) + d.length);
        const z = h.join(", "),
          C = `rotateX(${E[0]}deg) rotateY(${E[1]}deg) rotateZ(${E[2]}deg)`,
          T =
            g < 0
              ? `scale(${1 + (1 - y.scale) * g * u})`
              : `scale(${1 - (1 - y.scale) * g * u})`,
          O = g < 0 ? 1 + (1 - y.opacity) * g * u : 1 - (1 - y.opacity) * g * u,
          N = `translate3d(${z}) ${C} ${T}`;
        if ((b && y.shadow) || !b) {
          let I = S.querySelector(".swiper-slide-shadow");
          if ((!I && y.shadow && (I = qs("creative", S)), I)) {
            const w = c.shadowPerProgress ? j * (1 / c.limitProgress) : j;
            I.style.opacity = Math.min(Math.max(Math.abs(w), 0), 1);
          }
        }
        const R = Br(c, S);
        (R.style.transform = N),
          (R.style.opacity = O),
          y.origin && (R.style.transformOrigin = y.origin);
      }
    },
    setTransition: (d) => {
      const l = e.slides.map((p) => ds(p));
      l.forEach((p) => {
        (p.style.transitionDuration = `${d}ms`),
          p.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
            c.style.transitionDuration = `${d}ms`;
          });
      }),
        xi({ swiper: e, duration: d, transformElements: l, allSlides: !0 });
    },
    perspective: () => e.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode,
    }),
  });
}
function jx(a) {
  let { swiper: e, extendParams: s, on: r } = a;
  s({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8,
    },
  }),
    $s({
      effect: "cards",
      swiper: e,
      on: r,
      setTranslate: () => {
        const { slides: o, activeIndex: d, rtlTranslate: l } = e,
          p = e.params.cardsEffect,
          { startTranslate: c, isTouched: u } = e.touchEventsData,
          m = l ? -e.translate : e.translate;
        for (let v = 0; v < o.length; v += 1) {
          const S = o[v],
            x = S.progress,
            j = Math.min(Math.max(x, -4), 4);
          let g = S.swiperSlideOffset;
          e.params.centeredSlides &&
            !e.params.cssMode &&
            (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
            e.params.centeredSlides &&
              e.params.cssMode &&
              (g -= o[0].swiperSlideOffset);
          let f = e.params.cssMode ? -g - e.translate : -g,
            h = 0;
          const E = -100 * Math.abs(j);
          let b = 1,
            y = -p.perSlideRotate * j,
            z = p.perSlideOffset - Math.abs(j) * 0.75;
          const C =
              e.virtual && e.params.virtual.enabled ? e.virtual.from + v : v,
            T =
              (C === d || C === d - 1) &&
              j > 0 &&
              j < 1 &&
              (u || e.params.cssMode) &&
              m < c,
            O =
              (C === d || C === d + 1) &&
              j < 0 &&
              j > -1 &&
              (u || e.params.cssMode) &&
              m > c;
          if (T || O) {
            const w = (1 - Math.abs((Math.abs(j) - 0.5) / 0.5)) ** 0.5;
            (y += -28 * j * w),
              (b += -0.5 * w),
              (z += 96 * w),
              (h = `${-25 * w * Math.abs(j)}%`);
          }
          if (
            (j < 0
              ? (f = `calc(${f}px ${l ? "-" : "+"} (${z * Math.abs(j)}%))`)
              : j > 0
              ? (f = `calc(${f}px ${l ? "-" : "+"} (-${z * Math.abs(j)}%))`)
              : (f = `${f}px`),
            !e.isHorizontal())
          ) {
            const w = h;
            (h = f), (f = w);
          }
          const N = j < 0 ? `${1 + (1 - b) * j}` : `${1 - (1 - b) * j}`,
            R = `
        translate3d(${f}, ${h}, ${E}px)
        rotateZ(${p.rotate ? (l ? -y : y) : 0}deg)
        scale(${N})
      `;
          if (p.slideShadows) {
            let w = S.querySelector(".swiper-slide-shadow");
            w || (w = qs("cards", S)),
              w &&
                (w.style.opacity = Math.min(
                  Math.max((Math.abs(j) - 0.5) / 0.5, 0),
                  1
                ));
          }
          S.style.zIndex = -Math.abs(Math.round(x)) + o.length;
          const I = Br(p, S);
          I.style.transform = R;
        }
      },
      setTransition: (o) => {
        const d = e.slides.map((l) => ds(l));
        d.forEach((l) => {
          (l.style.transitionDuration = `${o}ms`),
            l.querySelectorAll(".swiper-slide-shadow").forEach((p) => {
              p.style.transitionDuration = `${o}ms`;
            });
        }),
          xi({ swiper: e, duration: o, transformElements: d });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode,
      }),
    });
}
function Ex() {
  return t.jsx(t.Fragment, {
    children: t.jsx("header", {
      children: t.jsxs(hp, {
        style: {
          "--swiper-navigation-color": "#c90603",
          "--swiper-pagination-color": "#c90603",
        },
        effect: "fade",
        pagination: { clickable: !0, dynamicBullets: !0 },
        navigation: !0,
        autoplay: { delay: 3e3, disableOnInteraction: !1 },
        parallax: !0,
        children: [
          t.jsx(Ha, {
            children: t.jsxs("a", {
              href: "/",
              children: [
                t.jsx("div", {
                  slot: "container-start",
                  className: "parallax-bg",
                  id: "prlx",
                  style: { "background-image": 'url("./slide/01.jpg")' },
                  "data-swiper-parallax": "-23%",
                }),
                t.jsx("div", {
                  className: "title",
                  "data-swiper-parallax": "-300",
                  children: "Taro na Net",
                }),
              ],
            }),
          }),
          t.jsx(Ha, {
            children: t.jsxs("a", {
              href: "/magia-dos-ciganos",
              children: [
                t.jsx("div", {
                  slot: "container-start",
                  className: "parallax-bg",
                  style: { "background-image": 'url("./slide/02.jpg")' },
                  "data-swiper-parallax": "-23%",
                }),
                t.jsx("div", {
                  className: "title",
                  "data-swiper-parallax": "-300",
                  children: "Ciganos",
                }),
              ],
            }),
          }),
          t.jsx(Ha, {
            children: t.jsxs("a", {
              href: "/banhos-e-ervas",
              children: [
                t.jsx("div", {
                  slot: "container-start",
                  className: "parallax-bg",
                  style: { "background-image": 'url("./slide/04.jpg")' },
                  "data-swiper-parallax": "-23%",
                }),
                t.jsx("div", {
                  className: "title",
                  "data-swiper-parallax": "-300",
                  children: "Banhos e Ervas",
                }),
              ],
            }),
          }),
          t.jsx(Ha, {
            children: t.jsxs("a", {
              href: "/cartomancia",
              children: [
                t.jsx("div", {
                  slot: "container-start",
                  className: "parallax-bg",
                  style: { "background-image": 'url("./slide/05.jpg")' },
                  "data-swiper-parallax": "-23%",
                }),
                t.jsx("div", {
                  className: "title",
                  "data-swiper-parallax": "-300",
                  children: "Cartomancia",
                }),
              ],
            }),
          }),
          t.jsx(Ha, {
            children: t.jsxs("a", {
              href: "/mensagem-das-velas",
              children: [
                t.jsx("div", {
                  slot: "container-start",
                  className: "parallax-bg",
                  style: { "background-image": 'url("./slide/06.jpg")' },
                  "data-swiper-parallax": "-23%",
                }),
                t.jsx("div", {
                  className: "title",
                  "data-swiper-parallax": "-300",
                  children: "Mensagem das Velas",
                }),
              ],
            }),
          }),
          t.jsx(Ha, {
            children: t.jsxs("a", {
              href: "mesa-radionica",
              children: [
                t.jsx("div", {
                  slot: "container-start",
                  className: "parallax-bg",
                  style: {
                    "background-image": 'url("./pages/mesaRadionica/01.jpg")',
                  },
                  "data-swiper-parallax": "-23%",
                }),
                t.jsx("div", {
                  className: "title",
                  "data-swiper-parallax": "-300",
                  children: "Mesa Radionica",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function wx() {
  return t.jsxs(t.Fragment, {
    children: [t.jsx(Eg, {}), t.jsx(Ex, {}), t.jsx(jg, {})],
  });
}
const bx = [
  Wv,
  Qv,
  Xv,
  Yv,
  Zv,
  Kv,
  Jv,
  ex,
  ax,
  sx,
  rx,
  tx,
  ix,
  nx,
  ox,
  lx,
  fx,
  hx,
  gx,
  vx,
  xx,
  Sx,
  jx,
];
$r.use(bx);
const Rd = (a) => {
    if (parseFloat(a) === Number(a)) return Number(a);
    if (a === "true" || a === "") return !0;
    if (a === "false") return !1;
    if (a === "null") return null;
    if (a !== "undefined") {
      if (
        typeof a == "string" &&
        a.includes("{") &&
        a.includes("}") &&
        a.includes('"')
      ) {
        let e;
        try {
          e = JSON.parse(a);
        } catch {
          e = a;
        }
        return e;
      }
      return a;
    }
  },
  Nd = [
    "a11y",
    "autoplay",
    "controller",
    "cards-effect",
    "coverflow-effect",
    "creative-effect",
    "cube-effect",
    "fade-effect",
    "flip-effect",
    "free-mode",
    "grid",
    "hash-navigation",
    "history",
    "keyboard",
    "mousewheel",
    "navigation",
    "pagination",
    "parallax",
    "scrollbar",
    "thumbs",
    "virtual",
    "zoom",
  ];
function Dd(a, e, s) {
  const r = {},
    i = {};
  ka(r, Kt);
  const n = [...Vs, "on"],
    o = n.map((l) => l.replace(/_/, ""));
  n.forEach((l) => {
    (l = l.replace("_", "")), typeof a[l] < "u" && (i[l] = a[l]);
  });
  const d = [...a.attributes];
  return (
    typeof e == "string" &&
      typeof s < "u" &&
      d.push({ name: e, value: va(s) ? { ...s } : s }),
    d.forEach((l) => {
      const p = Nd.filter((c) => l.name.indexOf(`${c}-`) === 0)[0];
      if (p) {
        const c = bt(p),
          u = bt(l.name.split(`${p}-`)[1]);
        typeof i[c] > "u" && (i[c] = {}),
          i[c] === !0 && (i[c] = { enabled: !0 }),
          (i[c][u] = Rd(l.value));
      } else {
        const c = bt(l.name);
        if (!o.includes(c)) return;
        const u = Rd(l.value);
        i[c] && Nd.includes(l.name) && !va(u)
          ? (i[c].constructor !== Object && (i[c] = {}), (i[c].enabled = !!u))
          : (i[c] = u);
      }
    }),
    ka(r, i),
    r.navigation
      ? (r.navigation = {
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
          ...(r.navigation !== !0 ? r.navigation : {}),
        })
      : r.navigation === !1 && delete r.navigation,
    r.scrollbar
      ? (r.scrollbar = {
          el: ".swiper-scrollbar",
          ...(r.scrollbar !== !0 ? r.scrollbar : {}),
        })
      : r.scrollbar === !1 && delete r.scrollbar,
    r.pagination
      ? (r.pagination = {
          el: ".swiper-pagination",
          ...(r.pagination !== !0 ? r.pagination : {}),
        })
      : r.pagination === !1 && delete r.pagination,
    { params: r, passedParams: i }
  );
}
const yx =
    ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",
  Ax =
    "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
class Tx {}
const gp = typeof window > "u" || typeof HTMLElement > "u" ? Tx : HTMLElement,
  qd = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,
  vp = (a, e) => {
    if (typeof CSSStyleSheet < "u" && a.adoptedStyleSheets) {
      const s = new CSSStyleSheet();
      s.replaceSync(e), (a.adoptedStyleSheets = [s]);
    } else {
      const s = document.createElement("style");
      (s.rel = "stylesheet"), (s.textContent = e), a.appendChild(s);
    }
  };
class xp extends gp {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get nextButtonSvg() {
    return qd;
  }
  static get prevButtonSvg() {
    return qd.replace(
      "/></svg>",
      ' transform-origin="center" transform="rotate(180)"/></svg>'
    );
  }
  cssStyles() {
    return [
      yx,
      ...(this.injectStyles && Array.isArray(this.injectStyles)
        ? this.injectStyles
        : []),
    ].join(`
`);
  }
  cssLinks() {
    return this.injectStylesUrls || [];
  }
  calcSlideSlots() {
    const e = this.slideSlots || 0,
      s = [...this.querySelectorAll("[slot^=slide-]")].map((r) =>
        parseInt(r.getAttribute("slot").split("slide-")[1], 10)
      );
    if (
      ((this.slideSlots = s.length ? Math.max(...s) + 1 : 0), !!this.rendered)
    ) {
      if (this.slideSlots > e)
        for (let r = e; r < this.slideSlots; r += 1) {
          const i = document.createElement("swiper-slide");
          i.setAttribute("part", `slide slide-${r + 1}`);
          const n = document.createElement("slot");
          n.setAttribute("name", `slide-${r + 1}`),
            i.appendChild(n),
            this.shadowRoot.querySelector(".swiper-wrapper").appendChild(i);
        }
      else if (this.slideSlots < e) {
        const r = this.swiper.slides;
        for (let i = r.length - 1; i >= 0; i -= 1)
          i > this.slideSlots && r[i].remove();
      }
    }
  }
  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let e = this.cssStyles();
    this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")),
      e.length && vp(this.shadowRoot, e),
      this.cssLinks().forEach((r) => {
        if (this.shadowRoot.querySelector(`link[href="${r}"]`)) return;
        const n = document.createElement("link");
        (n.rel = "stylesheet"), (n.href = r), this.shadowRoot.appendChild(n);
      });
    const s = document.createElement("div");
    s.classList.add("swiper"),
      (s.part = "container"),
      (s.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({ length: this.slideSlots })
          .map(
            (r, i) => `
        <swiper-slide part="slide slide-${i}">
          <slot name="slide-${i}"></slot>
        </swiper-slide>
        `
          )
          .join("")}
      </div>
      <slot name="container-end"></slot>
      ${
        al(this.passedParams)
          ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `
          : ""
      }
      ${
        sl(this.passedParams)
          ? `
        <div part="pagination" class="swiper-pagination"></div>
      `
          : ""
      }
      ${
        rl(this.passedParams)
          ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `
          : ""
      }
    `),
      this.shadowRoot.appendChild(s),
      (this.rendered = !0);
  }
  initialize() {
    var e = this;
    if (this.initialized) return;
    this.initialized = !0;
    const { params: s, passedParams: r } = Dd(this);
    (this.swiperParams = s),
      (this.passedParams = r),
      delete this.swiperParams.init,
      this.render(),
      (this.swiper = new $r(this.shadowRoot.querySelector(".swiper"), {
        ...(s.virtual
          ? {}
          : { observer: !0, observeSlideChildren: this.slideSlots > 0 }),
        ...s,
        touchEventsTarget: "container",
        onAny: function (i) {
          i === "observerUpdate" && e.calcSlideSlots();
          const n = s.eventsPrefix
            ? `${s.eventsPrefix}${i.toLowerCase()}`
            : i.toLowerCase();
          for (
            var o = arguments.length, d = new Array(o > 1 ? o - 1 : 0), l = 1;
            l < o;
            l++
          )
            d[l - 1] = arguments[l];
          const p = new CustomEvent(n, {
            detail: d,
            bubbles: i !== "hashChange",
            cancelable: !0,
          });
          e.dispatchEvent(p);
        },
      }));
  }
  connectedCallback() {
    (this.initialized &&
      this.nested &&
      this.closest("swiper-slide") &&
      this.closest("swiper-slide").swiperLoopMoveDOM) ||
      this.init === !1 ||
      this.getAttribute("init") === "false" ||
      this.initialize();
  }
  disconnectedCallback() {
    (this.nested &&
      this.closest("swiper-slide") &&
      this.closest("swiper-slide").swiperLoopMoveDOM) ||
      (this.swiper && this.swiper.destroy && this.swiper.destroy(),
      (this.initialized = !1));
  }
  updateSwiperOnPropChange(e, s) {
    const { params: r, passedParams: i } = Dd(this, e, s);
    (this.passedParams = i),
      (this.swiperParams = r),
      !(this.swiper && this.swiper.params[e] === s) &&
        pp({
          swiper: this.swiper,
          passedParams: this.passedParams,
          changedParams: [bt(e)],
          ...(e === "navigation" && i[e]
            ? { prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }
            : {}),
          ...(e === "pagination" && i[e]
            ? { paginationEl: ".swiper-pagination" }
            : {}),
          ...(e === "scrollbar" && i[e]
            ? { scrollbarEl: ".swiper-scrollbar" }
            : {}),
        });
  }
  attributeChangedCallback(e, s, r) {
    this.initialized &&
      (s === "true" && r === null && (r = !1),
      this.updateSwiperOnPropChange(e, r));
  }
  static get observedAttributes() {
    return Vs.filter((s) => s.includes("_")).map((s) =>
      s
        .replace(/[A-Z]/g, (r) => `-${r}`)
        .replace("_", "")
        .toLowerCase()
    );
  }
}
Vs.forEach((a) => {
  a !== "init" &&
    ((a = a.replace("_", "")),
    Object.defineProperty(xp.prototype, a, {
      configurable: !0,
      get() {
        return (this.passedParams || {})[a];
      },
      set(e) {
        this.passedParams || (this.passedParams = {}),
          (this.passedParams[a] = e),
          this.initialized && this.updateSwiperOnPropChange(a, e);
      },
    }));
});
class Ox extends gp {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  render() {
    const e =
      this.lazy ||
      this.getAttribute("lazy") === "" ||
      this.getAttribute("lazy") === "true";
    if (
      (vp(this.shadowRoot, Ax),
      this.shadowRoot.appendChild(document.createElement("slot")),
      e)
    ) {
      const s = document.createElement("div");
      s.classList.add("swiper-lazy-preloader"),
        s.part.add("preloader"),
        this.shadowRoot.appendChild(s);
    }
  }
  initialize() {
    this.render();
  }
  connectedCallback() {
    this.initialize();
  }
}
const Cx = () => {
  typeof window > "u" ||
    (window.customElements.get("swiper-container") ||
      window.customElements.define("swiper-container", xp),
    window.customElements.get("swiper-slide") ||
      window.customElements.define("swiper-slide", Ox));
};
typeof window < "u" &&
  (window.SwiperElementRegisterParams = (a) => {
    Vs.push(...a);
  });
Cx();
sn.createRoot(document.getElementById("root")).render(
  t.jsx(re.StrictMode, { children: t.jsx(wx, {}) })
);
