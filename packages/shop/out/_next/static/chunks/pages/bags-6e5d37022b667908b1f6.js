_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [25],
  {
    '5CEl': function (e, a, t) {
      'use strict';
      t.r(a);
      var n = t('q1tI'),
        i = t.n(n),
        l = t('nOHt'),
        s = t('Bo8V'),
        c = t('ZNCQ'),
        u = t('ddIo'),
        d = t('kNTC'),
        o = t('e3cP'),
        p = t('yWJx'),
        r = t('j5Ri'),
        y = t('LzHB'),
        g = t('NuC5'),
        T = t('GOnK'),
        b = t('hD4N'),
        f = t('nLA7'),
        v = t.n(f),
        w = t('OKUF'),
        _ = i.a.createElement;
      a.default = Object(c.a)(function (e) {
        var a = e.deviceType,
          t = Object(l.useRouter)().query,
          n = i.a.useRef(null);
        return (
          i.a.useEffect(
            function () {
              (t.text || t.category) &&
                n.current &&
                window.scrollTo({
                  top: n.current.offsetTop - 110,
                  behavior: 'smooth',
                });
            },
            [t]
          ),
          _(
            i.a.Fragment,
            null,
            _(u.a, { title: 'Bags - PickBazar', description: 'Bags Details' }),
            _(
              s.a,
              null,
              _(p.a, {
                intlTitleId: 'bagsTitle',
                intlDescriptionId: 'bagsSubTitle',
                imageUrl: v.a,
              }),
              a.desktop
                ? _(
                    i.a.Fragment,
                    null,
                    _(
                      T.c,
                      null,
                      _(d.a, { items: w.a }),
                      _(r.a, { type: 'bags', deviceType: a })
                    ),
                    _(
                      T.e,
                      null,
                      _(
                        'div',
                        { style: { margin: '0 -10px' } },
                        _(o.a, { deviceType: a, data: b.a })
                      )
                    ),
                    _(
                      T.b,
                      null,
                      _(T.h, null, _(r.a, { type: 'bags', deviceType: a })),
                      _(
                        T.a,
                        null,
                        _(
                          'div',
                          { ref: n },
                          _(y.a, {
                            type: 'bags',
                            deviceType: a,
                            fetchLimit: 16,
                          })
                        )
                      )
                    )
                  )
                : _(
                    T.b,
                    null,
                    _(d.a, { items: w.a }),
                    _(r.a, { type: 'bags', deviceType: a }),
                    _(
                      T.e,
                      null,
                      _(
                        'div',
                        { style: { margin: '0 -10px' } },
                        _(o.a, { deviceType: a, data: b.a })
                      )
                    ),
                    _(
                      T.a,
                      { style: { width: '100%' } },
                      _(y.a, { type: 'bags', deviceType: a, fetchLimit: 16 })
                    )
                  ),
              _(g.a, { deviceType: a })
            )
          )
        );
      });
    },
    TcsQ: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/bags',
        function () {
          return t('5CEl');
        },
      ]);
    },
    nLA7: function (e, a) {
      e.exports =
        '/_next/static/images/Bags-da6580df7542a558a12a4399620b210d.png';
    },
  },
  [['TcsQ', 1, 0, 7, 2, 3, 5, 4, 6, 8, 9, 12, 11, 10, 13, 14, 15, 16, 17, 18]],
]);