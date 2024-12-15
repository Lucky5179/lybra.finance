(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9893],
  {
    61061: function (e, s, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/peUSD",
        function () {
          return i(4443);
        },
      ]);
    },
    23333: function (e, s, i) {
      "use strict";
      i.d(s, {
        Z: function () {
          return l;
        },
      });
      var c = i(85893),
        a = i(37923),
        r = i.n(a),
        n = i(41664),
        o = i.n(n),
        t = i(67294),
        d = i(17883);
      function l(e) {
        let { mode: s } = (0, t.useContext)(d.S),
          { id: i } = e,
          [a, n] = (0, t.useState)(!1);
        return (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)("div", {
            className:
              1 == s
                ? "".concat(r().footer, " ").concat(r().footer_dark)
                : "dashboard" == i
                ? "".concat(r().footer, " ")
                : "".concat(r().footer, " ").concat(r().footerW),
            children: (0, c.jsxs)("div", {
              className: "".concat(
                r().bottom,
                " ",
                "section",
                " ",
                "justify_space_between"
              ),
              children: [
                (0, c.jsxs)("div", {
                  className: "".concat(
                    r().alingCenter,
                    " ",
                    "flex_align_center"
                  ),
                  children: [
                    (0, c.jsxs)("div", {
                      className: "".concat(
                        r().logo,
                        " ",
                        "justify_space_between"
                      ),
                      children: [
                        "dashboard" == i
                          ? (0, c.jsx)("img", {
                              src: "/images/icon/lybra.svg",
                              alt: "icon",
                            })
                          : (0, c.jsx)("img", {
                              src: "/images/logo.png",
                              style: { width: "32px" },
                              alt: "icon",
                            }),
                        (0, c.jsx)("span", { children: "Lybra Finance" }),
                      ],
                    }),
                    (0, c.jsxs)("div", {
                      className: "".concat(r().menu),
                      children: [
                        (0, c.jsx)(o(), {
                          href: "/",
                          children: (0, c.jsx)("span", {
                            className: "Home" == i ? r().active : "",
                            children: "Home",
                          }),
                        }),
                        (0, c.jsx)(o(), {
                          href: "/eUSD",
                          children: (0, c.jsx)("span", {
                            className: "Eusd" == i ? r().active : "",
                            children: "eUSD",
                          }),
                        }),
                        (0, c.jsx)(o(), {
                          href: "/peUSD",
                          children: (0, c.jsx)("span", {
                            className: "peUSD" == i ? r().active : "",
                            children: "peUSD",
                          }),
                        }),

        

                      ],
                    }),
                  ],
                }),
                (0, c.jsxs)("div", {
                  className: "".concat(r().icon),
                  children: [
                    (0, c.jsx)(o(), {
                      target: "_blank",
                      href: "https://github.com/LybraFinance/LybraV2",
                      rel: "nofollow noopener noreferrer",
                      children: (0, c.jsx)("img", {
                        src:
                          "dashboard" == i
                            ? "/images/icon/gitbook.svg"
                            : "/images/icon/gitbook_2.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, c.jsx)(o(), {
                      target: "_blank",
                      href: "https://twitter.com/LybraFinance",
                      rel: "nofollow noopener noreferrer",
                      children: (0, c.jsx)("img", {
                        src:
                          "dashboard" == i
                            ? "/images/icon/twitter.svg"
                            : "/images/icon/twitter_2.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, c.jsx)(o(), {
                      target: "_blank",
                      href: "https://t.me/",
                      rel: "nofollow noopener noreferrer",
                      children: (0, c.jsx)("img", {
                        src:
                          "dashboard" == i
                            ? "/images/icon/telegram.svg"
                            : "/images/icon/telegram_2.svg",
                        alt: "icon",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    4443: function (e, s, i) {
      "use strict";
      i.r(s),
        i.d(s, {
          default: function () {
            return g;
          },
        });
      var c = i(85893),
        a = i(30051),
        r = i(18325),
        n = i.n(r),
        o = i(67294),
        t = i(17883),
        d = i(23333),
        l = i(2711),
        m = i.n(l);
      function g() {
        let { mode: e } = (0, o.useContext)(t.S);
        return (
          (0, o.useEffect)(() => {
            m().init({ duration: 800, delay: 0, easing: "ease-in-out" });
          }),
          (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(a.Z, { id: "peUSD" }),
              (0, c.jsxs)("div", {
                className:
                  0 == e
                    ? "".concat(n().peusdMain)
                    : "".concat(n().peusdMain, " ").concat(n().peusdMain_dark),
                children: [
                  (0, c.jsx)("div", {
                    className: n().eusd,
                    style: { background: "#F5FFF8" },
                    children: (0, c.jsx)("div", {
                      className: ""
                        .concat(n().eusdtop, " ")
                        .concat(n().peusdtop),
                      children: (0, c.jsxs)("div", {
                        className: "section justify_space_between",
                        style: { flexWrap: "wrap" },
                        children: [
                          (0, c.jsxs)("div", {
                            className: "".concat(n().eusdTopImg),
                            children: [
                              (0, c.jsx)("img", {
                                alt: "icon",
                                className: n().img01,
                                src:
                                  0 == e
                                    ? "/images/eusd/peUSD.png"
                                    : "/images/eusd/peUSD_dark.png",
                              }),
                              (0, c.jsx)("img", {
                                alt: "icon",
                                className: n().img02,
                                src: "/images/eusd/peUSD.svg",
                              }),
                            ],
                          }),
                          (0, c.jsxs)("div", {
                            className: n().info,
                            "data-aos": "fade-left",
                            children: [
                              (0, c.jsx)("h2", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    "The DeFi Utility Version of eUSD, built for Omnichain",
                                },
                              }),
                              (0, c.jsx)("p", {
                                children:
                                  "peUSD can be minted directly by Non-Rebase LST or converted from eUSD always at 1:1 ratio through Lybra protocol. As an Omnichain Fungible Token, peUSD is compatible with most DeFi protocols. For users minting peUSD from Non-Rebase LSTs, they enjoy the advantages of peUSD while their collateral appreciates in value.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, c.jsx)("div", {
                    className: n().peUSD,
                    children: (0, c.jsxs)("div", {
                      className: " section",
                      children: [
                        (0, c.jsxs)("div", {
                          className: "".concat(n().peUSDtable),
                          children: [
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item, " ")
                                .concat(n().itemTopNone),
                              children: [
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                }),
                                (0, c.jsxs)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().title),
                                  children: [
                                    (0, c.jsx)("img", {
                                      alt: "peUSD",
                                      src: "/images/icon/peUSD.svg",
                                    }),
                                    " peUSD",
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: "".concat(n().title),
                                  children: [
                                    (0, c.jsx)("img", {
                                      alt: "peUSD",
                                      src: "/images/icon/eUSD.svg",
                                    }),
                                    "eUSD",
                                  ],
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr6, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "How to Acquire?",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: "Converted From Minted eUSD",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    "Minted From ",
                                    (0, c.jsx)("br", {}),
                                    "Non Rebase LST",
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    "Purchased From ",
                                    (0, c.jsx)("br", {}),
                                    "Open Market",
                                  ],
                                }),
                                (0, c.jsx)("div", {
                                  children: "Minted on Lybra",
                                }),
                                (0, c.jsxs)("div", {
                                  children: [
                                    "Purchased From ",
                                    (0, c.jsx)("br", {}),
                                    "Open Market",
                                  ],
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr6, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Interest Bearing",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    (0, c.jsx)("img", {
                                      src: "images/eusd/s.svg",
                                      alt: "icon",
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "showTip",
                                      style: {
                                        marginTop: "-18px",
                                        position: "absolute",
                                        marginLeft: "40px",
                                      },
                                      children: (0, c.jsxs)("div", {
                                        className: "qaIcon",
                                        children: [
                                          (0, c.jsx)("img", {
                                            src:
                                              0 == e
                                                ? "/images/icon/qa.svg"
                                                : "/images/icon/qa_dark.svg",
                                            alt: "qa",
                                          }),
                                          (0, c.jsxs)("div", {
                                            className: "tipMain",
                                            children: [
                                              (0, c.jsx)("div", {
                                                className: "tip-trangle-bottom",
                                              }),
                                              "Interest Realized Upon Converting Back to eUSD",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr6, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "DeFi Friendly",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr6, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Omnichain",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20, " "),
                                  children: "Collateral Ratio",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: "150%",
                                }),
                                (0, c.jsx)("div", { children: "150%" }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr6, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Fee",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: "0",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    "1.5%",
                                    (0, c.jsx)("div", {
                                      className: "showTip",
                                      style: { marginTop: "-18px" },
                                      children: (0, c.jsxs)("div", {
                                        className: "qaIcon",
                                        children: [
                                          (0, c.jsx)("img", {
                                            src:
                                              0 == e
                                                ? "/images/icon/qa.svg"
                                                : "/images/icon/qa_dark.svg",
                                            alt: "qa",
                                          }),
                                          (0, c.jsxs)("div", {
                                            className: "tipMain",
                                            children: [
                                              (0, c.jsx)("div", {
                                                className: "tip-trangle-bottom",
                                              }),
                                              "1.5% Borrowing APY",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: "0",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    "1.5%",
                                    (0, c.jsx)("div", {
                                      className: "showTip",
                                      style: { marginTop: "-18px" },
                                      children: (0, c.jsxs)("div", {
                                        className: "qaIcon",
                                        children: [
                                          (0, c.jsx)("img", {
                                            src:
                                              0 == e
                                                ? "/images/icon/qa.svg"
                                                : "/images/icon/qa_dark.svg",
                                            alt: "qa",
                                          }),
                                          (0, c.jsxs)("div", {
                                            className: "tipMain",
                                            children: [
                                              (0, c.jsx)("div", {
                                                className: "tip-trangle-bottom",
                                              }),
                                              "1.5%  Service Fee of Annual eUSD Circulation",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("div", { children: "0" }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item, "  ")
                                .concat(n().itemBottomNone),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Purpose",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children:
                                    "Lending, borrowing, swapping, trading pairs, etc.",
                                }),
                                (0, c.jsx)("div", {
                                  children:
                                    "Holding For Real Yield, Saving Account",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsxs)("div", {
                          className: "".concat(n().peUSDtableH5),
                          children: [
                            (0, c.jsx)("div", {
                              className: ""
                                .concat(n().fr1, " ")
                                .concat(n().item, " ")
                                .concat(n().itemTopNone),
                              children: (0, c.jsxs)("div", {
                                className: " ".concat(n().title),
                                children: [
                                  (0, c.jsx)("img", {
                                    alt: "peUSD",
                                    src: "/images/icon/peUSD.svg",
                                  }),
                                  " peUSD",
                                ],
                              }),
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr4, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "How to Acquire?",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: "Converted From Minted eUSD",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    "Minted From ",
                                    (0, c.jsx)("br", {}),
                                    "Non Rebase LST",
                                  ],
                                }),
                                (0, c.jsxs)("div", {
                                  children: [
                                    "Purchased From ",
                                    (0, c.jsx)("br", {}),
                                    "Open Market",
                                  ],
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr4, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Interest Bearing",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    (0, c.jsx)("img", {
                                      src: "images/eusd/s.svg",
                                      alt: "icon",
                                    }),
                                    (0, c.jsx)("div", {
                                      className: "showTip",
                                      style: { marginTop: "-18px" },
                                      children: (0, c.jsxs)("div", {
                                        className: "qaIcon",
                                        children: [
                                          (0, c.jsx)("img", {
                                            src:
                                              0 == e
                                                ? "/images/icon/qa.svg"
                                                : "/images/icon/qa_dark.svg",
                                            alt: "qa",
                                          }),
                                          (0, c.jsxs)("div", {
                                            className: "tipMain",
                                            children: [
                                              (0, c.jsx)("div", {
                                                className: "tip-trangle-bottom",
                                              }),
                                              "Interest Realized Upon Converting Back to eUSD",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr4, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "DeFi Friendly",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr4, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Omnichain",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr2, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20, " "),
                                  children: "Collateral Ratio",
                                }),
                                (0, c.jsx)("div", { children: "150%" }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr4, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Fee",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: "0",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    "1.5%",
                                    (0, c.jsx)("div", {
                                      className: "showTip",
                                      style: { marginTop: "-18px" },
                                      children: (0, c.jsxs)("div", {
                                        className: "qaIcon",
                                        children: [
                                          (0, c.jsx)("img", {
                                            src:
                                              0 == e
                                                ? "/images/icon/qa.svg"
                                                : "/images/icon/qa_dark.svg",
                                            alt: "qa",
                                          }),
                                          (0, c.jsxs)("div", {
                                            className: "tipMain",
                                            children: [
                                              (0, c.jsx)("div", {
                                                className: "tip-trangle-bottom",
                                              }),
                                              "1.5% Borrowing APY",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("div", { children: "0" }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr2, " ")
                                .concat(n().item, " ")
                                .concat(n().itemBottomNone),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Purpose",
                                }),
                                (0, c.jsx)("div", {
                                  children:
                                    "Lending, borrowing, swapping, trading pairs, etc.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, c.jsxs)("div", {
                          className: "".concat(n().peUSDtableH5),
                          style: { marginTop: "30px" },
                          children: [
                            (0, c.jsx)("div", {
                              className: ""
                                .concat(n().fr1, " ")
                                .concat(n().item, " ")
                                .concat(n().itemTopNone),
                              children: (0, c.jsxs)("div", {
                                className: "".concat(n().title),
                                children: [
                                  (0, c.jsx)("img", {
                                    alt: "peUSD",
                                    src: "/images/icon/eUSD.svg",
                                  }),
                                  "eUSD",
                                ],
                              }),
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "How to Acquire?",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: "Minted on Lybra",
                                }),
                                (0, c.jsxs)("div", {
                                  children: [
                                    "Purchased From ",
                                    (0, c.jsx)("br", {}),
                                    "Open Market",
                                  ],
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Interest Bearing",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/s.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "DeFi Friendly",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Omnichain",
                                }),
                                (0, c.jsx)("div", {
                                  className: n().rightBorder,
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                                (0, c.jsx)("div", {
                                  children: (0, c.jsx)("img", {
                                    src: "images/eusd/f.svg",
                                    alt: "icon",
                                  }),
                                }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr2_2, " ")
                                .concat(n().item),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20, " "),
                                  children: "Collateral Ratio",
                                }),
                                (0, c.jsx)("div", { children: "150%" }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr3, " ")
                                .concat(n().item, " ")
                                .concat(n().green),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Fee",
                                }),
                                (0, c.jsxs)("div", {
                                  className: n().rightBorder,
                                  children: [
                                    "1.5%",
                                    (0, c.jsx)("div", {
                                      className: "showTip",
                                      style: { marginTop: "-18px" },
                                      children: (0, c.jsxs)("div", {
                                        className: "qaIcon",
                                        children: [
                                          (0, c.jsx)("img", {
                                            src:
                                              0 == e
                                                ? "/images/icon/qa.svg"
                                                : "/images/icon/qa_dark.svg",
                                            alt: "qa",
                                          }),
                                          (0, c.jsxs)("div", {
                                            className: "tipMain",
                                            children: [
                                              (0, c.jsx)("div", {
                                                className: "tip-trangle-bottom",
                                              }),
                                              "1.5%  Service Fee of Annual eUSD Circulation",
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, c.jsx)("div", { children: "0" }),
                              ],
                            }),
                            (0, c.jsxs)("div", {
                              className: ""
                                .concat(n().fr2_2, " ")
                                .concat(n().item, " ")
                                .concat(n().itemBottomNone),
                              children: [
                                (0, c.jsx)("div", {
                                  className: ""
                                    .concat(n().rightBorder, " ")
                                    .concat(n().font20),
                                  children: "Purpose",
                                }),
                                (0, c.jsx)("div", {
                                  children:
                                    "Holding For Real Yield, Saving Account",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, c.jsx)(d.Z, { id: "peUSD" }),
            ],
          })
        );
      }
      i(21496);
    },
    37923: function (e) {
      e.exports = {
        footer: "footer_footer__pOtN3",
        fobottom: "footer_fobottom__s_Jr4",
        icon: "footer_icon__O_htr",
        logo: "footer_logo__di90S",
        menu: "footer_menu__Rh4hE",
        bottom: "footer_bottom__JH8gl",
        footerW: "footer_footerW__3f5is",
        govergnance: "footer_govergnance__XgOtZ",
        disconnectMain: "footer_disconnectMain__V59Oo",
        accountDis: "footer_accountDis__aU4bm",
        show: "footer_show__DvHW1",
        hidden: "footer_hidden__6xqQR",
        footer_dark: "footer_footer_dark__4R_fi",
        alingCenter: "footer_alingCenter__c0_yW",
      };
    },
    18325: function (e) {
      e.exports = {
        eusd: "eusd_eusd__XY3jE",
        eusdtop: "eusd_eusdtop__kQQAN",
        eusdTopImg: "eusd_eusdTopImg__TXU5K",
        img01: "eusd_img01___GAIF",
        img02: "eusd_img02__n2yrp",
        rotate: "eusd_rotate__FnitF",
        eusd01: "eusd_eusd01__yay11",
        eusd02: "eusd_eusd02__BsbJF",
        eusd03: "eusd_eusd03__XUues",
        info: "eusd_info__RgkzI",
        peusdtop: "eusd_peusdtop__FsYjg",
        peUSDVideo: "eusd_peUSDVideo__ef3QH",
        yield: "eusd_yield__PXJ58",
        list: "eusd_list__7MFTL",
        item: "eusd_item__1WGbP",
        peUSD: "eusd_peUSD__4XngE",
        peUSDtable: "eusd_peUSDtable__Rf63F",
        rightBorder: "eusd_rightBorder__C3_Hu",
        title: "eusd_title__eV_FG",
        fr3: "eusd_fr3__zMbmy",
        fr6: "eusd_fr6__W0vDg",
        green: "eusd_green__2yHJ9",
        font20: "eusd_font20__DnYaq",
        peUSDtableH5: "eusd_peUSDtableH5__1FAoS",
        eusdMain_dark: "eusd_eusdMain_dark__E1cIh",
        eusd_dark: "eusd_eusd_dark__Q4lCV",
        peusdMain_dark: "eusd_peusdMain_dark__ZUL2_",
        itemTopNone: "eusd_itemTopNone__Nzxhr",
        itemBottomNone: "eusd_itemBottomNone__N3mGZ",
        logo: "eusd_logo__jSbBX",
        fr1: "eusd_fr1__mEe96",
        fr2: "eusd_fr2__pLsY4",
        fr2_2: "eusd_fr2_2__FmkTp",
        fr4: "eusd_fr4__ipEXw",
      };
    },
  },
  function (e) {
    e.O(0, [8543, 8435, 51, 9774, 2888, 179], function () {
      return e((e.s = 61061));
    }),
      (_N_E = e.O());
  },
]);
