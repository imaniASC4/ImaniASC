
var vaporeon = ['vaporeon',150,90,'water',false];
var picachu= ['picachu',80,70,'electric',false];
var charzard =['charzard',100,59,'fire',true];
var chicken = ['chicken',99999999,999999,'the best food in the world',true];
var zapdos =['zapdos',150,170,'electirc',false];
var pokemon=[vaporeon,picachu,charzard,chicken,zapdos];
function newpokemon (array){
var addarray = require('prompt-sync')();
var nextpokemon = [addarray("pokemon name: ")];
array.push(nextpokemon);
}
newpokemon(pokemon);
for(var e =0; e<pokemon.length;e++){
    console.log("Pokemon #"+ e + pokemon[e]);
}