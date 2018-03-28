#!/usr/bin/python

# https://docs.python.org/3.6/tutorial/controlflow.html#unpacking-argument-lists
# ( *args and **kwargs )
# kwarg == keyword argument

def f(x, y, z):
    return [x, y, z]

dict_vec = {'x': 1, 'y': 0, 'z': 2}
tuple_vec = (1, 0, 2)
t = (3, 4)
d = {'z': 4, 'y': 3, 'x': 2}
dy = {'y': 3}
assert tuple_vec == (1, 0, 2)

assert f(*tuple_vec) == [1, 0, 2]

# dictionaries can be "unpacked" by using the double asterisk notation
assert f(**dict_vec) == [1, 0, 2]

# pay attention for the dict key
assert f(**d) == [2, 3, 4]

assert f(2, z=10, **dy) == [2, 3, 10]
assert f(z=0, y=2, x=2) == [2, 2, 0]
