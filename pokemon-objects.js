function pokemon(name, type,hp, attack, defense,legendary ){
    this.name=name;
    this.type = type;
    this.hp=hp;
    this.defense=defense;
    this.attack=attack;
    this.legendary=legendary;
}
var charzard = new pokemon('charazard','fire',150,140,90,false);
var vaporeon = new pokemon('vaporeon','water',150,90,100,false);
var chicken = new pokemon('chicken', 'wavy',99999999,999999,9999999,true);
var zapdos = new pokemon('zapdos','electric',150,170,180,false);
var pokemons=[charzard,vaporeon,chicken,zapdos];
function printpokemon(myarray){
    for(var y=0;y<myarray.length;y++){
    console.log( myarray[y]);
}
}
printpokemon(pokemons);
function pokemonattacked(pokemon){
    pokemon.hp-=10;
    console.log(pokemon.name + " got attacked. Remaining Hp:  "+ pokemon.hp);

}
for (var rt = 0; rt < pokemons.length; rt++){
pokemonattacked(pokemons[rt]);

}
printpokemon(pokemons);
var attackrandom= require('prompt-sync')();
var attack = attackrandom("How much attack?");
var tritan = Math.floor(Math.random()*pokemons.length);
console.log (tritan);
pokemons[tritan].hp-= attack;
console.log("you attacked "+ pokemons[tritan].name+ " and dealt " + attack + " damage ");
printpokemon(pokemons);

var addpokemon= require('prompt-sync')();
