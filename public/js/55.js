(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{IQOQ:function(e,n,t){e.exports=function(){var e="__v-click-outside",n="undefined"!=typeof window,t="undefined"!=typeof navigator,i=n&&("ontouchstart"in window||t&&navigator.msMaxTouchPoints>0)?["touchstart"]:["click"];function r(n,t){var r=function(e){var n="function"==typeof e;if(!n&&"object"!=typeof e)throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:n?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||i,isActive:!(!1===e.isActive)}}(t.value),o=r.handler,u=r.middleware;r.isActive&&(n[e]=r.events.map((function(e){return{event:e,handler:function(e){return function(e){var n=e.el,t=e.event,i=e.handler,r=e.middleware;t.target!==n&&!n.contains(t.target)&&r(t,n)&&i(t,n)}({event:e,el:n,handler:o,middleware:u})}}})),n[e].forEach((function(e){var n=e.event,t=e.handler;return setTimeout((function(){return document.documentElement.addEventListener(n,t,!1)}),0)})))}function o(n){(n[e]||[]).forEach((function(e){return document.documentElement.removeEventListener(e.event,e.handler,!1)})),delete n[e]}var u={bind:r,update:function(e,n){var t=n.value,i=n.oldValue;JSON.stringify(t)!==JSON.stringify(i)&&(o(e),r(e,{value:t}))},unbind:o};return{install:function(e){e.directive("click-outside",u)},directive:u}}()}}]);
//# sourceMappingURL=55.js.map?id=c27c7526c0d1c6236904