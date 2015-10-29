PLAYER_START_X = 20;
PLAYER_START_Y = 50;

function base_setupLevel() {
  goal.position.x = 600;
  goal.position.y = 440;
}

function base_drawLevel() {
  if (goalReached) {
    fill('red');
    textAlign(CENTER);
    text("Goal reached. Color code unlocked!", WIDTH/2, HEIGHT/2);
  }

  if (isPlayerOnPlatform()) {
    player.velocity.y = 0;
  }
}
