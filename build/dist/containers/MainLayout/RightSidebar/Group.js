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

var _styles = require('material-ui/styles');

var _ListSubheader = require('material-ui/List/ListSubheader');

var _ListSubheader2 = _interopRequireDefault(_ListSubheader);

var _List = require('material-ui/List');

var _List2 = _interopRequireDefault(_List);

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      // background: theme.palette.background.default,
      marginTop: 10
    },
    listItem: {
      padding: 6,
      margin: 0
    },
    listItemText: {
      padding: 0,
      margin: 0
    }

  };
};

var Group = function (_React$Component) {
  (0, _inherits3.default)(Group, _React$Component);

  function Group() {
    (0, _classCallCheck3.default)(this, Group);

    return (0, _possibleConstructorReturn3.default)(this, (Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).apply(this, arguments));
  }

  (0, _createClass3.default)(Group, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          data = _props.data;

      return _react2.default.createElement(_Card2.default, { className: classes.root }, _react2.default.createElement(_Card.CardContent, null, _react2.default.createElement(_List2.default, { dense: true, subheader: _react2.default.createElement(_ListSubheader2.default, { className: classes.subHeader }, data.title) }, data.list && data.list.map(function (post, index) {
        var title = post.title;
        if (post.subTitle) {
          title += ' (' + post.subTitle + ')';
        }
        return _react2.default.createElement(_List.ListItem, { key: index, className: classes.listItem, onClick: data.onItemClick.bind(data, index), button: true }, _react2.default.createElement(_List.ListItemText, { primary: title, className: classes.listItemText }));
      }))));
    }
  }]);

  return Group;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles)(Group);