(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58647091"],{"14e5":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return a}),n.d(t,"g",function(){return v}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return m}),n.d(t,"j",function(){return l}),n.d(t,"k",function(){return p});var o=n("6c57");function r(e,t,n,r,i){return o["a"](this,void 0,void 0,function(){var a;return o["c"](this,function(o){switch(o.label){case 0:if(e)return[2,e.attachViewToDom(t,n,i,r)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"===typeof n?t.ownerDocument.createElement(n):n,r&&r.forEach(function(e){return a.classList.add(e)}),i&&Object.assign(a,i),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:o.sent(),o.label=2;case 2:return[2,a]}})})}function i(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}function a(){var e=window.TapticEngine;e&&e.selection()}function s(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function c(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function u(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}function l(e,t){return null!==t.closest(e)}function d(e){var t;return"string"===typeof e&&e.length>0?(t={"ion-color":!0},t["ion-color-"+e]=!0,t):void 0}function p(e,t){var n;return n={},n[t]=!0,n[t+"-"+e]=!!e,n}function f(e){if(void 0!==e){var t=Array.isArray(e)?e:e.split(" ");return t.filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e})}return[]}function v(e){var t={};return f(e).forEach(function(e){return t[e]=!0}),t}function m(e,t,n,r){return o["a"](this,void 0,void 0,function(){var i;return o["c"](this,function(o){switch(o.label){case 0:return null==t||"#"===t[0]||-1!==t.indexOf("://")?[3,2]:(i=e.document.querySelector("ion-router"),i?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2]);case 1:return o.sent(),[2,i.push(t,r)];case 2:return[2,!1]}})})}},"35bf":function(e,t,n){"use strict";n.r(t),n.d(t,"IonPopover",function(){return v}),n.d(t,"IonPopoverController",function(){return b});var o=n("6c57"),r=n("1390"),i=n("14e5"),a=n("3839"),s=n("71d6");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function c(e,t,n){var o="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,l=window.innerWidth,d=window.innerHeight,p=n&&n.target&&n.target.getBoundingClientRect(),f=null!=p&&"top"in p?p.top:d/2-c/2,v=null!=p&&"left"in p?p.left:l/2,m=p&&p.width||0,b=p&&p.height||0,h=t.querySelector(".popover-arrow"),y=h.getBoundingClientRect(),g=y.width,w=y.height;null==p&&(h.style.display="none");var x={top:f+b,left:v+m/2-g/2},E={top:f+b+(w-1),left:v+m/2-s/2},k=!1,P=!1;E.left<u+25?(k=!0,E.left=u):s+u+E.left+25>l&&(P=!0,E.left=l-s-u,r="right"),f+b+c>d&&f-c>0?(x.top=f-(w+1),console.log(x),console.log(f),console.log(c),E.top=f-c-(w-1),t.className=t.className+" popover-bottom",o="bottom"):f+b+c>d&&(i.style.bottom=u+"%"),h.style.top=x.top+"px",h.style.left=x.left+"px",i.style.top=E.top+"px",i.style.left=E.left+"px",k&&(i.style.left="calc("+E.left+"px + var(--ion-safe-area-left, 0px))"),P&&(i.style.left="calc("+E.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=o+" "+r;var D=new e,O=new e;O.addElement(t.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var j=new e;return j.addElement(t.querySelector(".popover-wrapper")),j.fromTo("opacity",.01,1),Promise.resolve(D.addElement(t).easing("ease").duration(100).add(O).add(j))}var u=5;function l(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),o.fromTo("opacity",.08,0),Promise.resolve(n.addElement(t).easing("ease").duration(500).add(o).add(r))}function d(e,t,n){var o="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,c=a.height,u=window.innerWidth,l=window.innerHeight,d=n&&n.target&&n.target.getBoundingClientRect(),f=null!=d&&"top"in d?d.top:l/2-c/2,v=null!=d&&"left"in d?d.left:u/2-s/2,m=d&&d.height||0,b={top:f,left:v};b.left<p?b.left=p:s+p+b.left>u&&(b.left=u-s-p,r="right"),f+m+c>l&&f-c>0?(b.top=f-c,t.className=t.className+" popover-bottom",o="bottom"):f+m+c>l&&(i.style.bottom=p+"px"),i.style.top=b.top+"px",i.style.left=b.left+"px",i.style.transformOrigin=o+" "+r;var h=new e,y=new e;y.addElement(t.querySelector("ion-backdrop")),y.fromTo("opacity",.01,.08);var g=new e;g.addElement(t.querySelector(".popover-wrapper")),g.fromTo("opacity",.01,1);var w=new e;w.addElement(t.querySelector(".popover-content")),w.fromTo("scale",.001,1);var x=new e;return x.addElement(t.querySelector(".popover-viewport")),x.fromTo("opacity",.01,1),Promise.resolve(h.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(y).add(g).add(w).add(x))}var p=12;function f(e,t){var n=new e,o=new e;o.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),o.fromTo("opacity",.08,0),Promise.resolve(n.addElement(t).easing("ease").duration(500).add(o).add(r))}var v=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionPopoverDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,a["a"])},e.prototype.lifecycle=function(e){var t=this.usersElement,n=m[e.type];if(t&&n){var o=new CustomEvent(n,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(o)}},e.prototype.present=function(){return o["a"](this,void 0,void 0,function(){var e,t,n;return o["c"](this,function(o){switch(o.label){case 0:if(this.presented)return[2];if(e=this.el.querySelector(".popover-content"),!e)throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),n=this,[4,Object(i["a"])(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return n.usersElement=o.sent(),[4,Object(s["a"])(this.usersElement)];case 2:return o.sent(),[2,Object(a["e"])(this,"popoverEnter",c,d,this.event)]}})})},e.prototype.dismiss=function(e,t){return o["a"](this,void 0,void 0,function(){var n;return o["c"](this,function(o){switch(o.label){case 0:return[4,Object(a["b"])(this,e,t,"popoverLeave",l,f,this.event)];case 1:return n=o.sent(),n?[4,Object(i["b"])(this.delegate,this.usersElement)]:[3,3];case 2:o.sent(),o.label=3;case 3:return[2,n]}})})},e.prototype.onDidDismiss=function(){return Object(a["c"])(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(a["c"])(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayIndex},"no-router":!0,class:Object.assign({"popover-translucent":this.translucent},Object(i["g"])(this.cssClass))}},e.prototype.render=function(){return[Object(r["b"])("ion-backdrop",{tappable:this.backdropDismiss}),Object(r["b"])("div",{class:"popover-wrapper"},Object(r["b"])("div",{class:"popover-arrow"}),Object(r["b"])("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10;border-radius:10px;width:200px;min-width:0;min-height:0;max-height:90%;background-color:var(--ion-background-color,#fff);color:var(--ion-text-color,#000)}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:var(--ion-background-color,#fff);content:"";z-index:10}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios::after{top:-6px}.popover-translucent.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios::after, .popover-translucent.sc-ion-popover-ios-h   .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillDismiss",ionPopoverDidDismiss:"ionViewDidDismiss"},b=function(){function e(){}return e.prototype.create=function(e){return Object(a["f"])(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,n){return Object(a["g"])(this.doc,e,t,"ion-popover",n)},e.prototype.getTop=function(){return o["a"](this,void 0,void 0,function(){return o["c"](this,function(e){return[2,Object(a["h"])(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()},3839:function(e,t,n){"use strict";n.d(t,"a",function(){return h}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return i}),n.d(t,"g",function(){return s}),n.d(t,"h",function(){return u});var o=n("6c57"),r=0;function i(e,t){var n=e.ownerDocument;a(n),Object.assign(e,t),e.classList.add("ion-page-invisible");var o=r++;return e.overlayIndex=o,e.hasAttribute("id")||(e.id="ion-overlay-"+o),p(n).appendChild(e),e.componentOnReady()}function a(e){0===r&&(r=1,e.addEventListener("ionBackButton",function(t){var n=u(e);n&&n.backdropDismiss&&t.detail.register(100,function(){return n.dismiss(void 0,h)})}),e.addEventListener("keyup",function(t){if("Escape"===t.key){var n=u(e);n&&n.backdropDismiss&&n.dismiss(void 0,h)}}))}function s(e,t,n,o,r){var i=u(e,o,r);return i?i.dismiss(t,n):Promise.reject("overlay does not exist")}function c(e,t){var n=Array.from(p(e).children).filter(function(e){return e.overlayIndex>0});return void 0===t?n:(t=t.toUpperCase(),n.filter(function(e){return e.tagName===t}))}function u(e,t,n){var o=c(e,t);return void 0===n?o[o.length-1]:o.find(function(e){return e.id===n})}function l(e,t,n,r,i){return o["a"](this,void 0,void 0,function(){var a,s;return o["c"](this,function(o){switch(o.label){case 0:return e.presented?[2]:(e.presented=!0,e.willPresent.emit(),a=e.enterAnimation?e.enterAnimation:e.config.get(t,"ios"===e.mode?n:r),[4,f(e,a,e.el,i)]);case 1:return s=o.sent(),s&&e.didPresent.emit(),[2]}})})}function d(e,t,n,r,i,a,s){return o["a"](this,void 0,void 0,function(){var c,u;return o["c"](this,function(o){switch(o.label){case 0:if(!e.presented)return[2,!1];e.presented=!1,o.label=1;case 1:return o.trys.push([1,3,,4]),e.willDismiss.emit({data:t,role:n}),c=e.leaveAnimation?e.leaveAnimation:e.config.get(r,"ios"===e.mode?i:a),[4,f(e,c,e.el,s)];case 2:return o.sent(),e.didDismiss.emit({data:t,role:n}),[3,4];case 3:return u=o.sent(),console.error(u),[3,4];case 4:return e.el.remove(),[2,!0]}})})}function p(e){return e.querySelector("ion-app")||e.body}function f(e,t,n,r){return o["a"](this,void 0,void 0,function(){var i,a,s;return o["c"](this,function(o){switch(o.label){case 0:return e.animation?(e.animation.destroy(),e.animation=void 0,[2,!1]):[3,1];case 1:return n.classList.remove("ion-page-invisible"),i=n.shadowRoot||e.el,s=e,[4,e.animationCtrl.create(t,i,r)];case 2:return a=s.animation=o.sent(),e.animation=a,e.animated||a.duration(0),e.keyboardClose&&a.beforeAddWrite(function(){var e=n.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),[4,a.playAsync()];case 3:return o.sent(),a.destroy(),e.animation=void 0,[2,a.hasCompleted]}})})}function v(e,t){var n,o=new Promise(function(e){return n=e});return m(e,t,function(e){n(e.detail)}),o}function m(e,t,n){var o=function(r){e.removeEventListener(t,o),n(r)};e.addEventListener(t,o)}function b(e){return"cancel"===e||e===h}var h="backdrop"},"6c57":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return a});
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
var o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},o(e,t)};function r(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(t){i(t)}}function s(e){try{c(o["throw"](e))}catch(t){i(t)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}c((o=o.apply(e,t||[])).next())})}function a(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,o&&(r=2&i[0]?o["return"]:i[0]?o["throw"]||((r=o["return"])&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},"71d6":function(e,t,n){"use strict";n.d(t,"a",function(){return w}),n.d(t,"b",function(){return y}),n.d(t,"c",function(){return x}),n.d(t,"d",function(){return a});var o=n("6c57"),r=function(){return n.e("chunk-2d21b4fb").then(n.bind(null,"bedf"))},i=function(){return n.e("chunk-2d0bcea3").then(n.bind(null,"2a86"))};function a(e){return new Promise(function(t,n){e.queue.write(function(){s(e),c(e).then(function(n){n.animation&&n.animation.destroy(),u(e),t(n)},function(t){u(e),n(t)})})})}function s(e){var t=e.enteringEl,n=e.leavingEl;E(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),x(t,!1),n&&x(n,!1)}function c(e){return o["a"](this,void 0,void 0,function(){var t,n;return o["c"](this,function(o){switch(o.label){case 0:return[4,l(e)];case 1:return t=o.sent(),n=t?d(t,e):p(e),[2,n]}})})}function u(e){var t=e.enteringEl,n=e.leavingEl;t.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function l(e){return o["a"](this,void 0,void 0,function(){var t,n;return o["c"](this,function(o){switch(o.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,r()]:[2,void 0];case 1:return n=o.sent().iosTransitionAnimation,[3,4];case 2:return[4,i()];case 3:n=o.sent().mdTransitionAnimation,o.label=4;case 4:return t=n,[2,t]}})})}function d(e,t){return o["a"](this,void 0,void 0,function(){var n;return o["c"](this,function(o){switch(o.label){case 0:return[4,f(t,!0)];case 1:return o.sent(),[4,t.animationCtrl.create(e,t.baseEl,t)];case 2:return n=o.sent(),b(t.window,t.enteringEl,t.leavingEl),[4,m(n,t)];case 3:return o.sent(),n.hasCompleted&&h(t.window,t.enteringEl,t.leavingEl),[2,{hasCompleted:n.hasCompleted,animation:n}]}})})}function p(e){return o["a"](this,void 0,void 0,function(){var t,n;return o["c"](this,function(o){switch(o.label){case 0:return t=e.enteringEl,n=e.leavingEl,[4,f(e,!1)];case 1:return o.sent(),b(e.window,t,n),h(e.window,t,n),[2,{hasCompleted:!0}]}})})}function f(e,t){return o["a"](this,void 0,void 0,function(){var n,r;return o["c"](this,function(o){switch(o.label){case 0:return n=void 0!==e.deepWait?e.deepWait:t,r=n?[w(e.enteringEl),w(e.leavingEl)]:[g(e.enteringEl),g(e.leavingEl)],[4,Promise.all(r)];case 1:return o.sent(),[4,v(e.viewIsReady,e.enteringEl)];case 2:return o.sent(),[2]}})})}function v(e,t){return o["a"](this,void 0,void 0,function(){return o["c"](this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function m(e,t){var n=t.progressCallback,o=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),o}function b(e,t,n){y(e,n,"ionViewWillLeave"),y(e,t,"ionViewWillEnter")}function h(e,t,n){y(e,t,"ionViewDidEnter"),y(e,n,"ionViewDidLeave")}function y(e,t,n){if(t){var o=e.CustomEvent,r=new o(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(r)}}function g(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function w(e){return o["a"](this,void 0,void 0,function(){var t,n;return o["c"](this,function(o){switch(o.label){case 0:return t=e,t?null==t.componentOnReady?[3,2]:[4,t.componentOnReady()]:[3,4];case 1:if(n=o.sent(),null!=n)return[2];o.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(w))];case 3:o.sent(),o.label=4;case 4:return[2]}})})}function x(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function E(e,t,n){void 0!==e&&(e.style.zIndex="back"===n?"99":"101"),void 0!==t&&(t.style.zIndex="100")}}}]);
//# sourceMappingURL=chunk-58647091.2283e3b8.js.map