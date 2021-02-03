var x = 50;

// Setup code goes here
function setup() {
  createCanvas(600, 400);
 }

// Draw code goes here
function draw() {
  background(0,255,127);
  triangle(10,10,110,110,10,110);
  quad(200,10,300,50,300,110,200,230);
  rect(50, 200, 100, 50);
  line(380,220,500,200);
  arc(500, 50, 50, 50, 0, 180);
  ellipse(400,50,100,100);
  continued_rect();
}

function continued_rect() {
  for (var i = 0; i < 5; i++){
    rect(20+(x*i),280,50,100-i*10);
  }
}