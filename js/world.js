'use strict';

var TERRAIN = {
    GRASS: {
        color: 'rgb(0,255,0)',
        weight: 40
    },

    TREE:  {
        color: 'rgb(0,128,0)',
        weight: 2
    },

    WATER: {
        color: 'rgb(0,0,255)',
        weight: 3
    }
};

function generate(w, h) {
    var totalWeight = 0;
    var type;

    for (type in TERRAIN) {
        totalWeight += TERRAIN[type].weight;
    }

    var land = [];
    for (var r = 0; r < h; r++) {
        var landRow = [];
        for (var c = 0; c < w; c++) {
            var randomChoice = totalWeight * Math.random();
            for (type in TERRAIN) {
                randomChoice -= TERRAIN[type].weight;
                if (randomChoice < 0) {
                    break;
                }
            }
            landRow.push(TERRAIN[type]);
        }
        land.push(landRow);
    }

    return land;
}
