'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement('div', { style: Styles.root }, '\u9102ICP\u590717003086\u53F7-1. Copyright \xA9 2016. All Rights Reserved.');
};

var Styles = {
  root: {
    color: '#fff',
    fontSize: 13,
    width: '100%',
    height: 45,
    marginTop: '1em',
    paddingTop: 12,
    background: 'rgba(10, 10, 10, 0.7)',
    textAlign: 'center',
    zIndex: 1100
  }
};

exports.default = Footer;