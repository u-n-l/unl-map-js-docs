(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{LMBu:function(e,t,n){"use strict";n.r(t),t.default='<style>\n  .filter-ctrl {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    z-index: 1;\n  }\n\n  .filter-ctrl input[type="text"] {\n    font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;\n    width: 100%;\n    border: 0;\n    background-color: #fff;\n    margin: 0;\n    color: rgba(0, 0, 0, 0.5);\n    padding: 10px;\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    width: 180px;\n  }\n</style>\n<div id="map"></div>\n<div class="filter-ctrl">\n  <input\n    id="filter-input"\n    type="text"\n    name="filter"\n    placeholder="Filter by name"\n  />\n</div>\n\n<script>\n  var places = {\n    type: "FeatureCollection",\n    features: [\n      {\n        type: "Feature",\n        properties: {\n          icon: "theatre",\n        },\n        geometry: {\n          type: "Point",\n          coordinates: [-77.038659, 38.931567],\n        },\n      },\n      {\n        type: "Feature",\n        properties: {\n          icon: "theatre",\n        },\n        geometry: {\n          type: "Point",\n          coordinates: [-77.003168, 38.894651],\n        },\n      },\n      {\n        type: "Feature",\n        properties: {\n          icon: "bar",\n        },\n        geometry: {\n          type: "Point",\n          coordinates: [-77.090372, 38.881189],\n        },\n      },\n      {\n        type: "Feature",\n        properties: {\n          icon: "bicycle",\n        },\n        geometry: {\n          type: "Point",\n          coordinates: [-77.052477, 38.943951],\n        },\n      },\n      {\n        type: "Feature",\n        properties: {\n          icon: "music",\n        },\n        geometry: {\n          type: "Point",\n          coordinates: [-77.031706, 38.914581],\n        },\n      },\n      {\n        type: "Feature",\n        properties: {\n          icon: "music",\n        },\n        geometry: {\n          type: "Point",\n          coordinates: [-77.020945, 38.878241],\n        },\n      },\n      {\n        type: "Feature",\n        properties: {\n          icon: "music",\n        },\n        geometry: {\n          type: "Point",\n          coordinates: [-77.007481, 38.876516],\n        },\n      },\n    ],\n  };\n\n  var layerIDs = []; // Will contain a list used to filter against.\n  var filterInput = document.getElementById("filter-input");\n  var map = new UnlSdk.Map({\n    container: "map",\n    apiKey: "YOUR-OWN-API-KEY",\n    vpmId: "YOUR-OWN-VPM-ID",\n    center: [-77.04, 38.907],\n    zoom: 11.15,\n  });\n\n  map.on("load", function () {\n    // Add a GeoJSON source containing place coordinates and information.\n    map.addSource("places", {\n      type: "geojson",\n      data: places,\n    });\n\n    places.features.forEach(function (feature) {\n      var symbol = feature.properties["icon"];\n      var layerID = "poi-" + symbol;\n\n      // Add a layer for this symbol type if it hasn\'t been added already.\n      if (!map.getLayer(layerID)) {\n        map.addLayer({\n          id: layerID,\n          type: "symbol",\n          source: "places",\n          layout: {\n            "icon-image": symbol + "_15",\n            "icon-overlap": "always",\n            "text-field": symbol,\n            "text-font": ["Fira GO Regular"],\n            "text-size": 11,\n            "text-transform": "uppercase",\n            "text-letter-spacing": 0.05,\n            "text-offset": [0, 1.5],\n          },\n          paint: {\n            "text-color": "#202",\n            "text-halo-color": "#fff",\n            "text-halo-width": 2,\n          },\n          filter: ["==", "icon", symbol],\n        });\n\n        layerIDs.push(layerID);\n      }\n    });\n\n    filterInput.addEventListener("keyup", function (e) {\n      // If the input value matches a layerID set\n      // it\'s visibility to \'visible\' or else hide it.\n      var value = e.target.value.trim().toLowerCase();\n      layerIDs.forEach(function (layerID) {\n        map.setLayoutProperty(\n          layerID,\n          "visibility",\n          layerID.indexOf(value) > -1 ? "visible" : "none"\n        );\n      });\n    });\n  });\n<\/script>\n'},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},NYKU:function(e,t,n){var r=n("auy+");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Filter symbols by text input",description:"Filter symbols by icon name by typing in a text input.",topics:["User interaction"],thumbnail:"filter-markers-by-input",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './filter-markers-by-input.html';"]}}}},"auy+":function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),i=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),a=s(n("LMBu")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={title:"Filter symbols by text input",description:"Filter symbols by icon name by typing in a text input.",topics:["User interaction"],thumbnail:"filter-markers-by-input",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(d,e);var t,n,r,s=y(d);function d(){return u(this,d),s.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,p({},e,{frontMatter:b}),o.default.createElement("div",null,o.default.createElement("p",null,"Filter ",o.default.createElement("a",{href:"https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/#symbol"},"symbols")," by icon name by typing in a text input."),o.default.createElement(i.default,p({html:a.default},this.props))))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(o.default.PureComponent);t.default=h},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n("q1tI"),o=n.n(r),i=n("mOgX"),a=n("v8ZZ"),c=n("irdr"),s=n.n(c),p=n("M4Oy"),u=n.n(p),l=n("umIL"),f=n("wdKx");function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',x="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(p,e);var t,n,r,c=v(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=c.call(this,e)).state={unsupported:!1},t}return t=p,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n').concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(i.default.js(),"'><\/script>\n<link href='").concat(i.default.css(),'\' rel=\'stylesheet\' />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n    ').concat(x,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),i=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(s.a,{code:this.displayHTML(t),highlighter:function(){return l.highlightHtml},edit:{frontMatter:m(m({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(a.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(a.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.a.Component);w(P,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===i[e]&&(i[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return i[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var i={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(a),p="".concat(e.replace(i,"")),u=e.match(i)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(a,"")));if(e.match(r)){var l=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(c)&&(p=p.match(c)[1]);return{html:p,css:t,js:u,resources:n}}}}]);
//# sourceMappingURL=unl-map-js-docs-example-filter-markers-by-input-ce69a9d9c5a13289004c.chunk.js.map