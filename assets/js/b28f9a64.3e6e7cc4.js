"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6036],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6377:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"deployment",title:"Deployment"},l=void 0,c={unversionedId:"tutorial/dao/deployment",id:"tutorial/dao/deployment",isDocsHomePage:!1,title:"Deployment",description:"\u26a1\ufe0f TributeDAO Framework provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs.",source:"@site/docs/tutorial/dao/Deployment.md",sourceDirName:"tutorial/dao",slug:"/tutorial/dao/deployment",permalink:"/docs/tutorial/dao/deployment",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/tutorial/dao/Deployment.md",tags:[],version:"current",frontMatter:{id:"deployment",title:"Deployment"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/tutorial/dao/configuration"},next:{title:"Tribute UI",permalink:"/docs/tutorial/dao/interacting"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Deploying your DAO",id:"deploying-your-dao",children:[]},{value:"Problems?",id:"problems",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u26a1\ufe0f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts"},"TributeDAO Framework"))," provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/tree/release-v2.3.3"},"Tribute Contracts"))," version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/tree/release-v2.3.3"},"release-v2.3.3"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u2699\ufe0f All the environment variables must be set in the ",(0,o.kt)("em",{parentName:"p"},".env")," file as indicated in the previous section.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\ud83d\udcb2 You have ETH in your DAO Owner account (2 ETH should be more than enough)."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you are on the branch ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/tree/release-v2.3.3"},"release-v2.3.3")," which is the version that contains the contracts integrated with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-ui"},"TributeUI"),"."))),(0,o.kt)("h2",{id:"deploying-your-dao"},"Deploying your DAO"),(0,o.kt)("p",null,"Execute the following command from the root of ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-contracts")," folder to deploy all the contracts to Rinkeby:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy:rinkeby\n")),(0,o.kt)("p",null,"\ud83c\udf7a Sit back and have some drink while the deployment script is executed. It may take from 10 to 20 minutes to create all the smart contracts."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The deployment is slow mainly because we publish all the smart contracts at once, even the ones that are not in use by the DAO or are just test contracts. We certainly don't do that for Mainnet deployments, but we are constantly working to improve the developer experience, and minimize the gas costs."))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"enabled: false")," to the contract configuration found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-contracts/configs/contracts.config.ts")," file, and that will remove the contract from the deployment. Be mindful on which contracts you are disabling, otherwise your DAO might not be functional."))),(0,o.kt)("p",null,"At the end of the deployment process you should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"...\n************************************************\nDaoOwner: 0x...\nDaoRegistry: 0x...\nNFTCollectionFactory: 0x...\nBankFactory: 0x...\n...\n************************************************\n\nDeployed contracts: ~/Development/tribute-contracts/build/contracts-rinkeby-YYYY-MM-DDThh:mm:ss.ZZZ.json\n\nDeployment completed at: YYYY-MM-DDThh:mm:ss.ZZZ\n\n- Saving migration to chain.\n   > Saving migration to chain.\n   > Saving artifacts\n   -------------------------------------\n   > Total cost:     0.062332692391045646 ETH\n")),(0,o.kt)("p",null,"\u26a1\ufe0f Awesome!! You have deployed your DAO to the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network, and now it is time to interact with it using our dApp called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-ui"},"Tribute UI")),". Checkout the next section to dive into that."),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.gg/xXMA2DYqNf"},"Discord"))," or on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/discussions/new"},"GitHub Discussions")),"."))}u.isMDXComponent=!0}}]);