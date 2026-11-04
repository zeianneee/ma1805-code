


let i = 0;
let words = ['So','we','back', 'in','the', 'mine', 'got', 'our', 'pickaxe', 'swinging', 'from', 'side', 'to', 'side', 'side','side', 'to', 'side'];
let nums = [    2,       2,     4,       2,  3, 4, 3, 3, 7, 8, 4, 4, 2, 4, 4, 4, 2, 4];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  textSize(50);
  textAlign(CENTER);
  textFont('Courier new');
  fill('palegreen');
  text(words[i], 200, 200);  
  text(nums[i], 200, 255);  
}

function mouseClicked() {
  i++;
  if(i>=words.length){
    i = 0;
  }
}