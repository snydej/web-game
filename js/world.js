'use strict';

var TileType = new Enum('GRASS', 'TREE', 'WATER');

var tileWeights = TileType.map({
    GRASS: 40,
    TREE: 2,
    WATER: 3
});

function generate(w, h) {
    var i;

    var totalWeight = 0;
    for (i = 0; i < TileType.values.length; i++)
        totalWeight += tileWeights.get(TileType.values[i]);

    var land = [];
    for (var r = 0; r < h; r++) {
        var landRow = [];
        for (var c = 0; c < w; c++) {
            var randomChoice = totalWeight * Math.random();
            for (i = 0; i < TileType.values.length; i++) {
                randomChoice -= tileWeights.get(TileType.values[i]);
                if (randomChoice < 0)
                    break;
            }
            landRow.push(TileType.values[i]);
        }
        land.push(landRow);
    }

    return land;
}
