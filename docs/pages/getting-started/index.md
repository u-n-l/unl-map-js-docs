---
title: Getting started
description: Getting started with unl-map-js.
contentType: example
language:
  - JavaScript
navOrder: 1
layout: page # use the layout page
hideFeedback: true # hide feedback from page
products:
  - UNL Map JS
---

## Installing

```
npm install unl-map-js
```

## Usage in your application

### Javascript

#### When using modules

```
import UnlSdk from "unl_map_sdk";
```

#### When using CDN

```
<script src='../v1.0.0/unl-map-js.js'></script>
```

### CSS

#### When using modules

```
import 'unl-map-js/lib/unl-map-js.css'
```

#### When using CDN

```
<link rel='stylesheet' href='../unl-map-js/v1.0.0/unl-map-js.css' type='text/css' />
```

### Typescript

Typescript definition files are included as part of this package.

### Initializing the map

#### Example usage

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../lib/unl-map-js.css" />
    <link rel="stylesheet" href="styles.css" />
    <title>Hello world</title>
  </head>
  <body>
    <div id="map" class="map"></div>
    <script type="module" src="./dist/index.js"></script>
  </body>
</html>
```

#### index.js

```js
import UnlSdk from "unl_map_sdk";

const map = new UnlSdk.Map({
apiKey:  <YOUR-UNL-API-KEY>,
vpmId: <YOUR-VPM-ID>,
gridControl: true,
indoorMapsControl: true,
tilesSelectorControl: true,
draftShapesControl: true,
container: "map",
center: [0, 0],
zoom: 1,
});
```
