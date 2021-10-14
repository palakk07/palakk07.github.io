var screen = 1;

//1
var bg1;

function preload() {
  bg1 = createImg('./images/bg1.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  screen1Setup();
}

function screen1Setup() {
  bg1.hide();
}

function draw() {
  if (screen == 1) {
    screen1();
  }
}

function screen1() {
  background(220);
  
  fill('brown');
  rect(20, height - 80, width - 40, 50, 25);
  rect(20, height - 150, width - 40, 50, 25);
  
  fill('white');
  textSize(32);
  text('Log In', 20, height - 140, width - 40, 50);
  text('Create An Account', 20, height - 70, width - 40, 50);
}
