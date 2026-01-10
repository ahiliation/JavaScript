class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to build a sample binary tree
function buildTree() {
  const root = new Node(10);
  root.left = new Node(5);
  root.right = new Node(15);
  root.left.left = new Node(3);
  root.left.right = new Node(7);
  root.right.right = new Node(18);
  return root;
}

// --- Depth-First Traversals (DFS) ---

// In-order traversal: Left, Root, Right
function inOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    result.push(node.value);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// Pre-order traversal: Root, Left, Right
function preOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (node === null) return;
    result.push(node.value);
    traverse(node.left);
    traverse(node.right);
  }
  traverse(root);
  return result;
}

// Post-order traversal: Left, Right, Root
function postOrderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (node === null) return;
    traverse(node.left);
    traverse(node.right);
    result.push(node.value);
  }
  traverse(root);
  return result;
}

// --- Breadth-First Traversal (BFS) ---

// Level-order traversal: Level by level using a queue
function levelOrderTraversal(root) {
  const result = [];
  const queue = [];
  if (root === null) return result;

  queue.push(root);
  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue a node
    result.push(node.value);

    if (node.left !== null) {
      queue.push(node.left); // Enqueue left child
    }
    if (node.right !== null) {
      queue.push(node.right); // Enqueue right child
    }
  }
  return result;
}

// Example usage:
const treeRoot = buildTree();
console.log("In-order Traversal:", inOrderTraversal(treeRoot)); // Output: [ 3, 5, 7, 10, 15, 18 ] (sorted for a BST)
console.log("Pre-order Traversal:", preOrderTraversal(treeRoot)); // Output: [ 10, 5, 3, 7, 15, 18 ]
console.log("Post-order Traversal:", postOrderTraversal(treeRoot)); // Output: [ 3, 7, 5, 18, 15, 10 ]
console.log("Level-order Traversal:", levelOrderTraversal(treeRoot)); // Output: [ 10, 5, 15, 3, 7, 18 ]
