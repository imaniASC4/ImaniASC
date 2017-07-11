var mypokemonroster =["zapdos", "vaporeon", "Mewtwo","Regigigas","Ho-Oh"];
var firsttofight = mypokemonroster[0];
var secondtofight = mypokemonroster[1];
mypokemonroster.pop();
//mypokemonroster.push("Entei");
//mypokemonroster.push("chicken");
if(mypokemonroster.length==5){
for(var i=0; i<mypokemonroster.length; i++){
    console.log(mypokemonroster[i]);
}
for(var x= (mypokemonroster.length-1);x == 0 ;x--){
    console.log(mypokemonroster[x]);
}

}
else if(mypokemonroster.length>5){
console.log(" take out some pokemon");
}
else if(mypokemonroster.length <5){
    console.log("add more pokemon ");
}