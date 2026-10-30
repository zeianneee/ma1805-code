
let select = 0;
let rgb = [174, 50, 30];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(select==0){
    rgb = [174, 122, 100];
  }else{
    rgb = [99, 129, 109];
  }
  fill(rgb);
  ellipse(mouseX, mouseY, 50);
}

// colours can paint a tree 

function mouseClicked() {
  if(select==0){
    select=1;
  }else{
    select=0;
  }
  return false;
}