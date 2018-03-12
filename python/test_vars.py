#!/usr/bin/python

x, y, z = 0, 1, 0

if x == 1 or y == 1 or z == 1:
    print('passed, ex1')

if 1 in (x, y, z):
    print('passed, ex2')

# These only test for truthiness:
if x or y or z:
    print('passed, ex3')

# https://docs.python.org/3/library/functions.html#built-in-functions
# https://docs.python.org/3/library/functions.html#any
if any((x, y, z)):
    print('passed, ex4')
