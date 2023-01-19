(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{7741:function(e,t,n){"use strict";n.d(t,{zx:function(){return y}});var r=n(7294),a=n(6734),i=n(7976),l=n(4520),o=n(8387),s=n(5610),c=(...e)=>e.filter(Boolean).join(" "),m=e=>e?"":void 0,[u,d]=(0,o.k)({strict:!1,name:"ButtonGroupContext"});function p(e){let{children:t,className:n,...a}=e,l=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=c("chakra-button__icon",n);return r.createElement(i.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:o},l)}function f(e){let{label:t,placement:n,spacing:a="0.5rem",children:l=r.createElement(s.$,{color:"currentColor",width:"1em",height:"1em"}),className:o,__css:m,...u}=e,d=c("chakra-button__spinner",o),p="start"===n?"marginEnd":"marginStart",f=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?a:0,fontSize:"1em",lineHeight:"normal",...m}),[m,t,p,a]);return r.createElement(i.m$.div,{className:d,...u,__css:f},l)}p.displayName="ButtonIcon",f.displayName="ButtonSpinner";var y=(0,i.Gp)((e,t)=>{let n=d(),o=(0,i.mq)("Button",{...n,...e}),{isDisabled:s=null==n?void 0:n.isDisabled,isLoading:u,isActive:p,children:y,leftIcon:h,rightIcon:x,loadingText:_,iconSpacing:v="0.5rem",type:b,spinner:E,spinnerPlacement:k="start",className:N,as:w,...G}=(0,l.Lr)(e),S=(0,r.useMemo)(()=>{let e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:e}}},[o,n]),{ref:$,type:C}=function(e){let[t,n]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}(w),L={rightIcon:x,leftIcon:h,iconSpacing:v,children:y};return r.createElement(i.m$.button,{disabled:s||u,ref:(0,a.qq)(t,$),as:w,type:b??C,"data-active":m(p),"data-loading":m(u),__css:S,className:c("chakra-button",N),...G},u&&"start"===k&&r.createElement(f,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:v},E),u?_||r.createElement(i.m$.span,{opacity:0},r.createElement(g,{...L})):r.createElement(g,{...L}),u&&"end"===k&&r.createElement(f,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:v},E))});function g(e){let{leftIcon:t,rightIcon:n,children:a,iconSpacing:i}=e;return r.createElement(r.Fragment,null,t&&r.createElement(p,{marginEnd:i},t),a,n&&r.createElement(p,{marginStart:i},n))}y.displayName="Button",(0,i.Gp)(function(e,t){let{size:n,colorScheme:a,variant:l,className:o,spacing:s="0.5rem",isAttached:m,isDisabled:d,...p}=e,f=c("chakra-button__group",o),y=(0,r.useMemo)(()=>({size:n,colorScheme:a,variant:l,isDisabled:d}),[n,a,l,d]),g={display:"inline-flex"};return g=m?{...g,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...g,"& > *:not(style) ~ *:not(style)":{marginStart:s}},r.createElement(u,{value:y},r.createElement(i.m$.div,{ref:t,role:"group",__css:g,className:f,"data-attached":m?"":void 0,...p}))}).displayName="ButtonGroup",(0,i.Gp)((e,t)=>{let{icon:n,children:a,isRound:i,"aria-label":l,...o}=e,s=n||a,c=(0,r.isValidElement)(s)?(0,r.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(y,{padding:"0",borderRadius:i?"full":void 0,ref:t,"aria-label":l,...o},c)}).displayName="IconButton"},639:function(e,t,n){"use strict";n.d(t,{xu:function(){return d},M5:function(){return f},kC:function(){return g},X6:function(){return _},xv:function(){return G}});var r=n(7294),a=n(7976);function i(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):!function(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}(e)?null!=e?t(e):null:Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{})}Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=n(5336),o=n(4520),s=n(6076),c=n(2494),m=n(8387),u=n(4031);(0,a.Gp)(function(e,t){let{ratio:n=4/3,children:o,className:s,...c}=e,m=r.Children.only(o),u=(0,l.cx)("chakra-aspect-ratio",s);return r.createElement(a.m$.div,{ref:t,position:"relative",className:u,_before:{height:0,content:'""',display:"block",paddingBottom:i(n,e=>`${1/e*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...c},m)}).displayName="AspectRatio",(0,a.Gp)(function(e,t){let n=(0,a.mq)("Badge",e),{className:i,...s}=(0,o.Lr)(e);return r.createElement(a.m$.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})}).displayName="Badge";var d=(0,a.m$)("div");d.displayName="Box";var p=(0,a.Gp)(function(e,t){let{size:n,centerContent:a=!0,...i}=e;return r.createElement(d,{ref:t,boxSize:n,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});p.displayName="Square",(0,a.Gp)(function(e,t){let{size:n,...a}=e;return r.createElement(p,{size:n,ref:t,borderRadius:"9999px",...a})}).displayName="Circle";var f=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});f.displayName="Center";var y={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)(function(e,t){let{axis:n="both",...i}=e;return r.createElement(a.m$.div,{ref:t,__css:y[n],...i,position:"absolute"})}),(0,a.Gp)(function(e,t){let n=(0,a.mq)("Code",e),{className:i,...s}=(0,o.Lr)(e);return r.createElement(a.m$.code,{ref:t,className:(0,l.cx)("chakra-code",e.className),...s,__css:{display:"inline-block",...n}})}).displayName="Code",(0,a.Gp)(function(e,t){let{className:n,centerContent:i,...s}=(0,o.Lr)(e),c=(0,a.mq)("Container",e);return r.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-container",n),...s,__css:{...c,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})}).displayName="Container",(0,a.Gp)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:i,borderTopWidth:s,borderRightWidth:c,borderWidth:m,borderStyle:u,borderColor:d,...p}=(0,a.mq)("Divider",e),{className:f,orientation:y="horizontal",__css:g,...h}=(0,o.Lr)(e);return r.createElement(a.m$.hr,{ref:t,"aria-orientation":y,...h,__css:{...p,border:"0",borderColor:d,borderStyle:u,...{vertical:{borderLeftWidth:n||c||m||"1px",height:"100%"},horizontal:{borderBottomWidth:i||s||m||"1px",width:"100%"}}[y],...g},className:(0,l.cx)("chakra-divider",f)})}).displayName="Divider";var g=(0,a.Gp)(function(e,t){let{direction:n,align:i,justify:l,wrap:o,basis:s,grow:c,shrink:m,...u}=e;return r.createElement(a.m$.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:i,justifyContent:l,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:m},...u})});g.displayName="Flex";var h=(0,a.Gp)(function(e,t){let{templateAreas:n,gap:i,rowGap:l,columnGap:o,column:s,row:c,autoFlow:m,autoRows:u,templateRows:d,autoColumns:p,templateColumns:f,...y}=e;return r.createElement(a.m$.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:i,gridRowGap:l,gridColumnGap:o,gridAutoColumns:p,gridColumn:s,gridRow:c,gridAutoFlow:m,gridAutoRows:u,gridTemplateRows:d,gridTemplateColumns:f},...y})});function x(e){return i(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}h.displayName="Grid",(0,a.Gp)(function(e,t){let{area:n,colSpan:i,colStart:l,colEnd:o,rowEnd:c,rowSpan:m,rowStart:u,...d}=e,p=(0,s.oA)({gridArea:n,gridColumn:x(i),gridRow:x(m),gridColumnStart:l,gridColumnEnd:o,gridRowStart:u,gridRowEnd:c});return r.createElement(a.m$.div,{ref:t,__css:p,...d})}).displayName="GridItem";var _=(0,a.Gp)(function(e,t){let n=(0,a.mq)("Heading",e),{className:i,...s}=(0,o.Lr)(e);return r.createElement(a.m$.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...s,__css:n})});_.displayName="Heading",(0,a.Gp)(function(e,t){let n=(0,a.mq)("Mark",e),i=(0,o.Lr)(e);return r.createElement(d,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...n}})}),(0,a.Gp)(function(e,t){let n=(0,a.mq)("Kbd",e),{className:i,...s}=(0,o.Lr)(e);return r.createElement(a.m$.kbd,{ref:t,className:(0,l.cx)("chakra-kbd",i),...s,__css:{fontFamily:"mono",...n}})}).displayName="Kbd",(0,a.Gp)(function(e,t){let n=(0,a.mq)("Link",e),{className:i,isExternal:s,...c}=(0,o.Lr)(e);return r.createElement(a.m$.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",i),...c,__css:n})}).displayName="Link",(0,a.Gp)(function(e,t){let{isExternal:n,target:i,rel:o,className:s,...c}=e;return r.createElement(a.m$.a,{...c,ref:t,className:(0,l.cx)("chakra-linkbox__overlay",s),rel:n?"noopener noreferrer":o,target:n?"_blank":i,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),(0,a.Gp)(function(e,t){let{className:n,...i}=e;return r.createElement(a.m$.div,{ref:t,position:"relative",...i,className:(0,l.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[v,b]=(0,m.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),E=(0,a.Gp)(function(e,t){let n=(0,a.jC)("List",e),{children:i,styleType:l="none",stylePosition:s,spacing:c,...m}=(0,o.Lr)(e),d=(0,u.W)(i);return r.createElement(v,{value:n},r.createElement(a.m$.ul,{ref:t,listStyleType:l,listStylePosition:s,role:"list",__css:{...n.container,...c?{"& > *:not(style) ~ *:not(style)":{mt:c}}:{}},...m},d))});E.displayName="List",(0,a.Gp)((e,t)=>{let{as:n,...a}=e;return r.createElement(E,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})}).displayName="OrderedList",(0,a.Gp)(function(e,t){let{as:n,...a}=e;return r.createElement(E,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})}).displayName="UnorderedList",(0,a.Gp)(function(e,t){let n=b();return r.createElement(a.m$.li,{ref:t,...e,__css:n.item})}).displayName="ListItem",(0,a.Gp)(function(e,t){let n=b();return r.createElement(c.JO,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon",(0,a.Gp)(function(e,t){var n,l,o;let{columns:s,spacingX:c,spacingY:m,spacing:u,minChildWidth:d,...p}=e,f=(0,a.Fg)(),y=d?(n=d,l=f,i(n,e=>{var t;let n=(0,a.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(l);return null===e?null:`repeat(auto-fit, minmax(${n}, 1fr))`})):(o=s,i(o,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`));return r.createElement(h,{ref:t,gap:u,columnGap:c,rowGap:m,templateColumns:y,...p})}).displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var k="& > *:not(style) ~ *:not(style)",N=e=>r.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});N.displayName="StackItem";var w=(0,a.Gp)((e,t)=>{let{isInline:n,direction:o,align:s,justify:c,spacing:m="0.5rem",wrap:d,children:p,divider:f,className:y,shouldWrapChildren:g,...h}=e,x=n?"row":o??"column",_=(0,r.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[k]:i(n,e=>r[e])}})({direction:x,spacing:m}),[x,m]),v=(0,r.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":i(n,e=>r[e])}})({spacing:m,direction:x}),[m,x]),b=!!f,E=!g&&!b,w=(0,r.useMemo)(()=>{let e=(0,u.W)(p);return E?e:e.map((t,n)=>{let a=void 0!==t.key?t.key:n,i=n+1===e.length,l=r.createElement(N,{key:a},t),o=g?l:t;if(!b)return o;let s=(0,r.cloneElement)(f,{__css:v});return r.createElement(r.Fragment,{key:a},o,i?null:s)})},[f,v,b,E,g,p]),G=(0,l.cx)("chakra-stack",y);return r.createElement(a.m$.div,{ref:t,display:"flex",alignItems:s,justifyContent:c,flexDirection:_.flexDirection,flexWrap:d,className:G,__css:b?{}:{[k]:_[k]},...h},w)});w.displayName="Stack",(0,a.Gp)((e,t)=>r.createElement(w,{align:"center",...e,direction:"row",ref:t})).displayName="HStack",(0,a.Gp)((e,t)=>r.createElement(w,{align:"center",...e,direction:"column",ref:t})).displayName="VStack";var G=(0,a.Gp)(function(e,t){let n=(0,a.mq)("Text",e),{className:i,align:c,decoration:m,casing:u,...d}=(0,o.Lr)(e),p=(0,s.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return r.createElement(a.m$.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...p,...d,__css:n})});function S(e){return"number"==typeof e?`${e}px`:e}G.displayName="Text",(0,a.Gp)(function(e,t){let{spacing:n="0.5rem",spacingX:s,spacingY:c,children:m,justify:u,direction:d,align:p,className:f,shouldWrapChildren:y,...g}=e,h=(0,r.useMemo)(()=>{let{spacingX:e=n,spacingY:t=n}={spacingX:s,spacingY:c};return{"--chakra-wrap-x-spacing":t=>i(e,e=>S((0,o.fr)("space",e)(t))),"--chakra-wrap-y-spacing":e=>i(t,t=>S((0,o.fr)("space",t)(e))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:u,alignItems:p,flexDirection:d,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[n,s,c,u,p,d]),x=(0,r.useMemo)(()=>y?r.Children.map(m,(e,t)=>r.createElement($,{key:t},e)):m,[m,y]);return r.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-wrap",f),overflow:"hidden",...g},r.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:h},x))}).displayName="Wrap";var $=(0,a.Gp)(function(e,t){let{className:n,...i}=e;return r.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,l.cx)("chakra-wrap__listitem",n),...i})});$.displayName="WrapItem"},6076:function(e,t,n){"use strict";function r(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}n.d(t,{oA:function(){return r}})},4031:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(7294);function a(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}},6734:function(e,t,n){"use strict";n.d(t,{lq:function(){return a},qq:function(){return i}});var r=n(7294);function a(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function i(...e){return(0,r.useMemo)(()=>a(...e),e)}},1919:function(){},9008:function(e,t,n){e.exports=n(5443)}}]);