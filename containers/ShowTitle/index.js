import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose'
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Divider } from 'material-ui'
import Router from 'next/router'

import Loading from '../../components/Loading'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: 20,
    overflow: 'auto',
    background: theme.palette.background.paper,
    borderRadius: 5,
  },
  subHeader: {
    color: theme.palette.text.title,
    fontWeight: 'bold'
  },
  listSection: {
    background: 'inherit',
  },
  divider: {
    marginLeft: 10,
    marginRight: 10,
  }
});

class ShowTitleList extends React.Component {
  handleClick = (id) => {
    Router.push({ pathname: '/post', query: { id: id }})
  }

  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.root}>
      { data.archives 
        ? <div>
            <List dense={true} className={classes.root} subheader={<ListSubheader className={classes.subHeader}>{data.tagname}</ListSubheader>}>
            {data.archives.map((archive, i) => (
                <div key={'archives' + i} className={classes.listSection}>
                <Divider className={classes.divider}/>
                <ListSubheader>{archive.yearMonth}</ListSubheader>
                {archive.titles && archive.titles.map((title, j) => (
                    <ListItem button key={'archives' + i + 'title' + j} 
                    onClick={this.handleClick.bind(this, title._id)}
                    >
                    <ListItemText primary={title.title} />
                    </ListItem>
                ))}
                </div>
            ))}
            </List>
        </div>
        : <Loading />
      }
      </div>
    );
  }
}

ShowTitleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
)(ShowTitleList);
