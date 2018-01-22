'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _objectId = require('../../common/objectId');

var _objectId2 = _interopRequireDefault(_objectId);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Comments = require('../../components/Comments');

var _Comments2 = _interopRequireDefault(_Comments);

var _utils = require('../../common/utils');

var _utils2 = _interopRequireDefault(_utils);

var _config = require('../../common/config');

var _config2 = _interopRequireDefault(_config);

var _PostStepper = require('./PostStepper');

var _PostStepper2 = _interopRequireDefault(_PostStepper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\containers\\ShowPost\\index.js';


var ShowPost = function (_React$Component) {
  (0, _inherits3.default)(ShowPost, _React$Component);

  function ShowPost() {
    (0, _classCallCheck3.default)(this, ShowPost);

    return (0, _possibleConstructorReturn3.default)(this, (ShowPost.__proto__ || (0, _getPrototypeOf2.default)(ShowPost)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowPost, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _props$postData = this.props.postData,
          toc = _props$postData.toc,
          post = _props$postData.post,
          nextPost = _props$postData.nextPost,
          prevPost = _props$postData.prevPost;

      return post ? _react2.default.createElement('div', { className: classes.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_Card2.default, { className: classes.card, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react2.default.createElement(_Card.CardContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement(_Typography2.default, { type: 'body1', className: classes.subTitle, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _objectId2.default.toDatetime(post._id), ' \u9605\u8BFB(', post.pv, ')'), _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_link2.default, { href: '/post?id=' + post._id, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('a', { className: classes.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, post.title))), _react2.default.createElement('div', { className: classes.chipGroup, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, post.tags && post.tags.map(function (tag, index) {
        return tag.length ? _react2.default.createElement(_Chip2.default, { key: index, className: classes.chip, label: tag, __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }) : null;
      })), toc && toc.length && _react2.default.createElement(_ExpansionPanel2.default, { className: classes.toc, defaultExpanded: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_ExpansionPanel.ExpansionPanelSummary, { className: classes.tocSummary, expandIcon: _react2.default.createElement(_ExpandMore2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_Typography2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, '\u6587\u7AE0\u76EE\u5F55')), _react2.default.createElement(_ExpansionPanel.ExpansionPanelDetails, { className: classes.tocDetails, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: toc }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), _react2.default.createElement('div', { className: 'markdown-body', dangerouslySetInnerHTML: { __html: post.content }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement('footer', { className: classes.reference, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, '\uFF08\u8F6C\u8F7D\u672C\u7AD9\u6587\u7AE0\u8BF7\u6CE8\u660E\u4F5C\u8005\u548C\u51FA\u5904\uFF1A', _react2.default.createElement('a', { href: 'http://ningto.com', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, '\u6CDE\u9014 - ningto.com')))), _react2.default.createElement(_Card.CardActions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_PostStepper2.default, { nextPost: nextPost, prevPost: prevPost, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))), _react2.default.createElement(_Comments2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })) : _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      });
    }
  }]);

  return ShowPost;
}(_react2.default.Component);

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

ShowPost.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles))(ShowPost);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFNob3dQb3N0XFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhTdHlsZXMiLCJQcm9wVHlwZXMiLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkNoaXAiLCJUeXBvZ3JhcGh5IiwiRXhwYW5zaW9uUGFuZWwiLCJFeHBhbnNpb25QYW5lbFN1bW1hcnkiLCJFeHBhbnNpb25QYW5lbERldGFpbHMiLCJFeHBhbmRNb3JlSWNvbiIsImNvbXBvc2UiLCJMaW5rIiwib2JqZWN0SWQiLCJMb2FkaW5nIiwiQ29tbWVudHMiLCJ1dGlscyIsImNvbmZpZyIsIlBvc3RTdGVwcGVyIiwiU2hvd1Bvc3QiLCJjbGFzc2VzIiwicHJvcHMiLCJwb3N0RGF0YSIsInRvYyIsInBvc3QiLCJuZXh0UG9zdCIsInByZXZQb3N0Iiwicm9vdCIsImNhcmQiLCJzdWJUaXRsZSIsInRvRGF0ZXRpbWUiLCJfaWQiLCJwdiIsInRpdGxlIiwiY2hpcEdyb3VwIiwidGFncyIsIm1hcCIsInRhZyIsImluZGV4IiwibGVuZ3RoIiwiY2hpcCIsInRvY1N1bW1hcnkiLCJ0b2NEZXRhaWxzIiwiX19odG1sIiwiY29udGVudCIsInJlZmVyZW5jZSIsIkNvbXBvbmVudCIsInN0eWxlcyIsImJhY2tncm91bmQiLCJ0aGVtZSIsInBhbGV0dGUiLCJjb21tb24iLCJkYXJrV2hpdGUiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nVG9wIiwiZGlzcGxheSIsImhlaWdodCIsIm1hcmdpblRvcCIsInZpc2liaWxpdHkiLCJjb2xvciIsInRleHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGl0bGVIb3ZlciIsIm1hcmdpbkJvdHRvbSIsInNlY29uZGFyeSIsIm1hcmdpblJpZ2h0IiwiZmxvYXQiLCJib3JkZXIiLCJtYXJnaW4iLCJwYWRkaW5nIiwicGFkZGluZ0xlZnQiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJzb2h1Y3NXcmFwIiwicHJvcFR5cGVz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