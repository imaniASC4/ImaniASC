var ask =require('prompt-sync')();
var masharray = ["dungeon","school","earth","mars","there"];
for (var s = 0; s<masharray.length;s++){
    console.log( (s+1) + masharray[s]);
}
var fightcenter = ask("which center do u choose to fight at? Pick a number 1 through " + masharray.length);
var firstquestion=[0,1,2];
console.log("Welcome to "+ masharray[fightcenter]);
var secondquestion=["luigi","mario"];
var firstanswer = ask("How many times do u wanna strike? (maximum amount of strikes at once is three)");
var secondanswer = ask("Who do u want to fight?");
console.log("You hit "+ secondanswer+ firstquestion[firstanswer] +" times. Too bad, Mewtwo wins.");//whos mewtwo
