#!/usr/bin/python

from collections import deque

"https://docs.python.org/3.6/tutorial/datastructures.html"

# Using Lists as Queues
queue = deque(["Eric", "John", "Michael"])
queue.append("Terry")
print(queue.popleft())
print(queue.popleft())
