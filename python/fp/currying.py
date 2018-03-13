#!/usr/bin/python

plus = lambda x: lambda y: x + y
print(plus(10)(10))

def mul(x):
    def b(y):
        return y * x
    return b

print(mul(10)(10))
