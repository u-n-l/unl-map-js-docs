(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Fx9d:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n("q1tI")),i=(n("yr+R"),n("cQZ0"),u(n("uLm5"))),a=u(n("QtiP")),c=u(n("1wO5"));function u(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Change building color based on zoom level",description:"Use the interpolate expression to ease-in the building layer and smoothly fade from one color to the next.",topics:["Layers"],thumbnail:"change-building-color-based-on-zoom-level",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Unl Map Js"],headings:[]},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(y,e);var t,n,r,u=d(y);function y(){return s(this,y),u.apply(this,arguments)}return t=y,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,l({},e,{frontMatter:h}),o.default.createElement("div",null,o.default.createElement("p",null,"Use the ",o.default.createElement("code",null,"interpolate")," expression to ease-in the building layer and smoothly fade from one color to the next."),o.default.createElement(i.default,l({html:a.default},this.props))))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),y}(o.default.PureComponent);t.default=m},M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},QtiP:function(e,t,n){"use strict";n.r(t),t.default='<style>\n  #zoom {\n    display: block;\n    position: relative;\n    margin: 20px auto;\n    width: 50%;\n    height: 40px;\n    padding: 10px;\n    border: none;\n    border-radius: 3px;\n    font-size: 12px;\n    text-align: center;\n    color: #fff;\n    background: #ee8a65;\n  }\n</style>\n<div id="map"></div>\n<button id="zoom">Zoom to buildings</button>\n<script>\n  var map = new UnlSdk.Map({\n    container: "map",\n    apiKey: "YOUR-OWN-API-KEY",\n    vpmId: "YOUR-OWN-VPM-ID",\n    center: [-73.935242, 40.73061],\n    zoom: 13,\n  });\n\n  map.on("load", function () {\n    map.setPaintProperty("building_level15", "fill-extrusion-color", [\n      "interpolate",\n      ["exponential", 0.5],\n      ["zoom"],\n      15,\n      "#e2714b",\n      22,\n      "#eee695",\n    ]);\n\n    map.setPaintProperty("building_level15", "fill-extrusion-opacity", [\n      "interpolate",\n      ["exponential", 0.5],\n      ["zoom"],\n      15,\n      0,\n      22,\n      1,\n    ]);\n  });\n\n  document.getElementById("zoom").addEventListener("click", function () {\n    map.zoomTo(19, { duration: 9000 });\n  });\n<\/script>\n'},ThK5:function(e,t,n){var r=n("Fx9d");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Change building color based on zoom level",description:"Use the interpolate expression to ease-in the building layer and smoothly fade from one color to the next.",topics:["Layers"],thumbnail:"change-building-color-based-on-zoom-level",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["Unl Map Js"],prependJs:["import Example from '../../components/example';","import html from './change-building-color-based-on-zoom-level.html';"]}}}},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n("q1tI"),o=n.n(r),i=n("mOgX"),a=n("v8ZZ"),c=n("irdr"),u=n.n(c),l=n("M4Oy"),s=n.n(l),p=n("umIL"),f=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',P="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(l,e);var t,n,r,c=v(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).state={unsupported:!1},t}return t=l,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(i.default.js(),"'><\/script>\n<link href='").concat(i.default.css(),'\' rel=\'stylesheet\' />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n    ').concat(P,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),i=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(u.a,{code:this.displayHTML(t),highlighter:function(){return p.highlightHtml},edit:{frontMatter:b(b({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var e=this.props;return e.frontMatter,e.height,o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(s.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),!this.props.hideWarning&&o.a.createElement(s.a,{theme:"default"},'If you want to test this example, edit it in JSFiddle or CodePen and replace the "YOUR-OWN-API-KEY" and "YOUR-OWN-VPM-ID" placeholders with your actual api key and vpm id.'),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(a.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.a.Component);w(x,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===i[e]&&(i[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return i[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var i={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,u=e.match(a),l="".concat(e.replace(i,"")),s=e.match(i)[1];u&&(u.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(a,"")));if(e.match(r)){var p=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(p),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(c)&&(l=l.match(c)[1]);return{html:l,css:t,js:s,resources:n}}}}]);
//# sourceMappingURL=unl-map-js-docs-example-change-building-color-based-on-zoom-level-f9cc1c014d650cac9d9c.chunk.js.map