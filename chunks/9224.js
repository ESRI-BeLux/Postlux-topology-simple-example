"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[9224],{13926:(e,t,r)=>{r.d(t,{O:()=>s});class s{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(e,t){return this._outer.get(e)?.get(t)}set(e,t,r){const s=this._outer.get(e);s?s.set(t,r):this._outer.set(e,new Map([[t,r]]))}delete(e,t){const r=this._outer.get(e);r&&(r.delete(t),0===r.size&&this._outer.delete(e))}forEach(e){this._outer.forEach(((t,r)=>e(t,r)))}}},69224:(e,t,r)=>{r.r(t),r.d(t,{BufferObject:()=>s.g,FramebufferObject:()=>i.H,Program:()=>n.B,ProgramCache:()=>o.J,Renderbuffer:()=>a.l,ShaderCompiler:()=>c.Z,Texture:()=>h.g,VertexArrayObject:()=>l.Z,createContext:()=>_.q,createProgram:()=>f.r,glslifyDefineMap:()=>u.I});var s=r(89325),i=r(49214),n=r(19980),o=r(25762),a=r(53386),c=r(27824),h=r(89958),l=r(40866),u=r(70645),f=r(16284),_=r(46480)},25762:(e,t,r)=>{r.d(t,{J:()=>n});var s=r(13926),i=r(19980);class n{constructor(e){this._rctx=e,this._store=new s.O}dispose(){this._store.forEach((e=>e.forEach((e=>e.dispose())))),this._store.clear()}acquire(e,t,r,s){const n=this._store.get(e,t);if(null!=n)return n.ref(),n;const o=new i.B(this._rctx,e,t,r,s);return o.ref(),this._store.set(e,t,o),o}get test(){let e=0;return this._store.forEach((t=>t.forEach((t=>e+=t.hasGLName?2:1)))),{cachedWebGLProgramObjects:e}}}},16284:(e,t,r)=>{r.d(t,{r:()=>i});var s=r(19980);function i(e,t,r=""){return new s.B(e,r+t.shaders.vertexShader,r+t.shaders.fragmentShader,t.attributes)}},27824:(e,t,r)=>{r.d(t,{Z:()=>s});class s{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,t=new Map){if(t.has(e))return t.get(e);const r=this._read(e);if(!r)throw new Error(`cannot find shader file ${e}`);const s=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let i=s.exec(r);const n=[];for(;null!=i;)n.push({path:i[1],start:i.index,length:i[0].length}),i=s.exec(r);let o=0,a="";return n.forEach((e=>{a+=r.slice(o,e.start),a+=t.has(e.path)?"":this._resolve(e.path,t),o=e.start+e.length})),a+=r.slice(o),t.set(e,a),a}_read(e){return this._readFile(e)}}},40866:(e,t,r)=>{r.d(t,{Z:()=>h});var s=r(80861),i=r(57725),n=r(62088),o=r(68716),a=r(73360);const c=()=>s.A.getLogger("esri.views.webgl.VertexArrayObject");let h=class{constructor(e,t,r,s,i=null){this._context=e,this._locations=t,this._layout=r,this._buffers=s,this._indexBuffer=i,this._glName=null,this._initialized=!1}get glName(){return this._glName}get context(){return this._context}get vertexBuffers(){return this._buffers}get indexBuffer(){return this._indexBuffer}get byteSize(){return Object.keys(this._buffers).reduce(((e,t)=>e+this._buffers[t].usedMemory),null!=this._indexBuffer?this._indexBuffer.usedMemory:0)}get layout(){return this._layout}get locations(){return this._locations}get usedMemory(){return this.byteSize+(Object.keys(this._buffers).length+(this._indexBuffer?1:0))*n.zQ}dispose(){if(this._context){this._context.getBoundVAO()===this&&this._context.bindVAO(null);for(const e in this._buffers)this._buffers[e]?.dispose(),delete this._buffers[e];this._indexBuffer=(0,i.WD)(this._indexBuffer),this.disposeVAOOnly()}else(this._glName||Object.getOwnPropertyNames(this._buffers).length>0)&&c().warn("Leaked WebGL VAO")}disposeVAOOnly(){this._glName&&(this._context.gl.deleteVertexArray(this._glName),this._glName=null,this._context.instanceCounter.decrement(o.vt.VertexArrayObject,this)),this._context=null}initialize(){if(this._initialized)return;const{gl:e}=this._context,t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t,this._context.instanceCounter.increment(o.vt.VertexArrayObject,this),this._initialized=!0}bind(){this.initialize(),this._context.gl.bindVertexArray(this.glName)}_bindLayout(){const{_buffers:e,_layout:t,_indexBuffer:r}=this;e||c().error("Vertex buffer dictionary is empty!");const s=this._context.gl;for(const r in e){const s=e[r];s||c().error("Vertex buffer is uninitialized!");const i=t[r];i||c().error("Vertex element descriptor is empty!"),(0,a.yu)(this._context,this._locations,s,i)}null!=r&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,r.glName)}unbind(){this.initialize(),this._context.gl.bindVertexArray(null)}}},70645:(e,t,r)=>{function s(e){const{options:t,value:r}=e;return"number"==typeof t[r]}function i(e){let t="";for(const r in e){const i=e[r];if("boolean"==typeof i)i&&(t+=`#define ${r}\n`);else if("number"==typeof i)t+=`#define ${r} ${i.toFixed()}\n`;else if("object"==typeof i)if(s(i)){const{value:e,options:s,namespace:n}=i,o=n?`${n}_`:"";for(const e in s)t+=`#define ${o}${e} ${s[e].toFixed()}\n`;t+=`#define ${r} ${o}${e}\n`}else{const e=i.options;let s=0;for(const r in e)t+=`#define ${e[r]} ${(s++).toFixed()}\n`;t+=`#define ${r} ${e[i.value]}\n`}}return t}r.d(t,{I:()=>i})}}]);