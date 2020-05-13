const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,tri1,box2,box3,box4,
box5,tri2,tri3;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   box1=new Box(400,299,200,300);
  tri1=new Triangle(300,150,400,50,500,150);
  
  box2=new Box(600,299,200,200);
  box3=new Box(200,299,200,200);
  
  box4=new Box(50,299,100,300);
  box5=new Box(750,299,100,300)
 
  tri2=new Triangle(0,150,50,50,100,150)

  tri3=new Triangle(700,150,750,50,800,150);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   tri1.display();
   
   box2.display();
   box3.display();

   box4.display();
   box5.display();
  
    tri2.display();
    tri3.display();  
  }