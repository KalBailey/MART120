//frog
var frogx = 300;
var frogy = 566;
var frogdiameter = 22;

//cars
var carw = 58;
var carh = 28;
var carx = [];
var carx2 = [];
var carx3 = [];
var carx4 = [];
var carx5 = [];
var carXspeed = [];
var carXspeed2 = [];
var carXspeed3 = [];
var carXspeed4 = [];
var carXspeed5 = [];


//logs
var logx = 30;
var logx2 = 74;
var logx3 = 118;
var logx4 = 162;
var logx5 = 206;
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
   for (var i = 0; i < 3; i++) {
    carXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    carXspeed2[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    carXspeed3[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    carXspeed4[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    carXspeed5[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

     carx[i] = getRandomNumber(600);
     carx2[i] = getRandomNumber(600);
     carx3[i] = getRandomNumber(600);
     carx4[i] = getRandomNumber(600);
     carx5[i] = getRandomNumber(600);

    }
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
  fill(250,30,100);
  for (var i = 0; i < carx.length; i++)
  {
  rect(carx[i],340,carw,carh);
  rect(carx2[i],384,carw,carh);
  rect(carx3[i],428,carw,carh);
  rect(carx4[i],472,carw,carh);
  rect(carx5[i],516,carw,carh);
  carXspeed[i] = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 2);
  carXspeed2[i] = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 3);
  carXspeed3[i] = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 1);
  carXspeed4[i] = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 2);
  carXspeed5[i] = Math.floor(Math.random() *       (Math.floor(Math.random() * 5)) + 3);

    carx[i] += carXspeed[i];
    carx2[i] += carXspeed2[i];
    carx3[i] += carXspeed3[i];
    carx4[i] += carXspeed4[i];
    carx5[i] += carXspeed5[i];

    if(carx[i] > 600)
    {
        carx[i] = 0;
    }
    if(carx[i] < 0)
    {
        carx[i] = 600;
    }

    if(carx2[i] > 600)
    {
        carx2[i] = 0;
    }
    if(carx2[i] < 0)
    {
        carx2[i] = 600;
    }

    if(carx3[i] > 600)
    {
        carx3[i] = 0;
    }
    if(carx3[i] < 0)
    {
        carx3[i] = 600;
    }

        if(carx4[i] > 600)
    {
        carx4[i] = 0;
    }
    if(carx4[i] < 0)
    {
        carx4[i] = 600;
    }

    if(carx5[i] > 600)
    {
        carx5[i] = 0;
    }
    if(carx5[i] < 0)
    {
        carx[i] = 600;
    }


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


function logs()
{
  fill(125,50,10);
  rect(logx,76,-180,carh);
  rect(logx2,120,180,carh);
  rect(logx3,164,180,carh);
  rect(logx4,208,180,carh);
  rect(logx5,252,180,carh);
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


function logspd()
{
  logXspeed = Math.floor(Math.random() *       (Math.floor(Math.random() * -2)) - .1);
  logXspeed2 = Math.floor(Math.random() *       (Math.floor(Math.random() * 1)) + 1);
  logXspeed3 = Math.floor(Math.random() *       (Math.floor(Math.random() * -1)) - .1);
  logXspeed4 = Math.floor(Math.random() *       (Math.floor(Math.random() * 4)) + 1);
  logXspeed5 = Math.floor(Math.random() *       (Math.floor(Math.random() * -1)) - .2);
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

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
