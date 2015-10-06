"use strict";

var canvas = document.getElementById('canvas');

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
