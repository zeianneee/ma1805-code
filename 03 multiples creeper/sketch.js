


let i = 0;
let words = ['So','we','back', 'in','the', 'mine', 'got', 'our', 'pickaxe', 'swinging', 'from', 'side', 'to', 'side', 'side','side', 'to', 'side'];
let nums = [    96,       97,     98,       99,  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113];

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