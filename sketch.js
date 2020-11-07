var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(400, 200, 50, 50);
  gameObject2 = createSprite(600, 200, 50, 50);
  gameObject1.velocityX = 6;
  gameObject2.velocityX = -7;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(touch(movingRect, gameObject2)){  //true/false
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";

  }

  //var y = area();
  bounce(gameObject1,gameObject2);
  drawSprites();
}


/*
ARGUMENTS VS PARAMETERS
Arguments:
  - Real values given to a function to be used
  - Takes memory in the storage

Parameters:
  - Not real values ==> Do not exist
  - Do not take any memory
  - PLACEHOLDERS for arguments



function area(){
  var ar = 22/7 * 10 * 10;

  return ar;
}


return ==> Keyword which gives back a value to the calling function
*/