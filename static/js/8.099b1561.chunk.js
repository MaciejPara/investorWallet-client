(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[8],{77:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(22),r=a(48),o=a(24),u=a(50),s=a(8),i=function(e){var t=e.match.url,a=Object(l.e)().getState().menu,n=a.items,r=a.current,o=Object(l.c)();return c.a.createElement("nav",{className:"navigation"},n.map((function(e,a){var l=e.label,i=e.name,m=e.path;return c.a.createElement(u.c,{onClick:function(){o({type:s.MENU_CHANGE,payload:i})},key:a,to:"".concat(t).concat(m),className:"".concat(0===a?"ml-auto":""," ").concat(a===n.length-1?"mr-auto":""," ").concat(r===i?"activeClass":""," ")},l)})),c.a.createElement("div",{className:"logoutContainer"},c.a.createElement(u.c,{to:"/logout"},c.a.createElement("i",{className:"fas fa-sign-out-alt"}))))},m=c.a.lazy((function(){return a.e(9).then(a.bind(null,79))})),E=c.a.lazy((function(){return Promise.all([a.e(5),a.e(7)]).then(a.bind(null,80))}));t.default=function(e){var t=e.match.url,a=Object(l.e)().getState(),u=(a.authUser.user,a.collections);return c.a.createElement("div",{className:"views"},c.a.createElement(i,e),c.a.createElement("div",{className:"userSettingsFooter"},c.a.createElement("span",null,"base: PLN")),c.a.createElement(n.Suspense,{fallback:c.a.createElement(o.a,null)},c.a.createElement(r.d,null,c.a.createElement(r.b,{exact:!0,path:"".concat(t,"/"),render:function(e){return c.a.createElement(m,e)}}),null===u||void 0===u?void 0:u.categories.map((function(e,a){return c.a.createElement(r.b,{key:a,exact:!0,path:"".concat(t,"/").concat(e),render:function(t){var a;return c.a.createElement(E,Object.assign({},t,{model:null===(a=u[e])||void 0===a?void 0:a.model}))}})})),c.a.createElement(r.a,{to:"/error"}))))}}}]);
//# sourceMappingURL=8.099b1561.chunk.js.map