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

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileCard = function (_React$Component) {
  (0, _inherits3.default)(ProfileCard, _React$Component);

  function ProfileCard() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ProfileCard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ProfileCard.__proto__ || (0, _getPrototypeOf2.default)(ProfileCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = { open: true }, _this.handleClick = function () {
      _this.setState({ open: !_this.state.open });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ProfileCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          profile = _props.profile;

      var hits = [{ name: '文章数', count: profile.postCount || 100 }, { name: '总访问量', count: profile.hitCount || 54321 }, { name: '今日访问', count: profile.hitToday || 321 }];

      return _react2.default.createElement(_Card2.default, { className: classes.root }, _react2.default.createElement('div', { className: classes.row }, _react2.default.createElement('a', { href: 'https://github.com/tujiaw' }, _react2.default.createElement('img', { className: classes.img, alt: 'avatar', src: 'http://3inns.cn/img/myavatar.jpg' })), _react2.default.createElement('div', { className: classes.title }, _react2.default.createElement('span', { className: classes.mainTitle }, '3inns.cn'), _react2.default.createElement('span', { className: classes.subTitle }, 'Keep it simple,stupid'))), _react2.default.createElement('div', { className: classes.row }, hits.map(function (item, index) {
        return _react2.default.createElement('div', { key: index, className: classes.counter }, _react2.default.createElement('div', { className: classes.counterTitle }, item.name), _react2.default.createElement('div', { className: classes.counterNum }, item.count));
      })));
    }
  }]);

  return ProfileCard;
}(_react2.default.Component);

var styles = function styles(theme) {
  return {
    root: {
      background: theme.palette.background.paper,
      padding: 10,
      display: 'flex',
      flexDirection: 'column'
    },
    row: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    img: {
      width: '60px',
      height: '60px',
      borderRadius: '30px'
    },
    title: {
      display: 'flex',
      flexDirection: 'column'
    },
    mainTitle: {
      fontWeight: 'bold'
    },
    subTitle: {
      fontSize: '13px',
      color: '#788087'
    },
    counterNum: {
      color: '#4f4f4f',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    counterTitle: {
      color: '#788087'
    }
  };
};

exports.default = (0, _styles.withStyles)(styles)(ProfileCard);