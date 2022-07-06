"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[846],{8432:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var i=t(5861),a=t(885),r=t(7757),s=t.n(r),o=t(2791),l=t(5048),d=t(3602),c=t(188),u=t(4554),m=t(3316),v=t(8096),p=t(4925),h=t(8029),f=t(3466),Z=t(3400),g=t(6151),x=t(3239),b=t(869),w=t(9569),z=t(3710),j=t(9105),y=t(184);function S(){var e=(0,o.useState)(""),n=(0,a.Z)(e,2),t=n[0],r=n[1],S=(0,o.useState)(""),E=(0,a.Z)(S,2),M=E[0],P=E[1],k=(0,o.useState)(""),C=(0,a.Z)(k,2),L=C[0],I=C[1],_=(0,o.useState)(!1),R=(0,a.Z)(_,2),H=R[0],A=R[1],N=(0,l.I0)(),T=(0,j.Ds)().enqueueSnackbar,D=(0,d.l4)(),V=(0,a.Z)(D,2),q=V[0],F=V[1],O=F.data,G=F.isLoading,J=F.isSuccess,W=F.isError,Y=F.error,B=function(){var e=(0,i.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,q({name:t,email:M,password:L});case 3:r(""),P(""),I("");case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(e){var n=e.target,t=n.name,i=n.value;switch(t){case"name":return r(i);case"email":return P(i);case"password":return I(i);default:return}};return(0,o.useEffect)((function(){J&&(N((0,c.uJ)({user:{name:O.user.name,email:O.user.email},token:O.token})),T("You have registered successfully",{variant:"success"})),W&&400===(null===Y||void 0===Y?void 0:Y.originalStatus)?T("Error creating user",{variant:"error"}):W&&"FETCH_ERROR"===(null===Y||void 0===Y?void 0:Y.status)?T("Internet is disconnected",{variant:"error"}):W&&T("Something went wrong, please try again later",{variant:"error"})}),[N,J,W]),(0,y.jsxs)(u.Z,{component:"form",onSubmit:B,sx:{padding:"2rem",maxWidth:"20rem",display:"grid",gridTemplateColumns:"1fr",gridGap:"0.3rem",alignItems:"baseline"},children:[(0,y.jsx)(m.Z,{label:"Name",size:"small",margin:"normal",type:"text",name:"name",value:t,onChange:K,required:!0}),(0,y.jsx)(m.Z,{label:"Mail",size:"small",margin:"normal",type:"email",name:"email",value:M,onChange:K,required:!0}),(0,y.jsxs)(v.Z,{variant:"outlined",children:[(0,y.jsx)(p.Z,{htmlFor:"outlined-adornment-password",sx:{lineHeight:"2.4375em"},children:"Password *"}),(0,y.jsx)(h.Z,{id:"outlined-adornment-password",type:H?"text":"password",label:"Password",name:"password",value:L,onChange:K,size:"small",endAdornment:(0,y.jsx)(f.Z,{position:"end",children:(0,y.jsx)(Z.Z,{"aria-label":"toggle password visibility",onClick:function(){A(!H)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:H?(0,y.jsx)(w.Z,{}):(0,y.jsx)(z.Z,{})})}),sx:{m:"1rem 0",lineHeight:"4em"}})]}),(0,y.jsx)(g.Z,{variant:"contained",type:"submit",margin:"normal",sx:{width:"8rem"},endIcon:G?(0,y.jsx)(x.Z,{size:16,thickness:6,color:"inherit"}):(0,y.jsx)(b.Z,{}),children:"Sign up"})]})}},869:function(e,n,t){var i=t(5318);n.Z=void 0;var a=i(t(5649)),r=t(184),s=(0,a.default)((0,r.jsx)("path",{d:"M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17c-.16-.16-.42-.16-.58 0l-.88.88L20 12.75l.88-.88c.16-.16.16-.42 0-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"}),"AppRegistration");n.Z=s},3710:function(e,n,t){var i=t(4223),a=t(184);n.Z=(0,i.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,n,t){var i=t(4223),a=t(184);n.Z=(0,i.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3466:function(e,n,t){t.d(n,{Z:function(){return z}});var i=t(4942),a=t(3366),r=t(7462),s=t(2791),o=t(8182),l=t(4419),d=t(4036),c=t(890),u=t(3840),m=t(2930),v=t(6934),p=t(1217);function h(e){return(0,p.Z)("MuiInputAdornment",e)}var f,Z=(0,t(5878).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),g=t(1402),x=t(184),b=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,v.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,d.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},"filled"===t.variant&&(0,i.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),z=s.forwardRef((function(e,n){var t=(0,g.Z)({props:e,name:"MuiInputAdornment"}),i=t.children,v=t.className,p=t.component,Z=void 0===p?"div":p,z=t.disablePointerEvents,j=void 0!==z&&z,y=t.disableTypography,S=void 0!==y&&y,E=t.position,M=t.variant,P=(0,a.Z)(t,b),k=(0,m.Z)()||{},C=M;M&&k.variant,k&&!C&&(C=k.variant);var L=(0,r.Z)({},t,{hiddenLabel:k.hiddenLabel,size:k.size,disablePointerEvents:j,position:E,variant:C}),I=function(e){var n=e.classes,t=e.disablePointerEvents,i=e.hiddenLabel,a=e.position,r=e.size,s=e.variant,o={root:["root",t&&"disablePointerEvents",a&&"position".concat((0,d.Z)(a)),s,i&&"hiddenLabel",r&&"size".concat((0,d.Z)(r))]};return(0,l.Z)(o,h,n)}(L);return(0,x.jsx)(u.Z.Provider,{value:null,children:(0,x.jsx)(w,(0,r.Z)({as:Z,ownerState:L,className:(0,o.Z)(I.root,v),ref:n},P,{children:"string"!==typeof i||S?(0,x.jsxs)(s.Fragment,{children:["start"===E?f||(f=(0,x.jsx)("span",{className:"notranslate",children:"\u200b"})):null,i]}):(0,x.jsx)(c.Z,{color:"text.secondary",children:i})}))})}))}}]);
//# sourceMappingURL=RegisterPage.2f55f716.chunk.js.map