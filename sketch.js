const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

 var myEngine,myWorld,ground,ball;

function setup() {
  createCanvas(400,400);
  
  myEngine = Engine.create();

  myWorld = myEngine.world;
  
  var groundOption = { isStatic : true }
  ground = Bodies.rectangle(200,390,400,10,groundOption);

  var ballOption = { restitution: 1 }
  ball = Bodies.circle(200,200,30,ballOption);
  
  World.add(myWorld,ball);

  World.add(myWorld,ground);
  
  console.log(ground);

}

function draw() {
  background(0);  
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y , 400, 10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  Engine.update(myEngine);

  drawSprites();
}