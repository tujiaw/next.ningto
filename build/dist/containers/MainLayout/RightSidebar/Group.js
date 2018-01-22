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

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\RightSidebar\\Group.js';


var styles = function styles(theme) {
  return {
    root: {
      // background: theme.palette.background.default,
      marginTop: 10
    },
    listItem: {
      padding: 6,
      margin: 0
    },
    listItemText: {
      padding: 0,
      margin: 0
    }

  };
};

var Group = function (_React$Component) {
  (0, _inherits3.default)(Group, _React$Component);

  function Group() {
    (0, _classCallCheck3.default)(this, Group);

    return (0, _possibleConstructorReturn3.default)(this, (Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).apply(this, arguments));
  }

  (0, _createClass3.default)(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          data = _props.data;

      return _react2.default.createElement(_Card2.default, { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_Card.CardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_List2.default, { dense: true, subheader: _react2.default.createElement(_ListSubheader2.default, { className: classes.subHeader, __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, data.title), __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, data.list && data.list.map(function (post, index) {
        var title = post.title;
        if (post.subTitle) {
          title += ' (' + post.subTitle + ')';
        }
        return _react2.default.createElement(_List.ListItem, { key: index, className: classes.listItem, onClick: data.onItemClick.bind(data, index), button: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement(_List.ListItemText, { primary: title, className: classes.listItemText, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }));
      }))));
    }
  }]);

  return Group;
}(_react2.default.Component);

Group.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Group);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE1haW5MYXlvdXRcXFJpZ2h0U2lkZWJhclxcR3JvdXAuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJ3aXRoU3R5bGVzIiwiTGlzdFN1YmhlYWRlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtVGV4dCIsIkNhcmQiLCJDYXJkQ29udGVudCIsInN0eWxlcyIsInJvb3QiLCJtYXJnaW5Ub3AiLCJsaXN0SXRlbSIsInBhZGRpbmciLCJtYXJnaW4iLCJsaXN0SXRlbVRleHQiLCJHcm91cCIsInByb3BzIiwiY2xhc3NlcyIsImRhdGEiLCJzdWJIZWFkZXIiLCJ0aXRsZSIsImxpc3QiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJzdWJUaXRsZSIsIm9uSXRlbUNsaWNrIiwiYmluZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQVEsQUFBVTs7OztBQUN6QixBQUFPLEFBQVE7Ozs7Ozs7OztBQUVmLElBQU0sU0FBUyxTQUFULEFBQVMsY0FBQTs7O0FBR1g7aUJBSHFCLEFBQ2pCLEFBRU8sQUFFYjtBQUpNLEFBQ0o7O2VBR1EsQUFDQyxBQUNUO2NBUHFCLEFBS2IsQUFFQSxBQUVWO0FBSlUsQUFDUjs7ZUFHWSxBQUNILEFBQ1Q7Y0FYVyxBQUFVLEFBU1QsQUFFSjtBQUZJLEFBQ1o7O0FBVnFCLEFBQ3ZCO0FBREY7O0ksQUFnQk07Ozs7Ozs7Ozs7OzZCQUNLO21CQUNtQixLQURuQixBQUN3QjtVQUR4QixBQUNDLGlCQURELEFBQ0M7VUFERCxBQUNVLGNBRFYsQUFDVSxBQUVqQjs7NkJBQ0UsQUFBQyxnQ0FBSyxXQUFXLFFBQWpCLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLGdDQUFLLE9BQU4sQUFBYSxNQUFNLDJCQUFXLEFBQUMseUNBQWMsV0FBVyxRQUExQixBQUFrQztzQkFBbEM7d0JBQUEsQUFBOEM7QUFBOUM7U0FBQSxPQUE5QixBQUE4QixBQUFtRDtvQkFBakY7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxhQUFRLEFBQUssS0FBTCxBQUFVLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQzNDO1lBQUksUUFBUSxLQUFaLEFBQWlCLEFBQ2pCO1lBQUksS0FBSixBQUFTLFVBQVUsQUFDakI7MEJBQWMsS0FBZCxBQUFtQixXQUNwQjtBQUNEOytCQUFPLEFBQUMsZ0NBQVMsS0FBVixBQUFlLE9BQU8sV0FBVyxRQUFqQyxBQUF5QyxVQUFVLFNBQVMsS0FBQSxBQUFLLFlBQUwsQUFBaUIsS0FBakIsQUFBc0IsTUFBbEYsQUFBNEQsQUFBNEIsUUFBUSxRQUFoRztzQkFBQTt3QkFBQSxBQUNMO0FBREs7U0FBQSxrQkFDTCxBQUFDLG9DQUFhLFNBQWQsQUFBd0IsT0FBUSxXQUFXLFFBQTNDLEFBQW1EO3NCQUFuRDt3QkFERixBQUFPLEFBQ0wsQUFFSDtBQUZHOztBQVZaLEFBQ0UsQUFDRSxBQUNFLEFBQ2dCLEFBYXZCLE9BYnVCOzs7OztFQVJOLGdCQUFNLEE7O0FBd0IxQixNQUFBLEFBQU07V0FDSyxvQkFBQSxBQUFVLE9BRHJCLEFBQWtCLEFBQ1UsQUFHNUI7QUFKa0IsQUFDaEI7O2tCQUdhLHdCQUFBLEFBQVcsUUFBMUIsQUFBZSxBQUFtQiIsImZpbGUiOiJHcm91cC5qcyIsInNvdXJjZVJvb3QiOiJjOi9naXRodWIvbmluZ3RvIn0=