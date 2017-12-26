import React from 'react'
import utils from '../common/utils'

class Back2top extends React.Component {
  state = {
    visible: false
  }

  onScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop
    if (scrollTop === 0) {
      scrollTop = document.documentElement.scrollTop
    }
    this.setState({ visible: scrollTop > 300 });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onClick = () => {
    utils.scroll2top();
  }

  render() {
    return this.state.visible ? <div style={Styles.root} onClick={this.onClick}>回到顶部</div> : null;
  }
}

const Styles = {
  root: {
    width: 24,
    color: 'gray',
    padding: '12px 0 12px 5px',
    position: 'fixed',
    right: 0,
    bottom: 100,
    cursor: 'pointer',
    textAlign: 'center',
    zIndex: 20,
    backgroundColor: '#fff',
    borderRadius: '12px 0 0 12px',
  }
}

export default Back2top;
