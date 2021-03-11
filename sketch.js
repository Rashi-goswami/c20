var movingRect,fixedRect;
var rect1,rect2;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
  fixedRect=createSprite(100,200,50,100);
  fixedRect.shapeColor="green";
  rect1=createSprite(10,300,50,50);
  rect1.shapeColor="blue";
  rect2=createSprite(800,300,50,50);
  rect2.shapeColor="pink";
  rect1.velocityX=2;
  rect2.velocityX=-2;
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && 
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 && 
      fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    }


    else{
      fixedRect.shapeColor="green";
      movingRect.shapeColor="green";
    }
    if(rect1.x-rect2.x < rect2.width/2 +rect1.width/2 && 
      rect2.x-rect1.x < rect2.width/2+rect1.width/2 ){
        rect1.velocityX=rect1.velocityX*(-1);
        rect2.velocityX=rect2.velocityX*(-1);
      }

  drawSprites();
}