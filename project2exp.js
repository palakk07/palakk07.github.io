var screen = 1;

//1
var bg1;

//2
var bg2;

//3
var bg3;
var tab1, tab2, tab3;

function preload() {
  bg1 = loadImage('./images/bg1.png');
  bg2 = loadImage('./images/bg2.png');
  bg3 = loadImage('./images/bg3.png');
  tab1 = loadImage('./images/home_1.png');
  tab2 = loadImage('./images/schedule_1.png');
  tab3 = loadImage('./images/shop_1.png');
  
  // bg3 = createImg('https://palakk07.github.io/images/bg3.png');
  // tab1 = createImg('https://palakk07.github.io/images/home_1.png');
  // tab2 = createImg('https://palakk07.github.io/images/schedule_1.png');
  // tab3 = createImg('https://palakk07.github.io/images/shop_1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  screen1Setup();
}
  
function screen1Setup() {
  // bg3.hide();
  // tab1.hide();
  // tab2.hide();
  // tab3.hide();
}

function draw() {
  if (screen == 1) {
    screen1();
  } else if (screen == 2) {
    screen2();
  } else if (screen == 3) {
    screen3();
  }
}

function screen1() {
  background(bg1);
  
  fill('brown');
  rect(20, height - 80, width - 40, 50, 25);
  rect(20, height - 150, width - 40, 50, 25);
  
  fill('white');
  textSize(32);
  text('Log In', 20, height - 140, width - 40, 50);
  text('Create An Account', 20, height - 70, width - 40, 50);
}

function screen2() {
  background(bg2);
}

function screen3() {
  background(bg3);
  // image(bg3, 0, 0, width, height);
  
  textSize(50);
  fill('brown');
  text('Hot Spot Cafe', 20, 100, width - 40, 50);
  
  textSize(32);
  fill('black');
  text('Till now you have donated 4lbs of used coffee granules', 20, 170, width - 40, 100);
  
  fill('brown');
  rect(20, 300, width - 40, 50, 25);
  
  fill('white');
  text('Schedule Pick Up', 20, 310, width - 40, 50);
  
  image(tab1, width/6, height - 70, 50, 50);
  image(tab2, width/6 + 2*width/3, height - 70, 50, 50);
  image(tab3, width/6 + width/3, height - 70, 50, 50);
}

function touchStarted() {
  if (screen == 1) {
    if (mouseX >= 20 && mouseX <= width - 40 && mouseY >= height - 150 && mouseY >= height - 200) {
      screen = 2;
    }
  } else if (screen == 2) {
    // tab1 = createImg('https://palakk07.github.io/images/home_2.png');
    
      tab1 = loadImage('./images/home_2.png');
      screen = 3;
    }
}
