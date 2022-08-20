---
title: API Reference
description: The UNL Map JS API documentation to render interactive maps from vector tiles and UNL styles.
contentType: API
navOrder: 3
order: 3
layout: page
hideFeedback: true
language:
  - JavaScript
products:
  - UNL Map JS
prependJs:
  - "import Quickstart from '../../components/quickstart';"
  - "import Example from '../../components/example';"
  - "import SimpleMapHtml from '../example/simple-map.html';"
  - "import Copyable from '../../components/copyable';"
  - "import urls from '../../components/urls';"
overviewHeader:
  title: UNL Map JS
  features:
    - "Custom map styles"
    - "Fast vector maps"
  image: simple-map
  # version="" version is set dynamically in page-shell.js
---

UNL Map JS is a JavaScript library that uses WebGL to render interactive maps from vector tiles and UNL styles

## Reading this documentation

This documentation is divided into several sections:

- [**Map**](https://u-n-l.github.io/unl-map-js-docs/api/map/). The `Map` object is the map on your page. It lets you access methods and properties for interacting with the map's style and layers, respond to events, and manipulate the user's perspective with the camera.
- [**Properties and options**](https://u-n-l.github.io/unl-map-js-docs/api/properties/). This section describes UNL Map JS's global properties and options that you might want to access while initializing your map or accessing information about its status.
- [**Markers and controls**](https://u-n-l.github.io/unl-map-js-docs/api/markers/). This section describes the user interface elements that you can add to your map. The items in this section exist outside of the map's `canvas` element.
- [**Geography and geometry**](https://u-n-l.github.io/unl-map-js-docs/api/geography/). This section includes general utilities and types that relate to working with and manipulating geographic information or geometries.
- [**User interaction handlers**](https://u-n-l.github.io/unl-map-js-docs/api/handlers/). The items in this section relate to the ways in which the map responds to user input.
- [**Sources**](https://u-n-l.github.io/unl-map-js-docs/api/sources/). This section describes the source types UNL Map JS can handle.
- [**Events**](https://u-n-l.github.io/unl-map-js-docs/api/events/). This section describes the different types of events that UNL Map JS can raise.

Each section describes classes or objects as well as their **properties**, **parameters**, **instance members**, and associated **events**. Many sections also include inline code examples and related resources.

## Contribution

UNL Map JS is an advance Map SDK library, builld using the core open-source library of MapLibre GL JS. UNL conforms to MapLibre GL licensing terms listed under 3-Clause BSD License.
