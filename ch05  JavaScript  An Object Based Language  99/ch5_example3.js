const prompt = require('prompt-sync')({ sigint: true });
var myShopping = ["Eggs", "Milk", "Potatoes", "Cereal", "Banana"];

var ord = prompt("Enter 1 for alphabetical order, " +
                 "and -1 for reverse order ");
console.log(ord);

if (ord == 1) {
    myShopping.sort();
    console.log(myShopping.join(""));
} else if (ord == -1) {
    myShopping.sort();
    myShopping.reverse();
    console.log(myShopping.join("."));
} else {
    console.log("That is not a valid input");
}
