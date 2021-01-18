const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;


var a, b,c,d,obstacle1,obstacle2,obstacle3,obstacle4,obstacle;
var engine,world;
var x,y,z

function preload(){
    a = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png",
    "walking_4.png","walking_3.png","walking_2.png","walking_1.png")
    c = loadImage("Capture.PNG")

    obstacle1 = loadImage("1.png")

    obstacle2 = loadImage("3.png")

    obstacle3 = loadImage("2.png")

    obstacle4 = loadImage("4.png")

}

function setup(){
    createCanvas(windowWidth,windowHeight)   

    engine = Engine.create();
    world = engine.world;

    b = createSprite(650,470,100,100)
    b.addAnimation("run",a)
    b.scale = 0.3

    d = createSprite(650,720,10000,300)
    d.shapeColor = "darkblue";
 
 
}

function draw(){
    background("black")

    if (frameCount % 20 === 0){
        x = new Rain (100,100,10,10)
        y = new Rain (200,200,10,10)
    }
  

    
   
    spawnLight();
    drawSprites();    
}   

function spawnLight(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(600,165,10,40);
            
       var rand = Math.round(random(1,6));
       switch(rand) {
         case 1: obstacle.addImage(obstacle1);
                 break;
         case 2: obstacle.addImage(obstacle2);
                 break;
         case 3: obstacle.addImage(obstacle3);
                 break;
         case 4: obstacle.addImage(obstacle4);
                 break;
         default:  obstacle.addImage(obstacle2);;
       }     
         
       obstacle.scale = 0.5;
       obstacle.lifetime = 10;
      
  ;
    }}
