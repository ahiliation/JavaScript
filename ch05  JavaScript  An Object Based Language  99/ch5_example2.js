const prompt = require('prompt-sync')({ sigint: true });

function checkCharType(charToCheck) {
    var returnValue = "O";
    var charCode = charToCheck.charCodeAt(0);
    console.log(charCode);

    if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
        returnValue = "U";
    } else if (charCode >= "a".charCodeAt(0) &&
               charCode <= "z".charCodeAt(0)) {
        returnValue = "L";
    } else if (charCode >= "0".charCodeAt(0) &&
                       charCode <= "9".charCodeAt(0)) {
        returnValue = "N";
    }
        
    return returnValue;
}

var myString = prompt("Enter some text", "Hello World!");

switch (checkCharType(myString)) {
case "U":
    console.log("First character was upper case");
    break;
case "L":
    console.log("First character was lower case");
    break;
case "N":
    console.log("First character was a number");
    break;
default:
    console.log("First character was not a character or a number");
}
