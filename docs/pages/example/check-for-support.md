---
title: Check if Unl Map Js is supported
description: Check for MapLibre GL browser support.
topics:
  - Browser support
thumbnail: check-for-support
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './check-for-support.html';"
---

Use [`supported`](https://u-n-l.github.io/unl-map-js-docs/api/properties/#supported) to check for MapLibre GL browser support, and show an alert if the browser does not support MapLibre GL.

{{ <Example html={html} {...this.props} /> }}
