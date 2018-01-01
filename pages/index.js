import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import MainLayout from '../containers/MainLayout'
import PostCardList from '../containers/PostCardList'
import Pagination from '../components/Pagination'
import net from '../common/net'
import Router from 'next/router'

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

  gotoPage = (page) => {
    Router.push({ pathname: '/', query: { page: page }})
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
        <MainLayout onLight={this.onLight} rightSidebarData={this.props.rightSidebarData}>
          { this.HomePage() }
        </MainLayout>
      </MuiThemeProvider>
    ) 
  }
}

Index.getInitialProps = async (context) => {
  const page = context.query.page || 1
  const result = await net.getPosts(page)
  return { rightSidebarData: result.rightSidebarData, postsData: result }
}


export default Index