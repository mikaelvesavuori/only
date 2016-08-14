;(function(win, doc) {

  // Gets either a string, which it will just return, or a {html, json} pair which
  // it will try to render with Mustache, Handlebars and Underscore.
  // If that fails, it just returns the html.
  var render = function(html, json) {
    if (typeof json === "undefined") {
      return html;
    }

    if (typeof win.Mustache !== "undefined" &&
        typeof win.Mustache.render !== "undefined") {
      return Mustache.render(html, json);
    } else if (typeof win.Handlebars !== "undefined" &&
               typeof win.Handlebars.compile !== "undefined") {
      return Handlebars.compile(html)(json);
    } else if (typeof win._ !== "undefined" &&
               typeof win._.template !== "undefined") {
      return output = _.template(html, json);
    }

    return html;
  };

  // Helper function to load ajax data
  var load_xhr = function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onload = function() {
      callback(this.response);
    };
  };

  // Helper function to load jsonp data
  var load_jsonp = function(url, callback, url_parser) {
    var script = doc.createElement('script');
    script.src = url + (parser.search == '' ? '?' : '&') +
      fragment.jsonp + '=JSONPCallback';

    win.JSONPCallback = function(data) {
      // The callback function expects a string
      callback(JSON.stringify(data));
      win.JSONPCallback = null;
      // Clean up DOM by removing the JSONP script element
      var parent = script.parentNode;
      if (parent) {
        parent.removeChild(script);
      }
      script = null;
    }
    doc.getElementsByTagName('head')[0].appendChild(script);
  };

  var load = function(url, callback) {
    // We'll need something that can easily parse urls
    var url_parser = doc.createElement('a');
    url_parser.href = url;

    // If the resource is located at the same hostname, assume ajax
    if (url_parser.hostname == win.location.hostname) {
      load_xhr(url, callback);
    }
    // If the resource is located at a different hostname, assume jsonp
    else {
      load_jsonp(url, callback, url_parser);
    }
  };

  var render_template = function(element, html, json) {
    var context = extend(JSON.parse(json), context);
    element.innerHTML = fragment.render(html, context);
    evaluate(element, context);
  };

  var render_html = function(element, html) {
    var context = this.context;

    // If the innerHTML is nonempty: the context is interpreted as the
    // combination of the JSONified innerHTML and the existing context.
    // The JSONified innerHTML has a higher precedence over the existing context.
    if (element.innerHTML != "") {
      context = extend(JSON.parse(element.innerHTML), context);
    }

    element.innerHTML = fragment.render(html, context);
    evaluate(element, context);
  };

  var render_json = function(element, json) {
    var context = extend(JSON.parse(json), context);
    element.innerHTML = fragment.render(element.innerHTML, context);
    evaluate(element, this.context);
  };

  // Handle an individual fragment
  var render_fragment = function(fragment_type, element) {
    var html_url = element.getAttribute('data-'+fragment.html);
    var json_url = element.getAttribute('data-'+fragment.json);
    var media = element.getAttribute('data-fragment-media');

    // Don't load anything if the media query doesn't match
    if ( media && win.matchMedia && !win.matchMedia(media).matches ) return;

    // Update the num_fragments and deligate rendering to a submethod
    var resource_loaded = function(render_handler) {
      render_handler();
      update_num_fragments(-1);
    };

    update_num_fragments(1);

    if (fragment_type.html && fragment_type.json) {
      load(html_url, function(html) {
        load(json_url, function(json) {
          resource_loaded(render_template.bind(this, element, html, json));
        });
      });
    }
    else if (fragment_type.html) {
      load(html_url, function(html) {
        resource_loaded(render_html.bind(this, element, html));
      });
    }
    else if (fragment_type.json) {
      load(json_url, function(json) {
        resource_loaded(render_json.bind(this, element, json));
      });
    }
  };

  var evaluate = function(parent, context) {
    if (typeof parent === "undefined" || !("querySelectorAll" in parent)) {
      parent = doc;
    }

    // Scope contains information for recursively rendering fragments
    var scope = { parent: parent, context: context };
    var fragments = parent.querySelectorAll('[data-'+fragment.html+'][data-'+fragment.json+']');
    Array.prototype.forEach.call(fragments, render_fragment.bind(scope, { json: true, html: true }));

    var fragments = parent.querySelectorAll('[data-'+fragment.html+']:not([data-'+fragment.json+'])');
    Array.prototype.forEach.call(fragments, render_fragment.bind(scope, { json: false, html: true }));

    var fragments = parent.querySelectorAll('[data-'+fragment.json+']:not([data-'+fragment.html+'])');
    Array.prototype.forEach.call(fragments, render_fragment.bind(scope, { json: true, html: false }));
  };

  var extend = function(obj, defaults) {
    if (typeof obj === "undefined") obj = {};
    for (var element in defaults) {
      if (!obj.hasOwnProperty(element)) {
        obj[element] = defaults[element];
      }
    }
    return obj;
  };

  var num_fragments = 0;
  var max_fragments = 0;
  var update_num_fragments = function(diff) {
    num_fragments += diff;

    if (num_fragments > max_fragments) {
      max_fragments = num_fragments;
    }
    if (num_fragments == 0) {
      fragment.ready(max_fragments);
    }
  };

  // Extend fragment with defaults
  var fragment = extend(win.fragment, {
    html: 'fragment',
    json: 'fragment-json',
    jsonp: 'callback',
    manual: false,
    render: render,
    evaluate: evaluate,
    ready: function(){}
  });

  // Autoload
  if (!fragment.manual) {
    doc.addEventListener('DOMContentLoaded', function() {
      fragment.evaluate();
    });
  }

  // Just overwrite any existing "fragment" property
  win.fragment = fragment;

})(window, window.document);

(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function q(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function w(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function x(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;x(a)&&null!==a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);x(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,D=null;function H(){if(null===C){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}C=""!==a.style.font}return C}function I(a,b){return[a.style,a.weight,H()?a.stretch:"","100px",b].join(" ")}
A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",y=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){null===D&&(D=!!window.FontFace);if(D){var J=new Promise(function(a,b){function e(){(new Date).getTime()-E>=y?b():document.fonts.load(I(c,c.family),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),K=new Promise(function(a,c){setTimeout(c,y)});Promise.race([K,J]).then(function(){a(c)},function(){b(c)})}else m(function(){function r(){var b;if(b=-1!=f&&
-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==t&&g==t&&h==t||f==u&&g==u&&h==u||f==v&&g==v&&h==v)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=y)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===
a)f=e.a.offsetWidth,g=n.a.offsetWidth,h=p.a.offsetWidth,r();G=setTimeout(F,50)}}var e=new q(k),n=new q(k),p=new q(k),f=-1,g=-1,h=-1,t=-1,u=-1,v=-1,d=document.createElement("div"),G=0;d.dir="ltr";w(e,I(c,"sans-serif"));w(n,I(c,"serif"));w(p,I(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);t=e.a.offsetWidth;u=n.a.offsetWidth;v=p.a.offsetWidth;F();z(e,function(a){f=a;r()});w(e,I(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;r()});w(n,I(c,'"'+
c.family+'",serif'));z(p,function(a){h=a;r()});w(p,I(c,'"'+c.family+'",monospace'))})})};"undefined"!==typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());
