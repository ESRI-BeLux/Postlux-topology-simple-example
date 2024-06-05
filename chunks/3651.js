"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[3651],{68435:(t,e,_)=>{_.d(e,{AK:()=>T,Wz:()=>A,oe:()=>n});var E=_(62088);function n(t,e=!1){return t<=E.y9?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function A(t){return((0,E.cy)(t)?t.length:t.byteLength/8)<=E.y9?Array.from(t):new Float32Array(t)}function T(t,e,_){return Array.isArray(t)?t.slice(e,e+_):t.subarray(e,e+_)}},38456:(t,e,_)=>{function E(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}_.d(e,{GJ:()=>E})},95431:(t,e,_)=>{_.d(e,{b:()=>A});var E=_(4506),n=_(51831);function A(t,e,_){const A=Array.isArray(t),i=A?t.length/e:t.byteLength/(4*e),s=A?t:new Uint32Array(t,0,i*e),o=_?.minReduction??0,S=_?.originalIndices||null,I=S?S.length:0,O=_?.componentOffsets||null;let C=0;if(O)for(let t=0;t<O.length-1;t++){const e=O[t+1]-O[t];e>C&&(C=e)}else C=i;const c=Math.floor(1.1*C)+1;(null==N||N.length<2*c)&&(N=new Uint32Array((0,E.cU)(2*c)));for(let t=0;t<2*c;t++)N[t]=0;let f=0;const a=!!O&&!!S,u=a?I:i;let L=(0,n.my)(i);const M=new Uint32Array(I),D=1.96;let l=0!==o?Math.ceil(4*D*D/(o*o)*o*(1-o)):u,P=1,U=O?O[1]:u;for(let t=0;t<u;t++){if(t===l){const e=1-f/t;if(e+D*Math.sqrt(e*(1-e)/t)<o)return null;l*=2}if(t===U){for(let t=0;t<2*c;t++)N[t]=0;if(S)for(let t=O[P-1];t<O[P];t++)M[t]=L[S[t]];U=O[++P]}const _=a?S[t]:t,E=_*e,n=R(s,E,e);let A=n%c,r=f;for(;0!==N[2*A+1];){if(N[2*A]===n){const t=N[2*A+1]-1;if(T(s,E,t*e,e)){r=L[t];break}}A++,A>=c&&(A-=c)}r===f&&(N[2*A]=n,N[2*A+1]=_+1,f++),L[_]=r}if(0!==o&&1-f/i<o)return null;if(a){for(let t=O[P-1];t<M.length;t++)M[t]=L[S[t]];L=(0,n.Dg)(M)}const G=A?new Array(f):new Uint32Array(f*e);f=0;for(let t=0;t<u;t++)L[t]===f&&(r(s,(a?S[t]:t)*e,G,f*e,e),f++);if(S&&!a){const t=new Uint32Array(I);for(let e=0;e<t.length;e++)t[e]=L[S[e]];L=(0,n.Dg)(t)}return{buffer:Array.isArray(G)?G:G.buffer,indices:L,uniqueCount:f}}function T(t,e,_,E){for(let n=0;n<E;n++)if(t[e+n]!==t[_+n])return!1;return!0}function r(t,e,_,E,n){for(let A=0;A<n;A++)_[E+A]=t[e+A]}function R(t,e,_){let E=0;for(let n=0;n<_;n++)E=t[e+n]+E|0,E=E+(E<<11)+(E>>>2)|0;return E>>>0}let N=null},7724:(t,e,_)=>{_.d(e,{BP:()=>R,l5:()=>N,q3:()=>r});var E=_(40041),n=_(38456),A=_(26421);class T{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const e of t.fields.keys()){const _=t.fields.get(e);this[e]=new _.constructor(this.buffer,_.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const _=this[t];return _&&_.elementCount===e.ElementCount&&_.elementType===e.ElementType?_:null}slice(t,e){return new T(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e=0,_=0,E=t.count){const n=this.stride;if(n%4==0){const A=new Uint32Array(t.buffer,e*n,E*n/4);new Uint32Array(this.buffer,_*n,E*n/4).set(A)}else{const A=new Uint8Array(t.buffer,e*n,E*n);new Uint8Array(this.buffer,_*n,E*n).set(A)}return this}get usedMemory(){return this.byteLength}dispose(){}}class r{constructor(t=null){this._stride=0,this._lastAligned=0,this._fields=new Map,t&&(this._stride=t.stride,t.fields.forEach((t=>this._fields.set(t[0],{...t[1],constructor:o(t[1].constructor)}))))}vec2f(t,e){return this._appendField(t,E.gH,e),this}vec2f64(t,e){return this._appendField(t,E.si,e),this}vec3f(t,e){return this._appendField(t,E.xs,e),this}vec3f64(t,e){return this._appendField(t,E.Xm,e),this}vec4f(t,e){return this._appendField(t,E.Eq,e),this}vec4f64(t,e){return this._appendField(t,E.Aj,e),this}mat3f(t,e){return this._appendField(t,E.jZ,e),this}mat3f64(t,e){return this._appendField(t,E.j0,e),this}mat4f(t,e){return this._appendField(t,E.Sx,e),this}mat4f64(t,e){return this._appendField(t,E.E$,e),this}vec4u8(t,e){return this._appendField(t,E.XP,e),this}f32(t,e){return this._appendField(t,E.Y$,e),this}f64(t,e){return this._appendField(t,E.qB,e),this}u8(t,e){return this._appendField(t,E.SL,e),this}u16(t,e){return this._appendField(t,E.h,e),this}i8(t,e){return this._appendField(t,E.bf,e),this}vec2i8(t,e){return this._appendField(t,E.D6,e),this}vec2i16(t,e){return this._appendField(t,E.mJ,e),this}vec2u8(t,e){return this._appendField(t,E.LC,e),this}vec4u16(t,e){return this._appendField(t,E.Uz,e),this}u32(t,e){return this._appendField(t,E.P,e),this}_appendField(t,e,_){if(this._fields.has(t))return void(0,A.vA)(!1,`${t} already added to vertex buffer layout`);const E=e.ElementCount*(0,n.GJ)(e.ElementType),T=this._stride;this._stride+=E,this._fields.set(t,{size:E,constructor:e,offset:T,optional:_})}createBuffer(t){return new T(this,t)}createView(t){return new T(this,t)}clone(){const t=new r;return t._stride=this._stride,t._fields=new Map,this._fields.forEach(((e,_)=>t._fields.set(_,e))),t.BufferType=this.BufferType,t}get stride(){if(this._lastAligned!==this._fields.size){let t=1;this._fields.forEach((e=>t=Math.max(t,(0,n.GJ)(e.constructor.ElementType)))),this._stride=Math.floor((this._stride+t-1)/t)*t,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function R(){return new r}class N{constructor(t){this.fields=new Array,t.fields.forEach(((t,e)=>{const _={...t,constructor:s(t.constructor)};this.fields.push([e,_])})),this.stride=t.stride}}const i=[E.Y$,E.gH,E.xs,E.Eq,E.jZ,E.Sx,E.qB,E.si,E.Xm,E.Aj,E.j0,E.E$,E.SL,E.LC,E.eI,E.XP,E.h,E.Yi,E.nS,E.Uz,E.P,E.An,E.H$,E.ml,E.bf,E.D6,E.m8,E.TX,E.Qt,E.mJ,E.Vp,E.E7,E.My,E.UL,E.zD,E.Y4];function s(t){return`${t.ElementType}_${t.ElementCount}`}function o(t){return S.get(t)}const S=new Map;i.forEach((t=>S.set(s(t),t)))},29386:(t,e,_)=>{_.d(e,{U:()=>A});var E=_(68716),n=_(67277);function A(t,e=0){const _=t.stride;return Array.from(t.fields.keys()).map((E=>{const A=t.fields.get(E),r=A.constructor.ElementCount,R=T(A.constructor.ElementType),N=A.offset,i=!(!A.optional||!A.optional.glNormalized);return new n._(E,r,R,N,_,i,e)}))}function T(t){const e=r[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const r={u8:E.pe.UNSIGNED_BYTE,u16:E.pe.UNSIGNED_SHORT,u32:E.pe.UNSIGNED_INT,i8:E.pe.BYTE,i16:E.pe.SHORT,i32:E.pe.INT,f32:E.pe.FLOAT}},70789:(t,e,_)=>{_.d(e,{aT:()=>n,fA:()=>A});var E=_(4506);function n(t,e,_,E,n,A=2){const r=1/(Math.abs(_)+Math.abs(E)+Math.abs(n)),R=_*r,N=E*r,i=n<=0?(R>=0?1:-1)*(1-Math.abs(N)):R,s=n<=0?(N>=0?1:-1)*(1-Math.abs(R)):N,o=e*A;t[o]=T(i),t[o+1]=T(s)}function A(t){const e=t.length/3,_=new Int16Array(2*e);let E=0;for(let A=0;A<e;++A)n(_,A,t[E++],t[E++],t[E++]);return _}function T(t){return(0,E.qE)(Math.round(32767*t),-32767,32767)}_(80347),_(19913),_(68435)},3628:(t,e,_)=>{_.d(e,{I$:()=>T,In:()=>N,gr:()=>R});var E=_(29386),n=_(7724),A=_(33763);const T=(0,n.BP)().vec3f(A.r.POSITION).u16(A.r.COMPONENTINDEX),r=(0,n.BP)().vec2u8(A.r.SIDENESS),R=((0,E.U)(r),(0,n.BP)().vec3f(A.r.POSITION0).vec3f(A.r.POSITION1).vec2i16(A.r.NORMALCOMPRESSED).u16(A.r.COMPONENTINDEX).u8(A.r.VARIANTOFFSET,{glNormalized:!0}).u8(A.r.VARIANTSTROKE).u8(A.r.VARIANTEXTENSION,{glNormalized:!0})),N=(0,n.BP)().vec3f(A.r.POSITION0).vec3f(A.r.POSITION1).vec2i16(A.r.NORMALCOMPRESSED).vec2i16(A.r.NORMAL2COMPRESSED).u16(A.r.COMPONENTINDEX).u8(A.r.VARIANTOFFSET,{glNormalized:!0}).u8(A.r.VARIANTSTROKE).u8(A.r.VARIANTEXTENSION,{glNormalized:!0});new Map([[A.r.POSITION0,0],[A.r.POSITION1,1],[A.r.COMPONENTINDEX,2],[A.r.VARIANTOFFSET,3],[A.r.VARIANTSTROKE,4],[A.r.VARIANTEXTENSION,5],[A.r.NORMALCOMPRESSED,6],[A.r.NORMAL2COMPRESSED,7],[A.r.SIDENESS,8]])},73928:(t,e,_)=>{_.d(e,{K:()=>i});var E=_(3223),n=_(4506),A=_(80347),T=_(19913);const r=-1;var R,N;function i(t,e,_,T=c){const R=t.vertices.position,N=t.vertices.componentIndex,i=(0,n.kU)(T.anglePlanar),C=(0,n.kU)(T.angleSignificantEdge),f=Math.cos(C),a=Math.cos(i),u=O.edge,L=u.position0,M=u.position1,D=u.faceNormal0,l=u.faceNormal1,P=I(t),U=function(t){const e=t.faces.length/3,_=t.faces,E=t.neighbors;let n=0;for(let t=0;t<e;t++){const e=E[3*t],A=E[3*t+1],T=E[3*t+2],R=_[3*t],N=_[3*t+1],i=_[3*t+2];n+=e===r||R<N?1:0,n+=A===r||N<i?1:0,n+=T===r||i<R?1:0}const A=new Int32Array(4*n);let T=0;for(let t=0;t<e;t++){const e=E[3*t],n=E[3*t+1],R=E[3*t+2],N=_[3*t],i=_[3*t+1],s=_[3*t+2];(e===r||N<i)&&(A[T++]=N,A[T++]=i,A[T++]=t,A[T++]=e),(n===r||i<s)&&(A[T++]=i,A[T++]=s,A[T++]=t,A[T++]=n),(R===r||s<N)&&(A[T++]=s,A[T++]=N,A[T++]=t,A[T++]=R)}return A}(t),G=U.length/4,B=e.allocate(G);let F=0;const h=G,d=_.allocate(h);let p=0,H=0,g=0;const m=(0,E.y1)(0,G),y=new Float32Array(G);y.forEach(((t,e,_)=>{R.getVec(U[4*e],L),R.getVec(U[4*e+1],M),_[e]=(0,A.q)(L,M)})),m.sort(((t,e)=>y[e]-y[t]));const V=new Array,v=new Array;for(let t=0;t<G;t++){const E=m[t],n=y[E],T=U[4*E],I=U[4*E+1],O=U[4*E+2],C=U[4*E+3],c=C===r;if(R.getVec(T,L),R.getVec(I,M),c)(0,A.s)(D,P[3*O],P[3*O+1],P[3*O+2]),(0,A.c)(l,D),u.componentIndex=N.get(T),u.cosAngle=(0,A.k)(D,l);else{if((0,A.s)(D,P[3*O],P[3*O+1],P[3*O+2]),(0,A.s)(l,P[3*C],P[3*C+1],P[3*C+2]),u.componentIndex=N.get(T),u.cosAngle=(0,A.k)(D,l),o(u,a))continue;u.cosAngle<-.9999&&(0,A.c)(l,D)}H+=n,g++,c||s(u,f)?(e.write(B,F++,u),V.push(n)):S(u,i)&&(_.write(d,p++,u),v.push(n))}const w=new Float32Array(V.reverse()),X=new Float32Array(v.reverse());return{regular:{instancesData:e.trim(B,F),lodInfo:{lengths:w}},silhouette:{instancesData:_.trim(d,p),lodInfo:{lengths:X}},averageEdgeLength:H/g}}function s(t,e){return t.cosAngle<e}function o(t,e){return t.cosAngle>e}function S(t,e){const _=(0,n.XM)(t.cosAngle),E=O.fwd,T=O.ortho;return(0,A.E)(E,t.position1,t.position0),_*((0,A.k)((0,A.b)(T,t.faceNormal0,t.faceNormal1),E)>0?-1:1)>e}function I(t){const e=t.faces.length/3,_=t.vertices.position,E=t.faces,n=C.v0,T=C.v1,r=C.v2,R=new Float32Array(3*e);for(let t=0;t<e;t++){const e=E[3*t],N=E[3*t+1],i=E[3*t+2];_.getVec(e,n),_.getVec(N,T),_.getVec(i,r),(0,A.f)(T,T,n),(0,A.f)(r,r,n),(0,A.b)(n,T,r),(0,A.n)(n,n),R[3*t]=n[0],R[3*t+1]=n[1],R[3*t+2]=n[2]}return R}(N=R||(R={}))[N.SOLID=0]="SOLID",N[N.SKETCH=1]="SKETCH";const O={edge:{position0:(0,T.vt)(),position1:(0,T.vt)(),faceNormal0:(0,T.vt)(),faceNormal1:(0,T.vt)(),componentIndex:0,cosAngle:0},ortho:(0,T.vt)(),fwd:(0,T.vt)()},C={v0:(0,T.vt)(),v1:(0,T.vt)(),v2:(0,T.vt)()},c={anglePlanar:4,angleSignificantEdge:35}},33651:(t,e,_)=>{_.d(e,{o6:()=>U,HY:()=>p,hx:()=>G,Jb:()=>d});var E=_(95431);function n(t,e,_){const E=e/3,n=new Uint32Array(_+1),A=new Uint32Array(_+1),T=(t,e)=>{t<e?n[t+1]++:A[e+1]++};for(let e=0;e<E;e++){const _=t[3*e],E=t[3*e+1],n=t[3*e+2];T(_,E),T(E,n),T(n,_)}let r=0,R=0;for(let t=0;t<_;t++){const e=n[t+1],_=A[t+1];n[t+1]=r,A[t+1]=R,r+=e,R+=_}const N=new Uint32Array(6*E),i=n[_],s=(t,e,_)=>{if(t<e){const E=n[t+1]++;N[2*E]=e,N[2*E+1]=_}else{const E=A[e+1]++;N[2*i+2*E]=t,N[2*i+2*E+1]=_}};for(let e=0;e<E;e++){const _=t[3*e],E=t[3*e+1],n=t[3*e+2];s(_,E,e),s(E,n,e),s(n,_,e)}const o=(t,e)=>{const _=2*t,E=e-t;for(let t=1;t<E;t++){const e=N[_+2*t],E=N[_+2*t+1];let n=t-1;for(;n>=0&&N[_+2*n]>e;n--)N[_+2*n+2]=N[_+2*n],N[_+2*n+3]=N[_+2*n+1];N[_+2*n+2]=e,N[_+2*n+3]=E}};for(let t=0;t<_;t++)o(n[t],n[t+1]),o(i+A[t],i+A[t+1]);const S=new Int32Array(3*E),I=(e,_)=>e===t[3*_]?0:e===t[3*_+1]?1:e===t[3*_+2]?2:-1,O=(t,e)=>{const _=I(t,e);S[3*e+_]=-1},C=(t,e,_,E)=>{const n=I(t,e);S[3*e+n]=E;const A=I(_,E);S[3*E+A]=e};for(let t=0;t<_;t++){let e=n[t];const _=n[t+1];let E=A[t];const T=A[t+1];for(;e<_&&E<T;){const _=N[2*e],n=N[2*i+2*E];_===n?(C(t,N[2*e+1],n,N[2*i+2*E+1]),e++,E++):_<n?(O(t,N[2*e+1]),e++):(O(n,N[2*i+2*E+1]),E++)}for(;e<_;)O(t,N[2*e+1]),e++;for(;E<T;)O(N[2*i+2*E],N[2*i+2*E+1]),E++}return S}var A=_(7724),T=_(33763),r=_(3628),R=_(67498),N=_(80347),i=_(19913),s=_(29386),o=_(70789);class S{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?f:c}write(t,e,_){const E=this._edgeHashFunction(_);l.seed=E;const n=l.getIntRange(0,255),A=l.getIntRange(0,this.settings.variants-1),T=l.getFloat(),r=255*(.5*function(t,e){const _=t<0?-1:1;return Math.abs(t)**1.2*_}(-(1-Math.min(T/.7,1))+Math.max(0,T-.7)/(1-.7))+.5);t.position0.setVec(e,_.position0),t.position1.setVec(e,_.position1),t.componentIndex.set(e,_.componentIndex),t.variantOffset.set(e,n),t.variantStroke.set(e,A),t.variantExtension.set(e,r)}trim(t,e){return t.slice(0,e)}}const I=new Float32Array(6),O=new Uint32Array(I.buffer),C=new Uint32Array(1);function c(t){const e=I;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],C[0]=5381;for(let t=0;t<O.length;t++)C[0]=31*C[0]+O[t];return C[0]}function f(t){const e=I;e[0]=u(t.position0[0]),e[1]=u(t.position0[1]),e[2]=u(t.position0[2]),e[3]=u(t.position1[0]),e[4]=u(t.position1[1]),e[5]=u(t.position1[2]),C[0]=5381;for(let t=0;t<O.length;t++)C[0]=31*C[0]+O[t];return C[0]}const a=1e4;function u(t){return Math.round(t*a)/a}class L{constructor(){this._commonWriter=new S}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return r.gr.createBuffer(t)}write(t,e,_){this._commonWriter.write(t,e,_),(0,N.g)(D,_.faceNormal0,_.faceNormal1),(0,N.n)(D,D);const{typedBuffer:E,typedBufferStride:n}=t.normalCompressed;(0,o.aT)(E,e,D[0],D[1],D[2],n)}trim(t,e){return this._commonWriter.trim(t,e)}}L.Layout=r.gr,L.glLayout=(0,s.U)(r.gr,1);class M{constructor(){this._commonWriter=new S}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return r.In.createBuffer(t)}write(t,e,_){this._commonWriter.write(t,e,_);{const{typedBuffer:E,typedBufferStride:n}=t.normalCompressed;(0,o.aT)(E,e,_.faceNormal0[0],_.faceNormal0[1],_.faceNormal0[2],n)}{const{typedBuffer:E,typedBufferStride:n}=t.normal2Compressed;(0,o.aT)(E,e,_.faceNormal1[0],_.faceNormal1[1],_.faceNormal1[2],n)}}trim(t,e){return this._commonWriter.trim(t,e)}}M.Layout=r.In,M.glLayout=(0,s.U)(r.In,1);const D=(0,i.vt)(),l=new R.A;var P=_(73928);function U(t){const e=G(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return F.updateSettings(t.writerSettings),h.updateSettings(t.writerSettings),(0,P.K)(e,F,h)}function G(t,e,_,A){if(e){const e=n(_,A,t.count);return new B(_,A,e,t)}const T=(0,E.b)(t.buffer,t.stride/4,{originalIndices:_,originalIndicesLength:A}),R=n(T.indices,A,T.uniqueCount);return{faces:T.indices,facesLength:T.indices.length,neighbors:R,vertices:r.I$.createView(T.buffer)}}class B{constructor(t,e,_,E){this.faces=t,this.facesLength=e,this.neighbors=_,this.vertices=E}}const F=new L,h=new M,d=(0,A.BP)().vec3f(T.r.POSITION0).vec3f(T.r.POSITION1),p=(0,A.BP)().vec3f(T.r.POSITION0).vec3f(T.r.POSITION1).u16(T.r.COMPONENTINDEX)},67277:(t,e,_)=>{_.d(e,{_:()=>E});class E{constructor(t,e,_,E,n,A=!1,T=0){this.name=t,this.count=e,this.type=_,this.offset=E,this.stride=n,this.normalized=A,this.divisor=T}}},68716:(t,e,_)=>{var E,n,A,T,r,R,N,i,s,o,S,I,O,C,c,f,a,u,L,M;_.d(e,{Ab:()=>C,Ac:()=>N,Ap:()=>O,CQ:()=>B,Cj:()=>S,Co:()=>L,H0:()=>c,Hr:()=>U,MT:()=>s,NZ:()=>r,Nm:()=>P,R:()=>M,Tb:()=>T,WR:()=>n,Y7:()=>R,_U:()=>u,dn:()=>A,eA:()=>o,hn:()=>E,ld:()=>f,nI:()=>G,pF:()=>I,pe:()=>i,sS:()=>p,tx:()=>H,vt:()=>l,xM:()=>D,xV:()=>F,yQ:()=>a}),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(n||(n={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(A||(A={})),function(t){t[t.ADD=32774]="ADD",t[t.MIN=32775]="MIN",t[t.MAX=32776]="MAX",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",t[t.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(r||(r={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(R||(R={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(N||(N={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(i||(i={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(s||(s={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(o||(o={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(S||(S={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(I||(I={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(C||(C={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(c||(c={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(f||(f={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(a||(a={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(u||(u={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(L||(L={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(M||(M={}));const D=33984;var l,P,U;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.TransformFeedback=7]="TransformFeedback",t[t.Sync=8]="Sync",t[t.UNCOUNTED=9]="UNCOUNTED",t[t.LinesOfCode=9]="LinesOfCode",t[t.Uniform=10]="Uniform",t[t.COUNT=11]="COUNT"}(l||(l={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(P||(P={})),function(t){t[t.NONE=0]="NONE",t[t.BACK=1029]="BACK"}(U||(U={}));const G=33306;var B,F,h,d,p,H,g;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(B||(B={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(F||(F={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(h||(h={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(d||(d={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(p||(p={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(g||(g={}))}}]);