"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[2788,5999],{42788:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>S});var r=t(6480),i=t(42754),a=t(68476),o=t(90364),c=t(91017),s=t(82951),u=t(15193),l=t(55002),f=t(45247),d=t(5262),w=t(8e3),A=t(61064),h=t(48380),y=t(67709),p=t(8977),m=t(65648),g=t(38648),I=t(56053),v=t(83382),D=t(38116);async function T(n,e,t){const i=r.id?.findCredential(n.restUrl);if(!i)return null;if("loaded"===n.loadStatus&&""===e&&n.user?.sourceJSON&&!1===t)return n.user.sourceJSON;const a={responseType:"json",query:{f:"json"}};if(t&&(a.query.returnUserLicenseTypeExtensions=!0),""===e){const e=await(0,D.A)(n.restUrl+"/community/self",a);if(e.data){const n=e.data;if(n?.username)return n}return null}const o=await(0,D.A)(n.restUrl+"/community/users/"+e,a);if(o.data){const n=o.data;return n.error?null:n}return null}function P(n){return 0===r.rE.indexOf("4.")?m.A.fromExtent(n):new m.A({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function X(n,e,t){if((0,s.H)(n,2,2,e,t),n[0]instanceof A.A&&n[1]instanceof A.A);else if(n[0]instanceof A.A&&null===n[1]);else if(n[1]instanceof A.A&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new o.D$(e,o.TX.InvalidParameter,t)}async function $(n,e){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let t=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(t=(0,l.G9)(n.spatialReference)/(0,d.GA)(n.spatialReference));let r=0;if("polyline"===n.type)for(const e of n.paths)for(let n=1;n<e.length;n++)r+=(0,l.BM)(e[n],e[n-1],t);else if("polygon"===n.type)for(const e of n.rings){for(let n=1;n<e.length;n++)r+=(0,l.BM)(e[n],e[n-1],t);(e[0][0]!==e[e.length-1][0]||e[0][1]!==e[e.length-1][1]||void 0!==e[0][2]&&e[0][2]!==e[e.length-1][2])&&(r+=(0,l.BM)(e[0],e[e.length-1],t))}else"extent"===n.type&&(r+=2*(0,l.BM)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],t),r+=2*(0,l.BM)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],t),r*=2,r+=4*Math.abs((0,s.K)(n.zmax,0)*t-(0,s.K)(n.zmin,0)*t));const i=new g.A({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return(0,h.planarLength)(i,e)}function S(n){"async"===n.mode&&(n.functions.disjoint=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null===i[0]||null===i[1]||(0,h.disjoint)(i[0],i[1]))))},n.functions.intersects=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null!==i[0]&&null!==i[1]&&(0,h.intersects)(i[0],i[1]))))},n.functions.touches=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null!==i[0]&&null!==i[1]&&(0,h.touches)(i[0],i[1]))))},n.functions.crosses=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null!==i[0]&&null!==i[1]&&(0,h.crosses)(i[0],i[1]))))},n.functions.within=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null!==i[0]&&null!==i[1]&&(0,h.within)(i[0],i[1]))))},n.functions.contains=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null!==i[0]&&null!==i[1]&&(0,h.contains)(i[0],i[1]))))},n.functions.overlaps=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null!==i[0]&&null!==i[1]&&(0,h.overlaps)(i[0],i[1]))))},n.functions.equals=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>((0,s.H)(i,2,2,e,t),i[0]===i[1]||(i[0]instanceof A.A&&i[1]instanceof A.A?(0,h.equals)(i[0],i[1]):((0,s.k)(i[0])&&(0,s.k)(i[1])||!!((0,s.n)(i[0])&&(0,s.n)(i[1])||(0,s.m)(i[0])&&(0,s.m)(i[1])))&&i[0].equals(i[1])))))},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,3,3,e,t),i[0]instanceof A.A&&i[1]instanceof A.A)return(0,h.relate)(i[0],i[1],(0,s.j)(i[2]));if(i[0]instanceof A.A&&null===i[1])return!1;if(i[1]instanceof A.A&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new o.D$(e,o.TX.InvalidParameter,t)}))},n.functions.intersection=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null===i[0]||null===i[1]?null:(0,h.intersect)(i[0],i[1]))))},n.functions.union=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{const a=[];if(0===(i=(0,s.I)(i)).length)throw new o.D$(e,o.TX.WrongNumberOfParameters,t);if(1===i.length)if((0,s.o)(i[0])){const n=(0,s.I)(i[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);a.push(n[r])}}else{if(!(0,s.q)(i[0])){if(i[0]instanceof A.A)return(0,s.x)((0,c.Yq)(i[0]),e.spatialReference);if(null===i[0])return null;throw new o.D$(e,o.TX.InvalidParameter,t)}{const n=(0,s.I)(i[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);a.push(n[r])}}}else for(let n=0;n<i.length;n++)if(null!==i[n]){if(!(i[n]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);a.push(i[n])}return 0===a.length?null:(0,h.union)(a)}))},n.functions.difference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null!==i[0]&&null===i[1]?(0,c.Yq)(i[0]):null===i[0]?null:(0,h.difference)(i[0],i[1]))))},n.functions.symmetricdifference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>(X(i=(0,s.I)(i),e,t),null===i[0]&&null===i[1]?null:null===i[0]?(0,c.Yq)(i[1]):null===i[1]?(0,c.Yq)(i[0]):(0,h.symmetricDifference)(i[0],i[1]))))},n.functions.clip=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,2,e,t),!(i[1]instanceof w.A)&&null!==i[1])throw new o.D$(e,o.TX.InvalidParameter,t);if(null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return null===i[1]?null:(0,h.clip)(i[0],i[1])}))},n.functions.cut=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,2,e,t),!(i[1]instanceof g.A)&&null!==i[1])throw new o.D$(e,o.TX.InvalidParameter,t);if(null===i[0])return[];if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return null===i[1]?[(0,c.Yq)(i[0])]:(0,h.cut)(i[0],i[1])}))},n.functions.area=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,s.H)(i,1,2,e,t),null===(i=(0,s.I)(i))[0])return 0;if((0,s.u)(i[0])){const n=await i[0].sumArea((0,c.uf)((0,s.K)(i[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new o.D$(e,o.TX.Cancelled,t);return n}if((0,s.o)(i[0])||(0,s.q)(i[0])){const n=(0,s.J)(i[0],e.spatialReference);return null===n?0:(0,h.planarArea)(n,(0,c.uf)((0,s.K)(i[1],-1)))}if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.planarArea)(i[0],(0,c.uf)((0,s.K)(i[1],-1)))}))},n.functions.areageodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,s.H)(i,1,2,e,t),null===(i=(0,s.I)(i))[0])return 0;if((0,s.u)(i[0])){const n=await i[0].sumArea((0,c.uf)((0,s.K)(i[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new o.D$(e,o.TX.Cancelled,t);return n}if((0,s.o)(i[0])||(0,s.q)(i[0])){const n=(0,s.J)(i[0],e.spatialReference);return null===n?0:(0,h.geodesicArea)(n,(0,c.uf)((0,s.K)(i[1],-1)))}if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.geodesicArea)(i[0],(0,c.uf)((0,s.K)(i[1],-1)))}))},n.functions.length=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,s.H)(i,1,2,e,t),null===(i=(0,s.I)(i))[0])return 0;if((0,s.u)(i[0])){const n=await i[0].sumLength((0,c.SQ)((0,s.K)(i[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new o.D$(e,o.TX.Cancelled,t);return n}if((0,s.o)(i[0])||(0,s.q)(i[0])){const n=(0,s.L)(i[0],e.spatialReference);return null===n?0:(0,h.planarLength)(n,(0,c.SQ)((0,s.K)(i[1],-1)))}if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.planarLength)(i[0],(0,c.SQ)((0,s.K)(i[1],-1)))}))},n.functions.length3d=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if((0,s.H)(i,1,2,e,t),null===(i=(0,s.I)(i))[0])return 0;if((0,s.o)(i[0])||(0,s.q)(i[0])){const n=(0,s.L)(i[0],e.spatialReference);return null===n?0:!0===n.hasZ?$(n,(0,c.SQ)((0,s.K)(i[1],-1))):(0,h.planarLength)(n,(0,c.SQ)((0,s.K)(i[1],-1)))}if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return!0===i[0].hasZ?$(i[0],(0,c.SQ)((0,s.K)(i[1],-1))):(0,h.planarLength)(i[0],(0,c.SQ)((0,s.K)(i[1],-1)))}))},n.functions.lengthgeodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if((0,s.H)(i,1,2,e,t),null===(i=(0,s.I)(i))[0])return 0;if((0,s.u)(i[0])){const n=await i[0].sumLength((0,c.SQ)((0,s.K)(i[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new o.D$(e,o.TX.Cancelled,t);return n}if((0,s.o)(i[0])||(0,s.q)(i[0])){const n=(0,s.L)(i[0],e.spatialReference);return null===n?0:(0,h.geodesicLength)(n,(0,c.SQ)((0,s.K)(i[1],-1)))}if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.geodesicLength)(i[0],(0,c.SQ)((0,s.K)(i[1],-1)))}))},n.functions.distance=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{i=(0,s.I)(i),(0,s.H)(i,2,3,e,t);let a=i[0];((0,s.o)(i[0])||(0,s.q)(i[0]))&&(a=(0,s.M)(i[0],e.spatialReference));let u=i[1];if(((0,s.o)(i[1])||(0,s.q)(i[1]))&&(u=(0,s.M)(i[1],e.spatialReference)),!(a instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);if(!(u instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.distance)(a,u,(0,c.SQ)((0,s.K)(i[2],-1)))}))},n.functions.distancegeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{i=(0,s.I)(i),(0,s.H)(i,2,3,e,t);const a=i[0],u=i[1];if(!(a instanceof p.A))throw new o.D$(e,o.TX.InvalidParameter,t);if(!(u instanceof p.A))throw new o.D$(e,o.TX.InvalidParameter,t);const l=new g.A({paths:[],spatialReference:a.spatialReference});return l.addPath([a,u]),(0,h.geodesicLength)(l,(0,c.SQ)((0,s.K)(i[2],-1)))}))},n.functions.densify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);const a=(0,s.g)(i[1]);if(isNaN(a))throw new o.D$(e,o.TX.InvalidParameter,t);if(a<=0)throw new o.D$(e,o.TX.InvalidParameter,t);return i[0]instanceof m.A||i[0]instanceof g.A?(0,h.densify)(i[0],a,(0,c.SQ)((0,s.K)(i[2],-1))):i[0]instanceof w.A?(0,h.densify)(P(i[0]),a,(0,c.SQ)((0,s.K)(i[2],-1))):i[0]}))},n.functions.densifygeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);const a=(0,s.g)(i[1]);if(isNaN(a))throw new o.D$(e,o.TX.InvalidParameter,t);if(a<=0)throw new o.D$(e,o.TX.InvalidParameter,t);return i[0]instanceof m.A||i[0]instanceof g.A?(0,h.geodesicDensify)(i[0],a,(0,c.SQ)((0,s.K)(i[2],-1))):i[0]instanceof w.A?(0,h.geodesicDensify)(P(i[0]),a,(0,c.SQ)((0,s.K)(i[2],-1))):i[0]}))},n.functions.generalize=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,4,e,t),null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);const a=(0,s.g)(i[1]);if(isNaN(a))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.generalize)(i[0],a,(0,s.h)((0,s.K)(i[2],!0)),(0,c.SQ)((0,s.K)(i[3],-1)))}))},n.functions.buffer=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);const a=(0,s.g)(i[1]);if(isNaN(a))throw new o.D$(e,o.TX.InvalidParameter,t);return 0===a?(0,c.Yq)(i[0]):(0,h.buffer)(i[0],a,(0,c.SQ)((0,s.K)(i[2],-1)))}))},n.functions.buffergeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,3,e,t),null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);const a=(0,s.g)(i[1]);if(isNaN(a))throw new o.D$(e,o.TX.InvalidParameter,t);return 0===a?(0,c.Yq)(i[0]):(0,h.geodesicBuffer)(i[0],a,(0,c.SQ)((0,s.K)(i[2],-1)))}))},n.functions.offset=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,6,e,t),null===i[0])return null;if(!(i[0]instanceof m.A||i[0]instanceof g.A))throw new o.D$(e,o.TX.InvalidParameter,t);const a=(0,s.g)(i[1]);if(isNaN(a))throw new o.D$(e,o.TX.InvalidParameter,t);const u=(0,s.g)((0,s.K)(i[4],10));if(isNaN(u))throw new o.D$(e,o.TX.InvalidParameter,t);const l=(0,s.g)((0,s.K)(i[5],0));if(isNaN(l))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.offset)(i[0],a,(0,c.SQ)((0,s.K)(i[2],-1)),(0,s.j)((0,s.K)(i[3],"round")).toLowerCase(),u,l)}))},n.functions.rotate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{i=(0,s.I)(i),(0,s.H)(i,2,3,e,t);let a=i[0];if(null===a)return null;if(!(a instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);a instanceof w.A&&(a=m.A.fromExtent(a));const c=(0,s.g)(i[1]);if(isNaN(c))throw new o.D$(e,o.TX.InvalidParameter,t);const u=(0,s.K)(i[2],null);if(null===u)return(0,h.rotate)(a,c);if(u instanceof p.A)return(0,h.rotate)(a,c,u);throw new o.D$(e,o.TX.InvalidParameter,t)}))},n.functions.centroid=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,1,1,e,t),null===i[0])return null;let a=i[0];if(((0,s.o)(i[0])||(0,s.q)(i[0]))&&(a=(0,s.M)(i[0],e.spatialReference)),null===a)return null;if(!(a instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return a instanceof p.A?(0,s.x)((0,c.Yq)(i[0]),e.spatialReference):a instanceof m.A?a.centroid:a instanceof g.A?(0,l.tI)(a):a instanceof y.A?(0,l.e0)(a):a instanceof w.A?a.center:null}))},n.functions.measuretocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,2,e,t),null===i[0])return null;let c=i[0];if(((0,s.o)(i[0])||(0,s.q)(i[0]))&&(c=(0,s.L)(i[0],e.spatialReference)),null===c)return null;if(!(c instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);if(!(c instanceof g.A))throw new o.D$(e,o.TX.InvalidParameter,t);if((0,s.b)(!1===i[1]))throw new o.D$(e,o.TX.InvalidParameter,t);const u=(0,f.EP)(c,i[1]);return u?a.A.convertObjectToArcadeDictionary(u,(0,s.N)(e),!1,!0):null}))},n.functions.pointtocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,2,e,t),null===i[0])return null;let c=i[0];if(((0,s.o)(i[0])||(0,s.q)(i[0]))&&(c=(0,s.L)(i[0],e.spatialReference)),null===c)return null;if(!(c instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);if(!(c instanceof g.A))throw new o.D$(e,o.TX.InvalidParameter,t);const u=i[1];if(null===u)return null;if(!(u instanceof p.A))throw new o.D$(e,o.TX.InvalidParameter,t);if((0,s.b)(!1===i[1]))throw new o.D$(e,o.TX.InvalidParameter,t);const l=(0,f.sO)(c,u);return l?a.A.convertObjectToArcadeDictionary(l,(0,s.N)(e),!1,!0):null}))},n.functions.distancetocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,2,e,t),null===i[0])return null;let c=i[0];if(((0,s.o)(i[0])||(0,s.q)(i[0]))&&(c=(0,s.L)(i[0],e.spatialReference)),null===c)return null;if(!(c instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);if(!(c instanceof g.A))throw new o.D$(e,o.TX.InvalidParameter,t);if((0,s.b)(!1===i[1]))throw new o.D$(e,o.TX.InvalidParameter,t);const u=(0,f.du)(c,i[1]);return u?a.A.convertObjectToArcadeDictionary(u,(0,s.N)(e),!1,!0):null}))},n.functions.multiparttosinglepart=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{i=(0,s.I)(i),(0,s.H)(i,1,1,e,t);const a=[];if(null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);if(i[0]instanceof p.A)return[(0,s.x)((0,c.Yq)(i[0]),e.spatialReference)];if(i[0]instanceof w.A)return[(0,s.x)((0,c.Yq)(i[0]),e.spatialReference)];const u=await(0,h.simplify)(i[0]);if(u instanceof m.A){const n=[],e=[];for(let t=0;t<u.rings.length;t++)if(u.isClockwise(u.rings[t])){const e=(0,I.rS)({rings:[u.rings[t]],hasZ:!0===u.hasZ,hazM:!0===u.hasM,spatialReference:u.spatialReference.toJSON()});n.push(e)}else e.push({ring:u.rings[t],pt:u.getPoint(t,0)});for(let t=0;t<e.length;t++)for(let r=0;r<n.length;r++)if(n[r].contains(e[t].pt)){n[r].addRing(e[t].ring);break}return n}if(u instanceof g.A){const n=[];for(let e=0;e<u.paths.length;e++){const t=(0,I.rS)({paths:[u.paths[e]],hasZ:!0===u.hasZ,hazM:!0===u.hasM,spatialReference:u.spatialReference.toJSON()});n.push(t)}return n}if(i[0]instanceof y.A){const n=(0,s.x)((0,c.Yq)(i[0]),e.spatialReference);for(let e=0;e<n.points.length;e++)a.push(n.getPoint(e));return a}return null}))},n.functions.issimple=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,1,1,e,t),null===i[0])return!0;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.isSimple)(i[0])}))},n.functions.simplify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,1,1,e,t),null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.simplify)(i[0])}))},n.functions.convexhull=function(e,t){return n.standardFunctionAsync(e,t,((n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,1,1,e,t),null===i[0])return null;if(!(i[0]instanceof A.A))throw new o.D$(e,o.TX.InvalidParameter,t);return(0,h.convexHull)(i[0])}))},n.functions.getuser=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,c)=>{(0,s.H)(c,0,2,e,t);let l=(0,s.K)(c[1],""),f=!0===l;if(l=!0===l||!1===l?"":(0,s.j)(l),0===c.length||c[0]instanceof i.A){let n=null;n=e.services?.portal?e.services.portal:v.A.getDefault(),c.length>0&&(n=(0,u.R)(c[0],n));const t=await T(n,l,f);if(t){const n=JSON.parse(JSON.stringify(t));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return a.A.convertObjectToArcadeDictionary(n,(0,s.N)(e))}return null}let d=null;if((0,s.u)(c[0])&&(d=c[0]),d){if(f=!1,l)return null;await d.load();const n=await d.getOwningSystemUrl();if(!n){if(!l){const n=await d.getIdentityUser();return n?a.A.convertObjectToArcadeDictionary({username:n},(0,s.N)(e)):null}return null}let t=null;t=e.services?.portal?e.services.portal:v.A.getDefault(),t=(0,u.R)(new i.A(n),t);const r=await T(t,l,f);if(r){const n=JSON.parse(JSON.stringify(r));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return a.A.convertObjectToArcadeDictionary(n,(0,s.N)(e))}return null}throw new o.D$(e,o.TX.InvalidParameter,t)}))}),n.functions.nearestcoordinate=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,2,e,t),!(i[0]instanceof A.A||null===i[0]))throw new o.D$(e,o.TX.InvalidParameter,t);if(!(i[1]instanceof p.A||null===i[1]))throw new o.D$(e,o.TX.InvalidParameter,t);if(null===i[0]||null===i[1])return null;const c=await(0,h.nearestCoordinate)(i[0],i[1]);return null===c?null:a.A.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},(0,s.N)(e),!1,!0)}))},n.functions.nearestvertex=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,i)=>{if(i=(0,s.I)(i),(0,s.H)(i,2,2,e,t),!(i[0]instanceof A.A||null===i[0]))throw new o.D$(e,o.TX.InvalidParameter,t);if(!(i[1]instanceof p.A||null===i[1]))throw new o.D$(e,o.TX.InvalidParameter,t);if(null===i[0]||null===i[1])return null;const c=await(0,h.nearestVertex)(i[0],i[1]);return null===c?null:a.A.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},(0,s.N)(e),!1,!0)}))}}},15193:(n,e,t)=>{t.d(e,{R:()=>i});var r=t(83382);function i(n,e){return null===n?e:new r.A({url:n.field("url")})}},48380:(n,e,t)=>{t.r(e),t.d(e,{buffer:()=>K,changeDefaultSpatialReferenceTolerance:()=>G,clearDefaultSpatialReferenceTolerance:()=>W,clip:()=>A,contains:()=>y,convexHull:()=>R,crosses:()=>p,cut:()=>h,densify:()=>Y,difference:()=>x,disjoint:()=>T,distance:()=>m,equals:()=>g,extendedSpatialReferenceInfo:()=>w,flipHorizontal:()=>M,flipVertical:()=>k,generalize:()=>C,geodesicArea:()=>V,geodesicBuffer:()=>O,geodesicDensify:()=>z,geodesicLength:()=>Z,intersect:()=>F,intersectLinesToPoints:()=>U,intersects:()=>I,isSimple:()=>$,nearestCoordinate:()=>q,nearestVertex:()=>L,nearestVertices:()=>Q,offset:()=>H,overlaps:()=>P,planarArea:()=>E,planarLength:()=>B,relate:()=>X,rotate:()=>j,simplify:()=>S,symmetricDifference:()=>N,touches:()=>v,union:()=>b,within:()=>D}),t(3313);var r=t(73462),i=t(8977),a=t(56053);function o(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function c(n){return n?Array.isArray(n)?n.map(c):n.toJSON?n.toJSON():n:n}function s(n){return Array.isArray(n)?n.map((n=>(0,a.rS)(n))):(0,a.rS)(n)}let u;async function l(){return u||(u=(0,r.ho)("geometryEngineWorker",{strategy:"distributed"})),u}async function f(n,e){return(await l()).invoke("executeGEOperation",{operation:n,parameters:c(e)})}async function d(n,e){const t=await l();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:c(e)}))}function w(n){return f("extendedSpatialReferenceInfo",[n])}async function A(n,e){return s(await f("clip",[o(n),n,e]))}async function h(n,e){return s(await f("cut",[o(n),n,e]))}function y(n,e){return f("contains",[o(n),n,e])}function p(n,e){return f("crosses",[o(n),n,e])}function m(n,e,t){return f("distance",[o(n),n,e,t])}function g(n,e){return f("equals",[o(n),n,e])}function I(n,e){return f("intersects",[o(n),n,e])}function v(n,e){return f("touches",[o(n),n,e])}function D(n,e){return f("within",[o(n),n,e])}function T(n,e){return f("disjoint",[o(n),n,e])}function P(n,e){return f("overlaps",[o(n),n,e])}function X(n,e,t){return f("relate",[o(n),n,e,t])}function $(n){return f("isSimple",[o(n),n])}async function S(n){return s(await f("simplify",[o(n),n]))}async function R(n,e=!1){return s(await f("convexHull",[o(n),n,e]))}async function x(n,e){return s(await f("difference",[o(n),n,e]))}async function N(n,e){return s(await f("symmetricDifference",[o(n),n,e]))}async function F(n,e){return s(await f("intersect",[o(n),n,e]))}async function b(n,e=null){const t=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,e);return s(await f("union",[o(t),t]))}async function H(n,e,t,r,i,a){return s(await f("offset",[o(n),n,e,t,r,i,a]))}async function K(n,e,t,r=!1){const i=[o(n),n,e,t,r];return s(await f("buffer",i))}async function O(n,e,t,r,i,a){const c=[o(n),n,e,t,r,i,a];return s(await f("geodesicBuffer",c))}async function q(n,e,t=!0){const r=await f("nearestCoordinate",[o(n),n,e,t]);return{...r,coordinate:i.A.fromJSON(r.coordinate)}}async function L(n,e){const t=await f("nearestVertex",[o(n),n,e]);return{...t,coordinate:i.A.fromJSON(t.coordinate)}}async function Q(n,e,t,r){return(await f("nearestVertices",[o(n),n,e,t,r])).map((n=>({...n,coordinate:i.A.fromJSON(n.coordinate)})))}function J(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function j(n,e,t){if(null==n)throw new _;const r=n.spatialReference;if(null==(t=t??J(n)))throw new _;const i=n.constructor.fromJSON(await f("rotate",[r,n,e,t]));return i.spatialReference=r,i}async function M(n,e){if(null==n)throw new _;const t=n.spatialReference;if(null==(e=e??J(n)))throw new _;const r=n.constructor.fromJSON(await f("flipHorizontal",[t,n,e]));return r.spatialReference=t,r}async function k(n,e){if(null==n)throw new _;const t=n.spatialReference;if(null==(e=e??J(n)))throw new _;const r=n.constructor.fromJSON(await f("flipVertical",[t,n,e]));return r.spatialReference=t,r}async function C(n,e,t,r){return s(await f("generalize",[o(n),n,e,t,r]))}async function Y(n,e,t){return s(await f("densify",[o(n),n,e,t]))}async function z(n,e,t,r=0){return s(await f("geodesicDensify",[o(n),n,e,t,r]))}function E(n,e){return f("planarArea",[o(n),n,e])}function B(n,e){return f("planarLength",[o(n),n,e])}function V(n,e,t){return f("geodesicArea",[o(n),n,e,t])}function Z(n,e,t){return f("geodesicLength",[o(n),n,e,t])}async function U(n,e){return s(await f("intersectLinesToPoints",[o(n),n,e]))}async function G(n,e){await d("changeDefaultSpatialReferenceTolerance",[n,e])}async function W(n){await d("clearDefaultSpatialReferenceTolerance",[n])}class _ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);