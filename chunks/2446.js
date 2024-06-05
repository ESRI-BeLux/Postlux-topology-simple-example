"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[2446],{52790:(e,t,i)=>{i.d(t,{d:()=>ue});var s=i(3223),a=i(62991),r=i(84977),n=i(15565),l=i(57725),o=i(48156),u=i(37623),c=i(5262),h=i(34561),d=i(46373),p=i(2532),f=i(70040),m=i(56053),y=i(87249),g=i(67488),x=i(5525),_=i(91700),F=i(76984),w=i(94832);const S=new class{constructor(e,t){this._cache=new _.q(e),this._invalidCache=new _.q(t)}get(e,t){const i=`${t.uid}:${e}`,s=this._cache.get(i);if(s)return s;if(null!=this._invalidCache.get(i))return null;try{const s=F.WhereClause.create(e,t);return this._cache.put(i,s),s}catch(e){return this._invalidCache.put(i,e),null}}getError(e,t){const i=`${t.uid}:${e}`;return this._invalidCache.get(i)??null}}(50,500),I="unsupported-query",v=" as ",R=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),A=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),T=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...R,...A]);function b(e,t,i={}){const s=Q(t,e);if(!s){const i=S.getError(t,e);throw new a.A(I,"invalid SQL expression",{expression:t,error:i})}const r=i.expressionName||"expression";if(i.validateStandardized&&!s.isStandardized)throw new a.A(I,`${r} is not standard`,{expression:t});if(i.validateAggregate&&!s.isAggregate)throw new a.A(I,`${r} does not contain a valid aggregate function`,{expression:t});return s.fieldNames}function C(e,t,i,s,r){if(!i)return!0;const n="having clause",l=b(e,i,{validateAggregate:!0,expressionName:n});q(e,t,l,{expressionName:n,query:r});const o=Q(i,e),u=o?.getExpressions().every((t=>{const{aggregateType:i,field:a}=t,r=e.get(a)?.name;return s.some((t=>{const{onStatisticField:s,statisticType:a}=t,n=e.get(s)?.name;return n===r&&a.toLowerCase().trim()===i}))}));if(!u)throw new a.A(I,"expressions in having clause should also exist in outStatistics",{having:i});return!0}function Q(e,t){return e?S.get(e,t):null}function M(e){return/\((.*?)\)/.test(e)?e:e.split(v)[0]}function E(e){return e.split(v)[1]}function q(e,t,i,s={}){const r=new Map;if(function(e,t,i,s,a){const r=a.includes("*")?[...i,...a.filter((e=>"*"!==e))]:a;for(const a of r)if(t.get(a))V(e,t,i,s,a);else try{const r=b(t,M(a),{validateStandardized:!0});for(const a of r)V(e,t,i,s,a)}catch(t){e.set(a,{type:"expression-error",expression:a,error:t})}}(r,e,t,s.allowedFieldTypes??T,i),r.size){const e=s.expressionName??"expression";throw new a.A(I,`${e} contains invalid or missing fields`,{errors:Array.from(r.values()),query:s.query})}}function V(e,t,i,s,a){const r=t.get(a);r?i.has(r.name)?"all"!==s&&!1===s?.has(r.type)&&e.set(a,{type:"invalid-type",fieldName:r.name,fieldType:w.m.fromJSON(r.type),allowedFieldTypes:Array.from(s,(e=>w.m.fromJSON(e)))}):e.set(a,{type:"missing-field",fieldName:r.name}):e.set(a,{type:"invalid-field",fieldName:a})}var z=i(84880),D=i(48277),G=i(52557),P=i(23064),N=i(34475),O=i(66220),j=i(46227),B=i(98310),Z=i(76408),k=i(83911);class L{constructor(e,t,i){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues??!1,this.fieldsIndex=i,this.featureAdapter=t;const s=e.outFields;if(s&&!s.includes("*")){this.outFields=s;let e=0;for(const t of s){const s=M(t),a=this.fieldsIndex.get(s),r=a?null:Q(s,i),n=a?a.name:E(t)||"FIELD_EXP_"+e++;this._fieldDataCache.set(t,{alias:n,clause:r})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach((e=>this.getAttributes(e))),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,i){const s=i?i.name:t;let a=null;return this._fieldDataCache.has(s)?a=this._fieldDataCache.get(s)?.clause:i||(a=Q(t,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:a})),i?this.featureAdapter.getAttribute(e,s):a?.calculateValue(e,this.featureAdapter)}getDataValues(e,t,i=!0){const s=t.normalizationType,a=t.normalizationTotal,r=this.fieldsIndex.get(t.field),n=(0,j.zD)(r)||(0,j.Ah)(r),l=(0,j.OH)(r);return e.map((e=>{let r=t.field&&this.getFieldValue(e,t.field,this.fieldsIndex.get(t.field));if(t.field2?(r=`${(0,Z.gJ)(r)}${t.fieldDelimiter}${(0,Z.gJ)(this.getFieldValue(e,t.field2,this.fieldsIndex.get(t.field2)))}`,t.field3&&(r=`${r}${t.fieldDelimiter}${(0,Z.gJ)(this.getFieldValue(e,t.field3,this.fieldsIndex.get(t.field3)))}`)):"string"==typeof r&&i&&(n?r=r?new Date(r).getTime():null:l&&(r=r?(0,B.rb)(r):null)),s&&Number.isFinite(r)){const i="field"===s&&t.normalizationField?this.getFieldValue(e,t.normalizationField,this.fieldsIndex.get(t.normalizationField)):null;r=(0,Z.zS)(r,s,i,a)}return r}))}async getExpressionValues(e,t,i,s,a){const{arcadeUtils:r}=await(0,k.lw)(),n=r.hasGeometryOperations(t);n&&await r.enableGeometryOperations();const l=r.createFunction(t),o=r.getViewInfo(i),u={fields:this.fieldsIndex.fields};return e.map((e=>{const t={attributes:this.featureAdapter.getAttributes(e),layer:u,geometry:n?{...(0,z.pL)(s.geometryType,s.hasZ,s.hasM,this.featureAdapter.getGeometry(e)),spatialReference:i?.spatialReference}:null},c=r.createExecContext(t,o,a);return r.executeFunction(l,c)}))}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:Q(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testFeature(e,this.featureAdapter)??!1}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:Q(t,this.fieldsIndex)}),this._fieldDataCache.get(t)?.clause?.testSet(e,this.featureAdapter)??!1}_processAttributesForOutFields(e){const t=this.outFields;if(!t?.length)return this.featureAdapter.getAttributes(e);const i={};for(const s of t){const{alias:t,clause:a}=this._fieldDataCache.get(s);i[t]=a?a.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,t)}return i}_processAttributesForDistinctValues(e){if(null==e||!this.returnDistinctValues)return e;const t=this.outFields,i=[];if(t)for(const s of t){const{alias:t}=this._fieldDataCache.get(s);i.push(e[t])}else for(const t in e)i.push(e[t]);const s=`${(t||["*"]).join(",")}=${i.join(",")}`;let a=this._returnDistinctMap.get(s)||0;return this._returnDistinctMap.set(s,++a),a>1?null:e}}var H=i(23756);class ${constructor(e,t,i){this.items=e,this.query=t,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new L(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:i,outStatistics:s}=this.query,a=t?.length;if(!a)return 1;const r=new Map,n=new Map,l=new Set;for(const a of s){const{statisticType:s}=a,o="exceedslimit"!==s?a.onStatisticField:void 0;if(!n.has(o)){const i=[];for(const s of t){const t=this._getAttributeValues(e,s,r);i.push(t)}n.set(o,this._calculateUniqueValues(i,e.returnDistinctValues))}const u=n.get(o);for(const t in u){const{data:s,items:a}=u[t],r=s.join(",");i&&!e.validateItems(a,i)||l.add(r)}}return l.size}async createQueryResponse(){let e;if(e=this.query.outStatistics?this.query.outStatistics.some((e=>"exceedslimit"===e.statisticType))?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;(0,g.fn)(this.query.outSR)&&!(0,g.aI)(t.spatialReference,this.query.outSR)?e.queryGeometry=(0,z.ag)({spatialReference:this.query.outSR,...(0,D.Cv)(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=(0,z.ag)({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const i=this.featureAdapter,s=J(this.hasZ,this.hasM),{point:a,mode:r}=e,n="number"==typeof e.distance?e.distance:e.distance.x,l="number"==typeof e.distance?e.distance:e.distance.y,o={candidates:[]},u="esriGeometryPolygon"===this.geometryType,c=this._getPointCreator(r,this.spatialReference,t),h=new W(null,0),d=new W(null,0),p={x:0,y:0,z:0};for(const t of this.items){const r=i.getGeometry(t);if(null==r)continue;const{coords:f,lengths:m}=r;if(h.coords=f,d.coords=f,e.returnEdge){let e=0;for(let r=0;r<m.length;r++){const u=m[r];for(let r=0;r<u;r++,e+=s){const f=h;if(f.coordsIndex=e,r!==u-1){const r=d;r.coordsIndex=e+s;const u=p;U(p,a,f,r);const h=(a.x-u.x)/n,m=(a.y-u.y)/l,y=h*h+m*m;y<=1&&o.candidates.push((0,H.P)(i.getObjectId(t),c(u),Math.sqrt(y),c(f),c(r)))}}}}if("none"!==e.vertexMode){const r=u?f.length-s:f.length;if("all"===e.vertexMode)for(let e=0;e<r;e+=s){const s=h;s.coordsIndex=e;const r=(a.x-s.x)/n,u=(a.y-s.y)/l,d=r*r+u*u;d<=1&&o.candidates.push((0,H.k)(i.getObjectId(t),c(s),Math.sqrt(d)))}else if("ends"===e.vertexMode){const e=[0];u||e.push(f.length-s);for(const s of e){const e=h;e.coordsIndex=s;const r=(a.x-e.x)/n,u=(a.y-e.y)/l,d=r*r+u*u;d<=1&&o.candidates.push((0,H.k)(i.getObjectId(t),c(e),Math.sqrt(d)))}}}}return o.candidates.sort(((e,t)=>e.distance-t.distance)),o}_getPointCreator(e,t,i){const s=null==i||(0,g.aI)(t,i)?e=>e:e=>(0,D.Cv)(e,t,i),{hasZ:a}=this;return"3d"===e?a?({x:e,y:t,z:i})=>s({x:e,y:t,z:i}):({x:e,y:t})=>s({x:e,y:t,z:0}):({x:e,y:t})=>s({x:e,y:t})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,minValue:n,maxValue:l,scale:o,timeZone:u}=e,c=this.fieldsIndex.get(t),h=(0,j.vE)(c)||(0,j.zD)(c)||(0,j.Ah)(c),d=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:o,timeZone:u}),p=(0,Z.Vb)({normalizationType:a,normalizationField:s,minValue:n,maxValue:l}),f={value:.5,fieldType:c?.type},m=(0,j.yM)(c)?(0,Z.z9)({values:d,supportsNullCount:p,percentileParams:f}):(0,Z.G_)({values:d,minValue:n,maxValue:l,useSampleStdDev:!a,supportsNullCount:p,percentileParams:f});return(0,Z.oZ)(m,h)}async createUniqueValuesResponse(e){const{field:t,valueExpression:i,domains:s,returnAllCodedValues:a,scale:r,timeZone:n}=e,l=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:i,scale:r,timeZone:n},!1),o=(0,Z.b3)(l);return(0,Z.lv)(o,s,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:o,maxValue:u,numClasses:c,scale:h,timeZone:d}=e,p=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:h,timeZone:d}),f=(0,Z.Rw)(p,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:o,maxValue:u,numClasses:c});return(0,Z.jM)(f,n)}async createHistogramResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:o,maxValue:u,numBins:c,scale:h,timeZone:d}=e,p=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:h,timeZone:d});return(0,Z.$y)(p,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:n,standardDeviationInterval:l,minValue:o,maxValue:u,numBins:c})}_sortFeatures(e,t,i){if(e.length>1&&t?.length)for(const s of t.reverse()){const t=s.split(" "),a=t[0],r=this.fieldsIndex.get(a),n=!!t[1]&&"desc"===t[1].toLowerCase(),l=(0,Z.FM)(r?.type,n);e.sort(((e,t)=>{const s=i(e,a,r),n=i(t,a,r);return l(s,n)}))}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:i,hasM:s,hasZ:a,objectIdField:r,spatialReference:n}=this,{outFields:l,outSR:o,quantizationParameters:u,resultRecordCount:c,resultOffset:h,returnZ:d,returnM:p}=e,f=null!=c&&t.length>(h||0)+c,m=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map((e=>this.fieldsIndex.get(e))));return{exceededTransferLimit:f,features:this._createFeatures(e,t),fields:m,geometryType:i,hasM:s&&p,hasZ:a&&d,objectIdFieldName:r,spatialReference:(0,z.ag)(o||n),transform:u&&(0,O.VV)(u)||null}}_createFeatures(e,t){const i=new L(e,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:a}=this,{orderByFields:r,quantizationParameters:n,returnGeometry:l,returnCentroid:o,maxAllowableOffset:u,resultOffset:c,resultRecordCount:h,returnZ:d=!1,returnM:p=!1}=e,f=a&&d,m=s&&p;let y=[],g=0;const x=[...t];if(this._sortFeatures(x,r,((e,t,s)=>i.getFieldValue(e,t,s))),this.geometryType&&(l||o)){const e=(0,O.VV)(n)??void 0,t="esriGeometryPolygon"===this.geometryType||"esriGeometryPolyline"===this.geometryType;if(l&&!o)for(const s of x){const a=this.featureAdapter.getGeometry(s),r={attributes:i.getAttributes(s),geometry:(0,z.pL)(this.geometryType,this.hasZ,this.hasM,a,u,e,f,m)};t&&a&&!r.geometry&&(r.centroid=(0,z.LQ)(this,this.featureAdapter.getCentroid(s,this),e)),y[g++]=r}else if(!l&&o)for(const t of x)y[g++]={attributes:i.getAttributes(t),centroid:(0,z.LQ)(this,this.featureAdapter.getCentroid(t,this),e)};else for(const t of x)y[g++]={attributes:i.getAttributes(t),centroid:(0,z.LQ)(this,this.featureAdapter.getCentroid(t,this),e),geometry:(0,z.pL)(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(t),u,e,f,m)}}else for(const e of x){const t=i.getAttributes(e);t&&(y[g++]={attributes:t})}const _=c||0;if(null!=h){const e=_+h;y=y.slice(_,Math.min(y.length,e))}return y}_createExceedsLimitQueryResponse(e){let t=!1,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const t of e.outStatistics??[])if("exceedslimit"===t.statisticType){i=null!=t.maxPointCount?t.maxPointCount:Number.POSITIVE_INFINITY,s=null!=t.maxRecordCount?t.maxRecordCount:Number.POSITIVE_INFINITY,a=null!=t.maxVertexCount?t.maxVertexCount:Number.POSITIVE_INFINITY;break}if("esriGeometryPoint"===this.geometryType)t=this.items.length>i;else if(this.items.length>s)t=!0;else{const e=J(this.hasZ,this.hasM),i=this.featureAdapter;t=this.items.reduce(((e,t)=>{const s=i.getGeometry(t);return e+(null!=s&&s.coords.length||0)}),0)/e>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},i=[],s=new Map,a=new Map,r=new Map,n=new Map,l=new L(e,this.featureAdapter,this.fieldsIndex),o=e.outStatistics,{groupByFieldsForStatistics:u,having:c,orderByFields:h,resultRecordCount:d}=e,p=u?.length,f=!!p,m=f?u[0]:null,y=f&&!this.fieldsIndex.get(m);for(const e of o??[]){const{outStatisticFieldName:o,statisticType:h}=e,d=e,g="exceedslimit"!==h?e.onStatisticField:void 0,x="percentile_disc"===h||"percentile_cont"===h,_="EnvelopeAggregate"===h||"CentroidAggregate"===h||"ConvexHullAggregate"===h,F=f&&1===p&&(g===m||y)&&"count"===h;if(f){if(!r.has(g)){const e=[];for(const t of u){const i=this._getAttributeValues(l,t,s);e.push(i)}r.set(g,this._calculateUniqueValues(e,!_&&l.returnDistinctValues))}const e=r.get(g);if(!e)continue;const t=Object.keys(e);for(const i of t){const{count:t,data:a,items:r,itemPositions:h}=e[i],p=a.join(",");if(!c||l.validateItems(r,c)){const e=n.get(p)||{attributes:{}};if(_){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:t,outStatisticFieldName:i}=await this._getAggregateGeometry(d,r);e.aggregateGeometries[i]=t}else{let i=null;if(F)i=t;else{const e=this._getAttributeValues(l,g,s),t=h.map((t=>e[t]));i=x&&"statisticParameters"in d?this._getPercentileValue(d,t):this._getStatisticValue(d,t,null,l.returnDistinctValues)}e.attributes[o]=i}let i=0;u.forEach(((t,s)=>e.attributes[this.fieldsIndex.get(t)?t:"EXPR_"+ ++i]=a[s])),n.set(p,e)}}}else if(_){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:e,outStatisticFieldName:i}=await this._getAggregateGeometry(d,this.items);t.aggregateGeometries[i]=e}else{const e=this._getAttributeValues(l,g,s);t.attributes[o]=x&&"statisticParameters"in d?this._getPercentileValue(d,e):this._getStatisticValue(d,e,a,l.returnDistinctValues)}const w="min"!==h&&"max"!==h||!(0,j.yM)(this.fieldsIndex.get(g))&&!this._isAnyDateField(g)?null:this.fieldsIndex.get(g)?.type;i.push({name:o,alias:o,type:w||"esriFieldTypeDouble"})}const g=f?Array.from(n.values()):[t];return this._sortFeatures(g,h,((e,t)=>e.attributes[t])),d&&(g.length=Math.min(d,g.length)),{fields:i,features:g}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return(0,j.vE)(t)||(0,j.zD)(t)||(0,j.Ah)(t)||(0,j.OH)(t)}async _getAggregateGeometry(e,t){const{convexHull:s,union:a}=await i.e(344).then(i.bind(i,30344)),{statisticType:r,outStatisticFieldName:n}=e,{featureAdapter:l,spatialReference:o,geometryType:u,hasZ:c,hasM:h}=this,d=t.map((e=>(0,z.pL)(u,c,h,l.getGeometry(e)))),p=s(o,d,!0)[0],f={aggregateGeometries:null,outStatisticFieldName:null};if("EnvelopeAggregate"===r){const e=p?(0,N.v)(p):(0,N.HA)(a(o,d));f.aggregateGeometries={...e,spatialReference:o},f.outStatisticFieldName=n||"extent"}else if("CentroidAggregate"===r){const e=p?(0,P.l8)(p):(0,P.Z4)((0,N.HA)(a(o,d)));f.aggregateGeometries={x:e[0],y:e[1],spatialReference:o},f.outStatisticFieldName=n||"centroid"}else"ConvexHullAggregate"===r&&(f.aggregateGeometries=p,f.outStatisticFieldName=n||"convexHull");return f}_getStatisticValue(e,t,i,s){const{onStatisticField:a,statisticType:r}=e;let n=null;return n=i?.has(a)?i.get(a):(0,j.yM)(this.fieldsIndex.get(a))||this._isAnyDateField(a)?(0,Z.z9)({values:t,returnDistinct:s}):(0,Z.G_)({values:s?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(a,n),n["var"===r?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:s,statisticType:a}=e,{value:r,orderBy:n}=s,l=this.fieldsIndex.get(i);return(0,Z.qg)(t,{value:r,orderBy:n,fieldType:l?.type,isDiscrete:"percentile_disc"===a})}_getAttributeValues(e,t,i){if(i.has(t))return i.get(t);const s=this.fieldsIndex.get(t),a=this.items.map((i=>e.getFieldValue(i,t,s)));return i.set(t,a),a}_calculateUniqueValues(e,t){const i={},s=this.items,a=s.length;for(let r=0;r<a;r++){const a=s[r],n=[];for(const t of e)n.push(t[r]);const l=n.join(",");null==i[l]?i[l]={count:1,data:n,items:[a],itemPositions:[r]}:(t||i[l].count++,i[l].items.push(a),i[l].itemPositions.push(r))}return i}async _getDataValues(e,t=!0){const i=new L(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:s,scale:a,timeZone:r}=e;return s?i.getExpressionValues(this.items,s,{viewingMode:"map",scale:a,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},r):i.getDataValues(this.items,(0,n.o8)(e),t)}}function U(e,t,i,s){const a=s.x-i.x,r=s.y-i.y,n=a*a+r*r,l=(t.x-i.x)*a+(t.y-i.y)*r,o=Math.min(1,Math.max(0,l/n));e.x=i.x+a*o,e.y=i.y+r*o}function J(e,t){return e?t?4:3:t?3:2}class W{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}var Y=i(18160),X=i(25831);const K="unsupported-query";async function ee(e,{fieldsIndex:t,geometryType:i,spatialReference:s,availableFields:r}){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption&&"xyFootprint"!==e.multipatchOption||e.pixelSize||e.relationParam||e.text)throw new a.A(K,"Unsupported query options",{query:e});return te(t,r,e),function(e,t,i){const{outStatistics:s,groupByFieldsForStatistics:r,having:n}=i,l=r?.length,o=s?.length;if(n){if(!l||!o)throw new a.A(K,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:i});C(e,t,n,s,i)}if(o){if(null==(u=s)||!u.every((e=>"exceedslimit"!==e.statisticType)))return;const n=s.map((e=>e.onStatisticField)).filter(Boolean);q(e,t,n,{expressionName:"onStatisticFields",query:i}),l&&q(e,t,r,{expressionName:"groupByFieldsForStatistics",query:i});for(const r of s){const{onStatisticField:s,statisticType:n}=r;if("percentile_disc"!==n&&"percentile_cont"!==n||!("statisticParameters"in r))e.get(s)&&"count"!==n&&"min"!==n&&"max"!==n&&q(e,t,[s],{expressionName:`outStatistics with '${n}' statistic type`,allowedFieldTypes:ie,query:i});else{const{statisticParameters:e}=r;if(!e)throw new a.A(K,"statisticParameters should be set for percentile type",{definition:r,query:i})}}}var u}(t,r,e),Promise.all([(0,X.c0)(e,i,s),(0,D.Nk)(s,e.outSR)]).then((()=>e))}function te(e,t,i){const{outFields:s,orderByFields:r,returnDistinctValues:n,outStatistics:l}=i,o=l?l.map((e=>e.outStatisticFieldName&&e.outStatisticFieldName.toLowerCase())).filter(Boolean):[];if(r&&r.length>0){const s=" asc",a=" desc",n=r.map((e=>{const t=e.toLowerCase();return t.includes(s)?t.split(s)[0]:t.includes(a)?t.split(a)[0]:e})).filter((e=>!o.includes(e)));q(e,t,n,{expressionName:"orderByFields",query:i})}if(s&&s.length>0)q(e,t,s,{expressionName:"outFields",query:i,allowedFieldTypes:"all"});else if(n)throw new a.A(K,"outFields should be specified for returnDistinctValues",{query:i});!function(e,t,i,s){if(!i)return!0;const a="where clause";q(e,t,b(e,i,{validateStandardized:!0,expressionName:a}),{expressionName:a,query:s})}(e,t,i.where,i)}const ie=new Set([...R,...A]);async function se(e,t,i,s){let r=[];if(i.valueExpression){const{arcadeUtils:e}=await(0,k.lw)();r=e.extractFieldNames(i.valueExpression)}if(i.field&&r.push(i.field),i.field2&&r.push(i.field2),i.field3&&r.push(i.field3),i.normalizationField&&r.push(i.normalizationField),!r.length&&!i.valueExpression)throw new a.A(K,"field or valueExpression is required",{params:i});q(e,t,r,{expressionName:"statistics",query:s})}var ae=i(86089),re=i(51387),ne=i(49437);const le=new o.F(2e6);let oe=0;class ue{constructor(e){this._geometryQueryCache=null,this._changeHandle=null,this.capabilities={query:G.F},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",(()=>this.clearCache())),this.timeInfo=e.timeInfo,e.cacheSpatialQueries&&(this._geometryQueryCache=new o.Mn(oe+++"$$",le)),this.fieldsIndex=(0,r.Wj)(e.fieldsIndex)?e.fieldsIndex:re.A.fromJSON(e.fieldsIndex),!e.availableFields||1===e.availableFields.length&&"*"===e.availableFields[0]?this.availableFields=new Set(this.fieldsIndex.fields.map((e=>e.name))):this.availableFields=new Set(e.availableFields.map((e=>this.fieldsIndex.get(e)?.name)).filter((e=>null!=e))),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=(0,l.xt)(this._frameTask),this.clearCache(),(0,l.pR)(this._geometryQueryCache),this._changeHandle=(0,l.xt)(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._geometryQueryCache?.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const i=(0,u.Mq)(t);try{return(await this._executeQuery(e,{},i)).createQueryResponse()}catch(t){if(t!==Y.v8)throw t;return new $([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const i=(0,u.Mq)(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},i)).createQueryResponseForCount()}catch(e){if(e!==Y.v8)throw e;return 0}}async executeQueryForExtent(e,t){const i=(0,u.Mq)(t),s=e.outSR;try{const t=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},i),a=t.size;return a?{count:a,extent:await this._getBounds(t.items,t.spatialReference,s||this.spatialReference)}:{count:0,extent:null}}catch(e){if(e===Y.v8)return{count:0,extent:null};throw e}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then((e=>Array.from(e)))}async executeQueryForIdSet(e,t){const i=(0,u.Mq)(t);try{const t=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},i),s=t.items,a=new Set;return await this._reschedule((()=>{for(const e of s)a.add(t.featureAdapter.getObjectId(e))}),i),a}catch(e){if(e===Y.v8)return new Set;throw e}}async executeQueryForSnapping(e,t){const i=(0,u.Mq)(t),{point:s,distance:a,returnEdge:r,vertexMode:l}=e;if(!r&&"none"===l)return{candidates:[]};let o=(0,n.o8)(e.query);o=await this._schedule((()=>(0,Y.T2)(o,this.definitionExpression,this.spatialReference)),i),o=await this._reschedule((()=>ee(o,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference})),i);const c=!(0,g.aI)(s.spatialReference,this.spatialReference);c&&await(0,D.Nk)(s.spatialReference,this.spatialReference);const h="number"==typeof a?a:a.x,d="number"==typeof a?a:a.y,p={xmin:s.x-h,xmax:s.x+h,ymin:s.y-d,ymax:s.y+d,spatialReference:s.spatialReference},f=c?(0,D.Cv)(p,this.spatialReference):p;if(!f)return{candidates:[]};const x=(await(0,y.el)((0,m.rS)(s),null,{signal:i}))[0],_=(await(0,y.el)((0,m.rS)(f),null,{signal:i}))[0];if(null==x||null==_)return{candidates:[]};const F=new $(await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(_.toJSON()))),i),o,this);await this._reschedule((()=>this._executeObjectIdsQuery(F)),i),await this._reschedule((()=>this._executeTimeQuery(F)),i),await this._reschedule((()=>this._executeAttributesQuery(F)),i),await this._reschedule((()=>this._executeGeometryQueryForSnapping(F,i)),i);const w=x.toJSON(),S=c?(0,D.Cv)(w,this.spatialReference):w,I=c?Math.max(f.xmax-f.xmin,f.ymax-f.ymin)/2:a;return F.createSnappingResponse({...e,point:S,distance:I},s.spatialReference)}async executeQueryForLatestObservations(e,t){const i=(0,u.Mq)(t);if(!this.timeInfo?.trackIdField)throw new a.A("unsupported-query","Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const t=await this._executeQuery(e,{},i);return await this._reschedule((()=>this._filterLatest(t)),i),t.createQueryResponse()}catch(t){if(t!==Y.v8)throw t;return new $([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,i){const s=(0,u.Mq)(i),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,i){const s=(0,u.Mq)(i),{field:a,field2:r,field3:n,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:a,field2:r,field3:n,valueExpression:l},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,i){const s=(0,u.Mq)(i),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,i){const s=(0,u.Mq)(i),{field:a,normalizationField:r,valueExpression:n}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:n},s)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=(0,u.Mq)(e);this._timeExtentPromise||=(0,ae.W)(this.timeInfo,this.featureStore);const[i,s]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return(0,u.Te)(t),{fullExtent:i,timeExtent:s}}async _getBounds(e,t,i){const s=(0,d.hZ)((0,d.vt)(),d.qv);await this.featureStore.forEachBounds(e,(e=>(0,d.RF)(s,e)));const a={xmin:s[0],ymin:s[1],xmax:s[3],ymax:s[4],spatialReference:(0,z.ag)(this.spatialReference)};this.hasZ&&isFinite(s[2])&&isFinite(s[5])&&(a.zmin=s[2],a.zmax=s[5]);const r=(0,D.Cv)(a,t,i);if(r.spatialReference=(0,z.ag)(i),r.xmax-r.xmin==0){const e=(0,c.GA)(r.spatialReference);r.xmin-=e,r.xmax+=e}if(r.ymax-r.ymin==0){const e=(0,c.GA)(r.spatialReference);r.ymin-=e,r.ymax+=e}if(this.hasZ&&null!=r.zmin&&null!=r.zmax&&r.zmax-r.zmin==0){const e=(0,c.GA)(r.spatialReference);r.zmin-=e,r.zmax+=e}return r}_getFullExtent(){return this._fullExtentPromise||="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then((e=>this._getBounds(e,this.spatialReference,this.spatialReference))),this._fullExtentPromise}async _schedule(e,t){return null!=this._frameTask?this._frameTask.schedule(e,t):e(ne.Bb)}async _reschedule(e,t){return null!=this._frameTask?this._frameTask.reschedule(e,t):e(ne.Bb)}async _getAllFeaturesQueryEngineResult(e){return new $(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(null==this._allFeaturesPromise){const e=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach((t=>e.push(t)))})().then((()=>e))}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,i){e=(0,n.o8)(e),e=await this._schedule((()=>(0,Y.GC)(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>ee(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference})),i),e={...e,...t};const s=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),a=await this._reschedule((()=>this._executeGeometryQuery(e,s,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(a)),i),await this._reschedule((()=>this._executeObjectIdsQuery(a)),i),await this._reschedule((()=>this._executeTimeQuery(a)),i),await this._reschedule((()=>this._executeAttributesQuery(a)),i),a}async _executeSceneFilterQuery(e,t){if(null==e.sceneFilter)return null;const{outSR:i,returnGeometry:s,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,n=e.sceneFilter.geometry,l=null==r||(0,g.aI)(r,n.spatialReference)?n:(0,D.Cv)(n,r);if(!l)return null;const o=s||a,u=(0,g.fn)(i)&&!(0,g.aI)(this.spatialReference,i)&&o?async e=>this._project(e,i):e=>e,c=this.featureAdapter,h=await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(l))),t);if("disjoint"===e.sceneFilter.spatialRelationship){if(!h.length)return null;const i=new Set;for(const e of h)i.add(c.getObjectId(e));const s=await this._reschedule((()=>this._getAllFeatures()),t),a=await this._reschedule((async()=>{const a=await(0,X.xt)("esriSpatialRelDisjoint",l,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(s,(e=>!i.has(c.getObjectId(e))||a(c.getGeometry(e))),t);return new $(r,e,this)}),t);return u(a)}if(!h.length)return new $([],e,this);if(this._canExecuteSinglePass(l,e))return u(new $(h,e,this));const d=await(0,X.xt)("esriSpatialRelContains",l,this.geometryType,this.hasZ,this.hasM),p=await this._runSpatialFilter(h,(e=>d(c.getGeometry(e))),t);return u(new $(p,e,this))}async _executeGeometryQuery(e,t,i){if(null!=t&&0===t.items.length)return t;e=null!=t?t.query:e;const{geometry:a,outSR:r,spatialRel:n,returnGeometry:l,returnCentroid:o}=e,u=this.featureStore.featureSpatialReference,c=!a||null==u||(0,g.aI)(u,a.spatialReference)?a:(0,D.Cv)(a,u),h=l||o,d=(0,g.fn)(r)&&!(0,g.aI)(this.spatialReference,r),p=this._geometryQueryCache&&null==t?d&&h?JSON.stringify({originalFilterGeometry:a,spatialRelationship:n,outSpatialReference:r}):JSON.stringify({originalFilterGeometry:a,spatialRelationship:n}):null,f=p?this._geometryQueryCache.get(p):null;if(null!=f)return new $(f,e,this);const m=async e=>(d&&h&&await this._project(e,r),p&&this._geometryQueryCache.put(p,e.items,e.items.length+1),e);if(!c)return m(null!=t?t:await this._getAllFeaturesQueryEngineResult(e));const y=this.featureAdapter;let x=await this._reschedule((()=>this._searchFeatures(this._getQueryBBoxes(a))),i);if("esriSpatialRelDisjoint"===n){if(!x.length)return m(null!=t?t:await this._getAllFeaturesQueryEngineResult(e));const s=new Set;for(const e of x)s.add(y.getObjectId(e));const a=null!=t?t.items:await this._reschedule((()=>this._getAllFeatures()),i),r=await this._reschedule((async()=>{const t=await(0,X.xt)(n,c,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(a,(e=>!s.has(y.getObjectId(e))||t(y.getGeometry(e))),i);return new $(r,e,this)}),i);return m(r)}if(null!=t){const e=new s.vW;x=x.filter((i=>(0,s.qh)(t.items,i,t.items.length,e)>=0))}if(!x.length){const t=new $([],e,this);return p&&this._geometryQueryCache.put(p,t.items,1),t}if(this._canExecuteSinglePass(c,e))return m(new $(x,e,this));const _=await(0,X.xt)(n,c,this.geometryType,this.hasZ,this.hasM),F=await this._runSpatialFilter(x,(e=>_(y.getGeometry(e))),i);return m(new $(F,e,this))}async _executeGeometryQueryForSnapping(e,t){const{query:i}=e,{spatialRel:s}=i;if(!e?.items?.length||!i.geometry||!s)return;const a=await(0,X.xt)(s,i.geometry,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(e.items,(e=>a(e.geometry)),t);e.items=r}_executeAggregateIdsQuery(e){if(0===e.items.length||!e.query.aggregateIds?.length||null==this.aggregateAdapter)return;const t=new Set;for(const i of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(i).forEach((e=>t.add(e)));const i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))))}_executeObjectIdsQuery(e){if(0===e.items.length||!e.query.objectIds?.length)return;const t=new Set(e.query.objectIds),i=this.featureAdapter.getObjectId;e.items=e.items.filter((e=>t.has(i(e))))}_executeTimeQuery(e){if(0===e.items.length)return;const t=(0,ae.I)(this.timeInfo,e.query.timeExtent,this.featureAdapter);null!=t&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(0===e.items.length)return;const t=Q(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter((e=>t.testFeature(e,this.featureAdapter)))}}async _runSpatialFilter(e,t,i){if(!t)return e;if(null==this._frameTask)return e.filter((e=>t(e)));let s=0;const a=new Array,r=async n=>{for(;s<e.length;){const l=e[s++];t(l)&&(a.push(l),n.madeProgress()),n.done&&await this._reschedule((e=>r(e)),i)}};return this._reschedule((e=>r(e)),i).then((()=>a))}_filterLatest(e){const{trackIdField:t,startTimeField:i,endTimeField:s}=this.timeInfo,a=s||i,r=new Map,n=this.featureAdapter.getAttribute;for(const i of e.items){const e=n(i,t),s=n(i,a),l=r.get(e);(!l||s>n(l,a))&&r.set(e,i)}e.items=Array.from(r.values())}_canExecuteSinglePass(e,t){const{spatialRel:i}=t;return(0,X.tC)(e)&&("esriSpatialRelEnvelopeIntersects"===i||"esriGeometryPoint"===this.geometryType&&("esriSpatialRelIntersects"===i||"esriSpatialRelContains"===i))}async _project(e,t){if(!t||(0,g.aI)(this.spatialReference,t))return e;const i=this.featureAdapter;let s;try{const e=await this._getFullExtent();s=(0,h.getTransformation)(this.spatialReference,t,e)}catch{}const a=await(0,D.lK)(e.items.map((e=>(0,z.pL)(this.geometryType,this.hasZ,this.hasM,i.getGeometry(e)))),this.spatialReference,t,s);return e.items=a.map(((t,s)=>i.cloneWithGeometry(e.items[s],(0,x.Ux)(t,this.hasZ,this.hasM)))),e}_getQueryBBoxes(e){if((0,X.tC)(e)){if((0,m.ZC)(e))return[(0,p.fA)(Math.min(e.xmin,e.xmax),Math.min(e.ymin,e.ymax),Math.max(e.xmin,e.xmax),Math.max(e.ymin,e.ymax))];if((0,m.Bi)(e))return e.rings.map((e=>(0,p.fA)(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1]))))}return[(0,f.Rg)((0,p.vt)(),e)]}async _searchFeatures(e){const t=new Set;await Promise.all(e.map((e=>this.featureStore.forEachInBounds(e,(e=>t.add(e))))));const i=Array.from(t.values());return t.clear(),i}async _executeQueryForStatistics(e,t,i){e=(0,n.o8)(e);try{e=await this._schedule((()=>(0,Y.GC)(e,this.definitionExpression,this.spatialReference)),i),e=await this._reschedule((()=>async function(e,t,{fieldsIndex:i,geometryType:s,spatialReference:r,availableFields:n}){if((e.distance??0)<0||null!=e.geometryPrecision||e.multipatchOption||e.pixelSize||e.relationParam||e.text||e.outStatistics||e.groupByFieldsForStatistics||e.having||e.orderByFields)throw new a.A(K,"Unsupported query options",{query:e});return te(i,n,e),Promise.all([se(i,n,t,e),(0,X.c0)(e,s,r),(0,D.Nk)(r,e.outSR)]).then((()=>e))}(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference})),i);const s=await this._reschedule((()=>this._executeSceneFilterQuery(e,i)),i),r=await this._reschedule((()=>this._executeGeometryQuery(e,s,i)),i);return await this._reschedule((()=>this._executeAggregateIdsQuery(r)),i),await this._reschedule((()=>this._executeObjectIdsQuery(r)),i),await this._reschedule((()=>this._executeTimeQuery(r)),i),await this._reschedule((()=>this._executeAttributesQuery(r)),i),r}catch(t){if(t!==Y.v8)throw t;return new $([],e,this)}}}},52557:(e,t,i)=>{i.d(t,{F:()=>s});const s={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByAnonymous:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},23756:(e,t,i)=>{function s(e,t,i){return{objectId:e,target:t,distance:i,type:"vertex"}}function a(e,t,i,s,a,r=!1){return{objectId:e,target:t,distance:i,type:"edge",start:s,end:a,draped:r}}i.d(t,{P:()=>a,k:()=>s})},60105:(e,t,i)=>{i.d(t,{T:()=>n});var s=i(91658),a=i(85747),r=i(65977);const n={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new a.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,s.Q)(new r.A,e.geometry,t.hasZ,t.hasM)),e.centroid)}}}]);