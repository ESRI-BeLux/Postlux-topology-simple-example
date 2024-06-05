"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[5990],{39329:(e,t,i)=>{i.r(t),i.d(t,{default:()=>J});var s=i(82392),o=(i(3313),i(20857)),r=i(3132),n=i(58842),a=i(62991),h=i(57888),c=i(80861),l=i(57725),p=i(7743),d=i(61985),v=i(23572),u=i(81482),y=(i(6273),i(67498),i(26325)),_=i(11021),m=i(11682),g=i(68231),f=i(84456),x=i(5896),G=i(19264),M=i(27263),w=i(34243),b=i(1277),V=i(36818),S=i(82795),C=i(92750),k=i(60141),I=i(3130),A=i(28535),E=i(16761),T=i(83853),O=i(65334),R=i(49970),Z=i(38648),z=i(8977);class H{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-start"}}class L{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape"}}class F{constructor(e,t,i){this.graphic=e,this.mover=t,this.selected=i,this.type="reshape-stop"}}class U{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-start"}}class D{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move"}}class q{constructor(e,t,i){this.mover=e,this.dx=t,this.dy=i,this.type="move-stop"}}class P{constructor(e){this.added=e,this.type="vertex-select"}}class ${constructor(e){this.removed=e,this.type="vertex-deselect"}}class W{constructor(e,t,i,s){this.added=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-add"}}class K{constructor(e,t,i,s){this.removed=e,this.graphic=t,this.oldGraphic=i,this.vertices=s,this.type="vertex-remove"}}const Y=V.W.reshapeGraphics,j={vertices:{default:new g.A({style:"circle",size:Y.vertex.size,color:Y.vertex.color,outline:{color:Y.vertex.outlineColor,width:1}}),hover:new g.A({style:"circle",size:Y.vertex.hoverSize,color:Y.vertex.hoverColor,outline:{color:Y.vertex.hoverOutlineColor,width:1}}),selected:new g.A({style:"circle",size:Y.selected.size,color:Y.selected.color,outline:{color:Y.selected.outlineColor,width:1}})},midpoints:{default:new g.A({style:"circle",size:Y.midpoint.size,color:Y.midpoint.color,outline:{color:Y.midpoint.outlineColor,width:1}}),hover:new g.A({style:"circle",size:Y.midpoint.size,color:Y.midpoint.color,outline:{color:Y.midpoint.outlineColor,width:1}})}};let B=class extends h.A.EventedAccessor{constructor(e){super(e),this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this._translateGraphicTooltipInfo=null,this._translateVertexTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new n.A,this.midpointSymbol=new g.A({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.symbols=j,this.sketchOptions=new I.A,this.type="reshape",this.vertexGraphics=new n.A,this.view=null}initialize(){const e=this.view;this._highlightHelper=new w.A({view:e}),this._setup(),this.addHandles([(0,d.z7)((()=>e?.ready),(()=>{const{layer:e,view:t}=this;(0,b.Y)(t,e),this.addHandles(t.on("key-down",(e=>this._keyDownHandler(e)),S.o.TOOL))}),{once:!0,initial:!0}),(0,d.C1)((()=>this.graphic),(()=>this.refresh())),(0,d.C1)((()=>this.layer),((e,t)=>{t&&(this._clearSelection(),this._resetGraphics(t)),this.refresh()})),(0,d.C1)((()=>this.enableMidpoints),(()=>this.refresh())),(0,d.wB)((()=>this.sketchOptions.tooltips.effectiveEnabled),(e=>{this.tooltip=e?new E.m({view:this.view}):(0,l.pR)(this.tooltip)}),d.pc),(0,d.wB)((()=>this.view.effectiveTheme.accentColor),(()=>this._updateSymbolsForTheme()),d.Vh)])}destroy(){this._reset(),this._mover?.destroy(),this._mover=null,this.tooltip=(0,l.pR)(this.tooltip)}set highlightsEnabled(e){this._highlightHelper?.removeAll(),this._set("highlightsEnabled",e),this._setUpHighlights()}get state(){const e=this.view.ready,t=!(!this.graphic||!this.layer);return e&&t?"active":e?"ready":"disabled"}isUIGraphic(e){const t=[];return this.graphic&&t.push(this.graphic),t.concat(this.vertexGraphics.items,this.midpointGraphics.items),t.length>0&&t.includes(e)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:e,layer:t}=this;if(!t||null==e?.geometry)return;const i=e.geometry;"mesh"!==i.type&&"extent"!==i.type?("polygon"===i.type&&(0,_.uC)(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){this.highlightsEnabled&&this.graphic&&this._highlightHelper?.add(this.graphic)}_setUpGeometryHelper(){const e=this.graphic.geometry;if(null==e||"mesh"===e.type||"extent"===e.type)return void this._logGeometryTypeError();const t="multipoint"===e.type?new Z.A({paths:e.points,spatialReference:e.spatialReference}):e;this._editGeometryOperations=k.p.fromGeometry(t,f.RT.Local)}_saveSnappingContextForHandle(e,t){this._snappingGraphicsLayer=new m.A({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new A.e({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:t.viewEvent?.pointerType||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new x.J(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(e)})}_reset(){this._clearSelection(),this._highlightHelper?.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){null!=this.snappingManager&&this.snappingManager.doneSnapping(),null!=this._snappingGraphicsLayer&&(this.view?.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=(0,l.pR)(this._editGeometryOperations),this._snappingTask=(0,l.DC)(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(e){this._removeMidpointGraphics(e),this._removeVertexGraphics(e),this._set("selectedVertices",[])}_removeMidpointGraphics(e){const t=e||this.layer;t&&t.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach((e=>e.destroy())),this.midpointGraphics.removeAll()}_removeVertexGraphics(e){const t=e||this.layer;t&&t.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach((e=>e.destroy())),this.vertexGraphics.removeAll()}_getCoordinatesForUI(e){const t=(0,_.$K)(e.clone());if("polygon"===e.type)for(const e of t){const t=e[e.length-1];e[0][0]===t[0]&&e[0][1]===t[1]&&e.length>2&&e.pop()}return t}_setupGraphics(){const e=this.graphic.geometry;if(null!=e&&("polyline"===e.type||"polygon"===e.type)){const t=this._getCoordinatesForUI(e);this.enableMidpoints&&this._setUpMidpointGraphics(t),this.enableVertices&&this._setUpVertexGraphics(t)}}_setUpMidpointGraphics(e){this._removeMidpointGraphics();const t=this._createMidpointGraphics(e);this.midpointGraphics.addMany(t),this.layer.addMany(t)}_setUpVertexGraphics(e){this._removeVertexGraphics();const t=this._createVertexGraphics(e);this.vertexGraphics.addMany(t),this._storeRelatedVertexIndices(),this.layer.addMany(t)}_createVertexGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,r=[];return e?.forEach(((e,n)=>{e.forEach(((e,a)=>{const[h,c,l]=e;r.push(new o.A({geometry:new z.A({x:h,y:c,z:l,spatialReference:s}),symbol:i?.vertices?.default,attributes:{...t,pathIndex:n,pointIndex:a}}))}))})),r}_createMidpointGraphics(e){const{_graphicAttributes:t,symbols:i,view:{spatialReference:s}}=this,r=[];return e?.forEach(((e,n)=>{e.forEach(((a,h)=>{const[c,l,p]=a,d=e[h+1]?h+1:0;if("polygon"===this.graphic.geometry?.type||0!==d){const[a,v,u]=e[d],[y,m,g]=(0,_.t9)([c,l,p],[a,v,u]);r.push(new o.A({geometry:new z.A({x:y,y:m,z:g,spatialReference:s}),symbol:i.midpoints.default,attributes:{...t,pathIndex:n,pointIndexStart:h,pointIndexEnd:d}}))}}))})),r}_updateSymbolsForTheme(){const e=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",e),hover:this.symbols.vertices.hover?.clone().set("color",e)},midpoints:{...this.symbols.midpoints}};for(const e of this.vertexGraphics)this._isSelected(e)?e.symbol=this.symbols.vertices.selected:this._hoverGraphic===e?e.symbol=this.symbols.vertices.hover:e.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const e=this.vertexGraphics.items;if(!e)return;const t=e.map((({geometry:e})=>({x:e.x,y:e.y})));for(let i=0;i<t.length;i++){const s=[];for(let e=0;e<t.length;e++){if(i===e)continue;const o=t[i],r=t[e];o.x===r.x&&o.y===r.y&&s.push(e)}e[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:e,graphic:t,midpointGraphics:i,vertexGraphics:s,view:o}=this,r=s.concat(i).items;e&&r.push(t),this._mover=new M.default({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:r,view:o,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_onGraphicClickCallback(e){e.viewEvent.stopPropagation();const t=e.graphic;if(t===this.graphic)this.clearSelection(),this.emit("graphic-click",e),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(e);else if(this._isMidpoint(t)){if(2===e.viewEvent.button)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(t);this.refresh(),this._emitVertexAddEvent([t],i,s)}else this._isVertex(t)&&(e.viewEvent.stopPropagation(),2===e.viewEvent.button?this._removeVertices(t):(e.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(t)?this._removeFromSelection(t,!0):this._addToSelection(t)))}_setUpOperation(e){const{graphic:t,dx:i,dy:s}=e,o=t===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(t,e),this._activeOperationInfo={target:this.graphic,mover:t,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(e){const{dx:t,dy:i,graphic:s}=e;if(s===this.graphic){const{geometry:o}=s;return this._setUpOperation(e),this._emitMoveStartEvent(t,i),void(null!=o&&"point"===o.type&&this._onHandleMove(s,t,i,e,(()=>{this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(t,i)})))}if(!this.selectedVertices.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const e=this.graphic.clone(),t=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],e,t)}this._addToSelection(s)}this._setUpOperation(e),this._emitReshapeStartEvent(s),this._onHandleMove(s,t,i,e,(()=>{this._updateTooltip(s,e.viewEvent),this._emitReshapeEvent(s)}))}_onGraphicMoveCallback(e){const t=this._activeOperationInfo;if(!t)return;const{dx:i,dy:s,graphic:o}=e;t.totalDx+=i,t.totalDy+=s;const{operationType:r}=t,{geometry:n}=o;if(null!=n)if("move"!==r)this._onHandleMove(o,i,s,e,(()=>{this._updateTooltip(o,e.viewEvent),this._emitReshapeEvent(o)}));else if("point"===n.type)this._onHandleMove(o,i,s,e,(()=>{this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(i,s)}));else if("polyline"===n.type||"polygon"===n.type){const t=this._getCoordinatesForUI(n);this._updateVertexGraphicLocations(t),this._updateTooltip(this.graphic,e.viewEvent),this._emitMoveEvent(i,s)}}_onGraphicMoveStopCallback(e){const t=this._activeOperationInfo;if(!t)return;const{dx:i,dy:s,graphic:o}=e,{operationType:r}=t;t.totalDx+=i,t.totalDy+=s,this._onHandleMove(o,i,s,e,(()=>"move"===r?this._emitMoveStopEvent():this._emitReshapeStopEvent(o))),this._isMidpoint(o)?this.refresh():(this._updateTooltip(this._isVertex(o)?o:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(e){const t=this.view.spatialReference;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:o}=i.attributes,[r,n,a]=e[s][o];i.geometry=new z.A({x:r,y:n,z:a,spatialReference:t})}this._updateMidpointGraphicLocations(e)}_updateMidpointGraphicLocations(e){for(const t of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=t.attributes,[r,n,a]=e[i][s],[h,c,l]=e[i][o],[p,d,v]=(0,_.t9)([r,n,a],[h,c,l]);t.geometry=new z.A({x:p,y:d,z:v,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:e}){return[e?.pathIndex||0,e?.pointIndex||0]}_getVertexFromEditGeometry(e){const[t,i]=this._getIndicesForVertexGraphic(e);return this._editGeometryOperations.data.components[t].vertices[i]}_onHandleMove(e,t,i,s,o){(0,l.DC)(this._snappingTask);const n=this._snappingContext;if(!n)return;const a=e.geometry,h="graphic-move-stop"===s.type;if(null!=this.snappingManager&&this.selectedVertices.length<2&&!h){const s=this.snappingManager;this._stagedVertex=s.update({point:a,context:n}),this._syncGeometryAfterVertexMove(e,new z.A(this._stagedVertex),t,i,h),o(),this._snappingTask=(0,r.UT)((async r=>{const c=await s.snap({point:a,context:n,signal:r});c.valid&&(this._stagedVertex=c.apply(),this._syncGeometryAfterVertexMove(e,new z.A(this._stagedVertex),t,i,h),o())}))}else{const s=null!=this._stagedVertex?new z.A(this._stagedVertex):a;this._syncGeometryAfterVertexMove(e,s,t,i,h),o()}}async _syncGeometryAfterVertexMove(e,t,i,s,o=!1){const r=this._editGeometryOperations.data.geometry;if("point"===r.type)e.geometry=t;else if("mesh"===r.type)e.geometry=r.centerAt(t),e.notifyGeometryChanged();else{const{x:n,y:a,z:h}=t,[c,l]=this._getIndicesForVertexGraphic(e);let p=(0,_.$K)(r);const d=p[c].length-1,v=null!=h?[n,a,h]:[n,a];p[c][l]=v,"polygon"===r.type&&(0===l?p[c][d]=v:l===d&&(p[c][0]=v)),this._isVertex(e)&&(p=this._moveRelatedCoordinates(p,e,v),p=this._moveSelectedHandleCoordinates(p,e,i,s,"polygon"===r.type),this._updateMidpointGraphicLocations(p)),this.graphic.geometry=r.clone();const u=this._getVertexFromEditGeometry(e),y=n-u.pos[0],m=a-u.pos[1];this._editGeometryOperations.moveVertices([u],y,m,0),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(e),t):e.geometry=t)}}_moveRelatedCoordinates(e,t,i){const{relatedGraphicIndices:s}=t.attributes;for(const o of s){const s=this.vertexGraphics.at(o),{pathIndex:r,pointIndex:n}=s.attributes;e[r][n]=i,s.geometry=t.geometry}return e}_moveSelectedHandleCoordinates(e,t,i,s,o){for(const r of this.selectedVertices)if(r!==t){const{pathIndex:t,pointIndex:n,relatedGraphicIndices:a}=r.attributes,h=(0,G.lR)(r.geometry,i,s,this.view),c=e[t].length-1;e[t][n]=[h.x,h.y],r.geometry=h,o&&(0===n?e[t][c]=[h.x,h.y]:n===c&&(e[t][0]=[h.x,h.y]));for(const t of a){const i=this.vertexGraphics.at(t),{pathIndex:s,pointIndex:o}=i.attributes;e[s][o]=[h.x,h.y],i.geometry=h}}return e}_onGraphicPointerOverCallback(e){const t=e.graphic;this._hoverGraphic=t;const i=this._isVertex(t);i&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.hover),this._updateTooltip(i?t:null),this._updateHoverCursor(t)}_onGraphicPointerOutCallback(e){const t=e.graphic;this._hoverGraphic=null,this._isVertex(t)&&!this._isSelected(t)&&(t.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(e){const{_graphicAttributes:t,graphic:i}=this,s=i.geometry;if(null==s||"polygon"!==s.type&&"polyline"!==s.type)return[];const o=s.clone(),r=[],{pathIndex:n,pointIndexStart:a,pointIndexEnd:h}=e.attributes,{x:c,y:l,z:p}=e.geometry,d=0===h?a+1:h,v=(0,_.$K)(o);return v[n].splice(d,0,null!=p?[c,l,p]:[c,l]),e.attributes={...t,pathIndex:n,pointIndex:d,relatedGraphicIndices:[]},r.push({coordinates:v[n][d],componentIndex:n,vertexIndex:d}),this.graphic.geometry=o,r}_addToSelection(e){e instanceof o.A&&(e=[e]);for(const t of e)t.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(e)),this._emitSelectEvent(e)}_removeFromSelection(e,t){const{vertices:i}=this.symbols,s=t?i.hover:i.default;e instanceof o.A&&(e=[e]);for(const t of e)this.selectedVertices.splice(this.selectedVertices.indexOf(t),1),this._set("selectedVertices",this.selectedVertices),t.set("symbol",s);this._emitDeselectEvent(e)}_clearSelection(){if(this.selectedVertices.length){const e=this.selectedVertices;for(const e of this.selectedVertices)e.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(e)}}_keyDownHandler(e){C.NE.delete.includes(e.key)&&!e.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(e){const t=this.graphic.geometry;if(null==t||"polygon"!==t.type&&"polyline"!==t.type)return;if("polygon"===t.type&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;e instanceof o.A&&(e=[e]);const i=this.graphic.clone(),s=t.clone();let r=(0,_.$K)(s);const n=[];e instanceof o.A&&(e=[e]);for(const t of e){const{x:e,y:i}=t.geometry;for(let t=0;t<r.length;t++){const s=r[t];for(let o=0;o<s.length;o++){const[a,h]=s[o];e===a&&i===h&&(n.push({coordinates:r[t][o],componentIndex:t,vertexIndex:o}),r[t].splice(Number(o),1))}}}if("polygon"===s.type)r=r.filter((e=>{if(e.length<2)return!1;const[t,i]=e[0],[s,o]=e[e.length-1];return(2!==e.length||t!==s||i!==o)&&(t===s&&i===o||e.push(e[0]),!0)})),s.rings=r;else{for(const e of r)1===e.length&&r.splice(r.indexOf(e),1);s.paths=r}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(e,i,n)}_isVertex(e){return this.vertexGraphics.includes(e)}_isSelected(e){return this._isVertex(e)&&this.selectedVertices.includes(e)}_isMidpoint(e){return this.midpointGraphics.includes(e)}_updateHoverCursor(e){this.view.cursor=this._isMidpoint(e)?"copy":"move"}_updateTooltip(e,t){null!=this.tooltip&&(e?e===this.graphic?this._updateMoveGraphicTooltip(t):this._updateMoveVertexTooltip(t):this.tooltip.clear())}_updateMoveGraphicTooltip(e){const{tooltip:t,sketchOptions:i,view:s}=this;if(null==t)return;const o=this._translateGraphicTooltipInfo??=new T.ar({sketchOptions:i});if(o.clear(),o.sketchOptions=i,e){const{x:t,y:i}=e.origin,r=s.toMap(e),n=s.toMap((0,v.tc)(t,i)),a=(0,R.Kt)(n,r);o.distance=null!=a?a:p.r7}t.info=o}_updateMoveVertexTooltip(e){const{tooltip:t,graphic:{geometry:i},sketchOptions:s,view:o}=this;if(null==t)return;const r=this._translateVertexTooltipInfo??=new T.un({sketchOptions:s});if(r.clear(),r.sketchOptions=s,"polygon"===i?.type?r.area=(0,O.n)(i):"polyline"===i?.type&&(r.totalLength=(0,R.ob)(i)),e){const{x:t,y:i}=e.origin,s=o.toMap(e),n=o.toMap((0,v.tc)(t,i)),a=(0,R.Kt)(n,s);r.distance=null!=a?a:p.r7}t.info=r}_emitMoveStartEvent(e,t){const i=new U(this.graphic,e,t);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(e,t){const i=new D(this.graphic,e,t);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const e=this._activeOperationInfo;if(!e)return;const{totalDx:t,totalDy:i}=e,s=new q(this.graphic,t,i);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitReshapeStartEvent(e){const t=new H(this.graphic,e,this.selectedVertices);this.emit("reshape-start",t),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(t)}_emitReshapeEvent(e){const t=new L(this.graphic,e,this.selectedVertices);this.emit("reshape",t),this.callbacks.onReshape&&this.callbacks.onReshape(t)}_emitReshapeStopEvent(e){const t=new F(this.graphic,e,this.selectedVertices);this.emit("reshape-stop",t),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(t)}_emitSelectEvent(e){const t=new P(e);this.emit("select",t),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(t)}_emitDeselectEvent(e){const t=new $(e);this.emit("deselect",t),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(t)}_emitVertexAddEvent(e,t,i){const s=new W(e,this.graphic,t,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(e,t,i){const s=new K(e,this.graphic,t,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}_logGeometryTypeError(){c.A.getLogger(this).error(new a.A("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};(0,s._)([(0,u.MZ)()],B.prototype,"tooltip",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"_translateGraphicTooltipInfo",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"_translateVertexTooltipInfo",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"callbacks",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"enableMidpoints",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"enableMovement",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"enableVertices",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"graphic",void 0),(0,s._)([(0,u.MZ)({value:!0})],B.prototype,"highlightsEnabled",null),(0,s._)([(0,u.MZ)()],B.prototype,"layer",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],B.prototype,"midpointGraphics",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"midpointSymbol",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],B.prototype,"selectedVertices",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"snappingManager",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],B.prototype,"state",null),(0,s._)([(0,u.MZ)()],B.prototype,"symbols",void 0),(0,s._)([(0,u.MZ)({type:I.A})],B.prototype,"sketchOptions",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],B.prototype,"type",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],B.prototype,"vertexGraphics",void 0),(0,s._)([(0,u.MZ)()],B.prototype,"view",void 0),B=(0,s._)([(0,y.$)("esri.views.draw.support.Reshape")],B);const J=B},36818:(e,t,i)=>{i.d(t,{W:()=>p});var s=i(93814);const o={main:new s.A([255,127,0]),selected:new s.A([255,255,255]),outline:new s.A([0,0,0,.5]),selectedOutline:new s.A([255,255,255]),hoverOutline:new s.A([255,255,255]),secondary:new s.A([255,255,255]),secondaryOutline:new s.A([100,100,100]),transparent:new s.A([0,0,0,0])};function r(e,t){Object.assign(e,t)}class n{constructor(e){this.size=8,this.hoverSize=10,this.color=o.main,this.hoverColor=o.main,this.outlineColor=o.outline,this.hoverOutlineColor=o.hoverOutline,r(this,e)}}class a{constructor(e){this.color=o.secondary,this.hoverColor=o.main,r(this,e)}}class h{constructor(e){this.color=o.transparent,this.hoverColor=o.transparent,this.outlineColor=o.main,this.hoverOutlineColor=o.main,this.stagedColor=o.transparent,this.stagedOutlineColor=o.secondary,r(this,e)}}class c{constructor(e){this.vertex=new n,this.midpoint=new n({color:o.secondary,outlineColor:o.secondaryOutline,size:6}),this.selected=new n({color:o.selected,hoverColor:o.selected,hoverOutlineColor:o.hoverOutline}),r(this,e)}}class l{constructor(e){this.center=new n({color:o.secondaryOutline}),this.fill=new h,this.line=new a,this.vertex=new n({color:o.selected,outlineColor:o.main,hoverColor:o.selected,hoverOutlineColor:o.secondaryOutline}),r(this,e)}}const p=new class{constructor(e){this.reshapeGraphics=new c,this.transformGraphics=new l,r(this,e)}}},36598:(e,t,i)=>{i.d(t,{b:()=>c});var s=i(70214),o=i(46997),r=i(56142),n=i(27411),a=i(25674),h=i(43457);class c{draw(e,t){const i=this._getUniqueHints(e),c=this.sortUniqueHints(i),l=[];for(const e of c)e instanceof o.v&&l.push(this.visualizeIntersectionPoint(e,t)),e instanceof r.c&&l.push(this.visualizeLine(e,t)),e instanceof n.r&&l.push(this.visualizeParallelSign(e,t)),e instanceof h.l&&l.push(this.visualizeRightAngleQuad(e,t)),e instanceof a._&&l.push(this.visualizePoint(e,t));return(0,s.vE)(l)}sortUniqueHints(e){return e}_getUniqueHints(e){const t=[];for(const i of e){let e=!0;for(const s of t)if(i.equals(s)){e=!1;break}e&&t.push(i)}return t}}},25674:(e,t,i)=>{i.d(t,{_:()=>r});var s=i(80347),o=i(12288);class r extends o.m{constructor(e,t,i){super(t,i),this.point=e}equals(e){return e instanceof r&&(0,s.j)(this.point,e.point)}}},83853:(e,t,i)=>{i.d(t,{JH:()=>v,YI:()=>c,ar:()=>h,nW:()=>l,un:()=>p,y3:()=>d});var s=i(82392),o=i(7743),r=i(81482),n=i(26325),a=i(27920);let h=class extends a.w{constructor(e){super(e),this.type="translate-graphic",this.distance=o.r7}clear(){this.distance=o.r7}};(0,s._)([(0,r.MZ)()],h.prototype,"type",void 0),(0,s._)([(0,r.MZ)()],h.prototype,"distance",void 0),h=(0,s._)([(0,n.$)("esri.views.interactive.tooltip.TranslateGraphicTooltipInfo")],h);let c=class extends a.w{constructor(e){super(e),this.type="translate-graphic-z",this.distance=o.r7}clear(){this.distance=o.r7}};(0,s._)([(0,r.MZ)()],c.prototype,"type",void 0),(0,s._)([(0,r.MZ)()],c.prototype,"distance",void 0),c=(0,s._)([(0,n.$)("esri.views.interactive.tooltip.TranslateGraphicZTooltipInfo")],c);let l=class extends a.w{constructor(e){super(e),this.type="translate-graphic-xy",this.distance=o.r7}};(0,s._)([(0,r.MZ)()],l.prototype,"type",void 0),(0,s._)([(0,r.MZ)()],l.prototype,"distance",void 0),l=(0,s._)([(0,n.$)("esri.views.interactive.tooltip.TranslateGraphicXYTooltipInfo")],l);let p=class extends a.w{constructor(e){super(e),this.type="translate-vertex",this.distance=o.r7,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=o.r7,this.elevation=null,this.area=null,this.totalLength=null}};(0,s._)([(0,r.MZ)()],p.prototype,"type",void 0),(0,s._)([(0,r.MZ)()],p.prototype,"distance",void 0),(0,s._)([(0,r.MZ)()],p.prototype,"elevation",void 0),(0,s._)([(0,r.MZ)()],p.prototype,"area",void 0),(0,s._)([(0,r.MZ)()],p.prototype,"totalLength",void 0),p=(0,s._)([(0,n.$)("esri.views.interactive.tooltip.TranslateVertexTooltipInfo")],p);let d=class extends a.w{constructor(e){super(e),this.type="translate-vertex-z",this.distance=o.r7,this.elevation=null}clear(){this.distance=o.r7,this.elevation=null}};(0,s._)([(0,r.MZ)()],d.prototype,"type",void 0),(0,s._)([(0,r.MZ)()],d.prototype,"distance",void 0),(0,s._)([(0,r.MZ)()],d.prototype,"elevation",void 0),d=(0,s._)([(0,n.$)("esri.views.interactive.tooltip.TranslateVertexZTooltipInfo")],d);let v=class extends a.w{constructor(e){super(e),this.type="translate-vertex-xy",this.distance=o.r7,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=o.r7,this.elevation=null,this.area=null,this.totalLength=null}};(0,s._)([(0,r.MZ)()],v.prototype,"type",void 0),(0,s._)([(0,r.MZ)()],v.prototype,"distance",void 0),(0,s._)([(0,r.MZ)()],v.prototype,"elevation",void 0),(0,s._)([(0,r.MZ)()],v.prototype,"area",void 0),(0,s._)([(0,r.MZ)()],v.prototype,"totalLength",void 0),v=(0,s._)([(0,n.$)("esri.views.interactive.tooltip.TranslateVertexXYTooltipInfo")],v)},65334:(e,t,i)=>{i.d(t,{n:()=>S});var s=i(7743),o=i(5262),r=i(91814),n=i(80347),a=i(19913),h=i(42722),c=i(87368),l=i(45660),p=i(21403);function d(e,t,i=e.hasZ){const r=(0,p.l)(e.spatialReference),d=(0,o.B5)(r);if(null==d)return null;const _=(e,t)=>!(t.length<2||((0,n.s)(e,t[0],t[1],i&&t[2]||0),0));let m=0;for(const i of e.rings){const s=i.length;if(s<3)continue;const{positionsWorldCoords:o}=t;for(;o.length<s;)o.push((0,a.vt)());const p=v,d=(0,n.s)(u,0,0,0),g=1/s;for(let t=0;t<s;t++){if(!_(p,i[t]))return null;if(!(0,h.F)(p,e.spatialReference,o[t],r))return null;(0,n.r)(d,d,o[t],g)}const f=(0,c.Cr)(o[0],o[1],d,(0,c.LV)());if(0===(0,n.p)((0,c.Qj)(f)))continue;for(let e=0;e<s;e++)(0,c.Z1)(f,d,o[e],o[e]);const x=y(o);for(let e=0;e<x.length;e+=3)m+=(0,l.Fm)(o[x[e]],o[x[e+1]],o[x[e+2]])}return(0,s.gT)(m,d)}const v=(0,a.vt)(),u=(0,a.vt)();function y(e){return(0,r.e)(function(e){const t=new Float64Array(2*e.length);for(let i=0;i<e.length;++i){const s=e[i],o=2*i;t[o]=s[0],t[o+1]=s[1]}return t}(e),[],2)}i(3313);var _=i(65670),m=i(99269);const g=(0,a.vt)();var f=i(22538),x=i(7540),G=i(44153);function M(e){const{spatialReference:t}=e;return(0,x.M)(t,w,b,V,e)}function w(e){return(0,s.gT)(Math.abs((0,f.qy)([e],"square-meters")[0]),"square-meters")}function b(e){try{return(0,s.gT)(Math.abs((0,_.geodesicArea)(e,"square-meters")),"square-meters")}catch(e){return null}}function V(e){const t=[];return function({hasZ:e,spatialReference:t,rings:i},s,o=0){const r=(0,m.Yz)(t);if(null==r)return!1;const a=e?e=>e:e=>(0,n.s)(g,e[0],e[1],o);for(const e of i){const t=[];for(const i of e){const e=[0,0,o];r(a(i),0,e,0),t.push(e)}s.push(t)}return!0}(e,t)?(0,s.gT)(Math.abs((0,f.qy)([{type:"polygon",rings:t,spatialReference:G.A.WGS84}],"square-meters")[0]),"square-meters"):null}function S(e,t={positionsWorldCoords:[]}){return function(e,t,i={positionsWorldCoords:[]}){if("on-the-ground"===t){const t=M(e);return null!=t?t:function(e,t={positionsWorldCoords:[]}){return d(e,t,!1)}(e,i)}return function(e,t={positionsWorldCoords:[]}){return d(e,t)}(e,i)}(e,"on-the-ground",t)}}}]);