'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _withWidth = require('material-ui/utils/withWidth');

var _withWidth2 = _interopRequireDefault(_withWidth);

var _Search = require('material-ui-icons/Search');

var _Search2 = _interopRequireDefault(_Search);

var _colorManipulator = require('material-ui/styles/colorManipulator');

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\components\\AppSearch.js';


var searchTimer = void 0;

function initDocsearch() {
  searchTimer = setInterval(function () {
    if (window.docsearch && document.querySelector('#docsearch-input')) {
      clearInterval(searchTimer);
      window.docsearch({
        apiKey: '1d8534f83b9b0cfea8f16498d19fbcab',
        indexName: 'material-ui',
        inputSelector: '#docsearch-input',
        debug: false // Set debug to true if you want to inspect the dropdown
      });
    }
  }, 100);
}

function removeDocsearch() {
  clearInterval(searchTimer);
}

var styles = function styles(theme) {
  return {
    '@global': {
      '.algolia-autocomplete': {
        fontFamily: theme.typography.fontFamily,
        '& .algolia-docsearch-suggestion--category-header-lvl0': {
          color: theme.palette.text.primary
        },
        '& .algolia-docsearch-suggestion--subcategory-column-text': {
          color: theme.palette.text.secondary
        },
        '& .algolia-docsearch-suggestion--highlight': {
          color: theme.palette.type === 'light' ? '#174d8c' : '#acccf1'
        },
        '& .algolia-docsearch-suggestion': {
          background: 'transparent'
        },
        '& .algolia-docsearch-suggestion--title': (0, _extends3.default)({}, theme.typography.title),
        '& .algolia-docsearch-suggestion--text': (0, _extends3.default)({}, theme.typography.body1),
        '& .ds-dropdown-menu': {
          boxShadow: theme.shadows[1],
          borderRadius: 2,
          '&::before': {
            display: 'none'
          },
          '& [class^=ds-dataset-]': {
            border: 0,
            borderRadius: 2,
            background: theme.palette.background.paper
          }
        }
      }
    },
    wrapper: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      marginRight: 16,
      borderRadius: 2,
      background: (0, _colorManipulator.fade)(theme.palette.common.white, 0.15),
      '&:hover': {
        background: (0, _colorManipulator.fade)(theme.palette.common.white, 0.25)
      },
      '& $input': {
        transition: theme.transitions.create('width'),
        width: 120,
        '&:focus': {
          width: 170
        }
      }
    },
    search: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      font: 'inherit',
      padding: theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit * 9 + 'px',
      border: 0,
      display: 'block',
      verticalAlign: 'middle',
      whiteSpace: 'normal',
      background: 'none',
      margin: 0, // Reset for Safari
      color: 'inherit',
      width: '100%',
      '&:focus': {
        outline: 0
      }
    }
  };
};

function AppSearch(props) {
  var classes = props.classes,
      width = props.width,
      onRequestSearch = props.onRequestSearch;

  if (!(0, _withWidth.isWidthUp)('sm', width)) {
    removeDocsearch();
    return null;
  }

  initDocsearch();

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter' || event.key === 'enter') {
      if (onRequestSearch) {
        console.log(event.target.value);
        onRequestSearch(event.target.value);
      }
    }
  };

  return _react2.default.createElement('div', { className: classes.wrapper, __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    }
  }, _react2.default.createElement('div', { className: classes.search, __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    }
  }, _react2.default.createElement(_Search2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  })), _react2.default.createElement('input', { id: 'docsearch-input', className: classes.input, onKeyPress: handleKeyPress, __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }));
}

AppSearch.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  width: _propTypes2.default.string.isRequired
};

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles, {
  name: 'AppSearch'
}), (0, _withWidth2.default)(), _pure2.default)(AppSearch);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEFwcFNlYXJjaC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImNvbXBvc2UiLCJwdXJlIiwiUHJvcFR5cGVzIiwid2l0aFdpZHRoIiwiaXNXaWR0aFVwIiwiU2VhcmNoSWNvbiIsImZhZGUiLCJ3aXRoU3R5bGVzIiwic2VhcmNoVGltZXIiLCJpbml0RG9jc2VhcmNoIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJkb2NzZWFyY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckludGVydmFsIiwiYXBpS2V5IiwiaW5kZXhOYW1lIiwiaW5wdXRTZWxlY3RvciIsImRlYnVnIiwicmVtb3ZlRG9jc2VhcmNoIiwic3R5bGVzIiwiZm9udEZhbWlseSIsInRoZW1lIiwidHlwb2dyYXBoeSIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidHlwZSIsImJhY2tncm91bmQiLCJ0aXRsZSIsImJvZHkxIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJib3JkZXIiLCJwYXBlciIsIndyYXBwZXIiLCJwb3NpdGlvbiIsIm1hcmdpblJpZ2h0IiwiY29tbW9uIiwid2hpdGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJ3aWR0aCIsInNlYXJjaCIsInNwYWNpbmciLCJ1bml0IiwiaGVpZ2h0IiwicG9pbnRlckV2ZW50cyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImlucHV0IiwiZm9udCIsInBhZGRpbmciLCJ2ZXJ0aWNhbEFsaWduIiwid2hpdGVTcGFjZSIsIm1hcmdpbiIsIm91dGxpbmUiLCJBcHBTZWFyY2giLCJwcm9wcyIsImNsYXNzZXMiLCJvblJlcXVlc3RTZWFyY2giLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicHJvcFR5cGVzIiwib2JqZWN0Iiwi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QUtJLEFBQ1Q7cUJBTkssQUFNVSxBQUNmO2tCQVBLLEFBT08sQUFDWjtrQkFSSyxBQVFPLEFBQ1o7Y0FUSyxBQVNHLEdBQUcsQUFDWDthQVZLLEFBVUUsQUFDUDthQVhLLEFBV0UsQUFDUDs7aUJBMUVXLEFBQVUsQUE4RGhCLEFBWU0sQUFDQTtBQURBLEFBQ1Q7QUFiRyxBQUNMO0FBL0RxQixBQUN2QjtBQURGOztBQWdGQSxTQUFBLEFBQVMsVUFBVCxBQUFtQixPQUFPO01BQUEsQUFDaEIsVUFEZ0IsQUFDb0IsTUFEcEIsQUFDaEI7TUFEZ0IsQUFDUCxRQURPLEFBQ29CLE1BRHBCLEFBQ1A7TUFETyxBQUNBLGtCQURBLEFBQ29CLE1BRHBCLEFBQ0EsQUFFeEI7O01BQUksQ0FBQywwQkFBQSxBQUFVLE1BQWYsQUFBSyxBQUFnQixRQUFRLEFBQzNCO0FBQ0E7V0FBQSxBQUFPLEFBQ1I7QUFFRDs7QUFFQTs7TUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsZUFBQSxBQUFDLE9BQVUsQUFDaEM7UUFBSSxNQUFBLEFBQU0sUUFBTixBQUFjLFdBQVcsTUFBQSxBQUFNLFFBQW5DLEFBQTJDLFNBQVMsQUFDbEQ7VUFBQSxBQUFJLGlCQUFpQixBQUNuQjtnQkFBQSxBQUFRLElBQUksTUFBQSxBQUFNLE9BQWxCLEFBQXlCLEFBQ3pCO3dCQUFnQixNQUFBLEFBQU0sT0FBdEIsQUFBNkIsQUFDOUI7QUFDRjtBQUNGO0FBUEQsQUFTQTs7eUJBQ0UsY0FBQSxTQUFLLFdBQVcsUUFBaEIsQUFBd0I7Z0JBQXhCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLGNBQUEsU0FBSyxXQUFXLFFBQWhCLEFBQXdCO2dCQUF4QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLGdEQUVLLElBQVAsQUFBVSxtQkFBa0IsV0FBVyxRQUF2QyxBQUErQyxPQUFPLFlBQXRELEFBQWtFO2dCQUFsRTtrQkFMSixBQUNFLEFBSUUsQUFHTDtBQUhLOzs7O0FBS04sVUFBQSxBQUFVO1dBQ0Msb0JBQUEsQUFBVSxPQURDLEFBQ00sQUFDMUI7U0FBTyxvQkFBQSxBQUFVLE9BRm5CLEFBQXNCLEFBRUksQUFHMUI7QUFMc0IsQUFDcEI7O2lFQUtBLEFBQVc7UUFERSxBQUNiLEFBQW1CLEFBQ1g7QUFEVyxBQUNqQixDQURGLENBRGEsRUFBQSxBQUliLEFBQ0EsNENBTEYsQUFBZSxBQU1iIiwiZmlsZSI6IkFwcFNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiJjOi9naXRodWIvbmluZ3RvIn0=