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
          <Head>
            <title>ningto.com</title>
            <link rel="stylesheet" href="http://3inns.cn/css/github.css" />
            <link rel="stylesheet" href="http://3inns.cn/css/github-markdown.min.css" />
          </Head>
            <ShowPost postData={props.postData} />
      </MainLayout>
    )
}

Post.getInitialProps = async (context) => {
    const postsData = await net.getPosts(1)
    const postData = await net.getPost(context.query.id)
    return { postsData, postData }
}

export default Post