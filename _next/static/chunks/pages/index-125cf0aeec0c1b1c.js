(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3234:function(e,t,n){"use strict";n.d(t,{NI:function(){return w},Yp:function(){return f},lX:function(){return b}});var r=n(7294),i=n(8387),a=n(6734),o=n(7976),l=n(4520),s=n(2494),d=(...e)=>e.filter(Boolean).join(" "),h=e=>e?"":void 0,c=e=>!!e||void 0;function u(...e){return function(t){e.some(e=>(null==e||e(t),null==t?void 0:t.defaultPrevented))}}var[p,g]=(0,i.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[m,x]=(0,i.k)({strict:!1,name:"FormControlContext"}),w=(0,o.Gp)(function(e,t){let n=(0,o.jC)("Form",e),i=(0,l.Lr)(e),{getRootProps:s,htmlProps:c,...u}=function(e){let{id:t,isRequired:n,isInvalid:i,isDisabled:o,isReadOnly:l,...s}=e,d=(0,r.useId)(),c=t||`field-${d}`,u=`${c}-label`,p=`${c}-feedback`,g=`${c}-helptext`,[m,x]=(0,r.useState)(!1),[w,f]=(0,r.useState)(!1),[y,v]=(0,r.useState)(!1),b=(0,r.useCallback)((e={},t=null)=>({id:g,...e,ref:(0,a.lq)(t,e=>{e&&f(!0)})}),[g]),C=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,"data-focus":h(y),"data-disabled":h(o),"data-invalid":h(i),"data-readonly":h(l),id:e.id??u,htmlFor:e.htmlFor??c}),[c,o,y,i,l,u]),_=(0,r.useCallback)((e={},t=null)=>({id:p,...e,ref:(0,a.lq)(t,e=>{e&&x(!0)}),"aria-live":"polite"}),[p]),D=(0,r.useCallback)((e={},t=null)=>({...e,...s,ref:t,role:"group"}),[s]),S=(0,r.useCallback)((e={},t=null)=>({...e,ref:t,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!i,isReadOnly:!!l,isDisabled:!!o,isFocused:!!y,onFocus:()=>v(!0),onBlur:()=>v(!1),hasFeedbackText:m,setHasFeedbackText:x,hasHelpText:w,setHasHelpText:f,id:c,labelId:u,feedbackId:p,helpTextId:g,htmlProps:s,getHelpTextProps:b,getErrorMessageProps:_,getRootProps:D,getLabelProps:C,getRequiredIndicatorProps:S}}(i),g=d("chakra-form-control",e.className);return r.createElement(m,{value:u},r.createElement(p,{value:n},r.createElement(o.m$.div,{...s({},t),className:g,__css:n.container})))});function f(e){let{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:i,...a}=function(e){let t=x(),{id:n,disabled:r,readOnly:i,required:a,isRequired:o,isInvalid:l,isReadOnly:s,isDisabled:d,onFocus:h,onBlur:c,...p}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&g.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&g.push(t.helpTextId),{...p,"aria-describedby":g.join(" ")||void 0,id:n??(null==t?void 0:t.id),isDisabled:r??d??(null==t?void 0:t.isDisabled),isReadOnly:i??s??(null==t?void 0:t.isReadOnly),isRequired:a??o??(null==t?void 0:t.isRequired),isInvalid:l??(null==t?void 0:t.isInvalid),onFocus:u(null==t?void 0:t.onFocus,h),onBlur:u(null==t?void 0:t.onBlur,c)}}(e);return{...a,disabled:t,readOnly:r,required:i,"aria-invalid":c(n),"aria-required":c(i),"aria-readonly":c(r)}}w.displayName="FormControl",(0,o.Gp)(function(e,t){let n=x(),i=g(),a=d("chakra-form__helper-text",e.className);return r.createElement(o.m$.div,{...null==n?void 0:n.getHelpTextProps(e,t),__css:i.helperText,className:a})}).displayName="FormHelperText";var[y,v]=(0,i.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "});(0,o.Gp)((e,t)=>{let n=(0,o.jC)("FormError",e),i=(0,l.Lr)(e),a=x();return(null==a?void 0:a.isInvalid)?r.createElement(y,{value:n},r.createElement(o.m$.div,{...null==a?void 0:a.getErrorMessageProps(i,t),className:d("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null}).displayName="FormErrorMessage",(0,o.Gp)((e,t)=>{let n=v(),i=x();if(!(null==i?void 0:i.isInvalid))return null;let a=d("chakra-form__error-icon",e.className);return r.createElement(s.JO,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:a},r.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))}).displayName="FormErrorIcon";var b=(0,o.Gp)(function(e,t){let n=(0,o.mq)("FormLabel",e),i=(0,l.Lr)(e),{className:a,children:s,requiredIndicator:h=r.createElement(C,null),optionalIndicator:c=null,...u}=i,p=x(),g=(null==p?void 0:p.getLabelProps(u,t))??{ref:t,...u};return r.createElement(o.m$.label,{...g,className:d("chakra-form__label",i.className),__css:{display:"block",textAlign:"start",...n}},s,(null==p?void 0:p.isRequired)?h:c)});b.displayName="FormLabel";var C=(0,o.Gp)(function(e,t){let n=x(),i=g();if(!(null==n?void 0:n.isRequired))return null;let a=d("chakra-form__required-indicator",e.className);return r.createElement(o.m$.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:i.requiredIndicator,className:a})});C.displayName="RequiredIndicator"},979:function(e,t,n){"use strict";n.d(t,{II:function(){return c}});var r=n(7294),i=n(3234),a=n(7976),o=n(4520),l=n(5336),s=n(8387),d=n(4031),h=n(6076),c=(0,a.Gp)(function(e,t){let{htmlSize:n,...s}=e,d=(0,a.jC)("Input",s),h=(0,o.Lr)(s),c=(0,i.Yp)(h),u=(0,l.cx)("chakra-input",e.className);return r.createElement(a.m$.input,{size:n,...c,__css:d.field,ref:t,className:u})});c.displayName="Input",c.id="Input";var[u,p]=(0,s.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "});(0,a.Gp)(function(e,t){let n=(0,a.jC)("Input",e),{children:i,className:s,...c}=(0,o.Lr)(e),p=(0,l.cx)("chakra-input__group",s),g={},m=(0,d.W)(i),x=n.field;m.forEach(e=>{n&&(x&&"InputLeftElement"===e.type.id&&(g.paddingStart=x.height??x.h),x&&"InputRightElement"===e.type.id&&(g.paddingEnd=x.height??x.h),"InputRightAddon"===e.type.id&&(g.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(g.borderStartRadius=0))});let w=m.map(t=>{var n,i;let a=(0,h.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(i=t.props)?void 0:i.variant)||e.variant});return"Input"!==t.type.id?(0,r.cloneElement)(t,a):(0,r.cloneElement)(t,Object.assign(a,g,t.props))});return r.createElement(a.m$.div,{className:p,ref:t,__css:{width:"100%",display:"flex",position:"relative"},...c},r.createElement(u,{value:n},w))}).displayName="InputGroup";var g={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},m=(0,a.m$)("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),x=(0,a.Gp)(function(e,t){let{placement:n="left",...i}=e,a=g[n]??{},o=p();return r.createElement(m,{ref:t,...i,__css:{...o.addon,...a}})});x.displayName="InputAddon";var w=(0,a.Gp)(function(e,t){return r.createElement(x,{ref:t,placement:"left",...e,className:(0,l.cx)("chakra-input__left-addon",e.className)})});w.displayName="InputLeftAddon",w.id="InputLeftAddon";var f=(0,a.Gp)(function(e,t){return r.createElement(x,{ref:t,placement:"right",...e,className:(0,l.cx)("chakra-input__right-addon",e.className)})});f.displayName="InputRightAddon",f.id="InputRightAddon";var y=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),v=(0,a.Gp)(function(e,t){let{placement:n="left",...i}=e,a=p(),o=a.field,l={["left"===n?"insetStart":"insetEnd"]:"0",width:(null==o?void 0:o.height)??(null==o?void 0:o.h),height:(null==o?void 0:o.height)??(null==o?void 0:o.h),fontSize:null==o?void 0:o.fontSize,...a.element};return r.createElement(y,{ref:t,__css:l,...i})});v.id="InputElement",v.displayName="InputElement";var b=(0,a.Gp)(function(e,t){let{className:n,...i}=e,a=(0,l.cx)("chakra-input__left-element",n);return r.createElement(v,{ref:t,placement:"left",className:a,...i})});b.id="InputLeftElement",b.displayName="InputLeftElement";var C=(0,a.Gp)(function(e,t){let{className:n,...i}=e,a=(0,l.cx)("chakra-input__right-element",n);return r.createElement(v,{ref:t,placement:"right",className:a,...i})});C.id="InputRightElement",C.displayName="InputRightElement"},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1474)}])},1474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(7568),i=n(4924),a=n(6042),o=n(9396),l=n(655),s=n(5893),d=n(9008),h=n.n(d),c=n(196),u=n(6120),p=n.n(u);n(1919);var g=n(7976),m=n(639),x=n(3234),w=n(979),f=n(7741),y=n(7294),v=n(7516),b=[{label:"data",name:"QRコードに格納するデータ"},{label:"version",name:"QRコードのバージョン"},{label:"ecc_level",name:"誤り訂正レベル"},{label:"mask_pattern",name:"マスクパターン"},{label:"threshold",name:"threshold"},{label:"variance",name:"variance"},],C=function(){var e,t,n=function(t){if(t.target.files){var n=new FileReader,r=t.target.files[0];null!=r&&(n.readAsDataURL(r),n.onload=function(){if(null!=n.result){console.log("フォームで選択された画像(base64)"),console.log(n.result);var e=n.result;console.log(e),_("img_string",e),console.log(k)}},q(e.CropImg))}},d=function(){D("central_x_coordinate",String(W.x+W.width/2)),D("central_y_coordinate",String(W.y+W.height/2)),D("x_axis",String(C((W.x+W.width/2)/B.x))),D("y_axis",String(C((W.y+W.height/2)/B.y))),B.x>=B.y?D("scale",String(100*C(W.height/B.y))):D("scale",String(100*C(W.width/B.x,100)))},u=function(){console.log("execute getImgSize");var e=document.getElementById("crop");if(null!=e){var t=e.width,n=e.height;S("x",t),S("y",n),H(!0)}},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return Math.round(e*t)/t},_=function(e,t){I(function(n){return(0,o.Z)((0,a.Z)({},n),(0,i.Z)({},e,t))})},D=function(e,t){console.log("".concat(e,";").concat(t)),Z(function(n){return(0,o.Z)((0,a.Z)({},n),(0,i.Z)({},e,t))})},S=function(e,t){console.log("".concat(e,";").concat(t)),K(function(n){return(0,o.Z)((0,a.Z)({},n),(0,i.Z)({},e,t))})};(t=e||(e={})).SelectImg="select img",t.CropImg="scrop img",t.InputParameter="input parameter",t.DisplayQRcode="display qrcode",t.DisplayResult="display result",t.IsLoading="is loading";var R=(0,y.useState)({img_string:"",data:"https://www.okayama-u.ac.jp",version:"5",ecc_level:"0",encoding:"0",mask_pattern:"0",traial_times:"100",threshold:"96",scale:"50",variance:"0.7",y_axis:"0.5",x_axis:"0.5"}),k=R[0],I=R[1],E=(0,y.useState)(""),j=E[0],N=E[1],P=(0,y.useState)(""),M=P[0],O=P[1],A=(0,y.useState)("");A[0],A[1];var F=(0,y.useState)(!1);F[0],F[1];var z=(0,y.useState)({x:0,y:0});z[0],z[1];var L=(0,y.useState)(!1),X=L[0],H=L[1],Y=(0,y.useState)({x:0,y:0}),B=Y[0],K=Y[1],$=(0,y.useState)(e.SelectImg),G=$[0],q=$[1],T=(0,y.useState)({central_x_coordinate:"",central_y_coordinate:"",y_axis:"",x_axis:"",scale:""}),U=T[0],Z=T[1],Q=(0,y.useState)({unit:"px",x:100,y:100,width:150,height:150}),W=Q[0],J=Q[1];function V(){return(V=(0,r.Z)(function(){var t,n;return(0,l.__generator)(this,function(r){switch(r.label){case 0:console.log("execute onSubmit"),console.log(k),r.label=1;case 1:return r.trys.push([1,3,,4]),q(e.IsLoading),[4,c.ZP.post("https://design-qrcode-api.herokuapp.com/api/create_qrcode",k)];case 2:return N((t=r.sent()).data.qrcode_base64),O(t.data.output_base64),console.log("response.data"),console.log(t.data),q(e.DisplayResult),[3,4];case 3:return n=r.sent(),console.error(n),[3,4];case 4:return[2]}})})).apply(this,arguments)}return(0,s.jsxs)(g.m$.div,{bgColor:"#F4F4F4",height:"100vh",children:[(0,s.jsxs)(h(),{children:[(0,s.jsx)("title",{children:"Design QRcode Generator"}),(0,s.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)(m.kC,{flexDirection:"column",alignItems:"center",py:"12",children:[(0,s.jsx)(m.X6,{size:"3xl",children:"Design QRcode Generator"}),G==e.SelectImg&&(0,s.jsxs)(m.xu,{mt:"24",children:[(0,s.jsx)(m.xv,{fontSize:"2xl",pt:"4",fontWeight:"medium",children:"QRコードの背景画像に設定する画像を選択してください．"}),(0,s.jsx)(x.NI,{w:"xl",children:(0,s.jsx)(w.II,{mt:"4",borderColor:"darkgray",fontWeight:"black",type:"file",accept:"image/*,.png,.jpg,.jpeg,",onChange:function(e){n(e)}})})]}),G==e.CropImg&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.xv,{fontSize:"2xl",pt:"4",children:"QRコード化する範囲を指定してください．"}),(0,s.jsx)(m.xu,{width:"550px",children:(0,s.jsx)(p(),{crop:W,aspect:1,onChange:function(e){X||u(),J(e),console.log(W),d(),console.log({originalImgSize:B})},children:(0,s.jsx)(g.m$.img,{id:"crop",src:"".concat(k.img_string),alt:"切り抜き前画像",maxWidth:"550px"})})}),(0,s.jsxs)(m.kC,{mt:"4",gap:"8",children:[(0,s.jsx)(f.zx,{colorScheme:"facebook",onClick:function(){console.log("clicked 確定 button"),_("scale",U.scale),_("x_axis",U.x_axis),_("y_axis",U.y_axis),q(e.InputParameter),H(!1)},children:"確定"}),(0,s.jsx)(f.zx,{onClick:function(){q(e.SelectImg)},colorScheme:"blackAlpha",children:"別の画像を選択する"})]})]}),G==e.InputParameter&&(0,s.jsxs)(s.Fragment,{children:[b.map(function(e){return(0,s.jsxs)(m.xu,{children:[(0,s.jsx)(x.lX,{htmlFor:"name",mt:"4",w:"max",fontWeight:"bold",children:e.name}),(0,s.jsx)(w.II,{w:"xl",id:e.label,variant:"filled",value:k[e.label],placeholder:e.label,backgroundColor:"blue.50",onChange:function(t){return _(e.label,t.target.value)}},e.label)]},e.label)}),(0,s.jsxs)(m.kC,{mt:"10",gap:4,children:[(0,s.jsx)(f.zx,{onClick:function(){console.log(k),function(){V.apply(this,arguments)}()},colorScheme:"facebook",children:"QRコード作成"}),(0,s.jsx)(f.zx,{onClick:function(){q(e.SelectImg)},colorScheme:"blackAlpha",children:"別の画像を選択する"})]})]}),G==e.IsLoading&&(0,s.jsxs)(m.kC,{mt:"100",flexFlow:"column",children:[(0,s.jsx)(m.xv,{fontSize:"4xl",children:"デザインQRコードを作成中..."}),(0,s.jsx)(g.m$.img,{src:"/loading.gif",alt:"loading",width:"100px",height:"100px",mx:"auto",mt:"4"})]}),G==e.DisplayQRcode&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.M5,{bgColor:"blackAlpha.400",width:"700px",height:"600px",mt:"12",borderRadius:"100px",children:(0,s.jsx)(g.m$.img,{src:"data:image/jpeg;base64,".concat(j),alt:"デザインQRコード",width:"400",height:"400"})}),(0,s.jsxs)(m.kC,{gap:12,children:[(0,s.jsx)(f.zx,{onClick:function(){q(e.DisplayResult)},colorScheme:"facebook",mt:"4",children:"全体画像に切り替える"}),(0,s.jsx)(f.zx,{onClick:function(){q(e.SelectImg),O("")},colorScheme:"blackAlpha",mt:"4",children:"別の画像で試す"}),(0,s.jsx)(f.zx,{as:"a",href:"data:image/jpeg;base64,".concat(M),download:!0,bgColor:"green.500",color:"white",mt:"4",mr:"4",_hover:{color:"blue.500",bgColor:"white",border:"1px",borderColor:"blue.500"},children:(0,s.jsx)(v.yf7,{size:"30px"})})]})]}),G==e.DisplayResult&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(m.M5,{bgColor:"blackAlpha.400",width:"700px",height:"600px",mt:"12",borderRadius:"100px",children:(0,s.jsx)(g.m$.img,{src:"data:image/jpeg;base64,".concat(M),alt:"デザインQRコード",maxW:"550px"})}),(0,s.jsxs)(m.kC,{gap:12,children:[(0,s.jsx)(f.zx,{onClick:function(){q(e.DisplayQRcode)},colorScheme:"facebook",mt:"4",children:"QRコードに切り替える"}),(0,s.jsx)(f.zx,{onClick:function(){q(e.SelectImg),O("")},colorScheme:"blackAlpha",mt:"4",children:"別の画像で試す"}),(0,s.jsx)(f.zx,{as:"a",href:"data:image/jpeg;base64,".concat(M),download:!0,bgColor:"green.500",color:"white",mt:"4",mr:"4",_hover:{color:"blue.500",bgColor:"white",border:"1px",borderColor:"blue.500"},children:(0,s.jsx)(v.yf7,{size:"30px"})})]})]})]})]})}},6120:function(e,t,n){var r;r=e=>(()=>{"use strict";var t={899(t){t.exports=e}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{r.r(i),r.d(i,{Component:()=>m,areCropsEqual:()=>l,centerCrop:()=>d,clamp:()=>o,containCrop:()=>u,convertToPercentCrop:()=>h,convertToPixelCrop:()=>c,default:()=>m,defaultCrop:()=>a,makeAspectCrop:()=>s,nudgeCrop:()=>p});var e=r(899),t=r.n(e);function n(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t)}return i}let a={x:0,y:0,width:0,height:0,unit:"px"};function o(e,t,n){return Math.min(Math.max(e,t),n)}function l(e,t){return e.width===t.width&&e.height===t.height&&e.x===t.x&&e.y===t.y&&e.unit===t.unit}function s(e,t,n,r){let i=c(e,n,r);return e.width&&(i.height=i.width/t),e.height&&(i.width=i.height*t),i.y+i.height>r&&(i.height=r-i.y,i.width=i.height*t),i.x+i.width>n&&(i.width=n-i.x,i.height=i.width/t),"%"===e.unit?h(i,n,r):i}function d(e,t,n){let r=c(e,t,n);return r.x=(t-r.width)/2,r.y=(n-r.height)/2,"%"===e.unit?h(r,t,n):r}function h(e,t,n){return"%"===e.unit?{...a,...e,unit:"%"}:{unit:"%",x:e.x?e.x/t*100:0,y:e.y?e.y/n*100:0,width:e.width?e.width/t*100:0,height:e.height?e.height/n*100:0}}function c(e,t,n){return e.unit?"px"===e.unit?{...a,...e,unit:"px"}:{unit:"px",x:e.x?e.x*t/100:0,y:e.y?e.y*n/100:0,width:e.width?e.width*t/100:0,height:e.height?e.height*n/100:0}:{...a,...e,unit:"px"}}function u(e,t,n,r,i,a=0,o=0,l=r,s=i){let d={...e},h=Math.min(a,r),c=Math.min(o,i),u=Math.min(l,r),p=Math.min(s,i);t&&(t>1?(c=(h=o?o*t:h)/t,u=l*t):(h=(c=a?a/t:c)*t,p=s/t)),d.y<0&&(d.height=Math.max(d.height+d.y,c),d.y=0),d.x<0&&(d.width=Math.max(d.width+d.x,h),d.x=0);let g=r-(d.x+d.width);g<0&&(d.x=Math.min(d.x,r-h),d.width+=g);let m=i-(d.y+d.height);if(m<0&&(d.y=Math.min(d.y,i-c),d.height+=m),d.width<h&&("sw"!==n&&"nw"!=n||(d.x-=h-d.width),d.width=h),d.height<c&&("nw"!==n&&"ne"!=n||(d.y-=c-d.height),d.height=c),d.width>u&&("sw"!==n&&"nw"!=n||(d.x-=u-d.width),d.width=u),d.height>p&&("nw"!==n&&"ne"!=n||(d.y-=p-d.height),d.height=p),t){let x=d.width/d.height;if(x<t){let w=Math.max(d.width/t,c);"nw"!==n&&"ne"!=n||(d.y-=w-d.height),d.height=w}else if(x>t){let f=Math.max(d.height*t,h);"sw"!==n&&"nw"!=n||(d.x-=f-d.width),d.width=f}}return d}function p(e,t,n,r){let i={...e};return"ArrowLeft"===t?"nw"===r?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):"w"===r?(i.x-=n,i.width+=n):"sw"===r?(i.x-=n,i.width+=n,i.height+=n):"ne"===r?(i.y+=n,i.width-=n,i.height-=n):"e"===r?i.width-=n:"se"===r&&(i.width-=n,i.height-=n):"ArrowRight"===t&&("nw"===r?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):"w"===r?(i.x+=n,i.width-=n):"sw"===r?(i.x+=n,i.width-=n,i.height-=n):"ne"===r?(i.y-=n,i.width+=n,i.height+=n):"e"===r?i.width+=n:"se"===r&&(i.width+=n,i.height+=n)),"ArrowUp"===t?"nw"===r?(i.x-=n,i.y-=n,i.width+=n,i.height+=n):"n"===r?(i.y-=n,i.height+=n):"ne"===r?(i.y-=n,i.width+=n,i.height+=n):"sw"===r?(i.x+=n,i.width-=n,i.height-=n):"s"===r?i.height-=n:"se"===r&&(i.width-=n,i.height-=n):"ArrowDown"===t&&("nw"===r?(i.x+=n,i.y+=n,i.width-=n,i.height-=n):"n"===r?(i.y+=n,i.height-=n):"ne"===r?(i.y+=n,i.width-=n,i.height-=n):"sw"===r?(i.x-=n,i.width+=n,i.height+=n):"s"===r?i.height+=n:"se"===r&&(i.width+=n,i.height+=n)),i}let g={capture:!0,passive:!1};class m extends e.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=(0,e.createRef)(),this.mediaRef=(0,e.createRef)(),this.initChangeCalled=!1,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{let{crop:t,disabled:n}=this.props,r=this.getBox();if(!t)return;let i=c(t,r.width,r.height);if(n)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let a=e.target.dataset.ord,o=Boolean(a),l=e.clientX,s=e.clientY,d=i.x,h=i.y;if(a){let u=e.clientX-r.x,p=e.clientY-r.y,g=0,m=0;"ne"===a||"e"==a?(g=u-(i.x+i.width),m=p-i.y,d=i.x,h=i.y+i.height):"se"===a||"s"===a?(g=u-(i.x+i.width),m=p-(i.y+i.height),d=i.x,h=i.y):"sw"===a||"w"==a?(g=u-i.x,m=p-(i.y+i.height),d=i.x+i.width,h=i.y):"nw"!==a&&"n"!=a||(g=u-i.x,m=p-i.y,d=i.x+i.width,h=i.y+i.height),l=d+r.x+g,s=h+r.y+m}this.evData={startClientX:l,startClientY:s,startCropX:d,startCropY:h,clientX:e.clientX,clientY:e.clientY,isResize:o,ord:a},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{let{crop:t,disabled:n,locked:r,keepSelection:i,onChange:a}=this.props,o=this.getBox();if(n||r||i&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});let l=e.clientX-o.x,s=e.clientY-o.y,d={unit:"px",x:l,y:s,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:l,startCropY:s,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,a(c(d,o.width,o.height),h(d,o.width,o.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{let{crop:t,disabled:n,onChange:r,onDragStart:i}=this.props,a=this.getBox();if(n||!t||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,i&&i(e));let{evData:o}=this,s;o.clientX=e.clientX,o.clientY=e.clientY,l(t,s=o.isResize?this.resizeCrop():this.dragCrop())||r(c(s,a.width,a.height),h(s,a.width,a.height))},this.onComponentKeyDown=e=>{let{crop:t,disabled:n,onChange:r,onComplete:i}=this.props,a=this.getBox();if(n)return;let l=e.key,s=!1;if(!t)return;let d=this.makePixelCrop(),u=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?m.nudgeStepLarge:e.shiftKey?m.nudgeStepMedium:m.nudgeStep;if("ArrowLeft"===l?(d.x-=u,s=!0):"ArrowRight"===l?(d.x+=u,s=!0):"ArrowUp"===l?(d.y-=u,s=!0):"ArrowDown"===l&&(d.y+=u,s=!0),s){e.cancelable&&e.preventDefault(),d.x=o(d.x,0,a.width-d.width),d.y=o(d.y,0,a.height-d.height);let p=c(d,a.width,a.height),g=h(d,a.width,a.height);r(p,g),i&&i(p,g)}},this.onHandlerKeyDown=(e,t)=>{let{aspect:n=0,crop:r,disabled:i,minWidth:a=0,minHeight:o=0,maxWidth:s,maxHeight:d,onChange:g,onComplete:x}=this.props,w=this.getBox();if(i||!r||"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&"ArrowLeft"!==e.key&&"ArrowRight"!==e.key)return;e.stopPropagation(),e.preventDefault();let f=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?m.nudgeStepLarge:e.shiftKey?m.nudgeStepMedium:m.nudgeStep,y=u(p(c(r,w.width,w.height),e.key,f,t),n,t,w.width,w.height,a,o,s,d);if(!l(r,y)){let v=h(y,w.width,w.height);g(y,v),x&&x(y,v)}},this.onDocPointerDone=e=>{let{crop:t,disabled:n,onComplete:r,onDragEnd:i}=this.props,a=this.getBox();this.unbindDocMove(),!n&&t&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,i&&i(e),r&&r(c(t,a.width,a.height),h(t,a.width,a.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=e=>{var t;null===(t=this.componentRef.current)||void 0===t||t.scrollTo(0,0)}}get document(){return document}getBox(){let e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};let{x:t,y:n,width:r,height:i}=e.getBoundingClientRect();return{x:t,y:n,width:r,height:i}}componentDidUpdate(e){let{crop:t,onComplete:n}=this.props;if(n&&!e.crop&&t){let{width:r,height:i}=this.getBox();r&&i&&n(c(t,r,i),h(t,r,i))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,g),this.document.addEventListener("pointerup",this.onDocPointerDone,g),this.document.addEventListener("pointercancel",this.onDocPointerDone,g),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,g),this.document.removeEventListener("pointerup",this.onDocPointerDone,g),this.document.removeEventListener("pointercancel",this.onDocPointerDone,g),this.docMoveBound=!1)}getCropStyle(){let{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){let{evData:e}=this,t=this.getBox(),n=this.makePixelCrop(),r=e.clientX-e.startClientX,i=e.clientY-e.startClientY;return n.x=o(e.startCropX+r,0,t.width-n.width),n.y=o(e.startCropY+i,0,t.height-n.height),n}getPointRegion(e){let{evData:t}=this,n=t.clientX-e.x,r=t.clientY-e.y<t.startCropY;return n<t.startCropX?r?"nw":"sw":r?"ne":"se"}resizeCrop(){let{evData:e}=this,t=this.getBox(),{aspect:n=0,minWidth:r=0,minHeight:i=0,maxWidth:a,maxHeight:o}=this.props,l=this.getPointRegion(t),s=this.makePixelCrop(),d=e.ord?e.ord:l,h=e.clientX-e.startClientX,c=e.clientY-e.startClientY,p={unit:"px",x:0,y:0,width:0,height:0};"ne"===l?(p.x=e.startCropX,p.width=h,n?(p.height=p.width/n,p.y=e.startCropY-p.height):(p.height=Math.abs(c),p.y=e.startCropY-p.height)):"se"===l?(p.x=e.startCropX,p.y=e.startCropY,p.width=h,p.height=n?p.width/n:c):"sw"===l?(p.x=e.startCropX+h,p.y=e.startCropY,p.width=Math.abs(h),p.height=n?p.width/n:c):"nw"===l&&(p.x=e.startCropX+h,p.width=Math.abs(h),n?(p.height=p.width/n,p.y=e.startCropY-p.height):(p.height=Math.abs(c),p.y=e.startCropY+c));let g=u(p,n,l,t.width,t.height,r,i,a,o);return n||m.xyOrds.indexOf(d)>-1?(s.x=g.x,s.y=g.y,s.width=g.width,s.height=g.height):m.xOrds.indexOf(d)>-1?(s.x=g.x,s.width=g.width):m.yOrds.indexOf(d)>-1&&(s.y=g.y,s.height=g.height),s}createCropSelection(){let{ariaLabels:e=m.defaultProps.ariaLabels,disabled:n,locked:r,renderSelectionAddon:i,ruleOfThirds:a,crop:o}=this.props,l=this.getCropStyle();if(o)return t().createElement("div",{style:l,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":e.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!n&&!r&&t().createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},t().createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),t().createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":e.nwDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"nw"),role:"button"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":e.nDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"n"),role:"button"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":e.neDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"ne"),role:"button"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":e.eDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"e"),role:"button"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":e.seDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"se"),role:"button"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":e.sDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"s"),role:"button"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":e.swDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"sw"),role:"button"}),t().createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":e.wDragHandle,onKeyDown:e=>this.onHandlerKeyDown(e,"w"),role:"button"})),i&&t().createElement("div",{className:"ReactCrop__selection-addon",onMouseDown:e=>e.stopPropagation()},i(this.state)),a&&t().createElement(t().Fragment,null,t().createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),t().createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(){let e={...a,...this.props.crop||{}},t=this.getBox();return c(e,t.width,t.height)}render(){let{aspect:e,children:r,circularCrop:i,className:a,crop:o,disabled:l,locked:s,style:d,ruleOfThirds:h}=this.props,{cropIsActive:c,newCropIsBeingDrawn:u}=this.state,p=o?this.createCropSelection():null,g=function(){for(var e,t,r=0,i="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}("ReactCrop",a,{"ReactCrop--active":c,"ReactCrop--disabled":l,"ReactCrop--locked":s,"ReactCrop--new-crop":u,"ReactCrop--fixed-aspect":o&&e,"ReactCrop--circular-crop":o&&i,"ReactCrop--rule-of-thirds":o&&h,"ReactCrop--invisible-crop":!this.dragStarted&&o&&!o.width&&!o.height});return t().createElement("div",{ref:this.componentRef,className:g,style:d},t().createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},r),p)}}m.xOrds=["e","w"],m.yOrds=["n","s"],m.xyOrds=["nw","ne","se","sw"],m.nudgeStep=1,m.nudgeStepMedium=10,m.nudgeStepLarge=100,m.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}}})(),i})(),e.exports=r(n(7294))},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[874,894,46,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);