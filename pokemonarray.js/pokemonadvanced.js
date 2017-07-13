var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function randletter(array,num){
     var place = Math.floor(Math.random()*num);
    return( console.log(array[place]));
}

randletter(alphabet,alphabet.length);
function randword(alphabet,alphabet.length){
   var wordlength = Math.floor(Math.random()*10);
   var word= [];
for(var w =0; w<wordlength;w++){
word.push(randletter(alphabet,alphabet.length));
}
return word;
var finalword ="";
for(var d=0;d<word.length;d++){
    finalword=finalword+word[d];
}
return finalword;
}

console.log(randletter(alphabet,alphabet.length));

/*
var pokemonone =['zapdos',90,90,85,1];
vaar pokemontwo = ['vaporeon',130,65,60,2];
function pokemonbattle('name',hp,attack,defense,id,'name',hp,attack,defense,id){
if( Math.random()*3==)
var firsttofight =
}*/