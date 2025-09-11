var myString = "Paul, Paula, Pauline, paul, Paul";
var myRegExp = /Paul/;

myString = myString.replace(myRegExp, "Ringo");
console.log(myString);

/* The replace method searches a string for a value or a regular expression.
   it returns a new string with the value(s) replaced.
   it does not change the original string. */
