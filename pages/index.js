import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import App from './App'
import PostCardList from './App/PostCardList'
import Pagination from '../components/Pagination'
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

  HomePage = () => {
    if (this.props.postsData && this.props.postsData.posts) {
      return (
          <div>
            <PostCardList posts={this.props.postsData.posts} />
            <Pagination data={this.props.postsData} gotoPage={this.gotoPage}/>
          </div>
        )
    } else {
        return <h1>loadding...</h1>;
    }
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
        <App onLight={this.onLight} postsData={this.props.postsData}>
        { this.HomePage() }
        </App>
      </MuiThemeProvider>
    ) 
  }
}

Index.getInitialProps = async (context) => {
  const postsData = await net.getPosts(1)
  return { postsData }
}


export default Index