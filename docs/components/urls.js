const UNL_MAP_JS_VERSION = "1.0.2";

function url(ext) {
  return `https://unpkg.com/js-map-sdk@${UNL_MAP_JS_VERSION}/lib/unl-map-js.${ext}`;
}

function js() {
  return url("js");
}

function css() {
  return url("css");
}

export default { js, css };
