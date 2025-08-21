const prompt = require('prompt-sync')({ sigint: true }); // { sigint: true } allows Ctrl+C to exit
var greetingString = "Hello";
let myName = prompt('Enter your name: ');
var concatString;
console.log(greetingString + " " + myName);
concatString = greetingString + " " + myName;
console.log(concatString);
