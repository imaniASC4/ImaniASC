
var strone = "https:restcountries.eu/rest/v2/alpha?codes=";
var strtwo = "https://randomuser.me/api/";
var countrycode ="";
var fname='';
var lname='';
var countrycap='';
$(document).ready(function(){
$.ajax({
url:strtwo,
dataType: 'json',
success:function(data){
	console.log(data);
	getData(data);
	name(data);
	$('h1').append(countrycode);
	var imgurl =data.results[0].picture.thumbnail;
	$('h2').append('<img src='+ imgurl +'>');
}
});
function getData(chicken){
	countrycode=chicken.results[0].nat;
	$('body').append(countrycode+ ' (');
	
	$.ajax({
url:strone+countrycode,
dataType:'json',
success:function(data){
	countrycap = data[0].capital;
	console.log(data);
	$('body').append( data[0].name+') has the capitol of '+countrycap);
}


	});
}
function name(stuff){
	lname=stuff.results[0].name.last;
$('h1').append(lname+',');
	fname=stuff.results[0].name.first;
$('h1').append(fname+ '  is from');
}

});