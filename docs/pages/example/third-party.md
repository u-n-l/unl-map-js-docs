---
title: Add a third party vector tile source
description: Render vector data provided by Mapillary.
topics:
  - Sources
thumbnail: third-party
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './third-party.html';"
---

Render vector data provided by [Mapillary](https://www.mapillary.com/developer/tiles-documentation/#sequence-layer).

{{ <Example html={html} {...this.props} /> }}
