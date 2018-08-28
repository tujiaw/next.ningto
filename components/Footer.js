import React from 'react'

const Footer = () => {
  return (
    <div style={Styles.root}>
      鄂ICP备17003086号-1. Copyright © 2016. All Rights Reserved. 
    </div>
  )
}

const Styles = {
  root: {
    color: '#fff',
    fontSize: 13,
    width: '100%',
    height: '45px',
    marginTop: '1em',
    lineHeight: '45px',
    background: 'rgba(10, 10, 10, 0.7)',
    textAlign: 'center',
    zIndex:1100,
  }
}

export default Footer;