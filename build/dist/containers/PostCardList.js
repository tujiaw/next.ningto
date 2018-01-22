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

var _jsxFileName = 'c:\\github\\ningto\\containers\\PostCardList.js';


function PostCardList(props) {
  var classes = props.classes,
      posts = props.posts;

  return _react2.default.createElement('div', { className: classes.root, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_List2.default, { className: classes.list, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, posts ? posts.map(function (post, index) {
    return _react2.default.createElement(_List.ListItem, { key: index, className: classes.listItem, __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, _react2.default.createElement(_PostCard2.default, { post: post, __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }));
  }) : _react2.default.createElement(_Loading2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })));
}

var styles = function styles(theme) {
  return {
    root: {},
    list: {
      paddingTop: 0
    },
    listItem: {
      padding: 0,
      paddingBottom: 1
    },
    loading: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

exports.default = (0, _styles.withStyles)(styles)(PostCardList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXFBvc3RDYXJkTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhTdHlsZXMiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMb2FkaW5nIiwiUG9zdENhcmQiLCJQb3N0Q2FyZExpc3QiLCJwcm9wcyIsImNsYXNzZXMiLCJwb3N0cyIsInJvb3QiLCJsaXN0IiwibWFwIiwicG9zdCIsImluZGV4IiwibGlzdEl0ZW0iLCJzdHlsZXMiLCJwYWRkaW5nVG9wIiwicGFkZGluZyIsInBhZGRpbmdCb3R0b20iLCJsb2FkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPLEFBQVE7Ozs7QUFFZixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7Ozs7Ozs7QUFFckIsU0FBQSxBQUFTLGFBQVQsQUFBc0IsT0FBTztNQUFBLEFBQ25CLFVBRG1CLEFBQ0EsTUFEQSxBQUNuQjtNQURtQixBQUNWLFFBRFUsQUFDQSxNQURBLEFBQ1YsQUFDakI7O3lCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO2dCQUF4QjtrQkFBQSxBQUNJO0FBREo7R0FBQSxrQkFDSSxBQUFDLGdDQUFLLFdBQVcsUUFBakIsQUFBeUI7Z0JBQXpCO2tCQUFBLEFBQ007QUFETjttQkFFTSxBQUFNLElBQUksVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQ3ZCOzJCQUFPLEFBQUMsZ0NBQVMsS0FBVixBQUFlLE9BQU8sV0FBVyxRQUFqQyxBQUF5QztrQkFBekM7b0JBQUEsQUFDTDtBQURLO0tBQUEsa0JBQ0wsQUFBQyxvQ0FBUyxNQUFWLEFBQWdCO2tCQUFoQjtvQkFERixBQUFPLEFBQ0wsQUFFSDtBQUZHOztBQUhOLEFBQ0EsR0FBQSxvQkFLQyxBQUFDOztnQkFBRDtrQkFUYixBQUNFLEFBQ0ksQUFPTyxBQUtkO0FBTGM7QUFBQSxHQUFBOzs7QUFPZixJQUFNLFNBQVMsU0FBVCxBQUFTLGNBQUE7O1VBQVUsQUFDakIsQUFFTjs7a0JBSHVCLEFBR2pCLEFBQ1EsQUFFZDtBQUhNLEFBQ0o7O2VBRVEsQUFDQyxBQUNUO3FCQVJxQixBQU1iLEFBRU8sQUFFakI7QUFKVSxBQUNSOztlQUdPLEFBQ0UsQUFDVDtzQkFaVyxBQUFVLEFBVWQsQUFFUztBQUZULEFBQ1A7QUFYcUIsQUFDdkI7QUFERixBQWdCQTs7a0JBQWUsd0JBQUEsQUFBVyxRQUExQixBQUFlLEFBQW1CIiwiZmlsZSI6IlBvc3RDYXJkTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJjOi9naXRodWIvbmluZ3RvIn0=