#!/usr/bin/python

# https://docs.python.org/3.6/tutorial/controlflow.html#function-annotations
# https://www.python.org/dev/peps/pep-0484
# https://docs.python.org/3.6/reference/compound_stmts.html#function
# Functions are first-class objects.

def f(ham: str, eggs: str='eggs') -> str:
    print('Annotations:', f.__annotations__)
    print('Arguments:', ham, eggs)

    return ham + ' and ' + eggs

assert f('spam') == 'spam and eggs'
