import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flex: 1,
  },
  textFieldRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  textFieldInput: {
    borderRadius: 4,
    paddingRight: 30,
    border: '1px solid ' + theme.palette.input.bottomLine,
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    color: theme.palette.input.inputText,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  textFieldFormLabel: {
    fontSize: 18,
  },
  clearButton: {
    cursor: 'hand',
    position: 'relative',
    left: -30,
    top: 28,
    width: 30,
    height: 30,
    background: 'transparent',
    border: '0px',
    overflow: 'visible',
    padding: 0,
    outline: 'none',
  }
});

class SearchBar extends React.Component {
  state = {
    iconName: 'search',
    inputText: '',
  }

  handleChanged = (event) => {
    if (event.target.value.length) {
      this.setState({ iconName: 'clear' })
    } else {
      this.setState({ iconName: 'search' })
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === 'enter') {
      if (this.props.onRequestSearch) {
        console.log(event.target.value)
        this.props.onRequestSearch(event.target.value)
      }
    }
  }

  handleClick = () => {
    this.inputObj.value = '';
    this.setState({ iconName: 'search' })
  }

  refInput = (obj) => {
    this.inputObj = obj;
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.container}>
      <TextField
        defaultValue=""
        label="本站搜索"
        onChange={this.handleChanged}
        onKeyPress={this.handleKeyPress}
        inputRef={this.refInput}
        placeholder='Search...'
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.textFieldRoot,
            input: classes.textFieldInput,
          },
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.textFieldFormLabel,
        }}
      />
      <button className={classes.clearButton} onClick={this.handleClick}>
        <i className={"material-icons " + (theme.palette.type==='light' ? 'grey' : '')}>{this.state.iconName}</i>
      </button>
    </div>
    )
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SearchBar);