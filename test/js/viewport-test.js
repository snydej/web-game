"use strict";
(function () {

QUnit.module("viewport");

QUnit.test("identity scale", function(assert) {
    var scale = new LinearScale(0, 1, 1);
    assert.equal(scale.transDelta(2), 2);
    assert.equal(scale.trans(0), 0);
    assert.equal(scale.trans(1), 1);
});

QUnit.test("double scale", function(assert) {
    var scale = new LinearScale(0, 1, 2);
    assert.equal(scale.transDelta(2), 4);
    assert.equal(scale.trans(0), 0);
    assert.equal(scale.trans(1), 2);
});

QUnit.test("double and shift scale", function(assert) {
    var scale = new LinearScale(-1, 3, 8);
    assert.equal(scale.transDelta(2), 4);
    assert.equal(scale.trans(-1), 0);
    assert.equal(scale.trans(3), 8);
});

QUnit.test("view", function(assert) {
    var view = new View(10, 20, 30, 50, 640, 480);

    assert.equal(view.transX(20), 640);
    assert.equal(view.transWidth(10), 640);

    assert.equal(view.transY(50), 480);
    assert.equal(view.transHeight(20), 480);
});

})();
