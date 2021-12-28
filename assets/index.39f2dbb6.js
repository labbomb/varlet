import{u as _}from"./provide.793c6bf8.js";import{n as x}from"./elements.6bb3d81f.js";import{t as M,i as ee}from"./shared.61f3a471.js";import{_ as te}from"./elevation.8fda2ce0.js";import{d as ae,r as h,b as le,y as ne,x as oe,C as re,o as g,c as k,a as ue,G as F,p as X,n as V,F as se,k as ie,h as ve}from"./vendor.8243c41e.js";const ce={loop:{type:Boolean,default:!0},autoplay:{type:[String,Number]},duration:{type:[String,Number],default:300},initialIndex:{type:[String,Number],default:0},indicator:{type:Boolean,default:!0},indicatorColor:{type:String},vertical:{type:Boolean,default:!1},touchable:{type:Boolean,default:!0},onChange:{type:Function}};const de=250,fe=20,pe=ae({name:"VarSwipe",props:ce,setup(t){const v=h(null),u=h(0),A=le(()=>t.vertical),i=h(0),r=h(0),s=h(!1),n=h(0),{swipeItems:I,bindSwipeItems:W,length:l}=_();let w=!1,$=-1,T,b,L,f,p;const c=e=>I.find(({index:a})=>a.value===e),q=()=>{!t.loop||(r.value>=0&&c(l.value-1).setTranslate(-i.value),r.value<=-(i.value-u.value)&&c(0).setTranslate(i.value),r.value>-(i.value-u.value)&&r.value<0&&(c(l.value-1).setTranslate(0),c(0).setTranslate(0)))},z=e=>{const a=ee(e)?e:Math.floor((r.value-u.value/2)/-u.value),{loop:o}=t;return a<=-1?o?-1:0:a>=l.value?o?l.value:l.value-1:a},G=e=>{const{loop:a}=t;return e===-1?a?l.value-1:0:e===l.value?a?0:l.value-1:e},E=e=>{const{loop:a}=t;return e<0?a?l.value-1:0:e>l.value-1?a?0:l.value-1:e},D=e=>{const a=r.value>=u.value,o=r.value<=-i.value,d=0,m=-(i.value-u.value);s.value=!0,(a||o)&&(s.value=!0,r.value=o?d:m,c(0).setTranslate(0),c(l.value-1).setTranslate(0)),x(()=>{s.value=!1,e==null||e()})},H=()=>{n.value=E(M(t.initialIndex))},N=()=>{const{autoplay:e}=t;!e||l.value<=1||(B(),$=window.setTimeout(()=>{Y(),N()},M(e)))},B=()=>{$&&clearTimeout($)},R=(e,a)=>{if(e>a&&e>10)return"horizontal";if(a>e&&a>10)return"vertical"},U=e=>{if(l.value<=1||!t.touchable)return;const{clientX:a,clientY:o}=e.touches[0];T=a,b=o,L=performance.now(),w=!0,B(),D(()=>{s.value=!0})},J=e=>{const{touchable:a,vertical:o}=t;if(!w||!a)return;const{clientX:d,clientY:m}=e.touches[0],S=Math.abs(d-T),C=Math.abs(m-b);if(R(S,C)===(o?"vertical":"horizontal")){e.preventDefault();const Q=f!==void 0?d-f:0,Z=p!==void 0?m-p:0;f=d,p=m,r.value+=o?Z:Q,q()}},K=()=>{if(!w)return;const{vertical:e,onChange:a}=t,o=e?p<b:f<T,d=Math.abs(e?b-p:T-f),S=performance.now()-L<=de&&d>=fe?z(o?n.value+1:n.value-1):z();w=!1,s.value=!1,f=void 0,p=void 0,r.value=S*-u.value;const C=n.value;n.value=G(S),N(),C!==n.value&&(a==null||a(n.value))},y=()=>{s.value=!0,u.value=t.vertical?v.value.offsetHeight:v.value.offsetWidth,i.value=u.value*l.value,r.value=n.value*-u.value,I.forEach(e=>{e.setTranslate(0)}),N(),setTimeout(()=>{s.value=!1})},Y=()=>{if(l.value<=1)return;const{loop:e,onChange:a}=t,o=n.value;n.value=E(o+1),a==null||a(n.value),D(()=>{if(o===l.value-1&&e){c(0).setTranslate(i.value),r.value=l.value*-u.value;return}o!==l.value-1&&(r.value=n.value*-u.value)})},P=()=>{if(l.value<=1)return;const{loop:e,onChange:a}=t,o=n.value;n.value=E(o-1),a==null||a(n.value),D(()=>{if(o===0&&e){c(l.value-1).setTranslate(-i.value),r.value=u.value;return}o!==0&&(r.value=n.value*-u.value)})},O=e=>{if(l.value<=1||e===n.value)return;e=e<0?0:e,e=e>=l.value?l.value:e;const a=e>n.value?Y:P;Array.from({length:Math.abs(e-n.value)}).forEach(a)};return W({size:u,vertical:A}),ne(()=>l.value,()=>{H(),y()}),oe(()=>{window.addEventListener("resize",y)}),re(()=>{window.removeEventListener("resize",y),B()}),{length:l,index:n,swipeEl:v,trackSize:i,translate:r,lockDuration:s,handleTouchstart:U,handleTouchmove:J,handleTouchend:K,next:Y,prev:P,to:O,resize:y,toNumber:M}}}),me={class:"var-swipe",ref:"swipeEl"},he=["onClick"];function we(t,v,u,A,i,r){return g(),k("div",me,[ue("div",{class:X(["var-swipe__track",[t.vertical?"var-swipe--vertical":null]]),style:V({width:t.vertical?void 0:`${t.trackSize}px`,height:t.vertical?`${t.trackSize}px`:void 0,transform:`translate${t.vertical?"Y":"X"}(${t.translate}px)`,transitionDuration:t.lockDuration?"0ms":`${t.toNumber(t.duration)}ms`}),onTouchstart:v[0]||(v[0]=(...s)=>t.handleTouchstart&&t.handleTouchstart(...s)),onTouchmove:v[1]||(v[1]=(...s)=>t.handleTouchmove&&t.handleTouchmove(...s)),onTouchend:v[2]||(v[2]=(...s)=>t.handleTouchend&&t.handleTouchend(...s))},[F(t.$slots,"default")],38),F(t.$slots,"indicator",{index:t.index,length:t.length},()=>[t.indicator&&t.length?(g(),k("div",{key:0,class:X(["var-swipe__indicators",[t.vertical?"var-swipe--indicators-vertical":null]])},[(g(!0),k(se,null,ie(t.length,(s,n)=>(g(),k("div",{class:X(["var-swipe__indicator",[t.index===n?"var-swipe--indicator-active":null,t.vertical?"var-swipe--indicator-vertical":null]]),style:V({background:t.indicatorColor}),key:s,onClick:I=>t.to(n)},null,14,he))),128))],2)):ve("v-if",!0)])],512)}var j=te(pe,[["render",we]]);j.install=function(t){t.component(j.name,j)};export{j as S,ce as p};
