import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import objectId from '../common/objectId'
import Link from 'next/link'
import Router from 'next/router'

function PostCard(props) {
  const { classes, post } = props;
  return (
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
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
                return tag.length ? <Chip key={index} className={classes.chip} label={tag} /> : null;
            })}
          </div>
          <Typography component="p" className={classes.content}>
            { post.content }
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense="true" onClick={() => { Router.push(`/post?id=${post._id}`) }}>阅读全文 »</Button>
        </CardActions>
      </Card>
  );
}

const styles = theme => ({
    root: {
      background: theme.palette.background.paper,
      // borderRadius: 5,
      width: '100%',
      '&:hover': {
        background: theme.palette.background.itemHover,
      }
    },

    title: {
      color: theme.palette.text.title,
      textDecoration: 'none',
      fontSize: '1.8em',
      '&:hover': {
        color: theme.palette.text.titleHover,
      }
    },
    subTitle: {
      marginBottom: 6,
      fontSize: '.8em',
      color: theme.palette.text.secondary,
    },
    cardContent: {
      paddingBottom: '0',
    },
    content: {
      fontSize: '1em',
      color: theme.palette.text.secondary
    },
    chipGroup: {
        display: 'flex',
        marginTop: 6,
        marginBottom: 6,
    },
    chip: {
        height: 25,
        marginRight: 6,
    }
  });

PostCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostCard);