(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[17],{103:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a.n(n),i=a(3),r=a(9),o=a(17),c=a(2),l=a(68),u=a(26),d=a(6),p=a(19),m=a(13),f=a(65),h=a(8);t.default=function(e){e.match.url;var t=e.history,a=e.message,n=Object(c.useState)({email:"",password:""}),j=Object(o.a)(n,1)[0],b=Object(u.c)(),g=Object(u.e)().getState(),O=g.authUser.user,v=g.settings.userSettingsAdapter;Object(c.useEffect)((function(){O&&O.email&&t.push("/app")})),Object(c.useEffect)((function(){a&&p.store.addNotification({title:"Info",message:a,type:"info",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:5e3,onScreen:!0}})}),[a]);var y=function(){var e=Object(r.a)(s.a.mark((function e(a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b({type:d.c}),e.next=4,m.a.post({url:"/signin",body:a});case 4:n=e.sent,b({type:d.c}),n&&(localStorage.setItem("investorWalletUser",JSON.stringify(n)),b({type:d.d,payload:{user:n}}),b({type:d.f,payload:"home"}),v.setOptions(n),n.settings&&(localStorage.setItem("investorWalletUserSettings",JSON.stringify(n.settings)),b({type:d.j,payload:Object(i.a)({},n.settings)})),t.push("/app")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),p.store.addNotification({title:"Failure",message:e.t0.toString(),type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}}),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"logoutContainer withSpace",children:Object(h.jsx)(f.c,{to:"/",children:Object(h.jsx)("i",{className:"fas fa-sign-out-alt"})})}),Object(h.jsxs)("div",{className:"formContainer m-auto",children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(l.a,{initialValues:j,validate:function(e){var t={};return e.password||(t.password="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:y,children:function(e){var t=e.values,a=e.errors,n=e.touched,s=e.handleChange,i=e.handleBlur,r=e.handleSubmit,o=e.isSubmitting;return Object(h.jsxs)("form",{className:"form",onSubmit:r,children:[Object(h.jsx)("input",{type:"email",name:"email",placeholder:"email",onChange:s,onBlur:i,value:t.email}),Object(h.jsx)("span",{className:"formValidationError",children:a.email&&n.email&&a.email}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"password",onChange:s,onBlur:i,value:t.password}),Object(h.jsx)("span",{className:"formValidationError",children:n.password&&a.password}),Object(h.jsx)("button",{className:"formSubmitButton",type:"submit",disabled:o,children:"Sign in"})]})}})]})]})}}}]);
//# sourceMappingURL=17.3bb1e926.chunk.js.map