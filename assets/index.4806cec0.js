import{a as S,b as N,R as j}from"./index.b4ccd787.js";import{t as i}from"./shared.def6a7f6.js";import{b as w,f as k}from"./components.8b8d5d8f.js";import{t as $}from"./elements.364c0c9c.js";import{_ as h}from"./elevation.37915be7.js";import{q as F,r as z,b as g,y as U,o as v,c as y,B as R,m as B,n as P,d as m,h as s,i as a,F as D,l as e,t as r}from"./vendor.17911535.js";import{A as O}from"./AppType.4c4506cb.js";import{u as A,a as C,_ as E,b as L,c as V}from"./en-US.948dca5c.js";import{w as x}from"./utils.38ecee47.js";const T={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function}};function I(){const{parentProvider:n,bindParent:o}=w(S),{index:d}=k(N);return(!n||!o||!d)&&console.warn("col must in row"),{index:d,row:n,bindRow:o}}const G=F({name:"VarCol",props:T,setup(n){const o=z({left:0,right:0}),d=g(()=>i(n.span)),_=g(()=>i(n.offset)),{row:p,bindRow:u}=I(),l={span:d,offset:_,setPadding(t){o.value=t}};return U([()=>n.span,()=>n.offset],()=>{p==null||p.computePadding()}),u==null||u(l),{padding:o,toNumber:i,toSizeUnit:$}}});function K(n,o,d,_,p,u){return v(),y("div",{class:B(["var-col var--box",[n.span?`var-col--span-${n.toNumber(n.span)}`:null,n.offset?`var-col--offset-${n.toNumber(n.offset)}`:null]]),style:P({paddingLeft:n.toSizeUnit(n.padding.left),paddingRight:n.toSizeUnit(n.padding.right)}),onClick:o[0]||(o[0]=(...l)=>n.onClick&&n.onClick(...l))},[R(n.$slots,"default")],6)}var f=h(G,[["render",K]]);f.install=function(n){n.component(f.name,f)};var W={girdSystem:"\u6805\u683C\u7CFB\u7EDF",offset:"\u504F\u79FB",alignment:"\u5BF9\u9F50",gutter:"\u5217\u95F4\u8DDD"},Y={girdSystem:"Grid System",offset:"Offset",alignment:"Alignment",gutter:"Gutter"};const{add:b,use:q,pack:H,packs:Ps,merge:Ds}=A(),J=n=>{V(n),q(n)};C("zh-CN",E);C("en-US",L);b("zh-CN",W);b("en-US",Y);const M={name:"RowExample",components:{VarRow:j,VarCol:f,AppType:O},setup(){return x(J),{pack:H}}},Q=e("span: 8"),X=e("span: 8"),Z=e("span: 8"),ss=e("span: 8"),as=e("span: 8"),es=e("span: 8"),ts=e("offset: 8 span: 16"),ns=e("span: 8"),os=e("span: 8"),ls=e("span: 8"),cs=e("span: 8"),_s=e("span: 8"),ds=e("span: 8"),ps=e("span: 8"),us=e("span: 8"),rs=e("span: 8"),fs=e("span: 8"),is=e("span: 8"),ms=e("span: 8"),hs=e("span: 8"),gs=e("span: 8"),vs=e("span: 8"),ys=e("span: 8"),Cs=e("span: 8"),bs=e("span: 8"),Ss=e("span: 8");function Ns(n,o,d,_,p,u){const l=m("app-type"),t=m("var-col"),c=m("var-row");return v(),y(D,null,[s(l,null,{default:a(()=>[e(r(_.pack.girdSystem),1)]),_:1}),s(c,null,{default:a(()=>[s(t,{class:"col",span:8},{default:a(()=>[Q]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[X]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[Z]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[ss]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[as]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[es]),_:1})]),_:1}),s(l,null,{default:a(()=>[e(r(_.pack.offset),1)]),_:1}),s(c,null,{default:a(()=>[s(t,{class:"col",span:16,offset:8},{default:a(()=>[ts]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[ns]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[os]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[ls]),_:1})]),_:1}),s(l,null,{default:a(()=>[e(r(_.pack.alignment),1)]),_:1}),s(c,null,{default:a(()=>[s(t,{class:"col",span:8},{default:a(()=>[cs]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[_s]),_:1})]),_:1}),s(c,{justify:"center"},{default:a(()=>[s(t,{class:"col",span:8},{default:a(()=>[ds]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[ps]),_:1})]),_:1}),s(c,{justify:"flex-end"},{default:a(()=>[s(t,{class:"col",span:8},{default:a(()=>[us]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[rs]),_:1})]),_:1}),s(c,{justify:"space-around"},{default:a(()=>[s(t,{class:"col",span:8},{default:a(()=>[fs]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[is]),_:1})]),_:1}),s(c,{justify:"space-between"},{default:a(()=>[s(t,{class:"col",span:8},{default:a(()=>[ms]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[hs]),_:1})]),_:1}),s(l,null,{default:a(()=>[e(r(_.pack.gutter),1)]),_:1}),s(c,{gutter:10},{default:a(()=>[s(t,{class:"col",span:8},{default:a(()=>[gs]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[vs]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[ys]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[Cs]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[bs]),_:1}),s(t,{class:"col",span:8},{default:a(()=>[Ss]),_:1})]),_:1})],64)}var Os=h(M,[["render",Ns],["__scopeId","data-v-31368027"]]);export{Os as default};
