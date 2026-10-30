




function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(0);

  // Style the arc.
  noStroke();
  fill(255, 255, 0);

  // Update start and stop angles.
  let biteSize = PI / 5;
  let startAngle = biteSize * sin(frameCount * 0.2) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // Draw the arc.
  fill(117,50,100)
  arc(250, 250, 100, 100, startAngle, endAngle, PIE);
}


// purple pac man!!!! 