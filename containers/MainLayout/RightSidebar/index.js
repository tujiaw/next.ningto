
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core'
import Router from 'next/router'
import ProfileCard from './ProfileCard'
import Group from './Group'
import utils from '../../../common/utils'

const RightSideBar = (props) => {
    const { classes } = props;
    const { profile, hotPosts, tagsCount, archives } = props.data;
    const hotData = {}, tagData = {}, archiveData = {};
    if (hotPosts) {
        hotData.title = '热门文章';
        hotData.list = hotPosts;
        hotData.onItemClick = (index) => {
            Router.push({ pathname: '/post', query: { id: hotData.list[index]._id }})
        };
    }
    if (tagsCount) {
        tagData.title = '文章分类';
        tagData.list = tagsCount.map((item) => {
            return { title: item.name, subTitle: item.count, keyword: item.name};
        })
        tagData.onItemClick = (index) => {
            Router.push({ pathname: '/title', query: {
                type: 'tag',
                keyword: tagData.list[index].keyword
            }})
        };
    }
    if (archives) {
        archiveData.title = '文章归档';
        archiveData.list = archives.map((item) => {
            const year = item.yearMonth.substr(0, 4);
            const month = item.yearMonth.substr(5);
            return { title: `${year}年${month}月`, subTitle: item.count, keyword: item.yearMonth};
        })
        archiveData.onItemClick = (index) => {
            Router.push({ pathname: '/title', query: {
                type: 'yearMonth',
                keyword: archiveData.list[index].keyword
            }})
        };
    }

    return (
      <Grid item xs={4} className={classes.root}>
        {profile && <ProfileCard profile={profile} />}
        {!utils.isEmptyObject(hotData) && <Group data={hotData} />}
        {!utils.isEmptyObject(tagData) && <Group data={tagData} />}
        {!utils.isEmptyObject(archiveData) && <Group data={archiveData} />}
      </Grid>
    )
  }

const styles = theme => ({
    root: {
        minWidth: 260,
        maxWidth: 260,
        zIndex: 2,
        marginLeft: 10
    }
});

RightSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RightSideBar);