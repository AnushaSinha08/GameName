
class Game {
constructor() {}
play(){
for(var i = 30; i < 350; i=i+50) {
    fill("green"); 
  rect(i, 284, 0, 40, 40, i+25);
  }
  for(var j = 60; j < 340; j=j+50) {
    fill("yellow"); 
  rect(j, 224, 0, 40, 30, j+25);
  }
  
  for(var k = 90; k <300; k=k+50) {
    fill("blue"); 
  rect(k,161, 0, 40, 40, k+25);
  }
  
  for(var l = 190; l < 200; l=l+50) {
    fill("red"); 
  rect(l, 110, 0, 40, 40, l+25);
  }
}  
}