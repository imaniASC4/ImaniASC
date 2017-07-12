var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function randletter(chlamydia,num){
     var place = Math.floor(Math.random()*num);
    return(chlamydia[place]);
}

console.log(randletter(alphabet,alphabet.length));

function randword(d,a){
var words ="";
for(var x=0;x<Math.floor(Math.random()*26);x++){
words = words + randletter(d, a);

}
return words;
}
console.log(randword(alphabet,alphabet.length));

function randsentence(w,s){
var sentence = "";
numwords= Math.floor(Math.random()*s);
for(var words=0;words<numwords;words++){
sentence = sentence+ randword(w,s) + " ";
}
return sentence;
}
console.log(randsentence(alphabet,alphabet.length));