
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports=webpackJsonp([3],{1633:function(e,t,a){e.exports=a(1634)},1634:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(43),r=n(l),o=a(48),u=n(o),s=a(0),i=n(s),d=a(21),c=(n(d),a(126)),f=n(c),p=a(1635),m=n(p),h=a(137),g=n(h),v=a(346),y=n(v),b=function(e){return console.log("url:"+e.url),i.default.createElement(f.default,{postsData:e.postsData},i.default.createElement(y.default,null,i.default.createElement("title",null,"ningto.com"),i.default.createElement("link",{rel:"stylesheet",href:"http://3inns.cn/css/github.css"}),i.default.createElement("link",{rel:"stylesheet",href:"http://3inns.cn/css/github-markdown.min.css"})),i.default.createElement(m.default,{postData:e.postData}))};b.getInitialProps=function(){var e=(0,u.default)(r.default.mark(function e(t){var a,n;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.default.getPosts(1);case 2:return a=e.sent,e.next=5,g.default.getPost(t.query.id);case 5:return n=e.sent,e.abrupt("return",{postsData:a,postData:n});case 7:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.default=b},1635:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.classes,a=e.postData,n=a.post,l=a.nextPost,r=a.prevPost;return n?o.default.createElement("div",{className:t.root},o.default.createElement(d.default,{className:t.card},o.default.createElement(i.CardContent,null,o.default.createElement(m.default,{type:"body1",className:t.subTitle},E.default.toDatetime(n._id)," 阅读(",n.pv,")"),o.default.createElement(m.default,{type:"headline",component:"h2"},o.default.createElement(y.default,{href:"/post?id="+n._id},o.default.createElement("a",{className:t.title},n.title))),o.default.createElement("div",{className:t.chipGroup},n.tags&&n.tags.map(function(e,a){return e.length?o.default.createElement(f.default,{key:a,className:t.chip,label:e}):null})),o.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:n.content}}),o.default.createElement("footer",{className:t.reference},o.default.createElement("strong",null,"（转载本站文章请注明作者和出处：",o.default.createElement("a",{href:"http://3inns.cn"},"三家店 - 3inns.cn")))),o.default.createElement(i.CardActions,null,o.default.createElement(P.default,{nextPost:l,prevPost:r})))):o.default.createElement(_.default,null)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),o=n(r),u=a(24),s=a(4),i=(n(s),a(69)),d=n(i),c=a(128),f=n(c),p=a(27),m=n(p),h=a(134),g=n(h),v=a(339),y=n(v),b=a(219),E=n(b),x=a(136),_=n(x),k=a(1636),P=n(k),N=function(e){return{root:{marginTop:20,background:e.palette.common.darkWhite,borderRadius:5},title:{color:e.palette.text.title,textDecoration:"none",fontSize:"1.2em","&:hover":{color:e.palette.text.titleHover}},subTitle:{marginBottom:6,fontSize:14,color:e.palette.text.secondary},chipGroup:{display:"flex",marginTop:6,marginBottom:6},chip:{height:25,marginRight:6},reference:{marginTop:15,fontSize:11,color:"#cc0000"}}};t.default=(0,g.default)((0,u.withStyles)(N))(l)},1636:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(13),r=n(l),o=a(10),u=n(o),s=a(11),i=n(s),d=a(14),c=n(d),f=a(15),p=n(f),m=a(0),h=n(m),g=a(4),v=(n(g),a(24)),y=a(1637),b=n(y),E=a(89),x=n(E),_=a(215),k=n(_),P=a(216),N=n(P),w=a(33),M=n(w),S=function(e){return{root:{width:"100%",flexGrow:1},header:{display:"flex",alignItems:"center",paddingLeft:4*e.spacing.unit,marginBottom:20,background:e.palette.background.default}}},B=function(e){function t(){var e,a,n,l;(0,u.default)(this,t);for(var o=arguments.length,s=Array(o),i=0;i<o;i++)s[i]=arguments[i];return a=n=(0,c.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(s))),n.state={},n.handleNext=function(){M.default.push({pathname:"/post",query:{id:n.props.nextPost._id}})},n.handleBack=function(){M.default.push({pathname:"/post",query:{id:n.props.prevPost._id}})},l=a,(0,c.default)(n,l)}return(0,p.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=e.nextPost,l=e.prevPost;return h.default.createElement("div",{className:t.root},h.default.createElement(b.default,{type:"text",steps:2,position:"static",className:t.mobileStepper,nextButton:h.default.createElement(x.default,{dense:!0,onClick:this.handleNext,disabled:!n},n?n.title:"这是最后一篇了","rtl"===a.direction?h.default.createElement(k.default,null):h.default.createElement(N.default,null)),backButton:h.default.createElement(x.default,{dense:!0,onClick:this.handleBack,disabled:!l},"rtl"===a.direction?h.default.createElement(N.default,null):h.default.createElement(k.default,null),l?l.title:"前面已经没有了")}))}}]),t}(h.default.Component);t.default=(0,v.withStyles)(S,{withTheme:!0})(B)},1637:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1638);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(l).default}})},1638:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.activeStep,a=e.backButton,n=e.classes,l=e.className,r=e.nextButton,u=e.position,i=e.steps,c=e.type,p=(0,f.default)(e,["activeStep","backButton","classes","className","nextButton","position","steps","type"]),h=(0,v.default)(n.root,n["position"+(0,_.capitalizeFirstLetter)(u)],l);return m.default.createElement(x.default,(0,o.default)({square:!0,elevation:0,className:h},p),a,"dots"===c&&m.default.createElement("div",{className:n.dots},[].concat((0,d.default)(new Array(i))).map(function(e,a){var l=(0,v.default)((0,s.default)({},n.dotActive,a===t),n.dot);return m.default.createElement("div",{key:a,className:l})})),"progress"===c&&m.default.createElement("div",{className:n.progress},m.default.createElement(k.LinearProgress,{mode:"determinate",value:Math.ceil(t/(i-1)*100)})),r)}Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var r=a(6),o=n(r),u=a(12),s=n(u),i=a(55),d=n(i),c=a(7),f=n(c),p=a(0),m=n(p),h=a(4),g=(n(h),a(9)),v=n(g),y=a(8),b=n(y),E=a(30),x=n(E),_=a(19),k=a(203),P=t.styles=function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:e.palette.background.default,padding:e.spacing.unit},positionBottom:{position:"fixed",bottom:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionTop:{position:"fixed",top:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionStatic:{},dots:{display:"flex",flexDirection:"row"},dot:{backgroundColor:e.palette.action.disabled,borderRadius:"50%",width:e.spacing.unit,height:e.spacing.unit,margin:"0 2px"},dotActive:{backgroundColor:e.palette.primary[500]},progress:{width:"50%"}}};l.propTypes={},l.defaultProps={activeStep:0,position:"bottom",type:"dots"},t.default=(0,b.default)(P,{name:"MuiMobileStepper"})(l)}},[1633]);
            return { page: comp.default }
          })
        