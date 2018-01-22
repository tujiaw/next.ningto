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

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\pages\\_document.js?entry';


var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), _react2.default.createElement('meta', { name: 'keywords', content: '\u6CDE\u9014 \u6280\u672F\u6587\u7AE0 \u7F16\u7A0B C++ Web Qt Node.js JavaScript', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('meta', { name: 'description', content: '\u6CDE\u9014 ningto.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, '\u6CDE\u9014-ningto.com'), _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/ico', href: '/static/favicon.ico', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'body { margin: 0;}')), _react2.default.createElement('body', { className: 'custom_class', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, this.props.customValue, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = (0, _server2.default)();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJmbHVzaCIsIk15RG9jdW1lbnQiLCJwcm9wcyIsImN1c3RvbVZhbHVlIiwicmVuZGVyUGFnZSIsImh0bWwiLCJoZWFkIiwiZXJyb3JIdG1sIiwiY2h1bmtzIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFBTSxBQUFNOzs7O0FBQy9CLEFBQU87Ozs7Ozs7OztJQUVjLEE7Ozs7Ozs7Ozs7OzZCQU9WLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBREYsQUFDRSxBQUNBO0FBREE7a0RBQ00sY0FBTixBQUFpQixtQkFBa0IsU0FBbkMsQUFBMkM7b0JBQTNDO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFIRixBQUdFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsZUFBYyxTQUF6QixBQUFpQztvQkFBakM7c0JBSkYsQUFJRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEYsQUFLRSxBQUNBLG9FQUFNLEtBQU4sQUFBVSxpQkFBZ0IsTUFBMUIsQUFBK0IsYUFBWSxNQUEzQyxBQUFnRDtvQkFBaEQ7c0JBTkYsQUFNRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBUkosQUFDRSxBQU9FLEFBRUYsd0NBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0c7QUFESDtjQUNHLEFBQUssTUFEUixBQUNjLEFBQ1osNkJBQUEsQUFBQzs7b0JBQUQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFkTixBQUNFLEFBVUUsQUFHRSxBQUlQO0FBSk87QUFBQTs7OzswQ0FyQitCO1VBQWQsQUFBYyxrQkFBZCxBQUFjOzt3QkFBQSxBQUNLO1VBREwsQUFDN0IsbUJBRDZCLEFBQzdCO1VBRDZCLEFBQ3ZCLG1CQUR1QixBQUN2QjtVQUR1QixBQUNqQix3QkFEaUIsQUFDakI7VUFEaUIsQUFDTixxQkFETSxBQUNOLEFBQy9COztVQUFNLFNBQU4sQUFBZSxBQUNmO2FBQU8sRUFBRSxNQUFGLE1BQVEsTUFBUixNQUFjLFdBQWQsV0FBeUIsUUFBekIsUUFBaUMsUUFBeEMsQUFBTyxBQUNSOzs7OztBQUxxQyxBOztrQkFBbkIsQSIsImZpbGUiOiJfZG9jdW1lbnQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiYzovZ2l0aHViL25pbmd0byJ9