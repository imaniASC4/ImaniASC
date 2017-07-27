var playerHP=100;
var playerGold=100;
var playerLoose =0;
var picx=400;
var picy=400;
function setup(){
$("body").append("<h1> Welcome to ogre valley</h1>");
$("body").append("HP: "+playerHP+" / Gold "+playerGold + " / player Points "+playerLoose);
$("body").append("<img src='https://unsplash.it/"+picx+"'/'"+picy">");
}
$(document).ready(setup);

