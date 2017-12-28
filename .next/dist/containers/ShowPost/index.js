'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Chip = require('material-ui/Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _objectId = require('../../common/objectId');

var _objectId2 = _interopRequireDefault(_objectId);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _PostStepper = require('./PostStepper');

var _PostStepper2 = _interopRequireDefault(_PostStepper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShowPost(props) {
  var classes = props.classes;
  var _props$postData = props.postData,
      post = _props$postData.post,
      nextPost = _props$postData.nextPost,
      prevPost = _props$postData.prevPost;

  return post ? _react2.default.createElement('div', { className: classes.root }, _react2.default.createElement(_Card2.default, { className: classes.card }, _react2.default.createElement(_Card.CardContent, null, _react2.default.createElement(_Typography2.default, { type: 'body1', className: classes.subTitle }, _objectId2.default.toDatetime(post._id), ' \u9605\u8BFB(', post.pv, ')'), _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2' }, _react2.default.createElement(_link2.default, { href: '/post?id=' + post._id }, _react2.default.createElement('a', { className: classes.title }, post.title))), _react2.default.createElement('div', { className: classes.chipGroup }, post.tags && post.tags.map(function (tag, index) {
    return tag.length ? _react2.default.createElement(_Chip2.default, { key: index, className: classes.chip, label: tag }) : null;
  })), _react2.default.createElement('div', { className: 'markdown-body', dangerouslySetInnerHTML: { __html: post.content } }), _react2.default.createElement('footer', { className: classes.reference }, _react2.default.createElement('strong', null, '\uFF08\u8F6C\u8F7D\u672C\u7AD9\u6587\u7AE0\u8BF7\u6CE8\u660E\u4F5C\u8005\u548C\u51FA\u5904\uFF1A', _react2.default.createElement('a', { href: 'http://3inns.cn' }, '\u4E09\u5BB6\u5E97 - 3inns.cn')))), _react2.default.createElement(_Card.CardActions, null, _react2.default.createElement(_PostStepper2.default, { nextPost: nextPost, prevPost: prevPost })))) : _react2.default.createElement(_Loading2.default, null);
}

var styles = function styles(theme) {
  return {
    root: {
      marginTop: 20,
      background: theme.palette.common.darkWhite,
      borderRadius: 5
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
      fontSize: 14,
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
    },
    reference: {
      marginTop: 15,
      fontSize: 11,
      color: '#cc0000'
    }
  };
};

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles))(ShowPost);