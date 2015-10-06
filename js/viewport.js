"use strict";

function linearScale(min, max, size) {
    this.transDelta = function(val) {
        return val / (max - min) * size;
    }

    // val == min returns 0, val == max return size, These to points determine
    // the linear scale
    this.trans = function(val) {
        return this.transDelta(val - min);
    };

}

function view(left, right, upper, lower, viewportWidth, viewportHeight) {
    this.xScale = new linearScale(left, right, viewportHeight);
    this.yScale = new linearScale(lower, upper, viewportWidth);

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
