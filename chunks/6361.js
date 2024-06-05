/*! For license information please see 6361.js.LICENSE.txt */
"use strict";(self.webpackChunkarcgis_typescript_template=self.webpackChunkarcgis_typescript_template||[]).push([[6361],{96361:(e,t,o)=>{o.r(t),o.d(t,{CalciteDropdownGroup:()=>a,defineCustomElement:()=>d});var r=o(74815),n=o(40313),i=o(99274);const s=(0,r.w$)(class extends r.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalDropdownItemChange=(0,r.lh)(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((e=>e.selectionMode=this.selectionMode))},this.mutationObserver=(0,n.c)("mutation",(()=>this.updateItems())),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){this.updateItems(),this.mutationObserver?.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const e=this.groupTitle?(0,r.h)("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,t=this.groupPosition>0?(0,r.h)("div",{class:"dropdown-separator",role:"separator"}):null;return(0,r.h)(r.xr,{key:"c1b662afcbb612d775cea66edb949d71f5f63167","aria-label":this.groupTitle,role:"group"},(0,r.h)("div",{key:"cdfdb0919b1b6006f69f7fbcda0c16c2beefec5e",class:{[i.C.container]:!0,[`${i.C.container}--${this.scale}`]:!0}},t,e,(0,r.h)("slot",{key:"166c8236f3315d2f038f61b0619270d2bd9b344a"})))}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{selectionMode:["handlePropsChange"]}}static get style(){return":host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-dropdown-group",{groupTitle:[513,"group-title"],scale:[1],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalDropdownItemSelect","updateActiveItemOnChange"]],{selectionMode:["handlePropsChange"]}]);function c(){"undefined"!=typeof customElements&&["calcite-dropdown-group"].forEach((e=>{"calcite-dropdown-group"===e&&(customElements.get(e)||customElements.define(e,s))}))}c();const a=s,d=c},40313:(e,t,o)=>{o.d(t,{c:()=>n});var r=o(74815);function n(e,t,o){if(!r.L2.isBrowser)return;const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,o)}},99274:(e,t,o)=>{o.d(t,{C:()=>r});const r={container:"container",containerLink:"container--link",containerMulti:"container--multi-selection",containerSingle:"container--single-selection",containerNone:"container--none-selection",icon:"dropdown-item-icon",iconEnd:"dropdown-item-icon-end",iconStart:"dropdown-item-icon-start",itemContent:"dropdown-item-content",link:"dropdown-link"}}}]);