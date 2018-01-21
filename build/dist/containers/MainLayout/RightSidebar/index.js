'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('material-ui/styles');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _materialUi = require('material-ui');

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _ProfileCard = require('./ProfileCard');

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _utils = require('../../../common/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RightSideBar = function RightSideBar(props) {
    var classes = props.classes;
    var _props$data = props.data,
        profile = _props$data.profile,
        hotPosts = _props$data.hotPosts,
        tagsCount = _props$data.tagsCount,
        archives = _props$data.archives;

    var hotData = {},
        tagData = {},
        archiveData = {};
    if (hotPosts) {
        hotData.title = '热门文章';
        hotData.list = hotPosts;
        hotData.onItemClick = function (index) {
            _index2.default.push({ pathname: '/post', query: { id: hotData.list[index]._id } });
        };
    }
    if (tagsCount) {
        tagData.title = '文章分类';
        tagData.list = tagsCount.map(function (item) {
            return { title: item.name, subTitle: item.count, keyword: item.name };
        });
        tagData.onItemClick = function (index) {
            _index2.default.push({ pathname: '/title', query: {
                    type: 'tag',
                    keyword: tagData.list[index].keyword
                } });
        };
    }
    if (archives) {
        archiveData.title = '文章归档';
        archiveData.list = archives.map(function (item) {
            var year = item.yearMonth.substr(0, 4);
            var month = item.yearMonth.substr(5);
            return { title: year + '\u5E74' + month + '\u6708', subTitle: item.count, keyword: item.yearMonth };
        });
        archiveData.onItemClick = function (index) {
            _index2.default.push({ pathname: '/title', query: {
                    type: 'yearMonth',
                    keyword: archiveData.list[index].keyword
                } });
        };
    }

    return _react2.default.createElement(_materialUi.Grid, { item: true, xs: 4, className: classes.root }, profile && _react2.default.createElement(_ProfileCard2.default, { profile: profile }), !_utils2.default.isEmptyObject(hotData) && _react2.default.createElement(_Group2.default, { data: hotData }), !_utils2.default.isEmptyObject(tagData) && _react2.default.createElement(_Group2.default, { data: tagData }), !_utils2.default.isEmptyObject(archiveData) && _react2.default.createElement(_Group2.default, { data: archiveData }));
};

var styles = function styles(theme) {
    return {
        root: {
            minWidth: 260,
            maxWidth: 260,
            zIndex: 2
        }
    };
};

exports.default = (0, _styles.withStyles)(styles)(RightSideBar);