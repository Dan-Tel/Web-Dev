from math import *

b = input()
a = 0

for i in range(len(b)):
  if (int(b[i]) == 1):
    a |= (1 << (len(b) - i - 1))

print(a)
