function fibonacciTab(n) {
  if (n <= 1) {
    return n;
  }

  // Initialize an array to store Fibonacci numbers
  const dp = [0, 1];

  // Fill the array iteratively
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// Example usage in Node.js
console.log(`Fibonacci(10) with tabulation: ${fibonacciTab(10)}`); // Output: 55
console.log(`Fibonacci(50) with tabulation: ${fibonacciTab(50)}`);
