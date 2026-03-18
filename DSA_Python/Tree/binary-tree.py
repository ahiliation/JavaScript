# Structure of a Binary Tree Node
class Node:
    def __init__(self, v):
        self.data = v
        self.left = None
        self.right = None
        
def printInorder(root):
  #  print("debug", root)
    if(root == None):
        return
    printInorder(root.left)
    print(root.left)
    print(root.data, end = " ")
    printInorder(root.right)
    print(root.right)
    
if __name__ == '__main__':
    
    # Construct Binary Tree of 4 nodes
    root = Node(1)
    root.left = Node(2)
    root.right = Node(3)
    root.left.left = Node(4)
    
    printInorder(root)
print("\n")
