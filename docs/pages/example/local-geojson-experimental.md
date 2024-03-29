---
title: View local GeoJSON (experimental)
description: View local GeoJSON with experimental File System Access API.
topics:
  - Sources
thumbnail: local-geojson
contentType: example
layout: example
hideFeedback: true
language:
  - JavaScript
products:
  - Unl Map Js
prependJs:
  - "import Example from '../../components/example';"
  - "import html from './local-geojson-experimental.html';"
---

Download [example GeoJSON here](https://data-roscoco.opendata.arcgis.com/datasets/0371f25602be4f5f9145e9b76e2de54b_0.geojson?outSR=%7B%22latestWkid%22%3A2157%2C%22wkid%22%3A2157%7D). This example utilizes the File System Access API in newer Chrome and Edge browsers (see [article](https://web.dev/file-system-access/) and [explanation](https://github.com/WICG/file-system-access/blob/main/EXPLAINER.md)). Instead of uploading the file to a server and reading it from there, it is accessed locally by the browser without any network transfer. In contrast to the File API, the file handle can be used to also write to the file (not implemented here). This example should be considered experimental, because `window.showOpenFilePicker` is not supported by all major browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker#browser_compatibility).

{{ <Example html={html} {...this.props} /> }}
