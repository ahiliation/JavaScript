const readline = require('readline');


// Chapter 2, Example 4 (input  and Formula Related)

        // Equation is °C = 5/9 (°F - 32).
      //  var degFahren = prompt("Enter the degrees in Fahrenheit",50);
          var degFahren;
          var degCent;
          

      const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
      });

      
        rl.question('Enter the degrees in Fahrenheit:  ', (degFahren) => {
        degCent = 5/9 * (degFahren - 32); 
	    console.log(`Centigrade:  ${degCent}`);
        rl.close(); // Close the interface when done
        });
    
