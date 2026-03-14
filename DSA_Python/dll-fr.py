class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

def insert_at_beginning(head, data):
    # 1. Create a new node
    new_node = Node(data)
    
    # 2. Make the new node point to the current head
    new_node.next = head
    
    # 3. If the list is not empty, update the old head's back pointer
    if head:
        head.prev = new_node
        
    # 4. Return the new node (it is now the first node)
    return new_node
