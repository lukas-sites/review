(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20865c"],{a52d:function(t,e,n){"use strict";n.r(e),n.d(e,"createGesture",function(){return v});var r,o=n("b4b8");function i(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(n){r=!1}return!!r}function a(t,e,n,r){var o,a,c=i(t)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;return t["__zone_symbol__addEventListener"]?(o="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(o="addEventListener",a="removeEventListener"),t[o](e,n,c),function(){t[a](e,n,c)}}var c=2e3;function u(t,e,n,r,o){var i,u,d,v,f,l,p,m=0;function X(r){m=Date.now()+c,e(r)&&(!u&&n&&(u=a(t,"touchmove",n,o)),d||(d=a(t,"touchend",y,o)),v||(v=a(t,"touchcancel",y,o)))}function h(r){m>Date.now()?console.debug("mousedown event dropped because of previous touch"):e(r)&&(!l&&n&&(l=a(s(t),"mousemove",n,o)),p||(p=a(s(t),"mouseup",Y,o)))}function y(t){b(),r&&r(t)}function Y(t){S(),r&&r(t)}function b(){u&&u(),d&&d(),v&&v(),u=d=v=void 0}function S(){l&&l(),p&&p(),l=p=void 0}function _(){b(),S()}function g(e){e?(i&&i(),f&&f(),i=f=void 0,_()):(i||(i=a(t,"touchstart",X,o)),f||(f=a(t,"mousedown",h,o)))}function w(){g(!0),r=n=e=void 0}return{setDisabled:g,stop:_,destroy:w}}function s(t){return t instanceof Document?t:t.ownerDocument}function d(t,e,n){var r=n*(Math.PI/180),o="x"===t,i=Math.cos(r),a=e*e,c=0,u=0,s=!1,d=0;return{start:function(t,e){c=t,u=e,d=0,s=!0},detect:function(t,e){if(!s)return!1;var n=t-c,r=e-u,v=n*n+r*r;if(v<a)return!1;var f=Math.sqrt(v),l=(o?n:r)/f;return d=l>i?1:l<-i?-1:0,s=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}function v(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,i=e.onStart,a=e.onEnd,c=e.notCaptured,s=e.onMove,v=e.threshold,m=e.queue,X={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},h=u(e.el,w,D,M,{capture:!1}),y=d(e.direction,e.threshold,e.maxAngle),Y=o["a"].createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),b=!1,S=!1,_=!0,g=!1;function w(t){var e=p(t);return!(S||!_)&&(l(t,X),X.startX=X.currentX,X.startY=X.currentY,X.startTimeStamp=X.timeStamp=e,X.velocityX=X.velocityY=X.deltaX=X.deltaY=0,X.event=t,(!n||!1!==n(X))&&(Y.release(),!!Y.start()&&(S=!0,0===v?L():(y.start(X.startX,X.startY),!0))))}function D(t){b?!g&&_&&(g=!0,f(X,t),m.write(E)):(f(X,t),y.detect(X.currentX,X.currentY)&&(y.isGesture()&&L()||x()))}function E(){b&&(g=!1,s&&s(X))}function L(){return!(Y&&!Y.capture())&&(b=!0,_=!1,X.startX=X.currentX,X.startY=X.currentY,X.startTimeStamp=X.timeStamp,r?r(X).then(T):T(),!0)}function T(){i&&i(X),_=!0}function x(){G(),h.stop(),c&&c(X)}function G(){b=!1,S=!1,g=!1,_=!0,Y.release()}function M(t){var e=b,n=_;G(),n&&(f(X,t),e?a&&a(X):c&&c(X))}return{setDisabled:function(t){h.setDisabled(t)},destroy:function(){Y.destroy(),h.destroy()}}}function f(t,e){var n=t.currentX,r=t.currentY,o=t.timeStamp;l(e,t);var i=t.currentX,a=t.currentY,c=t.timeStamp=p(e),u=c-o;if(u>0&&u<100){var s=(i-n)/u,d=(a-r)/u;t.velocityX=.7*s+.3*t.velocityX,t.velocityY=.7*d+.3*t.velocityY}t.deltaX=i-t.startX,t.deltaY=a-t.startY,t.event=e}function l(t,e){var n=0,r=0;if(t){var o=t.changedTouches;if(o&&o.length>0){var i=o[0];n=i.clientX,r=i.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function p(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=chunk-2d20865c.d778e728.js.map