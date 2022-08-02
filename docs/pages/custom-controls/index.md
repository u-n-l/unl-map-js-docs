---
title: UNL Plugins
description: UNL plugins built on top of maplibre.
contentType: example
language:
  - JavaScript
navOrder: 4
layout: page # use the layout page
hideFeedback: true # hide feedback from page
products:
  - UNL Map JS
---

On top of maplibre-gl-js, this package exposes the following plugins that can be initialised during the map instantiation with the default options or added later using the `addControl` function on the map reference.

## UNL grid and cells

Grid and cells control can be enabled during the `UnlSdk.Map` initialisation by passing the `gridControl` option `true`. With this approach, the grid & cells control will be initialised with the default options. The control's default position is `'top-right'`.

```js
const map = new UnlSdk.Map({
...
gridControl: true,
...
});
```

It can also be added after the initialisation by calling the `addControl` function on the map reference:

```js
import UnlSdk from "unl_map_sdk";
const map = new UnlSdk.Map({
...
});
map.addControl(new UnlSdk.GridControl({ lineColor: "#FF0000", cellFillColor: "#00FF00"}), "bottom-right");
```

If the second approach is chosen, the following options can be specified during the `GridControl` initialisation:

| Option           | Type            | Default   | Description                                                                      |
| ---------------- | --------------- | --------- | -------------------------------------------------------------------------------- |
| defaultPrecision | `CellPrecision` | 9         | Default precision of the cells. It can be changed manually via the grid selector |
| lineColor        | `string`        | "#C0C0C0" | Grid line's colour                                                               |
| lineWidth        | `number`        | 0.5       | Grid line's width                                                                |
| cellFillColor    | `string`        | "#FFB100" | Cell's colour                                                                    |
| cellBorderColor  | `string`        | "#FFB100" | Cell's border colour                                                             |

If GridControl is enabled, the cell will get highlighted by clicking on the map. It will render a popup displaying the location id of the corresponding selected cell. For performance reasons, the grid lines will be generated at certain zoom levels, dependant on the selected precision, according to the following table:

| Precision | Zoom level |
| --------- | ---------- |
| 10        | 20         |
| 9         | 18         |
| 8         | 16         |
| 7         | 14         |
| 6         | 12         |
| 5         | 10         |
| 4         | 8          |
| 3         | 4          |
| 2         | 3          |
| 1         | 2          |

![Grid lines and cell](https://github.com/u-n-l/unl-map-js/blob/main/docs/gifs/grid_lines.gif?raw=true)

![Grid precision selection](https://github.com/u-n-l/unl-map-js/blob/main/docs/gifs/grid_selector.gif?raw=true)

## Tiles selector

Tile selector control can be enabled during the `UnlSdk.Map` initialisation by passing the `tilesSelectorControl` option `true`. With this approach, the tile selector control will be initialised with the default options. The control's default position is `'top-left'`.

```js
const map = new UnlSdk.Map({
...
tilesSelectorControl: true,
...
});
```

It can also be added later by calling the `addControl` function on the map reference:

```js
import UnlSdk from "unl_map_sdk";

const map = new UnlSdk.Map({
...
});

map.addControl(new UnlSdk.TileSelectorControl({ tiles: ["vectorial", "satellite"] }), "bottom-right");
```

If the second approach is chosen, the following options can be specified during the `TilesSelectorControl` initialisation:

| Option                 | Type       | Default                                                  | Description                                             |
| ---------------------- | ---------- | -------------------------------------------------------- | ------------------------------------------------------- |
| tiles                  | MapTiles[] | ["vectorial", "traffic", "terrain", "satellite", "base"] | The options that will be included in the tiles selector |
| displayControlsDefault | boolean    | true                                                     | Display the default tile selector UI                    |

![Tiles selector](https://github.com/u-n-l/unl-map-js/blob/main/docs/gifs/tile_selector.gif?raw=true)

### API Methods

`new TilesSelectorControl()` returns an instance of the TilesSelectorControl with the following API:

### `set(style: MapTile) => void`

This method takes a `MapTile` parameter and updates the selected tile from the map.

The supported MapTile values are: `vector`, `traffic`, `terrain`, `satellite`, `base`.

Example

```js
const tilesSelectorControl = new UnlSdk.TilesSelectorControl(
  { displayControlsDefault: false },
  "top-left"
);

map.addControl(tilesSelectorControl);

mapTilesControl.setStyle("terrain");
```

## Indoor maps overlay

Indoor maps overlay control can be enabled during the map initialisation by passing the `indoorMapsControl` option `true`. The tile selector control will be initialised with the default options. The control's default position is `'top-right'`.

It can also be added later by calling the `addControl` function on the map reference:

```js
import UnlSdk from "unl_map_sdk";

const map = new UnlSdk.Map({
...
});

map.addControl(new UnlSdk.IndoorControl(), "bottom-right");
```

Enabling the indoor maps overlay, will fetch the venue maps and render the marker and outer area of the venues that were uploaded in the VPM whose id is passed as part of the map initialisation. By clicking on a venue, the full venue data will be downloaded, rendering the venue units and facilities, along with the level selector buttons.

![Indoor maps overlay](https://github.com/u-n-l/unl-map-js/blob/main/docs/gifs/indoor_overlays.gif?raw=true)

## Draft shapes

Draft shapes control can be enabled during the map initialisation by passing the `draftShapesControl` option `true`. In this way, the control will be enabled with the default parameters. The default position of the control is `'top-left'`.

It can also be added later by calling the `addControl` function on the map reference:

```js
import UnlSdk from "unl_map_sdk";

const map = new UnlSdk.Map({
...
});

map.addControl(new UnlSdk.DraftShapesControl(), "bottom-right");
```

Enabling the draft shapes control, will fetch and render all the shapes added in the VPM whose id is passed during the map initialisation. Additionally, by clicking on a shape, it can be moved, edited or deleted. New shapes can be created: polygon, circle or rectangles, via the three corresponding control buttons and they will get saved in the same VPM.

![Draft shapes creation & editing and delete](https://github.com/u-n-l/unl-map-js/blob/main/docs/gifs/draft_shapes.gif?raw=true)

<br />
<br />
<br />
