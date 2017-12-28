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
import { LightbulbOutline } from 'material-ui-icons';
import Router from 'next/router'

import Github from '../../components/Github'
import Pagination from '../../components/Pagination'
import NotifyBar from '../../components/NotifyBar'
import Back2top from '../../components/Back2top'
import Footer from '../../components/Footer'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

class SubIndex extends React.Component {
  state = {
    left: false,
    notifyBarOpen: false,
    notifyBarText: '',
  };

  toggleDrawer = (side, open) => () => {
    this.setState({ [side]: open });
  }

  contentSpacing = (props) => {
    if (props.width === 'xs') {
      return 12
    } else if (props.width === 'sm') {
      return 10
    } else {
      return 8
    }
  }

  onHome = () => {
    Router.push('/')
  }

  notifyBarRequestClose = () => {
    this.setState({ notifyBarOpen: false })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NotifyBar open={this.state.notifyBarOpen} 
          text={this.state.notifyBarText}
          notifyBarRequestClose={this.notifyBarRequestClose}
        />
        <Back2top />
        <Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
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
                3inns.cn
              </Typography>
              
              <IconButton color="contrast" aria-label="主页"onClick={this.onHome}>
                <HomeIcon />
              </IconButton>
              <IconButton color="contrast" aria-label="开关灯"onClick={this.props.onLight}>
                <LightbulbOutline />
              </IconButton>
              <IconButton color="contrast" aria-label="github"onClick={this.onGithub}>
              <Github />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Grid container justify='center'>
            <Grid item xs={10}>
              <main className={classes.content}>
                <Grid container justify='center'>
                  <Grid item xs={this.contentSpacing(this.props)}>
                    { this.props.children }
                  </Grid>
                  <Hidden smDown>
                    <RightSidebar data={this.props.postsData} />
                  </Hidden>
                </Grid>
              </main>
            </Grid>
          </Grid>
        { Object.keys(this.props.postsData).length ? <Footer /> : null}
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
    background: theme.palette.grey[400],
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
  content: {
    // backgroundColor: theme.palette.background.default,
    width: '100%',
    height: 'calc(100% - 60px)',
    marginTop: 60,
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 60px)',
      marginTop: 60,
    },
  },
  side: {
    minWidth: 260,
    maxWidth: 260,
    marginTop: 20,
  }
});

SubIndex.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles, { withTheme: true }), 
  withWidth()
)(SubIndex);