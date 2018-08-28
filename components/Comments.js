import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {TextField, Paper, Button, Checkbox, FormControlLabel} from '@material-ui/core';
import net from '../common/net';

class Comments extends React.Component {
  state = {
    name: '',
    check: '',
    comments: '',
    rememberMe: false,
  }

  handleSend = () => {
    if (this.state.check !== '九') {
      alert('请验证你是人类');
      return;
    }

    if (this.state.name.length === 0) {
      alert('名称不合法');
      return;
    }
    if (this.state.comments.length === 0) {
      alert('评论内容不合法');
      return;
    }

    net.addComments({
      id: this.props.id,
      name: this.state.name,
      comments: this.state.comments
    });
  }

  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.root} elevation={4}>
        <div className={classes.header}>
          <span>评论框</span>
        </div>
        <TextField
          required
          id="check"
          label="验证"
          margin='dense'
          onChange={(event) => this.setState({check: event.target.value })}
          helperText="为了验证您是人类，请将八加一的结果（阿拉伯数字九）填写在上面"
        />
        <TextField
          required
          id="name"
          label="名称"
          margin='dense'
          onChange={(event) => this.setState({name: event.target.value })}
        />
        <TextField
          required
          id="multiline-static"
          label="内容"
          multiline
          rows="3"
          defaultValue=""
          placeholder="Leave a comment"
          margin="dense"
          helperText="支持Markdown"
          onChange={(event) => this.setState({comments: event.target.value })}
        />
        <div className={classes.contentLayout}>
          <FormControlLabel
            control={
              <Checkbox checked={this.state.rememberMe} 
                onChange={(event) => { this.setState({rememberMe: event.target.checked })}} 
              />
            }
            label="记住我"
          />
          <Button raised="true" color="primary" className={classes.button} onClick={this.handleSend}>评论</Button>
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
  contentLayout: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default withStyles(styles)(Comments);