#!/usr/bin/python

class Pipe:
    def __init__(self, function):
        self.function = function

    def __ror__(self, other):
        return self.function(other)

@Pipe
def head(iterable):
    return iterable[0]

@Pipe
def last(iterable):
    return iterable[-1]

@Pipe
def init(iterable):
    return iterable[:-1]

@Pipe
def tail(iterable):
    return iterable[1:]

print('sergio' | head)
print('sergio' | last)
print('sergio' | init)
print('sergio' | tail)

print([1, 2, 3] | head)
print([1, 2, 3] | last)
print([1, 2, 3] | init)
print([1, 2, 3] | tail)
