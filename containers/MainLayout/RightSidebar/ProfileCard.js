import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

class ProfileCard extends React.Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, profile } = this.props;
    const hits = [
      { name: '文章数', count: profile.postCount || 100 },
      { name : '总访问量', count: profile.hitCount || 54321},
      { name: '今日访问', count: profile.hitToday || 321 },
    ]

    return (
      <Card className={classes.root}>
        <div className={classes.row}>
          <a href="https://github.com/tujiaw">
            <img className={classes.img} alt="avatar" src="http://ningto.com/img/myavatar.jpg" />
          </a>
          <div className={classes.title}>
            <span className={classes.mainTitle}>ningto.com</span>
            <span className={classes.subTitle}>Keep it simple,stupid</span>
          </div>
        </div>
        <div className={classes.row}>
        { hits.map((item, index) => {
          return <div key={index} className={classes.counter}>
            <div className={classes.counterTitle}>{ item.name }</div>
            <div className={classes.counterNum}>{ item.count }</div>
          </div>
        })}
        </div>
      </Card>
    );
  }
}

const styles = theme => ({
  root: {
    background: theme.palette.background.paper,
    padding: 10,
    display: 'flex', 
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    width: '60px',
    height: '60px',
    borderRadius: '30px',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainTitle: {
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: '13px',
    color: '#788087'
  },
  counterNum: {
    color: '#4f4f4f',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  counterTitle: {
    color: '#788087'
  }
});

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);