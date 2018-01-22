'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styles = require('material-ui/styles');

var _MainLayout = require('../containers/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _PostCardList = require('../containers/PostCardList');

var _PostCardList2 = _interopRequireDefault(_PostCardList);

var _Pagination = require('../components/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _net = require('../common/net');

var _net2 = _interopRequireDefault(_net);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\pages\\index.js?entry',
    _this2 = undefined;

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      theme: (0, _styles.createMuiTheme)({
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
      _index2.default.push({ pathname: '/', query: { page: page } });
    }, _this.HomePage = function () {
      if (_this.props.postsData && _this.props.postsData.posts) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react2.default.createElement(_PostCardList2.default, { posts: _this.props.postsData.posts, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }), _react2.default.createElement(_Pagination2.default, { data: _this.props.postsData, gotoPage: _this.gotoPage, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }));
      } else {
        return _react2.default.createElement('h1', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, 'loadding...');
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_styles.MuiThemeProvider, { theme: this.state.theme, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_MainLayout2.default, { rightSidebarData: this.props.rightSidebarData, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, this.HomePage()));
    }
  }]);

  return Index;
}(_react2.default.Component);

Index.getInitialProps = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var page, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = context.query.page || 1;
            _context.next = 3;
            return _net2.default.getPosts(page);

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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiTXVpVGhlbWVQcm92aWRlciIsImNyZWF0ZU11aVRoZW1lIiwiTWFpbkxheW91dCIsIlBvc3RDYXJkTGlzdCIsIlBhZ2luYXRpb24iLCJuZXQiLCJSb3V0ZXIiLCJJbmRleCIsInN0YXRlIiwidGhlbWUiLCJwYWxldHRlIiwidHlwZSIsInRleHQiLCJ0aXRsZSIsInRpdGxlSG92ZXIiLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiaXRlbUhvdmVyIiwiZ290b1BhZ2UiLCJwYWdlIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJIb21lUGFnZSIsInByb3BzIiwicG9zdHNEYXRhIiwicG9zdHMiLCJyaWdodFNpZGViYXJEYXRhIiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImdldFBvc3RzIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWtCOztBQUMzQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTzs7Ozs7Ozs7O0lBRUQsQTs7Ozs7Ozs7Ozs7Ozs7ME1BQ0osQTs7O2dCQUVhLEFBQ0QsQUFDTjs7QUFFRTttQkFGSSxBQUVHLEFBQ1A7d0JBSEksQUFHUSxBQUNaO3VCQU5LLEFBRUQsQUFJTyxBQUViO0FBTk0sQUFDSjs7dUIsQUFMQSxBQUNDLEFBQWUsQUFDWCxBQVFLLEFBQ0M7QUFERCxBQUNWO0FBVEssQUFDUDtBQUZrQixBQUNwQixPQURLO0FBREQsQUFDTixhLEFBZ0JGLFdBQVcsVUFBQSxBQUFDLE1BQVMsQUFDbkI7c0JBQUEsQUFBTyxLQUFLLEVBQUUsVUFBRixBQUFZLEtBQUssT0FBTyxFQUFFLE1BQXRDLEFBQVksQUFBd0IsQUFBUSxBQUM3QztBLGFBRUQsQSxXQUFXLFlBQU0sQUFDZjtVQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcsYUFBYSxNQUFBLEFBQUssTUFBTCxBQUFXLFVBQXZDLEFBQWlELE9BQU8sQUFDdEQ7K0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsU0FBQSxrQkFDRSxBQUFDLHdDQUFhLE9BQU8sTUFBQSxBQUFLLE1BQUwsQUFBVyxVQUFoQyxBQUEwQztzQkFBMUM7d0JBREYsQUFDRSxBQUNBO0FBREE7NEJBQ0EsQUFBQyxzQ0FBVyxNQUFNLE1BQUEsQUFBSyxNQUF2QixBQUE2QixXQUFXLFVBQVUsTUFBbEQsQUFBdUQ7c0JBQXZEO3dCQUhOLEFBQ0ksQUFFRSxBQUdQO0FBSE87O0FBSlIsYUFPTyxBQUNIOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNWO0FBQ0o7QTs7Ozs7NkJBRVUsQUFDUDs2QkFDRSxBQUFDLDBDQUFpQixPQUFPLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyxzQ0FBVyxrQkFBa0IsS0FBQSxBQUFLLE1BQW5DLEFBQXlDO29CQUF6QztzQkFBQSxBQUNJO0FBREo7Y0FGSixBQUNFLEFBQ0UsQUFDSSxBQUFLLEFBSWQ7Ozs7O0VBM0NpQixnQixBQUFNOztBQThDMUIsTUFBQSxBQUFNLDhCQUFOO3VGQUF3QixpQkFBQSxBQUFPLFNBQVA7Y0FBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNoQjtBQURnQixtQkFDVCxRQUFBLEFBQVEsTUFBUixBQUFjLFFBREwsQUFDYTs0QkFEYjttQkFFRCxjQUFBLEFBQUksU0FGSCxBQUVELEFBQWE7O2VBQTVCO0FBRmdCLDhCQUFBOzZDQUdmLEVBQUUsa0JBQWtCLE9BQXBCLEFBQTJCLGtCQUFrQixXQUg5QixBQUdmLEFBQXdEOztlQUh6QztlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXhCOzt1QkFBQTs2QkFBQTtBQUFBO0FBT0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiYzovZ2l0aHViL25pbmd0byJ9