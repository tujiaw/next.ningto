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

var _jsxFileName = 'c:\\github\\ningto\\components\\NotifyBar.js';


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

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_Snackbar2.default, {
        anchorOrigin: { vertical: 'top', horizontal: 'center' },
        open: open,
        onRequestClose: this.props.notifyBarRequestClose,
        SnackbarContentProps: {
          'aria-describedby': 'message-id'
        },
        message: _react2.default.createElement('span', { id: 'message-id', __source: {
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
}(_react2.default.Component);

exports.default = NotifyBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5vdGlmeUJhci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNuYWNrYmFyIiwiTm90aWZ5QmFyIiwicHJvcHMiLCJvcGVuIiwidGV4dCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm5vdGlmeUJhclJlcXVlc3RDbG9zZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0ksQUFFRDs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ2dCLEtBRGhCLEFBQ3FCO1VBRHJCLEFBQ0MsY0FERCxBQUNDO1VBREQsQUFDTyxjQURQLEFBQ08sQUFDZDs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO3NCQUNlLEVBQUUsVUFBRixBQUFZLE9BQU8sWUFEbkMsQUFDZ0IsQUFBK0IsQUFDN0M7Y0FGRixBQUVRLEFBQ047d0JBQWdCLEtBQUEsQUFBSyxNQUh2QixBQUc2QixBQUMzQjs7OEJBSkYsQUFJd0IsQUFDQSxBQUV0QjtBQUhzQixBQUNwQjtpQ0FFTyxjQUFBLFVBQU0sSUFBTixBQUFTO3NCQUFUO3dCQUFBLEFBQXVCO0FBQXZCO1NBQUEsRUFQWCxBQU9XOztvQkFQWDtzQkFGSixBQUNFLEFBQ0UsQUFXTDtBQVhLO0FBQ0U7Ozs7O0VBTmMsZ0JBQU0sQSxBQW1COUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTm90aWZ5QmFyLmpzIiwic291cmNlUm9vdCI6ImM6L2dpdGh1Yi9uaW5ndG8ifQ==