class Node {
    constructor(data) {
        this.data = data;
        this.left = null; // Reference to the left child (smaller values)
        this.right = null; // Reference to the right child (larger values)
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; // The top of the tree
    }

    // Helper method to insert a new node recursively
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else { // newNode.data >= node.data (handling duplicates is a design choice)
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Method to insert a new value into the BST
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode; // If empty, the new node becomes the root
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Method to search for a value in the BST
    search(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node; // Value found
        }
    }
    
    // Additional methods like `remove`, `findMinNode`, and traversals (inorder, preorder, postorder) can be added.
}







// Create a BST instance
const bst = new BinarySearchTree();

// Insert elements
bst.insert(15);
bst.insert(9);
bst.insert(21);
bst.insert(8);
bst.insert(11);
bst.insert(25);

console.log("Root node data:", bst.root.data); // Output: Root node data: 15

// Search for a value
const foundNode = bst.search(bst.root, 11);
console.log("Found node data:", foundNode.data); // Output: Found node data: 11

const notFoundNode = bst.search(bst.root, 100);
console.log("Found node data (not found case):", notFoundNode); // Output: Found nod data (not found case): null
