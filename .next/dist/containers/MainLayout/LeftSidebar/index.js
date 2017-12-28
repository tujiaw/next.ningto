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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _ListSubheader = require('material-ui/List/ListSubheader');

var _ListSubheader2 = _interopRequireDefault(_ListSubheader);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Collapse = require('material-ui/transitions/Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _materialUiIcons = require('material-ui-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _inherits3.default)(LeftSidebar, _React$Component);

  function LeftSidebar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LeftSidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LeftSidebar.__proto__ || (0, _getPrototypeOf2.default)(LeftSidebar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: true }, _this.handleClick = function (url) {
      window.open(url);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LeftSidebar, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement(_List2.default, { className: classes.root, subheader: _react2.default.createElement(_ListSubheader2.default, null, '3inns.cn') }, _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick.bind(this, 'http://3inns.cn') }, _react2.default.createElement(_List.ListItemIcon, null, _react2.default.createElement(_materialUiIcons.Home, null)), _react2.default.createElement(_List.ListItemText, { inset: true, primary: '\u4E3B\u9875' })), _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick.bind(this, 'http://3inns.cn/about') }, _react2.default.createElement(_List.ListItemIcon, null, _react2.default.createElement(_materialUiIcons.AccountBox, null)), _react2.default.createElement(_List.ListItemText, { inset: true, primary: '\u5173\u4E8E' })), _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick.bind(this, 'http://3inns.cn/archives') }, _react2.default.createElement(_List.ListItemIcon, null, _react2.default.createElement(_materialUiIcons.Archive, null)), _react2.default.createElement(_List.ListItemText, { inset: true, primary: '\u5F52\u6863' })), _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick.bind(this, 'http://3inns.cn/search') }, _react2.default.createElement(_List.ListItemIcon, null, _react2.default.createElement(_materialUiIcons.Search, null)), _react2.default.createElement(_List.ListItemText, { inset: true, primary: '\u641C\u7D22' })), _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick.bind(this, 'http://3inns.cn/program') }, _react2.default.createElement(_List.ListItemIcon, null, _react2.default.createElement(_materialUiIcons.GetApp, null)), _react2.default.createElement(_List.ListItemText, { inset: true, primary: '\u5C0F\u7A0B\u5E8F' })), _react2.default.createElement(_List.ListItem, { button: true, onClick: this.handleClick.bind(this, 'http://3inns.cn/post/59edecd82be91645212c9981') }, _react2.default.createElement(_List.ListItemIcon, null, _react2.default.createElement(_materialUiIcons.Favorite, null)), _react2.default.createElement(_List.ListItemText, { inset: true, primary: '\u4E66\u7B7E' })), _react2.default.createElement(_Collapse2.default, { component: 'li', 'in': this.state.open, transitionDuration: 'auto', unmountOnExit: true }, _react2.default.createElement(_List2.default, { disablePadding: true }, _react2.default.createElement(_List.ListItem, { button: true, className: classes.nested, onClick: this.handleClick.bind(this, 'http://3inns.cn/mdviewer') }, _react2.default.createElement(_List.ListItemText, { primary: 'Markdown\u9884\u89C8' })), _react2.default.createElement(_List.ListItem, { button: true, className: classes.nested, onClick: this.handleClick.bind(this, 'http://3inns.cn/upload.html') }, _react2.default.createElement(_List.ListItemText, { primary: '\u4E0A\u4F20\u56FE\u7247' })), _react2.default.createElement(_List.ListItem, { button: true, className: classes.nested, onClick: this.handleClick.bind(this, 'http://3inns.cn/react-wchathot') }, _react2.default.createElement(_List.ListItemText, { primary: '\u5FAE\u4FE1\u6587\u7AE0\u7CBE\u9009' })))));
    }
  }]);

  return LeftSidebar;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(LeftSidebar);