const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var s1;

var wall;
var ground;
var left;
var right;
var top_wall;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(200,390,1200,20);
  right = new Ground(790,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,1160,20);
  wall = new Ground(600, 305, 20, 150)

  var ball_options={
  restitution : 0.9  
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  s1 = new Student();
  
}

function draw() {
  background(51);
  Engine.update(engine);
  s1.display();
  ground.display();
  right.display();
  left.display();
  top_wall.display();
  wall.display();
  ellipse(ball.position.x,ball.position.y,20);
}
function keyPressed(){
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.05});   
  }
}
