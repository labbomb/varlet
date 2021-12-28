import{a as z}from"./components.101c5ac0.js";import{t as $}from"./shared.61f3a471.js";import{F as D,u as N}from"./provide.fd12b49f.js";import{L as F}from"./index.98cd9a0c.js";import{R as A}from"./index.b947dc5d.js";import{_ as R}from"./elevation.8fda2ce0.js";import{d as L,b as T,z as U,e as k,f as W,o as S,c as E,a as m,n as h,p as w,w as H,l as M,h as P,i as q}from"./vendor.8243c41e.js";const G={modelValue:{default:!1},activeValue:{default:!0},inactiveValue:{default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},color:{type:String},loadingColor:{type:String},closeColor:{type:String},size:{type:[String,Number],default:20},rules:{type:Array},ripple:{type:Boolean,default:!0},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};const I=L({name:"VarSwitch",components:{VarLoading:F,VarFormDetails:D},directives:{Ripple:A},props:G,setup(e){const{bindForm:s,form:a}=N(),{errorMessage:n,validateWithTrigger:b,validate:_,resetValidation:v}=z(),f=()=>_(e.rules,e.modelValue),g=()=>U(()=>b(["onChange"],"onChange",e.rules,e.modelValue)),y=T(()=>{const{size:t,modelValue:l,color:d,closeColor:c,loadingColor:p,activeValue:o}=e,i=$(t),u=i*2,r=i*1.2;return{handle:{width:`${t}px`,height:`${t}px`,backgroundColor:l===o?d||"":c||"",color:p&&p},ripple:{left:l===o?`${i/2}px`:`-${i/2}px`,color:l===o?d||"":c||"#999",width:`${i*2}px`,height:`${i*2}px`},track:{height:`${r*.6}px`,width:`${u-2}px`,borderRadius:`${u/3}px`,filter:l===o||(n==null?void 0:n.value)?"opacity(.6)":"brightness(.6)",backgroundColor:l===o?d||"":c||""},switch:{height:`${r}px`,width:`${u}px`}}}),B=()=>{const{onClick:t,onChange:l,disabled:d,loading:c,readonly:p,modelValue:o,activeValue:i,inactiveValue:u,"onUpdate:modelValue":r}=e;if(t==null||t(),d||c||p||(a==null?void 0:a.disabled.value)||(a==null?void 0:a.readonly.value))return;const C=o===i?u:i;l==null||l(C),r==null||r(C),g()},j={reset:()=>{var t;(t=e["onUpdate:modelValue"])==null||t.call(e,e.inactiveValue),v()},validate:f,resetValidation:v};return s==null||s(j),{switchActive:B,toNumber:$,styleComputed:y,errorMessage:n,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly}}}),J={class:"var-switch"};function K(e,s,a,n,b,_){const v=k("var-loading"),f=k("var-form-details"),g=W("ripple");return S(),E("div",J,[m("div",{class:w(["var-switch-block",[e.disabled||e.formDisabled?"var-switch__disable":null]]),onClick:s[0]||(s[0]=(...y)=>e.switchActive&&e.switchActive(...y)),style:h(e.styleComputed.switch)},[m("div",{style:h(e.styleComputed.track),class:w(["var-switch__track",[e.modelValue===e.activeValue?"var-switch__track-active":null,e.errorMessage?"var-switch__track-error":null]])},null,6),H(m("div",{class:"var-switch__ripple",style:h(e.styleComputed.ripple)},[m("div",{style:h(e.styleComputed.handle),class:w(["var-switch__handle var-elevation--2",[e.modelValue===e.activeValue?"var-switch__handle-active":null,e.errorMessage?"var-switch__handle-error":null]])},[e.loading?(S(),M(v,{key:0,radius:e.toNumber(e.size)/2-2},null,8,["radius"])):P("v-if",!0)],6)],4),[[g,{disabled:!e.ripple||e.disabled||e.loading||e.formDisabled}]])],6),q(f,{"error-message":e.errorMessage},null,8,["error-message"])])}var V=R(I,[["render",K]]);V.install=function(e){e.component(V.name,V)};export{V as S};
