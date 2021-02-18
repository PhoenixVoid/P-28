
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;

var stone, sling;

var world,boy;

var gameState = "onString";

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(948, 211, 30);
	mango3 = new Mango(1010, 146, 30);
	mango4 = new Mango(1150, 147, 30);
	mango5 = new Mango(1150, 210, 30);
	mango6 = new Mango(1100, 222, 30);
	mango7 = new Mango(1050, 230, 30);
	mango8 = new Mango(1050, 75, 30);

	stone = new Stone(246, 435, 15);

	sling = new Sling( stone.body, { x : 251, y : 438 } )

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

	background(230);

	fill("white");
	stroke("black");
	strokeWeight(5);
	textSize(31)
	text("Press Space for a second chance", 130, 45)
	
	image(boy ,200,340,200,300);

	treeObj.display();

	mango1.display();	
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	stone.display();

	groundObject.display();	

	sling.display();
	
//	fill("black");
//	stroke("black");
//	textSize(20);
//	text("Y :"+mouseX, mouseX, mouseY);

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       sling.attach(stone.body);
    }
}
