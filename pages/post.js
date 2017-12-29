import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from '../containers/MainLayout'
import ShowPost from '../containers/ShowPost'
import net from '../common/net'
import Head from 'next/head'

const Post = (props) => {
  console.log('url:' + props.url);
    return (
      <MainLayout postsData={props.postsData}>
        <ShowPost postData={props.postData} />
        <Head>
          <link rel="stylesheet" href="/static/css/github.css" />
          <link rel="stylesheet" href="/static/css/github-markdown.min.css" />
        </Head>
      </MainLayout>
    )
}

Post.getInitialProps = async (context) => {
  const values = await Promise.all([ 
    net.getPosts(1), 
    net.getPost(context.query.id)
  ]);
  return { postsData: values[0], postData: values[1] }
}

export default Post