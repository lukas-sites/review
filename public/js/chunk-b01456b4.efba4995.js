(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b01456b4"],{"14e5":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return u}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return c}),e.d(n,"g",function(){return f}),e.d(n,"h",function(){return l}),e.d(n,"i",function(){return b}),e.d(n,"j",function(){return d}),e.d(n,"k",function(){return h});var o=e("6c57");function r(t,n,e,r,i){return o["a"](this,void 0,void 0,function(){var c;return o["c"](this,function(o){switch(o.label){case 0:if(t)return[2,t.attachViewToDom(n,e,i,r)];if("string"!==typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"===typeof e?n.ownerDocument.createElement(e):e,r&&r.forEach(function(t){return c.classList.add(t)}),i&&Object.assign(c,i),n.appendChild(c),c.componentOnReady?[4,c.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,c]}})})}function i(t,n){if(n){if(t){var e=n.parentElement;return t.removeViewFromDom(e,n)}n.remove()}return Promise.resolve()}function c(){var t=window.TapticEngine;t&&t.selection()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function u(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function s(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}function d(t,n){return null!==n.closest(t)}function l(t){var n;return"string"===typeof t&&t.length>0?(n={"ion-color":!0},n["ion-color-"+t]=!0,n):void 0}function h(t,n){var e;return e={},e[n]=!0,e[n+"-"+t]=!!t,e}function p(t){if(void 0!==t){var n=Array.isArray(t)?t:t.split(" ");return n.filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t})}return[]}function f(t){var n={};return p(t).forEach(function(t){return n[t]=!0}),n}function b(t,n,e,r){return o["a"](this,void 0,void 0,function(){var i;return o["c"](this,function(o){switch(o.label){case 0:return null==n||"#"===n[0]||-1!==n.indexOf("://")?[3,2]:(i=t.document.querySelector("ion-router"),i?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2]);case 1:return o.sent(),[2,i.push(n,r)];case 2:return[2,!1]}})})}},5811:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return d}),e.d(n,"d",function(){return c}),e.d(n,"e",function(){return p}),e.d(n,"f",function(){return a}),e.d(n,"g",function(){return f}),e.d(n,"h",function(){return h}),e.d(n,"i",function(){return s}),e.d(n,"j",function(){return u}),e.d(n,"k",function(){return b}),e.d(n,"l",function(){return l}),e.d(n,"m",function(){return v});var o={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function r(t,n){if(void 0===n||""===n)return!0;var e=o[n];return t.matchMedia(e).matches}function i(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function c(t){return!!t.shadowRoot&&!!t.attachShadow}function a(t,n,e,o){if(c(t)){var r=t.querySelector("input.aux-input");r||(r=t.ownerDocument.createElement("input"),r.type="hidden",r.classList.add("aux-input"),t.appendChild(r)),r.disabled=o,r.name=n,r.value=e}}function u(t,n,e){return Math.max(t,Math.min(n,e))}function s(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}}function d(t){return t.timeStamp||Date.now()}function l(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function h(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function p(t){return f(t,0)}function f(t,n){var e=t._original||t;return{_original:t,emit:b(e.emit.bind(e),n)}}function b(t,n){var e;return void 0===n&&(n=0),function(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(o))}}var g={ipad:w,iphone:x,ios:O,android:S,phablet:j,tablet:E,cordova:M,capacitor:T,electron:F,pwa:X,mobile:C,desktop:P,hybrid:I};function m(t){return y(t)}function v(t,n){return m(t).includes(n)}function y(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;if(null==n){n=t.Ionic.platforms=k(t);var e=t.document.documentElement.classList;n.forEach(function(t){return e.add("plt-"+t)})}return n}function k(t){return Object.keys(g).filter(function(n){return g[n](t)})}function w(t){return D(t,/iPad/i)}function x(t){return D(t,/iPhone/i)}function O(t){return D(t,/iPad|iPhone|iPod/i)}function S(t){return D(t,/android|sink/i)}function j(t){var n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),r=Math.max(n,e);return o>390&&o<520&&r>620&&r<800}function E(t){var n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),r=Math.max(n,e);return o>460&&o<820&&r>780&&r<1400}function C(t){return _(t,"(any-pointer:coarse)")}function P(t){return!C(t)}function I(t){return M(t)||T(t)}function M(t){var n=t;return!!(n["cordova"]||n["phonegap"]||n["PhoneGap"])}function T(t){var n=t,e=n["Capacitor"];return!(!e||!e.isNative)}function F(t){return D(t,/electron/)}function X(t){return t.matchMedia("(display-mode: standalone)").matches}function D(t,n){return n.test(t.navigator.userAgent)}function _(t,n){return t.matchMedia(n).matches}},"6c57":function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"a",function(){return i}),e.d(n,"c",function(){return c});
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
var o=function(t,n){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},o(t,n)};function r(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function i(t,n,e,o){return new(e||(e=Promise))(function(r,i){function c(t){try{u(o.next(t))}catch(n){i(n)}}function a(t){try{u(o["throw"](t))}catch(n){i(n)}}function u(t){t.done?r(t.value):new e(function(n){n(t.value)}).then(c,a)}u((o=o.apply(t,n||[])).next())})}function c(t,n){var e,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(t){return function(n){return u([t,n])}}function u(i){if(e)throw new TypeError("Generator is already executing.");while(c)try{if(e=1,o&&(r=2&i[0]?o["return"]:i[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(r=c.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(t,c)}catch(a){i=[6,a],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},ce77:function(t,n,e){"use strict";e.r(n),e.d(n,"IonToggle",function(){return a});var o=e("6c57"),r=e("1390"),i=e("14e5"),c=e("5811"),a=function(){function t(){this.inputId="ion-tg-"+s++,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on"}return t.prototype.checkedChanged=function(t){this.ionChange.emit({checked:t,value:this.value})},t.prototype.disabledChanged=function(){this.ionStyle.emit({"interactive-disabled":this.disabled}),this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentWillLoad=function(){this.ionStyle=Object(c["e"])(this.ionStyle)},t.prototype.componentDidLoad=function(){return o["a"](this,void 0,void 0,function(){var t,n,r,i=this;return o["c"](this,function(o){switch(o.label){case 0:return t=this.nativeInput.closest("ion-item"),t&&(n=t.querySelector("ion-label"),n&&(n.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",n.id))),r=this,[4,e.e("chunk-1f21d467").then(e.bind(null,"a52d"))];case 1:return r.gesture=o.sent().createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.disabledChanged(),[2]}})})},t.prototype.onStart=function(t){return this.pivotX=t.currentX,this.activated=!0,t.event.preventDefault(),!0},t.prototype.onMove=function(t){var n=t.currentX;u(this.checked,n-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=n,Object(i["f"])())},t.prototype.onEnd=function(t){var n=t.currentX-this.pivotX;u(this.checked,n,4)&&(this.checked=!this.checked,Object(i["f"])()),this.activated=!1,this.nativeInput.focus()},t.prototype.onChange=function(){this.checked=!this.checked},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onFocus=function(){this.ionFocus.emit()},t.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},t.prototype.hostData=function(){return{class:Object.assign({},Object(i["h"])(this.color),{"in-item":Object(i["j"])("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}},t.prototype.render=function(){var t=this;return Object(c["f"])(this.el,this.name,this.checked?this.value:"",this.disabled),[Object(r["b"])("div",{class:"toggle-icon"},Object(r["b"])("div",{class:"toggle-inner"})),Object(r["b"])("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(n){return t.nativeInput=n}}),Object(r["b"])("slot",null)]},Object.defineProperty(t,"is",{get:function(){return"ion-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--handle-background:var(--ion-background-color, #fff);--handle-background-checked:var(--ion-color-primary, #3880ff);padding:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(:focus){outline:0}:host(.toggle-disabled){pointer-events:none;opacity:.3}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .3s;transition:background-color .3s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host(.in-item[slot]){margin:0;padding:12px 8px 12px 16px;cursor:pointer}:host(.in-item[slot=start]){padding:12px 18px 12px 2px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function u(t,n,e){var o="rtl"===document.dir;return t?!o&&e>n||o&&-e<n:!o&&-e<n||o&&e>n}var s=0}}]);
//# sourceMappingURL=chunk-b01456b4.efba4995.js.map