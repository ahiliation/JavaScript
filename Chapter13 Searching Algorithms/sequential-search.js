/**
 * Performs a sequential (linear) search on an array.
 * @param {Array} arr The array to search through.
 * @param {*} target The value to search for.
 * @returns {number} The index of the target if found, otherwise -1.
 */
function sequentialSearch(arr, target) {
  // Iterate through the array starting from the first element (index 0)
  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is the target value
    if (arr[i] === target) {
      // If found, return the index immediately
      return i;
    }
  }

  // If the loop completes without finding the target, it means the target is not in the array
  return -1;
}

// Example Usage in Node.js
const numbers = [12, 8, 9, 11, 5, 11];
const targetValue = 11;
const notFoundValue = 100;

console.log(`Array: [${numbers}]`);
console.log(`Target value: ${targetValue}`);
console.log(`Value not in array: ${notFoundValue}`);


// Find a value that exists
const indexFound = sequentialSearch(numbers, targetValue);
if (indexFound !== -1) {
  console.log(`\n${targetValue} found at index: ${indexFound}`);
} else {
  console.log(`\n${targetValue} not found in the array.`);
}


// Try to find a value that does not exist
const indexNotFound = sequentialSearch(numbers, notFoundValue);
if (indexNotFound !== -1) {
  console.log(`${notFoundValue} found at index: ${indexNotFound}`);
} else {
  console.log(`${notFoundValue} not found in the array.`);
}
