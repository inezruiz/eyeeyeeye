
function getPositionByIndex(positions,index){
  let p1 = createVector(0,0);

  if(positions.length >= index){
    p1.x = positions[index][0];          
    p1.y = positions[index][1];          
  }
  
  return p1;
}



function drawAllPoints(positions){
   // looping through all positions.
    for (var i = 0; i < positions.length; i+=1) {      
        // use the coordinates to or calculate things.
        var x = positions[i][0];
        var y = positions[i][1];      

        // uncomment to see the tracking points indexes
        fill(255,255,255);
        text(i,x,y);      
      
        if(i == 27){     
          circle(x,y,6);      
        }
    }
}
