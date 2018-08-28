import React from 'react';
import MainLayout from '../containers/MainLayout'
import ShowTitle from '../containers/ShowTitle'
import net from '../common/net'

const Title = (props) => {
  console.log('url:' + props.url);
  return (
    <MainLayout rightSidebarData={props.rightSidebarData}>
      <ShowTitle data={props.data} />
    </MainLayout>
  )
}

Title.getInitialProps = async (context) => {
  const result = await net.getUrl(context.asPath) 
  return { rightSidebarData: result.rightSidebarData, data: result }
}

export default Title