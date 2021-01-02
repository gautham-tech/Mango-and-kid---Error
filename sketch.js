
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	kid = new Boy(200,600,50,50);
	kid.shapeColor = color(255);

	tree = new Tree(1000,600,200,200);

	rock = new Stone(200,250,10,10);

	fruit1 = new Mango(400,200,50,50);


	sling = new Slingshot(rock.body,{x : 200, y : 250});


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  kid.display();
  tree.display();
  rock.display();
  fruit1.display();
  sling.display();
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x : mouseX, y : mouseY})
}

function mouseReleased(){
    sling.fly();
}




