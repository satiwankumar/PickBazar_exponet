_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [30],
  {
    I0VG: function (e, t, i) {
      'use strict';
      i.r(t);
      var n = i('q1tI'),
        a = i.n(n),
        l = i('nOHt'),
        c = i('Bo8V'),
        r = i('ZNCQ'),
        o = i('ddIo'),
        u = i('kNTC'),
        p = i('e3cP'),
        d = i('yWJx'),
        s = i('j5Ri'),
        y = i('LzHB'),
        T = i('NuC5'),
        w = i('GOnK'),
        f = i('hD4N'),
        v = i('OKUF'),
        m = a.a.createElement;
      t.default = Object(r.a)(function (e) {
        var t = e.deviceType,
          i = Object(l.useRouter)().query,
          n = a.a.useRef(null);
        return (
          a.a.useEffect(
            function () {
              (i.text || i.category) &&
                n.current &&
                window.scrollTo({
                  top: n.current.offsetTop - 110,
                  behavior: 'smooth',
                });
            },
            [i]
          ),
          m(
            a.a.Fragment,
            null,
            m(o.a, {
              title: 'Filters - Exponent',
              description: 'Filters Details',
            }),
            m(
              c.a,
              null,
              m(d.a, {
                intlTitleId: 'groceriesTitle',
                intlDescriptionId: 'groceriesSubTitle',
                imageUrl: 'https://www.exponet.ca/images/background/intro.jpg',
              }),
              t.desktop
                ? m(
                    a.a.Fragment,
                    null,
                    m(
                      w.c,
                      null,
                      m(u.a, { items: v.a }),
                      m(s.a, { type: '1', deviceType: t })
                    ),
                    m(
                      w.e,
                      null,
                      m(
                        'div',
                        { style: { margin: '0 -10px' } },
                        m(p.a, { deviceType: t, data: f.a })
                      )
                    ),
                    m(
                      w.b,
                      null,
                      m(w.h, null, m(s.a, { type: '1', deviceType: t })),
                      m(
                        w.a,
                        null,
                        m(
                          'div',
                          { ref: n },
                          m(y.a, { type: '1', deviceType: t, fetchLimit: 16 })
                        )
                      )
                    )
                  )
                : m(
                    w.b,
                    null,
                    m(u.a, { items: v.a }),
                    m(s.a, { type: '1', deviceType: t }),
                    m(
                      w.e,
                      null,
                      m(
                        'div',
                        { style: { margin: '0 -10px' } },
                        m(p.a, { deviceType: t, data: f.a })
                      )
                    ),
                    m(
                      w.a,
                      { style: { width: '100%' } },
                      m(y.a, { type: '1', deviceType: t, fetchLimit: 16 })
                    )
                  ),
              m(T.a, { deviceType: t })
            )
          )
        );
      });
    },
    JOJE: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/filters',
        function () {
          return i('I0VG');
        },
      ]);
    },
  },
  [['JOJE', 1, 0, 7, 2, 3, 5, 4, 6, 8, 9, 12, 11, 10, 13, 14, 15, 16, 17, 18]],
]);