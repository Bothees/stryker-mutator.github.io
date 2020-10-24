(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(163)),l={slug:"stryker-0-8-0",title:"Stryker 0.8 release",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},c={permalink:"/blog/stryker-0-8-0",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-08-11-stryker-0-8-0.md",source:"@site/blog/2017-08-11-stryker-0-8-0.md",description:"Stryker 0.8 just released with better CI integration and configurable thresholds.",date:"2017-08-11T00:00:00.000Z",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Stryker 0.8 release",readingTime:1.37,truncated:!0,prevItem:{title:"TypeScript support",permalink:"/blog/typescript-support"},nextItem:{title:"Road to Stryker 1.0",permalink:"/blog/road-to-stryker-1-0"}},i=[{value:"Better CI integration",id:"better-ci-integration",children:[]},{value:"Configurable color thresholds",id:"configurable-color-thresholds",children:[]},{value:"Bugfixes",id:"bugfixes",children:[]},{value:"Enjoy!",id:"enjoy",children:[]}],s={rightToc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stryker 0.8 just released with better CI integration and configurable thresholds."),Object(o.b)("p",null,"For the entire changelog per package:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker/CHANGELOG.md"}),"stryker changelog")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-api/CHANGELOG.md"}),"stryker-api changelog")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-html-reporter/CHANGELOG.md"}),"stryker-html-reporter changelog")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-mocha-runner/CHANGELOG.md"}),"stryker-mocha-runner changelog")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/blob/master/packages/stryker-mocha-framework/CHANGELOG.md"}),"stryker-mocha-framework changelog"))),Object(o.b)("h2",{id:"better-ci-integration"},"Better CI integration"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/pull/355"}),"Original PR")),Object(o.b)("p",null,"It's now possible to let your build fail based on your mutation score.\nThe way to do this is to make sure stryker runs inside your (nightly) build and configure the ",Object(o.b)("inlineCode",{parentName:"p"},"threshold.break")," value:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// stryker.conf.js\n// ...\nthresholds: {\n    break: 70, // Fail if mutation score < 70\n    // ..\n}\n// ...\n")),Object(o.b)("p",null,"This will break the build if your mutation score falls below 70%."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"[2017-08-11 13:46:10.190] [ERROR] ScoreResultCalculator - Final mutation score 66.97 under breaking threshold 70, setting exit code to 1 (failure).\nnpm ERR! code ELIFECYCLE\nnpm ERR! errno 1\nnpm ERR! stryker@0.8.0 stryker: `node bin/stryker run`\n")),Object(o.b)("p",null,"Want to know what a 'mutation score' is? See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../docs/General/faq.md"}),"our faq"),"."),Object(o.b)("h2",{id:"configurable-color-thresholds"},"Configurable color thresholds"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker/pull/355"}),"Original PR")),Object(o.b)("p",null,"The clear-text and html reporters now honor configured high and low thresholds.\nYou once again configure it using the ",Object(o.b)("inlineCode",{parentName:"p"},"thresholds")," config option:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// stryker.conf.js\n// ...\nthresholds: {\n    high: 80,\n    low: 60,\n    // ...\n}\n// ...\n")),Object(o.b)("p",null,"Configuring these values will color mutation scores above 80% ",Object(o.b)("span",{class:"text-success"},"green"),", between 80 and 60% ",Object(o.b)("span",{class:"text-warning"},"yellow")," and anything below 60% ",Object(o.b)("span",{class:"text-danger"},"red"),".\nYou can see an example of an html report based on stryker itself ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stryker-mutator.github.io/stryker-html-reporter"}),"here"),"."),Object(o.b)("h2",{id:"bugfixes"},"Bugfixes"),Object(o.b)("p",null,"Bugfixes this release:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/issues/335"}),"Incorrect relative path for html reporter #355")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/stryker-mutator/stryker/issues/350"}),"Mutation testing in node based environments can generate false warnings #350"))),Object(o.b)("h2",{id:"enjoy"},"Enjoy!"),Object(o.b)("p",null,"Enjoy this new release! We're always happy with feedback, negative or positive."))}b.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);