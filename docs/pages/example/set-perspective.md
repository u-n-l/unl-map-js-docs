---
title: Set pitch and bearing
description: Initialize a map with pitch and bearing camera options.
topics:
  - Camera
thumbnail: set-perspective
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './set-perspective.html';"
---

Map options extend [`CameraOptions`](https://u-n-l.github.io/unl-map-js-docs/api/properties/#cameraoptions), so you can set more than the center and zoom. This example sets the pitch and bearing.

{{ <Example html={html} {...this.props} /> }}
