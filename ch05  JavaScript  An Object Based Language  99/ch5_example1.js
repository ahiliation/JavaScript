var myString = "Welcome to Wrox books. " + 
    "The Wrox website is www.wrox.com. " + 
    "Visit the Wrox website today. Thanks for buying Wrox";

var foundAtPosition = 0;
var wroxCount = 0;

while (foundAtPosition != -1) {
    foundAtPosition = myString.indexOf("Wrox", foundAtPosition);
    
    if (foundAtPosition != -1) {
        wroxCount++;
        foundAtPosition++;
    }
}

console.log("There are " + wroxCount + " occurrences of the word Wrox");
