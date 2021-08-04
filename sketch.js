var track, trackImage, boy, boyImage, left, right, edges;

function preload() {
  //pre-load images
  trackImage = loadImage("path.png")
  boyImage = loadAnimation("Jake1.png", "Jake2.png","jake3.png", "jake4.png", "jake5.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  track = createSprite(200,200, 50, 50);
  track.addImage("backround", trackImage);
  track.velocityY = 4;
  track.scale = 1.2;
  boy = createSprite(200,200,50,50);
  boy.addAnimation("running", boyImage );

  left = createSprite(35,200, 70,200);
  left.shapeColor="blue";
  right = createSprite(370,200, 60,200);
  left.visible = false;
  right.visible = false;
  console.log('track.y', track.y);
  
}

function draw() {
  background(0);
  boy.x= World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]); 
  boy.collide(left); 
  boy.collide(right);
  
  if(track.y > 400 ) {
    track.y = height/2;
  }
  drawSprites();
}
