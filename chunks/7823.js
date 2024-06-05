"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[7823],{97823:(t,e,i)=>{i.r(e),i.d(e,{default:()=>I});var r=i(82392),s=i(80861),a=i(37623),h=i(61985),p=i(81482),o=(i(6273),i(67498),i(26325)),n=i(52796),g=i(3596),l=i(7511),d=i(58989),u=i(21109),m=i(7444),c=i(24775),y=i(41332),_=i(12743);const w=t=>{let e=class extends t{initialize(){this.exportImageParameters=new _.g({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,r._)([(0,p.MZ)()],e.prototype,"exportImageParameters",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],e.prototype,"floors",null),(0,r._)([(0,p.MZ)({readOnly:!0})],e.prototype,"exportImageVersion",null),(0,r._)([(0,p.MZ)()],e.prototype,"layer",void 0),(0,r._)([(0,p.MZ)()],e.prototype,"suspended",void 0),(0,r._)([(0,p.MZ)(y.ui)],e.prototype,"timeExtent",void 0),e=(0,r._)([(0,o.$)("esri.views.layers.MapImageLayerView")],e),e};var f=i(30386),x=i(39631),v=i(17467);let H=class extends(w((0,f.A)((0,l.e)(c.A)))){constructor(){super(...arguments),this._highlightGraphics=new n.Y,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch((t=>{(0,a.zf)(t)||s.A.getLogger(this).error(t)})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,r=i>=10.3,s=i>=10;this._bitmapContainer=new g.l,this.container.addChild(this._bitmapContainer),this._highlightView=new d.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new u.A(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new x.Uh({createFetchPopupFeaturesQueryGeometry:(t,e)=>(0,v.V)(t,e,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,e)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:e})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new m.A({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:r,imageNormalizationSupported:s,hidpi:!0}),this.addAttachHandles((0,h.wB)((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,r){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}fetchImageBitmap(t,e,i,r){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...r})}highlight(t){return this._popupHighlightHelper.highlight(t)}};(0,r._)([(0,p.MZ)()],H.prototype,"strategy",void 0),(0,r._)([(0,p.MZ)()],H.prototype,"updating",void 0),H=(0,r._)([(0,o.$)("esri.views.2d.layers.MapImageLayerView2D")],H);const I=H}}]);