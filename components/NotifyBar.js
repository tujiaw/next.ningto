import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class NotifyBar extends React.Component {
  render() {
    const { open, text } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={open}
          onRequestClose={this.props.notifyBarRequestClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{text}</span>}
        />
      </div>
    );
  }
}

export default NotifyBar;