#!/usr/bin/python

import os
import signal, time

class GracefulKiller:
    def __init__(self):
        self.kill_now = False

        signal.signal(signal.SIGINT, self.exit_gracefully)
        signal.signal(signal.SIGTERM, self.exit_gracefully)

    def exit_gracefully(self, signum, frame):
        self.kill_now = True

killer = GracefulKiller()

while True:
    time.sleep(1)
    print('doing something in a loop ...')
    
    if killer.kill_now:
        break

print('End of the program. I was killed gracefully :)')
