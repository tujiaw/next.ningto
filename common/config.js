
// const config = {
//     HOST_PREFIX: 'http://localhost:3000',
//     API_PREFIX: 'http://localhost:3000/api',
// }

const config = {
    HOST_PREFIX: 'http://3inns.cn',
    API_PREFIX: 'http://3inns.cn/api',
    BAIDU_SHARE: `window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"0","bdPos":"right","bdTop":"100"}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];`,
    SOHUCS: `(function(){ 
        var appid = 'cysWB0Du9'; 
        var conf = '691d31a2c6c0e4c3c74db69baf69415e'; 
        var width = window.innerWidth || document.documentElement.clientWidth; 
        if (width < 960) { 
        window.document.write('<script id="changyan_mobile_js" charset="utf-8" type="text/javascript" src="http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=' + appid + '&conf=' + conf + '"><\/script>'); } else { var loadJs=function(d,a){var c=document.getElementsByTagName("head")[0]||document.head||document.documentElement;var b=document.createElement("script");b.setAttribute("type","text/javascript");b.setAttribute("charset","UTF-8");b.setAttribute("src",d);if(typeof a==="function"){if(window.attachEvent){b.onreadystatechange=function(){var e=b.readyState;if(e==="loaded"||e==="complete"){b.onreadystatechange=null;a()}}}else{b.onload=a}}c.appendChild(b)};loadJs("http://changyan.sohu.com/upload/changyan.js",function(){window.changyan.api.config({appid:appid,conf:conf})}); } })();
    `,
}

export default config;