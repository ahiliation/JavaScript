var myString = "56.02 degrees centigrade  ";
var myInt;
var myFloat;

console.log(myString + "is  "  + parseInt(myString, 10) + "  as an integer");

myInt = parseInt(myString, 10);
console.log(myString + "when converted to an integer equals " + myInt);

myFloat = parseFloat(myString);
console.log(myString + "when converted to a floating point number equals "+ myFloat);
