const readline = require('readline');
const rl = readline.createInterface({                                                          input: process.stdin,                                                                output: process.stdout                                                        }); 

rl.on('line', (input) => {
    console.log(`You typed: ${input}`);
   //  console.log("Good Bye");
  //   rl.close();
  //  console.log("Good Bye");
});


// console.log("Good Bye");
