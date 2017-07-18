var word = "";
var x= 0;
var ex = 0;
var why = 500;
var score = 0;
var fiat = 0;
var end = "u suck";
var letters = ['a','b','c','d'];
var words = ['hello', 'wats up']
function randword(words){
  return words[Math.floor(Math.random()*words.length)];
}
var final =randword(words);
function pick(l){
chicken = l[Math.floor(Math.random()*l.length)];
return chicken;
}
function setup(){
    createCanvas(1000,1000);
    background(38,78,50);
    textSize(40)
    text('Welcome to typing test. Type what u see',10,50);
    text(final,10,150);
}
function keyTyped(){
    textSize(40);
    word+=key;
    fiat++;
    text(word,30,300);
    if(word!=final.substring(0,fiat)){
        text(end,30,500);
    }
    if(word==final){
        text('you won',500,500);
        word = "";
        setup();
    }
}
 
  /*function draw(){
    ex++;
    background(38,78,50);
    

   
textSize(40);
    text(pick(letters),ex,why);
   textSize(40);
  text('score :  ',50, 200);
  
    
   text("Welcome to typing game",50,50);
  
  
    if (key== chicken){
        ex=0;
      text(pick(letters),ex,why);
    
}
    
}
*/
