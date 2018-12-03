// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/jamal/build/src.min.js":[function(require,module,exports) {
var define;
parcelRequire=function(a,c,e,t){var u="function"==typeof parcelRequire&&parcelRequire,d="function"==typeof require&&require;function s(t,e){if(!c[t]){if(!a[t]){var n="function"==typeof parcelRequire&&parcelRequire;if(!e&&n)return n(t,!0);if(u)return u(t,!0);if(d&&"string"==typeof t)return d(t);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}i.resolve=function(e){return a[t][1][e]||e},i.cache={};var o=c[t]=new s.Module(t);a[t][0].call(o.exports,i,o,o.exports,this)}return c[t].exports;function i(e){return s(i.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=a,s.cache=c,s.parent=u,s.register=function(e,n){a[e]=[function(e,t){t.exports=n},{}]};for(var n=0;n<e.length;n++)s(e[n]);if(e.length){var r=s(e[e.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=r:"function"==typeof define&&define.amd?define(function(){return r}):this.Jml=r}return s}({KXEu:[function(e,t,n){t.exports=function(){return"_"+Math.random().toString(36).substr(2,9)}},{}],Focm:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r,s=(r=e("./uniqid"))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i="a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,cite,code,col,colgroup,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1,h2,h3,h4,head,header,hr,html,i,iframe,img,input,ins,kbd,keygen,label,legend,li,link,main,map,mark,menu,menuitem,meta,meter,nav,noframes,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,small,source,span,strike,strong,style,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,title,tr,track,tt,u,ul,video,wbr,var".split(","),a={create:function(e,t){var n=this;2<arguments.length&&void 0!==arguments[2]&&arguments[2],this.body=e instanceof HTMLElement?e:window.document.querySelector(e),this.body.innerHTML=null;var r=document.createElement("div");return r.setAttribute("_id","jml-container-".concat((0,s.default)())),Array.isArray(t)?t.map(function(e){return r.appendChild(e)}):r.appendChild(t),{body:this.body,render:function(){return n.body.appendChild(r)},clear:function(){return n.body.innerHTML=""},getRef:function(e){return n.body.querySelector('[_id="'.concat(e,'"]'))},markup:t}},processParameters:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{attributes:{},content:[]},t=e.attributes,n=e.content;return"object"===o(t)&&Array.isArray(n)?{attrs:t,children:n}:Array.isArray(t)?{attrs:{},children:t}:t instanceof HTMLElement||"string"==typeof t||t instanceof Promise?{attrs:{},children:[t]}:"object"===o(t)&&(n instanceof HTMLElement||"string"==typeof n||n instanceof Promise)?{attrs:t,children:[n]}:"object"===o(t)&&null==n?{attrs:t,children:[]}:{attrs:{},children:[]}},initialize:function(){var d=this,e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{customTags:[]}).customTags;0<e.length&&e.forEach(function(e){return i.push((t=e).includes("-")?e.split("-").map(function(e){return e.replace(/^./,function(e){return e.toUpperCase()})}).join(""):t);var t}),i.forEach(function(u){var e="j".concat(u.replace(/^./,function(e){return e.toUpperCase()}));window[e]=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{debug:!1,inspect:!1,loading:null},n=d.processParameters({attributes:e,content:t}),o=n.attrs,i=n.children,a=(0,s.default)(),c=document.createElement(u);return c.setAttribute("_id",a),Object.keys(o).map(function(e){if("function"==typeof o[e]){var t="jmlEventHandler_".concat(e).concat(c.attributes._id.value),n=e.replace(/^./,function(e){return""}).replace("on","").toLowerCase();window[t]=o[e],c.addEventListener(n,window[t])}else c.setAttribute(e,o[e])}),i.forEach(function(e){if(e instanceof Promise){var n=r.loading;n&&c.appendChild("string"==typeof n?document.createTextNode(n):n),e.then(function(e){var t=window.document.querySelector('[_id="'.concat(a,'"]'));n&&t.removeChild(t.firstChild),Array.isArray(e)?e.forEach(function(e){t.appendChild("string"==typeof e?document.createTextNode(e):e)}):t.appendChild("string"==typeof e?document.createTextNode(e):e)})}else c.appendChild("string"==typeof e?document.createTextNode(e):e)}),r.debug&&(console.group("Element: ".concat(u)),console.log("\tAttributes:",c.attributes),console.log("\tChildren:",c.children),console.groupEnd()),r.inspect,c},a[u]=window[e]})}},c=a;n.default=c},{"./uniqid":"KXEu"}]},{},["Focm"]);
},{}],"components/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jamal = _interopRequireDefault(require("jamal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = function Card(props) {
  var attributes = props.attributes,
      children = props.children,
      title = props.title,
      image = props.image,
      text = props.text,
      actions = props.actions;
  return _jamal.default.div(_objectSpread({
    class: 'mdl-card mdl-shadow--2dp mdl-card--horizontal'
  }, attributes), [_jamal.default.div({
    class: 'mdl-card__media'
  }, _jamal.default.img({
    src: image,
    style: 'width: 100%'
  })), // IMG
  _jamal.default.div({
    class: 'mdl-card__title'
  }, _jamal.default.h2({
    class: 'mdl-card__title-text'
  }, title)), // Title
  _jamal.default.div({
    class: 'mdl-card__supporting-text'
  }, text), _jamal.default.div({
    class: 'mdl-card__actions mdl-card--border'
  }, actions.map(function (action) {
    return _jamal.default.a(_objectSpread({
      class: 'mdl-button mdl-js-button mdl-button--fab mdl-button--colored',
      'data-upgraded': ',MaterialButton,MaterialRipple'
    }, action.attributes), action.children);
  }))]);
};

var _default = Card;
exports.default = _default;
},{"jamal":"../node_modules/jamal/build/src.min.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _jamal = _interopRequireDefault(require("jamal"));

var _card = _interopRequireDefault(require("./components/card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jamal.default.initialize();

var app = new _jamal.default.create('#app', (0, _card.default)({
  image: 'https://scontent-frt3-1.cdninstagram.com/vp/1ab88ae910bc89183170fd8801c07fc8/5C928F8E/t51.2885-19/s320x320/30592135_194755651141010_7712635144665825280_n.jpg',
  title: 'Follow me on Twitter',
  text: 'Some long long and long sample text. I wish to use more long text but vscode\'s emmet doesn\'t work on js files for lorem tag.',
  actions: [{
    attributes: {
      stlye: 'cursor: pointer',
      _onClick: function _onClick() {
        window.open('http://twitter.com/akinozgen17');
      }
    },
    children: [_jamal.default.i({
      class: 'material-icons'
    }, 'send')]
  }]
}));
app.render();
},{"jamal":"../node_modules/jamal/build/src.min.js","./components/card":"components/card.js"}],"../../../../Akın Özgen/Projects/example-components/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53780" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../Akın Özgen/Projects/example-components/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], "Jml")
//# sourceMappingURL=/src.e31bb0bc.map