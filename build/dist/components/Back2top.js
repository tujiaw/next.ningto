'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../common/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\components\\Back2top.js';


var Back2top = function (_React$Component) {
  (0, _inherits3.default)(Back2top, _React$Component);

  function Back2top() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Back2top);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Back2top.__proto__ || (0, _getPrototypeOf2.default)(Back2top)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
      _utils2.default.scroll2top();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Back2top, [{
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
      return this.state.visible ? _react2.default.createElement('div', { style: Styles.root, onClick: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, '\u56DE\u5230\u9876\u90E8') : null;
    }
  }]);

  return Back2top;
}(_react2.default.Component);

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

exports.default = Back2top;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEJhY2sydG9wLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXRpbHMiLCJCYWNrMnRvcCIsInN0YXRlIiwidmlzaWJsZSIsIm9uU2Nyb2xsIiwiZXZlbnQiLCJzY3JvbGxUb3AiLCJzcmNFbGVtZW50IiwiYm9keSIsInNjcm9sbCIsInBhZ2VZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRTdGF0ZSIsIm9uQ2xpY2siLCJzY3JvbGwydG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTdHlsZXMiLCJyb290IiwiQ29tcG9uZW50Iiwid2lkdGgiLCJjb2xvciIsInBhZGRpbmciLCJwb3NpdGlvbiIsInJpZ2h0IiwiYm90dG9tIiwiY3Vyc29yIiwidGV4dEFsaWduIiwiekluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7OztJLEFBRVo7Ozs7Ozs7Ozs7Ozs7O2dOLEFBQ0o7ZUFBUSxBQUNHLEE7QUFESCxBQUNOLGFBR0YsQSxXQUFXLFVBQUEsQUFBQyxPQUFVLEFBQ3BCO1VBQUksWUFBSixBQUFnQixBQUNoQjtVQUFJLE1BQUosQUFBVSxZQUFZLEFBQ3BCO29CQUFZLE1BQUEsQUFBTSxXQUFOLEFBQWlCLEtBQTdCLEFBQWtDLEFBQ25DO0FBRkQsYUFFTyxJQUFJLE1BQUosQUFBVSxRQUFRLEFBQ3ZCO0FBQ0E7b0JBQVksTUFBQSxBQUFNLE9BQWxCLEFBQXlCLEFBQzFCO0FBQ0Q7VUFBSSxjQUFKLEFBQWtCLEdBQUcsQUFDbkI7b0JBQVksU0FBQSxBQUFTLGdCQUFyQixBQUFxQyxBQUN0QztBQUNEO1lBQUEsQUFBSyxTQUFTLEVBQUUsU0FBUyxZQUF6QixBQUFjLEFBQXVCLEFBQ3RDO0EsYUFVRCxBLFVBQVUsWUFBTSxBQUNkO3NCQUFBLEFBQU0sQUFDUDtBOzs7Ozt3Q0FWbUIsQUFDbEI7YUFBQSxBQUFPLGlCQUFQLEFBQXdCLFVBQVUsS0FBbEMsQUFBdUMsVUFBdkMsQUFBaUQsQUFDbEQ7Ozs7MkNBRXNCLEFBQ3JCO2FBQUEsQUFBTyxvQkFBUCxBQUEyQixVQUFVLEtBQXJDLEFBQTBDLFVBQTFDLEFBQW9ELEFBQ3JEOzs7OzZCQU1RLEFBQ1A7YUFBTyxLQUFBLEFBQUssTUFBTCxBQUFXLDBCQUFVLGNBQUEsU0FBSyxPQUFPLE9BQVosQUFBbUIsTUFBTSxTQUFTLEtBQWxDLEFBQXVDO29CQUF2QztzQkFBQTtBQUFBO09BQUEsRUFBckIsQUFBcUIsOEJBQTVCLEFBQXlGLEFBQzFGOzs7OztFQWpDb0IsZ0JBQU0sQTs7QUFvQzdCLElBQU07O1dBQ0UsQUFDRyxBQUNQO1dBRkksQUFFRyxBQUNQO2FBSEksQUFHSyxBQUNUO2NBSkksQUFJTSxBQUNWO1dBTEksQUFLRyxBQUNQO1lBTkksQUFNSSxBQUNSO1lBUEksQUFPSSxBQUNSO2VBUkksQUFRTyxBQUNYO1lBVEksQUFTSSxBQUNSO3FCQVZJLEFBVWEsQUFDakI7a0JBWkosQUFBZSxBQUNQLEFBV1UsQUFJbEI7QUFmUSxBQUNKO0FBRlcsQUFDYjs7a0JBZUYsQUFBZSIsImZpbGUiOiJCYWNrMnRvcC5qcyIsInNvdXJjZVJvb3QiOiJjOi9naXRodWIvbmluZ3RvIn0=