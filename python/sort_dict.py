#!/usr/bin/python

from operator import itemgetter

xs = {'a': 4, 'b': 3, 'c': 2, 'd': 1}

# print(type(xs.items()))
# print(type(xs))
# print(sorted(xs.items(), key=lambda x: x[1]))
print(sorted(xs.items(), key=itemgetter(1)))
