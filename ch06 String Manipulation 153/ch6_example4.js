var text = "He then said 'My Name is O'Connerly, yes " +
    "that's right, O'Connerly'";

console.log("Original: " + text );

var myRegExp = /\B'|'\B/g;
text = text.replace(myRegExp, '"');

console.log("Corrected: " + text);
