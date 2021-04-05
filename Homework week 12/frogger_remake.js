//frog
var frogx = 300;
var frogy = 566;
var frogdiameter = 22;

//cars
var carw = 58;
var carh = 28;
var carx = 30;
var carx2 = 260;
var carx3 = 120;
var carx4 = 550;
var carx5 = 395;
var carXspeed;
var carXspeed2;
var carXspeed3;
var carXspeed4;
var carXspeed5;

//logs
var logx = 30;
var logx2 = 260;
var logx3 = 120;
var logx4 = 550;
var logx5 = 395;
var logXspeed;
var logXspeed2;
var logXspeed3;
var logXspeed4;
var logXspeed5;

//lilypad (mouse-click shape)
var lilyX;
var lilyY;

//keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//click event
var clickx;
var clicky;

//world
function setup()
{
  createCanvas(600, 600);
}

function draw()
{
  background(100,100,250);
  noStroke();

  //paint the map
  endgrass();
  water();
  safezones();
  road();

  //draw logs
  logs();

  //draw frog
  frog();

  if (frogx >= 600 || frogx <= 0)
  {
    frogx = 50;
  }

  //draw cars
  cars();

  // car speeds
  carspd();


  // car movement
  carmov();

  // car boundaries
  carbounds();

  // log speeds
  logspd();

  // move the logs left and right
  logmov();

  // if a log exits the screen, appear on the other side
  logbounds();

  // winning sign
  winsign();

  // lily pad
  fill(80,200,100);
  circle(lilyX, lilyY, 35);
}


function endgrass()
{
  fill(150,200,30);
  rect(0,0,width,72);
}

function water()
{
  fill(50,25,125);
  rect(0,72,width,44);
  rect(0,116,width,44);
  rect(0,160,width,44);
  rect(0,204,width,44);
  rect(0,248,width,44);
}

function safezones()
{
  fill(180,50,250);
  rect(0,292,width,44);
  rect(0,556,width,44);
}

function road()
{
  fill(0,0,0);
    rect(0,336,width,44);
    rect(0,380,width,44);
    rect(0,424,width,44);
    rect(0,468,width,44);
    rect(0,512,width,44);
}

function cars()
{
  fill(250,30,100);
  rect(carx,340,carw,carh);
  fill(200,200,200);
  rect(carx2,384,-carw,carh);
  fill(250,20,50);
  rect(carx3,428,carw,carh);
  fill(230,10,70);
  rect(carx4,472,-carw,carh);
  fill(250,200,200);
  rect(carx5,516,carw,carh);
}

function logs()
{
  fill(125,50,10);
  rect(logx,76,-180,carh);
  rect(logx2,120,200,carh);
  rect(logx3,164,-180,carh);
  rect(logx4,208,190,carh);
  rect(logx5,252,-220,carh);
}

function frog()
{
  fill(24, 200, 29);
  square(frogx, frogy, frogdiameter);
}

function mouseClicked()
{
    lilyX = mouseX;
    lilyY = mouseY;
}

function winsign()
{
  if(frogy < 72)
  {
      fill(250,250,250);
      stroke(5);
      textSize(50);
      text("You Made It Across!",100,330);
  }
}

function carspd()
{
  carXspeed = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 5);
  carXspeed2 = Math.floor(Math.random() *       (Math.floor(Math.random() * -5)) - 4);
  carXspeed3 = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 6);
  carXspeed4 = Math.floor(Math.random() *       (Math.floor(Math.random() * -5)) - 4);
  carXspeed5 = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 3);
}

function carmov()
{
  carx += carXspeed;
  carx2 += carXspeed2;
  carx3 += carXspeed3;
  carx4 += carXspeed4;
  carx5 += carXspeed5;
}

function carbounds()
{
  if(carx > 600)
    {
        carx = 0;
    }
    if(carx < 0)
    {
        carx = 600;
    }
    if(carx2 > 600)
    {
        carx2 = 0;
    }
    if(carx2 < 0)
    {
        carx2 = 600;
    }
    if(carx3 > 600)
    {
        carx3 = 0;
    }
    if(carx3 < 0)
    {
        carx3 = 600;
    }
    if(carx4 > 600)
    {
        carx4 = 0;
    }
    if(carx4 < 0)
    {
        carx4 = 600;
    }
    if(carx5 > 600)
    {
        carx5 = 0;
    }
    if(carx5 < 0)
    {
        carx5 = 600;
    }
}

function logspd()
{
  logXspeed = Math.floor(Math.random() *       (Math.floor(Math.random() * -5)) - 1);
  logXspeed2 = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 2);
  logXspeed3 = Math.floor(Math.random() *       (Math.floor(Math.random() * -5)) - 1);
  logXspeed4 = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 2);
  logXspeed5 = Math.floor(Math.random() *       (Math.floor(Math.random() * -5)) - 1);
}

function logmov()
{
    logx += logXspeed;
    logx2 += logXspeed2;
    logx3 += logXspeed3;
    logx4 += logXspeed4;
    logx5 += logXspeed5;
}

function logbounds()
{
    if(logx > 600)
    {
        logx = 0;
    }
    if(logx < 0)
    {
        logx = 600;
    }
    if(logx2 > 600)
    {
        logx2 = 0;
    }
    if(logx2 < 0)
    {
        logx2 = 600;
    }
    if(logx3 > 600)
    {
        logx3 = 0;
    }
    if(logx3 < 0)
    {
        logx3 = 600;
    }
    if(logx4 > 600)
    {
        logx4 = 0;
    }
    if(logx4 < 0)
    {
        logx4 = 600;
    }
    if(logx5 > 600)
    {
        logx5 = 0;
    }
    if(logx5 < 0)
    {
        logx5 = 600;
    }
}

function keyPressed()
{
  if (key == 'd')
  {
    frogx += 44;
  }
  else if (key == 'a')
  {
    frogx -= 44;
  }
  else if (key == 's')
  {
    frogy += 44;
  }
  else if (key == 'w')
  {
    frogy -= 44;
  }
  //don't let the frog escape the bottom of the screen
  else  if (frogy >= 600)
  {
    frogy = 566;
  }

}
