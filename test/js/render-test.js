'use strict';
(function () {

QUnit.module('render');

function MockContext() {
    this.log = [];
}

Object.defineProperty(MockContext.prototype, 'fillStyle', {
    set: function (style) {
        this.log.push(['set fillStyle', style]);
    }
});

MockContext.prototype.fillRect = function(x, y, w, h) {
    this.log.push(['fillRect', x, y, w, h]);
}

QUnit.test('render 2 tiles', function(assert) {
    var context = new MockContext();
    var view = new View(0, 2, 0, 2, 20, 20);
    var tileRenderer = renderTerrainTile(context, view);

    tileRenderer(TileType.GRASS, 0, 1);
    tileRenderer(TileType.WATER, 1, 0);

    assert.deepEqual(context.log, [
        ['set fillStyle', tileColors.get(TileType.GRASS)],
        ['fillRect', 0, 10, 10, 10],
        ['set fillStyle', tileColors.get(TileType.WATER)],
        ['fillRect', 10, 0, 10, 10]
    ]);
});

QUnit.test('apply function to 2x2 terrain', function(assert) {
    var log = [];
    var fn = function (tile, x, y) {
        log.push([tile, x, y]);
    }
    var terrain = [['a', 'b'], ['c', 'd']];

    applyTerrain(fn, terrain);

    assert.deepEqual(log, [
        ['a', 0, 0],
        ['b', 1, 0],
        ['c', 0, 1],
        ['d', 1, 1]
    ]);
});

})();
