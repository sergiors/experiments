#!/usr/bin/python3

class Greeting:
    def __init__(self, f):
        self.f = f
    
    def __call__(self, *args):
        return f'Hello {self.f(*args)}'


@Greeting
def upper(name: str):
    return name.upper()


print(upper('Sérgio'))
