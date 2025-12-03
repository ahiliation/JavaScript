function isEven(num) {
   return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
console.log(typeof even);  // debug
if (even) {
   console.log("all numbers are even");
}
else {
   console.log("some numbers are odd");
}
