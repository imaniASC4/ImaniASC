var mypokemonroster =["zapdos", "vaporeon", "Mewtwo","Regigigas","Ho-Oh"];
var firsttofight = mypokemonroster[0];
var secondtofight = mypokemonroster[1];
mypokemonroster.pop();
mypokemonroster.push("Entei");
mypokemonroster.push("chicken");
for(var i=0;i<mypokemonroster.length;i++){
    console.log(mypokemonroster[i]);
}