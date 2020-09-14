var bullet, wall
var speed, weight
var damage, thickness, rand

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  rand=random(0.001, 10)
  
  bullet=createSprite(50, 200, 75, 25);
  bullet.shapeColor=color(0, 0, 0)
  wall=createSprite(1350,200,thickness,height/2);
  wall.shapeColor=color(80, 80, 80)

  bullet.velocityX=speed

}

function draw() {
  background(0,0,0);  
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX=0
    damage=(rand * weight * speed * speed) / (thickness * thickness * thickness)
    if(damage<150){
      bullet.shapeColor=color(255,255,0)
    }
    if(damage>150 || damage<180){
      bullet.shapeColor=color(0,230,0)
    }
    if(damage>180){
      bullet.shapeColor=color(255,0,0)
    }
  }
  drawSprites();
  //damage()
}

/*function damage() {
 
  if(damage<100){
    bullet.shapeColor(0,255,0)
  }
  if(damage>100 || damage<180){
    bullet.shapeColor(230,230,0)
  }
  if(damage>180){
    bullet.shapeColor(255,0,0)
  }
}*/