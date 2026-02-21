/*
e.g., USD, EUR, etc.).
 *
 * @param {number[]} coins - An array of coin denominations, assumed to be sorted in descending order.
 * @param {number} amount - The total amount to make change for.
 * @returns {object} An object showing the count of each coin used.
 */
function greedyCoinChange(coins, amount) {
  // It is crucial that the coins are sorted in descending order for the greedy approach to work correctly.
  // If not already sorted, add: coins.sort((a, b) => b - a);
  const change = {};
  let remainingAmount = amount;

  for (const coin of coins) {
    if (remainingAmount >= coin) {
      const count = Math.floor(remainingAmount / coin);
	change[coin] = count;
 // debug console.log(change);
      remainingAmount -= count * coin;
    }

    if (remainingAmount === 0) {
      break; // Stop if the amount is fully covered
    }
  }

  if (remainingAmount > 0) {
    console.log(`Note: Cannot make exact change for remaining amount of ${remainingAmount} with the given coins.`);
  }

  return change;
}

// Example Usage:
const denominations = [25, 10, 5, 1]; // Assumed sorted descending (e.g., US currency)
const targetAmount = 63;
const result = greedyCoinChange(denominations, targetAmount);

console.log(`Change for ${targetAmount} cents:`, result);
// Output for 63 cents: Change for 63 cents: { '25': 2, '10': 1, '1': 3 } (2x25, 1x10, 3x1)
