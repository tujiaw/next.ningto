import React from 'react';
import { withStyles } from 'material-ui/styles';
import { Button, IconButton } from 'material-ui';
import { KeyboardArrowLeft, KeyboardArrowRight } from 'material-ui-icons'

class Pagination extends React.Component {
    onClick = (page) => {
      this.props.gotoPage(page);
    }

    render() {
      const { classes } = this.props
      const { pageNumbers, page, lastPage, prevPage, nextPage, morePage } = this.props.data
      return (
        <div className={classes.root}>
          { page && prevPage && 
            <IconButton className={classes.button} disabled={page===1} onClick={()=>this.onClick(prevPage)}>
              <KeyboardArrowLeft />
            </IconButton>
          }
          { pageNumbers && pageNumbers.map((number, index) => {
            if (number === 0) {
              return <Button key={index} className={classes.button} onClick={()=>this.onClick(morePage)}>...</Button>
            } else {
              if (number === page) {
                return <Button key={index} color='accent' className={classes.button} onClick={()=>this.onClick(number)}>{ number }</Button>
              } else {
                return <Button key={index} className={classes.button} onClick={()=>this.onClick(number)}>{ number }</Button>
              }
            }
          })}
          { page && lastPage && nextPage && 
            <IconButton className={classes.button} disabled={page===lastPage} onClick={()=>this.onClick(nextPage)}>
              <KeyboardArrowRight />
            </IconButton>
          }
        </div>
      )
    }
}

const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      minWidth: 40,
      minHeight: 30,
      maxWidth: 40,
      maxHeight: 30,
      padding: 0,
      maring: 0,
    }
});

export default withStyles(styles)(Pagination);