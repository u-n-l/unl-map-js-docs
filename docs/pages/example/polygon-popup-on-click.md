---
title: Show polygon information on click
description: When a user clicks a polygon, show a popup containing more information.
topics:
  - Controls and overlays
thumbnail: polygon-popup-on-click
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './polygon-popup-on-click.html';"
---

When a user clicks a polygon, show a [`Popup`](https://u-n-l.github.io/unl-map-js-docs/api/markers/#popup) containing more information.

{{ <Example html={html} {...this.props} /> }}
