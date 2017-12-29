'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Loading = require('../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _PostCard = require('./PostCard');

var _PostCard2 = _interopRequireDefault(_PostCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostCardList(props) {
  var classes = props.classes,
      posts = props.posts;

  return _react2.default.createElement('div', { className: classes.root }, _react2.default.createElement(_List2.default, { className: classes.list }, posts ? posts.map(function (post, index) {
    return _react2.default.createElement(_List.ListItem, { key: index }, _react2.default.createElement(_PostCard2.default, { post: post }));
  }) : _react2.default.createElement(_Loading2.default, null)));
}

var styles = function styles(theme) {
  return {
    root: {},
    list: {},
    loading: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

exports.default = (0, _styles.withStyles)(styles)(PostCardList);