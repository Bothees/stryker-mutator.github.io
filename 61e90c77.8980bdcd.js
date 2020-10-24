(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{163:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),g=n,m=b["".concat(s,".").concat(g)]||b[g]||p[g]||a;return r?o.a.createElement(m,i(i({ref:t},c),{},{components:r})):o.a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(163)),s={title:"Getting started",custom_edit_url:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md"},i={unversionedId:"stryker4s/getting-started",id:"stryker4s/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Stryker4s is a mutation testing framework for Scala. It allows you to test your tests by temporarily inserting bugs.",source:"@site/docs/stryker4s/getting-started.md",slug:"/stryker4s/getting-started",permalink:"/docs/stryker4s/getting-started",editUrl:"https://github.com/stryker-mutator/stryker4s/edit/master/docs/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Contribute to Stryker4s",permalink:"/docs/stryker4s/contributing"},next:{title:"Versioning strategy",permalink:"/docs/stryker4s/versioning"}},l=[{value:"1 Install",id:"1-install",children:[]},{value:"2 Configure",id:"2-configure",children:[]},{value:"3 Let&#39;s kill some mutants",id:"3-lets-kill-some-mutants",children:[]},{value:"4 Having trouble?",id:"4-having-trouble",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Stryker4s is a mutation testing framework for Scala. It allows you to test your tests by temporarily inserting bugs."),Object(a.b)("p",null,"This guide is for the sbt plugin for Stryker4s. For other ways to run Stryker4s, such as on Maven projects, look at our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker4s/blob/master/README.md#getting-started"}),"README"),"."),Object(a.b)("h2",{id:"1-install"},"1 Install"),Object(a.b)("p",null,"To install Stryker4s on your project, add the following line to ",Object(a.b)("inlineCode",{parentName:"p"},"project/plugins.sbt")," ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://search.maven.org/search?q=g:io.stryker-mutator"}),Object(a.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/maven-central/v/io.stryker-mutator/stryker4s-core_2.12.svg?label=Maven%20Central&colorB=brightgreen",alt:"Maven Central"}))),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-scala"}),'addSbtPlugin("io.stryker-mutator" % "sbt-stryker4s" % stryker4sVersion)\n')),Object(a.b)("h2",{id:"2-configure"},"2 Configure"),Object(a.b)("p",null,"Stryker4s will look for a ",Object(a.b)("inlineCode",{parentName:"p"},"stryker4s.conf")," file in the root of your project. If found, it will use the configured values. All arguments in the configuration (and the file itself) are optional. You can find the possible values in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/stryker4s/configuration"}),"configuration")," page."),Object(a.b)("h2",{id:"3-lets-kill-some-mutants"},"3 Let's kill some mutants"),Object(a.b)("p",null,"Run Stryker4s to mutation test your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sbt stryker\n")),Object(a.b)("h2",{id:"4-having-trouble"},"4 Having trouble?"),Object(a.b)("p",null,"Are you having troubles? Try enabling debug logging, for more information on how to enable debug logging visit our ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker4s/blob/master/docs/CONFIGURATION.md#log-level"}),"configuration page"),".\nIf you are having issues, please let us know by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker4s/issues/new"}),"reporting an issue")," or talk to us on ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitter.im/stryker-mutator/stryker4s"}),"Gitter"),"."))}u.isMDXComponent=!0}}]);