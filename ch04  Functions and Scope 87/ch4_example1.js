        function convertToCentigrade(degFahren) {
            var degCent = 5 / 9 * (degFahren - 32);

            return degCent;
        }


        var degFahren = [212, 32, -459.15];
        var degCent = [];
        var loopCounter;

        for (loopCounter = 0; loopCounter <= 2; loopCounter++) {
            degCent[loopCounter] = convertToCentigrade(degFahren[loopCounter]);
        }

        for (loopCounter = 2; loopCounter >= 0; loopCounter--) {
            console.log("Value " + loopCounter +
                           " was " + degFahren[loopCounter] +
                           " degrees Fahrenheit");

            console.log(" which is " + degCent[loopCounter] + 
                           " degrees centigrade");
        }
