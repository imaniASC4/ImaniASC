
var rock=1;
var paper=2;
var sciccor=3;
  var compchoice= Math.random() * (3) + 1;
  var playerchoice = rock;
  if((playerchoice-compchoice)==1){
      console.log("player1 wins");
  }
  else if((playerchoice-compchoice)==2){
      console.log("you lost");
  }
  else if((playerchoice-compchoice)==-1){
      console.log("you lost");
  }
  else if((playerchoice-compchoice)==-2){
      console.log("you won");
  }
  else if((playerchoice-compchoice)==0){
      console.log("tie,play again");
      
  }
