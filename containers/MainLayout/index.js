import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Typography, 
  IconButton, Grid, Hidden, Drawer
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import HomeIcon from 'material-ui-icons/Home'
import compose from 'recompose/compose';
import withWidth from 'material-ui/utils/withWidth';
import Router from 'next/router'

import AppSearch from '../../components/AppSearch'
import Github from '../../components/Github'
import Pagination from '../../components/Pagination'
import NotifyBar from '../../components/NotifyBar'
import Back2top from '../../components/Back2top'
import Footer from '../../components/Footer'
import utils from '../../common/utils'
import config from '../../common/config'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

class MainLayout extends React.Component {
  state = {
    left: false,
    notifyBarOpen: false,
    notifyBarText: '',
  };

  componentDidMount() {
    this.instance.appendChild(utils.createScript(config.BAIDU_SHARE))
  }

  toggleDrawer = (side, open) => () => {
    this.setState({ [side]: open });
  }

  contentSpacing = (props) => {
    if (window && window.isMobile && window.isMobile.any()) {
      return 12;
    }
    const size = { 'xs': 10, 'sm': 10, 'md': 7, 'lg': 6, 'xl': 6 }
    return size[props.width] || 10
  }

  onHome = () => {
    Router.push('/')
  }

  onGithub = () => {
    window.open('https://github.com/tujiaw')
  }

  notifyBarRequestClose = () => {
    this.setState({ notifyBarOpen: false })
  }

  handleSearch = (keyword) => {
    console.log('app.js keyword:' + keyword)
    if (keyword.length === 0) {
      Router.push('/')
    } else if (keyword.length === 1) {
      this.setState({ notifyBarOpen: true, notifyBarText: '请至少输入两个字符！！！' })
    } else if (keyword.length > 1) {
      Router.push({ pathname: '/title', query: { type: 'search', keyword: keyword }})
    } 
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} ref={e => (this.instance = e)}>
        <NotifyBar open={this.state.notifyBarOpen} 
          text={this.state.notifyBarText}
          notifyBarRequestClose={this.notifyBarRequestClose}
        />
        <Back2top />
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <LeftSidebar />
          </div>
        </Drawer>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                aria-label="open drawer"
                onClick={this.toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.title} noWrap>
                泞途 - ningto.com
              </Typography>
              <AppSearch onRequestSearch={this.handleSearch}/>
              <IconButton color="contrast" aria-label="主页"onClick={this.onHome}>
                <HomeIcon />
              </IconButton>
              <IconButton color="contrast" aria-label="github"onClick={this.onGithub}>
              <Github />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid container justify='center' item xs={12}>
              <main className={classes.content}>
                <Grid container justify='center'>
                  <Grid className={classes.children} item xs={this.contentSpacing(this.props)}>
                    { this.props.children }
                  </Grid>
                  <Hidden smDown>
                    {this.props.rightSidebarData ? <RightSidebar data={this.props.rightSidebarData}/> : null}
                  </Hidden>
                  {/* <div className={classes.bgright}></div> */}
                  <Footer />
                </Grid>
              </main>
          </Grid>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    // background: theme.palette.grey[400],
    backgroundColor: '#e6ecf0',
  },
  appFrame: {
    display: 'flex',
    flex: 1,
    width: '100%',
  },
  title: {
    display: 'flex',
    flex: 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  children: {
    zIndex: 1,
  },
  bgright: {
    top: 0,
    right: 0,
    width: 271,
    height: '100%',
    position: 'fixed',
    background: 'url(/static/img/bgright.jpg) no-repeat',
  },
  content: {
    // backgroundColor: theme.palette.background.default,
    width: '100%',
    height: 'calc(100% - 80px)',
    marginTop: 80,
    // background:'url(/static/img/bgleft.jpg) no-repeat',
    // backgroundAttachment: 'fixed',

    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 80px)',
      marginTop: 80,
    },
  },
  side: {
    minWidth: 260,
    maxWidth: 260,
    marginTop: 20,
  }
});

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }), 
  withWidth()
)(MainLayout);