var PLAY = 1;
var END = 0;
var gameState = PLAY;

//ash
var ash,ash2,ash3,ash4,ash5;
var ash_right,ash_walk_right;
//james
var james;
var james_image;
//pikachu
var pikachu;
var pikachu_image;
//rattata
var rattata1,rattata2,rattata3,rattata4,rattata5,rattata6,rattata7;
var rattata_image,rattata_flip;
//greninja
var greninja;
//cage
var cage;
var cage_image;
//stage
var stand1,stage1_image,stand2,stage2_image,stand3,stage3_image,stand4,stage4_image,stand5,stage5_image,stand6,stage6_image;
//ladder
var ladder1,ladder2,ladder3,ladder4,ladder5,ladder6,ladder7;
var ladder_image;

//angle
var angle = 45;

// ground
var ground1,ground2,ground3,ground4,ground5,ground6;

function preload(){

// all of the ash images
  ash_right = loadImage("images/right.png");
  ash_walk_right = loadAnimation("images/right_right_foot.png","images/right_left_foot.png");
  ash_left = loadImage("images/left.png");
  ash_walk_left = loadAnimation("images/left_left_foot.png","images/left_right_foot.png");


// all the stages
stage1_image = loadImage("images/stage1.png");


stage2_image = loadImage("images/stage2.png");


stage3_image = loadImage("images/stage3.png");


stage4_image = loadImage("images/stage4.png");

stage5_image = loadImage("images/stage5.png");

stage6_image = loadImage("images/stage6.png");



// all the ladders
ladder_image = loadImage("images/ladder.png");



// all the james images
james_image = loadImage("images/james front.png");


// the pikachu images
pikachu_image = loadAnimation("images/pikachu1.png","images/pikachu2.png","images/pikachu3.png","images/pikachu4.png","images/pikachu5.png","images/pikachu6.png","images/pikachu7.png","images/pikachu8.png","images/pikachu9.png","images/pikachu10.png","images/pikachu11.png","images/pikachu12.png","images/pikachu13.png","images/pikachu14.png","images/pikachu15.png","images/pikachu17.png","images/pikachu17.png");



// all of the rattata images
rattata_image = loadAnimation("images/rattata1.png","images/rattata2.png","images/rattata3.png","images/rattata4.png");
rattata_flip = loadAnimation("images/rattata1_flip.png","images/rattata2_flip.png","images/rattata3_flip.png","images/rattata4_flip.png");


//the greninja images



//the cage image
cage_image = loadImage("images/cage.png");

}

function setup() {
  createCanvas(800,900);
  
  



  // the james sprites
  james = createSprite(230,160,30,30);
  james.addImage("front",james_image);
  james.scale = 0.14;


// the ground

ground1 = createSprite(400,900,790,5);

ground2 = createSprite(350,800,700,5);
ground2.rotation = angle - 42;

ground3 = createSprite(430,655,700,5);
ground3.rotation = angle - 47;


ground4 = createSprite(350,515,700,5);
ground4.rotation = angle - 42;

ground5 = createSprite(430,350,700,5);
ground5.rotation = angle - 47;

//the stands
  stand1 = createSprite(350,800,300,5);
stand1.addImage("stage1", stage1_image);
stand1.scale = 0.5;


stand2 = createSprite(430,650,300,5);
stand2.addImage("stage2", stage2_image);
stand2.scale = 0.75;


stand3 = createSprite(350,510,300,5);
stand3.addImage("stage3", stage3_image);
stand3.scale = 0.75;




stand4 = createSprite(430,350,300,5);
stand4.addImage("stage4", stage4_image);
stand4.scale = 0.75;

stand5 = createSprite(350,220,300,5);
stand5.addImage("stage5", stage5_image);
stand5.scale = 0.75;


stand6 = createSprite(430,100,300,5);
stand6.addImage("stage6", stage6_image);
stand6.scale = 0.75;



// the ladders
ladder1 = createSprite(475,880,10,50);
ladder1.addImage("ladder1",ladder_image);
ladder1.scale = 0.3;

ladder2 = createSprite(200,720,10,50);
ladder2.addImage("ladder2",ladder_image);
ladder2.scale = 0.27;

ladder3 = createSprite(430,580,10,50);
ladder3.addImage("ladder3",ladder_image);
ladder3.scale = 0.27;

ladder4 = createSprite(200,420,10,50);
ladder4.addImage("ladder4",ladder_image);
ladder4.scale = 0.27;

ladder5 = createSprite(475,280,10,50);
ladder5.addImage("ladder5",ladder_image);
ladder5.scale = 0.27;

ladder6 = createSprite(370,100,10,70);
ladder6.addImage("ladder6",ladder_image);
ladder6.scale = 0.36;






// pikachu
pikachu = createSprite(120,130,30,30);
pikachu.addAnimation("pikachu",pikachu_image);
pikachu.scale = 0.13;


//cage
cage = createSprite(120,130,30,30);
cage.addImage("cage",cage_image);
cage.scale = 0.6;


//rattata
rattata1 = createSprite(600,765,30,30);
rattata1.addAnimation("rattata",rattata_image);
rattata1.addAnimation("rattata_flip",rattata_flip);
rattata1.scale = 0.25;
rattata1.velocityX = 1;

rattata2 = createSprite(200,615,30,30);
rattata2.addAnimation("rattata",rattata_image);
rattata2.addAnimation("rattata_flip",rattata_flip);
rattata2.scale = 0.25;
rattata2.velocityX = -1;
rattata2.velocityY = rattata2.velocityY + 0.8;



rattata3 = createSprite(650,590,30,30);
rattata3.addAnimation("rattata",rattata_image);
rattata3.addAnimation("rattata_flip",rattata_flip);
rattata3.scale = 0.25;
rattata3.velocityX = -1;
rattata3.velocityY = rattata3.velocityY + 0.8;

rattata4 = createSprite(230,450,30,30);
rattata4.addAnimation("rattata",rattata_image);
rattata4.addAnimation("rattata_flip",rattata_flip);
rattata4.scale = 0.25;
rattata4.velocityX = -1;
rattata4.velocityY = rattata4.velocityY + 0.8;

rattata5 = createSprite(550,480,30,30);
rattata5.addAnimation("rattata",rattata_image);
rattata5.addAnimation("rattata_flip",rattata_flip);
rattata5.scale = 0.25;
rattata5.velocityX = -1;
rattata5.velocityY = rattata5.velocityY +0.8;

rattata6 = createSprite(320,310,30,30);
rattata6.addAnimation("rattata",rattata_image);
rattata6.addAnimation("rattata_flip",rattata_flip);
rattata6.scale = 0.25;
rattata6.velocityX = -1;
rattata6.velocityY = rattata6.velocityY + 0.8;

rattata7 = createSprite(590,290,30,30);
rattata7.addAnimation("rattata",rattata_image);
rattata7.addAnimation("rattata_flip",rattata_flip);
rattata7.scale = 0.25;
rattata7.velocityX = -1;
rattata7.velocityY = rattata7.velocityY +0.8;


// the ash sprites
ash = createSprite(100, 860, 30, 30);
ash.addImage("right",ash_right);
ash.scale = 0.13;
ash.addAnimation("right_walk",ash_walk_right);
ash.scale = 0.13;
ash.addAnimation("left_walk",ash_walk_left);
ash.scale = 0.13;
ash.addImage("left",ash_left);
ash.scale = 0.13;


}

function draw() {
  background("black");  


  rattata1.collide(ground2);
  rattata2.collide(ground3);
  rattata3.collide(ground3);
  rattata4.collide(ground4);
  rattata5.collide(ground4);
  rattata6.collide(ground5);
  rattata7.collide(ground5);

//ash gravity
  ash.velocityY = ash.velocityY +0.8;

ash.collide(ground1);
 
//rattata moving
if(rattata1.x>590){
  rattata1.changeAnimation("rattata");
  rattata1.velocityX = -1;
 rattata1.velocityY = rattata1.velocityY +0.8; 
 
}

if (rattata1.x<100) {
  rattata1.changeAnimation("rattata_flip");
  rattata1.velocityX = 1;
  rattata1.velocityY = rattata1.velocityY +0.8;
  
} 

if(rattata2.x>450){
  rattata2.changeAnimation("rattata");
  rattata2.velocityX = -1;
 rattata2.velocityY = rattata2.velocityY +0.8; 
 
}

if (rattata2.x<100) {
  rattata2.changeAnimation("rattata_flip");
  rattata2.velocityX = 1;
  rattata2.velocityY = rattata2.velocityY +0.8;
  
} 

if(rattata3.x>700){
  rattata3.changeAnimation("rattata");
  rattata3.velocityX = -1;
 rattata3.velocityY = rattata3.velocityY +0.8; 
 
}

if (rattata3.x<450) {
  rattata3.changeAnimation("rattata_flip");
  rattata3.velocityX = 1;
  rattata3.velocityY = rattata3.velocityY +0.8;
  
} 

if(rattata4.x>420){
  rattata4.changeAnimation("rattata");
  rattata4.velocityX = -1;
 rattata4.velocityY = rattata4.velocityY +0.8; 
 
}

if (rattata4.x<100) {
  rattata4.changeAnimation("rattata_flip");
  rattata4.velocityX = 1;
  rattata4.velocityY = rattata4.velocityY +0.8;
  
} 

if(rattata4.x>420){
  rattata4.changeAnimation("rattata");
  rattata4.velocityX = -1;
 rattata4.velocityY = rattata4.velocityY +0.8; 
 
}

if (rattata5.x<430) {
  rattata5.changeAnimation("rattata_flip");
  rattata5.velocityX = 1;
  rattata5.velocityY = rattata5.velocityY +0.8;
  
} 
if(rattata5.x>680){
  rattata5.changeAnimation("rattata");
  rattata5.velocityX = -1;
 rattata5.velocityY = rattata5.velocityY +0.8; 
 
}

if (rattata6.x<100) {
  rattata6.changeAnimation("rattata_flip");
  rattata6.velocityX = 1;
  rattata6.velocityY = rattata6.velocityY +0.8;
  
} 
if(rattata6.x>420){
  rattata6.changeAnimation("rattata");
  rattata6.velocityX = -1;
 rattata6.velocityY = rattata6.velocityY +0.8; 
 
}

if (rattata7.x<430) {
  rattata7.changeAnimation("rattata_flip");
  rattata7.velocityX = 1;
  rattata7.velocityY = rattata7.velocityY +0.8;
  
} 
if(rattata7.x>750){
  rattata7.changeAnimation("rattata");
  rattata7.velocityX = -1;
 rattata7.velocityY = rattata7.velocityY +0.8; 
 
}



if(keyDown("RIGHT_ARROW")){
  ash.changeAnimation("right_walk");
  ash.animation.play();
  
  ash.velocityX = 2;
}
else{
  ash.changeImage("right");
  
  ash.velocityX = 0;
}

if(keyDown("LEFT_ARROW")){
  ash.changeAnimation("left_walk");
  
  ash.velocityX = -2; 
}






  drawSprites();
}