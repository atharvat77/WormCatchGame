
var wormGroup;
var score=0;
var totalWorm=0;
function preload() {
  //load game assets
  bgImage=loadImage("images/swampImg.png");
  wormImage=loadImage("images/worm.png");
  playerImage=loadImage("superman.png");
}


function setup() {
  createCanvas(600,600);
  bg=createSprite(300,300,600,600);
  player = createSprite(40,550,30,30); 

  wormGroup=new Group();
  
  
}

function draw() {

 
 bg.scale=2.5;
 bg.addImage(bgImage);
 

 

 background("black");


 player.x=mouseX;
 player.y=mouseY;
 generateWorms();

 for(var i = 0 ; i< (wormGroup).length ;i++){
  var temp = (wormGroup).get(i) ;
  if (player.isTouching(temp)) {
    score++;
    temp.destroy();
    temp=null;
    }   
  }

  

  textSize(20);
  text("Worms destroyed: "+score,350,50);
  text("Worms missed: "+(totalWorm-score),350,80);

 player.addImage(playerImage);
 player.scale=0.1;
 drawSprites();
 
 
}

function generateWorms()
{
  if(frameCount%30==0)
  {
    console.log(frameCount);
    var worm=createSprite(random(150,400),random(150,400),30,5);
    worm.addImage(wormImage);
    worm.scale=0.2;
    worm.velocityX=random(-4,4);
    worm.velocityY=random(-4,4);
    wormGroup.add(worm);
    totalWorm++;
  }
  
}

