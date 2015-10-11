"use strict";
(function () {

QUnit.module("render");

function MockContext(width, height) {
    this.width = width;
    this.height = height;
    this.log = [];
}

Object.defineProperty(MockContext.prototype, 'fillStyle', {
    set: function (style) {
        this.log.push(['set fillStyle', style]);
    }
});

QUnit.test('mock test', function(assert) {
    var mock = new MockContext(0, 0);

    mock.fillStyle = "test";
    assert.deepEqual(mock.log, [['set fillStyle', 'test']]);
});

})();
