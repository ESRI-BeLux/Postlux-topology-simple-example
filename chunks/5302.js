"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[5302],{86270:(e,a,t)=>{t.d(a,{v:()=>n});var r=t(88426);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const n=await(0,r.V)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}},28904:(e,a,t)=>{t.d(a,{L:()=>o});var r=t(6480),n=t(38116),s=t(62991),i=t(37623),c=t(63457),l=t(83382),u=t(43305);async function o(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const t=new u.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=r.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,i.QP)(e)}return null}(e);null!=s&&(t.portal=new l.A({url:s}));try{return t.load({signal:e.signal})}catch(e){return(0,i.QP)(e),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const r=new u.default({portal:t.portal,id:t.id});return await r.load(),r}catch(e){return(0,i.QP)(e),null}}(o);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=f;const m=await d(f.url,o);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const t=(0,c.qg)(e);if(!t)throw new s.A("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,i=a.layerId;if(null==i)return{serverUrl:r};const l=y(a),u=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(u?.layers?.[0]||u?.tables?.[0])?.customParameters,d=e=>{const t={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(r,t)},f=d("anonymous").catch((()=>d("no-prompt"))),[m,p]=await Promise.all([f,l]),w=p?.layers,h=m.data&&m.data.layers;if(!Array.isArray(h))throw new Error("expected layers array");if(Array.isArray(w)){for(let e=0;e<Math.min(w.length,h.length);e++)if(w[e].id===i)return{serverUrl:r,layerId:h[e].id}}else if(null!=i&&i<h.length)return{serverUrl:r,layerId:h[i].id};throw new Error("could not find matching associated sublayer")}},97364:(e,a,t)=>{t.d(a,{S:()=>r});const r={BingMapsLayer:async()=>(await t.e(8050).then(t.bind(t,28050))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(8842),t.e(1903),t.e(6171),t.e(6280)]).then(t.bind(t,34982))).default,CatalogLayer:async()=>(await Promise.all([t.e(500),t.e(6263),t.e(2886),t.e(490)]).then(t.bind(t,40490))).default,CSVLayer:async()=>(await t.e(8809).then(t.bind(t,51190))).default,DimensionLayer:async()=>(await t.e(3012).then(t.bind(t,53012))).default,ElevationLayer:async()=>(await t.e(6658).then(t.bind(t,6658))).default,FeatureLayer:async()=>(await Promise.resolve().then(t.bind(t,85049))).default,GeoJSONLayer:async()=>(await t.e(4584).then(t.bind(t,14584))).default,GeoRSSLayer:async()=>(await t.e(7612).then(t.bind(t,27612))).default,GroupLayer:async()=>(await t.e(6730).then(t.bind(t,56730))).default,ImageryLayer:async()=>(await Promise.all([t.e(500),t.e(2672),t.e(6479),t.e(5152),t.e(9156)]).then(t.bind(t,82442))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(2672),t.e(6479),t.e(3758),t.e(5152),t.e(5706)]).then(t.bind(t,3325))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(6171),t.e(3542)]).then(t.bind(t,43542))).default,KMLLayer:async()=>(await t.e(3884).then(t.bind(t,33884))).default,LineOfSightLayer:async()=>(await t.e(2253).then(t.bind(t,2253))).default,LinkChartLayer:async()=>(await Promise.all([t.e(1924),t.e(6984),t.e(8310),t.e(2446),t.e(1582),t.e(9030),t.e(4293)]).then(t.bind(t,41473))).default,MapImageLayer:async()=>(await Promise.all([t.e(500),t.e(6263),t.e(9922),t.e(9220)]).then(t.bind(t,39220))).default,MapNotesLayer:async()=>(await t.e(6636).then(t.bind(t,66636))).default,MediaLayer:async()=>(await t.e(4749).then(t.bind(t,24749))).default,OGCFeatureLayer:async()=>(await t.e(9811).then(t.bind(t,49811))).default,OpenStreetMapLayer:async()=>(await t.e(2774).then(t.bind(t,2774))).default,OrientedImageryLayer:async()=>(await t.e(5699).then(t.bind(t,5699))).default,PointCloudLayer:async()=>(await t.e(4929).then(t.bind(t,64929))).default,RouteLayer:async()=>(await Promise.all([t.e(392),t.e(9369)]).then(t.bind(t,79369))).default,SceneLayer:async()=>(await Promise.all([t.e(4197),t.e(8842),t.e(6152),t.e(4010),t.e(1903),t.e(6171),t.e(5880),t.e(4277)]).then(t.bind(t,14277))).default,StreamLayer:async()=>(await t.e(4376).then(t.bind(t,24376))).default,SubtypeGroupLayer:async()=>(await t.e(9935).then(t.bind(t,59935))).default,TileLayer:async()=>(await Promise.all([t.e(500),t.e(6263),t.e(9922),t.e(5977)]).then(t.bind(t,88358))).default,IntegratedMesh3DTilesLayer:async()=>(await t.e(4951).then(t.bind(t,54951))).default,UnknownLayer:async()=>(await t.e(9001).then(t.bind(t,89001))).default,UnsupportedLayer:async()=>(await t.e(4122).then(t.bind(t,94122))).default,VectorTileLayer:async()=>(await Promise.all([t.e(114),t.e(1307)]).then(t.bind(t,62546))).default,VoxelLayer:async()=>(await t.e(3827).then(t.bind(t,13827))).default,WFSLayer:async()=>(await t.e(3815).then(t.bind(t,53815))).default,WMSLayer:async()=>(await t.e(5503).then(t.bind(t,95503))).default,WMTSLayer:async()=>(await t.e(398).then(t.bind(t,20398))).default,WebTileLayer:async()=>(await t.e(221).then(t.bind(t,221))).default}},3173:(e,a,t)=>{t.d(a,{PC:()=>y,WZ:()=>i,XH:()=>l,_r:()=>n,ay:()=>o,bO:()=>s,nu:()=>d,pJ:()=>c,z8:()=>u});var r=t(28904);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function s(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:c(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(n),e.tables=e.tables||r?.tables?.map(n)}return e}function i(e){const{layers:a,tables:t}=e;return a?.length?a[0].id:t?.length?t[0].id:null}function c(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function l(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function u(e){const a=[];return e?.layers?.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&a.push(e.id)})),a}function o(e){return e?.layers?.filter((({layerType:e})=>"OrientedImageryLayer"===e)).map((({id:e})=>e))}function y(e){return e?.layers?.filter((({layerType:e})=>"CatalogLayer"===e)).map((({id:e})=>e))}async function d(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const r=await t.fetchServiceMetadata(e.url);a.layers=r.layers?.map(n)}const{serverUrl:s,portalItem:i}=await(0,r.L)(e.url,{sceneLayerItem:e,customParameters:c(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==s)return a.tables=[],a;if(!a.tables&&i){const e=await i.fetchData();if(e?.tables)a.tables=e.tables.map(n);else{const r=await t.fetchServiceMetadata(s,{customParameters:c(e)?.customParameters});a.tables=r?.tables?.map(n)}}if(a.tables)for(const e of a.tables)e.url=`${s}/${e.id}`;return a}},25302:(e,a,t)=>{t.d(a,{fromItem:()=>y,n:()=>d});var r=t(62991),n=t(28904),s=t(86270),i=t(65452),c=t(97364),l=t(43305),u=t(3173),o=t(86074);async function y(e){!e.portalItem||e.portalItem instanceof l.default||(e={...e,portalItem:new l.default(e.portalItem)});const a=await async function(e){await e.load();const a=new s.v;return async function(e){const a=e.className,t=c.S[a];return{constructor:await t(),properties:e.properties}}(await d(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function d(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,o.Y)(e,"Map Notes"),t=(0,o.Y)(e,"Markup");if(a||t)return{className:"MapNotesLayer"};if((0,o.Y)(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return 1===(0,u.XH)(r)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await f(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),n=r?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),i=s.cacheType?.toLowerCase(),c=s.capabilities?.toLowerCase().includes("tilesonly");return"map"===i||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await f(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await(0,n.L)(e.url,{sceneLayerItem:e}),r=await a.fetchServiceMetadata(t);return r?.tables??[]}catch{return[]}}));if("object"==typeof t){const r={};let n;if(null!=t.id?(r.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(i.XX))if(e.typeKeywords.includes(a))return{className:i.XX[a]};const s=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>(0,u.pJ)(e)?.customParameters))});return{className:i.XX[s?.layerType]||"SceneLayer",properties:r}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===t?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function f(e,a,t){const{url:r,type:n}=e,s="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(s){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>(0,u.pJ)(e)?.customParameters))});if("Oriented Imagery Layer"===t.type)return{id:t.id,className:"OrientedImageryLayer",sourceJSON:t}}return{}}await e.load();let i=await a.fetchItemData(e);if(s){const e=await(0,u.bO)(i,r,a),t=m(e);if("object"==typeof t){const a=(0,u.z8)(e),r=(0,u.ay)(e),n=(0,u.PC)(e);t.className=null!=t.id&&a.includes(t.id)?"SubtypeGroupLayer":null!=t.id&&r?.includes(t.id)?"OrientedImageryLayer":null!=t.id&&n?.includes(t.id)?"CatalogLayer":"FeatureLayer"}return t}if("Scene Service"===n&&(i=await(0,u.nu)(e,i,a)),(0,u.XH)(i)>0)return m(i);const c=await a.fetchServiceMetadata(r);return t&&(c.tables=await t()),m(c)}function m(e){return 1===(0,u.XH)(e)&&{id:(0,u.WZ)(e)}}},88426:(e,a,t)=>{t.d(a,{V:()=>n});var r=t(38116);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}}}]);