var names = ["David","Mike","Cynthia","Raymond","Clayton","Mike","Jennifer"];
var name = "Davi";
var firstPos = names.indexOf(name);
if (firstPos = -1) {
    console.log("Given name not found in the array");
}
else
{
// console.log(typeof firstPos);
console.log("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos);
    }
