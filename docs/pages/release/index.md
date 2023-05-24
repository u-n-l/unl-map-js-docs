---
title: Release notes
description: Desribe the changes included in every new release of the library
contentType: example
language:
  - JavaScript
navOrder: 6
layout: page # use the layout page
hideFeedback: true # hide feedback from page
products:
  - UNL Map JS
---

## 0.1.3

- Added a new map style option: 'rich';
- Allow passing a 'tiles' parameter during sdk initialization. In combination with the `tilesSelectorControl` it allows passing the options available for the map style. If the tiles parameter is not sent, by default, all the map style options will be present: 'rich', 'default', 'satellite', 'terrain', 'traffic', 'base';
  Eg.

```js
var map = new UnlSdk.Map({
     ...
     apiKey: "YOUR-OWN-API-KEY",
     vpmId: "YOUR-OWN-VPM-ID",
     tilesSelectorControl: true,
     // tiles selector is enabled and 3 style options are present: rich, default vectorial and satellite.
     tiles: ["rich", "default", "satellite"]
      ...
});
```

- Override the 'tiles' by the 'style' option. This is allowing developers to pass their own style during the map initialization and so any `tiles` array or `tilesSelectionControl` flag will be ignored:

```js
var map = new UnlSdk.Map({
     ...
     apiKey: "YOUR-OWN-API-KEY",
     vpmId: "YOUR-OWN-VPM-ID",
     style: 'YOUR-OWN-MAP-STYLE"
      ...
});
```

## 0.1.2

- Minor fixes.

## 0.1.1

- Minor fixes.

## 0.1.0

- Added a parameter named 'env' for switching between the 'sandbox' and 'prod' apis. The api key and vpm id provided should be generated on the same env. By default, the library is pointing to the prod environment.
  Eg.

```js
var map = new UnlSdk.Map({
     ...
     // generated on the sandbox env of the UNL platform
     apiKey: "YOUR-OWN-API-KEY",
     // generated on the sandbox env of the UNL platform
     vpmId: "YOUR-OWN-VPM-ID",
     env: UnlSdk.Environment.SANDBOX,
      ...
});
```

## 0.0.6

- Fixed UNL tiles URLs.

## 0.0.5

- Fixed the polyfill issue experienced with webpack.

## 0.0.4

- Minor bug fixes.

## 0.0.3

- Minor bug fixes.

## 0.0.2

- Added the custom attribution control representing the tiles copyright on the map;
- General bug fixes.

## 0.0.1

- Initial npm release.

<br />
<br />
<br />
