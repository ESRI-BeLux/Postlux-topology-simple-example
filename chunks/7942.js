"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[7942],{57942:(e,r,t)=>{t.r(r),t.d(r,{getGeometryServiceURL:()=>c,projectGeometry:()=>s});var n=t(32083),i=t(62991),a=t(83382),o=t(35497),l=t(15697);async function c(e=null,r){if(n.A.geometryServiceUrl)return n.A.geometryServiceUrl;if(!e)throw new i.A("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||a.A.getDefault():e,await t.load({signal:r});const o=t.helperServices?.geometry?.url;if(!o)throw new i.A("internal:geometry-service-url-not-configured");return o}async function s(e,r,t=null,n){const a=await c(t,n),s=new l.A;s.geometries=[e],s.outSpatialReference=r;const u=await(0,o.C)(a,s,{signal:n});if(u&&Array.isArray(u)&&1===u.length)return u[0];throw new i.A("internal:geometry-service-projection-failed")}}}]);