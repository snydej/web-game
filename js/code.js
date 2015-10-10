"use strict";

var canvas = document.getElementById('canvas');

var land = generate(20, 20);

function fillRect(ctx, view, x, y, w, h) {
    ctx.fillRect(view.transX(x), view.transY(y),
            view.transWidth(w), view.transHeight(h));
}

function render(canvas, land) {
    var landHeight = land.length;
    var landWidth = land[0].length;
    var canvasView = new View(0, landWidth, 0, landHeight,
            canvas.width, canvas.height);

    var ctx = canvas.getContext("2d");
    for (var y = 0; y < landHeight; y++) {
        for (var x = 0; x < landWidth; x++) {
            ctx.fillStyle = land[y][x].color;
            fillRect(ctx, canvasView, x, y, 1, 1);
        }
    }
}

render(canvas, land);
