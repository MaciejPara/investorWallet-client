(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{109:function(e,a,t){"use strict";t.r(a);var n=t(3),c=t(24),s=t(2),r=t(23),l=t(5),i=t.n(l),o=t(9),d=t(6),u=t(70),j=t(102),f=t.n(j),b=t(8),O=function(e){var a=e.updateDate,t=e.data,n=void 0===t?[]:t,l=e.match.url,j=Object(r.e)().getState(),O=j.authUser.user.favourites,m=j.settings.userSettingsAdapter,h=Object(r.c)(),p=Object(s.useState)(O),v=Object(c.a)(p,2),x=v[0],g=v[1],N=m.getBase(),y=Object(s.useState)(""),C=Object(c.a)(y,2),w=C[0],S=C[1],A=function(){var e=Object(o.a)(i.a.mark((function e(a){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.dataset.value,(n=x||[])&&n.indexOf(t)>-1?n=n.filter((function(e){return e!==t})):n.push(t),h({type:d.LOADER}),e.next=6,m.changeFavourites(n);case 6:c=e.sent,h({type:d.LOADER}),(null===c||void 0===c?void 0:c.ok)&&(h({type:d.SET_USER_FAVOURITES,payload:n}),g(n));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),D=f()(a).format("DD.MM.YYYY - HH:mm:ss");return Object(b.jsxs)("div",{className:"contentContainer",children:[Object(b.jsxs)("h4",{children:["Updated: ",D]}),Object(b.jsx)("i",{className:"fa-solid fa-magnifying-glass"}),Object(b.jsxs)("div",{className:"tableHeaderContainer row w-100 m-auto d-flex",children:[Object(b.jsx)("span",{className:"tableHeader"}),Object(b.jsx)("span",{className:"tableHeader",children:Object(b.jsx)("input",{type:"text",placeholder:"Name \ud83d\udd0d",value:w,onChange:function(e){var a=e.currentTarget.value;return S(a.toLowerCase())}})}),Object(b.jsx)("span",{className:"tableHeader m-auto",children:"Price"}),Object(b.jsx)("span",{className:"tableHeader m-auto",children:"24h"}),Object(b.jsx)("span",{className:"tableHeader"})]}),Object(b.jsx)("div",{className:"d-flex w-100 m-auto flex-column",children:n.filter((function(e){return e.name.toLowerCase().includes(w)})).filter((function(e){return e.name!==N})).map((function(e,a){var t=e.name,n=e.rate;return Object(b.jsx)(u.a,{name:t,rate:n,dayChange:{difference:.05,differenceInPercent:"0.5%"},url:l,favourites:x,handleFavouriteChange:A},a)}))})]})},m=t(25);a.default=function(e){var a=e.model,t=Object(r.c)(),l=Object(r.e)().getState().settings,i=Object(s.useState)(null),o=Object(c.a)(i,2),u=o[0],j=o[1],f=Object(s.useState)(""),h=Object(c.a)(f,2),p=h[0],v=h[1];return Object(s.useEffect)((function(){(null===a||void 0===a?void 0:a.shouldRefresh())&&(a.setRefresh(!1),t({type:d.GET_CATEGORY_DATA,payload:{url:a.getAllUrl(null===l||void 0===l?void 0:l.base),category:a.getCategoryName()}}))}),[]),Object(r.d)((function(e){var t=e.collections[null===a||void 0===a?void 0:a.getCategoryName()]||{},n=t.data,c=t.updateDate,s=void 0===c?"":c;JSON.stringify(n)!==JSON.stringify(u)&&j(n),s!==p&&v(s)})),Object(b.jsx)("div",{children:a?Object(b.jsx)(b.Fragment,{children:null!==u?Object(b.jsx)(b.Fragment,{children:(null===u||void 0===u?void 0:u.length)>0?Object(b.jsx)(O,Object(n.a)(Object(n.a)({},e),{},{data:u,updateDate:p})):Object(b.jsx)("p",{children:"No results.."})}):Object(b.jsx)(m.a,{})}):Object(b.jsx)("span",{children:"working on it.."})})}},70:function(e,a,t){"use strict";t(2);var n=t(8),c=function(e){var a=e.handleChange,t=e.name,c=e.state,s=void 0!==c&&c;return Object(n.jsx)("span",{className:"cell",children:Object(n.jsx)("span",{className:"cell","data-value":t,onClick:a,children:s?Object(n.jsx)("i",{className:"fas fa-star favourite active"}):Object(n.jsx)("i",{className:"far fa-star favourite"})})})},s=t(64);a.a=function(e){var a=e.handleFavouriteChange,t=e.name,r=e.favourites,l=e.rate,i=e.category,o=e.dayChange,d=void 0===o?{difference:0}:o,u=e.url;return Object(n.jsxs)("div",{className:"categoryItem row w-100 m-auto d-flex",children:[Object(n.jsx)(c,{handleChange:a,name:t,state:r.indexOf(t)>-1}),Object(n.jsx)("span",{className:"cell",children:t}),i&&Object(n.jsx)("span",{className:"cell",children:i}),Object(n.jsx)("span",{className:"cell m-auto",children:parseFloat(l).toFixed(2)}),Object(n.jsx)("span",{className:"cell m-auto difference ".concat(function(){var e=(d||{}).difference;return 0===e?"equal":e>0?"plus":"minus"}()),children:d.difference&&"".concat(d.difference,"(").concat(d.differenceInPercent,")")}),Object(n.jsx)("span",{className:"cell",children:Object(n.jsx)(s.b,{to:"".concat(u),children:Object(n.jsx)("i",{className:"fas fa-ellipsis-h"})})}),Object(n.jsx)("div",{id:"box",className:"box-shadow"})]})}}}]);
//# sourceMappingURL=6.ed013147.chunk.js.map