
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



  Engine.run(engine);
}


function draw() {

  background(0);
  


 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {


	}
}


