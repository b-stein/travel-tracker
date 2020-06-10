/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".traveler-dash {\n  display: grid;\n  width: 100vw;\n  grid-template-rows: 1fr 3fr 3fr 3fr 3fr; }\n  .traveler-dash .welcome-banner, .traveler-dash .yr-trip-cost {\n    display: flex;\n    justify-content: center;\n    color: #7FB3D5;\n    margin-bottom: 0; }\n\n.trip-card {\n  background-color: #E67E22;\n  border: 2px solid #DAF7A6;\n  border-radius: 7px;\n  cursor: pointer;\n  color: white;\n  min-height: 150px;\n  max-height: 240px;\n  margin: 5px 11px;\n  padding: 0 13px;\n  width: 195px;\n  min-width: 195px;\n  opacity: 88%;\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly; }\n  .trip-card h3 {\n    margin-bottom: 3px; }\n  .trip-card h4 {\n    font-weight: normal; }\n  .trip-card:hover .card-photo {\n    opacity: 50%;\n    transition: .8s ease; }\n  .trip-card:hover .text {\n    font-size: 20px;\n    opacity: 100%;\n    transition: .5s ease;\n    width: 100%; }\n  .trip-card:hover h3 {\n    text-shadow: 0px 0px 4px #DAF7A6;\n    transition: .8s ease; }\n\n.btn-container {\n  display: flex;\n  justify-content: space-evenly; }\n  .btn-container .form-btn {\n    margin-top: 25px;\n    height: 36px;\n    width: 91px; }\n\n.post-to-trips {\n  color: #7FB3D5;\n  align-items: center;\n  background: white;\n  border: 3px solid #E67E22;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  flex-direction: column;\n  height: 37%;\n  width: 36%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 5%;\n  top: 15%;\n  position: fixed;\n  z-index: 20; }\n\n#exit-form-btn {\n  background: white;\n  border: 2px double #E67E22;\n  border-radius: 5px;\n  color: #7FB3D5;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -8% -10% 9% -7%;\n  width: 30px;\n  position: fixed;\n  transition: .3s ease; }\n  #exit-form-btn:hover {\n    background: #DAF7A6;\n    transition: .3s ease; }\n\n.card-bottom {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  grid-template-areas: \"time btn1\" \"time btn2\"; }\n  .card-bottom h4 {\n    grid-area: time; }\n  .card-bottom .approve-btn {\n    background-color: #7FB3D5;\n    grid-area: btn1;\n    width: 66px;\n    margin-top: 4px; }\n  .card-bottom .deny-btn {\n    background-color: #7FB3D5;\n    grid-area: btn2;\n    width: 66px;\n    margin-bottom: 7px; }\n  .card-bottom .delete-btn {\n    background-color: #7FB3D5;\n    grid-area: btn2;\n    width: 66px;\n    margin-bottom: 7px; }\n\n.searched-user-container {\n  color: white;\n  height: 340px; }\n  .searched-user-container h3, .searched-user-container h4 {\n    margin: 0;\n    text-align: center; }\n  .searched-user-container h4 {\n    font-weight: normal; }\n\n.back-btn {\n  margin: 5px; }\n\n.no-result {\n  color: #7FB3D5; }\n\nh1 {\n  display: flex;\n  align-items: flex-end;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 35px; }\n\n.header-map-icon {\n  height: 5vh;\n  margin-left: 5px; }\n\n.nav-btn {\n  margin-left: 10px;\n  border: 0; }\n\nbutton img {\n  height: 3vh; }\n\n.income-gained {\n  height: 15vh;\n  max-width: 30%; }\n\n.search {\n  display: flex;\n  border: 2px outset #DAF7A6;\n  border-radius: 8px 8px 8px 8px; }\n\n#search-input {\n  width: 250px;\n  border-radius: 7px; }\n\n.agent-dash {\n  display: grid;\n  grid-template-rows: 1fr 2fr 2fr;\n  width: 100vw;\n  height: 80vh;\n  margin-top: 2%; }\n  .agent-dash p {\n    font-weight: normal; }\n\n.admin-trip-card {\n  background-color: #E67E22;\n  border: 2px solid #DAF7A6;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 250px;\n  margin: 5px 11px;\n  padding: 0 13px;\n  width: 195px;\n  min-width: 195px;\n  opacity: 88%;\n  font-weight: normal;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly; }\n  .admin-trip-card h4 {\n    font-size: 14px; }\n\n.user-trips-container {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 261px;\n  color: #7FB3D5; }\n\n.drp-calendar {\n  color: black; }\n\n.login-wrapper {\n  display: flex;\n  justify-content: center;\n  width: 100vw;\n  height: 90vh; }\n  .login-wrapper .login {\n    border: 2px solid #DAF7A6;\n    background-color: #7FB3D5;\n    border-radius: 9px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    max-width: 70%;\n    height: 400px;\n    margin-top: 80px;\n    position: relative;\n    z-index: 2; }\n    .login-wrapper .login .login-error {\n      color: red; }\n\n.login-container {\n  padding: 30px;\n  width: 100%;\n  display: grid;\n  grid-gap: 10px;\n  justify-content: center; }\n\n.form-input {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  align-items: center;\n  grid-gap: 15px;\n  margin-top: 20px; }\n\n.login-btn {\n  margin: 2% 45% 2% 45%; }\n\ninput {\n  height: 30px;\n  padding: 0;\n  border: 1px grey solid;\n  padding-left: 5px; }\n\n@media only screen and (max-width: 700px) {\n  .login-wrapper .login {\n    width: 85%;\n    max-width: 95vw;\n    padding: 10px; }\n  header h1 {\n    font-size: 3vh; }\n  header .header-map-icon {\n    height: 5vh;\n    margin-left: 1px;\n    margin-right: 20px; }\n  header .today {\n    display: none; }\n  header #search-input {\n    width: 50vw; }\n  header .nav-btn {\n    margin-left: 0;\n    width: 40px; }\n  .trip-information {\n    width: 87%;\n    right: 2%;\n    left: 10%;\n    margin: -7% 15% -1% -5%; }\n  #exit-btn {\n    margin: -7% 11% -1% -4%; }\n  .post-to-trips {\n    width: 78%;\n    top: 18%; }\n    .post-to-trips #exit-form-btn {\n      margin: -11% -11% 9% -8%; } }\n\n.trip-information {\n  background: white;\n  border: 3px solid #E67E22;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  height: 54%;\n  width: 64%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 22%;\n  opacity: 95%;\n  z-index: 20; }\n  .trip-information h3 {\n    text-align: center;\n    height: 44%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin: 0;\n    border-radius: 7px 7px 0px 0px;\n    font-size: 30px;\n    text-shadow: 0px 0px 6px black; }\n  .trip-information h4 {\n    color: #7FB3D5; }\n  .trip-information p {\n    color: black; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: grey;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 19; }\n\n#exit-btn {\n  background: white;\n  border: 2px double #E67E22;\n  border-radius: 5px;\n  color: #7FB3D5;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% 11% -1% -3%;\n  width: 30px;\n  position: fixed;\n  transition: .3s ease; }\n  #exit-btn:hover {\n    background: #DAF7A6;\n    transition: .3s ease; }\n\n.card-photo-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 5; }\n\n.card-photo {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  position: relative;\n  z-index: 5;\n  cursor: pointer;\n  height: 117px;\n  transition: .8s ease;\n  width: 100%; }\n\n.text {\n  background: #DAF7A6;\n  opacity: 80%;\n  color: black;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  z-index: 10;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease; }\n\nbody {\n  background: white;\n  font-family: \"Quicksand\", sans-serif;\n  color: white; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #E67E22;\n  font-family: \"Quicksand\", sans-serif;\n  color: white;\n  padding: 8px; }\n\nmain {\n  height: 100vh;\n  display: flex;\n  justify-content: center; }\n\nbutton {\n  font-family: \"Quicksand\", sans-serif;\n  height: 30px;\n  width: 80px;\n  border-radius: 7px;\n  border: 1px solid #DAF7A6;\n  color: white;\n  font-weight: bold;\n  font-size: 17x;\n  background-color: #E67E22;\n  font-family: \"Quicksand\", sans-serif; }\n  button:hover {\n    color: black;\n    background-color: #DAF7A6; }\n\n.hide {\n  display: none !important; }\n\n.background-img {\n  position: absolute;\n  z-index: 1;\n  align-self: flex-end;\n  width: 100%;\n  height: 47%;\n  object-fit: cover; }\n\n.modal {\n  border: 2px solid #DAF7A6;\n  background-color: #7FB3D5;\n  font-weight: bold;\n  border-radius: 9px;\n  display: grid;\n  margin: 5px;\n  padding: 15px; }\n\n.trip-container {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden;\n  min-height: 150px; }\n\nh3 {\n  text-align: center; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/agent.js":
/*!**********************!*\
  !*** ./src/agent.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/user.js");


class Agent extends _user__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(username, pwd, trips) {
		super(username, pwd, true, true);
		this.id = 1;
		this.userTrips = trips;
		this.pendingTrips = [];
		this.upcomingTrips = [];
		this.activeTrips = [];
	}

	updateProperties(today, trips) {
		this.userTrips = trips;
		this.findPendingTrips();
		this.findActiveTrips(today);
	}

	findPendingTrips() {
		this.pendingTrips = this.userTrips.filter(trip => trip.status === 'pending');
	}

	findUpcomingTrips(today) {
		const upcomingTrips = this.userTrips.filter(trip => trip.date > today);

		this.upcomingTrips = upcomingTrips.filter(trip => trip.status === 'approved');
	}
	
	findYearRevenue(today, destinations) {
		const yyyy = today.substring(0, 4);

		const yearTrips = this.userTrips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			if (tYYYY === yyyy) return trip;
		})

		const confirmedYrTrips = yearTrips.filter(trip => trip.status === 'approved');

		const incomeMade = (confirmedYrTrips.reduce((sum, trip) => {
			const foundTripSpec = destinations.find(spot => spot.id === trip.destinationID);
			let tripCost = (foundTripSpec.estimatedFlightCostPerPerson * trip.travelers) 
				+ (foundTripSpec.estimatedLodgingCostPerDay * trip.duration);
			sum += tripCost;

			return sum;
		}, 0) * .1).toFixed(2);

		return `$${incomeMade}`;
	}


	findActiveTrips(today) {
		const activeTrips = this.userTrips.filter(trip => {
			const endDate = this.addDays(trip.date, trip.duration);
			if (endDate > today && trip.date <= today) return trip
		})

		this.activeTrips = activeTrips.filter(trip => trip.status === 'approved');
	}

	addDays(date, days) {
		const endDate = new Date(date);
		endDate.setDate(endDate.getDate() + days);
		const dd = String(endDate.getDate()).padStart(2, '0');
  	const mm = String(endDate.getMonth() + 1).padStart(2, '0');
  	const yyyy = endDate.getFullYear();
		return yyyy + '/' + mm + '/' + dd;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Agent);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {
  displayAgentDash(agent, destinations, today) {
		document.querySelector('.login-wrapper').classList.add('hide');
		document.querySelector('.agent-search').classList.add('hide');
		document.querySelector('.agent-dash').classList.remove('hide');
		document.querySelector('.search').classList.remove('hide');
		this.displayAgentInfo(agent, destinations, today);
	},

  displayUserDash(user, destinations, today) {
    document.querySelector('.login-wrapper').classList.add('hide');
    document.querySelector('.traveler-dash').classList.remove('hide');
		document.querySelector('.book-trip').classList.remove('hide');
		this.displayUserInfo(user, destinations, today);
	},
	
	displayErrorLoginMsg() {
		document.querySelector('.login-error').innerText = 'Incorrect username or password!'
	},

	displayUserInfo(user, destinations, today) {
		const yearCosts = user.findYearTripCost(today, destinations);
		document.querySelector('.welcome-banner').innerText = `Welcome ${user.name}!`;
		document.querySelector('.yr-trip-cost').innerText = `${today.substring(0, 4)} trips costs: ${yearCosts}`;
		let currentTripsHTML = document.querySelector('.current-trips-container');
		let upcomingTripsHTML = document.querySelector('.upcoming-trips-container');
		let pastTripsHTML = document.querySelector('.past-trips-container');
		let pendingTripsHTML = document.querySelector('.pending-trips-container');
		this.generateTripCards(currentTripsHTML, user.activeTrips, destinations);
		this.generateTripCards(upcomingTripsHTML, user.upcomingTrips, destinations);
		this.generateTripCards(pastTripsHTML, user.pastTrips, destinations);
		this.generateTripCards(pendingTripsHTML, user.pendingTrips, destinations);
	},

	displayAgentInfo(agent, destinations, today) {
		const yearRevenue = agent.findYearRevenue(today, destinations);
		document.querySelector('.revenue').innerText = `${today.substring(0, 4)} current revenue: ${yearRevenue}`;
		let requestsHTML = document.querySelector('.request-container');
		let currentTripsHTML = document.querySelector('.active-trips-container');
		this.generatePendRequests(requestsHTML, agent.pendingTrips, destinations);
		this.generateTripCards(currentTripsHTML, agent.activeTrips, destinations);
	},

	generateTripCards(elementContainer, tripArray, destinations) {
		tripArray.forEach(trip => {
			let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
			let cardHtml = `
			<div class='trip-card' id=${trip.id}>
				<h3>${foundDestSpec.destination}</h3>
				<div class='card-photo-container'>
					<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
					<div class="text">
          	<div class="information">Click for Details</div>
        	</div>
				</div>
				<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
			</div>`;
			elementContainer.insertAdjacentHTML('beforeend', cardHtml);
		})
	},

	generatePendRequests(elementContainer, tripArray, destinations) {
		tripArray.forEach(trip => {
			let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
			let cardHtml = `
			<div class='trip-card' id=${trip.id}>
				<h3>${foundDestSpec.destination}</h3>
				<div class='card-photo-container'>
					<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
					<div class="text">
          	<div class="information">Click for Details</div>
        	</div>
				</div>
				<div class='card-bottom'>
					<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
					<button type="approve" class='approve-btn'>Approve</button>
					<button type="deny" class='deny-btn'>Deny</button>
				</div>
			</div>`;
			elementContainer.insertAdjacentHTML('beforeend', cardHtml);
		})
	},

	displayReqForm() {
		document.querySelector('.post-to-trips').classList.remove('hide');
		document.querySelector('.chosen-destination').value = 'Lima, Peru';
		document.querySelector('.traveler-input').value = '';
		document.querySelector('.date-picker').value = '';
		document.querySelector('.duration-input').value = '';
		document.querySelector('.estimated-cost').innerText = '';
	},

	exitForm() {
		document.querySelector('.post-to-trips').classList.add('hide');
	},

	displayTripInfo(trips, destinations, allUsers) {
		let tripInfoHTML = document.querySelector('.trip-information');
		tripInfoHTML.classList.remove('hide');
		const tripID = Number(event.target.closest('.trip-card').id);
		const foundTrip = trips.find(trip => trip.id === tripID);
		const foundDest = destinations.find(spot => spot.id === foundTrip.destinationID);
		const foundUser = allUsers.find(user => user.id === foundTrip.userID);
		tripInfoHTML.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
		let tripInfo = `
			<button id="exit-btn">X</button>
			<h3 id='trip-title'>${foundDest.destination} Trip</h3>
			<h4>Booked Account</h4>
			<p>${foundUser.name}</p>
			<h4>Travelers on Trip</h4>
			<p>${foundTrip.travelers}</p>
			<h4>Trip length</h4>
			<p>Starts ${foundTrip.date}, lasts ${foundTrip.duration} days.</p>
			<h4>Lodging Costs</h4>
			<p>$${foundDest.estimatedLodgingCostPerDay} per day, for ${foundTrip.duration} days.</p>
			<h4>Flight Cost</h4>
			<p>$${foundDest.estimatedFlightCostPerPerson} per person, for ${foundTrip.travelers} travelers.</p>`
		tripInfoHTML.insertAdjacentHTML('beforeend', tripInfo);
		document.getElementById('trip-title').style.backgroundImage = `url(${foundDest.image})`;
	},

	closeTripInfo() {
		document.querySelector('.trip-information').classList.add('hide');
		document.querySelector('.trip-information').innerHTML = '';
		document.getElementById('overlay').remove();
	},

	clearForm(event) {
		event.preventDefault()
		document.querySelector('.chosen-destination').value = '';
		document.querySelector('.traveler-input').value = '';
		document.querySelector('.date-picker').value = '';
		document.querySelector('.duration-input').value = '';
		document.querySelector('.estimated-cost').innerText = '';
	},

	displaySearchResults(searchedResults, today, destinations) {
		document.querySelector('.agent-dash').classList.add('hide');
		document.querySelector('.agent-search').classList.remove('hide');
		
		if (searchedResults.length === 0) {
			let userSection = `<p class='no-result'>No results</p>`
			document.querySelector('.search-results-container').insertAdjacentHTML('beforeend', userSection);
		} else {
			searchedResults.forEach(userResult => {
				const yearPurchases = userResult.findYearTripCost(today, destinations);
				let userPendingTrips = this.interpolatePendingTrips(userResult.pendingTrips, destinations);
				let userUpcomingTrips = this.interpolateUpcomingTrips(userResult.upcomingTrips, destinations);
				let userActiveTrips = this.interpolateOtherTrips(userResult.activeTrips, 'active', destinations);
				let userPastTrips = this.interpolateOtherTrips(userResult.pastTrips, 'past', destinations);

				let userSection = `
				<section class='searched-user-container modal' id=${userResult.id}>
					<h3>${userResult.name}</h3>
					<h4>${today.substring(0, 4)} Travel Tracker expenses: ${yearPurchases}</h4>
					<div class='user-trips-container'>
						${userPendingTrips}
						${userUpcomingTrips}
						${userActiveTrips}
						${userPastTrips}
					</div>
				</section>`;
				document.querySelector('.search-results-container').insertAdjacentHTML('beforeend', userSection);
			})
		}
	},

	displayAdminChange(foundUser, today, destinations) {
		const yearPurchases = foundUser.findYearTripCost(today, destinations);
		let userPendingTrips = this.interpolatePendingTrips(foundUser.pendingTrips, destinations);
		let userUpcomingTrips = this.interpolateUpcomingTrips(foundUser.upcomingTrips, destinations);
		let userActiveTrips = this.interpolateOtherTrips(foundUser.activeTrips, 'active', destinations);
		let userPastTrips = this.interpolateOtherTrips(foundUser.pastTrips, 'past', destinations);

		let userSection = `
		<h3>${foundUser.name}</h3>
		<h4>${today.substring(0, 4)} Travel Tracker expenses: ${yearPurchases}</h4>
		<div class='user-trips-container'>
			${userPendingTrips}
			${userUpcomingTrips}
			${userActiveTrips}
			${userPastTrips}
		</div>`
		document.getElementById(foundUser.id).insertAdjacentHTML('beforeend', userSection);
	},

	interpolatePendingTrips(givenArray, destinations) {
		return givenArray.map(trip => {
			let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
			return `
			<div class='admin-trip-card trip-card' id=${trip.id}>
				<h3>${foundDestSpec.destination}</h3>
				<h4>[pending]</h4>
				<div class='card-photo-container'>
					<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
					<div class="text">
						<div class="information">Click for Details</div>
					</div>
				</div>
				<div class='card-bottom'>
					<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
					<button type="approve" class='approve-btn search-view'>Approve</button>
					<button type="deny" class='deny-btn search-view'>Deny</button>
				</div>
			</div>`
		})
	},

	interpolateUpcomingTrips(givenArray, destinations) {
		return givenArray.map(trip => {
			let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
			return `
			<div class='admin-trip-card trip-card' id=${trip.id}>
				<h3>${foundDestSpec.destination}</h3>
				<h4>[upcoming]</h4>
				<div class='card-photo-container'>
					<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
					<div class="text">
						<div class="information">Click for Details</div>
					</div>
				</div>
				<div class='card-bottom'>
					<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
					<button type="delete" class='delete-btn'>Delete</button>
				</div>
			</div>`
		})
	},

	interpolateOtherTrips(givenArray, type, destinations) {
		return givenArray.map(trip => {
			let foundDestSpec = destinations.find(dest => dest.id === trip.destinationID);
			return `
			<div class='admin-trip-card trip-card' id=${trip.id}>
				<h3>${foundDestSpec.destination}</h3>
				<h4>[${type}]</h4>
				<div class='card-photo-container'>
					<img src=${foundDestSpec.image} class='card-photo' alt='${foundDestSpec.alt}'> 
					<div class="text">
						<div class="information">Click for Details</div>
					</div>
				</div>
				<div class='card-bottom'>
					<h4>Date: ${trip.date}, Duration: ${trip.duration} days</h4>
				</div>
			</div>`
		})
	}
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/fetchCall.js":
/*!**************************!*\
  !*** ./src/fetchCall.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class FetchCall {
	constructor() {
		this.rootURL = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data';
	}

	getTravelers() {
		let url = `${this.rootURL}/travelers/travelers`;
		return fetch(url)
						.then(response => response.json())
						.catch(err => console.log(err.message))
	}

	getTrips() {
		let url = `${this.rootURL}/trips/trips`;
		return fetch(url)
						.then(response => response.json())
						.catch(err => console.log(err.message))
	}

	getDestinations() {
		let url = `${this.rootURL}/destinations/destinations`;
		return fetch(url)
						.then(response => response.json())
						.catch(err => console.log(err.message))
	}

	postBookingRequest(givenTrip) {
		let url = `${this.rootURL}/trips/trips`;
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(givenTrip)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err.message))
	}

	approveTrip(givenTrip) {
		let url = `${this.rootURL}/trips/updateTrip`;
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(givenTrip)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err.message))
	}

	deleteTrip(givenTrip) {
		let url = `${this.rootURL}/trips/trips`;
		return fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(givenTrip)
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err.message))
	}
}

/* harmony default export */ __webpack_exports__["default"] = (FetchCall);

/***/ }),

/***/ "./src/images/bahamas.jpg":
/*!********************************!*\
  !*** ./src/images/bahamas.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/bahamas.jpg";

/***/ }),

/***/ "./src/images/map.png":
/*!****************************!*\
  !*** ./src/images/map.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/map.png";

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/search.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_search_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/map.png */ "./src/images/map.png");
/* harmony import */ var _images_map_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_map_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_bahamas_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bahamas.jpg */ "./src/images/bahamas.jpg");
/* harmony import */ var _images_bahamas_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_bahamas_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent */ "./src/agent.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _fetchCall__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fetchCall */ "./src/fetchCall.js");











const usernameInput = document.querySelector('.username-input');
const pwdInput = document.querySelector('.pwd-input');
const agentDash = document.querySelector('.agent-dash');

let today;
let user;
let usernameID;
let allUsers;
let agent;
let trips;
let destinations;
let fetchCall;

window.addEventListener('load', fetchDate);
document.querySelector('.login-btn').addEventListener('click', () => fetchLoginUser(event));
document.querySelector('.book-trip').addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayReqForm);
document.getElementById('exit-form-btn').addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].exitForm);
document.querySelector('.btn-warning').addEventListener('click', () => findInputs(event, destinations));
document.querySelector('.clear-form').addEventListener('click', () => _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].clearForm(event));
document.querySelector('main').addEventListener('click', () => clickHandler(trips, destinations, allUsers));
document.querySelector('.search-btn').addEventListener('click', () => searchUsers(event));
document.getElementById('search').addEventListener('submit', () => searchUsers(event));
document.querySelector('.back-btn').addEventListener('click', () => _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayAgentDash(agent, destinations, today));

function fetchDate() {
	const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, '0');
  const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
  const yyyy = currentDate.getFullYear();
	today = yyyy + '/' + mm + '/' + dd;
	document.querySelector('.today').innerText = `today: ${today}`;
	fetchCall = new _fetchCall__WEBPACK_IMPORTED_MODULE_8__["default"]();
}

function fetchLoginUser(event) {
  event.preventDefault();
  const loginUser = usernameInput.value;
	const loginPwd = pwdInput.value;
	
	allUsers = fetchCall.getTravelers();
	trips = fetchCall.getTrips();
	destinations = fetchCall.getDestinations();

  return Promise.all([allUsers, trips, destinations])
    .then(response => {
			destinations = response[2].destinations;
			trips = response[1].trips;
      allUsers = response[0].travelers.map(traveler => new _traveler__WEBPACK_IMPORTED_MODULE_4__["default"](traveler, undefined, undefined, trips));
    })
    .then(() => loginHandler(loginUser, loginPwd))
		.catch(error => console.log(error))
}

function loginHandler(loginUser, loginPwd) {
  const login = new _user__WEBPACK_IMPORTED_MODULE_6__["default"](loginUser, loginPwd);
  login.authenticate();
	
  if (login.authenticated === true && login.agency) {
		agent = new _agent__WEBPACK_IMPORTED_MODULE_5__["default"](loginUser, loginPwd, trips);
		agent.updateProperties(today, trips);
    _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayAgentDash(agent, destinations, today);
  } else if (login.authenticated === true && !login.agency) {
		if (isNaN(Number(loginUser.slice(-2)))) {
			usernameID = '0' + loginUser.slice(-1);
		} else { usernameID = loginUser.slice(-2) }
    user = new _traveler__WEBPACK_IMPORTED_MODULE_4__["default"](allUsers[usernameID - 1], loginUser, loginPwd, trips);
		user.updateAllProperties(today);
		_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayUserDash(user, destinations, today);
  } else { _domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayErrorLoginMsg() }
}

function clickHandler(trips, destinations, allUsers) {
	if (event.target.className === 'information') {
		_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayTripInfo(trips, destinations, allUsers);
	} else if (event.target.id === 'exit-btn') {
		_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].closeTripInfo();
	}
	if (event.target.className === 'approve-btn') {
		const tripUpdate = {
			id: Number(event.target.closest('.trip-card').id),
			status: 'approved',
		};
		changeTripStatus(tripUpdate);
	}
	if (event.target.className === 'approve-btn search-view') {
		const foundUserID = Number(event.target.closest('.searched-user-container').id);
		const tripUpdate = {
			id: Number(event.target.closest('.trip-card').id),
			status: 'approved',
		};
		changeTripStatus(tripUpdate, foundUserID);
	}
	if (event.target.className === 'deny-btn') {
		const foundTrip = { id: Number(event.target.closest('.trip-card').id) }
		deleteTrip(foundTrip);
	}
	if (event.target.className === 'deny-btn search-view') {
		const foundUserID = Number(event.target.closest('.searched-user-container').id);
		const foundTrip = { id: Number(event.target.closest('.trip-card').id) }
		deleteTrip(foundTrip, foundUserID);
	}
	if (event.target.className === 'delete-btn') {
		const foundUserID = Number(event.target.closest('.searched-user-container').id);
		const foundTrip = { id: Number(event.target.closest('.trip-card').id) }
		deleteTrip(foundTrip, foundUserID);
	}
}

function findInputs(event, destinations) {
	event.preventDefault();
	const chosenDest = document.querySelector('.chosen-destination').value;
	const tripRequest = {
		id: Date.now(),
		userID: user.id,
		destinationID: destinations.find(dest => dest.destination === chosenDest).id,
		travelers: Number(document.querySelector('.traveler-input').value),
		date: document.querySelector('.date-picker').value,
		duration: Number(document.querySelector('.duration-input').value),
		status: 'pending',
		suggestedActivities: []
	}
	submitRequest(tripRequest);
}

function changeTripStatus(givenTrip, foundUserID) {
	fetchCall.approveTrip(givenTrip)
		.then(() => updateTripData(foundUserID))
}

function deleteTrip(givenTrip, foundUserID) {
	fetchCall.deleteTrip(givenTrip)
		.then(() => updateTripData(foundUserID))
}

function submitRequest(givenTrip) {
	fetchCall.postBookingRequest(givenTrip)
		.then(() => updatePending(destinations, givenTrip));
}

function updatePending(destinations, givenTrip) {
	const tripCost = user.findTripCost(destinations, givenTrip.destinationID, givenTrip.duration, givenTrip.travelers);
	document.querySelector('.estimated-cost').innerText = `Estimated cost: ${tripCost}`;
	updateTripData();
}

function updateTripData(foundUserID) {
	trips = fetchCall.getTrips()
	
	return Promise.resolve(trips)	
		.then(response => {
			trips = response.trips;
			if (user !== undefined) {
				user = new _traveler__WEBPACK_IMPORTED_MODULE_4__["default"](allUsers[usernameID - 1], 'traveler', 'travel2020', trips);
				user.findPendingTrips();
				document.querySelector('.pending-trips-container').innerHTML = '';
				_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayUserInfo(user, destinations, today);
			} else if (agentDash.className === 'agent-dash hide') {
				const foundUser = new _traveler__WEBPACK_IMPORTED_MODULE_4__["default"](allUsers[foundUserID - 1], undefined, undefined, trips);
				foundUser.updateAllProperties(today);
				agent.updateProperties(today, trips);
				document.getElementById(foundUserID).innerHTML = '';
				_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayAdminChange(foundUser, today, destinations);
			} else {
				agent.updateProperties(today, trips);
				document.querySelector('.revenue').innerText = '';
				document.querySelector('.request-container').innerHTML = '';
				_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displayAgentInfo(agent, destinations, today);
			}
		})
}

function searchUsers(event) {
	event.preventDefault();
	const search = document.getElementById('search-input').value.toLowerCase();
	const searchedResults = []
	allUsers.forEach(user => {
		if (user.name.toLowerCase().includes(search)) {
			user.findActiveTrips(today);
			user.findUpcomingTrips(today);
			user.findPastTrips(today);
			user.findPendingTrips();
			searchedResults.push(user);
		}
	})
	document.querySelector('.search-results-container').innerHTML = '';
	_domUpdates__WEBPACK_IMPORTED_MODULE_7__["default"].displaySearchResults(searchedResults, today, destinations);
}

/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/user.js");


class Traveler extends _user__WEBPACK_IMPORTED_MODULE_0__["default"] {
	constructor(data, username = undefined, pwd = undefined, trips) {
		super(username, pwd, true);
		this.id = data.id;
		this.name = data.name;
		this.travelerType = data.travelerType;
		this.trips = trips.filter(trip => trip.userID === this.id);
		this.activeTrips = [];
		this.upcomingTrips = [];
		this.pastTrips = [];
		this.pendingTrips = [];
	}

	updateAllProperties(today) {
		this.findActiveTrips(today);
		this.findUpcomingTrips(today);
		this.findPastTrips(today);
		this.findPendingTrips();
	}

	findActiveTrips(today) {
		const activeTrips = this.trips.filter(trip => {
			const endDate = this.addDays(trip.date, trip.duration);
			if (endDate > today && trip.date <= today) return trip
		})

		this.activeTrips = activeTrips.filter(trip => trip.status === 'approved');
	}

	addDays(date, days) {
		const endDate = new Date(date);
		endDate.setDate(endDate.getDate() + days);
		const dd = String(endDate.getDate()).padStart(2, '0');
  	const mm = String(endDate.getMonth() + 1).padStart(2, '0');
  	const yyyy = endDate.getFullYear();
		return yyyy + '/' + mm + '/' + dd;
	}

	findUpcomingTrips(today) {
		const upcomingTrips = this.trips.filter(trip => trip.date > today);

		this.upcomingTrips = upcomingTrips.filter(trip => trip.status === 'approved');
	}

	findPastTrips(today) {
		const pastTrips = this.trips.filter(trip => trip.date < today).filter(trip => trip.status === 'approved');
		this.pastTrips = pastTrips.filter(trip => !this.activeTrips.includes(trip));
	}

	findPendingTrips() {
		this.pendingTrips = this.trips.filter(trip => trip.status === 'pending');
	}

	findYearTripCost(today, destinations) {
		const yyyy = today.substring(0, 4);

		const yearTrips = this.trips.filter(trip => {
			let tYYYY = trip.date.substring(0, 4);
			if (tYYYY === yyyy) return trip;
		})

		const approvedYrTrips = yearTrips.filter(trip => trip.status === 'approved');

		const totalCost = approvedYrTrips.reduce((sum, trip) => {
			const foundTripSpec = destinations.find(spot => spot.id === trip.destinationID);
			let tripCost = (foundTripSpec.estimatedFlightCostPerPerson * trip.travelers) 
				+ (foundTripSpec.estimatedLodgingCostPerDay * trip.duration);
			tripCost += (tripCost / 10);
			sum += tripCost;

			return sum;
		}, 0);

		return `$${totalCost}`;
	}

	findTripCost(destinations, destID, durationInput, travelerInput) {
		const foundTrip = destinations.find(spot => spot.id === destID);
		const cost = (foundTrip.estimatedLodgingCostPerDay * durationInput) + (foundTrip.estimatedFlightCostPerPerson * travelerInput)
		const totalCost = cost + (cost / 10);
		return `$${totalCost}`;
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
	constructor(username, pwd, isAuthenticated = false, isAgency = false) {
		this.username = username;
		this.pwd = pwd;
		this.authenticated = isAuthenticated;
		this.agency = isAgency;
	}

	authenticate() {
		if (this.pwd === 'travel2020') {
			this.authenticated = true;
		}
		if (this.username === 'agency') {
			this.agency = true;
		}
		if (Number(this.username.slice(-2)) > 50) {
			this.authenticated = false;
		}
	}
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/YTIzOCIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2hDYWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmFoYW1hcy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9tYXAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy91c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVILGFBQWEsVUFBVTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVTtBQUN2QjtBQUNBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ3RGdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudHJhdmVsZXItZGFzaCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDNmciAzZnIgM2ZyOyB9XFxuICAudHJhdmVsZXItZGFzaCAud2VsY29tZS1iYW5uZXIsIC50cmF2ZWxlci1kYXNoIC55ci10cmlwLWNvc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6ICM3RkIzRDU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4udHJpcC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjdFMjI7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjREFGN0E2O1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTUwcHg7XFxuICBtYXgtaGVpZ2h0OiAyNDBweDtcXG4gIG1hcmdpbjogNXB4IDExcHg7XFxuICBwYWRkaW5nOiAwIDEzcHg7XFxuICB3aWR0aDogMTk1cHg7XFxuICBtaW4td2lkdGg6IDE5NXB4O1xcbiAgb3BhY2l0eTogODglO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG4gIC50cmlwLWNhcmQgaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7IH1cXG4gIC50cmlwLWNhcmQgaDQge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuICAudHJpcC1jYXJkOmhvdmVyIC5jYXJkLXBob3RvIHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbiAgICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcbiAgLnRyaXAtY2FyZDpob3ZlciAudGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgb3BhY2l0eTogMTAwJTtcXG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAudHJpcC1jYXJkOmhvdmVyIGgzIHtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNEQUY3QTY7XFxuICAgIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuICAuYnRuLWNvbnRhaW5lciAuZm9ybS1idG4ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHdpZHRoOiA5MXB4OyB9XFxuXFxuLnBvc3QtdG8tdHJpcHMge1xcbiAgY29sb3I6ICM3RkIzRDU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjRTY3RTIyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggYmxhY2s7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAzNyU7XFxuICB3aWR0aDogMzYlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogNSU7XFxuICB0b3A6IDE1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDIwOyB9XFxuXFxuI2V4aXQtZm9ybS1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgI0U2N0UyMjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjN0ZCM0Q1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTglIC0xMCUgOSUgLTclO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcbiAgI2V4aXQtZm9ybS1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjREFGN0E2O1xcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcblxcbi5jYXJkLWJvdHRvbSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpbWUgYnRuMVxcXCIgXFxcInRpbWUgYnRuMlxcXCI7IH1cXG4gIC5jYXJkLWJvdHRvbSBoNCB7XFxuICAgIGdyaWQtYXJlYTogdGltZTsgfVxcbiAgLmNhcmQtYm90dG9tIC5hcHByb3ZlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RkIzRDU7XFxuICAgIGdyaWQtYXJlYTogYnRuMTtcXG4gICAgd2lkdGg6IDY2cHg7XFxuICAgIG1hcmdpbi10b3A6IDRweDsgfVxcbiAgLmNhcmQtYm90dG9tIC5kZW55LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RkIzRDU7XFxuICAgIGdyaWQtYXJlYTogYnRuMjtcXG4gICAgd2lkdGg6IDY2cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDdweDsgfVxcbiAgLmNhcmQtYm90dG9tIC5kZWxldGUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdGQjNENTtcXG4gICAgZ3JpZC1hcmVhOiBidG4yO1xcbiAgICB3aWR0aDogNjZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4OyB9XFxuXFxuLnNlYXJjaGVkLXVzZXItY29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMzQwcHg7IH1cXG4gIC5zZWFyY2hlZC11c2VyLWNvbnRhaW5lciBoMywgLnNlYXJjaGVkLXVzZXItY29udGFpbmVyIGg0IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5zZWFyY2hlZC11c2VyLWNvbnRhaW5lciBoNCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cXG4uYmFjay1idG4ge1xcbiAgbWFyZ2luOiA1cHg7IH1cXG5cXG4ubm8tcmVzdWx0IHtcXG4gIGNvbG9yOiAjN0ZCM0Q1OyB9XFxuXFxuaDEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDM1cHg7IH1cXG5cXG4uaGVhZGVyLW1hcC1pY29uIHtcXG4gIGhlaWdodDogNXZoO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDsgfVxcblxcbi5uYXYtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgYm9yZGVyOiAwOyB9XFxuXFxuYnV0dG9uIGltZyB7XFxuICBoZWlnaHQ6IDN2aDsgfVxcblxcbi5pbmNvbWUtZ2FpbmVkIHtcXG4gIGhlaWdodDogMTV2aDtcXG4gIG1heC13aWR0aDogMzAlOyB9XFxuXFxuLnNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAycHggb3V0c2V0ICNEQUY3QTY7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDhweCA4cHg7IH1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDsgfVxcblxcbi5hZ2VudC1kYXNoIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMmZyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgbWFyZ2luLXRvcDogMiU7IH1cXG4gIC5hZ2VudC1kYXNoIHAge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmFkbWluLXRyaXAtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY3RTIyO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0RBRjdBNjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjUwcHg7XFxuICBtYXJnaW46IDVweCAxMXB4O1xcbiAgcGFkZGluZzogMCAxM3B4O1xcbiAgd2lkdGg6IDE5NXB4O1xcbiAgbWluLXdpZHRoOiAxOTVweDtcXG4gIG9wYWNpdHk6IDg4JTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuICAuYWRtaW4tdHJpcC1jYXJkIGg0IHtcXG4gICAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuLnVzZXItdHJpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICBvdmVyZmxvdy15OiBoaWRkZW47XFxuICBoZWlnaHQ6IDI2MXB4O1xcbiAgY29sb3I6ICM3RkIzRDU7IH1cXG5cXG4uZHJwLWNhbGVuZGFyIHtcXG4gIGNvbG9yOiBibGFjazsgfVxcblxcbi5sb2dpbi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogOTB2aDsgfVxcbiAgLmxvZ2luLXdyYXBwZXIgLmxvZ2luIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0RBRjdBNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdGQjNENTtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWF4LXdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDgwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMjsgfVxcbiAgICAubG9naW4td3JhcHBlciAubG9naW4gLmxvZ2luLWVycm9yIHtcXG4gICAgICBjb2xvcjogcmVkOyB9XFxuXFxuLmxvZ2luLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5mb3JtLWlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4OyB9XFxuXFxuLmxvZ2luLWJ0biB7XFxuICBtYXJnaW46IDIlIDQ1JSAyJSA0NSU7IH1cXG5cXG5pbnB1dCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAxcHggZ3JleSBzb2xpZDtcXG4gIHBhZGRpbmctbGVmdDogNXB4OyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgLmxvZ2luLXdyYXBwZXIgLmxvZ2luIHtcXG4gICAgd2lkdGg6IDg1JTtcXG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICBoZWFkZXIgaDEge1xcbiAgICBmb250LXNpemU6IDN2aDsgfVxcbiAgaGVhZGVyIC5oZWFkZXItbWFwLWljb24ge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICBoZWFkZXIgLnRvZGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgaGVhZGVyICNzZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogNTB2dzsgfVxcbiAgaGVhZGVyIC5uYXYtYnRuIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIHdpZHRoOiA0MHB4OyB9XFxuICAudHJpcC1pbmZvcm1hdGlvbiB7XFxuICAgIHdpZHRoOiA4NyU7XFxuICAgIHJpZ2h0OiAyJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgICBtYXJnaW46IC03JSAxNSUgLTElIC01JTsgfVxcbiAgI2V4aXQtYnRuIHtcXG4gICAgbWFyZ2luOiAtNyUgMTElIC0xJSAtNCU7IH1cXG4gIC5wb3N0LXRvLXRyaXBzIHtcXG4gICAgd2lkdGg6IDc4JTtcXG4gICAgdG9wOiAxOCU7IH1cXG4gICAgLnBvc3QtdG8tdHJpcHMgI2V4aXQtZm9ybS1idG4ge1xcbiAgICAgIG1hcmdpbjogLTExJSAtMTElIDklIC04JTsgfSB9XFxuXFxuLnRyaXAtaW5mb3JtYXRpb24ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjRTY3RTIyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTE1cHggYmxhY2s7XFxuICBoZWlnaHQ6IDU0JTtcXG4gIHdpZHRoOiA2NCU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxNSU7XFxuICB0b3A6IDIyJTtcXG4gIG9wYWNpdHk6IDk1JTtcXG4gIHotaW5kZXg6IDIwOyB9XFxuICAudHJpcC1pbmZvcm1hdGlvbiBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA0NCU7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCAwcHggMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDZweCBibGFjazsgfVxcbiAgLnRyaXAtaW5mb3JtYXRpb24gaDQge1xcbiAgICBjb2xvcjogIzdGQjNENTsgfVxcbiAgLnRyaXAtaW5mb3JtYXRpb24gcCB7XFxuICAgIGNvbG9yOiBibGFjazsgfVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTk7IH1cXG5cXG4jZXhpdC1idG4ge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgI0U2N0UyMjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjN0ZCM0Q1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIDExJSAtMSUgLTMlO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcbiAgI2V4aXQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogI0RBRjdBNjtcXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2U7IH1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDU7IH1cXG5cXG4uY2FyZC1waG90byB7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiA1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMTdweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4udGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjREFGN0E2O1xcbiAgb3BhY2l0eTogODAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2N0UyMjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDhweDsgfVxcblxcbm1haW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbmJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQUY3QTY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTd4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2N0UyMjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREFGN0E2OyB9XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuLmJhY2tncm91bmQtaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NyU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblxcbi5tb2RhbCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjREFGN0E2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdGQjNENTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMTVweDsgfVxcblxcbi50cmlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgbWluLWhlaWdodDogMTUwcHg7IH1cXG5cXG5oMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyJztcblxuY2xhc3MgQWdlbnQgZXh0ZW5kcyBVc2VyIHtcblx0Y29uc3RydWN0b3IodXNlcm5hbWUsIHB3ZCwgdHJpcHMpIHtcblx0XHRzdXBlcih1c2VybmFtZSwgcHdkLCB0cnVlLCB0cnVlKTtcblx0XHR0aGlzLmlkID0gMTtcblx0XHR0aGlzLnVzZXJUcmlwcyA9IHRyaXBzO1xuXHRcdHRoaXMucGVuZGluZ1RyaXBzID0gW107XG5cdFx0dGhpcy51cGNvbWluZ1RyaXBzID0gW107XG5cdFx0dGhpcy5hY3RpdmVUcmlwcyA9IFtdO1xuXHR9XG5cblx0dXBkYXRlUHJvcGVydGllcyh0b2RheSwgdHJpcHMpIHtcblx0XHR0aGlzLnVzZXJUcmlwcyA9IHRyaXBzO1xuXHRcdHRoaXMuZmluZFBlbmRpbmdUcmlwcygpO1xuXHRcdHRoaXMuZmluZEFjdGl2ZVRyaXBzKHRvZGF5KTtcblx0fVxuXG5cdGZpbmRQZW5kaW5nVHJpcHMoKSB7XG5cdFx0dGhpcy5wZW5kaW5nVHJpcHMgPSB0aGlzLnVzZXJUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcblx0fVxuXG5cdGZpbmRVcGNvbWluZ1RyaXBzKHRvZGF5KSB7XG5cdFx0Y29uc3QgdXBjb21pbmdUcmlwcyA9IHRoaXMudXNlclRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuZGF0ZSA+IHRvZGF5KTtcblxuXHRcdHRoaXMudXBjb21pbmdUcmlwcyA9IHVwY29taW5nVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpO1xuXHR9XG5cdFxuXHRmaW5kWWVhclJldmVudWUodG9kYXksIGRlc3RpbmF0aW9ucykge1xuXHRcdGNvbnN0IHl5eXkgPSB0b2RheS5zdWJzdHJpbmcoMCwgNCk7XG5cblx0XHRjb25zdCB5ZWFyVHJpcHMgPSB0aGlzLnVzZXJUcmlwcy5maWx0ZXIodHJpcCA9PiB7XG5cdFx0XHRsZXQgdFlZWVkgPSB0cmlwLmRhdGUuc3Vic3RyaW5nKDAsIDQpO1xuXHRcdFx0aWYgKHRZWVlZID09PSB5eXl5KSByZXR1cm4gdHJpcDtcblx0XHR9KVxuXG5cdFx0Y29uc3QgY29uZmlybWVkWXJUcmlwcyA9IHllYXJUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ2FwcHJvdmVkJyk7XG5cblx0XHRjb25zdCBpbmNvbWVNYWRlID0gKGNvbmZpcm1lZFlyVHJpcHMucmVkdWNlKChzdW0sIHRyaXApID0+IHtcblx0XHRcdGNvbnN0IGZvdW5kVHJpcFNwZWMgPSBkZXN0aW5hdGlvbnMuZmluZChzcG90ID0+IHNwb3QuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCk7XG5cdFx0XHRsZXQgdHJpcENvc3QgPSAoZm91bmRUcmlwU3BlYy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdHJpcC50cmF2ZWxlcnMpIFxuXHRcdFx0XHQrIChmb3VuZFRyaXBTcGVjLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdHJpcC5kdXJhdGlvbik7XG5cdFx0XHRzdW0gKz0gdHJpcENvc3Q7XG5cblx0XHRcdHJldHVybiBzdW07XG5cdFx0fSwgMCkgKiAuMSkudG9GaXhlZCgyKTtcblxuXHRcdHJldHVybiBgJCR7aW5jb21lTWFkZX1gO1xuXHR9XG5cblxuXHRmaW5kQWN0aXZlVHJpcHModG9kYXkpIHtcblx0XHRjb25zdCBhY3RpdmVUcmlwcyA9IHRoaXMudXNlclRyaXBzLmZpbHRlcih0cmlwID0+IHtcblx0XHRcdGNvbnN0IGVuZERhdGUgPSB0aGlzLmFkZERheXModHJpcC5kYXRlLCB0cmlwLmR1cmF0aW9uKTtcblx0XHRcdGlmIChlbmREYXRlID4gdG9kYXkgJiYgdHJpcC5kYXRlIDw9IHRvZGF5KSByZXR1cm4gdHJpcFxuXHRcdH0pXG5cblx0XHR0aGlzLmFjdGl2ZVRyaXBzID0gYWN0aXZlVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpO1xuXHR9XG5cblx0YWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdFx0Y29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdGVuZERhdGUuc2V0RGF0ZShlbmREYXRlLmdldERhdGUoKSArIGRheXMpO1xuXHRcdGNvbnN0IGRkID0gU3RyaW5nKGVuZERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBcdGNvbnN0IG1tID0gU3RyaW5nKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIFx0Y29uc3QgeXl5eSA9IGVuZERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRyZXR1cm4geXl5eSArICcvJyArIG1tICsgJy8nICsgZGQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWdlbnQ7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibGV0IGRvbVVwZGF0ZXMgPSB7XG4gIGRpc3BsYXlBZ2VudERhc2goYWdlbnQsIGRlc3RpbmF0aW9ucywgdG9kYXkpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4td3JhcHBlcicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWdlbnQtc2VhcmNoJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2VudC1kYXNoJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0dGhpcy5kaXNwbGF5QWdlbnRJbmZvKGFnZW50LCBkZXN0aW5hdGlvbnMsIHRvZGF5KTtcblx0fSxcblxuICBkaXNwbGF5VXNlckRhc2godXNlciwgZGVzdGluYXRpb25zLCB0b2RheSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2dpbi13cmFwcGVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2ZWxlci1kYXNoJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXRyaXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0dGhpcy5kaXNwbGF5VXNlckluZm8odXNlciwgZGVzdGluYXRpb25zLCB0b2RheSk7XG5cdH0sXG5cdFxuXHRkaXNwbGF5RXJyb3JMb2dpbk1zZygpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tZXJyb3InKS5pbm5lclRleHQgPSAnSW5jb3JyZWN0IHVzZXJuYW1lIG9yIHBhc3N3b3JkISdcblx0fSxcblxuXHRkaXNwbGF5VXNlckluZm8odXNlciwgZGVzdGluYXRpb25zLCB0b2RheSkge1xuXHRcdGNvbnN0IHllYXJDb3N0cyA9IHVzZXIuZmluZFllYXJUcmlwQ29zdCh0b2RheSwgZGVzdGluYXRpb25zKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VsY29tZS1iYW5uZXInKS5pbm5lclRleHQgPSBgV2VsY29tZSAke3VzZXIubmFtZX0hYDtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueXItdHJpcC1jb3N0JykuaW5uZXJUZXh0ID0gYCR7dG9kYXkuc3Vic3RyaW5nKDAsIDQpfSB0cmlwcyBjb3N0czogJHt5ZWFyQ29zdHN9YDtcblx0XHRsZXQgY3VycmVudFRyaXBzSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRyaXBzLWNvbnRhaW5lcicpO1xuXHRcdGxldCB1cGNvbWluZ1RyaXBzSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51cGNvbWluZy10cmlwcy1jb250YWluZXInKTtcblx0XHRsZXQgcGFzdFRyaXBzSFRNTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXN0LXRyaXBzLWNvbnRhaW5lcicpO1xuXHRcdGxldCBwZW5kaW5nVHJpcHNIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBlbmRpbmctdHJpcHMtY29udGFpbmVyJyk7XG5cdFx0dGhpcy5nZW5lcmF0ZVRyaXBDYXJkcyhjdXJyZW50VHJpcHNIVE1MLCB1c2VyLmFjdGl2ZVRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVUcmlwQ2FyZHModXBjb21pbmdUcmlwc0hUTUwsIHVzZXIudXBjb21pbmdUcmlwcywgZGVzdGluYXRpb25zKTtcblx0XHR0aGlzLmdlbmVyYXRlVHJpcENhcmRzKHBhc3RUcmlwc0hUTUwsIHVzZXIucGFzdFRyaXBzLCBkZXN0aW5hdGlvbnMpO1xuXHRcdHRoaXMuZ2VuZXJhdGVUcmlwQ2FyZHMocGVuZGluZ1RyaXBzSFRNTCwgdXNlci5wZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG5cdH0sXG5cblx0ZGlzcGxheUFnZW50SW5mbyhhZ2VudCwgZGVzdGluYXRpb25zLCB0b2RheSkge1xuXHRcdGNvbnN0IHllYXJSZXZlbnVlID0gYWdlbnQuZmluZFllYXJSZXZlbnVlKHRvZGF5LCBkZXN0aW5hdGlvbnMpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXZlbnVlJykuaW5uZXJUZXh0ID0gYCR7dG9kYXkuc3Vic3RyaW5nKDAsIDQpfSBjdXJyZW50IHJldmVudWU6ICR7eWVhclJldmVudWV9YDtcblx0XHRsZXQgcmVxdWVzdHNIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3QtY29udGFpbmVyJyk7XG5cdFx0bGV0IGN1cnJlbnRUcmlwc0hUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXRyaXBzLWNvbnRhaW5lcicpO1xuXHRcdHRoaXMuZ2VuZXJhdGVQZW5kUmVxdWVzdHMocmVxdWVzdHNIVE1MLCBhZ2VudC5wZW5kaW5nVHJpcHMsIGRlc3RpbmF0aW9ucyk7XG5cdFx0dGhpcy5nZW5lcmF0ZVRyaXBDYXJkcyhjdXJyZW50VHJpcHNIVE1MLCBhZ2VudC5hY3RpdmVUcmlwcywgZGVzdGluYXRpb25zKTtcblx0fSxcblxuXHRnZW5lcmF0ZVRyaXBDYXJkcyhlbGVtZW50Q29udGFpbmVyLCB0cmlwQXJyYXksIGRlc3RpbmF0aW9ucykge1xuXHRcdHRyaXBBcnJheS5mb3JFYWNoKHRyaXAgPT4ge1xuXHRcdFx0bGV0IGZvdW5kRGVzdFNwZWMgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0ID0+IGRlc3QuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCk7XG5cdFx0XHRsZXQgY2FyZEh0bWwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPSd0cmlwLWNhcmQnIGlkPSR7dHJpcC5pZH0+XG5cdFx0XHRcdDxoMz4ke2ZvdW5kRGVzdFNwZWMuZGVzdGluYXRpb259PC9oMz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1waG90by1jb250YWluZXInPlxuXHRcdFx0XHRcdDxpbWcgc3JjPSR7Zm91bmREZXN0U3BlYy5pbWFnZX0gY2xhc3M9J2NhcmQtcGhvdG8nIGFsdD0nJHtmb3VuZERlc3RTcGVjLmFsdH0nPiBcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgIFx0PGRpdiBjbGFzcz1cImluZm9ybWF0aW9uXCI+Q2xpY2sgZm9yIERldGFpbHM8L2Rpdj5cbiAgICAgICAgXHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoND5EYXRlOiAke3RyaXAuZGF0ZX0sIER1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259IGRheXM8L2g0PlxuXHRcdFx0PC9kaXY+YDtcblx0XHRcdGVsZW1lbnRDb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjYXJkSHRtbCk7XG5cdFx0fSlcblx0fSxcblxuXHRnZW5lcmF0ZVBlbmRSZXF1ZXN0cyhlbGVtZW50Q29udGFpbmVyLCB0cmlwQXJyYXksIGRlc3RpbmF0aW9ucykge1xuXHRcdHRyaXBBcnJheS5mb3JFYWNoKHRyaXAgPT4ge1xuXHRcdFx0bGV0IGZvdW5kRGVzdFNwZWMgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0ID0+IGRlc3QuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCk7XG5cdFx0XHRsZXQgY2FyZEh0bWwgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPSd0cmlwLWNhcmQnIGlkPSR7dHJpcC5pZH0+XG5cdFx0XHRcdDxoMz4ke2ZvdW5kRGVzdFNwZWMuZGVzdGluYXRpb259PC9oMz5cblx0XHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1waG90by1jb250YWluZXInPlxuXHRcdFx0XHRcdDxpbWcgc3JjPSR7Zm91bmREZXN0U3BlYy5pbWFnZX0gY2xhc3M9J2NhcmQtcGhvdG8nIGFsdD0nJHtmb3VuZERlc3RTcGVjLmFsdH0nPiBcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgIFx0PGRpdiBjbGFzcz1cImluZm9ybWF0aW9uXCI+Q2xpY2sgZm9yIERldGFpbHM8L2Rpdj5cbiAgICAgICAgXHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtYm90dG9tJz5cblx0XHRcdFx0XHQ8aDQ+RGF0ZTogJHt0cmlwLmRhdGV9LCBEdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufSBkYXlzPC9oND5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJhcHByb3ZlXCIgY2xhc3M9J2FwcHJvdmUtYnRuJz5BcHByb3ZlPC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVueVwiIGNsYXNzPSdkZW55LWJ0bic+RGVueTwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PmA7XG5cdFx0XHRlbGVtZW50Q29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY2FyZEh0bWwpO1xuXHRcdH0pXG5cdH0sXG5cblx0ZGlzcGxheVJlcUZvcm0oKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvc3QtdG8tdHJpcHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob3Nlbi1kZXN0aW5hdGlvbicpLnZhbHVlID0gJ0xpbWEsIFBlcnUnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2ZWxlci1pbnB1dCcpLnZhbHVlID0gJyc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyJykudmFsdWUgPSAnJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVyYXRpb24taW5wdXQnKS52YWx1ZSA9ICcnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc3RpbWF0ZWQtY29zdCcpLmlubmVyVGV4dCA9ICcnO1xuXHR9LFxuXG5cdGV4aXRGb3JtKCkge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3N0LXRvLXRyaXBzJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXHR9LFxuXG5cdGRpc3BsYXlUcmlwSW5mbyh0cmlwcywgZGVzdGluYXRpb25zLCBhbGxVc2Vycykge1xuXHRcdGxldCB0cmlwSW5mb0hUTUwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1pbmZvcm1hdGlvbicpO1xuXHRcdHRyaXBJbmZvSFRNTC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0Y29uc3QgdHJpcElEID0gTnVtYmVyKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudHJpcC1jYXJkJykuaWQpO1xuXHRcdGNvbnN0IGZvdW5kVHJpcCA9IHRyaXBzLmZpbmQodHJpcCA9PiB0cmlwLmlkID09PSB0cmlwSUQpO1xuXHRcdGNvbnN0IGZvdW5kRGVzdCA9IGRlc3RpbmF0aW9ucy5maW5kKHNwb3QgPT4gc3BvdC5pZCA9PT0gZm91bmRUcmlwLmRlc3RpbmF0aW9uSUQpO1xuXHRcdGNvbnN0IGZvdW5kVXNlciA9IGFsbFVzZXJzLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSBmb3VuZFRyaXAudXNlcklEKTtcblx0XHR0cmlwSW5mb0hUTUwuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgXCI8c2VjdGlvbiBpZD0nb3ZlcmxheSc+PC9kaXY+XCIpO1xuXHRcdGxldCB0cmlwSW5mbyA9IGBcblx0XHRcdDxidXR0b24gaWQ9XCJleGl0LWJ0blwiPlg8L2J1dHRvbj5cblx0XHRcdDxoMyBpZD0ndHJpcC10aXRsZSc+JHtmb3VuZERlc3QuZGVzdGluYXRpb259IFRyaXA8L2gzPlxuXHRcdFx0PGg0PkJvb2tlZCBBY2NvdW50PC9oND5cblx0XHRcdDxwPiR7Zm91bmRVc2VyLm5hbWV9PC9wPlxuXHRcdFx0PGg0PlRyYXZlbGVycyBvbiBUcmlwPC9oND5cblx0XHRcdDxwPiR7Zm91bmRUcmlwLnRyYXZlbGVyc308L3A+XG5cdFx0XHQ8aDQ+VHJpcCBsZW5ndGg8L2g0PlxuXHRcdFx0PHA+U3RhcnRzICR7Zm91bmRUcmlwLmRhdGV9LCBsYXN0cyAke2ZvdW5kVHJpcC5kdXJhdGlvbn0gZGF5cy48L3A+XG5cdFx0XHQ8aDQ+TG9kZ2luZyBDb3N0czwvaDQ+XG5cdFx0XHQ8cD4kJHtmb3VuZERlc3QuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXl9IHBlciBkYXksIGZvciAke2ZvdW5kVHJpcC5kdXJhdGlvbn0gZGF5cy48L3A+XG5cdFx0XHQ8aDQ+RmxpZ2h0IENvc3Q8L2g0PlxuXHRcdFx0PHA+JCR7Zm91bmREZXN0LmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb259IHBlciBwZXJzb24sIGZvciAke2ZvdW5kVHJpcC50cmF2ZWxlcnN9IHRyYXZlbGVycy48L3A+YFxuXHRcdHRyaXBJbmZvSFRNTC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRyaXBJbmZvKTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJpcC10aXRsZScpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtmb3VuZERlc3QuaW1hZ2V9KWA7XG5cdH0sXG5cblx0Y2xvc2VUcmlwSW5mbygpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1pbmZvcm1hdGlvbicpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJpcC1pbmZvcm1hdGlvbicpLmlubmVySFRNTCA9ICcnO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JykucmVtb3ZlKCk7XG5cdH0sXG5cblx0Y2xlYXJGb3JtKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9zZW4tZGVzdGluYXRpb24nKS52YWx1ZSA9ICcnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmF2ZWxlci1pbnB1dCcpLnZhbHVlID0gJyc7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyJykudmFsdWUgPSAnJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVyYXRpb24taW5wdXQnKS52YWx1ZSA9ICcnO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lc3RpbWF0ZWQtY29zdCcpLmlubmVyVGV4dCA9ICcnO1xuXHR9LFxuXG5cdGRpc3BsYXlTZWFyY2hSZXN1bHRzKHNlYXJjaGVkUmVzdWx0cywgdG9kYXksIGRlc3RpbmF0aW9ucykge1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2VudC1kYXNoJykuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2VudC1zZWFyY2gnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cdFx0XG5cdFx0aWYgKHNlYXJjaGVkUmVzdWx0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdGxldCB1c2VyU2VjdGlvbiA9IGA8cCBjbGFzcz0nbm8tcmVzdWx0Jz5ObyByZXN1bHRzPC9wPmBcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0cy1jb250YWluZXInKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHVzZXJTZWN0aW9uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2VhcmNoZWRSZXN1bHRzLmZvckVhY2godXNlclJlc3VsdCA9PiB7XG5cdFx0XHRcdGNvbnN0IHllYXJQdXJjaGFzZXMgPSB1c2VyUmVzdWx0LmZpbmRZZWFyVHJpcENvc3QodG9kYXksIGRlc3RpbmF0aW9ucyk7XG5cdFx0XHRcdGxldCB1c2VyUGVuZGluZ1RyaXBzID0gdGhpcy5pbnRlcnBvbGF0ZVBlbmRpbmdUcmlwcyh1c2VyUmVzdWx0LnBlbmRpbmdUcmlwcywgZGVzdGluYXRpb25zKTtcblx0XHRcdFx0bGV0IHVzZXJVcGNvbWluZ1RyaXBzID0gdGhpcy5pbnRlcnBvbGF0ZVVwY29taW5nVHJpcHModXNlclJlc3VsdC51cGNvbWluZ1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuXHRcdFx0XHRsZXQgdXNlckFjdGl2ZVRyaXBzID0gdGhpcy5pbnRlcnBvbGF0ZU90aGVyVHJpcHModXNlclJlc3VsdC5hY3RpdmVUcmlwcywgJ2FjdGl2ZScsIGRlc3RpbmF0aW9ucyk7XG5cdFx0XHRcdGxldCB1c2VyUGFzdFRyaXBzID0gdGhpcy5pbnRlcnBvbGF0ZU90aGVyVHJpcHModXNlclJlc3VsdC5wYXN0VHJpcHMsICdwYXN0JywgZGVzdGluYXRpb25zKTtcblxuXHRcdFx0XHRsZXQgdXNlclNlY3Rpb24gPSBgXG5cdFx0XHRcdDxzZWN0aW9uIGNsYXNzPSdzZWFyY2hlZC11c2VyLWNvbnRhaW5lciBtb2RhbCcgaWQ9JHt1c2VyUmVzdWx0LmlkfT5cblx0XHRcdFx0XHQ8aDM+JHt1c2VyUmVzdWx0Lm5hbWV9PC9oMz5cblx0XHRcdFx0XHQ8aDQ+JHt0b2RheS5zdWJzdHJpbmcoMCwgNCl9IFRyYXZlbCBUcmFja2VyIGV4cGVuc2VzOiAke3llYXJQdXJjaGFzZXN9PC9oND5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPSd1c2VyLXRyaXBzLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0XHQke3VzZXJQZW5kaW5nVHJpcHN9XG5cdFx0XHRcdFx0XHQke3VzZXJVcGNvbWluZ1RyaXBzfVxuXHRcdFx0XHRcdFx0JHt1c2VyQWN0aXZlVHJpcHN9XG5cdFx0XHRcdFx0XHQke3VzZXJQYXN0VHJpcHN9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc2VjdGlvbj5gO1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdHMtY29udGFpbmVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB1c2VyU2VjdGlvbik7XG5cdFx0XHR9KVxuXHRcdH1cblx0fSxcblxuXHRkaXNwbGF5QWRtaW5DaGFuZ2UoZm91bmRVc2VyLCB0b2RheSwgZGVzdGluYXRpb25zKSB7XG5cdFx0Y29uc3QgeWVhclB1cmNoYXNlcyA9IGZvdW5kVXNlci5maW5kWWVhclRyaXBDb3N0KHRvZGF5LCBkZXN0aW5hdGlvbnMpO1xuXHRcdGxldCB1c2VyUGVuZGluZ1RyaXBzID0gdGhpcy5pbnRlcnBvbGF0ZVBlbmRpbmdUcmlwcyhmb3VuZFVzZXIucGVuZGluZ1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuXHRcdGxldCB1c2VyVXBjb21pbmdUcmlwcyA9IHRoaXMuaW50ZXJwb2xhdGVVcGNvbWluZ1RyaXBzKGZvdW5kVXNlci51cGNvbWluZ1RyaXBzLCBkZXN0aW5hdGlvbnMpO1xuXHRcdGxldCB1c2VyQWN0aXZlVHJpcHMgPSB0aGlzLmludGVycG9sYXRlT3RoZXJUcmlwcyhmb3VuZFVzZXIuYWN0aXZlVHJpcHMsICdhY3RpdmUnLCBkZXN0aW5hdGlvbnMpO1xuXHRcdGxldCB1c2VyUGFzdFRyaXBzID0gdGhpcy5pbnRlcnBvbGF0ZU90aGVyVHJpcHMoZm91bmRVc2VyLnBhc3RUcmlwcywgJ3Bhc3QnLCBkZXN0aW5hdGlvbnMpO1xuXG5cdFx0bGV0IHVzZXJTZWN0aW9uID0gYFxuXHRcdDxoMz4ke2ZvdW5kVXNlci5uYW1lfTwvaDM+XG5cdFx0PGg0PiR7dG9kYXkuc3Vic3RyaW5nKDAsIDQpfSBUcmF2ZWwgVHJhY2tlciBleHBlbnNlczogJHt5ZWFyUHVyY2hhc2VzfTwvaDQ+XG5cdFx0PGRpdiBjbGFzcz0ndXNlci10cmlwcy1jb250YWluZXInPlxuXHRcdFx0JHt1c2VyUGVuZGluZ1RyaXBzfVxuXHRcdFx0JHt1c2VyVXBjb21pbmdUcmlwc31cblx0XHRcdCR7dXNlckFjdGl2ZVRyaXBzfVxuXHRcdFx0JHt1c2VyUGFzdFRyaXBzfVxuXHRcdDwvZGl2PmBcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3VuZFVzZXIuaWQpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdXNlclNlY3Rpb24pO1xuXHR9LFxuXG5cdGludGVycG9sYXRlUGVuZGluZ1RyaXBzKGdpdmVuQXJyYXksIGRlc3RpbmF0aW9ucykge1xuXHRcdHJldHVybiBnaXZlbkFycmF5Lm1hcCh0cmlwID0+IHtcblx0XHRcdGxldCBmb3VuZERlc3RTcGVjID0gZGVzdGluYXRpb25zLmZpbmQoZGVzdCA9PiBkZXN0LmlkID09PSB0cmlwLmRlc3RpbmF0aW9uSUQpO1xuXHRcdFx0cmV0dXJuIGBcblx0XHRcdDxkaXYgY2xhc3M9J2FkbWluLXRyaXAtY2FyZCB0cmlwLWNhcmQnIGlkPSR7dHJpcC5pZH0+XG5cdFx0XHRcdDxoMz4ke2ZvdW5kRGVzdFNwZWMuZGVzdGluYXRpb259PC9oMz5cblx0XHRcdFx0PGg0PltwZW5kaW5nXTwvaDQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtcGhvdG8tY29udGFpbmVyJz5cblx0XHRcdFx0XHQ8aW1nIHNyYz0ke2ZvdW5kRGVzdFNwZWMuaW1hZ2V9IGNsYXNzPSdjYXJkLXBob3RvJyBhbHQ9JyR7Zm91bmREZXN0U3BlYy5hbHR9Jz4gXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPkNsaWNrIGZvciBEZXRhaWxzPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWJvdHRvbSc+XG5cdFx0XHRcdFx0PGg0PkRhdGU6ICR7dHJpcC5kYXRlfSwgRHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn0gZGF5czwvaDQ+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYXBwcm92ZVwiIGNsYXNzPSdhcHByb3ZlLWJ0biBzZWFyY2gtdmlldyc+QXBwcm92ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImRlbnlcIiBjbGFzcz0nZGVueS1idG4gc2VhcmNoLXZpZXcnPkRlbnk8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5gXG5cdFx0fSlcblx0fSxcblxuXHRpbnRlcnBvbGF0ZVVwY29taW5nVHJpcHMoZ2l2ZW5BcnJheSwgZGVzdGluYXRpb25zKSB7XG5cdFx0cmV0dXJuIGdpdmVuQXJyYXkubWFwKHRyaXAgPT4ge1xuXHRcdFx0bGV0IGZvdW5kRGVzdFNwZWMgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0ID0+IGRlc3QuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCk7XG5cdFx0XHRyZXR1cm4gYFxuXHRcdFx0PGRpdiBjbGFzcz0nYWRtaW4tdHJpcC1jYXJkIHRyaXAtY2FyZCcgaWQ9JHt0cmlwLmlkfT5cblx0XHRcdFx0PGgzPiR7Zm91bmREZXN0U3BlYy5kZXN0aW5hdGlvbn08L2gzPlxuXHRcdFx0XHQ8aDQ+W3VwY29taW5nXTwvaDQ+XG5cdFx0XHRcdDxkaXYgY2xhc3M9J2NhcmQtcGhvdG8tY29udGFpbmVyJz5cblx0XHRcdFx0XHQ8aW1nIHNyYz0ke2ZvdW5kRGVzdFNwZWMuaW1hZ2V9IGNsYXNzPSdjYXJkLXBob3RvJyBhbHQ9JyR7Zm91bmREZXN0U3BlYy5hbHR9Jz4gXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPkNsaWNrIGZvciBEZXRhaWxzPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLWJvdHRvbSc+XG5cdFx0XHRcdFx0PGg0PkRhdGU6ICR7dHJpcC5kYXRlfSwgRHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn0gZGF5czwvaDQ+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiZGVsZXRlXCIgY2xhc3M9J2RlbGV0ZS1idG4nPkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PmBcblx0XHR9KVxuXHR9LFxuXG5cdGludGVycG9sYXRlT3RoZXJUcmlwcyhnaXZlbkFycmF5LCB0eXBlLCBkZXN0aW5hdGlvbnMpIHtcblx0XHRyZXR1cm4gZ2l2ZW5BcnJheS5tYXAodHJpcCA9PiB7XG5cdFx0XHRsZXQgZm91bmREZXN0U3BlYyA9IGRlc3RpbmF0aW9ucy5maW5kKGRlc3QgPT4gZGVzdC5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKTtcblx0XHRcdHJldHVybiBgXG5cdFx0XHQ8ZGl2IGNsYXNzPSdhZG1pbi10cmlwLWNhcmQgdHJpcC1jYXJkJyBpZD0ke3RyaXAuaWR9PlxuXHRcdFx0XHQ8aDM+JHtmb3VuZERlc3RTcGVjLmRlc3RpbmF0aW9ufTwvaDM+XG5cdFx0XHRcdDxoND5bJHt0eXBlfV08L2g0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPSdjYXJkLXBob3RvLWNvbnRhaW5lcic+XG5cdFx0XHRcdFx0PGltZyBzcmM9JHtmb3VuZERlc3RTcGVjLmltYWdlfSBjbGFzcz0nY2FyZC1waG90bycgYWx0PScke2ZvdW5kRGVzdFNwZWMuYWx0fSc+IFxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5DbGljayBmb3IgRGV0YWlsczwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz0nY2FyZC1ib3R0b20nPlxuXHRcdFx0XHRcdDxoND5EYXRlOiAke3RyaXAuZGF0ZX0sIER1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259IGRheXM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PmBcblx0XHR9KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7IiwiY2xhc3MgRmV0Y2hDYWxsIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yb290VVJMID0gJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS90cmF2ZWwtdHJhY2tlci9kYXRhJztcblx0fVxuXG5cdGdldFRyYXZlbGVycygpIHtcblx0XHRsZXQgdXJsID0gYCR7dGhpcy5yb290VVJMfS90cmF2ZWxlcnMvdHJhdmVsZXJzYDtcblx0XHRyZXR1cm4gZmV0Y2godXJsKVxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuXHRcdFx0XHRcdFx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXG5cdH1cblxuXHRnZXRUcmlwcygpIHtcblx0XHRsZXQgdXJsID0gYCR7dGhpcy5yb290VVJMfS90cmlwcy90cmlwc2A7XG5cdFx0cmV0dXJuIGZldGNoKHVybClcblx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHRcdFx0XHRcdC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKVxuXHR9XG5cblx0Z2V0RGVzdGluYXRpb25zKCkge1xuXHRcdGxldCB1cmwgPSBgJHt0aGlzLnJvb3RVUkx9L2Rlc3RpbmF0aW9ucy9kZXN0aW5hdGlvbnNgO1xuXHRcdHJldHVybiBmZXRjaCh1cmwpXG5cdFx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0XHRcdFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSlcblx0fVxuXG5cdHBvc3RCb29raW5nUmVxdWVzdChnaXZlblRyaXApIHtcblx0XHRsZXQgdXJsID0gYCR7dGhpcy5yb290VVJMfS90cmlwcy90cmlwc2A7XG5cdFx0cmV0dXJuIGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShnaXZlblRyaXApXG5cdFx0fSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcblx0XHRcdC50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXG5cdFx0XHQuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSlcblx0fVxuXG5cdGFwcHJvdmVUcmlwKGdpdmVuVHJpcCkge1xuXHRcdGxldCB1cmwgPSBgJHt0aGlzLnJvb3RVUkx9L3RyaXBzL3VwZGF0ZVRyaXBgO1xuXHRcdHJldHVybiBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZ2l2ZW5UcmlwKVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdFx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXG5cdH1cblxuXHRkZWxldGVUcmlwKGdpdmVuVHJpcCkge1xuXHRcdGxldCB1cmwgPSBgJHt0aGlzLnJvb3RVUkx9L3RyaXBzL3RyaXBzYDtcblx0XHRyZXR1cm4gZmV0Y2godXJsLCB7XG5cdFx0XHRtZXRob2Q6ICdERUxFVEUnLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoZ2l2ZW5UcmlwKVxuXHRcdH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG5cdFx0XHQudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXHRcdFx0LmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hDYWxsOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvYmFoYW1hcy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL21hcC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3NlYXJjaC5wbmdcIjsiLCJpbXBvcnQgJy4vaW1hZ2VzL3NlYXJjaC5wbmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9tYXAucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYmFoYW1hcy5qcGcnO1xuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi90cmF2ZWxlcic7XG5pbXBvcnQgQWdlbnQgZnJvbSAnLi9hZ2VudCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJztcbmltcG9ydCBGZXRjaENhbGwgZnJvbSAnLi9mZXRjaENhbGwnO1xuXG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXJuYW1lLWlucHV0Jyk7XG5jb25zdCBwd2RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wd2QtaW5wdXQnKTtcbmNvbnN0IGFnZW50RGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2VudC1kYXNoJyk7XG5cbmxldCB0b2RheTtcbmxldCB1c2VyO1xubGV0IHVzZXJuYW1lSUQ7XG5sZXQgYWxsVXNlcnM7XG5sZXQgYWdlbnQ7XG5sZXQgdHJpcHM7XG5sZXQgZGVzdGluYXRpb25zO1xubGV0IGZldGNoQ2FsbDtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmZXRjaERhdGUpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZmV0Y2hMb2dpblVzZXIoZXZlbnQpKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXRyaXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMuZGlzcGxheVJlcUZvcm0pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4aXQtZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMuZXhpdEZvcm0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi13YXJuaW5nJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBmaW5kSW5wdXRzKGV2ZW50LCBkZXN0aW5hdGlvbnMpKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLmNsZWFyRm9ybShldmVudCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xpY2tIYW5kbGVyKHRyaXBzLCBkZXN0aW5hdGlvbnMsIGFsbFVzZXJzKSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2VhcmNoVXNlcnMoZXZlbnQpKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiBzZWFyY2hVc2VycyhldmVudCkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2stYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLmRpc3BsYXlBZ2VudERhc2goYWdlbnQsIGRlc3RpbmF0aW9ucywgdG9kYXkpKTtcblxuZnVuY3Rpb24gZmV0Y2hEYXRlKCkge1xuXHRjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRkID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgbW0gPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IHl5eXkgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuXHR0b2RheSA9IHl5eXkgKyAnLycgKyBtbSArICcvJyArIGRkO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kYXknKS5pbm5lclRleHQgPSBgdG9kYXk6ICR7dG9kYXl9YDtcblx0ZmV0Y2hDYWxsID0gbmV3IEZldGNoQ2FsbCgpO1xufVxuXG5mdW5jdGlvbiBmZXRjaExvZ2luVXNlcihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBsb2dpblVzZXIgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuXHRjb25zdCBsb2dpblB3ZCA9IHB3ZElucHV0LnZhbHVlO1xuXHRcblx0YWxsVXNlcnMgPSBmZXRjaENhbGwuZ2V0VHJhdmVsZXJzKCk7XG5cdHRyaXBzID0gZmV0Y2hDYWxsLmdldFRyaXBzKCk7XG5cdGRlc3RpbmF0aW9ucyA9IGZldGNoQ2FsbC5nZXREZXN0aW5hdGlvbnMoKTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGwoW2FsbFVzZXJzLCB0cmlwcywgZGVzdGluYXRpb25zXSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRkZXN0aW5hdGlvbnMgPSByZXNwb25zZVsyXS5kZXN0aW5hdGlvbnM7XG5cdFx0XHR0cmlwcyA9IHJlc3BvbnNlWzFdLnRyaXBzO1xuICAgICAgYWxsVXNlcnMgPSByZXNwb25zZVswXS50cmF2ZWxlcnMubWFwKHRyYXZlbGVyID0+IG5ldyBUcmF2ZWxlcih0cmF2ZWxlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRyaXBzKSk7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBsb2dpbkhhbmRsZXIobG9naW5Vc2VyLCBsb2dpblB3ZCkpXG5cdFx0LmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbn1cblxuZnVuY3Rpb24gbG9naW5IYW5kbGVyKGxvZ2luVXNlciwgbG9naW5Qd2QpIHtcbiAgY29uc3QgbG9naW4gPSBuZXcgVXNlcihsb2dpblVzZXIsIGxvZ2luUHdkKTtcbiAgbG9naW4uYXV0aGVudGljYXRlKCk7XG5cdFxuICBpZiAobG9naW4uYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJiBsb2dpbi5hZ2VuY3kpIHtcblx0XHRhZ2VudCA9IG5ldyBBZ2VudChsb2dpblVzZXIsIGxvZ2luUHdkLCB0cmlwcyk7XG5cdFx0YWdlbnQudXBkYXRlUHJvcGVydGllcyh0b2RheSwgdHJpcHMpO1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFnZW50RGFzaChhZ2VudCwgZGVzdGluYXRpb25zLCB0b2RheSk7XG4gIH0gZWxzZSBpZiAobG9naW4uYXV0aGVudGljYXRlZCA9PT0gdHJ1ZSAmJiAhbG9naW4uYWdlbmN5KSB7XG5cdFx0aWYgKGlzTmFOKE51bWJlcihsb2dpblVzZXIuc2xpY2UoLTIpKSkpIHtcblx0XHRcdHVzZXJuYW1lSUQgPSAnMCcgKyBsb2dpblVzZXIuc2xpY2UoLTEpO1xuXHRcdH0gZWxzZSB7IHVzZXJuYW1lSUQgPSBsb2dpblVzZXIuc2xpY2UoLTIpIH1cbiAgICB1c2VyID0gbmV3IFRyYXZlbGVyKGFsbFVzZXJzW3VzZXJuYW1lSUQgLSAxXSwgbG9naW5Vc2VyLCBsb2dpblB3ZCwgdHJpcHMpO1xuXHRcdHVzZXIudXBkYXRlQWxsUHJvcGVydGllcyh0b2RheSk7XG5cdFx0ZG9tVXBkYXRlcy5kaXNwbGF5VXNlckRhc2godXNlciwgZGVzdGluYXRpb25zLCB0b2RheSk7XG4gIH0gZWxzZSB7IGRvbVVwZGF0ZXMuZGlzcGxheUVycm9yTG9naW5Nc2coKSB9XG59XG5cbmZ1bmN0aW9uIGNsaWNrSGFuZGxlcih0cmlwcywgZGVzdGluYXRpb25zLCBhbGxVc2Vycykge1xuXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2luZm9ybWF0aW9uJykge1xuXHRcdGRvbVVwZGF0ZXMuZGlzcGxheVRyaXBJbmZvKHRyaXBzLCBkZXN0aW5hdGlvbnMsIGFsbFVzZXJzKTtcblx0fSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdleGl0LWJ0bicpIHtcblx0XHRkb21VcGRhdGVzLmNsb3NlVHJpcEluZm8oKTtcblx0fVxuXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FwcHJvdmUtYnRuJykge1xuXHRcdGNvbnN0IHRyaXBVcGRhdGUgPSB7XG5cdFx0XHRpZDogTnVtYmVyKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudHJpcC1jYXJkJykuaWQpLFxuXHRcdFx0c3RhdHVzOiAnYXBwcm92ZWQnLFxuXHRcdH07XG5cdFx0Y2hhbmdlVHJpcFN0YXR1cyh0cmlwVXBkYXRlKTtcblx0fVxuXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2FwcHJvdmUtYnRuIHNlYXJjaC12aWV3Jykge1xuXHRcdGNvbnN0IGZvdW5kVXNlcklEID0gTnVtYmVyKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VhcmNoZWQtdXNlci1jb250YWluZXInKS5pZCk7XG5cdFx0Y29uc3QgdHJpcFVwZGF0ZSA9IHtcblx0XHRcdGlkOiBOdW1iZXIoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50cmlwLWNhcmQnKS5pZCksXG5cdFx0XHRzdGF0dXM6ICdhcHByb3ZlZCcsXG5cdFx0fTtcblx0XHRjaGFuZ2VUcmlwU3RhdHVzKHRyaXBVcGRhdGUsIGZvdW5kVXNlcklEKTtcblx0fVxuXHRpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbnktYnRuJykge1xuXHRcdGNvbnN0IGZvdW5kVHJpcCA9IHsgaWQ6IE51bWJlcihldmVudC50YXJnZXQuY2xvc2VzdCgnLnRyaXAtY2FyZCcpLmlkKSB9XG5cdFx0ZGVsZXRlVHJpcChmb3VuZFRyaXApO1xuXHR9XG5cdGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnZGVueS1idG4gc2VhcmNoLXZpZXcnKSB7XG5cdFx0Y29uc3QgZm91bmRVc2VySUQgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWFyY2hlZC11c2VyLWNvbnRhaW5lcicpLmlkKTtcblx0XHRjb25zdCBmb3VuZFRyaXAgPSB7IGlkOiBOdW1iZXIoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50cmlwLWNhcmQnKS5pZCkgfVxuXHRcdGRlbGV0ZVRyaXAoZm91bmRUcmlwLCBmb3VuZFVzZXJJRCk7XG5cdH1cblx0aWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdkZWxldGUtYnRuJykge1xuXHRcdGNvbnN0IGZvdW5kVXNlcklEID0gTnVtYmVyKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2VhcmNoZWQtdXNlci1jb250YWluZXInKS5pZCk7XG5cdFx0Y29uc3QgZm91bmRUcmlwID0geyBpZDogTnVtYmVyKGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudHJpcC1jYXJkJykuaWQpIH1cblx0XHRkZWxldGVUcmlwKGZvdW5kVHJpcCwgZm91bmRVc2VySUQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbnB1dHMoZXZlbnQsIGRlc3RpbmF0aW9ucykge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBjaG9zZW5EZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob3Nlbi1kZXN0aW5hdGlvbicpLnZhbHVlO1xuXHRjb25zdCB0cmlwUmVxdWVzdCA9IHtcblx0XHRpZDogRGF0ZS5ub3coKSxcblx0XHR1c2VySUQ6IHVzZXIuaWQsXG5cdFx0ZGVzdGluYXRpb25JRDogZGVzdGluYXRpb25zLmZpbmQoZGVzdCA9PiBkZXN0LmRlc3RpbmF0aW9uID09PSBjaG9zZW5EZXN0KS5pZCxcblx0XHR0cmF2ZWxlcnM6IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhdmVsZXItaW5wdXQnKS52YWx1ZSksXG5cdFx0ZGF0ZTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtcGlja2VyJykudmFsdWUsXG5cdFx0ZHVyYXRpb246IE51bWJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVyYXRpb24taW5wdXQnKS52YWx1ZSksXG5cdFx0c3RhdHVzOiAncGVuZGluZycsXG5cdFx0c3VnZ2VzdGVkQWN0aXZpdGllczogW11cblx0fVxuXHRzdWJtaXRSZXF1ZXN0KHRyaXBSZXF1ZXN0KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVHJpcFN0YXR1cyhnaXZlblRyaXAsIGZvdW5kVXNlcklEKSB7XG5cdGZldGNoQ2FsbC5hcHByb3ZlVHJpcChnaXZlblRyaXApXG5cdFx0LnRoZW4oKCkgPT4gdXBkYXRlVHJpcERhdGEoZm91bmRVc2VySUQpKVxufVxuXG5mdW5jdGlvbiBkZWxldGVUcmlwKGdpdmVuVHJpcCwgZm91bmRVc2VySUQpIHtcblx0ZmV0Y2hDYWxsLmRlbGV0ZVRyaXAoZ2l2ZW5UcmlwKVxuXHRcdC50aGVuKCgpID0+IHVwZGF0ZVRyaXBEYXRhKGZvdW5kVXNlcklEKSlcbn1cblxuZnVuY3Rpb24gc3VibWl0UmVxdWVzdChnaXZlblRyaXApIHtcblx0ZmV0Y2hDYWxsLnBvc3RCb29raW5nUmVxdWVzdChnaXZlblRyaXApXG5cdFx0LnRoZW4oKCkgPT4gdXBkYXRlUGVuZGluZyhkZXN0aW5hdGlvbnMsIGdpdmVuVHJpcCkpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQZW5kaW5nKGRlc3RpbmF0aW9ucywgZ2l2ZW5UcmlwKSB7XG5cdGNvbnN0IHRyaXBDb3N0ID0gdXNlci5maW5kVHJpcENvc3QoZGVzdGluYXRpb25zLCBnaXZlblRyaXAuZGVzdGluYXRpb25JRCwgZ2l2ZW5UcmlwLmR1cmF0aW9uLCBnaXZlblRyaXAudHJhdmVsZXJzKTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVzdGltYXRlZC1jb3N0JykuaW5uZXJUZXh0ID0gYEVzdGltYXRlZCBjb3N0OiAke3RyaXBDb3N0fWA7XG5cdHVwZGF0ZVRyaXBEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRyaXBEYXRhKGZvdW5kVXNlcklEKSB7XG5cdHRyaXBzID0gZmV0Y2hDYWxsLmdldFRyaXBzKClcblx0XG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUodHJpcHMpXHRcblx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHR0cmlwcyA9IHJlc3BvbnNlLnRyaXBzO1xuXHRcdFx0aWYgKHVzZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR1c2VyID0gbmV3IFRyYXZlbGVyKGFsbFVzZXJzW3VzZXJuYW1lSUQgLSAxXSwgJ3RyYXZlbGVyJywgJ3RyYXZlbDIwMjAnLCB0cmlwcyk7XG5cdFx0XHRcdHVzZXIuZmluZFBlbmRpbmdUcmlwcygpO1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGVuZGluZy10cmlwcy1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0ZG9tVXBkYXRlcy5kaXNwbGF5VXNlckluZm8odXNlciwgZGVzdGluYXRpb25zLCB0b2RheSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFnZW50RGFzaC5jbGFzc05hbWUgPT09ICdhZ2VudC1kYXNoIGhpZGUnKSB7XG5cdFx0XHRcdGNvbnN0IGZvdW5kVXNlciA9IG5ldyBUcmF2ZWxlcihhbGxVc2Vyc1tmb3VuZFVzZXJJRCAtIDFdLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJpcHMpO1xuXHRcdFx0XHRmb3VuZFVzZXIudXBkYXRlQWxsUHJvcGVydGllcyh0b2RheSk7XG5cdFx0XHRcdGFnZW50LnVwZGF0ZVByb3BlcnRpZXModG9kYXksIHRyaXBzKTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm91bmRVc2VySUQpLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHRkb21VcGRhdGVzLmRpc3BsYXlBZG1pbkNoYW5nZShmb3VuZFVzZXIsIHRvZGF5LCBkZXN0aW5hdGlvbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWdlbnQudXBkYXRlUHJvcGVydGllcyh0b2RheSwgdHJpcHMpO1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2ZW51ZScpLmlubmVyVGV4dCA9ICcnO1xuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0ZG9tVXBkYXRlcy5kaXNwbGF5QWdlbnRJbmZvKGFnZW50LCBkZXN0aW5hdGlvbnMsIHRvZGF5KTtcblx0XHRcdH1cblx0XHR9KVxufVxuXG5mdW5jdGlvbiBzZWFyY2hVc2VycyhldmVudCkge1xuXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0JykudmFsdWUudG9Mb3dlckNhc2UoKTtcblx0Y29uc3Qgc2VhcmNoZWRSZXN1bHRzID0gW11cblx0YWxsVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcblx0XHRpZiAodXNlci5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoKSkge1xuXHRcdFx0dXNlci5maW5kQWN0aXZlVHJpcHModG9kYXkpO1xuXHRcdFx0dXNlci5maW5kVXBjb21pbmdUcmlwcyh0b2RheSk7XG5cdFx0XHR1c2VyLmZpbmRQYXN0VHJpcHModG9kYXkpO1xuXHRcdFx0dXNlci5maW5kUGVuZGluZ1RyaXBzKCk7XG5cdFx0XHRzZWFyY2hlZFJlc3VsdHMucHVzaCh1c2VyKTtcblx0XHR9XG5cdH0pXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtcmVzdWx0cy1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcblx0ZG9tVXBkYXRlcy5kaXNwbGF5U2VhcmNoUmVzdWx0cyhzZWFyY2hlZFJlc3VsdHMsIHRvZGF5LCBkZXN0aW5hdGlvbnMpO1xufSIsImltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5cbmNsYXNzIFRyYXZlbGVyIGV4dGVuZHMgVXNlciB7XG5cdGNvbnN0cnVjdG9yKGRhdGEsIHVzZXJuYW1lID0gdW5kZWZpbmVkLCBwd2QgPSB1bmRlZmluZWQsIHRyaXBzKSB7XG5cdFx0c3VwZXIodXNlcm5hbWUsIHB3ZCwgdHJ1ZSk7XG5cdFx0dGhpcy5pZCA9IGRhdGEuaWQ7XG5cdFx0dGhpcy5uYW1lID0gZGF0YS5uYW1lO1xuXHRcdHRoaXMudHJhdmVsZXJUeXBlID0gZGF0YS50cmF2ZWxlclR5cGU7XG5cdFx0dGhpcy50cmlwcyA9IHRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0aGlzLmlkKTtcblx0XHR0aGlzLmFjdGl2ZVRyaXBzID0gW107XG5cdFx0dGhpcy51cGNvbWluZ1RyaXBzID0gW107XG5cdFx0dGhpcy5wYXN0VHJpcHMgPSBbXTtcblx0XHR0aGlzLnBlbmRpbmdUcmlwcyA9IFtdO1xuXHR9XG5cblx0dXBkYXRlQWxsUHJvcGVydGllcyh0b2RheSkge1xuXHRcdHRoaXMuZmluZEFjdGl2ZVRyaXBzKHRvZGF5KTtcblx0XHR0aGlzLmZpbmRVcGNvbWluZ1RyaXBzKHRvZGF5KTtcblx0XHR0aGlzLmZpbmRQYXN0VHJpcHModG9kYXkpO1xuXHRcdHRoaXMuZmluZFBlbmRpbmdUcmlwcygpO1xuXHR9XG5cblx0ZmluZEFjdGl2ZVRyaXBzKHRvZGF5KSB7XG5cdFx0Y29uc3QgYWN0aXZlVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHtcblx0XHRcdGNvbnN0IGVuZERhdGUgPSB0aGlzLmFkZERheXModHJpcC5kYXRlLCB0cmlwLmR1cmF0aW9uKTtcblx0XHRcdGlmIChlbmREYXRlID4gdG9kYXkgJiYgdHJpcC5kYXRlIDw9IHRvZGF5KSByZXR1cm4gdHJpcFxuXHRcdH0pXG5cblx0XHR0aGlzLmFjdGl2ZVRyaXBzID0gYWN0aXZlVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpO1xuXHR9XG5cblx0YWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdFx0Y29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdGVuZERhdGUuc2V0RGF0ZShlbmREYXRlLmdldERhdGUoKSArIGRheXMpO1xuXHRcdGNvbnN0IGRkID0gU3RyaW5nKGVuZERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBcdGNvbnN0IG1tID0gU3RyaW5nKGVuZERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIFx0Y29uc3QgeXl5eSA9IGVuZERhdGUuZ2V0RnVsbFllYXIoKTtcblx0XHRyZXR1cm4geXl5eSArICcvJyArIG1tICsgJy8nICsgZGQ7XG5cdH1cblxuXHRmaW5kVXBjb21pbmdUcmlwcyh0b2RheSkge1xuXHRcdGNvbnN0IHVwY29taW5nVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuZGF0ZSA+IHRvZGF5KTtcblxuXHRcdHRoaXMudXBjb21pbmdUcmlwcyA9IHVwY29taW5nVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpO1xuXHR9XG5cblx0ZmluZFBhc3RUcmlwcyh0b2RheSkge1xuXHRcdGNvbnN0IHBhc3RUcmlwcyA9IHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5kYXRlIDwgdG9kYXkpLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnKTtcblx0XHR0aGlzLnBhc3RUcmlwcyA9IHBhc3RUcmlwcy5maWx0ZXIodHJpcCA9PiAhdGhpcy5hY3RpdmVUcmlwcy5pbmNsdWRlcyh0cmlwKSk7XG5cdH1cblxuXHRmaW5kUGVuZGluZ1RyaXBzKCkge1xuXHRcdHRoaXMucGVuZGluZ1RyaXBzID0gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKTtcblx0fVxuXG5cdGZpbmRZZWFyVHJpcENvc3QodG9kYXksIGRlc3RpbmF0aW9ucykge1xuXHRcdGNvbnN0IHl5eXkgPSB0b2RheS5zdWJzdHJpbmcoMCwgNCk7XG5cblx0XHRjb25zdCB5ZWFyVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHtcblx0XHRcdGxldCB0WVlZWSA9IHRyaXAuZGF0ZS5zdWJzdHJpbmcoMCwgNCk7XG5cdFx0XHRpZiAodFlZWVkgPT09IHl5eXkpIHJldHVybiB0cmlwO1xuXHRcdH0pXG5cblx0XHRjb25zdCBhcHByb3ZlZFlyVHJpcHMgPSB5ZWFyVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpO1xuXG5cdFx0Y29uc3QgdG90YWxDb3N0ID0gYXBwcm92ZWRZclRyaXBzLnJlZHVjZSgoc3VtLCB0cmlwKSA9PiB7XG5cdFx0XHRjb25zdCBmb3VuZFRyaXBTcGVjID0gZGVzdGluYXRpb25zLmZpbmQoc3BvdCA9PiBzcG90LmlkID09PSB0cmlwLmRlc3RpbmF0aW9uSUQpO1xuXHRcdFx0bGV0IHRyaXBDb3N0ID0gKGZvdW5kVHJpcFNwZWMuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiAqIHRyaXAudHJhdmVsZXJzKSBcblx0XHRcdFx0KyAoZm91bmRUcmlwU3BlYy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRyaXAuZHVyYXRpb24pO1xuXHRcdFx0dHJpcENvc3QgKz0gKHRyaXBDb3N0IC8gMTApO1xuXHRcdFx0c3VtICs9IHRyaXBDb3N0O1xuXG5cdFx0XHRyZXR1cm4gc3VtO1xuXHRcdH0sIDApO1xuXG5cdFx0cmV0dXJuIGAkJHt0b3RhbENvc3R9YDtcblx0fVxuXG5cdGZpbmRUcmlwQ29zdChkZXN0aW5hdGlvbnMsIGRlc3RJRCwgZHVyYXRpb25JbnB1dCwgdHJhdmVsZXJJbnB1dCkge1xuXHRcdGNvbnN0IGZvdW5kVHJpcCA9IGRlc3RpbmF0aW9ucy5maW5kKHNwb3QgPT4gc3BvdC5pZCA9PT0gZGVzdElEKTtcblx0XHRjb25zdCBjb3N0ID0gKGZvdW5kVHJpcC5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIGR1cmF0aW9uSW5wdXQpICsgKGZvdW5kVHJpcC5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdHJhdmVsZXJJbnB1dClcblx0XHRjb25zdCB0b3RhbENvc3QgPSBjb3N0ICsgKGNvc3QgLyAxMCk7XG5cdFx0cmV0dXJuIGAkJHt0b3RhbENvc3R9YDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBVc2VyIHtcblx0Y29uc3RydWN0b3IodXNlcm5hbWUsIHB3ZCwgaXNBdXRoZW50aWNhdGVkID0gZmFsc2UsIGlzQWdlbmN5ID0gZmFsc2UpIHtcblx0XHR0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG5cdFx0dGhpcy5wd2QgPSBwd2Q7XG5cdFx0dGhpcy5hdXRoZW50aWNhdGVkID0gaXNBdXRoZW50aWNhdGVkO1xuXHRcdHRoaXMuYWdlbmN5ID0gaXNBZ2VuY3k7XG5cdH1cblxuXHRhdXRoZW50aWNhdGUoKSB7XG5cdFx0aWYgKHRoaXMucHdkID09PSAndHJhdmVsMjAyMCcpIHtcblx0XHRcdHRoaXMuYXV0aGVudGljYXRlZCA9IHRydWU7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnVzZXJuYW1lID09PSAnYWdlbmN5Jykge1xuXHRcdFx0dGhpcy5hZ2VuY3kgPSB0cnVlO1xuXHRcdH1cblx0XHRpZiAoTnVtYmVyKHRoaXMudXNlcm5hbWUuc2xpY2UoLTIpKSA+IDUwKSB7XG5cdFx0XHR0aGlzLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwic291cmNlUm9vdCI6IiJ9