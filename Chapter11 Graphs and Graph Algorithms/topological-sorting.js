/**
 * Performs a topological sort on a graph.
 * @param {Object} graph - An adjacency list (e.g., { 'A': ['B', 'C'], 'B': ['D'] })
 * @returns {Array|null} - Sorted nodes or null if a cycle exists.
 */
function topologicalSort(graph) {
    const inDegree = {};
    const nodes = Object.keys(graph);
  //  console.log(nodes);
    // Initialize in-degrees to 0
    nodes.forEach(node => {
//	console.log(node);
        inDegree[node] = 0;
    });

    // Calculate in-degrees for all nodes
    nodes.forEach(node => {
        graph[node].forEach(neighbor => {
           //  console.log(neighbor)
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
        });
    });

    // Find all nodes with 0 in-degree
    const queue = nodes.filter(node => inDegree[node] === 0);
   //  console.log(queue);
    const result = [];

    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);

        // Decrease in-degree for all neighbors
        (graph[current] || []).forEach(neighbor => {
            inDegree[neighbor]--;
            // If in-degree becomes 0, add to queue
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }

    // If result has fewer nodes than the graph, there is a cycle
    return result.length === nodes.length ? result : null;
}

// Example Usage:
const tasks = {
    "Preheat Oven": ["Bake Cake"],
    "Mix Ingredients": ["Pour into Pan"],
    "Pour into Pan": ["Bake Cake"],
    "Bake Cake": ["Eat Cake"],
    "Eat Cake": []
};

console.log("Task Order:", topologicalSort(tasks));

