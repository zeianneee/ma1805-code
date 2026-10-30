

let rectX = [0, 15, 30];   // save y coords
let rectY = [0, 15, 30];   // save y coords
let speeds = [3, 10, 5.5]; 
let speed = 3; 

function setup() {
  createCanvas(400, 400);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(50);
  fill(255);

  for (let i = 0; i < rectY.length; i++) {
    let x = (i+1)*100; 
    let y = rectY[i]+speed; 
    rect(x, y, 50, 25);
    // Wrap movement 
    if(y>=height){
      y = 0;
    } 
    rectY[i] = y; 
    // Or could us modulus '%' to wrap movement 
    rectY[i] = (y) % height; 
  }
}
