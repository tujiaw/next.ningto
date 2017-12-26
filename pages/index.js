import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './App'
import net from '../common/net'

class Index extends React.Component {
  state = {
    theme: createMuiTheme({
      palette: {
        type: 'light',
        text: {
          // title: '#2ca6cb',
          title: '#3f51b5',
          titleHover: '#7B68EE',
          secondary: '#817c7c',
        }
      },
    })
  }

  onLight = () => {
    const newType = this.state.theme.palette.type === 'light' ? 'dark' : 'light'
    this.setState({
      theme: createMuiTheme({
        palette: {
          type: newType
        },
      })
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <App onLight={this.onLight} postsData={this.props.postsData}/>
      </MuiThemeProvider>
    ) 
  }
}

Index.getInitialProps = async ({ req }) => {
  console.log('11111111111111111111111111')
  const postsData = await net.getPosts(1)
  console.log(postsData)
  return { postsData }
}


export default Index