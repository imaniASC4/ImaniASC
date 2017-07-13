var prompt = require('prompt-sync')();
var mymoney = prompt("How much money u got?    ");
console.log("Ur budget is   "+ mymoney);
console.log("U have 1 day to spend it");
var sword = ['sword', 10];
var chicken = ['chicken', 1];
var fire = ['fire',2];
var items = [sword,chicken,fire];
while(mymoney > 0){
for (var z = 0;z<items.length;z++){
    console.log("Would u like a "+items[z][0]+ " it costs $" + items[z][1] + "$");     
    }

var choice = prompt("Choose one");

if (choice == items[0][0]){
    if(items[0][1] >mymoney){
        console.log("U broke get outta here");
    }
    else{
    mymoney = mymoney - items[0][1];
    console.log("U have $"+ mymoney + "left");}
}
else if (choice == items[1][0]){
    if(items[1][1]>mymoney){
        console.log("u broke buy somethin else");
    }
    else{
    mymoney = mymoney - items[1][1];
    console.log("U have $"+ mymoney + "left");}
}
else if (choice == items[2][0]){
    if(items[2][1]>mymoney){
        console.log("U broke as hell hope u freeze to death");}
    else{
    mymoney = mymoney - items[2][1];
    console.log("U have $"+ mymoney + "left");}
}
}
console.log("Thanks for ur money");
