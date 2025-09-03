const prompt = require('prompt-sync')({ sigint: true });
var myNumber = prompt("Enter the number to be rounded  ");

console.log("The number you entered was " + myNumber);
console.log("The rounding results for this number are -->");
console.log("Using parseInt      = " + parseInt(myNumber, 10));
console.log("Using Math.ceil     = " + Math.ceil(myNumber));
console.log("Using Math.floor    = " + Math.floor(myNumber));
console.log("Using Math.round    = " + Math.round(myNumber));
       
