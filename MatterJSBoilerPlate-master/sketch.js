
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine
var ball
var dustbin
var ground



function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

ground=new Ground(1000,680,2000,20)
dustbin=new Dustbin(1400,670)
ball=new Ball(50,670,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  dustbin.display();

 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) { 
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	 } 
	}


