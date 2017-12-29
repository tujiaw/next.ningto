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

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotifyBar = function (_React$Component) {
  (0, _inherits3.default)(NotifyBar, _React$Component);

  function NotifyBar() {
    (0, _classCallCheck3.default)(this, NotifyBar);

    return (0, _possibleConstructorReturn3.default)(this, (NotifyBar.__proto__ || (0, _getPrototypeOf2.default)(NotifyBar)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotifyBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          open = _props.open,
          text = _props.text;

      return _react2.default.createElement('div', null, _react2.default.createElement(_Snackbar2.default, {
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
        open: open,
        onRequestClose: this.props.notifyBarRequestClose,
        SnackbarContentProps: {
          'aria-describedby': 'message-id'
        },
        message: _react2.default.createElement('span', { id: 'message-id' }, text)
      }));
    }
  }]);

  return NotifyBar;
}(_react2.default.Component);

exports.default = NotifyBar;