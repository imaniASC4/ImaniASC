var x = 0;
var y = 0;
var xspeed=3;
var yspeed = 5;
function setup(){
     createCanvas(500,500);
    background(120,13,100);
    textSize(40);
    fill('black');
    text('welcome to bounce',10,50);
}
function draw(){
    setup();
    if(x+ 10>=500){
        xspeed = -3;
    }
   else if(x<=0){
        xspeed = 3;
    }
    if(y+10 >=500){
yspeed = -5;
    }
    else if(y <=0){
        yspeed = 5;
    }
    x+=xspeed;
    y+=yspeed;
    fill('black');
    ellipse(x,y,10,10);
}