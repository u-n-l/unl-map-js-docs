(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4peX":function(e,t,r){var n=r("Usb+");n=n.default||n,e.exports={component:n,props:{frontMatter:{title:"Extrude polygons for 3D indoor mapping",description:"Create a 3D indoor map with the fill-extrude-height paint property.",topics:["Layers"],thumbnail:"3d-extrusion-floorplan",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './3d-extrusion-floorplan.html';"]}}}},M4Oy:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((n=r("fG8n"))&&n.__esModule?n:{default:n}).default;t.default=o},"Usb+":function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(r("q1tI")),i=(r("yr+R"),r("cQZ0"),s(r("uLm5"))),a=s(r("rlog")),c=s(r("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={title:"Extrude polygons for 3D indoor mapping",description:"Create a 3D indoor map with the fill-extrude-height paint property.",topics:["Layers"],thumbnail:"3d-extrusion-floorplan",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,r,n,s=d(y);function y(){return l(this,y),s.apply(this,arguments)}return t=y,(r=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,u({},e,{frontMatter:m}),o.default.createElement("div",null,o.default.createElement("p",null,"Create a 3D indoor map with the ",o.default.createElement("a",{href:"https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#paint-fill-extrusion-fill-extrusion-height"},o.default.createElement("code",null,"fill-extrude-height"))," paint property."),o.default.createElement(i.default,u({html:a.default},this.props))))}}])&&p(t.prototype,r),n&&p(t,n),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.default.PureComponent);t.default=b},mOgX:function(e,t,r){"use strict";r.r(t);var n=r("f4rJ");r("yr+R");function o(e,t){return t&&t.local,"https://unpkg.com/maplibre-gl@".concat(n.a,"/dist/maplibre-gl.").concat(e)}t.default={js:function(e){return o("js",e)},css:function(e){return o("css",e)}}},rlog:function(e,t,r){"use strict";r.r(t),t.default='<div id="map"></div>\n<script>\n    var map = new maplibregl.Map({\n        container: \'map\',\n        style: {\n            "id": "raster",\n            "version": 8,\n            "name": "Raster tiles",\n            "center": [0, 0],\n            "zoom": 0,\n            "sources": {\n                "raster-tiles": {\n                    "type": "raster",\n                    "tiles": [\n                        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",\n                    ],\n                    "tileSize": 256,\n                    "minzoom": 0,\n                    "maxzoom": 19\n                }\n            },\n            "layers": [{\n                "id": "background",\n                "type": "background",\n                "paint": {\n                    "background-color": "#e0dfdf"\n                }\n            }, {\n                "id": "simple-tiles",\n                "type": "raster",\n                "source": "raster-tiles"\n            }]\n        },\n        center: [-87.61694, 41.86625],\n        zoom: 15.99,\n        pitch: 40,\n        bearing: 20,\n        antialias: true\n    });\n\n    map.on(\'load\', function() {\n        map.addSource(\'floorplan\', {\n            // GeoJSON Data source used in vector tiles, documented at\n            // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d\n            \'type\': \'geojson\',\n            \'data\': \'https://maplibre.org/maplibre-gl-js-docs/assets/indoor-3d-map.geojson\'\n        });\n        map.addLayer({\n            \'id\': \'room-extrusion\',\n            \'type\': \'fill-extrusion\',\n            \'source\': \'floorplan\',\n            \'paint\': {\n                // See the MapLibre Style Specification for details on data expressions.\n                // https://maplibre.org/maplibre-gl-js-docs/style-spec/expressions/\n\n                // Get the fill-extrusion-color from the source \'color\' property.\n                \'fill-extrusion-color\': [\'get\', \'color\'],\n\n                // Get fill-extrusion-height from the source \'height\' property.\n                \'fill-extrusion-height\': [\'get\', \'height\'],\n\n                // Get fill-extrusion-base from the source \'base_height\' property.\n                \'fill-extrusion-base\': [\'get\', \'base_height\'],\n\n                // Make extrusions slightly opaque for see through indoor walls.\n                \'fill-extrusion-opacity\': 0.5\n            }\n        });\n    });\n<\/script>'},uLm5:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var n=r("q1tI"),o=r.n(n),i=r("mOgX"),a=r("v8ZZ"),c=r("irdr"),s=r.n(c),u=r("M4Oy"),l=r.n(u),p=r("umIL"),f=r("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O(e);if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v(this,r)}}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',x="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(u,e);var t,r,n,c=g(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=c.call(this,e)).state={unsupported:!1},t}return t=u,(r=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<style>\n').concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(i.default.js({local:!0}),"'><\/script>\n<link href='").concat(i.default.css({local:!0}),"' rel='stylesheet' />\n<style>\n    ").concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,r=e.location,n=this.displayHTML(t),i=f.extractor(n);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(s.a,{code:this.displayHTML(t),highlighter:function(){return p.highlightHtml},edit:{frontMatter:h(h({},this.props.frontMatter),{},{pathname:r.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,r=t.frontMatter,n=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(l.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(a.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:n},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(r.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(a.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&m(t.prototype,r),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.a.Component);w(S,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,r){"use strict";function n(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,r=new Blob([""],{type:"text/javascript"}),n=URL.createObjectURL(r);try{t=new Worker(n),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(n),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var r=t.getImageData(0,0,1,1);return r&&r.width===e.width}()?function(e){void 0===i[e]&&(i[e]=function(e){var t,r=function(e){var t=document.createElement("canvas"),r=Object.create(n.webGLContextAttributes);return r.failIfMajorPerformanceCaveat=e,t.getContext("webgl",r)||t.getContext("experimental-webgl",r)}(e);if(!r)return!1;try{t=r.createShader(r.VERTEX_SHADER)}catch(e){return!1}if(!t||r.isContextLost())return!1;return r.shaderSource(t,"void main() {}"),r.compileShader(t),!0===r.getShaderParameter(t,r.COMPILE_STATUS)}(e));return i[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=n,t.notSupportedReason=o;var i={};n.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",r={js:[],css:[]},n=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(a),u="".concat(e.replace(i,"")),l=e.match(i)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),u="".concat(u.replace(a,"")));if(e.match(n)){var p=e.match(n).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));r.js=r.js.concat(p),u="".concat(u.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));r.css=r.css.concat(f),u="".concat(u.replace(/<link[\s\S]*?>/g,""))}u.match(c)&&(u=u.match(c)[1]);return{html:u,css:t,js:l,resources:r}}}}]);
//# sourceMappingURL=maplibre-gl-js-docs-example-3d-extrusion-floorplan-a0dfa9e959a50539f6d0.chunk.js.map