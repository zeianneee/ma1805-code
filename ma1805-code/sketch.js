let winkwink; // careless whisper 
let josh; // josh meme 
let capture;
let hutchinson; // josh meme video 

function preload(){
  winkwink = loadSound("winkwink.mp3");
  josh = loadImage('josh.jpg');
  hutchinson = createVideo('hutchinson.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(300, 400);
  capture.hide();
  
  hutchinson.hide(); // Required to hide HTML vid
  hutchinson.play();
}

function draw() {
  image(josh, 0, 0, windowWidth, windowHeight);
  image(capture, 0, 0, 350, 240);
  filter(POSTERIZE, 3);
   
  image(hutchinson, 0, 0, 400, 600);
}

function mouseClicked(){
  winkwink.loop();
  winkwink.amp(3.5);
  hutchinson.loop(0.2);
}











