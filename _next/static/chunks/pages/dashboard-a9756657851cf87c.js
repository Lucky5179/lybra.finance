(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8026],
  {
    51075: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/dashboard",
        function () {
          return a(16513);
        },
      ]);
    },
    23333: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return d;
        },
      });
      var t = a(85893),
        n = a(37923),
        i = a.n(n),
        c = a(41664),
        l = a.n(c),
        o = a(67294),
        r = a(17883);
      function d(e) {
        let { mode: s } = (0, o.useContext)(r.S),
          { id: a } = e,
          [n, c] = (0, o.useState)(!1);
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              1 == s
                ? "".concat(i().footer, " ").concat(i().footer_dark)
                : "dashboard" == a
                ? "".concat(i().footer, " ")
                : "".concat(i().footer, " ").concat(i().footerW),
            children: (0, t.jsxs)("div", {
              className: "".concat(
                i().bottom,
                " ",
                "section",
                " ",
                "justify_space_between"
              ),
              children: [
                (0, t.jsxs)("div", {
                  className: "".concat(
                    i().alingCenter,
                    " ",
                    "flex_align_center"
                  ),
                  children: [
                    (0, t.jsxs)("div", {
                      className: "".concat(
                        i().logo,
                        " ",
                        "justify_space_between"
                      ),
                      children: [
                        "dashboard" == a
                          ? (0, t.jsx)("img", {
                              src: "/images/icon/lybra.svg",
                              alt: "icon",
                            })
                          : (0, t.jsx)("img", {
                              src: "/images/logo.png",
                              style: { width: "32px" },
                              alt: "icon",
                            }),
                        (0, t.jsx)("span", { children: "Lybra Finance" }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "".concat(i().menu),
                      children: [
                        (0, t.jsx)(l(), {
                          href: "/",
                          children: (0, t.jsx)("span", {
                            className: "Home" == a ? i().active : "",
                            children: "Home",
                          }),
                        }),
                        (0, t.jsx)(l(), {
                          href: "/eUSD",
                          children: (0, t.jsx)("span", {
                            className: "Eusd" == a ? i().active : "",
                            children: "eUSD",
                          }),
                        }),
                        (0, t.jsx)(l(), {
                          href: "/peUSD",
                          children: (0, t.jsx)("span", {
                            className: "peUSD" == a ? i().active : "",
                            children: "peUSD",
                          }),
                        }),


                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "".concat(i().icon),
                  children: [

                    (0, t.jsx)(l(), {
                      target: "_blank",
                      href: "https://twitter.com/LybraFinance",
                      rel: "nofollow noopener noreferrer",
                      children: (0, t.jsx)("img", {
                        src:
                          "dashboard" == a
                            ? "/images/icon/twitter.svg"
                            : "/images/icon/twitter_2.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, t.jsx)(l(), {
                      target: "_blank",
                      href: "https://t.me/",
                      rel: "nofollow noopener noreferrer",
                      children: (0, t.jsx)("img", {
                        src:
                          "dashboard" == a
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
    16513: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return ee;
          },
        });
      var t = a(85893),
        n = a(30051),
        i = a(23333),
        c = a(13684),
        l = a.n(c),
        o = a(67294),
        r = a(17883),
        d = a(3627),
        u = a.n(d);
      a(41664);
      var m = a(58507),
        h = a.n(m),
        x = a(69077),
        p = a(20745);
      let g = null;
      function j(e) {
        let { content: s, duration: a, type: n } = { ...e },
          [i, c] = (0, o.useState)(!0),
          l = (e) => {
            c(!1);
          };
        return (
          setTimeout(() => {
            c(!1);
          }, a),
          (0, t.jsx)("div", {
            className: "messageTips",
            children: i
              ? (0, t.jsxs)("div", {
                  className: n,
                  children: [
                    (0, t.jsx)("div", {
                      className: "justify_align_center",
                      style: { gap: "5px" },
                      children: (0, t.jsx)("p", { children: s }),
                    }),
                    (0, t.jsx)("img", {
                      src: "/images/icon/close.svg",
                      onClick: l.bind(this),
                      alt: "icon",
                    }),
                  ],
                })
              : null,
          })
        );
      }
      var v = {
          success(e) {
            let { content: s, duration: a } = e;
            g = document.createElement("div");
            let n = (0, t.jsx)(j, { content: s, duration: a, type: "success" });
            p.createRoot(g).render(n), document.body.appendChild(g);
          },
          error(e) {
            let { content: s, duration: a } = e;
            g = document.createElement("div");
            let n = (0, t.jsx)(j, { content: s, duration: a, type: "error" });
            p.createRoot(g).render(n), document.body.appendChild(g);
          },
          warning(e) {
            let { content: s, duration: a } = e;
            g = document.createElement("div");
            let n = (0, t.jsx)(j, { content: s, duration: a, type: "warning" });
            p.createRoot(g).render(n), document.body.appendChild(g);
          },
          info(e) {
            let { content: s, duration: a } = e;
            g = document.createElement("div");
            let n = (0, t.jsx)(j, { content: s, duration: a, type: "info" });
            p.createRoot(g).render(n), document.body.appendChild(g);
          },
        },
        b = a(70794);
      function N(e) {
        let {
            mode: s,
            safeCollateralRate: a,
            collateralRatioGuardia: n,
            setTipMessage: i,
            address: c,
            eUSD: l,
            CollateralRatioGuardianAbi: d,
            eusdAbi: u,
            useETHValut: m,
          } = (0, o.useContext)(r.S),
          [p, g] = (0, o.useState)(!1),
          [j, N] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: u,
          functionName: "allowance",
          args: [c, n],
          watch: !0,
          onSuccess(e) {
            N(new b.Z(e._hex));
          },
        });
        let [S, f] = (0, o.useState)(100);
        (0, x.do)({
          address: n,
          abi: d,
          functionName: "fee",
          onSuccess(e) {
            f(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let _ = (e) => {
            e.stopPropagation();
          },
          w = (s) => {
            e.changeShowProp(s);
          },
          y = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          [L, T] = (0, o.useState)(!1),
          I = async (e) => {
            T(!L);
          },
          [E, B] = (0, o.useState)(!1),
          [k, R] = (0, o.useState)(),
          [C, D] = (0, o.useState)(),
          F = (e) => {
            R(e.target.value);
          },
          H = (e) => {
            D(e.target.value);
          };
        (0, o.useEffect)(() => {
          C > 1e3 && D(1e3);
        }, [C]);
        let [Z, U] = (0, o.useState)(!1);
        (0, x.do)({
          address: n,
          abi: d,
          functionName: "userRepaymentSettings",
          args: [c, m],
          onSuccess(e) {
            U(e.active),
              T(e.active),
              !0 == e.active &&
                (R(new b.Z(e[0]._hex).div(new b.Z(1e18)).toFixed()),
                D(new b.Z(e[1]._hex).div(new b.Z(1e18)).toFixed()));
          },
        });
        let {
          isLoading: M,
          write: A,
          data: P,
        } = (0, x.GG)({
          mode: "recklesslyUnprepared",
          address: j < 1e26 ? l : n,
          abi: j < 1e26 ? u : d,
          functionName: j < 1e26 ? "approve" : "setAutoRepayment",
          args:
            j < 1e26
              ? [
                  n,
                  "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                ]
              : [
                  [m],
                  [
                    [
                      new b.Z(k).multipliedBy(new b.Z(1e18)).toFixed(),
                      new b.Z(C).multipliedBy(new b.Z(1e18)).toFixed(),
                      L,
                    ],
                  ],
                ],
          onSuccess(e) {
            g(!0);
          },
          onError(s) {
            g(!1), e.updateIsLoading(!1);
          },
        });
        (0, x.BX)({
          hash: null == P ? void 0 : P.hash,
          onSuccess(s) {
            g(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              E
                ? i({ title: "Approve eUSD", type: "success" })
                : (L
                    ? (i({ title: "Activating CR Guardian", type: "success" }),
                      e.changeOpen(!0))
                    : (i({ title: "Turning off CR Guardian", type: "success" }),
                      e.changeOpen(!1)),
                  e.changeShowProp(!1)),
              B(!1),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 3e3);
          },
        });
        let q = async () => {
            if (L) {
              if (C && k) {
                if (C < k) {
                  v.warning({
                    content:
                      "The expectedCollateralRatio needs to be higher than the triggerCollateralRatio.",
                    duration: 5e3,
                  });
                  return;
                }
                if (k <= 150) {
                  v.warning({
                    content:
                      "The triggerCollateralRatio needs to be higher than 150%",
                    duration: 5e3,
                  });
                  return;
                }
                if (C <= 100 * a) {
                  v.warning({
                    content:
                      "The expectedCollateralRatio needs to be greater than or equal to " +
                      100 * a +
                      "%",
                    duration: 5e3,
                  });
                  return;
                }
                i({ title: "Activating CR Guardian", type: "loading" }),
                  e.updateIsLoading(!0),
                  A();
              } else {
                v.warning({
                  content:
                    "The expectedCollateralRatio needs to be higher than the triggerCollateralRatio.",
                  duration: 5e3,
                });
                return;
              }
            } else
              i({ title: "Turning off CR Guardian", type: "loading" }),
                e.updateIsLoading(!0),
                A();
          },
          O = async () => {
            B(!0),
              i({ title: "Approve eUSD", type: "loading" }),
              e.updateIsLoading(!0),
              A();
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              0 == s
                ? "".concat(h().prop)
                : "".concat(h().prop, " ").concat(h().prop_dark),
            onClick: () => w(!1),
            children: (0, t.jsxs)("div", {
              className: h().propMain,
              onClick: _.bind(this),
              children: [
                (0, t.jsxs)("div", {
                  className: "justify_space_between",
                  style: {
                    borderBottom: "1px solid #e4e1e1",
                    padding: "10px 20px",
                  },
                  children: [
                    (0, t.jsx)("p", {
                      className: h().title,
                      children: "CR GUARDIAN SETTINGS",
                    }),
                    (0, t.jsx)("div", {
                      className: h().closeIcon,
                      onClick: () => w(!1),
                      children: (0, t.jsx)("img", {
                        alt: "icon",
                        src: "/images/icon/close.svg",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: h().autoMain,
                  children: [
                    (0, t.jsxs)("div", {
                      className: h().propCenter,
                      children: [
                        (0, t.jsx)("p", {
                          style: { marginBottom: "10px" },
                          children:
                            "To reduce the risk of liquidation, you can set trigger and preferred collateral ratios. When your real-time collateral ratio falls below the trigger value, keepers will automatically help you repay a portion of your debt to increase your collateral ratio to your preferred setting.",
                        }),
                        (0, t.jsxs)("span", {
                          className: h().note,
                          children: [
                            "Please note: ",
                            (0, t.jsx)("br", {}),
                            "1. Your wallet needs to hold a minimum amount of eUSD (approved and authorised for this contract) for the Keeper to operate within the parameters set.",
                            (0, t.jsx)("br", {}),
                            "2. When auto repayment occurs, an additional service fee of ",
                            S,
                            " eUSD will be paid to the Keeper.",
                            (0, t.jsx)("br", {}),
                            "3. The Keeper is sourced from the community and is not affiliated with the Lybra team. If no calls are made, there is still a risk of liquidation.",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: h().propInfo,
                      children: [
                        (0, t.jsxs)("div", {
                          className: h().openSwitch,
                          children: [
                            (0, t.jsx)("span", { children: "CR Guardian" }),
                            (0, t.jsxs)("div", {
                              className: h().switchSpan,
                              children: [
                                (0, t.jsx)("input", {
                                  className: ""
                                    .concat(h().switch_btn, " ")
                                    .concat(h().switch_btn_animbg),
                                  type: "checkbox",
                                  checked: L,
                                  onChange: I.bind(this),
                                }),
                                L
                                  ? (0, t.jsx)("p", {
                                      className: h().open,
                                      children: "Open",
                                    })
                                  : (0, t.jsx)("p", {
                                      className: h().close,
                                      children: "Close",
                                    }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          style: { marginBottom: "16px" },
                          children: [
                            (0, t.jsx)("span", {
                              children: "Trigger Collateral Ratio",
                            }),
                            (0, t.jsxs)("div", {
                              className: h().valueInput,
                              children: [
                                (0, t.jsx)("input", {
                                  className: ""
                                    .concat(h().input, " ")
                                    .concat(h().setting),
                                  type: "number",
                                  placeholder: "e.g. 175",
                                  onWheel: (e) => e.target.blur(),
                                  onKeyDown: y.bind(this),
                                  value: k,
                                  onChange: F.bind(this),
                                }),
                                (0, t.jsx)("span", { children: "%" }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          style: { marginBottom: "16px" },
                          children: [
                            (0, t.jsx)("span", {
                              children: "Preferred Collateral Ratio",
                            }),
                            (0, t.jsxs)("div", {
                              className: h().valueInput,
                              children: [
                                (0, t.jsx)("input", {
                                  className: ""
                                    .concat(h().input, " ")
                                    .concat(h().setting),
                                  type: "number",
                                  placeholder: "e.g. 200",
                                  onWheel: (e) => e.target.blur(),
                                  onKeyDown: y.bind(this),
                                  value: C,
                                  onChange: H.bind(this),
                                }),
                                (0, t.jsx)("span", { children: "%" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: h().button,
                      children:
                        j < 1e26
                          ? (0, t.jsx)("div", {
                              className:
                                M || p ? "button disabled" : "button blue",
                              onClick: () => (M ? null : O()),
                              children:
                                M || p
                                  ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                        (0, t.jsx)("img", {
                                          alt: "icon",
                                          className: "loading",
                                          src: "/images/icon/loading.svg",
                                        }),
                                        "Approve eUSD",
                                      ],
                                    })
                                  : (0, t.jsx)(t.Fragment, {
                                      children: "Approve eUSD",
                                    }),
                            })
                          : Z || L
                          ? (0, t.jsx)("div", {
                              className:
                                M || p ? "button disabled" : "button blue",
                              onClick: () => (M ? null : q()),
                              children:
                                M || p
                                  ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                        (0, t.jsx)("img", {
                                          alt: "icon",
                                          className: "loading",
                                          src: "/images/icon/loading.svg",
                                        }),
                                        "Confirm",
                                      ],
                                    })
                                  : (0, t.jsx)(t.Fragment, {
                                      children: "Confirm",
                                    }),
                            })
                          : (0, t.jsx)("div", {
                              className: "button disabled",
                              children: "Confirm",
                            }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var S = a(97080);
      function f(e) {
        let {
            withdraw: s,
            rate: a,
            assetPrice: n,
            reBalance: i,
            mintVaultMaxSupply: c,
            poolTotalCirculation: l,
            providerList: d,
          } = e,
          {
            borrowed: m,
            ethPrice: h,
            deposited: p,
            safeCollateralRate: g,
            vaultType: j,
            coinType: v,
            useETHValut: b,
            CollateralRatioGuardianAbi: f,
            collateralRatioGuardia: _,
            address: w,
            menuIndex: y,
            mode: L,
            configurator: T,
            configuratorAbi: I,
          } = (0, o.useContext)(r.S),
          [E, B] = (0, o.useState)(!1),
          k = (e) => {
            B(e);
          },
          [R, C] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          Number(i) > Number(m) ? C(m) : C(i);
        }, [i, m]);
        let [D, F] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          d && d.amount ? (Number(i) < d.amount ? F(i) : F(d.amount)) : F(i);
        }, [i, d]);
        let [H, Z] = (0, o.useState)(!1),
          [U, M] = (0, o.useState)(!1),
          A = async (e) => {
            Z(e);
          },
          P = async (e) => {
            M(e);
          },
          [q, O] = (0, o.useState)(!1);
        (0, x.do)({
          address: _,
          abi: f,
          functionName: "userRepaymentSettings",
          args: [w, b],
          onSuccess(e) {
            O(e.active);
          },
        });
        let G = (e) => {
            O(e);
          },
          V = (e) =>
            e >= 1e9
              ? Number(e / 1e9).toLocaleString() + "B"
              : e >= 1e6
              ? Number(e / 1e6).toLocaleString() + "M"
              : Number(e).toLocaleString(),
          [W, Y] = (0, o.useState)(!1);
        return (
          (0, x.do)({
            address: T,
            abi: I,
            functionName: "getBadCollateralRatio",
            args: [b],
            onSuccess(e) {
              Y(Number(e._hex) / 1e20);
            },
          }),
          (0, t.jsxs)("div", {
            className: u().overview,
            children: [
              (0, t.jsx)("p", {
                className: "font_bold_16",
                style: { marginLeft: "8px" },
                children: "OVERVIEW",
              }),
              0 == y
                ? (0, t.jsxs)("div", {
                    className: u().dataItem,
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", { children: "Cap" }),
                      }),
                      (0, t.jsxs)("p", { children: [V(l), " / ", V(c)] }),
                    ],
                  })
                : null,
              (0, t.jsxs)("div", {
                className: u().dataItem,
                children: [
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("span", { children: "Collateral Deposited" }),
                      (0, t.jsx)("div", {
                        className: "showTip",
                        children: (0, t.jsxs)("div", {
                          className: "qaIcon",
                          children: [
                            (0, t.jsx)("img", {
                              src:
                                0 == L
                                  ? "/images/icon/qa.svg"
                                  : "/images/icon/qa_dark.svg",
                              alt: "qa",
                            }),
                            (0, t.jsxs)("div", {
                              className: "tipMain",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "tip-trangle-bottom",
                                }),
                                "Collateral Deposited: This is the amount of ETH or LST that you have deposited on Lybra Protocol in USD value based on the current market price of ETH and LST.",
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("p", {
                    children: [
                      "$",
                      Number((p * n).toFixed(2)).toLocaleString(),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: u().dataItem,
                children: [
                  (0, t.jsx)("div", {
                    children: (0, t.jsxs)("span", {
                      children: [j, " Minted / ", j, " Debt"],
                    }),
                  }),
                  (0, t.jsx)("p", {
                    children: Number(m.toFixed(2)).toLocaleString(),
                  }),
                ],
              }),
              2 == y || 3 == y
                ? (0, t.jsxs)("div", {
                    className: u().dataItem,
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsxs)("span", {
                          children: [j, " balance"],
                        }),
                      }),
                      (0, t.jsx)("p", { children: Number(i).toLocaleString() }),
                    ],
                  })
                : null,
              (0, t.jsxs)("div", {
                className: u().dataItem,
                children: [
                  (0, t.jsxs)("div", {
                    children: [
                      (0, t.jsx)("span", { children: "Collateral Ratio" }),
                      (0, t.jsx)("div", {
                        className: "showTip",
                        children: (0, t.jsxs)("div", {
                          className: "qaIcon",
                          children: [
                            (0, t.jsx)("img", {
                              src:
                                0 == L
                                  ? "/images/icon/qa.svg"
                                  : "/images/icon/qa_dark.svg",
                              alt: "qa",
                            }),
                            (0, t.jsxs)("div", {
                              className: "tipMain",
                              children: [
                                (0, t.jsx)("div", {
                                  className: "tip-trangle-bottom",
                                }),
                                "Collateral Ratio is expressed as a percentage and calculated by dividing the value of your deposited collateral in USD by the amount of your minted ",
                                j,
                                ". A lower Collateral Ratio means you have less stETH backing your ",
                                j,
                                ", which increases the risk of liquiation.",
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("p", {
                    children:
                      a > 1e3
                        ? "∞"
                        : Number(a.toFixed(2)).toLocaleString() + "%",
                  }),
                ],
              }),
              0 == y || 1 == y
                ? (0, t.jsxs)("div", {
                    className: u().dataItem,
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)("span", { children: "Liquidation Price" }),
                          (0, t.jsx)("div", {
                            className: "showTip",
                            children: (0, t.jsxs)("div", {
                              className: "qaIcon",
                              children: [
                                (0, t.jsx)("img", {
                                  src:
                                    0 == L
                                      ? "/images/icon/qa.svg"
                                      : "/images/icon/qa_dark.svg",
                                  alt: "qa",
                                }),
                                (0, t.jsxs)("div", {
                                  className: "tipMain",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "tip-trangle-bottom",
                                    }),
                                    "Liquidation Price: This is the price at which your holdings may face liquidation, should market trends adversely impact your Collateral Ratio, driving it beneath the minimum required level.",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          "$",
                          "NaN" !== ((m * W) / p).toFixed(2)
                            ? Number(((m * W) / p).toFixed(2)).toLocaleString()
                            : 0,
                        ],
                      }),
                    ],
                  })
                : null,
              0 == y
                ? (0, t.jsxs)("div", {
                    className: u().dataItem,
                    style: { borderBottom: "none" },
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                          children: "Available to Mint ",
                        }),
                      }),
                      a / 100 <= g
                        ? (0, t.jsxs)("p", { children: ["0 ", j] })
                        : "ETH" == v
                        ? (0, t.jsxs)("p", {
                            children: [
                              Number(
                                (((p * h) / g - m) * 0.99).toFixed(2)
                              ).toLocaleString(),
                              " ",
                              j,
                            ],
                          })
                        : (0, t.jsxs)("p", {
                            children: [
                              Number(
                                (((p * n) / g - m) * 0.99).toFixed(2)
                              ).toLocaleString(),
                              " ",
                              j,
                            ],
                          }),
                    ],
                  })
                : null,
              1 == y
                ? (0, t.jsxs)("div", {
                    className: u().dataItem,
                    style: { borderBottom: "none" },
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                          children: "Available to Withdraw",
                        }),
                      }),
                      (0, t.jsxs)("p", { children: [s.toFixed(4), " ", v] }),
                    ],
                  })
                : null,
              2 == y
                ? (0, t.jsxs)("div", {
                    className: u().dataItem,
                    style: { borderBottom: "none" },
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                          children: "Available to Repay",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          Number(Math.floor(100 * R) / 100).toLocaleString(),
                          " ",
                          j,
                        ],
                      }),
                    ],
                  })
                : null,
              3 == y
                ? (0, t.jsxs)("div", {
                    className: u().dataItem,
                    style: { borderBottom: "none" },
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                          children: "Available to Redeem",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        children: [
                          Number(Math.floor(100 * D) / 100).toLocaleString(),
                          " ",
                          j,
                        ],
                      }),
                    ],
                  })
                : null,
              E
                ? (0, t.jsx)(N, {
                    changeShowProp: k,
                    updateIsLoading: A,
                    updateIsSuccess: P,
                    changeOpen: G,
                  })
                : null,
              H ? (0, t.jsx)(S.Z, {}) : null,
              U ? (0, t.jsx)(S.Z, {}) : null,
            ],
          })
        );
      }
      function _(e) {
        let {
            rate: s,
            assetPrice: a,
            menuIndex: n,
            depositNum: i,
            mintNum: c,
            amount: l,
          } = e,
          {
            ethPrice: d,
            vaultType: m,
            deposited: h,
            borrowed: x,
            coinType: p,
            asCoin: g,
            from: j,
            formNetwork: v,
            to: N,
            toNetwork: S,
            gasfee: f,
          } = (0, o.useContext)(r.S),
          [_, w] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          let e = 0;
          0 == n
            ? (e = "ETH" == p ? 397084 : 38e4)
            : 1 == n
            ? (e = 27e4)
            : 2 == n
            ? (e = 153e3)
            : 4 == n &&
              ("eUSD" == j && "ETH" == v
                ? (e = "ETH" == S ? 81243 : 275877)
                : "peUSD" == j
                ? (e = "ETH" == v ? 226653 : 230049)
                : "LBR" == j && (e = "ETH" == v ? 226643 : 230049)),
            w(((e * f) / 1e18) * d);
        }, [n, p, d, f, j, v, N, S]);
        let [y, L] = (0, o.useState)("Lido");
        (0, o.useEffect)(() => {
          "ETH" == p &&
            L(
              "stETH" == g || "wstETH" == g
                ? "Lido"
                : "WBETH" == g
                ? "Wrapped Binance Beacon ETH"
                : "Rocket Pool"
            );
        }, [g, p]);
        let [T, I] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            I(
              100 *
                (Number(x.toFixed()) - Number(l) <= 0
                  ? new b.Z(h).multipliedBy(new b.Z(a)).div(new b.Z(1))
                  : new b.Z(h)
                      .multipliedBy(new b.Z(a))
                      .div(new b.Z(x).minus(new b.Z(l))))
            );
          }, [h, a, x, l]),
          (0, t.jsx)(t.Fragment, {
            children:
              4 == n
                ? (0, t.jsxs)("div", {
                    className: u().dataList,
                    children: [
                      (0, t.jsxs)("div", {
                        className: u().dataItem,
                        children: [
                          (0, t.jsx)("span", {
                            style: { width: "auto" },
                            children: "Tx cost",
                          }),
                          (0, t.jsxs)("span", {
                            children: ["$", _.toFixed(6)],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: u().dataItem,
                        style: { borderBottom: "none" },
                        children: [
                          (0, t.jsx)("span", {
                            style: { width: "auto" },
                            children: "Route",
                          }),
                          (0, t.jsxs)("span", {
                            children: [
                              "ETH" == v ? "Ethereum" : "Arbitrum One",
                              " > ",
                              "ETH" == S ? "Ethereum" : "Arbitrum One",
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, t.jsxs)("div", {
                    className: u().dataList,
                    children: [
                      (0, t.jsxs)("div", {
                        className: u().dataItem,
                        children: [
                          (0, t.jsx)("span", { children: "Collateral Ratio" }),
                          (0, t.jsxs)("div", {
                            className: u().ratio,
                            children: [
                              (0, t.jsx)("span", {
                                children:
                                  s > 1e3
                                    ? "∞"
                                    : Number(s.toFixed(2)).toLocaleString() +
                                      "%",
                              }),
                              (0 == n &&
                                (0 !== Number(i) || 0 !== Number(c))) ||
                              (n > 0 && 0 !== Number(l))
                                ? (0, t.jsxs)(t.Fragment, {
                                    children: [
                                      (0, t.jsx)("img", {
                                        src: "/images/icon/right_arr.svg",
                                        alt: "arr",
                                      }),
                                      (0, t.jsx)("span", {
                                        style: { color: "#ffca8a" },
                                        children:
                                          0 == n && "ETH" == p
                                            ? Number(
                                                ((Number(i) * d.toNumber() +
                                                  h.toNumber() * a.toNumber()) /
                                                  (x.toNumber() + Number(c))) *
                                                  100
                                              ).toFixed(2) + "%"
                                            : 0 == n && "ETH" !== p
                                            ? x.toNumber() + Number(c) == 0
                                              ? "∞"
                                              : Number(
                                                  ((Number(i) * a.toNumber() +
                                                    h.toNumber() *
                                                      a.toNumber()) /
                                                    (x.toNumber() +
                                                      Number(c))) *
                                                    100
                                                ).toFixed(2) + "%"
                                            : 1 == n
                                            ? 0 >= x.toNumber()
                                              ? "∞"
                                              : Number(
                                                  ((h.toNumber() *
                                                    a.toNumber() -
                                                    Number(l) * a.toNumber()) /
                                                    x.toNumber()) *
                                                    100
                                                ).toFixed(2) + "%"
                                            : T > 1e3
                                            ? "∞"
                                            : Number(T).toFixed(2) + "%",
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: u().dataItem,
                        children: [
                          (0, t.jsx)("span", {
                            children: "Liquidation Threshold",
                          }),
                          (0, t.jsx)("span", {
                            dangerouslySetInnerHTML: { __html: "< 150%" },
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: u().dataItem,
                        children: [
                          (0, t.jsx)("span", { children: "Tx cost" }),
                          (0, t.jsxs)("span", {
                            children: ["$", _.toFixed(2)],
                          }),
                        ],
                      }),
                      "ETH" == p
                        ? (0, t.jsxs)("div", {
                            className: u().dataItem,
                            children: [
                              (0, t.jsx)("span", { children: "ETH Price" }),
                              (0, t.jsxs)("span", {
                                children: [
                                  "$",
                                  Number(d.toFixed()).toLocaleString(),
                                ],
                              }),
                            ],
                          })
                        : (0, t.jsxs)("div", {
                            className: u().dataItem,
                            children: [
                              (0, t.jsxs)("span", { children: [p, " Price"] }),
                              (0, t.jsxs)("span", {
                                children: [
                                  "$",
                                  Number(a.toFixed(4)).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                      (0, t.jsxs)("div", {
                        className: u().dataItem,
                        style: { borderBottom: "none" },
                        children: [
                          (0, t.jsx)("span", { children: "Route" }),
                          "ETH" == p
                            ? (0, t.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    Number(c) > 0
                                      ? p +
                                        " > " +
                                        y +
                                        " > Lybra Mint Pool > " +
                                        m
                                      : p + " > " + y + " > Lybra Mint Pool",
                                },
                              })
                            : (0, t.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                  __html:
                                    (0 == n && Number(c) > 0) ||
                                    (0 !== n && Number(l) > 0)
                                      ? "Lybra Mint Pool > " + m
                                      : "Lybra Mint Pool",
                                },
                              }),
                        ],
                      }),
                    ],
                  }),
          })
        );
      }
      function w(e) {
        let s, a, n, i;
        let {
            stethvaultAbi: c,
            eusdAbi: l,
            setTipMessage: d,
            userChain: u,
            mainnetNetId: m,
          } = (0, o.useContext)(r.S),
          {
            depositButton: h,
            depositNum: p,
            useETHValut: g,
            useETH: j,
            coinType: N,
            mintButton: f,
            ethBalance: _,
            stEthBalance: w,
            asCoin: y,
          } = e,
          L = new b.Z("" == p ? 0 : p).multipliedBy(new b.Z(1e18)),
          T = { value: 0 };
        "ETH" == N
          ? ((n = c),
            (i = g),
            (s = "depositEtherToMint"),
            (a = [0]),
            (T = { value: L.toFixed() }))
          : "Deposit" == h
          ? ((n = c),
            (i = g),
            (s = "depositAssetToMint"),
            (a = [L.toFixed(), 0]))
          : ((n = l),
            (s = "approve"),
            (a = [
              g,
              "115792089237316195423570985008687907853269984665640564039457",
            ]),
            (i = j));
        let [I, E] = (0, o.useState)(!1),
          [B, k] = (0, o.useState)(!1),
          {
            isLoading: R,
            write: C,
            data: D,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: i,
            abi: n,
            functionName: s,
            args: a,
            overrides: T,
            onSuccess(e) {
              k(!0);
            },
            onError(e) {
              k(!1);
            },
          });
        (0, x.BX)({
          hash: null == D ? void 0 : D.hash,
          onSuccess(a) {
            k(!1),
              E(!0),
              d({ title: h, type: "success" }),
              setTimeout(() => {
                E(!1),
                  "approve" !== s
                    ? e.clearInputValue()
                    : e.changeDepositButton();
              }, 3e3);
          },
        });
        let { switchNetwork: F } = (0, x.g0)(),
          H = async (e) => {
            if (u !== m) {
              F(m);
              return;
            }
            if (!(0 >= Number(p)) && p) {
              if ("ETH" == N) {
                if ("rETH" == y && _ < 1) {
                  v.warning({
                    content:
                      "Please note that ETH deposits are currently unavailable due to a deposit limit from Rocket Pool.",
                    duration: 5e3,
                  });
                  return;
                }
                if (1 > Number(p)) {
                  v.warning({
                    content: "Deposit should not be less than 1 ETH.",
                    duration: 5e3,
                  });
                  return;
                }
              } else if ("approve" !== s && 1 > Number(p)) {
                v.warning({
                  content:
                    "A minimum deposit of 1 " + N + " is required to mint.",
                  duration: 5e3,
                });
                return;
              }
              d({ title: h, type: "loading" }), C();
            }
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className:
                R ||
                B ||
                "Deposit & Mint" == f ||
                "Insufficient Gas" == h ||
                ("ETH" == N && _ <= 0) ||
                ("ETH" !== N && w <= 0) ||
                "Enter an amount" == h ||
                u !== m
                  ? "button disabled "
                  : "button",
              onClick: () =>
                R || B || "Deposit & Mint" === f || "Insufficient Gas" === h
                  ? null
                  : H(),
              children:
                R || B
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: "loading",
                          src: "/images/icon/loading.svg",
                          alt: "loading",
                        }),
                        h,
                      ],
                    })
                  : (0, t.jsx)(t.Fragment, { children: h }),
            }),
            R || B ? (0, t.jsx)(S.Z, {}) : null,
            I ? (0, t.jsx)(S.Z, {}) : null,
          ],
        });
      }
      var y = a(27102),
        L = a.n(y);
      function T(e) {
        let {
            mode: s,
            configurator: a,
            configuratorAbi: n,
          } = (0, o.useContext)(r.S),
          [i, c] = (0, o.useState)(!1),
          {
            isLoading: l,
            write: d,
            data: u,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: a,
            abi: n,
            functionName: "becomeRedemptionProvider",
            args: [!0],
            onSuccess(e) {
              c(!0);
            },
            onError(e) {
              c(!1);
            },
          });
        (0, x.BX)({
          hash: null == u ? void 0 : u.hash,
          onSuccess(s) {
            c(!1), e.changeShowSwitch(!1), e.Mint();
          },
        });
        let m = async () => {
            d();
          },
          h = (e) => {
            e.stopPropagation();
          },
          p = (s) => {
            e.changeShowSwitch(s);
          },
          g = () => {
            e.changeShowSwitch(!1), e.Mint();
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              0 == s
                ? "".concat(L().eranProp)
                : "".concat(L().eranProp, " ").concat(L().eranProp_dark),
            onClick: () => p(!1),
            children: (0, t.jsxs)("div", {
              className: L().propMain,
              onClick: h.bind(this),
              children: [
                (0, t.jsx)("div", {
                  className: "justify_space_between",
                  style: { justifyContent: "end", height: "30px" },
                  children: (0, t.jsx)("div", {
                    className: L().closeIcon,
                    onClick: () => p(!1),
                    children: (0, t.jsx)("img", {
                      src: "/images/icon/close.svg",
                      alt: "close",
                      style: { width: "25px" },
                    }),
                  }),
                }),
                (0, t.jsx)("div", {
                  style: {
                    margin: "30px 0px 40px",
                    fontSize: "16px",
                    lineHeight: "20px",
                  },
                  children:
                    "Add extra 10% esLBR boost for being redemption provider",
                }),
                (0, t.jsxs)("div", {
                  style: {
                    display: "flex",
                    gap: "20px",
                    justifyContent: "center",
                  },
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        l || i ? "button disabled mini" : "button blue  mini",
                      style: { width: "30%" },
                      onClick: () => (l || i ? null : m()),
                      children:
                        l || i
                          ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("img", {
                                  className: "loading",
                                  src: "/images/icon/loading.svg",
                                  alt: "loading",
                                }),
                                "YES",
                              ],
                            })
                          : "YES",
                    }),
                    (0, t.jsx)("div", {
                      className: "button blue  mini",
                      style: { width: "30%" },
                      onClick: () => g(),
                      children: "NO",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function I(e) {
        let s, a;
        let {
            stethvaultAbi: n,
            setTipMessage: i,
            address: c,
            userChain: l,
            mainnetNetId: d,
            configuratorAbi: u,
            configurator: m,
          } = (0, o.useContext)(r.S),
          {
            depositNum: h,
            useETHValut: p,
            coinType: g,
            mintNum: j,
            mintButton: N,
            depositButton: f,
            asCoin: _,
            ethBalance: w,
          } = e,
          y = new b.Z("" == h ? 0 : h).multipliedBy(new b.Z(1e18)),
          L = new b.Z("" == j ? 0 : j).multipliedBy(new b.Z(1e18)),
          I = { value: 0 };
        "ETH" == g
          ? ((I = { value: y.toFixed() }),
            0 >= Number(h)
              ? ((s = "mint"), (a = [c, L.toFixed()]))
              : ((s = "depositEtherToMint"), (a = [L.toFixed()])))
          : "Mint" == N
          ? ((s = "mint"), (a = [c, L.toFixed()]))
          : ((s = "depositAssetToMint"), (a = [y.toFixed(), L.toFixed()]));
        let [E, B] = (0, o.useState)(!1),
          [k, R] = (0, o.useState)(!1);
        (0, x.do)({
          address: m,
          abi: u,
          functionName: "isRedemptionProvider",
          args: [c],
          chainId: d,
          watch: !0,
          onSuccess(e) {
            B(e);
          },
        });
        let C = (e) => {
            R(e);
          },
          [D, F] = (0, o.useState)(!1),
          [H, Z] = (0, o.useState)(!1),
          {
            isLoading: U,
            write: M,
            data: A,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: p,
            abi: n,
            functionName: s,
            args: a,
            overrides: I,
            onSuccess(e) {
              Z(!0);
            },
            onError(e) {
              Z(!1);
            },
          });
        (0, x.BX)({
          hash: null == A ? void 0 : A.hash,
          onSuccess(s) {
            Z(!1),
              F(!0),
              i({ title: N, type: "success" }),
              setTimeout(() => {
                F(!1), e.clearInputValue();
              }, 3e3);
          },
        });
        let { switchNetwork: P } = (0, x.g0)(),
          q = async (e) => {
            if (l !== d) {
              P(d);
              return;
            }
            if (!(0 >= Number(j)) && j) {
              if ("ETH" == g) {
                if ("rETH" == _ && w < 1) {
                  v.warning({
                    content:
                      "Please note that ETH deposits are currently unavailable due to a deposit limit from Rocket Pool.",
                    duration: 5e3,
                  });
                  return;
                }
                if (1 > Number(h) && "mint" !== s) {
                  v.warning({
                    content: "Deposit should not be less than 1 ETH.",
                    duration: 5e3,
                  });
                  return;
                }
              } else if ("mint" !== s && "approve" !== s && 1 > Number(h)) {
                v.warning({
                  content:
                    "A minimum deposit of 1 " + g + " is required to mint.",
                  duration: 5e3,
                });
                return;
              }
              i({ title: N, type: "loading" }), M();
            }
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className:
                U ||
                H ||
                "Insufficient Gas" == N ||
                "Approve" == f ||
                "Enter an amount" == N ||
                l !== d
                  ? "button disabled "
                  : "button",
              onClick: () =>
                U || H || "Insufficient Gas" === N || "Approve" === f
                  ? null
                  : q(),
              children:
                U || H
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: "loading",
                          src: "/images/icon/loading.svg",
                          alt: "loading",
                        }),
                        N,
                      ],
                    })
                  : (0, t.jsx)(t.Fragment, { children: N }),
            }),
            U || H ? (0, t.jsx)(S.Z, {}) : null,
            D ? (0, t.jsx)(S.Z, {}) : null,
            k ? (0, t.jsx)(T, { changeShowSwitch: C, Mint: q }) : null,
          ],
        });
      }
      function E(e) {
        let {
            address: s,
            eusdAbi: a,
            ethPrice: n,
            deposited: i,
            safeCollateralRate: c,
            borrowed: l,
            asCoin: d,
            setAsCoin: m,
            ethBalance: h,
            vaultType: p,
            gasfee: g,
            publicAbi: j,
            rETHSetting: v,
          } = (0, o.useContext)(r.S),
          {
            coinType: N,
            useETHValut: S,
            useETH: f,
            assetPrice: _,
            depositNum: y,
            mintNum: L,
            mintVaultMaxSupply: T,
            poolTotalCirculation: E,
          } = e,
          [B, k] = (0, o.useState)("Deposit"),
          [R, C] = (0, o.useState)("Mint"),
          [D, F] = (0, o.useState)(0),
          [H, Z] = (0, o.useState)(!1),
          [U, M] = (0, o.useState)(0);
        (0, x.do)({
          address: f,
          abi: a,
          functionName: "allowance",
          args: [s, S],
          watch: !0,
          onSuccess(e) {
            M(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [A, P] = (0, o.useState)(0);
        (0, x.do)({
          address: v,
          abi: j,
          functionName: "getMaximumDepositAmount",
          watch: !0,
          onSuccess(e) {
            P(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let q = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          [O, G] = (0, o.useState)(!1),
          [V, W] = (0, o.useState)(!1),
          Y = (0, o.useRef)(),
          X = async (s) => {
            e.changeDepositNum(s.target.value),
              en(!1),
              el(!1),
              "ETH" == N
                ? Number(s.target.value) > D && e.changeDepositNum(D)
                : Number(s.target.value) > es.toFixed() &&
                  e.changeDepositNum(es.toFixed());
          },
          $ = async (s) => {
            m(s),
              Z(!1),
              el(!1),
              en(!1),
              e.changeDepositNum(""),
              e.changeMintNum("");
          },
          K = (0, o.useRef)(),
          z = async (s) => {
            e.changeMintNum(s.target.value),
              el(!1),
              Number(s.target.value) > er && e.changeMintNum(er);
          },
          [J, Q] = (0, o.useState)(!1),
          ee = async () => {
            Q(!0);
          },
          [es, ea] = (0, o.useState)(0);
        (0, x.do)({
          address: f,
          abi: a,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          onSuccess(e) {
            ea(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [et, en] = (0, o.useState)(!1),
          ei = () => {
            "ETH" == N
              ? e.changeDepositNum(D)
              : e.changeDepositNum(es.toFixed()),
              en(!0);
          },
          [ec, el] = (0, o.useState)(!1),
          eo = () => {
            e.changeMintNum(er), el(!0);
          },
          [er, ed] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          let e;
          let s = T - E;
          s <
          (e =
            "ETH" == N
              ? (((y || 0) * n) / c + ((_ * i) / c - l)) * 0.99
              : (((y || 0) * _) / c + ((_ * i) / c - l)) * 0.99)
            ? ed(s > 0 ? s : 0)
            : ed(e > 0 ? e : 0);
        }, [y, T, E, n, _, N, d, i, l, c]),
          (0, o.useEffect)(() => {
            L > er && e.changeMintNum(er);
          }, [er]);
        let eu = () => {
          U < Number(y) && "ETH" !== N
            ? (k("Approve"), C("Mint"))
            : Number(y) > 0 && L > 0 && "ETH" !== N && U >= Number(y)
            ? C("Deposit & Mint")
            : Number(y) > 0 && L > 0 && "ETH" == N
            ? C("Deposit & Mint")
            : (k("Deposit"), C("Mint")),
            (!y || y <= 0) && k("Enter an amount"),
            (!L || L <= 0) && C("Enter an amount"),
            "ETH" == N &&
              "rETH" == d &&
              D < 1 &&
              (C("Not Available"), k("Not Available"));
        };
        (0, o.useEffect)(() => {
          e.changeDepositNum(""), e.changeMintNum(""), en(!1), el(!1);
        }, [N]);
        let em = () => {
            e.changeDepositNum(""), e.changeMintNum(""), en(!1), el(!1);
          },
          eh = () => {
            k("Deposit");
          };
        return (
          (0, o.useEffect)(() => {
            "ETH" == N && "rETH" == d && h > A ? F(A) : F(h);
          }, [N, d, h, A]),
          (0, o.useEffect)(() => {
            D < (("ETH" == N ? 397084 : 38e4) * g) / 1e18 && "rETH" !== d && s
              ? (k("Insufficient Gas"), C("Insufficient Gas"))
              : eu();
          }, [h, s, g, N, d, y, U, L]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: "".concat(u().operateMain, " ").concat(u().active),
                children: [
                  (0, t.jsxs)("div", {
                    className: "justify_space_between ".concat(u().top),
                    children: [
                      (0, t.jsxs)("div", {
                        className: "justify_align_center",
                        style: { gap: "12px" },
                        children: [
                          (0, t.jsx)("img", {
                            className: "boxshadow",
                            src: "/images/logo/" + N + ".svg",
                            alt: "eth",
                          }),
                          (0, t.jsxs)("p", {
                            className: u().typeTitle,
                            children: ["Deposit ", N],
                          }),
                        ],
                      }),
                      "ETH" == N
                        ? (0, t.jsxs)("div", {
                            className: "".concat(
                              u().selectDiv,
                              " ",
                              "justify_align_center"
                            ),
                            style: { gap: "8px" },
                            children: [
                              (0, t.jsx)("span", { children: "Desposit as" }),
                              (0, t.jsxs)("div", {
                                className: "select",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: "selectName",
                                    onClick: () => Z(!H),
                                    children: [
                                      d,
                                      (0, t.jsx)("img", {
                                        src: "/images/icon/arr.svg",
                                        alt: "arr",
                                        style: H
                                          ? { transform: "rotate(180deg)" }
                                          : null,
                                      }),
                                    ],
                                  }),
                                  H
                                    ? (0, t.jsxs)("div", {
                                        className: "selectItem",
                                        children: [
                                          (0, t.jsx)("p", {
                                            onClick: () => $("stETH"),
                                            children: "stETH",
                                          }),
                                          (0, t.jsx)("p", {
                                            onClick: () => $("wstETH"),
                                            children: "wstETH",
                                          }),
                                          (0, t.jsx)("p", {
                                            onClick: () => $("WBETH"),
                                            children: "WBETH",
                                          }),
                                          (0, t.jsx)("p", {
                                            onClick: () => $("rETH"),
                                            children: "rETH",
                                          }),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: u().main,
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex_align_start ".concat(u().available),
                        children: [
                          (0, t.jsx)("span", { children: "Available" }),
                          (0, t.jsxs)("span", {
                            children: [
                              "ETH" == N && "rETH" == d
                                ? Number(
                                    Math.floor(1e4 * D) / 1e4
                                  ).toLocaleString() +
                                  " " +
                                  N
                                : "ETH" == N
                                ? Number(h).toLocaleString() + " " + N
                                : Number(
                                    Math.floor(1e6 * es.toFixed()) / 1e6
                                  ).toLocaleString() +
                                  " " +
                                  N,
                              " ",
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: O ? "input error" : "input",
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)("input", {
                              type: "number",
                              onWheel: (e) => e.target.blur(),
                              placeholder: "0",
                              id: "depositNum",
                              onKeyDown: q.bind(this),
                              onChange: X.bind(this),
                              value: y,
                              ref: Y,
                            }),
                          }),
                          (0, t.jsx)("span", {
                            className: et ? "max active" : "max",
                            onClick: () => ei(),
                            children: "MAX",
                          }),
                        ],
                      }),
                      O
                        ? (0, t.jsx)("span", {
                            className: "balanceError",
                            children: "Insufficient Gas",
                          })
                        : null,
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: u().bottomBut,
                    children: (0, t.jsx)(w, {
                      asCoin: d,
                      ethBalance: D,
                      stEthBalance: es,
                      clearInputValue: em,
                      changeDepositButton: eh,
                      depositButton: B,
                      depositNum: y,
                      useETH: f,
                      useETHValut: S,
                      coinType: N,
                      mintNum: L,
                      mintButton: R,
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  er <= 0 || "Approve" == B
                    ? "".concat(u().operateMain, " ", "gray")
                    : "".concat(u().operateMain),
                onClick: () => ee(),
                children: [
                  (0, t.jsx)("div", {
                    className: "justify_space_between ".concat(u().top),
                    children: (0, t.jsxs)("div", {
                      className: "justify_align_center",
                      style: { gap: "12px" },
                      children: [
                        (0, t.jsx)("div", {
                          className: "boxshadow",
                          children: (0, t.jsx)("img", {
                            src:
                              "eUSD" == p
                                ? "/images/icon/eUSD.svg"
                                : "/images/icon/peUSD.svg",
                            alt: "eth",
                          }),
                        }),
                        (0, t.jsxs)("p", {
                          className: u().typeTitle,
                          children: ["Mint ", p],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: u().main,
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex_align_start",
                        style: { gap: "24px" },
                        children: [
                          (0, t.jsx)("span", { children: "Max" }),
                          (0, t.jsxs)("span", {
                            children: [
                              Number(er.toFixed(2)).toLocaleString(),
                              " ",
                              p,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: V ? "input error" : "input",
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)("input", {
                              type: "number",
                              onWheel: (e) => e.target.blur(),
                              placeholder: "0",
                              id: "mintNum",
                              onKeyDown: q.bind(this),
                              onChange: z.bind(this),
                              value: L,
                              ref: K,
                            }),
                          }),
                          (0, t.jsx)("span", {
                            className: ec ? "max active" : "max",
                            onClick: () => ("Approve" !== B ? eo() : null),
                            children: "MAX",
                          }),
                        ],
                      }),
                      V
                        ? (0, t.jsx)("span", {
                            className: "balanceError",
                            children: "Insufficient Gas",
                          })
                        : null,
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: u().bottomBut,
                    children: (0, t.jsx)(I, {
                      asCoin: d,
                      ethBalance: D,
                      depositButton: B,
                      clearInputValue: em,
                      mintButton: R,
                      depositNum: y,
                      useETH: f,
                      useETHValut: S,
                      coinType: N,
                      mintNum: L,
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function B(e) {
        let { maxBalance: s, amount: a } = e,
          {
            address: n,
            setTipMessage: i,
            stethvaultAbi: c,
            useETHValut: l,
            coinType: d,
            ethBalance: m,
            gasfee: h,
            stETHtxs: p,
            mode: g,
          } = (0, o.useContext)(r.S),
          [j, v] = (0, o.useState)(!0),
          N = async () => {
            let e = p.filters.DepositEther(n, null, null, null, null),
              s = await p.queryFilter(e, 1, "latest"),
              a = p.filters.DepositAsset(n, null, null, null),
              t = await p.queryFilter(a, 1, "latest"),
              i =
                s.length > 0 ? Number(s[s.length - 1].args.timestamp._hex) : 0,
              c =
                t.length > 0 ? Number(t[t.length - 1].args.timestamp._hex) : 0;
            var l = Number(i > c ? i : c) + 259200;
            Date.parse(new Date()) / 1e3 > l ? v(!0) : v(!1);
          };
        (0, o.useEffect)(() => {
          N();
        }, [n]);
        let f = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          _ = (0, o.useRef)(),
          [w, y] = (0, o.useState)(!1),
          [T, I] = (0, o.useState)(!1),
          E = () => {
            e.changeAmount(s), I(!0);
          },
          B = async (a) => {
            e.changeAmount(a.target.value),
              I(!1),
              Number(a.target.value) > s && e.changeAmount(s);
          },
          [k, R] = (0, o.useState)(!1),
          [C, D] = (0, o.useState)(!1),
          {
            isLoading: F,
            write: H,
            data: Z,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: l,
            abi: c,
            functionName: "withdraw",
            args: [n, new b.Z(a).multipliedBy(new b.Z(1e18)).toFixed()],
            onSuccess(e) {
              D(!0);
            },
            onError(e) {
              D(!1);
            },
          });
        (0, x.BX)({
          hash: null == Z ? void 0 : Z.hash,
          onSuccess(s) {
            D(!1),
              R(!0),
              i({ title: "withdraw", type: "success" }),
              M(!1),
              setTimeout(() => {
                R(!1), e.changeAmount("");
              }, 3e3);
          },
        });
        let [U, M] = (0, o.useState)(!1),
          A = async (e) => {
            !1 == j && "stETH" == d
              ? M(!0)
              : (i({ title: "withdraw", type: "loading" }), H());
          },
          P = async (e) => {
            i({ title: "withdraw", type: "loading" }), H();
          };
        (0, o.useEffect)(() => {
          e.changeAmount(""), I(!1);
        }, [d]);
        let [q, O] = (0, o.useState)("Withdraw");
        (0, o.useEffect)(() => {
          n &&
            (m < (153e3 * h) / 1e18
              ? O("Insufficient Gas")
              : a <= 0 || !a
              ? O("Enter an amount")
              : O("Withdraw"));
        }, [m, n, h, d, a]);
        let G = (e) => {
          e.stopPropagation();
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)("div", {
              className: "".concat(u().operateMain, " ").concat(u().active),
              children: [
                (0, t.jsx)("div", {
                  className: "justify_space_between ".concat(u().top),
                  children: (0, t.jsxs)("div", {
                    className: "justify_align_center",
                    style: { gap: "12px" },
                    children: [
                      (0, t.jsx)("img", {
                        className: "boxshadow",
                        src: "/images/logo/" + d + ".svg",
                        alt: "eth",
                      }),
                      (0, t.jsxs)("p", {
                        className: u().typeTitle,
                        children: ["Withdraw ", d],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: u().main,
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex_align_start",
                      style: { gap: "24px" },
                      children: [
                        (0, t.jsx)("span", { children: "Max" }),
                        (0, t.jsxs)("span", {
                          children: [
                            Number(s.toFixed(4)).toLocaleString(),
                            " ",
                            d,
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: w ? "input error" : "input",
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("input", {
                            type: "number",
                            onWheel: (e) => e.target.blur(),
                            placeholder: "0",
                            id: "amount",
                            onKeyDown: f.bind(this),
                            onChange: B.bind(this),
                            value: a,
                            ref: _,
                          }),
                        }),
                        (0, t.jsx)("span", {
                          className: T ? "max active" : "max",
                          onClick: () => E(),
                          children: "MAX",
                        }),
                      ],
                    }),
                    w
                      ? (0, t.jsx)("span", {
                          className: "balanceError",
                          children: "Insufficient Gas",
                        })
                      : null,
                  ],
                }),
                (0, t.jsx)("div", {
                  className: u().bottomBut,
                  children: (0, t.jsx)("div", {
                    className:
                      F ||
                      C ||
                      "Insufficient Gas" == q ||
                      "Enter an amount" == q ||
                      s <= 0
                        ? "button disabled "
                        : "button",
                    onClick: () =>
                      !F && a > 0 && "Insufficient Gas" !== q ? A() : null,
                    children:
                      F || C
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("img", {
                                className: "loading",
                                src: "/images/icon/loading.svg",
                                alt: "loading",
                              }),
                              q,
                            ],
                          })
                        : (0, t.jsx)(t.Fragment, { children: q }),
                  }),
                }),
                F || C ? (0, t.jsx)(S.Z, {}) : null,
                k ? (0, t.jsx)(S.Z, {}) : null,
              ],
            }),
            U
              ? (0, t.jsx)("div", {
                  className:
                    0 == g
                      ? "".concat(L().eranProp)
                      : "".concat(L().eranProp, " ").concat(L().eranProp_dark),
                  onClick: () => M(!1),
                  children: (0, t.jsxs)("div", {
                    className: L().propMain,
                    onClick: G.bind(this),
                    children: [
                      (0, t.jsxs)("div", {
                        className: "justify_space_between",
                        children: [
                          (0, t.jsx)("p", { children: q }),
                          (0, t.jsx)("div", {
                            className: L().closeIcon,
                            onClick: () => M(!1),
                            children: (0, t.jsx)("img", {
                              src: "/images/icon/close.svg",
                              alt: "close",
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        style: { margin: "40px 0", fontSize: "16px" },
                        children:
                          "A 0.1% fee will be imposed on withdrawals made within three days of deposit. Are you sure you want to proceed?",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          F ||
                          C ||
                          "Insufficient Gas" == q ||
                          "Enter an amount" == q ||
                          s <= 0
                            ? "button disabled "
                            : "button",
                        onClick: () =>
                          !F && a > 0 && "Insufficient Gas" !== q ? P() : null,
                        children:
                          F || C
                            ? (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)("img", {
                                    className: "loading",
                                    src: "/images/icon/loading.svg",
                                    alt: "loading",
                                  }),
                                  q,
                                ],
                              })
                            : (0, t.jsx)(t.Fragment, { children: q }),
                      }),
                    ],
                  }),
                })
              : null,
          ],
        });
      }
      function k(e) {
        let { reBalance: s, borrowed: a, amount: n, borrowedRepay: i } = e,
          {
            address: c,
            stethvaultAbi: l,
            coinType: d,
            setTipMessage: m,
            useETHValut: h,
            vaultType: p,
            ethBalance: g,
            gasfee: j,
            EUSDMiningIncentives: N,
            EUSDMiningIncentivesAbi: f,
            mainnetNetId: _,
          } = (0, o.useContext)(r.S),
          [w, y] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          Number(s) > Number(a) ? y(a) : y(s);
        }, [s, a]);
        let L = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          T = (0, o.useRef)(),
          I = async (s) => {
            e.changeAmount(s.target.value),
              R(!1),
              Number(s.target.value) > w && e.changeAmount(w);
          },
          [E, B] = (0, o.useState)(!1),
          [k, R] = (0, o.useState)(!1),
          C = () => {
            e.changeAmount(w), R(!0);
          },
          [D, F] = (0, o.useState)(0);
        (0, x.do)({
          address: N,
          abi: f,
          functionName: "earned",
          watch: !0,
          args: [c],
          chainId: _,
          onSuccess(e) {
            F(Number(e._hex) / 1e18);
          },
        });
        let [H, Z] = (0, o.useState)(!0);
        (0, x.do)({
          address: N,
          abi: f,
          functionName: "isOtherEarningsClaimable",
          args: [c],
          watch: !0,
          chainId: _,
          onSuccess(e) {
            console.log("isOtherEarningsClaimable----------", e), Z(e);
          },
        });
        let [U, M] = (0, o.useState)(!1),
          [A, P] = (0, o.useState)(!1),
          {
            isLoading: q,
            write: O,
            data: G,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: h,
            abi: l,
            functionName: "burn",
            args: [c, new b.Z(n).multipliedBy(new b.Z(1e18)).toFixed()],
            onSuccess(e) {
              P(!0);
            },
            onError(e) {
              P(!1);
            },
          });
        (0, x.BX)({
          hash: null == G ? void 0 : G.hash,
          onSuccess(s) {
            P(!1),
              M(!0),
              m({ title: "Repay", type: "success" }),
              setTimeout(() => {
                M(!1), e.changeAmount("");
              }, 3e3);
          },
        });
        let V = async (e) => {
          H
            ? (m({ title: "Repay", type: "loading" }), O())
            : Number(n) >= Number(i) && D > 10
            ? v.warning({
                content:
                  "Please claim all of your unclaimed esLBR first before paying off your debt.",
                duration: 5e3,
              })
            : (m({ title: "Repay", type: "loading" }), O());
        };
        (0, o.useEffect)(() => {
          e.changeAmount(""), R(!1);
        }, [d]);
        let [W, Y] = (0, o.useState)("Repay");
        return (
          (0, o.useEffect)(() => {
            c &&
              (g < (27e4 * j) / 1e18
                ? Y("Insufficient Gas")
                : n <= 0 || !n
                ? Y("Enter an amount")
                : Y("Repay"));
          }, [g, c, j, d, n]),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
              className: "".concat(u().operateMain, " ").concat(u().active),
              children: [
                (0, t.jsx)("div", {
                  className: "justify_space_between ".concat(u().top),
                  children: (0, t.jsxs)("div", {
                    className: "justify_align_center",
                    style: { gap: "12px" },
                    children: [
                      (0, t.jsx)("div", {
                        className: "boxshadow",
                        children: (0, t.jsx)("img", {
                          src:
                            "eUSD" == p
                              ? "/images/icon/eUSD.svg"
                              : "/images/icon/peUSD.svg",
                          alt: "eth",
                        }),
                      }),
                      (0, t.jsxs)("p", {
                        className: u().typeTitle,
                        children: ["Repay ", p],
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: u().main,
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex_align_start",
                      style: { gap: "24px" },
                      children: [
                        (0, t.jsx)("span", { children: "Max" }),
                        (0, t.jsxs)("span", {
                          children: [
                            Number(Math.floor(100 * w) / 100).toLocaleString(),
                            " ",
                            p,
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: E ? "input error" : "input",
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("input", {
                            type: "number",
                            onWheel: (e) => e.target.blur(),
                            placeholder: "0",
                            id: "amount",
                            onKeyDown: L.bind(this),
                            onChange: I.bind(this),
                            value: n,
                            ref: T,
                          }),
                        }),
                        (0, t.jsx)("span", {
                          className: k ? "max active" : "max",
                          onClick: () => C(),
                          children: "MAX",
                        }),
                      ],
                    }),
                    E
                      ? (0, t.jsx)("span", {
                          className: "balanceError",
                          children: "Insufficient Gas",
                        })
                      : null,
                  ],
                }),
                (0, t.jsx)("div", {
                  className: u().bottomBut,
                  children: (0, t.jsx)("div", {
                    className:
                      q ||
                      A ||
                      "Insufficient Gas" == W ||
                      "Enter an amount" == W ||
                      w <= 0
                        ? "button disabled "
                        : "button",
                    onClick: () =>
                      !q && n > 0 && "Insufficient Gas" !== W ? V() : null,
                    children:
                      q || A
                        ? (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("img", {
                                className: "loading",
                                src: "/images/icon/loading.svg",
                                alt: "loading",
                              }),
                              W,
                            ],
                          })
                        : (0, t.jsx)(t.Fragment, { children: W }),
                  }),
                }),
                q || A ? (0, t.jsx)(S.Z, {}) : null,
                U ? (0, t.jsx)(S.Z, {}) : null,
              ],
            }),
          })
        );
      }
      function R(e) {
        let { reBalance: s, amount: a, providerList: n, assetPrice: i } = e,
          {
            stethvaultAbi: c,
            useETHValut: l,
            vaultType: d,
            coinType: m,
            setTipMessage: h,
            address: p,
          } = (0, o.useContext)(r.S),
          g = new b.Z(a).multipliedBy(new b.Z(1e18)),
          j = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          v = (0, o.useRef)(),
          N = async (a) => {
            let t;
            e.changeAmount(a.target.value),
              y(!1),
              (t = Number(s) < n.amount ? s : n.amount),
              Number(a.target.value) > t && e.changeAmount(t);
          },
          [f, _] = (0, o.useState)(!1),
          [w, y] = (0, o.useState)(!1),
          L = () => {
            let a;
            (a = Number(s) < n.amount ? s : n.amount), e.changeAmount(a), y(!0);
          },
          T = [
            n.address,
            g.toFixed(),
            new b.Z(g).div(new b.Z(i)).multipliedBy(0.99).toFixed(0),
          ],
          [I, E] = (0, o.useState)(!1),
          [B, k] = (0, o.useState)(!1),
          {
            isLoading: R,
            write: C,
            data: D,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: l,
            abi: c,
            functionName: "rigidRedemption",
            args: T,
            onSuccess(e) {
              k(!0);
            },
            onError(e) {
              k(!1);
            },
          });
        (0, x.BX)({
          hash: null == D ? void 0 : D.hash,
          onSuccess(s) {
            k(!1),
              E(!0),
              h({ title: "Rigid Redemption", type: "success" }),
              setTimeout(() => {
                E(!1), e.changeAmount("");
              }, 3e3);
          },
        });
        let F = async (e) => {
            h({ title: "Rigid Redemption", type: "loading" }), C();
          },
          [H, Z] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          Z(Number(a || 0) / Number(i));
        }, [a, i]),
          (0, o.useEffect)(() => {
            e.changeAmount(""), y(!1);
          }, [m]);
        let [U, M] = (0, o.useState)("Rigid Redemption");
        (0, o.useEffect)(() => {
          a <= 0 || !a ? M("Enter an amount") : M("Rigid Redemption");
        }, [p, m, a]);
        let [A, P] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            n && n.amount ? (Number(s) < n.amount ? P(s) : P(n.amount)) : P(s);
          }, [s, n]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: "".concat(u().operateMain, " ").concat(u().active),
                children: [
                  (0, t.jsx)("div", {
                    className: "justify_space_between ".concat(u().top),
                    children: (0, t.jsxs)("div", {
                      className: "justify_align_center",
                      style: { gap: "12px" },
                      children: [
                        (0, t.jsx)("div", {
                          className: "boxshadow",
                          children: (0, t.jsx)("img", {
                            src:
                              "eUSD" == d
                                ? "/images/icon/eUSD.svg"
                                : "/images/icon/peUSD.svg",
                            alt: "eth",
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className: u().typeTitle,
                          children: "Rigid Redemption",
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: u().main,
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex_align_start",
                        style: { gap: "24px" },
                        children: [
                          (0, t.jsx)("span", { children: "Balance" }),
                          (0, t.jsxs)("span", {
                            children: [
                              Number(
                                Math.floor(100 * A) / 100
                              ).toLocaleString(),
                              " ",
                              d,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: f ? "input error" : "input",
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)("input", {
                              type: "number",
                              onWheel: (e) => e.target.blur(),
                              placeholder: "0",
                              id: "amount",
                              onKeyDown: j.bind(this),
                              onChange: N.bind(this),
                              value: a,
                              ref: v,
                            }),
                          }),
                          (0, t.jsx)("span", {
                            className: w ? "max active" : "max",
                            onClick: () => L(),
                            children: "MAX",
                          }),
                        ],
                      }),
                      f
                        ? (0, t.jsx)("span", {
                            className: "balanceError",
                            children: "Insufficient Gas",
                          })
                        : null,
                      (0, t.jsx)("div", {
                        className: u().willReceive,
                        children: (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("span", {
                              children: "You will receive",
                            }),
                            (0, t.jsxs)("p", {
                              children: [
                                Number(H.toFixed(4)).toLocaleString(),
                                "/ ",
                                Number(
                                  (n.amount / Number(i.toFixed())).toFixed(4)
                                ).toLocaleString(),
                                "  ",
                                m,
                                " from Redemption Providers",
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: u().bottomBut,
                    children: (0, t.jsx)("div", {
                      className:
                        R ||
                        B ||
                        0 >= (n && n.amount) ||
                        A <= 0 ||
                        "Enter an amount" == U
                          ? "button disabled "
                          : "button",
                      onClick: () => (!R && a > 0 ? F() : null),
                      children:
                        R || B
                          ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("img", {
                                  className: "loading",
                                  src: "/images/icon/loading.svg",
                                  alt: "loading",
                                }),
                                U,
                              ],
                            })
                          : (0, t.jsx)(t.Fragment, { children: U }),
                    }),
                  }),
                ],
              }),
              R || B ? (0, t.jsx)(S.Z, {}) : null,
              I ? (0, t.jsx)(S.Z, {}) : null,
            ],
          })
        );
      }
      var C = a(37918),
        D = a.n(C);
      function F(e) {
        let s, n, i, c;
        let {
            eusdAbi: l,
            setTipMessage: d,
            address: u,
            PeUSDMainnet: m,
            eUSD: h,
            peusdAbi: p,
            mainnetId: g,
            arbichainId: j,
            peUSDArbi: v,
            LBR: N,
            lbrArbi: f,
            userChain: _,
            mainnetNetId: w,
            arbiNetId: y,
          } = (0, o.useContext)(r.S),
          {
            omniChainButton: L,
            amount: T,
            from: I,
            formNetwork: E,
            to: B,
            toNetwork: k,
            balanceOf: R,
            switchNetwork: C,
          } = e,
          F = new (D())(),
          [H, Z] = (0, o.useState)(0),
          U = a(63239),
          [M, A] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          u &&
            (Z(F.eth.abi.encodeParameter("address", u)),
            A(
              "ARB" == k
                ? U.utils.solidityPack(["uint16", "uint256"], [1, 1e6])
                : U.utils.solidityPack(["uint16", "uint256"], [1, 2e5])
            ));
        }, [u, k, F.eth.abi, U.utils]);
        let P = new b.Z(T > 0 ? T : 0).multipliedBy(new b.Z(1e18)).toFixed(),
          q = { value: 0 },
          [O, G] = (0, o.useState)(0);
        (0, x.do)({
          address:
            "LBR" == I && "ETH" == E
              ? N
              : "LBR" == I && "ARB" == E
              ? f
              : "ETH" == E && "LBR" !== I
              ? m
              : v,
          abi: p,
          functionName: "estimateSendFee",
          args: ["ETH" == k ? g : j, H, P, !1, M],
          watch: !0,
          onSuccess(e) {
            G(new b.Z(e.nativeFee._hex).toFixed());
          },
        }),
          "eUSD" == I && "ETH" == E && "peUSD" == B
            ? "Approve" == L
              ? ((c = h),
                (i = l),
                (s = "approve"),
                (n = [
                  m,
                  "115792089237316195423570985008687907853269984665640564039457",
                ]))
              : ((c = m),
                (i = p),
                "ETH" == k
                  ? ((s = "convertToPeUSD"), (n = [u, P]))
                  : ((s = "convertToPeUSDAndCrossChain"),
                    (n = [
                      P,
                      j,
                      H,
                      [u, "0x0000000000000000000000000000000000000000", M],
                    ]),
                    (q = { from: u, value: O })))
            : "peUSD" == I && "ETH" == E && "eUSD" == B
            ? ((c = m), (i = p), (s = "convertToEUSD"), (n = [P]))
            : "peUSD" == I && "ARB" == E && "peUSD" == B && "ETH" == k
            ? ((c = v),
              (i = p),
              (s = "sendFrom"),
              (n = [
                u,
                g,
                H,
                P,
                [u, "0x0000000000000000000000000000000000000000", M],
              ]),
              (q = { value: O }))
            : "peUSD" == I && "ETH" == E && "peUSD" == B && "ARB" == k
            ? ((c = m),
              (i = p),
              (s = "sendFrom"),
              (n = [
                u,
                j,
                H,
                P,
                [u, "0x0000000000000000000000000000000000000000", M],
              ]),
              (q = { from: u, value: O }))
            : "LBR" == I &&
              ((c = "ETH" == E ? N : f),
              (i = p),
              (s = "sendFrom"),
              (n = [
                u,
                "ARB" == k ? j : g,
                H,
                P,
                [u, "0x0000000000000000000000000000000000000000", M],
              ]),
              (q = { from: u, value: O }));
        let [V, W] = (0, o.useState)(!1),
          [Y, X] = (0, o.useState)(!1),
          {
            isLoading: $,
            write: K,
            data: z,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: c,
            abi: i,
            functionName: s,
            args: n,
            overrides: q,
            onSuccess(e) {
              X(!0);
            },
            onError(e) {
              X(!1);
            },
          });
        (0, x.BX)({
          hash: null == z ? void 0 : z.hash,
          onSuccess(a) {
            X(!1),
              W(!0),
              d({ title: L, type: "success" }),
              setTimeout(() => {
                W(!1), "approve" !== s && e.clearInputValue();
              }, 3e3);
          },
        });
        let J = async (e) => {
          ("ETH" == E && _ == w) || ("ARB" == E && _ == y)
            ? T > 0 && (d({ title: L, type: "loading" }), K())
            : "ETH" == E
            ? C(w)
            : C(y);
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)("div", {
              className:
                $ ||
                Y ||
                "Insufficient Gas" == L ||
                R <= 0 ||
                "Enter an amount" == L
                  ? "button disabled "
                  : "button",
              onClick: () =>
                $ || Y || "Insufficient Gas" === L || !(R > 0) ? null : J(),
              children:
                $ || Y
                  ? (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)("img", {
                          className: "loading",
                          src: "/images/icon/loading.svg",
                          alt: "loading",
                        }),
                        L,
                      ],
                    })
                  : (0, t.jsx)(t.Fragment, { children: L }),
            }),
            $ || Y ? (0, t.jsx)(S.Z, {}) : null,
            V ? (0, t.jsx)(S.Z, {}) : null,
          ],
        });
      }
      function H() {
        let {
            eUSD: e,
            eusdAbi: s,
            address: a,
            configurator: n,
            configuratorAbi: i,
            PeUSDMainnet: c,
            peusdAbi: l,
            peUSDArbi: d,
            LBR: m,
            lbrArbi: h,
            mainnetNetId: p,
            arbiNetId: g,
            from: j,
            setFrom: v,
            formNetwork: N,
            setFormNetwork: S,
            to: f,
            setTo: _,
            toNetwork: w,
            setToNetwork: y,
            ethBalance: L,
            gasfee: T,
          } = (0, o.useContext)(r.S),
          [I, E] = (0, o.useState)(!1),
          { switchNetwork: B } = (0, x.g0)(),
          k = async (e) => {
            v(e), E(!1);
          },
          [R, C] = (0, o.useState)(!1),
          D = async (e) => {
            S(e), C(!1);
          },
          [H, Z] = (0, o.useState)(!1),
          U = async (e) => {
            _(e), Z(!1), "LBR" == e && v("LBR");
          },
          [M, A] = (0, o.useState)(!1),
          P = async (e) => {
            y(e), A(!1);
          },
          q = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          [O, G] = (0, o.useState)(!1),
          [V, W] = (0, o.useState)(!1),
          [Y, X] = (0, o.useState)(""),
          $ = (0, o.useRef)(),
          K = async (e) => {
            X(e.target.value), W(!1), Number(e.target.value) > eg && X(eg);
          },
          z = () => {
            X(eg), W(!0);
          },
          J = () => {
            v(f), S(w), _(j), y(N);
          },
          Q = () => {
            X(""),
              W(!1),
              "LBR" == j && (_("LBR"), y("ETH" == N ? "ARB" : "ETH")),
              "eUSD" == j && (S("ETH"), _("peUSD")),
              "eUSD" == f && y("ETH"),
              "peUSD" == j && "ARB" == N && (_("peUSD"), y("ETH")),
              "peUSD" == j &&
                "ETH" == N &&
                ("LBR" == f
                  ? (_("peUSD"), y("ARB"))
                  : "eUSD" == f
                  ? y("ETH")
                  : y("ARB"));
          };
        (0, o.useEffect)(() => {
          Q();
        }, [j, N, f, w]),
          (0, o.useEffect)(() => {
            a && B && ("ETH" == N ? B(p) : B(g));
          }, [N, a, B]);
        let [ee, es] = (0, o.useState)(0);
        (0, x.do)({
          address: e,
          abi: s,
          functionName: "balanceOf",
          args: [a],
          watch: !0,
          chainId: p,
          onSuccess(e) {
            es(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [ea, et] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: i,
          functionName: "getEUSDMaxLocked",
          watch: !0,
          chainId: p,
          onSuccess(e) {
            et(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [en, ei] = (0, o.useState)(0);
        (0, x.do)({
          address: e,
          abi: s,
          functionName: "balanceOf",
          watch: !0,
          args: [c],
          chainId: p,
          onSuccess(e) {
            ei(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [ec, el] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == N ? c : d,
          abi: s,
          functionName: "balanceOf",
          args: [a],
          watch: !0,
          onSuccess(e) {
            el(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [eo, er] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == N ? m : h,
          abi: s,
          functionName: "balanceOf",
          args: [a],
          watch: !0,
          onSuccess(e) {
            er(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [ed, eu] = (0, o.useState)(0),
          [em, eh] = (0, o.useState)(0),
          [ex, ep] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == N ? c : d,
          abi: l,
          functionName: "userConvertInfo",
          args: [a],
          watch: !0,
          onSuccess(e) {
            eu(new b.Z(e[1]._hex).div(new b.Z(1e18))),
              eh(new b.Z(e.depositedEUSDShares._hex)),
              ep(new b.Z(e.mintedPeUSD._hex));
          },
        });
        let [eg, ej] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          "LBR" == j
            ? ej(eo - 0)
            : "eUSD" == j
            ? ea - en < ee
              ? ej(ea - en)
              : ej(ee - 0)
            : "peUSD" == j && "ETH" == N && "eUSD" == f
            ? ec < ed
              ? ej(ec - 0)
              : ej(ed - 0)
            : "peUSD" == j && "ETH" == N && "peUSD" == f && "ARB" == w
            ? ej(ec - 0)
            : "peUSD" == j &&
              "ARB" == N &&
              "peUSD" == f &&
              "ETH" == w &&
              ej(ec - 0);
        }, [j, N, f, w, eo]);
        let [ev, eb] = (0, o.useState)(0);
        (0, x.do)({
          address: e,
          abi: s,
          functionName: "allowance",
          args: [a, c],
          watch: !0,
          chainId: p,
          onSuccess(e) {
            eb(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [eN, eS] = (0, o.useState)("Convert"),
          ef = () => {
            X(""), W(!1);
          },
          [e_, ew] = (0, o.useState)(0),
          [ey, eL] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            if ("peUSD" == j && "ETH" == N && "eUSD" == f && Y > 0) {
              let e = new b.Z(Y > 0 ? Y : 0).multipliedBy(new b.Z(1e18));
              eL(new b.Z(em).multipliedBy(e).div(new b.Z(ex)).toFixed(0));
            }
          }, [Y, j, N, f]),
          (0, x.do)({
            address: e,
            abi: s,
            functionName: "getMintedEUSDByShares",
            args: [0 == ey ? 0 : ey],
            watch: !0,
            chainId: p,
            onSuccess(e) {
              ew(Number(new b.Z(e._hex).div(new b.Z(1e18)).toFixed()) - Y);
            },
          }),
          (0, o.useEffect)(() => {
            let e = 0;
            "eUSD" == j && "ETH" == N
              ? (e = "ETH" == w ? 81243 : 275877)
              : "peUSD" == j
              ? (e = "ETH" == N ? 226653 : 230049)
              : "LBR" == j && (e = "ETH" == N ? 226643 : 230049),
              L < (e * T) / 1e18 && a
                ? eS("Insufficient Gas")
                : 0 >= Number(Y)
                ? eS("Enter an amount")
                : Number(Y) > ev && "eUSD" == j && "ETH" == N && "peUSD" == f
                ? eS("Approve")
                : eS("Convert");
          }, [L, a, T, N, j, f, w, Y, ev]),
          (0, t.jsxs)("div", {
            className: u().omniChain,
            children: [
              (0, t.jsxs)("div", {
                className: u().omniChainFromTo,
                children: [
                  (0, t.jsxs)("div", {
                    className: u().doubleItem,
                    children: [
                      (0, t.jsxs)("div", {
                        className: u().w70,
                        children: [
                          (0, t.jsx)("div", {
                            style: { display: "flex", gap: "10px" },
                            children: (0, t.jsx)("span", { children: "From" }),
                          }),
                          (0, t.jsxs)("div", {
                            className: u().omniSelect,
                            children: [
                              (0, t.jsxs)("div", {
                                className: u().selectName,
                                onClick: () => E(!I),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: u().coin,
                                    children: [
                                      (0, t.jsx)("img", {
                                        src:
                                          "eUSD" == j
                                            ? "/images/icon/eUSD.svg"
                                            : "peUSD" == j
                                            ? "/images/icon/peUSD.svg"
                                            : "/images/logo.png",
                                        alt: "icon",
                                      }),
                                      j,
                                    ],
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "/images/icon/arr.svg",
                                    style: I
                                      ? { transform: "rotate(180deg)" }
                                      : null,
                                    alt: "arr",
                                  }),
                                ],
                              }),
                              I
                                ? (0, t.jsxs)("div", {
                                    className: u().selectItem,
                                    children: [
                                      (0, t.jsxs)("p", {
                                        onClick: () => k("eUSD"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/icon/eUSD.svg",
                                            alt: "eUSD",
                                          }),
                                          "eUSD",
                                        ],
                                      }),
                                      (0, t.jsxs)("p", {
                                        onClick: () => k("peUSD"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/icon/peUSD.svg",
                                            alt: "peUSD",
                                          }),
                                          "peUSD",
                                        ],
                                      }),
                                      (0, t.jsxs)("p", {
                                        onClick: () => k("LBR"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/logo.png",
                                            alt: "LBR",
                                          }),
                                          "LBR",
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: u().w30,
                        children: [
                          (0, t.jsx)("span", { children: "Network" }),
                          (0, t.jsxs)("div", {
                            className: u().omniSelect,
                            children: [
                              (0, t.jsxs)("div", {
                                className: u().selectName,
                                onClick: () => ("eUSD" !== j ? C(!R) : null),
                                style: { border: "none" },
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: u().coin,
                                    children: [
                                      (0, t.jsx)("img", {
                                        src:
                                          "ETH" == N
                                            ? "/images/logo/ETH.svg"
                                            : "/images/icon/arb.svg",
                                        alt: "icon",
                                      }),
                                      N,
                                    ],
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "/images/icon/arr.svg",
                                    style: R
                                      ? { transform: "rotate(180deg)" }
                                      : null,
                                    alt: "icon",
                                  }),
                                ],
                              }),
                              R
                                ? (0, t.jsxs)("div", {
                                    className: u().selectItem,
                                    children: [
                                      (0, t.jsxs)("p", {
                                        onClick: () => D("ETH"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/logo/ETH.svg",
                                            alt: "eth",
                                          }),
                                          "ETH",
                                        ],
                                      }),
                                      (0, t.jsxs)("p", {
                                        onClick: () => D("ARB"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/icon/arb.svg",
                                            alt: "arb",
                                          }),
                                          "ARB",
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: u().refresh,
                    children: (0, t.jsx)("img", {
                      src: "/images/icon/refresh.svg",
                      onClick: () => J(),
                      alt: "refresh",
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: u().doubleItem,
                    children: [
                      (0, t.jsxs)("div", {
                        className: u().w70,
                        children: [
                          (0, t.jsx)("span", { children: "To" }),
                          (0, t.jsxs)("div", {
                            className: u().omniSelect,
                            children: [
                              (0, t.jsxs)("div", {
                                className: u().selectName,
                                onClick: () =>
                                  "eUSD" == j ||
                                  ("peUSD" == j && "ARB" == N) ||
                                  "LBR" == j
                                    ? null
                                    : Z(!H),
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: u().coin,
                                    children: [
                                      (0, t.jsx)("img", {
                                        src:
                                          "eUSD" == f
                                            ? "/images/icon/eUSD.svg"
                                            : "peUSD" == f
                                            ? "/images/icon/peUSD.svg"
                                            : "/images/logo.png",
                                        alt: "icon",
                                      }),
                                      f,
                                    ],
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "/images/icon/arr.svg",
                                    style: H
                                      ? { transform: "rotate(180deg)" }
                                      : null,
                                    alt: "icon",
                                  }),
                                ],
                              }),
                              H
                                ? (0, t.jsxs)("div", {
                                    className: u().selectItem,
                                    children: [
                                      (0, t.jsxs)("p", {
                                        onClick: () => U("eUSD"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/icon/eUSD.svg",
                                            alt: "eusd",
                                          }),
                                          "eUSD",
                                        ],
                                      }),
                                      (0, t.jsxs)("p", {
                                        onClick: () => U("peUSD"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/icon/peUSD.svg",
                                            alt: "peUSD",
                                          }),
                                          "peUSD",
                                        ],
                                      }),
                                      (0, t.jsxs)("p", {
                                        onClick: () => U("LBR"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/logo.png",
                                            alt: "LBR",
                                          }),
                                          "LBR",
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: u().w30,
                        children: [
                          (0, t.jsx)("span", { children: "Network" }),
                          (0, t.jsxs)("div", {
                            className: u().omniSelect,
                            children: [
                              (0, t.jsxs)("div", {
                                className: u().selectName,
                                onClick: () =>
                                  "eUSD" == f || "peUSD" == j || "LBR" == j
                                    ? null
                                    : A(!M),
                                style: { border: "none" },
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: u().coin,
                                    children: [
                                      (0, t.jsx)("img", {
                                        src:
                                          "ETH" == w
                                            ? "/images/logo/ETH.svg"
                                            : "/images/icon/arb.svg",
                                        alt: "icon",
                                      }),
                                      w,
                                    ],
                                  }),
                                  (0, t.jsx)("img", {
                                    src: "/images/icon/arr.svg",
                                    style: M
                                      ? { transform: "rotate(180deg)" }
                                      : null,
                                    alt: "arr",
                                  }),
                                ],
                              }),
                              M
                                ? (0, t.jsxs)("div", {
                                    className: u().selectItem,
                                    children: [
                                      (0, t.jsxs)("p", {
                                        onClick: () => P("ETH"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/logo/ETH.svg",
                                            alt: "eth",
                                          }),
                                          "ETH",
                                        ],
                                      }),
                                      (0, t.jsxs)("p", {
                                        onClick: () => P("ARB"),
                                        children: [
                                          (0, t.jsx)("img", {
                                            src: "/images/icon/arb.svg",
                                            alt: "arb",
                                          }),
                                          "ARB",
                                        ],
                                      }),
                                    ],
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: u().omniChainAmount,
                children: [
                  (0, t.jsx)("div", {
                    className: "justify_space_between",
                    children: (0, t.jsxs)("span", {
                      style: {
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                      },
                      children: [
                        "Balance ",
                        (0, t.jsxs)("span", {
                          children: [
                            Number(eg.toFixed(2)).toLocaleString(),
                            " ",
                            j,
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: O ? "input error" : "input",
                    children: [
                      (0, t.jsx)("div", {
                        children: (0, t.jsx)("input", {
                          type: "number",
                          onWheel: (e) => e.target.blur(),
                          placeholder: "0",
                          id: "amount",
                          onKeyDown: q.bind(this),
                          onChange: K.bind(this),
                          value: Y,
                          ref: $,
                        }),
                      }),
                      (0, t.jsx)("span", {
                        className: V ? "max active" : "max",
                        onClick: () => z(),
                        children: "MAX",
                      }),
                    ],
                  }),
                  O
                    ? (0, t.jsx)("span", {
                        className: "balanceError",
                        children: "Insufficient Gas",
                      })
                    : null,
                  (0, t.jsx)("div", {
                    className: u().willReceive,
                    children: (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("span", { children: "You will receive" }),
                        (0, t.jsxs)("p", {
                          children: [
                            Y > 0 ? Number(Y).toLocaleString() : 0,
                            " ",
                            f,
                            "  ",
                            "peUSD" == j && "ETH" == N && "eUSD" == f && Y > 0
                              ? (0, t.jsxs)("span", {
                                  children: [
                                    "+ ",
                                    Number(e_.toFixed(4)).toLocaleString(),
                                    " eUSD",
                                  ],
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsx)("div", {
                className: u().omniChainBottom,
                children: (0, t.jsx)(F, {
                  switchNetwork: B,
                  balanceOf: eg,
                  omniChainButton: eN,
                  amount: Y,
                  clearInputValue: ef,
                  from: j,
                  formNetwork: N,
                  to: f,
                  toNetwork: w,
                }),
              }),
            ],
          })
        );
      }
      function Z(e) {
        let {} = e,
          {
            from: s,
            eUSD: a,
            eusdAbi: n,
            PeUSDMainnet: i,
            address: c,
            LBR: l,
            formNetwork: d,
            mainnetNetId: m,
            peUSDArbi: h,
            lbrArbi: p,
            to: g,
            peusdAbi: j,
            toNetwork: v,
            arbiNetId: N,
            configurator: S,
            configuratorAbi: f,
          } = (0, o.useContext)(r.S),
          [_, w] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: n,
          functionName: "balanceOf",
          args: [i],
          watch: !0,
          chainId: m,
          onSuccess(e) {
            w(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [y, L] = (0, o.useState)(0);
        (0, x.do)({
          address: S,
          abi: f,
          functionName: "getEUSDMaxLocked",
          watch: !0,
          chainId: m,
          onSuccess(e) {
            L(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [T, I] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: n,
          functionName: "balanceOf",
          args: [c],
          watch: !0,
          chainId: m,
          onSuccess(e) {
            I(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [E, B] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == d ? i : h,
          abi: n,
          functionName: "totalSupply",
          watch: !0,
          onSuccess(e) {
            B(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [k, R] = (0, o.useState)(0);
        (0, x.do)({
          address: h,
          abi: n,
          functionName: "balanceOf",
          args: [c],
          watch: !0,
          chainId: N,
          onSuccess(e) {
            R(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [C, D] = (0, o.useState)(0);
        (0, x.do)({
          address: i,
          abi: n,
          functionName: "balanceOf",
          args: [c],
          watch: !0,
          chainId: m,
          onSuccess(e) {
            D(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [F, H] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == d ? l : p,
          abi: n,
          functionName: "totalSupply",
          watch: !0,
          onSuccess(e) {
            H(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [Z, U] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: n,
          functionName: "balanceOf",
          args: [c],
          watch: !0,
          chainId: m,
          onSuccess(e) {
            U(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [M, A] = (0, o.useState)(0);
        (0, x.do)({
          address: p,
          abi: n,
          functionName: "balanceOf",
          args: [c],
          watch: !0,
          chainId: N,
          onSuccess(e) {
            A(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [P, q] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == d ? i : h,
          abi: j,
          functionName: "userConvertInfo",
          args: [c],
          watch: !0,
          onSuccess(e) {
            q(new b.Z(e[1]._hex).div(new b.Z(1e18)));
          },
        });
        let O = (e) =>
          e >= 1e6
            ? Number(e / 1e6).toLocaleString() + "M"
            : Number(e).toLocaleString();
        return (0, t.jsxs)("div", {
          className: u().overview,
          children: [
            (0, t.jsx)("p", {
              className: "font_bold_16",
              style: { marginLeft: "8px" },
              children: "OVERVIEW",
            }),
            "eUSD" == s
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className: u().dataItem,
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("span", {
                            children: "Total Convertible eUSD",
                          }),
                        }),
                        (0, t.jsxs)("p", {
                          children: [O(_.toFixed(2)), " / ", O(y.toFixed(2))],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: u().dataItem,
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("span", {
                            children: "My eUSD On Ethereum",
                          }),
                        }),
                        (0, t.jsx)("p", {
                          children: Number(T.toFixed(2)).toLocaleString(),
                        }),
                      ],
                    }),
                    "ETH" == v
                      ? (0, t.jsxs)("div", {
                          className: u().dataItem,
                          style: { borderBottom: "none" },
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, t.jsx)("span", {
                                children: "My peUSD On Ethereum",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              children: Number(C.toFixed(2)).toLocaleString(),
                            }),
                          ],
                        })
                      : (0, t.jsxs)("div", {
                          className: u().dataItem,
                          style: { borderBottom: "none" },
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, t.jsx)("span", {
                                children: "My peUSD On Arbitrum",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              children: Number(k.toFixed(2)).toLocaleString(),
                            }),
                          ],
                        }),
                  ],
                })
              : "peUSD" == s
              ? (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className: u().dataItem,
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("span", {
                            children: "peUSD Total Supply",
                          }),
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            "$",
                            Number(E.toFixed(2)).toLocaleString(),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: u().dataItem,
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsxs)("span", {
                            children: [
                              "My peUSD On ",
                              "ETH" == d ? "Ethereum" : "Arbitrum",
                            ],
                          }),
                        }),
                        (0, t.jsx)("p", {
                          children:
                            "ETH" == d
                              ? Number(C.toFixed(2)).toLocaleString()
                              : Number(k.toFixed(2)).toLocaleString(),
                        }),
                      ],
                    }),
                    "eUSD" == g
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsxs)("div", {
                              className: u().dataItem,
                              children: [
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)("span", {
                                    children: "My eUSD On Ethereum",
                                  }),
                                }),
                                (0, t.jsx)("p", {
                                  children: Number(
                                    T.toFixed(2)
                                  ).toLocaleString(),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: u().dataItem,
                              style: { borderBottom: "none" },
                              children: [
                                (0, t.jsx)("div", {
                                  children: (0, t.jsx)("span", {
                                    children: "Convertible peUSD",
                                  }),
                                }),
                                (0, t.jsx)("p", {
                                  children: Number(
                                    P.toFixed(2)
                                  ).toLocaleString(),
                                }),
                              ],
                            }),
                          ],
                        })
                      : null,
                    "peUSD" == g && "ETH" == v
                      ? (0, t.jsxs)("div", {
                          className: u().dataItem,
                          style: { borderBottom: "none" },
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, t.jsx)("span", {
                                children: "My peUSD On Ethereum",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              children: Number(C.toFixed(2)).toLocaleString(),
                            }),
                          ],
                        })
                      : null,
                    "peUSD" == g && "ARB" == v
                      ? (0, t.jsxs)("div", {
                          className: u().dataItem,
                          style: { borderBottom: "none" },
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, t.jsx)("span", {
                                children: "My peUSD On Arbitrum",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              children: Number(k.toFixed(2)).toLocaleString(),
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : (0, t.jsxs)(t.Fragment, {
                  children: [
                    (0, t.jsxs)("div", {
                      className: u().dataItem,
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsx)("span", {
                            children: "LBR Total Supply",
                          }),
                        }),
                        (0, t.jsxs)("p", {
                          children: [
                            "$",
                            Number(F.toFixed(2)).toLocaleString(),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: u().dataItem,
                      children: [
                        (0, t.jsx)("div", {
                          children: (0, t.jsxs)("span", {
                            children: [
                              "My LBR On ",
                              "ETH" == d ? "Ethereum" : "Arbitrum",
                            ],
                          }),
                        }),
                        (0, t.jsx)("p", {
                          children:
                            "ETH" == d
                              ? Number(Z.toFixed(2)).toLocaleString()
                              : Number(M.toFixed(2)).toLocaleString(),
                        }),
                      ],
                    }),
                    "ETH" == v
                      ? (0, t.jsxs)("div", {
                          className: u().dataItem,
                          style: { borderBottom: "none" },
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, t.jsx)("span", {
                                children: "My LBR On Ethereum",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              children: Number(Z.toFixed(2)).toLocaleString(),
                            }),
                          ],
                        })
                      : (0, t.jsxs)("div", {
                          className: u().dataItem,
                          style: { borderBottom: "none" },
                          children: [
                            (0, t.jsx)("div", {
                              children: (0, t.jsx)("span", {
                                children: "My LBR On Arbitrum",
                              }),
                            }),
                            (0, t.jsx)("p", {
                              children: Number(M.toFixed(2)).toLocaleString(),
                            }),
                          ],
                        }),
                  ],
                }),
          ],
        });
      }
      function U(e) {
        let { reBalance: s, amount: a } = e,
          {
            stethvaultAbi: n,
            helperAbi: i,
            helper: c,
            useETHValut: l,
            vaultType: d,
            coinType: m,
            setTipMessage: h,
            ethPrice: p,
            address: g,
          } = (0, o.useContext)(r.S),
          j = new b.Z(a).multipliedBy(new b.Z(1e18)),
          [v, N] = (0, o.useState)(0);
        (0, x.do)({
          address: c,
          abi: i,
          functionName: "getExcessIncomeAmount",
          watch: !0,
          args: [l],
          onSuccess(e) {
            N(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [f, _] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: n,
          functionName: "getDutchAuctionDiscountPrice",
          watch: !0,
          onSuccess(e) {
            _(new b.Z(e._hex).toFixed());
          },
        });
        let w = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          y = (0, o.useRef)(),
          L = async (s) => {
            e.changeAmount(s.target.value),
              B(!1),
              Number(s.target.value) > V && e.changeAmount(V);
          },
          [T, I] = (0, o.useState)(!1),
          [E, B] = (0, o.useState)(!1),
          k = () => {
            e.changeAmount(V), B(!0);
          },
          R = [
            new b.Z(j)
              .div(new b.Z(p))
              .div(new b.Z(f))
              .multipliedBy(1e4)
              .toFixed(0),
          ],
          [C, D] = (0, o.useState)(!1),
          [F, H] = (0, o.useState)(!1),
          {
            isLoading: Z,
            write: U,
            data: M,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: l,
            abi: n,
            functionName: "excessIncomeDistribution",
            args: R,
            onSuccess(e) {
              H(!0);
            },
            onError(e) {
              H(!1);
            },
          });
        (0, x.BX)({
          hash: null == M ? void 0 : M.hash,
          onSuccess(s) {
            H(!1),
              D(!0),
              h({ title: "Rebase Redemption", type: "success" }),
              setTimeout(() => {
                D(!1), e.changeAmount("");
              }, 3e3);
          },
        });
        let A = async (e) => {
            h({ title: "Rebase Redemption", type: "loading" }), U();
          },
          [P, q] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          q(
            new b.Z(j)
              .div(new b.Z(p))
              .div(new b.Z(f))
              .multipliedBy(1e4)
              .div(new b.Z(1e18))
          );
        }, [a]),
          (0, o.useEffect)(() => {
            e.changeAmount(""), B(!1);
          }, [m]);
        let [O, G] = (0, o.useState)("Rebase Redemption");
        (0, o.useEffect)(() => {
          a <= 0 || !a ? G("Enter an amount") : G("Rebase Redemption");
        }, [g, m, a]);
        let [V, W] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let e = (v.toFixed() * p * f) / 1e4;
            Number(s) < e ? W(s) : W(e);
          }, [s, v, f]),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className: "".concat(u().operateMain, " ").concat(u().active),
                children: [
                  (0, t.jsx)("div", {
                    className: "justify_space_between ".concat(u().top),
                    children: (0, t.jsxs)("div", {
                      className: "justify_align_center",
                      style: { gap: "12px" },
                      children: [
                        (0, t.jsx)("div", {
                          className: "boxshadow",
                          children: (0, t.jsx)("img", {
                            src:
                              "eUSD" == d
                                ? "/images/icon/eUSD.svg"
                                : "/images/icon/peUSD.svg",
                            alt: "eth",
                          }),
                        }),
                        (0, t.jsx)("p", {
                          className: u().typeTitle,
                          children: "Rebase Redemption",
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: u().main,
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex_align_start",
                        style: { gap: "24px" },
                        children: [
                          (0, t.jsx)("span", { children: "Balance" }),
                          (0, t.jsxs)("span", {
                            children: [
                              Number(
                                Math.floor(100 * V) / 100
                              ).toLocaleString(),
                              " ",
                              d,
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: T ? "input error" : "input",
                        children: [
                          (0, t.jsx)("div", {
                            children: (0, t.jsx)("input", {
                              type: "number",
                              onWheel: (e) => e.target.blur(),
                              placeholder: "0",
                              id: "amount",
                              onKeyDown: w.bind(this),
                              onChange: L.bind(this),
                              value: a,
                              ref: y,
                            }),
                          }),
                          (0, t.jsx)("span", {
                            className: E ? "max active" : "max",
                            onClick: () => k(),
                            children: "MAX",
                          }),
                        ],
                      }),
                      T
                        ? (0, t.jsx)("span", {
                            className: "balanceError",
                            children: "Insufficient Gas",
                          })
                        : null,
                      (0, t.jsxs)("div", {
                        className: u().willReceive,
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("span", {
                                children: "You will receive",
                              }),
                              (0, t.jsxs)("p", {
                                children: [
                                  "NaN" == P.toFixed() || 1e-4 > P.toFixed()
                                    ? 0
                                    : Number(P.toFixed(4)).toLocaleString(),
                                  "/",
                                  1e-4 > v.toFixed()
                                    ? 0
                                    : v.toFixed(4).toLocaleString(),
                                  " ",
                                  m,
                                  " from ",
                                  m,
                                  " Rebase Rewards",
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("span", {
                                children: "Current discount",
                              }),
                              (0, t.jsxs)("p", {
                                children: [100 - f / 100, "%"],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: u().bottomBut,
                    children: (0, t.jsx)("div", {
                      className:
                        Z || F || V <= 0 || "Enter an amount" == O
                          ? "button disabled "
                          : "button",
                      onClick: () => (!Z && a > 0 ? A() : null),
                      children:
                        Z || F
                          ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("img", {
                                  className: "loading",
                                  src: "/images/icon/loading.svg",
                                  alt: "loading",
                                }),
                                O,
                              ],
                            })
                          : (0, t.jsx)(t.Fragment, { children: O }),
                    }),
                  }),
                ],
              }),
              Z || F ? (0, t.jsx)(S.Z, {}) : null,
              C ? (0, t.jsx)(S.Z, {}) : null,
            ],
          })
        );
      }
      function M(e) {
        let {
            address: s,
            helperAbi: a,
            helper: n,
            eUSD: i,
            eusdAbi: c,
            coinType: l,
            setCoinType: d,
            stETH: m,
            stETHVault: h,
            wstETH: p,
            wstETHVault: g,
            WBETH: j,
            wBETHVault: v,
            rETH: N,
            rETHVault: S,
            asCoin: w,
            setAsCoin: y,
            useETH: L,
            setUseETH: T,
            useETHValut: I,
            setUseETHValut: C,
            PeUSDMainnet: D,
            vaultType: F,
            stethvaultAbi: M,
            mainnetNetId: A,
            safeCollateralRate: P,
            configurator: q,
            configuratorAbi: O,
            addressList: G,
            mode: V,
          } = (0, o.useContext)(r.S),
          [W, Y] = (0, o.useState)(""),
          [X, $] = (0, o.useState)(""),
          [K, z] = (0, o.useState)(""),
          [J, Q] = (0, o.useState)(""),
          ee = (e) => {
            Y(e);
          },
          es = (e) => {
            $(e);
          },
          ea = (e) => {
            z(e);
          },
          et = (e) => {
            Q(e);
          },
          en = (e) => {
            "stETH" == e || "ETH" == e
              ? (T(m), C(h))
              : "wstETH" == e
              ? (T(p), C(g))
              : "WBETH" == e
              ? (T(j), C(v))
              : (T(N), C(S));
          },
          { menuIndex: ei } = e,
          ec = async (s) => {
            d(s),
              "ETH" == s && y("stETH"),
              e.changeShowLoadingDash(!0),
              setTimeout(() => {
                e.changeShowLoadingDash(!1);
              }, 1500);
          },
          [el, eo] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: a,
          functionName: "getWithdrawableAmount",
          args: [s, I],
          watch: !0,
          chainId: A,
          onSuccess(e) {
            eo(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [er, ed] = (0, o.useState)(2e3);
        (0, x.do)({
          address: n,
          abi: a,
          functionName: "getCollateralRatio",
          args: [s, I],
          watch: !0,
          chainId: A,
          onSuccess(e) {
            ed(new b.Z(e._hex).div(new b.Z(1e18)));
          },
        });
        let [eu, em] = (0, o.useState)(0);
        (0, x.do)({
          address: "eUSD" == F ? i : D,
          abi: c,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          chainId: A,
          onSuccess(e) {
            em(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [eh, ex] = (0, o.useState)(0),
          [ep, eg] = (0, o.useState)(0);
        (0, x.do)({
          address: I,
          abi: M,
          functionName: "getBorrowedOf",
          args: [s],
          watch: !0,
          chainId: A,
          onSuccess(e) {
            let s = new b.Z(e._hex).div(new b.Z(1e18)).toFixed();
            2 == ei && "peUSD" == F && Number(s) > 0
              ? ex(Number(s) + 0.1)
              : ex(s),
              eg(s);
          },
        });
        let [ej, ev] = (0, o.useState)(0);
        (0, x.do)({
          address: q,
          abi: O,
          functionName: "mintVaultMaxSupply",
          args: [I],
          watch: !0,
          chainId: A,
          onSuccess(e) {
            ev(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [eb, eN] = (0, o.useState)(0);
        (0, x.do)({
          address: I,
          abi: M,
          functionName: "getPoolTotalCirculation",
          watch: !0,
          chainId: A,
          onSuccess(e) {
            eN(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let eS = [
            {
              info:
                "To mint " +
                F +
                ", you are required to deposit a specific amount of ETH (authorizing protocol to convert ETH to " +
                w +
                ") or Rebase LST as collateral. You can then mint " +
                F +
                " against your collateral up to a minimum collateral ratio of " +
                100 * P +
                "%.",
              info2:
                "To mint " +
                F +
                ", you are required to deposit a specific amount of " +
                l +
                " as collateral. You can then mint " +
                F +
                " against your collateral up to a minimum collateral ratio of " +
                100 * P +
                "%.",
            },
            {
              info: "When you withdraw your collateral, you receive the LST you originally deposited, which will reduce your exposure to price changes. However, it's important to note that this action can lead to a decrease in your collateral ratio and potentially expose you to the risk of liquidation if the value of ETH dips below a specified limit. To prevent any loss of funds, it's crucial to consistently keep an eye on your loan and maintain a secure collateral ratio.",
            },
            {
              info: "Repay your eUSD/peUSD debt to increase your Collateral Ratio and reduce your exposure to the risk of liquidation. However, you won't be able to continue earning yield from this part of the eUSD once you pay it back.",
            },
            {
              info:
                "At some point, you may consider exchanging your " +
                F +
                " for " +
                l +
                ". The Lybra Protocol's Rigid Redemption Mechanism ensures a consistent 1:1 exchange rate between " +
                F +
                " and LST.",
            },
          ],
          [ef, e_] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: a,
          functionName: "getAssetPrice",
          args: [I],
          watch: !0,
          chainId: A,
          onSuccess(e) {
            e_(new b.Z(e._hex).div(new b.Z(1e8)));
          },
        }),
          (0, o.useEffect)(() => {
            en(l);
          }, [l]),
          (0, o.useEffect)(() => {
            "ETH" == l && en(w);
          }, [w]);
        let [ew, ey] = (0, o.useState)({ amount: 0, address: "" });
        return (
          (0, x.do)({
            address: n,
            abi: a,
            functionName: "getRedeemableAmounts",
            args: [G, I],
            watch: !0,
            chainId: A,
            onSuccess(e) {
              let s = [];
              for (let a = 0; a < e.length; a++)
                s.push({
                  amount:
                    1e17 > new b.Z(e[a]._hex).toFixed()
                      ? 0
                      : new b.Z(e[a]._hex).toFixed() / 1e18,
                  address: G[a],
                });
              s.sort(function (e, s) {
                return s.amount - e.amount;
              }),
                s[0] && null !== s[0] && void 0 !== s[0] && ey(s[0]);
            },
          }),
          (0, t.jsxs)("div", {
            className:
              0 == V
                ? "".concat(u().dashboardMain)
                : ""
                    .concat(u().dashboardMain, " ")
                    .concat(u().dashboardMain_dark, " ", "globals_dark"),
            children: [
              (0, t.jsxs)("div", {
                className: u().dashMain,
                children: [
                  4 != ei
                    ? (0, t.jsxs)("div", {
                        className: u().topCoinList,
                        children: [
                          0 != ei
                            ? (0, t.jsx)("div", {
                                className: "".concat(u().coinItem),
                                children: "ETH",
                              })
                            : (0, t.jsx)("div", {
                                className:
                                  "ETH" == l
                                    ? ""
                                        .concat(u().coinItem, " ")
                                        .concat(u().optional, " ")
                                        .concat(u().active)
                                    : ""
                                        .concat(u().coinItem, " ")
                                        .concat(u().optional),
                                onClick: () => ec("ETH"),
                                children: "ETH",
                              }),
                          (0, t.jsx)("div", {
                            className:
                              "stETH" == l
                                ? ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional, " ")
                                    .concat(u().active)
                                : ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional),
                            onClick: () => ec("stETH"),
                            children: "stETH",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "wstETH" == l
                                ? ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional, " ")
                                    .concat(u().active)
                                : ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional),
                            onClick: () => ec("wstETH"),
                            children: "wstETH",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "WBETH" == l
                                ? ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional, " ")
                                    .concat(u().active)
                                : ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional),
                            onClick: () => ec("WBETH"),
                            children: "WBETH",
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "rETH" == l
                                ? ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional, " ")
                                    .concat(u().active)
                                : ""
                                    .concat(u().coinItem, " ")
                                    .concat(u().optional),
                            style: { borderRight: "none" },
                            onClick: () => ec("rETH"),
                            children: "rETH",
                          }),
                        ],
                      })
                    : null,
                  0 == ei
                    ? (0, t.jsx)(E, {
                        mintVaultMaxSupply: ej,
                        poolTotalCirculation: eb,
                        coinType: l,
                        useETH: L,
                        useETHValut: I,
                        assetPrice: ef,
                        depositNum: W,
                        mintNum: X,
                        changeDepositNum: ee,
                        changeMintNum: es,
                      })
                    : 1 == ei
                    ? (0, t.jsx)(B, {
                        maxBalance: el,
                        amount: K,
                        changeAmount: ea,
                      })
                    : 2 == ei
                    ? (0, t.jsx)(k, {
                        borrowedRepay: ep,
                        reBalance: eu,
                        borrowed: eh,
                        amount: K,
                        changeAmount: ea,
                      })
                    : 3 == ei
                    ? (0, t.jsx)(R, {
                        reBalance: eu,
                        amount: K,
                        changeAmount: ea,
                        providerList: ew,
                        assetPrice: ef,
                      })
                    : (0, t.jsx)(H, {}),
                  4 != ei
                    ? (0, t.jsx)("div", {
                        className: u().operateDesc,
                        children: (0, t.jsx)("span", {
                          children:
                            0 !== ei
                              ? eS[ei].info
                              : "ETH" == l
                              ? eS[ei].info
                              : eS[ei].info2,
                        }),
                      })
                    : null,
                  3 == ei && "stETH" == l
                    ? (0, t.jsx)(U, {
                        reBalance: eu,
                        amount: J,
                        changeAmount: et,
                        providerList: ew,
                        assetPrice: ef,
                      })
                    : null,
                  3 == ei && "stETH" == l
                    ? (0, t.jsx)("div", {
                        className: u().operateDesc,
                        children: (0, t.jsx)("span", {
                          dangerouslySetInnerHTML: {
                            __html:
                              "Users can redeem their eUSD for stETH's rebase rewards in the protocol. The eUSD used for redemption will be used to trigger an eUSD rebase. The redemption is conducted in a Dutch Auction, offering a 1% discount every 30 minutes, capped at 47%.",
                          },
                        }),
                      })
                    : null,
                ],
              }),
              (0, t.jsxs)("div", {
                className: u().dashInfo,
                children: [
                  4 != ei
                    ? (0, t.jsx)(f, {
                        providerList: ew,
                        mintVaultMaxSupply: ej,
                        poolTotalCirculation: eb,
                        withdraw: el,
                        rate: er,
                        assetPrice: ef,
                        reBalance: eu,
                      })
                    : (0, t.jsx)(Z, {}),
                  ei < 3
                    ? (0, t.jsx)(_, {
                        menuIndex: ei,
                        coinType: l,
                        rate: er,
                        assetPrice: ef,
                        depositNum: W,
                        mintNum: X,
                        amount: K,
                      })
                    : null,
                  4 == ei
                    ? (0, t.jsx)(_, {
                        menuIndex: ei,
                        coinType: l,
                        rate: er,
                        assetPrice: ef,
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      }
      function A(e) {
        let s, a, n, i, c;
        let {
            setTipMessage: l,
            ProtocolRewardsPool: d,
            ethlbrpool: u,
            address: m,
            eusdusdcpool: h,
            eusdusdclpToken: p,
            lbrethlp: g,
            eusdAbi: j,
            esLBRBoost: N,
            boostAbi: S,
            LBR: f,
            lpPoolAbi: _,
            fundAbi: w,
            poolAbi: y,
            StakingRewardsOnGoerli: L,
            arbpeUSDUSDClp: T,
          } = (0, o.useContext)(r.S),
          {
            functionName: I,
            amount: E,
            type: B,
            unit: k,
            userLockStatusId: R,
            boostTime: C,
            max: D,
            openSwitch: F,
            esLBRMax: H,
            switchNet: Z,
          } = e;
        new Date().getTime();
        let U = new b.Z(E).multipliedBy(new b.Z(1e18)).toFixed(),
          [M, A] = (0, o.useState)(!1),
          [P, q] = (0, o.useState)(0);
        ((0, x.do)({
          address: "pool" == B ? g : "LBR" == B ? f : "ETH" == Z ? p : T,
          abi: j,
          functionName: "allowance",
          args: [
            m,
            "eusd" == B && "ETH" == Z
              ? h
              : "eusd" == B && "ARB" == Z
              ? L
              : "LBR" == B
              ? N
              : u,
          ],
          watch: !0,
          onSuccess(e) {
            q(Number(e._hex) / 1e18);
          },
        }),
        "pool" == B)
          ? E > P && "Stake" == I
            ? ((a = g),
              (i = "Approve"),
              (s = "approve"),
              (n = j),
              (c = [
                u,
                "115792089237316195423570985008687907853269984665640564039457",
              ]))
            : ((a = u),
              (n = "Stake" == I ? y : _),
              (i = I),
              (s = "Stake" == I ? "stake" : "withdraw"),
              (c = [U]))
          : "eusd" == B
          ? E > P && "Stake" == I
            ? ((a = "ETH" == Z ? p : T),
              (i = "Approve"),
              (s = "approve"),
              (n = j),
              (c = [
                "ETH" == Z ? h : L,
                "115792089237316195423570985008687907853269984665640564039457",
              ]))
            : ((a = "ETH" == Z ? h : L),
              (n = "Stake" == I ? y : _),
              (i = I),
              (s = "Stake" == I ? "stake" : "withdraw"),
              (c = [U]))
          : "LBR" == B
          ? ((s = "setLockStatus"),
            (a = N),
            (n = S),
            (i = "Lock"),
            (c = [30 == R ? 0 : 90 == R ? 1 : 180 == R ? 2 : 3, U, !F]))
          : ((s = "Stake" == I ? "stake" : "unstake"),
            (a = d),
            (n = w),
            (i = I),
            (c = [U]));
        let {
          isLoading: O,
          write: G,
          data: V,
        } = (0, x.GG)({
          mode: "recklesslyUnprepared",
          address: a,
          abi: n,
          functionName: s,
          args: c,
          onSuccess(e) {
            A(!0);
          },
          onError(s) {
            A(!1), e.updateIsLoading(!1);
          },
        });
        (0, x.BX)({
          hash: null == V ? void 0 : V.hash,
          onSuccess(s) {
            "Approve" !== i && "LBR" !== B && e.changeShowProp(!1),
              A(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              l({ title: i + " " + ("LBR" == B ? "" : k), type: "success" }),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 3e3);
          },
        });
        var W = Date.parse(new Date());
        let Y = async () => {
          "LBR" == B && W > 0
            ? (l({ title: i + " " + ("LBR" == B ? "" : k), type: "loading" }),
              e.updateIsLoading(!0),
              G())
            : (("esLBR" !== k && E > 0) || ("esLBR" == k && E > 0)) &&
              "LBR" != B
            ? (l({ title: i + " " + ("LBR" == B ? "" : k), type: "loading" }),
              e.updateIsLoading(!0),
              G())
            : E > 0 &&
              (F ? H : D) <= 0 &&
              v.warning({
                content: "You have no claimable " + ("LBR" == B ? "" : k) + ".",
                duration: 5e3,
              });
        };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              O ||
              M ||
              ("LBR" == B && E <= 0) ||
              E <= 0 ||
              ("LBR" == B && W < 0)
                ? "button disabled mini"
                : "button blue  mini",
            onClick: () => (O ? null : Y()),
            children:
              O || M
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("img", {
                        className: "loading",
                        src: "/images/icon/loading.svg",
                        alt: "loading",
                      }),
                      E <= 0 ? "Enter an amount" : i,
                      " ",
                      "LBR" == B || E <= 0 ? null : k,
                    ],
                  })
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      E <= 0 ? "Enter an amount" : i,
                      " ",
                      "LBR" == B || E <= 0 ? null : k,
                    ],
                  }),
          }),
        });
      }
      function P(e) {
        let { mode: s } = (0, o.useContext)(r.S),
          [a, n] = (0, o.useState)(""),
          { propValue: i, type: c } = e,
          l = (0, o.useRef)(),
          d = (e) => {
            Number(e.target.value) > Number(i.max)
              ? n(i.max)
              : n(e.target.value);
          },
          u = (e) => {
            e.stopPropagation();
          },
          m = (s) => {
            e.changeShowProp(s);
          },
          h = async (s) => {
            e.updateIsLoading(s);
          },
          x = async (s) => {
            e.updateIsSuccess(s);
          },
          p = async () => {
            n(j ? i.esLBRMax : i.max);
          },
          g = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          };
        (0, o.useEffect)(() => {
          l.current.focus();
        }, []);
        let [j, v] = (0, o.useState)(!1);
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              0 == s
                ? "".concat(L().eranProp)
                : "".concat(L().eranProp, " ").concat(L().eranProp_dark),
            onClick: () => m(!1),
            children: (0, t.jsxs)("div", {
              className: L().propMain,
              onClick: u.bind(this),
              children: [
                (0, t.jsxs)("div", {
                  className: "justify_space_between",
                  children: [
                    (0, t.jsxs)("div", {
                      className: L().switchBtn,
                      children: [
                        (0, t.jsx)("p", { children: i.title }),
                        "LBR" == c
                          ? (0, t.jsxs)("div", {
                              className: L().switchBtn,
                              style: { gap: "10px" },
                              children: [
                                (0, t.jsx)("input", {
                                  className: "switch-btn switch-btn-animbg",
                                  type: "checkbox",
                                  checked: j,
                                  onChange: () => v(!j),
                                }),
                                (0, t.jsx)("span", { children: "use esLBR" }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    (0, t.jsx)("div", {
                      className: L().closeIcon,
                      onClick: () => m(!1),
                      children: (0, t.jsx)("img", {
                        src: "/images/icon/close.svg",
                        alt: "close",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: L().propInput,
                  children: [
                    (0, t.jsxs)("div", {
                      className: "justify_space_between",
                      children: [
                        (0, t.jsx)("span", { children: i.title2 }),
                        (0, t.jsxs)("span", {
                          className: "maxalitem",
                          children: [
                            "Max:",
                            j
                              ? (
                                  Math.floor(100 * i.esLBRMax) / 100
                                ).toLocaleString()
                              : (
                                  Math.floor(100 * i.max) / 100
                                ).toLocaleString(),
                            " ",
                            (0, t.jsx)("span", {
                              className: "maxBg",
                              onClick: () => p(),
                              children: (0, t.jsx)("span", {
                                className: "max",
                                children: "MAX",
                              }),
                            }),
                            " ",
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "justify_space_between",
                      children: [
                        (0, t.jsx)("input", {
                          style: { width: "70%" },
                          type: "number",
                          onWheel: (e) => e.target.blur(),
                          value: a,
                          onChange: d.bind(this),
                          onKeyDown: g.bind(this),
                          ref: l,
                        }),
                        (0, t.jsx)("p", {
                          className: "unit",
                          children: i.unit,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)(A, {
                  amount: a,
                  openSwitch: j,
                  type: c,
                  switchNet: i.switchNet,
                  max: i.max,
                  esLBRMax: i.esLBRMax,
                  boostTime: i.boostTime,
                  userLockStatusId: i.userLockStatusId,
                  functionName: i.title2,
                  unit: i.unit,
                  updateIsLoading: h,
                  updateIsSuccess: x,
                  changeShowProp: m,
                }),
              ],
            }),
          }),
        });
      }
      function q(e) {
        let s, a;
        let {
            setTipMessage: n,
            address: i,
            EUSDMiningIncentives: c,
            ProtocolRewardsPool: l,
            eusdusdcpool: d,
            EUSDMiningIncentivesAbi: u,
            fundAbi: m,
            StakingRewardsOnGoerli: h,
            LZEndPointAbi: p,
            goerliEndPoint: g,
            mainnetId: j,
            stakingRewardsOnGoerliAbi: N,
            arbiNetId: S,
            ethlbrpool: f,
          } = (0, o.useContext)(r.S),
          {
            functionName: _,
            type: w,
            rewards: y,
            isOtherEarningsClaimable: L,
            switchNet: T,
          } = e,
          [I, E] = (0, o.useState)(!1),
          B = new (D())(),
          [k, R] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          i &&
            3 == w &&
            "ARB" == T &&
            R(B.eth.abi.encodeParameters(["address", "uint256"], [i, y + ""]));
        }, [i, T, w]);
        let [C, F] = (0, o.useState)(0);
        (0, x.do)({
          address: g,
          abi: p,
          functionName: "estimateFees",
          args: [j, h, k, !1, "0x"],
          watch: !0,
          chainId: S,
          onSuccess(e) {
            F(new b.Z(e.nativeFee._hex).multipliedBy(1.01).toFixed(0));
          },
        });
        let H = [],
          Z = { value: 0 };
        0 == w
          ? ((s = c), (a = u))
          : 1 == w
          ? ((s = l), (a = m))
          : 2 == w
          ? ((s = f), (a = m))
          : 3 == w &&
            ((s = "ETH" == T ? d : h),
            (a = "ETH" == T ? m : N),
            "ARB" == T &&
              ((H = ["0x0000000000000000000000000000000000000000", "0x"]),
              (Z = { value: C })));
        let {
          isLoading: U,
          write: M,
          data: A,
        } = (0, x.GG)({
          mode: "recklesslyUnprepared",
          address: s,
          abi: a,
          functionName: "getReward",
          overrides: Z,
          args: H,
          onSuccess(e) {
            E(!0);
          },
          onError(s) {
            E(!1), e.updateIsLoading(!1);
          },
        });
        (0, x.BX)({
          hash: null == A ? void 0 : A.hash,
          onSuccess(s) {
            E(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              n({ title: "Claim " + _, type: "success" }),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 3e3);
          },
        });
        let P = async () => {
          (0 !== Number(w) && y > 0) || (0 == Number(w) && !1 == L && y > 0)
            ? (n({ title: "Claim " + _, type: "loading" }),
              e.updateIsLoading(!0),
              M())
            : y <= 0
            ? v.warning({
                content: "You have no claimable " + _ + ".",
                duration: 5e3,
              })
            : 0 == Number(w) && !0 == L
            ? v.warning({
                content:
                  "You need to provide at least 5% mint value in dLP to become eligible for your esLBR emission.",
                duration: 5e3,
              })
            : v.warning({
                content:
                  "Your lock-in period has not ended. You can't claim your esLBR now.",
                duration: 5e3,
              });
        };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              U || I || y <= 0 || (0 == Number(w) && L)
                ? "button disabled mini"
                : "button  mini",
            onClick: () => (U ? null : P()),
            children:
              U || I
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("img", {
                        className: "loading",
                        src: "/images/icon/loading.svg",
                        alt: "loading",
                      }),
                      "Claim ",
                      _,
                    ],
                  })
                : (0, t.jsxs)(t.Fragment, { children: ["Claim ", _] }),
          }),
        });
      }
      function O(e) {
        let {
            address: s,
            setTipMessage: a,
            ProtocolRewardsPool: n,
            fundAbi: i,
          } = (0, o.useContext)(r.S),
          [c, l] = (0, o.useState)(!1),
          {
            isLoading: d,
            write: u,
            data: m,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: n,
            abi: i,
            functionName: "withdraw",
            args: [s],
            onSuccess(e) {
              l(!0);
            },
            onError(s) {
              l(!1), e.updateIsLoading(!1);
            },
          });
        (0, x.BX)({
          hash: null == m ? void 0 : m.hash,
          onSuccess(s) {
            l(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              a({ title: "Withdraw LBR", type: "success" }),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 3e3);
          },
        });
        let h = async () => {
          e.claimable > 0 &&
            (a({ title: "Withdraw LBR", type: "loading" }),
            e.updateIsLoading(!0),
            u());
        };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              d || c || e.claimable <= 0
                ? "button disabled mini"
                : "button blue  mini",
            onClick: () => (d ? null : h()),
            children:
              d || c
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("img", {
                        className: "loading",
                        src: "/images/icon/loading.svg",
                        alt: "loading",
                      }),
                      "Withdraw LBR",
                    ],
                  })
                : (0, t.jsx)(t.Fragment, { children: "Withdraw LBR" }),
          }),
        });
      }
      function G(e) {
        let s;
        let {
            setTipMessage: a,
            ProtocolRewardsPool: n,
            fundAbi: i,
          } = (0, o.useContext)(r.S),
          [c, l] = (0, o.useState)(!1),
          { type: d } = e;
        s = "new" == d ? "Cancel" : "Cancel Old Vesting";
        let {
          isLoading: u,
          write: m,
          data: h,
        } = (0, x.GG)({
          mode: "recklesslyUnprepared",
          address: n,
          abi: i,
          functionName: "reStake",
          onSuccess(e) {
            l(!0);
          },
          onError(s) {
            l(!1), e.updateIsLoading(!1);
          },
        });
        (0, x.BX)({
          hash: null == h ? void 0 : h.hash,
          onSuccess(t) {
            l(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              a({ title: s, type: "success" }),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 3e3);
          },
        });
        let p = async () => {
          a({ title: s, type: "loading" }), e.updateIsLoading(!0), m();
        };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className: u || c ? "button disabled mini" : "button blue  mini",
            onClick: () => (u ? null : p()),
            children:
              u || c
                ? (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("img", {
                        className: "loading",
                        src: "/images/icon/loading.svg",
                        alt: "loading",
                      }),
                      s,
                      "old" == d
                        ? (0, t.jsxs)("div", {
                            className: "".concat(L().boostQa, " "),
                            style: { textAlign: "left" },
                            children: [
                              (0, t.jsx)("img", {
                                src: "/images/icon/qaw.svg",
                                alt: "qaw",
                              }),
                              (0, t.jsx)("p", {
                                className: L().tipMain,
                                children:
                                  "The new LBR contract has been deployed. You need to cancel your old vesting before you can convert your esLBR to the new LBR.",
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
                : (0, t.jsxs)(t.Fragment, {
                    children: [
                      s,
                      "old" == d
                        ? (0, t.jsxs)("div", {
                            className: "".concat(L().boostQa, " "),
                            style: { textAlign: "left" },
                            children: [
                              (0, t.jsx)("img", {
                                src: "/images/icon/qaw.svg",
                                alt: "qaw",
                              }),
                              (0, t.jsx)("p", {
                                className: L().tipMain,
                                children:
                                  "The new LBR contract has been deployed. You need to cancel your old vesting before you can convert your esLBR to the new LBR.",
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
          }),
        });
      }
      function V(e) {
        let { stakedEth: s, minted: a, lpPrice: n, minDlpRatio: i } = e,
          {
            address: c,
            EUSDMiningIncentives: l,
            EUSDMiningIncentivesAbi: d,
            lbrethlp: u,
            eusdAbi: m,
            ethlbrpool: p,
            setTipMessage: g,
            poolAbi: j,
            mode: v,
            mainnetNetId: N,
          } = (0, o.useContext)(r.S),
          [S, f] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: m,
          functionName: "allowance",
          args: [c, p],
          watch: !0,
          chainId: N,
          onSuccess(e) {
            f(Number(e._hex) / 1e18);
          },
        });
        let _ = (s) => {
            e.changeShowDlpProp(s);
          },
          w = (e) => {
            e.stopPropagation();
          },
          [y, L] = (0, o.useState)(""),
          T = (0, o.useRef)(),
          I = async (e) => {
            L(e.target.value), Number(e.target.value) > s && L(s);
          },
          E = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          [B, k] = (0, o.useState)({
            fName: "",
            hyAddress: "",
            abi: "",
            args: [],
          }),
          [R, C] = (0, o.useState)("Confirm");
        (0, o.useEffect)(() => {
          if (y) {
            let e = new b.Z(y).multipliedBy(new b.Z(1e18)).toFixed();
            y > s
              ? C("Insufficient Gas")
              : y > S
              ? (C("Approve"),
                k({
                  fName: "approve",
                  hyAddress: u,
                  abi: m,
                  args: [
                    p,
                    "115792089237316195423570985008687907853269984665640564039457",
                  ],
                }))
              : (C("Confirm"),
                k({ fName: "stake", hyAddress: p, abi: j, args: [e] }));
          }
        }, [y]),
          (0, o.useEffect)(() => {
            Z(y * n);
          }, [y]);
        let [D, F] = (0, o.useState)(100);
        (0, x.do)({
          address: l,
          abi: d,
          functionName: "stakedLBRLpValue",
          args: [c],
          watch: !0,
          onSuccess(e) {
            F(Number(e._hex) / 1e18);
          },
        });
        let [H, Z] = (0, o.useState)(0),
          U = () => {
            let e = 0.05 * a - D;
            e <= 0 ? (Z(0), L(0)) : (L(e / n), Z(e));
          },
          [M, A] = (0, o.useState)(!1),
          {
            isLoading: P,
            write: q,
            data: O,
          } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: B.hyAddress,
            abi: B.abi,
            functionName: B.fName,
            args: B.args,
            onSuccess(e) {
              A(!0);
            },
            onError(s) {
              A(!1), e.updateIsLoading(!1);
            },
          });
        (0, x.BX)({
          hash: null == O ? void 0 : O.hash,
          onSuccess(s) {
            "Approve" !== R && L(""),
              A(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              g({ title: R, type: "success" }),
              setTimeout(() => {
                e.updateIsSuccess(!1), "Approve" == R ? C("Confirm") : _(!1);
              }, 3e3);
          },
        });
        let G = () => {
          y <= s &&
            (g({ title: R, type: "loading" }), e.updateIsLoading(!0), q());
        };
        return (0, t.jsx)("div", {
          className:
            0 == v
              ? "".concat(h().prop)
              : ""
                  .concat(h().prop, " ")
                  .concat(h().prop_dark, " ", "globals_dark"),
          onClick: () => _(!1),
          children: (0, t.jsxs)("div", {
            className: h().propMain,
            onClick: w.bind(this),
            children: [
              (0, t.jsxs)("div", {
                className: "justify_space_between",
                style: {
                  borderBottom: "1px solid #e4e1e1",
                  padding: "10px 20px",
                },
                children: [
                  (0, t.jsx)("p", {
                    className: h().title,
                    children: "Provide dLP",
                  }),
                  (0, t.jsx)("div", {
                    className: h().closeIcon,
                    onClick: () => _(!1),
                    children: (0, t.jsx)("img", {
                      src: "/images/icon/close.svg",
                      alt: "close",
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: h().autoMain,
                children: [
                  (0, t.jsx)("div", {
                    className: h().propCenter,
                    children: (0, t.jsxs)("p", {
                      style: { marginBottom: "10px" },
                      children: [
                        "Provide at least ",
                        i,
                        "% mint value ($",
                        Number(0.025 * a).toLocaleString(),
                        ") in dLP (your LBR/ETH LP on Uniswap V2) to become eligible for esLBR emission from the mint pool. Use RECOMMEND to quickly maintain ",
                        2 * i,
                        "% mint value in dLP.",
                      ],
                    }),
                  }),
                  (0, t.jsxs)("div", {
                    className: h().propInfo,
                    children: [
                      (0, t.jsxs)("div", {
                        className: h().available,
                        children: [
                          (0, t.jsxs)("span", {
                            children: [
                              "Available ",
                              Number(
                                Math.floor(100 * s) / 100
                              ).toLocaleString(),
                              " LBR/ETH LP",
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: h().addLink,
                            children: [
                              (0, t.jsx)("img", {
                                alt: "icon",
                                src:
                                  0 == v
                                    ? "images/icon/add.svg"
                                    : "images/icon/add_dark.svg",
                              }),
                              (0, t.jsx)("a", {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://app.uniswap.org/#/add/v2/ETH/0xed1167b6Dc64E8a366DB86F2E952A482D0981ebd",
                                children: "Add Liquidity",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "input propInput",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("img", {
                                src: "/images/earn/lbrlp.svg",
                                alt: "logo",
                              }),
                              (0, t.jsx)("input", {
                                type: "number",
                                onWheel: (e) => e.target.blur(),
                                placeholder: "0",
                                id: "lpNum",
                                onKeyDown: E.bind(this),
                                onChange: I.bind(this),
                                value: y,
                                ref: T,
                              }),
                            ],
                          }),
                          (0, t.jsx)("span", {
                            className: "recommend",
                            onClick: () => U(),
                            children: "RECOMMEND",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("p", {
                        className: h().approximate,
                        children: [
                          "$",
                          Number(H.toFixed(4).toLocaleString()),
                          " dLP",
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: h().valueData,
                        children: [
                          (0, t.jsxs)("p", {
                            children: [
                              "Total Value of eUSD Minted ",
                              (0, t.jsxs)("span", {
                                children: [
                                  "$",
                                  Number(a.toFixed(2)).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "Minimum dLP Value Required for Emission ",
                              (0, t.jsxs)("span", {
                                children: [
                                  "$",
                                  Number(0.025 * a).toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("p", {
                            children: [
                              "Current dLP Value ",
                              (0, t.jsxs)("span", {
                                children: ["$", Number(D).toLocaleString()],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: h().button,
                    children: (0, t.jsx)("div", {
                      className:
                        P || M || "Insufficient Gas" == R
                          ? "button disabled mini"
                          : "button blue  mini",
                      onClick: () => (P ? null : G()),
                      children:
                        P || M
                          ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                (0, t.jsx)("img", {
                                  className: "loading",
                                  src: "/images/icon/loading.svg",
                                  alt: "loading",
                                }),
                                R,
                              ],
                            })
                          : (0, t.jsx)(t.Fragment, { children: R }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function W(e) {
        let {
            setTipMessage: s,
            ProtocolRewardsPool: a,
            fundAbi: n,
            mainnetNetId: i,
            address: c,
            mode: l,
          } = (0, o.useContext)(r.S),
          [d, u] = (0, o.useState)(!1),
          { vesting: m } = e,
          [h, p] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: n,
          functionName: "getPreUnlockableAmount",
          watch: !0,
          args: [c],
          chainId: i,
          onSuccess(e) {
            p(Number(e._hex) / 1e18);
          },
        });
        let {
          isLoading: g,
          write: j,
          data: v,
        } = (0, x.GG)({
          mode: "recklesslyUnprepared",
          address: a,
          abi: n,
          functionName: "unlockPrematurely",
          onSuccess(e) {
            u(!0);
          },
          onError(s) {
            u(!1), e.updateIsLoading(!1);
          },
        });
        (0, x.BX)({
          hash: null == v ? void 0 : v.hash,
          onSuccess(a) {
            u(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              s({ title: "Advanced Vesting", type: "success" }),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 3e3);
          },
        });
        let b = async () => {
            s({ title: "Advanced Vesting", type: "loading" }),
              e.updateIsLoading(!0),
              j();
          },
          N = (e) => {
            e.stopPropagation();
          },
          S = (s) => {
            e.changeShowEarlyProp(s);
          };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              0 == l
                ? "".concat(L().eranProp)
                : "".concat(L().eranProp, " ").concat(L().eranProp_dark),
            onClick: () => S(!1),
            children: (0, t.jsxs)("div", {
              className: L().propMain,
              onClick: N.bind(this),
              children: [
                (0, t.jsxs)("div", {
                  className: "justify_space_between",
                  children: [
                    (0, t.jsx)("p", { children: "Advanced Vesting" }),
                    (0, t.jsx)("div", {
                      className: L().closeIcon,
                      onClick: () => S(!1),
                      children: (0, t.jsx)("img", {
                        src: "/images/icon/close.svg",
                        alt: "close",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  style: { margin: "40px 0", fontSize: "16px" },
                  children: [
                    "You still have ",
                    (0, t.jsxs)("span", {
                      className: "colorBlue",
                      children: [
                        Number(m.toFixed(2)).toLocaleString(),
                        " esLBR",
                      ],
                    }),
                    " remaining in regular vesting. If you exit now, a penalty of",
                    (0, t.jsxs)("span", {
                      className: "colorBlue",
                      children: [
                        " ",
                        Number((m - h).toFixed(2)).toLocaleString(),
                        " esLBR",
                      ],
                    }),
                    " will be imposed, and you will receive",
                    (0, t.jsxs)("span", {
                      className: "colorBlue",
                      children: [
                        " ",
                        Number(h.toFixed(2)).toLocaleString(),
                        " LBR",
                      ],
                    }),
                    " immediately. Are you sure you want to proceed?",
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    g || d ? "button disabled mini" : "button blue  mini",
                  onClick: () => (g ? null : b()),
                  children:
                    g || d
                      ? (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("img", {
                              className: "loading",
                              src: "/images/icon/loading.svg",
                              alt: "loading",
                            }),
                            "Confirm",
                          ],
                        })
                      : "Confirm",
                }),
              ],
            }),
          }),
        });
      }
      function Y(e) {
        let {
            address: s,
            eUSD: a,
            EUSDMiningIncentives: n,
            esLBR: i,
            ProtocolRewardsPool: c,
            ethlbrpool: l,
            helper: d,
            esLBRBoost: u,
            eusdusdcpool: m,
            eusdusdclpToken: h,
            eusdusdccurvepool: p,
            LBR: g,
            lbrethlp: j,
            mode: v,
            txsConfig: N,
            eusdAbi: f,
            EUSDMiningIncentivesAbi: _,
            fundAbi: w,
            helperAbi: y,
            boostAbi: T,
            configuratorAbi: I,
            configurator: E,
            oracleAbi: B,
            PeUSDMainnet: k,
            StakingRewardsOnGoerli: R,
            arbpeUSDUSDClp: C,
            peUSDArbi: D,
            userChain: F,
            mainnetNetId: H,
            arbiNetId: Z,
            lpOracle: U,
            stETHVault: M,
            wstETHVault: Y,
            wBETHVault: X,
            rETHVault: $,
            stethvaultAbi: K,
            lybraV1: z,
            arbUSDC: J,
            oldeUSDTotalSupply: Q,
            ethPoolTotalCirculation: ee,
            usdc: es,
            mintPoolApr: ea,
            helperLbrPrice: et,
            eslbrBoosts: en,
          } = (0, o.useContext)(r.S),
          { switchNetwork: ei } = (0, x.g0)(),
          [ec, el] = (0, o.useState)("ETH"),
          [eo, er] = (0, o.useState)("eUSD/3CRV LP");
        (0, o.useEffect)(() => {
          el(F == H ? "ETH" : "ARB"),
            er(F == H ? "eUSD/3CRV LP" : "peUSD/USDC LP");
        }, [F, H]);
        let { menuIndex: ed } = e,
          [eu, em] = (0, o.useState)(!1),
          { write: eh } = (0, x.GG)({
            mode: "recklesslyUnprepared",
            address: E,
            abi: I,
            functionName: "becomeRedemptionProvider",
            args: [!eu],
            onSuccess(e) {
              e3(!e8);
            },
            onError(e) {
              em(!eu);
            },
          }),
          ex = async (e) => {
            em(!eu), eh();
          },
          [ep, eg] = (0, o.useState)(!1),
          [ej, ev] = (0, o.useState)(0),
          eb = async () => {
            let e = N.filters.SendProtocolRewards(k, null, null),
              s = await N.queryFilter(e, 0, "latest"),
              a = 0;
            if (s.length)
              for (let e = 0; e < s.length; e++)
                a += Number(s[e].args.amount) / 1e18;
            let t = N.filters.SendProtocolRewards(es, null, null),
              n = await N.queryFilter(t, 0, "latest"),
              i = 0;
            if (n.length)
              for (let e = 0; e < n.length; e++)
                i += Number(n[e].args.amount) / 1e6;
            ev(Number(a + i));
          };
        (0, o.useEffect)(() => {
          eb();
        }, [s]);
        let [eN, eS] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: T,
          functionName: "getUnlockTime",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eS(1e3 * Number(e));
          },
        });
        let [ef, e_] = (0, o.useState)(100);
        (0, x.do)({
          address: l,
          abi: _,
          functionName: "getBoost",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            e_(Number(e._hex) / 1e18);
          },
        });
        let [ew, ey] = (0, o.useState)(!1),
          eL = (e) => {
            ey(e);
          },
          [eT, eI] = (0, o.useState)({}),
          [eE, eB] = (0, o.useState)(""),
          ek = new Date().getTime(),
          eR = (e) => {
            let s = {};
            0 == e
              ? ((s = {
                  title: "LBR => esLBR",
                  title2: "Stake",
                  unit: "LBR",
                  max: eZ,
                }),
                eB(""),
                eI(s),
                ey(!0))
              : 1 == e
              ? ((s = {
                  title: "esLBR => LBR",
                  title2: "Vest",
                  unit: "esLBR",
                  max: ek < eN ? new b.Z(e5).minus(new b.Z(sZ)).toFixed() : e5,
                  boostTime: eN,
                }),
                eB(""),
                eI(s),
                ey(!0))
              : 2 == e
              ? ((s = {
                  title: "Stake LBR/ETH LP",
                  title2: "Stake",
                  unit: "LBR/ETH LP",
                  max: eV,
                }),
                eB("pool"),
                eI(s),
                ey(!0))
              : 3 == e
              ? ((s = {
                  title: "Unstake LBR/ETH LP",
                  title2: "Unstake",
                  unit: "LBR/ETH LP",
                  max: eY,
                }),
                eB("pool"),
                eI(s),
                ey(!0))
              : 4 == e
              ? ((s = {
                  title: "Stake " + eo,
                  title2: "Stake",
                  unit: eo,
                  max: eC,
                  switchNet: ec,
                }),
                eB("eusd"),
                eI(s),
                ey(!0))
              : 5 == e &&
                ((s = {
                  title: "Unstake " + eo,
                  title2: "Unstake",
                  unit: eo,
                  max: eF,
                  switchNet: ec,
                }),
                eB("eusd"),
                eI(s),
                ey(!0));
          },
          [eC, eD] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? h : C,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          onSuccess(e) {
            eD(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [eF, eH] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? m : R,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          onSuccess(e) {
            eH(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [eZ, eU] = (0, o.useState)(0);
        (0, x.do)({
          address: g,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eU(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [eM, eA] = (0, o.useState)(0);
        (0, x.do)({
          address: g,
          abi: f,
          functionName: "balanceOf",
          args: [j],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eA(Number(e._hex) / 1e18);
          },
        });
        let [eP, eq] = (0, o.useState)(0);
        (0, x.do)({
          address: j,
          abi: f,
          functionName: "balanceOf",
          args: [l],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eq(Number(e._hex) / 1e18);
          },
        });
        let [eO, eG] = (0, o.useState)(0);
        (0, x.do)({
          address: j,
          abi: f,
          functionName: "totalSupply",
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eG(Number(e._hex) / 1e18);
          },
        });
        let [eV, eW] = (0, o.useState)(0);
        (0, x.do)({
          address: j,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eW(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [eY, eX] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eX(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [e$, eK] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: _,
          functionName: "stakedOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            eK(Number(e._hex) / 1e18);
          },
        });
        let [ez, eJ] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: _,
          functionName: "earned",
          watch: !0,
          args: [s],
          chainId: H,
          onSuccess(e) {
            eJ(Number(e._hex) / 1e18);
          },
        });
        let [eQ, e0] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: _,
          functionName: "earned",
          watch: !0,
          args: [s],
          chainId: H,
          onSuccess(e) {
            e0(Number(e._hex) / 1e18);
          },
        });
        let [e1, e2] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? m : R,
          abi: _,
          functionName: "earned",
          watch: !0,
          args: [s],
          onSuccess(e) {
            e2(Number(e._hex));
          },
        });
        let [e8, e3] = (0, o.useState)(!1);
        (0, x.do)({
          address: E,
          abi: I,
          functionName: "isRedemptionProvider",
          args: [s],
          chainId: H,
          onSuccess(e) {
            e3(e), em(e);
          },
        });
        let [e5, e4] = (0, o.useState)(0);
        (0, x.do)({
          address: i,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            e4(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [e6, e9] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            e9(Number(e._hex) / 1e18);
          },
        });
        let [e7, se] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? m : R,
          abi: f,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          onSuccess(e) {
            se(Number(e._hex) / 1e18);
          },
        });
        let [ss, sa] = (0, o.useState)(0);
        (0, x.do)({
          address: i,
          abi: f,
          functionName: "totalSupply",
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sa(Number(e._hex) / 1e18);
          },
        });
        let [st, sn] = (0, o.useState)(0);
        (0, x.do)({
          address: c,
          abi: w,
          functionName: "earned",
          watch: !0,
          args: [s],
          chainId: H,
          onSuccess(e) {
            sn(Number(e._hex) / 1e18);
          },
        });
        let [si, sc] = (0, o.useState)(0);
        (0, x.do)({
          address: c,
          abi: w,
          functionName: "getReservedLBRForVesting",
          watch: !0,
          args: [s],
          chainId: H,
          onSuccess(e) {
            sc(Number(e._hex) / 1e18);
          },
        });
        let [sl, so] = (0, o.useState)(!1),
          [sr, sd] = (0, o.useState)(0);
        (0, x.do)({
          address: c,
          abi: w,
          functionName: "time2fullRedemption",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sd(sq(Number(e)));
            var s = Number(e) - 7516800;
            Date.parse(new Date()) / 1e3 > s ? so(!0) : so(!1);
          },
        });
        let [su, sm] = (0, o.useState)(0);
        (0, x.do)({
          address: c,
          abi: w,
          functionName: "getClaimAbleLBR",
          watch: !0,
          args: [s],
          chainId: H,
          onSuccess(e) {
            sm(Number(e._hex) / 1e18);
          },
        });
        let [sh, sx] = (0, o.useState)(!1),
          [sp, sg] = (0, o.useState)(!1),
          sj = async (e) => {
            sx(e);
          },
          sv = async (e) => {
            sg(e);
          },
          [sb, sN] = (0, o.useState)(0);
        (0, x.do)({
          address: d,
          abi: y,
          functionName: "getStakingPoolAPR",
          args: [l, g, j],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sN(Number(e / 1e4));
          },
        });
        let [sS, sf] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: _,
          functionName: "extraRatio",
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sf(Number(e._hex) / 1e18);
          },
        });
        let [s_, sw] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: f,
          functionName: "totalSupply",
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sw(Number(e._hex) / 1e18);
          },
        });
        let [sy, sL] = (0, o.useState)(0);
        (0, x.do)({
          address: k,
          abi: f,
          functionName: "totalSupply",
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sL(Number(e._hex) / 1e18);
          },
        });
        let [sT, sI] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          sI(ee + Q);
        }, [ee, Q]);
        let [sE, sB] = (0, o.useState)(0),
          [sk, sR] = (0, o.useState)(0),
          [sC, sD] = (0, o.useState)(180),
          [sF, sH] = (0, o.useState)(),
          [sZ, sU] = (0, o.useState)(0),
          [sM, sA] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: T,
          functionName: "userLockStatus",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sU(Number(e[0]._hex) / 1e18), sA(Number(e[2]._hex) / 86400);
            let s = parseInt(new Date().getTime() / 1e3);
            s > Number(e.unlockTime) && 0 == sE
              ? (sR(0), sD(180), sH(0))
              : Number(e.duration) / 86400 !== sk &&
                0 !== sC &&
                (sR(Number(e.duration) / 86400),
                sH(sq(Number(e.unlockTime))),
                Number(e.duration) / 86400 != 0 &&
                  sD(Number(e.duration) / 86400));
          },
        });
        let sP = async (e) => {
            eg(!1), e >= sk && (sB(e), sD(e));
          },
          sq = (e) => {
            if (e > 0) {
              var s = new Date(1e3 * e),
                a = s.getFullYear(),
                t = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ][s.getMonth()],
                n = s.getDate();
              return (
                1 == n || 21 == n || 31 == n
                  ? (n += "st")
                  : 2 == n || 22 == n
                  ? (n += "nd")
                  : 3 == n || 23 == n
                  ? (n += "rd")
                  : (n += "th"),
                n + " " + t + " " + a
              );
            }
          },
          [sO, sG] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? a : D,
          abi: f,
          functionName: "balanceOf",
          args: ["ETH" == ec ? p : C],
          watch: !0,
          onSuccess(e) {
            sG(Number(e._hex) / 1e18);
          },
        });
        let [sV, sW] = (0, o.useState)(0);
        (0, x.do)({
          address:
            "ETH" == ec ? "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490" : J,
          abi: f,
          functionName: "balanceOf",
          args: ["ETH" == ec ? p : C],
          watch: !0,
          onSuccess(e) {
            sW("ETH" == ec ? Number(e._hex) / 1e18 : Number(e._hex) / 1e6);
          },
        });
        let [sY, sX] = (0, o.useState)(100);
        (0, x.do)({
          address: m,
          abi: _,
          functionName: "getBoost",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            sX(Number(e._hex) / 1e18);
          },
        });
        let [s$, sK] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? m : R,
          abi: _,
          functionName: "rewardRatio",
          watch: !0,
          onSuccess(e) {
            sK(Number(e._hex) / 1e18);
          },
        });
        let [sz, sJ] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? h : C,
          abi: f,
          functionName: "totalSupply",
          watch: !0,
          onSuccess(e) {
            sJ(Number(e._hex));
          },
        });
        let [sQ, s0] = (0, o.useState)(0);
        (0, x.do)({
          address: "ETH" == ec ? h : C,
          abi: f,
          functionName: "balanceOf",
          args: ["ETH" == ec ? m : R],
          watch: !0,
          onSuccess(e) {
            s0(Number(e._hex));
          },
        });
        let [s1, s2] = (0, o.useState)(!1),
          s8 = (e) => {
            s2(e);
          },
          [s3, s5] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: T,
          functionName: "getAmountNeedLocked",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            s5(Number(e._hex) / 1e18);
          },
        });
        let [s4, s6] = (0, o.useState)(!0);
        (0, x.do)({
          address: n,
          abi: _,
          functionName: "isOtherEarningsClaimable",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            s6(e);
          },
        });
        let [s9, s7] = (0, o.useState)(!1),
          [ae, as] = (0, o.useState)(""),
          aa = (0, o.useRef)(),
          at = async (e) => {
            as(e.target.value);
            let s = s9 ? e5 - sZ : eZ;
            Number(e.target.value) > s && as(s);
          },
          an = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          ai = () => {
            s7(!s9), as("");
          },
          ac = () => {
            as(s9 ? e5 - sZ : eZ);
          },
          [al, ao] = (0, o.useState)(!1),
          ar = (e) => {
            ao(e);
          },
          [ad, au] = (0, o.useState)(0),
          [am, ah] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          au(
            30 == sC
              ? 1.05
              : 90 == sC
              ? 1.1
              : 180 == sC
              ? 1.25
              : 365 == sC
              ? 1.5
              : 1
          ),
            ah(
              30 == sC
                ? 0.05
                : 90 == sC
                ? 0.1
                : 180 == sC
                ? 0.25
                : 365 == sC
                ? 0.5
                : 0
            );
        }, [sC]);
        let [ax, ap] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          ap(
            0 == s3
              ? 0
              : 1 + ((Number(sZ) + Number(ae)) / s3) * am > ad
              ? ad
              : 1 + ((Number(sZ) + Number(ae)) / s3) * am
          );
        }, [sC, s3, sZ, ae, ad, am]);
        let ag = () => {
            ei(F == H ? Z : H);
          },
          [aj, av] = (0, o.useState)(0);
        (0, x.do)({
          address: U,
          abi: B,
          functionName: "latestRoundData",
          watch: !0,
          chainId: H,
          onSuccess(e) {
            av(Number(e[1] / 1e8));
          },
        });
        let [ab, aN] = (0, o.useState)(0);
        (0, x.do)({
          address: M,
          abi: K,
          functionName: "getBorrowedOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            aN(Number(e._hex / 1e18));
          },
        });
        let [aS, af] = (0, o.useState)(0);
        (0, x.do)({
          address: Y,
          abi: K,
          functionName: "getBorrowedOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            af(Number(e._hex / 1e18));
          },
        });
        let [a_, aw] = (0, o.useState)(0);
        (0, x.do)({
          address: X,
          abi: K,
          functionName: "getBorrowedOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            aw(Number(e._hex / 1e18));
          },
        });
        let [ay, aL] = (0, o.useState)(0);
        (0, x.do)({
          address: $,
          abi: K,
          functionName: "getBorrowedOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            aL(Number(e._hex / 1e18));
          },
        });
        let [aT, aI] = (0, o.useState)(0);
        (0, x.do)({
          address: z,
          abi: K,
          functionName: "getBorrowedOf",
          args: [s],
          watch: !0,
          chainId: H,
          onSuccess(e) {
            aI(Number(e._hex / 1e18));
          },
        });
        let [aE, aB] = (0, o.useState)(0),
          [ak, aR] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          let e = ab + aS + a_ + ay + aT;
          e > 0 && (aB((ea * e$) / e), aR(e));
        }, [ab, aS, a_, ay, aT, ea, e$]);
        let [aC, aD] = (0, o.useState)(250);
        return (
          (0, x.do)({
            address: n,
            abi: _,
            functionName: "minDlpRatio",
            watch: !0,
            chainId: H,
            onSuccess(e) {
              aD(Number(e._hex));
            },
          }),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsxs)("div", {
                className:
                  0 == v
                    ? "".concat(L().earn)
                    : ""
                        .concat(L().earn, " ")
                        .concat(L().earn_dark, " ", "globals_dark"),
                children: [
                  5 == ed
                    ? (0, t.jsx)("div", {
                        className: "section earnSection",
                        children: (0, t.jsx)("div", {
                          className: "section_w",
                          children: (0, t.jsxs)("div", {
                            className: ""
                              .concat(L().earnCards, " ")
                              .concat(L().mainCard, " "),
                            children: [
                              (0, t.jsxs)("div", {
                                className: ""
                                  .concat(L().card, " ")
                                  .concat(L().earnh5Card, " ")
                                  .concat(L().boostCard),
                                style: { height: "436px" },
                                children: [
                                  (0, t.jsxs)("div", {
                                    className: L().cardTitle,
                                    children: [
                                      (0, t.jsx)("img", {
                                        src: "images/logo.png",
                                        alt: "logo",
                                      }),
                                      "Boost",
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className: L().cardDivider,
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: L().cardContent,
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "flex_between_end",
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: L().switchBtn,
                                            style: {
                                              gap: "10px",
                                              display: "flex",
                                              alignItems: "center",
                                            },
                                            children: [
                                              (0, t.jsx)("span", {
                                                children: "LBR",
                                              }),
                                              (0, t.jsx)("input", {
                                                className:
                                                  "switch-btn switch-btn-animbg",
                                                type: "checkbox",
                                                checked: s9,
                                                onChange: () => ai(),
                                              }),
                                              (0, t.jsx)("span", {
                                                children: "esLBR",
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            children: [
                                              "Available",
                                              " ",
                                              s9
                                                ? (
                                                    Math.floor(
                                                      (e5 - sZ) * 100
                                                    ) / 100
                                                  ).toLocaleString() + " esLBR"
                                                : (
                                                    Math.floor(100 * eZ) / 100
                                                  ).toLocaleString() + " LBR",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "input propInput",
                                        style: { marginTop: "0" },
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: "propFlex",
                                            children: [
                                              (0, t.jsx)("img", {
                                                src: "/images/logo.png",
                                                alt: "logo",
                                              }),
                                              (0, t.jsx)("input", {
                                                type: "number",
                                                onWheel: (e) => e.target.blur(),
                                                placeholder: "0",
                                                id: "stakeNum",
                                                onKeyDown: an.bind(this),
                                                onChange: at.bind(this),
                                                value: ae,
                                                ref: aa,
                                              }),
                                            ],
                                          }),
                                          (0, t.jsx)("span", {
                                            className: "recommend",
                                            onClick: () => ac(),
                                            children: "MAX",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: ""
                                          .concat(L().cardRow, " ")
                                          .concat(L().cardRowcenter),
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: L().label,
                                            children: "Lock Duration",
                                          }),
                                          (0, t.jsx)("div", {
                                            children: (0, t.jsx)("div", {
                                              className: "".concat(
                                                L().selectDuration
                                              ),
                                              children: (0, t.jsxs)("div", {
                                                className: "select",
                                                children: [
                                                  (0, t.jsxs)("div", {
                                                    className: "selectName",
                                                    onClick: () => eg(!ep),
                                                    children: [
                                                      30 == sC
                                                        ? "1 Month"
                                                        : 90 == sC
                                                        ? "3 Months"
                                                        : 180 == sC
                                                        ? "6 Months"
                                                        : "12 Months",
                                                      (0, t.jsx)("img", {
                                                        src: "/images/icon/arr.svg",
                                                        alt: "arr",
                                                        style: ep
                                                          ? {
                                                              transform:
                                                                "rotate(180deg)",
                                                            }
                                                          : null,
                                                      }),
                                                    ],
                                                  }),
                                                  ep
                                                    ? (0, t.jsxs)("div", {
                                                        className: "selectItem",
                                                        children: [
                                                          (0, t.jsx)("p", {
                                                            onClick: () =>
                                                              sP(30),
                                                            children: "1 Month",
                                                          }),
                                                          (0, t.jsx)("p", {
                                                            onClick: () =>
                                                              sP(90),
                                                            children:
                                                              "3 Months",
                                                          }),
                                                          (0, t.jsx)("p", {
                                                            onClick: () =>
                                                              sP(180),
                                                            children:
                                                              "6 Months",
                                                          }),
                                                          (0, t.jsx)("p", {
                                                            onClick: () =>
                                                              sP(365),
                                                            children:
                                                              "12 Months",
                                                          }),
                                                        ],
                                                      })
                                                    : null,
                                                ],
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: L().cardRow,
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: L().label,
                                            children: "Multiplier",
                                          }),
                                          (0, t.jsxs)("div", {
                                            children: ["Up to ", ad, "x"],
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: L().cardRow,
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: L().label,
                                            children: "Lockable Threshold",
                                          }),
                                          (0, t.jsx)("div", {
                                            children: s3.toLocaleString(),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: L().cardRow,
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: L().label,
                                            children: "Maturity Date",
                                          }),
                                          (0, t.jsx)("div", {
                                            children: sF || "NA",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: L().cardRow,
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: L().label,
                                            children: "Locked esLBR",
                                          }),
                                          (0, t.jsx)("div", {
                                            children: sZ.toLocaleString(),
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: L().cardRow,
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: L().label,
                                            children: "Boost",
                                          }),
                                          (0, t.jsxs)("div", {
                                            children: [ax.toFixed(2), "x"],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: L().cardBottom,
                                    children: [
                                      (0, t.jsx)("div", {
                                        className: L().cardDivider,
                                      }),
                                      (0, t.jsx)("div", {
                                        className: "buttonMini",
                                        children: (0, t.jsx)(A, {
                                          amount: ae,
                                          openSwitch: s9,
                                          type: "LBR",
                                          max: eZ,
                                          esLBRMax: e5 - sZ,
                                          boostTime: eN,
                                          userLockStatusId:
                                            0 == sE && 0 == sM
                                              ? 180
                                              : 0 !== sE
                                              ? sE
                                              : sM,
                                          functionName: "Stake",
                                          unit: "LBR",
                                          updateIsLoading: sj,
                                          updateIsSuccess: sv,
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className: L().boostTipCard,
                                children: (0, t.jsx)("div", {
                                  className: L().htmlBody,
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      "<div>eUSD and peUSD minters can boost their esLBR emission from the mint pool by up to 1.5x by locking LBR or esLBR for a specific duration. Here are the rules:</div><p style={{'marginTop':'10px'}}>1. Boost = (LBR or esLBR Locked) / esLBR lockable threshold * time weight.</p><p>2. esLBR lockable threshold = your loan value in USD / overall loan value in USD * total circulation of esLBR.</p><p>3. Once you choose a lock period, you can only extend it, not decrease it. If you re-lock your esLBR during the lock period, the period will start again.</p><p>4. You can choose to lock your esLBR beyond the esLBR Lockable Threshold, but your minimum boost will still be based on the esLBR lockable threshold.</p><p>5. Your esLBR will still receive protocol revenue while being locked in Boost.</p>",
                                  },
                                }),
                              }),
                            ],
                          }),
                        }),
                      })
                    : null,
                  6 == ed
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsxs)("div", {
                            className: "button wrong ".concat(
                              L().connectButton
                            ),
                            onClick: () => ag(),
                            children: [
                              "Switch To ",
                              "ETH" == ec ? "Arb" : "ETH",
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "section earnSection",
                            children: (0, t.jsx)("div", {
                              className: "section_w",
                              children: (0, t.jsxs)("div", {
                                className: L().earnCards,
                                children: [
                                  "ETH" == ec
                                    ? (0, t.jsxs)(t.Fragment, {
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: ""
                                              .concat(L().card, " ")
                                              .concat(L().earnh5Card),
                                            style: { height: "370px" },
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: ""
                                                  .concat(L().cardTitle, " ")
                                                  .concat(L().cardphase),
                                                children: (0, t.jsxs)("div", {
                                                  className: L().phaseTitle,
                                                  children: [
                                                    (0, t.jsx)("img", {
                                                      src: "/images/icon/eUSD.svg",
                                                      alt: "eusdpool",
                                                    }),
                                                    "Mint Pool",
                                                  ],
                                                }),
                                              }),
                                              (0, t.jsx)("div", {
                                                className: L().cardDivider,
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: L().cardContent,
                                                children: [
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children:
                                                          "Your Mint Value",
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          "$",
                                                          Number(
                                                            ak.toFixed(2)
                                                          ).toLocaleString(),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children:
                                                          "Total Mint Value",
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              L().Tooltip,
                                                            children: (0,
                                                            t.jsxs)("span", {
                                                              className:
                                                                L()
                                                                  .tooltipHandle,
                                                              children: [
                                                                "$",
                                                                Number(
                                                                  sT.toFixed(2)
                                                                ).toLocaleString(),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsxs)("div", {
                                                        className: L().label,
                                                        style: {
                                                          display: "flex",
                                                          gap: "5px",
                                                          alignItems: "center",
                                                        },
                                                        children: [
                                                          "APR",
                                                          (0, t.jsx)("div", {
                                                            className:
                                                              "showTip",
                                                            children: (0,
                                                            t.jsxs)("div", {
                                                              className:
                                                                0 == v
                                                                  ? "qaIcon qaBg"
                                                                  : "qaIcon qaBg_dark",
                                                              children: [
                                                                (0, t.jsx)(
                                                                  "img",
                                                                  {
                                                                    src:
                                                                      0 == v
                                                                        ? "/images/icon/qa.svg"
                                                                        : "/images/icon/qa_dark.svg",
                                                                    alt: "icon",
                                                                  }
                                                                ),
                                                                (0, t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "tipMain",
                                                                    children: [
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "tip-trangle-bottom",
                                                                        }
                                                                      ),
                                                                      "Accrued esLBR value divided by mint value.",
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              L().Tooltip,
                                                            children: (0,
                                                            t.jsxs)("span", {
                                                              className:
                                                                L()
                                                                  .tooltipHandle,
                                                              children: [
                                                                e$ <= 0
                                                                  ? Number(
                                                                      ea.toFixed(
                                                                        2
                                                                      )
                                                                    ).toLocaleString()
                                                                  : Number(
                                                                      aE.toFixed(
                                                                        2
                                                                      )
                                                                    ).toLocaleString(),
                                                                "%",
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsxs)("div", {
                                                        className: L().label,
                                                        style: {
                                                          display: "flex",
                                                          gap: "5px",
                                                          alignItems: "center",
                                                        },
                                                        children: [
                                                          "Reward Eligibility",
                                                          (0, t.jsx)("div", {
                                                            className:
                                                              "showTip",
                                                            children: (0,
                                                            t.jsxs)("div", {
                                                              className:
                                                                0 == v
                                                                  ? "qaIcon qaBg"
                                                                  : "qaIcon qaBg_dark",
                                                              children: [
                                                                (0, t.jsx)(
                                                                  "img",
                                                                  {
                                                                    src:
                                                                      0 == v
                                                                        ? "/images/icon/qa.svg"
                                                                        : "/images/icon/qa_dark.svg",
                                                                    alt: "icon",
                                                                  }
                                                                ),
                                                                (0, t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "tipMain",
                                                                    children: [
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "tip-trangle-bottom",
                                                                        }
                                                                      ),
                                                                      "You need to provide at least ",
                                                                      aC / 100,
                                                                      "% mint value in dLP to become eligible for esLBR emission from the mint pool.",
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              L().Tooltip,
                                                            children: (0,
                                                            t.jsx)("span", {
                                                              className:
                                                                L()
                                                                  .tooltipHandle,
                                                              style: s4
                                                                ? {
                                                                    color:
                                                                      "red",
                                                                  }
                                                                : null,
                                                              children: s4
                                                                ? "Not Eligible"
                                                                : "Eligible",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children: "Rewards",
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "div",
                                                          {
                                                            className:
                                                              "showTip",
                                                            children: (0,
                                                            t.jsxs)("div", {
                                                              className:
                                                                0 == v
                                                                  ? "qaIcon qaBg"
                                                                  : "qaIcon qaBg_dark",
                                                              children: [
                                                                (0, t.jsxs)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      L()
                                                                        .tooltipHandle,
                                                                    children: [
                                                                      Number(
                                                                        ez.toFixed(
                                                                          2
                                                                        )
                                                                      ).toLocaleString(),
                                                                      " esLBR",
                                                                    ],
                                                                  }
                                                                ),
                                                                (0, t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "tipMain",
                                                                    style: {
                                                                      width:
                                                                        "max-content",
                                                                    },
                                                                    children: [
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "tip-trangle-bottom",
                                                                          style:
                                                                            {
                                                                              right:
                                                                                "20px",
                                                                            },
                                                                        }
                                                                      ),
                                                                      "Regular reward: ",
                                                                      (
                                                                        (ez /
                                                                          en) *
                                                                        100
                                                                      ).toFixed(
                                                                        2
                                                                      ),
                                                                      " esLBR",
                                                                      (0,
                                                                      t.jsx)(
                                                                        "br",
                                                                        {}
                                                                      ),
                                                                      "Boost reward: ",
                                                                      (
                                                                        ez -
                                                                        (ez /
                                                                          en) *
                                                                          100
                                                                      ).toFixed(
                                                                        2
                                                                      ),
                                                                      " esLBR",
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsx)("div", {
                                                    className: L().cardDivider,
                                                    style: { height: "0.5px" },
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsxs)("div", {
                                                        className: L().label,
                                                        style: {
                                                          display: "flex",
                                                          gap: "5px",
                                                          alignItems: "center",
                                                        },
                                                        children: [
                                                          "Redemption Provider Boost",
                                                          (0, t.jsx)("div", {
                                                            className:
                                                              "showTip",
                                                            children: (0,
                                                            t.jsxs)("div", {
                                                              className:
                                                                0 == v
                                                                  ? "qaIcon qaBg"
                                                                  : "qaIcon qaBg_dark",
                                                              children: [
                                                                (0, t.jsx)(
                                                                  "img",
                                                                  {
                                                                    src:
                                                                      0 == v
                                                                        ? "/images/icon/qa.svg"
                                                                        : "/images/icon/qa_dark.svg",
                                                                    alt: "icon",
                                                                  }
                                                                ),
                                                                (0, t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "tipMain",
                                                                    children: [
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "tip-trangle-bottom",
                                                                        }
                                                                      ),
                                                                      "Become a Redemption Provider and increase your yield APR by ",
                                                                      sS,
                                                                      "%.",
                                                                      (0,
                                                                      t.jsx)(
                                                                        "a",
                                                                        {
                                                                          target:
                                                                            "_blank",
                                                                          rel: "nofollow noopener noreferrer",
                                                                          className:
                                                                            L()
                                                                              .linkUnderline,
                                                                          href: "https://docs.lybra.finance/lybra-finance-docs/mechanisms/rigid-redemption-and-eusd-price-stability",
                                                                          children:
                                                                            "More Info",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                          (0, t.jsx)("input", {
                                                            className:
                                                              "switch-btn switch-btn-animbg",
                                                            type: "checkbox",
                                                            checked: eu,
                                                            onChange:
                                                              ex.bind(this),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              L().Tooltip,
                                                            children: (0,
                                                            t.jsx)("span", {
                                                              className:
                                                                L()
                                                                  .tooltipHandle,
                                                              children: e8
                                                                ? 1 +
                                                                  sS / 100 +
                                                                  "x"
                                                                : "None",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsxs)("div", {
                                                        className: L().label,
                                                        style: {
                                                          display: "flex",
                                                          gap: "5px",
                                                          alignItems: "center",
                                                        },
                                                        children: [
                                                          "Boost Status",
                                                          (0, t.jsx)("div", {
                                                            className:
                                                              "showTip",
                                                            children: (0,
                                                            t.jsxs)("div", {
                                                              className:
                                                                0 == v
                                                                  ? "qaIcon qaBg"
                                                                  : "qaIcon qaBg_dark",
                                                              children: [
                                                                (0, t.jsx)(
                                                                  "img",
                                                                  {
                                                                    src:
                                                                      0 == v
                                                                        ? "/images/icon/qa.svg"
                                                                        : "/images/icon/qa_dark.svg",
                                                                    alt: "icon",
                                                                  }
                                                                ),
                                                                (0, t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "tipMain",
                                                                    children: [
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "tip-trangle-bottom",
                                                                        }
                                                                      ),
                                                                      "Your total boost from being redemption provider and locking esLBR.",
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              L().Tooltip,
                                                            children: (0,
                                                            t.jsx)("span", {
                                                              className:
                                                                L()
                                                                  .tooltipHandle,
                                                              children:
                                                                100 == en
                                                                  ? "None"
                                                                  : (
                                                                      en / 100
                                                                    ).toFixed(
                                                                      2
                                                                    ) + "x",
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardBottom,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          L().cardDivider,
                                                      }),
                                                      (0, t.jsxs)("div", {
                                                        className: "buttonMini",
                                                        children: [
                                                          (0, t.jsx)("div", {
                                                            className:
                                                              "button blue mini",
                                                            onClick: () =>
                                                              s8(!0),
                                                            children:
                                                              "Provide dLP",
                                                          }),
                                                          (0, t.jsx)(q, {
                                                            updateIsLoading: sj,
                                                            updateIsSuccess: sv,
                                                            functionName:
                                                              "esLBR",
                                                            type: "0",
                                                            rewards: ez,
                                                            isOtherEarningsClaimable:
                                                              s4,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: L().card,
                                            style: { height: "370px" },
                                            children: [
                                              (0, t.jsxs)("div", {
                                                className: ""
                                                  .concat(L().cardTitle, " ")
                                                  .concat(L().cardphase),
                                                children: [
                                                  (0, t.jsxs)("div", {
                                                    className: L().phaseTitle,
                                                    children: [
                                                      (0, t.jsx)("img", {
                                                        src: "images/logo.png",
                                                        alt: "icon",
                                                      }),
                                                      "Stake LBR",
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().addLink,
                                                    children: [
                                                      (0, t.jsx)("img", {
                                                        alt: "icon",
                                                        src:
                                                          0 == v
                                                            ? "images/icon/add.svg"
                                                            : "images/icon/add_dark.svg",
                                                      }),
                                                      (0, t.jsx)("a", {
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        href: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xed1167b6Dc64E8a366DB86F2E952A482D0981ebd",
                                                        children: "Buy LBR",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className: L().cardDivider,
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: L().cardContent,
                                                children: [
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children:
                                                          "esLBR Balance",
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          Number(
                                                            e5
                                                          ).toLocaleString(),
                                                          " esLBR",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children: "Total esLBR",
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          Number(
                                                            ss.toFixed(2)
                                                          ).toLocaleString(),
                                                          " esLBR",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children:
                                                          "Protocol Generated Revenue",
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              L().Tooltip,
                                                            children: (0,
                                                            t.jsxs)("span", {
                                                              className:
                                                                L()
                                                                  .tooltipHandle,
                                                              children: [
                                                                "$",
                                                                Number(
                                                                  ej.toFixed(2)
                                                                ).toLocaleString(),
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsxs)("div", {
                                                        className: L().label,
                                                        style: {
                                                          display: "flex",
                                                          gap: "5px",
                                                          alignItems: "center",
                                                        },
                                                        children: [
                                                          "APR",
                                                          (0, t.jsx)("div", {
                                                            className:
                                                              "showTip",
                                                            children: (0,
                                                            t.jsxs)("div", {
                                                              className:
                                                                0 == v
                                                                  ? "qaIcon qaBg"
                                                                  : "qaIcon qaBg_dark",
                                                              children: [
                                                                (0, t.jsx)(
                                                                  "img",
                                                                  {
                                                                    src:
                                                                      0 == v
                                                                        ? "/images/icon/qa.svg"
                                                                        : "/images/icon/qa_dark.svg",
                                                                    alt: "icon",
                                                                  }
                                                                ),
                                                                (0, t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "tipMain",
                                                                    children: [
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "tip-trangle-bottom",
                                                                        }
                                                                      ),
                                                                      "Accrued peUSD or USDC value divided by esLBR value.",
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          ss <= 0
                                                            ? 0
                                                            : Number(
                                                                (
                                                                  ((s_ + sy) *
                                                                    1.5) /
                                                                  et /
                                                                  ss
                                                                ).toFixed(2)
                                                              ).toLocaleString(),
                                                          "%",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("span", {
                                                        className: L().label,
                                                        children: "Rewards",
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          "$",
                                                          Number(
                                                            st.toFixed(2)
                                                          ).toLocaleString(),
                                                          " peUSD or USDC",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardBottom,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          L().cardDivider,
                                                      }),
                                                      (0, t.jsxs)("div", {
                                                        className: "buttonMini",
                                                        children: [
                                                          (0, t.jsxs)("div", {
                                                            className:
                                                              "button  mini convert",
                                                            onClick: () =>
                                                              eR(0),
                                                            children: [
                                                              "Stake",
                                                              (0, t.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "showTip",
                                                                  children: (0,
                                                                  t.jsxs)(
                                                                    "div",
                                                                    {
                                                                      className:
                                                                        0 == v
                                                                          ? "qaIcon qaBg"
                                                                          : "qaIcon qaBg_dark",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          t.jsx)(
                                                                            "img",
                                                                            {
                                                                              src: "/images/icon/qa_dark.svg",
                                                                              alt: "icon",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          t.jsxs)(
                                                                            "div",
                                                                            {
                                                                              className:
                                                                                "tipMain",
                                                                              style:
                                                                                {
                                                                                  bottom:
                                                                                    "35px",
                                                                                },
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  t.jsx)(
                                                                                    "div",
                                                                                    {
                                                                                      className:
                                                                                        "tip-trangle-bottom",
                                                                                    }
                                                                                  ),
                                                                                  "Stake LBR to esLBR, in order to share Protocol Generated Revenue from eUSD circulation and peUSD debt repayment fee.",
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, t.jsx)(q, {
                                                            updateIsLoading: sj,
                                                            updateIsSuccess: sv,
                                                            functionName:
                                                              "Rewards",
                                                            type: "1",
                                                            rewards: st,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: ""
                                              .concat(L().card, " ")
                                              .concat(L().earnh5Card2),
                                            style: { height: "260px" },
                                            children: [
                                              (0, t.jsxs)("div", {
                                                className: ""
                                                  .concat(L().cardTitle, " ")
                                                  .concat(L().cardphase),
                                                children: [
                                                  (0, t.jsxs)("div", {
                                                    className: L().phaseTitle,
                                                    children: [
                                                      (0, t.jsx)("img", {
                                                        src: "images/earn/lbrlp.svg",
                                                        alt: "lbr/eth",
                                                      }),
                                                      "LBR/ETH LP",
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().addLink,
                                                    children: [
                                                      (0, t.jsx)("img", {
                                                        alt: "icon",
                                                        src:
                                                          0 == v
                                                            ? "images/icon/add.svg"
                                                            : "images/icon/add_dark.svg",
                                                      }),
                                                      (0, t.jsx)("a", {
                                                        target: "_blank",
                                                        rel: "nofollow noopener noreferrer",
                                                        href: "https://app.uniswap.org/#/add/v2/ETH/0xed1167b6Dc64E8a366DB86F2E952A482D0981ebd",
                                                        children: "Provide",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                className: L().cardDivider,
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: L().cardContent,
                                                children: [
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children:
                                                          "LBR/ETH LP Staked",
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          Number(
                                                            e6.toFixed(2)
                                                          ).toLocaleString(),
                                                          " LBR/ETH LP ($",
                                                          Number(
                                                            (
                                                              Number(e6) * aj
                                                            ).toFixed(2)
                                                          ).toLocaleString(),
                                                          ")",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className: L().label,
                                                        children:
                                                          "Total LBR/ETH LP Staked",
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          "$",
                                                          Number(
                                                            (
                                                              (eM *
                                                                et *
                                                                2 *
                                                                eP) /
                                                              eO
                                                            ).toFixed()
                                                          ).toLocaleString(),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsxs)("div", {
                                                        className: L().label,
                                                        style: {
                                                          display: "flex",
                                                          gap: "5px",
                                                          alignItems: "center",
                                                        },
                                                        children: [
                                                          "APR",
                                                          (0, t.jsx)("div", {
                                                            className:
                                                              "showTip",
                                                            children: (0,
                                                            t.jsxs)("div", {
                                                              className:
                                                                0 == v
                                                                  ? "qaIcon qaBg"
                                                                  : "qaIcon qaBg_dark",
                                                              children: [
                                                                (0, t.jsx)(
                                                                  "img",
                                                                  {
                                                                    src:
                                                                      0 == v
                                                                        ? "/images/icon/qa.svg"
                                                                        : "/images/icon/qa_dark.svg",
                                                                    alt: "icon",
                                                                  }
                                                                ),
                                                                (0, t.jsxs)(
                                                                  "div",
                                                                  {
                                                                    className:
                                                                      "tipMain",
                                                                    children: [
                                                                      (0,
                                                                      t.jsx)(
                                                                        "div",
                                                                        {
                                                                          className:
                                                                            "tip-trangle-bottom",
                                                                        }
                                                                      ),
                                                                      "Accrued esLBR value divided by LP value.",
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        children: (0, t.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              L().Tooltip,
                                                            children: (0,
                                                            t.jsxs)("span", {
                                                              className:
                                                                L()
                                                                  .tooltipHandle,
                                                              children: [
                                                                Number(
                                                                  (
                                                                    (sb * ef) /
                                                                    100
                                                                  ).toFixed(2)
                                                                ).toLocaleString(),
                                                                "%",
                                                              ],
                                                            }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardRow,
                                                    children: [
                                                      (0, t.jsx)("span", {
                                                        className: L().label,
                                                        children: "Rewards",
                                                      }),
                                                      (0, t.jsxs)("span", {
                                                        children: [
                                                          Number(
                                                            eQ.toFixed(2)
                                                          ).toLocaleString(),
                                                          " esLBR",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardBottom,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          L().cardDivider,
                                                      }),
                                                      (0, t.jsxs)("div", {
                                                        className: "buttonMini",
                                                        children: [
                                                          (0, t.jsxs)("div", {
                                                            className:
                                                              L().cardflex,
                                                            children: [
                                                              (0, t.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "button blue mini",
                                                                  onClick: () =>
                                                                    eR(2),
                                                                  children:
                                                                    "Stake",
                                                                }
                                                              ),
                                                              (0, t.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    0 == v
                                                                      ? "button unstake mini"
                                                                      : "button unstake_dark mini",
                                                                  onClick: () =>
                                                                    eR(3),
                                                                  children:
                                                                    "Unstake",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, t.jsx)(q, {
                                                            updateIsLoading: sj,
                                                            updateIsSuccess: sv,
                                                            functionName:
                                                              "esLBR",
                                                            type: "2",
                                                            rewards: eQ,
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
                                      })
                                    : null,
                                  (0, t.jsxs)("div", {
                                    className: L().card,
                                    style: { height: "260px" },
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: ""
                                          .concat(L().cardTitle, " ")
                                          .concat(L().cardphase),
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: L().phaseTitle,
                                            children: [
                                              " ",
                                              (0, t.jsx)("img", {
                                                alt: "icon",
                                                src:
                                                  "eUSD/3CRV LP" == eo
                                                    ? "images/earn/eusdlp.svg"
                                                    : "images/earn/peusdlp.svg",
                                              }),
                                              eo,
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: L().addLink,
                                            children: [
                                              (0, t.jsx)("img", {
                                                src:
                                                  0 == v
                                                    ? "images/icon/add.svg"
                                                    : "images/icon/add_dark.svg",
                                                alt: "icon",
                                              }),
                                              (0, t.jsx)("a", {
                                                target: "_blank",
                                                href:
                                                  "eUSD/3CRV LP" == eo
                                                    ? "https://curve.fi/#/ethereum/pools/factory-v2-336/deposit"
                                                    : "https://curve.fi/#/arbitrum/pools/factory-v2-123/deposit",
                                                rel: "nofollow noopener noreferrer",
                                                children: "Provide",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, t.jsx)("div", {
                                        className: L().cardDivider,
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: L().cardContent,
                                        children: [
                                          (0, t.jsxs)("div", {
                                            className: L().cardRow,
                                            children: [
                                              (0, t.jsxs)("div", {
                                                className: L().label,
                                                children: [eo, " Staked"],
                                              }),
                                              (0, t.jsxs)("span", {
                                                children: [
                                                  Number(e7.toFixed(2)),
                                                  " ",
                                                  eo,
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: L().cardRow,
                                            children: [
                                              (0, t.jsxs)("div", {
                                                className: L().label,
                                                children: [
                                                  "Total ",
                                                  eo,
                                                  " Staked",
                                                ],
                                              }),
                                              (0, t.jsxs)("span", {
                                                children: [
                                                  "$",
                                                  Number(
                                                    (
                                                      ((sO + sV) * sQ) /
                                                      sz
                                                    ).toFixed(2)
                                                  ).toLocaleString(),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: L().cardRow,
                                            children: [
                                              (0, t.jsxs)("div", {
                                                className: L().label,
                                                style: {
                                                  display: "flex",
                                                  gap: "5px",
                                                  alignItems: "center",
                                                },
                                                children: [
                                                  "APR",
                                                  (0, t.jsx)("div", {
                                                    className: "showTip",
                                                    children: (0, t.jsxs)(
                                                      "div",
                                                      {
                                                        className:
                                                          0 == v
                                                            ? "qaIcon qaBg"
                                                            : "qaIcon qaBg_dark",
                                                        children: [
                                                          (0, t.jsx)("img", {
                                                            src:
                                                              0 == v
                                                                ? "/images/icon/qa.svg"
                                                                : "/images/icon/qa_dark.svg",
                                                            alt: "icon",
                                                          }),
                                                          (0, t.jsxs)("div", {
                                                            className:
                                                              "tipMain",
                                                            children: [
                                                              (0, t.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    "tip-trangle-bottom",
                                                                }
                                                              ),
                                                              "Accrued esLBR value divided by LP value.",
                                                            ],
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                              (0, t.jsx)("div", {
                                                children: (0, t.jsx)("span", {
                                                  className: L().Tooltip,
                                                  children:
                                                    "ETH" == ec
                                                      ? (0, t.jsxs)("span", {
                                                          className:
                                                            L().tooltipHandle,
                                                          children: [
                                                            sQ > 0
                                                              ? Number(
                                                                  (
                                                                    (31536e3 *
                                                                      s$ *
                                                                      et *
                                                                      sY *
                                                                      sz) /
                                                                    sQ /
                                                                    (sO + sV)
                                                                  ).toFixed(2)
                                                                ).toLocaleString()
                                                              : 0,
                                                            "%",
                                                          ],
                                                        })
                                                      : (0, t.jsxs)("span", {
                                                          className:
                                                            L().tooltipHandle,
                                                          children: [
                                                            sQ > 0
                                                              ? Number(
                                                                  (
                                                                    (31536e3 *
                                                                      s$ *
                                                                      et *
                                                                      100 *
                                                                      sz) /
                                                                    sQ /
                                                                    (sO + sV)
                                                                  ).toFixed(2)
                                                                ).toLocaleString()
                                                              : 0,
                                                            "%",
                                                          ],
                                                        }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: L().cardRow,
                                            children: [
                                              (0, t.jsx)("span", {
                                                className: L().label,
                                                children: "Rewards",
                                              }),
                                              (0, t.jsxs)("span", {
                                                children: [
                                                  Number(
                                                    (e1 / 1e18).toFixed(2)
                                                  ).toLocaleString(),
                                                  " esLBR",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, t.jsxs)("div", {
                                            className: L().cardBottom,
                                            children: [
                                              (0, t.jsx)("div", {
                                                className: L().cardDivider,
                                              }),
                                              (0, t.jsxs)("div", {
                                                className: "buttonMini",
                                                children: [
                                                  (0, t.jsxs)("div", {
                                                    className: L().cardflex,
                                                    children: [
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          "button blue mini",
                                                        onClick: () => eR(4),
                                                        children: "Stake",
                                                      }),
                                                      (0, t.jsx)("div", {
                                                        className:
                                                          0 == v
                                                            ? "button unstake mini"
                                                            : "button unstake_dark mini",
                                                        onClick: () => eR(5),
                                                        children: "Unstake",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, t.jsx)(q, {
                                                    updateIsLoading: sj,
                                                    updateIsSuccess: sv,
                                                    functionName: "esLBR",
                                                    type: "3",
                                                    rewards: e1,
                                                    switchNet: ec,
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
                              }),
                            }),
                          }),
                        ],
                      })
                    : null,
                  7 == ed
                    ? (0, t.jsx)("div", {
                        className: "section earnSection",
                        children: (0, t.jsx)("div", {
                          className: "section_w",
                          children: (0, t.jsx)("div", {
                            className: L().earnCards,
                            children: (0, t.jsxs)("div", {
                              className: "".concat(L().card),
                              children: [
                                (0, t.jsxs)("div", {
                                  className: L().cardTitle,
                                  children: [
                                    (0, t.jsx)("img", {
                                      src: "images/logo.png",
                                      alt: "icon",
                                    }),
                                    "LBR Vault",
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className: L().cardDivider,
                                }),
                                (0, t.jsxs)("div", {
                                  className: L().cardContent,
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: L().htmlBody,
                                      dangerouslySetInnerHTML: {
                                        __html:
                                          "esLBR holders can convert their esLBR to LBR through a vesting process. Once the process is started, esLBR will be linearly converted to LBR over a period of 90 days, a penalty fee ranging from 95% to 25% will be charged where users decide to advance (or speed up) the vesting period.",
                                      },
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: L().cardRow,
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: L().label,
                                          children: "Staked Tokens",
                                        }),
                                        (0, t.jsx)("div", {
                                          children: (0, t.jsx)("span", {
                                            className: L().Tooltip,
                                            children: (0, t.jsxs)("span", {
                                              className: L().tooltipHandle,
                                              children: [
                                                Number(e5).toLocaleString(),
                                                " esLBR",
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: L().cardRow,
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: L().label,
                                          children: "Reserved for Vesting",
                                        }),
                                        (0, t.jsxs)("span", {
                                          children: [
                                            Number(
                                              si.toFixed(2)
                                            ).toLocaleString(),
                                            " LBR",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: L().cardRow,
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: L().label,
                                          children: "Fully Vested Time",
                                        }),
                                        (0, t.jsx)("div", {
                                          children: (0, t.jsx)("span", {
                                            className: L().Tooltip,
                                            children: (0, t.jsx)("span", {
                                              className: L().tooltipHandle,
                                              children: sr || "NA",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: L().cardRow,
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: L().label,
                                          children: "Claimable",
                                        }),
                                        (0, t.jsx)("div", {
                                          children: (0, t.jsx)("span", {
                                            className: L().Tooltip,
                                            children: (0, t.jsxs)("span", {
                                              className: L().tooltipHandle,
                                              children: [
                                                Number(
                                                  su.toFixed(2)
                                                ).toLocaleString(),
                                                " LBR",
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className: L().cardBottom,
                                      style: {
                                        position: "relative",
                                        padding: "0",
                                      },
                                      children: [
                                        (0, t.jsx)("div", {
                                          className: L().cardDivider,
                                        }),
                                        (0, t.jsxs)("div", {
                                          className: "buttonMini",
                                          children: [
                                            (0, t.jsxs)("div", {
                                              style: {
                                                display: "flex",
                                                gap: "10px",
                                              },
                                              children: [
                                                (0, t.jsx)("div", {
                                                  className:
                                                    0 == v
                                                      ? "button unstake mini convert"
                                                      : "button unstake_dark mini convert",
                                                  onClick: () => eR(1),
                                                  children: "Vest",
                                                }),
                                                sl
                                                  ? (0, t.jsx)("div", {
                                                      className:
                                                        si <= 0
                                                          ? "button mini disabled"
                                                          : 0 == v
                                                          ? "button unstake mini convert"
                                                          : "button unstake_dark mini convert",
                                                      onClick: () =>
                                                        si > 0 ? ar(!0) : null,
                                                      children:
                                                        "Advanced Vesting",
                                                    })
                                                  : null,
                                                si > 0
                                                  ? (0, t.jsx)(G, {
                                                      updateIsLoading: sj,
                                                      updateIsSuccess: sv,
                                                      type: "new",
                                                    })
                                                  : null,
                                              ],
                                            }),
                                            (0, t.jsx)(O, {
                                              updateIsLoading: sj,
                                              updateIsSuccess: sv,
                                              claimable: su,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      })
                    : null,
                ],
              }),
              ew
                ? (0, t.jsx)(P, {
                    type: eE,
                    propValue: eT,
                    changeShowProp: eL,
                    updateIsLoading: sj,
                    updateIsSuccess: sv,
                  })
                : null,
              s1
                ? (0, t.jsx)(V, {
                    minted: e$,
                    stakedEth: eV,
                    lpPrice: aj,
                    changeShowDlpProp: s8,
                    updateIsLoading: sj,
                    updateIsSuccess: sv,
                    minDlpRatio: aC / 100,
                  })
                : null,
              al
                ? (0, t.jsx)(W, {
                    vesting: si,
                    updateIsLoading: sj,
                    updateIsSuccess: sv,
                    changeShowEarlyProp: ar,
                  })
                : null,
              sh ? (0, t.jsx)(S.Z, {}) : null,
              sp ? (0, t.jsx)(S.Z, {}) : null,
            ],
          })
        );
      }
      function X(e) {
        let s, a, n, i;
        let {
            buyType: c,
            addressList: l,
            totalCost: d,
            openSwitchUse: u,
            eUSDBalanceOf: m,
            lbrBalanceOf: h,
            grabFeeRatio: p,
            latestRoundData: g,
            biddingFeeRatio: j,
            allowance: v,
          } = e,
          {
            setTipMessage: N,
            EUSDMiningIncentives: S,
            eusdAbi: f,
            eUSD: _,
            EUSDMiningIncentivesAbi: w,
            ProtocolRewardsPool: y,
            fundAbi: T,
            mode: I,
          } = (0, o.useContext)(r.S),
          [E, B] = (0, o.useState)(!1),
          [k, R] = (0, o.useState)("Confirm");
        (0, o.useEffect)(() => {
          1 == c && (Z(d), u ? P(d / g / j) : P(d / j));
        }, [c]);
        let C = (e) => {
            e.stopPropagation();
          },
          D = (s) => {
            e.changeShowBountyBuy(s);
          },
          F = async (e) => {
            -1 !== ["-", "+", "e", "E"].indexOf(e.key) && e.preventDefault();
          },
          [H, Z] = (0, o.useState)(""),
          U = (0, o.useRef)(),
          M = async (e) => {
            Z(e.target.value),
              2 == c && (E ? P(e.target.value / g / p) : P(e.target.value / p));
          },
          [A, P] = (0, o.useState)(""),
          q = (0, o.useRef)(),
          O = async (e) => {
            P(e.target.value),
              2 == c && (E ? Z(e.target.value * g * p) : Z(e.target.value * p));
          };
        (0, o.useEffect)(() => {
          2 == c &&
            (H && H > 0
              ? E
                ? P(H / g / p)
                : P(H / p)
              : A && A > 0 && (E ? Z((A * g) / p) : Z(A * p)));
        }, [H, A, E]),
          (0, o.useEffect)(() => {
            1 == c && 1e14 >= Number(v) && u
              ? R("Approve")
              : 2 == c && 1e14 >= Number(v) && E
              ? R("Approve")
              : R("Confirm");
          }, [v, u, E, c]);
        let [G, V] = (0, o.useState)(!1);
        1 == c
          ? 1e14 >= Number(v) && u
            ? ((s = "approve"),
              (a = _),
              (n = f),
              (i = [
                S,
                "115792089237316195423570985008687907853269984665640564039457",
              ]))
            : ((s = "buyOthersEarnings"), (a = S), (i = [l, u]), (n = w))
          : 1e14 >= Number(v) && E
          ? ((s = "approve"),
            (a = _),
            (n = f),
            (i = [
              y,
              "115792089237316195423570985008687907853269984665640564039457",
            ]))
          : ((s = "grabEsLBR"),
            (a = y),
            (i = [new b.Z(A).multipliedBy(new b.Z(1e18)).toFixed(), E]),
            (n = T));
        let {
          isLoading: W,
          write: Y,
          data: X,
        } = (0, x.GG)({
          mode: "recklesslyUnprepared",
          address: a,
          abi: n,
          functionName: s,
          args: i,
          onSuccess(e) {
            V(!0);
          },
          onError(s) {
            V(!1), e.updateIsLoading(!1);
          },
        });
        (0, x.BX)({
          hash: null == X ? void 0 : X.hash,
          onSuccess(s) {
            V(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              N({ title: k, type: "success" }),
              1 == c && e.cancelCheckList(),
              setTimeout(() => {
                e.updateIsSuccess(!1), D();
              }, 3e3);
          },
        });
        let $ = async () => {
          Number(H) > 0 &&
            Number(A) > 0 &&
            (N({ title: k, type: "loading" }), e.updateIsLoading(!0), Y());
        };
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)("div", {
            className:
              0 == I
                ? "".concat(L().eranProp)
                : "".concat(L().eranProp, " ").concat(L().eranProp_dark),
            onClick: () => D(!1),
            children: (0, t.jsxs)("div", {
              className: L().propMain,
              onClick: C.bind(this),
              children: [
                (0, t.jsxs)("div", {
                  className: "justify_space_between",
                  children: [
                    (0, t.jsx)("p", { children: "BUY" }),
                    (0, t.jsx)("div", {
                      className: L().closeIcon,
                      onClick: () => D(!1),
                      children: (0, t.jsx)("img", {
                        src: "/images/icon/close.svg",
                        alt: "close",
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "buyInput",
                  children: [
                    2 == c
                      ? (0, t.jsxs)("div", {
                          className: "flex_between_end",
                          style: { height: "45px", alignItems: "center" },
                          children: [
                            (0, t.jsxs)("div", {
                              className: L().switchBtn,
                              style: {
                                gap: "10px",
                                display: "flex",
                                alignItems: "center",
                              },
                              children: [
                                (0, t.jsx)("span", { children: "LBR" }),
                                (0, t.jsx)("input", {
                                  className: "switch-btn switch-btn-animbg",
                                  type: "checkbox",
                                  checked: E,
                                  onChange: () => B(!E),
                                }),
                                (0, t.jsx)("span", { children: "eUSD" }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                "Available ",
                                (1 != c || u) && (2 != c || E)
                                  ? (
                                      Math.floor(100 * m) / 100
                                    ).toLocaleString() + " eUSD"
                                  : (
                                      Math.floor(100 * h) / 100
                                    ).toLocaleString() + " LBR",
                              ],
                            }),
                          ],
                        })
                      : (0, t.jsxs)("p", {
                          className: "buyP",
                          children: [
                            "Available ",
                            u
                              ? (Math.floor(100 * m) / 100).toLocaleString() +
                                " eUSD"
                              : (Math.floor(100 * h) / 100).toLocaleString() +
                                " LBR",
                            " ",
                          ],
                        }),
                    (0, t.jsx)("div", {
                      className: "input propInput",
                      children: (0, t.jsxs)("div", {
                        className: "buyGap",
                        children: [
                          (0, t.jsx)("img", {
                            src:
                              (1 == c && u) || (2 == c && E)
                                ? "/images/icon/eUSD.svg"
                                : "/images/logo.png",
                            alt: "logo",
                          }),
                          (0, t.jsx)("input", {
                            type: "number",
                            onWheel: (e) => e.target.blur(),
                            readOnly: 1 == c,
                            placeholder: "0",
                            id: "lbrNum",
                            onKeyDown: F.bind(this),
                            onChange: M.bind(this),
                            value: H,
                            ref: U,
                          }),
                          (0, t.jsx)("span", {
                            style: { fontSize: "18px" },
                            onClick: () => U.current.focus(),
                            children:
                              (1 != c || u) && (2 != c || E) ? "eUSD" : "LBR",
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "arrdown",
                      children: (0, t.jsx)("img", {
                        src: "/images/icon/arrowdown.svg",
                        alt: "arrowdown",
                      }),
                    }),
                    (0, t.jsx)("div", {
                      className: "input propInput",
                      children: (0, t.jsxs)("div", {
                        className: "buyGap",
                        children: [
                          (0, t.jsx)("img", {
                            src: "/images/logo.png",
                            alt: "logo",
                          }),
                          (0, t.jsx)("input", {
                            type: "number",
                            onWheel: (e) => e.target.blur(),
                            readOnly: 1 == c,
                            placeholder: "0",
                            id: "esLbrNum",
                            onKeyDown: F.bind(this),
                            onChange: O.bind(this),
                            value: A,
                            ref: q,
                          }),
                          (0, t.jsx)("span", {
                            style: { fontSize: "18px" },
                            onClick: () => q.current.focus(),
                            children: "esLBR",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  style: { marginTop: "20px" },
                  children:
                    (Number(H) > h && 1 == c && !u) ||
                    (Number(H) > h && 2 == c) ||
                    (Number(H) > m && 1 == c && u)
                      ? (0, t.jsxs)("div", {
                          className: "button disabled",
                          children: [
                            "Insufficient ",
                            (1 == c && u) || (2 == c && E) ? "eUSD" : "LBR",
                            " Balance",
                          ],
                        })
                      : (0, t.jsx)("div", {
                          className:
                            W || G || 0 >= Number(H) || 0 >= Number(A)
                              ? "button disabled"
                              : "button",
                          onClick: () => (W ? null : $()),
                          children:
                            W || G
                              ? (0, t.jsxs)(t.Fragment, {
                                  children: [
                                    (0, t.jsx)("img", {
                                      className: "loading",
                                      src: "/images/icon/loading.svg",
                                      alt: "loading",
                                    }),
                                    k,
                                  ],
                                })
                              : (0, t.jsx)(t.Fragment, { children: k }),
                        }),
                }),
              ],
            }),
          }),
        });
      }
      var $ = a(6154);
      function K() {
        let {
            address: e,
            eusdAbi: s,
            LBR: a,
            eUSD: n,
            EUSDMiningIncentives: i,
            EUSDMiningIncentivesAbi: c,
            oracleAbi: l,
            lbrOracle: d,
            ProtocolRewardsPool: u,
            fundAbi: m,
            mode: h,
            txsEUSDMiningIncentives: p,
            mainnetNetId: g,
            gasfee: j,
            ethPrice: v,
          } = (0, o.useContext)(r.S),
          [N, f] = (0, o.useState)(0),
          _ = async () => {
            let e = p.filters.ClaimedOtherEarnings(
                null,
                null,
                null,
                null,
                null,
                null
              ),
              s = await p.queryFilter(e, 1, "latest"),
              a = new b.Z(0);
            if (s.length) {
              for (let e = 0; e < s.length; e++)
                if (!s[e].args.useEUSD) {
                  let t = s[e].args.biddingFee;
                  a = a.plus(new b.Z(t._hex).div(new b.Z(1e18)));
                }
              f(a.toFixed(2));
            }
          };
        (0, o.useEffect)(() => {
          _();
        });
        let [w, y] = (0, o.useState)(!1),
          [T, I] = (0, o.useState)(!1),
          E = async (e) => {
            y(e);
          },
          B = async (e) => {
            I(e);
          },
          [k, R] = (0, o.useState)(!1),
          C = (e) => {
            R(e);
          },
          [D, F] = (0, o.useState)(1),
          H = (e, s) => {
            R(!0), F(e);
          },
          [Z, U] = (0, o.useState)([]),
          M = 0,
          A = [],
          [P, q] = (0, o.useState)(!1),
          [O, G] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: s,
          functionName: "balanceOf",
          args: [e],
          watch: !0,
          onSuccess(e) {
            G(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [V, W] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: s,
          functionName: "balanceOf",
          args: [e],
          watch: !0,
          onSuccess(e) {
            W(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [Y, K] = (0, o.useState)(0);
        (0, x.do)({
          address: i,
          abi: c,
          functionName: "biddingFeeRatio",
          watch: !0,
          onSuccess(e) {
            K(new b.Z(e._hex).toFixed() / 1e4);
          },
        });
        let [z, J] = (0, o.useState)(0);
        (0, x.do)({
          address: d,
          abi: l,
          functionName: "latestRoundData",
          watch: !0,
          onSuccess(e) {
            J(new b.Z(e[1]._hex).div(new b.Z(1e8)).toFixed());
          },
        });
        let [Q, ee] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: m,
          functionName: "grabableAmount",
          watch: !0,
          onSuccess(e) {
            ee(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [es, ea] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: m,
          functionName: "grabFeeRatio",
          watch: !0,
          onSuccess(e) {
            ea(new b.Z(e._hex).toFixed() / 1e4);
          },
        });
        let [et, en] = (0, o.useState)(0);
        (0, x.do)({
          address: n,
          abi: s,
          functionName: "allowance",
          args: [e, 1 == D ? i : u],
          watch: !0,
          chainId: g,
          onSuccess(e) {
            en(new b.Z(e._hex).toFixed());
          },
        });
        let [ei, ec] = (0, o.useState)(0),
          [el, eo] = (0, o.useState)([]),
          [er, ed] = (0, o.useState)(0),
          [eu, em] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
          P ? ec(er * z * Y) : ec(er * Y);
        }, [er, P]);
        let eh = () => {
            let e = [...Z];
            e.forEach((s, a) => {
              e[a].checked = !1;
            }),
              U(e),
              (A = e),
              em(eu + 1),
              ec(0),
              ed(0),
              eo([]);
          },
          ex = (0, o.useRef)(null),
          ep = async () => {
            let e = await $.Z.get(
                "https://v2-mainnet-api.lybra.finance/user/claimable/list"
              ),
              s = e.data.data;
            if (0 == e.data.code) {
              if (M <= 0)
                s.forEach((e, a) => {
                  s[a].checked = !1;
                }),
                  U(s),
                  (M = s.length),
                  (A = s);
              else {
                for (let e = 0; e < s.length; e++)
                  for (let a = 0; a < A.length; a++) {
                    if (s[e].address == A[a].address) {
                      s[e].checked = A[a].checked;
                      break;
                    }
                    s[e].checked = !1;
                  }
                U(s), (M = s.length), (A = s);
              }
            }
            em(eu + 1);
          },
          eg = (e) => {
            Z.forEach((s, a) => {
              s.address == e &&
                (!0 == s.checked ? (Z[a].checked = !1) : (Z[a].checked = !0));
            }),
              U(Z),
              (A = Z),
              em(eu + 1);
          },
          [ej, ev] = (0, o.useState)(0);
        return (
          (0, o.useEffect)(() => {
            let e = [],
              s = 0;
            Z.forEach((a) => {
              if (!0 == a.checked) {
                e.push(a.address);
                let t = new b.Z(a.amount).div(new b.Z(1e18)).toFixed();
                s = new b.Z(s).toNumber() + new b.Z(t).toNumber();
              }
            }),
              eo(e),
              ed(s),
              ev(((26e4 * j) / 1e18) * v * e.length);
          }, [Z, eu]),
          (0, o.useEffect)(
            () => (
              ep(),
              (ex.current = setInterval(() => {
                ep();
              }, 5e3)),
              () => clearInterval(ex.current)
            ),
            []
          ),
          (0, t.jsxs)("div", {
            className:
              0 == h
                ? "".concat(L().earn)
                : ""
                    .concat(L().earn, " ")
                    .concat(L().earn_dark, " ", "globals_dark"),
            id: "Bounty",
            children: [
              (0, t.jsx)("div", {
                className: "section earnSection",
                children: (0, t.jsx)("div", {
                  className: "section_w",
                  children: (0, t.jsxs)("div", {
                    className: L().earnCards,
                    children: [
                      (0, t.jsxs)("div", {
                        className: L().card,
                        style: { height: "420px" },
                        children: [
                          (0, t.jsx)("div", {
                            className: ""
                              .concat(L().cardTitle, " ")
                              .concat(L().cardphase),
                            style: { marginBottom: "0" },
                            children: (0, t.jsxs)("div", {
                              className: L().phaseTitle,
                              children: [
                                (0, t.jsx)("img", {
                                  src: "images/logo.png",
                                  alt: "logo",
                                }),
                                "dLP Bounty",
                                (0, t.jsx)("div", {
                                  className: "showTip",
                                  children: (0, t.jsxs)("div", {
                                    className:
                                      0 == h
                                        ? "qaIcon qaBg iconTop"
                                        : "qaIcon qaBg_dark iconTop",
                                    children: [
                                      (0, t.jsx)("img", {
                                        src:
                                          0 == h
                                            ? "/images/icon/qa.svg"
                                            : "/images/icon/qa_dark.svg",
                                        alt: "qa",
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "tipMain dLPMain",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className: "tip-trangle-bottom",
                                            style: { right: "272px" },
                                          }),
                                          (0, t.jsx)("span", {
                                            dangerouslySetInnerHTML: {
                                              __html:
                                                "When a qualifier's dLP value drops below the minimum 2.5% threshold, the user will become ineligible for all his unclaimed esLBR emissions.<br/><br/> The esLBR can then be purchased by any user with LBR or eUSD at a 40% discount. The LBR paid will be subsequently burnt. (Note: you can only buy the full amount.)<br/> <br/> As of the present, a total of <span >" +
                                                N +
                                                " LBR</span> has been burnt.",
                                            },
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex_between_end",
                            style: { height: "45px", alignItems: "center" },
                            children: [
                              (0, t.jsxs)("div", {
                                className: L().switchBtn,
                                style: {
                                  gap: "10px",
                                  display: "flex",
                                  alignItems: "center",
                                },
                                children: [
                                  (0, t.jsx)("span", { children: "LBR" }),
                                  (0, t.jsx)("input", {
                                    className: "switch-btn switch-btn-animbg",
                                    type: "checkbox",
                                    checked: P,
                                    onChange: () => q(!P),
                                  }),
                                  (0, t.jsx)("span", { children: "eUSD" }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  "Available ",
                                  P
                                    ? (
                                        Math.floor(100 * V) / 100
                                      ).toLocaleString() + " eUSD"
                                    : (
                                        Math.floor(100 * O) / 100
                                      ).toLocaleString() + " LBR",
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", { className: L().cardDivider }),
                          (0, t.jsxs)("div", {
                            className: L().tabItem,
                            children: [
                              (0, t.jsx)("p", { style: { width: "10%" } }),
                              (0, t.jsx)("p", {
                                style: { width: "45%" },
                                children: "Address",
                              }),
                              (0, t.jsx)("p", {
                                style: { width: "45%" },
                                children: "Bounty",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", { className: L().cardDivider }),
                          (0, t.jsx)("div", {
                            style: { height: "182px", overflowY: "auto" },
                            children: Z.map((e, s) =>
                              (0, t.jsxs)(
                                "div",
                                {
                                  className: L().tabItem,
                                  style:
                                    0.01 >= Number(e.amount / 1e18)
                                      ? { display: "none" }
                                      : { display: "flex" },
                                  children: [
                                    (0, t.jsx)("div", {
                                      style: { width: "10%" },
                                      children: (0, t.jsx)("input", {
                                        type: "checkbox",
                                        className: "checkAddress",
                                        name: "checkAddress",
                                        checked: e.checked,
                                        defaultValue: e.address,
                                        readOnly: !0,
                                        onChange: () => eg(e.address),
                                      }),
                                    }),
                                    (0, t.jsx)("div", {
                                      style: { width: "45%" },
                                      children:
                                        e.address.slice(0, 4) +
                                        ".." +
                                        e.address.slice(-4),
                                    }),
                                    (0, t.jsxs)("div", {
                                      style: { width: "45%" },
                                      children: [
                                        (0, t.jsx)("img", {
                                          src: "/images/logo.png",
                                          alt: "logo",
                                        }),
                                        " ",
                                        (e.amount / 1e18).toFixed(4),
                                        " esLBR",
                                      ],
                                    }),
                                  ],
                                },
                                s
                              )
                            ),
                          }),
                          (0, t.jsxs)("div", {
                            className: L().totalCost,
                            children: [
                              "Total cost: ",
                              Number(ei.toFixed(2)).toLocaleString(),
                              " ",
                              P ? "eUSD" : "LBR",
                              (0, t.jsxs)("span", {
                                children: [
                                  "(Gas fee: $",
                                  Number(ej.toFixed(2)).toLocaleString(),
                                  ")",
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: L().cardBottom,
                            children: [
                              (0, t.jsx)("div", { className: L().cardDivider }),
                              (0, t.jsx)("div", {
                                className: "buttonMini",
                                style: { justifyContent: "center" },
                                children: (0, t.jsx)("div", {
                                  className: "button blue mini",
                                  style: { width: "150px" },
                                  onClick: () => H(1),
                                  children: "Buy",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: L().card,
                        style: { height: "420px" },
                        children: [
                          (0, t.jsx)("div", {
                            className: ""
                              .concat(L().cardTitle, " ")
                              .concat(L().cardphase),
                            children: (0, t.jsxs)("div", {
                              className: L().phaseTitle,
                              children: [
                                " ",
                                (0, t.jsx)("img", {
                                  src: "images/logo.png",
                                  alt: "logo",
                                }),
                                "Vesting Penalty",
                              ],
                            }),
                          }),
                          (0, t.jsx)("div", { className: L().cardDivider }),
                          (0, t.jsx)("p", {
                            className: L().eslbrInfo,
                            children:
                              "All esLBR from the advanced vesting penalty is shown below. They can be purchased by any user with LBR or eUSD at a 40% discount. The LBR paid will be subsequently burnt.",
                          }),
                          (0, t.jsx)("div", { className: L().cardDivider }),
                          (0, t.jsxs)("div", {
                            className: L().eslbrLogo,
                            children: [
                              (0, t.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "logo",
                              }),
                              Number(Q).toLocaleString(),
                              " esLBR",
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: L().cardBottom,
                            children: [
                              (0, t.jsx)("div", { className: L().cardDivider }),
                              (0, t.jsx)("div", {
                                className: "buttonMini",
                                style: { justifyContent: "center" },
                                children: (0, t.jsx)("div", {
                                  className: "button blue mini",
                                  style: { width: "150px" },
                                  onClick: () => H(2),
                                  children: "Buy",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              k
                ? (0, t.jsx)(X, {
                    allowance: et,
                    biddingFeeRatio: Y,
                    latestRoundData: z,
                    grabFeeRatio: es,
                    cancelCheckList: eh,
                    buyType: D,
                    lbrBalanceOf: O,
                    eUSDBalanceOf: V,
                    addressList: el,
                    totalesLBR: 0,
                    totalCost: ei,
                    openSwitchUse: P,
                    changeShowBountyBuy: C,
                    updateIsLoading: E,
                    updateIsSuccess: B,
                  })
                : null,
              w ? (0, t.jsx)(S.Z, {}) : null,
              T ? (0, t.jsx)(S.Z, {}) : null,
            ],
          })
        );
      }
      var z = a(37474),
        J = a.n(z);
      function Q() {
        let {
            mode: e,
            stethvaultAbi: s,
            helper: a,
            helperAbi: n,
            mainnetNetId: i,
            stETHVault: c,
            wstETHVault: l,
            wBETHVault: d,
            rETHVault: u,
            mintPoolApr: m,
            configurator: h,
            arbTestNetId: p,
            arbTest: g,
            configuratorAbi: j,
            setMenuIndex: v,
            setCoinType: N,
            EUSDMiningIncentivesAbi: S,
            address: f,
          } = (0, o.useContext)(r.S),
          _ = (e) =>
            e >= 1e9
              ? Number(e / 1e9).toLocaleString() + "B"
              : e >= 1e6
              ? Number(e / 1e6).toLocaleString() + "M"
              : Number(e).toLocaleString(),
          [w, y] = (0, o.useState)(0);
        (0, x.do)({
          address: c,
          abi: s,
          functionName: "totalDepositedAsset",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            y(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [L, T] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: n,
          functionName: "getAssetPrice",
          args: [c],
          watch: !0,
          chainId: i,
          onSuccess(e) {
            T(new b.Z(e._hex).div(new b.Z(1e8)).toFixed());
          },
        });
        let [I, E] = (0, o.useState)(0);
        (0, x.do)({
          address: c,
          abi: s,
          functionName: "getPoolTotalCirculation",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            E(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [B, k] = (0, o.useState)(0);
        (0, x.do)({
          address: h,
          abi: j,
          functionName: "getVaultWeight",
          watch: !0,
          args: [c],
          chainId: i,
          onSuccess(e) {
            k(new b.Z(e._hex).div(new b.Z(1e20)).toFixed());
          },
        });
        let [R, C] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: s,
          functionName: "totalDepositedAsset",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            C(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [D, F] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: n,
          functionName: "getAssetPrice",
          args: [l],
          watch: !0,
          chainId: i,
          onSuccess(e) {
            F(new b.Z(e._hex).div(new b.Z(1e8)).toFixed());
          },
        });
        let [H, Z] = (0, o.useState)(0);
        (0, x.do)({
          address: l,
          abi: s,
          functionName: "getPoolTotalCirculation",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            Z(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [U, M] = (0, o.useState)(0);
        (0, x.do)({
          address: h,
          abi: j,
          functionName: "getVaultWeight",
          watch: !0,
          args: [l],
          chainId: i,
          onSuccess(e) {
            M(new b.Z(e._hex).div(new b.Z(1e20)).toFixed());
          },
        });
        let [A, P] = (0, o.useState)(0);
        (0, x.do)({
          address: g,
          abi: S,
          functionName: "earned",
          watch: !0,
          args: [f],
          chainId: p,
          onSuccess(e) {
            P(Number(e._hex) / 1e18);
          },
        });
        let [q, O] = (0, o.useState)(0);
        (0, x.do)({
          address: d,
          abi: s,
          functionName: "totalDepositedAsset",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            O(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [G, V] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: n,
          functionName: "getAssetPrice",
          args: [d],
          watch: !0,
          chainId: i,
          onSuccess(e) {
            V(new b.Z(e._hex).div(new b.Z(1e8)).toFixed());
          },
        });
        let [W, Y] = (0, o.useState)(0);
        (0, x.do)({
          address: d,
          abi: s,
          functionName: "getPoolTotalCirculation",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            Y(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [X, $] = (0, o.useState)(0);
        (0, x.do)({
          address: h,
          abi: j,
          functionName: "getVaultWeight",
          watch: !0,
          args: [d],
          chainId: i,
          onSuccess(e) {
            $(new b.Z(e._hex).div(new b.Z(1e20)).toFixed());
          },
        });
        let [K, z] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: s,
          functionName: "totalDepositedAsset",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            z(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [Q, ee] = (0, o.useState)(0);
        (0, x.do)({
          address: a,
          abi: n,
          functionName: "getAssetPrice",
          args: [u],
          watch: !0,
          chainId: i,
          onSuccess(e) {
            ee(new b.Z(e._hex).div(new b.Z(1e8)).toFixed());
          },
        });
        let [es, ea] = (0, o.useState)(0);
        (0, x.do)({
          address: u,
          abi: s,
          functionName: "getPoolTotalCirculation",
          watch: !0,
          chainId: i,
          onSuccess(e) {
            ea(new b.Z(e._hex).div(new b.Z(1e18)).toFixed());
          },
        });
        let [et, en] = (0, o.useState)(0);
        (0, x.do)({
          address: h,
          abi: j,
          functionName: "getVaultWeight",
          watch: !0,
          args: [u],
          chainId: i,
          onSuccess(e) {
            en(new b.Z(e._hex).div(new b.Z(1e20)).toFixed());
          },
        });
        let ei = (e, s) => {
            N(e), localStorage.setItem("menuIndex", 0), v(0);
          },
          ec = null,
          [el, eo] = (0, o.useState)({ day: "00", hour: "00", minute: "00" }),
          er = () => {
            let e = new Date(),
              s = parseInt(e.getTime() / 1e3),
              a = 1701349200 - s;
            if (a <= -1) clearTimeout(ec);
            else {
              let e = Math.floor(a / 60 / 60 / 24),
                s = Math.floor((a / 60 / 60) % 24),
                t = Math.floor((a / 60) % 60);
              e < 10 && (e = "0" + e),
                s < 10 && (s = "0" + s),
                t < 10 && (t = "0" + t),
                eo({ day: e, hour: s, minute: t }),
                (ec = setTimeout(() => {
                  er();
                }, 1e3));
            }
          };
        return (
          (0, o.useEffect)(() => {
            er();
          }, []),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
              className:
                1 == e
                  ? "".concat(J().vaults, " ").concat(J().dark)
                  : "".concat(J().vaults),
              children: (0, t.jsxs)("div", {
                className: "".concat(J().vaultsList),
                children: [
                  (0, t.jsxs)("div", {
                    className: J().vaultsItem,
                    children: [
                      (0, t.jsxs)("p", {
                        className: J().title,
                        children: [
                          (0, t.jsx)("img", {
                            className: "boxshadow",
                            src: "/images/logo/stETH.svg",
                            alt: "stETH",
                          }),
                          "stETH",
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsxs)("div", {
                        className: J().main,
                        children: [
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", {
                                children: "Total Value Locked",
                              }),
                              (0, t.jsxs)("span", {
                                children: ["$", _(Number(w) * Number(L))],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "Minted eUSD" }),
                              (0, t.jsx)("span", { children: _(I) }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "APR" }),
                              (0, t.jsxs)("span", {
                                children: [
                                  Number(
                                    (m * Number(B)).toFixed(2)
                                  ).toLocaleString(),
                                  "%",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsx)("div", {
                        className: "".concat(
                          J().button,
                          " ",
                          "button",
                          "  ",
                          "mini"
                        ),
                        onClick: () => ei("stETH", c),
                        children: "Deposit",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: J().vaultsItem,
                    children: [
                      (0, t.jsxs)("p", {
                        className: J().title,
                        children: [
                          (0, t.jsx)("img", {
                            className: "boxshadow",
                            src: "/images/logo/wstETH.svg",
                            alt: "wstETH",
                          }),
                          "wstETH",
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsxs)("div", {
                        className: J().main,
                        children: [
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", {
                                children: "Total Value Locked",
                              }),
                              (0, t.jsxs)("span", {
                                children: ["$", _(Number(R) * Number(D))],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "Minted peUSD" }),
                              (0, t.jsx)("span", { children: _(H) }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "APR" }),
                              (0, t.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  alignItems: "flex-end",
                                },
                                children: [
                                  (0, t.jsxs)("span", {
                                    children: [
                                      Number(
                                        (m * Number(U)).toFixed(2)
                                      ).toLocaleString(),
                                      "%",
                                    ],
                                  }),
                                  Number(A.toFixed(4)) > 1e-4
                                    ? (0, t.jsx)("div", {
                                        className: "showTip",
                                        style: { height: "20px" },
                                        children: (0, t.jsxs)("div", {
                                          className:
                                            0 == e
                                              ? "qaIcon qaBg"
                                              : "qaIcon qaBg_dark",
                                          children: [
                                            (0, t.jsx)("img", {
                                              src:
                                                0 == e
                                                  ? "/images/icon/qa.svg"
                                                  : "/images/icon/qa_dark.svg",
                                              alt: "icon",
                                            }),
                                            (0, t.jsxs)("div", {
                                              className: "tipMain ".concat(
                                                J().tipmainp
                                              ),
                                              style: {
                                                width: "max-content",
                                                left: "-220px",
                                              },
                                              children: [
                                                (0, t.jsx)("div", {
                                                  className:
                                                    "tip-trangle-bottom",
                                                  style: { right: "20px" },
                                                }),
                                                (0, t.jsx)("p", {
                                                  style: {
                                                    marginBottom: "8px",
                                                  },
                                                  children: "APR Breakdown:",
                                                }),
                                                (0, t.jsxs)("p", {
                                                  children: [
                                                    "esLBR ",
                                                    (0, t.jsxs)("span", {
                                                      style: {
                                                        marginLeft: "10px",
                                                      },
                                                      children: [
                                                        Number(
                                                          (
                                                            m * Number(U)
                                                          ).toFixed(2)
                                                        ).toLocaleString(),
                                                        "%",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, t.jsxs)("p", {
                                                  style: {
                                                    marginBottom: "8px",
                                                  },
                                                  children: [
                                                    "wstETH ",
                                                    (0, t.jsxs)("span", {
                                                      style: {
                                                        marginLeft: "5px",
                                                      },
                                                      children: [
                                                        Number(
                                                          (
                                                            ((284.4 *
                                                              Number(D)) /
                                                              H) *
                                                            100
                                                          ).toFixed(2)
                                                        ).toLocaleString(),
                                                        "%",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, t.jsxs)("p", {
                                                  style: {
                                                    marginBottom: "8px",
                                                  },
                                                  children: [
                                                    "wstETH rewards program ends in ",
                                                    (0, t.jsx)("br", {}),
                                                    (0, t.jsx)("span", {
                                                      children:
                                                        el.day +
                                                        "d " +
                                                        el.hour +
                                                        "h " +
                                                        el.minute +
                                                        "m",
                                                    }),
                                                    ". Eligible wallets, which include both existing and new wstETH minters, will receive their rewards via airdrop once the program concludes.",
                                                  ],
                                                }),
                                                (0, t.jsxs)("p", {
                                                  children: [
                                                    "You will receive",
                                                    (0, t.jsxs)("span", {
                                                      style: {
                                                        marginLeft: "5px",
                                                      },
                                                      children: [
                                                        Number(
                                                          A.toFixed(4)
                                                        ).toLocaleString(),
                                                        " ",
                                                      ],
                                                    }),
                                                    "wstETH",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsx)("div", {
                        className: "".concat(
                          J().button,
                          " ",
                          "button",
                          "  ",
                          "mini"
                        ),
                        onClick: () => ei("wstETH", l),
                        children: "Deposit",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: J().vaultsItem,
                    children: [
                      (0, t.jsxs)("p", {
                        className: J().title,
                        children: [
                          (0, t.jsx)("img", {
                            className: "boxshadow",
                            src: "/images/logo/WBETH.svg",
                            alt: "WBETH",
                          }),
                          "WBETH",
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsxs)("div", {
                        className: J().main,
                        children: [
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", {
                                children: "Total Value Locked",
                              }),
                              (0, t.jsxs)("span", {
                                children: ["$", _(Number(q) * Number(G))],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "Minted peUSD" }),
                              (0, t.jsx)("span", { children: _(W) }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "APR" }),
                              (0, t.jsxs)("span", {
                                children: [
                                  Number(
                                    (m * Number(X)).toFixed(2)
                                  ).toLocaleString(),
                                  "%",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsx)("div", {
                        className: "".concat(
                          J().button,
                          " ",
                          "button",
                          "  ",
                          "mini"
                        ),
                        onClick: () => ei("WBETH", d),
                        children: "Deposit",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className: J().vaultsItem,
                    children: [
                      (0, t.jsxs)("p", {
                        className: J().title,
                        children: [
                          (0, t.jsx)("img", {
                            className: "boxshadow",
                            src: "/images/logo/rETH.svg",
                            alt: "rETH",
                          }),
                          "rETH",
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsxs)("div", {
                        className: J().main,
                        children: [
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", {
                                children: "Total Value Locked",
                              }),
                              (0, t.jsxs)("span", {
                                children: ["$", _(Number(K) * Number(Q))],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "Minted peUSD" }),
                              (0, t.jsx)("span", { children: _(es) }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: J().type,
                            children: [
                              (0, t.jsx)("span", { children: "APR" }),
                              (0, t.jsxs)("span", {
                                children: [
                                  Number(
                                    (m * Number(et)).toFixed(2)
                                  ).toLocaleString(),
                                  "%",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", { className: J().hr }),
                      (0, t.jsx)("div", {
                        className: "".concat(
                          J().button,
                          " ",
                          "button",
                          "  ",
                          "mini"
                        ),
                        onClick: () => ei("rETH", u),
                        children: "Deposit",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      function ee() {
        let {
            setCoinType: e,
            menuIndex: s,
            setMenuIndex: a,
            mode: c,
          } = (0, o.useContext)(r.S),
          d = async (s) => {
            localStorage.setItem("menuIndex", s),
              a(s),
              0 == s ? e("ETH") : e("stETH");
          },
          [u, m] = (0, o.useState)(!1),
          h = (e) => {
            m(e);
          };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.Z, { id: "dashboard" }),
            (0, t.jsx)("div", {
              className:
                0 == c
                  ? "".concat(l().dashboard)
                  : "".concat(l().dashboard, " ").concat(l().dashboard_dark),
              children: (0, t.jsx)("div", {
                className: "section",
                children: (0, t.jsxs)("div", {
                  className: l().main,
                  children: [
                    (0, t.jsxs)("div", {
                      className: l().left,
                      children: [
                        (0, t.jsx)("span", {
                          className: "font_gray_12",
                          children: "DASHBOARD",
                        }),
                        (0, t.jsxs)("div", {
                          className: ""
                            .concat(l().titleList, " ")
                            .concat(l().bottom_border),
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                9 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              style: { gap: "2px" },
                              onClick: () => d(9),
                              children: (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("img", {
                                    alt: "icon",
                                    src: "/images/icon/icon11.svg",
                                  }),
                                  (0, t.jsx)("p", { children: "Vaults" }),
                                ],
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                0 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              style: { gap: "2px" },
                              onClick: () => d(0),
                              children: (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("img", {
                                    alt: "icon",
                                    src: "/images/icon/icon01.svg",
                                  }),
                                  (0, t.jsx)("p", { children: "Deposit" }),
                                ],
                              }),
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                1 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              onClick: () => d(1),
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/icon/icon03.svg",
                                }),
                                (0, t.jsx)("p", { children: "Withdraw" }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                2 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              onClick: () => d(2),
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/icon/icon04.svg",
                                }),
                                (0, t.jsx)("p", { children: "Repay" }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                3 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              onClick: () => d(3),
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/icon/icon05.svg",
                                }),
                                (0, t.jsx)("p", { children: "Redeem" }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            4 == s
                              ? "".concat(l().omnichain, " ").concat(l().active)
                              : "".concat(l().omnichain),
                          onClick: () => d(4),
                          children: (0, t.jsxs)("p", {
                            className: l().omnichainImg,
                            children: [
                              (0, t.jsx)("img", {
                                alt: "icon",
                                src: "/images/icon/icon06.svg",
                              }),
                              "Omnichain",
                            ],
                          }),
                        }),
                        (0, t.jsx)("span", {
                          className: "font_gray_12",
                          children: "EARN",
                        }),
                        (0, t.jsxs)("div", {
                          className: "".concat(l().titleList, " "),
                          children: [
                            (0, t.jsxs)("div", {
                              className:
                                5 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              onClick: () => d(5),
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/icon/icon07.svg",
                                }),
                                (0, t.jsx)("p", { children: "Boost" }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                6 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              onClick: () => d(6),
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/icon/icon08.svg",
                                }),
                                (0, t.jsx)("p", { children: "Earn" }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                7 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              onClick: () => d(7),
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/icon/icon09.svg",
                                }),
                                (0, t.jsx)("p", { children: "Vest" }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className:
                                8 == s
                                  ? ""
                                      .concat(l().titleItem, " ")
                                      .concat(l().active)
                                  : "".concat(l().titleItem),
                              onClick: () => d(8),
                              children: [
                                (0, t.jsx)("img", {
                                  alt: "icon",
                                  src: "/images/icon/icon10.svg",
                                }),
                                (0, t.jsx)("p", { children: "Bounty" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: l().right,
                      children: [
                        s < 5
                          ? (0, t.jsx)(M, {
                              menuIndex: s,
                              changeShowLoadingDash: h,
                            })
                          : s < 8
                          ? (0, t.jsx)(Y, { menuIndex: s })
                          : 8 == s
                          ? (0, t.jsx)(K, {})
                          : 9 == s
                          ? (0, t.jsx)(Q, {})
                          : null,
                        u
                          ? (0, t.jsx)("div", {
                              className: "loadingDash",
                              children: (0, t.jsx)("img", {
                                alt: "icon",
                                src: "images/icon/load.svg",
                              }),
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)(i.Z, { id: "dashboard" }),
          ],
        });
      }
    },
    3627: function (e) {
      e.exports = {
        dashboardMain: "dashboard_dashboardMain__gaAby",
        dashMain: "dashboard_dashMain__RLWHd",
        topCoinList: "dashboard_topCoinList__Jfzsu",
        coinItem: "dashboard_coinItem__xqq9j",
        optional: "dashboard_optional__cEmZ_",
        active: "dashboard_active__IkJ3q",
        operateMain: "dashboard_operateMain__lxNsU",
        typeTitle: "dashboard_typeTitle__I10db",
        top: "dashboard_top__iG9w0",
        main: "dashboard_main__9yhn2",
        available: "dashboard_available__UWar9",
        bottomBut: "dashboard_bottomBut__LbG2x",
        operateDesc: "dashboard_operateDesc__8KRtK",
        dashInfo: "dashboard_dashInfo__Qokt4",
        dataList: "dashboard_dataList__zmpq6",
        dataItem: "dashboard_dataItem__e14pg",
        ratio: "dashboard_ratio__vwDpL",
        overview: "dashboard_overview__ap_IR",
        contracts: "dashboard_contracts__LWOiw",
        item: "dashboard_item__Cq4RT",
        visibleHistory: "dashboard_visibleHistory___ElVI",
        eusdApy: "dashboard_eusdApy__f8uHl",
        willReceive: "dashboard_willReceive__vxyQo",
        rateSetting: "dashboard_rateSetting__Ov2_u",
        on: "dashboard_on__g8rJu",
        off: "dashboard_off__ftgYn",
        showTip: "dashboard_showTip__RI6V_",
        tipMain: "dashboard_tipMain__98VqD",
        qaIcon: "dashboard_qaIcon__gBoYt",
        omniChain: "dashboard_omniChain__INr3L",
        omniChainFromTo: "dashboard_omniChainFromTo__XTxZ7",
        omniChainAmount: "dashboard_omniChainAmount__Wt03d",
        doubleItem: "dashboard_doubleItem__aigcz",
        w70: "dashboard_w70__2pvAz",
        w30: "dashboard_w30__qU9HA",
        omniSelect: "dashboard_omniSelect__JDakA",
        selectName: "dashboard_selectName__Q2u0d",
        selectItem: "dashboard_selectItem__OKmxU",
        coin: "dashboard_coin__RRQqd",
        refresh: "dashboard_refresh__7FzUc",
        omniChainBottom: "dashboard_omniChainBottom___Co9Z",
        dashboardMain_dark: "dashboard_dashboardMain_dark__i_j97",
        selectDiv: "dashboard_selectDiv__zvgiE",
      };
    },
    27102: function (e) {
      e.exports = {
        earn: "earn_earn__Vkhc1",
        "App-box": "earn_App-box__MGgrn",
        card: "earn_card__b1uMG",
        "card-primary": "earn_card-primary__7u5yc",
        "App-box-highlight": "earn_App-box-highlight__GPYRg",
        "App-box-solid": "earn_App-box-solid__hvEYP",
        cardBottom: "earn_cardBottom__I0_W4",
        cardDivider: "earn_cardDivider__lFsAF",
        cardBottomPlaceholder: "earn_cardBottomPlaceholder__c2wJ_",
        Page: "earn_Page__WN411",
        PageTitle: "earn_PageTitle__29HMC",
        PageDescription: "earn_PageDescription__51kUE",
        cardflex: "earn_cardflex__dEXdp",
        cardTitle: "earn_cardTitle__CmQqI",
        cardphase: "earn_cardphase__jV8Ep",
        phaseTitle: "earn_phaseTitle__bFoDS",
        phaseChange: "earn_phaseChange__FTLER",
        cardContent: "earn_cardContent__yKksJ",
        cardRow: "earn_cardRow__Hx7Zf",
        inner: "earn_inner__mECj7",
        icon: "earn_icon__I8qvk",
        cardOptions: "earn_cardOptions__rLYm4",
        cardOption: "earn_cardOption__IWHJ_",
        TabTitleSection: "earn_TabTitleSection__vvvPD",
        boostQa: "earn_boostQa__3hgPK",
        tipMain: "earn_tipMain__JrUfU",
        earnCards: "earn_earnCards__9Zxca",
        selectDuration: "earn_selectDuration__J6cuv",
        connectButton: "earn_connectButton__N_L_4",
        htmlBody: "earn_htmlBody__F_2Iz",
        mainCard: "earn_mainCard__7c9pi",
        boostCard: "earn_boostCard__eFkOb",
        boostTipCard: "earn_boostTipCard__cwiLz",
        earnh5Card: "earn_earnh5Card__fHHqR",
        earnh5Card2: "earn_earnh5Card2__30hle",
        propMain: "earn_propMain__IO3lM",
        eslbrInfo: "earn_eslbrInfo__lwe7O",
        eslbrLogo: "earn_eslbrLogo__7t7Gq",
        eranProp: "earn_eranProp__4oE0F",
        switchBtn: "earn_switchBtn__7E3aB",
        propInput: "earn_propInput__aqjcU",
        eranProp_dark: "earn_eranProp_dark__RNZh7",
        closeIcon: "earn_closeIcon__mY307",
        linkUnderline: "earn_linkUnderline__H2nN6",
        cardRowcenter: "earn_cardRowcenter__g5cdj",
        fillalitem: "earn_fillalitem__udSrx",
        filled: "earn_filled__YX1yq",
        filledBg: "earn_filledBg__7b5mT",
        filledtext: "earn_filledtext__FMs_Y",
        active: "earn_active__mMYCc",
        addLink: "earn_addLink__MLDN9",
        tabItem: "earn_tabItem__ST764",
        totalCost: "earn_totalCost__yIrMB",
        earn_dark: "earn_earn_dark__4FVjU",
      };
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
    37474: function (e) {
      e.exports = {
        vaults: "vaults_vaults__8YS7S",
        vaultsList: "vaults_vaultsList__r9GLp",
        vaultsItem: "vaults_vaultsItem__slVU_",
        title: "vaults_title__MkdAb",
        main: "vaults_main__DhF05",
        type: "vaults_type__soUdP",
        hr: "vaults_hr__sQi4B",
        button: "vaults_button__hlKxm",
        link: "vaults_link__eqlyZ",
        linkIcon: "vaults_linkIcon__feA40",
        tipmainp: "vaults_tipmainp__gJ3zU",
        dark: "vaults_dark__MZ_cj",
      };
    },
    13684: function (e) {
      e.exports = {
        dashboard: "dashboard_dashboard__v4TLo",
        main: "dashboard_main__pzjTy",
        left: "dashboard_left__57Tio",
        titleList: "dashboard_titleList__aPG6z",
        bottom_border: "dashboard_bottom_border__wk_4_",
        titleItem: "dashboard_titleItem__NyrD1",
        mint: "dashboard_mint__SZufI",
        active: "dashboard_active__PWVBB",
        omnichain: "dashboard_omnichain__6nvS4",
        omnichainImg: "dashboard_omnichainImg__QBXIP",
        right: "dashboard_right___hw_5",
        dashboard_dark: "dashboard_dashboard_dark__B1XVY",
      };
    },
  },
  function (e) {
    e.O(0, [8543, 8435, 8764, 6154, 51, 9774, 2888, 179], function () {
      return e((e.s = 51075));
    }),
      (_N_E = e.O());
  },
]);
