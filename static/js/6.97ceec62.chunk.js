(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{42:function(e,t,n){"use strict";function r(e,t,n,r,o,c,a){try{var s=e[c](a),u=s.value}catch(i){return void n(i)}s.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var a=e.apply(t,n);function s(e){r(a,o,c,s,u,"next",e)}function u(e){r(a,o,c,s,u,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return o}))},62:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r),c=n(42),a=n(1),s=n.n(a),u=n(16),i=n(14);t.default=function(e){e.match.url;var t=e.history,n=Object(u.c)(),r=Object(u.d)().getState().authUser.user,l=function(){var e=Object(c.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://investor-wallet.herokuapp.com","/signout"),{method:"get",headers:{"content-type":"application/json","Access-Control-Allow-Origin":!0,"Access-Control-Allow-Credentials":!0},credentials:"include"});case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent,localStorage.setItem("investorWalletUser",""),n({type:i.b,payload:{user:""}}),t.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(null===r||void 0===r?void 0:r.email)&&(document.cookie="connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;",l())})),s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"logged out"))}}}]);
//# sourceMappingURL=6.97ceec62.chunk.js.map