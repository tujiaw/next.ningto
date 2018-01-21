'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _Card = require('material-ui/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _MainLayout = require('../containers/MainLayout');

var _MainLayout2 = _interopRequireDefault(_MainLayout);

var _net = require('../common/net');

var _net2 = _interopRequireDefault(_net);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var styles = {
  title: {
    marginTop: 20,
    fontWeight: 'bold'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1
  },
  card: {
    maxWidth: 340,
    margin: 5,
    borderRadius: 5
  },
  content: {
    paddingBottom: 0
  },
  media: {
    height: 180,
    borderRadius: 5
  }
};

var list = [{
  title: 'Acc',
  type: 'Windows客户端',
  desc: '快速找到你要打开的应用程序。不用为了找到某个程序的启动图标而烦恼，不用在任务栏摆一堆的快捷方式，不用在茫茫桌面寻找文件。',
  image: 'http://3inns.cn/program/shortcut/acc.png',
  github: 'https://github.com/tujiaw/Acc',
  rightbtn: '下载',
  righturl: 'http://3inns.cn/program/download/Acc.zip'
}, {
  title: 'Desktop Monitor',
  type: 'Windows客户端',
  desc: '一个小巧的应用程序，用来监控剪切板、键盘和鼠标，能看到你近期的一些操作记录，不要用它来干坏事！',
  image: 'http://3inns.cn/program/shortcut/MonitorClipboard.png',
  github: 'https://github.com/tujiaw/MonitorClipboard',
  rightbtn: '下载',
  righturl: 'http://3inns.cn/program/download/MonitorClipboard.exe'
}, {
  title: 'Joke',
  type: 'React native Android App',
  desc: '集合了笑话大全、来福岛笑话、趣图，偶尔看一看放松一下，每天都有更新，笑话多多。',
  image: 'http://3inns.cn/program/shortcut/joke.png',
  github: 'https://github.com/tujiaw/react_native_joke',
  rightbtn: '下载',
  righturl: 'http://3inns.cn/program/download/joke.apk'
}, {
  title: 'Wechat hot',
  type: 'React web',
  desc: '微信文章精选有20个类别，里面有很多不错的文章。受到微信策略的影响一些老的文章链接打开后显示“链接已过期”。',
  image: 'http://3inns.cn/program/shortcut/wchathot.png',
  github: 'https://github.com/tujiaw/react-wchathot',
  rightbtn: '浏览',
  righturl: 'http://3inns.cn/react-wchathot'
}, {
  title: '模拟大众点评',
  type: 'React web',
  desc: '学习react的时候写的，只是模拟了一小部分功能，使用了redux，react-router，mock数据使用了rapapi等技术。',
  image: 'http://3inns.cn/program/shortcut/dzdp.png',
  github: 'https://github.com/tujiaw/react-dzdp',
  rightbtn: '浏览',
  righturl: 'http://3inns.cn/react-dzdp'
}, {
  title: '拾色器',
  type: 'Windows客户端',
  desc: '非常实用的小工具，做UI的时候经常会用到，可以放大拾取某个点的颜色，支持颜色格式转换同时又有方便的快捷键操作。',
  image: 'http://3inns.cn/program/shortcut/color.png',
  github: 'https://github.com/tujiaw/Color',
  rightbtn: '下载',
  righturl: 'http://3inns.cn/program/download/color.zip'
}];

function Program(props) {
  var classes = props.classes;

  return _react2.default.createElement(_MainLayout2.default, { rightSidebarData: props.rightSidebarData }, _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h1', className: classes.title }, '\u5C0F\u7A0B\u5E8F\uFF0C\u4EC5\u4F9B\u5B66\u4E60\u4E4B\u7528'), _react2.default.createElement('div', { className: classes.root }, list.map(function (item, index) {
    return _react2.default.createElement(_Card2.default, { className: classes.card, index: index }, _react2.default.createElement(_Card.CardMedia, {
      className: classes.media,
      image: item.image,
      title: item.title
    }), _react2.default.createElement(_Card.CardContent, { className: classes.content }, _react2.default.createElement(_Typography2.default, { type: 'headline', component: 'h2' }, item.title), _react2.default.createElement(_Typography2.default, { type: 'caption' }, item.type), _react2.default.createElement(_Typography2.default, { component: 'p' }, item.desc)), _react2.default.createElement(_Card.CardActions, null, _react2.default.createElement(_Button2.default, { dense: true, color: 'primary', onClick: function onClick() {
        return window.open(item.github);
      } }, 'Github'), _react2.default.createElement(_Button2.default, { dense: true, color: 'primary', onClick: function onClick() {
        return window.open(item.righturl);
      } }, item.rightbtn)));
  })));
}

Program.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _net2.default.getRightSidebarData();

          case 2:
            result = _context.sent;
            return _context.abrupt('return', { rightSidebarData: result.rightSidebarData });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = (0, _styles.withStyles)(styles)(Program);