var myString = "Paul, Paula, Pauline, paul, Paul";
var myRegExp = /Paul\W/gi;

myString = myString.replace(myRegExp, "Ringo");
console.log(myString);

/* The JavaScript regular expression /\W/gi is a pattern used
   to find and match all non-word characters in a string, regardless
   of their case. The pattern is broken down into three components: */ 
