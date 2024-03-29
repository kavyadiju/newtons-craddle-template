
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


	bob1=new Bob(100,480,25);
	bob2=new Bob(150,485,25);
	bob3=new Bob(200,490,25);
	bob4=new Bob(250,495,25);
	bob5=new Bob(300,500,25);

	rope1=new Rope(bob1.body,roof.body,-100)
	rope2=new Rope(bob2.body,roof.body,-50)
	rope3=new Rope(bob3.body,roof.body,0)
	rope4=new Rope(bob4.body,roof.body,50)
	rope5=new Rope(bob5.body,roof.body,100)

  Engine.run(engine);
}


function draw() {

  background(0);
	
  roof.display();
	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {


	}
}


