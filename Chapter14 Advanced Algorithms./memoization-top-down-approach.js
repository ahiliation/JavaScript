function fibonacciMemo(n, memo = {}) {
    if (n in memo) {
	console.log(n in memo);
//	console.log(memo);
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }

  // Compute and store the result in the memo object
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// Example usage in Node.js
console.log(`Fibonacci(10) with memoization: ${fibonacciMemo(10)}`); // Output: 55
console.log(`Fibonacci(50) with memoization: ${fibonacciMemo(50)}`); // Computes large numbers efficiently
