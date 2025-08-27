        function toCentigrade(degFahren) {
            var degCent = 5 / 9 * (degFahren - 32);

            console.log(degFahren + " Fahrenheit is " +
                           degCent + " Celsius.");
        }

        function toFahrenheit(degCent) {
            var degFahren = 9 / 5 * degCent + 32;

            console.log(degCent + " Celsius is " +
                           degFahren + " Fahrenheit.");
        }

        function convert(converter, temperature) {
            converter(temperature);
        }

        convert(toFahrenheit, 23);
        convert(toCentigrade, 75);
