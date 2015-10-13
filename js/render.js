'use strict';

function fillRect(ctx, view, x, y, w, h) {
    ctx.fillRect(view.transX(x), view.transY(y),
        view.transWidth(w), view.transHeight(h));
}

function applyTerrain(fn, terrain) {
    var terrainHeight = terrain.length;
    var terrainWidth = terrain[0].length;

    for (var y = 0; y < terrainHeight; y++)
        for (var x = 0; x < terrainWidth; x++)
            fn(terrain[y][x], x, y);
}

var tileColors = TileType.map({
    GRASS: 'rgb(0,255,0)',
    TREE: 'rgb(0,128,0)',
    WATER: 'rgb(0,0,255)'
});

function renderTerrainTile(context, view) {
    return function(tile, x, y) {
        context.fillStyle = tileColors.get(tile);
        fillRect(context, view, x, y, 1, 1);
    };
}

function renderTerrain(context, view, terrain) {
    applyTerrain(renderTerrainTile(context, view), terrain);
}

function render(canvas, terrain) {
    var terrainHeight = terrain.length;
    var terrainWidth = terrain[0].length;
    var view = new View(0, terrainWidth, 0, terrainHeight,
            canvas.width, canvas.height);

    var context = canvas.getContext('2d');
    renderTerrain(context, view, terrain);
}

