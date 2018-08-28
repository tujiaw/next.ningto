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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/config.js":
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

/***/ "./common/net.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__("./common/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
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

function postData(url, data) {
  return new Promise(function (resolve, reject) {
    __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default()(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      console.log(res);
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
  },
  postComments: function postComments(data) {
    postData(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].API_PREFIX + '/comments', data);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (net);

/***/ }),

/***/ "./common/objectId.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);


function objectIdToTimestamp(objectId) {
  try {
    objectId = objectId.toString();
  } catch (e) {}

  if (!/^[0-9a-z]{24}$/.test(objectId)) {
    throw new TypeError('Invalid objectId, got ' + JSON.stringify(objectId));
  }

  return parseInt(objectId.slice(0, 8), 16) * 1000 + Math.floor(parseInt(objectId.slice(-6), 16) / 16777.217); // convert 0x000000 ~ 0xffffff to 0 ~ 999
}

;
var objectId = {
  toTimestamp: function toTimestamp(objectId) {
    return objectIdToTimestamp(objectId);
  },
  toDatetime: function toDatetime(objectId) {
    return __WEBPACK_IMPORTED_MODULE_0_moment___default()(objectIdToTimestamp(objectId)).format('YYYY-MM-DD HH:mm');
  }
};
/* harmony default export */ __webpack_exports__["a"] = (objectId);

/***/ }),

/***/ "./common/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ }),

/***/ "./components/AppSearch.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_compose__ = __webpack_require__("recompose/compose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_pure__ = __webpack_require__("recompose/pure");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_pure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_pure__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_withWidth__ = __webpack_require__("@material-ui/core/withWidth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_withWidth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_withWidth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search__ = __webpack_require__("@material-ui/icons/Search");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles_colorManipulator__ = __webpack_require__("@material-ui/core/styles/colorManipulator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles_colorManipulator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles_colorManipulator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__);
var _jsxFileName = "F:\\github\\next.ningto\\components\\AppSearch.js";

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

var styles = function styles(theme) {
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
      background: Object(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles_colorManipulator__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        background: Object(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_styles_colorManipulator__["fade"])(theme.palette.common.white, 0.25)
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

  if (!Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_withWidth__["isWidthUp"])('sm', width)) {
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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.search,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Search___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
    id: "docsearch-input",
    className: classes.input,
    onKeyPress: handleKeyPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }));
}

AppSearch.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  width: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_styles__["withStyles"])(styles, {
  name: 'AppSearch'
}), __WEBPACK_IMPORTED_MODULE_4__material_ui_core_withWidth___default()(), __WEBPACK_IMPORTED_MODULE_2_recompose_pure___default.a)(AppSearch));

/***/ }),

/***/ "./components/Back2top.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_utils__ = __webpack_require__("./common/utils.js");
var _jsxFileName = "F:\\github\\next.ningto\\components\\Back2top.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Back2top =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Back2top, _React$Component);

  function Back2top() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Back2top);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Back2top.__proto__ || Object.getPrototypeOf(Back2top)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        visible: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onScroll", {
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
    }), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_1__common_utils__["a" /* default */].scroll2top();
      }
    }), _temp));
  }

  _createClass(Back2top, [{
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
      return this.state.visible ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: Styles.root,
        onClick: this.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "\u56DE\u5230\u9876\u90E8") : null;
    }
  }]);

  return Back2top;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

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
/* harmony default export */ __webpack_exports__["a"] = (Back2top);

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "F:\\github\\next.ningto\\components\\Footer.js";


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: Styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "\u9102ICP\u590717003086\u53F7-1. Copyright \xA9 2016. All Rights Reserved.");
};

var Styles = {
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
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Github.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon__ = __webpack_require__("@material-ui/core/SvgIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon__);
var _jsxFileName = "F:\\github\\next.ningto\\components\\Github.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function GitHub(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_SvgIcon___default.a, _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
}

GitHub.muiName = 'SvgIcon';
/* harmony default export */ __webpack_exports__["a"] = (GitHub);

/***/ }),

/***/ "./components/Loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Loading;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "F:\\github\\next.ningto\\components\\Loading.js";

function Loading() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    style: Styles.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
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

/***/ "./components/NotifyBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Snackbar__ = __webpack_require__("@material-ui/core/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Snackbar__);
var _jsxFileName = "F:\\github\\next.ningto\\components\\NotifyBar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NotifyBar =
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Snackbar___default.a, {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        open: open,
        onRequestClose: this.props.notifyBarRequestClose,
        SnackbarContentProps: {
          'aria-describedby': 'message-id'
        },
        message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          id: "message-id",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, text),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }));
    }
  }]);

  return NotifyBar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (NotifyBar);

/***/ }),

/***/ "./components/Pagination.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons__ = __webpack_require__("@material-ui/icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons__);
var _jsxFileName = "F:\\github\\next.ningto\\components\\Pagination.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(page) {
        _this.props.gotoPage(page);
      }
    }), _temp));
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;
      var _props$data = this.props.data,
          pageNumbers = _props$data.pageNumbers,
          page = _props$data.page,
          lastPage = _props$data.lastPage,
          prevPage = _props$data.prevPage,
          nextPage = _props$data.nextPage,
          morePage = _props$data.morePage;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, page && prevPage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["IconButton"], {
        className: classes.button,
        disabled: page === 1,
        onClick: function onClick() {
          return _this2.onClick(prevPage);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons__["KeyboardArrowLeft"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), pageNumbers && pageNumbers.map(function (number, index) {
        if (number === 0) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Button"], {
            key: index,
            className: classes.button,
            onClick: function onClick() {
              return _this2.onClick(morePage);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, "...");
        } else {
          if (number === page) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Button"], {
              key: index,
              className: classes.button,
              onClick: function onClick() {
                return _this2.onClick(number);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            }, number);
          } else {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["Button"], {
              key: index,
              className: classes.button,
              onClick: function onClick() {
                return _this2.onClick(number);
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }, number);
          }
        }
      }), page && lastPage && nextPage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["IconButton"], {
        className: classes.button,
        disabled: page === lastPage,
        onClick: function onClick() {
          return _this2.onClick(nextPage);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_icons__["KeyboardArrowRight"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })));
    }
  }]);

  return Pagination;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
    button: {
      minWidth: 40,
      minHeight: 30,
      maxWidth: 40,
      maxHeight: 30,
      padding: 0,
      maring: 0
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["withStyles"])(styles)(Pagination));

/***/ }),

/***/ "./containers/MainLayout/LeftSidebar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader__ = __webpack_require__("@material-ui/core/ListSubheader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Collapse__ = __webpack_require__("@material-ui/core/Collapse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons__ = __webpack_require__("@material-ui/icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material_ui_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_next_router__);
var _jsxFileName = "F:\\github\\next.ningto\\containers\\MainLayout\\LeftSidebar\\index.js";

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
      maxWidth: 360,
      width: 230,
      background: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing.unit * 4
    }
  };
};

var LeftSidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LeftSidebar, _React$Component);

  function LeftSidebar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, LeftSidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LeftSidebar.__proto__ || Object.getPrototypeOf(LeftSidebar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: true
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(url) {
        window.open(url);
      }
    }), _temp));
  }

  _createClass(LeftSidebar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default.a, {
        className: classes.root,
        subheader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, "ningto.com"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons__["Home"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        inset: true,
        primary: "\u4E3B\u9875",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com/about'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons__["AccountBox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        inset: true,
        primary: "\u5173\u4E8E",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com/archives'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons__["Archive"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        inset: true,
        primary: "\u5F52\u6863",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        onClick: this.handleClick.bind(this, 'http://ningto.com/search'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons__["Search"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        inset: true,
        primary: "\u641C\u7D22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_10_next_router___default.a.push('/program');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons__["GetApp"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        inset: true,
        primary: "\u5C0F\u7A0B\u5E8F",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        onClick: function onClick() {
          return __WEBPACK_IMPORTED_MODULE_10_next_router___default.a.push("/post?id=59edecd82be91645212c9981");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemIcon___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__material_ui_icons__["Favorite"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        inset: true,
        primary: "\u4E66\u7B7E",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Collapse___default.a, {
        component: "li",
        "in": this.state.open,
        transitionduration: "auto",
        unmountOnExit: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default.a, {
        disablePadding: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        className: classes.nested,
        onClick: this.handleClick.bind(this, 'http://ningto.com/mdviewer'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        primary: "Markdown\u9884\u89C8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        className: classes.nested,
        onClick: this.handleClick.bind(this, 'http://ningto.com/upload.html'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        primary: "\u4E0A\u4F20\u56FE\u7247",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
        button: true,
        className: classes.nested,
        onClick: this.handleClick.bind(this, 'http://ningto.com/react-wchathot'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItemText___default.a, {
        primary: "\u5FAE\u4FE1\u6587\u7AE0\u7CBE\u9009",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })))));
    }
  }]);

  return LeftSidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

LeftSidebar.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(LeftSidebar));

/***/ }),

/***/ "./containers/MainLayout/RightSidebar/Group.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader__ = __webpack_require__("@material-ui/core/ListSubheader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemText__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent__);
var _jsxFileName = "F:\\github\\next.ningto\\containers\\MainLayout\\RightSidebar\\Group.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var styles = function styles(theme) {
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

var Group =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          data = _props.data;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Card___default.a, {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_CardContent___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_List___default.a, {
        dense: true,
        subheader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListSubheader___default.a, {
          className: classes.subHeader,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, data.title),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, data.list && data.list.map(function (post, index) {
        var title = post.title;

        if (post.subTitle) {
          title += " (".concat(post.subTitle, ")");
        }

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_ListItem___default.a, {
          key: index,
          className: classes.listItem,
          onClick: data.onItemClick.bind(data, index),
          button: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_ListItemText___default.a, {
          primary: title,
          className: classes.listItemText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }));
      }))));
    }
  }]);

  return Group;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Group.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Group));

/***/ }),

/***/ "./containers/MainLayout/RightSidebar/ProfileCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__);
var _jsxFileName = "F:\\github\\next.ningto\\containers\\MainLayout\\RightSidebar\\ProfileCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ProfileCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfileCard, _React$Component);

  function ProfileCard() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ProfileCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ProfileCard.__proto__ || Object.getPrototypeOf(ProfileCard)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: true
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
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

  _createClass(ProfileCard, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card___default.a, {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://github.com/tujiaw",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: classes.img,
        alt: "avatar",
        src: "http://ningto.com/img/myavatar.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.mainTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "ningto.com"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.subTitle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Keep it simple,stupid"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.row,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, hits.map(function (item, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: index,
          className: classes.counter,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.counterTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, item.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: classes.counterNum,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, item.count));
      })));
    }
  }]);

  return ProfileCard;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var styles = function styles(theme) {
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

ProfileCard.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(ProfileCard));

/***/ }),

/***/ "./containers/MainLayout/RightSidebar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProfileCard__ = __webpack_require__("./containers/MainLayout/RightSidebar/ProfileCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Group__ = __webpack_require__("./containers/MainLayout/RightSidebar/Group.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__("./common/utils.js");
var _jsxFileName = "F:\\github\\next.ningto\\containers\\MainLayout\\RightSidebar\\index.js";









var RightSideBar = function RightSideBar(props) {
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
      __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({
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
      __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({
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
      __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({
        pathname: '/title',
        query: {
          type: 'yearMonth',
          keyword: archiveData.list[index].keyword
        }
      });
    };
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Grid"], {
    item: true,
    xs: 4,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, profile && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ProfileCard__["a" /* default */], {
    profile: profile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), !__WEBPACK_IMPORTED_MODULE_7__common_utils__["a" /* default */].isEmptyObject(hotData) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Group__["a" /* default */], {
    data: hotData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), !__WEBPACK_IMPORTED_MODULE_7__common_utils__["a" /* default */].isEmptyObject(tagData) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Group__["a" /* default */], {
    data: tagData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), !__WEBPACK_IMPORTED_MODULE_7__common_utils__["a" /* default */].isEmptyObject(archiveData) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Group__["a" /* default */], {
    data: archiveData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }));
};

var styles = function styles(theme) {
  return {
    root: {
      minWidth: 260,
      maxWidth: 260,
      zIndex: 2,
      marginLeft: 10
    }
  };
};

RightSideBar.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["withStyles"])(styles)(RightSideBar));

/***/ }),

/***/ "./containers/MainLayout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core__ = __webpack_require__("@material-ui/core");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Menu__ = __webpack_require__("@material-ui/icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Home__ = __webpack_require__("@material-ui/icons/Home");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose_compose__ = __webpack_require__("recompose/compose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_withWidth__ = __webpack_require__("@material-ui/core/withWidth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_withWidth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_withWidth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_AppSearch__ = __webpack_require__("./components/AppSearch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Github__ = __webpack_require__("./components/Github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_NotifyBar__ = __webpack_require__("./components/NotifyBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Back2top__ = __webpack_require__("./components/Back2top.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_utils__ = __webpack_require__("./common/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_config__ = __webpack_require__("./common/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__LeftSidebar__ = __webpack_require__("./containers/MainLayout/LeftSidebar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__RightSidebar__ = __webpack_require__("./containers/MainLayout/RightSidebar/index.js");
var _jsxFileName = "F:\\github\\next.ningto\\containers\\MainLayout\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




















var MainLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  function MainLayout() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MainLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        left: false,
        notifyBarOpen: false,
        notifyBarText: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleDrawer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(side, open) {
        return function () {
          _this.setState(_defineProperty({}, side, open));
        };
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "contentSpacing", {
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
    }), Object.defineProperty(_assertThisInitialized(_this), "onHome", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push('/');
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onGithub", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.open('https://github.com/tujiaw');
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "notifyBarRequestClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          notifyBarOpen: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(keyword) {
        console.log('app.js keyword:' + keyword);

        if (keyword.length === 0) {
          __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push('/');
        } else if (keyword.length === 1) {
          _this.setState({
            notifyBarOpen: true,
            notifyBarText: '请至少输入两个字符！！！'
          });
        } else if (keyword.length > 1) {
          __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push({
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

  _createClass(MainLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.instance.appendChild(__WEBPACK_IMPORTED_MODULE_14__common_utils__["a" /* default */].createScript(__WEBPACK_IMPORTED_MODULE_15__common_config__["a" /* default */].BAIDU_SHARE));

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        ref: function ref(e) {
          return _this2.instance = e;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_NotifyBar__["a" /* default */], {
        open: this.state.notifyBarOpen,
        text: this.state.notifyBarText,
        notifyBarRequestClose: this.notifyBarRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_Back2top__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Drawer"], {
        open: this.state.left,
        onClose: this.toggleDrawer('left', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__LeftSidebar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["AppBar"], {
        className: classes.appBar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Toolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["IconButton"], {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: this.toggleDrawer('left', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_icons_Menu___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Typography"], {
        type: "title",
        color: "inherit",
        className: classes.title,
        noWrap: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "\u6CDE\u9014 - ningto.com"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_AppSearch__["a" /* default */], {
        onRequestSearch: this.handleSearch,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["IconButton"], {
        color: "inherit",
        "aria-label": "\u4E3B\u9875",
        onClick: this.onHome,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_icons_Home___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["IconButton"], {
        color: "inherit",
        "aria-label": "github",
        onClick: this.onGithub,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Github__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Grid"], {
        container: true,
        justify: "center",
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        className: classes.content,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Grid"], {
        container: true,
        justify: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Grid"], {
        className: classes.children,
        item: true,
        xs: this.contentSpacing(this.props),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, this.props.children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core__["Hidden"], {
        smDown: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, this.props.rightSidebarData ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__RightSidebar__["a" /* default */], {
        data: this.props.rightSidebarData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }) : null), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      })))));
    }
  }]);

  return MainLayout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var styles = function styles(theme) {
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
    navIconHide: _defineProperty({}, theme.breakpoints.up('md'), {
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
    content: _defineProperty({
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

MainLayout.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_6_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
}), __WEBPACK_IMPORTED_MODULE_7__material_ui_core_withWidth___default()())(MainLayout));

/***/ }),

/***/ "./containers/PostCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions__ = __webpack_require__("@material-ui/core/CardActions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Chip__ = __webpack_require__("@material-ui/core/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_objectId__ = __webpack_require__("./common/objectId.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_next_router__);
var _jsxFileName = "F:\\github\\next.ningto\\containers\\PostCard.js";













function PostCard(props) {
  var classes = props.classes,
      post = props.post;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default.a, {
    className: classes.cardContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
    type: "body1",
    className: classes.subTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_9__common_objectId__["a" /* default */].toDatetime(post._id), " \u9605\u8BFB(", post.pv, ")"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
    type: "headline",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_next_link___default.a, {
    href: "/post?id=".concat(post._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, post.title))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.chipGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, post.tags && post.tags.map(function (tag, index) {
    return tag.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_Chip___default.a, {
      key: index,
      className: classes.chip,
      label: tag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    }) : null;
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Typography___default.a, {
    component: "p",
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, post.content)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    dense: "true",
    onClick: function onClick() {
      __WEBPACK_IMPORTED_MODULE_11_next_router___default.a.push("/post?id=".concat(post._id));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "\u9605\u8BFB\u5168\u6587 \xBB")));
}

var styles = function styles(theme) {
  return {
    root: {
      background: theme.palette.background.paper,
      // borderRadius: 5,
      width: '100%',
      '&:hover': {
        background: theme.palette.background.itemHover
      }
    },
    title: {
      color: theme.palette.text.title,
      textDecoration: 'none',
      fontSize: '1.8em',
      '&:hover': {
        color: theme.palette.text.titleHover
      }
    },
    subTitle: {
      marginBottom: 6,
      fontSize: '.8em',
      color: theme.palette.text.secondary
    },
    cardContent: {
      paddingBottom: '0'
    },
    content: {
      fontSize: '1em',
      color: theme.palette.text.secondary
    },
    chipGroup: {
      display: 'flex',
      marginTop: 6,
      marginBottom: 6
    },
    chip: {
      height: 25,
      marginRight: 6
    }
  };
};

PostCard.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(PostCard));

/***/ }),

/***/ "./containers/PostCardList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Loading__ = __webpack_require__("./components/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PostCard__ = __webpack_require__("./containers/PostCard.js");
var _jsxFileName = "F:\\github\\next.ningto\\containers\\PostCardList.js";







function PostCardList(props) {
  var classes = props.classes,
      posts = props.posts;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_List___default.a, {
    className: classes.list,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, posts ? posts.map(function (post, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_ListItem___default.a, {
      key: index,
      className: classes.listItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PostCard__["a" /* default */], {
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }));
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Loading__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })));
}

var styles = function styles(theme) {
  return {
    root: {},
    list: {
      paddingTop: 0
    },
    listItem: {
      padding: 0,
      paddingBottom: 1
    },
    loading: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["withStyles"])(styles)(PostCardList));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_MainLayout__ = __webpack_require__("./containers/MainLayout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_PostCardList__ = __webpack_require__("./containers/PostCardList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Pagination__ = __webpack_require__("./components/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_net__ = __webpack_require__("./common/net.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);

var _jsxFileName = "F:\\github\\next.ningto\\pages\\index.js";

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        theme: Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["createMuiTheme"])({
          palette: {
            type: 'light',
            text: {
              // title: '#2ca6cb',
              title: '#3f51b5',
              titleHover: '#7B68EE',
              secondary: '#817c7c'
            },
            background: {
              itemHover: '#f5f8fa'
            }
          }
        })
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "gotoPage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(page) {
        __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push({
          pathname: '/',
          query: {
            page: page
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "HomePage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.postsData && _this.props.postsData.posts) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_PostCardList__["a" /* default */], {
            posts: _this.props.postsData.posts,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Pagination__["a" /* default */], {
            data: _this.props.postsData,
            gotoPage: _this.gotoPage,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }));
        } else {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }, "loadding...");
        }
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
        theme: this.state.theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_MainLayout__["a" /* default */], {
        rightSidebarData: this.props.rightSidebarData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, this.HomePage()));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var page, result;
    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = context.query.page || 1;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_6__common_net__["a" /* default */].getPosts(page);

          case 3:
            result = _context.sent;
            return _context.abrupt("return", {
              rightSidebarData: result.rightSidebarData,
              postsData: result
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@material-ui/core":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Chip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Collapse":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/core/withWidth":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/withWidth");

/***/ }),

/***/ "@material-ui/icons":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "@material-ui/icons/Home":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Menu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Search":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "recompose/compose":
/***/ (function(module, exports) {

module.exports = require("recompose/compose");

/***/ }),

/***/ "recompose/pure":
/***/ (function(module, exports) {

module.exports = require("recompose/pure");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map