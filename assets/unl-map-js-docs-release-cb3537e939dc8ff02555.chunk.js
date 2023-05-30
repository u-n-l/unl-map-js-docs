(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{KVAR:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(a("q1tI")),r=(a("yr+R"),a("cQZ0"),s(a("1wO5")));function s(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=i(e);if(t){var l=i(this).constructor;a=Reflect.construct(n,arguments,l)}else a=n.apply(this,arguments);return d(this,a)}}function d(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f={title:"Release notes",description:"Desribe the changes included in every new release of the library",contentType:"example",language:["JavaScript"],navOrder:6,layout:"page",hideFeedback:!0,products:["UNL Map JS"],headings:[{text:"0.1.5 / 30.05.2023",slug:"015--30052023",level:2},{text:"0.1.4 / 28.05.2023",slug:"014--28052023",level:2},{text:"0.1.3 / 23.05.2023",slug:"013--23052023",level:2},{text:"0.1.2 / 09.05.2023",slug:"012--09052023",level:2},{text:"0.1.1 / 03.05.2023",slug:"011--03052023",level:2},{text:"0.1.0 / 03.05.2023",slug:"010--03052023",level:2},{text:"0.0.6 / 20.04.2023",slug:"006--20042023",level:2},{text:"0.0.5 / 20.04.2023",slug:"005--20042023",level:2},{text:"0.0.3 / 14.10.2022",slug:"003--14102022",level:2},{text:"0.0.2 / 12.10.2022",slug:"002--12102022",level:2},{text:"0.0.1 / 14.07.2022",slug:"001--14072022",level:2}]},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(d,e);var t,a,n,s=p(d);function d(){return c(this,d),s.apply(this,arguments)}return t=d,(a=[{key:"render",value:function(){var e=this.props;return l.default.createElement(r.default,o({},e,{frontMatter:f}),l.default.createElement("div",null,l.default.createElement("h2",{id:"015--30052023",className:"anchor"},l.default.createElement("a",{href:"#015--30052023",className:"unprose color-blue-on-hover"},"0.1.5 / 30.05.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Icons fixes.")),l.default.createElement("h2",{id:"014--28052023",className:"anchor"},l.default.createElement("a",{href:"#014--28052023",className:"unprose color-blue-on-hover"},"0.1.4 / 28.05.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Added a new property that can be massed during the map intialisation called ",l.default.createElement("code",null,"togglePoisVisibilityControl"),". If true, this will enable a new control for switching between pois visibility. POIs can be visualised on the map starting with zoom 14 and it's only available in combination with UNL vectorial tiles: ",l.default.createElement("code",null,"rich"),", ",l.default.createElement("code",null,"default")," or ",l.default.createElement("code",null,"base"),".")),l.default.createElement("pre",{className:"language-js"},l.default.createElement("code",{className:"language-js"},l.default.createElement("span",{className:"token keyword"},"var")," map ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token keyword"},"new")," ",l.default.createElement("span",{className:"token class-name"},"UnlSdk",l.default.createElement("span",{className:"token punctuation"},"."),"Map"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},"{"),"\n","     ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"apiKey"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-API-KEY"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"vpmId"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-VPM-ID"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"togglePoisVisibilityControl"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token boolean"},"true"),l.default.createElement("span",{className:"token punctuation"},","),"\n","      ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},";"),"\n")),l.default.createElement("h2",{id:"013--23052023",className:"anchor"},l.default.createElement("a",{href:"#013--23052023",className:"unprose color-blue-on-hover"},"0.1.3 / 23.05.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Added a new map style option: 'rich';"),l.default.createElement("li",null,"Allow passing a 'tiles' parameter during sdk initialization. In combination with the ",l.default.createElement("code",null,"tilesSelectorControl")," it allows passing the options available for the map style. If the tiles parameter is not sent, by default, all the map style options will be present: 'rich', 'default', 'satellite', 'terrain', 'traffic', 'base'; Eg.")),l.default.createElement("pre",{className:"language-js"},l.default.createElement("code",{className:"language-js"},l.default.createElement("span",{className:"token keyword"},"var")," map ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token keyword"},"new")," ",l.default.createElement("span",{className:"token class-name"},"UnlSdk",l.default.createElement("span",{className:"token punctuation"},"."),"Map"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},"{"),"\n","     ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"apiKey"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-API-KEY"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"vpmId"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-VPM-ID"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"tilesSelectorControl"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token boolean"},"true"),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token comment"},"// tiles selector is enabled and 3 style options are present: rich, default vectorial and satellite."),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"tiles"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token punctuation"},"["),l.default.createElement("span",{className:"token string"},'"rich"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token string"},'"default"'),l.default.createElement("span",{className:"token punctuation"},",")," ",l.default.createElement("span",{className:"token string"},'"satellite"'),l.default.createElement("span",{className:"token punctuation"},"]"),"\n","      ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},";"),"\n")),l.default.createElement("ul",null,l.default.createElement("li",null,"Override the 'tiles' by the 'style' option. This is allowing developers to pass their own style during the map initialization and so any ",l.default.createElement("code",null,"tiles")," array or ",l.default.createElement("code",null,"tilesSelectionControl")," flag will be ignored:")),l.default.createElement("pre",{className:"language-js"},l.default.createElement("code",{className:"language-js"},l.default.createElement("span",{className:"token keyword"},"var")," map ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token keyword"},"new")," ",l.default.createElement("span",{className:"token class-name"},"UnlSdk",l.default.createElement("span",{className:"token punctuation"},"."),"Map"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},"{"),"\n","     ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"apiKey"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-API-KEY"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"vpmId"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-VPM-ID"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"style"),l.default.createElement("span",{className:"token operator"},":")," '",l.default.createElement("span",{className:"token constant"},"YOUR"),l.default.createElement("span",{className:"token operator"},"-"),l.default.createElement("span",{className:"token constant"},"OWN"),l.default.createElement("span",{className:"token operator"},"-"),l.default.createElement("span",{className:"token constant"},"MAP"),l.default.createElement("span",{className:"token operator"},"-"),l.default.createElement("span",{className:"token constant"},"STYLE"),'"',"\n","      ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},";"),"\n")),l.default.createElement("h2",{id:"012--09052023",className:"anchor"},l.default.createElement("a",{href:"#012--09052023",className:"unprose color-blue-on-hover"},"0.1.2 / 09.05.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Minor fixes.")),l.default.createElement("h2",{id:"011--03052023",className:"anchor"},l.default.createElement("a",{href:"#011--03052023",className:"unprose color-blue-on-hover"},"0.1.1 / 03.05.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Minor fixes.")),l.default.createElement("h2",{id:"010--03052023",className:"anchor"},l.default.createElement("a",{href:"#010--03052023",className:"unprose color-blue-on-hover"},"0.1.0 / 03.05.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Added a parameter named 'env' for switching between the 'sandbox' and 'prod' apis. The api key and vpm id provided should be generated on the same env. By default, the library is pointing to the prod environment. Eg.")),l.default.createElement("pre",{className:"language-js"},l.default.createElement("code",{className:"language-js"},l.default.createElement("span",{className:"token keyword"},"var")," map ",l.default.createElement("span",{className:"token operator"},"=")," ",l.default.createElement("span",{className:"token keyword"},"new")," ",l.default.createElement("span",{className:"token class-name"},"UnlSdk",l.default.createElement("span",{className:"token punctuation"},"."),"Map"),l.default.createElement("span",{className:"token punctuation"},"("),l.default.createElement("span",{className:"token punctuation"},"{"),"\n","     ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n","     ",l.default.createElement("span",{className:"token comment"},"// generated on the sandbox env of the UNL platform"),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"apiKey"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-API-KEY"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token comment"},"// generated on the sandbox env of the UNL platform"),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"vpmId"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token string"},'"YOUR-OWN-VPM-ID"'),l.default.createElement("span",{className:"token punctuation"},","),"\n","     ",l.default.createElement("span",{className:"token literal-property property"},"env"),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token maybe-class-name"},"UnlSdk"),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token property-access"},l.default.createElement("span",{className:"token maybe-class-name"},"Environment")),l.default.createElement("span",{className:"token punctuation"},"."),l.default.createElement("span",{className:"token constant"},"SANDBOX"),l.default.createElement("span",{className:"token punctuation"},","),"\n","      ",l.default.createElement("span",{className:"token spread operator"},"..."),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),l.default.createElement("span",{className:"token punctuation"},")"),l.default.createElement("span",{className:"token punctuation"},";"),"\n")),l.default.createElement("h2",{id:"006--20042023",className:"anchor"},l.default.createElement("a",{href:"#006--20042023",className:"unprose color-blue-on-hover"},"0.0.6 / 20.04.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Fixed UNL tiles URLs.")),l.default.createElement("h2",{id:"005--20042023",className:"anchor"},l.default.createElement("a",{href:"#005--20042023",className:"unprose color-blue-on-hover"},"0.0.5 / 20.04.2023")),l.default.createElement("ul",null,l.default.createElement("li",null,"Fixed the polyfill issue experienced with webpack.")),l.default.createElement("h2",{id:"003--14102022",className:"anchor"},l.default.createElement("a",{href:"#003--14102022",className:"unprose color-blue-on-hover"},"0.0.3 / 14.10.2022")),l.default.createElement("ul",null,l.default.createElement("li",null,"Minor bug fixes.")),l.default.createElement("h2",{id:"002--12102022",className:"anchor"},l.default.createElement("a",{href:"#002--12102022",className:"unprose color-blue-on-hover"},"0.0.2 / 12.10.2022")),l.default.createElement("ul",null,l.default.createElement("li",null,"Added the custom attribution control representing the tiles copyright on the map;"),l.default.createElement("li",null,"General bug fixes.")),l.default.createElement("h2",{id:"001--14072022",className:"anchor"},l.default.createElement("a",{href:"#001--14072022",className:"unprose color-blue-on-hover"},"0.0.1 / 14.07.2022")),l.default.createElement("ul",null,l.default.createElement("li",null,"Initial npm release.")),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("br",null)))}}])&&u(t.prototype,a),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),d}(l.default.PureComponent);t.default=E},QODI:function(e,t,a){var n=a("KVAR");n=n.default||n,e.exports={component:n,props:{frontMatter:{title:"Release notes",description:"Desribe the changes included in every new release of the library",contentType:"example",language:["JavaScript"],navOrder:6,layout:"page",hideFeedback:!0,products:["UNL Map JS"]}}}}}]);
//# sourceMappingURL=unl-map-js-docs-release-cb3537e939dc8ff02555.chunk.js.map