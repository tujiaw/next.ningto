import React from 'react'

export default function Loading() {
    return (
        <p style={Styles.root}>
            加载中，请稍后...
        </p>
    )
}

const Styles = {
    root: {
        display: 'flex',
        justifyContent: 'center',
        color: '#999'
    }
}