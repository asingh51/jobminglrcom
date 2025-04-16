"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[999],{3204:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,a=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),o=new RegExp(s.source+n.source,"gu"),i=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,a,n)=>{let s=!1,l=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];s&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),s=!1,o=l,l=!0,i++):l&&o&&r.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=l,l=!1,s=!0):(s=a(c)===c&&n(c)!==c,o=l,l=n(c)===c&&a(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(a.lastIndex=0,e.replace(a,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,r)=>t(r))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return v},P:function(){return C},S:function(){return S},_:function(){return o},a:function(){return l},b:function(){return u},g:function(){return A},h:function(){return i}});var a=r(7294),n=(r(3204),r(5697)),s=r.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t.indexOf(r=s[a])>=0||(n[r]=e[r]);return n}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}function u(e,t,r,a,n){return void 0===n&&(n={}),l({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function A(e,t,r,a,n,s,o,i){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],m=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=o(e,d);return a.createElement(a.Fragment,null,a.createElement(m,l({},r)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:r,loading:n,alt:s="",shouldLoad:i}=e,c=o(e,p);return a.createElement("img",l({},c,{decoding:"async",loading:n,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?r:void 0,"data-srcset":i?void 0:r,alt:s}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,s=o(e,h);const i=s.sizes||(null==t?void 0:t.sizes),c=a.createElement(f,l({},s,t,{sizes:i,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return a.createElement("source",{key:`${t}-${s}-${r}`,type:s,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:i})})),c):c};var w;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const y=["fallback"],C=function(e){let{fallback:t}=e,r=o(e,y);return t?a.createElement(b,l({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",l({},r))};C.displayName="Placeholder",C.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const v=function(e){return a.createElement(a.Fragment,null,a.createElement(b,l({},e)),a.createElement("noscript",null,a.createElement(b,l({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=b.propTypes;const E=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],k=e=>e.replace(/\n/g,""),L=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),l=3;l<a;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(n)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:s().object.isRequired,alt:L},O=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],Q=new Set;let P,I;const B=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:A,class:d,onStartLoad:m,onLoad:g,onError:p}=e,h=o(e,O);const{width:f,height:b,layout:w}=n,y=c(f,b,w),{style:C,className:v}=y,E=o(y,T),x=(0,a.useRef)(),k=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(A=d);const L=function(e,t,r){let a="";return"fullWidth"===e&&(a=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(a=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),a}(w,f,b);return(0,a.useEffect)((()=>{P||(P=r.e(731).then(r.bind(r,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void Q.add(k);if(I&&Q.has(k))return;let t,a;return P.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;x.current&&(x.current.innerHTML=r(l({isLoading:!0,isLoaded:Q.has(k),image:n},h)),Q.has(k)||(t=requestAnimationFrame((()=>{x.current&&(a=o(x.current,k,Q,s,m,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{Q.has(k)&&I&&(x.current.innerHTML=I(l({isLoading:Q.has(k),isLoaded:Q.has(k),image:n},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,l({},E,{style:l({},C,s,{backgroundColor:u}),className:`${v}${A?` ${A}`:""}`,ref:x,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},q=(0,a.memo)((function(e){return e.image?(0,a.createElement)(B,e):null}));q.propTypes=N,q.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:r,__imageData:n,__error:s}=t,i=o(t,W);return s&&console.warn(s),n?a.createElement(e,l({image:n},i)):(console.warn("Image not loaded",r),null)}}const X=z((function(e){let{as:t="div",className:r,class:n,style:s,image:i,loading:d="lazy",imgClassName:m,imgStyle:p,backgroundColor:h,objectFit:f,objectPosition:b}=e,w=o(e,E);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(r=n),p=l({objectFit:f,objectPosition:b,backgroundColor:h},p);const{width:y,height:L,layout:N,images:O,placeholder:T,backgroundColor:Q}=i,P=c(y,L,N),{style:I,className:B}=P,q=o(P,x),W={fallback:void 0,sources:[]};return O.fallback&&(W.fallback=l({},O.fallback,{srcSet:O.fallback.srcSet?k(O.fallback.srcSet):void 0})),O.sources&&(W.sources=O.sources.map((e=>l({},e,{srcSet:k(e.srcSet)})))),a.createElement(t,l({},q,{style:l({},I,s,{backgroundColor:h}),className:`${B}${r?` ${r}`:""}`}),a.createElement(g,{layout:N,width:y,height:L},a.createElement(C,l({},A(T,!1,N,y,L,Q,f,b))),a.createElement(v,l({"data-gatsby-image-ssr":"",className:m},w,u("eager"===d,!1,W,d,p)))))})),D=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(a)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),j={src:s().string.isRequired,alt:L,width:D,height:D,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};X.displayName="StaticImage",X.propTypes=j;const S=z(q);S.displayName="StaticImage",S.propTypes=j},5009:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=r(1883);var s=()=>{const{0:e,1:t}=(0,a.useState)(!1);return a.createElement("header",{className:"bg-white shadow-md fixed w-full top-0 z-10"},a.createElement("nav",{className:"container mx-auto flex items-center justify-between p-4"},a.createElement(n.Link,{to:"/",className:"flex items-center space-x-2 text-2xl font-bold text-brandGreen"},a.createElement("img",{src:"data:image/png;base64,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",alt:"logo",className:"w-6 h-6 text-brandAccent filter-orange"}),a.createElement("span",null,"JobMinglr")),a.createElement("button",{className:"md:hidden text-brandGreen focus:outline-none text-4xl","aria-label":"Toggle menu",onClick:()=>t(!e)},"☰"),a.createElement("div",{className:"hidden md:flex space-x-8"},a.createElement(n.Link,{to:"/",activeClassName:"font-semibold text-brandGreen-dark",className:"text-gray-700 hover:text-brandGreen-dark"},"Home"),a.createElement(n.Link,{to:"/about",activeClassName:"font-semibold text-brandGreen-dark",className:"text-gray-700 hover:text-brandGreen-dark"},"About"),a.createElement(n.Link,{to:"/features",activeClassName:"font-semibold text-brandGreen-dark",className:"text-gray-700 hover:text-brandGreen-dark"},"Features"),a.createElement(n.Link,{to:"/pricing",activeClassName:"font-semibold text-brandGreen-dark",className:"text-gray-700 hover:text-brandGreen-dark"},"Pricing"),a.createElement(n.Link,{to:"/contact",activeClassName:"font-semibold text-brandGreen-dark",className:"text-gray-700 hover:text-brandGreen-dark"},"Contact"),a.createElement(n.Link,{to:"/download",activeClassName:"font-semibold text-brandGreen-dark",className:"text-gray-700 hover:text-brandGreen-dark"},"Download"))),e&&a.createElement("div",{className:"md:hidden bg-white border-t border-gray-200"},a.createElement(n.Link,{to:"/",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>t(!1)},"Home"),a.createElement(n.Link,{to:"/about",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>t(!1)},"About"),a.createElement(n.Link,{to:"/features",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>t(!1)},"Features"),a.createElement(n.Link,{to:"/pricing",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>t(!1)},"Pricing"),a.createElement(n.Link,{to:"/contact",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>t(!1)},"Contact"),a.createElement(n.Link,{to:"/download",className:"block px-4 py-2 text-gray-700 hover:bg-gray-50",onClick:()=>t(!1)},"Download")))},l=r(2091);var o=()=>a.createElement("footer",{className:"bg-brandGreen-dark text-gray-100 py-6 mt-12"},a.createElement("div",{className:"container mx-auto text-center text-sm"},a.createElement("div",{className:"mb-4 space-x-4"},a.createElement(n.Link,{to:"/about",className:"hover:underline"},"About"),a.createElement(n.Link,{to:"/features",className:"hover:underline"},"Features"),a.createElement(n.Link,{to:"/contact",className:"hover:underline"},"Contact")),a.createElement("div",{className:"mb-4 flex justify-center space-x-4 "},a.createElement("a",{href:"https://www.facebook.com/people/JobMinglr/61566729878215/",target:"_blank",rel:"noopener noreferrer"},a.createElement(l.Am9,{size:30,className:"mx-3"})),a.createElement("a",{href:"https://www.twitter.com",target:"_blank",rel:"noopener noreferrer"},a.createElement(l.fWC,{size:30,className:"mx-3"})),a.createElement("a",{href:"https://www.linkedin.com/company/jobminglr/",target:"_blank",rel:"noopener noreferrer"},a.createElement(l.ltd,{size:30,className:"mx-3"})),a.createElement("a",{href:"https://www.instagram.com/jobminglrr/",target:"_blank",rel:"noopener noreferrer"},a.createElement(l.Zf_,{size:30,className:"mx-3"})),a.createElement("a",{href:"https://www.tiktok.com",target:"_blank",rel:"noopener noreferrer"},a.createElement(l.nTm,{size:30,className:"mx-3"}))),a.createElement("p",null,"© 2025 JobMinglr. All rights reserved."),a.createElement("div",{className:"mb-4 flex justify-center space-x-3"},a.createElement(n.Link,{to:"/acceptable-use-1",className:"hover:underline"},"Acceptable Use"),a.createElement(n.Link,{to:"/ai-principles",className:"hover:underline"},"AI Principles"),a.createElement(n.Link,{to:"/ai-faqs",className:"hover:underline"},"AI FAQs"),a.createElement(n.Link,{to:"/disability-inclusion-1",className:"hover:underline"},"Disability Inclusion Policy"),a.createElement(n.Link,{to:"/privacy-center",className:"hover:underline"},"Privacy Center"),a.createElement(n.Link,{to:"/privacy-faqs",className:"hover:underline"},"Privacy FAQs"),a.createElement(n.Link,{to:"/privacy-policy",className:"hover:underline"},"Privacy Policy"),a.createElement(n.Link,{to:"/security",className:"hover:underline"},"Security"),a.createElement(n.Link,{to:"/terms-of-service",className:"hover:underline"},"Terms of Service")))),i=r(8032);var c=e=>{let{children:t}=e;const{0:n,1:l}=(0,a.useState)("");return(0,a.useEffect)((()=>{l((()=>{try{if("undefined"!=typeof window){const e=/iPhone|iPad|iPod/i.test(navigator.userAgent),t=/Android/i.test(navigator.userAgent);return e?"https://apps.apple.com/us/app/jobminglr/id6738838504":t?"https://play.google.com/store/apps/details?id=com.jobminglr.in.android&utm_source=na_Med":"https://www.jobminglr.app/"}}catch(e){return"https://www.jobminglr.app/"}})())}),[]),a.createElement(a.Fragment,null,a.createElement(s,null),a.createElement("main",{className:"pt-16"},t),a.createElement("div",{className:"fixed bottom-4 right-4 z-50"},a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},a.createElement(i.S,{src:"../images/qr.png",alt:"Download JobMinglr App",placeholder:"blurred",layout:"constrained",className:"w-20 h-20 shadow-lg border rounded-lg",__imageData:r(4181)}))),a.createElement(o,null))}},3621:function(e,t,r){r.d(t,{w_:function(){return m}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),l=["attr","size","title"];function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,u({key:t},e.attr),d(e.child))))}function m(e){return t=>a.createElement(g,i({attr:u({},e.attr)},t),d(e.child))}function g(e){var t=t=>{var r,{attr:n,size:s,title:c}=e,A=o(e,l),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,A,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==s?a.createElement(s.Consumer,null,(e=>t(e))):t(n)}},4181:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADnUlEQVR42n1VN0gtURR8rZ2NjYKdCHYiIlhYiJhFsDArqBgx5xwwYsYcMWHArJgaEbRQMVQqJhRBFC3MOc1njuzqg///wr67e/feuefMzDlPg/9cHx8fMn5+fuL9/R1fX18yx/Ffl4Y/XHB0dIS9vT25n56ecHBwIOPz8zMeHh6grON9cXGB+/t7dT33KocIICe8vb1RXl6O6OhopKWlwdPTE/Hx8VhbW0NGRgZqamqwvb2NxcVFODo6IiUlBTExMbKHe4mhAjKa3Nxc6OvrIywsDJ2dnZidnUV2djYiIyORmZmJiIgInJ6eIigoCHZ2dqiurpbDDQwMkJOTIxhagNzASBhVfX09/Pz8YG9vj7KyMkxPT6O7uxulpaUYGhpCfn6+PDPK5ORkJCQkYH9//wfw5eUFo6OjKCoqQlNTE3p7e2FoaIjQ0FCsrKygo6MDY2NjAjQ+Pi4gfX19qKqqkm+xsbHCqZYoTM3Z2VkWLy8vCyijiouLEz6joqIkzZCQENTW1sLIyAhtbW1YXV2Fi4sLrq+vvwFpB16BgYEwMzOTe3JyEltbW5L2xMQEkpKSJNrGxkZYWlpKJoyKPHO+tbVVdYKacnp6unBSXFwMLy8vlJSUyOLLy0tkZWVhcHAQLS0tMm9qagp3d3fMz8+L+oyY9hJAmpbXwsICgoODRZyCggJsbm7Cx8cHeXl5qKurE77IL6np6uqCr6+vzDFlHnB1dfUNqFQDwy4sLBTSra2tkZqaChMTExgbG8PBwQFOTk7w8PCAq6urqFpRUSGCMRACqhzyh2lRECsrKxGFI81Ny5ArAjN9zvn7+0uatra20NHRkcPpW6VUBfD8/FxMTUGoLtUcHh6Gm5sbNBoN+vv7hSeqzUPogqWlJRGLnl1fX1dLUwAPDw9FjJ6eHgwMDEiFcOPMzAzm5ubE+KSE0dvY2AivFKi5uRnm5uYSPeteTZn58yMByCMrIzExUYingdvb28VzNDZvXV1deWdlMd2pqSnc3t7+ADJCqksTk3AuJnh4eLgozCra2NhAQECA1DwtRmDajKLp6elpA7IOuZCFzlom+YyMZcVmQe52dnbknaYmz/Qhm0ZDQwNGRka0OVTaV2VlpXQTltzJyYlYg+LQMqSCaltYWIgjmC75pg/J8+vr698b7O7urlQOjXp2dibN9Pj4WDbc3d3h8fFRKFIq4+3tDTc3N2p31/ytjSudWXlWPPZ7nkAKyO+/gD9QbauTaRmmtwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/247014562bf213e4ae589c05f8393b2d/72b3c/qr.png","srcSet":"/static/247014562bf213e4ae589c05f8393b2d/72f23/qr.png 164w,\\n/static/247014562bf213e4ae589c05f8393b2d/3ccc2/qr.png 328w,\\n/static/247014562bf213e4ae589c05f8393b2d/72b3c/qr.png 656w","sizes":"(min-width: 656px) 656px, 100vw"},"sources":[{"srcSet":"/static/247014562bf213e4ae589c05f8393b2d/56b5a/qr.webp 164w,\\n/static/247014562bf213e4ae589c05f8393b2d/84225/qr.webp 328w,\\n/static/247014562bf213e4ae589c05f8393b2d/61f7a/qr.webp 656w","type":"image/webp","sizes":"(min-width: 656px) 656px, 100vw"}]},"width":656,"height":656}')}}]);
//# sourceMappingURL=98ae54dc0fe13812d27a0b6bb21c29b15ec5d239-4d08bafc783a14cfa481.js.map