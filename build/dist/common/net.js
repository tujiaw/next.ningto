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

var cacheUrl = ['http://3inns.cn/api/list/?page=1'];

var cache = {};
function getData(url) {
    var useCache = cacheUrl.indexOf(url) >= 0;
    return new _promise2.default(function (resolve, reject) {
        console.log('get url:' + url);
        if (useCache && cache[url]) {
            console.log('from cache');
            return resolve(cache[url]);
        }

        (0, _isomorphicUnfetch2.default)(url).then(function (res) {
            if (res && res.json) {
                if (useCache) {
                    cache[url] = res.json();
                    resolve(cache[url]);
                } else {
                    resolve(res.json());
                }
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