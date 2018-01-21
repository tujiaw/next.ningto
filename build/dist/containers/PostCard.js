'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _objectId = require('../common/objectId');

var _objectId2 = _interopRequireDefault(_objectId);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostCard(props) {
  var classes = props.classes,
      post = props.post;

  return _react2.default.createElement(_Card2.default, { className: classes.root }, _react2.default.createElement(_Card.CardContent, { className: classes.cardContent }, _react2.default.createElement(_Typography2.default, { type: 'body1', className: classes.subTitle }, _objectId2.default.toDatetime(post._id), ' \u9605\u8BFB(', post.pv, ')'), _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2' }, _react2.default.createElement(_link2.default, { href: '/post?id=' + post._id }, _react2.default.createElement('a', { className: classes.title }, post.title))), _react2.default.createElement('div', { className: classes.chipGroup }, post.tags && post.tags.map(function (tag, index) {
    return tag.length ? _react2.default.createElement(_Chip2.default, { key: index, className: classes.chip, label: tag }) : null;
  })), _react2.default.createElement(_Typography2.default, { component: 'p', className: classes.content }, post.content)), _react2.default.createElement(_Card.CardActions, null, _react2.default.createElement(_Button2.default, { dense: true, onClick: function onClick() {
      _index2.default.push('/post?id=' + post._id);
    } }, '\u9605\u8BFB\u5168\u6587 \xBB')));
}

var styles = function styles(theme) {
  return {
    root: {
      background: theme.palette.background.paper,
      // borderRadius: 5,
      width: '100%'
    },
    title: {
      color: theme.palette.text.title,
      textDecoration: 'none',
      fontSize: '1.2em',
      '&:hover': {
        color: theme.palette.text.titleHover
      }
    },
    subTitle: {
      marginBottom: 6,
      fontSize: '.8em',
      color: theme.palette.text.secondary
    },
    cardContent: {
      paddingBottom: '0'
    },
    content: {
      fontSize: '1em',
      color: theme.palette.text.secondary
    },
    chipGroup: {
      display: 'flex',
      marginTop: 6,
      marginBottom: 6
    },
    chip: {
      height: 25,
      marginRight: 6
    }
  };
};

exports.default = (0, _styles.withStyles)(styles)(PostCard);