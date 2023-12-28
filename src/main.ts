import * as Cesium from "cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYjJlMjIwYS1hNTdiLTRjOGQtYWViOS1kYjEzNGQyOTljZDEiLCJpZCI6MTY5NTUzLCJpYXQiOjE2OTYyMzAxNzd9.Zk1d0TFvfYVwxaanEoQ6tyX_6Kp1Ygb6W04Q4eqRc3c';
const viewer = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain(),
});
viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
    }
});
// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = await Cesium.createOsmBuildingsAsync();
viewer.scene.primitives.add(buildingTileset);