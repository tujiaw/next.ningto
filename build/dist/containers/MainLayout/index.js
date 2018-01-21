'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _AppSearch = require('../../components/AppSearch');

var _AppSearch2 = _interopRequireDefault(_AppSearch);

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

var _utils = require('../../common/utils');

var _utils2 = _interopRequireDefault(_utils);

var _config = require('../../common/config');

var _config2 = _interopRequireDefault(_config);

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
      if (_utils2.default.mobile()) {
        return 12;
      }
      var size = { 'xs': 10, 'sm': 10, 'md': 7, 'lg': 6, 'xl': 6 };
      return size[props.width] || 10;
    }, _this.onHome = function () {
      _index2.default.push('/');
    }, _this.onGithub = function () {
      window.open('https://github.com/tujiaw');
    }, _this.notifyBarRequestClose = function () {
      _this.setState({ notifyBarOpen: false });
    }, _this.handleSearch = function (keyword) {
      console.log('app.js keyword:' + keyword);
      if (keyword.length === 0) {
        _index2.default.push('/');
      } else if (keyword.length === 1) {
        _this.setState({ notifyBarOpen: true, notifyBarText: '请至少输入两个字符！！！' });
      } else if (keyword.length > 1) {
        _index2.default.push({ pathname: '/title', query: { type: 'search', keyword: keyword } });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MainLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.instance.appendChild(_utils2.default.createScript(_config2.default.BAIDU_SHARE));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;

      return _react2.default.createElement('div', { className: classes.root, ref: function ref(e) {
          return _this2.instance = e;
        } }, _react2.default.createElement(_NotifyBar2.default, { open: this.state.notifyBarOpen,
        text: this.state.notifyBarText,
        notifyBarRequestClose: this.notifyBarRequestClose
      }), _react2.default.createElement(_Back2top2.default, null), _react2.default.createElement(_materialUi.Drawer, { open: this.state.left, onClose: this.toggleDrawer('left', false) }, _react2.default.createElement('div', {
        tabIndex: 0,
        role: 'button',
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false)
      }, _react2.default.createElement(_LeftSidebar2.default, null))), _react2.default.createElement(_materialUi.AppBar, { className: classes.appBar }, _react2.default.createElement(_materialUi.Toolbar, null, _react2.default.createElement(_materialUi.IconButton, {
        color: 'contrast',
        'aria-label': 'open drawer',
        onClick: this.toggleDrawer('left', true)
      }, _react2.default.createElement(_Menu2.default, null)), _react2.default.createElement(_materialUi.Typography, { type: 'title', color: 'inherit', className: classes.title, noWrap: true }, '\u6CDE\u9014 - ningto.com'), _react2.default.createElement(_AppSearch2.default, { onRequestSearch: this.handleSearch }), _react2.default.createElement(_materialUi.IconButton, { color: 'contrast', 'aria-label': '\u4E3B\u9875', onClick: this.onHome }, _react2.default.createElement(_Home2.default, null)), _react2.default.createElement(_materialUi.IconButton, { color: 'contrast', 'aria-label': 'github', onClick: this.onGithub }, _react2.default.createElement(_Github2.default, null)))), _react2.default.createElement(_materialUi.Grid, { container: true, justify: 'center', item: true, xs: 12 }, _react2.default.createElement('main', { className: classes.content }, _react2.default.createElement(_materialUi.Grid, { container: true, justify: 'center' }, _react2.default.createElement(_materialUi.Grid, { className: classes.children, item: true, xs: this.contentSpacing(this.props) }, this.props.children), _react2.default.createElement(_materialUi.Hidden, { smDown: true }, this.props.rightSidebarData ? _react2.default.createElement(_RightSidebar2.default, { data: this.props.rightSidebarData }) : null), _react2.default.createElement(_Footer2.default, null)))));
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
      // background: theme.palette.grey[400],
      backgroundColor: 'rgb(231, 238, 244)'
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
    content: (0, _defineProperty3.default)({
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

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles, { withTheme: true }), (0, _withWidth2.default)())(MainLayout);