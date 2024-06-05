"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[3552],{97047:(e,t,i)=>{i.d(t,{LG:()=>u,mb:()=>y,yr:()=>c});var s=i(37623),r=i(82541),n=i(93446),a=i(14571),o=i(40087),l=i(68440),h=i(68716),d=i(89958),p=i(88416);function u(e){return e&&"render"in e}function c(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}class y extends o.q{constructor(e=null,t=!1){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this._texture=null,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),null!=this._uploadStatus&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this.invalidateTexture(),this.requestRender())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){null!=this._uploadStatus&&this._uploadStatus.controller.abort();const i=new AbortController,r=(0,s.Tw)();return(0,s.NY)(t,(()=>i.abort())),(0,s.NY)(i,(e=>r.reject(e))),this._uploadStatus={controller:i,resolver:r},this.source=e,r.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):this._source&&(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width))}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,r.D_)(this.transforms.displayViewScreenMat3),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),n=this.resolution/this.pixelRatio/e.resolution,o=n*this.width,l=n*this.height,h=Math.PI*this.rotation/180;(0,r.Tl)(t,t,(0,a.fA)(i,s)),(0,r.Tl)(t,t,(0,a.fA)(o/2,l/2)),(0,r.e$)(t,t,-h),(0,r.Tl)(t,t,(0,a.fA)(-o/2,-l/2)),(0,r.Oe)(t,t,(0,a.fA)(o,l)),(0,r.lw)(this.transforms.displayViewScreenMat3,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=function(e){return u(e)?e instanceof l.A?e.getRenderedRasterPixels()?.renderedRasterPixels:c(e):e}(this.source);try{if(null!=this._uploadStatus){const{controller:e,resolver:s}=this._uploadStatus,r={signal:e.signal},{width:n,height:a}=this,o=this._texture,l=t.textureUploadManager;await l.enqueueTextureUpdate({data:i,texture:o,width:n,height:a},r),s.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(e){(0,s.jH)(e)}}onDetach(){this.destroy()}_createTransforms(){return{displayViewScreenMat3:(0,n.vt)()}}_createTexture(e){const t=this.immutable,i=new p.R;return i.internalFormat=t?h.H0.RGBA8:h.Ab.RGBA,i.wrapMode=h.pF.CLAMP_TO_EDGE,i.isImmutable=t,i.width=this._sourceWidth,i.height=this._sourceHeight,new d.g(e,i)}}},68440:(e,t,i)=>{i.d(t,{A:()=>s});class s{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return null!=this.pixelBlock?this.pixelBlock.width:0}get height(){return null!=this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(null==t)return;const i=this.filter({extent:this.extent,pixelBlock:this.originalPixelBlock??t});if(null==i.pixelBlock)return;i.pixelBlock.maskIsAlpha&&(i.pixelBlock.premultiplyAlpha=!0);const s=i.pixelBlock.getAsRGBA(),r=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);r.data.set(s),e.putImageData(r,0,0)}getRenderedRasterPixels(){const e=this.filter({extent:this.extent,pixelBlock:this.pixelBlock});return null==e.pixelBlock?null:(e.pixelBlock.maskIsAlpha&&(e.pixelBlock.premultiplyAlpha=!0),{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)})}}},98160:(e,t,i)=>{i.d(t,{Y:()=>y});var s=i(82392),r=(i(80861),i(6273),i(67498),i(62991),i(26325)),n=i(2532),a=i(93446),o=i(97047),l=i(4211);class h extends l.Y{constructor(e,t,i,s,r,n,a=null){super(e,t,i,s,r,n),this.bitmap=new o.mb(a),this.bitmap.coordScale=[r,n],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:(0,a.vt)(),tileMat3:(0,a.vt)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var d=i(48702),p=i(57122),u=i(87891);class c extends u.A{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,n.vt)(),e),i=this._tileInfoView.getTileResolution(e.level),[s,r]=this._tileInfoView.tileInfo.size;return new h(e,i,t[0],t[3],s,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[d.d.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:p.S5.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===p.S5.MAP&&super.doRender(e)}}const y=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new c(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return t=(0,s._)([(0,r.$)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},7511:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(82392),n=i(58842),a=i(48),o=i(62991),l=i(61985),h=i(81482),d=(i(6273),i(80861),i(67498),i(26325)),p=i(84459),u=i(62921),c=i(43621),y=i(76736);let g=s=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=s=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],g);const m=g;var _=i(80455);let v=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,h.MZ)({type:[[[Number]]],json:{write:!0}})],v.prototype,"path",void 0),v=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],v);const f=v,w=n.A.ofType({key:"type",base:null,typeMap:{rect:m,path:f,geometry:_.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),l.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,p.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,h.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,h.MZ)({type:w,set(e){const t=(0,a.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,h.MZ)()],t.prototype,"updating",null),(0,r._)([(0,h.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,h.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},87062:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const n=e.tileInfo.size,a=e.getTileResolution(i.level),o=e.getTileResolution(s.level);let l=e.getLODInfoAt(s.level);const h=l.getXForColumn(s.col),d=l.getYForRow(s.row);l=e.getLODInfoAt(i.level);const p=l.getXForColumn(i.col),u=l.getYForRow(i.row),c=((w=t)instanceof HTMLImageElement?w.naturalWidth:w.width)/n[0],y=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/n[1],g=Math.round(c*((h-p)/a)),m=Math.round(y*(-(d-u)/a)),_=Math.round(c*n[0]*(o/a)),v=Math.round(y*n[1]*(o/a)),f=r(n);var w;return f.getContext("2d").drawImage(t,g,m,_,v,0,0,n[0],n[1]),f}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{G:()=>r,t:()=>s})},24775:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(82392),r=i(73783),n=i(57888),a=i(23377),o=i(80861),l=i(57725),h=i(71004),d=i(81482),p=(i(6273),i(67498),i(26325)),u=i(68660);let c=class extends((0,a.sA)((0,h.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";o.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],c.prototype,"visible",null),(0,s._)([(0,d.MZ)()],c.prototype,"view",void 0),c=(0,s._)([(0,p.$)("esri.views.layers.LayerView")],c);const y=c},30386:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(82392),r=i(80861),n=i(37623),a=i(61985),o=(i(6273),i(67498),i(62991),i(26325));const l=e=>{let t=class extends e{initialize(){this.addHandles((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.zf)(e)||r.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,o.$)("esri.layers.mixins.RefreshableLayerView")],t),t}},76736:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(82392),r=i(84977),n=i(81482),a=(i(6273),i(80861),i(67498),i(26325));let o=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const l=o},80455:(e,t,i)=>{i.d(t,{A:()=>y});var s,r=i(82392),n=(i(3313),i(81482)),a=(i(6273),i(80861),i(67498),i(26325)),o=i(61064),l=i(56053),h=i(76736),d=i(8e3),p=i(65648);const u={base:o.A,key:"type",typeMap:{extent:d.A,polygon:p.A}};let c=s=class extends h.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:l.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,a.$)("esri.views.layers.support.Geometry")],c);const y=c}}]);