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


  //nose
  triangle(125, 200, 200, 150, 225, 200)

  //neck
  rect(220,275,25,75)

  //eyes
  strokeWeight(3)
  fill(255,255,255)
  circle(160, 125, 40)
  point(155,120)
  circle(250, 125, 50)
  point(240,120)
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
  rect(115,335,75,100)
  rect(150,325,200,100)
  rect(290,335,75,100)

  fill(255,170,100)
  textSize(25)
  text('Kal Bailey',165,370)
}
