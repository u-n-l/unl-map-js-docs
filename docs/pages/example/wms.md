---
title: Add a WMS source
description: Add an external Web Map Service raster layer to the map using addSource's tiles option.
topics:
  - Sources
thumbnail: wms
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './wms.html';"
---

Add an external [Web Map Service raster layer](https://www.ogc.org/standards/wms) to the map using [`addSource`](https://u-n-l.github.io/unl-map-js-docs/api/map/#map#addsource)'s `tiles` option.

{{ <Example html={html} {...this.props} /> }}
