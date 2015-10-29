function mySetupCode(){
	//Somebody messed up the code and the platforms are not properly aligned
	
	//Change the platforms size and position
	//Change the numbers so you can reach the platform
	platform1 = createSprite(40, 470, 80, 10);
    platform2 = createSprite(200, 400, 110, 10);
    platform3 = createSprite(350, 470, 80, 10);
    platform4 = createSprite(470, 300, 50, 10);
    platform5 = createSprite(470, 400, 80, 10);
    platform6 = createSprite(350, 250, 80, 10);
    platform7 = createSprite(350, 190, 80, 10);
    platform8 = createSprite(470, 120, 80, 10);
	
	//Change the platforms color
    platform1.shapeColor = 'green';
	platform2.shapeColor = 'green';
	platform3.shapeColor = 'green';
	platform4.shapeColor = 'green';
	platform5.shapeColor = 'green';
	platform6.shapeColor = 'green';
	platform7.shapeColor = 'green';
	platform8.shapeColor = 'green';
	
	//Store platforms in platforms group
	platforms = new Group();
    platforms.add(platform1);
    platforms.add(platform2);
    platforms.add(platform3);
    platforms.add(platform4);
    platforms.add(platform5);
    platforms.add(platform6);
    platforms.add(platform7);
    platforms.add(platform8);
}

function myDrawCode(){
	
}