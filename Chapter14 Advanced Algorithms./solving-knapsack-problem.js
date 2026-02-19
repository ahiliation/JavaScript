/**
 * Solves the 0/1 Knapsack problem using dynamic programming to find the maximum value.
 * @param {number[]} values - Array of item values.
 * @param {number[]} weights - Array of item weights.
 * @param {number} capacity - The maximum weight capacity of the knapsack.
 * @returns {number} The maximum value that can be obtained.
 */
function knapsack(values, weights, capacity) {
    console.log(typeof values);
    const n = values.length;
    console.log(values);
    console.log(weights);
    console.log(n);
    // Create a 2D array (table) to store max values for subproblems
    // dp[i][j] will store the maximum value with the first i items and capacity j
    const dp = Array(n + 1).fill(0).map(() => Array(capacity + 1).fill(0));

    // Build the dp table in a bottom-up manner
    for (let i = 1; i <= n; i++) {
        // Current item's weight and value (using 0-based indexing for input arrays)
        const currentWeight = weights[i - 1];
        const currentValue = values[i - 1];

        for (let j = 1; j <= capacity; j++) {
            // If the current item's weight is more than the current capacity 'j',
            // it cannot be included. The value is the same as the row above.
            if (currentWeight > j) {
                dp[i][j] = dp[i - 1][j];
            } else {
    // Otherwise, we take the maximum of two cases:
   // 1. Not including the current item (value from the row above: dp[i-1][j])
  // 2. Including the current item (current value + the max value from the
 //    remaining capacity in the row above: values[i-1] + dp[i-1][j - currentWeight])
                dp[i][j] = Math.max(
                    dp[i - 1][j],
                    currentValue + dp[i - 1][j - currentWeight]
                );
            }
        }
    }

    // The result is the value in the bottom-right corner of the table
    console.log(dp[n-1]);
    return dp[n][capacity];
}

// --- Example Usage in Node.js ---
const values = [60, 100, 120]; // Values of items
const weights = [10, 20, 30]; // Weights of items
const capacity = 50;           // Knapsack capacity

const maxValue = knapsack(values, weights, capacity);
console.log(`The maximum value that can be obtained is: ${maxValue}`); // Output: The maximum value that can be obtained is: 220
