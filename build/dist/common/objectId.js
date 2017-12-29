'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectIdToTimestamp(objectId) {
  try {
    objectId = objectId.toString();
  } catch (e) {}
  if (!/^[0-9a-z]{24}$/.test(objectId)) {
    throw new TypeError('Invalid objectId, got ' + (0, _stringify2.default)(objectId));
  }
  return parseInt(objectId.slice(0, 8), 16) * 1000 + Math.floor(parseInt(objectId.slice(-6), 16) / 16777.217); // convert 0x000000 ~ 0xffffff to 0 ~ 999
};

var objectId = {
  toTimestamp: function toTimestamp(objectId) {
    return objectIdToTimestamp(objectId);
  },
  toDatetime: function toDatetime(objectId) {
    return (0, _moment2.default)(objectIdToTimestamp(objectId)).format('YYYY-MM-DD HH:mm');
  }
};

exports.default = objectId;