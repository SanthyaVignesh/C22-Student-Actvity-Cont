const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;

var ground;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var groundOption = {
      isStatic : true
  }

  ground = Bodies.rectangle(200,380,400,20,groundOption);
  World.add(myWorld,ground);
  console.log(ground.position.x);
  
}

function draw() {
  background("pink"); 

  Engine.update(myEngine)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

}