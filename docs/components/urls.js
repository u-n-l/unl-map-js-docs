export const UNL_MAP_JS_VERSION = "0.0.3";

function url(ext) {
  return `https://unpkg.com/unl-map-js@${UNL_MAP_JS_VERSION}/lib/unl-map-js.${ext}`;
}

function js() {
  return url("js");
}

function css() {
  return url("css");
}

export default { js, css };
