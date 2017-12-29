'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _materialUi = require('material-ui');

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Home = require('material-ui-icons/Home');

var _Home2 = _interopRequireDefault(_Home);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _withWidth = require('material-ui/utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _materialUiIcons = require('material-ui-icons');

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _Github = require('../../components/Github');

var _Github2 = _interopRequireDefault(_Github);

var _Pagination = require('../../components/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _NotifyBar = require('../../components/NotifyBar');

var _NotifyBar2 = _interopRequireDefault(_NotifyBar);

var _Back2top = require('../../components/Back2top');

var _Back2top2 = _interopRequireDefault(_Back2top);

var _Footer = require('../../components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _LeftSidebar = require('./LeftSidebar');

var _LeftSidebar2 = _interopRequireDefault(_LeftSidebar);

var _RightSidebar = require('./RightSidebar');

var _RightSidebar2 = _interopRequireDefault(_RightSidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainLayout = function (_React$Component) {
  (0, _inherits3.default)(MainLayout, _React$Component);

  function MainLayout() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MainLayout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MainLayout.__proto__ || (0, _getPrototypeOf2.default)(MainLayout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      left: false,
      notifyBarOpen: false,
      notifyBarText: ''
    }, _this.toggleDrawer = function (side, open) {
      return function () {
        _this.setState((0, _defineProperty3.default)({}, side, open));
      };
    }, _this.contentSpacing = function (props) {
      if (props.width === 'xs') {
        return 12;
      } else if (props.width === 'sm') {
        return 10;
      } else {
        return 8;
      }
    }, _this.onHome = function () {
      _index2.default.push('/');
    }, _this.notifyBarRequestClose = function () {
      _this.setState({ notifyBarOpen: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MainLayout, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      return _react2.default.createElement('div', { className: classes.root }, _react2.default.createElement(_NotifyBar2.default, { open: this.state.notifyBarOpen,
        text: this.state.notifyBarText,
        notifyBarRequestClose: this.notifyBarRequestClose
      }), _react2.default.createElement(_Back2top2.default, null), _react2.default.createElement(_materialUi.Drawer, { open: this.state.left, onRequestClose: this.toggleDrawer('left', false) }, _react2.default.createElement('div', {
        tabIndex: 0,
        role: 'button',
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false)
      }, _react2.default.createElement(_LeftSidebar2.default, null))), _react2.default.createElement(_materialUi.AppBar, { className: classes.appBar }, _react2.default.createElement(_materialUi.Toolbar, null, _react2.default.createElement(_materialUi.IconButton, {
        color: 'contrast',
        'aria-label': 'open drawer',
        onClick: this.toggleDrawer('left', true)
      }, _react2.default.createElement(_Menu2.default, null)), _react2.default.createElement(_materialUi.Typography, { type: 'title', color: 'inherit', className: classes.title, noWrap: true }, '3inns.cn'), _react2.default.createElement(_materialUi.IconButton, { color: 'contrast', 'aria-label': '\u4E3B\u9875', onClick: this.onHome }, _react2.default.createElement(_Home2.default, null)), _react2.default.createElement(_materialUi.IconButton, { color: 'contrast', 'aria-label': '\u5F00\u5173\u706F', onClick: this.props.onLight }, _react2.default.createElement(_materialUiIcons.LightbulbOutline, null)), _react2.default.createElement(_materialUi.IconButton, { color: 'contrast', 'aria-label': 'github', onClick: this.onGithub }, _react2.default.createElement(_Github2.default, null)))), _react2.default.createElement(_materialUi.Grid, { container: true, justify: 'center' }, _react2.default.createElement(_materialUi.Grid, { item: true, xs: 10 }, _react2.default.createElement('main', { className: classes.content }, _react2.default.createElement(_materialUi.Grid, { container: true, justify: 'center' }, _react2.default.createElement(_materialUi.Grid, { item: true, xs: this.contentSpacing(this.props) }, this.props.children), _react2.default.createElement(_materialUi.Hidden, { smDown: true }, _react2.default.createElement(_RightSidebar2.default, { data: this.props.postsData })))))), (0, _keys2.default)(this.props.postsData).length ? _react2.default.createElement(_Footer2.default, null) : null);
    }
  }]);

  return MainLayout;
}(_react2.default.Component);

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      height: '100%',
      zIndex: 1,
      overflow: 'hidden',
      background: theme.palette.grey[400]
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
    navIconHide: (0, _defineProperty3.default)({}, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    content: (0, _defineProperty3.default)({
      // backgroundColor: theme.palette.background.default,
      width: '100%',
      height: 'calc(100% - 60px)',
      marginTop: 60
    }, theme.breakpoints.up('md'), {
      height: 'calc(100% - 60px)',
      marginTop: 60
    }),
    side: {
      minWidth: 260,
      maxWidth: 260,
      marginTop: 20
    }
  };
};

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles, { withTheme: true }), (0, _withWidth2.default)())(MainLayout);