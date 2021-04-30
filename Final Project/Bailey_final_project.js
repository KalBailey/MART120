var leex = 380;

var chompx = 2000;
var chompXspeed;
var toothY = 449;
var toothDirection = 4;
var toothY2 = 501;
var toothDirection2 = 4;


var a = 65;
var d = 68;
var f = 70;

var cloudx = 360;
var cloudx2 = 440;
var cloudx3 = 520;

var cloudXspeed;
var cloudXspeed2;
var cloudXspeed3;

var flamey = 410;
var flamedia = 20;

var rc = random(200,255);

function setup()
{
  createCanvas(1000,1000);
}

function draw()
{
  background(0);
  noStroke();
  bg();
  clouds();
  cloudspd();
  cloudmov();
  cloudbounds();
  blob();
  fill(230,200,130);
  square(leex,520,10);
  fill(100,50,200);
  rect(leex,530,10,20);
  runmessage();

  //draw chomper
  chompbody();
  chompeye();
  chompteeth();
  chompspd();
  chompmov();
  toothY+= toothDirection;
  if(toothY >= 450 || toothY <= 250)
  {
  toothDirection *= -1;
  }

  toothY2+= toothDirection2;
  if(toothY2 >= 700 || toothY2 <= 500)
  {
  toothDirection2 *= -1;
  }
  end();

  //movement
 if(keyIsDown(a))
 {
     leex -= 2;
 }
 if(keyIsDown(d))
 {
     leex += 2;
 }
}

function bg()
{
  fill(125,100,250);
  rect(350,350,300,300);
  fill(20,100,40);
  rect(350,550,300,100);
}

function blob()
{
  fill(205,200,175);
  rect(500,495,100,55);
  fill(150,130,100);
  rect(520,525,20,20);
  rect(510,510,10,10);
  rect(530,510,10,10);
  fill(175,150,100);
  rect(560,495,40,55);
}

function clouds()
{
  fill(230,230,230);
  rect(cloudx,380,45,35);
  rect(cloudx2,420,55,40);
  rect(cloudx3,400,50,35);
}

function burn()
{
  fill(random(200,255),random(75,150),random(25,50));
  square(random(350,450),flamey,flamedia);
}

function flamespd()
{
  flameYspeed = Math.floor(Math.random() *       (Math.floor(Math.random() * -2)) - .1);
}

function flamemov()
{
  flamey += flameYspeed;
}

function cloudspd()
{
  cloudXspeed = Math.floor(Math.random() *       (Math.floor(Math.random() * 2)) + 1);
  cloudXspeed2 = Math.floor(Math.random() *       (Math.floor(Math.random() * 2)) + 1);
  cloudXspeed3 = Math.floor(Math.random() *       (Math.floor(Math.random() * 2)) + 1);
}

function cloudmov()
{
    cloudx += cloudXspeed;
    cloudx2 += cloudXspeed2;
    cloudx3 += cloudXspeed3;
}

function cloudbounds()
{
    if(cloudx > 600)
    {
        cloudx = 350;
    }
    if(cloudx < 0)
    {
        cloudx = 600;
    }
    if(cloudx2 > 600)
    {
        cloudx2 = 350;
    }
    if(cloudx2 < 0)
    {
        cloudx2 = 600;
    }
    if(cloudx3 > 600)
    {
        cloudx3 = 350;
    }
    if(cloudx3 < 0)
    {
        cloudx3 = 600;
    }
}

function runmessage()
{
  if(leex > 450)
  {
    fill(255,255,255);
    rect(360,360,270,120);
    fill(0,0,0);
    textSize(100);
    text("RUN!",370,450);
  }
}


function chompeye()
{
  fill(255,255,255);
  rect(chompx,100,50,100);
  fill(0,0,0);
  square(chompx,150,25);
}

function chompteeth()
{
  fill(255,255,255);
  rect(chompx,toothY,80,80);
  rect(chompx,toothY2,80,80);
}

function chompbody()
{
  fill(250,150,200);
  rect(chompx,50,2500,800);
}

function chompspd()
{
  chompXspeed = Math.floor(Math.random() *       (Math.floor(Math.random() * -1)) - 4);
}

function chompmov()
{
  chompx += chompXspeed;
}

function end()
{
  if(chompx < 0)
  {
    fill(250,150,200);
    rect(0,50,1000,800);
    fill(0);
    textSize(180);
    text("THE END",100,500);
  }
}
