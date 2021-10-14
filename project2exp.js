var screen = 1;

//1
var bg1;

//2
var bg2,username;

//3
var bg3;
var tab1, tab2, tab3;

function preload() {
  bg1 = loadImage('./images/1.png');
  bg2 = loadImage('./images/2.png');
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
  username = createInput();
  username.position(40, 250);
  username.size(width - 80, 35);
  username.hide();
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
  } else if (screen == 4) {
    screen4();
  } else if ( screen == 5) {
    screen5();
  }
}

function screen1() {
  background(bg1);
}

function screen2() {
  background(bg2);
  username.show();
  username.style('background-color', 'transparent');
  username.style('border', 'none');
  username.style('outline', 'none');
  username.style('color', 'white');
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
  
  image(tab1, width/6 - 25, height - 70, 50, 50);
  image(tab2, width/6 - 25 + width/3, height - 70, 50, 50);
  image(tab3, width/6 - 25 + 2*width/3, height - 70, 50, 50);
}

function screen4() {
  background(bg3);
  // image(bg3, 0, 0, width, height);
  
  textSize(50);
  fill('brown');
  text('Hot Spot Cafe', 20, 100, width - 40, 50);
  
  image(tab1, width/6 - 25, height - 70, 50, 50);
  image(tab2, width/6 - 25 + width/3, height - 70, 50, 50);
  image(tab3, width/6 - 25 + 2*width/3, height - 70, 50, 50);
}

function screen5() {
  background(bg3);
  // image(bg3, 0, 0, width, height);
  
  textSize(50);
  fill('brown');
  text('Hot Spot Cafe', 20, 100, width - 40, 50);
  
  image(tab1, width/6 - 25, height - 70, 50, 50);
  image(tab2, width/6 - 25 + width/3, height - 70, 50, 50);
  image(tab3, width/6 - 25 + 2*width/3, height - 70, 50, 50);
}

function touchStarted() {
  if (screen == 1) {
    if (mouseX >= 30 && mouseX <= width - 30 && mouseY >= height - 246 && mouseY <= height - 200) {
      screen = 2;
    }
  } else if (screen == 2) {
      if (mouseX >= 30 && mouseX <= width - 30 && mouseY >= height - 396 && mouseY <= height - 350) {
        changeTabs(1);
        screen = 3; 
      }
    } else if (screen == 3) {
      if (mouseX >= width/6 - 25 + width/3 &&
                mouseX <= width/6 + 25 + width/3 &&
                mouseY >= height - 70 && 
                mouseY <= height - 20) {
        changeTabs(2);
        screen = 4;
      } else if (mouseX >= width/6 - 25 + 2*width/3 &&
                mouseX <= width/6 + 25 + 2*width/3 &&
                mouseY >= height - 70 &&
                mouseY <= height - 20) {
        changeTabs(3);
        screen = 5;
      }
    } else if (screen == 4) {
      if (mouseX >= width/6 - 25 && 
         mouseX <= width/6 + 25 &&
         mouseY >= height - 70 &&
         mouseY <= height - 20) {
        changeTabs(1);
        screen = 3;
      } else if (mouseX >= width/6 - 25 + 2*width/3 &&
                mouseX <= width/6 + 25 + 2*width/3 &&
                mouseY >= height - 70 &&
                mouseY <= height - 20) {
        changeTabs(3);
        screen = 5;
      }
    } else if (screen == 5) {
      if (mouseX >= width/6 - 25 && 
         mouseX <= width/6 + 25 &&
         mouseY >= height - 70 &&
         mouseY <= height - 20) {
        changeTabs(1);
        screen = 3;
      } else if (mouseX >= width/6 - 25 + width/3 &&
                mouseX <= width/6 + 25 + width/3 &&
                mouseY >= height - 70 && 
                mouseY <= height - 20) {
        changeTabs(2);
        screen = 4;
      }
    }
}

function changeTabs(tab) {
   switch (tab) {
    case 1:
        tab1 = loadImage('./images/home_2.png');
        tab2 = loadImage('./images/schedule_1.png')
        tab3 = loadImage('./images/shop_1.png')
       
        // tab1 = createImg('https://palakk07.github.io/images/home_2.png');
        // tab2 = createImg('https://palakk07.github.io/images/schedule_1.png');
        // tab3 = createImg('https://palakk07.github.io/images/shop_1.png');
      break;
    case 2:
        tab1 = loadImage('./images/home_1.png');
        tab2 = loadImage('./images/schedule_2.png')
        tab3 = loadImage('./images/shop_1.png')
       
        // tab1 = createImg('https://palakk07.github.io/images/home_1.png');
        // tab2 = createImg('https://palakk07.github.io/images/schedule_2.png');
        // tab3 = createImg('https://palakk07.github.io/images/shop_1.png');
      break;
    case 3:
        tab1 = loadImage('./images/home_1.png');
        tab2 = loadImage('./images/schedule_1.png')
        tab3 = loadImage('./images/shop_2.png')
       
        // tab1 = createImg('https://palakk07.github.io/images/home_1.png');
        // tab2 = createImg('https://palakk07.github.io/images/schedule_1.png');
        // tab3 = createImg('https://palakk07.github.io/images/shop_2.png');  
      break;
    default:
      //  
  }
}
