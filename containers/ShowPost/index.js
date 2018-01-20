import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import compose from 'recompose/compose'
import Link from 'next/link'

import objectId from '../../common/objectId'
import Loading from '../../components/Loading'

import utils from '../../common/utils'
import config from '../../common/config'

import PostStepper from './PostStepper';

const ShowPost = (props) => {
  const { classes } = props;
  const { toc, post, nextPost, prevPost } = props.postData;
  return post 
  ? (
      <div className={classes.root}>
          <Card className={classes.card}>
              <CardContent>
                  <Typography type="body1" className={classes.subTitle}>
                  { objectId.toDatetime(post._id) } 阅读({ post.pv })
                  </Typography>
                  <Typography type="headline" component="h2">
                  <Link href={`/post?id=${post._id}`}>
                      <a className={classes.title}>{ post.title }</a>
                  </Link>
                  </Typography>
                  <div className={classes.chipGroup}>
                  { post.tags && post.tags.map((tag, index) => {
                      return tag.length ? <Chip key={index} className={classes.chip} label={tag} /> : null
                  })}
                  </div>
                  { toc && toc.length && 
                    <ExpansionPanel className={classes.toc} defaultExpanded={true}>
                      <ExpansionPanelSummary className={classes.tocSummary} expandIcon={<ExpandMoreIcon />}>
                        <Typography>文章目录</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.tocDetails}>
                        <div dangerouslySetInnerHTML={{ __html: toc }}></div>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  }
                  <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                  <footer className={classes.reference}>
                      <strong>（转载本站文章请注明作者和出处：<a href="http://ningto.com">泞途 - ningto.com</a></strong>
                  </footer>
              </CardContent>
          <CardActions>
              <PostStepper nextPost={nextPost} prevPost={prevPost} />
          </CardActions>
          </Card>
      </div>
  )
  : <Loading />;
}

const styles = theme => ({
  root: {
    background: theme.palette.common.darkWhite,
    borderRadius: 5,
    paddingTop: 0,
    // 锚点偏移
    '& .anchor-fix': { 
      display: 'block',
      height: 64, /*same height as header*/
      marginTop: -64, /*same height as header*/
      visibility: 'hidden'
    },
  },
  title: {
    color: theme.palette.text.title,
    textDecoration: 'none',
    fontSize: '1.2em',
    '&:hover': {
      color: theme.palette.text.titleHover,
    }
  },
  subTitle: {
    marginBottom: 6,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  chipGroup: {
    display: 'flex',
    marginTop: 6,
    marginBottom: 6,
  },
  chip: {
    height: 25,
    marginRight: 6,
  },
  toc: {
    float: 'right',
    border:'1 solid #e2e2e2',
    background: '#eee',
    borderRadius: 4,
    border: '1 solid #ddd',
    maxWidth: 250,
    minWidth: 90,
    fontSize: 12,
    margin: 0,
    padding: 0,
    marginLeft: 10,
    '& ul': {
      margin: 0,
      padding: 0,
      paddingLeft: '1em',
    },
    '& a': {
      color: '#4078c0',
      textDecoration: 'none',
      '&:hover': {
        color: '#f00'
      },
    }
  },
  tocSummary: {
    minHeight: 36,
    maxHeight: 36,
  },
  tocDetails: {
    padding: 0,
    margin: 20,
    marginTop: 0,
  },
  reference: {
    marginTop: 15,
    fontSize: 11,
    color: '#cc0000'
  },
  sohucsWrap: {
    margin: 10
  }
});

ShowPost.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default compose(
  withStyles(styles),
)(ShowPost);
