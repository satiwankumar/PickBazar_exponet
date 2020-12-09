(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    '89Ff': function (e, r, o) {
      'use strict';
      o.d(r, 'a', function () {
        return x;
      });
      var t = o('wx14'),
        a = o('Ff2n'),
        i = o('q1tI'),
        d = o.n(i),
        n = o('24R3'),
        s = o('yBv+'),
        p = o('vOnD'),
        l = o('za5s'),
        c = o('bC0J'),
        g = Object(l.c)({ key: 'buttonStyles' }),
        b = Object(l.c)({ key: 'colorStyles', prop: 'colors' }),
        f = Object(l.c)({ key: 'buttonSize', prop: 'size' }),
        m = Object(p.e)('button').withConfig({
          displayName: 'Buttonstyle__ButtonStyle',
          componentId: 'voymor-0',
        })(
          [
            'cursor:pointer;display:inline-flex;align-items:center;justify-content:center;background-color:',
            ';height:',
            'px;width:',
            ';color:',
            ';border-radius:',
            "px;font-family:'Lato',sans-serif;font-size:",
            'px;font-weight:',
            ';text-decoration:none;padding-top:0;padding-bottom:0;padding-left:',
            'px;padding-right:',
            'px;border:0;transition:all 0.3s ease;box-sizing:border-box;span.btn-text{padding-left:',
            'px;padding-right:',
            'px;white-space:nowrap;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.disabled{color:',
            ';background-color:',
            ';border-color:',
            ';&:hover{color:',
            ';background-color:',
            ';border-color:',
            ';}}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:',
            'px;padding-right:',
            'px;}}',
            ' ',
            ' ',
            ' ',
            ' ',
            '',
          ],
          Object(c.a)('colors.primary', '#009E7F'),
          Object(c.a)('heights.3', '48'),
          function (e) {
            return e.fullwidth ? '100%' : 'auto';
          },
          function (e) {
            return 'textButton' === e.variant ||
              'outlined' === e.variant ||
              'outlinedDash' === e.variant ||
              'outlinedFab' === e.variant ||
              'extendedOutlinedFab' === e.variant
              ? '#222222'
              : '#ffffff';
          },
          function (e) {
            return e.radius ? e.radius : Object(c.a)('radius.3', '6');
          },
          Object(c.a)('fontSizes.2', '15'),
          Object(c.a)('fontWeights.6', '700'),
          Object(c.a)('space.7', '30'),
          Object(c.a)('space.7', '30'),
          Object(c.a)('space.1', '4'),
          Object(c.a)('space.1', '4'),
          Object(c.a)('colors.labelColor', '#767676'),
          Object(c.a)('colors.borderColor', '#E6E6E6'),
          Object(c.a)('colors.borderColor', '#E6E6E6'),
          Object(c.a)('colors.labelColor', '#767676'),
          Object(c.a)('colors.borderColor', '#E6E6E6'),
          Object(c.a)('colors.borderColor', '#E6E6E6'),
          Object(c.a)('space.2', '8'),
          Object(c.a)('space.2', '8'),
          l.a,
          l.b,
          b,
          g,
          f
        ),
        u = Object(p.e)('button').withConfig({
          displayName: 'Buttonstyle__SelectBtnStyle',
          componentId: 'voymor-1',
        })(
          [
            'color:',
            ';background-color:transparent;width:26px;height:26px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid ',
            ';border-radius:13px;padding:0;box-shadow:none;outline:0;cursor:pointer;&:focus{box-shadow:none;}&.selected{color:#ffffff;background-color:',
            ';border:1px solid ',
            ';}',
          ],
          Object(c.a)('colors.darkRegular', '#77798C'),
          Object(c.a)('colors.darkRegular', '#77798C'),
          Object(c.a)('colors.primary', '#009E7F'),
          Object(c.a)('colors.primary', '#009E7F')
        );
      (m.displayName = 'ButtonStyle'), (u.displayName = 'SelectButton');
      var h = m,
        y = d.a.createElement,
        S = function (e) {
          var r = e.type,
            o = e.size,
            i = e.title,
            s = e.intlButtonId,
            p = e.colors,
            l = e.variant,
            c = e.icon,
            g = e.disabled,
            b = e.iconPosition,
            f = e.iconStyle,
            m = e.onClick,
            u = e.loader,
            S = (e.loaderColor, e.isLoading),
            x = e.className,
            R = e.fullwidth,
            w = e.style,
            j = Object(a.a)(e, [
              'type',
              'size',
              'title',
              'intlButtonId',
              'colors',
              'variant',
              'icon',
              'disabled',
              'iconPosition',
              'iconStyle',
              'onClick',
              'loader',
              'loaderColor',
              'isLoading',
              'className',
              'fullwidth',
              'style',
            ]),
            O =
              !1 !== S
                ? y(d.a.Fragment, null, u || 'loading....')
                : c && y('span', { className: 'btn-icon', style: f }, c),
            v = b || 'right';
          return y(
            h,
            Object(t.a)(
              {
                type: r,
                className: 'reusecore__button '
                  .concat(g ? 'disabled' : '', ' ')
                  .concat(S ? 'isLoading' : '', ' ')
                  .concat(x || '')
                  .trim(),
                icon: c,
                disabled: g,
                'icon-position': v,
                onClick: m,
                colors: p,
                variant: l,
                fullwidth: R,
                style: w,
                size: o,
              },
              j
            ),
            'left' === v && O,
            i &&
              !S &&
              y(
                'span',
                { className: 'btn-text' },
                y(n.a, { id: s || 'intlButtonId', defaultMessage: i })
              ),
            'right' === v && O
          );
        };
      S.defaultProps = { disabled: !1, isLoading: !1, type: 'button' };
      var x = function (e) {
        var r = e.disabled,
          o = e.onClick,
          i = e.className,
          d = e.selected,
          n = e.style,
          p = Object(a.a)(e, [
            'disabled',
            'onClick',
            'className',
            'selected',
            'style',
          ]);
        return y(
          u,
          Object(t.a)(
            {
              className: 'reusecore__button '
                .concat(r ? 'disabled' : '', ' ')
                .concat(d ? 'selected' : '', ' ')
                .concat(i || '')
                .trim(),
              disabled: r,
              onClick: o,
              style: n,
            },
            p
          ),
          y(s.PlusOutline, { width: '14px', height: '14px' })
        );
      };
      r.b = S;
    },
    OJSm: function (e, r, o) {
      'use strict';
      function t() {
        return (t =
          Object.assign ||
          function (e) {
            for (var r = 1; r < arguments.length; r++) {
              var o = arguments[r];
              for (var t in o)
                Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t]);
            }
            return e;
          }).apply(this, arguments);
      }
      var a = function (e, r, o, t, a) {
          for (r = r && r.split ? r.split('.') : [r], t = 0; t < r.length; t++)
            e = e ? e[r[t]] : a;
          return e === a ? o : e;
        },
        i = [40, 52, 64].map(function (e) {
          return e + 'em';
        }),
        d = {
          space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
          fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
        },
        n = {
          bg: 'backgroundColor',
          m: 'margin',
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          mx: 'marginX',
          my: 'marginY',
          p: 'padding',
          pt: 'paddingTop',
          pr: 'paddingRight',
          pb: 'paddingBottom',
          pl: 'paddingLeft',
          px: 'paddingX',
          py: 'paddingY',
        },
        s = {
          marginX: ['marginLeft', 'marginRight'],
          marginY: ['marginTop', 'marginBottom'],
          paddingX: ['paddingLeft', 'paddingRight'],
          paddingY: ['paddingTop', 'paddingBottom'],
          size: ['width', 'height'],
        },
        p = {
          color: 'colors',
          backgroundColor: 'colors',
          borderColor: 'colors',
          margin: 'space',
          marginTop: 'space',
          marginRight: 'space',
          marginBottom: 'space',
          marginLeft: 'space',
          marginX: 'space',
          marginY: 'space',
          padding: 'space',
          paddingTop: 'space',
          paddingRight: 'space',
          paddingBottom: 'space',
          paddingLeft: 'space',
          paddingX: 'space',
          paddingY: 'space',
          top: 'space',
          right: 'space',
          bottom: 'space',
          left: 'space',
          gridGap: 'space',
          gridColumnGap: 'space',
          gridRowGap: 'space',
          gap: 'space',
          columnGap: 'space',
          rowGap: 'space',
          fontFamily: 'fonts',
          fontSize: 'fontSizes',
          fontWeight: 'fontWeights',
          lineHeight: 'lineHeights',
          letterSpacing: 'letterSpacings',
          border: 'borders',
          borderTop: 'borders',
          borderRight: 'borders',
          borderBottom: 'borders',
          borderLeft: 'borders',
          borderWidth: 'borderWidths',
          borderStyle: 'borderStyles',
          borderRadius: 'radii',
          borderTopRightRadius: 'radii',
          borderTopLeftRadius: 'radii',
          borderBottomRightRadius: 'radii',
          borderBottomLeftRadius: 'radii',
          borderTopWidth: 'borderWidths',
          borderTopColor: 'colors',
          borderTopStyle: 'borderStyles',
          borderBottomWidth: 'borderWidths',
          borderBottomColor: 'colors',
          borderBottomStyle: 'borderStyles',
          borderLeftWidth: 'borderWidths',
          borderLeftColor: 'colors',
          borderLeftStyle: 'borderStyles',
          borderRightWidth: 'borderWidths',
          borderRightColor: 'colors',
          borderRightStyle: 'borderStyles',
          outlineColor: 'colors',
          boxShadow: 'shadows',
          textShadow: 'shadows',
          zIndex: 'zIndices',
          width: 'sizes',
          minWidth: 'sizes',
          maxWidth: 'sizes',
          height: 'sizes',
          minHeight: 'sizes',
          maxHeight: 'sizes',
          flexBasis: 'sizes',
          size: 'sizes',
          fill: 'colors',
          stroke: 'colors',
        },
        l = function (e, r) {
          if ('number' !== typeof r || r >= 0) return a(e, r, r);
          var o = Math.abs(r),
            t = a(e, o, o);
          return 'string' === typeof t ? '-' + t : -1 * t;
        },
        c = [
          'margin',
          'marginTop',
          'marginRight',
          'marginBottom',
          'marginLeft',
          'marginX',
          'marginY',
          'top',
          'bottom',
          'left',
          'right',
        ].reduce(function (e, r) {
          var o;
          return t({}, e, (((o = {})[r] = l), o));
        }, {});
      r.a = function e(r) {
        return function (o) {
          void 0 === o && (o = {});
          var l = t({}, d, {}, o.theme || o),
            g = {},
            b = (function (e) {
              return function (r) {
                var o = {},
                  t = a(r, 'breakpoints', i),
                  d = [null].concat(
                    t.map(function (e) {
                      return '@media screen and (min-width: ' + e + ')';
                    })
                  );
                for (var n in e) {
                  var s = 'function' === typeof e[n] ? e[n](r) : e[n];
                  if (null != s)
                    if (Array.isArray(s))
                      for (var p = 0; p < s.slice(0, d.length).length; p++) {
                        var l = d[p];
                        l
                          ? ((o[l] = o[l] || {}),
                            null != s[p] && (o[l][n] = s[p]))
                          : (o[n] = s[p]);
                      }
                    else o[n] = s;
                }
                return o;
              };
            })('function' === typeof r ? r(l) : r)(l);
          for (var f in b) {
            var m = b[f],
              u = 'function' === typeof m ? m(l) : m;
            if ('variant' !== f)
              if (u && 'object' === typeof u) g[f] = e(u)(l);
              else {
                var h = a(n, f, f),
                  y = a(p, h),
                  S = a(l, y, a(l, h, {})),
                  x = a(c, h, a)(S, u, u);
                if (s[h])
                  for (var R = s[h], w = 0; w < R.length; w++) g[R[w]] = x;
                else g[h] = x;
              }
            else g = t({}, g, {}, e(a(l, u))(l));
          }
          return g;
        };
      };
    },
    za5s: function (e, r, o) {
      'use strict';
      o.d(r, 'b', function () {
        return B;
      }),
        o.d(r, 'c', function () {
          return z;
        }),
        o.d(r, 'a', function () {
          return L;
        });
      var t = o('EwLn'),
        a = {
          width: {
            property: 'width',
            scale: 'sizes',
            transform: function (e, r) {
              return Object(t.d)(
                r,
                e,
                !(function (e) {
                  return 'number' === typeof e && !isNaN(e);
                })(e) || e > 1
                  ? e
                  : 100 * e + '%'
              );
            },
          },
          height: { property: 'height', scale: 'sizes' },
          minWidth: { property: 'minWidth', scale: 'sizes' },
          minHeight: { property: 'minHeight', scale: 'sizes' },
          maxWidth: { property: 'maxWidth', scale: 'sizes' },
          maxHeight: { property: 'maxHeight', scale: 'sizes' },
          size: { properties: ['width', 'height'], scale: 'sizes' },
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          display: !0,
          verticalAlign: !0,
        },
        i = Object(t.e)(a),
        d = {
          color: { property: 'color', scale: 'colors' },
          backgroundColor: { property: 'backgroundColor', scale: 'colors' },
          opacity: !0,
        };
      d.bg = d.backgroundColor;
      var n = Object(t.e)(d),
        s = {
          fontFamily: { property: 'fontFamily', scale: 'fonts' },
          fontSize: {
            property: 'fontSize',
            scale: 'fontSizes',
            defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72],
          },
          fontWeight: { property: 'fontWeight', scale: 'fontWeights' },
          lineHeight: { property: 'lineHeight', scale: 'lineHeights' },
          letterSpacing: { property: 'letterSpacing', scale: 'letterSpacings' },
          textAlign: !0,
          fontStyle: !0,
        },
        p = Object(t.e)(s),
        l = Object(t.e)({
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: !0,
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
        }),
        c = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        g = {
          gridGap: {
            property: 'gridGap',
            scale: 'space',
            defaultScale: c.space,
          },
          gridColumnGap: {
            property: 'gridColumnGap',
            scale: 'space',
            defaultScale: c.space,
          },
          gridRowGap: {
            property: 'gridRowGap',
            scale: 'space',
            defaultScale: c.space,
          },
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridAutoRows: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        b = Object(t.e)(g),
        f = {
          border: { property: 'border', scale: 'borders' },
          borderWidth: { property: 'borderWidth', scale: 'borderWidths' },
          borderStyle: { property: 'borderStyle', scale: 'borderStyles' },
          borderColor: { property: 'borderColor', scale: 'colors' },
          borderRadius: { property: 'borderRadius', scale: 'radii' },
          borderTop: { property: 'borderTop', scale: 'borders' },
          borderTopLeftRadius: {
            property: 'borderTopLeftRadius',
            scale: 'radii',
          },
          borderTopRightRadius: {
            property: 'borderTopRightRadius',
            scale: 'radii',
          },
          borderRight: { property: 'borderRight', scale: 'borders' },
          borderBottom: { property: 'borderBottom', scale: 'borders' },
          borderBottomLeftRadius: {
            property: 'borderBottomLeftRadius',
            scale: 'radii',
          },
          borderBottomRightRadius: {
            property: 'borderBottomRightRadius',
            scale: 'radii',
          },
          borderLeft: { property: 'borderLeft', scale: 'borders' },
          borderX: {
            properties: ['borderLeft', 'borderRight'],
            scale: 'borders',
          },
          borderY: {
            properties: ['borderTop', 'borderBottom'],
            scale: 'borders',
          },
          borderTopWidth: { property: 'borderTopWidth', scale: 'borderWidths' },
          borderTopColor: { property: 'borderTopColor', scale: 'colors' },
          borderTopStyle: { property: 'borderTopStyle', scale: 'borderStyles' },
        };
      (f.borderTopLeftRadius = {
        property: 'borderTopLeftRadius',
        scale: 'radii',
      }),
        (f.borderTopRightRadius = {
          property: 'borderTopRightRadius',
          scale: 'radii',
        }),
        (f.borderBottomWidth = {
          property: 'borderBottomWidth',
          scale: 'borderWidths',
        }),
        (f.borderBottomColor = {
          property: 'borderBottomColor',
          scale: 'colors',
        }),
        (f.borderBottomStyle = {
          property: 'borderBottomStyle',
          scale: 'borderStyles',
        }),
        (f.borderBottomLeftRadius = {
          property: 'borderBottomLeftRadius',
          scale: 'radii',
        }),
        (f.borderBottomRightRadius = {
          property: 'borderBottomRightRadius',
          scale: 'radii',
        }),
        (f.borderLeftWidth = {
          property: 'borderLeftWidth',
          scale: 'borderWidths',
        }),
        (f.borderLeftColor = { property: 'borderLeftColor', scale: 'colors' }),
        (f.borderLeftStyle = {
          property: 'borderLeftStyle',
          scale: 'borderStyles',
        }),
        (f.borderRightWidth = {
          property: 'borderRightWidth',
          scale: 'borderWidths',
        }),
        (f.borderRightColor = {
          property: 'borderRightColor',
          scale: 'colors',
        }),
        (f.borderRightStyle = {
          property: 'borderRightStyle',
          scale: 'borderStyles',
        });
      var m = Object(t.e)(f),
        u = {
          background: !0,
          backgroundImage: !0,
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
        };
      (u.bgImage = u.backgroundImage),
        (u.bgSize = u.backgroundSize),
        (u.bgPosition = u.backgroundPosition),
        (u.bgRepeat = u.backgroundRepeat);
      var h = Object(t.e)(u),
        y = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        S = {
          position: !0,
          zIndex: { property: 'zIndex', scale: 'zIndices' },
          top: { property: 'top', scale: 'space', defaultScale: y.space },
          right: { property: 'right', scale: 'space', defaultScale: y.space },
          bottom: { property: 'bottom', scale: 'space', defaultScale: y.space },
          left: { property: 'left', scale: 'space', defaultScale: y.space },
        },
        x = Object(t.e)(S),
        R = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        w = function (e) {
          return 'number' === typeof e && !isNaN(e);
        },
        j = function (e, r) {
          if (!w(e)) return Object(t.d)(r, e, e);
          var o = e < 0,
            a = Math.abs(e),
            i = Object(t.d)(r, a, a);
          return w(i) ? i * (o ? -1 : 1) : o ? '-' + i : i;
        },
        O = {};
      (O.margin = {
        margin: {
          property: 'margin',
          scale: 'space',
          transform: j,
          defaultScale: R.space,
        },
        marginTop: {
          property: 'marginTop',
          scale: 'space',
          transform: j,
          defaultScale: R.space,
        },
        marginRight: {
          property: 'marginRight',
          scale: 'space',
          transform: j,
          defaultScale: R.space,
        },
        marginBottom: {
          property: 'marginBottom',
          scale: 'space',
          transform: j,
          defaultScale: R.space,
        },
        marginLeft: {
          property: 'marginLeft',
          scale: 'space',
          transform: j,
          defaultScale: R.space,
        },
        marginX: {
          properties: ['marginLeft', 'marginRight'],
          scale: 'space',
          transform: j,
          defaultScale: R.space,
        },
        marginY: {
          properties: ['marginTop', 'marginBottom'],
          scale: 'space',
          transform: j,
          defaultScale: R.space,
        },
      }),
        (O.margin.m = O.margin.margin),
        (O.margin.mt = O.margin.marginTop),
        (O.margin.mr = O.margin.marginRight),
        (O.margin.mb = O.margin.marginBottom),
        (O.margin.ml = O.margin.marginLeft),
        (O.margin.mx = O.margin.marginX),
        (O.margin.my = O.margin.marginY),
        (O.padding = {
          padding: {
            property: 'padding',
            scale: 'space',
            defaultScale: R.space,
          },
          paddingTop: {
            property: 'paddingTop',
            scale: 'space',
            defaultScale: R.space,
          },
          paddingRight: {
            property: 'paddingRight',
            scale: 'space',
            defaultScale: R.space,
          },
          paddingBottom: {
            property: 'paddingBottom',
            scale: 'space',
            defaultScale: R.space,
          },
          paddingLeft: {
            property: 'paddingLeft',
            scale: 'space',
            defaultScale: R.space,
          },
          paddingX: {
            properties: ['paddingLeft', 'paddingRight'],
            scale: 'space',
            defaultScale: R.space,
          },
          paddingY: {
            properties: ['paddingTop', 'paddingBottom'],
            scale: 'space',
            defaultScale: R.space,
          },
        }),
        (O.padding.p = O.padding.padding),
        (O.padding.pt = O.padding.paddingTop),
        (O.padding.pr = O.padding.paddingRight),
        (O.padding.pb = O.padding.paddingBottom),
        (O.padding.pl = O.padding.paddingLeft),
        (O.padding.px = O.padding.paddingX),
        (O.padding.py = O.padding.paddingY);
      var v = Object(t.e)(O.margin),
        C = Object(t.e)(O.padding),
        B =
          (Object(t.a)(v, C),
          Object(t.e)({
            boxShadow: { property: 'boxShadow', scale: 'shadows' },
            textShadow: { property: 'textShadow', scale: 'shadows' },
          })),
        k = o('OJSm'),
        z = function (e) {
          var r,
            o,
            a = e.scale,
            i = e.prop,
            d = void 0 === i ? 'variant' : i,
            n = e.variants,
            s = void 0 === n ? {} : n,
            p = e.key;
          ((o = Object.keys(s).length
            ? function (e, r, o) {
                return Object(k.a)(Object(t.d)(r, e, null))(o.theme);
              }
            : function (e, r) {
                return Object(t.d)(r, e, null);
              }).scale = a || p),
            (o.defaults = s);
          var l = (((r = {})[d] = o), r);
          return Object(t.b)(l);
        },
        L =
          (z({ key: 'buttons' }),
          z({ key: 'textStyles', prop: 'textStyle' }),
          z({ key: 'colorStyles', prop: 'colors' }),
          i.width,
          i.height,
          i.minWidth,
          i.minHeight,
          i.maxWidth,
          i.maxHeight,
          i.size,
          i.verticalAlign,
          i.display,
          i.overflow,
          i.overflowX,
          i.overflowY,
          n.opacity,
          p.fontSize,
          p.fontFamily,
          p.fontWeight,
          p.lineHeight,
          p.textAlign,
          p.fontStyle,
          p.letterSpacing,
          l.alignItems);
      l.alignContent,
        l.justifyItems,
        l.justifyContent,
        l.flexWrap,
        l.flexDirection,
        l.flex,
        l.flexGrow,
        l.flexShrink,
        l.flexBasis,
        l.justifySelf,
        l.alignSelf,
        l.order,
        b.gridGap,
        b.gridColumnGap,
        b.gridRowGap,
        b.gridColumn,
        b.gridRow,
        b.gridAutoFlow,
        b.gridAutoColumns,
        b.gridAutoRows,
        b.gridTemplateColumns,
        b.gridTemplateRows,
        b.gridTemplateAreas,
        b.gridArea,
        m.borderWidth,
        m.borderStyle,
        m.borderColor,
        m.borderTop,
        m.borderRight,
        m.borderBottom,
        m.borderLeft,
        m.borderRadius,
        h.backgroundImage,
        h.backgroundSize,
        h.backgroundPosition,
        h.backgroundRepeat,
        x.zIndex,
        x.top,
        x.right,
        x.bottom,
        x.left;
    },
  },
]);
