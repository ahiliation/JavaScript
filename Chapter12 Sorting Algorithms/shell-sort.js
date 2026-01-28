function shellSort(arr) {
  const n = arr.length;
  // Start with a large gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Perform insertion sort for elements at the current gap
    for (let i = gap; i < n; i++) {
      // Save the current element to be inserted
      let temp = arr[i];
      // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      // Insert the saved element into its correct position
      arr[j] = temp;
    }
  }
  return arr;
}

// Example Usage in Node.js:
const unsortedArray = [12, 34, 54, 2, 3, 71, 7, 28, 22, 36];
console.log("Original array:", unsortedArray);

const sortedArray = shellSort(unsortedArray);
console.log("Sorted array:", sortedArray);
