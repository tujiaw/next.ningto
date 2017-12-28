import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MobileStepper from 'material-ui/MobileStepper';
import Button from 'material-ui/Button';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Router from 'next/router'

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    background: theme.palette.background.default,
  },
});

class PostStepper extends React.Component {
  state = {
  };

  handleNext = () => {
    Router.push({ pathname: '/post', query: { id: this.props.nextPost._id }})
  }

  handleBack = () => {
    Router.push({ pathname: '/post', query: { id: this.props.prevPost._id }})
  }

  render() {
    const { classes, theme, nextPost, prevPost } = this.props;

    return (
      <div className={classes.root}>
        <MobileStepper
          type="text"
          steps={2}
          position="static"
          className={classes.mobileStepper}
          nextButton={
            <Button dense onClick={this.handleNext} disabled={!!!nextPost}>
              { nextPost ? nextPost.title : '这是最后一篇了'}
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button dense onClick={this.handleBack} disabled={!!!prevPost}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              { prevPost ? prevPost.title : '前面已经没有了'}
            </Button>
          }
        />
      </div>
    );
  }
}

PostStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PostStepper);