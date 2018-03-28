#!/usr/bin/python

import signal
import sys

def signal_handler(signal, frame):
    print('You pressed Ctrl+C!')
    sys.exit()

signal.signal(signal.SIGINT, signal_handler)
print('Press Ctrl+C')

# Cause the process to sleep until a signal is received;
signal.pause()
