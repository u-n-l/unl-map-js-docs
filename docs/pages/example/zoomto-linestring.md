---
title: Fit to the bounds of a LineString
description: Get the bounds of a LineString.
topics:
  - User interaction
thumbnail: zoomto-linestring
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - MapLibre GL JS
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './zoomto-linestring.html';"
---

Get the bounds of a LineString by passing its first coordinates to [`LngLatBounds`](https://u-n-l.github.io/unl-map-js-docs/api/geography/#lnglatbounds) and chaining [`extend`](https://u-n-l.github.io/unl-map-js-docs/api/geography/#lnglatbounds#extend) to include the last coordinates.

{{ <Example html={html} {...this.props} /> }}
