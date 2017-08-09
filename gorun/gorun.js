var link= "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=";
var key="ccbffdea6348b2bca7b6bc455c30f96d";
var str="";

$.ajax({
    url:link+key,
    success:function(data){
        dataType:'json',
        str=data.list[0].main.temp;
         console.log(str);
         console.log(data);
    }

})
console.log(str);