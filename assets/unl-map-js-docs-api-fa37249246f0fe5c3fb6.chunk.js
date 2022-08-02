(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1Lxu":function(e,t,n){var r=n("U7xE");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"API Reference",description:"The UNL Map JS API documentation to render interactive maps from vector tiles and UNL styles.",contentType:"API",navOrder:3,order:3,layout:"page",hideFeedback:!0,language:["JavaScript"],products:["UNL Map JS"],prependJs:["import Quickstart from '../../components/quickstart';","import Example from '../../components/example';","import SimpleMapHtml from '../example/simple-map.html';","import Copyable from '../../components/copyable';","import urls from '../../components/urls';"],overviewHeader:{title:"UNL Map JS",features:["Custom map styles","Fast vector maps"],image:"simple-map"}}}}},"2mI2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.highlightJsx=function(e){return e?o.default.highlight(e,o.default.languages.jsx):""};var r,o=(r=n("wZee"))&&r.__esModule?r:{default:r};n("CjHp")},CjHp:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,r=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(e,t){return e=e.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return r})).replace(/<SPREAD>/g,(function(){return o})),RegExp(e,t)}o=a(o).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var i=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(i).join(""):""},l=function(t){for(var n=[],r=0;r<t.length;r++){var o=t[r],a=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?n.length>0&&n[n.length-1].tagName===i(o.content[0].content[1])&&n.pop():"/>"===o.content[o.content.length-1].content||n.push({tagName:i(o.content[0].content[1]),openedBraces:0}):n.length>0&&"punctuation"===o.type&&"{"===o.content?n[n.length-1].openedBraces++:n.length>0&&n[n.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?n[n.length-1].openedBraces--:a=!0),(a||"string"==typeof o)&&n.length>0&&0===n[n.length-1].openedBraces){var u=i(o);r<t.length-1&&("string"==typeof t[r+1]||"plain-text"===t[r+1].type)&&(u+=i(t[r+1]),t.splice(r+1,1)),r>0&&("string"==typeof t[r-1]||"plain-text"===t[r-1].type)&&(u=i(t[r-1])+u,t.splice(r-1,1),r--),t[r]=new e.Token("plain-text",u,null,u)}o.content&&"string"!=typeof o.content&&l(o.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||l(e.tokens)}))}(Prism)},JXLq:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("kZPp"))&&r.__esModule?r:{default:r}).default;t.default=o},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},U7xE:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("q1tI")),a=(n("yr+R"),n("cQZ0"),i(n("hKBx")),i(n("uLm5")),i(n("Zri4")),i(n("wWV/")),i(n("mOgX")),i(n("1wO5")));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={title:"API Reference",description:"The UNL Map JS API documentation to render interactive maps from vector tiles and UNL styles.",contentType:"API",navOrder:3,order:3,layout:"page",hideFeedback:!0,language:["JavaScript"],products:["UNL Map JS"],overviewHeader:{title:"UNL Map JS",features:["Custom map styles","Fast vector maps"],image:"simple-map"},headings:[{text:"Reading this documentation",slug:"reading-this-documentation",level:2}]},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(f,e);var t,n,r,i=p(f);function f(){return u(this,f),i.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(a.default,l({},e,{frontMatter:m}),o.default.createElement("div",null,o.default.createElement("p",null,"UNL Map JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and UNL styles"),o.default.createElement("h2",{id:"reading-this-documentation",className:"anchor"},o.default.createElement("a",{href:"#reading-this-documentation",className:"unprose color-blue-on-hover"},"Reading this documentation")),o.default.createElement("p",null,"This documentation is divided into several sections:"),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/map/"},o.default.createElement("strong",null,"Map")),". The ",o.default.createElement("code",null,"Map")," object is the map on your page. It lets you access methods and properties for interacting with the map's style and layers, respond to events, and manipulate the user's perspective with the camera."),o.default.createElement("li",null,o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/properties/"},o.default.createElement("strong",null,"Properties and options")),". This section describes UNL Map JS's global properties and options that you might want to access while initializing your map or accessing information about its status."),o.default.createElement("li",null,o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/markers/"},o.default.createElement("strong",null,"Markers and controls")),". This section describes the user interface elements that you can add to your map. The items in this section exist outside of the map's ",o.default.createElement("code",null,"canvas")," element."),o.default.createElement("li",null,o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/geography/"},o.default.createElement("strong",null,"Geography and geometry")),". This section includes general utilities and types that relate to working with and manipulating geographic information or geometries."),o.default.createElement("li",null,o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/handlers/"},o.default.createElement("strong",null,"User interaction handlers")),". The items in this section relate to the ways in which the map responds to user input."),o.default.createElement("li",null,o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/sources/"},o.default.createElement("strong",null,"Sources")),". This section describes the source types UNL Map JS can handle."),o.default.createElement("li",null,o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/events/"},o.default.createElement("strong",null,"Events")),". This section describes the different types of events that UNL Map JS can raise.")),o.default.createElement("p",null,"Each section describes classes or objects as well as their ",o.default.createElement("strong",null,"properties"),", ",o.default.createElement("strong",null,"parameters"),", ",o.default.createElement("strong",null,"instance members"),", and associated ",o.default.createElement("strong",null,"events"),". Many sections also include inline code examples and related resources.")))}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),f}(o.default.PureComponent);t.default=y},WdDB:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("Y4Yu"))&&r.__esModule?r:{default:r}).default;t.default=o},Y4Yu:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("q1tI")),o=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(){return l(this,t),c(this,s(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.text,n=e.id,o=e.aside,a=e.optional,i=e.themeLegend,l="inline-block ".concat(i);return r.default.createElement("div",null,r.default.createElement("legend",{htmlFor:n,className:l},t," ",a&&r.default.createElement("span",{className:"txt-normal"},"(optional)")),o&&r.default.createElement("span",{className:"inline-block ml12"},o))}}])&&u(n.prototype,o),a&&u(n,a),t}(r.default.PureComponent);t.default=d,f(d,"propTypes",{text:o.default.string.isRequired,id:o.default.string.isRequired,aside:o.default.node,optional:o.default.bool,themeLegend:o.default.string}),f(d,"defaultProps",{themeLegend:"txt-s txt-bold mb6"})},Zri4:function(e,t,n){"use strict";n.r(t),t.default='<div id="map"></div>\n<script>\n  var map = new UnlSdk.Map({\n    container: "map", // container id\n    center: [0, 0], // starting position [lng, lat]\n    zoom: 1, // starting zoom\n    apiKey: "YOUR-OWN-API-KEY", // api key\n    vpmId: "YOUR-OWN-VPM-ID", // vpm id\n  });\n<\/script>\n'},hKBx:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("mOgX"),i=n("wWV/"),l=n("JXLq"),u=n.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,r,l=f(c);function c(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),t=l.call(this,e),n=m(t),o="{\n    container: 'map',\n    style: 'https://demotiles.u-n-l.github.io/style.json', // stylesheet location\n    center: [-74.5, 40], // starting position [lng, lat]\n    zoom: 9 // starting zoom\n}",(r="mapOptions")in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t.state={selectedMethod:"cdn-select"},t}return t=c,(n=[{key:"renderCdn",value:function(){var e="\n<div id='map' style='width: 400px; height: 300px;'></div>\n<script>\nvar map = new maplibregl.Map(".concat(this.mapOptions,");\n<\/script>");return o.a.createElement("div",{id:"quickstart-cdn"},o.a.createElement("p",null,"Include the JavaScript and CSS files in the ",o.a.createElement("code",null,"<head>")," ","of your HTML file."),o.a.createElement(i.default,{lang:"markup"},"\n<script src='".concat(a.default.js(),"'><\/script>\n<link href='").concat(a.default.css(),"' rel='stylesheet' />\n")),o.a.createElement("p",null,"Include the following code in the ",o.a.createElement("code",null,"<body>")," of your HTML file."),o.a.createElement(i.default,{lang:"markup"},e))}},{key:"renderBundler",value:function(){var e="\nimport maplibregl from 'maplibre-gl'; // or \"const maplibregl = require('maplibre-gl');\"\n\nconst map = new maplibregl.Map(".concat(this.mapOptions,");");return o.a.createElement("div",{id:"quickstart-bundler"},o.a.createElement("p",null,"Install the npm package."),o.a.createElement(i.default,{lang:"markup"},"\nnpm install --save maplibre-gl\n"),o.a.createElement("p",null,"Include the CSS file in the ",o.a.createElement("code",null,"<head>")," of your HTML file."),o.a.createElement(i.default,{lang:"markup"},"\n<link href='".concat(a.default.css(),"' rel='stylesheet' />\n")),o.a.createElement("p",null,"Include the following code in the ",o.a.createElement("code",null,"<body>")," of your HTML file."),o.a.createElement(i.default,{lang:"javascript"},e))}},{key:"renderContents",value:function(e){return"cdn-select"===e?this.renderCdn():"bundler-select"===e?this.renderBundler():void 0}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(u.a,{id:"select-quickstart",themeToggleGroup:"bg-blue py3 px3 my12",themeToggle:"txt-s py3 toggle--white toggle--active-blue",onChange:function(t){e.setState({selectedMethod:t})},value:this.state.selectedMethod,options:[{label:"CDN",value:"cdn-select"},{label:"Module bundler",value:"bundler-select"}]}),this.renderContents(this.state.selectedMethod))}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component);t.default=h},kZPp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("q1tI")),o=u(n("17x9")),a=u(n("1Q8+")),i=u(n("WdDB")),l=u(n("iKu0"));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?h(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return b(h(h(n=d(this,(e=m(t)).call.apply(e,[this].concat(o))))),"onChange",(function(e){return n.props.onChange(e.target.value,n.props.id)})),n}var n,o,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.value,u=t.legend,c=t.options,p=t.optional,f=t.aside,d=t.autoFocus,m=t.validationError,y=t.themeToggleGroup,h=t.themeToggleContainer,b=t.themeToggle,g=t.themeControlWrapper,v=t.themeLegend,O={id:n,className:"toggle-group round-full ".concat(y),role:"radiogroup","aria-required":!p,"data-test":"".concat(n,"-input")};return m&&(O["aria-invalid"]=!0),r.default.createElement(l.default,{themeControlWrapper:g,id:n,validationError:m},r.default.createElement("fieldset",null,u&&r.default.createElement(i.default,{text:u,id:n,aside:f,optional:p,themeLegend:v}),r.default.createElement("div",O,c.map((function(t){var i=(0,a.default)(t,["value","label"]);return r.default.createElement("label",{key:t.value,className:"toggle-container ".concat(h)},r.default.createElement("input",s({value:t.value,checked:t.value===o,autoFocus:d&&t.value===o,onChange:e.onChange,name:n,type:"radio"},i)),r.default.createElement("div",{className:"".concat(b," toggle")},t.label))})))))}}])&&f(n.prototype,o),u&&f(n,u),t}(r.default.Component);t.default=g,b(g,"propTypes",{id:o.default.string.isRequired,onChange:o.default.func.isRequired,options:o.default.arrayOf(o.default.shape({label:o.default.node.isRequired,value:o.default.string.isRequired})).isRequired,legend:o.default.string,value:o.default.string,optional:o.default.bool,aside:o.default.node,autoFocus:o.default.bool,validationError:o.default.node,themeToggleGroup:o.default.string,themeToggleContainer:o.default.string,themeToggle:o.default.string,themeControlWrapper:o.default.string,themeLegend:o.default.string}),b(g,"defaultProps",{value:"",optional:!1,autoFocus:!1,themeToggleGroup:"border border--2 border--blue bg-blue",themeToggleContainer:"",themeToggle:"txt-s py3 toggle--white toggle--active-blue"})},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),a=n("mOgX"),i=n("v8ZZ"),l=n("irdr"),u=n.n(l),c=n("M4Oy"),s=n.n(c),p=n("umIL"),f=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',E="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(c,e);var t,n,r,l=g(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={unsupported:!1},t}return t=c,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n').concat(E,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js(),"'><\/script>\n<link href='").concat(a.default.css(),'\' rel=\'stylesheet\' />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n    ').concat(E,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(t),highlighter:function(){return p.highlightHtml},edit:{frontMatter:y(y({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(s.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(i.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component);w(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},"wWV/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n("q1tI"),o=n.n(r),a=n("irdr"),i=n.n(a),l=n("umIL"),u=n("2mI2");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(c,e);var t,n,r,a=d(c);function c(){return s(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e={html:function(){return l.highlightHtml},markup:function(){return l.highlightHtml},javascript:function(){return u.highlightJsx}};return o.a.createElement(i.a,{maxHeight:300,code:this.props.children,highlighter:e[this.props.lang]})}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.a.Component)},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,l=/<body[\s\S]*?>((.|\n)*)<\/body>/,u=e.match(i),c="".concat(e.replace(a,"")),s=e.match(a)[1];u&&(u.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),c="".concat(c.replace(i,"")));if(e.match(r)){var p=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),c="".concat(c.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),c="".concat(c.replace(/<link[\s\S]*?>/g,""))}c.match(l)&&(c=c.match(l)[1]);return{html:c,css:t,js:s,resources:n}}}}]);
//# sourceMappingURL=unl-map-js-docs-api-fa37249246f0fe5c3fb6.chunk.js.map