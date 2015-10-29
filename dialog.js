//Insert these into p5's setup and draw respectively
function setupDialogue(){
	pixelFont = loadFont('c64-pixelized.otf');

	dialogueOn = true;
	dialogueIndex = 0;

	dialogueGutter = 10;

	dialoguePicWidth = 64;
	dialoguePicX = WIDTH - dialoguePicWidth - dialogueGutter;


	//We shopuld load all the required assets, not just the current level
	heroAPic = loadImage("images/heroA.png");	
	heroBPic = loadImage("images/heroB.png");	


	dialogueBox = loadImage("images/DialogueBox.png");
	dialogueTextHeight = 90;	//If we include the preload function, we can use dialogueBox.height
								//We could also set this inside draw, but it doesn't feel right
	dialogueTextWidth = WIDTH - dialoguePicWidth - dialogueGutter;

	
	dialogue = [
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		},
		{
			character: "heroB",
			image: heroBPic,
			textColor: "red",
			text: "Quod rem, libero quam ab nam et inventore nulla blanditiis repellat consequuntur! Libero tenetur a, voluptates sunt sapiente qui autem neque facilis.",
		},
		{
			character: "heroA",
			image: heroAPic,
			textColor: "blue",
			text: "Goodbye",
		}
	];
}

function drawDialogue(){

	if(dialogueOn){
		image( dialogueBox, 0, 0, WIDTH );
		image( dialogue[dialogueIndex].image, dialoguePicX, dialogueGutter, dialoguePicWidth );

		fill( dialogue[dialogueIndex].textColor );
	    textSize(12);
	    textFont(pixelFont);

	    text( dialogue[dialogueIndex].text, dialogueGutter, dialogueGutter, dialogueTextWidth, dialogueTextHeight - dialogueGutter );
	}
}

function mouseClickedDialogue() {
	if(dialogueOn && mouseY < dialogueTextHeight){
		dialogueIndex++;
		if( dialogueIndex >= dialogue.length ){
			dialogueIndex = 0;			
			dialogueOn = false;
		}
	}
}