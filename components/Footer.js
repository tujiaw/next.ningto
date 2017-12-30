import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div style={Styles.root}>
          鄂ICP备17003086号-1. Copyright © 2016. All Rights Reserved. 
      </div>
    )
  }
}

const Styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 13,
    width: '100%',
    height: 40,
    marginTop: '1em',
    background: 'rgba(10, 10, 10, 0.7)',
    padding: '0 2% .5em',
    zIndex:1100,
  }
}

export default Footer;