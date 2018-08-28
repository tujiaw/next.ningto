import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Loading from '../components/Loading'
import PostCard from './PostCard'

function PostCardList(props) {
  const { classes, posts } = props;
  return (
    <div className={classes.root}>
        <List className={classes.list}>                
            { posts 
            ? posts.map((post, index) => {
                  return <ListItem key={index} className={classes.listItem}>
                    <PostCard post={post}/>
                  </ListItem>
                })
            :  <Loading />
            }
        </List>
    </div>
  )
}

const styles = theme => ({
  root: {
  },
  list: {
    paddingTop: 0,
  },
  listItem: {
    padding: 0,
    paddingBottom: 1,
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
  }
});

export default withStyles(styles)(PostCardList);