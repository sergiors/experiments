#!/usr/bin/python

numbers = [1, 2, 3, 4, 5, 5]

plus = lambda x: x + 1

print(set(map(plus, numbers)))
