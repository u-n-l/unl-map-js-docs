(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"089X":function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(r("q1tI")),a=(r("yr+R"),r("cQZ0"),u(r("uLm5"))),i=u(r("ITxT")),c=u(r("1wO5"));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Update a feature in realtime",description:"Change an existing feature on your map in real-time by updating its data.",topics:["Sources"],thumbnail:"live-update-feature",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,r,n,u=d(y);function y(){return p(this,y),u.apply(this,arguments)}return t=y,(r=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,s({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Change an existing feature on your map in real-time by updating its data."),o.default.createElement(a.default,s({html:i.default},this.props))))}}])&&l(t.prototype,r),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.default.PureComponent);t.default=b},ITxT:function(e,t,r){"use strict";r.r(t),t.default='<div id="map"></div>\n\n<script src="https://d3js.org/d3.v3.min.js" charset="utf-8"><\/script>\n<script>\n  var map = new UnlSdk.Map({\n    container: "map",\n    apiKey: "YOUR-OWN-API-KEY",\n    vpmId: "YOUR-OWN-VPM-ID",\n    zoom: 0,\n  });\n\n  map.on("load", function () {\n    // We use D3 to fetch the JSON here so that we can parse and use it separately\n    // from GL JS\'s use in the added source. You can use any request method (library\n    // or otherwise) that you want.\n    d3.json(\n      "https://maplibre.org/maplibre-gl-js-docs/assets/hike.geojson",\n      function (err, data) {\n        if (err) throw err;\n\n        // save full coordinate list for later\n        var coordinates = data.features[0].geometry.coordinates;\n\n        // start by showing just the first coordinate\n        data.features[0].geometry.coordinates = [coordinates[0]];\n\n        // add it to the map\n        map.addSource("trace", { type: "geojson", data: data });\n        map.addLayer({\n          id: "trace",\n          type: "line",\n          source: "trace",\n          paint: {\n            "line-color": "yellow",\n            "line-opacity": 0.75,\n            "line-width": 5,\n          },\n        });\n\n        // setup the viewport\n        map.jumpTo({ center: coordinates[0], zoom: 14 });\n        map.setPitch(30);\n\n        // on a regular basis, add more coordinates from the saved list and update the map\n        var i = 0;\n        var timer = window.setInterval(function () {\n          if (i < coordinates.length) {\n            data.features[0].geometry.coordinates.push(coordinates[i]);\n            map.getSource("trace").setData(data);\n            map.panTo(coordinates[i]);\n            i++;\n          } else {\n            window.clearInterval(timer);\n          }\n        }, 10);\n      }\n    );\n  });\n<\/script>\n'},M4Oy:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((n=r("fG8n"))&&n.__esModule?n:{default:n}).default;t.default=o},tgAu:function(e,t,r){var n=r("089X");n=n.default||n,e.exports={component:n,props:{frontMatter:{title:"Update a feature in realtime",description:"Change an existing feature on your map in real-time by updating its data.",topics:["Sources"],thumbnail:"live-update-feature",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './live-update-feature.html';"]}}}},uLm5:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return P}));var n=r("q1tI"),o=r.n(n),a=r("mOgX"),i=r("v8ZZ"),c=r("irdr"),u=r.n(c),s=r("M4Oy"),p=r.n(s),l=r("umIL"),f=r("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(s,e);var t,r,n,c=v(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).state={unsupported:!1},t}return t=s,(r=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js(),"'><\/script>\n<link href='").concat(a.default.css(),'\' rel=\'stylesheet\' />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n    ').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,r=e.location,n=this.displayHTML(t),a=f.extractor(n);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(t),highlighter:function(){return l.highlightHtml},edit:{frontMatter:m(m({},this.props.frontMatter),{},{pathname:r.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,r=t.frontMatter,n=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(i.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:n},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(r.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&h(t.prototype,r),n&&h(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.a.Component);w(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,r){"use strict";function n(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,r=new Blob([""],{type:"text/javascript"}),n=URL.createObjectURL(r);try{t=new Worker(n),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(n),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var r=t.getImageData(0,0,1,1);return r&&r.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){var t,r=function(e){var t=document.createElement("canvas"),r=Object.create(n.webGLContextAttributes);return r.failIfMajorPerformanceCaveat=e,t.getContext("webgl",r)||t.getContext("experimental-webgl",r)}(e);if(!r)return!1;try{t=r.createShader(r.VERTEX_SHADER)}catch(e){return!1}if(!t||r.isContextLost())return!1;return r.shaderSource(t,"void main() {}"),r.compileShader(t),!0===r.getShaderParameter(t,r.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=n,t.notSupportedReason=o;var a={};n.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",r={js:[],css:[]},n=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,u=e.match(i),s="".concat(e.replace(a,"")),p=e.match(a)[1];u&&(u.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),s="".concat(s.replace(i,"")));if(e.match(n)){var l=e.match(n).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));r.js=r.js.concat(l),s="".concat(s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));r.css=r.css.concat(f),s="".concat(s.replace(/<link[\s\S]*?>/g,""))}s.match(c)&&(s=s.match(c)[1]);return{html:s,css:t,js:p,resources:r}}}}]);
//# sourceMappingURL=unl-map-js-docs-example-live-update-feature-44e73aae6dac269c3be3.chunk.js.map