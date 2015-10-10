QUnit.test("identity", function(assert) {
    var scale = new LinearScale(0, 1, 1);
    assert.equal(scale.transDelta(2), 2);
    assert.equal(scale.trans(0), 0);
    assert.equal(scale.trans(1), 1);
});

QUnit.test("double", function(assert) {
    var scale = new LinearScale(0, 1, 2);
    assert.equal(scale.transDelta(2), 4);
    assert.equal(scale.trans(0), 0);
    assert.equal(scale.trans(1), 2);
});

QUnit.test("double and shift", function(assert) {
    var scale = new LinearScale(-1, 3, 8);
    assert.equal(scale.transDelta(2), 4);
    assert.equal(scale.trans(-1), 0);
    assert.equal(scale.trans(3), 8);
});
