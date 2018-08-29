import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {TextField, Paper, Button, Checkbox, FormControlLabel} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import net from '../common/net';

class Comments extends React.Component {
  state = {
    comments: [],
    name: '',
    check: '',
    content: '',
    rememberMe: false,
  }

  componentDidMount() {
    if (this.props.id) {
      net.getComments(this.props.id).then((json) => {
        if (json) {
          this.setState({ comments: json })
        }
      })
    }
  }

  handleSend = () => {
    if (this.state.check !== '九') {
      alert('请验证你是人类');
      return;
    }

    if (this.state.name.length < 2 || this.state.name.length > 20) {
      alert('名称不合法');
      return;
    }
    if (this.state.content.length < 3 || this.state.content.length > 1024 * 3) {
      alert('评论内容不合法');
      return;
    }

    net.addComments({
      postId: this.props.id,
      name: this.state.name,
      content: this.state.content
    }).then(() => {
      net.getComments(this.props.id).then((json) => {
        if (json) {
          this.setState({ comments: json })
        }
      })
    })
    
    this.setState({
      check: '',
      name: '',
      content: ''
    })
  }

  renderOneComment = (comment, index) => {
    const { classes } = this.props
    return (
      <div key={index} className={classes.oneComment}>
        <div>
          <span>{comment.content}</span>
        </div>
        <div className={classes.oneCommentFooter}>
          <span className={classes.name}>{'评论者:' + comment.name}</span>
          <span className={classes.date}>{ comment.date || new Date().toDateString() }</span>
        </div>
        <Divider />
      </div>
    )
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        {this.state.comments.length ?
          <Paper className={classes.paper} elevation={4}>
            <div className={classes.paperHeader}>
              <span>评论内容</span>
            </div>
            {this.state.comments.map((comment, index) => {
                return this.renderOneComment(comment, index)
            })}
          </Paper>
          : null
        }
        <Paper className={classes.paper} elevation={4}>
          <div>
            <span>评论框</span>
          </div>
          <TextField
            required
            id="check"
            label="验证"
            margin='dense'
            value={this.state.check}
            onChange={(event) => this.setState({check: event.target.value })}
            helperText="为了验证您是人类，请将八加一的结果（阿拉伯数字九）填写在上面"
          />
          <TextField
            required
            id="name"
            label="名称"
            margin='dense'
            value={this.state.name}
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
            value={this.state.content}
            onChange={(event) => this.setState({content: event.target.value })}
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
      </div>
    )
  }
}

const styles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    marginTop: 10,
  },
  paperHeader: {
    marginBottom: '20px'
  },
  contentLayout: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  oneComment: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '15px',
    marginBottom: '15px'
  },
  name: {
    marginRight: '20px',
    fontSize: '13px',
    color: '#009a61',
  },
  date: {
    fontSize: '12px',
    color: '#999'
  },
  oneCommentFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '50px',
    lineHeight: '50px'
  }
});

export default withStyles(styles)(Comments);