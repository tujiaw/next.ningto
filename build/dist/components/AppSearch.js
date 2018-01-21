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

  return _react2.default.createElement('div', { className: classes.wrapper }, _react2.default.createElement('div', { className: classes.search }, _react2.default.createElement(_Search2.default, null)), _react2.default.createElement('input', { id: 'docsearch-input', className: classes.input, onKeyPress: handleKeyPress }));
}

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles, {
  name: 'AppSearch'
}), (0, _withWidth2.default)(), _pure2.default)(AppSearch);