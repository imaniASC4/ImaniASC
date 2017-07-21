var x = 500;
var y = 650;
var ax =0;
var ay = 100;
var bullets= [];
var enemies=[];
var score =0 ;
var isit = true;
for (var ad = 0; ad<5 ; ad++){
    ax+=100;
    enemies.push([ax,ay]);
    
}
function setup(){
    createCanvas(900,700);
    background('black');
    
}
function  collision(by,enemiey,bx,enemiex){
if(by>=enemiey&&by<=enemiey+100){
    if(bx>=enemiex&&bx<=enemiex+100){
        return true;
    }
}
}
function draw(){
    setup();
   
    
if(keyIsDown(LEFT_ARROW)){
        x-=5;
    }
   else if(keyIsDown(RIGHT_ARROW)){
        x+=5;
    }
    if(enemies.length==0){
        ax = 100;
        ay = 100;
        for (var ad = 0; ad<5; ad++){
    ax+=100;
    enemies.push([ax,ay]);
    
}
    }
for(var rt =0; rt < enemies.length;rt++){
    fill('red');
    
    rect(enemies[rt][0],enemies[rt][1],50,50);

}
for(var t = 0;t<bullets.length; t++){
   bullets[t][1]-=5;
   fill(150,30,160);
 ellipse(bullets[t][0],bullets[t][1],5,5);
 for(var re = 0; re < enemies.length;re++){
if(bullets[t][1]>=enemies[re][1]&&bullets[t][1]<=enemies[re][1]+50){
    if(bullets[t][0]>=enemies[re][0]&&bullets[t][0]<=enemies[re][0]+50){
        score += 200;
           enemies[re][1]=100;
       // }
    
}
}
    fill('blue');
    rect(x,650,25,50);
}
}
for(var qwe = 0; qwe < enemies.length;qwe++){
enemies[qwe][1]+=2;

}
textSize(40);
fill(130,150,80);
text('welcome to wack a space invader',300,50);
fill('white')
text("score  ",50,50 );
text(score,200,50)
fill('blue');
rect(x,650,25,50);
for(var qwe = 0; qwe < enemies.length;qwe++){

if(enemies[qwe][1]>=500){
    fill('red');
    textSize(100);
    text('GAME OVER', 50,200);
    noloop();
}
}
}

function keyPressed(){
    if(keyIsDown(32)){
bullets.push([x+12,y]);

    }
}

if (key == 'r'){
    for (var ad = 0; ad<5 ; ad++){
    ax+=100;
    enemies.push([ax,ay]);
    
}
    draw();
}