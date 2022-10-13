---
title: Add a GeoJSON line
description: Add a GeoJSON line to a map using addSource, then style it using addLayer’s paint properties.
topics:
  - Layers
thumbnail: geojson-line
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './geojson-line.html';"
---

Add a GeoJSON line to a map using [`addSource`](https://u-n-l.github.io/unl-map-js-docs/api/map/#map#addsource), then style it using [`addLayer`](https://u-n-l.github.io/unl-map-js-docs/api/map/#map#addlayer)’s `paint` properties.

{{ <Example html={html} {...this.props} /> }}
