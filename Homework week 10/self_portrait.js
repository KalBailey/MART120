var txt = 24;
var count = 0;
var txtDirection = 2;

var iaX = 160;
var iaDirection = 4;
var ibX = 250;
var ibDirection = 2;

var shldrY = 335;
var shldrDirection = 2;

var nozX = 125;
var nozY = 200;
var nozDirection = 8;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,170,100);
  strokeWeight(3)

  //hair
  fill(75,50,30)
  rect(140,20,160,175)

  //head
  fill(225,200,175)
  rect(130, 125, 50, 50)
  rect(255, 125, 50, 50)
  rect(150, 50, 125, 225)


  //neck
  rect(220,275,25,75)

  //eyes
  strokeWeight(3)
  fill(255,255,255)
  circle(iaX, 125, 40)
  iaX+= iaDirection;
  if(iaX >= 400 || iaX <= 0)
    {
      iaDirection *= -1;
    }
  point(iaX,125)
  circle(ibX, 125, 50)
  ibX+= ibDirection;
  if(ibX >= 400 || ibX <= 0)
    {
      ibDirection *= -1;
    }
  point(ibX, 125)
  fill(75,50,30)
  rect(135,75,45,20)
  rect(225,70,50,25)

    //mouth
  fill(255,255,255)
  ellipse(220, 222, 75, 8)
  strokeWeight(3)
  line(220,220,220,225)
  line(200,220,200,225)
  line(240,220,240,225)

  //shirt
  strokeWeight(1)
  fill(0,170,255)
      //shoulder(a)
      rect(115,shldrY,75,100)
      shldrY+= shldrDirection;
      if(shldrY >= 375 || shldrY <= 300)
      {
      shldrDirection *= -1;
      }

      //body
      rect(150,325,200,100)

      //shoulder(b)
      rect(290,shldrY,75,100)
      shldrY+= shldrDirection;
      if(shldrY >= 375 || shldrY <= 300)
      {
      shldrDirection *= -1;
      }


  //nose
  fill(225,200,175)
  triangle(nozX, nozY, 200, 150, 225, 200)
  nozX+= nozDirection;
  nozY+= nozDirection;
  if(nozX >= 400 || nozX <= 100)
    {
      nozDirection *= -1
    }
  if(nozY >= 300 || nozY <= 100)
    {
      nozDirection *= -1
    }


  //title
  fill(255,170,100)
  textSize(txt);
  txt+= txtDirection;
  count++;
  if(count > 15)
  {
    txtDirection *=-1;
    count = 0;
  }
  text('Kal Bailey',145,370)
}
