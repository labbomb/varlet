var pe=Object.defineProperty,he=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var I=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))fe.call(t,o)&&I(e,o,t[o]);if(O)for(var o of O(t))ge.call(t,o)&&I(e,o,t[o]);return e},U=(e,t)=>he(e,me(t));import{r as k,D as ye,E as ve,O as Se,P as be,C as D,x as Ce,g as ze,d as C,y as Ne,o as l,l as F,p as u,n as z,Q as we,z as Ue,e as V,c as d,G as y,h as f,a as g,i as ke,m as M,t as j,q,F as $,k as X,f as $e,w as Le}from"./vendor.8243c41e.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};Te();const xe="Varlet",Ee="var",Pe="localhost",_e=8080,Be="VARLET",Re="VARLET_THEMES",Ae="https://varlet.gitee.io/varlet-ui/varlet_icon.png",Oe="zh-CN",Ie={style:"./highlight.css"},De={baidu:"https://hm.baidu.com/hm.js?5c628ce58967c90ff4dd9c8803d930fa"},Fe=!0,Ve={menu:[{text:{"zh-CN":"\u5F00\u53D1\u6307\u5357","en-US":"Developer guide"},type:1},{text:{"zh-CN":"\u57FA\u672C\u4ECB\u7ECD","en-US":"Basic Introduce"},doc:"home",type:3},{text:{"zh-CN":"\u5FEB\u901F\u5F00\u59CB","en-US":"Quickstart"},doc:"quickstart",type:3},{text:{"zh-CN":"\u6309\u9700\u5F15\u5165","en-US":"Import on demand"},doc:"importOnDemand",type:3},{text:{"zh-CN":"\u6697\u9ED1\u6A21\u5F0F","en-US":"Dark Mode"},doc:"themes",type:2},{text:{"zh-CN":"\u6D4F\u89C8\u5668\u9002\u914D","en-US":"Browser Adaptation"},doc:"browserAdaptation",type:3},{text:{"zh-CN":"\u56FD\u9645\u5316","en-US":"Locale"},doc:"locale",type:3},{text:{"zh-CN":"\u5F00\u53D1\u5DE5\u5177\u652F\u6301","en-US":"IDE Code Support"},doc:"ide",type:3},{text:{"zh-CN":"\u7EC4\u4EF6\u5E93\u5FEB\u901F\u6210\u578B\u5DE5\u5177","en-US":"Components Library Tools"},doc:"cli",type:3},{text:{"zh-CN":"\u5F00\u6E90\u6307\u5357","en-US":"Open Source Guide"},doc:"openSourceGuide",type:3},{text:{"zh-CN":"\u57FA\u7840\u7EC4\u4EF6","en-US":"Basic Components"},type:1},{text:{"zh-CN":"StyleProvider \u6837\u5F0F\u5B9A\u5236","en-US":"StyleProvider"},doc:"style-provider",type:2},{text:{"zh-CN":"Button \u6309\u94AE","en-US":"Button"},doc:"button",type:2},{text:{"zh-CN":"Cell \u5355\u5143\u683C","en-US":"Cell"},doc:"cell",type:2},{text:{"zh-CN":"Icon \u56FE\u6807","en-US":"Icon"},doc:"icon",type:2},{text:{"zh-CN":"Image \u56FE\u7247","en-US":"Image"},doc:"image",type:2},{text:{"zh-CN":"Loading \u52A0\u8F7D","en-US":"Loading"},doc:"loading",type:2},{text:{"zh-CN":"Chip \u7EB8\u7247","en-US":"Chip"},doc:"chip",type:2},{text:{"zh-CN":"Badge \u5FBD\u6807","en-US":"Badge"},doc:"badge",type:2},{text:{"zh-CN":"Elevation \u6D77\u62D4\u6548\u679C","en-US":"Elevation"},doc:"styles",type:2},{text:{"zh-CN":"\u5C55\u793A\u7EC4\u4EF6","en-US":"Display Components"},type:1},{text:{"zh-CN":"Skeleton \u9AA8\u67B6\u5C4F","en-US":"Skeleton"},doc:"skeleton",type:2},{text:{"zh-CN":"Collapse \u62D3\u5C55\u9762\u677F","en-US":"Collapse"},doc:"collapse",type:2},{text:{"zh-CN":"Space \u95F4\u9694","en-US":"Space"},doc:"space",type:2},{text:{"zh-CN":"Layout \u5E03\u5C40","en-US":"Layout"},doc:"row",type:2},{text:{"zh-CN":"Sticky \u7C98\u6027\u5E03\u5C40","en-US":"Sticky"},doc:"sticky",type:2},{text:{"zh-CN":"Progress \u8FDB\u5EA6\u6761","en-US":"Progress"},doc:"progress",type:2},{text:{"zh-CN":"List \u65E0\u9650\u6EDA\u52A8\u5217\u8868","en-US":"List"},doc:"list",type:2},{text:{"zh-CN":"Swipe \u8F6E\u64AD","en-US":"Swipe"},doc:"swipe",type:2},{text:{"zh-CN":"Steps \u6B65\u9AA4\u6761","en-US":"Steps"},doc:"steps",type:2},{text:{"zh-CN":"ImagePreview \u56FE\u7247\u9884\u89C8","en-US":"ImagePreview"},doc:"image-preview",type:2},{text:{"zh-CN":"Card \u5361\u7247","en-US":"Card"},doc:"card",type:2},{text:{"zh-CN":"Divider \u5206\u5272\u7EBF","en-US":"Divider"},doc:"divider",type:2},{text:{"zh-CN":"Table \u8868\u683C","en-US":"Table"},doc:"table",type:2},{text:{"zh-CN":"\u5BFC\u822A\u7EC4\u4EF6","en-US":"Navigation Components"},type:1},{text:{"zh-CN":"Tabs \u9009\u9879\u5361","en-US":"Tabs"},doc:"tabs",type:2},{text:{"zh-CN":"IndexBar \u7D22\u5F15\u680F","en-US":"IndexBar"},doc:"index-bar",type:2},{text:{"zh-CN":"AppBar \u5BFC\u822A\u680F","en-US":"AppBar"},doc:"app-bar",type:2},{text:{"zh-CN":"\u529F\u80FD\u6307\u4EE4","en-US":"Functional Directives"},type:1},{text:{"zh-CN":"Ripple \u6C34\u6CE2\u6307\u4EE4","en-US":"Ripple"},doc:"ripple",type:2},{text:{"zh-CN":"Lazy \u61D2\u52A0\u8F7D","en-US":"Lazy"},doc:"lazy",type:2},{text:{"zh-CN":"\u53CD\u9988\u7EC4\u4EF6","en-US":"Action Components"},type:1},{text:{"zh-CN":"Snackbar \u6D88\u606F\u6761","en-US":"Snackbar"},doc:"snackbar",type:2},{text:{"zh-CN":"ActionSheet \u52A8\u4F5C\u9762\u677F","en-US":"ActionSheet"},doc:"action-sheet",type:2},{text:{"zh-CN":"Dialog \u5BF9\u8BDD\u6846","en-US":"Dialog"},doc:"dialog",type:2},{text:{"zh-CN":"PullRefresh \u4E0B\u62C9\u5237\u65B0","en-US":"PullRefresh"},doc:"pull-refresh",type:2},{text:{"zh-CN":"Popup \u5F39\u51FA\u5C42","en-US":"Popup"},doc:"popup",type:2},{text:{"zh-CN":"Pagination \u5206\u9875","en-US":"Pagination"},doc:"pagination",type:2},{text:{"zh-CN":"Menu \u83DC\u5355","en-US":"Menu"},doc:"menu",type:2},{text:{"zh-CN":"BackTop \u56DE\u5230\u9876\u90E8","en-US":"BackTop"},doc:"back-top",type:2},{text:{"zh-CN":"Countdown \u5012\u8BA1\u65F6","en-US":"Countdown"},doc:"countdown",type:2},{text:{"zh-CN":"Picker \u591A\u5217\u9009\u62E9\u5668","en-US":"Picker"},doc:"picker",type:2},{text:{"zh-CN":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","en-US":"DatePicker"},doc:"date-picker",type:2},{text:{"zh-CN":"TimePicker \u65F6\u95F4\u9009\u62E9\u5668","en-US":"TimePicker"},doc:"time-picker",type:2},{text:{"zh-CN":"\u8868\u5355\u7EC4\u4EF6","en-US":"Form Components"},type:1},{text:{"zh-CN":"Form \u8868\u5355","en-US":"Form"},doc:"form",type:2},{text:{"zh-CN":"Input \u8F93\u5165\u6846","en-US":"Input"},doc:"input",type:2},{text:{"zh-CN":"Select \u9009\u62E9\u6846","en-US":"Select"},doc:"select",type:2},{text:{"zh-CN":"Radio \u5355\u9009\u6846","en-US":"Radio"},doc:"radio-group",type:2},{text:{"zh-CN":"Checkbox \u590D\u9009\u6846","en-US":"Checkbox"},doc:"checkbox-group",type:2},{text:{"zh-CN":"Counter \u8BA1\u6570\u5668","en-US":"Counter"},doc:"counter",type:2},{text:{"zh-CN":"Switch \u5F00\u5173","en-US":"Switch"},doc:"switch",type:2},{text:{"zh-CN":"Slider \u6ED1\u5757","en-US":"slider"},doc:"slider",type:2},{text:{"zh-CN":"Rate \u8BC4\u5206","en-US":"Rate"},doc:"rate",type:2},{text:{"zh-CN":"Uploader \u6587\u4EF6\u4E0A\u4F20","en-US":"Uploader"},doc:"uploader",type:2}],redirect:"/home",title:{"zh-CN":"Varlet \u9762\u5411Vue3\u7684Material\u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/haoziqaq/varlet",darkMode:!0},clipboard:{"zh-CN":"\u4EE3\u7801\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F","en-US":"The code has been copied to the clipboard"},fold:{message:{"zh-CN":"\u5DF2\u663E\u793A\u5B8C\u6574\u4EE3\u7801","en-US":"Complete code displayed"},defaultFold:!0,foldHeight:60}},Me={redirect:"/home",title:{"zh-CN":"Varlet \u9762\u5411Vue3\u7684Material\u98CE\u683C\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93","en-US":"Material design mobile components built for Vue3"},header:{i18n:{"zh-CN":"\u4E2D\u6587","en-US":"English"},github:"https://github.com/haoziqaq/varlet",darkMode:!0}},je={"color-body":"#fff","color-bar":"#fff","color-sub-bar":"#f5f5f5","color-text":"#555","color-sub-text":"#888","color-border":"rgba(0, 0, 0, 0.12)","color-shadow":"#eee","color-introduce-border":"#2196f3","color-primary":"#2196f3","color-link":"#00c48f","color-type":"#00c48f","color-progress":"#1d92e9","color-progress-track":"#fff","color-side-bar":"#3a7afe","color-side-bar-active-background":"#3a7afe1a","color-app-bar":"#3a7afe","color-nav-button-hover-background":"rgba(0, 0, 0, 0.08)","color-mobile-cell-hover":"#3a7afe","color-pc-language-active":"#3a7afe","color-pc-language-active-background":"#edf5ff","color-mobile-language-active":"#3a7afe","color-mobile-language-active-background":"#edf5ff"},qe={"color-body":"#121212","color-bar":"#1e1e1e","color-sub-bar":"#272727","color-text":"#fff","color-sub-text":"#aaa","color-border":"#333","color-shadow":"#121212","color-introduce-border":"#555","color-primary":"#5580f8","color-link":"#10c48f","color-type":"#10c48f","color-progress":"#5580f8","color-progress-track":"#202020","color-side-bar":"#4a7afe","color-side-bar-active-background":"#4a7afe1a","color-app-bar":"#4a7afe","color-nav-button-hover-background":"rgba(255, 255, 255, 0.08)","color-mobile-cell-hover":"#4a7afe","color-pc-language-active":"#4a7afe","color-pc-language-active-background":"#4a7afe20","color-mobile-language-active":"#4a7afe","color-mobile-language-active-background":"#4a7afe20"},Xe={"import dayjs from 'dayjs/esm'\n":`import dayjs from 'dayjs'
`,"import isSameOrBefore from 'dayjs/esm/plugin/isSameOrBefore'\n":`import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
`,"import isSameOrAfter from 'dayjs/esm/plugin/isSameOrAfter'\n":`import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
`};var jt={name:xe,namespace:Ee,host:Pe,port:_e,title:Be,themesKey:Re,logo:Ae,defaultLanguage:Oe,highlight:Ie,analysis:De,useMobile:Fe,pc:Ve,mobile:Me,themes:je,darkThemes:qe,moduleCompatible:Xe},N=(e,t)=>{for(const[o,n]of t)e[o]=n;return e};const w=e=>e==null?0:p(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):Ke(e)?Number(e):e,qt=e=>Object.prototype.toString.call(e)==="[object Object]";function Ye(e){const t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()}const p=e=>typeof e=="string",Ke=e=>typeof e=="boolean",Y=e=>typeof e=="number",He=e=>/^(http)|(\.*\/)/.test(e),K=e=>p(e)&&e.endsWith("rem"),We=e=>p(e)&&e.endsWith("px")||Y(e),Ge=e=>p(e)&&e.endsWith("%"),H=e=>p(e)&&e.endsWith("vw"),W=e=>p(e)&&e.endsWith("vh"),Qe=e=>{if(Y(e))return e;if(We(e))return+e.replace("px","");if(H(e))return+e.replace("vw","")*window.innerWidth/100;if(W(e))return+e.replace("vh","")*window.innerHeight/100;if(K(e)){const t=+e.replace("rem",""),o=window.getComputedStyle(document.documentElement).fontSize;return t*parseFloat(o)}return p(e)?w(e):0},Ze=e=>e==null?null:Ge(e)||H(e)||W(e)||K(e)?e:`${Qe(e)}px`;function Je(e){return Object.entries(e!=null?e:{}).reduce((t,[o,n])=>{const r=o.startsWith("--")?o:`--${Ye(o)}`;return t[r]=n,t},{})}function Xt(){return new Promise(e=>{requestAnimationFrame(()=>{requestAnimationFrame(e)})})}function G(e,t){return Array.isArray(t)?t.reduce((o,n)=>(o[n]=e[n],o),{}):e[t]}function et(e){const t=Se(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}function Yt(e,t={},o={}){const n={setup(){return()=>be(e,m(m({},t),o))}},{unmount:r}=et(n);return{unmountInstance:r}}function Kt(){const e=k(!1);return ye(()=>{e.value=!1}),ve(()=>{e.value=!0}),{disabled:e}}const L=[];function tt(e={}){L.forEach(o=>document.documentElement.style.removeProperty(o)),L.length=0;const t=Je(e);Object.entries(t).forEach(([o,n])=>{document.documentElement.style.setProperty(o,n),L.push(o)})}function ot(e){return e.replace(/-(\w)/g,(t,o)=>o.toUpperCase())}function Ht(e){return ot(e).replace(e.charAt(0),e.charAt(0).toUpperCase())}function nt(){const[,e,t]=window.location.hash.split("/");return{language:e,menuName:t}}function Wt(){return/Android|webOS|iPhone|iPod|BlackBerry|Pad/i.test(navigator.userAgent)}var Q;(function(e){e[e.TITLE=1]="TITLE",e[e.COMPONENT=2]="COMPONENT",e[e.DOCUMENTATION=3]="DOCUMENTATION"})(Q||(Q={}));function Gt(){return window.self!==window.top}function Qt(e={}){return Object.keys(e).reduce((t,o)=>{const n=e[o];return n&&(t[o]=n),t},{})}function Z(){const{href:e}=window.location,t=e.slice(e.indexOf("?"));return new URLSearchParams(t)}function Zt(e,t="mobile"){const o=()=>{var r;const n=t==="mobile"?(r=Z().get("language"))!=null?r:"zh-CN":nt().language;e(n)};J(o),o()}function Jt(e){const t=()=>{var n;const o=(n=Z().get("platform"))!=null?n:"mobile";e(o)};J(t),t()}function eo(e,t=!0){const o=n=>{const{data:r}=n;r.action==="themesChange"&&e(r.data,r.from)};window.addEventListener("message",o),t&&D(()=>{window.removeEventListener("message",o)}),e(rt(),"default")}function J(e){Ce(()=>{window.addEventListener("hashchange",e),window.addEventListener("popstate",e)}),D(()=>{window.removeEventListener("hashchange",e),window.removeEventListener("popstate",e)})}function to(e,t){const o=ze(e,t,{}),n=Object.entries(o).reduce((r,[a,i])=>(r[`--site-config-${a}`]=i,r),{});tt(n)}function rt(e="VARLET_THEMES"){var o;let t=window.localStorage.getItem(e);return t||(t=((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-color-scheme: dark)").matches)?"darkThemes":"themes",window.localStorage.setItem(e,t)),t}const it="ontouchstart"in window;let T=!1,h;const ee=e=>e==="mousedown",at=e=>e==="mousemove",x=e=>e==="mouseup",st=e=>ee(e)||!h||h&&!h.dispatchEvent;function ct(e,t,o){const{clientX:n,clientY:r,screenX:a,screenY:i,pageX:c,pageY:s}=o;this.identifier=t,this.target=e,this.clientX=n,this.clientY=r,this.screenX=a,this.screenY=i,this.pageX=c,this.pageY=s}function lt(e){const t=E();return t.push(new ct(h,1,e)),t}function E(){const e=[];return e.item=function(t){return this[t]||null},e}function te(e){const{type:t}=e;return x(t)?E():lt(e)}function dt(e,t){const{altKey:o,ctrlKey:n,metaKey:r,shiftKey:a}=t,i=document.createEvent("Event");i.initEvent(e,!0,!0),i.altKey=o,i.ctrlKey=n,i.metaKey=r,i.shiftKey=a,i.touches=te(t),i.targetTouches=te(t),i.changedTouches=E(),h.dispatchEvent(i)}function P(e,t){const{type:o,target:n}=e;T=ee(o)?!0:x(o)?!1:T,!(at(o)&&!T)&&(st(o)&&(h=n),dt(t,e),x(o)&&(h=null))}function ut(){window.addEventListener("mousedown",e=>P(e,"touchstart"),!0),window.addEventListener("mousemove",e=>P(e,"touchmove"),!0),window.addEventListener("mouseup",e=>P(e,"touchend"),!0)}it||ut();const pt="modulepreload",oe={},ht="./",oo=function(t,o){return!o||o.length===0?t():Promise.all(o.map(n=>{if(n=`${ht}${n}`,n in oe)return;oe[n]=!0;const r=n.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":pt,r||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),r)return new Promise((c,s)=>{i.addEventListener("load",c),i.addEventListener("error",s)})})).then(()=>t())},mt={name:{type:String},size:{type:[Number,String]},color:{type:String},namespace:{type:String,default:"var-icon"},transition:{type:[Number,String],default:0},onClick:{type:Function}};const ft=C({name:"VarSiteIcon",props:mt,setup(e){const t=k(""),o=k(!1);return Ne(()=>e.name,async(r,a)=>{const{transition:i}=e;if(a==null||w(i)===0){t.value=r;return}o.value=!0,await Ue(),setTimeout(()=>{a!=null&&(t.value=r),o.value=!1},w(i))},{immediate:!0}),{nextName:t,shrinking:o,isURL:He,toNumber:w,toSizeUnit:Ze}}});function gt(e,t,o,n,r,a){return l(),F(we(e.isURL(e.name)?"img":"i"),{class:u(["var-site-icon",[`${e.namespace}--set`,e.isURL(e.name)?"var-site-icon__image":`${e.namespace}-${e.nextName}`,e.shrinking?"var-site-icon--shrinking":null]]),style:z({color:e.color,transition:`all ${e.toNumber(e.transition)}ms`,width:e.isURL(e.name)?e.toSizeUnit(e.size):null,height:e.isURL(e.name)?e.toSizeUnit(e.size):null,fontSize:e.toSizeUnit(e.size)}),src:e.isURL(e.name)?e.nextName:null,onClick:e.onClick},null,8,["class","style","src","onClick"])}var v=N(ft,[["render",gt]]);v.install=function(e){e.component(v.name,v)};const yt={title:{type:[Number,String]},icon:{type:String},desc:{type:String},border:{type:Boolean,default:!1},iconClass:{type:String},titleClass:{type:String},descClass:{type:String},extraClass:{type:String}};const vt=C({name:"VarSiteCell",components:{[v.name]:v},props:yt}),St={class:"var-site-cell__content"};function bt(e,t,o,n,r,a){const i=V("var-site-icon");return l(),d("div",{class:u(["var-site-cell",[e.border?"var-site-cell--border":null]])},[e.$slots.icon||e.icon?(l(),d("div",{key:0,class:u(["var-site-cell__icon",[e.iconClass?e.iconClass:null]])},[y(e.$slots,"icon",{},()=>[ke(i,{class:"var-site--flex",name:e.icon},null,8,["name"])])],2)):f("v-if",!0),g("div",St,[g("div",{class:u(["var-site-cell__title",[e.titleClass?e.titleClass:null]])},[y(e.$slots,"default",{},()=>[M(j(e.title),1)])],2),e.$slots.desc||e.desc?(l(),d("div",{key:0,class:u(["var-site-cell__desc",[e.descClass?e.descClass:null]])},[y(e.$slots,"desc",{},()=>[M(j(e.desc),1)])],2)):f("v-if",!0)]),e.$slots.extra?(l(),d("div",{key:1,class:u(["var-site-cell__extra",[e.extraClass?e.extraClass:null]])},[y(e.$slots,"extra")],2)):f("v-if",!0)],2)}var _=N(vt,[["render",bt]]);_.install=function(e){e.component(_.name,_)};const ne={locks:{},zIndex:2e3,touchmoveForbid:!0};q(ne);var re=q(ne);const ie=250;function Ct(e){const{zIndex:t,position:o}=window.getComputedStyle(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",o==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function zt(e,t){const{top:o,left:n}=e.getBoundingClientRect(),{clientWidth:r,clientHeight:a}=e,i=Math.sqrt(r**2+a**2)/2,c=i*2,s=t.touches[0].clientX-n,b=t.touches[0].clientY-o,ce=(r-i*2)/2,le=(a-i*2)/2,de=s-i,ue=b-i;return{x:de,y:ue,centerX:ce,centerY:le,size:c}}function ae(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker)return;const o=()=>{var b;t.tasker=null;const{x:n,y:r,centerX:a,centerY:i,size:c}=zt(this,e),s=document.createElement("div");s.classList.add("var-site-ripple"),s.style.opacity="0",s.style.transform=`translate(${n}px, ${r}px) scale3d(.3, .3, .3)`,s.style.width=`${c}px`,s.style.height=`${c}px`,s.style.backgroundColor=(b=t.color)!=null?b:"currentColor",s.dataset.createdAt=String(performance.now()),Ct(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform=`translate(${a}px, ${i}px) scale3d(1, 1, 1)`,s.style.opacity=".25"},20)};t.tasker=window.setTimeout(o,60)}function B(){const e=this._ripple,t=()=>{const o=this.querySelectorAll(".var-site-ripple");if(!o.length)return;const n=o[o.length-1],r=ie-performance.now()+Number(n.dataset.createdAt);setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)},ie)},r)};e.tasker?setTimeout(t,60):t()}function se(){const e=this._ripple;!e.touchmoveForbid||(e.tasker&&window.clearTimeout(e.tasker),e.tasker=null)}function Nt(e,t){var o,n,r;e._ripple=U(m({tasker:null},(o=t.value)!=null?o:{}),{touchmoveForbid:(r=(n=t.value)==null?void 0:n.touchmoveForbid)!=null?r:re.touchmoveForbid,removeRipple:B.bind(e)}),e.addEventListener("touchstart",ae,{passive:!0}),e.addEventListener("touchmove",se,{passive:!0}),e.addEventListener("dragstart",B,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0})}function wt(e){e.removeEventListener("touchstart",ae),e.removeEventListener("touchmove",se),e.removeEventListener("dragstart",B),document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple)}function Ut(e,t){var o,n,r;e._ripple=U(m(m({},e._ripple),(o=t.value)!=null?o:{}),{touchmoveForbid:(r=(n=t.value)==null?void 0:n.touchmoveForbid)!=null?r:re.touchmoveForbid,tasker:null})}const kt={mounted:Nt,unmounted:wt,updated:Ut,install(e){e.directive("ripple",this)}};function $t(e){return["circle","wave","cube","rect","disappear"].includes(e)}function Lt(e){return["normal","mini","small","large"].includes(e)}const R={type:{type:String,default:"circle",validator:$t},radius:{type:[String,Number],default:15},size:{type:String,default:"normal",validator:Lt},color:{type:String,default:"currentColor"}};const Tt=C({name:"VarSiteLoading",props:R,setup(){return{loadingTypeDict:{wave:5,cube:4,rect:8,disappear:3}}}}),xt={class:"var-site--box var-site-loading"},Et={key:0,class:"var-site-loading__circle"},Pt=g("svg",{viewBox:"25 25 50 50"},[g("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1),_t=[Pt];function Bt(e,t,o,n,r,a){return l(),d("div",xt,[e.type==="circle"?(l(),d("div",Et,[g("span",{class:"var-site-loading__circle-block",style:z({width:e.radius*2+"px",height:e.radius*2+"px"})},_t,4)])):f("v-if",!0),(l(!0),d($,null,X(e.loadingTypeDict,(i,c)=>(l(),d($,{key:c},[e.type===c?(l(),d("div",{key:0,class:u(`var-site-loading__${c} var-site-loading__${c}-${e.size}`)},[(l(!0),d($,null,X(i,s=>(l(),d("div",{key:s+c,style:z({backgroundColor:e.color}),class:u(`var-site-loading__${c}-item var-site-loading__${c}-item-${e.size}`)},null,6))),128))],2)):f("v-if",!0)],64))),128))])}var S=N(Tt,[["render",Bt]]);S.install=function(e){e.component(S.name,S)};function Rt(e){return["default","primary","info","success","warning","danger"].includes(e)}function At(e){return["normal","mini","small","large"].includes(e)}const Ot={type:{type:String,default:"default",validator:Rt},size:{type:String,default:"normal",validator:At},loading:{type:Boolean,default:!1},round:{type:Boolean,default:!1},block:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},color:{type:String},textColor:{type:String},loadingRadius:{type:[Number,String],default:12},loadingType:G(R,"type"),loadingSize:G(R,"size"),onClick:{type:Function},onTouchstart:{type:Function}};const It=C({name:"VarSiteButton",components:{[S.name]:S},directives:{Ripple:kt},props:Ot,setup(e){return{handleClick:n=>{const{loading:r,disabled:a,onClick:i}=e;r||a||i==null||i(n)},handleTouchstart:n=>{const{loading:r,disabled:a,onTouchstart:i}=e;r||a||i==null||i(n)}}}}),Dt=["disabled"];function Ft(e,t,o,n,r,a){const i=V("var-site-loading"),c=$e("ripple");return Le((l(),d("button",{class:u(["var-site-button var-site--box",[`var-site-button--${e.size}`,e.block?"var-site--flex var-site-button--block":"var-site--inline-flex",e.disabled?"var-site-button--disabled":null,e.text?`var-site-button--text-${e.type}`:`var-site-button--${e.type}`,e.text?"var-site-button--text":"var-elevation--1",e.text&&e.disabled?"var-site-button--text-disabled":null,e.round?"var-site-button--round":null,e.outline?"var-site-button--outline":null]]),style:z({color:e.textColor,background:e.color}),disabled:e.disabled,onClick:t[0]||(t[0]=(...s)=>e.handleClick&&e.handleClick(...s)),onTouchstart:t[1]||(t[1]=(...s)=>e.handleTouchstart&&e.handleTouchstart(...s))},[e.loading?(l(),F(i,{key:0,class:"var-site-button__loading",type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["type","size","radius"])):f("v-if",!0),g("div",{class:u(["var-site-button__content",[e.loading?"var-site-button--hidden":null]])},[y(e.$slots,"default")],2)],46,Dt)),[[c,{disabled:e.disabled||!e.ripple}]])}var A=N(It,[["render",Ft]]);A.install=function(e){e.component(A.name,A)};export{A as B,_ as C,v as I,S as L,Q as M,kt as R,N as _,nt as a,oo as b,jt as c,re as d,R as e,qt as f,rt as g,Xt as h,Wt as i,Zt as j,Gt as k,Ht as l,Yt as m,Jt as n,G as p,Qt as r,to as s,w as t,Kt as u,eo as w};
