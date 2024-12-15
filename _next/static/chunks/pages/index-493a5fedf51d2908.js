(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    75557: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(23486);
        },
      ]);
    },
    23333: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = s(85893),
        n = s(37923),
        i = s.n(n),
        o = s(41664),
        r = s.n(o),
        c = s(67294),
        l = s(17883);
      function d(e) {
        let { mode: t } = (0, c.useContext)(l.S),
          { id: s } = e,
          [n, o] = (0, c.useState)(!1);
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className:
              1 == t
                ? "".concat(i().footer, " ").concat(i().footer_dark)
                : "dashboard" == s
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
                        "dashboard" == s
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
                        (0, a.jsx)(r(), {
                          href: "/",
                          children: (0, a.jsx)("span", {
                            className: "Home" == s ? i().active : "",
                            children: "Home",
                          }),
                        }),
                        (0, a.jsx)(r(), {
                          href: "/eUSD",
                          children: (0, a.jsx)("span", {
                            className: "Eusd" == s ? i().active : "",
                            children: "eUSD",
                          }),
                        }),
                        (0, a.jsx)(r(), {
                          href: "/peUSD",
                          children: (0, a.jsx)("span", {
                            className: "peUSD" == s ? i().active : "",
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

                    (0, a.jsx)(r(), {
                      target: "_blank",
                      href: "https://x.com/",
                      rel: "nofollow noopener noreferrer",
                      children: (0, a.jsx)("img", {
                        src:
                          "dashboard" == s
                            ? "/images/icon/twitter.svg"
                            : "/images/icon/twitter_2.svg",
                        alt: "icon",
                      }),
                    }),
                    (0, a.jsx)(r(), {
                      target: "_blank",
                      href: "https://t.me/",
                      rel: "nofollow noopener noreferrer",
                      children: (0, a.jsx)("img", {
                        src:
                          "dashboard" == s
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
    23486: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return x;
          },
        });
      var a = s(85893),
        n = s(30051),
        i = s(23333),
        o = s(52004),
        r = s.n(o),
        c = s(2711),
        l = s.n(c);
      s(21496);
      var d = s(67294),
        m = s(17883),
        h = s(69077),
        p = s(17857),
        _ = s(6154),
        u = s(36964);
      function x() {
        let {
            totalEusdYield: e,
            helper: t,
            helperAbi: s,
            mode: o,
            mainnetNetId: c,
            lybraV1: x,
            ethPrice: g,
            totalEusdYieldV1: f,
            EUSDMiningIncentives: b,
            EUSDMiningIncentivesAbi: j,
            stETHVault: y,
            oldeUSDTotalSupply: v,
            ethPoolTotalCirculation: w,
          } = (0, d.useContext)(m.S),
          [S, N] = (0, d.useState)(0),
          D = async (e) => {
            let t = await _.Z.get(
                "https://eth-api.lido.fi/v1/protocol/steth/apr/sma"
              ),
              s = t.data;
            if (null !== s.data) {
              let e = s.data.aprs;
              N(e[e.length - 1].apr);
            }
          };
        (0, d.useEffect)(() => {
          D();
        }, []);
        let [k, L] = (0, d.useState)(0);
        (0, h.do)({
          address: t,
          abi: s,
          functionName: "getToTalTVL",
          watch: !0,
          chainId: c,
          onSuccess(e) {
            L(Number(e._hex) / 1e26);
          },
        });
        let [T, U] = (0, d.useState)(0);
        (0, h.do)({
          address: x,
          abi: u.Z,
          functionName: "totalDepositedEther",
          watch: !0,
          chainId: c,
          onSuccess(e) {
            U(Number(e._hex) / 1e18);
          },
        });
        let [I, B] = (0, d.useState)(0),
          [E, O] = (0, d.useState)(0),
          [q, A] = (0, d.useState)(0);
        (0, d.useEffect)(() => {
          B(Number(k) + Number(T) * Number(g.toFixed())),
            O(w + v),
            A(Number(e) + Number(f));
        }, [k, T, v, e, f, g, w]);
        let [H, R] = (0, d.useState)(0);
        (0, h.do)({
          address: t,
          abi: s,
          functionName: "getOverallCollateralRatio",
          watch: !0,
          args: [y],
          chainId: c,
          onSuccess(e) {
            R(Number(e._hex) / 1e20);
          },
        }),
          (0, d.useEffect)(() => {
            l().init({ duration: 1e3, delay: 100, easing: "ease-in-out" });
          });
        let [C, F] = (0, d.useState)(250);
        (0, h.do)({
          address: b,
          abi: j,
          functionName: "minDlpRatio",
          watch: !0,
          chainId: c,
          onSuccess(e) {
            F(Number(e._hex));
          },
        });
        let [P, V] = (0, d.useState)([
            {
              title:
                "1. How are eUSD yields generated, and how can it yield ~8% APY?",
              text: "<p>eUSD yields generate from LST rebase rewards, translating into an actual yield. Currently, the APR stands at approximately 8%.</p>",
              show: !1,
            },
            {
              title: "2. How does the eUSD rebase work?",
              text: "<p>eUSD holders earn interest automatically due to Lybra Protocol’s unique design. It functions as follows:</p><p>As an example, let's consider a user, Bob, who uses stETH as collateral to mint eUSD. Bob's stETH collateral continues to accumulate rebase yield in the form of additional stETH. Users referred to as Redeemers purchase the rebase yields from Bob's stETH collateral using their eUSD on the Lybra protocol. If no Redeemer steps in, the protocol purchases the yield using its eUSD holdings. Bob receives a portion of the total eUSD proceeds as interest, determined by factors like his LSTs APR, the total eUSD in circulation in that LST pool, the pool's Collateral Ratio, and the overall eUSD supply. This mechanism allows Bob to earn interest on his eUSD automatically for as long as he holds it. The introduction of peUSD ensures this interest accrual continues even if he spends it.</p>",
              show: !1,
            },
            {
              title: "3. Can I earn eUSD APY just by holding it?",
              text: "<p>Yes, your wallet balance will increase automatically on a daily basis due to the distribution of the rebase yield.</p>",
              show: !1,
            },
            {
              title: "4. Is Lybra omnichain?",
              text: "<p>Indeed, both LBR and peUSD are integrated with the OFT model from LayerZero and can be bridged to any supported L2's. Our journey begins with Arbitrum.</p>",
              show: !1,
            },
            {
              title:
                "5. Why am I not receiving esLBR emission after minting eUSD/peUSD?",
              text:
                "<p>To be eligible for esLBR emission from the Mint Pool, users must maintain at least a " +
                C / 100 +
                "% threshold in Dynamic Liquidity Provisioning relative to their total loan value. If the threshold drops below " +
                C / 100 +
                "%, the user will no longer be eligible for future esLBR emissions. Simultaneously, a bounty equal to the user's ineligible emissions will be placed, which can be purchased by any user at a 40% discount in LBR or eUSD.</p>",
              show: !1,
            },
            {
              title:
                "6. Will I lose my esLBR if my dLP falls below the " +
                C / 100 +
                "% threshold?",
              text:
                "<p>If your dLP drops below the minimum " +
                C / 100 +
                "% threshold, you will become ineligible for unclaimed esLBR emissions. However, a bounty equal to the emissions you would have earned during your ineligibility will be set.</p>",
              show: !1,
            },
            {
              title: "7. Why can’t I convert peUSD back to eUSD?",
              text: "<p>Only peUSD that was originally converted from eUSD can be converted back to eUSD. If you have a rebasing LST as collateral asset on Lybra Protocol, you can convert your peUSD back to eUSD through the protocol.</p>",
              show: !1,
            },
            {
              title: "8. Can anyone purchase the discounted esLBR in Bounty?",
              text: "<p>Anyone can buy esLBR from the dLP penalty or advanced vesting bounty at a 40% discount, using either LBR or eUSD. Any LBR received by the protocol will be 100% burnt, while eUSD will be used in the Stability Fund to maintain eUSD's peg.</p>",
              show: !1,
            },
            {
              title: "9. Are there any fees associated with Lybra?",
              text: "<p>Lybra does not charge any minting fee for eUSD. However, a 1.5% annual service fee on eUSD circulation is deducted from the rebasing yield, which is then distributed to esLBR holders. For peUSD minters, a 1.5% borrow/repayment fee based on their peUSD debt is charged, and this too is distributed to LBR stakers.</p>",
              show: !1,
            },
            {
              title:
                "10. What are the requirements to mint eUSD/peUSD on Lybra?",
              text: "<p>To mint eUSD or peUSD, you need to deposit a minimum of 1 ETH or another supported LST as collateral through Lybra. Once deposited, you can mint eUSD or peUSD against your collateral up to a collateral ratio of 150% (which can be altered in accordance with DAO vote).</p>",
              show: !1,
            },
          ]),
          M = async (e, t) => {
            let s = [...P];
            (s[t].show = !e.show), V(s);
          },
          z = (e) => {
            var t, s;
            let a = window.innerHeight || document.documentElement.clientHeight,
              n = window.innerWidth || document.documentElement.clientWidth,
              {
                top: i,
                right: o,
                bottom: r,
                left: c,
              } = null !==
                (s =
                  null == e
                    ? void 0
                    : null === (t = e.getBoundingClientRect) || void 0 === t
                    ? void 0
                    : t.call(e)) && void 0 !== s
                ? s
                : { top: 0, right: 0, bottom: 0, left: 0 },
              l = c >= 0,
              d = i >= 0,
              m = r <= a,
              h = o <= n;
            return (
              (l && d && i <= a && c <= n) ||
              (m && h && r > 0) ||
              (!d && !m && ((!l && !h) || l))
            );
          },
          Z = 0,
          W = 0,
          [G, J] = (0, d.useState)(!1),
          [$, Q] = (0, d.useState)(!0),
          Y = () => {
            var e;
            let t = 0;
            return (
              (null == document ? void 0 : document.documentElement) &&
              (null == document
                ? void 0
                : null === (e = document.documentElement) || void 0 === e
                ? void 0
                : e.scrollTop)
                ? (t =
                    null == document
                      ? void 0
                      : document.documentElement.scrollTop)
                : (null == document ? void 0 : document.body) &&
                  (t = null == document ? void 0 : document.body.scrollTop),
              t
            );
          },
          K = () => {
            var e = document.getElementById("playChatVideo"),
              t = document.getElementById("playOmniAmt");
            (Z = Y()) <= W
              ? (J(!1), e && (e.currentTime = e.currentTime - 0.03))
              : (J(!0),
                Z < t.offsetTop / 2 && Q(!0),
                Z > e.offsetTop && e && (e.currentTime = e.currentTime + 0.03)),
              setTimeout(function () {
                W = Z;
              }, 0);
          };
        (0, d.useEffect)(
          () => (
            window.addEventListener("scroll", K),
            () => {
              window.removeEventListener("scroll", K);
            }
          ),
          []
        );
        let X = (0, d.useRef)(),
          ee = (0, d.useRef)(),
          et = () => {
            var e = document.getElementById("playOmniAmt");
            z(ee.current) && !0 == G && !0 == $ && (e.play(), Q(!1));
          };
        (0, d.useEffect)(() => {
          et();
        }),
          (0, d.useEffect)(() => {
            var e = document.getElementById("playChatVideo"),
              t = document.getElementById("playOmniAmt");
            0 == o
              ? ((e.src = "lybra_amt.mov"), (t.src = "lybra_omni_amt.mov"))
              : ((e.src = "lybra_amt_dark.mov"),
                (t.src = "lybra_omni_amt_dark.mov"));
          }, [o]);
        let [es, ea] = (0, d.useState)(!1);
        return (
          (0, d.useEffect)(() => {
            -1 !== navigator.userAgent.indexOf("Mac OS X") ? ea(!0) : ea(!1);
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(n.Z, { id: "Home" }),
              (0, a.jsxs)("div", {
                id: es && 1 == o ? "".concat(r().macDark) : null,
                className:
                  0 == o
                    ? "".concat(r().index)
                    : "".concat(r().index, " ").concat(r().index_dark),
                children: [
                  (0, a.jsxs)("div", {
                    className: r().topBanner,
                    children: [
                      (0, a.jsxs)("div", {
                        className: "".concat(r().banner, " ", "section"),
                        children: [
                          (0, a.jsxs)("div", {
                            "data-aos": "fade-right",
                            children: [
                              (0, a.jsx)("h2", {
                                children: "Unleash the Utility of LST in DeFi",
                              }),
                              (0, a.jsxs)("p", {
                                children: [
                                  "The Interest Bearing Stablecoin",
                                  (0, a.jsx)("br", {}),
                                  "Backed by LST",
                                  (0, a.jsx)("br", {}),
                                  (0, a.jsxs)("span", {
                                    className: r().aprSpan,
                                    children: [
                                      "APY ~",
                                      (S * H - 1.5).toFixed(2),
                                      "%",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)("img", {
                            alt: "icon",
                            src:
                              0 == o
                                ? "/images/index/lybra-hero.png"
                                : "/images/index/lybra-hero_dark.png",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "".concat(r().countList, " ", "section"),
                        children: [
                          (0, a.jsxs)("div", {
                            className: r().item,
                            children: [
                              (0, a.jsxs)("div", {
                                className: r().indexTip,
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Total ETH/LST Deposits",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "showTip",
                                    children: (0, a.jsxs)("div", {
                                      className: "qaIcon qaBg index",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src:
                                            0 == o
                                              ? "/images/icon/qa.svg"
                                              : "/images/icon/qa_dark.svg",
                                          alt: "icon",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "tipMain",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "tip-trangle-bottom",
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                "V1: $",
                                                Number(
                                                  (
                                                    Number(T) *
                                                    Number(g.toFixed())
                                                  ).toFixed()
                                                ).toLocaleString(),
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                "V2: $",
                                                Number(
                                                  k.toFixed()
                                                ).toLocaleString(),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("p", {
                                className: r().countup,
                                children: ["$", (0, a.jsx)(p.ZP, { end: I })],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: r().item,
                            style: { background: "#E3D7FC" },
                            children: [
                              (0, a.jsxs)("div", {
                                className: r().indexTip,
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Total eUSD/peUSD in Circulation",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "showTip",
                                    children: (0, a.jsxs)("div", {
                                      className: "qaIcon qaBg index",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src:
                                            0 == o
                                              ? "/images/icon/qa.svg"
                                              : "/images/icon/qa_dark.svg",
                                          alt: "icon",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "tipMain",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "tip-trangle-bottom",
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                "V1: $",
                                                Number(
                                                  v.toFixed()
                                                ).toLocaleString(),
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                "V2: $",
                                                Number(
                                                  w.toFixed(0)
                                                ).toLocaleString(),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("p", {
                                className: r().countup,
                                children: ["$", (0, a.jsx)(p.ZP, { end: E })],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: r().item,
                            style: { background: "#FCE7D2" },
                            children: [
                              (0, a.jsxs)("div", {
                                className: r().indexTip,
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Total Yield Paid",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "showTip",
                                    children: (0, a.jsxs)("div", {
                                      className: "qaIcon qaBg index",
                                      children: [
                                        (0, a.jsx)("img", {
                                          src:
                                            0 == o
                                              ? "/images/icon/qa.svg"
                                              : "/images/icon/qa_dark.svg",
                                          alt: "icon",
                                        }),
                                        (0, a.jsxs)("div", {
                                          className: "tipMain",
                                          children: [
                                            (0, a.jsx)("div", {
                                              className: "tip-trangle-bottom",
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                "V1: $",
                                                Number(f).toLocaleString(),
                                              ],
                                            }),
                                            (0, a.jsxs)("p", {
                                              children: [
                                                "V2: $",
                                                Number(e).toLocaleString(),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("p", {
                                className: r().countup,
                                children: ["$", (0, a.jsx)(p.ZP, { end: q })],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: r().works2,
                    children: (0, a.jsxs)("div", {
                      className: "section",
                      children: [
                        (0, a.jsx)("div", {
                          className: r().item_title,
                          style: { position: "sticky" },
                          children: "How Lybra Works",
                        }),
                        (0, a.jsxs)("div", {
                          className: "".concat(r().worksList, " "),
                          children: [
                            (0, a.jsxs)("div", {
                              className: "".concat(r().worksItem, " "),
                              children: [
                                (0, a.jsxs)("div", {
                                  className: r().step,
                                  children: [
                                    (0, a.jsx)("p", { children: "Step 1" }),
                                    (0, a.jsx)("p", { children: "Deposit" }),
                                    (0, a.jsx)("span", {
                                      children: "Deposit ETH/LST as collateral",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: r().stepHidden,
                                  children: (0, a.jsxs)("div", {
                                    className: r().stepVideo,
                                    children: [
                                      (0, a.jsx)("img", {
                                        className: r().worksImg,
                                        src: "/images/index/works.png",
                                        alt: "works",
                                      }),
                                      (0, a.jsx)("video", {
                                        id: "playChatVideo",
                                        controls: !0,
                                        muted: !0,
                                        ref: X,
                                        poster: "true",
                                        children: (0, a.jsx)("source", {
                                          src: "lybra_amt.mov",
                                          type: "video/mp4",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: r().worksItem,
                              style: { paddingTop: "5%" },
                              children: [
                                (0, a.jsxs)("div", {
                                  className: ""
                                    .concat(r().step, " ")
                                    .concat(r().two),
                                  children: [
                                    (0, a.jsx)("p", { children: "Step 2" }),
                                    (0, a.jsx)("p", {
                                      children: "Mint eUSD/peUSD",
                                    }),
                                    (0, a.jsx)("span", {
                                      children:
                                        "Mint eUSD/peUSD against your collateral",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: r().stepHidden,
                                  style: { opacity: "0" },
                                  children: (0, a.jsx)("div", {
                                    className: r().stepVideo,
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: r().worksItem,
                              style: { paddingTop: "6%" },
                              children: [
                                (0, a.jsxs)("div", {
                                  className: ""
                                    .concat(r().step, " ")
                                    .concat(r().three),
                                  children: [
                                    (0, a.jsx)("p", { children: "Step 3" }),
                                    (0, a.jsx)("p", {
                                      children: "Earn Interest",
                                    }),
                                    (0, a.jsx)("span", {
                                      children:
                                        "Hold eUSD to earn interest (APY ~ 8%)",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: r().stepHidden,
                                  style: { opacity: "0" },
                                  children: (0, a.jsx)("div", {
                                    className: r().stepVideo,
                                  }),
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: ""
                                .concat(r().worksItem, " ")
                                .concat(r().h5worksItem, " "),
                              style: { paddingTop: "12%" },
                              children: [
                                (0, a.jsxs)("div", {
                                  className: ""
                                    .concat(r().step, " ")
                                    .concat(r().four),
                                  children: [
                                    (0, a.jsx)("p", { children: "Step 4" }),
                                    (0, a.jsx)("p", {
                                      children: "Spend peUSD",
                                    }),
                                    (0, a.jsx)("span", {
                                      children:
                                        "Convert eUSD to peUSD and use it in DeFi Protocols, whilst still earning the underlying interest on desposited collateral",
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className: r().stepHidden,
                                  style: { opacity: "0" },
                                  children: (0, a.jsx)("div", {
                                    className: r().stepVideo,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      0 == o
                        ? "".concat(r().stableSafeMode)
                        : ""
                            .concat(r().stableSafeMode, " ")
                            .concat(r().stableSafe_dark),
                    children: [
                      (0, a.jsxs)("div", {
                        className: "".concat(r().stableSafe, " ", "section"),
                        children: [
                          (0, a.jsx)("p", {
                            className: "".concat(r().item_title, " ", "pcNone"),
                            children: "Secure & Stable",
                          }),
                          (0, a.jsxs)("div", {
                            className: "".concat(
                              r().zoom6,
                              " ",
                              "justify_align_center"
                            ),
                            children: [
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: r().stable01,
                                src: "/images/index/stable.png",
                              }),
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: r().stable02,
                                src: "/images/index/stable.svg",
                                "data-aos": "zoom-out",
                                "data-aos-offset": "200",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: r().info,
                            "data-aos": "fade-left",
                            "data-aos-once": "true",
                            children: [
                              (0, a.jsx)("p", {
                                className: r().item_title,
                                children: "Secure & Stable",
                              }),
                              (0, a.jsx)("p", {
                                className: r().desc,
                                children:
                                  "The stability of eUSD is maintained through a combination of overcollateralization, liquidation mechanisms, arbitrage opportunities and the eUSD premium suppression mechanism. These factors work together and in combination to ensure that the value of eUSD remains as close to a peg of 1 USD.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "".concat(r().stableSafe, " ", "section"),
                        children: [
                          (0, a.jsx)("p", {
                            className: "".concat(r().item_title, " ", "pcNone"),
                            children: "Interest Bearing",
                          }),
                          (0, a.jsxs)("div", {
                            className: r().info,
                            "data-aos": "fade-right",
                            "data-aos-once": "true",
                            children: [
                              (0, a.jsx)("p", {
                                className: r().item_title,
                                children: "Interest Bearing",
                              }),
                              (0, a.jsx)("p", {
                                className: r().desc2,
                                children:
                                  "Holders of eUSD can anticipate earning an approximate 8% base annual percentage yield (APY). Borrowers of eUSD who convert their holdings into peUSD, will always have the flexibility to convert peUSD back to eUSD at any time, enabling them to accumulate the interest earned on their deposited collateral.",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: r().interestBearing,
                            children: [
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: r().interest02,
                                src: "/images/index/interest02.png",
                                "data-aos": "fade-down",
                                "data-aos-offset": "200",
                              }),
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: r().interest01,
                                src: "/images/index/interest01.png",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "".concat(r().stableSafe, " ", "section"),
                        children: [
                          (0, a.jsx)("p", {
                            className: "".concat(r().item_title, " ", "pcNone"),
                            children: "0 Minting Costs",
                          }),
                          (0, a.jsxs)("div", {
                            className: "".concat(
                              r().zoom8,
                              " ",
                              "justify_align_center"
                            ),
                            children: [
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: r().cost01,
                                src: "/images/index/cost.png",
                              }),
                              (0, a.jsx)("img", {
                                alt: "icon",
                                className: r().cost02,
                                src: "/images/index/cost.svg",
                                "data-aos": "zoom-out",
                                "data-aos-offset": "200",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: r().info,
                            "data-aos": "fade-left",
                            "data-aos-once": "true",
                            children: [
                              (0, a.jsx)("p", {
                                className: r().item_title,
                                children: "0 Minting Costs",
                              }),
                              (0, a.jsx)("p", {
                                className: r().desc,
                                children:
                                  "Lybra Finance distinguishes itself from other LST backed stablecoin protocols by providing users with the advantage of zero minting on eUSD. This unique feature enables users to utilize their ETH holdings and borrow eUSD without incurring any extra expenses. Minters of peUSD with non-rebasing LST collateral will be subject to a 1.5% repayment fee on the total debt borrowed. ",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "".concat(
                          r().stableSafe,
                          " ",
                          "section",
                          " ",
                          "paddingBottom180"
                        ),
                        children: [
                          (0, a.jsx)("p", {
                            className: "".concat(r().item_title, " ", "pcNone"),
                            children: "LayerZero Omnichain Integration",
                          }),
                          (0, a.jsxs)("div", {
                            className: r().info,
                            "data-aos": "fade-right",
                            "data-aos-once": "true",
                            children: [
                              (0, a.jsx)("p", {
                                className: r().item_title,
                                children: "LayerZero Omnichain Integration",
                              }),
                              (0, a.jsx)("p", {
                                className: r().desc2,
                                dangerouslySetInnerHTML: {
                                  __html:
                                    "Launching Omnichain made easy with LayerZero. The implementation will be powered by LayerZero's Omnichain Fungible Token (OFT) Standard, enabling the creation of peUSD, an omnichain version of eUSD. This approach eliminates the requirement for an eUSD Liquidity Pool on each supported chain, as well as the complexities of bridging and wrapping procedures and the associated transaction fees. Consequently, this cost-effective and technically efficient implementation allows Lybra to seamlessly integrate free omnichain functionality into its interest-bearing stablecoin offering.",
                                },
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "".concat(
                              r().playOmniAmt,
                              " ",
                              "justify_align_center"
                            ),
                            children: [
                              (0, a.jsx)("img", {
                                src:
                                  0 == o
                                    ? "/images/index/LayerZero.jpg"
                                    : "/images/index/LayerZero_dark.jpg",
                                alt: "layerZero",
                              }),
                              (0, a.jsx)("video", {
                                id: "playOmniAmt",
                                controls: !0,
                                muted: !0,
                                ref: ee,
                                poster: "true",
                                children: (0, a.jsx)("source", {
                                  src: "lybra_omni_amt.mov",
                                  type: "video/mp4",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "".concat(r().dao, " "),
                    children: (0, a.jsxs)("div", {
                      className: "section ".concat(r().section),
                      children: [
                        (0, a.jsx)("p", {
                          className: r().item_title,
                          "data-aos": "fade-up",
                          children: "Lybra DAO",
                        }),
                        (0, a.jsxs)("div", {
                          className: "".concat(r().daoInfo),
                          children: [
                            (0, a.jsx)("div", {
                              "data-aos": "fade-right",
                              className: "justify_align_center",
                              children: (0, a.jsx)("img", {
                                alt: "icon",
                                src: "/images/index/dao.png",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: r().info,
                              "data-aos": "fade-left",
                              "data-aos-once": "true",
                              children: [
                                (0, a.jsx)("p", {
                                  className: r().title,
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      "Lybra DAO serves as the backbone of Lybra Finance's decision-making process",
                                  },
                                }),
                                (0, a.jsx)("p", {
                                  className: r().desc,
                                  dangerouslySetInnerHTML: {
                                    __html:
                                      "The governance of the Lybra DAO will be entrusted to LBR token holders, granting them the authority to shape the project's trajectory, propose and participate in decision-making processes, and collectively oversee the protocol. This community-led approach serves to uphold the decentralized essence of the Lybra Finance project and guarantees that its evolution aligns with the welfare and desires of its user base.",
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: r().faqbg,
                    children: (0, a.jsxs)("div", {
                      className: "".concat(r().faq, " ", "section"),
                      children: [
                        (0, a.jsx)("p", {
                          className: r().item_title,
                          "data-aos": "fade-up",
                          "data-aos-once": "true",
                          children: "Frequently Asked Questions",
                        }),
                        (0, a.jsx)("div", {
                          className: r().list,
                          "data-aos": "fade-up",
                          "data-aos-once": "true",
                          children: P.map((e, t) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className:
                                  !0 == e.show
                                    ? ""
                                        .concat(r().heightAuto, " ")
                                        .concat(r().item)
                                    : "".concat(r().item),
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "".concat(
                                      r().info,
                                      " ",
                                      "justify_space_between"
                                    ),
                                    onClick: M.bind(this, e, t),
                                    children: [
                                      (0, a.jsx)("h3", {
                                        dangerouslySetInnerHTML: {
                                          __html: e.title,
                                        },
                                      }),
                                      (0, a.jsx)("img", {
                                        alt: "icon",
                                        src:
                                          0 == o
                                            ? "/images/icon/arr.svg"
                                            : "/images/icon/arr_dark.svg",
                                        className: e.show
                                          ? r().show
                                          : r().hidden,
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      !0 == e.show
                                        ? ""
                                            .concat(r().heightAuto, " ")
                                            .concat(r().vhtml)
                                        : "".concat(r().vhtml),
                                    dangerouslySetInnerHTML: { __html: e.text },
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(i.Z, { id: "Home" }),
            ],
          })
        );
      }
      s(70794);
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
    52004: function (e) {
      e.exports = {
        index: "index_index__5hyIO",
        topBanner: "index_topBanner__fuLKI",
        banner: "index_banner__X3HgO",
        aprSpan: "index_aprSpan__nVgD0",
        countList: "index_countList__4lWJR",
        item: "index_item__tGt2O",
        indexTip: "index_indexTip__8l6ER",
        countup: "index_countup__OHpdK",
        item_title: "index_item_title__QkpG1",
        works: "index_works__rLaDV",
        worksSection: "index_worksSection__71Tbm",
        stepList: "index_stepList__tL6DG",
        stepItem: "index_stepItem__7pz_O",
        two: "index_two__G9VTe",
        three: "index_three__k4dQE",
        four: "index_four__JTEfA",
        setpAnimation: "index_setpAnimation__gjRmm",
        works2: "index_works2__roqCj",
        worksList: "index_worksList__6PjMl",
        worksItem: "index_worksItem__ZqRCJ",
        step: "index_step__FubA5",
        stepHidden: "index_stepHidden__DUKIX",
        stepVideo: "index_stepVideo__md_iv",
        worksImg: "index_worksImg__sTlOL",
        stableSafe: "index_stableSafe__tMczg",
        desc: "index_desc__1t_Z5",
        desc2: "index_desc2__V4rzP",
        stable01: "index_stable01__pzy3m",
        stable02: "index_stable02__tC3zx",
        interestBearing: "index_interestBearing__KO69j",
        interest01: "index_interest01__Jn8Gd",
        interest02: "index_interest02__d8u52",
        cost01: "index_cost01___z3qx",
        cost02: "index_cost02__aKfmt",
        omnichain01: "index_omnichain01__IJQSG",
        omnichain02: "index_omnichain02__FWkBJ",
        playOmniAmt: "index_playOmniAmt__O7RSb",
        dao: "index_dao__SQDme",
        section: "index_section__kvtjj",
        daoInfo: "index_daoInfo__Ibj1o",
        title: "index_title___brqs",
        ecosystem: "index_ecosystem__G66YP",
        partnersList: "index_partnersList__3T1cF",
        partners: "index_partners__2tGqN",
        faqbg: "index_faqbg__Ibxlv",
        faq: "index_faq__f52aG",
        list: "index_list__E0czJ",
        heightAuto: "index_heightAuto__0xfOc",
        show: "index_show___75Qi",
        hidden: "index_hidden__ww_5A",
        vhtml: "index_vhtml__0ildo",
        info: "index_info__iWBU1",
        index_dark: "index_index_dark__G2Adv",
        stableSafe_dark: "index_stableSafe_dark___ewKq",
        macDark: "index_macDark__Lwlk5",
        h5worksItem: "index_h5worksItem__WoG20",
        playChatVideo: "index_playChatVideo__koVyR",
        zoom6: "index_zoom6__0OrTQ",
        zoom8: "index_zoom8__3Jp7D",
      };
    },
  },
  function (e) {
    e.O(0, [8543, 8435, 8764, 6154, 7857, 51, 9774, 2888, 179], function () {
      return e((e.s = 75557));
    }),
      (_N_E = e.O());
  },
]);
