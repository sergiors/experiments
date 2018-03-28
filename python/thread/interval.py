#!/usr/bin/python

import signal
from os import getpid
from threading import Timer
from typing import Callable

class Interval:
    def __init__(self, function: Callable, interval: int):
        self.function = function
        self.interval = interval

        signal.signal(signal.SIGTERM, self.signal_handler)
        signal.signal(signal.SIGINT, self.signal_handler)

        self.start()
    
    def start(self):
        def function():
            self.start()
            self.function()

        self.timer = Timer(self.interval, function)
        self.timer.start()

    def signal_handler(self, signal, frame):
        # print('Received a signal')
        self.timer.cancel()

print(getpid())

interval = Interval(lambda: print('hello'), 0.50)

print('Press Ctrl+C')
