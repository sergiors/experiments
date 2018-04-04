#!/usr/bin/python

try:
    raise NameError
except NameError:
    print('NameError')
except KeyboardInterrupt:
    print('KeyboardInterrupt')
finally:
    print('finally')
