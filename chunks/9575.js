/*! For license information please see 9575.js.LICENSE.txt */
"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[9575],{82395:(t,e,n)=>{n.d(e,{S:()=>l,a:()=>v,b:()=>g,c:()=>h,d:()=>k,f:()=>o,i:()=>b,r:()=>r});const o="object"==typeof global&&global&&global.Object===Object&&global;var i="object"==typeof self&&self&&self.Object===Object&&self;const r=o||i||Function("return this")(),l=r.Symbol;var a=Object.prototype,s=a.hasOwnProperty,c=a.toString,f=l?l.toStringTag:void 0,u=Object.prototype.toString,d="[object Null]",p="[object Undefined]",m=l?l.toStringTag:void 0;function g(t){return null==t?void 0===t?p:d:m&&m in Object(t)?function(t){var e=s.call(t,f),n=t[f];try{t[f]=void 0;var o=!0}catch(t){}var i=c.call(t);return o&&(e?t[f]=n:delete t[f]),i}(t):function(t){return u.call(t)}(t)}function h(t){return null!=t&&"object"==typeof t}var y="[object Symbol]";function v(t){return"symbol"==typeof t||h(t)&&g(t)==y}var w=/\s/,x=/^\s+/;function b(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var E=NaN,T=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,O=/^0o[0-7]+$/i,R=parseInt;function P(t){if("number"==typeof t)return t;if(v(t))return E;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;var n;t=(n=t)?n.slice(0,function(t){for(var e=t.length;e--&&w.test(t.charAt(e)););return e}(n)+1).replace(x,""):n;var o=L.test(t);return o||O.test(t)?R(t.slice(2),o?2:8):T.test(t)?E:+t}const S=function(){return r.Date.now()};var D="Expected a function",A=Math.max,C=Math.min;function k(t,e,n){var o,i,r,l,a,s,c=0,f=!1,u=!1,d=!0;if("function"!=typeof t)throw new TypeError(D);function p(e){var n=o,r=i;return o=i=void 0,c=e,l=t.apply(r,n)}function m(t){var n=t-s;return void 0===s||n>=e||n<0||u&&t-c>=r}function g(){var t=S();if(m(t))return h(t);a=setTimeout(g,function(t){var n=e-(t-s);return u?C(n,r-(t-c)):n}(t))}function h(t){return a=void 0,d&&o?p(t):(o=i=void 0,l)}function y(){var t=S(),n=m(t);if(o=arguments,i=this,s=t,n){if(void 0===a)return function(t){return c=t,a=setTimeout(g,e),f?p(t):l}(s);if(u)return clearTimeout(a),a=setTimeout(g,e),p(s)}return void 0===a&&(a=setTimeout(g,e)),l}return e=P(e)||0,b(n)&&(f=!!n.leading,r=(u="maxWait"in n)?A(P(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=s=i=a=void 0},y.flush=function(){return void 0===a?l:h(S())},y}},54717:(t,e,n)=>{n.d(e,{F:()=>Tt,a:()=>kt,b:()=>Et,c:()=>Ct,d:()=>jt,f:()=>Ot,r:()=>Pt});var o=n(74815),i=n(72006),r=n(82395);const l=["top","right","bottom","left"],a=["start","end"],s=l.reduce(((t,e)=>t.concat(e,e+"-"+a[0],e+"-"+a[1])),[]),c=Math.min,f=Math.max,u=Math.round,d=Math.floor,p=t=>({x:t,y:t}),m={left:"right",right:"left",bottom:"top",top:"bottom"},g={start:"end",end:"start"};function h(t,e,n){return f(t,c(e,n))}function y(t,e){return"function"==typeof t?t(e):t}function v(t){return t.split("-")[0]}function w(t){return t.split("-")[1]}function x(t){return"x"===t?"y":"x"}function b(t){return"y"===t?"height":"width"}function E(t){return["top","bottom"].includes(v(t))?"y":"x"}function T(t){return x(E(t))}function L(t,e,n){void 0===n&&(n=!1);const o=w(t),i=T(t),r=b(i);let l="x"===i?o===(n?"end":"start")?"right":"left":"start"===o?"bottom":"top";return e.reference[r]>e.floating[r]&&(l=R(l)),[l,R(l)]}function O(t){return t.replace(/start|end/g,(t=>g[t]))}function R(t){return t.replace(/left|right|bottom|top/g,(t=>m[t]))}function P(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function S(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function D(t,e,n){let{reference:o,floating:i}=t;const r=E(e),l=T(e),a=b(l),s=v(e),c="y"===r,f=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,d=o[a]/2-i[a]/2;let p;switch(s){case"top":p={x:f,y:o.y-i.height};break;case"bottom":p={x:f,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-i.width,y:u};break;default:p={x:o.x,y:o.y}}switch(w(e)){case"start":p[l]-=d*(n&&c?-1:1);break;case"end":p[l]+=d*(n&&c?-1:1)}return p}async function A(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:l,elements:a,strategy:s}=t,{boundary:c="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:d=!1,padding:p=0}=y(e,t),m=P(p),g=a[d?"floating"===u?"reference":"floating":u],h=S(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(g)))||n?g:g.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:f,strategy:s})),v="floating"===u?{...l.floating,x:o,y:i}:l.reference,w=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),x=await(null==r.isElement?void 0:r.isElement(w))&&await(null==r.getScale?void 0:r.getScale(w))||{x:1,y:1},b=S(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:w,strategy:s}):v);return{top:(h.top-b.top+m.top)/x.y,bottom:(b.bottom-h.bottom+m.bottom)/x.y,left:(h.left-b.left+m.left)/x.x,right:(b.right-h.right+m.right)/x.x}}function C(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function k(t){return l.some((e=>t[e]>=0))}const j=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:l,middlewareData:a}=e,s=await async function(t,e){const{placement:n,platform:o,elements:i}=t,r=await(null==o.isRTL?void 0:o.isRTL(i.floating)),l=v(n),a=w(n),s="y"===E(n),c=["left","top"].includes(l)?-1:1,f=r&&s?-1:1,u=y(e,t);let{mainAxis:d,crossAxis:p,alignmentAxis:m}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&"number"==typeof m&&(p="end"===a?-1*m:m),s?{x:p*f,y:d*c}:{x:d*c,y:p*f}}(e,t);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(o=a.arrow)&&o.alignmentOffset?{}:{x:i+s.x,y:r+s.y,data:{...s,placement:l}}}}};function F(t){return N(t)?(t.nodeName||"").toLowerCase():"#document"}function B(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function H(t){var e;return null==(e=(N(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function N(t){return t instanceof Node||t instanceof B(t).Node}function W(t){return t instanceof Element||t instanceof B(t).Element}function M(t){return t instanceof HTMLElement||t instanceof B(t).HTMLElement}function $(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof B(t).ShadowRoot)}function V(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=q(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function z(t){return["table","td","th"].includes(F(t))}function _(t){const e=I(),n=q(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function I(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Y(t){return["html","body","#document"].includes(F(t))}function q(t){return B(t).getComputedStyle(t)}function X(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if("html"===F(t))return t;const e=t.assignedSlot||t.parentNode||$(t)&&t.host||H(t);return $(e)?e.host:e}function G(t){const e=U(t);return Y(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&V(e)?e:G(e)}function J(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=G(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),l=B(i);return r?e.concat(l,l.visualViewport||[],V(i)?i:[],l.frameElement&&n?J(l.frameElement):[]):e.concat(i,J(i,[],n))}function K(t){const e=q(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),r=i?t.offsetWidth:n,l=i?t.offsetHeight:o,a=u(n)!==r||u(o)!==l;return a&&(n=r,o=l),{width:n,height:o,$:a}}function Q(t){return W(t)?t:t.contextElement}function Z(t){const e=Q(t);if(!M(e))return p(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=K(e);let l=(r?u(n.width):n.width)/o,a=(r?u(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),a&&Number.isFinite(a)||(a=1),{x:l,y:a}}const tt=p(0);function et(t){const e=B(t);return I()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:tt}function nt(t,e,n,o){void 0===e&&(e=!1),void 0===n&&(n=!1);const i=t.getBoundingClientRect(),r=Q(t);let l=p(1);e&&(o?W(o)&&(l=Z(o)):l=Z(t));const a=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==B(t))&&e}(r,n,o)?et(r):p(0);let s=(i.left+a.x)/l.x,c=(i.top+a.y)/l.y,f=i.width/l.x,u=i.height/l.y;if(r){const t=B(r),e=o&&W(o)?B(o):o;let n=t,i=n.frameElement;for(;i&&o&&e!==n;){const t=Z(i),e=i.getBoundingClientRect(),o=q(i),r=e.left+(i.clientLeft+parseFloat(o.paddingLeft))*t.x,l=e.top+(i.clientTop+parseFloat(o.paddingTop))*t.y;s*=t.x,c*=t.y,f*=t.x,u*=t.y,s+=r,c+=l,n=B(i),i=n.frameElement}}return S({width:f,height:u,x:s,y:c})}const ot=[":popover-open",":modal"];function it(t){return ot.some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function rt(t){return nt(H(t)).left+X(t).scrollLeft}function lt(t,e,n){let o;if("viewport"===e)o=function(t,e){const n=B(t),o=H(t),i=n.visualViewport;let r=o.clientWidth,l=o.clientHeight,a=0,s=0;if(i){r=i.width,l=i.height;const t=I();(!t||t&&"fixed"===e)&&(a=i.offsetLeft,s=i.offsetTop)}return{width:r,height:l,x:a,y:s}}(t,n);else if("document"===e)o=function(t){const e=H(t),n=X(t),o=t.ownerDocument.body,i=f(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=f(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let l=-n.scrollLeft+rt(t);const a=-n.scrollTop;return"rtl"===q(o).direction&&(l+=f(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:l,y:a}}(H(t));else if(W(e))o=function(t,e){const n=nt(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=M(t)?Z(t):p(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(e,n);else{const n=et(t);o={...e,x:e.x-n.x,y:e.y-n.y}}return S(o)}function at(t,e){const n=U(t);return!(n===e||!W(n)||Y(n))&&("fixed"===q(n).position||at(n,e))}function st(t,e,n){const o=M(e),i=H(e),r="fixed"===n,l=nt(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const s=p(0);if(o||!o&&!r)if(("body"!==F(e)||V(i))&&(a=X(e)),o){const t=nt(e,!0,r,e);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}else i&&(s.x=rt(i));return{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function ct(t,e){return M(t)&&"fixed"!==q(t).position?e?e(t):t.offsetParent:null}function ft(t,e){const n=B(t);if(!M(t)||it(t))return n;let o=ct(t,e);for(;o&&z(o)&&"static"===q(o).position;)o=ct(o,e);return o&&("html"===F(o)||"body"===F(o)&&"static"===q(o).position&&!_(o))?n:o||function(t){let e=U(t);for(;M(e)&&!Y(e);){if(_(e))return e;e=U(e)}return null}(t)||n}const ut={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r="fixed"===i,l=H(o),a=!!e&&it(e.floating);if(o===l||a&&r)return n;let s={scrollLeft:0,scrollTop:0},c=p(1);const f=p(0),u=M(o);if((u||!u&&!r)&&(("body"!==F(o)||V(l))&&(s=X(o)),M(o))){const t=nt(o);c=Z(o),f.x=t.x+o.clientLeft,f.y=t.y+o.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+f.x,y:n.y*c.y-s.scrollTop*c.y+f.y}},getDocumentElement:H,getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let o=J(t,[],!1).filter((t=>W(t)&&"body"!==F(t))),i=null;const r="fixed"===q(t).position;let l=r?U(t):t;for(;W(l)&&!Y(l);){const e=q(l),n=_(l);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||V(l)&&!n&&at(t,l))?o=o.filter((t=>t!==l)):i=e,l=U(l)}return e.set(t,o),o}(e,this._c):[].concat(n),o],l=r[0],a=r.reduce(((t,n)=>{const o=lt(e,n,i);return t.top=f(o.top,t.top),t.right=c(o.right,t.right),t.bottom=c(o.bottom,t.bottom),t.left=f(o.left,t.left),t}),lt(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:ft,getElementRects:async function(t){const e=this.getOffsetParent||ft,n=this.getDimensions;return{reference:st(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=K(t);return{width:e,height:n}},getScale:Z,isElement:W,isRTL:function(t){return"rtl"===q(t).direction}};function dt(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,u=Q(t),p=i||r?[...u?J(u):[],...J(e)]:[];p.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const m=u&&a?function(t,e){let n,o=null;const i=H(t);function r(){var t;clearTimeout(n),null==(t=o)||t.disconnect(),o=null}return function l(a,s){void 0===a&&(a=!1),void 0===s&&(s=1),r();const{left:u,top:p,width:m,height:g}=t.getBoundingClientRect();if(a||e(),!m||!g)return;const h={rootMargin:-d(p)+"px "+-d(i.clientWidth-(u+m))+"px "+-d(i.clientHeight-(p+g))+"px "+-d(u)+"px",threshold:f(0,c(1,s))||1};let y=!0;function v(t){const e=t[0].intersectionRatio;if(e!==s){if(!y)return l();e?l(!1,e):n=setTimeout((()=>{l(!1,1e-7)}),100)}y=!1}try{o=new IntersectionObserver(v,{...h,root:i.ownerDocument})}catch(t){o=new IntersectionObserver(v,h)}o.observe(t)}(!0),r}(u,n):null;let g,h=-1,y=null;l&&(y=new ResizeObserver((t=>{let[o]=t;o&&o.target===u&&y&&(y.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame((()=>{var t;null==(t=y)||t.observe(e)}))),n()})),u&&!s&&y.observe(u),y.observe(e));let v=s?nt(t):null;return s&&function e(){const o=nt(t);!v||o.x===v.x&&o.y===v.y&&o.width===v.width&&o.height===v.height||n(),v=o,g=requestAnimationFrame(e)}(),n(),()=>{var t;p.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),null==m||m(),null==(t=y)||t.disconnect(),y=null,s&&cancelAnimationFrame(g)}}const pt=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:l,initialPlacement:a,platform:s,elements:c}=e,{mainAxis:f=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...h}=y(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const x=v(i),b=v(a)===a,E=await(null==s.isRTL?void 0:s.isRTL(c.floating)),T=d||(b||!g?[R(a)]:function(t){const e=R(t);return[O(t),e,O(e)]}(a));d||"none"===m||T.push(...function(t,e,n,o){const i=w(t);let r=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:l;default:return[]}}(v(t),"start"===n,o);return i&&(r=r.map((t=>t+"-"+i)),e&&(r=r.concat(r.map(O)))),r}(a,g,m,E));const P=[a,...T],S=await A(e,h),D=[];let C=(null==(o=r.flip)?void 0:o.overflows)||[];if(f&&D.push(S[x]),u){const t=L(i,l,E);D.push(S[t[0]],S[t[1]])}if(C=[...C,{placement:i,overflows:D}],!D.every((t=>t<=0))){var k,j;const t=((null==(k=r.flip)?void 0:k.index)||0)+1,e=P[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let n=null==(j=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:j.placement;if(!n)switch(p){case"bestFit":{var F;const t=null==(F=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:F[0];t&&(n=t);break}case"initialPlacement":n=a}if(i!==n)return{reset:{placement:n}}}return{}}}},mt=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=y(t,e);switch(o){case"referenceHidden":{const t=C(await A(e,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:k(t)}}}case"escaped":{const t=C(await A(e,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:k(t)}}}default:return{}}}}};function gt(t){return function(t){for(let e=t;e;e=ht(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=ht(t);e;e=ht(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||"none"!==t.filter)return e;if("BODY"===e.tagName)return e}}return null}(t)}function ht(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function yt(t){const e=window.devicePixelRatio||1;return Math.round(t*e)/e}!function(){if(o.L2.isBrowser){const t=ut.getOffsetParent;ut.getOffsetParent=e=>t(e,gt)}}();const vt=async(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:r,flipPlacements:l,offsetDistance:a,offsetSkidding:s,arrowEl:c,type:f})=>{if(!e||!n)return null;const{x:u,y:d,placement:p,strategy:m,middlewareData:g}=await((t,e,n)=>{const o=new Map,i={platform:ut,...n},r={...i.platform,_c:o};return(async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:l}=n,a=r.filter(Boolean),s=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=D(c,o,s),d=o,p={},m=0;for(let n=0;n<a.length;n++){const{name:r,fn:g}=a[n],{x:h,y,data:v,reset:w}=await g({x:f,y:u,initialPlacement:o,placement:d,strategy:i,middlewareData:p,rects:c,platform:l,elements:{reference:t,floating:e}});f=null!=h?h:f,u=null!=y?y:u,p={...p,[r]:{...p[r],...v}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(c=!0===w.rects?await l.getElementRects({reference:t,floating:e,strategy:i}):w.rects),({x:f,y:u}=D(c,d,s))),n=-1)}return{x:f,y:u,placement:d,strategy:i,middlewareData:p}})(t,e,{...i,platform:r})})(e,n,{strategy:o,placement:"auto"===i||"auto-start"===i||"auto-end"===i?void 0:Rt(n,i),middleware:Lt({placement:i,flipDisabled:r,flipPlacements:l,offsetDistance:a,offsetSkidding:s,arrowEl:c,type:f})});if(c&&g.arrow){const{x:e,y:n}=g.arrow,o=p.split("-")[0],i=null!=e?"left":"top",r=St[o],l={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout="left"===o||"right"===o?"horizontal":"vertical"),Object.assign(c.style,{...l,[i]:`${"left"==i?e:n}px`,[o]:"100%",transform:r})}const h=g.hide?.referenceHidden,y=h?"hidden":null,v=y?"none":null;n.setAttribute(wt,p);const{open:w}=t;Object.assign(n.style,{visibility:y,pointerEvents:v,position:m,transform:w?`translate(${yt(u)}px,${yt(d)}px)`:"",top:0,left:0})},wt="data-placement",xt=100,bt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Et="bottom-start",Tt={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Lt({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:r,type:l}){const a=[(void 0===f&&(f={}),{name:"shift",options:f,async fn(t){const{x:e,y:n,placement:o}=t,{mainAxis:i=!0,crossAxis:r=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...a}=y(f,t),s={x:e,y:n},c=await A(t,a),u=E(v(o)),d=x(u);let p=s[d],m=s[u];if(i){const t="y"===d?"bottom":"right";p=h(p+c["y"===d?"top":"left"],p,p-c[t])}if(r){const t="y"===u?"bottom":"right";m=h(m+c["y"===u?"top":"left"],m,m-c[t])}const g=l.fn({...t,[d]:p,[u]:m});return{...g,data:{x:g.x-e,y:g.y-n}}}}),mt()];var f;if("menu"===l)return[...a,pt({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if("popover"===l||"tooltip"===l){const l=[...a,j({mainAxis:"number"==typeof o?o:0,crossAxis:"number"==typeof i?i:0})];return"auto"===t||"auto-start"===t||"auto-end"===t?l.push(function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:r,middlewareData:l,placement:a,platform:c,elements:f}=e,{crossAxis:u=!1,alignment:d,allowedPlacements:p=s,autoAlignment:m=!0,...g}=y(t,e),h=void 0!==d||p===s?function(t,e,n){return(t?[...n.filter((e=>w(e)===t)),...n.filter((e=>w(e)!==t))]:n.filter((t=>v(t)===t))).filter((n=>!t||w(n)===t||!!e&&O(n)!==n))}(d||null,m,p):p,x=await A(e,g),b=(null==(n=l.autoPlacement)?void 0:n.index)||0,E=h[b];if(null==E)return{};const T=L(E,r,await(null==c.isRTL?void 0:c.isRTL(f.floating)));if(a!==E)return{reset:{placement:h[0]}};const R=[x[v(E)],x[T[0]],x[T[1]]],P=[...(null==(o=l.autoPlacement)?void 0:o.overflows)||[],{placement:E,overflows:R}],S=h[b+1];if(S)return{data:{index:b+1,overflows:P},reset:{placement:S}};const D=P.map((t=>{const e=w(t.placement);return[t.placement,e&&u?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),C=(null==(i=D.filter((t=>t[2].slice(0,w(t[0])?2:3).every((t=>t<=0))))[0])?void 0:i[0])||D[0][0];return C!==a?{data:{index:b+1,overflows:P},reset:{placement:C}}:{}}}}({alignment:"auto-start"===t?"start":"auto-end"===t?"end":null})):e||l.push(pt(n?{fallbackPlacements:n}:{})),r&&l.push((t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:l,elements:a,middlewareData:s}=e,{element:f,padding:u=0}=y(t,e)||{};if(null==f)return{};const d=P(u),p={x:n,y:o},m=T(i),g=b(m),v=await l.getDimensions(f),x="y"===m,E=x?"top":"left",L=x?"bottom":"right",O=x?"clientHeight":"clientWidth",R=r.reference[g]+r.reference[m]-p[m]-r.floating[g],S=p[m]-r.reference[m],D=await(null==l.getOffsetParent?void 0:l.getOffsetParent(f));let A=D?D[O]:0;A&&await(null==l.isElement?void 0:l.isElement(D))||(A=a.floating[O]||r.floating[g]);const C=R/2-S/2,k=A/2-v[g]/2-1,j=c(d[E],k),F=c(d[L],k),B=j,H=A-v[g]-F,N=A/2-v[g]/2+C,W=h(B,N,H),M=!s.arrow&&null!=w(i)&&N!==W&&r.reference[g]/2-(N<B?j:F)-v[g]/2<0,$=M?N<B?N-B:N-H:0;return{[m]:p[m]+$,data:{[m]:W,centerOffset:N-W-$,...M&&{alignmentOffset:$}},reset:M}}}))({element:r})),l}return[]}function Ot(t,e){const n=t.filter((t=>bt.includes(t)));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${bt.map((t=>`"${t}"`)).join(", ").trim()}`,{el:e}),n}function Rt(t,e){const n=["left","right"];return"rtl"===(0,i.a)(t)&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function Pt(t,e,n=!1){if(!t.open)return;const o=n?function(t){let e=At.get(t);return e||(e=(0,r.d)(vt,xt,{leading:!0,maxWait:xt}),At.set(t,e),e)}(t):vt;return o(t,e)}const St={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"},Dt=new WeakMap,At=new WeakMap;function Ct(t,e,n){if(!n||!e)return;kt(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning});const i=o.L2.isBrowser?dt:(t,e,n)=>(n(),()=>{});Dt.set(t,i(e,n,(()=>t.reposition())))}function kt(t,e,n){n&&e&&(Dt.get(t)?.(),Dt.delete(t),At.get(t)?.cancel(),At.delete(t))}const jt=Math.ceil(Math.hypot(4,4))},79107:(t,e,n)=>{n.d(e,{o:()=>l});var o=n(74815);function i(t){return"opened"in t?t.opened:t.open}function r(t,e=!1){(e?t[t.transitionProp]:i(t))?t.onBeforeOpen():t.onBeforeClose(),(e?t[t.transitionProp]:i(t))?t.onOpen():t.onClose()}function l(t,e=!1){(0,o.gv)((()=>{if(t.transitionEl){const{transitionDuration:n,transitionProperty:o}=getComputedStyle(t.transitionEl),l=n.split(","),a=l[o.split(",").indexOf(t.openTransitionProp)]??l[0];if("0s"===a)return void r(t,e);const s=setTimeout((()=>{t.transitionEl.removeEventListener("transitionstart",c),t.transitionEl.removeEventListener("transitionend",f),t.transitionEl.removeEventListener("transitioncancel",f),r(t,e)}),1e3*parseFloat(a));function c(n){n.propertyName===t.openTransitionProp&&n.target===t.transitionEl&&(clearTimeout(s),t.transitionEl.removeEventListener("transitionstart",c),(e?t[t.transitionProp]:i(t))?t.onBeforeOpen():t.onBeforeClose())}function f(n){n.propertyName===t.openTransitionProp&&n.target===t.transitionEl&&((e?t[t.transitionProp]:i(t))?t.onOpen():t.onClose(),t.transitionEl.removeEventListener("transitionend",f),t.transitionEl.removeEventListener("transitioncancel",f))}t.transitionEl.addEventListener("transitionstart",c),t.transitionEl.addEventListener("transitionend",f),t.transitionEl.addEventListener("transitioncancel",f)}}))}}}]);