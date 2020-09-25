
var angle = 0,anglespeed = 0.2;
function preload(){
earthimg = loadImage("5.png");
saturnimg= loadImage("s.png");
merimg = loadImage("3.png");
sunimg = loadImage("1.png");
marsimg = loadImage("4.png");
jupimg = loadImage("2.png");  
venimg = loadImage("venus.png");
nepimg = loadImage("jh.png");
uraimg  = loadImage("uranu.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);

   sun = createSprite(-600,-90,10,10);
   sun.addImage(sunimg);
   sun.scale = 0.5;
}

function draw() {
  background("black"); 
  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(angle);
  angle = angle+anglespeed;
  imageMode(CENTER);
  image(merimg,-200,100,180,80);
  image(venimg,-200,0,80,80)
  image(earthimg,-200,-100,250,150);
  image(marsimg,-200,-200,200,100);
  image(jupimg,-200,-300,200,150)  ;
  image(saturnimg,-200,-430,200,150);
  image(uraimg,-200,-550,120,120);
  image(nepimg,-200,-680,110,110)
  if(frameCount%60 ===0){
    sun.scale = sun.scale+0.3;
  }
 
  drawSprites();
}