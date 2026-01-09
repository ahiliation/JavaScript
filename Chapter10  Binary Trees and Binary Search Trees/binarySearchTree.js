// Define the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Define the BinarySearchTree class
class BinarySearchTree {
    constructor() {
        // Root of a binary search tree
        this.root = null;
    }

    // Helper function to insert a node (needed for building the tree)
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Main function to remove a node with a given data
    remove(data) {
        // Recurse down the tree to find and remove the node
        this.root = this.removeNode(this.root, data);
	console.log("this.root");
	console.log(this.root);
    }

    // Helper function that recurses and finds the node to remove
    removeNode(node, key) {
        // If the tree is empty or the key is not found
        if (node === null) {
            return null;
        }

        // Navigate the tree to find the node
        if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // Case 1: Node has no left child (leaf or one right child)
            if (node.left === null) {
                return node.right;
            }
            // Case 2: Node has no right child (one left child)
            else if (node.right === null) {
                return node.left;
            }

            // Case 3: Node has two children
            // Find the minimum node in the right subtree (in-order successor)
            const tempNode = this.findMinNode(node.right);
            // Replace the current node's data with the successor's data
            node.data = tempNode.data;
            // Remove the in-order successor from the right subtree
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
    }

    // Helper function to find the minimum node in a tree rooted at node
    findMinNode(node) {
        // Loop down to find the leftmost leaf
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
    
    // Helper function to perform in-order traversal (for verification)
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}

// --- Usage Example ---

const BST = new BinarySearchTree();

// Build a sample tree:
//       15
//      /  \
//     10  25
//    / \  / \
//   7  13 20 30
//  / \      /
// 6   9    28
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22); // Note: 22 was a typo in original diagram, will use 20 below
BST.insert(13);
BST.insert(6);
BST.insert(9);
BST.insert(20);
BST.insert(30);
BST.insert(28);

console.log("Tree before removal (in-order traversal):");
BST.inorder(BST.root);

console.log("\nRemoving node 10 (has two children)...");
BST.remove(10); // Case 3: Removing a node with two children

console.log("Tree after removing 10:");
BST.inorder(BST.root);

console.log("\nRemoving leaf node 28...");
BST.remove(28); // Case 1: Removing a leaf node

console.log("Tree after removing 28:");
BST.inorder(BST.root);

console.log("\nRemoving node 7 (has one child)...");
BST.remove(7); // Case 2: Removing a node with one child

console.log("Tree after removing 7:");
BST.inorder(BST.root);
