
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,treeObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload()
{
	boy=loadImage("images/boy.png");

	backgroundImg = loadImage("images/mango.png");
	backgroundImg = loadImage("images/stone.png");
	backgroundImg = loadImage("images/tree.png");	

}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 600, width, 20);
	treeObject = new Tree(1050,580);
	
	mango1 = new Mango(950,200,25);
	mango2 = new Mango(1050,100,25);
	mango3 = new Mango(1200,200,25);
	mango4 = new Mango(1100,150,25);
	mango5 = new Mango(1050,210,25);
	
	Engine.run(engine);
  
}


function draw() {
	//  background("lightgray");
	  background(230); 
	  image(boy ,200,340,200,300); 

	ground.display();
	treeObject.display();
	
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
 
}



