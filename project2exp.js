var screen = 1;
var loginY = 650, signUpFade = 255, signUpFadeFlg = false;
var loginRectFade = 255, loginRectFadeFlg = false; loginTxtFade = 255;
var loginTxt = "Sign In", username, pwd;
var bg;

function setup() {
  createCanvas(414, 896);
  bg = color('blue');
  textSize(40);
  textAlign(CENTER);
  noStroke();
    username = createInput();
    username.position(60, 505);
    username.size(width - 130, 35);
  username.hide();
  username.style('border-style', 'none');
      pwd = createInput('', 'password');
    pwd.position(60, 580);
    pwd.size(width - 130, 35);
  pwd.hide();
  pwd.style('border-style', 'none');
}

function draw() {
  if (screen == 1) {
    screen1();
  }
}

function screen1() {
  background(bg);

  if (signUpFadeFlg) {
    signUpFade -= 10;
  }

  if (loginRectFadeFlg) {
    loginY -= 24;
    loginRectFade -= 10;
    loginTxtFade -= 20;
    if(loginRectFade <= 0) {
      loginRectFadeFlg = false;
      noStroke();
      loginTxt = "Log In";
      loginTxtFade = 255;
      username.show();
      pwd.show();
    }
  }

  fill(255, 255, 255, loginRectFade);
  rect(50, loginY, width - 100, 50, 20);
  fill(0, 0, 0, loginTxtFade);
  text(loginTxt, 50, loginY + 5, width - 100, 50);

  fill(255, 255, 255, signUpFade);
  rect(50, 725, width - 100, 50, 20);
  fill(0, 0, 0, signUpFade);
  text('Sign Up', 50, 730, width - 100, 50);

  fill(0, 0, 0, 255);
  if (loginRectFade <= 0) {
    fill(0, 0, 0);
    text('<', 20, loginY + 30);
    fill(255, 255, 255, 255);
    rect(50, 500, width - 100, 50, 20);
    rect(50, 575, width - 100, 50, 20);
    rect(50, 650, width - 100, 50, 20);
    fill(0, 0, 0);
  text('Log In', 50, 655, width - 100, 50);
  }
}

function touchStarted() {
  if (screen == 1) {
    if (mouseX >= 50 && mouseX <= (50 + width - 100) && mouseY >= loginY && mouseY <= loginY + 50) {
      print("yes");
      signUpFadeFlg = true;
      loginRectFadeFlg = true;
    }
  }
}
