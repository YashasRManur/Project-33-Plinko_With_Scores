var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var divisions = [];
var plinkos = [];
var divisionHeight=300;
var score =0;
var particle;
var count = 5;
var gameState = 1;
function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
    for (var k = 0; k <=width; k = k + 80) {
       divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 25; j <=width; j=j+50){
         plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50){      
         plinkos.push(new Plinko(j,175));
    }
     for (var j = 25; j <=width; j=j+50) {
         plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50){      
         plinkos.push(new Plinko(j,375));
    }
}
function draw() {
  background("black");
  if (score < 3000 && count > 0) {
  textSize(20)
  fill("white")
  text("Score : "+score,20,30);
  text("Turns left : "+count, 675, 20);
  text("x : " + mouseX + " , y : " + mouseY, mouseX , mouseY - 5)
  }
  Engine.update(engine);

      for (var i = 0; i < plinkos.length; i++) {
       plinkos[i].display();
   }

      for (var k = 0; k < divisions.length; k++) {
       divisions[k].display();
   }
   ground.display();

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){

      if(particle.body.position.x < 80){
        score = score + 900;
        particle = null;
      } else if(particle.body.position.x > 81 && particle.body.position.x < 160){
        score = score + 400;
        particle = null;
      } else if(particle.body.position.x > 161 && particle.body.position.x < 240){
        score = score + 500;
        particle = null;
      } else if(particle.body.position.x > 241 && particle.body.position.x < 320){
        score = score + 800;
        particle = null;
      } else if(particle.body.position.x > 321 && particle.body.position.x < 400){
        score = score + 100;
        particle = null;
      } else if(particle.body.position.x > 401 && particle.body.position.x < 480){
        score = score + 1000;
        particle = null;
      } else if(particle.body.position.x > 481 && particle.body.position.x < 560){
        score = score + 300;
        particle = null;
      } else if(particle.body.position.x > 561 && particle.body.position.x < 640){
        score = score + 600;
        particle = null;
      } else if(particle.body.position.x > 641 && particle.body.position.x < 720){
        score = score + 700;
        particle = null;
      } else if(particle.body.position.x > 720){
        score = score + 200;
        particle = null;
      }  
    }
   }
   if (score >= 3000 || count === 0) {
     gameState = 2;
     textSize(100);
     fill("blue");
     text("Game Over", 160, 300)
   }
}

function mousePressed() {
  if (gameState === 1){
  particle = new Particle (mouseX, 10, 10, 10)
  count--;
  }
}