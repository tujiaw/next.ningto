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

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _ProfileCard = require('./ProfileCard');

var _ProfileCard2 = _interopRequireDefault(_ProfileCard);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _utils = require('../../../common/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'c:\\github\\ningto\\containers\\MainLayout\\RightSidebar\\index.js';

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

    return _react2.default.createElement(_materialUi.Grid, { item: true, xs: 4, className: classes.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 50
        }
    }, profile && _react2.default.createElement(_ProfileCard2.default, { profile: profile, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
        }
    }), !_utils2.default.isEmptyObject(hotData) && _react2.default.createElement(_Group2.default, { data: hotData, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
        }
    }), !_utils2.default.isEmptyObject(tagData) && _react2.default.createElement(_Group2.default, { data: tagData, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
        }
    }), !_utils2.default.isEmptyObject(archiveData) && _react2.default.createElement(_Group2.default, { data: archiveData, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
        }
    }));
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

RightSideBar.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(RightSideBar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnNcXE1haW5MYXlvdXRcXFJpZ2h0U2lkZWJhclxcaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoU3R5bGVzIiwiUHJvcFR5cGVzIiwiR3JpZCIsIlJvdXRlciIsIlByb2ZpbGVDYXJkIiwiR3JvdXAiLCJ1dGlscyIsIlJpZ2h0U2lkZUJhciIsInByb3BzIiwiY2xhc3NlcyIsImRhdGEiLCJwcm9maWxlIiwiaG90UG9zdHMiLCJ0YWdzQ291bnQiLCJhcmNoaXZlcyIsImhvdERhdGEiLCJ0YWdEYXRhIiwiYXJjaGl2ZURhdGEiLCJ0aXRsZSIsImxpc3QiLCJvbkl0ZW1DbGljayIsImluZGV4IiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsIl9pZCIsIm1hcCIsIml0ZW0iLCJuYW1lIiwic3ViVGl0bGUiLCJjb3VudCIsImtleXdvcmQiLCJ0eXBlIiwieWVhciIsInllYXJNb250aCIsInN1YnN0ciIsIm1vbnRoIiwicm9vdCIsImlzRW1wdHlPYmplY3QiLCJzdHlsZXMiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiekluZGV4IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVzs7Ozs7Ozs7QUFFbEIsSUFBTSxlQUFlLFNBQWYsQUFBZSxhQUFBLEFBQUMsT0FBVTtRQUFBLEFBQ3BCLFVBRG9CLEFBQ1IsTUFEUSxBQUNwQjtzQkFDMkMsTUFGdkIsQUFFNkI7UUFGN0IsQUFFcEIsc0JBRm9CLEFBRXBCO1FBRm9CLEFBRVgsdUJBRlcsQUFFWDtRQUZXLEFBRUQsd0JBRkMsQUFFRDtRQUZDLEFBRVUsdUJBRlYsQUFFVSxBQUN0Qzs7UUFBTSxVQUFOLEFBQWdCO1FBQUksVUFBcEIs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