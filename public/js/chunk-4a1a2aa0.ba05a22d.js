(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a1a2aa0"],{"14e5":function(n,t,e){"use strict";e.d(t,"a",function(){return o}),e.d(t,"b",function(){return i}),e.d(t,"c",function(){return l}),e.d(t,"d",function(){return u}),e.d(t,"e",function(){return c}),e.d(t,"f",function(){return a}),e.d(t,"g",function(){return h}),e.d(t,"h",function(){return f}),e.d(t,"i",function(){return d}),e.d(t,"j",function(){return s}),e.d(t,"k",function(){return p});var r=e("6c57");function o(n,t,e,o,i){return r["a"](this,void 0,void 0,function(){var a;return r["c"](this,function(r){switch(r.label){case 0:if(n)return[2,n.attachViewToDom(t,e,i,o)];if("string"!==typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"===typeof e?t.ownerDocument.createElement(e):e,o&&o.forEach(function(n){return a.classList.add(n)}),i&&Object.assign(a,i),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function i(n,t){if(t){if(n){var e=t.parentElement;return n.removeViewFromDom(e,t)}t.remove()}return Promise.resolve()}function a(){var n=window.TapticEngine;n&&n.selection()}function c(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function l(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function u(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function s(n,t){return null!==t.closest(n)}function f(n){var t;return"string"===typeof n&&n.length>0?(t={"ion-color":!0},t["ion-color-"+n]=!0,t):void 0}function p(n,t){var e;return e={},e[t]=!0,e[t+"-"+n]=!!n,e}function b(n){if(void 0!==n){var t=Array.isArray(n)?n:n.split(" ");return t.filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n})}return[]}function h(n){var t={};return b(n).forEach(function(n){return t[n]=!0}),t}function d(n,t,e,o){return r["a"](this,void 0,void 0,function(){var i;return r["c"](this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||-1!==t.indexOf("://")?[3,2]:(i=n.document.querySelector("ion-router"),i?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2]);case 1:return r.sent(),[2,i.push(t,o)];case 2:return[2,!1]}})})}},"6c57":function(n,t,e){"use strict";e.d(t,"b",function(){return o}),e.d(t,"a",function(){return i}),e.d(t,"c",function(){return a});
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
var r=function(n,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},r(n,t)};function o(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}function i(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(n){try{l(r.next(n))}catch(t){i(t)}}function c(n){try{l(r["throw"](n))}catch(t){i(t)}}function l(n){n.done?o(n.value):new e(function(t){t(n.value)}).then(a,c)}l((r=r.apply(n,t||[])).next())})}function a(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(n){return function(t){return l([n,t])}}function l(i){if(e)throw new TypeError("Generator is already executing.");while(a)try{if(e=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(o=a.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(n,a)}catch(c){i=[6,c],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},c979:function(n,t,e){"use strict";e.r(t),e.d(t,"IonChip",function(){return i}),e.d(t,"IonChipButton",function(){return a}),e.d(t,"IonChipIcon",function(){return c});var r=e("1390"),o=e("14e5"),i=function(){function n(){}return n.prototype.hostData=function(){return{class:Object(o["h"])(this.color)}},Object.defineProperty(n,"is",{get:function(){return"ion-chip"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-chip-ios-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-item-align:center;align-self:center;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-weight:400;vertical-align:middle;-webkit-box-sizing:border-box;box-sizing:border-box;--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1);--color:var(--ion-text-color-step-150, #262626);--label-margin-top:0;--label-margin-end:10px;--label-margin-bottom:0;--label-margin-start:10px;--avatar-width:24px;--avatar-height:24px;--avatar-margin-top:0;--avatar-margin-end:4px;--avatar-margin-bottom:0;--avatar-margin-start:4px;border-radius:16px;margin:2px 0;height:32px;font-size:13px}.ion-color.sc-ion-chip-ios-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-button , .sc-ion-chip-ios-h.ion-color.sc-ion-chip-ios-s  ion-chip-icon {--color:currentColor}.sc-ion-chip-ios-s  ion-label {margin:var(--label-margin-top) var(--label-margin-end) var(--label-margin-bottom) var(--label-margin-start)}.sc-ion-chip-ios-s  ion-avatar {margin:var(--avatar-margin-top) var(--avatar-margin-end) var(--avatar-margin-bottom) var(--avatar-margin-start);width:var(--avatar-width);height:var(--avatar-height)}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}(),a=function(){function n(){this.disabled=!1,this.fill="clear"}return n.prototype.hostData=function(){var n;return{class:Object.assign({},Object(o["h"])(this.color),(n={},n["chip-button-"+this.fill]=!0,n))}},n.prototype.render=function(){var n=void 0===this.href?"button":"a";return Object(r["b"])(n,{type:"button",class:"button-native",disabled:this.disabled,href:this.href},Object(r["b"])("span",{class:"button-inner"},Object(r["b"])("slot",null)),"md"===this.mode&&Object(r["b"])("ion-ripple-effect",null))},Object.defineProperty(n,"is",{get:function(){return"ion-chip-button"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},fill:{type:String,attr:"fill"},href:{type:String,attr:"href"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-chip-button-h{--border-radius:50%;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--width:32px;--height:100%;width:var(--width);height:var(--height);font-size:32px}.chip-button-clear.sc-ion-chip-button-h{--background:transparent;--color:var(--ion-text-color-step-400, #666666)}.chip-button-solid.sc-ion-chip-button-h{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}.chip-button-solid.ion-color.sc-ion-chip-button-h   .button-native.sc-ion-chip-button{background:var(--ion-color-base);color:var(--ion-color-contrast)}.chip-button-clear.ion-color.sc-ion-chip-button-h   .button-native.sc-ion-chip-button{background:0 0;color:var(--ion-color-base)}.button-native.sc-ion-chip-button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);position:relative;width:var(--width);height:var(--height);border:0;outline:0;background:var(--background);color:var(--color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner.sc-ion-chip-button{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}"},enumerable:!0,configurable:!0}),n}(),c=function(){function n(){this.fill="clear"}return n.prototype.hostData=function(){var n;return{class:Object.assign({},Object(o["h"])(this.color),(n={},n["chip-icon-"+this.fill]=!0,n))}},n.prototype.render=function(){return Object(r["b"])("ion-icon",{name:this.name,src:this.src,mode:this.mode})},Object.defineProperty(n,"is",{get:function(){return"ion-chip-icon"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},fill:{type:String,attr:"fill"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-chip-icon-h{border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--width,32px);height:var(--height,32px);background:var(--background);color:var(--color);font-size:18px}.chip-icon-clear.sc-ion-chip-icon-h{--background:transparent;--color:var(--ion-text-color-step-400, #666666)}.chip-icon-solid.sc-ion-chip-icon-h{--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}.chip-icon-solid.ion-color.sc-ion-chip-icon-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}.chip-icon-clear.ion-color.sc-ion-chip-icon-h{background:0 0;color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),n}()}}]);
//# sourceMappingURL=chunk-4a1a2aa0.ba05a22d.js.map