/**
 * Recursive solution for the 0/1 Knapsack Problem
 * @param {number} capacity - Maximum weight capacity
 * @param {number[]} weights - Array of item weights
 * @param {number[]} values - Array of item values
 * @param {number} n - Number of items to consider
 * @returns {number} - Maximum value
 */
function knapsackRecursive(capacity, weights, values, n) {
    // Base Case: No capacity left or no items left
    if (n === 0 || capacity === 0) {
        return 0;
    }

    // If weight of the current item is more than capacity,
    // this item cannot be included
    if (weights[n - 1] > capacity) {
        return knapsackRecursive(capacity, weights, values, n - 1);
    }

    // Return the maximum of two cases:
    // 1. Current item included
    // 2. Current item not included
    else {
        const includeItem = values[n - 1] + knapsackRecursive(capacity - weights[n - 1], weights, values, n - 1);
        const excludeItem = knapsackRecursive(capacity, weights, values, n - 1);
        return Math.max(includeItem, excludeItem);
    }
}

// --- Example Usage ---
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
const n = values.length;

console.log("Maximum value:", knapsackRecursive(capacity, weights, values, n));
// Output: Maximum value: 220
