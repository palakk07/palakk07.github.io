var screen = 1;

//1
var bg1;

//2
var bg2,username, password;

//3
var bg3;
var tab1, tab2, tab3;

//4
var bg4, bg5, bg6;

//8
var bg8;

//9
var bg9;

function preload() {
  bg1 = loadImage('./images/1.png');
  bg2 = loadImage('./images/2_1.png');
  bg3 = loadImage('./images/3_1.png');
  bg4 = loadImage('./images/4_1.png');
  bg5 = loadImage('./images/5_1.png');
  bg6 = loadImage('./images/6_1.png');
  bg8 = loadImage('./images/8_1.png');
  bg9 = loadImage('./images/9_1.png');
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
//   createCanvas(428, 927);
  textAlign(CENTER);
  screen1Setup();
  username = createInput();
  username.position(40, 325);
  username.size(width - 80, 35);
  username.hide();
  password = createInput('', 'password');
  password.position(40, 440);
  password.size(width - 80, 35);
  password.hide();
}
  
function screen1Setup() {
  // bg3.hide();
  // tab1.hide();
  // tab2.hide();
  // tab3.hide();
}

function draw() {
  switch(screen) {
      case 1:
        screen1();
        break;
        
      case 2:
        screen2();
        break;
        
      case 3:
        screen3();
        break;
        
      case 4:
        screen4();
        break;
        
      case 5:
        screen5();
        break;
      
      case 6:
        screen6();
        break;
        
      case 8:
        screen8();
        break;
      
    case 9:
      screen9();
      break;
        
      default:
        //
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
  password.show();
  password.style('background-color', 'transparent');
  password.style('border', 'none');
  password.style('outline', 'none');
  password.style('color', 'white');
}

function screen3() {
  background(bg3);
  // image(bg3, 0, 0, width, height);
  
  image(tab1, width/6 - 25, height - 70, 50, 50);
  image(tab2, width/6 - 25 + width/3, height - 70, 50, 50);
  image(tab3, width/6 - 25 + 2*width/3, height - 70, 50, 50);
}

function screen4() {
  background(bg4);
  
  image(tab1, width/6 - 25, height - 70, 50, 50);
  image(tab2, width/6 - 25 + width/3, height - 70, 50, 50);
  image(tab3, width/6 - 25 + 2*width/3, height - 70, 50, 50);
}

function screen5() {
  background(bg5);
  
  image(tab1, width/6 - 25, height - 70, 50, 50);
  image(tab2, width/6 - 25 + width/3, height - 70, 50, 50);
  image(tab3, width/6 - 25 + 2*width/3, height - 70, 50, 50);
}

function screen6() {
  image(bg6, 0, 0, width, height);
}

function screen8() {
  background(bg8);
}

function screen9() {
  background(bg9);
  image(tab1, width/6 - 25, height - 70, 50, 50);
  image(tab2, width/6 - 25 + width/3, height - 70, 50, 50);
  image(tab3, width/6 - 25 + 2*width/3, height - 70, 50, 50);
}

function touchStarted() {
  switch (screen) {
      case 1:
          if (mouseX >= 30 && 
              mouseX <= width - 30 && 
              mouseY >= height - 160 && 
              mouseY <= height - 110) {
                screen = 2;
          }
        break;
        
      case 2:
            if (mouseX >= 30 && 
                mouseX <= width - 30 && 
                mouseY >= height - 160 && 
                mouseY <= height - 110) {
                 changeTabs(1);
                  screen = 3; 
                username.hide();
              password.hide();
            } else if (mouseX >= 50 && mouseX <= 65 && mouseY >= 100 && mouseY <= 130) {
                screen = 1;
              username.hide();
              password.hide();
          }
        break;
        
      case 3:
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
          } else if (mouseX >= 40 && 
                     mouseX <= width - 80 && 
                     mouseY >= 305 && 
                     mouseY <= 355) {
                changeTabs(2);
                screen = 4;
          }
        break;  
        
      case 4:
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
          } else if (mouseX >= 50 && 
                     mouseX <= width - 100 && 
                     mouseY >= 360 && 
                     mouseY <= 410) {
              screen = 8;
          } else if (mouseX >= 50 && 
                     mouseX <= width - 100 &&
                     mouseY >= 445 &&
                     mouseY <= 495) {
            screen = 6;
          } else if (mouseX >= 40 && 
                     mouseX <= width - 80 &&
                     mouseY >= height - 150 &&
                     mouseY <= height - 100) {
            screen = 9;
          }
        break;
        
      case 5:
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
        break;
      
       case 6:
        bg4 = loadImage('./images/7_1.png');
        screen = 4;
        break;
        
    case 8:
      screen = 4;
      break;
      
     case 9:
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
        break;
      
    default:
      //
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
