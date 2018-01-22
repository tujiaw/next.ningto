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

var _MobileStepper = require('material-ui/MobileStepper');

var _MobileStepper2 = _interopRequireDefault(_MobileStepper);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _KeyboardArrowLeft = require('material-ui-icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('material-ui-icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\containers\\ShowPost\\PostStepper.js';


var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      flexGrow: 1
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit * 4,
      marginBottom: 20,
      background: theme.palette.background.default
    }
  };
};

var PostStepper = function (_React$Component) {
  (0, _inherits3.default)(PostStepper, _React$Component);

  function PostStepper() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostStepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostStepper.__proto__ || (0, _getPrototypeOf2.default)(PostStepper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleNext = function () {
      _index2.default.push({ pathname: '/post', query: { id: _this.props.nextPost._id } });
    }, _this.handleBack = function () {
      _index2.default.push({ pathname: '/post', query: { id: _this.props.prevPost._id } });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PostStepper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          nextPost = _props.nextPost,
          prevPost = _props.prevPost;

      return _react2.default.createElement('div', { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_MobileStepper2.default, {
        type: 'text',
        steps: 2,
        position: 'static',
        className: classes.mobileStepper,
        nextButton: _react2.default.createElement(_Button2.default, { dense: true, onClick: this.handleNext, disabled: !!!nextPost, __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, nextPost ? nextPost.title : '这是最后一篇了', theme.direction === 'rtl' ? _react2.default.createElement(_KeyboardArrowLeft2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }) : _react2.default.createElement(_KeyboardArrowRight2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        })),
        backButton: _react2.default.createElement(_Button2.default, { dense: true, onClick: this.handleBack, disabled: !!!prevPost, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, theme.direction === 'rtl' ? _react2.default.createElement(_KeyboardArrowRight2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }) : _react2.default.createElement(_KeyboardArrowLeft2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), prevPost ? prevPost.title : '前面已经没有了'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }]);

  return PostStepper;
}(_react2.default.Component);

PostStepper.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(PostStepper);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFNob3dQb3N0XFxQb3N0U3RlcHBlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIndpdGhTdHlsZXMiLCJNb2JpbGVTdGVwcGVyIiwiQnV0dG9uIiwiS2V5Ym9hcmRBcnJvd0xlZnQiLCJLZXlib2FyZEFycm93UmlnaHQiLCJSb3V0ZXIiLCJzdHlsZXMiLCJyb290Iiwid2lkdGgiLCJmbGV4R3JvdyIsImhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0xlZnQiLCJ0aGVtZSIsInNwYWNpbmciLCJ1bml0IiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJkZWZhdWx0IiwiUG9zdFN0ZXBwZXIiLCJzdGF0ZSIsImhhbmRsZU5leHQiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwicHJvcHMiLCJuZXh0UG9zdCIsIl9pZCIsImhhbmRsZUJhY2siLCJwcmV2UG9zdCIsImNsYXNzZXMiLCJtb2JpbGVTdGVwcGVyIiwidGl0bGUiLCJkaXJlY3Rpb24iLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2l0aFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7YUFDUCxBQUNHLEFBQ1A7Z0JBSHFCLEFBQ2pCLEFBRU0sQUFFWjtBQUpNLEFBQ0o7O2VBR00sQUFDRyxBQUNUO2tCQUZNLEFBRU0sQUFDWjttQkFBYSxNQUFBLEFBQU0sUUFBTixBQUFjLE9BSHJCLEFBRzRCLEFBQ2xDO29CQUpNLEFBSVEsQUFDZDtrQkFBWSxNQUFBLEFBQU0sUUFBTixBQUFjLFdBVmYsQUFBVSxBQUtmLEFBSytCO0FBTC9CLEFBQ047QUFOcUIsQUFDdkI7QUFERjs7SSxBQWNNOzs7Ozs7Ozs7Ozs7OztzTkFDSixBLFEsQUFBUSxVQUdSLEEsYUFBYSxZQUFNLEFBQ2pCO3NCQUFBLEFBQU8sS0FBSyxFQUFFLFVBQUYsQUFBWSxTQUFTLE9BQU8sRUFBRSxJQUFJLE1BQUEsQUFBSyxNQUFMLEFBQVcsU0FBekQsQUFBWSxBQUE0QixBQUEwQixBQUNuRTtBLGFBRUQsQSxhQUFhLFlBQU0sQUFDakI7c0JBQUEsQUFBTyxLQUFLLEVBQUUsVUFBRixBQUFZLFNBQVMsT0FBTyxFQUFFLElBQUksTUFBQSxBQUFLLE1BQUwsQUFBVyxTQUF6RCxBQUFZLEFBQTRCLEFBQTBCLEFBQ25FO0E7Ozs7OzZCQUVRO21CQUN3QyxLQUR4QyxBQUM2QztVQUQ3QyxBQUNDLGlCQURELEFBQ0M7VUFERCxBQUNVLGVBRFYsQUFDVTtVQURWLEFBQ2lCLGtCQURqQixBQUNpQjtVQURqQixBQUMyQixrQkFEM0IsQUFDMkIsQUFFbEM7OzZCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO29CQUF4QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDO2NBQUQsQUFDTyxBQUNMO2VBRkYsQUFFUyxBQUNQO2tCQUhGLEFBR1csQUFDVDttQkFBVyxRQUpiLEFBSXFCLEFBQ25CO29DQUNFLEFBQUMsa0NBQU8sT0FBUixNQUFjLFNBQVMsS0FBdkIsQUFBNEIsWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFwRCxBQUFxRDtzQkFBckQ7d0JBQUEsQUFDSTtBQURKO1NBQUEsYUFDZSxTQUFYLEFBQW9CLFFBRHhCLEFBQ2dDLEFBQzdCLGlCQUFBLEFBQU0sY0FBTixBQUFvQix3QkFBUSxBQUFDOztzQkFBRDt3QkFBNUIsQUFBNEI7QUFBQTtBQUFBLFNBQUEsb0JBQXdCLEFBQUM7O3NCQUFEO3dCQVIzRCxBQU1JLEFBRXVELEFBR3pEO0FBSHlEO0FBQUEsU0FBQTtvQ0FJdkQsQUFBQyxrQ0FBTyxPQUFSLE1BQWMsU0FBUyxLQUF2QixBQUE0QixZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQXBELEFBQXFEO3NCQUFyRDt3QkFBQSxBQUNHO0FBREg7U0FBQSxRQUNHLEFBQU0sY0FBTixBQUFvQix3QkFBUSxBQUFDOztzQkFBRDt3QkFBNUIsQUFBNEI7QUFBQTtBQUFBLFNBQUEsb0JBQXlCLEFBQUM7O3NCQUFEO3dCQUR4RCxBQUN3RCxBQUNwRDtBQURvRDtBQUFBLFNBQUEsY0FDekMsU0FBWCxBQUFvQixRQWQ1QixBQVlJLEFBRWdDOztvQkFkcEM7c0JBRkosQUFDRSxBQUNFLEFBb0JMO0FBcEJLO0FBQ0U7Ozs7O0VBbEJnQixnQixBQUFNOztBQXdDaEMsWUFBQSxBQUFZO1dBQ0Qsb0JBQUEsQUFBVSxPQURHLEFBQ0ksQUFDMUI7U0FBTyxvQkFBQSxBQUFVLE9BRm5CLEFBQXdCLEFBRUUsQUFHMUI7QUFMd0IsQUFDdEI7O2tCQUlhLHdCQUFBLEFBQVcsUUFBUSxFQUFFLFdBQXJCLEFBQW1CLEFBQWEsUUFBL0MsQUFBZSxBQUF3QyIsImZpbGUiOiJQb3N0U3RlcHBlci5qcyIsInNvdXJjZVJvb3QiOiJjOi9naXRodWIvbmluZ3RvIn0=