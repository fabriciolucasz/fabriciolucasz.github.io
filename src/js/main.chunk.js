(this.webpackJsonpviakiss = this.webpackJsonpviakiss || []).push([[0], {
    32: function(t, e) {},
    33: function(t, e) {},
    35: function(t, e, n) {},
    36: function(t, e, n) {},
    37: function(t, e, n) {},
    42: function(t, e, n) {},
    49: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n(0)
          , r = n.n(a)
          , s = n(21)
          , c = n.n(s)
          , i = (n(42),
        n(24))
          , o = n(27)
          , u = n(17)
          , j = n(23)
          , l = n(52)
          , b = n(51)
          , m = n(14)
          , d = "viakissKeyboardPattern/SET_MESSAGE"
          , O = (Object(l.a)(d),
        Object(m.b)({
            message: ""
        })())
          , p = Object(b.a)(Object(j.a)({}, d, (function(t, e) {
            var n = e.payload;
            return t.set("message", n)
        }
        )), O)
          , f = Object(u.b)({
            viakissKeyboardPattern: p
        })
          , h = function() {
            var t = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
            return Object(u.c)(f, t)
        }()
          , v = n(9)
          , x = n(10)
          , g = n(12)
          , y = n(11)
          , k = n(3)
          , S = (n(32),
        n(4))
          , P = n(35)
          , T = n.n(P)
          , C = n(18)
          , w = n.n(C)
          , E = n(36)
          , N = n.n(E)
          , F = n(1)
          , _ = w.a.bind(N.a)
          , D = function(t) {
            Object(g.a)(n, t);
            var e = Object(y.a)(n);
            function n() {
                return Object(v.a)(this, n),
                e.apply(this, arguments)
            }
            return Object(x.a)(n, [{
                key: "render",
                value: function() {
                    var t = this.props
                      , e = t.progress
                      , n = t.max
                      , a = t.text
                      , r = 100 * e / n
                      , s = null === a ? "".concat(r, "%") : a;
                    return Object(F.jsxs)("div", {
                        className: _("progress-bar-wrap"),
                        children: [Object(F.jsx)("div", {
                            className: _("progress"),
                            style: {
                                width: "".concat(r, "%")
                            }
                        }), Object(F.jsx)("div", {
                            className: _("text"),
                            children: s
                        })]
                    })
                }
            }]),
            n
        }(a.Component);
        D.defaultProps = {
            progress: 0,
            max: 1,
            text: null
        };
        var L = D
          , M = w.a.bind(T.a)
          , A = Object(m.b)({
            text: "",
            state: "ready"
        })
          , I = function(t) {
            Object(g.a)(n, t);
            var e = Object(y.a)(n);
            function n() {
                return Object(v.a)(this, n),
                e.apply(this, arguments)
            }
            return Object(x.a)(n, [{
                key: "render",
                value: function() {
                    var t = this.props.item
                      , e = t.text
                      , n = t.state;
                    return Object(F.jsx)("div", {
                        className: M("pattern", n),
                        children: e
                    })
                }
            }]),
            n
        }(a.Component);
        I.defaultProps = {
            item: {
                text: "",
                state: "ready"
            }
        };
        var R = function(t) {
            Object(g.a)(n, t);
            var e = Object(y.a)(n);
            function n() {
                var t;
                Object(v.a)(this, n);
                for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++)
                    r[s] = arguments[s];
                return (t = e.call.apply(e, [this].concat(r))).state = {
                    items: Object(m.a)([]),
                    inputCount: 0,
                    result: "",
                    run: !1,
                    remainTime: 0
                },
                t.startTime = 0,
                t.timeFlag = !1,
                t.timerAnimation = null,
                t.initPatterns = function() {
                    for (var e = t.props.textLength, n = [], a = 0; a < e; a++)
                        n[a] = A({});
                    t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                        items: Object(m.a)(n)
                    }))
                }
                ,
                t.resetPatterns = function() {
                    var e = t.state.items.map((function(t, e) {
                        return A({
                            text: t.text,
                            state: 0 === e ? "current" : "ready"
                        })
                    }
                    ));
                    t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                        items: e,
                        inputCount: 0
                    }))
                }
                ,
                t.makePatterns = function() {
                    for (var e = t.props, n = e.patterns, a = e.textLength, r = [], s = 0; s < a; s++)
                        r[s] = A({
                            text: n[Math.floor(Math.random() * n.length)],
                            state: 0 === s ? "current" : "ready"
                        });
                    t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                        items: Object(m.a)(r)
                    }))
                }
                ,
                t.handleResult = function(e) {
                    var n = t.props
                      , a = n.maxTime
                      , r = n.onSuccess
                      , s = n.onFailure
                      , c = t.state.remainTime;
                    e ? (r(a - c),
                    t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                        result: "success"
                    }))) : (s(),
                    t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                        result: "failure"
                    }))),
                    t.timeFlag = !0,
                    t.handleStop()
                }
                ,
                t.handlePatternCheck = function(e) {
                    var n = t.state
                      , a = n.items
                      , r = n.inputCount;
                    if (n.run && r < a.size && !t.timeFlag)
                        if (a.get(r).text === e) {
                            var s = a.update(r, (function(t) {
                                return t.set("state", "success")
                            }
                            ));
                            r + 1 < a.size && (s = s.update(r + 1, (function(t) {
                                return t.set("state", "current")
                            }
                            ))),
                            t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                                items: s
                            })),
                            r === a.size - 1 ? t.handleResult(!0) : t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                                inputCount: r + 1
                            }))
                        } else
                            t.resetPatterns()
                }
                ,
                t.handleStart = function() {
                    t.makePatterns(),
                    t.startTime = Date.now(),
                    t.timeFlag = !1,
                    t.timerAnimation = setInterval((function() {
                        var e = t.props.maxTime
                          , n = Date.now();
                        t.startTime + e <= n ? t.handleResult(!1) : t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                            remainTime: n - t.startTime
                        }))
                    }
                    ), 10),
                    t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                        inputCount: 0,
                        run: !0,
                        result: ""
                    }))
                }
                ,
                t.handleStop = function() {
                    t.setState(Object(S.a)(Object(S.a)({}, t.state), {}, {
                        remainTime: 0,
                        run: !1
                    })),
                    t.timeFlag = !0,
                    clearInterval(t.timerAnimation)
                }
                ,
                t.keyDown = function(e) {
                    var n = t.props.patterns
                      , a = t.state.run
                      , r = String.fromCharCode(e.keyCode).toUpperCase();
                    n.indexOf(r) >= 0 ? t.handlePatternCheck(r) : " " === r && (a ? t.handleStop() : t.handleStart())
                }
                ,
                t.renderPatterns = function() {
                    return t.state.items.map((function(t, e) {
                        return Object(F.jsx)(I, {
                            item: t
                        }, e)
                    }
                    ))
                }
                ,
                t.renderMessage = function() {
                    var e = t.state
                      , n = e.run
                      , a = e.result;
                    return n || "" !== a ? "" !== a ? Object(F.jsxs)("div", {
                        className: M("message", a),
                        children: ["success" === a && "DESARMADA!", "failure" === a && "TEMPO ESGOTADO"]               
                    }) : null : Object(F.jsx)("div", {
                        className: M("message"),
                        children: "Pressione ESPAÇO para começar",
                    }) 
                }
                ,
                t
            }
            return Object(x.a)(n, [{
                key: "componentDidMount",
                value: function() {
                    document.addEventListener("keyup", this.keyDown),
                    this.initPatterns()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("keyup", this.keyDown)
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props.maxTime
                      , e = this.state.remainTime;
                    return Object(F.jsxs)("div", {
                        className: M("pattern-view-wrap"),
                        children: [Object(F.jsx)("div", {
                            className: M("key-patterns"),
                            children: this.renderPatterns()
                        }), Object(F.jsx)("div", {
                            className: M("timer-progress"),
                            children: Object(F.jsx)(L, {
                                progress: t - e,
                                max: t,
                                text: "".concat(((t - e) / 1e3).toFixed(1), "s")
                            })
                        }), this.renderMessage()]
                    })
                }
            }]),
            n
        }(a.Component);
        R.defaultProps = {
            patterns: "QWEASD",
            textLength: 8,
            maxTime: 5.3e3,
            onSuccess: function(t) {},
            onFailure: function() {}
        };
        var U = R
          , X = (n(33),
        n(37))
          , z = n.n(X)
          , K = w.a.bind(z.a)
          , B = function(t) {
            var e = t.keyboardPattern;
            return Object(F.jsx)("div", {
                className: K("viakiss-keyboard-pattern-template"),
                children: Object(F.jsx)("div", {
                    className: K("keyboard-pattern"),
                    children: e
                })
            })
        }
          , J = function(t) {
            Object(g.a)(n, t);
            var e = Object(y.a)(n);
            function n() {
                return Object(v.a)(this, n),
                e.apply(this, arguments)
            }
            return Object(x.a)(n, [{
                key: "render",
                value: function() {
                    return Object(F.jsx)(F.Fragment, {
                        children: Object(F.jsx)(B, {
                            keyboardPattern: Object(F.jsx)(U, {})
                        })
                    })
                }
            }]),
            n
        }(a.Component)
          , V = Object(i.b)((function(t) {
            return {
                message: t.viakissKeyboardPattern.message
            }
        }
        ))(J)
          , W = function(t) {
            t.location.serach,
            t.match;
            return Object(F.jsx)(V, {})
        }
          , G = function(t) {
            Object(g.a)(n, t);
            var e = Object(y.a)(n);
            function n() {
                return Object(v.a)(this, n),
                e.apply(this, arguments)
            }
            return Object(x.a)(n, [{
                key: "render",
                value: function() {
                    return Object(F.jsx)(F.Fragment, {
                        children: Object(F.jsx)(k.a, {
                            path: "/",
                            component: W
                        })
                    })
                }
            }]),
            n
        }(a.Component)
          , Q = function() {
            return Object(F.jsx)(o.a, {
                children: Object(F.jsx)(i.a, {
                    store: h,
                    children: Object(F.jsx)(G, {})
                })
            })
        }
          , q = function(t) {
            t && t instanceof Function && n.e(3).then(n.bind(null, 53)).then((function(e) {
                var n = e.getCLS
                  , a = e.getFID
                  , r = e.getFCP
                  , s = e.getLCP
                  , c = e.getTTFB;
                n(t),
                a(t),
                r(t),
                s(t),
                c(t)
            }
            ))
        };
        c.a.render(Object(F.jsx)(r.a.StrictMode, {
            children: Object(F.jsx)(Q, {})
        }), document.getElementById("root")),
        q()
    }
}, [[49, 1, 2]]]);
//# sourceMappingURL=main.cb5e3416.chunk.js.map
