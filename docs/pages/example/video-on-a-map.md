---
title: Add a video
description: Display a video on top of a satellite raster baselayer.
topics:
  - Sources
  - Layers
thumbnail: video-on-a-map
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './video-on-a-map.html';"
---

Display a video on top of a satellite raster baselayer. Click the map to play and pause the video.

{{ <Example html={html} {...this.props} /> }}
