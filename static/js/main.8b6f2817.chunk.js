(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[1],{21:function(t,e,n){"use strict";var a=n(5),r=n.n(a),c=n(4),i=n(10),o=n(11),s=n(12),u=n(31),l=n(29),d=n(13),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a,r=t.apiUrl;return Object(o.a)(this,n),(a=e.call(this))._url=r,a._config={headers:{"content-type":"application/json","Access-Control-Allow-Origin":!0,"Access-Control-Allow-Credentials":!0},credentials:"include"},a}return Object(s.a)(n,[{key:"get",value:function(){var t=Object(i.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,t.next=3,fetch("".concat(this._url,"/").concat(n),Object(c.a)(Object(c.a)({},this._config),{},{method:"get"}));case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(i.a)(r.a.mark((function t(e){var n,a,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,a=e.body,t.next=3,fetch("".concat(this._url,"/").concat(n),Object(c.a)(Object(c.a)({},this._config),{},{method:"post",body:JSON.stringify(a)}));case 3:if(401!==(null===(i=t.sent)||void 0===i?void 0:i.status)){t.next=6;break}return t.abrupt("return",this._showUnauthorized());case 6:if(500!==(null===i||void 0===i?void 0:i.status)){t.next=8;break}return t.abrupt("return",this._showInternalServerError());case 8:if(409!==(null===i||void 0===i?void 0:i.status)){t.next=10;break}return t.abrupt("return",this._showEmailAlreadyExists());case 10:return t.next=12,i.json();case 12:return t.abrupt("return",t.sent);case 13:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(i.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.url,t.next=3,fetch("".concat(this._url,"/").concat(n),Object(c.a)(Object(c.a)({},this._config),{},{method:"delete"}));case 3:return a=t.sent,t.next=6,a.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),n}(function(){function t(){Object(o.a)(this,t)}return Object(s.a)(t,[{key:"_showUnauthorized",value:function(){d.store.addNotification({title:"Failure",message:"Unauthorized - check your e-mail or password.",type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:4e3,onScreen:!0}})}},{key:"_showInternalServerError",value:function(){d.store.addNotification({title:"Failure",message:"Internal server error. Contact with admin.",type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:4e3,onScreen:!0}})}},{key:"_showEmailAlreadyExists",value:function(){d.store.addNotification({title:"Failure",message:"Email already exists.",type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:4e3,onScreen:!0}})}}]),t}());e.a=new h({apiUrl:"https://investor-wallet.herokuapp.com"})},22:function(t,e,n){"use strict";var a=n(27),r=n.n(a),c=n(1),i=n.n(c);e.a=function(){return i.a.createElement("img",{className:"loader",src:r.a,alt:"loader"})}},24:function(t,e,n){"use strict";n(9)},25:function(t,e){},26:function(t,e){},27:function(t,e,n){t.exports=n.p+"static/media/loader.f6f2de36.gif"},35:function(t,e,n){t.exports=n(46)},40:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(14),i=n.n(c);n(40),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(22),s=n(7),u=n(30),l=n(4),d=n(9),h={user:JSON.parse(localStorage.getItem("investorWalletUser")||"{}"),error:""},f=n(5),p=n.n(f),m=n(10),v=n(11),b=n(12),O=n(21),g={currencies:{model:new(function(){function t(e){var n=e.name,a=e.plural;Object(v.a)(this,t),this._name=n,this._plural=a,this._fetchPending=!1,this._data=[]}return Object(b.a)(t,[{key:"_fetchData",value:function(){var t=Object(m.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get({url:"".concat(this._plural)});case 3:e=t.sent,this._fetchPending=!1,this._data=e,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"getData",value:function(){return 0!==this._data.length||this._fetchPending||this._fetchData(),this._data}}]),t}())({name:"currencyRate",plural:"currencyRates"}),data:[]}},j=Object(l.a)({},g),y={items:[{label:"Home",name:"home",path:""},{label:"Currencies",name:"currencies",path:"/currencies"},{label:"Crypto",name:"crypto",path:"/crypto"},{label:"Metals",name:"metals",path:"/metals"}],current:"home"},w=Object(s.c)({authUser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d.LOGIN_USER:return Object(l.a)(Object(l.a)({},t),{},{user:e.payload.user});case d.LOGOUT_USER:return Object(l.a)(Object(l.a)({},t),{},{user:void 0});default:return Object(l.a)({},t)}},collections:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;return e.type,Object(l.a)({},t)},menu:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d.MENU_CHANGE:return Object(l.a)(Object(l.a)({},t),{},{current:e.payload});default:return Object(l.a)({},t)}}}),_=n(16),E=p.a.mark(k);function k(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)([]);case 2:case"end":return t.stop()}}),E)}var x=p.a.mark(U);function U(t){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)([k()]);case 2:case"end":return t.stop()}}),x)}var S=Object(u.a)(),N=[S];var I=n(20),A=r.a.lazy((function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,77))}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I.a,{store:function(t){var e=Object(s.e)(w,t,Object(s.d)(s.a.apply(void 0,N)));return S.run(U),e}()},r.a.createElement(a.Suspense,{fallback:r.a.createElement(o.a,null)},r.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){"use strict";n.d(e,"LOGIN_USER",(function(){return a})),n.d(e,"LOGOUT_USER",(function(){return r})),n.d(e,"MENU_CHANGE",(function(){return c}));n(24),n(25),n(26);var a="LOGIN_USER",r="LOGOUT_USER",c="MENU_CHANGE"}},[[35,2,3]]]);
//# sourceMappingURL=main.8b6f2817.chunk.js.map