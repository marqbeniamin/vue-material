/*!
* Vue Material v0.7.2
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=447)})({0:function(e,t){e.exports=function(e,t,n,o,r){var u,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(u=e,i=e.default);var c="function"==typeof i?i.options:i;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),o&&(c._scopeId=o);var f;if(r?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=f):n&&(f=n),f){var d=c.functional,a=d?c.render:c.beforeCreate;d?c.render=function(e,t){return f.call(t),a(e,t)}:c.beforeCreate=a?[].concat(a,f):[f]}return{esModule:u,exports:i,options:c}}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"md-backdrop",methods:{close:function(){this.$emit("close")}}},e.exports=t.default},264:function(e,t){},296:function(e,t,n){function o(e){n(264)}var r=n(0)(n(127),n(442),o,null,null);e.exports=r.exports},442:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-backdrop",on:{click:e.close,keyup:function(t){return"button"in t||!e._k(t.keyCode,"esc",27)?void e.close(t):null}}})},staticRenderFns:[]}},447:function(e,t,n){e.exports=n(81)},81:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){e.component("md-backdrop",i.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u=n(296),i=o(u);e.exports=t.default}})}));