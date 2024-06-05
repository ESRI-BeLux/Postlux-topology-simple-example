"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[2629],{62629:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h}),r(3313);var s=r(94477),i=r(71521),o=r(1523),l=r(86924),n=r(17890),a=r(47425),c=r(77691),m=r(20503),f=r(68607),u=r(45501),p=r(486),S=r(8e3),d=r(8977);class h{convertVectorFieldData(e){const t=i.A.fromJSON(e.pixelBlock),r=(0,m.FI)(t,e.type);return Promise.resolve(null!=r?r.toJSON():null)}computeStatisticsHistograms(e){const t=i.A.fromJSON(e.pixelBlock),r=(0,c.eH)(t);return Promise.resolve(r)}async decode(e){const t=await(0,o.D)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.A.fromJSON(e.pixelBlock),e.extent=e.extent?S.A.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(e){this.symbolizer=u.A.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,n.vt)(e.rasterFunctionJSON)}async process(e){const t=this.rasterFunction.process({extent:S.A.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>null!=e?i.A.fromJSON(e):null)),primaryPixelSizes:e.primaryPixelSizes?.map((e=>null!=e?d.A.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return null!=t?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.A.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(e){const t=(0,c.f4)(i.A.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,l.lD)(i.A.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,!1===e.useBilinear);return t&&t.forEach(((e,r)=>{t.set(r,e?.toJSON())})),Promise.resolve(t)}clipTile(e){const t=i.A.fromJSON(e.pixelBlock),r=(0,l.J$)({...e,pixelBlock:t});return Promise.resolve(r?.toJSON())}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map((e=>e?new i.A(e):null)),r=(0,l.z7)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let s,o=r;return e.coefs&&(o=(0,l.$i)(r,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(s=(0,l.QF)(e.destDimension,e.gcsGrid),o=(0,m.Y2)(o,e.isUV?"vector-uv":"vector-magdir",s)),{pixelBlock:o?.toJSON(),localNorthDirections:s}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:i}=await(0,p.CW)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:i.buffer},transferList:[s.buffer,i.buffer]}}async getProjectionOffsetGrid(e){const t=S.A.fromJSON(e.projectedExtent),r=S.A.fromJSON(e.srcBufferExtent);let i=null;e.datumTransformationSteps&&(i=new s.A({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,a.xh)(t.spatialReference,r.spatialReference,i))&&await(0,a.Hh)();const o=e.rasterTransform?(0,f.l)(e.rasterTransform):null;return(0,a.l0)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:i,rasterTransform:o})}}}}]);