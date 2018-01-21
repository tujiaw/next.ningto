import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from '../containers/MainLayout'
import ShowPost from '../containers/ShowPost'
import net from '../common/net'
import Head from 'next/head'

const Post = (props) => {
  console.log('url:' + props.url);
    return (
      <MainLayout rightSidebarData={props.rightSidebarData}>
        <ShowPost postData={props.postData} />
        <Head>
          <link rel="stylesheet" href="/static/css/github.css" />
          <link rel="stylesheet" href="/static/css/github-markdown.min.css" />
        </Head>
      </MainLayout>
    )
}

Post.getInitialProps = async (context) => {
  const result = await net.getPost(context.query.id)
  return { rightSidebarData: result.rightSidebarData, postData: result }
}

export default Post