_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{GmEq:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/book",function(){return n("YQxH")}])},"GyP+":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e){if(console.log("updateData",e),!e.includes("http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/uploads/products/"+e)){var t="http://dev74.onlinetestingserver.com/fleetcart_lighthouse/FleetCart/public/uploads/products/"+e;return t}}},IR5H:function(e,t){e.exports="/_next/static/images/books-f5200ba7535257ce70a563fc9ff56f35.png"},NuC5:function(e,t,n){"use strict";var a=n("h4VS"),o=n("q1tI"),i=n.n(o),r=n("vOnD"),l=n("Bo8V"),c=n("wx14"),u=n("rePB"),s=n("o0o1"),d=n.n(s),p=n("HaE+"),m=n("ODXe"),f=n("YFqc"),g=n.n(f),b=n("lTCR"),v=n.n(b),y=n("ttZb"),h=n("H1qJ"),k=n("yBv+"),C=n("5kK8"),O=n("24R3"),j=n("dq9M"),x=n("J1+W"),_=n("k82f"),I=n("4WSj"),P=n("q5Wl"),w=n("aRrD"),T=n("GyP+"),F=i.a.createElement,N=function(e){var t=e.data,n=(e.onDecrement,e.onIncrement,e.onRemove);console.log("dataaaaaaaaaaaaaaaaa",t.variationId);var a=t.title,o=t.productImages,i=t.price,r=t.salePrice,l=(t.unit,t.quantity),c=t.variationId,u=t.productVariations,s=u.length>0?u.filter((function(e){return e.variations.id==c})):null,d=s[0];console.log("dataaaaaaaaaaaaaaaa",s.length>0&&d.variations.variation_price);var p=s.length>0?d.variations.variation_price:r||i;return console.log("display price",p),p=parseFloat(p).toFixed(2),F(w.c,null,F(w.a,{src:Object(T.a)(o[0].image)}),F(w.b,null,F(w.d,null,a),F(w.e,null,C.a,p),F(w.h,null,l)),F(w.g,null,C.a,p),F(w.f,{onClick:n},F(P.a,null)))},M=i.a.createElement;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(){var e=Object(a.a)(["\n  mutation applyCoupon($code: String!) {\n    applyCoupon(code: $code) {\n      id\n      code\n      discountInPercent\n    }\n  }\n"]);return H=function(){return e},e}var q=v()(H()),D=function(e){var t=e.style,n=e.className,a=e.onCloseBtnClick,r=e.scrollbarHeight,l=Object(I.b)(),u=l.items,s=l.coupon,f=l.addItem,b=l.removeItem,v=l.removeItemFromCart,P=l.cartItemsCount,w=l.calculatePrice,T=l.applyCoupon,F=Object(o.useState)(""),E=F[0],H=F[1],D=Object(o.useState)(!1),B=D[0],S=D[1],L=Object(o.useState)(""),V=L[0],G=L[1],J=Object(y.b)(q),Q=Object(m.a)(J,1)[0],W=Object(j.b)().isRtl,X=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q({variables:{code:E}});case 2:t=e.sent,(n=t.data).applyCoupon&&n.applyCoupon.discountInPercent?(G(""),T(n.applyCoupon),H("")):G("Invalid Coupon");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return M(h.a,{className:n,style:t},M(h.k,null,M(h.l,null,M(k.ShoppingBagLarge,{width:"19px",height:"24px"}),M("span",null,P,"\xa0",M(O.a,P>1?{id:"cartItems",defaultMessage:"items"}:{id:"cartItem",defaultMessage:"item"}))),M(h.e,{onClick:a},M(k.CloseIcon,null))),M(_.Scrollbars,{universal:!0,autoHide:!0,autoHeight:!0,autoHeightMax:r,renderView:function(e){return M("div",Object(c.a)({},e,{style:R(R({},e.style),{},{marginLeft:W?e.style.marginRight:0,marginRight:W?0:e.style.marginRight})}))}},M(h.i,{className:"items-wrapper"},P?u.map((function(e,t){return M(N,{key:"cartItem-".concat(e.id),onIncrement:function(){return f(e)},onDecrement:function(){return b(e)},onRemove:function(){return v(t)},data:e})})):M(h.j,null,M(O.a,{id:"noProductFound",defaultMessage:"No products found"})))),M(h.d,null,M(h.n,null,(null===s||void 0===s?void 0:s.discountInPercent)?M(h.g,null,M(O.a,{id:"couponApplied",defaultMessage:"Coupon Applied"}),M("span",null,s.code)):M(i.a.Fragment,null,B?M(h.f,null,M(x.b,{onUpdate:function(e){H(e)},value:E,onClick:X,disabled:!E.length||!u.length,buttonTitle:"Apply",intlCouponBoxPlaceholder:"couponPlaceholder",style:{boxShadow:"0 3px 6px rgba(0, 0, 0, 0.06)"}}),V?M(h.h,null,V):""):M("button",{onClick:function(){S(!0)}},M(O.a,{id:"specialCode",defaultMessage:"Have a special code?"})))),0!==P?M(g.a,{href:"/checkout"},M(h.c,{onClick:a},M(i.a.Fragment,null,M(h.o,null,M(O.a,{id:"navlinkCheckout",defaultMessage:"Checkout"})),M(h.m,null,C.a,w())))):M(h.c,null,M(i.a.Fragment,null,M(h.o,null,M(O.a,{id:"navlinkCheckout",defaultMessage:"Checkout"})),M(h.m,null,C.a,w())))))},B=n("Hism"),S=i.a.createElement;function L(){var e=Object(a.a)(["\n  .cartPopup{\n    top: auto !important;\n    left: auto !important;\n    bottom: 50px !important;\n    right: 50px !important;\n    box-shadow: 0 21px 36px rgba(0, 0, 0, 0.16);\n    transform-origin: bottom right;\n\n    @media (max-width: 767px) {\n      max-width: none!important;\n      width: 100% !important;\n      bottom: 0 !important;\n      left: 0!important;\n      background: #fff;\n      overflow: initial !important;\n      transform-origin: bottom center;\n    }\n  }\n"]);return L=function(){return e},e}var V=Object(r.c)(L());t.a=function(e){var t=e.deviceType,n=t.mobile,a=t.tablet,o=(t.desktop,Object(I.b)()),r=o.isOpen,c=o.cartItemsCount,u=o.toggleCart,s=o.calculatePrice,d=!0===r?"cartPopupFixed":"";return S(i.a.Fragment,null,n||a?S(i.a.Fragment,null,S(V,null),S(B.b,{className:"product-cart",itemCount:c,itemPostfix:S(O.a,c>1?{id:"cartItems",defaultMessage:"items"}:{id:"cartItem",defaultMessage:"item"}),price:s(),pricePrefix:"$",onClick:function(){Object(l.c)({show:!0,config:{className:"cartPopup",width:"auto",height:"auto",enableResizing:!1,disableDragging:!0,transition:{tension:360,friction:40}},closeOnClickOutside:!0,component:D,closeComponent:function(){return S("div",null)},componentProps:{onCloseBtnClick:l.b,scrollbarHeight:370}})}})):S(i.a.Fragment,null,S(h.b,{className:d},r&&S(D,{onCloseBtnClick:u,scrollbarHeight:"100vh"})),S(B.a,{className:"product-cart",itemCount:c,itemPostfix:S(O.a,c>1?{id:"cartItems",defaultMessage:"items"}:{id:"cartItem",defaultMessage:"item"}),price:s(),pricePrefix:C.a,onClick:u})))}},YQxH:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),i=n("nOHt"),r=n("Bo8V"),l=n("ZNCQ"),c=n("ddIo"),u=n("kNTC"),s=n("e3cP"),d=n("yWJx"),p=n("j5Ri"),m=n("KQm4"),f=n("h4VS"),g=n("lTCR"),b=n.n(g),v=n("Ff2n"),y=n("24R3"),h=n("PDTj"),k=n("Fzwq"),C=o.a.createElement,O=function(e){var t=e.title,n=e.image,a=e.name,i=e.discountInPercent,r=(e.onChange,e.increment,e.decrement,e.data,e.deviceType,e.onClick);Object(v.a)(e,["title","image","name","discountInPercent","onChange","increment","decrement","data","deviceType","onClick"]);return C(k.b,{onClick:r,className:"book-card"},C(k.c,null,C(h.a,{url:n,className:"product-image",style:{position:"relative"},alt:t}),i?C(o.a.Fragment,null,C(k.g,null,i,"%")):""),C(k.d,null,C(k.o,null,t),C(k.a,null,C(y.a,{id:"intlTextBy",defaultMessage:"by"})," ",a)))},j=n("IF2T"),x=n("ttZb"),_=n("89Ff"),I=n("noiX"),P=n("cnNH"),w=n("/eHF"),T=n.n(w),F=n("IYOs"),N=o.a.createElement;function M(){var e=Object(f.a)(["\nquery  categoryProduct($category_id: Int!) {\n  categoryProduct(category_id: $category_id){\n\n    products{\n    id\n    brand_id\n    slug\n    tax_class_id\n    sku\n    price\n    special_price\n    special_price_type\n    special_price_start\n    special_price_end\n    selling_price\n    manage_stock\n    qty\n    in_stock\n    }\n\n  }\n  \n  }"]);return M=function(){return e},e}var E=b()(M()),R=function(e){var t=e.deviceType,n=e.type,r=e.fetchLimit,l=void 0===r?8:r,c=e.loadMore,u=void 0===c||c,s=Object(i.useRouter)(),d=Object(a.useState)(!1),p=d[0],f=d[1],g=Object(x.c)(E,{variables:{type:n,text:s.query.text,category:s.query.category,offset:0,limit:l}}),b=g.data,v=g.error,y=g.loading,h=g.fetchMore;if(y)return N(j.c,null,N(j.b,null,N(P.c,null)),N(j.b,null,N(P.c,null)),N(j.b,null,N(P.c,null)));if(v)return N("div",null,v.message);if(!b||!b.products||0===b.products.items.length)return N(F.a,null);return N(o.a.Fragment,null,N(j.f,{style:{margin:0}},b.products.items.map((function(e,n){var a;return N(j.e,{key:n,style:{paddingLeft:0,paddingRight:1}},N(j.d,null,N(T.a,{duration:800,delay:10*n,style:{height:"100%"}},N(O,{title:e.title,image:e.image,name:null===e||void 0===e||null===(a=e.author)||void 0===a?void 0:a.name,data:e,deviceType:t,onClick:function(){return s.push("/product/[id]","/product/".concat(e.id))}}))))}))),u&&b.products.hasMore&&N(j.a,null,N(_.b,{onClick:function(){f(!0),h({variables:{offset:Number(b.products.items.length),limit:l},updateQuery:function(e,t){var n=t.fetchMoreResult;return f(!1),n?{products:{__typename:e.products.__typename,items:[].concat(Object(m.a)(e.products.items),Object(m.a)(n.products.items)),hasMore:n.products.hasMore}}:e}})},title:"Load More",size:"small",isLoading:p,intlButtonId:"loadMoreBtn",loader:N(I.a,{color:"#009E7F"}),style:{minWidth:135,backgroundColor:"#ffffff",border:"1px solid #f1f1f1",color:"#009E7F"}})))},H=n("NuC5"),q=n("GOnK"),D=n("hD4N"),B=n("IR5H"),S=n.n(B),L=n("OKUF"),V=o.a.createElement;t.default=Object(l.a)((function(e){var t=e.deviceType,n=Object(i.useRouter)().query,a=o.a.useRef(null);return o.a.useEffect((function(){(n.text||n.category)&&a.current&&window.scrollTo({top:a.current.offsetTop-110,behavior:"smooth"})}),[n]),V(o.a.Fragment,null,V(c.a,{title:"Book - PickBazar",description:"Book Details"}),V(r.a,null,V(d.a,{intlTitleId:"booksTitle",intlDescriptionId:"booksSubTitle",imageUrl:S.a}),t.desktop?V(o.a.Fragment,null,V(q.c,null,V(u.a,{items:L.a}),V(p.a,{type:"book",deviceType:t})),V(q.e,null,V("div",{style:{margin:"0 -10px"}},V(s.a,{deviceType:t,data:D.a}))),V(q.b,null,V(q.h,null,V(p.a,{type:"book",deviceType:t})),V(q.a,null,V("div",{ref:a},V(R,{type:"book",deviceType:t,fetchLimit:16}))))):V(q.b,null,V(u.a,{items:L.a}),V(p.a,{type:"book",deviceType:t}),V(q.e,null,V("div",{style:{margin:"0 -10px"}},V(s.a,{deviceType:t,data:D.a}))),V(q.a,{style:{width:"100%"}},V(R,{type:"book",deviceType:t,fetchLimit:16}))),V(H.a,{deviceType:t})))}))},noiX:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),i=n("vOnD"),r=o.a.createElement,l=Object(i.f)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]),c=i.e.div.withConfig({displayName:"Loader__Spinner",componentId:"sc-11kkpdf-0"})(["width:24px;height:24px;border:4px solid #ffffff;border-top:3px solid ",";border-radius:50%;transition-property:transform;animation-name:",";animation-duration:1.2s;animation-iteration-count:infinite;animation-timing-function:linear;"],(function(e){return e.color?e.color:"#009e7f"}),l);t.a=function(e){return r(c,e)}}},[["GmEq",1,0,6,2,3,4,5,7,8,10,9,11,12,13,14,15,16]]]);