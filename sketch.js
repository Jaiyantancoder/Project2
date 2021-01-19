//Variables
var hacker,hacker2,police,lab,code1,decoder,encryted;
var publickey,privatekey;
var gameState = "serve";
var hackerimg,policeimg,labimg,codeimg,decoderimg,encrytedimg;
var publickeyimg,privatekeyimg;
var hacked,hackedimg,won, wonimg;

//create walls
var wall1,wall2,wall3,wall4,wall5;
var wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15;
var wall16,wall17;
var wall18,wall19,wall20,wall21,wall22;
var wall23,wall24,redDoor,blueDoor;
var greenDoor;
var wallGroup;
var laser1,laser2,laser3,laser4;

//create no. of lives
var lives = 5;

function preload(){

hackerimg = loadImage("imgs/hacker.png");
policeimg = loadImage("imgs/policeman.png");
labimg    = loadImage("imgs/lab.jpg");
codeimg  =  loadImage("imgs/code.jpg");
decoderimg  =  loadImage("imgs/decoder.png");
encryptedimg  =  loadImage("imgs/encrypted.png");
publickeyimg  =  loadImage("imgs/house-key.png");
privatekeyimg  =  loadImage("imgs/key.png");
hackedimg     =   loadImage("imgs/hacked.png");
wonimg    =  loadImage("imgs/won.png");
}


function setup(){

createCanvas(400,400);          

//Creating sprites

wallGroup = new Group();

hacked = createSprite(200,200,20,20);
hacked.addImage(hackedimg);
hacked.visible = false;

won = createSprite(200,300,20,20);
won.addImage(wonimg);
won.visible = false;


hacker = createSprite(272,372,25,25);
hacker.addImage(hackerimg);
hacker.scale = 0.07;

hacker2 = createSprite(372,372,25,25);
hacker2.addImage(hackerimg);
hacker2.scale = 0.07;

police = createSprite(255, 275);
police.addImage(policeimg);
police.scale = 0.06;

lab    =  createSprite(290, 70, 20, 20);
lab.addImage(labimg);
lab.scale = 0.06;

code   = createSprite(141,372);
code.addImage(codeimg);
code.scale = 0.1;

decoder = createSprite(200,160);
decoder.addImage(decoderimg);
decoder.scale = 0.07;

encrypted = createSprite(30,370);
encrypted.addImage(encryptedimg);
encrypted.scale = 0.07;

publickey = createSprite(75, 355, 20, 20);
publickey.addImage(publickeyimg);
publickey.scale = 0.03;

privatekey = createSprite(75,135);
privatekey.addImage(privatekeyimg);
privatekey.scale = 0.03;

//create walls
wall1 = createSprite(200, 5, 400, 10);
wall2 = createSprite(200, 395, 400, 10);
wall3 = createSprite(5, 200, 10, 400);
wall4 = createSprite(395, 200, 10, 400);
wall5 = createSprite(50, 250, 10, 300);
wall6 = createSprite(100, 50, 100, 10);
wall7 = createSprite(75, 100, 60, 10);
wall8 = createSprite(100, 175, 10, 160);
wall9 = createSprite(150, 125, 10, 160);
wall10 =  createSprite(100, 350, 10, 110);
wall11 = createSprite(150, 350, 110, 10);
wall12 = createSprite(175, 250, 160, 10);
wall13 = createSprite(145, 275, 10, 60);
wall14 = createSprite(200, 325, 10, 60);
wall15 = createSprite(250, 350, 10, 110);
wall16 = createSprite(200, 200, 110, 10);
wall17 = createSprite(300, 300, 110, 10);
wall18 = createSprite(350, 350, 110, 10);
wall19 = createSprite(350, 175, 10, 260);
wall20 = createSprite(250, 165, 10, 75);
wall21 = createSprite(250, 125, 110, 10);
wall22 = createSprite(200, 65, 10, 130);
wall23 = createSprite(300, 50, 110, 10);
wall24 = createSprite(300, 175, 10, 110);
redDoor = createSprite(350, 375, 10, 60);
blueDoor = createSprite(330, 375, 10, 60);
greenDoor = createSprite(310, 375, 10, 60);


//Create lasers
laser1 = createSprite(75, 345, 40, 3);
laser2 = createSprite(30, 310, 40, 3);
laser3 = createSprite(75, 175, 40, 3);
laser4 = createSprite(175, 115, 40, 3);
laser5 = createSprite(200,372,3,40);

}


function draw(){

background("pink");

fill("red");
text ("x : "+mouseX,300,320);
text ("y : "+mouseY,300,340);

//create no. of lives
  fill("yellow");
  text("lives:"+lives, 215, 220);
  
  
  
  //create text to identify the keys
  fill("red");
  text("data", 20, 335);
  text ("public",61,371);
  text ("key",66,381);
  text("decoder", 170, 185);
  text("private", 55, 160);
  text ("key",65,170);
  text ("code",165,380);
  text ("lab",286,99);

  //create colour for lasers
  laser1.shapeColor = "red";
  laser2.shapeColor = "red";
  laser3.shapeColor = "red";
  laser4.shapeColor = "red";
  laser5.shapeColor = "red";

  //create colour for walls
  wall1.shapeColor = "green";
  wall2.shapeColor=  "green";
  wall3.shapeColor = "green";
  wall4.shapeColor = "green";
  wall5.shapeColor = "green";
  wall6.shapeColor = "green";
  wall7.shapeColor = "green";
  wall8.shapeColor = "green";
  wall9.shapeColor = "green";
  wall10.shapeColor = "green";
  wall11.shapeColor = "green";
  wall12.shapeColor = "green";
  wall13.shapeColor = "green";
  wall14.shapeColor = "green";
  wall15.shapeColor = "green";
  wall16.shapeColor = "green";
  wall17.shapeColor = "green";
  wall18.shapeColor = "green";
  wall19.shapeColor = "green";
  wall20.shapeColor = "green";
  wall21.shapeColor = "green";
  wall22.shapeColor = "green";
  wall23.shapeColor = "green";
  wall24.shapeColor = "green";
  
  
  redDoor.shapeColor = "red";
  blueDoor.shapeColor = "blue";
  greenDoor.shapeColor = "lightgreen";


if(gameState === "play"){
  
//Controlling the hacker  
  if (keyDown("up")) {
    hacker.y = hacker.y-4;
    
  }
  
  
  if (keyDown("down")) {
    hacker.y = hacker.y+4;
    
  }
  
  if (keyDown("left")) {
    hacker.x = hacker.x-4;
    
  }
  
  
  if (keyDown("right")) {
    hacker.x = hacker.x+4;
    
  }
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

  //when hacker touches privatekey
  if (hacker.isTouching(privatekey)) {
    privatekey.visible = false;
    laser2.x = 800;
    laser2.y = 800;
   
  }
  
  //when hacker touches encrypted
  if (hacker.isTouching(encrypted)) {
    encrypted.visible = false;
    laser4.x = 800;
    laser4.y = 800;
    
  }
  
  //when hacke touches code
  if (hacker.isTouching(code)) {
    code.visible = false;
    laser3.x = 800;
    laser3.y = 800;
    
  }
  
//When hacker touches decoder  
  if (hacker.isTouching(decoder)) {
    decoder.visible = false;
   redDoor.velocityY = 2;
   greenDoor.velocityY = 2;
   blueDoor.velocityY = 2;
    
   
  }
//When hacker touches hacker2
  if(hacker.isTouching(hacker2)){
    hacker.velocityX = 0;
    hacker.velocityY = 0;
    police.velocityX = 0;
    gameState="won";
   
  }
//When hacker touches police  
  if(hacker.isTouching(police)){
    
    
    text("lives:", 215, 220);
    
    lives = lives-1; 
    
    reset();
    police.velocityX = 2;
    
    if(lives===0){
      gameState = "over";
    }
  
  }
 
  //when hacker touches lab
  if (hacker.isTouching(lab)) {
    lab.visible = false;
    laser1.x = 800;
    laser1.y = 800;
  }
  
  //when hacker touches public key
  if (hacker.isTouching(publickey)) {
    publickey.visible = false;
     
    laser5.x = 800;
    laser5.y = 800;
    
  }

  //when hacker touches private key
  if (hacker.isTouching(privatekey)) {
    privatekey.visible = false;
     
    laser3.x = 800;
    laser3.y = 800;
    
  }

  if(gameState === "won"){
    hacked.visible = true;
    won.visble = true;
    police.visible = false;
    background("green");
  }
  if(gameState === "over"){
    fill("yellow");
    text("Game Over. Press r to restart.",145,235);
    reset();
  }  
    
  if(keyDown("r") && gameState==="over"){
    gameState = "serve";
    lives = 5;
  }
  if (keyDown("space") && gameState==="serve") {
    reset();
    police.velocityX=2;
    gameState = "play";
  }
  if(gameState==="serve"){
    text("Press Space to Start", 140, 235);
    push ();
    fill("black");
    text("Free the hacker next to you",160,270);
    pop ();
  }
  /*
  //hacker bounces from walls
hacker.bounceOff(wall1);
hacker.bounceOff(wall2);
hacker.bounceOff(wall3);
hacker.bounceOff(wall4);
hacker.bounceOff(wall5);
hacker.bounceOff(wall6);
hacker.bounceOff(wall7);
hacker.bounceOff(wall8);
hacker.bounceOff(wall9);
hacker.bounceOff(wall10);
hacker.bounceOff(wall11);
hacker.bounceOff(wall12);
hacker.bounceOff(wall13);
hacker.bounceOff(wall14);
hacker.bounceOff(wall15);
hacker.bounceOff(wall16);
hacker.bounceOff(wall17);
hacker.bounceOff(wall18);
hacker.bounceOff(wall19);
hacker.bounceOff(wall20);
hacker.bounceOff(wall21);
hacker.bounceOff(wall22);
hacker.bounceOff(wall23);
hacker.bounceOff(wall24);
hacker.bounceOff(redDoor);
hacker.bounceOff(greenDoor);
hacker.bounceOff(blueDoor);
*/
  
  //thief from lasers
  hacker.bounceOff(laser1);
  hacker.bounceOff(laser2);
  hacker.bounceOff(laser3);
  hacker.bounceOff(laser4);
  
  //police bounces from wall19 and wall13
  police.bounceOff(wall19);
  police.bounceOff(wall13);
  
  //display sprites
  drawSprites();
}

function reset(){
  
  hacker.x = 275;
  hacker.y = 370;
  
  police.velocityX = 0;
  
  publickey.visible = true;
  privatekey.visible = true;
  encrypted.visible = true;
  decoder.visible = true;
  code.visible = true;
  lab.visible = true;;

  redDoor.x = 350;
  redDoor.y = 375;
  redDoor.velocityY = 0;
  
  blueDoor.x = 330;
  blueDoor.y = 375;
  blueDoor.velocityY = 0;
  
  greenDoor.x = 310;
  greenDoor.y = 375;
  greenDoor.velocityY = 0;
  
    
  laser1.x = 75;
  laser1.y = 345;
  
  laser2.x = 30;
  laser2.y = 310;
   
  laser3.x = 75;
  laser3.y = 175;

  laser4.x = 175;
  laser4.y = 115;

  laser5.x = 207;
  laser5.y = 372;
}



