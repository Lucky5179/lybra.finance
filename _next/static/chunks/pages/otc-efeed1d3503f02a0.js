(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6525],{12445:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/otc",function(){return a(12452)}])},12452:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var n=a(85893),s=a(30051),i=a(8937),r=a.n(i),l=a(67294),c=a(17883),o=a(69077),d=a(70794),u=a(97080);function _(e){let t,a,s,i;let{address:r,setTipMessage:_,otc_LybraOrder:m,otcAbi:h,eusdAbi:p,otc_usdc:x}=(0,l.useContext)(c.S),{price:v,amount:g,version:b,opType:f,buttonName:j,otcAdd:N,tokenType:y,buyOrSale:S,sellList:w,buyList:C}=e,k=new d.Z(v).multipliedBy(1e6).toFixed();new d.Z(g).multipliedBy(1e18).toFixed();let O="Approve"==j?"sell"==f?b:"USDC":"";if("Approve"==j)"sell"==f?(a=p,t=N,s="approve",i=[m,"115792089237316195423570985008687907853269984665640564039457"]):(a=p,t=x,s="approve",i=[m,"115792089237316195423570985008687907853269984665640564039457"]);else if(v&&g){let e=[],n=[],l=Number(g);a=h,t=m,s="batchTake","sell"==f?C.length<=0?(e=[],n=[],l=Number(g)):C.forEach(t=>{t.tokenType==y&&t.amount>0&&t.price>=v&&l>0&&(l<t.amount?(e.push(t.id),n.push(new d.Z(l).multipliedBy(1e18).toFixed()),l=0):l==t.amount?(l=0,e.push(t.id),n.push(new d.Z(t.amount).multipliedBy(1e18).toFixed())):l>t.amount&&(l-=t.amount,e.push(t.id),n.push(new d.Z(t.amount).multipliedBy(1e18).toFixed())))}):w.length<=0?(e=[],n=[],l=Number(g)):w.forEach(t=>{t.tokenType==y&&t.amount>0&&t.price<=v&&l>0&&(l<t.amount?(e.push(t.id),n.push(new d.Z(l).multipliedBy(1e18).toFixed()),l=0):l==t.amount?(l=0,e.push(t.id),n.push(new d.Z(t.amount).multipliedBy(1e18).toFixed())):l>t.amount&&(l-=t.amount,e.push(t.id),n.push(new d.Z(t.amount).multipliedBy(1e18).toFixed())))}),i=[e,n,{maker:r,tokenType:y,buyOrSale:S,price:k,remainingAmount:new d.Z(l).multipliedBy(1e18).toFixed(),isActive:!0}]}let[I,F]=(0,l.useState)(!1),[T,A]=(0,l.useState)(!1),{isLoading:B,write:Z,data:E}=(0,o.GG)({mode:"recklesslyUnprepared",address:t,abi:a,functionName:s,args:i,onSuccess(e){A(!0)},onError(e){A(!1)}});(0,o.BX)({hash:null==E?void 0:E.hash,onSuccess(t){A(!1),F(!0),_({title:j+" "+O,type:"success"}),setTimeout(()=>{F(!1),"Approve"!==j?e.clearInputValue():e.changeButton()},3e3)}});let D=async()=>{j=="Insufficient "+b||"Insufficient USDC"==j||g<=0||v<=0||(_({title:j+" "+O,type:"loading"}),Z())};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:B||T||g<=0||v<=0||j=="Insufficient "+b||"Insufficient USDC"==j?"button disabled ":"button",style:{margin:"20px 0"},onClick:()=>B||T?null:D(),children:B||T?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:"loading",src:"/images/icon/loading.svg",alt:"loading"}),j+" "+O]}):(0,n.jsx)(n.Fragment,{children:j+" "+O})}),B||T?(0,n.jsx)(u.Z,{}):null,I?(0,n.jsx)(u.Z,{}):null]})}var m=a(27102),h=a.n(m);function p(e){let{mode:t,otc_LybraOrder:a,otcAbi:s,setTipMessage:i}=(0,l.useContext)(c.S),{setShowCancel:r,cancelItem:_}=e,m=e=>{e.stopPropagation()},[p,x]=(0,l.useState)(!1),[v,g]=(0,l.useState)(!1),{isLoading:b,write:f,data:j}=(0,o.GG)({mode:"recklesslyUnprepared",address:a,abi:s,functionName:"adjustOrder",args:[_.id,new d.Z(_.price).multipliedBy(1e6).toFixed(),new d.Z(_.amount).multipliedBy(1e18).toFixed(),!1],onSuccess(e){g(!0)},onError(e){g(!1)}});(0,o.BX)({hash:null==j?void 0:j.hash,onSuccess(e){g(!1),x(!0),i({title:"Confirm",type:"success"}),setTimeout(()=>{x(!1),r(!1)},3e3)}});let N=async()=>{i({title:"Confirm",type:"loading"}),f()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:0==t?"".concat(h().eranProp):"".concat(h().eranProp," ").concat(h().eranProp_dark),onClick:()=>r(!1),children:(0,n.jsxs)("div",{className:h().propMain,onClick:m.bind(this),children:[(0,n.jsxs)("div",{className:"justify_space_between",children:[(0,n.jsx)("div",{className:h().switchBtn,children:(0,n.jsx)("p",{})}),(0,n.jsx)("div",{className:h().closeIcon,onClick:()=>r(!1),children:(0,n.jsx)("img",{src:"/images/icon/close.svg",alt:"close"})})]}),(0,n.jsx)("div",{style:{fontSize:"20px",margin:"10px 0"},children:"Confirm to cancel this order?"}),(0,n.jsx)("div",{className:b||v||amount<=0?"button disabled ":"button",style:{margin:"30px 0px 0"},onClick:()=>b||v?null:N(),children:b||v?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:"loading",src:"/images/icon/loading.svg",alt:"loading"}),"Confirm"]}):(0,n.jsx)(n.Fragment,{children:"Confirm"})})]})}),b||v?(0,n.jsx)(u.Z,{}):null,p?(0,n.jsx)(u.Z,{}):null]})}function x(){let{address:e,mode:t,otc_LybraOrder:a,otc_eusdv1:i,otc_eusdv2:u,otc_peusd:m,otcAbi:h,eusdAbi:x,otc_usdc:v,ordertxs:g,formatNum:b}=(0,l.useContext)(c.S),[f,j]=(0,l.useState)(0);(0,o.do)({address:i,abi:x,functionName:"balanceOf",args:[e],watch:!0,onSuccess(e){j(new d.Z(e._hex).div(new d.Z(1e18)).toFixed())}});let[N,y]=(0,l.useState)(0);(0,o.do)({address:u,abi:x,functionName:"balanceOf",args:[e],watch:!0,onSuccess(e){y(new d.Z(e._hex).div(new d.Z(1e18)).toFixed())}});let[S,w]=(0,l.useState)(0);(0,o.do)({address:m,abi:x,functionName:"balanceOf",args:[e],watch:!0,onSuccess(e){w(new d.Z(e._hex).div(new d.Z(1e18)).toFixed())}});let[C,k]=(0,l.useState)(0);(0,o.do)({address:v,abi:x,functionName:"balanceOf",args:[e],watch:!0,onSuccess(e){k(new d.Z(e._hex).div(new d.Z(1e6)).toFixed())}});let[O,I]=(0,l.useState)("eUSD V1"),[F,T]=(0,l.useState)(!1),A=e=>{I(e),T(!1)},B=async e=>{-1!==["-","+","e","E"].indexOf(e.key)&&e.preventDefault()},[Z,E]=(0,l.useState)(""),[D,U]=(0,l.useState)(""),P=async e=>{let t=Number(e.target.value);t>2?E(2):E(t)},M=async e=>{let t=Number(e.target.value);U(t)},[V,L]=(0,l.useState)("sell"),[H,q]=(0,l.useState)([]),[G,R]=(0,l.useState)([]),[Y,X]=(0,l.useState)(),[z,J]=(0,l.useState)(),W=(e,t)=>{let a=e.sort(function(e,t){return e.price-t.price});t(a)},K=(e,t)=>{let a=e.sort(function(e,t){return t.price-e.price});t(a)},[Q,$]=(0,l.useState)(i),[ee,et]=(0,l.useState)(0);(0,l.useEffect)(()=>{$("eUSD V1"==O?i:"eUSD V2"==O?u:m),et("eUSD V1"==O?0:"eUSD V2"==O?1:2)},[O]);let[ea,en]=(0,l.useState)(!1);(0,l.useEffect)(()=>{en("sell"!=V)},[V]);let[es,ei]=(0,l.useState)("Confirm"),[er,el]=(0,l.useState)(0);(0,o.do)({address:Q,abi:x,functionName:"allowance",args:[e,a],watch:!0,onSuccess(e){el(new d.Z(e._hex).div(new d.Z(1e18)).toFixed())}});let[ec,eo]=(0,l.useState)(0);(0,o.do)({address:v,abi:x,functionName:"allowance",args:[e,a],watch:!0,onSuccess(e){eo(new d.Z(e._hex).div(new d.Z(1e18)).toFixed())}});let[ed,eu]=(0,l.useState)(0);(0,l.useEffect)(()=>{eu(Number(0==O?f:1==O?N:S))},[f,N,S,O]);let e_=()=>{"sell"==V?Number(D)>ed?ei("Insufficient "+O):Number(er)<Number(D)?ei("Approve"):ei("Confirm"):Number(D)*Number(Z)>C?ei("Insufficient USDC"):1e6>Number(ec)?ei("Approve"):ei("Confirm")};(0,l.useEffect)(()=>{e_()},[D,V]);let[em,eh]=(0,l.useState)([]),[ep,ex]=(0,l.useState)([]),ev=async e=>{let t=g.filters.MakeOrder(null,null,null,e,null),a=await g.queryFilter(t,0,"latest"),n=[],s=[];a.forEach(e=>{n.push(Number(e.args.id._hex)),s.push(Number(e.args.tokenType))}),eh(n),ex(s)},[eg,eb]=(0,l.useState)([]),[ef,ej]=(0,l.useState)([]),eN=async e=>{let t=g.filters.MakeOrder(null,null,null,e,null),a=await g.queryFilter(t,0,"latest"),n=[],s=[];a.forEach(e=>{n.push(Number(e.args.id._hex)),s.push(Number(e.args.tokenType))}),eb(n),ej(s)},[ey,eS]=(0,l.useState)([]),[ew,eC]=(0,l.useState)([]),ek=async()=>{let t=g.filters.MakeOrder(e,null,null,null,null),a=await g.queryFilter(t,0,"latest"),n=[],s=[];a.forEach(e=>{n.push(Number(e.args.id._hex)),s.push({id:Number(e.args.id._hex),orderAmount:Number(e.args.remainingAmount._hex)/1e18,date:Number(e.args.time._hex)})}),eS(n),eC(s)},[eO,eI]=(0,l.useState)([]),eF=async()=>{let t=g.filters.TakeOrder(null,e,null,null,null),a=await g.queryFilter(t,0,"latest"),n=[];a.forEach(e=>{n.push({id:Number(e.args.id._hex),amount:Number(e.args.amount._hex)/1e18,date:Number(e.args.time._hex),price:Number(e.args.price._hex)/1e6,buyOrSale:!e.args.buyOrSale,tokenType:e.args.tokenType})}),eI(n)},eT=null,eA=async()=>{clearTimeout(eT),await ev(!1),await eN(!0),await ek(),await eF(),eT=setTimeout(async()=>{await eA()},6e4)};(0,l.useEffect)(()=>{clearTimeout(eT),eA()},[e]),(0,o.do)({address:a,abi:h,functionName:"batchCheckOrderValidAmount",args:[em],watch:!0,onSuccess(e){let t=[];e[0].forEach((a,n)=>{t.push({id:em[n],tokenType:ep[n],amount:new d.Z(a._hex).div(new d.Z(1e18)).toFixed(),price:Number(e[1][n]._hex)/1e6})}),W(t,q)}}),(0,o.do)({address:a,abi:h,functionName:"batchCheckOrderValidAmount",args:[eg],watch:!0,onSuccess(e){let t=[];e[0].forEach((a,n)=>{t.push({id:eg[n],tokenType:ef[n],amount:new d.Z(a._hex).div(new d.Z(1e18)).toFixed(),price:Number(e[1][n]._hex)/1e6})}),K(t,R)}});let[eB,eZ]=(0,l.useState)([]);(0,o.do)({address:a,abi:h,functionName:"getOrders",args:[ey],watch:!0,onSuccess(t){if(e){let e=[];t.forEach((t,a)=>{e.push({id:ey[a],amount:Number(t.remainingAmount._hex)/1e18,price:Number(t.price._hex)/1e6,buyOrSale:t.buyOrSale,tokenType:t.tokenType,isActive:t.isActive})}),eZ(eE(ew,e))}else eZ([])}});let eE=(e,t)=>{let a={};return e.forEach(e=>{a[e.id]=e}),t.forEach(e=>{a[e.id]?Object.assign(a[e.id],e):a[e.id]=e}),Object.values(a)},eD=e=>{let t=new Date(1e3*e),a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return"".concat(s,"/").concat(n,"/").concat(a)},[eU,eP]=(0,l.useState)(!1),[eM,eV]=(0,l.useState)({}),eL=e=>{eP(!0),eV(e)},eH=(e,t)=>{L(e),E(t.price),U(t.amount)},eq=e=>{L(e)},[eG,eR]=(0,l.useState)("Orders"),[eY,eX]=(0,l.useState)(!1),ez=e=>{eR(e),eX(!1)},eJ=()=>{E(""),U("")};(0,l.useEffect)(()=>{X(),J()},[O]);let eW=(e,t)=>{let a=!1;return e.forEach(e=>{e.tokenType==t&&e.amount>0&&(a=!0)}),a};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{id:"Otc"}),(0,n.jsx)("div",{className:0==t?"".concat(r().otc):"".concat(r().otc," ").concat(r().otc_dark),children:(0,n.jsx)("div",{className:"section",children:(0,n.jsxs)("div",{className:r().otcMain,children:[(0,n.jsxs)("div",{className:r().left,children:[(0,n.jsxs)("div",{className:r().omniSelect,children:[(0,n.jsxs)("div",{className:r().selectName,onClick:()=>T(!F),children:[(0,n.jsx)("div",{className:r().coin,children:O}),(0,n.jsx)("img",{src:1==t?"/images/icon/groupIcon_dark.svg":"/images/icon/groupIcon.svg",style:F?{transform:"rotate(180deg)"}:null,alt:"icon"})]}),F?(0,n.jsxs)("div",{className:r().selectItem,children:[(0,n.jsx)("p",{onClick:()=>A("eUSD V1"),children:"eUSD V1"}),(0,n.jsx)("p",{onClick:()=>A("eUSD V2"),children:"eUSD V2"}),(0,n.jsx)("p",{onClick:()=>A("peUSD"),children:"peUSD"})]}):null]}),(0,n.jsxs)("div",{className:r().overview,children:[(0,n.jsx)("p",{className:"font_bold_16",style:1==t?{marginLeft:"8px",color:"#fff"}:{marginLeft:"8px"},children:"Sell Orders"}),(0,n.jsxs)("div",{className:r().dataItem,children:[(0,n.jsxs)("div",{children:["Amount (",O,")"]}),(0,n.jsx)("div",{children:"Price (USDC)"})]}),(0,n.jsx)("div",{className:r().table,children:H.length<=0||!eW(H,ee)?(0,n.jsx)("div",{className:r().noOrder,children:"No Active Orders"}):H.map((e,t)=>(0,n.jsxs)("div",{className:r().dataItem,onClick:()=>eH("buy",e),style:e.tokenType!==ee||e.amount<.1?{display:"none"}:null,children:[(0,n.jsx)("div",{children:b(e.amount)}),(0,n.jsxs)("div",{children:["$",e.price]})]},t))})]}),(0,n.jsxs)("div",{className:r().overview,children:[(0,n.jsx)("p",{className:"font_bold_16",style:1==t?{marginLeft:"8px",color:"#fff"}:{marginLeft:"8px"},children:"Buy Orders"}),(0,n.jsxs)("div",{className:r().dataItem,children:[(0,n.jsxs)("div",{children:["Amount (",O,")"]}),(0,n.jsx)("div",{children:"Price (USDC)"})]}),(0,n.jsx)("div",{className:r().table,children:G.length<=0||!eW(G,ee)?(0,n.jsx)("div",{className:r().noOrder,children:"No Active Orders"}):G.map((e,t)=>(0,n.jsxs)("div",{className:r().dataItem,onClick:()=>eH("sell",e),style:e.tokenType!==ee||e.amount<.1?{display:"none"}:null,children:[(0,n.jsx)("div",{children:b(e.amount)}),(0,n.jsxs)("div",{children:["$",b(e.price)]})]},t))})]})]}),(0,n.jsxs)("div",{className:r().right,children:[(0,n.jsxs)("div",{className:r().sellaBuy,children:[(0,n.jsxs)("div",{className:r().title,children:[(0,n.jsx)("span",{className:"sell"==V?r().active:null,onClick:()=>eq("sell"),children:"Sell"}),(0,n.jsx)("span",{className:"buy"==V?r().active:null,onClick:()=>eq("buy"),children:"Buy"})]}),(0,n.jsx)("div",{className:"input otcInput",children:(0,n.jsxs)("div",{className:"otcGap",children:[(0,n.jsx)("span",{children:"Price"}),(0,n.jsx)("input",{style:{textAlign:"right"},type:"number",onWheel:e=>e.target.blur(),placeholder:"0",id:"price",onChange:P.bind(this),onKeyDown:B.bind(this),value:Z}),(0,n.jsx)("p",{children:"USDC"})]})}),(0,n.jsx)("div",{className:"input otcInput",children:(0,n.jsxs)("div",{className:"otcGap",children:[(0,n.jsx)("span",{children:"Amount"}),(0,n.jsx)("input",{style:{textAlign:"right"},type:"number",onWheel:e=>e.target.blur(),placeholder:"0",id:"amount",onChange:M.bind(this),onKeyDown:B.bind(this),value:D}),(0,n.jsx)("p",{style:{width:"15%"},children:O})]})}),(0,n.jsx)(_,{price:Z,amount:D,otcAdd:Q,version:O,opType:V,buttonName:es,setButtonName:ei,allowance:er,tokenType:ee,buyOrSale:ea,sellList:H,buyList:G,clearInputValue:eJ,changeButton:e_})]}),(0,n.jsxs)("div",{className:"".concat(r().overview," ").concat(r().rightOverview),children:[(0,n.jsx)("p",{className:"font_bold_16",style:{marginLeft:"8px"}}),(0,n.jsxs)("div",{className:r().omniSelect,children:[(0,n.jsxs)("div",{className:r().selectName,onClick:()=>eX(!eY),style:{width:"160px",fontSize:"16px"},children:[(0,n.jsx)("div",{className:r().coin,children:"Orders"==eG?"Open Orders":"Order History"}),(0,n.jsx)("img",{src:1==t?"/images/icon/groupIcon_dark.svg":"/images/icon/groupIcon.svg",style:eY?{transform:"rotate(180deg)"}:null,alt:"icon"})]}),eY?(0,n.jsxs)("div",{className:r().selectItem,children:[(0,n.jsx)("p",{onClick:()=>ez("Orders"),children:"Open Orders"}),(0,n.jsx)("p",{onClick:()=>ez("History"),children:"Order History"})]}):null]}),"Orders"==eG?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:r().tabItem,children:[(0,n.jsx)("div",{children:"Time"}),(0,n.jsx)("div",{children:"Direction"}),(0,n.jsx)("div",{children:"Amount"}),(0,n.jsx)("div",{children:"Price"}),(0,n.jsx)("div",{children:"Status"}),(0,n.jsx)("div",{children:"Action"})]}),(0,n.jsx)("div",{className:r().table,children:eB.length<=0||!eW(eB,ee)?(0,n.jsx)("div",{className:r().noOrder,children:"No Active Orders"}):eB.map((e,t)=>(0,n.jsxs)("div",{className:r().tabItem,style:e.tokenType!==ee?{display:"none"}:null,children:[(0,n.jsx)("div",{children:eD(e.date)}),(0,n.jsx)("div",{children:!1==e.buyOrSale?"Sell":"Buy"}),(0,n.jsxs)("div",{children:[b(e.orderAmount-e.amount),"/",b(e.orderAmount)]}),(0,n.jsxs)("div",{children:["$",b(e.price)]}),(0,n.jsx)("div",{children:e.orderAmount==e.orderAmount-e.amount?"Filled":!0==e.isActive?"Open":"Cancelled"}),e.isActive?(0,n.jsx)("div",{className:r().Cancel,onClick:()=>eL(e),children:"Cancel"}):(0,n.jsx)("div",{})]},t))})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"".concat(r().tabItem," ").concat(r().tabItem2),children:[(0,n.jsx)("div",{children:"Time"}),(0,n.jsx)("div",{children:"Direction"}),(0,n.jsx)("div",{children:"Amount"}),(0,n.jsx)("div",{children:"Price"})]}),(0,n.jsx)("div",{className:r().table,children:eO.length<=0||!eW(eO,ee)?(0,n.jsx)("div",{className:r().noOrder,children:"No History Orders"}):eO.map((e,t)=>(0,n.jsxs)("div",{className:"".concat(r().tabItem," ").concat(r().tabItem2),style:e.tokenType!==ee?{display:"none"}:null,children:[(0,n.jsx)("div",{children:eD(e.date)}),(0,n.jsx)("div",{children:!1==e.buyOrSale?"Sell":"Buy"}),(0,n.jsx)("div",{children:b(e.amount)}),(0,n.jsxs)("div",{children:["$",b(e.price)]})]},t))})]})]})]})]})})}),eU?(0,n.jsx)(p,{setShowCancel:eP,cancelItem:eM}):null]})}},27102:function(e){e.exports={earn:"earn_earn__Vkhc1","App-box":"earn_App-box__MGgrn",card:"earn_card__b1uMG","card-primary":"earn_card-primary__7u5yc","App-box-highlight":"earn_App-box-highlight__GPYRg","App-box-solid":"earn_App-box-solid__hvEYP",cardBottom:"earn_cardBottom__I0_W4",cardDivider:"earn_cardDivider__lFsAF",cardBottomPlaceholder:"earn_cardBottomPlaceholder__c2wJ_",Page:"earn_Page__WN411",PageTitle:"earn_PageTitle__29HMC",PageDescription:"earn_PageDescription__51kUE",cardflex:"earn_cardflex__dEXdp",cardTitle:"earn_cardTitle__CmQqI",cardphase:"earn_cardphase__jV8Ep",phaseTitle:"earn_phaseTitle__bFoDS",phaseChange:"earn_phaseChange__FTLER",cardContent:"earn_cardContent__yKksJ",cardRow:"earn_cardRow__Hx7Zf",inner:"earn_inner__mECj7",icon:"earn_icon__I8qvk",cardOptions:"earn_cardOptions__rLYm4",cardOption:"earn_cardOption__IWHJ_",TabTitleSection:"earn_TabTitleSection__vvvPD",boostQa:"earn_boostQa__3hgPK",tipMain:"earn_tipMain__JrUfU",earnCards:"earn_earnCards__9Zxca",selectDuration:"earn_selectDuration__J6cuv",connectButton:"earn_connectButton__N_L_4",htmlBody:"earn_htmlBody__F_2Iz",mainCard:"earn_mainCard__7c9pi",boostCard:"earn_boostCard__eFkOb",boostTipCard:"earn_boostTipCard__cwiLz",earnh5Card:"earn_earnh5Card__fHHqR",earnh5Card2:"earn_earnh5Card2__30hle",propMain:"earn_propMain__IO3lM",eslbrInfo:"earn_eslbrInfo__lwe7O",eslbrLogo:"earn_eslbrLogo__7t7Gq",eranProp:"earn_eranProp__4oE0F",switchBtn:"earn_switchBtn__7E3aB",propInput:"earn_propInput__aqjcU",eranProp_dark:"earn_eranProp_dark__RNZh7",closeIcon:"earn_closeIcon__mY307",linkUnderline:"earn_linkUnderline__H2nN6",cardRowcenter:"earn_cardRowcenter__g5cdj",fillalitem:"earn_fillalitem__udSrx",filled:"earn_filled__YX1yq",filledBg:"earn_filledBg__7b5mT",filledtext:"earn_filledtext__FMs_Y",active:"earn_active__mMYCc",addLink:"earn_addLink__MLDN9",tabItem:"earn_tabItem__ST764",totalCost:"earn_totalCost__yIrMB",earn_dark:"earn_earn_dark__4FVjU"}},8937:function(e){e.exports={otc:"otc_otc__nHdFG",omniSelect:"otc_omniSelect__Fegpd",selectName:"otc_selectName__f3AE5",selectItem:"otc_selectItem__UClGI",otcMain:"otc_otcMain__eYo3Z",right:"otc_right__zprl4",sellaBuy:"otc_sellaBuy__QWaXq",title:"otc_title__C8gzF",active:"otc_active__EaheF",overview:"otc_overview__qzieD",dataItem:"otc_dataItem__pO7hH",sort:"otc_sort__sKUnO",table:"otc_table__oH5XR",rightOverview:"otc_rightOverview__Jfnmx",tabItem:"otc_tabItem__x6kr7",tabItem2:"otc_tabItem2__hMM6P",Cancel:"otc_Cancel__NfrZm",otc_dark:"otc_otc_dark__BRM_d",noOrder:"otc_noOrder__4VAxt"}}},function(e){e.O(0,[8543,8435,51,9774,2888,179],function(){return e(e.s=12445)}),_N_E=e.O()}]);