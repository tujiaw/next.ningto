module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:webpackJsonp([3],{5980:function(e,t,n){e.exports=n(5981)},5981:function(e,t,n){e.exports=n(5982)},5982:function(e,t,n){e.exports=n(5983)},5983:function(e,t,n){"use strict";var r=n(40),a=n(19);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=k,t.Container=t.default=void 0;var u=a(n(48)),o=a(n(227)),l=a(n(5984)),i=a(n(77)),p=a(n(37)),c=a(n(25)),s=a(n(26)),f=a(n(38)),d=a(n(39)),h=r(n(0)),v=a(n(5)),y=a(n(341)),m=n(41),b=n(63),_=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}var n;return(0,d.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,b.makePublicRouterInstance)(this.props.router),_containerProps:(0,i.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,a=k(t);return h.default.createElement(g,null,h.default.createElement(n,(0,l.default)({},r,{url:a})))}}],[{key:"getInitialProps",value:(n=(0,o.default)(u.default.mark(function e(t){var n,r,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,t.router,r=t.ctx,e.next=3,(0,m.loadGetInitialProps)(n,r);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})}]),t}(h.Component);t.default=_,Object.defineProperty(_,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(_,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:v.default.any,headManager:v.default.object,router:v.default.object}});var g=function(e){function t(){return(0,c.default)(this,t),(0,f.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,y.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return h.default.createElement(h.default.Fragment,null,e)}}]),t}(h.Component);t.Container=g,Object.defineProperty(g,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:v.default.any}});var P=(0,m.execOnce)(function(){0});function k(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return P(),r},get pathname(){return P(),t},get asPath(){return P(),n},back:function(){P(),e.back()},push:function(t,n){return P(),e.push(t,n)},pushTo:function(t,n){P();var r=n?t:null,a=n||t;return e.push(r,a)},replace:function(t,n){return P(),e.replace(t,n)},replaceTo:function(t,n){P();var r=n?t:null,a=n||t;return e.replace(r,a)}}}},5984:function(e,t,n){var r=n(274);function a(){return e.exports=a=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}e.exports=a}},[5980]).default}});