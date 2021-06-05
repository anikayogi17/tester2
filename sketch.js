const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var snow = [];
var child, childIMG

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  childIMG = loadAnimation("snowproj.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  child = createSprite(500, 300, 150, 150);
  child.addAnimation("childIMG", childIMG)
  child.scale = 0.5
  //child.addImage("snowproj.png")

  //if(frameCount%60===0){
 //   snow.push(new Snow(random(width/2-10, width/2+10),10,10))
  //}

}

function draw() {
  background(backgroundImg);  
  drawSprites();
  child.display()
  if(frameCount%60===0){
    snow.push(new Snow(random(100,700),10,10))
  }
  Engine.update(engine)
  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }
  
}