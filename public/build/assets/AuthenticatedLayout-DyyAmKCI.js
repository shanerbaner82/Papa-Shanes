import{A as S}from"./ApplicationLogo-CVex7VRT.js";import{s as z,x as B,h as v,m as L,o as d,f as g,b as e,r as c,i as $,q as C,a as n,w as o,n as u,y as M,c as w,u as m,j as b,d as l,t as y,g as D}from"./app-Cu4pD-AG.js";const N={class:"relative"},j={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(r){const s=r,t=p=>{i.value&&p.key==="Escape"&&(i.value=!1)};z(()=>document.addEventListener("keydown",t)),B(()=>document.removeEventListener("keydown",t));const a=v(()=>({48:"w-48"})[s.width.toString()]),h=v(()=>s.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":s.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),i=L(!1);return(p,f)=>(d(),g("div",N,[e("div",{onClick:f[0]||(f[0]=k=>i.value=!i.value)},[c(p.$slots,"trigger")]),$(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=k=>i.value=!1)},null,512),[[C,i.value]]),n(M,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:o(()=>[$(e("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[a.value,h.value]]),style:{display:"none"},onClick:f[2]||(f[2]=k=>i.value=!1)},[e("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",r.contentClasses])},[c(p.$slots,"content")],2)],2),[[C,i.value]])]),_:3})]))}},_={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(r){return(s,t)=>(d(),w(m(b),{href:r.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[c(s.$slots,"default")]),_:3},8,["href"]))}},E={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const s=r,t=v(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-red-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-red-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(a,h)=>(d(),w(m(b),{href:r.href,class:u(t.value)},{default:o(()=>[c(a.$slots,"default")]),_:3},8,["href","class"]))}},x={__name:"ResponsiveNavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(r){const s=r,t=v(()=>s.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-red-400 text-start text-base font-medium text-red-700 bg-red-50 focus:outline-none focus:text-red-800 focus:bg-red-100 focus:border-red-700 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(a,h)=>(d(),w(m(b),{href:r.href,class:u(t.value)},{default:o(()=>[c(a.$slots,"default")]),_:3},8,["href","class"]))}},q={class:"min-h-screen"},V={class:"bg-white border-b border-gray-100"},A={class:"px-4 sm:px-6 lg:px-8"},O={class:"flex justify-between h-16"},P={class:"flex"},T={class:"shrink-0 flex items-center"},H={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},R={class:"hidden sm:flex sm:items-center sm:ms-6"},U={class:"ms-3 relative"},F={class:"inline-flex rounded-md"},G={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},I=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),J=e("svg",{class:"h-5 w-5 text-green-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30"},[e("path",{d:"M5.26176342 26.4094389C2.04147988 23.6582233 0 19.5675182 0 15c0-4.1421356 1.67893219-7.89213562 4.39339828-10.60660172C7.10786438 1.67893219 10.8578644 0 15 0c8.2842712 0 15 6.71572875 15 15 0 8.2842712-6.7157288 15-15 15-3.716753 0-7.11777662-1.3517984-9.73823658-3.5905611zM4.03811305 15.9222506C5.70084247 14.4569342 6.87195416 12.5 10 12.5c5 0 5 5 10 5 3.1280454 0 4.2991572-1.9569336 5.961887-3.4222502C25.4934253 8.43417206 20.7645408 4 15 4 8.92486775 4 4 8.92486775 4 15c0 .3105915.01287248.6181765.03811305.9222506z",style:{fill:"#8b5cf6"}})],-1),K={class:"-me-2 flex items-center sm:hidden"},Q={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},W={class:"pt-2 pb-3 space-y-1"},X={class:"pt-4 pb-1 border-t border-gray-200"},Y={class:"px-4"},Z={class:"font-medium text-base text-gray-800"},ee={class:"font-medium text-sm text-gray-500"},te={class:"mt-3 space-y-1"},se={key:0,class:"bg-white shadow"},oe={class:"py-6 px-4 sm:px-6 lg:px-8"},ae={__name:"AuthenticatedLayout",setup(r){const s=L(!1);return(t,a)=>(d(),g("div",null,[e("div",q,[e("nav",V,[e("div",A,[e("div",O,[e("div",P,[e("div",T,[n(m(b),{href:t.route("dashboard")},{default:o(()=>[n(S,{class:"block h-9"})]),_:1},8,["href"])]),e("div",H,[n(E,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[l(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",R,[e("div",U,[n(j,{align:"right",width:"48"},{trigger:o(()=>[e("span",F,[e("button",G,[l(y(t.$page.props.auth.user.name)+" ",1),I])])]),content:o(()=>[n(_,{href:t.route("horizon.index"),class:"flex items-center gap-x-2"},{default:o(()=>[J,l(" Horizon ")]),_:1},8,["href"]),n(_,{href:t.route("horizon.index")},{default:o(()=>[l(" Profile ")]),_:1},8,["href"]),n(_,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[l(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",K,[e("button",{onClick:a[0]||(a[0]=h=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),g("svg",Q,[e("path",{class:u({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",W,[n(x,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[l(" Dashboard ")]),_:1},8,["href","active"])]),e("div",X,[e("div",Y,[e("div",Z,y(t.$page.props.auth.user.name),1),e("div",ee,y(t.$page.props.auth.user.email),1)]),e("div",te,[n(x,{href:t.route("profile.edit")},{default:o(()=>[l(" Profile ")]),_:1},8,["href"]),n(x,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[l(" Log Out ")]),_:1},8,["href"])])])],2)]),t.$slots.header?(d(),g("header",se,[e("div",oe,[c(t.$slots,"header")])])):D("",!0),e("main",null,[c(t.$slots,"default")])])]))}};export{ae as _};