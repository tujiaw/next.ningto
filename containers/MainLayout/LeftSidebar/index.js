import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse';
import { AccountBox, Archive, Search, GetApp, Favorite, Home } from '@material-ui/icons'
import Router from 'next/router'

const styles = theme => ({
  root: {
    maxWidth: 360,
    width: 230,
    background: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class LeftSidebar extends React.Component {
  state = { open: true };

  handleClick = (url) => {
    window.open(url)
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.root} subheader={<ListSubheader>ningto.com</ListSubheader>}>
        <ListItem button onClick={this.handleClick.bind(this, 'http://ningto.com')}>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText inset primary="主页" />
        </ListItem>
        <ListItem button onClick={this.handleClick.bind(this, 'http://ningto.com/about')}>
          <ListItemIcon><AccountBox /></ListItemIcon>
          <ListItemText inset primary="关于" />
        </ListItem>
        <ListItem button onClick={this.handleClick.bind(this, 'http://ningto.com/archives')}>
          <ListItemIcon><Archive /></ListItemIcon>
          <ListItemText inset primary="归档" />
        </ListItem>
        <ListItem button onClick={this.handleClick.bind(this, 'http://ningto.com/search')}>
          <ListItemIcon><Search /></ListItemIcon>
          <ListItemText inset primary="搜索" />
        </ListItem>
        <ListItem button onClick={() => Router.push('/program')}>
          <ListItemIcon><GetApp /></ListItemIcon>
          <ListItemText inset primary="小程序" />
        </ListItem>
        <ListItem button onClick={() => Router.push(`/post?id=59edecd82be91645212c9981`)}>
          <ListItemIcon><Favorite /></ListItemIcon>
          <ListItemText inset primary="书签" />
        </ListItem>
        <Collapse component="li" in={this.state.open} transitionduration="auto" unmountOnExit>
          <List disablePadding>
            <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'http://ningto.com/mdviewer')}>
              <ListItemText primary="Markdown预览" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'http://ningto.com/upload.html')}>
              <ListItemText  primary="上传图片" />
            </ListItem>
            <ListItem button className={classes.nested} onClick={this.handleClick.bind(this, 'http://ningto.com/react-wchathot')}>
              <ListItemText  primary="微信文章精选" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

LeftSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftSidebar);