# Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

if __name__=='__main__':

    # Create a linked list
    # 10 -> 20 -> 30
    head = Node(10)
    head.next = Node(20)
    head.next.next = Node(30)
    
    # Print the list
    temp = head
    while temp != None:
        print(temp.data, end = " ")
        temp = temp.next

print("\n")
