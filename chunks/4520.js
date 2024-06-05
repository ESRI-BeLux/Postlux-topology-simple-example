"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[4520,6233],{21120:(t,e,r)=>{r.d(e,{w:()=>f});var n=r(3223),s=r(41785),i=r(79207);class f{constructor(t=9,e){this._compareMinX=l,this._compareMinY=c,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),T.prune(),g.prune(),E.prune(),A.prune()}all(t){this._all(this._data,t)}search(t,e){let r=this._data;const n=this._toBBox;if(B(t,r))for(T.clear();r;){for(let s=0,i=r.children.length;s<i;s++){const i=r.children[s],f=r.leaf?n(i):i;B(t,f)&&(r.leaf?e(i):m(t,f)?this._all(i,e):T.push(i))}r=T.pop()}}collides(t){let e=this._data;const r=this._toBBox;if(!B(t,e))return!1;for(T.clear();e;){for(let n=0,s=e.children.length;n<s;n++){const s=e.children[n],i=e.leaf?r(s):s;if(B(t,i)){if(e.leaf||m(t,i))return!0;T.push(s)}}e=T.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,r=t.length;e<r;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new w([]),this}remove(t){if(!t)return this;let e,r=this._data,s=null,i=0,f=!1;const o=this._toBBox(t);for(E.clear(),A.clear();r||E.length>0;){if(r||(r=E.pop(),s=E.data[E.length-1],i=A.pop()??0,f=!0),r.leaf&&(e=(0,n.qh)(r.children,t,r.children.length,r.indexHint),-1!==e))return r.children.splice(e,1),E.push(r),this._condense(E),this;f||r.leaf||!m(r,o)?s?(i++,r=s.children[i],f=!1):r=null:(E.push(r),A.push(i),i=0,s=r,r=r.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let r=t;for(g.clear();r;){if(!0===r.leaf)for(const t of r.children)e(t);else g.pushArray(r.children);r=g.pop()??null}}_build(t,e,r,n){const s=r-e+1;let i=this._maxEntries;if(s<=i){const n=new w(t.slice(e,r+1));return o(n,this._toBBox),n}n||(n=Math.ceil(Math.log(s)/Math.log(i)),i=Math.ceil(s/i**(n-1)));const f=new M([]);f.height=n;const u=Math.ceil(s/i),a=u*Math.ceil(Math.sqrt(i));b(t,e,r,a,this._compareMinX);for(let s=e;s<=r;s+=a){const e=Math.min(s+a-1,r);b(t,s,e,u,this._compareMinY);for(let r=s;r<=e;r+=u){const s=Math.min(r+u-1,e);f.children.push(this._build(t,r,s,n-1))}}return o(f,this._toBBox),f}_chooseSubtree(t,e,r,n){for(;n.push(e),!0!==e.leaf&&n.length-1!==r;){let r,n=1/0,s=1/0;for(let i=0,f=e.children.length;i<f;i++){const f=e.children[i],o=h(f),u=p(t,f)-o;u<s?(s=u,n=o<n?o:n,r=f):u===s&&o<n&&(n=o,r=f)}e=r||e.children[0]}return e}_insert(t,e,r){const n=this._toBBox,s=r?t:n(t);E.clear();const i=this._chooseSubtree(s,this._data,e,E);for(i.children.push(t),a(i,s);e>=0&&E.data[e].children.length>this._maxEntries;)this._split(E,e),e--;this._adjustParentBBoxes(s,E,e)}_split(t,e){const r=t.data[e],n=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,n);const i=this._chooseSplitIndex(r,s,n);if(!i)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const f=r.children.splice(i,r.children.length-i),u=r.leaf?new w(f):new M(f);u.height=r.height,o(r,this._toBBox),o(u,this._toBBox),e?t.data[e-1].children.push(u):this._splitRoot(r,u)}_splitRoot(t,e){this._data=new M([t,e]),this._data.height=t.height+1,o(this._data,this._toBBox)}_chooseSplitIndex(t,e,r){let n,s,i;n=s=1/0;for(let f=e;f<=r-e;f++){const e=u(t,0,f,this._toBBox),o=u(t,f,r,this._toBBox),a=d(e,o),l=h(e)+h(o);a<n?(n=a,i=f,s=l<s?l:s):a===n&&l<s&&(s=l,i=f)}return i}_chooseSplitAxis(t,e,r){const n=t.leaf?this._compareMinX:l,s=t.leaf?this._compareMinY:c;this._allDistMargin(t,e,r,n)<this._allDistMargin(t,e,r,s)&&t.children.sort(n)}_allDistMargin(t,e,r,n){t.children.sort(n);const s=this._toBBox,i=u(t,0,e,s),f=u(t,r-e,r,s);let o=y(i)+y(f);for(let n=e;n<r-e;n++){const e=t.children[n];a(i,t.leaf?s(e):e),o+=y(i)}for(let n=r-e-1;n>=e;n--){const e=t.children[n];a(f,t.leaf?s(e):e),o+=y(f)}return o}_adjustParentBBoxes(t,e,r){for(let n=r;n>=0;n--)a(e.data[n],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const r=t.data[e];if(0===r.children.length)if(e>0){const s=t.data[e-1],i=s.children;i.splice((0,n.qh)(i,r,i.length,s.indexHint),1)}else this.clear();else o(r,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function o(t,e){u(t,0,t.children.length,e,t)}function u(t,e,r,n,s){s||(s=new w([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let i,f=e;f<r;f++)i=t.children[f],a(s,t.leaf?n(i):i);return s}function a(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function l(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function h(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function y(t){return t.maxX-t.minX+(t.maxY-t.minY)}function p(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function d(t,e){const r=Math.max(t.minX,e.minX),n=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),i=Math.min(t.maxY,e.maxY);return Math.max(0,s-r)*Math.max(0,i-n)}function m(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function B(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function b(t,e,r,n,s){const f=[e,r];for(;f.length;){const e=f.pop(),r=f.pop();if(e-r<=n)continue;const o=r+Math.ceil((e-r)/n/2)*n;(0,i.q)(t,o,r,e,s),f.push(r,o,o,e)}}const T=new s.A,g=new s.A,E=new s.A,A=new s.A({deallocator:void 0});class x{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class _ extends x{constructor(){super(...arguments),this.height=1,this.indexHint=new n.vW}}class w extends _{constructor(t){super(),this.children=t,this.leaf=!0}}class M extends _{constructor(t){super(),this.children=t,this.leaf=!1}}},63540:(t,e,r)=>{r.d(e,{l:()=>a});var n=r(4506),s=r(25336),i=r(19913),f=r(31262),o=r(99269),u=r(67488);function a(t,e,r,n){if(null==t||null==n)return!1;const i=(0,o.Qk)(t,o.Wv),a=(0,o.Qk)(n,o.zp);if(i===a&&!l(a)&&(i!==o.rz.UNKNOWN||(0,u.aI)(t,n)))return(0,s.kN)(r,e),!0;if(l(a)){const t=o.w5[i][o.rz.LON_LAT],n=o.w5[o.rz.LON_LAT][a];return null!=t&&null!=n&&(t(e,0,h,0),n(h,0,y,0),(0,f.y)(c*h[0],c*h[1],r),r[12]=y[0],r[13]=y[1],r[14]=y[2],!0)}if((a===o.rz.WEB_MERCATOR||a===o.rz.PLATE_CARREE||a===o.rz.WGS84)&&(i===o.rz.WGS84||i===o.rz.CGCS2000&&a===o.rz.PLATE_CARREE||i===o.rz.SPHERICAL_ECEF||i===o.rz.WEB_MERCATOR)){const t=o.w5[i][o.rz.LON_LAT],n=o.w5[o.rz.LON_LAT][a];return null!=t&&null!=n&&(t(e,0,h,0),n(h,0,y,0),i===o.rz.SPHERICAL_ECEF?(0,f.C)(c*h[0],c*h[1],r):(0,s.D_)(r),r[12]=y[0],r[13]=y[1],r[14]=y[2],!0)}return!1}function l(t){return t===o.rz.SPHERICAL_ECEF||t===o.rz.SPHERICAL_MARS_PCPF||t===o.rz.SPHERICAL_MOON_PCPF}const c=(0,n.kU)(1),h=(0,i.vt)(),y=(0,i.vt)()},31262:(t,e,r)=>{r.d(e,{C:()=>i,y:()=>s});var n=r(25336);function s(t,e,r){const n=Math.sin(t),s=Math.cos(t),i=Math.sin(e),f=Math.cos(e),o=r;return o[0]=-n,o[4]=-i*s,o[8]=f*s,o[12]=0,o[1]=s,o[5]=-i*n,o[9]=f*n,o[13]=0,o[2]=0,o[6]=f,o[10]=i,o[14]=0,o[3]=0,o[7]=0,o[11]=0,o[15]=1,o}function i(t,e,r){return s(t,e,r),(0,n.mg)(r,r),r}},32159:(t,e,r)=>{r.d(e,{GD:()=>f,Y0:()=>a,lO:()=>l});var n=r(34670),s=r(44153),i=r(67488);const f=new s.A(n.fv),o=new s.A(n.FY),u=new s.A(n.LJ),a=new s.A(n.Ro);function l(t){const e=c.get(t);if(e)return e;let r=f;if(t)if(t===o)r=o;else if(t===u)r=u;else{const e=t.wkid,n=t.latestWkid;if(null!=e||null!=n)(0,i.tl)(e)||(0,i.tl)(n)?r=o:((0,i.ZL)(e)||(0,i.ZL)(n))&&(r=u);else{const e=t.wkt2??t.wkt;if(e){const t=e.toUpperCase();t===h?r=o:t===y&&(r=u)}}}return c.set(t,r),r}const c=new Map,h=o.wkt.toUpperCase(),y=u.wkt.toUpperCase()},75644:(t,e,r)=>{r.d(e,{Ns:()=>u,jh:()=>s,l5:()=>f,s:()=>o,xm:()=>i});var n=r(62088);function s(t,e=!1){return t<=n.y9?e?new Array(t).fill(0):new Array(t):new Float64Array(t)}function i(t){return((0,n.cy)(t)?t.length:t.byteLength/8)<=n.y9?Array.from(t):new Float64Array(t)}function f(t,e,r){return Array.isArray(t)?t.slice(e,e+r):t.subarray(e,e+r)}function o(t,e){for(let r=0;r<e.length;++r)t[r]=e[r];return t}function u(t){return Array.isArray(t)?new Float64Array(t):t}},77873:(t,e,r)=>{r.d(e,{A:()=>B});var n,s=r(82392),i=r(84977),f=r(81482),o=(r(6273),r(80861),r(67498),r(26325)),u=r(25336),a=r(26110),l=r(31753),c=r(19165),h=r(80347),y=r(19913),p=r(43785);let d=n=class extends i.oY{constructor(t){super(t),this.translation=(0,y.vt)(),this.rotationAxis=(0,y.ci)(p.up),this.rotationAngle=0,this.scale=(0,y.fA)(1,1,1)}get rotation(){return(0,p.i4)(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=(0,y.o8)((0,p.yo)(t)),this.rotationAngle=(0,p.g7)(t)}get localMatrix(){const t=(0,a.vt)();return(0,l.x8)(m,(0,p.yo)(this.rotation),(0,p.$I)(this.rotation)),(0,u.o1)(t,m,this.translation,this.scale),t}get localMatrixInverse(){return(0,u.B8)((0,a.vt)(),this.localMatrix)}applyLocal(t,e){return(0,h.e)(e,t,this.localMatrix)}applyLocalInverse(t,e){return(0,h.e)(e,t,this.localMatrixInverse)}equals(t){return this===t||null!=t&&(0,u.t2)(this.localMatrix,t.localMatrix)}clone(){const t={translation:(0,y.o8)(this.translation),rotationAxis:(0,y.o8)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,y.o8)(this.scale)};return new n(t)}};(0,s._)([(0,f.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0),(0,s._)([(0,f.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAxis",void 0),(0,s._)([(0,f.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAngle",void 0),(0,s._)([(0,f.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0),(0,s._)([(0,f.MZ)()],d.prototype,"rotation",null),(0,s._)([(0,f.MZ)()],d.prototype,"localMatrix",null),(0,s._)([(0,f.MZ)()],d.prototype,"localMatrixInverse",null),d=n=(0,s._)([(0,o.$)("esri.geometry.support.MeshTransform")],d);const m=(0,c.vt)(),B=d},43785:(t,e,r)=>{r.d(e,{$I:()=>b,AU:()=>d,Cr:()=>h,g7:()=>B,i4:()=>c,ui:()=>y,up:()=>g,vt:()=>l,yo:()=>m});var n=r(4506),s=r(25336),i=r(31753),f=r(19165),o=r(80347),u=r(19913),a=r(76982);function l(t=g){return[t[0],t[1],t[2],t[3]]}function c(t,e,r=l()){return(0,o.c)(r,t),r[3]=e,r}function h(t,e,r=(0,a.vt)()){return(0,o.b)(r,t,e),(0,o.n)(r,r),r[3]=-(0,o.d)(t,e),r}function y(t,e=l()){const r=(0,s.l)(E,t);return T(e,(0,n.KJ)((0,i.Xd)(e,r))),e}function p(t,e,r=l()){return(0,i.x8)(E,t,b(t)),(0,i.x8)(A,e,b(e)),(0,i.lw)(E,A,E),T(r,(0,n.KJ)((0,i.Xd)(r,E)))}function d(t,e,r,n=l()){return c(u.Cw,t,x),c(u.JP,e,_),c(u.Cb,r,w),p(x,_,x),p(x,w,n),n}function m(t){return t}function B(t){return t[3]}function b(t){return(0,n.kU)(t[3])}function T(t,e){return t[3]=e,t}const g=[0,0,1,0],E=(0,f.vt)(),A=(0,f.vt)(),x=(l(),l()),_=l(),w=l()},40041:(t,e,r)=>{r.d(e,{Y$:()=>h,qB:()=>g,Qt:()=>U,My:()=>H,bf:()=>X,jZ:()=>m,j0:()=>B,Sx:()=>b,E$:()=>T,h:()=>O,P:()=>C,SL:()=>_,gH:()=>y,si:()=>E,mJ:()=>j,UL:()=>k,D6:()=>N,Yi:()=>L,An:()=>Y,LC:()=>w,xs:()=>p,Xm:()=>A,Vp:()=>W,zD:()=>V,m8:()=>I,nS:()=>v,H$:()=>F,eI:()=>M,Eq:()=>d,Aj:()=>x,E7:()=>q,Y4:()=>G,TX:()=>z,Uz:()=>P,ml:()=>R,XP:()=>S});class n{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===n&&(n=9*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<9;t++)e[t]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<9;t++)this.typedBuffer[r++]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;for(let t=0;t<9;++t)n[i++]=s[f++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===n&&(n=16*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<16;t++)e[t]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let t=0;t<16;t++)this.typedBuffer[r++]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;for(let t=0;t<16;++t)n[i++]=s[f++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class i{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===n&&(n=i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.stride=n,this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=1;var f=r(53334);class o{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===n&&(n=2*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,(0,f.hZ)(e,this.typedBuffer[t],this.typedBuffer[t+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}o.ElementCount=2;var u=r(80347);class a{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===n&&(n=3*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,(0,u.s)(e,this.typedBuffer[t],this.typedBuffer[t+1],this.typedBuffer[t+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=n}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;n[i++]=s[f++],n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=3;var l=r(74772);class c{constructor(t,e,r=0,n,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===n&&(n=4*i.BYTES_PER_ELEMENT);const f=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,f):new i(e,f,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=n/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const n=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,n,this.stride,n+r*this.stride)}getVec(t,e){return t*=this.typedBufferStride,(0,l.s)(e,this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,n,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=n,this.typedBuffer[t]=s}copyFrom(t,e,r){const n=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,f=r*e.typedBufferStride;n[i++]=s[f++],n[i++]=s[f++],n[i++]=s[f++],n[i]=s[f]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=4;class h extends i{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}static fromTypedArray(t,e){return new h(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}h.ElementType="f32";class y extends o{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(y,t,e)}static fromTypedArray(t,e){return new y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}y.ElementType="f32";class p extends a{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(p,t,e)}static fromTypedArray(t,e){return new p(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}p.ElementType="f32";class d extends c{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(d,t,e)}static fromTypedArray(t,e){return new d(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}d.ElementType="f32";class m extends n{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(m,t,e)}static fromTypedArray(t,e){return new m(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}m.ElementType="f32";class B extends n{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(B,t,e)}static fromTypedArray(t,e){return new B(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}B.ElementType="f64";class b extends s{constructor(t,e=0,r,n){super(Float32Array,t,e,r,n),this.elementType="f32"}slice(t,e){return this.sliceBuffer(b,t,e)}static fromTypedArray(t,e){return new b(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}b.ElementType="f32";class T extends s{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(T,t,e)}static fromTypedArray(t,e){return new T(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}T.ElementType="f64";class g extends i{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(g,t,e)}static fromTypedArray(t,e){return new g(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}g.ElementType="f64";class E extends o{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(E,t,e)}static fromTypedArray(t,e){return new E(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}E.ElementType="f64";class A extends a{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(A,t,e)}static fromTypedArray(t,e){return new A(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}A.ElementType="f64";class x extends c{constructor(t,e=0,r,n){super(Float64Array,t,e,r,n),this.elementType="f64"}slice(t,e){return this.sliceBuffer(x,t,e)}static fromTypedArray(t,e){return new x(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}x.ElementType="f64";class _ extends i{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(_,t,e)}static fromTypedArray(t,e){return new _(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}_.ElementType="u8";class w extends o{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(w,t,e)}static fromTypedArray(t,e){return new w(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}w.ElementType="u8";class M extends a{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(M,t,e)}static fromTypedArray(t,e){return new M(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}M.ElementType="u8";class S extends c{constructor(t,e=0,r,n){super(Uint8Array,t,e,r,n),this.elementType="u8"}slice(t,e){return this.sliceBuffer(S,t,e)}static fromTypedArray(t,e){return new S(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}S.ElementType="u8";class O extends i{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(O,t,e)}static fromTypedArray(t,e){return new O(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}O.ElementType="u16";class L extends o{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(L,t,e)}static fromTypedArray(t,e){return new L(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}L.ElementType="u16";class v extends a{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(v,t,e)}static fromTypedArray(t,e){return new v(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}v.ElementType="u16";class P extends c{constructor(t,e=0,r,n){super(Uint16Array,t,e,r,n),this.elementType="u16"}slice(t,e){return this.sliceBuffer(P,t,e)}static fromTypedArray(t,e){return new P(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}P.ElementType="u16";class C extends i{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(C,t,e)}static fromTypedArray(t,e){return new C(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}C.ElementType="u32";class Y extends o{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(Y,t,e)}static fromTypedArray(t,e){return new Y(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}Y.ElementType="u32";class F extends a{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(F,t,e)}static fromTypedArray(t,e){return new F(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}F.ElementType="u32";class R extends c{constructor(t,e=0,r,n){super(Uint32Array,t,e,r,n),this.elementType="u32"}slice(t,e){return this.sliceBuffer(R,t,e)}static fromTypedArray(t,e){return new R(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}R.ElementType="u32";class X extends i{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(X,t,e)}static fromTypedArray(t,e){return new X(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}X.ElementType="i8";class N extends o{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(N,t,e)}static fromTypedArray(t,e){return new N(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}N.ElementType="i8";class I extends a{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(I,t,e)}static fromTypedArray(t,e){return new I(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}I.ElementType="i8";class z extends c{constructor(t,e=0,r,n){super(Int8Array,t,e,r,n),this.elementType="i8"}slice(t,e){return this.sliceBuffer(z,t,e)}static fromTypedArray(t,e){return new z(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}z.ElementType="i8";class U extends i{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(U,t,e)}static fromTypedArray(t,e){return new U(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}U.ElementType="i16";class j extends o{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(j,t,e)}static fromTypedArray(t,e){return new j(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}j.ElementType="i16";class W extends a{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(W,t,e)}static fromTypedArray(t,e){return new W(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}W.ElementType="i16";class q extends c{constructor(t,e=0,r,n){super(Int16Array,t,e,r,n),this.elementType="i16"}slice(t,e){return this.sliceBuffer(q,t,e)}static fromTypedArray(t,e){return new q(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}q.ElementType="i16";class H extends i{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(H,t,e)}static fromTypedArray(t,e){return new H(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}H.ElementType="i32";class k extends o{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(k,t,e)}static fromTypedArray(t,e){return new k(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}k.ElementType="i32";class V extends a{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(V,t,e)}static fromTypedArray(t,e){return new V(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}V.ElementType="i32";class G extends c{constructor(t,e=0,r,n){super(Int32Array,t,e,r,n),this.elementType="i32"}slice(t,e){return this.sliceBuffer(G,t,e)}static fromTypedArray(t,e){return new G(t.buffer,t.byteOffset,e,t.byteOffset+t.byteLength)}}G.ElementType="i32"},84520:(t,e,r)=>{r.r(e),r.d(e,{default:()=>o});var n=r(6273),s=r(21120),i=r(28364),f=r(56233);class o{async createIndex(t,e){const r=new Array;if(!t.vertexAttributes?.position)return new s.w;const n=this._createMeshData(t),i=null!=e?await e.invoke("createIndexThread",n,{transferList:r}):this.createIndexThread(n).result;return this._createPooledRBush().fromJSON(i)}createIndexThread(t){const e=new Float64Array(t.position),r=this._createPooledRBush();return t.components?this._createIndexComponentsThread(r,e,t.components.map((t=>new Uint32Array(t)))):this._createIndexAllThread(r,e)}_createIndexAllThread(t,e){const r=new Array(e.length/9);let n=0;for(let t=0;t<e.length;t+=9)r[n++]=u(e,t,t+3,t+6);return t.load(r),{result:t.toJSON()}}_createIndexComponentsThread(t,e,r){let n=0;for(const t of r)n+=t.length/3;const s=new Array(n);let i=0;for(const t of r)for(let r=0;r<t.length;r+=3)s[i++]=u(e,3*t[r],3*t[r+1],3*t[r+2]);return t.load(s),{result:t.toJSON()}}_createMeshData(t){const e=((0,i.Hq)(t.vertexSpace)?(0,f.bA)({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((t=>!t.faces))?{position:e}:{position:e,components:t.components.map((t=>t.faces))}}_createPooledRBush(){return new s.w(9,(0,n.A)("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function u(t,e,r,n){return{minX:Math.min(t[e],t[r],t[n]),maxX:Math.max(t[e],t[r],t[n]),minY:Math.min(t[e+1],t[r+1],t[n+1]),maxY:Math.max(t[e+1],t[r+1],t[n+1]),p0:[t[e],t[e+1],t[e+2]],p1:[t[r],t[r+1],t[r+2]],p2:[t[n],t[n+1],t[n+2]]}}},40455:(t,e,r)=>{r.d(e,{Hm:()=>o,QD:()=>u,WN:()=>f});var n=r(61090),s=r(80861),i=r(28364);function f(t,e){return t.isGeographic||t.isWebMercator&&(e??!0)}function o(t,e){switch(t.type){case"georeferenced":return e.isGeographic;case"local":return e.isGeographic||e.isWebMercator}}function u(t,e,r,f){if(void 0!==f){(0,n.io)(s.A.getLogger(t),"option: geographic",{replacement:"use mesh vertexSpace and spatial reference to control how operations are performed",version:"4.29",warnOnce:!0});const o="local"===e.type;if(!(0,i.Hq)(e)||f===o)return r.isGeographic||r.isWebMercator&&f;s.A.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${f}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}return o(e,r)}},56233:(t,e,r)=>{r.d(e,{NW:()=>E,RN:()=>L,bA:()=>A,h7:()=>w,nX:()=>Y,project:()=>M,qD:()=>x,wD:()=>S});var n=r(5262),s=r(79441),i=r(25336),f=r(26110),o=r(80347),u=r(19913),a=r(82541),l=r(34561),c=r(32159),h=r(63540),y=r(88133),p=r(75644),d=r(77873),m=r(28364),B=r(72449),b=r(40455),T=r(90514);function g(t,e,r){return(0,b.WN)(e.spatialReference,r?.geographic)?S(t,e,!1,r):function(t,e,r){const n=new Float64Array(t.position.length),s=t.position,i=e.x,f=e.y,o=e.z??0,u=Y(r?r.unit:null,e.spatialReference);for(let t=0;t<s.length;t+=3)n[t]=s[t]*u+i,n[t+1]=s[t+1]*u+f,n[t+2]=s[t+2]*u+o;return{position:n,normal:t.normal,tangent:t.tangent}}(t,e,r)}function E(t,e=f.zK){const{position:r,normal:n,tangent:s}=t;return{position:(0,B.a)(new Float64Array(r.length),r,e),normal:null!=n?(0,T.qs)(n,new Float32Array(n.length),e):null,tangent:null!=s?(0,T.KM)(s,new Float32Array(s.length),e):null}}function A(t,e,r,n){const{position:s,normal:i,tangent:f}=t;if(!(0,m.Hq)(e))return{position:s,normal:i,tangent:f};const o=(0,m.MW)(e,n);return g(E(t,r?.localMatrix),o,{geographic:"local"===e.type})}function x(t,e,r){const n=(0,m.TE)(e,r),s=e.spatialReference,i=(0,m.Hq)(n);if(!i)return{vertexAttributes:g(t,e,r),vertexSpace:n,transform:null};const{position:f,normal:o,tangent:u}=t,a=(0,b.Hm)(n,s);switch(n.type){case"georeferenced":return a?{vertexAttributes:S(t,e,i,r),vertexSpace:n,transform:null}:{vertexAttributes:{position:f,normal:o,tangent:u},vertexSpace:n,transform:new d.A};case"local":return{vertexAttributes:{position:f,normal:o,tangent:u},vertexSpace:n,transform:new d.A}}}function _(t,e,r){return(0,b.WN)(e.spatialReference,r?.geographic)?L(t,e,r):O(t,e,r)}function w(t,e,r,n,s){if(!(0,m.Hq)(e))return _(t,n,s);const{spatialReference:i}=n,f=A(t,e,r,i);return n.equals((0,m.MW)(e,i))?O(f,n,s):_(f,n,s)}function M({positions:t,transform:e,vertexSpace:r,inSpatialReference:n,outSpatialReference:s,outPositions:a,localMode:d}){const m=r.origin??u.uY,b=null!=r.origin?e?.localMatrix??f.zK:f.zK;if("georeferenced"===r.type){const e=a??(0,p.jh)(t.length);if((0,i.aI)(b,f.zK)?(0,p.s)(e,t):(0,B.a)(e,t,b),!(0,o.j)(m,u.uY)){const[t,r,n]=m;for(let s=0;s<e.length;s+=3)e[s]+=t,e[s+1]+=r,e[s+2]+=n}return(0,y.projectBuffer)(e,n,0,e,s,0,e.length/3),e}let T=n;const g=(0,c.lO)(n);T=s.isWebMercator&&d||!(0,l.canProjectWithoutEngine)(n,g)?T:g,(0,h.l)(n,m,F,T),(0,i.lw)(F,F,b);const E=a??(0,p.jh)(t.length);return(0,B.a)(E,t,F),(0,y.projectBuffer)(E,T,0,E,s,0,E.length/3),E}function S(t,e,r,n){const s=e.spatialReference,i=v(e,n,F),f=new Float64Array(t.position.length),o=function(t,e,r,n){(0,B.a)(n,t,e);const s=new Float64Array(t.length);return(0,T.$5)(n,s,r)}(t.position,i,s,f),u=(0,a.Ge)(X,i),l=function(t,e,r,n,s){if(null==r)return null;const i=new Float32Array(r.length);return(0,B.b)(i,r,n),(0,T.si)(i,t,e,s,i),i}(o,f,t.normal,u,s),c=function(t,e,r,n,s){if(null==r)return null;const i=new Float32Array(r.length);(0,B.b)(i,r,n,4);for(let t=3;t<i.length;t+=4)i[t]=r[t];return(0,T.Mv)(i,t,e,s,i),i}(o,f,t.tangent,u,s);if(r){const{x:t,y:r,z:n}=e;(0,B.t)(o,o,[-t,-r,-(n??0)])}return{position:o,normal:l,tangent:c}}function O(t,e,r){const n=new Float64Array(t.position.length),s=t.position,i=e.x,f=e.y,o=e.z??0,u=Y(r?r.unit:null,e.spatialReference);for(let t=0;t<s.length;t+=3)n[t]=(s[t]-i)/u,n[t+1]=(s[t+1]-f)/u,n[t+2]=(s[t+2]-o)/u;return{position:n,normal:t.normal,tangent:t.tangent}}function L(t,e,r){const n=e.spatialReference;v(e,r,F);const s=(0,i.B8)(R,F),f=new Float64Array(t.position.length),o=function(t,e,r,n){const s=(0,T.gr)(t,e,n),i=new Float64Array(s.length);return(0,B.a)(i,s,r),i}(t.position,n,s,f),u=(0,a.Ge)(X,s);return{position:o,normal:P(t.normal,t.position,f,n,u),tangent:C(t.tangent,t.position,f,n,u)}}function v(t,e,r){(0,h.l)(t.spatialReference,[t.x,t.y,t.z??0],r,(0,c.lO)(t.spatialReference));const n=Y(e?e.unit:null,t.spatialReference);return(0,i.hs)(r,r,[n,n,n]),r}function P(t,e,r,n,s){if(null==t)return null;const i=(0,T.X4)(t,e,r,n,new Float32Array(t.length));return(0,B.b)(i,i,s),i}function C(t,e,r,n,s){if(null==t)return null;const i=(0,T.xA)(t,e,r,n,new Float32Array(t.length));return(0,B.b)(i,i,s,4),i}function Y(t,e){if(null==t)return 1;const r=(0,n.KX)(e);return 1/(0,n.oU)(r,"meters",t)}const F=(0,f.vt)(),R=(0,f.vt)(),X=(0,s.vt)()},90514:(t,e,r)=>{r.d(e,{$5:()=>g,KM:()=>A,Mv:()=>_,X4:()=>B,gr:()=>T,qs:()=>E,si:()=>b,xA:()=>x});var n=r(80861),s=r(82541),i=r(79441),f=r(26110),o=r(80347),u=r(19913),a=r(32159),l=r(63540),c=r(88133),h=r(67488),y=r(64672),p=r(40041),d=r(72449);const m=()=>n.A.getLogger("esri.geometry.support.meshUtils.normalProjection");function B(t,e,r,n,s){return M(n)?(w(O.TO_PCPF,p.xs.fromTypedArray(t),p.Xm.fromTypedArray(e),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s)),s):(m().error("Cannot convert spatial reference to PCPF"),s)}function b(t,e,r,n,s){return M(n)?(w(O.FROM_PCPF,p.xs.fromTypedArray(t),p.Xm.fromTypedArray(e),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s)),s):(m().error("Cannot convert to spatial reference from PCPF"),s)}function T(t,e,r){return(0,c.projectBuffer)(t,e,0,r,(0,a.lO)(e),0,t.length/3),r}function g(t,e,r){return(0,c.projectBuffer)(t,(0,a.lO)(r),0,e,r,0,t.length/3),e}function E(t,e,r){return(0,s.Ge)(Y,r),(0,d.b)(e,t,Y),(0,s.ut)(Y)||(0,d.n)(e,e),e}function A(t,e,r){if((0,s.Ge)(Y,r),(0,d.b)(e,t,Y,4),(0,s.ut)(Y)||(0,d.n)(e,e,4),t!==e)for(let r=3;r<t.length;r+=4)e[r]=t[r];return e}function x(t,e,r,n,s){if(!M(n))return m().error("Cannot convert spatial reference to PCPF"),s;w(O.TO_PCPF,p.xs.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),p.Xm.fromTypedArray(e),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT));for(let e=3;e<t.length;e+=4)s[e]=t[e];return s}function _(t,e,r,n,s){if(!M(n))return m().error("Cannot convert to spatial reference from PCPF"),s;w(O.FROM_PCPF,p.xs.fromTypedArray(t,16),p.Xm.fromTypedArray(e),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s,16));for(let e=3;e<t.length;e+=4)s[e]=t[e];return s}function w(t,e,r,n,i,f){if(!e)return;const u=r.count,c=(0,a.lO)(i);if(S(i))for(let r=0;r<u;r++)n.getVec(r,v),e.getVec(r,P),(0,l.l)(c,v,C,c),(0,s.z0)(Y,C),t===O.FROM_PCPF&&(0,s.mg)(Y,Y),(0,o.t)(P,P,Y),f.setVec(r,P);else for(let i=0;i<u;i++){n.getVec(i,v),e.getVec(i,P),(0,l.l)(c,v,C,c),(0,s.z0)(Y,C);const u=(0,y.jg)(r.get(i,1));let a=Math.cos(u);t===O.TO_PCPF&&(a=1/a),Y[0]*=a,Y[1]*=a,Y[2]*=a,Y[3]*=a,Y[4]*=a,Y[5]*=a,t===O.FROM_PCPF&&(0,s.mg)(Y,Y),(0,o.t)(P,P,Y),(0,o.n)(P,P),f.setVec(i,P)}return f}function M(t){return S(t)||function(t){return t.isWebMercator}(t)}function S(t){return t.isWGS84||(0,h.x1)(t)||(0,h.q8)(t)||(0,h.KQ)(t)}var O,L;(L=O||(O={}))[L.TO_PCPF=0]="TO_PCPF",L[L.FROM_PCPF=1]="FROM_PCPF";const v=(0,u.vt)(),P=(0,u.vt)(),C=(0,f.vt)(),Y=(0,i.vt)()}}]);