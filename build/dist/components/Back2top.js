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
      var scrollTop = event.srcElement.body.scrollTop;
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
      return this.state.visible ? _react2.default.createElement('div', { style: Styles.root, onClick: this.onClick }, '\u56DE\u5230\u9876\u90E8') : null;
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