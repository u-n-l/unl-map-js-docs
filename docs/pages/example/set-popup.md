---
title: Attach a popup to a marker instance
description: Attach a popup to a marker and display it on click.
topics:
  - Controls and overlays
thumbnail: set-popup
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './set-popup.html';"
---

Attach a [`Popup`](https://u-n-l.github.io/unl-map-js-docs/api/markers/#popup) to a [Marker](https://u-n-l.github.io/unl-map-js-docs/api/markers/#marker) and display it on click.

{{ <Example html={html} {...this.props} /> }}
