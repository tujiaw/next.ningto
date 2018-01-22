'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getData(url) {
    return new _promise2.default(function (resolve, reject) {
        (0, _isomorphicUnfetch2.default)(url).then(function (res) {
            if (res && res.json) {
                resolve(res.json());
                window.scrollTo(0, 0);
            }
        }).catch(function (error) {
            console.log('get data error:' + error);
            reject(error);
        });
    });
}

var net = {
    getUrl: function getUrl(url) {
        return getData(_config2.default.API_PREFIX + url);
    },
    getRightSidebarData: function getRightSidebarData() {
        return getData(_config2.default.API_PREFIX + '/rightsidebar');
    },
    getPosts: function getPosts(page) {
        page = page ? '/?page=' + page : '';
        return getData(_config2.default.API_PREFIX + '/list' + page);
    },
    getPost: function getPost(id) {
        return getData(_config2.default.API_PREFIX + '/post/' + id);
    },
    getTagPost: function getTagPost(tagname) {
        return getData(_config2.default.API_PREFIX + '/tags/' + tagname);
    },
    getSearch: function getSearch(keyword) {
        return getData(_config2.default.API_PREFIX + '/search?keyword=' + keyword);
    }
};

exports.default = net;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vblxcbmV0LmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImZldGNoIiwiZ2V0RGF0YSIsInVybCIsInJlc29sdmUiLCJyZWplY3QiLCJ0aGVuIiwicmVzIiwianNvbiIsIndpbmRvdyIsInNjcm9sbFRvIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJuZXQiLCJnZXRVcmwiLCJBUElfUFJFRklYIiwiZ2V0UmlnaHRTaWRlYmFyRGF0YSIsImdldFBvc3RzIiwicGFnZSIsImdldFBvc3QiLCJpZCIsImdldFRhZ1Bvc3QiLCJ0YWduYW1lIiwiZ2V0U2VhcmNoIiwia2V5d29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7QUFFUCxTQUFBLEFBQVMsUUFBVCxBQUFpQixLQUFLLEFBQ3BCO2lDQUFtQixVQUFBLEFBQUMsU0FBRCxBQUFVLFFBQVcsQUFDcEM7eUNBQUEsQUFBTSxLQUFOLEFBQVcsS0FBSyxVQUFBLEFBQUMsS0FBUSxBQUNyQjtnQkFBSSxPQUFPLElBQVgsQUFBZSxNQUFNLEFBQ2pCO3dCQUFRLElBQVIsQUFBUSxBQUFJLEFBQ1o7dUJBQUEsQUFBTyxTQUFQLEFBQWdCLEdBQWhCLEFBQW1CLEFBQ3RCO0FBQ0o7QUFMRCxXQUFBLEFBS0csTUFBTSxVQUFBLEFBQUMsT0FBVSxBQUNoQjtvQkFBQSxBQUFRLElBQUksb0JBQVosQUFBZ0MsQUFDaEM7bUJBQUEsQUFBTyxBQUNWO0FBUkQsQUFTSDtBQVZELEFBQU8sQUFXUixLQVhROzs7QUFhVCxJQUFNO1lBQ00sZ0JBQUEsQUFBQyxLQUFPLEFBQ1o7ZUFBTyxRQUFRLGlCQUFBLEFBQU8sYUFBdEIsQUFBTyxBQUE0QixBQUN0QztBQUhPLEFBSVI7eUJBQXFCLCtCQUFNLEFBQ3ZCO2VBQU8sUUFBUSxpQkFBQSxBQUFPLGFBQXRCLEFBQU8sQUFBNEIsQUFDdEM7QUFOTyxBQU9SO2NBQVUsa0JBQUEsQUFBQyxNQUFTLEFBQ2hCO2VBQU8sT0FBUSxZQUFSLEFBQW9CLE9BQTNCLEFBQW1DLEFBQ25DO2VBQU8sUUFBUSxpQkFBQSxBQUFPLGFBQVAsQUFBb0IsVUFBbkMsQUFBTyxBQUFzQyxBQUNoRDtBQVZPLEFBV1I7YUFBUyxpQkFBQSxBQUFDLElBQU8sQUFDYjtlQUFPLFFBQVEsaUJBQUEsQUFBTyxhQUFQLEFBQW9CLFdBQW5DLEFBQU8sQUFBdUMsQUFDakQ7QUFiTyxBQWNSO2dCQUFZLG9CQUFBLEFBQUMsU0FBWSxBQUNyQjtlQUFPLFFBQVEsaUJBQUEsQUFBTyxhQUFQLEFBQW9CLFdBQW5DLEFBQU8sQUFBdUMsQUFDakQ7QUFoQk8sQUFpQlI7ZUFBVyxtQkFBQSxBQUFDLFNBQVksQUFDcEI7ZUFBTyxRQUFRLGlCQUFBLEFBQU8sYUFBUCxBQUFvQixxQkFBbkMsQUFBTyxBQUFpRCxBQUMzRDtBQW5CTCxBQUFZLEFBc0JaO0FBdEJZLEFBQ1I7O2tCQXFCSixBQUFlIiwiZmlsZSI6Im5ldC5qcyIsInNvdXJjZVJvb3QiOiJjOi9naXRodWIvbmluZ3RvIn0=