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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\containers\\PostCard.js';


function PostCard(props) {
  var classes = props.classes,
      post = props.post;

  return _react2.default.createElement(_Card2.default, { className: classes.root, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_Card.CardContent, { className: classes.cardContent, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement(_Typography2.default, { type: 'body1', className: classes.subTitle, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _objectId2.default.toDatetime(post._id), ' \u9605\u8BFB(', post.pv, ')'), _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_link2.default, { href: '/post?id=' + post._id, __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { className: classes.title, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, post.title))), _react2.default.createElement('div', { className: classes.chipGroup, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, post.tags && post.tags.map(function (tag, index) {
    return tag.length ? _react2.default.createElement(_Chip2.default, { key: index, className: classes.chip, label: tag, __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      }
    }) : null;
  })), _react2.default.createElement(_Typography2.default, { component: 'p', className: classes.content, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, post.content)), _react2.default.createElement(_Card.CardActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_Button2.default, { dense: true, onClick: function onClick() {
      _index2.default.push('/post?id=' + post._id);
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, '\u9605\u8BFB\u5168\u6587 \xBB')));
}

var styles = function styles(theme) {
  return {
    root: {
      background: theme.palette.background.paper,
      // borderRadius: 5,
      width: '100%',
      '&:hover': {
        background: theme.palette.background.itemHover
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

PostCard.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(PostCard);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFBvc3RDYXJkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwid2l0aFN0eWxlcyIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiQ2hpcCIsIlR5cG9ncmFwaHkiLCJvYmplY3RJZCIsIkxpbmsiLCJSb3V0ZXIiLCJQb3N0Q2FyZCIsInByb3BzIiwiY2xhc3NlcyIsInBvc3QiLCJyb290IiwiY2FyZENvbnRlbnQiLCJzdWJUaXRsZSIsInRvRGF0ZXRpbWUiLCJfaWQiLCJwdiIsInRpdGxlIiwiY2hpcEdyb3VwIiwidGFncyIsIm1hcCIsInRhZyIsImluZGV4IiwibGVuZ3RoIiwiY2hpcCIsImNvbnRlbnQiLCJwdXNoIiwic3R5bGVzIiwiYmFja2dyb3VuZCIsInRoZW1lIiwicGFsZXR0ZSIsInBhcGVyIiwid2lkdGgiLCJpdGVtSG92ZXIiLCJjb2xvciIsInRleHQiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGl0bGVIb3ZlciIsIm1hcmdpbkJvdHRvbSIsInNlY29uZGFyeSIsInBhZGRpbmdCb3R0b20iLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFRLEFBQWE7Ozs7QUFDNUIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxTQUFBLEFBQVMsU0FBVCxBQUFrQixPQUFPO01BQUEsQUFDZixVQURlLEFBQ0csTUFESCxBQUNmO01BRGUsQUFDTixPQURNLEFBQ0csTUFESCxBQUNOLEFBQ2pCOzt5QkFDSSxBQUFDLGdDQUFLLFdBQVcsUUFBakIsQUFB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