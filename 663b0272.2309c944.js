(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{102:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return l}));var n=o(2),a=o(6),r=(o(0),o(163)),i={slug:"introduction-to-mutation-testing",title:"Introduction to mutation testing",author:"Simon de Lang",author_title:"Stryker Team",author_url:"https://github.com/simondel",author_image_url:"https://avatars1.githubusercontent.com/u/4221997?s=460&u=d09f7c27690d66764ff2f2ebb6d9f8d5431ad9e3&v=4",tags:["stryker"]},u={permalink:"/blog/introduction-to-mutation-testing",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2017-01-17-introduction-to-mutation-testing.md",source:"@site/blog/2017-01-17-introduction-to-mutation-testing.md",description:"Writing unit tests can be hard. Even for an easy example such as a calculator app.",date:"2017-01-17T00:00:00.000Z",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],title:"Introduction to mutation testing",readingTime:4.505,truncated:!0,prevItem:{title:"Stryker weekend",permalink:"/blog/stryker-weekend"},nextItem:{title:"Happy new Stryker!",permalink:"/blog/happy-new-stryker"}},s=[{value:"The code coverage problem",id:"the-code-coverage-problem",children:[]},{value:"Mutation testing",id:"mutation-testing",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Setting goals",id:"setting-goals",children:[]}],c={rightToc:s};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Writing unit tests can be hard. Even for an easy example such as a calculator app.\nThere are unlimited combinations of inputs for a calculator and you're not going to test every single one. So when are you done testing?"),Object(r.b)("p",null,"Say you're building an online casino, users can only enter the casino when they're over 18. So you write the following piece of code to check if someone is allowed to use the website:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function isUserOldEnough(user) {\n  return user.age >= 18;\n}\n")),Object(r.b)("p",null,"Easy right? So what inputs do you use to test? Perhaps you would pick your own age (25 for example) if you're over 18 and pick something below 18 (16 or so) to check the other outcome.\nYou run your code coverage tool on the code and it turns out your code is 100% covered. Great, we're done testing!"),Object(r.b)("h2",{id:"the-code-coverage-problem"},"The code coverage problem"),Object(r.b)("p",null,"I used to think that code coverage tells you which code is tested. But I realized I was wrong. Code coverage doesn\u2019t tell you which code is tested, it only tells you which code is being executed during testing. There is an important difference here. You could write one test which hits 100 lines of code, but that doesn\u2019t mean that all 100 lines of code work as you would expect. If you would write 10 tests for that piece of code, you may still have the same code coverage. You could even write tests without assertions to boost your code coverage."),Object(r.b)("p",null,"And how do you know that enough is enough? Some teams even have code coverage goals that they have to hit (100% anyone?). As if that would make you write better tests. Sure, it forces you to write tests, but it doesn\u2019t promise that they\u2019re good tests. It even encourages bad behavior for some people. During one of my projects as a student, our school decided a little competition would be fun. The team with the highest code coverage at the end of the project would win a small prize. It didn\u2019t take long to find out that tests could be written without assertions to easily boost their code coverage (of course, I would never do that ;))."),Object(r.b)("p",null,"The only way to know that a test actually ",Object(r.b)("em",{parentName:"p"},"works")," is when it fails when you make a code change."),Object(r.b)("h2",{id:"mutation-testing"},"Mutation testing"),Object(r.b)("p",null,"You could go through your code base and make changes to see if certain tests fail. However, this process is time consuming. You're much better off using a mutation testing framework. A mutation testing framework will look through your code to see where it can introduce bugs, which we will call ",Object(r.b)("em",{parentName:"p"},"mutants")," from now on."),Object(r.b)("p",null,"Say you have the following code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"function isUserOldEnough(user) {\n  return user.age >= 18;\n}\n")),Object(r.b)("p",null,"A mutation testing framework will find the return statement and decide to change it in a number of ways:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"/* 1 */ return user.age > 18;\n/* 2 */ return user.age < 18;\n/* 3 */ return false;\n/* 4 */ return true;\n")),Object(r.b)("p",null,"Each one of those mutants should make a test fail. After the mutants have been found, they are applied one by one and your tests will be executed. If at least one of your tests fail, we say the mutant is ",Object(r.b)("em",{parentName:"p"},"killed"),". If no tests fail, it ",Object(r.b)("em",{parentName:"p"},"survived"),". The better your tests, the less mutants survive. The first mutant would have survived if we had a test with a user aged 16 and 25, since we didn't test the boundary."),Object(r.b)("p",null,"With mutation testing you\u2019re testing your tests."),Object(r.b)("h2",{id:"getting-started"},"Getting started"),Object(r.b)("p",null,"The best thing to do if you\u2019re not already using mutation testing is to just try it once. Most languages have a mutation testing framework.\nJust take a look on GitHub and you will probably find one for the language you use."),Object(r.b)("p",null,"If you\u2019re using JavaScript, I would suggest looking at Stryker. It has a great ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://stryker-mutator.github.io/quickstart.html"}),"quickstart page")," to get you up and running."),Object(r.b)("p",null,"If you've first used a mutation testing framework, you may find that there are a lot of mutations that survive, but that\u2019s ok!"),Object(r.b)("h2",{id:"setting-goals"},"Setting goals"),Object(r.b)("p",null,"After you\u2019ve used a mutation framework a couple of times, you may think about setting a mutation testing goal,\njust like with your code coverage goal. I sometimes get asked what a good goal is for mutation testing.\nIt can be a difficult question to answer and I honestly don\u2019t know what a good goal is for your application."),Object(r.b)("p",null,"Mutation testing frameworks make very different changes depending on the language or even framework you\u2019re using.\nStryker could assign any value to any variable since it tests JavaScript. That doesn\u2019t work for a framework like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://pitest.org/"}),"PIT"),",\nwhich can be used to mutation test Java code. This means that your score could differ a lot depending on the language and framework you use.\nThe goal you want to set may also differ depending on the type of application that you're writing. A banking application may require a higher mutation score than some side project."),Object(r.b)("p",null,"I would suggest running a mutation testing framework and set a higher goal than your current score.\nI would not advise to make 100% mutation coverage your goal though. The most important thing is that you write good tests and mutation testing can help you achieve that.\nSo if you\u2019re going to set any goal, make writing good tests your goal."))}l.isMDXComponent=!0},163:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return p}));var n=o(0),a=o.n(n);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},d=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(o),h=n,p=d["".concat(i,".").concat(h)]||d[h]||g[h]||r;return o?a.a.createElement(p,u(u({ref:t},c),{},{components:o})):a.a.createElement(p,u({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<r;c++)i[c]=o[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);