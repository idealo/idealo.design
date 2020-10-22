webpackHotUpdate("static/development/pages/elements/[element].js",{

/***/ "./components/ElementPage/ElementBody.js":
/*!***********************************************!*\
  !*** ./components/ElementPage/ElementBody.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ElementBody; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-highlight */ "./node_modules/react-highlight/index.js");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Card */ "./components/Card/index.js");
/* harmony import */ var _ElementBody_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElementBody.module.scss */ "./components/ElementPage/ElementBody.module.scss");
/* harmony import */ var _ElementBody_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ElementBody_module_scss__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/nicolas.forgerit/idealo/fux/catalog/components/ElementPage/ElementBody.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;








function H1(section) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, section.title), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: section.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
}

function H2(section) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("a", {
    name: section.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, section.title), __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: section.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
}

function P(section) {
  return __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: section.content
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  });
}

function Code(section) {
  console.log('section', section);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, section.content);
}

var ElementBody = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ElementBody, _React$Component);

  function ElementBody(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ElementBody);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ElementBody).call(this, props));
    _this.emitStickyEvent = _this.emitStickyEvent.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ElementBody, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.emitStickyEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.emitStickyEvent);
    }
  }, {
    key: "emitStickyEvent",
    value: function emitStickyEvent() {
      var y = window.scrollY || window.pageYOffset;

      if (y > 150) {
        var enableSticky = new Event('Header:enableSticky');
        window.dispatchEvent(enableSticky);
      } else {
        var disableSticky = new Event('Header:disableSticky');
        window.dispatchEvent(disableSticky);
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.element) return null;
      var element = this.props.element;
      var sections = element.sections;
      console.log('ElementBody element', element);
      var style = {
        display: 'block',
        position: 'relative',
        top: '-7rem',
        visibility: 'hidden'
      };
      return __jsx("div", {
        className: _ElementBody_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.ElementBody,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, sections.map(function (section, idx) {
        return __jsx("div", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }, section.type === 'h1' && H1(section), section.type === 'h2' && H2(section), section.type === 'p' && P(section), section.type === 'code' && Code(section));
      }))));
    }
  }]);

  return ElementBody;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#c5c8c6",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#c5c8c6",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em",
    "background": "#1d1f21"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#1d1f21",
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#7C7C7C"
  },
  "prolog": {
    "color": "#7C7C7C"
  },
  "doctype": {
    "color": "#7C7C7C"
  },
  "cdata": {
    "color": "#7C7C7C"
  },
  "punctuation": {
    "color": "#c5c8c6"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#96CBFE"
  },
  "keyword": {
    "color": "#96CBFE"
  },
  "tag": {
    "color": "#96CBFE"
  },
  "class-name": {
    "color": "#FFFFB6",
    "textDecoration": "underline"
  },
  "boolean": {
    "color": "#99CC99"
  },
  "constant": {
    "color": "#99CC99"
  },
  "symbol": {
    "color": "#f92672"
  },
  "deleted": {
    "color": "#f92672"
  },
  "number": {
    "color": "#FF73FD"
  },
  "selector": {
    "color": "#A8FF60"
  },
  "attr-name": {
    "color": "#A8FF60"
  },
  "string": {
    "color": "#A8FF60"
  },
  "char": {
    "color": "#A8FF60"
  },
  "builtin": {
    "color": "#A8FF60"
  },
  "inserted": {
    "color": "#A8FF60"
  },
  "variable": {
    "color": "#C6C5FE"
  },
  "operator": {
    "color": "#EDEDED"
  },
  "entity": {
    "color": "#FFFFB6",
    "cursor": "help"
  },
  "url": {
    "color": "#96CBFE"
  },
  ".language-css .token.string": {
    "color": "#87C38A"
  },
  ".style .token.string": {
    "color": "#87C38A"
  },
  "atrule": {
    "color": "#F9EE98"
  },
  "attr-value": {
    "color": "#F9EE98"
  },
  "function": {
    "color": "#DAD085"
  },
  "regex": {
    "color": "#E9C062"
  },
  "important": {
    "color": "#fd971f",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#f5f7ff",
    "color": "#5e6687"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#f5f7ff",
    "color": "#5e6687",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#dfe2f1"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#898ea4"
  },
  "prolog": {
    "color": "#898ea4"
  },
  "doctype": {
    "color": "#898ea4"
  },
  "cdata": {
    "color": "#898ea4"
  },
  "punctuation": {
    "color": "#5e6687"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "operator": {
    "color": "#c76b29"
  },
  "boolean": {
    "color": "#c76b29"
  },
  "number": {
    "color": "#c76b29"
  },
  "property": {
    "color": "#c08b30"
  },
  "tag": {
    "color": "#3d8fd1"
  },
  "string": {
    "color": "#22a2c9"
  },
  "selector": {
    "color": "#6679cc"
  },
  "attr-name": {
    "color": "#c76b29"
  },
  "entity": {
    "color": "#22a2c9",
    "cursor": "help"
  },
  "url": {
    "color": "#22a2c9"
  },
  ".language-css .token.string": {
    "color": "#22a2c9"
  },
  ".style .token.string": {
    "color": "#22a2c9"
  },
  "attr-value": {
    "color": "#ac9739"
  },
  "keyword": {
    "color": "#ac9739"
  },
  "control": {
    "color": "#ac9739"
  },
  "directive": {
    "color": "#ac9739"
  },
  "unit": {
    "color": "#ac9739"
  },
  "statement": {
    "color": "#22a2c9"
  },
  "regex": {
    "color": "#22a2c9"
  },
  "atrule": {
    "color": "#22a2c9"
  },
  "placeholder": {
    "color": "#3d8fd1"
  },
  "variable": {
    "color": "#3d8fd1"
  },
  "deleted": {
    "textDecoration": "line-through"
  },
  "inserted": {
    "borderBottom": "1px dotted #202746",
    "textDecoration": "none"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "important": {
    "fontWeight": "bold",
    "color": "#c94922"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": "0.4em solid #c94922",
    "OutlineOffset": ".4em"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#dfe2f1"
  },
  ".line-numbers-rows > span:before": {
    "color": "#979db4"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/cb.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/cb.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#fff",
    "textShadow": "0 1px 1px #000",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "direction": "ltr",
    "textAlign": "left",
    "wordSpacing": "normal",
    "whiteSpace": "pre",
    "wordWrap": "normal",
    "lineHeight": "1.4",
    "background": "none",
    "border": "0",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#fff",
    "textShadow": "0 1px 1px #000",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "direction": "ltr",
    "textAlign": "left",
    "wordSpacing": "normal",
    "whiteSpace": "pre",
    "wordWrap": "normal",
    "lineHeight": "1.4",
    "background": "#222",
    "border": "0",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "15px",
    "margin": "1em 0",
    "overflow": "auto",
    "MozBorderRadius": "8px",
    "WebkitBorderRadius": "8px",
    "borderRadius": "8px"
  },
  "pre[class*=\"language-\"] code": {
    "float": "left",
    "padding": "0 15px 0 0"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#222",
    "padding": "5px 10px",
    "lineHeight": "1",
    "MozBorderRadius": "3px",
    "WebkitBorderRadius": "3px",
    "borderRadius": "3px"
  },
  "comment": {
    "color": "#797979"
  },
  "prolog": {
    "color": "#797979"
  },
  "doctype": {
    "color": "#797979"
  },
  "cdata": {
    "color": "#797979"
  },
  "selector": {
    "color": "#fff"
  },
  "operator": {
    "color": "#fff"
  },
  "punctuation": {
    "color": "#fff"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "#ffd893"
  },
  "boolean": {
    "color": "#ffd893"
  },
  "atrule": {
    "color": "#B0C975"
  },
  "attr-value": {
    "color": "#B0C975"
  },
  "hex": {
    "color": "#B0C975"
  },
  "string": {
    "color": "#B0C975"
  },
  "property": {
    "color": "#c27628"
  },
  "entity": {
    "color": "#c27628",
    "cursor": "help"
  },
  "url": {
    "color": "#c27628"
  },
  "attr-name": {
    "color": "#c27628"
  },
  "keyword": {
    "color": "#c27628"
  },
  "regex": {
    "color": "#9B71C6"
  },
  "function": {
    "color": "#e5a638"
  },
  "constant": {
    "color": "#e5a638"
  },
  "variable": {
    "color": "#fdfba8"
  },
  "number": {
    "color": "#8799B0"
  },
  "important": {
    "color": "#E45734"
  },
  "deliminator": {
    "color": "#E45734"
  },
  "pre[data-line]": {
    "position": "relative",
    "padding": "1em 0 1em 3em"
  },
  ".line-highlight": {
    "position": "absolute",
    "left": "0",
    "right": "0",
    "marginTop": "1em",
    "background": "rgba(255,255,255,.2)",
    "pointerEvents": "none",
    "lineHeight": "inherit",
    "whiteSpace": "pre"
  },
  ".line-highlight:before": {
    "content": "attr(data-start)",
    "position": "absolute",
    "top": ".3em",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0 .5em",
    "backgroundColor": "rgba(255,255,255,.3)",
    "color": "#fff",
    "font": "bold 65%/1.5 sans-serif",
    "textAlign": "center",
    "MozBorderRadius": "8px",
    "WebkitBorderRadius": "8px",
    "borderRadius": "8px",
    "textShadow": "none"
  },
  ".line-highlight[data-end]:after": {
    "content": "attr(data-end)",
    "position": "absolute",
    "top": "auto",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0 .5em",
    "backgroundColor": "rgba(255,255,255,.3)",
    "color": "#fff",
    "font": "bold 65%/1.5 sans-serif",
    "textAlign": "center",
    "MozBorderRadius": "8px",
    "WebkitBorderRadius": "8px",
    "borderRadius": "8px",
    "textShadow": "none",
    "bottom": ".4em"
  },
  ".line-numbers-rows": {
    "margin": "0"
  },
  ".line-numbers-rows span": {
    "paddingRight": "10px",
    "borderRight": "3px #d9d336 solid"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coy.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coy.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "black",
    "background": "none",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "black",
    "background": "none",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "position": "relative",
    "margin": ".5em 0",
    "overflow": "visible",
    "padding": "0",
    "backgroundColor": "#fdfdfd",
    "WebkitBoxSizing": "border-box",
    "MozBoxSizing": "border-box",
    "boxSizing": "border-box",
    "marginBottom": "1em"
  },
  "pre[class*=\"language-\"]>code": {
    "position": "relative",
    "borderLeft": "10px solid #358ccb",
    "boxShadow": "-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",
    "backgroundColor": "#fdfdfd",
    "backgroundImage": "linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",
    "backgroundSize": "3em 3em",
    "backgroundOrigin": "content-box",
    "backgroundAttachment": "local"
  },
  "code[class*=\"language\"]": {
    "maxHeight": "inherit",
    "height": "inherit",
    "padding": "0 1em",
    "display": "block",
    "overflow": "auto"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "backgroundColor": "#fdfdfd",
    "WebkitBoxSizing": "border-box",
    "MozBoxSizing": "border-box",
    "boxSizing": "border-box",
    "marginBottom": "1em",
    "position": "relative",
    "padding": ".2em",
    "borderRadius": "0.3em",
    "color": "#c92c2c",
    "border": "1px solid rgba(0, 0, 0, 0.1)",
    "display": "inline",
    "whiteSpace": "normal"
  },
  "pre[class*=\"language-\"]:before": {
    "content": "''",
    "zIndex": "-2",
    "display": "block",
    "position": "absolute",
    "bottom": "0.75em",
    "left": "0.18em",
    "width": "40%",
    "height": "20%",
    "maxHeight": "13em",
    "boxShadow": "0px 13px 8px #979797",
    "WebkitTransform": "rotate(-2deg)",
    "MozTransform": "rotate(-2deg)",
    "msTransform": "rotate(-2deg)",
    "OTransform": "rotate(-2deg)",
    "transform": "rotate(-2deg)"
  },
  "pre[class*=\"language-\"]:after": {
    "content": "''",
    "zIndex": "-2",
    "display": "block",
    "position": "absolute",
    "bottom": "0.75em",
    "left": "auto",
    "width": "40%",
    "height": "20%",
    "maxHeight": "13em",
    "boxShadow": "0px 13px 8px #979797",
    "WebkitTransform": "rotate(2deg)",
    "MozTransform": "rotate(2deg)",
    "msTransform": "rotate(2deg)",
    "OTransform": "rotate(2deg)",
    "transform": "rotate(2deg)",
    "right": "0.75em"
  },
  ":not(pre) > code[class*=\"language-\"]:after": {
    "right": "0.75em",
    "left": "auto",
    "WebkitTransform": "rotate(2deg)",
    "MozTransform": "rotate(2deg)",
    "msTransform": "rotate(2deg)",
    "OTransform": "rotate(2deg)",
    "transform": "rotate(2deg)"
  },
  "comment": {
    "color": "#7D8B99"
  },
  "block-comment": {
    "color": "#7D8B99"
  },
  "prolog": {
    "color": "#7D8B99"
  },
  "doctype": {
    "color": "#7D8B99"
  },
  "cdata": {
    "color": "#7D8B99"
  },
  "punctuation": {
    "color": "#5F6364"
  },
  "property": {
    "color": "#c92c2c"
  },
  "tag": {
    "color": "#c92c2c"
  },
  "boolean": {
    "color": "#c92c2c"
  },
  "number": {
    "color": "#c92c2c"
  },
  "function-name": {
    "color": "#c92c2c"
  },
  "constant": {
    "color": "#c92c2c"
  },
  "symbol": {
    "color": "#c92c2c"
  },
  "deleted": {
    "color": "#c92c2c"
  },
  "selector": {
    "color": "#2f9c0a"
  },
  "attr-name": {
    "color": "#2f9c0a"
  },
  "string": {
    "color": "#2f9c0a"
  },
  "char": {
    "color": "#2f9c0a"
  },
  "function": {
    "color": "#2f9c0a"
  },
  "builtin": {
    "color": "#2f9c0a"
  },
  "inserted": {
    "color": "#2f9c0a"
  },
  "operator": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "entity": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)",
    "cursor": "help"
  },
  "url": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "variable": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "atrule": {
    "color": "#1990b8"
  },
  "attr-value": {
    "color": "#1990b8"
  },
  "keyword": {
    "color": "#1990b8"
  },
  "class-name": {
    "color": "#1990b8"
  },
  "regex": {
    "color": "#e90"
  },
  "important": {
    "color": "#e90",
    "fontWeight": "normal"
  },
  ".language-css .token.string": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)"
  },
  ".style .token.string": {
    "color": "#a67f59",
    "background": "rgba(255, 255, 255, 0.5)"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "tab:not(:empty):before": {
    "color": "#e0d7d1"
  },
  "cr:before": {
    "color": "#e0d7d1"
  },
  "lf:before": {
    "color": "#e0d7d1"
  },
  "pre[class*=\"language-\"].line-numbers.line-numbers": {
    "paddingLeft": "0"
  },
  "pre[class*=\"language-\"].line-numbers.line-numbers code": {
    "paddingLeft": "3.8em"
  },
  "pre[class*=\"language-\"].line-numbers.line-numbers .line-numbers-rows": {
    "left": "0"
  },
  "pre[class*=\"language-\"][data-line]": {
    "paddingTop": "0",
    "paddingBottom": "0",
    "paddingLeft": "0"
  },
  "pre[data-line] code": {
    "position": "relative",
    "paddingLeft": "4em"
  },
  "pre .line-highlight": {
    "marginTop": "0"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#a9b7c6",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#a9b7c6",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "background": "#2b2b2b"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "pre[class*=\"language-\"]::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "pre[class*=\"language-\"] ::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"]::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  "code[class*=\"language-\"] ::selection": {
    "color": "inherit",
    "background": "rgba(33,66,131,.85)"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#2b2b2b",
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#808080"
  },
  "prolog": {
    "color": "#808080"
  },
  "cdata": {
    "color": "#808080"
  },
  "delimiter": {
    "color": "#cc7832"
  },
  "boolean": {
    "color": "#cc7832"
  },
  "keyword": {
    "color": "#cc7832"
  },
  "selector": {
    "color": "#cc7832"
  },
  "important": {
    "color": "#cc7832"
  },
  "atrule": {
    "color": "#cc7832"
  },
  "operator": {
    "color": "#a9b7c6"
  },
  "punctuation": {
    "color": "#a9b7c6"
  },
  "attr-name": {
    "color": "#a9b7c6"
  },
  "tag": {
    "color": "#e8bf6a"
  },
  "tag .punctuation": {
    "color": "#e8bf6a"
  },
  "doctype": {
    "color": "#e8bf6a"
  },
  "builtin": {
    "color": "#e8bf6a"
  },
  "entity": {
    "color": "#6897bb"
  },
  "number": {
    "color": "#6897bb"
  },
  "symbol": {
    "color": "#6897bb"
  },
  "property": {
    "color": "#9876aa"
  },
  "constant": {
    "color": "#9876aa"
  },
  "variable": {
    "color": "#9876aa"
  },
  "string": {
    "color": "#6a8759"
  },
  "char": {
    "color": "#6a8759"
  },
  "attr-value": {
    "color": "#a5c261"
  },
  "attr-value .punctuation": {
    "color": "#a5c261"
  },
  "attr-value .punctuation:first-child": {
    "color": "#a9b7c6"
  },
  "url": {
    "color": "#287bde",
    "textDecoration": "underline"
  },
  "function": {
    "color": "#ffc66d"
  },
  "regex": {
    "background": "#364135"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "inserted": {
    "background": "#294436"
  },
  "deleted": {
    "background": "#484a4a"
  },
  "code.language-css .token.property": {
    "color": "#a9b7c6"
  },
  "code.language-css .token.property + .token.punctuation": {
    "color": "#a9b7c6"
  },
  "code.language-css .token.id": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.class": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.attribute": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.pseudo-class": {
    "color": "#ffc66d"
  },
  "code.language-css .token.selector > .token.pseudo-element": {
    "color": "#ffc66d"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/dark.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/dark.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "white",
    "background": "none",
    "textShadow": "0 -.1em .2em black",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "white",
    "background": "hsl(30, 20%, 25%)",
    "textShadow": "0 -.1em .2em black",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "border": ".3em solid hsl(30, 20%, 40%)",
    "borderRadius": ".5em",
    "boxShadow": "1px 1px .5em black inset"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "hsl(30, 20%, 25%)",
    "padding": ".15em .2em .05em",
    "borderRadius": ".3em",
    "border": ".13em solid hsl(30, 20%, 40%)",
    "boxShadow": "1px 1px .3em -.1em black inset",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "hsl(30, 20%, 50%)"
  },
  "prolog": {
    "color": "hsl(30, 20%, 50%)"
  },
  "doctype": {
    "color": "hsl(30, 20%, 50%)"
  },
  "cdata": {
    "color": "hsl(30, 20%, 50%)"
  },
  "punctuation": {
    "Opacity": ".7"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "hsl(350, 40%, 70%)"
  },
  "tag": {
    "color": "hsl(350, 40%, 70%)"
  },
  "boolean": {
    "color": "hsl(350, 40%, 70%)"
  },
  "number": {
    "color": "hsl(350, 40%, 70%)"
  },
  "constant": {
    "color": "hsl(350, 40%, 70%)"
  },
  "symbol": {
    "color": "hsl(350, 40%, 70%)"
  },
  "selector": {
    "color": "hsl(75, 70%, 60%)"
  },
  "attr-name": {
    "color": "hsl(75, 70%, 60%)"
  },
  "string": {
    "color": "hsl(75, 70%, 60%)"
  },
  "char": {
    "color": "hsl(75, 70%, 60%)"
  },
  "builtin": {
    "color": "hsl(75, 70%, 60%)"
  },
  "inserted": {
    "color": "hsl(75, 70%, 60%)"
  },
  "operator": {
    "color": "hsl(40, 90%, 60%)"
  },
  "entity": {
    "color": "hsl(40, 90%, 60%)",
    "cursor": "help"
  },
  "url": {
    "color": "hsl(40, 90%, 60%)"
  },
  ".language-css .token.string": {
    "color": "hsl(40, 90%, 60%)"
  },
  ".style .token.string": {
    "color": "hsl(40, 90%, 60%)"
  },
  "variable": {
    "color": "hsl(40, 90%, 60%)"
  },
  "atrule": {
    "color": "hsl(350, 40%, 70%)"
  },
  "attr-value": {
    "color": "hsl(350, 40%, 70%)"
  },
  "keyword": {
    "color": "hsl(350, 40%, 70%)"
  },
  "regex": {
    "color": "#e90"
  },
  "important": {
    "color": "#e90",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "deleted": {
    "color": "red"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#2a2734",
    "color": "#9a86fd"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#2a2734",
    "color": "#9a86fd",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#6a51e6"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#6c6783"
  },
  "prolog": {
    "color": "#6c6783"
  },
  "doctype": {
    "color": "#6c6783"
  },
  "cdata": {
    "color": "#6c6783"
  },
  "punctuation": {
    "color": "#6c6783"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "#e09142"
  },
  "operator": {
    "color": "#e09142"
  },
  "number": {
    "color": "#e09142"
  },
  "property": {
    "color": "#9a86fd"
  },
  "function": {
    "color": "#9a86fd"
  },
  "tag-id": {
    "color": "#eeebff"
  },
  "selector": {
    "color": "#eeebff"
  },
  "atrule-id": {
    "color": "#eeebff"
  },
  "code.language-javascript": {
    "color": "#c4b9fe"
  },
  "attr-name": {
    "color": "#c4b9fe"
  },
  "code.language-css": {
    "color": "#ffcc99"
  },
  "code.language-scss": {
    "color": "#ffcc99"
  },
  "boolean": {
    "color": "#ffcc99"
  },
  "string": {
    "color": "#ffcc99"
  },
  "entity": {
    "color": "#ffcc99",
    "cursor": "help"
  },
  "url": {
    "color": "#ffcc99"
  },
  ".language-css .token.string": {
    "color": "#ffcc99"
  },
  ".language-scss .token.string": {
    "color": "#ffcc99"
  },
  ".style .token.string": {
    "color": "#ffcc99"
  },
  "attr-value": {
    "color": "#ffcc99"
  },
  "keyword": {
    "color": "#ffcc99"
  },
  "control": {
    "color": "#ffcc99"
  },
  "directive": {
    "color": "#ffcc99"
  },
  "unit": {
    "color": "#ffcc99"
  },
  "statement": {
    "color": "#ffcc99"
  },
  "regex": {
    "color": "#ffcc99"
  },
  "atrule": {
    "color": "#ffcc99"
  },
  "placeholder": {
    "color": "#ffcc99"
  },
  "variable": {
    "color": "#ffcc99"
  },
  "deleted": {
    "textDecoration": "line-through"
  },
  "inserted": {
    "borderBottom": "1px dotted #eeebff",
    "textDecoration": "none"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "important": {
    "fontWeight": "bold",
    "color": "#c4b9fe"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": ".4em solid #8a75f5",
    "OutlineOffset": ".4em"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#2c2937"
  },
  ".line-numbers-rows > span:before": {
    "color": "#3c3949"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#322d29",
    "color": "#88786d"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#322d29",
    "color": "#88786d",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#6f5849"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#6a5f58"
  },
  "prolog": {
    "color": "#6a5f58"
  },
  "doctype": {
    "color": "#6a5f58"
  },
  "cdata": {
    "color": "#6a5f58"
  },
  "punctuation": {
    "color": "#6a5f58"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "#bfa05a"
  },
  "operator": {
    "color": "#bfa05a"
  },
  "number": {
    "color": "#bfa05a"
  },
  "property": {
    "color": "#88786d"
  },
  "function": {
    "color": "#88786d"
  },
  "tag-id": {
    "color": "#fff3eb"
  },
  "selector": {
    "color": "#fff3eb"
  },
  "atrule-id": {
    "color": "#fff3eb"
  },
  "code.language-javascript": {
    "color": "#a48774"
  },
  "attr-name": {
    "color": "#a48774"
  },
  "code.language-css": {
    "color": "#fcc440"
  },
  "code.language-scss": {
    "color": "#fcc440"
  },
  "boolean": {
    "color": "#fcc440"
  },
  "string": {
    "color": "#fcc440"
  },
  "entity": {
    "color": "#fcc440",
    "cursor": "help"
  },
  "url": {
    "color": "#fcc440"
  },
  ".language-css .token.string": {
    "color": "#fcc440"
  },
  ".language-scss .token.string": {
    "color": "#fcc440"
  },
  ".style .token.string": {
    "color": "#fcc440"
  },
  "attr-value": {
    "color": "#fcc440"
  },
  "keyword": {
    "color": "#fcc440"
  },
  "control": {
    "color": "#fcc440"
  },
  "directive": {
    "color": "#fcc440"
  },
  "unit": {
    "color": "#fcc440"
  },
  "statement": {
    "color": "#fcc440"
  },
  "regex": {
    "color": "#fcc440"
  },
  "atrule": {
    "color": "#fcc440"
  },
  "placeholder": {
    "color": "#fcc440"
  },
  "variable": {
    "color": "#fcc440"
  },
  "deleted": {
    "textDecoration": "line-through"
  },
  "inserted": {
    "borderBottom": "1px dotted #fff3eb",
    "textDecoration": "none"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "important": {
    "fontWeight": "bold",
    "color": "#a48774"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": ".4em solid #816d5f",
    "OutlineOffset": ".4em"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#35302b"
  },
  ".line-numbers-rows > span:before": {
    "color": "#46403d"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#2a2d2a",
    "color": "#687d68"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#2a2d2a",
    "color": "#687d68",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#435643"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#535f53"
  },
  "prolog": {
    "color": "#535f53"
  },
  "doctype": {
    "color": "#535f53"
  },
  "cdata": {
    "color": "#535f53"
  },
  "punctuation": {
    "color": "#535f53"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "#a2b34d"
  },
  "operator": {
    "color": "#a2b34d"
  },
  "number": {
    "color": "#a2b34d"
  },
  "property": {
    "color": "#687d68"
  },
  "function": {
    "color": "#687d68"
  },
  "tag-id": {
    "color": "#f0fff0"
  },
  "selector": {
    "color": "#f0fff0"
  },
  "atrule-id": {
    "color": "#f0fff0"
  },
  "code.language-javascript": {
    "color": "#b3d6b3"
  },
  "attr-name": {
    "color": "#b3d6b3"
  },
  "code.language-css": {
    "color": "#e5fb79"
  },
  "code.language-scss": {
    "color": "#e5fb79"
  },
  "boolean": {
    "color": "#e5fb79"
  },
  "string": {
    "color": "#e5fb79"
  },
  "entity": {
    "color": "#e5fb79",
    "cursor": "help"
  },
  "url": {
    "color": "#e5fb79"
  },
  ".language-css .token.string": {
    "color": "#e5fb79"
  },
  ".language-scss .token.string": {
    "color": "#e5fb79"
  },
  ".style .token.string": {
    "color": "#e5fb79"
  },
  "attr-value": {
    "color": "#e5fb79"
  },
  "keyword": {
    "color": "#e5fb79"
  },
  "control": {
    "color": "#e5fb79"
  },
  "directive": {
    "color": "#e5fb79"
  },
  "unit": {
    "color": "#e5fb79"
  },
  "statement": {
    "color": "#e5fb79"
  },
  "regex": {
    "color": "#e5fb79"
  },
  "atrule": {
    "color": "#e5fb79"
  },
  "placeholder": {
    "color": "#e5fb79"
  },
  "variable": {
    "color": "#e5fb79"
  },
  "deleted": {
    "textDecoration": "line-through"
  },
  "inserted": {
    "borderBottom": "1px dotted #f0fff0",
    "textDecoration": "none"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "important": {
    "fontWeight": "bold",
    "color": "#b3d6b3"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": ".4em solid #5c705c",
    "OutlineOffset": ".4em"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#2c302c"
  },
  ".line-numbers-rows > span:before": {
    "color": "#3b423b"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-light.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-light.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#faf8f5",
    "color": "#728fcb"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#faf8f5",
    "color": "#728fcb",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#faf8f5"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#b6ad9a"
  },
  "prolog": {
    "color": "#b6ad9a"
  },
  "doctype": {
    "color": "#b6ad9a"
  },
  "cdata": {
    "color": "#b6ad9a"
  },
  "punctuation": {
    "color": "#b6ad9a"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "#063289"
  },
  "operator": {
    "color": "#063289"
  },
  "number": {
    "color": "#063289"
  },
  "property": {
    "color": "#b29762"
  },
  "function": {
    "color": "#b29762"
  },
  "tag-id": {
    "color": "#2d2006"
  },
  "selector": {
    "color": "#2d2006"
  },
  "atrule-id": {
    "color": "#2d2006"
  },
  "code.language-javascript": {
    "color": "#896724"
  },
  "attr-name": {
    "color": "#896724"
  },
  "code.language-css": {
    "color": "#728fcb"
  },
  "code.language-scss": {
    "color": "#728fcb"
  },
  "boolean": {
    "color": "#728fcb"
  },
  "string": {
    "color": "#728fcb"
  },
  "entity": {
    "color": "#728fcb",
    "cursor": "help"
  },
  "url": {
    "color": "#728fcb"
  },
  ".language-css .token.string": {
    "color": "#728fcb"
  },
  ".language-scss .token.string": {
    "color": "#728fcb"
  },
  ".style .token.string": {
    "color": "#728fcb"
  },
  "attr-value": {
    "color": "#728fcb"
  },
  "keyword": {
    "color": "#728fcb"
  },
  "control": {
    "color": "#728fcb"
  },
  "directive": {
    "color": "#728fcb"
  },
  "unit": {
    "color": "#728fcb"
  },
  "statement": {
    "color": "#728fcb"
  },
  "regex": {
    "color": "#728fcb"
  },
  "atrule": {
    "color": "#728fcb"
  },
  "placeholder": {
    "color": "#93abdc"
  },
  "variable": {
    "color": "#93abdc"
  },
  "deleted": {
    "textDecoration": "line-through"
  },
  "inserted": {
    "borderBottom": "1px dotted #2d2006",
    "textDecoration": "none"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "important": {
    "fontWeight": "bold",
    "color": "#896724"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": ".4em solid #896724",
    "OutlineOffset": ".4em"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#ece8de"
  },
  ".line-numbers-rows > span:before": {
    "color": "#cdc4b1"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#1d262f",
    "color": "#57718e"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#1d262f",
    "color": "#57718e",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#004a9e"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#4a5f78"
  },
  "prolog": {
    "color": "#4a5f78"
  },
  "doctype": {
    "color": "#4a5f78"
  },
  "cdata": {
    "color": "#4a5f78"
  },
  "punctuation": {
    "color": "#4a5f78"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "#0aa370"
  },
  "operator": {
    "color": "#0aa370"
  },
  "number": {
    "color": "#0aa370"
  },
  "property": {
    "color": "#57718e"
  },
  "function": {
    "color": "#57718e"
  },
  "tag-id": {
    "color": "#ebf4ff"
  },
  "selector": {
    "color": "#ebf4ff"
  },
  "atrule-id": {
    "color": "#ebf4ff"
  },
  "code.language-javascript": {
    "color": "#7eb6f6"
  },
  "attr-name": {
    "color": "#7eb6f6"
  },
  "code.language-css": {
    "color": "#47ebb4"
  },
  "code.language-scss": {
    "color": "#47ebb4"
  },
  "boolean": {
    "color": "#47ebb4"
  },
  "string": {
    "color": "#47ebb4"
  },
  "entity": {
    "color": "#47ebb4",
    "cursor": "help"
  },
  "url": {
    "color": "#47ebb4"
  },
  ".language-css .token.string": {
    "color": "#47ebb4"
  },
  ".language-scss .token.string": {
    "color": "#47ebb4"
  },
  ".style .token.string": {
    "color": "#47ebb4"
  },
  "attr-value": {
    "color": "#47ebb4"
  },
  "keyword": {
    "color": "#47ebb4"
  },
  "control": {
    "color": "#47ebb4"
  },
  "directive": {
    "color": "#47ebb4"
  },
  "unit": {
    "color": "#47ebb4"
  },
  "statement": {
    "color": "#47ebb4"
  },
  "regex": {
    "color": "#47ebb4"
  },
  "atrule": {
    "color": "#47ebb4"
  },
  "placeholder": {
    "color": "#47ebb4"
  },
  "variable": {
    "color": "#47ebb4"
  },
  "deleted": {
    "textDecoration": "line-through"
  },
  "inserted": {
    "borderBottom": "1px dotted #ebf4ff",
    "textDecoration": "none"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "important": {
    "fontWeight": "bold",
    "color": "#7eb6f6"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": ".4em solid #34659d",
    "OutlineOffset": ".4em"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#1f2932"
  },
  ".line-numbers-rows > span:before": {
    "color": "#2c3847"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-space.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-space.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#24242e",
    "color": "#767693"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
    "fontSize": "14px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "#24242e",
    "color": "#767693",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#5151e6"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#5b5b76"
  },
  "prolog": {
    "color": "#5b5b76"
  },
  "doctype": {
    "color": "#5b5b76"
  },
  "cdata": {
    "color": "#5b5b76"
  },
  "punctuation": {
    "color": "#5b5b76"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "#dd672c"
  },
  "operator": {
    "color": "#dd672c"
  },
  "number": {
    "color": "#dd672c"
  },
  "property": {
    "color": "#767693"
  },
  "function": {
    "color": "#767693"
  },
  "tag-id": {
    "color": "#ebebff"
  },
  "selector": {
    "color": "#ebebff"
  },
  "atrule-id": {
    "color": "#ebebff"
  },
  "code.language-javascript": {
    "color": "#aaaaca"
  },
  "attr-name": {
    "color": "#aaaaca"
  },
  "code.language-css": {
    "color": "#fe8c52"
  },
  "code.language-scss": {
    "color": "#fe8c52"
  },
  "boolean": {
    "color": "#fe8c52"
  },
  "string": {
    "color": "#fe8c52"
  },
  "entity": {
    "color": "#fe8c52",
    "cursor": "help"
  },
  "url": {
    "color": "#fe8c52"
  },
  ".language-css .token.string": {
    "color": "#fe8c52"
  },
  ".language-scss .token.string": {
    "color": "#fe8c52"
  },
  ".style .token.string": {
    "color": "#fe8c52"
  },
  "attr-value": {
    "color": "#fe8c52"
  },
  "keyword": {
    "color": "#fe8c52"
  },
  "control": {
    "color": "#fe8c52"
  },
  "directive": {
    "color": "#fe8c52"
  },
  "unit": {
    "color": "#fe8c52"
  },
  "statement": {
    "color": "#fe8c52"
  },
  "regex": {
    "color": "#fe8c52"
  },
  "atrule": {
    "color": "#fe8c52"
  },
  "placeholder": {
    "color": "#fe8c52"
  },
  "variable": {
    "color": "#fe8c52"
  },
  "deleted": {
    "textDecoration": "line-through"
  },
  "inserted": {
    "borderBottom": "1px dotted #ebebff",
    "textDecoration": "none"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "important": {
    "fontWeight": "bold",
    "color": "#aaaaca"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": ".4em solid #7676f4",
    "OutlineOffset": ".4em"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#262631"
  },
  ".line-numbers-rows > span:before": {
    "color": "#393949"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/funky.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/funky.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "background": "black",
    "color": "white",
    "boxShadow": "-.3em 0 0 .3em black, .3em 0 0 .3em black"
  },
  "pre[class*=\"language-\"]": {
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": ".4em .8em",
    "margin": ".5em 0",
    "overflow": "auto",
    "background": "url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>')",
    "backgroundSize": "1em 1em"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".2em",
    "borderRadius": ".3em",
    "boxShadow": "none",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "#aaa"
  },
  "prolog": {
    "color": "#aaa"
  },
  "doctype": {
    "color": "#aaa"
  },
  "cdata": {
    "color": "#aaa"
  },
  "punctuation": {
    "color": "#999"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#0cf"
  },
  "tag": {
    "color": "#0cf"
  },
  "boolean": {
    "color": "#0cf"
  },
  "number": {
    "color": "#0cf"
  },
  "constant": {
    "color": "#0cf"
  },
  "symbol": {
    "color": "#0cf"
  },
  "selector": {
    "color": "yellow"
  },
  "attr-name": {
    "color": "yellow"
  },
  "string": {
    "color": "yellow"
  },
  "char": {
    "color": "yellow"
  },
  "builtin": {
    "color": "yellow"
  },
  "operator": {
    "color": "yellowgreen"
  },
  "entity": {
    "color": "yellowgreen",
    "cursor": "help"
  },
  "url": {
    "color": "yellowgreen"
  },
  ".language-css .token.string": {
    "color": "yellowgreen"
  },
  ".toke.variable": {
    "color": "yellowgreen"
  },
  "inserted": {
    "color": "yellowgreen"
  },
  "atrule": {
    "color": "deeppink"
  },
  "attr-value": {
    "color": "deeppink"
  },
  "keyword": {
    "color": "deeppink"
  },
  "regex": {
    "color": "orange"
  },
  "important": {
    "color": "orange",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "deleted": {
    "color": "red"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/ghcolors.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/ghcolors.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#393A34",
    "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "fontSize": "0.95em",
    "lineHeight": "1.2em",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#393A34",
    "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "fontSize": "0.95em",
    "lineHeight": "1.2em",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "border": "1px solid #dddddd",
    "backgroundColor": "white"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"]::selection": {
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::selection": {
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::selection": {
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::selection": {
    "background": "#b3d4fc"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".2em",
    "paddingTop": "1px",
    "paddingBottom": "1px",
    "background": "#f8f8f8",
    "border": "1px solid #dddddd"
  },
  "comment": {
    "color": "#999988",
    "fontStyle": "italic"
  },
  "prolog": {
    "color": "#999988",
    "fontStyle": "italic"
  },
  "doctype": {
    "color": "#999988",
    "fontStyle": "italic"
  },
  "cdata": {
    "color": "#999988",
    "fontStyle": "italic"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "string": {
    "color": "#e3116c"
  },
  "attr-value": {
    "color": "#e3116c"
  },
  "punctuation": {
    "color": "#393A34"
  },
  "operator": {
    "color": "#393A34"
  },
  "entity": {
    "color": "#36acaa"
  },
  "url": {
    "color": "#36acaa"
  },
  "symbol": {
    "color": "#36acaa"
  },
  "number": {
    "color": "#36acaa"
  },
  "boolean": {
    "color": "#36acaa"
  },
  "variable": {
    "color": "#36acaa"
  },
  "constant": {
    "color": "#36acaa"
  },
  "property": {
    "color": "#36acaa"
  },
  "regex": {
    "color": "#36acaa"
  },
  "inserted": {
    "color": "#36acaa"
  },
  "atrule": {
    "color": "#00a4db"
  },
  "keyword": {
    "color": "#00a4db"
  },
  "attr-name": {
    "color": "#00a4db"
  },
  ".language-autohotkey .token.selector": {
    "color": "#00a4db"
  },
  "function": {
    "color": "#9a050f",
    "fontWeight": "bold"
  },
  "deleted": {
    "color": "#9a050f"
  },
  ".language-autohotkey .token.tag": {
    "color": "#9a050f"
  },
  "tag": {
    "color": "#00009f"
  },
  "selector": {
    "color": "#00009f"
  },
  ".language-autohotkey .token.keyword": {
    "color": "#00009f"
  },
  "important": {
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/hopscotch.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/hopscotch.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#b9b5b8",
    "fontFamily": "\"Fira Mono\", Menlo, Monaco, \"Lucida Console\",\"Courier New\", Courier, monospace",
    "fontSize": "16px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "wordSpacing": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "whiteSpace": "pre-wrap",
    "wordBreak": "break-all",
    "wordWrap": "break-word",
    "background": "#322931"
  },
  "pre[class*=\"language-\"]": {
    "color": "#b9b5b8",
    "fontFamily": "\"Fira Mono\", Menlo, Monaco, \"Lucida Console\",\"Courier New\", Courier, monospace",
    "fontSize": "16px",
    "lineHeight": "1.375",
    "direction": "ltr",
    "textAlign": "left",
    "wordSpacing": "normal",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "whiteSpace": "pre-wrap",
    "wordBreak": "break-all",
    "wordWrap": "break-word",
    "background": "#322931",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#797379"
  },
  "prolog": {
    "color": "#797379"
  },
  "doctype": {
    "color": "#797379"
  },
  "cdata": {
    "color": "#797379"
  },
  "punctuation": {
    "color": "#b9b5b8"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "null": {
    "color": "#fd8b19"
  },
  "operator": {
    "color": "#fd8b19"
  },
  "boolean": {
    "color": "#fd8b19"
  },
  "number": {
    "color": "#fd8b19"
  },
  "property": {
    "color": "#fdcc59"
  },
  "tag": {
    "color": "#1290bf"
  },
  "string": {
    "color": "#149b93"
  },
  "selector": {
    "color": "#c85e7c"
  },
  "attr-name": {
    "color": "#fd8b19"
  },
  "entity": {
    "color": "#149b93",
    "cursor": "help"
  },
  "url": {
    "color": "#149b93"
  },
  ".language-css .token.string": {
    "color": "#149b93"
  },
  ".style .token.string": {
    "color": "#149b93"
  },
  "attr-value": {
    "color": "#8fc13e"
  },
  "keyword": {
    "color": "#8fc13e"
  },
  "control": {
    "color": "#8fc13e"
  },
  "directive": {
    "color": "#8fc13e"
  },
  "unit": {
    "color": "#8fc13e"
  },
  "statement": {
    "color": "#149b93"
  },
  "regex": {
    "color": "#149b93"
  },
  "atrule": {
    "color": "#149b93"
  },
  "placeholder": {
    "color": "#1290bf"
  },
  "variable": {
    "color": "#1290bf"
  },
  "important": {
    "color": "#dd464c",
    "fontWeight": "bold"
  },
  "pre > code.highlight": {
    "Outline": ".4em solid red",
    "OutlineOffset": ".4em"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "coy", {
  enumerable: true,
  get: function get() {
    return _coy.default;
  }
});
Object.defineProperty(exports, "dark", {
  enumerable: true,
  get: function get() {
    return _dark.default;
  }
});
Object.defineProperty(exports, "funky", {
  enumerable: true,
  get: function get() {
    return _funky.default;
  }
});
Object.defineProperty(exports, "okaidia", {
  enumerable: true,
  get: function get() {
    return _okaidia.default;
  }
});
Object.defineProperty(exports, "solarizedlight", {
  enumerable: true,
  get: function get() {
    return _solarizedlight.default;
  }
});
Object.defineProperty(exports, "tomorrow", {
  enumerable: true,
  get: function get() {
    return _tomorrow.default;
  }
});
Object.defineProperty(exports, "twilight", {
  enumerable: true,
  get: function get() {
    return _twilight.default;
  }
});
Object.defineProperty(exports, "prism", {
  enumerable: true,
  get: function get() {
    return _prism.default;
  }
});
Object.defineProperty(exports, "atomDark", {
  enumerable: true,
  get: function get() {
    return _atomDark.default;
  }
});
Object.defineProperty(exports, "base16AteliersulphurpoolLight", {
  enumerable: true,
  get: function get() {
    return _base16Ateliersulphurpool.default;
  }
});
Object.defineProperty(exports, "cb", {
  enumerable: true,
  get: function get() {
    return _cb.default;
  }
});
Object.defineProperty(exports, "darcula", {
  enumerable: true,
  get: function get() {
    return _darcula.default;
  }
});
Object.defineProperty(exports, "duotoneDark", {
  enumerable: true,
  get: function get() {
    return _duotoneDark.default;
  }
});
Object.defineProperty(exports, "duotoneEarth", {
  enumerable: true,
  get: function get() {
    return _duotoneEarth.default;
  }
});
Object.defineProperty(exports, "duotoneForest", {
  enumerable: true,
  get: function get() {
    return _duotoneForest.default;
  }
});
Object.defineProperty(exports, "duotoneLight", {
  enumerable: true,
  get: function get() {
    return _duotoneLight.default;
  }
});
Object.defineProperty(exports, "duotoneSea", {
  enumerable: true,
  get: function get() {
    return _duotoneSea.default;
  }
});
Object.defineProperty(exports, "duotoneSpace", {
  enumerable: true,
  get: function get() {
    return _duotoneSpace.default;
  }
});
Object.defineProperty(exports, "ghcolors", {
  enumerable: true,
  get: function get() {
    return _ghcolors.default;
  }
});
Object.defineProperty(exports, "hopscotch", {
  enumerable: true,
  get: function get() {
    return _hopscotch.default;
  }
});
Object.defineProperty(exports, "pojoaque", {
  enumerable: true,
  get: function get() {
    return _pojoaque.default;
  }
});
Object.defineProperty(exports, "vs", {
  enumerable: true,
  get: function get() {
    return _vs.default;
  }
});
Object.defineProperty(exports, "xonokai", {
  enumerable: true,
  get: function get() {
    return _xonokai.default;
  }
});

var _coy = _interopRequireDefault(__webpack_require__(/*! ./coy */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coy.js"));

var _dark = _interopRequireDefault(__webpack_require__(/*! ./dark */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/dark.js"));

var _funky = _interopRequireDefault(__webpack_require__(/*! ./funky */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/funky.js"));

var _okaidia = _interopRequireDefault(__webpack_require__(/*! ./okaidia */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/okaidia.js"));

var _solarizedlight = _interopRequireDefault(__webpack_require__(/*! ./solarizedlight */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight.js"));

var _tomorrow = _interopRequireDefault(__webpack_require__(/*! ./tomorrow */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/tomorrow.js"));

var _twilight = _interopRequireDefault(__webpack_require__(/*! ./twilight */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/twilight.js"));

var _prism = _interopRequireDefault(__webpack_require__(/*! ./prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js"));

var _atomDark = _interopRequireDefault(__webpack_require__(/*! ./atom-dark */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js"));

var _base16Ateliersulphurpool = _interopRequireDefault(__webpack_require__(/*! ./base16-ateliersulphurpool.light */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light.js"));

var _cb = _interopRequireDefault(__webpack_require__(/*! ./cb */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/cb.js"));

var _darcula = _interopRequireDefault(__webpack_require__(/*! ./darcula */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js"));

var _duotoneDark = _interopRequireDefault(__webpack_require__(/*! ./duotone-dark */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark.js"));

var _duotoneEarth = _interopRequireDefault(__webpack_require__(/*! ./duotone-earth */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth.js"));

var _duotoneForest = _interopRequireDefault(__webpack_require__(/*! ./duotone-forest */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest.js"));

var _duotoneLight = _interopRequireDefault(__webpack_require__(/*! ./duotone-light */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-light.js"));

var _duotoneSea = _interopRequireDefault(__webpack_require__(/*! ./duotone-sea */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea.js"));

var _duotoneSpace = _interopRequireDefault(__webpack_require__(/*! ./duotone-space */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-space.js"));

var _ghcolors = _interopRequireDefault(__webpack_require__(/*! ./ghcolors */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/ghcolors.js"));

var _hopscotch = _interopRequireDefault(__webpack_require__(/*! ./hopscotch */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/hopscotch.js"));

var _pojoaque = _interopRequireDefault(__webpack_require__(/*! ./pojoaque */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/pojoaque.js"));

var _vs = _interopRequireDefault(__webpack_require__(/*! ./vs */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vs.js"));

var _xonokai = _interopRequireDefault(__webpack_require__(/*! ./xonokai */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/xonokai.js"));

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/okaidia.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/okaidia.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "none",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#f8f8f2",
    "background": "#272822",
    "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#272822",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "slategray"
  },
  "prolog": {
    "color": "slategray"
  },
  "doctype": {
    "color": "slategray"
  },
  "cdata": {
    "color": "slategray"
  },
  "punctuation": {
    "color": "#f8f8f2"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#f92672"
  },
  "tag": {
    "color": "#f92672"
  },
  "constant": {
    "color": "#f92672"
  },
  "symbol": {
    "color": "#f92672"
  },
  "deleted": {
    "color": "#f92672"
  },
  "boolean": {
    "color": "#ae81ff"
  },
  "number": {
    "color": "#ae81ff"
  },
  "selector": {
    "color": "#a6e22e"
  },
  "attr-name": {
    "color": "#a6e22e"
  },
  "string": {
    "color": "#a6e22e"
  },
  "char": {
    "color": "#a6e22e"
  },
  "builtin": {
    "color": "#a6e22e"
  },
  "inserted": {
    "color": "#a6e22e"
  },
  "operator": {
    "color": "#f8f8f2"
  },
  "entity": {
    "color": "#f8f8f2",
    "cursor": "help"
  },
  "url": {
    "color": "#f8f8f2"
  },
  ".language-css .token.string": {
    "color": "#f8f8f2"
  },
  ".style .token.string": {
    "color": "#f8f8f2"
  },
  "variable": {
    "color": "#f8f8f2"
  },
  "atrule": {
    "color": "#e6db74"
  },
  "attr-value": {
    "color": "#e6db74"
  },
  "function": {
    "color": "#e6db74"
  },
  "class-name": {
    "color": "#e6db74"
  },
  "keyword": {
    "color": "#66d9ef"
  },
  "regex": {
    "color": "#fd971f"
  },
  "important": {
    "color": "#fd971f",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/pojoaque.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/pojoaque.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "whiteSpace": "pre-wrap",
    "wordBreak": "break-all",
    "wordWrap": "break-word",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "fontSize": "15px",
    "lineHeight": "1.5",
    "color": "#dccf8f",
    "textShadow": "0"
  },
  "pre[class*=\"language-\"]": {
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "whiteSpace": "pre-wrap",
    "wordBreak": "break-all",
    "wordWrap": "break-word",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "fontSize": "15px",
    "lineHeight": "1.5",
    "color": "#DCCF8F",
    "textShadow": "0",
    "borderRadius": "5px",
    "border": "1px solid #000",
    "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
    "padding": "12px",
    "overflow": "auto"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "borderRadius": "5px",
    "border": "1px solid #000",
    "color": "#DCCF8F",
    "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
    "padding": "2px 6px"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "comment": {
    "color": "#586e75",
    "fontStyle": "italic"
  },
  "prolog": {
    "color": "#586e75",
    "fontStyle": "italic"
  },
  "doctype": {
    "color": "#586e75",
    "fontStyle": "italic"
  },
  "cdata": {
    "color": "#586e75",
    "fontStyle": "italic"
  },
  "number": {
    "color": "#b89859"
  },
  "string": {
    "color": "#468966"
  },
  "char": {
    "color": "#468966"
  },
  "builtin": {
    "color": "#468966"
  },
  "inserted": {
    "color": "#468966"
  },
  "attr-name": {
    "color": "#b89859"
  },
  "operator": {
    "color": "#dccf8f"
  },
  "entity": {
    "color": "#dccf8f",
    "cursor": "help"
  },
  "url": {
    "color": "#dccf8f"
  },
  ".language-css .token.string": {
    "color": "#dccf8f"
  },
  ".style .token.string": {
    "color": "#dccf8f"
  },
  "selector": {
    "color": "#859900"
  },
  "regex": {
    "color": "#859900"
  },
  "atrule": {
    "color": "#cb4b16"
  },
  "keyword": {
    "color": "#cb4b16"
  },
  "attr-value": {
    "color": "#468966"
  },
  "function": {
    "color": "#b58900"
  },
  "variable": {
    "color": "#b58900"
  },
  "placeholder": {
    "color": "#b58900"
  },
  "property": {
    "color": "#b89859"
  },
  "tag": {
    "color": "#ffb03b"
  },
  "boolean": {
    "color": "#b89859"
  },
  "constant": {
    "color": "#b89859"
  },
  "symbol": {
    "color": "#b89859"
  },
  "important": {
    "color": "#dc322f"
  },
  "statement": {
    "color": "#dc322f"
  },
  "deleted": {
    "color": "#dc322f"
  },
  "punctuation": {
    "color": "#dccf8f"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "black",
    "background": "none",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "black",
    "background": "#f5f2f0",
    "textShadow": "0 1px white",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "#b3d4fc"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#f5f2f0",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "slategray"
  },
  "prolog": {
    "color": "slategray"
  },
  "doctype": {
    "color": "slategray"
  },
  "cdata": {
    "color": "slategray"
  },
  "punctuation": {
    "color": "#999"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#905"
  },
  "tag": {
    "color": "#905"
  },
  "boolean": {
    "color": "#905"
  },
  "number": {
    "color": "#905"
  },
  "constant": {
    "color": "#905"
  },
  "symbol": {
    "color": "#905"
  },
  "deleted": {
    "color": "#905"
  },
  "selector": {
    "color": "#690"
  },
  "attr-name": {
    "color": "#690"
  },
  "string": {
    "color": "#690"
  },
  "char": {
    "color": "#690"
  },
  "builtin": {
    "color": "#690"
  },
  "inserted": {
    "color": "#690"
  },
  "operator": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "entity": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)",
    "cursor": "help"
  },
  "url": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".language-css .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  ".style .token.string": {
    "color": "#9a6e3a",
    "background": "hsla(0, 0%, 100%, .5)"
  },
  "atrule": {
    "color": "#07a"
  },
  "attr-value": {
    "color": "#07a"
  },
  "keyword": {
    "color": "#07a"
  },
  "function": {
    "color": "#DD4A68"
  },
  "class-name": {
    "color": "#DD4A68"
  },
  "regex": {
    "color": "#e90"
  },
  "important": {
    "color": "#e90",
    "fontWeight": "bold"
  },
  "variable": {
    "color": "#e90"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#657b83",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#657b83",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "0.3em",
    "backgroundColor": "#fdf6e3"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "background": "#073642"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "background": "#073642"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "background": "#073642"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "background": "#073642"
  },
  "pre[class*=\"language-\"]::selection": {
    "background": "#073642"
  },
  "pre[class*=\"language-\"] ::selection": {
    "background": "#073642"
  },
  "code[class*=\"language-\"]::selection": {
    "background": "#073642"
  },
  "code[class*=\"language-\"] ::selection": {
    "background": "#073642"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "backgroundColor": "#fdf6e3",
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "#93a1a1"
  },
  "prolog": {
    "color": "#93a1a1"
  },
  "doctype": {
    "color": "#93a1a1"
  },
  "cdata": {
    "color": "#93a1a1"
  },
  "punctuation": {
    "color": "#586e75"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property": {
    "color": "#268bd2"
  },
  "tag": {
    "color": "#268bd2"
  },
  "boolean": {
    "color": "#268bd2"
  },
  "number": {
    "color": "#268bd2"
  },
  "constant": {
    "color": "#268bd2"
  },
  "symbol": {
    "color": "#268bd2"
  },
  "deleted": {
    "color": "#268bd2"
  },
  "selector": {
    "color": "#2aa198"
  },
  "attr-name": {
    "color": "#2aa198"
  },
  "string": {
    "color": "#2aa198"
  },
  "char": {
    "color": "#2aa198"
  },
  "builtin": {
    "color": "#2aa198"
  },
  "url": {
    "color": "#2aa198"
  },
  "inserted": {
    "color": "#2aa198"
  },
  "entity": {
    "color": "#657b83",
    "background": "#eee8d5",
    "cursor": "help"
  },
  "atrule": {
    "color": "#859900"
  },
  "attr-value": {
    "color": "#859900"
  },
  "keyword": {
    "color": "#859900"
  },
  "function": {
    "color": "#b58900"
  },
  "class-name": {
    "color": "#b58900"
  },
  "regex": {
    "color": "#cb4b16"
  },
  "important": {
    "color": "#cb4b16",
    "fontWeight": "bold"
  },
  "variable": {
    "color": "#cb4b16"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/tomorrow.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/tomorrow.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#ccc",
    "background": "none",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#ccc",
    "background": "#2d2d2d",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#2d2d2d",
    "padding": ".1em",
    "borderRadius": ".3em",
    "whiteSpace": "normal"
  },
  "comment": {
    "color": "#999"
  },
  "block-comment": {
    "color": "#999"
  },
  "prolog": {
    "color": "#999"
  },
  "doctype": {
    "color": "#999"
  },
  "cdata": {
    "color": "#999"
  },
  "punctuation": {
    "color": "#ccc"
  },
  "tag": {
    "color": "#e2777a"
  },
  "attr-name": {
    "color": "#e2777a"
  },
  "namespace": {
    "color": "#e2777a"
  },
  "deleted": {
    "color": "#e2777a"
  },
  "function-name": {
    "color": "#6196cc"
  },
  "boolean": {
    "color": "#f08d49"
  },
  "number": {
    "color": "#f08d49"
  },
  "function": {
    "color": "#f08d49"
  },
  "property": {
    "color": "#f8c555"
  },
  "class-name": {
    "color": "#f8c555"
  },
  "constant": {
    "color": "#f8c555"
  },
  "symbol": {
    "color": "#f8c555"
  },
  "selector": {
    "color": "#cc99cd"
  },
  "important": {
    "color": "#cc99cd",
    "fontWeight": "bold"
  },
  "atrule": {
    "color": "#cc99cd"
  },
  "keyword": {
    "color": "#cc99cd"
  },
  "builtin": {
    "color": "#cc99cd"
  },
  "string": {
    "color": "#7ec699"
  },
  "char": {
    "color": "#7ec699"
  },
  "attr-value": {
    "color": "#7ec699"
  },
  "regex": {
    "color": "#7ec699"
  },
  "variable": {
    "color": "#7ec699"
  },
  "operator": {
    "color": "#67cdcc"
  },
  "entity": {
    "color": "#67cdcc",
    "cursor": "help"
  },
  "url": {
    "color": "#67cdcc"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "inserted": {
    "color": "green"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/twilight.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/twilight.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "white",
    "background": "none",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "textShadow": "0 -.1em .2em black",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "white",
    "background": "hsl(0, 0%, 8%)",
    "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    "textAlign": "left",
    "textShadow": "0 -.1em .2em black",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "wordWrap": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "borderRadius": ".5em",
    "border": ".3em solid hsl(0, 0%, 33%)",
    "boxShadow": "1px 1px .5em black inset",
    "margin": ".5em 0",
    "overflow": "auto",
    "padding": "1em"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "hsl(0, 0%, 8%)",
    "borderRadius": ".3em",
    "border": ".13em solid hsl(0, 0%, 33%)",
    "boxShadow": "1px 1px .3em -.1em black inset",
    "padding": ".15em .2em .05em",
    "whiteSpace": "normal"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "background": "hsla(0, 0%, 93%, 0.15)",
    "textShadow": "none"
  },
  "pre[class*=\"language-\"]::selection": {
    "background": "hsla(0, 0%, 93%, 0.15)",
    "textShadow": "none"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "hsla(0, 0%, 93%, 0.15)"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "textShadow": "none",
    "background": "hsla(0, 0%, 93%, 0.15)"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "textShadow": "none",
    "background": "hsla(0, 0%, 93%, 0.15)"
  },
  "pre[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "hsla(0, 0%, 93%, 0.15)"
  },
  "code[class*=\"language-\"]::selection": {
    "textShadow": "none",
    "background": "hsla(0, 0%, 93%, 0.15)"
  },
  "code[class*=\"language-\"] ::selection": {
    "textShadow": "none",
    "background": "hsla(0, 0%, 93%, 0.15)"
  },
  "comment": {
    "color": "hsl(0, 0%, 47%)"
  },
  "prolog": {
    "color": "hsl(0, 0%, 47%)"
  },
  "doctype": {
    "color": "hsl(0, 0%, 47%)"
  },
  "cdata": {
    "color": "hsl(0, 0%, 47%)"
  },
  "punctuation": {
    "Opacity": ".7"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "tag": {
    "color": "hsl(14, 58%, 55%)"
  },
  "boolean": {
    "color": "hsl(14, 58%, 55%)"
  },
  "number": {
    "color": "hsl(14, 58%, 55%)"
  },
  "deleted": {
    "color": "hsl(14, 58%, 55%)"
  },
  "keyword": {
    "color": "hsl(53, 89%, 79%)"
  },
  "property": {
    "color": "hsl(53, 89%, 79%)"
  },
  "selector": {
    "color": "hsl(53, 89%, 79%)"
  },
  "constant": {
    "color": "hsl(53, 89%, 79%)"
  },
  "symbol": {
    "color": "hsl(53, 89%, 79%)"
  },
  "builtin": {
    "color": "hsl(53, 89%, 79%)"
  },
  "attr-name": {
    "color": "hsl(76, 21%, 52%)"
  },
  "attr-value": {
    "color": "hsl(76, 21%, 52%)"
  },
  "string": {
    "color": "hsl(76, 21%, 52%)"
  },
  "char": {
    "color": "hsl(76, 21%, 52%)"
  },
  "operator": {
    "color": "hsl(76, 21%, 52%)"
  },
  "entity": {
    "color": "hsl(76, 21%, 52%)",
    "cursor": "help"
  },
  "url": {
    "color": "hsl(76, 21%, 52%)"
  },
  ".language-css .token.string": {
    "color": "hsl(76, 21%, 52%)"
  },
  ".style .token.string": {
    "color": "hsl(76, 21%, 52%)"
  },
  "variable": {
    "color": "hsl(76, 21%, 52%)"
  },
  "inserted": {
    "color": "hsl(76, 21%, 52%)"
  },
  "atrule": {
    "color": "hsl(218, 22%, 55%)"
  },
  "regex": {
    "color": "hsl(42, 75%, 65%)"
  },
  "important": {
    "color": "hsl(42, 75%, 65%)",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "pre[data-line]": {
    "padding": "1em 0 1em 3em",
    "position": "relative"
  },
  ".language-markup .token.tag": {
    "color": "hsl(33, 33%, 52%)"
  },
  ".language-markup .token.attr-name": {
    "color": "hsl(33, 33%, 52%)"
  },
  ".language-markup .token.punctuation": {
    "color": "hsl(33, 33%, 52%)"
  },
  "": {
    "position": "relative",
    "zIndex": "1"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",
    "borderBottom": "1px dashed hsl(0, 0%, 33%)",
    "borderTop": "1px dashed hsl(0, 0%, 33%)",
    "left": "0",
    "lineHeight": "inherit",
    "marginTop": "0.75em",
    "padding": "inherit 0",
    "pointerEvents": "none",
    "position": "absolute",
    "right": "0",
    "whiteSpace": "pre",
    "zIndex": "0"
  },
  ".line-highlight:before": {
    "backgroundColor": "hsl(215, 15%, 59%)",
    "borderRadius": "999px",
    "boxShadow": "0 1px white",
    "color": "hsl(24, 20%, 95%)",
    "content": "attr(data-start)",
    "font": "bold 65%/1.5 sans-serif",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0 .5em",
    "position": "absolute",
    "textAlign": "center",
    "textShadow": "none",
    "top": ".4em",
    "verticalAlign": ".3em"
  },
  ".line-highlight[data-end]:after": {
    "backgroundColor": "hsl(215, 15%, 59%)",
    "borderRadius": "999px",
    "boxShadow": "0 1px white",
    "color": "hsl(24, 20%, 95%)",
    "content": "attr(data-end)",
    "font": "bold 65%/1.5 sans-serif",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0 .5em",
    "position": "absolute",
    "textAlign": "center",
    "textShadow": "none",
    "top": "auto",
    "verticalAlign": ".3em",
    "bottom": ".4em"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vs.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vs.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "color": "#393A34",
    "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "fontSize": "0.95em",
    "lineHeight": "1.2em",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "#393A34",
    "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "fontSize": "0.95em",
    "lineHeight": "1.2em",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "1em",
    "margin": ".5em 0",
    "overflow": "auto",
    "border": "1px solid #dddddd",
    "backgroundColor": "white"
  },
  "pre[class*=\"language-\"]::-moz-selection": {
    "background": "#C1DEF1"
  },
  "pre[class*=\"language-\"] ::-moz-selection": {
    "background": "#C1DEF1"
  },
  "code[class*=\"language-\"]::-moz-selection": {
    "background": "#C1DEF1"
  },
  "code[class*=\"language-\"] ::-moz-selection": {
    "background": "#C1DEF1"
  },
  "pre[class*=\"language-\"]::selection": {
    "background": "#C1DEF1"
  },
  "pre[class*=\"language-\"] ::selection": {
    "background": "#C1DEF1"
  },
  "code[class*=\"language-\"]::selection": {
    "background": "#C1DEF1"
  },
  "code[class*=\"language-\"] ::selection": {
    "background": "#C1DEF1"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "padding": ".2em",
    "paddingTop": "1px",
    "paddingBottom": "1px",
    "background": "#f8f8f8",
    "border": "1px solid #dddddd"
  },
  "comment": {
    "color": "#008000",
    "fontStyle": "italic"
  },
  "prolog": {
    "color": "#008000",
    "fontStyle": "italic"
  },
  "doctype": {
    "color": "#008000",
    "fontStyle": "italic"
  },
  "cdata": {
    "color": "#008000",
    "fontStyle": "italic"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "string": {
    "color": "#A31515"
  },
  "punctuation": {
    "color": "#393A34"
  },
  "operator": {
    "color": "#393A34"
  },
  "url": {
    "color": "#36acaa"
  },
  "symbol": {
    "color": "#36acaa"
  },
  "number": {
    "color": "#36acaa"
  },
  "boolean": {
    "color": "#36acaa"
  },
  "variable": {
    "color": "#36acaa"
  },
  "constant": {
    "color": "#36acaa"
  },
  "inserted": {
    "color": "#36acaa"
  },
  "atrule": {
    "color": "#0000ff"
  },
  "keyword": {
    "color": "#0000ff"
  },
  "attr-value": {
    "color": "#0000ff"
  },
  ".language-autohotkey .token.selector": {
    "color": "#0000ff"
  },
  ".language-json .token.boolean": {
    "color": "#0000ff"
  },
  ".language-json .token.number": {
    "color": "#0000ff"
  },
  "code[class*=\"language-css\"]": {
    "color": "#0000ff"
  },
  "function": {
    "color": "#393A34"
  },
  "deleted": {
    "color": "#9a050f"
  },
  ".language-autohotkey .token.tag": {
    "color": "#9a050f"
  },
  "selector": {
    "color": "#800000"
  },
  ".language-autohotkey .token.keyword": {
    "color": "#00009f"
  },
  "important": {
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "class-name": {
    "color": "#2B91AF"
  },
  ".language-json .token.property": {
    "color": "#2B91AF"
  },
  "tag": {
    "color": "#800000"
  },
  "attr-name": {
    "color": "#ff0000"
  },
  "property": {
    "color": "#ff0000"
  },
  "regex": {
    "color": "#ff0000"
  },
  "entity": {
    "color": "#ff0000"
  },
  "directive.tag  .tag": {
    "background": "#ffff00",
    "color": "#393A34"
  },
  ".line-numbers .line-numbers-rows": {
    "borderRightColor": "#a5a5a5"
  },
  ".line-numbers-rows > span:before": {
    "color": "#2B91AF"
  },
  ".line-highlight": {
    "background": "linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/xonokai.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/xonokai.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "code[class*=\"language-\"]": {
    "MozTabSize": "2",
    "OTabSize": "2",
    "tabSize": "2",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "whiteSpace": "pre-wrap",
    "wordWrap": "normal",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "fontSize": "14px",
    "color": "#76d9e6",
    "textShadow": "none"
  },
  "pre[class*=\"language-\"]": {
    "MozTabSize": "2",
    "OTabSize": "2",
    "tabSize": "2",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "whiteSpace": "pre-wrap",
    "wordWrap": "normal",
    "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
    "fontSize": "14px",
    "color": "#76d9e6",
    "textShadow": "none",
    "background": "#2a2a2a",
    "padding": "15px",
    "borderRadius": "4px",
    "border": "1px solid #e1e1e8",
    "overflow": "auto",
    "position": "relative"
  },
  ":not(pre)>code[class*=\"language-\"]": {
    "background": "#2a2a2a",
    "padding": "0.15em 0.2em 0.05em",
    "borderRadius": ".3em",
    "border": "0.13em solid #7a6652",
    "boxShadow": "1px 1px 0.3em -0.1em #000 inset"
  },
  "pre[class*=\"language-\"] code": {
    "whiteSpace": "pre",
    "display": "block"
  },
  "namespace": {
    "Opacity": ".7"
  },
  "comment": {
    "color": "#6f705e"
  },
  "prolog": {
    "color": "#6f705e"
  },
  "doctype": {
    "color": "#6f705e"
  },
  "cdata": {
    "color": "#6f705e"
  },
  "operator": {
    "color": "#a77afe"
  },
  "boolean": {
    "color": "#a77afe"
  },
  "number": {
    "color": "#a77afe"
  },
  "attr-name": {
    "color": "#e6d06c"
  },
  "string": {
    "color": "#e6d06c"
  },
  "entity": {
    "color": "#e6d06c",
    "cursor": "help"
  },
  "url": {
    "color": "#e6d06c"
  },
  ".language-css .token.string": {
    "color": "#e6d06c"
  },
  ".style .token.string": {
    "color": "#e6d06c"
  },
  "selector": {
    "color": "#a6e22d"
  },
  "inserted": {
    "color": "#a6e22d"
  },
  "atrule": {
    "color": "#ef3b7d"
  },
  "attr-value": {
    "color": "#ef3b7d"
  },
  "keyword": {
    "color": "#ef3b7d"
  },
  "important": {
    "color": "#ef3b7d",
    "fontWeight": "bold"
  },
  "deleted": {
    "color": "#ef3b7d"
  },
  "regex": {
    "color": "#76d9e6"
  },
  "statement": {
    "color": "#76d9e6",
    "fontWeight": "bold"
  },
  "placeholder": {
    "color": "#fff"
  },
  "variable": {
    "color": "#fff"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "punctuation": {
    "color": "#bebec5"
  },
  "italic": {
    "fontStyle": "italic"
  },
  "code.language-markup": {
    "color": "#f9f9f9"
  },
  "code.language-markup .token.tag": {
    "color": "#ef3b7d"
  },
  "code.language-markup .token.attr-name": {
    "color": "#a6e22d"
  },
  "code.language-markup .token.attr-value": {
    "color": "#e6d06c"
  },
  "code.language-markup .token.style": {
    "color": "#76d9e6"
  },
  "code.language-markup .token.script": {
    "color": "#76d9e6"
  },
  "code.language-markup .token.script .token.keyword": {
    "color": "#76d9e6"
  },
  "pre[class*=\"language-\"][data-line]": {
    "position": "relative",
    "padding": "1em 0 1em 3em"
  },
  "pre[data-line] .line-highlight": {
    "position": "absolute",
    "left": "0",
    "right": "0",
    "padding": "0",
    "marginTop": "1em",
    "background": "rgba(255, 255, 255, 0.08)",
    "pointerEvents": "none",
    "lineHeight": "inherit",
    "whiteSpace": "pre"
  },
  "pre[data-line] .line-highlight:before": {
    "content": "attr(data-start)",
    "position": "absolute",
    "top": ".4em",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0.2em 0.5em",
    "backgroundColor": "rgba(255, 255, 255, 0.4)",
    "color": "black",
    "font": "bold 65%/1 sans-serif",
    "height": "1em",
    "lineHeight": "1em",
    "textAlign": "center",
    "borderRadius": "999px",
    "textShadow": "none",
    "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)"
  },
  "pre[data-line] .line-highlight[data-end]:after": {
    "content": "attr(data-end)",
    "position": "absolute",
    "top": "auto",
    "left": ".6em",
    "minWidth": "1em",
    "padding": "0.2em 0.5em",
    "backgroundColor": "rgba(255, 255, 255, 0.4)",
    "color": "black",
    "font": "bold 65%/1 sans-serif",
    "height": "1em",
    "lineHeight": "1em",
    "textAlign": "center",
    "borderRadius": "999px",
    "textShadow": "none",
    "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)",
    "bottom": ".4em"
  }
};
exports.default = _default;

/***/ })

})
//# sourceMappingURL=[element].js.42f90687bf54c2a30c92.hot-update.js.map