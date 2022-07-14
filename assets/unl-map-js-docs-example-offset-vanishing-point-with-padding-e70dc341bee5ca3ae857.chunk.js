(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{M4Oy:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((r=n("fG8n"))&&r.__esModule?r:{default:r}).default;t.default=o},SMQJ:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("q1tI")),i=(n("yr+R"),n("cQZ0"),s(n("uLm5"))),a=s(n("u7aT")),c=s(n("1wO5"));function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y={title:"Offset the vanishing point using padding",description:"Offset the center or vanishing point of the map to reduce distortion when floating elements are displayed over the map.",topics:["Camera"],thumbnail:"offset-vanishing-point-with-padding",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],headings:[]},b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(h,e);var t,n,r,s=d(h);function h(){return p(this,h),s.apply(this,arguments)}return t=h,(n=[{key:"render",value:function(){var e=this.props;return o.default.createElement(c.default,l({},e,{frontMatter:y}),o.default.createElement("div",null,o.default.createElement("p",null,"Offset the center or ",o.default.createElement("a",{href:"https://en.wikipedia.org/wiki/Vanishing_point"},"vanishing point")," of the map to reduce distortion when floating elements are displayed over the map."),o.default.createElement(i.default,l({html:a.default},this.props))))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),h}(o.default.PureComponent);t.default=b},u7aT:function(e,t,n){"use strict";n.r(t),t.default='<style>\n  .rounded-rect {\n    background: white;\n    border-radius: 10px;\n    box-shadow: 0 0 50px -25px black;\n  }\n\n  .flex-center {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .flex-center.left {\n    left: 0px;\n  }\n\n  .flex-center.right {\n    right: 0px;\n  }\n\n  .sidebar-content {\n    position: absolute;\n    width: 95%;\n    height: 95%;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 32px;\n    color: gray;\n  }\n\n  .sidebar-toggle {\n    position: absolute;\n    width: 1.3em;\n    height: 1.3em;\n    overflow: visible;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .sidebar-toggle.left {\n    right: -1.5em;\n  }\n\n  .sidebar-toggle.right {\n    left: -1.5em;\n  }\n\n  .sidebar-toggle:hover {\n    color: #0aa1cf;\n    cursor: pointer;\n  }\n\n  .sidebar {\n    transition: transform 1s;\n    z-index: 1;\n    width: 300px;\n    height: 100%;\n  }\n\n  /*\n  The sidebar styling has them "expanded" by default, we use CSS transforms to push them offscreen\n  The toggleSidebar() function removes this class from the element in order to expand it.\n*/\n  .left.collapsed {\n    transform: translateX(-295px);\n  }\n\n  .right.collapsed {\n    transform: translateX(295px);\n  }\n</style>\n\n<div id="map">\n  <div id="left" class="sidebar flex-center left collapsed">\n    <div class="sidebar-content rounded-rect flex-center">\n      Left Sidebar\n      <div\n        class="sidebar-toggle rounded-rect left"\n        onclick="toggleSidebar(\'left\')"\n      >\n        &rarr;\n      </div>\n    </div>\n  </div>\n  <div id="right" class="sidebar flex-center right collapsed">\n    <div class="sidebar-content rounded-rect flex-center">\n      Right Sidebar\n      <div\n        class="sidebar-toggle rounded-rect right"\n        onclick="toggleSidebar(\'right\')"\n      >\n        &larr;\n      </div>\n    </div>\n  </div>\n</div>\n\n<script>\n  var center = [-77.01866, 38.888];\n  var map = new UnlSdk.Map({\n    container: "map",\n    zoom: 12.5,\n    center: center,\n    pitch: 60,\n    apiKey: "YOUR-OWN-API-KEY",\n    vpmId: "YOUR-OWN-VPM-ID",\n  });\n\n  new UnlSdk.Marker().setLngLat(center).addTo(map);\n\n  function toggleSidebar(id) {\n    var elem = document.getElementById(id);\n    var classes = elem.className.split(" ");\n    var collapsed = classes.indexOf("collapsed") !== -1;\n\n    var padding = {};\n\n    if (collapsed) {\n      // Remove the \'collapsed\' class from the class list of the element, this sets it back to the expanded state.\n      classes.splice(classes.indexOf("collapsed"), 1);\n\n      padding[id] = 300; // In px, matches the width of the sidebars set in .sidebar CSS class\n      map.easeTo({\n        padding: padding,\n        duration: 1000, // In ms, CSS transition duration property for the sidebar matches this value\n      });\n    } else {\n      padding[id] = 0;\n      // Add the \'collapsed\' class to the class list of the element\n      classes.push("collapsed");\n\n      map.easeTo({\n        padding: padding,\n        duration: 1000,\n      });\n    }\n\n    // Update the class list on the element\n    elem.className = classes.join(" ");\n  }\n\n  map.on("load", function () {\n    toggleSidebar("left");\n  });\n<\/script>\n'},uLm5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var r=n("q1tI"),o=n.n(r),i=n("mOgX"),a=n("v8ZZ"),c=n("irdr"),s=n.n(c),l=n("M4Oy"),p=n.n(l),u=n("umIL"),f=n("wdKx");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j='<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />',S="\tbody { margin: 0; padding: 0; }\n\t#map { position: absolute; top: 0; bottom: 0; width: 100%; }",x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,n,r,c=g(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).state={unsupported:!1},t}return t=l,(n=[{key:"displayHTML",value:function(e){return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8" />\n<title>'.concat(this.props.frontMatter.title,"</title>\n").concat(j,'\n<script src="').concat(i.default.js(),'"><\/script>\n<link href="').concat(i.default.css(),'" rel="stylesheet" />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderHTML",value:function(e){return"<!DOCTYPE html>\n<html>\n<head>\n<meta charset=utf-8 />\n<title>".concat(this.props.frontMatter.title,"</title>\n").concat(j,"\n\n\n<script src='").concat(i.default.js(),"'><\/script>\n<link href='").concat(i.default.css(),'\' rel=\'stylesheet\' />\n<link\nhref="https://unpkg.com/maplibre-gl@2.1.9/dist/maplibre-gl.css"\nrel="stylesheet"\n/>\n<style>\n    ').concat(S,"\n</style>\n</head>\n<body>\n").concat(e,"\n</body>\n</html>")}},{key:"renderSnippet",value:function(){var e=this.props,t=e.html,n=e.location,r=this.displayHTML(t),i=f.extractor(r);return o.a.createElement("div",{className:"bg-white"},o.a.createElement("div",{id:"code",className:"relative"},o.a.createElement(s.a,{code:this.displayHTML(t),highlighter:function(){return u.highlightHtml},edit:{frontMatter:m(m({},this.props.frontMatter),{},{pathname:n.pathname}),head:j,js:i.js,html:i.html,css:i.css,resources:i.resources}})))}},{key:"render",value:function(){var e=this,t=this.props,n=t.frontMatter,r=t.height;return o.a.createElement("div",{className:"prose"},this.state.unsupported&&o.a.createElement(p.a,{title:"Mapbox GL unsupported",theme:"warning"},"Mapbox GL requires"," ",o.a.createElement("a",{className:"link",href:"https://caniuse.com/#feat=webgl"},"WebGL support"),". Please check that you are using a supported browser and that"," ",o.a.createElement("a",{className:"link",href:"https://get.webgl.org/"},"WebGL is enabled"),"."),Object(a.supported)()&&o.a.createElement("iframe",{id:"demo",style:{height:r},className:"w-full mt18",allowFullScreen:!0,mozallowfullscreen:"true",webkitallowfullscreen:"true",ref:function(t){e.iframe=t},title:"".concat(n.title," example")}),this.props.displaySnippet&&this.renderSnippet())}},{key:"componentDidMount",value:function(){if(Object(a.supported)()||this.setState({unsupported:!0}),this.iframe){var e=this.iframe.contentWindow.document;e.open(),e.write(this.renderHTML(this.props.html)),e.close()}}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.a.Component);w(x,"defaultProps",{displaySnippet:!0,height:400})},v8ZZ:function(e,t,n){"use strict";function r(e){return!o(e)}function o(e){return"undefined"==typeof window||"undefined"==typeof document?"not a browser":Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray?Function.prototype&&Function.prototype.bind?Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions?"JSON"in window&&"parse"in JSON&&"stringify"in JSON?function(){if(!("Worker"in window&&"Blob"in window&&"URL"in window))return!1;var e,t,n=new Blob([""],{type:"text/javascript"}),r=URL.createObjectURL(n);try{t=new Worker(r),e=!0}catch(t){e=!1}t&&t.terminate();return URL.revokeObjectURL(r),e}()?"Uint8ClampedArray"in window?ArrayBuffer.isView?function(){var e=document.createElement("canvas");e.width=e.height=1;var t=e.getContext("2d");if(!t)return!1;var n=t.getImageData(0,0,1,1);return n&&n.width===e.width}()?function(e){void 0===i[e]&&(i[e]=function(e){var t,n=function(e){var t=document.createElement("canvas"),n=Object.create(r.webGLContextAttributes);return n.failIfMajorPerformanceCaveat=e,t.getContext("webgl",n)||t.getContext("experimental-webgl",n)}(e);if(!n)return!1;try{t=n.createShader(n.VERTEX_SHADER)}catch(e){return!1}if(!t||n.isContextLost())return!1;return n.shaderSource(t,"void main() {}"),n.compileShader(t),!0===n.getShaderParameter(t,n.COMPILE_STATUS)}(e));return i[e]}(e&&e.failIfMajorPerformanceCaveat)?document.documentMode?"insufficient ECMAScript 6 support":void 0:"insufficient WebGL support":"insufficient Canvas/getImageData support":"insufficient ArrayBuffer support":"insufficient Uint8ClampedArray support":"insufficient worker support":"insufficient JSON support":"insufficient Object support":"insufficient Function support":"insufficent Array support"}t.supported=r,t.notSupportedReason=o;var i={};r.webGLContextAttributes={antialias:!1,alpha:!0,stencil:!0,depth:!0}},wdKx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractor=function(e){var t="",n={js:[],css:[]},r=/src=("|')([^']*?)("|')/g,o=/href=("|')([^']*?)("|')/g,i=/<script>((.|\n)*)<\/script>/,a=/<style\b[^>]*>([\s\S]*?)<\/style>/g,c=/<body[\s\S]*?>((.|\n)*)<\/body>/,s=e.match(a),l="".concat(e.replace(i,"")),p=e.match(i)[1];s&&(s.forEach((function(e){t+=e.replace(/<[^>]*>/g,"")})),l="".concat(l.replace(a,"")));if(e.match(r)){var u=e.match(r).map((function(e){return e.replace("src=","").replace(/["']/g,"")}));n.js=n.js.concat(u),l="".concat(l.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/g,""))}if(e.match(o)){var f=e.match(o).map((function(e){return e.replace("href=","").replace(/["']/g,"")}));n.css=n.css.concat(f),l="".concat(l.replace(/<link[\s\S]*?>/g,""))}l.match(c)&&(l=l.match(c)[1]);return{html:l,css:t,js:p,resources:n}}},xdho:function(e,t,n){var r=n("SMQJ");r=r.default||r,e.exports={component:r,props:{frontMatter:{title:"Offset the vanishing point using padding",description:"Offset the center or vanishing point of the map to reduce distortion when floating elements are displayed over the map.",topics:["Camera"],thumbnail:"offset-vanishing-point-with-padding",contentType:"example",layout:"example",hideFeedback:!0,language:["JavaScript"],products:["MapLibre GL JS"],prependJs:["import Example from '../../components/example';","import html from './offset-vanishing-point-with-padding.html';"]}}}}}]);
//# sourceMappingURL=unl-map-js-docs-example-offset-vanishing-point-with-padding-e70dc341bee5ca3ae857.chunk.js.map