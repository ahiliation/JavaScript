const prompt = require('prompt-sync')({ sigint: true });
function fix(fixNumber, decimalPlaces) {
var div = Math.pow(10, decimalPlaces);
fixNumber = Math.round(fixNumber * div) / div;
return fixNumber;
}

var number1 = prompt("Enter the number with decimal places you want to fix ");

var number2 = prompt("How many decimal places do you want? ");

console.log(number1 + " fixed to " + number2 + " decimal places is: ");
console.log(fix(number1, number2));
