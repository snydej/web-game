'use strict';
(function() {

var canvas = document.getElementById('canvas');
var gameState = new GameState(generateTerrain(20, 20));
render(canvas, gameState);

})();
