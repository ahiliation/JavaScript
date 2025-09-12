var myString = "Hello world!, let's look at boundaries said 007.";

var myRegExp = /\B/g;
myString = myString.replace(myRegExp, "|");
console.log(myString);

/* The regular expression /\B/g in JavaScript matches a position
   that is not a word boundary, applying this check globally
   throughout the string. It is the logical opposite of the \b
   (word boundary) metacharacter. */
