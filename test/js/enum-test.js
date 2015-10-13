'use strict';
(function () {

QUnit.module('enum');

QUnit.test('enum has specified elements', function(assert) {
    var simpleEnum = new Enum({A: 0, B: 1});
    assert.ok(simpleEnum.A);
    assert.ok(simpleEnum.B);
    assert.notOk(simpleEnum.C);
});

QUnit.test('enum values are distict', function(assert) {
    var simpleEnum = new Enum({A: 0, B: 1});
    assert.equal(simpleEnum.A, simpleEnum.A);
    assert.notEqual(simpleEnum.A, simpleEnum.B);
});

QUnit.test('iterating over enum yields the names of values', function(assert) {
    var simpleEnum = new Enum({A: 0, B: 1});

    var keys = [];
    for (var key in simpleEnum)
        keys.push(key);

    assert.deepEqual(keys, ["A", "B"]);
});

QUnit.test('enum values print readably', function(assert) {
    var simpleEnum = new Enum({A: 0, B: 1 });
    assert.equal(simpleEnum.B.toString(), "B");
});

QUnit.test('enum values can be mapped to aritrary integers', function(assert) {
    var simpleEnum = new Enum({A: 0, B: 42 });
    assert.equal(simpleEnum.B.index, 42);
});

})();
