(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4123)}])},8045:function(e,t,n){"use strict";var i=n(9361).default,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,p=e.priority,h=void 0!==p&&p,w=e.loading,k=e.lazyRoot,I=void 0===k?null:k,N=e.lazyBoundary,O=e.className,E=e.quality,C=e.width,P=e.height,R=e.style,q=e.objectFit,L=e.objectPosition,M=e.onLoadingComplete,U=e.placeholder,W=void 0===U?"empty":U,D=e.blurDataURL,B=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=s.useContext(d.ImageConfigContext),V=s.useMemo((function(){var e=y||H||l.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[H]),F=B,T=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(T=F.layout),delete F.layout);var X=z;if("loader"in F){if(F.loader){var G=F.loader;X=function(e){e.config;var t=m(e,["config"]);return G(t)}}delete F.loader}var Z="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(D=D||J.blurDataURL,Z=J.src,(!T||"fill"!==T)&&(P=P||J.height,C=C||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:Z;var K=j(C),Q=j(P),Y=j(E),$=!h&&("lazy"===w||"undefined"===typeof w);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,$=!1);b.has(t)&&($=!1);v&&(f=!0);var ee,te=r(s.useState(!1),2),ne=te[0],ie=te[1],re=r(u.useIntersection({rootRef:I,rootMargin:N||"200px",disabled:!$}),3),oe=re[0],ae=re[1],se=re[2],ce=!$||ae,le={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:L};0;var ge=Object.assign({},R,fe),pe="blur"!==W||ne?{}:{backgroundSize:q||"cover",backgroundPosition:L||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===T)le.display="block",le.position="absolute",le.top=0,le.left=0,le.bottom=0,le.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof Q){var me=Q/K,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===T?(le.display="block",le.position="relative",de=!0,ue.paddingTop=he):"intrinsic"===T?(le.display="inline-block",le.position="relative",le.maxWidth="100%",de=!0,ue.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===T&&(le.display="inline-block",le.position="relative",le.width=K,le.height=Q)}else 0;var ve={src:_,srcSet:void 0,sizes:void 0};ce&&(ve=x({config:V,src:t,unoptimized:f,layout:T,width:K,quality:Y,sizes:n,loader:X}));var ye=t;0;var be,_e="imagesrcset",we="imagesizes";_e="imageSrcSet",we="imageSizes";var Se=(i(be={},_e,ve.srcSet),i(be,we,ve.sizes),be),xe=s.default.useLayoutEffect,je=s.useRef(M),ze=s.useRef(t);s.useEffect((function(){je.current=M}),[M]),xe((function(){ze.current!==t&&(se(),ze.current=t)}),[se,t]);var ke=g({isLazy:$,imgAttributes:ve,heightInt:Q,widthInt:K,qualityInt:Y,layout:T,className:O,imgStyle:ge,blurStyle:pe,loading:w,config:V,unoptimized:f,placeholder:W,loader:X,srcString:ye,onLoadingCompleteRef:je,setBlurComplete:ie,setIntersection:oe,isVisible:ce,noscriptSizes:n},F);return s.default.createElement(s.default.Fragment,null,s.default.createElement("span",{style:le},de?s.default.createElement("span",{style:ue},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(A,Object.assign({},ke))),h?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ve.src+ve.srcSet+ve.sizes,rel:"preload",as:"image",href:ve.srcSet?void 0:ve.src},Se))):null)};var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(5443))&&a.__esModule?a:{default:a},l=n(9309),u=n(7190),d=n(9977),f=(n(3794),n(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function m(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/logindemo/_next/image",loader:"default",experimentalUnoptimized:!0}||{},v=h.experimentalUnoptimized,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/logindemo/_next/image",loader:"default",experimentalUnoptimized:!0},b=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(I(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(I(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(I(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function x(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,s=e.quality,c=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(i);s)l.push(parseInt(s[2]));if(l.length){var u,d=.01*(u=Math).min.apply(u,o(l));return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),d=u.widths,f=u.kind,g=d.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:d.map((function(e,i){return"".concat(l({config:t,src:n,quality:s,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:s,width:d[g]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=w.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,i,r,o){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}})))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,a=e.imgStyle,c=e.blurStyle,l=e.isLazy,u=e.placeholder,d=e.loading,f=e.srcString,p=e.config,h=e.unoptimized,v=e.loader,y=e.onLoadingCompleteRef,b=e.setBlurComplete,_=e.setIntersection,w=e.onLoad,S=e.onError,j=(e.isVisible,e.noscriptSizes),z=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=l?"lazy":d,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,t,{decoding:"async","data-nimg":r,className:o,style:g({},a,c),ref:s.useCallback((function(e){_(e),(null==e?void 0:e.complete)&&k(e,f,0,u,y,b)}),[_,f,r,u,y,b]),onLoad:function(e){k(e.currentTarget,f,0,u,y,b),w&&w(e)},onError:function(e){"blur"===u&&b(!0),S&&S(e)}})),(l||"blur"===u)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},z,x({config:p,src:f,unoptimized:h,layout:r,width:n,quality:i,sizes:j,loader:v}),{decoding:"async","data-nimg":r,style:a,className:o,loading:d}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,u=r.useRef(),d=i(r.useState(!1),2),f=d[0],g=d[1],p=i(r.useState(null),2),m=p[0],h=p[1];r.useEffect((function(){if(a){if(u.current&&(u.current(),u.current=void 0),l||f)return;return m&&m.tagName&&(u.current=function(e,t,n){var i=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(i&&(t=s.get(i)))return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:r},c.push(n),s.set(n,t),t}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),s.delete(r);var t=c.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&c.splice(t,1)}}}(m,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,l,n,t,f]);var v=r.useCallback((function(){g(!1)}),[]);return[h,f,v]};var r=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4123:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var i=n(5893),r=n(9008),o=n.n(r),a=(n(5675),n(7294)),s=n(5583),c=n.n(s),l=function(){var e=(0,a.useState)("signin"),t=e[0],n=e[1],r=(0,a.useState)(""),o=r[0],s=r[1],l=(0,a.useState)(""),u=l[0],d=l[1],f=(0,a.useState)(""),g=f[0],p=f[1],m=(0,a.useState)(""),h=m[0],v=m[1];return(0,i.jsx)("section",{className:c().container,children:(0,i.jsxs)("div",{className:c().data_container,children:[(0,i.jsx)("div",{className:c().toggle_container,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"signin"===t?"New to our Platform?":"Already have Account?"}),(0,i.jsx)("p",{children:"signin"===t?"Register Now!":"Login Now!"}),(0,i.jsx)("div",{className:c().btn,onClick:function(){return n("signin"===t?"signup":"signin")},children:"signin"===t?"Sign Up":"Sign In"})]})}),(0,i.jsx)("div",{className:c().form_container,children:(0,i.jsxs)("div",{className:c().form_content,children:[(0,i.jsx)("h2",{children:"signin"===t?"Sign In to your Account":"Sign Up to your Account"}),(0,i.jsx)("input",{type:"text",placeholder:"Username",value:o,onChange:function(e){return s(e.target.value)},required:!0}),(0,i.jsx)("input",{type:"text",placeholder:"Email Address",value:g,onChange:function(e){return p(e.target.value)},className:"signin"===t?c().disabled:void 0,required:!0}),(0,i.jsx)("input",{type:"password",placeholder:"Password",value:u,onChange:function(e){return d(e.target.value)},required:!0}),(0,i.jsx)("input",{type:"password",placeholder:"Confirm Password",value:h,onChange:function(e){return v(e.target.value)},className:"signin"===t?c().disabled:void 0,required:!0}),(0,i.jsx)("div",{className:c().btn,children:"signin"===t?"Sign In":"Sign Up"}),(0,i.jsx)("div",{className:c().sign_link_active,children:"signin"===t?(0,i.jsxs)("span",{children:["New to our Platform? ",(0,i.jsx)("span",{className:c().sign_link,onClick:function(){return n("signup")},children:"Sign Up"})]}):(0,i.jsxs)("span",{children:["Already have Account? ",(0,i.jsx)("span",{className:c().sign_link,onClick:function(){return n("signin")},children:"Sign In"})]})})]})})]})})},u=n(214),d=n.n(u);function f(){return console.log("/logindemo"),(0,i.jsxs)("div",{className:d().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Nextjs Website"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"".concat("/logindemo","/favicon.ico")})]}),(0,i.jsx)(l,{})]})}},214:function(){},5583:function(e){e.exports={container:"SignIn_container__35cKP",data_container:"SignIn_data_container__tXqXH",toggle_container:"SignIn_toggle_container__bRvLx",form_container:"SignIn_form_container__S3PNU",form_content:"SignIn_form_content__9wLOt",disabled:"SignIn_disabled__xODr1",btn:"SignIn_btn__icmWN",sign_link:"SignIn_sign_link__p6zif",sign_link_active:"SignIn_sign_link_active__e0Vor"}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){n(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);