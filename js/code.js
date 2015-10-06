"use strict";

var canvas = document.getElementById('canvas');

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

function fillRect(ctx, view, x, y, w, h) {
    ctx.fillRect(view.transX(x), view.transY(y),
            view.transWidth(w), view.transHeight(h));
}

function render(canvas) {
    var ctx = canvas.getContext("2d");
    var canvasView = new view(0, 1, 0, 1, 100, 100);

    ctx.fillStyle = "rgb(255,0,0)";
    fillRect(ctx, canvasView, 0, 0, 1, 1);

    ctx.fillStyle = "rgb(0, 0, 255)";
    fillRect(ctx, canvasView, 0.5, 0, 0.5, 0.5);
    fillRect(ctx, canvasView, 0, 0.5, 0.5, 0.5);
}

render(canvas);
