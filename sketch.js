
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

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
stone=new Stone(200,600,40,40);
mango1=new Mango(500,400,50);
mango2= new Mango(550,300,50);
mango3= new Mango(600,400,50);
mango4= new Mango(700,400,50);
mango5= new Mango(650,300,50);
boy=Bodies.rectangle(200,675,200,200,{isStatic:true});
World.add(world,boy)
sling= new Sling(stone.body,{x:200,y:200});
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
  stone.display();
  imageMode(CENTER);
image(boy_img,boy.position.x,boy.position.y,200,300);
sling.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function detectCollision(lstone,lmango){
 // mangoBodyPosition=lmango.body.position
  //stoneBodyPosition=lstone.body.position;

  //var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(lstone.body.position.x-lmango.body.position.x<stone.width/2+mango1.width/2)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:235, y:420})
    sling.attach(stone.body);
    Matter.Body.setStatic(mango1.body,false);
    Matter.Body.setStatic(mango2.body,false);
    Matter.Body.setStatic(mango3.body,false);
    Matter.Body.setStatic(mango4.body,false);
    Matter.Body.setStatic(mango5.body,false);
  }
}
