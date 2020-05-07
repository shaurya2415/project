var car, wall;
var speed, weight;
var d


function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50);
  wall = createSprite(1300,200,60,height/2)
  car.velocityX = speed;
  car.shapeColor = "white"
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  
  if(wall.x-car.x<car.width/2 + wall.width/2){
 car.velocityX = 0
    d = (0.5*weight*speed*speed)/22500
    if(d>180){
      car.shapeColor = "red"
    }
    if(d<180 && d>100){
      car.shapeColor = "yellow"
    }
    if(d<100){
      car.shapeColor = "green"
    }
  }
  drawSprites();
}