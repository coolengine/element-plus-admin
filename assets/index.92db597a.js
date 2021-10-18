var O=Object.defineProperty;var g=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var A=(a,n,c)=>n in a?O(a,n,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[n]=c,w=(a,n)=>{for(var c in n||(n={}))U.call(n,c)&&A(a,c,n[c]);if(g)for(var c of g(n))G.call(n,c)&&A(a,c,n[c]);return a};import{B as v}from"./BasicCard.315dc898.js";import{u as $}from"./useECharts.c8a13223.js";import{_ as b}from"./index.f79016a2.js";import{d as B,o as u,j as h,b as t,r as o,w as e,a as s,h as d,B as R,a0 as T,E as C,c as j,i as M,t as F,F as P}from"./vendor.d1a101ef.js";import{B as k}from"./BasicQuery.vue_vue&type=style&index=0&scoped=true&lang.84d0fc91.js";import"./BasicForm.3ed78961.js";import"./BasicUpload.bbff0a92.js";var y=B({name:"Refresh"});const W={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},I=t("path",{fill:"currentColor",d:"M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"},null,-1);function J(a,n,c,p,m,f){return u(),h("svg",W,[I])}y.render=J;y.__file="packages/components/Refresh.vue";var q=y;const H=()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]}],yAxis:[{type:"value"}],series:[{name:"MEMORY USAGE",type:"bar",emphasis:{focus:"series"},data:[70,80,77,62,95,10,20,95,10,20,44,10,20,95]},{name:"CPU USAGE",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[50,70,35,60,100,33,58,80,77,62,95,10,33,80]}]}),E=()=>({tooltip:{},series:[{type:"pie",radius:["60%","100%"],label:{show:!1},data:[{value:1048,name:"wechat"},{value:735,name:"H5"},{value:580,name:"App"}]}]}),L=()=>({tooltip:{trigger:"axis"},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]}]}),N={name:"ServerStatus",components:{BasicCard:v}},Q=s("i",{class:"el-icon-menu"},null,-1),V=d(" \u7CFB\u7EDF "),z=d(" CentOS 8.2.2004 x86_64(Py3.7.8) "),X=s("i",{class:"el-icon-mobile-phone"},null,-1),K=d(" \u5185\u5B58 "),Y=d(" 16GB "),Z=s("i",{class:"el-icon-location-outline"},null,-1),ee=d(" \u786C\u76D8 "),te=d(" 20TB "),se=s("i",{class:"el-icon-tickets"},null,-1),ae=d(" CPU "),oe=d("16\u6838\u5FC3"),ne=s("i",{class:"el-icon-office-building"},null,-1),le=d(" \u5E26\u5BBD "),ce=d(" 100MB ");function ie(a,n,c,p,m,f){const l=o("el-descriptions-item"),r=o("el-tag"),i=o("el-descriptions"),_=o("BasicCard");return u(),h(_,{title:"System Info"},{default:e(()=>[t(i,{class:"mb10",column:1,border:""},{default:e(()=>[t(l,null,{label:e(()=>[Q,V]),default:e(()=>[z]),_:1}),t(l,null,{label:e(()=>[X,K]),default:e(()=>[Y]),_:1}),t(l,null,{label:e(()=>[Z,ee]),default:e(()=>[te]),_:1}),t(l,null,{label:e(()=>[se,ae]),default:e(()=>[t(r,{size:"small"},{default:e(()=>[oe]),_:1})]),_:1}),t(l,null,{label:e(()=>[ne,le]),default:e(()=>[ce]),_:1})]),_:1})]),_:1})}var re=b(N,[["render",ie]]);const de={name:"ServerStatus",components:{BasicCard:v},setup(){const{elRef:a,setOptions:n}=$(),{elRef:c,setOptions:p}=$(),{elRef:m,setOptions:f}=$();return R(()=>{n(H()),p(E()),f(E())}),{elRef:a,elRef2:c,elRef3:m}}},_e={ref:"elRef",style:{height:"300px",width:"100%"}},ue={ref:"elRef2",style:{height:"100px",width:"100%"}},pe=s("div",{class:"text-xs text-secondary"},"DISK USAGE",-1),me={class:"mt-1"},fe=s("span",null,"20GB / 256GB",-1),he=s("div",{class:"text-sm text-secondary mt-1"},[s("div",{class:"flex-row-justify"},[s("span",null,"/dev/disk1"),s("span",null,"19.56GB")]),s("div",{class:"flex-row-justify"},[s("span",null,"/dev/disk2"),s("span",null,"23.56GB")])],-1),be=s("div",{class:"mt-2 text-xs text-secondary"},"Last updated 1 min ago",-1),Se={ref:"elRef3",style:{height:"100px",width:"100%"}},xe=s("div",{class:"text-xs text-secondary"},"BANDWIDTH",-1),ve={class:"mt-1"},$e=s("span",null,"83GB / 10TB",-1),we=s("div",{class:"text-sm text-secondary mt-1"},[s("div",{class:"flex-row-justify"},[s("span",null,"HTTP"),s("span",null,"35.47GB")]),s("div",{class:"flex-row-justify"},[s("span",null,"FTP"),s("span",null,"12.25GB")])],-1),ye=s("div",{class:"mt-2 text-xs text-secondary"},"Last updated 1 min ago",-1);function ge(a,n,c,p,m,f){const l=o("el-col"),r=o("el-progress"),i=o("el-row"),_=o("BasicCard");return u(),h(_,{title:"Server Status"},{default:e(()=>[t(i,null,{default:e(()=>[t(l,{xs:24},{default:e(()=>[s("div",_e,null,512)]),_:1}),t(l,{span:12,xs:24,class:"mt10"},{default:e(()=>[t(i,{gutter:10},{default:e(()=>[t(l,{span:8,xs:6},{default:e(()=>[s("div",ue,null,512)]),_:1}),t(l,{span:16,xs:18},{default:e(()=>[pe,s("div",me,[fe,t(r,{class:"mt-2","text-inside":!0,"stroke-width":5,percentage:7})]),he,be]),_:1})]),_:1})]),_:1}),t(l,{span:12,xs:24,class:"mt10"},{default:e(()=>[t(i,{gutter:10},{default:e(()=>[t(l,{span:8,xs:6},{default:e(()=>[s("div",Se,null,512)]),_:1}),t(l,{span:16,xs:18},{default:e(()=>[xe,s("div",ve,[$e,t(r,{class:"mt-2","text-inside":!0,"stroke-width":5,percentage:20})]),we,ye]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}var Ae=b(de,[["render",ge]]);const Be={name:"ServerStatus",components:{BasicCard:v,BasicTable:k},setup(){const a=T({tableColumn:[{prop:"queue",label:"Queue",minWidth:100},{prop:"processes",label:"Processes",minWidth:80},{prop:"jobs",label:"Jobs",minWidth:100},{prop:"wait",label:"Wait",minWidth:120}],tableData:[{queue:"default",processes:"4",jobs:1e3,wait:"A Few Seconds"},{queue:"hot",processes:"5",jobs:5e3,wait:"A Few Seconds"},{queue:"promotion",processes:"6",jobs:1e3,wait:"A Few Seconds"},{queue:"first",processes:"8",jobs:2e3,wait:"A Few Seconds"},{queue:"second",processes:"8",jobs:2e3,wait:"A Few Seconds"}],queueStatus:[{label:"JOBS PER MINUTE",value:117},{label:"JOBS PAST HOUR",value:"5,808"},{label:"FAILED JOBS",value:"701"},{label:"STATUS",value:"Active"},{label:"TOTAL PROCESSES",value:"14"},{label:"MAX WAIT TIME",value:"--"},{label:"MAX RUNTIME",value:"First"},{label:"MAX THROUGHPUT",value:"First"}]});return w({},C(a))}},Re={class:"flex row-center col-center"},Te={class:"text-sm text-secondary"},Ce={class:"text-xl"};function je(a,n,c,p,m,f){const l=o("el-card"),r=o("el-col"),i=o("el-row"),_=o("BasicTable"),S=o("BasicCard");return u(),h(S,{title:"Queue Status"},{default:e(()=>[t(i,{gutter:10},{default:e(()=>[t(r,{span:24,class:"mb-2"},{default:e(()=>[t(i,null,{default:e(()=>[(u(!0),j(P,null,M(a.queueStatus,(x,D)=>(u(),h(r,{xs:12,sm:12,md:8,lg:8,xl:6,key:D},{default:e(()=>[t(l,{class:"card",shadow:"hover"},{default:e(()=>[s("div",Re,[s("span",Te,F(x.label),1),s("span",Ce,F(x.value),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(r,{span:24},{default:e(()=>[t(_,{columns:a.tableColumn,data:a.tableData},null,8,["columns","data"])]),_:1})]),_:1})]),_:1})}var Fe=b(Be,[["render",je]]);const ke={name:"FailedJobs",components:{BasicCard:v,BasicTable:k,Refresh:q},setup(){const a=T({tableColumn:[{prop:"job",label:"Job",minWidth:90},{prop:"runtime",label:"Runtime",minWidth:70},{prop:"failed_at",label:"Failed At",minWidth:110},{prop:"action",label:"Action",slot:"action",minWidth:80}],tableData:[{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"CallTask",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendPush",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendSms",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"CallTask",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"SendPush",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"},{job:"Callback",runtime:"4",failed_at:"10-14 16:23:09",Retry:"A Few Seconds"}]});return w({},C(a))}};function Ee(a,n,c,p,m,f){const l=o("Refresh"),r=o("el-icon"),i=o("el-button"),_=o("BasicTable"),S=o("BasicCard");return u(),h(S,{title:"Failed Jobs"},{default:e(()=>[t(_,{columns:a.tableColumn,data:a.tableData,size:"small"},{action:e(x=>[t(i,{type:"primary"},{default:e(()=>[t(r,{size:14},{default:e(()=>[t(l)]),_:1})]),_:1})]),_:1},8,["columns","data"])]),_:1})}var De=b(ke,[["render",Ee]]);const Oe={name:"ServerStatus",components:{BasicCard:v},setup(){const{elRef:a,setOptions:n}=$();return R(()=>{n(L())}),{elRef:a}}},Ue={ref:"elRef",style:{height:"310px",width:"100%"}};function Ge(a,n,c,p,m,f){const l=o("el-col"),r=o("el-row"),i=o("BasicCard");return u(),h(i,{title:"Throughput"},{default:e(()=>[t(r,null,{default:e(()=>[t(l,{xs:24,class:"mb10"},{default:e(()=>[s("div",Ue,null,512)]),_:1})]),_:1})]),_:1})}var Me=b(Oe,[["render",Ge]]);const Pe=B({components:{ServerStatus:Ae,QueueStatus:Fe,FailedJobs:De,Throughput:Me,Information:re}}),We={class:"m10"};function Ie(a,n,c,p,m,f){const l=o("ServerStatus"),r=o("QueueStatus"),i=o("el-col"),_=o("Information"),S=o("FailedJobs"),x=o("el-row");return u(),j("div",We,[t(x,{gutter:10},{default:e(()=>[t(i,{xs:24,sm:24,md:24,lg:16,xl:16,class:"mb10"},{default:e(()=>[t(l,{class:"mb-2"}),t(r,{class:"mb-2"})]),_:1}),t(i,{xs:24,sm:24,md:24,lg:8,xl:8,class:"mb10"},{default:e(()=>[t(_,{class:"mb-2"}),t(S,{class:"mb-2"})]),_:1})]),_:1})])}var Xe=b(Pe,[["render",Ie]]);export{Xe as default};
