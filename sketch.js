var bullet,wall,speed,weight,damage,thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor="white"
  thickness=random(22,83);
  wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,152);
  bullet.velocityX=speed;
}

function draw(){
  background("black");
 damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(isTouching(bullet,wall)){
  bullet.velocityX=0;
if(damage<10){
  wall.shapeColor="green";
}
 if(damage>10){
  wall.shapeColor="red";
}
 

}
textSize(20)
text("damage="+damage,400,300)
  drawSprites();
}