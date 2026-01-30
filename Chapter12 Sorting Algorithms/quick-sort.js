/**
 * Implements the Quick Sort algorithm
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} The sorted array
 */
function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element (here, we pick the last element for simplicity)
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  // Partition the array into two sub-arrays: left (elements <= pivot) 
  // and right (elements > pivot)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively apply quick sort to the left and right sub-arrays,
  // then combine the results with the pivot in the middle
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example Usage in Node.js
const unsortedArray = [3, 0, 2, 5, -1, 4, 1, 99, 42];
console.log("Original array:", unsortedArray);

const sortedArray = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray);
