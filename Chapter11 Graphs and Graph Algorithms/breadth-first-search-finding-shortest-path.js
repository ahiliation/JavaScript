/**
 * Finds the shortest path between start and end nodes using BFS.
 * @param {Object} graph - Adjacency list representation of the graph.
 * @param {string} start - The starting node.
 * @param {string} end - The target destination node.
 * @returns {string[]|null} - Array of nodes representing the path, or null if no path exists.
 */
function findShortestPath(graph, start, end) {
    if (start === end) return [start];

    const queue = [start];
    const visited = new Set([start]);
    const parents = {}; // Stores child -> parent relationship to reconstruct the path

    while (queue.length > 0) {
        const currentNode = queue.shift();

        // Check if we've reached the target
        if (currentNode === end) {
            return reconstructPath(parents, start, end);
        }

        // Explore neighbors
        for (const neighbor of graph[currentNode] || []) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                parents[neighbor] = currentNode; // Map neighbor to current node
                queue.push(neighbor);
            }
        }
    }

    return null; // No path found
}

function reconstructPath(parents, start, end) {
    const path = [];
    let current = end;
    while (current) {
        path.unshift(current);
        if (current === start) break;
        current = parents[current];
    }
    return path;
}

// Example Usage:
const adjList = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
};

console.log(findShortestPath(adjList, 'A', 'F')); // Output: ['A', 'C', 'F']

