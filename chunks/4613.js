"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[4613],{47111:(e,t,a)=>{a.d(t,{Al:()=>r,NZ:()=>h,Vb:()=>i,af:()=>u,rK:()=>m});var n=a(32083);const i="arial-unicode-ms",o="woff2",l=new Map,s=new Set;class c{constructor(e,t){this.fontFace=e,this.promise=t}}async function r(e){const t=m(e),a=l.get(t);if(a)return a.promise;const i=new FontFace(e.family,`url('${n.A.fontsUrl}/woff2/${t}.${o}') format('${o}')`,{style:e.style,weight:e.weight}),r=document.fonts;if(r.has(i)&&"loading"===i.status)return i.loaded;const h=i.load().then((()=>(r.add(i),i)));return l.set(t,new c(i,h)),s.add(i),h}function h(e){return s.has(e)}function u(e){if(!e)return i;const t=e.toLowerCase().split(" ").join("-");switch(t){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return t}}function m(e){const t=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}(e);return u(e.family)+(t.length>0?t:"-regular")}},84613:(e,t,a)=>{a.d(t,{previewSymbol2D:()=>S});var n=a(93814),i=a(60861),o=a(62991),l=a(47111),s=a(23572),c=a(67175),r=a(21550),h=a(63602),u=a(70227);const m="picture-fill",d="picture-marker",f="simple-fill",p="simple-line",y="simple-marker",w="text",g="Aa",b=r.CB.size,v=r.CB.maxSize,L=r.CB.maxOutlineSize,z=r.CB.lineWidth,k=225,M=document.createElement("canvas");function x(e,t){const a=M.getContext("2d"),n=[];t&&(t.weight&&n.push(t.weight),t.size&&n.push(t.size+"px"),t.family&&n.push(t.family)),a.font=n.join(" ");const{width:i,actualBoundingBoxLeft:o,actualBoundingBoxRight:l,actualBoundingBoxAscent:s,actualBoundingBoxDescent:c}=a.measureText(e);return{width:Math.ceil(Math.max(i,o+l)),height:Math.ceil(s+c),x:Math.floor(o),y:Math.floor((s-c)/2)}}function C(e){const t=e?.size;return{width:null!=t&&"object"==typeof t&&"width"in t?(0,s.Lz)(t.width):null,height:null!=t&&"object"==typeof t&&"height"in t?(0,s.Lz)(t.height):null}}function B(e,t){return e>t?"dark":"light"}async function S(e,t){const{shapeDescriptor:a,size:n,renderOptions:i}=function(e,t){const a="number"==typeof t?.size?t?.size:null,n=null!=a?(0,s.Lz)(a):null,i=null!=t?.maxSize?(0,s.Lz)(t.maxSize):null,o=null!=t?.rotation?t.rotation:"angle"in e?e.angle:null,l=(0,c.eH)(e);let h=(0,c.$4)(e);"dark"!==A(e,245)||t?.ignoreWhiteSymbols||(h={width:.75,...h,color:"#bdc3c7"});const u={shape:null,fill:l,stroke:h,offset:[0,0]};h?.width&&(h.width=Math.min(h.width,L));const k=h?.width||0;let M=null!=t?.size&&(null==t?.scale||t?.scale),B=0,S=0,F=!1;switch(e.type){case y:{const a=e.style,{width:l,height:c}=C(t),r=l===c&&null!=l?l:null!=n?n:Math.min((0,s.Lz)(e.size),i||v);switch(B=r,S=r,a){case"circle":u.shape={type:"circle",cx:0,cy:0,r:.5*r},M||(B+=k,S+=k);break;case"cross":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[B,.5*S]},{command:"M",values:[.5*B,0]},{command:"L",values:[.5*B,S]}]};break;case"diamond":u.shape={type:"path",path:[{command:"M",values:[0,.5*S]},{command:"L",values:[.5*B,0]},{command:"L",values:[B,.5*S]},{command:"L",values:[.5*B,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k);break;case"square":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),o&&(F=!0);break;case"triangle":u.shape={type:"path",path:[{command:"M",values:[.5*B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"Z",values:[]}]},M||(B+=k,S+=k),o&&(F=!0);break;case"x":u.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,S]},{command:"M",values:[B,0]},{command:"L",values:[0,S]}]},o&&(F=!0);break;case"path":u.shape={type:"path",path:e.path||""},M||(B+=k,S+=k),o&&(F=!0),M=!0}break}case p:{const{width:e,height:a}=C(t),i=(0,c.O0)(h).reduce(((e,t)=>e+t),0),o=i&&Math.ceil(z/i),l=a??n??k,s=e??(i*o||z);h&&(h.width=l),B=s,S=l,M=!0,u.shape={type:"path",path:[{command:"M",values:[l/2,S/2]},{command:"L",values:[B-l/2,S/2]}]};break}case m:case f:{const e="object"==typeof t?.symbolConfig&&!!t?.symbolConfig?.isSquareFill,{width:a,height:i}=C(t);B=!e&&a!==i||null==a?null!=n?n:b:a,S=!e&&a!==i||null==i?B:i,M||(B+=k,S+=k),M=!0,u.shape=e?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[B,0]},{command:"L",values:[B,S]},{command:"L",values:[0,S]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:r.nq.fill[0];break}case d:{const a=Math.min((0,s.Lz)(e.width),i||v),l=Math.min((0,s.Lz)(e.height),i||v),{width:c,height:r}=C(t),h=c===r&&null!=c?c:null!=n?n:Math.max(a,l),m=a/l;B=m<=1?Math.ceil(h*m):h,S=m<=1?h:Math.ceil(h/m),u.shape={type:"image",x:-Math.round(B/2),y:-Math.round(S/2),width:B,height:S,src:e.url||""},o&&(F=!0);break}case w:{const a=e,o=t?.overrideText||a.text||g,l=a.font,{width:c,height:r}=C(t),h=null!=r?r:null!=n?n:Math.min((0,s.Lz)(l.size),i||v),{width:m,height:d}=x(o,{weight:l.weight,size:h,family:l.family}),f=/[\uE600-\uE6FF]/.test(o);B=c??(f?h:m),S=f?h:d;let p=.5*(f?h:d);f&&(p+=5),u.shape={type:"text",text:o,x:a.xoffset||0,y:a.yoffset||p,align:"middle",alignBaseline:a.verticalAlignment,decoration:l&&l.decoration,rotated:a.rotated,kerning:a.kerning},u.font=l&&{size:h,style:l.style,decoration:l.decoration,weight:l.weight,family:l.family};break}}return{shapeDescriptor:u,size:[B,S],renderOptions:{node:t?.node,scale:M,opacity:t?.opacity,rotation:o,useRotationSize:F,effectView:t?.effectView,ariaLabel:t?.ariaLabel}}}(e,t);if(!a.shape)throw new o.A("symbolPreview: renderPreviewHTML2D","symbol not supported.");await async function(e,t){const a=t.fill,n=e.color;if("pattern"===a?.type&&n&&e.type!==m){const e=await(0,c.rc)(a.src,n.toCss(!0));a.src=e,t.fill=a}}(e,a),await async function(e,t,a,n){if(!("font"in e)||!e.font||"text"!==t.shape.type)return;try{await(0,l.Al)(e.font)}catch{}const{width:i,height:o}=C(n);if(!/[\uE600-\uE6FF]/.test(t.shape.text)){const{width:l,height:s,x:c,y:r}=x(t.shape.text,{weight:t.font?.weight,size:t.font?.size,family:t.font?.family});a[0]=i??l,a[1]=o??s,t.shape.x=c,t.shape.y=r;const h=null!=n?.rotation?n.rotation:"angle"in e?e.angle:null;if(h){const e=h*(Math.PI/180),t=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e));a[1]=a[0]*t+a[1]*n}}}(e,a,n,t);const k=[[a]];if("object"==typeof t?.symbolConfig&&t?.symbolConfig?.applyColorModulation){const e=.6*n[0];k.unshift([{...a,offset:[-e,0],fill:(0,r.QC)(a.fill,-.3)}]),k.push([{...a,offset:[e,0],fill:(0,r.QC)(a.fill,.3)}]),n[0]+=2*e,i.scale=!1}return"text"===e.type&&function(e,t,a,n,i){if(null!=e.haloColor&&null!=e.haloSize){i.masking??=a.map((()=>[]));const o=(0,s.Lz)(e.haloSize);n[0]+=o,n[1]+=o,a.unshift([{...t,fill:null,stroke:{color:e.haloColor,width:2*o,join:"round",cap:"round"}}]),i.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*u.y7,height:n[1]+2*u.y7},fill:[255,255,255],stroke:null},{...t,fill:[0,0,0,0],stroke:null}])}null==e.backgroundColor&&null==e.borderLineColor||(n[0]+=2*u.y7,n[1]+=2*u.y7,a.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:e.backgroundColor,stroke:{color:e.borderLineColor,width:(0,s.Lz)(e.borderLineSize)}}]),i.masking?.unshift([]))}(e,a,k,n,i),(0,h.fz)(k,n,i)}function A(e,t=k){const a=(0,c.eH)(e),o=(0,c.$4)(e),l=!a||"type"in a?null:new n.A(a),s=o?.color?new n.A(o?.color):null,r=l?B((0,i.Ws)(l),t):null,h=s?B((0,i.Ws)(s),t):null;return h?r?r===h?r:t>=k?"light":"dark":h:r}}}]);