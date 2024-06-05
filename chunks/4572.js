"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[4572],{8189:(e,t,i)=>{i.d(t,{B:()=>l});var r=i(3223),n=i(70214),s=i(80861),a=i(37623),o=i(73462);class l{constructor(e,t,i,r,n={}){this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,o.ho)(e,{...n,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,n.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>s.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,n.hA)((()=>{i.removed=!0,(0,r.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const r=this._transferLists[e],n=r?r(t):[];return this._thread.invoke(e,t,{transferList:n,signal:i})}return this._promise?this._promise.then((()=>((0,a.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},11703:(e,t,i)=>{var r,n,s,a,o,l,d,h,u,_,c,g,y,m,b;i.d(t,{Pl:()=>f,Qg:()=>b,vE:()=>p}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(r||(r={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(n||(n={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(s||(s={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(a||(a={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(o||(o={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(l||(l={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(d||(d={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(h||(h={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(_||(_={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(c||(c={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(g||(g={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(y||(y={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(m||(m={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(b||(b={}));const f=-1,p=-2},44572:(e,t,i)=>{i.r(t),i.d(t,{default:()=>L});var r=i(82392),n=i(38116),s=i(73783),a=i(80861),o=i(37623),l=i(61985),d=i(9987),h=i(81482),u=(i(6273),i(67498),i(26325)),_=i(11703),c=i(8189);class g extends c.B{constructor(e){super("Lyr3DWorker","process",{process:e=>e.inputs},e,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}var y,m,b,f=i(38425),p=i(69172);(b=y||(y={}))[b.Lifetime=0]="Lifetime",b[b.Jobs=1]="Jobs",b[b.Renderables=2]="Renderables",function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(m||(m={}));let w=class extends s.A{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=m.Critical,this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(y.Lifetime),this._debugFlags.add(y.Jobs),this._debugFlags.add(y.Renderables)}_debugLog(e,t,i,r=!0){if(this._debugFlags.has(e)&&this._debugLevel>=t){const e=r?`[js] ${i}`:`${i}`;t===m.Critical||t===m.Error?a.A.getLogger(this).error(e):t===m.Warning&&a.A.getLogger(this).warn(e),a.A.getLogger(this).info(e)}}initialize(){this._debugLevel>m.Warning&&(a.A.getLogger(this).level="info"),this._debugLog(y.Lifetime,m.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([(0,l.wB)((()=>this.view.state?.contentCamera),(()=>this._updateWasmCamera()))]),this._pulseTaskHandle=(0,d.mg)({preRender:()=>this._pulseTask()})}destroy(){this._debugLog(y.Lifetime,m.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach((e=>{e.abortController.abort()})),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const e=this._worker;e&&e.destroyWasm().then((()=>{this._worker?.destroy(),this._worker=null})),this._pulseTaskHandle?.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(y.Lifetime,m.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),_.vE)}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(y.Lifetime,m.Error,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() called when WASM wasn't loaded!"),0;this._doRemoveLayerView(e);const t=this._layers.size;return 0===t&&(this._debugLog(y.Lifetime,m.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(y.Lifetime,m.Error,"Lyr3DWasmPerSceneView.setEnabled() called when WASM wasn't loaded!");const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0)}setLayerOffset(e,t){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t):this._debugLog(y.Lifetime,m.Error,"Lyr3DWasmPerSceneView.setLayerOffset() called when WASM wasn't loaded!")}getAttributionText(){return this._lyr3DMain?this._lyr3DMain.get_current_attribution_text().split("|"):(this._debugLog(y.Lifetime,m.Error,"Lyr3DWasmPerSceneView.getAttributionText() called when WASM wasn't loaded!"),[])}onRenderableEvicted(e,t,i){this._lyr3DMain?this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i):this._debugLog(y.Lifetime,m.Error,"Lyr3DWasmPerSceneView.onRenderableEvicted() called when WASM wasn't loaded!")}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0)}initializeWasm(){return this._lyr3DMain?Promise.resolve():(this._debugLog(y.Lifetime,m.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=(0,f.a)().then((e=>{this._lyr3DMain=e,this._lyr3DMainPromise=null;const t=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),i=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),r=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),n=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),s=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),a="global"===this.view.viewingMode,o=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1,l=this.view.heightModelInfo?.heightModel,d=!l||"gravity-related-height"===l;return this._lyr3DMain.initialize_lyr3d_wasm(s,t,i,r,n,a,d,o,this._debugLevel)?(this._worker=new g(function(e){return t=>{if(e.immediate)return e.immediate.schedule(t);const i="No immediate scheduler";throw console.error(i),new Error(i)}}(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(y.Lifetime,m.Critical,"Lyr3d Main WASM failed to initialize",!1))})).catch((e=>{this._debugLog(y.Lifetime,m.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)}))),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0;this._layers.forEach((t=>{e+=t.layerView.usedMemory})),e/=1048576;const t=this.view.resourceController.memoryController,i=t.usedMemory*t.maxMemory-e,r=t.maxMemory-i+t.additionalCacheMemory;this._lyr3DMain.frame_pulse(r,e,i,t.maxMemory)}}_incrementJobCount(e){e.outstandingJobCount+=1,1===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,0===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&1===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&0===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(y.Jobs,m.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const e=t.data.byteLength,r=this._lyr3DMain._malloc(e);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,r,e).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,r,e),this._lyr3DMain._free(r)}this._decrementJobCount(e)}_getRequestPromises(e,t){const i=[];for(const r of e){const e=new URL(r),s=e.searchParams.get("session");s?this._session=s:this._session&&e.searchParams.append("session",this._session),i.push((0,n.A)(e.toString(),t).then((e=>e.data)))}return i}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,r={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},n={inputs:[],jobDescJson:e.desc,isMissingResourceCase:!1},s=this._getRequestPromises(e.urls,r);Promise.all(s).then((e=>(n.inputs=e,this._worker.invoke(n,i)))).then((e=>e)).catch((t=>((0,o.zf)(t)?this._debugLog(y.Jobs,m.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(y.Jobs,m.Error,`job ${e.jobId} failed with error ${t}.`),{status:_.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}))).then((s=>{if(s.status===_.Qg.Failed)this._onJobFailed(t,s,e);else if(s.status===_.Qg.Succeeded)this._onJobSucceeded(t,s,e);else if(s.status===_.Qg.MissingInputs){const a=this._getRequestPromises(s.missingInputUrls,r);Promise.all(a).then((e=>{n.jobDescJson=s.jobDescJson,s.originalInputs?n.inputs=s.originalInputs:n.inputs=[],n.isMissingResourceCase=!0;for(const t of e)n.inputs.push(t);return this._worker.invoke(n,i)})).then((i=>{i.status===_.Qg.Failed?this._onJobFailed(t,i,e):i.status===_.Qg.Succeeded&&this._onJobSucceeded(t,i,e)})).catch((i=>{this._decrementJobCount(t),(0,o.zf)(i)?this._debugLog(y.Jobs,m.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(y.Jobs,m.Error,`job ${e.jobId} failed with error2 ${i}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)}))}}))}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const e=t.data.slice();t.data=e}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then((t=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,t.memUsageBytes),this._decrementRenderableCount(i)})).catch((t=>{(0,o.zf)(t)||this._debugLog(y.Renderables,m.Error,`createRenderable failed with error ${t}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)})))}_freeRenderables(e,t,i){if(i<1)return;const r=this._layers.get(e);if(!r)return;const n=r.layerView,s=[],a=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let e=0;e<i;++e)s.push(a[e]);for(let e=0;e<i;++e)n.freeRenderable(s[e])}_setRenderableVisibility(e,t,i,r){if(r<1)return;const n=this._layers.get(e);if(!n)return;const s=n.layerView,a=[],o=[],l=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,r);for(let e=0;e<r;++e)a.push(l[e]),o.push(1===d[e]);s.setRenderableVisibility(a,o,r)}_onWasmError(e,t,i,r){this._lyr3DMain&&this._debugLog(i,r,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url)return _.Pl;const i=this._lyr3DMain.get_next_layer_id(),r=new AbortController;this._layers.set(i,{layerView:e,abortController:r,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey});const n=t.elevationInfo?.offset??0,s=t.elevationInfo?.unit?(0,p.Ao)(t.elevationInfo?.unit):1;return this._lyr3DMain.add_layer(t.url,i,n*s)?(this._updateWasmCamera(),i):(this._layers.delete(i),_.Pl)}_updateWasmCamera(){const e=this.view.state?.contentCamera;if(!e||!this._lyr3DMain)return;const{eye:t,center:i,up:r,near:n,far:s,fovY:a}=e,o=[e.viewport[2],e.viewport[3]],l=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:i,up:r,near:n,far:s,fov:a,aspectRatio:l,viewport:o})}};(0,r._)([(0,h.MZ)({constructOnly:!0})],w.prototype,"view",void 0),w=(0,r._)([(0,u.$)("esri.layers.Lyr3DWasmPerSceneView")],w);const L=w},38425:(e,t,i)=>{i.d(t,{a:()=>n,h:()=>s});var r=i(44764);function n(){return new Promise((e=>i.e(8505).then(i.bind(i,78505)).then((e=>e.l)).then((({default:t})=>{const i=t({locateFile:a,onRuntimeInitialized:()=>e(i)})})))).catch((e=>{throw e}))}function s(){return new Promise((e=>i.e(3654).then(i.bind(i,63654)).then((e=>e.l)).then((({default:t})=>{const i=t({locateFile:a,onRuntimeInitialized:()=>e(i)})})))).catch((e=>{throw e}))}function a(e){return(0,r.s)(`esri/libs/lyr3d/${e}`)}}}]);