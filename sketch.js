var player, PSF, PSB, PSS, PWF, PWB, PWS, p2, p2_img;
var bG, bGImg, bGOutside, bGInside;
var player_animation=0;
var topWall, bottomWall, leftWall, rightWall;
var topWall_img, bottomWall_img, leftWall_img, rightWall_img;
var startButton, instButton, backButton, instruction;
var START = 1;
var PLAY = 2;
var END = 3;
var INST = 4;
var gameState;
var thumbnail;
var playerMove;
var houseBottom, houseRoof, houseBottomImg, houseRoofImg, houseDoorIn, houseDoorInImg, houseDoorOut, houseDoorOutImg;
var area, outSide=1,inHouse1=2;
var o1,o2,o3,o4,o5,o6,o7,o8;

function preload(){
  //player_animation
  //player_standing
  PSF=loadAnimation("./Image/Player/PS/PSF.png");
  PSB=loadAnimation("./Image/Player/PS/PSB.png");
  PSS=loadAnimation("./Image/Player/PS/PSS.png");
  //player_walking
  PWF=loadAnimation("./Image/Player/PWF/PWF1.png","./Image/Player/PWF/PWF2.png","./Image/Player/PWF/PWF3.png","./Image/Player/PWF/PWF4.png","./Image/Player/PWF/PWF5.png","./Image/Player/PWF/PWF6.png","./Image/Player/PWF/PWF7.png","./Image/Player/PWF/PWF8.png","./Image/Player/PWF/PWF9.png","./Image/Player/PWF/PWF10.png");
  PWB=loadAnimation("./Image/Player/PWB/PWB1.png","./Image/Player/PWB/PWB2.png","./Image/Player/PWB/PWB3.png","./Image/Player/PWB/PWB4.png","./Image/Player/PWB/PWB5.png","./Image/Player/PWB/PWB6.png","./Image/Player/PWB/PWB7.png","./Image/Player/PWB/PWB8.png","./Image/Player/PWB/PWB9.png","./Image/Player/PWB/PWB10.png");
  PWS=loadAnimation("./Image/Player/PWS/PWS1.png","./Image/Player/PWS/PWS2.png","./Image/Player/PWS/PWS3.png","./Image/Player/PWS/PWS4.png","./Image/Player/PWS/PWS5.png","./Image/Player/PWS/PWS6.png","./Image/Player/PWS/PWS7.png","./Image/Player/PWS/PWS8.png","./Image/Player/PWS/PWS9.png","./Image/Player/PWS/PWS10.png");
  p2_img=loadImage("./Image/Player/P2.png");
  //back_ground
  bGOutside=loadAnimation("./Image/Bg.jpg");
  bGInside=loadAnimation("./Image/Objects/Inhouse.png")
  //wall_img
  rightWall_img=loadImage("./Image/Objects/right-wall.png");
  leftWall_img=loadImage("./Image/Objects/left-wall.png");
  bottomWall_img=loadImage("./Image/Objects/bottom-wall.png");
  topWall_img=loadImage("./Image/Objects/top-wall.png");
  //house
  houseBottomImg=loadImage("./Image/Objects/bottom.png");
  houseRoofImg=loadImage("./Image/Objects/roof.png");
  houseDoorInImg=loadImage("./Image/I-Objects/HouseDoor1.png");
  houseDoorOutImg=loadImage("./Image/I-Objects/HouseDoor2.png");
}

function setup() {
  createCanvas(2000,900);
  //background
  bG=createSprite(0,0,50,50);
  bG.addAnimation("outside",bGOutside);
  bG.addAnimation("inside",bGInside);
  bG.scale=1.5;
  //walls
  rightWall=new Wall(817,0,10,100,rightWall_img);
  leftWall=new Wall(-817,0,10,100,leftWall_img);
  topWall=new Wall(0,-748,10,100,topWall_img);
  bottomWall=new Wall(0,768,10,100,bottomWall_img);
  //back obstacle
  houseBottom=new Obstacle(-300,-150,50,50,houseBottomImg);
  houseDoorIn=new iObstacle(-252,-116,50,50,houseDoorInImg);
  houseDoorOut=new iObstacle(169, 192, 50,50, houseDoorOutImg);
  //house obstacles
  o1=new houseO(-70,120,120,60);
  o2=new houseO(-95,10,100,40);
  o3=new houseO(-155,-115,140,50);
  o4=new houseO(10,-140,82,20);
  o5=new houseO(173,-100,125,30);
  o6=new houseO(270,0,10,280);
  o7=new houseO(-270,0,10,280);
  o8=new houseO(0,210,350,10);
  //player
  player=createSprite(0, 0, 20, 20);
    //player animations
    player.addAnimation("psf",PSF);
    player.addAnimation("psb",PSB);
    player.addAnimation("pss",PSS);
    player.addAnimation("pwf",PWF);
    player.addAnimation("pwb",PWB);
    player.addAnimation("pws",PWS);
  player.scale=2.5;
  p2=createSprite(0, 0, 20, 20);
  p2.addImage(p2_img);
  p2.scale=2.5;
  p2.visible=false;
  //foreobstacle
  houseRoof=new Obstacle(-300,-265,50,50,houseRoofImg);

  thumbnail = createImg("Image/Thumbnail.png", "game title");
  thumbnail.position(20, 69);
  thumbnail.size(2000,900);

  instruction=createElement("h2");
  instruction.position(50,50);
  instruction.style('font-size', '50px');
  instruction.class("inst");

  startButton=createButton("START");
  startButton.position(910,500);
  startButton.size(200,100);
  startButton.class("customButton");

  instButton=createButton("INSTRUCTION");
  instButton.position(815,630);
  instButton.size(400,100);
  instButton.class("customButton2");

  backButton=createButton("back");
  backButton.position(130,800);
  backButton.size(200,100);
  backButton.class("customButton3");

  gameState=START;
}

function draw() {
  if(gameState === INST){
    background("white");
  }else{
    background("black");
  }

  console.log(player.x,player.y);

  if(gameState === START){

    playerMove=false;
    bG.visible=false;
    player.visible=false;
    topWall.hide();
    bottomWall.hide();
    rightWall.hide();
    leftWall.hide();
    backButton.hide();
    houseBottom.hide();
    houseDoorIn.hide();
    houseDoorOut.hide();
    o1.hide();
    o2.hide();
    o3.hide();
    o4.hide();
    o5.hide();
    o7.hide();
    o8.hide();
    o6.hide();

    startButton.mousePressed(()=> {
      startButton.hide();
      instButton.hide();
      thumbnail.hide();
      playerMove=true;
      gameState=PLAY;
      area=outSide;
    });

    instButton.mousePressed(()=> {
      startButton.hide();
      instButton.hide();
      thumbnail.hide();
      backButton.show();
      gameState=INST;
      var message = `
    <div class="title">
    <p>STORY</p>
    </div>
    <div class="line1">
    <p>Theres a village that is surrounded by huge walls.but a boy want to go and explore the <br/>outside world
    so interact with objects and find the clues to go outside the walls</p>
    </div>
    <div class="controls">
    <p>CONTROLS</p>
    </div>
    <div class="line2">
    <p>Use arrow keys to move.
    </br>use space to interact with people and object.
    </br>use space to enter/exit the house through the door.</p>
    </div>
    
    `;
    instruction.html(message);
    });
  }

  if(gameState === INST){

    instruction.show();

    backButton.mousePressed(()=> {
      startButton.show();
      instButton.show();
      thumbnail.show();
      backButton.hide();
      instruction.hide();
      gameState=START;
    });
  }
    
  if(gameState === PLAY){

   camera.x = player.x;
   camera.y = player.y;

   if(area === outSide){
     playerMove=true;
     bG.visible=true;
     bG.changeAnimation("outside",bGOutside);
     player.visible=true;
    //  topWall.show();
    //  bottomWall.show();
    //  rightWall.show();
    //  leftWall.show();
     rightWall.display();
     leftWall.display();
     topWall.display();
     bottomWall.display();
    //  houseBottom.show();
     houseBottom.display();
    //  houseRoof.show();
    //  houseDoorIn.show();
    houseDoorIn.display();
     houseDoorIn.getInHouse1();
     houseDoorOut.hide();
     houseRoof.show();
     o1.hide();
     o2.hide();
     o3.hide();
     o4.hide();
     o5.hide();
     o7.hide();
     o8.hide();
     o6.hide();
     
    }
   if(area === inHouse1){
     bG.changeAnimation("inside",bGInside);
     topWall.hide();
     bottomWall.hide();
     rightWall.hide();
     leftWall.hide();
     backButton.hide();
     houseBottom.hide();
     houseRoof.hide();
     houseDoorIn.hide();
    //  houseDoorOut.show();
    houseDoorOut.show();
    houseDoorOut.getOutHouse1();
    //  o1.show();
    //  o2.show();
    //  o3.show();
    //  o4.show();
    //  o5.show();
     o1.display();
     o2.display();
     o3.display();
     o4.display();
     o5.display();
     o6.display();
     o7.display();
     o8.display();
  }
  playerMovement();
  drawSprites();
  }}

function playerMovement(){

  player.x=p2.x;
  player.y=p2.y-20;

  //playeMovement
  if(playerMove === true){
    if(keyDown("up")){
      p2.y-=5;
      player.changeAnimation("pwb",PWB);
      player_animation=1;
    } else if(keyDown("down")){
      p2.y+=5;
      player.changeAnimation("pwf",PWF);
      player_animation=2;
    } else if(keyDown("right")){
      p2.x+=5;
      player.mirrorX(-1);
      player.changeAnimation("pws",PWS);
      player_animation=3;
    } else if(keyDown("left")){
      p2.x-=5;
      player.mirrorX(1);
      player.changeAnimation("pws",PWS);
      player_animation=4;
    }
    if(!keyDown("up") && player_animation === 1){
      player.changeAnimation("psb",PSB)
    }
    if(!keyDown("down") && player_animation === 2){
      player.changeAnimation("psf",PSF)
    }
    if(!keyDown("right") && player_animation === 3){
      player.mirrorX(-1);
      player.changeAnimation("pss",PSS)
    }
    if(!keyDown("left") && player_animation === 4){
      player.mirrorX(1);
      player.changeAnimation("pss",PSS)
    }
  }
}