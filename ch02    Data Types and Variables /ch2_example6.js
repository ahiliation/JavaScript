const prompt = require('prompt-sync')({ sigint: true }); // { sigint: true } allows Ctrl+C to exit
        // Equation is °C = 5/9 (°F - 32).
var degFahren = prompt("Enter the degrees in Fahrenheit:  ");
        var degCent;
        degCent = 5/9 * (degFahren - 32);
console.log(degFahren + "  Fahrenheit is " + degCent + "  centigrade");
