(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6855b380"],{"14e5":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return c}),n.d(t,"e",function(){return a}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return v}),n.d(t,"j",function(){return l}),n.d(t,"k",function(){return h});var i=n("6c57");function r(e,t,n,r,o){return i["a"](this,void 0,void 0,function(){var s;return i["c"](this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,o,r)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof n?t.ownerDocument.createElement(n):n,r&&r.forEach(function(e){return s.classList.add(e)}),o&&Object.assign(s,o),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,s]}})})}function o(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}function s(){var e=window.TapticEngine;e&&e.selection()}function a(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function u(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function c(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}function l(e,t){return null!==t.closest(e)}function d(e){var t;return"string"===typeof e&&e.length>0?(t={"ion-color":!0},t["ion-color-"+e]=!0,t):void 0}function h(e,t){var n;return n={},n[t]=!0,n[t+"-"+e]=!!e,n}function f(e){if(void 0!==e){var t=Array.isArray(e)?e:e.split(" ");return t.filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e})}return[]}function p(e){var t={};return f(e).forEach(function(e){return t[e]=!0}),t}function v(e,t,n,r){return i["a"](this,void 0,void 0,function(){var o;return i["c"](this,function(i){switch(i.label){case 0:return null==t||"#"===t[0]||-1!==t.indexOf("://")?[3,2]:(o=e.document.querySelector("ion-router"),o?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2]);case 1:return i.sent(),[2,o.push(t,r)];case 2:return[2,!1]}})})}},5811:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return a}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return h}),n.d(t,"i",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"k",function(){return v}),n.d(t,"l",function(){return d}),n.d(t,"m",function(){return b});var i={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function r(e,t){if(void 0===t||""===t)return!0;var n=i[t];return e.matchMedia(n).matches}function o(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function s(e){return!!e.shadowRoot&&!!e.attachShadow}function a(e,t,n,i){if(s(e)){var r=e.querySelector("input.aux-input");r||(r=e.ownerDocument.createElement("input"),r.type="hidden",r.classList.add("aux-input"),e.appendChild(r)),r.disabled=i,r.name=t,r.value=n}}function u(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){if(!e){var n="ASSERT: "+t;throw console.error(n),new Error(n)}}function l(e){return e.timeStamp||Date.now()}function d(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function h(e,t){var n="rtl"===e.document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function f(e){return p(e,0)}function p(e,t){var n=e._original||e;return{_original:e,emit:v(n.emit.bind(n),t)}}function v(e,t){var n;return void 0===t&&(t=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[e,t].concat(i))}}var m={ipad:S,iphone:T,ios:O,android:E,phablet:P,tablet:k,cordova:x,capacitor:R,electron:I,pwa:q,mobile:j,desktop:C,hybrid:V};function g(e){return w(e)}function b(e,t){return g(e).includes(t)}function w(e){e.Ionic=e.Ionic||{};var t=e.Ionic.platforms;if(null==t){t=e.Ionic.platforms=y(e);var n=e.document.documentElement.classList;t.forEach(function(e){return n.add("plt-"+e)})}return t}function y(e){return Object.keys(m).filter(function(t){return m[t](e)})}function S(e){return A(e,/iPad/i)}function T(e){return A(e,/iPhone/i)}function O(e){return A(e,/iPad|iPhone|iPod/i)}function E(e){return A(e,/android|sink/i)}function P(e){var t=e.innerWidth,n=e.innerHeight,i=Math.min(t,n),r=Math.max(t,n);return i>390&&i<520&&r>620&&r<800}function k(e){var t=e.innerWidth,n=e.innerHeight,i=Math.min(t,n),r=Math.max(t,n);return i>460&&i<820&&r>780&&r<1400}function j(e){return B(e,"(any-pointer:coarse)")}function C(e){return!j(e)}function V(e){return x(e)||R(e)}function x(e){var t=e;return!!(t["cordova"]||t["phonegap"]||t["PhoneGap"])}function R(e){var t=e,n=t["Capacitor"];return!(!n||!n.isNative)}function I(e){return A(e,/electron/)}function q(e){return e.matchMedia("(display-mode: standalone)").matches}function A(e,t){return t.test(e.navigator.userAgent)}function B(e,t){return e.matchMedia(t).matches}},"6c57":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return s});
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
var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},i(e,t)};function r(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function o(e,t,n,i){return new(n||(n=Promise))(function(r,o){function s(e){try{u(i.next(e))}catch(t){o(t)}}function a(e){try{u(i["throw"](e))}catch(t){o(t)}}function u(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(s,a)}u((i=i.apply(e,t||[])).next())})}function s(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,i&&(r=2&o[0]?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(r=s.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}},"71d6":function(e,t,n){"use strict";n.d(t,"a",function(){return y}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return S}),n.d(t,"d",function(){return s});var i=n("6c57"),r=function(){return n.e("chunk-2d21b4fb").then(n.bind(null,"bedf"))},o=function(){return n.e("chunk-2d0bcea3").then(n.bind(null,"2a86"))};function s(e){return new Promise(function(t,n){e.queue.write(function(){a(e),u(e).then(function(n){n.animation&&n.animation.destroy(),c(e),t(n)},function(t){c(e),n(t)})})})}function a(e){var t=e.enteringEl,n=e.leavingEl;T(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),S(t,!1),n&&S(n,!1)}function u(e){return i["a"](this,void 0,void 0,function(){var t,n;return i["c"](this,function(i){switch(i.label){case 0:return[4,l(e)];case 1:return t=i.sent(),n=t?d(t,e):h(e),[2,n]}})})}function c(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function l(e){return i["a"](this,void 0,void 0,function(){var t,n;return i["c"](this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,r()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,o()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return t=n,[2,t]}})})}function d(e,t){return i["a"](this,void 0,void 0,function(){var n;return i["c"](this,function(i){switch(i.label){case 0:return[4,f(t,!0)];case 1:return i.sent(),[4,t.animationCtrl.create(e,t.baseEl,t)];case 2:return n=i.sent(),m(t.window,t.enteringEl,t.leavingEl),[4,v(n,t)];case 3:return i.sent(),n.hasCompleted&&g(t.window,t.enteringEl,t.leavingEl),[2,{hasCompleted:n.hasCompleted,animation:n}]}})})}function h(e){return i["a"](this,void 0,void 0,function(){var t,n;return i["c"](this,function(i){switch(i.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,f(e,!1)];case 1:return i.sent(),m(e.window,t,n),g(e.window,t,n),[2,{hasCompleted:!0}]}})})}function f(e,t){return i["a"](this,void 0,void 0,function(){var n,r;return i["c"](this,function(i){switch(i.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,r=n?[y(e.enteringEl),y(e.leavingEl)]:[w(e.enteringEl),w(e.leavingEl)],[4,Promise.all(r)];case 1:return i.sent(),[4,p(e.viewIsReady,e.enteringEl)];case 2:return i.sent(),[2]}})})}function p(e,t){return i["a"](this,void 0,void 0,function(){return i["c"](this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function v(e,t){var n=t.progressCallback,i=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),i}function m(e,t,n){b(e,n,"ionViewWillLeave"),b(e,t,"ionViewWillEnter")}function g(e,t,n){b(e,t,"ionViewDidEnter"),b(e,n,"ionViewDidLeave")}function b(e,t,n){if(t){var i=e.CustomEvent,r=new i(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(r)}}function w(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function y(e){return i["a"](this,void 0,void 0,function(){var t,n;return i["c"](this,function(i){switch(i.label){case 0:return t=e,t?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(n=i.sent(),null!=n)return[2];i.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(y))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function S(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function T(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")}},7822:function(e,t,n){"use strict";n.r(t),n.d(t,"IonNav",function(){return h}),n.d(t,"IonNavPop",function(){return f}),n.d(t,"IonNavPush",function(){return p}),n.d(t,"IonNavSetRoot",function(){return v});var i=n("6c57"),r=n("1390"),o=n("14e5"),s=n("5811"),a=n("71d6"),u=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return i["a"](this,void 0,void 0,function(){var t,n;return i["c"](this,function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(o["a"])(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){Object(s["i"])(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function c(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var r=Object.keys(i),o=Object.keys(n);if(r.length!==o.length)return!1;for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0}function l(e,t){return e?e instanceof u?e:new u(e,t):null}function d(e){return e.map(function(e){return e instanceof u?e:"page"in e?l(e.page,e.params):l(e,void 0)}).filter(function(e){return null!==e})}var h=function(){function e(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return i["a"](this,void 0,void 0,function(){var e,t=this;return i["c"](this,function(i){switch(i.label){case 0:return this.rootChanged(),e=this,[4,n.e("chunk-1f21d467").then(n.bind(null,"a52d"))];case 1:return e.gesture=i.sent().createGesture({el:this.win.document.body,queue:this.queue,gestureName:"goback-swipe",gesturePriority:30,threshold:10,canStart:function(){return t.canStart()},onStart:function(){return t.onStart()},onMove:function(e){return t.onMove(e)},onEnd:function(e){return t.onEnd(e)}}),this.swipeGestureChanged(),[2]}})})},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(a["b"])(this.win,n.element,"ionViewWillUnload"),n._destroy()}this.gesture&&this.gesture.destroy(),this.sbTrns&&this.sbTrns.destroy(),this.transInstr.length=this.views.length=0,this.sbTrns=void 0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},r)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"===typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"===typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var r,o=this,s=this.getActiveSync();if(c(s,e,t))return Promise.resolve({changed:!1,element:s.element});var a,u=new Promise(function(e){return r=e}),l={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return r({changed:!0,element:e,markVisible:function(){return i["a"](o,void 0,void 0,function(){return i["c"](this,function(e){switch(e.label){case 0:return t(),[4,a];case 1:return e.sent(),[2]}})})}}),n}};if(0===n)a=this.setRoot(e,t,l);else{var d=this.views.find(function(n){return c(n,e,t)});d?a=this.popTo(d,Object.assign({},l,{direction:"back"})):1===n?a=this.push(e,t,l):-1===n&&(a=this.setRoot(e,t,Object.assign({},l,{direction:"back",animated:!0})))}return u},e.prototype.getRouteId=function(){return i["a"](this,void 0,void 0,function(){var e;return i["c"](this,function(t){return e=this.getActiveSync(),[2,e?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");if(n){var i="back"===e.direction?-1:1;n.navChanged(i)}}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return i["a"](this,void 0,void 0,function(){var t,n,r,o,s,a;return i["c"](this,function(i){switch(i.label){case 0:if(i.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.postViewInit(n,t,e),r=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t,r?[4,this.transition(n,t,e)]:[3,4];case 3:return s=i.sent(),[3,5];case 4:s={hasCompleted:!0,requiresTransition:!1},i.label=5;case 5:return o=s,this.success(o,e),this.ionNavDidChange.emit(),[3,7];case 6:return a=i.sent(),this.failed(a,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(s["i"])(void 0!==e.removeStart,"removeView needs removeStart"),Object(s["i"])(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(s["i"])(i.length>0,"length can not be zero");var r=d(i);if(0===r.length)throw new Error("invalid views to insert");for(var o=0,a=r;o<a.length;o++){var u=a[o];u.delegate=e.opts.delegate;var c=u.nav;if(c&&c!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}e.insertViews=r}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var r=this.views,o=i+e.removeCount,s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){Object(s["i"])(t||e,"Both leavingView and enteringView are null"),Object(s["i"])(n.resolve,"resolve must be valid"),Object(s["i"])(n.reject,"reject must be valid");var i,r=n.opts,o=n.insertViews,u=n.removeStart,c=n.removeCount;if(void 0!==u&&void 0!==c){Object(s["i"])(u>=0,"removeStart can not be negative"),Object(s["i"])(c>=0,"removeCount can not be negative"),i=[];for(var l=0;l<c;l++){var d=this.views[l+u];d&&d!==e&&d!==t&&i.push(d)}r.direction=r.direction||"back"}var h=this.views.length+(void 0!==o?o.length:0)-(void 0!==c?c:0);if(Object(s["i"])(h>=0,"final balance can not be negative"),0===h)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){for(var f=n.insertStart,p=0,v=o;p<v.length;p++){d=v[p];this.insertViewAt(d,f),f++}n.enteringRequiresTransition&&(r.direction=r.direction||"forward")}if(i&&i.length>0){for(var m=0,g=i;m<g.length;m++){d=g[m];Object(a["b"])(this.win,d.element,"ionViewWillLeave"),Object(a["b"])(this.win,d.element,"ionViewDidLeave"),Object(a["b"])(this.win,d.element,"ionViewWillUnload")}for(var b=0,w=i;b<w.length;b++){d=w[b];this.destroyView(d)}}},e.prototype.transition=function(e,t,n){return i["a"](this,void 0,void 0,function(){var r,o,s,u,c,l,d,h=this;return i["c"](this,function(i){switch(i.label){case 0:return this.sbTrns&&(this.sbTrns.destroy(),this.sbTrns=void 0),r=n.opts,o=r.progressAnimation?function(e){h.sbTrns=e}:void 0,s=e.element,u=t&&t.element,c=this.animated&&this.config.getBoolean("animated",!0),l=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),animationCtrl:this.animationCtrl,queue:this.queue,window:this.win,baseEl:this.el,progressCallback:o,animated:c,enteringEl:s,leavingEl:u},r),[4,Object(a["d"])(l)];case 1:return d=i.sent().hasCompleted,[2,this.transitionFinish(d,e,t,r)]}})})},e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;return r&&this.cleanup(r),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(s["i"])(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(s["i"])(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(s["i"])(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(s["i"])(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var r=t[i],o=r.element;i>n?(Object(a["b"])(this.win,o,"ionViewWillUnload"),this.destroyView(r)):i<n&&Object(a["c"])(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.canGoBackSync()},e.prototype.onStart=function(){if(!(this.isTransitioning||this.transInstr.length>0)){var e={direction:"back",progressAnimation:!0};this.queueTrns({removeStart:-1,removeCount:1,opts:e},void 0)}},e.prototype.onMove=function(e){if(this.sbTrns){this.isTransitioning=!0;var t=e.deltaX,n=t/this.win.innerWidth;this.sbTrns.progressStep(n)}},e.prototype.onEnd=function(e){if(this.sbTrns){var t=e.deltaX,n=this.win.innerWidth,i=t/n,r=e.velocityX,o=n/2,s=r>=0&&(r>.2||e.deltaX>o),a=s?1-i:i,u=a*n,c=0;if(u>5){var l=u/Math.abs(r);c=Math.min(l,300)}this.sbTrns.progressEnd(s,i,c)}},e.prototype.render=function(){return["ios"===this.mode&&Object(r["b"])("div",{class:"nav-decor"}),Object(r["b"])("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor.sc-ion-nav{display:none}.show-decor.sc-ion-nav-h   .nav-decor.sc-ion-nav{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"},enumerable:!0,configurable:!0}),e}(),f=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),p=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),v=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}()}}]);
//# sourceMappingURL=chunk-6855b380.6587115b.js.map