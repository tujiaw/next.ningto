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

var _MobileStepper = require('material-ui/MobileStepper');

var _MobileStepper2 = _interopRequireDefault(_MobileStepper);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _KeyboardArrowLeft = require('material-ui-icons/KeyboardArrowLeft');

var _KeyboardArrowLeft2 = _interopRequireDefault(_KeyboardArrowLeft);

var _KeyboardArrowRight = require('material-ui-icons/KeyboardArrowRight');

var _KeyboardArrowRight2 = _interopRequireDefault(_KeyboardArrowRight);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      flexGrow: 1
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit * 4,
      marginBottom: 20,
      background: theme.palette.background.default
    }
  };
};

var PostStepper = function (_React$Component) {
  (0, _inherits3.default)(PostStepper, _React$Component);

  function PostStepper() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PostStepper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostStepper.__proto__ || (0, _getPrototypeOf2.default)(PostStepper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleNext = function () {
      _index2.default.push({ pathname: '/post', query: { id: _this.props.nextPost._id } });
    }, _this.handleBack = function () {
      _index2.default.push({ pathname: '/post', query: { id: _this.props.prevPost._id } });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PostStepper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          nextPost = _props.nextPost,
          prevPost = _props.prevPost;

      return _react2.default.createElement('div', { className: classes.root }, _react2.default.createElement(_MobileStepper2.default, {
        type: 'text',
        steps: 2,
        position: 'static',
        className: classes.mobileStepper,
        nextButton: _react2.default.createElement(_Button2.default, { dense: true, onClick: this.handleNext, disabled: !!!nextPost }, nextPost ? nextPost.title : '这是最后一篇了', theme.direction === 'rtl' ? _react2.default.createElement(_KeyboardArrowLeft2.default, null) : _react2.default.createElement(_KeyboardArrowRight2.default, null)),
        backButton: _react2.default.createElement(_Button2.default, { dense: true, onClick: this.handleBack, disabled: !!!prevPost }, theme.direction === 'rtl' ? _react2.default.createElement(_KeyboardArrowRight2.default, null) : _react2.default.createElement(_KeyboardArrowLeft2.default, null), prevPost ? prevPost.title : '前面已经没有了')
      }));
    }
  }]);

  return PostStepper;
}(_react2.default.Component);

exports.default = (0, _styles.withStyles)(styles, { withTheme: true })(PostStepper);