(this["webpackJsonpreact-phonebook"]=this["webpackJsonpreact-phonebook"]||[]).push([[0],{166:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"changeFilter",(function(){return x})),n.d(r,"switchTheme",(function(){return v}));var a={};n.r(a),n.d(a,"getIsLoggedIn",(function(){return k})),n.d(a,"getUserEmail",(function(){return C})),n.d(a,"getUserToken",(function(){return I}));var c={};n.r(c),n.d(c,"signUpOperation",(function(){return R})),n.d(c,"logInOperation",(function(){return q})),n.d(c,"logOutOperation",(function(){return B})),n.d(c,"getCurrentUserOperation",(function(){return W}));var o={};n.r(o),n.d(o,"getFilter",(function(){return je})),n.d(o,"getThemeMode",(function(){return pe}));var i,s,u,l,d=n(0),b=n.n(d),j=n(43),p=n.n(j),h=n(42),O=n(16),m=n(17),g=n(3),f=n(12),x=Object(f.b)("phonebook/changeFilter"),v=Object(f.b)("phonebook/switchTheme"),w=Object(f.d)("",Object(g.a)({},x,(function(e,t){return t.payload}))),y=Object(f.d)(["light"],Object(g.a)({},v,(function(e,t){var n=t.payload;return["".concat(n)]}))),k=function(e){return e.auth.isLoggedIn},C=function(e){return e.auth.user.email},I=function(e){return e.auth.token},S=n(40),T=n.n(S),L=n(54),E=n(112),U=n.n(E).a.create({baseURL:"https://connections-api.herokuapp.com",headers:{"Content-type":"application/json"}}),z=function(e){return U.post("users/signup",e)},M=function(e){return U.post("users/login",e)},P=n(28),A=function(e){U.defaults.headers.common.Authorization="Bearer ".concat(e)},F=function(){U.defaults.headers.common.Authorization=""},R=Object(f.c)("auth/signUpUser",function(){var e=Object(L.a)(T.a.mark((function e(t){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t);case 3:return n=e.sent,console.log("signUpResponse: ",n),A(n.data.token),P.b.success("You are registered!"),e.abrupt("return",n.data);case 10:e.prev=10,e.t0=e.catch(0),P.b.error("".concat(null===(r=e.t0.response)||void 0===r?void 0:r.data.message)),console.log("signUpError: ",e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),q=Object(f.c)("auth/logInUser",function(){var e=Object(L.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(t);case 3:return n=e.sent,A(n.data.token),P.b.success("You are in!"),e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),P.b.error("".concat(e.t0)),console.log("logInError: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),B=Object(f.c)("auth/logOutUser",Object(L.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.post("users/logout");case 3:return t=e.sent,F(),e.abrupt("return",t.data);case 8:e.prev=8,e.t0=e.catch(0),console.log("logOutError: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))),W=Object(f.c)("auth/getCurrentUser",function(){var e=Object(L.a)(T.a.mark((function e(t,n){var r,a,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),a=r.auth.token){e.next=4;break}return e.abrupt("return");case 4:return A(a),e.prev=5,e.next=8,U.get("users/current");case 8:return c=e.sent,e.abrupt("return",c.data);case 12:e.prev=12,e.t0=e.catch(5),P.b.error("".concat(e.t0)),console.log("getCurrentUserError: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()),D=n(19),N={user:{name:null,email:null},token:null,isLoggedIn:!1},V=Object(f.e)({name:"auth",initialState:N,extraReducers:(i={},Object(g.a)(i,c.signUpOperation.fulfilled,(function(e,t){var n=t.payload;if(n)return Object(D.a)(Object(D.a)({},e),{},{user:n.user,token:n.token,isLoggedIn:!0})})),Object(g.a)(i,c.logInOperation.fulfilled,(function(e,t){var n=t.payload;if(n)return Object(D.a)(Object(D.a)({},e),{},{user:n.user,token:n.token,isLoggedIn:!0})})),Object(g.a)(i,c.logOutOperation.fulfilled,(function(e){return Object(D.a)(Object(D.a)({},e),N)})),Object(g.a)(i,c.getCurrentUserOperation.fulfilled,(function(e,t){var n=t.payload;if(n)return Object(D.a)(Object(D.a)({},e),{},{user:n,isLoggedIn:!0})})),i)}).reducer,Z=n(113),G=n(35),H=Object(Z.a)({reducerPath:"contactsApi",baseQuery:Object(G.d)({baseUrl:"https://connections-api.herokuapp.com",prepareHeaders:function(e,t){var n=(0,t.getState)().auth.token;return n&&e.set("authorization","Bearer ".concat(n)),e}}),tagTypes:["Contacts"],endpoints:function(e){return{getContacts:e.query({query:function(){return{url:"/contacts",method:"GET"}},providesTags:function(e){return e?[].concat(Object(m.a)(e.map((function(e){return{type:"Contacts",id:e.id}}))),[{type:"Contacts",id:"LIST"}]):[{type:"Contacts",id:"LIST"}]}}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:[{type:"Contacts",id:"LIST"}]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:function(e,t,n){return[{type:"Contacts",id:n}]}})}}}),J=H.useGetContactsQuery,K=H.useAddContactMutation,Q=H.useDeleteContactMutation,X=n(45),Y=n(91),$=n.n(Y),_={key:"themeMode",storage:$.a},ee={key:"auth",storage:$.a,whitelist:["token"]},te=Object(f.a)({reducer:Object(g.a)({filter:w,theme:Object(X.g)(_,y),auth:Object(X.g)(ee,V)},H.reducerPath,H.reducer),middleware:function(e){return[].concat(Object(m.a)(e({serializableCheck:{ignoredActions:[X.a,X.f,X.b,X.c,X.d,X.e]}})),[H.middleware])},devTools:!1}),ne=Object(X.h)(te),re=n(114),ae=n(21),ce=n(26),oe=n(232),ie=n(234),se=n(228),ue=Object(ce.a)(ie.a)((function(){return{display:"flex",alignItems:"center",textTransform:"uppercase"}})),le=ce.a.div(s||(s=Object(ae.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),de=Object(ce.a)(oe.a)((function(){return{display:"block",marginBottom:"1rem",boxShadow:"0px 8px 15px -10px rgba(34, 60, 80, 0.6)"}})),be=Object(ce.a)(se.a)((function(e){var t=e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#222C2F":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:"dark"===t.palette.mode?"#132d57":"#7a9bbd",width:32,height:32,borderRadius:"25%","&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:"dark"===t.palette.mode?"#222C2F":"#aab4be",borderRadius:5}}})),je=function(e){return e.filter},pe=function(e){return e.theme[0]},he=n(82),Oe=n(225),me=ce.a.span(u||(u=Object(ae.a)(["\n  text-transform: uppercase;\n  color: ",";\n  display: flex;\n  align-items: center;\n"])),(function(e){return e.theme.palette.primary.main})),ge=n(1),fe=function(e){var t=e.emailUser,n=Object(O.d)();return Object(ge.jsxs)(me,{children:[t,Object(ge.jsx)(Oe.a,{type:"click",onClick:function(){return n(c.logOutOperation())},variant:"outlined",size:"small",endIcon:Object(ge.jsx)(he.b,{}),sx:{ml:2},children:"Logout"})]})},xe=function(){var e=Object(O.e)(o.getThemeMode),t=Object(O.e)(a.getIsLoggedIn),n=Object(O.e)(a.getUserEmail),c=Object(O.d)();return Object(ge.jsx)(de,{children:Object(ge.jsxs)(le,{children:[Object(ge.jsxs)(ue,{variant:"h5",children:["Phonebook",Object(ge.jsx)(he.a,{style:{marginLeft:"10px"}})]}),t&&Object(ge.jsx)(fe,{emailUser:n}),Object(ge.jsx)(be,{sx:{m:1},onChange:function(){c(r.switchTheme("light"===e?"dark":"light"))},inputProps:{"aria-label":"controlled"},checked:"dark"===e})]})})},ve=n(15),we=function(){return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(P.a,{}),Object(ge.jsx)(xe,{}),Object(ge.jsx)(ve.b,{})]})},ye=n(229),ke=n(233),Ce=Object(ce.a)(ke.a)((function(e){var t=e.theme;return{textAlign:"center",color:t.palette.text.secondary,backgroundColor:t.palette.background.card,display:"block",width:"100%",padding:"30px",marginBottom:"20px"}})),Ie=n(13),Se=n(223),Te=Object(ce.a)(h.b)((function(e){return{marginLeft:"10px",color:e.theme.palette.primary.main}})),Le=function(e){var t=e.name;return""!==t&&!/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(t)?[!0,"Name may contain only letters, apostrophe, dash and spaces"]:[!1,""]},Ee=function(e){var t=e.email;return""!==t&&!/^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/.test(t)?[!0,"Invalid email"]:[!1,""]},Ue=function(e){var t=e.password,n=""!==t,r=t.length<7;return n&&r?[!0,"Password must contain at least 7 characters"]:[!1,""]},ze={email:"",password:""},Me=function(){var e=Object(d.useState)((function(){return ze})),t=Object(Ie.a)(e,2),n=t[0],r=t[1],a=Ee(n),o=Object(Ie.a)(a,2),i=o[0],s=o[1],u=Ue(n),l=Object(Ie.a)(u,2),b=l[0],j=l[1],p=Object(d.useState)(!1),h=Object(Ie.a)(p,2),m=h[0],f=h[1],x=Object(ve.g)(),v=Object(O.d)(),w=function(e){r(Object(D.a)(Object(D.a)({},n),{},Object(g.a)({},e.target.name,e.target.value.trim())))};return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.email,a=n.password;i||b?f(!0):(v(c.logInOperation({email:t,password:a})),r(ze))},children:["Sign in",Object(ge.jsx)(Se.a,{id:"standard-basic",label:"Email",name:"email",type:"email",value:n.email,onChange:w,variant:"standard",error:m&&i,helperText:m&&s,sx:{mb:2},fullWidth:!0,required:!0}),Object(ge.jsx)(Se.a,{id:"standard-password-input",label:"Password",name:"password",type:"password",value:n.password,onChange:w,autoComplete:"current-password",variant:"standard",error:m&&b,helperText:m&&j,sx:{mb:2},fullWidth:!0,required:!0}),Object(ge.jsx)(Oe.a,{type:"submit",loadingIndicator:"Adding...",variant:"outlined",children:"Enter"})]}),Object(ge.jsxs)("p",{children:["Don't have an account?",Object(ge.jsx)(Te,{to:"/signup",state:{from:x},children:"Create account"})]})]})},Pe=function(){return Object(ge.jsx)(oe.a,{maxWidth:"lg",children:Object(ge.jsx)(ye.a,{item:!0,xs:12,sm:6,md:6,sx:{margin:"0 auto"},children:Object(ge.jsx)(Ce,{children:Object(ge.jsx)(Me,{})})})})},Ae=function(e){var t=e.children,n=Object(O.e)(a.getIsLoggedIn),r=Object(ve.g)();return Object(ge.jsx)(ge.Fragment,{children:n?t:Object(ge.jsx)(ve.a,{to:"/login",state:{from:r},replace:!0})})},Fe=function(e){var t=e.children,n=Object(O.e)(a.getIsLoggedIn),r=Object(ve.g)();return Object(ge.jsx)(ge.Fragment,{children:n?Object(ge.jsx)(ve.a,{to:"/user",state:{from:r},replace:!0}):t})},Re={name:"",email:"",password:""},qe=function(){var e=Object(d.useState)((function(){return Re})),t=Object(Ie.a)(e,2),n=t[0],r=t[1],a=Le(n),o=Object(Ie.a)(a,2),i=o[0],s=o[1],u=Ee(n),l=Object(Ie.a)(u,2),b=l[0],j=l[1],p=Ue(n),h=Object(Ie.a)(p,2),m=h[0],f=h[1],x=Object(d.useState)(!1),v=Object(Ie.a)(x,2),w=v[0],y=v[1],k=Object(ve.g)(),C=Object(O.d)(),I=function(e){r(Object(D.a)(Object(D.a)({},n),{},Object(g.a)({},e.target.name,e.target.value.trim())))};return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.name,a=n.email,o=n.password;i||b||m?y(!0):(y(!1),C(c.signUpOperation({name:t,email:a,password:o})),r(Re))},children:["Registration",Object(ge.jsx)(Se.a,{id:"standard-basic",label:"User name",name:"name",type:"text",value:n.name,onChange:function(e){r(Object(D.a)(Object(D.a)({},n),{},Object(g.a)({},e.target.name,e.target.value)))},variant:"standard",error:w&&i,helperText:w&&s,sx:{mb:2},fullWidth:!0,required:!0}),Object(ge.jsx)(Se.a,{id:"standard-basic",label:"Email",name:"email",type:"email",value:n.email,onChange:I,variant:"standard",error:w&&b,helperText:w&&j,sx:{mb:2},fullWidth:!0,required:!0}),Object(ge.jsx)(Se.a,{id:"standard-password-input",label:"Password",name:"password",type:"password",value:n.password,onChange:I,autoComplete:"current-password",variant:"standard",error:w&&m,helperText:w&&f,sx:{mb:2},fullWidth:!0,required:!0}),Object(ge.jsx)(Oe.a,{type:"submit",loadingIndicator:"Adding...",variant:"outlined",children:"Register"})]}),Object(ge.jsxs)("p",{children:["Already have an account?",Object(ge.jsx)(Te,{to:"/login",state:{from:k},children:"Sign in"})]})]})},Be=function(){return Object(ge.jsx)(oe.a,{maxWidth:"lg",children:Object(ge.jsx)(ye.a,{item:!0,xs:12,sm:6,md:6,sx:{margin:"0 auto"},children:Object(ge.jsx)(Ce,{children:Object(ge.jsx)(qe,{})})})})},We=n(118),De=n(119),Ne=["onChange"],Ve=Object(d.forwardRef)((function(e,t){var n=e.onChange,r=Object(We.a)(e,Ne);return Object(ge.jsx)(De.a,Object(D.a)(Object(D.a)({},r),{},{mask:"+38(###) ###-##-##",definitions:{"#":/[0-9]/},inputRef:t,onAccept:function(t){return n({target:{name:e.name,value:t}})},overwrite:!0}))})),Ze=ce.a.form(l||(l=Object(ae.a)(["\n  margin-bottom: 20px;\n"]))),Ge={name:"",number:""},He=function(){var e=Object(d.useState)((function(){return Ge})),t=Object(Ie.a)(e,2),n=t[0],r=t[1],a=Le(n),c=Object(Ie.a)(a,2),o=c[0],i=c[1],s=n.number.length<18?[!0,"Invalid phone number"]:[!1,""],u=Object(Ie.a)(s,2),l=u[0],b=u[1],j=Object(d.useState)(!1),p=Object(Ie.a)(j,2),h=p[0],O=p[1],m=J().data,f=K(),x=Object(Ie.a)(f,2),v=x[0],w=x[1],y=w.data,k=w.isLoading,C=w.isSuccess,I=w.isError,S=function(e){r(Object(D.a)(Object(D.a)({},n),{},Object(g.a)({},e.target.name,e.target.value)))},E=function(e){var t=e.name,n=e.number,r=t.toLowerCase().replace(/\s+/g,""),a=n.replace(/\D/g,"");return m.some((function(e){return e.name.toLowerCase().replace(/\s+/g,"")===r||e.number.replace(/\D/g,"")===a}))},U=function(){var e=Object(L.a)(T.a.mark((function e(t){var r,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=n.name,a=n.number,r=r.trim(),!E({name:r,number:a})){e.next=6;break}return P.b.error("This contact already exists",{duration:5e3,position:"top-center"}),e.abrupt("return");case 6:if(!o&&!l){e.next=9;break}return O(!0),e.abrupt("return");case 9:O(!1),v({name:r,number:a});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.useEffect)((function(){C&&(P.b.success("Contact ".concat(y.name," successfully added")),r(Ge))}),[y,C]),Object(d.useEffect)((function(){I&&P.b.error("Oops, something went wrong...")}),[I]),Object(ge.jsxs)(Ze,{onSubmit:U,children:[Object(ge.jsx)(Se.a,{id:"standard-basic",label:"Name",name:"name",value:n.name,onChange:S,variant:"standard",error:h&&o,helperText:h&&i,sx:{mb:2},fullWidth:!0,required:!0}),Object(ge.jsx)(Se.a,{id:"standard-basic",label:"Phone",name:"number",value:n.number,onChange:S,InputProps:{inputMode:"tel",inputComponent:Ve},variant:"standard",error:h&&l,helperText:h&&b,sx:{mb:2},fullWidth:!0,required:!0}),Object(ge.jsx)(Oe.a,{type:"submit",loading:k,disabled:k,loadingIndicator:"Adding...",variant:"outlined",children:"Add contact"})]})},Je=n(237),Ke=n(238),Qe=n(236),Xe=n(222),Ye=n(235),$e=n(241),_e=n(242),et=n(231),tt=n(243),nt=[{id:"name",label:"Name"},{id:"phone",label:"Phone"}];var rt=function(e){var t=e.order,n=e.orderBy,r=e.onRequestSort;return Object(ge.jsx)($e.a,{sx:{backgroundColor:"background.card"},children:Object(ge.jsxs)(_e.a,{children:[nt.map((function(e){return Object(ge.jsx)(tt.a,{sx:{fontSize:"1.275rem",textAlign:"center",padding:"normal",textTransform:"uppercase",color:"text.secondary"},children:Object(ge.jsx)(et.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(a=e.id,function(e){r(e,a)}),children:e.label})},e.id);var a})),Object(ge.jsx)(tt.a,{align:"center",padding:"normal"})]})})},at=function(e){var t=e.id,n=e.name,r=e.number,a=Q(),c=Object(Ie.a)(a,2),o=c[0],i=c[1],s=i.data,u=i.isLoading;Object(d.useEffect)((function(){s&&P.b.success("Contact successfully deleted")}),[s]);return Object(ge.jsxs)(_e.a,{hover:!0,role:"listitem",tabIndex:-1,children:[Object(ge.jsx)(tt.a,{align:"center",children:n}),Object(ge.jsx)(tt.a,{align:"center",children:r}),Object(ge.jsx)(tt.a,{align:"center",children:Object(ge.jsx)(Oe.a,{onClick:function(){o(t)},disabled:u,loading:u,loadingIndicator:"Deleting...",variant:"outlined",children:"Delete"})})]})};function ct(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function ot(e,t){return"desc"===e?function(e,n){return ct(e,n,t)}:function(e,n){return-ct(e,n,t)}}var it,st=function(e){var t=e.contacts,n=Object(d.useState)("asc"),r=Object(Ie.a)(n,2),a=r[0],c=r[1],o=Object(d.useState)(""),i=Object(Ie.a)(o,2),s=i[0],u=i[1],l=Object(d.useState)(0),b=Object(Ie.a)(l,2),j=b[0],p=b[1],h=Object(d.useState)(5),O=Object(Ie.a)(h,2),m=O[0],g=O[1];return Object(d.useEffect)((function(){t.length<=m&&j>0&&p(0)}),[t.length,m,j]),Object(d.useEffect)((function(){var e=Math.floor(t.length/m);j>e&&(console.log("pageInUse: ",j),console.log("pageNum: ",e),p(e))}),[t.length,j,m]),Object(ge.jsx)(ke.a,{sx:{width:"100%"},children:Object(ge.jsxs)(Ye.a,{sx:{width:"100%",mb:2},children:[Object(ge.jsx)(Qe.a,{children:Object(ge.jsxs)(Je.a,{sx:{minWidth:300},"aria-labelledby":"tableTitle",size:"normal",children:[Object(ge.jsx)(rt,{order:a,orderBy:s,onRequestSort:function(e,t){var n=s===t&&"asc"===a;console.log("property: ",t),console.log("order: ",a),console.log("orderBy: ",s),c(n?"desc":"asc"),u(t)}}),Object(ge.jsx)(Ke.a,{children:t.sort(ot(a,s)).slice(j*m,j*m+m).map((function(e){return Object(ge.jsx)(at,Object(D.a)({},e),e.id)}))})]})}),Object(ge.jsx)(Xe.a,{rowsPerPageOptions:[5,10,25],component:"div",count:t.length,rowsPerPage:m,page:t.length<=m?0:j,onPageChange:function(e,t){p(t)},onRowsPerPageChange:function(e){console.log("eventRowsPerPage: ",e),g(parseInt(e.target.value,10)),p(0)}})]})})},ut=function(){var e=Object(O.e)(o.getFilter),t=J(),n=t.data,r=t.error;console.log("contacts: ",n);var a=e.toLowerCase(),c=[];n&&(c=Object(m.a)(n).sort((function(e,t){return t.id-e.id})).filter((function(e){return e.name.toLowerCase().includes(a)})));return Object(d.useEffect)((function(){return function(){te.dispatch(H.util.resetApiState())}}),[]),Object(d.useEffect)((function(){r&&P.b.error("\u0421an't get contacts info from server")}),[r]),Object(ge.jsx)(ge.Fragment,{children:!r&&n&&Object(ge.jsx)(st,{contacts:c})})},lt=ce.a.label(it||(it=Object(ae.a)(["\n  font-size: 1.1rem;\n  font-weight: 500;\n"]))),dt=function(){var e=Object(O.e)(o.getFilter),t=Object(O.d)();return Object(ge.jsxs)(lt,{children:["Filter contacts by name:",Object(ge.jsx)(Se.a,{id:"standard-basic",label:"Enter name...",name:"filter",value:e,onChange:function(e){return t(r.changeFilter(e.currentTarget.value))},variant:"standard",fullWidth:!0})]})},bt=function(){return Object(ge.jsx)(oe.a,{maxWidth:"lg",children:Object(ge.jsxs)(ye.a,{container:!0,spacing:2,children:[Object(ge.jsxs)(ye.a,{item:!0,xs:12,sm:5,md:4,children:[Object(ge.jsx)(Ce,{children:Object(ge.jsx)(He,{})}),Object(ge.jsx)(Ce,{children:Object(ge.jsx)(dt,{})})]}),Object(ge.jsx)(ye.a,{item:!0,xs:12,sm:7,md:8,children:Object(ge.jsx)(ut,{})})]})})},jt=function(){var e=Object(O.d)();return Object(d.useEffect)((function(){e(c.getCurrentUserOperation())}),[e]),Object(ge.jsx)(ge.Fragment,{children:Object(ge.jsx)(ve.e,{children:Object(ge.jsxs)(ve.c,{path:"/",element:Object(ge.jsx)(we,{}),children:[Object(ge.jsx)(ve.c,{index:!0,element:Object(ge.jsx)(Fe,{children:Object(ge.jsx)(Pe,{})})}),Object(ge.jsx)(ve.c,{path:"react-phonebook",element:Object(ge.jsx)(ve.a,{to:"/",replace:!0})}),Object(ge.jsx)(ve.c,{path:"login",element:Object(ge.jsx)(Fe,{children:Object(ge.jsx)(Pe,{})})}),Object(ge.jsx)(ve.c,{path:"signup",element:Object(ge.jsx)(Fe,{children:Object(ge.jsx)(Be,{})})}),Object(ge.jsx)(ve.c,{path:"user",element:Object(ge.jsx)(Ae,{children:Object(ge.jsx)(bt,{})})})]})})})},pt=n(220),ht=n(120),Ot=n(227),mt=function(e){var t=e.children,n=Object(O.e)(o.getThemeMode),r=Object(d.useMemo)((function(){return Object(ht.a)((e=n,{typography:{fontFamily:"Kanit"},components:{MuiCssBaseline:{styleOverrides:"\n        @font-face {\n          font-family: 'Ubuntu';\n          font-style: normal;\n          font-weight: 400;\n          src: url(\"https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;600&display=swap\");\n        }\n      "}},palette:Object(D.a)({mode:e},"light"===e?{background:{card:"#E3E6F0"}}:{background:{card:"#222C2F"}})}));var e}),[n]);return Object(ge.jsxs)(Ot.a,{theme:r,children:[Object(ge.jsx)(pt.a,{}),t]})};p.a.render(Object(ge.jsx)(b.a.StrictMode,{children:Object(ge.jsx)(O.a,{store:te,children:Object(ge.jsx)(re.a,{loading:null,persistor:ne,children:Object(ge.jsx)(h.a,{children:Object(ge.jsx)(mt,{children:Object(ge.jsx)(jt,{})})})})})}),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.81ab8196.chunk.js.map