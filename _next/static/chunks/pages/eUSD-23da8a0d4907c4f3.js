(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3374],
  {
    60194: function (e, s, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/eUSD",
        function () {
          return n(65940);
        },
      ]);
    },
    23333: function (e, s, n) {
      "use strict";
      n.d(s, {
        Z: function () {
          return l;
        },
      });
      var a = n(85893),
        r = n(37923),
        i = n.n(r),
        o = n(41664),
        t = n.n(o),
        d = n(67294),
        c = n(17883);
      function l(e) {
        let { mode: s } = (0, d.useContext)(c.S),
          { id: n } = e,
          [r, o] = (0, d.useState)(!1);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className:
              1 == s
                ? "".concat(i().footer, " ").concat(i().footer_dark)
                : "dashboard" == n
                ? "".concat(i().footer, " ")
                : "".concat(i().footer, " ").concat(i().footerW),
            children: (0, a.jsxs)("div", {
              className: "".concat(
                i().bottom,
                " ",
                "section",
                " ",
                "justify_space_between"
              ),
              children: [
                (0, a.jsxs)("div", {
                  className: "".concat(
                    i().alingCenter,
                    " ",
                    "flex_align_center"
                  ),
                  children: [
                    (0, a.jsxs)("div", {
                      className: "".concat(
                        i().logo,
                        " ",
                        "justify_space_between"
                      ),
                      children: [
                        "dashboard" == n
                          ? (0, a.jsx)("img", {
                              src: "/images/icon/lybra.svg",
                              alt: "icon",
                            })
                          : (0, a.jsx)("img", {
                              src: "/images/logo.png",
                              style: { width: "32px" },
                              alt: "icon",
                            }),
                        (0, a.jsx)("span", { children: "Lybra Finance" }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "".concat(i().menu),
                      children: [
                        (0, a.jsx)(t(), {
                          href: "/",
                          children: (0, a.jsx)("span", {
                            className: "Home" == n ? i().active : "",
                            children: "Home",
                          }),
                        }),
                        (0, a.jsx)(t(), {
                          href: "/eUSD",
                          children: (0, a.jsx)("span", {
                            className: "Eusd" == n ? i().active : "",
                            children: "eUSD",
                          }),
                        }),
                        (0, a.jsx)(t(), {
                          href: "/peUSD",
                          children: (0, a.jsx)("span", {
                            className: "peUSD" == n ? i().active : "",
                            children: "peUSD",
                          }),
                        }),


                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "".concat(i().icon),
                  children: [

                    (0, a.jsx)(t(), {
                      target: "_blank",
                      href: "https://twitter.com/LybraFinance",
                      rel: "nofollow noopener noreferrer",
                      children: (0, a.jsx)("img", {
                        src:
                          "dashboard" == n
                            ? "/images/icon/twitter.svg"
                            : "/images/icon/twitter_2.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, a.jsx)(t(), {
                      target: "_blank",
                      href: "https://t.me/",
                      rel: "nofollow noopener noreferrer",
                      children: (0, a.jsx)("img", {
                        src:
                          "dashboard" == n
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
    65940: function (e, s, n) {
      "use strict";
      n.r(s),
        n.d(s, {
          default: function () {
            return u;
          },
        });
      var a = n(85893),
        r = n(30051),
        i = n(18325),
        o = n.n(i),
        t = n(67294),
        d = n(23333),
        c = n(2711),
        l = n.n(c);
      n(21496);
      var _ = n(17883);
      function u() {
        let { mode: e } = (0, t.useContext)(_.S);
        return (
          (0, t.useEffect)(() => {
            l().init({ duration: 800, delay: 0, easing: "ease-in-out" });
          }),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.Z, { id: "Eusd" }),
              (0, a.jsxs)("div", {
                className:
                  0 == e
                    ? "".concat(o().eusdMain)
                    : "".concat(o().eusdMain, " ").concat(o().eusdMain_dark),
                children: [
                  (0, a.jsx)("div", {
                    className: o().eusd,
                    children: (0, a.jsx)("div", {
                      className: o().eusdtop,
                      children: (0, a.jsxs)("div", {
                        className: "section justify_space_between",
                        children: [
                          (0, a.jsxs)("div", {
                            className: o().eusdTopImg,
                            children: [
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: o().img01,
                                src:
                                  0 == e
                                    ? "/images/eusd/eUSD.png"
                                    : "/images/eusd/eUSD_dark.png",
                              }),
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: o().img02,
                                src:
                                  0 == e
                                    ? "/images/eusd/eusd.svg"
                                    : "/images/eusd/eusd_dark.svg",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: o().info,
                            "data-aos": "fade-left",
                            children: [
                              (0, a.jsx)("h2", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    "The World's First Interest-Bearing Stablecoin<br/> Backed by LST",
                                },
                              }),
                              (0, a.jsx)("p", {
                                children:
                                  "eUSD is a decentralized, unbiased, and 1:1 USD-hard-pegged stablecoin. Any individual and business can hold eUSD to receive a high interest rate.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className:
                      0 == e
                        ? "".concat(o().eusd)
                        : "".concat(o().eusd, " ").concat(o().eusd_dark),
                    style: { background: "#C8DAF3" },
                    children: (0, a.jsx)("div", {
                      className: "".concat(o().yield, " ", "section"),
                      children: (0, a.jsxs)("div", {
                        className: "".concat(
                          o().list,
                          " ",
                          "justify_align_center"
                        ),
                        children: [
                          (0, a.jsxs)("div", {
                            className: o().item,
                            "data-aos": "fade-up",
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/eusd/eusd01.svg",
                                }),
                              }),
                              (0, a.jsx)("p", { children: "Interest Bearing" }),
                              (0, a.jsx)("span", {
                                children:
                                  "Unlike USDT, USDC, TUSD, LUSD and DAI, eUSD is yield-bearing, with APY approx 8%.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: o().item,
                            "data-aos": "fade-up",
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/eusd/eusd02.svg",
                                }),
                              }),
                              (0, a.jsx)("p", {
                                children: "Censorship Resistance",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "eUSD is a censorship-resistant, 100% decentralized, fair and transparent stablecoin built on the Lybra Finance protocol.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: o().item,
                            "data-aos": "fade-up",
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/eusd/eusd03.svg",
                                }),
                              }),
                              (0, a.jsx)("p", {
                                children: "Over-collateralized",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "Each 1 eUSD is backed by at least $1.5 worth of ETH/LST as collateral, ensuring stability, resulting in a minimum collateral ratio of 150%.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: o().item,
                            "data-aos": "fade-up",
                            children: [
                              (0, a.jsx)("div", {
                                children: (0, a.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/eusd/eusd04.svg",
                                }),
                              }),
                              (0, a.jsx)("p", {
                                children: "Peg Stability Mechanism",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "Lybra Stability Fund is utilizing the excess eUSD that accumulates from the Advanced Vesting Bounty and the dLP Bounty to maintain the eUSD peg.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(d.Z, { id: "Eusd" }),
            ],
          })
        );
      }
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
      return e((e.s = 60194));
    }),
      (_N_E = e.O());
  },
]);
