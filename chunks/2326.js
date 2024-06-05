/*! For license information please see 2326.js.LICENSE.txt */
"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[2326],{12326:(e,t,a)=>{a.r(t),a.d(t,{CalciteFlowItem:()=>M,defineCustomElement:()=>I});var i=a(74815),s=a(72006),o=a(27114),n=a(832),c=a(32282),l=a(27053),r=a(40313),d=a(73668),h=a(65336),g=a(48718),b=a(74697),f=a(48131),m=a(57063),p=a(93968);const u="header-container",v="header-container--border-end",k="header-content",y="header-actions",C="header-actions--end",x="header-actions--start",w="action-bar",S="header-actions-start",E="header-actions-end",z="header-menu-actions",H="header-content",F="footer",L="footer-actions",A=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=(0,i.lh)(this,"calcitePanelClose",6),this.calcitePanelToggle=(0,i.lh)(this,"calcitePanelToggle",6),this.calcitePanelScroll=(0,i.lh)(this,"calcitePanelScroll",6),this.resizeObserver=(0,r.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=(0,s.d)(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=(0,s.d)(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=(0,s.d)(e)},this.handleActionBarSlotChange=e=>{const t=(0,s.s)(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=(0,s.d)(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=(0,s.d)(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=(0,s.d)(e)},this.handleFabSlotChange=e=>{this.hasFab=(0,s.d)(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,c.c)(this),(0,l.c)(this)}async componentWillLoad(){(0,n.s)(this),await(0,l.s)(this)}componentDidLoad(){(0,n.a)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,c.d)(this),(0,l.d)(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async setFocus(){await(0,n.c)(this),(0,s.f)(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:s}=this,o=e?(0,i.h)(h.H,{class:"heading",level:t},e):null,n=a?(0,i.h)("span",{class:"description"},a):null;return s||!o&&!n?null:(0,i.h)("div",{class:k,key:"header-content"},o,n)}renderActionBar(){return(0,i.h)("div",{class:"action-bar-container",hidden:!this.hasActionBar},(0,i.h)("slot",{name:w,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,i.h)("div",{class:k,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,i.h)("slot",{name:H,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,i.h)("div",{class:{[x]:!0,[y]:!0},hidden:!e,key:"header-actions-start"},(0,i.h)("slot",{name:S,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:a,collapsed:o,collapseDirection:n,collapsible:c,hasMenuItems:l}=this,{collapse:r,expand:d,close:h}=t,g=["chevron-down","chevron-up"];"up"===n&&g.reverse();const b=c?(0,i.h)("calcite-action",{"aria-expanded":(0,s.t)(!o),"aria-label":r,"data-test":"collapse",icon:o?g[0]:g[1],onClick:this.collapse,text:r,title:o?d:r}):null,f=a?(0,i.h)("calcite-action",{"aria-label":h,"data-test":"close",icon:"x",onClick:this.close,text:h,title:h}):null,m=(0,i.h)("slot",{name:E,onSlotchange:this.handleHeaderActionsEndSlotChange}),p=e||b||f||l;return(0,i.h)("div",{class:{[C]:!0,[y]:!0},hidden:!p,key:"header-actions-end"},m,this.renderMenu(),b,f)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return(0,i.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},(0,i.h)("calcite-action",{icon:"ellipsis",slot:d.S.trigger,text:t.options}),(0,i.h)("slot",{name:z,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:s,collapsible:o,hasMenuItems:n,hasActionBar:c}=this,l=this.renderHeaderContent(),r=e||!!l||t||a||o||s||n;return this.showHeaderContent=r,(0,i.h)("header",{class:"header",hidden:!(r||c)},(0,i.h)("div",{class:{[u]:!0,[v]:c},hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),l,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,a=e||t;return(0,i.h)("footer",{class:"footer",hidden:!a},(0,i.h)("slot",{key:"footer-slot",name:F,onSlotchange:this.handleFooterSlotChange}),(0,i.h)("slot",{key:"footer-actions-slot",name:L,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return(0,i.h)("div",{class:"content-wrapper",hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},(0,i.h)("slot",null),this.renderFab())}renderFab(){return(0,i.h)("div",{class:"fab-container",hidden:!this.hasFab},(0,i.h)("slot",{name:"fab",onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,panelKeyDownHandler:a,closed:n,closable:c}=this,l=(0,i.h)("article",{key:"c03a39a1d58126b861ce2a4f7610a20d8bee288d","aria-busy":(0,s.t)(t),class:"container",hidden:n,tabIndex:c?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return(0,i.h)(i.xr,{key:"0378ba8d08d9c802b21f3c8edd9926f759a6381c",onKeyDown:a},(0,i.h)(o.I,{key:"ada3c75b32686e450190e407d6c4855e7e1310eb",disabled:e},t?(0,i.h)("calcite-scrim",{loading:t}):null,l))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function P(){"undefined"!=typeof customElements&&["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,A);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-loader":customElements.get(e)||(0,f.d)();break;case"calcite-popover":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,p.d)()}}))}P();const B=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=(0,i.lh)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,i.lh)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,i.lh)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,i.lh)(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,o.c)(this),(0,c.c)(this),(0,l.c)(this)}async componentWillLoad(){await(0,l.s)(this),(0,n.s)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,o.d)(this),(0,c.d)(this),(0,l.d)(this)}componentDidLoad(){(0,n.a)(this)}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async setFocus(){await(0,n.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){await(this.containerEl?.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,s.a)(e),{showBackButton:a,backButtonClick:o,messages:n}=this,c=n.back,l=t?"chevron-right":"chevron-left";return a?(0,i.h)("calcite-action",{"aria-label":c,class:"back-button",icon:l,key:"flow-back-button",onClick:o,scale:"s",slot:"header-actions-start",text:c,title:c,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:a,closable:s,closed:n,description:c,disabled:l,heading:r,headingLevel:d,loading:h,menuOpen:g,messages:b,overlayPositioning:f}=this;return(0,i.h)(i.xr,{key:"ab926d381ff2493f3fd49a5c8724260211d69ca9"},(0,i.h)(o.I,{key:"6799b56c2116de5e08739ddc2ec1557bd291f3f8",disabled:l},(0,i.h)("calcite-panel",{key:"2e438b8abf573eabaaa2e966dcca5c4843a53cba",closable:s,closed:n,collapseDirection:t,collapsed:e,collapsible:a,description:c,disabled:l,heading:r,headingLevel:d,loading:h,menuOpen:g,messageOverrides:b,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,overlayPositioning:f,ref:this.setContainerRef},this.renderBackButton(),(0,i.h)("slot",{key:"39b650abdf64df16f535d45f64dc1b367acfcc9e",name:"action-bar",slot:w}),(0,i.h)("slot",{key:"5b36c56874ad762f842c81f9ffbdcdbd3168cf75",name:"header-actions-start",slot:S}),(0,i.h)("slot",{key:"2dbf552425d238a4479a12bbec79571d11124577",name:"header-actions-end",slot:E}),(0,i.h)("slot",{key:"2dd0a30236844c91c2cf10a9fbacbe9935ea234c",name:"header-content",slot:H}),(0,i.h)("slot",{key:"1b025f746e2e7d58fb057aab36b24e46872e607e",name:"header-menu-actions",slot:z}),(0,i.h)("slot",{key:"5dd5986e93dcc11e0b0fade6822814b160053c70",name:"fab",slot:"fab"}),(0,i.h)("slot",{key:"e7cf2702cd2e423d07a8a8ac57c142bc4738b3ef",name:"footer-actions",slot:L}),(0,i.h)("slot",{key:"e2561d89aaebe4fbb82b1f546551d05ebb23b0bf",name:"footer",slot:F}),(0,i.h)("slot",{key:"fb6bf40456038f84486b2858765bb9d147800e84"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function O(){"undefined"!=typeof customElements&&["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,B);break;case"calcite-action":customElements.get(e)||(0,g.d)();break;case"calcite-action-menu":customElements.get(e)||(0,d.d)();break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-loader":customElements.get(e)||(0,f.d)();break;case"calcite-panel":customElements.get(e)||P();break;case"calcite-popover":customElements.get(e)||(0,m.d)();break;case"calcite-scrim":customElements.get(e)||(0,p.d)()}}))}O();const M=B,I=O},93968:(e,t,a)=>{a.d(t,{S:()=>r,d:()=>d});var i=a(74815),s=a(32282),o=a(27053),n=a(40313),c=a(72006),l=a(48131);const r=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=(0,n.c)("resize",(()=>this.handleResize())),this.handleDefaultSlotChange=e=>{this.hasContent=(0,c.r)(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,o.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){await(0,o.s)(this)}disconnectedCallback(){(0,s.d)(this),(0,o.d)(this),this.resizeObserver?.disconnect()}render(){const{hasContent:e,loading:t,messages:a}=this;return(0,i.h)("div",{key:"7a0aeafa981a687bb129a2ba939f5db1325d3a36",class:"scrim"},t?(0,i.h)("calcite-loader",{label:a.loading,scale:this.loaderScale,ref:this.storeLoaderEl}):null,(0,i.h)("div",{key:"7c3c32b66e2012e95e569fbb2dd651b774c124b0",class:"content",hidden:!e},(0,i.h)("slot",{key:"4d2fc58294f4c5aa4655a58d41e5e2034578453e",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<72?"s":e>=480?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function d(){"undefined"!=typeof customElements&&["calcite-scrim","calcite-loader"].forEach((e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,r);break;case"calcite-loader":customElements.get(e)||(0,l.d)()}}))}d()}}]);