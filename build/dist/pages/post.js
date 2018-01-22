'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MainLayout = require('../containers/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _ShowPost = require('../containers/ShowPost');

var _ShowPost2 = _interopRequireDefault(_ShowPost);

var _net = require('../common/net');

var _net2 = _interopRequireDefault(_net);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\pages\\post.js?entry',
    _this = undefined;

var Post = function Post(props) {
  console.log('url:' + props.url);
  return _react2.default.createElement(_MainLayout2.default, { rightSidebarData: props.rightSidebarData, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_ShowPost2.default, { postData: props.postData, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/github.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/github-markdown.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _net2.default.getPost(context.query.id);

          case 2:
            result = _context.sent;
            return _context.abrupt('return', { rightSidebarData: result.rightSidebarData, postData: result });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb3N0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJNYWluTGF5b3V0IiwiU2hvd1Bvc3QiLCJuZXQiLCJIZWFkIiwiUG9zdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInVybCIsInJpZ2h0U2lkZWJhckRhdGEiLCJwb3N0RGF0YSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJnZXRQb3N0IiwicXVlcnkiLCJpZCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFVLEFBQ3RCO1VBQUEsQUFBUSxJQUFJLFNBQVMsTUFBckIsQUFBMkIsQUFDekI7eUJBQ0UsQUFBQyxzQ0FBVyxrQkFBa0IsTUFBOUIsQUFBb0M7Z0JBQXBDO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsb0NBQVMsVUFBVSxNQUFwQixBQUEwQjtnQkFBMUI7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEsNkNBQ1EsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQURGLEFBQ0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFMTixBQUNFLEFBRUUsQUFFRSxBQUlUO0FBSlM7O0FBUFY7O0FBYUEsS0FBQSxBQUFLLDhCQUFMO3NGQUF1QixpQkFBQSxBQUFPLFNBQVA7UUFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUFBOzRCQUFBO21CQUNBLGNBQUEsQUFBSSxRQUFRLFFBQUEsQUFBUSxNQURwQixBQUNBLEFBQTBCOztlQUF6QztBQURlLDhCQUFBOzZDQUVkLEVBQUUsa0JBQWtCLE9BQXBCLEFBQTJCLGtCQUFrQixVQUYvQixBQUVkLEFBQXVEOztlQUZ6QztlQUFBOzRCQUFBOztBQUFBO2dCQUFBO0FBQXZCOzt1QkFBQTs0QkFBQTtBQUFBO0FBS0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoicG9zdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJjOi9naXRodWIvbmluZ3RvIn0=