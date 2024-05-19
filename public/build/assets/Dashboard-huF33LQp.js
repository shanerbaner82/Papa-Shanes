import{o as s,f as r,b as e,t as n,d as i,F as c,k as m,l as b,m as v,i as h,p as $,g as w,a as d,w as _,e as p,O as x,u as y,Z as k,q as O,n as j}from"./app-DK3oikf9.js";import{_ as E}from"./AuthenticatedLayout-khSXDAzd.js";import{P as R}from"./PrimaryButton-yaYHqLP1.js";import{_ as V}from"./SecondaryButton-CL3CmWvT.js";import"./ApplicationLogo-B9SCRRuo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={class:"flex items-center justify-between border-b border-black mb-2"},A={class:"font-black"},D=["href"],M=e("sup",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})])],-1),C={class:"flex items-center justify-between"},I={class:"text-gray-500"},N={class:"text-gray-500"},P={class:"text-red-500 font-bold"},B={class:"font-black text-right"},T={class:"text-green-600"},F={__name:"Header",props:{order:Object},setup(t){return(a,l)=>(s(),r(c,null,[e("div",S,[e("h2",A,"Order: "+n(t.order.order_number),1),e("a",{target:"_blank",href:a.route("orders.tracker",{order:t.order}),class:"font-black text-red-600 flex items-center gap-x-1"},[i(" TRACK "),M],8,D)]),e("div",C,[e("div",null,[e("p",I,n(t.order.time_since),1),e("p",N,[i("# Items: "),e("span",P,n(t.order.order_items.length),1)])]),e("div",B,[e("p",null,n(t.order.status),1),e("p",null,[e("span",T,n(t.order.delivery_method),1)])])])],64))}},U={class:"bg-white text-base px-4 py-1 flex flex-col rounded-xl shadow mt-2"},q={class:"flex justify-between font-bold"},z={class:"flex-1"},G={class:"flex text-sm"},H={__name:"Items",props:{order:Object},setup(t){return(a,l)=>(s(!0),r(c,null,m(t.order.order_items,o=>(s(),r("div",U,[e("div",q,[e("p",z,n(o.product),1),e("p",null,n(o.product_options.size),1)]),e("div",G,[(s(!0),r(c,null,m(o.product_options.toppings,u=>(s(),r("p",null,n(u)+"  ",1))),256))])]))),256))}},L=e("label",{for:"status",class:"block text-sm font-medium leading-6 text-gray-900"},"Update Status",-1),Y=e("option",{value:"RECEIVED"},"Received",-1),K=e("option",{value:"PROGRESS"},"In Progress",-1),Z=e("option",{value:"OVEN"},"In The Oven",-1),J={value:"READY"},Q={key:0,class:"text-xs text-red-500"},W={__name:"EditForm",props:{order:Object},setup(t){const a=t,l=b({status:v(a.order.status)}),o=function(){x.patch(route("orders.edit",{order:a.order.id,status:l.status}))};return(u,f)=>(s(),r("form",{class:"mt-6 w-full",onSubmit:p(o,["prevent"])},[e("div",null,[L,h(e("select",{id:"status","onUpdate:modelValue":f[0]||(f[0]=g=>l.status=g),class:"block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"},[Y,K,Z,e("option",J,"Ready for "+n(t.order.delivery_method),1)],512),[[$,l.status]])]),u.$page.props.errors.status?(s(),r("div",Q,n(u.$page.props.errors.status),1)):w("",!0),d(R,{class:"w-full justify-center mt-2 bg-green-700"},{default:_(()=>[i("UPDATE")]),_:1})],32))}},X={class:"flex flex-col w-full h-full"},ee={__name:"Order",props:{order:Object},setup(t){return(a,l)=>(s(),r("div",X,[d(F,{order:t.order},null,8,["order"]),d(H,{order:t.order},null,8,["order"]),d(W,{order:t.order},null,8,["order"])]))}},te={__name:"Reseed",setup(t){const a=function(){x.post(route("orders.reseed"))};return(l,o)=>(s(),r("form",{onSubmit:p(a,["prevent"])},[d(V,{type:"submit"},{default:_(()=>[i("Reseed Orders")]),_:1})],32))}},se=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Order Manager",-1),re={class:"p-6 sm:p-8"},oe={class:"flex items-center justify-between"},ne={class:"font-bold text-2xl"},ae={class:"text-red-600"},de=e("span",{class:"italic"},"GET MOVIN'!",-1),le={class:"mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"},he={__name:"Dashboard",props:{orders:Object,required:!0},setup(t){return(a,l)=>(s(),r(c,null,[d(y(k),{title:"Order Manager"}),d(E,null,{header:_(()=>[se]),default:_(()=>[e("div",re,[e("div",oe,[e("h3",ne,[i("Pending Orders: "),e("span",ae,n(t.orders.length),1),i(" - "),de]),d(te)]),e("div",le,[(s(!0),r(c,null,m(t.orders,o=>h((s(),r("article",{key:o.id,class:j(["flex max-w-xl flex-col items-start justify-between border rounded-xl shadow-md bg-gray-100 p-4",{"animate-pulse":o===t.orders[0]}])},[d(ee,{order:o},null,8,["order"])],2)),[[O,o.status!=="READY"]])),128))])])]),_:1})],64))}};export{he as default};
