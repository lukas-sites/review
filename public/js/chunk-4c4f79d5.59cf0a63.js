(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c4f79d5"],{"14e5":function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return o}),t.d(e,"c",function(){return s}),t.d(e,"d",function(){return a}),t.d(e,"e",function(){return l}),t.d(e,"f",function(){return c}),t.d(e,"g",function(){return h}),t.d(e,"h",function(){return f}),t.d(e,"i",function(){return b}),t.d(e,"j",function(){return u}),t.d(e,"k",function(){return d});var i=t("6c57");function r(n,e,t,r,o){return i["a"](this,void 0,void 0,function(){var c;return i["c"](this,function(i){switch(i.label){case 0:if(n)return[2,n.attachViewToDom(e,t,o,r)];if("string"!==typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"===typeof t?e.ownerDocument.createElement(t):t,r&&r.forEach(function(n){return c.classList.add(n)}),o&&Object.assign(c,o),e.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,c]}})})}function o(n,e){if(e){if(n){var t=e.parentElement;return n.removeViewFromDom(t,e)}e.remove()}return Promise.resolve()}function c(){var n=window.TapticEngine;n&&n.selection()}function l(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function s(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function a(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function u(n,e){return null!==e.closest(n)}function f(n){var e;return"string"===typeof n&&n.length>0?(e={"ion-color":!0},e["ion-color-"+n]=!0,e):void 0}function d(n,e){var t;return t={},t[e]=!0,t[e+"-"+n]=!!n,t}function p(n){if(void 0!==n){var e=Array.isArray(n)?n:n.split(" ");return e.filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n})}return[]}function h(n){var e={};return p(n).forEach(function(n){return e[n]=!0}),e}function b(n,e,t,r){return i["a"](this,void 0,void 0,function(){var o;return i["c"](this,function(i){switch(i.label){case 0:return null==e||"#"===e[0]||-1!==e.indexOf("://")?[3,2]:(o=n.document.querySelector("ion-router"),o?(null!=t&&t.preventDefault(),[4,o.componentOnReady()]):[3,2]);case 1:return i.sent(),[2,o.push(e,r)];case 2:return[2,!1]}})})}},"17eb":function(n,e,t){"use strict";t.r(e),t.d(e,"IonInfiniteScroll",function(){return c}),t.d(e,"IonInfiniteScrollContent",function(){return l});var i=t("6c57"),r=t("1390"),o=t("14e5"),c=function(){function n(){this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}return n.prototype.thresholdChanged=function(n){n.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(n)/100):(this.thrPx=parseFloat(n),this.thrPc=0)},n.prototype.disabledChanged=function(n){this.enableScrollEvents(!n)},n.prototype.componentDidLoad=function(){return i["a"](this,void 0,void 0,function(){var n,e;return i["c"](this,function(t){switch(t.label){case 0:return n=this.el.closest("ion-content"),n?[4,n.componentOnReady()]:[3,3];case 1:return t.sent(),e=this,[4,n.getScrollElement()];case 2:e.scrollEl=t.sent(),t.label=3;case 3:return this.thresholdChanged(this.threshold),this.enableScrollEvents(!this.disabled),[2]}})})},n.prototype.componentDidUnload=function(){this.scrollEl=void 0},n.prototype.onScroll=function(){var n=this.scrollEl;if(!n||!this.canStart())return 1;var e=this.el.offsetHeight;if(0===e)return 2;var t=n.scrollTop,i=n.scrollHeight,r=n.offsetHeight,o=0!==this.thrPc?r*this.thrPc:this.thrPx,c="bottom"===this.position?i-e-t-o-r:t-e-o;if(c<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},n.prototype.complete=function(){var n=this.scrollEl;this.isLoading&&n&&(this.isLoading=!1)},n.prototype.canStart=function(){return!this.disabled&&!this.isBusy&&!!this.scrollEl&&!this.isLoading},n.prototype.enableScrollEvents=function(n){this.scrollEl&&this.enableListener(this,"scroll",n,this.scrollEl)},n.prototype.hostData=function(){return{class:{"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}}},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isLoading:{state:!0},position:{type:String,attr:"position"},queue:{context:"queue"},threshold:{type:String,attr:"threshold",watchCallbacks:["thresholdChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"ionInfinite",method:"ionInfinite",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"listeners",{get:function(){return[{name:"scroll",method:"onScroll",disabled:!0,passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}"},enumerable:!0,configurable:!0}),n}(),l=function(){function n(){}return n.prototype.componentDidLoad=function(){void 0===this.loadingSpinner&&(this.loadingSpinner=this.config.get("infiniteLoadingSpinner",this.config.get("spinner","lines")))},n.prototype.hostData=function(){return{class:Object(o["k"])(this.mode,"infinite-scroll-content")}},n.prototype.render=function(){return Object(r["b"])("div",{class:"infinite-loading"},this.loadingSpinner&&Object(r["b"])("div",{class:"infinite-loading-spinner"},Object(r["b"])("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(r["b"])("div",{class:"infinite-loading-text",innerHTML:this.loadingText}))},Object.defineProperty(n,"is",{get:function(){return"ion-infinite-scroll-content"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{config:{context:"config"},loadingSpinner:{type:String,attr:"loading-spinner",mutable:!0},loadingText:{type:String,attr:"loading-text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin:0 0 32px;display:none;width:100%}.infinite-loading-text{margin:4px 32px 0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line{stroke:var(--ion-text-color-step-400,#666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}()},"6c57":function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"a",function(){return o}),t.d(e,"c",function(){return c});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var i=function(n,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])},i(n,e)};function r(n,e){function t(){this.constructor=n}i(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}function o(n,e,t,i){return new(t||(t=Promise))(function(r,o){function c(n){try{s(i.next(n))}catch(e){o(e)}}function l(n){try{s(i["throw"](n))}catch(e){o(e)}}function s(n){n.done?r(n.value):new t(function(e){e(n.value)}).then(c,l)}s((i=i.apply(n,e||[])).next())})}function c(n,e){var t,i,r,o,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(n){return function(e){return s([n,e])}}function s(o){if(t)throw new TypeError("Generator is already executing.");while(c)try{if(t=1,i&&(r=2&o[0]?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,i=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(r=c.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){c.label=o[1];break}if(6===o[0]&&c.label<r[1]){c.label=r[1],r=o;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(o);break}r[2]&&c.ops.pop(),c.trys.pop();continue}o=e.call(n,c)}catch(l){o=[6,l],i=0}finally{t=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}}}]);
//# sourceMappingURL=chunk-4c4f79d5.59cf0a63.js.map