import bisect  
a = [2, 4, 6, 8, 10]

# Linear search using 'in'
print(6 in a)       

# Linear search using 'count'
print(a.count(7) > 0)   

# Binary search using bisect
pos = bisect.bisect_left(a, 8)
print("Found at index:", pos)
