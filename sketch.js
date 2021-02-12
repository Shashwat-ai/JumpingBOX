var canvas;
var music;
var movingBox;
var surface1,surface2,surface3,surface4;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    surface1 = createSprite(100,600,100,50);
    surface1.shapeColor= rgb(0,0,255);
    surface2 = createSprite(200,600,100,50);
    surface2.shapeColor=rgb(255,128,0);
    surface3 = createSprite(300,600,100,50);
    surface3.shapeColor=rgb(153,0,76);
    surface4 = createSprite(400,600,100,50);
    surface4.shapeColor=rgb(0,100,0);
 //create box sprite and give velocity

    movingBox = createSprite(random(20,750),100,40,40);
    movingBox.shapeColor = rgb(255,255,255);
    movingBox.velocityX= 4 ;
    movingBox.velocityY = 9 ;
   
}

function draw() {
  background(rgb(169,169,169));
  edges=createEdgeSprites();
  movingBox.bounceOff(edges);

  if(surface1.isTouching(movingBox) && movingBox.bounceOff(surface1)){
      movingBox.shapeColor = rgb(0,0,255);
      music.play();
  }

  if(surface2.isTouching(movingBox)){
      movingBox.shapeColor = rgb(255,128,0);
      movingBox.velocityX = 0;
     movingBox.velocityY = 0;
      music.stop();
  }

  if(surface3.isTouching(movingBox) && movingBox.bounceOff(surface3)){
      movingBox.shapeColor = rgb(153,0,76);
  }

  if(surface4.isTouching(movingBox) && movingBox.bounceOff(surface4)){
      movingBox.shapeColor = rgb(0,100,0);
    }

    drawSprites();
}
   


