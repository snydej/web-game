'use strict';
(function () {

QUnit.module('world');

QUnit.test('generate terrain returns valid terrain', function (assert) {
    var terrain = generateTerrain(10, 5);
    assert.equal(terrain.length, 5);

    for (var y = 0; y < 5; y++) {
        assert.equal(terrain[y].length, 10);
        for (var x = 0; x < 10; x++)
            TileType.typeCheck(terrain[y][x]);
    }
});

})();
