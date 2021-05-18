const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject,groundObject;	
var world;
var launcher;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world=engine.world;
	
	paperObject=new Paper(200,300,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);
	launcher = new Launcher(paperObject.body,{x:200, y:250});

	Engine.run(engine);
 
}
	
	



	//Render.run(render);




function draw() {
  rectMode(CENTER);
  background(230);
 
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  launcher.display();

  
  
 
 drawSprites(); 
  
 
}

function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}





