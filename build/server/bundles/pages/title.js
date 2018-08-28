module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withWidth");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
  HOST_PREFIX: 'https://ningto.com',
  API_PREFIX: 'https://ningto.com/api',
  // HOST_PREFIX: 'http://localhost:3000',
  // API_PREFIX: 'http://localhost:3000/api',
  BAIDU_SHARE: "window._bd_share_config={\"common\":{\"bdSnsKey\":{},\"bdText\":\"\",\"bdMini\":\"2\",\"bdMiniList\":false,\"bdPic\":\"\",\"bdStyle\":\"0\",\"bdSize\":\"16\"},\"slide\":{\"type\":\"slide\",\"bdImg\":\"0\",\"bdPos\":\"right\",\"bdTop\":\"100\"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];",
  SOHUCS: "(function(){ \n        var appid = 'cysWB0Du9'; \n        var conf = '691d31a2c6c0e4c3c74db69baf69415e'; \n        var width = window.innerWidth || document.documentElement.clientWidth; \n        if (width < 960) { \n        window.document.write('<script id=\"changyan_mobile_js\" charset=\"utf-8\" type=\"text/javascript\" src=\"http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '\"></script>'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName(\"head\")[0]||document.head||document.documentElement;var b=document.createElement(\"script\");b.setAttribute(\"type\",\"text/javascript\");b.setAttribute(\"charset\",\"UTF-8\");b.setAttribute(\"src\",d);if(typeof a===\"function\"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e===\"loaded\"||e===\"complete\"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs(\"http://changyan.sohu.com/upload/changyan.js\",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })();\n    "
};
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(1);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(5);
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__(17);
var Menu__default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__(18);
var Home__default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "recompose/compose"
var compose_ = __webpack_require__(6);
var compose__default = /*#__PURE__*/__webpack_require__.n(compose_);

// EXTERNAL MODULE: external "@material-ui/core/withWidth"
var withWidth_ = __webpack_require__(11);
var withWidth__default = /*#__PURE__*/__webpack_require__.n(withWidth_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "recompose/pure"
var pure_ = __webpack_require__(19);
var pure__default = /*#__PURE__*/__webpack_require__.n(pure_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__(20);
var Search__default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__(21);
var colorManipulator__default = /*#__PURE__*/__webpack_require__.n(colorManipulator_);

// CONCATENATED MODULE: ./components/AppSearch.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var searchTimer;

function initDocsearch() {
  searchTimer = setInterval(function () {
    if (window.docsearch && document.querySelector('#docsearch-input')) {
      clearInterval(searchTimer);
      window.docsearch({
        apiKey: '1d8534f83b9b0cfea8f16498d19fbcab',
        indexName: 'material-ui',
        inputSelector: '#docsearch-input',
        debug: false // Set debug to true if you want to inspect the dropdown

      });
    }
  }, 100);
}

function removeDocsearch() {
  clearInterval(searchTimer);
}

var AppSearch_styles = function styles(theme) {
  return {
    '@global': {
      '.algolia-autocomplete': {
        fontFamily: theme.typography.fontFamily,
        '& .algolia-docsearch-suggestion--category-header-lvl0': {
          color: theme.palette.text.primary
        },
        '& .algolia-docsearch-suggestion--subcategory-column-text': {
          color: theme.palette.text.secondary
        },
        '& .algolia-docsearch-suggestion--highlight': {
          color: theme.palette.type === 'light' ? '#174d8c' : '#acccf1'
        },
        '& .algolia-docsearch-suggestion': {
          background: 'transparent'
        },
        '& .algolia-docsearch-suggestion--title': _objectSpread({}, theme.typography.title),
        '& .algolia-docsearch-suggestion--text': _objectSpread({}, theme.typography.body1),
        '& .ds-dropdown-menu': {
          boxShadow: theme.shadows[1],
          borderRadius: 2,
          '&::before': {
            display: 'none'
          },
          '& [class^=ds-dataset-]': {
            border: 0,
            borderRadius: 2,
            background: theme.palette.background.paper
          }
        }
      }
    },
    wrapper: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      marginRight: 16,
      borderRadius: 2,
      background: Object(colorManipulator_["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        background: Object(colorManipulator_["fade"])(theme.palette.common.white, 0.25)
      },
      '& $input': {
        transition: theme.transitions.create('width'),
        width: 120,
        '&:focus': {
          width: 170
        }
      }
    },
    search: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      font: 'inherit',
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit, "px ").concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 9, "px"),
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      margin: 0,
      // Reset for Safari
      color: 'inherit',
      width: '100%',
      '&:focus': {
        outline: 0
      }
    }
  };
};

function AppSearch(props) {
  var classes = props.classes,
      width = props.width,
      onRequestSearch = props.onRequestSearch;

  if (!Object(withWidth_["isWidthUp"])('sm', width)) {
    removeDocsearch();
    return null;
  }

  initDocsearch();

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter' || event.key === 'enter') {
      if (onRequestSearch) {
        console.log(event.target.value);
        onRequestSearch(event.target.value);
      }
    }
  };

  return external__react__default.a.createElement("div", {
    className: classes.wrapper
  }, external__react__default.a.createElement("div", {
    className: classes.search
  }, external__react__default.a.createElement(Search__default.a, null)), external__react__default.a.createElement("input", {
    id: "docsearch-input",
    className: classes.input,
    onKeyPress: handleKeyPress
  }));
}

/* harmony default export */ var components_AppSearch = (compose__default()(Object(styles_["withStyles"])(AppSearch_styles, {
  name: 'AppSearch'
}), withWidth__default()(), pure__default.a)(AppSearch));
// EXTERNAL MODULE: external "@material-ui/core/SvgIcon"
var SvgIcon_ = __webpack_require__(22);
var SvgIcon__default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);

// CONCATENATED MODULE: ./components/Github.js



function GitHub(props) {
  return external__react__default.a.createElement(SvgIcon__default.a, props, external__react__default.a.createElement("path", {
    d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z"
  }));
}

GitHub.muiName = 'SvgIcon';
/* harmony default export */ var Github = (GitHub);
// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__(23);
var Snackbar__default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// CONCATENATED MODULE: ./components/NotifyBar.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NotifyBar_NotifyBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotifyBar, _React$Component);

  function NotifyBar() {
    _classCallCheck(this, NotifyBar);

    return _possibleConstructorReturn(this, (NotifyBar.__proto__ || Object.getPrototypeOf(NotifyBar)).apply(this, arguments));
  }

  _createClass(NotifyBar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          open = _props.open,
          text = _props.text;
      return external__react__default.a.createElement("div", null, external__react__default.a.createElement(Snackbar__default.a, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: open,
        onRequestClose: this.props.notifyBarRequestClose,
        SnackbarContentProps: {
          'aria-describedby': 'message-id'
        },
        message: external__react__default.a.createElement("span", {
          id: "message-id"
        }, text)
      }));
    }
  }]);

  return NotifyBar;
}(external__react__default.a.Component);

/* harmony default export */ var components_NotifyBar = (NotifyBar_NotifyBar);
// CONCATENATED MODULE: ./common/utils.js
if (typeof window !== 'undefined') {
  window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
  }();

  window.isMobile = {
    Android: function Android() {
      return /Android/i.test(navigator.userAgent);
    },
    BlackBerry: function BlackBerry() {
      return /BlackBerry/i.test(navigator.userAgent);
    },
    IOS: function IOS() {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
    Windows: function Windows() {
      return /IEMobile/i.test(navigator.userAgent);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Windows();
    }
  };
} // main function


function scrollToY(scrollTargetY, speed, easing) {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use
  if (typeof window === 'undefined') {
    return;
  }

  var scrollY = window.scrollY,
      scrollTargetY = scrollTargetY || 0,
      speed = speed || 2000,
      easing = easing || 'easeOutSine',
      currentTime = 0; // min time .1, max time .8 seconds

  var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8)); // easing equations from https://github.com/danro/easing-js/blob/master/easing.js

  var PI_D2 = Math.PI / 2,
      easingEquations = {
    easeOutSine: function easeOutSine(pos) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine: function easeInOutSine(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },
    easeInOutQuint: function easeInOutQuint(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }

      return 0.5 * (Math.pow(pos - 2, 5) + 2);
    }
  }; // add animation loop

  function tick() {
    currentTime += 1 / 60;
    var p = currentTime / time;
    var t = easingEquations[easing](p);

    if (p < 1) {
      window.requestAnimFrame(tick);
      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
    } else {
      console.log('scroll done');
      window.scrollTo(0, scrollTargetY);
    }
  } // call it once to get started


  tick();
}

var utils = {
  scroll2top: function scroll2top() {
    scrollToY(0, 1500);
  },
  isEmptyObject: function isEmptyObject(e) {
    var t;

    for (t in e) {
      return !1;
    }

    return !0;
  },
  createScript: function createScript(scriptStr) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = scriptStr;
    return s;
  },
  preventRepeatExecute: function preventRepeatExecute(fn, timeout) {
    var ms = timeout || 200;
    var t;
    return function () {
      if (t) {
        clearTimeout(t);
      }

      t = setTimeout(fn, ms);
    };
  }
};
/* harmony default export */ var common_utils = (utils);
// CONCATENATED MODULE: ./components/Back2top.js
function Back2top__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Back2top__typeof = function _typeof(obj) { return typeof obj; }; } else { Back2top__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Back2top__typeof(obj); }

function Back2top__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Back2top__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Back2top__createClass(Constructor, protoProps, staticProps) { if (protoProps) Back2top__defineProperties(Constructor.prototype, protoProps); if (staticProps) Back2top__defineProperties(Constructor, staticProps); return Constructor; }

function Back2top__possibleConstructorReturn(self, call) { if (call && (Back2top__typeof(call) === "object" || typeof call === "function")) { return call; } return Back2top__assertThisInitialized(self); }

function Back2top__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Back2top__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Back2top_Back2top =
/*#__PURE__*/
function (_React$Component) {
  Back2top__inherits(Back2top, _React$Component);

  function Back2top() {
    var _ref;

    var _temp, _this;

    Back2top__classCallCheck(this, Back2top);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Back2top__possibleConstructorReturn(_this, (_temp = _this = Back2top__possibleConstructorReturn(this, (_ref = Back2top.__proto__ || Object.getPrototypeOf(Back2top)).call.apply(_ref, [this].concat(args))), Object.defineProperty(Back2top__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        visible: false
      }
    }), Object.defineProperty(Back2top__assertThisInitialized(_this), "onScroll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var scrollTop = 0;

        if (event.srcElement) {
          scrollTop = event.srcElement.body.scrollTop;
        } else if (event.scroll) {
          // firefox
          scrollTop = event.scroll.pageY;
        }

        if (scrollTop === 0) {
          scrollTop = document.documentElement.scrollTop;
        }

        _this.setState({
          visible: scrollTop > 300
        });
      }
    }), Object.defineProperty(Back2top__assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        common_utils.scroll2top();
      }
    }), _temp));
  }

  Back2top__createClass(Back2top, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.visible ? external__react__default.a.createElement("div", {
        style: Styles.root,
        onClick: this.onClick
      }, "\u56DE\u5230\u9876\u90E8") : null;
    }
  }]);

  return Back2top;
}(external__react__default.a.Component);

var Styles = {
  root: {
    width: 24,
    color: 'gray',
    padding: '12px 0 12px 5px',
    position: 'fixed',
    right: 0,
    bottom: 100,
    cursor: 'pointer',
    textAlign: 'center',
    zIndex: 20,
    backgroundColor: '#fff',
    borderRadius: '12px 0 0 12px'
  }
};
/* harmony default export */ var components_Back2top = (Back2top_Back2top);
// CONCATENATED MODULE: ./components/Footer.js


var Footer_Footer = function Footer() {
  return external__react__default.a.createElement("div", {
    style: Footer_Styles.root
  }, "\u9102ICP\u590717003086\u53F7-1. Copyright \xA9 2016. All Rights Reserved.");
};

var Footer_Styles = {
  root: {
    color: '#fff',
    fontSize: 13,
    width: '100%',
    height: '45px',
    marginTop: '1em',
    lineHeight: '45px',
    background: 'rgba(10, 10, 10, 0.7)',
    textAlign: 'center',
    zIndex: 1100
  }
};
/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./common/config.js
var config = __webpack_require__(12);

// EXTERNAL MODULE: external "@material-ui/core/ListSubheader"
var ListSubheader_ = __webpack_require__(9);
var ListSubheader__default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(7);
var List__default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(8);
var ListItem__default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__(24);
var ListItemIcon__default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(10);
var ListItemText__default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Collapse"
var Collapse_ = __webpack_require__(25);
var Collapse__default = /*#__PURE__*/__webpack_require__.n(Collapse_);

// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__(14);
var icons__default = /*#__PURE__*/__webpack_require__.n(icons_);

// CONCATENATED MODULE: ./containers/MainLayout/LeftSidebar/index.js
function LeftSidebar__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { LeftSidebar__typeof = function _typeof(obj) { return typeof obj; }; } else { LeftSidebar__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return LeftSidebar__typeof(obj); }

function LeftSidebar__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LeftSidebar__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LeftSidebar__createClass(Constructor, protoProps, staticProps) { if (protoProps) LeftSidebar__defineProperties(Constructor.prototype, protoProps); if (staticProps) LeftSidebar__defineProperties(Constructor, staticProps); return Constructor; }

function LeftSidebar__possibleConstructorReturn(self, call) { if (call && (LeftSidebar__typeof(call) === "object" || typeof call === "function")) { return call; } return LeftSidebar__assertThisInitialized(self); }

function LeftSidebar__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function LeftSidebar__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var LeftSidebar_styles = function styles(theme) {
  return {
    root: {
      maxWidth: 360,
      width: 230,
      background: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4
    }
  };
};

var LeftSidebar_LeftSidebar =
/*#__PURE__*/
function (_React$Component) {
  LeftSidebar__inherits(LeftSidebar, _React$Component);

  function LeftSidebar() {
    var _ref;

    var _temp, _this;

    LeftSidebar__classCallCheck(this, LeftSidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return LeftSidebar__possibleConstructorReturn(_this, (_temp = _this = LeftSidebar__possibleConstructorReturn(this, (_ref = LeftSidebar.__proto__ || Object.getPrototypeOf(LeftSidebar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(LeftSidebar__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: true
      }
    }), Object.defineProperty(LeftSidebar__assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        window.open(url);
      }
    }), _temp));
  }

  LeftSidebar__createClass(LeftSidebar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return external__react__default.a.createElement(List__default.a, {
        className: classes.root,
        subheader: external__react__default.a.createElement(ListSubheader__default.a, null, "ningto.com")
      }, external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com')
      }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(icons_["Home"], null)), external__react__default.a.createElement(ListItemText__default.a, {
        inset: true,
        primary: "\u4E3B\u9875"
      })), external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com/about')
      }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(icons_["AccountBox"], null)), external__react__default.a.createElement(ListItemText__default.a, {
        inset: true,
        primary: "\u5173\u4E8E"
      })), external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com/archives')
      }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(icons_["Archive"], null)), external__react__default.a.createElement(ListItemText__default.a, {
        inset: true,
        primary: "\u5F52\u6863"
      })), external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com/search')
      }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(icons_["Search"], null)), external__react__default.a.createElement(ListItemText__default.a, {
        inset: true,
        primary: "\u641C\u7D22"
      })), external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        onClick: function onClick() {
          return router__default.a.push('/program');
        }
      }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(icons_["GetApp"], null)), external__react__default.a.createElement(ListItemText__default.a, {
        inset: true,
        primary: "\u5C0F\u7A0B\u5E8F"
      })), external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        onClick: function onClick() {
          return router__default.a.push("/post?id=59edecd82be91645212c9981");
        }
      }, external__react__default.a.createElement(ListItemIcon__default.a, null, external__react__default.a.createElement(icons_["Favorite"], null)), external__react__default.a.createElement(ListItemText__default.a, {
        inset: true,
        primary: "\u4E66\u7B7E"
      })), external__react__default.a.createElement(Collapse__default.a, {
        component: "li",
        "in": this.state.open,
        transitionduration: "auto",
        unmountOnExit: true
      }, external__react__default.a.createElement(List__default.a, {
        disablePadding: true
      }, external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        className: classes.nested,
        onClick: this.handleClick.bind(this, 'http://ningto.com/mdviewer')
      }, external__react__default.a.createElement(ListItemText__default.a, {
        primary: "Markdown\u9884\u89C8"
      })), external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        className: classes.nested,
        onClick: this.handleClick.bind(this, 'http://ningto.com/upload.html')
      }, external__react__default.a.createElement(ListItemText__default.a, {
        primary: "\u4E0A\u4F20\u56FE\u7247"
      })), external__react__default.a.createElement(ListItem__default.a, {
        button: true,
        className: classes.nested,
        onClick: this.handleClick.bind(this, 'http://ningto.com/react-wchathot')
      }, external__react__default.a.createElement(ListItemText__default.a, {
        primary: "\u5FAE\u4FE1\u6587\u7AE0\u7CBE\u9009"
      })))));
    }
  }]);

  return LeftSidebar;
}(external__react__default.a.Component);

/* harmony default export */ var MainLayout_LeftSidebar = (Object(styles_["withStyles"])(LeftSidebar_styles)(LeftSidebar_LeftSidebar));
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__(4);
var Card__default = /*#__PURE__*/__webpack_require__.n(Card_);

// CONCATENATED MODULE: ./containers/MainLayout/RightSidebar/ProfileCard.js
function ProfileCard__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProfileCard__typeof = function _typeof(obj) { return typeof obj; }; } else { ProfileCard__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProfileCard__typeof(obj); }

function ProfileCard__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProfileCard__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProfileCard__createClass(Constructor, protoProps, staticProps) { if (protoProps) ProfileCard__defineProperties(Constructor.prototype, protoProps); if (staticProps) ProfileCard__defineProperties(Constructor, staticProps); return Constructor; }

function ProfileCard__possibleConstructorReturn(self, call) { if (call && (ProfileCard__typeof(call) === "object" || typeof call === "function")) { return call; } return ProfileCard__assertThisInitialized(self); }

function ProfileCard__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function ProfileCard__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ProfileCard_ProfileCard =
/*#__PURE__*/
function (_React$Component) {
  ProfileCard__inherits(ProfileCard, _React$Component);

  function ProfileCard() {
    var _ref;

    var _temp, _this;

    ProfileCard__classCallCheck(this, ProfileCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ProfileCard__possibleConstructorReturn(_this, (_temp = _this = ProfileCard__possibleConstructorReturn(this, (_ref = ProfileCard.__proto__ || Object.getPrototypeOf(ProfileCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(ProfileCard__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: true
      }
    }), Object.defineProperty(ProfileCard__assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: !_this.state.open
        });
      }
    }), _temp));
  }

  ProfileCard__createClass(ProfileCard, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          profile = _props.profile;
      var hits = [{
        name: '文章数',
        count: profile.postCount || 100
      }, {
        name: '总访问量',
        count: profile.hitCount || 54321
      }, {
        name: '今日访问',
        count: profile.hitToday || 321
      }];
      return external__react__default.a.createElement(Card__default.a, {
        className: classes.root
      }, external__react__default.a.createElement("div", {
        className: classes.row
      }, external__react__default.a.createElement("a", {
        href: "https://github.com/tujiaw"
      }, external__react__default.a.createElement("img", {
        className: classes.img,
        alt: "avatar",
        src: "http://ningto.com/img/myavatar.jpg"
      })), external__react__default.a.createElement("div", {
        className: classes.title
      }, external__react__default.a.createElement("span", {
        className: classes.mainTitle
      }, "ningto.com"), external__react__default.a.createElement("span", {
        className: classes.subTitle
      }, "Keep it simple,stupid"))), external__react__default.a.createElement("div", {
        className: classes.row
      }, hits.map(function (item, index) {
        return external__react__default.a.createElement("div", {
          key: index,
          className: classes.counter
        }, external__react__default.a.createElement("div", {
          className: classes.counterTitle
        }, item.name), external__react__default.a.createElement("div", {
          className: classes.counterNum
        }, item.count));
      })));
    }
  }]);

  return ProfileCard;
}(external__react__default.a.Component);

var ProfileCard_styles = function styles(theme) {
  return {
    root: {
      background: theme.palette.background.paper,
      padding: 10,
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    img: {
      width: '60px',
      height: '60px',
      borderRadius: '30px'
    },
    title: {
      display: 'flex',
      flexDirection: 'column'
    },
    mainTitle: {
      fontWeight: 'bold'
    },
    subTitle: {
      fontSize: '13px',
      color: '#788087'
    },
    counterNum: {
      color: '#4f4f4f',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    counterTitle: {
      color: '#788087'
    }
  };
};

/* harmony default export */ var RightSidebar_ProfileCard = (Object(styles_["withStyles"])(ProfileCard_styles)(ProfileCard_ProfileCard));
// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__(13);
var CardContent__default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// CONCATENATED MODULE: ./containers/MainLayout/RightSidebar/Group.js
function Group__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Group__typeof = function _typeof(obj) { return typeof obj; }; } else { Group__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Group__typeof(obj); }

function Group__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Group__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Group__createClass(Constructor, protoProps, staticProps) { if (protoProps) Group__defineProperties(Constructor.prototype, protoProps); if (staticProps) Group__defineProperties(Constructor, staticProps); return Constructor; }

function Group__possibleConstructorReturn(self, call) { if (call && (Group__typeof(call) === "object" || typeof call === "function")) { return call; } return Group__assertThisInitialized(self); }

function Group__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Group__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Group_styles = function styles(theme) {
  return {
    root: {
      // background: theme.palette.background.default,
      marginTop: 10
    },
    listItem: {
      padding: 6,
      margin: 0
    },
    listItemText: {
      padding: 0,
      margin: 0
    }
  };
};

var Group_Group =
/*#__PURE__*/
function (_React$Component) {
  Group__inherits(Group, _React$Component);

  function Group() {
    Group__classCallCheck(this, Group);

    return Group__possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  Group__createClass(Group, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          data = _props.data;
      return external__react__default.a.createElement(Card__default.a, {
        className: classes.root
      }, external__react__default.a.createElement(CardContent__default.a, null, external__react__default.a.createElement(List__default.a, {
        dense: true,
        subheader: external__react__default.a.createElement(ListSubheader__default.a, {
          className: classes.subHeader
        }, data.title)
      }, data.list && data.list.map(function (post, index) {
        var title = post.title;

        if (post.subTitle) {
          title += " (".concat(post.subTitle, ")");
        }

        return external__react__default.a.createElement(ListItem__default.a, {
          key: index,
          className: classes.listItem,
          onClick: data.onItemClick.bind(data, index),
          button: true
        }, external__react__default.a.createElement(ListItemText__default.a, {
          primary: title,
          className: classes.listItemText
        }));
      }))));
    }
  }]);

  return Group;
}(external__react__default.a.Component);

/* harmony default export */ var RightSidebar_Group = (Object(styles_["withStyles"])(Group_styles)(Group_Group));
// CONCATENATED MODULE: ./containers/MainLayout/RightSidebar/index.js









var RightSidebar_RightSideBar = function RightSideBar(props) {
  var classes = props.classes;
  var _props$data = props.data,
      profile = _props$data.profile,
      hotPosts = _props$data.hotPosts,
      tagsCount = _props$data.tagsCount,
      archives = _props$data.archives;
  var hotData = {},
      tagData = {},
      archiveData = {};

  if (hotPosts) {
    hotData.title = '热门文章';
    hotData.list = hotPosts;

    hotData.onItemClick = function (index) {
      router__default.a.push({
        pathname: '/post',
        query: {
          id: hotData.list[index]._id
        }
      });
    };
  }

  if (tagsCount) {
    tagData.title = '文章分类';
    tagData.list = tagsCount.map(function (item) {
      return {
        title: item.name,
        subTitle: item.count,
        keyword: item.name
      };
    });

    tagData.onItemClick = function (index) {
      router__default.a.push({
        pathname: '/title',
        query: {
          type: 'tag',
          keyword: tagData.list[index].keyword
        }
      });
    };
  }

  if (archives) {
    archiveData.title = '文章归档';
    archiveData.list = archives.map(function (item) {
      var year = item.yearMonth.substr(0, 4);
      var month = item.yearMonth.substr(5);
      return {
        title: "".concat(year, "\u5E74").concat(month, "\u6708"),
        subTitle: item.count,
        keyword: item.yearMonth
      };
    });

    archiveData.onItemClick = function (index) {
      router__default.a.push({
        pathname: '/title',
        query: {
          type: 'yearMonth',
          keyword: archiveData.list[index].keyword
        }
      });
    };
  }

  return external__react__default.a.createElement(core_["Grid"], {
    item: true,
    xs: 4,
    className: classes.root
  }, profile && external__react__default.a.createElement(RightSidebar_ProfileCard, {
    profile: profile
  }), !common_utils.isEmptyObject(hotData) && external__react__default.a.createElement(RightSidebar_Group, {
    data: hotData
  }), !common_utils.isEmptyObject(tagData) && external__react__default.a.createElement(RightSidebar_Group, {
    data: tagData
  }), !common_utils.isEmptyObject(archiveData) && external__react__default.a.createElement(RightSidebar_Group, {
    data: archiveData
  }));
};

var RightSidebar_styles = function styles(theme) {
  return {
    root: {
      minWidth: 260,
      maxWidth: 260,
      zIndex: 2,
      marginLeft: 10
    }
  };
};

/* harmony default export */ var RightSidebar = (Object(styles_["withStyles"])(RightSidebar_styles)(RightSidebar_RightSideBar));
// CONCATENATED MODULE: ./containers/MainLayout/index.js
function MainLayout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MainLayout__typeof = function _typeof(obj) { return typeof obj; }; } else { MainLayout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MainLayout__typeof(obj); }

function MainLayout__defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function MainLayout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MainLayout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MainLayout__createClass(Constructor, protoProps, staticProps) { if (protoProps) MainLayout__defineProperties(Constructor.prototype, protoProps); if (staticProps) MainLayout__defineProperties(Constructor, staticProps); return Constructor; }

function MainLayout__possibleConstructorReturn(self, call) { if (call && (MainLayout__typeof(call) === "object" || typeof call === "function")) { return call; } return MainLayout__assertThisInitialized(self); }

function MainLayout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function MainLayout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




















var MainLayout_MainLayout =
/*#__PURE__*/
function (_React$Component) {
  MainLayout__inherits(MainLayout, _React$Component);

  function MainLayout() {
    var _ref;

    var _temp, _this;

    MainLayout__classCallCheck(this, MainLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return MainLayout__possibleConstructorReturn(_this, (_temp = _this = MainLayout__possibleConstructorReturn(this, (_ref = MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(MainLayout__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        left: false,
        notifyBarOpen: false,
        notifyBarText: ''
      }
    }), Object.defineProperty(MainLayout__assertThisInitialized(_this), "toggleDrawer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(side, open) {
        return function () {
          _this.setState(MainLayout__defineProperty({}, side, open));
        };
      }
    }), Object.defineProperty(MainLayout__assertThisInitialized(_this), "contentSpacing", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(props) {
        if (window && window.isMobile && window.isMobile.any()) {
          return 12;
        }

        var size = {
          'xs': 10,
          'sm': 10,
          'md': 7,
          'lg': 6,
          'xl': 6
        };
        return size[props.width] || 10;
      }
    }), Object.defineProperty(MainLayout__assertThisInitialized(_this), "onHome", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        router__default.a.push('/');
      }
    }), Object.defineProperty(MainLayout__assertThisInitialized(_this), "onGithub", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.open('https://github.com/tujiaw');
      }
    }), Object.defineProperty(MainLayout__assertThisInitialized(_this), "notifyBarRequestClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          notifyBarOpen: false
        });
      }
    }), Object.defineProperty(MainLayout__assertThisInitialized(_this), "handleSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(keyword) {
        console.log('app.js keyword:' + keyword);

        if (keyword.length === 0) {
          router__default.a.push('/');
        } else if (keyword.length === 1) {
          _this.setState({
            notifyBarOpen: true,
            notifyBarText: '请至少输入两个字符！！！'
          });
        } else if (keyword.length > 1) {
          router__default.a.push({
            pathname: '/title',
            query: {
              type: 'search',
              keyword: keyword
            }
          });
        }
      }
    }), _temp));
  }

  MainLayout__createClass(MainLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.instance.appendChild(common_utils.createScript(config["a" /* default */].BAIDU_SHARE));

      if (window.localStorage) {
        console.log('3435354545454');
      } else {
        console.log('3333333333333333333');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      return external__react__default.a.createElement("div", {
        className: classes.root,
        ref: function ref(e) {
          return _this2.instance = e;
        }
      }, external__react__default.a.createElement(components_NotifyBar, {
        open: this.state.notifyBarOpen,
        text: this.state.notifyBarText,
        notifyBarRequestClose: this.notifyBarRequestClose
      }), external__react__default.a.createElement(components_Back2top, null), external__react__default.a.createElement(core_["Drawer"], {
        open: this.state.left,
        onClose: this.toggleDrawer('left', false)
      }, external__react__default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false)
      }, external__react__default.a.createElement(MainLayout_LeftSidebar, null))), external__react__default.a.createElement(core_["AppBar"], {
        className: classes.appBar
      }, external__react__default.a.createElement(core_["Toolbar"], null, external__react__default.a.createElement(core_["IconButton"], {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: this.toggleDrawer('left', true)
      }, external__react__default.a.createElement(Menu__default.a, null)), external__react__default.a.createElement(core_["Typography"], {
        type: "title",
        color: "inherit",
        className: classes.title,
        noWrap: true
      }, "\u6CDE\u9014 - ningto.com"), external__react__default.a.createElement(components_AppSearch, {
        onRequestSearch: this.handleSearch
      }), external__react__default.a.createElement(core_["IconButton"], {
        color: "inherit",
        "aria-label": "\u4E3B\u9875",
        onClick: this.onHome
      }, external__react__default.a.createElement(Home__default.a, null)), external__react__default.a.createElement(core_["IconButton"], {
        color: "inherit",
        "aria-label": "github",
        onClick: this.onGithub
      }, external__react__default.a.createElement(Github, null)))), external__react__default.a.createElement(core_["Grid"], {
        container: true,
        justify: "center",
        item: true,
        xs: 12
      }, external__react__default.a.createElement("main", {
        className: classes.content
      }, external__react__default.a.createElement(core_["Grid"], {
        container: true,
        justify: "center"
      }, external__react__default.a.createElement(core_["Grid"], {
        className: classes.children,
        item: true,
        xs: this.contentSpacing(this.props)
      }, this.props.children), external__react__default.a.createElement(core_["Hidden"], {
        smDown: true
      }, this.props.rightSidebarData ? external__react__default.a.createElement(RightSidebar, {
        data: this.props.rightSidebarData
      }) : null), external__react__default.a.createElement(components_Footer, null)))));
    }
  }]);

  return MainLayout;
}(external__react__default.a.Component);

var MainLayout_styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      height: '100%',
      zIndex: 1,
      overflow: 'hidden',
      // background: theme.palette.grey[400],
      backgroundColor: '#e6ecf0'
    },
    appFrame: {
      display: 'flex',
      flex: 1,
      width: '100%'
    },
    title: {
      display: 'flex',
      flex: 1
    },
    navIconHide: MainLayout__defineProperty({}, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    children: {
      zIndex: 1
    },
    bgright: {
      top: 0,
      right: 0,
      width: 271,
      height: '100%',
      position: 'fixed',
      background: 'url(/static/img/bgright.jpg) no-repeat'
    },
    content: MainLayout__defineProperty({
      // backgroundColor: theme.palette.background.default,
      width: '100%',
      height: 'calc(100% - 80px)',
      marginTop: 80
    }, theme.breakpoints.up('md'), {
      height: 'calc(100% - 80px)',
      marginTop: 80
    }),
    side: {
      minWidth: 260,
      maxWidth: 260,
      marginTop: 20
    }
  };
};

/* harmony default export */ var containers_MainLayout = __webpack_exports__["a"] = (compose__default()(Object(styles_["withStyles"])(MainLayout_styles, {
  withTheme: true
}), withWidth__default()())(MainLayout_MainLayout));

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("recompose/pure");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);



function getData(url) {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(url).then(function (res) {
      if (res && res.json) {
        resolve(res.json());

        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      }
    }).catch(function (error) {
      console.log('get data error:' + error + ',url:' + url);
      reject(error);
    });
  });
}

var net = {
  getUrl: function getUrl(url) {
    return getData(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].API_PREFIX + url);
  },
  getRightSidebarData: function getRightSidebarData() {
    return getData(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].API_PREFIX + '/rightsidebar');
  },
  getPosts: function getPosts(page) {
    page = page ? '/?page=' + page : '';
    return getData(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].API_PREFIX + '/list' + page);
  },
  getPost: function getPost(id) {
    return getData(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].API_PREFIX + '/post/' + id);
  },
  getTagPost: function getTagPost(tagname) {
    return getData(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].API_PREFIX + '/tags/' + tagname);
  },
  getSearch: function getSearch(keyword) {
    return getData(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].API_PREFIX + '/search?keyword=' + keyword);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (net);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Loading;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

function Loading() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: Styles.root
  }, "\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E...");
}
var Styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    color: '#999'
  }
};

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(15);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./containers/MainLayout/index.js + 10 modules
var MainLayout = __webpack_require__(16);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "recompose/compose"
var compose_ = __webpack_require__(6);
var compose__default = /*#__PURE__*/__webpack_require__.n(compose_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(1);
var styles__default = /*#__PURE__*/__webpack_require__.n(styles_);

// EXTERNAL MODULE: external "@material-ui/core/ListSubheader"
var ListSubheader_ = __webpack_require__(9);
var ListSubheader__default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__(7);
var List__default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__(8);
var ListItem__default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__(10);
var ListItemText__default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(5);
var core__default = /*#__PURE__*/__webpack_require__.n(core_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(3);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/Loading.js
var Loading = __webpack_require__(29);

// CONCATENATED MODULE: ./containers/ShowTitle/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }













var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      overflow: 'auto',
      background: theme.palette.background.paper,
      borderRadius: 5
    },
    subHeader: {
      color: theme.palette.text.title,
      fontWeight: 'bold'
    },
    listSection: {
      background: 'inherit'
    },
    divider: {
      marginLeft: 10,
      marginRight: 10
    }
  };
};

var ShowTitle_ShowTitleList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShowTitleList, _React$Component);

  function ShowTitleList() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ShowTitleList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ShowTitleList.__proto__ || Object.getPrototypeOf(ShowTitleList)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(id) {
        router__default.a.push({
          pathname: '/post',
          query: {
            id: id
          }
        });
      }
    }), _temp));
  }

  _createClass(ShowTitleList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          data = _props.data;
      return external__react__default.a.createElement("div", {
        className: classes.root
      }, data.archives ? external__react__default.a.createElement("div", null, external__react__default.a.createElement(List__default.a, {
        dense: true,
        className: classes.root,
        subheader: external__react__default.a.createElement(ListSubheader__default.a, {
          className: classes.subHeader
        }, data.tagname)
      }, data.archives.map(function (archive, i) {
        return external__react__default.a.createElement("div", {
          key: 'archives' + i,
          className: classes.listSection
        }, external__react__default.a.createElement(core_["Divider"], {
          className: classes.divider
        }), external__react__default.a.createElement(ListSubheader__default.a, null, archive.yearMonth), archive.titles && archive.titles.map(function (title, j) {
          return external__react__default.a.createElement(ListItem__default.a, {
            button: true,
            key: 'archives' + i + 'title' + j,
            onClick: _this2.handleClick.bind(_this2, title._id)
          }, external__react__default.a.createElement(ListItemText__default.a, {
            primary: title.title
          }));
        }));
      }))) : external__react__default.a.createElement(Loading["a" /* default */], null));
    }
  }]);

  return ShowTitleList;
}(external__react__default.a.Component);

/* harmony default export */ var ShowTitle = (compose__default()(Object(styles_["withStyles"])(styles))(ShowTitle_ShowTitleList));
// EXTERNAL MODULE: ./common/net.js
var net = __webpack_require__(26);

// CONCATENATED MODULE: ./pages/title.js


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }






var title_Title = function Title(props) {
  console.log('url:' + props.url);
  return external__react__default.a.createElement(MainLayout["a" /* default */], {
    rightSidebarData: props.rightSidebarData
  }, external__react__default.a.createElement(ShowTitle, {
    data: props.data
  }));
};

title_Title.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regenerator__default.a.mark(function _callee(context) {
    var result;
    return regenerator__default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return net["a" /* default */].getUrl(context.asPath);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", {
              rightSidebarData: result.rightSidebarData,
              data: result
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var pages_title = __webpack_exports__["default"] = (title_Title);

/***/ })
/******/ ]);