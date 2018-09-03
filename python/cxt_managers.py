#!/usr/bin/python3

class Greeting:
    def __init__(self, name):
        self.name = name
        
    def __enter__(self):
        return f'Hello {self.name}'
    
    def __exit__(self, *args):
        pass

with Greeting('Sérgio') as hello:
    print(hello)
