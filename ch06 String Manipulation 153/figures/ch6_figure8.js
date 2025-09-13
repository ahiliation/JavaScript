var myString = "JavaScript, VBScript and PHP";
var myRegExp = /\b(VB)?(Java)?Script\b/gi;

myString = myString.replace(myRegExp, "xxxx");
console.log(myString);

/* The regular expression /\\b(VB)?(Java)?Script\\b/gi is used
   to find instances of "JavaScript," "VBScript," "JScript,"
   or simply "Script" as whole words within a text, regardless of case. */
