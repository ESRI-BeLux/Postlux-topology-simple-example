"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[1903],{16504:(e,t,n)=>{n.d(t,{MA:()=>d,m0:()=>h,wH:()=>w});var r=n(62991),o=n(15565),i=n(80861),c=n(70564),s=n(33763);const u=()=>i.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function a(e,t,n){let o="",i=0;for(;i<n;){const c=e[t+i];if(c<128)o+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const s=(31&c)<<6|63&e[t+i+1];o+=String.fromCharCode(s),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(15&c)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(s),i+=3}else{if(!(c>=240&&c<248))throw new r.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new r.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const s=(7&c)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(s>=65536){const e=55296+(s-65536>>10),t=56320+(1023&s);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(s);i+=4}}}return o}function l(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],c=i.valueType||i.type,s=A[c];n.fields[i.property]=s(e,r),r+=b[c].BYTES_PER_ELEMENT}return n.byteCount=r,n}function f(e,t,n){const o=[];let i,c,s=0;for(c=0;c<e;c+=1){if(i=t[c],i>0){if(o.push(a(n,s,i-1)),0!==n[s+i-1])throw new r.A("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function d(e,t){return new(0,b[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function y(e,t,n){const i=null!=t.header?l(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let e=0;e<t.ordering.length;e++){const n=t.ordering[e],u=(0,o.o8)(t[n]);if(u.count=i.fields.count??0,"String"===u.valueType){if(u.byteOffset=s,u.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==u.encoding)throw new r.A("unsupported-encoding","Unsupported String encoding.",{encoding:u.encoding});if(u.timeEncoding&&"ECMA_ISO8601"!==u.timeEncoding)throw new r.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:u.timeEncoding})}else{if(!C(u.valueType))throw new r.A("unsupported-value-type","Unsupported binary valueType",{valueType:u.valueType});{const e=m(u.valueType);s+=s%e!=0?e-s%e:0,u.byteOffset=s,u.byteCount=e*u.valuesPerElement*u.count}}s+=u.byteCount??0,c.entries[n]=u}return c.byteCount=s-c.byteOffset,c}function g(e,t,n){if(t!==e&&u().error(`Invalid ${n} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new r.A("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function w(e,t){const n=l(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const n={...t.vertexAttributes[e],byteOffset:r,count:c},i=p[e]||"_"+e;o.vertexAttributes[i]=n,r+=m(n.valueType)*n.valuesPerElement*c}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:s};o.faces[e]=n,r+=m(n.valueType)*n.valuesPerElement*s}}const u=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&u){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:u};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:m(n.valueType))*n.valuesPerElement*u}}return g(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const p={position:s.r.POSITION,normal:s.r.NORMAL,color:s.r.COLOR,uv0:s.r.UV0,region:s.r.UVREGION};function h(e,t,n){if("lepcc-rgb"===e.encoding)return(0,c.mb)(t);if("lepcc-intensity"===e.encoding)return(0,c.Ax)(t);if(null!=e.encoding&&""!==e.encoding)throw new r.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(u().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(u().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const o=y(t,e,n);g(o.byteOffset+o.byteCount,t.byteLength,"attribute");const i=o.entries.attributeValues||o.entries.objectIds;if(i){if("String"===i.valueType){const e=o.entries.attributeByteCounts,n=d(t,e),r=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,n){return f(e,t,n).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(e.count,n,r):f(e.count,n,r)}return d(t,i)}throw new r.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const b={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function C(e){return b.hasOwnProperty(e)}function m(e){return C(e)?b[e].BYTES_PER_ELEMENT:0}},51903:(e,t,n)=>{n.d(t,{Q7:()=>h,s1:()=>y}),n(3313);var r=n(38116),o=(n(3223),n(62991),n(6273),n(62088)),i=(n(25336),n(26110)),c=(n(80347),n(19913)),s=(n(34561),n(32159),n(42722),n(2532)),u=(n(69891),n(10591),n(16504));n(34670),n(63540);var a,l,f=n(118),d=(n(96153),n(45506));async function y(e,t,n,o,i,c,s,a){const l=[];for(const r of t)if(r&&i.includes(r.name)){const t=`${e}/nodes/${n}/attributes/${r.key}/0`;l.push({url:t,storageInfo:r})}const f=await Promise.allSettled(l.map((e=>(0,r.A)(e.url,{responseType:"array-buffer",query:{...s,token:c},signal:a?.signal}).then((t=>(0,u.m0)(e.storageInfo,t.data)))))),d=[];for(const e of o){const t={};for(let n=0;n<f.length;n++){const r=f[n];if("fulfilled"===r.status){const o=r.value;t[l[n].storageInfo.name]=p(o,e)}}d.push(t)}return d}n(44153),(0,s.vt)(),(l=a||(a={}))[l.OUTSIDE=0]="OUTSIDE",l[l.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",l[l.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",l[l.INSIDE=3]="INSIDE";const g=-32768,w=-(2**31);function p(e,t){if(!e)return null;const n=e[t];return(0,o.IY)(e)?n===g?null:n:(0,o._G)(e)?n===w?null:n:n!=n?null:n}function h(e){null!=e&&(e[3]=-1)}(0,f.CC)({color:[0,0,0,0],opacity:0}),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,c.vt)(),(0,s.vt)(),(0,s.vt)(),new d.ab,(0,c.vt)(),new Array(72),(0,i.vt)()},70564:(e,t,n)=>{n.d(t,{Ax:()=>h,Me:()=>a,mb:()=>g});var r=n(62991);const o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,o),checksum:t.getUint32(n+i.checksumOffset,o)}}const s={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function u(e,t){return{sizeLo:e.getUint32(t+s.sizeLo,o),sizeHi:e.getUint32(t+s.sizeHi,o),minX:e.getFloat64(t+s.minX,o),minY:e.getFloat64(t+s.minY,o),minZ:e.getFloat64(t+s.minZ,o),maxX:e.getFloat64(t+s.maxX,o),maxY:e.getFloat64(t+s.maxY,o),maxZ:e.getFloat64(t+s.maxZ,o),errorX:e.getFloat64(t+s.errorX,o),errorY:e.getFloat64(t+s.errorY,o),errorZ:e.getFloat64(t+s.errorZ,o),count:e.getUint32(t+s.count,o),reserved:e.getUint32(t+s.reserved,o)}}function a(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:a}=c(e,t,n);if(n+=i.byteCount,"LEPCC     "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(a>1)throw new r.A("lepcc-decode-error","Unknown version");const f=u(t,n);if(n+=s.byteCount,f.sizeHi*2**32+f.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const d=new Float64Array(3*f.count),y=[],g=[],w=[],p=[];if(n=l(e,n,y),n=l(e,n,g),n=l(e,n,w),n=l(e,n,p),n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad length");let h=0,b=0;for(let e=0;e<y.length;e++){b+=y[e];let t=0;for(let n=0;n<g[e];n++){t+=w[h];const e=p[h];d[3*h]=Math.min(f.maxX,f.minX+2*f.errorX*t),d[3*h+1]=Math.min(f.maxY,f.minY+2*f.errorY*b),d[3*h+2]=Math.min(f.maxZ,f.minZ+2*f.errorZ*e),h++}}return{errorX:f.errorX,errorY:f.errorY,errorZ:f.errorZ,result:d}}function l(e,t,n){const r=[];t=f(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=f(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function f(e,t,n){const i=new DataView(e,t),c=i.getUint8(0),s=31&c,u=!!(32&c),a=(192&c)>>6;let l=0;if(0===a)l=i.getUint32(1,o),t+=5;else if(1===a)l=i.getUint16(1,o),t+=3;else{if(2!==a)throw new r.A("lepcc-decode-error","Bad count type");l=i.getUint8(1),t+=2}if(u)throw new r.A("lepcc-decode-error","LUT not implemented");const f=Math.ceil(l*s/8),d=new Uint8Array(e,t,f);let y=0,g=0,w=0;const p=-1>>>32-s;for(let e=0;e<l;e++){for(;g<s;)y|=d[w]<<g,g+=8,w+=1;n[e]=y&p,y>>>=s,g-=s,g+s>32&&(y|=d[w-1]>>8-g)}return t+w}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function y(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,o),sizeHi:e.getUint32(t+d.sizeHi,o),count:e.getUint32(t+d.count,o),colorMapCount:e.getUint16(t+d.colorMapCount,o),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function g(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:s}=c(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(s>1)throw new r.A("lepcc-decode-error","Unknown version");const u=y(t,n);if(n+=d.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");if((2===u.lookupMethod||1===u.lookupMethod)&&0===u.compressionMethod){if(3*u.colorMapCount+u.count+n!==e.byteLength||u.colorMapCount>256)throw new r.A("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*u.colorMapCount),o=new Uint8Array(e,n+3*u.colorMapCount,u.count),i=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++){const n=o[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===u.lookupMethod&&0===u.compressionMethod){if(3*u.count+n!==e.byteLength||0!==u.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(u.lookupMethod<=2&&1===u.compressionMethod){if(n+3!==e.byteLength||1!==u.colorMapCount)throw new r.A("lepcc-decode-error","Bad count");const o=t.getUint8(n),i=t.getUint8(n+1),c=t.getUint8(n+2),s=new Uint8Array(3*u.count);for(let e=0;e<u.count;e++)s[3*e]=o,s[3*e+1]=i,s[3*e+2]=c;return s}throw new r.A("lepcc-decode-error","Bad method "+u.lookupMethod+","+u.compressionMethod)}const w={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function p(e,t){return{sizeLo:e.getUint32(t+w.sizeLo,o),sizeHi:e.getUint32(t+w.sizeHi,o),count:e.getUint32(t+w.count,o),scaleFactor:e.getUint16(t+w.scaleFactor,o),bitsPerPoint:e.getUint8(t+w.bitsPerPoint),reserved:e.getUint8(t+w.reserved)}}function h(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:s}=c(e,t,n);if(n+=i.byteCount,"Intensity "!==o)throw new r.A("lepcc-decode-error","Bad identifier");if(s>1)throw new r.A("lepcc-decode-error","Unknown version");const u=p(t,n);if(n+=w.byteCount,u.sizeHi*2**32+u.sizeLo!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const a=new Uint16Array(u.count);if(8===u.bitsPerPoint){if(u.count+n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,u.count);for(let e=0;e<u.count;e++)a[e]=t[e]*u.scaleFactor}else if(16===u.bitsPerPoint){if(2*u.count+n!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,u.count);for(let e=0;e<u.count;e++)a[e]=t[e]*u.scaleFactor}else{const t=[];if(f(e,n,t)!==e.byteLength)throw new r.A("lepcc-decode-error","Bad size");for(let e=0;e<u.count;e++)a[e]=t[e]*u.scaleFactor}return a}},118:(e,t,n)=>{n.d(t,{Cc:()=>u,CC:()=>a,RF:()=>s});var r=n(93814),o=(n(6273),n(23572)),i=n(76982),c=n(84989);function s(e){return e&&e.enabled&&("extrude"===e.type||function(e){return"fill"===e.type}(e))&&null!=e.edges}function u(e,t){return function(e,t){if(null==e)return null;const n=null!=e.color?(0,i.ci)(r.A.toUnitRGBA(e.color)):(0,i.fA)(0,0,0,0),c=(0,o.Lz)(e.size),s=(0,o.Lz)(e.extensionLength);switch(e.type){case"solid":return a({color:n,size:c,extensionLength:s,...t});case"sketch":return function(e){return{...f,...e,type:"sketch"}}({color:n,size:c,extensionLength:s,...t});default:return}}(function(e){return e&&e.enabled&&e.edges||null}(e),t)}function a(e){return{...l,...e,type:"solid"}}const l={color:(0,i.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:c.x.OPAQUE,hasSlicePlane:!1},f={color:(0,i.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:c.x.OPAQUE,hasSlicePlane:!1}},84989:(e,t,n)=>{var r;n.d(t,{x:()=>r}),function(e){e[e.INVISIBLE=0]="INVISIBLE",e[e.TRANSPARENT=1]="TRANSPARENT",e[e.OPAQUE=2]="OPAQUE"}(r||(r={}))}}]);