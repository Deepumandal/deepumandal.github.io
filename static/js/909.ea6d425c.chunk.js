"use strict";(globalThis.webpackChunkdeepumandal=globalThis.webpackChunkdeepumandal||[]).push([[909],{2625:(e,t,r)=>{r.d(t,{XQ:()=>o});var n=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function o(e,t){return Array.isArray(e)?e.map((e=>null===e?null:t(e))):(0,n.Kn)(e)?Object.keys(e).reduce(((r,n)=>(r[n]=t(e[n]),r)),{}):null!=e?t(e):null}},9055:(e,t,r)=>{r.d(t,{z:()=>g});var n=r(2791);var o=r(9886),[i,a]=(0,o.k)({strict:!1,name:"ButtonGroupContext"}),s=r(5113),l=r(6992),c=r(184);function u(e){const{children:t,className:r,...o}=e,i=(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,a=(0,l.cx)("chakra-button__icon",r);return(0,c.jsx)(s.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:a,children:i})}u.displayName="ButtonIcon";var f=r(2577);function p(e){const{label:t,placement:r,spacing:o="0.5rem",children:i=(0,c.jsx)(f.$,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:u,...p}=e,d=(0,l.cx)("chakra-button__spinner",a),m="start"===r?"marginEnd":"marginStart",h=(0,n.useMemo)((()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[m]:t?o:0,fontSize:"1em",lineHeight:"normal",...u})),[u,t,m,o]);return(0,c.jsx)(s.m.div,{className:d,...p,__css:h,children:i})}p.displayName="ButtonSpinner";var d=r(4591),m=r(5597),h=r(2481),v=r(2996),g=(0,m.G)(((e,t)=>{const r=a(),o=(0,h.mq)("Button",{...r,...e}),{isDisabled:i=(null==r?void 0:r.isDisabled),isLoading:u,isActive:f,children:m,leftIcon:g,rightIcon:b,loadingText:y,iconSpacing:x="0.5rem",type:O,spinner:k,spinnerPlacement:j="start",className:C,as:E,...P}=(0,v.Lr)(e),S=(0,n.useMemo)((()=>{const e={...null==o?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!r&&{_focus:e}}}),[o,r]),{ref:D,type:A}=function(e){const[t,r]=(0,n.useState)(!e);return{ref:(0,n.useCallback)((e=>{e&&r("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}(E),R={rightIcon:b,leftIcon:g,iconSpacing:x,children:m};return(0,c.jsxs)(s.m.button,{ref:(0,d.qq)(t,D),as:E,type:null!=O?O:A,"data-active":(0,l.PB)(f),"data-loading":(0,l.PB)(u),__css:S,className:(0,l.cx)("chakra-button",C),...P,disabled:i||u,children:[u&&"start"===j&&(0,c.jsx)(p,{className:"chakra-button__spinner--start",label:y,placement:"start",spacing:x,children:k}),u?y||(0,c.jsx)(s.m.span,{opacity:0,children:(0,c.jsx)(w,{...R})}):(0,c.jsx)(w,{...R}),u&&"end"===j&&(0,c.jsx)(p,{className:"chakra-button__spinner--end",label:y,placement:"end",spacing:x,children:k})]})}));function w(e){const{leftIcon:t,rightIcon:r,children:n,iconSpacing:o}=e;return(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(u,{marginEnd:o,children:t}),n,r&&(0,c.jsx)(u,{marginStart:o,children:r})]})}g.displayName="Button"},8209:(e,t,r)=>{r.d(t,{E:()=>s});var n=r(6158),o=r(5597),i=r(5113),a=r(184),s=(0,o.G)(((e,t)=>(0,a.jsx)(i.m.img,{ref:t,as:n.Z,className:"chakra-image",...e})))},9589:(e,t,r)=>{r.d(t,{X:()=>c});var n=r(5597),o=r(2481),i=r(2996),a=r(5113),s=r(6992),l=r(184),c=(0,n.G)((function(e,t){const r=(0,o.mq)("Heading",e),{className:n,...c}=(0,i.Lr)(e);return(0,l.jsx)(a.m.h2,{ref:t,className:(0,s.cx)("chakra-heading",e.className),...c,__css:r})}));c.displayName="Heading"},2814:(e,t,r)=>{r.d(t,{r:()=>a});var n=r(5597),o=r(5113),i=r(184),a=(0,n.G)((function(e,t){const{templateAreas:r,gap:n,rowGap:a,columnGap:s,column:l,row:c,autoFlow:u,autoRows:f,templateRows:p,autoColumns:d,templateColumns:m,...h}=e,v={display:"grid",gridTemplateAreas:r,gridGap:n,gridRowGap:a,gridColumnGap:s,gridAutoColumns:d,gridColumn:l,gridRow:c,gridAutoFlow:u,gridAutoRows:f,gridTemplateRows:p,gridTemplateColumns:m};return(0,i.jsx)(o.m.div,{ref:t,__css:v,...h})}));a.displayName="Grid"},6582:(e,t,r)=>{r.d(t,{k:()=>a});var n=r(5597),o=r(5113),i=r(184),a=(0,n.G)((function(e,t){const{direction:r,align:n,justify:a,wrap:s,basis:l,grow:c,shrink:u,...f}=e,p={display:"flex",flexDirection:r,alignItems:n,justifyContent:a,flexWrap:s,flexBasis:l,flexGrow:c,flexShrink:u};return(0,i.jsx)(o.m.div,{ref:t,__css:p,...f})}));a.displayName="Flex"},1917:(e,t,r)=>{r.d(t,{g:()=>a});var n=r(56),o=r(5597),i=r(184),a=(0,o.G)(((e,t)=>(0,i.jsx)(n.K,{align:"center",...e,direction:"column",ref:t})));a.displayName="VStack"},56:(e,t,r)=>{r.d(t,{K:()=>c});var n=r(5113),o=r(184),i=e=>(0,o.jsx)(n.m.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});i.displayName="StackItem";var a=r(2625);var s=r(2791);var l=r(6992),c=(0,r(5597).G)(((e,t)=>{const{isInline:r,direction:c,align:u,justify:f,spacing:p="0.5rem",wrap:d,children:m,divider:h,className:v,shouldWrapChildren:g,...w}=e,b=r?"row":null!=c?c:"column",y=(0,s.useMemo)((()=>function(e){const{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,a.XQ)(r,(e=>n[e]))}}({spacing:p,direction:b})),[p,b]),x=!!h,O=!g&&!x,k=(0,s.useMemo)((()=>{const e=function(e){return s.Children.toArray(e).filter((e=>(0,s.isValidElement)(e)))}(m);return O?e:e.map(((t,r)=>{const n="undefined"!==typeof t.key?t.key:r,a=r+1===e.length,l=g?(0,o.jsx)(i,{children:t},n):t;if(!x)return l;const c=(0,s.cloneElement)(h,{__css:y}),u=a?null:c;return(0,o.jsxs)(s.Fragment,{children:[l,u]},n)}))}),[h,y,x,O,g,m]),j=(0,l.cx)("chakra-stack",v);return(0,o.jsx)(n.m.div,{ref:t,display:"flex",alignItems:u,justifyContent:f,flexDirection:b,flexWrap:d,gap:x?void 0:p,className:j,...w,children:k})}));c.displayName="Stack"},8292:(e,t,r)=>{r.d(t,{P:()=>c});var n=r(5597),o=r(5113),i=r(2796),a=r(2625),s=r(184);function l(e){return(0,a.XQ)(e,(e=>"auto"===e?"auto":`span ${e}/span ${e}`))}var c=(0,n.G)((function(e,t){const{area:r,colSpan:n,colStart:a,colEnd:c,rowEnd:u,rowSpan:f,rowStart:p,...d}=e,m=(0,i.o)({gridArea:r,gridColumn:l(n),gridRow:l(f),gridColumnStart:a,gridColumnEnd:c,gridRowStart:p,gridRowEnd:u});return(0,s.jsx)(o.m.div,{ref:t,__css:m,...d})}));c.displayName="GridItem"},4591:(e,t,r)=>{r.d(t,{lq:()=>o,qq:()=>i});var n=r(2791);function o(...e){return t=>{e.forEach((e=>{!function(e,t){if(null!=e)if("function"!==typeof e)try{e.current=t}catch(r){throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}else e(t)}(e,t)}))}}function i(...e){return(0,n.useMemo)((()=>o(...e)),e)}},7596:(e,t,r)=>{r.d(t,{u:()=>nt});var n={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}};function o(e){return null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function i(e){return["html","body","#document"].includes(e.localName)?e.ownerDocument.body:function(e){var t;return!!o(e)&&e instanceof(null!=(t=e.ownerDocument.defaultView)?t:window).HTMLElement}(e)&&function(e){const t=e.ownerDocument.defaultView||window,{overflow:r,overflowX:n,overflowY:o}=t.getComputedStyle(e);return/auto|scroll|overlay|hidden/.test(r+o+n)}(e)?e:i(function(e){return"html"===e.localName?e:e.assignedSlot||e.parentElement||e.ownerDocument.documentElement}(e))}var a=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),s={arrowShadowColor:a("--popper-arrow-shadow-color"),arrowSize:a("--popper-arrow-size","8px"),arrowSizeHalf:a("--popper-arrow-size-half"),arrowBg:a("--popper-arrow-bg"),transformOrigin:a("--popper-transform-origin"),arrowOffset:a("--popper-arrow-offset")};var l={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},c={scroll:!0,resize:!0};function u(e){let t;return t="object"===typeof e?{enabled:!0,options:{...c,...e}}:{enabled:e,options:c},t}var f={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},p={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{d(e)},effect:({state:e})=>()=>{d(e)}},d=e=>{var t;e.elements.popper.style.setProperty(s.transformOrigin.var,(t=e.placement,l[t]))},m={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{h(e)}},h=e=>{var t;if(!e.placement)return;const r=v(e.placement);if((null==(t=e.elements)?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:s.arrowSize.varRef,height:s.arrowSize.varRef,zIndex:-1});const t={[s.arrowSizeHalf.var]:`calc(${s.arrowSize.varRef} / 2 - 1px)`,[s.arrowOffset.var]:`calc(${s.arrowSizeHalf.varRef} * -1)`};for(const r in t)e.elements.arrow.style.setProperty(r,t[r])}},v=e=>e.startsWith("top")?{property:"bottom",value:s.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:s.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:s.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:s.arrowOffset.varRef}:void 0,g={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{w(e)},effect:({state:e})=>()=>{w(e)}},w=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;const r=(n=e.placement).includes("top")?"1px 1px 0px 0 var(--popper-arrow-shadow-color)":n.includes("bottom")?"-1px -1px 0px 0 var(--popper-arrow-shadow-color)":n.includes("right")?"-1px 1px 0px 0 var(--popper-arrow-shadow-color)":n.includes("left")?"1px -1px 0px 0 var(--popper-arrow-shadow-color)":void 0;var n;r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:s.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},b={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},y={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};var x=r(4591);function O(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function k(e){return e instanceof O(e).Element||e instanceof Element}function j(e){return e instanceof O(e).HTMLElement||e instanceof HTMLElement}function C(e){return"undefined"!==typeof ShadowRoot&&(e instanceof O(e).ShadowRoot||e instanceof ShadowRoot)}var E=Math.max,P=Math.min,S=Math.round;function D(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function A(){return!/^((?!chrome|android).)*safari/i.test(D())}function R(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&j(e)&&(o=e.offsetWidth>0&&S(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&S(n.height)/e.offsetHeight||1);var a=(k(e)?O(e):window).visualViewport,s=!A()&&r,l=(n.left+(s&&a?a.offsetLeft:0))/o,c=(n.top+(s&&a?a.offsetTop:0))/i,u=n.width/o,f=n.height/i;return{width:u,height:f,top:c,right:l+u,bottom:c+f,left:l,x:l,y:c}}function W(e){var t=O(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _(e){return e?(e.nodeName||"").toLowerCase():null}function N(e){return((k(e)?e.ownerDocument:e.document)||window.document).documentElement}function T(e){return R(N(e)).left+W(e).scrollLeft}function L(e){return O(e).getComputedStyle(e)}function B(e){var t=L(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function I(e,t,r){void 0===r&&(r=!1);var n=j(t),o=j(t)&&function(e){var t=e.getBoundingClientRect(),r=S(t.width)/e.offsetWidth||1,n=S(t.height)/e.offsetHeight||1;return 1!==r||1!==n}(t),i=N(t),a=R(e,o,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&(("body"!==_(t)||B(i))&&(s=function(e){return e!==O(e)&&j(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:W(e);var t}(t)),j(t)?((l=R(t,!0)).x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=T(i))),{x:a.left+s.scrollLeft-l.x,y:a.top+s.scrollTop-l.y,width:a.width,height:a.height}}function M(e){var t=R(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function z(e){return"html"===_(e)?e:e.assignedSlot||e.parentNode||(C(e)?e.host:null)||N(e)}function q(e){return["html","body","#document"].indexOf(_(e))>=0?e.ownerDocument.body:j(e)&&B(e)?e:q(z(e))}function H(e,t){var r;void 0===t&&(t=[]);var n=q(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=O(n),a=o?[i].concat(i.visualViewport||[],B(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(H(z(a)))}function G(e){return["table","td","th"].indexOf(_(e))>=0}function V(e){return j(e)&&"fixed"!==L(e).position?e.offsetParent:null}function $(e){for(var t=O(e),r=V(e);r&&G(r)&&"static"===L(r).position;)r=V(r);return r&&("html"===_(r)||"body"===_(r)&&"static"===L(r).position)?t:r||function(e){var t=/firefox/i.test(D());if(/Trident/i.test(D())&&j(e)&&"fixed"===L(e).position)return null;var r=z(e);for(C(r)&&(r=r.host);j(r)&&["html","body"].indexOf(_(r))<0;){var n=L(r);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return r;r=r.parentNode}return null}(e)||t}var F="top",U="bottom",X="right",K="left",Q="auto",Y=[F,U,X,K],Z="start",J="end",ee="clippingParents",te="viewport",re="popper",ne="reference",oe=Y.reduce((function(e,t){return e.concat([t+"-"+Z,t+"-"+J])}),[]),ie=[].concat(Y,[Q]).reduce((function(e,t){return e.concat([t,t+"-"+Z,t+"-"+J])}),[]),ae=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function se(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function le(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var ce={placement:"bottom",modifiers:[],strategy:"absolute"};function ue(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function fe(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?ce:o;return function(e,t,r){void 0===r&&(r=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ce,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,l={state:o,setOptions:function(r){var s="function"===typeof r?r(o.options):r;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:k(e)?H(e):e.contextElement?H(e.contextElement):[],popper:H(t)};var u=function(e){var t=se(e);return ae.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=u.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:l,options:n}),c=function(){};a.push(s||c)}})),l.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,r=e.popper;if(ue(t,r)){o.rects={reference:I(t,$(r),"fixed"===o.options.strategy),popper:M(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var i=o.orderedModifiers[n],a=i.fn,c=i.options,u=void 0===c?{}:c,f=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:f,instance:l})||o)}else o.reset=!1,n=-1}}},update:le((function(){return new Promise((function(e){l.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!ue(e,t))return l;function c(){a.forEach((function(e){return e()})),a=[]}return l.setOptions(r).then((function(e){!s&&r.onFirstUpdate&&r.onFirstUpdate(e)})),l}}var pe={passive:!0};function de(e){return e.split("-")[0]}function me(e){return e.split("-")[1]}function he(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ve(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?de(o):null,a=o?me(o):null,s=r.x+r.width/2-n.width/2,l=r.y+r.height/2-n.height/2;switch(i){case F:t={x:s,y:r.y-n.height};break;case U:t={x:s,y:r.y+r.height};break;case X:t={x:r.x+r.width,y:l};break;case K:t={x:r.x-n.width,y:l};break;default:t={x:r.x,y:r.y}}var c=i?he(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case Z:t[c]=t[c]-(r[u]/2-n[u]/2);break;case J:t[c]=t[c]+(r[u]/2-n[u]/2)}}return t}var ge={top:"auto",right:"auto",bottom:"auto",left:"auto"};function we(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,f=e.isFixed,p=a.x,d=void 0===p?0:p,m=a.y,h=void 0===m?0:m,v="function"===typeof u?u({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),b=K,y=F,x=window;if(c){var k=$(r),j="clientHeight",C="clientWidth";if(k===O(r)&&"static"!==L(k=N(r)).position&&"absolute"===s&&(j="scrollHeight",C="scrollWidth"),o===F||(o===K||o===X)&&i===J)y=U,h-=(f&&k===x&&x.visualViewport?x.visualViewport.height:k[j])-n.height,h*=l?1:-1;if(o===K||(o===F||o===U)&&i===J)b=X,d-=(f&&k===x&&x.visualViewport?x.visualViewport.width:k[C])-n.width,d*=l?1:-1}var E,P=Object.assign({position:s},c&&ge),D=!0===u?function(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:S(r*o)/o||0,y:S(n*o)/o||0}}({x:d,y:h},O(r)):{x:d,y:h};return d=D.x,h=D.y,l?Object.assign({},P,((E={})[y]=w?"0":"",E[b]=g?"0":"",E.transform=(x.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",E)):Object.assign({},P,((t={})[y]=w?h+"px":"",t[b]=g?d+"px":"",t.transform="",t))}const be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=ie.reduce((function(e,r){return e[r]=function(e,t,r){var n=de(e),o=[K,F].indexOf(n)>=0?-1:1,i="function"===typeof r?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[K,X].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],l=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}};var ye={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(e){return e.replace(/left|right|bottom|top/g,(function(e){return ye[e]}))}var Oe={start:"end",end:"start"};function ke(e){return e.replace(/start|end/g,(function(e){return Oe[e]}))}function je(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&C(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ee(e,t,r){return t===te?Ce(function(e,t){var r=O(e),n=N(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;var c=A();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s+T(e),y:l}}(e,r)):k(t)?function(e,t){var r=R(e,!1,"fixed"===t);return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}(t,r):Ce(function(e){var t,r=N(e),n=W(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=E(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=E(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+T(e),l=-n.scrollTop;return"rtl"===L(o||r).direction&&(s+=E(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:l}}(N(e)))}function Pe(e,t,r,n){var o="clippingParents"===t?function(e){var t=H(z(e)),r=["absolute","fixed"].indexOf(L(e).position)>=0&&j(e)?$(e):e;return k(r)?t.filter((function(e){return k(e)&&je(e,r)&&"body"!==_(e)})):[]}(e):[].concat(t),i=[].concat(o,[r]),a=i[0],s=i.reduce((function(t,r){var o=Ee(e,r,n);return t.top=E(o.top,t.top),t.right=P(o.right,t.right),t.bottom=P(o.bottom,t.bottom),t.left=E(o.left,t.left),t}),Ee(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function De(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function Ae(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=void 0===n?e.placement:n,i=r.strategy,a=void 0===i?e.strategy:i,s=r.boundary,l=void 0===s?ee:s,c=r.rootBoundary,u=void 0===c?te:c,f=r.elementContext,p=void 0===f?re:f,d=r.altBoundary,m=void 0!==d&&d,h=r.padding,v=void 0===h?0:h,g=Se("number"!==typeof v?v:De(v,Y)),w=p===re?ne:re,b=e.rects.popper,y=e.elements[m?w:p],x=Pe(k(y)?y:y.contextElement||N(e.elements.popper),l,u,a),O=R(e.elements.reference),j=ve({reference:O,element:b,strategy:"absolute",placement:o}),C=Ce(Object.assign({},b,j)),E=p===re?C:O,P={top:x.top-E.top+g.top,bottom:E.bottom-x.bottom+g.bottom,left:x.left-E.left+g.left,right:E.right-x.right+g.right},S=e.modifiersData.offset;if(p===re&&S){var D=S[o];Object.keys(P).forEach((function(e){var t=[X,U].indexOf(e)>=0?1:-1,r=[F,U].indexOf(e)>=0?"y":"x";P[e]+=D[r]*t}))}return P}function Re(e,t,r){return E(e,P(t,r))}const We={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,l=r.boundary,c=r.rootBoundary,u=r.altBoundary,f=r.padding,p=r.tether,d=void 0===p||p,m=r.tetherOffset,h=void 0===m?0:m,v=Ae(t,{boundary:l,rootBoundary:c,padding:f,altBoundary:u}),g=de(t.placement),w=me(t.placement),b=!w,y=he(g),x="x"===y?"y":"x",O=t.modifiersData.popperOffsets,k=t.rects.reference,j=t.rects.popper,C="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,S="number"===typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,A={x:0,y:0};if(O){if(i){var R,W="y"===y?F:K,_="y"===y?U:X,N="y"===y?"height":"width",T=O[y],L=T+v[W],B=T-v[_],I=d?-j[N]/2:0,z=w===Z?k[N]:j[N],q=w===Z?-j[N]:-k[N],H=t.elements.arrow,G=d&&H?M(H):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=V[W],Y=V[_],J=Re(0,k[N],G[N]),ee=b?k[N]/2-I-J-Q-S.mainAxis:z-J-Q-S.mainAxis,te=b?-k[N]/2+I+J+Y+S.mainAxis:q+J+Y+S.mainAxis,re=t.elements.arrow&&$(t.elements.arrow),ne=re?"y"===y?re.clientTop||0:re.clientLeft||0:0,oe=null!=(R=null==D?void 0:D[y])?R:0,ie=T+te-oe,ae=Re(d?P(L,T+ee-oe-ne):L,T,d?E(B,ie):B);O[y]=ae,A[y]=ae-T}if(s){var se,le="x"===y?F:K,ce="x"===y?U:X,ue=O[x],fe="y"===x?"height":"width",pe=ue+v[le],ve=ue-v[ce],ge=-1!==[F,K].indexOf(g),we=null!=(se=null==D?void 0:D[x])?se:0,be=ge?pe:ue-k[fe]-j[fe]-we+S.altAxis,ye=ge?ue+k[fe]+j[fe]-we-S.altAxis:ve,xe=d&&ge?function(e,t,r){var n=Re(e,t,r);return n>r?r:n}(be,ue,ye):Re(d?be:pe,ue,d?ye:ve);O[x]=xe,A[x]=xe-ue}t.modifiersData[n]=A}},requiresIfExists:["offset"]};const _e={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=de(r.placement),l=he(s),c=[K,X].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return Se("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:De(e,Y))}(o.padding,r),f=M(i),p="y"===l?F:K,d="y"===l?U:X,m=r.rects.reference[c]+r.rects.reference[l]-a[l]-r.rects.popper[c],h=a[l]-r.rects.reference[l],v=$(i),g=v?"y"===l?v.clientHeight||0:v.clientWidth||0:0,w=m/2-h/2,b=u[p],y=g-f[c]-u[d],x=g/2-f[c]/2+w,O=Re(b,x,y),k=l;r.modifiersData[n]=((t={})[k]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&je(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ne(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Te(e){return[F,X,U,K].some((function(t){return e[t]>=0}))}var Le=fe({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=void 0===o||o,a=n.resize,s=void 0===a||a,l=O(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",r.update,pe)})),s&&l.addEventListener("resize",r.update,pe),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",r.update,pe)})),s&&l.removeEventListener("resize",r.update,pe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=ve({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s=r.roundOffsets,l=void 0===s||s,c={placement:de(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,we(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,we(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];j(o)&&_(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});j(n)&&_(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},be,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,l=r.fallbackPlacements,c=r.padding,u=r.boundary,f=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,v=t.options.placement,g=de(v),w=l||(g===v||!m?[xe(v)]:function(e){if(de(e)===Q)return[];var t=xe(e);return[ke(e),t,ke(t)]}(v)),b=[v].concat(w).reduce((function(e,r){return e.concat(de(r)===Q?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,c=void 0===l?ie:l,u=me(n),f=u?s?oe:oe.filter((function(e){return me(e)===u})):Y,p=f.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,r){return t[r]=Ae(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[de(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:u,rootBoundary:f,padding:c,flipVariations:m,allowedAutoPlacements:h}):r)}),[]),y=t.rects.reference,x=t.rects.popper,O=new Map,k=!0,j=b[0],C=0;C<b.length;C++){var E=b[C],P=de(E),S=me(E)===Z,D=[F,U].indexOf(P)>=0,A=D?"width":"height",R=Ae(t,{placement:E,boundary:u,rootBoundary:f,altBoundary:p,padding:c}),W=D?S?X:K:S?U:F;y[A]>x[A]&&(W=xe(W));var _=xe(W),N=[];if(i&&N.push(R[P]<=0),s&&N.push(R[W]<=0,R[_]<=0),N.every((function(e){return e}))){j=E,k=!1;break}O.set(E,N)}if(k)for(var T=function(e){var t=b.find((function(t){var r=O.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},L=m?3:1;L>0;L--){if("break"===T(L))break}t.placement!==j&&(t.modifiersData[n]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},We,_e,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Ae(t,{elementContext:"reference"}),s=Ae(t,{altBoundary:!0}),l=Ne(a,n),c=Ne(s,o,i),u=Te(l),f=Te(c);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}}]}),Be=r(2791);function Ie(e={}){const{enabled:t=!0,modifiers:r,placement:n="bottom",strategy:o="absolute",arrowPadding:i=8,eventListeners:a=!0,offset:l,gutter:c=8,flip:d=!0,boundary:h="clippingParents",preventOverflow:v=!0,matchWidth:w,direction:O="ltr"}=e,k=(0,Be.useRef)(null),j=(0,Be.useRef)(null),C=(0,Be.useRef)(null),E=function(e,t="ltr"){var r,n;const o=(null==(r=b[e])?void 0:r[t])||e;return"ltr"===t?o:null!=(n=y[e])?n:o}(n,O),P=(0,Be.useRef)((()=>{})),S=(0,Be.useCallback)((()=>{var e;t&&k.current&&j.current&&(null==(e=P.current)||e.call(P),C.current=Le(k.current,j.current,{placement:E,modifiers:[g,m,p,{...f,enabled:!!w},{name:"eventListeners",...u(a)},{name:"arrow",options:{padding:i}},{name:"offset",options:{offset:null!=l?l:[0,c]}},{name:"flip",enabled:!!d,options:{padding:8}},{name:"preventOverflow",enabled:!!v,options:{boundary:h}},...null!=r?r:[]],strategy:o}),C.current.forceUpdate(),P.current=C.current.destroy)}),[E,t,r,w,a,i,l,c,d,v,h,o]);(0,Be.useEffect)((()=>()=>{var e;k.current||j.current||(null==(e=C.current)||e.destroy(),C.current=null)}),[]);const D=(0,Be.useCallback)((e=>{k.current=e,S()}),[S]),A=(0,Be.useCallback)(((e={},t=null)=>({...e,ref:(0,x.lq)(D,t)})),[D]),R=(0,Be.useCallback)((e=>{j.current=e,S()}),[S]),W=(0,Be.useCallback)(((e={},t=null)=>({...e,ref:(0,x.lq)(R,t),style:{...e.style,position:o,minWidth:w?void 0:"max-content",inset:"0 auto auto 0"}})),[o,R,w]),_=(0,Be.useCallback)(((e={},t=null)=>{const{size:r,shadowColor:n,bg:o,style:i,...a}=e;return{...a,ref:t,"data-popper-arrow":"",style:Me(e)}}),[]),N=(0,Be.useCallback)(((e={},t=null)=>({...e,ref:t,"data-popper-arrow-inner":""})),[]);return{update(){var e;null==(e=C.current)||e.update()},forceUpdate(){var e;null==(e=C.current)||e.forceUpdate()},transformOrigin:s.transformOrigin.varRef,referenceRef:D,popperRef:R,getPopperProps:W,getArrowProps:_,getArrowInnerProps:N,getReferenceProps:A}}function Me(e){const{size:t,shadowColor:r,bg:n,style:o}=e,i={...o,position:"absolute"};return t&&(i["--popper-arrow-size"]=t),r&&(i["--popper-arrow-shadow-color"]=r),n&&(i["--popper-arrow-bg"]=n),i}var ze=r(6367);function qe(e,t,r,n){const o=(0,ze.W)(r);return(0,Be.useEffect)((()=>{const i="function"===typeof e?e():null!=e?e:document;if(r&&i)return i.addEventListener(t,o,n),()=>{i.removeEventListener(t,o,n)}}),[t,e,n,o,r]),()=>{const r="function"===typeof e?e():null!=e?e:document;null==r||r.removeEventListener(t,o,n)}}var He=r(6992),Ge=e=>{var t;return(null==(t=e.current)?void 0:t.ownerDocument)||document},Ve=e=>{var t,r;return(null==(r=null==(t=e.current)?void 0:t.ownerDocument)?void 0:r.defaultView)||window};function $e(e={}){const{openDelay:t=0,closeDelay:r=0,closeOnClick:n=!0,closeOnMouseDown:o,closeOnScroll:a,closeOnPointerDown:l=o,closeOnEsc:c=!0,onOpen:u,onClose:f,placement:p,id:d,isOpen:m,defaultIsOpen:h,arrowSize:v=10,arrowShadowColor:g,arrowPadding:w,modifiers:b,isDisabled:y,gutter:O,offset:k,direction:j,...C}=e,{isOpen:E,onOpen:P,onClose:S}=function(e={}){const{onClose:t,onOpen:r,isOpen:n,id:o}=e,i=(0,ze.W)(r),a=(0,ze.W)(t),[s,l]=(0,Be.useState)(e.defaultIsOpen||!1),c=void 0!==n?n:s,u=void 0!==n,f=(0,Be.useId)(),p=null!=o?o:`disclosure-${f}`,d=(0,Be.useCallback)((()=>{u||l(!1),null==a||a()}),[u,a]),m=(0,Be.useCallback)((()=>{u||l(!0),null==i||i()}),[u,i]),h=(0,Be.useCallback)((()=>{c?d():m()}),[c,m,d]);return{isOpen:c,onOpen:m,onClose:d,onToggle:h,isControlled:u,getButtonProps:function(e={}){return{...e,"aria-expanded":c,"aria-controls":p,onClick(t){var r;null==(r=e.onClick)||r.call(e,t),h()}}},getDisclosureProps:function(e={}){return{...e,hidden:!c,id:p}}}}({isOpen:m,defaultIsOpen:h,onOpen:u,onClose:f}),{referenceRef:D,getPopperProps:A,getArrowInnerProps:R,getArrowProps:W}=Ie({enabled:E,placement:p,arrowPadding:w,modifiers:b,gutter:O,offset:k,direction:j}),_=(0,Be.useId)(),N=`tooltip-${null!=d?d:_}`,T=(0,Be.useRef)(null),L=(0,Be.useRef)(),B=(0,Be.useCallback)((()=>{L.current&&(clearTimeout(L.current),L.current=void 0)}),[]),I=(0,Be.useRef)(),M=(0,Be.useCallback)((()=>{I.current&&(clearTimeout(I.current),I.current=void 0)}),[]),z=(0,Be.useCallback)((()=>{M(),S()}),[S,M]),q=function(e,t){return(0,Be.useEffect)((()=>{const r=Ge(e);return r.addEventListener(Fe,t),()=>r.removeEventListener(Fe,t)}),[t,e]),()=>{const t=Ge(e),r=Ve(e);t.dispatchEvent(new r.CustomEvent(Fe))}}(T,z),H=(0,Be.useCallback)((()=>{if(!y&&!L.current){E&&q();const e=Ve(T);L.current=e.setTimeout(P,t)}}),[q,y,E,P,t]),G=(0,Be.useCallback)((()=>{B();const e=Ve(T);I.current=e.setTimeout(z,r)}),[r,z,B]),V=(0,Be.useCallback)((()=>{E&&n&&G()}),[n,G,E]),$=(0,Be.useCallback)((()=>{E&&l&&G()}),[l,G,E]),F=(0,Be.useCallback)((e=>{E&&"Escape"===e.key&&G()}),[E,G]);qe((()=>Ge(T)),"keydown",c?F:void 0),qe((()=>{if(!a)return null;const e=T.current;if(!e)return null;const t=i(e);return"body"===t.localName?Ve(T):t}),"scroll",(()=>{E&&a&&z()}),{passive:!0,capture:!0}),(0,Be.useEffect)((()=>{y&&(B(),E&&S())}),[y,E,S,B]),(0,Be.useEffect)((()=>()=>{B(),M()}),[B,M]),qe((()=>T.current),"pointerleave",G);const U=(0,Be.useCallback)(((e={},t=null)=>({...e,ref:(0,x.lq)(T,t,D),onPointerEnter:(0,He.v0)(e.onPointerEnter,(e=>{"touch"!==e.pointerType&&H()})),onClick:(0,He.v0)(e.onClick,V),onPointerDown:(0,He.v0)(e.onPointerDown,$),onFocus:(0,He.v0)(e.onFocus,H),onBlur:(0,He.v0)(e.onBlur,G),"aria-describedby":E?N:void 0})),[H,G,$,E,N,V,D]),X=(0,Be.useCallback)(((e={},t=null)=>A({...e,style:{...e.style,[s.arrowSize.var]:v?`${v}px`:void 0,[s.arrowShadowColor.var]:g}},t)),[A,v,g]),K=(0,Be.useCallback)(((e={},t=null)=>{const r={...e.style,position:"relative",transformOrigin:s.transformOrigin.varRef};return{ref:t,...C,...e,id:N,role:"tooltip",style:r}}),[C,N]);return{isOpen:E,show:H,hide:G,getTriggerProps:U,getTooltipProps:K,getTooltipPositionerProps:X,getArrowProps:W,getArrowInnerProps:R}}var Fe="chakra-ui:close-tooltip";var Ue=r(5497),Xe=r(5113),Ke=r(5597),Qe=r(2481),Ye=r(2996),Ze=r(2552),Je=r(6931),et=r(4549),tt=r(184);var rt=(0,Xe.m)(Je.E.div),nt=(0,Ke.G)(((e,t)=>{var r,o;const i=(0,Qe.mq)("Tooltip",e),a=(0,Ye.Lr)(e),l=(0,Ze.F)(),{children:c,label:u,shouldWrapChildren:f,"aria-label":p,hasArrow:d,bg:m,portalProps:h,background:v,backgroundColor:g,bgColor:w,motionProps:b,...y}=a,x=null!=(o=null!=(r=null!=v?v:g)?r:m)?o:w;if(x){i.bg=x;const e=(0,Ye.K1)(l,"colors",x);i[s.arrowBg.var]=e}const O=$e({...y,direction:l.direction});let k;if("string"===typeof c||f)k=(0,tt.jsx)(Xe.m.span,{display:"inline-block",tabIndex:0,...O.getTriggerProps(),children:c});else{const e=Be.Children.only(c);k=(0,Be.cloneElement)(e,O.getTriggerProps(e.props,e.ref))}const j=!!p,C=O.getTooltipProps({},t),E=j?function(e,t=[]){const r=Object.assign({},e);for(const n of t)n in r&&delete r[n];return r}(C,["role","id"]):C,P=function(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}(C,["role","id"]);return u?(0,tt.jsxs)(tt.Fragment,{children:[k,(0,tt.jsx)(et.M,{children:O.isOpen&&(0,tt.jsx)(Ue.h,{...h,children:(0,tt.jsx)(Xe.m.div,{...O.getTooltipPositionerProps(),__css:{zIndex:i.zIndex,pointerEvents:"none"},children:(0,tt.jsxs)(rt,{variants:n,initial:"exit",animate:"enter",exit:"exit",...b,...E,__css:i,children:[u,j&&(0,tt.jsx)(Xe.m.span,{srOnly:!0,...P,children:p}),d&&(0,tt.jsx)(Xe.m.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper",children:(0,tt.jsx)(Xe.m.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:i.bg}})})]})})})})]}):(0,tt.jsx)(tt.Fragment,{children:c})}));nt.displayName="Tooltip"}}]);
//# sourceMappingURL=909.ea6d425c.chunk.js.map