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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 13,
    width: '100%',
    height: 40,
    marginTop: '1em',
    background: 'rgba(10, 10, 10, 0.7)',
    padding: '0 2% .5em',
    zIndex: 1100
  }
};

exports.default = Footer;