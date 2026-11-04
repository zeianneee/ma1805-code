

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
  fill(200, 75, 56);
  

  for (let i = 0; i < rectY.length; i++) {
    let x = (i+1)*100; 
    let y = rectY[i]+speed; 
    rect(x, y, 90, 40);
    // Wrap movement 
    if(y>=height){
      y = 0;
    } 
    rectY[i] = y; 
    // Or could us modulus '%' to wrap movement 
    rectY[i] = (y) % height; 
  }


fill(200, 75, 56);
rect(350, 300, 100, 40);

  fill(150, 75, 56);
rect(250, 300, 100, 40);

  fill(200, 75, 56);
rect(150, 300, 100, 40);

   fill(150, 75, 56);
rect(50, 300, 100, 40);

// brick layer 1


  
fill(150, 75, 56);
rect(350, 340, 100, 40);

  fill(200, 75, 56);
rect(250, 340, 100, 40);

  fill(150, 75, 56);
rect(150, 340, 100, 40);

   fill(200, 75, 56);
rect(50, 340, 100, 40);

  // brick layer 2 

  
 fill(200, 75, 56);
rect(350, 380, 100, 40);

  fill(150, 75, 56);
rect(250, 380, 100, 40);

  fill(200, 75, 56);
rect(150, 380, 100, 40);

   fill(150, 75, 56);
rect(50, 380, 100, 40);

// brick layer 3 
}







