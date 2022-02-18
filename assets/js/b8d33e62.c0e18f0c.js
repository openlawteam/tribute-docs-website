"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8366],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2354:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"configuration",title:"Configuration"},l=void 0,u={unversionedId:"tutorial/dao/configuration",id:"tutorial/dao/configuration",isDocsHomePage:!1,title:"Configuration",description:"\u26a1\ufe0f TributeDAO Framework provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs.",source:"@site/docs/tutorial/dao/Configuration.md",sourceDirName:"tutorial/dao",slug:"/tutorial/dao/configuration",permalink:"/docs/tutorial/dao/configuration",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/tutorial/dao/Configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Configuration"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/tutorial/dao/installation"},next:{title:"Deployment",permalink:"/docs/tutorial/dao/deployment"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuring the project",id:"configuring-the-project",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]},{value:"Problems?",id:"problems",children:[]}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u26a1\ufe0f ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts"},"TributeDAO Framework"))," provides you a set of modular and extensible smart contracts to launch your DAO with minimal costs."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/tree/release-v2.4.0"},"Tribute Contracts"))," version ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openlawteam/tribute-contracts/tree/release-v2.4.0"},"release-v2.4.0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://infura.io/product/ethereum"},"Infura Ethereum API KEY")),": sign up for free, verify your email, create an ethereum project to get your API Key (also known as ",(0,o.kt)("inlineCode",{parentName:"li"},"Project Id"),"). We will use that to deploy the contracts to the Rinkeby network. Checkout this ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.infura.io/getting-started-with-infura-28e41844cc89/"},"Infura Blog Post"))," for more info on that.")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you are on the branch ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-contracts/tree/release-v2.4.0"},"release-v2.4.0")," which is the version that contains the contracts integrated with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openlawteam/tribute-ui"},"TributeUI"),"."))),(0,o.kt)("h2",{id:"configuring-the-project"},"Configuring the project"),(0,o.kt)("p",null,"\u2699\ufe0f Now that you have the ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-contracts")," project prepared in your local environment, it is time to set up the DAO configs."),(0,o.kt)("p",null,"In the root of ",(0,o.kt)("inlineCode",{parentName:"p"},"tribute-contracts")," folder we will create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file. This file will contain all the environment variables required by the deployment script. Most of these variables are configurations that are applied to the DAO contracts during the deployment."),(0,o.kt)("p",null,"In this section we will be covering the configurations to deploy a Tribute DAO to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network."),(0,o.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,o.kt)("p",null,"The first step is to create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in the root of the ",(0,o.kt)("em",{parentName:"p"},"tribute-contracts")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"touch .env\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://github.com/openlawteam/tribute-contracts/blob/master/.sample.env"},"Here is a sample .env file"))," which you can use to set the environment variables."),(0,o.kt)("p",null,"Please use the following template, and fill out each environment variable with the proper values as indicated in the comments below:"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("strong",{parentName:"p"},"DAO_OWNER_ADDR")," env var needs to match the first ethereum address derived from your ",(0,o.kt)("strong",{parentName:"p"},"WALLET_MNEMONIC"),". With a seed phrase you can create multiple addresses, but in this case we need the address of the first account of the wallet to be used as DAO owner."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# tribute-contracts/.env\n\n######################## Tribute Contracts env vars ########################\n\n# Set the name of your DAO. Make sure the DAO name is unique.\nDAO_NAME=My Tribute DAO xyz...\n\n# The public ethereum address that belongs to the Owner of the DAO,\n# in this case, it is your public ethereum address on Rinkeby network.\n# Make sure you have some ETH, otherwise the deployment will fail.\n# It needs to be the address of the first account you have in metamask accounts,\n# otherwise it won\'t work.\nDAO_OWNER_ADDR=0x...\n\n# The name of the ERC20 token of your DAO.\nERC20_TOKEN_NAME=My First DAO Token\n\n# The symbol of your ERC20 Token that will be used to control the\n# DAO units that each member holds.\nERC20_TOKEN_SYMBOL=TDAO\n\n# Number of decimals to display the token units in MM. We usually\n# set 0 because the DAO units are managed in WEI, and to be able\n# to see that in the MM wallet you need to remove the precision.\nERC20_TOKEN_DECIMALS=0\n\n# The Ethereum Node URL to connect the Ethereum network. You can follow\n# these steps to get your ProjectId/API Key from Infura:\n# https://blog.infura.io/getting-started-with-infura-28e41844cc89/\n# Set your own Infura API or Alchemy API key\nETH_NODE_URL=https://rinkeby.infura.io/v3/your-infura-api-key\n#ETH_NODE_URL=https://eth-rinkeby.alchemyapi.io/v2/your-alchemy-api-key\n\n# The 12 word "secret recovery phrase" for the ethereum address\n# referenced in DAO_OWNER_ADDR above. This can be found in your wallet.\n# It will be used to create the HD wallet and sign transactions on your behalf.\nWALLET_MNEMONIC=...\n')),(0,o.kt)("p",null,"\u26a1\ufe0f Alright! You have configured the project to deploy the contracts to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://rinkeby.etherscan.io/"},"Rinkeby"))," test network. Let's move the next section to finally publish your DAO to the world \ud83c\udf0e!"),(0,o.kt)("h2",{id:"problems"},"Problems?"),(0,o.kt)("p",null,"Ask for help on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://discord.gg/xXMA2DYqNf"},"Discord"))," or on ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/openlawteam/tribute-contracts/discussions/new"},"GitHub Discussions")),"."))}m.isMDXComponent=!0}}]);