
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var tree, treeImage, boy, boyImage;
var dground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stones;
var elastic;

function preload()
{
treeImage = loadImage("tree.png")	
boyImage = loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dground = new Ground();
	stones = new Stone(100, 390, 30);
    mango1 = new Mango(600, 290, 34);
	mango2 = new Mango(855, 325, 35);
	mango3 = new Mango(670, 260, 35);
	mango4 = new Mango(730, 200, 35);
	mango5 = new Mango(710, 320, 36);
	mango6 = new Mango(780, 250, 35);
	mango7 = new Mango(825, 170, 33);
	mango8 = new Mango(880, 260, 35);
	mango9 = new Mango(940, 220, 35);
	mango10 = new Mango(980, 305, 35);
    elastic = new Elastic(stones.body, {x:100, y:480})

	
	
    tree = createSprite(775, 368);
	tree.addImage(treeImage);
	tree.scale = 0.42;

	boy = createSprite(160, 550);
	boy.addImage(boyImage);
	boy.scale = 0.125;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  

  fill("black");
  textSize(18);
  text("Press space to get another chance to play!", 50, 50,)
  drawSprites();
 
  stones.display();
  dground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display()
  elastic.display()

 detectCollision(stones, mango1)
 detectCollision(stones, mango2)
 detectCollision(stones, mango3)
 detectCollision(stones, mango4)
 detectCollision(stones, mango5)
 detectCollision(stones, mango6)
 detectCollision(stones, mango7)
 detectCollision(stones, mango8)
 detectCollision(stones, mango9)
 detectCollision(stones, mango10)
  
}

function mouseDragged() {
	Matter.Body.setPosition(stones.body, {x:mouseX, y:mouseY})
}

function mouseReleased() {
	elastic.fly()
}

function detectCollision(lstones, lmango) {
	if(lstones.body.position.x-lmango.body.position.x<lmango.r+lstones.r
		&& lmango.body.position.x-lstones.body.position.x<lmango.r+lstones.r
		&& lstones.body.position.y-lmango.body.position.y<lmango.r+lstones.r
		&& lmango.body.position.y-lstones.body.position.y<lmango.r+lstones.r) {
        Matter.Body.setStatic(lmango.body, false)
	}
}

function keyPressed() {
	if(keyCode===32) {
		Matter.Body.setPosition(stones.body, {x:325, y:420})
		elastic.attach(stones.body)
	}
}

