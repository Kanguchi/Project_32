const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var block1;
var back, backimg;

function preload(){
  backimg = loadImage("background_img.jpg");
}
function setup() {
  
  createCanvas(800,400);
  
  back = createSprite(400, 200, 800, 400);
  back.addImage(backimg);
  back.scale = 1.35;

  engine = Engine.create();
  world = engine.world;

  stand1 = new Ground(300, 330, 250, 15);
  stand2 = new Ground(600, 200, 200, 15);
  
  block1 = new Box(200, 300);

}

function draw() {
  background(0);
  drawSprites();

  stand1.display();
  stand2.display();
  fill(255, 190, 51);
  block1.display();

}