var fixedRect;
var movingRect;

function setup() {
 createCanvas(800,400);

 fixedRect =  createSprite(400, 200, 50, 100);
fixedRect.shapeColor = "yellow";
movingRect =  createSprite(400, 200, 100, 50);
movingRect.shapeColor = "yellow";

movingRect.debug = "true";
fixedRect.debug = "true";

}
 
  
 

function draw() {

  background(0);  

movingRect.y = World.mouseY
movingRect.x = World.mouseX

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){

movingRect.shapeColor = "green"

}
else{
  movingRect.shapeColor = "red"
}

  drawSprites();
}