(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},P3FR:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),a=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),i=s(n("YRki")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m={title:"Show polygon information on click",description:"When a user clicks a polygon, show a popup containing more information.",topics:["Controls and overlays"],thumbnail:"polygon-popup-on-click",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Unl Map Js"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,n,r,s=d(y);function y(){return u(this,y),s.apply(this,arguments)}return t=y,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,p({},e,{frontMatter:m}),o.default.createElement("div",null,o.default.createElement("p",null,"When a user clicks a polygon, show a ",o.default.createElement("a",{href:"https://u-n-l.github.io/unl-map-js-docs/api/markers/#popup"},o.default.createElement("code",null,"Popup"))," containing more information."),o.default.createElement(a.default,p({html:i.default},this.props))))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.default.PureComponent);t.default=b},YRki:function(e,t,n){"use strict";n.r(t),t.default='<style>\n  .mapboxgl-popup {\n    max-width: 400px;\n    font: 12px/20px "Helvetica Neue", Arial, Helvetica, sans-serif;\n  }\n</style>\n<div id="map"></div>\n<script>\n  var map = new UnlSdk.Map({\n    container: "map",\n    apiKey: "YOUR-OWN-API-KEY",\n    vpmId: "YOUR-OWN-VPM-ID",\n    center: [-100.04, 38.907],\n    zoom: 3,\n  });\n\n  map.on("load", function () {\n    // Add a source for the state polygons.\n    map.addSource("states", {\n      type: "geojson",\n      data: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson",\n    });\n\n    // Add a layer showing the state polygons.\n    map.addLayer({\n      id: "states-layer",\n      type: "fill",\n      source: "states",\n      paint: {\n        "fill-color": "rgba(200, 100, 240, 0.4)",\n        "fill-outline-color": "rgba(200, 100, 240, 1)",\n      },\n    });\n\n    // When a click event occurs on a feature in the states layer, open a popup at the\n    // location of the click, with description HTML from its properties.\n    map.on("click", "states-layer", function (e) {\n      new UnlSdk.Popup()\n        .setLngLat(e.lngLat)\n        .setHTML(e.features[0].properties.name)\n        .addTo(map);\n    });\n\n    // Change the cursor to a pointer when the mouse is over the states layer.\n    map.on("mouseenter", "states-layer", function () {\n      map.getCanvas().style.cursor = "pointer";\n    });\n\n    // Change it back to a pointer when it leaves.\n    map.on("mouseleave", "states-layer", function () {\n      map.getCanvas().style.cursor = "";\n    });\n  });\n<\/script>\n'},ax85:function(e,t,n){var r=n("P3FR");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Show polygon information on click",description:"When a user clicks a polygon, show a popup containing more information.",topics:["Controls and overlays"],thumbnail:"polygon-popup-on-click",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Unl Map Js"],prependJs:["import Example from '../../components/example';","import html from './polygon-popup-on-click.html';"]}}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var r=n("q1tI"),o=n.n(r),a=n("mOgX"),i=n("v8ZZ"),c=n("irdr"),s=n.n(c),p=n("M4Oy"),u=n.n(p),l=n("umIL"),f=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',P="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(p,e);var t,n,r,c=v(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=c.call(this,e)).state={unsupported:!1},t}return t=p,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(a.default.js(),'"><\/script>\n<link href="').concat(a.default.css(),'" rel="stylesheet" />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(a.default.js(),"'><\/script>\n<link href='").concat(a.default.css(),'\' rel=\'stylesheet\' />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n    ').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),a=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(s.a,{code:this.displayHTML(t),highlighter:function(){return l.highlightHtml},edit:{frontMatter:h(h({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:a.js,html:a.html,css:a.css,resources:a.resources}})))}},{key:"render",value:function(){var e=this.props;return e.frontMatter,e.height,o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(u.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),!this.props.hideWarning&&o.a.createElement(u.a,{theme:"default"},'If you want to test this example, edit it in JSFiddle or CodePen and replace the "YOUR-OWN-API-KEY" and "YOUR-OWN-VPM-ID" placeholders with your actual api key and vpm id.'),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(i.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(o.a.Component);w(k,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===a[e]&&(a[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return a[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var a={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,a=/<script>((.|\n)*)<\/script>/,i=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(i),p="".concat(e.replace(a,"")),u=e.match(a)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),p="".concat(p.replace(i,"")));if(e.match(r)){var l=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(l),p="".concat(p.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),p="".concat(p.replace(/<link[\s\S]*?>/g,""))}p.match(c)&&(p=p.match(c)[1]);return{html:p,css:t,js:u,resources:n}}}}]);
//# sourceMappingURL=unl-map-js-docs-example-polygon-popup-on-click-0175b0cb1cb8112224da.chunk.js.map