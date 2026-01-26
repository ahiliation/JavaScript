function insertionSort(arr) {
  // Start from the second element, as the first element is considered sorted by default
  for (let i = 1; i < arr.length; i++) {
    // Store the current element to insert in its correct position
    let currentElement = arr[i];
    // Start comparing the current element with the sorted portion of the array (elements to the left)
    let j = i - 1;

    // Move elements of the sorted portion that are greater than the current element 
    // one position to the right to make space
      while (j >= 0 && arr[j] > currentElement) {
	//  console.log(j);
	//  console.log(arr[j]);
	//  console.log(currentElement);
	  arr[j + 1] = arr[j];
	//   console.log(arr[j + 1]);
      j--;
    }

    // Insert the current element into its correct position within the sorted portion
    arr[j + 1] = currentElement;
  }
  return arr;
}

// Example Usage
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arrayToSort);

insertionSort(arrayToSort);
console.log("Sorted Array:", arrayToSort);
