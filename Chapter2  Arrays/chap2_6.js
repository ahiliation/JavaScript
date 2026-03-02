function isOdd(num) {
  //  console.log(num % 2 == 0);
   return num % 2 != 0;
}

var nums = [1,3,5,7,9];
// var even = nums.every(isEven);
var odd  = nums.every(isOdd);
// console.log(nums);  // debug
if (odd) {
   console.log("all numbers are odd");
}
else {
   console.log("all numbers are not odd");
}
