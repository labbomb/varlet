import{t as U}from"./elements.364c0c9c.js";import{_ as v}from"./elevation.37915be7.js";import{q as x,o as s,c as r,a as e,n as F,B as b,f as z,r as y,d as p,h as c,i,F as k,l as S,t as n,j as $,V as w,W as D}from"./vendor.17911535.js";import"./index.3ac124c8.js";import{A as E}from"./AppType.4c4506cb.js";import{w as V}from"./utils.38ecee47.js";import{u as A,a as j,_ as I,b as L,c as M}from"./en-US.948dca5c.js";import{w as P}from"./components.8b8d5d8f.js";import{P as C}from"./Pagination.b9a84393.js";const W=x({name:"VarTable",props:{fullWidth:{type:[Number,String],default:"100%"}},setup(){return{toSizeUnit:U}}}),q={class:"var-table var-elevation--1 var--box"},J={class:"var-table__main"},O={key:0,class:"var-table__footer"};function G(t,o,d,a,l,N){return s(),r("div",q,[e("div",J,[e("table",{class:"var-table__table",style:F({width:t.toSizeUnit(t.fullWidth)})},[b(t.$slots,"default")],4)]),t.$slots.footer?(s(),r("div",O,[b(t.$slots,"footer")])):z("v-if",!0)])}var u=v(W,[["render",G]]);u.install=function(t){t.component(u.name,u)};var H={basicUsage:"\u57FA\u672C\u4F7F\u7528",slot:"\u5C3E\u90E8\u63D2\u69FD",total:"\u603B\u5206",math:"\u6570\u5B66",english:"\u82F1\u8BED",tom:"\u706B\u732B\u6851",jerry:"\u8017\u5B50\u541B",name:"\u59D3\u540D"},K={basicUsage:"Basic Usage",slot:"Footer Slots",total:"Total",math:"Math",english:"English",frontend:"Frontend",tom:"Tom",jerry:"Jerry",name:"Name"};const{add:B,use:Q,pack:R,packs:he,merge:fe}=A(),X=t=>{M(t),Q(t)};j("zh-CN",I);j("en-US",L);B("zh-CN",H);B("en-US",K);const h=(t,o)=>Array.from({length:o}).map((d,a)=>{const l=(t-1)*o+a+1;return{name:`Name ${l}`,math:l,english:l}}),Y={name:"TableExample",components:{[u.name]:u,[C.name]:C,AppType:E},setup(){const t=y([{name:"tom",math:100,english:135},{name:"jerry",math:124,english:38}]),o=y(h(1,10)),d=(a,l)=>{o.value=h(a,l)};return V(X),P(),{pack:R,data:t,list:o,get:d}}},m=t=>(w("data-v-cfd2a570"),t=t(),D(),t),Z=m(()=>e("td",null,"124",-1)),ee=m(()=>e("td",null,"38",-1)),te=m(()=>e("td",null,"100",-1)),ae=m(()=>e("td",null,"135",-1)),ne={class:"footer"};function oe(t,o,d,a,l,N){const f=p("app-type"),g=p("var-table"),T=p("var-pagination");return s(),r(k,null,[c(f,null,{default:i(()=>[S(n(a.pack.basicUsage),1)]),_:1}),c(g,null,{default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a.pack.name),1),e("th",null,n(a.pack.math),1),e("th",null,n(a.pack.english),1)])]),e("tbody",null,[e("tr",null,[e("td",null,n(a.pack.jerry),1),Z,ee]),e("tr",null,[e("td",null,n(a.pack.tom),1),te,ae])])]),_:1}),c(f,null,{default:i(()=>[S(n(a.pack.slot),1)]),_:1}),c(g,null,{footer:i(()=>[e("div",ne,[c(T,{current:1,total:100,"size-option":[5,10],onChange:a.get},null,8,["onChange"])])]),default:i(()=>[e("thead",null,[e("tr",null,[e("th",null,n(a.pack.name),1),e("th",null,n(a.pack.math),1),e("th",null,n(a.pack.english),1)])]),e("tbody",null,[(s(!0),r(k,null,$(a.list,_=>(s(),r("tr",{key:_.name},[e("td",null,n(_.name),1),e("td",null,n(_.math),1),e("td",null,n(_.english),1)]))),128))])]),_:1})],64)}var le=v(Y,[["render",oe],["__scopeId","data-v-cfd2a570"]]),ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",gen:h,default:le});export{u as T,h as g,ge as i,R as p,X as u};
