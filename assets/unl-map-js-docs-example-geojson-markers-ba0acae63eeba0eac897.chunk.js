(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{F11o:function(e,t,n){var r=n("Qkz6");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Draw GeoJSON points",description:"Draw points from a GeoJSON collection to a map.",topics:["Layers"],thumbnail:"geojson-markers",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './geojson-markers.html';"]}}}},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},Qkz6:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n("q1tI")),a=(n("yr+R"),n("cQZ0"),p(n("uLm5"))),i=p(n("dxV6")),c=p(n("1wO5"));function p(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={title:"Draw GeoJSON points",description:"Draw points from a GeoJSON collection to a map.",topics:["Layers"],thumbnail:"geojson-markers",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(d,e);var t,n,r,p=y(d);function d(){return u(this,d),p.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,s({},e,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Draw points from a GeoJSON collection to a map."),o.default.createElement(a.default,s({html:i.default},this.props))))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(o.default.PureComponent);t.default=h},dxV6:function(e,t,n){"use strict";n.r(t),t.default='<div id="map"></div>\n<script>\n  var map = new UnlSdk.Map({\n    container: "map",\n    apiKey: "YOUR-OWN-API-KEY",\n    vpmId: "YOUR-OWN-VPM-ID",\n    center: [0, 0],\n    zoom: 1,\n  });\n\n  map.on("load", function () {\n    // Add an image to use as a custom marker\n    map.loadImage(\n      "https://u-n-l.github.io/unl-map-js-docs/assets/osgeo-logo.png",\n      function (error, image) {\n        if (error) throw error;\n        map.addImage("custom-marker", image);\n        // Add a GeoJSON source with 15 points\n        map.addSource("conferences", {\n          type: "geojson",\n          data: {\n            type: "FeatureCollection",\n            features: [\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [100.4933, 13.7551],\n                },\n                properties: { year: "2004" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [6.6523, 46.5535],\n                },\n                properties: { year: "2006" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [-123.3596, 48.4268],\n                },\n                properties: { year: "2007" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [18.4264, -33.9224],\n                },\n                properties: { year: "2008" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [151.195, -33.8552],\n                },\n                properties: { year: "2009" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [2.1404, 41.3925],\n                },\n                properties: { year: "2010" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [-104.8548, 39.7644],\n                },\n                properties: { year: "2011" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [-1.1665, 52.9539],\n                },\n                properties: { year: "2013" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [-122.6544, 45.5428],\n                },\n                properties: { year: "2014" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [126.974, 37.5651],\n                },\n                properties: { year: "2015" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [7.1112, 50.7255],\n                },\n                properties: { year: "2016" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [-71.0314, 42.3539],\n                },\n                properties: { year: "2017" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [39.2794, -6.8173],\n                },\n                properties: { year: "2018" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [26.0961, 44.4379],\n                },\n                properties: { year: "2019" },\n              },\n              {\n                type: "Feature",\n                geometry: {\n                  type: "Point",\n                  coordinates: [-114.0879, 51.0279],\n                },\n                properties: { year: "2020" },\n              },\n            ],\n          },\n        });\n\n        // Add a symbol layer\n        map.addLayer({\n          id: "conferences",\n          type: "symbol",\n          source: "conferences",\n          layout: {\n            "icon-image": "custom-marker",\n            // get the year from the source\'s "year" property\n            "text-field": ["get", "year"],\n            "text-font": ["Fira GO Regular"],\n            "text-offset": [0, 1.25],\n            "text-anchor": "top",\n          },\n        });\n      }\n    );\n  });\n<\/script>\n'},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n("q1tI"),o=n.n(r),a=n("mOgX"),i=n("v8ZZ"),c=n("irdr"),p=n.n(c),s=n("M4Oy"),u=n.n(s),l=n("umIL"),f=n("wdKx");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',P="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(s,e);var t,n,r,c=g(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).state={unsupported:!1},t}return t=s,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js(),"'><\/script>\n<link href='").concat(a.default.css(),'\' rel=\'stylesheet\' />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n    ').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(p.a,{code:this.displayHTML(t),highlighter:function(){return l.highlightHtml},edit:{frontMatter:m(m({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(i.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(o.a.Component);w(S,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,p=e.match(i),s="".concat(e.replace(a,"")),u=e.match(a)[1];p&&(p.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),s="".concat(s.replace(i,"")));if(e.match(r)){var l=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),s="".concat(s.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),s="".concat(s.replace(/<link[\s\S]*?>/g,""))}s.match(c)&&(s=s.match(c)[1]);return{html:s,css:t,js:u,resources:n}}}}]);
//# sourceMappingURL=unl-map-js-docs-example-geojson-markers-ba0acae63eeba0eac897.chunk.js.map