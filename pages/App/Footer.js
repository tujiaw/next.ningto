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
        height: 40,
        marginTop: '1em',
        background: 'rgb(63, 81, 181)',
        padding: '0 2% .5em',
    }
}

export default Footer;