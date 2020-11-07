function touch(pen, time){

    if (pen.x - time.x <= time.width/2 + pen.width/2
      && time.x - pen.x <= time.width/2 + pen.width/2
      && pen.y - time.y <= time.height/2 + pen.height/2
      && time.y - pen.y <= time.height/2 + pen.height/2) {
        //Say TRUE
        return true;
    }
    else {
        //Say FALSE
        return false;
    }
  }
  
  function bounce(pen, time){
      if (pen.x - time.x <= time.width/2 + pen.width/2
        && time.x - pen.x <= time.width/2 + pen.width/2){
          pen.velocityX*=-1;
          time.velocityX*=-1;
          
      }
      if(pen.y - time.y <= time.height/2 + pen.height/2
        && time.y - pen.y <= time.height/2 + pen.height/2){
          pen.velocityY*=-1;
          time.velocityY*=-1;
      }
  }