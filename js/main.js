'use strict';
(function() {

var canvas = document.getElementById('canvas');
var resourcesDiv = document.getElementById('resource-content');
var gameState = new GameState(generateTerrain(20, 20));
render(canvas, resourcesDiv, gameState);

})();
