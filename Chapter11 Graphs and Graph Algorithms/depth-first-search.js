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


function depthFirstSearchRecursive(startNode) {
    const result = [];
    const visited = {};
    const adjacencyList = graph.adjacencyList;

    (function dfs(vertex) {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);

        for (const neighbor of adjacencyList.get(vertex)) {
            if (!visited[neighbor]) {
                dfs(neighbor);
            }
        }
    })
    (startNode); // Immediately invoke the inner function with the start node

    return result;
}

// Example: Search the graph starting from 'A'
console.log('DFS Traversal (Recursive):', depthFirstSearchRecursive('A'));
// Output might be: DFS Traversal (Recursive): [ 'A', 'B', 'E', 'F', 'D', 'C' ]
