"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[7264],{97264:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>V,extend:()=>W,functionHelper:()=>_});var r=n(68796),o=n(78355),a=n(68476),i=n(90364),l=n(96480),s=n(30225),c=n(82951),u=n(60150),f=n(24653),w=n(72310),p=n(42788),d=n(34686),h=n(94575),g=n(17831),m=n(79257),y=n(61064),v=n(44153);function b(e){return e&&"function"==typeof e.then}const D=100;async function T(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await C(e,t.arguments[r]));return n}async function S(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await T(e,t))}class x extends s.fF{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{const n={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(n.depthCounter.depth>64)throw new i.D$(e,i.TX.MaximumCallDepth,null);return q(this.definition,n,t,null)}}call(e,t){return $(e,t,((n,r,o)=>{const a={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new i.D$(e,i.TX.MaximumCallDepth,t);return q(this.definition,a,o,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!(0,c.i)(t)||t instanceof s.CU?t:(0,s.o6)(t,e,r))),(0,s.o6)(await q(this.definition,l,i,t),n,r)}))}}class X extends r.x{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await C(this.executingContext,t.node),t.valueset=!0),(0,c.i)(t.value)&&!(t.value instanceof s.CU)){const e=new s.CU;e.fn=t.value,e.parameterEvaluator=$,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if((0,c.i)(t))throw new i.D$(null,i.TX.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=e.toLowerCase()),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new v.A({wkid:102100})),this.moduleScope=G({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new o.a(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??Z,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await C(this.executingContext,this.source.syntax)}}async function $(e,t,n){if(!0===t.preparsed){const r=n(e,null,t.arguments);return b(r),r}const r=n(e,t,await T(e,t));return b(r),r}async function C(e,t,n){if(t.breakpoint&&!0!==n){const n=t.breakpoint();return await n,C(e,t,!0)}try{switch(t?.type){case"VariableDeclarator":return await async function(e,t){let n=null;if(n=null===t.init?null:await C(e,t.init),null!==e.localScope){if(n===c.B&&(n=null),"Identifier"!==t.id.type)throw new i.D$(e,i.TX.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return null!=e.localScope&&(e.localScope[r]={value:n,valueset:!0,node:t.init}),c.B}if("Identifier"!==t.id.type)throw new i.D$(e,i.TX.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return n===c.B&&(n=null),e.globalScope[r]={value:n,valueset:!0,node:t.init},c.B}(e,t);case"ImportDeclaration":return await async function(e,t){const n=t.specifiers[0].local.name.toLowerCase(),r=e.libraryResolver.loadLibrary(n);let o=null;return e.libraryResolver._moduleSingletons?.has(r.uri)?o=e.libraryResolver._moduleSingletons.get(r.uri):(o=new X(r),await o.loadModule(e),e.libraryResolver._moduleSingletons?.set(r.uri,o)),e.globalScope[n]={value:o,valueset:!0,node:t},c.B}(e,t);case"ExportNamedDeclaration":return await async function(e,t){if(await C(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[n.id.name.toLowerCase()]="variable";return c.B}(e,t);case"VariableDeclaration":return await L(e,t,0);case"BlockStatement":case"Program":return await async function(e,t){return N(e,t,0)}(e,t);case"FunctionDeclaration":return await async function(e,t){const n=t.id.name.toLowerCase();return e.globalScope[n]={valueset:!0,node:null,value:new x(t,e)},c.B}(e,t);case"ReturnStatement":return await async function(e,t){if(null===t.argument)return new c.z(c.B);const n=await C(e,t.argument);return new c.z(n)}(e,t);case"IfStatement":return await async function(e,t){const n=await C(e,t.test);if(!0===n)return C(e,t.consequent);if(!1===n)return null!==t.alternate?C(e,t.alternate):c.B;throw new i.D$(e,i.TX.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function(e,t){if("AssignmentExpression"===t.expression.type)return C(e,t.expression);if("CallExpression"===t.expression.type){const n=await C(e,t.expression);return n===c.B?c.B:new c.A(n)}const n=await C(e,t.expression);return n===c.B?c.B:new c.A(n)}(e,t);case"UpdateExpression":return await async function(e,t){const n=t.argument;if("MemberExpression"===n.type){const r={t:null},o=await C(e,n.object);let l=null;r.t=o,!0===n.computed?l=await C(e,n.property):"Identifier"===n.property.type&&(l=n.property.name);const s=r.t;let u;if((0,c.o)(s)){if(!(0,c.b)(l))throw new i.D$(e,i.TX.ArrayAccessorMustBeNumber,t);if(l<0&&(l=s.length+l),l<0||l>=s.length)throw new i.D$(e,i.TX.OutOfBounds,t);u=(0,c.g)(s[l]),s[l]="++"===t.operator?u+1:u-1}else if(s instanceof a.A){if(!1===(0,c.c)(l))throw new i.D$(e,i.TX.KeyAccessorMustBeString,t);if(!0!==s.hasField(l))throw new i.D$(e,i.TX.FieldNotFound,t,{key:l});u=(0,c.g)(s.field(l)),s.setField(l,"++"===t.operator?u+1:u-1)}else if(s instanceof X){if(!1===(0,c.c)(l))throw new i.D$(e,i.TX.ModuleAccessorMustBeString,t);if(!0!==s.hasGlobal(l))throw new i.D$(e,i.TX.ModuleExportNotFound,t);u=(0,c.g)(await s.global(l)),s.setGlobal(l,"++"===t.operator?u+1:u-1)}else{if(!(0,c.r)(s))throw(0,c.q)(s)?new i.D$(e,i.TX.Immutable,t):new i.D$(e,i.TX.InvalidParameter,t);if(!1===(0,c.c)(l))throw new i.D$(e,i.TX.KeyAccessorMustBeString,t);if(!0!==s.hasField(l))throw new i.D$(e,i.TX.FieldNotFound,t,{key:l});u=(0,c.g)(s.field(l)),s.setField(l,"++"===t.operator?u+1:u-1)}return!1===t.prefix?u:"++"===t.operator?u+1:u-1}const r="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r)throw new i.D$(e,i.TX.InvalidIdentifier,t);let o;if(null!=e.localScope&&void 0!==e.localScope[r])return o=(0,c.g)(e.localScope[r].value),e.localScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;if(void 0!==e.globalScope[r])return o=(0,c.g)(e.globalScope[r].value),e.globalScope[r]={value:"++"===t.operator?o+1:o-1,valueset:!0,node:t},!1===t.prefix?o:"++"===t.operator?o+1:o-1;throw new i.D$(e,i.TX.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await C(e,n.object);let o=null;if(!0===n.computed)o=await C(e,n.property);else{if("Identifier"!==n.property.type)throw new i.D$(e,i.TX.InvalidIdentifier,t);o=n.property.name}const l=await C(e,t.right);if((0,c.o)(r)){if(!(0,c.b)(o))throw new i.D$(e,i.TX.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>r.length)throw new i.D$(e,i.TX.OutOfBounds,t);if(o===r.length){if("="!==t.operator)throw new i.D$(e,i.TX.OutOfBounds,t);r[o]=k(l,t.operator,r[o],t,e)}else r[o]=k(l,t.operator,r[o],t,e)}else if(r instanceof a.A){if(!1===(0,c.c)(o))throw new i.D$(e,i.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,k(l,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new i.D$(e,i.TX.FieldNotFound,t,{key:o});r.setField(o,k(l,t.operator,null,t,e))}}else if(r instanceof X){if(!1===(0,c.c)(o))throw new i.D$(e,i.TX.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new i.D$(e,i.TX.ModuleExportNotFound,t);r.setGlobal(o,k(l,t.operator,await r.global(o),t,e))}else{if(!(0,c.r)(r))throw(0,c.q)(r)?new i.D$(e,i.TX.Immutable,t):new i.D$(e,i.TX.InvalidParameter,t);if(!1===(0,c.c)(o))throw new i.D$(e,i.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,k(l,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new i.D$(e,i.TX.FieldNotFound,t,{key:o});r.setField(o,k(l,t.operator,null,t,e))}}return c.B}const r=n.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[r]){const n=await C(e,t.right);return e.localScope[r]={value:k(n,t.operator,e.localScope[r].value,t,e),valueset:!0,node:t.right},c.B}if(void 0!==e.globalScope[r]){const n=await C(e,t.right);return e.globalScope[r]={value:k(n,t.operator,e.globalScope[r].value,t,e),valueset:!0,node:t.right},c.B}throw new i.D$(e,i.TX.InvalidIdentifier,t)}(e,t);case"ForStatement":return await function(e,t){try{return null!==t.init?C(e,t.init).then((()=>new Promise(((n,r)=>{B(e,t,{testResult:!0,lastAction:c.B},(e=>{n(e)}),(e=>{r(e)}),0)})))):new Promise(((n,r)=>{B(e,t,{testResult:!0,lastAction:c.B},(e=>{n(e)}),(e=>{r(e)}),0)}))}catch(e){return Promise.reject(e)}}(e,t);case"WhileStatement":return await async function(e,t){const n={testResult:!0,lastAction:c.B};if(n.testResult=await C(e,t.test),!1===n.testResult)return c.B;if(!0!==n.testResult)throw new i.D$(e,i.TX.BooleanConditionRequired,t);for(;!0===n.testResult&&(n.lastAction=await C(e,t.body),n.lastAction!==c.C)&&!(n.lastAction instanceof c.z);)if(n.testResult=await C(e,t.test),!0!==n.testResult&&!1!==n.testResult)throw new i.D$(e,i.TX.BooleanConditionRequired,t);return n.lastAction instanceof c.z?n.lastAction:c.B}(e,t);case"ForInStatement":return await async function(e,t){return new Promise(((n,r)=>{C(e,t.right).then((o=>{try{let l=null;l="VariableDeclaration"===t.left.type?C(e,t.left):Promise.resolve(),l.then((()=>{try{let l="";if("VariableDeclaration"===t.left.type){const e=t.left.declarations[0].id;"Identifier"===e.type&&(l=e.name)}else"Identifier"===t.left.type&&(l=t.left.name);if(!l)throw new i.D$(e,i.TX.InvalidIdentifier,t);l=l.toLowerCase();let s=null;if(null!=e.localScope&&void 0!==e.localScope[l]&&(s=e.localScope[l]),null===s&&void 0!==e.globalScope[l]&&(s=e.globalScope[l]),null===s)return void r(new i.D$(e,i.TX.InvalidIdentifier,t));(0,c.o)(o)||(0,c.c)(o)?R(e,t,o,{reject:r,resolve:n},s):(0,c.q)(o)?function(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(c.B);F(e,t,n,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}(e,t,o,{reject:r,resolve:n},s):o instanceof a.A||(0,c.r)(o)?function(e,t,n,r,o){try{R(e,t,n.keys(),r,o,"k")}catch(e){r.reject(e)}}(e,t,o,{reject:r,resolve:n},s):(0,c.u)(o)?M(o.iterator(e.abortSignal),e,t,o,s,(e=>{n(e)}),(e=>{r(e)}),0):R(e,t,[],{reject:r,resolve:n},s)}catch(e){r(e)}}),r)}catch(e){r(e)}}),r)}))}(e,t);case"BreakStatement":return c.C;case"EmptyStatement":return c.B;case"ContinueStatement":return c.D;case"TemplateElement":return await async function(e,t){return t.value?t.value.cooked:""}(0,t);case"TemplateLiteral":return await async function(e,t){const n=[];for(let r=0;r<t.expressions.length;r++){const o=await C(e,t.expressions[r]);n[r]=(0,c.j)(o)}let r="",o=0;for(const a of t.quasis)r+=a.value?a.value.cooked:"",!1===a.tail&&(r+=n[o]?E(n[o],e,t):"",o++);return r}(e,t);case"Identifier":return await O(e,t);case"MemberExpression":return await async function(e,t){const n=await C(e,t.object);if(null===n)throw new i.D$(e,i.TX.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof a.A||(0,c.r)(n))return n.field(t.property.name);if(n instanceof y.A)return(0,d.B)(n,t.property.name,e,t);if(n instanceof X){if(!n.hasGlobal(t.property.name))throw new i.D$(e,i.TX.InvalidIdentifier,t);return n.global(t.property.name)}throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}let r=await C(e,t.property);if(n instanceof a.A||(0,c.r)(n)){if((0,c.c)(r))return n.field(r);throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}if(n instanceof X){if((0,c.c)(r))return n.global(r);throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}if(n instanceof y.A){if((0,c.c)(r))return(0,d.B)(n,r,e,t);throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}if((0,c.o)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new i.D$(e,i.TX.OutOfBounds,t);return n[r]}throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}if((0,c.q)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new i.D$(e,i.TX.OutOfBounds,t);return n.get(r)}throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}if((0,c.c)(n)){if((0,c.b)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new i.D$(e,i.TX.OutOfBounds,t);return n[r]}throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}throw new i.D$(e,i.TX.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function(e,t){if("MemberExpression"===t.callee.type){const n=await C(e,t.callee.object);if(!(n instanceof X))throw new i.D$(e,i.TX.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await C(e,t.callee.property);if(!n.hasGlobal(r))throw new i.D$(e,i.TX.FunctionNotFound,t);const o=await n.global(r);if(!(0,c.i)(o))throw new i.D$(e,i.TX.CallNonFunction,t);return o.call(e,t)}if("Identifier"!==t.callee.type)throw new i.D$(e,i.TX.FunctionNotFound,t);if(null!=e.localScope&&void 0!==e.localScope[t.callee.name.toLowerCase()]){const n=e.localScope[t.callee.name.toLowerCase()];if((0,c.i)(n.value))return n.value.call(e,t);throw new i.D$(e,i.TX.CallNonFunction,t)}if(void 0!==e.globalScope[t.callee.name.toLowerCase()]){const n=e.globalScope[t.callee.name.toLowerCase()];if((0,c.i)(n.value))return n.value.call(e,t);throw new i.D$(e,i.TX.CallNonFunction,t)}throw new i.D$(e,i.TX.FunctionNotFound,t)}(e,t);case"UnaryExpression":return await async function(e,t){const n=await C(e,t.argument);if((0,c.a)(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*(0,c.g)(n);if("+"===t.operator)return 1*(0,c.g)(n);if("~"===t.operator)return~(0,c.g)(n);throw new i.D$(e,i.TX.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*(0,c.g)(n);if("+"===t.operator)return 1*(0,c.g)(n);if("~"===t.operator)return~(0,c.g)(n);throw new i.D$(e,i.TX.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function(e,t){const n=[];n[0]=await C(e,t.left),n[1]=await C(e,t.right);const r=n[0],o=n[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,c.G)((0,c.g)(r),(0,c.g)(o),t.operator);case"==":return(0,c.F)(r,o);case"!=":return!(0,c.F)(r,o);case"<":case">":case"<=":case">=":return(0,c.E)(r,o,t.operator);case"+":return(0,c.c)(r)||(0,c.c)(o)?(0,c.j)(r)+(0,c.j)(o):(0,c.g)(r)+(0,c.g)(o);case"-":return(0,c.g)(r)-(0,c.g)(o);case"*":return(0,c.g)(r)*(0,c.g)(o);case"/":return(0,c.g)(r)/(0,c.g)(o);case"%":return(0,c.g)(r)%(0,c.g)(o);default:throw new i.D$(e,i.TX.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function(e,t){const n=await C(e,t.left);let r=null;if(!(0,c.a)(n))throw new i.D$(e,i.TX.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===n)return n;if(r=await C(e,t.right),(0,c.a)(r))return r;throw new i.D$(e,i.TX.LogicExpressionOrAnd,t);case"&&":if(!1===n)return n;if(r=await C(e,t.right),(0,c.a)(r))return r;throw new i.D$(e,i.TX.LogicExpressionOrAnd,t);default:throw new i.D$(e,i.TX.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await C(e,t.elements[r]));for(let r=0;r<n.length;r++){if((0,c.i)(n[r]))throw new i.D$(e,i.TX.NoFunctionInArray,t);n[r]===c.B&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function(e,t){const n=[];for(let r=0;r<t.properties.length;r++)n[r]=await C(e,t.properties[r]);const r={},o=new Map;for(let a=0;a<n.length;a++){const l=n[a];if((0,c.i)(l.value))throw new i.D$(e,i.TX.NoFunctionInDictionary,t);if(!1===(0,c.c)(l.key))throw new i.D$(e,i.TX.KeyMustBeString,t);let s=l.key.toString();const u=s.toLowerCase();o.has(u)?s=o.get(u):o.set(u,s),l.value===c.B?r[s]=null:r[s]=l.value}const l=new a.A(r);return l.immutable=!1,l}(e,t);case"Property":return await async function(e,t){const n=await C(e,t.value);return"Identifier"===t.key.type?{key:t.key.name,value:n}:{key:await C(e,t.key),value:n}}(e,t);default:throw new i.D$(e,i.TX.Unrecognized,t)}}catch(n){throw(0,i.Nh)(e,t,n)}}async function A(e,t,n){const r=await C(e,t.body);return n.lastAction=r,n.lastAction===c.C||n.lastAction instanceof c.z?(n.testResult=!1,n):null!==t.update?(await C(e,t.update),n):n}function B(e,t,n,r,o,a){try{(async function(e,t,n){if(null!==t.test){const r=await C(e,t.test);if(!0===e.abortSignal?.aborted)throw new i.D$(e,i.TX.Cancelled,t);if(n.testResult=r,!1===n.testResult)return n;if(!0!==n.testResult)throw new i.D$(e,i.TX.BooleanConditionRequired,t);return A(e,t,n)}return A(e,t,n)})(e,t,n).then((()=>{try{!0===n.testResult?++a>D?(a=0,setTimeout((()=>{B(e,t,n,r,o,a)}),0)):B(e,t,n,r,o,a):n.lastAction instanceof c.z?r(n.lastAction):r(c.B)}catch(e){o(e)}}),(e=>{o(e)}))}catch(e){o(e)}}function I(e,t,n,r,o,a,i,l,s,u){try{if(r<=a)return void l(c.B);o.value="k"===i?n[a]:a,C(e,t.body).then((f=>{try{f instanceof c.z?l(f):f===c.C?l(c.B):++u>D?(u=0,setTimeout((()=>{I(e,t,n,r,o,a+1,i,l,s,u)}),0)):I(e,t,n,r,o,a+1,i,l,s,u)}catch(e){s(e)}}),(e=>{s(e)}))}catch(e){s(e)}}function F(e,t,n,r,o,a,i,l,s){try{if(n.length()<=o)return void i(c.B);r.value="k"===a?n.get(o):o,C(e,t.body).then((u=>{u instanceof c.z?i(u):u===c.C?i(c.B):++s>D?(s=0,setTimeout((()=>{F(e,t,n,r,o+1,a,i,l,s)}),0)):F(e,t,n,r,o+1,a,i,l,s)}),(e=>{l(e)}))}catch(e){l(e)}}function R(e,t,n,r,o,a){try{if(void 0===a&&(a="i"),0===n.length)return void r.resolve(c.B);I(e,t,n,n.length,o,0,a,(e=>{r.resolve(e)}),(e=>{r.reject(e)}),0)}catch(e){r.reject(e)}}function M(e,t,n,r,o,a,i,s){try{e.next().then((u=>{try{if(null===u)a(c.B);else{const f=l.A.createFromGraphicLikeObject(u.geometry,u.attributes,r,t.timeZone);f._underlyingGraphic=u,o.value=f,C(t,n.body).then((l=>{try{l===c.C?a(c.B):l instanceof c.z?a(l):++s>D?(s=0,setTimeout((()=>{M(e,t,n,r,o,a,i,s)}),0)):M(e,t,n,r,o,a,i,s)}catch(e){i(e)}}),(e=>{i(e)}))}}catch(e){i(e)}}),(e=>{i(e)}))}catch(e){i(e)}}function k(e,t,n,r,o){switch(t){case"=":return e===c.B?null:e;case"/=":return(0,c.g)(n)/(0,c.g)(e);case"*=":return(0,c.g)(n)*(0,c.g)(e);case"-=":return(0,c.g)(n)-(0,c.g)(e);case"+=":return(0,c.c)(n)||(0,c.c)(e)?(0,c.j)(n)+(0,c.j)(e):(0,c.g)(n)+(0,c.g)(e);case"%=":return(0,c.g)(n)%(0,c.g)(e);default:throw new i.D$(o,i.TX.UnsupportedOperator,r)}}async function N(e,t,n){if(n>=t.body.length)return c.B;const r=await C(e,t.body[n]);return r instanceof c.z||r===c.C||r===c.D||n===t.body.length-1?r:N(e,t,n+1)}async function L(e,t,n){return n>=t.declarations.length||(await C(e,t.declarations[n]),n===t.declarations.length-1||await L(e,t,n+1)),c.B}async function O(e,t){const n=t.name.toLowerCase();if(null!=e.localScope&&void 0!==e.localScope[n]){const t=e.localScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==e.globalScope[n]){const t=e.globalScope[n];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=C(e,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new i.D$(e,i.TX.InvalidIdentifier,t)}function E(e,t,n){if((0,c.i)(e))throw new i.D$(t,i.TX.NoFunctionInTemplateLiteral,n);return e}const j={};async function P(e,t,n,r){const o=await C(e,t.arguments[n]);if((0,c.F)(o,r))return C(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?C(e,t.arguments[n]):2===a?null:3===a?C(e,t.arguments[n+2]):P(e,t,n+2,r)}async function U(e,t,n,r){if(!0===r)return C(e,t.arguments[n+1]);if(3==t.arguments.length-n)return C(e,t.arguments[n+2]);const o=await C(e,t.arguments[n+2]);if(!1===(0,c.a)(o))throw new i.D$(e,i.TX.ModuleExportNotFound,t.arguments[n+2]);return U(e,t,n+2,o)}async function q(e,t,n,r){const o=e.body;if(n.length!==e.params.length)throw new i.D$(t,i.TX.WrongNumberOfParameters,null);for(let r=0;r<n.length;r++){const o=e.params[r];"Identifier"===o.type&&null!=t.localScope&&(t.localScope[o.name.toLowerCase()]={d:null,value:n[r],valueset:!0,node:null})}const a=await C(t,o);if(a instanceof c.z)return a.value;if(a===c.C)throw new i.D$(t,i.TX.UnexpectedToken,r);if(a===c.D)throw new i.D$(t,i.TX.UnexpectedToken,r);return a instanceof c.A?a.value:a}(0,w.d)(j,S),(0,m.d)(j,S),(0,h.d)(j,S),(0,d.d)(j,S),(0,g.d)(j,S),(0,p.registerFunctions)({functions:j,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:S,standardFunctionAsync:$}),j.iif=async function(e,t){(0,c.H)(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await C(e,t.arguments[0]);if(!1===(0,c.a)(n))throw new i.D$(e,i.TX.BooleanConditionRequired,t);return C(e,n?t.arguments[1]:t.arguments[2])},j.defaultvalue=async function(e,t){(0,c.H)(null===t.arguments?[]:t.arguments,2,3,e,t);const n=await C(e,t.arguments[0]);if(3===t.arguments.length){const r=await C(e,t.arguments[1]);let o=[];if((0,c.q)(r))o=r.toArray();else{if(!(0,c.o)(r))throw new i.D$(e,i.TX.InvalidParameter,t);o=r}let l=n;if(null===l)return C(e,t.arguments[2]);for(const n of o)if((0,c.r)(l)){if(!1===(0,c.c)(n))return C(e,t.arguments[2]);if(!l.hasField(n))return C(e,t.arguments[2]);l=l.field(n)}else if(l instanceof a.A){if(!1===(0,c.c)(n))return C(e,t.arguments[2]);if(!l.hasField(n))return C(e,t.arguments[2]);l=l.field(n)}else if(l instanceof y.A){if(!1===(0,c.c)(n))return C(e,t.arguments[2]);if(l=(0,d.B)(l,n,null,null,2),null===l)return C(e,t.arguments[2]);if("notfound"===l?.keystate)return C(e,t.arguments[2])}else if((0,c.o)(l)){if(!1===(0,c.b)(n))return C(e,t.arguments[2]);if(l=l[n],null==l)return C(e,t.arguments[2])}else{if(!(0,c.q)(l))return C(e,t.arguments[2]);if(!1===(0,c.b)(n))return C(e,t.arguments[2]);if(l=l.get(n),null==l)return C(e,t.arguments[2])}return l}return null==n||""===n?C(e,t.arguments[1]):n},j.decode=async function(e,t){if(t.arguments.length<2)throw new i.D$(e,i.TX.WrongNumberOfParameters,t);if(2===t.arguments.length)return C(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new i.D$(e,i.TX.WrongNumberOfParameters,t);return P(e,t,1,await C(e,t.arguments[0]))},j.when=async function(e,t){if(t.arguments.length<3)throw new i.D$(e,i.TX.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new i.D$(e,i.TX.WrongNumberOfParameters,t);const n=await C(e,t.arguments[0]);if(!1===(0,c.a)(n))throw new i.D$(e,i.TX.BooleanConditionRequired,t.arguments[0]);return U(e,t,0,n)};const K={fixSpatialReference:c.x,parseArguments:T,standardFunction:S,standardFunctionAsync:$,evaluateIdentifier:O};for(const e in j)j[e]={value:new s.UQ(j[e]),valueset:!0,node:null};const z=function(){};function G(e,t,n){const r=new z;null==e&&(e={}),null==t&&(t={});const o=new a.A({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const e in t)r[e]={value:new s.UQ(t[e]),native:!0,valueset:!0,node:null};for(const t in e)e[t]&&"esri.Graphic"===e[t].declaredClass?r[t]={value:l.A.createFromGraphic(e[t],n),valueset:!0,node:null}:r[t]={value:e[t],valueset:!0,node:null};return r}function Z(e){console.log(e)}z.prototype=j,z.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},z.prototype.pi={value:Math.PI,valueset:!0,node:null};const _=K;function W(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:S,standardFunctionAsync:$,evaluateIdentifier:O};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const e in t.functions)j[e]={value:new s.UQ(t.functions[e]),valueset:!0,node:null},z.prototype[e]=j[e];for(let e=0;e<t.signatures.length;e++)(0,u.WC)(t.signatures[e],"async")}async function V(e,t){let n=t.spatialReference;null==n&&(n=new v.A({wkid:102100}));let r=null;e.usesModules&&(r=new o.a(new Map,e.loadedModules));const a=G(t.vars,t.customfunctions,t.timeZone),l={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:a,console:t.console??Z,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}};let s=await C(l,e);if(s instanceof c.z&&(s=s.value),s instanceof c.A&&(s=s.value),s===c.B&&(s=null),s===c.C)throw new i.D$(l,i.TX.IllegalResult,null);if(s===c.D)throw new i.D$(l,i.TX.IllegalResult,null);if((0,c.i)(s))throw new i.D$(l,i.TX.IllegalResult,null);return s}W([f.A])}}]);