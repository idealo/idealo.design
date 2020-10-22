module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/EUs":
/***/ (function(module, exports) {

module.exports = require("@storybook/theming");

/***/ }),

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ojtj");


/***/ }),

/***/ "2Y5B":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/components/layout/desktop");

/***/ }),

/***/ "2fA/":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Price\",\"slug\":\"price\",\"sections\":[{\"type\":\"h1\",\"content\":\"`motif-price`\"},{\"type\":\"p\",\"content\":\"Component to format and display prices\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\".bash\",\"content\":\"yarn add @motif/price\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\".bash\",\"content\":\"import {Price} from './price';\\n\\n<Price price={19900} size=\\\"s\\\"/>\\n\"}]}");

/***/ }),

/***/ "30Jy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Card/Card.module.scss
var Card_module = __webpack_require__("VuTL");
var Card_module_default = /*#__PURE__*/__webpack_require__.n(Card_module);

// CONCATENATED MODULE: ./components/Card/Card.js
var __jsx = external_react_default.a.createElement;


class Card_Card extends external_react_default.a.Component {
  render() {
    return __jsx("div", {
      className: Card_module_default.a.Card
    }, this.props.children);
  }

}
// CONCATENATED MODULE: ./components/Card/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return Card_Card; });


/***/ }),

/***/ "4OIt":
/***/ (function(module, exports, __webpack_require__) {

module.exports = {};
module.exports['button'] = __webpack_require__("Lnr+");
module.exports['checkbox'] = __webpack_require__("rF/f");
module.exports['colors'] = __webpack_require__("gA+r");
module.exports['cookie-banner'] = __webpack_require__("veI3");
module.exports['footer'] = __webpack_require__("Dqqv");
module.exports['grid'] = __webpack_require__("jyx8");
module.exports['header'] = __webpack_require__("Ps1E");
module.exports['headline'] = __webpack_require__("ZwNX");
module.exports['link'] = __webpack_require__("4YFt");
module.exports['list'] = __webpack_require__("V0Kh");
module.exports['media-query'] = __webpack_require__("Qgke");
module.exports['overlay'] = __webpack_require__("liqU");
module.exports['price'] = __webpack_require__("2fA/");
module.exports['radio-button'] = __webpack_require__("J+di");
module.exports['select'] = __webpack_require__("oU0S");
module.exports['text-field'] = __webpack_require__("BlI0");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4YFt":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Link\",\"slug\":\"link\",\"sections\":[{\"type\":\"h1\",\"content\":\"`motif-link`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/link\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {Link} from '@motif/link';\\n\\n<Link href={'/'}>Click me</Link>\\n\"}]}");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "722E":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+aWNvX19jaGV2cm9uX3JpZ2h0PC90aXRsZT48cGF0aCBkPSJNNywyM2ExLDEsMCwwLDEtLjcwNy0xLjcwN0wxNS41ODYsMTIsNi4yOTMsMi43MDdBMSwxLDAsMCwxLDcuNzA3LDEuMjkzbDEwLDEwYTEsMSwwLDAsMSwwLDEuNDE0bC0xMCwxMEExLDEsMCwwLDEsNywyM1oiLz48L3N2Zz4="

/***/ }),

/***/ "7GUm":
/***/ (function(module, exports) {

module.exports = {
	"PageLayout": "_3BfR05B4No8jx371ftdsx1"
};

/***/ }),

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ "9Bdh":
/***/ (function(module, exports, __webpack_require__) {

const Elements = __webpack_require__("4OIt");

const getAllElements = () => {
  return elements;
};

const getElementBySlug = slug => {
  return Elements[slug]; // return elements.filter(elem => elem.slug === slug).pop()
};

module.exports = {
  getAllElements,
  getElementBySlug
};

/***/ }),

/***/ "BlI0":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Text field\",\"slug\":\"text-field\",\"sections\":[{\"type\":\"h1\",\"content\":\"`@motif/text-field`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/text-field\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {TextField} from '@motif/text-field';\\n\\n<TextField id={'1'} label={'Label'} helperText={'Helper text'} disabled={false} value={''}/>,\\n\"}]}");

/***/ }),

/***/ "Cu/r":
/***/ (function(module, exports) {

module.exports = require("@storybook/theming/dist/");

/***/ }),

/***/ "DKIb":
/***/ (function(module, exports) {

module.exports = {
	"MainContent": "_3erAXo5TH0DxpvFJhMcboC",
	"Tile": "_256h9OwYPnysv9oBs0tj3M"
};

/***/ }),

/***/ "Dqqv":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Footer\",\"slug\":\"footer\",\"sections\":[{\"type\":\"h1\",\"content\":\"`footer`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/footer\\n\"},{\"type\":\"p\",\"content\":\"You need to add\"},{\"type\":\"code\",\"lang\":\"html\",\"content\":\"<div id=\\\"overlay-root\\\"/>\\n\"},{\"type\":\"p\",\"content\":\"somewhere in your page.\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import { Footer } from '@motif/footer';\\n\\n<Footer/>\\n\"}]}");

/***/ }),

/***/ "FMjC":
/***/ (function(module, exports) {

module.exports = {
	"ElementHeader": "_3h8mH62yND8Fd4wV3saest",
	"ElementHeader__Nav": "_2BcEiyjfbF5STxIqHUgMb2",
	"ElementHeader__NavLinks": "_3CZo6P8jnsxta16HYl-sbj"
};

/***/ }),

/***/ "FUVa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ComponentPreview; });
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pcb2");
/* harmony import */ var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _storybook_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KRbL");
/* harmony import */ var _storybook_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_storybook_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storybook_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("agMc");
/* harmony import */ var _storybook_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_storybook_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storybook_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/EUs");
/* harmony import */ var _storybook_theming__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_theming__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("taes");
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _storybook_ui_dist_components_layout_desktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2Y5B");
/* harmony import */ var _storybook_ui_dist_components_layout_desktop__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_components_layout_desktop__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _storybook_ui_dist_containers_nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("sJnI");
/* harmony import */ var _storybook_ui_dist_containers_nav__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_containers_nav__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _storybook_ui_dist_containers_preview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("pWA3");
/* harmony import */ var _storybook_ui_dist_containers_preview__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_containers_preview__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _storybook_ui_dist_containers_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("dout");
/* harmony import */ var _storybook_ui_dist_containers_panel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_containers_panel__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _storybook_ui_dist_containers_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("yIqI");
/* harmony import */ var _storybook_ui_dist_containers_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_containers_notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _storybook_ui_dist_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("jrMa");
/* harmony import */ var _storybook_ui_dist_settings__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_settings__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _storybook_ui_dist_components_layout_container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("YQDI");
/* harmony import */ var _storybook_ui_dist_components_layout_container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_components_layout_container__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _storybook_theming_dist___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Cu/r");
/* harmony import */ var _storybook_theming_dist___WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_storybook_theming_dist___WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _storybook_ui_dist_app__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("qHer");
/* harmony import */ var _storybook_ui_dist_app__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist_app__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _storybook_ui_dist__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("gco3");
/* harmony import */ var _storybook_ui_dist__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_storybook_ui_dist__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _storybook_addons_dist__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("LopU");
/* harmony import */ var _storybook_addons_dist__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_storybook_addons_dist__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_18__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








 // import App from './app';
// import Provider from './provider';
// @ts-ignore

_storybook_theming__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"].displayName = 'ThemeProvider'; // @ts-ignore

react_helmet_async__WEBPACK_IMPORTED_MODULE_6__["HelmetProvider"].displayName = 'HelmetProvider';

const getDocsMode = () => {
  try {
    return !!global__WEBPACK_IMPORTED_MODULE_0__["DOCS_MODE"];
  } catch (e) {
    return false;
  }
};

const Container = process.env.XSTORYBOOK_EXAMPLE_APP ? react__WEBPACK_IMPORTED_MODULE_1___default.a.StrictMode : react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment; // import React from 'react'








 // import { Panel } from '@storybook/ui/dist/components/panel/panel'

 // import { ThemeProvider, ensure as ensureTheme } from '@storybook/theming/dist';




console.debug('stuff', _storybook_ui_dist_containers_nav__WEBPACK_IMPORTED_MODULE_8___default()());
 // import { Provider } from '@storybook/ui/dist';

const View = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__["styled"].div({
  position: 'fixed',
  overflow: 'hidden',
  height: '100vh',
  width: '100vw'
});
_storybook_addons_dist__WEBPACK_IMPORTED_MODULE_17__["addons"].setConfig({
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  isFullscreen: false,

  /**
   * display panel that shows a list of stories
   * @type {Boolean}
   */
  showNav: false,

  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: false,

  /**
   * where to show the addon panel
   * @type {('bottom'|'right')}
   */
  panelPosition: 'bottom',

  /**
   * sidebar tree animations
   * @type {Boolean}
   */
  sidebarAnimations: false,

  /**
   * enable/disable shortcuts
   * @type {Boolean}
   */
  enableShortcuts: true,

  /**
   * show/hide tool bar
   * @type {Boolean}
   */
  isToolshown: false,

  /**
   * theme storybook, see link below
   */
  theme: undefined,

  /**
   * id to select an addon panel
   * @type {String}
   */
  selectedPanel: undefined
});

class MyProvider extends _storybook_ui_dist__WEBPACK_IMPORTED_MODULE_16__["Provider"] {
  constructor() {
    super();
    this.addons = _storybook_addons_dist__WEBPACK_IMPORTED_MODULE_17__["addons"];
    this.channel = {
      on: () => {},
      off: () => {},
      emit: () => {},
      addListener: () => {},
      addPeerListener: () => {}
    };
  }

  getConfig() {
    return {
      layout: {
        isToolsshown: false,
        showPanel: true,
        showNav: false,
        isFullscreen: false,
        panelPosition: 'top'
      }
    };
  }

  getElements(type) {
    return _storybook_addons_dist__WEBPACK_IMPORTED_MODULE_17__["addons"].getElements(type);
  }

  renderPreview() {
    return __jsx("p", null, "This is the Preview");
  }

  handleAPI(api) {
    // no need to do anything for now.
    _storybook_addons_dist__WEBPACK_IMPORTED_MODULE_17__["addons"].loadAddons(api);
  }

}

const provider = new MyProvider(); // nextjs ssr breaks with storybook -> csr only
// const RootWithNoSSR = dynamic(
//     () => import('@storybook/ui/dist').then(module => {
//         console.log('MODULE', module)
//         return (props) => module.Root(props)
//     }),
//     { ssr: false }
// );

const RootWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_18___default()(() => __jsx(ComponentPreview, null), {
  ssr: false
});
console.log('RootWithNoSSR', RootWithNoSSR);

class ComponentPreview extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(Container, {
      key: "container"
    }, __jsx(react_helmet_async__WEBPACK_IMPORTED_MODULE_6__["HelmetProvider"], {
      key: "helmet.Provider"
    }, __jsx(_storybook_router__WEBPACK_IMPORTED_MODULE_3__["LocationProvider"], {
      key: "location.provider"
    }, __jsx(_storybook_router__WEBPACK_IMPORTED_MODULE_3__["Location"], {
      key: "location.consumer"
    }, locationData => __jsx(_storybook_api__WEBPACK_IMPORTED_MODULE_4__["Provider"], _extends({
      key: "manager",
      provider: provider
    }, locationData, {
      docsMode: getDocsMode()
    }), ({
      state,
      api
    }) => {
      const panelCount = Object.keys(api.getPanels()).length;
      const story = api.getData(state.storyId);
      const props = {
        Sidebar: _storybook_ui_dist_containers_nav__WEBPACK_IMPORTED_MODULE_8__["Sidebar"],
        Preview: (_storybook_ui_dist_containers_preview__WEBPACK_IMPORTED_MODULE_9___default()),
        Panel: (_storybook_ui_dist_containers_panel__WEBPACK_IMPORTED_MODULE_10___default()),
        Notifications: (_storybook_ui_dist_containers_notifications__WEBPACK_IMPORTED_MODULE_11___default()),
        Nav,
        pages: [{
          key: 'settings',
          render: () => __jsx(_storybook_ui_dist_settings__WEBPACK_IMPORTED_MODULE_12___default.a, null)
        }]
      };
      const size = {
        width: 500,
        height: 500
      };
      const {
        width,
        height
      } = size;
      return __jsx(_storybook_theming__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        key: "theme.provider",
        theme: Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_5__["ensure"])(state.theme)
      }, __jsx(View, null, __jsx(_storybook_ui_dist_components_layout_desktop__WEBPACK_IMPORTED_MODULE_7__["Desktop"], _extends({}, props, {
        viewMode: state.viewMode,
        options: state.layout,
        docsOnly: story && story.parameters && story.parameters.docsOnly
      }, {
        width,
        height
      }, {
        panelCount: panelCount
      })), __jsx("h1", null, "muh")));
    }))))); // return (
    //     <Container key="container">
    //       <HelmetProvider key="helmet.Provider">
    //         <LocationProvider key="location.provider">
    //           <Location key="location.consumer">
    //             {(locationData) => (
    //                 <ManagerProvider
    //                   key="manager"
    //                   provider={provider}
    //                   {...locationData}
    //                   docsMode={getDocsMode()}
    //                 >
    //                   {({ state, api }) => {
    //                       const panelCount = Object.keys(api.getPanels()).length;
    //                       const story = api.getData(state.storyId);
    //                       const props = {
    //                           Sidebar,
    //                           Preview,
    //                           Panel,
    //                           Notifications,
    //                           pages: [
    //                               {
    //                                   key: 'settings',
    //                                   render: () => <SettingsPages />,
    //                                   /* route: ({ children }) => ( */
    //                                   /*     {JSON.stringify(children)} */
    //                                   /* ), */
    //                               },
    //                           ],
    //                       }
    //                       const size = { width: 500, height: 500 };
    //                       const { width, height } = size;
    //                       return (
    //                           <ThemeProvider key="theme.provider" theme={ensureTheme(state.theme)}>
    //                             <View>
    //                               <Global styles={createGlobal} />
    //                               <Desktop
    //                                 {...props}
    //                                 viewMode={state.viewMode}
    //                                 options={state.layout}
    //                                 docsOnly={story && story.parameters && story.parameters.docsOnly}
    //                                 {...{ width, height }}
    //                                 panelCount={panelCount}
    //                               />
    //                             </View>
    //                             {/* <App */}
    //                             {/*   key="app" */}
    //                             {/*   viewMode={state.viewMode} */}
    //                             {/*   layout={state.layout} */}
    //                             {/*   panelCount={panelCount} */}
    //                             {/*   docsOnly={story && story.parameters && story.parameters.docsOnly} */}
    //                             {/* /> */}
    //                           </ThemeProvider>
    //                       );
    //                   }}
    //                 </ManagerProvider>
    //             )}
    //           </Location>
    //         </LocationProvider>
    //       </HelmetProvider>
    //     </Container>
    // )
  }

}

ComponentPreview.defaultProps = {
  id: "componentPreview"
};


/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "HBw5":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgLTMwIC0xMjkgKSI+CiAgICA8cGF0aCBkPSJNIDEwLjc2OTIzMDc2OTIzMDggOS4wMDI0MDM4NDYxNTM4NSAgTCAxMC43NjkyMzA3NjkyMzA4IDE4LjA0MDg2NTM4NDYxNTQgIEwgMTguNDYxNTM4NDYxNTM4NSAxMy44NDYxNTM4NDYxNTM4ICBMIDE4LjQ2MTUzODQ2MTUzODUgNi4yMDE5MjMwNzY5MjMwOCAgTCAxMC43NjkyMzA3NjkyMzA4IDkuMDAyNDAzODQ2MTUzODUgIFogTSAxLjYxMDU3NjkyMzA3NjkyIDQuNTkxMzQ2MTUzODQ2MTUgIEwgMTAgNy42NDQyMzA3NjkyMzA3NyAgTCAxOC4zODk0MjMwNzY5MjMxIDQuNTkxMzQ2MTUzODQ2MTUgIEwgMTAgMS41Mzg0NjE1Mzg0NjE1NCAgTCAxLjYxMDU3NjkyMzA3NjkyIDQuNTkxMzQ2MTUzODQ2MTUgIFogTSAxOS43MjM1NTc2OTIzMDc3IDMuNzM3OTgwNzY5MjMwNzcgIEMgMTkuOTA3ODUyNTY0MTAyNiA0LjAwMjQwMzg0NjE1Mzg1ICAyMCA0LjI5NDg3MTc5NDg3MTc5ICAyMCA0LjYxNTM4NDYxNTM4NDYyICBMIDIwIDEzLjg0NjE1Mzg0NjE1MzggIEMgMjAgMTQuMTI2NjAyNTY0MTAyNiAgMTkuOTI3ODg0NjE1Mzg0NiAxNC4zODcwMTkyMzA3NjkyICAxOS43ODM2NTM4NDYxNTM4IDE0LjYyNzQwMzg0NjE1MzggIEMgMTkuNjM5NDIzMDc2OTIzMSAxNC44Njc3ODg0NjE1Mzg1ICAxOS40NDMxMDg5NzQzNTkgMTUuMDU2MDg5NzQzNTg5NyAgMTkuMTk0NzExNTM4NDYxNSAxNS4xOTIzMDc2OTIzMDc3ICBMIDEwLjczMzE3MzA3NjkyMzEgMTkuODA3NjkyMzA3NjkyMyAgQyAxMC41MDg4MTQxMDI1NjQxIDE5LjkzNTg5NzQzNTg5NzQgIDEwLjI2NDQyMzA3NjkyMzEgMjAgIDEwIDIwICBDIDkuNzM1NTc2OTIzMDc2OTIgMjAgIDkuNDkxMTg1ODk3NDM1OSAxOS45MzU4OTc0MzU4OTc0ICA5LjI2NjgyNjkyMzA3NjkyIDE5LjgwNzY5MjMwNzY5MjMgIEwgMC44MDUyODg0NjE1Mzg0NjIgMTUuMTkyMzA3NjkyMzA3NyAgQyAwLjU1Njg5MTAyNTY0MTAyNiAxNS4wNTYwODk3NDM1ODk3ICAwLjM2MDU3NjkyMzA3NjkyMyAxNC44Njc3ODg0NjE1Mzg1ICAwLjIxNjM0NjE1Mzg0NjE1NCAxNC42Mjc0MDM4NDYxNTM4ICBDIDAuMDcyMTE1Mzg0NjE1Mzg0NiAxNC4zODcwMTkyMzA3NjkyICAwIDE0LjEyNjYwMjU2NDEwMjYgIDAgMTMuODQ2MTUzODQ2MTUzOCAgTCAwIDQuNjE1Mzg0NjE1Mzg0NjIgIEMgMCA0LjI5NDg3MTc5NDg3MTc5ICAwLjA5MjE0NzQzNTg5NzQzNTkgNC4wMDI0MDM4NDYxNTM4NSAgMC4yNzY0NDIzMDc2OTIzMDggMy43Mzc5ODA3NjkyMzA3NyAgQyAwLjQ2MDczNzE3OTQ4NzE4IDMuNDczNTU3NjkyMzA3NjkgIDAuNzA1MTI4MjA1MTI4MjA1IDMuMjg1MjU2NDEwMjU2NDEgIDEuMDA5NjE1Mzg0NjE1MzggMy4xNzMwNzY5MjMwNzY5MiAgTCA5LjQ3MTE1Mzg0NjE1Mzg1IDAuMDk2MTUzODQ2MTUzODQ1OCAgQyA5LjY0NzQzNTg5NzQzNTkgMC4wMzIwNTEyODIwNTEyNzk3ICA5LjgyMzcxNzk0ODcxNzk1IDAgIDEwIDAgIEMgMTAuMTc2MjgyMDUxMjgyMSAwICAxMC4zNTI1NjQxMDI1NjQxIDAuMDMyMDUxMjgyMDUxMjc5NyAgMTAuNTI4ODQ2MTUzODQ2MiAwLjA5NjE1Mzg0NjE1Mzg0NTggIEwgMTguOTkwMzg0NjE1Mzg0NiAzLjE3MzA3NjkyMzA3NjkyICBDIDE5LjI5NDg3MTc5NDg3MTggMy4yODUyNTY0MTAyNTY0MSAgMTkuNTM5MjYyODIwNTEyOCAzLjQ3MzU1NzY5MjMwNzY5ICAxOS43MjM1NTc2OTIzMDc3IDMuNzM3OTgwNzY5MjMwNzcgIFogIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiMzOTVmODYiIHN0cm9rZT0ibm9uZSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMCAxMjkgKSIvPgogIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "J+di":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Radio button\",\"slug\":\"radio-button\",\"sections\":[{\"type\":\"h1\",\"content\":\"`radio-button`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/radio-button\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {RadioButton} from '@motif/radio-button';\\n\"}]}");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KRbL":
/***/ (function(module, exports) {

module.exports = require("@storybook/router");

/***/ }),

/***/ "Lnr+":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Button\",\"slug\":\"button\",\"sections\":[{\"type\":\"h1\",\"content\":\"Motif UI `button`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/button\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import { Button } from '@motif/button';\\n\"}]}");

/***/ }),

/***/ "LopU":
/***/ (function(module, exports) {

module.exports = require("@storybook/addons/dist");

/***/ }),

/***/ "O/l+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");

// EXTERNAL MODULE: ./components/Sidebar/Sidebar.module.scss
var Sidebar_module = __webpack_require__("fe9M");
var Sidebar_module_default = /*#__PURE__*/__webpack_require__.n(Sidebar_module);

// EXTERNAL MODULE: ./components/Sidebar/ico_chevron_right.svg
var ico_chevron_right = __webpack_require__("722E");
var ico_chevron_right_default = /*#__PURE__*/__webpack_require__.n(ico_chevron_right);

// EXTERNAL MODULE: ./components/Sidebar/ico_foundations.svg
var ico_foundations = __webpack_require__("tpUI");
var ico_foundations_default = /*#__PURE__*/__webpack_require__.n(ico_foundations);

// EXTERNAL MODULE: ./components/Sidebar/ico_elements.svg
var ico_elements = __webpack_require__("HBw5");
var ico_elements_default = /*#__PURE__*/__webpack_require__.n(ico_elements);

// EXTERNAL MODULE: ./components/Sidebar/ico_components.svg
var ico_components = __webpack_require__("dc42");
var ico_components_default = /*#__PURE__*/__webpack_require__.n(ico_components);

// EXTERNAL MODULE: ./components/Sidebar/ico_assets.svg
var ico_assets = __webpack_require__("Qce1");
var ico_assets_default = /*#__PURE__*/__webpack_require__.n(ico_assets);

// EXTERNAL MODULE: ./components/Sidebar/ico_datasheet_outline.svg
var ico_datasheet_outline = __webpack_require__("SrgZ");
var ico_datasheet_outline_default = /*#__PURE__*/__webpack_require__.n(ico_datasheet_outline);

// EXTERNAL MODULE: ./data/__generated__elements__/index.js
var _generated_elements_ = __webpack_require__("4OIt");

// CONCATENATED MODULE: ./components/Sidebar/Sidebar.js
var __jsx = external_react_default.a.createElement;











const sections = [{
  icon: ico_foundations_default.a,
  title: 'Foundations',
  children: [{
    title: 'Overview',
    href: '/foundations'
  }, {
    title: 'Colors',
    href: '/foundations/colors'
  }, {
    title: 'Typography',
    href: '/foundations/typography'
  } // { title: 'Layout', href: '/foundations/layout' },
  ]
}, {
  icon: ico_elements_default.a,
  title: 'Elements',
  children: Object.keys(_generated_elements_).map(key => {
    const elem = _generated_elements_[key];
    return {
      title: elem.title,
      href: `/elements/${elem.slug}`
    };
  }) // old static
  // [
  //     { title: 'Overview', href: '/elements' },
  //     { title: 'Button', href: '/elements/button' },
  //     { title: 'Form Input', href: '/elements/form-input' },
  // ]

}, {
  icon: ico_components_default.a,
  title: 'Components',
  children: [{
    title: 'Overview',
    href: '/components'
  }, {
    title: 'Header',
    href: '/components/header'
  }, {
    title: 'Footer',
    href: '/components/footer'
  }, {
    title: 'International Prices',
    href: '/components/international-prices'
  }]
}, {
  icon: ico_assets_default.a,
  title: 'Assets',
  children: [{
    title: 'Overview',
    href: '/assets'
  }, {
    title: 'Sketch',
    href: '/assets/sketch'
  }]
}, {
  icon: ico_datasheet_outline_default.a,
  title: 'Other',
  children: [{
    title: 'Scratchpad',
    href: '/scratchpad'
  }]
}];

class Sidebar_NavSection extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: true
    };
    this.toggleState = this.toggleState.bind(this);
    this.closeIfOpen = this.closeIfOpen.bind(this);
  }

  componentDidMount() {
    window.document.addEventListener('click:toggleSidebar', this.closeIfOpen);
  }

  componentWillUnmount() {
    window.document.removeEventListener('click:toggleSidebar', this.closeIfOpen);
  }

  closeIfOpen() {
    if (!this.state.isClosed) {
      this.setState({
        isClosed: !this.state.isClosed
      });
    }
  }

  toggleState() {
    this.setState({
      isClosed: !this.state.isClosed
    });
  }

  render() {
    const visibility = this.state.isClosed ? 'hidden' : 'visible';
    const height = this.state.isClosed ? 0 : 'auto';
    const transform = this.state.isClosed ? 'none' : 'rotate(90deg)';
    return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: Sidebar_module_default.a.VerticalNav__TopLevel,
      onClick: () => {
        if (!this.props.isSidebarOpen) {
          const toggleSidebarEvent = new Event('click:toggleSidebar');
          window.document.dispatchEvent(toggleSidebarEvent);
        }

        this.toggleState();
      }
    }, this.props.section.icon && __jsx("img", {
      className: Sidebar_module_default.a.VerticalNav__TopLevelIcon,
      src: this.props.section.icon
    }), this.props.isSidebarOpen && __jsx(external_react_default.a.Fragment, null, __jsx("span", {
      className: Sidebar_module_default.a.VerticalNav__TopLevelTitle
    }, this.props.section.title), __jsx("img", {
      style: {
        transform
      },
      className: Sidebar_module_default.a.VerticalNav__TopLevelAngle,
      src: ico_chevron_right_default.a
    }))), __jsx("ul", {
      style: {
        height
      }
    }, this.props.section.children && this.props.section.children.map((item, idx) => __jsx(link_default.a, {
      href: "/elements/[element]",
      shallow: true,
      as: item.href,
      key: idx
    }, __jsx("li", {
      style: {
        visibility
      }
    }, __jsx("a", null, item.title))))));
  }

}

class Sidebar_Sidebar extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStickyModel: false
    };
  }

  componentDidMount() {
    window.addEventListener('Header:enableSticky', () => {
      this.setState({
        isStickyMode: true
      });
    });
    window.addEventListener('Header:disableSticky', () => {
      this.setState({
        isStickyMode: false
      });
    });
  }

  render() {
    const style = {
      width: this.props.isOpen ? '20rem' : '5.5rem',
      top: this.state.isStickyMode ? '3rem' : ''
    };
    return __jsx("aside", null, __jsx("nav", {
      style: style,
      className: Sidebar_module_default.a.Sidebar
    }, sections.map((section, idx) => __jsx(Sidebar_NavSection, {
      isSidebarOpen: this.props.isOpen,
      key: idx,
      section: section
    }))));
  }

}
// CONCATENATED MODULE: ./components/Sidebar/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return Sidebar_Sidebar; });


/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Header/Header.module.scss
var Header_module = __webpack_require__("yzvi");
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);

// EXTERNAL MODULE: ./components/Header/ico_hamburger.svg
var ico_hamburger = __webpack_require__("XNBL");
var ico_hamburger_default = /*#__PURE__*/__webpack_require__.n(ico_hamburger);

// EXTERNAL MODULE: ./components/Header/ico_search.svg
var ico_search = __webpack_require__("xzUa");
var ico_search_default = /*#__PURE__*/__webpack_require__.n(ico_search);

// EXTERNAL MODULE: ./components/Header/ico_cross_circle_outline.svg
var ico_cross_circle_outline = __webpack_require__("VpLP");
var ico_cross_circle_outline_default = /*#__PURE__*/__webpack_require__.n(ico_cross_circle_outline);

// EXTERNAL MODULE: ./data/elements.js
var data_elements = __webpack_require__("9Bdh");

// CONCATENATED MODULE: ./components/Header/Header.js
var __jsx = external_react_default.a.createElement;








class Header_Search extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  componentDidMount() {
    window.document.addEventListener('keyup', this.handleOnKeyUp);
  }

  componentWillUnmount() {
    window.document.removeEventListener('keyup', this.handleOnKeyUp);
  }

  handleOnKeyUp(event) {
    if (event.ctrlKey && event.which == 70) {
      this.props.onClick();
    }
  }

  render() {
    const searchInputStyle = {
      visibility: this.props.isOpen ? 'visible' : 'hidden',
      width: this.props.isOpen ? '40vw' : 0,
      padding: this.props.isOpen ? '.5rem' : 0,
      margin: this.props.isOpen ? 'auto 2rem auto auto' : 0
    };
    return __jsx(external_react_default.a.Fragment, null, __jsx("input", {
      style: searchInputStyle,
      className: Header_module_default.a.SearchInput,
      onTransitionEnd: event => {
        event.persist();
        event.target.focus();
        event.target.value = '';
      },
      autoFocus: true
    }), __jsx("img", {
      className: Header_module_default.a.SearchToggle,
      onClick: this.props.onClick,
      src: this.props.isOpen ? ico_cross_circle_outline_default.a : ico_search_default.a
    }));
  }

}

class Header_StickyMenu extends external_react_default.a.Component {
  render() {
    const element = Object(data_elements["getElementBySlug"])('button');
    const style = {
      marginLeft: this.props.isSidebarOpen ? '17rem' : '2.5rem'
    };
    return __jsx("div", {
      style: style,
      className: Header_module_default.a.StickyMenu
    }, this.props.active && __jsx(external_react_default.a.Fragment, null, element.sections && element.sections.filter(section => section.type === 'h2').map((section, idx) => __jsx("a", {
      key: idx,
      href: `#${section.content}`
    }, section.content))));
  }

}

class Header_Header extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchInputOpen: false,
      isStickyMode: false,
      isSidebarOpen: true
    };
    this.toggleNavbarState = this.toggleNavbarState.bind(this);
    this.openSearchInput = this.openSearchInput.bind(this);
    this.closeSearchInput = this.closeSearchInput.bind(this);
    this.toggleSearchInput = this.toggleSearchInput.bind(this);
    this.enableSticky = this.enableSticky.bind(this);
    this.disableSticky = this.disableSticky.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('Header:enableSticky', this.enableSticky);
    window.addEventListener('Header:disableSticky', this.disableSticky);
    window.document.addEventListener('click:toggleSidebar', this.toggleSidebar);

    document.onkeydown = evt => {
      evt = evt || window.event;
      var isEscape = false;

      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }

      if (isEscape) {
        this.closeSearchInput();
      }
    };
  }

  componentWillUnmount() {
    window.removeEventListener('Header:enableSticky', this.enableSticky);
    window.removeEventListener('Header:disableSticky', this.disableSticky);
    window.document.removeEventListener('click:toggleSidebar', this.toggleSidebar);
  }

  toggleSidebar() {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen
    });
  }

  enableSticky() {
    this.setState({
      isStickyMode: true
    });
  }

  disableSticky() {
    this.setState({
      isStickyMode: false
    });
  }

  closeSearchInput() {
    this.setState({
      isSearchInputOpen: false
    });
  }

  openSearchInput() {
    this.setState({
      isSearchInputOpen: true
    });
  }

  toggleSearchInput() {
    this.setState({
      isSearchInputOpen: !this.state.isSearchInputOpen
    });
  }

  toggleNavbarState() {
    const toggleEvent = new Event('click:toggleSidebar');
    window.document.dispatchEvent(toggleEvent);
  }

  render() {
    const stickyStyle = {
      backgroundColor: '#0A3761',
      color: '#0A3761',
      padding: '.5rem 0'
    };
    const logoStickyStyle = {
      color: '#0A3761'
    };
    return __jsx("header", {
      style: this.state.isStickyMode ? stickyStyle : null,
      className: Header_module_default.a.Header
    }, __jsx("img", {
      className: Header_module_default.a.SideNavToggle,
      src: ico_hamburger_default.a,
      onClick: this.toggleNavbarState
    }), __jsx("h1", {
      style: this.state.isStickyMode ? {
        display: 'none'
      } : null
    }, __jsx(link_default.a, {
      href: "/"
    }, __jsx("a", {
      style: this.state.isStickyMode ? logoStickyStyle : null
    }, "idealo design system"))), __jsx(Header_StickyMenu, {
      isSidebarOpen: this.state.isSidebarOpen,
      active: this.state.isStickyMode
    }), __jsx(Header_Search, {
      onClick: this.toggleSearchInput,
      closeSearchInput: this.closeSearchInput,
      isOpen: this.state.isSearchInputOpen
    }));
  }

}
// CONCATENATED MODULE: ./components/Header/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return Header_Header; });


/***/ }),

/***/ "Ojtj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/PageLayout/index.js + 1 modules
var PageLayout = __webpack_require__("xmpm");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/ElementPage/ElementHeader.module.scss
var ElementHeader_module = __webpack_require__("FMjC");
var ElementHeader_module_default = /*#__PURE__*/__webpack_require__.n(ElementHeader_module);

// CONCATENATED MODULE: ./components/ElementPage/ElementHeader.js
var __jsx = external_react_default.a.createElement;



class ElementHeader_ElementHeader extends external_react_default.a.Component {
  render() {
    if (!this.props.element) return null;
    const element = this.props.element;
    console.log('ElementHeader element', element);
    const sections = element.sections;
    return __jsx("div", {
      className: ElementHeader_module_default.a.ElementHeader
    }, __jsx("div", {
      className: ElementHeader_module_default.a.ElementHeader__Nav
    }, __jsx("h1", null, element.title), __jsx("div", {
      className: ElementHeader_module_default.a.ElementHeader__NavLinks
    }, sections.filter(section => section.type === 'h2').map((item, idx) => __jsx(link_default.a, {
      key: idx,
      href: `#${item.content}`
    }, __jsx("a", null, item.content))))));
  }

}
// EXTERNAL MODULE: external "react-highlight"
var external_react_highlight_ = __webpack_require__("wRN9");

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__("88KH");

// EXTERNAL MODULE: ./components/Card/index.js + 1 modules
var Card = __webpack_require__("30Jy");

// EXTERNAL MODULE: ./components/ElementPage/ElementBody.module.scss
var ElementBody_module = __webpack_require__("kxTg");
var ElementBody_module_default = /*#__PURE__*/__webpack_require__.n(ElementBody_module);

// EXTERNAL MODULE: external "@storybook/ui/dist/components/layout/desktop"
var desktop_ = __webpack_require__("2Y5B");

// EXTERNAL MODULE: external "@storybook/ui/dist/components/layout/container"
var container_ = __webpack_require__("YQDI");

// EXTERNAL MODULE: external "@storybook/ui/dist/components/panel/panel"
var panel_ = __webpack_require__("iBr/");

// EXTERNAL MODULE: external "@storybook/theming/dist/"
var _ = __webpack_require__("Cu/r");

// EXTERNAL MODULE: external "@storybook/theming/dist"
var dist_ = __webpack_require__("sXBA");

// EXTERNAL MODULE: external "@storybook/ui/dist/app"
var app_ = __webpack_require__("qHer");

// EXTERNAL MODULE: external "@storybook/ui/dist"
var ui_dist_ = __webpack_require__("gco3");

// EXTERNAL MODULE: external "@storybook/addons/dist"
var addons_dist_ = __webpack_require__("LopU");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: ./components/ElementPage/StorybookPreview.js
var StorybookPreview = __webpack_require__("FUVa");

// CONCATENATED MODULE: ./components/ElementPage/Preview.js











const Preview = dynamic_default()( // () => import('./StorybookPreview'),
// () => import('./StorybookPreview_slim'),
() => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, "FUVa")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("FUVa")],
    modules: ['./StorybookPreview']
  }
});

// CONCATENATED MODULE: ./components/ElementPage/ElementBody.js
var ElementBody_jsx = external_react_default.a.createElement;









function H1(section) {
  return ElementBody_jsx(external_react_default.a.Fragment, null, ElementBody_jsx("h1", null, section.content));
}

function H2(section) {
  return ElementBody_jsx("a", {
    name: section.content
  }, ElementBody_jsx("h2", null, section.content));
}

function P(section) {
  return ElementBody_jsx("p", {
    dangerouslySetInnerHTML: {
      __html: section.content
    }
  });
}

function Code(section) {
  let lang = 'basic';
  if (section.lang === 'js') lang = 'javascript';
  if (section.lang === 'bash') lang = 'bash';
  if (section.lang === 'css') lang = 'scss';
  if (section.lang === 'html') lang = 'html';
  const customStyle = {
    border: 0,
    borderRadius: 0
  };
  return ElementBody_jsx(external_react_default.a.Fragment, null, ElementBody_jsx(external_react_syntax_highlighter_["Prism"], {
    language: lang,
    customStyle: customStyle,
    style: prism_["twilight"],
    showLineNumbers: true
  }, section.content));
}

class ElementBody_ElementBody extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.emitStickyEvent = this.emitStickyEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.emitStickyEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.emitStickyEvent);
  }

  emitStickyEvent() {
    const y = window.scrollY || window.pageYOffset;

    if (y > 150) {
      const enableSticky = new Event('Header:enableSticky');
      window.dispatchEvent(enableSticky);
    } else {
      const disableSticky = new Event('Header:disableSticky');
      window.dispatchEvent(disableSticky);
    }
  }

  render() {
    if (!this.props.element) return null;
    const element = this.props.element;
    const sections = element.sections;
    console.log('ElementBody element', element);
    const style = {
      display: 'block',
      position: 'relative',
      top: '-7rem',
      visibility: 'hidden'
    };
    return ElementBody_jsx("div", {
      className: ElementBody_module_default.a.ElementBody
    }, ElementBody_jsx(Card["a" /* default */], null, ElementBody_jsx("section", null, sections.map((section, idx) => ElementBody_jsx("div", {
      key: idx
    }, section.type === 'h1' && H1(section), section.type === 'h2' && H2(section), section.type === 'p' && P(section), section.type === 'code' && Code(section))))));
  }

}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./data/elements.js
var data_elements = __webpack_require__("9Bdh");

// CONCATENATED MODULE: ./components/ElementPage/index.js
var ElementPage_jsx = external_react_default.a.createElement;





 // const element = getElementBySlug('button')

class ElementPage_ElementDetails extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: null
    };
    this.handleRouteChange = this.handleRouteChange.bind(this);
  }

  componentDidMount() {
    const {
      elementName
    } = this.props.router.query; // console.debug('this.props.router.query', this.props.router.query)

    this.setState({
      element: Object(data_elements["getElementBySlug"])(elementName)
    });
    router_default.a.events.on('routeChangeStart', this.handleRouteChange);
  }

  componentWillUnmount() {
    router_default.a.events.off('routeChangeStart', this.handleRouteChange);
  }

  handleRouteChange() {
    const {
      elementName
    } = this.props.router.query;
    console.debug('elementName', elementName);
    this.setState({
      element: Object(data_elements["getElementBySlug"])(elementName)
    });
  }

  render() {
    return ElementPage_jsx(PageLayout["a" /* default */], null, ElementPage_jsx(ElementHeader_ElementHeader, {
      element: this.props.element
    }), ElementPage_jsx(ElementBody_ElementBody, {
      element: this.props.element
    }));
  }

}

/* harmony default export */ var ElementPage = (Object(router_["withRouter"])(ElementPage_ElementDetails));
// CONCATENATED MODULE: ./pages/elements/[element].js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
var _element_jsx = external_react_default.a.createElement;




 // const element = getElementBySlug('button')

async function getStaticProps({
  params
}) {
  console.log('getStaticProps', params);
  return {
    props: {
      id: 12345
    }
  };
}
async function getStaticPaths() {
  // Return a list of possible value for id
  console.log('getStaticPaths called');
} // class ElementPageView extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log('ElementPageView constructor props', props)
//         this.state = {
//             element: null
//         }
//         this.handleRouteChange = this.handleRouteChange.bind(this)
//     }
//     componentDidMount() {
//         const { elementName } = this.props.router.query
//         console.debug('elementPageView:componentDidMount this.props.router', this.props.router)
//         this.setState({
//             element: getElementBySlug(elementName)
//         })
//         Router.events.on('routeChangeStart', this.handleRouteChange)
//     }
//     componentWillUnmount() {
//         Router.events.off('routeChangeStart', this.handleRouteChange)
//     }
//     handleRouteChange() {
//         const { elementName } = this.props.router.query
//         console.debug('elementPageView:handleRouteChange elementName', this.props.router)
//         this.setState({
//             element: getElementBySlug(elementName)
//         })
//     }
//     async getStaticProps({ params }) {
//         console.log('Class: getStaticProps', params)
//         return {
//             props: {
//                 id: 12345,
//             }
//         }
//     }
//     async getStaticPaths() {
//         // Return a list of possible value for id
//         console.log('Class: getStaticPaths called')
//     }
//     render() {
//         return (
//             <ElementPage element={this.state.element} />
//         )
//     }
// }

function ElementPageView({
  element
}) {
  if (!element) {
    const router = Object(router_["useRouter"])();
    const {
      element: slug
    } = router.query;
    element = Object(data_elements["getElementBySlug"])(slug);
  }

  return _element_jsx(ElementPage, {
    element: element
  });
}

ElementPageView.getInitialProps = async ({
  req
}) => {
  const elementSlug = req && req.params ? req.params.element : '';
  console.log('ElementPageView.getInitialProps elementSlug', elementSlug);
  const element = Object(data_elements["getElementBySlug"])(elementSlug);
  return {
    element
  };
};

/* harmony default export */ var _element_ = __webpack_exports__["default"] = (Object(router_["withRouter"])(ElementPageView));

/***/ }),

/***/ "Ps1E":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Header\",\"slug\":\"header\",\"sections\":[{\"type\":\"h1\",\"content\":\"`motif-header`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/header\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import { Header } from '@motif/header';\\n\\n<Header/>\\n\"}]}");

/***/ }),

/***/ "Qce1":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAtMSApIj4KICAgIDxwYXRoIGQ9Ik0gMTUuODc1IDEwLjUzNDA5MDkwOTA5MDkgIEMgMTUuOTU4MzMzMzMzMzMzMyAxMC40MzE4MTgxODE4MTgyICAxNiAxMC4zMjk1NDU0NTQ1NDU1ICAxNiAxMC4yMjcyNzI3MjcyNzI3ICBDIDE2IDEwLjEwNzk1NDU0NTQ1NDUgIDE1Ljk2MjUgMTAuMDA5OTQzMTgxODE4MiAgMTUuODg3NSA5LjkzMzIzODYzNjM2MzYzICBDIDE1LjgxMjUgOS44NTY1MzQwOTA5MDkwOSAgMTUuNzE2NjY2NjY2NjY2NyA5LjgxODE4MTgxODE4MTgyICAxNS42IDkuODE4MTgxODE4MTgxODIgIEwgMTIuOCA5LjgxODE4MTgxODE4MTgyICBMIDEyLjggNS4zMTgxODE4MTgxODE4MiAgQyAxMi44IDUuMjA3Mzg2MzYzNjM2MzYgIDEyLjc2MDQxNjY2NjY2NjcgNS4xMTE1MDU2ODE4MTgxOCAgMTIuNjgxMjUgNS4wMzA1Mzk3NzI3MjcyNyAgQyAxMi42MDIwODMzMzMzMzMzIDQuOTQ5NTczODYzNjM2MzYgIDEyLjUwODMzMzMzMzMzMzMgNC45MDkwOTA5MDkwOTA5MSAgMTIuNCA0LjkwOTA5MDkwOTA5MDkxICBMIDEwIDQuOTA5MDkwOTA5MDkwOTEgIEMgOS44OTE2NjY2NjY2NjY2NyA0LjkwOTA5MDkwOTA5MDkxICA5Ljc5NzkxNjY2NjY2NjY3IDQuOTQ5NTczODYzNjM2MzYgIDkuNzE4NzUgNS4wMzA1Mzk3NzI3MjcyNyAgQyA5LjYzOTU4MzMzMzMzMzMzIDUuMTExNTA1NjgxODE4MTggIDkuNiA1LjIwNzM4NjM2MzYzNjM2ICA5LjYgNS4zMTgxODE4MTgxODE4MiAgTCA5LjYgOS44MTgxODE4MTgxODE4MiAgTCA2LjggOS44MTgxODE4MTgxODE4MiAgQyA2LjY5MTY2NjY2NjY2NjY3IDkuODE4MTgxODE4MTgxODIgIDYuNTk3OTE2NjY2NjY2NjcgOS44NTg2NjQ3NzI3MjcyNyAgNi41MTg3NSA5LjkzOTYzMDY4MTgxODE4ICBDIDYuNDM5NTgzMzMzMzMzMzMgMTAuMDIwNTk2NTkwOTA5MSAgNi40IDEwLjExNjQ3NzI3MjcyNzMgIDYuNCAxMC4yMjcyNzI3MjcyNzI3ICBDIDYuNCAxMC4zNDY1OTA5MDkwOTA5ICA2LjQzNzUgMTAuNDQ0NjAyMjcyNzI3MyAgNi41MTI1IDEwLjUyMTMwNjgxODE4MTggIEwgMTAuOTEyNSAxNS4wMjEzMDY4MTgxODE4ICBDIDEwLjk4NzUgMTUuMDk4MDExMzYzNjM2NCAgMTEuMDgzMzMzMzMzMzMzMyAxNS4xMzYzNjM2MzYzNjM2ICAxMS4yIDE1LjEzNjM2MzYzNjM2MzYgIEMgMTEuMzE2NjY2NjY2NjY2NyAxNS4xMzYzNjM2MzYzNjM2ICAxMS40MTI1IDE1LjA5ODAxMTM2MzYzNjQgIDExLjQ4NzUgMTUuMDIxMzA2ODE4MTgxOCAgTCAxNS44NzUgMTAuNTM0MDkwOTA5MDkwOSAgWiBNIDIyLjk1NjI1IDEwLjA0MTkwMzQwOTA5MDkgIEMgMjMuNjUyMDgzMzMzMzMzMyAxMC45MzI1Mjg0MDkwOTA5ICAyNCAxMS45NDg4NjM2MzYzNjM2ICAyNCAxMy4wOTA5MDkwOTA5MDkxICBDIDI0IDE0LjQ0NjAyMjcyNzI3MjcgIDIzLjUzMTI1IDE1LjYwMjk4Mjk1NDU0NTUgIDIyLjU5Mzc1IDE2LjU2MTc4OTc3MjcyNzMgIEMgMjEuNjU2MjUgMTcuNTIwNTk2NTkwOTA5MSAgMjAuNTI1IDE4ICAxOS4yIDE4ICBMIDUuNiAxOCAgQyA0LjA1ODMzMzMzMzMzMzMzIDE4ICAyLjczOTU4MzMzMzMzMzMzIDE3LjQzOTYzMDY4MTgxODIgIDEuNjQzNzUgMTYuMzE4ODkyMDQ1NDU0NSAgQyAwLjU0NzkxNjY2NjY2NjY2NyAxNS4xOTgxNTM0MDkwOTA5ICAwIDEzLjg0OTQzMTgxODE4MTggIDAgMTIuMjcyNzI3MjcyNzI3MyAgQyAwIDExLjE2NDc3MjcyNzI3MjcgIDAuMjkxNjY2NjY2NjY2NjY3IDEwLjE0MjA0NTQ1NDU0NTUgIDAuODc1IDkuMjA0NTQ1NDU0NTQ1NDYgIEMgMS40NTgzMzMzMzMzMzMzMyA4LjI2NzA0NTQ1NDU0NTQ1ICAyLjI0MTY2NjY2NjY2NjY3IDcuNTYzOTIwNDU0NTQ1NDUgIDMuMjI1IDcuMDk1MTcwNDU0NTQ1NDUgIEMgMy4yMDgzMzMzMzMzMzMzMyA2LjgzOTQ4ODYzNjM2MzY0ICAzLjIgNi42NTYyNSAgMy4yIDYuNTQ1NDU0NTQ1NDU0NTUgIEMgMy4yIDQuNzM4NjM2MzYzNjM2MzYgIDMuODI1IDMuMTk2MDIyNzI3MjcyNzMgIDUuMDc1IDEuOTE3NjEzNjM2MzYzNjQgIEMgNi4zMjUgMC42MzkyMDQ1NDU0NTQ1NDYgIDcuODMzMzMzMzMzMzMzMzMgMCAgOS42IDAgIEMgMTAuOSAwICAxMi4wODk1ODMzMzMzMzMzIDAuMzcwNzM4NjM2MzYzNjM3ICAxMy4xNjg3NSAxLjExMjIxNTkwOTA5MDkxICBDIDE0LjI0NzkxNjY2NjY2NjcgMS44NTM2OTMxODE4MTgxOCAgMTUuMDMzMzMzMzMzMzMzMyAyLjgzODA2ODE4MTgxODE4ICAxNS41MjUgNC4wNjUzNDA5MDkwOTA5MSAgQyAxNi4xMTY2NjY2NjY2NjY3IDMuNTM2OTMxODE4MTgxODIgIDE2LjgwODMzMzMzMzMzMzMgMy4yNzI3MjcyNzI3MjcyNyAgMTcuNiAzLjI3MjcyNzI3MjcyNzI3ICBDIDE4LjQ4MzMzMzMzMzMzMzMgMy4yNzI3MjcyNzI3MjcyNyAgMTkuMjM3NSAzLjU5MjMyOTU0NTQ1NDU1ICAxOS44NjI1IDQuMjMxNTM0MDkwOTA5MDkgIEMgMjAuNDg3NSA0Ljg3MDczODYzNjM2MzY0ICAyMC44IDUuNjQyMDQ1NDU0NTQ1NDUgIDIwLjggNi41NDU0NTQ1NDU0NTQ1NSAgQyAyMC44IDcuMTkzMTgxODE4MTgxODIgIDIwLjYyOTE2NjY2NjY2NjcgNy43ODEyNSAgMjAuMjg3NSA4LjMwOTY1OTA5MDkwOTA5ICBDIDIxLjM3MDgzMzMzMzMzMzMgOC41NzM4NjM2MzYzNjM2NCAgMjIuMjYwNDE2NjY2NjY2NyA5LjE1MTI3ODQwOTA5MDkxICAyMi45NTYyNSAxMC4wNDE5MDM0MDkwOTA5ICBaICIgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjMzk1Zjg2IiBzdHJva2U9Im5vbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMCAxICkiLz4KICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "Qgke":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Media query\",\"slug\":\"media-query\",\"sections\":[{\"type\":\"h1\",\"content\":\"`mdeia-query`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/media-query\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import { viewports, media } from '@motif/media-query';\\n\"},{\"type\":\"p\",\"content\":\"To apply styles in accordance with viewport size, use helper x, where x could be\\none of: xs, s, m, l, xl, xxl, x3l, x4l. For example:\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"const MyStyledComponent = styled.div`\\n  ${media.s`color: red;`}\\n`;\\n\"},{\"type\":\"p\",\"content\":\"The above code will be applied for s (small) viewports and for all bigger devices, something similar to:\"},{\"type\":\"code\",\"lang\":\"css\",\"content\":\".as4563k6 {\\n  @media (min-width: 480px) {\\n\\tcolor: red;\\n  }\\n}\\n\"},{\"type\":\"p\",\"content\":\"To be able to set styles to specific viewports you may use xOnly helper, where x could be\\none of: xs, s, m, l, xl, xxl, x3l, x4l.\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"const MyStyledComponent = styled.div`\\n  ${media.sOnly`color: red;`}\\n`;\\n\"},{\"type\":\"p\",\"content\":\"The above code will generate styles like this:\"},{\"type\":\"code\",\"lang\":\"css\",\"content\":\".as456626 {\\n  @media (min-width: 480px) and (max-width: 599px) {\\n\\tcolor: red;\\n  }\\n}\\n\"}]}");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "SrgZ":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+aWNvX19kYXRhc2hlZXRfb3V0bGluZTwvdGl0bGU+PHBhdGggZmlsbD0iIzM5NWY4NiIgZD0iTTE1LjIsOEg4LjhhMSwxLDAsMCwxLDAtMmg2LjRhMSwxLDAsMCwxLDAsMlptMSwzYTEsMSwwLDAsMC0xLTFIOC44YTEsMSwwLDAsMCwwLDJoNi40QTEsMSwwLDAsMCwxNi4yLDExWm0wLDRhMSwxLDAsMCwwLTEtMUg4LjhhMSwxLDAsMCwwLDAsMmg2LjRBMSwxLDAsMCwwLDE2LjIsMTVaTTE5LDMuNWEuNS41LDAsMCwwLS41LS41SDUuNWEuNS41LDAsMCwwLS41LjV2MTdhLjUuNSwwLDAsMCwuNS41aDguNDY0YS41LjUsMCwwLDAsLjM1NC0uMTQ2bDQuNTM2LTQuNTM2QS41LjUsMCwwLDAsMTksMTUuOTY0Wk0xOSwxYTIsMiwwLDAsMSwyLDJWMTYuNjM0YS44ODQuODg0LDAsMCwxLS4yNTkuNjI1bC01LjU5NSw1LjU5NWEuNS41LDAsMCwxLS4zNTMuMTQ2SDVhMiwyLDAsMCwxLTItMlYzQTIsMiwwLDAsMSw1LDFaIi8+PC9zdmc+Cg=="

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UeYM":
/***/ (function(module, exports) {

module.exports = require("@motif/grid");

/***/ }),

/***/ "V0Kh":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"List\",\"slug\":\"list\",\"sections\":[{\"type\":\"h1\",\"content\":\"`motif-list`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/list\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {List} from './list';\\n\\nconst listItems = [\\n  'one',\\n  'two',\\n  'three'\\n];\\n\\n<List items={listItems} bulletColor={'palevioletred'}/>\\n\"}]}");

/***/ }),

/***/ "VpLP":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+aWNvX19jcm9zc19jaXJjbGVfb3RsaW5lPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIsMjNBMTEsMTEsMCwxLDEsMjMsMTIsMTEuMDEzLDExLjAxMywwLDAsMSwxMiwyM1pNMTIsM2E5LDksMCwxLDAsOSw5QTkuMDEsOS4wMSwwLDAsMCwxMiwzWm0xLjQxNCw5LDMuMjkzLTMuMjkzYTEsMSwwLDEsMC0xLjQxNC0xLjQxNEwxMiwxMC41ODYsOC43MDcsNy4yOTNBMSwxLDAsMSwwLDcuMjkzLDguNzA3TDEwLjU4NiwxMiw3LjI5MywxNS4yOTNhMSwxLDAsMSwwLDEuNDE0LDEuNDE0TDEyLDEzLjQxNGwzLjI5MywzLjI5M2ExLDEsMCwwLDAsMS40MTQtMS40MTRaIi8+PC9zdmc+Cg=="

/***/ }),

/***/ "VuTL":
/***/ (function(module, exports) {

module.exports = {
	"Card": "_3A5dtmxFcnIwBDkm9OKiuM"
};

/***/ }),

/***/ "XNBL":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+aWNvX19oYW1idXJnZXI8L3RpdGxlPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMiwxM0gyYTEsMSwwLDAsMSwwLTJIMjJhMSwxLDAsMCwxLDAsMlptMSw1YTEsMSwwLDAsMC0xLTFIMmExLDEsMCwwLDAsMCwySDIyQTEsMSwwLDAsMCwyMywxOFpNMjMsNmExLDEsMCwwLDAtMS0xSDJBMSwxLDAsMCwwLDIsN0gyMkExLDEsMCwwLDAsMjMsNloiLz48L3N2Zz4K"

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YQDI":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/components/layout/container");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZwNX":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Headline\",\"slug\":\"headline\",\"sections\":[{\"type\":\"h1\",\"content\":\"`headline`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/headline\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import { Headline } from '@motif/headline';\\n\\n<Headline>Default Headline is H1</Headline>,\\n<Headline level=\\\"s\\\">Small headline is H4</Headline>,\\n<Headline level=\\\"m\\\">Medium headline is H3</Headline>,\\n<Headline level=\\\"l\\\">Large headline is H2</Headline>,\\n<Headline level=\\\"xl\\\">Extra large headline is H1</Headline>,\\n\"}]}");

/***/ }),

/***/ "agMc":
/***/ (function(module, exports) {

module.exports = require("@storybook/api");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

var _interopRequireWildcard = __webpack_require__("5Uuq");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "dc42":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMSAwICkiPgogICAgPHBhdGggZD0iTSA3LjA1ODgyMzUyOTQxMTc2IDE0LjM5NzMyMTQyODU3MTQgIEwgNy4wNTg4MjM1Mjk0MTE3NiAxOC4yMTQyODU3MTQyODU3ICBMIDExLjI5NDExNzY0NzA1ODggMTYuMDcxNDI4NTcxNDI4NiAgTCAxMS4yOTQxMTc2NDcwNTg4IDEyLjU2Njk2NDI4NTcxNDMgIEwgNy4wNTg4MjM1Mjk0MTE3NiAxNC4zOTczMjE0Mjg1NzE0ICBaIE0gMS44OTcwNTg4MjM1Mjk0MSAxMS4yMTY1MTc4NTcxNDI5ICBMIDYuMzUyOTQxMTc2NDcwNTkgMTMuMTQ3MzIxNDI4NTcxNCAgTCAxMC44MDg4MjM1Mjk0MTE4IDExLjIxNjUxNzg1NzE0MjkgIEwgNi4zNTI5NDExNzY0NzA1OSA5LjI4NTcxNDI4NTcxNDI5ICBMIDEuODk3MDU4ODIzNTI5NDEgMTEuMjE2NTE3ODU3MTQyOSAgWiBNIDE4LjM1Mjk0MTE3NjQ3MDYgMTQuMzk3MzIxNDI4NTcxNCAgTCAxOC4zNTI5NDExNzY0NzA2IDE4LjIxNDI4NTcxNDI4NTcgIEwgMjIuNTg4MjM1Mjk0MTE3NiAxNi4wNzE0Mjg1NzE0Mjg2ICBMIDIyLjU4ODIzNTI5NDExNzYgMTIuNTY2OTY0Mjg1NzE0MyAgTCAxOC4zNTI5NDExNzY0NzA2IDE0LjM5NzMyMTQyODU3MTQgIFogTSAxMy4xOTExNzY0NzA1ODgyIDExLjIxNjUxNzg1NzE0MjkgIEwgMTcuNjQ3MDU4ODIzNTI5NCAxMy4xNDczMjE0Mjg1NzE0ICBMIDIyLjEwMjk0MTE3NjQ3MDYgMTEuMjE2NTE3ODU3MTQyOSAgTCAxNy42NDcwNTg4MjM1Mjk0IDkuMjg1NzE0Mjg1NzE0MjkgIEwgMTMuMTkxMTc2NDcwNTg4MiAxMS4yMTY1MTc4NTcxNDI5ICBaIE0gMTIuNzA1ODgyMzUyOTQxMiA2Ljg5NzMyMTQyODU3MTQzICBMIDEyLjcwNTg4MjM1Mjk0MTIgOS44NzcyMzIxNDI4NTcxNCAgTCAxNi45NDExNzY0NzA1ODgyIDguMDM1NzE0Mjg1NzE0MjkgIEwgMTYuOTQxMTc2NDcwNTg4MiA1LjA2Njk2NDI4NTcxNDI5ICBMIDEyLjcwNTg4MjM1Mjk0MTIgNi44OTczMjE0Mjg1NzE0MyAgWiBNIDcuMTM2MDI5NDExNzY0NzEgMy41Mzc5NDY0Mjg1NzE0MyAgTCAxMiA1LjY0NzMyMTQyODU3MTQzICBMIDE2Ljg2Mzk3MDU4ODIzNTMgMy41Mzc5NDY0Mjg1NzE0MyAgTCAxMiAxLjQyODU3MTQyODU3MTQzICBMIDcuMTM2MDI5NDExNzY0NzEgMy41Mzc5NDY0Mjg1NzE0MyAgWiBNIDIzLjc2ODM4MjM1Mjk0MTIgMTAuNjQ3MzIxNDI4NTcxNCAgQyAyMy45MjI3OTQxMTc2NDcxIDEwLjg4NTQxNjY2NjY2NjcgIDI0IDExLjE0NTgzMzMzMzMzMzMgIDI0IDExLjQyODU3MTQyODU3MTQgIEwgMjQgMTYuMDcxNDI4NTcxNDI4NiAgQyAyNCAxNi4zMzkyODU3MTQyODU3ICAyMy45MzAxNDcwNTg4MjM1IDE2LjU4ODU0MTY2NjY2NjcgIDIzLjc5MDQ0MTE3NjQ3MDYgMTYuODE5MTk2NDI4NTcxNCAgQyAyMy42NTA3MzUyOTQxMTc2IDE3LjA0OTg1MTE5MDQ3NjIgIDIzLjQ1OTU1ODgyMzUyOTQgMTcuMjI0NzAyMzgwOTUyNCAgMjMuMjE2OTExNzY0NzA1OSAxNy4zNDM3NSAgTCAxOC4yNzU3MzUyOTQxMTc2IDE5Ljg0Mzc1ICBDIDE4LjA5MTkxMTc2NDcwNTkgMTkuOTQ3OTE2NjY2NjY2NyAgMTcuODgyMzUyOTQxMTc2NSAyMCAgMTcuNjQ3MDU4ODIzNTI5NCAyMCAgQyAxNy40MTE3NjQ3MDU4ODI0IDIwICAxNy4yMDIyMDU4ODIzNTI5IDE5Ljk0NzkxNjY2NjY2NjcgIDE3LjAxODM4MjM1Mjk0MTIgMTkuODQzNzUgIEwgMTIuMDc3MjA1ODgyMzUyOSAxNy4zNDM3NSAgQyAxMi4wNDc3OTQxMTc2NDcxIDE3LjMyODg2OTA0NzYxOSAgMTIuMDIyMDU4ODIzNTI5NCAxNy4zMTM5ODgwOTUyMzgxICAxMiAxNy4yOTkxMDcxNDI4NTcxICBDIDExLjk4NTI5NDExNzY0NzEgMTcuMzEzOTg4MDk1MjM4MSAgMTEuOTU5NTU4ODIzNTI5NCAxNy4zMjg4NjkwNDc2MTkgIDExLjkyMjc5NDExNzY0NzEgMTcuMzQzNzUgIEwgNi45ODE2MTc2NDcwNTg4MiAxOS44NDM3NSAgQyA2Ljc5Nzc5NDExNzY0NzA2IDE5Ljk0NzkxNjY2NjY2NjcgIDYuNTg4MjM1Mjk0MTE3NjUgMjAgIDYuMzUyOTQxMTc2NDcwNTkgMjAgIEMgNi4xMTc2NDcwNTg4MjM1MyAyMCAgNS45MDgwODgyMzUyOTQxMiAxOS45NDc5MTY2NjY2NjY3ICA1LjcyNDI2NDcwNTg4MjM1IDE5Ljg0Mzc1ICBMIDAuNzgzMDg4MjM1Mjk0MTE4IDE3LjM0Mzc1ICBDIDAuNTQwNDQxMTc2NDcwNTg4IDE3LjIyNDcwMjM4MDk1MjQgIDAuMzQ5MjY0NzA1ODgyMzUzIDE3LjA0OTg1MTE5MDQ3NjIgIDAuMjA5NTU4ODIzNTI5NDEyIDE2LjgxOTE5NjQyODU3MTQgIEMgMC4wNjk4NTI5NDExNzY0NzA2IDE2LjU4ODU0MTY2NjY2NjcgIDAgMTYuMzM5Mjg1NzE0Mjg1NyAgMCAxNi4wNzE0Mjg1NzE0Mjg2ICBMIDAgMTEuNDI4NTcxNDI4NTcxNCAgQyAwIDExLjE0NTgzMzMzMzMzMzMgIDAuMDc5MDQ0MTE3NjQ3MDU4OCAxMC44ODU0MTY2NjY2NjY3ICAwLjIzNzEzMjM1Mjk0MTE3NiAxMC42NDczMjE0Mjg1NzE0ICBDIDAuMzk1MjIwNTg4MjM1Mjk0IDEwLjQwOTIyNjE5MDQ3NjIgIDAuNjAyOTQxMTc2NDcwNTg4IDEwLjIzMDY1NDc2MTkwNDggIDAuODYwMjk0MTE3NjQ3MDU5IDEwLjExMTYwNzE0Mjg1NzEgIEwgNS42NDcwNTg4MjM1Mjk0MSA4LjAzNTcxNDI4NTcxNDI5ICBMIDUuNjQ3MDU4ODIzNTI5NDEgMy41NzE0Mjg1NzE0Mjg1NyAgQyA1LjY0NzA1ODgyMzUyOTQxIDMuMjg4NjkwNDc2MTkwNDcgIDUuNzI2MTAyOTQxMTc2NDcgMy4wMjgyNzM4MDk1MjM4MSAgNS44ODQxOTExNzY0NzA1OSAyLjc5MDE3ODU3MTQyODU3ICBDIDYuMDQyMjc5NDExNzY0NzEgMi41NTIwODMzMzMzMzMzMyAgNi4yNSAyLjM3MzUxMTkwNDc2MTkgIDYuNTA3MzUyOTQxMTc2NDcgMi4yNTQ0NjQyODU3MTQyOSAgTCAxMS40NDg1Mjk0MTE3NjQ3IDAuMTExNjA3MTQyODU3MTQyICBDIDExLjYxNzY0NzA1ODgyMzUgMC4wMzcyMDIzODA5NTIzODM2ICAxMS44MDE0NzA1ODgyMzUzIDAgIDEyIDAgIEMgMTIuMTk4NTI5NDExNzY0NyAwICAxMi4zODIzNTI5NDExNzY1IDAuMDM3MjAyMzgwOTUyMzgzNiAgMTIuNTUxNDcwNTg4MjM1MyAwLjExMTYwNzE0Mjg1NzE0MiAgTCAxNy40OTI2NDcwNTg4MjM1IDIuMjU0NDY0Mjg1NzE0MjkgIEMgMTcuNzUgMi4zNzM1MTE5MDQ3NjE5ICAxNy45NTc3MjA1ODgyMzUzIDIuNTUyMDgzMzMzMzMzMzMgIDE4LjExNTgwODgyMzUyOTQgMi43OTAxNzg1NzE0Mjg1NyAgQyAxOC4yNzM4OTcwNTg4MjM1IDMuMDI4MjczODA5NTIzODEgIDE4LjM1Mjk0MTE3NjQ3MDYgMy4yODg2OTA0NzYxOTA0NyAgMTguMzUyOTQxMTc2NDcwNiAzLjU3MTQyODU3MTQyODU3ICBMIDE4LjM1Mjk0MTE3NjQ3MDYgOC4wMzU3MTQyODU3MTQyOSAgTCAyMy4xMzk3MDU4ODIzNTI5IDEwLjExMTYwNzE0Mjg1NzEgIEMgMjMuNDA0NDExNzY0NzA1OSAxMC4yMzA2NTQ3NjE5MDQ4ICAyMy42MTM5NzA1ODgyMzUzIDEwLjQwOTIyNjE5MDQ3NjIgIDIzLjc2ODM4MjM1Mjk0MTIgMTAuNjQ3MzIxNDI4NTcxNCAgWiAiIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0iIzM5NWY4NiIgc3Ryb2tlPSJub25lIiB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIC0xIDAgKSIvPgogIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "dout":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/containers/panel");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fe9M":
/***/ (function(module, exports) {

module.exports = {
	"Sidebar": "_1voRjy6tG-Ix5Zh_RJJqXy",
	"VerticalNav__TopLevel": "_3urmCc6sPET2YkXc8ds5ck",
	"VerticalNav__TopLevelIcon": "_1rYV9c3Ixt2VibYGEOvsyP",
	"VerticalNav__TopLevelTitle": "KLJJZWBlZgMtblfma8BH2",
	"VerticalNav__TopLevelAngle": "_1xNE1EUNXV6GOn3bBcu1hX"
};

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gA+r":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Colors\",\"slug\":\"colors\",\"sections\":[{\"type\":\"h1\",\"content\":\"Motif UI Colors\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/colors\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {\\n  colorOrange,\\n  colorOrangeHover,\\n  colorBlue,\\n  colorBlueHover,\\n  colorGreen,\\n  colorGreenHover,\\n  colorRed,\\n  colorRedLight,\\n  colorYellow,\\n  colorMarine,\\n  colorMarineDark,\\n  colorNavy,\\n  colorMarineLight,\\n  colorMarineLighter,\\n  colorGrey900,\\n  colorGrey700,\\n  colorGrey600,\\n  colorGrey500,\\n  colorGrey300,\\n  colorGrey100,\\n  colorGrey0,\\n  colorWhite,\\n} from '@motif/colors';\\n\"}]}");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gco3":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iBr/":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/components/panel/panel");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jrMa":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/settings");

/***/ }),

/***/ "jyx8":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Grid\",\"slug\":\"grid\",\"sections\":[{\"type\":\"h1\",\"content\":\"Motif UI Grid\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/grid\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"javascript\",\"content\":\"{Grid, GridItem} from '@motif/grid';\\n\"}]}");

/***/ }),

/***/ "kxTg":
/***/ (function(module, exports) {

module.exports = {
	"ElementBody": "_2OYZ3vOywvTrwIslIr51wX"
};

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "liqU":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Overlay\",\"slug\":\"overlay\",\"sections\":[{\"type\":\"h1\",\"content\":\"`motif-overlay`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/overlay\\n\"},{\"type\":\"p\",\"content\":\"You need to add\"},{\"type\":\"code\",\"lang\":\"html\",\"content\":\"<div id=\\\"overlay-root\\\"/>\\n\"},{\"type\":\"p\",\"content\":\"somewhere in your page.\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import { Overlay } from '@motif/overlay';\\n\\n<Overlay overlayIsOpen={this.state.openOverlay} \\ndelayTime={300} \\nonClose={this.toggleOverlay} \\nrootId={'overlay-root'}\\ntitle={'Here is a beautiful overlay!'}>\\n<div>Overlay content goes here</div>\\n</Overlay>\\n\"}]}");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oU0S":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Select\",\"slug\":\"select\",\"sections\":[{\"type\":\"h1\",\"content\":\"`motif-select\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/select\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {NativeSelect} from '@motif/select';\\n\\n<NativeSelect>\\n    <option>Foo</option>\\n\\t<option>Foo</option>\\n</NativeSelect>\\n\"}]}");

/***/ }),

/***/ "pWA3":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/containers/preview");

/***/ }),

/***/ "pcb2":
/***/ (function(module, exports) {

module.exports = require("global");

/***/ }),

/***/ "qHer":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/app");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rF/f":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Checkbox\",\"slug\":\"checkbox\",\"sections\":[{\"type\":\"h1\",\"content\":\"`@motif/checkbox`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/checkbox\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {Checkbox} from '@motif/checkbox';\\n\\n\"}]}");

/***/ }),

/***/ "sJnI":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/containers/nav");

/***/ }),

/***/ "sXBA":
/***/ (function(module, exports) {

module.exports = require("@storybook/theming/dist");

/***/ }),

/***/ "taes":
/***/ (function(module, exports) {

module.exports = require("react-helmet-async");

/***/ }),

/***/ "tpUI":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTlweCIgaGVpZ2h0PSIyMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgLTMwIC04OSApIj4KICAgIDxwYXRoIGQ9Ik0gMTEuOTk4NjMwMTM2OTg2MyA2Ljg2MTk3OTE2NjY2NjY3ICBMIDE4LjU0NDUyMDU0Nzk0NTIgMTcuMTg3NSAgQyAxOS4wMzAzNjUyOTY4MDM3IDE3Ljk2MDA2OTQ0NDQ0NDQgIDE5LjEyMzYzMDEzNjk4NjMgMTguNjIxOTYxODA1NTU1NiAgMTguODI0MzE1MDY4NDkzMSAxOS4xNzMxNzcwODMzMzMzICBDIDE4LjUyNSAxOS43MjQzOTIzNjExMTExICAxNy45MTU1MjUxMTQxNTUzIDIwICAxNi45OTU4OTA0MTA5NTg5IDIwICBMIDIuMDA0MTA5NTg5MDQxMSAyMCAgQyAxLjA4NDQ3NDg4NTg0NDc1IDIwICAwLjQ3NSAxOS43MjQzOTIzNjExMTExICAwLjE3NTY4NDkzMTUwNjg0OSAxOS4xNzMxNzcwODMzMzMzICBDIC0wLjEyMzYzMDEzNjk4NjMwMSAxOC42MjE5NjE4MDU1NTU2ICAtMC4wMzAzNjUyOTY4MDM2NTI5IDE3Ljk2MDA2OTQ0NDQ0NDQgIDAuNDU1NDc5NDUyMDU0Nzk1IDE3LjE4NzUgIEwgNy4wMDEzNjk4NjMwMTM3IDYuODYxOTc5MTY2NjY2NjcgIEwgNy4wMDEzNjk4NjMwMTM3IDEuNjY2NjY2NjY2NjY2NjcgIEwgNi4xNjg0OTMxNTA2ODQ5MyAxLjY2NjY2NjY2NjY2NjY3ICBDIDUuOTQyOTIyMzc0NDI5MjIgMS42NjY2NjY2NjY2NjY2NyAgNS43NDc3MTY4OTQ5NzcxNyAxLjU4NDIwMTM4ODg4ODg5ICA1LjU4Mjg3NjcxMjMyODc3IDEuNDE5MjcwODMzMzMzMzMgIEMgNS40MTgwMzY1Mjk2ODAzNyAxLjI1NDM0MDI3Nzc3Nzc4ICA1LjMzNTYxNjQzODM1NjE2IDEuMDU5MDI3Nzc3Nzc3NzggIDUuMzM1NjE2NDM4MzU2MTYgMC44MzMzMzMzMzMzMzMzMzMgIEMgNS4zMzU2MTY0MzgzNTYxNiAwLjYwNzYzODg4ODg4ODg4NiAgNS40MTgwMzY1Mjk2ODAzNyAwLjQxMjMyNjM4ODg4ODg4NiAgNS41ODI4NzY3MTIzMjg3NyAwLjI0NzM5NTgzMzMzMzMzMyAgQyA1Ljc0NzcxNjg5NDk3NzE3IDAuMDgyNDY1Mjc3Nzc3Nzc2OCAgNS45NDI5MjIzNzQ0MjkyMiAwICA2LjE2ODQ5MzE1MDY4NDkzIDAgIEwgMTIuODMxNTA2ODQ5MzE1MSAwICBDIDEzLjA1NzA3NzYyNTU3MDggMCAgMTMuMjUyMjgzMTA1MDIyOCAwLjA4MjQ2NTI3Nzc3Nzc3NjggIDEzLjQxNzEyMzI4NzY3MTIgMC4yNDczOTU4MzMzMzMzMzMgIEMgMTMuNTgxOTYzNDcwMzE5NiAwLjQxMjMyNjM4ODg4ODg4NiAgMTMuNjY0MzgzNTYxNjQzOCAwLjYwNzYzODg4ODg4ODg4NiAgMTMuNjY0MzgzNTYxNjQzOCAwLjgzMzMzMzMzMzMzMzMzMyAgQyAxMy42NjQzODM1NjE2NDM4IDEuMDU5MDI3Nzc3Nzc3NzggIDEzLjU4MTk2MzQ3MDMxOTYgMS4yNTQzNDAyNzc3Nzc3OCAgMTMuNDE3MTIzMjg3NjcxMiAxLjQxOTI3MDgzMzMzMzMzICBDIDEzLjI1MjI4MzEwNTAyMjggMS41ODQyMDEzODg4ODg4OSAgMTMuMDU3MDc3NjI1NTcwOCAxLjY2NjY2NjY2NjY2NjY3ICAxMi44MzE1MDY4NDkzMTUxIDEuNjY2NjY2NjY2NjY2NjcgIEwgMTEuOTk4NjMwMTM2OTg2MyAxLjY2NjY2NjY2NjY2NjY3ICBMIDExLjk5ODYzMDEzNjk4NjMgNi44NjE5NzkxNjY2NjY2NyAgWiBNIDguNjY3MTIzMjg3NjcxMjMgNy4zNDM3NSAgTCA4LjQwNjg0OTMxNTA2ODQ5IDcuNzQ3Mzk1ODMzMzMzMzMgIEwgNC44NjcxMjMyODc2NzEyMyAxMy4zMzMzMzMzMzMzMzMzICBMIDE0LjEzMjg3NjcxMjMyODggMTMuMzMzMzMzMzMzMzMzMyAgTCAxMC41OTMxNTA2ODQ5MzE1IDcuNzQ3Mzk1ODMzMzMzMzMgIEwgMTAuMzMyODc2NzEyMzI4OCA3LjM0Mzc1ICBMIDEwLjMzMjg3NjcxMjMyODggNi44NjE5NzkxNjY2NjY2NyAgTCAxMC4zMzI4NzY3MTIzMjg4IDEuNjY2NjY2NjY2NjY2NjcgIEwgOC42NjcxMjMyODc2NzEyMyAxLjY2NjY2NjY2NjY2NjY3ICBMIDguNjY3MTIzMjg3NjcxMjMgNi44NjE5NzkxNjY2NjY2NyAgTCA4LjY2NzEyMzI4NzY3MTIzIDcuMzQzNzUgIFogIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiMzOTVmODYiIHN0cm9rZT0ibm9uZSIgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAzMCA4OSApIi8+CiAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "veI3":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Cookie banner\",\"slug\":\"cookie-banner\",\"sections\":[{\"type\":\"h1\",\"content\":\"`cookie-banner`\"},{\"type\":\"h2\",\"content\":\"Installation\"},{\"type\":\"code\",\"lang\":\"bash\",\"content\":\"yarn add @motif/cookie-banner\\n\"},{\"type\":\"h2\",\"content\":\"Usage\"},{\"type\":\"code\",\"lang\":\"js\",\"content\":\"import {CookieBanner} from './cookie-banner';\\n\\n<CookieBanner forceRender={true}/>\\n\"}]}");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wRN9":
/***/ (function(module, exports) {

module.exports = require("react-highlight");

/***/ }),

/***/ "wnRx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");

// EXTERNAL MODULE: external "@motif/grid"
var grid_ = __webpack_require__("UeYM");

// EXTERNAL MODULE: ./components/MainContent/MainContent.module.scss
var MainContent_module = __webpack_require__("DKIb");
var MainContent_module_default = /*#__PURE__*/__webpack_require__.n(MainContent_module);

// CONCATENATED MODULE: ./components/MainContent/MainContent.js
var __jsx = external_react_default.a.createElement;




class MainContent_MainContent extends external_react_default.a.Component {
  render() {
    const marginLeft = this.props.isSidebarOpen ? '20rem' : '5.5rem';
    return __jsx("main", {
      style: {
        marginLeft
      },
      className: MainContent_module_default.a.MainContent
    }, this.props.children);
  }

}
// CONCATENATED MODULE: ./components/MainContent/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return MainContent_MainContent; });


/***/ }),

/***/ "xmpm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@motif/grid"
var grid_ = __webpack_require__("UeYM");

// EXTERNAL MODULE: ./components/PageLayout/PageLayout.module.scss
var PageLayout_module = __webpack_require__("7GUm");
var PageLayout_module_default = /*#__PURE__*/__webpack_require__.n(PageLayout_module);

// EXTERNAL MODULE: ./components/MainContent/index.js + 1 modules
var MainContent = __webpack_require__("wnRx");

// EXTERNAL MODULE: ./components/Header/index.js + 1 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: ./components/Sidebar/index.js + 1 modules
var Sidebar = __webpack_require__("O/l+");

// CONCATENATED MODULE: ./components/PageLayout/PageLayout.js

var __jsx = external_react_default.a.createElement;






function determineViewport() {
  const width = document.documentElement.clientWidth;

  if (width < 880) {
    return 'm';
  }

  return 'l';
}

class PageLayout_PageLayout extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  componentDidMount() {
    let isSidebarOpen;
    const viewport = determineViewport();

    switch (viewport) {
      case 's':
      case 'm':
        isSidebarOpen = false;
        break;

      default:
        isSidebarOpen = true;
    }

    this.setState({
      isSidebarOpen
    });
    window.document.addEventListener('click:toggleSidebar', this.toggleSidebar);
  }

  componentWillUnmount() {
    window.document.removeEventListener('click:toggleSidebar', this.toggleSidebar);
  }

  toggleSidebar() {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen
    });
  }

  render() {
    return __jsx("div", {
      className: PageLayout_module_default.a.PageLayout
    }, __jsx(grid_["GridContainer"], null, __jsx(grid_["GridItem"], {
      xl: '1/11/1/1',
      l: '1/11/1/1',
      m: '1/11/1/1',
      s: '1/11/1/1'
    }, __jsx(Header["a" /* default */], {
      isSidebarOpen: this.state.isSidebarOpen
    })), __jsx(grid_["GridItem"], {
      xl: '1/12/2/1',
      l: '1/12/2/1',
      m: '1/12/2/1',
      s: '1/12/2/1'
    }, __jsx(Sidebar["a" /* default */], {
      isOpen: this.state.isSidebarOpen
    }), __jsx(MainContent["a" /* default */], {
      isSidebarOpen: this.state.isSidebarOpen
    }, this.props.children))));
  }

}
// CONCATENATED MODULE: ./components/PageLayout/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "a", function() { return PageLayout_PageLayout; });


/***/ }),

/***/ "xzUa":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48dGl0bGU+aWNvX19zZWFyY2g8L3RpdGxlPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yMi42NTgsMjEuMjgsMTcuOSwxNi41MjJhOS41NTgsOS41NTgsMCwxLDAtMS40MjQsMS40bDQuNzY4LDQuNzY4YTEsMSwwLDEsMCwxLjQxNC0xLjQxNFpNMy4wNDksMTAuNTEzYTcuNSw3LjUsMCwxLDEsNy41LDcuNUE3LjUwOSw3LjUwOSwwLDAsMSwzLjA0OSwxMC41MTNaIi8+PC9zdmc+Cg=="

/***/ }),

/***/ "yIqI":
/***/ (function(module, exports) {

module.exports = require("@storybook/ui/dist/containers/notifications");

/***/ }),

/***/ "yzvi":
/***/ (function(module, exports) {

module.exports = {
	"Header": "_2RGMJMU9PCkOCkpIZhRWk9",
	"Logo": "_6fWH0hPbncMf43tHqYzR7",
	"SideNavToggle": "_1UYstJXYg028lvDgOfnSG-",
	"SearchToggle": "_3Tdv0n27iYE_BH-jzSL-jc",
	"SearchInput": "_14ZaWIxgdKLqDvYiQ6rUjy",
	"StickyMenu": "_39UZcbQK2-kAbw41GExrON"
};

/***/ })

/******/ });