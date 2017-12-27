import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import PostPage from './PostPage'
import net from '../common/net'
import Head from 'next/head'

const Post = (props) => {
    console.log('url:' + props.url);
    return (
        <App postsData={props.postsData}>
            <Head>
            <title>ningto.com</title>
            <link rel="stylesheet" href="http://3inns.cn/css/github.css" />
            <link rel="stylesheet" href="http://3inns.cn/css/github-markdown.min.css" />
            </Head>
            <PostPage postData={props.postData} />
        </App>
    )
}

Post.getInitialProps = async (context) => {
    const postsData = await net.getPosts(1)
    const postData = await net.getPost(context.query.id)
    return { postsData, postData }
}

export default Post