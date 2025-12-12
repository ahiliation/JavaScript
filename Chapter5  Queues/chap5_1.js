// Import the Denque library
const Denque = require("denque");

// Create a queue
const queue = new Denque();

// Enqueue elements at the end of the queue
queue.push("a");
queue.push("b");
queue.push("c");

console.log("Initial queue:", queue.toArray());

// Dequeue element from the front of the queue
// Removes and returns the first element
console.log("Dequeued:", queue.shift());

// Display queue after removal
console.log("Queue after dequeue:", queue.toArray());
