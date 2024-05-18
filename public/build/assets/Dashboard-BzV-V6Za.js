import{o as r,f as o,b as e,t as s,d as i,F as c,k as _,l as x,m as g,i as f,p as b,g as v,a as d,w as m,e as w,O as $,u as y,Z as k,q as O,n as E}from"./app-BuNgpZlx.js";import{_ as j}from"./AuthenticatedLayout-DgOUQ6_u.js";import{P as V}from"./PrimaryButton-BsdDAiEd.js";import"./ApplicationLogo-D5WrgdHV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const A={class:"flex items-center justify-between border-b border-black mb-2"},R={class:"font-black"},D=["href"],M=e("sup",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})])],-1),S={class:"flex items-center justify-between"},C={class:"text-gray-500"},I={class:"text-gray-500"},N={class:"text-red-500 font-bold"},P={class:"font-black text-right"},B={class:"text-green-600"},T={__name:"Header",props:{order:Object},setup(t){return(a,l)=>(r(),o(c,null,[e("div",A,[e("h2",R,"Order: "+s(t.order.order_number)+" - "+s(t.order.id),1),e("a",{target:"_blank",href:a.route("orders.tracker",{order:t.order}),class:"font-black text-red-600 flex items-center gap-x-1"},[i(" TRACK "),M],8,D)]),e("div",S,[e("div",null,[e("p",C,s(t.order.time_since),1),e("p",I,[i("# Items: "),e("span",N,s(t.order.order_items.length),1)])]),e("div",P,[e("p",null,s(t.order.status),1),e("p",null,[e("span",B,s(t.order.delivery_method),1)])])])],64))}},F={class:"bg-white text-base px-4 py-1 flex flex-col rounded-xl shadow mt-2"},U={class:"flex justify-between font-bold"},q={class:"flex-1"},z={class:"flex text-sm"},G={__name:"Items",props:{order:Object},setup(t){return(a,l)=>(r(!0),o(c,null,_(t.order.order_items,n=>(r(),o("div",F,[e("div",U,[e("p",q,s(n.product),1),e("p",null,s(n.product_options.size),1)]),e("div",z,[(r(!0),o(c,null,_(n.product_options.toppings,u=>(r(),o("p",null,s(u)+"  ",1))),256))])]))),256))}},H=e("label",{for:"status",class:"block text-sm font-medium leading-6 text-gray-900"},"Update Status",-1),L=e("option",{value:"RECEIVED"},"Received",-1),Y=e("option",{value:"PROGRESS"},"In Progress",-1),K=e("option",{value:"OVEN"},"In The Oven",-1),Z={value:"READY"},J={key:0,class:"text-xs text-red-500"},Q={__name:"EditForm",props:{order:Object},setup(t){const a=t,l=x({status:g(a.order.status)}),n=function(){$.patch(route("orders.edit",{order:a.order.id,status:l.status}))};return(u,h)=>(r(),o("form",{class:"mt-6 w-full",onSubmit:w(n,["prevent"])},[e("div",null,[H,f(e("select",{id:"status","onUpdate:modelValue":h[0]||(h[0]=p=>l.status=p),class:"block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6"},[L,Y,K,e("option",Z,"Ready for "+s(t.order.delivery_method),1)],512),[[b,l.status]])]),u.$page.props.errors.status?(r(),o("div",J,s(u.$page.props.errors.status),1)):v("",!0),d(V,{class:"w-full justify-center mt-2 bg-green-700"},{default:m(()=>[i("UPDATE")]),_:1})],32))}},W={class:"flex flex-col w-full h-full"},X={__name:"Order",props:{order:Object},setup(t){return(a,l)=>(r(),o("div",W,[d(T,{order:t.order},null,8,["order"]),d(G,{order:t.order},null,8,["order"]),d(Q,{order:t.order},null,8,["order"])]))}},ee=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Order Manager",-1),te={class:"p-6 sm:p-8"},se={class:"font-bold text-2xl"},re={class:"text-red-600"},oe=e("span",{class:"italic"},"GET MOVIN'!",-1),ne={class:"mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"},ue={__name:"Dashboard",props:{orders:Array,required:!0},setup(t){return(a,l)=>(r(),o(c,null,[d(y(k),{title:"Order Manager"}),d(j,null,{header:m(()=>[ee]),default:m(()=>[e("div",te,[e("h3",se,[i("Pending Orders: "),e("span",re,s(t.orders.length),1),i(" - "),oe]),e("div",ne,[(r(!0),o(c,null,_(t.orders,n=>f((r(),o("article",{key:n.id,class:E(["flex max-w-xl flex-col items-start justify-between border rounded-xl shadow-md bg-gray-100 p-4",{"animate-pulse":n===t.orders[0]}])},[d(X,{order:n},null,8,["order"])],2)),[[O,n.status!=="READY"]])),128))])])]),_:1})],64))}};export{ue as default};
