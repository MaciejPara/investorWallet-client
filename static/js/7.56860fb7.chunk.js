(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[7],{108:function(e,a,t){"use strict";t.r(a);var n=t(5),c=t.n(n),s=t(9),r=t(24),l=t(2),i=t(23),o=t(70),u=t(6),d=t(8);a.default=function(e){var a=e.match.url,t=Object(i.e)().getState(),n=t.authUser.user.favourites,j=t.settings.userSettingsAdapter,f=Object(i.c)(),h=Object(l.useState)(n),b=Object(r.a)(h,2),O=b[0],m=b[1],p=Object(l.useState)([]),v=Object(r.a)(p,2),x=v[0],g=v[1],N=Object(l.useState)(""),y=Object(r.a)(N,2),C=y[0],w=y[1];Object(i.d)((function(e){var a=e.collections,t=e.settings.base,n=[];a.categories.forEach((function(e){O.forEach((function(t){var c,s,r=null===(c=a[e])||void 0===c||null===(s=c.data)||void 0===s?void 0:s.find((function(e){return e.name===t}));r&&n.push(r)}))})),O.length>0&&O.length!==n.length&&!a.initFlag&&(f({type:u.SET_INIT_FLAG}),a.categories.forEach((function(e){var n,c=null===(n=a[e])||void 0===n?void 0:n.model;f({type:u.GET_CATEGORY_DATA,payload:{url:c.getAllUrl(t),category:c.getCategoryName()}})}))),JSON.stringify(n)!==JSON.stringify(x)&&g(n)}));var E=function(){var e=Object(s.a)(c.a.mark((function e(a){var t,n,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.currentTarget.dataset.value,n=O||[],f({type:u.LOADER}),n&&n.indexOf(t)>-1?n=n.filter((function(e){return e!==t})):n.push(t),e.next=6,j.changeFavourites(n);case 6:s=e.sent,f({type:u.LOADER}),(null===s||void 0===s?void 0:s.ok)&&(f({type:u.SET_USER_FAVOURITES,payload:n}),m(n));case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"contentContainer",children:[Object(d.jsx)("h4",{children:"Favourites:"}),O.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"tableHeaderContainer row w-100 m-auto d-flex",children:[Object(d.jsx)("span",{className:"tableHeader fixWidth"}),Object(d.jsxs)("span",{className:"tableHeader",children:[" ",Object(d.jsx)("input",{type:"text",placeholder:"Name \ud83d\udd0d",value:C,onChange:function(e){var a=e.currentTarget.value;return w(a.toLowerCase())}})]}),Object(d.jsx)("span",{className:"tableHeader m-auto",children:"Last Price"}),Object(d.jsx)("span",{className:"tableHeader m-auto",children:"24h"}),Object(d.jsx)("span",{className:"tableHeader fixWidth"})]}),Object(d.jsx)("div",{className:"d-flex w-100 m-auto flex-column",children:x.filter((function(e){return e.name.toLowerCase().includes(C)})).map((function(e,t){var n=e.name,c=e.rate,s=e.category;return Object(d.jsx)(o.a,{name:n,category:s,rate:c,url:a,favourites:O,handleFavouriteChange:E},t)}))})]}):Object(d.jsx)("p",{children:"No results..."})]})})}},70:function(e,a,t){"use strict";t(2);var n=t(8),c=function(e){var a=e.handleChange,t=e.name,c=e.state,s=void 0!==c&&c;return Object(n.jsx)("span",{className:"cell",children:Object(n.jsx)("span",{className:"cell","data-value":t,onClick:a,children:s?Object(n.jsx)("i",{className:"fas fa-star favourite active"}):Object(n.jsx)("i",{className:"far fa-star favourite"})})})},s=t(64);a.a=function(e){var a=e.handleFavouriteChange,t=e.name,r=e.favourites,l=e.rate,i=e.category,o=e.dayChange,u=void 0===o?{difference:0}:o,d=e.url;return Object(n.jsxs)("div",{className:"categoryItem row w-100 m-auto d-flex",children:[Object(n.jsx)(c,{handleChange:a,name:t,state:r.indexOf(t)>-1}),Object(n.jsx)("span",{className:"cell",children:t}),i&&Object(n.jsx)("span",{className:"cell",children:i}),Object(n.jsx)("span",{className:"cell m-auto",children:parseFloat(l).toFixed(2)}),Object(n.jsx)("span",{className:"cell m-auto difference ".concat(function(){var e=(u||{}).difference;return 0===e?"equal":e>0?"plus":"minus"}()),children:u.difference&&"".concat(u.difference,"(").concat(u.differenceInPercent,")")}),Object(n.jsx)("span",{className:"cell",children:Object(n.jsx)(s.b,{to:"".concat(d),children:Object(n.jsx)("i",{className:"fas fa-ellipsis-h"})})}),Object(n.jsx)("div",{id:"box",className:"box-shadow"})]})}}}]);
//# sourceMappingURL=7.56860fb7.chunk.js.map