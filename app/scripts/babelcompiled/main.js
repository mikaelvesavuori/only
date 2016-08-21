"use strict";var _typeof4=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};var _typeof3=typeof Symbol==="function"&&_typeof4(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof4(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof4(obj);};var _typeof2=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof3(obj);};var font=new FontFaceObserver("Inconsolata",{weight:300});font.load().then(function(){//console.log("Font is available");
},function(){//console.log("Font is not available");
});"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Polygon=function(){function Polygon(height,width){_classCallCheck(this,Polygon);this.name="Polygon";this.height=height;this.width=width;}_createClass(Polygon,[{key:"sayName",value:function sayName(){ChromeSamples.log("Hi, I am a ",this.name+".");}},{key:"sayHistory",value:function sayHistory(){ChromeSamples.log("'Polygon' is derived from the Greek polus (many) "+"and gonia (angle).");}}]);return Polygon;}();var p=new Polygon(300,400);p.sayName();ChromeSamples.log("The width of this polygon is "+p.width);"use strict";var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};!function(t){"use strict";var e=function e(_e,n,o){function i(t){return r.body?t():void setTimeout(function(){i(t);});}function a(){l.addEventListener&&l.removeEventListener("load",a),l.media=o||"all";}var r=t.document,l=r.createElement("link"),s;if(n)s=n;else{var c=(r.body||r.getElementsByTagName("head")[0]).childNodes;s=c[c.length-1];}var d=r.styleSheets;l.rel="stylesheet",l.href=_e,l.media="only x",i(function(){s.parentNode.insertBefore(l,n?s:s.nextSibling);});var f=function f(t){for(var e=l.href,n=d.length;n--;){if(d[n].href===e)return t();}setTimeout(function(){f(t);});};return l.addEventListener&&l.addEventListener("load",a),l.onloadcssdefined=f,f(a),l;};"undefined"!=typeof exports?exports.loadCSS=e:t.loadCSS=e;}("undefined"!=typeof global?global:undefined),function(t){if(t.loadCSS){var e=loadCSS.relpreload={};if(e.support=function(){try{return t.document.createElement("link").relList.supports("preload");}catch(e){return!1;}},e.poly=function(){for(var e=t.document.getElementsByTagName("link"),n=0;n<e.length;n++){var o=e[n];"preload"===o.rel&&"style"===o.getAttribute("as")&&(t.loadCSS(o.href,o),o.rel=null);}},!e.support()){e.poly();var n=t.setInterval(e.poly,300);t.addEventListener&&t.addEventListener("load",function(){t.clearInterval(n);}),t.attachEvent&&t.attachEvent("onload",function(){t.clearInterval(n);});}}}(undefined),function(){"use strict";function t(t){f.push(t),1==f.length&&d();}function e(){for(;f.length;){f[0](),f.shift();}}function n(t){this.a=u,this.b=void 0,this.f=[];var e=this;try{t(function(t){a(e,t);},function(t){r(e,t);});}catch(n){r(e,n);}}function o(t){return new n(function(e,n){n(t);});}function i(t){return new n(function(e){e(t);});}function a(t,e){if(t.a==u){if(e==t)throw new TypeError();var n=!1;try{var o=e&&e.then;if(null!=e&&"object"==(typeof e==="undefined"?"undefined":_typeof(e))&&"function"==typeof o)return void o.call(e,function(e){n||a(t,e),n=!0;},function(e){n||r(t,e),n=!0;});}catch(i){return void(n||r(t,i));}t.a=0,t.b=e,l(t);}}function r(t,e){if(t.a==u){if(e==t)throw new TypeError();t.a=1,t.b=e,l(t);}}function l(e){t(function(){if(e.a!=u)for(;e.f.length;){var t=e.f.shift(),n=t[0],o=t[1],i=t[2],t=t[3];try{0==e.a?i("function"==typeof n?n.call(void 0,e.b):e.b):1==e.a&&("function"==typeof o?i(o.call(void 0,e.b)):t(e.b));}catch(a){t(a);}}});}function s(t){return new n(function(e,n){function o(n){return function(o){r[n]=o,a+=1,a==t.length&&e(r);};}var a=0,r=[];0==t.length&&e(r);for(var l=0;l<t.length;l+=1){i(t[l]).c(o(l),n);}});}function c(t){return new n(function(e,n){for(var o=0;o<t.length;o+=1){i(t[o]).c(e,n);}});}var d,f=[];d=function d(){setTimeout(e);};var u=2;n.prototype.g=function(t){return this.c(void 0,t);},n.prototype.c=function(t,e){var o=this;return new n(function(n,i){o.f.push([t,e,n,i]),l(o);});},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=c,window.Promise.all=s,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e);}function e(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t();}):document.attachEvent("onreadystatechange",function n(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",n),t());});}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c);}function o(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+e+";";}function i(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e?(t.g=e,!0):!1;}function a(e,n){function o(){var t=a;i(t)&&null!==t.a.parentNode&&n(t.g);}var a=e;t(e.b,o),t(e.c,o),i(e);}function r(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal";}function l(){if(null===d){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif";}catch(e){}d=""!==t.style.font;}return d;}function s(t,e){return[t.style,t.weight,l()?t.stretch:"","100px",e].join(" ");}var c=null,d=null,f=null;r.prototype.load=function(t,i){var r=this,l=t||"BESbswy",d=i||3e3,u=new Date().getTime();return new Promise(function(t,i){if(null===f&&(f=!!window.FontFace),f){var h=new Promise(function(t,e){function n(){new Date().getTime()-u>=d?e():document.fonts.load(s(r,r.family),l).then(function(e){1<=e.length?t():setTimeout(n,25);},function(){e();});}n();}),p=new Promise(function(t,e){setTimeout(e,d);});Promise.race([p,h]).then(function(){t(r);},function(){i(r);});}else e(function(){function e(){var e;(e=-1!=v&&-1!=w||-1!=v&&-1!=y||-1!=w&&-1!=y)&&((e=v!=w&&v!=y&&w!=y)||(null===c&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=c&&(v==g&&w==g&&y==g||v==b&&w==b&&y==b||v==E&&w==E&&y==E)),e=!e),e&&(null!==x.parentNode&&x.parentNode.removeChild(x),clearTimeout(T),t(r));}function f(){if(new Date().getTime()-u>=d)null!==x.parentNode&&x.parentNode.removeChild(x),i(r);else{var t=document.hidden;!0!==t&&void 0!==t||(v=h.a.offsetWidth,w=p.a.offsetWidth,y=m.a.offsetWidth,e()),T=setTimeout(f,50);}}var h=new n(l),p=new n(l),m=new n(l),v=-1,w=-1,y=-1,g=-1,b=-1,E=-1,x=document.createElement("div"),T=0;x.dir="ltr",o(h,s(r,"sans-serif")),o(p,s(r,"serif")),o(m,s(r,"monospace")),x.appendChild(h.a),x.appendChild(p.a),x.appendChild(m.a),document.body.appendChild(x),g=h.a.offsetWidth,b=p.a.offsetWidth,E=m.a.offsetWidth,f(),a(h,function(t){v=t,e();}),o(h,s(r,'"'+r.family+'",sans-serif')),a(p,function(t){w=t,e();}),o(p,s(r,'"'+r.family+'",serif')),a(m,function(t){y=t,e();}),o(m,s(r,'"'+r.family+'",monospace'));});});},"undefined"!=typeof module?module.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load);}();var font=new FontFaceObserver("Inconsolata",{weight:300});font.load().then(function(){console.log("Font is available");},function(){console.log("Font is not available");});"use strict";!function(n,e){var t=function t(e,_t){return"undefined"==typeof _t?e:"undefined"!=typeof n.Mustache&&"undefined"!=typeof n.Mustache.render?Mustache.render(e,_t):"undefined"!=typeof n.Handlebars&&"undefined"!=typeof n.Handlebars.compile?Handlebars.compile(e)(_t):"undefined"!=typeof n._&&"undefined"!=typeof n._.template?output=_.template(e,_t):e;},a=function a(n,e){var t=new XMLHttpRequest();t.open("GET",n),t.send(),t.onload=function(){e(this.response);};},r=function r(t,a,_r){var o=e.createElement("script");o.src=t+(""==parser.search?"?":"&")+m.jsonp+"=JSONPCallback",n.JSONPCallback=function(e){a(JSON.stringify(e)),n.JSONPCallback=null;var t=o.parentNode;t&&t.removeChild(o),o=null;},e.getElementsByTagName("head")[0].appendChild(o);},o=function o(t,_o){var i=e.createElement("a");i.href=t,i.hostname==n.location.hostname?a(t,_o):r(t,_o,i);},i=function i(n,e,t){var a=f(JSON.parse(t),a);n.innerHTML=m.render(e,a),u(n,a);},d=function d(n,e){var t=this.context;""!=n.innerHTML&&(t=f(JSON.parse(n.innerHTML),t)),n.innerHTML=m.render(e,t),u(n,t);},l=function l(n,e){var t=f(JSON.parse(e),t);n.innerHTML=m.render(n.innerHTML,t),u(n,this.context);},c=function c(e,t){var a=t.getAttribute("data-"+m.html),r=t.getAttribute("data-"+m.json),c=t.getAttribute("data-fragment-media");if(!c||!n.matchMedia||n.matchMedia(c).matches){var u=function u(n){n(),h(-1);};h(1),e.html&&e.json?o(a,function(n){o(r,function(e){u(i.bind(this,t,n,e));});}):e.html?o(a,function(n){u(d.bind(this,t,n));}):e.json&&o(r,function(n){u(l.bind(this,t,n));});}},u=function u(n,t){"undefined"!=typeof n&&"querySelectorAll"in n||(n=e);var a={parent:n,context:t},r=n.querySelectorAll("[data-"+m.html+"][data-"+m.json+"]");Array.prototype.forEach.call(r,c.bind(a,{json:!0,html:!0}));var r=n.querySelectorAll("[data-"+m.html+"]:not([data-"+m.json+"])");Array.prototype.forEach.call(r,c.bind(a,{json:!1,html:!0}));var r=n.querySelectorAll("[data-"+m.json+"]:not([data-"+m.html+"])");Array.prototype.forEach.call(r,c.bind(a,{json:!0,html:!1}));},f=function f(n,e){"undefined"==typeof n&&(n={});for(var t in e){n.hasOwnProperty(t)||(n[t]=e[t]);}return n;},s=0,p=0,h=function h(n){s+=n,s>p&&(p=s),0==s&&m.ready(p);},m=f(n.fragment,{html:"fragment",json:"fragment-json",jsonp:"callback",manual:!1,render:t,evaluate:u,ready:function ready(){}});m.manual||e.addEventListener("DOMContentLoaded",function(){m.evaluate();}),n.fragment=m;}(window,window.document);"use strict";var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof2(obj);};/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild);}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e;}function i(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t);}function a(e){var t=v[e[p]];return t||(t={},g++,e[p]=g,v[g]=t),t;}function s(e,n,r){if(n||(n=t),y)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i);}function o(e,n){if(e||(e=t),y)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),s=0,o=r(),c=o.length;c>s;s++){i.createElement(o[s]);}return i;}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?s(n,e,t):t.createElem(n);},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")';})+");return n}")(E,t.frag);}function l(e){e||(e=t);var r=a(e);return!E.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),y||c(e,r),e;}var u="3.7.3",d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h,p="_html5shiv",g=0,v={},y;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,y=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement;}();}catch(n){h=!0,y=!0;}}();var E={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:d.shivCSS!==!1,supportsUnknownElements:y,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:s,createDocumentFragment:o,addElements:i};e.html5=E,l(t),"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&module.exports&&(module.exports=E);}("undefined"!=typeof window?window:undefined,document),!function(e,t,n){"use strict";function r(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"");}function i(){var t;j=!1,Y=e.devicePixelRatio,U={},q={},t=(Y||1)*A.xQuant,A.uT||(A.maxX=Math.max(1.3,A.maxX),t=Math.min(t,A.maxX),S.DPR=t),G.width=Math.max(e.innerWidth||0,x.clientWidth),G.height=Math.max(e.innerHeight||0,x.clientHeight),G.vw=G.width/100,G.vh=G.height/100,G.em=S.getEmValue(),G.rem=G.em,h=A.lazyFactor/2,h=h*t+h,g=.4+.1*t,d=.5+.2*t,f=.5+.25*t,p=t+1.3,(m=G.width>G.height)||(h*=.9),R&&(h*=.9),C=[G.width,G.height,t].join("-");}function a(e,t,n){var r=t*Math.pow(e-.4,1.9);return m||(r/=1.3),e+=r,e>n;}function s(e){var t,n=S.getSet(e),r=!1;"pending"!=n&&(r=C,n&&(t=S.setRes(n),r=S.applySetCandidate(t,e))),e[S.ns].evaled=r;}function o(e,t){return e.res-t.res;}function c(e,t,n){var r;return!n&&t&&(n=e[S.ns].sets,n=n&&n[n.length-1]),r=l(t,n),r&&(t=S.makeUrl(t),e[S.ns].curSrc=t,e[S.ns].curCan=r,r.res||ee(r,r.set.sizes)),r;}function l(e,t){var n,r,i;if(e&&t)for(i=S.parseSet(t),e=S.makeUrl(e),n=0;n<i.length;n++){if(e==S.makeUrl(i[n].url)){r=i[n];break;}}return r;}function u(e,t){var n,r,i,a,s=e.getElementsByTagName("source");for(n=0,r=s.length;r>n;n++){i=s[n],i[S.ns]=!0,a=i.getAttribute("srcset"),a&&t.push({srcset:a,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")});}}var d,f,m,h,p,g,v,y,E,C,S={},k=function k(){},w=t.createElement("img"),b=w.getAttribute,z=w.setAttribute,T=w.removeAttribute,x=t.documentElement,M={},A={xQuant:1,lazyFactor:.4,maxX:2},L="data-pfsrc",N=L+"set",F="webkitBackfaceVisibility"in x.style,P=navigator.userAgent,R=/rident/.test(P)||/ecko/.test(P)&&P.match(/rv\:(\d+)/)&&RegExp.$1>35,D="currentSrc",W=/\s+\+?\d+(e\d+)?w/,I=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,B=/^([\+eE\d\.]+)(w|x)$/,O=/\s*\d+h\s*/,_=e.respimgCFG,X=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),H="font-size:100%!important;",j=!0,U={},q={},Y=e.devicePixelRatio,G={px:1,"in":96},V=t.createElement("a"),Q=!1,J=function J(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n);},K=function K(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n];};},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function t(){for(var e=arguments,t=0,n=e[0];++t in e;){n=n.replace(e[t],e[++t]);}return n;},n=K(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"");});return function(t,r){var i;if(!(t in U))if(U[t]=!1,r&&(i=t.match(e)))U[t]=i[1]*G[i[2]];else try{U[t]=new Function("e",n(t))(G);}catch(a){}return U[t];};}(),ee=function ee(e,t){return e.w?(e.cWidth=S.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.x,e;},te=function te(n){var r,i,a,s=n||{};if(s.elements&&1==s.elements.nodeType&&("IMG"==s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),s.reparse&&(s.reevaluate=!0,e.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),r=s.elements||S.qsa(s.context||t,s.reevaluate||s.reselect?S.sel:S.selShort),a=r.length){for(S.setupRun(s),Q=!0,i=0;a>i;i++){S.fillImg(r[i],s);}S.teardownRun(s);}},ne=K(function(e){var t=[1,"x"],n=r(e||"");return n&&(n=n.replace(O,""),t=n.match(B)?[1*RegExp.$1,RegExp.$2]:!1),t;});if(D in w||(D="src"),M["image/jpeg"]=!0,M["image/gif"]=!0,M["image/png"]=!0,M["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),S.ns=("ri"+new Date().getTime()).substr(0,9),S.supSrcset="srcset"in w,S.supSizes="sizes"in w,S.supPicture=!!e.HTMLPictureElement,S.supSrcset&&S.supPicture&&!S.supSizes&&!function(e){w.srcset="data:,a",e.src="data:,a",S.supSrcset=w.complete===e.complete,S.supPicture=S.supSrcset&&S.supPicture;}(t.createElement("img")),S.selShort="picture>img,img[srcset]",S.sel=S.selShort,S.cfg=A,S.supSrcset&&(S.sel+=",img["+N+"]"),S.DPR=Y||1,S.u=G,S.types=M,y=S.supSrcset&&!S.supSizes,S.setSize=k,S.makeUrl=K(function(e){return V.href=e,V.href;}),S.qsa=function(e,t){return e.querySelectorAll(t);},S.matchesMedia=function(){return S.matchesMedia=e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(e){return!e||matchMedia(e).matches;}:S.mMQ,S.matchesMedia.apply(this,arguments);},S.mMQ=function(e){return e?Z(e):!0;},S.calcLength=function(e){var t=Z(e,!0)||!1;return 0>t&&(t=!1),t;},S.supportsType=function(e){return e?M[e]:!0;},S.parseSize=K(function(e){var t=(e||"").match(I);return{media:t&&t[1],length:t&&t[2]};}),S.parseSet=function(e){if(!e.cands){var t,n,r,i,a,s,o=e.srcset;for(e.cands=[];o;){o=o.replace(/^\s+/g,""),t=o.search(/\s/g),r=null,-1!=t?(n=o.slice(0,t),i=n.charAt(n.length-1),","!=i&&n||(n=n.replace(/,+$/,""),r=""),o=o.slice(t+1),null==r&&(a=o.indexOf(","),-1!=a?(r=o.slice(0,a),o=o.slice(a+1)):(r=o,o=""))):(n=o,o=""),n&&(r=ne(r))&&(s={url:n.replace(/^,+/,""),set:e},s[r[1]]=r[0],"x"==r[1]&&1==r[0]&&(e.has1x=!0),e.cands.push(s));}}return e.cands;},S.getEmValue=function(){var e;if(!v&&(e=t.body)){var n=t.createElement("div"),r=x.style.cssText,i=e.style.cssText;n.style.cssText=X,x.style.cssText=H,e.style.cssText=H,e.appendChild(n),v=n.offsetWidth,e.removeChild(n),v=parseFloat(v,10),x.style.cssText=r,e.style.cssText=i;}return v||16;},S.calcListLength=function(e){if(!(e in q)||A.uT){var t,n,i,a,s,o,c=r(e).split(/\s*,\s*/),l=!1;for(s=0,o=c.length;o>s&&(t=c[s],n=S.parseSize(t),i=n.length,a=n.media,!i||!S.matchesMedia(a)||(l=S.calcLength(i))===!1);s++){}q[e]=l?l:G.width;}return q[e];},S.setRes=function(e){var t;if(e){t=S.parseSet(e);for(var n=0,r=t.length;r>n;n++){ee(t[n],e.sizes);}}return t;},S.setRes.res=ee,S.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,l,u,m,v,y,E,k,w,b,z=t[S.ns],T=C,x=h,M=g;if(v=z.curSrc||t[D],y=z.curCan||c(t,v,e[0].set),r=S.DPR,b=y&&y.res,!m&&v&&(w=R&&!t.complete&&y&&b-.2>r,w||y&&!(p>b)||(y&&r>b&&b>d&&(f>b&&(x*=.8,M+=.04*r),y.res+=x*Math.pow(b-M,2)),E=!z.pic||y&&y.set==e[0].set,y&&E&&y.res>=r&&(m=y))),!m)for(b&&(y.res=y.res-(y.res-b)/2),e.sort(o),u=e.length,m=e[u-1],i=0;u>i;i++){if(n=e[i],n.res>=r){s=i-1,m=e[s]&&(l=n.res-r)&&(w||v!=S.makeUrl(n.url))&&a(e[s].res,l,r)?e[s]:n;break;}}return b&&(y.res=b),m&&(k=S.makeUrl(m.url),z.curSrc=k,z.curCan=m,k!=v&&S.setSrc(t,m),S.setSize(t)),T;}},S.setSrc=function(e,t){var n;e.src=t.url,F&&(n=e.style.zoom,e.style.zoom="0.999",e.style.zoom=n);},S.getSet=function(e){var t,n,r,i=!1,a=e[S.ns].sets;for(t=0;t<a.length&&!i;t++){if(n=a[t],n.srcset&&S.matchesMedia(n.media)&&(r=S.supportsType(n.type))){"pending"==r&&(n=r),i=n;break;}}return i;},S.parseSets=function(e,t,r){var i,a,s,o,c="PICTURE"==t.nodeName.toUpperCase(),d=e[S.ns];(d.src===n||r.src)&&(d.src=b.call(e,"src"),d.src?z.call(e,L,d.src):T.call(e,L)),(d.srcset===n||!S.supSrcset||e.srcset||r.srcset)&&(i=b.call(e,"srcset"),d.srcset=i,o=!0),d.sets=[],c&&(d.pic=!0,u(t,d.sets)),d.srcset?(a={srcset:d.srcset,sizes:b.call(e,"sizes")},d.sets.push(a),s=(y||d.src)&&W.test(d.srcset||""),s||!d.src||l(d.src,a)||a.has1x||(a.srcset+=", "+d.src,a.cands.push({url:d.src,x:1,set:a}))):d.src&&d.sets.push({srcset:d.src,sizes:null}),d.curCan=null,d.curSrc=n,d.supported=!(c||a&&!S.supSrcset||s),o&&S.supSrcset&&!d.supported&&(i?(z.call(e,N,i),e.srcset=""):T.call(e,N)),d.supported&&!d.srcset&&(!d.src&&e.src||e.src!=S.makeUrl(d.src))&&(null==d.src?e.removeAttribute("src"):e.src=d.src),d.parsed=!0;},S.fillImg=function(e,t){var n,r,i=t.reselect||t.reevaluate;if(e[S.ns]||(e[S.ns]={}),r=e[S.ns],i||r.evaled!=C){if(!r.parsed||t.reevaluate){if(n=e.parentNode,!n)return;S.parseSets(e,n,t);}r.supported?r.evaled=C:s(e);}},S.setupRun=function(t){(!Q||j||Y!=e.devicePixelRatio)&&(i(),t.elements||t.context||clearTimeout(E));},S.supPicture?(te=k,S.fillImg=k):(t.createElement("picture"),function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function i(){var e=t.readyState||"";o=setTimeout(i,"loading"==e?200:999),t.body&&(n=n||r.test(e),S.fillImgs(),n&&clearTimeout(o));},a=function a(){S.fillImgs();},s=function s(){clearTimeout(E),j=!0,E=setTimeout(a,99);},o=setTimeout(i,t.body?0:20);J(e,"resize",s),J(t,"readystatechange",i);}()),S.respimage=te,S.fillImgs=te,S.teardownRun=k,te._=S,e.respimage=e.picturefill||te,!e.picturefill)for(e.respimgCFG={ri:S,push:function push(e){var t=e.shift();"function"==typeof S[t]?S[t].apply(S,e):(A[t]=e[0],Q&&S.fillImgs({reselect:!0}));}};_&&_.length;){e.respimgCFG.push(_.shift());}e.picturefill||(e.picturefill=e.respimage,e.picturefillCFG||(e.picturefillCFG=e.respimgCFG));}(window,document),function(e,t){var n=t(e,e.document);e.lazySizes=n,"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&module.exports&&(module.exports=n);}(window,function e(t,n){"use strict";if(n.getElementsByClassName){var r,i=n.documentElement,a=t.Date,s=t.HTMLPictureElement,o="addEventListener",c="getAttribute",l=t[o],u=t.setTimeout,d=t.requestAnimationFrame||u,f=t.requestIdleCallback,m=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],p={},g=Array.prototype.forEach,v=function v(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[c]("class")||"")&&p[t];},y=function y(e,t){v(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t);},E=function E(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "));},C=function C(e,t,n){var r=n?o:"removeEventListener";n&&C(e,t),h.forEach(function(n){e[r](n,t);});},S=function S(e,t,r,i,a){var s=n.createEvent("CustomEvent");return s.initCustomEvent(t,!i,!a,r||{}),e.dispatchEvent(s),s;},k=function k(e,n){var i;!s&&(i=t.picturefill||r.pf)?i({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src);},w=function w(e,t){return(getComputedStyle(e,null)||{})[t];},b=function b(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;){n=t.offsetWidth,t=t.parentNode;}return n;},z=function(){var e,t,r=[],i=function i(){var n;for(e=!0,t=!1;r.length;){n=r.shift(),n[0].apply(n[1],n[2]);}e=!1;};return function(a){e?a.apply(this,arguments):(r.push([a,this,arguments]),t||(t=!0,(n.hidden?u:d)(i)));};}(),T=function T(e,t){return t?function(){z(e);}:function(){var t=this,n=arguments;z(function(){e.apply(t,n);});};},x=function x(e){var t,n=0,r=125,i=999,s=i,o=function o(){t=!1,n=a.now(),e();},c=f?function(){f(o,{timeout:s}),s!==i&&(s=i);}:T(function(){u(o);},!0);return function(e){var i;(e=e===!0)&&(s=66),t||(t=!0,i=r-(a.now()-n),0>i&&(i=0),e||9>i&&f?c():u(c,i));};},M=function M(e){var t,n,r=99,i=function i(){t=null,e();},s=function s(){var e=a.now()-n;r>e?u(s,r-e):(f||i)(i);};return function(){n=a.now(),t||(t=u(s,r));};},A=function(){var e,s,d,f,h,p,b,A,N,F,P,R,D,W,I,B=/^img$/i,O=/^iframe$/i,_="onscroll"in t&&!/glebot/.test(navigator.userAgent),X=0,H=0,j=0,U=0,q=function q(e){j--,e&&e.target&&C(e.target,q),(!e||0>j||!e.target)&&(j=0);},Y=function Y(e,t){var r,a=e,s="hidden"==w(n.body,"visibility")||"hidden"!=w(e,"visibility");for(N-=t,R+=t,F-=t,P+=t;s&&(a=a.offsetParent)&&a!=n.body&&a!=i;){s=(w(a,"opacity")||1)>0,s&&"visible"!=w(a,"overflow")&&(r=a.getBoundingClientRect(),s=P>r.left&&F<r.right&&R>r.top-1&&N<r.bottom+1);}return s;},G=function G(){var t,n,a,o,l,u,f,m,p;if((h=r.loadMode)&&8>j&&(t=e.length)){n=0,U++,null==W&&("expand"in r||(r.expand=i.clientHeight>500?500:400),D=r.expand,W=D*r.expFactor),W>H&&1>j&&U>3&&h>2?(H=W,U=0):H=h>1&&U>2&&6>j?D:X;for(;t>n;n++){if(e[n]&&!e[n]._lazyRace)if(_){if((m=e[n][c]("data-expand"))&&(u=1*m)||(u=H),p!==u&&(b=innerWidth+u*I,A=innerHeight+u,f=-1*u,p=u),a=e[n].getBoundingClientRect(),(R=a.bottom)>=f&&(N=a.top)<=A&&(P=a.right)>=f*I&&(F=a.left)<=b&&(R||P||F||N)&&(d&&3>j&&!m&&(3>h||4>U)||Y(e[n],u))){if(ne(e[n]),l=!0,j>9)break;}else!l&&d&&!o&&4>j&&4>U&&h>2&&(s[0]||r.preloadAfterLoad)&&(s[0]||!m&&(R||P||F||N||"auto"!=e[n][c](r.sizesAttr)))&&(o=s[0]||e[n]);}else ne(e[n]);}o&&!l&&ne(o);}},V=x(G),Q=function Q(e){y(e.target,r.loadedClass),E(e.target,r.loadingClass),C(e.target,K);},J=T(Q),K=function K(e){J({target:e.target});},Z=function Z(e,t){try{e.contentWindow.location.replace(t);}catch(n){e.src=t;}},ee=function ee(e){var t,n,i=e[c](r.srcsetAttr);(t=r.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&(n=e.parentNode,n.insertBefore(e.cloneNode(),e),n.removeChild(e));},te=T(function(e,t,n,i,a){var s,o,l,d,h,p;(h=S(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?y(e,r.autosizesClass):e.setAttribute("sizes",i)),o=e[c](r.srcsetAttr),s=e[c](r.srcAttr),a&&(l=e.parentNode,d=l&&m.test(l.nodeName||"")),p=t.firesLoad||"src"in e&&(o||s||d),h={target:e},p&&(C(e,q,!0),clearTimeout(f),f=u(q,2500),y(e,r.loadingClass),C(e,K,!0)),d&&g.call(l.getElementsByTagName("source"),ee),o?e.setAttribute("srcset",o):s&&!d&&(O.test(e.nodeName)?Z(e,s):e.src=s),(o||d)&&k(e,{src:s})),z(function(){e._lazyRace&&delete e._lazyRace,E(e,r.lazyClass),p&&!e.complete||(p?q(h):j--,Q(h));});}),ne=function ne(e){var t,n=B.test(e.nodeName),i=n&&(e[c](r.sizesAttr)||e[c]("sizes")),a="auto"==i;(!a&&d||!n||!e.src&&!e.srcset||e.complete||v(e,r.errorClass))&&(t=S(e,"lazyunveilread").detail,a&&L.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,te(e,t,a,i,n));},re=function re(){if(!d){if(a.now()-p<999)return void u(re,999);var e=M(function(){r.loadMode=3,V();});d=!0,r.loadMode=3,V(),l("scroll",function(){3==r.loadMode&&(r.loadMode=2),e();},!0);}};return{_:function _(){p=a.now(),e=n.getElementsByClassName(r.lazyClass),s=n.getElementsByClassName(r.lazyClass+" "+r.preloadClass),I=r.hFac,l("scroll",V,!0),l("resize",V,!0),t.MutationObserver?new MutationObserver(V).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[o]("DOMNodeInserted",V,!0),i[o]("DOMAttrModified",V,!0),setInterval(V,999)),l("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){n[o](e,V,!0);}),/d$|^c/.test(n.readyState)?re():(l("load",re),n[o]("DOMContentLoaded",V),u(re,2e4)),V(e.length>0);},checkElems:V,unveil:ne};}(),L=function(){var e,t=T(function(e,t,n,r){var i,a,s;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),m.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),a=0,s=i.length;s>a;a++){i[a].setAttribute("sizes",r);}n.detail.dataAttr||k(e,n.detail);}),i=function i(e,n,r){var i,a=e.parentNode;a&&(r=b(e,a,r),i=S(e,"lazybeforesizes",{width:r,dataAttr:!!n}),i.defaultPrevented||(r=i.detail.width,r&&r!==e._lazysizesWidth&&t(e,a,i,r)));},a=function a(){var t,n=e.length;if(n)for(t=0;n>t;t++){i(e[t]);}},s=M(a);return{_:function _(){e=n.getElementsByClassName(r.autosizesClass),l("resize",s);},checkElems:s,updateElem:i};}(),N=function N(){N.i||(N.i=!0,L._(),A._());};return function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};r=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n){e in r||(r[e]=n[e]);}t.lazySizesConfig=r,u(function(){r.init&&N();});}(),{cfg:r,autoSizer:L,loader:A,init:N,uP:k,aC:y,rC:E,hC:v,fire:S,gW:b,rAF:z};}}),function(){"use strict";/**
               * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
               *
               * @codingstandard ftlabs-jsv2
               * @copyright The Financial Times Limited [All Rights Reserved]
               * @license MIT License (see LICENSE.txt)
               */function e(t,r){function i(e,t){return function(){return e.apply(t,arguments);};}var a;if(r=r||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=r.touchBoundary||10,this.layer=t,this.tapDelay=r.tapDelay||200,this.tapTimeout=r.tapTimeout||700,!e.notNeeded(t)){for(var s=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,c=0,l=s.length;l>c;c++){o[s[c]]=i(o[s[c]],o);}n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,r):i.call(t,e,n,r);},t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e);}),r):i.call(t,e,n,r);}),"function"==typeof t.onclick&&(a=t.onclick,t.addEventListener("click",function(e){a(e);},!1),t.onclick=null);}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=r&&/OS [6-7]_\d/.test(navigator.userAgent),s=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(r&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0;}return /\bneedsclick\b/.test(e.className);},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1;}return!e.disabled&&!e.readOnly;default:return /\bneedsfocus\b/.test(e.className);}},e.prototype.sendClick=function(e,t){var n,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n);},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click";},e.prototype.focus=function(e){var t;r&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus();},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break;}n=n.parentElement;}while(n);}t&&(t.fastClickLastScrollTop=t.scrollTop);},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e;},e.prototype.onTouchStart=function(e){var t,n,a;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],r){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t);}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0;},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n;},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0;},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");},e.prototype.onTouchEnd=function(e){var t,s,o,c,l,u=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,s=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(l=e.changedTouches[0],u=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=u.tagName.toLowerCase(),"label"===o){if(t=this.findControl(u)){if(this.focus(u),n)return!1;u=t;}}else if(this.needsFocus(u))return e.timeStamp-s>100||r&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,e),r&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return r&&!i&&(c=u.fastClickScrollParent,c&&c.fastClickLastScrollTop!==c.scrollTop)?!0:(this.needsClick(u)||(e.preventDefault(),this.sendClick(u,e)),!1);},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null;},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0;},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t);},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1);},e.notNeeded=function(e){var t,r,i,a;if("undefined"==typeof window.ontouchstart)return!0;if(r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(r>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0;}}if(s&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0;}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction);},e.attach=function(t,n){return new e(t,n);},"function"==typeof define&&"object"==_typeof(define.amd)&&define.amd?define(function(){return e;}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e;}();"use strict";var font=new FontFaceObserver("Inconsolata",{weight:300});font.load().then(function(){//console.log("Font is available");
},function(){//console.log("Font is not available");
});"use strict";var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof3(obj);};!function(t){"use strict";var e=function e(_e,n,o){function i(t){return r.body?t():void setTimeout(function(){i(t);});}function a(){l.addEventListener&&l.removeEventListener("load",a),l.media=o||"all";}var r=t.document,l=r.createElement("link"),s;if(n)s=n;else{var c=(r.body||r.getElementsByTagName("head")[0]).childNodes;s=c[c.length-1];}var d=r.styleSheets;l.rel="stylesheet",l.href=_e,l.media="only x",i(function(){s.parentNode.insertBefore(l,n?s:s.nextSibling);});var f=function f(t){for(var e=l.href,n=d.length;n--;){if(d[n].href===e)return t();}setTimeout(function(){f(t);});};return l.addEventListener&&l.addEventListener("load",a),l.onloadcssdefined=f,f(a),l;};"undefined"!=typeof exports?exports.loadCSS=e:t.loadCSS=e;}("undefined"!=typeof global?global:undefined),function(t){if(t.loadCSS){var e=loadCSS.relpreload={};if(e.support=function(){try{return t.document.createElement("link").relList.supports("preload");}catch(e){return!1;}},e.poly=function(){for(var e=t.document.getElementsByTagName("link"),n=0;n<e.length;n++){var o=e[n];"preload"===o.rel&&"style"===o.getAttribute("as")&&(t.loadCSS(o.href,o),o.rel=null);}},!e.support()){e.poly();var n=t.setInterval(e.poly,300);t.addEventListener&&t.addEventListener("load",function(){t.clearInterval(n);}),t.attachEvent&&t.attachEvent("onload",function(){t.clearInterval(n);});}}}(undefined),function(){"use strict";function t(t){f.push(t),1==f.length&&d();}function e(){for(;f.length;){f[0](),f.shift();}}function n(t){this.a=u,this.b=void 0,this.f=[];var e=this;try{t(function(t){a(e,t);},function(t){r(e,t);});}catch(n){r(e,n);}}function o(t){return new n(function(e,n){n(t);});}function i(t){return new n(function(e){e(t);});}function a(t,e){if(t.a==u){if(e==t)throw new TypeError();var n=!1;try{var o=e&&e.then;if(null!=e&&"object"==(typeof e==="undefined"?"undefined":_typeof(e))&&"function"==typeof o)return void o.call(e,function(e){n||a(t,e),n=!0;},function(e){n||r(t,e),n=!0;});}catch(i){return void(n||r(t,i));}t.a=0,t.b=e,l(t);}}function r(t,e){if(t.a==u){if(e==t)throw new TypeError();t.a=1,t.b=e,l(t);}}function l(e){t(function(){if(e.a!=u)for(;e.f.length;){var t=e.f.shift(),n=t[0],o=t[1],i=t[2],t=t[3];try{0==e.a?i("function"==typeof n?n.call(void 0,e.b):e.b):1==e.a&&("function"==typeof o?i(o.call(void 0,e.b)):t(e.b));}catch(a){t(a);}}});}function s(t){return new n(function(e,n){function o(n){return function(o){r[n]=o,a+=1,a==t.length&&e(r);};}var a=0,r=[];0==t.length&&e(r);for(var l=0;l<t.length;l+=1){i(t[l]).c(o(l),n);}});}function c(t){return new n(function(e,n){for(var o=0;o<t.length;o+=1){i(t[o]).c(e,n);}});}var d,f=[];d=function d(){setTimeout(e);};var u=2;n.prototype.g=function(t){return this.c(void 0,t);},n.prototype.c=function(t,e){var o=this;return new n(function(n,i){o.f.push([t,e,n,i]),l(o);});},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=c,window.Promise.all=s,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e);}function e(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t();}):document.attachEvent("onreadystatechange",function n(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",n),t());});}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c);}function o(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+e+";";}function i(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e?(t.g=e,!0):!1;}function a(e,n){function o(){var t=a;i(t)&&null!==t.a.parentNode&&n(t.g);}var a=e;t(e.b,o),t(e.c,o),i(e);}function r(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal";}function l(){if(null===d){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif";}catch(e){}d=""!==t.style.font;}return d;}function s(t,e){return[t.style,t.weight,l()?t.stretch:"","100px",e].join(" ");}var c=null,d=null,f=null;r.prototype.load=function(t,i){var r=this,l=t||"BESbswy",d=i||3e3,u=new Date().getTime();return new Promise(function(t,i){if(null===f&&(f=!!window.FontFace),f){var h=new Promise(function(t,e){function n(){new Date().getTime()-u>=d?e():document.fonts.load(s(r,r.family),l).then(function(e){1<=e.length?t():setTimeout(n,25);},function(){e();});}n();}),p=new Promise(function(t,e){setTimeout(e,d);});Promise.race([p,h]).then(function(){t(r);},function(){i(r);});}else e(function(){function e(){var e;(e=-1!=v&&-1!=w||-1!=v&&-1!=y||-1!=w&&-1!=y)&&((e=v!=w&&v!=y&&w!=y)||(null===c&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=c&&(v==g&&w==g&&y==g||v==b&&w==b&&y==b||v==E&&w==E&&y==E)),e=!e),e&&(null!==x.parentNode&&x.parentNode.removeChild(x),clearTimeout(T),t(r));}function f(){if(new Date().getTime()-u>=d)null!==x.parentNode&&x.parentNode.removeChild(x),i(r);else{var t=document.hidden;!0!==t&&void 0!==t||(v=h.a.offsetWidth,w=p.a.offsetWidth,y=m.a.offsetWidth,e()),T=setTimeout(f,50);}}var h=new n(l),p=new n(l),m=new n(l),v=-1,w=-1,y=-1,g=-1,b=-1,E=-1,x=document.createElement("div"),T=0;x.dir="ltr",o(h,s(r,"sans-serif")),o(p,s(r,"serif")),o(m,s(r,"monospace")),x.appendChild(h.a),x.appendChild(p.a),x.appendChild(m.a),document.body.appendChild(x),g=h.a.offsetWidth,b=p.a.offsetWidth,E=m.a.offsetWidth,f(),a(h,function(t){v=t,e();}),o(h,s(r,'"'+r.family+'",sans-serif')),a(p,function(t){w=t,e();}),o(p,s(r,'"'+r.family+'",serif')),a(m,function(t){y=t,e();}),o(m,s(r,'"'+r.family+'",monospace'));});});},"undefined"!=typeof module?module.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load);}();var font=new FontFaceObserver("Inconsolata",{weight:300});font.load().then(function(){console.log("Font is available");},function(){console.log("Font is not available");});"use strict";!function(n,e){var t=function t(e,_t){return"undefined"==typeof _t?e:"undefined"!=typeof n.Mustache&&"undefined"!=typeof n.Mustache.render?Mustache.render(e,_t):"undefined"!=typeof n.Handlebars&&"undefined"!=typeof n.Handlebars.compile?Handlebars.compile(e)(_t):"undefined"!=typeof n._&&"undefined"!=typeof n._.template?output=_.template(e,_t):e;},a=function a(n,e){var t=new XMLHttpRequest();t.open("GET",n),t.send(),t.onload=function(){e(this.response);};},r=function r(t,a,_r){var o=e.createElement("script");o.src=t+(""==parser.search?"?":"&")+m.jsonp+"=JSONPCallback",n.JSONPCallback=function(e){a(JSON.stringify(e)),n.JSONPCallback=null;var t=o.parentNode;t&&t.removeChild(o),o=null;},e.getElementsByTagName("head")[0].appendChild(o);},o=function o(t,_o){var i=e.createElement("a");i.href=t,i.hostname==n.location.hostname?a(t,_o):r(t,_o,i);},i=function i(n,e,t){var a=f(JSON.parse(t),a);n.innerHTML=m.render(e,a),u(n,a);},d=function d(n,e){var t=this.context;""!=n.innerHTML&&(t=f(JSON.parse(n.innerHTML),t)),n.innerHTML=m.render(e,t),u(n,t);},l=function l(n,e){var t=f(JSON.parse(e),t);n.innerHTML=m.render(n.innerHTML,t),u(n,this.context);},c=function c(e,t){var a=t.getAttribute("data-"+m.html),r=t.getAttribute("data-"+m.json),c=t.getAttribute("data-fragment-media");if(!c||!n.matchMedia||n.matchMedia(c).matches){var u=function u(n){n(),h(-1);};h(1),e.html&&e.json?o(a,function(n){o(r,function(e){u(i.bind(this,t,n,e));});}):e.html?o(a,function(n){u(d.bind(this,t,n));}):e.json&&o(r,function(n){u(l.bind(this,t,n));});}},u=function u(n,t){"undefined"!=typeof n&&"querySelectorAll"in n||(n=e);var a={parent:n,context:t},r=n.querySelectorAll("[data-"+m.html+"][data-"+m.json+"]");Array.prototype.forEach.call(r,c.bind(a,{json:!0,html:!0}));var r=n.querySelectorAll("[data-"+m.html+"]:not([data-"+m.json+"])");Array.prototype.forEach.call(r,c.bind(a,{json:!1,html:!0}));var r=n.querySelectorAll("[data-"+m.json+"]:not([data-"+m.html+"])");Array.prototype.forEach.call(r,c.bind(a,{json:!0,html:!1}));},f=function f(n,e){"undefined"==typeof n&&(n={});for(var t in e){n.hasOwnProperty(t)||(n[t]=e[t]);}return n;},s=0,p=0,h=function h(n){s+=n,s>p&&(p=s),0==s&&m.ready(p);},m=f(n.fragment,{html:"fragment",json:"fragment-json",jsonp:"callback",manual:!1,render:t,evaluate:u,ready:function ready(){}});m.manual||e.addEventListener("DOMContentLoaded",function(){m.evaluate();}),n.fragment=m;}(window,window.document);"use strict";var _typeof=typeof Symbol==="function"&&_typeof3(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof3(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof3(obj);};/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild);}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e;}function i(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t);}function a(e){var t=v[e[p]];return t||(t={},g++,e[p]=g,v[g]=t),t;}function s(e,n,r){if(n||(n=t),y)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i);}function o(e,n){if(e||(e=t),y)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),s=0,o=r(),c=o.length;c>s;s++){i.createElement(o[s]);}return i;}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?s(n,e,t):t.createElem(n);},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")';})+");return n}")(E,t.frag);}function l(e){e||(e=t);var r=a(e);return!E.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),y||c(e,r),e;}var u="3.7.3",d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h,p="_html5shiv",g=0,v={},y;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,y=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement;}();}catch(n){h=!0,y=!0;}}();var E={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:d.shivCSS!==!1,supportsUnknownElements:y,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:s,createDocumentFragment:o,addElements:i};e.html5=E,l(t),"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&module.exports&&(module.exports=E);}("undefined"!=typeof window?window:undefined,document),!function(e,t,n){"use strict";function r(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"");}function i(){var t;j=!1,Y=e.devicePixelRatio,U={},q={},t=(Y||1)*A.xQuant,A.uT||(A.maxX=Math.max(1.3,A.maxX),t=Math.min(t,A.maxX),S.DPR=t),G.width=Math.max(e.innerWidth||0,x.clientWidth),G.height=Math.max(e.innerHeight||0,x.clientHeight),G.vw=G.width/100,G.vh=G.height/100,G.em=S.getEmValue(),G.rem=G.em,h=A.lazyFactor/2,h=h*t+h,g=.4+.1*t,d=.5+.2*t,f=.5+.25*t,p=t+1.3,(m=G.width>G.height)||(h*=.9),R&&(h*=.9),C=[G.width,G.height,t].join("-");}function a(e,t,n){var r=t*Math.pow(e-.4,1.9);return m||(r/=1.3),e+=r,e>n;}function s(e){var t,n=S.getSet(e),r=!1;"pending"!=n&&(r=C,n&&(t=S.setRes(n),r=S.applySetCandidate(t,e))),e[S.ns].evaled=r;}function o(e,t){return e.res-t.res;}function c(e,t,n){var r;return!n&&t&&(n=e[S.ns].sets,n=n&&n[n.length-1]),r=l(t,n),r&&(t=S.makeUrl(t),e[S.ns].curSrc=t,e[S.ns].curCan=r,r.res||ee(r,r.set.sizes)),r;}function l(e,t){var n,r,i;if(e&&t)for(i=S.parseSet(t),e=S.makeUrl(e),n=0;n<i.length;n++){if(e==S.makeUrl(i[n].url)){r=i[n];break;}}return r;}function u(e,t){var n,r,i,a,s=e.getElementsByTagName("source");for(n=0,r=s.length;r>n;n++){i=s[n],i[S.ns]=!0,a=i.getAttribute("srcset"),a&&t.push({srcset:a,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")});}}var d,f,m,h,p,g,v,y,E,C,S={},k=function k(){},w=t.createElement("img"),b=w.getAttribute,z=w.setAttribute,T=w.removeAttribute,x=t.documentElement,M={},A={xQuant:1,lazyFactor:.4,maxX:2},L="data-pfsrc",N=L+"set",F="webkitBackfaceVisibility"in x.style,P=navigator.userAgent,R=/rident/.test(P)||/ecko/.test(P)&&P.match(/rv\:(\d+)/)&&RegExp.$1>35,D="currentSrc",W=/\s+\+?\d+(e\d+)?w/,I=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,B=/^([\+eE\d\.]+)(w|x)$/,O=/\s*\d+h\s*/,_=e.respimgCFG,X=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),H="font-size:100%!important;",j=!0,U={},q={},Y=e.devicePixelRatio,G={px:1,"in":96},V=t.createElement("a"),Q=!1,J=function J(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n);},K=function K(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n];};},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function t(){for(var e=arguments,t=0,n=e[0];++t in e;){n=n.replace(e[t],e[++t]);}return n;},n=K(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"");});return function(t,r){var i;if(!(t in U))if(U[t]=!1,r&&(i=t.match(e)))U[t]=i[1]*G[i[2]];else try{U[t]=new Function("e",n(t))(G);}catch(a){}return U[t];};}(),ee=function ee(e,t){return e.w?(e.cWidth=S.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.x,e;},te=function te(n){var r,i,a,s=n||{};if(s.elements&&1==s.elements.nodeType&&("IMG"==s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),s.reparse&&(s.reevaluate=!0,e.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),r=s.elements||S.qsa(s.context||t,s.reevaluate||s.reselect?S.sel:S.selShort),a=r.length){for(S.setupRun(s),Q=!0,i=0;a>i;i++){S.fillImg(r[i],s);}S.teardownRun(s);}},ne=K(function(e){var t=[1,"x"],n=r(e||"");return n&&(n=n.replace(O,""),t=n.match(B)?[1*RegExp.$1,RegExp.$2]:!1),t;});if(D in w||(D="src"),M["image/jpeg"]=!0,M["image/gif"]=!0,M["image/png"]=!0,M["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),S.ns=("ri"+new Date().getTime()).substr(0,9),S.supSrcset="srcset"in w,S.supSizes="sizes"in w,S.supPicture=!!e.HTMLPictureElement,S.supSrcset&&S.supPicture&&!S.supSizes&&!function(e){w.srcset="data:,a",e.src="data:,a",S.supSrcset=w.complete===e.complete,S.supPicture=S.supSrcset&&S.supPicture;}(t.createElement("img")),S.selShort="picture>img,img[srcset]",S.sel=S.selShort,S.cfg=A,S.supSrcset&&(S.sel+=",img["+N+"]"),S.DPR=Y||1,S.u=G,S.types=M,y=S.supSrcset&&!S.supSizes,S.setSize=k,S.makeUrl=K(function(e){return V.href=e,V.href;}),S.qsa=function(e,t){return e.querySelectorAll(t);},S.matchesMedia=function(){return S.matchesMedia=e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(e){return!e||matchMedia(e).matches;}:S.mMQ,S.matchesMedia.apply(this,arguments);},S.mMQ=function(e){return e?Z(e):!0;},S.calcLength=function(e){var t=Z(e,!0)||!1;return 0>t&&(t=!1),t;},S.supportsType=function(e){return e?M[e]:!0;},S.parseSize=K(function(e){var t=(e||"").match(I);return{media:t&&t[1],length:t&&t[2]};}),S.parseSet=function(e){if(!e.cands){var t,n,r,i,a,s,o=e.srcset;for(e.cands=[];o;){o=o.replace(/^\s+/g,""),t=o.search(/\s/g),r=null,-1!=t?(n=o.slice(0,t),i=n.charAt(n.length-1),","!=i&&n||(n=n.replace(/,+$/,""),r=""),o=o.slice(t+1),null==r&&(a=o.indexOf(","),-1!=a?(r=o.slice(0,a),o=o.slice(a+1)):(r=o,o=""))):(n=o,o=""),n&&(r=ne(r))&&(s={url:n.replace(/^,+/,""),set:e},s[r[1]]=r[0],"x"==r[1]&&1==r[0]&&(e.has1x=!0),e.cands.push(s));}}return e.cands;},S.getEmValue=function(){var e;if(!v&&(e=t.body)){var n=t.createElement("div"),r=x.style.cssText,i=e.style.cssText;n.style.cssText=X,x.style.cssText=H,e.style.cssText=H,e.appendChild(n),v=n.offsetWidth,e.removeChild(n),v=parseFloat(v,10),x.style.cssText=r,e.style.cssText=i;}return v||16;},S.calcListLength=function(e){if(!(e in q)||A.uT){var t,n,i,a,s,o,c=r(e).split(/\s*,\s*/),l=!1;for(s=0,o=c.length;o>s&&(t=c[s],n=S.parseSize(t),i=n.length,a=n.media,!i||!S.matchesMedia(a)||(l=S.calcLength(i))===!1);s++){}q[e]=l?l:G.width;}return q[e];},S.setRes=function(e){var t;if(e){t=S.parseSet(e);for(var n=0,r=t.length;r>n;n++){ee(t[n],e.sizes);}}return t;},S.setRes.res=ee,S.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,l,u,m,v,y,E,k,w,b,z=t[S.ns],T=C,x=h,M=g;if(v=z.curSrc||t[D],y=z.curCan||c(t,v,e[0].set),r=S.DPR,b=y&&y.res,!m&&v&&(w=R&&!t.complete&&y&&b-.2>r,w||y&&!(p>b)||(y&&r>b&&b>d&&(f>b&&(x*=.8,M+=.04*r),y.res+=x*Math.pow(b-M,2)),E=!z.pic||y&&y.set==e[0].set,y&&E&&y.res>=r&&(m=y))),!m)for(b&&(y.res=y.res-(y.res-b)/2),e.sort(o),u=e.length,m=e[u-1],i=0;u>i;i++){if(n=e[i],n.res>=r){s=i-1,m=e[s]&&(l=n.res-r)&&(w||v!=S.makeUrl(n.url))&&a(e[s].res,l,r)?e[s]:n;break;}}return b&&(y.res=b),m&&(k=S.makeUrl(m.url),z.curSrc=k,z.curCan=m,k!=v&&S.setSrc(t,m),S.setSize(t)),T;}},S.setSrc=function(e,t){var n;e.src=t.url,F&&(n=e.style.zoom,e.style.zoom="0.999",e.style.zoom=n);},S.getSet=function(e){var t,n,r,i=!1,a=e[S.ns].sets;for(t=0;t<a.length&&!i;t++){if(n=a[t],n.srcset&&S.matchesMedia(n.media)&&(r=S.supportsType(n.type))){"pending"==r&&(n=r),i=n;break;}}return i;},S.parseSets=function(e,t,r){var i,a,s,o,c="PICTURE"==t.nodeName.toUpperCase(),d=e[S.ns];(d.src===n||r.src)&&(d.src=b.call(e,"src"),d.src?z.call(e,L,d.src):T.call(e,L)),(d.srcset===n||!S.supSrcset||e.srcset||r.srcset)&&(i=b.call(e,"srcset"),d.srcset=i,o=!0),d.sets=[],c&&(d.pic=!0,u(t,d.sets)),d.srcset?(a={srcset:d.srcset,sizes:b.call(e,"sizes")},d.sets.push(a),s=(y||d.src)&&W.test(d.srcset||""),s||!d.src||l(d.src,a)||a.has1x||(a.srcset+=", "+d.src,a.cands.push({url:d.src,x:1,set:a}))):d.src&&d.sets.push({srcset:d.src,sizes:null}),d.curCan=null,d.curSrc=n,d.supported=!(c||a&&!S.supSrcset||s),o&&S.supSrcset&&!d.supported&&(i?(z.call(e,N,i),e.srcset=""):T.call(e,N)),d.supported&&!d.srcset&&(!d.src&&e.src||e.src!=S.makeUrl(d.src))&&(null==d.src?e.removeAttribute("src"):e.src=d.src),d.parsed=!0;},S.fillImg=function(e,t){var n,r,i=t.reselect||t.reevaluate;if(e[S.ns]||(e[S.ns]={}),r=e[S.ns],i||r.evaled!=C){if(!r.parsed||t.reevaluate){if(n=e.parentNode,!n)return;S.parseSets(e,n,t);}r.supported?r.evaled=C:s(e);}},S.setupRun=function(t){(!Q||j||Y!=e.devicePixelRatio)&&(i(),t.elements||t.context||clearTimeout(E));},S.supPicture?(te=k,S.fillImg=k):(t.createElement("picture"),function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function i(){var e=t.readyState||"";o=setTimeout(i,"loading"==e?200:999),t.body&&(n=n||r.test(e),S.fillImgs(),n&&clearTimeout(o));},a=function a(){S.fillImgs();},s=function s(){clearTimeout(E),j=!0,E=setTimeout(a,99);},o=setTimeout(i,t.body?0:20);J(e,"resize",s),J(t,"readystatechange",i);}()),S.respimage=te,S.fillImgs=te,S.teardownRun=k,te._=S,e.respimage=e.picturefill||te,!e.picturefill)for(e.respimgCFG={ri:S,push:function push(e){var t=e.shift();"function"==typeof S[t]?S[t].apply(S,e):(A[t]=e[0],Q&&S.fillImgs({reselect:!0}));}};_&&_.length;){e.respimgCFG.push(_.shift());}e.picturefill||(e.picturefill=e.respimage,e.picturefillCFG||(e.picturefillCFG=e.respimgCFG));}(window,document),function(e,t){var n=t(e,e.document);e.lazySizes=n,"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&module.exports&&(module.exports=n);}(window,function e(t,n){"use strict";if(n.getElementsByClassName){var r,i=n.documentElement,a=t.Date,s=t.HTMLPictureElement,o="addEventListener",c="getAttribute",l=t[o],u=t.setTimeout,d=t.requestAnimationFrame||u,f=t.requestIdleCallback,m=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],p={},g=Array.prototype.forEach,v=function v(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[c]("class")||"")&&p[t];},y=function y(e,t){v(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t);},E=function E(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "));},C=function C(e,t,n){var r=n?o:"removeEventListener";n&&C(e,t),h.forEach(function(n){e[r](n,t);});},S=function S(e,t,r,i,a){var s=n.createEvent("CustomEvent");return s.initCustomEvent(t,!i,!a,r||{}),e.dispatchEvent(s),s;},k=function k(e,n){var i;!s&&(i=t.picturefill||r.pf)?i({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src);},w=function w(e,t){return(getComputedStyle(e,null)||{})[t];},b=function b(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;){n=t.offsetWidth,t=t.parentNode;}return n;},z=function(){var e,t,r=[],i=function i(){var n;for(e=!0,t=!1;r.length;){n=r.shift(),n[0].apply(n[1],n[2]);}e=!1;};return function(a){e?a.apply(this,arguments):(r.push([a,this,arguments]),t||(t=!0,(n.hidden?u:d)(i)));};}(),T=function T(e,t){return t?function(){z(e);}:function(){var t=this,n=arguments;z(function(){e.apply(t,n);});};},x=function x(e){var t,n=0,r=125,i=999,s=i,o=function o(){t=!1,n=a.now(),e();},c=f?function(){f(o,{timeout:s}),s!==i&&(s=i);}:T(function(){u(o);},!0);return function(e){var i;(e=e===!0)&&(s=66),t||(t=!0,i=r-(a.now()-n),0>i&&(i=0),e||9>i&&f?c():u(c,i));};},M=function M(e){var t,n,r=99,i=function i(){t=null,e();},s=function s(){var e=a.now()-n;r>e?u(s,r-e):(f||i)(i);};return function(){n=a.now(),t||(t=u(s,r));};},A=function(){var e,s,d,f,h,p,b,A,N,F,P,R,D,W,I,B=/^img$/i,O=/^iframe$/i,_="onscroll"in t&&!/glebot/.test(navigator.userAgent),X=0,H=0,j=0,U=0,q=function q(e){j--,e&&e.target&&C(e.target,q),(!e||0>j||!e.target)&&(j=0);},Y=function Y(e,t){var r,a=e,s="hidden"==w(n.body,"visibility")||"hidden"!=w(e,"visibility");for(N-=t,R+=t,F-=t,P+=t;s&&(a=a.offsetParent)&&a!=n.body&&a!=i;){s=(w(a,"opacity")||1)>0,s&&"visible"!=w(a,"overflow")&&(r=a.getBoundingClientRect(),s=P>r.left&&F<r.right&&R>r.top-1&&N<r.bottom+1);}return s;},G=function G(){var t,n,a,o,l,u,f,m,p;if((h=r.loadMode)&&8>j&&(t=e.length)){n=0,U++,null==W&&("expand"in r||(r.expand=i.clientHeight>500?500:400),D=r.expand,W=D*r.expFactor),W>H&&1>j&&U>3&&h>2?(H=W,U=0):H=h>1&&U>2&&6>j?D:X;for(;t>n;n++){if(e[n]&&!e[n]._lazyRace)if(_){if((m=e[n][c]("data-expand"))&&(u=1*m)||(u=H),p!==u&&(b=innerWidth+u*I,A=innerHeight+u,f=-1*u,p=u),a=e[n].getBoundingClientRect(),(R=a.bottom)>=f&&(N=a.top)<=A&&(P=a.right)>=f*I&&(F=a.left)<=b&&(R||P||F||N)&&(d&&3>j&&!m&&(3>h||4>U)||Y(e[n],u))){if(ne(e[n]),l=!0,j>9)break;}else!l&&d&&!o&&4>j&&4>U&&h>2&&(s[0]||r.preloadAfterLoad)&&(s[0]||!m&&(R||P||F||N||"auto"!=e[n][c](r.sizesAttr)))&&(o=s[0]||e[n]);}else ne(e[n]);}o&&!l&&ne(o);}},V=x(G),Q=function Q(e){y(e.target,r.loadedClass),E(e.target,r.loadingClass),C(e.target,K);},J=T(Q),K=function K(e){J({target:e.target});},Z=function Z(e,t){try{e.contentWindow.location.replace(t);}catch(n){e.src=t;}},ee=function ee(e){var t,n,i=e[c](r.srcsetAttr);(t=r.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&(n=e.parentNode,n.insertBefore(e.cloneNode(),e),n.removeChild(e));},te=T(function(e,t,n,i,a){var s,o,l,d,h,p;(h=S(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?y(e,r.autosizesClass):e.setAttribute("sizes",i)),o=e[c](r.srcsetAttr),s=e[c](r.srcAttr),a&&(l=e.parentNode,d=l&&m.test(l.nodeName||"")),p=t.firesLoad||"src"in e&&(o||s||d),h={target:e},p&&(C(e,q,!0),clearTimeout(f),f=u(q,2500),y(e,r.loadingClass),C(e,K,!0)),d&&g.call(l.getElementsByTagName("source"),ee),o?e.setAttribute("srcset",o):s&&!d&&(O.test(e.nodeName)?Z(e,s):e.src=s),(o||d)&&k(e,{src:s})),z(function(){e._lazyRace&&delete e._lazyRace,E(e,r.lazyClass),p&&!e.complete||(p?q(h):j--,Q(h));});}),ne=function ne(e){var t,n=B.test(e.nodeName),i=n&&(e[c](r.sizesAttr)||e[c]("sizes")),a="auto"==i;(!a&&d||!n||!e.src&&!e.srcset||e.complete||v(e,r.errorClass))&&(t=S(e,"lazyunveilread").detail,a&&L.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,te(e,t,a,i,n));},re=function re(){if(!d){if(a.now()-p<999)return void u(re,999);var e=M(function(){r.loadMode=3,V();});d=!0,r.loadMode=3,V(),l("scroll",function(){3==r.loadMode&&(r.loadMode=2),e();},!0);}};return{_:function _(){p=a.now(),e=n.getElementsByClassName(r.lazyClass),s=n.getElementsByClassName(r.lazyClass+" "+r.preloadClass),I=r.hFac,l("scroll",V,!0),l("resize",V,!0),t.MutationObserver?new MutationObserver(V).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[o]("DOMNodeInserted",V,!0),i[o]("DOMAttrModified",V,!0),setInterval(V,999)),l("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){n[o](e,V,!0);}),/d$|^c/.test(n.readyState)?re():(l("load",re),n[o]("DOMContentLoaded",V),u(re,2e4)),V(e.length>0);},checkElems:V,unveil:ne};}(),L=function(){var e,t=T(function(e,t,n,r){var i,a,s;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),m.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),a=0,s=i.length;s>a;a++){i[a].setAttribute("sizes",r);}n.detail.dataAttr||k(e,n.detail);}),i=function i(e,n,r){var i,a=e.parentNode;a&&(r=b(e,a,r),i=S(e,"lazybeforesizes",{width:r,dataAttr:!!n}),i.defaultPrevented||(r=i.detail.width,r&&r!==e._lazysizesWidth&&t(e,a,i,r)));},a=function a(){var t,n=e.length;if(n)for(t=0;n>t;t++){i(e[t]);}},s=M(a);return{_:function _(){e=n.getElementsByClassName(r.autosizesClass),l("resize",s);},checkElems:s,updateElem:i};}(),N=function N(){N.i||(N.i=!0,L._(),A._());};return function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};r=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n){e in r||(r[e]=n[e]);}t.lazySizesConfig=r,u(function(){r.init&&N();});}(),{cfg:r,autoSizer:L,loader:A,init:N,uP:k,aC:y,rC:E,hC:v,fire:S,gW:b,rAF:z};}}),function(){"use strict";/**
               * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
               *
               * @codingstandard ftlabs-jsv2
               * @copyright The Financial Times Limited [All Rights Reserved]
               * @license MIT License (see LICENSE.txt)
               */function e(t,r){function i(e,t){return function(){return e.apply(t,arguments);};}var a;if(r=r||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=r.touchBoundary||10,this.layer=t,this.tapDelay=r.tapDelay||200,this.tapTimeout=r.tapTimeout||700,!e.notNeeded(t)){for(var s=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,c=0,l=s.length;l>c;c++){o[s[c]]=i(o[s[c]],o);}n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,r):i.call(t,e,n,r);},t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e);}),r):i.call(t,e,n,r);}),"function"==typeof t.onclick&&(a=t.onclick,t.addEventListener("click",function(e){a(e);},!1),t.onclick=null);}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=r&&/OS [6-7]_\d/.test(navigator.userAgent),s=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(r&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0;}return /\bneedsclick\b/.test(e.className);},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1;}return!e.disabled&&!e.readOnly;default:return /\bneedsfocus\b/.test(e.className);}},e.prototype.sendClick=function(e,t){var n,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n);},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click";},e.prototype.focus=function(e){var t;r&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus();},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break;}n=n.parentElement;}while(n);}t&&(t.fastClickLastScrollTop=t.scrollTop);},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e;},e.prototype.onTouchStart=function(e){var t,n,a;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],r){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t);}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0;},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n;},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0;},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");},e.prototype.onTouchEnd=function(e){var t,s,o,c,l,u=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,s=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(l=e.changedTouches[0],u=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=u.tagName.toLowerCase(),"label"===o){if(t=this.findControl(u)){if(this.focus(u),n)return!1;u=t;}}else if(this.needsFocus(u))return e.timeStamp-s>100||r&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,e),r&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return r&&!i&&(c=u.fastClickScrollParent,c&&c.fastClickLastScrollTop!==c.scrollTop)?!0:(this.needsClick(u)||(e.preventDefault(),this.sendClick(u,e)),!1);},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null;},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0;},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t);},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1);},e.notNeeded=function(e){var t,r,i,a;if("undefined"==typeof window.ontouchstart)return!0;if(r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(r>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0;}}if(s&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0;}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction);},e.attach=function(t,n){return new e(t,n);},"function"==typeof define&&"object"==_typeof(define.amd)&&define.amd?define(function(){return e;}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e;}();"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Polygon=function(){function Polygon(height,width){_classCallCheck(this,Polygon);this.name="Polygon";this.height=height;this.width=width;}_createClass(Polygon,[{key:"sayName",value:function sayName(){ChromeSamples.log("Hi, I am a ",this.name+".");}},{key:"sayHistory",value:function sayHistory(){ChromeSamples.log("'Polygon' is derived from the Greek polus (many) "+"and gonia (angle).");}}]);return Polygon;}();var p=new Polygon(300,400);p.sayName();ChromeSamples.log("The width of this polygon is "+p.width);"use strict";var _typeof=typeof Symbol==="function"&&_typeof4(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof4(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof4(obj);};!function(t){"use strict";var e=function e(_e,n,o){function i(t){return r.body?t():void setTimeout(function(){i(t);});}function a(){l.addEventListener&&l.removeEventListener("load",a),l.media=o||"all";}var r=t.document,l=r.createElement("link"),s;if(n)s=n;else{var c=(r.body||r.getElementsByTagName("head")[0]).childNodes;s=c[c.length-1];}var d=r.styleSheets;l.rel="stylesheet",l.href=_e,l.media="only x",i(function(){s.parentNode.insertBefore(l,n?s:s.nextSibling);});var f=function f(t){for(var e=l.href,n=d.length;n--;){if(d[n].href===e)return t();}setTimeout(function(){f(t);});};return l.addEventListener&&l.addEventListener("load",a),l.onloadcssdefined=f,f(a),l;};"undefined"!=typeof exports?exports.loadCSS=e:t.loadCSS=e;}("undefined"!=typeof global?global:undefined),function(t){if(t.loadCSS){var e=loadCSS.relpreload={};if(e.support=function(){try{return t.document.createElement("link").relList.supports("preload");}catch(e){return!1;}},e.poly=function(){for(var e=t.document.getElementsByTagName("link"),n=0;n<e.length;n++){var o=e[n];"preload"===o.rel&&"style"===o.getAttribute("as")&&(t.loadCSS(o.href,o),o.rel=null);}},!e.support()){e.poly();var n=t.setInterval(e.poly,300);t.addEventListener&&t.addEventListener("load",function(){t.clearInterval(n);}),t.attachEvent&&t.attachEvent("onload",function(){t.clearInterval(n);});}}}(undefined),function(){"use strict";function t(t){f.push(t),1==f.length&&d();}function e(){for(;f.length;){f[0](),f.shift();}}function n(t){this.a=u,this.b=void 0,this.f=[];var e=this;try{t(function(t){a(e,t);},function(t){r(e,t);});}catch(n){r(e,n);}}function o(t){return new n(function(e,n){n(t);});}function i(t){return new n(function(e){e(t);});}function a(t,e){if(t.a==u){if(e==t)throw new TypeError();var n=!1;try{var o=e&&e.then;if(null!=e&&"object"==(typeof e==="undefined"?"undefined":_typeof(e))&&"function"==typeof o)return void o.call(e,function(e){n||a(t,e),n=!0;},function(e){n||r(t,e),n=!0;});}catch(i){return void(n||r(t,i));}t.a=0,t.b=e,l(t);}}function r(t,e){if(t.a==u){if(e==t)throw new TypeError();t.a=1,t.b=e,l(t);}}function l(e){t(function(){if(e.a!=u)for(;e.f.length;){var t=e.f.shift(),n=t[0],o=t[1],i=t[2],t=t[3];try{0==e.a?i("function"==typeof n?n.call(void 0,e.b):e.b):1==e.a&&("function"==typeof o?i(o.call(void 0,e.b)):t(e.b));}catch(a){t(a);}}});}function s(t){return new n(function(e,n){function o(n){return function(o){r[n]=o,a+=1,a==t.length&&e(r);};}var a=0,r=[];0==t.length&&e(r);for(var l=0;l<t.length;l+=1){i(t[l]).c(o(l),n);}});}function c(t){return new n(function(e,n){for(var o=0;o<t.length;o+=1){i(t[o]).c(e,n);}});}var d,f=[];d=function d(){setTimeout(e);};var u=2;n.prototype.g=function(t){return this.c(void 0,t);},n.prototype.c=function(t,e){var o=this;return new n(function(n,i){o.f.push([t,e,n,i]),l(o);});},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=c,window.Promise.all=s,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}(),function(){function t(t,e){document.addEventListener?t.addEventListener("scroll",e,!1):t.attachEvent("scroll",e);}function e(t){document.body?t():document.addEventListener?document.addEventListener("DOMContentLoaded",function e(){document.removeEventListener("DOMContentLoaded",e),t();}):document.attachEvent("onreadystatechange",function n(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",n),t());});}function n(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c);}function o(t,e){t.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+e+";";}function i(t){var e=t.a.offsetWidth,n=e+100;return t.f.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.g!==e?(t.g=e,!0):!1;}function a(e,n){function o(){var t=a;i(t)&&null!==t.a.parentNode&&n(t.g);}var a=e;t(e.b,o),t(e.c,o),i(e);}function r(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal";}function l(){if(null===d){var t=document.createElement("div");try{t.style.font="condensed 100px sans-serif";}catch(e){}d=""!==t.style.font;}return d;}function s(t,e){return[t.style,t.weight,l()?t.stretch:"","100px",e].join(" ");}var c=null,d=null,f=null;r.prototype.load=function(t,i){var r=this,l=t||"BESbswy",d=i||3e3,u=new Date().getTime();return new Promise(function(t,i){if(null===f&&(f=!!window.FontFace),f){var h=new Promise(function(t,e){function n(){new Date().getTime()-u>=d?e():document.fonts.load(s(r,r.family),l).then(function(e){1<=e.length?t():setTimeout(n,25);},function(){e();});}n();}),p=new Promise(function(t,e){setTimeout(e,d);});Promise.race([p,h]).then(function(){t(r);},function(){i(r);});}else e(function(){function e(){var e;(e=-1!=v&&-1!=w||-1!=v&&-1!=y||-1!=w&&-1!=y)&&((e=v!=w&&v!=y&&w!=y)||(null===c&&(e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),c=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))),e=c&&(v==g&&w==g&&y==g||v==b&&w==b&&y==b||v==E&&w==E&&y==E)),e=!e),e&&(null!==x.parentNode&&x.parentNode.removeChild(x),clearTimeout(T),t(r));}function f(){if(new Date().getTime()-u>=d)null!==x.parentNode&&x.parentNode.removeChild(x),i(r);else{var t=document.hidden;!0!==t&&void 0!==t||(v=h.a.offsetWidth,w=p.a.offsetWidth,y=m.a.offsetWidth,e()),T=setTimeout(f,50);}}var h=new n(l),p=new n(l),m=new n(l),v=-1,w=-1,y=-1,g=-1,b=-1,E=-1,x=document.createElement("div"),T=0;x.dir="ltr",o(h,s(r,"sans-serif")),o(p,s(r,"serif")),o(m,s(r,"monospace")),x.appendChild(h.a),x.appendChild(p.a),x.appendChild(m.a),document.body.appendChild(x),g=h.a.offsetWidth,b=p.a.offsetWidth,E=m.a.offsetWidth,f(),a(h,function(t){v=t,e();}),o(h,s(r,'"'+r.family+'",sans-serif')),a(p,function(t){w=t,e();}),o(p,s(r,'"'+r.family+'",serif')),a(m,function(t){y=t,e();}),o(m,s(r,'"'+r.family+'",monospace'));});});},"undefined"!=typeof module?module.exports=r:(window.FontFaceObserver=r,window.FontFaceObserver.prototype.load=r.prototype.load);}();var font=new FontFaceObserver("Inconsolata",{weight:300});font.load().then(function(){console.log("Font is available");},function(){console.log("Font is not available");});"use strict";!function(n,e){var t=function t(e,_t){return"undefined"==typeof _t?e:"undefined"!=typeof n.Mustache&&"undefined"!=typeof n.Mustache.render?Mustache.render(e,_t):"undefined"!=typeof n.Handlebars&&"undefined"!=typeof n.Handlebars.compile?Handlebars.compile(e)(_t):"undefined"!=typeof n._&&"undefined"!=typeof n._.template?output=_.template(e,_t):e;},a=function a(n,e){var t=new XMLHttpRequest();t.open("GET",n),t.send(),t.onload=function(){e(this.response);};},r=function r(t,a,_r){var o=e.createElement("script");o.src=t+(""==parser.search?"?":"&")+m.jsonp+"=JSONPCallback",n.JSONPCallback=function(e){a(JSON.stringify(e)),n.JSONPCallback=null;var t=o.parentNode;t&&t.removeChild(o),o=null;},e.getElementsByTagName("head")[0].appendChild(o);},o=function o(t,_o){var i=e.createElement("a");i.href=t,i.hostname==n.location.hostname?a(t,_o):r(t,_o,i);},i=function i(n,e,t){var a=f(JSON.parse(t),a);n.innerHTML=m.render(e,a),u(n,a);},d=function d(n,e){var t=this.context;""!=n.innerHTML&&(t=f(JSON.parse(n.innerHTML),t)),n.innerHTML=m.render(e,t),u(n,t);},l=function l(n,e){var t=f(JSON.parse(e),t);n.innerHTML=m.render(n.innerHTML,t),u(n,this.context);},c=function c(e,t){var a=t.getAttribute("data-"+m.html),r=t.getAttribute("data-"+m.json),c=t.getAttribute("data-fragment-media");if(!c||!n.matchMedia||n.matchMedia(c).matches){var u=function u(n){n(),h(-1);};h(1),e.html&&e.json?o(a,function(n){o(r,function(e){u(i.bind(this,t,n,e));});}):e.html?o(a,function(n){u(d.bind(this,t,n));}):e.json&&o(r,function(n){u(l.bind(this,t,n));});}},u=function u(n,t){"undefined"!=typeof n&&"querySelectorAll"in n||(n=e);var a={parent:n,context:t},r=n.querySelectorAll("[data-"+m.html+"][data-"+m.json+"]");Array.prototype.forEach.call(r,c.bind(a,{json:!0,html:!0}));var r=n.querySelectorAll("[data-"+m.html+"]:not([data-"+m.json+"])");Array.prototype.forEach.call(r,c.bind(a,{json:!1,html:!0}));var r=n.querySelectorAll("[data-"+m.json+"]:not([data-"+m.html+"])");Array.prototype.forEach.call(r,c.bind(a,{json:!0,html:!1}));},f=function f(n,e){"undefined"==typeof n&&(n={});for(var t in e){n.hasOwnProperty(t)||(n[t]=e[t]);}return n;},s=0,p=0,h=function h(n){s+=n,s>p&&(p=s),0==s&&m.ready(p);},m=f(n.fragment,{html:"fragment",json:"fragment-json",jsonp:"callback",manual:!1,render:t,evaluate:u,ready:function ready(){}});m.manual||e.addEventListener("DOMContentLoaded",function(){m.evaluate();}),n.fragment=m;}(window,window.document);"use strict";var _typeof=typeof Symbol==="function"&&_typeof4(Symbol.iterator)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof4(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==="undefined"?"undefined":_typeof4(obj);};/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild);}function r(){var e=E.elements;return"string"==typeof e?e.split(" "):e;}function i(e,t){var n=E.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),E.elements=n+" "+e,l(t);}function a(e){var t=v[e[p]];return t||(t={},g++,e[p]=g,v[g]=t),t;}function s(e,n,r){if(n||(n=t),y)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i);}function o(e,n){if(e||(e=t),y)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),s=0,o=r(),c=o.length;c>s;s++){i.createElement(o[s]);}return i;}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return E.shivMethods?s(n,e,t):t.createElem(n);},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")';})+");return n}")(E,t.frag);}function l(e){e||(e=t);var r=a(e);return!E.shivCSS||h||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),y||c(e,r),e;}var u="3.7.3",d=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h,p="_html5shiv",g=0,v={},y;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",h="hidden"in e,y=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement;}();}catch(n){h=!0,y=!0;}}();var E={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:d.shivCSS!==!1,supportsUnknownElements:y,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:s,createDocumentFragment:o,addElements:i};e.html5=E,l(t),"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&module.exports&&(module.exports=E);}("undefined"!=typeof window?window:undefined,document),!function(e,t,n){"use strict";function r(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"");}function i(){var t;j=!1,Y=e.devicePixelRatio,U={},q={},t=(Y||1)*A.xQuant,A.uT||(A.maxX=Math.max(1.3,A.maxX),t=Math.min(t,A.maxX),S.DPR=t),G.width=Math.max(e.innerWidth||0,x.clientWidth),G.height=Math.max(e.innerHeight||0,x.clientHeight),G.vw=G.width/100,G.vh=G.height/100,G.em=S.getEmValue(),G.rem=G.em,h=A.lazyFactor/2,h=h*t+h,g=.4+.1*t,d=.5+.2*t,f=.5+.25*t,p=t+1.3,(m=G.width>G.height)||(h*=.9),R&&(h*=.9),C=[G.width,G.height,t].join("-");}function a(e,t,n){var r=t*Math.pow(e-.4,1.9);return m||(r/=1.3),e+=r,e>n;}function s(e){var t,n=S.getSet(e),r=!1;"pending"!=n&&(r=C,n&&(t=S.setRes(n),r=S.applySetCandidate(t,e))),e[S.ns].evaled=r;}function o(e,t){return e.res-t.res;}function c(e,t,n){var r;return!n&&t&&(n=e[S.ns].sets,n=n&&n[n.length-1]),r=l(t,n),r&&(t=S.makeUrl(t),e[S.ns].curSrc=t,e[S.ns].curCan=r,r.res||ee(r,r.set.sizes)),r;}function l(e,t){var n,r,i;if(e&&t)for(i=S.parseSet(t),e=S.makeUrl(e),n=0;n<i.length;n++){if(e==S.makeUrl(i[n].url)){r=i[n];break;}}return r;}function u(e,t){var n,r,i,a,s=e.getElementsByTagName("source");for(n=0,r=s.length;r>n;n++){i=s[n],i[S.ns]=!0,a=i.getAttribute("srcset"),a&&t.push({srcset:a,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")});}}var d,f,m,h,p,g,v,y,E,C,S={},k=function k(){},w=t.createElement("img"),b=w.getAttribute,z=w.setAttribute,T=w.removeAttribute,x=t.documentElement,M={},A={xQuant:1,lazyFactor:.4,maxX:2},L="data-pfsrc",N=L+"set",F="webkitBackfaceVisibility"in x.style,P=navigator.userAgent,R=/rident/.test(P)||/ecko/.test(P)&&P.match(/rv\:(\d+)/)&&RegExp.$1>35,D="currentSrc",W=/\s+\+?\d+(e\d+)?w/,I=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,B=/^([\+eE\d\.]+)(w|x)$/,O=/\s*\d+h\s*/,_=e.respimgCFG,X=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),H="font-size:100%!important;",j=!0,U={},q={},Y=e.devicePixelRatio,G={px:1,"in":96},V=t.createElement("a"),Q=!1,J=function J(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n);},K=function K(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n];};},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function t(){for(var e=arguments,t=0,n=e[0];++t in e;){n=n.replace(e[t],e[++t]);}return n;},n=K(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"");});return function(t,r){var i;if(!(t in U))if(U[t]=!1,r&&(i=t.match(e)))U[t]=i[1]*G[i[2]];else try{U[t]=new Function("e",n(t))(G);}catch(a){}return U[t];};}(),ee=function ee(e,t){return e.w?(e.cWidth=S.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.x,e;},te=function te(n){var r,i,a,s=n||{};if(s.elements&&1==s.elements.nodeType&&("IMG"==s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),s.reparse&&(s.reevaluate=!0,e.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),r=s.elements||S.qsa(s.context||t,s.reevaluate||s.reselect?S.sel:S.selShort),a=r.length){for(S.setupRun(s),Q=!0,i=0;a>i;i++){S.fillImg(r[i],s);}S.teardownRun(s);}},ne=K(function(e){var t=[1,"x"],n=r(e||"");return n&&(n=n.replace(O,""),t=n.match(B)?[1*RegExp.$1,RegExp.$2]:!1),t;});if(D in w||(D="src"),M["image/jpeg"]=!0,M["image/gif"]=!0,M["image/png"]=!0,M["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),S.ns=("ri"+new Date().getTime()).substr(0,9),S.supSrcset="srcset"in w,S.supSizes="sizes"in w,S.supPicture=!!e.HTMLPictureElement,S.supSrcset&&S.supPicture&&!S.supSizes&&!function(e){w.srcset="data:,a",e.src="data:,a",S.supSrcset=w.complete===e.complete,S.supPicture=S.supSrcset&&S.supPicture;}(t.createElement("img")),S.selShort="picture>img,img[srcset]",S.sel=S.selShort,S.cfg=A,S.supSrcset&&(S.sel+=",img["+N+"]"),S.DPR=Y||1,S.u=G,S.types=M,y=S.supSrcset&&!S.supSizes,S.setSize=k,S.makeUrl=K(function(e){return V.href=e,V.href;}),S.qsa=function(e,t){return e.querySelectorAll(t);},S.matchesMedia=function(){return S.matchesMedia=e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(e){return!e||matchMedia(e).matches;}:S.mMQ,S.matchesMedia.apply(this,arguments);},S.mMQ=function(e){return e?Z(e):!0;},S.calcLength=function(e){var t=Z(e,!0)||!1;return 0>t&&(t=!1),t;},S.supportsType=function(e){return e?M[e]:!0;},S.parseSize=K(function(e){var t=(e||"").match(I);return{media:t&&t[1],length:t&&t[2]};}),S.parseSet=function(e){if(!e.cands){var t,n,r,i,a,s,o=e.srcset;for(e.cands=[];o;){o=o.replace(/^\s+/g,""),t=o.search(/\s/g),r=null,-1!=t?(n=o.slice(0,t),i=n.charAt(n.length-1),","!=i&&n||(n=n.replace(/,+$/,""),r=""),o=o.slice(t+1),null==r&&(a=o.indexOf(","),-1!=a?(r=o.slice(0,a),o=o.slice(a+1)):(r=o,o=""))):(n=o,o=""),n&&(r=ne(r))&&(s={url:n.replace(/^,+/,""),set:e},s[r[1]]=r[0],"x"==r[1]&&1==r[0]&&(e.has1x=!0),e.cands.push(s));}}return e.cands;},S.getEmValue=function(){var e;if(!v&&(e=t.body)){var n=t.createElement("div"),r=x.style.cssText,i=e.style.cssText;n.style.cssText=X,x.style.cssText=H,e.style.cssText=H,e.appendChild(n),v=n.offsetWidth,e.removeChild(n),v=parseFloat(v,10),x.style.cssText=r,e.style.cssText=i;}return v||16;},S.calcListLength=function(e){if(!(e in q)||A.uT){var t,n,i,a,s,o,c=r(e).split(/\s*,\s*/),l=!1;for(s=0,o=c.length;o>s&&(t=c[s],n=S.parseSize(t),i=n.length,a=n.media,!i||!S.matchesMedia(a)||(l=S.calcLength(i))===!1);s++){}q[e]=l?l:G.width;}return q[e];},S.setRes=function(e){var t;if(e){t=S.parseSet(e);for(var n=0,r=t.length;r>n;n++){ee(t[n],e.sizes);}}return t;},S.setRes.res=ee,S.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,l,u,m,v,y,E,k,w,b,z=t[S.ns],T=C,x=h,M=g;if(v=z.curSrc||t[D],y=z.curCan||c(t,v,e[0].set),r=S.DPR,b=y&&y.res,!m&&v&&(w=R&&!t.complete&&y&&b-.2>r,w||y&&!(p>b)||(y&&r>b&&b>d&&(f>b&&(x*=.8,M+=.04*r),y.res+=x*Math.pow(b-M,2)),E=!z.pic||y&&y.set==e[0].set,y&&E&&y.res>=r&&(m=y))),!m)for(b&&(y.res=y.res-(y.res-b)/2),e.sort(o),u=e.length,m=e[u-1],i=0;u>i;i++){if(n=e[i],n.res>=r){s=i-1,m=e[s]&&(l=n.res-r)&&(w||v!=S.makeUrl(n.url))&&a(e[s].res,l,r)?e[s]:n;break;}}return b&&(y.res=b),m&&(k=S.makeUrl(m.url),z.curSrc=k,z.curCan=m,k!=v&&S.setSrc(t,m),S.setSize(t)),T;}},S.setSrc=function(e,t){var n;e.src=t.url,F&&(n=e.style.zoom,e.style.zoom="0.999",e.style.zoom=n);},S.getSet=function(e){var t,n,r,i=!1,a=e[S.ns].sets;for(t=0;t<a.length&&!i;t++){if(n=a[t],n.srcset&&S.matchesMedia(n.media)&&(r=S.supportsType(n.type))){"pending"==r&&(n=r),i=n;break;}}return i;},S.parseSets=function(e,t,r){var i,a,s,o,c="PICTURE"==t.nodeName.toUpperCase(),d=e[S.ns];(d.src===n||r.src)&&(d.src=b.call(e,"src"),d.src?z.call(e,L,d.src):T.call(e,L)),(d.srcset===n||!S.supSrcset||e.srcset||r.srcset)&&(i=b.call(e,"srcset"),d.srcset=i,o=!0),d.sets=[],c&&(d.pic=!0,u(t,d.sets)),d.srcset?(a={srcset:d.srcset,sizes:b.call(e,"sizes")},d.sets.push(a),s=(y||d.src)&&W.test(d.srcset||""),s||!d.src||l(d.src,a)||a.has1x||(a.srcset+=", "+d.src,a.cands.push({url:d.src,x:1,set:a}))):d.src&&d.sets.push({srcset:d.src,sizes:null}),d.curCan=null,d.curSrc=n,d.supported=!(c||a&&!S.supSrcset||s),o&&S.supSrcset&&!d.supported&&(i?(z.call(e,N,i),e.srcset=""):T.call(e,N)),d.supported&&!d.srcset&&(!d.src&&e.src||e.src!=S.makeUrl(d.src))&&(null==d.src?e.removeAttribute("src"):e.src=d.src),d.parsed=!0;},S.fillImg=function(e,t){var n,r,i=t.reselect||t.reevaluate;if(e[S.ns]||(e[S.ns]={}),r=e[S.ns],i||r.evaled!=C){if(!r.parsed||t.reevaluate){if(n=e.parentNode,!n)return;S.parseSets(e,n,t);}r.supported?r.evaled=C:s(e);}},S.setupRun=function(t){(!Q||j||Y!=e.devicePixelRatio)&&(i(),t.elements||t.context||clearTimeout(E));},S.supPicture?(te=k,S.fillImg=k):(t.createElement("picture"),function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function i(){var e=t.readyState||"";o=setTimeout(i,"loading"==e?200:999),t.body&&(n=n||r.test(e),S.fillImgs(),n&&clearTimeout(o));},a=function a(){S.fillImgs();},s=function s(){clearTimeout(E),j=!0,E=setTimeout(a,99);},o=setTimeout(i,t.body?0:20);J(e,"resize",s),J(t,"readystatechange",i);}()),S.respimage=te,S.fillImgs=te,S.teardownRun=k,te._=S,e.respimage=e.picturefill||te,!e.picturefill)for(e.respimgCFG={ri:S,push:function push(e){var t=e.shift();"function"==typeof S[t]?S[t].apply(S,e):(A[t]=e[0],Q&&S.fillImgs({reselect:!0}));}};_&&_.length;){e.respimgCFG.push(_.shift());}e.picturefill||(e.picturefill=e.respimage,e.picturefillCFG||(e.picturefillCFG=e.respimgCFG));}(window,document),function(e,t){var n=t(e,e.document);e.lazySizes=n,"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&module.exports&&(module.exports=n);}(window,function e(t,n){"use strict";if(n.getElementsByClassName){var r,i=n.documentElement,a=t.Date,s=t.HTMLPictureElement,o="addEventListener",c="getAttribute",l=t[o],u=t.setTimeout,d=t.requestAnimationFrame||u,f=t.requestIdleCallback,m=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],p={},g=Array.prototype.forEach,v=function v(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[c]("class")||"")&&p[t];},y=function y(e,t){v(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t);},E=function E(e,t){var n;(n=v(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "));},C=function C(e,t,n){var r=n?o:"removeEventListener";n&&C(e,t),h.forEach(function(n){e[r](n,t);});},S=function S(e,t,r,i,a){var s=n.createEvent("CustomEvent");return s.initCustomEvent(t,!i,!a,r||{}),e.dispatchEvent(s),s;},k=function k(e,n){var i;!s&&(i=t.picturefill||r.pf)?i({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src);},w=function w(e,t){return(getComputedStyle(e,null)||{})[t];},b=function b(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;){n=t.offsetWidth,t=t.parentNode;}return n;},z=function(){var e,t,r=[],i=function i(){var n;for(e=!0,t=!1;r.length;){n=r.shift(),n[0].apply(n[1],n[2]);}e=!1;};return function(a){e?a.apply(this,arguments):(r.push([a,this,arguments]),t||(t=!0,(n.hidden?u:d)(i)));};}(),T=function T(e,t){return t?function(){z(e);}:function(){var t=this,n=arguments;z(function(){e.apply(t,n);});};},x=function x(e){var t,n=0,r=125,i=999,s=i,o=function o(){t=!1,n=a.now(),e();},c=f?function(){f(o,{timeout:s}),s!==i&&(s=i);}:T(function(){u(o);},!0);return function(e){var i;(e=e===!0)&&(s=66),t||(t=!0,i=r-(a.now()-n),0>i&&(i=0),e||9>i&&f?c():u(c,i));};},M=function M(e){var t,n,r=99,i=function i(){t=null,e();},s=function s(){var e=a.now()-n;r>e?u(s,r-e):(f||i)(i);};return function(){n=a.now(),t||(t=u(s,r));};},A=function(){var e,s,d,f,h,p,b,A,N,F,P,R,D,W,I,B=/^img$/i,O=/^iframe$/i,_="onscroll"in t&&!/glebot/.test(navigator.userAgent),X=0,H=0,j=0,U=0,q=function q(e){j--,e&&e.target&&C(e.target,q),(!e||0>j||!e.target)&&(j=0);},Y=function Y(e,t){var r,a=e,s="hidden"==w(n.body,"visibility")||"hidden"!=w(e,"visibility");for(N-=t,R+=t,F-=t,P+=t;s&&(a=a.offsetParent)&&a!=n.body&&a!=i;){s=(w(a,"opacity")||1)>0,s&&"visible"!=w(a,"overflow")&&(r=a.getBoundingClientRect(),s=P>r.left&&F<r.right&&R>r.top-1&&N<r.bottom+1);}return s;},G=function G(){var t,n,a,o,l,u,f,m,p;if((h=r.loadMode)&&8>j&&(t=e.length)){n=0,U++,null==W&&("expand"in r||(r.expand=i.clientHeight>500?500:400),D=r.expand,W=D*r.expFactor),W>H&&1>j&&U>3&&h>2?(H=W,U=0):H=h>1&&U>2&&6>j?D:X;for(;t>n;n++){if(e[n]&&!e[n]._lazyRace)if(_){if((m=e[n][c]("data-expand"))&&(u=1*m)||(u=H),p!==u&&(b=innerWidth+u*I,A=innerHeight+u,f=-1*u,p=u),a=e[n].getBoundingClientRect(),(R=a.bottom)>=f&&(N=a.top)<=A&&(P=a.right)>=f*I&&(F=a.left)<=b&&(R||P||F||N)&&(d&&3>j&&!m&&(3>h||4>U)||Y(e[n],u))){if(ne(e[n]),l=!0,j>9)break;}else!l&&d&&!o&&4>j&&4>U&&h>2&&(s[0]||r.preloadAfterLoad)&&(s[0]||!m&&(R||P||F||N||"auto"!=e[n][c](r.sizesAttr)))&&(o=s[0]||e[n]);}else ne(e[n]);}o&&!l&&ne(o);}},V=x(G),Q=function Q(e){y(e.target,r.loadedClass),E(e.target,r.loadingClass),C(e.target,K);},J=T(Q),K=function K(e){J({target:e.target});},Z=function Z(e,t){try{e.contentWindow.location.replace(t);}catch(n){e.src=t;}},ee=function ee(e){var t,n,i=e[c](r.srcsetAttr);(t=r.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&(n=e.parentNode,n.insertBefore(e.cloneNode(),e),n.removeChild(e));},te=T(function(e,t,n,i,a){var s,o,l,d,h,p;(h=S(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?y(e,r.autosizesClass):e.setAttribute("sizes",i)),o=e[c](r.srcsetAttr),s=e[c](r.srcAttr),a&&(l=e.parentNode,d=l&&m.test(l.nodeName||"")),p=t.firesLoad||"src"in e&&(o||s||d),h={target:e},p&&(C(e,q,!0),clearTimeout(f),f=u(q,2500),y(e,r.loadingClass),C(e,K,!0)),d&&g.call(l.getElementsByTagName("source"),ee),o?e.setAttribute("srcset",o):s&&!d&&(O.test(e.nodeName)?Z(e,s):e.src=s),(o||d)&&k(e,{src:s})),z(function(){e._lazyRace&&delete e._lazyRace,E(e,r.lazyClass),p&&!e.complete||(p?q(h):j--,Q(h));});}),ne=function ne(e){var t,n=B.test(e.nodeName),i=n&&(e[c](r.sizesAttr)||e[c]("sizes")),a="auto"==i;(!a&&d||!n||!e.src&&!e.srcset||e.complete||v(e,r.errorClass))&&(t=S(e,"lazyunveilread").detail,a&&L.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,te(e,t,a,i,n));},re=function re(){if(!d){if(a.now()-p<999)return void u(re,999);var e=M(function(){r.loadMode=3,V();});d=!0,r.loadMode=3,V(),l("scroll",function(){3==r.loadMode&&(r.loadMode=2),e();},!0);}};return{_:function _(){p=a.now(),e=n.getElementsByClassName(r.lazyClass),s=n.getElementsByClassName(r.lazyClass+" "+r.preloadClass),I=r.hFac,l("scroll",V,!0),l("resize",V,!0),t.MutationObserver?new MutationObserver(V).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[o]("DOMNodeInserted",V,!0),i[o]("DOMAttrModified",V,!0),setInterval(V,999)),l("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){n[o](e,V,!0);}),/d$|^c/.test(n.readyState)?re():(l("load",re),n[o]("DOMContentLoaded",V),u(re,2e4)),V(e.length>0);},checkElems:V,unveil:ne};}(),L=function(){var e,t=T(function(e,t,n,r){var i,a,s;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),m.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),a=0,s=i.length;s>a;a++){i[a].setAttribute("sizes",r);}n.detail.dataAttr||k(e,n.detail);}),i=function i(e,n,r){var i,a=e.parentNode;a&&(r=b(e,a,r),i=S(e,"lazybeforesizes",{width:r,dataAttr:!!n}),i.defaultPrevented||(r=i.detail.width,r&&r!==e._lazysizesWidth&&t(e,a,i,r)));},a=function a(){var t,n=e.length;if(n)for(t=0;n>t;t++){i(e[t]);}},s=M(a);return{_:function _(){e=n.getElementsByClassName(r.autosizesClass),l("resize",s);},checkElems:s,updateElem:i};}(),N=function N(){N.i||(N.i=!0,L._(),A._());};return function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};r=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n){e in r||(r[e]=n[e]);}t.lazySizesConfig=r,u(function(){r.init&&N();});}(),{cfg:r,autoSizer:L,loader:A,init:N,uP:k,aC:y,rC:E,hC:v,fire:S,gW:b,rAF:z};}}),function(){"use strict";/**
               * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
               *
               * @codingstandard ftlabs-jsv2
               * @copyright The Financial Times Limited [All Rights Reserved]
               * @license MIT License (see LICENSE.txt)
               */function e(t,r){function i(e,t){return function(){return e.apply(t,arguments);};}var a;if(r=r||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=r.touchBoundary||10,this.layer=t,this.tapDelay=r.tapDelay||200,this.tapTimeout=r.tapTimeout||700,!e.notNeeded(t)){for(var s=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,c=0,l=s.length;l>c;c++){o[s[c]]=i(o[s[c]],o);}n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,r):i.call(t,e,n,r);},t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e);}),r):i.call(t,e,n,r);}),"function"==typeof t.onclick&&(a=t.onclick,t.addEventListener("click",function(e){a(e);},!1),t.onclick=null);}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=r&&/OS [6-7]_\d/.test(navigator.userAgent),s=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(r&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0;}return /\bneedsclick\b/.test(e.className);},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1;}return!e.disabled&&!e.readOnly;default:return /\bneedsfocus\b/.test(e.className);}},e.prototype.sendClick=function(e,t){var n,r;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),r=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n);},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click";},e.prototype.focus=function(e){var t;r&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus();},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break;}n=n.parentElement;}while(n);}t&&(t.fastClickLastScrollTop=t.scrollTop);},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e;},e.prototype.onTouchStart=function(e){var t,n,a;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],r){if(a=window.getSelection(),a.rangeCount&&!a.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t);}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0;},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n;},e.prototype.onTouchMove=function(e){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0):!0;},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");},e.prototype.onTouchEnd=function(e){var t,s,o,c,l,u=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,s=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(l=e.changedTouches[0],u=document.elementFromPoint(l.pageX-window.pageXOffset,l.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),o=u.tagName.toLowerCase(),"label"===o){if(t=this.findControl(u)){if(this.focus(u),n)return!1;u=t;}}else if(this.needsFocus(u))return e.timeStamp-s>100||r&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,e),r&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return r&&!i&&(c=u.fastClickScrollParent,c&&c.fastClickLastScrollTop!==c.scrollTop)?!0:(this.needsClick(u)||(e.preventDefault(),this.sendClick(u,e)),!1);},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null;},e.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0;},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail?!0:(t=this.onMouse(e),t||(this.targetElement=null),t);},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1);},e.notNeeded=function(e){var t,r,i,a;if("undefined"==typeof window.ontouchstart)return!0;if(r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(r>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0;}}if(s&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0;}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction?!0:(a=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],a>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===e.style.touchAction||"manipulation"===e.style.touchAction);},e.attach=function(t,n){return new e(t,n);},"function"==typeof define&&"object"==_typeof(define.amd)&&define.amd?define(function(){return e;}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e;}();"use strict";var font=new FontFaceObserver("Inconsolata",{weight:300});font.load().then(function(){//console.log("Font is available");
},function(){//console.log("Font is not available");
});"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var Polygon=function(){function Polygon(height,width){_classCallCheck(this,Polygon);this.name="Polygon";this.height=height;this.width=width;}_createClass(Polygon,[{key:"sayName",value:function sayName(){ChromeSamples.log("Hi, I am a ",this.name+".");}},{key:"sayHistory",value:function sayHistory(){ChromeSamples.log("'Polygon' is derived from the Greek polus (many) "+"and gonia (angle).");}}]);return Polygon;}();var p=new Polygon(300,400);p.sayName();ChromeSamples.log("The width of this polygon is "+p.width);
"use strict";

var font = new FontFaceObserver("Inconsolata", {
	weight: 300
});

font.load().then(function () {
	//console.log("Font is available");
}, function () {
	//console.log("Font is not available");
});
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polygon = function () {
	function Polygon(height, width) {
		_classCallCheck(this, Polygon);

		this.name = "Polygon";
		this.height = height;
		this.width = width;
	}

	_createClass(Polygon, [{
		key: "sayName",
		value: function sayName() {
			ChromeSamples.log("Hi, I am a ", this.name + ".");
		}
	}, {
		key: "sayHistory",
		value: function sayHistory() {
			ChromeSamples.log("'Polygon' is derived from the Greek polus (many) " + "and gonia (angle).");
		}
	}]);

	return Polygon;
}();

var p = new Polygon(300, 400);
p.sayName();
ChromeSamples.log("The width of this polygon is " + p.width);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

!function (t) {
  "use strict";
  var e = function e(_e, n, o) {
    function i(t) {
      return r.body ? t() : void setTimeout(function () {
        i(t);
      });
    }function a() {
      l.addEventListener && l.removeEventListener("load", a), l.media = o || "all";
    }var r = t.document,
        l = r.createElement("link"),
        s;if (n) s = n;else {
      var c = (r.body || r.getElementsByTagName("head")[0]).childNodes;s = c[c.length - 1];
    }var d = r.styleSheets;l.rel = "stylesheet", l.href = _e, l.media = "only x", i(function () {
      s.parentNode.insertBefore(l, n ? s : s.nextSibling);
    });var f = function f(t) {
      for (var e = l.href, n = d.length; n--;) {
        if (d[n].href === e) return t();
      }setTimeout(function () {
        f(t);
      });
    };return l.addEventListener && l.addEventListener("load", a), l.onloadcssdefined = f, f(a), l;
  };"undefined" != typeof exports ? exports.loadCSS = e : t.loadCSS = e;
}("undefined" != typeof global ? global : undefined), function (t) {
  if (t.loadCSS) {
    var e = loadCSS.relpreload = {};if (e.support = function () {
      try {
        return t.document.createElement("link").relList.supports("preload");
      } catch (e) {
        return !1;
      }
    }, e.poly = function () {
      for (var e = t.document.getElementsByTagName("link"), n = 0; n < e.length; n++) {
        var o = e[n];"preload" === o.rel && "style" === o.getAttribute("as") && (t.loadCSS(o.href, o), o.rel = null);
      }
    }, !e.support()) {
      e.poly();var n = t.setInterval(e.poly, 300);t.addEventListener && t.addEventListener("load", function () {
        t.clearInterval(n);
      }), t.attachEvent && t.attachEvent("onload", function () {
        t.clearInterval(n);
      });
    }
  }
}(undefined), function () {
  "use strict";
  function t(t) {
    f.push(t), 1 == f.length && d();
  }function e() {
    for (; f.length;) {
      f[0](), f.shift();
    }
  }function n(t) {
    this.a = u, this.b = void 0, this.f = [];var e = this;try {
      t(function (t) {
        a(e, t);
      }, function (t) {
        r(e, t);
      });
    } catch (n) {
      r(e, n);
    }
  }function o(t) {
    return new n(function (e, n) {
      n(t);
    });
  }function i(t) {
    return new n(function (e) {
      e(t);
    });
  }function a(t, e) {
    if (t.a == u) {
      if (e == t) throw new TypeError();var n = !1;try {
        var o = e && e.then;if (null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" == typeof o) return void o.call(e, function (e) {
          n || a(t, e), n = !0;
        }, function (e) {
          n || r(t, e), n = !0;
        });
      } catch (i) {
        return void (n || r(t, i));
      }t.a = 0, t.b = e, l(t);
    }
  }function r(t, e) {
    if (t.a == u) {
      if (e == t) throw new TypeError();t.a = 1, t.b = e, l(t);
    }
  }function l(e) {
    t(function () {
      if (e.a != u) for (; e.f.length;) {
        var t = e.f.shift(),
            n = t[0],
            o = t[1],
            i = t[2],
            t = t[3];try {
          0 == e.a ? i("function" == typeof n ? n.call(void 0, e.b) : e.b) : 1 == e.a && ("function" == typeof o ? i(o.call(void 0, e.b)) : t(e.b));
        } catch (a) {
          t(a);
        }
      }
    });
  }function s(t) {
    return new n(function (e, n) {
      function o(n) {
        return function (o) {
          r[n] = o, a += 1, a == t.length && e(r);
        };
      }var a = 0,
          r = [];0 == t.length && e(r);for (var l = 0; l < t.length; l += 1) {
        i(t[l]).c(o(l), n);
      }
    });
  }function c(t) {
    return new n(function (e, n) {
      for (var o = 0; o < t.length; o += 1) {
        i(t[o]).c(e, n);
      }
    });
  }var d,
      f = [];d = function d() {
    setTimeout(e);
  };var u = 2;n.prototype.g = function (t) {
    return this.c(void 0, t);
  }, n.prototype.c = function (t, e) {
    var o = this;return new n(function (n, i) {
      o.f.push([t, e, n, i]), l(o);
    });
  }, window.Promise || (window.Promise = n, window.Promise.resolve = i, window.Promise.reject = o, window.Promise.race = c, window.Promise.all = s, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
}(), function () {
  function t(t, e) {
    document.addEventListener ? t.addEventListener("scroll", e, !1) : t.attachEvent("scroll", e);
  }function e(t) {
    document.body ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function e() {
      document.removeEventListener("DOMContentLoaded", e), t();
    }) : document.attachEvent("onreadystatechange", function n() {
      "interactive" != document.readyState && "complete" != document.readyState || (document.detachEvent("onreadystatechange", n), t());
    });
  }function n(t) {
    this.a = document.createElement("div"), this.a.setAttribute("aria-hidden", "true"), this.a.appendChild(document.createTextNode(t)), this.b = document.createElement("span"), this.c = document.createElement("span"), this.h = document.createElement("span"), this.f = document.createElement("span"), this.g = -1, this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.b.appendChild(this.h), this.c.appendChild(this.f), this.a.appendChild(this.b), this.a.appendChild(this.c);
  }function o(t, e) {
    t.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:" + e + ";";
  }function i(t) {
    var e = t.a.offsetWidth,
        n = e + 100;return t.f.style.width = n + "px", t.c.scrollLeft = n, t.b.scrollLeft = t.b.scrollWidth + 100, t.g !== e ? (t.g = e, !0) : !1;
  }function a(e, n) {
    function o() {
      var t = a;i(t) && null !== t.a.parentNode && n(t.g);
    }var a = e;t(e.b, o), t(e.c, o), i(e);
  }function r(t, e) {
    var n = e || {};this.family = t, this.style = n.style || "normal", this.weight = n.weight || "normal", this.stretch = n.stretch || "normal";
  }function l() {
    if (null === d) {
      var t = document.createElement("div");try {
        t.style.font = "condensed 100px sans-serif";
      } catch (e) {}d = "" !== t.style.font;
    }return d;
  }function s(t, e) {
    return [t.style, t.weight, l() ? t.stretch : "", "100px", e].join(" ");
  }var c = null,
      d = null,
      f = null;r.prototype.load = function (t, i) {
    var r = this,
        l = t || "BESbswy",
        d = i || 3e3,
        u = new Date().getTime();return new Promise(function (t, i) {
      if (null === f && (f = !!window.FontFace), f) {
        var h = new Promise(function (t, e) {
          function n() {
            new Date().getTime() - u >= d ? e() : document.fonts.load(s(r, r.family), l).then(function (e) {
              1 <= e.length ? t() : setTimeout(n, 25);
            }, function () {
              e();
            });
          }n();
        }),
            p = new Promise(function (t, e) {
          setTimeout(e, d);
        });Promise.race([p, h]).then(function () {
          t(r);
        }, function () {
          i(r);
        });
      } else e(function () {
        function e() {
          var e;(e = -1 != v && -1 != w || -1 != v && -1 != y || -1 != w && -1 != y) && ((e = v != w && v != y && w != y) || (null === c && (e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), c = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))), e = c && (v == g && w == g && y == g || v == b && w == b && y == b || v == E && w == E && y == E)), e = !e), e && (null !== x.parentNode && x.parentNode.removeChild(x), clearTimeout(T), t(r));
        }function f() {
          if (new Date().getTime() - u >= d) null !== x.parentNode && x.parentNode.removeChild(x), i(r);else {
            var t = document.hidden;!0 !== t && void 0 !== t || (v = h.a.offsetWidth, w = p.a.offsetWidth, y = m.a.offsetWidth, e()), T = setTimeout(f, 50);
          }
        }var h = new n(l),
            p = new n(l),
            m = new n(l),
            v = -1,
            w = -1,
            y = -1,
            g = -1,
            b = -1,
            E = -1,
            x = document.createElement("div"),
            T = 0;x.dir = "ltr", o(h, s(r, "sans-serif")), o(p, s(r, "serif")), o(m, s(r, "monospace")), x.appendChild(h.a), x.appendChild(p.a), x.appendChild(m.a), document.body.appendChild(x), g = h.a.offsetWidth, b = p.a.offsetWidth, E = m.a.offsetWidth, f(), a(h, function (t) {
          v = t, e();
        }), o(h, s(r, '"' + r.family + '",sans-serif')), a(p, function (t) {
          w = t, e();
        }), o(p, s(r, '"' + r.family + '",serif')), a(m, function (t) {
          y = t, e();
        }), o(m, s(r, '"' + r.family + '",monospace'));
      });
    });
  }, "undefined" != typeof module ? module.exports = r : (window.FontFaceObserver = r, window.FontFaceObserver.prototype.load = r.prototype.load);
}();var font = new FontFaceObserver("Inconsolata", { weight: 300 });font.load().then(function () {
  console.log("Font is available");
}, function () {
  console.log("Font is not available");
});
"use strict";

!function (n, e) {
  var t = function t(e, _t) {
    return "undefined" == typeof _t ? e : "undefined" != typeof n.Mustache && "undefined" != typeof n.Mustache.render ? Mustache.render(e, _t) : "undefined" != typeof n.Handlebars && "undefined" != typeof n.Handlebars.compile ? Handlebars.compile(e)(_t) : "undefined" != typeof n._ && "undefined" != typeof n._.template ? output = _.template(e, _t) : e;
  },
      a = function a(n, e) {
    var t = new XMLHttpRequest();t.open("GET", n), t.send(), t.onload = function () {
      e(this.response);
    };
  },
      r = function r(t, a, _r) {
    var o = e.createElement("script");o.src = t + ("" == parser.search ? "?" : "&") + m.jsonp + "=JSONPCallback", n.JSONPCallback = function (e) {
      a(JSON.stringify(e)), n.JSONPCallback = null;var t = o.parentNode;t && t.removeChild(o), o = null;
    }, e.getElementsByTagName("head")[0].appendChild(o);
  },
      o = function o(t, _o) {
    var i = e.createElement("a");i.href = t, i.hostname == n.location.hostname ? a(t, _o) : r(t, _o, i);
  },
      i = function i(n, e, t) {
    var a = f(JSON.parse(t), a);n.innerHTML = m.render(e, a), u(n, a);
  },
      d = function d(n, e) {
    var t = this.context;"" != n.innerHTML && (t = f(JSON.parse(n.innerHTML), t)), n.innerHTML = m.render(e, t), u(n, t);
  },
      l = function l(n, e) {
    var t = f(JSON.parse(e), t);n.innerHTML = m.render(n.innerHTML, t), u(n, this.context);
  },
      c = function c(e, t) {
    var a = t.getAttribute("data-" + m.html),
        r = t.getAttribute("data-" + m.json),
        c = t.getAttribute("data-fragment-media");if (!c || !n.matchMedia || n.matchMedia(c).matches) {
      var u = function u(n) {
        n(), h(-1);
      };h(1), e.html && e.json ? o(a, function (n) {
        o(r, function (e) {
          u(i.bind(this, t, n, e));
        });
      }) : e.html ? o(a, function (n) {
        u(d.bind(this, t, n));
      }) : e.json && o(r, function (n) {
        u(l.bind(this, t, n));
      });
    }
  },
      u = function u(n, t) {
    "undefined" != typeof n && "querySelectorAll" in n || (n = e);var a = { parent: n, context: t },
        r = n.querySelectorAll("[data-" + m.html + "][data-" + m.json + "]");Array.prototype.forEach.call(r, c.bind(a, { json: !0, html: !0 }));var r = n.querySelectorAll("[data-" + m.html + "]:not([data-" + m.json + "])");Array.prototype.forEach.call(r, c.bind(a, { json: !1, html: !0 }));var r = n.querySelectorAll("[data-" + m.json + "]:not([data-" + m.html + "])");Array.prototype.forEach.call(r, c.bind(a, { json: !0, html: !1 }));
  },
      f = function f(n, e) {
    "undefined" == typeof n && (n = {});for (var t in e) {
      n.hasOwnProperty(t) || (n[t] = e[t]);
    }return n;
  },
      s = 0,
      p = 0,
      h = function h(n) {
    s += n, s > p && (p = s), 0 == s && m.ready(p);
  },
      m = f(n.fragment, { html: "fragment", json: "fragment-json", jsonp: "callback", manual: !1, render: t, evaluate: u, ready: function ready() {} });m.manual || e.addEventListener("DOMContentLoaded", function () {
    m.evaluate();
  }), n.fragment = m;
}(window, window.document);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
* @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
*/
!function (e, t) {
	function n(e, t) {
		var n = e.createElement("p"),
		    r = e.getElementsByTagName("head")[0] || e.documentElement;return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild);
	}function r() {
		var e = E.elements;return "string" == typeof e ? e.split(" ") : e;
	}function i(e, t) {
		var n = E.elements;"string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), E.elements = n + " " + e, l(t);
	}function a(e) {
		var t = v[e[p]];return t || (t = {}, g++, e[p] = g, v[g] = t), t;
	}function s(e, n, r) {
		if (n || (n = t), y) return n.createElement(e);r || (r = a(n));var i;return i = r.cache[e] ? r.cache[e].cloneNode() : m.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !i.canHaveChildren || f.test(e) || i.tagUrn ? i : r.frag.appendChild(i);
	}function o(e, n) {
		if (e || (e = t), y) return e.createDocumentFragment();n = n || a(e);for (var i = n.frag.cloneNode(), s = 0, o = r(), c = o.length; c > s; s++) {
			i.createElement(o[s]);
		}return i;
	}function c(e, t) {
		t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
			return E.shivMethods ? s(n, e, t) : t.createElem(n);
		}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function (e) {
			return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
		}) + ");return n}")(E, t.frag);
	}function l(e) {
		e || (e = t);var r = a(e);return !E.shivCSS || h || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), y || c(e, r), e;
	}var u = "3.7.3",
	    d = e.html5 || {},
	    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
	    m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
	    h,
	    p = "_html5shiv",
	    g = 0,
	    v = {},
	    y;!function () {
		try {
			var e = t.createElement("a");e.innerHTML = "<xyz></xyz>", h = "hidden" in e, y = 1 == e.childNodes.length || function () {
				t.createElement("a");var e = t.createDocumentFragment();return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement;
			}();
		} catch (n) {
			h = !0, y = !0;
		}
	}();var E = { elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: u, shivCSS: d.shivCSS !== !1, supportsUnknownElements: y, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: l, createElement: s, createDocumentFragment: o, addElements: i };e.html5 = E, l(t), "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = E);
}("undefined" != typeof window ? window : undefined, document), !function (e, t, n) {
	"use strict";
	function r(e) {
		return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
	}function i() {
		var t;j = !1, Y = e.devicePixelRatio, U = {}, q = {}, t = (Y || 1) * A.xQuant, A.uT || (A.maxX = Math.max(1.3, A.maxX), t = Math.min(t, A.maxX), S.DPR = t), G.width = Math.max(e.innerWidth || 0, x.clientWidth), G.height = Math.max(e.innerHeight || 0, x.clientHeight), G.vw = G.width / 100, G.vh = G.height / 100, G.em = S.getEmValue(), G.rem = G.em, h = A.lazyFactor / 2, h = h * t + h, g = .4 + .1 * t, d = .5 + .2 * t, f = .5 + .25 * t, p = t + 1.3, (m = G.width > G.height) || (h *= .9), R && (h *= .9), C = [G.width, G.height, t].join("-");
	}function a(e, t, n) {
		var r = t * Math.pow(e - .4, 1.9);return m || (r /= 1.3), e += r, e > n;
	}function s(e) {
		var t,
		    n = S.getSet(e),
		    r = !1;"pending" != n && (r = C, n && (t = S.setRes(n), r = S.applySetCandidate(t, e))), e[S.ns].evaled = r;
	}function o(e, t) {
		return e.res - t.res;
	}function c(e, t, n) {
		var r;return !n && t && (n = e[S.ns].sets, n = n && n[n.length - 1]), r = l(t, n), r && (t = S.makeUrl(t), e[S.ns].curSrc = t, e[S.ns].curCan = r, r.res || ee(r, r.set.sizes)), r;
	}function l(e, t) {
		var n, r, i;if (e && t) for (i = S.parseSet(t), e = S.makeUrl(e), n = 0; n < i.length; n++) {
			if (e == S.makeUrl(i[n].url)) {
				r = i[n];break;
			}
		}return r;
	}function u(e, t) {
		var n,
		    r,
		    i,
		    a,
		    s = e.getElementsByTagName("source");for (n = 0, r = s.length; r > n; n++) {
			i = s[n], i[S.ns] = !0, a = i.getAttribute("srcset"), a && t.push({ srcset: a, media: i.getAttribute("media"), type: i.getAttribute("type"), sizes: i.getAttribute("sizes") });
		}
	}var d,
	    f,
	    m,
	    h,
	    p,
	    g,
	    v,
	    y,
	    E,
	    C,
	    S = {},
	    k = function k() {},
	    w = t.createElement("img"),
	    b = w.getAttribute,
	    z = w.setAttribute,
	    T = w.removeAttribute,
	    x = t.documentElement,
	    M = {},
	    A = { xQuant: 1, lazyFactor: .4, maxX: 2 },
	    L = "data-pfsrc",
	    N = L + "set",
	    F = "webkitBackfaceVisibility" in x.style,
	    P = navigator.userAgent,
	    R = /rident/.test(P) || /ecko/.test(P) && P.match(/rv\:(\d+)/) && RegExp.$1 > 35,
	    D = "currentSrc",
	    W = /\s+\+?\d+(e\d+)?w/,
	    I = /((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,
	    B = /^([\+eE\d\.]+)(w|x)$/,
	    O = /\s*\d+h\s*/,
	    _ = e.respimgCFG,
	    X = ("https:" == location.protocol, "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
	    H = "font-size:100%!important;",
	    j = !0,
	    U = {},
	    q = {},
	    Y = e.devicePixelRatio,
	    G = { px: 1, "in": 96 },
	    V = t.createElement("a"),
	    Q = !1,
	    J = function J(e, t, n, r) {
		e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n);
	},
	    K = function K(e) {
		var t = {};return function (n) {
			return n in t || (t[n] = e(n)), t[n];
		};
	},
	    Z = function () {
		var e = /^([\d\.]+)(em|vw|px)$/,
		    t = function t() {
			for (var e = arguments, t = 0, n = e[0]; ++t in e;) {
				n = n.replace(e[t], e[++t]);
			}return n;
		},
		    n = K(function (e) {
			return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "");
		});return function (t, r) {
			var i;if (!(t in U)) if (U[t] = !1, r && (i = t.match(e))) U[t] = i[1] * G[i[2]];else try {
				U[t] = new Function("e", n(t))(G);
			} catch (a) {}return U[t];
		};
	}(),
	    ee = function ee(e, t) {
		return e.w ? (e.cWidth = S.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.x, e;
	},
	    te = function te(n) {
		var r,
		    i,
		    a,
		    s = n || {};if (s.elements && 1 == s.elements.nodeType && ("IMG" == s.elements.nodeName.toUpperCase() ? s.elements = [s.elements] : (s.context = s.elements, s.elements = null)), s.reparse && (s.reevaluate = !0, e.console && console.warn && console.warn("reparse was renamed to reevaluate!")), r = s.elements || S.qsa(s.context || t, s.reevaluate || s.reselect ? S.sel : S.selShort), a = r.length) {
			for (S.setupRun(s), Q = !0, i = 0; a > i; i++) {
				S.fillImg(r[i], s);
			}S.teardownRun(s);
		}
	},
	    ne = K(function (e) {
		var t = [1, "x"],
		    n = r(e || "");return n && (n = n.replace(O, ""), t = n.match(B) ? [1 * RegExp.$1, RegExp.$2] : !1), t;
	});if (D in w || (D = "src"), M["image/jpeg"] = !0, M["image/gif"] = !0, M["image/png"] = !0, M["image/svg+xml"] = t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image", "1.1"), S.ns = ("ri" + new Date().getTime()).substr(0, 9), S.supSrcset = "srcset" in w, S.supSizes = "sizes" in w, S.supPicture = !!e.HTMLPictureElement, S.supSrcset && S.supPicture && !S.supSizes && !function (e) {
		w.srcset = "data:,a", e.src = "data:,a", S.supSrcset = w.complete === e.complete, S.supPicture = S.supSrcset && S.supPicture;
	}(t.createElement("img")), S.selShort = "picture>img,img[srcset]", S.sel = S.selShort, S.cfg = A, S.supSrcset && (S.sel += ",img[" + N + "]"), S.DPR = Y || 1, S.u = G, S.types = M, y = S.supSrcset && !S.supSizes, S.setSize = k, S.makeUrl = K(function (e) {
		return V.href = e, V.href;
	}), S.qsa = function (e, t) {
		return e.querySelectorAll(t);
	}, S.matchesMedia = function () {
		return S.matchesMedia = e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? function (e) {
			return !e || matchMedia(e).matches;
		} : S.mMQ, S.matchesMedia.apply(this, arguments);
	}, S.mMQ = function (e) {
		return e ? Z(e) : !0;
	}, S.calcLength = function (e) {
		var t = Z(e, !0) || !1;return 0 > t && (t = !1), t;
	}, S.supportsType = function (e) {
		return e ? M[e] : !0;
	}, S.parseSize = K(function (e) {
		var t = (e || "").match(I);return { media: t && t[1], length: t && t[2] };
	}), S.parseSet = function (e) {
		if (!e.cands) {
			var t,
			    n,
			    r,
			    i,
			    a,
			    s,
			    o = e.srcset;for (e.cands = []; o;) {
				o = o.replace(/^\s+/g, ""), t = o.search(/\s/g), r = null, -1 != t ? (n = o.slice(0, t), i = n.charAt(n.length - 1), "," != i && n || (n = n.replace(/,+$/, ""), r = ""), o = o.slice(t + 1), null == r && (a = o.indexOf(","), -1 != a ? (r = o.slice(0, a), o = o.slice(a + 1)) : (r = o, o = ""))) : (n = o, o = ""), n && (r = ne(r)) && (s = { url: n.replace(/^,+/, ""), set: e }, s[r[1]] = r[0], "x" == r[1] && 1 == r[0] && (e.has1x = !0), e.cands.push(s));
			}
		}return e.cands;
	}, S.getEmValue = function () {
		var e;if (!v && (e = t.body)) {
			var n = t.createElement("div"),
			    r = x.style.cssText,
			    i = e.style.cssText;n.style.cssText = X, x.style.cssText = H, e.style.cssText = H, e.appendChild(n), v = n.offsetWidth, e.removeChild(n), v = parseFloat(v, 10), x.style.cssText = r, e.style.cssText = i;
		}return v || 16;
	}, S.calcListLength = function (e) {
		if (!(e in q) || A.uT) {
			var t,
			    n,
			    i,
			    a,
			    s,
			    o,
			    c = r(e).split(/\s*,\s*/),
			    l = !1;for (s = 0, o = c.length; o > s && (t = c[s], n = S.parseSize(t), i = n.length, a = n.media, !i || !S.matchesMedia(a) || (l = S.calcLength(i)) === !1); s++) {}q[e] = l ? l : G.width;
		}return q[e];
	}, S.setRes = function (e) {
		var t;if (e) {
			t = S.parseSet(e);for (var n = 0, r = t.length; r > n; n++) {
				ee(t[n], e.sizes);
			}
		}return t;
	}, S.setRes.res = ee, S.applySetCandidate = function (e, t) {
		if (e.length) {
			var n,
			    r,
			    i,
			    s,
			    l,
			    u,
			    m,
			    v,
			    y,
			    E,
			    k,
			    w,
			    b,
			    z = t[S.ns],
			    T = C,
			    x = h,
			    M = g;if (v = z.curSrc || t[D], y = z.curCan || c(t, v, e[0].set), r = S.DPR, b = y && y.res, !m && v && (w = R && !t.complete && y && b - .2 > r, w || y && !(p > b) || (y && r > b && b > d && (f > b && (x *= .8, M += .04 * r), y.res += x * Math.pow(b - M, 2)), E = !z.pic || y && y.set == e[0].set, y && E && y.res >= r && (m = y))), !m) for (b && (y.res = y.res - (y.res - b) / 2), e.sort(o), u = e.length, m = e[u - 1], i = 0; u > i; i++) {
				if (n = e[i], n.res >= r) {
					s = i - 1, m = e[s] && (l = n.res - r) && (w || v != S.makeUrl(n.url)) && a(e[s].res, l, r) ? e[s] : n;break;
				}
			}return b && (y.res = b), m && (k = S.makeUrl(m.url), z.curSrc = k, z.curCan = m, k != v && S.setSrc(t, m), S.setSize(t)), T;
		}
	}, S.setSrc = function (e, t) {
		var n;e.src = t.url, F && (n = e.style.zoom, e.style.zoom = "0.999", e.style.zoom = n);
	}, S.getSet = function (e) {
		var t,
		    n,
		    r,
		    i = !1,
		    a = e[S.ns].sets;for (t = 0; t < a.length && !i; t++) {
			if (n = a[t], n.srcset && S.matchesMedia(n.media) && (r = S.supportsType(n.type))) {
				"pending" == r && (n = r), i = n;break;
			}
		}return i;
	}, S.parseSets = function (e, t, r) {
		var i,
		    a,
		    s,
		    o,
		    c = "PICTURE" == t.nodeName.toUpperCase(),
		    d = e[S.ns];(d.src === n || r.src) && (d.src = b.call(e, "src"), d.src ? z.call(e, L, d.src) : T.call(e, L)), (d.srcset === n || !S.supSrcset || e.srcset || r.srcset) && (i = b.call(e, "srcset"), d.srcset = i, o = !0), d.sets = [], c && (d.pic = !0, u(t, d.sets)), d.srcset ? (a = { srcset: d.srcset, sizes: b.call(e, "sizes") }, d.sets.push(a), s = (y || d.src) && W.test(d.srcset || ""), s || !d.src || l(d.src, a) || a.has1x || (a.srcset += ", " + d.src, a.cands.push({ url: d.src, x: 1, set: a }))) : d.src && d.sets.push({ srcset: d.src, sizes: null }), d.curCan = null, d.curSrc = n, d.supported = !(c || a && !S.supSrcset || s), o && S.supSrcset && !d.supported && (i ? (z.call(e, N, i), e.srcset = "") : T.call(e, N)), d.supported && !d.srcset && (!d.src && e.src || e.src != S.makeUrl(d.src)) && (null == d.src ? e.removeAttribute("src") : e.src = d.src), d.parsed = !0;
	}, S.fillImg = function (e, t) {
		var n,
		    r,
		    i = t.reselect || t.reevaluate;if (e[S.ns] || (e[S.ns] = {}), r = e[S.ns], i || r.evaled != C) {
			if (!r.parsed || t.reevaluate) {
				if (n = e.parentNode, !n) return;S.parseSets(e, n, t);
			}r.supported ? r.evaled = C : s(e);
		}
	}, S.setupRun = function (t) {
		(!Q || j || Y != e.devicePixelRatio) && (i(), t.elements || t.context || clearTimeout(E));
	}, S.supPicture ? (te = k, S.fillImg = k) : (t.createElement("picture"), function () {
		var n,
		    r = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
		    i = function i() {
			var e = t.readyState || "";o = setTimeout(i, "loading" == e ? 200 : 999), t.body && (n = n || r.test(e), S.fillImgs(), n && clearTimeout(o));
		},
		    a = function a() {
			S.fillImgs();
		},
		    s = function s() {
			clearTimeout(E), j = !0, E = setTimeout(a, 99);
		},
		    o = setTimeout(i, t.body ? 0 : 20);J(e, "resize", s), J(t, "readystatechange", i);
	}()), S.respimage = te, S.fillImgs = te, S.teardownRun = k, te._ = S, e.respimage = e.picturefill || te, !e.picturefill) for (e.respimgCFG = { ri: S, push: function push(e) {
			var t = e.shift();"function" == typeof S[t] ? S[t].apply(S, e) : (A[t] = e[0], Q && S.fillImgs({ reselect: !0 }));
		} }; _ && _.length;) {
		e.respimgCFG.push(_.shift());
	}e.picturefill || (e.picturefill = e.respimage, e.picturefillCFG || (e.picturefillCFG = e.respimgCFG));
}(window, document), function (e, t) {
	var n = t(e, e.document);e.lazySizes = n, "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = n);
}(window, function e(t, n) {
	"use strict";
	if (n.getElementsByClassName) {
		var r,
		    i = n.documentElement,
		    a = t.Date,
		    s = t.HTMLPictureElement,
		    o = "addEventListener",
		    c = "getAttribute",
		    l = t[o],
		    u = t.setTimeout,
		    d = t.requestAnimationFrame || u,
		    f = t.requestIdleCallback,
		    m = /^picture$/i,
		    h = ["load", "error", "lazyincluded", "_lazyloaded"],
		    p = {},
		    g = Array.prototype.forEach,
		    v = function v(e, t) {
			return p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), p[t].test(e[c]("class") || "") && p[t];
		},
		    y = function y(e, t) {
			v(e, t) || e.setAttribute("class", (e[c]("class") || "").trim() + " " + t);
		},
		    E = function E(e, t) {
			var n;(n = v(e, t)) && e.setAttribute("class", (e[c]("class") || "").replace(n, " "));
		},
		    C = function C(e, t, n) {
			var r = n ? o : "removeEventListener";n && C(e, t), h.forEach(function (n) {
				e[r](n, t);
			});
		},
		    S = function S(e, t, r, i, a) {
			var s = n.createEvent("CustomEvent");return s.initCustomEvent(t, !i, !a, r || {}), e.dispatchEvent(s), s;
		},
		    k = function k(e, n) {
			var i;!s && (i = t.picturefill || r.pf) ? i({ reevaluate: !0, elements: [e] }) : n && n.src && (e.src = n.src);
		},
		    w = function w(e, t) {
			return (getComputedStyle(e, null) || {})[t];
		},
		    b = function b(e, t, n) {
			for (n = n || e.offsetWidth; n < r.minSize && t && !e._lazysizesWidth;) {
				n = t.offsetWidth, t = t.parentNode;
			}return n;
		},
		    z = function () {
			var e,
			    t,
			    r = [],
			    i = function i() {
				var n;for (e = !0, t = !1; r.length;) {
					n = r.shift(), n[0].apply(n[1], n[2]);
				}e = !1;
			};return function (a) {
				e ? a.apply(this, arguments) : (r.push([a, this, arguments]), t || (t = !0, (n.hidden ? u : d)(i)));
			};
		}(),
		    T = function T(e, t) {
			return t ? function () {
				z(e);
			} : function () {
				var t = this,
				    n = arguments;z(function () {
					e.apply(t, n);
				});
			};
		},
		    x = function x(e) {
			var t,
			    n = 0,
			    r = 125,
			    i = 999,
			    s = i,
			    o = function o() {
				t = !1, n = a.now(), e();
			},
			    c = f ? function () {
				f(o, { timeout: s }), s !== i && (s = i);
			} : T(function () {
				u(o);
			}, !0);return function (e) {
				var i;(e = e === !0) && (s = 66), t || (t = !0, i = r - (a.now() - n), 0 > i && (i = 0), e || 9 > i && f ? c() : u(c, i));
			};
		},
		    M = function M(e) {
			var t,
			    n,
			    r = 99,
			    i = function i() {
				t = null, e();
			},
			    s = function s() {
				var e = a.now() - n;r > e ? u(s, r - e) : (f || i)(i);
			};return function () {
				n = a.now(), t || (t = u(s, r));
			};
		},
		    A = function () {
			var e,
			    s,
			    d,
			    f,
			    h,
			    p,
			    b,
			    A,
			    N,
			    F,
			    P,
			    R,
			    D,
			    W,
			    I,
			    B = /^img$/i,
			    O = /^iframe$/i,
			    _ = "onscroll" in t && !/glebot/.test(navigator.userAgent),
			    X = 0,
			    H = 0,
			    j = 0,
			    U = 0,
			    q = function q(e) {
				j--, e && e.target && C(e.target, q), (!e || 0 > j || !e.target) && (j = 0);
			},
			    Y = function Y(e, t) {
				var r,
				    a = e,
				    s = "hidden" == w(n.body, "visibility") || "hidden" != w(e, "visibility");for (N -= t, R += t, F -= t, P += t; s && (a = a.offsetParent) && a != n.body && a != i;) {
					s = (w(a, "opacity") || 1) > 0, s && "visible" != w(a, "overflow") && (r = a.getBoundingClientRect(), s = P > r.left && F < r.right && R > r.top - 1 && N < r.bottom + 1);
				}return s;
			},
			    G = function G() {
				var t, n, a, o, l, u, f, m, p;if ((h = r.loadMode) && 8 > j && (t = e.length)) {
					n = 0, U++, null == W && ("expand" in r || (r.expand = i.clientHeight > 500 ? 500 : 400), D = r.expand, W = D * r.expFactor), W > H && 1 > j && U > 3 && h > 2 ? (H = W, U = 0) : H = h > 1 && U > 2 && 6 > j ? D : X;for (; t > n; n++) {
						if (e[n] && !e[n]._lazyRace) if (_) {
							if ((m = e[n][c]("data-expand")) && (u = 1 * m) || (u = H), p !== u && (b = innerWidth + u * I, A = innerHeight + u, f = -1 * u, p = u), a = e[n].getBoundingClientRect(), (R = a.bottom) >= f && (N = a.top) <= A && (P = a.right) >= f * I && (F = a.left) <= b && (R || P || F || N) && (d && 3 > j && !m && (3 > h || 4 > U) || Y(e[n], u))) {
								if (ne(e[n]), l = !0, j > 9) break;
							} else !l && d && !o && 4 > j && 4 > U && h > 2 && (s[0] || r.preloadAfterLoad) && (s[0] || !m && (R || P || F || N || "auto" != e[n][c](r.sizesAttr))) && (o = s[0] || e[n]);
						} else ne(e[n]);
					}o && !l && ne(o);
				}
			},
			    V = x(G),
			    Q = function Q(e) {
				y(e.target, r.loadedClass), E(e.target, r.loadingClass), C(e.target, K);
			},
			    J = T(Q),
			    K = function K(e) {
				J({ target: e.target });
			},
			    Z = function Z(e, t) {
				try {
					e.contentWindow.location.replace(t);
				} catch (n) {
					e.src = t;
				}
			},
			    ee = function ee(e) {
				var t,
				    n,
				    i = e[c](r.srcsetAttr);(t = r.customMedia[e[c]("data-media") || e[c]("media")]) && e.setAttribute("media", t), i && e.setAttribute("srcset", i), t && (n = e.parentNode, n.insertBefore(e.cloneNode(), e), n.removeChild(e));
			},
			    te = T(function (e, t, n, i, a) {
				var s, o, l, d, h, p;(h = S(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? y(e, r.autosizesClass) : e.setAttribute("sizes", i)), o = e[c](r.srcsetAttr), s = e[c](r.srcAttr), a && (l = e.parentNode, d = l && m.test(l.nodeName || "")), p = t.firesLoad || "src" in e && (o || s || d), h = { target: e }, p && (C(e, q, !0), clearTimeout(f), f = u(q, 2500), y(e, r.loadingClass), C(e, K, !0)), d && g.call(l.getElementsByTagName("source"), ee), o ? e.setAttribute("srcset", o) : s && !d && (O.test(e.nodeName) ? Z(e, s) : e.src = s), (o || d) && k(e, { src: s })), z(function () {
					e._lazyRace && delete e._lazyRace, E(e, r.lazyClass), p && !e.complete || (p ? q(h) : j--, Q(h));
				});
			}),
			    ne = function ne(e) {
				var t,
				    n = B.test(e.nodeName),
				    i = n && (e[c](r.sizesAttr) || e[c]("sizes")),
				    a = "auto" == i;(!a && d || !n || !e.src && !e.srcset || e.complete || v(e, r.errorClass)) && (t = S(e, "lazyunveilread").detail, a && L.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, j++, te(e, t, a, i, n));
			},
			    re = function re() {
				if (!d) {
					if (a.now() - p < 999) return void u(re, 999);var e = M(function () {
						r.loadMode = 3, V();
					});d = !0, r.loadMode = 3, V(), l("scroll", function () {
						3 == r.loadMode && (r.loadMode = 2), e();
					}, !0);
				}
			};return { _: function _() {
					p = a.now(), e = n.getElementsByClassName(r.lazyClass), s = n.getElementsByClassName(r.lazyClass + " " + r.preloadClass), I = r.hFac, l("scroll", V, !0), l("resize", V, !0), t.MutationObserver ? new MutationObserver(V).observe(i, { childList: !0, subtree: !0, attributes: !0 }) : (i[o]("DOMNodeInserted", V, !0), i[o]("DOMAttrModified", V, !0), setInterval(V, 999)), l("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (e) {
						n[o](e, V, !0);
					}), /d$|^c/.test(n.readyState) ? re() : (l("load", re), n[o]("DOMContentLoaded", V), u(re, 2e4)), V(e.length > 0);
				}, checkElems: V, unveil: ne };
		}(),
		    L = function () {
			var e,
			    t = T(function (e, t, n, r) {
				var i, a, s;if (e._lazysizesWidth = r, r += "px", e.setAttribute("sizes", r), m.test(t.nodeName || "")) for (i = t.getElementsByTagName("source"), a = 0, s = i.length; s > a; a++) {
					i[a].setAttribute("sizes", r);
				}n.detail.dataAttr || k(e, n.detail);
			}),
			    i = function i(e, n, r) {
				var i,
				    a = e.parentNode;a && (r = b(e, a, r), i = S(e, "lazybeforesizes", { width: r, dataAttr: !!n }), i.defaultPrevented || (r = i.detail.width, r && r !== e._lazysizesWidth && t(e, a, i, r)));
			},
			    a = function a() {
				var t,
				    n = e.length;if (n) for (t = 0; n > t; t++) {
					i(e[t]);
				}
			},
			    s = M(a);return { _: function _() {
					e = n.getElementsByClassName(r.autosizesClass), l("resize", s);
				}, checkElems: s, updateElem: i };
		}(),
		    N = function N() {
			N.i || (N.i = !0, L._(), A._());
		};return function () {
			var e,
			    n = { lazyClass: "lazyload", loadedClass: "lazyloaded", loadingClass: "lazyloading", preloadClass: "lazypreload", errorClass: "lazyerror", autosizesClass: "lazyautosizes", srcAttr: "data-src", srcsetAttr: "data-srcset", sizesAttr: "data-sizes", minSize: 40, customMedia: {}, init: !0, expFactor: 1.5, hFac: .8, loadMode: 2 };r = t.lazySizesConfig || t.lazysizesConfig || {};for (e in n) {
				e in r || (r[e] = n[e]);
			}t.lazySizesConfig = r, u(function () {
				r.init && N();
			});
		}(), { cfg: r, autoSizer: L, loader: A, init: N, uP: k, aC: y, rC: E, hC: v, fire: S, gW: b, rAF: z };
	}
}), function () {
	"use strict"; /**
               * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
               *
               * @codingstandard ftlabs-jsv2
               * @copyright The Financial Times Limited [All Rights Reserved]
               * @license MIT License (see LICENSE.txt)
               */

	function e(t, r) {
		function i(e, t) {
			return function () {
				return e.apply(t, arguments);
			};
		}var a;if (r = r || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = r.touchBoundary || 10, this.layer = t, this.tapDelay = r.tapDelay || 200, this.tapTimeout = r.tapTimeout || 700, !e.notNeeded(t)) {
			for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], o = this, c = 0, l = s.length; l > c; c++) {
				o[s[c]] = i(o[s[c]], o);
			}n && (t.addEventListener("mouseover", this.onMouse, !0), t.addEventListener("mousedown", this.onMouse, !0), t.addEventListener("mouseup", this.onMouse, !0)), t.addEventListener("click", this.onClick, !0), t.addEventListener("touchstart", this.onTouchStart, !1), t.addEventListener("touchmove", this.onTouchMove, !1), t.addEventListener("touchend", this.onTouchEnd, !1), t.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, r) {
				var i = Node.prototype.removeEventListener;"click" === e ? i.call(t, e, n.hijacked || n, r) : i.call(t, e, n, r);
			}, t.addEventListener = function (e, n, r) {
				var i = Node.prototype.addEventListener;"click" === e ? i.call(t, e, n.hijacked || (n.hijacked = function (e) {
					e.propagationStopped || n(e);
				}), r) : i.call(t, e, n, r);
			}), "function" == typeof t.onclick && (a = t.onclick, t.addEventListener("click", function (e) {
				a(e);
			}, !1), t.onclick = null);
		}
	}var t = navigator.userAgent.indexOf("Windows Phone") >= 0,
	    n = navigator.userAgent.indexOf("Android") > 0 && !t,
	    r = /iP(ad|hone|od)/.test(navigator.userAgent) && !t,
	    i = r && /OS 4_\d(_\d)?/.test(navigator.userAgent),
	    a = r && /OS [6-7]_\d/.test(navigator.userAgent),
	    s = navigator.userAgent.indexOf("BB10") > 0;e.prototype.needsClick = function (e) {
		switch (e.nodeName.toLowerCase()) {case "button":case "select":case "textarea":
				if (e.disabled) return !0;break;case "input":
				if (r && "file" === e.type || e.disabled) return !0;break;case "label":case "iframe":case "video":
				return !0;}return (/\bneedsclick\b/.test(e.className)
		);
	}, e.prototype.needsFocus = function (e) {
		switch (e.nodeName.toLowerCase()) {case "textarea":
				return !0;case "select":
				return !n;case "input":
				switch (e.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
						return !1;}return !e.disabled && !e.readOnly;default:
				return (/\bneedsfocus\b/.test(e.className)
				);}
	}, e.prototype.sendClick = function (e, t) {
		var n, r;document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n);
	}, e.prototype.determineEventType = function (e) {
		return n && "select" === e.tagName.toLowerCase() ? "mousedown" : "click";
	}, e.prototype.focus = function (e) {
		var t;r && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus();
	}, e.prototype.updateScrollParent = function (e) {
		var t, n;if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
			n = e;do {
				if (n.scrollHeight > n.offsetHeight) {
					t = n, e.fastClickScrollParent = n;break;
				}n = n.parentElement;
			} while (n);
		}t && (t.fastClickLastScrollTop = t.scrollTop);
	}, e.prototype.getTargetElementFromEventTarget = function (e) {
		return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
	}, e.prototype.onTouchStart = function (e) {
		var t, n, a;if (e.targetTouches.length > 1) return !0;if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], r) {
			if (a = window.getSelection(), a.rangeCount && !a.isCollapsed) return !0;if (!i) {
				if (n.identifier && n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t);
			}
		}return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0;
	}, e.prototype.touchHasMoved = function (e) {
		var t = e.changedTouches[0],
		    n = this.touchBoundary;return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n;
	}, e.prototype.onTouchMove = function (e) {
		return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0;
	}, e.prototype.findControl = function (e) {
		return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
	}, e.prototype.onTouchEnd = function (e) {
		var t,
		    s,
		    o,
		    c,
		    l,
		    u = this.targetElement;if (!this.trackingClick) return !0;if (e.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, s = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (l = e.changedTouches[0], u = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || u, u.fastClickScrollParent = this.targetElement.fastClickScrollParent), o = u.tagName.toLowerCase(), "label" === o) {
			if (t = this.findControl(u)) {
				if (this.focus(u), n) return !1;u = t;
			}
		} else if (this.needsFocus(u)) return e.timeStamp - s > 100 || r && window.top !== window && "input" === o ? (this.targetElement = null, !1) : (this.focus(u), this.sendClick(u, e), r && "select" === o || (this.targetElement = null, e.preventDefault()), !1);return r && !i && (c = u.fastClickScrollParent, c && c.fastClickLastScrollTop !== c.scrollTop) ? !0 : (this.needsClick(u) || (e.preventDefault(), this.sendClick(u, e)), !1);
	}, e.prototype.onTouchCancel = function () {
		this.trackingClick = !1, this.targetElement = null;
	}, e.prototype.onMouse = function (e) {
		return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0;
	}, e.prototype.onClick = function (e) {
		var t;return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t);
	}, e.prototype.destroy = function () {
		var e = this.layer;n && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1);
	}, e.notNeeded = function (e) {
		var t, r, i, a;if ("undefined" == typeof window.ontouchstart) return !0;if (r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
			if (!n) return !0;if (t = document.querySelector("meta[name=viewport]")) {
				if (-1 !== t.content.indexOf("user-scalable=no")) return !0;if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
			}
		}if (s && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
			if (-1 !== t.content.indexOf("user-scalable=no")) return !0;if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
		}return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction ? !0 : (a = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], a >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === e.style.touchAction || "manipulation" === e.style.touchAction);
	}, e.attach = function (t, n) {
		return new e(t, n);
	}, "function" == typeof define && "object" == _typeof(define.amd) && define.amd ? define(function () {
		return e;
	}) : "undefined" != typeof module && module.exports ? (module.exports = e.attach, module.exports.FastClick = e) : window.FastClick = e;
}();