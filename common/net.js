import config from './config'
import fetch from 'isomorphic-unfetch'

function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then((res) => {
      if (res && res.json) {
        resolve(res.json())
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0)
        }
      }
    }).catch((error) => {
      console.log('get data error:' + error + ',url:' + url);
      reject(error);
    })
  })
}

function postData(url, data) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    })
  })
}

const net = {
  getUrl: (url) =>{
    return getData(config.API_PREFIX + url);
  },
  getRightSidebarData: () => {
    return getData(config.API_PREFIX + '/rightsidebar')
  },
  getPosts: (page) => {
    page = page ? ('/?page=' + page) : '';
    return getData(config.API_PREFIX + '/list' + page);
  },
  getPost: (id) => {
    return getData(config.API_PREFIX + '/post/' + id);
  },
  getTagPost: (tagname) => {
    return getData(config.API_PREFIX + '/tags/' + tagname);
  },
  getSearch: (keyword) => {
    return getData(config.API_PREFIX + '/search?keyword=' + keyword);
  },
  addComments: (data) => {
    return postData(config.API_PREFIX + '/comments/add', data);
  },
  getComments: (postId) => {
    return getData(config.API_PREFIX + '/comments/' + postId);
  }
}

export default net;