

// 1. Declare a number called myNumber that is equal to your age

// 2. Declare a string called myName that contains your name

// 3. Declare an array named myArray that contains your age, your first name, and if it's true or false that you're a student

// 4. Write and call a function called printHello that prints your name to the console by accessing myArray

// 5. Write a conditional statement that prints 'true' to the console if 2+2=4

// 6. Write a loop that prints hello to the console 4 times
var mynumber = 16;
var myname = "Imani";
var myarray= [mynumber,myname,true];
function printHello(myArray){
    console.log(myarray[1]);
}
printHello(myarray);
if(2+2 ==4){
    console.log("true");
}
for(var x=0;x<4;x++){
console.log("hello");
}