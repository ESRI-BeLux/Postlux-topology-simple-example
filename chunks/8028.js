"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[8028],{38028:(e,t,o)=>{o.r(t),o.d(t,{executeRelationshipQuery:()=>l,executeRelationshipQueryForCount:()=>y});var r=o(36321),a=o(38116),n=o(67488),s=o(49173);function c(e,t){const o=e.toJSON();return o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o.outFields&&!t?.returnCountOnly?o.outFields.includes("*")?o.outFields="*":o.outFields=o.outFields.join(","):delete o.outFields,o.outSR&&(o.outSR=(0,n.YX)(o.outSR)),o.dynamicDataSource&&(o.layer=JSON.stringify({source:o.dynamicDataSource}),delete o.dynamicDataSource),o}async function u(e,t,o={},r){const n=(0,s.z)({...e.query,f:"json",...r,...c(t,r)});return(0,a.A)(e.path+"/queryRelatedRecords",{...o,query:{...o.query,...n}})}var d=o(74704),i=o(63498);async function l(e,t,o){return t=i.default.from(t),async function(e,t,o){const r=await u(e,t,o),a=r.data,n=a.geometryType,s=a.spatialReference,c={};for(const e of a.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:s,hasZ:!!a.hasZ,hasM:!!a.hasM,features:e.relatedRecords};if(null!=e.objectId)c[e.objectId]=t;else for(const o of Object.keys(e))"relatedRecords"!==o&&(c[e[o]]=t)}return{...r,data:c}}((0,r.Dl)(e),t,o).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=d.A.fromJSON(t[e]))),o}))}async function y(e,t,o){return t=i.default.from(t),async function(e,t,o){const r=await u(e,t,o,{returnCountOnly:!0}),a=r.data,n={};for(const e of a.relatedRecordGroups)null!=e.objectId&&(n[e.objectId]=e.count);return{...r,data:n}}((0,r.Dl)(e),t,{...o}).then((e=>e.data))}}}]);