'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _styles = require('material-ui/styles');

var _ListSubheader = require('material-ui/List/ListSubheader');

var _ListSubheader2 = _interopRequireDefault(_ListSubheader);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _materialUi = require('material-ui');

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _Loading = require('../../components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: 20,
      overflow: 'auto',
      background: theme.palette.background.paper,
      borderRadius: 5
    },
    subHeader: {
      color: theme.palette.text.title,
      fontWeight: 'bold'
    },
    listSection: {
      background: 'inherit'
    },
    divider: {
      marginLeft: 10,
      marginRight: 10
    }
  };
};

var ShowTitleList = function (_React$Component) {
  (0, _inherits3.default)(ShowTitleList, _React$Component);

  function ShowTitleList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShowTitleList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShowTitleList.__proto__ || (0, _getPrototypeOf2.default)(ShowTitleList)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function (id) {
      _index2.default.push({ pathname: '/post', query: { id: id } });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShowTitleList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          data = _props.data;

      return _react2.default.createElement('div', { className: classes.root }, data.archives ? _react2.default.createElement('div', null, _react2.default.createElement(_List2.default, { dense: true, className: classes.root, subheader: _react2.default.createElement(_ListSubheader2.default, { className: classes.subHeader }, data.tagname) }, data.archives.map(function (archive, i) {
        return _react2.default.createElement('div', { key: 'archives' + i, className: classes.listSection }, _react2.default.createElement(_materialUi.Divider, { className: classes.divider }), _react2.default.createElement(_ListSubheader2.default, null, archive.yearMonth), archive.titles && archive.titles.map(function (title, j) {
          return _react2.default.createElement(_List.ListItem, { button: true, key: 'archives' + i + 'title' + j,
            onClick: _this2.handleClick.bind(_this2, title._id)
          }, _react2.default.createElement(_List.ListItemText, { primary: title.title }));
        }));
      }))) : _react2.default.createElement(_Loading2.default, null));
    }
  }]);

  return ShowTitleList;
}(_react2.default.Component);

exports.default = (0, _compose2.default)((0, _styles.withStyles)(styles))(ShowTitleList);