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

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\RightSidebar\\ProfileCard.js';


var ProfileCard = function (_React$Component) {
  (0, _inherits3.default)(ProfileCard, _React$Component);

  function ProfileCard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProfileCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProfileCard.__proto__ || (0, _getPrototypeOf2.default)(ProfileCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: true }, _this.handleClick = function () {
      _this.setState({ open: !_this.state.open });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProfileCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          profile = _props.profile;

      var hits = [{ name: '文章数', count: profile.postCount || 100 }, { name: '总访问量', count: profile.hitCount || 54321 }, { name: '今日访问', count: profile.hitToday || 321 }];

      return _react2.default.createElement(_Card2.default, { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement('div', { className: classes.row, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement('a', { href: 'https://github.com/tujiaw', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('img', { className: classes.img, alt: 'avatar', src: 'http://3inns.cn/img/myavatar.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement('div', { className: classes.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement('span', { className: classes.mainTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, 'ningto.com'), _react2.default.createElement('span', { className: classes.subTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, 'Keep it simple,stupid'))), _react2.default.createElement('div', { className: classes.row, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, hits.map(function (item, index) {
        return _react2.default.createElement('div', { key: index, className: classes.counter, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react2.default.createElement('div', { className: classes.counterTitle, __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, item.name), _react2.default.createElement('div', { className: classes.counterNum, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }, item.count));
      })));
    }
  }]);

  return ProfileCard;
}(_react2.default.Component);

var styles = function styles(theme) {
  return {
    root: {
      background: theme.palette.background.paper,
      padding: 10,
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    img: {
      width: '60px',
      height: '60px',
      borderRadius: '30px'
    },
    title: {
      display: 'flex',
      flexDirection: 'column'
    },
    mainTitle: {
      fontWeight: 'bold'
    },
    subTitle: {
      fontSize: '13px',
      color: '#788087'
    },
    counterNum: {
      color: '#4f4f4f',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    counterTitle: {
      color: '#788087'
    }
  };
};

ProfileCard.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ProfileCard);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE1haW5MYXlvdXRcXFJpZ2h0U2lkZWJhclxcUHJvZmlsZUNhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoU3R5bGVzIiwiQ2FyZCIsIlByb2ZpbGVDYXJkIiwic3RhdGUiLCJvcGVuIiwiaGFuZGxlQ2xpY2siLCJzZXRTdGF0ZSIsInByb3BzIiwiY2xhc3NlcyIsInByb2ZpbGUiLCJoaXRzIiwibmFtZSIsImNvdW50IiwicG9zdENvdW50IiwiaGl0Q291bnQiLCJoaXRUb2RheSIsInJvb3QiLCJyb3ciLCJpbWciLCJ0aXRsZSIsIm1haW5UaXRsZSIsInN1YlRpdGxlIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY291bnRlciIsImNvdW50ZXJUaXRsZSIsImNvdW50ZXJOdW0iLCJDb21wb25lbnQiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kIiwidGhlbWUiLCJwYWxldHRlIiwicGFwZXIiLCJwYWRkaW5nIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztJLEFBRUQ7Ozs7Ozs7Ozs7Ozs7O3NOQUNKLEEsUUFBUSxFQUFFLE0sQUFBRixBQUFRLGMsQUFFaEIsY0FBYyxZQUFNLEFBQ2xCO1lBQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQUEsQUFBSyxNQUE1QixBQUFjLEFBQW9CLEFBQ25DO0E7Ozs7OzZCQUVRO21CQUNzQixLQUR0QixBQUMyQjtVQUQzQixBQUNDLGlCQURELEFB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