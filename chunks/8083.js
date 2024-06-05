"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[8083,8525],{85747:(e,t,n)=>{n.d(t,{N3:()=>r,Om:()=>o});class o{constructor(e=null,t={},n,o){this.geometry=e,this.attributes=t,this.centroid=n,this.objectId=o,this.displayId=0,this.geohashX=0,this.geohashY=0}weakClone(){const e=new o(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e.geohashX=this.geohashX,e.geohashY=this.geohashY,e}clone(){const e=this.geometry?.clone(),t=new o(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t.geohashX=this.geohashX,t.geohashY=this.geohashY,t}}function r(e){return!!e.geometry?.coords?.length}},97011:(e,t,n)=>{n.d(t,{A:()=>o});class o{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new o;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},65977:(e,t,n)=>{n.d(t,{A:()=>o});class o{constructor(e=[],t=[],n=!1){this.lengths=e??[],this.coords=t??[],this.hasIndeterminateRingOrder=n}static fromRect(e){const[t,n,r,s]=e,i=r-t,l=s-n;return new o([5],[t,n,i,0,0,l,-i,0,0,-l])}get isPoint(){return 0===this.lengths.length}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const o=this.lengths[n];for(let n=0;n<o;n++)e(this.coords[2*(n+t)],this.coords[2*(n+t)+1]);t+=o}}deltaDecode(){const e=this.clone(),{coords:t,lengths:n}=e;let o=0;for(const e of n){for(let n=1;n<e;n++)t[2*(o+n)]+=t[2*(o+n)-2],t[2*(o+n)+1]+=t[2*(o+n)-1];o+=e}return e}clone(e){if(0===this.lengths.length)return new o([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),n=this.coords.slice(0,t);return e?(e.set(n),new o(this.lengths,e,this.hasIndeterminateRingOrder)):new o(Array.from(this.lengths),Array.from(n),this.hasIndeterminateRingOrder)}}},891:(e,t,n)=>{n.d(t,{HP:()=>s,N3:()=>i,RW:()=>h,Uz:()=>a,iQ:()=>c,jy:()=>l,w9:()=>u}),n(6273),n(62088),n(44153);var o=n(46373),r=n(2532);n(66220),n(54483),n(45352),n(92801);class s{constructor(e,t,n){this.uid=e,this.geometry=t,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}}function i(e){return null!=e.geometry}class l{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function u(e,t){switch((0,o.Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let n=0;n<e.paths.length;n++)(0,o.Jf)(t,e.paths[n],!!e.hasZ);break;case"polygon":for(let n=0;n<e.rings.length;n++)(0,o.Jf)(t,e.rings[n],!!e.hasZ);break;case"multipoint":(0,o.Jf)(t,e.points,!!e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function c(e,t){switch((0,r.Ie)(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let n=0;n<e.paths.length;n++)(0,r.Jf)(t,e.paths[n]);break;case"polygon":for(let n=0;n<e.rings.length;n++)(0,r.Jf)(t,e.rings[n]);break;case"multipoint":(0,r.Jf)(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function h(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}function a(e,t,n,o){if(t?.size&&null!=n&&e)for(const r in e){if(!t.has(r))continue;const s=e[r];"string"==typeof s&&s.length>n&&(o(r),e[r]="")}}},5525:(e,t,n)=>{n.d(t,{B2:()=>N,BW:()=>L,Ch:()=>re,DF:()=>F,Di:()=>V,E2:()=>J,IE:()=>w,Nl:()=>K,Q4:()=>se,Rk:()=>le,Ux:()=>B,Ye:()=>E,ZF:()=>D,eU:()=>U,eY:()=>H,jH:()=>W,jQ:()=>oe,kz:()=>ee,oN:()=>X,q3:()=>Q,qK:()=>v,qN:()=>q,z5:()=>Y,zv:()=>S});var o=n(62991),r=n(80861),s=n(57725),i=n(46373),l=n(2532),u=n(56053),c=n(85747),h=n(97011),a=n(65977);function f(e,t){return e?t?4:3:t?3:2}const d=()=>r.A.getLogger("esri.layers.graphics.featureConversionUtils"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},m=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s},y=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2]},p=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3]},b=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3]};function I(e,t,n,o){if(e){if(n)return t&&o?b:y;if(t&&o)return p}else if(t&&o)return y;return m}function w({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function N({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function x({scale:e,translate:t},n,o){return n*e[o]+t[o]}function F(e,t,n){return e?t?n?A(e):G(e):n?k(e):M(e):null}function M(e){const t=e.coords;return{x:t[0],y:t[1]}}function T(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function G(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function Z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function k(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function P(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function A(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function j(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function z(e,t){return e&&t?j:e?Z:t?P:T}function q(e,t,n=z(null!=t.z,null!=t.m)){return n(e,t)}function v(e,t,n){if(null==e)return null;const o=f(t,n),r=[];for(let t=0;t<e.coords.length;t+=o){const n=[];for(let r=0;r<o;r++)n.push(e.coords[t+r]);r.push(n)}return t?n?{points:r,hasZ:t,hasM:n}:{points:r,hasZ:t}:n?{points:r,hasM:n}:{points:r}}function R(e,t,n=f(t.hasZ,t.hasM)){e.lengths[0]=t.points.length;const o=e.coords;let r=0;for(const e of t.points)for(let t=0;t<n;t++)o[r++]=e[t];return e}function L(e,t,n){if(!e)return null;const o=f(t,n),{coords:r,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}i.push(t)}return t?n?{paths:i,hasZ:t,hasM:n}:{paths:i,hasZ:t}:n?{paths:i,hasM:n}:{paths:i}}function O(e,t,n=f(t.hasZ,t.hasM)){const{lengths:o,coords:r}=e;let s=0;for(const e of t.paths){for(const t of e)for(let e=0;e<n;e++)r[s++]=t[e];o.push(e.length)}return e}function Y(e,t,n){if(!e)return null;const o=f(t,n),{coords:r,lengths:s}=e,i=[];let l=0;for(const e of s){const t=[];for(let n=0;n<e;n++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}i.push(t)}return t?n?{rings:i,hasZ:t,hasM:n}:{rings:i,hasZ:t}:n?{rings:i,hasM:n}:{rings:i}}function E(e,t,n=t.hasZ,o=t.hasM){return U(e,t.rings,n,o)}function U(e,t,n,o){const r=f(n,o),{lengths:s,coords:i}=e;let l=0;ue(e);for(const e of t){for(const t of e)for(let e=0;e<r;e++)i[l++]=t[e];s.push(e.length)}return e}const _=[],C=[];function J(e,t,n,o,r){_[0]=e;const[s]=V(C,_,t,n,o,r);return ce(_),ce(C),s}function V(e,t,n,r,s,i){if(ce(e),!n){for(const n of t){const t=i?n.attributes[i]:void 0;e.push(new c.Om(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return function(e,t,n,o,r){const s=z(n,o);for(const{geometry:n,attributes:o}of t){const t=null!=n?s(new a.A,n):null;e.push(new c.Om(t,o,null,r?o[r]:void 0))}return e}(e,t,r,s,i);case"esriGeometryMultipoint":return function(e,t,n,o,r){const s=f(n,o);for(const{geometry:n,attributes:o}of t){const t=null!=n?R(new a.A,n,s):null;e.push(new c.Om(t,o,null,r?o[r]:void 0))}return e}(e,t,r,s,i);case"esriGeometryPolyline":return function(e,t,n,o,r){const s=f(n,o);for(const{geometry:n,attributes:o,centroid:i}of t){const t=null!=n?O(new a.A,n,s):null,l=null!=i?q(new a.A,i):null;e.push(new c.Om(t,o,l,r?o[r]:void 0))}return e}(e,t,r,s,i);case"esriGeometryPolygon":return function(e,t,n,o,r){for(const{geometry:s,centroid:i,attributes:l}of t){const t=null!=s?E(new a.A,s,n,o):null,u=r?l[r]:void 0;null!=i?e.push(new c.Om(t,l,T(new a.A,i),u)):e.push(new c.Om(t,l,null,u))}return e}(e,t,r,s,i);default:d().error("convertToFeatureSet:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${n}'`)),ce(e)}return e}function X(e,t,n,o){C[0]=e,$(_,C,t,n,o);const r=_[0];return ce(_),ce(C),r}function B(e,t,n){if(null==e)return null;const r=new a.A;return"hasZ"in e&&null==t&&(t=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),(0,u.fT)(e)?z(null!=t?t:null!=e.z,null!=n?n:null!=e.m)(r,e):(0,u.Bi)(e)?E(r,e,t,n):(0,u.Rg)(e)?O(r,e,f(t,n)):(0,u.U9)(e)?R(r,e,f(t,n)):void d().error("convertFromGeometry:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${e}'`))}function S(e,t,n,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(t){case"esriGeometryPoint":{let e=M;return n&&r?e=A:n?e=G:r&&(e=k),e(s)}case"esriGeometryMultipoint":return v(s,n,r);case"esriGeometryPolyline":return L(s,n,r);case"esriGeometryPolygon":return Y(s,n,r);default:return d().error("convertToGeometry:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${t}'`)),null}}function $(e,t,n,r,s){if(ce(e),null==n)return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,o){let r=M;n&&o?r=A:n?r=G:o&&(r=k);for(const n of t){const{geometry:t,attributes:o}=n,s=null!=t?r(t):null;e.push({attributes:o,geometry:s})}return e}(e,t,r,s);case"esriGeometryMultipoint":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?v(r,n,o):null});return e}(e,t,r,s);case"esriGeometryPolyline":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?L(r,n,o):null});return e}(e,t,r,s);case"esriGeometryPolygon":return function(e,t,n,o){for(const{geometry:r,attributes:s,centroid:i}of t){const t=null!=r?Y(r,n,o):null;if(null!=i){const n=M(i);e.push({attributes:s,centroid:n,geometry:t})}else e.push({attributes:s,geometry:t})}return e}(e,t,r,s);default:d().error("convertToFeatureSet:unknown-geometry",new o.A(`Unable to parse unknown geometry type '${n}'`))}return e}function D(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:i,features:l,geometryType:u,exceededTransferLimit:c,uniqueIdField:h,queryGeometry:a,queryGeometryType:f}=e,d={features:$([],l,u,i,s),fields:r,geometryType:u,objectIdFieldName:t,spatialReference:n,uniqueIdField:h,queryGeometry:S(a,f,!1,!1)};return o&&(d.transform=o),c&&(d.exceededTransferLimit=c),s&&(d.hasM=s),i&&(d.hasZ=i),d}function Q(e,t){const n=new h.A,{hasM:r,hasZ:s,features:i,objectIdFieldName:l,spatialReference:u,geometryType:c,exceededTransferLimit:a,transform:f,fields:g}=e;return g&&(n.fields=g),n.geometryType=c??null,n.objectIdFieldName=l??t??null,n.spatialReference=u??null,n.objectIdFieldName?(i&&V(n.features,i,c,s,r,n.objectIdFieldName),a&&(n.exceededTransferLimit=a),r&&(n.hasM=r),s&&(n.hasZ=s),f&&(n.transform=f),n):(d().error(new o.A("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)}function H(e){const{transform:t,features:n,hasM:o,hasZ:r}=e;if(!t)return e;for(const e of n)null!=e.geometry&&re(e.geometry,e.geometry,o,r,t),null!=e.centroid&&re(e.centroid,e.centroid,o,r,t);return e.transform=null,e}function W(e,t){const{geometryType:n,features:o,hasM:r,hasZ:s}=t;if(!e)return t;for(let t=0;t<o.length;t++){const i=o[t],l=i.weakClone();l.geometry=new a.A,K(l.geometry,i.geometry,r,s,n,e),i.centroid&&(l.centroid=new a.A,K(l.centroid,i.centroid,r,s,"esriGeometryPoint",e)),o[t]=l}return t.transform=e,t}function K(e,t,n,o,r,s,i=n,l=o){if(ue(e),!t?.coords.length)return null;const u=g[r],{coords:c,lengths:h}=t,a=f(n,o),d=f(n&&i,o&&l),m=I(n,o,i,l);if(!h.length)return m(e.coords,c,0,0,w(s,c[0]),N(s,c[1])),ue(e,a,0),e;let y,p,b,x,F=0,M=0,T=M;for(const t of h){if(t<u)continue;let n=0;M=T,b=y=w(s,c[F]),x=p=N(s,c[F+1]),m(e.coords,c,M,F,b,x),n++,F+=a,M+=d;for(let o=1;o<t;o++,F+=a)b=w(s,c[F]),x=N(s,c[F+1]),b===y&&x===p||(m(e.coords,c,M,F,b-y,x-p),M+=d,n++,y=b,p=x);n>=u&&(e.lengths.push(n),T=M)}return ce(e.coords,T),e.coords.length?e:null}function ee(e,t,n,o,r,s,i=n,l=o){if(ue(e),!t?.coords.length)return null;const u=g[r],{coords:c,lengths:h}=t,a=f(n,o),d=f(n&&i,o&&l),m=I(n,o,i,l);if(!h.length)return m(e.coords,c,0,0,c[0],c[1]),ue(e,a,0),e;let y=0;const p=s*s;for(const t of h){if(t<u){y+=t*a;continue}const n=e.coords.length/d,o=y,r=y+(t-1)*a;m(e.coords,c,e.coords.length,o,c[o],c[o+1]),ne(e.coords,c,a,p,m,o,r),m(e.coords,c,e.coords.length,r,c[r],c[r+1]);const s=e.coords.length/d-n;s>=u?e.lengths.push(s):ce(e.coords,n*d),y+=t*a}return e.coords.length?e:null}function te(e,t,n,o){const r=e[t],s=e[t+1],i=e[n],l=e[n+1],u=e[o],c=e[o+1];let h=i,a=l,f=u-h,d=c-a;if(0!==f||0!==d){const e=((r-h)*f+(s-a)*d)/(f*f+d*d);e>1?(h=u,a=c):e>0&&(h+=f*e,a+=d*e)}return f=r-h,d=s-a,f*f+d*d}function ne(e,t,n,o,r,s,i){let l,u=o,c=0;for(let e=s+n;e<i;e+=n)l=te(t,e,s,i),l>u&&(c=e,u=l);u>o&&(c-s>n&&ne(e,t,n,o,r,s,c),r(e,t,e.length,c,t[c],t[c+1]),i-c>n&&ne(e,t,n,o,r,c,i))}function oe(e,t,n,o){if(!t?.coords?.length)return null;const r=f(n,o);let s=Number.POSITIVE_INFINITY,u=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,h=Number.NEGATIVE_INFINITY;if(t&&t.coords){const e=t.coords;for(let t=0;t<e.length;t+=r){const n=e[t],o=e[t+1];s=Math.min(s,n),c=Math.max(c,n),u=Math.min(u,o),h=Math.max(h,o)}}return(0,i.is)(e)?(0,i.BI)(e,s,u,c,h):(0,l.fA)(s,u,c,h,e),e}function re(e,t,n,o,r){const{coords:i,lengths:l}=t,u=f(n,o);if(!i.length)return e!==t&&ue(e),e;(0,s.Lw)(r);const{originPosition:c,scale:h,translate:a}=r,d=he;d.originPosition=c;const g=d.scale;g[0]=h[0]??1,g[1]=-(h[1]??1),g[2]=h[2]??1,g[3]=h[3]??1;const m=d.translate;if(m[0]=a[0]??0,m[1]=a[1]??0,m[2]=a[2]??0,m[3]=a[3]??0,!l.length){for(let t=0;t<u;++t)e.coords[t]=x(d,i[t],t);return e!==t&&ue(e,u,0),e}let y=0;for(let t=0;t<l.length;t++){const n=l[t];e.lengths[t]=n;for(let t=0;t<u;++t)e.coords[y+t]=x(d,i[y+t],t);let o=e.coords[y],r=e.coords[y+1];y+=u;for(let t=1;t<n;t++,y+=u){o+=i[y]*g[0],r+=i[y+1]*g[1],e.coords[y]=o,e.coords[y+1]=r;for(let t=2;t<u;++t)e.coords[y+t]=x(d,i[y+t],t)}}return e!==t&&ue(e,i.length,l.length),e}function se(e,t,n,o,r,s){if(ue(e),e.lengths.push(...t.lengths),n===r&&o===s)for(let n=0;n<t.coords.length;n++)e.coords.push(t.coords[n]);else{const i=f(n,o),l=I(n,o,r,s),u=t.coords;for(let t=0;t<u.length;t+=i)l(e.coords,u,e.coords.length,t,u[t],u[t+1])}return e}function ie(e,t,n,o){let r=0,s=e[o*t],i=e[o*(t+1)];for(let l=1;l<n;l++){const n=s+e[o*(t+l)],u=i+e[o*(t+l)+1],c=(n-s)*(u+i);s=n,i=u,r+=c}return.5*r}function le(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let e=0;e<o.length;e++){const i=o[e];s+=ie(n,r,i,t),r+=i}return Math.abs(s)}function ue(e,t=0,n=0){ce(e.lengths,n),ce(e.coords,t)}function ce(e,t=0){e.length!==t&&(e.length=t)}const he={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}}}]);