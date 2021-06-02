/*story: 
alien in forest---gets ready to fly ship---spots ghost---power of ship low---collects food---escapes from ghost
*/

/*to do w/sofiya:
create enemies, correct button n text mistake, add fruits, gameover and blah blah blah 
*/
var bg, bdImg;
var alien, alien_standing_Img, alien_boarding_Img, alien_sitting_Img;
var ghost, ghoatImg;
var invisibleGround;

var button1, button2;

var avacado, avacadoImg, burger, burgerImg, burrito, burritoImg, noodles, noodlesImg, ramen, ramenImg, taco, tacoImg;

var gameState = "START";

function preload(){
bgImg = loadImage("bg.jpg");
ghostImg = loadImage("ghost2.png");

alien_standing_Img = loadImage("alienstanding.png");
alien_boarding_Img = loadImage("alienboarding.png");
alien_sitting_Img = loadImage("aliensitting.png");

button1Img = loadImage("redbutton.png");
button2Img = loadImage("bluebutton.png");

avacadoImg = loadImage("avacado.png");
tacoImg = loadImage("taco.png");
burgerImg = loadImage("burger.png");
burittoImg = loadImage("buritto.png");
noodlesImg = loadImage("noodles.png");
ramenImg = loadImage("ramen.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg = createSprite(displayWidth/2,displayHeight/2-170,200,200);
  bg.addImage(bgImg);
  bg.scale = 0.5;
  
//create player n add image
alien = createSprite(200,displayHeight-130,10,10);

//alien.velocityX = 7;

invisibleGround = createSprite(displayWidth/2,720,displayWidth,10);
invisibleGround.visible = false;

button1 = createSprite(displayWidth-500,displayHeight-200,40,40);
button2 = createSprite(displayWidth-400,displayHeight-200,50,50);

}

function draw() {
  background(bgImg);

  
  if (gameState === "START"){
    alien.addImage(alien_standing_Img);
    alien.scale = 0.7;  

    button1.visible = true;
    button1.addImage(button1Img);
    button1.scale = 0.2;   

    //text to explain the user whta hppns next
    text("Greetings. I'm Ally the alien and I'm on Earthland for some important business but for some reason I find the place I landed, very spooky! Help me get out of here by pressing the space key on your keyboard and collect the food items to boost my spaceship's energy. And remember to avoid the ghosts! Good Luck!",200,200);  
    text("tap the red button and then the blue button to start the game",100,100);

   if(mousePressedOver(button1)){
    gameState ="READY"  
     }
  }


  if(gameState === "READY"){
    alien.addImage(alien_boarding_Img);
    alien.scale = 0.7; 
   
    button1.visible=false;
    button2.visible=true; 
  // button2.addImage(button2Img);
    //  button2.scale = 0.2;

    if(mousePressedOver(button2)){
      gameState = "PLAY"
    }
  }


  if (gameState === "PLAY")
    { 
      button2.visible=false;
      alien.addImage(alien_sitting_Img);
      alien.scale = 0.5; 
      bg.velocityX = -2;

      alien.debug = true;
      alien.setCollider("circle",0,0,100);

        if(bg.x < displayWidth/2-200){
        bg.x  = displayWidth/2 + 250 ;
      }

      //colliding alien with invisble ground
      alien.collide(invisibleGround);

      //press space to move the alien up
      if(keyDown("space")){
        alien.velocityY = -4;
      }

      //gravity o
      alien.velocityY = alien.velocityY + 0.2;
     }
     
  drawSprites();
}

// when pressed space make the monkey jump
