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