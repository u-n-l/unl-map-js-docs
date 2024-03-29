---
title: Display HTML clusters with custom properties
description: Extend clustering with HTML markers and custom property expressions.
topics:
  - Layers
thumbnail: cluster-html
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './cluster-html.html';"
---

This advanced example uses Unl Map Js clustering with HTML markers and custom property expressions. To use HTML or SVG for clusters in place of a MapLibre GL layer, you have to manually synchronize the clustered source with a pool of marker objects that updates continuously while the map view changes.

{{ <Example html={html} {...this.props} /> }}
