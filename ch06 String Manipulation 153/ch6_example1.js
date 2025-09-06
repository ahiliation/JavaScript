const prompt = require('prompt-sync')({ sigint: true });
var values = prompt("Please enter a set of comma separated values.",);

function splitAndReverseText(csv) {
    var parts = csv.split(",");
		   //  <br>
		 //   document.write("parts");
    console.log(parts.reverse());
    console.log(parts.join(","));
    var reversedString = parts.join(",");
    if (parts.reverse() == reversedString) {
	console.log ("problem");
    } else {
	console.log("okay");
    }
    console.log("Final..."+reversedString);
}

splitAndReverseText(values);
