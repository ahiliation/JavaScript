/**
 * Finds the index of the first occurrence of a target in a sorted array.
 * @param {number[]} arr - The sorted array.
 * @param {number} target - The element to search for.
 * @returns {number} The index of the first occurrence, or -1 if not found.
 */
function findFirstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let firstPos = -1;

    while (left <= right) {
        // Calculate mid to prevent potential overflow (though less likely in JS)
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            firstPos = mid;
            // Key part: continue searching to the left for an earlier occurrence
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return firstPos;
}

/**
 * Finds the index of the last occurrence of a target in a sorted array.
 * @param {number[]} arr - The sorted array.
 * @param {number} target - The element to search for.
 * @returns {number} The index of the last occurrence, or -1 if not found.
 */
function findLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let lastPos = -1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            lastPos = mid;
            // Key part: continue searching to the right for a later occurrence
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return lastPos;
}

/**
 * Counts the total occurrences of a target in a sorted array.
 * @param {number[]} arr - The sorted array.
 * @param {number} target - The element to count.
 * @returns {number} The number of occurrences.
 */
function countOccurrences(arr, target) {
    const first = findFirstOccurrence(arr, target);

    // If the first occurrence wasn't found, the element is not in the array
    if (first === -1) {
        return 0;
    }

    const last = findLastOccurrence(arr, target);

    // The count is the range between the first and last positions, inclusive
    return last - first + 1;
}

// --- Example Usage ---
const sortedArray = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7];
const targetValue = 5;
const occurrences = countOccurrences(sortedArray, targetValue);

console.log(`Array: [${sortedArray}]`);
console.log(`Target element: ${targetValue}`);
console.log(`Number of occurrences: ${occurrences}`);

// Example for a non-existent element
const targetNotFound = 10;
const occurrencesNotFound = countOccurrences(sortedArray, targetNotFound);
console.log(`\nTarget element: ${targetNotFound}`);
console.log(`Number of occurrences: ${occurrencesNotFound}`);
