function setup(){
    createCanvas(1000,1000);
background(153);}
var sizes = [100,50,20,10, 200, 40, 5];
var colors = ['blue','red','white', 'orange',10];
function mouseDragged() {
    var choices =[0,1,2];
    fill(colors[Math.floor(Math.random()*colors.length)]);
var choice = choices[Math.floor(Math.random()*choices.length)];
if (choice === 0){
 ellipse(mouseX,mouseY,sizes[Math.floor(Math.random()*sizes.length)],sizes[Math.floor(Math.random()*sizes.length)]);
}
if (choice === 1){
    ellipse(mouseX,mouseY,10,40);
}
if(choice===2){
  rect(mouseX,mouseY,10,10)
}
  return false;
}