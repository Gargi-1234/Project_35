var balloon,balloonImage1,balloonImage2;
var database;
var height;
var girl, girlImg
var redB, blueB, yellowB
var redBImg, blueBImg, yellowBImg
var candyStall, stall1, candyGirl, eatingCandy
var rollerCoster, rollerCosterImg
var ferrisWheel , ferrisWheelImg
var cat, catImg, dog, dogImg
var carsousel, carsouselImg
var people, peopleImg

function preload(){
   bg =loadImage("images/cityImage.png");
   balloonImage1=loadAnimation("images/HotAirBallon01.png");
   balloonImage2=loadAnimation("images/HotAirBallon01.png","images/HotAirBallon01.png",
   "images/HotAirBallon01.png","images/HotAirBallon02.png","images/HotAirBallon02.png",
   "images/HotAirBallon02.png","images/HotAirBallon03.png","images/HotAirBallon03.png","images/HotAirBallon03.png");
   girlImg = loadAnimation("images/girl/1.png","images/girl/1.png","images/girl/2.png",
   "images/girl/2.png","images/girl/3.png","images/girl/3.png","images/girl/4.png",
   "images/girl/4.png","images/girl/5.png","images/girl/5.png","images/girl/6.png","images/girl/6.png")
   rollerCosterImg = loadAnimation("images/rollarcoster/1.png","images/rollarcoster/1.png","images/rollarcoster/2.png","images/rollarcoster/2.png","images/rollarcoster/3.png","images/rollarcoster/3.png",
   "images/rollarcoster/4.png","images/rollarcoster/4.png","images/rollarcoster/5.png","images/rollarcoster/5.png","images/rollarcoster/6.png","images/rollarcoster/7.png","images/rollarcoster/6.png",
   "images/rollarcoster/8.png","images/rollarcoster/8.png","images/rollarcoster/9.png","images/rollarcoster/9.png","images/rollarcoster/10.png","images/rollarcoster/10.png","images/rollarcoster/11.png",
   "images/rollarcoster/11.png","images/rollarcoster/12.png","images/rollarcoster/12.png","images/rollarcoster/13.png","images/rollarcoster/13.png")
    ferrisWheelImg = loadAnimation("images/ferrisWheel/1.png","images/ferrisWheel/1.png","images/ferrisWheel/1.png","images/ferrisWheel/2.png","images/ferrisWheel/2.png","images/ferrisWheel/2.png","images/ferrisWheel/3.png","images/ferrisWheel/3.png",
    "images/ferrisWheel/3.png","images/ferrisWheel/4.png","images/ferrisWheel/4.png","images/ferrisWheel/4.png","images/ferrisWheel/5.png","images/ferrisWheel/5.png","images/ferrisWheel/5.png","images/ferrisWheel/6.png","images/ferrisWheel/6.png","images/ferrisWheel/6.png",
    "images/ferrisWheel/7.png","images/ferrisWheel/7.png","images/ferrisWheel/7.png","images/ferrisWheel/8.png","images/ferrisWheel/8.png","images/ferrisWheel/8.png","images/ferrisWheel/9.png","images/ferrisWheel/9.png","images/ferrisWheel/9.png",
    "images/ferrisWheel/10.png","images/ferrisWheel/10.png","images/ferrisWheel/10.png")
    carsouselImg = loadAnimation("images/carousel/1.png", "images/carousel/1.png", "images/carousel/1.png","images/carousel/2.png","images/carousel/2.png","images/carousel/2.png"
    ,"images/carousel/3.png","images/carousel/3.png","images/carousel/3.png","images/carousel/4.png","images/carousel/4.png","images/carousel/4.png")
    stall1 = loadImage("images/candyStall.png")
    eatingCandy = loadAnimation("images/candy1.png","images/candy1.png","images/candy2.png","images/candy2.png")
    catImg = loadAnimation("images/cat/1.png","images/cat/2.png","images/cat/3.png","images/cat/4.png")
    dogImg = loadAnimation("images/dog/1.png","images/dog/2.png","images/dog/3.png","images/dog/4.png")
    peopleImg = loadAnimation("images/people.png")
    redBImg = loadAnimation("images/redBalloon.png")
    blueBImg = loadAnimation("images/blueBalloon.png")
    yellowBImg = loadAnimation("images/yellowBalloon.png")
  }

//Function to set initial environment
function setup() {

   database=firebase.database();

  createCanvas(1400,700);

  redB = createSprite(1350,400)
  redB.addAnimation("redBalloon",redBImg)
  redB.scale = 2.5
  redB.velocityX = -0.5
  redB.velocityY = -1.9

  blueB = createSprite(350,200)
  blueB.addAnimation("blueBalloon",blueBImg)
  blueB.scale = 2
  blueB.velocityX = -0.5
  blueB.velocityY = -1.9

  yellowB = createSprite(800,300)
  yellowB.addAnimation("yellowBalloon",yellowBImg)
  yellowB.scale = 2.5
  yellowB.velocityX = 0.5
  yellowB.velocityY = -1.9

  rollerCoster = createSprite(350,500,150,150);
  rollerCoster.addAnimation("playing",rollerCosterImg);
  rollerCoster.scale=1.5;

  ferrisWheel = createSprite(900,500,100,100)
  ferrisWheel.addAnimation("rolling",ferrisWheelImg)

  carsousel = createSprite(1200,530)
  carsousel.addAnimation("horses",carsouselImg)
  carsousel.scale = 0.5

  candyStall = createSprite(500,565)
  candyStall.addImage(stall1)
  candyStall.scale = 0.4

  candyGirl = createSprite(650,630)
  candyGirl.addAnimation("cottonCandy",eatingCandy)
  candyGirl.scale = 0.5

  people = createSprite(250,625)
  people.addAnimation("sitting",peopleImg)
  people.scale = 0.5

  cat = createSprite(1800,650)
  cat.addAnimation("blackCat",catImg)
  cat.velocityX = -3
  cat.scale = 0.4

  dog = createSprite(2000,650)
  dog.addAnimation("whiteDog",dogImg)
  dog.velocityX = -3
  dog.scale = 0.5

  girl = createSprite(1500,620,150,150);
  girl.addAnimation("walking",girlImg);
  girl.velocityX = -1.5
  girl.scale=0.5;

  balloon = createSprite(250,650,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  var balloonHeight = database.ref('balloon/height');
  balloonHeight.on("value",readHeight, showError);

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  redB.scale = redB.scale - 0.005 
  blueB.scale = blueB.scale - 0.008 
  yellowB.scale = yellowB.scale - 0.008 

  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale -0.005;
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.scale=balloon.scale+0.005;
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

 function updateHeight(x,y){
   database.ref('balloon/height').set({
     'x': height.x + x ,
     'y': height.y + y
   })
 }


//CHOOSE THE CORRECT READHEIGHT FUNCTION
// function readHeight(data){
//   balloon.x = height.x;
//   balloon.y = height.y;
// }

 function readHeight(data){
   height = data.val();
   balloon.x = height.x;
   balloon.y = height.y;
 }

// function readHeight(data){
//   height = data.val();
// }

// function readHeight(){
//   height = val();
//   balloon.x = height.x;
//   balloon.y = height.y;
// }

function showError(){
  console.log("Error in writing to the database");
}