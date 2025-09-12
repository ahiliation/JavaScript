var myString = "Hello world!, let's look at boundaries said 007.";

var myRegExp = /\b/g;
myString = myString.replace(myRegExp, "|");
console.log(myString);
