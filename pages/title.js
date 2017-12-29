import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from '../containers/MainLayout'
import ShowTitle from '../containers/ShowTitle'
import net from '../common/net'

const Title = (props) => {
  console.log('url:' + props.url);
  return (
    <MainLayout postsData={props.postsData}>
      <ShowTitle data={props.data} />
    </MainLayout>
  )
}

Title.getInitialProps = async (context) => {
  const values = await Promise.all([
    net.getPosts(1), 
    net.getUrl(context.asPath) 
  ])
  //const postsData = await net.getPosts(1)
  //const data = await net.getUrl(context.asPath)
  return { postsData: values[0], data: values[1] }
}

export default Title