class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Initially set to null
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a new node to the end of the list
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            // If the list is empty, the new node is the head and tail, 
            // and points to itself to form a circle
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head;
        } else {
            // Link the current tail to the new node, 
            // the new node to the head, and update the tail
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    // Traverse and print the list elements
    display() {
        if (!this.head) {
            console.log("Circular linked list is empty.");
            return;
        }

        let current = this.head;
	// console.log(current);
        const values = [];
        do {
            values.push(current.value);
            current = current.next;
	  //  console.log(current.next);
        } while (current !== this.head);
        
        console.log(values.join(' -> ') + ' -> (Head)');
    }
}

// Usage example
const list = new CircularLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

list.display(); // Output: 10 -> 20 -> 30 -> 40 -> (Head)
