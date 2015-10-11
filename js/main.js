"use strict";

var canvas = document.getElementById('canvas');

var land = generate(20, 20);

render(canvas, land);
