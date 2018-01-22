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

var _jsxFileName = 'c:\\github\\ningto\\components\\Pagination.js';


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

      return _react2.default.createElement('div', { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, page && prevPage && _react2.default.createElement(_materialUi.IconButton, { className: classes.button, disabled: page === 1, onClick: function onClick() {
          return _this2.onClick(prevPage);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_materialUiIcons.KeyboardArrowLeft, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })), pageNumbers && pageNumbers.map(function (number, index) {
        if (number === 0) {
          return _react2.default.createElement(_materialUi.Button, { key: index, className: classes.button, onClick: function onClick() {
              return _this2.onClick(morePage);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }, '...');
        } else {
          if (number === page) {
            return _react2.default.createElement(_materialUi.Button, { key: index, color: 'accent', className: classes.button, onClick: function onClick() {
                return _this2.onClick(number);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            }, number);
          } else {
            return _react2.default.createElement(_materialUi.Button, { key: index, className: classes.button, onClick: function onClick() {
                return _this2.onClick(number);
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              }
            }, number);
          }
        }
      }), page && lastPage && nextPage && _react2.default.createElement(_materialUi.IconButton, { className: classes.button, disabled: page === lastPage, onClick: function onClick() {
          return _this2.onClick(nextPage);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_materialUiIcons.KeyboardArrowRight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFBhZ2luYXRpb24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoU3R5bGVzIiwiQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIktleWJvYXJkQXJyb3dMZWZ0IiwiS2V5Ym9hcmRBcnJvd1JpZ2h0IiwiUGFnaW5hdGlvbiIsIm9uQ2xpY2siLCJwYWdlIiwicHJvcHMiLCJnb3RvUGFnZSIsImNsYXNzZXMiLCJkYXRhIiwicGFnZU51bWJlcnMiLCJsYXN0UGFnZSIsInByZXZQYWdlIiwibmV4dFBhZ2UiLCJtb3JlUGFnZSIsInJvb3QiLCJidXR0b24iLCJtYXAiLCJudW1iZXIiLCJpbmRleCIsIkNvbXBvbmVudCIsInN0eWxlcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwYWRkaW5nIiwibWFyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFtQjs7Ozs7OztJQUV0QixBOzs7Ozs7Ozs7Ozs7OztvTkFDRixBLFVBQVUsVUFBQSxBQUFDLE1BQVMsQUFDbEI7WUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLEFBQ3JCO0E7Ozs7OzZCQUVRO21CQUFBOztVQUFBLEFBQ0MsVUFBWSxLQURiLEFBQ2tCLE1BRGxCLEFBQ0M7d0JBQzhELEtBQUEsQUFBSyxNQUZwRSxBQUUwRTtVQUYxRSxBQUVDLDBCQUZELEFBRUM7VUFGRCxBQUVjLG1CQUZkLEFBRWM7VUFGZCxBQUVvQix1QkFGcEIsQUFFb0I7VUFGcEIsQUFFOEIsdUJBRjlCLEFBRThCO1VBRjlCLEFBRXdDLHVCQUZ4QyxBQUV3QztVQUZ4QyxBQUVrRCx1QkFGbEQsQUFFa0QsQUFDekQ7OzZCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO29CQUF4QjtzQkFBQSxBQUNJO0FBREo7T0FBQSxVQUNJLEFBQVEsNEJBQ1IsQUFBQyx3Q0FBVyxXQUFXLFFBQXZCLEFBQStCLFFBQVEsVUFBVSxTQUFqRCxBQUF3RCxHQUFHLFNBQVMsbUJBQUE7aUJBQUksT0FBQSxBQUFLLFFBQVQsQUFBSSxBQUFhO0FBQXJGO29CQUFBO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUhOLEFBRUksQUFDRSxBQUdGO0FBSEU7QUFBQSxzQ0FHYSxBQUFZLElBQUksVUFBQSxBQUFDLFFBQUQsQUFBUyxPQUFVLEFBQ2xEO1lBQUksV0FBSixBQUFlLEdBQUcsQUFDaEI7aUNBQU8sQUFBQyxvQ0FBTyxLQUFSLEFBQWEsT0FBTyxXQUFXLFFBQS9CLEFBQXVDLFFBQVEsU0FBUyxtQkFBQTtxQkFBSSxPQUFBLEFBQUssUUFBVCxBQUFJLEFBQWE7QUFBekU7d0JBQUE7MEJBQUE7QUFBQTtXQUFBLEVBQVAsQUFBTyxBQUNSO0FBRkQsZUFFTyxBQUNMO2NBQUksV0FBSixBQUFlLE1BQU0sQUFDbkI7bUNBQU8sQUFBQyxvQ0FBTyxLQUFSLEFBQWEsT0FBTyxPQUFwQixBQUEwQixVQUFTLFdBQVcsUUFBOUMsQUFBc0QsUUFBUSxTQUFTLG1CQUFBO3VCQUFJLE9BQUEsQUFBSyxRQUFULEFBQUksQUFBYTtBQUF4RjswQkFBQTs0QkFBQSxBQUFtRztBQUFuRzthQUFBLEVBQVAsQUFBTyxBQUNSO0FBRkQsaUJBRU8sQUFDTDttQ0FBTyxBQUFDLG9DQUFPLEtBQVIsQUFBYSxPQUFPLFdBQVcsUUFBL0IsQUFBdUMsUUFBUSxTQUFTLG1CQUFBO3VCQUFJLE9BQUEsQUFBSyxRQUFULEFBQUksQUFBYTtBQUF6RTswQkFBQTs0QkFBQSxBQUFvRjtBQUFwRjthQUFBLEVBQVAsQUFBTyxBQUNSO0FBQ0Y7QUFDRjtBQWhCSCxBQU1tQixBQVdmLE9BWGUsV0FXZixBQUFRLFlBQVIsQUFBb0IsNEJBQ3BCLEFBQUMsd0NBQVcsV0FBVyxRQUF2QixBQUErQixRQUFRLFVBQVUsU0FBakQsQUFBd0QsVUFBVSxTQUFTLG1CQUFBO2lCQUFJLE9BQUEsQUFBSyxRQUFULEFBQUksQUFBYTtBQUE1RjtvQkFBQTtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFwQlIsQUFDRSxBQWtCSSxBQUNFLEFBS1Q7QUFMUztBQUFBOzs7OztFQTVCVyxnQkFBTSxBOztBQW9DL0IsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7ZUFDTCxBQUNLLEFBQ1Q7c0JBSG1CLEFBQ2YsQUFFWSxBQUVsQjtBQUpNLEFBQ0o7O2dCQUdNLEFBQ0ksQUFDVjtpQkFGTSxBQUVLLEFBQ1g7Z0JBSE0sQUFHSSxBQUNWO2lCQUpNLEFBSUssQUFDWDtlQUxNLEFBS0csQUFDVDtjQVhTLEFBQVUsQUFLYixBQU1FO0FBTkYsQUFDTjtBQU5tQixBQUNyQjtBQURKLEFBZUE7O2tCQUFlLHdCQUFBLEFBQVcsUUFBMUIsQUFBZSxBQUFtQiIsImZpbGUiOiJQYWdpbmF0aW9uLmpzIiwic291cmNlUm9vdCI6ImM6L2dpdGh1Yi9uaW5ndG8ifQ==