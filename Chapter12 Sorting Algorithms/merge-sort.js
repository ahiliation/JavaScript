/**
 * The main merge sort function that recursively divides the array.
 * @param {Array<number>} arr The array to sort.
 * @returns {Array<number>} The sorted array.
 */
function mergeSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted.
  if (arr.length <= 1) {
    return arr;
  }

  // Divide the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort both halves and then merge the results
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges two sorted arrays into a single sorted array.
 * @param {Array<number>} left The left sorted array.
 * @param {Array<number>} right The right sorted array.
 * @returns {Array<number>} The combined sorted array.
 */
function merge(left, right) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller element to the result array
   while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // Move to the next element in the left array
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // Move to the next element in the right array
    }
  }

  // Concatenate the remaining elements from either the left or right array,
  // as they are already sorted and greater than all elements in resultArray
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

// Example usage in Node.js
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);

console.log("Unsorted array:", unsortedArray);
console.log("Sorted array:", sortedArray);
