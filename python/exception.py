#!/usr/bin/python

# https://docs.python.org/2/tutorial/errors.html#defining-clean-up-actions

try:
    raise NameError
except NameError:
    print('NameError')
except KeyboardInterrupt:
    print('KeyboardInterrupt')
finally:
    print('finally')

try:
    pass
finally:
    print('A finally clause is always executed before leaving the try statement, whether an exception has occurred or not')
