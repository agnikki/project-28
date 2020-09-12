
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy_img, boy, mango1, mango2, mango3, mango4, mango5;
var tree, stone, ground, sling;
function preload()
{
boy_img=loadImage('Plucking mangoes/boy.png');	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
tree=new Tree(600,470,300,500);
ground=new Ground(400,695, 800, 10);
mango1=new Mango(500,400,50);
mango2= new Mango(550,300,50);
mango3= new Mango(600,400,50);
mango4= new Mango(700,400,50);
mango5= new Mango(650,300,50);
//boy=Bodies.rectangle(200,200,20,20);
//World.add(world,polygon)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //imageMode(CENTER);
  //image(boy_img,boy.position.x,boy.position.y,40,40);
  drawSprites();
 
}



