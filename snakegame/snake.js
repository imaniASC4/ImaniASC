var xpos=0;
var ypos = 0;
var boxes=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0][0,0,0],[0,0,0]];
var u=0;
var h=0;
 var colors = ['red','white','blue'];
 var width=800;
 var choice = colors[2];
function setup(){
    createCanvas(1300,1300);
    background(120,30,135);

    for(var s = 0; s<boxes.length;s++){
    if(xpos>800){
        ypos+=50;
        xpos=0;
        boxes[s][2]= false;
        boxes[s][1]=ypos;
        boxes[s][0]=xpos;
        fill ('black');
        rect(xpos,ypos,50,50);
        xpos +=50;
    }
    else {
        
        fill('black');
        rect(xpos,ypos,50,50);
        boxes[s][2]= false;
        boxes[s][1]=ypos;
        boxes[s][0]=xpos;
       
        xpos+=50;
    }
}
xpos=0;
ypos = 0;
boxes[0][2]=true;
}
function draw(){

    if(keyIsDown(RIGHT_ARROW)){
        console.log("Right");
        for(var i = 0; i<width;i+=10){
     for(var t=0;t<boxes.length;t++){
         if(i>=boxes[t][0]&&i<=boxes[t][0]){
            
             boxes[t][2]=true;
         }    }
 }
    }
    if(keyIsDown(LEFT_ARROW)){
        console.log("Left");
    

  
       
 for(var i = 0; i<width;i+=10){
     for(var t=0;t<boxes.length;t++){
         if(i>=boxes[t][0]&&i<=boxes[t][0]){
            
             boxes[t][2]=true;
         }
    }
 }}
    

    if(keyIsDown(LEFT_ARROW)){
        console.log("Left arrow pressed.");
for(var i = 0; i<1300;i+=10){
    for(var t=0;t<boxes.length;t++){
        if(i>=boxes[t][1]&&i<=boxes[t][1]){
            
            boxes[t][2]=true;
        }
    }
}
   
   for(var rec = 0; rec < boxes.length;rec++){
       if(boxes[rec][2]==true){
           fill('red');
           rect(xpos,ypos,50,50);
       }

   }
}
}