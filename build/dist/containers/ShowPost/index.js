'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _ExpansionPanel = require('material-ui/ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _ExpandMore = require('material-ui-icons/ExpandMore');

var _ExpandMore2 = _interopRequireDefault(_ExpandMore);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _objectId = require('../../common/objectId');

var _objectId2 = _interopRequireDefault(_objectId);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _utils = require('../../common/utils');

var _utils2 = _interopRequireDefault(_utils);

var _config = require('../../common/config');

var _config2 = _interopRequireDefault(_config);

var _PostStepper = require('./PostStepper');

var _PostStepper2 = _interopRequireDefault(_PostStepper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShowPost = function ShowPost(props) {
  var classes = props.classes;
  var _props$postData = props.postData,
      toc = _props$postData.toc,
      post = _props$postData.post,
      nextPost = _props$postData.nextPost,
      prevPost = _props$postData.prevPost;

  return post ? _react2.default.createElement('div', { className: classes.root }, _react2.default.createElement(_Card2.default, { className: classes.card }, _react2.default.createElement(_Card.CardContent, null, _react2.default.createElement(_Typography2.default, { type: 'body1', className: classes.subTitle }, _objectId2.default.toDatetime(post._id), ' \u9605\u8BFB(', post.pv, ')'), _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2' }, _react2.default.createElement(_link2.default, { href: '/post?id=' + post._id }, _react2.default.createElement('a', { className: classes.title }, post.title))), _react2.default.createElement('div', { className: classes.chipGroup }, post.tags && post.tags.map(function (tag, index) {
    return tag.length ? _react2.default.createElement(_Chip2.default, { key: index, className: classes.chip, label: tag }) : null;
  })), toc && toc.length && _react2.default.createElement(_ExpansionPanel2.default, { className: classes.toc, defaultExpanded: true }, _react2.default.createElement(_ExpansionPanel.ExpansionPanelSummary, { className: classes.tocSummary, expandIcon: _react2.default.createElement(_ExpandMore2.default, null) }, _react2.default.createElement(_Typography2.default, null, '\u6587\u7AE0\u76EE\u5F55')), _react2.default.createElement(_ExpansionPanel.ExpansionPanelDetails, { className: classes.tocDetails }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: toc } }))), _react2.default.createElement('div', { className: 'markdown-body', dangerouslySetInnerHTML: { __html: post.content } }), _react2.default.createElement('footer', { className: classes.reference }, _react2.default.createElement('strong', null, '\uFF08\u8F6C\u8F7D\u672C\u7AD9\u6587\u7AE0\u8BF7\u6CE8\u660E\u4F5C\u8005\u548C\u51FA\u5904\uFF1A', _react2.default.createElement('a', { href: 'http://ningto.com' }, '\u6CDE\u9014 - ningto.com')))), _react2.default.createElement(_Card.CardActions, null, _react2.default.createElement(_PostStepper2.default, { nextPost: nextPost, prevPost: prevPost })))) : _react2.default.createElement(_Loading2.default, null);
};

var styles = function styles(theme) {
  var _toc;

  return {
    root: {
      background: theme.palette.common.darkWhite,
      borderRadius: 5,
      paddingTop: 0,
      // 锚点偏移
      '& .anchor-fix': {
        display: 'block',
        height: 64, /*same height as header*/
        marginTop: -64, /*same height as header*/
        visibility: 'hidden'
      }
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
    toc: (_toc = {
      float: 'right',
      border: '1 solid #e2e2e2',
      background: '#eee',
      borderRadius: 4
    }, (0, _defineProperty3.default)(_toc, 'border', '1 solid #ddd'), (0, _defineProperty3.default)(_toc, 'maxWidth', 250), (0, _defineProperty3.default)(_toc, 'minWidth', 90), (0, _defineProperty3.default)(_toc, 'fontSize', 12), (0, _defineProperty3.default)(_toc, 'margin', 0), (0, _defineProperty3.default)(_toc, 'padding', 0), (0, _defineProperty3.default)(_toc, 'marginLeft', 10), (0, _defineProperty3.default)(_toc, '& ul', {
      margin: 0,
      padding: 0,
      paddingLeft: '1em'
    }), (0, _defineProperty3.default)(_toc, '& a', {
      color: '#4078c0',
      textDecoration: 'none',
      '&:hover': {
        color: '#f00'
      }
    }), _toc),
    tocSummary: {
      minHeight: 36,
      maxHeight: 36
    },
    tocDetails: {
      padding: 0,
      margin: 20,
      marginTop: 0
    },
    reference: {
      marginTop: 15,
      fontSize: 11,
      color: '#cc0000'
    },
    sohucsWrap: {
      margin: 10
    }
  };
};

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles))(ShowPost);