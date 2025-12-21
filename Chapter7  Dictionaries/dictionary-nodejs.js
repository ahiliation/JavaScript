// Create a dictionary using a plain object
let dictionaryObject = {};

// Add key-value pairs
dictionaryObject["language"] = "The method of human communication";
dictionaryObject["computer"] = "A machine that carries out operations automatically";
dictionaryObject.map = "A diagrammatic representation of an area"; // Dot notation works for valid keys

// Access values by key
console.log("Definition of 'computer':", dictionaryObject["computer"]); // Output: A machine that carries out operations automatically
console.log("Definition of 'map':", dictionaryObject.map); // Output: A diagrammatic representation of an area

// Check if a key exists
if (dictionaryObject.hasOwnProperty("language")) {
    console.log("Key 'language' exists.");
}

// Iterate over key-value pairs
console.log("Dictionary entries:");
Object.keys(dictionaryObject).forEach(key => {
    console.log(`${key}: ${dictionaryObject[key]}`);
});
