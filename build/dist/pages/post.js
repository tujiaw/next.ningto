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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Post = function Post(props) {
  console.log('url:' + props.url);
  return _react2.default.createElement(_MainLayout2.default, { rightSidebarData: props.rightSidebarData }, _react2.default.createElement(_ShowPost2.default, { postData: props.postData }), _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/github.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/github-markdown.min.css' }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/comments.css' })));
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