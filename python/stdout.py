import sys
import datetime

print('dive in')

fsock = open('out.log', 'a')
sys.stdout = fsock

print(f'[{datetime.datetime.now()}] the message will be logged instead of displayed')

fsock.close()
