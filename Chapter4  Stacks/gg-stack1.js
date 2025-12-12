// Create an empty stack
let stack = [];

// push() to add elements
stack.push("a");
stack.push("b");
stack.push("c");

console.log("Initial stack:");
console.log(stack);

// pop() to remove elements (LIFO)
console.log("\nElements popped from stack:");
console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// Stack is now empty
console.log("\nStack after elements are popped:");
console.log(stack);

// Uncommenting the line below will return undefined since
// stack is empty
// console.log(stack.pop());
