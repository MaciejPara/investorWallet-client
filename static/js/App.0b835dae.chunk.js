(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{50:function(e,t,n){"use strict";n.r(t);var a=n(49),r=n(1),c=n.n(r),l=n(35),o=n(39),u=n(15),i=n(17),s=c.a.lazy((function(){return n.e(7).then(n.bind(null,44))})),m=c.a.lazy((function(){return n.e(5).then(n.bind(null,45))})),p=c.a.lazy((function(){return n.e(6).then(n.bind(null,46))})),h=c.a.lazy((function(){return n.e(8).then(n.bind(null,47))})),b=c.a.lazy((function(){return n.e(9).then(n.bind(null,48))})),E=function(e){var t=e.component,n=e.authUser,r=e.basePath,o=Object(a.a)(e,["component","authUser","basePath"]);return c.a.createElement(l.b,Object.assign({},o,{render:function(e){return n?c.a.createElement(t,e):c.a.createElement(l.a,{to:{pathname:"".concat(r,"/login"),state:{from:e.location}}})}}))};t.default=function(e){var t=e.loginUser,n=Object(i.b)().getState().authUser.basePath;return console.log(">>> ",n),c.a.createElement("div",{className:"App"},c.a.createElement(r.Suspense,{fallback:c.a.createElement(u.a,null)},c.a.createElement(o.a,null,c.a.createElement(l.d,null,c.a.createElement(E,{path:"".concat(n,"/app"),authUser:t,component:m,basePath:n}),c.a.createElement(l.b,{path:"".concat(n,"/"),exact:!0,render:function(e){return c.a.createElement(s,e)}}),c.a.createElement(l.b,{path:"".concat(n,"/login"),exact:!0,render:function(e){return c.a.createElement(h,e)}}),c.a.createElement(l.b,{path:"".concat(n,"/register"),exact:!0,render:function(e){return c.a.createElement(b,e)}}),c.a.createElement(l.b,{path:"".concat(n,"/error"),exact:!0,render:function(e){return c.a.createElement(p,e)}}),c.a.createElement(l.a,{to:"".concat(n,"/error")})))))}}}]);
//# sourceMappingURL=App.0b835dae.chunk.js.map