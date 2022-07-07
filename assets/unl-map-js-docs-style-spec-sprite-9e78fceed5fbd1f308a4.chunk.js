(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{"0bSz":function(e,t,n){var a=n("K/9h");a=a.default||a,e.exports={component:a,props:{frontMatter:{title:"Sprite",id:"sprite",description:"A style's sprite property supplies a URL template for loading small images to use in rendering background-pattern, fill-pattern, line-pattern,fill-extrusion-pattern and icon-image style properties.",contentType:"specification",order:5,layout:"page",hideFeedback:!0,products:["Mapbox Style Specification"],prependJs:["import ref from '../../../maplibre-gl-js/rollup/build/tsc/src/style-spec/reference/latest';"]}}}},"K/9h":function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n("q1tI")),r=(n("yr+R"),n("cQZ0"),c(n("t78q"))),o=c(n("1wO5"));function c(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var l=m(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h={title:"Sprite",id:"sprite",description:"A style's sprite property supplies a URL template for loading small images to use in rendering background-pattern, fill-pattern, line-pattern,fill-extrusion-pattern and icon-image style properties.",contentType:"specification",order:5,layout:"page",hideFeedback:!0,products:["Mapbox Style Specification"],headings:[]},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(d,e);var t,n,a,c=f(d);function d(){return u(this,d),c.apply(this,arguments)}return t=d,(n=[{key:"render",value:function(){var e=this.props;return l.default.createElement(o.default,i({},e,{frontMatter:h}),l.default.createElement("div",null,l.default.createElement("p",null,"A style's ",l.default.createElement("code",null,"sprite")," property supplies a URL template for loading small images to use in rendering ",l.default.createElement("code",null,"background-pattern"),", ",l.default.createElement("code",null,"fill-pattern"),", ",l.default.createElement("code",null,"line-pattern"),",",l.default.createElement("code",null,"fill-extrusion-pattern")," and ",l.default.createElement("code",null,"icon-image")," style properties."),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token property"},'"sprite"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},JSON.stringify(r.default.$root.sprite.example,null,2)),"\n")),l.default.createElement("p",null,"A valid sprite source must supply two types of files:"),l.default.createElement("ul",null,l.default.createElement("li",null,"An ",l.default.createElement("em",null,"index file"),", which is a JSON document containing a description of each image contained in the sprite. The content of this file must be a JSON object whose keys form identifiers to be used as the values of the above style properties, and whose values are objects describing the dimensions (",l.default.createElement("code",null,"width")," and ",l.default.createElement("code",null,"height")," properties) and pixel ratio (",l.default.createElement("code",null,"pixelRatio"),") of the image and its location within the sprite (",l.default.createElement("code",null,"x")," and","{","' '","}"," ",l.default.createElement("code",null,"y"),"). For example, a sprite containing a single image might have the following index file contents:")),l.default.createElement("pre",{className:"language-json"},l.default.createElement("code",{className:"language-json"},l.default.createElement("span",{className:"token punctuation"},"{"),"\n","    ",l.default.createElement("span",{className:"token property"},'"poi"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token punctuation"},"{"),"\n","        ",l.default.createElement("span",{className:"token property"},'"width"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"32"),l.default.createElement("span",{className:"token punctuation"},","),"\n","        ",l.default.createElement("span",{className:"token property"},'"height"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"32"),l.default.createElement("span",{className:"token punctuation"},","),"\n","        ",l.default.createElement("span",{className:"token property"},'"x"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"0"),l.default.createElement("span",{className:"token punctuation"},","),"\n","        ",l.default.createElement("span",{className:"token property"},'"y"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"0"),l.default.createElement("span",{className:"token punctuation"},","),"\n","        ",l.default.createElement("span",{className:"token property"},'"pixelRatio"'),l.default.createElement("span",{className:"token operator"},":")," ",l.default.createElement("span",{className:"token number"},"1"),"\n","    ",l.default.createElement("span",{className:"token punctuation"},"}"),"\n",l.default.createElement("span",{className:"token punctuation"},"}"),"\n")),l.default.createElement("ul",null,l.default.createElement("li",null,"Then the style could refer to this sprite image by creating a symbol layer with the layout property ",l.default.createElement("code",null,'"icon-image": "poi"'),", or with the tokenized value  ",l.default.createElement("code",null,'"icon-image": "',"{","icon","}",'"')," and vector tile features with a ",l.default.createElement("code",null,"icon")," property with the value ",l.default.createElement("code",null,"poi"),"."),l.default.createElement("li",null,l.default.createElement("em",null,"Image files"),", which are PNG images containing the sprite data.")),l.default.createElement("p",null,"Apart from the required ",l.default.createElement("code",null,"width"),", ",l.default.createElement("code",null,"height"),", ",l.default.createElement("code",null,"x"),", and ",l.default.createElement("code",null,"y")," properties, the following optional properties are supported:"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("code",null,"content"),": An array of four numbers, with the first two specifying the left, top corner, and the last two specifying the right, bottom corner. If present, and if the icon uses ",l.default.createElement("a",{href:"/maplibre-gl-js-docs/style-spec/layers/#layout-symbol-icon-text-fit"},l.default.createElement("code",null,"icon-text-fit")),", the symbol's text will be fit inside the content box."),l.default.createElement("li",null,l.default.createElement("code",null,"stretchX"),": An array of two-element arrays, consisting of two numbers that represent the ",l.default.createElement("em",null,"from")," position and the ",l.default.createElement("em",null,"to")," position of areas that can be stretched."),l.default.createElement("li",null,l.default.createElement("code",null,"stretchY"),": Same as ",l.default.createElement("code",null,"stretchX"),", but for the vertical dimension.")),l.default.createElement("p",null,"MapLibre SDKs will use the value of the ",l.default.createElement("code",null,"sprite")," property in the style to generate the URLs for loading both files. First, for both file types, it will append ",l.default.createElement("code",null,"@2x")," to the URL on high-DPI devices. Second, it will append a file extension: ",l.default.createElement("code",null,".json")," for the index file, and ",l.default.createElement("code",null,".png")," for the image file. For example, if you specified ",l.default.createElement("code",null,'"sprite": "https://example.com/sprite"'),", renderers would load ",l.default.createElement("code",null,"https://example.com/sprite.json")," and ",l.default.createElement("code",null,"https://example.com/sprite.png"),", or ",l.default.createElement("code",null,"https://example.com/sprite@2x.json")," and ",l.default.createElement("code",null,"https://example.com/sprite@2x.png"),".")))}}])&&s(t.prototype,n),a&&s(t,a),Object.defineProperty(t,"prototype",{writable:!1}),d}(l.default.PureComponent);t.default=y}}]);
//# sourceMappingURL=unl-map-js-docs-style-spec-sprite-9e78fceed5fbd1f308a4.chunk.js.map