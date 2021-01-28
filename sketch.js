var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binLeft,binRight, binBottom;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage("packageIMG",packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 //bin left body and sprite
	 binLeft=Bodies.rectangle(width/2-100,610, 20,100);
	 World.add(world, binLeft);

	 binLeftSprite = createSprite(binLeft.position.x ,binLeft.position.y ,20, 100  )
	 binLeftSprite.shapeColor = "red";

	  //bin right body and sprite
	  binRight=Bodies.rectangle(width/2+100,610, 20,100);
	  World.add(world, binRight);
 
	  binRightSprite = createSprite(binRight.position.x ,binRight.position.y ,20, 100  )
	  binRightSprite.shapeColor = "red";

	   //bin Bottom body and sprite
	   binBottom=Bodies.rectangle(width/2,630, 200,20);
	   World.add(world, binBottom);
  
	   binBottomSprite = createSprite(binBottom.position.x ,650 ,200, 20  )
	   binBottomSprite.shapeColor = "red";
 
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody,false);
    
  }
}



