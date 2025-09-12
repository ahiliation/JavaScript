var myString = "Hello world!, let's look at boundaries said 007.";

var myRegExp = /\b/g;
myString = myString.replace(myRegExp, "|");
console.log(myString);

/* \b: This is the word boundary metacharacter.
   It is a zero-length assertion, meaning it matches a
   position in the string, not a character. A position
   is considered a word boundary if it meets one of three criteria: */
