const readline = require('readline');
const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
});
var name;
var names = ["David","Cynthia","Raymond","Clayton","Jennifer"];

rl.question('Please enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);

  // Ask another question
  rl.question('What is your favorite color? ', (color) => {
    console.log(`Your favorite color is ${color}.`);

var position = names.indexOf(name);
if (position >= 0) {
   console.log("Found " + name  + " at position " + position);
}
else {
   console.log(name + " not found in array.");
}
    // Close the readline interface
    rl.close();
  });
});



