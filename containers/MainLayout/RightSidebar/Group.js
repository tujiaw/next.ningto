import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Card, { CardContent } from 'material-ui/Card';

const styles = theme => ({
  root: {
    // background: theme.palette.background.default,
    marginTop: 10,
  },
  listItem: {
    padding: 6,
    margin: 0,
  },
  listItemText: {
    padding: 0,
    margin: 0,
  }
  
});

class Group extends React.Component {
  render() {
    const { classes, data } = this.props;

    return (
      <Card className={classes.root}>
        <CardContent>
          <List dense={true} subheader={<ListSubheader className={classes.subHeader}>{data.title}</ListSubheader>}>
            {data.list && data.list.map((post, index) => {
              let title = post.title
              if (post.subTitle) {
                title += ` (${post.subTitle})`
              }
              return <ListItem key={index} className={classes.listItem} onClick={data.onItemClick.bind(data, index)} button>
                <ListItemText primary={ title } className={classes.listItemText} />
              </ListItem>
            })}
          </List>
        </CardContent>
      </Card>
    );
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Group);