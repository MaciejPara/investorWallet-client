(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[14],{77:function(e,a,t){"use strict";t.r(a);var s=t(5),r=t.n(s),n=t(11),o=t(52),i=t(1),p=t.n(i),l=t(61),m=t(23),u=t(6),d=t(17),c=t(14),w=t(51);a.default=function(e){e.match.url;var a=e.history,t=Object(i.useState)({email:"",password:"",passwordRepeat:""}),s=Object(o.a)(t,1)[0],h=Object(m.c)(),f=Object(m.e)().getState().authUser.user;Object(i.useEffect)((function(){f&&f.email&&a.push("/app")}));var g=function(){var e=Object(n.a)(r.a.mark((function e(t,s){var n,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.setSubmitting,e.prev=1,h({type:u.LOADER}),e.next=5,c.a.post({url:"/signup",body:t});case 5:o=e.sent,n(!1),o&&(d.store.addNotification({title:"Success",message:null===o||void 0===o?void 0:o.message,type:"success",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:4e3,onScreen:!0}}),h({type:u.LOADER}),a.push("/login")),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),d.store.addNotification({title:"Failure",message:e.t0.toString(),type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:3e3,onScreen:!0}}),h({type:u.LOADER}),n(!1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,t){return e.apply(this,arguments)}}();return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"logoutContainer withSpace"},p.a.createElement(w.c,{to:"/"},p.a.createElement("i",{className:"fas fa-sign-out-alt"}))),p.a.createElement("div",{className:"formContainer m-auto"},p.a.createElement("h1",null,"Register"),p.a.createElement(l.a,{initialValues:s,validate:function(e){var a={};return e.password||(a.password="Required"),e.passwordRepeat||(a.passwordRepeat="Required"),e.passwordRepeat&&e.password!==e.passwordRepeat&&(a.passwordRepeat="Passwords are not the same."),e.password&&e.password.length<8&&(a.password="Password must be at least 8 characters long."),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},onSubmit:g},(function(e){var a=e.values,t=e.errors,s=e.touched,r=e.handleChange,n=e.handleBlur,o=e.handleSubmit,i=e.isSubmitting;return p.a.createElement("form",{className:"form",onSubmit:o},p.a.createElement("input",{type:"email",name:"email",placeholder:"email",onChange:r,onBlur:n,value:a.email}),p.a.createElement("span",{className:"formValidationError"},s.email&&t.email),p.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:r,onBlur:n,value:a.password,autoComplete:"new-password"}),p.a.createElement("span",{className:"formValidationError"},s.password&&t.password),p.a.createElement("input",{type:"password",name:"passwordRepeat",placeholder:"repeat password",onChange:r,onBlur:n,value:a.passwordRepeat,autoComplete:"new-password"}),p.a.createElement("span",{className:"formValidationError"},s.passwordRepeat&&t.passwordRepeat),p.a.createElement("button",{className:"formSubmitButton",type:"submit",disabled:i},"Sign up"))}))))}}}]);
//# sourceMappingURL=14.548bb442.chunk.js.map