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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
    HOST_PREFIX: 'http://ningto.com',
    API_PREFIX: 'http://ningto.com/api',

    // HOST_PREFIX: 'http://localhost:3000',
    // API_PREFIX: 'http://localhost:3000/api',

    BAIDU_SHARE: 'window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"0","bdPos":"right","bdTop":"100"}};with(document)0[(getElementsByTagName(\'head\')[0]||body).appendChild(createElement(\'script\')).src=\'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=\'+~(-new Date()/36e5)];',
    SOHUCS: '(function(){ \n        var appid = \'cysWB0Du9\'; \n        var conf = \'691d31a2c6c0e4c3c74db69baf69415e\'; \n        var width = window.innerWidth || document.documentElement.clientWidth; \n        if (width < 960) { \n        window.document.write(\'<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=\' + appid + \'&conf=\' + conf + \'"></script>\'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })();\n    '
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
};

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
            return (/Android/i.test(navigator.userAgent)
            );
        },
        BlackBerry: function BlackBerry() {
            return (/BlackBerry/i.test(navigator.userAgent)
            );
        },
        IOS: function IOS() {
            return (/iPhone|iPad|iPod/i.test(navigator.userAgent)
            );
        },
        Windows: function Windows() {
            return (/IEMobile/i.test(navigator.userAgent)
            );
        },
        any: function any() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Windows();
        }
    };
}

// main function
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
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
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
    };

    // add animation loop
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
    }

    // call it once to get started
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
        var t = void 0;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_utils_withWidth__ = __webpack_require__("material-ui/utils/withWidth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_utils_withWidth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_utils_withWidth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Search__ = __webpack_require__("material-ui-icons/Search");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Search___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Search__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colorManipulator__ = __webpack_require__("material-ui/styles/colorManipulator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colorManipulator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colorManipulator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__);
var _jsxFileName = 'c:\\github\\ningto\\components\\AppSearch.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










var searchTimer = void 0;

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
        '& .algolia-docsearch-suggestion--title': _extends({}, theme.typography.title),
        '& .algolia-docsearch-suggestion--text': _extends({}, theme.typography.body1),
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
      background: Object(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colorManipulator__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        background: Object(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colorManipulator__["fade"])(theme.palette.common.white, 0.25)
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
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit * 9 + 'px',
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      margin: 0, // Reset for Safari
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


  if (!Object(__WEBPACK_IMPORTED_MODULE_4_material_ui_utils_withWidth__["isWidthUp"])('sm', width)) {
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

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes.wrapper, __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: classes.search, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Search___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { id: 'docsearch-input', className: classes.input, onKeyPress: handleKeyPress, __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      }
    })
  );
}

AppSearch.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object.isRequired,
  width: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles__["withStyles"])(styles, {
  name: 'AppSearch'
}), __WEBPACK_IMPORTED_MODULE_4_material_ui_utils_withWidth___default()(), __WEBPACK_IMPORTED_MODULE_2_recompose_pure___default.a)(AppSearch));

/***/ }),

/***/ "./components/Back2top.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_utils__ = __webpack_require__("./common/utils.js");
var _jsxFileName = 'c:\\github\\ningto\\components\\Back2top.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Back2top = function (_React$Component) {
  _inherits(Back2top, _React$Component);

  function Back2top() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Back2top);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Back2top.__proto__ || Object.getPrototypeOf(Back2top)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      visible: false
    }, _this.onScroll = function (event) {
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
      _this.setState({ visible: scrollTop > 300 });
    }, _this.onClick = function () {
      __WEBPACK_IMPORTED_MODULE_1__common_utils__["a" /* default */].scroll2top();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Back2top, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.visible ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: Styles.root, onClick: this.onClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        },
        '\u56DE\u5230\u9876\u90E8'
      ) : null;
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
var _jsxFileName = 'c:\\github\\ningto\\components\\Footer.js';


var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { style: Styles.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    '\u9102ICP\u590717003086\u53F7-1. Copyright \xA9 2016. All Rights Reserved.'
  );
};

var Styles = {
  root: {
    color: '#fff',
    fontSize: 13,
    width: '100%',
    height: 45,
    marginTop: '1em',
    paddingTop: 12,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_SvgIcon__ = __webpack_require__("material-ui/SvgIcon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_SvgIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_SvgIcon__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'c:\\github\\ningto\\components\\Github.js';



function GitHub(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_material_ui_SvgIcon___default.a,
    _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M12.007 0C6.12 0 1.1 4.27.157 10.08c-.944 5.813 2.468 11.45 8.054 13.312.19.064.397.033.555-.084.16-.117.25-.304.244-.5v-2.042c-3.33.735-4.037-1.56-4.037-1.56-.22-.726-.694-1.35-1.334-1.756-1.096-.75.074-.735.074-.735.773.103 1.454.557 1.846 1.23.694 1.21 2.23 1.638 3.45.96.056-.61.327-1.178.766-1.605-2.67-.3-5.462-1.335-5.462-6.002-.02-1.193.42-2.35 1.23-3.226-.327-1.015-.27-2.116.166-3.09 0 0 1.006-.33 3.3 1.23 1.966-.538 4.04-.538 6.003 0 2.295-1.5 3.3-1.23 3.3-1.23.445 1.006.49 2.144.12 3.18.81.877 1.25 2.033 1.23 3.226 0 4.607-2.805 5.627-5.476 5.927.578.583.88 1.386.825 2.206v3.29c-.005.2.092.393.26.507.164.115.377.14.565.063 5.568-1.88 8.956-7.514 8.007-13.313C22.892 4.267 17.884.007 12.008 0z', __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    })
  );
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
var _jsxFileName = 'c:\\github\\ningto\\components\\Loading.js';


function Loading() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        { style: Styles.root, __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        '\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E...'
    );
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__ = __webpack_require__("material-ui/Snackbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar__);
var _jsxFileName = 'c:\\github\\ningto\\components\\NotifyBar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NotifyBar = function (_React$Component) {
  _inherits(NotifyBar, _React$Component);

  function NotifyBar() {
    _classCallCheck(this, NotifyBar);

    return _possibleConstructorReturn(this, (NotifyBar.__proto__ || Object.getPrototypeOf(NotifyBar)).apply(this, arguments));
  }

  _createClass(NotifyBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          text = _props.text;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_material_ui_Snackbar___default.a, {
          anchorOrigin: { vertical: 'top', horizontal: 'center' },
          open: open,
          onRequestClose: this.props.notifyBarRequestClose,
          SnackbarContentProps: {
            'aria-describedby': 'message-id'
          },
          message: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            { id: 'message-id', __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            text
          ),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        })
      );
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui__ = __webpack_require__("material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons__ = __webpack_require__("material-ui-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons__);
var _jsxFileName = 'c:\\github\\ningto\\components\\Pagination.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (page) {
      _this.props.gotoPage(page);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Pagination, [{
    key: 'render',
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        page && prevPage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui__["IconButton"],
          { className: classes.button, disabled: page === 1, onClick: function onClick() {
              return _this2.onClick(prevPage);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons__["KeyboardArrowLeft"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          })
        ),
        pageNumbers && pageNumbers.map(function (number, index) {
          if (number === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_material_ui__["Button"],
              { key: index, className: classes.button, onClick: function onClick() {
                  return _this2.onClick(morePage);
                }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              '...'
            );
          } else {
            if (number === page) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui__["Button"],
                { key: index, className: classes.button, onClick: function onClick() {
                    return _this2.onClick(number);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  }
                },
                number
              );
            } else {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_material_ui__["Button"],
                { key: index, className: classes.button, onClick: function onClick() {
                    return _this2.onClick(number);
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  }
                },
                number
              );
            }
          }
        }),
        page && lastPage && nextPage && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui__["IconButton"],
          { className: classes.button, disabled: page === lastPage, onClick: function onClick() {
              return _this2.onClick(nextPage);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_icons__["KeyboardArrowRight"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          })
        )
      );
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(Pagination));

/***/ }),

/***/ "./containers/MainLayout/LeftSidebar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader__ = __webpack_require__("material-ui/List/ListSubheader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_transitions_Collapse__ = __webpack_require__("material-ui/transitions/Collapse");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_transitions_Collapse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_transitions_Collapse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons__ = __webpack_require__("material-ui-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_router__);
var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\LeftSidebar\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










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

var LeftSidebar = function (_React$Component) {
  _inherits(LeftSidebar, _React$Component);

  function LeftSidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LeftSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LeftSidebar.__proto__ || Object.getPrototypeOf(LeftSidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: true }, _this.handleClick = function (url) {
      window.open(url);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LeftSidebar, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default.a,
        { className: classes.root, subheader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            'ningto.com'
          ), __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
          { button: true, onClick: this.handleClick.bind(this, 'http://ningto.com'), __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemIcon"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons__["Home"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { inset: true, primary: '\u4E3B\u9875', __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
          { button: true, onClick: this.handleClick.bind(this, 'http://ningto.com/about'), __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemIcon"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons__["AccountBox"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { inset: true, primary: '\u5173\u4E8E', __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
          { button: true, onClick: this.handleClick.bind(this, 'http://ningto.com/archives'), __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemIcon"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons__["Archive"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { inset: true, primary: '\u5F52\u6863', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
          { button: true, onClick: this.handleClick.bind(this, 'http://ningto.com/search'), __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemIcon"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons__["Search"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { inset: true, primary: '\u641C\u7D22', __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
          { button: true, onClick: function onClick() {
              return __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push('/program');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemIcon"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons__["GetApp"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { inset: true, primary: '\u5C0F\u7A0B\u5E8F', __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
          { button: true, onClick: function onClick() {
              return __WEBPACK_IMPORTED_MODULE_7_next_router___default.a.push('/post?id=59edecd82be91645212c9981');
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemIcon"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_material_ui_icons__["Favorite"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { inset: true, primary: '\u4E66\u7B7E', __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_transitions_Collapse___default.a,
          { component: 'li', 'in': this.state.open, transitionduration: 'auto', unmountOnExit: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default.a,
            { disablePadding: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
              { button: true, className: classes.nested, onClick: this.handleClick.bind(this, 'http://ningto.com/mdviewer'), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { primary: 'Markdown\u9884\u89C8', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 60
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
              { button: true, className: classes.nested, onClick: this.handleClick.bind(this, 'http://ningto.com/upload.html'), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 62
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { primary: '\u4E0A\u4F20\u56FE\u7247', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 63
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
              { button: true, className: classes.nested, onClick: this.handleClick.bind(this, 'http://ningto.com/react-wchathot'), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { primary: '\u5FAE\u4FE1\u6587\u7AE0\u7CBE\u9009', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 66
                }
              })
            )
          )
        )
      );
    }
  }]);

  return LeftSidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

LeftSidebar.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(LeftSidebar));

/***/ }),

/***/ "./containers/MainLayout/RightSidebar/Group.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader__ = __webpack_require__("material-ui/List/ListSubheader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Card__ = __webpack_require__("material-ui/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Card__);
var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\RightSidebar\\Group.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








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

var Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          data = _props.data;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_material_ui_Card___default.a,
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5_material_ui_Card__["CardContent"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_material_ui_List___default.a,
            { dense: true, subheader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_material_ui_List_ListSubheader___default.a,
                { className: classes.subHeader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  }
                },
                data.title
              ), __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            data.list && data.list.map(function (post, index) {
              var title = post.title;
              if (post.subTitle) {
                title += ' (' + post.subTitle + ')';
              }
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItem"],
                { key: index, className: classes.listItem, onClick: data.onItemClick.bind(data, index), button: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_List__["ListItemText"], { primary: title, className: classes.listItemText, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                })
              );
            })
          )
        )
      );
    }
  }]);

  return Group;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Group.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(Group));

/***/ }),

/***/ "./containers/MainLayout/RightSidebar/ProfileCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__ = __webpack_require__("material-ui/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__);
var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\RightSidebar\\ProfileCard.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var ProfileCard = function (_React$Component) {
  _inherits(ProfileCard, _React$Component);

  function ProfileCard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ProfileCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProfileCard.__proto__ || Object.getPrototypeOf(ProfileCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: true }, _this.handleClick = function () {
      _this.setState({ open: !_this.state.open });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProfileCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          profile = _props.profile;

      var hits = [{ name: '文章数', count: profile.postCount || 100 }, { name: '总访问量', count: profile.hitCount || 54321 }, { name: '今日访问', count: profile.hitToday || 321 }];

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default.a,
        { className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: classes.row, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: 'https://github.com/tujiaw', __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: classes.img, alt: 'avatar', src: 'http://ningto.com/img/myavatar.jpg', __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: classes.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: classes.mainTitle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                }
              },
              'ningto.com'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: classes.subTitle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29
                }
              },
              'Keep it simple,stupid'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: classes.row, __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          },
          hits.map(function (item, index) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: index, className: classes.counter, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: classes.counterTitle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                  }
                },
                item.name
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: classes.counterNum, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                item.count
              )
            );
          })
        )
      );
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(ProfileCard));

/***/ }),

/***/ "./containers/MainLayout/RightSidebar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui__ = __webpack_require__("material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ProfileCard__ = __webpack_require__("./containers/MainLayout/RightSidebar/ProfileCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Group__ = __webpack_require__("./containers/MainLayout/RightSidebar/Group.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_utils__ = __webpack_require__("./common/utils.js");
var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\RightSidebar\\index.js';










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
            __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({ pathname: '/post', query: { id: hotData.list[index]._id } });
        };
    }
    if (tagsCount) {
        tagData.title = '文章分类';
        tagData.list = tagsCount.map(function (item) {
            return { title: item.name, subTitle: item.count, keyword: item.name };
        });
        tagData.onItemClick = function (index) {
            __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({ pathname: '/title', query: {
                    type: 'tag',
                    keyword: tagData.list[index].keyword
                } });
        };
    }
    if (archives) {
        archiveData.title = '文章归档';
        archiveData.list = archives.map(function (item) {
            var year = item.yearMonth.substr(0, 4);
            var month = item.yearMonth.substr(5);
            return { title: year + '\u5E74' + month + '\u6708', subTitle: item.count, keyword: item.yearMonth };
        });
        archiveData.onItemClick = function (index) {
            __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push({ pathname: '/title', query: {
                    type: 'yearMonth',
                    keyword: archiveData.list[index].keyword
                } });
        };
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui__["Grid"],
        { item: true, xs: 4, className: classes.root, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
            }
        },
        profile && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ProfileCard__["a" /* default */], { profile: profile, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
            }
        }),
        !__WEBPACK_IMPORTED_MODULE_7__common_utils__["a" /* default */].isEmptyObject(hotData) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Group__["a" /* default */], { data: hotData, __source: {
                fileName: _jsxFileName,
                lineNumber: 52
            }
        }),
        !__WEBPACK_IMPORTED_MODULE_7__common_utils__["a" /* default */].isEmptyObject(tagData) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Group__["a" /* default */], { data: tagData, __source: {
                fileName: _jsxFileName,
                lineNumber: 53
            }
        }),
        !__WEBPACK_IMPORTED_MODULE_7__common_utils__["a" /* default */].isEmptyObject(archiveData) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Group__["a" /* default */], { data: archiveData, __source: {
                fileName: _jsxFileName,
                lineNumber: 54
            }
        })
    );
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(RightSideBar));

/***/ }),

/***/ "./containers/MainLayout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui__ = __webpack_require__("material-ui");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_Menu__ = __webpack_require__("material-ui-icons/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_icons_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_icons_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Home__ = __webpack_require__("material-ui-icons/Home");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Home___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Home__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose_compose__ = __webpack_require__("recompose/compose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_utils_withWidth__ = __webpack_require__("material-ui/utils/withWidth");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_utils_withWidth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_utils_withWidth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_AppSearch__ = __webpack_require__("./components/AppSearch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Github__ = __webpack_require__("./components/Github.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Pagination__ = __webpack_require__("./components/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_NotifyBar__ = __webpack_require__("./components/NotifyBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_Back2top__ = __webpack_require__("./components/Back2top.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__common_utils__ = __webpack_require__("./common/utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__common_config__ = __webpack_require__("./common/config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__LeftSidebar__ = __webpack_require__("./containers/MainLayout/LeftSidebar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__RightSidebar__ = __webpack_require__("./containers/MainLayout/RightSidebar/index.js");
var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }























var MainLayout = function (_React$Component) {
  _inherits(MainLayout, _React$Component);

  function MainLayout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MainLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      left: false,
      notifyBarOpen: false,
      notifyBarText: ''
    }, _this.toggleDrawer = function (side, open) {
      return function () {
        _this.setState(_defineProperty({}, side, open));
      };
    }, _this.contentSpacing = function (props) {
      if (window && window.isMobile && window.isMobile.any()) {
        return 12;
      }
      var size = { 'xs': 10, 'sm': 10, 'md': 7, 'lg': 6, 'xl': 6 };
      return size[props.width] || 10;
    }, _this.onHome = function () {
      __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push('/');
    }, _this.onGithub = function () {
      window.open('https://github.com/tujiaw');
    }, _this.notifyBarRequestClose = function () {
      _this.setState({ notifyBarOpen: false });
    }, _this.handleSearch = function (keyword) {
      console.log('app.js keyword:' + keyword);
      if (keyword.length === 0) {
        __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push('/');
      } else if (keyword.length === 1) {
        _this.setState({ notifyBarOpen: true, notifyBarText: '请至少输入两个字符！！！' });
      } else if (keyword.length > 1) {
        __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push({ pathname: '/title', query: { type: 'search', keyword: keyword } });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MainLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.instance.appendChild(__WEBPACK_IMPORTED_MODULE_15__common_utils__["a" /* default */].createScript(__WEBPACK_IMPORTED_MODULE_16__common_config__["a" /* default */].BAIDU_SHARE));

      if (window.localStorage) {
        console.log('3435354545454');
      } else {
        console.log('3333333333333333333');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;


      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classes.root, ref: function ref(e) {
            return _this2.instance = e;
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__components_NotifyBar__["a" /* default */], { open: this.state.notifyBarOpen,
          text: this.state.notifyBarText,
          notifyBarRequestClose: this.notifyBarRequestClose,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_Back2top__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_material_ui__["Drawer"],
          { open: this.state.left, onClose: this.toggleDrawer('left', false), __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              tabIndex: 0,
              role: 'button',
              onClick: this.toggleDrawer('left', false),
              onKeyDown: this.toggleDrawer('left', false),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__LeftSidebar__["a" /* default */], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_material_ui__["AppBar"],
          { className: classes.appBar, __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_material_ui__["Toolbar"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 98
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_material_ui__["IconButton"],
              {
                color: 'inherit',
                'aria-label': 'open drawer',
                onClick: this.toggleDrawer('left', true),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 99
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_icons_Menu___default.a, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_material_ui__["Typography"],
              { type: 'title', color: 'inherit', className: classes.title, noWrap: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 106
                }
              },
              '\u6CDE\u9014 - ningto.com'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_AppSearch__["a" /* default */], { onRequestSearch: this.handleSearch, __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_material_ui__["IconButton"],
              { color: 'inherit', 'aria-label': '\u4E3B\u9875', onClick: this.onHome, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_icons_Home___default.a, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 111
                }
              })
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_material_ui__["IconButton"],
              { color: 'inherit', 'aria-label': 'github', onClick: this.onGithub, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 113
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Github__["a" /* default */], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                }
              })
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_material_ui__["Grid"],
          { container: true, justify: 'center', item: true, xs: 12, __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'main',
            { className: classes.content, __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_3_material_ui__["Grid"],
              { container: true, justify: 'center', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 120
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_material_ui__["Grid"],
                { className: classes.children, item: true, xs: this.contentSpacing(this.props), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  }
                },
                this.props.children
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_3_material_ui__["Hidden"],
                { smDown: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                  }
                },
                this.props.rightSidebarData ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__RightSidebar__["a" /* default */], { data: this.props.rightSidebarData, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                  }
                }) : null
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_Footer__["a" /* default */], {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 128
                }
              })
            )
          )
        )
      );
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

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_6_recompose_compose___default()(Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles, { withTheme: true }), __WEBPACK_IMPORTED_MODULE_7_material_ui_utils_withWidth___default()())(MainLayout));

/***/ }),

/***/ "./containers/PostCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__ = __webpack_require__("material-ui/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button__ = __webpack_require__("material-ui/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Chip__ = __webpack_require__("material-ui/Chip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Chip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Chip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__ = __webpack_require__("material-ui/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_objectId__ = __webpack_require__("./common/objectId.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_router__);
var _jsxFileName = 'c:\\github\\ningto\\containers\\PostCard.js';











function PostCard(props) {
  var classes = props.classes,
      post = props.post;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_material_ui_Card___default.a,
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardContent"],
      { className: classes.cardContent, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
        { type: 'body1', className: classes.subTitle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_7__common_objectId__["a" /* default */].toDatetime(post._id),
        ' \u9605\u8BFB(',
        post.pv,
        ')'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
        { type: 'headline', component: 'h2', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8_next_link___default.a,
          { href: '/post?id=' + post._id, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { className: classes.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            post.title
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: classes.chipGroup, __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          }
        },
        post.tags && post.tags.map(function (tag, index) {
          return tag.length ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_Chip___default.a, { key: index, className: classes.chip, label: tag, __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          }) : null;
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_material_ui_Typography___default.a,
        { component: 'p', className: classes.content, __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        post.content
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui_Card__["CardActions"],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_material_ui_Button___default.a,
        { dense: true, onClick: function onClick() {
            __WEBPACK_IMPORTED_MODULE_9_next_router___default.a.push('/post?id=' + post._id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        },
        '\u9605\u8BFB\u5168\u6587 \xBB'
      )
    )
  );
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["withStyles"])(styles)(PostCard));

/***/ }),

/***/ "./containers/PostCardList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List__ = __webpack_require__("material-ui/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Loading__ = __webpack_require__("./components/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PostCard__ = __webpack_require__("./containers/PostCard.js");
var _jsxFileName = 'c:\\github\\ningto\\containers\\PostCardList.js';







function PostCardList(props) {
  var classes = props.classes,
      posts = props.posts;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: classes.root, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_material_ui_List___default.a,
      { className: classes.list, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      posts ? posts.map(function (post, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_List__["ListItem"],
          { key: index, className: classes.listItem, __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__PostCard__["a" /* default */], { post: post, __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          })
        );
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Loading__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })
    )
  );
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

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_material_ui_styles__["withStyles"])(styles)(PostCardList));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__("react-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("material-ui/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_MainLayout__ = __webpack_require__("./containers/MainLayout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_PostCardList__ = __webpack_require__("./containers/PostCardList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Pagination__ = __webpack_require__("./components/Pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_net__ = __webpack_require__("./common/net.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);


var _jsxFileName = 'c:\\github\\ningto\\pages\\index.js',
    _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Index = function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      theme: Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["createMuiTheme"])({
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
    }, _this.gotoPage = function (page) {
      __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push({ pathname: '/', query: { page: page } });
    }, _this.HomePage = function () {
      if (_this.props.postsData && _this.props.postsData.posts) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_PostCardList__["a" /* default */], { posts: _this.props.postsData.posts, __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Pagination__["a" /* default */], { data: _this.props.postsData, gotoPage: _this.gotoPage, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          })
        );
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'h1',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          'loadding...'
        );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["MuiThemeProvider"],
        { theme: this.state.theme, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__containers_MainLayout__["a" /* default */],
          { rightSidebarData: this.props.rightSidebarData, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          },
          this.HomePage()
        )
      );
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Index.getInitialProps = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(context) {
    var page, result;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = context.query.page || 1;
            _context.next = 3;
            return __WEBPACK_IMPORTED_MODULE_7__common_net__["a" /* default */].getPosts(page);

          case 3:
            result = _context.sent;
            return _context.abrupt('return', { rightSidebarData: result.rightSidebarData, postsData: result });

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "material-ui":
/***/ (function(module, exports) {

module.exports = require("material-ui");

/***/ }),

/***/ "material-ui-icons":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons");

/***/ }),

/***/ "material-ui-icons/Home":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Home");

/***/ }),

/***/ "material-ui-icons/Menu":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Menu");

/***/ }),

/***/ "material-ui-icons/Search":
/***/ (function(module, exports) {

module.exports = require("material-ui-icons/Search");

/***/ }),

/***/ "material-ui/Button":
/***/ (function(module, exports) {

module.exports = require("material-ui/Button");

/***/ }),

/***/ "material-ui/Card":
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),

/***/ "material-ui/Chip":
/***/ (function(module, exports) {

module.exports = require("material-ui/Chip");

/***/ }),

/***/ "material-ui/List":
/***/ (function(module, exports) {

module.exports = require("material-ui/List");

/***/ }),

/***/ "material-ui/List/ListSubheader":
/***/ (function(module, exports) {

module.exports = require("material-ui/List/ListSubheader");

/***/ }),

/***/ "material-ui/Snackbar":
/***/ (function(module, exports) {

module.exports = require("material-ui/Snackbar");

/***/ }),

/***/ "material-ui/SvgIcon":
/***/ (function(module, exports) {

module.exports = require("material-ui/SvgIcon");

/***/ }),

/***/ "material-ui/Typography":
/***/ (function(module, exports) {

module.exports = require("material-ui/Typography");

/***/ }),

/***/ "material-ui/styles":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles");

/***/ }),

/***/ "material-ui/styles/colorManipulator":
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colorManipulator");

/***/ }),

/***/ "material-ui/transitions/Collapse":
/***/ (function(module, exports) {

module.exports = require("material-ui/transitions/Collapse");

/***/ }),

/***/ "material-ui/utils/withWidth":
/***/ (function(module, exports) {

module.exports = require("material-ui/utils/withWidth");

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

/***/ "react-dom":
/***/ (function(module, exports) {

module.exports = require("react-dom");

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