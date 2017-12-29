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

var _styles = require('material-ui/styles');

var _materialUi = require('material-ui');

var _materialUiIcons = require('material-ui-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function (_React$Component) {
  (0, _inherits3.default)(Pagination, _React$Component);

  function Pagination() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Pagination);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (page) {
      _this.props.gotoPage(page);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Pagination, [{
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

      return _react2.default.createElement('div', { className: classes.root }, page && prevPage && _react2.default.createElement(_materialUi.IconButton, { className: classes.button, disabled: page === 1, onClick: function onClick() {
          return _this2.onClick(prevPage);
        } }, _react2.default.createElement(_materialUiIcons.KeyboardArrowLeft, null)), pageNumbers && pageNumbers.map(function (number, index) {
        if (number === 0) {
          return _react2.default.createElement(_materialUi.Button, { key: index, className: classes.button, onClick: function onClick() {
              return _this2.onClick(morePage);
            } }, '...');
        } else {
          if (number === page) {
            return _react2.default.createElement(_materialUi.Button, { key: index, color: 'accent', className: classes.button, onClick: function onClick() {
                return _this2.onClick(number);
              } }, number);
          } else {
            return _react2.default.createElement(_materialUi.Button, { key: index, className: classes.button, onClick: function onClick() {
                return _this2.onClick(number);
              } }, number);
          }
        }
      }), page && lastPage && nextPage && _react2.default.createElement(_materialUi.IconButton, { className: classes.button, disabled: page === lastPage, onClick: function onClick() {
          return _this2.onClick(nextPage);
        } }, _react2.default.createElement(_materialUiIcons.KeyboardArrowRight, null)));
    }
  }]);

  return Pagination;
}(_react2.default.Component);

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

exports.default = (0, _styles.withStyles)(styles)(Pagination);