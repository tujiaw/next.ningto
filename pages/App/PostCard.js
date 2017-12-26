import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import objectId from '../../common/objectId'
import Link from 'next/link'

function PostCard(props) {
  const { classes, post } = props;

  return (
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography type="body1" className={classes.subTitle}>
          { objectId.toDatetime(post._id) } 阅读({ post.pv })
          </Typography>
          <Typography type="headline" component="h2">
            <Link className={classes.title} to={'/post/' + post._id}>{ post.title }</Link>
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
          <Button dense onClick={() => {  }}>阅读全文 »</Button>
        </CardActions>
      </Card>
  );
}

const styles = theme => ({
    root: {
      background: theme.palette.background.paper,
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