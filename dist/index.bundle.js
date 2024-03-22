/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*
 * This CSS code block resets the default styles of various HTML elements to ensure consistent rendering across different browsers.
 */

body {
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-columns: 20vw 80vw;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: white;
}

/* header */
.header {
  padding: 20px 10px 15px 30px;
  background-color: black;
  grid-column: 1/3;
  grid-row: 1/2;
}
.logoImg {
  height: 3.5rem;
}

/* sidebar */
.sidebar {
  background-color: black;
  color: white;
  grid-row: 2/3;
  padding: 10px 10px 10px 30px;
  display: flex;
  flex-direction: column;
}

.sidebarTitle {
  padding: 5px;
  font-size: 1.5rem;
}

.addProjectIcon {
  height: 2.5rem;
  padding-left: 10px;
  justify-self: end;
}

.sidebarHeader {
  display: grid;
  grid-template-columns: 2fr 2fr;
  height: 60px;
}
/* main-container */

.content-container {
  background-color: #a78295;
}
.initialContent {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.welcome-content {
  margin: 40px;
  font-size: 2rem;
  line-height: 1.3;
  text-align: center;
}

dialog {
  background-color: black;
  padding: 30px;
  border-radius: 10px;
}
.close-button {
  padding: 15px;
  border-radius: 15px;
  font-size: 1.1rem;
}

.project-submit {
  margin: 30px;
  padding: 15px;
  border-radius: 15px;
  font-size: 1.1rem;
  background-color: #a78295;
}
.project-name-input {
  padding: 15px;
  font-size: 1.5rem;
  border-radius: 15px;
  margin: 30px;
}

.projectCard {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
  display: flex;
  justify-content: space-between;
}

.deleteProjectIcon,
.deleteTaskImg {
  height: 2.5rem;
  padding-left: 10px;
  justify-self: end;
}

.projectName {
  font-size: 1.4rem;
  padding-top: 7px;
}

.projectContainer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.contentProjectTitle {
  font-size: 2.5rem;
  font-weight: bold;
}
.addTaskButton {
  padding: 15px;
  border-radius: 15px;
  font-size: 1.1rem;
  background-color: #ffffff;
}
.task {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  color: black;
  padding: 40px;
  border-radius: 30px;
  margin: 10px 30px 10px 30px;
}
.taskContainer {
  height: 60vh;
}

.deleteTaskImg {
  height: 2.5rem;
  padding-left: 10px;
}
.completed {
  text-decoration: line-through;
}
.taskCheckbox {
  transform: scale(2);
  padding: 10px;
}

.check-delete {
  display: flex;
  gap: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;;EAEE;;AAEF;EACE,aAAa;EACb,6BAA6B;EAC7B,gCAAgC;EAChC,gDAAgD;EAChD,YAAY;AACd;;AAEA,WAAW;AACX;EACE,4BAA4B;EAC5B,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,cAAc;AAChB;;AAEA,YAAY;AACZ;EACE,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;AACA,mBAAmB;;AAEnB;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,wCAAwC;EACxC,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,cAAc;EACd,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,SAAS;AACX","sourcesContent":["html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: \"\";\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n/*\r\n * This CSS code block resets the default styles of various HTML elements to ensure consistent rendering across different browsers.\r\n */\r\n\r\nbody {\r\n  display: grid;\r\n  grid-template-rows: 10vh 90vh;\r\n  grid-template-columns: 20vw 80vw;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  color: white;\r\n}\r\n\r\n/* header */\r\n.header {\r\n  padding: 20px 10px 15px 30px;\r\n  background-color: black;\r\n  grid-column: 1/3;\r\n  grid-row: 1/2;\r\n}\r\n.logoImg {\r\n  height: 3.5rem;\r\n}\r\n\r\n/* sidebar */\r\n.sidebar {\r\n  background-color: black;\r\n  color: white;\r\n  grid-row: 2/3;\r\n  padding: 10px 10px 10px 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.sidebarTitle {\r\n  padding: 5px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.addProjectIcon {\r\n  height: 2.5rem;\r\n  padding-left: 10px;\r\n  justify-self: end;\r\n}\r\n\r\n.sidebarHeader {\r\n  display: grid;\r\n  grid-template-columns: 2fr 2fr;\r\n  height: 60px;\r\n}\r\n/* main-container */\r\n\r\n.content-container {\r\n  background-color: #a78295;\r\n}\r\n.initialContent {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 90vh;\r\n}\r\n\r\n.welcome-content {\r\n  margin: 40px;\r\n  font-size: 2rem;\r\n  line-height: 1.3;\r\n  text-align: center;\r\n}\r\n\r\ndialog {\r\n  background-color: black;\r\n  padding: 30px;\r\n  border-radius: 10px;\r\n}\r\n.close-button {\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.project-submit {\r\n  margin: 30px;\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  font-size: 1.1rem;\r\n  background-color: #a78295;\r\n}\r\n.project-name-input {\r\n  padding: 15px;\r\n  font-size: 1.5rem;\r\n  border-radius: 15px;\r\n  margin: 30px;\r\n}\r\n\r\n.projectCard {\r\n  background-color: white;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  margin: 10px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  color: black;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.deleteProjectIcon,\r\n.deleteTaskImg {\r\n  height: 2.5rem;\r\n  padding-left: 10px;\r\n  justify-self: end;\r\n}\r\n\r\n.projectName {\r\n  font-size: 1.4rem;\r\n  padding-top: 7px;\r\n}\r\n\r\n.projectContainer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 20px;\r\n}\r\n\r\n.contentProjectTitle {\r\n  font-size: 2.5rem;\r\n  font-weight: bold;\r\n}\r\n.addTaskButton {\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  font-size: 1.1rem;\r\n  background-color: #ffffff;\r\n}\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: #ffffff;\r\n  color: black;\r\n  padding: 40px;\r\n  border-radius: 30px;\r\n  margin: 10px 30px 10px 30px;\r\n}\r\n.taskContainer {\r\n  height: 60vh;\r\n}\r\n\r\n.deleteTaskImg {\r\n  height: 2.5rem;\r\n  padding-left: 10px;\r\n}\r\n.completed {\r\n  text-decoration: line-through;\r\n}\r\n.taskCheckbox {\r\n  transform: scale(2);\r\n  padding: 10px;\r\n}\r\n\r\n.check-delete {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager),
/* harmony export */   Tasks: () => (/* binding */ Tasks),
/* harmony export */   projectManager: () => (/* binding */ projectManager)
/* harmony export */ });
class Project {
  constructor(projectName, id) {
    this.projectName = projectName;
    this.id = id;
    this.todos = [];
  }

  addTask(task) {
    this.todos.push(task);
  }
  getTodos() {
    return this.todos;
  }
  deleteTodo(taskId) {
    this.todos = this.todos.filter((task) => task.id !== taskId);
  }
}

class Tasks {
  constructor(taskName, taskDescription, dueDate, id) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.dueDate = new Date(dueDate);
    this.completed = false;
    this.id = id;
  }

  getFormattedDueDate() {
    return this.dueDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  markAsIncomplete() {
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }
}
//changes made now
// projectManager.js
class ProjectManager {
  constructor() {
    this.currentProject = null;
  }

  setCurrentProject(project) {
    this.currentProject = project;
  }

  getCurrentProject() {
    return this.currentProject;
  }
}
const projectManager = new ProjectManager();


/***/ }),

/***/ "./src/design/content.js":
/*!*******************************!*\
  !*** ./src/design/content.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mainContent: () => (/* binding */ mainContent),
/* harmony export */   projectView: () => (/* binding */ projectView),
/* harmony export */   renderMainContent: () => (/* binding */ renderMainContent)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./src/design/dialog.js");


const contentContainer = document.createElement("div");
contentContainer.classList.add("content-container");

const mainContent = () => {
  const initialContent = document.createElement("div");
  initialContent.classList.add("initialContent");

  const welcomeContent = document.createElement("div");
  welcomeContent.classList.add("welcome-content");
  welcomeContent.textContent = `create a new project by clicking the + button or select an existing one to start adding your tasks`;

  initialContent.appendChild(welcomeContent);

  contentContainer.appendChild(initialContent);
  document.body.appendChild(contentContainer);
};

const projectView = (project) => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");

  const projectTitle = document.createElement("h1");
  projectTitle.textContent = project;
  projectTitle.classList.add("contentProjectTitle");

  projectContainer.appendChild(projectTitle);

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task";
  addTaskButton.classList.add("addTaskButton");
  addTaskButton.addEventListener("click", _dialog__WEBPACK_IMPORTED_MODULE_1__.showNewTasksDialog);

  projectContainer.appendChild(addTaskButton);
  contentContainer.appendChild(projectContainer);
};

const renderMainContent = () => {
  mainContent();
};


/***/ }),

/***/ "./src/design/dialog.js":
/*!******************************!*\
  !*** ./src/design/dialog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   showNewProjectDialog: () => (/* binding */ showNewProjectDialog),
/* harmony export */   showNewTasksDialog: () => (/* binding */ showNewTasksDialog)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes.js */ "./src/classes.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ "./src/design/sidebar.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.js */ "./src/design/content.js");
/* harmony import */ var _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/deleteIcon.png */ "./src/images/deleteIcon.png");






let PROJECT_ID = 0;
// export let CURRENT_PROJECT = null;
function showNewProjectDialog() {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "addNewProjectDialog");

  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "project-name";
  input.placeholder = "Enter project name";
  input.classList.add("project-name-input");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.textContent = "Cancel";
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("project-submit");
  submitButton.textContent = `Add Project`;

  submitButton.addEventListener("click", () => {
    // CURRENT_PROJECT = createProject(input, createProjectCard, dialog);
    // console.log(CURRENT_PROJECT);
    const newProject = createProject(input, _sidebar_js__WEBPACK_IMPORTED_MODULE_2__.createProjectCard, dialog);
    _classes_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.setCurrentProject(newProject);
    console.log(_classes_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getCurrentProject());
  });

  function createProject(input, createProjectCard, dialog) {
    const projectName = input.value;

    const project = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);
    project.id = PROJECT_ID++;

    //clear input fields
    input.value = "";
    createProjectCard(project.projectName);
    dialog.close();

    return project;
  }

  dialog.appendChild(input);
  dialog.appendChild(submitButton);
  dialog.appendChild(closeButton);
  dialog.appendChild(form);
  document.body.appendChild(dialog);
  dialog.showModal();
  return dialog;
}
let TASK_ID = 0;
function showNewTasksDialog() {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "addNewTasksDialog");

  const h1 = document.createElement("h1");
  h1.textContent = "Add Task";

  const form = document.createElement("form");

  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.name = "task-name";
  taskNameInput.placeholder = "Enter task name";
  taskNameInput.classList.add("task-name-input");

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.name = "task-description";
  taskDescriptionInput.placeholder = "Enter task description";
  taskDescriptionInput.classList.add("task-description-input");

  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  taskDueDateInput.name = "task-due-date";
  taskDueDateInput.classList.add("task-due-date-input");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.textContent = "Cancel";
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("task-submit");
  submitButton.textContent = "Add Task";

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let task = createTask(
      taskNameInput,
      taskDescriptionInput,
      taskDueDateInput,
      TASK_ID,
      dialog
    );
    // CURRENT_PROJECT.addTask(task);
    // console.log(CURRENT_PROJECT);
    // displayTasks(CURRENT_PROJECT);
    const currentProject = _classes_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getCurrentProject();
    currentProject.addTask(task);
    console.log(currentProject);
    displayTasks(currentProject);
  });
  function createTask(
    taskNameInput,
    taskDescriptionInput,
    taskDueDateInput,
    TASK_ID,

    dialog
  ) {
    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;
    const taskDueDate = taskDueDateInput.value;

    let task = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Tasks(taskName, taskDescription, taskDueDate);
    task.id = TASK_ID++;
    //new code

    // Clear input fields
    taskNameInput.value = "";
    taskDescriptionInput.value = "";
    taskDueDateInput.value = "";

    dialog.close();

    return task;
  }

  form.appendChild(taskNameInput);
  form.appendChild(taskDescriptionInput);
  form.appendChild(taskDueDateInput);
  form.appendChild(submitButton);
  form.appendChild(closeButton);

  dialog.appendChild(h1);
  dialog.appendChild(form);
  document.body.appendChild(dialog);
  dialog.showModal();
  return dialog;
}

function displayTasks(project, taskContainer, container) {
  const currentProject = _classes_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getCurrentProject();
  const tasks = currentProject.getTodos();
  taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  container = document.querySelector(".content-container");

  taskContainer.innerHTML = "";
  container.innerHTML = ``;
  (0,_content_js__WEBPACK_IMPORTED_MODULE_3__.projectView)(project.projectName);

  for (let task of tasks) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    const taskName = document.createElement("h2");
    taskName.textContent = task.taskName;
    taskContent.appendChild(taskName);

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.taskDescription;
    taskContent.appendChild(taskDescription);

    const taskDueDate = document.createElement("p");
    taskDueDate.textContent = task.getFormattedDueDate();
    taskContent.appendChild(taskDueDate);
    taskElement.appendChild(taskContent);

    const img = document.createElement("div");
    img.classList.add("check-delete");
    // Create a checkbox
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add("taskCheckbox");
    taskCheckbox.addEventListener("change", () => {
      if (taskCheckbox.checked) {
        task.markAsCompleted();
        taskElement.classList.add("completed");
      } else {
        task.markAsIncomplete(); // You'll need to implement this method in your Todo class
        taskElement.classList.remove("completed");
      }
    });

    const deleteTaskImg = document.createElement("img");
    deleteTaskImg.src = _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_4__;
    deleteTaskImg.classList.add("deleteTaskImg");

    deleteTaskImg.addEventListener("click", () => {
      const currentProject = _classes_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getCurrentProject();
      currentProject.deleteTodo(task.id);
      taskElement.remove(); // Remove the task element from the DOM
    });
    img.appendChild(taskCheckbox);
    img.appendChild(deleteTaskImg);
    taskElement.appendChild(img);

    taskContainer.appendChild(taskElement);
    container.appendChild(taskContainer);
  }
}




/***/ }),

/***/ "./src/design/header.js":
/*!******************************!*\
  !*** ./src/design/header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _images_Logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/Logo.png */ "./src/images/Logo.png");



const renderHeader = () => {
  //create header todo
  const header = document.createElement("div");
  header.classList.add("header");

  // create logo
  const logo = document.createElement("img");
  logo.src = _images_Logo_png__WEBPACK_IMPORTED_MODULE_1__;
  logo.alt = `Todolist logo`;
  logo.classList.add("logoImg");

  header.appendChild(logo);
  document.body.appendChild(header);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);


/***/ }),

/***/ "./src/design/sidebar.js":
/*!*******************************!*\
  !*** ./src/design/sidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectCard: () => (/* binding */ createProjectCard),
/* harmony export */   renderSidebar: () => (/* binding */ renderSidebar)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/addIcon.png */ "./src/images/addIcon.png");
/* harmony import */ var _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/deleteIcon.png */ "./src/images/deleteIcon.png");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog */ "./src/design/dialog.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content */ "./src/design/content.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes */ "./src/classes.js");







// import { CURRENT_PROJECT } from "./dialog.js";

// sidebar
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

// sidebarHeader
const sidebarHeader = document.createElement("div");
sidebarHeader.classList.add("sidebarHeader");

const sidebarContainer = () => {
  const sidebarTitle = document.createElement("p");
  sidebarTitle.classList.add("sidebarTitle");
  sidebarTitle.textContent = `My Projects`;
  // add project button
  const addProjectIcon = document.createElement("img");
  addProjectIcon.classList.add("addProjectIcon");
  addProjectIcon.src = _images_addIcon_png__WEBPACK_IMPORTED_MODULE_1__;
  addProjectIcon.alt = `add project icon`;

  addProjectIcon.addEventListener("click", _dialog__WEBPACK_IMPORTED_MODULE_3__.showNewProjectDialog);
  sidebarHeader.appendChild(sidebarTitle);
  sidebarHeader.appendChild(addProjectIcon);
  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(sidebarContent);
  document.body.appendChild(sidebar);
};

const sidebarContent = document.createElement("div");
sidebarContent.classList.add("sidebarContent");

const createProjectCard = (project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("projectCard");

  const projectNameElement = document.createElement("p");
  projectNameElement.classList.add("projectName");
  projectNameElement.textContent = project;

  const deleteProjectIcon = document.createElement("img");
  deleteProjectIcon.classList.add("deleteProjectIcon");
  deleteProjectIcon.src = _images_deleteIcon_png__WEBPACK_IMPORTED_MODULE_2__;
  deleteProjectIcon.alt = `delete project Icon`;

  projectCard.appendChild(projectNameElement);
  projectCard.appendChild(deleteProjectIcon);
  sidebarContent.appendChild(projectCard);

  // Add event listener to the project card
  projectNameElement.addEventListener("click", () => {
    // const contentContainer = document.querySelector(".content-container");
    // if (contentContainer) {
    //   contentContainer.innerHTML = "";
    //   projectView(project);
    // }
    // const contentContainer = document.querySelector(".content-container");
    // if (contentContainer) {
    //   contentContainer.innerHTML = "";
    //   CURRENT_PROJECT = project;
    //   if (CURRENT_PROJECT.todos && CURRENT_PROJECT.todos.length > 0) {
    //     displayTasks(CURRENT_PROJECT.todos);
    //   } else {
    //     projectView(CURRENT_PROJECT);
    //   }
    // }
    const contentContainer = document.querySelector(".content-container");
    if (contentContainer) {
      contentContainer.innerHTML = "";
      const currentProject = _classes__WEBPACK_IMPORTED_MODULE_5__.projectManager.getCurrentProject();
      if (currentProject.todos && currentProject.todos.length > 0) {
        // contentContainer.innerHTML = "";
        (0,_content__WEBPACK_IMPORTED_MODULE_4__.projectView)(currentProject.projectName);
        (0,_dialog__WEBPACK_IMPORTED_MODULE_3__.displayTasks)(currentProject.todos);
      } else {
        (0,_content__WEBPACK_IMPORTED_MODULE_4__.projectView)(currentProject.projectName);
      }
    }
  });

  deleteProjectIcon.addEventListener("click", () => {
    projectCard.remove();
    const contentContainer = document.querySelector(".content-container");
    if (contentContainer) {
      contentContainer.innerHTML = "";
    }
  });
};

const renderSidebar = () => {
  sidebarContainer();
};


/***/ }),

/***/ "./src/images/Logo.png":
/*!*****************************!*\
  !*** ./src/images/Logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2f8295675bd3855b548c.png";

/***/ }),

/***/ "./src/images/addIcon.png":
/*!********************************!*\
  !*** ./src/images/addIcon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eac350e1a575b2f84575.png";

/***/ }),

/***/ "./src/images/deleteIcon.png":
/*!***********************************!*\
  !*** ./src/images/deleteIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7cbcdb6100436af31fb3.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _design_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./design/header */ "./src/design/header.js");
/* harmony import */ var _design_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./design/sidebar */ "./src/design/sidebar.js");
/* harmony import */ var _design_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design/content */ "./src/design/content.js");




(0,_design_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
_design_sidebar__WEBPACK_IMPORTED_MODULE_1__.renderSidebar();
(0,_design_content__WEBPACK_IMPORTED_MODULE_2__.renderMainContent)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUtBQWlLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFB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InNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9kZXNpZ24vY29udGVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvZGVzaWduL2RpYWxvZy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvZGVzaWduL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3QvLi9zcmMvZGVzaWduL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcclxuYm9keSxcclxuZGl2LFxyXG5zcGFuLFxyXG5hcHBsZXQsXHJcbm9iamVjdCxcclxuaWZyYW1lLFxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5wLFxyXG5ibG9ja3F1b3RlLFxyXG5wcmUsXHJcbmEsXHJcbmFiYnIsXHJcbmFjcm9ueW0sXHJcbmFkZHJlc3MsXHJcbmJpZyxcclxuY2l0ZSxcclxuY29kZSxcclxuZGVsLFxyXG5kZm4sXHJcbmVtLFxyXG5pbWcsXHJcbmlucyxcclxua2JkLFxyXG5xLFxyXG5zLFxyXG5zYW1wLFxyXG5zbWFsbCxcclxuc3RyaWtlLFxyXG5zdHJvbmcsXHJcbnN1Yixcclxuc3VwLFxyXG50dCxcclxudmFyLFxyXG5iLFxyXG51LFxyXG5pLFxyXG5jZW50ZXIsXHJcbmRsLFxyXG5kdCxcclxuZGQsXHJcbm9sLFxyXG51bCxcclxubGksXHJcbmZpZWxkc2V0LFxyXG5mb3JtLFxyXG5sYWJlbCxcclxubGVnZW5kLFxyXG50YWJsZSxcclxuY2FwdGlvbixcclxudGJvZHksXHJcbnRmb290LFxyXG50aGVhZCxcclxudHIsXHJcbnRoLFxyXG50ZCxcclxuYXJ0aWNsZSxcclxuYXNpZGUsXHJcbmNhbnZhcyxcclxuZGV0YWlscyxcclxuZW1iZWQsXHJcbmZpZ3VyZSxcclxuZmlnY2FwdGlvbixcclxuZm9vdGVyLFxyXG5oZWFkZXIsXHJcbmhncm91cCxcclxubWVudSxcclxubmF2LFxyXG5vdXRwdXQsXHJcbnJ1YnksXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnksXHJcbnRpbWUsXHJcbm1hcmssXHJcbmF1ZGlvLFxyXG52aWRlbyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5kZXRhaWxzLFxyXG5maWdjYXB0aW9uLFxyXG5maWd1cmUsXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsXHJcbnEge1xyXG4gIHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSxcclxuYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsXHJcbnE6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgY29udGVudDogbm9uZTtcclxufVxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLypcclxuICogVGhpcyBDU1MgY29kZSBibG9jayByZXNldHMgdGhlIGRlZmF1bHQgc3R5bGVzIG9mIHZhcmlvdXMgSFRNTCBlbGVtZW50cyB0byBlbnN1cmUgY29uc2lzdGVudCByZW5kZXJpbmcgYWNyb3NzIGRpZmZlcmVudCBicm93c2Vycy5cclxuICovXHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA5MHZoO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjB2dyA4MHZ3O1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIGhlYWRlciAqL1xyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDEwcHggMTVweCAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgZ3JpZC1yb3c6IDEvMjtcclxufVxyXG4ubG9nb0ltZyB7XHJcbiAgaGVpZ2h0OiAzLjVyZW07XHJcbn1cclxuXHJcbi8qIHNpZGViYXIgKi9cclxuLnNpZGViYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBncmlkLXJvdzogMi8zO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2lkZWJhclRpdGxlIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5hZGRQcm9qZWN0SWNvbiB7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG59XHJcblxyXG4uc2lkZWJhckhlYWRlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAyZnI7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcbi8qIG1haW4tY29udGFpbmVyICovXHJcblxyXG4uY29udGVudC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzgyOTU7XHJcbn1cclxuLmluaXRpYWxDb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcblxyXG4ud2VsY29tZS1jb250ZW50IHtcclxuICBtYXJnaW46IDQwcHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaWFsb2cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LXN1Ym1pdCB7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc4Mjk1O1xyXG59XHJcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0Q2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRlbGV0ZVByb2plY3RJY29uLFxyXG4uZGVsZXRlVGFza0ltZyB7XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG59XHJcblxyXG4ucHJvamVjdE5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0Q29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudFByb2plY3RUaXRsZSB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFkZFRhc2tCdXR0b24ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi50YXNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAzMHB4O1xyXG59XHJcbi50YXNrQ29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbn1cclxuXHJcbi5kZWxldGVUYXNrSW1nIHtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmNvbXBsZXRlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLnRhc2tDaGVja2JveCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uY2hlY2stZGVsZXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGdEQUFnRDtFQUNoRCxZQUFZO0FBQ2Q7O0FBRUEsV0FBVztBQUNYO0VBQ0UsNEJBQTRCO0VBQzVCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBLFlBQVk7QUFDWjtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7QUFDQSxtQkFBbUI7O0FBRW5CO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXHJcXG5ib2R5LFxcclxcbmRpdixcXHJcXG5zcGFuLFxcclxcbmFwcGxldCxcXHJcXG5vYmplY3QsXFxyXFxuaWZyYW1lLFxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2LFxcclxcbnAsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5wcmUsXFxyXFxuYSxcXHJcXG5hYmJyLFxcclxcbmFjcm9ueW0sXFxyXFxuYWRkcmVzcyxcXHJcXG5iaWcsXFxyXFxuY2l0ZSxcXHJcXG5jb2RlLFxcclxcbmRlbCxcXHJcXG5kZm4sXFxyXFxuZW0sXFxyXFxuaW1nLFxcclxcbmlucyxcXHJcXG5rYmQsXFxyXFxucSxcXHJcXG5zLFxcclxcbnNhbXAsXFxyXFxuc21hbGwsXFxyXFxuc3RyaWtlLFxcclxcbnN0cm9uZyxcXHJcXG5zdWIsXFxyXFxuc3VwLFxcclxcbnR0LFxcclxcbnZhcixcXHJcXG5iLFxcclxcbnUsXFxyXFxuaSxcXHJcXG5jZW50ZXIsXFxyXFxuZGwsXFxyXFxuZHQsXFxyXFxuZGQsXFxyXFxub2wsXFxyXFxudWwsXFxyXFxubGksXFxyXFxuZmllbGRzZXQsXFxyXFxuZm9ybSxcXHJcXG5sYWJlbCxcXHJcXG5sZWdlbmQsXFxyXFxudGFibGUsXFxyXFxuY2FwdGlvbixcXHJcXG50Ym9keSxcXHJcXG50Zm9vdCxcXHJcXG50aGVhZCxcXHJcXG50cixcXHJcXG50aCxcXHJcXG50ZCxcXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmNhbnZhcyxcXHJcXG5kZXRhaWxzLFxcclxcbmVtYmVkLFxcclxcbmZpZ3VyZSxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1lbnUsXFxyXFxubmF2LFxcclxcbm91dHB1dCxcXHJcXG5ydWJ5LFxcclxcbnNlY3Rpb24sXFxyXFxuc3VtbWFyeSxcXHJcXG50aW1lLFxcclxcbm1hcmssXFxyXFxuYXVkaW8sXFxyXFxudmlkZW8ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmRldGFpbHMsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5maWd1cmUsXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSxcXHJcXG5xIHtcXHJcXG4gIHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxyXFxuYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSxcXHJcXG5xOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbiAqIFRoaXMgQ1NTIGNvZGUgYmxvY2sgcmVzZXRzIHRoZSBkZWZhdWx0IHN0eWxlcyBvZiB2YXJpb3VzIEhUTUwgZWxlbWVudHMgdG8gZW5zdXJlIGNvbnNpc3RlbnQgcmVuZGVyaW5nIGFjcm9zcyBkaWZmZXJlbnQgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDkwdmg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwdncgODB2dztcXHJcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaGVhZGVyICovXFxyXFxuLmhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDEwcHggMTVweCAzMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgZ3JpZC1yb3c6IDEvMjtcXHJcXG59XFxyXFxuLmxvZ29JbWcge1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHNpZGViYXIgKi9cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdyaWQtcm93OiAyLzM7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyVGl0bGUge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRQcm9qZWN0SWNvbiB7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhckhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyO1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG4vKiBtYWluLWNvbnRhaW5lciAqL1xcclxcblxcclxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTc4Mjk1O1xcclxcbn1cXHJcXG4uaW5pdGlhbENvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtY29udGVudCB7XFxyXFxuICBtYXJnaW46IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS4zO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLmNsb3NlLWJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1zdWJtaXQge1xcclxcbiAgbWFyZ2luOiAzMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNzgyOTU7XFxyXFxufVxcclxcbi5wcm9qZWN0LW5hbWUtaW5wdXQge1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIG1hcmdpbjogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RDYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZVByb2plY3RJY29uLFxcclxcbi5kZWxldGVUYXNrSW1nIHtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0TmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Q29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudFByb2plY3RUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uYWRkVGFza0J1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAzMHB4IDEwcHggMzBweDtcXHJcXG59XFxyXFxuLnRhc2tDb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiA2MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlVGFza0ltZyB7XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG59XFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuLnRhc2tDaGVja2JveCB7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNoZWNrLWRlbGV0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IocHJvamVjdE5hbWUsIGlkKSB7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKHRhc2spIHtcclxuICAgIHRoaXMudG9kb3MucHVzaCh0YXNrKTtcclxuICB9XHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICB9XHJcbiAgZGVsZXRlVG9kbyh0YXNrSWQpIHtcclxuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrcyB7XHJcbiAgY29uc3RydWN0b3IodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaWQpIHtcclxuICAgIHRoaXMudGFza05hbWUgPSB0YXNrTmFtZTtcclxuICAgIHRoaXMudGFza0Rlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0Rm9ybWF0dGVkRHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG4gICAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgICAgbW9udGg6IFwibG9uZ1wiLFxyXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG1hcmtBc0luY29tcGxldGUoKSB7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbWFya0FzQ29tcGxldGVkKCkge1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gIH1cclxufVxyXG4vL2NoYW5nZXMgbWFkZSBub3dcclxuLy8gcHJvamVjdE1hbmFnZXIuanNcclxuZXhwb3J0IGNsYXNzIFByb2plY3RNYW5hZ2VyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY3VycmVudFByb2plY3QgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgc2V0Q3VycmVudFByb2plY3QocHJvamVjdCkge1xyXG4gICAgdGhpcy5jdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50UHJvamVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQcm9qZWN0O1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgcHJvamVjdE1hbmFnZXIgPSBuZXcgUHJvamVjdE1hbmFnZXIoKTtcclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBzaG93TmV3VGFza3NEaWFsb2cgfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtY29udGFpbmVyXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbml0aWFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW5pdGlhbENvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IHdlbGNvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWxjb21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS1jb250ZW50XCIpO1xyXG4gIHdlbGNvbWVDb250ZW50LnRleHRDb250ZW50ID0gYGNyZWF0ZSBhIG5ldyBwcm9qZWN0IGJ5IGNsaWNraW5nIHRoZSArIGJ1dHRvbiBvciBzZWxlY3QgYW4gZXhpc3Rpbmcgb25lIHRvIHN0YXJ0IGFkZGluZyB5b3VyIHRhc2tzYDtcclxuXHJcbiAgaW5pdGlhbENvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZUNvbnRlbnQpO1xyXG5cclxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGluaXRpYWxDb250ZW50KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnRDb250YWluZXIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RWaWV3ID0gKHByb2plY3QpID0+IHtcclxuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Q29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdDtcclxuICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRQcm9qZWN0VGl0bGVcIik7XHJcblxyXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgYWRkVGFza0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcclxuICBhZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRUYXNrQnV0dG9uXCIpO1xyXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOZXdUYXNrc0RpYWxvZyk7XHJcblxyXG4gIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J1dHRvbik7XHJcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJNYWluQ29udGVudCA9ICgpID0+IHtcclxuICBtYWluQ29udGVudCgpO1xyXG59O1xyXG4iLCJpbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IFByb2plY3QsIFRhc2tzIH0gZnJvbSBcIi4uL2NsYXNzZXMuanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vY2xhc3Nlcy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gXCIuL3NpZGViYXIuanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdFZpZXcgfSBmcm9tIFwiLi9jb250ZW50LmpzXCI7XHJcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCIuLi9pbWFnZXMvZGVsZXRlSWNvbi5wbmdcIjtcclxubGV0IFBST0pFQ1RfSUQgPSAwO1xyXG4vLyBleHBvcnQgbGV0IENVUlJFTlRfUFJPSkVDVCA9IG51bGw7XHJcbmZ1bmN0aW9uIHNob3dOZXdQcm9qZWN0RGlhbG9nKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgZGlhbG9nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkTmV3UHJvamVjdERpYWxvZ1wiKTtcclxuXHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICBpbnB1dC5uYW1lID0gXCJwcm9qZWN0LW5hbWVcIjtcclxuICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgcHJvamVjdCBuYW1lXCI7XHJcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmFtZS1pbnB1dFwiKTtcclxuXHJcbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idXR0b25cIik7XHJcbiAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuICB9KTtcclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc3VibWl0XCIpO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBBZGQgUHJvamVjdGA7XHJcblxyXG4gIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy8gQ1VSUkVOVF9QUk9KRUNUID0gY3JlYXRlUHJvamVjdChpbnB1dCwgY3JlYXRlUHJvamVjdENhcmQsIGRpYWxvZyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhDVVJSRU5UX1BST0pFQ1QpO1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QoaW5wdXQsIGNyZWF0ZVByb2plY3RDYXJkLCBkaWFsb2cpO1xyXG4gICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QobmV3UHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpbnB1dCwgY3JlYXRlUHJvamVjdENhcmQsIGRpYWxvZykge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdC5pZCA9IFBST0pFQ1RfSUQrKztcclxuXHJcbiAgICAvL2NsZWFyIGlucHV0IGZpZWxkc1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgY3JlYXRlUHJvamVjdENhcmQocHJvamVjdC5wcm9qZWN0TmFtZSk7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdDtcclxuICB9XHJcblxyXG4gIGRpYWxvZy5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgZGlhbG9nLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICBkaWFsb2cuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaWFsb2cpO1xyXG4gIGRpYWxvZy5zaG93TW9kYWwoKTtcclxuICByZXR1cm4gZGlhbG9nO1xyXG59XHJcbmxldCBUQVNLX0lEID0gMDtcclxuZnVuY3Rpb24gc2hvd05ld1Rhc2tzRGlhbG9nKCkge1xyXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XHJcbiAgZGlhbG9nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkTmV3VGFza3NEaWFsb2dcIik7XHJcblxyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xyXG5cclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcblxyXG4gIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza05hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgdGFza05hbWVJbnB1dC5uYW1lID0gXCJ0YXNrLW5hbWVcIjtcclxuICB0YXNrTmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciB0YXNrIG5hbWVcIjtcclxuICB0YXNrTmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW5hbWUtaW5wdXRcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJ0YXNrLWRlc2NyaXB0aW9uXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHRhc2sgZGVzY3JpcHRpb25cIjtcclxuICB0YXNrRGVzY3JpcHRpb25JbnB1dC5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvbi1pbnB1dFwiKTtcclxuXHJcbiAgY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrRHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICB0YXNrRHVlRGF0ZUlucHV0Lm5hbWUgPSBcInRhc2stZHVlLWRhdGVcIjtcclxuICB0YXNrRHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWR1ZS1kYXRlLWlucHV0XCIpO1xyXG5cclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcclxuICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XHJcbiAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcclxuICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInRhc2stc3VibWl0XCIpO1xyXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcclxuXHJcbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKFxyXG4gICAgICB0YXNrTmFtZUlucHV0LFxyXG4gICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dCxcclxuICAgICAgdGFza0R1ZURhdGVJbnB1dCxcclxuICAgICAgVEFTS19JRCxcclxuICAgICAgZGlhbG9nXHJcbiAgICApO1xyXG4gICAgLy8gQ1VSUkVOVF9QUk9KRUNULmFkZFRhc2sodGFzayk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhDVVJSRU5UX1BST0pFQ1QpO1xyXG4gICAgLy8gZGlzcGxheVRhc2tzKENVUlJFTlRfUFJPSkVDVCk7XHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKHRhc2spO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgZGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcclxuICB9KTtcclxuICBmdW5jdGlvbiBjcmVhdGVUYXNrKFxyXG4gICAgdGFza05hbWVJbnB1dCxcclxuICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LFxyXG4gICAgdGFza0R1ZURhdGVJbnB1dCxcclxuICAgIFRBU0tfSUQsXHJcblxyXG4gICAgZGlhbG9nXHJcbiAgKSB7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IHRhc2tOYW1lSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gdGFza0R1ZURhdGVJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBsZXQgdGFzayA9IG5ldyBUYXNrcyh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSk7XHJcbiAgICB0YXNrLmlkID0gVEFTS19JRCsrO1xyXG4gICAgLy9uZXcgY29kZVxyXG5cclxuICAgIC8vIENsZWFyIGlucHV0IGZpZWxkc1xyXG4gICAgdGFza05hbWVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm4gdGFzaztcclxuICB9XHJcblxyXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb25JbnB1dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZUlucHV0KTtcclxuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XHJcblxyXG4gIGRpYWxvZy5hcHBlbmRDaGlsZChoMSk7XHJcbiAgZGlhbG9nLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcclxuICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgcmV0dXJuIGRpYWxvZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCB0YXNrQ29udGFpbmVyLCBjb250YWluZXIpIHtcclxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgY29uc3QgdGFza3MgPSBjdXJyZW50UHJvamVjdC5nZXRUb2RvcygpO1xyXG4gIHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XHJcbiAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcclxuXHJcbiAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBgYDtcclxuICBwcm9qZWN0Vmlldyhwcm9qZWN0LnByb2plY3ROYW1lKTtcclxuXHJcbiAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xyXG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRlbnRcIik7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50YXNrTmFtZTtcclxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2sudGFza0Rlc2NyaXB0aW9uO1xyXG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuXHJcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmdldEZvcm1hdHRlZER1ZURhdGUoKTtcclxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcclxuICAgIHRhc2tFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcclxuXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjaGVjay1kZWxldGVcIik7XHJcbiAgICAvLyBDcmVhdGUgYSBjaGVja2JveFxyXG4gICAgY29uc3QgdGFza0NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza0NoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XHJcbiAgICB0YXNrQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInRhc2tDaGVja2JveFwiKTtcclxuICAgIHRhc2tDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICAgICAgaWYgKHRhc2tDaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICAgICAgdGFzay5tYXJrQXNDb21wbGV0ZWQoKTtcclxuICAgICAgICB0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhc2subWFya0FzSW5jb21wbGV0ZSgpOyAvLyBZb3UnbGwgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyBtZXRob2QgaW4geW91ciBUb2RvIGNsYXNzXHJcbiAgICAgICAgdGFza0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbXBsZXRlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFza0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBkZWxldGVUYXNrSW1nLnNyYyA9IGRlbGV0ZUljb247XHJcbiAgICBkZWxldGVUYXNrSW1nLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVUYXNrSW1nXCIpO1xyXG5cclxuICAgIGRlbGV0ZVRhc2tJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICBjdXJyZW50UHJvamVjdC5kZWxldGVUb2RvKHRhc2suaWQpO1xyXG4gICAgICB0YXNrRWxlbWVudC5yZW1vdmUoKTsgLy8gUmVtb3ZlIHRoZSB0YXNrIGVsZW1lbnQgZnJvbSB0aGUgRE9NXHJcbiAgICB9KTtcclxuICAgIGltZy5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tib3gpO1xyXG4gICAgaW1nLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tJbWcpO1xyXG4gICAgdGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dOZXdQcm9qZWN0RGlhbG9nLCBzaG93TmV3VGFza3NEaWFsb2cgfTtcclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgbG9nb0ltZyBmcm9tIFwiLi4vaW1hZ2VzL0xvZ28ucG5nXCI7XHJcblxyXG5jb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XHJcbiAgLy9jcmVhdGUgaGVhZGVyIHRvZG9cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xyXG5cclxuICAvLyBjcmVhdGUgbG9nb1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxvZ28uc3JjID0gbG9nb0ltZztcclxuICBsb2dvLmFsdCA9IGBUb2RvbGlzdCBsb2dvYDtcclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvSW1nXCIpO1xyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIZWFkZXI7XHJcbiIsImltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4uL2ltYWdlcy9hZGRJY29uLnBuZ1wiO1xyXG5pbXBvcnQgZGVsZXRlUHJvamVjdCBmcm9tIFwiLi4vaW1hZ2VzL2RlbGV0ZUljb24ucG5nXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlUYXNrcywgc2hvd05ld1Byb2plY3REaWFsb2cgfSBmcm9tIFwiLi9kaWFsb2dcIjtcclxuaW1wb3J0IHsgcHJvamVjdFZpZXcgfSBmcm9tIFwiLi9jb250ZW50XCI7XHJcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4uL2NsYXNzZXNcIjtcclxuXHJcbi8vIGltcG9ydCB7IENVUlJFTlRfUFJPSkVDVCB9IGZyb20gXCIuL2RpYWxvZy5qc1wiO1xyXG5cclxuLy8gc2lkZWJhclxyXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcclxuXHJcbi8vIHNpZGViYXJIZWFkZXJcclxuY29uc3Qgc2lkZWJhckhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbnNpZGViYXJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInNpZGViYXJIZWFkZXJcIik7XHJcblxyXG5jb25zdCBzaWRlYmFyQ29udGFpbmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNpZGViYXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHNpZGViYXJUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclRpdGxlXCIpO1xyXG4gIHNpZGViYXJUaXRsZS50ZXh0Q29udGVudCA9IGBNeSBQcm9qZWN0c2A7XHJcbiAgLy8gYWRkIHByb2plY3QgYnV0dG9uXHJcbiAgY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJhZGRQcm9qZWN0SWNvblwiKTtcclxuICBhZGRQcm9qZWN0SWNvbi5zcmMgPSBhZGRQcm9qZWN0O1xyXG4gIGFkZFByb2plY3RJY29uLmFsdCA9IGBhZGQgcHJvamVjdCBpY29uYDtcclxuXHJcbiAgYWRkUHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dOZXdQcm9qZWN0RGlhbG9nKTtcclxuICBzaWRlYmFySGVhZGVyLmFwcGVuZENoaWxkKHNpZGViYXJUaXRsZSk7XHJcbiAgc2lkZWJhckhlYWRlci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0SWNvbik7XHJcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGVyKTtcclxuICBzaWRlYmFyLmFwcGVuZENoaWxkKHNpZGViYXJDb250ZW50KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG59O1xyXG5cclxuY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zaWRlYmFyQ29udGVudC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhckNvbnRlbnRcIik7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAocHJvamVjdCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdENhcmRcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHByb2plY3ROYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVcIik7XHJcbiAgcHJvamVjdE5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdDtcclxuXHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGRlbGV0ZVByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVQcm9qZWN0SWNvblwiKTtcclxuICBkZWxldGVQcm9qZWN0SWNvbi5zcmMgPSBkZWxldGVQcm9qZWN0O1xyXG4gIGRlbGV0ZVByb2plY3RJY29uLmFsdCA9IGBkZWxldGUgcHJvamVjdCBJY29uYDtcclxuXHJcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVFbGVtZW50KTtcclxuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0SWNvbik7XHJcbiAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xyXG5cclxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIHByb2plY3QgY2FyZFxyXG4gIHByb2plY3ROYW1lRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgLy8gY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XHJcbiAgICAvLyBpZiAoY29udGVudENvbnRhaW5lcikge1xyXG4gICAgLy8gICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAvLyAgIHByb2plY3RWaWV3KHByb2plY3QpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XHJcbiAgICAvLyBpZiAoY29udGVudENvbnRhaW5lcikge1xyXG4gICAgLy8gICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAvLyAgIENVUlJFTlRfUFJPSkVDVCA9IHByb2plY3Q7XHJcbiAgICAvLyAgIGlmIChDVVJSRU5UX1BST0pFQ1QudG9kb3MgJiYgQ1VSUkVOVF9QUk9KRUNULnRvZG9zLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICBkaXNwbGF5VGFza3MoQ1VSUkVOVF9QUk9KRUNULnRvZG9zKTtcclxuICAgIC8vICAgfSBlbHNlIHtcclxuICAgIC8vICAgICBwcm9qZWN0VmlldyhDVVJSRU5UX1BST0pFQ1QpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcclxuICAgIGlmIChjb250ZW50Q29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICBpZiAoY3VycmVudFByb2plY3QudG9kb3MgJiYgY3VycmVudFByb2plY3QudG9kb3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBwcm9qZWN0VmlldyhjdXJyZW50UHJvamVjdC5wcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgZGlzcGxheVRhc2tzKGN1cnJlbnRQcm9qZWN0LnRvZG9zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9qZWN0VmlldyhjdXJyZW50UHJvamVjdC5wcm9qZWN0TmFtZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZGVsZXRlUHJvamVjdEljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHByb2plY3RDYXJkLnJlbW92ZSgpO1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XHJcbiAgICBpZiAoY29udGVudENvbnRhaW5lcikge1xyXG4gICAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyU2lkZWJhciA9ICgpID0+IHtcclxuICBzaWRlYmFyQ29udGFpbmVyKCk7XHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcmVuZGVySGVhZGVyIGZyb20gXCIuL2Rlc2lnbi9oZWFkZXJcIjtcclxuaW1wb3J0ICogYXMgc2lkZWJhciBmcm9tIFwiLi9kZXNpZ24vc2lkZWJhclwiO1xyXG5pbXBvcnQgeyByZW5kZXJNYWluQ29udGVudCB9IGZyb20gXCIuL2Rlc2lnbi9jb250ZW50XCI7XHJcblxyXG5yZW5kZXJIZWFkZXIoKTtcclxuc2lkZWJhci5yZW5kZXJTaWRlYmFyKCk7XHJcbnJlbmRlck1haW5Db250ZW50KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==