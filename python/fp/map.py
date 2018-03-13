#!/usr/bin/python

from operator import add

numbers = [1, 2, 3, 4, 5, 5]

plus = lambda x: x + 1

print(list(map(plus, numbers)))
print(list(map(lambda x: add(10, x), numbers)))
