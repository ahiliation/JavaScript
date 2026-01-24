/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * @param {number[]} arr The array to sort.
 * @returns {number[]} The sorted array.
 */
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  // Outer loop: iterates through the entire array
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // Reset swapped flag at the start of each pass

    // Inner loop: compares and swaps adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements using array destructuring (modern JavaScript)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true; // Mark that a swap occurred
      }
    }

    // Optimization: if no elements were swapped in the inner loop,
    // the array is already sorted, so we can break the outer loop
    if (!swapped) {
      break;
    }
  }
  return arr;
}

// Example Usage in a Node.js script:

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);

const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);

// Another example
const anArray = [5, 1, 4, 2, 8];
console.log("Original array:", anArray);
console.log("Sorted array:", bubbleSort(anArray));
