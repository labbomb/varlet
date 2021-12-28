import{p as q,S as G}from"./index.854b8d9c.js";import{d as Y,r as b,b as l,y as B,x as M,C as Q,T as J,o as H,l as Z,j as x,a as _,p as N,G as I,n as V,H as ee,Q as te,z as ae,f as oe,w as ie,c as ne}from"./vendor.8243c41e.js";import{p as re,c as se,e as le,b as ce,f as de}from"./components.101c5ac0.js";import{i as ue,q as W}from"./shared.61f3a471.js";import{t as ve,s as F}from"./elements.6bb3d81f.js";import{_ as K}from"./elevation.8fda2ce0.js";import{R as fe}from"./index.b947dc5d.js";function X(e){return["horizontal","vertical"].includes(e)}const be={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal",validator:X},itemDirection:{type:String,default:"horizontal",validator:X},fixedBottom:{type:Boolean,default:!1},activeColor:{type:String},inactiveColor:{type:String},disabledColor:{type:String},color:{type:String},indicatorColor:{type:String},indicatorSize:{type:[String,Number]},elevation:{type:Boolean,default:!1},sticky:{type:Boolean,default:!1},offsetTop:re(q,"offsetTop"),onClick:{type:Function},onChange:{type:Function},"onUpdate:active":{type:Function}},O=Symbol("TABS_BIND_TAB_KEY"),R=Symbol("TABS_COUNT_TAB_KEY");function me(){const{childProviders:e,bindChildren:o}=se(O),{length:n}=le(R);return{length:n,tabList:e,bindTabList:o}}const ye=Y({name:"VarTabs",components:{VarSticky:G},inheritAttrs:!1,props:be,setup(e){const o=b("0px"),n=b("0px"),m=b("0px"),y=b("0px"),i=b(!1),h=b(null),C=l(()=>e.active),D=l(()=>e.activeColor),c=l(()=>e.inactiveColor),S=l(()=>e.disabledColor),$=l(()=>e.itemDirection),{tabList:T,bindTabList:k,length:d}=me(),g=a=>{var L,j;const t=(L=a.name.value)!=null?L:a.index.value,{active:s,onChange:f,onClick:E}=e;(j=e["onUpdate:active"])==null||j.call(e,t),E==null||E(t),t!==s&&(f==null||f(t))},w=()=>T.find(({name:a})=>e.active===a.value),z=()=>T.find(({index:a})=>e.active===a.value),A=()=>{var t,s;if(d.value===0)return;const{active:a}=e;return ue(a)&&(a>d.value-1?(t=e["onUpdate:active"])==null||t.call(e,d.value-1):(s=e["onUpdate:active"])==null||s.call(e,0)),z()},u=()=>{i.value=T.length>=5},v=({element:a})=>{const t=a.value;e.layoutDirection==="horizontal"?(o.value=`${t==null?void 0:t.offsetWidth}px`,m.value=`${t==null?void 0:t.offsetLeft}px`):(n.value=`${t==null?void 0:t.offsetHeight}px`,y.value=`${t==null?void 0:t.offsetTop}px`)},p=({element:a})=>{if(!i.value)return;const t=h.value,s=a.value;if(e.layoutDirection==="horizontal"){const f=s.offsetLeft+s.offsetWidth/2-t.offsetWidth/2;F(t,{left:f,animation:W})}else{const f=s.offsetTop+s.offsetHeight/2-t.offsetHeight/2;F(t,{top:f,animation:W})}},r=()=>{const a=w()||z()||A();!a||a.disabled.value||(u(),v(a),p(a))};return k({active:C,activeColor:D,inactiveColor:c,disabledColor:S,itemDirection:$,resize:r,onTabClick:g}),B(()=>d.value,()=>ae().then(r)),B(()=>e.active,r),M(()=>window.addEventListener("resize",r)),Q(()=>window.removeEventListener("resize",r)),{indicatorWidth:o,indicatorHeight:n,indicatorX:m,indicatorY:y,scrollable:i,scrollerEl:h,Transition:J,toSizeUnit:ve,resize:r}}});function he(e,o,n,m,y,i){return H(),Z(te(e.sticky?"var-sticky":e.Transition),{"offset-top":e.sticky?e.offsetTop:null},{default:x(()=>[_("div",ee({class:["var-tabs var--box",[`var-tabs--item-${e.itemDirection}`,`var-tabs--layout-${e.layoutDirection}-padding`,e.elevation?"var-elevation--4":null,e.fixedBottom?"var-tabs--fixed-bottom":null]],style:{background:e.color}},e.$attrs),[_("div",{class:N(["var-tabs__tab-wrap",[e.scrollable?`var-tabs--layout-${e.layoutDirection}-scrollable`:null,`var-tabs--layout-${e.layoutDirection}`]]),ref:"scrollerEl"},[I(e.$slots,"default"),_("div",{class:N(["var-tabs__indicator",[`var-tabs--layout-${e.layoutDirection}-indicator`]]),style:V({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`,background:e.indicatorColor||e.activeColor})},null,6)],2)],16)]),_:3},8,["offset-top"])}var P=K(ye,[["render",he]]);P.install=function(e){e.component(P.name,P)};const Ce={name:{type:[String,Number]},disabled:{type:Boolean,default:!1},onClick:{type:Function}};function Te(){const{parentProvider:e,bindParent:o}=ce(O),{index:n}=de(R);if(!e||!o||!n)throw Error("<var-tab/> must in <var-tabs/>");return{index:n,tabs:e,bindTabs:o}}const pe=Y({name:"VarTab",directives:{Ripple:fe},props:Ce,setup(e){const o=b(null),n=l(()=>e.name),m=l(()=>e.disabled),y=l(()=>o.value),{index:i,tabs:h,bindTabs:C}=Te(),{onTabClick:D,active:c,activeColor:S,inactiveColor:$,disabledColor:T,itemDirection:k,resize:d}=h,g={name:n,index:i,disabled:m,element:y};C(g);const w=()=>{const{disabled:u,name:v}=e;return u?T.value:c.value===v||c.value===(i==null?void 0:i.value)?S.value:$.value},z=()=>{const{disabled:u,name:v}=e;return u?"var-tab--disabled":c.value===v||c.value===(i==null?void 0:i.value)?"var-tab--active":"var-tab--inactive"},A=u=>{const{disabled:v,name:p,onClick:r}=e;v||(r==null||r(p!=null?p:i.value,u),D(g))};return B(()=>e.name,d),B(()=>e.disabled,d),{tabEl:o,active:c,activeColor:S,inactiveColor:$,itemDirection:k,computeColorStyle:w,computeColorClass:z,handleClick:A}}});function Se(e,o,n,m,y,i){const h=oe("ripple");return ie((H(),ne("div",{class:N(["var-tab var--box",[e.computeColorClass(),`var-tab--${e.itemDirection}`]]),ref:"tabEl",style:V({color:e.computeColorStyle()}),onClick:o[0]||(o[0]=(...C)=>e.handleClick&&e.handleClick(...C))},[I(e.$slots,"default")],6)),[[h,{disabled:e.disabled}]])}var U=K(pe,[["render",Se]]);U.install=function(e){e.component(U.name,U)};export{P as T,U as a};
