var bullet,wall;
var speed,weight, thickness;
//var deformation; 

function setup() {
 createCanvas(1600,400);

 thickness = random(22,83);
 speed = random(223,321);
 weight = random(30,52);
 bullet = createSprite(50, 200, 20, 10);
 bullet.shapeColor = "white";

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor= color(80,80,80);
}

function draw() {
  background("black"); 
  bullet.velocityX = speed;

 if(wall.x - bullet.x <(bullet.width + wall.width)/2){
   bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
     bullet.shapeColor = "red";
     wall.shapeColor= "red";
   }

   if(damage<10){
     bullet.shapeColor = "green";
     wall.shapeColor= "green";
   }

 } 

  drawSprites();
}