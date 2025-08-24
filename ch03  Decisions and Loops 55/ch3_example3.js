const prompt = require('prompt-sync')({ sigint: true });

var secretNumber = prompt("Pick a number between 1 and 5:", "");
        secretNumber = parseInt(secretNumber, 10);

        switch (secretNumber) {
            case 1:
                console.log("Too low!");
                break;

            case 2:
                console.log("Too low!");
                break;

            case 3:
                console.log("You guessed the secret number!");
                break;

            case 4:
                console.log("Too high!");
                break;

            case 5:
                console.log("Too high!");
                break;

            default:
                console.log("You did not enter a number between 1 and 5.");
                break;
        }

        console.log("Execution continues here");
