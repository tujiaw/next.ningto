import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Comments extends React.Component {
  handleChange = (name) => {

  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root} elevation={4}>
        <div className={classes.header}>
          <span>评论框</span>
          <a className={classes.login} href="http://www.ningto.com/user/githubLogin" target="_blank">Login</a>
        </div>
        <TextField
          required
          id="multiline-static"
          label="内容"
          multiline
          rows="3"
          defaultValue=""
          placeholder="Leave a comment"
          className={classes.textField}
          margin="dense"
          helperText="支持Markdown"
        />
        <div className={classes.contentLayout}>
          <Button raised="true" color="primary" className={classes.button}>评论</Button>
        </div>
      </Paper>
    )
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    marginTop: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  login: {
    cursor: 'pointer',
  },
  contentLayout: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

export default withStyles(styles)(Comments);