import React from 'react'
import { withStyles } from 'material-ui/styles'
import List, { ListItem } from 'material-ui/List'

import Loading from '../components/Loading'
import PostCard from './PostCard'

function PostCardList(props) {
  const { classes, posts } = props;
  return (
    <div className={classes.root}>
        <List className={classes.list}>                
            { posts 
            ? posts.map((post, index) => {
                    return <ListItem key={index}><PostCard post={post}/></ListItem>
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
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
    }
});

export default withStyles(styles)(PostCardList);