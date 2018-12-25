import Player from ./src/player;

// Get canvas
let canvas = document.getElementById("gameScreen");
// Get context (=ctx)
let ctx = canvas.getContext("2d");


GAME_WIDTH = 800;
GAME_HEIGHT = 600;



let player = new Player(GAME_WIDTH,GAME_HEIGHT);


console.log(player)
player.draw(ctx);
