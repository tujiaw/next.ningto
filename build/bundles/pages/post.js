
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports=webpackJsonp([3],{1654:function(e,t,a){e.exports=a(1655)},1655:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(39),r=l(n),o=a(43),d=l(o),u=a(0),i=l(u),s=a(20),c=(l(s),a(92)),f=l(c),p=a(1656),m=l(p),h=a(103),g=l(h),b=a(355),v=l(b),y=function(e){return console.log("url:"+e.url),i.default.createElement(f.default,{rightSidebarData:e.rightSidebarData},i.default.createElement(m.default,{postData:e.postData}),i.default.createElement(v.default,null,i.default.createElement("link",{rel:"stylesheet",href:"/static/css/github.css"}),i.default.createElement("link",{rel:"stylesheet",href:"/static/css/github-markdown.min.css"})))};y.getInitialProps=function(){var e=(0,d.default)(r.default.mark(function e(t){var a;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.default.getPost(t.query.id);case 2:return a=e.sent,e.abrupt("return",{rightSidebarData:a.rightSidebarData,postData:a});case 4:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.default=y},1656:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=l(n),o=a(0),d=l(o),u=a(21),i=a(4),s=(l(i),a(57)),c=l(s),f=a(132),p=l(f),m=a(24),h=l(m),g=a(198),b=l(g),v=a(225),y=l(v),E=a(101),x=l(E),_=a(348),k=l(_),S=a(228),N=l(S),P=a(139),w=l(P),D=a(102),M=(l(D),a(138)),B=(l(M),a(1657)),T=l(B),I=function(e){var t=e.classes,a=e.postData,l=a.toc,n=a.post,r=a.nextPost,o=a.prevPost;return n?d.default.createElement("div",{className:t.root},d.default.createElement(c.default,{className:t.card},d.default.createElement(s.CardContent,null,d.default.createElement(h.default,{type:"body1",className:t.subTitle},N.default.toDatetime(n._id)," 阅读(",n.pv,")"),d.default.createElement(h.default,{type:"headline",component:"h2"},d.default.createElement(k.default,{href:"/post?id="+n._id},d.default.createElement("a",{className:t.title},n.title))),d.default.createElement("div",{className:t.chipGroup},n.tags&&n.tags.map(function(e,a){return e.length?d.default.createElement(p.default,{key:a,className:t.chip,label:e}):null})),l&&l.length&&d.default.createElement(b.default,{className:t.toc,defaultExpanded:!0},d.default.createElement(g.ExpansionPanelSummary,{className:t.tocSummary,expandIcon:d.default.createElement(y.default,null)},d.default.createElement(h.default,null,"文章目录")),d.default.createElement(g.ExpansionPanelDetails,{className:t.tocDetails},d.default.createElement("div",{dangerouslySetInnerHTML:{__html:l}}))),d.default.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:n.content}}),d.default.createElement("footer",{className:t.reference},d.default.createElement("strong",null,"（转载本站文章请注明作者和出处：",d.default.createElement("a",{href:"http://ningto.com"},"泞途 - ningto.com")))),d.default.createElement(s.CardActions,null,d.default.createElement(T.default,{nextPost:r,prevPost:o})))):d.default.createElement(w.default,null)},z=function(e){var t;return{root:{background:e.palette.common.darkWhite,borderRadius:5,paddingTop:0,"& .anchor-fix":{display:"block",height:64,marginTop:-64,visibility:"hidden"}},title:{color:e.palette.text.title,textDecoration:"none",fontSize:"1.2em","&:hover":{color:e.palette.text.titleHover}},subTitle:{marginBottom:6,fontSize:14,color:e.palette.text.secondary},chipGroup:{display:"flex",marginTop:6,marginBottom:6},chip:{height:25,marginRight:6},toc:(t={float:"right",border:"1 solid #e2e2e2",background:"#eee",borderRadius:4},(0,r.default)(t,"border","1 solid #ddd"),(0,r.default)(t,"maxWidth",250),(0,r.default)(t,"minWidth",90),(0,r.default)(t,"fontSize",12),(0,r.default)(t,"margin",0),(0,r.default)(t,"padding",0),(0,r.default)(t,"marginLeft",10),(0,r.default)(t,"& ul",{margin:0,padding:0,paddingLeft:"1em"}),(0,r.default)(t,"& a",{color:"#4078c0",textDecoration:"none","&:hover":{color:"#f00"}}),t),tocSummary:{minHeight:36,maxHeight:36},tocDetails:{padding:0,margin:20,marginTop:0},reference:{marginTop:15,fontSize:11,color:"#cc0000"},sohucsWrap:{margin:10}}};t.default=(0,x.default)((0,u.withStyles)(z))(I)},1657:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(12),r=l(n),o=a(10),d=l(o),u=a(11),i=l(u),s=a(13),c=l(s),f=a(14),p=l(f),m=a(0),h=l(m),g=a(4),b=(l(g),a(21)),v=a(1658),y=l(v),E=a(70),x=l(E),_=a(226),k=l(_),S=a(227),N=l(S),P=a(27),w=l(P),D=function(e){return{root:{width:"100%",flexGrow:1},header:{display:"flex",alignItems:"center",paddingLeft:4*e.spacing.unit,marginBottom:20,background:e.palette.background.default}}},M=function(e){function t(){var e,a,l,n;(0,d.default)(this,t);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return a=l=(0,c.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(u))),l.state={},l.handleNext=function(){w.default.push({pathname:"/post",query:{id:l.props.nextPost._id}})},l.handleBack=function(){w.default.push({pathname:"/post",query:{id:l.props.prevPost._id}})},n=a,(0,c.default)(l,n)}return(0,p.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,l=e.nextPost,n=e.prevPost;return h.default.createElement("div",{className:t.root},h.default.createElement(y.default,{type:"text",steps:2,position:"static",className:t.mobileStepper,nextButton:h.default.createElement(x.default,{dense:!0,onClick:this.handleNext,disabled:!l},l?l.title:"这是最后一篇了","rtl"===a.direction?h.default.createElement(k.default,null):h.default.createElement(N.default,null)),backButton:h.default.createElement(x.default,{dense:!0,onClick:this.handleBack,disabled:!n},"rtl"===a.direction?h.default.createElement(N.default,null):h.default.createElement(k.default,null),n?n.title:"前面已经没有了")}))}}]),t}(h.default.Component);t.default=(0,b.withStyles)(D,{withTheme:!0})(M)},1658:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1659);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(n).default}})},1659:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e){var t=e.activeStep,a=e.backButton,l=e.classes,n=e.className,r=e.nextButton,d=e.position,i=e.steps,c=e.type,p=(0,f.default)(e,["activeStep","backButton","classes","className","nextButton","position","steps","type"]),h=(0,b.default)(l.root,l["position"+(0,_.capitalizeFirstLetter)(d)],n);return m.default.createElement(x.default,(0,o.default)({square:!0,elevation:0,className:h},p),a,"dots"===c&&m.default.createElement("div",{className:l.dots},[].concat((0,s.default)(new Array(i))).map(function(e,a){var n=(0,b.default)((0,u.default)({},l.dotActive,a===t),l.dot);return m.default.createElement("div",{key:a,className:n})})),"progress"===c&&m.default.createElement("div",{className:l.progress},m.default.createElement(k.LinearProgress,{mode:"determinate",value:Math.ceil(t/(i-1)*100)})),r)}Object.defineProperty(t,"__esModule",{value:!0}),t.styles=void 0;var r=a(6),o=l(r),d=a(15),u=l(d),i=a(44),s=l(i),c=a(7),f=l(c),p=a(0),m=l(p),h=a(4),g=(l(h),a(9)),b=l(g),v=a(8),y=l(v),E=a(31),x=l(E),_=a(19),k=a(210),S=t.styles=function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",background:e.palette.background.default,padding:e.spacing.unit},positionBottom:{position:"fixed",bottom:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionTop:{position:"fixed",top:0,left:0,right:0,zIndex:e.zIndex.mobileStepper},positionStatic:{},dots:{display:"flex",flexDirection:"row"},dot:{backgroundColor:e.palette.action.disabled,borderRadius:"50%",width:e.spacing.unit,height:e.spacing.unit,margin:"0 2px"},dotActive:{backgroundColor:e.palette.primary.main},progress:{width:"50%"}}};n.propTypes={},n.defaultProps={activeStep:0,position:"bottom",type:"dots"},t.default=(0,y.default)(S,{name:"MuiMobileStepper"})(n)}},[1654]);
            return { page: comp.default }
          })
        