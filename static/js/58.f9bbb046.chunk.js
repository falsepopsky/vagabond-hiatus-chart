/*! For license information please see 58.f9bbb046.chunk.js.LICENSE.txt */
(self.webpackChunkvagabond_hiatus_chart=self.webpackChunkvagabond_hiatus_chart||[]).push([[58],{9591:function(t,e,r){var n=r(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(P){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=l;var p={};function d(){}function v(){}function y(){}var m={};f(m,u,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(O([])));w&&w!==r&&i.call(w,u)&&(m=w);var x=y.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,a,u,c){var s=h(t[o],t,a);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==n(l)&&i.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(l).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=y,f(x,"constructor",y),f(y,"constructor",v),v.displayName=f(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},b(E.prototype),f(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),f(x,s,"Generator"),f(x,u,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7757:function(t,e,r){var n=r(9591)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},2058:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return k}});var n=r(168),o=r(7757),i=r.n(o),a=r(2791),u=r(9642),c=r.n(u);function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(this,arguments)}var f="twttr",l=f,h=!("undefined"===typeof window||!window.document||!window.document.createElement);function p(t,e){return t===e?0!==t||0!==e||1/t===1/e:t!==t&&e!==e}function d(t){var e=(0,a.useRef)();return function(t,e){if(p(t,e))return!0;if("object"!==typeof t||null===t||"object"!==typeof e||null===e)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(e,r[o])||!p(t[r[o]],e[r[o]]))return!1;return!0}(t,e.current)||(e.current=t),e.current}function v(t){return"object"===typeof t?s({},t):t}function y(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}h&&c()("https://platform.twitter.com/widgets.js",l);var m="twdiv";function g(t,e,r,n){var o=(0,a.useState)(null),u=o[0],s=o[1],f=(0,a.useRef)(null);if(!h)return{ref:f,error:u};var p=[t,d(e),d(r)];return(0,a.useEffect)((function(){s(null);var o,a,u=!1;if(f.current){var h=function(){var o,a=(o=i().mark((function o(){var a,h;return i().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f&&f.current){o.next=2;break}return o.abrupt("return");case 2:return(a=document.createElement("div")).setAttribute(m,"yes"),f.current.appendChild(a),o.prev=5,o.next=8,new Promise((function(t,e){var r=function(){return e(new Error("Could not load remote twitter widgets js"))};c().ready(l,{success:function(){var e=window.twttr;e&&e.widgets||r(),t(e.widgets)},error:r})}));case 8:return h=o.sent,o.next=11,h[t](v(e),a,v(r));case 11:if(o.sent||u){o.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:o.next=21;break;case 16:return o.prev=16,o.t0=o.catch(5),console.error(o.t0),s(o.t0),o.abrupt("return");case 21:if(f&&f.current){o.next=23;break}return o.abrupt("return");case 23:if(!u){o.next=26;break}return a&&a.remove(),o.abrupt("return");case 26:n&&n();case 27:case"end":return o.stop()}}),o,null,[[5,16]])})),function(){var t=this,e=arguments;return new Promise((function(r,n){var i=o.apply(t,e);function a(t){y(i,r,n,a,u,"next",t)}function u(t){y(i,r,n,a,u,"throw",t)}a(void 0)}))});return function(){return a.apply(this,arguments)}}();o=f.current,a=m,o&&o.querySelectorAll("*").forEach((function(t){t.hasAttribute(a)&&t.remove()})),h()}return function(){u=!0}}),p),{ref:f,error:u}}var w,x=function(t){var e=t.dataSource,r=t.options,n=t.onLoad,o=t.renderError,i=g("createTimeline",e,r,n),u=i.ref,c=i.error;return a.createElement("div",{ref:u},c&&o&&o(c))},b=r(6031),E=r(4770),L=r(184),j=b.ZP.article(w||(w=(0,n.Z)(["\n  height: 480px;\n"]))),_={info:{sourceType:"profile",screenName:"inouetake"},styles:{theme:"dark",chrome:"noheader nofooter",width:"400",maxWidth:"500",height:"460"}},k=function(){return(0,L.jsxs)(E.S$,{children:[(0,L.jsx)(E.QL,{borderColor:"rgb(77, 213, 167, 0.9)"}),(0,L.jsx)(E.Dx,{children:"SOCIAL MEDIA"}),(0,L.jsx)(j,{children:(0,L.jsx)(x,{dataSource:_.info,options:_.styles})})]})}},9642:function(t,e){var r,n,o;n=[],void 0===(o="function"===typeof(r=function(){var t=function(){},e={},r={},n={};function o(t,e){t=t.push?t:[t];var o,i,a,u=[],c=t.length,s=c;for(o=function(t,r){r.length&&u.push(t),--s||e(u)};c--;)i=t[c],(a=r[i])?o(i,a):(n[i]=n[i]||[]).push(o)}function i(t,e){if(t){var o=n[t];if(r[t]=e,o)for(;o.length;)o[0](t,e),o.splice(0,1)}}function a(e,r){e.call&&(e={success:e}),r.length?(e.error||t)(r):(e.success||t)(e)}function u(e,r,n,o){var i,a,c=document,s=n.async,f=(n.numRetries||0)+1,l=n.before||t,h=e.replace(/[\?|#].*$/,""),p=e.replace(/^(css|img)!/,"");o=o||0,/(^css!|\.css$)/.test(h)?((a=c.createElement("link")).rel="stylesheet",a.href=p,(i="hideFocus"in a)&&a.relList&&(i=0,a.rel="preload",a.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)?(a=c.createElement("img")).src=p:((a=c.createElement("script")).src=e,a.async=void 0===s||s),a.onload=a.onerror=a.onbeforeload=function(t){var c=t.type[0];if(i)try{a.sheet.cssText.length||(c="e")}catch(s){18!=s.code&&(c="e")}if("e"==c){if((o+=1)<f)return u(e,r,n,o)}else if("preload"==a.rel&&"style"==a.as)return a.rel="stylesheet";r(e,c,t.defaultPrevented)},!1!==l(e,a)&&c.head.appendChild(a)}function c(t,e,r){var n,o,i=(t=t.push?t:[t]).length,a=i,c=[];for(n=function(t,r,n){if("e"==r&&c.push(t),"b"==r){if(!n)return;c.push(t)}--i||e(c)},o=0;o<a;o++)u(t[o],n,r)}function s(t,r,n){var o,u;if(r&&r.trim&&(o=r),u=(o?n:r)||{},o){if(o in e)throw"LoadJS";e[o]=!0}function s(e,r){c(t,(function(t){a(u,t),e&&a({success:e,error:r},t),i(o,t)}),u)}if(u.returnPromise)return new Promise(s);s()}return s.ready=function(t,e){return o(t,(function(t){a(e,t)})),s},s.done=function(t){i(t,[])},s.reset=function(){e={},r={},n={}},s.isDefined=function(t){return t in e},s})?r.apply(e,n):r)||(t.exports=o)}}]);
//# sourceMappingURL=58.f9bbb046.chunk.js.map