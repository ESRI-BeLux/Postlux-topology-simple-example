/*! For license information please see 9525.js.LICENSE.txt */
"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[9525],{79525:(e,t,i)=>{i.r(t),i.d(t,{CalciteBlock:()=>D,defineCustomElement:()=>M});var a=i(74815),s=i(26786),c=i(72006),n=i(27114),l=i(32282),o=i(27053),r=i(65336),d=i(832),h=i(79107),g=i(48718),u=i(73668),f=i(39178),m=i(74697),b=i(48131),p=i(57063),v=i(93968);const k="content",y="toggle",x="header",C="container",w="icon",L="invalid",z="status-icon",E="valid",B="icon",H="control",T="header-menu-actions",O={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},S=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockBeforeClose=(0,a.lh)(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=(0,a.lh)(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=(0,a.lh)(this,"calciteBlockClose",6),this.calciteBlockOpen=(0,a.lh)(this,"calciteBlockOpen",6),this.calciteBlockToggle=(0,a.lh)(this,"calciteBlockToggle",6),this.openTransitionProp="opacity",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.setTransitionEl=e=>{this.transitionEl=e},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){(0,h.o)(this)}onMessagesChange(){}async setFocus(){await(0,d.c)(this),(0,c.f)(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,n.c)(this),(0,l.c)(this),(0,o.c)(this)}disconnectedCallback(){(0,n.d)(this),(0,l.d)(this),(0,o.d)(this),(0,s.d)(this)}async componentWillLoad(){await(0,o.s)(this),(0,d.s)(this),this.open&&(0,h.o)(this)}componentDidLoad(){(0,d.a)(this)}componentDidRender(){(0,n.u)(this)}renderScrim(){const{loading:e}=this,t=(0,a.h)("slot",null);return[e?(0,a.h)("calcite-scrim",{loading:e}):null,t]}renderIcon(){const{loading:e,messages:t,status:i}=this,s=!!(0,c.g)(this.el,B);return e?(0,a.h)("div",{class:w,key:"loader"},(0,a.h)("calcite-loader",{inline:!0,label:t.loading})):i?(0,a.h)("div",{class:w,key:"status-icon"},(0,a.h)("calcite-icon",{class:{[z]:!0,[E]:"valid"==i,[L]:"invalid"==i},icon:O[i],scale:"s"})):s?(0,a.h)("div",{class:w,key:"icon-slot"},(0,a.h)("slot",{key:"icon-slot",name:B})):null}renderTitle(){const{heading:e,headingLevel:t,description:i}=this;return e||i?(0,a.h)("div",{class:"title"},(0,a.h)(r.H,{class:"heading",level:t},e),i?(0,a.h)("div",{class:"description"},i):null):null}render(){const{collapsible:e,el:t,loading:i,open:s,heading:l,messages:o}=this,r=s?o.collapse:o.expand,d=(0,a.h)("header",{key:"aefae50b975f87b21c9b37f7eae2df49062ee5f8",class:"header",id:x},this.renderIcon(),this.renderTitle()),h=!!(0,c.g)(t,H),g=!!(0,c.g)(t,T),u=s?O.opened:O.closed,f=(0,a.h)("div",{key:"f8c5ce075f5d83e483ee3d2d62fd187fd0987b30",class:"header-container"},this.dragHandle?(0,a.h)("calcite-handle",{label:l}):null,e?(0,a.h)("button",{"aria-controls":k,"aria-describedby":x,"aria-expanded":e?(0,c.t)(s):null,class:"toggle",id:y,onClick:this.onHeaderClick,title:r},d,(0,a.h)("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:u,scale:"s"})):d,h?(0,a.h)("div",{class:"control-container"},(0,a.h)("slot",{name:H})):null,g?(0,a.h)("calcite-action-menu",{label:o.options,overlayPositioning:this.overlayPositioning},(0,a.h)("slot",{name:T})):null);return(0,a.h)(a.xr,{key:"8e984813d8283475171ad0b58bb77c6671da394c"},(0,a.h)(n.I,{key:"9757aa3d3d51eeca2eece6b7fcf1ed2bdbc9d4eb",disabled:this.disabled},(0,a.h)("article",{key:"6722572eb61cf147e473bd237bff74bafde0af56","aria-busy":(0,c.t)(i),class:{[C]:!0}},f,(0,a.h)("section",{key:"14a1118f4b8a7d3f8ddc063cbcd2ba062090973a","aria-labelledby":y,class:"content",hidden:!s,id:k,ref:this.setTransitionEl},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:var(--calcite-font-family);outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0.75rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],loading:[516],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function A(){"undefined"!=typeof customElements&&["calcite-block","calcite-action","calcite-action-menu","calcite-handle","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-block":customElements.get(e)||customElements.define(e,S);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,u.d)();break;case"calcite-handle":customElements.get(e)||(0,f.d)();break;case"calcite-icon":customElements.get(e)||(0,m.d)();break;case"calcite-loader":customElements.get(e)||(0,b.d)();break;case"calcite-popover":customElements.get(e)||(0,p.d)();break;case"calcite-scrim":customElements.get(e)||(0,v.d)()}}))}A();const D=S,M=A},26786:(e,t,i)=>{i.d(t,{c:()=>l,d:()=>o});var a=i(74815),s=i(40313);let c;const n={childList:!0};function l(e){c||(c=(0,s.c)("mutation",r)),c.observe(e.el,n)}function o(e){c.unobserve(e.el)}function r(e){e.forEach((({target:e})=>{(0,a.$x)(e)}))}},39178:(e,t,i)=>{i.d(t,{d:()=>f});var a=i(74815),s=i(72006),c=i(832),n=i(32282),l=i(27053),o=i(27114),r=i(74697);const d="handle",h="handle--selected",g="{itemLabel}",u=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleChange=(0,a.lh)(this,"calciteHandleChange",6),this.calciteHandleNudge=(0,a.lh)(this,"calciteHandleNudge",6),this.calciteInternalAssistiveTextChange=(0,a.lh)(this,"calciteInternalAssistiveTextChange",6),this.handleKeyDown=e=>{if(!this.disabled)switch(e.key){case" ":this.selected=!this.selected,this.calciteHandleChange.emit(),e.preventDefault();break;case"ArrowUp":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.selected)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"})}},this.handleBlur=()=>{this.blurUnselectDisabled||this.disabled||this.selected&&(this.selected=!1,this.calciteHandleChange.emit())},this.selected=!1,this.disabled=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.blurUnselectDisabled=!1,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalAssistiveTextChange.emit({message:e})}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,l.c)(this),(0,n.c)(this)}async componentWillLoad(){(0,c.s)(this),await(0,l.s)(this)}componentDidLoad(){(0,c.a)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this),(0,n.d)(this)}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async setFocus(){await(0,c.c)(this),this.handleButton?.focus()}getTooltip(){const{label:e,messages:t}=this;return t?e?t.dragHandle.replace(g,e):t.dragHandleUntitled:""}getAriaText(e){const{setPosition:t,setSize:i,label:a,messages:s,selected:c}=this;return s&&a&&"number"==typeof i&&"number"==typeof t?("label"===e?c?s.dragHandleChange:s.dragHandleIdle:c?s.dragHandleActive:s.dragHandleCommit).replace("{position}",t.toString()).replace(g,a).replace("{total}",i.toString()):null}render(){return(0,a.h)("span",{key:"985ea19917a01e2fc366466d13909b297afa4b19","aria-checked":this.disabled?null:(0,s.t)(this.selected),"aria-disabled":this.disabled?(0,s.t)(this.disabled):null,"aria-label":this.disabled?null:this.getAriaText("label"),class:{[d]:!0,[h]:!this.disabled&&this.selected},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"radio",tabIndex:this.disabled?null:0,title:this.getTooltip(),ref:e=>{this.handleButton=e}},(0,a.h)("calcite-icon",{key:"d904676f59997c1a673979adf1b58af369883eb3",icon:"drag",scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-handle",{selected:[1540],disabled:[516],dragHandle:[513,"drag-handle"],messages:[16],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],blurUnselectDisabled:[4,"blur-unselect-disabled"],messageOverrides:[16],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],selected:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function f(){"undefined"!=typeof customElements&&["calcite-handle","calcite-icon"].forEach((e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,u);break;case"calcite-icon":customElements.get(e)||(0,r.d)()}}))}f()},93968:(e,t,i)=>{i.d(t,{S:()=>r,d:()=>d});var a=i(74815),s=i(32282),c=i(27053),n=i(40313),l=i(72006),o=i(48131);const r=(0,a.w$)(class extends a.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,n.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,l.r)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,c.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,c.s)(this)}disconnectedCallback(){(0,s.d)(this),(0,c.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:t,messages:i}=this;return(0,a.h)("div",{key:"7a0aeafa981a687bb129a2ba939f5db1325d3a36",class:"scrim"},t?(0,a.h)("calcite-loader",{label:i.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,a.h)("div",{key:"7c3c32b66e2012e95e569fbb2dd651b774c124b0",class:"content",hidden:!e},(0,a.h)("slot",{key:"4d2fc58294f4c5aa4655a58d41e5e2034578453e",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<72?"s":e>=480?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function d(){"undefined"!=typeof customElements&&["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,r);break;case"calcite-loader":customElements.get(e)||(0,o.d)()}}))}d()}}]);