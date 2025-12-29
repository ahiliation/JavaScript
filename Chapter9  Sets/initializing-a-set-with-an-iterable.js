const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// DEBUG console.log(typeof numbersWithDuplicates);
const uniqueSet = new Set(numbersWithDuplicates);
console.log(uniqueSet); // Output: Set(5) { 1, 2, 3, 4, 5 }
