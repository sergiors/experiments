#!/usr/bin/python

"""str"""
print(type('hello'))

"""int"""
print(type(1))

"""float"""
print(type(1.0))


# https://docs.python.org/3.6/tutorial/datastructures.html

"""list
"""
print(type([1, 2, 3, 4])) 

"""tuple (immutable list)
Though tuples may seem similar to lists, they are often used in different
situations and for different purposes.
"""
print(type((1, 2, 3, 4)))


"""dict
Dictionaries are sometimes found in other languages as “associative memories” or “associative arrays”.
It's best to think of a dictionary as an unordered set of key: value pairs.

strings and numbers can always be keys
the keys are unique
"""
print(type({'x': 1, 'y': 1}))
print(type(dict(x=1, y=1)))
print(type({}))

"""set
A set is an unordered collection with no duplicate elements.
"""
print(type({1, 2, 3}))
print(type(set([1, 2, 3])))
