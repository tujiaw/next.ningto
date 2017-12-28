'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Loading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loading() {
    return _react2.default.createElement('p', { style: Styles.root }, '\u52A0\u8F7D\u4E2D\uFF0C\u8BF7\u7A0D\u540E...');
}

var Styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        color: '#999'
    }
};