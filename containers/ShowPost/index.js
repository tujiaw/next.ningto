import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import compose from 'recompose/compose'
import Link from 'next/link'

import objectId from '../../common/objectId'
import Loading from '../../components/Loading'
import PostStepper from './PostStepper';

function ShowPost(props) {
    const { classes } = props;
    const { post, nextPost, prevPost } = props.postData;
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
                    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    <footer className={classes.reference}>
                        <strong>（转载本站文章请注明作者和出处：<a href="http://3inns.cn">三家店 - 3inns.cn</a></strong>
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
    marginTop: 20,
    background: theme.palette.common.darkWhite,
    borderRadius: 5,
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
  reference: {
    marginTop: 15,
    fontSize: 11,
    color: '#cc0000'
  }
});

ShowPost.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default compose(
  withStyles(styles),
)(ShowPost);
