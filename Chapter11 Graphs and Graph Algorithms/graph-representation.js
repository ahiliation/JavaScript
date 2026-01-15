class Graph {
    constructor() {
        // Map stores vertices as keys and an array of neighbors as values
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        // Assuming an undirected graph for simplicity
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1);
        }
    }
}

// Example usage:
const graph = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (const vertex of vertices) {
    graph.addVertex(vertex);
}

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'E');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
