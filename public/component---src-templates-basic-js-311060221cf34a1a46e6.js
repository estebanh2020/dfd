(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "+y0T": function (e, t, a) {},
    EnjS: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return m;
        }),
        a.d(t, "query", function () {
          return s;
        });
      a("+y0T");
      var n = a("q1tI"),
        r = a.n(n),
        l = a("7oih"),
        c = a("7vrA"),
        o = a("4/Vk"),
        i = a("pJaR"),
        u = a("6+GL");
      function m(e) {
        var t = e.data,
          a = t.jupyterNotebook.metadata,
          n = a.title,
          m = a.description,
          s = a.family,
          d = a.chartType;
        return r.a.createElement(
          l.a,
          { title: n },
          r.a.createElement(o.a, { title: n, description: m, chartType: d }),
          r.a.createElement(
            c.a,
            null,
            r.a.createElement("div", {
              className: "blog-post-content",
              dangerouslySetInnerHTML: { __html: t.jupyterNotebook.html },
            })
          ),
          r.a.createElement(
            "div",
            { className: "greySection" },
            r.a.createElement(
              c.a,
              null,
              r.a.createElement(i.a, { chartFamily: s, hasGreyBackground: !0 })
            )
          ),
          r.a.createElement(c.a, null, r.a.createElement(u.a, null))
        );
      }
      var s = "3771145258";
    },
  },
]);
//# sourceMappingURL=component---src-templates-basic-js-311060221cf34a1a46e6.js.map
