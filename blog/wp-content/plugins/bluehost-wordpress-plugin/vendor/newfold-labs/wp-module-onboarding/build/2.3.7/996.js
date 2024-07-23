"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[996],{8053:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(1609),o=a(5573);const i=(0,n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},6999:(e,t,a)=>{a.d(t,{A:()=>u});var n=a(1609),o=a(6942),i=a.n(o),r=a(148),s=a(7143),l=a(6427),d=a(7677),g=a(6655),c=a(7675);const u=({text:e,className:t,callback:a=null,disabled:o=!1,showChevronRight:u=!0})=>{const m=(0,r.Zp)(),{nextStep:_}=(0,s.useSelect)((e=>({nextStep:e(c.M).getNextStep()})));return(0,n.createElement)(l.Button,{className:i()("nfd-onboarding-button--site-gen-next",{"nfd-onboarding-button--site-gen-next--disabled":o},t),onClick:()=>{o||(a&&"function"==typeof a&&a(),_&&m(_.path))}},(0,n.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},e),u&&(0,n.createElement)(d.A,{className:"nfd-onboarding-button--site-gen-next--icon",icon:g.A}))}},513:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(1609),o=a(8468),i=a(7673);const r=(0,o.memo)((({title:e})=>(0,n.createElement)("div",{className:"ai-heading"},(0,n.createElement)(i.A,{height:"40px"}),(0,n.createElement)("div",{className:"ai-heading--title"},e))))},2607:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(1609),o=a(7723),i=a(8468),r=a(6427),s=a(7143),l=a(148),d=a(4371),g=a(6079),c=a(7675),u=a(2014),m=a(8969),_=a(2202),p=a(6942),f=a.n(p);const b=(0,i.memo)((({callback:e=!1,className:t,text:a})=>{const i=(0,l.Zp)(),p=(0,l.zy)(),{nextStep:b,currentData:h,socialData:w}=(0,s.useSelect)((e=>({nextStep:e(c.M).getNextStep(),currentData:e(c.M).getCurrentOnboardingData(),socialData:e(c.M).getOnboardingSocialData()})),[]),v=null===b||!1===b,{setOnboardingSocialData:x}=(0,s.useDispatch)(c.M);return(0,n.createElement)(r.Button,{className:f()("skip-button",t),onClick:v?()=>async function(e){if(h){if(h.isComplete=(new Date).getTime(),e?.includes("basic-info")){const e=await async function(){const e=await(0,u.mt)(),t=await(0,u.oc)(w);return null!==t?.error?e?.body:t?.body}();e&&x(e),await d.y.dispatchEvents(_.XJ)}(0,g.V1)(h)}window.location.replace(m.R0)}(p.pathname):()=>("function"==typeof e&&e(),void i(b.path))},a||(0,o.__)("Skip this Step","wp-module-onboarding"))}))},9996:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(1609),o=a(9491),i=a(8468),r=a(7143),s=a(3582),l=a(7723);var d=a(1056),g=a(2607),c=a(513),u=a(3988),m=a(6999),_=a(7677),p=a(8053),f=a(6942),b=a.n(f),h=a(5508),w=a.n(h),v=a(9645),x=a(8969),E=a(9269),N=a(6478);const S=(0,i.memo)((({image:e,imageSetter:t,onFailure:a})=>{const o=(0,i.useRef)(null),{theme:r}=(0,i.useContext)(E.D),[s,d]=(0,i.useState)(!1),[g,c]=(0,i.useState)(!1),[u,m]=(0,i.useState)("");async function f(e){if(e){d(!0);const a=await(0,v.V)(e);if(!a?.body)return d(!1),h(),!1;const n=a.body?.id,o=a.body?.source_url;e&&"image/png"===e.type&&((e,t)=>{const a=new Image;a.crossOrigin="Anonymous",a.onload=()=>{const e=document.createElement("canvas"),t=e.getContext("2d");e.width=a.width,e.height=a.height,t.drawImage(a,0,0);const n=t.getImageData(0,0,e.width,e.height).data;let o=0,i=0,r=0,s=0;for(let e=0;e<n.length;e+=4)n[e+3]>0&&(o+=n[e],i+=n[e+1],r+=n[e+2],s++);s>0&&(o=Math.floor(o/s),i=Math.floor(i/s),r=Math.floor(r/s)),(e=>{const t=(e=>{const[t,a,n]=e.match(/\d+/g).map(Number);return.2126*t+.7152*a+.0722*n>160?x.fS:x.Vw})(e);m(t)})(`rgb(${o}, ${i}, ${r})`)},a.src=e})(o),t({id:n,url:o,fileName:e?.name,fileSize:e?.size})}d(!1)}const h=()=>{if("function"==typeof a)return a()},S=!s&&0!==e?.id&&void 0!==e?.id,y=b()("nfd-onboarding-image-uploader--with-text",{"nfd-onboarding-image-uploader--with-text--on-drag":g,"nfd-onboarding-image-uploader--with-text--not-dashed":S,"nfd-onboarding-image-uploader--with-text--not-dashed__dark":S&&u===x.fS,"nfd-onboarding-image-uploader--with-text--not-dashed__light":S&&u===x.Vw});return(0,n.createElement)("div",{className:y,onDrop:e=>(e=>{e.preventDefault(),e.stopPropagation(),c(!1),e?.dataTransfer?.files&&e?.dataTransfer?.files.length>0&&"image"===e?.dataTransfer?.files[0]?.type.split("/")[0]&&f(e?.dataTransfer?.files[0])})(e),onDragOver:e=>(e=>{e.preventDefault(),e.stopPropagation(),c(!0)})(e),onDragEnter:e=>(e=>{e.preventDefault(),e.stopPropagation(),c(!0)})(e),onDragLeave:e=>(e=>{e.preventDefault(),e.stopPropagation(),c(!1)})(e)},s?(0,n.createElement)(N.A,null):(0,n.createElement)(n.Fragment,null,!S&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__heading"},(0,n.createElement)("div",{className:b()("nfd-onboarding-image-uploader--with-text__heading__icon",r===x.Vw?"nfd-onboarding-image-uploader--with-text__heading__icon--light":null)}),(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__heading__text"},(0,n.createElement)("span",{className:"nfd-onboarding-image-uploader--with-text__heading__text__drop"},(0,l.__)("Drop your logo here, or ","wp-module-onboarding")),(0,n.createElement)("button",{onClick:()=>{o?.current.click()},className:"nfd-onboarding-image-uploader--with-text__heading__text__modal"},(0,l.__)("browse","wp-module-onboarding")),(0,n.createElement)("input",{className:"nfd-onboarding-image-uploader--with-text__heading__text__input",accept:"image/*",type:"file",ref:o,onChange:e=>{e?.target?.files&&e?.target?.files.length>0&&f(e?.target?.files[0])}}))),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__subheading"},(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__subheading__text"},(0,l.__)("supports .jpg, .png, .gif","wp-module-onboarding")))),S&&(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview"},(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__wrapper"},(0,n.createElement)("img",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__image",src:e.url,alt:(0,l.__)("Site Logo Preview","wp-module-onboarding")})),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details"},(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details__filename"},e.fileName),(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details__filesize"},w()(e.fileSize))),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset"},(0,n.createElement)("button",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset__button",onClick:()=>{m(""),t({id:0,url:"",fileName:"",fileSize:0}),o?.current?.files.length>0&&(o.current.value="")}},(0,n.createElement)(_.A,{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset__button__icon",icon:p.A}))))))}));var y=a(7675),D=a(2202),k=a(8744);const C=()=>{const[e,t]=(0,i.useState)(),a=(0,o.useViewportMatch)("small"),{currentData:_}=(0,r.useSelect)((e=>({currentData:e(y.M).getCurrentOnboardingData()}))),{getEditedEntityRecord:p}=(0,r.useSelect)((e=>e(s.store)),[]),{editEntityRecord:f}=(0,r.useDispatch)(s.store),{setIsFooterNavAllowed:b,setIsHeaderEnabled:h,setSidebarActiveView:w,setHeaderActiveView:v,setDrawerActiveView:E,setHideFooterNav:N,setCurrentOnboardingData:C,setIsHeaderNavigationEnabled:A,updateSiteGenErrorStatus:L}=(0,r.useDispatch)(y.M);(0,i.useEffect)((()=>{if(N(!1),h(!0),w(!1),A(!0),v(x.Ix),E(!1),0!==_.sitegen.siteLogo?.id)return b(!0),t(_.sitegen.siteLogo);b(!1),p("root","site")}),[]);const M={heading:(0,l.__)("Do you have a logo you would like to use for this site?","wp-module-onboarding"),imageUploader:{subHeading:(0,l.__)("supports .jpg, .png, .svg","wp-module-onboarding")},buttons:{skip:(0,l.__)("Skip for now","wp-module-onboarding"),next:(0,l.__)("Next","wp-module-onboarding")}};return(0,n.createElement)(u.A,{isCentered:!0,className:"nfd-onboarding-step--site-gen__site-logo"},(0,n.createElement)("div",{className:"nfd-onboarding-step--site-gen__site-logo__container"},(0,n.createElement)(c.A,{title:M.heading}),(0,n.createElement)(S,{image:e,imageSetter:e=>{const a={..._};a.sitegen.siteLogo.id=e.id,a.sitegen.siteLogo.url=e.url,a.sitegen.siteLogo.fileName=e.fileName,a.sitegen.siteLogo.fileSize=e.fileSize,C(a),b(0!==e.id),f("root","site",void 0,{site_logo:e.id}),t(e)},onFailure:()=>{(0,d.v)(new d.iC(D.cW,"site-logo",{source:k.d0})),L(!0)}}),(0,n.createElement)("div",{className:"nfd-onboarding-step--site-gen__site-logo__container__buttons"},(0,n.createElement)(g.A,{callback:()=>(()=>{const e={..._};e.sitegen.siteLogo={id:0,url:"",fileName:"",fileSize:0},C(e),t(void 0),b(!1),(0,d.v)(new d.iC(D.Qp,void 0,{source:k.d0}))})(),className:"nfd-onboarding-step--site-gen__site-logo__container__buttons__skip",text:M.buttons.skip}),a&&(0,n.createElement)(m.A,{callback:()=>{e&&(0,d.v)(new d.iC(D.WT,void 0,{source:k.d0}))},text:M.buttons.next,disabled:void 0===e||0===e?.id}))))}},9645:(e,t,a)=>{a.d(t,{V:()=>s});var n=a(5435),o=a(8674),i=a(1455),r=a.n(i);async function s(e){const t=await function(e){return new Promise(((t,a)=>{const n=new FileReader;n.addEventListener("loadend",(e=>t(e.target.result))),n.addEventListener("error",a),n.readAsArrayBuffer(e)}))}(e),a={"Content-Type":"image/png"};return a["Content-Disposition"]="attachment; filename="+e.name,await(0,n.h)(r()({url:(0,o.zV)("media"),method:"POST",headers:a,body:t}))}},5508:e=>{e.exports=function(e,t){return"string"==typeof e?r(e):"number"==typeof e?i(e,t):null},e.exports.format=i,e.exports.parse=r;var t=/\B(?=(\d{3})+(?!\d))/g,a=/(?:\.0*|(\.[^0]+)0+)$/,n={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},o=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;function i(e,o){if(!Number.isFinite(e))return null;var i=Math.abs(e),r=o&&o.thousandsSeparator||"",s=o&&o.unitSeparator||"",l=o&&void 0!==o.decimalPlaces?o.decimalPlaces:2,d=Boolean(o&&o.fixedDecimals),g=o&&o.unit||"";g&&n[g.toLowerCase()]||(g=i>=n.pb?"PB":i>=n.tb?"TB":i>=n.gb?"GB":i>=n.mb?"MB":i>=n.kb?"KB":"B");var c=(e/n[g.toLowerCase()]).toFixed(l);return d||(c=c.replace(a,"$1")),r&&(c=c.split(".").map((function(e,a){return 0===a?e.replace(t,r):e})).join(".")),c+s+g}function r(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,a=o.exec(e),i="b";return a?(t=parseFloat(a[1]),i=a[4].toLowerCase()):(t=parseInt(e,10),i="b"),isNaN(t)?null:Math.floor(n[i]*t)}}}]);