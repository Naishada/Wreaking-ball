//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var ground1;
var boxes = [];
var bob0;
var chain;
function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  //ground
  ground1 = new Ground(400,780,800,25);

  //bob0
  bob0 = new Bob(300,500,60);

  //constraint
  chain = new Rope(bob0.body,{x:300,y:100});
  //box loop
  for(var k = 760 ; k > 350; k = k - 30){
    for(var i = 500 ; i < 760 ; i = i + 30){
      boxes.push(new Box(i,k,30,30));
    }
  }
  Engine.run(engine);
}

function draw() {
  background("grey");  
  //display
  ground1.display();

  bob0.display();

  chain.display();

  for(var j = 0 ; j < boxes.length ; j++){
    boxes[j].display();
  }
}
function mouseDragged(){
  Matter.Body.setPosition(bob0.body,{x:mouseX,y:mouseY});
}
