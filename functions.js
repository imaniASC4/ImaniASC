
function rand(num){
var randnum=Math.floor(Math.random()*num);
return randnum;
}


var myCoin =['one','two','three','four','five','six'];
console.log(myCoin[rand(6)]);
