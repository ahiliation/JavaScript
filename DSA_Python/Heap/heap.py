import heapq
a = [5, 7, 9, 1, 3]

# using heapify to convert list into heap
heapq.heapify(a)

# printing created heap
print ("The created heap is:", a)

# Push 4 into the heap
heapq.heappush(a, 4)

# printing modified heap
print ("The modified heap after push is:", a)

# using heappop() to pop smallest element
print ("The smallest element is:", heapq.heappop(a))
