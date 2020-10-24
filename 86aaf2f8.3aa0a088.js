(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(163)),s={slug:"announcing-dotnet-framework-support",title:"Announcing Stryker.NET 0.10 with .NET Framework support",author:"Richard Werkman",author_title:"Stryker.NET Team",author_url:"https://github.com/richardwerkman",author_image_url:"https://avatars1.githubusercontent.com/u/14224500?s=460&u=189f6ef9ab6957063d0674f94c014bef39bf4653&v=4",tags:["stryker.net"]},i={permalink:"/blog/announcing-dotnet-framework-support",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2019-04-05-announcing-dotnet-framework-support.md",source:"@site/blog/2019-04-05-announcing-dotnet-framework-support.md",description:"Stryker.NET 0.10 is here! This brings new features to mutation testing for .NET. Read all about these features in this blog.",date:"2019-04-05T00:00:00.000Z",tags:[{label:"stryker.net",permalink:"/blog/tags/stryker-net"}],title:"Announcing Stryker.NET 0.10 with .NET Framework support",readingTime:3.84,truncated:!0,prevItem:{title:"Announcing Stryker 2.0",permalink:"/blog/announcing-stryker-2-0"},nextItem:{title:"One mutation testing HTML report",permalink:"/blog/one-mutation-testing-html-report"}},l=[{value:"\ud83d\udc7e Mutation testing",id:"-mutation-testing",children:[]},{value:"\ud83d\udcaa Start using Stryker.NET",id:"-start-using-strykernet",children:[]},{value:"\u23e9 VSTest integration",id:"-vstest-integration",children:[]},{value:"\ud83d\udcca New HTML report",id:"-new-html-report",children:[]},{value:"\ud83c\udfc3\u200d Progress bar",id:"-progress-bar",children:[]},{value:"\ud83d\udd2e What&#39;s next?",id:"-whats-next",children:[]},{value:"Contribute",id:"contribute",children:[]}],c={rightToc:l};function u(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Stryker.NET 0.10 is here! This brings new features to mutation testing for .NET. Read all about these features in this blog."),Object(o.b)("p",null,"Stryker.NET has been under very active development. Up to now, we focussed on performance and .NET core.\nThat all changes with v0.10, as we now also support ",Object(o.b)("strong",{parentName:"p"},".NET Framework"),". Both frameworks are supported now,\nwith 100% feature parity. We also introduce some cool new features."),Object(o.b)("p",null,"In this article we want to briefly recap what mutation testing is.\nAfter that we'll explain how you install and use Stryker.NET.\nWe also want to highlight some cool new features, before we end with a quick look at what's next.\nJump right into it:"),Object(o.b)("h2",{id:"-mutation-testing"},"\ud83d\udc7e Mutation testing"),Object(o.b)("p",null,"For those of you who might not be familiar with Stryker.NET and Mutation Testing, here is a brief reminder.\nPlease see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/example"}),"our RoboBar example")," for the full introduction."),Object(o.b)("p",null,"Stryker.NET places ",Object(o.b)("em",{parentName:"p"},"mutants")," (bugs) inside your source code. After that, it runs your tests for each mutant.\nIf at least one tests fails, that's great! Your tests just killed that mutant. If not, too bad, the mutant survived.\nApparently, you're missing a test."),Object(o.b)("p",null,"Calculating the percentage of mutants that were killed results in the mutation score. The higher the number, the better.\nIt is the only way to measure ",Object(o.b)("em",{parentName:"p"},"your tests effectiveness"),". It's really as simple as that."),Object(o.b)("p",null,"To cover as much logic as possible Stryker.NET provides a wide range of mutations.\nAn overview of these mutations can be found ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../docs/stryker-net/Mutators.md"}),"here"),".\nYou can run Stryker.NET with .NET Core on Windows, Mac and Linux as well as .NET Framework on Windows."),Object(o.b)("h2",{id:"-start-using-strykernet"},"\ud83d\udcaa Start using Stryker.NET"),Object(o.b)("p",null,"Stryker.NET is now installed as a (global) ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/core/tools/global-tools"}),"dotnet tool"),"\ninstead of a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/core/tools/extensibility"}),"Per-project tool"),".\nThis has the advantage of not competing with your local project dependencies, but this also means that\nStryker.NET has to be installed globally on your system. From .NET core 3.0, you will be able to install dotnet tools locally inside your project."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Installation"),Object(o.b)("p",{parentName:"li"},"Install ",Object(o.b)("strong",{parentName:"p"},"globally")," (.NET Core runtime 2.2+):"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"dotnet tool install -g dotnet-stryker\n")),Object(o.b)("p",{parentName:"li"},"Or install ",Object(o.b)("strong",{parentName:"p"},"locally")," (.NET Core runtime 3.0+):"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd my-test-project\ndotnet new tool-manifest\ndotnet tool install dotnet-stryker\n")),Object(o.b)("p",{parentName:"li"},"This will create a file called dotnet-tools.json in your project folder. You should check this file into source control to make sure all team members have access to Stryker and other tools specified here."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"dotnet tool install dotnet-stryker\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Install NuGet"),Object(o.b)("p",{parentName:"li"},"For .NET Core projects this step can be skipped.",Object(o.b)("br",{parentName:"p"}),"\n","For .NET Framework projects, make sure ",Object(o.b)("inlineCode",{parentName:"p"},"nuget.exe")," is installed on your system.\nPlease follow their ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/nuget/install-nuget-client-tools#windows"}),"installation instructions"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Remove old references"),Object(o.b)("p",{parentName:"li"},"Remove the old ",Object(o.b)("inlineCode",{parentName:"p"},"DotNetCliToolReference")," from your test project since they won't be updated anymore.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Have fun using stryker!"),Object(o.b)("p",{parentName:"li"},"You can now kick off stryker using"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'dotnet stryker --solution-path "../MySolution.sln"\n')),Object(o.b)("p",{parentName:"li"},"If stryker is installed as a dotnet core 3.0 local tool, use the following instead:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'dotnet tool run dotnet-stryker --solution-path "../MySolution.sln"\n')))),Object(o.b)("h2",{id:"-vstest-integration"},"\u23e9 VSTest integration"),Object(o.b)("p",null,"Stryker.NET now hooks right into VSTest to execute your unit tests instead of running your tests from the command line.\nThis means a big performance boost, because it keeps the VSTest connection alive between test runs.\nBecause Stryker.NET supports VSTest, this performance boost wil work for most test frameworks, including ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://xunit.github.io/"}),"XUnit"),",\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nunit.org/"}),"NUnit")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/core/testing/unit-testing-with-mstest"}),"MSTest"),"."),Object(o.b)("h2",{id:"-new-html-report"},"\ud83d\udcca New HTML report"),Object(o.b)("p",null,"This might catch your eye. As of v0.10, Stryker.NET comes with an HTML reporter.\nIt shows a report in your browser with insights in your test quality, directly after your run Stryker.",Object(o.b)("br",{parentName:"p"}),"\n","It even goes into detail and shows you exactly what mutants were made and if your tests killed them!"),Object(o.b)("p",null,Object(o.b)("img",{src:n(222).default})),Object(o.b)("p",null,"It uses the generic ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/mutation-testing-elements"}),"mutation-testing-elements"),",\nwhich is an open standard for reporting mutation test results. See our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/blog/one-mutation-testing-html-report"}),"previous blog")," for more information about the mutation-testing-elements"),Object(o.b)("h2",{id:"-progress-bar"},"\ud83c\udfc3\u200d Progress bar"),Object(o.b)("p",null,"You can now track the progress of the mutation testing process, as well as preview the mutant stats.\nIt also includes an indication of the remaining time to finish.\n",Object(o.b)("img",{src:n(223).default})),Object(o.b)("h2",{id:"-whats-next"},"\ud83d\udd2e What's next?"),Object(o.b)("p",null,"The following months we will be focusing on performance and stability.\nThe main next feature will be coverage analysis. How does that work?"),Object(o.b)("p",null,"Stryker.NET will use code coverage analysis to find mutants that are not covered by your tests.\nIf it's not covered, it cannot be killed by any test, right? The mutant will be marked as ",Object(o.b)("inlineCode",{parentName:"p"},"no coverage"),",\nmeaning the mutant survived while we saved valuable time."),Object(o.b)("h2",{id:"contribute"},"Contribute"),Object(o.b)("p",null,"Want to help make Stryker.NET even better?\nCheck out our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-net/blob/master/CONTRIBUTING.md"}),"contribution guide"),"\nand ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://waffle.io/stryker-mutator/stryker-net"}),"backlog")," to see what help we need."),Object(o.b)("p",null,"Special thanks to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/stryker-mutator/stryker-net/commits?author=dupdob"}),"@dubdop")," for all his contributions. Keep up the good work! \ud83d\udcaa"))}u.isMDXComponent=!0},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return A}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,A=b["".concat(s,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(A,i(i({ref:t},c),{},{components:n})):a.a.createElement(A,i({ref:t},c))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/html-report-net-5d95a90c798dfc78504a2c4bc307348f.png"},223:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmYAAABkCAYAAAAse/yoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABG+SURBVHhe7d27rtvGGoZh7S5VKjep3PgW0uQW0qRKm86tgQD2JbgLYLv1BQRwY6RxZ8D1Agy3ARaQzmU29h1oz4FD/vNzjhQljZZfAQ9sccjhzPCgT5QWdfjPk1+PAAAAuD6CGQAAwCAIZgAAAIMgmAEAAAyCYAYAADAIghkAAMAgCGYAAACDIJgBAAAMgmAGAAAwCIIZgJt0+PnP4+d//3d89yxdDrRiX/o2jbrdXTALjfuv9eXP4496pie/H19+seWfjr+psr0dnvxxfLfzevau8xxt3GqktlzDHv3fawx/+2s6hoK//kjO1+oa2/Yc6zxXP1In1eVcZcXrLJWN5GzjNei23atduXpa6h89mPXsuz3juWXsfVv+Pr78OV0+iq3bfYTzxME3Ylm5fXH5/Pr3aKYfX/9tXmQ+dW/ALbbsKDV713mONm41UluuYY/+7zWG9tjZ88R+jW17jnWO1o9rtKfHudo36rbdq125es41ntfQ0pee/m4Zm4cUzEquud+sPsr0IWx5p+8TpW1cx8Z+9un42QQ5dxXuy5/Hl9OVBPuipTsrn6+uOFiiLbo8vAiGOl7atk9lIVzW6oyuFho6lKak1idfkLPtnMcy1OOTedyP9XIlpb4v5ek6c2W1Omui/kfbzxzMz8R4i6uzpXbmxrO6bUt9V9t9j3dGtj1yHbpsWdd6vtSYpbZDrn7plo6/HHse0vtcmNbyjlb3s7UspdQ/V672pTAupT7IaVp1fa58vb6S2nYo1Zk7R+5Z56nHX6ktqfFc9t3yvpTre4uoTXJcMvtLaGdog36em+ambxjP2vbT5fGYLcHMZYZ/l+el7V6SW19J+Tyxfbv7eTJjvbF/PVbBzA6Obrx9nmtkin1h8J31HbCDpAcr1FN7nuN3RD/fPFDhQLRlqxf9dZ16B2tVW180b9TOeH1yOV+2YRx0W9xzv45SneUyVWehf5o7uMTBvSoT9YR9rafvcjxL89b7p08k6fX10CeW3Elc9yE3Zr5dS1nrdriV46/E9cHUJ5e1fZAnwVK9W8tS/Pzp/vkydUyH46+hDymr9Yl1bD1PWLl56+eJpX/atjrt//c//vJtsdPLx1Fq2VrfS8rHtOi73F9UG9Jtyk3bNp6t8/p2+vnkuNj9OX6Dnd/usr4aub5UeVA6xvy0/u1eKturfzVRMNOD7J5HJ4e2BuQG69QXBv+CYwZ65uc7pU7XR1NX7kU0pbq+TDttWRgH/X+/I8plrPpJYd0Wu+NMgadQZ7GsY/wkP1++zSGI6em1vpfGM9e2Yv+m/XOet7F/Nbn+WeV9Nz1mul2t7Qz9k/OPevzluO1n+2D+fWdeBOy4uiuuYpyKbd1YllLqj96XrLAftPQhZb2+tmNa16Pl+l2rs3SO3FLnuY6/bFtW47meL7fs9teH9DYp7i8b23nKeJbmzR/vfn9003TQOWX/zKwvNW/g1pc5xraOZ6nslP71mIOZ2wFXyVc3wLOdD8ulhB1FduzUFwY/fRkAOd/WOqVwAOqDJqVUv/9/up3zczfOKnnbDa528hbr+m29045ZqLNYlmqzeJ5Tm68YzIptqYxnYp3FOk84kZVk+1foQ2nduqy1nbd4/Glh+/32+pP7+Pvd6z/m/Xqep1Dv1rKUUn/0vmRFwazSh5T1+tqO6Zpcv1vrTJ0jt9R5ruMv25bVeK7nq7XhlNeHqKy0v2xs5ynjmZvXT88d79P+aPZrHZ627p+l9el5pdIxputI1VlaT3L+E46/Hi6YuZ2usrLWgbLqLwzLBrA7pdy4unyus7Ccblv6+bpOrXXQS+vT69L989NMuf2u1epgqodebdUWO/ZRW0phoVSW7p+eV7P9zb27DCcgPb3elvx46vJ4uUyddjvPYxTegMT98+OYXj6n3L98H3Jj5pfTfY3bmXKrx58U6nj32h6PZhvZPz4Sb2TkPHLaqWUpen753O9LS9/k8zBfqQ8pq/U1HtM1ftnctm2rU58jt9R5ruOv3BYxnup5bpqm+16SPaar+8tSpo9NN3+q7Q3jmaPXmZseH+92HVObxb65LNe/f7b0PSWMR+oYC2Vx2+I6U9NKZX5auX9b9l3tEFbk3g3M1g0tdUArvTDY8vndh/HZDKiuV5bLdwJ+Y62X021LtTVV57rv6x00pba+XDvn5TMbzh9goj3NIVEso9dVqDNXVutfyao9avvldtZSO2vjmdtfSnXKZd49W/dvy8El2+k07Lu2LDdmW7fDrRx/JfMLzDSvW3e0f051BSeW6fVLtf6FfcVbziGlPtjnOet2xmO55TwR5LZD+VwgpifOkb116mWSx9+0bCrclKTaUtp+6/4ZHX3PWS0rxyWzv1iy/etjLCwz6RjPktz2yx/vSzCz8+lz5db9s3SOzKmfJ5Y65PPSeNbGuta/La8d2urL/wAAXFN4cTzlxQ24VQQzAMAwwhWc3qtlwENBMAMAABgEwQwAAGAQBDMAAIBBEMwAAAAGQTADAAAYBMEMAABgEAQzAACAQRDMAAAABkEwAwAAGATBDAAAYBAEMwAAgEEQzAAAAAZBMAMAABgEwQwAAGAQBDMAAIBBEMwAAAAGQTC7IYcnb44fjnfHp4mylMPxeOPuTJ/TfTu33rH+VjyEcWHbpjEuwBgIZjeEYHY5vEilEcweLsYFGMPh8OLOvATqx9fjq1/SC7TiIN9f75imw84tua1gdnjy/PjqO9/4Dz+osh/McSY6d//oeVTe4qe3X4/3b9uWOzx+f7wP6/vu/fEnXT63tbePnfug6rdsjxyv2fdvkvVIh19M38ys4Tzl6vnHjPmL9Pza3ucm256lC1/N8/R8PWyfDqZPrk7Vr2h9/5j/i7JTcM4GxjBfMdv9ZMVBvrvuF8X5xeJW3U4w8yHDBIXHPmzIYObqEgFIP2/R0x7flmXep9+vg+BPj76aEHR31nakuKA2ha9lzNLz5jz96EOYe1P58U1XYLVO7YNk63L76hSefGg6bb/1ocwGvCmciWDmy5b6D2YsDh19L9lzXABsVw1mfvrykO9Kl3eu/hFOjvbEuXqYE2htuZLQvlfmJBwecrmnH80J/oWo17yTDFcJ9PpKfbCPpR+FOjeMS62spvfEuQ46t+b2Psr0YUMHMz8thCMXThJXsUp6w4fkQ5g4/tzVNNs308cLBjMdxPTzVlEwMwHmXhyXLU7pg2bbIK9aHcx2cvvu1L7DR8M+t/PYEDWV6XpSfAgrz+/Wp86ty/FjnPH8AuA8isHMnTjNu7MwTc7jy8xJNXPZPneQ15bL8fWZx3QS8s+XelwYFCfo+eSt5vPByD9flU3vwO3/y3VuG5etfQ/kelLlWnSCvkkPI5gF9sqV61jDx3XSqfuNXW9oj2yf6+Mlg5m4WuaeT21ZNrjpY0NIc8fp/Ogfl1P6oMlg5IJXCGAhmLl9eLqqZkKSm78xLNnxqQazaV3u/25+e6VtPV+LPccFwHblYJa4miRPhPZdvH2k3smXDvLScjm6Pv9i5YOSfR5Ck1zGzafClpUNbYlglqzzhHHZ0veg98Q5v97dLB/M5qsQYtrcx41lNb1jHcjgo6eFUOICWscVs9Q+3MpdLRPrklfPXB8vFMxS46L576O11+2vIr437fGP1mOq+ziSV6FCCLP7llmf/9cELxugpvVHwczMb9cX7cvN7SwHM1eXuFo3T7PtvMD5BcB51IOZuGKUE8KGfPFoOchTy+Xo+nwwW8LQlmAW/r884vYWg9nGcWkpy+k9cS6h5Fb1hak9bX2RSgaz+aPD/Dw5ej/voUNZWG9ioJvaYm0el4aPb13djcEsHINPzXFkA1nrMWl1H0dmHS6EmfFzQckN2RS0bPiyz6fzxDyPeX7OYJYKZaty264znl8AnEflo0w7LR1ONH1i9MvWX1BaT6i6fS5wieflq1viqph4Xlt3ts4TxqW1LCW1jUqm19wb9pCCmdnn5u9WmbpbP7br3EcCHcpSfDv6+rhlXFJjkqK/C5fj6pvCqr9qdt5gVmLrkn+J6cKYaccc2s4QzGqhLLBj0jJfsOe4ANiu/uV/e8IzL5LzYzr5+fnlYwk/wXxVyD6md24ty6Wsl4vbmgtRlg9x4RGvL75iZh9LebHODeOyte+BX779xJkOO7fkdoJZCB9xB5blXegQZa1XqEr7YI5ru1iXlzi23XztfbR6x8XKXS1btbPxu3dyTHx7/KN1nLb0ocQFILN+b9lntwazOZDNdS71+rpay5bA2GLvcQGwzRzMRneOk4YLbFOgCtPsSX/L978uoXcM4pP0LVpe5C5thBepnqtAl/IQXrwJIGmMCzCGbzuYuTrVo+M7GZfWOwbpsHNLvu1gNqKHMC5s2zTGBRjDzQQz9EuHnVtyvWAGAMA1EMwAAAAGQTADAAAYRFMwC3+B2PvXYQAAAGh30F/4dLe4UH8Jlgpm/l5CZqJ7xF8YLZX1uNSXUZdbHfDFVwAAcD1RMNvy5/ml8HRqsLpUMPM3trzrvqcTAADAnkQwW+6mPRc2XPnaEsz89OURXYmbrs4tj/aw5JftvGnr/HM5pk0EMwAAcEVzMHv11v+0SXKmDeErV+bD3jJNzuP/r++Un647pTeYhY8w7V3Y3boIZgAA4IqmYOYfFwlmqyti9uHDlLsTv7jBa6nuPcjf5nPrIpgBAIArEh9l2n/TV5t6w1eprPQ9tksHs/VvG3qtv2MIAACwp/WX/xNBaNdg5qalb70h1798vy1dd0rvR5mSaxdXzAAAwBVFwcxOcLfLmMORD1HRY7ratbXMrVR/nCnK/Pr948OLuG01BDMAAHDLuPM/AADAIAhmAAAAgyCYAQAADIJgBgAAMAiCGQAAwCCuFszCX2ambpsBAADwLXLBbHX7CnGT13M5ZzDTtwDZKvxkU+6ms0s5t9kAAACnm+5jtu3eX6PaI5j50GXG5fHye5p6Hv+TTnfc/wwAAOziULopqw44+vnTj2a5F+JqW7jBrKtTLufv4m+vji139LePONCUlvPP7fqXh7zatrrql6y7P4CGq2I6mB0em/pcIDNtIpgBAIAduI8y57vtizvwu8JqMIuXsc+X8LWEIBeKKnX7afnlfFm6Lf7/YrlU3TsGMznNrYtgBgAAdhB9+X8OaNN3zHTA0c9DEAvLS7au+7fPV/8PUuHJyi23viJmHz5onfPHz1PBzH+EKcaIYAYAAHaw+qtMH2qmwKMCjn5eCmZuXne1K77SFZUnwlNuudRVt3mZCwaz8Nz+QYCmP+4EAADosQ5m4iM/H3CWj//cR5eNwcyav4OW+CvPUnhKLefnT6/Pt9nX5YKT+w5bXPeeH2XG5aZdXDEDAAA7OLirTdEjDi/zx5vmcf/2fRSmasEs1C3nCQEreujvnyWWc9P1x5liOdnODy/Woa83mKWvjK0DGMEMAADsZXXFDAAAANdBMAMAABgEwQwAAGAQBDMAAIBBEMwAAAAG0RTMwl9Dlv4CEwAAAKdJ3C7DPuLbSowSzEr3PjsH/3uYpuOOGZPH6fkAAAD2MF8xu3To2eKSbfT3JzNhNNzxf/7R8vW8AAAAeygGs+Uu+vahyl7cHe8/Grbon/fHV+5XAZarar6+5RHdZFbdKDZeZlmPfO5/dUA9Er8okNN9g9kf7o7H78QNbO3vY4qgBgAAsLemK2bJ0OY+ArXTfACzPzYefnTcB7p0wPL/XwKSDEx6PbXnPXqDmfyh8qffmw6akPbK/EswAwAA53JaMPv4Jiqbg5m6IuYfU/ialpP1h592qgWxUhv3ZoPZ/aM37meZ7h89d9NsQCOYAQCAczlfMFO/f6mXk9NGDGbuo0z5HbPKj5kDAACc6jzBzE3zYUvW45ZTHymuP8pcyvz3ynQwa/84Uur9KNOtS/wlpv7OGQAAwN4qX/73ASt6TFfCSsHMLas/zhRX0Nyy8yMOS7aO8Lh/+37VJlmur7yV9AYzK75dRtwOAACAvc3BDAAAANdFMAMAABgEwQwAAGAQBDMAAIBBEMwAAAAGQTADAAAYBMEMAABgEAQzAACAQRDMAAAABkEwAwAAGATBDAAAYBAEMwAAgCH8evw/KSp3YuibZo8AAAAASUVORK5CYII="}}]);