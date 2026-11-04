




function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);

  // style arc
  noStroke();
  fill(255, 255, 0);

  // start and stop angles
  let biteSize = PI / 7;
  let startAngle = biteSize * sin(frameCount * 0.2) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // arc
  fill(117,50,100)
  arc(120, 250, 200, 200, startAngle, endAngle, PIE);

// purple pac man!!!!

 fill(255,230,121)
square(250, 235, 35, 10);
square(350, 235, 35, 10);
square(450, 235, 35, 10);

  // pellets/pac-dots!

fill(255,255,255)
circle(125, 200, 35);

fill(0,0,0)
ellipse(130, 200, 25, 35);

fill(255,255,255)
circle(123, 190, 5);
  // pac man eye! 
}
