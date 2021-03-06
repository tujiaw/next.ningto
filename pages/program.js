import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MainLayout from '../containers/MainLayout'
import net from '../common/net'

const styles = {
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
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
  },
};

const list = [
  { 
    title: 'Acc',
    type: 'Windows客户端',
    desc: '快速找到你要打开的应用程序。不用为了找到某个程序的启动图标而烦恼，不用在任务栏摆一堆的快捷方式，不用在茫茫桌面寻找文件。',
    image: 'http://ningto.com/program/shortcut/acc.png',
    github: 'https://github.com/tujiaw/Acc',
    rightbtn: '下载',
    righturl: 'http://ningto.com/program/download/Acc.zip'
  },
  { 
    title: 'Desktop Monitor',
    type: 'Windows客户端',
    desc: '一个小巧的应用程序，用来监控剪切板、键盘和鼠标，能看到你近期的一些操作记录，不要用它来干坏事！',
    image: 'http://ningto.com/program/shortcut/MonitorClipboard.png',
    github: 'https://github.com/tujiaw/MonitorClipboard',
    rightbtn: '下载',
    righturl: 'http://ningto.com/program/download/MonitorClipboard.exe'
  },
  { 
    title: 'Joke',
    type: 'React native Android App',
    desc: '集合了笑话大全、来福岛笑话、趣图，偶尔看一看放松一下，每天都有更新，笑话多多。',
    image: 'http://ningto.com/program/shortcut/joke.png',
    github: 'https://github.com/tujiaw/react_native_joke',
    rightbtn: '下载',
    righturl: 'http://ningto.com/program/download/joke.apk'
  },
  { 
    title: 'Wechat hot',
    type: 'React web',
    desc: '微信文章精选有20个类别，里面有很多不错的文章。受到微信策略的影响一些老的文章链接打开后显示“链接已过期”。',
    image: 'http://ningto.com/program/shortcut/wchathot.png',
    github: 'https://github.com/tujiaw/react-wchathot',
    rightbtn: '浏览',
    righturl: 'http://ningto.com/react-wchathot'
  },
  { 
    title: '模拟大众点评',
    type: 'React web',
    desc: '学习react的时候写的，只是模拟了一小部分功能，使用了redux，react-router，mock数据使用了rapapi等技术。',
    image: 'http://ningto.com/program/shortcut/dzdp.png',
    github: 'https://github.com/tujiaw/react-dzdp',
    rightbtn: '浏览',
    righturl: 'http://ningto.com/react-dzdp'
  },
  { 
    title: '拾色器',
    type: 'Windows客户端',
    desc: '非常实用的小工具，做UI的时候经常会用到，可以放大拾取某个点的颜色，支持颜色格式转换同时又有方便的快捷键操作。',
    image: 'http://ningto.com/program/shortcut/color.png',
    github: 'https://github.com/tujiaw/Color',
    rightbtn: '下载',
    righturl: 'http://ningto.com/program/download/color.zip'
  }
]

function Program(props) {
  const { classes } = props;
  return (
    <MainLayout rightSidebarData={props.rightSidebarData}>
    <Typography type="headline" component="h1" className={classes.title}>小程序，仅供学习之用</Typography>
    <div className={classes.root}>
    {list.map((item, index) => {
      return (
        <Card className={classes.card} index={index}>
          <CardMedia
            className={classes.media}
            image={item.image}
            title={item.title}
          />
          <CardContent className={classes.content}>
            <Typography type="headline" component="h2">{item.title}</Typography>
            <Typography type="caption">{item.type}</Typography>
            <Typography component="p">{item.desc}</Typography>
          </CardContent>
          <CardActions>
            <Button dense={true} color="primary" onClick={() => window.open(item.github)}>Github</Button>
            <Button dense={true} color="primary" onClick={() => window.open(item.righturl)}>{item.rightbtn}</Button>
          </CardActions>
        </Card>)
    })}
    </div>
    </MainLayout>
  );
}

Program.getInitialProps = async (context) => {
  const result = await net.getRightSidebarData()
  return { rightSidebarData: result.rightSidebarData }
}

Program.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Program);