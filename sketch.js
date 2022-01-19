var steve,stevewalkImage
var groundImage;
var ground
function preload(){
 groundImage = loadImage("baground.jpg")
  stevewalkImage = loadImage("walk.gif")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
 // ground=createSprite(200,180,400,20);
  //round.addImage(groundImage)
 
 steve = createSprite(50,160,20,50);
  steve.addAnimation("walking",stevewalkImage);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  steve.scale = 0.5;
  steve.x = 50
}


function draw(){
  //background(groundImage);
  //console.log(steve.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    steve.velocityY = -10;
  }

  steve.velocityY = steve.velocityY + 0.5;
  
  //ground.velocityX=-2
  //stop trex from falling down
  /*if (ground.x<0){
    ground.x=ground.width/2
  }*/
  steve.collide(edges[3])
  drawSprites();
}