"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[978],{1978:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(1609),s=a(6087),c=a(9491),l=a(8468),o=a(7143),i=a(7675),r=a(8969),u=a(3988),d=a(8559),m=a(4639),h=a(7677),b=a(8176),g=a(6427),p=a(431);const _=({name:e,icon:t,title:a,desc:s,subtitle:c,callback:o,tabIndex:i=0,isSelectedDefault:r,fullWidth:u=!1,className:d="checkbox-item"})=>{const[m,_]=(0,l.useState)(!1),[v,E]=(0,l.useState)(r),f=()=>{_(!m)};return(0,n.createElement)("div",null,(0,n.createElement)("div",{className:`${d} ${v&&`${d}--selected`} ${u&&`${d}--full-width`} ${m&&`${d}--shown`}`},(0,n.createElement)("div",{className:`${d}-container`},(0,n.createElement)(g.CheckboxControl,{checked:v,onChange:()=>{E(!v),o(e,!v)},className:`${d}-checkbox`}),(0,n.createElement)("div",{className:`${d}__contents`},(0,n.createElement)("div",{className:`${d}__contents-icon\n                                     ${v&&`${d}__contents-icon--selected`}\n                                     ${m&&`${d}__contents-icon--shown`}`},(0,n.createElement)("div",{style:{width:"35px",height:"35px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:`var(${t})`,filter:v?"invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)":"none"}})),(0,n.createElement)("div",{className:`${d}__contents-text`},(0,n.createElement)("div",{className:`${d}__contents-text-title ${v&&`${d}__contents-text-title--selected`}`},a),(0,n.createElement)("div",{className:`${d}__contents-text-subtitle`},c)),(0,n.createElement)("div",{className:`${d}__contents-help ${m?"highlighted":""}`,onClick:f,role:"button",onKeyDown:f,tabIndex:i},(0,n.createElement)(h.A,{icon:b.A,style:{width:"30px",height:"30px"}}))))),m&&(0,n.createElement)(p.A,{className:` ${d}__dropdown `,type:"dropdown"},(0,n.createElement)("div",{className:`${d}__desc ${u&&`${d}__desc--full-width`}`},s)))},v=({count:e})=>{const t=()=>{const t=[];for(let a=0;a<e;a++)t.push((0,n.createElement)(p.A,{type:"shine-placeholder",className:"checkbox-skeleton-item"}));return t};return(0,n.createElement)("div",{className:"checkbox-list"},(0,n.createElement)("div",{className:"checkbox-list-col"},t().slice(0,Math.floor(e/2))),(0,n.createElement)("div",{className:"checkbox-list-col"},t().slice(Math.floor(e/2),e)))},E=({callback:e,selectedItems:t,customItemsList:a})=>{const s=Object.keys(a).length,c=()=>{var s=[];for(const l in a){var c=a[l];const o=t[c.slug];s.push((0,n.createElement)(_,{name:c.slug,icon:c.icon,title:c.title,subtitle:c.subtitle,desc:c.desc,callback:e,isSelectedDefault:null!=o&&o}))}return s};return(0,n.createElement)("div",{className:"checkbox-list"},(0,n.createElement)("div",{className:"checkbox-list-col"},c().slice(0,Math.floor(s/2))),(0,n.createElement)("div",{className:"checkbox-list-col"},c().slice(Math.floor(s/2),s)))};var f=a(7723);var w=a(3474);const k=()=>{const e={title:(0,f.__)("Coming Soon","wp-module-onboarding"),subtitle:(0,f.sprintf)(/* translators: %s: site or store */ /* translators: %s: site or store */
(0,f.__)("Keep your %s private until you click launch","wp-module-onboarding"),(0,w.P)("site")),desc:(0,f.sprintf)(/* translators: %s: site or store */ /* translators: %s: site or store */
(0,f.__)("We'll show a placeholder page to logged-out visitors while you build your %s.","wp-module-onboarding"),(0,w.P)("site"))},{currentData:t}=(0,o.useSelect)((e=>({currentData:e(i.M).getCurrentOnboardingData()})),[]),{setCurrentOnboardingData:a}=(0,o.useDispatch)(i.M);return(0,n.createElement)("div",{className:"coming_soon__wrapper"},(0,n.createElement)(_,{name:"coming_soon",title:e.title,subtitle:e.subtitle,icon:"--site-features-comingsoon",desc:e.desc,callback:async function(e,n){t.data.comingSoon=n,a(t)},fullWidth:!0,isSelectedDefault:t?.data?.comingSoon}))},$=()=>{const e=(0,c.useViewportMatch)("medium"),[t,a]=(0,l.useState)(),[h,b]=(0,l.useState)(),{setIsDrawerOpened:g,setDrawerActiveView:p,setSidebarActiveView:_,setCurrentOnboardingData:w,setIsDrawerSuppressed:$,setIsHeaderNavigationEnabled:x}=(0,o.useDispatch)(i.M),{currentStep:N,currentData:y,themeVariations:S}=(0,o.useSelect)((e=>({currentStep:e(i.M).getCurrentStep(),currentData:e(i.M).getCurrentOnboardingData(),themeVariations:e(i.M).getStepPreviewData()})),[]);(0,l.useEffect)((()=>{e&&g(!1),_(r.Qe),$(!1),p(r.vO),x(!0),async function(){const e=await(0,d.ze)();(0,s.isEmpty)(y?.data?.siteFeatures)?async function(e,t=!1){const n={};for(const t in e){const a=e[t];n[a.slug]=a.selected}a(n),t&&(y.data.siteFeatures={...n},w(y))}(e.body,!0):a({...y?.data?.siteFeatures}),b(e.body)}()}),[]);const D={heading:(0,f.__)("Key features to supercharge your site","wp-module-onboarding"),subheading:(0,f.__)("Our toolbox of Plugins & Services is your toolbox.","wp-module-onboarding")};return(0,n.createElement)(u.A,null,(0,n.createElement)("div",{className:"site-features__heading"},(0,n.createElement)(m.A,{title:D.heading,subtitle:D.subheading})),!h&&(0,n.createElement)(v,{count:S[N?.data?.patternId]?.previewCount}),h&&(0,n.createElement)(E,{callback:async function(e,n){const s={...t};s[e]=n,a(s),y.data.siteFeatures={...s},w(y)},selectedItems:t,customItemsList:h}),h&&(0,n.createElement)(k,null))}}}]);