(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[12],{70:function(e,a,t){"use strict";t.r(a);var n=t(5),r=t.n(n),s=t(3),i=t(11),l=t(52),o=t(1),c=t.n(o),m=t(61),u=t(23),p=t(6),d=t(17),f=t(14),g=t(51);a.default=function(e){e.match.url;var a=e.history,t=Object(o.useState)({email:"",password:""}),n=Object(l.a)(t,1)[0],h=Object(u.c)(),E=Object(u.e)().getState(),S=E.authUser.user,b=E.settings.userSettingsAdapter;Object(o.useEffect)((function(){S&&S.email&&a.push("/app")}));var v=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h({type:p.LOADER}),e.next=4,f.a.post({url:"/signin",body:t});case 4:(n=e.sent)&&(localStorage.setItem("investorWalletUser",JSON.stringify(n)),h({type:p.LOGIN_USER,payload:{user:n}}),h({type:p.MENU_CHANGE,payload:"home"}),b.setOptions(n),n.settings&&(localStorage.setItem("investorWalletUserSettings",JSON.stringify(n.settings)),h({type:p.SET_SETTINGS,payload:Object(s.a)({},n.settings)})),h({type:p.LOADER}),a.push("/app")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),d.store.addNotification({title:"Failure",message:e.t0.toString(),type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}}),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"logoutContainer withSpace"},c.a.createElement(g.c,{to:"/"},c.a.createElement("i",{className:"fas fa-sign-out-alt"}))),c.a.createElement("div",{className:"formContainer m-auto"},c.a.createElement("h1",null,"Login"),c.a.createElement(m.a,{initialValues:n,validate:function(e){var a={};return e.password||(a.password="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},onSubmit:v},(function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,s=e.handleBlur,i=e.handleSubmit,l=e.isSubmitting;return c.a.createElement("form",{className:"form",onSubmit:i},c.a.createElement("input",{type:"email",name:"email",placeholder:"email",onChange:r,onBlur:s,value:a.email}),c.a.createElement("span",{className:"formValidationError"},t.email&&n.email&&t.email),c.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:r,onBlur:s,value:a.password}),c.a.createElement("span",{className:"formValidationError"},n.password&&t.password),c.a.createElement("button",{className:"formSubmitButton",type:"submit",disabled:l},"Sign in"))}))))}}}]);
//# sourceMappingURL=12.b022c6b8.chunk.js.map