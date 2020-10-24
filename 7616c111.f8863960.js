(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(163)),c={title:"React",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/guides/react.md"},s={unversionedId:"stryker/guides/react",id:"stryker/guides/react",isDocsHomePage:!1,title:"React",description:"Stryker supports React projects using Jest with both JSX and TSX code.",source:"@site/docs/stryker/guides/react.md",slug:"/stryker/guides/react",permalink:"/docs/stryker/guides/react",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/guides/react.md",version:"current",sidebar:"docs",previous:{title:"Angular",permalink:"/docs/stryker/guides/angular"},next:{title:"VueJS",permalink:"/docs/stryker/guides/vuejs"}},i=[{value:"JSX project",id:"jsx-project",children:[{value:"Configuration",id:"configuration",children:[]}]},{value:"TSX projects",id:"tsx-projects",children:[]}],u={rightToc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker supports React projects using Jest with both JSX and TSX code."),Object(a.b)("h2",{id:"jsx-project"},"JSX project"),Object(a.b)("p",null,"Recommended stryker packages: ",Object(a.b)("inlineCode",{parentName:"p"},"npm i -D @stryker-mutator/core @stryker-mutator/jest-runner @stryker-mutator/javascript-mutator @stryker-mutator/html-reporter")),Object(a.b)("p",null,"Recommended other packages:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"jest 23.0.0 or higher")),Object(a.b)("h3",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"After installing the recommended packages, create the ",Object(a.b)("inlineCode",{parentName:"p"},"stryker.conf.js")," file in your repository.\nThe configuration below contains a good starting point for React projects.\nYou may have to change some paths like the mutate array."),Object(a.b)("p",null,"Coverage analysis is unfortunately not supported as of right now."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"module.exports = function (config) {\n  config.set({\n    mutate: ['src/**/*.js?(x)', '!src/**/*@(.test|.spec|Spec).js?(x)'],\n    mutator: 'javascript',\n    testRunner: 'jest',\n    reporter: ['progress', 'clear-text', 'html'],\n    coverageAnalysis: 'off',\n    jest: {\n      project: 'react',\n    },\n  });\n};\n")),Object(a.b)("h2",{id:"tsx-projects"},"TSX projects"),Object(a.b)("p",null,"For projects using TypeScript and TSX, you can follow the JSX guide but with a few differences:"),Object(a.b)("p",null,"Recommended stryker packages: ",Object(a.b)("inlineCode",{parentName:"p"},"npm i -D @stryker-mutator/core @stryker-mutator/jest-runner @stryker-mutator/typescript @stryker-mutator/html-reporter")),Object(a.b)("p",null,"Configuration:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"mutate: ['src/**/*.ts?(x)', '!src/**/*@(.test|.spec|Spec).ts?(x)'],\nmutator: 'typescript',\n")))}p.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,b=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?o.a.createElement(b,s(s({ref:t},u),{},{components:r})):o.a.createElement(b,s({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);