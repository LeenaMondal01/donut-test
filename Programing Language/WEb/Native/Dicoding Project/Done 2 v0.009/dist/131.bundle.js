"use strict";(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[131],{131:(n,e,t)=>{t.r(e),t.d(e,{Workbox:()=>l,WorkboxEvent:()=>c,messageSW:()=>r});try{self["workbox:window:6.5.4"]&&_()}catch(r){}function r(n,e){return new Promise((function(t){var r=new MessageChannel;r.port1.onmessage=function(n){t(n.data)},n.postMessage(e,[r.port2])}))}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function i(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0;return function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=n[Symbol.iterator]()).next.bind(t)}try{self["workbox:core:6.5.4"]&&_()}catch(r){}var a=function(){var n=this;this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))};function s(n,e){var t=location.href;return new URL(n,t).href===new URL(e,t).href}var c=function(n,e){this.type=n,Object.assign(this,e)};function u(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function f(){}var v={type:"SKIP_WAITING"};function h(n,e){if(!e)return n&&n.then?n.then(f):Promise.resolve()}var l=function(n){var e,t;function o(e,t){var r,o;return void 0===t&&(t={}),(r=n.call(this)||this).nn={},r.tn=0,r.rn=new a,r.en=new a,r.on=new a,r.un=0,r.an=new Set,r.cn=function(){var n=r.fn,e=n.installing;r.tn>0||!s(e.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=e,n.removeEventListener("updatefound",r.cn)):(r.hn=e,r.an.add(e),r.rn.resolve(e)),++r.tn,e.addEventListener("statechange",r.ln)},r.ln=function(n){var e=r.fn,t=n.target,o=t.state,i=t===r.vn,a={sw:t,isExternal:i,originalEvent:n};!i&&r.mn&&(a.isUpdate=!0),r.dispatchEvent(new c(o,a)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&e.waiting===t&&r.dispatchEvent(new c("waiting",a))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(t))},r.dn=function(n){var e=r.hn,t=e!==navigator.serviceWorker.controller;r.dispatchEvent(new c("controlling",{isExternal:t,originalEvent:n,sw:e,isUpdate:r.mn})),t||r.on.resolve(e)},r.gn=(o=function(n){var e=n.data,t=n.ports,o=n.source;return u(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new c("message",{data:e,originalEvent:n,ports:t,sw:o}))}))},function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];try{return Promise.resolve(o.apply(this,n))}catch(n){return Promise.reject(n)}}),r.sn=e,r.nn=t,navigator.serviceWorker.addEventListener("message",r.gn),r}t=n,(e=o).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t;var i,f=o.prototype;return f.register=function(n){var e=(void 0===n?{}:n).immediate,t=void 0!==e&&e;try{var r=this;return function(n,e){var t=n();return t&&t.then?t.then(e):e()}((function(){if(!t&&"complete"!==document.readyState)return h(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),u(r.bn(),(function(n){r.fn=n,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var e=r.fn.waiting;return e&&s(e.scriptURL,r.sn.toString())&&(r.hn=e,Promise.resolve().then((function(){r.dispatchEvent(new c("waiting",{sw:e,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(n){return Promise.reject(n)}},f.update=function(){try{return this.fn?h(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(n){try{return u(this.getSW(),(function(e){return r(e,n)}))}catch(n){return Promise.reject(n)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,v)},f.pn=function(){var n=navigator.serviceWorker.controller;return n&&s(n.scriptURL,this.sn.toString())?n:void 0},f.bn=function(){try{var n=this;return function(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}((function(){return u(navigator.serviceWorker.register(n.sn,n.nn),(function(e){return n.un=performance.now(),e}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},(i=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(o.prototype,i),o}(function(){function n(){this.Pn=new Map}var e=n.prototype;return e.addEventListener=function(n,e){this.Sn(n).add(e)},e.removeEventListener=function(n,e){this.Sn(n).delete(e)},e.dispatchEvent=function(n){n.target=this;for(var e,t=i(this.Sn(n.type));!(e=t()).done;)(0,e.value)(n)},e.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}())}}]);
//# sourceMappingURL=131.bundle.js.map