"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[2006],{72006:(t,n,e)=>{e.d(n,{B:()=>F,D:()=>I,E:()=>D,a:()=>x,b:()=>j,c:()=>q,d:()=>V,e:()=>B,f:()=>$,g:()=>U,h:()=>R,i:()=>J,j:()=>b,k:()=>E,l:()=>N,m:()=>p,n:()=>C,o:()=>X,q:()=>k,r:()=>G,s:()=>Y,t:()=>z,u:()=>Q,v:()=>K,w:()=>H});var r=e(60005),o=(e(96367),["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"]),i=o.join(","),u="undefined"==typeof Element,l=u?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!u&&Element.prototype.getRootNode?function(t){var n;return null==t||null===(n=t.getRootNode)||void 0===n?void 0:n.call(t)}:function(t){return null==t?void 0:t.ownerDocument},c=function t(n,e){var r;void 0===e&&(e=!0);var o=null==n||null===(r=n.getAttribute)||void 0===r?void 0:r.call(n,"inert");return""===o||"true"===o||e&&n&&t(n.parentNode)},f=function(t,n,e){if(c(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(i));return n&&l.call(t,i)&&r.unshift(t),r.filter(e)},s=function t(n,e,r){for(var o=[],u=Array.from(n);u.length;){var a=u.shift();if(!c(a,!1))if("SLOT"===a.tagName){var f=a.assignedElements(),s=t(f.length?f:a.children,!0,r);r.flatten?o.push.apply(o,s):o.push({scopeParent:a,candidates:s})}else{l.call(a,i)&&r.filter(a)&&(e||!n.includes(a))&&o.push(a);var d=a.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(a),p=!c(d,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(a));if(d&&p){var h=t(!0===d?a.children:d.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scopeParent:a,candidates:h})}else u.unshift.apply(u,a.children)}}return o},d=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},p=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var n,e=null==t||null===(n=t.getAttribute)||void 0===n?void 0:n.call(t,"contenteditable");return""===e||"true"===e}(t))&&!d(t)?0:t.tabIndex},h=function(t,n){return t.tabIndex===n.tabIndex?t.documentOrder-n.documentOrder:t.tabIndex-n.tabIndex},m=function(t){return"INPUT"===t.tagName},g=function(t){var n=t.getBoundingClientRect(),e=n.width,r=n.height;return 0===e&&0===r},y=function(t,n){return!(n.disabled||c(n)||function(t){return m(t)&&"hidden"===t.type}(n)||function(t,n){var e=n.displayCheck,r=n.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var o=l.call(t,"details>summary:first-of-type")?t.parentElement:t;if(l.call(o,"details:not([open]) *"))return!0;if(e&&"full"!==e&&"legacy-full"!==e){if("non-zero-area"===e)return g(t)}else{if("function"==typeof r){for(var i=t;t;){var u=t.parentElement,c=a(t);if(u&&!u.shadowRoot&&!0===r(u))return g(t);t=t.assignedSlot?t.assignedSlot:u||c===t.ownerDocument?u:c.host}t=i}if(function(t){var n,e,r,o,i=t&&a(t),u=null===(n=i)||void 0===n?void 0:n.host,l=!1;if(i&&i!==t)for(l=!!(null!==(e=u)&&void 0!==e&&null!==(r=e.ownerDocument)&&void 0!==r&&r.contains(u)||null!=t&&null!==(o=t.ownerDocument)&&void 0!==o&&o.contains(t));!l&&u;){var c,f,s;l=!(null===(f=u=null===(c=i=a(u))||void 0===c?void 0:c.host)||void 0===f||null===(s=f.ownerDocument)||void 0===s||!s.contains(u))}return l}(t))return!t.getClientRects().length;if("legacy-full"!==e)return!0}return!1}(n,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(n)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var n=t.parentElement;n;){if("FIELDSET"===n.tagName&&n.disabled){for(var e=0;e<n.children.length;e++){var r=n.children.item(e);if("LEGEND"===r.tagName)return!!l.call(n,"fieldset[disabled] *")||!r.contains(t)}return!0}n=n.parentElement}return!1}(n))},v=function(t,n){return!(function(t){return function(t){return m(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var n,e=t.form||a(t),r=function(t){return e.querySelectorAll('input[type="radio"][name="'+t+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)n=r(window.CSS.escape(t.name));else try{n=r(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var o=function(t,n){for(var e=0;e<t.length;e++)if(t[e].checked&&t[e].form===n)return t[e]}(n,t.form);return!o||o===t}(t)}(n)||p(n)<0||!y(t,n))},S=function(t){var n=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(n)||n>=0)},w=function t(n){var e=[],r=[];return n.forEach((function(n,o){var i=!!n.scopeParent,u=i?n.scopeParent:n,l=function(t,n){var e=p(t);return e<0&&n&&!d(t)?0:e}(u,i),a=i?t(n.candidates):u;0===l?i?e.push.apply(e,a):e.push(u):r.push({documentOrder:o,tabIndex:l,item:n,isScope:i,content:a})})),r.sort(h).reduce((function(t,n){return n.isScope?t.push.apply(t,n.content):t.push(n.content),t}),[]).concat(e)},b=function(t,n){var e;return e=(n=n||{}).getShadowRoot?s([t],n.includeContainer,{filter:v.bind(null,n),flatten:!1,getShadowRoot:n.getShadowRoot,shadowRootFilter:S}):f(t,n.includeContainer,v.bind(null,n)),w(e)},E=function(t,n){return(n=n||{}).getShadowRoot?s([t],n.includeContainer,{filter:y.bind(null,n),flatten:!0,getShadowRoot:n.getShadowRoot}):f(t,n.includeContainer,y.bind(null,n))},N=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==l.call(t,i)&&v(n,t)},A=o.concat("iframe").join(","),R=function(t,n){if(n=n||{},!t)throw new Error("No node provided");return!1!==l.call(t,A)&&y(n,t)};const C={getShadowRoot:!0};function I(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function x(t){const n=q(t,"[dir]");return n?n.getAttribute("dir"):"ltr"}function T(t){return t.getRootNode()}function D(t){const n=T(t);return"host"in n?n:null}function O(t){return t.host||null}function k(t,{selector:n,id:e}){return function t(r){if(!r)return null;r.assignedSlot&&(r=r.assignedSlot);const o=T(r),i=e?"getElementById"in o?o.getElementById(e):null:n?o.querySelector(n):null,u=O(o);return i||(u?t(u):null)}(t)}function q(t,n){return function t(e){return e?e.closest(n)||t(O(T(e))):null}(t)}function L(t,n){return P(t,n)}function P(t,n){if(!t)return;const e=n(t);if(void 0!==e)return e;const{parentNode:r}=t;return P(r instanceof ShadowRoot?r.host:r,n)}function j(t,n){return!!L(n,(n=>n===t||void 0))}async function B(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function F(t){if(t)return b(t,C)[0]??t}function $(t){F(t)?.focus()}const M=":not([slot])";function U(t,n,e){n&&!Array.isArray(n)&&"string"!=typeof n&&(e=n,n=null);const r=n?Array.isArray(n)?n.map((t=>`[slot="${t}"]`)).join(","):`[slot="${n}"]`:M;return e?.all?function(t,n,e){let r=n===M?_(t,M):Array.from(t.querySelectorAll(n));r=e&&!1===e.direct?r:r.filter((n=>n.parentElement===t)),r=e?.matches?r.filter((t=>t?.matches(e.matches))):r;const o=e?.selector;return o?r.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,n)=>[...t,...n]),[]).filter((t=>!!t)):r}(t,r,e):function(t,n,e){let r=n===M?_(t,M)[0]||null:t.querySelector(n);r=e&&!1===e.direct||r?.parentElement===t?r:null,r=e?.matches?r?.matches(e.matches)?r:null:r;const o=e?.selector;return o?r?.querySelector(o):r}(t,r,e)}function _(t,n){return t?Array.from(t.children||[]).filter((t=>t?.matches(n))):[]}function X(t,n,e){return"string"==typeof n&&""!==n?n:""===n?t[e]:void 0}function z(t){return Boolean(t).toString()}function G(t){return V(t)||function(t){return!!function(t){return function(t){return t.target.assignedNodes({flatten:!0})}(t).filter((t=>t.nodeType===Node.TEXT_NODE)).map((t=>t.textContent)).join("").trim()}(t)}(t)}function V(t){return!!Y(t).length}function Y(t){return t.target.assignedElements({flatten:!0})}function H(t){return!(!t.isPrimary||0!==t.button)}function J(t){return 0===t.detail}const K=(t,n,e,r=!0)=>{const o=t.indexOf(n),i=0===o,u=o===t.length-1;let l;return r&&(e="previous"===e&&i?"last":"next"===e&&u?"first":e),l="previous"===e?t[o-1]||t[r?t.length-1:o]:"next"===e?t[o+1]||t[r?0:o]:"last"===e?t[t.length-1]:t[0],B(l),l};function Q(t,n){if(t.parentNode!==n.parentNode)return!1;const e=Array.from(t.parentNode.children);return e.indexOf(t)<e.indexOf(n)}},60005:(t,n,e)=>{e.d(n,{g:()=>r});const r=()=>[2,1,1,1,3].map((t=>{let n="";for(let e=0;e<t;e++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n})).join("-")}}]);