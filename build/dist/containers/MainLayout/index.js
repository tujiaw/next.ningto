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

var _index = require('next\\dist\\lib\\router\\index.js');

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

var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\index.js';


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
      if (window && window.isMobile && window.isMobile.any()) {
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
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_NotifyBar2.default, { open: this.state.notifyBarOpen,
        text: this.state.notifyBarText,
        notifyBarRequestClose: this.notifyBarRequestClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react2.default.createElement(_Back2top2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement(_materialUi.Drawer, { open: this.state.left, onClose: this.toggleDrawer('left', false), __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('div', {
        tabIndex: 0,
        role: 'button',
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_LeftSidebar2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }))), _react2.default.createElement(_materialUi.AppBar, { className: classes.appBar, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_materialUi.Toolbar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_materialUi.IconButton, {
        color: 'inherit',
        'aria-label': 'open drawer',
        onClick: this.toggleDrawer('left', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_Menu2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), _react2.default.createElement(_materialUi.Typography, { type: 'title', color: 'inherit', className: classes.title, noWrap: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, '\u6CDE\u9014 - ningto.com'), _react2.default.createElement(_AppSearch2.default, { onRequestSearch: this.handleSearch, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }), _react2.default.createElement(_materialUi.IconButton, { color: 'inherit', 'aria-label': '\u4E3B\u9875', onClick: this.onHome, __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement(_Home2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react2.default.createElement(_materialUi.IconButton, { color: 'inherit', 'aria-label': 'github', onClick: this.onGithub, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_Github2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })))), _react2.default.createElement(_materialUi.Grid, { container: true, justify: 'center', item: true, xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('main', { className: classes.content, __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_materialUi.Grid, { container: true, justify: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_materialUi.Grid, { className: classes.children, item: true, xs: this.contentSpacing(this.props), __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, this.props.children), _react2.default.createElement(_materialUi.Hidden, { smDown: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, this.props.rightSidebarData ? _react2.default.createElement(_RightSidebar2.default, { data: this.props.rightSidebarData, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }) : null), _react2.default.createElement(_Footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })))));
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

MainLayout.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles, { withTheme: true }), (0, _withWidth2.default)())(MainLayout);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE1haW5MYXlvdXRcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwid2l0aFN0eWxlcyIsIkFwcEJhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiSWNvbkJ1dHRvbiIsIkdyaWQiLCJIaWRkZW4iLCJEcmF3ZXIiLCJNZW51SWNvbiIsIkhvbWVJY29uIiwiY29tcG9zZSIsIndpdGhXaWR0aCIsIlJvdXRlciIsIkFwcFNlYXJjaCIsIkdpdGh1YiIsIlBhZ2luYXRpb24iLCJOb3RpZnlCYXIiLCJCYWNrMnRvcCIsIkZvb3RlciIsInV0aWxzIiwiY29uZmlnIiwiTGVmdFNpZGViYXIiLCJSaWdodFNpZGViYXIiLCJNYWluTGF5b3V0Iiwic3RhdGUiLCJsZWZ0Iiwibm90aWZ5QmFyT3BlbiIsIm5vdGlmeUJhclRleHQiLCJ0b2dnbGVEcmF3ZXIiLCJzaWRlIiwib3BlbiIsInNldFN0YXRlIiwiY29udGVudFNwYWNpbmciLCJwcm9wcyIsIndpbmRvdyIsImlzTW9iaWxlIiwiYW55Iiwic2l6ZSIsIndpZHRoIiwib25Ib21lIiwicHVzaCIsIm9uR2l0aHViIiwibm90aWZ5QmFyUmVxdWVzdENsb3NlIiwiaGFuZGxlU2VhcmNoIiwia2V5d29yZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJwYXRobmFtZSIsInF1ZXJ5IiwidHlwZSIsImluc3RhbmNlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVTY3JpcHQiLCJCQUlEVV9TSEFSRSIsImNsYXNzZXMiLCJyb290IiwiZSIsImFwcEJhciIsInRpdGxlIiwiY29udGVudCIsImNoaWxkcmVuIiwicmlnaHRTaWRlYmFyRGF0YSIsIkNvbXBvbmVudCIsInN0eWxlcyIsImhlaWdodCIsInpJbmRleCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwiYXBwRnJhbWUiLCJkaXNwbGF5IiwiZmxleCIsIm5hdkljb25IaWRlIiwidGhlbWUiLCJicmVha3BvaW50cyIsInVwIiwiYmdyaWdodCIsInRvcCIsInJpZ2h0IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwibWFyZ2luVG9wIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJ3aXRoVGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVEsQUFBUyxBQUN4QixBQUFZLEFBQU0sQUFBUTs7QUFFNUIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFFUCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBa0I7Ozs7Ozs7OztJQUVuQixBOzs7Ozs7Ozs7Ozs7OztvTkFDSixBO1lBQVEsQUFDQSxBQUNOO3FCQUZNLEFBRVMsQUFDZjtxQixBQUhNLEFBR1M7QUFIVCxBQUNOLGFBU0YsQSxlQUFlLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUDthQUFnQixZQUFNLEFBQ25DO2NBQUEsQUFBSywyQ0FBTCxBQUFpQixNQUFqQixBQUF3QixBQUN6QjtBQUZjO0EsYUFJZixBLGlCQUFpQixVQUFBLEFBQUMsT0FBVSxBQUMxQjtVQUFJLFVBQVUsT0FBVixBQUFpQixZQUFZLE9BQUEsQUFBTyxTQUF4QyxBQUFpQyxBQUFnQixPQUFPLEFBQ3REO2VBQUEsQUFBTyxBQUNSO0FBQ0Q7VUFBTSxPQUFPLEVBQUUsTUFBRixBQUFRLElBQUksTUFBWixBQUFrQixJQUFJLE1BQXRCLEFBQTRCLEdBQUcsTUFBL0IsQUFBcUMsR0FBRyxNQUFy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