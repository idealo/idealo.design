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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_10__["dark"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, section.content));
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
          lineNumber: 96
        },
        __self: this
      }, __jsx(components_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, sections.map(function (section, idx) {
        return __jsx("div", {
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, section.type === 'h1' && H1(section), section.type === 'h2' && H2(section), section.type === 'p' && P(section), section.type === 'code' && Code(section));
      }))));
    }
  }]);

  return ElementBody;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=[element].js.a65f19cf9a1e3851362c.hot-update.js.map