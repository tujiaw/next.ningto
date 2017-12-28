import config from './config'
import fetch from 'isomorphic-unfetch'

const cacheUrl = [
    'http://3inns.cn/api/list/?page=1'
]

const cache = {}
function getData(url) {
    const useCache = (cacheUrl.indexOf(url) >= 0)
    return new Promise((resolve, reject) => {
        console.log('get url:' + url)
        if (useCache && cache[url]) {
            console.log('from cache')
            return resolve(cache[url])
        }

        fetch(url).then((res) => {
            if (res && res.json) {
                if (useCache) {
                    cache[url] = res.json()
                    resolve(cache[url])
                } else {
                    resolve(res.json())
                }
                window.scrollTo(0, 0)
            }
        }).catch((error) => {
            console.log('get data error:' + error);
            reject(error);
        })
    })
}

const net = {
    getUrl: (url) =>{
        return getData(config.API_PREFIX + url);
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
    }
}

export default net;