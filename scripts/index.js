Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZWQyMmM5Ny1mNzI1LTQxNjYtYTA3Yi1jNGFhYjcyNmY3YjAiLCJpZCI6Njk4Miwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU1MTA2NDA5Mn0.ksJ2F5hI_IDJTwa-bD-i_kVPcK6kNY_gcsgL2LPBJ0I';
var viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
});

viewer._cesiumWidget._creditContainer.style.display="none";