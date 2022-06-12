/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"a {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    margin: 0;\\r\\n    height: 100vh;\\r\\n    min-height: 300px;\\r\\n    background-color: #e2eaed;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    /* justify-content: space-around; */\\r\\n    flex-direction: column;\\r\\n    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    color: #2b2b2b;\\r\\n    text-align: center;\\r\\n    margin: 40px 60px;\\r\\n    max-width: 1080px;\\r\\n}\\r\\n\\r\\n#notes-link {\\r\\n    color: #47478a;\\r\\n    transition: 0.5s all;\\r\\n}\\r\\n\\r\\n#notes-link:hover {\\r\\n    color: cornflowerblue;\\r\\n}\\r\\n\\r\\n#input-area {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n#robot-area {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n#robot-icon {\\r\\n    font-size: 60px;\\r\\n    text-align: center;\\r\\n    border: 0;\\r\\n    background-color: inherit;\\r\\n    cursor: pointer;\\r\\n    opacity: 0.7;\\r\\n    transition: 0.5s;\\r\\n    margin: auto 0px;\\r\\n}\\r\\n\\r\\n#robot-icon:focus  {\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n#robot-icon:hover {\\r\\n    opacity: 1;\\r\\n}\\r\\n\\r\\n#notes-input-form {\\r\\n    padding-left: 100px;\\r\\n    border-left: 1px solid #666666;\\r\\n    margin: 0 0 0 100px;\\r\\n}\\r\\n\\r\\n#notes-input {\\r\\n    resize: none;\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n#textarea-play-button {\\r\\n    width: 100%;\\r\\n    height: 40px;\\r\\n    border: none;\\r\\n    background-color: #47478a;\\r\\n    border-radius: 4px;\\r\\n    color: #fafafa;\\r\\n    margin-top: 10px;\\r\\n    font-size: 16px;\\r\\n    cursor: pointer;\\r\\n    transition: 0.5s;\\r\\n}\\r\\n\\r\\n#textarea-play-button:hover {\\r\\n    background-color: #2d2d58;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.container div {\\r\\n    display: flex;\\r\\n    margin: 80px 0 40px 0;\\r\\n}\\r\\n\\r\\n.white-keys kbd {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-end;\\r\\n    background-color: white;\\r\\n    min-width: 34px;\\r\\n    min-height: 200px;\\r\\n    border: 1px solid darkgray;\\r\\n    line-height: 6em;\\r\\n}\\r\\n\\r\\n.black-keys kbd {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: flex-end;\\r\\n    width: 24px;\\r\\n    min-height: 140px;\\r\\n    border: 1px solid darkgray;\\r\\n    line-height: 6em;\\r\\n    background-color: black;\\r\\n    color: white;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n.black-keys {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n}\\r\\n\\r\\n#Cb2 {left: 20px;}\\r\\n#Db2 {left: 58px;}\\r\\n#Fb2 {left: 130px;}\\r\\n#Gb2 {left: 166px;}\\r\\n#Ab2 {left: 202px;}\\r\\n\\r\\n#Cb3 {left:274px;}\\r\\n#Db3 {left:310px;}\\r\\n#Fb3 {left:382px;}\\r\\n#Gb3 {left:418px;}\\r\\n#Ab3 {left:454px;}\\r\\n\\r\\n#Cb4 {left:526px;}\\r\\n#Db4 {left:562px;}\\r\\n#Fb4 {left:634px;}\\r\\n#Gb4 {left:670px;}\\r\\n#Ab4 {left:706px;}\\r\\n\\r\\n#Cb5 {left:778px;}\\r\\n#Db5 {left:814px;}\\r\\n#Fb5 {left:886px;}\\r\\n#Gb5 {left:922px;}\\r\\n#Ab5 {left:958px;}\\r\\n\\r\\n.white-keys > .pressed {\\r\\n    background-color: #ebebeb !important;\\r\\n}\\r\\n\\r\\n.black-keys > .pressed {\\r\\n    background-color: #474747 !important;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://VirtualPiano/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://VirtualPiano/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://VirtualPiano/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"decodeList\": () => (/* binding */ decodeList),\n/* harmony export */   \"preload\": () => (/* binding */ preload)\n/* harmony export */ });\nconst decodeList = {\r\n    Digit1: \"c2\", Digit2: \"d2\", Digit3: \"e2\",\r\n    Digit4: \"f2\", Digit5: \"g2\", Digit6: \"a2\", Digit7: \"b2\",\r\n\r\n    KeyQ: \"c3\", KeyW: \"d3\", KeyE: \"e3\",\r\n    KeyR: \"f3\", KeyT: \"g3\", KeyY: \"a3\", KeyU: \"b3\",\r\n\r\n    KeyA: \"c4\", KeyS: \"d4\", KeyD: \"e4\",\r\n    KeyF: \"f4\", KeyG: \"g4\", KeyH: \"a4\", KeyJ: \"b4\",\r\n\r\n    KeyZ: \"c5\", KeyX: \"d5\", KeyC: \"e5\", KeyV: \"f5\",\r\n    KeyB: \"g5\", KeyN: \"a5\", KeyM: \"b5\", Comma: \"c6\",\r\n\r\n    Digit8: \"Cb2\", Digit9: \"Db2\", Digit0: \"Fb2\",\r\n    Minus: \"Gb2\", Equal: \"Ab2\",\r\n\r\n    KeyI: \"Cb3\", KeyO: \"Db3\", KeyP: \"Fb3\",\r\n    BracketLeft: \"Gb3\", BracketRight: \"Ab3\",\r\n\r\n    KeyK: \"Cb4\", KeyL: \"Db4\", Semicolon: \"Fb4\",\r\n    Quote: \"Gb4\", Backslash: \"Ab4\",\r\n\r\n    Period: \"Cb5\", Slash: \"Db5\", ShiftRight: \"Fb5\",\r\n    ControlRight: \"Gb5\", Enter: \"Ab5\",\r\n}\r\n\r\nasync function preload() {\r\n    let loaded = 0;\r\n\r\n    function audioPreload() {\r\n        for (const [key, note] of Object.entries(decodeList)) {\r\n            loaded--;\r\n            let audio = new Audio();\r\n            audio.src = `./pianoAudio/${note}.mp3`;\r\n        }\r\n    }\r\n\r\n    await audioPreload();\r\n    return true;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://VirtualPiano/./src/init.js?");

/***/ }),

/***/ "./src/robotSong.js":
/*!**************************!*\
  !*** ./src/robotSong.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst robotSong = `4|----c---d---e-d-c-c-e-c-g-|\r\n    3|a-a---a---a---------------|\r\n\r\n    4|c-e-c---------c---d-c-----|\r\n    3|------g-g-b-g---g-----f-f-|\r\n\r\n    4|----c---c-------c---d---e-|\r\n    3|a-f---f---b-a-a---a---a---|\r\n\r\n    4|d-c-c-e-c-g-c-e-c---------|\r\n    3|------------------g-g-b-g-|\r\n\r\n    4|c---d-c---------c---c-----|\r\n    3|--g-----f-f-a-f---f---b-a-|\r\n\r\n    4|------------c-------------|\r\n    3|-a--a--a--g---a--a--a--a--|\r\n\r\n    4|------------------c-------|\r\n    3|g-e-a--a--a--a--g---a--a--|\r\n\r\n    4|------------------------c-|\r\n    3|a-aa-aa---a--a--a--a--g---|\r\n\r\n    3|a--a--a--a--g-e-a--a--a--a|\r\n\r\n    4|----c---------------------|\r\n    3|--g---a--a--a-aa-aa---a--a|\r\n\r\n    4|----------c---------------|\r\n    3|--a--a--g---a--a--a--a--g-|\r\n\r\n    4|----------------c---------|\r\n    3|e-a--a--a--a--g---a--a--a-|\r\n\r\n    4|----------------------c---|\r\n    3|aa-aa---a--a--a--a--g---a-|\r\n\r\n    3|-a--a--a--g-e-a--a--a--a--|\r\n\r\n    4|--c------------------e--c-|\r\n    3|g---a--a--a-aa-aa---a--a--|\r\n\r\n    4|----c------e--c-----c-----|\r\n    3|aA-a--aAg-a--a--aA-a--aAg-|\r\n\r\n    4|-e--c-----c------e--c-----|\r\n    3|a--a--aA-a--aAg-a--a--gg-g|\r\n\r\n    4|-------e--c-----c------e--|\r\n    3|a-a---a--a--aA-a--aAg-a--a|\r\n\r\n    4|c-----c------e--c-----c---|\r\n    3|--aA-a--aAg-a--a--aA-a--aA|\r\n\r\n    4|---e--c---------------c---|\r\n    3|g-a--a--gg-ga-a---a-a---a-|\r\n\r\n    4|d---e-d-c-c-e-c-g-c-e-c---|\r\n    3|--a---------------------g-|\r\n\r\n    4|------c---d-c---------c---|\r\n    3|g-b-g---g-----f-f-a-f---f-|\r\n\r\n    4|c-------c---d---e-d-c-c-e-|\r\n    3|--b-a-a---a---a-----------|\r\n\r\n    4|c-g-c-e-c---------c---d-c-|\r\n    3|----------g-g-b-g---g-----|\r\n\r\n    4|--------c---c-------c---d-|\r\n    3|f-f-a-f---f---b-a-a---a---|\r\n\r\n    4|--e-d-c-c-e-c-g-c-e-c-----|\r\n    3|a---------------------g-g-|\r\n\r\n    4|----c---d-c---------c---c-|\r\n    3|b-g---g-----f-f-a-f---f---|\r\n\r\n    3|b-------------------------|`\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (robotSong);\n\n//# sourceURL=webpack://VirtualPiano/./src/robotSong.js?");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./src/init.js\");\n/* harmony import */ var _robotSong_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./robotSong.js */ \"./src/robotSong.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\n\r\n\r\n(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.preload)().then(() => {\r\n    let robotButton = document.getElementById('robot-icon');\r\n\r\n    // Проверяет какая кнопка нажата и проигрывает аудио\r\n    document.addEventListener(\"keydown\", function (event) {\r\n        let noteAudio = _init_js__WEBPACK_IMPORTED_MODULE_0__.decodeList[event.code];\r\n        if (noteAudio !== undefined) {\r\n            let audio = new Audio(`pianoAudio/${noteAudio}.mp3`);\r\n            audio.play();\r\n\r\n            // Добовляет класс со стилем нажатой клавиши\r\n            document.getElementById(noteAudio).classList.add(\"pressed\");\r\n        } else {\r\n            console.log('Клавиши ' + event.code + ' не существует')\r\n        }\r\n    });\r\n\r\n    // Убирает класс со стилем нажатой клавиши\r\n    document.addEventListener(\"keyup\", function (event) {\r\n        let noteAudio = _init_js__WEBPACK_IMPORTED_MODULE_0__.decodeList[event.code];\r\n        if (noteAudio !== undefined) {\r\n            document.getElementById(noteAudio).classList.remove(\"pressed\");\r\n        }\r\n    });\r\n\r\n    // ======= Автопроигрывание ========\r\n\r\n    // Преобразование текста в массив\r\n    function textToArr(notesText) {\r\n        // notesText = notesText.split(/\\n\\s\\n/g); OLD\r\n        notesText = notesText.split('\\n\\n');\r\n        return notesText.map(function (notesLine) {\r\n            return notesLine.split(\"\\n\");\r\n        });\r\n    }\r\n\r\n    // Функция перебирания строк (может быть больше чем одна строка если несколько октав)\r\n    function strokePlay(notesList) {\r\n        notesList.forEach(function (notesStrokes, i, notesList) {\r\n            setTimeout(lineStarter, 3000 * i, notesStrokes);\r\n        });\r\n    }\r\n\r\n    function lineStarter(notesStrokes) {\r\n        notesStrokes.forEach(function (octavStroke, LineIndex, notesStrokes) {\r\n            linePlay(octavStroke);\r\n        });\r\n    }\r\n\r\n    // Перебирание каждой октавы\r\n    function linePlay(octavStroke) {\r\n        octavStroke = octavStroke.split('');\r\n        // --- Удаляет ненужные элементы и присваевает октаве переменную ---\r\n        let strokeBegining = octavStroke.indexOf('|')\r\n        let octave = octavStroke[strokeBegining - 1]\r\n        octavStroke = octavStroke.slice(strokeBegining + 1, -1);\r\n        // -----------------------------------------------------------------\r\n        octavStroke.forEach(function (note, noteIndex, octavStroke) {\r\n            if (note != '-' && note != '|' && note != 'L' && note != 'H' && note != 'R' && note != ' ') {\r\n                // Проверка чёрных клавиш (нужна потому что файлы с нотами не учитывают регистр)\r\n                if (note == note.toUpperCase()) {\r\n                    note += 'b'\r\n                }\r\n                let noteAndOctave = note + octave\r\n                setTimeout(soundPlay, 115 * noteIndex, noteAndOctave);\r\n            }\r\n        });\r\n    }\r\n\r\n    // Проигрование клавиши\r\n    function soundPlay(pianoButton) {\r\n        document.getElementById(pianoButton).classList.add(\"pressed\"); // Добовляет класс со стилем нажатой клавиши\r\n        setTimeout(() => document.getElementById(pianoButton).classList.remove(\"pressed\"), 200);\r\n        let audio = new Audio(`pianoAudio/${pianoButton}.mp3`);\r\n        audio.play();\r\n    }\r\n    // ============================\r\n\r\n    // ---------- Вызов кнопкой---------\r\n    robotButton.onclick = buttonPress;\r\n\r\n    function buttonPress() {\r\n        strokePlay(textToArr(_robotSong_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n    }\r\n    // ---------------------------------\r\n\r\n    // ------Вызов через textarea ------\r\n    let text = document.getElementById('notes-input');\r\n\r\n    function playTextareaNotes() {\r\n        let notes = text.value;\r\n        strokePlay(textToArr(notes));\r\n    }\r\n\r\n    text.onchange = playTextareaNotes;\r\n})\r\n\n\n//# sourceURL=webpack://VirtualPiano/./src/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.js");
/******/ 	
/******/ })()
;