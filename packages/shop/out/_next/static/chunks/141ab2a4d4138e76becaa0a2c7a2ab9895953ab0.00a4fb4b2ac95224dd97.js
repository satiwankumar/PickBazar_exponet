(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [6],
  {
    '/0+H': function (e, t, r) {
      'use strict';
      (t.__esModule = !0),
        (t.isInAmpMode = a),
        (t.useAmp = function () {
          return a(i.default.useContext(o.AmpStateContext));
        });
      var n,
        i = (n = r('q1tI')) && n.__esModule ? n : { default: n },
        o = r('lwAK');
      function a() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          i = void 0 !== n && n,
          o = e.hasQuery,
          a = void 0 !== o && o;
        return r || (i && a);
      }
    },
    '/ebn': function (e, t, r) {
      'use strict';
      (function (e) {
        r.d(t, 'a', function () {
          return A;
        }),
          r.d(t, 'b', function () {
            return p;
          }),
          r.d(t, 'c', function () {
            return x;
          }),
          r.d(t, 'd', function () {
            return B;
          }),
          r.d(t, 'e', function () {
            return H;
          }),
          r.d(t, 'f', function () {
            return U;
          }),
          r.d(t, 'g', function () {
            return M;
          }),
          r.d(t, 'h', function () {
            return _;
          }),
          r.d(t, 'i', function () {
            return g;
          }),
          r.d(t, 'j', function () {
            return R;
          }),
          r.d(t, 'k', function () {
            return k;
          }),
          r.d(t, 'l', function () {
            return D;
          }),
          r.d(t, 'm', function () {
            return E;
          }),
          r.d(t, 'n', function () {
            return q;
          }),
          r.d(t, 'o', function () {
            return I;
          }),
          r.d(t, 'p', function () {
            return f;
          }),
          r.d(t, 'q', function () {
            return Z;
          }),
          r.d(t, 'r', function () {
            return j;
          }),
          r.d(t, 's', function () {
            return w;
          }),
          r.d(t, 't', function () {
            return d;
          }),
          r.d(t, 'u', function () {
            return y;
          }),
          r.d(t, 'v', function () {
            return v;
          }),
          r.d(t, 'w', function () {
            return m;
          }),
          r.d(t, 'x', function () {
            return J;
          }),
          r.d(t, 'y', function () {
            return G;
          }),
          r.d(t, 'z', function () {
            return X;
          }),
          r.d(t, 'A', function () {
            return ee;
          }),
          r.d(t, 'B', function () {
            return te;
          }),
          r.d(t, 'C', function () {
            return z;
          }),
          r.d(t, 'D', function () {
            return L;
          }),
          r.d(t, 'E', function () {
            return h;
          }),
          r.d(t, 'F', function () {
            return O;
          }),
          r.d(t, 'G', function () {
            return c;
          }),
          r.d(t, 'H', function () {
            return b;
          }),
          r.d(t, 'I', function () {
            return Y;
          });
        var n = r('MZHy'),
          i = r('Vvrm'),
          o = r('D57K'),
          a = r('GzZA'),
          u = r.n(a);
        r('hhN/');
        function s(e, t, r, n) {
          if (
            (function (e) {
              return 'IntValue' === e.kind;
            })(r) ||
            (function (e) {
              return 'FloatValue' === e.kind;
            })(r)
          )
            e[t.value] = Number(r.value);
          else if (
            (function (e) {
              return 'BooleanValue' === e.kind;
            })(r) ||
            (function (e) {
              return 'StringValue' === e.kind;
            })(r)
          )
            e[t.value] = r.value;
          else if (
            (function (e) {
              return 'ObjectValue' === e.kind;
            })(r)
          ) {
            var o = {};
            r.fields.map(function (e) {
              return s(o, e.name, e.value, n);
            }),
              (e[t.value] = o);
          } else if (
            (function (e) {
              return 'Variable' === e.kind;
            })(r)
          ) {
            var a = (n || {})[r.name.value];
            e[t.value] = a;
          } else if (
            (function (e) {
              return 'ListValue' === e.kind;
            })(r)
          )
            e[t.value] = r.values.map(function (e) {
              var r = {};
              return s(r, t, e, n), r[t.value];
            });
          else if (
            (function (e) {
              return 'EnumValue' === e.kind;
            })(r)
          )
            e[t.value] = r.value;
          else {
            if (
              !(function (e) {
                return 'NullValue' === e.kind;
              })(r)
            )
              throw new i.a(17);
            e[t.value] = null;
          }
        }
        function c(e, t) {
          var r = null;
          e.directives &&
            ((r = {}),
            e.directives.forEach(function (e) {
              (r[e.name.value] = {}),
                e.arguments &&
                  e.arguments.forEach(function (n) {
                    var i = n.name,
                      o = n.value;
                    return s(r[e.name.value], i, o, t);
                  });
            }));
          var n = null;
          return (
            e.arguments &&
              e.arguments.length &&
              ((n = {}),
              e.arguments.forEach(function (e) {
                var r = e.name,
                  i = e.value;
                return s(n, r, i, t);
              })),
            f(e.name.value, n, r)
          );
        }
        var l = ['connection', 'include', 'skip', 'client', 'rest', 'export'];
        function f(e, t, r) {
          if (r && r.connection && r.connection.key) {
            if (r.connection.filter && r.connection.filter.length > 0) {
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = t,
                o = {};
              return (
                n.forEach(function (e) {
                  o[e] = i[e];
                }),
                r.connection.key + '(' + JSON.stringify(o) + ')'
              );
            }
            return r.connection.key;
          }
          var a = e;
          if (t) {
            var s = u()(t);
            a += '(' + s + ')';
          }
          return (
            r &&
              Object.keys(r).forEach(function (e) {
                -1 === l.indexOf(e) &&
                  (r[e] && Object.keys(r[e]).length
                    ? (a += '@' + e + '(' + JSON.stringify(r[e]) + ')')
                    : (a += '@' + e));
              }),
            a
          );
        }
        function p(e, t) {
          if (e.arguments && e.arguments.length) {
            var r = {};
            return (
              e.arguments.forEach(function (e) {
                var n = e.name,
                  i = e.value;
                return s(r, n, i, t);
              }),
              r
            );
          }
          return null;
        }
        function h(e) {
          return e.alias ? e.alias.value : e.name.value;
        }
        function d(e) {
          return 'Field' === e.kind;
        }
        function v(e) {
          return 'InlineFragment' === e.kind;
        }
        function y(e) {
          return e && 'id' === e.type && 'boolean' === typeof e.generated;
        }
        function b(e, t) {
          return (
            void 0 === t && (t = !1),
            Object(o.a)(
              { type: 'id', generated: t },
              'string' === typeof e ? { id: e, typename: void 0 } : e
            )
          );
        }
        function m(e) {
          return null != e && 'object' === typeof e && 'json' === e.type;
        }
        function g(e, t) {
          if (e.directives && e.directives.length) {
            var r = {};
            return (
              e.directives.forEach(function (e) {
                r[e.name.value] = p(e, t);
              }),
              r
            );
          }
          return null;
        }
        function O(e, t) {
          return (
            void 0 === t && (t = {}),
            ((r = e.directives),
            r
              ? r.filter(S).map(function (e) {
                  var t = e.arguments;
                  e.name.value, Object(i.b)(t && 1 === t.length, 14);
                  var r = t[0];
                  Object(i.b)(r.name && 'if' === r.name.value, 15);
                  var n = r.value;
                  return (
                    Object(i.b)(
                      n && ('Variable' === n.kind || 'BooleanValue' === n.kind),
                      16
                    ),
                    { directive: e, ifArgument: r }
                  );
                })
              : []).every(function (e) {
              var r = e.directive,
                n = e.ifArgument,
                o = !1;
              return (
                'Variable' === n.value.kind
                  ? ((o = t[n.value.name.value]), Object(i.b)(void 0 !== o, 13))
                  : (o = n.value.value),
                'skip' === r.name.value ? !o : o
              );
            })
          );
          var r;
        }
        function w(e, t) {
          return (function (e) {
            var t = [];
            return (
              Object(n.b)(e, {
                Directive: function (e) {
                  t.push(e.name.value);
                },
              }),
              t
            );
          })(t).some(function (t) {
            return e.indexOf(t) > -1;
          });
        }
        function j(e) {
          return e && w(['client'], e) && w(['export'], e);
        }
        function S(e) {
          var t = e.name.value;
          return 'skip' === t || 'include' === t;
        }
        function k(e, t) {
          var r = t,
            n = [];
          return (
            e.definitions.forEach(function (e) {
              if ('OperationDefinition' === e.kind) throw new i.a(11);
              'FragmentDefinition' === e.kind && n.push(e);
            }),
            'undefined' === typeof r &&
              (Object(i.b)(1 === n.length, 12), (r = n[0].name.value)),
            Object(o.a)(Object(o.a)({}, e), {
              definitions: Object(o.f)(
                [
                  {
                    kind: 'OperationDefinition',
                    operation: 'query',
                    selectionSet: {
                      kind: 'SelectionSet',
                      selections: [
                        {
                          kind: 'FragmentSpread',
                          name: { kind: 'Name', value: r },
                        },
                      ],
                    },
                  },
                ],
                e.definitions
              ),
            })
          );
        }
        function x(e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
          return (
            t.forEach(function (t) {
              'undefined' !== typeof t &&
                null !== t &&
                Object.keys(t).forEach(function (r) {
                  e[r] = t[r];
                });
            }),
            e
          );
        }
        function Q(e) {
          Object(i.b)(e && 'Document' === e.kind, 2);
          var t = e.definitions
            .filter(function (e) {
              return 'FragmentDefinition' !== e.kind;
            })
            .map(function (e) {
              if ('OperationDefinition' !== e.kind) throw new i.a(3);
              return e;
            });
          return Object(i.b)(t.length <= 1, 4), e;
        }
        function E(e) {
          return (
            Q(e),
            e.definitions.filter(function (e) {
              return 'OperationDefinition' === e.kind;
            })[0]
          );
        }
        function q(e) {
          return (
            e.definitions
              .filter(function (e) {
                return 'OperationDefinition' === e.kind && e.name;
              })
              .map(function (e) {
                return e.name.value;
              })[0] || null
          );
        }
        function R(e) {
          return e.definitions.filter(function (e) {
            return 'FragmentDefinition' === e.kind;
          });
        }
        function I(e) {
          var t = E(e);
          return Object(i.b)(t && 'query' === t.operation, 6), t;
        }
        function D(e) {
          var t;
          Q(e);
          for (var r = 0, n = e.definitions; r < n.length; r++) {
            var o = n[r];
            if ('OperationDefinition' === o.kind) {
              var a = o.operation;
              if ('query' === a || 'mutation' === a || 'subscription' === a)
                return o;
            }
            'FragmentDefinition' !== o.kind || t || (t = o);
          }
          if (t) return t;
          throw new i.a(10);
        }
        function M(e) {
          void 0 === e && (e = []);
          var t = {};
          return (
            e.forEach(function (e) {
              t[e.name.value] = e;
            }),
            t
          );
        }
        function _(e) {
          if (e && e.variableDefinitions && e.variableDefinitions.length) {
            var t = e.variableDefinitions
              .filter(function (e) {
                return e.defaultValue;
              })
              .map(function (e) {
                var t = e.variable,
                  r = e.defaultValue,
                  n = {};
                return s(n, t.name, r), n;
              });
            return x.apply(void 0, Object(o.f)([{}], t));
          }
          return {};
        }
        function P(e, t, r) {
          var n = 0;
          return (
            e.forEach(function (r, i) {
              t.call(this, r, i, e) && (e[n++] = r);
            }, r),
            (e.length = n),
            e
          );
        }
        var F = { kind: 'Field', name: { kind: 'Name', value: '__typename' } };
        function C(e) {
          return (function e(t, r) {
            return t.selectionSet.selections.every(function (t) {
              return 'FragmentSpread' === t.kind && e(r[t.name.value], r);
            });
          })(
            E(e) ||
              (function (e) {
                Object(i.b)('Document' === e.kind, 7),
                  Object(i.b)(e.definitions.length <= 1, 8);
                var t = e.definitions[0];
                return Object(i.b)('FragmentDefinition' === t.kind, 9), t;
              })(e),
            M(R(e))
          )
            ? null
            : e;
        }
        function V(e) {
          return function (t) {
            return e.some(function (e) {
              return (
                (e.name && e.name === t.name.value) || (e.test && e.test(t))
              );
            });
          };
        }
        function T(e, t) {
          var r = Object.create(null),
            i = [],
            a = Object.create(null),
            u = [],
            s = C(
              Object(n.b)(t, {
                Variable: {
                  enter: function (e, t, n) {
                    'VariableDefinition' !== n.kind && (r[e.name.value] = !0);
                  },
                },
                Field: {
                  enter: function (t) {
                    if (
                      e &&
                      t.directives &&
                      e.some(function (e) {
                        return e.remove;
                      }) &&
                      t.directives &&
                      t.directives.some(V(e))
                    )
                      return (
                        t.arguments &&
                          t.arguments.forEach(function (e) {
                            'Variable' === e.value.kind &&
                              i.push({ name: e.value.name.value });
                          }),
                        t.selectionSet &&
                          (function e(t) {
                            var r = [];
                            return (
                              t.selections.forEach(function (t) {
                                (d(t) || v(t)) && t.selectionSet
                                  ? e(t.selectionSet).forEach(function (e) {
                                      return r.push(e);
                                    })
                                  : 'FragmentSpread' === t.kind && r.push(t);
                              }),
                              r
                            );
                          })(t.selectionSet).forEach(function (e) {
                            u.push({ name: e.name.value });
                          }),
                        null
                      );
                  },
                },
                FragmentSpread: {
                  enter: function (e) {
                    a[e.name.value] = !0;
                  },
                },
                Directive: {
                  enter: function (t) {
                    if (V(e)(t)) return null;
                  },
                },
              })
            );
          return (
            s &&
              P(i, function (e) {
                return !r[e.name];
              }).length &&
              (s = (function (e, t) {
                var r = (function (e) {
                  return function (t) {
                    return e.some(function (e) {
                      return (
                        t.value &&
                        'Variable' === t.value.kind &&
                        t.value.name &&
                        (e.name === t.value.name.value || (e.test && e.test(t)))
                      );
                    });
                  };
                })(e);
                return C(
                  Object(n.b)(t, {
                    OperationDefinition: {
                      enter: function (t) {
                        return Object(o.a)(Object(o.a)({}, t), {
                          variableDefinitions: t.variableDefinitions.filter(
                            function (t) {
                              return !e.some(function (e) {
                                return e.name === t.variable.name.value;
                              });
                            }
                          ),
                        });
                      },
                    },
                    Field: {
                      enter: function (t) {
                        if (
                          e.some(function (e) {
                            return e.remove;
                          })
                        ) {
                          var n = 0;
                          if (
                            (t.arguments.forEach(function (e) {
                              r(e) && (n += 1);
                            }),
                            1 === n)
                          )
                            return null;
                        }
                      },
                    },
                    Argument: {
                      enter: function (e) {
                        if (r(e)) return null;
                      },
                    },
                  })
                );
              })(i, s)),
            s &&
              P(u, function (e) {
                return !a[e.name];
              }).length &&
              (s = (function (e, t) {
                function r(t) {
                  if (
                    e.some(function (e) {
                      return e.name === t.name.value;
                    })
                  )
                    return null;
                }
                return C(
                  Object(n.b)(t, {
                    FragmentSpread: { enter: r },
                    FragmentDefinition: { enter: r },
                  })
                );
              })(u, s)),
            s
          );
        }
        function A(e) {
          return Object(n.b)(Q(e), {
            SelectionSet: {
              enter: function (e, t, r) {
                if (!r || 'OperationDefinition' !== r.kind) {
                  var n = e.selections;
                  if (n)
                    if (
                      !n.some(function (e) {
                        return (
                          d(e) &&
                          ('__typename' === e.name.value ||
                            0 === e.name.value.lastIndexOf('__', 0))
                        );
                      })
                    ) {
                      var i = r;
                      if (
                        !(
                          d(i) &&
                          i.directives &&
                          i.directives.some(function (e) {
                            return 'export' === e.name.value;
                          })
                        )
                      )
                        return Object(o.a)(Object(o.a)({}, e), {
                          selections: Object(o.f)(n, [F]),
                        });
                    }
                }
              },
            },
          });
        }
        var N = {
          test: function (e) {
            var t = 'connection' === e.name.value;
            return (
              t &&
                (!e.arguments ||
                  e.arguments.some(function (e) {
                    return 'key' === e.name.value;
                  })),
              t
            );
          },
        };
        function L(e) {
          return T([N], Q(e));
        }
        function B(e) {
          return 'query' === D(e).operation
            ? e
            : Object(n.b)(e, {
                OperationDefinition: {
                  enter: function (e) {
                    return Object(o.a)(Object(o.a)({}, e), {
                      operation: 'query',
                    });
                  },
                },
              });
        }
        function z(e) {
          Q(e);
          var t = T(
            [
              {
                test: function (e) {
                  return 'client' === e.name.value;
                },
                remove: !0,
              },
            ],
            e
          );
          return (
            t &&
              (t = Object(n.b)(t, {
                FragmentDefinition: {
                  enter: function (e) {
                    if (
                      e.selectionSet &&
                      e.selectionSet.selections.every(function (e) {
                        return d(e) && '__typename' === e.name.value;
                      })
                    )
                      return null;
                  },
                },
              })),
            t
          );
        }
        var H =
            'function' === typeof WeakMap &&
            !(
              'object' === typeof navigator &&
              'ReactNative' === navigator.product
            ),
          K = Object.prototype.toString;
        function U(e) {
          return (function e(t, r) {
            switch (K.call(t)) {
              case '[object Array]':
                if (r.has(t)) return r.get(t);
                var n = t.slice(0);
                return (
                  r.set(t, n),
                  n.forEach(function (t, i) {
                    n[i] = e(t, r);
                  }),
                  n
                );
              case '[object Object]':
                if (r.has(t)) return r.get(t);
                var i = Object.create(Object.getPrototypeOf(t));
                return (
                  r.set(t, i),
                  Object.keys(t).forEach(function (n) {
                    i[n] = e(t[n], r);
                  }),
                  i
                );
              default:
                return t;
            }
          })(e, new Map());
        }
        function W(t) {
          return (
            ('undefined' !== typeof e ? 'production' : 'development') === t
          );
        }
        function J() {
          return !0 === W('production');
        }
        function G() {
          return !0 === W('test');
        }
        function Y(e) {
          try {
            return e();
          } catch (t) {
            console.error && console.error(t);
          }
        }
        function Z(e) {
          return e.errors && e.errors.length;
        }
        function X(e) {
          if (
            (!0 === W('development') || G()) &&
            !('function' === typeof Symbol && 'string' === typeof Symbol(''))
          )
            return (function e(t) {
              return (
                Object.freeze(t),
                Object.getOwnPropertyNames(t).forEach(function (r) {
                  null === t[r] ||
                    ('object' !== typeof t[r] && 'function' !== typeof t[r]) ||
                    Object.isFrozen(t[r]) ||
                    e(t[r]);
                }),
                t
              );
            })(e);
          return e;
        }
        var $ = Object.prototype.hasOwnProperty;
        function ee() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          return te(e);
        }
        function te(e) {
          var t = e[0] || {},
            r = e.length;
          if (r > 1) {
            var n = [];
            t = ie(t, n);
            for (var i = 1; i < r; ++i) t = ne(t, e[i], n);
          }
          return t;
        }
        function re(e) {
          return null !== e && 'object' === typeof e;
        }
        function ne(e, t, r) {
          return re(t) && re(e)
            ? (Object.isExtensible && !Object.isExtensible(e) && (e = ie(e, r)),
              Object.keys(t).forEach(function (n) {
                var i = t[n];
                if ($.call(e, n)) {
                  var o = e[n];
                  i !== o && (e[n] = ne(ie(o, r), i, r));
                } else e[n] = i;
              }),
              e)
            : t;
        }
        function ie(e, t) {
          return (
            null !== e &&
              'object' === typeof e &&
              t.indexOf(e) < 0 &&
              ((e = Array.isArray(e)
                ? e.slice(0)
                : Object(o.a)({ __proto__: Object.getPrototypeOf(e) }, e)),
              t.push(e)),
            e
          );
        }
        Object.create({});
      }.call(this, r('8oxB')));
    },
    '3UD+': function (e, t) {
      e.exports = function (e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i;
              },
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    '5fIB': function (e, t, r) {
      var n = r('7eYB');
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      };
    },
    '8Kt/': function (e, t, r) {
      'use strict';
      r('oI91');
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var n,
        i = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ('object' !== typeof e && 'function' !== typeof e))
            return { default: e };
          var t = c();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if (Object.prototype.hasOwnProperty.call(e, i)) {
              var o = n ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(r, i, o)
                : (r[i] = e[i]);
            }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r('q1tI')),
        o = (n = r('Xuae')) && n.__esModule ? n : { default: n },
        a = r('lwAK'),
        u = r('FYa8'),
        s = r('/0+H');
      function c() {
        if ('function' !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement('meta', { charSet: 'utf-8' })];
        return (
          e ||
            t.push(
              i.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              })
            ),
          t
        );
      }
      function f(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ['name', 'httpEquiv', 'charSet', 'itemProp'];
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var r = i.default.Children.toArray(t.props.children);
            return e.concat(r);
          }, [])
          .reduce(f, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return function (i) {
                var o = !0;
                if (
                  i.key &&
                  'number' !== typeof i.key &&
                  i.key.indexOf('$') > 0
                ) {
                  var a = i.key.slice(i.key.indexOf('$') + 1);
                  e.has(a) ? (o = !1) : e.add(a);
                }
                switch (i.type) {
                  case 'title':
                  case 'base':
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case 'meta':
                    for (var u = 0, s = p.length; u < s; u++) {
                      var c = p[u];
                      if (i.props.hasOwnProperty(c))
                        if ('charSet' === c) r.has(c) ? (o = !1) : r.add(c);
                        else {
                          var l = i.props[c],
                            f = n[c] || new Set();
                          f.has(l) ? (o = !1) : (f.add(l), (n[c] = f));
                        }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var r = e.key || t;
            return i.default.cloneElement(e, { key: r });
          });
      }
      function d(e) {
        var t = e.children,
          r = (0, i.useContext)(a.AmpStateContext),
          n = (0, i.useContext)(u.HeadManagerContext);
        return i.default.createElement(
          o.default,
          {
            reduceComponentsToState: h,
            headManager: n,
            inAmpMode: (0, s.isInAmpMode)(r),
          },
          t
        );
      }
      d.rewind = function () {};
      var v = d;
      t.default = v;
    },
    D57K: function (e, t, r) {
      'use strict';
      r.d(t, 'c', function () {
        return i;
      }),
        r.d(t, 'a', function () {
          return o;
        }),
        r.d(t, 'e', function () {
          return a;
        }),
        r.d(t, 'b', function () {
          return u;
        }),
        r.d(t, 'd', function () {
          return s;
        }),
        r.d(t, 'f', function () {
          return c;
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function u(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function a(e) {
            try {
              s(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            try {
              s(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, u);
          }
          s((n = n.apply(e, t || [])).next());
        });
      }
      function s(e, t) {
        var r,
          n,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          'function' === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (r) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n.return
                          : o[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (u) {
                  (o = [6, u]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      }
      function c() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], a = 0, u = o.length; a < u; a++, i++)
            n[i] = o[a];
        return n;
      }
    },
    FYa8: function (e, t, r) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var i = ((n = r('q1tI')) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({});
      t.HeadManagerContext = i;
    },
    Ff2n: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return i;
      });
      var n = r('zLVn');
      function i(e, t) {
        if (null == e) return {};
        var r,
          i,
          o = Object(n.a)(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (r = a[i]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
    },
    GzZA: function (e, t, r) {
      'use strict';
      e.exports = function (e, t) {
        t || (t = {}), 'function' === typeof t && (t = { cmp: t });
        var r,
          n = 'boolean' === typeof t.cycles && t.cycles,
          i =
            t.cmp &&
            ((r = t.cmp),
            function (e) {
              return function (t, n) {
                var i = { key: t, value: e[t] },
                  o = { key: n, value: e[n] };
                return r(i, o);
              };
            }),
          o = [];
        return (function e(t) {
          if (
            (t &&
              t.toJSON &&
              'function' === typeof t.toJSON &&
              (t = t.toJSON()),
            void 0 !== t)
          ) {
            if ('number' == typeof t) return isFinite(t) ? '' + t : 'null';
            if ('object' !== typeof t) return JSON.stringify(t);
            var r, a;
            if (Array.isArray(t)) {
              for (a = '[', r = 0; r < t.length; r++)
                r && (a += ','), (a += e(t[r]) || 'null');
              return a + ']';
            }
            if (null === t) return 'null';
            if (-1 !== o.indexOf(t)) {
              if (n) return JSON.stringify('__cycle__');
              throw new TypeError('Converting circular structure to JSON');
            }
            var u = o.push(t) - 1,
              s = Object.keys(t).sort(i && i(t));
            for (a = '', r = 0; r < s.length; r++) {
              var c = s[r],
                l = e(t[c]);
              l && (a && (a += ','), (a += JSON.stringify(c) + ':' + l));
            }
            return o.splice(u, 1), '{' + a + '}';
          }
        })(e);
      };
    },
    'HaE+': function (e, t, r) {
      'use strict';
      function n(e, t, r, n, i, o, a) {
        try {
          var u = e[o](a),
            s = u.value;
        } catch (c) {
          return void r(c);
        }
        u.done ? t(s) : Promise.resolve(s).then(n, i);
      }
      function i(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = e.apply(t, r);
            function u(e) {
              n(a, i, o, u, s, 'next', e);
            }
            function s(e) {
              n(a, i, o, u, s, 'throw', e);
            }
            u(void 0);
          });
        };
      }
      r.d(t, 'a', function () {
        return i;
      });
    },
    KrFp: function (e, t, r) {
      'use strict';
      function n(e) {
        var t,
          r = e.Symbol;
        return (
          'function' === typeof r
            ? r.observable
              ? (t = r.observable)
              : ((t = r('observable')), (r.observable = t))
            : (t = '@@observable'),
          t
        );
      }
      r.d(t, 'a', function () {
        return n;
      });
    },
    MZHy: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return s;
      }),
        r.d(t, 'b', function () {
          return c;
        });
      var n =
        'function' === typeof Symbol && 'function' === typeof Symbol.for
          ? Symbol.for('nodejs.util.inspect.custom')
          : void 0;
      function i(e) {
        return (i =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function o(e) {
        return a(e, []);
      }
      function a(e, t) {
        switch (i(e)) {
          case 'string':
            return JSON.stringify(e);
          case 'function':
            return e.name ? '[function '.concat(e.name, ']') : '[function]';
          case 'object':
            return null === e
              ? 'null'
              : (function (e, t) {
                  if (-1 !== t.indexOf(e)) return '[Circular]';
                  var r = [].concat(t, [e]),
                    i = (function (e) {
                      var t = e[String(n)];
                      if ('function' === typeof t) return t;
                      if ('function' === typeof e.inspect) return e.inspect;
                    })(e);
                  if (void 0 !== i) {
                    var o = i.call(e);
                    if (o !== e) return 'string' === typeof o ? o : a(o, r);
                  } else if (Array.isArray(e))
                    return (function (e, t) {
                      if (0 === e.length) return '[]';
                      if (t.length > 2) return '[Array]';
                      for (
                        var r = Math.min(10, e.length),
                          n = e.length - r,
                          i = [],
                          o = 0;
                        o < r;
                        ++o
                      )
                        i.push(a(e[o], t));
                      1 === n
                        ? i.push('... 1 more item')
                        : n > 1 && i.push('... '.concat(n, ' more items'));
                      return '[' + i.join(', ') + ']';
                    })(e, r);
                  return (function (e, t) {
                    var r = Object.keys(e);
                    if (0 === r.length) return '{}';
                    if (t.length > 2)
                      return (
                        '[' +
                        (function (e) {
                          var t = Object.prototype.toString
                            .call(e)
                            .replace(/^\[object /, '')
                            .replace(/]$/, '');
                          if (
                            'Object' === t &&
                            'function' === typeof e.constructor
                          ) {
                            var r = e.constructor.name;
                            if ('string' === typeof r && '' !== r) return r;
                          }
                          return t;
                        })(e) +
                        ']'
                      );
                    return (
                      '{ ' +
                      r
                        .map(function (r) {
                          return r + ': ' + a(e[r], t);
                        })
                        .join(', ') +
                      ' }'
                    );
                  })(e, r);
                })(e, t);
          default:
            return String(e);
        }
      }
      var u = {
          Name: [],
          Document: ['definitions'],
          OperationDefinition: [
            'name',
            'variableDefinitions',
            'directives',
            'selectionSet',
          ],
          VariableDefinition: [
            'variable',
            'type',
            'defaultValue',
            'directives',
          ],
          Variable: ['name'],
          SelectionSet: ['selections'],
          Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
          Argument: ['name', 'value'],
          FragmentSpread: ['name', 'directives'],
          InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
          FragmentDefinition: [
            'name',
            'variableDefinitions',
            'typeCondition',
            'directives',
            'selectionSet',
          ],
          IntValue: [],
          FloatValue: [],
          StringValue: [],
          BooleanValue: [],
          NullValue: [],
          EnumValue: [],
          ListValue: ['values'],
          ObjectValue: ['fields'],
          ObjectField: ['name', 'value'],
          Directive: ['name', 'arguments'],
          NamedType: ['name'],
          ListType: ['type'],
          NonNullType: ['type'],
          SchemaDefinition: ['directives', 'operationTypes'],
          OperationTypeDefinition: ['type'],
          ScalarTypeDefinition: ['description', 'name', 'directives'],
          ObjectTypeDefinition: [
            'description',
            'name',
            'interfaces',
            'directives',
            'fields',
          ],
          FieldDefinition: [
            'description',
            'name',
            'arguments',
            'type',
            'directives',
          ],
          InputValueDefinition: [
            'description',
            'name',
            'type',
            'defaultValue',
            'directives',
          ],
          InterfaceTypeDefinition: [
            'description',
            'name',
            'directives',
            'fields',
          ],
          UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
          EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
          EnumValueDefinition: ['description', 'name', 'directives'],
          InputObjectTypeDefinition: [
            'description',
            'name',
            'directives',
            'fields',
          ],
          DirectiveDefinition: [
            'description',
            'name',
            'arguments',
            'locations',
          ],
          SchemaExtension: ['directives', 'operationTypes'],
          ScalarTypeExtension: ['name', 'directives'],
          ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
          InterfaceTypeExtension: ['name', 'directives', 'fields'],
          UnionTypeExtension: ['name', 'directives', 'types'],
          EnumTypeExtension: ['name', 'directives', 'values'],
          InputObjectTypeExtension: ['name', 'directives', 'fields'],
        },
        s = Object.freeze({});
      function c(e, t) {
        var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
          n = void 0,
          i = Array.isArray(e),
          a = [e],
          c = -1,
          p = [],
          h = void 0,
          d = void 0,
          v = void 0,
          y = [],
          b = [],
          m = e;
        do {
          var g = ++c === a.length,
            O = g && 0 !== p.length;
          if (g) {
            if (
              ((d = 0 === b.length ? void 0 : y[y.length - 1]),
              (h = v),
              (v = b.pop()),
              O)
            ) {
              if (i) h = h.slice();
              else {
                for (var w = {}, j = 0, S = Object.keys(h); j < S.length; j++) {
                  var k = S[j];
                  w[k] = h[k];
                }
                h = w;
              }
              for (var x = 0, Q = 0; Q < p.length; Q++) {
                var E = p[Q][0],
                  q = p[Q][1];
                i && (E -= x),
                  i && null === q ? (h.splice(E, 1), x++) : (h[E] = q);
              }
            }
            (c = n.index),
              (a = n.keys),
              (p = n.edits),
              (i = n.inArray),
              (n = n.prev);
          } else {
            if (
              ((d = v ? (i ? c : a[c]) : void 0),
              null === (h = v ? v[d] : m) || void 0 === h)
            )
              continue;
            v && y.push(d);
          }
          var R = void 0;
          if (!Array.isArray(h)) {
            if (!l(h)) throw new Error('Invalid AST Node: ' + o(h));
            var I = f(t, h.kind, g);
            if (I) {
              if ((R = I.call(t, h, d, v, y, b)) === s) break;
              if (!1 === R) {
                if (!g) {
                  y.pop();
                  continue;
                }
              } else if (void 0 !== R && (p.push([d, R]), !g)) {
                if (!l(R)) {
                  y.pop();
                  continue;
                }
                h = R;
              }
            }
          }
          void 0 === R && O && p.push([d, h]),
            g
              ? y.pop()
              : ((n = { inArray: i, index: c, keys: a, edits: p, prev: n }),
                (a = (i = Array.isArray(h)) ? h : r[h.kind] || []),
                (c = -1),
                (p = []),
                v && b.push(v),
                (v = h));
        } while (void 0 !== n);
        return 0 !== p.length && (m = p[p.length - 1][1]), m;
      }
      function l(e) {
        return Boolean(e && 'string' === typeof e.kind);
      }
      function f(e, t, r) {
        var n = e[t];
        if (n) {
          if (!r && 'function' === typeof n) return n;
          var i = r ? n.leave : n.enter;
          if ('function' === typeof i) return i;
        } else {
          var o = r ? e.leave : e.enter;
          if (o) {
            if ('function' === typeof o) return o;
            var a = o[t];
            if ('function' === typeof a) return a;
          }
        }
      }
    },
    Vvrm: function (e, t, r) {
      'use strict';
      (function (e) {
        r.d(t, 'a', function () {
          return a;
        }),
          r.d(t, 'b', function () {
            return u;
          });
        var n = r('D57K'),
          i = Object.setPrototypeOf,
          o =
            void 0 === i
              ? function (e, t) {
                  return (e.__proto__ = t), e;
                }
              : i,
          a = (function (e) {
            function t(r) {
              void 0 === r && (r = 'Invariant Violation');
              var n =
                e.call(
                  this,
                  'number' === typeof r
                    ? 'Invariant Violation: ' +
                        r +
                        ' (see https://github.com/apollographql/invariant-packages)'
                    : r
                ) || this;
              return (
                (n.framesToPop = 1),
                (n.name = 'Invariant Violation'),
                o(n, t.prototype),
                n
              );
            }
            return Object(n.c)(t, e), t;
          })(Error);
        function u(e, t) {
          if (!e) throw new a(t);
        }
        function s(e) {
          return function () {
            return console[e].apply(console, arguments);
          };
        }
        !(function (e) {
          (e.warn = s('warn')), (e.error = s('error'));
        })(u || (u = {}));
        var c = { env: {} };
        if ('object' === typeof e) c = e;
        else
          try {
            Function('stub', 'process = stub')(c);
          } catch (l) {}
      }.call(this, r('8oxB')));
    },
    Xuae: function (e, t, r) {
      'use strict';
      var n = r('mPvQ'),
        i = r('/GRZ'),
        o = r('i2R6'),
        a = (r('qXWd'), r('48fX')),
        u = r('tCBg'),
        s = r('T0f4');
      function c(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = s(e);
          if (t) {
            var i = s(this).constructor;
            r = Reflect.construct(n, arguments, i);
          } else r = n.apply(this, arguments);
          return u(this, r);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = r('q1tI'),
        f = (function (e) {
          a(r, e);
          var t = c(r);
          function r(e) {
            var o;
            return (
              i(this, r),
              ((o = t.call(this, e))._hasHeadManager = void 0),
              (o.emitChange = function () {
                o._hasHeadManager &&
                  o.props.headManager.updateHead(
                    o.props.reduceComponentsToState(
                      n(o.props.headManager.mountedInstances),
                      o.props
                    )
                  );
              }),
              (o._hasHeadManager =
                o.props.headManager && o.props.headManager.mountedInstances),
              o
            );
          }
          return (
            o(r, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: 'render',
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(l.Component);
      t.default = f;
    },
    ZNCQ: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return ft;
      });
      var n = r('o0o1'),
        i = r.n(n),
        o = r('rePB'),
        a = r('HaE+'),
        u = r('Ff2n'),
        s = r('q1tI'),
        c = r.n(s),
        l = r('8Kt/'),
        f = r.n(l),
        p = r('lqOT'),
        h = (r('vcXL'), r('D57K')),
        d = r('jVoT'),
        v = r.n(d).a,
        y = r('Vvrm'),
        b = r('/ebn');
      !(function (e) {
        function t(t, r) {
          var n = e.call(this, t) || this;
          return (n.link = r), n;
        }
        Object(h.c)(t, e);
      })(Error);
      function m(e) {
        return e.request.length <= 1;
      }
      function g(e) {
        return new v(function (t) {
          t.error(e);
        });
      }
      function O(e, t) {
        var r = Object(h.a)({}, e);
        return (
          Object.defineProperty(t, 'setContext', {
            enumerable: !1,
            value: function (e) {
              r =
                'function' === typeof e
                  ? Object(h.a)({}, r, e(r))
                  : Object(h.a)({}, r, e);
            },
          }),
          Object.defineProperty(t, 'getContext', {
            enumerable: !1,
            value: function () {
              return Object(h.a)({}, r);
            },
          }),
          Object.defineProperty(t, 'toKey', {
            enumerable: !1,
            value: function () {
              return (function (e) {
                var t = e.query,
                  r = e.variables,
                  n = e.operationName;
                return JSON.stringify([n, t, r]);
              })(t);
            },
          }),
          t
        );
      }
      function w(e, t) {
        return t ? t(e) : v.of();
      }
      function j(e) {
        return 'function' === typeof e ? new Q(e) : e;
      }
      function S() {
        return new Q(function () {
          return v.of();
        });
      }
      function k(e) {
        return 0 === e.length
          ? S()
          : e.map(j).reduce(function (e, t) {
              return e.concat(t);
            });
      }
      function x(e, t, r) {
        var n = j(t),
          i = j(r || new Q(w));
        return m(n) && m(i)
          ? new Q(function (t) {
              return e(t) ? n.request(t) || v.of() : i.request(t) || v.of();
            })
          : new Q(function (t, r) {
              return e(t)
                ? n.request(t, r) || v.of()
                : i.request(t, r) || v.of();
            });
      }
      var Q = (function () {
        function e(e) {
          e && (this.request = e);
        }
        return (
          (e.prototype.split = function (t, r, n) {
            return this.concat(x(t, r, n || new e(w)));
          }),
          (e.prototype.concat = function (e) {
            return (function (e, t) {
              var r = j(e);
              if (m(r)) return r;
              var n = j(t);
              return m(n)
                ? new Q(function (e) {
                    return (
                      r.request(e, function (e) {
                        return n.request(e) || v.of();
                      }) || v.of()
                    );
                  })
                : new Q(function (e, t) {
                    return (
                      r.request(e, function (e) {
                        return n.request(e, t) || v.of();
                      }) || v.of()
                    );
                  });
            })(this, e);
          }),
          (e.prototype.request = function (e, t) {
            throw new y.a(1);
          }),
          (e.empty = S),
          (e.from = k),
          (e.split = x),
          (e.execute = E),
          e
        );
      })();
      function E(e, t) {
        return (
          e.request(
            O(
              t.context,
              (function (e) {
                var t = {
                  variables: e.variables || {},
                  extensions: e.extensions || {},
                  operationName: e.operationName,
                  query: e.query,
                };
                return (
                  t.operationName ||
                    (t.operationName =
                      'string' !== typeof t.query ? Object(b.n)(t.query) : ''),
                  t
                );
              })(
                (function (e) {
                  for (
                    var t = [
                        'query',
                        'operationName',
                        'variables',
                        'extensions',
                        'context',
                      ],
                      r = 0,
                      n = Object.keys(e);
                    r < n.length;
                    r++
                  ) {
                    var i = n[r];
                    if (t.indexOf(i) < 0) throw new y.a(2);
                  }
                  return e;
                })(t)
              )
            )
          ) || v.of()
        );
      }
      var q = r('MZHy');
      function R(e) {
        return Object(q.b)(e, { leave: I });
      }
      var I = {
        Name: function (e) {
          return e.value;
        },
        Variable: function (e) {
          return '$' + e.name;
        },
        Document: function (e) {
          return M(e.definitions, '\n\n') + '\n';
        },
        OperationDefinition: function (e) {
          var t = e.operation,
            r = e.name,
            n = P('(', M(e.variableDefinitions, ', '), ')'),
            i = M(e.directives, ' '),
            o = e.selectionSet;
          return r || i || n || 'query' !== t
            ? M([t, M([r, n]), i, o], ' ')
            : o;
        },
        VariableDefinition: function (e) {
          var t = e.variable,
            r = e.type,
            n = e.defaultValue,
            i = e.directives;
          return t + ': ' + r + P(' = ', n) + P(' ', M(i, ' '));
        },
        SelectionSet: function (e) {
          return _(e.selections);
        },
        Field: function (e) {
          var t = e.alias,
            r = e.name,
            n = e.arguments,
            i = e.directives,
            o = e.selectionSet;
          return M(
            [P('', t, ': ') + r + P('(', M(n, ', '), ')'), M(i, ' '), o],
            ' '
          );
        },
        Argument: function (e) {
          return e.name + ': ' + e.value;
        },
        FragmentSpread: function (e) {
          return '...' + e.name + P(' ', M(e.directives, ' '));
        },
        InlineFragment: function (e) {
          var t = e.typeCondition,
            r = e.directives,
            n = e.selectionSet;
          return M(['...', P('on ', t), M(r, ' '), n], ' ');
        },
        FragmentDefinition: function (e) {
          var t = e.name,
            r = e.typeCondition,
            n = e.variableDefinitions,
            i = e.directives,
            o = e.selectionSet;
          return (
            'fragment '.concat(t).concat(P('(', M(n, ', '), ')'), ' ') +
            'on '.concat(r, ' ').concat(P('', M(i, ' '), ' ')) +
            o
          );
        },
        IntValue: function (e) {
          return e.value;
        },
        FloatValue: function (e) {
          return e.value;
        },
        StringValue: function (e, t) {
          var r = e.value;
          return e.block
            ? (function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '',
                  r =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  n = -1 === e.indexOf('\n'),
                  i = ' ' === e[0] || '\t' === e[0],
                  o = '"' === e[e.length - 1],
                  a = !n || o || r,
                  u = '';
                return (
                  !a || (n && i) || (u += '\n' + t),
                  (u += t ? e.replace(/\n/g, '\n' + t) : e),
                  a && (u += '\n'),
                  '"""' + u.replace(/"""/g, '\\"""') + '"""'
                );
              })(r, 'description' === t ? '' : '  ')
            : JSON.stringify(r);
        },
        BooleanValue: function (e) {
          return e.value ? 'true' : 'false';
        },
        NullValue: function () {
          return 'null';
        },
        EnumValue: function (e) {
          return e.value;
        },
        ListValue: function (e) {
          return '[' + M(e.values, ', ') + ']';
        },
        ObjectValue: function (e) {
          return '{' + M(e.fields, ', ') + '}';
        },
        ObjectField: function (e) {
          return e.name + ': ' + e.value;
        },
        Directive: function (e) {
          return '@' + e.name + P('(', M(e.arguments, ', '), ')');
        },
        NamedType: function (e) {
          return e.name;
        },
        ListType: function (e) {
          return '[' + e.type + ']';
        },
        NonNullType: function (e) {
          return e.type + '!';
        },
        SchemaDefinition: function (e) {
          var t = e.directives,
            r = e.operationTypes;
          return M(['schema', M(t, ' '), _(r)], ' ');
        },
        OperationTypeDefinition: function (e) {
          return e.operation + ': ' + e.type;
        },
        ScalarTypeDefinition: D(function (e) {
          return M(['scalar', e.name, M(e.directives, ' ')], ' ');
        }),
        ObjectTypeDefinition: D(function (e) {
          var t = e.name,
            r = e.interfaces,
            n = e.directives,
            i = e.fields;
          return M(
            ['type', t, P('implements ', M(r, ' & ')), M(n, ' '), _(i)],
            ' '
          );
        }),
        FieldDefinition: D(function (e) {
          var t = e.name,
            r = e.arguments,
            n = e.type,
            i = e.directives;
          return (
            t +
            (V(r) ? P('(\n', F(M(r, '\n')), '\n)') : P('(', M(r, ', '), ')')) +
            ': ' +
            n +
            P(' ', M(i, ' '))
          );
        }),
        InputValueDefinition: D(function (e) {
          var t = e.name,
            r = e.type,
            n = e.defaultValue,
            i = e.directives;
          return M([t + ': ' + r, P('= ', n), M(i, ' ')], ' ');
        }),
        InterfaceTypeDefinition: D(function (e) {
          var t = e.name,
            r = e.directives,
            n = e.fields;
          return M(['interface', t, M(r, ' '), _(n)], ' ');
        }),
        UnionTypeDefinition: D(function (e) {
          var t = e.name,
            r = e.directives,
            n = e.types;
          return M(
            [
              'union',
              t,
              M(r, ' '),
              n && 0 !== n.length ? '= ' + M(n, ' | ') : '',
            ],
            ' '
          );
        }),
        EnumTypeDefinition: D(function (e) {
          var t = e.name,
            r = e.directives,
            n = e.values;
          return M(['enum', t, M(r, ' '), _(n)], ' ');
        }),
        EnumValueDefinition: D(function (e) {
          return M([e.name, M(e.directives, ' ')], ' ');
        }),
        InputObjectTypeDefinition: D(function (e) {
          var t = e.name,
            r = e.directives,
            n = e.fields;
          return M(['input', t, M(r, ' '), _(n)], ' ');
        }),
        DirectiveDefinition: D(function (e) {
          var t = e.name,
            r = e.arguments,
            n = e.repeatable,
            i = e.locations;
          return (
            'directive @' +
            t +
            (V(r) ? P('(\n', F(M(r, '\n')), '\n)') : P('(', M(r, ', '), ')')) +
            (n ? ' repeatable' : '') +
            ' on ' +
            M(i, ' | ')
          );
        }),
        SchemaExtension: function (e) {
          var t = e.directives,
            r = e.operationTypes;
          return M(['extend schema', M(t, ' '), _(r)], ' ');
        },
        ScalarTypeExtension: function (e) {
          return M(['extend scalar', e.name, M(e.directives, ' ')], ' ');
        },
        ObjectTypeExtension: function (e) {
          var t = e.name,
            r = e.interfaces,
            n = e.directives,
            i = e.fields;
          return M(
            ['extend type', t, P('implements ', M(r, ' & ')), M(n, ' '), _(i)],
            ' '
          );
        },
        InterfaceTypeExtension: function (e) {
          var t = e.name,
            r = e.directives,
            n = e.fields;
          return M(['extend interface', t, M(r, ' '), _(n)], ' ');
        },
        UnionTypeExtension: function (e) {
          var t = e.name,
            r = e.directives,
            n = e.types;
          return M(
            [
              'extend union',
              t,
              M(r, ' '),
              n && 0 !== n.length ? '= ' + M(n, ' | ') : '',
            ],
            ' '
          );
        },
        EnumTypeExtension: function (e) {
          var t = e.name,
            r = e.directives,
            n = e.values;
          return M(['extend enum', t, M(r, ' '), _(n)], ' ');
        },
        InputObjectTypeExtension: function (e) {
          var t = e.name,
            r = e.directives,
            n = e.fields;
          return M(['extend input', t, M(r, ' '), _(n)], ' ');
        },
      };
      function D(e) {
        return function (t) {
          return M([t.description, e(t)], '\n');
        };
      }
      function M(e, t) {
        return e
          ? e
              .filter(function (e) {
                return e;
              })
              .join(t || '')
          : '';
      }
      function _(e) {
        return e && 0 !== e.length ? '{\n' + F(M(e, '\n')) + '\n}' : '';
      }
      function P(e, t, r) {
        return t ? e + t + (r || '') : '';
      }
      function F(e) {
        return e && '  ' + e.replace(/\n/g, '\n  ');
      }
      function C(e) {
        return -1 !== e.indexOf('\n');
      }
      function V(e) {
        return e && e.some(C);
      }
      var T = {
          http: { includeQuery: !0, includeExtensions: !1 },
          headers: { accept: '*/*', 'content-type': 'application/json' },
          options: { method: 'POST' },
        },
        A = function (e, t, r) {
          var n = new Error(r);
          throw (
            ((n.name = 'ServerError'),
            (n.response = e),
            (n.statusCode = e.status),
            (n.result = t),
            n)
          );
        },
        N = function (e, t) {
          var r;
          try {
            r = JSON.stringify(e);
          } catch (i) {
            var n = new y.a(2);
            throw ((n.parseError = i), n);
          }
          return r;
        },
        L = function (e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? '/graphql' : t,
            n = e.fetch,
            i = e.includeExtensions,
            o = e.useGETForQueries,
            a = Object(h.e)(e, [
              'uri',
              'fetch',
              'includeExtensions',
              'useGETForQueries',
            ]);
          !(function (e) {
            if (!e && 'undefined' === typeof fetch) throw new y.a(1);
          })(n),
            n || (n = fetch);
          var u = {
            http: { includeExtensions: i },
            options: a.fetchOptions,
            credentials: a.credentials,
            headers: a.headers,
          };
          return new Q(function (e) {
            var t = (function (e, t) {
                return (
                  e.getContext().uri ||
                  ('function' === typeof t ? t(e) : t || '/graphql')
                );
              })(e, r),
              i = e.getContext(),
              a = {};
            if (i.clientAwareness) {
              var s = i.clientAwareness,
                c = s.name,
                l = s.version;
              c && (a['apollographql-client-name'] = c),
                l && (a['apollographql-client-version'] = l);
            }
            var f,
              p = Object(h.a)({}, a, i.headers),
              d = {
                http: i.http,
                options: i.fetchOptions,
                credentials: i.credentials,
                headers: p,
              },
              y = (function (e, t) {
                for (var r = [], n = 2; n < arguments.length; n++)
                  r[n - 2] = arguments[n];
                var i = Object(h.a)({}, t.options, {
                    headers: t.headers,
                    credentials: t.credentials,
                  }),
                  o = t.http;
                r.forEach(function (e) {
                  (i = Object(h.a)({}, i, e.options, {
                    headers: Object(h.a)({}, i.headers, e.headers),
                  })),
                    e.credentials && (i.credentials = e.credentials),
                    (o = Object(h.a)({}, o, e.http));
                });
                var a = e.operationName,
                  u = e.extensions,
                  s = e.variables,
                  c = e.query,
                  l = { operationName: a, variables: s };
                return (
                  o.includeExtensions && (l.extensions = u),
                  o.includeQuery && (l.query = R(c)),
                  { options: i, body: l }
                );
              })(e, T, u, d),
              b = y.options,
              m = y.body;
            if (!b.signal) {
              var O = (function () {
                  if ('undefined' === typeof AbortController)
                    return { controller: !1, signal: !1 };
                  var e = new AbortController();
                  return { controller: e, signal: e.signal };
                })(),
                w = O.controller,
                j = O.signal;
              (f = w) && (b.signal = j);
            }
            if (
              (o &&
                !e.query.definitions.some(function (e) {
                  return (
                    'OperationDefinition' === e.kind &&
                    'mutation' === e.operation
                  );
                }) &&
                (b.method = 'GET'),
              'GET' === b.method)
            ) {
              var S = (function (e, t) {
                  var r = [],
                    n = function (e, t) {
                      r.push(e + '=' + encodeURIComponent(t));
                    };
                  'query' in t && n('query', t.query);
                  t.operationName && n('operationName', t.operationName);
                  if (t.variables) {
                    var i = void 0;
                    try {
                      i = N(t.variables);
                    } catch (x) {
                      return { parseError: x };
                    }
                    n('variables', i);
                  }
                  if (t.extensions) {
                    var o = void 0;
                    try {
                      o = N(t.extensions);
                    } catch (x) {
                      return { parseError: x };
                    }
                    n('extensions', o);
                  }
                  var a = '',
                    u = e,
                    s = e.indexOf('#');
                  -1 !== s && ((a = e.substr(s)), (u = e.substr(0, s)));
                  var c = -1 === u.indexOf('?') ? '?' : '&';
                  return { newURI: u + c + r.join('&') + a };
                })(t, m),
                k = S.newURI,
                x = S.parseError;
              if (x) return g(x);
              t = k;
            } else
              try {
                b.body = N(m);
              } catch (x) {
                return g(x);
              }
            return new v(function (r) {
              var i;
              return (
                n(t, b)
                  .then(function (t) {
                    return e.setContext({ response: t }), t;
                  })
                  .then(
                    ((i = e),
                    function (e) {
                      return e
                        .text()
                        .then(function (t) {
                          try {
                            return JSON.parse(t);
                          } catch (n) {
                            var r = n;
                            return (
                              (r.name = 'ServerParseError'),
                              (r.response = e),
                              (r.statusCode = e.status),
                              (r.bodyText = t),
                              Promise.reject(r)
                            );
                          }
                        })
                        .then(function (t) {
                          return (
                            e.status >= 300 &&
                              A(
                                e,
                                t,
                                'Response not successful: Received status code ' +
                                  e.status
                              ),
                            Array.isArray(t) ||
                              t.hasOwnProperty('data') ||
                              t.hasOwnProperty('errors') ||
                              A(
                                e,
                                t,
                                "Server response was missing for query '" +
                                  (Array.isArray(i)
                                    ? i.map(function (e) {
                                        return e.operationName;
                                      })
                                    : i.operationName) +
                                  "'."
                              ),
                            t
                          );
                        });
                    })
                  )
                  .then(function (e) {
                    return r.next(e), r.complete(), e;
                  })
                  .catch(function (e) {
                    'AbortError' !== e.name &&
                      (e.result &&
                        e.result.errors &&
                        e.result.data &&
                        r.next(e.result),
                      r.error(e));
                  }),
                function () {
                  f && f.abort();
                }
              );
            });
          });
        };
      var B,
        z = (function (e) {
          function t(t) {
            return e.call(this, L(t).request) || this;
          }
          return Object(h.c)(t, e), t;
        })(Q),
        H = r('hhN/'),
        K = r('hE+J');
      function U(e) {
        return e < 7;
      }
      !(function (e) {
        (e[(e.loading = 1)] = 'loading'),
          (e[(e.setVariables = 2)] = 'setVariables'),
          (e[(e.fetchMore = 3)] = 'fetchMore'),
          (e[(e.refetch = 4)] = 'refetch'),
          (e[(e.poll = 6)] = 'poll'),
          (e[(e.ready = 7)] = 'ready'),
          (e[(e.error = 8)] = 'error');
      })(B || (B = {}));
      var W = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(t, e),
          (t.prototype[K.a] = function () {
            return this;
          }),
          (t.prototype['@@observable'] = function () {
            return this;
          }),
          t
        );
      })(v);
      function J(e) {
        return Array.isArray(e) && e.length > 0;
      }
      var G,
        Y = (function (e) {
          function t(r) {
            var n = r.graphQLErrors,
              i = r.networkError,
              o = r.errorMessage,
              a = r.extraInfo,
              u = e.call(this, o) || this;
            return (
              (u.graphQLErrors = n || []),
              (u.networkError = i || null),
              (u.message =
                o ||
                (function (e) {
                  var t = '';
                  return (
                    J(e.graphQLErrors) &&
                      e.graphQLErrors.forEach(function (e) {
                        var r = e ? e.message : 'Error message not found.';
                        t += 'GraphQL error: ' + r + '\n';
                      }),
                    e.networkError &&
                      (t += 'Network error: ' + e.networkError.message + '\n'),
                    (t = t.replace(/\n$/, ''))
                  );
                })(u)),
              (u.extraInfo = a),
              (u.__proto__ = t.prototype),
              u
            );
          }
          return Object(h.c)(t, e), t;
        })(Error);
      !(function (e) {
        (e[(e.normal = 1)] = 'normal'),
          (e[(e.refetch = 2)] = 'refetch'),
          (e[(e.poll = 3)] = 'poll');
      })(G || (G = {}));
      var Z = (function (e) {
        function t(t) {
          var r = t.queryManager,
            n = t.options,
            i = t.shouldSubscribe,
            o = void 0 === i || i,
            a =
              e.call(this, function (e) {
                return a.onSubscribe(e);
              }) || this;
          (a.observers = new Set()),
            (a.subscriptions = new Set()),
            (a.isTornDown = !1),
            (a.options = n),
            (a.variables = n.variables || {}),
            (a.queryId = r.generateQueryId()),
            (a.shouldSubscribe = o);
          var u = Object(b.m)(n.query);
          return (
            (a.queryName = u && u.name && u.name.value), (a.queryManager = r), a
          );
        }
        return (
          Object(h.c)(t, e),
          (t.prototype.result = function () {
            var e = this;
            return new Promise(function (t, r) {
              var n = {
                  next: function (r) {
                    t(r),
                      e.observers.delete(n),
                      e.observers.size || e.queryManager.removeQuery(e.queryId),
                      setTimeout(function () {
                        i.unsubscribe();
                      }, 0);
                  },
                  error: r,
                },
                i = e.subscribe(n);
            });
          }),
          (t.prototype.currentResult = function () {
            var e = this.getCurrentResult();
            return void 0 === e.data && (e.data = {}), e;
          }),
          (t.prototype.getCurrentResult = function () {
            if (this.isTornDown) {
              var e = this.lastResult;
              return {
                data: (!this.lastError && e && e.data) || void 0,
                error: this.lastError,
                loading: !1,
                networkStatus: B.error,
              };
            }
            var t,
              r,
              n,
              i = this.queryManager.getCurrentQueryResult(this),
              o = i.data,
              a = i.partial,
              u = this.queryManager.queryStore.get(this.queryId),
              s = this.options.fetchPolicy,
              c = 'network-only' === s || 'no-cache' === s;
            if (u) {
              var l = u.networkStatus;
              if (
                ((r = u),
                void 0 === (n = this.options.errorPolicy) && (n = 'none'),
                r && (r.networkError || ('none' === n && J(r.graphQLErrors))))
              )
                return {
                  data: void 0,
                  loading: !1,
                  networkStatus: l,
                  error: new Y({
                    graphQLErrors: u.graphQLErrors,
                    networkError: u.networkError,
                  }),
                };
              u.variables &&
                ((this.options.variables = Object(h.a)(
                  Object(h.a)({}, this.options.variables),
                  u.variables
                )),
                (this.variables = this.options.variables)),
                (t = { data: o, loading: U(l), networkStatus: l }),
                u.graphQLErrors &&
                  'all' === this.options.errorPolicy &&
                  (t.errors = u.graphQLErrors);
            } else {
              var f = c || (a && 'cache-only' !== s);
              t = {
                data: o,
                loading: f,
                networkStatus: f ? B.loading : B.ready,
              };
            }
            return (
              a ||
                this.updateLastResult(
                  Object(h.a)(Object(h.a)({}, t), { stale: !1 })
                ),
              Object(h.a)(Object(h.a)({}, t), { partial: a })
            );
          }),
          (t.prototype.isDifferentFromLastResult = function (e) {
            var t = this.lastResultSnapshot;
            return !(
              t &&
              e &&
              t.networkStatus === e.networkStatus &&
              t.stale === e.stale &&
              Object(H.a)(t.data, e.data)
            );
          }),
          (t.prototype.getLastResult = function () {
            return this.lastResult;
          }),
          (t.prototype.getLastError = function () {
            return this.lastError;
          }),
          (t.prototype.resetLastResults = function () {
            delete this.lastResult,
              delete this.lastResultSnapshot,
              delete this.lastError,
              (this.isTornDown = !1);
          }),
          (t.prototype.resetQueryStoreErrors = function () {
            var e = this.queryManager.queryStore.get(this.queryId);
            e && ((e.networkError = null), (e.graphQLErrors = []));
          }),
          (t.prototype.refetch = function (e) {
            var t = this.options.fetchPolicy;
            return 'cache-only' === t
              ? Promise.reject(new y.a(1))
              : ('no-cache' !== t &&
                  'cache-and-network' !== t &&
                  (t = 'network-only'),
                Object(H.a)(this.variables, e) ||
                  (this.variables = Object(h.a)(
                    Object(h.a)({}, this.variables),
                    e
                  )),
                Object(H.a)(this.options.variables, this.variables) ||
                  (this.options.variables = Object(h.a)(
                    Object(h.a)({}, this.options.variables),
                    this.variables
                  )),
                this.queryManager.fetchQuery(
                  this.queryId,
                  Object(h.a)(Object(h.a)({}, this.options), {
                    fetchPolicy: t,
                  }),
                  G.refetch
                ));
          }),
          (t.prototype.fetchMore = function (e) {
            var t = this;
            Object(y.b)(e.updateQuery, 2);
            var r = Object(h.a)(
                Object(h.a)(
                  {},
                  e.query
                    ? e
                    : Object(h.a)(
                        Object(h.a)(Object(h.a)({}, this.options), e),
                        {
                          variables: Object(h.a)(
                            Object(h.a)({}, this.variables),
                            e.variables
                          ),
                        }
                      )
                ),
                { fetchPolicy: 'network-only' }
              ),
              n = this.queryManager.generateQueryId();
            return this.queryManager
              .fetchQuery(n, r, G.normal, this.queryId)
              .then(
                function (i) {
                  return (
                    t.updateQuery(function (t) {
                      return e.updateQuery(t, {
                        fetchMoreResult: i.data,
                        variables: r.variables,
                      });
                    }),
                    t.queryManager.stopQuery(n),
                    i
                  );
                },
                function (e) {
                  throw (t.queryManager.stopQuery(n), e);
                }
              );
          }),
          (t.prototype.subscribeToMore = function (e) {
            var t = this,
              r = this.queryManager
                .startGraphQLSubscription({
                  query: e.document,
                  variables: e.variables,
                })
                .subscribe({
                  next: function (r) {
                    var n = e.updateQuery;
                    n &&
                      t.updateQuery(function (e, t) {
                        var i = t.variables;
                        return n(e, { subscriptionData: r, variables: i });
                      });
                  },
                  error: function (t) {
                    e.onError && e.onError(t);
                  },
                });
            return (
              this.subscriptions.add(r),
              function () {
                t.subscriptions.delete(r) && r.unsubscribe();
              }
            );
          }),
          (t.prototype.setOptions = function (e) {
            var t = this.options.fetchPolicy;
            (this.options = Object(h.a)(Object(h.a)({}, this.options), e)),
              e.pollInterval
                ? this.startPolling(e.pollInterval)
                : 0 === e.pollInterval && this.stopPolling();
            var r = e.fetchPolicy;
            return this.setVariables(
              this.options.variables,
              t !== r &&
                ('cache-only' === t || 'standby' === t || 'network-only' === r),
              e.fetchResults
            );
          }),
          (t.prototype.setVariables = function (e, t, r) {
            return (
              void 0 === t && (t = !1),
              void 0 === r && (r = !0),
              (this.isTornDown = !1),
              (e = e || this.variables),
              !t && Object(H.a)(e, this.variables)
                ? this.observers.size && r
                  ? this.result()
                  : Promise.resolve()
                : ((this.variables = this.options.variables = e),
                  this.observers.size
                    ? this.queryManager.fetchQuery(this.queryId, this.options)
                    : Promise.resolve())
            );
          }),
          (t.prototype.updateQuery = function (e) {
            var t = this.queryManager,
              r = t.getQueryWithPreviousResult(this.queryId),
              n = r.previousResult,
              i = r.variables,
              o = r.document,
              a = Object(b.I)(function () {
                return e(n, { variables: i });
              });
            a &&
              (t.dataStore.markUpdateQueryResult(o, i, a),
              t.broadcastQueries());
          }),
          (t.prototype.stopPolling = function () {
            this.queryManager.stopPollingQuery(this.queryId),
              (this.options.pollInterval = void 0);
          }),
          (t.prototype.startPolling = function (e) {
            ee(this),
              (this.options.pollInterval = e),
              this.queryManager.startPollingQuery(this.options, this.queryId);
          }),
          (t.prototype.updateLastResult = function (e) {
            var t = this.lastResult;
            return (
              (this.lastResult = e),
              (this.lastResultSnapshot = this.queryManager
                .assumeImmutableResults
                ? e
                : Object(b.f)(e)),
              t
            );
          }),
          (t.prototype.onSubscribe = function (e) {
            var t = this;
            try {
              var r = e._subscription._observer;
              r && !r.error && (r.error = X);
            } catch (i) {}
            var n = !this.observers.size;
            return (
              this.observers.add(e),
              e.next && this.lastResult && e.next(this.lastResult),
              e.error && this.lastError && e.error(this.lastError),
              n && this.setUpQuery(),
              function () {
                t.observers.delete(e) && !t.observers.size && t.tearDownQuery();
              }
            );
          }),
          (t.prototype.setUpQuery = function () {
            var e = this,
              t = this.queryManager,
              r = this.queryId;
            this.shouldSubscribe && t.addObservableQuery(r, this),
              this.options.pollInterval &&
                (ee(this), t.startPollingQuery(this.options, r));
            var n = function (t) {
              e.updateLastResult(
                Object(h.a)(Object(h.a)({}, e.lastResult), {
                  errors: t.graphQLErrors,
                  networkStatus: B.error,
                  loading: !1,
                })
              ),
                $(e.observers, 'error', (e.lastError = t));
            };
            t.observeQuery(r, this.options, {
              next: function (r) {
                if (e.lastError || e.isDifferentFromLastResult(r)) {
                  var n = e.updateLastResult(r),
                    i = e.options,
                    o = i.query,
                    a = i.variables,
                    u = i.fetchPolicy;
                  t.transform(o).hasClientExports
                    ? t
                        .getLocalState()
                        .addExportedVariables(o, a)
                        .then(function (i) {
                          var a = e.variables;
                          (e.variables = e.options.variables = i),
                            !r.loading &&
                            n &&
                            'cache-only' !== u &&
                            t.transform(o).serverQuery &&
                            !Object(H.a)(a, i)
                              ? e.refetch()
                              : $(e.observers, 'next', r);
                        })
                    : $(e.observers, 'next', r);
                }
              },
              error: n,
            }).catch(n);
          }),
          (t.prototype.tearDownQuery = function () {
            var e = this.queryManager;
            (this.isTornDown = !0),
              e.stopPollingQuery(this.queryId),
              this.subscriptions.forEach(function (e) {
                return e.unsubscribe();
              }),
              this.subscriptions.clear(),
              e.removeObservableQuery(this.queryId),
              e.stopQuery(this.queryId),
              this.observers.clear();
          }),
          t
        );
      })(W);
      function X(e) {}
      function $(e, t, r) {
        var n = [];
        e.forEach(function (e) {
          return e[t] && n.push(e);
        }),
          n.forEach(function (e) {
            return e[t](r);
          });
      }
      function ee(e) {
        var t = e.options.fetchPolicy;
        Object(y.b)('cache-first' !== t && 'cache-only' !== t, 3);
      }
      var te = (function () {
          function e() {
            this.store = {};
          }
          return (
            (e.prototype.getStore = function () {
              return this.store;
            }),
            (e.prototype.get = function (e) {
              return this.store[e];
            }),
            (e.prototype.initMutation = function (e, t, r) {
              this.store[e] = {
                mutation: t,
                variables: r || {},
                loading: !0,
                error: null,
              };
            }),
            (e.prototype.markMutationError = function (e, t) {
              var r = this.store[e];
              r && ((r.loading = !1), (r.error = t));
            }),
            (e.prototype.markMutationResult = function (e) {
              var t = this.store[e];
              t && ((t.loading = !1), (t.error = null));
            }),
            (e.prototype.reset = function () {
              this.store = {};
            }),
            e
          );
        })(),
        re = (function () {
          function e() {
            this.store = {};
          }
          return (
            (e.prototype.getStore = function () {
              return this.store;
            }),
            (e.prototype.get = function (e) {
              return this.store[e];
            }),
            (e.prototype.initQuery = function (e) {
              var t = this.store[e.queryId];
              Object(y.b)(
                !t ||
                  t.document === e.document ||
                  Object(H.a)(t.document, e.document),
                19
              );
              var r,
                n = !1,
                i = null;
              e.storePreviousVariables &&
                t &&
                t.networkStatus !== B.loading &&
                (Object(H.a)(t.variables, e.variables) ||
                  ((n = !0), (i = t.variables))),
                (r = n
                  ? B.setVariables
                  : e.isPoll
                  ? B.poll
                  : e.isRefetch
                  ? B.refetch
                  : B.loading);
              var o = [];
              t && t.graphQLErrors && (o = t.graphQLErrors),
                (this.store[e.queryId] = {
                  document: e.document,
                  variables: e.variables,
                  previousVariables: i,
                  networkError: null,
                  graphQLErrors: o,
                  networkStatus: r,
                  metadata: e.metadata,
                }),
                'string' === typeof e.fetchMoreForQueryId &&
                  this.store[e.fetchMoreForQueryId] &&
                  (this.store[e.fetchMoreForQueryId].networkStatus =
                    B.fetchMore);
            }),
            (e.prototype.markQueryResult = function (e, t, r) {
              this.store &&
                this.store[e] &&
                ((this.store[e].networkError = null),
                (this.store[e].graphQLErrors = J(t.errors) ? t.errors : []),
                (this.store[e].previousVariables = null),
                (this.store[e].networkStatus = B.ready),
                'string' === typeof r &&
                  this.store[r] &&
                  (this.store[r].networkStatus = B.ready));
            }),
            (e.prototype.markQueryError = function (e, t, r) {
              this.store &&
                this.store[e] &&
                ((this.store[e].networkError = t),
                (this.store[e].networkStatus = B.error),
                'string' === typeof r && this.markQueryResultClient(r, !0));
            }),
            (e.prototype.markQueryResultClient = function (e, t) {
              var r = this.store && this.store[e];
              r &&
                ((r.networkError = null),
                (r.previousVariables = null),
                t && (r.networkStatus = B.ready));
            }),
            (e.prototype.stopQuery = function (e) {
              delete this.store[e];
            }),
            (e.prototype.reset = function (e) {
              var t = this;
              Object.keys(this.store).forEach(function (r) {
                e.indexOf(r) < 0
                  ? t.stopQuery(r)
                  : (t.store[r].networkStatus = B.loading);
              });
            }),
            e
          );
        })();
      var ne = (function () {
        function e(e) {
          var t = e.cache,
            r = e.client,
            n = e.resolvers,
            i = e.fragmentMatcher;
          (this.cache = t),
            r && (this.client = r),
            n && this.addResolvers(n),
            i && this.setFragmentMatcher(i);
        }
        return (
          (e.prototype.addResolvers = function (e) {
            var t = this;
            (this.resolvers = this.resolvers || {}),
              Array.isArray(e)
                ? e.forEach(function (e) {
                    t.resolvers = Object(b.A)(t.resolvers, e);
                  })
                : (this.resolvers = Object(b.A)(this.resolvers, e));
          }),
          (e.prototype.setResolvers = function (e) {
            (this.resolvers = {}), this.addResolvers(e);
          }),
          (e.prototype.getResolvers = function () {
            return this.resolvers || {};
          }),
          (e.prototype.runResolvers = function (e) {
            var t = e.document,
              r = e.remoteResult,
              n = e.context,
              i = e.variables,
              o = e.onlyRunForcedResolvers,
              a = void 0 !== o && o;
            return Object(h.b)(this, void 0, void 0, function () {
              return Object(h.d)(this, function (e) {
                return t
                  ? [
                      2,
                      this.resolveDocument(
                        t,
                        r.data,
                        n,
                        i,
                        this.fragmentMatcher,
                        a
                      ).then(function (e) {
                        return Object(h.a)(Object(h.a)({}, r), {
                          data: e.result,
                        });
                      }),
                    ]
                  : [2, r];
              });
            });
          }),
          (e.prototype.setFragmentMatcher = function (e) {
            this.fragmentMatcher = e;
          }),
          (e.prototype.getFragmentMatcher = function () {
            return this.fragmentMatcher;
          }),
          (e.prototype.clientQuery = function (e) {
            return Object(b.s)(['client'], e) && this.resolvers ? e : null;
          }),
          (e.prototype.serverQuery = function (e) {
            return this.resolvers ? Object(b.C)(e) : e;
          }),
          (e.prototype.prepareContext = function (e) {
            void 0 === e && (e = {});
            var t = this.cache;
            return Object(h.a)(Object(h.a)({}, e), {
              cache: t,
              getCacheKey: function (e) {
                if (t.config) return t.config.dataIdFromObject(e);
                Object(y.b)(!1, 6);
              },
            });
          }),
          (e.prototype.addExportedVariables = function (e, t, r) {
            return (
              void 0 === t && (t = {}),
              void 0 === r && (r = {}),
              Object(h.b)(this, void 0, void 0, function () {
                return Object(h.d)(this, function (n) {
                  return e
                    ? [
                        2,
                        this.resolveDocument(
                          e,
                          this.buildRootValueFromCache(e, t) || {},
                          this.prepareContext(r),
                          t
                        ).then(function (e) {
                          return Object(h.a)(
                            Object(h.a)({}, t),
                            e.exportedVariables
                          );
                        }),
                      ]
                    : [2, Object(h.a)({}, t)];
                });
              })
            );
          }),
          (e.prototype.shouldForceResolvers = function (e) {
            var t = !1;
            return (
              Object(q.b)(e, {
                Directive: {
                  enter: function (e) {
                    if (
                      'client' === e.name.value &&
                      e.arguments &&
                      (t = e.arguments.some(function (e) {
                        return (
                          'always' === e.name.value &&
                          'BooleanValue' === e.value.kind &&
                          !0 === e.value.value
                        );
                      }))
                    )
                      return q.a;
                  },
                },
              }),
              t
            );
          }),
          (e.prototype.buildRootValueFromCache = function (e, t) {
            return this.cache.diff({
              query: Object(b.d)(e),
              variables: t,
              returnPartialData: !0,
              optimistic: !1,
            }).result;
          }),
          (e.prototype.resolveDocument = function (e, t, r, n, i, o) {
            return (
              void 0 === r && (r = {}),
              void 0 === n && (n = {}),
              void 0 === i &&
                (i = function () {
                  return !0;
                }),
              void 0 === o && (o = !1),
              Object(h.b)(this, void 0, void 0, function () {
                var a, u, s, c, l, f, p, d, v;
                return Object(h.d)(this, function (y) {
                  var m;
                  return (
                    (a = Object(b.l)(e)),
                    (u = Object(b.j)(e)),
                    (s = Object(b.g)(u)),
                    (c = a.operation),
                    (l = c
                      ? (m = c).charAt(0).toUpperCase() + m.slice(1)
                      : 'Query'),
                    (p = (f = this).cache),
                    (d = f.client),
                    (v = {
                      fragmentMap: s,
                      context: Object(h.a)(Object(h.a)({}, r), {
                        cache: p,
                        client: d,
                      }),
                      variables: n,
                      fragmentMatcher: i,
                      defaultOperationType: l,
                      exportedVariables: {},
                      onlyRunForcedResolvers: o,
                    }),
                    [
                      2,
                      this.resolveSelectionSet(a.selectionSet, t, v).then(
                        function (e) {
                          return {
                            result: e,
                            exportedVariables: v.exportedVariables,
                          };
                        }
                      ),
                    ]
                  );
                });
              })
            );
          }),
          (e.prototype.resolveSelectionSet = function (e, t, r) {
            return Object(h.b)(this, void 0, void 0, function () {
              var n,
                i,
                o,
                a,
                u,
                s = this;
              return Object(h.d)(this, function (c) {
                return (
                  (n = r.fragmentMap),
                  (i = r.context),
                  (o = r.variables),
                  (a = [t]),
                  (u = function (e) {
                    return Object(h.b)(s, void 0, void 0, function () {
                      var u, s;
                      return Object(h.d)(this, function (c) {
                        return Object(b.F)(e, o)
                          ? Object(b.t)(e)
                            ? [
                                2,
                                this.resolveField(e, t, r).then(function (t) {
                                  var r;
                                  'undefined' !== typeof t &&
                                    a.push((((r = {})[Object(b.E)(e)] = t), r));
                                }),
                              ]
                            : (Object(b.v)(e)
                                ? (u = e)
                                : ((u = n[e.name.value]), Object(y.b)(u, 7)),
                              u &&
                              u.typeCondition &&
                              ((s = u.typeCondition.name.value),
                              r.fragmentMatcher(t, s, i))
                                ? [
                                    2,
                                    this.resolveSelectionSet(
                                      u.selectionSet,
                                      t,
                                      r
                                    ).then(function (e) {
                                      a.push(e);
                                    }),
                                  ]
                                : [2])
                          : [2];
                      });
                    });
                  }),
                  [
                    2,
                    Promise.all(e.selections.map(u)).then(function () {
                      return Object(b.B)(a);
                    }),
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveField = function (e, t, r) {
            return Object(h.b)(this, void 0, void 0, function () {
              var n,
                i,
                o,
                a,
                u,
                s,
                c,
                l,
                f,
                p = this;
              return Object(h.d)(this, function (h) {
                return (
                  (n = r.variables),
                  (i = e.name.value),
                  (o = Object(b.E)(e)),
                  (a = i !== o),
                  (u = t[o] || t[i]),
                  (s = Promise.resolve(u)),
                  (r.onlyRunForcedResolvers && !this.shouldForceResolvers(e)) ||
                    ((c = t.__typename || r.defaultOperationType),
                    (l = this.resolvers && this.resolvers[c]) &&
                      (f = l[a ? i : o]) &&
                      (s = Promise.resolve(
                        f(t, Object(b.b)(e, n), r.context, {
                          field: e,
                          fragmentMap: r.fragmentMap,
                        })
                      ))),
                  [
                    2,
                    s.then(function (t) {
                      return (
                        void 0 === t && (t = u),
                        e.directives &&
                          e.directives.forEach(function (e) {
                            'export' === e.name.value &&
                              e.arguments &&
                              e.arguments.forEach(function (e) {
                                'as' === e.name.value &&
                                  'StringValue' === e.value.kind &&
                                  (r.exportedVariables[e.value.value] = t);
                              });
                          }),
                        e.selectionSet
                          ? null == t
                            ? t
                            : Array.isArray(t)
                            ? p.resolveSubSelectedArray(e, t, r)
                            : e.selectionSet
                            ? p.resolveSelectionSet(e.selectionSet, t, r)
                            : void 0
                          : t
                      );
                    }),
                  ]
                );
              });
            });
          }),
          (e.prototype.resolveSubSelectedArray = function (e, t, r) {
            var n = this;
            return Promise.all(
              t.map(function (t) {
                return null === t
                  ? null
                  : Array.isArray(t)
                  ? n.resolveSubSelectedArray(e, t, r)
                  : e.selectionSet
                  ? n.resolveSelectionSet(e.selectionSet, t, r)
                  : void 0;
              })
            );
          }),
          e
        );
      })();
      function ie(e) {
        var t = new Set(),
          r = null;
        return new W(function (n) {
          return (
            t.add(n),
            (r =
              r ||
              e.subscribe({
                next: function (e) {
                  t.forEach(function (t) {
                    return t.next && t.next(e);
                  });
                },
                error: function (e) {
                  t.forEach(function (t) {
                    return t.error && t.error(e);
                  });
                },
                complete: function () {
                  t.forEach(function (e) {
                    return e.complete && e.complete();
                  });
                },
              })),
            function () {
              t.delete(n) && !t.size && r && (r.unsubscribe(), (r = null));
            }
          );
        });
      }
      var oe = Object.prototype.hasOwnProperty,
        ae = (function () {
          function e(e) {
            var t = e.link,
              r = e.queryDeduplication,
              n = void 0 !== r && r,
              i = e.store,
              o = e.onBroadcast,
              a = void 0 === o ? function () {} : o,
              u = e.ssrMode,
              s = void 0 !== u && u,
              c = e.clientAwareness,
              l = void 0 === c ? {} : c,
              f = e.localState,
              p = e.assumeImmutableResults;
            (this.mutationStore = new te()),
              (this.queryStore = new re()),
              (this.clientAwareness = {}),
              (this.idCounter = 1),
              (this.queries = new Map()),
              (this.fetchQueryRejectFns = new Map()),
              (this.transformCache = new (b.e ? WeakMap : Map)()),
              (this.inFlightLinkObservables = new Map()),
              (this.pollingInfoByQueryId = new Map()),
              (this.link = t),
              (this.queryDeduplication = n),
              (this.dataStore = i),
              (this.onBroadcast = a),
              (this.clientAwareness = l),
              (this.localState = f || new ne({ cache: i.getCache() })),
              (this.ssrMode = s),
              (this.assumeImmutableResults = !!p);
          }
          return (
            (e.prototype.stop = function () {
              var e = this;
              this.queries.forEach(function (t, r) {
                e.stopQueryNoBroadcast(r);
              }),
                this.fetchQueryRejectFns.forEach(function (e) {
                  e(new y.a(8));
                });
            }),
            (e.prototype.mutate = function (e) {
              var t = e.mutation,
                r = e.variables,
                n = e.optimisticResponse,
                i = e.updateQueries,
                o = e.refetchQueries,
                a = void 0 === o ? [] : o,
                u = e.awaitRefetchQueries,
                s = void 0 !== u && u,
                c = e.update,
                l = e.errorPolicy,
                f = void 0 === l ? 'none' : l,
                p = e.fetchPolicy,
                d = e.context,
                v = void 0 === d ? {} : d;
              return Object(h.b)(this, void 0, void 0, function () {
                var e,
                  o,
                  u,
                  l = this;
                return Object(h.d)(this, function (d) {
                  switch (d.label) {
                    case 0:
                      return (
                        Object(y.b)(t, 9),
                        Object(y.b)(!p || 'no-cache' === p, 10),
                        (e = this.generateQueryId()),
                        (t = this.transform(t).document),
                        this.setQuery(e, function () {
                          return { document: t };
                        }),
                        (r = this.getVariables(t, r)),
                        this.transform(t).hasClientExports
                          ? [4, this.localState.addExportedVariables(t, r, v)]
                          : [3, 2]
                      );
                    case 1:
                      (r = d.sent()), (d.label = 2);
                    case 2:
                      return (
                        (o = function () {
                          var e = {};
                          return (
                            i &&
                              l.queries.forEach(function (t, r) {
                                var n = t.observableQuery;
                                if (n) {
                                  var o = n.queryName;
                                  o &&
                                    oe.call(i, o) &&
                                    (e[r] = {
                                      updater: i[o],
                                      query: l.queryStore.get(r),
                                    });
                                }
                              }),
                            e
                          );
                        }),
                        this.mutationStore.initMutation(e, t, r),
                        this.dataStore.markMutationInit({
                          mutationId: e,
                          document: t,
                          variables: r,
                          updateQueries: o(),
                          update: c,
                          optimisticResponse: n,
                        }),
                        this.broadcastQueries(),
                        (u = this),
                        [
                          2,
                          new Promise(function (i, l) {
                            var d, y;
                            u.getObservableFromLink(
                              t,
                              Object(h.a)(Object(h.a)({}, v), {
                                optimisticResponse: n,
                              }),
                              r,
                              !1
                            ).subscribe({
                              next: function (n) {
                                Object(b.q)(n) && 'none' === f
                                  ? (y = new Y({ graphQLErrors: n.errors }))
                                  : (u.mutationStore.markMutationResult(e),
                                    'no-cache' !== p &&
                                      u.dataStore.markMutationResult({
                                        mutationId: e,
                                        result: n,
                                        document: t,
                                        variables: r,
                                        updateQueries: o(),
                                        update: c,
                                      }),
                                    (d = n));
                              },
                              error: function (t) {
                                u.mutationStore.markMutationError(e, t),
                                  u.dataStore.markMutationComplete({
                                    mutationId: e,
                                    optimisticResponse: n,
                                  }),
                                  u.broadcastQueries(),
                                  u.setQuery(e, function () {
                                    return { document: null };
                                  }),
                                  l(new Y({ networkError: t }));
                              },
                              complete: function () {
                                if (
                                  (y && u.mutationStore.markMutationError(e, y),
                                  u.dataStore.markMutationComplete({
                                    mutationId: e,
                                    optimisticResponse: n,
                                  }),
                                  u.broadcastQueries(),
                                  y)
                                )
                                  l(y);
                                else {
                                  'function' === typeof a && (a = a(d));
                                  var t = [];
                                  J(a) &&
                                    a.forEach(function (e) {
                                      if ('string' === typeof e)
                                        u.queries.forEach(function (r) {
                                          var n = r.observableQuery;
                                          n &&
                                            n.queryName === e &&
                                            t.push(n.refetch());
                                        });
                                      else {
                                        var r = {
                                          query: e.query,
                                          variables: e.variables,
                                          fetchPolicy: 'network-only',
                                        };
                                        e.context && (r.context = e.context),
                                          t.push(u.query(r));
                                      }
                                    }),
                                    Promise.all(s ? t : []).then(function () {
                                      u.setQuery(e, function () {
                                        return { document: null };
                                      }),
                                        'ignore' === f &&
                                          d &&
                                          Object(b.q)(d) &&
                                          delete d.errors,
                                        i(d);
                                    });
                                }
                              },
                            });
                          }),
                        ]
                      );
                  }
                });
              });
            }),
            (e.prototype.fetchQuery = function (e, t, r, n) {
              return Object(h.b)(this, void 0, void 0, function () {
                var i,
                  o,
                  a,
                  u,
                  s,
                  c,
                  l,
                  f,
                  p,
                  d,
                  v,
                  y,
                  m,
                  g,
                  O,
                  w,
                  j,
                  S,
                  k = this;
                return Object(h.d)(this, function (x) {
                  switch (x.label) {
                    case 0:
                      return (
                        (i = t.metadata),
                        (o = void 0 === i ? null : i),
                        (a = t.fetchPolicy),
                        (u = void 0 === a ? 'cache-first' : a),
                        (s = t.context),
                        (c = void 0 === s ? {} : s),
                        (l = this.transform(t.query).document),
                        (f = this.getVariables(l, t.variables)),
                        this.transform(l).hasClientExports
                          ? [4, this.localState.addExportedVariables(l, f, c)]
                          : [3, 2]
                      );
                    case 1:
                      (f = x.sent()), (x.label = 2);
                    case 2:
                      if (
                        ((t = Object(h.a)(Object(h.a)({}, t), {
                          variables: f,
                        })),
                        (v = d = 'network-only' === u || 'no-cache' === u),
                        d ||
                          ((y = this.dataStore
                            .getCache()
                            .diff({
                              query: l,
                              variables: f,
                              returnPartialData: !0,
                              optimistic: !1,
                            })),
                          (m = y.complete),
                          (g = y.result),
                          (v = !m || 'cache-and-network' === u),
                          (p = g)),
                        (O = v && 'cache-only' !== u && 'standby' !== u),
                        Object(b.s)(['live'], l) && (O = !0),
                        (w = this.idCounter++),
                        (j =
                          'no-cache' !== u
                            ? this.updateQueryWatch(e, l, t)
                            : void 0),
                        this.setQuery(e, function () {
                          return {
                            document: l,
                            lastRequestId: w,
                            invalidated: !0,
                            cancel: j,
                          };
                        }),
                        this.invalidate(n),
                        this.queryStore.initQuery({
                          queryId: e,
                          document: l,
                          storePreviousVariables: O,
                          variables: f,
                          isPoll: r === G.poll,
                          isRefetch: r === G.refetch,
                          metadata: o,
                          fetchMoreForQueryId: n,
                        }),
                        this.broadcastQueries(),
                        O)
                      ) {
                        if (
                          ((S = this.fetchRequest({
                            requestId: w,
                            queryId: e,
                            document: l,
                            options: t,
                            fetchMoreForQueryId: n,
                          }).catch(function (t) {
                            throw t.hasOwnProperty('graphQLErrors')
                              ? t
                              : (w >= k.getQuery(e).lastRequestId &&
                                  (k.queryStore.markQueryError(e, t, n),
                                  k.invalidate(e),
                                  k.invalidate(n),
                                  k.broadcastQueries()),
                                new Y({ networkError: t }));
                          })),
                          'cache-and-network' !== u)
                        )
                          return [2, S];
                        S.catch(function () {});
                      }
                      return (
                        this.queryStore.markQueryResultClient(e, !O),
                        this.invalidate(e),
                        this.invalidate(n),
                        this.transform(l).hasForcedResolvers
                          ? [
                              2,
                              this.localState
                                .runResolvers({
                                  document: l,
                                  remoteResult: { data: p },
                                  context: c,
                                  variables: f,
                                  onlyRunForcedResolvers: !0,
                                })
                                .then(function (r) {
                                  return (
                                    k.markQueryResult(e, r, t, n),
                                    k.broadcastQueries(),
                                    r
                                  );
                                }),
                            ]
                          : (this.broadcastQueries(), [2, { data: p }])
                      );
                  }
                });
              });
            }),
            (e.prototype.markQueryResult = function (e, t, r, n) {
              var i = r.fetchPolicy,
                o = r.variables,
                a = r.errorPolicy;
              'no-cache' === i
                ? this.setQuery(e, function () {
                    return { newData: { result: t.data, complete: !0 } };
                  })
                : this.dataStore.markQueryResult(
                    t,
                    this.getQuery(e).document,
                    o,
                    n,
                    'ignore' === a || 'all' === a
                  );
            }),
            (e.prototype.queryListenerForObserver = function (e, t, r) {
              var n = this;
              function i(e, t) {
                if (r[e])
                  try {
                    r[e](t);
                  } catch (n) {}
              }
              return function (r, o) {
                if ((n.invalidate(e, !1), r)) {
                  var a = n.getQuery(e),
                    u = a.observableQuery,
                    s = a.document,
                    c = u ? u.options.fetchPolicy : t.fetchPolicy;
                  if ('standby' !== c) {
                    var l = U(r.networkStatus),
                      f = u && u.getLastResult(),
                      p = !(!f || f.networkStatus === r.networkStatus),
                      h =
                        t.returnPartialData ||
                        (!o && r.previousVariables) ||
                        (p && t.notifyOnNetworkStatusChange) ||
                        'cache-only' === c ||
                        'cache-and-network' === c;
                    if (!l || h) {
                      var d = J(r.graphQLErrors),
                        v =
                          (u && u.options.errorPolicy) ||
                          t.errorPolicy ||
                          'none';
                      if (('none' === v && d) || r.networkError)
                        return i(
                          'error',
                          new Y({
                            graphQLErrors: r.graphQLErrors,
                            networkError: r.networkError,
                          })
                        );
                      try {
                        var y = void 0,
                          b = void 0;
                        if (o)
                          'no-cache' !== c &&
                            'network-only' !== c &&
                            n.setQuery(e, function () {
                              return { newData: null };
                            }),
                            (y = o.result),
                            (b = !o.complete);
                        else {
                          var m = u && u.getLastError(),
                            g =
                              'none' !== v &&
                              (m && m.graphQLErrors) !== r.graphQLErrors;
                          if (f && f.data && !g) (y = f.data), (b = !1);
                          else {
                            var O = n.dataStore
                              .getCache()
                              .diff({
                                query: s,
                                variables: r.previousVariables || r.variables,
                                returnPartialData: !0,
                                optimistic: !0,
                              });
                            (y = O.result), (b = !O.complete);
                          }
                        }
                        var w =
                            b && !(t.returnPartialData || 'cache-only' === c),
                          j = {
                            data: w ? f && f.data : y,
                            loading: l,
                            networkStatus: r.networkStatus,
                            stale: w,
                          };
                        'all' === v && d && (j.errors = r.graphQLErrors),
                          i('next', j);
                      } catch (S) {
                        i('error', new Y({ networkError: S }));
                      }
                    }
                  }
                }
              };
            }),
            (e.prototype.transform = function (e) {
              var t = this.transformCache;
              if (!t.has(e)) {
                var r = this.dataStore.getCache(),
                  n = r.transformDocument(e),
                  i = Object(b.D)(r.transformForLink(n)),
                  o = this.localState.clientQuery(n),
                  a = this.localState.serverQuery(i),
                  u = {
                    document: n,
                    hasClientExports: Object(b.r)(n),
                    hasForcedResolvers: this.localState.shouldForceResolvers(n),
                    clientQuery: o,
                    serverQuery: a,
                    defaultVars: Object(b.h)(Object(b.m)(n)),
                  },
                  s = function (e) {
                    e && !t.has(e) && t.set(e, u);
                  };
                s(e), s(n), s(o), s(a);
              }
              return t.get(e);
            }),
            (e.prototype.getVariables = function (e, t) {
              return Object(h.a)(
                Object(h.a)({}, this.transform(e).defaultVars),
                t
              );
            }),
            (e.prototype.watchQuery = function (e, t) {
              void 0 === t && (t = !0),
                Object(y.b)('standby' !== e.fetchPolicy, 11),
                (e.variables = this.getVariables(e.query, e.variables)),
                'undefined' === typeof e.notifyOnNetworkStatusChange &&
                  (e.notifyOnNetworkStatusChange = !1);
              var r = Object(h.a)({}, e);
              return new Z({
                queryManager: this,
                options: r,
                shouldSubscribe: t,
              });
            }),
            (e.prototype.query = function (e) {
              var t = this;
              return (
                Object(y.b)(e.query, 12),
                Object(y.b)('Document' === e.query.kind, 13),
                Object(y.b)(!e.returnPartialData, 14),
                Object(y.b)(!e.pollInterval, 15),
                new Promise(function (r, n) {
                  var i = t.watchQuery(e, !1);
                  t.fetchQueryRejectFns.set('query:' + i.queryId, n),
                    i
                      .result()
                      .then(r, n)
                      .then(function () {
                        return t.fetchQueryRejectFns.delete(
                          'query:' + i.queryId
                        );
                      });
                })
              );
            }),
            (e.prototype.generateQueryId = function () {
              return String(this.idCounter++);
            }),
            (e.prototype.stopQueryInStore = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryInStoreNoBroadcast = function (e) {
              this.stopPollingQuery(e),
                this.queryStore.stopQuery(e),
                this.invalidate(e);
            }),
            (e.prototype.addQueryListener = function (e, t) {
              this.setQuery(e, function (e) {
                return e.listeners.add(t), { invalidated: !1 };
              });
            }),
            (e.prototype.updateQueryWatch = function (e, t, r) {
              var n = this,
                i = this.getQuery(e).cancel;
              i && i();
              return this.dataStore.getCache().watch({
                query: t,
                variables: r.variables,
                optimistic: !0,
                previousResult: function () {
                  var t = null,
                    r = n.getQuery(e).observableQuery;
                  if (r) {
                    var i = r.getLastResult();
                    i && (t = i.data);
                  }
                  return t;
                },
                callback: function (t) {
                  n.setQuery(e, function () {
                    return { invalidated: !0, newData: t };
                  });
                },
              });
            }),
            (e.prototype.addObservableQuery = function (e, t) {
              this.setQuery(e, function () {
                return { observableQuery: t };
              });
            }),
            (e.prototype.removeObservableQuery = function (e) {
              var t = this.getQuery(e).cancel;
              this.setQuery(e, function () {
                return { observableQuery: null };
              }),
                t && t();
            }),
            (e.prototype.clearStore = function () {
              this.fetchQueryRejectFns.forEach(function (e) {
                e(new y.a(16));
              });
              var e = [];
              return (
                this.queries.forEach(function (t, r) {
                  t.observableQuery && e.push(r);
                }),
                this.queryStore.reset(e),
                this.mutationStore.reset(),
                this.dataStore.reset()
              );
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return this.clearStore().then(function () {
                return e.reFetchObservableQueries();
              });
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              var t = this;
              void 0 === e && (e = !1);
              var r = [];
              return (
                this.queries.forEach(function (n, i) {
                  var o = n.observableQuery;
                  if (o) {
                    var a = o.options.fetchPolicy;
                    o.resetLastResults(),
                      'cache-only' === a ||
                        (!e && 'standby' === a) ||
                        r.push(o.refetch()),
                      t.setQuery(i, function () {
                        return { newData: null };
                      }),
                      t.invalidate(i);
                  }
                }),
                this.broadcastQueries(),
                Promise.all(r)
              );
            }),
            (e.prototype.observeQuery = function (e, t, r) {
              return (
                this.addQueryListener(
                  e,
                  this.queryListenerForObserver(e, t, r)
                ),
                this.fetchQuery(e, t)
              );
            }),
            (e.prototype.startQuery = function (e, t, r) {
              return (
                this.addQueryListener(e, r),
                this.fetchQuery(e, t).catch(function () {}),
                e
              );
            }),
            (e.prototype.startGraphQLSubscription = function (e) {
              var t = this,
                r = e.query,
                n = e.fetchPolicy,
                i = e.variables;
              (r = this.transform(r).document), (i = this.getVariables(r, i));
              var o = function (e) {
                return t.getObservableFromLink(r, {}, e, !1).map(function (i) {
                  if (
                    ((n && 'no-cache' === n) ||
                      (t.dataStore.markSubscriptionResult(i, r, e),
                      t.broadcastQueries()),
                    Object(b.q)(i))
                  )
                    throw new Y({ graphQLErrors: i.errors });
                  return i;
                });
              };
              if (this.transform(r).hasClientExports) {
                var a = this.localState.addExportedVariables(r, i).then(o);
                return new W(function (e) {
                  var t = null;
                  return (
                    a.then(function (r) {
                      return (t = r.subscribe(e));
                    }, e.error),
                    function () {
                      return t && t.unsubscribe();
                    }
                  );
                });
              }
              return o(i);
            }),
            (e.prototype.stopQuery = function (e) {
              this.stopQueryNoBroadcast(e), this.broadcastQueries();
            }),
            (e.prototype.stopQueryNoBroadcast = function (e) {
              this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
            }),
            (e.prototype.removeQuery = function (e) {
              this.fetchQueryRejectFns.delete('query:' + e),
                this.fetchQueryRejectFns.delete('fetchRequest:' + e),
                this.getQuery(e).subscriptions.forEach(function (e) {
                  return e.unsubscribe();
                }),
                this.queries.delete(e);
            }),
            (e.prototype.getCurrentQueryResult = function (e, t) {
              void 0 === t && (t = !0);
              var r = e.options,
                n = r.variables,
                i = r.query,
                o = r.fetchPolicy,
                a = r.returnPartialData,
                u = e.getLastResult(),
                s = this.getQuery(e.queryId).newData;
              if (s && s.complete) return { data: s.result, partial: !1 };
              if ('no-cache' === o || 'network-only' === o)
                return { data: void 0, partial: !1 };
              var c = this.dataStore
                  .getCache()
                  .diff({
                    query: i,
                    variables: n,
                    previousResult: u ? u.data : void 0,
                    returnPartialData: !0,
                    optimistic: t,
                  }),
                l = c.result,
                f = c.complete;
              return { data: f || a ? l : void 0, partial: !f };
            }),
            (e.prototype.getQueryWithPreviousResult = function (e) {
              var t;
              if ('string' === typeof e) {
                var r = this.getQuery(e).observableQuery;
                Object(y.b)(r, 17), (t = r);
              } else t = e;
              var n = t.options,
                i = n.variables,
                o = n.query;
              return {
                previousResult: this.getCurrentQueryResult(t, !1).data,
                variables: i,
                document: o,
              };
            }),
            (e.prototype.broadcastQueries = function () {
              var e = this;
              this.onBroadcast(),
                this.queries.forEach(function (t, r) {
                  t.invalidated &&
                    t.listeners.forEach(function (n) {
                      n && n(e.queryStore.get(r), t.newData);
                    });
                });
            }),
            (e.prototype.getLocalState = function () {
              return this.localState;
            }),
            (e.prototype.getObservableFromLink = function (e, t, r, n) {
              var i,
                o = this;
              void 0 === n && (n = this.queryDeduplication);
              var a = this.transform(e).serverQuery;
              if (a) {
                var u = this.inFlightLinkObservables,
                  s = this.link,
                  c = {
                    query: a,
                    variables: r,
                    operationName: Object(b.n)(a) || void 0,
                    context: this.prepareContext(
                      Object(h.a)(Object(h.a)({}, t), { forceFetch: !n })
                    ),
                  };
                if (((t = c.context), n)) {
                  var l = u.get(a) || new Map();
                  u.set(a, l);
                  var f = JSON.stringify(r);
                  if (!(i = l.get(f))) {
                    l.set(f, (i = ie(E(s, c))));
                    var p = function () {
                        l.delete(f), l.size || u.delete(a), d.unsubscribe();
                      },
                      d = i.subscribe({ next: p, error: p, complete: p });
                  }
                } else i = ie(E(s, c));
              } else (i = W.of({ data: {} })), (t = this.prepareContext(t));
              var v = this.transform(e).clientQuery;
              return (
                v &&
                  (i = (function (e, t) {
                    return new W(function (r) {
                      var n = r.next,
                        i = r.error,
                        o = r.complete,
                        a = 0,
                        u = !1,
                        s = {
                          next: function (e) {
                            ++a,
                              new Promise(function (r) {
                                r(t(e));
                              }).then(
                                function (e) {
                                  --a, n && n.call(r, e), u && s.complete();
                                },
                                function (e) {
                                  --a, i && i.call(r, e);
                                }
                              );
                          },
                          error: function (e) {
                            i && i.call(r, e);
                          },
                          complete: function () {
                            (u = !0), a || (o && o.call(r));
                          },
                        },
                        c = e.subscribe(s);
                      return function () {
                        return c.unsubscribe();
                      };
                    });
                  })(i, function (e) {
                    return o.localState.runResolvers({
                      document: v,
                      remoteResult: e,
                      context: t,
                      variables: r,
                    });
                  })),
                i
              );
            }),
            (e.prototype.fetchRequest = function (e) {
              var t,
                r,
                n = this,
                i = e.requestId,
                o = e.queryId,
                a = e.document,
                u = e.options,
                s = e.fetchMoreForQueryId,
                c = u.variables,
                l = u.errorPolicy,
                f = void 0 === l ? 'none' : l,
                p = u.fetchPolicy;
              return new Promise(function (e, l) {
                var h = n.getObservableFromLink(a, u.context, c),
                  d = 'fetchRequest:' + o;
                n.fetchQueryRejectFns.set(d, l);
                var v = function () {
                    n.fetchQueryRejectFns.delete(d),
                      n.setQuery(o, function (e) {
                        e.subscriptions.delete(y);
                      });
                  },
                  y = h
                    .map(function (e) {
                      if (
                        (i >= n.getQuery(o).lastRequestId &&
                          (n.markQueryResult(o, e, u, s),
                          n.queryStore.markQueryResult(o, e, s),
                          n.invalidate(o),
                          n.invalidate(s),
                          n.broadcastQueries()),
                        'none' === f && J(e.errors))
                      )
                        return l(new Y({ graphQLErrors: e.errors }));
                      if (
                        ('all' === f && (r = e.errors), s || 'no-cache' === p)
                      )
                        t = e.data;
                      else {
                        var h = n.dataStore
                            .getCache()
                            .diff({
                              variables: c,
                              query: a,
                              optimistic: !1,
                              returnPartialData: !0,
                            }),
                          d = h.result;
                        (h.complete || u.returnPartialData) && (t = d);
                      }
                    })
                    .subscribe({
                      error: function (e) {
                        v(), l(e);
                      },
                      complete: function () {
                        v(),
                          e({
                            data: t,
                            errors: r,
                            loading: !1,
                            networkStatus: B.ready,
                            stale: !1,
                          });
                      },
                    });
                n.setQuery(o, function (e) {
                  e.subscriptions.add(y);
                });
              });
            }),
            (e.prototype.getQuery = function (e) {
              return (
                this.queries.get(e) || {
                  listeners: new Set(),
                  invalidated: !1,
                  document: null,
                  newData: null,
                  lastRequestId: 1,
                  observableQuery: null,
                  subscriptions: new Set(),
                }
              );
            }),
            (e.prototype.setQuery = function (e, t) {
              var r = this.getQuery(e),
                n = Object(h.a)(Object(h.a)({}, r), t(r));
              this.queries.set(e, n);
            }),
            (e.prototype.invalidate = function (e, t) {
              void 0 === t && (t = !0),
                e &&
                  this.setQuery(e, function () {
                    return { invalidated: t };
                  });
            }),
            (e.prototype.prepareContext = function (e) {
              void 0 === e && (e = {});
              var t = this.localState.prepareContext(e);
              return Object(h.a)(Object(h.a)({}, t), {
                clientAwareness: this.clientAwareness,
              });
            }),
            (e.prototype.checkInFlight = function (e) {
              var t = this.queryStore.get(e);
              return (
                t && t.networkStatus !== B.ready && t.networkStatus !== B.error
              );
            }),
            (e.prototype.startPollingQuery = function (e, t, r) {
              var n = this,
                i = e.pollInterval;
              if ((Object(y.b)(i, 18), !this.ssrMode)) {
                var o = this.pollingInfoByQueryId.get(t);
                o || this.pollingInfoByQueryId.set(t, (o = {})),
                  (o.interval = i),
                  (o.options = Object(h.a)(Object(h.a)({}, e), {
                    fetchPolicy: 'network-only',
                  }));
                var a = function () {
                    var e = n.pollingInfoByQueryId.get(t);
                    e &&
                      (n.checkInFlight(t)
                        ? u()
                        : n.fetchQuery(t, e.options, G.poll).then(u, u));
                  },
                  u = function () {
                    var e = n.pollingInfoByQueryId.get(t);
                    e &&
                      (clearTimeout(e.timeout),
                      (e.timeout = setTimeout(a, e.interval)));
                  };
                r && this.addQueryListener(t, r), u();
              }
              return t;
            }),
            (e.prototype.stopPollingQuery = function (e) {
              this.pollingInfoByQueryId.delete(e);
            }),
            e
          );
        })(),
        ue = (function () {
          function e(e) {
            this.cache = e;
          }
          return (
            (e.prototype.getCache = function () {
              return this.cache;
            }),
            (e.prototype.markQueryResult = function (e, t, r, n, i) {
              void 0 === i && (i = !1);
              var o = !Object(b.q)(e);
              i && Object(b.q)(e) && e.data && (o = !0),
                !n &&
                  o &&
                  this.cache.write({
                    result: e.data,
                    dataId: 'ROOT_QUERY',
                    query: t,
                    variables: r,
                  });
            }),
            (e.prototype.markSubscriptionResult = function (e, t, r) {
              Object(b.q)(e) ||
                this.cache.write({
                  result: e.data,
                  dataId: 'ROOT_SUBSCRIPTION',
                  query: t,
                  variables: r,
                });
            }),
            (e.prototype.markMutationInit = function (e) {
              var t,
                r = this;
              e.optimisticResponse &&
                ((t =
                  'function' === typeof e.optimisticResponse
                    ? e.optimisticResponse(e.variables)
                    : e.optimisticResponse),
                this.cache.recordOptimisticTransaction(function (n) {
                  var i = r.cache;
                  r.cache = n;
                  try {
                    r.markMutationResult({
                      mutationId: e.mutationId,
                      result: { data: t },
                      document: e.document,
                      variables: e.variables,
                      updateQueries: e.updateQueries,
                      update: e.update,
                    });
                  } finally {
                    r.cache = i;
                  }
                }, e.mutationId));
            }),
            (e.prototype.markMutationResult = function (e) {
              var t = this;
              if (!Object(b.q)(e.result)) {
                var r = [
                    {
                      result: e.result.data,
                      dataId: 'ROOT_MUTATION',
                      query: e.document,
                      variables: e.variables,
                    },
                  ],
                  n = e.updateQueries;
                n &&
                  Object.keys(n).forEach(function (i) {
                    var o = n[i],
                      a = o.query,
                      u = o.updater,
                      s = t.cache.diff({
                        query: a.document,
                        variables: a.variables,
                        returnPartialData: !0,
                        optimistic: !1,
                      }),
                      c = s.result;
                    if (s.complete) {
                      var l = Object(b.I)(function () {
                        return u(c, {
                          mutationResult: e.result,
                          queryName: Object(b.n)(a.document) || void 0,
                          queryVariables: a.variables,
                        });
                      });
                      l &&
                        r.push({
                          result: l,
                          dataId: 'ROOT_QUERY',
                          query: a.document,
                          variables: a.variables,
                        });
                    }
                  }),
                  this.cache.performTransaction(function (t) {
                    r.forEach(function (e) {
                      return t.write(e);
                    });
                    var n = e.update;
                    n &&
                      Object(b.I)(function () {
                        return n(t, e.result);
                      });
                  });
              }
            }),
            (e.prototype.markMutationComplete = function (e) {
              var t = e.mutationId;
              e.optimisticResponse && this.cache.removeOptimistic(t);
            }),
            (e.prototype.markUpdateQueryResult = function (e, t, r) {
              this.cache.write({
                result: r,
                dataId: 'ROOT_QUERY',
                variables: t,
                query: e,
              });
            }),
            (e.prototype.reset = function () {
              return this.cache.reset();
            }),
            e
          );
        })(),
        se = (function () {
          function e(e) {
            var t = this;
            (this.defaultOptions = {}),
              (this.resetStoreCallbacks = []),
              (this.clearStoreCallbacks = []);
            var r = e.cache,
              n = e.ssrMode,
              i = void 0 !== n && n,
              o = e.ssrForceFetchDelay,
              a = void 0 === o ? 0 : o,
              u = e.connectToDevTools,
              s = e.queryDeduplication,
              c = void 0 === s || s,
              l = e.defaultOptions,
              f = e.assumeImmutableResults,
              p = void 0 !== f && f,
              h = e.resolvers,
              d = e.typeDefs,
              v = e.fragmentMatcher,
              b = e.name,
              m = e.version,
              g = e.link;
            if ((!g && h && (g = Q.empty()), !g || !r)) throw new y.a(4);
            (this.link = g),
              (this.cache = r),
              (this.store = new ue(r)),
              (this.disableNetworkFetches = i || a > 0),
              (this.queryDeduplication = c),
              (this.defaultOptions = l || {}),
              (this.typeDefs = d),
              a &&
                setTimeout(function () {
                  return (t.disableNetworkFetches = !1);
                }, a),
              (this.watchQuery = this.watchQuery.bind(this)),
              (this.query = this.query.bind(this)),
              (this.mutate = this.mutate.bind(this)),
              (this.resetStore = this.resetStore.bind(this)),
              (this.reFetchObservableQueries = this.reFetchObservableQueries.bind(
                this
              ));
            'undefined' !== typeof u &&
              u &&
              'undefined' !== typeof window &&
              (window.__APOLLO_CLIENT__ = this),
              (this.version = '2.6.10'),
              (this.localState = new ne({
                cache: r,
                client: this,
                resolvers: h,
                fragmentMatcher: v,
              })),
              (this.queryManager = new ae({
                link: this.link,
                store: this.store,
                queryDeduplication: c,
                ssrMode: i,
                clientAwareness: { name: b, version: m },
                localState: this.localState,
                assumeImmutableResults: p,
                onBroadcast: function () {
                  t.devToolsHookCb &&
                    t.devToolsHookCb({
                      action: {},
                      state: {
                        queries: t.queryManager.queryStore.getStore(),
                        mutations: t.queryManager.mutationStore.getStore(),
                      },
                      dataWithOptimisticResults: t.cache.extract(!0),
                    });
                },
              }));
          }
          return (
            (e.prototype.stop = function () {
              this.queryManager.stop();
            }),
            (e.prototype.watchQuery = function (e) {
              return (
                this.defaultOptions.watchQuery &&
                  (e = Object(h.a)(
                    Object(h.a)({}, this.defaultOptions.watchQuery),
                    e
                  )),
                !this.disableNetworkFetches ||
                  ('network-only' !== e.fetchPolicy &&
                    'cache-and-network' !== e.fetchPolicy) ||
                  (e = Object(h.a)(Object(h.a)({}, e), {
                    fetchPolicy: 'cache-first',
                  })),
                this.queryManager.watchQuery(e)
              );
            }),
            (e.prototype.query = function (e) {
              return (
                this.defaultOptions.query &&
                  (e = Object(h.a)(
                    Object(h.a)({}, this.defaultOptions.query),
                    e
                  )),
                Object(y.b)('cache-and-network' !== e.fetchPolicy, 5),
                this.disableNetworkFetches &&
                  'network-only' === e.fetchPolicy &&
                  (e = Object(h.a)(Object(h.a)({}, e), {
                    fetchPolicy: 'cache-first',
                  })),
                this.queryManager.query(e)
              );
            }),
            (e.prototype.mutate = function (e) {
              return (
                this.defaultOptions.mutate &&
                  (e = Object(h.a)(
                    Object(h.a)({}, this.defaultOptions.mutate),
                    e
                  )),
                this.queryManager.mutate(e)
              );
            }),
            (e.prototype.subscribe = function (e) {
              return this.queryManager.startGraphQLSubscription(e);
            }),
            (e.prototype.readQuery = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readQuery(e, t);
            }),
            (e.prototype.readFragment = function (e, t) {
              return void 0 === t && (t = !1), this.cache.readFragment(e, t);
            }),
            (e.prototype.writeQuery = function (e) {
              var t = this.cache.writeQuery(e);
              return this.queryManager.broadcastQueries(), t;
            }),
            (e.prototype.writeFragment = function (e) {
              var t = this.cache.writeFragment(e);
              return this.queryManager.broadcastQueries(), t;
            }),
            (e.prototype.writeData = function (e) {
              var t = this.cache.writeData(e);
              return this.queryManager.broadcastQueries(), t;
            }),
            (e.prototype.__actionHookForDevTools = function (e) {
              this.devToolsHookCb = e;
            }),
            (e.prototype.__requestRaw = function (e) {
              return E(this.link, e);
            }),
            (e.prototype.initQueryManager = function () {
              return this.queryManager;
            }),
            (e.prototype.resetStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore();
                })
                .then(function () {
                  return Promise.all(
                    e.resetStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                })
                .then(function () {
                  return e.reFetchObservableQueries();
                });
            }),
            (e.prototype.clearStore = function () {
              var e = this;
              return Promise.resolve()
                .then(function () {
                  return e.queryManager.clearStore();
                })
                .then(function () {
                  return Promise.all(
                    e.clearStoreCallbacks.map(function (e) {
                      return e();
                    })
                  );
                });
            }),
            (e.prototype.onResetStore = function (e) {
              var t = this;
              return (
                this.resetStoreCallbacks.push(e),
                function () {
                  t.resetStoreCallbacks = t.resetStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.onClearStore = function (e) {
              var t = this;
              return (
                this.clearStoreCallbacks.push(e),
                function () {
                  t.clearStoreCallbacks = t.clearStoreCallbacks.filter(
                    function (t) {
                      return t !== e;
                    }
                  );
                }
              );
            }),
            (e.prototype.reFetchObservableQueries = function (e) {
              return this.queryManager.reFetchObservableQueries(e);
            }),
            (e.prototype.extract = function (e) {
              return this.cache.extract(e);
            }),
            (e.prototype.restore = function (e) {
              return this.cache.restore(e);
            }),
            (e.prototype.addResolvers = function (e) {
              this.localState.addResolvers(e);
            }),
            (e.prototype.setResolvers = function (e) {
              this.localState.setResolvers(e);
            }),
            (e.prototype.getResolvers = function () {
              return this.localState.getResolvers();
            }),
            (e.prototype.setLocalStateFragmentMatcher = function (e) {
              this.localState.setFragmentMatcher(e);
            }),
            e
          );
        })();
      function ce(e) {
        return {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              name: { kind: 'Name', value: 'GeneratedClientQuery' },
              selectionSet: le(e),
            },
          ],
        };
      }
      function le(e) {
        if (
          'number' === typeof e ||
          'boolean' === typeof e ||
          'string' === typeof e ||
          'undefined' === typeof e ||
          null === e
        )
          return null;
        if (Array.isArray(e)) return le(e[0]);
        var t = [];
        return (
          Object.keys(e).forEach(function (r) {
            var n = {
              kind: 'Field',
              name: { kind: 'Name', value: r },
              selectionSet: le(e[r]) || void 0,
            };
            t.push(n);
          }),
          { kind: 'SelectionSet', selections: t }
        );
      }
      var fe,
        pe = {
          kind: 'Document',
          definitions: [
            {
              kind: 'OperationDefinition',
              operation: 'query',
              name: null,
              variableDefinitions: null,
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [
                  {
                    kind: 'Field',
                    alias: null,
                    name: { kind: 'Name', value: '__typename' },
                    arguments: [],
                    directives: [],
                    selectionSet: null,
                  },
                ],
              },
            },
          ],
        },
        he = (function () {
          function e() {}
          return (
            (e.prototype.transformDocument = function (e) {
              return e;
            }),
            (e.prototype.transformForLink = function (e) {
              return e;
            }),
            (e.prototype.readQuery = function (e, t) {
              return (
                void 0 === t && (t = !1),
                this.read({
                  query: e.query,
                  variables: e.variables,
                  optimistic: t,
                })
              );
            }),
            (e.prototype.readFragment = function (e, t) {
              return (
                void 0 === t && (t = !1),
                this.read({
                  query: Object(b.k)(e.fragment, e.fragmentName),
                  variables: e.variables,
                  rootId: e.id,
                  optimistic: t,
                })
              );
            }),
            (e.prototype.writeQuery = function (e) {
              this.write({
                dataId: 'ROOT_QUERY',
                result: e.data,
                query: e.query,
                variables: e.variables,
              });
            }),
            (e.prototype.writeFragment = function (e) {
              this.write({
                dataId: e.id,
                result: e.data,
                variables: e.variables,
                query: Object(b.k)(e.fragment, e.fragmentName),
              });
            }),
            (e.prototype.writeData = function (e) {
              var t,
                r,
                n = e.id,
                i = e.data;
              if ('undefined' !== typeof n) {
                var o = null;
                try {
                  o = this.read({ rootId: n, optimistic: !1, query: pe });
                } catch (s) {}
                var a = (o && o.__typename) || '__ClientData',
                  u = Object.assign({ __typename: a }, i);
                this.writeFragment({
                  id: n,
                  fragment:
                    ((t = u),
                    (r = a),
                    {
                      kind: 'Document',
                      definitions: [
                        {
                          kind: 'FragmentDefinition',
                          typeCondition: {
                            kind: 'NamedType',
                            name: { kind: 'Name', value: r || '__FakeType' },
                          },
                          name: { kind: 'Name', value: 'GeneratedClientQuery' },
                          selectionSet: le(t),
                        },
                      ],
                    }),
                  data: u,
                });
              } else this.writeQuery({ query: ce(i), data: i });
            }),
            e
          );
        })();
      fe || (fe = {});
      var de = null,
        ve = {},
        ye = 1,
        be = Array,
        me =
          be['@wry/context:Slot'] ||
          (function () {
            var e = (function () {
              function e() {
                this.id = [
                  'slot',
                  ye++,
                  Date.now(),
                  Math.random().toString(36).slice(2),
                ].join(':');
              }
              return (
                (e.prototype.hasValue = function () {
                  for (var e = de; e; e = e.parent)
                    if (this.id in e.slots) {
                      var t = e.slots[this.id];
                      if (t === ve) break;
                      return e !== de && (de.slots[this.id] = t), !0;
                    }
                  return de && (de.slots[this.id] = ve), !1;
                }),
                (e.prototype.getValue = function () {
                  if (this.hasValue()) return de.slots[this.id];
                }),
                (e.prototype.withValue = function (e, t, r, n) {
                  var i,
                    o = (((i = { __proto__: null })[this.id] = e), i),
                    a = de;
                  de = { parent: a, slots: o };
                  try {
                    return t.apply(n, r);
                  } finally {
                    de = a;
                  }
                }),
                (e.bind = function (e) {
                  var t = de;
                  return function () {
                    var r = de;
                    try {
                      return (de = t), e.apply(this, arguments);
                    } finally {
                      de = r;
                    }
                  };
                }),
                (e.noContext = function (e, t, r) {
                  if (!de) return e.apply(r, t);
                  var n = de;
                  try {
                    return (de = null), e.apply(r, t);
                  } finally {
                    de = n;
                  }
                }),
                e
              );
            })();
            try {
              Object.defineProperty(be, '@wry/context:Slot', {
                value: (be['@wry/context:Slot'] = e),
                enumerable: !1,
                writable: !1,
                configurable: !1,
              });
            } finally {
              return e;
            }
          })();
      me.bind, me.noContext;
      function ge() {}
      var Oe = (function () {
          function e(e, t) {
            void 0 === e && (e = 1 / 0),
              void 0 === t && (t = ge),
              (this.max = e),
              (this.dispose = t),
              (this.map = new Map()),
              (this.newest = null),
              (this.oldest = null);
          }
          return (
            (e.prototype.has = function (e) {
              return this.map.has(e);
            }),
            (e.prototype.get = function (e) {
              var t = this.getEntry(e);
              return t && t.value;
            }),
            (e.prototype.getEntry = function (e) {
              var t = this.map.get(e);
              if (t && t !== this.newest) {
                var r = t.older,
                  n = t.newer;
                n && (n.older = r),
                  r && (r.newer = n),
                  (t.older = this.newest),
                  (t.older.newer = t),
                  (t.newer = null),
                  (this.newest = t),
                  t === this.oldest && (this.oldest = n);
              }
              return t;
            }),
            (e.prototype.set = function (e, t) {
              var r = this.getEntry(e);
              return r
                ? (r.value = t)
                : ((r = { key: e, value: t, newer: null, older: this.newest }),
                  this.newest && (this.newest.newer = r),
                  (this.newest = r),
                  (this.oldest = this.oldest || r),
                  this.map.set(e, r),
                  r.value);
            }),
            (e.prototype.clean = function () {
              for (; this.oldest && this.map.size > this.max; )
                this.delete(this.oldest.key);
            }),
            (e.prototype.delete = function (e) {
              var t = this.map.get(e);
              return (
                !!t &&
                (t === this.newest && (this.newest = t.older),
                t === this.oldest && (this.oldest = t.newer),
                t.newer && (t.newer.older = t.older),
                t.older && (t.older.newer = t.newer),
                this.map.delete(e),
                this.dispose(t.value, e),
                !0)
              );
            }),
            e
          );
        })(),
        we = new me(),
        je = [],
        Se = [];
      function ke(e, t) {
        if (!e) throw new Error(t || 'assertion failure');
      }
      function xe(e) {
        switch (e.length) {
          case 0:
            throw new Error('unknown value');
          case 1:
            return e[0];
          case 2:
            throw e[1];
        }
      }
      var Qe = (function () {
        function e(t, r) {
          (this.fn = t),
            (this.args = r),
            (this.parents = new Set()),
            (this.childValues = new Map()),
            (this.dirtyChildren = null),
            (this.dirty = !0),
            (this.recomputing = !1),
            (this.value = []),
            ++e.count;
        }
        return (
          (e.prototype.recompute = function () {
            if (
              (ke(!this.recomputing, 'already recomputing'),
              (function (e) {
                var t = we.getValue();
                if (t)
                  return (
                    e.parents.add(t),
                    t.childValues.has(e) || t.childValues.set(e, []),
                    qe(e) ? De(t, e) : Me(t, e),
                    t
                  );
              })(this) || !Pe(this))
            )
              return qe(this)
                ? (function (e) {
                    var t = Fe(e);
                    we.withValue(e, Ee, [e]),
                      (function (e) {
                        if ('function' === typeof e.subscribe)
                          try {
                            Ve(e),
                              (e.unsubscribe = e.subscribe.apply(null, e.args));
                          } catch (t) {
                            return e.setDirty(), !1;
                          }
                        return !0;
                      })(e) &&
                        (function (e) {
                          if (((e.dirty = !1), qe(e))) return;
                          Ie(e);
                        })(e);
                    return t.forEach(Pe), xe(e.value);
                  })(this)
                : xe(this.value);
          }),
          (e.prototype.setDirty = function () {
            this.dirty ||
              ((this.dirty = !0), (this.value.length = 0), Re(this), Ve(this));
          }),
          (e.prototype.dispose = function () {
            var e = this;
            Fe(this).forEach(Pe),
              Ve(this),
              this.parents.forEach(function (t) {
                t.setDirty(), Ce(t, e);
              });
          }),
          (e.count = 0),
          e
        );
      })();
      function Ee(e) {
        (e.recomputing = !0), (e.value.length = 0);
        try {
          e.value[0] = e.fn.apply(null, e.args);
        } catch (t) {
          e.value[1] = t;
        }
        e.recomputing = !1;
      }
      function qe(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size);
      }
      function Re(e) {
        e.parents.forEach(function (t) {
          return De(t, e);
        });
      }
      function Ie(e) {
        e.parents.forEach(function (t) {
          return Me(t, e);
        });
      }
      function De(e, t) {
        if ((ke(e.childValues.has(t)), ke(qe(t)), e.dirtyChildren)) {
          if (e.dirtyChildren.has(t)) return;
        } else e.dirtyChildren = Se.pop() || new Set();
        e.dirtyChildren.add(t), Re(e);
      }
      function Me(e, t) {
        ke(e.childValues.has(t)), ke(!qe(t));
        var r = e.childValues.get(t);
        0 === r.length
          ? e.childValues.set(t, t.value.slice(0))
          : (function (e, t) {
              var r = e.length;
              return r > 0 && r === t.length && e[r - 1] === t[r - 1];
            })(r, t.value) || e.setDirty(),
          _e(e, t),
          qe(e) || Ie(e);
      }
      function _e(e, t) {
        var r = e.dirtyChildren;
        r &&
          (r.delete(t),
          0 === r.size &&
            (Se.length < 100 && Se.push(r), (e.dirtyChildren = null)));
      }
      function Pe(e) {
        return (
          0 === e.parents.size &&
          'function' === typeof e.reportOrphan &&
          !0 === e.reportOrphan()
        );
      }
      function Fe(e) {
        var t = je;
        return (
          e.childValues.size > 0 &&
            ((t = []),
            e.childValues.forEach(function (r, n) {
              Ce(e, n), t.push(n);
            })),
          ke(null === e.dirtyChildren),
          t
        );
      }
      function Ce(e, t) {
        t.parents.delete(e), e.childValues.delete(t), _e(e, t);
      }
      function Ve(e) {
        var t = e.unsubscribe;
        'function' === typeof t && ((e.unsubscribe = void 0), t());
      }
      var Te = (function () {
        function e(e) {
          this.weakness = e;
        }
        return (
          (e.prototype.lookup = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return this.lookupArray(e);
          }),
          (e.prototype.lookupArray = function (e) {
            var t = this;
            return (
              e.forEach(function (e) {
                return (t = t.getChildTrie(e));
              }),
              t.data || (t.data = Object.create(null))
            );
          }),
          (e.prototype.getChildTrie = function (t) {
            var r =
                this.weakness &&
                (function (e) {
                  switch (typeof e) {
                    case 'object':
                      if (null === e) break;
                    case 'function':
                      return !0;
                  }
                  return !1;
                })(t)
                  ? this.weak || (this.weak = new WeakMap())
                  : this.strong || (this.strong = new Map()),
              n = r.get(t);
            return n || r.set(t, (n = new e(this.weakness))), n;
          }),
          e
        );
      })();
      var Ae = new Te('function' === typeof WeakMap);
      function Ne() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return Ae.lookupArray(e);
      }
      var Le = new Set();
      function Be(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = new Oe(t.max || Math.pow(2, 16), function (e) {
            return e.dispose();
          }),
          n = !!t.disposable,
          i = t.makeCacheKey || Ne;
        function o() {
          if (!n || we.hasValue()) {
            var o = i.apply(null, arguments);
            if (void 0 === o) return e.apply(null, arguments);
            var a = Array.prototype.slice.call(arguments),
              u = r.get(o);
            u
              ? (u.args = a)
              : ((u = new Qe(e, a)),
                r.set(o, u),
                (u.subscribe = t.subscribe),
                n &&
                  (u.reportOrphan = function () {
                    return r.delete(o);
                  }));
            var s = u.recompute();
            return (
              r.set(o, u),
              Le.add(r),
              we.hasValue() ||
                (Le.forEach(function (e) {
                  return e.clean();
                }),
                Le.clear()),
              n ? void 0 : s
            );
          }
        }
        return (
          (o.dirty = function () {
            var e = i.apply(null, arguments),
              t = void 0 !== e && r.get(e);
            t && t.setDirty();
          }),
          o
        );
      }
      var ze = !1;
      function He() {
        var e = !ze;
        return Object(b.y)() || (ze = !0), e;
      }
      var Ke = (function () {
          function e() {}
          return (
            (e.prototype.ensureReady = function () {
              return Promise.resolve();
            }),
            (e.prototype.canBypassInit = function () {
              return !0;
            }),
            (e.prototype.match = function (e, t, r) {
              var n = r.store.get(e.id),
                i = 'ROOT_QUERY' === e.id;
              if (!n) return i;
              var o = n.__typename,
                a = void 0 === o ? i && 'Query' : o;
              return (a && a === t) || (He(), 'heuristic');
            }),
            e
          );
        })(),
        Ue =
          ((function () {
            function e(e) {
              e && e.introspectionQueryResultData
                ? ((this.possibleTypesMap = this.parseIntrospectionResult(
                    e.introspectionQueryResultData
                  )),
                  (this.isReady = !0))
                : (this.isReady = !1),
                (this.match = this.match.bind(this));
            }
            (e.prototype.match = function (e, t, r) {
              Object(y.b)(this.isReady, 1);
              var n = r.store.get(e.id),
                i = 'ROOT_QUERY' === e.id;
              if (!n) return i;
              var o = n.__typename,
                a = void 0 === o ? i && 'Query' : o;
              if ((Object(y.b)(a, 2), a === t)) return !0;
              var u = this.possibleTypesMap[t];
              return !!(a && u && u.indexOf(a) > -1);
            }),
              (e.prototype.parseIntrospectionResult = function (e) {
                var t = {};
                return (
                  e.__schema.types.forEach(function (e) {
                    ('UNION' !== e.kind && 'INTERFACE' !== e.kind) ||
                      (t[e.name] = e.possibleTypes.map(function (e) {
                        return e.name;
                      }));
                  }),
                  t
                );
              });
          })(),
          Object.prototype.hasOwnProperty),
        We = (function () {
          function e(e) {
            var t = this;
            void 0 === e && (e = Object.create(null)),
              (this.data = e),
              (this.depend = Be(
                function (e) {
                  return t.data[e];
                },
                {
                  disposable: !0,
                  makeCacheKey: function (e) {
                    return e;
                  },
                }
              ));
          }
          return (
            (e.prototype.toObject = function () {
              return this.data;
            }),
            (e.prototype.get = function (e) {
              return this.depend(e), this.data[e];
            }),
            (e.prototype.set = function (e, t) {
              t !== this.data[e] && ((this.data[e] = t), this.depend.dirty(e));
            }),
            (e.prototype.delete = function (e) {
              Ue.call(this.data, e) &&
                (delete this.data[e], this.depend.dirty(e));
            }),
            (e.prototype.clear = function () {
              this.replace(null);
            }),
            (e.prototype.replace = function (e) {
              var t = this;
              e
                ? (Object.keys(e).forEach(function (r) {
                    t.set(r, e[r]);
                  }),
                  Object.keys(this.data).forEach(function (r) {
                    Ue.call(e, r) || t.delete(r);
                  }))
                : Object.keys(this.data).forEach(function (e) {
                    t.delete(e);
                  });
            }),
            e
          );
        })();
      function Je(e) {
        return new We(e);
      }
      var Ge = (function () {
        function e(e) {
          var t = this,
            r = void 0 === e ? {} : e,
            n = r.cacheKeyRoot,
            i = void 0 === n ? new Te(b.e) : n,
            o = r.freezeResults,
            a = void 0 !== o && o,
            u = this.executeStoreQuery,
            s = this.executeSelectionSet,
            c = this.executeSubSelectedArray;
          (this.freezeResults = a),
            (this.executeStoreQuery = Be(
              function (e) {
                return u.call(t, e);
              },
              {
                makeCacheKey: function (e) {
                  var t = e.query,
                    r = e.rootValue,
                    n = e.contextValue,
                    o = e.variableValues,
                    a = e.fragmentMatcher;
                  if (n.store instanceof We)
                    return i.lookup(n.store, t, a, JSON.stringify(o), r.id);
                },
              }
            )),
            (this.executeSelectionSet = Be(
              function (e) {
                return s.call(t, e);
              },
              {
                makeCacheKey: function (e) {
                  var t = e.selectionSet,
                    r = e.rootValue,
                    n = e.execContext;
                  if (n.contextValue.store instanceof We)
                    return i.lookup(
                      n.contextValue.store,
                      t,
                      n.fragmentMatcher,
                      JSON.stringify(n.variableValues),
                      r.id
                    );
                },
              }
            )),
            (this.executeSubSelectedArray = Be(
              function (e) {
                return c.call(t, e);
              },
              {
                makeCacheKey: function (e) {
                  var t = e.field,
                    r = e.array,
                    n = e.execContext;
                  if (n.contextValue.store instanceof We)
                    return i.lookup(
                      n.contextValue.store,
                      t,
                      r,
                      JSON.stringify(n.variableValues)
                    );
                },
              }
            ));
        }
        return (
          (e.prototype.readQueryFromStore = function (e) {
            return this.diffQueryAgainstStore(
              Object(h.a)(Object(h.a)({}, e), { returnPartialData: !1 })
            ).result;
          }),
          (e.prototype.diffQueryAgainstStore = function (e) {
            var t = e.store,
              r = e.query,
              n = e.variables,
              i = e.previousResult,
              o = e.returnPartialData,
              a = void 0 === o || o,
              u = e.rootId,
              s = void 0 === u ? 'ROOT_QUERY' : u,
              c = e.fragmentMatcherFunction,
              l = e.config,
              f = Object(b.o)(r);
            n = Object(b.c)({}, Object(b.h)(f), n);
            var p = {
                store: t,
                dataIdFromObject: l && l.dataIdFromObject,
                cacheRedirects: (l && l.cacheRedirects) || {},
              },
              h = this.executeStoreQuery({
                query: r,
                rootValue: {
                  type: 'id',
                  id: s,
                  generated: !0,
                  typename: 'Query',
                },
                contextValue: p,
                variableValues: n,
                fragmentMatcher: c,
              }),
              d = h.missing && h.missing.length > 0;
            return (
              d &&
                !a &&
                h.missing.forEach(function (e) {
                  if (!e.tolerable) throw new y.a(8);
                }),
              i && Object(H.a)(i, h.result) && (h.result = i),
              { result: h.result, complete: !d }
            );
          }),
          (e.prototype.executeStoreQuery = function (e) {
            var t = e.query,
              r = e.rootValue,
              n = e.contextValue,
              i = e.variableValues,
              o = e.fragmentMatcher,
              a = void 0 === o ? Ze : o,
              u = Object(b.l)(t),
              s = Object(b.j)(t),
              c = {
                query: t,
                fragmentMap: Object(b.g)(s),
                contextValue: n,
                variableValues: i,
                fragmentMatcher: a,
              };
            return this.executeSelectionSet({
              selectionSet: u.selectionSet,
              rootValue: r,
              execContext: c,
            });
          }),
          (e.prototype.executeSelectionSet = function (e) {
            var t = this,
              r = e.selectionSet,
              n = e.rootValue,
              i = e.execContext,
              o = i.fragmentMap,
              a = i.contextValue,
              u = i.variableValues,
              s = { result: null },
              c = [],
              l = a.store.get(n.id),
              f =
                (l && l.__typename) ||
                ('ROOT_QUERY' === n.id && 'Query') ||
                void 0;
            function p(e) {
              var t;
              return (
                e.missing &&
                  ((s.missing = s.missing || []),
                  (t = s.missing).push.apply(t, e.missing)),
                e.result
              );
            }
            return (
              r.selections.forEach(function (e) {
                var r;
                if (Object(b.F)(e, u))
                  if (Object(b.t)(e)) {
                    var s = p(t.executeField(l, f, e, i));
                    'undefined' !== typeof s &&
                      c.push((((r = {})[Object(b.E)(e)] = s), r));
                  } else {
                    var d = void 0;
                    if (Object(b.v)(e)) d = e;
                    else if (!(d = o[e.name.value])) throw new y.a(9);
                    var v = d.typeCondition && d.typeCondition.name.value,
                      m = !v || i.fragmentMatcher(n, v, a);
                    if (m) {
                      var g = t.executeSelectionSet({
                        selectionSet: d.selectionSet,
                        rootValue: n,
                        execContext: i,
                      });
                      'heuristic' === m &&
                        g.missing &&
                        (g = Object(h.a)(Object(h.a)({}, g), {
                          missing: g.missing.map(function (e) {
                            return Object(h.a)(Object(h.a)({}, e), {
                              tolerable: !0,
                            });
                          }),
                        })),
                        c.push(p(g));
                    }
                  }
              }),
              (s.result = Object(b.B)(c)),
              this.freezeResults,
              s
            );
          }),
          (e.prototype.executeField = function (e, t, r, n) {
            var i = n.variableValues,
              o = n.contextValue,
              a = (function (e, t, r, n, i, o) {
                o.resultKey;
                var a = o.directives,
                  u = r;
                (n || a) && (u = Object(b.p)(u, n, a));
                var s = void 0;
                if (
                  e &&
                  'undefined' === typeof (s = e[u]) &&
                  i.cacheRedirects &&
                  'string' === typeof t
                ) {
                  var c = i.cacheRedirects[t];
                  if (c) {
                    var l = c[r];
                    l &&
                      (s = l(e, n, {
                        getCacheKey: function (e) {
                          var t = i.dataIdFromObject(e);
                          return (
                            t && Object(b.H)({ id: t, typename: e.__typename })
                          );
                        },
                      }));
                  }
                }
                if ('undefined' === typeof s)
                  return {
                    result: s,
                    missing: [{ object: e, fieldName: u, tolerable: !1 }],
                  };
                Object(b.w)(s) && (s = s.json);
                return { result: s };
              })(e, t, r.name.value, Object(b.b)(r, i), o, {
                resultKey: Object(b.E)(r),
                directives: Object(b.i)(r, i),
              });
            return Array.isArray(a.result)
              ? this.combineExecResults(
                  a,
                  this.executeSubSelectedArray({
                    field: r,
                    array: a.result,
                    execContext: n,
                  })
                )
              : r.selectionSet
              ? null == a.result
                ? a
                : this.combineExecResults(
                    a,
                    this.executeSelectionSet({
                      selectionSet: r.selectionSet,
                      rootValue: a.result,
                      execContext: n,
                    })
                  )
              : (Ye(r, a.result), this.freezeResults, a);
          }),
          (e.prototype.combineExecResults = function () {
            for (var e, t = [], r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            return (
              t.forEach(function (t) {
                t.missing && (e = e || []).push.apply(e, t.missing);
              }),
              { result: t.pop().result, missing: e }
            );
          }),
          (e.prototype.executeSubSelectedArray = function (e) {
            var t,
              r = this,
              n = e.field,
              i = e.array,
              o = e.execContext;
            function a(e) {
              return (
                e.missing && (t = t || []).push.apply(t, e.missing), e.result
              );
            }
            return (
              (i = i.map(function (e) {
                return null === e
                  ? null
                  : Array.isArray(e)
                  ? a(
                      r.executeSubSelectedArray({
                        field: n,
                        array: e,
                        execContext: o,
                      })
                    )
                  : n.selectionSet
                  ? a(
                      r.executeSelectionSet({
                        selectionSet: n.selectionSet,
                        rootValue: e,
                        execContext: o,
                      })
                    )
                  : (Ye(n, e), e);
              })),
              this.freezeResults,
              { result: i, missing: t }
            );
          }),
          e
        );
      })();
      function Ye(e, t) {
        if (!e.selectionSet && Object(b.u)(t)) throw new y.a(10);
      }
      function Ze() {
        return !0;
      }
      var Xe = (function () {
        function e(e) {
          void 0 === e && (e = Object.create(null)), (this.data = e);
        }
        return (
          (e.prototype.toObject = function () {
            return this.data;
          }),
          (e.prototype.get = function (e) {
            return this.data[e];
          }),
          (e.prototype.set = function (e, t) {
            this.data[e] = t;
          }),
          (e.prototype.delete = function (e) {
            this.data[e] = void 0;
          }),
          (e.prototype.clear = function () {
            this.data = Object.create(null);
          }),
          (e.prototype.replace = function (e) {
            this.data = e || Object.create(null);
          }),
          e
        );
      })();
      var $e = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.type = 'WriteError'), t;
        }
        return Object(h.c)(t, e), t;
      })(Error);
      var et = (function () {
        function e() {}
        return (
          (e.prototype.writeQueryToStore = function (e) {
            var t = e.query,
              r = e.result,
              n = e.store,
              i = void 0 === n ? Je() : n,
              o = e.variables,
              a = e.dataIdFromObject,
              u = e.fragmentMatcherFunction;
            return this.writeResultToStore({
              dataId: 'ROOT_QUERY',
              result: r,
              document: t,
              store: i,
              variables: o,
              dataIdFromObject: a,
              fragmentMatcherFunction: u,
            });
          }),
          (e.prototype.writeResultToStore = function (e) {
            var t = e.dataId,
              r = e.result,
              n = e.document,
              i = e.store,
              o = void 0 === i ? Je() : i,
              a = e.variables,
              u = e.dataIdFromObject,
              s = e.fragmentMatcherFunction,
              c = Object(b.m)(n);
            try {
              return this.writeSelectionSetToStore({
                result: r,
                dataId: t,
                selectionSet: c.selectionSet,
                context: {
                  store: o,
                  processedData: {},
                  variables: Object(b.c)({}, Object(b.h)(c), a),
                  dataIdFromObject: u,
                  fragmentMap: Object(b.g)(Object(b.j)(n)),
                  fragmentMatcherFunction: s,
                },
              });
            } catch (l) {
              throw (function (e, t) {
                var r = new $e(
                  'Error writing result to store for query:\n ' +
                    JSON.stringify(t)
                );
                return (r.message += '\n' + e.message), (r.stack = e.stack), r;
              })(l, n);
            }
          }),
          (e.prototype.writeSelectionSetToStore = function (e) {
            var t = this,
              r = e.result,
              n = e.dataId,
              i = e.selectionSet,
              o = e.context,
              a = o.variables,
              u = o.store,
              s = o.fragmentMap;
            return (
              i.selections.forEach(function (e) {
                var i;
                if (Object(b.F)(e, a))
                  if (Object(b.t)(e)) {
                    var u = Object(b.E)(e),
                      c = r[u];
                    if ('undefined' !== typeof c)
                      t.writeFieldToStore({
                        dataId: n,
                        value: c,
                        field: e,
                        context: o,
                      });
                    else {
                      var l = !1,
                        f = !1;
                      e.directives &&
                        e.directives.length &&
                        ((l = e.directives.some(function (e) {
                          return e.name && 'defer' === e.name.value;
                        })),
                        (f = e.directives.some(function (e) {
                          return e.name && 'client' === e.name.value;
                        }))),
                        !l && !f && o.fragmentMatcherFunction;
                    }
                  } else {
                    var p = void 0;
                    Object(b.v)(e)
                      ? (p = e)
                      : ((p = (s || {})[e.name.value]), Object(y.b)(p, 3));
                    var h = !0;
                    if (o.fragmentMatcherFunction && p.typeCondition) {
                      var d = n || 'self',
                        v = Object(b.H)({ id: d, typename: void 0 }),
                        m = {
                          store: new Xe(((i = {}), (i[d] = r), i)),
                          cacheRedirects: {},
                        },
                        g = o.fragmentMatcherFunction(
                          v,
                          p.typeCondition.name.value,
                          m
                        );
                      Object(b.x)(), (h = !!g);
                    }
                    h &&
                      t.writeSelectionSetToStore({
                        result: r,
                        selectionSet: p.selectionSet,
                        dataId: n,
                        context: o,
                      });
                  }
              }),
              u
            );
          }),
          (e.prototype.writeFieldToStore = function (e) {
            var t,
              r,
              n,
              i = e.field,
              o = e.value,
              a = e.dataId,
              u = e.context,
              s = u.variables,
              c = u.dataIdFromObject,
              l = u.store,
              f = Object(b.G)(i, s);
            if (i.selectionSet && null !== o)
              if (Array.isArray(o)) {
                var p = a + '.' + f;
                r = this.processArrayValue(o, p, i.selectionSet, u);
              } else {
                var d = a + '.' + f,
                  v = !0;
                if ((tt(d) || (d = '$' + d), c)) {
                  var m = c(o);
                  Object(y.b)(!m || !tt(m), 4),
                    (m || ('number' === typeof m && 0 === m)) &&
                      ((d = m), (v = !1));
                }
                rt(d, i, u.processedData) ||
                  this.writeSelectionSetToStore({
                    dataId: d,
                    result: o,
                    selectionSet: i.selectionSet,
                    context: u,
                  });
                var g = o.__typename;
                r = Object(b.H)({ id: d, typename: g }, v);
                var O = (n = l.get(a)) && n[f];
                if (O !== r && Object(b.u)(O)) {
                  var w = void 0 !== O.typename,
                    j = void 0 !== g,
                    S = w && j && O.typename !== g;
                  Object(y.b)(!v || O.generated || S, 5),
                    Object(y.b)(!w || j, 6),
                    O.generated &&
                      (S
                        ? v || l.delete(O.id)
                        : (function e(t, r, n) {
                            if (t === r) return !1;
                            var i = n.get(t),
                              o = n.get(r),
                              a = !1;
                            Object.keys(i).forEach(function (t) {
                              var r = i[t],
                                u = o[t];
                              Object(b.u)(r) &&
                                tt(r.id) &&
                                Object(b.u)(u) &&
                                !Object(H.a)(r, u) &&
                                e(r.id, u.id, n) &&
                                (a = !0);
                            }),
                              n.delete(t);
                            var u = Object(h.a)(Object(h.a)({}, i), o);
                            if (Object(H.a)(u, o)) return a;
                            return n.set(r, u), !0;
                          })(O.id, r.id, l));
                }
              }
            else
              r =
                null != o && 'object' === typeof o
                  ? { type: 'json', json: o }
                  : o;
            ((n = l.get(a)) && Object(H.a)(r, n[f])) ||
              l.set(a, Object(h.a)(Object(h.a)({}, n), (((t = {})[f] = r), t)));
          }),
          (e.prototype.processArrayValue = function (e, t, r, n) {
            var i = this;
            return e.map(function (e, o) {
              if (null === e) return null;
              var a = t + '.' + o;
              if (Array.isArray(e)) return i.processArrayValue(e, a, r, n);
              var u = !0;
              if (n.dataIdFromObject) {
                var s = n.dataIdFromObject(e);
                s && ((a = s), (u = !1));
              }
              return (
                rt(a, r, n.processedData) ||
                  i.writeSelectionSetToStore({
                    dataId: a,
                    result: e,
                    selectionSet: r,
                    context: n,
                  }),
                Object(b.H)({ id: a, typename: e.__typename }, u)
              );
            });
          }),
          e
        );
      })();
      function tt(e) {
        return '$' === e[0];
      }
      function rt(e, t, r) {
        if (!r) return !1;
        if (r[e]) {
          if (r[e].indexOf(t) >= 0) return !0;
          r[e].push(t);
        } else r[e] = [t];
        return !1;
      }
      var nt = {
        fragmentMatcher: new Ke(),
        dataIdFromObject: function (e) {
          if (e.__typename) {
            if (void 0 !== e.id) return e.__typename + ':' + e.id;
            if (void 0 !== e._id) return e.__typename + ':' + e._id;
          }
          return null;
        },
        addTypename: !0,
        resultCaching: !0,
        freezeResults: !1,
      };
      var it = Object.prototype.hasOwnProperty,
        ot = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, Object.create(null)) || this;
            return (i.optimisticId = t), (i.parent = r), (i.transaction = n), i;
          }
          return (
            Object(h.c)(t, e),
            (t.prototype.toObject = function () {
              return Object(h.a)(
                Object(h.a)({}, this.parent.toObject()),
                this.data
              );
            }),
            (t.prototype.get = function (e) {
              return it.call(this.data, e) ? this.data[e] : this.parent.get(e);
            }),
            t
          );
        })(Xe),
        at = (function (e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            (r.watches = new Set()),
              (r.typenameDocumentCache = new Map()),
              (r.cacheKeyRoot = new Te(b.e)),
              (r.silenceBroadcast = !1),
              (r.config = Object(h.a)(Object(h.a)({}, nt), t)),
              r.config.customResolvers &&
                (r.config.cacheRedirects = r.config.customResolvers),
              r.config.cacheResolvers &&
                (r.config.cacheRedirects = r.config.cacheResolvers),
              (r.addTypename = !!r.config.addTypename),
              (r.data = r.config.resultCaching ? new We() : new Xe()),
              (r.optimisticData = r.data),
              (r.storeWriter = new et()),
              (r.storeReader = new Ge({
                cacheKeyRoot: r.cacheKeyRoot,
                freezeResults: t.freezeResults,
              }));
            var n = r,
              i = n.maybeBroadcastWatch;
            return (
              (r.maybeBroadcastWatch = Be(
                function (e) {
                  return i.call(r, e);
                },
                {
                  makeCacheKey: function (e) {
                    if (!e.optimistic && !e.previousResult)
                      return n.data instanceof We
                        ? n.cacheKeyRoot.lookup(
                            e.query,
                            JSON.stringify(e.variables)
                          )
                        : void 0;
                  },
                }
              )),
              r
            );
          }
          return (
            Object(h.c)(t, e),
            (t.prototype.restore = function (e) {
              return e && this.data.replace(e), this;
            }),
            (t.prototype.extract = function (e) {
              return (
                void 0 === e && (e = !1),
                (e ? this.optimisticData : this.data).toObject()
              );
            }),
            (t.prototype.read = function (e) {
              if (
                'string' === typeof e.rootId &&
                'undefined' === typeof this.data.get(e.rootId)
              )
                return null;
              var t = this.config.fragmentMatcher,
                r = t && t.match;
              return (
                this.storeReader.readQueryFromStore({
                  store: e.optimistic ? this.optimisticData : this.data,
                  query: this.transformDocument(e.query),
                  variables: e.variables,
                  rootId: e.rootId,
                  fragmentMatcherFunction: r,
                  previousResult: e.previousResult,
                  config: this.config,
                }) || null
              );
            }),
            (t.prototype.write = function (e) {
              var t = this.config.fragmentMatcher,
                r = t && t.match;
              this.storeWriter.writeResultToStore({
                dataId: e.dataId,
                result: e.result,
                variables: e.variables,
                document: this.transformDocument(e.query),
                store: this.data,
                dataIdFromObject: this.config.dataIdFromObject,
                fragmentMatcherFunction: r,
              }),
                this.broadcastWatches();
            }),
            (t.prototype.diff = function (e) {
              var t = this.config.fragmentMatcher,
                r = t && t.match;
              return this.storeReader.diffQueryAgainstStore({
                store: e.optimistic ? this.optimisticData : this.data,
                query: this.transformDocument(e.query),
                variables: e.variables,
                returnPartialData: e.returnPartialData,
                previousResult: e.previousResult,
                fragmentMatcherFunction: r,
                config: this.config,
              });
            }),
            (t.prototype.watch = function (e) {
              var t = this;
              return (
                this.watches.add(e),
                function () {
                  t.watches.delete(e);
                }
              );
            }),
            (t.prototype.evict = function (e) {
              throw new y.a(7);
            }),
            (t.prototype.reset = function () {
              return (
                this.data.clear(), this.broadcastWatches(), Promise.resolve()
              );
            }),
            (t.prototype.removeOptimistic = function (e) {
              for (
                var t = [], r = 0, n = this.optimisticData;
                n instanceof ot;

              )
                n.optimisticId === e ? ++r : t.push(n), (n = n.parent);
              if (r > 0) {
                for (this.optimisticData = n; t.length > 0; ) {
                  var i = t.pop();
                  this.performTransaction(i.transaction, i.optimisticId);
                }
                this.broadcastWatches();
              }
            }),
            (t.prototype.performTransaction = function (e, t) {
              var r = this.data,
                n = this.silenceBroadcast;
              (this.silenceBroadcast = !0),
                'string' === typeof t &&
                  (this.data = this.optimisticData = new ot(
                    t,
                    this.optimisticData,
                    e
                  ));
              try {
                e(this);
              } finally {
                (this.silenceBroadcast = n), (this.data = r);
              }
              this.broadcastWatches();
            }),
            (t.prototype.recordOptimisticTransaction = function (e, t) {
              return this.performTransaction(e, t);
            }),
            (t.prototype.transformDocument = function (e) {
              if (this.addTypename) {
                var t = this.typenameDocumentCache.get(e);
                return (
                  t ||
                    ((t = Object(b.a)(e)),
                    this.typenameDocumentCache.set(e, t),
                    this.typenameDocumentCache.set(t, t)),
                  t
                );
              }
              return e;
            }),
            (t.prototype.broadcastWatches = function () {
              var e = this;
              this.silenceBroadcast ||
                this.watches.forEach(function (t) {
                  return e.maybeBroadcastWatch(t);
                });
            }),
            (t.prototype.maybeBroadcastWatch = function (e) {
              e.callback(
                this.diff({
                  query: e.query,
                  variables: e.variables,
                  previousResult: e.previousResult && e.previousResult(),
                  optimistic: e.optimistic,
                })
              );
            }),
            t
          );
        })(he),
        ut = c.a.createElement;
      function st(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ct(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? st(Object(r), !0).forEach(function (t) {
                Object(o.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : st(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var lt = null;
      function ft(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.ssr,
          o = void 0 === n || n,
          s = function (t) {
            var r = t.apolloClient,
              n = t.apolloState,
              i = Object(u.a)(t, ['apolloClient', 'apolloState']),
              o = r || pt(n);
            return ut(p.a, { client: o }, ut(e, i));
          };
        return (
          (o || e.getInitialProps) &&
            (s.getInitialProps = (function () {
              var t = Object(a.a)(
                i.a.mark(function t(n) {
                  var a, u, s, c, l, p;
                  return i.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((a = n.AppTree),
                              (u = n.apolloClient = pt()),
                              (s = {}),
                              !e.getInitialProps)
                            ) {
                              t.next = 7;
                              break;
                            }
                            return (t.next = 6), e.getInitialProps(n);
                          case 6:
                            s = t.sent;
                          case 7:
                            t.next = 24;
                            break;
                          case 10:
                            if (!o) {
                              t.next = 24;
                              break;
                            }
                            return (
                              (t.prev = 11),
                              (t.next = 14),
                              Promise.all([r.e(0), r.e(4), r.e(44)]).then(
                                r.bind(null, '83xU')
                              )
                            );
                          case 14:
                            return (
                              (c = t.sent),
                              (l = c.getDataFromTree),
                              (t.next = 18),
                              l(
                                ut(a, {
                                  pageProps: ct(
                                    ct({}, s),
                                    {},
                                    { apolloClient: u }
                                  ),
                                })
                              )
                            );
                          case 18:
                            t.next = 23;
                            break;
                          case 20:
                            (t.prev = 20),
                              (t.t0 = t.catch(11)),
                              console.error(
                                'Error while running `getDataFromTree`',
                                t.t0
                              );
                          case 23:
                            f.a.rewind();
                          case 24:
                            return (
                              (p = u.cache.extract()),
                              t.abrupt(
                                'return',
                                ct(ct({}, s), {}, { apolloState: p })
                              )
                            );
                          case 26:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[11, 20]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })()),
          s
        );
      }
      function pt(e) {
        return (
          lt ||
            (lt = (function () {
              var e = new z({
                  uri:
                    'http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/graphql',
                }),
                t = new Q(function (e, t) {
                  var r = '';
                  return (
                    (r = localStorage.getItem('access_token')),
                    e.setContext({
                      headers: { authorization: r ? 'Bearer '.concat(r) : '' },
                    }),
                    t(e)
                  );
                });
              return new se({ link: t.concat(e), cache: new at() });
            })(e)),
          lt
        );
      }
    },
    ddIo: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return s;
      });
      var n = r('q1tI'),
        i = r.n(n),
        o = r('8Kt/'),
        a = r.n(o),
        u = i.a.createElement,
        s = function (e) {
          var t = e.title,
            r = e.description,
            n = e.canonical,
            i = e.css,
            o = e.js,
            s = e.image;
          return u(
            a.a,
            null,
            u('title', null, t),
            u('meta', { name: 'description', content: r }),
            u('meta', {
              name: 'viewport',
              content: 'width=device-width,minimum-scale=1,initial-scale=1',
            }),
            u('meta', { property: 'og:type', content: 'website' }),
            u('meta', { name: 'og:title', property: 'og:title', content: t }),
            u('meta', {
              name: 'og:description',
              property: 'og:description',
              content: r,
            }),
            u('meta', { property: 'og:site_name', content: 'Proper Noun' }),
            u('meta', { property: 'og:url', content: ''.concat(n) }),
            u('meta', { name: 'twitter:card', content: 'summary' }),
            u('meta', { name: 'twitter:title', content: t }),
            u('meta', { name: 'twitter:description', content: r }),
            u('meta', { name: 'twitter:site', content: '@propernounco' }),
            u('meta', { name: 'twitter:creator', content: '@propernounco' }),
            i && u('link', { rel: 'stylesheet', href: ''.concat(i) }),
            u(
              'meta',
              s
                ? { property: 'og:image', content: ''.concat(s) }
                : {
                    property: 'og:image',
                    content:
                      'https://www.propernoun.co/static/images/proper-noun-social.png',
                  }
            ),
            s && u('meta', { name: 'twitter:image', content: ''.concat(s) }),
            n && u('link', { rel: 'canonical', href: ''.concat(n) }),
            o && u('script', { type: 'text/javascript', src: ''.concat(o) })
          );
        };
    },
    gXaZ: function (e, t, r) {
      'use strict';
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function o(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.Observable = void 0);
      var a = function () {
          return 'function' === typeof Symbol;
        },
        u = function (e) {
          return a() && Boolean(Symbol[e]);
        },
        s = function (e) {
          return u(e) ? Symbol[e] : '@@' + e;
        };
      a() && !u('observable') && (Symbol.observable = Symbol('observable'));
      var c = s('iterator'),
        l = s('observable'),
        f = s('species');
      function p(e, t) {
        var r = e[t];
        if (null != r) {
          if ('function' !== typeof r)
            throw new TypeError(r + ' is not a function');
          return r;
        }
      }
      function h(e) {
        var t = e.constructor;
        return (
          void 0 !== t && null === (t = t[f]) && (t = void 0),
          void 0 !== t ? t : S
        );
      }
      function d(e) {
        return e instanceof S;
      }
      function v(e) {
        v.log
          ? v.log(e)
          : setTimeout(function () {
              throw e;
            });
      }
      function y(e) {
        Promise.resolve().then(function () {
          try {
            e();
          } catch (t) {
            v(t);
          }
        });
      }
      function b(e) {
        var t = e._cleanup;
        if (void 0 !== t && ((e._cleanup = void 0), t))
          try {
            if ('function' === typeof t) t();
            else {
              var r = p(t, 'unsubscribe');
              r && r.call(t);
            }
          } catch (n) {
            v(n);
          }
      }
      function m(e) {
        (e._observer = void 0), (e._queue = void 0), (e._state = 'closed');
      }
      function g(e, t, r) {
        e._state = 'running';
        var n = e._observer;
        try {
          var i = p(n, t);
          switch (t) {
            case 'next':
              i && i.call(n, r);
              break;
            case 'error':
              if ((m(e), !i)) throw r;
              i.call(n, r);
              break;
            case 'complete':
              m(e), i && i.call(n);
          }
        } catch (o) {
          v(o);
        }
        'closed' === e._state
          ? b(e)
          : 'running' === e._state && (e._state = 'ready');
      }
      function O(e, t, r) {
        if ('closed' !== e._state) {
          if ('buffering' !== e._state)
            return 'ready' !== e._state
              ? ((e._state = 'buffering'),
                (e._queue = [{ type: t, value: r }]),
                void y(function () {
                  return (function (e) {
                    var t = e._queue;
                    if (t) {
                      (e._queue = void 0), (e._state = 'ready');
                      for (
                        var r = 0;
                        r < t.length &&
                        (g(e, t[r].type, t[r].value), 'closed' !== e._state);
                        ++r
                      );
                    }
                  })(e);
                }))
              : void g(e, t, r);
          e._queue.push({ type: t, value: r });
        }
      }
      var w = (function () {
          function e(t, r) {
            n(this, e),
              (this._cleanup = void 0),
              (this._observer = t),
              (this._queue = void 0),
              (this._state = 'initializing');
            var i = new j(this);
            try {
              this._cleanup = r.call(void 0, i);
            } catch (o) {
              i.error(o);
            }
            'initializing' === this._state && (this._state = 'ready');
          }
          return (
            o(e, [
              {
                key: 'unsubscribe',
                value: function () {
                  'closed' !== this._state && (m(this), b(this));
                },
              },
              {
                key: 'closed',
                get: function () {
                  return 'closed' === this._state;
                },
              },
            ]),
            e
          );
        })(),
        j = (function () {
          function e(t) {
            n(this, e), (this._subscription = t);
          }
          return (
            o(e, [
              {
                key: 'next',
                value: function (e) {
                  O(this._subscription, 'next', e);
                },
              },
              {
                key: 'error',
                value: function (e) {
                  O(this._subscription, 'error', e);
                },
              },
              {
                key: 'complete',
                value: function () {
                  O(this._subscription, 'complete');
                },
              },
              {
                key: 'closed',
                get: function () {
                  return 'closed' === this._subscription._state;
                },
              },
            ]),
            e
          );
        })(),
        S = (function () {
          function e(t) {
            if ((n(this, e), !(this instanceof e)))
              throw new TypeError('Observable cannot be called as a function');
            if ('function' !== typeof t)
              throw new TypeError('Observable initializer must be a function');
            this._subscriber = t;
          }
          return (
            o(
              e,
              [
                {
                  key: 'subscribe',
                  value: function (e) {
                    return (
                      ('object' === typeof e && null !== e) ||
                        (e = {
                          next: e,
                          error: arguments[1],
                          complete: arguments[2],
                        }),
                      new w(e, this._subscriber)
                    );
                  },
                },
                {
                  key: 'forEach',
                  value: function (e) {
                    var t = this;
                    return new Promise(function (r, n) {
                      if ('function' === typeof e)
                        var i = t.subscribe({
                          next: function (t) {
                            try {
                              e(t, o);
                            } catch (r) {
                              n(r), i.unsubscribe();
                            }
                          },
                          error: n,
                          complete: r,
                        });
                      else n(new TypeError(e + ' is not a function'));
                      function o() {
                        i.unsubscribe(), r();
                      }
                    });
                  },
                },
                {
                  key: 'map',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    return new (h(this))(function (r) {
                      return t.subscribe({
                        next: function (t) {
                          try {
                            t = e(t);
                          } catch (n) {
                            return r.error(n);
                          }
                          r.next(t);
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          r.complete();
                        },
                      });
                    });
                  },
                },
                {
                  key: 'filter',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    return new (h(this))(function (r) {
                      return t.subscribe({
                        next: function (t) {
                          try {
                            if (!e(t)) return;
                          } catch (n) {
                            return r.error(n);
                          }
                          r.next(t);
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          r.complete();
                        },
                      });
                    });
                  },
                },
                {
                  key: 'reduce',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    var r = h(this),
                      n = arguments.length > 1,
                      i = !1,
                      o = arguments[1],
                      a = o;
                    return new r(function (r) {
                      return t.subscribe({
                        next: function (t) {
                          var o = !i;
                          if (((i = !0), !o || n))
                            try {
                              a = e(a, t);
                            } catch (u) {
                              return r.error(u);
                            }
                          else a = t;
                        },
                        error: function (e) {
                          r.error(e);
                        },
                        complete: function () {
                          if (!i && !n)
                            return r.error(
                              new TypeError('Cannot reduce an empty sequence')
                            );
                          r.next(a), r.complete();
                        },
                      });
                    });
                  },
                },
                {
                  key: 'concat',
                  value: function () {
                    for (
                      var e = this,
                        t = arguments.length,
                        r = new Array(t),
                        n = 0;
                      n < t;
                      n++
                    )
                      r[n] = arguments[n];
                    var i = h(this);
                    return new i(function (t) {
                      var n,
                        o = 0;
                      return (
                        (function e(a) {
                          n = a.subscribe({
                            next: function (e) {
                              t.next(e);
                            },
                            error: function (e) {
                              t.error(e);
                            },
                            complete: function () {
                              o === r.length
                                ? ((n = void 0), t.complete())
                                : e(i.from(r[o++]));
                            },
                          });
                        })(e),
                        function () {
                          n && (n.unsubscribe(), (n = void 0));
                        }
                      );
                    });
                  },
                },
                {
                  key: 'flatMap',
                  value: function (e) {
                    var t = this;
                    if ('function' !== typeof e)
                      throw new TypeError(e + ' is not a function');
                    var r = h(this);
                    return new r(function (n) {
                      var i = [],
                        o = t.subscribe({
                          next: function (t) {
                            if (e)
                              try {
                                t = e(t);
                              } catch (u) {
                                return n.error(u);
                              }
                            var o = r.from(t).subscribe({
                              next: function (e) {
                                n.next(e);
                              },
                              error: function (e) {
                                n.error(e);
                              },
                              complete: function () {
                                var e = i.indexOf(o);
                                e >= 0 && i.splice(e, 1), a();
                              },
                            });
                            i.push(o);
                          },
                          error: function (e) {
                            n.error(e);
                          },
                          complete: function () {
                            a();
                          },
                        });
                      function a() {
                        o.closed && 0 === i.length && n.complete();
                      }
                      return function () {
                        i.forEach(function (e) {
                          return e.unsubscribe();
                        }),
                          o.unsubscribe();
                      };
                    });
                  },
                },
                {
                  key: l,
                  value: function () {
                    return this;
                  },
                },
              ],
              [
                {
                  key: 'from',
                  value: function (t) {
                    var r = 'function' === typeof this ? this : e;
                    if (null == t) throw new TypeError(t + ' is not an object');
                    var n = p(t, l);
                    if (n) {
                      var i = n.call(t);
                      if (Object(i) !== i)
                        throw new TypeError(i + ' is not an object');
                      return d(i) && i.constructor === r
                        ? i
                        : new r(function (e) {
                            return i.subscribe(e);
                          });
                    }
                    if (u('iterator') && (n = p(t, c)))
                      return new r(function (e) {
                        y(function () {
                          if (!e.closed) {
                            var r = !0,
                              i = !1,
                              o = void 0;
                            try {
                              for (
                                var a, u = n.call(t)[Symbol.iterator]();
                                !(r = (a = u.next()).done);
                                r = !0
                              ) {
                                var s = a.value;
                                if ((e.next(s), e.closed)) return;
                              }
                            } catch (c) {
                              (i = !0), (o = c);
                            } finally {
                              try {
                                r || null == u.return || u.return();
                              } finally {
                                if (i) throw o;
                              }
                            }
                            e.complete();
                          }
                        });
                      });
                    if (Array.isArray(t))
                      return new r(function (e) {
                        y(function () {
                          if (!e.closed) {
                            for (var r = 0; r < t.length; ++r)
                              if ((e.next(t[r]), e.closed)) return;
                            e.complete();
                          }
                        });
                      });
                    throw new TypeError(t + ' is not observable');
                  },
                },
                {
                  key: 'of',
                  value: function () {
                    for (
                      var t = arguments.length, r = new Array(t), n = 0;
                      n < t;
                      n++
                    )
                      r[n] = arguments[n];
                    var i = 'function' === typeof this ? this : e;
                    return new i(function (e) {
                      y(function () {
                        if (!e.closed) {
                          for (var t = 0; t < r.length; ++t)
                            if ((e.next(r[t]), e.closed)) return;
                          e.complete();
                        }
                      });
                    });
                  },
                },
                {
                  key: f,
                  get: function () {
                    return this;
                  },
                },
              ]
            ),
            e
          );
        })();
      (t.Observable = S),
        a() &&
          Object.defineProperty(S, Symbol('extensions'), {
            value: { symbol: l, hostReportError: v },
            configurable: !0,
          });
    },
    'hE+J': function (e, t, r) {
      'use strict';
      (function (e, n) {
        var i,
          o = r('KrFp');
        i =
          'undefined' !== typeof self
            ? self
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof e
            ? e
            : n;
        var a = Object(o.a)(i);
        t.a = a;
      }.call(this, r('yLpj'), r('3UD+')(e)));
    },
    'hhN/': function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return u;
      });
      var n = Object.prototype,
        i = n.toString,
        o = n.hasOwnProperty,
        a = new Map();
      function u(e, t) {
        try {
          return (function e(t, r) {
            if (t === r) return !0;
            var n = i.call(t),
              a = i.call(r);
            if (n !== a) return !1;
            switch (n) {
              case '[object Array]':
                if (t.length !== r.length) return !1;
              case '[object Object]':
                if (s(t, r)) return !0;
                var u = Object.keys(t),
                  c = Object.keys(r),
                  l = u.length;
                if (l !== c.length) return !1;
                for (var f = 0; f < l; ++f) if (!o.call(r, u[f])) return !1;
                for (f = 0; f < l; ++f) {
                  var p = u[f];
                  if (!e(t[p], r[p])) return !1;
                }
                return !0;
              case '[object Error]':
                return t.name === r.name && t.message === r.message;
              case '[object Number]':
                if (t !== t) return r !== r;
              case '[object Boolean]':
              case '[object Date]':
                return +t === +r;
              case '[object RegExp]':
              case '[object String]':
                return t == '' + r;
              case '[object Map]':
              case '[object Set]':
                if (t.size !== r.size) return !1;
                if (s(t, r)) return !0;
                for (var h = t.entries(), d = '[object Map]' === n; ; ) {
                  var v = h.next();
                  if (v.done) break;
                  var y = v.value,
                    b = y[0],
                    m = y[1];
                  if (!r.has(b)) return !1;
                  if (d && !e(m, r.get(b))) return !1;
                }
                return !0;
            }
            return !1;
          })(e, t);
        } finally {
          a.clear();
        }
      }
      function s(e, t) {
        var r = a.get(e);
        if (r) {
          if (r.has(t)) return !0;
        } else a.set(e, (r = new Set()));
        return r.add(t), !1;
      }
    },
    jVoT: function (e, t, r) {
      e.exports = r('gXaZ').Observable;
    },
    kG2m: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    lqOT: function (e, t, r) {
      'use strict';
      r.d(t, 'a', function () {
        return c;
      }),
        r.d(t, 'b', function () {
          return s;
        }),
        r.d(t, 'c', function () {
          return u;
        }),
        r.d(t, 'd', function () {
          return f;
        }),
        r.d(t, 'e', function () {
          return p;
        });
      var n,
        i = r('q1tI'),
        o = r.n(i),
        a = r('qVdT');
      function u() {
        return n || (n = o.a.createContext({})), n;
      }
      var s,
        c = function (e) {
          var t = e.client,
            r = e.children,
            n = u();
          return o.a.createElement(n.Consumer, null, function (e) {
            return (
              void 0 === e && (e = {}),
              t && e.client !== t && (e = Object.assign({}, e, { client: t })),
              Object(a.b)(e.client, 5),
              o.a.createElement(n.Provider, { value: e }, r)
            );
          });
        };
      !(function (e) {
        (e[(e.Query = 0)] = 'Query'),
          (e[(e.Mutation = 1)] = 'Mutation'),
          (e[(e.Subscription = 2)] = 'Subscription');
      })(s || (s = {}));
      var l = new Map();
      function f(e) {
        var t;
        switch (e) {
          case s.Query:
            t = 'Query';
            break;
          case s.Mutation:
            t = 'Mutation';
            break;
          case s.Subscription:
            t = 'Subscription';
        }
        return t;
      }
      function p(e) {
        var t,
          r,
          n = l.get(e);
        if (n) return n;
        Object(a.b)(!!e && !!e.kind, 1);
        var i = e.definitions.filter(function (e) {
            return 'FragmentDefinition' === e.kind;
          }),
          o = e.definitions.filter(function (e) {
            return 'OperationDefinition' === e.kind && 'query' === e.operation;
          }),
          u = e.definitions.filter(function (e) {
            return (
              'OperationDefinition' === e.kind && 'mutation' === e.operation
            );
          }),
          c = e.definitions.filter(function (e) {
            return (
              'OperationDefinition' === e.kind && 'subscription' === e.operation
            );
          });
        Object(a.b)(!i.length || o.length || u.length || c.length, 2),
          Object(a.b)(o.length + u.length + c.length <= 1, 3),
          (r = o.length ? s.Query : s.Mutation),
          o.length || u.length || (r = s.Subscription);
        var f = o.length ? o : u.length ? u : c;
        Object(a.b)(1 === f.length, 4);
        var p = f[0];
        t = p.variableDefinitions || [];
        var h = {
          name: p.name && 'Name' === p.name.kind ? p.name.value : 'data',
          type: r,
          variables: t,
        };
        return l.set(e, h), h;
      }
    },
    lwAK: function (e, t, r) {
      'use strict';
      var n;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var i = ((n = r('q1tI')) && n.__esModule
        ? n
        : { default: n }
      ).default.createContext({});
      t.AmpStateContext = i;
    },
    mPvQ: function (e, t, r) {
      var n = r('5fIB'),
        i = r('rlHP'),
        o = r('KckH'),
        a = r('kG2m');
      e.exports = function (e) {
        return n(e) || i(e) || o(e) || a();
      };
    },
    mrSG: function (e, t, r) {
      'use strict';
      r.d(t, 'c', function () {
        return i;
      }),
        r.d(t, 'a', function () {
          return o;
        }),
        r.d(t, 'b', function () {
          return a;
        }),
        r.d(t, 'd', function () {
          return u;
        }),
        r.d(t, 'e', function () {
          return s;
        });
      var n = function (e, t) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
          })(e, t);
      };
      function i(e, t) {
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
              for (var i in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e;
          }).apply(this, arguments);
      };
      function a(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function a(e) {
            try {
              s(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            try {
              s(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, u);
          }
          s((n = n.apply(e, t || [])).next());
        });
      }
      function u(e, t) {
        var r,
          n,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: u(0), throw: u(1), return: u(2) }),
          'function' === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(o) {
          return function (u) {
            return (function (o) {
              if (r) throw new TypeError('Generator is already executing.');
              for (; a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & o[0]
                          ? n.return
                          : o[0]
                          ? n.throw || ((i = n.return) && i.call(n), 0)
                          : n.next) &&
                      !(i = i.call(n, o[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (n = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = t.call(e, a);
                } catch (u) {
                  (o = [6, u]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, u]);
          };
        }
      }
      function s() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], a = 0, u = o.length; a < u; a++, i++)
            n[i] = o[a];
        return n;
      }
    },
    o0o1: function (e, t, r) {
      e.exports = r('ls82');
    },
    qVdT: function (e, t, r) {
      'use strict';
      (function (e) {
        r.d(t, 'a', function () {
          return a;
        }),
          r.d(t, 'b', function () {
            return u;
          });
        var n = r('mrSG'),
          i = Object.setPrototypeOf,
          o =
            void 0 === i
              ? function (e, t) {
                  return (e.__proto__ = t), e;
                }
              : i,
          a = (function (e) {
            function t(r) {
              void 0 === r && (r = 'Invariant Violation');
              var n =
                e.call(
                  this,
                  'number' === typeof r
                    ? 'Invariant Violation: ' +
                        r +
                        ' (see https://github.com/apollographql/invariant-packages)'
                    : r
                ) || this;
              return (
                (n.framesToPop = 1),
                (n.name = 'Invariant Violation'),
                o(n, t.prototype),
                n
              );
            }
            return Object(n.c)(t, e), t;
          })(Error);
        function u(e, t) {
          if (!e) throw new a(t);
        }
        function s(e) {
          return function () {
            return console[e].apply(console, arguments);
          };
        }
        !(function (e) {
          (e.warn = s('warn')), (e.error = s('error'));
        })(u || (u = {}));
        var c = { env: {} };
        if ('object' === typeof e) c = e;
        else
          try {
            Function('stub', 'process = stub')(c);
          } catch (l) {}
      }.call(this, r('8oxB')));
    },
    rePB: function (e, t, r) {
      'use strict';
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      r.d(t, 'a', function () {
        return n;
      });
    },
    rlHP: function (e, t) {
      e.exports = function (e) {
        if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    vcXL: function (e, t, r) {
      'use strict';
      var n = self.fetch.bind(self);
      (e.exports = n), (e.exports.default = e.exports);
    },
    yLpj: function (e, t) {
      var r;
      r = (function () {
        return this;
      })();
      try {
        r = r || new Function('return this')();
      } catch (n) {
        'object' === typeof window && (r = window);
      }
      e.exports = r;
    },
    zLVn: function (e, t, r) {
      'use strict';
      function n(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i;
      }
      r.d(t, 'a', function () {
        return n;
      });
    },
  },
]);
