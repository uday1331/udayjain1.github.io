(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),d=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),s=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),m=function(e){var t=u(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,w=new WeakMap;function O(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},r&&s.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),s.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return s.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+s+d+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,d=s.default.createElement(x,(0,l.default)({src:t},i,{ariaHidden:n}));return a.length>1?s.default.createElement("picture",null,r(a),d):d},x=s.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,d=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:d,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=s.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,d=e.imgStyle,o=void 0===d?{}:d,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,k=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:R?1:0,transition:L?"opacity "+y+"ms":"none"},o),P="boolean"==typeof b?"lightgray":b,V={transitionDelay:y+"ms"},A=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&V,{},o,{},f),_={title:t,alt:this.state.isVisible?"":a,style:A,className:p,itemProp:w};if(h){var N=h,T=g(h);return s.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},s.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),P&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&V)}),T.base64&&s.default.createElement(I,{ariaHidden:!0,src:T.base64,spreadProps:_,imageVariants:N,generateSources:E}),T.tracedSVG&&s.default.createElement(I,{ariaHidden:!0,src:T.tracedSVG,spreadProps:_,imageVariants:N,generateSources:j}),this.state.isVisible&&s.default.createElement("picture",null,O(N),s.default.createElement(x,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:k})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:S},T,{imageVariants:N}))}}))}if(m){var G=m,q=g(m),F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete F.display,s.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},P&&s.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:P,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},L&&V)}),q.base64&&s.default.createElement(I,{ariaHidden:!0,src:q.base64,spreadProps:_,imageVariants:G,generateSources:E}),q.tracedSVG&&s.default.createElement(I,{ariaHidden:!0,src:q.tracedSVG,spreadProps:_,imageVariants:G,generateSources:j}),this.state.isVisible&&s.default.createElement("picture",null,O(G),s.default.createElement(x,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:k})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:S},q,{imageVariants:G}))}}))}return null},t}(s.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),P=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});L.propTypes={resolutions:z,sizes:P,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([P,c.default.arrayOf(P)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var V=L;t.default=V},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",d=!0;n in[]&&Array(1)[n]((function(){d=!1})),r(r.P+r.F*d,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},hkpG:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("BMxC"),d=a("qWyU"),o=a("sK1y"),l=a("Weur"),s=a("8OQS"),c=a.n(s),u=a("pVnL"),f=a.n(u),p=a("qKvR"),g=(a("DNiP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),Object(r.createContext)()),h=function(){return Object(r.useContext)(g)},m=Object(r.forwardRef)((function(e,t){var a=e.isInvalid,r=e.isRequired,i=e.isDisabled,d=e.isReadOnly,o=c()(e,["isInvalid","isRequired","isDisabled","isReadOnly"]),l={isRequired:r,isDisabled:i,isInvalid:a,isReadOnly:d};return Object(p.d)(g.Provider,{value:l},Object(p.d)(n.a,f()({role:"group",ref:t},o)))}));m.displayName="FormControl";var b=a("mf32"),y=function(e){var t=Object(b.b)().colorMode;return Object(p.d)(n.a,f()({as:"span",ml:1,color:{light:"red.500",dark:"red.300"}[t],"aria-hidden":"true",children:"*"},e))},v=Object(r.forwardRef)((function(e,t){var a=e.children,r=c()(e,["children"]),i=function(e){var t=h();return t?Object.keys(t).reduce((function(a,r){return a[r]=e[r],t&&null==e[r]&&(a[r]=t[r]),a}),{}):e}(r);return Object(p.d)(n.a,f()({ref:t,fontSize:"md",pr:"12px",pb:"4px",opacity:i.isDisabled?"0.4":"1",fontWeight:"medium",textAlign:"left",verticalAlign:"middle",display:"inline-block",as:"label"},r),a,i.isRequired&&Object(p.d)(y,null))}));v.displayName="FormLabel";var w=v,O=(a("f3/d"),a("HAE/"),a("WLL4"),a("jm62"),a("8+KV"),a("0l/t"),a("ioFf"),a("lSNA")),S=a.n(O),j=a("5D9J"),E=a("OJSm"),k=a("QdyT");function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var C=Object(j.a)(n.a)((function(e){var t,a=e.type,r=void 0===a?"checkbox":a,i=e._hover,n=e._invalid,d=e._disabled,o=e._focus,l=e._checked,s=e._child,c=void 0===s?{opacity:0}:s,u=e._checkedAndChild,f=void 0===u?{opacity:1}:u,p=e._checkedAndDisabled,g=e._checkedAndFocus,h=e._checkedAndHover,m="input[type="+r+"]:checked:disabled + &, input[type="+r+"][aria-checked=mixed]:disabled + &",b="input[type="+r+"]:checked:hover:not(:disabled) + &, input[type="+r+"][aria-checked=mixed]:hover:not(:disabled) + &",y="input[type="+r+"]:checked:focus + &, input[type="+r+"][aria-checked=mixed]:focus + &",v="input[type="+r+"]:disabled + &",w="input[type="+r+"]:focus + &",O="input[type="+r+"]:hover:not(:disabled):not(:checked) + &",j="input[type="+r+"]:checked + &, input[type="+r+"][aria-checked=mixed] + &",C="input[type="+r+"][aria-invalid=true] + &";return Object(E.a)(((t={})[w]=Object(k.b)(o),t[O]=Object(k.b)(i),t[v]=Object(k.b)(d),t[C]=Object(k.b)(n),t[m]=Object(k.b)(p),t[y]=Object(k.b)(g),t[b]=Object(k.b)(h),t["& > *"]=Object(k.b)(c),t[j]=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(a,!0).forEach((function(t){S()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(k.b)(l),{"& > *":Object(k.b)(f)}),t))}));C.displayName="ControlBox",C.defaultProps={display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:"0","aria-hidden":"true"};var I=C,x=a("+Z5E"),L={sm:{width:"1.375rem",height:"0.75rem"},md:{width:"1.875rem",height:"1rem"},lg:{width:"2.875rem",height:"1.5rem"}},z=Object(r.forwardRef)((function(e,t){var a=e.id,r=e.name,i=e.value,d=e["aria-label"],o=e["aria-labelledby"],l=e.color,s=e.defaultIsChecked,u=e.isChecked,g=e.size,h=e.isDisabled,m=e.isInvalid,y=e.onChange,v=e.onBlur,w=e.onFocus,O=(e.children,c()(e,["id","name","value","aria-label","aria-labelledby","color","defaultIsChecked","isChecked","size","isDisabled","isInvalid","onChange","onBlur","onFocus","children"])),S=Object(b.b)().colorMode,j=L[g]&&L[g].width,E=L[g]&&L[g].height,k={rounded:"full",justifyContent:"flex-start",width:j,height:E,bg:"dark"===S?"whiteAlpha.400":"gray.300",boxSizing:"content-box",p:"2px",_checked:{bg:l+".500"},_child:{transform:"translateX(0)"},_checkedAndChild:{transform:"translateX(calc("+j+" - "+E+"))"},_focus:{boxShadow:"outline"},_hover:{cursor:"pointer"},_checkedAndHover:{cursor:"pointer"},_disabled:{opacity:.4,cursor:"not-allowed"}};return Object(p.d)(n.a,f()({as:"label",display:"inline-block",verticalAlign:"middle"},O),Object(p.d)(x.a,{as:"input",type:"checkbox","aria-label":d,"aria-labelledby":o,id:a,ref:t,name:r,value:i,"aria-invalid":m,defaultChecked:s,onChange:y,onBlur:v,onFocus:w,checked:u,disabled:h}),Object(p.d)(I,k,Object(p.d)(n.a,{bg:"white",transition:"transform 250ms",rounded:"full",size:E})))}));z.displayName="Switch",z.defaultProps={color:"blue",size:"md"};var P=z,V=Object(r.forwardRef)((function(e,t){var a=e.gap,r=e.rowGap,d=e.columnGap,o=e.autoFlow,l=e.autoRows,s=e.autoColumns,u=e.templateRows,p=e.templateColumns,g=e.templateAreas,h=e.area,m=e.column,b=e.row,y=c()(e,["gap","rowGap","columnGap","autoFlow","autoRows","autoColumns","templateRows","templateColumns","templateAreas","area","column","row"]);return i.a.createElement(n.a,f()({ref:t,display:"grid",gridArea:h,gridTemplateAreas:g,gridGap:a,gridRowGap:r,gridColumnGap:d,gridAutoColumns:s,gridColumn:m,gridRow:b,gridAutoFlow:o,gridAutoRows:l,gridTemplateRows:u,gridTemplateColumns:p},y))}));V.displayName="Grid";var A=V,_=a("9eSz"),N=a.n(_),T=a("7cJT"),G=a("wynG");a.d(t,"projectsQuery",(function(){return F}));var q=function(e){var t=e.title,a=e.path,r=e.description,l=e.preview_image,s=e.date;return i.a.createElement(T.b,{to:a},i.a.createElement(n.a,{padding:2},i.a.createElement(N.a,{fluid:l.childImageSharp.fluid}),i.a.createElement(d.a,{size:"md",marginTop:1},t),i.a.createElement(o.a,{fontSize:"xs",fontWeight:"light",marginBottom:1},s),i.a.createElement(o.a,{fontSize:"sm",fontWeight:"light"},function(e){var t=e.text,a=e.maxLength;return t.length>a?t.slice(0,a)+"...":t}({text:r,maxLength:100}))))},F="258394692";t.default=function(e){var t=e.data.allMdx.edges,a=i.a.useState(!1),r=a[0],n=a[1],d=t.map((function(e){return e.node.frontmatter}));return i.a.createElement(T.c,null,i.a.createElement(T.e,{title:"Projects"}),i.a.createElement(l.a,{align:"center",justify:"flex-end",paddingRight:2},i.a.createElement(w,{htmlFor:"show-all",fontWeight:"light"},"See All"),i.a.createElement(P,{id:"show-all","aria-label":"Show All Projects",value:r,color:G.a,onChange:function(){return n(!r)}})),i.a.createElement(A,{templateColumns:"repeat( auto-fit, minmax(150px, 1fr) )",gap:6},d.filter((function(e){var t=e.highlight;return r||t})).map((function(e,t){return i.a.createElement(q,Object.assign({key:t},e))}))))}}}]);
//# sourceMappingURL=component---src-pages-work-tsx-ac0f1501949b999fe218.js.map