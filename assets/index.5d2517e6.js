import{P as C}from"./PageWrapper.1edc03a2.js";import{s as b,ay as x,r as n,o as g,j as V,w as t,b as a,a as d,t as i,h as r}from"./vendor.0028b10d.js";import{_ as h}from"./index.554bc004.js";const k={name:"index",components:{PageWrapper:C},setup(){const p=b("Hello"),{text:o,copy:s,copied:e,isSupported:c}=x();return{input:p,text:o,copy:s,copied:e}}},v=r(" \u4F7F\u7528VueUse useClipboard "),w=r("\u67E5\u770B"),j=r(" Current copied: ");function B(p,o,s,e,c,N){const _=n("el-link"),u=n("el-button"),m=n("el-input"),f=n("el-card"),y=n("page-wrapper");return g(),V(y,{title:p.$route.meta.title},{content:t(()=>[v,a(_,{type:"primary",href:"https://vueuse.org/core/useClipboard/",target:"_blank"},{default:t(()=>[w]),_:1})]),default:t(()=>[a(f,{header:"Copy",shadow:"none"},{default:t(()=>[d("p",null,[j,d("code",null,i(e.text||"none"),1)]),a(m,{modelValue:e.input,"onUpdate:modelValue":o[1]||(o[1]=l=>e.input=l)},{append:t(()=>[a(u,{type:"primary",onClick:o[0]||(o[0]=l=>e.copy(e.input))},{default:t(()=>[r(i(e.copied?"Copied!":"Copy"),1)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["title"])}var W=h(k,[["render",B]]);export{W as default};
