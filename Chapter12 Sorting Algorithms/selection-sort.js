// Helper function to swap two elements in an array
const swap = (arr, indexOne, indexTwo) => {
    let temp = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = temp;
};

// The Selection Sort function
const selectionSort = (arr) => {
    let n = arr.length;

    // Outer loop iterates through each element of the array
    for (let i = 0; i < n - 1; i++) {
        // Assume the current position holds the minimum element
        let minIndex = i;

        // Inner loop finds the actual minimum element in the remaining unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
		// console.log(minIndex);
	//	console.log(arr[j]);
	//	console.log(arr[minIndex]);

            }
        }

        // If the minimum element found is not the current element, swap them
        if (minIndex !== i) {
            swap(arr, i, minIndex);
            // Alternative concise swap using destructuring (ES6+):
            // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
};

// Example Usage in Node.js
const myArray = [64, 25, 12, 22, 11];
console.log("Original array:", myArray);

const sortedArray = selectionSort(myArray);
console.log("Sorted array:", sortedArray);
