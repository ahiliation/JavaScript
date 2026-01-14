class Graph {
  constructor() {
    // Adjacency list: Key = Node, Value = Array of neighbors
    this.adjacencyList = new Map();
  }

  // Add a new node to the graph
  addNode(node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  // Add an edge between two existing nodes
  addEdge(node1, node2) {
      if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
	this.adjacencyList.get(node1).push(node2);
	  this.adjacencyList.get(node2).push(node1); // Smmetric for undirected graph
	  console.log(this.adjacencyList);
    }
  }

  // Display the graph structure
  printGraph() {
    for (let [node, neighbors] of this.adjacencyList) {
      console.log(`${node} -> ${neighbors.join(', ')}`);
    }
  }
}

// Usage
const myGraph = new Graph();
myGraph.addNode("A");
myGraph.addNode("B");
myGraph.addNode("C");
myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.printGraph(); 
// Output: 
// A -> B, C
// B -> A
// C -> A
