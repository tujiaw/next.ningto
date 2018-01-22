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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vblxcb2JqZWN0SWQuanMiXSwibmFtZXMiOlsibW9tZW50Iiwib2JqZWN0SWRUb1RpbWVzdGFtcCIsIm9iamVjdElkIiwidG9TdHJpbmciLCJlIiwidGVzdCIsIlR5cGVFcnJvciIsInBhcnNlSW50Iiwic2xpY2UiLCJNYXRoIiwiZmxvb3IiLCJ0b1RpbWVzdGFtcCIsInRvRGF0ZXRpbWUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7QUFFUCxTQUFBLEFBQVMsb0JBQVQsQUFBNkIsVUFBVSxBQUNyQztNQUFJLEFBQUU7ZUFBVyxTQUFYLEFBQVcsQUFBUyxBQUFhO0FBQXZDLElBQXdDLE9BQUEsQUFBTyxHQUFHLEFBQUUsQ0FDcEQ7TUFBSSxDQUFDLGlCQUFBLEFBQWlCLEtBQXRCLEFBQUssQUFBc0IsV0FBVyxBQUNwQztVQUFNLElBQUEsQUFBSSxVQUFVLDJCQUEyQix5QkFBL0MsQUFBTSxBQUF5QyxBQUFlLEFBQy9EO0FBQ0Q7U0FBTyxTQUFTLFNBQUEsQUFBUyxNQUFULEFBQWUsR0FBeEIsQUFBUyxBQUFrQixJQUEzQixBQUErQixNQUEvQixBQUFxQyxPQUNyQyxLQUFBLEFBQUssTUFBTSxTQUFTLFNBQUEsQUFBUyxNQUFNLENBQXhCLEFBQVMsQUFBZ0IsSUFBekIsQUFBNkIsTUFOVixBQUtyQyxBQUNPLEFBQThDLFlBQVksQUFDbEU7OztBQUVELElBQU07ZUFDUyxxQkFBQSxBQUFTLFVBQVUsQUFDOUI7V0FBTyxvQkFBUCxBQUFPLEFBQW9CLEFBQzVCO0FBSGMsQUFJZjtjQUFZLG9CQUFBLEFBQVMsVUFBVSxBQUM3QjtXQUFPLHNCQUFPLG9CQUFQLEFBQU8sQUFBb0IsV0FBM0IsQUFBc0MsT0FBN0MsQUFBTyxBQUE2QyxBQUNyRDtBQU5ILEFBQWlCLEFBU2pCO0FBVGlCLEFBQ2Y7O2tCQVFGLEFBQWUiLCJmaWxlIjoib2JqZWN0SWQuanMiLCJzb3VyY2VSb290IjoiYzovZ2l0aHViL25pbmd0byJ9