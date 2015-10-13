'use strict';
(function () {

QUnit.module('enum');

QUnit.test('enum has specified elements', function(assert) {
    var simpleEnum = new Enum('A', 'B');;
    assert.ok(simpleEnum.A);
    assert.ok(simpleEnum.B);
    assert.equal(simpleEnum.C, undefined);
});

QUnit.test('enum values are distict', function(assert) {
    var simpleEnum = new Enum('A', 'B');;
    assert.equal(simpleEnum.A, simpleEnum.A);
    assert.notEqual(simpleEnum.A, simpleEnum.B);
});

QUnit.test('values contain all the enum values', function(assert) {
    var simpleEnum = new Enum('A', 'B');;
    assert.deepEqual(simpleEnum.values, [simpleEnum.A, simpleEnum.B]);
});

QUnit.test('enum values print readably', function(assert) {
    var simpleEnum = new Enum('A', 'B');;
    assert.equal(simpleEnum.B.toString(), 'B');
});

QUnit.test('enum values have consecutive indexes', function(assert) {
    var simpleEnum = new Enum('A', 'B');;
    assert.equal(simpleEnum.A.index, 0);
    assert.equal(simpleEnum.B.index, 1);
});

QUnit.test('enum maps map enum elements to values', function (assert) {
    var simpleEnum = new Enum('A', 'B');
    var map = simpleEnum.map({ A: 42, B: 'Hello'});

    assert.equal(map.get(simpleEnum.A), 42);
    assert.equal(map.get(simpleEnum.B), 'Hello');
});

})();
