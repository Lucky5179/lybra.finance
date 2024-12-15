(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [51],
  {
    30051: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return E;
        },
      });
      var a = t(85893),
        s = t(9008),
        i = t.n(s),
        r = t(83136),
        o = t.n(r),
        c = t(41664),
        l = t.n(c),
        d = t(89159),
        p = t(67294),
        u = t(17883),
        h = t(69077),
        m = t(86159),
        g = t.n(m),
        _ = t(2711),
        x = t.n(_);
      t(21496);
      var y = t(44111),
        j = t.n(y),
        v = t(37918),
        b = t.n(v);
      function f(e) {
        let { id: n, copyTip: t } = e,
          {
            address: s,
            mode: i,
            setAddress: r,
            yearList: o,
            showLoading: c,
            readOnlyMode: l,
            setReadOnlyMode: d,
            setOldAddress: h,
            tramsactionUrl: m,
            userChain: _,
            mainnetNetId: y,
          } = (0, p.useContext)(u.S),
          v = (e) => {
            let n;
            if (e) {
              let o = new Date(),
                c = o - 1e3 * e;
              if (c < 0) return;
              var t = c / 6e4,
                a = c / 36e5,
                s = c / 864e5,
                i = c / 2592e6;
              if (i >= 1 && i < 4) n = parseInt(i) + "mo";
              else if (s >= 1 && s < 31) n = parseInt(s) + "d";
              else if (a >= 1 && a < 24) n = parseInt(a) + "h";
              else if (t >= 1 && t < 60) n = parseInt(t) + "m";
              else if (c >= 0 && c <= 6e4) n = "just";
              else {
                var r = new Date();
                r.setTime(e),
                  (n =
                    r.getFullYear() +
                    "-" +
                    (r.getMonth() + 1 < 10
                      ? "0" + (r.getMonth() + 1)
                      : r.getMonth() + 1) +
                    "-" +
                    (10 > r.getDate() ? "0" + r.getDate() : r.getDate()));
              }
              return n;
            }
          },
          [f, N] = (0, p.useState)(""),
          S = async (e) => {
            N(e.target.value);
          },
          w = async () => {
            new (b())().utils.isAddress(f) && (r(f), d(!0));
          };
        return (
          (0, p.useEffect)(() => {
            x().init({ duration: 800, delay: 0, easing: "ease-in-out" });
          }),
          (0, a.jsxs)("div", {
            className:
              1 == i && ("dashboard" == n || "Earn" == n)
                ? "".concat(g().transaction, " ").concat(g().dark)
                : "".concat(g().transaction, " "),
            "data-aos": "fade-left",
            children: [
              (0, a.jsxs)("div", {
                className: "justify_space_between",
                children: [
                  (0, a.jsx)("p", {
                    className: g().title,
                    children: "Account",
                  }),
                  (0, a.jsx)("div", {
                    className: g().close,
                    children: (0, a.jsx)("img", {
                      src: "/images/icon/close.svg",
                      onClick: () => e.showAccount(),
                      alt: "icon",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: g().account,
                children: [
                  (0, a.jsxs)("div", {
                    className: "justify_align_center",
                    children: [
                      (0, a.jsx)(j(), {
                        diameter: 100,
                        seed: s,
                        style: { width: "40px" },
                      }),
                      (0, a.jsx)("p", {
                        children: s ? s.slice(0, 6) + ".." + s.slice(-4) : "",
                      }),
                      (0, a.jsxs)("div", {
                        className: g().tips,
                        children: [
                          (0, a.jsx)("div", {
                            className: g().tipIcon,
                            onClick: () => e.changeCopy(),
                            children: (0, a.jsx)("img", {
                              src: "/images/transaction/copy.svg",
                              style: { width: "18px !important" },
                              alt: "icon",
                            }),
                          }),
                          (0, a.jsx)("span", { children: t }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "justify_align_center",
                    children: [
                      (0, a.jsxs)("div", {
                        className: g().tips,
                        children: [
                          (0, a.jsx)("div", {
                            className: g().tipIcon,
                            children: (0, a.jsx)("a", {
                              href:
                                _ == y
                                  ? "https://etherscan.io/address/" + s
                                  : "https://arbiscan.io/address/" + s,
                              target: "_blank",
                              rel: "nofollow noopener noreferrer",
                              children: (0, a.jsx)("img", {
                                alt: "icon",
                                src: "/images/transaction/etherscan.svg",
                              }),
                            }),
                          }),
                          (0, a.jsx)("span", {
                            style: { left: "-48px" },
                            children: "View on Etherscan",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: g().tips,
                        onClick: () => e.disconnect(),
                        children: [
                          (0, a.jsx)("div", {
                            className: g().tipIcon,
                            children: (0, a.jsx)("img", {
                              src: "/images/transaction/disconnect.svg",
                              alt: "icon",
                            }),
                          }),
                          (0, a.jsx)("span", {
                            style: { left: "-26px" },
                            children: "Disconnect",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l
                ? (0, a.jsxs)("div", {
                    className: g().readonly,
                    children: [
                      (0, a.jsx)("img", {
                        src: "/images/transaction/waring.svg",
                        alt: "icon",
                      }),
                      (0, a.jsx)("span", { children: "Read-only mode." }),
                    ],
                  })
                : null,
              (0, a.jsxs)("div", {
                className: g().recent,
                children: ["Recent Activity (", o.length, ")"],
              }),
              (0, a.jsx)("div", {
                className: g().transactionList,
                children: c
                  ? (0, a.jsx)("div", {
                      className: g().showLoading,
                      children: (0, a.jsx)("img", {
                        alt: "icon",
                        src: "/images/transaction/load.svg",
                        className: g().loadings,
                      }),
                    })
                  : (0, a.jsx)(a.Fragment, {
                      children: o.map((e, n) =>
                        (0, a.jsx)(
                          "a",
                          {
                            href: m + e.transactionHash,
                            target: "_blank",
                            rel: "nofollow noopener noreferrer",
                            children: (0, a.jsxs)("div", {
                              className: g().item,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: g().value,
                                  children: [
                                    "Convert to Arbitrum" == e.event ||
                                    "Converted from Arbitrum" == e.event ||
                                    "Convert to Ethereum" == e.event ||
                                    "Converted from Ethereum" == e.event
                                      ? (0, a.jsx)("img", {
                                          alt: "icon",
                                          src: "/images/transaction/chain.svg",
                                        })
                                      : (0, a.jsx)("img", {
                                          alt: "icon",
                                          src:
                                            "/images/transaction/" +
                                            e.event +
                                            ".svg",
                                        }),
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("p", { children: e.event }),
                                        (0, a.jsxs)("span", {
                                          children: [
                                            Number(
                                              e.amount.toFixed(4)
                                            ).toLocaleString(),
                                            " ",
                                            e.coin,
                                            " ",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("span", { children: v(e.date) }),
                              ],
                            }),
                          },
                          n
                        )
                      ),
                    }),
              }),
              (0, a.jsxs)("div", {
                className: g().trackWallet,
                children: [
                  (0, a.jsx)("p", {
                    children: "Track wallet balance in read-only mode",
                  }),
                  (0, a.jsx)("input", {
                    type: "text",
                    placeholder: "Enter Ethereum address",
                    onChange: S.bind(this),
                    value: f,
                  }),
                  (0, a.jsx)("div", {
                    className:
                      void 0 !== f && "" !== f
                        ? "button blue"
                        : "button disable",
                    style: { height: "45px" },
                    onClick: w.bind(this),
                    children: "Track wallet",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var N = t(20640),
        S = t.n(N),
        w = t(11163),
        T = t(97080),
        k = [
          {
            inputs: [
              { internalType: "address", name: "_fund", type: "address" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "bonusMigrationPeriod",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "lybraFund",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "migrate",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "user", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "oldLBR",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "owner",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "uint256", name: "time", type: "uint256" },
            ],
            name: "setBonusMigrationPeriod",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "_fund", type: "address" },
            ],
            name: "setLybraFund",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "from", type: "address" },
              { internalType: "address", name: "to", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "newOwner", type: "address" },
            ],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        I = t(70794);
      function M(e) {
        let n, t, s, i;
        let {
            setTipMessage: r,
            LBR: o,
            oldLBR: c,
            eusdAbi: l,
            TokenHelper: d,
          } = (0, p.useContext)(u.S),
          { lbrAllowance: m, lbrBalanceOf: g } = e,
          [_, x] = (0, p.useState)(!1),
          y = Number((0, I.Z)(m).comparedTo(g).toString());
        -1 == y
          ? ((n = c),
            (t = "approve"),
            (s = [
              d,
              "115792089237316195423570985008687907853269984665640564039457",
            ]),
            (i = l))
          : ((n = d), (t = "migrate"), (s = [new I.Z(g).toFixed()]), (i = k));
        let {
          isLoading: j,
          write: v,
          data: b,
        } = (0, h.GG)({
          mode: "recklesslyUnprepared",
          address: n,
          abi: i,
          functionName: t,
          args: s,
          onSuccess(e) {
            x(!0);
          },
          onError(n) {
            x(!1), e.updateIsLoading(!1);
          },
        });
        (0, h.BX)({
          hash: null == b ? void 0 : b.hash,
          onSuccess(n) {
            x(!1),
              e.updateIsLoading(!1),
              e.updateIsSuccess(!0),
              r({
                title: -1 == y ? "Approve To Migrate" : "Migrate",
                type: "success",
              }),
              setTimeout(() => {
                e.updateIsSuccess(!1);
              }, 5e3);
            let t = localStorage.getItem("isnewLBRAsset"),
              a = localStorage.getItem("newLBRAddress")
                ? localStorage.getItem("newLBRAddress")
                : [];
            (t && -1 != a.indexOf(address)) || N();
          },
        });
        let f = async () => {
            r({
              title: -1 == y ? "Approve To Migrate" : "Migrate",
              type: "loading",
            }),
              e.updateIsLoading(!0),
              v();
          },
          N = async () => {
            ethereum
              .request({
                method: "wallet_watchAsset",
                params: {
                  type: "ERC20",
                  options: { address: o, symbol: "LBR", decimals: 18 },
                },
              })
              .then((e) => {
                if (e) {
                  let e = localStorage.getItem("newLBRAddress");
                  if ((localStorage.setItem("isnewLBRAsset", !0), e))
                    (e = JSON.parse(e)).push(address),
                      localStorage.setItem("newLBRAddress", JSON.stringify(e));
                  else {
                    let e = [];
                    e.push(address),
                      localStorage.setItem("newLBRAddress", JSON.stringify(e));
                  }
                } else throw Error("Something went wrong.");
              })
              .catch(console.error);
          },
          S = null,
          [w, T] = (0, p.useState)({
            day: "00",
            hour: "00",
            minute: "00",
            second: "00",
          }),
          M = () => {
            let e = new Date(),
              n = parseInt(e.getTime() / 1e3),
              t = 170541e4 - n;
            if (t <= -1) clearTimeout(S);
            else {
              let e = Math.floor(t / 60 / 60 / 24),
                n = Math.floor((t / 60 / 60) % 24),
                a = Math.floor((t / 60) % 60),
                s = Math.floor(t % 60);
              e < 10 && (e = "0" + e),
                n < 10 && (n = "0" + n),
                a < 10 && (a = "0" + a),
                s < 10 && (s = "0" + s),
                T({ day: e, hour: n, minute: a, second: s }),
                (S = setTimeout(() => {
                  M();
                }, 1e3));
            }
          };
        return (
          (0, p.useEffect)(() => {
            M();
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("div", {
              className: j || _ ? "button faucet disabled " : "button faucet ",
              onClick: () => (j ? null : f()),
              children:
                j || _
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)("img", {
                          className: "loading",
                          alt: "icon",
                          src: "/images/icon/loading.svg",
                        }),
                        -1 == y ? "Approve To Migrate" : "Migrate",
                        (0, a.jsx)("div", {
                          className: "showTip",
                          children: (0, a.jsxs)("div", {
                            className: "qaIcon",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/images/icon/qa_dark.svg",
                                alt: "qa",
                              }),
                              (0, a.jsxs)("div", {
                                className: "tipMain",
                                style: { top: "32px", height: "80px" },
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "tip-trangle-top",
                                  }),
                                  "LBR Migration will completely stop in ",
                                  (0, a.jsx)("br", {}),
                                  (0, a.jsx)("span", {
                                    className: "colorBlue",
                                    children:
                                      w.day +
                                      "d " +
                                      w.hour +
                                      "h " +
                                      w.minute +
                                      "m " +
                                      w.second +
                                      "s",
                                  }),
                                  ".",
                                  (0, a.jsx)("br", {}),
                                  "Please migrate your V1 LBR to V2 LBR as soon as possible.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        -1 == y ? "Approve To Migrate" : "Migrate",
                        (0, a.jsx)("div", {
                          className: "showTip",
                          children: (0, a.jsxs)("div", {
                            className: "qaIcon",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/images/icon/qa_dark.svg",
                                alt: "qa",
                              }),
                              (0, a.jsxs)("div", {
                                className: "tipMain",
                                style: { top: "32px", height: "80px" },
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "tip-trangle-top",
                                  }),
                                  "LBR Migration will completely stop in ",
                                  (0, a.jsx)("br", {}),
                                  (0, a.jsx)("span", {
                                    className: "colorBlue",
                                    children:
                                      w.day +
                                      "d " +
                                      w.hour +
                                      "h " +
                                      w.minute +
                                      "m " +
                                      w.second +
                                      "s",
                                  }),
                                  ".",
                                  (0, a.jsx)("br", {}),
                                  "Please migrate your V1 LBR to V2 LBR as soon as possible.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
            }),
          })
        );
      }
      var C = t(58507),
        L = t.n(C);
      function D(e) {
        let {
            mode: n,
            setFrom: t,
            setFormNetwork: s,
            setTo: i,
            setToNetwork: r,
            setMenuIndex: o,
            setIsShowEminderProp: c,
          } = (0, p.useContext)(u.S),
          { peUSDNum: l, eusdNum: d } = e,
          h = (0, w.useRouter)(),
          m = (e) => {
            e.stopPropagation();
          },
          g = (n) => {
            e.changeShowEminderProp(n), c(!1);
          },
          _ = () => {
            t("peUSD"),
              s("ETH"),
              i("eUSD"),
              r("ETH"),
              o(4),
              g(!1),
              c(!1),
              h.push("/dashboard");
          };
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className:
              0 == n
                ? "".concat(L().prop)
                : ""
                    .concat(L().prop, " ")
                    .concat(L().prop_dark, " ", "globals_dark"),
            children: (0, a.jsxs)("div", {
              className: L().propMain,
              onClick: m.bind(this),
              children: [
                (0, a.jsxs)("div", {
                  className: "justify_space_between",
                  style: {
                    borderBottom: "1px solid #e4e1e1",
                    padding: "10px 20px",
                  },
                  children: [
                    (0, a.jsx)("p", {
                      className: L().title,
                      children: "REMINDER",
                    }),
                    (0, a.jsx)("div", {
                      className: L().closeIcon,
                      onClick: () => g(!1),
                      children: (0, a.jsx)("img", {
                        src: "/images/icon/close.svg",
                        alt: "close",
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: L().autoMain,
                  children: [
                    (0, a.jsxs)("div", {
                      className: L().propCenter,
                      children: [
                        (0, a.jsx)("p", {
                          style: { marginBottom: "10px" },
                          dangerouslySetInnerHTML: {
                            __html:
                              "You're still eligible to convert <span>" +
                              Number(l.toFixed(2)).toLocaleString() +
                              " peUSD</span> to <span>" +
                              Number(d.toFixed(2)).toLocaleString() +
                              " eUSD</span>. Here are the steps:",
                          },
                        }),
                        (0, a.jsxs)("p", {
                          children: [
                            "1. Convert peUSD (ARB) to peUSD (ETH).",
                            (0, a.jsx)("br", {}),
                            "2. Convert peUSD (ETH) to eUSD (ETH).",
                            (0, a.jsx)("br", {}),
                            "3. Sell eUSD for arbitrage purposes or pay off your debt.",
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: L().button,
                      children: (0, a.jsx)("div", {
                        className: "button mini",
                        onClick: () => _(),
                        children: "DO IT NOW",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function E(e) {
        let { switchNetwork: n } = (0, h.g0)(),
          { id: t } = e,
          {
            address: s,
            setAddress: r,
            account: c,
            setMenuIndex: m,
            setCoinType: g,
            menuIndex: _,
            mainnetNetId: x,
            setAsCoin: y,
            setUseETHValut: j,
            stETHVault: v,
            mode: b,
            setMode: N,
            oldLBR: k,
            TokenHelper: C,
            eusdAbi: L,
            showTransaction: E,
            setShowTransaction: A,
            PeUSDMainnet: B,
            peusdAbi: F,
            eUSD: R,
            isShowEminderProp: O,
          } = (0, p.useContext)(u.S),
          { disconnect: U } = (0, h.qL)(),
          H = (0, w.useRouter)(),
          q = async () => {
            U(), r(c.address);
          },
          [V, Z] = (0, p.useState)(!1),
          P = async () => {
            Z(!V);
          },
          [W, G] = (0, p.useState)("Copy"),
          z = async () => {
            S()(s),
              G("Copied!"),
              setTimeout(() => {
                G("Copy");
              }, 1e3);
          },
          K = async () => {
            A(!1);
          };
        (0, p.useEffect)(() => {
          void 0 != s && 4 !== _ && 6 !== _ && "dashboard" == t && n && n(x);
        }, [s, _, t, n]),
          (0, p.useEffect)(() => {
            void 0 != s && "Otc" == t && n && n(x);
          }, [t]);
        let J = (e) => {
            m(e), Z(!1), e > 0 && g("stETH");
          },
          [Y, Q] = (0, p.useState)(!1),
          [X, $] = (0, p.useState)(!1);
        (0, p.useEffect)(() => {
          "/dashboard" !== H.pathname &&
            (m(9),
            localStorage.setItem("menuIndex", 9),
            j(v),
            g("ETH"),
            y("stETH"));
        }, [H]);
        let [ee, en] = (0, p.useState)(!1),
          [et, ea] = (0, p.useState)(!1),
          es = async (e) => {
            en(e);
          },
          ei = async (e) => {
            ea(e);
          },
          [er, eo] = (0, p.useState)(0);
        (0, h.do)({
          address: k,
          abi: L,
          functionName: "balanceOf",
          args: [s],
          watch: !0,
          chainId: x,
          onSuccess(e) {
            eo(new I.Z(e._hex).toFixed());
          },
        });
        let [ec, el] = (0, p.useState)(0);
        (0, h.do)({
          address: k,
          abi: L,
          functionName: "allowance",
          args: [s, C],
          watch: !0,
          chainId: x,
          onSuccess(e) {
            el(new I.Z(e._hex).toFixed());
          },
        });
        let [ed, ep] = (0, p.useState)(!1),
          eu = parseInt(new Date().getTime() / 1e3);
        (0, p.useEffect)(() => {
          1 == Number((0, I.Z)(er).comparedTo(0).toString()) &&
          s &&
          eu > 1697461200 &&
          eu < 170541e4
            ? ep(!0)
            : ep(!1);
        }, [er, s, eu, 1697461200, ec]);
        let [eh, em] = (0, p.useState)(0),
          [eg, e_] = (0, p.useState)(0);
        (0, h.do)({
          address: B,
          abi: F,
          functionName: "userConvertInfo",
          args: [s],
          watch: !0,
          onSuccess(e) {
            em(new I.Z(e[1]._hex).div(new I.Z(1e18))),
              e_(new I.Z(e[0]._hex).toFixed(0));
          },
        });
        let [ex, ey] = (0, p.useState)(0);
        (0, h.do)({
          address: R,
          abi: L,
          functionName: "getMintedEUSDByShares",
          args: [eg],
          watch: !0,
          chainId: x,
          onSuccess(e) {
            ey(new I.Z(e._hex).div(new I.Z(1e18)));
          },
        });
        let [ej, ev] = (0, p.useState)(!1),
          [eb, ef] = (0, p.useState)(!1),
          eN = async (e) => {
            ef(e);
          };
        return (
          (0, p.useEffect)(() => {
            Number(ex.toFixed()) > 10 && s && O && ef(!0);
          }, [ex, s]),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(i(), {
                children: [
                  (0, a.jsx)("title", {
                    children: "Lybra | Unleash the Utility of LST in DeFi.",
                  }),
                  (0, a.jsx)("meta", { name: "description", content: "lybra" }),
                  (0, a.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                  }),
                  (0, a.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  1 == b && "dashboard" == t
                    ? ""
                        .concat(o().header, " ")
                        .concat(o().header_dark, " ")
                        .concat(o().header_dash_dark, " ", "globals_dark", " ")
                    : 1 == b
                    ? ""
                        .concat(o().header, " ")
                        .concat(o().header_dark, " ", "globals_dark")
                    : "".concat(o().header),
                style:
                  "Home" == t || "Eusd" == t || "peUSD" == t
                    ? {
                        backgroundColor: "rgba(255, 255, 255, 0.88)",
                        backdropFilter: "blur(50px",
                      }
                    : null,
                children: [
                  (0, a.jsxs)("div", {
                    className: o().main,
                    children: [
                      (0, a.jsxs)("div", {
                        className: "".concat(
                          o().bewteen,
                          " ",
                          "justify_align_center"
                        ),
                        children: [
                          (0, a.jsxs)(l(), {
                            href: "/",
                            className: "".concat(
                              o().logo,
                              " ",
                              "flex_align_center"
                            ),
                            children: [
                              (0, a.jsx)("img", {
                                src: "/images/logo.png",
                                alt: "icon",
                              }),
                              "Lybra Finance",
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "".concat(o().menu, " ", "h5None"),
                            children: [
                              (0, a.jsx)(l(), {
                                href: "/eUSD",
                                children: (0, a.jsx)("span", {
                                  className: "Eusd" == t ? o().active : "",
                                  children: "eUSD",
                                }),
                              }),
                              (0, a.jsx)(l(), {
                                href: "/peUSD",
                                children: (0, a.jsx)("span", {
                                  className: "peUSD" == t ? o().active : "",
                                  children: "peUSD",
                                }),
                              }),
 

                              parseInt(new Date().getTime() / 1e3) >= 1711627200
                                ? (0, a.jsx)(l(), {
                                    href: "/otc",
                                    children: (0, a.jsx)("span", {
                                      className: "Otc" == t ? o().active : "",
                                      children: "OTC",
                                    }),
                                  })
                                : null,
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "".concat(o().icon),
                        children: [
                          (0, a.jsx)("div", {
                            className: ed
                              ? ""
                                  .concat(o().migrate, " ")
                                  .concat(o().migrateShow)
                              : ""
                                  .concat(o().migrate, " ")
                                  .concat(o().migrateNone),
                            children: (0, a.jsx)(M, {
                              updateIsLoading: es,
                              updateIsSuccess: ei,
                              lbrAllowance: ec,
                              lbrBalanceOf: er,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              0 == b
                                ? "".concat(o().mode, " ").concat(o().sun)
                                : "".concat(o().mode, " ").concat(o().moon),
                            onClick: () => N(0 == b ? 1 : 0),
                            children: (0, a.jsx)("img", {
                              alt: "icon",
                              src:
                                0 == b
                                  ? "/images/icon/sun.svg"
                                  : "/images/icon/moon.svg",
                            }),
                          }),
                          "/dashboard" == H.pathname || "/otc" == H.pathname
                            ? (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(d.NL.Custom, {
                                    className: "h5None",
                                    children: (e) => {
                                      let {
                                          account: n,
                                          chain: i,
                                          openAccountModal: r,
                                          openConnectModal: c,
                                          openChainModal: l,
                                          authenticationStatus: d,
                                          mounted: p,
                                        } = e,
                                        u = p && "loading" !== d;
                                      return (0, a.jsx)("div", {
                                        ...(!u && {
                                          "aria-hidden": !0,
                                          style: {
                                            opacity: 0,
                                            pointerEvents: "none",
                                            userSelect: "none",
                                          },
                                        }),
                                        children:
                                          u &&
                                          n &&
                                          i &&
                                          (!d || "authenticated" === d)
                                            ? i.unsupported
                                              ? (0, a.jsx)("div", {
                                                  className:
                                                    "button wrong ".concat(
                                                      o().connectButton
                                                    ),
                                                  onClick: l,
                                                  children: "Switch Network",
                                                })
                                              : (0, a.jsxs)("div", {
                                                  style: {
                                                    display: "flex",
                                                    gap: 12,
                                                  },
                                                  children: [
                                                    s
                                                      ? (0, a.jsx)("div", {
                                                          className:
                                                            o().accountName,
                                                          onClick: () => A(!E),
                                                          children:
                                                            s.slice(0, 4) +
                                                            ".." +
                                                            s.slice(-4),
                                                        })
                                                      : null,
                                                    E
                                                      ? (0, a.jsxs)(
                                                          a.Fragment,
                                                          {
                                                            children: [
                                                              (0, a.jsx)(
                                                                "div",
                                                                {
                                                                  className:
                                                                    o()
                                                                      .disconnectMain,
                                                                  onClick: () =>
                                                                    A(!1),
                                                                }
                                                              ),
                                                              (0, a.jsx)(f, {
                                                                id: t,
                                                                copyTip: W,
                                                                changeCopy: z,
                                                                disconnect: q,
                                                                showAccount: K,
                                                              }),
                                                            ],
                                                          }
                                                        )
                                                      : null,
                                                  ],
                                                })
                                            : (0, a.jsx)("div", {
                                                className:
                                                  "button blue ".concat(
                                                    o().connectButton
                                                  ),
                                                onClick: c,
                                                children: "Connect Wallet",
                                              }),
                                      });
                                    },
                                  }),
                                  "Otc" == t
                                    ? (0, a.jsx)("div", {
                                        className: "LaunchApp h5None",
                                        children: (0, a.jsx)(l(), {
                                          href: "/dashboard",
                                          children: "Launch App",
                                        }),
                                      })
                                    : null,
                                ],
                              })
                            : (0, a.jsx)("div", {
                                className: "LaunchApp h5None",
                                children: (0, a.jsx)(l(), {
                                  href: "/dashboard",
                                  children: "Launch App",
                                }),
                              }),
                          (0, a.jsx)("div", {
                            className: "pcNone",
                            onClick: P,
                            children: V
                              ? (0, a.jsx)("img", {
                                  className: V
                                    ? ""
                                        .concat(o().menuIcon, " ")
                                        .concat(o().active)
                                    : "".concat(o().menuIcon),
                                  src: "/images/icon/menuClose.svg",
                                  alt: "icon",
                                })
                              : "dashboard" == t
                              ? (0, a.jsx)("img", {
                                  className: V
                                    ? ""
                                        .concat(o().menuIcon, " ")
                                        .concat(o().active)
                                    : "".concat(o().menuIcon),
                                  src: "/images/icon/menuApp.svg",
                                  alt: "icon",
                                })
                              : (0, a.jsx)("img", {
                                  className: V
                                    ? ""
                                        .concat(o().menuIcon, " ")
                                        .concat(o().active)
                                    : "".concat(o().menuIcon),
                                  src:
                                    0 == b
                                      ? "/images/icon/menu.svg"
                                      : "/images/icon/menu_dark.svg",
                                  alt: "icon",
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  V && "dashboard" == t
                    ? (0, a.jsxs)("div", {
                        className: "pcNone ".concat(o().h5menu),
                        children: [
                          (0, a.jsxs)("div", {
                            className: o().appMenu,
                            onClick: () => Q(!Y),
                            children: [
                              (0, a.jsx)("p", { children: "DASHBOARD" }),
                              (0, a.jsx)("img", {
                                src: "/images/icon/sxarr.svg",
                                className: Y ? o().show : o().hidden,
                                alt: "icon",
                              }),
                            ],
                          }),
                          Y
                            ? (0, a.jsxs)("div", {
                                className: o().dashboardType,
                                children: [
                                  (0, a.jsx)("div", {
                                    onClick: () => J(9),
                                    children: (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/images/icon/icon11.svg",
                                          alt: "icon",
                                        }),
                                        "vaults",
                                      ],
                                    }),
                                  }),
                                  (0, a.jsxs)("div", {
                                    onClick: () => J(0),
                                    children: [
                                      (0, a.jsxs)("p", {
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/images/icon/icon01.svg",
                                            alt: "icon",
                                          }),
                                          "deposit",
                                        ],
                                      }),
                                      (0, a.jsxs)("p", {
                                        children: [
                                          (0, a.jsx)("img", {
                                            src: "/images/icon/icon02.svg",
                                            alt: "icon",
                                          }),
                                          "mint",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)("div", {
                                    onClick: () => J(1),
                                    children: (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/images/icon/icon03.svg",
                                          alt: "icon",
                                        }),
                                        "withdraw",
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    onClick: () => J(2),
                                    children: (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/images/icon/icon04.svg",
                                          alt: "icon",
                                        }),
                                        "repay",
                                      ],
                                    }),
                                  }),
                                  (0, a.jsx)("div", {
                                    onClick: () => J(3),
                                    children: (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("img", {
                                          src: "/images/icon/icon05.svg",
                                          alt: "icon",
                                        }),
                                        "redeem",
                                      ],
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          (0, a.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => J(4),
                            children: (0, a.jsx)("p", {
                              children: "OMNICHAIN",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => J(5),
                            children: (0, a.jsx)("p", { children: "BOOST" }),
                          }),
                          (0, a.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => J(6),
                            children: (0, a.jsx)("p", { children: "EARN" }),
                          }),
                          (0, a.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => J(7),
                            children: (0, a.jsx)("p", { children: "VEST" }),
                          }),
                          (0, a.jsx)("div", {
                            className: o().appMenu,
                            onClick: () => J(8),
                            children: (0, a.jsx)("p", { children: "BOUNTY" }),
                          }),
                          (0, a.jsx)("div", {
                            className: ed
                              ? " ".concat(o().migrateShow)
                              : " ".concat(o().migrateNone),
                            style: { marginTop: "20px" },
                            children: (0, a.jsx)(M, {
                              updateIsLoading: es,
                              updateIsSuccess: ei,
                              lbrAllowance: ec,
                              lbrBalanceOf: er,
                            }),
                          }),
                        ],
                      })
                    : V && "dashboard" !== t
                    ? (0, a.jsxs)("div", {
                        className: "pcNone ".concat(o().h5menu),
                        children: [
                          (0, a.jsx)(l(), {
                            href: "/",
                            children: (0, a.jsx)("span", { children: "Home" }),
                          }),
                          (0, a.jsx)(l(), {
                            href: "/eUSD",
                            children: (0, a.jsx)("span", { children: "eUSD" }),
                          }),
                          (0, a.jsx)(l(), {
                            href: "/peUSD",
                            children: (0, a.jsx)("span", { children: "peUSD" }),
                          }),


                          parseInt(new Date().getTime() / 1e3) >= 1711627200
                            ? (0, a.jsx)(l(), {
                                href: "/otc",
                                children: (0, a.jsx)("span", {
                                  children: "OTC",
                                }),
                              })
                            : null,
                          (0, a.jsx)("div", {
                            className: "LaunchApp",
                            children: (0, a.jsx)(l(), {
                              href: "/dashboard",
                              children: "Launch App",
                            }),
                          }),
                        ],
                      })
                    : null,
                ],
              }),
              eb
                ? (0, a.jsx)(D, {
                    changeShowEminderProp: eN,
                    peUSDNum: eh,
                    eusdNum: ex,
                  })
                : null,
              ee ? (0, a.jsx)(T.Z, {}) : null,
              et ? (0, a.jsx)(T.Z, {}) : null,
            ],
          })
        );
      }
    },
    97080: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = t(85893),
        s = t(67294),
        i = t(2711),
        r = t.n(i);
      t(21496);
      var o = t(17883);
      function c() {
        let { tipMessage: e } = (0, s.useContext)(o.S),
          [n, t] = (0, s.useState)(!0),
          i = () => {
            t(!1);
          };
        return (
          (0, s.useEffect)(() => {
            r().init({ duration: 800, delay: 0, easing: "ease-in-out" });
          }),
          (0, a.jsx)(a.Fragment, {
            children: n
              ? (0, a.jsx)("div", {
                  className: "opersateTip",
                  "data-aos": "fade-left",
                  children: (0, a.jsx)("div", {
                    className: "tipCenter",
                    children: (0, a.jsxs)("div", {
                      className: "justify_space_between",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "tipgap10",
                          children: [
                            "success" == e.type
                              ? (0, a.jsx)("span", {
                                  className: "tipType success",
                                  children: (0, a.jsx)("img", {
                                    alt: "icon",
                                    src: "/images/icon/success.svg",
                                  }),
                                })
                              : (0, a.jsx)("span", {
                                  className: "tipType",
                                  children: (0, a.jsx)("img", {
                                    alt: "icon",
                                    className: "pedding",
                                    src: "/images/icon/load.svg",
                                  }),
                                }),
                            (0, a.jsx)("p", { children: e.title }),
                          ],
                        }),
                        (0, a.jsx)("span", {
                          className: "close",
                          onClick: i.bind(this),
                          children: (0, a.jsx)("img", {
                            alt: "icon",
                            src: "/images/icon/close.svg",
                          }),
                        }),
                      ],
                    }),
                  }),
                })
              : null,
          })
        );
      }
    },
    83136: function (e) {
      e.exports = {
        header: "header_header__rBp6t",
        main: "header_main__fRYBN",
        logo: "header_logo__nGq8o",
        menu: "header_menu__SBibF",
        active: "header_active__lPE_y",
        icon: "header_icon__DnWvp",
        connectButton: "header_connectButton__Mjy3H",
        accountName: "header_accountName__v5SkC",
        disconnectMain: "header_disconnectMain__qn0bg",
        accountDis: "header_accountDis__cqJI6",
        show: "header_show__78o0s",
        hidden: "header_hidden__2t5v7",
        mode: "header_mode__AQArz",
        header_dark: "header_header_dark__RRmwP",
        header_dash_dark: "header_header_dash_dark__Rwlwt",
        migrate: "header_migrate__gSsWv",
        migrateShow: "header_migrateShow__YoWHF",
        migrateNone: "header_migrateNone__8_DKa",
        menuIcon: "header_menuIcon__1v_Ou",
        button: "header_button__HlmKc",
        claimTst: "header_claimTst__H9DZx",
        bewteen: "header_bewteen__XWjJ7",
        h5menu: "header_h5menu__3LOIA",
        appMenu: "header_appMenu__YoBSm",
        appIndex: "header_appIndex__qduIz",
        dashboardType: "header_dashboardType__Y7vQ8",
        appTypeIndex: "header_appTypeIndex__q1HZO",
      };
    },
    58507: function (e) {
      e.exports = {
        prop: "protectionSettings_prop__5uPmf",
        propMain: "protectionSettings_propMain__QmGXp",
        title: "protectionSettings_title__otU_L",
        note: "protectionSettings_note__9zV5N",
        propCenter: "protectionSettings_propCenter__LtTl1",
        propInput: "protectionSettings_propInput__Swiij",
        propInfo: "protectionSettings_propInfo__FjRp_",
        openSwitch: "protectionSettings_openSwitch__3CeOO",
        valueInput: "protectionSettings_valueInput__Mbvd_",
        input: "protectionSettings_input__4vFPN",
        approximate: "protectionSettings_approximate__SlNSB",
        or: "protectionSettings_or__VMhCN",
        button: "protectionSettings_button__Vw_2F",
        available: "protectionSettings_available___dW2I",
        addLink: "protectionSettings_addLink__DK402",
        prop_dark: "protectionSettings_prop_dark__EzpVC",
        closeIcon: "protectionSettings_closeIcon__HECOr",
        setting: "protectionSettings_setting__CGH9j",
        switch_btn: "protectionSettings_switch_btn__KyibA",
        switch_btn_animbg: "protectionSettings_switch_btn_animbg__foooD",
        switchSpan: "protectionSettings_switchSpan__Sursy",
        open: "protectionSettings_open__7tGhd",
        close: "protectionSettings_close__V_BtS",
        autoMain: "protectionSettings_autoMain__uuVxa",
        valueData: "protectionSettings_valueData__HSQSW",
      };
    },
    86159: function (e) {
      e.exports = {
        transaction: "transaction_transaction__up3IK",
        close: "transaction_close__FcKE0",
        title: "transaction_title__06EQK",
        account: "transaction_account__lxa9k",
        tips: "transaction_tips__lnrTN",
        recent: "transaction_recent__Johqj",
        type: "transaction_type__J6Ow3",
        transactionList: "transaction_transactionList__kzhSR",
        item: "transaction_item__PRq4B",
        value: "transaction_value__7Ejs1",
        trackWallet: "transaction_trackWallet__UScsT",
        showLoading: "transaction_showLoading__Sqcal",
        loadings: "transaction_loadings__jLjyt",
        loading: "transaction_loading__LFoGB",
        readonly: "transaction_readonly___Ktk9",
        tipIcon: "transaction_tipIcon__vcphU",
        dark: "transaction_dark__czWkx",
      };
    },
  },
]);
