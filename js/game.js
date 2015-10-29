WIDTH = 640;
HEIGHT = 480;


player_start_x = 20;
player_start_y = 300;


//The following functions are automatically called for you.
//setup() is called at the very beginning, before your game starts.
//draw() is called every frame
//mouseClicked() is called whenever the user clicks on the screen

//setup() is called at the very beginning, before your game starts.
function setup() {
    myCanvas = createCanvas(WIDTH, HEIGHT);
    myCanvas.parent('p5_canvas');

    setupDialogue();
    
    goalReached = false;
    goal = createSprite(600, 40, 30, 30);
    goal.shapeColor = 'yellow';

    system = new ParticleSystem(createVector(width / 2, 50));

    player = createSprite(player_start_x, player_start_y, 20, 20);
    player.shapeColor = 'Aqua';

    //USER SETUP CODE
    mySetupCode();

}

//draw() is called every frame
function draw() {

    clear();

    drawGrid();

    fill("red");
    textSize(24);
    textFont("Georgia");
    text("My Game", 50, 50);

    playerInput();

    if (goalReached) {
        system.addParticle();
        system.run();
    }

    if (player.overlap(goal)) {
        goalReached = true;
    }


    gravity(player);

    
    player.shapeColor = 'Aqua';
    player.display();

    //USER DRAW CODE
    myDrawCode();

    drawSprites();


    for (var i = 0; i < platforms.length; i++) {
        if (player.overlap(platforms[i]) & player.velocity.y > 0) {
            makeJump(player);
        }
    };

    resetOnGameOver();

    drawDialogue();
    
}

//Called whenever the user click on the screen
function mouseClicked(){
    mouseClickedDialogue();
}
