(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [8],
  {
    EMzn: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, 'parse', function () {
          return L;
        }),
        i.d(t, 'parseValue', function () {
          return F;
        }),
        i.d(t, 'parseType', function () {
          return b;
        });
      var n = i('rWdj');
      function r(e, t) {
        if (!Boolean(e)) throw new Error(t);
      }
      var s = i('RKIb');
      function a(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : e.prototype.toString;
        (e.prototype.toJSON = t),
          (e.prototype.inspect = t),
          s.a && (e.prototype[s.a] = t);
      }
      function o(e) {
        return (o =
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
      function c(e, t) {
        for (
          var i, n = /\r\n|[\n\r]/g, r = 1, s = t + 1;
          (i = n.exec(e.body)) && i.index < t;

        )
          (r += 1), (s = t + 1 - (i.index + i[0].length));
        return { line: r, column: s };
      }
      function p(e) {
        return l(e.source, c(e.source, e.start));
      }
      function l(e, t) {
        var i = e.locationOffset.column - 1,
          n = u(i) + e.body,
          r = t.line - 1,
          s = e.locationOffset.line - 1,
          a = t.line + s,
          o = 1 === t.line ? i : 0,
          c = t.column + o,
          p = ''.concat(e.name, ':').concat(a, ':').concat(c, '\n'),
          l = n.split(/\r\n|[\n\r]/g),
          f = l[r];
        if (f.length > 120) {
          for (
            var d = Math.floor(c / 80), E = c % 80, T = [], N = 0;
            N < f.length;
            N += 80
          )
            T.push(f.slice(N, N + 80));
          return (
            p +
            h(
              [[''.concat(a), T[0]]].concat(
                T.slice(1, d + 1).map(function (e) {
                  return ['', e];
                }),
                [
                  [' ', u(E - 1) + '^'],
                  ['', T[d + 1]],
                ]
              )
            )
          );
        }
        return (
          p +
          h([
            [''.concat(a - 1), l[r - 1]],
            [''.concat(a), f],
            ['', u(c - 1) + '^'],
            [''.concat(a + 1), l[r + 1]],
          ])
        );
      }
      function h(e) {
        var t = e.filter(function (e) {
            e[0];
            return void 0 !== e[1];
          }),
          i = Math.max.apply(
            Math,
            t.map(function (e) {
              return e[0].length;
            })
          );
        return t
          .map(function (e) {
            var t,
              n = e[0],
              r = e[1];
            return u(i - (t = n).length) + t + (r ? ' | ' + r : ' |');
          })
          .join('\n');
      }
      function u(e) {
        return Array(e + 1).join(' ');
      }
      function f(e, t, i, n, r, s, a) {
        var p = Array.isArray(t)
            ? 0 !== t.length
              ? t
              : void 0
            : t
            ? [t]
            : void 0,
          l = i;
        if (!l && p) {
          var h = p[0];
          l = h && h.loc && h.loc.source;
        }
        var u,
          d = n;
        !d &&
          p &&
          (d = p.reduce(function (e, t) {
            return t.loc && e.push(t.loc.start), e;
          }, [])),
          d && 0 === d.length && (d = void 0),
          n && i
            ? (u = n.map(function (e) {
                return c(i, e);
              }))
            : p &&
              (u = p.reduce(function (e, t) {
                return t.loc && e.push(c(t.loc.source, t.loc.start)), e;
              }, []));
        var E,
          T = a;
        if (null == T && null != s) {
          var N = s.extensions;
          'object' == o((E = N)) && null !== E && (T = N);
        }
        Object.defineProperties(this, {
          message: { value: e, enumerable: !0, writable: !0 },
          locations: { value: u || void 0, enumerable: Boolean(u) },
          path: { value: r || void 0, enumerable: Boolean(r) },
          nodes: { value: p || void 0 },
          source: { value: l || void 0 },
          positions: { value: d || void 0 },
          originalError: { value: s },
          extensions: { value: T || void 0, enumerable: Boolean(T) },
        }),
          s && s.stack
            ? Object.defineProperty(this, 'stack', {
                value: s.stack,
                writable: !0,
                configurable: !0,
              })
            : Error.captureStackTrace
            ? Error.captureStackTrace(this, f)
            : Object.defineProperty(this, 'stack', {
                value: Error().stack,
                writable: !0,
                configurable: !0,
              });
      }
      function d(e, t, i) {
        return new f('Syntax Error: '.concat(i), void 0, e, [t]);
      }
      f.prototype = Object.create(Error.prototype, {
        constructor: { value: f },
        name: { value: 'GraphQLError' },
        toString: {
          value: function () {
            return (function (e) {
              var t = e.message;
              if (e.nodes)
                for (var i = 0, n = e.nodes; i < n.length; i++) {
                  var r = n[i];
                  r.loc && (t += '\n\n' + p(r.loc));
                }
              else if (e.source && e.locations)
                for (var s = 0, a = e.locations; s < a.length; s++) {
                  var o = a[s];
                  t += '\n\n' + l(e.source, o);
                }
              return t;
            })(this);
          },
        },
      });
      var E = Object.freeze({
        NAME: 'Name',
        DOCUMENT: 'Document',
        OPERATION_DEFINITION: 'OperationDefinition',
        VARIABLE_DEFINITION: 'VariableDefinition',
        SELECTION_SET: 'SelectionSet',
        FIELD: 'Field',
        ARGUMENT: 'Argument',
        FRAGMENT_SPREAD: 'FragmentSpread',
        INLINE_FRAGMENT: 'InlineFragment',
        FRAGMENT_DEFINITION: 'FragmentDefinition',
        VARIABLE: 'Variable',
        INT: 'IntValue',
        FLOAT: 'FloatValue',
        STRING: 'StringValue',
        BOOLEAN: 'BooleanValue',
        NULL: 'NullValue',
        ENUM: 'EnumValue',
        LIST: 'ListValue',
        OBJECT: 'ObjectValue',
        OBJECT_FIELD: 'ObjectField',
        DIRECTIVE: 'Directive',
        NAMED_TYPE: 'NamedType',
        LIST_TYPE: 'ListType',
        NON_NULL_TYPE: 'NonNullType',
        SCHEMA_DEFINITION: 'SchemaDefinition',
        OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
        SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
        OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
        FIELD_DEFINITION: 'FieldDefinition',
        INPUT_VALUE_DEFINITION: 'InputValueDefinition',
        INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
        UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
        ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
        ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
        INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
        DIRECTIVE_DEFINITION: 'DirectiveDefinition',
        SCHEMA_EXTENSION: 'SchemaExtension',
        SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
        OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
        INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
        UNION_TYPE_EXTENSION: 'UnionTypeExtension',
        ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
        INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',
      });
      var T,
        N = function (e, t, i) {
          (this.body = e),
            (this.name = t || 'GraphQL request'),
            (this.locationOffset = i || { line: 1, column: 1 }),
            this.locationOffset.line > 0 ||
              r(0, 'line in locationOffset is 1-indexed and must be positive'),
            this.locationOffset.column > 0 ||
              r(
                0,
                'column in locationOffset is 1-indexed and must be positive'
              );
        };
      function v(e) {
        var t = e.split(/\r\n|[\n\r]/g),
          i = (function (e) {
            for (var t = null, i = 1; i < e.length; i++) {
              var n = e[i],
                r = I(n);
              if (r !== n.length && (null === t || r < t) && 0 === (t = r))
                break;
            }
            return null === t ? 0 : t;
          })(t);
        if (0 !== i) for (var n = 1; n < t.length; n++) t[n] = t[n].slice(i);
        for (; t.length > 0 && _(t[0]); ) t.shift();
        for (; t.length > 0 && _(t[t.length - 1]); ) t.pop();
        return t.join('\n');
      }
      function I(e) {
        for (var t = 0; t < e.length && (' ' === e[t] || '\t' === e[t]); ) t++;
        return t;
      }
      function _(e) {
        return I(e) === e.length;
      }
      (T = N),
        'function' === typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(T.prototype, Symbol.toStringTag, {
            get: function () {
              return this.constructor.name;
            },
          });
      var m = Object.freeze({
        SOF: '<SOF>',
        EOF: '<EOF>',
        BANG: '!',
        DOLLAR: '$',
        AMP: '&',
        PAREN_L: '(',
        PAREN_R: ')',
        SPREAD: '...',
        COLON: ':',
        EQUALS: '=',
        AT: '@',
        BRACKET_L: '[',
        BRACKET_R: ']',
        BRACE_L: '{',
        PIPE: '|',
        BRACE_R: '}',
        NAME: 'Name',
        INT: 'Int',
        FLOAT: 'Float',
        STRING: 'String',
        BLOCK_STRING: 'BlockString',
        COMMENT: 'Comment',
      });
      function O() {
        return (this.lastToken = this.token), (this.token = this.lookahead());
      }
      function A() {
        var e = this.token;
        if (e.kind !== m.EOF)
          do {
            e = e.next || (e.next = y(this, e));
          } while (e.kind === m.COMMENT);
        return e;
      }
      function x(e, t, i, n, r, s, a) {
        (this.kind = e),
          (this.start = t),
          (this.end = i),
          (this.line = n),
          (this.column = r),
          (this.value = a),
          (this.prev = s),
          (this.next = null);
      }
      function k(e) {
        return isNaN(e)
          ? m.EOF
          : e < 127
          ? JSON.stringify(String.fromCharCode(e))
          : '"\\u'.concat(('00' + e.toString(16).toUpperCase()).slice(-4), '"');
      }
      function y(e, t) {
        var i = e.source,
          n = i.body,
          r = n.length,
          s = (function (e, t, i) {
            var n = e.length,
              r = t;
            for (; r < n; ) {
              var s = e.charCodeAt(r);
              if (9 === s || 32 === s || 44 === s || 65279 === s) ++r;
              else if (10 === s) ++r, ++i.line, (i.lineStart = r);
              else {
                if (13 !== s) break;
                10 === e.charCodeAt(r + 1) ? (r += 2) : ++r,
                  ++i.line,
                  (i.lineStart = r);
              }
            }
            return r;
          })(n, t.end, e),
          a = e.line,
          o = 1 + s - e.lineStart;
        if (s >= r) return new x(m.EOF, r, r, a, o, t);
        var c = n.charCodeAt(s);
        switch (c) {
          case 33:
            return new x(m.BANG, s, s + 1, a, o, t);
          case 35:
            return (function (e, t, i, n, r) {
              var s,
                a = e.body,
                o = t;
              do {
                s = a.charCodeAt(++o);
              } while (!isNaN(s) && (s > 31 || 9 === s));
              return new x(m.COMMENT, t, o, i, n, r, a.slice(t + 1, o));
            })(i, s, a, o, t);
          case 36:
            return new x(m.DOLLAR, s, s + 1, a, o, t);
          case 38:
            return new x(m.AMP, s, s + 1, a, o, t);
          case 40:
            return new x(m.PAREN_L, s, s + 1, a, o, t);
          case 41:
            return new x(m.PAREN_R, s, s + 1, a, o, t);
          case 46:
            if (46 === n.charCodeAt(s + 1) && 46 === n.charCodeAt(s + 2))
              return new x(m.SPREAD, s, s + 3, a, o, t);
            break;
          case 58:
            return new x(m.COLON, s, s + 1, a, o, t);
          case 61:
            return new x(m.EQUALS, s, s + 1, a, o, t);
          case 64:
            return new x(m.AT, s, s + 1, a, o, t);
          case 91:
            return new x(m.BRACKET_L, s, s + 1, a, o, t);
          case 93:
            return new x(m.BRACKET_R, s, s + 1, a, o, t);
          case 123:
            return new x(m.BRACE_L, s, s + 1, a, o, t);
          case 124:
            return new x(m.PIPE, s, s + 1, a, o, t);
          case 125:
            return new x(m.BRACE_R, s, s + 1, a, o, t);
          case 65:
          case 66:
          case 67:
          case 68:
          case 69:
          case 70:
          case 71:
          case 72:
          case 73:
          case 74:
          case 75:
          case 76:
          case 77:
          case 78:
          case 79:
          case 80:
          case 81:
          case 82:
          case 83:
          case 84:
          case 85:
          case 86:
          case 87:
          case 88:
          case 89:
          case 90:
          case 95:
          case 97:
          case 98:
          case 99:
          case 100:
          case 101:
          case 102:
          case 103:
          case 104:
          case 105:
          case 106:
          case 107:
          case 108:
          case 109:
          case 110:
          case 111:
          case 112:
          case 113:
          case 114:
          case 115:
          case 116:
          case 117:
          case 118:
          case 119:
          case 120:
          case 121:
          case 122:
            return (function (e, t, i, n, r) {
              var s = e.body,
                a = s.length,
                o = t + 1,
                c = 0;
              for (
                ;
                o !== a &&
                !isNaN((c = s.charCodeAt(o))) &&
                (95 === c ||
                  (c >= 48 && c <= 57) ||
                  (c >= 65 && c <= 90) ||
                  (c >= 97 && c <= 122));

              )
                ++o;
              return new x(m.NAME, t, o, i, n, r, s.slice(t, o));
            })(i, s, a, o, t);
          case 45:
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            return (function (e, t, i, n, r, s) {
              var a = e.body,
                o = i,
                c = t,
                p = !1;
              45 === o && (o = a.charCodeAt(++c));
              if (48 === o) {
                if ((o = a.charCodeAt(++c)) >= 48 && o <= 57)
                  throw d(
                    e,
                    c,
                    'Invalid number, unexpected digit after 0: '.concat(
                      k(o),
                      '.'
                    )
                  );
              } else (c = D(e, c, o)), (o = a.charCodeAt(c));
              46 === o &&
                ((p = !0),
                (o = a.charCodeAt(++c)),
                (c = D(e, c, o)),
                (o = a.charCodeAt(c)));
              (69 !== o && 101 !== o) ||
                ((p = !0),
                (43 !== (o = a.charCodeAt(++c)) && 45 !== o) ||
                  (o = a.charCodeAt(++c)),
                (c = D(e, c, o)),
                (o = a.charCodeAt(c)));
              if (46 === o || 69 === o || 101 === o)
                throw d(
                  e,
                  c,
                  'Invalid number, expected digit but got: '.concat(k(o), '.')
                );
              return new x(p ? m.FLOAT : m.INT, t, c, n, r, s, a.slice(t, c));
            })(i, s, c, a, o, t);
          case 34:
            return 34 === n.charCodeAt(s + 1) && 34 === n.charCodeAt(s + 2)
              ? (function (e, t, i, n, r, s) {
                  var a = e.body,
                    o = t + 3,
                    c = o,
                    p = 0,
                    l = '';
                  for (; o < a.length && !isNaN((p = a.charCodeAt(o))); ) {
                    if (
                      34 === p &&
                      34 === a.charCodeAt(o + 1) &&
                      34 === a.charCodeAt(o + 2)
                    )
                      return (
                        (l += a.slice(c, o)),
                        new x(m.BLOCK_STRING, t, o + 3, i, n, r, v(l))
                      );
                    if (p < 32 && 9 !== p && 10 !== p && 13 !== p)
                      throw d(
                        e,
                        o,
                        'Invalid character within String: '.concat(k(p), '.')
                      );
                    10 === p
                      ? (++o, ++s.line, (s.lineStart = o))
                      : 13 === p
                      ? (10 === a.charCodeAt(o + 1) ? (o += 2) : ++o,
                        ++s.line,
                        (s.lineStart = o))
                      : 92 === p &&
                        34 === a.charCodeAt(o + 1) &&
                        34 === a.charCodeAt(o + 2) &&
                        34 === a.charCodeAt(o + 3)
                      ? ((l += a.slice(c, o) + '"""'), (c = o += 4))
                      : ++o;
                  }
                  throw d(e, o, 'Unterminated string.');
                })(i, s, a, o, t, e)
              : (function (e, t, i, n, r) {
                  var s = e.body,
                    a = t + 1,
                    o = a,
                    c = 0,
                    p = '';
                  for (
                    ;
                    a < s.length &&
                    !isNaN((c = s.charCodeAt(a))) &&
                    10 !== c &&
                    13 !== c;

                  ) {
                    if (34 === c)
                      return (
                        (p += s.slice(o, a)),
                        new x(m.STRING, t, a + 1, i, n, r, p)
                      );
                    if (c < 32 && 9 !== c)
                      throw d(
                        e,
                        a,
                        'Invalid character within String: '.concat(k(c), '.')
                      );
                    if ((++a, 92 === c)) {
                      switch (
                        ((p += s.slice(o, a - 1)), (c = s.charCodeAt(a)))
                      ) {
                        case 34:
                          p += '"';
                          break;
                        case 47:
                          p += '/';
                          break;
                        case 92:
                          p += '\\';
                          break;
                        case 98:
                          p += '\b';
                          break;
                        case 102:
                          p += '\f';
                          break;
                        case 110:
                          p += '\n';
                          break;
                        case 114:
                          p += '\r';
                          break;
                        case 116:
                          p += '\t';
                          break;
                        case 117:
                          var l = S(
                            s.charCodeAt(a + 1),
                            s.charCodeAt(a + 2),
                            s.charCodeAt(a + 3),
                            s.charCodeAt(a + 4)
                          );
                          if (l < 0) {
                            var h = s.slice(a + 1, a + 5);
                            throw d(
                              e,
                              a,
                              'Invalid character escape sequence: \\u'.concat(
                                h,
                                '.'
                              )
                            );
                          }
                          (p += String.fromCharCode(l)), (a += 4);
                          break;
                        default:
                          throw d(
                            e,
                            a,
                            'Invalid character escape sequence: \\'.concat(
                              String.fromCharCode(c),
                              '.'
                            )
                          );
                      }
                      o = ++a;
                    }
                  }
                  throw d(e, a, 'Unterminated string.');
                })(i, s, a, o, t);
        }
        throw d(
          i,
          s,
          (function (e) {
            if (e < 32 && 9 !== e && 10 !== e && 13 !== e)
              return 'Cannot contain the invalid character '.concat(k(e), '.');
            if (39 === e)
              return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
            return 'Cannot parse the unexpected character '.concat(k(e), '.');
          })(c)
        );
      }
      function D(e, t, i) {
        var n = e.body,
          r = t,
          s = i;
        if (s >= 48 && s <= 57) {
          do {
            s = n.charCodeAt(++r);
          } while (s >= 48 && s <= 57);
          return r;
        }
        throw d(
          e,
          r,
          'Invalid number, expected digit but got: '.concat(k(s), '.')
        );
      }
      function S(e, t, i, n) {
        return (C(e) << 12) | (C(t) << 8) | (C(i) << 4) | C(n);
      }
      function C(e) {
        return e >= 48 && e <= 57
          ? e - 48
          : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
          ? e - 87
          : -1;
      }
      a(x, function () {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column,
        };
      });
      var R = Object.freeze({
        QUERY: 'QUERY',
        MUTATION: 'MUTATION',
        SUBSCRIPTION: 'SUBSCRIPTION',
        FIELD: 'FIELD',
        FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
        FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
        INLINE_FRAGMENT: 'INLINE_FRAGMENT',
        VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
        SCHEMA: 'SCHEMA',
        SCALAR: 'SCALAR',
        OBJECT: 'OBJECT',
        FIELD_DEFINITION: 'FIELD_DEFINITION',
        ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
        INTERFACE: 'INTERFACE',
        UNION: 'UNION',
        ENUM: 'ENUM',
        ENUM_VALUE: 'ENUM_VALUE',
        INPUT_OBJECT: 'INPUT_OBJECT',
        INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION',
      });
      function L(e, t) {
        return new g(e, t).parseDocument();
      }
      function F(e, t) {
        var i = new g(e, t);
        i.expectToken(m.SOF);
        var n = i.parseValueLiteral(!1);
        return i.expectToken(m.EOF), n;
      }
      function b(e, t) {
        var i = new g(e, t);
        i.expectToken(m.SOF);
        var n = i.parseTypeReference();
        return i.expectToken(m.EOF), n;
      }
      var g = (function () {
        function e(e, t) {
          var i = 'string' === typeof e ? new N(e) : e;
          i instanceof N ||
            r(0, 'Must provide Source. Received: '.concat(Object(n.a)(i))),
            (this._lexer = (function (e, t) {
              var i = new x(m.SOF, 0, 0, 0, 0, null);
              return {
                source: e,
                options: t,
                lastToken: i,
                token: i,
                line: 1,
                lineStart: 0,
                advance: O,
                lookahead: A,
              };
            })(i)),
            (this._options = t || {});
        }
        var t = e.prototype;
        return (
          (t.parseName = function () {
            var e = this.expectToken(m.NAME);
            return { kind: E.NAME, value: e.value, loc: this.loc(e) };
          }),
          (t.parseDocument = function () {
            var e = this._lexer.token;
            return {
              kind: E.DOCUMENT,
              definitions: this.many(m.SOF, this.parseDefinition, m.EOF),
              loc: this.loc(e),
            };
          }),
          (t.parseDefinition = function () {
            if (this.peek(m.NAME))
              switch (this._lexer.token.value) {
                case 'query':
                case 'mutation':
                case 'subscription':
                  return this.parseOperationDefinition();
                case 'fragment':
                  return this.parseFragmentDefinition();
                case 'schema':
                case 'scalar':
                case 'type':
                case 'interface':
                case 'union':
                case 'enum':
                case 'input':
                case 'directive':
                  return this.parseTypeSystemDefinition();
                case 'extend':
                  return this.parseTypeSystemExtension();
              }
            else {
              if (this.peek(m.BRACE_L)) return this.parseOperationDefinition();
              if (this.peekDescription())
                return this.parseTypeSystemDefinition();
            }
            throw this.unexpected();
          }),
          (t.parseOperationDefinition = function () {
            var e = this._lexer.token;
            if (this.peek(m.BRACE_L))
              return {
                kind: E.OPERATION_DEFINITION,
                operation: 'query',
                name: void 0,
                variableDefinitions: [],
                directives: [],
                selectionSet: this.parseSelectionSet(),
                loc: this.loc(e),
              };
            var t,
              i = this.parseOperationType();
            return (
              this.peek(m.NAME) && (t = this.parseName()),
              {
                kind: E.OPERATION_DEFINITION,
                operation: i,
                name: t,
                variableDefinitions: this.parseVariableDefinitions(),
                directives: this.parseDirectives(!1),
                selectionSet: this.parseSelectionSet(),
                loc: this.loc(e),
              }
            );
          }),
          (t.parseOperationType = function () {
            var e = this.expectToken(m.NAME);
            switch (e.value) {
              case 'query':
                return 'query';
              case 'mutation':
                return 'mutation';
              case 'subscription':
                return 'subscription';
            }
            throw this.unexpected(e);
          }),
          (t.parseVariableDefinitions = function () {
            return this.optionalMany(
              m.PAREN_L,
              this.parseVariableDefinition,
              m.PAREN_R
            );
          }),
          (t.parseVariableDefinition = function () {
            var e = this._lexer.token;
            return {
              kind: E.VARIABLE_DEFINITION,
              variable: this.parseVariable(),
              type: (this.expectToken(m.COLON), this.parseTypeReference()),
              defaultValue: this.expectOptionalToken(m.EQUALS)
                ? this.parseValueLiteral(!0)
                : void 0,
              directives: this.parseDirectives(!0),
              loc: this.loc(e),
            };
          }),
          (t.parseVariable = function () {
            var e = this._lexer.token;
            return (
              this.expectToken(m.DOLLAR),
              { kind: E.VARIABLE, name: this.parseName(), loc: this.loc(e) }
            );
          }),
          (t.parseSelectionSet = function () {
            var e = this._lexer.token;
            return {
              kind: E.SELECTION_SET,
              selections: this.many(m.BRACE_L, this.parseSelection, m.BRACE_R),
              loc: this.loc(e),
            };
          }),
          (t.parseSelection = function () {
            return this.peek(m.SPREAD)
              ? this.parseFragment()
              : this.parseField();
          }),
          (t.parseField = function () {
            var e,
              t,
              i = this._lexer.token,
              n = this.parseName();
            return (
              this.expectOptionalToken(m.COLON)
                ? ((e = n), (t = this.parseName()))
                : (t = n),
              {
                kind: E.FIELD,
                alias: e,
                name: t,
                arguments: this.parseArguments(!1),
                directives: this.parseDirectives(!1),
                selectionSet: this.peek(m.BRACE_L)
                  ? this.parseSelectionSet()
                  : void 0,
                loc: this.loc(i),
              }
            );
          }),
          (t.parseArguments = function (e) {
            var t = e ? this.parseConstArgument : this.parseArgument;
            return this.optionalMany(m.PAREN_L, t, m.PAREN_R);
          }),
          (t.parseArgument = function () {
            var e = this._lexer.token,
              t = this.parseName();
            return (
              this.expectToken(m.COLON),
              {
                kind: E.ARGUMENT,
                name: t,
                value: this.parseValueLiteral(!1),
                loc: this.loc(e),
              }
            );
          }),
          (t.parseConstArgument = function () {
            var e = this._lexer.token;
            return {
              kind: E.ARGUMENT,
              name: this.parseName(),
              value: (this.expectToken(m.COLON), this.parseValueLiteral(!0)),
              loc: this.loc(e),
            };
          }),
          (t.parseFragment = function () {
            var e = this._lexer.token;
            this.expectToken(m.SPREAD);
            var t = this.expectOptionalKeyword('on');
            return !t && this.peek(m.NAME)
              ? {
                  kind: E.FRAGMENT_SPREAD,
                  name: this.parseFragmentName(),
                  directives: this.parseDirectives(!1),
                  loc: this.loc(e),
                }
              : {
                  kind: E.INLINE_FRAGMENT,
                  typeCondition: t ? this.parseNamedType() : void 0,
                  directives: this.parseDirectives(!1),
                  selectionSet: this.parseSelectionSet(),
                  loc: this.loc(e),
                };
          }),
          (t.parseFragmentDefinition = function () {
            var e = this._lexer.token;
            return (
              this.expectKeyword('fragment'),
              this._options.experimentalFragmentVariables
                ? {
                    kind: E.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    variableDefinitions: this.parseVariableDefinitions(),
                    typeCondition:
                      (this.expectKeyword('on'), this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                    loc: this.loc(e),
                  }
                : {
                    kind: E.FRAGMENT_DEFINITION,
                    name: this.parseFragmentName(),
                    typeCondition:
                      (this.expectKeyword('on'), this.parseNamedType()),
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                    loc: this.loc(e),
                  }
            );
          }),
          (t.parseFragmentName = function () {
            if ('on' === this._lexer.token.value) throw this.unexpected();
            return this.parseName();
          }),
          (t.parseValueLiteral = function (e) {
            var t = this._lexer.token;
            switch (t.kind) {
              case m.BRACKET_L:
                return this.parseList(e);
              case m.BRACE_L:
                return this.parseObject(e);
              case m.INT:
                return (
                  this._lexer.advance(),
                  { kind: E.INT, value: t.value, loc: this.loc(t) }
                );
              case m.FLOAT:
                return (
                  this._lexer.advance(),
                  { kind: E.FLOAT, value: t.value, loc: this.loc(t) }
                );
              case m.STRING:
              case m.BLOCK_STRING:
                return this.parseStringLiteral();
              case m.NAME:
                return 'true' === t.value || 'false' === t.value
                  ? (this._lexer.advance(),
                    {
                      kind: E.BOOLEAN,
                      value: 'true' === t.value,
                      loc: this.loc(t),
                    })
                  : 'null' === t.value
                  ? (this._lexer.advance(), { kind: E.NULL, loc: this.loc(t) })
                  : (this._lexer.advance(),
                    { kind: E.ENUM, value: t.value, loc: this.loc(t) });
              case m.DOLLAR:
                if (!e) return this.parseVariable();
            }
            throw this.unexpected();
          }),
          (t.parseStringLiteral = function () {
            var e = this._lexer.token;
            return (
              this._lexer.advance(),
              {
                kind: E.STRING,
                value: e.value,
                block: e.kind === m.BLOCK_STRING,
                loc: this.loc(e),
              }
            );
          }),
          (t.parseList = function (e) {
            var t = this,
              i = this._lexer.token;
            return {
              kind: E.LIST,
              values: this.any(
                m.BRACKET_L,
                function () {
                  return t.parseValueLiteral(e);
                },
                m.BRACKET_R
              ),
              loc: this.loc(i),
            };
          }),
          (t.parseObject = function (e) {
            var t = this,
              i = this._lexer.token;
            return {
              kind: E.OBJECT,
              fields: this.any(
                m.BRACE_L,
                function () {
                  return t.parseObjectField(e);
                },
                m.BRACE_R
              ),
              loc: this.loc(i),
            };
          }),
          (t.parseObjectField = function (e) {
            var t = this._lexer.token,
              i = this.parseName();
            return (
              this.expectToken(m.COLON),
              {
                kind: E.OBJECT_FIELD,
                name: i,
                value: this.parseValueLiteral(e),
                loc: this.loc(t),
              }
            );
          }),
          (t.parseDirectives = function (e) {
            for (var t = []; this.peek(m.AT); ) t.push(this.parseDirective(e));
            return t;
          }),
          (t.parseDirective = function (e) {
            var t = this._lexer.token;
            return (
              this.expectToken(m.AT),
              {
                kind: E.DIRECTIVE,
                name: this.parseName(),
                arguments: this.parseArguments(e),
                loc: this.loc(t),
              }
            );
          }),
          (t.parseTypeReference = function () {
            var e,
              t = this._lexer.token;
            return (
              this.expectOptionalToken(m.BRACKET_L)
                ? ((e = this.parseTypeReference()),
                  this.expectToken(m.BRACKET_R),
                  (e = { kind: E.LIST_TYPE, type: e, loc: this.loc(t) }))
                : (e = this.parseNamedType()),
              this.expectOptionalToken(m.BANG)
                ? { kind: E.NON_NULL_TYPE, type: e, loc: this.loc(t) }
                : e
            );
          }),
          (t.parseNamedType = function () {
            var e = this._lexer.token;
            return {
              kind: E.NAMED_TYPE,
              name: this.parseName(),
              loc: this.loc(e),
            };
          }),
          (t.parseTypeSystemDefinition = function () {
            var e = this.peekDescription()
              ? this._lexer.lookahead()
              : this._lexer.token;
            if (e.kind === m.NAME)
              switch (e.value) {
                case 'schema':
                  return this.parseSchemaDefinition();
                case 'scalar':
                  return this.parseScalarTypeDefinition();
                case 'type':
                  return this.parseObjectTypeDefinition();
                case 'interface':
                  return this.parseInterfaceTypeDefinition();
                case 'union':
                  return this.parseUnionTypeDefinition();
                case 'enum':
                  return this.parseEnumTypeDefinition();
                case 'input':
                  return this.parseInputObjectTypeDefinition();
                case 'directive':
                  return this.parseDirectiveDefinition();
              }
            throw this.unexpected(e);
          }),
          (t.peekDescription = function () {
            return this.peek(m.STRING) || this.peek(m.BLOCK_STRING);
          }),
          (t.parseDescription = function () {
            if (this.peekDescription()) return this.parseStringLiteral();
          }),
          (t.parseSchemaDefinition = function () {
            var e = this._lexer.token;
            this.expectKeyword('schema');
            var t = this.parseDirectives(!0),
              i = this.many(
                m.BRACE_L,
                this.parseOperationTypeDefinition,
                m.BRACE_R
              );
            return {
              kind: E.SCHEMA_DEFINITION,
              directives: t,
              operationTypes: i,
              loc: this.loc(e),
            };
          }),
          (t.parseOperationTypeDefinition = function () {
            var e = this._lexer.token,
              t = this.parseOperationType();
            this.expectToken(m.COLON);
            var i = this.parseNamedType();
            return {
              kind: E.OPERATION_TYPE_DEFINITION,
              operation: t,
              type: i,
              loc: this.loc(e),
            };
          }),
          (t.parseScalarTypeDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('scalar');
            var i = this.parseName(),
              n = this.parseDirectives(!0);
            return {
              kind: E.SCALAR_TYPE_DEFINITION,
              description: t,
              name: i,
              directives: n,
              loc: this.loc(e),
            };
          }),
          (t.parseObjectTypeDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('type');
            var i = this.parseName(),
              n = this.parseImplementsInterfaces(),
              r = this.parseDirectives(!0),
              s = this.parseFieldsDefinition();
            return {
              kind: E.OBJECT_TYPE_DEFINITION,
              description: t,
              name: i,
              interfaces: n,
              directives: r,
              fields: s,
              loc: this.loc(e),
            };
          }),
          (t.parseImplementsInterfaces = function () {
            var e = [];
            if (this.expectOptionalKeyword('implements')) {
              this.expectOptionalToken(m.AMP);
              do {
                e.push(this.parseNamedType());
              } while (
                this.expectOptionalToken(m.AMP) ||
                (this._options.allowLegacySDLImplementsInterfaces &&
                  this.peek(m.NAME))
              );
            }
            return e;
          }),
          (t.parseFieldsDefinition = function () {
            return this._options.allowLegacySDLEmptyFields &&
              this.peek(m.BRACE_L) &&
              this._lexer.lookahead().kind === m.BRACE_R
              ? (this._lexer.advance(), this._lexer.advance(), [])
              : this.optionalMany(
                  m.BRACE_L,
                  this.parseFieldDefinition,
                  m.BRACE_R
                );
          }),
          (t.parseFieldDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription(),
              i = this.parseName(),
              n = this.parseArgumentDefs();
            this.expectToken(m.COLON);
            var r = this.parseTypeReference(),
              s = this.parseDirectives(!0);
            return {
              kind: E.FIELD_DEFINITION,
              description: t,
              name: i,
              arguments: n,
              type: r,
              directives: s,
              loc: this.loc(e),
            };
          }),
          (t.parseArgumentDefs = function () {
            return this.optionalMany(
              m.PAREN_L,
              this.parseInputValueDef,
              m.PAREN_R
            );
          }),
          (t.parseInputValueDef = function () {
            var e = this._lexer.token,
              t = this.parseDescription(),
              i = this.parseName();
            this.expectToken(m.COLON);
            var n,
              r = this.parseTypeReference();
            this.expectOptionalToken(m.EQUALS) &&
              (n = this.parseValueLiteral(!0));
            var s = this.parseDirectives(!0);
            return {
              kind: E.INPUT_VALUE_DEFINITION,
              description: t,
              name: i,
              type: r,
              defaultValue: n,
              directives: s,
              loc: this.loc(e),
            };
          }),
          (t.parseInterfaceTypeDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('interface');
            var i = this.parseName(),
              n = this.parseDirectives(!0),
              r = this.parseFieldsDefinition();
            return {
              kind: E.INTERFACE_TYPE_DEFINITION,
              description: t,
              name: i,
              directives: n,
              fields: r,
              loc: this.loc(e),
            };
          }),
          (t.parseUnionTypeDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('union');
            var i = this.parseName(),
              n = this.parseDirectives(!0),
              r = this.parseUnionMemberTypes();
            return {
              kind: E.UNION_TYPE_DEFINITION,
              description: t,
              name: i,
              directives: n,
              types: r,
              loc: this.loc(e),
            };
          }),
          (t.parseUnionMemberTypes = function () {
            var e = [];
            if (this.expectOptionalToken(m.EQUALS)) {
              this.expectOptionalToken(m.PIPE);
              do {
                e.push(this.parseNamedType());
              } while (this.expectOptionalToken(m.PIPE));
            }
            return e;
          }),
          (t.parseEnumTypeDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('enum');
            var i = this.parseName(),
              n = this.parseDirectives(!0),
              r = this.parseEnumValuesDefinition();
            return {
              kind: E.ENUM_TYPE_DEFINITION,
              description: t,
              name: i,
              directives: n,
              values: r,
              loc: this.loc(e),
            };
          }),
          (t.parseEnumValuesDefinition = function () {
            return this.optionalMany(
              m.BRACE_L,
              this.parseEnumValueDefinition,
              m.BRACE_R
            );
          }),
          (t.parseEnumValueDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription(),
              i = this.parseName(),
              n = this.parseDirectives(!0);
            return {
              kind: E.ENUM_VALUE_DEFINITION,
              description: t,
              name: i,
              directives: n,
              loc: this.loc(e),
            };
          }),
          (t.parseInputObjectTypeDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('input');
            var i = this.parseName(),
              n = this.parseDirectives(!0),
              r = this.parseInputFieldsDefinition();
            return {
              kind: E.INPUT_OBJECT_TYPE_DEFINITION,
              description: t,
              name: i,
              directives: n,
              fields: r,
              loc: this.loc(e),
            };
          }),
          (t.parseInputFieldsDefinition = function () {
            return this.optionalMany(
              m.BRACE_L,
              this.parseInputValueDef,
              m.BRACE_R
            );
          }),
          (t.parseTypeSystemExtension = function () {
            var e = this._lexer.lookahead();
            if (e.kind === m.NAME)
              switch (e.value) {
                case 'schema':
                  return this.parseSchemaExtension();
                case 'scalar':
                  return this.parseScalarTypeExtension();
                case 'type':
                  return this.parseObjectTypeExtension();
                case 'interface':
                  return this.parseInterfaceTypeExtension();
                case 'union':
                  return this.parseUnionTypeExtension();
                case 'enum':
                  return this.parseEnumTypeExtension();
                case 'input':
                  return this.parseInputObjectTypeExtension();
              }
            throw this.unexpected(e);
          }),
          (t.parseSchemaExtension = function () {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('schema');
            var t = this.parseDirectives(!0),
              i = this.optionalMany(
                m.BRACE_L,
                this.parseOperationTypeDefinition,
                m.BRACE_R
              );
            if (0 === t.length && 0 === i.length) throw this.unexpected();
            return {
              kind: E.SCHEMA_EXTENSION,
              directives: t,
              operationTypes: i,
              loc: this.loc(e),
            };
          }),
          (t.parseScalarTypeExtension = function () {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('scalar');
            var t = this.parseName(),
              i = this.parseDirectives(!0);
            if (0 === i.length) throw this.unexpected();
            return {
              kind: E.SCALAR_TYPE_EXTENSION,
              name: t,
              directives: i,
              loc: this.loc(e),
            };
          }),
          (t.parseObjectTypeExtension = function () {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('type');
            var t = this.parseName(),
              i = this.parseImplementsInterfaces(),
              n = this.parseDirectives(!0),
              r = this.parseFieldsDefinition();
            if (0 === i.length && 0 === n.length && 0 === r.length)
              throw this.unexpected();
            return {
              kind: E.OBJECT_TYPE_EXTENSION,
              name: t,
              interfaces: i,
              directives: n,
              fields: r,
              loc: this.loc(e),
            };
          }),
          (t.parseInterfaceTypeExtension = function () {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('interface');
            var t = this.parseName(),
              i = this.parseDirectives(!0),
              n = this.parseFieldsDefinition();
            if (0 === i.length && 0 === n.length) throw this.unexpected();
            return {
              kind: E.INTERFACE_TYPE_EXTENSION,
              name: t,
              directives: i,
              fields: n,
              loc: this.loc(e),
            };
          }),
          (t.parseUnionTypeExtension = function () {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('union');
            var t = this.parseName(),
              i = this.parseDirectives(!0),
              n = this.parseUnionMemberTypes();
            if (0 === i.length && 0 === n.length) throw this.unexpected();
            return {
              kind: E.UNION_TYPE_EXTENSION,
              name: t,
              directives: i,
              types: n,
              loc: this.loc(e),
            };
          }),
          (t.parseEnumTypeExtension = function () {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('enum');
            var t = this.parseName(),
              i = this.parseDirectives(!0),
              n = this.parseEnumValuesDefinition();
            if (0 === i.length && 0 === n.length) throw this.unexpected();
            return {
              kind: E.ENUM_TYPE_EXTENSION,
              name: t,
              directives: i,
              values: n,
              loc: this.loc(e),
            };
          }),
          (t.parseInputObjectTypeExtension = function () {
            var e = this._lexer.token;
            this.expectKeyword('extend'), this.expectKeyword('input');
            var t = this.parseName(),
              i = this.parseDirectives(!0),
              n = this.parseInputFieldsDefinition();
            if (0 === i.length && 0 === n.length) throw this.unexpected();
            return {
              kind: E.INPUT_OBJECT_TYPE_EXTENSION,
              name: t,
              directives: i,
              fields: n,
              loc: this.loc(e),
            };
          }),
          (t.parseDirectiveDefinition = function () {
            var e = this._lexer.token,
              t = this.parseDescription();
            this.expectKeyword('directive'), this.expectToken(m.AT);
            var i = this.parseName(),
              n = this.parseArgumentDefs(),
              r = this.expectOptionalKeyword('repeatable');
            this.expectKeyword('on');
            var s = this.parseDirectiveLocations();
            return {
              kind: E.DIRECTIVE_DEFINITION,
              description: t,
              name: i,
              arguments: n,
              repeatable: r,
              locations: s,
              loc: this.loc(e),
            };
          }),
          (t.parseDirectiveLocations = function () {
            this.expectOptionalToken(m.PIPE);
            var e = [];
            do {
              e.push(this.parseDirectiveLocation());
            } while (this.expectOptionalToken(m.PIPE));
            return e;
          }),
          (t.parseDirectiveLocation = function () {
            var e = this._lexer.token,
              t = this.parseName();
            if (void 0 !== R[t.value]) return t;
            throw this.unexpected(e);
          }),
          (t.loc = function (e) {
            if (!this._options.noLocation)
              return new w(e, this._lexer.lastToken, this._lexer.source);
          }),
          (t.peek = function (e) {
            return this._lexer.token.kind === e;
          }),
          (t.expectToken = function (e) {
            var t = this._lexer.token;
            if (t.kind === e) return this._lexer.advance(), t;
            throw d(
              this._lexer.source,
              t.start,
              'Expected '.concat(e, ', found ').concat(P(t))
            );
          }),
          (t.expectOptionalToken = function (e) {
            var t = this._lexer.token;
            if (t.kind === e) return this._lexer.advance(), t;
          }),
          (t.expectKeyword = function (e) {
            var t = this._lexer.token;
            if (t.kind !== m.NAME || t.value !== e)
              throw d(
                this._lexer.source,
                t.start,
                'Expected "'.concat(e, '", found ').concat(P(t))
              );
            this._lexer.advance();
          }),
          (t.expectOptionalKeyword = function (e) {
            var t = this._lexer.token;
            return (
              t.kind === m.NAME && t.value === e && (this._lexer.advance(), !0)
            );
          }),
          (t.unexpected = function (e) {
            var t = e || this._lexer.token;
            return d(this._lexer.source, t.start, 'Unexpected '.concat(P(t)));
          }),
          (t.any = function (e, t, i) {
            this.expectToken(e);
            for (var n = []; !this.expectOptionalToken(i); )
              n.push(t.call(this));
            return n;
          }),
          (t.optionalMany = function (e, t, i) {
            if (this.expectOptionalToken(e)) {
              var n = [];
              do {
                n.push(t.call(this));
              } while (!this.expectOptionalToken(i));
              return n;
            }
            return [];
          }),
          (t.many = function (e, t, i) {
            this.expectToken(e);
            var n = [];
            do {
              n.push(t.call(this));
            } while (!this.expectOptionalToken(i));
            return n;
          }),
          e
        );
      })();
      function w(e, t, i) {
        (this.start = e.start),
          (this.end = t.end),
          (this.startToken = e),
          (this.endToken = t),
          (this.source = i);
      }
      function P(e) {
        var t = e.value;
        return t ? ''.concat(e.kind, ' "').concat(t, '"') : e.kind;
      }
      a(w, function () {
        return { start: this.start, end: this.end };
      });
    },
    lTCR: function (e, t, i) {
      var n = i('EMzn').parse;
      function r(e) {
        return e.replace(/[\s,]+/g, ' ').trim();
      }
      var s = {},
        a = {};
      var o = !0;
      var c = !1;
      function p(e) {
        var t = r(e);
        if (s[t]) return s[t];
        var i = n(e, { experimentalFragmentVariables: c });
        if (!i || 'Document' !== i.kind)
          throw new Error('Not a valid GraphQL document.');
        return (
          (i = (function e(t, i) {
            var n = Object.prototype.toString.call(t);
            if ('[object Array]' === n)
              return t.map(function (t) {
                return e(t, i);
              });
            if ('[object Object]' !== n) throw new Error('Unexpected input.');
            i && t.loc && delete t.loc,
              t.loc && (delete t.loc.startToken, delete t.loc.endToken);
            var r,
              s,
              a,
              o = Object.keys(t);
            for (r in o)
              o.hasOwnProperty(r) &&
                ((s = t[o[r]]),
                ('[object Object]' !==
                  (a = Object.prototype.toString.call(s)) &&
                  '[object Array]' !== a) ||
                  (t[o[r]] = e(s, !0)));
            return t;
          })(
            (i = (function (e) {
              for (
                var t, i = {}, n = [], s = 0;
                s < e.definitions.length;
                s++
              ) {
                var c = e.definitions[s];
                if ('FragmentDefinition' === c.kind) {
                  var p = c.name.value,
                    l = r((t = c.loc).source.body.substring(t.start, t.end));
                  a.hasOwnProperty(p) && !a[p][l]
                    ? (o &&
                        console.warn(
                          'Warning: fragment with name ' +
                            p +
                            ' already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names'
                        ),
                      (a[p][l] = !0))
                    : a.hasOwnProperty(p) || ((a[p] = {}), (a[p][l] = !0)),
                    i[l] || ((i[l] = !0), n.push(c));
                } else n.push(c);
              }
              return (e.definitions = n), e;
            })(i)),
            !1
          )),
          (s[t] = i),
          i
        );
      }
      function l() {
        for (
          var e = Array.prototype.slice.call(arguments),
            t = e[0],
            i = 'string' === typeof t ? t : t[0],
            n = 1;
          n < e.length;
          n++
        )
          e[n] && e[n].kind && 'Document' === e[n].kind
            ? (i += e[n].loc.source.body)
            : (i += e[n]),
            (i += t[n]);
        return p(i);
      }
      (l.default = l),
        (l.resetCaches = function () {
          (s = {}), (a = {});
        }),
        (l.disableFragmentWarnings = function () {
          o = !1;
        }),
        (l.enableExperimentalFragmentVariables = function () {
          c = !0;
        }),
        (l.disableExperimentalFragmentVariables = function () {
          c = !1;
        }),
        (e.exports = l);
    },
  },
]);
