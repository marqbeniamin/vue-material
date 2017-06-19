/*!
* Vue Material v0.7.2
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var d=n[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,t),d.l=!0,d.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=453)})({0:function(e,t){e.exports=function(e,t,n,i,d){var s,o=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(s=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),i&&(c._scopeId=i);var l;if(d?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(d)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,a=u?c.render:c.beforeCreate;u?c.render=function(e,t){return l.call(t),a(e,t)}:c.beforeCreate=a?[].concat(a,l):[l]}return{esModule:s,exports:o,options:c}}},1:function(e,t,n){"use strict";function i(e){if(!e)return null;var t=e.mdTheme;return t||"md-theme"!==e.$options._componentTag||(t=e.mdName),t||i(e.$parent)}Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},computed:{mdEffectiveTheme:function(){return i(this)||this.$material.currentTheme},themeClass:function(){return this.$material.prefix+this.mdEffectiveTheme}},watch:{mdTheme:function(e){this.$material.useTheme(e)}},beforeMount:function(){var e=this.mdTheme;this.$material.useTheme(e?e:"default")}},e.exports=t.default},143:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=n(1),s=i(d);t.default={name:"md-chip",props:{disabled:Boolean,mdDeletable:Boolean,mdEditable:Boolean},mixins:[s.default],computed:{classes:function(){return{"md-deletable":this.mdDeletable,"md-disabled":this.disabled,"md-editable":this.mdEditable}}}},e.exports=t.default},144:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var d=n(1),s=i(d),o=n(36),r=i(o);t.default={name:"md-chips",props:{value:Array,disabled:Boolean,mdInputId:String,mdInputName:String,mdInputPlaceholder:String,mdInputType:{type:String,default:"text"},mdStatic:Boolean,mdMax:{type:Number,default:1/0}},mixins:[s.default],data:function(){return{currentChip:null,selectedChips:this.value,inputId:this.mdInputId||"chips-"+(0,r.default)()}},watch:{value:function(e){this.selectedChips=e}},computed:{classes:function(){return{"md-static":this.mdStatic,"md-disabled":this.disabled,"md-chips":!0}}},methods:{applyInputFocus:function(){var e=this;this.$nextTick((function(){e.$refs.input.$el.focus()}))},addChip:function(){if(this.currentChip&&this.selectedChips.length<this.mdMax){var e=this.currentChip.trim();this.selectedChips.indexOf(e)<0&&(this.selectedChips.push(e),this.currentChip=null,this.$emit("input",this.selectedChips),this.$emit("change",this.selectedChips),this.applyInputFocus())}},deleteChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.$emit("change",this.selectedChips),this.applyInputFocus()},editChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.currentChip=e,this.$emit("change",this.selectedChips),this.applyInputFocus()},deleteLastChip:function(){this.currentChip||(this.selectedChips.pop(),this.$emit("change",this.selectedChips),this.applyInputFocus())}}},e.exports=t.default},250:function(e,t){},271:function(e,t){e.exports=".THEME_NAME.md-chip{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-chip.md-deletable:hover,.THEME_NAME.md-chip.md-deletable:focus,.THEME_NAME.md-chip.md-editable:hover,.THEME_NAME.md-chip.md-editable:focus{background-color:BACKGROUND-CONTRAST-0.54;color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-deletable:hover .md-delete,.THEME_NAME.md-chip.md-deletable:focus .md-delete,.THEME_NAME.md-chip.md-editable:hover .md-delete,.THEME_NAME.md-chip.md-editable:focus .md-delete{color:BACKGROUND-COLOR}.THEME_NAME.md-chip .md-delete{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-chip .md-delete .md-ripple{color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-primary{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-chip.md-accent{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-chip.md-warn{color:WARN-CONTRAST;background-color:WARN-COLOR}\n"},312:function(e,t,n){var i=n(0)(n(143),n(395),null,null,null);e.exports=i.exports},313:function(e,t,n){function i(e){n(250)}var d=n(0)(n(144),n(417),i,null,null);e.exports=d.exports},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){return Math.random().toString(36).slice(4)};t.default=i,e.exports=t.default},395:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-chip",class:[e.themeClass,e.classes],attrs:{tabindex:"0"}},[n("div",{staticClass:"md-chip-container",on:{click:function(t){!e.disabled&&e.mdEditable&&e.$emit("edit")}}},[e._t("default")],2),e._v(" "),e.mdDeletable?n("md-button",{staticClass:"md-icon-button md-dense md-delete",attrs:{tabindex:"-1"},nativeOn:{click:function(t){!e.disabled&&e.$emit("delete")},keyup:function(t){return"button"in t||!e._k(t.keyCode,"delete",[8,46])?void(!e.disabled&&e.$emit("delete")):null}}},[n("md-icon",{staticClass:"md-icon-delete"},[e._v("cancel")])],1):e._e()],1)},staticRenderFns:[]}},417:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-input-container",{staticClass:"md-chips",class:[e.themeClass,e.classes],nativeOn:{click:function(t){e.applyInputFocus(t)}}},[e._l(e.selectedChips,(function(t){return n("md-chip",{key:t,attrs:{"md-editable":!e.mdStatic,"md-deletable":!e.mdStatic,disabled:e.disabled},on:{edit:function(n){e.editChip(t)},delete:function(n){e.deleteChip(t)}}},[e._t("chip",[e._v(e._s(t))],{value:t})],2)})),e._v(" "),n("md-input",{directives:[{name:"show",rawName:"v-show",value:!e.mdStatic,expression:"!mdStatic"}],ref:"input",attrs:{type:e.mdInputType,placeholder:e.mdInputPlaceholder,id:e.inputId,name:e.mdInputName,disabled:e.disabled,tabindex:"0"},nativeOn:{keydown:[function(t){return"button"in t||!e._k(t.keyCode,"delete",[8,46])?void e.deleteLastChip(t):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13)?(t.preventDefault(),void e.addChip(t)):null},function(t){return"button"in t||186===t.keyCode?(t.preventDefault(),void e.addChip(t)):null}]},model:{value:e.currentChip,callback:function(t){e.currentChip=t},expression:"currentChip"}}),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},453:function(e,t,n){e.exports=n(87)},87:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function d(e){e.component("md-chips",o.default),e.component("md-chip",c.default),e.material.styles.push(u.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var s=n(313),o=i(s),r=n(312),c=i(r),l=n(271),u=i(l);e.exports=t.default}})}));