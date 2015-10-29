//Move the player to the starting position when he falls outside of the screen
function resetOnGameOver() {
    if (player.position.y > HEIGHT) {
        player.position.x = player_start_x;
        player.position.y = player_start_y;
    }
}

//Draw vertical and horizontal lines to create a grid
function drawGrid() {
    textSize(12);
    fill('black');
    for (var i = 40; i < WIDTH; i += 40) {
        line(0, i, 20, i);
        line(i, 0, i, 20);
    };

    for (var i = 40; i < WIDTH; i += 80) {
        text(i, 20, i);
        text(i, i, 30);
    };
}

//Update a sprite's speed to simulate gravity
function gravity(sprite) {
    sprite.addSpeed(-0.2, 270);

    //Include a terminal velocity, the maximum speed at which the sprite can fall
    // if(sprite.velocity.y > 2){
    //  sprite.velocity.y = 2;
    // }
}

//Similar to how gravity() works, but instead of slowly updating the speed, we immediately change the speed to a large value.
function makeJump(sprite) {
    sprite.setSpeed(5.5, 270);
}

//Make the controls so the player can move left and right using the arrow keys
function playerInput() {
    if (keyIsDown(LEFT_ARROW)) {
        player.position.x = player.position.x - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        player.position.x = player.position.x + 5;
    }
}