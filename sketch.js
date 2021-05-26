var  dog1_img;
var dog1;
var bg;
var tk;
var  ground;
function preload(){

dog1_img=loadAnimation("dog1.png","dog2.png");
bg=loadImage("bg.jpg");
tk=loadImage("track.png");
}




function setup() {
  createCanvas(1200,600);
 dog1= createSprite(400,500, 50, 50);
 dog1.addAnimation("dog",dog1_img);
 ground=createSprite(550,570,1200,1200);
 ground.addImage("ground",tk);
 ground.scale=0.5;
 ground.velocityX=-10
 
}

function draw() {
  background(bg); 
  
  if(ground.x<0){
ground.x=1200

  } 
  drawSprites();
}