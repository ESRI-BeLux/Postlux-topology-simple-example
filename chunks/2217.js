/*! For license information please see 2217.js.LICENSE.txt */
"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[2217],{70248:(e,t,o)=>{o.d(t,{A:()=>m,S:()=>g,d:()=>f});var i=o(74815),a=o(26786),n=o(832),s=o(32282),c=o(27053),l=o(73668),r=o(72006),d=o(48718),h=o(74697),u=o(48131),p=o(57063);const g={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},m=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=(0,r.d)(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,n.c)(this),this.el.focus()}connectedCallback(){(0,s.c)(this),(0,c.c)(this),(0,a.c)(this)}disconnectedCallback(){(0,s.d)(this),(0,c.d)(this),(0,a.d)(this)}async componentWillLoad(){(0,n.s)(this),await(0,c.s)(this)}componentDidLoad(){(0,n.a)(this)}renderMenu(){const{expanded:e,menuOpen:t,scale:o,layout:a,messages:n,overlayPositioning:s,hasMenuActions:c}=this;return(0,i.h)("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],hidden:!c,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:s,placement:"horizontal"===a?"bottom-start":"leading-start",scale:o},(0,i.h)("calcite-action",{icon:"ellipsis",scale:o,slot:l.S.trigger,text:n.more,textEnabled:e}),(0,i.h)("slot",{name:g.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),(0,i.h)("slot",{name:g.menuTooltip,slot:l.S.tooltip}))}render(){return(0,i.h)("div",{key:"689447fecc5bda66fb3b0017288c192033131615","aria-label":this.label,class:"container",role:"group"},(0,i.h)("slot",{key:"d168163c365d6ec486aa5fa975fad904ba3a525e"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-color-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}'}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function f(){"undefined"!=typeof customElements&&["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,m);break;case"calcite-action":customElements.get(e)||(0,d.d)();break;case"calcite-action-menu":customElements.get(e)||(0,l.d)();break;case"calcite-icon":customElements.get(e)||(0,h.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)();break;case"calcite-popover":customElements.get(e)||(0,p.d)()}}))}f()},22217:(e,t,o)=>{o.r(t),o.d(t,{CalciteActionBar:()=>C,defineCustomElement:()=>k});var i=o(74815),a=o(26786),n=o(72006),s=o(832),c=o(32282),l=o(40313),r=o(27053),d=o(70248),h=o(73668);const u=e=>e.reduce(((e,t)=>e+t),0)/e.length,p=({layout:e,actionCount:t,actionWidth:o,width:i,actionHeight:a,height:n,groupCount:s})=>Math.max(t-(({width:e,actionWidth:t,layout:o,height:i,actionHeight:a,groupCount:n})=>{const s="horizontal"===o?e:i,c="horizontal"===o?t:a;return Math.floor((s-2*n)/c)})({width:i,actionWidth:o,layout:e,height:n,actionHeight:a,groupCount:s}),0),g=e=>Array.from(e.querySelectorAll("calcite-action")).filter((e=>!e.closest("calcite-action-menu")||e.slot===h.S.trigger));function m({el:e,expanded:t}){g(e).filter((e=>e.slot!==d.S.menuActions)).forEach((e=>e.textEnabled=t)),e.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((e=>e.expanded=t))}const f=({expanded:e,expandText:t,collapseText:o,toggle:a,el:s,position:c,tooltip:l,ref:r,scale:d})=>{const h="rtl"===(0,n.a)(s),u=e?o:t,p=["chevrons-left","chevrons-right"];h&&p.reverse();const g="end"===function(e,t){return e||t.closest("calcite-shell-panel")?.position||"start"}(c,s),m=g?p[1]:p[0],f=g?p[0]:p[1],v=(0,i.h)("calcite-action",{icon:e?m:f,onClick:a,scale:d,text:u,textEnabled:e,title:e||l?null:u,ref:t=>(({tooltip:e,referenceElement:t,expanded:o,ref:i})=>(e&&(e.referenceElement=!o&&t?t:null),i&&i(t),t))({tooltip:l,referenceElement:t,expanded:e,ref:r})});return v};var v=o(48718),b=o(74697),x=o(48131),y=o(57063),A=o(82395);const w=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionBarToggle=(0,i.lh)(this,"calciteActionBarToggle",6),this.mutationObserver=(0,l.c)("mutation",(()=>{const{el:e,expanded:t}=this;m({el:e,expanded:t}),this.overflowActions()})),this.resizeObserver=(0,l.c)("resize",(e=>this.resizeHandlerEntries(e))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((e=>{t.includes(e)||(e.menuOpen=!1)}))}},this.resizeHandlerEntries=e=>{e.forEach(this.resizeHandler)},this.resizeHandler=e=>{const{width:t,height:o}=e.contentRect;this.resize({width:t,height:o})},this.resize=(0,A.d)((({width:e,height:t})=>{const{el:o,expanded:a,expandDisabled:n,layout:s,overflowActionsDisabled:c}=this;if(c||"vertical"===s&&!t||"horizontal"===s&&!e)return;const l=g(o),r=n?l.length:l.length+1,h=Array.from(o.querySelectorAll("calcite-action-group"));this.setGroupLayout(h);const m=this.hasActionsEnd||this.hasBottomActions||!n?h.length+1:h.length,{actionHeight:f,actionWidth:v}=(e=>{const t=e.filter((e=>e.slot!==d.S.menuActions)),o=t?.length;return{actionWidth:o?u(t.map((e=>e.clientWidth||0))):0,actionHeight:o?u(t.map((e=>e.clientHeight||0))):0}})(l);(({actionGroups:e,expanded:t,overflowCount:o})=>{let a=o;e.reverse().forEach((e=>{let o=0;const n=g(e).reverse();n.forEach((e=>{e.slot===d.S.menuActions&&(e.removeAttribute("slot"),e.textEnabled=t)})),a>0&&n.some((e=>{const t=n.filter((e=>!e.slot));return t.length>1&&n.length>2&&!e.closest("calcite-action-menu")&&(e.textEnabled=!0,e.setAttribute("slot",d.S.menuActions),o++,o>1&&a--),a<1})),(0,i.$x)(e)}))})({actionGroups:h,expanded:a,overflowCount:p({layout:s,actionCount:r,actionHeight:f,actionWidth:v,height:t,width:e,groupCount:m})})}),150),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=(0,n.s)(e).filter((e=>e.matches("calcite-action-group")));this.setGroupLayout(t)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=(0,n.d)(e)},this.handleBottomActionsSlotChange=e=>{this.hasBottomActions=(0,n.d)(e)},this.handleTooltipSlotChange=e=>{const t=(0,n.s)(e).filter((e=>e?.matches("calcite-tooltip")));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandTooltip=void 0,this.defaultMessages=void 0}expandHandler(){this.overflowActions()}expandedHandler(){const{el:e,expanded:t}=this;m({el:e,expanded:t}),this.overflowActions()}layoutHandler(){this.updateGroups()}overflowDisabledHandler(e){e?this.resizeObserver?.disconnect():(this.resizeObserver?.observe(this.el),this.overflowActions())}onMessagesChange(){}effectiveLocaleChange(){(0,r.u)(this,this.effectiveLocale)}componentDidLoad(){const{el:e,expanded:t}=this;(0,s.a)(this),m({el:e,expanded:t}),this.overflowActions()}connectedCallback(){const{el:e,expanded:t}=this;(0,c.c)(this),(0,r.c)(this),m({el:e,expanded:t}),this.mutationObserver?.observe(e,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(e),this.overflowActions(),(0,a.c)(this)}async componentWillLoad(){(0,s.s)(this),await(0,r.s)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,a.d)(this),(0,c.d)(this),(0,r.d)(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await(0,s.c)(this),(0,n.f)(this.el)}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach((e=>e.layout=this.layout))}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,el:o,position:a,toggleExpand:n,scale:s,layout:c,messages:l,actionsEndGroupLabel:r,overlayPositioning:d}=this,h=t?null:(0,i.h)(f,{collapseText:l.collapse,el:o,expandText:l.expand,expanded:e,position:a,scale:s,toggle:n,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return(0,i.h)("calcite-action-group",{class:"action-group--end",hidden:this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions),label:r,layout:c,overlayPositioning:d,scale:s},(0,i.h)("slot",{name:"actions-end",onSlotchange:this.handleActionsEndSlotChange}),(0,i.h)("slot",{name:"bottom-actions",onSlotchange:this.handleBottomActionsSlotChange}),(0,i.h)("slot",{name:"expand-tooltip",onSlotchange:this.handleTooltipSlotChange}),h)}render(){return(0,i.h)(i.xr,{key:"578047ec3165559551c136005f1553bb216ecf57",onCalciteActionMenuOpen:this.actionMenuOpenHandler},(0,i.h)("slot",{key:"74768d564c8f7041d4e0e49c4b117875cb65273f",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup())}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-action-bar",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],overflowActionsDisabled:[516,"overflow-actions-disabled"],overlayPositioning:[513,"overlay-positioning"],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],hasActionsEnd:[32],hasBottomActions:[32],expandTooltip:[32],defaultMessages:[32],overflowActions:[64],setFocus:[64]},void 0,{expandDisabled:["expandHandler"],expanded:["expandedHandler"],layout:["layoutHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function E(){"undefined"!=typeof customElements&&["calcite-action-bar","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-bar":customElements.get(e)||customElements.define(e,w);break;case"calcite-action":customElements.get(e)||(0,v.d)();break;case"calcite-action-group":customElements.get(e)||(0,d.d)();break;case"calcite-action-menu":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-loader":customElements.get(e)||(0,x.d)();break;case"calcite-popover":customElements.get(e)||(0,y.d)()}}))}E();const C=w,k=E},26786:(e,t,o)=>{o.d(t,{c:()=>c,d:()=>l});var i=o(74815),a=o(40313);let n;const s={childList:!0};function c(e){n||(n=(0,a.c)("mutation",r)),n.observe(e.el,s)}function l(e){n.unobserve(e.el)}function r(e){e.forEach((({target:e})=>{(0,i.$x)(e)}))}}}]);