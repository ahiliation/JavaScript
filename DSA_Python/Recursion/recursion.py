def fact(n):
    if n == 0:
        return 1
    return  n * fact(n - 1)

print(fact(5))


# https://www.codecademy.com/forum_questions/503fd13491601700020144f2



"""
# Non recursive algorithm
n = 5
r = 1
while True:
    if n == 0:
        print(r)
        exit(0)
    r = r * n
    n = n - 1
"""

