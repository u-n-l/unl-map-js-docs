---
title: Display a popup on click
description: When a user clicks a symbol, show a popup containing more information.
topics:
  - Controls and overlays
thumbnail: popup-on-click
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './popup-on-click.html';"
---

When a user clicks a symbol, show a [`Popup`](https://u-n-l.github.io/unl-map-js-docs/api/markers/#popup) containing more information.

{{ <Example html={html} {...this.props} /> }}
