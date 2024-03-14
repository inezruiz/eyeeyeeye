let r, g, b; 
var pulseSpeed = 3;
var sizeChange = 0;
var x = 15;
var q = 25;
var w = 35;
let a = 0.0;
let s = 0.0;
var choice = 0;
let angle = 0;
// variable for the video capature
var capture;
// variable where the tracker stores info.
var tracker


// width and height for the camera
var w = 640;
var h = 480;


function setup() {
  
    createCanvas(w, h);
    r = random(255);
    g = random(255);
    b = random(255);
    angleMode(DEGREES)
    // initialisation of the camera
    capture = createCapture(VIDEO);
    capture.size(w, h);
    capture.hide();


    // initialisation of the facetracker
    tracker = new clm.tracker();
    tracker.init();
    tracker.start(capture.elt);
}


function draw() {

   // clear();
  
    // draw the webcam image.
    image(capture, 0, 0, width, height);
  
    // this variable stores all the face points.
    var positions = tracker.getCurrentPosition();

    // function to draw them all for reference
    // drawAllPoints(positions);
  
    // picking one point 
var MiddleEyeLeft = getPositionByIndex(positions,27)
var eyePositionLeft = getPositionByIndex(positions,63);
var eyePositionLeft2 = getPositionByIndex(positions,24); 
var eyePositionLeft3 = getPositionByIndex(positions,64);
var eyePositionLeft4 = getPositionByIndex(positions,66);
var eyePositionLeft5 = getPositionByIndex(positions,26);
var eyePositionLeft6 = getPositionByIndex(positions,65);
var MiddleEyeRight = getPositionByIndex(positions,32)
var eyePositionRight = getPositionByIndex(positions,68);
var eyePositionRight2 = getPositionByIndex(positions,29);
var eyePositionRight3 = getPositionByIndex(positions,67);
var eyePositionRight4 = getPositionByIndex(positions,69);
var eyePositionRight5 = getPositionByIndex(positions,31);
var eyePositionRight6 = getPositionByIndex(positions,70);
var lipUp = getPositionByIndex(positions,60);
var lipDown = getPositionByIndex(positions,57); 
var eyebrowLeft = getPositionByIndex(positions,21);
var eyebrowRight = getPositionByIndex(positions,16);

  if(dist(lipUp.x,lipUp.y,lipDown.x,lipDown.y)<x){
  
  push()
  translate(MiddleEyeLeft)
  angle += 5;
  rotate(angle)
  fill(255,234,0);
  noStroke();
  circle(10,6,6);
  pop();

  push()
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(2255,234,0);
  noStroke();
  circle(10,6,6)
  pop();
  }
  
  else {
  if(dist(lipUp.x,lipUp.y,lipDown.x,lipDown.y)>x){
  fill(255,234,0);
  noStroke();
  circle(MiddleEyeLeft.x,MiddleEyeLeft.y,6)
  
  fill(255,234,0);
  noStroke();
  circle(MiddleEyeRight.x,MiddleEyeRight.y,6)
  
  push()
  translate(MiddleEyeLeft)
  angle += 45;
  rotate(angle)
  fill(r,g,b);
  noStroke();
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(r,g,b);
  circle(10,20,20);
  pop();

  push()
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(r,g,b);
  circle(10,20,20);
  pop();
    
  fill(255,234,0);
  strokeWeight(10);
  stroke(255,234,0);
  circle(MiddleEyeLeft.x,MiddleEyeLeft.y,6)
  
  fill(255,234,0);
  strokeWeight(10);
  stroke(255,234,0);
  circle(MiddleEyeRight.x,MiddleEyeRight.y,6)
  }
    
  if(dist(lipUp.x,lipUp.y,lipDown.x,lipDown.y)>q){
  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(10,6,6);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(10,6,6);
  pop();

  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(20,8,8);
  pop();

  push()
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(20,8,8);
  pop();
    
  push()
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(30,10,10);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(30,10,10);
  pop();
    
  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(40,12,12);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(40,12,12);
  pop();
    
  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(50,14,14);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(50,14,14);
  pop();
    
  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(60,12,12);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(60,12,12);
  pop();
    
  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(70,10,10);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(70,10,10);
  pop();
    
  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(80,8,8);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(r,g,b);
  noStroke();
  circle(80,8,8);
  pop();
    
  push();
  translate(MiddleEyeLeft);
  angle += 15;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(90,6,6);
  pop();

  push();
  translate(MiddleEyeRight);
  angle += 5;
  rotate(angle);
  fill(255,234,0);
  noStroke();
  circle(90,6,6);
  pop();  
  }
    
if(dist(eyebrowRight.x,eyebrowRight.y,eyePositionRight6.x,eyePositionRight6.y)>q){
  
  fill(255,234,0);
  noStroke();
  circle(MiddleEyeRight.x,MiddleEyeRight.y,6)
  ellipse(MiddleEyeRight.x, MiddleEyeRight.y, 20 +           sizeChange, 20 + sizeChange);
  ellipse(MiddleEyeLeft.x, MiddleEyeLeft.y, 20 + sizeChange, 20 + sizeChange);
  sizeChange = sizeChange + pulseSpeed;
if (sizeChange > 15 || sizeChange < -15) { pulseSpeed = pulseSpeed * -1;}

}
}
}








