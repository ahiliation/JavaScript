// Create a new Set
const uniqueNumbers = new Set();
// DEBUG  console.log(typeof new Set());
console.log(`Initial Set:`, uniqueNumbers); // Output: Initial Set: Set(0) {}

// Add elements to the set
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
console.log(`After adding elements:`, uniqueNumbers); // Output: After adding elements: Set(3) { 10, 20, 30 }

// Adding a duplicate value does not change the set
uniqueNumbers.add(20);
console.log(`After adding a duplicate (20):`, uniqueNumbers); // Output: After adding a duplicate (20): Set(3) { 10, 20, 30 }

// Check for the existence of an element
console.log(`Has 20?`, uniqueNumbers.has(20)); // Output: Has 20? true
console.log(`Has 40?`, uniqueNumbers.has(40)); // Output: Has 40? false

// Get the size of the set
console.log(`Set size:`, uniqueNumbers.size); // Output: Set size: 3

// Delete an element
uniqueNumbers.delete(20);
console.log(`After deleting 20:`, uniqueNumbers); // Output: After deleting 20: Set(2) { 10, 30 }

// Clear all elements from the set
uniqueNumbers.clear();
console.log(`After clearing the set:`, uniqueNumbers); // Output: After clearing the set: Set(0) {}
