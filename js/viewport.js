"use strict";

function LinearScale(min, max, size) {
    this.transDelta = function(val) {
        return val / (max - min) * size;
    }

    // val == min returns 0, val == max return size, These to points determine
    // the linear scale
    this.trans = function(val) {
        return this.transDelta(val - min);
    };

}

function View(left, right, upper, lower, viewportWidth, viewportHeight) {
    this.xScale = new LinearScale(left, right, viewportWidth);
    this.yScale = new LinearScale(lower, upper, viewportHeight);

    this.transX = function(x) {
        return this.xScale.trans(x);
    }

    this.transWidth = function(w) {
        return this.xScale.transDelta(w);
    }

    this.transY = function(y) {
        return this.yScale.trans(y);
    }

    this.transHeight = function(h) {
        return this.yScale.transDelta(h);
    }
}
