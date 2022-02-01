
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var right;
var left;
var cesta;
var gamestate = "play";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var ball_options = {
    isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
	};
    var ground_options = {
      isStatic: true
	};
	engine = Engine.create();
	world = engine.world;
	
    //cesta = createSprite(500, 650, 120, 15);

	//Create the Bodies Here.
    ball = Bodies.circle(100, 650, 15, ball_options);
    World.add(world, ball);

    ground = Bodies.rectangle(400, 700, 820, 15, ground_options);
	World.add(world, ground);

	left = Bodies.rectangle(450, 660, 15, 120, ground_options);
	World.add(world, left);

	right = Bodies.rectangle(550, 660, 15, 120, ground_options);
	World.add(world, right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background('orange');

  fill('blue');
  stroke('pink');
  ellipse(ball.position.x, ball.position.y, 15);

  fill('brown');
  stroke('darkgreen');
  rect(ground.position.x, ground.position.y, 820, 15);

  stroke('gold');
  fill('red');
  rect(left.position.x, left.position.y, 15, 120);
  rect(right.position.x, right.position.y, 15, 120);
  /*if(cesta.isTouching(ball)){
	  gamestate = "won";
	  fill('gold');
	  stroke('yellow');
	  text("Parabéns!", 400, 350);
	  fill('cyan')
	  stroke('lightblue')
	  text("Clique Para Jogar De Novo!", 400, 375);
  }*/
  if(ball.position.x > 815 || ball.position.x < -15){
	  gamestate = "gameover";
	  textSize(35);
	  fill('red');
	  stroke('darkred');
	  text("Fim De Jogo.", 350, 350);
	  fill('cyan')
	  stroke('green')
	  //text("Clique Para Tentar De Novo!", 350, 385);
  }
  console.log(gamestate);
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode == UP_ARROW){
	  Matter.Body.applyForce(ball, {x:0,y:0}, {x:3, y:-8.05});
  }
  //if(gamestate == "gameover"&&keyCode == UP_ARROW){
  //    reset();
  //}
}

//function mousePressed(){
//	
//}

function reset(){
	gamestate = "play";
	ball.position.x = 100;
	ball.position.y = 650;
}
