var form1;
var gamestate = 0;
var game1;
var boy = 0;
var girl = 0;


function preload() {
 
}

function setup() {
form1 = new Form();
game1 = new Game();


  
}

function draw() {
var canvas = createCanvas(displayWidth,displayHeight); 




if (gamestate === 0) {
    form1.display();
   }
  
    if(gamestate === 1) {
    game1.play();
  
  }

     if (keyDown("r")) {
    gamestate = "serve";
     }
    
  if (gamestate === 2) {
    stroke("pink");
    fill("pink");
    strokeWeight(1);
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);

  
  }
    

drawSprites();


}

